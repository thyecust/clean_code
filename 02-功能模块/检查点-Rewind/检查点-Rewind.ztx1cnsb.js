// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 68 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { K, ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { RS } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { y8 } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { oe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { fn, Fo, execFileNoThrowWithCwd } from "../Git-Worktree/chunk-9ys1bnqr.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { nke, wb } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { Pt, findGitRoot, gitExe, getGitDir, isCurrentDirectoryBareGitRepo } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { X_, zE, RC } from "../Teammates团队/chunk-g6nvp9mm.js";
import { isPolicyAllowed } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { BFt, O3n, Tln } from "../../01-核心基础设施/共享小工具-未细化/chunk-pkw2prc7.js";
import {
  appendFile,
  lstat,
  mkdir,
  readFile,
  readdir,
  rm as pt,
} from "fs/promises";
import { homedir } from "os";
import { isAbsolute, join as s, relative } from "path";
var v = ".claude/RESUME.md",
  O = "refs/claude/checkpoint-",
  h = 30000,
  _t = 25000,
  wt = 2147483648,
  tt = 500;
function b(o) {
  let e = o.replace(
    /[\x00-\x1f\x7f-\x9f\u061c\u200b-\u200f\u2028-\u202e\u2066-\u2069\ufeff]+/g,
    " ",
  );
  return e.length > tt ? `${oe(e, tt)}\u2026` : e;
}
var Rt = 1209600;
async function performRateLimitCheckpoint(o) {
  let e = O3n();
  if (e !== null) return e;
  BFt(null);
  let r = (async () => {
    let a = o.todos;
    if (a.length === 0 && X_())
      try {
        a = (await RC(zE())).map((l) => ({
          content: l.subject,
          status: l.status,
          activeForm: l.activeForm ?? l.subject,
        }));
      } catch {}
    return kt({ todos: a, trigger: o.trigger });
  })();
  Tln(r);
  let n;
  try {
    n = await r;
  } finally {
    Tln(null);
  }
  if ((BFt(n), n.committed))
    (logFeatureOk("usage_limit_checkpoint_commit", { trigger: fromEnum(o.trigger) }),
      i("tengu_rl_checkpoint_a1_shown", {}));
  else
    logFeatureSad("usage_limit_checkpoint_commit", n.skipReason, { trigger: fromEnum(o.trigger) });
  return n;
}
function S(o, e) {
  if (o === e) return !0;
  let r = relative(e, o);
  return r !== "" && !r.startsWith("..") && !isAbsolute(r);
}
async function kt(o) {
  if (ke()) return { committed: !1, skipReason: "non_interactive" };
  if (Pt()) return { committed: !1, skipReason: "remote_workspace" };
  if (!isPolicyAllowed("allow_local_checkpoint_commit"))
    return { committed: !1, skipReason: "policy" };
  let e = findGitRoot(Q());
  if (e === null) return { committed: !1, skipReason: "not_git" };
  if (isCurrentDirectoryBareGitRepo() !== !1) return { committed: !1, skipReason: "bare_repo" };
  let r = RS(e),
    n = RS(homedir());
  if (r === null || n === null || S(n, r))
    return { committed: !1, skipReason: "gitroot_uncontained" };
  let a = K(),
    d = a.slice(0, 8),
    l = `${O}${d}`,
    c = [...fn],
    f;
  try {
    let m = await getGitDir(e);
    if (m === null) return { committed: !1, skipReason: "not_git" };
    let A = RS(m);
    if (A === null || !S(A, r))
      return { committed: !1, skipReason: "gitdir_uncontained" };
    if (
      (await lstat(s(m, "commondir")).catch((t) => {
        if (t.code === "ENOENT") return null;
        throw t;
      })) !== null
    )
      return { committed: !1, skipReason: "gitdir_uncontained" };
    for (let t of [
      "objects",
      "refs",
      s("refs", "claude"),
      "logs",
      s("logs", "refs"),
      s("logs", "refs", "claude"),
      "packed-refs",
      "reftable",
    ]) {
      let p = await lstat(s(m, t)).catch((R) => {
        if (R.code === "ENOENT") return null;
        throw R;
      });
      if (p !== null && p.isSymbolicLink())
        return { committed: !1, skipReason: "gitdir_uncontained" };
    }
    let rt = await readdir(s(m, "objects"), { withFileTypes: !0 }).catch((t) => {
      if (t.code === "ENOENT") return [];
      throw t;
    });
    for (let t of rt)
      if (t.isSymbolicLink())
        return { committed: !1, skipReason: "gitdir_uncontained" };
    let w = Fo({
      GIT_COMMON_DIR: m,
      GIT_WORK_TREE: e,
      GIT_ALLOW_PROTOCOL: "none",
      GIT_NO_LAZY_FETCH: "1",
      GIT_NO_REPLACE_OBJECTS: "1",
      GIT_TERMINAL_PROMPT: "0",
    });
    if (
      (await lstat(s(m, "info", "sparse-checkout")).catch((t) => {
        if (t.code === "ENOENT") return null;
        throw t;
      })) !== null
    ) {
      let t = await execFileNoThrowWithCwd(
        gitExe(),
        [...c, "config", "--type=bool", "--get", "core.sparseCheckout"],
        { cwd: e, env: w, timeout: h },
      );
      if (t.code === 0 && t.stdout.trim() === "true")
        return { committed: !1, skipReason: "sparse_checkout" };
    }
    let nt = await lstat(s(m, "lfs")).catch((t) => {
        if (t.code === "ENOENT") return null;
        throw t;
      }),
      F = s(e, ".gitattributes"),
      T = await lstat(F).catch((t) => {
        if (t.code === "ENOENT") return null;
        throw t;
      }),
      st =
        T !== null && T.isFile() && T.size <= 65536
          ? await readFile(F, "utf-8").catch(() => "")
          : "";
    if (nt !== null || /\bfilter\s*=\s*lfs\b/.test(st))
      return { committed: !1, skipReason: "content_filters" };
    if (await Et(m))
      return { committed: !1, skipReason: "sequencer_in_progress" };
    let G = await execFileNoThrowWithCwd(gitExe(), [...c, "rev-parse", "--verify", "HEAD"], {
      cwd: e,
      env: w,
      timeout: h,
    });
    if (G.code !== 0) return { committed: !1, skipReason: "no_head" };
    let L = G.stdout.trim(),
      D = (t, p) =>
        execFileNoThrowWithCwd(gitExe(), [...fn, ...t], {
          cwd: p.cwd,
          env: w,
          input: p.input,
          timeout: h,
        });
    f = s(m, `claude-checkpoint-index.${process.pid}`);
    let k = { ...w, GIT_INDEX_FILE: f };
    if (
      (await execFileNoThrowWithCwd(gitExe(), [...c, "read-tree", L], { cwd: e, env: k, timeout: h }))
        .code !== 0
    )
      return { committed: !1, skipReason: "git_error" };
    let [M, H] = await Promise.all([
      execFileNoThrowWithCwd(gitExe(), [...c, "ls-files", "-z", "--cached"], {
        cwd: e,
        env: k,
        maxBuffer: 33554432,
        timeout: h,
      }),
      execFileNoThrowWithCwd(gitExe(), [...c, "ls-files", "-z", "-o", "--exclude-standard"], {
        cwd: e,
        env: k,
        maxBuffer: 33554432,
        timeout: h,
      }),
    ]);
    if (M.code !== 0 || H.code !== 0)
      return { committed: !1, skipReason: "git_error" };
    let j = M.stdout.split("\x00").filter((t) => t.length > 0),
      B = H.stdout.split("\x00").filter((t) => t.length > 0);
    if (j.length + B.length > _t)
      return { committed: !1, skipReason: "too_large" };
    let I = [],
      E = [],
      z = 0,
      J = async (t, p) => {
        if (
          t.includes(`
`) ||
          t.includes("\r") ||
          t.includes('"') ||
          t.includes("\\")
        )
          return;
        if (t.split("/").some((C) => C === "." || C === "..")) return;
        let R;
        try {
          R = await lstat(s(e, t));
        } catch (C) {
          if (p && W(C)) I.push(t);
          return;
        }
        if (!R.isFile()) return;
        let Z = RS(s(e, t));
        if (Z === null || !S(Z, r)) return;
        z += R.size;
        let dt = (R.mode & 64) !== 0 ? "100755" : "100644";
        E.push({ path: t, mode: dt });
      };
    if (
      (await Promise.all([
        ...j.map((t) => J(t, !0)),
        ...B.map((t) => J(t, !1)),
      ]),
      z > wt)
    )
      return { committed: !1, skipReason: "too_large" };
    let N = s(e, ".claude"),
      P = !y8(N),
      U = yt({ sessionId: a, ref: l, trigger: o.trigger, todos: o.todos });
    try {
      if (P) await nke(e, N);
      (await mkdir(N, { recursive: !0 }),
        await wb(s(e, ".claude", "RESUME.md"), U, {
          encoding: "utf-8",
          allowSymlink: !P,
          checkParentDir: P,
        }));
    } catch {
      return { committed: !1, skipReason: "resume_write_refused" };
    }
    let X = await execFileNoThrowWithCwd(gitExe(), [...c, "hash-object", "-w", "--stdin"], {
      cwd: e,
      env: w,
      input: U,
      timeout: h,
    });
    if (X.code !== 0) return { committed: !1, skipReason: "git_error" };
    let at = X.stdout.trim(),
      x = [];
    if (E.length > 0) {
      let t = await execFileNoThrowWithCwd(
        gitExe(),
        [...c, "hash-object", "-w", "--no-filters", "--stdin-paths"],
        {
          cwd: e,
          env: w,
          input:
            E.map((p) => p.path).join(`
`) +
            `
`,
          maxBuffer: 8388608,
          timeout: 4 * h,
        },
      );
      if (t.code !== 0) return { committed: !1, skipReason: "git_error" };
      if (
        ((x = t.stdout
          .split(
            `
`,
          )
          .filter((p) => p.length > 0)),
        x.length !== E.length)
      )
        return { committed: !1, skipReason: "git_error" };
    }
    let ct = [
      ...E.map((t, p) => `${t.mode} ${x[p]}	${t.path}`),
      `100644 ${at}	${v}`,
    ].join(`
`);
    if (
      (
        await execFileNoThrowWithCwd(gitExe(), [...c, "update-index", "--add", "--index-info"], {
          cwd: e,
          env: k,
          input:
            ct +
            `
`,
          timeout: h,
        })
      ).code !== 0
    )
      return { committed: !1, skipReason: "git_error" };
    if (I.length > 0) {
      if (
        (
          await execFileNoThrowWithCwd(
            gitExe(),
            [...c, "update-index", "--force-remove", "-z", "--stdin"],
            { cwd: e, env: k, input: I.join("\x00"), timeout: h },
          )
        ).code !== 0
      )
        return { committed: !1, skipReason: "git_error" };
    }
    let Y = await execFileNoThrowWithCwd(gitExe(), [...c, "write-tree"], {
      cwd: e,
      env: k,
      timeout: h,
    });
    if (Y.code !== 0) return { committed: !1, skipReason: "git_error" };
    let ut = Y.stdout.trim(),
      q = await execFileNoThrowWithCwd(
        gitExe(),
        [
          ...c,
          "-c",
          "user.name=Claude Code",
          "-c",
          "user.email=noreply@anthropic.com",
          "-c",
          "commit.gpgsign=false",
          "commit-tree",
          ut,
          "-p",
          L,
          "-m",
          `WIP: Claude Code rate-limit checkpoint (${d})`,
        ],
        { cwd: e, env: w, timeout: h },
      );
    if (q.code !== 0) return { committed: !1, skipReason: "git_error" };
    let V = q.stdout.trim();
    if (
      (await lstat(s(m, "commondir")).catch((t) => {
        if (t.code === "ENOENT") return null;
        throw t;
      })) !== null
    )
      return { committed: !1, skipReason: "gitdir_uncontained" };
    if (
      (
        await execFileNoThrowWithCwd(
          gitExe(),
          [
            ...c,
            "-c",
            "core.logAllRefUpdates=false",
            "update-ref",
            "--no-deref",
            l,
            V,
          ],
          { cwd: e, env: w, timeout: h },
        )
      ).code !== 0
    )
      return { committed: !1, skipReason: "git_error" };
    return (
      await Ct(e, D),
      await Tt(e, l, D).catch(() => {}),
      { committed: !0, ref: l, resumePath: v, commitSha: V }
    );
  } catch {
    return { committed: !1, skipReason: "git_error" };
  } finally {
    if (f !== void 0) await pt(f, { force: !0 }).catch(() => {});
  }
}
async function Et(o) {
  return (
    await Promise.all(
      [
        "MERGE_HEAD",
        "CHERRY_PICK_HEAD",
        "REVERT_HEAD",
        "BISECT_LOG",
        "rebase-merge",
        "rebase-apply",
      ].map((r) =>
        lstat(s(o, r)).then(
          () => !0,
          () => !1,
        ),
      ),
    )
  ).includes(!0);
}
async function Ct(o, e) {
  let r = await e(["rev-parse", "--git-path", "info/exclude"], { cwd: o });
  if (r.code !== 0) return;
  let n = isAbsolute(r.stdout.trim()) ? r.stdout.trim() : s(o, r.stdout.trim());
  for (let c of [s(n, ".."), n])
    try {
      let f = await lstat(c);
      if (f.isSymbolicLink()) return;
      if (!f.isFile() && !f.isDirectory()) return;
      if (c === n && f.isFile() && f.size > 65536) return;
    } catch {}
  let a = await readFile(n, "utf-8").catch(() => ""),
    d = `/${v}`;
  if (a.split(/\r?\n/).includes(d)) return;
  await mkdir(s(n, ".."), { recursive: !0 }).catch(() => {});
  let l =
    a.length > 0 &&
    !a.endsWith(`
`)
      ? `
`
      : "";
  await appendFile(
    n,
    `${l}${d}
`,
    "utf-8",
  ).catch(() => {});
}
async function Tt(o, e, r) {
  let n = await r(
    [
      "for-each-ref",
      "--format=%(refname)%00%(committerdate:unix)%00%(symref)",
      `${O}*`,
    ],
    { cwd: o },
  );
  if (n.code !== 0) return;
  let a = Math.floor(Date.now() / 1000);
  for (let d of n.stdout.split(`
`)) {
    let [l, c, f] = d.split("\x00");
    if (
      l === void 0 ||
      l === e ||
      !l.startsWith(O) ||
      (f !== void 0 && f.length > 0)
    )
      continue;
    let m = a - Number(c);
    if (!Number.isFinite(m) || m < Rt) continue;
    await r(["update-ref", "--no-deref", "-d", l], { cwd: o });
  }
}
function yt(o) {
  let e = [
    "# Claude Code \u2014 resume checkpoint",
    "",
    `Session: ${o.sessionId}`,
    `Written: ${new Date().toISOString()}`,
    `Trigger: ${o.trigger === "near_limit" ? "near-limit" : "rate-limited"}`,
    `Ref with your in-progress files: ${o.ref}`,
    "",
    "## To resume",
    "",
    `    claude --resume ${o.sessionId}`,
    "",
    "(or open Claude Code in this directory and run /resume)",
    "",
    "## Plan (from TodoWrite state)",
    "",
  ];
  if (o.todos.length === 0)
    e.push(
      "No task list was active; see transcript via the resume command above.",
    );
  else {
    let r, n;
    for (let a of o.todos)
      if (a.status === "completed") e.push(`- [x] ${b(a.content)}`);
      else if (a.status === "in_progress") {
        let d = b(a.activeForm);
        (e.push(`- [>] ${d}    \u2190 current step`), (n ??= d));
      } else {
        let d = b(a.content);
        (e.push(`- [ ] ${d}`), (r ??= d));
      }
    (e.push("", "## What's next", ""),
      e.push(
        r !== void 0
          ? r
          : n !== void 0
            ? `finish: ${n}`
            : "All tasks completed.",
      ));
  }
  return (
    e.push(
      "",
      "---",
      "",
      "Don't want these changes? Resume this session (above), then run",
      "`/rewind` to roll back the turn's tool edits (bash-made changes",
      `excluded). ${o.ref} holds a full snapshot until this session's`,
      "next checkpoint, or for up to ~2 weeks.",
      "",
    ),
    e.join(`
`)
  );
}
export { performRateLimitCheckpoint };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 178 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie, po, CS, An, gp, jf } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { Z, kt } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { tl } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { bc, getGlobalClaudeFile, env as a, antEnv } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { OAUTH_GLOBAL_FILE_SUFFIXES, fileSuffixForOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { R, l, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, z } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { oe, ft } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { formatDuration } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { Bt, Mn, Wl } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Bs } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { execFileNoThrowWithCwd } from "../Git-Worktree/chunk-9ys1bnqr.js";
import { dy } from "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import { jcr, On } from "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import { Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { fi, _W } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { n_ } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { ot, rL } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { Fr } from "../工具Bash-Shell/chunk-4pap8y5n.js";
import { getProxyFetchOptions, configureGlobalAgents } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { provenSameProcessAsync, getProcessStartTimeAsync } from "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import { b2, Lg, parseRuleForSandbox, resolvePathPatternForSandboxAt, resolveSandboxFilesystemPathAt } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Gj, $d, ome, patternWithRootFor } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { bl } from "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import { fc } from "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../自动更新-安装/chunk-brx72pf1.js";
import { q4 } from "../自动更新-安装/chunk-2g5h49pk.js";
import {
  Pae,
  zYt,
  P_e,
  Yxe,
  Kje,
  fot,
  mot,
  T8,
  VYt,
  O_e,
  Xje,
  _Nn,
  yNn,
  SNn,
  bNn,
  got,
  hot,
  wNn,
  TNn,
  ENn,
  _ot,
  yot,
  Jxe,
  CNn,
  KYt,
  vNn,
} from "./chunk-cgmv5fe7.js";
import { serverToolsValueNamesSelfHostedRunnerTool, sanitizeServerClaudeCodeArgs } from "../../01-核心基础设施/共享小工具-未细化/chunk-02q6xmh3.js";
import { XYt } from "./chunk-vanzsjh3.js";
import { Kot } from "./chunk-t1eaahr7.js";
import { Qat } from "../../01-核心基础设施/共享小工具-未细化/chunk-wmwgjjnt.js";
import { PDt } from "../../01-核心基础设施/共享小工具-未细化/chunk-274ae0qv.js";
import {
  cLt,
  Vlt,
  gF,
  g7,
  O2n,
  frn,
  Klt,
  mrn,
  grn,
  uLt,
  dLt,
  $3e,
  hrn,
  _rn,
  D2n,
  L2n,
  M2n,
  Xlt,
} from "../Git-Worktree/chunk-33y3h2sy.js";
import { uu } from "../../01-核心基础设施/共享小工具-未细化/chunk-bgwm3fhf.js";
import { idt, bF } from "../../01-核心基础设施/共享小工具-未细化/chunk-vthq2yn2.js";
import { ml } from "../../01-核心基础设施/共享小工具-未细化/chunk-vdg9aytt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j86cs2ar.js";
import { Xi } from "../Teammates团队/chunk-z2t8b9yc.js";
import { Uy } from "../../01-核心基础设施/共享小工具-未细化/chunk-sp33tdvc.js";
import { AP, FR, vRe, H5 } from "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import { gS } from "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import { Zie, wxt, nXt, Lnt, Mhe } from "../../01-核心基础设施/共享小工具-未细化/chunk-h1jrnver.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { G, Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { execFileSync } from "child_process";
import { createWriteStream, fchmod } from "fs";
import {
  lstat as pa,
  mkdir as $r,
  readFile as Ks,
  rm as nr,
  writeFile as ha,
} from "fs/promises";
import { homedir as Ar, hostname } from "os";
import { dirname as ma, join as mn, resolve as rr } from "path";
import { access, constants as Dr, mkdir as ii } from "fs/promises";
var oi = 1e4;
async function Pr(e, t = oi) {
  try {
    await uu(
      ii(e, { recursive: !0 }).then(() => access(e, Dr.W_OK | Dr.X_OK)),
      t,
      `base directory check for ${e}`,
    );
  } catch (n) {
    let r = l(n);
    if (r.includes("timed out after"))
      (console.error(`[runner:fatal] ${r} \u2014 check NFS/CSI mount health`),
        process.exit(1));
    throw Error(
      `cannot create or write to base directory ${e} (${A(n) ?? r}); pass --base-dir <writable path> or set SELF_HOSTED_RUNNER_BASE_DIR`,
    );
  }
}
import { spawn } from "child_process";
import { randomUUID } from "crypto";
import {
  chmod,
  lstat as Ht,
  mkdir as Mt,
  mkdtemp,
  open as Ii,
  readdir,
  readFile as Dn,
  realpath,
  rm as ct,
  stat as br,
  unlink,
  writeFile as sn,
} from "fs/promises";
import { homedir as Jn, tmpdir } from "os";
import {
  basename,
  dirname as on,
  isAbsolute,
  join as X,
  normalize,
  resolve as bn,
  sep as Ge,
} from "path";
import { createInterface } from "readline";
import { readdirSync, readFileSync } from "fs";
import { readFile as di } from "fs/promises";
var ui = 4096,
  Mr = 64;
function Gr(e, t) {
  if (!Number.isInteger(e.pid) || e.pid <= 1) return Promise.resolve(void 0);
  let n = P();
  if (n === "linux" || n === "wsl") {
    let r = li();
    return Promise.resolve(r && Ir(e, r));
  }
  if (n === "windows") return Promise.resolve(void 0);
  return hi(t).then(
    (r) => r && Ir(e, r),
    () => {
      return;
    },
  );
}
var Wr = 3000;
async function Br(e, t) {
  let n = [...e.pinned],
    r = new Map(),
    s,
    d = !1,
    o = P(),
    c;
  if (o === "macos")
    c = mi([process.pid, ...n.map(([p]) => p)], t).then((p) => {
      let i = ci(p, process.pid, e.pinned);
      if (i === void 0) {
        d = !0;
        return;
      }
      s = i.ownPgrp;
      for (let [h, L] of i.proven) r.set(h, L);
    });
  else if (o === "linux" || o === "wsl")
    ((s = pi()),
      (c = Ur(n, async ([p, i]) => {
        let h = await di(`/proc/${p}/stat`, "utf8").catch(() => {
          return;
        });
        if (h !== void 0 && Zie(h) === i && !Mhe(Lnt(h))) r.set(p, nXt(h));
      })));
  else
    c = Ur(n, async ([p, i]) => {
      if ((await provenSameProcessAsync(p, i)) === !0) r.set(p, void 0);
    });
  let m = await kt(
    c.then(() => !0),
    t,
  ).catch(() => {
    return;
  });
  return { proven: r, ownPgrp: s, incomplete: d || m !== !0 };
}
function ci(e, t, n) {
  let r = e.get(t);
  if (r === void 0) return;
  let s = new Map();
  for (let [d, o] of n) {
    let c = e.get(d);
    if (c !== void 0 && c.token === o) s.set(d, c.pgrp);
  }
  return { proven: s, ownPgrp: r.pgrp };
}
async function Kr(e, t = Wr) {
  let { proven: n, incomplete: r } = await Br(e, t);
  return { live: n.size, incomplete: r };
}
async function ar(e, t, n = Wr) {
  let { proven: r, ownPgrp: s, incomplete: d } = await Br(e, n),
    o = 0;
  if (s !== void 0) {
    let m = new Set();
    for (let p of r.values())
      if (
        p !== void 0 &&
        p > 1 &&
        p !== e.rootPid &&
        p !== s &&
        p !== process.pid
      )
        m.add(p);
    for (let p of m)
      try {
        (process.kill(-p, t), o++);
      } catch {}
  }
  let c = 0;
  for (let m of r.keys())
    try {
      (process.kill(m, t), c++);
    } catch {}
  return { proven: r.size, pids: c, groups: o, incomplete: d };
}
function Ir(e, t) {
  let n = new Map(),
    r = [],
    s;
  for (let p of t.rows) {
    let i = n.get(p.ppid);
    if (i) i.push(p);
    else n.set(p.ppid, [p]);
    if (p.pid === e.pid) s = p;
    else if (p.pgrp === e.pid) r.push(p);
  }
  let d = e.alive
      ? s !== void 0 && e.token !== void 0 && s.token !== e.token
      : s !== void 0,
    o = {
      rootPid: e.pid,
      pinned: new Map(),
      unpinned: 0,
      truncated: !1,
      degraded: t.degraded,
      rootRecycled: d,
    };
  if (d) return o;
  let c = e.alive ? [...r, ...(n.get(e.pid) ?? [])] : r,
    m = new Set([e.pid]);
  while (c.length > 0) {
    let p = c.shift();
    if (p.pid <= 1 || m.has(p.pid)) continue;
    if (m.size > ui) {
      o.truncated = !0;
      break;
    }
    if ((m.add(p.pid), p.token === void 0)) o.unpinned++;
    else o.pinned.set(p.pid, p.token);
    c.push(...(n.get(p.pid) ?? []));
  }
  return o;
}
function li() {
  let e;
  try {
    e = readdirSync("/proc");
  } catch {
    return;
  }
  let t = [];
  for (let n of e) {
    if (!/^\d+$/.test(n)) continue;
    try {
      let r = readFileSync(`/proc/${n}/stat`, "utf8"),
        s = wxt(r);
      if (s === void 0 || Mhe(Lnt(r))) continue;
      let d = Zie(r);
      t.push({
        pid: Number(n),
        ppid: s,
        pgrp: nXt(r),
        token: d !== void 0 && d.length > 0 ? d : void 0,
      });
    } catch {}
  }
  return { rows: t, degraded: !1 };
}
function pi() {
  try {
    return nXt(readFileSync("/proc/self/stat", "utf8"));
  } catch {
    return;
  }
}
function zr() {
  return {
    USER_TYPE: "external",
    NODE_ENV: "production",
    LC_ALL: "C",
    TZ: "UTC",
  };
}
async function hi(e) {
  let t = await execFileNoThrowWithCwd(
      "ps",
      [
        "-A",
        "-o",
        "pid=",
        "-o",
        "ppid=",
        "-o",
        "pgid=",
        "-o",
        "stat=",
        "-o",
        "lstart=",
      ],
      { timeout: e, env: zr(), cwd: "/", stripFinalNewline: !1 },
    ),
    n = gi(t.stdout);
  return n.length === 0 ? void 0 : { rows: n, degraded: t.code !== 0 };
}
function gi(e) {
  let t = [],
    n = e.slice(
      0,
      e.lastIndexOf(`
`) + 1,
    );
  for (let r of n.split(`
`)) {
    let s = /^\s*(\d+)\s+(\d+)\s+(\d+)\s+(\S+)\s+(\S.*?)\s*$/.exec(r),
      d = s?.[4];
    if (s && d !== void 0 && !d.startsWith("Z"))
      t.push({
        pid: Number(s[1]),
        ppid: Number(s[2]),
        pgrp: Number(s[3]),
        token: s[5],
      });
  }
  return t;
}
async function mi(e, t) {
  let n = await execFileNoThrowWithCwd(
    "ps",
    [
      "-o",
      "pid=",
      "-o",
      "pgid=",
      "-o",
      "stat=",
      "-o",
      "lstart=",
      "-p",
      e.join(","),
    ],
    { timeout: t, env: zr(), cwd: "/", stripFinalNewline: !1 },
  );
  return _i(n.stdout);
}
function _i(e) {
  let t = new Map(),
    n = e.slice(
      0,
      e.lastIndexOf(`
`) + 1,
    );
  for (let r of n.split(`
`)) {
    let s = /^\s*(\d+)\s+(\d+)\s+(\S+)\s+(\S.*?)\s*$/.exec(r),
      d = s?.[3],
      o = s?.[4];
    if (s && d !== void 0 && o !== void 0 && !d.startsWith("Z"))
      t.set(Number(s[1]), { pgrp: Number(s[2]), token: o });
  }
  return t;
}
async function Ur(e, t) {
  for (let n = 0; n < e.length; n += Mr)
    await Promise.all(e.slice(n, n + Mr).map(t));
}
function jr() {
  let e,
    t,
    n = {};
  return {
    start(r = Date.now()) {
      if (e === void 0) ((e = r), (t = r));
    },
    mark(r, s = Date.now()) {
      if (t === void 0) return;
      ((n[r] = (n[r] ?? 0) + Math.max(0, s - t)), (t = s));
    },
    lap(r = Date.now()) {
      if (t !== void 0) t = r;
    },
    finish(r = Date.now()) {
      if (e === void 0) return {};
      return { ...n, runner_prep_total_ms: Math.max(0, r - e) };
    },
  };
}
import { constants as Si } from "fs";
import { lstat as wi, open as Ei, opendir } from "fs/promises";
import { join as rn } from "path";
var hn = "/tmp",
  ki = "ccr-byoc-prewarm-vda.done",
  bi = "ccr-byoc-prewarm-stat.done",
  Ri = "ccr-byoc-prewarm-idx.done",
  Gn = "ccr-byoc-prefetch-network.state",
  ur = "ccr-byoc-standby-checkout.lock.d";
var Xr = "refs/remotes/prefetch/staging",
  cr = "anthropics/anthropic",
  lr = fi,
  Ti = "refs/remotes/prefetch/warm",
  yi = "refs/remotes/origin/warm",
  Yr = 4096;
var vi = /(?:^|\s)([a-z_]+)=(\S+)/g;
function Bn(e) {
  let t = new Map();
  for (let [, n, r] of e.matchAll(vi)) t.set(n, r);
  return t;
}
function Pt(e) {
  if (e === void 0 || !/^\d{1,9}$/.test(e)) return;
  return Number(e);
}
function fr(e) {
  if (e === void 0 || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(e)) return;
  let t = Date.parse(e);
  return Number.isFinite(t) ? t : void 0;
}
function Oi(e, t) {
  if (e === void 0) return;
  return Math.max(0, Math.round((t - e) / 1000));
}
function dr(e) {
  if (e === void 0) return { outcome: "absent" };
  let t = Bn(e),
    n = t.get("aborted");
  return {
    outcome:
      n !== void 0
        ? n === "timeout"
          ? "timeout"
          : "aborted"
        : t.get("yielded") === "1"
          ? "yielded"
          : "done",
    elapsedS: Pt(t.get("elapsed_s")),
  };
}
function qr(e, t) {
  if (e === void 0) return { prefetch_phase: "absent" };
  let n = Bn(e),
    r = n.get("phase"),
    s,
    d;
  if (r !== void 0) {
    let o = r.indexOf(":");
    ((s = (o === -1 ? r : r.slice(0, o)).toLowerCase()),
      (d = o === -1 ? void 0 : r.slice(o + 1).toLowerCase()));
  }
  return {
    prefetch_phase: s,
    prefetch_phase_reason: d,
    prefetch_runs: Pt(n.get("runs")),
    prefetch_ok: Pt(n.get("ok")),
    prefetch_last_ok_age_s: Oi(fr(n.get("last_ok_ts")), t),
    prefetch_last_duration_s: Pt(n.get("last_duration_s")),
    prefetch_midx: Pt(n.get("midx")),
  };
}
async function Zr(e = {}) {
  let t = await dn(rn(e.dir ?? hn, Gn));
  return (qr(t, Date.now()).prefetch_ok ?? 0) >= 1;
}
var Ai = 5000,
  Vr = /^[0-9a-f]{12}$/;
function $i(e, t, n, r) {
  if (e === void 0) return;
  let s = Bn(e),
    d = Pt(s.get("ok")),
    o = Pt(s.get("consecutive_fail")),
    c = fr(s.get("last_ok_ts")),
    m = Pt(s.get("last_duration_s")),
    p = s.get("tip");
  if (
    d === void 0 ||
    d < 1 ||
    o !== 0 ||
    c === void 0 ||
    m === void 0 ||
    p === void 0 ||
    !Vr.test(p)
  )
    return;
  let i = t - c;
  if (i < -Ai) return;
  let h = Math.max(0, i) + m * 1000;
  if (h > n * 1000) return;
  let L = Math.round(h / 1000),
    S = { ref: Xr, tipPrefix: p };
  switch (r) {
    case "staging":
      return { ref: Xr, tipPrefix: p, ageS: L, witness: S };
    case "warm": {
      let w = s.get("warm_tip");
      if (Pt(s.get("warm_rc")) !== 0 || w === void 0 || !Vr.test(w)) return;
      return { ref: Ti, tipPrefix: w, ageS: L, witness: S, trackingRef: yi };
    }
  }
}
async function Jr(e) {
  let t = await dn(rn(e.dir ?? hn, Gn));
  return $i(t, e.now ?? Date.now(), e.maxAgeS, e.branch);
}
var Ci = /^[0-9a-f]{40}$/,
  Ni = /^[0-9a-f]{12,64}$/;
function Hn(e) {
  return e !== void 0 && Ci.test(e) ? e : void 0;
}
function Li(e) {
  if (e === void 0) return;
  let t = Bn(e),
    n = t.get("co_phase");
  if (n === void 0) return;
  let r = n === "idle" || n === "running" || n === "failed" ? n : "other",
    s = t.get("co_head");
  return {
    phase: r,
    head: s !== void 0 && Ni.test(s) ? s : void 0,
    base: Hn(t.get("co_base")),
    target: Hn(t.get("co_target")),
    lastOkMs: fr(t.get("co_last_ts")),
    lastDurationS: Pt(t.get("co_last_s")),
    ok: Pt(t.get("co")),
    fail: Pt(t.get("co_fail")),
  };
}
async function Qr(e = {}) {
  let t = e.dir ?? hn,
    n = rn(t, ur),
    r = Li(await dn(rn(t, Gn)));
  if (
    !(await wi(n).then(
      (i) => i.isDirectory(),
      () => !1,
    ))
  )
    return { state: r, lock: void 0 };
  let [d, o, c, m] = await Promise.all(
      ["pgid", "start", "base", "target"].map((i) => dn(rn(n, i))),
    ),
    p = Pt(d);
  return {
    state: r,
    lock: {
      pgid: p !== void 0 && p > 1 ? p : void 0,
      startTicks: o !== void 0 && /^\d{1,15}$/.test(o) ? Number(o) : void 0,
      base: Hn(c),
      target: Hn(m),
    },
  };
}
async function dn(e) {
  let t;
  try {
    t = await Ei(e, Si.O_RDONLY | dy);
    let n = Buffer.alloc(Yr),
      { bytesRead: r } = await t.read(n, 0, Yr, 0),
      s = n.subarray(0, r).toString("utf8"),
      d = s.indexOf(`
`);
    return (d === -1 ? s : s.slice(0, d)).trim() || void 0;
  } catch {
    return;
  } finally {
    await t?.close().catch(() => {});
  }
}
async function pr(e = {}) {
  let t = e.dir ?? hn,
    [n, r, s] = await Promise.all([
      dn(rn(t, ki)),
      dn(rn(t, bi)),
      dn(rn(t, Ri)),
    ]),
    d = dr(n),
    o = dr(r),
    c = dr(s);
  return {
    prewarm_vda_outcome: d.outcome,
    prewarm_vda_elapsed_s: d.elapsedS,
    prewarm_stat_outcome: o.outcome,
    prewarm_stat_elapsed_s: o.elapsedS,
    prewarm_idx_outcome: c.outcome,
  };
}
function es(e, t) {
  let n = { ...e };
  if (e.prewarm_vda_outcome === "absent" && t.prewarm_vda_outcome !== void 0)
    ((n.prewarm_vda_outcome = t.prewarm_vda_outcome),
      (n.prewarm_vda_elapsed_s = t.prewarm_vda_elapsed_s));
  if (e.prewarm_stat_outcome === "absent" && t.prewarm_stat_outcome !== void 0)
    ((n.prewarm_stat_outcome = t.prewarm_stat_outcome),
      (n.prewarm_stat_elapsed_s = t.prewarm_stat_elapsed_s));
  if (e.prewarm_idx_outcome === "absent" && t.prewarm_idx_outcome !== void 0)
    n.prewarm_idx_outcome = t.prewarm_idx_outcome;
  return n;
}
async function ts(e = {}) {
  let t = e.dir ?? hn,
    n = e.now ?? Date.now(),
    [r, s] = await Promise.all([pr({ dir: t }), dn(rn(t, Gn))]);
  return { ...r, ...qr(s, n) };
}
var xi = 1e4,
  ld = 4 * xi;
function hr(e) {
  return FR(e.replace(/^sk-ant-[a-z]+-/, ""));
}
function Kn(e) {
  let t = e.replace(/^sk-ant-[a-z]+-/, ""),
    n = AP(t);
  if (n === null || typeof n !== "object") return null;
  let r = n.act;
  if (r === null || typeof r !== "object") return null;
  let s = r.email;
  return typeof s === "string" ? s : null;
}
function ns(e) {
  let t = e.replace(/^sk-ant-[a-z]+-/, ""),
    n = AP(t);
  if (n === null || typeof n !== "object") return null;
  let r = n["ccr:spawn_session_id"];
  return typeof r === "string" && r.length > 0 ? r : null;
}
function zn({ getAccessToken: e, onRefresh: t, label: n }) {
  return vRe({
    getAccessToken: e,
    onRefresh: t,
    label: n,
    maxFailures: 1 / 0,
    adaptiveBuffer: !0,
    rescheduleFromNewToken: !0,
    decodeExpiry: hr,
    formatDelay: formatDuration,
  });
}
var Es = 5000,
  Gi = 2000,
  Nn = 1e4,
  rs = 60000,
  jn = {
    rm_failed: {
      note: "; its partial checkout could not be removed and may remain visible to this session",
      sad: "context_source_checkout_cleanup_failed",
    },
    kept_prepared_twin: {
      note: "; its checkout path names an already-prepared repository (same name, different casing) and was left in place",
      sad: "context_source_checkout_kept_prepared_twin",
    },
  },
  ks = 60000,
  cn = 30000,
  ss = 60000,
  is = 60000,
  Tn = 30000;
function xe(e, t) {
  return uu(e, Es, `[runner:stuck] fs op '${t}' (check TMPDIR mount health)`);
}
function Wi(e) {
  if (a.CLAUDE_CODE_CUSTOM_OAUTH_URL) return "-custom-oauth";
  return "";
}
var Bi = new Set([
  ".claude.json",
  ".claude.json.backup",
  ".credentials.json",
  "projects",
  "sessions",
  "todos",
  "shell-snapshots",
  "statsig",
  "file-history",
  "history.jsonl",
  "ide",
  "logs",
  "backups",
  ".session_ingress_token",
  rL,
]);
async function bs(e, t) {
  let n =
      process.env.SELF_HOSTED_RUNNER_HOST_CONFIG_DIR ||
      process.env.CLAUDE_CONFIG_DIR ||
      X(Jn(), ".claude"),
    r = new Map(),
    s = { bytes: 0 };
  try {
    await uu(
      Rs(
        n,
        "",
        r,
        s,
        (c) =>
          !Bi.has(c) &&
          !/^\.claude(-[a-z-]+)?\.json(\.backup)?$/.test(c) &&
          !/^\.config\.json(\.|$)/.test(c) &&
          !/^\.claude(-[a-z-]+)?\.json\./.test(c) &&
          !c.startsWith(".session_ingress_token") &&
          !jcr(c) &&
          !b2(c),
      ),
      ks,
      `[runner:stuck] host config snapshot ${n}`,
    );
  } catch (c) {
    if (!W(c)) {
      e(
        `[runner:startup] host config snapshot from ${n} failed (sessions will start with empty config): ${c}`,
      );
      return;
    }
  }
  let d = process.env.SELF_HOSTED_RUNNER_HOST_CONFIG_DIR,
    o;
  try {
    let m = d
        ? await (async (i) => {
            for (let h of i)
              try {
                return await Dn(X(n, h), "utf8");
              } catch (L) {
                if (!W(L)) throw L;
              }
            throw Object.assign(Error("ENOENT"), { code: "ENOENT" });
          })([
            ".config.json",
            `.claude${fileSuffixForOauthConfig()}.json`,
            ...OAUTH_GLOBAL_FILE_SUFFIXES.map((i) => `.claude${i}.json`),
          ])
        : M() && t !== void 0
          ? await Ki(t)
          : await Dn(getGlobalClaudeFile(), "utf8"),
      p = await z(m);
    if (p !== null && typeof p === "object") {
      let i = p.mcpServers;
      if (i !== null && typeof i === "object" && Object.keys(i).length > 0)
        o = i;
    }
  } catch {}
  if (o) {
    for (let [c, m] of Object.entries(o)) {
      let p = ji(m);
      if (p !== void 0)
        (e(
          `[runner:warn] host mcpServers entry "${c}" has ${p} \u2014 ignoring (the Claude child would drop it silently)`,
        ),
          delete o[c]);
    }
    if (Object.keys(o).length === 0) o = void 0;
  }
  if (r.size === 0 && !o) return;
  return (
    e(
      `[runner:startup] host config snapshot: ${r.size} file(s), ${(s.bytes / 1024).toFixed(1)} KiB from ${n}${o ? `, ${Object.keys(o).length} mcpServer(s)` : ""}`,
    ),
    { sourceDir: n, files: r, mcpServers: o }
  );
}
async function Ki(e) {
  let t = await e.readText([Ce.globalConfig()]);
  if (!t.ok) throw Error("global config not readable through storage");
  let n = t.value.items[0];
  if (!n?.found) throw Object.assign(Error("ENOENT"), { code: "ENOENT" });
  return n.value;
}
var zi = new Set([
  "stdio",
  "sse",
  "http",
  "streamable-http",
  "ws",
  "sdk",
  "claudeai-proxy",
]);
function ji(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e))
    return `a non-object value (${e === null ? "null" : Array.isArray(e) ? "array" : typeof e})`;
  let t = e.type;
  if (t === void 0) {
    if ("url" in e && !("command" in e))
      return 'a "url" but no "type" (add "type": "http", "sse", or "ws")';
    return;
  }
  if (typeof t !== "string") return `a non-string type (${typeof t})`;
  if (!zi.has(t)) return `unsupported type "${t}"`;
  return;
}
var Xn = 67108864;
async function Rs(e, t, n, r, s) {
  let d = await readdir(X(e, t), { withFileTypes: !0 });
  for (let o of d) {
    if (t === "" && s && !s(o.name)) continue;
    let c = t === "" ? o.name : X(t, o.name);
    if (o.isDirectory()) await Rs(e, c, n, r);
    else if (o.isFile()) {
      let m = X(e, c),
        p = await br(m);
      if (((r.bytes += p.size), r.bytes > Xn))
        throw new R(
          `host config exceeds ${Xn} bytes at ${c} \u2014 reduce ~/.claude size or set SELF_HOSTED_RUNNER_HOST_CONFIG_DIR to a slimmer dir`,
          "host config exceeds the snapshot size limit",
        );
      let i = await Dn(m);
      if (((r.bytes += i.length - p.size), r.bytes > Xn))
        throw new R(
          `host config exceeds ${Xn} bytes at ${c} \u2014 reduce ~/.claude size or set SELF_HOSTED_RUNNER_HOST_CONFIG_DIR to a slimmer dir`,
          "host config exceeds the snapshot size limit",
        );
      n.set(c, { buf: i, mode: p.mode & 511 });
    }
  }
}
async function Ts(e) {
  let t = process.env.GIT_CONFIG_GLOBAL,
    n = process.env.HOME || Jn(),
    r = process.env.XDG_CONFIG_HOME || X(n, ".config"),
    s = t ? [t] : [X(r, "git", "config"), X(n, ".gitconfig")],
    d = [];
  for (let m of s) {
    try {
      await xe(br(m), `stat ${m}`);
    } catch (p) {
      if (!W(p))
        e(
          `[runner] governed git: could not read ${m} for gitconfig seed (${p}); skipping it`,
        );
      continue;
    }
    try {
      let p = await _r(["config", "--file", m, "--list", "-z"]);
      for (let i of p.split("\x00")) {
        if (!i) continue;
        let h = i.indexOf(`
`),
          L = h === -1 ? i : i.slice(0, h),
          S = h === -1 ? "true" : i.slice(h + 1);
        d.push([L, S]);
      }
      e(
        `[runner] governed git: captured gitconfig seed from ${m} (startup snapshot)`,
      );
    } catch (p) {
      e(
        `[runner] governed git: could not parse ${m} for gitconfig seed (${p}); skipping it`,
      );
    }
  }
  let o = d.filter(([m, p]) => os(m, p));
  if (o.length < d.length) {
    let m = (h) => {
        let L = h.indexOf("."),
          S = h.lastIndexOf(".");
        return L === S ? h : `${h.slice(0, L)}.*${h.slice(S)}`;
      },
      p = d.filter(([h, L]) => !os(h, L)),
      i = Y(p.map(([h]) => m(h))).sort();
    e(
      `[runner] governed git: seed filter dropped ${p.length} non-allowlisted gitconfig entries (families: ${i.join(", ")})`,
    );
  }
  if (o.length === 0) return "";
  let c;
  try {
    c = await mkdtemp(X(tmpdir(), "ccr-govseed-"));
    let m = X(c, "seed.gitconfig");
    for (let [p, i] of o) await _r(["config", "--file", m, "--add", p, i]);
    return await xe(Dn(m, "utf8"), `read ${m}`);
  } catch (m) {
    return (
      e(
        `[runner] governed git: seed serialization failed (${m}); governed sessions seed an empty gitconfig`,
      ),
      ""
    );
  } finally {
    if (c) await ct(c, { recursive: !0, force: !0 }).catch(() => {});
  }
}
function os(e, t) {
  let n = e.toLowerCase();
  if (n.startsWith("user.")) return !0;
  if (n === "core.autocrlf" || n === "core.safecrlf" || n === "core.eol")
    return !0;
  if (n === "push.negotiate") return !0;
  if (n.startsWith("url.") && n.endsWith(".insteadof")) {
    let r = e.slice(4, e.length - 10);
    return !/\/\/[^/]*@/.test(r);
  }
  if (n.startsWith("alias.")) return !t.trimStart().startsWith("!");
  if (n.startsWith("http.")) {
    let r = n.slice(5);
    if (r.includes(".")) return !1;
    return Yi.has(r);
  }
  return !1;
}
var Yi = new Set(["postbuffer", "lowspeedlimit", "lowspeedtime", "version"]);
async function _r(e) {
  return await new Promise((t, n) => {
    let r = spawn("git", e, {
        cwd: void 0,
        stdio: ["ignore", "pipe", "pipe"],
        windowsHide: !0,
        ...Bs("helper"),
        env: {
          ...process.env,
          GIT_CONFIG_GLOBAL: "/dev/null",
          GIT_CONFIG_SYSTEM: "/dev/null",
        },
      }),
      s = "",
      d = "";
    (r.stdout?.on("data", (c) => (s += String(c))),
      r.stderr?.on("data", (c) => (d += String(c))));
    let o = setTimeout((c) => c.kill("SIGKILL"), cn, r);
    (r.on("close", (c) => {
      if ((clearTimeout(o), c === 0)) t(s);
      else
        n(
          new R(
            `git ${e[0]} ${e[1] ?? ""} exited ${c}: ${d.trim()}`,
            "git invocation for the governed per-session gitconfig failed",
          ),
        );
    }),
      r.on("error", (c) => {
        (clearTimeout(o), n(c));
      }));
  });
}
async function Vi(e, t) {
  await On(e, t, 384);
}
async function ys(e, t) {
  let n = X(e, "hooks"),
    r = await xe(
      Ht(n).catch((s) => (W(s) ? void 0 : Promise.reject(s))),
      `lstat ${n}`,
    );
  if (r !== void 0 && !r.isDirectory())
    return (
      t(
        `[runner:session] ${n} exists and is not a plain directory \u2014 not following`,
      ),
      !1
    );
  return !0;
}
async function qi(e, t, n, r, s = fileSuffixForOauthConfig()) {
  if (!t) return;
  let d = [];
  try {
    if (
      (await uu(
        (async () => {
          let o = await ys(e, r);
          for (let [c, { buf: m, mode: p }] of t.files) {
            let i = c.toLowerCase();
            if (!o && (i === "hooks" || i.startsWith("hooks" + Ge))) continue;
            if (
              i.startsWith("hooks" + Ge + ".ccr-launcher" + Ge) ||
              i === "hooks" + Ge + ".ccr-launcher"
            )
              continue;
            let h = X(e, c),
              L = c.lastIndexOf(Ge);
            if (L > 0) await Mt(X(e, c.slice(0, L)), { recursive: !0 });
            (await sn(h, m, { mode: p }), d.push(c));
          }
          if (t.mcpServers) {
            let c = await b({ mcpServers: t.mcpServers });
            await sn(X(e, `.claude${s}.json`), c, { mode: 384 });
          }
        })(),
        ks,
        `[runner:stuck] seed write \u2192 ${e}`,
      ),
      d.length > 0 || t.mcpServers)
    ) {
      let o = [...d];
      if (t.mcpServers)
        o.push(
          `.claude.json[mcpServers\xD7${Object.keys(t.mcpServers).length}]`,
        );
      n(
        `[runner:session] Seeded ${o.join(", ")} from host config snapshot (${t.sourceDir})`,
      );
    }
  } catch (o) {
    r(`[runner:session] Seed write to ${e} failed (best-effort): ${o}`);
  }
}
var Zi = /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,62}\.(py|sh)$/,
  Ji = new Set([
    "Stop",
    "SubagentStop",
    "UserPromptSubmit",
    "SessionStart",
    "SessionEnd",
    "PreToolUse",
    "PostToolUse",
    "PreCompact",
    "Notification",
  ]),
  as = 131072;
function Cn(e) {
  let t = b(e) ?? String(e),
    n = Buffer.byteLength(t, "utf8");
  return n <= 200 ? t : `${t.slice(0, 200)}\u2026 (+${n - 200} bytes)`;
}
function Qi(e) {
  if (!Array.isArray(e)) return `launcher_hooks: not an array (got ${Cn(e)})`;
  let t = new Set();
  for (let [n, r] of e.entries()) {
    if (r === null || typeof r !== "object")
      return `launcher_hooks[${n}]: not an object (got ${Cn(r)})`;
    if (typeof r.event !== "string" || !Ji.has(r.event))
      return `launcher_hooks[${n}]: unknown event ${Cn(r.event)}`;
    if (typeof r.filename !== "string" || !Zi.test(r.filename))
      return `launcher_hooks[${n}]: invalid filename ${Cn(r.filename)}`;
    let s = r.filename.toLowerCase();
    if (t.has(s))
      return `launcher_hooks[${n}]: duplicate filename ${b(r.filename)} (case-insensitive)`;
    t.add(s);
    let d =
      typeof r.script === "string" ? Buffer.byteLength(r.script, "utf8") : 0;
    if (d === 0 || d > as)
      return `launcher_hooks[${n}] ${b(r.filename)}: script size ${d} out of range (1..${as})`;
  }
  return;
}
async function eo(e, t, n, r, s) {
  let d = Qi(t);
  if (d !== void 0) {
    (s(
      `[runner:session] launcher_hooks validation failed \u2014 dropping (CCR deploy regression, session continues without CCR-supplied hooks): ${d}`,
    ),
      logFeatureBad(
        "self_hosted_launcher_hooks",
        "self_hosted_launcher_hooks_validation_failed",
      ));
    return;
  }
  let o = {};
  if (!(await ys(e, s))) {
    logFeatureBad(
      "self_hosted_launcher_hooks",
      "self_hosted_launcher_hooks_hooksdir_not_plain_dir",
    );
    return;
  }
  let c = X(e, "hooks", ".ccr-launcher");
  (await xe(ct(c, { recursive: !0, force: !0 }), `rm ${c}`),
    await xe(Mt(c, { recursive: !0, mode: 448 }), `mkdir ${c}`));
  for (let p of t) {
    let i = X(c, p.filename);
    (n.push(i),
      await xe(unlink(i), `unlink ${i}`).catch(() => {}),
      await xe(sn(i, p.script, { flag: "wx", mode: 448 }), `writeFile ${i}`),
      (o[p.event] ??= []).push({
        matcher: "",
        hooks: [{ type: "command", command: i, args: [] }],
      }));
  }
  let m = X(e, "launcher-settings.json");
  return (
    n.push(m),
    await xe(unlink(m), `unlink ${m}`).catch(() => {}),
    await xe(
      sn(m, b({ hooks: o }, null, 2), { flag: "wx", mode: 384 }),
      `writeFile ${m}`,
    ),
    r(`[runner:session] Wrote ${t.length} launcher hook(s) + ${m}`),
    { settingsPath: m }
  );
}
async function ds(e, t, n, r) {
  try {
    (await Mt(e, { recursive: !0, mode: 448 }),
      await sn(`${e}/${t}`, n, { mode: 384 }));
  } catch (s) {
    r(`[runner:debug] failed to write ${t} to ${e} (best-effort): ${s}`);
  }
}
function vs(e, t) {
  return X(e, `.session_ingress_token.e${t}`);
}
async function mr(e, t, n, r, s = Nn) {
  try {
    return (
      await Ln(
        Mt(on(e), { recursive: !0, mode: 448 }),
        s,
        "[runner:session] mkdir for session-ingress token file",
        r,
      ),
      await Ln(
        On(e, t, 384),
        s,
        "[runner:session] write session-ingress token file",
        r,
      ),
      !0
    );
  } catch (d) {
    return (
      n(
        `[runner:session] session-ingress token file write failed (staged-file fetches degraded): ${d}`,
      ),
      !1
    );
  }
}
async function Ln(e, t, n, r) {
  let s = !1;
  e.then(
    () => {
      s = !0;
    },
    () => {
      s = !0;
    },
  );
  try {
    return await uu(e, t, n);
  } catch (d) {
    if (!s)
      r?.(
        e.then(
          () => {},
          () => {},
        ),
      );
    throw d;
  }
}
async function us(e, t, n, r = Nn) {
  try {
    await Ln(unlink(e), r, "[runner:session] unlink session-ingress token file", n);
  } catch (c) {
    if (!W(c))
      t(`[runner:session] session-ingress token file cleanup failed: ${c}`);
  }
  let s = /\.session_ingress_token\.e(\d+)$/.exec(e);
  if (!s) {
    t(
      "[runner:session] token temp sweep skipped: target path has no parseable epoch",
    );
    return;
  }
  let d = Number(s[1]),
    o = on(e);
  try {
    let c = await Ln(
      readdir(o),
      r,
      "[runner:session] readdir for token temp sweep",
      n,
    );
    for (let m of c) {
      if (!m.startsWith(".session_ingress_token.")) continue;
      let p = /^\.session_ingress_token\.e(\d+)\.tmp\./.exec(m);
      if (!p) {
        if (m.includes(".tmp."))
          t("[runner:session] token temp sweep skipped an unparseable sibling");
        continue;
      }
      if (Number(p[1]) > d) continue;
      try {
        await Ln(unlink(X(o, m)), r, "[runner:session] unlink token temp file", n);
      } catch (i) {
        if (!W(i))
          t(`[runner:session] token temp sweep failed for a sibling: ${i}`);
      }
    }
  } catch (c) {
    if (!W(c)) t(`[runner:session] token temp sweep readdir failed: ${c}`);
  }
}
var to = new Set([
    "sdk-url",
    "resume",
    "print",
    "input-format",
    "output-format",
    "replay-user-messages",
    "debug-file",
    "mcp-config",
    "settings",
  ]),
  cs = 2000;
async function no(e, t, n) {
  let r = e.get(t) ?? Promise.resolve(),
    s,
    d = new Promise((o) => {
      s = o;
    });
  (e.set(t, d), await r.catch(() => {}));
  try {
    return await n();
  } finally {
    if ((s(), e.get(t) === d)) e.delete(t);
  }
}
class Vn extends R {
  repo;
  ref;
  constructor(e, t) {
    let n = t ? `'${t}'` : "the configured ref";
    super(
      `The branch ${n} in ${e} no longer exists on the remote (it was likely deleted after a merge). To resume this session: restore the branch on the merged PR, then click Try again. (couldn't find remote ref)`,
      "source ref not found on remote (branch deleted after merge)",
    );
    ((this.name = "SourceRefNotFoundError"), (this.repo = e), (this.ref = t));
  }
}
async function Os(e, t, n) {
  let {
      apiClient: r,
      getRunnerToken: s,
      baseDir: d,
      execPath: o,
      execArgs: c,
      capacity: m,
      healthPort: p,
      onDebug: i,
      onStatus: h,
      onSessionActivity: L,
      onBgTaskLedger: S,
      onBgFollowupPending: w,
      onSessionTokenIssued: U,
      onChildLifecycle: V,
      clientPlatform: ne,
      onInitPhase: ae,
      onSessionStartHookError: te,
      onMaxLifetime: le,
      onChildTerminating: we,
      canonicalLocks: H,
      tokenFileOpTimeoutMs: fe,
      gitSshRewriteHosts: ke,
      gitHostRewrites: Ae,
      useAnthropicGitProxy: de,
      gitProxyGlobalConfigPath: Me,
      gitProxyGlobalConfigSnapshot: lt,
      gitProxyCredHelper: pt,
      configureGitHookStubs: qe,
      configureGitSigningArtifacts: Gt,
      pushOutcomeOnRelease: St,
      trustWorkspace: Ue,
      confineRepoSettings: Rt = "enforce",
      hostConfigSnapshot: zt,
      governedGitConfigSeed: ht,
      debugTokenDir: At,
      standbyIdleMs: Wt,
      getHealthzClaimVisibleMs: We,
    } = t,
    De = m > 1,
    wt = qe !== void 0 && !De;
  i(`[runner:session] Handling session ${e}`);
  let $e = !1,
    Tt = !1,
    jt = $e ? ts().catch(() => ({})) : void 0,
    Fe = !1,
    yt,
    Te = jr(),
    Et,
    Ke = !1,
    v = !1,
    O = { current: void 0 },
    C,
    F = "failed",
    Re,
    ye,
    me,
    ve,
    It,
    _n = [],
    Ze = X(d, "_sessions", `${e}.claude-config`),
    nt = X(d, "_sessions", `${e}.gitconfig`),
    Ut = X(Ze, "claude-code-debug.txt"),
    Ee,
    He,
    rt,
    bt = Promise.resolve(),
    $t = !1,
    Lt = Promise.resolve(),
    Zt = !1,
    ie,
    ge = [],
    ze = [],
    st = [],
    Pe = [],
    ut = !1,
    it = !1,
    Jt = process.env.SELF_HOSTED_RUNNER_HOOKS_DIR,
    _ = [],
    q,
    re = Promise.resolve(),
    x,
    ee = !1,
    E = async () => {
      if ((await re, (ee = !0), x !== void 0)) throw x;
    };
  try {
    if (
      ((Et = Date.now()),
      ae?.({ kind: "start" }),
      !e || !/^[a-zA-Z0-9_-]+$/.test(e))
    )
      throw Error("Invalid session_id: contains unsafe characters");
    He = X(d, "_sessions", e);
    let _e = X(d, "_sessions", `${e}.uploads`),
      D = await gn(() => r.issueSessionToken(s(), e, n), {
        initialDelayMs: 500,
        maxDelayMs: 8000,
        maxAttempts: 5,
        shouldRetry: Yxe,
        signal: n,
        onRetry: (K, Ne) => {
          i(
            `[runner:session] issueSessionToken attempt ${K} transient failure (${Ne instanceof Error ? Ne.message : Ne}) \u2014 retrying`,
          );
        },
      });
    if (!D) return { result: "abandoned" };
    if (((O.current = D.session_token), wt)) await ko(qe, Gt, i);
    if (de) {
      if (
        ((process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = D.session_token),
        lt !== void 0 && Me)
      ) {
        let K = process.env.XDG_CONFIG_HOME || X(Jn(), ".config");
        await bo(
          {
            globalConfigPath: Me,
            globalConfigSnapshot: lt,
            homeGitconfigPath: X(Jn(), ".gitconfig"),
            xdgConfigPath: X(K, "git", "config"),
            credHelper: pt,
            signingArtifacts: Gt,
          },
          i,
        );
      }
    }
    if ((U?.(D.session_token), At))
      ds(At, `session_token_${e}.jwt`, D.session_token, h);
    if (n.aborted)
      return (
        i(
          `[runner:session] Aborted after issueSessionToken for ${e} \u2014 skipping registration`,
        ),
        { result: "abandoned" }
      );
    if (
      (i(`[runner:session] Issued session_token for ${e}`),
      (C = await gn(() => r.getSessionRemoteConfig(e, O.current, n), {
        initialDelayMs: 500,
        maxDelayMs: 8000,
        maxAttempts: 5,
        shouldRetry: Yxe,
        signal: n,
        onRetry: (K, Ne) => {
          i(
            `[runner:session] getSessionRemoteConfig attempt ${K} transient failure (${Ne instanceof Error ? Ne.message : Ne}) \u2014 retrying`,
          );
        },
      })),
      !C)
    )
      return { result: "abandoned" };
    if (
      (i(
        `[runner:session] Fetched remote config: ${C.sources.length} source(s), ${C.push_targets.length} push target(s), api_base_url=${C.api_base_url}`,
      ),
      n.aborted)
    )
      return (
        i(
          `[runner:session] Aborted after getSessionRemoteConfig for ${e} \u2014 skipping registration`,
        ),
        { result: "abandoned" }
      );
    let ue = C.worktree_checkpoint_hint != null,
      Se = ho(
        C.governed_git,
        () => {
          let K = O.current;
          if (!K)
            throw Error(
              "governed git credential requested but no session token is available \u2014 token issue/refresh failed?",
            );
          return K;
        },
        h,
      );
    if (Se) {
      if (
        (h(
          `[runner:session] governed git ACTIVE for ${e}: pre-CLI clone via git mount, in-session git/gh via the session relay (git_config=${Se.toolConfig.gitConfig}, gh_path_shim=${Se.toolConfig.ghPathShim})` +
            (De
              ? " \u2014 capacity>1: shared-canonical prep relies on per-invocation git hardening (no cross-session sanitize)"
              : ""),
        ),
        de)
      )
        h(
          "[runner:warn] governed git supersedes --use-anthropic-git-proxy for this session \u2014 " +
            "the work item's environment has ccr_runner_governed_git enabled; the legacy git-proxy flag is ignored",
        );
      if (St)
        h(
          "[runner:warn] --push-outcome-on-release under governed git pushes to the PLAIN upstream URL with customer-managed credentials (the governed mount is read-only and the session relay ends with the child). If no ambient git credential covers the push target, the release-time push will fail naming this flag.",
        );
    }
    let Je = Se ? void 0 : de;
    try {
      if (
        ((Ee = await gn(
          () => r.registerWorker(C.api_base_url, e, O.current, n),
          {
            initialDelayMs: 500,
            maxDelayMs: 8000,
            maxAttempts: 5,
            shouldRetry: Yxe,
            signal: n,
            onRetry: (N, I) => {
              i(
                `[runner:session] registerWorker attempt ${N} transient failure (${I instanceof Error ? I.message : I}) \u2014 retrying`,
              );
            },
          },
        )),
        Ee === void 0)
      )
        return { result: "interrupted" };
      i(`[runner:session] Registered worker, epoch=${Ee}`);
      let K = Ee;
      if (
        (await gn(
          () =>
            r.updateSessionWorkerState(
              C.api_base_url,
              e,
              O.current,
              K,
              void 0,
              n,
            ),
          {
            initialDelayMs: 500,
            maxDelayMs: 8000,
            maxAttempts: 5,
            shouldRetry: Yxe,
            signal: n,
            onRetry: (N, I) => {
              i(
                `[runner:session] updateSessionWorkerState attempt ${N} transient failure (${I instanceof Error ? I.message : I}) \u2014 retrying`,
              );
            },
          },
        ),
        n.aborted)
      )
        return { result: "interrupted" };
      rt = vs(Ze, Ee);
      let Ne = rt,
        Le = (N) => {
          $t = !0;
          let I = N.catch(() => {});
          ((Lt = Promise.all([Lt, I]).then(() => {})),
            I.then(() => {
              if (Zt) return;
              let Q = O.current;
              if (!Q) return;
              bt = bt.then(() => mr(Ne, Q, h, Le, fe));
            }));
        };
      ((ie = Le),
        (bt = mr(Ne, D.session_token, h, Le, fe)),
        await bt,
        i(`[runner:session] Epoch fence passed for ${e} (epoch=${Ee})`),
        (q = ps({
          intervalMs: 30000,
          refresh: async () => {
            if (Ee === void 0 || !O.current) return;
            (await r.heartbeat(C.api_base_url, e, O.current, Ee, n),
              i(`[runner:session] prep heartbeat sent for ${e}`));
            return;
          },
          onError: (N) => {
            i(`[runner:session] prep heartbeat failed: ${N}`);
          },
          signal: n,
        })));
      let gt = [],
        Qe = (N, I) => {
          if (Ee === void 0 || !O.current) return Promise.resolve();
          let Q = Ee,
            se = O.current,
            ce = I.withDeferred ? gt.splice(0) : [],
            T = async () => {
              try {
                await r.postWorkerEvents(
                  C.api_base_url,
                  e,
                  se,
                  Q,
                  [...ce, N],
                  n,
                );
              } catch (Xe) {
                if (kn(Xe)) throw Xe;
                let Oe =
                  ce.length > 0
                    ? ` (${ce.length} deferred step event(s) dropped with it)`
                    : "";
                i(`[runner:session] ${I.kind} event post failed${Oe}: ${Xe}`);
              }
            };
          if (!Tt) return T();
          let pe = () => (x === void 0 ? T() : Promise.resolve());
          if (ee) return pe();
          if (!I.withDeferred) return re.then(pe);
          return (
            (re = re.then(() =>
              pe().catch((Xe) => {
                ((x = Xe), q?.cancel());
              }),
            )),
            Promise.resolve()
          );
        },
        ir = (N) => Qe(Bo(N), { kind: "activity", withDeferred: !0 }),
        Qt = (N, I, Q, se) =>
          Qe(qn(N, I, Q, se), { kind: "step", withDeferred: !0 }),
        fn = (...N) => {
          if (Ee === void 0 || !O.current) return;
          gt.push(qn(...N));
        },
        en,
        Xt = () =>
          (en ??= (async () => {
            let N = performance.now();
            return {
              config: await r.getSessionRemoteConfig(e, O.current, n),
              armedAt: N,
            };
          })().catch((N) => {
            i(
              `[runner:session] early /remote re-fetch failed: ${N} \u2014 step 6 re-fetches if the session continues`,
            );
            return;
          })),
        tn = qo({
          gateOn: !1,
          workerEpoch: Ee,
          hintedBeforeRegister: ue,
          refetch: async () => (await Xt())?.config,
          onDebug: i,
        }),
        Yt = go(
          C.sources,
          ke,
          Ae,
          i,
          Je ? { apiBaseUrl: Je, sessionId: e } : void 0,
          Se,
        );
      await Qt("provision", "completed", "Runner registered", {
        expected_steps:
          Yt.length > 0 ? "provision,clone,start_cc" : "provision,start_cc",
      });
      let vn = Co($o(C.push_targets));
      (await uu(
        Mt(He, { recursive: !0 }),
        Nn,
        `[runner:stuck] mkdir ${He} (check NFS/CSI mount health)`,
      ),
        await uu(
          Mt(Ze, { recursive: !0, mode: 448 }),
          Nn,
          `[runner:stuck] mkdir ${Ze}`,
        ));
      let pn = Wi(C.api_base_url);
      if ((await qi(Ze, zt, i, h, pn), Se?.toolConfig.gitConfig)) {
        if ((await Vi(nt, ht ?? ""), wt)) {
          await ct(nt + ".lock", { force: !0 }).catch(() => {});
          for (let [N, I] of XYt(d))
            await _r(["config", "--file", nt, "--replace-all", N, I]);
        }
      }
      let Ct = He,
        at = [],
        be = [],
        Vt = await yot(Jt, "checkout");
      if (Vt && St)
        h(
          `[runner:warn] --push-outcome-on-release does not push repos checked out via the checkout lifecycle hook (${Vt}); use the post-session hook to snapshot those`,
        );
      if (Yt.length > 0) {
        i(
          `[runner:session] Preparing ${Yt.length} git ${Yt.length === 1 ? "repository" : "repositories"} (${De ? "worktree" : "canonical-direct"} mode)`,
        );
        let N = [],
          I = [],
          Q = [],
          se,
          ce = [];
        for (let T of Yt) {
          if (!frn(T.type)) continue;
          let pe = _rn(d, T),
            Xe = D2n(T);
          if (!pe || !Xe)
            throw new R(
              `Source '${T.url}' resolved to an unsafe repo path (slug='${T.repo}'). Check for path traversal in the URL.`,
              "source URL resolved to an unsafe repo path",
            );
          (await ir(`Preparing ${T.repo}...`),
            await Qt("clone", "started", `Preparing ${T.repo}`, {
              step_detail: T.repo,
            }));
          let Oe = (vn.get(kr(T.repo))?.length ?? 0) > 0,
            he = X(He, Xe),
            Ft = async () => {
              if (!Vt) return;
              if (be.includes(he)) {
                i(
                  `[runner:hook] not removing ${he}: a prepared checkout (in use)`,
                );
                return;
              }
              let tt = be.find((dt) => Gj(dt) === Gj(he));
              if (tt !== void 0)
                return (
                  i(
                    `[runner:hook] not removing ${he}: same name as prepared checkout ${tt} modulo case`,
                  ),
                  ze.push(he),
                  {
                    cause: "kept_prepared_twin",
                    warn: `[runner:warn] not removing ${he} for skipped context source ${T.repo}: same name as the prepared checkout ${tt} modulo case (one directory on a case-insensitive filesystem); whatever the hook wrote there may remain visible to this session. Removal is retried when the session ends.`,
                  }
                );
              let Ve = await uu(
                ct(he, { recursive: !0, force: !0 }).then(
                  () => {
                    return;
                  },
                  (dt) => dt,
                ),
                rs,
                `[runner:hook] rm -rf ${he}`,
              );
              if (Ve === void 0) return;
              return (
                ze.push(he),
                {
                  cause: "rm_failed",
                  warn: `[runner:warn] could not remove the partial checkout the hook left for skipped context source ${T.repo} at ${he} (${l(Ve)}); the session may still be able to read it. Removal is retried when the session ends.`,
                }
              );
            };
          try {
            if (Vt) {
              if (T.ref && !CS(T.ref))
                throw new R(
                  `[runner:session] refusing to pass unsafe ref to checkout hook: ${T.ref}`,
                  "refusing to pass unsafe ref to checkout hook",
                );
              let Ve = T.governedMount && T.upstreamUrl ? T.upstreamUrl : T.url;
              if (!Ve || !$3e(Ve))
                throw new R(
                  `[runner:session] refusing to pass unsafe repo URL to checkout hook: ${Ve}`,
                  "refusing to pass unsafe repo URL to checkout hook",
                );
              (await CNn({
                hookPath: Vt,
                cwd: He,
                sessionId: e,
                repoUrl: Ve,
                repoRef: T.ref,
                checkoutPath: he,
                sessionAccessToken: O.current,
                apiBaseUrl: C.api_base_url,
                gitMountUrl: T.governedMount ? T.url : void 0,
                clientPlatform: ne,
                onStatus: h,
                onDebug: i,
                signal: n,
              }),
                be.push(he),
                N.push(T.repo),
                I.push(T),
                Q.push(T.url ?? ""),
                ze.push(he),
                fn("clone", "completed", `Prepared ${T.repo}`, {
                  step_detail: T.repo,
                }));
              continue;
            }
            let tt = De ? X(He, Xe) : pe;
            if (
              (await no(H, pe, async () => {
                if (Je || (Se && !De)) {
                  if (So(h, pe)) await Eo(pe, i, T.url);
                } else await Ro(pe, i, !De);
                let Ve = await Qo({
                    useWorktrees: De,
                    workerEpoch: Ee,
                    source: T,
                    checkpoint: { hint: tn, checkoutPath: pe },
                    onDebug: i,
                  }),
                  dt = na({
                    claimed: Fe,
                    useWorktrees: De,
                    source: T,
                    onDebug: i,
                  });
                if (
                  (await O2n({
                    baseDir: d,
                    sources: [
                      {
                        ...T,
                        ...(Ve && { prefetchedTip: Ve }),
                        ...(dt && { standbyCheckout: dt }),
                      },
                    ],
                    alwaysFetch: !0,
                    skipReset: De,
                    skipValidation:
                      antEnv.CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM && !De,
                    onDebug: i,
                    onPhase: (qt, Dt, or) => {
                      if (Ee === void 0 || !O.current) return;
                      let ei = Ee,
                        ti = O.current,
                        ni = [Ko(T.repo, qt, Dt, or)],
                        xr = () =>
                          x !== void 0
                            ? Promise.resolve()
                            : r.postWorkerEvents(
                                C.api_base_url,
                                e,
                                ti,
                                ei,
                                ni,
                                n,
                              );
                      (Tt ? re.then(xr) : xr()).catch((ri) =>
                        i(
                          `[runner:session] prep-phase event post failed: ${ri}`,
                        ),
                      );
                    },
                    onProgress: (qt, Dt) => {
                      let or =
                        Dt.total !== void 0 ? ` (${Dt.done}/${Dt.total})` : "";
                      Qe(
                        qn(
                          "clone",
                          "started",
                          `${T.repo} \u2014 ${Dt.label} ${Dt.pct}%${or}`,
                          {
                            step_detail: T.repo,
                            clone_sub: qt,
                            progress_label: Dt.label,
                            progress_pct: String(Dt.pct),
                            ...(Dt.done !== void 0 && {
                              progress_done: String(Dt.done),
                            }),
                            ...(Dt.total !== void 0 && {
                              progress_total: String(Dt.total),
                            }),
                          },
                        ),
                        { kind: "progress", withDeferred: !1 },
                      ).catch(() => {});
                    },
                    signal: n,
                  }),
                  De)
                )
                  await L2n({
                    canonicalRepoPath: pe,
                    worktreePath: tt,
                    ref: T.ref,
                    onDebug: i,
                    signal: n,
                  });
              }),
              De)
            )
              ge.push({ canonicalRepoPath: pe, worktreePath: tt });
            (be.push(tt),
              N.push(T.repo),
              I.push(T),
              Q.push(T.url ?? ""),
              fn("clone", "completed", `Prepared ${T.repo}`, {
                step_detail: T.repo,
              }));
          } catch (tt) {
            let Ve = tt instanceof Error ? tt.message : String(tt);
            if (Vlt(Ve)) {
              if (!Oe) {
                let dt = T.ref ? `'${T.ref}'` : "the configured ref";
                i(
                  `[runner:session] context source ${T.repo} ref ${dt} permanently not found on remote; ` +
                    "skipping (not a work repo \u2014 no push_targets entry)",
                );
                let qt = await Ft();
                if (qt) h(qt.warn);
                (ce.push({
                  repo: T.repo,
                  sads: qt ? [jn[qt.cause].sad] : [],
                  step:
                    `Skipped ${T.repo} \u2014 source ref ${dt} no longer exists on remote; continuing without this context repo` +
                    (qt ? jn[qt.cause].note : ""),
                }),
                  (se ??= new Vn(T.repo, T.ref)));
                continue;
              }
              throw new Vn(T.repo, T.ref);
            }
            if (Vt && !Oe && tt instanceof Jxe && !n.aborted) {
              h(
                `[runner:warn] checkout hook failed for context source ${T.repo} (${tt.telemetryMessage}); not a work repo (no push_targets entry), skipping it: ` +
                  ml(tt.message),
              );
              let dt = await Ft();
              if (dt) h(dt.warn);
              (ce.push({
                repo: T.repo,
                sads: [
                  "context_source_checkout_hook_failed",
                  ...(dt ? [jn[dt.cause].sad] : []),
                ],
                step:
                  `Skipped ${T.repo} \u2014 its checkout hook ${tt.telemetryMessage}; continuing without this context repo` +
                  (dt ? jn[dt.cause].note : ""),
              }),
                (se ??= tt));
              continue;
            }
            throw tt;
          }
        }
        if (be.length === 0 && se) throw se;
        for (let T of ce) {
          for (let pe of T.sads) logFeatureSad("self_hosted_session_handle", pe);
          await Qt("clone", "completed", T.step, { step_detail: T.repo });
        }
        if (
          (await Qt("clone", "completed", "Finished preparing sources"),
          Te.start(),
          Xt(),
          Je)
        ) {
          let T = new URL(Je).origin;
          for (let pe = 0; pe < be.length; pe++) {
            if (!I[pe]?.getAuthToken) continue;
            if (ze.includes(be[pe])) continue;
            (st.push({ path: be[pe], origin: T }), await To(be[pe], Je, i, n));
          }
        }
        if ((Te.mark("runner_prep_git_proxy_config_ms"), Se)) {
          let T = new Set();
          for (let pe = 0; pe < be.length; pe++) {
            let Xe = I[pe];
            if (!Xe?.governedMount || !Xe.upstreamUrl) continue;
            if (ze.includes(be[pe])) continue;
            let he =
              ge.find((Ft) => Ft.worktreePath === be[pe])?.canonicalRepoPath ??
              be[pe];
            if (T.has(he)) continue;
            (T.add(he), await yo(he, Xe.upstreamUrl, i, n));
          }
        }
        Te.mark("runner_prep_reset_remote_ms");
        for (let T = 0; T < be.length; T++) {
          let pe = vn.get(kr(N[T]));
          if (!pe || pe.length === 0) continue;
          let [Xe, ...Oe] = pe,
            he = ge.find((Ve) => Ve.worktreePath === be[T]),
            Ft = he?.canonicalRepoPath ?? be[T];
          if (Oe.length > 0) {
            let Ve = I[T],
              dt = Ve?.getAuthToken && !ze.includes(be[T]);
            await Po(
              be[T],
              Oe,
              i,
              n,
              void 0,
              Q[T].startsWith("file://"),
              Je && dt ? Ve.url : void 0,
              Ve?.governedMount && dt
                ? { url: Ve.url, getToken: Ve.getAuthToken }
                : void 0,
            );
          }
          let tt;
          if (St && (Ee ?? 0) > 1 && !ze.includes(be[T])) {
            if (await Mo(Ft, Xe, I[T], Tn, i, n))
              tt = `refs/remotes/origin/${Xe}`;
          }
          if ((await Do(be[T], Xe, i, n, !!de, tt), ze.includes(be[T])))
            continue;
          _.push({
            canonicalPath: Ft,
            branch: Xe,
            needsDetach: !he,
            createdSha: St ? await ms(Ft, `refs/heads/${Xe}`) : void 0,
            source: I[T],
          });
        }
        (Te.mark("runner_prep_outcome_branch_ms"), Pe.push(...be));
      }
      if (
        (Te.start(),
        Xt(),
        ({ childCwd: Ct, addDirs: at } = gs(He, be, C.cwd)),
        C.cwd)
      ) {
        let N = Ls(He, C.cwd);
        if (!(
          N !== null &&
          (await uu(
            Lo(He, N),
            Nn,
            `[runner:stuck] mkdir ${N} (check NFS/CSI mount health)`,
          ).catch(() => !1)) &&
          (await uu(
            xo(He, N),
            Es,
            `[runner:stuck] realpath ${N} (check NFS/CSI mount health)`,
          ).catch(() => !1))
        ))
          (i(
            `[runner:session] config.cwd=${C.cwd} rejected (not under ${He}, a segment is a symlink, or fs op timed out)`,
          ),
            ({ childCwd: Ct, addDirs: at } = gs(He, be)));
      }
      if (at.length > 0)
        i(`[runner:session] cwd=${Ct} + ${at.length} --add-dir`);
      ($n(Ze, "config dir", Ct, at), $n(_e, "stage-file root", Ct, at));
      let Sn = [],
        wn = !1,
        Un = !1,
        Fn = {};
      if (Rt !== "off") {
        try {
          Sn = await No(Ct, be, Fn);
        } catch (Q) {
          if (Rt === "warn") {
            let se = Q instanceof Error ? Q.message : String(Q),
              ce = Q instanceof _t ? Q.entry.kind : "unknown";
            (h(`[runner:confine] WARN (would refuse): ${se}`),
              logFeatureBad("self_hosted_confine", "self_hosted_confine_scan_threw_warn", {
                confine_kind: fromEnum(ce),
              }),
              (wn = !0),
              (Un = !0));
          } else {
            let se = Q instanceof _t ? Q.entry.kind : "unknown";
            throw (
              logFeatureBad(
                "self_hosted_confine",
                "self_hosted_confine_scan_threw_enforce",
                { confine_kind: fromEnum(se) },
              ),
              Q
            );
          }
        }
        let N = [...at, ...Sn.map((Q) => Q.path)],
          I = () => {
            ($n(Ze, "config dir", Ct, N), $n(_e, "stage-file root", Ct, N));
          };
        if (Rt === "warn")
          try {
            I();
          } catch (Q) {
            let se = Q instanceof Error ? Q.message : String(Q);
            (h(`[runner:confine] WARN (would refuse under enforce): ${se}`),
              logFeatureBad("self_hosted_confine", "self_hosted_confine_overlap_warn"),
              (wn = !0));
          }
        else
          try {
            I();
          } catch (Q) {
            throw (
              logFeatureBad("self_hosted_confine", "self_hosted_confine_overlap_enforce"),
              Q
            );
          }
      }
      if (Sn.length > 0) {
        let N = (se) => se.toLowerCase(),
          I = new Set();
        for (let se of [Ct, ...at]) {
          (I.add(N(se)), I.add(N(se.normalize("NFC"))));
          let ce = await xe(
            realpath(se).catch(() => {
              return;
            }),
            `realpath ${se}`,
          );
          if (ce !== void 0) (I.add(N(ce)), I.add(N(ce.normalize("NFC"))));
        }
        let Q = (se) => {
          for (let ce of I)
            if (se === ce || se.startsWith(ce.endsWith(Ge) ? ce : ce + Ge))
              return !0;
          return !1;
        };
        for (let se of Sn)
          if (!Q(N(se.path))) {
            let ce = new _t(
              se,
              se.kind === "permissions.allow (bare write-tool rule)"
                ? `grants unbounded file-tool writes (toolAlwaysAllowedRule matches a bare ${se.raw} rule for ANY path). defaultMode:"acceptEdits" already auto-allows in-workspace edits; drop the bare rule, or use "Edit(/**)" / "Write(/**)" for an explicit workspace-scoped rule, or move it to the operator's user-level settings.json`
                : "resolves outside this session's own workspace",
            );
            if (Rt === "warn") {
              (h(`[runner:confine] WARN (would refuse): ${ce.message}`),
                logFeatureBad("self_hosted_confine", "self_hosted_confine_violation_warn"),
                (wn = !0));
              continue;
            }
            throw (
              logFeatureBad("self_hosted_confine", "self_hosted_confine_violation_enforce"),
              ce
            );
          }
      }
      if (Rt !== "off" && !wn) logFeatureOk("self_hosted_confine");
      if (
        ($n(Ze, "config dir", $d().replace(/[/\\]$/, ""), [
          bl(),
          ome().replace(/[/\\]$/, ""),
        ]),
        Te.mark("runner_prep_repo_settings_ms"),
        Ue)
      ) {
        let N = {};
        for (let se of new Set([
          Ct,
          ...be,
          ...ge.map((ce) => ce.canonicalRepoPath),
        ])) {
          let ce = normalize(se),
            T = await xe(
              realpath(se).catch(() => {
                return;
              }),
              `realpath ${se}`,
            );
          for (let pe of [
            ce,
            ce.normalize("NFC"),
            ...(T !== void 0 ? [T, T.normalize("NFC")] : []),
          ])
            N[pe] = { hasTrustDialogAccepted: !0 };
        }
        let I = await b({
            ...(zt?.mcpServers && { mcpServers: zt.mcpServers }),
            projects: N,
          }),
          Q = X(Ze, `.claude${pn}.json`);
        (await xe(sn(Q, I, { mode: 384 }), `writeFile ${Q}`),
          i(
            `[runner:session] Seeded persisted trust for ${Object.keys(N).length} path(s) in ${Q}`,
          ));
      }
      if (C.mcp_config?.content) {
        let N = Buffer.from(C.mcp_config.content, "base64").toString("utf-8");
        ((ve = X(Ze, "mcp-config.json")),
          await xe(unlink(ve), `unlink ${ve}`).catch(() => {}),
          await xe(sn(ve, N, { flag: "wx", mode: 384 }), `writeFile ${ve}`),
          i(`[runner:session] Wrote MCP config to ${ve} (${N.length} bytes)`));
      }
      if (
        (Te.mark("runner_prep_config_seed_ms"),
        C.launcher_hooks &&
          (!Array.isArray(C.launcher_hooks) || C.launcher_hooks.length > 0))
      ) {
        let N = await eo(Ze, C.launcher_hooks, _n, i, h);
        if (N)
          if (((It = N.settingsPath), Fn.repoDisablesAllHooks))
            (h(
              "[runner:session] launcher_hooks materialized, but a repo .claude/settings.json or settings.local.json carries disableAllHooks:true \u2014 the child will drop every flagSettings hook (CCR-supplied Stop reply-gate included)",
            ),
              logFeatureSad(
                "self_hosted_launcher_hooks",
                "self_hosted_launcher_hooks_disabled_by_repo_disableAllHooks",
              ));
          else if (Un)
            logFeatureSad(
              "self_hosted_launcher_hooks",
              "self_hosted_launcher_hooks_confine_scan_aborted",
            );
          else logFeatureOk("self_hosted_launcher_hooks");
      }
      if (n.aborted)
        return (
          i(
            `[runner:session] Aborted after git prep for ${e} \u2014 bailing before spawn`,
          ),
          { result: "abandoned" }
        );
      let En,
        an = new Map(),
        k = !1,
        J =
          b({
            type: "control_request",
            request_id: `runner-session-gone-${e}`,
            request: { subtype: "end_session", reason: "session_not_found" },
          }) +
          `
`,
        je = (N, I) => {
          if (!wr(N)) return !1;
          if (k) return !0;
          return (
            (k = !0),
            h(
              `[runner:session] ${e} ${I} says session gone server-side \u2014 sending end_session to child`,
            ),
            En?.(J),
            !0
          );
        },
        nn = zn({
          getAccessToken: async () => {
            try {
              let { token: N } = await r.refreshToken(O.current);
              return N;
            } catch (N) {
              if (je(N, "refreshToken")) nn.cancel(e);
              throw N;
            }
          },
          onRefresh: (N, I) => {
            if (((O.current = I), de))
              process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = I;
            if (rt) {
              let Q = rt;
              bt = bt.then(() => mr(Q, I, h, ie, fe));
            }
            (fs({ pendingAcks: an, sessionId: e, onStatus: h }),
              ls({
                write: En,
                envVar: "CLAUDE_CODE_SESSION_ACCESS_TOKEN",
                token: I,
                sessionId: e,
                label: "session_token",
                onStatus: h,
                pendingAcks: an,
              }));
          },
          label: "self-hosted-runner-session",
        });
      nn.schedule(e, O.current);
      let et, Nt;
      try {
        Te.lap();
        let N = await Xt();
        if (Tt && x !== void 0) throw x;
        let I =
            N === void 0 ? void 0 : Math.round(performance.now() - N.armedAt),
          Q;
        if (N !== void 0 && I !== void 0 && I <= is) Q = N.config;
        else {
          if (I !== void 0)
            i(
              `[runner:session] early /remote result is ${I}ms old (> ${is}ms) \u2014 re-fetching for a fresh inference token`,
            );
          Q = await gn(() => r.getSessionRemoteConfig(e, O.current, n), {
            initialDelayMs: 1000,
            maxDelayMs: 30000,
            signal: n,
            ...(Tt && { shouldRetry: () => x === void 0 }),
            onRetry: (Oe, he) => {
              i(
                `[runner:session] /remote re-fetch attempt ${Oe} failed: ${he}. Retrying.`,
              );
            },
          });
        }
        if (Q)
          ((C = Q),
            i(
              `[runner:session] Re-fetched /remote for fresh inference token (expires_in=${C.inference_auth?.expires_in_seconds}s)`,
            ));
        else
          i(
            "[runner:session] /remote re-fetch failed after retries \u2014 using stale step-2 token. Interval refresher will converge.",
          );
        if (
          (Te.mark("runner_prep_remote_refetch_ms"),
          At && C.inference_auth?.access_token)
        )
          ds(At, `inference_token_${e}.txt`, C.inference_auth.access_token, h);
        let se = ps({
            intervalMs: hs(C.inference_auth?.expires_in_seconds),
            refresh: async () => {
              let Oe = await r.getSessionRemoteConfig(e, O.current, n),
                he = Oe.inference_auth?.access_token;
              if (!he)
                throw Error(
                  "getSessionRemoteConfig returned no inference_auth.access_token",
                );
              return (
                fs({ pendingAcks: an, sessionId: e, onStatus: h }),
                ls({
                  write: En,
                  envVar: "CLAUDE_CODE_OAUTH_TOKEN",
                  token: he,
                  sessionId: e,
                  label: "inference_token",
                  onStatus: h,
                  expiresInSeconds: Oe.inference_auth?.expires_in_seconds,
                  pendingAcks: an,
                }),
                hs(Oe.inference_auth?.expires_in_seconds)
              );
            },
            onError: (Oe) => {
              if (je(Oe, "/remote")) {
                se.cancel();
                return;
              }
              h(
                `[runner:session] inference_token refresh failed: ${Oe}. Retrying shortly.`,
              );
            },
            signal: n,
          }),
          ce = {};
        await uu(
          Promise.all([
            jt?.then((Oe) => (ce.atClaim = Oe)).catch(() => {}),
            jt === void 0
              ? void 0
              : pr()
                  .then((Oe) => (ce.late = Oe))
                  .catch(() => {}),
            yt?.then((Oe) => (ce.checkout = Oe)).catch(() => {}),
          ]),
          Gi,
          "startup probes",
        ).catch(() => {});
        let T = ce.atClaim === void 0 ? void 0 : es(ce.atClaim, ce.late ?? {}),
          pe = ce.checkout,
          Xe;
        try {
          if ((await Qt("start_cc", "started", "Starting Claude Code"), Tt))
            await E();
          (q?.cancel(), (ut = !0));
          let Oe = void 0;
          ((Xe = Kot({
            sessionId: e,
            apiBaseUrl: new URL(Ds(C.api_base_url, e).sdkUrl).origin,
            tokenFilePath: rt,
            binaryResolution: "pinned",
            log: i,
          })),
            (et = await ro({
              execPath: o,
              execArgs: c,
              config: C,
              sessionId: e,
              sessionToken: O.current,
              runnerStartupTiming: Oe,
              workerEpoch: Ee,
              capacity: m,
              healthPort: p,
              clientPlatform: ne,
              cwd: Ct,
              configDir: Ze,
              stageFileRoot: _e,
              governedGit: Se,
              governedGitConfigPath: nt,
              debugFile: Ut,
              mcpConfigPath: ve,
              launcherSettingsPath: It,
              addDirs: at,
              onDebug: i,
              onStatus: h,
              onSessionActivity: L,
              onBgTaskLedger: S,
              onBgFollowupPending: w,
              onChildLifecycle: V
                ? (he) => {
                    if (he === "spawned") V(he);
                    else Nt = he;
                  }
                : void 0,
              onChildInit: () => {
                ((Ke = !0),
                  ae?.({ kind: "end", durationSec: (Date.now() - Et) / 1000 }));
              },
              onSessionStartHookError: te,
              onMaxLifetime: le,
              onChildTerminating: we,
              postSessionHookTimeoutMs: t.postSessionHookTimeoutMs ?? yn,
              pushOutcomeOnRelease: St ?? !1,
              signal: n,
              onTokenAck: (he) => {
                let Ft = an.get(he);
                if (Ft)
                  (an.delete(he),
                    h(
                      `[runner:session] ${Ft.label} update ${he} acked by child (${Date.now() - Ft.sentAtMs}ms)`,
                    ));
              },
              onChildStdinReady: (he) => {
                if (((En = he), k)) he(J);
              },
            })));
        } finally {
          (se.cancel(), (En = void 0), Xe?.then((Oe) => Oe?.stop()));
        }
      } finally {
        nn.cancelAll();
      }
      F = et.result;
      let mt = typeof n.reason === "string" ? n.reason : void 0;
      if (et.result === "failed")
        ((Re = `child exited ${et.exitCode ?? "null"}: ${et.stderrTail}`),
          (me = "SESSION_FAILURE_KIND_RUNNER_CRASH"),
          (v = !0));
      else if (et.result === "interrupted")
        Re = `child interrupted (SIGTERM/watchdog): ${et.stderrTail}`;
      if (
        (i(`[runner:session] Session ${e} completed: ${F}`),
        F === "failed" || F === "interrupted")
      ) {
        let N = await Ss({
          apiClient: r,
          apiBaseUrl: C.api_base_url,
          sessionId: e,
          sessionToken: O.current,
          workerEpoch: Ee,
          exitCode: et.exitCode,
          exitSignal: et.exitSignal,
          stderrTail: et.stderrTail,
          onDebug: i,
          onStatus: h,
          signal: n,
        });
        if (N === "session_gone") k = !0;
        else if (N === "epoch_stale") ((it = !0), (me = void 0));
      }
      if (
        F === "failed" &&
        k &&
        (et.stderrTail.includes("SDKStartup: exiting without result") ||
          et.stderrTail.includes("RemoteIO: transport closed permanently") ||
          et.stderrTail.includes("worker epoch mismatch (409)"))
      )
        (h(
          `[runner:session] ${e} child exit ${et.exitCode ?? "null"} after server end_session \u2014 session archived/deleted; clean close, not a runner failure`,
        ),
          (F = "completed"),
          (Re = void 0),
          (me = void 0),
          (v = !1));
      if (F === "failed")
        logFeatureBad("self_hosted_session_handle", "self_hosted_session_child_failed");
      else if (F === "completed") logFeatureOk("self_hosted_session_handle");
      if (Nt !== void 0 && (F === "completed" || F === "failed")) V?.(F);
      else if (F === "interrupted")
        V?.(
          mt === "idle-release" || mt === "deassign"
            ? "completed"
            : "interrupted",
        );
    } catch (K) {
      if ((q?.cancel(), n.aborted)) {
        let Qe = typeof n.reason === "string" ? n.reason : "unspecified";
        return (
          i(
            `[runner:session] ${e} aborted during setup (reason=${String(Qe)}) \u2014 not a failure`,
          ),
          (F = "interrupted"),
          { result: "interrupted" }
        );
      }
      let Ne = Tt
        ? await E().then(
            () => !1,
            (Qe) => kn(Qe),
          )
        : !1;
      if (kn(K) || Ne) {
        let Qe =
          Ne && !kn(K)
            ? ` Setup had meanwhile thrown: ${ml(K instanceof Error ? K.message : String(K))}`
            : "";
        return (
          i(
            `[runner:session] epoch fence tripped \u2014 another runner has taken ${e} (we got epoch ${Ee} but server rejected). Aborting before spawn.${Qe}`,
          ),
          (it = !0),
          (F = "abandoned"),
          { result: "abandoned" }
        );
      }
      let Le = ml(K instanceof Error ? K.message : String(K));
      Re = `setup threw: ${Le}`;
      let gt = K instanceof Vn || Vlt(Le);
      {
        let Qe = P_e(K);
        if (Qe !== void 0 && Qe >= 500)
          me = "SESSION_FAILURE_KIND_ANTHROPIC_CONTROL_PLANE_5XX";
        else if (gt) me = "SESSION_FAILURE_KIND_SESSION_CONFIG_ERROR";
      }
      if (gt) ye = "SETUP_FAILURE_KIND_SOURCE_REF_NOT_FOUND";
      if (
        ((v = !0),
        logFeatureBad("self_hosted_session_handle", "self_hosted_session_setup_failed"),
        i(`[runner:session] Session ${e} threw: ${Le}`),
        Ee === void 0)
      )
        i(
          `[runner:session] Session ${e} setup failed at/before registerWorker \u2014 skipping best-effort UI failure post (no valid epoch)`,
        );
      else if (
        (await Ss({
          apiClient: r,
          apiBaseUrl: C.api_base_url,
          sessionId: e,
          sessionToken: O.current,
          workerEpoch: Ee,
          exitCode: null,
          exitSignal: null,
          stderrTail: Le,
          onDebug: i,
          onStatus: h,
          signal: n,
        })) === "epoch_stale"
      )
        it = !0;
      F = "failed";
    }
  } catch (_e) {
    if (n.aborted)
      return (
        i(
          `[runner:session] ${e} aborted during pre-spawn \u2014 not a failure`,
        ),
        { result: "interrupted" }
      );
    let D = ml(_e instanceof Error ? _e.message : String(_e));
    Re = `pre-spawn threw: ${D}`;
    {
      let ue = P_e(_e);
      if (ue !== void 0 && ue >= 500)
        me = "SESSION_FAILURE_KIND_ANTHROPIC_CONTROL_PLANE_5XX";
    }
    if (
      ((v = !0),
      logFeatureBad("self_hosted_session_handle", "self_hosted_session_prespawn_failed"),
      O.current && C)
    )
      i(
        `[runner:session] FATAL pre-spawn: ${e}: ${D} \u2014 cannot post failure to UI: no worker epoch obtained`,
      );
    else if (O.current)
      i(
        `[runner:session] FATAL pre-spawn: ${e}: ${D} \u2014 cannot post failure to UI: config not yet fetched`,
      );
    else
      i(
        `[runner:session] FATAL pre-spawn: ${e}: ${D} \u2014 cannot post failure to UI: no session_token obtained`,
      );
    F = "failed";
  } finally {
    let _e = t.postSessionHookTimeoutMs ?? yn;
    if (
      St &&
      ut &&
      F !== "completed" &&
      n.reason !== "deassign" &&
      !it &&
      _.length > 0
    ) {
      h(
        `[runner:session] ${e} ${F}: --push-outcome-on-release pushing ${_.length} outcome branch(es) to the source remote`,
      );
      let D = Date.now() + Tn;
      for (let ue of _) {
        let Se = D - Date.now();
        if (Se <= 0) {
          i(
            `[runner:session] push-on-release budget exhausted; skipping '${ue.branch}' (best-effort)`,
          );
          continue;
        }
        if (ue.createdSha) {
          if (
            (await ms(ue.canonicalPath, `refs/heads/${ue.branch}`, Se)) ===
            ue.createdSha
          ) {
            i(
              `[runner:session] push-on-release '${ue.branch}' has no commits since creation; skipping (best-effort)`,
            );
            continue;
          }
        }
        let Je = D - Date.now();
        if (Je <= 0) {
          i(
            `[runner:session] push-on-release budget exhausted; skipping '${ue.branch}' (best-effort)`,
          );
          continue;
        }
        await Io(ue.canonicalPath, ue.branch, ue.source, Je, i);
      }
    }
    if (ut) {
      let D = await yot(Jt, "post-session");
      if (D)
        await vNn({
          hookPath: D,
          cwd: He ?? d,
          sessionId: e,
          exitReason: F,
          debugLogPath: Ut,
          workspacePaths: Pe,
          sessionAccessToken: O.current,
          apiBaseUrl: C?.api_base_url,
          clientPlatform: ne,
          timeoutMs: _e,
          onStatus: h,
          onDebug: i,
        }).catch((ue) => {
          i(`[runner:hook:post-session] unexpected rejection (ignored): ${ue}`);
        });
    }
    if (Ee !== void 0 && O.current && C?.api_base_url)
      await Wo({
        apiClient: r,
        apiBaseUrl: C.api_base_url,
        sessionId: e,
        sessionToken: O.current,
        workerEpoch: Ee,
        debugFile: Ut,
        onDebug: i,
      }).catch((D) => {
        i(`[runner:session] debug log flush failed (best-effort): ${D}`);
      });
    if (F === "completed") await xe(unlink(Ut), `unlink ${Ut}`).catch(() => {});
    else
      h(`[runner:session] ${e} ${F} \u2014 child debug log preserved at ${Ut}`);
    if (ve) await xe(unlink(ve), `unlink ${ve}`).catch(() => {});
    for (let D of [...(It ? [It] : []), ..._n])
      await xe(unlink(D), `unlink ${D}`).catch(() => {});
    if (ge.length > 0)
      await M2n({ worktrees: ge, onDebug: i }).catch((D) => {
        i(`[runner:session] worktree cleanup failed: ${D}`);
      });
    for (let D of _)
      await Uo(D.canonicalPath, D.branch, D.needsDetach, i, !!de);
    for (let D of st)
      for (let ue of [
        ["credential.helper", "^$"],
        [`credential.${D.origin}.helper`],
      ])
        await new Promise((Se) => {
          let Je = spawn(
              "git",
              ["-C", D.path, "config", "--local", "--unset-all", ...ue],
              {
                cwd: void 0,
                stdio: "ignore",
                windowsHide: !0,
                ...Bs("helper"),
              },
            ),
            K = setTimeout((Le) => Le.kill("SIGKILL"), cn, Je),
            Ne = () => {
              (clearTimeout(K), Se());
            };
          (Je.on("close", Ne), Je.on("error", Ne));
        });
    for (let D of ze)
      await uu(
        ct(D, { recursive: !0, force: !0 }),
        rs,
        `[runner:hook] rm -rf ${D}`,
      ).catch((ue) => {
        i(`[runner:hook] cleanup ${D} failed: ${ue}`);
      });
    if (de) delete process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
    if (rt) {
      if (((Zt = !0), await bt, await us(rt, h, ie, fe), $t)) {
        let D = rt;
        Lt.then(() => us(D, h, void 0, fe)).catch(() => {});
      }
    }
    if (Et !== void 0 && !Ke) ae?.({ kind: "exit-before-init", failed: v });
  }
  return {
    result: F,
    failureReason: Re,
    setupFailureKind: ye,
    failureKind: me,
  };
}
function ro(e) {
  let {
      execPath: t,
      execArgs: n = [],
      config: r,
      sessionId: s,
      sessionToken: d,
      workerEpoch: o,
      cwd: c,
      configDir: m,
      stageFileRoot: p,
      governedGit: i,
      governedGitConfigPath: h,
      capacity: L,
      healthPort: S,
      clientPlatform: w,
      debugFile: U,
      mcpConfigPath: V,
      launcherSettingsPath: ne,
      addDirs: ae,
      onDebug: te,
      onStatus: le,
      onBgTaskLedger: we,
      onBgFollowupPending: H,
      signal: fe,
      onChildStdinReady: ke,
      onTokenAck: Ae,
      onChildLifecycle: de,
      onChildInit: Me,
      onSessionStartHookError: lt,
      onMaxLifetime: pt,
      onChildTerminating: qe,
      runnerStartupTiming: Gt,
    } = e,
    St = { current: void 0 },
    Ue =
      e.onSessionActivity === void 0
        ? void 0
        : (x, ee) => {
            if (x !== "activity" && St.current?.terminationRequested) {
              te(
                `[runner:session] ${s} ignoring '${x}' from a child that is being terminated`,
              );
              return;
            }
            e.onSessionActivity?.(x, ee);
          },
    { sdkUrl: Rt, resumeUrl: zt } = Ds(r.api_base_url, s),
    ht = [
      ...n,
      "--print",
      "--sdk-url",
      Rt,
      "--input-format",
      "stream-json",
      "--output-format",
      "stream-json",
      "--replay-user-messages",
      `--resume=${zt}`,
      "--debug-file",
      U,
    ];
  if (V) ht.push("--mcp-config", V);
  if (ne) ht.push("--settings", ne);
  for (let x of ae ?? []) ht.push("--add-dir", x);
  let At = sanitizeServerClaudeCodeArgs(r.claude_code_args);
  if (serverToolsValueNamesSelfHostedRunnerTool(r.claude_code_args.tools)) {
    if (
      (te(
        "[runner:session] Stripped self-hosted-runner operator tool names from the server-supplied tools arg",
      ),
      At.tools === "")
    )
      te(
        "[runner:warn] server-supplied tools arg contained ONLY self-hosted-runner operator tool names; dropping --tools and using the default pool",
      );
  }
  let Wt = Qat(ht, At, to, (x, ee) =>
    te(`[runner:session] Skipping ${x} claude_code_arg: ${ee}`),
  );
  if (Wt > 0)
    te(
      `[runner:session] Added ${Wt}/${Object.keys(r.claude_code_args).length} claude_code_args`,
    );
  let We = r.inference_auth;
  if (!We?.access_token)
    throw new R(
      `Session ${s} /remote response is missing inference_auth.access_token`,
      "/remote response is missing inference_auth.access_token",
    );
  te(
    `[runner:session] inference_auth set (expires_in=${We.expires_in_seconds}s)`,
  );
  let De = s.replace(/^cse_/, "session_"),
    wt =
      r.environment_variables.OTEL_RESOURCE_ATTRIBUTES ??
      a.OTEL_RESOURCE_ATTRIBUTES,
    $e =
      L > 1 && S !== void 0 && S > 0 && a.OTEL_METRICS_EXPORTER === "prometheus"
        ? {
            OTEL_METRICS_EXPORTER: "otlp",
            OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: "http/json",
            OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: `http://127.0.0.1:${S}/v1/metrics`,
            OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: "none",
            OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: "cumulative",
            OTEL_RESOURCE_ATTRIBUTES:
              (wt ? `${wt},` : "") +
              `session.id=${De}` +
              (w ? `,client.platform=${w}` : ""),
          }
        : {},
    Tt = Kn(d),
    jt = {
      ...process.env,
      ...r.environment_variables,
      CLAUDE_CODE_SESSION_ACCESS_TOKEN: d,
      CLAUDE_SESSION_INGRESS_TOKEN_FILE: vs(m, o),
      CLAUDE_CODE_OAUTH_TOKEN: We.access_token,
      CLAUDE_CODE_OAUTH_SCOPES:
        "user:inference user:ccr_inference user:file_upload",
      CLAUDE_CONFIG_DIR: m,
      CLAUDE_STAGE_FILE_ROOT: p,
      ANTHROPIC_MODEL: void 0,
      ANTHROPIC_DEFAULT_MODEL: void 0,
      CLAUDE_CODE_ENVIRONMENT_KIND: "byoc",
      CLAUDE_CODE_BYOC_ENABLE_DATADOG:
        process.env.CLAUDE_CODE_BYOC_ENABLE_DATADOG,
      DISABLE_TELEMETRY: process.env.DISABLE_TELEMETRY,
      DO_NOT_TRACK: process.env.DO_NOT_TRACK,
      CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC:
        process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC,
      DISABLE_ERROR_REPORTING: process.env.DISABLE_ERROR_REPORTING,
      DISABLE_GROWTHBOOK: process.env.DISABLE_GROWTHBOOK,
      ...$e,
      CLAUDE_CODE_OTEL_DIAG_STDERR: "1",
      CLAUDE_CODE_TEE_SDK_STDOUT: "1",
      CLAUDE_RUNNER_ACTIVITY_FD: "3",
      CLAUDE_CODE_REMOTE: "true",
      CLAUDE_CODE_RETRY_WATCHDOG: "1",
      CLAUDE_CODE_MAX_RETRIES: "",
      CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE: "self_hosted",
      CLAUDE_RUNNER_CLIENT_PLATFORM: O_e(w),
      DISABLE_AUTOUPDATER: "1",
      CLAUDE_ENABLE_STREAM_WATCHDOG: "1",
      CLAUDE_RUNNER_CLAUDE_BIN: process.execPath,
      CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD: "1",
      CLAUDE_CODE_REMOTE_SESSION_ID: s,
      CLAUDE_CODE_REMOTE_SESSION_UUID: H5(s),
      CLAUDE_CODE_ACCOUNT_UUID:
        r.environment_variables?.CLAUDE_CODE_ACCOUNT_UUID ?? void 0,
      CLAUDE_CODE_ORGANIZATION_UUID:
        r.environment_variables?.CLAUDE_CODE_ORGANIZATION_UUID ?? void 0,
      CCR_SESSION_ACCOUNT_EMAIL: Tt ?? void 0,
      ...ra(Tt),
      ANTHROPIC_BASE_URL: r.api_base_url,
      SESSION_INGRESS_URL: r.api_base_url,
      ...(r.api_base_url.includes("staging")
        ? { USE_STAGING_OAUTH: "1" }
        : { USE_STAGING_OAUTH: void 0 }),
      CLAUDE_CODE_USE_CCR_V2: "1",
      CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG: i?.toolConfig.gitConfig
        ? "1"
        : void 0,
      CLAUDE_CODE_AGENT_PROXY_GH_SHIM: i?.toolConfig.ghPathShim ? "1" : void 0,
      ...(i?.toolConfig.gitConfig && { GIT_CONFIG_GLOBAL: h }),
      ...(i && (i.toolConfig.gitConfig || i.toolConfig.ghPathShim)
        ? { CCR_AGENT_PROXY_ENABLED: "1" }
        : r.environment_variables?.AGENT_PROXY_URL
          ? {}
          : { CCR_AGENT_PROXY_ENABLED: void 0 }),
      SELF_HOSTED_RUNNER_POOL_SECRET: void 0,
      SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0,
      ...wNn(),
      SELF_HOSTED_RUNNER_HOST_CONFIG_DIR: void 0,
      CLAUDE_CODE_EXIT_AFTER_STOP_DELAY: void 0,
      CLAUDE_CODE_WORKER_EPOCH: String(o),
      CLAUDE_CODE_RESUME_INTERRUPTED_TURN: o > 1 ? "1" : void 0,
      CLAUDE_CODE_RESUME_PROMPT:
        o > 1
          ? "Continue from where you left off. This session moved to a new runner; files you created earlier may no longer exist, so verify the working directory state before relying on prior edits."
          : void 0,
      CCR_SPAWN_TIMESTAMP_MS: String(Date.now()),
      CCR_RUNNER_STARTUP_TIMING: Gt,
    };
  te(
    `[runner:session] Spawning child: ${[t, ...n].join(" ")} (${ht.length - n.length} args) ANTHROPIC_BASE_URL=${r.api_base_url} CLAUDE_CODE_WORKER_EPOCH=${o} cwd=${c}`,
  );
  let Fe = spawn(t, ht, {
      cwd: c,
      stdio: ["pipe", "pipe", "pipe", "pipe"],
      env: jt,
      windowsHide: !0,
      detached: !0,
    }),
    yt;
  try {
    ((yt = Fe.stdio[3]),
      yt?.on?.("error", (x) => {
        (te(
          `[runner:session] activity pipe error (${x.message}); falling back to stdout readline`,
        ),
          (yt = void 0));
      }));
  } catch (x) {
    (te(
      `[runner:session] activity pipe unavailable (${x instanceof Error ? x.message : String(x)}); falling back to stdout readline`,
    ),
      (yt = void 0));
  }
  (le(`[runner:session] ${s} child spawned pid=${Fe.pid} cwd=${c}`),
    de?.("spawned"),
    Ue?.("startup"),
    ke?.((x) => {
      if (Fe.stdin && !Fe.stdin.destroyed) Fe.stdin.write(x);
    }));
  let Te = new Sr({
    child: Fe,
    sessionId: s,
    maxLifetimeMs: Ye("SELF_HOSTED_RUNNER_MAX_LIFETIME_MS"),
    maxLifetimeGraceMs: Ye("SELF_HOSTED_RUNNER_MAX_LIFETIME_GRACE_MS") || uo,
    sigkillGraceMs: Math.min(
      Math.max(
        Ye("SELF_HOSTED_RUNNER_SIGKILL_GRACE_MS") || 30000,
        e.postSessionHookTimeoutMs + (e.pushOutcomeOnRelease ? Tn : 0) + ln,
      ),
      2147483647,
    ),
    sigkillTimeoutMs:
      Ye("SELF_HOSTED_RUNNER_SESSION_STOP_GRACE_MS") ||
      Sr.SIGKILL_TIMEOUT_DEFAULT_MS,
    onMaxLifetime: pt,
    onTerminating: qe,
    onDebug: te,
    onStatus: le,
  });
  St.current = Te;
  let Et = () => Te.terminate();
  if ((fe.addEventListener("abort", Et, { once: !0 }), fe.aborted))
    Te.terminate();
  let Ke = new Map(),
    v = () => {
      let x = 0;
      for (let ee of Ke.values())
        if (ee !== "monitor_mcp" && ee !== "monitor_ws") x++;
      return x;
    },
    O = null,
    C,
    F = !1,
    Re = !1,
    ye = !1,
    me = !1,
    ve = !1,
    It = !1,
    _n = 120000,
    Ze = () => O !== null && Date.now() < O,
    nt = () => ({
      liveTasks: Ke.size,
      liveTaskIds: Array.from(Ke, ([x, ee]) => `${x}:${ee}`),
      wakeupInMs: O !== null ? Math.max(0, O - Date.now()) : void 0,
      bgResultAwaitingFollowup: $t,
    }),
    Ut = Ye("SELF_HOSTED_RUNNER_BG_RESULT_GRACE_MS") || tr,
    Ee = new Set(),
    He = !1,
    rt = new Set(),
    bt = new Set(),
    $t = !1,
    Lt,
    Zt = () => {
      if (Lt !== void 0) (clearTimeout(Lt), (Lt = void 0));
    },
    ie = (x, ee = !1, E = !1) => {
      if (!ee) (Zt(), (He = !1), rt.clear());
      if ($t)
        (($t = !1),
          te(
            `[runner:session] ${s} background-result follow-up cleared (${x})`,
          ),
          H?.(!1, E || St.current?.terminationRequested === !0));
    },
    ge = () => {
      (Zt(),
        (Lt = setTimeout(() => {
          ((Lt = void 0),
            le(
              `[runner:session] ${s} no follow-up turn within ${formatDuration(Ut)} of the background task finishing \u2014 ` +
                "releasing the follow-up hold",
            ),
            ie("grace elapsed"),
            ut());
        }, Ut)));
    },
    ze = () => {
      if (!$t)
        (($t = !0),
          le(
            `[runner:session] ${s} background task finished; follow-up turn ` +
              "pending \u2014 session still counted as busy (grace " +
              `${formatDuration(Ut)})`,
          ),
          H?.(!0));
      if (!F) ge();
    },
    st = (x) => {
      if ((Ee.delete(x), bt.delete(x), He && v() === 0 && !me && !F)) ze();
    },
    Pe = (x) => {
      if (bt.has(x)) {
        st(x);
        return;
      }
      if (Ee.delete(x)) ((He = !0), rt.add(x));
      if (v() > 0) return;
      if (me) return;
      if (!(He || !F)) return;
      ((He = !0), rt.add(x), ze());
    },
    ut = () => {
      if (F || Ke.size > 0 || Ze() || $t) return;
      if (C !== void 0) (clearTimeout(C), (C = void 0));
      Ue?.("turn-end");
    },
    it = (x) => {
      let ee;
      try {
        ee = z(x);
      } catch {
        return;
      }
      if (!ee || typeof ee !== "object") return;
      let E = ee;
      if (E.type === "control_response") {
        let D = E.response?.request_id;
        if (typeof D === "string" && D.startsWith("shr-token-")) Ae?.(D);
      }
      if (E.type === "assistant")
        te("[runner:session] Activity: assistant message");
      else if (E.type === "result")
        te(`[runner:session] Result: subtype=${E.subtype}`);
      if (E.type === "system" && E.subtype === "task_started") {
        if (
          typeof E.task_id === "string" &&
          E.task_type !== "in_process_teammate"
        ) {
          if (
            (Ke.set(
              E.task_id,
              typeof E.task_type === "string" ? E.task_type : "unknown",
            ),
            E.owned_by_subagent === !0)
          )
            bt.add(E.task_id);
          else bt.delete(E.task_id);
          we?.(v());
        }
        return;
      }
      if (E.type === "system" && E.subtype === "task_updated") {
        let _e = E.patch,
          D = _e?.status;
        if (
          typeof E.task_id === "string" &&
          _e?.is_backgrounded === !0 &&
          Ke.has(E.task_id)
        )
          Ee.add(E.task_id);
        if (
          typeof E.task_id === "string" &&
          (D === "completed" || D === "failed" || D === "killed") &&
          Ke.delete(E.task_id)
        )
          (Pe(E.task_id), we?.(v()), ut());
        return;
      }
      if (E.type === "system" && E.subtype === "task_notification") {
        if (typeof E.task_id === "string" && Ke.delete(E.task_id)) {
          if (E.status === "stopped") st(E.task_id);
          else Pe(E.task_id);
          (we?.(v()), ut());
        }
        return;
      }
      if (E.type === "system" && E.subtype === "background_tasks_changed") {
        let _e = E.tasks;
        if (Array.isArray(_e))
          for (let D of _e) {
            let ue = D?.task_id;
            if (typeof ue === "string") Ee.add(ue);
          }
        return;
      }
      if (
        E.type === "system" &&
        E.subtype === "hook_response" &&
        E.hook_event === "SessionStart" &&
        E.outcome === "error"
      ) {
        lt?.();
        return;
      }
      if (E.type === "system" && E.subtype === "init") {
        if (!ve) ((ve = !0), Me?.());
        Ue?.("activity");
        return;
      }
      if (E.type === "system" && E.subtype === "turn_starting") {
        if (!ve) return;
        if (
          ((ye = !0),
          Ue?.("activity"),
          E.mode === void 0 ||
            (E.mode === "task-notification" && !("task_id" in E)) ||
            (E.mode === "task-notification" &&
              typeof E.task_id === "string" &&
              rt.has(E.task_id)))
        )
          ie("follow-up turn starting");
        else (ie("non-follow-up turn starting", !0), Zt());
        return;
      }
      if (E.type === "system" && E.subtype === "session_state_changed") {
        if (typeof E.waiting_on_user === "boolean")
          ((Re = !0), (me = E.waiting_on_user));
        if (E.state === "idle") {
          if (!It) Ue?.("turn-end");
          return;
        }
        if (!ve) return;
        if (typeof E.waiting_on_user === "boolean")
          (Ue?.(E.waiting_on_user ? "awaiting-action" : "activity"),
            ie(
              E.waiting_on_user ? "child parked at a prompt" : "child running",
              !0,
            ));
        else if (E.state === "requires_action")
          (Ue?.("awaiting-action"), ie("child parked at a prompt", !0));
        else if (E.state === "running")
          (Ue?.("activity"), ie("child running", !0));
        return;
      }
      if (E.type === "assistant") {
        let _e = E.message?.content;
        if (Array.isArray(_e)) {
          for (let D of _e)
            if (
              D &&
              typeof D === "object" &&
              D.type === "tool_use" &&
              D.name === Xi
            ) {
              let ue = D.input,
                Se = Number(ue?.delaySeconds);
              if (Number.isFinite(Se)) {
                let Je = Math.min(3600, Math.max(60, Se));
                O = Date.now() + Je * 1000 + _n;
              }
            }
        }
      }
      if (E.type === "result") {
        if ((Te.noteTurnEnd(), (F = !1), (It = !0), He && v() === 0 && !me))
          ze();
        if (Ke.size === 0 && !Ze() && !$t) Ue?.("turn-end");
        else if (me && !a.CLAUDE_RUNNER_DISABLE_AWAITING_ACTION_OVERRIDE)
          (Ue?.("awaiting-action", nt()), ie("child parked at a prompt", !0));
        else {
          for (let _e of Ke.keys()) Ee.add(_e);
          if ((Ue?.("turn-end-deferred", nt()), $t)) ge();
          if (C !== void 0) clearTimeout(C);
          if (O !== null)
            C = setTimeout(
              () => {
                ((C = void 0), (O = null), ut());
              },
              Math.max(0, O - Date.now()),
            );
        }
      } else if (E.type === "user" || E.type === "assistant") {
        if (E.from_subagent === !0) return;
        if ((Te.noteTurnStart(), !F && E.type === "user")) O = null;
        let _e = !F;
        if (((F = !0), C !== void 0)) (clearTimeout(C), (C = void 0));
        if (!Re) Ue?.("activity");
        if (_e) {
          if ((ie("follow-up turn opened", ye), ye)) Zt();
        }
      }
    };
  if (Fe.stdout) createInterface({ input: Fe.stdout }).on("line", it);
  if (yt) createInterface({ input: yt }).on("line", it);
  let Jt = 50,
    _ = 500,
    q = [];
  if (Fe.stderr)
    createInterface({ input: Fe.stderr }).on("line", (ee) => {
      if (!ve && ee.startsWith("SDKStartup: phase=system_init_emitted"))
        ((ve = !0),
          Me?.(),
          Ue?.("init-observed"),
          te(
            `[runner:session] ${s} sawInit latched via stderr SDKStartup marker`,
          ));
      let E = ao(ee, _);
      if (E.startsWith(PDt)) le(`[runner:session] stderr: ${E}`);
      else te(`[runner:session] stderr: ${E}`);
      if ((q.push(E), q.length > Jt)) q.shift();
    });
  let re = !1;
  return new Promise((x) => {
    (Fe.on("close", (ee, E) => {
      if ((fe.removeEventListener("abort", Et), Te.stop(), C !== void 0))
        (clearTimeout(C), (C = void 0));
      if (Ke.size > 0) (Ke.clear(), bt.clear(), we?.(0));
      ie("child exited", !1, !0);
      let _e = q.join(`
`);
      if (Te.terminationRequested)
        (le(
          `[runner:session] ${s} child exited pid=${Fe.pid} code=${ee} signal=${E} (interrupted \u2014 we asked)`,
        ),
          Te.descendantsReaped.then(() =>
            x({
              result: "interrupted",
              exitCode: ee,
              exitSignal: E,
              stderrTail: _e,
            }),
          ));
      else if (E === "SIGTERM" || E === "SIGINT")
        (le(
          `[runner:session] ${s} child exited pid=${Fe.pid} code=${ee} signal=${E} (interrupted)`,
        ),
          x({
            result: "interrupted",
            exitCode: ee,
            exitSignal: E,
            stderrTail: _e,
          }));
      else if (ee === 0) {
        if (
          (le(
            `[runner:session] ${s} child exited pid=${Fe.pid} code=0 (completed)`,
          ),
          !re)
        )
          ((re = !0), de?.("completed"));
        x({
          result: "completed",
          exitCode: 0,
          exitSignal: null,
          stderrTail: _e,
        });
      } else {
        if (
          (le(
            `[runner:session] ${s} child exited pid=${Fe.pid} code=${ee} signal=${E} (failed) \u2014 debug log at ${U}`,
          ),
          !re)
        )
          ((re = !0), de?.("failed"));
        x({ result: "failed", exitCode: ee, exitSignal: E, stderrTail: _e });
      }
    }),
      Fe.on("error", (ee) => {
        if (
          (fe.removeEventListener("abort", Et),
          Te.stop(),
          te(`[runner:session] ${s} spawn error: ${ee.message}`),
          !re)
        )
          ((re = !0), de?.("failed"));
        x({
          result: "failed",
          exitCode: null,
          exitSignal: null,
          stderrTail: `spawn error: ${ee.message}`,
        });
      }));
  });
}
function Ye(e) {
  let t = process.env[e];
  if (t === void 0 || t === "") return 0;
  let n = Number(t);
  if (!Number.isFinite(n) || n <= 0) return 0;
  return Math.min(n, 2147483647);
}
var Rr = 900000;
function $s() {
  let e = process.env.SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS;
  return e === void 0 || e === ""
    ? Rr
    : Ye("SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS");
}
var yn = 60000,
  tr = 30000,
  Pn = 5000,
  so = 3000,
  io = 1000,
  oo = 1500,
  ln = 15000;
function Tr(e, t, n = 0, r = 0) {
  return Math.ceil((e + t + n + r + ln) / 1000);
}
function ao(e, t) {
  let n = ml(e);
  return n.length > t ? n.slice(0, t) + ` \u2026[+${n.length - t} chars]` : n;
}
var uo = 900000;
class Sr {
  maxLifetimeTimer;
  maxLifetimeGraceTimer;
  sigkillTimer;
  sigkillGraceTimer;
  stopped = !1;
  turnInFlight = !1;
  maxLifetimeDeferred = !1;
  maxLifetimeDecidedByHook = !1;
  terminating = !1;
  treeSnapshot;
  reap = Promise.resolve();
  rootToken;
  terminatedAt = 0;
  child;
  sessionId;
  maxLifetimeGraceMs;
  sigkillTimeoutMs;
  sigkillGraceMs;
  onDebug;
  onStatus;
  onMaxLifetime;
  onTerminating;
  static SIGKILL_TIMEOUT_DEFAULT_MS = Pn;
  constructor(e) {
    if (
      ((this.child = e.child),
      (this.sessionId = e.sessionId),
      (this.maxLifetimeGraceMs = e.maxLifetimeGraceMs),
      (this.sigkillTimeoutMs = e.sigkillTimeoutMs),
      (this.sigkillGraceMs = e.sigkillGraceMs),
      (this.onMaxLifetime = e.onMaxLifetime),
      (this.onTerminating = e.onTerminating),
      (this.onDebug = e.onDebug),
      (this.onStatus = e.onStatus),
      this.child.pid !== void 0)
    )
      getProcessStartTimeAsync(this.child.pid, { skipCache: !0 }).then(
        (t) => {
          this.rootToken = t;
        },
        () => {},
      );
    if (e.maxLifetimeMs > 0) {
      let t = e.maxLifetimeMs;
      this.maxLifetimeTimer = setTimeout(
        (n) => {
          if (this.stopped || this.terminating) return;
          let r;
          try {
            r = this.onMaxLifetime?.();
          } catch (s) {
            this.onStatus(
              `[runner:session] ${this.sessionId} max-lifetime hook threw (${s instanceof Error ? s.message : String(s)}) \u2014 falling back to the watchdog's own decision`,
            );
          }
          if (
            ((this.maxLifetimeDecidedByHook = r !== void 0),
            (r ??= this.turnInFlight ? "wait" : "kill"),
            r === "kill")
          ) {
            (this.onDebug(
              `[runner:stuck] Session ${this.sessionId} exceeded max lifetime of ${n}ms \u2014 aborting child pid=${this.child.pid}`,
            ),
              this.terminate());
            return;
          }
          ((this.maxLifetimeDeferred = !0),
            this.onStatus(
              r === "release"
                ? `[runner:session] ${this.sessionId} max session age reached (${n}ms) while not mid-turn \u2014 handing to the poll loop's release instead of terminating (hard stop in ${this.maxLifetimeGraceMs}ms if it is still alive)`
                : this.maxLifetimeDecidedByHook
                  ? `[runner:session] ${this.sessionId} max session age reached (${n}ms) \u2014 waiting up to ${this.maxLifetimeGraceMs}ms for the in-flight turn to park or finish (it is then released; terminated at the hard stop otherwise)`
                  : `[runner:session] ${this.sessionId} max session age reached (${n}ms) \u2014 waiting up to ${this.maxLifetimeGraceMs}ms for in-flight turn to finish before terminating`,
            ),
            (this.maxLifetimeGraceTimer = setTimeout(
              (s) => {
                if (this.stopped || this.terminating) return;
                if (this.maxLifetimeDecidedByHook)
                  this.onStatus(
                    `[runner:session] ${this.sessionId} still mid-turn, or its release was not accepted, within ${this.maxLifetimeGraceMs}ms of the max session age (${s}ms) \u2014 terminating (hard stop) pid=${this.child.pid}`,
                  );
                else
                  this.onDebug(
                    `[runner:stuck] Session ${this.sessionId} still mid-turn ${this.maxLifetimeGraceMs}ms after max lifetime of ${s}ms \u2014 aborting child pid=${this.child.pid}`,
                  );
                this.terminate();
              },
              this.maxLifetimeGraceMs,
              n,
            )));
        },
        t,
        t,
      );
    }
  }
  noteTurnStart() {
    this.turnInFlight = !0;
  }
  noteTurnEnd() {
    if (
      ((this.turnInFlight = !1),
      this.maxLifetimeDeferred && !this.stopped && !this.terminating)
    ) {
      if (this.maxLifetimeDecidedByHook) return;
      (this.onStatus(
        `[runner:session] ${this.sessionId} in-flight turn finished after max session age \u2014 aborting child pid=${this.child.pid}`,
      ),
        this.terminate());
    }
  }
  signalGroup(e) {
    let t = this.child.pid;
    if (t === void 0) {
      this.child.kill(e);
      return;
    }
    if (t <= 1) return;
    try {
      process.kill(-t, e);
    } catch {
      this.child.kill(e);
    }
  }
  reapDescendants(e) {
    let t = this.treeSnapshot;
    if (t === void 0) return;
    this.treeSnapshot = void 0;
    let n = this.child.pid,
      r = (async () => {
        let s = await t;
        if (s === void 0) {
          this.onStatus(
            `[runner:session] ${this.sessionId} could not list the child's process tree \u2014 signals reached its process group only; detached tool trees may survive`,
          );
          return;
        }
        if (s.rootRecycled) {
          this.onStatus(
            `[runner:session] ${this.sessionId} child pid=${n} now names another process \u2014 no process-tree reap; detached tool trees may survive`,
          );
          return;
        }
        let d;
        if (e > 0) {
          let { live: m, incomplete: p } = await Kr(s);
          if (m > 0 || p) (await Z(e), (d = await ar(s, "SIGKILL")));
        } else d = await ar(s, "SIGKILL");
        if (d?.incomplete) {
          this.onStatus(
            `[runner:session] ${this.sessionId} process-tree identity check did not complete \u2014 ${s.pinned.size - d.proven} of ${s.pinned.size} descendant(s) unverified and not signalled; they may survive`,
          );
          return;
        }
        let o = d?.pids ?? 0,
          c = d?.groups ?? 0;
        if (s.degraded || s.truncated || s.unpinned > 0) {
          this.onStatus(
            `[runner:session] ${this.sessionId} process-tree listing incomplete (partial=${s.degraded} truncated=${s.truncated}) \u2014 SIGKILLed ${o} of ${s.pinned.size} identified descendant(s) and ${c} group(s); ${s.unpinned} descendant(s) could not be identified and were not signalled; they, and any unlisted tool trees, may survive`,
          );
          return;
        }
        this.onDebug(
          d === void 0
            ? `[runner:session] process tree pid=${n}: ${s.pinned.size} descendant(s) at SIGTERM (${s.unpinned} unidentifiable), none outlived the child`
            : `[runner:session] process tree pid=${n}: ${s.pinned.size} descendant(s) at SIGTERM (${s.unpinned} unidentifiable); ${o} outlived the child and were SIGKILLed, with ${c} tool-tree group(s)`,
        );
      })().catch(() => {});
    this.reap = kt(r, e + io).then(() => {});
  }
  get descendantsReaped() {
    return this.reap;
  }
  terminate() {
    if (this.terminating) return;
    if (this.stopped) return;
    ((this.terminating = !0), (this.terminatedAt = Date.now()));
    try {
      this.onTerminating?.();
    } catch {}
    {
      let e = this.child.pid;
      if (e !== void 0)
        this.treeSnapshot = Gr(
          {
            pid: e,
            alive:
              this.child.exitCode === null && this.child.signalCode === null,
            token: this.rootToken,
          },
          so,
        );
      (this.onDebug(
        `[runner:session] Abort signal received, sending SIGTERM to process group pgid=${this.child.pid}`,
      ),
        this.signalGroup("SIGTERM"),
        (this.sigkillTimer = setTimeout(
          (t) => {
            if (!this.stopped)
              (this.onDebug(
                `[runner:session] Child still running after ${t}ms, sending SIGKILL to process group pgid=${this.child.pid} and reaping its process tree`,
              ),
                this.signalGroup("SIGKILL"),
                this.reapDescendants(0),
                (this.sigkillGraceTimer = setTimeout(() => {
                  if (!this.stopped)
                    (this.onDebug(
                      `[runner:stuck] Session ${this.sessionId} did not exit after SIGKILL within ${this.sigkillGraceMs}ms (likely D-state). Forcing process exit.`,
                    ),
                      process.exit(1));
                }, this.sigkillGraceMs)));
          },
          this.sigkillTimeoutMs,
          this.sigkillTimeoutMs,
        )));
    }
  }
  stop() {
    if (
      ((this.stopped = !0),
      this.reapDescendants(
        Math.max(
          1,
          Math.min(oo, this.terminatedAt + this.sigkillTimeoutMs - Date.now()),
        ),
      ),
      this.sigkillTimer)
    )
      clearTimeout(this.sigkillTimer);
    if (this.sigkillGraceTimer) clearTimeout(this.sigkillGraceTimer);
    if (this.maxLifetimeTimer) clearTimeout(this.maxLifetimeTimer);
    if (this.maxLifetimeGraceTimer) clearTimeout(this.maxLifetimeGraceTimer);
  }
  get terminationRequested() {
    return this.terminating;
  }
}
async function gn(e, t) {
  let n = t.initialDelayMs,
    r = 0;
  for (;;) {
    if (t.signal?.aborted) return;
    r++;
    try {
      return await e();
    } catch (s) {
      if (t.shouldRetry && !t.shouldRetry(s)) throw s;
      if (t.maxAttempts !== void 0 && r >= t.maxAttempts) throw s;
      t.onRetry?.(r, s);
      let d = n * (0.75 + Math.random() * 0.5);
      (await Z(d, t.signal), (n = Math.min(n * 2, t.maxDelayMs)));
    }
  }
}
class Cs {
  last = 0;
  next() {
    return ++this.last;
  }
}
var co = new j(() => new Cs());
function lo() {
  return co.of(B().host);
}
function ls(e) {
  let t =
    e.expiresInSeconds !== void 0 ? ` (expires_in=${e.expiresInSeconds}s)` : "";
  if (!e.write) {
    e.onStatus(
      `[runner:session] ${e.label} refreshed for ${e.sessionId} but child stdin is not wired yet \u2014 token NOT delivered; next interval will retry${t}`,
    );
    return;
  }
  let n;
  if (e.pendingAcks)
    ((n = `shr-token-${e.label}-${lo().next()}`),
      e.pendingAcks.set(n, {
        label: e.label,
        sentAtMs: e.nowMs ?? Date.now(),
      }));
  (e.write(
    b({
      type: "update_environment_variables",
      variables: { [e.envVar]: e.token },
      ...(n && { request_id: n }),
    }) +
      `
`,
  ),
    e.onStatus(
      `[runner:session] ${e.label} refreshed for ${e.sessionId} \u2014 pushed to child via stdin${t}${n ? ` [${n}]` : ""}`,
    ));
}
function fs(e) {
  let t = e.nowMs ?? Date.now(),
    n = e.graceMs ?? 90000;
  for (let [r, s] of e.pendingAcks)
    if (t - s.sentAtMs >= n)
      (e.onStatus(
        `[runner:session] WARNING: ${s.label} update ${r} for ${e.sessionId} was never acked by the child \u2014 the stdin control channel may be severed (wrapper backgrounding without <&0?). Token rotation is NOT reaching the child; it will 401 at token TTL. See docs/self-hosted-runners-guide.md \xA7 "The child must keep the runner's stdin".`,
      ),
        e.pendingAcks.delete(r));
}
function ps(e) {
  let t = e.errorRetryMs ?? 30000,
    n = e.maxShortRetries ?? 5,
    r,
    s = !1,
    d = e.intervalMs,
    o = 0,
    c = () => m();
  e.signal.addEventListener("abort", c, { once: !0 });
  function m() {
    if (((s = !0), r)) clearTimeout(r);
    e.signal.removeEventListener("abort", c);
  }
  function p() {
    if (s || e.signal.aborted) return;
    e.refresh()
      .then((i) => {
        if (((o = 0), i !== void 0 && i > 0)) d = i;
      })
      .catch((i) => {
        (o++, e.onError(i));
      })
      .finally(() => {
        if (s || e.signal.aborted) return;
        let i = o > 0 && o <= n ? Math.min(t, d) : d;
        r = setTimeout(p, i);
      });
  }
  return ((r = setTimeout(p, d)), { cancel: m });
}
function hs(e) {
  if (!e || e <= 0) return 1440000;
  let r = Math.floor(e * 1000 * 0.8);
  return Math.max(30000, Math.min(1440000, r));
}
function kn(e) {
  return (
    e instanceof Error && "isEpochMismatch" in e && e.isEpochMismatch === !0
  );
}
function yr(e) {
  return e instanceof Error && "isNotFound" in e && e.isNotFound === !0;
}
function fo(e) {
  return (
    e instanceof Error &&
    "isSessionNotActive" in e &&
    e.isSessionNotActive === !0
  );
}
function wr(e) {
  return yr(e) || fo(e);
}
function ho(e, t, n) {
  if (!e) return;
  let r = e.git_mount_base_url,
    s;
  try {
    s = r ? new URL(r) : void 0;
  } catch {
    s = void 0;
  }
  let d =
    s?.protocol === "http:" &&
    (s.hostname === "localhost" ||
      s.hostname === "127.0.0.1" ||
      s.hostname === "[::1]");
  if (!s || (s.protocol !== "https:" && !d)) {
    n(
      "[runner:warn] the work item's governed-git configuration carried an unusable git mount URL, so this session continues with the legacy git flow. No operator action is needed for the session to work; please report this warning to Anthropic support so the server-side delivery can be fixed.",
    );
    return;
  }
  return {
    mountBaseUrl: s.href.replace(/\/+$/, ""),
    toolConfig: {
      gitConfig: e.tool_config?.git_config === !0,
      ghPathShim: e.tool_config?.gh_path_shim === !0,
    },
    getSessionToken: t,
  };
}
function go(e, t = [], n = [], r, s, d) {
  let o = new Set(t.map((p) => p.toLowerCase())),
    c = new Map(n.map(([p, i]) => [p.toLowerCase(), i])),
    m = [];
  for (let p of e) {
    if (p.type !== "git_repository" || !p.url) continue;
    let i = Fo(p.url);
    if (d) {
      let U = _o(p.url, d.mountBaseUrl, r);
      if (U) {
        m.push({
          type: "github",
          repo: `${U.owner}/${U.repo}`,
          ref: p.revision,
          url: U.url,
          getAuthToken: d.getSessionToken,
          governedMount: !0,
          upstreamUrl: U.upstreamUrl,
          upstreamHost: i,
        });
        continue;
      }
      r?.(
        `[runner:git] governed git: source ${p.url} is not mount-routable; using legacy handling for this source`,
      );
    }
    let h = mo(p.url, s, r);
    if (h) {
      m.push({
        type: "github",
        repo: `${h.owner}/${h.repo}`,
        ref: p.revision,
        url: h.url,
        getAuthToken: () => {
          let U = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
          if (!U)
            throw Error(
              "git-proxy credential requested but CLAUDE_CODE_SESSION_ACCESS_TOKEN is unset \u2014 token issue/refresh failed?",
            );
          return U;
        },
        upstreamHost: i,
      });
      continue;
    }
    let L = Oo(p.url, c, r),
      S = vo(L, o, r),
      w = Ho(S);
    if (!w)
      throw new R(
        `mapSources: cannot extract repo slug from source URL '${p.url}' \u2014 not scp-form (user@host:path) and not a parseable URL`,
        "mapSources: cannot extract repo slug from source URL",
      );
    m.push({
      type: Ao(S) ? "github-ssh" : "github",
      repo: w,
      ref: p.revision,
      url: S,
      upstreamHost: i,
    });
  }
  return m;
}
function mo(e, t, n) {
  if (!t) return;
  let r = e.match(/^https:\/\/[^/@]+\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (!r) {
    if (e.startsWith("https://"))
      n?.(
        `[runner:git] git proxy: could not parse owner/repo from ${e}; falling back to customer git auth for this source`,
      );
    return;
  }
  let s = r[1],
    d = r[2];
  if (!Qn.test(s) || !Qn.test(d)) {
    n?.(
      `[runner:git] git proxy: rejecting unsafe owner/repo in ${e}; falling back to customer git auth for this source`,
    );
    return;
  }
  let c = `${t.apiBaseUrl.replace(/\/+$/, "")}/v1/session_ingress/session/${t.sessionId}/git_proxy/${s}/${d}.git`;
  return (
    n?.(
      `[runner:git] rewrote ${e} -> git_proxy/${s}/${d}.git (--use-anthropic-git-proxy)`,
    ),
    { url: c, owner: s, repo: d }
  );
}
var Qn = /^(?!\.{1,2}$)[a-zA-Z0-9._-]+$/;
function _o(e, t, n) {
  let r = e.match(/^https:\/\/([^/@:]+)\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
  if (!r) {
    if (e.startsWith("https://"))
      n?.(
        `[runner:git] governed git: could not parse host/owner/repo from ${e}`,
      );
    return;
  }
  let s = r[1].toLowerCase(),
    d = r[2],
    o = r[3];
  if (!/^(?!\.{1,2}$)[a-z0-9.-]+$/.test(s) || s.length > 255) {
    n?.(
      `[runner:git] governed git: rejecting unsafe host in ${e}; falling back to legacy handling for this source`,
    );
    return;
  }
  if (!Qn.test(d) || !Qn.test(o)) {
    n?.(
      `[runner:git] governed git: rejecting unsafe owner/repo in ${e}; falling back to legacy handling for this source`,
    );
    return;
  }
  let c = `${t}/${s}/${d}/${o}`;
  return (
    n?.(
      `[runner:git] rewrote ${e} -> git mount /${s}/${d}/${o} (governed git)`,
    ),
    { url: c, owner: d, repo: o, upstreamUrl: `https://${s}/${d}/${o}` }
  );
}
function vr() {
  return (
    antEnv.CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM === !0 &&
    Ye("SELF_HOSTED_RUNNER_DRAIN_GRACE_MS") === 0
  );
}
function So(e, t) {
  if (!antEnv.CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM) return !0;
  if (!vr())
    return (
      e(
        `[runner:warn] CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM ignored: drain-grace is ${Ye("SELF_HOSTED_RUNNER_DRAIN_GRACE_MS")}ms (> 0), so a prior session ` +
          "could have written to the canonical \u2014 sanitizing anyway",
      ),
      !0
    );
  return (
    e(
      "[runner:session] CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM \u2014 skipping " +
        `sanitizeCanonicalGitState for ${t} (trusted one-shot prewarm)`,
    ),
    !1
  );
}
var wo = new Map([
  ["objects", "dir"],
  ["refs", "dir"],
  ["packed-refs", "file"],
  ["HEAD", "file"],
  ["shallow", "file"],
]);
async function Eo(e, t, n) {
  let r = X(e, ".git"),
    s;
  try {
    s = await Ht(r);
  } catch (c) {
    let m = A(c);
    if (m === "ENOENT" || m === "ENOTDIR") return;
    throw new R(
      `git-proxy: could not sanitize canonical ${e} before prep \u2014 ${c instanceof Error ? c.message : String(c)}`,
      "git-proxy: could not sanitize canonical before prep",
    );
  }
  if (!s.isDirectory()) {
    (await ct(r, { force: !0 }),
      t(
        `[runner:session] sanitized canonical at ${e}: .git was not a directory (gitlink/symlink) \u2014 removed, will fresh-init`,
      ));
    return;
  }
  let d = n?.replace(/^(https?:\/\/)[^/@]*@/, "$1");
  if (d && /[\x00-\x1f]/.test(d))
    throw Error(
      "git-proxy: sanitize refused \u2014 control char in origin URL",
    );
  let o =
    `[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	checkStat = minimal
	trustctime = false
` +
    (d
      ? `[remote "origin"]
	url = ${d}
	fetch = +refs/heads/*:refs/remotes/origin/*
`
      : "");
  try {
    let c = await readdir(r);
    for (let S of c) {
      let w = wo.get(S);
      if (w) {
        let U = await Ht(X(r, S)).catch(() => {
          return;
        });
        if (
          U &&
          !U.isSymbolicLink() &&
          (w === "dir" ? U.isDirectory() : U.isFile())
        )
          continue;
        t(
          `[runner:session] sanitize: kept entry .git/${S} has unexpected type \u2014 removing`,
        );
      }
      await ct(X(r, S), { recursive: !0, force: !0 });
    }
    (await Er(X(r, "refs"), !0),
      await Er(X(r, "objects"), !1),
      await ct(X(r, "objects", "info"), { recursive: !0, force: !0 }),
      await ct(X(r, "objects", "pack", "multi-pack-index"), {
        recursive: !0,
        force: !0,
      }));
    let m = X(r, "HEAD"),
      p = await Ht(m).catch(() => {
        return;
      }),
      i = p && p.size <= 1024 ? await Dn(m, "utf-8").catch(() => "") : "",
      h = /^ref: (refs\/[A-Za-z0-9._/-]+)\n?$/.exec(i);
    if (
      !(
        h &&
        h[1]
          .split("/")
          .every(
            (S) =>
              S.length > 0 &&
              !S.startsWith(".") &&
              !S.endsWith(".") &&
              !S.endsWith(".lock") &&
              !S.includes(".."),
          )
      ) &&
      !/^[0-9a-f]{40}([0-9a-f]{24})?\n?$/.test(i)
    )
      await ct(m, { force: !0 });
    (await sn(X(r, "config"), o, { mode: 420 }),
      t(
        `[runner:session] sanitized canonical .git/ at ${e} (git-proxy cross-session isolation)`,
      ));
  } catch (c) {
    throw new R(
      `git-proxy: could not sanitize canonical ${e} before prep \u2014 ${c instanceof Error ? c.message : String(c)}`,
      "git-proxy: could not sanitize canonical before prep",
    );
  }
}
async function Er(e, t) {
  let n;
  try {
    n = await readdir(e);
  } catch (r) {
    let s = A(r);
    if (s === "ENOENT" || s === "ENOTDIR") return;
    throw r;
  }
  for (let r of n) {
    let s = X(e, r),
      d;
    try {
      d = await Ht(s);
    } catch (o) {
      let c = A(o);
      if (c === "ENOENT" || c === "ENOTDIR") continue;
      throw o;
    }
    if (d.isSymbolicLink()) {
      await ct(s, { force: !0 });
      continue;
    }
    if (t && d.isDirectory()) await Er(s, !0);
  }
}
async function xn(e, t, n) {
  (await ct(e, { recursive: !0, force: !0 }),
    await Mt(on(e), { recursive: !0 }),
    await sn(e, t, { mode: n }),
    await chmod(e, n));
}
async function ko(e, t, n) {
  if (e.length === 0) return;
  let r = on(e[0].path),
    s = on(r);
  try {
    let d = await Ht(s).catch(() => {
      return;
    });
    if (!d) await Mt(s, { recursive: !0 });
    else if (!d.isDirectory() || d.isSymbolicLink())
      (await ct(s, { recursive: !0, force: !0 }),
        await Mt(s, { recursive: !0 }));
    if (t) for (let o of t) await xn(o.path, o.content, o.mode);
    (await ct(r, { recursive: !0, force: !0 }), await Mt(r, { recursive: !0 }));
    for (let o of e) await xn(o.path, o.content, 493);
    n(
      `[runner:session] clean-slated ${r} and rewrote ${e.length} hook stubs (cross-session isolation)`,
    );
  } catch (d) {
    throw new R(
      `--configure-git: could not restore hook stubs under ${r} \u2014 ${d instanceof Error ? d.message : String(d)}`,
      "--configure-git: could not restore git hook stubs",
    );
  }
}
async function bo(e, t) {
  try {
    if (
      (await ct(on(e.xdgConfigPath), { recursive: !0, force: !0 }),
      e.homeGitconfigPath && e.homeGitconfigPath !== e.globalConfigPath)
    )
      await ct(e.homeGitconfigPath, { recursive: !0, force: !0 });
    if (
      (await xn(e.globalConfigPath, e.globalConfigSnapshot, 420), e.credHelper)
    ) {
      let n = on(e.credHelper.path),
        r = await Ht(n).catch(() => {
          return;
        });
      if (!r) await Mt(n, { recursive: !0 });
      else if (!r.isDirectory() || r.isSymbolicLink())
        (await ct(n, { recursive: !0, force: !0 }),
          await Mt(n, { recursive: !0 }));
      if (e.signingArtifacts)
        for (let s of e.signingArtifacts) await xn(s.path, s.content, s.mode);
      await xn(e.credHelper.path, e.credHelper.content, 448);
    }
    t(
      "[runner:session] restored ~/.gitconfig and git-proxy-cred to startup snapshot (git-proxy cross-session isolation)",
    );
  } catch (n) {
    throw new R(
      `git-proxy: could not sanitize runner HOME-level git state before prep \u2014 ${n instanceof Error ? n.message : String(n)}`,
      "git-proxy: could not sanitize runner HOME-level git state before prep",
    );
  }
}
async function Ro(e, t, n) {
  if (n) await ct(X(e, ".git", "config.lock"), { force: !0 }).catch(() => {});
  await new Promise((r) => {
    let s = spawn(
        "git",
        [
          "-C",
          e,
          "config",
          "--local",
          "--unset-all",
          "credential.helper",
          "^$",
        ],
        { cwd: void 0, stdio: "ignore", windowsHide: !0, ...Bs("helper") },
      ),
      d = setTimeout((c) => c.kill("SIGKILL"), cn, s),
      o = (c) => {
        if ((clearTimeout(d), c !== 0 && c !== 5 && c !== null))
          t(`[runner:session] stale git-proxy reset sweep in ${e} exited ${c}`);
        r();
      };
    (s.on("close", o), s.on("error", () => o(null)));
  });
}
async function To(e, t, n, r) {
  let s = new URL(t).origin,
    d = [
      [["credential.helper", ""], ["--replace-all"]],
      [[`credential.${s}.helper`, ""], ["--replace-all"]],
      [
        [`credential.${s}.helper`, grn("CLAUDE_CODE_SESSION_ACCESS_TOKEN")],
        ["--add"],
      ],
    ];
  for (let [[o, c], m] of d)
    await Ns(
      ["-C", e, "config", "--local", ...m, o, c],
      (p) =>
        new R(
          `git proxy: 'git config ${o}' in ${e} exited ${p.code}: ${p.stderr}`,
          "git proxy: repo-local git config write failed",
        ),
      r,
    );
  n(
    `[runner:session] git proxy: wired repo-local credential helper for ${s} in ${e}`,
  );
}
async function Ns(e, t, n, r = spawn, s = cn) {
  await new Promise((d, o) => {
    let c = !1,
      m = "",
      p = (S) => {
        if (c) return;
        if (((c = !0), clearTimeout(L), n?.removeEventListener("abort", h), S))
          o(S);
        else d();
      },
      i = r("git", e, {
        cwd: void 0,
        stdio: ["ignore", "ignore", "pipe"],
        windowsHide: !0,
        ...Bs("helper"),
      });
    i.stderr?.on("data", (S) => (m += String(S)));
    let h = () => {
        (i.kill("SIGKILL"), p(t({ code: null, stderr: m.trim() })));
      },
      L = setTimeout(
        (S, w) => {
          (S.kill("SIGKILL"), w(t({ code: null, stderr: m.trim() })));
        },
        s,
        i,
        p,
      );
    if (n?.aborted) h();
    else n?.addEventListener("abort", h, { once: !0 });
    (i.on("close", (S) =>
      p(S === 0 ? void 0 : t({ code: S, stderr: m.trim() })),
    ),
      i.on("error", (S) => p(S)));
  });
}
async function yo(e, t, n, r) {
  (await Ns(
    ["-C", e, ...gF, "remote", "set-url", "origin", "--", t],
    (s) =>
      new R(
        `governed git: 'git remote set-url origin' in ${e} exited ${s.code}: ${s.stderr}`,
        "governed git: git remote set-url origin failed",
      ),
    r,
  ),
    n(
      `[runner:session] governed git: remote.origin.url reset to upstream in ${e}`,
    ));
}
function vo(e, t, n) {
  if (t.size === 0) return e;
  let r = e.match(/^https:\/\/([^/]+)\/(.+?)(?:\.git)?$/);
  if (!r || !t.has(r[1].toLowerCase())) return e;
  let [s] = r[1].split(":"),
    d = `git@${s}:${r[2]}`;
  return (n?.(`[runner:git] rewrote ${e} -> ${d} (--git-ssh-rewrite)`), d);
}
function Oo(e, t, n) {
  if (t.size === 0) return e;
  let r = e.match(/^https:\/\/([^/]+)\/(.+)$/);
  if (!r) return e;
  let s = t.get(r[1].toLowerCase());
  if (s === void 0) return e;
  let d = `https://${s}/${r[2]}`;
  return (n?.(`[runner:git] rewrote ${e} -> ${d} (--git-host-rewrite)`), d);
}
function Ao(e) {
  if (e.startsWith("ssh://")) return !0;
  return !e.includes("://") && /^[^@]+@[^:]+:.+$/.test(e);
}
function $o(e) {
  let t = [];
  for (let n of e) {
    if (n.type !== "git_repository" || !n.git_info?.repo) continue;
    t.push({ repo: n.git_info.repo, branches: n.git_info.branches ?? [] });
  }
  return t;
}
function Co(e) {
  let t = new Map();
  for (let n of e) {
    let r = kr(n.repo),
      s = t.get(r) ?? [];
    for (let d of n.branches ?? []) if (d && CS(d) && !s.includes(d)) s.push(d);
    if (s.length > 0) t.set(r, s);
  }
  return t;
}
function kr(e) {
  return e.toLowerCase();
}
function gs(e, t, n) {
  if (n) {
    let r = Ls(e, n);
    if (r !== null) return { childCwd: r, addDirs: [...t, e] };
  }
  if (t.length === 1) return { childCwd: t[0], addDirs: [...t, e] };
  if (t.length > 1)
    return {
      childCwd: t.every((s) => s.startsWith(e + Ge)) ? e : t[0],
      addDirs: [...t],
    };
  return { childCwd: e, addDirs: [] };
}
class _t extends Error {
  entry;
  detail;
  constructor(e, t) {
    super(
      `[runner:session] repo-committed ${e.kind} entry '${e.raw}' in ${e.sourceFile} ${t} \u2014 refusing to spawn. Host-specific write-scope entries belong in the operator's user-level settings.json (userSettings source, not trust-gated \u2014 see --trust-workspace docs).`,
    );
    this.entry = e;
    this.detail = t;
  }
}
async function No(e, t, n) {
  let r = [],
    s = (i, h, L) => (S) => {
      let w = A(S);
      if (w === "ENOENT" || w === "ENOTDIR") return;
      throw new _t(
        { ...h, path: i, kind: "scan-fs-error" },
        `could not be probed (${L} failed: ${S instanceof Error ? S.message : String(S)}) \u2014 refusing rather than fold a non-ENOENT error into "does not exist" (fail-closed)`,
      );
    },
    d = (i) => jf(i) || gp(i),
    o = async (i, h) => {
      if (An(i) || d(i)) return;
      let L = await xe(realpath(i).catch(s(i, h, "realpath")), `realpath ${i}`);
      if (L !== void 0) return L;
      let S = i;
      for (let w = 0; w < 64; w++) {
        let U = await xe(Ht(S).catch(s(i, h, "lstat")), `lstat ${S}`);
        if (U?.isSymbolicLink())
          throw new _t(
            { ...h, path: i },
            `traverses a symlink at ${S} whose target path cannot be realpath'd \u2014 a repo-shipped link (dangling, or pointing outside the workspace with a nonexistent leaf) can be retargeted at use time`,
          );
        if (U !== void 0) return;
        let V = on(S);
        if (V === S) return;
        S = V;
      }
      throw new _t(
        { ...h, path: i },
        "has too many nonexistent path components (ancestor-walk hop bound exhausted) \u2014 refusing rather than skip the symlink probe",
      );
    },
    c = async (i, h) => {
      if (!isAbsolute(i)) return;
      let L = i.split(Ge).filter((w) => w.length > 0);
      if (!L.includes("..")) return;
      if (d(i))
        throw new _t(
          { ...h, path: i },
          "names an automount/NT-namespace-transiting spelling with '..' \u2014 the kernel-divergence probe cannot run without performing the automount lookup itself; refusing (fail-closed)",
        );
      let S = i.startsWith(Ge) ? Ge : "";
      for (let w of L) {
        if (w === ".") continue;
        if (w === "..") {
          S = on(S);
          continue;
        }
        S = S === Ge ? Ge + w : X(S, w);
        let U = await xe(Ht(S).catch(s(i, h, "lstat")), `lstat ${S}`);
        if (U?.isSymbolicLink())
          throw new _t(
            { ...h, path: i },
            `contains a '..' after symlink ${S} \u2014 the kernel resolves the symlink before the '..' at bind time, diverging from the lexically-collapsed form the confine check saw`,
          );
        if (U === void 0) return;
      }
    },
    m = (i) => {
      let h = Lg(i) || Ge;
      return ot(h, e);
    },
    p = (i) => Lg(i) || Ge;
  for (let i of new Set([e, ...t])) {
    let h = X(i, ".claude"),
      L = await xe(
        Ht(h).catch((S) => {
          if (W(S)) return;
          throw S;
        }),
        `lstat ${h}`,
      );
    if (L === void 0) continue;
    if (L.isSymbolicLink())
      throw new _t(
        {
          path: h,
          sourceFile: h,
          raw: ".claude",
          kind: "permissions.additionalDirectories",
        },
        "is a symlink \u2014 refusing to follow (the settings read below would escape the workspace)",
      );
    for (let S of ["settings.json", "settings.local.json"]) {
      let w = X(h, S),
        U = await xe(
          Ht(w).catch((H) => {
            if (W(H)) return;
            throw new _t(
              { path: w, sourceFile: w, raw: S, kind: "scan-fs-error" },
              `could not be lstat'd (${H instanceof Error ? H.message : String(H)}) \u2014 refusing rather than skip the scan`,
            );
          }),
          `lstat ${w}`,
        );
      if (U === void 0) continue;
      if (U.isSymbolicLink())
        throw new _t(
          {
            path: w,
            sourceFile: w,
            raw: S,
            kind: "permissions.additionalDirectories",
          },
          "is a symlink \u2014 refusing to follow (the settings read below would escape the workspace; same posture as the .claude-dir lstat guard)",
        );
      let V;
      try {
        V = await xe(
          gS(w, n_).then((H) => H.content),
          `readFile ${w}`,
        );
      } catch (H) {
        if (W(H)) continue;
        throw new _t(
          { path: w, sourceFile: w, raw: S, kind: "scan-fs-error" },
          `could not be read (${H instanceof Error ? H.message : String(H)}) \u2014 refusing rather than skip the scan`,
        );
      }
      let ae = xt(V, !1);
      if (n && (i === e || e.startsWith(i + Ge)) && ae?.disableAllHooks === !0)
        n.repoDisablesAllHooks = !0;
      if (
        ae?.env !== void 0 &&
        ae?.env !== null &&
        typeof ae.env === "object" &&
        Object.keys(ae.env).length > 0
      )
        throw new _t(
          {
            path: w,
            sourceFile: w,
            raw: `env: {${Object.keys(ae.env).slice(0, 3).join(", ")}${Object.keys(ae.env).length > 3 ? ", \u2026" : ""}}`,
            kind: "operator-posture override",
          },
          "sets env vars that reach every child subprocess (BASH_ENV/LD_PRELOAD/NODE_OPTIONS/GIT_* are unsandboxed-exec inlets). Runner-level env belongs in the operator wrapper script or runner env, not repo settings",
        );
      for (let [H, fe, ke] of [
        ["sandbox.enabled", ae?.sandbox?.enabled, !1],
        ["disableAllHooks", ae?.disableAllHooks, !1],
        [
          "sandbox.allowUnsandboxedCommands",
          ae?.sandbox?.allowUnsandboxedCommands,
          !0,
        ],
        ["sandbox.failIfUnavailable", ae?.sandbox?.failIfUnavailable, !1],
      ])
        if (fe === ke)
          throw new _t(
            {
              path: w,
              sourceFile: w,
              raw: `${H}: ${String(ke)}`,
              kind: "operator-posture override",
            },
            `negates the operator's ${H} posture (projectSettings overrides userSettings in the merged read). Remove it from the repo settings; operator posture belongs in the user-level settings.json`,
          );
      let te = ae?.permissions,
        le = Array.isArray(te?.allow) ? te.allow : [];
      for (let H of le) {
        if (typeof H !== "string") continue;
        let fe = Fr(H);
        if (![Bt, Mn, Wl].includes(fe.toolName)) continue;
        if (fe.ruleContent === void 0) {
          r.push({
            path: Ge,
            sourceFile: w,
            raw: H,
            kind: "permissions.allow (bare write-tool rule)",
          });
          continue;
        }
        let { root: ke } = patternWithRootFor(fe.ruleContent, i);
        {
          let Me = {
              sourceFile: w,
              raw: H,
              kind: "permissions.allow (sandbox-arm projection)",
            },
            lt = resolvePathPatternForSandboxAt(parseRuleForSandbox(H).ruleContent ?? fe.ruleContent, i),
            pt = m(lt);
          r.push({ ...Me, path: pt });
          let qe = await o(pt, Me);
          if (qe !== void 0 && qe !== pt) r.push({ ...Me, path: qe });
          await c(p(lt), Me);
        }
        if (ke === null) continue;
        let Ae = { sourceFile: w, raw: H, kind: "permissions.allow" };
        r.push({ ...Ae, path: ke });
        let de = await o(ke, Ae);
        if (de !== void 0 && de !== ke) r.push({ ...Ae, path: de });
      }
      for (let [H, fe] of [
        ["allowWrite", ae?.sandbox?.filesystem?.allowWrite],
        ["allowRead", ae?.sandbox?.filesystem?.allowRead],
      ]) {
        if (!Array.isArray(fe)) continue;
        for (let ke of fe) {
          if (typeof ke !== "string") continue;
          let Ae = { sourceFile: w, raw: ke, kind: `sandbox.filesystem.${H}` },
            de,
            Me;
          try {
            ((Me = resolveSandboxFilesystemPathAt(ke, i)), (de = m(Me)));
          } catch (pt) {
            throw new _t(
              { ...Ae, path: ke },
              `could not be resolved (${pt instanceof Error ? pt.message : String(pt)}) \u2014 refusing rather than drop and risk sandbox-init failure child-side`,
            );
          }
          r.push({ ...Ae, path: de });
          let lt = await o(de, Ae);
          if (lt !== void 0 && lt !== de) r.push({ ...Ae, path: lt });
          await c(p(Me), Ae);
        }
      }
      let we = te?.additionalDirectories;
      if (!Array.isArray(we)) continue;
      for (let H of we) {
        if (typeof H !== "string") continue;
        let fe = {
            sourceFile: w,
            raw: H,
            kind: "permissions.additionalDirectories",
          },
          ke;
        try {
          ke = bn(ot(H, e));
        } catch (de) {
          throw new _t(
            { ...fe, path: String(H) },
            `could not be resolved (${de instanceof Error ? de.message : String(de)}) \u2014 refusing rather than drop and risk sandbox-init failure child-side`,
          );
        }
        r.push({ ...fe, path: ke });
        let Ae = await o(ke, fe);
        if (Ae !== void 0 && Ae !== ke) r.push({ ...fe, path: Ae });
        await c(p(H), fe);
      }
    }
  }
  return r;
}
function $n(e, t, n, r) {
  let s = e.toLowerCase(),
    d = (o) => (o.endsWith(Ge) ? o : o + Ge);
  for (let o of [n, ...r]) {
    let c = o.toLowerCase();
    if (s === c || s.startsWith(d(c)) || c.startsWith(d(s)))
      throw new R(
        `[runner:session] per-session ${t} ${e} overlaps the child's auto-allowed write scope (${o}) \u2014 refusing to spawn`,
        "per-session dir overlaps the child auto-allowed write scope \u2014 refusing to spawn",
      );
  }
}
function Ls(e, t) {
  let n = bn(e),
    r = isAbsolute(t) ? bn(t) : bn(n, t);
  if (r === n) return r;
  if (r.startsWith(n + Ge)) return r;
  return null;
}
async function Lo(e, t) {
  let n = bn(e),
    r = bn(t);
  if (r !== n && !r.startsWith(n + Ge)) return !1;
  let s = r.slice(n.length).split(Ge).filter(Boolean);
  for (let d of s) {
    n = X(n, d);
    try {
      let o = await Ht(n);
      if (o.isSymbolicLink() || !o.isDirectory()) return !1;
    } catch (o) {
      if (!W(o)) return !1;
      try {
        await Mt(n);
      } catch {
        return !1;
      }
    }
  }
  return !0;
}
async function xo(e, t) {
  try {
    let n = await realpath(e),
      r = await realpath(t);
    return r === n || r.startsWith(n + Ge);
  } catch {
    return !1;
  }
}
async function Do(e, t, n, r, s, d, o = spawn) {
  if (r?.aborted) return;
  let c = {
      ...process.env,
      ...g7,
      ...(s
        ? {
            GIT_CONFIG_GLOBAL: "/dev/null",
            CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0,
          }
        : void 0),
    },
    m = (i, h, L, S = []) =>
      new Promise((w) => {
        let U = !1,
          V = (we) => {
            if (U) return;
            ((U = !0),
              clearTimeout(le),
              r?.removeEventListener("abort", te),
              w(we));
          },
          ne = o("git", [...gF, ...S, "-C", e, ...i], {
            cwd: void 0,
            stdio: ["ignore", "ignore", "pipe"],
            windowsHide: !0,
            ...Bs("helper"),
            env: c,
          }),
          ae = "";
        ne.stderr?.on("data", (we) => (ae += String(we)));
        let te = () => {
            (ne.kill("SIGKILL"), V("unsettled"));
          },
          le = setTimeout(
            (we, H, fe, ke, Ae, de) => {
              (we(
                `[runner:session] ${H} in ${fe} timed out after ${Ae}ms \u2014 continuing on current HEAD`,
              ),
                ke.kill("SIGKILL"),
                de("unsettled"));
            },
            L,
            n,
            h,
            e,
            ne,
            L,
            V,
          );
        if (r?.aborted) te();
        else r?.addEventListener("abort", te, { once: !0 });
        (ne.on("close", (we) => {
          if (we === 0)
            (n(`[runner:session] created outcome branch '${t}' in ${e} (${h})`),
              V("ok"));
          else
            (n(`[runner:session] ${h} in ${e} exited ${we}: ${ae.trim()}`),
              V("failed"));
        }),
          ne.on("error", (we) => {
            (n(
              `[runner:session] ${h} spawn failed: ${we} \u2014 continuing on current HEAD`,
            ),
              V("unsettled"));
          }));
      });
  if (!d) {
    if (
      (await m(["switch", "-q", "-C", t], `switch -C '${t}'`, cn, [
        "-c",
        "alias.switch=",
      ])) !== "failed" ||
      r?.aborted
    )
      return;
    n(`[runner:session] retrying outcome branch '${t}' as checkout -B`);
  }
  if (
    (await m(
      ["checkout", "-B", t, ...(d ? [d] : [])],
      `checkout -B '${t}'`,
      d ? cLt : cn,
    )) === "failed"
  )
    n(
      `[runner:session] outcome branch '${t}' not created in ${e} \u2014 continuing on current HEAD`,
    );
}
async function Po(e, t, n, r, s = spawn, d = !1, o, c) {
  if (o && c)
    throw Error(
      "fetchOutcomeBranches: hardenedGitUrl and governedAuth are mutually exclusive",
    );
  let m = 0,
    p = c?.url;
  for (let i of t) {
    if (r?.aborted) return;
    let h = `+refs/heads/${i}:refs/remotes/origin/${i}`;
    if (
      (await new Promise((S) => {
        let w = !1,
          U = (le) => {
            if (w) return;
            ((w = !0),
              clearTimeout(te),
              r?.removeEventListener("abort", ae),
              S(le));
          },
          V = s(
            "git",
            [
              "-C",
              e,
              ...gF,
              ...(o ? dLt(o) : []),
              ...(p ? [...dLt(p), ...uLt(p), ...mrn] : []),
              "-c",
              "http.proxyAuthMethod=basic",
              "fetch",
              "--no-progress",
              "--no-tags",
              "--end-of-options",
              p ?? "origin",
              h,
            ],
            {
              stdio: ["ignore", "ignore", "pipe"],
              windowsHide: !0,
              ...Bs("helper"),
              env: {
                ...process.env,
                ...g7,
                ...(o || p ? { GIT_CONFIG_GLOBAL: "/dev/null" } : void 0),
                ...(c
                  ? {
                      [Klt]: c.getToken(),
                      CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0,
                    }
                  : void 0),
                ...(d && {
                  GIT_ALLOW_PROTOCOL: `file:${g7.GIT_ALLOW_PROTOCOL}`,
                }),
                GIT_TERMINAL_PROMPT: "0",
                GIT_SSH_COMMAND: `${a.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o ConnectTimeout=30`,
              },
            },
          ),
          ne = "";
        V.stderr?.on("data", (le) => (ne += String(le)));
        let ae = () => {
          if (V.pid) Uy(V.pid);
          U(null);
        };
        r?.addEventListener("abort", ae, { once: !0 });
        let te = setTimeout(
          (le, we, H, fe) => {
            if (
              (le(
                `[runner:session] fetch outcome branch in ${we} timed out after ${ss}ms \u2014 continuing`,
              ),
              H.pid)
            )
              Uy(H.pid);
            fe(null);
          },
          ss,
          n,
          e,
          V,
          U,
        );
        (V.on("close", (le) => {
          if (le !== 0)
            n(
              `[runner:session] fetch outcome branch in ${e} exited ${le}: ${ne.trim()} \u2014 continuing`,
            );
          U(le);
        }),
          V.on("error", (le) => {
            (n(
              `[runner:session] fetch outcome branch spawn failed: ${le} \u2014 continuing`,
            ),
              U(null));
          }));
      })) === 0
    )
      m++;
  }
  if (t.length > 0)
    n(`[runner:session] fetched ${m}/${t.length} outcome branch(es) in ${e}`);
}
function xs(e) {
  let t = e.url ?? "",
    n = e.getAuthToken ? e.getAuthToken() : e.token,
    r = e.getAuthToken ? t : hrn(t, e.token),
    s;
  try {
    let c = new URL(t);
    if (c.protocol === "https:" || c.protocol === "http:") s = c.origin;
  } catch {}
  let d =
      process.env.HTTPS_PROXY ||
      process.env.https_proxy ||
      process.env.ALL_PROXY ||
      process.env.all_proxy ||
      "",
    o = [...gF];
  if (s) {
    if (
      (o.push("-c", "http.sslVerify=true"),
      o.push("-c", `http.${s}.sslVerify=true`),
      o.push("-c", `http.${t}.sslVerify=true`),
      d)
    )
      (o.push("-c", `http.proxy=${d}`),
        o.push("-c", `http.${s}.proxy=${d}`),
        o.push("-c", `http.${t}.proxy=${d}`));
    if (n)
      if (e.getAuthToken) o.push(...uLt(t));
      else
        (o.push("-c", "credential.helper="),
          o.push("-c", `credential.${s}.helper=`));
  }
  return {
    args: o,
    authURL: r,
    token: n,
    env: {
      ...process.env,
      GIT_TERMINAL_PROMPT: "0",
      ...g7,
      ...(t.startsWith("file://") && {
        GIT_ALLOW_PROTOCOL: `file:${g7.GIT_ALLOW_PROTOCOL}`,
      }),
      GIT_SSH_COMMAND: `${process.env.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o ConnectTimeout=30`,
      SELF_HOSTED_RUNNER_HOST_CONFIG_DIR: void 0,
      ...(n && {
        GIT_CONFIG_GLOBAL: "/dev/null",
        [Klt]: e.getAuthToken ? n : void 0,
      }),
    },
  };
}
async function Mo(e, t, n, r, s, d) {
  if (d?.aborted) return !1;
  if (!CS(t))
    return (
      s(
        `[runner:session] push-on-release resume: branch '${t}' rejected by isSafeRefName (refspec metachar guard); skipping fetch`,
      ),
      !1
    );
  let o = xs(n);
  return new Promise((c) => {
    let m = !1,
      p = (w) => {
        if (m) return;
        ((m = !0), clearTimeout(S), d?.removeEventListener("abort", i), c(w));
      },
      i = () => {
        (h.kill("SIGKILL"), p(!1));
      },
      h = spawn(
        "git",
        [
          ...o.args,
          "-C",
          e,
          "fetch",
          "--no-write-fetch-head",
          o.authURL,
          `+refs/heads/${t}:refs/remotes/origin/${t}`,
        ],
        {
          stdio: ["ignore", "ignore", "pipe"],
          cwd: void 0,
          env: o.env,
          windowsHide: !0,
          ...Bs("helper"),
        },
      ),
      L = "";
    (h.stderr?.on("data", (w) => (L += String(w))),
      d?.addEventListener("abort", i, { once: !0 }));
    let S = setTimeout(
      (w, U, V, ne, ae) => {
        (w(
          `[runner:session] push-on-release resume: fetch '${U}' timed out after ${V}ms; starting from source HEAD (best-effort)`,
        ),
          ne.kill("SIGKILL"),
          ae(!1));
      },
      r,
      s,
      t,
      r,
      h,
      p,
    );
    (h.on("close", (w) => {
      if (w === 0)
        (s(
          `[runner:session] push-on-release resume: fetched prior '${t}' from source remote; starting from preserved work`,
        ),
          p(!0));
      else
        (s(
          `[runner:session] push-on-release resume: no prior '${t}' on source remote (${Xlt(L, o.authURL, o.token).trim() || `exit ${w}`}); starting from source HEAD`,
        ),
          p(!1));
    }),
      h.on("error", () => p(!1)));
  });
}
async function ms(e, t, n = cn) {
  return new Promise((r) => {
    let s = !1,
      d = (p) => {
        if (s) return;
        ((s = !0), clearTimeout(m), r(p));
      },
      o = spawn("git", [...gF, "-C", e, "rev-parse", "--verify", t], {
        stdio: ["ignore", "pipe", "ignore"],
        cwd: void 0,
        env: { ...process.env, ...g7 },
        windowsHide: !0,
        ...Bs("helper"),
      }),
      c = "";
    o.stdout?.on("data", (p) => (c += String(p)));
    let m = setTimeout(
      (p, i) => {
        (p.kill("SIGKILL"), i(void 0));
      },
      n,
      o,
      d,
    );
    (o.on("close", (p) => d(p === 0 ? c.trim() : void 0)),
      o.on("error", () => d(void 0)));
  });
}
async function Io(e, t, n, r, s) {
  if (!CS(t)) {
    s(
      `[runner:session] push-on-release '${t}' rejected by isSafeRefName (refspec metachar guard); skipping (best-effort)`,
    );
    return;
  }
  let d = Boolean(n.governedMount && n.upstreamUrl),
    o = d
      ? { ...n, url: n.upstreamUrl, getAuthToken: void 0, governedMount: !1 }
      : n,
    c = xs(o);
  return new Promise((m) => {
    let p = !1,
      i = () => {
        if (p) return;
        ((p = !0), clearTimeout(S), m());
      },
      h = spawn(
        "git",
        [
          ...c.args,
          "-C",
          e,
          "push",
          c.authURL,
          `refs/heads/${t}:refs/heads/${t}`,
        ],
        {
          stdio: ["ignore", "ignore", "pipe"],
          cwd: void 0,
          env: c.env,
          windowsHide: !0,
          ...Bs("helper"),
        },
      ),
      L = "";
    h.stderr?.on("data", (w) => (L += String(w)));
    let S = setTimeout(
      (w, U, V, ne, ae, te) => {
        (w(
          `[runner:session] push-on-release '${U}' from ${V} timed out after ${ne}ms (best-effort)`,
        ),
          ae.kill("SIGKILL"),
          te());
      },
      r,
      s,
      t,
      e,
      r,
      h,
      i,
    );
    (h.on("close", (w) => {
      if (w === 0)
        s(
          `[runner:session] push-on-release pushed '${t}' to source remote from ${e}`,
        );
      else
        s(
          `[runner:session] push-on-release '${t}' from ${e} exited ${w}: ${Xlt(L, c.authURL, c.token).trim()} (best-effort)` +
            (d
              ? " \u2014 governed git pushes --push-outcome-on-release branches to the plain " +
                "upstream with customer-managed credentials (the governed mount is read-only); if this failed with an auth error, provide a git credential for the push target on the runner host or use the post-session hook"
              : ""),
        );
      i();
    }),
      h.on("error", (w) => {
        (s(
          `[runner:session] push-on-release '${t}' spawn failed: ${w} (best-effort)`,
        ),
          i());
      }));
  });
}
async function Uo(e, t, n, r, s, d = spawn, o = cn) {
  let c = (p, i) =>
    new Promise((h) => {
      let L = !1,
        S = (ne) => {
          if (L) return;
          ((L = !0), clearTimeout(V), h(ne));
        },
        w = d("git", [...gF, "-C", e, ...p], {
          stdio: ["ignore", "ignore", "pipe"],
          cwd: void 0,
          windowsHide: !0,
          ...Bs("helper"),
          env: {
            ...process.env,
            ...g7,
            ...(s
              ? {
                  GIT_CONFIG_GLOBAL: "/dev/null",
                  CLAUDE_CODE_SESSION_ACCESS_TOKEN: void 0,
                }
              : void 0),
          },
        }),
        U = "";
      w.stderr?.on("data", (ne) => (U += String(ne)));
      let V = setTimeout(
        (ne, ae, te, le, we, H) => {
          (te(
            `[runner:session] ${le} in ${we} timed out after ${H}ms (best-effort cleanup)`,
          ),
            ne.kill("SIGKILL"),
            ae(null));
        },
        o,
        w,
        S,
        r,
        i,
        e,
        o,
      );
      (w.on("close", (ne) => {
        if (ne !== 0)
          r(
            `[runner:session] ${i} in ${e} exited ${ne}: ${U.trim()} (best-effort cleanup)`,
          );
        S(ne);
      }),
        w.on("error", (ne) => {
          (r(`[runner:session] ${i} spawn failed: ${ne} (best-effort cleanup)`),
            S(null));
        }));
    });
  if (n) await c(["checkout", "--detach"], "checkout --detach");
  if (
    (await c(["branch", "-D", "--end-of-options", t], `branch -D '${t}'`)) === 0
  )
    r(`[runner:session] deleted outcome branch '${t}' from ${e}`);
}
function Fo(e) {
  if (!e.includes("://")) {
    let t = e.match(/^[^@]+@([^:/]+):.+$/);
    return t ? t[1].toLowerCase() : void 0;
  }
  try {
    let t = new URL(e).hostname.toLowerCase();
    return t === "" ? void 0 : t;
  } catch {
    return;
  }
}
function Ho(e) {
  if (!e.includes("://")) {
    let r = e.match(/^[^@]+@[^:]+:(.+)$/);
    if (r) return _s(r[1]);
  }
  let t;
  try {
    t = new URL(e);
  } catch {
    return "";
  }
  let n = t.pathname.replace(/^\/+/, "");
  return _s(n);
}
function _s(e) {
  return e.replace(/\.git$/, "").replace(/\/+$/, "");
}
function Ds(e, t) {
  let n = e.includes("localhost") || e.includes("127.0.0.1"),
    r = e.replace(/^https?:\/\//, "").replace(/\/+$/, ""),
    d = `${n ? "http" : "https"}://${r}/v1/code/sessions/${t}`;
  return { sdkUrl: d, resumeUrl: d };
}
async function Ss(e) {
  let {
    apiClient: t,
    apiBaseUrl: n,
    sessionId: r,
    sessionToken: s,
    workerEpoch: d,
    exitCode: o,
    exitSignal: c,
    stderrTail: m,
    onDebug: p,
    onStatus: i,
    signal: h,
  } = e;
  if (h.aborted)
    return (
      p(
        `[runner:session] Skipping failure-result post for ${r} \u2014 session was deliberately aborted`,
      ),
      "skipped"
    );
  let L = () =>
    t.postWorkerEvents(
      n,
      r,
      s,
      d,
      sa({ exitCode: o, exitSignal: c, stderrTail: m }),
      h,
    );
  try {
    return (
      await L(),
      p(
        `[runner:session] Posted failure result for ${r} (exitCode=${o} signal=${c})`,
      ),
      "posted"
    );
  } catch (S) {
    if (wr(S))
      return (
        p(
          `[runner:session] failure-result rejected (session gone) \u2014 ${r} is archived or deleted server-side`,
        ),
        "session_gone"
      );
    if (kn(S))
      return (
        p(
          `[runner:session] failure-result rejected (stale epoch) \u2014 another runner has taken over ${r}. This process was the orphan.`,
        ),
        "epoch_stale"
      );
    let w = ml(S instanceof Error ? S.message : String(S));
    (i(
      `[runner:stuck] Failed to post failure-result for ${r} (attempt 1): ${w} \u2014 retrying in 2s`,
    ),
      await Z(2000, h));
  }
  try {
    return (
      await L(),
      p(
        `[runner:session] Posted failure result for ${r} on retry (exitCode=${o} signal=${c})`,
      ),
      "posted"
    );
  } catch (S) {
    if (wr(S))
      return (
        p(
          `[runner:session] failure-result rejected (session gone on retry) \u2014 ${r} is archived or deleted server-side`,
        ),
        "session_gone"
      );
    if (kn(S))
      return (
        p(
          `[runner:session] failure-result rejected (stale epoch on retry) \u2014 another runner has taken over ${r}. This process was the orphan.`,
        ),
        "epoch_stale"
      );
    let w = ml(S instanceof Error ? S.message : String(S));
    return (
      i(
        `[runner:stuck] Failed to post failure-result for ${r} after retry: ${w} \u2014 UI spinner may not stop`,
      ),
      "post_failed"
    );
  }
}
var Go = 500;
async function Wo(e) {
  let {
      apiClient: t,
      apiBaseUrl: n,
      sessionId: r,
      sessionToken: s,
      workerEpoch: d,
    } = e,
    o = 262144,
    c;
  try {
    let L = await xe(br(e.debugFile), `stat ${e.debugFile}`),
      S = Math.max(0, L.size - 262144),
      w = await xe(Ii(e.debugFile, "r"), `open ${e.debugFile}`);
    try {
      let U = Buffer.alloc(Math.min(L.size, 262144)),
        { bytesRead: V } = await xe(
          w.read(U, 0, U.length, S),
          `read ${e.debugFile}`,
        );
      c = U.toString("utf-8", 0, V);
    } finally {
      await w.close().catch(() => {});
    }
  } catch {
    return;
  }
  let p = c
    .split(
      `
`,
    )
    .filter((L) => L.length > 0)
    .slice(-Go);
  if (p.length === 0) return;
  let i = new Date().toISOString(),
    h = p.map((L) => ({ timestamp: i, fields: { message: L } }));
  (await t.forwardDiagnostics(n, r, s, d, h),
    e.onDebug(
      `[runner:session] forwarded ${p.length} debug log lines to /worker/diagnostics`,
    ));
}
function Bo(e) {
  return { type: "system", uuid: randomUUID(), subtype: "init_milestone", message: e };
}
function qn(e, t, n, r) {
  return {
    type: "env_manager_log",
    uuid: randomUUID(),
    data: {
      level: t === "failed" ? "error" : "info",
      category: "init",
      content: n,
      timestamp: new Date().toISOString(),
      extra: { step_id: e, step_status: t, ...r },
    },
  };
}
function Ko(e, t, n, r) {
  return qn("clone", "completed", `${e} ${t} (${n}ms)`, {
    ...r,
    step_detail: e,
    clone_phase: t,
    duration_ms: String(n),
  });
}
function zo({
  gateOn: e,
  maxAgeS: t,
  maxTipAgeS: n,
  trustedOneShot: r,
  useWorktrees: s,
  workerEpoch: d,
  source: o,
}) {
  if (!e) return { eligible: !1, reason: "gate off" };
  if (t === void 0 || t < 1)
    return { eligible: !1, reason: "no usable freshness bound" };
  if (!r)
    return {
      eligible: !1,
      reason:
        "canonical is not a trusted one-shot prewarm (CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM unset or drain-grace > 0)",
    };
  if (s) return { eligible: !1, reason: "worktree mode (capacity > 1)" };
  if (!Ps(d))
    return { eligible: !1, reason: `worker epoch unknown (${d ?? "unset"})` };
  let c = jo(d),
    m;
  if (!o.ref) m = "staging";
  else
    m =
      (o.ref.startsWith("refs/heads/") ? o.ref.slice(11) : o.ref) === "warm"
        ? "warm"
        : void 0;
  if (m === void 0)
    return {
      eligible: !1,
      reason: `session named a revision the standby does not prefetch (${oe(b(o.ref), 80)})`,
    };
  if (o.repo.toLowerCase() !== cr || !_W(o.upstreamHost, lr))
    return {
      eligible: !1,
      reason: `not the prefetched repository (${o.upstreamHost ?? "unknown host"}/${o.repo})`,
    };
  return {
    eligible: !0,
    branch: m,
    maxAgeS: t,
    maxTipAgeS: n ?? Jo,
    laterWorker: c,
  };
}
function Ps(e) {
  return e !== void 0 && Number.isInteger(e) && e >= 1;
}
function jo(e) {
  return Ps(e) && e > 1;
}
var Ms = /^[0-9a-f]{40,64}$/,
  Xo = /^[A-Za-z0-9._][A-Za-z0-9._-]{0,399}$/,
  Yn = 64,
  Yo = 3000;
function Vo(e, t) {
  if (e === void 0 || e === null) return;
  let n = typeof e === "object" ? e.repos : void 0;
  if (!Array.isArray(n)) {
    t(
      `[runner:session] worktree_checkpoint_hint: unusable shape (${Cn(e)}) \u2014 ignoring`,
    );
    return;
  }
  let r = [],
    s = 0;
  for (let d of n.slice(0, Yn)) {
    let o = d && typeof d === "object" ? d.name : void 0,
      c = d && typeof d === "object" ? d.base_sha : void 0;
    if (
      typeof o === "string" &&
      o !== "." &&
      o !== ".." &&
      Xo.test(o) &&
      typeof c === "string" &&
      Ms.test(c)
    )
      r.push({ name: o, baseSha: c });
    else s++;
  }
  if (s > 0 || n.length > Yn)
    t(
      `[runner:session] worktree_checkpoint_hint: ${r.length} usable entr${r.length === 1 ? "y" : "ies"}, ${s} dropped (no/malformed name or base_sha)${n.length > Yn ? `, ${n.length - Yn} beyond the cap ignored` : ""}`,
    );
  return r.length > 0 ? r : void 0;
}
function qo({
  gateOn: e,
  workerEpoch: t,
  hintedBeforeRegister: n,
  refetch: r,
  onDebug: s,
  capMs: d = Yo,
}) {
  if (!e || !((t ?? 0) > 1) || !n) return Promise.resolve(void 0);
  return uu(
    Promise.resolve().then(r),
    d,
    "post-registration /remote re-read",
  ).then(
    (o) => Vo(o?.worktree_checkpoint_hint, s),
    (o) => {
      s(
        `[runner:session] worktree_checkpoint_hint: ${o instanceof Error ? o.message : String(o)} \u2014 this later worker fetches as usual`,
      );
      return;
    },
  );
}
async function Zo(e, t, n = (r) => realpath(r)) {
  if (e === void 0 || e.length === 0 || !t) return;
  let r;
  try {
    r = basename(await n(t));
  } catch {
    return;
  }
  return e.find((s) => s.name === r)?.baseSha;
}
var Jo = 1800;
async function Qo({
  useWorktrees: e,
  workerEpoch: t,
  source: n,
  checkpoint: r,
  onDebug: s,
  read: d = Jr,
}) {
  return;
}
var ea = 30000;
function ta({
  gateOn: e,
  claimed: t,
  waitMs: n,
  trustedOneShot: r,
  useWorktrees: s,
  source: d,
}) {
  if (!e) return { eligible: !1, reason: "gate off" };
  if (!t)
    return {
      eligible: !1,
      reason: "the claimed marker could not be written at session start",
    };
  if (!r)
    return {
      eligible: !1,
      reason:
        "canonical is not a trusted one-shot prewarm (CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM unset or drain-grace > 0)",
    };
  if (s) return { eligible: !1, reason: "worktree mode (capacity > 1)" };
  if (d.repo.toLowerCase() !== cr || !_W(d.upstreamHost, lr))
    return {
      eligible: !1,
      reason: `not the prefetched repository (${d.upstreamHost ?? "unknown host"}/${d.repo})`,
    };
  return { eligible: !0, waitMs: n ?? ea };
}
function na({
  claimed: e,
  useWorktrees: t,
  source: n,
  onDebug: r,
  dir: s = hn,
}) {
  return;
}
function ra(e) {
  return {};
}
function sa({ exitCode: e, exitSignal: t, stderrTail: n }) {
  let r = e !== null || t !== null,
    d = `The session process ${e === null ? "failed to start" : `exited with code ${e}`}. You can try again by sending a new message or starting a new session.`;
  if (n.trim().length > 0) {
    let m = n.length > cs ? `\u2026${n.slice(-cs)}` : n;
    d += `

Last output before exit:
${m}`;
  }
  let o = {
      type: "assistant",
      uuid: randomUUID(),
      message: {
        role: "assistant",
        model: fc,
        content: [{ type: "text", text: d }],
        stop_reason: "stop_sequence",
        usage: { input_tokens: 0, output_tokens: 0 },
      },
      parent_tool_use_id: null,
      isApiErrorMessage: !0,
    },
    c = {
      type: "result",
      uuid: randomUUID(),
      subtype: "error_during_execution",
      is_error: !0,
      duration_ms: 0,
      duration_api_ms: 0,
      num_turns: 0,
      total_cost_usd: 0,
      errors: [d],
      runner_exit: r
        ? { phase: "run", exit_code: e, signal: t }
        : { phase: "setup" },
      modelUsage: {},
      permission_denials: [],
      usage: {
        input_tokens: 0,
        output_tokens: 0,
        cache_creation_input_tokens: 0,
        cache_read_input_tokens: 0,
      },
    };
  return [o, c];
}
var Is = {
  POLL: "POLL_WAKE_SOURCE_POLL",
  SSE: "POLL_WAKE_SOURCE_SSE",
  LOCAL: "POLL_WAKE_SOURCE_LOCAL",
};
class Or {
  ac = new AbortController();
  pending = null;
  atCapacity = !1;
  wake(e) {
    if (e === "SSE" && this.atCapacity) return;
    if (this.pending !== "SSE") this.pending = e;
    this.ac.abort();
  }
  async wait(e, t) {
    if (this.pending !== null || t.aborted) return;
    let n = new AbortController(),
      r = () => n.abort(),
      s = this.ac.signal;
    (t.addEventListener("abort", r, { once: !0 }),
      s.addEventListener("abort", r, { once: !0 }));
    try {
      await Z(e, n.signal);
    } finally {
      (t.removeEventListener("abort", r), s.removeEventListener("abort", r));
    }
  }
  consume() {
    let e = this.pending ?? "POLL";
    return ((this.pending = null), (this.ac = new AbortController()), e);
  }
}
var Us = 200,
  ia = 1000,
  oa = 30000,
  aa = 45000;
function da(e) {
  e.abort();
}
function Fs(e) {
  let {
      baseUrl: t,
      runnerId: n,
      tokenState: r,
      onWake: s,
      onDebug: d,
      signal: o,
    } = e,
    c = `${t}/v1/code/runners/self-hosted/runners/${encodeURIComponent(n)}/work-hints/stream`,
    m = !1,
    p = 0,
    i = null,
    h = () => {
      ((m = !0), i?.abort());
    };
  return (
    o.addEventListener("abort", h, { once: !0 }),
    (async () => {
      while (!m && !o.aborted) {
        i = new AbortController();
        try {
          let w = await fetch(c, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${r.runnerToken}`,
              Accept: "text/event-stream",
              "anthropic-version": "2023-06-01",
              "x-self-hosted-runner-version": Pae,
            },
            ...getProxyFetchOptions({ url: c }),
            signal: i.signal,
          });
          if (!w.ok || !w.body)
            throw (
              d(
                `[runner:hints] stream HTTP ${w.status} \u2014 degrading to poll, retrying`,
              ),
              bF(w, { timeoutMs: idt }),
              Error(`HTTP ${w.status}`)
            );
          if ((d("[runner:hints] stream connected"), await ua(w.body, s, i)))
            p = 0;
          d("[runner:hints] stream ended \u2014 reconnecting");
        } catch (w) {
          if (m || o.aborted) break;
          if (p === 0) d(`[runner:hints] stream error: ${l(w)}`);
        }
        p++;
        let L = Math.min(oa, ia * 2 ** p),
          S = Math.floor(Math.random() * L);
        await Z(S, o);
      }
      o.removeEventListener("abort", h);
    })(),
    { close: h }
  );
}
async function ua(e, t, n) {
  let r = e.getReader(),
    s = new TextDecoder(),
    d = "",
    o = !1,
    c,
    m = () => {
      if (c !== void 0) clearTimeout(c);
      ((c = setTimeout(da, aa, n)), c.unref?.());
    };
  m();
  try {
    while (!n.signal.aborted) {
      let { done: p, value: i } = await r.read();
      if (p) return o;
      ((o = !0), m(), (d += s.decode(i, { stream: !0 })));
      let h;
      while (
        (h = d.indexOf(`
`)) >= 0
      ) {
        let L = d.slice(0, h).replace(/\r$/, "");
        if (
          ((d = d.slice(h + 1)),
          L.startsWith("event:") && L.slice(6).trimStart() === "work_available")
        )
          t();
      }
    }
    return o;
  } finally {
    if (c !== void 0) clearTimeout(c);
    (r.releaseLock(), e.cancel().catch(() => {}));
  }
}
var _a = "runner",
  zs = "https://api.anthropic.com",
  js = 1,
  Xs = !0,
  In = 20000,
  Hs = 5000,
  Sa = 30000,
  wa = 20000,
  Cr = 20000;
function Nr() {
  let e = process.env.SELF_HOSTED_RUNNER_DRAIN_WAIT_MS;
  return e !== void 0 && e !== ""
    ? Ye("SELF_HOSTED_RUNNER_DRAIN_WAIT_MS")
    : Ye("SELF_HOSTED_RUNNER_DRAIN_WAIT_BG_TASKS_MS");
}
function Ea() {
  let e = process.env.SELF_HOSTED_RUNNER_RETIRE_AT;
  if (e === void 0 || e === "") return 0;
  let t = Number(e);
  if (!Number.isSafeInteger(t) || t < qs || t > Zs) return 0;
  return t * 1000;
}
var ka = 1000,
  ba = 5000,
  Gs = 2000,
  Ra = In,
  Ta = zYt + 2000,
  ya = 5000,
  va = 1e4,
  Ys = "/workspace",
  Vs = 8080,
  vt = 10080,
  Lr = 604800,
  qs = 1e9,
  Zs = 100000000000,
  Oa = 15000,
  sr = 60000;
function Aa(e, t) {
  if (e === void 0 || e === "") return t;
  let n = tl(e);
  if (Number.isNaN(n) || n < 0 || n > 65535)
    throw Error(
      `SELF_HOSTED_RUNNER_HEALTH_PORT must be an integer in [0, 65535] (0 disables), got: ${b(e)}`,
    );
  return n;
}
function $a(e) {
  if (po(e)) return !1;
  if (Ie(e)) return !0;
  if (e === void 0 || e.trim() === "") return Xs;
  throw Error(
    `SELF_HOSTED_RUNNER_TRUST_WORKSPACE must be one of 1/true/yes/on or 0/false/no/off (got: ${b(e)})`,
  );
}
function Ca(e) {
  if (e === void 0 || e.trim() === "") return "warn";
  let t = e.trim().toLowerCase();
  if (t === "enforce" || t === "warn" || t === "off") return t;
  throw Error(
    `SELF_HOSTED_RUNNER_CONFINE_REPO_SETTINGS must be one of enforce/warn/off (got: ${b(e)})`,
  );
}
function Na(e) {
  let t = process.env.SELF_HOSTED_RUNNER_BASE_DIR || void 0,
    n = {
      apiUrl: zs,
      capacity: js,
      baseDir: rr(t ?? Ys),
      baseDirSource: t === void 0 ? "default" : "env",
      execPath: process.env.SELF_HOSTED_RUNNER_EXEC_PATH,
      logLevel: "info",
      logFile: process.env.SELF_HOSTED_RUNNER_LOG_FILE || void 0,
      healthPort: Aa(process.env.SELF_HOSTED_RUNNER_HEALTH_PORT, Vs),
      debugTokenDir: process.env.SELF_HOSTED_RUNNER_DEBUG_TOKEN_DIR,
      lockToAccountId: process.env.SELF_HOSTED_RUNNER_LOCK_TO_ACCOUNT,
      clientLabel:
        process.env.SELF_HOSTED_RUNNER_CLIENT_LABEL?.trim() || void 0,
      gitSshRewriteHosts: [],
      gitHostRewrites: [],
      useAnthropicGitProxy: Ie(process.env.CLAUDE_RUNNER_USE_GIT_PROXY),
      configureGit: Ie(process.env.SELF_HOSTED_RUNNER_CONFIGURE_GIT),
      pushOutcomeOnRelease: Ie(
        process.env.SELF_HOSTED_RUNNER_PUSH_OUTCOME_ON_RELEASE,
      ),
      trustWorkspace: $a(process.env.SELF_HOSTED_RUNNER_TRUST_WORKSPACE),
      confineRepoSettings: Ca(
        process.env.SELF_HOSTED_RUNNER_CONFINE_REPO_SETTINGS,
      ),
      envSetByFlag: new Set(),
    };
  if (process.env.SELF_HOSTED_RUNNER_HOOKS_DIR)
    process.env.SELF_HOSTED_RUNNER_HOOKS_DIR = rr(
      process.env.SELF_HOSTED_RUNNER_HOOKS_DIR,
    );
  for (let s = 0; s < e.length; s++) {
    let d = e[s],
      o = e[s + 1];
    switch (d) {
      case "--api-url":
        if (o) ((n.apiUrl = o), s++);
        break;
      case "--pool-secret-file":
      case "--environment-secret-file":
        if (d === "--pool-secret-file")
          console.error(
            "[runner:warn] --pool-secret-file is deprecated; use --environment-secret-file",
          );
        if (o) ((n.poolSecretFile = o), s++);
        break;
      case "--capacity":
        if (o) {
          let c = tl(o);
          if (Number.isNaN(c) || c < 1)
            throw Error(`--capacity must be a positive integer, got: ${o}`);
          ((n.capacity = c), s++);
        }
        break;
      case "--base-dir":
        if (o) ((n.baseDir = rr(o)), (n.baseDirSource = "flag"), s++);
        break;
      case "--exec-path":
        if (o) ((n.execPath = o), s++);
        break;
      case "--hooks-dir":
        if (o) ((process.env.SELF_HOSTED_RUNNER_HOOKS_DIR = rr(o)), s++);
        break;
      case "--git-ssh-rewrite":
        if (!o) throw Error("--git-ssh-rewrite requires a hostname");
        (n.gitSshRewriteHosts.push(o), s++);
        break;
      case "--git-host-rewrite": {
        if (!o) throw Error("--git-host-rewrite requires <from>=<to>");
        let c = o.indexOf("=");
        if (c <= 0 || c === o.length - 1)
          throw Error(`--git-host-rewrite requires <from>=<to>, got: ${o}`);
        let m = o.slice(0, c).toLowerCase(),
          p = o.slice(c + 1);
        if (
          m.includes("://") ||
          m.includes("/") ||
          p.includes("://") ||
          p.includes("/")
        )
          throw Error(
            `--git-host-rewrite expects bare hostnames (e.g. ext.example.com=int.example.com), not URLs. Got: ${o}`,
          );
        if (n.gitHostRewrites.some(([i]) => i === m))
          throw Error(`duplicate --git-host-rewrite for '${m}'`);
        (n.gitHostRewrites.push([m, p]), s++);
        break;
      }
      case "--use-anthropic-git-proxy":
        n.useAnthropicGitProxy = !0;
        break;
      case "--configure-git":
        n.configureGit = !0;
        break;
      case "--push-outcome-on-release":
        n.pushOutcomeOnRelease = !0;
        break;
      case "--trust-workspace":
        if (o === "false" || o === "0") ((n.trustWorkspace = !1), s++);
        else if (o === "true" || o === "1") ((n.trustWorkspace = !0), s++);
        else n.trustWorkspace = !0;
        break;
      case "--confine-repo-settings":
        if (o === "enforce" || o === "warn" || o === "off")
          ((n.confineRepoSettings = o), s++);
        else
          throw Error(
            `--confine-repo-settings requires one of enforce/warn/off (got: ${b(o)})`,
          );
        break;
      case "--log-level":
        if (o) ((n.logLevel = o), s++);
        break;
      case "--log-file":
        if (o) ((n.logFile = o), s++);
        break;
      case "--health-port":
        if (o) {
          let c = tl(o);
          if (Number.isNaN(c) || c < 0 || c > 65535)
            throw Error(
              `--health-port must be an integer in [0, 65535] (0 disables), got: ${o}`,
            );
          ((n.healthPort = c), s++);
        }
        break;
      case "--kill-session-after-min": {
        if (o) {
          let c = Number(o);
          if (!Number.isFinite(c) || c < 0 || c > vt)
            throw Error(
              `--kill-session-after-min must be a non-negative number of minutes (0 disables, max ${vt}), got: ${o}`,
            );
          ((process.env.SELF_HOSTED_RUNNER_MAX_LIFETIME_MS = String(
            c * 60 * 1000,
          )),
            n.envSetByFlag.add("SELF_HOSTED_RUNNER_MAX_LIFETIME_MS"),
            s++);
        }
        break;
      }
      case "--exit-if-unused-min": {
        if (o) {
          let c = Number(o);
          if (!Number.isFinite(c) || c < 0 || c > vt)
            throw Error(
              `--exit-if-unused-min must be a non-negative number of minutes (0 disables, max ${vt}), got: ${o}`,
            );
          ((process.env.SELF_HOSTED_RUNNER_IDLE_SHUTDOWN_MS = String(
            c * 60 * 1000,
          )),
            n.envSetByFlag.add("SELF_HOSTED_RUNNER_IDLE_SHUTDOWN_MS"),
            s++);
        }
        break;
      }
      case "--session-stop-grace-sec": {
        let c = e[++s],
          m = Number(c);
        if (!c || !Number.isFinite(m) || m <= 0)
          throw Error(
            `--session-stop-grace-sec must be a positive number of seconds, got: ${c}`,
          );
        process.env.SELF_HOSTED_RUNNER_SESSION_STOP_GRACE_MS = String(m * 1000);
        break;
      }
      case "--sigkill-timeout-sec":
        throw Error(
          "--sigkill-timeout-sec was renamed to --session-stop-grace-sec. It controls how long to wait for the Claude process to exit cleanly after a session ends, before force-killing it. The post-session hook runs after this.",
        );
      case "--post-session-hook-timeout-sec": {
        let c = e[++s],
          m = Number(c);
        if (!c || !Number.isFinite(m) || m <= 0)
          throw Error(
            `--post-session-hook-timeout-sec must be a positive number of seconds, got: ${c}`,
          );
        process.env.SELF_HOSTED_RUNNER_POST_SESSION_HOOK_TIMEOUT_MS = String(
          m * 1000,
        );
        break;
      }
      case "--drain-wait-bg-tasks-sec":
      case "--drain-wait-sec": {
        if (d === "--drain-wait-bg-tasks-sec")
          console.error(
            "[runner:warn] --drain-wait-bg-tasks-sec is deprecated; use --drain-wait-sec (it now also waits for an in-flight foreground turn, not only background tasks)",
          );
        let c = e[++s],
          m = Number(c);
        if (!c || !Number.isFinite(m) || m < 0 || m > 86400)
          throw Error(
            `${d} must be a non-negative number of seconds (max 86400), got: ${c}`,
          );
        process.env.SELF_HOSTED_RUNNER_DRAIN_WAIT_MS = String(m * 1000);
        break;
      }
      case "--drain-grace-sec": {
        if (o) {
          let c = Number(o);
          if (!Number.isFinite(c) || c < 0 || c > Lr)
            throw Error(
              `--drain-grace-sec must be a non-negative number of seconds (0 = immediate, max ${Lr}), got: ${o}`,
            );
          ((process.env.SELF_HOSTED_RUNNER_DRAIN_GRACE_MS = String(c * 1000)),
            s++);
        }
        break;
      }
      case "--release-idle-session-min": {
        if (o) {
          let c = Number(o);
          if (!Number.isFinite(c) || c < 0 || c > vt)
            throw Error(
              `--release-idle-session-min must be a non-negative number of minutes (0 disables, max ${vt}), got: ${o}`,
            );
          ((process.env.SELF_HOSTED_RUNNER_SESSION_IDLE_MS = String(
            c * 60 * 1000,
          )),
            n.envSetByFlag.add("SELF_HOSTED_RUNNER_SESSION_IDLE_MS"),
            s++);
        }
        break;
      }
      case "--startup-timeout-min": {
        if (o) {
          let c = Number(o);
          if (!Number.isFinite(c) || c < 0 || c > vt)
            throw Error(
              `--startup-timeout-min must be a non-negative number of minutes (0 disables, max ${vt}), got: ${o}`,
            );
          ((process.env.SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS = String(
            c * 60 * 1000,
          )),
            n.envSetByFlag.add("SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS"),
            s++);
        }
        break;
      }
      case "--defer-shutdown-max-min": {
        let c = e[++s],
          m = Number(c);
        if (
          c === void 0 ||
          c.trim() === "" ||
          !Number.isFinite(m) ||
          m < 0 ||
          m > vt
        )
          throw Error(
            `${d} must be a non-negative number of minutes (0 disables, max ${vt}), got: ${c}`,
          );
        ((process.env.SELF_HOSTED_RUNNER_DEFER_SHUTDOWN_MAX_MS = String(
          m * 60 * 1000,
        )),
          n.envSetByFlag.add("SELF_HOSTED_RUNNER_DEFER_SHUTDOWN_MAX_MS"));
        break;
      }
      case "--retire-at": {
        let c = e[++s],
          m = Number(c);
        if (!c || !Number.isSafeInteger(m) || m < qs || m > Zs)
          throw Error(
            `--retire-at must be an absolute Unix timestamp in whole SECONDS (e.g. the output of 'date +%s' plus the runner's intended lifetime \u2014 not milliseconds, not a duration), got: ${c}`,
          );
        process.env.SELF_HOSTED_RUNNER_RETIRE_AT = String(m);
        break;
      }
      case "--lock-to-account":
        if (o) ((n.lockToAccountId = o), s++);
        break;
      case "--client-label":
        if (o && !o.startsWith("--")) {
          let c = o.trim();
          if (c) ((n.clientLabel = c), s++);
        }
        break;
      case "--debug-token-dir":
        if (o) ((n.debugTokenDir = o), s++);
        break;
      case "--proxy-authorization-command":
      case "--proxy-authorization-file":
        if (o === void 0 || o.startsWith("--"))
          throw Error(
            "--proxy-authorization-command / --proxy-authorization-file requires a value",
          );
        if (d === "--proxy-authorization-command")
          n.proxyAuthorizationCommand = o;
        else n.proxyAuthorizationFile = o;
        s++;
        break;
      default:
        if (d?.startsWith("--")) throw Error(`unknown flag ${d}`);
        if (d === "")
          throw Error(
            "empty argument \u2014 a flag value may be unset (failed env/K8s substitution?)",
          );
        if (d !== void 0)
          throw Error(
            `unexpected argument '${d}' \u2014 this command takes no positional arguments`,
          );
        break;
    }
  }
  let r = new Set(n.gitSshRewriteHosts.map((s) => s.toLowerCase()));
  for (let [s, d] of n.gitHostRewrites)
    if (r.has(s))
      console.error(
        `[runner:warn] --git-ssh-rewrite '${s}' will not match: --git-host-rewrite rewrites it to '${d}' first. Did you mean --git-ssh-rewrite '${d}'?`,
      );
  return n;
}
function La(e, t) {
  if (t <= 1) return null;
  if (ns(e) === null) return null;
  return (
    `[runner:warn] --capacity ${t} has no effect on a session-bound runner: this work order is bound to one session, so this runner will serve exactly one session and the extra ${t - 1} slot(s) will not be used. To run multiple concurrent sessions for the same account ` +
    "per runner, register a fixed-fleet runner with the environment secret \u2014 see " +
    'docs/self-hosted-runners-guide.md \xA7 "Get started".'
  );
}
function xa(e, t = "darwin") {
  if (t === "win32" && e === "default")
    throw Error(
      "--base-dir (or SELF_HOSTED_RUNNER_BASE_DIR) is required on Windows: the built-in default is a POSIX container path that does not apply there. Pass the directory that repositories should be checked out under.",
    );
}
async function Da(e) {
  if (e.poolSecretFile) {
    let r;
    try {
      r = await uu(
        Ks(e.poolSecretFile, { encoding: "utf-8" }),
        va,
        `environment-secret read from ${e.poolSecretFile}`,
      );
    } catch (s) {
      let d = l(s);
      if (d.includes("timed out after"))
        (console.error(
          `[runner:fatal] ${d} \u2014 check CSI/secret mount health`,
        ),
          process.exit(1));
      throw Error(
        `Failed to read environment secret file ${e.poolSecretFile} (${d})`,
      );
    }
    return r.trim();
  }
  let t = process.env.SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET;
  if (t) return t.trim();
  let n = process.env.SELF_HOSTED_RUNNER_POOL_SECRET;
  if (n)
    return (
      console.error(
        "[runner:warn] SELF_HOSTED_RUNNER_POOL_SECRET is deprecated; use SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET",
      ),
      n.trim()
    );
  throw Error(
    "No environment secret provided. Use --environment-secret-file or set SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET.",
  );
}
function Pa(e) {
  if (e) return { execPath: e, execArgs: [] };
  return {
    execPath: process.execPath,
    execArgs: bc() ? [] : [process.argv[1]],
  };
}
async function selfHostedRunnerMain(e) {
  if (e.includes("--help") || e.includes("-h")) {
    console.log(`Usage: claude self-hosted-runner [options]

Connection:
  --api-url <url>             API base URL (default: ${zs})
  --environment-secret-file <path>
                              Path to environment secret file (or set SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET)
                              (--pool-secret-file / SELF_HOSTED_RUNNER_POOL_SECRET are deprecated aliases.)
  --lock-to-account <id>      Lock runner to a single account at registration (webhook-driven on-demand
                              spawn). Only that account's sessions are assigned.
                              [env: SELF_HOSTED_RUNNER_LOCK_TO_ACCOUNT]
  --client-label <label>      Observability label sent at registration (default: hostname). Shown
                              beside the runner in the Anthropic console; never used for
                              authorization or routing. Set it when the hostname is not
                              meaningful, e.g. to a VM or container name.
                              [env: SELF_HOSTED_RUNNER_CLIENT_LABEL]
  --proxy-authorization-command <shell command>
                              For egress proxies that require a Proxy-Authorization header (for
                              example a short-lived bearer token) on every CONNECT. The command's
                              stdout is the full header value (e.g. "Bearer <token>"); it is run
                              afresh for each new connection to the proxy, so rotating tokens stay
                              current. Requires HTTPS_PROXY (or HTTP_PROXY) to name that upstream
                              proxy; ALL_PROXY alone is not consulted. When set, the runner starts a
                              small forward proxy on 127.0.0.1 that adds the header, and points
                              itself and every session it runs at it (HTTPS_PROXY/HTTP_PROXY are
                              rewritten for child processes, other proxy variables incl. ALL_PROXY
                              are cleared for them; NO_PROXY is unchanged). The value is never
                              logged. Not supported with the orchestrator subcommand yet.
                              [env: ${got}]
  --proxy-authorization-file <path>
                              Same, but the header value is read from a file (re-read for each new
                              connection, so a file rotated in place is picked up). Set only one of
                              the two. [env: ${hot}]

Runtime:
  --capacity <n>              Max concurrent sessions (default: ${js})
  --base-dir <path>           Base directory for repo checkouts (default: ${Ys};
                              required on Windows, which has no default)
                              [env: SELF_HOSTED_RUNNER_BASE_DIR]
  --exec-path <path>          Binary to spawn for child sessions. Default: this process's own binary.
                              [env: SELF_HOSTED_RUNNER_EXEC_PATH]
  --hooks-dir <path>          Directory of lifecycle hook scripts (checkout, command, post-session).
                              Absent hooks fall through to built-in behavior.
                              [env: SELF_HOSTED_RUNNER_HOOKS_DIR]
  --session-stop-grace-sec <n>
                              How long to wait for the Claude process to exit cleanly after a
                              session ends, before force-killing it. The post-session hook runs
                              after this. Default: ${Pn / 1000}.
                              [env: SELF_HOSTED_RUNNER_SESSION_STOP_GRACE_MS, in ms]
  --post-session-hook-timeout-sec <n>
                              SIGTERM budget for the post-session lifecycle hook, on every session
                              end including runner shutdown. Default: ${yn / 1000}.
                              [env: SELF_HOSTED_RUNNER_POST_SESSION_HOOK_TIMEOUT_MS, in ms]
  --drain-wait-sec <n>        On SIGTERM/SIGINT, wait up to N seconds for each session's in-flight
                              turn (a foreground tool call) and running background tasks to finish
                              before sending the session process its SIGTERM. Adds N to the
                              advertised shutdown budget.
                              A background task that has JUST finished also counts as
                              in-flight until the follow-up turn that reads its result starts
                              (bounded by SELF_HOSTED_RUNNER_BG_RESULT_GRACE_MS, in ms;
                              default: ${tr / 1000}s; 0 or an unusable value falls back
                              to the default \u2014 the hold cannot be disabled).
                              Default: 0 (send SIGTERM immediately). Max: 86400.
                              [env: SELF_HOSTED_RUNNER_DRAIN_WAIT_MS, in ms]
                              (--drain-wait-bg-tasks-sec is a deprecated alias for this flag.)
  --git-ssh-rewrite <host>    Rewrite https://<host>/... source URLs to git@<host>:... (repeatable).
                              For SSH-only git hosts.
  --git-host-rewrite <f>=<t>  Rewrite https://<f>/... source URLs to https://<t>/... (repeatable).
                              For split-horizon DNS where the runner reaches GHE via a different
                              hostname than the control plane. Applied before --git-ssh-rewrite.
  --use-anthropic-git-proxy   Clone via Anthropic's git proxy (uses the session creator's stored
                              GitHub OAuth token, or the org's GitHub App installation token for
                              bot/agent sessions; you don't manage git auth on the runner). Supersedes
                              --git-host-rewrite and --git-ssh-rewrite.
                              [env: CLAUDE_RUNNER_USE_GIT_PROXY=1]
  --configure-git             Set global git identity to Claude <noreply@anthropic.com> and enable
                              commit signing via Anthropic's signing service, matching 1P sessions.
                              Writes ~/.gitconfig at runner startup. Without this flag, your image
                              must provide its own git identity.
                              [env: SELF_HOSTED_RUNNER_CONFIGURE_GIT=1]
  --push-outcome-on-release   On a runner-initiated non-completed session end (SIGTERM drain,
                              idle-release, failed), push every tracked outcome branch to origin
                              before deleting it, so in-flight commits survive a runner restart.
                              Skipped on server-initiated deassign. On a resumed session (worker
                              epoch > 1), the prep path fetches any previously pushed outcome
                              branch from origin and continues from it, so histories stay
                              linear. CAVEAT: the resume-fetch trusts refs/heads/<outcome-branch>
                              on the source remote \u2014 anyone with push access to that ref can
                              place content into the resumed workspace; if your source revision
                              is protected but claude/* refs are not, that collaborator write
                              surface widens on resume. Repos checked out via the checkout
                              lifecycle hook are NOT pushed \u2014 use the post-session hook to
                              snapshot those. Adds 30s
                              (total, shared across all pushes) to the advertised
                              shutdown budget.
                              [env: SELF_HOSTED_RUNNER_PUSH_OUTCOME_ON_RELEASE=1]
  --trust-workspace [bool]    Seed persisted trust for each session's repo paths so repo-level
                              .claude/settings.json permissions.allow and additionalDirectories
                              are honored by the child. Default: ${Xs}.
                              Set to false for cli#44151's stricter gate: repo-committed grants
                              are dropped with an "Ignoring N permissions.allow" stderr
                              diagnostic; configure host-level grants via the host-config dir's
                              settings.json permissions.allow (userSettings source) instead.
                              [env: SELF_HOSTED_RUNNER_TRUST_WORKSPACE=0 to disable]
  --confine-repo-settings <mode>
                              Repo-committed-settings confine guard mode: warn (default) logs
                              a would-refuse diagnostic per violation and still spawns;
                              enforce refuses to spawn the session; off disables the scan.
                              Invalid values fail closed at startup.
                              [env: SELF_HOSTED_RUNNER_CONFINE_REPO_SETTINGS]
  [env: SELF_HOSTED_RUNNER_HOST_CONFIG_DIR]
                              Directory seeded into each session's CLAUDE_CONFIG_DIR (settings,
                              agents/, skills/, \u2026; runtime state excluded). Default: ~/.claude.
                              Point at an empty dir to disable.
  --health-port <port>        Port for /healthz HTTP listener (default: ${Vs}). 0 disables.
                              [env: SELF_HOSTED_RUNNER_HEALTH_PORT]
  --log-level <level>         Log level: info or debug (default: info)
  --log-file <path>           Tee runner logs to a file in append mode. Stdout is unchanged.
                              [env: SELF_HOSTED_RUNNER_LOG_FILE]

Runner lifecycle:
  --exit-if-unused-min <n>    Exit the runner if never assigned work for N min (autoscaler scale-down).
                              Default: never. Max: ${vt}.
                              [env: SELF_HOSTED_RUNNER_IDLE_SHUTDOWN_MS, in ms]
  --drain-grace-sec <n>       Default: 0 \u2014 exit immediately after active sessions finish, WITHOUT
                              polling for more (one-shot when --capacity=1).
                              Set a positive value (e.g. 30) to keep the runner warm and re-poll the
                              locked account's queue for that many seconds before exiting.
                              Max: ${Lr}. [env: SELF_HOSTED_RUNNER_DRAIN_GRACE_MS, in ms]
  --retire-at <epoch-seconds> Retire the runner at the given wall-clock time (absolute Unix timestamp, in
                              seconds): release every active session through the ReleaseSession path that
                              --release-idle-session-min uses (the session parks server-side and a fresh
                              runner picks it up on the user's next message), stop taking new work, and
                              exit 0 once the slots are empty. A session still mid-turn at that time is
                              released as soon as its turn ends; background work a finished turn left
                              running gets up to 60s of grace, then the session parks anyway (perpetual
                              monitor tasks don't hold it at all). Use this when the host hard-kills the
                              runner at a known time (e.g. a sandbox lifetime cap): set it far enough
                              before the kill to cover typical turns PLUS the per-session shutdown
                              budget (--session-stop-grace-sec, the push-outcome window, the full
                              --post-session-hook-timeout-sec, the 60s background-work grace, one poll)
                              so sessions park cleanly and the post-session hook isn't truncated by
                              the kill. Default: never. [env: SELF_HOSTED_RUNNER_RETIRE_AT, in seconds]
  --defer-shutdown-max-min <m>
                              On the FIRST SIGTERM/SIGINT, do not drain: stop taking new work (the runner
                              advertises zero capacity and keeps polling only as its lease heartbeat) and
                              otherwise keep running as it does today, then finish shutting down M minutes
                              later. Until then attached sessions are served normally and leave only the way
                              they would without any signal: --release-idle-session-min, if set, releases a
                              session whose user has gone idle (it parks server-side and a fresh runner
                              resumes it on the user's next message); a session that flag would not release
                              \u2014 it is unset, or the finished turn still has background work running \u2014 simply
                              stays attached. M minutes after the first signal every session still attached
                              is released through that same park path at once regardless of idle time (one
                              mid-turn as soon as its turn ends; background work a finished turn left running
                              gets up to 60s), and anything STILL attached ${(sr + ln) / 1000}s later (that 60s + a 15s
                              margin; --drain-wait-sec + 15s if longer) is drained as on a second signal \u2014
                              the one path that requeues instead of parking. The runner exits 0 as soon as
                              it holds no session, before or after M. A SECOND signal drains immediately, as
                              the first does without this flag; a third force-exits (so does a signal during
                              that last-resort drain). READ THIS BEFORE ENABLING: your supervisor sends one
                              SIGTERM and then SIGKILLs at its stop timeout; if that timeout ends first,
                              every still-attached session is killed WITHOUT its post-session hook or
                              deregister and is requeued to another runner about a minute later \u2014 strictly
                              worse than the default drain. So set the stop timeout
                              (terminationGracePeriodSeconds etc.) to at least M minutes + ${(sr + ln) / 1000}s (that post-ceiling
                              grace; --drain-wait-sec + 15s if longer) + the shutdown budget above \u2014 the runner
                              prints this sum at startup when the flag is set. --startup-timeout-min and
                              --kill-session-after-min keep working unchanged during the wait. Fractional
                              minutes are accepted. Default: 0 (off \u2014 drain on the first signal).
                              Max: ${vt}. [env: SELF_HOSTED_RUNNER_DEFER_SHUTDOWN_MAX_MS, in ms]

Per-session watchdogs:
  --release-idle-session-min <n>  Release a session slot after N min of no user input (turn finished,
                                  or parked at a permission prompt, user idle). Runner exits if this
                                  drops it to zero active sessions.
                                  Default: never. Max: ${vt}.
                                  [env: SELF_HOSTED_RUNNER_SESSION_IDLE_MS, in ms]
  --startup-timeout-min <n>       Release a session slot if the child has not completed initialization
                                  N min after spawn \u2014 covers a child hung during --resume hydration or
                                  MCP connect, and a session assigned with no pending input. Cleared
                                  once the child emits system:init, after which --release-idle-session-min
                                  takes over. Default: 15. 0 disables. Max: ${vt}.
                                  [env: SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS, in ms]
  --kill-session-after-min <n>    Cap a session child's wall-clock life at N min (runaway backstop).
                                  At the deadline a session that is waiting on its user (idle, parked
                                  at a permission prompt, or still starting up) is RELEASED \u2014 paused
                                  server-side, resumable \u2014 not killed; a turn in flight is released
                                  when it next parks or finishes; a turn still running (or a release
                                  the server keeps declining) is SIGTERMed at the hard cap, 15 min past
                                  the deadline (override: SELF_HOSTED_RUNNER_MAX_LIFETIME_GRACE_MS, in
                                  ms). Default: never. Max: ${vt}.
                                  [env: SELF_HOSTED_RUNNER_MAX_LIFETIME_MS, in ms]

Debug:
  --debug-token-dir <path>    DEBUG ONLY \u2014 writes live tokens to disk. Do not use in production.
                              [env: SELF_HOSTED_RUNNER_DEBUG_TOKEN_DIR]

  --help, -h                  Show this help message`);
    return;
  }
  configureGlobalAgents();
  let t, n, r;
  try {
    if (
      ((t = Na(e)),
      (r = TNn({
        command: t.proxyAuthorizationCommand,
        file: t.proxyAuthorizationFile,
      })),
      process.env.SELF_HOSTED_RUNNER_HOOKS_DIR)
    )
      _ot("--hooks-dir");
    (xa(t.baseDirSource), q4(), (n = await Da(t)), await Pr(t.baseDir));
  } catch (v) {
    (console.error(`error: ${ml(l(v))}
Run 'claude self-hosted-runner --help' for usage.`),
      process.exit(2));
  }
  let s = t.logLevel === "debug",
    d = () => new Date().toISOString(),
    o;
  if (t.logFile)
    ((o = createWriteStream(t.logFile, { flags: "a", mode: 384 })),
      o.on("open", (v) => {
        fchmod(v, 384, () => {});
      }),
      o.on("error", (v) => {
        (console.error(
          `${d()} [runner:warn] log-file write failed (${l(v)}); continuing stdout-only`,
        ),
          (o = void 0));
      }));
  let c = (v) => {
      o?.write(
        v +
          `
`,
      );
    },
    m = async () => {
      if (!o) return;
      let v = o;
      ((o = void 0),
        await uu(
          new Promise((O) => v.end(O)),
          500,
          "[runner:exit] log-file flush",
        ).catch(() => {}));
    },
    p = (v) => {
      if (s) {
        let O = `${d()} [DEBUG] ${ml(v)}`;
        (console.error(O), c(O));
      }
    },
    i = (v) => {
      let O = `${d()} [self-hosted-runner] ${ml(v)}`;
      (console.log(O), c(O));
    };
  if (process.env.SELF_HOSTED_RUNNER_SIGKILL_TIMEOUT_MS !== void 0)
    (i(
      "[runner:fatal] SELF_HOSTED_RUNNER_SIGKILL_TIMEOUT_MS was renamed to SELF_HOSTED_RUNNER_SESSION_STOP_GRACE_MS. It controls how long to wait for the Claude process to exit cleanly after a session ends, before force-killing it. The post-session hook runs after this.",
    ),
      await m(),
      process.exit(1));
  for (let v of [
    "RUNNER_RELEASE_IDLE_SESSION_MIN",
    "SELF_HOSTED_RUNNER_RELEASE_IDLE_SESSION_MIN",
    "SELF_HOSTED_RUNNER_SESSION_IDLE_MIN",
    "SELF_HOSTED_RUNNER_SESSION_IDLE_SEC",
  ])
    if (process.env[v] !== void 0)
      i(
        `[runner:warn] ${v} is set but is not a setting this runner ` +
          "reads \u2014 it is being IGNORED. The session idle-release window " +
          "is configured with --release-idle-session-min <minutes> (or env SELF_HOSTED_RUNNER_SESSION_IDLE_MS, in milliseconds).",
      );
  let h = Tr(
      Ye("SELF_HOSTED_RUNNER_SESSION_STOP_GRACE_MS") || Pn,
      Ye("SELF_HOSTED_RUNNER_POST_SESSION_HOOK_TIMEOUT_MS") || yn,
      Nr(),
      t.pushOutcomeOnRelease ? Tn : 0,
    ),
    L = `[runner] This runner needs up to ${h}s to stop the Claude process and run the post-session hook on shutdown, and force-exits after ${h}s (a session release already in flight when shutdown begins can add up to ${Cr / 1000}s, normally well under 1s, before the runner deregisters). Configure your process supervisor's stop timeout to at least ${h}s (e.g. terminationGracePeriodSeconds on Kubernetes, stop_grace_period on Docker Compose, TimeoutStopSec on systemd, or your platform's equivalent).`;
  i(L);
  let S = Ye("SELF_HOSTED_RUNNER_DEFER_SHUTDOWN_MAX_MS"),
    w = Ye("SELF_HOSTED_RUNNER_SESSION_IDLE_MS"),
    U = Math.max(Nr(), sr) + ln,
    V =
      S > 0
        ? `[runner] --defer-shutdown-max-min is set (${formatDuration(S, { hideTrailingZeros: !0 })}): the FIRST shutdown signal does not start that ${h}s budget \u2014 the runner stops ` +
          "taking work but keeps serving the attached sessions; " +
          (w > 0
            ? `each is released (parked, resumable) once its user has been idle ${formatDuration(w, { hideTrailingZeros: !0 })} (--release-idle-session-min)`
            : "none is released early (--release-idle-session-min is not set)") +
          `, and the runner exits as soon as it holds no session; ${formatDuration(S, { hideTrailingZeros: !0 })} after the signal every remaining session is released at once and anything still attached ${formatDuration(U, { hideTrailingZeros: !0 })} later is drained. If your supervisor's stop timeout ends first, every still-attached session is killed WITHOUT its post-session hook or deregister and is requeued to another runner about a minute later. Size the stop timeout to at least ${Math.ceil((S + U) / 1000) + h}s (M + post-ceiling grace + the budget above). A second signal drains immediately.`
        : void 0;
  if (V !== void 0) i(V);
  let ne = (v, O, C, F = !1) => {
    let Re = process.env[v];
    if (Re === void 0 || Re === "")
      return C !== void 0 && C > 0
        ? `${formatDuration(C, { hideTrailingZeros: !0 })} (default)`
        : "disabled (not configured)";
    let ye = t.envSetByFlag.has(v) ? O : `env ${v}`,
      me = Ye(v);
    if (me > 0) return `${formatDuration(me, { hideTrailingZeros: !0 })} (from ${ye})`;
    let ve = Number(Re);
    if (F && C !== void 0 && C > 0) {
      let It =
        Number.isFinite(ve) && ve === 0
          ? "0 is not accepted"
          : "not a usable ms duration";
      return (
        `${formatDuration(C, { hideTrailingZeros: !0 })} ` +
        `(default \u2014 ${ye} ignored: ${It})`
      );
    }
    return Number.isFinite(ve) && ve === 0
      ? `disabled (from ${ye})`
      : `disabled (from ${ye} \u2014 not a usable ms duration, treated as 0)`;
  };
  i(
    `[runner] watchdog config: idle-release=${ne("SELF_HOSTED_RUNNER_SESSION_IDLE_MS", "--release-idle-session-min")}; startup-timeout=${ne("SELF_HOSTED_RUNNER_STARTUP_TIMEOUT_MS", "--startup-timeout-min", Rr)}; kill-session-after=${ne("SELF_HOSTED_RUNNER_MAX_LIFETIME_MS", "--kill-session-after-min")}; exit-if-unused=${ne("SELF_HOSTED_RUNNER_IDLE_SHUTDOWN_MS", "--exit-if-unused-min")}; defer-shutdown-max=${ne("SELF_HOSTED_RUNNER_DEFER_SHUTDOWN_MAX_MS", "--defer-shutdown-max-min")}; bg-result-grace=${ne("SELF_HOSTED_RUNNER_BG_RESULT_GRACE_MS", "SELF_HOSTED_RUNNER_BG_RESULT_GRACE_MS", tr, !0)}`,
  );
  let ae = process.env.SELF_HOSTED_RUNNER_HOOKS_DIR,
    te = t.execPath;
  if (!te) {
    let v = await yot(ae, "command");
    if (v) ((te = v), i(`[runner:hook] using command hook ${v}`));
  }
  let { execPath: le, execArgs: we } = Pa(te);
  i(
    `Connecting to ${t.apiUrl} (capacity=${t.capacity}, baseDir=${t.baseDir}, execPath=${[le, ...we].join(" ")})`,
  );
  let H = La(n, t.capacity);
  if (H !== null) i(H);
  if (t.debugTokenDir)
    await $r(t.debugTokenDir, { recursive: !0, mode: 448 })
      .then(() => {
        i(`[runner:debug] debug token dir ready: ${t.debugTokenDir}`);
      })
      .catch((v) => {
        i(
          `[runner:debug] failed to create debug token dir (best-effort): ${v}`,
        );
      });
  let fe;
  if (r)
    try {
      ((fe = await ENn(r, { onStatus: i, onDebug: p })),
        logFeatureOk("self_hosted_egress_proxy_auth"));
    } catch (v) {
      (logFeatureBad("self_hosted_egress_proxy_auth", "listener_start_failed"),
        i(
          `[runner:fatal] could not start the proxy-authorization listener: ${l(v)}`,
        ),
        await m(),
        process.exit(1));
    }
  let ke = mot({ baseUrl: t.apiUrl, poolSecret: n, onDebug: p }),
    Ae = t.clientLabel ?? hostname();
  if (t.lockToAccountId)
    i(`Registering locked to account: ${t.lockToAccountId}`);
  let de, Me;
  try {
    let v = await gn(() => ke.registerRunner(Ae, t.lockToAccountId), {
      initialDelayMs: 1000,
      maxDelayMs: 16000,
      maxAttempts: 5,
      shouldRetry: Yxe,
      onRetry: (O, C) => {
        i(
          `RegisterRunner attempt ${O} transient failure (${C instanceof Error ? C.message : C}) \u2014 retrying`,
        );
      },
    });
    ((de = v.runner_id), (Me = v.runner_token), logFeatureOk("self_hosted_register"));
  } catch (v) {
    let O = v instanceof Error ? v.message : String(v);
    if (Js(v))
      (logFeatureBad("self_hosted_register", "self_hosted_register_auth_failed"),
        i(
          `[runner:fatal] RegisterRunner auth failed \u2014 environment secret invalid or revoked. Check --environment-secret-file or SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET. (${O})`,
        ));
    else
      (logFeatureBad("self_hosted_register", "self_hosted_register_failed"),
        i(`[runner:fatal] RegisterRunner failed: ${O}`));
    (await m(), process.exit(1));
  }
  i(`Registered: runner_id=${de}`);
  let lt = new AbortController(),
    pt = new AbortController(),
    qe = "running",
    Gt = !0,
    St = {},
    Ue = (v) => {
      let O = St.current,
        C =
          O === void 0
            ? "session counts not yet initialized (startup in progress)"
            : `${O.sessionIdle.size} active session(s), ${G([...O.sessionIdle.values()], (F) => F !== null)} of them idle`;
      return `(${v}; uptime ${formatDuration(process.uptime() * 1000)}; ${C})`;
    },
    Rt = (v) => {
      if (qe === "running" && S > 0 && Gt) {
        if (
          ((qe = "deferring"),
          i(
            `Received shutdown signal, deferring drain: refusing new work, serving the attached sessions until they are released or ${formatDuration(S, { hideTrailingZeros: !0 })} passes; a second signal drains immediately ${Ue(v)}`,
          ),
          i(L),
          V !== void 0)
        )
          i(V);
        pt.abort(Date.now());
        return;
      }
      zt(v);
    },
    zt = (v, O = "signal") => {
      if (qe === "draining") {
        let F = KYt();
        if (F > 0)
          i(
            `[runner] Forced shutdown with ${F} post-session hook(s) still running \u2014 they continue in their own process group, but their output is no longer captured and the runner's timeout budget no longer applies.`,
          );
        else i("Forced shutdown");
        m().finally(() => process.exit(1));
        return;
      }
      ((qe = "draining"),
        i(
          O === "signal"
            ? "Received shutdown signal, draining active sessions... " + Ue(v)
            : `[runner:shutdown] ${v} \u2014 draining active sessions... ` +
                Ue("no new signal"),
        ),
        i(L));
      let C = KYt();
      if (C > 0)
        i(
          `[runner] ${C} post-session hook(s) still running \u2014 waiting for them within the budget above. Another SIGTERM force-exits the runner immediately; make sure your supervisor's stop timeout covers the full budget so hooks are not cut short.`,
        );
      lt.abort();
    },
    ht = () => Rt("SIGTERM"),
    At = () => Rt("SIGINT");
  (process.on("SIGTERM", ht), process.on("SIGINT", At));
  let Wt = { runnerToken: Me };
  if (t.debugTokenDir) await Ws(t.debugTokenDir, "runner_token.jwt", Me, i);
  let We = zn({
    getAccessToken: async () => {
      let { token: v } = await ke.refreshToken(Wt.runnerToken);
      return v;
    },
    onRefresh: (v, O) => {
      if (t.debugTokenDir) Ws(t.debugTokenDir, "runner_token.jwt", O, i);
      ((Wt.runnerToken = O), p("[runner:main] runner_token refreshed"));
    },
    label: "self-hosted-runner",
  });
  We.schedule(_a, Me);
  let De;
  if (t.useAnthropicGitProxy) {
    if (t.capacity > 1)
      (i(
        "[runner:fatal] --use-anthropic-git-proxy requires --capacity 1 (the proxy URL is per-session and linked worktrees share origin). Omit --use-anthropic-git-proxy or set --capacity 1.",
      ),
        await m(),
        process.exit(1));
    if (
      antEnv.CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM &&
      Ye("SELF_HOSTED_RUNNER_DRAIN_GRACE_MS") > 0
    )
      (i(
        "[runner:fatal] CLAUDE_RUNNER_TRUST_CANONICAL_PREWARM requires --drain-grace-sec 0 (one-shot). With drain-grace > 0 a second session could reuse this VM after the first's child wrote to the canonical .git/, and the skip would bypass the cross-session-isolation sanitize for an untrusted canonical. Unset the env var or set --drain-grace-sec 0.",
      ),
        await m(),
        process.exit(1));
    let { parseGitVersion: v, readGitVersion: O } =
        await import("./GIT_PROXY_CRED_HELPER_CONTENT.pcspxqeg.js"),
      C = await O(),
      F = v(C);
    if (!F || F[0] < 2 || (F[0] === 2 && F[1] < 32))
      (i(
        `[runner:fatal] --use-anthropic-git-proxy requires git >= 2.32 (found ${C.trim() || "<none>"}). Older git silently ignores GIT_CONFIG_GLOBAL, which this mode relies on for cross-session isolation.`,
      ),
        await m(),
        process.exit(1));
    De = process.env.GIT_CONFIG_GLOBAL || mn(Ar(), ".gitconfig");
    let Re = De,
      ye = await pa(Re).catch(() => {
        return;
      });
    if (ye && (ye.isCharacterDevice() || ye.isBlockDevice()))
      (i(
        `[runner:fatal] --use-anthropic-git-proxy requires a writable global git config, but GIT_CONFIG_GLOBAL resolves to ${Re} which is not a regular file. The proxy flag writes its credential helper there and restores it at each session start. Unset GIT_CONFIG_GLOBAL or point it at a regular file path.`,
      ),
        await m(),
        process.exit(1));
    let me = process.env.XDG_CONFIG_HOME || mn(Ar(), ".config");
    (i(
      `[runner:git] --use-anthropic-git-proxy: wiping HOME-level git config (${Re}, ${mn(me, "git")}, ${mn(t.baseDir, ".runner")}) for cross-session isolation. Operator-provisioned git config must live in system config (/etc/gitconfig) or via --configure-git; see the self-hosted runners guide.`,
    ),
      await nr(Re, { recursive: !0, force: !0 }),
      await nr(mn(Ar(), ".gitconfig"), { recursive: !0, force: !0 }),
      await nr(mn(me, "git"), { recursive: !0, force: !0 }),
      await nr(mn(t.baseDir, ".runner"), { recursive: !0, force: !0 }),
      await $r(ma(Re), { recursive: !0 }));
  }
  if (t.configureGit)
    try {
      let { configureGitForSigning: v } = await import("./GIT_PROXY_CRED_HELPER_CONTENT.pcspxqeg.js");
      await v({ baseDir: t.baseDir, execPath: process.execPath, onStatus: i });
    } catch (v) {
      (i(
        `[runner:fatal] --configure-git failed: ${l(v)}. Check git is on PATH and ~/.gitconfig is writable.`,
      ),
        await m(),
        process.exit(1));
    }
  if (t.pushOutcomeOnRelease)
    try {
      let { parseGitVersion: v } = await import("./GIT_PROXY_CRED_HELPER_CONTENT.pcspxqeg.js"),
        O = v(
          execFileSync("git", ["--version"], {
            encoding: "utf-8",
            cwd: void 0,
            windowsHide: !0,
            timeout: 5000,
            killSignal: "SIGKILL",
          }),
        );
      if (O !== null && (O[0] < 2 || (O[0] === 2 && O[1] < 29)))
        i(
          `[runner:warn] --push-outcome-on-release: git ${O[0]}.${O[1]} detected. The drain-push works on any version, but resuming from the preserved branch requires git >= 2.29 (--no-write-fetch-head). Upgrade git for full behavior.`,
        );
    } catch {}
  let wt, $e;
  if (t.configureGit) {
    let { coauthorHookStubs: v, codeSignArtifacts: O } =
      await import("./GIT_PROXY_CRED_HELPER_CONTENT.pcspxqeg.js");
    ((wt = v(t.baseDir)), ($e = O(t.baseDir, process.execPath)));
  }
  let Tt, jt;
  if (t.useAnthropicGitProxy)
    try {
      let {
        configureGitProxyCredential: v,
        GIT_PROXY_CRED_HELPER_CONTENT: O,
        gitProxyCredHelperPath: C,
      } = await import("./GIT_PROXY_CRED_HELPER_CONTENT.pcspxqeg.js");
      (await v({ baseDir: t.baseDir, apiBaseUrl: t.apiUrl, onStatus: i }),
        (Tt = await Ks(De, "utf-8").catch(() => "")),
        (jt = { path: C(t.baseDir), content: O }));
    } catch (v) {
      (i(
        `[runner:fatal] --use-anthropic-git-proxy failed: ${l(v)}. Check git is on PATH and ~/.gitconfig is writable.`,
      ),
        await m(),
        process.exit(1));
    }
  let Fe = {
      apiUrl: t.apiUrl,
      capacity: t.capacity,
      baseDir: t.baseDir,
      logLevel: t.logLevel,
      gitSshRewriteHosts: t.gitSshRewriteHosts,
      gitHostRewrites: t.gitHostRewrites,
      useAnthropicGitProxy: t.useAnthropicGitProxy ? t.apiUrl : void 0,
      gitProxyGlobalConfigPath: De,
      gitProxyGlobalConfigSnapshot: Tt,
      gitProxyCredHelper: jt,
      configureGitHookStubs: wt,
      configureGitSigningArtifacts: $e,
      configureGit: t.configureGit,
      pushOutcomeOnRelease: t.pushOutcomeOnRelease,
      trustWorkspace: t.trustWorkspace,
      confineRepoSettings: t.confineRepoSettings,
    },
    yt = {
      runnerId: de,
      activeSessions: 0,
      sessionsStarted: new Map([[T8, 0]]),
      sessionsCompleted: new Map([[T8, 0]]),
      sessionsFailed: new Map([[T8, 0]]),
      sessionsInterrupted: new Map([[T8, 0]]),
      sessionClientPlatform: new Map(),
      lastPollAt: 0,
      version: {
        ISSUES_EXPLAINER:
          "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.263",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-09-06T01:08:56Z",
        GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
        HOOKS_WORKER_URL:
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "darwin",
      }.VERSION,
      clientLabel: Ae,
      capacity: t.capacity,
      claimVisibility: new Map(),
      lockedAccountEmail: null,
      initializingSessions: 0,
      sessionInitErrors: 0,
      sessionInitDurations: _Nn(),
      sessionStartHookErrors: 0,
      pollErrors: fot(),
      sessionIdle: new Map(),
    };
  St.current = yt;
  let Te = t.healthPort > 0 ? bNn(t.healthPort, yt, i) : void 0,
    Et = await bs(i),
    Ke = await Ts(p);
  try {
    await Ma(
      {
        apiClient: ke,
        runnerId: de,
        tokenState: Wt,
        config: Fe,
        execPath: le,
        execArgs: we,
        onDebug: p,
        onStatus: i,
        flushLogSink: m,
        healthState: yt,
        hostConfigSnapshot: Et,
        governedGitConfigSeed: Ke,
        debugTokenDir: t.debugTokenDir,
        deferShutdown: {
          signal: pt.signal,
          maxMs: S,
          requestDrain: (v) => {
            if (qe !== "draining") zt(v, "loop");
          },
          onClosed: () => {
            Gt = !1;
          },
        },
      },
      lt.signal,
    );
  } finally {
    if ((We.cancelAll(), Te?.close(), fe))
      await uu(fe.close(), 2000, "[runner:exit] egress proxy close").catch(
        () => {},
      );
    (process.removeListener("SIGTERM", ht),
      process.removeListener("SIGINT", At),
      await m());
  }
}
function Js(e) {
  return e instanceof Error && "isAuthFailure" in e && e.isAuthFailure === !0;
}
async function Ma(e, t) {
  let {
      apiClient: n,
      runnerId: r,
      tokenState: s,
      config: d,
      execPath: o,
      execArgs: c,
      onDebug: m,
      onStatus: p,
      healthState: i,
    } = e,
    h = new Map(),
    L = Ye("SELF_HOSTED_RUNNER_SESSION_STOP_GRACE_MS") || Pn,
    S = Ye("SELF_HOSTED_RUNNER_POST_SESSION_HOOK_TIMEOUT_MS") || yn,
    w = Nr(),
    U,
    V = new Set(),
    ne = new Map(),
    ae = new Set(),
    te = 0,
    le = 0,
    we,
    H = new Set(),
    fe = new Map(),
    ke = 0,
    Ae = Date.now(),
    de = !1,
    Me = !0,
    lt = 0,
    pt = Date.now(),
    qe = !1,
    Gt = null,
    St = Ye("SELF_HOSTED_RUNNER_IDLE_SHUTDOWN_MS"),
    Ue = Ye("SELF_HOSTED_RUNNER_DRAIN_GRACE_MS"),
    Rt = Ye("SELF_HOSTED_RUNNER_SESSION_IDLE_MS"),
    zt = $s(),
    ht = e.retireAtMsOverride ?? Ea(),
    At = e.retireReleaseRetryMsOverride ?? Oa,
    Wt = e.retireDeferredGraceMsOverride ?? sr,
    We = !1,
    De,
    wt,
    $e = e.deferShutdown,
    Tt = $e !== void 0 && $e.maxMs > 0,
    jt = $e?.ceilingGraceMsOverride ?? Math.max(w, Wt),
    Fe =
      $e?.ceilingGraceMsOverride !== void 0
        ? Math.max(10, Math.floor($e.ceilingGraceMsOverride / 10))
        : 1000,
    yt = $e?.ceilingGraceMsOverride ?? ln,
    Te,
    Et,
    Ke = !1,
    v = () =>
      G(
        [...h.entries()],
        ([ie, ge]) => !ge.controller.signal.aborted && !F.has(ie),
      ),
    O = () =>
      G(
        [...h.entries()],
        ([ie, ge]) => !ge.controller.signal.aborted && F.has(ie) && !ye.has(ie),
      ),
    C = () =>
      wt === "shutdown"
        ? "[runner:exit] shutdown requested and every attached session has been released \u2014 exiting."
        : "[runner:exit] retire time passed and no active sessions \u2014 exiting before the host kills this runner.",
    F = new Set(),
    Re = new Map(),
    ye = new Map(),
    me = new Set(),
    ve = () => {
      let ie = h.size;
      for (let ge of ye.keys()) if (!h.has(ge)) ie++;
      for (let ge of me) if (!h.has(ge) && !ye.has(ge)) ie++;
      return ie;
    },
    It = new Set(),
    _n = 10,
    Ze = e.sseHintsEnabledOverride ?? Ie(process.env.CCR_SHR_SSE_HINTS),
    nt = new Or(),
    Ut = e.openWorkHintsStream ?? Fs,
    Ee = e.warmupReportEnabledOverride ?? !1,
    He = e.readWarmupComplete ?? Zr,
    rt = !1,
    bt;
  if (Ze)
    (m("[runner:hints] CCR_SHR_SSE_HINTS enabled \u2014 opening stream"),
      (bt = Ut({
        baseUrl: d.apiUrl,
        runnerId: r,
        tokenState: s,
        onWake: () => nt.wake("SSE"),
        onDebug: m,
        signal: t,
      })));
  let $t = () => {
      De = void 0;
      let ie = ht - Date.now();
      if (ie > 0) {
        De = setTimeout($t, Math.min(ie, 2147483647));
        return;
      }
      ((We = !0), (wt = "retire"));
      let ge = me.size;
      if (
        (me.clear(),
        logFeatureOk("self_hosted_retire"),
        p(
          `[runner:retire] retire time reached \u2014 releasing ${h.size} active session(s), refusing new work; exiting once the slots are empty`,
        ),
        ge > 0)
      )
        p(
          `[runner:retire] ${ge} declined session(s) held for re-spawn dropped at the retire deadline \u2014 requeued at exit instead`,
        );
      for (let ze of h.values()) ze.releaseForRetire();
      nt.wake("LOCAL");
    },
    Lt = () => {
      if (!Tt || $e === void 0) return;
      let ie =
        typeof $e.signal.reason === "number" ? $e.signal.reason : Date.now();
      if (Te === void 0) {
        let ge = ie + $e.maxMs - Date.now();
        Te = setTimeout(Zt, Math.min(Math.max(0, ge), 2147483647));
      }
      if ((logFeatureOk("self_hosted_defer_shutdown"), We)) {
        p(
          "[runner:shutdown] shutdown requested while already retiring \u2014 sessions are already being released",
        );
        return;
      }
      ((We = !0),
        (wt = "shutdown"),
        p(
          `[runner:shutdown] shutdown requested \u2014 deferring drain: ${h.size} active session(s), refusing new work; ` +
            (Rt > 0
              ? `each is released once its user has been idle ${formatDuration(Rt, { hideTrailingZeros: !0 })} (--release-idle-session-min) or when it ends`
              : "none is released early (--release-idle-session-min is not set)") +
            `; ${formatDuration($e.maxMs, { hideTrailingZeros: !0 })} after the signal every session still attached is released at once; exiting as soon as the slots are empty`,
        ),
        nt.wake("LOCAL"));
    },
    Zt = () => {
      if (((Te = void 0), $e === void 0 || t.aborted)) return;
      Ke = !0;
      let ie = me.size;
      if (ie > 0) (me.clear(), nt.wake("LOCAL"));
      let ge = v(),
        ze = () => {
          if (ie > 0)
            p(
              `[runner:shutdown] ${ie} declined session(s) held for re-spawn dropped at the ceiling \u2014 requeued at exit instead`,
            );
        };
      if (ge === 0 && O() === 0) {
        ze();
        return;
      }
      (logFeatureOk("self_hosted_defer_ceiling"),
        p(
          `[runner:shutdown] defer ceiling reached (${formatDuration($e.maxMs, { hideTrailingZeros: !0 })}) \u2014 ` +
            (ge > 0
              ? `releasing the remaining ${ge} session(s) now`
              : `waiting on ${O()} in-flight release(s)`) +
            `; any still attached after ${formatDuration(jt + yt, { hideTrailingZeros: !0 })} will be drained`,
        ),
        ze());
      for (let ut of h.values()) ut.releaseForShutdown();
      let st = yt,
        Pe = () => {
          if (((Et = void 0), t.aborted)) return;
          let ut = v(),
            it = O();
          if (ut === 0 && it === 0) return;
          if (st > 0) {
            ((st -= Fe), (Et = setTimeout(Pe, Fe)));
            return;
          }
          (p(
            `[runner:shutdown] ${ut + it} session(s) still attached after the post-ceiling grace \u2014 falling back to a drain`,
          ),
            $e.requestDrain(
              "post-ceiling grace expired with sessions still attached",
            ));
        };
      Et = setTimeout(Pe, jt);
    };
  if (ht > 0) {
    let ie = ht - Date.now();
    (p(
      ie > 0
        ? `[runner:retire] retire time set for ${new Date(ht).toISOString()} (in ${formatDuration(ie)}) \u2014 sessions will be released and the runner will exit then`
        : `[runner:retire] retire time ${new Date(ht).toISOString()} is already in the past \u2014 refusing work and exiting`,
    ),
      $t());
  }
  if (Tt && $e !== void 0)
    if ($e.signal.aborted) Lt();
    else $e.signal.addEventListener("abort", Lt, { once: !0 });
  try {
    while (!t.aborted) {
      if (We && ve() === 0) {
        p(C());
        return;
      }
      if (Ue === 0 && qe && ve() === 0) {
        p(
          "[runner:exit] account workload drained \u2014 exiting (grace=0, no re-poll). Orchestrator will restart.",
        );
        return;
      }
      let ie = We ? 0 : Math.max(0, d.capacity - ve()),
        ge = nt.consume();
      if (ge === "SSE") {
        if ((await Z(Math.floor(Math.random() * Us), t), t.aborted)) break;
      }
      let ze = Ae;
      if (Ee && !rt && !qe && ie > 0) {
        try {
          rt = await He();
        } catch {
          rt = !1;
        }
        if (rt)
          p(
            "[runner:poll] warm-up complete (first network prefetch succeeded) \u2014 reporting warmup_complete=true from this poll on",
          );
      }
      let st;
      try {
        let _ = await n.pollWork(
          s.runnerToken,
          r,
          ie,
          t,
          Ze ? Is[ge] : void 0,
          Ee ? rt : void 0,
        );
        ((st = _.assignment_ids), ne.clear());
        for (let q of _.session_assignments ?? []) {
          if (!q || typeof q.session_id !== "string" || !q.session_id) continue;
          if (
            typeof q.client_platform === "string" &&
            q.client_platform &&
            VYt.test(q.client_platform)
          )
            ne.set(q.session_id, q.client_platform);
          else if (
            typeof q.client_platform === "string" &&
            q.client_platform &&
            !ae.has(q.session_id)
          ) {
            if (ae.size > 256) ae.clear();
            (ae.add(q.session_id),
              m(
                `[runner:session] assignment client_platform rejected by the charset gate (label falls back to "unknown"): "${Xje(q.client_platform)}" (len=${q.client_platform.length}, session=${Xje(q.session_id)})`,
              ));
          }
        }
        if (
          ((we = _.lease_expires_at),
          (Ae = Date.now()),
          (te = 0),
          (le = 0),
          Me || de)
        )
          (logFeatureOk("self_hosted_poll"), (Me = !1), (de = !1));
        if (i) ((i.lastPollAt = Ae), (i.activeSessions = h.size));
      } catch (_) {
        if (t.aborted) break;
        let q = Kje(_);
        if (i) i.pollErrors[q]++;
        let re = _ instanceof Error ? _.message : String(_);
        if (Js(_)) {
          (logFeatureBad("self_hosted_poll", "self_hosted_poll_auth_failed"),
            p(
              "[runner:fatal] poll auth failed \u2014 token expired or revoked. Draining and exiting for clean restart.",
            ));
          break;
        }
        if (yr(_)) {
          if ((te++, te >= 3)) {
            (logFeatureBad("self_hosted_poll", "self_hosted_poll_runner_not_found"),
              p(
                `[runner:fatal] poll returned 404 ${te}\xD7 \u2014 runner record gone server-side. Draining and exiting for clean restart.`,
              ));
            break;
          }
          let ee = Math.min(ba, ka * 2 ** (te - 1)),
            E = Math.floor(Math.random() * ee);
          (p(
            `Poll failed: ${re} \u2014 confirming 404 (${te}/3), retrying in ${(E / 1000).toFixed(1)}s`,
          ),
            await Z(e.pollIntervalOverrideMs ?? E, t));
          continue;
        }
        if (((te = 0), Me || !de))
          (logFeatureSad("self_hosted_poll", "self_hosted_poll_failed"),
            (Me = !1),
            (de = !0));
        let x;
        if (q === "timeout" || q === "transport") (le++, (x = Ua(le, we)));
        else if (q === "5xx") x = Qs(In, we, ya);
        else x = In;
        (p(`Poll failed: ${re} \u2014 retrying in ${(x / 1000).toFixed(1)}s`),
          await Z(e.pollIntervalOverrideMs ?? x, t));
        continue;
      }
      let Pe = st.filter((_) => !V.has(_));
      if (Pe.length === 0 && ve() === 0) {
        Gt ??= Date.now();
        let _ = Date.now() - Gt;
        if (qe) {
          if (_ >= Ue) {
            p(
              We
                ? C()
                : Ue > 0
                  ? `[runner:exit] account workload drained ${Math.round(_ / 1000)}s ago (grace ${Math.round(Ue / 1000)}s) \u2014 exiting for fresh disk. Orchestrator will restart.`
                  : "[runner:exit] account workload drained \u2014 exiting for fresh disk. Orchestrator will restart.",
            );
            return;
          }
        } else if (St > 0 && _ >= St) {
          p(
            `[runner:exit] idle ${Math.round(_ / 60000)}min with no work \u2014 exiting for autoscaler scale-down`,
          );
          return;
        }
      } else Gt = null;
      if (Pe.length > 0) qe = !0;
      let it = new Set(st);
      for (let [_, q] of h)
        if (!it.has(_))
          (p(
            `[runner:session] ${_} deassigned by server (deleted/archived/requeued) \u2014 aborting child`,
          ),
            q.controller.abort(F.has(_) ? "idle-release" : "deassign"));
      for (let _ of F) if (!it.has(_)) F.delete(_);
      for (let _ of Re.keys()) if (!it.has(_)) Re.delete(_);
      for (let _ of me) if (!it.has(_) || V.has(_)) me.delete(_);
      for (let _ of Pe) {
        if (h.has(_)) {
          m(`[runner:main] Ignoring duplicate assignment for ${_}`);
          continue;
        }
        if (V.has(_)) {
          (me.delete(_),
            m(
              `[runner:main] Ignoring stuck session ${_} \u2014 already failed, not re-spawning`,
            ));
          continue;
        }
        if (H.has(_)) {
          m(
            `[runner:main] Ignoring session ${_} \u2014 failure report in-flight`,
          );
          continue;
        }
        if (F.has(_) || ye.has(_)) {
          m(
            `[runner:main] Ignoring released session ${_} \u2014 awaiting server deassign (or its in-flight release to settle)`,
          );
          continue;
        }
        let q = We && wt === "shutdown" && !Ke;
        if (We && !q) {
          let k =
            wt === "shutdown"
              ? `[runner:shutdown] not starting session ${_} \u2014 shutdown requested and the defer ceiling has passed; it will be requeued when this runner exits`
              : `[runner:retire] not starting session ${_} \u2014 retire time has passed; it will be requeued when this runner exits`;
          if (It.has(_)) m(k);
          else (It.add(_), p(k));
          me.delete(_);
          continue;
        }
        if (q)
          (p(
            me.has(_)
              ? `[runner:shutdown] ${_} re-spawning after its declined release to serve the pending user event; it is released again like the others (its idle clock, or the ceiling)`
              : `[runner:shutdown] ${_} was assigned after the shutdown signal \u2014 serving it; it is released like the others (its idle clock, or the ceiling)`,
          ),
            me.delete(_));
        (lt++,
          p(`Picked up session ${_} (${h.size + 1}/${d.capacity} active)`));
        let re = new AbortController(),
          x = _.replace(/^cse_/, "session_"),
          ee = ne.get(_) ?? T8;
        (i?.sessionIdle.set(x, null), i?.sessionClientPlatform.set(x, ee));
        let E = Date.now();
        i?.claimVisibility?.set(x, { pickedUpAt: E });
        let _e = h.size === 0 ? E - pt : void 0;
        if (i) {
          for (let k of [
            i.sessionsStarted,
            i.sessionsCompleted,
            i.sessionsFailed,
            i.sessionsInterrupted,
          ])
            if (!k.has(ee)) k.set(ee, 0);
        }
        let D,
          ue = !1,
          Se = !1,
          Je = (k) => {
            Se = k;
            let J = h.get(_);
            if (J !== void 0) J.turnInFlight = k;
            U?.();
          },
          K = !1,
          Ne,
          Le = !1,
          gt = "retire",
          Qe = () =>
            gt === "shutdown"
              ? "defer ceiling passed"
              : gt === "max-age"
                ? "max session age reached"
                : "retire time passed",
          ir = () =>
            gt === "shutdown"
              ? "while shutting down"
              : gt === "max-age"
                ? "while at max session age"
                : "while retiring",
          Qt = () =>
            gt === "shutdown"
              ? "shutdown grace"
              : gt === "max-age"
                ? "max-session-age grace"
                : "retire grace",
          fn = 0,
          en,
          Xt = () => {
            if (en !== void 0) (clearTimeout(en), (en = void 0));
          },
          tn = !1,
          Yt,
          vn = [1800000, 7200000, 28800000],
          pn = () => {
            if (Yt !== void 0) (clearTimeout(Yt), (Yt = void 0));
          },
          Ct = (k, J) => {
            let je = k?.liveTasks ?? 0,
              nn = (k?.liveTaskIds ?? []).slice(0, 5).join(","),
              et =
                k?.wakeupInMs !== void 0
                  ? `wakeup pending in ${formatDuration(k.wakeupInMs)}`
                  : void 0,
              Nt = k?.bgResultAwaitingFollowup
                ? "finished background task awaiting the follow-up turn"
                : void 0,
              mt = [
                je > 0
                  ? `${je} background task(s) live [${nn}${je > 5 ? ",\u2026" : ""}]`
                  : void 0,
                et,
                Nt,
              ].filter(Boolean),
              N = mt.length > 0 ? mt.join(" / ") : "planned resumption",
              I = J > 0 ? " still" : "";
            if (
              (p(
                `[runner:session] ${_} turn ended with ${N} \u2014 idle clock${I} deferred`,
              ),
              J < vn.length)
            )
              Yt = setTimeout(Ct, vn[J], k, J + 1);
          },
          at = (k, J) => {
            if (D !== void 0) (clearTimeout(D), (D = void 0));
            if (!ue && i)
              if (k === "turn-end" || (k === "awaiting-action" && !K)) {
                if (i.sessionIdle.get(x) === null)
                  i.sessionIdle.set(x, Date.now());
              } else i.sessionIdle.set(x, null);
            if (k === "init-observed") {
              if (Le && Ne !== void 0) at(Ne);
              return;
            }
            if (k === "activity") {
              (Je(!0),
                (K = !1),
                (Ne = void 0),
                (fn = 0),
                pn(),
                Xt(),
                Re.delete(_));
              return;
            }
            if (k === "turn-end-deferred") {
              if ((Je(!1), (K = !0), (Ne = void 0), pn(), Rt > 0)) Ct(J, 0);
              if (Le) be();
              return;
            }
            if (k === "awaiting-action" && K) {
              Ne = void 0;
              return;
            }
            (pn(), Xt(), Je(!1), (K = !1), (Ne = k));
            let je = Le ? (fn === 0 ? 0 : At) : k === "startup" ? zt : Rt,
              nn = Le ? At : je,
              et = () =>
                Le ? (fn === 0 ? "now" : `in ${formatDuration(At)}`) : `in ${formatDuration(nn)}`,
              Nt = Le
                ? Qe()
                : k === "startup"
                  ? `no child output for ${formatDuration(je)}`
                  : k === "awaiting-action"
                    ? `awaiting user action ${formatDuration(je)}`
                    : `user idle ${formatDuration(je)}`;
            if (!Le && je <= 0) return;
            if (ue || re.signal.aborted || tn) return;
            if (
              k === "awaiting-action" &&
              J !== void 0 &&
              (J.liveTasks > 0 ||
                J.wakeupInMs !== void 0 ||
                J.bgResultAwaitingFollowup === !0)
            ) {
              let mt = J.liveTaskIds.slice(0, 5).join(","),
                N = [
                  J.liveTasks > 0
                    ? `${J.liveTasks} background task(s) live [${mt}${J.liveTasks > 5 ? ",\u2026" : ""}]`
                    : void 0,
                  J.wakeupInMs !== void 0
                    ? `wakeup pending in ${formatDuration(J.wakeupInMs)}`
                    : void 0,
                  J.bgResultAwaitingFollowup === !0
                    ? "finished background task awaiting the follow-up turn"
                    : void 0,
                ].filter(Boolean);
              p(
                `[runner:session] ${_} awaiting user action overrides deferral (${N.join(" / ")}) \u2014 idle clock armed`,
              );
            }
            if (!Le)
              p(
                `[runner:session] ${_} idle clock armed (${k}): releases in ${formatDuration(je, { hideTrailingZeros: !0 })} at ${new Date(Date.now() + je).toISOString()} unless new activity arrives`,
              );
            D = setTimeout(() => {
              if (((D = void 0), ue || re.signal.aborted || tn)) return;
              if (F.has(_)) return;
              if (Se) {
                p(
                  `[runner:session] ${_} idle timer fired mid-turn \u2014 skipping release (stdout-tee likely broken)`,
                );
                return;
              }
              if (Le) fn++;
              if (
                (p(`[runner:session] ${_} ${Nt} \u2014 releasing`),
                F.add(_),
                k !== "awaiting-action")
              ) {
                let mt = h.get(_)?.liveBgTasks ?? 0,
                  I = (h.get(_)?.task ?? Promise.resolve())
                    .then(() => n.releaseSession(s.runnerToken, _))
                    .then(({ released: Q }) => {
                      if ((ye.delete(_), F.delete(_), Re.delete(_), We))
                        nt.wake("LOCAL");
                      if (Q) {
                        if (
                          (p(
                            `[runner:session] ${_} released after post-session hook \u2014 parked server-side`,
                          ),
                          Se || K || mt > 0)
                        )
                          logFeatureSad(
                            "self_hosted_release_session",
                            "released_true_mid_work",
                          );
                        else logFeatureOk("self_hosted_release_session");
                        return;
                      }
                      if (wt === "shutdown") {
                        let ce = !Ke;
                        if (ce) me.add(_);
                        (p(
                          ce
                            ? `[runner:session] ${_} released=false after post-session hook (pending user event) while shutting down \u2014 the next poll re-spawns it to serve that event (its --release-idle-session-min window, if set, starts over; otherwise it stays until the ceiling)`
                            : `[runner:session] ${_} released=false after post-session hook (pending user event) after the defer ceiling \u2014 not re-spawned; it is requeued, snapshot complete, when this runner exits`,
                        ),
                          logFeatureSad(
                            "self_hosted_release_session",
                            "released_false_shutting_down",
                          ));
                        return;
                      }
                      let se = Le && gt === "max-age";
                      (p(
                        We
                          ? `[runner:session] ${_} released=false after post-session hook (pending user event) while retiring \u2014 not re-spawned; it is requeued, snapshot complete, when this runner exits`
                          : `[runner:session] ${_} released=false after post-session hook (pending user event)${se ? " at max session age" : ""} \u2014 respawns on the next poll, or is requeued by this runner's exit if it is draining (grace=0) or retiring`,
                      ),
                        logFeatureSad(
                          "self_hosted_release_session",
                          We
                            ? "released_false_retiring"
                            : se
                              ? "released_false_max_age"
                              : "released_false",
                        ));
                    })
                    .catch((Q) => {
                      if ((ye.delete(_), F.delete(_), wt === "shutdown" && !Ke))
                        me.add(_);
                      if (We) nt.wake("LOCAL");
                      let se = Q instanceof Error ? Q.message : String(Q);
                      (p(
                        `[runner:session] ${_} ordered release failed after the post-session hook: ${se} \u2014 keeping session; respawns on the next poll, or is requeued by this runner's exit if it is draining (grace=0) or retiring`,
                      ),
                        logFeatureBad("self_hosted_release_session", "rpc_failed"));
                    });
                (ye.set(_, I), re.abort("idle-release"));
                return;
              }
              n.releaseSession(s.runnerToken, _)
                .then(({ released: mt }) => {
                  if (mt) {
                    if (ue || re.signal.aborted) return;
                    (Re.delete(_),
                      p(
                        `[runner:session] ${_} released \u2014 aborting child`,
                      ));
                    let I = h.get(_)?.liveBgTasks ?? 0;
                    if ((re.abort("idle-release"), Se || K || I > 0))
                      logFeatureSad(
                        "self_hosted_release_session",
                        "released_true_mid_work",
                      );
                    else logFeatureOk("self_hosted_release_session");
                    return;
                  }
                  if (ue || re.signal.aborted) return;
                  if ((F.delete(_), Le)) {
                    if (
                      (p(
                        `[runner:session] ${_} release declined (${k === "awaiting-action" ? "queued event behind the parked prompt" : "pending user event"}) ${ir()} \u2014 keeping session${Se || K ? "" : `, retrying ${et()}`}`,
                      ),
                      logFeatureSad(
                        "self_hosted_release_session",
                        gt === "shutdown"
                          ? k === "awaiting-action"
                            ? "released_false_shutting_down_parked"
                            : "released_false_shutting_down"
                          : gt === "max-age"
                            ? k === "awaiting-action"
                              ? "released_false_max_age_parked"
                              : "released_false_max_age"
                            : k === "awaiting-action"
                              ? "released_false_retiring_parked"
                              : "released_false_retiring",
                      ),
                      !Se && !K)
                    )
                      at?.(k);
                    return;
                  }
                  if (k === "awaiting-action") {
                    if (
                      (p(
                        `[runner:session] ${_} released=false while parked at prompt (queued event behind prompt) \u2014 keeping session${Se || K ? "" : ", re-arming"}`,
                      ),
                      logFeatureSad("self_hosted_release_session", "released_false_parked"),
                      !Se && !K)
                    )
                      at?.(k);
                    return;
                  }
                  let N = (Re.get(_) ?? 0) + 1;
                  if ((Re.set(_, N), N >= 3)) {
                    (Re.delete(_),
                      p(
                        `[runner:session] ${_} released=false ${N}x \u2014 aborting as backstop`,
                      ),
                      re.abort(),
                      logFeatureBad(
                        "self_hosted_release_session",
                        "released_false_backstop",
                      ));
                    return;
                  }
                  if (
                    (p(
                      `[runner:session] ${_} released=false (pending user event) \u2014 keeping session${Se || K ? "" : ", re-arming"}`,
                    ),
                    logFeatureSad("self_hosted_release_session", "released_false"),
                    !Se && !K)
                  )
                    at?.(k);
                })
                .catch((mt) => {
                  F.delete(_);
                  let N = mt instanceof Error ? mt.message : String(mt);
                  if (
                    (p(
                      `[runner:session] ${_} releaseSession failed: ${N} \u2014 keeping session${Se || K ? "" : `, retrying ${et()}`}`,
                    ),
                    logFeatureBad("self_hosted_release_session", "rpc_failed"),
                    !Se && !K)
                  )
                    at?.(k);
                });
            }, je);
          },
          be = () => {
            if (ue || re.signal.aborted || tn || !K) return;
            let k = h.get(_)?.liveBgTasks ?? 0;
            if (k === 0 && h.get(_)?.bgResultPendingFollowup === !0) {
              p(
                `[runner:session] ${_} ${Qe()} while a finished background task's follow-up turn is pending \u2014 waiting for it before releasing`,
              );
              return;
            }
            if (k === 0) {
              (p(
                `[runner:session] ${_} ${Qe()} with only perpetual monitor task(s) / a scheduled wakeup holding the turn \u2014 releasing now`,
              ),
                (K = !1),
                Xt(),
                at("turn-end"));
              return;
            }
            if (en !== void 0) return;
            (p(
              `[runner:session] ${_} ${Qe()} with ${k} background task(s) live \u2014 allowing ${formatDuration(Wt)} to finish before releasing`,
            ),
              (en = setTimeout(() => {
                if (((en = void 0), ue || re.signal.aborted || tn || !K))
                  return;
                let J = h.get(_)?.liveBgTasks ?? 0,
                  je = h.get(_)?.bgResultPendingFollowup === !0;
                if (J === 0 && je) {
                  p(
                    `[runner:session] ${_} ${Qt()} elapsed but a finished background task's follow-up turn is pending \u2014 waiting for it before releasing`,
                  );
                  return;
                }
                (p(
                  J === 0
                    ? `[runner:session] ${_} background work finished during the ${Qt()}; only perpetual monitor task(s) / a scheduled wakeup still hold the turn \u2014 releasing now`
                    : `[runner:session] ${_} ${J} background task(s) still live after the ${Qt()} \u2014 releasing anyway (a parked session beats a lost worker)`,
                ),
                  (K = !1),
                  at("turn-end"));
              }, Wt)));
          },
          Vt = (k) => {
            if (ue || re.signal.aborted) return;
            if (tn) {
              m(
                `[runner:session] ${_} ${k} release request while the child is being terminated \u2014 ignored`,
              );
              return;
            }
            if (Le) {
              m(
                `[runner:session] ${_} ${k} release request adds nothing to the standing ${gt} request \u2014 ignored`,
              );
              return;
            }
            if (((Le = !0), (gt = k), Ne === void 0)) {
              if (K && !Se) {
                be();
                return;
              }
              let J = Se
                ? "mid-turn \u2014 releasing as soon as the current turn finishes"
                : "before the child reported an idle state \u2014 releasing on its first idle transition";
              p(`[runner:session] ${_} ${Qe()} ${J}`);
              return;
            }
            (p(`[runner:session] ${_} ${Qe()} while idle \u2014 releasing now`),
              at(Ne));
          },
          Sn = () => Vt("retire"),
          wn = () => Vt("shutdown"),
          Un = () => {
            if (ue || re.signal.aborted) return "kill";
            let k = Ne !== void 0 || (K && !Se) ? "release" : "wait";
            return (
              logFeatureOk("self_hosted_max_lifetime", { decision: fromEnum(k) }),
              Vt("max-age"),
              k
            );
          },
          Fn = () => {
            if (tn) return;
            tn = !0;
            let k = D !== void 0 || en !== void 0;
            if (D !== void 0) (clearTimeout(D), (D = void 0));
            if ((Xt(), k || Le))
              m(
                `[runner:session] ${_} child is being terminated \u2014 release clock stood down`,
              );
          },
          an = (e.handleSession ?? Os)(
            _,
            {
              apiClient: n,
              getRunnerToken: () => s.runnerToken,
              baseDir: d.baseDir,
              execPath: o,
              execArgs: c,
              capacity: d.capacity,
              healthPort: i?.listeningOn,
              gitSshRewriteHosts: d.gitSshRewriteHosts,
              gitHostRewrites: d.gitHostRewrites,
              useAnthropicGitProxy: d.useAnthropicGitProxy,
              gitProxyGlobalConfigPath: d.gitProxyGlobalConfigPath,
              gitProxyGlobalConfigSnapshot: d.gitProxyGlobalConfigSnapshot,
              gitProxyCredHelper: d.gitProxyCredHelper,
              configureGitHookStubs: d.configureGitHookStubs,
              configureGitSigningArtifacts: d.configureGitSigningArtifacts,
              hostConfigSnapshot: e.hostConfigSnapshot,
              governedGitConfigSeed: e.governedGitConfigSeed,
              onDebug: m,
              onStatus: p,
              onSessionActivity: at,
              onMaxLifetime: Un,
              onChildTerminating: Fn,
              clientPlatform: ee,
              onChildLifecycle: i
                ? (k) => {
                    let J =
                      k === "spawned"
                        ? i.sessionsStarted
                        : k === "completed"
                          ? i.sessionsCompleted
                          : k === "failed"
                            ? i.sessionsFailed
                            : i.sessionsInterrupted;
                    J.set(ee, (J.get(ee) ?? 0) + 1);
                  }
                : void 0,
              onInitPhase: i
                ? (k) => {
                    switch (k.kind) {
                      case "start":
                        i.initializingSessions++;
                        break;
                      case "end":
                        (i.initializingSessions--,
                          yNn(i.sessionInitDurations, k.durationSec));
                        break;
                      case "exit-before-init":
                        if ((i.initializingSessions--, k.failed))
                          i.sessionInitErrors++;
                        break;
                      default:
                    }
                  }
                : void 0,
              onSessionStartHookError: i
                ? () => {
                    i.sessionStartHookErrors++;
                  }
                : void 0,
              standbyIdleMs: _e,
              getHealthzClaimVisibleMs: () =>
                i?.claimVisibility?.get(x)?.visibleMs,
              onSessionTokenIssued: (k) => {
                if (i && i.lockedAccountEmail === null) {
                  let J = Kn(k);
                  if (J !== null) i.lockedAccountEmail = J;
                }
              },
              canonicalLocks: fe,
              postSessionHookTimeoutMs: S,
              pushOutcomeOnRelease: d.pushOutcomeOnRelease,
              trustWorkspace: d.trustWorkspace,
              confineRepoSettings: d.confineRepoSettings,
              onBgTaskLedger: (k) => {
                let J = h.get(_);
                if (J) J.liveBgTasks = k;
                U?.();
              },
              onBgFollowupPending: (k, J) => {
                let je = h.get(_);
                if (je) je.bgResultPendingFollowup = k;
                if ((U?.(), !k && !J && Le && K)) be();
              },
              debugTokenDir: e.debugTokenDir,
            },
            re.signal,
          )
            .then(
              ({
                result: k,
                failureReason: J,
                setupFailureKind: je,
                failureKind: nn,
              }) => {
                if (J) p(`Session ${_} finished: ${k} \u2014 reason: ${J}`);
                else p(`Session ${_} finished: ${k}`);
                if (
                  k === "failed" ||
                  (k === "interrupted" && !re.signal.aborted)
                )
                  (H.add(_),
                    n
                      .reportSessionFailure(
                        s.runnerToken,
                        _,
                        J ?? "failed (no reason captured)",
                        je,
                        nn,
                      )
                      .then((Nt) => {
                        if (
                          (p(
                            `[runner:session] ${_} failure reported \xB7 excluded_count=${Nt.excluded_count} stuck=${Nt.stuck}`,
                          ),
                          Nt.stuck)
                        )
                          (V.add(_),
                            p(
                              `[runner:session] ${_} marked stuck \u2014 will not re-spawn on future polls`,
                            ));
                        logFeatureOk("self_hosted_failure_report");
                      })
                      .catch((Nt) => {
                        let mt = Nt instanceof Error ? Nt.message : String(Nt);
                        (p(
                          `[runner:session] ${_} reportSessionFailure failed: ${mt} \u2014 marking stuck to bound respawn`,
                        ),
                          V.add(_),
                          logFeatureSad("self_hosted_failure_report", "rpc_failed"));
                      })
                      .finally(() => {
                        H.delete(_);
                      }));
              },
            )
            .catch((k) => {
              let J = k instanceof Error ? k.message : String(k);
              p(`Session ${_} handler threw: ${J}`);
            })
            .finally(() => {
              if (((ue = !0), D !== void 0)) (clearTimeout(D), (D = void 0));
              if ((pn(), Xt(), !ye.has(_))) F.delete(_);
              if ((Re.delete(_), i))
                (i.sessionIdle.delete(x),
                  i.sessionClientPlatform.delete(x),
                  i.claimVisibility?.delete(x),
                  SNn(i, x));
              let k = h.size >= d.capacity;
              if ((h.delete(_), U?.(), i)) i.activeSessions = h.size;
              if (h.size === 0) {
                if (((pt = Date.now()), We)) nt.wake("LOCAL");
              }
              if (Ze && k) nt.wake("LOCAL");
            });
        if (
          (h.set(_, {
            task: an,
            controller: re,
            liveBgTasks: 0,
            bgResultPendingFollowup: !1,
            turnInFlight: !1,
            releaseForRetire: Sn,
            releaseForShutdown: wn,
          }),
          i)
        )
          i.activeSessions = h.size;
      }
      let Jt = e.pollIntervalOverrideMs ?? Ia(we);
      if ((ke++, ke % _n === 0)) {
        let _ = h.size,
          q = hr(s.runnerToken),
          re = Date.now(),
          x = re - ze,
          ee = q !== null ? q * 1000 - re : null,
          E =
            ee !== null
              ? `${ee < 0 ? "-" : ""}${formatDuration(Math.abs(ee), { mostSignificantOnly: !0 })}`
              : "unknown",
          _e = i?.lockedAccountEmail ?? (qe ? "yes" : "no");
        p(
          `[runner:health] polling ok \xB7 ${_}/${d.capacity} slots \xB7 last_poll=${x}ms ago \xB7 locked_account=${_e} \xB7 runner_token expires in ${E} \xB7 ${lt} sessions handled`,
        );
      }
      if (Ze) nt.atCapacity = We || h.size >= d.capacity;
      await nt.wait(Jt, t);
    }
  } finally {
    if (De !== void 0) (clearTimeout(De), (De = void 0));
    if (Te !== void 0) (clearTimeout(Te), (Te = void 0));
    if (Et !== void 0) (clearTimeout(Et), (Et = void 0));
    ($e?.signal.removeEventListener("abort", Lt),
      $e?.onClosed?.(),
      bt?.close());
    let ie =
        e.drainTimeoutMs ?? Tr(L, S, 0, d.pushOutcomeOnRelease ? Tn : 0) * 1000,
      ge = !1,
      ze = setInterval(() => {
        if (ge) return;
        ((ge = !0),
          n
            .pollWork(s.runnerToken, r, 0)
            .then(() => {
              if (i) i.lastPollAt = Date.now();
            })
            .catch((Pe) => {
              if (i) i.pollErrors[Kje(Pe)]++;
              m(
                `[runner] shutdown: lease heartbeat failed (best-effort): ${Pe}`,
              );
            })
            .finally(() => {
              ge = !1;
            }));
      }, e.shutdownLeaseHeartbeatMs ?? wa);
    try {
      if (w > 0 && t.aborted) {
        let Pe = () => [...h.values()].reduce((q, re) => q + re.liveBgTasks, 0),
          ut = () =>
            [...h.values()].reduce((q, re) => q + (re.turnInFlight ? 1 : 0), 0),
          it = () =>
            [...h.values()].reduce(
              (q, re) => q + (re.bgResultPendingFollowup ? 1 : 0),
              0,
            ),
          Jt = () =>
            it() > 0
              ? `, ${it()} finished background task(s) awaiting the follow-up turn`
              : "",
          _ = () => Pe() > 0 || ut() > 0 || it() > 0;
        if (_())
          (p(
            `[runner] drain-wait: ${ut()} turn(s) in flight, ${Pe()} background task(s) live${Jt()} across ${h.size} session(s) \u2014 waiting up to ` +
              `${w / 1000}s before stopping session(s)`,
          ),
            await new Promise((q) => {
              let re = () => {
                  ((U = void 0), q());
                },
                x = setTimeout(re, w);
              U = () => {
                if (!_()) (clearTimeout(x), re());
              };
            }),
            p(
              !_()
                ? "[runner] drain-wait: in-flight work finished \u2014 stopping session(s)"
                : `[runner] drain-wait: timed out with ${ut()} turn(s) in flight, ${Pe()} task(s) still live${Jt()} \u2014 stopping session(s)`,
            ));
      }
      for (let { controller: Pe } of h.values()) Pe.abort();
      if (h.size > 0) {
        p(`Draining ${h.size} active session(s)...`);
        try {
          (await uu(
            Promise.allSettled([...h.values()].map((Pe) => Pe.task)),
            ie,
            "[runner:stuck] drain",
          ),
            p("Drain complete"),
            logFeatureOk("self_hosted_drain"));
        } catch {
          (logFeatureBad("self_hosted_drain", "shutdown_budget_exceeded"),
            p(
              `[runner] shutdown exceeded ${ie}ms (session-stop-grace + post-session-hook-timeout` +
                (d.pushOutcomeOnRelease ? " + push-on-release window" : "") +
                ` + ${ln / 1000}s); force-exiting. The post-session hook had its full budget; post-hook cleanup may have been cut short. ${h.size} session(s) still active.`,
            ),
            await e.flushLogSink?.(),
            process.exit(1));
        }
      }
      if (ye.size > 0)
        (p(
          `[runner] shutdown: waiting for ${ye.size} in-flight session release(s) to settle before deregistering`,
        ),
          await uu(
            Promise.allSettled([...ye.values()]),
            Cr,
            "[runner:exit] release settle",
          ).catch(() => {
            p(
              `[runner] shutdown: ${ye.size} session release(s) did not settle within ${Cr / 1000}s \u2014 deregistering anyway (those sessions are requeued rather than parked)`,
            );
          }));
    } finally {
      clearInterval(ze);
    }
    let st = !1;
    await uu(
      n
        .deregisterRunner(s.runnerToken)
        .then(() => {
          if ((p("[runner:exit] Deregistered \u2014 sessions requeued"), !st))
            ((st = !0), logFeatureOk("self_hosted_deregister"));
        })
        .catch((Pe) => {
          if (
            (m(`[runner:exit] deregisterRunner failed (best-effort): ${Pe}`),
            !st)
          )
            ((st = !0), logFeatureSad("self_hosted_deregister", "rpc_failed"));
        }),
      5000,
      "[runner:exit] deregister",
    ).catch(() => {
      if (
        (m(
          "[runner:exit] deregisterRunner timed out (best-effort) \u2014 lease expiry will requeue",
        ),
        !st)
      )
        ((st = !0), logFeatureSad("self_hosted_deregister", "timeout"));
    });
  }
}
function Ia(e) {
  if (!e) return In;
  let t = Date.parse(e);
  if (Number.isNaN(t)) return In;
  let n = t - Date.now();
  if (n <= 0) return Hs;
  let r = Math.floor(n / 3);
  return Math.max(Hs, Math.min(Sa, r));
}
function Ua(e, t) {
  let n = Math.min(Ra, Gs * 2 ** Math.max(0, e - 1)),
    r = Math.floor(n / 2 + Math.random() * (n / 2));
  return Qs(r, t, Gs);
}
function Qs(e, t, n) {
  let r = t === void 0 ? NaN : Date.parse(t) - Date.now();
  if (!(r > 0)) return e;
  return Math.min(e, Math.max(n, r - Ta));
}
async function Ws(e, t, n, r) {
  try {
    (await $r(e, { recursive: !0, mode: 448 }),
      await ha(`${e}/${t}`, n, { mode: 384 }));
  } catch (s) {
    r(`[runner:debug] failed to write ${t} to ${e} (best-effort): ${s}`);
  }
}
export { selfHostedRunnerMain };

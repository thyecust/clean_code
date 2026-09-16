// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { qU, mf } from "../权限系统/chunk-e4pfvp7x.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import { Vu } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5ss8pwgq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bfth4n1b.js";
import "../认证-OAuth登录/chunk-s51acx6w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "./chunk-ct52ffwb.js";
import { D9e, L9e } from "../认证-OAuth登录/chunk-n76cf9e6.js";
import { Qre } from "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import { Zye, eSe, tSe, J0e } from "../权限系统/chunk-3kjwvb3e.js";
import { Jae } from "../../01-核心基础设施/设置-配置/chunk-bmk73cc4.js";
import { tF } from "../后台任务-Shell管理/chunk-jfk5mpe1.js";
import { Vb } from "../../01-核心基础设施/共享小工具-未细化/chunk-d3d1v4d6.js";
import { If } from "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cyyrj58q.js";
import "./chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { basename as y, resolve as h } from "path";
function u(e) {
  process.stdout.write(
    e +
      `
`,
  );
}
function A(e) {
  process.stderr.write(
    e +
      `
`,
  );
}
function c(e) {
  (A(e), process.exit(1));
}
function I(e, i) {
  let o,
    r = new Map(),
    a = !1,
    n = -1;
  for (let s = 0; s < i.length; s++) {
    let d = i[s];
    if (!d.startsWith("-")) {
      n = s;
      break;
    }
    if (d !== "--json" && d.startsWith("--") && !d.includes("=")) s++;
  }
  let t = n === -1 ? void 0 : i[n],
    l;
  if (t === void 0 || t === "list") l = "list";
  else if (t === "add" || t === "remove") l = t;
  else
    c(
      `unknown action '${t}' \u2014 expected: claude daemon ${e} <add|remove|list>`,
    );
  let f = n === -1 ? i : [...i.slice(0, n), ...i.slice(n + 1)];
  for (let s = 0; s < f.length; s++) {
    let d = f[s];
    if (d === "--json") a = !0;
    else if (d.startsWith("--")) {
      let m = d.indexOf("="),
        p = m !== -1 ? d.slice(2, m) : d.slice(2);
      if (p === "add" || p === "remove")
        c(
          `'${d}' is no longer supported \u2014 use: claude daemon ${e} <add|remove|list>`,
        );
      r.set(p, m !== -1 ? d.slice(m + 1) : (f[++s] ?? ""));
    } else if (l === "remove" && o === void 0) o = d;
    else
      c(
        `unknown option '${d}' \u2014 expected: claude daemon ${e} <add|remove|list>`,
      );
  }
  return { action: l, removeTarget: o, flags: r, json: a };
}
async function k() {
  if (!(await tF()))
    c(
      "daemon service is not installed (service install is disabled in this version; the daemon runs on demand)",
    );
}
async function T(e, i) {
  let o = await Jae(e, i);
  if (!o.ok) c(o.error);
  return o.config;
}
async function B(e, i) {
  let o = await T(e, i),
    r = [],
    a = o.remoteControl ?? [];
  for (let t of a)
    r.push({
      kind: "remote-control",
      dir: t.dir,
      name: t.name ?? y(t.dir),
      spawnMode: t.spawnMode ?? "same-dir",
    });
  let n = await J0e(e, i);
  for (let t of n)
    r.push({
      kind: "scheduled",
      id: t.id,
      dir: t.directory,
      enabled: t.enabled,
      cron: t.cron,
    });
  return r;
}
function D(e) {
  if (e.length === 0) {
    u("(no entries)");
    return;
  }
  let i = ["kind", "name/id", "dir", "extra"],
    o = e.map((n) => [
      n.kind,
      n.id ?? n.name ?? "",
      n.dir,
      n.kind === "scheduled"
        ? `${n.cron ?? ""}${n.enabled === !1 ? " (disabled)" : ""}`
        : n.kind === "remote-control"
          ? (n.spawnMode ?? "")
          : "",
    ]),
    r = i.map((n, t) => Math.max(n.length, ...o.map((l) => l[t].length))),
    a = (n) => n.map((t, l) => t.padEnd(r[l])).join("  ");
  (u(a(i)), u(r.map((n) => "-".repeat(n)).join("  ")));
  for (let n of o) u(a(n));
}
async function K(e, i, o) {
  if (e.action === "list") {
    let g = await J0e(i, o);
    if (e.json) {
      u(b(g, null, 2));
      return;
    }
    let w = g.map((v) => ({
      kind: "scheduled",
      id: v.id,
      dir: v.directory,
      enabled: v.enabled,
      cron: v.cron,
    }));
    D(w);
    return;
  }
  if (e.action === "remove") {
    if (!e.removeTarget) c("usage: claude daemon scheduled remove <task-id>");
    if ((await k(), !(await tSe(e.removeTarget, i, o))))
      c(`No scheduled task with id "${e.removeTarget}"`);
    u(`removed ${e.removeTarget}`);
    return;
  }
  if ((await k(), e.flags.has("id") && !e.flags.get("id")))
    c("--id requires a non-empty value");
  if (e.flags.has("model") && !e.flags.get("model"))
    c("--model requires a non-empty value");
  function r(g) {
    return Zye.includes(g);
  }
  let a = mf(e.flags.get("permission-mode"));
  if (e.flags.has("permission-mode") && !r(a ?? "")) {
    let g = Zye.map((w) => (w === "default" ? qU : w));
    c(`--permission-mode must be one of ${g.join(", ")}`);
  }
  let n = e.flags.get("prompt"),
    t = e.flags.get("id"),
    l = e.flags.get("dir"),
    f = h(l ?? Q());
  if (!t && !n)
    c("--prompt is required (or pass --id to update an existing task)");
  let s = t ?? O(f, n),
    m = (await J0e(i, o)).find((g) => g.id === s),
    p = n ?? m?.prompt,
    S = e.flags.get("cron") ?? m?.cron;
  if (!p) c("--prompt is required");
  if (!S) c("--cron is required");
  let M = Qre(S);
  if (M.error !== void 0) c(`invalid --cron '${S}': ${M.error}`);
  let F = M.cron,
    C = l ? h(l) : (m?.directory ?? h(Q())),
    E = a ?? mf(m?.permissionMode) ?? "dontAsk",
    x = e.flags.get("model") ?? m?.model ?? void 0,
    { isPathTrusted: P } = await import("../../01-核心基础设施/设置-配置/getCurrentProjectConfig.s8843fs9.js");
  if (!P(C))
    c(
      `${C} is not a trusted directory \u2014 run \`claude\` there once and accept the trust dialog.`,
    );
  let R = {
    ...(m && {
      enabled: m.enabled,
      runTimeoutMinutes: m.runTimeoutMinutes,
      maxQueued: m.maxQueued,
    }),
    id: s,
    cron: F,
    prompt: p,
    directory: C,
    permissionMode: E,
    ...(x && { model: x }),
  };
  if ((await eSe(R, i, o), m)) u(`updated scheduled task '${s}'`);
  else u(`added scheduled task '${s}'`);
}
function O(e, i) {
  let o = (t) =>
      t
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 40),
    r = o(y(e)),
    a = o(i.split(/\s+/).slice(0, 4).join(" "));
  return [r, a].filter(Boolean).join("-") || "task";
}
async function j(e, i, o) {
  if (e.action === "list") {
    let s = (await T(i, o)).remoteControl ?? [];
    if (e.json) {
      u(b(s, null, 2));
      return;
    }
    D(
      s.map((d) => ({
        kind: "remote-control",
        dir: d.dir,
        name: d.name ?? y(d.dir),
        spawnMode: d.spawnMode ?? "same-dir",
      })),
    );
    return;
  }
  if (e.action === "remove") {
    if (!e.removeTarget)
      c("usage: claude daemon remote-control remove <name-or-dir>");
    await k();
    let f = await q(e.removeTarget, i, o);
    (await L9e(f, i, o), u(`removed ${f}`));
    return;
  }
  await k();
  let r = await Vu(h(e.flags.get("dir") ?? Q()), If(o)),
    { isPathTrusted: a } = await import("../../01-核心基础设施/设置-配置/getCurrentProjectConfig.s8843fs9.js");
  if (!a(r))
    c(
      `${r} is not a trusted directory \u2014 run \`claude\` there once and accept the trust dialog.`,
    );
  let n = e.flags.get("name"),
    t = e.flags.get("spawn-mode");
  if (t !== void 0 && t !== "same-dir" && t !== "worktree")
    c(`--spawn-mode must be same-dir or worktree, got '${t}'`);
  let l = await D9e({ dir: r, name: n, spawnMode: t }, i, o);
  u(`${l} remote-control server for ${r}`);
}
async function q(e, i, o) {
  let a = (await T(i, o)).remoteControl ?? [],
    n = a.filter((s) => (s.name ?? y(s.dir)) === e);
  if (n.length === 1) return n[0].dir;
  if (n.length > 1)
    c(
      `ambiguous: multiple remote-control servers match name '${e}'. Use a dir instead.`,
    );
  let t = If(o),
    l = await Vu(h(e), t),
    f = [];
  for (let s of a) if ((await Vu(s.dir, t)) === l) f.push(s);
  if (f.length >= 1) return f[0].dir;
  c(`no remote-control server matched '${e}'`);
}
async function V(e, i = Vb(), o) {
  let r = await B(i, o);
  if (e) {
    u(b(r, null, 2));
    return;
  }
  D(r);
}
async function ee(e, i, o = Vb(), r) {
  let a = I(e, i);
  if (e === "scheduled") return K(a, o, r);
  return j(a, o, r);
}
export { ee as handleCliKind, V as handleListAllKinds };

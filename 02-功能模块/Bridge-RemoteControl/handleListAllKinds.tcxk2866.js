// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 84 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { PERMISSION_MODE_MANUAL_ALIAS as qU, normalizePermissionModeAlias as mf } from "../权限系统/chunk-e4pfvp7x.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { b } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { canonicalizePath as Vu } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { D9e, L9e } from "../认证-OAuth登录/chunk-n76cf9e6.js";
import { Qre } from "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import { Zye, eSe, tSe, J0e } from "../权限系统/chunk-3kjwvb3e.js";
import { Jae } from "../../01-核心基础设施/设置-配置/chunk-bmk73cc4.js";
import { tF } from "../后台任务-Shell管理/chunk-jfk5mpe1.js";
import { Vb } from "../../01-核心基础设施/共享小工具-未细化/chunk-d3d1v4d6.js";
import { If } from "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
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

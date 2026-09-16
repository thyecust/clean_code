// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K, fy, he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { qt } from "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import { Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { lr, le, Zt, nt } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { Mp } from "../会话-历史-恢复/chunk-mkmy4cx2.js";
import { lP } from "../Teammates团队/chunk-thxapyam.js";
import { ESn, RJn } from "./chunk-tznd4407.js";
import { Uc, Qo } from "../../01-核心基础设施/共享小工具-未细化/chunk-0hk68fj9.js";
import { dirname as w, join as f } from "path";
var x = /^k[0-9a-z]{8}$/,
  d = 256,
  g = /^(?:[^\p{Cc}\p{Cf}]|[\u200c\u200d])+$/u,
  T = m(() =>
    nt({
      taskId: le().regex(x),
      serverName: le().min(1).max(d).regex(g),
      toolName: le().min(1).max(d).regex(g),
      mcpTaskId: le().min(1).regex(g),
      pollIntervalMs: Zt().optional(),
      spawnedAt: Zt(),
      toolUseId: le()
        .min(1)
        .max(d)
        .regex(/^[\x20-\x7e]+$/)
        .optional(),
      protocol: le()
        .min(1)
        .max(d)
        .regex(/^[\x20-\x7e]+$/)
        .optional(),
      ttlExpiresAt: Zt().optional(),
      transportFingerprint: le().max(8192).optional(),
    })
      .passthrough()
      .superRefine((t, e) => {
        if (
          t.protocol === "sep2663" &&
          (t.mcpTaskId.length > ESn || !RJn.test(t.mcpTaskId))
        )
          e.addIssue({
            code: lr.custom,
            path: ["mcpTaskId"],
            message: "sep2663 task id exceeds the wire bound",
          });
      }),
  );
function ite() {
  return fy() ?? Mp(he());
}
function y(t = K(), e = ite()) {
  return f(e, t, "mcp-tasks");
}
function S(t, e = K(), r) {
  return f(y(e, r), `mcp-task-${t}.meta.json`);
}
function k(t = ite()) {
  return lP(t);
}
function h(t, e, r = K()) {
  return Ce.sidecar(t, r, ["mcp-tasks", `mcp-task-${e}.meta.json`]);
}
async function Zdt(t, e, r) {
  let o = M() && r !== void 0 ? k() : void 0,
    c = K(),
    s = S(t, c);
  if ((await qt().mkdir(w(s)), r && o !== void 0)) {
    let a = await r.write(h(o, t, c), b(e), { publishDiscipline: "inPlace" });
    if (!a.ok)
      throw (
        n(`writeMcpTaskMetadata: ${a.error.code}`),
        Error("mcp task metadata write failed")
      );
    return;
  }
  await qt().write(s, b(e));
}
async function U4(t, e, r, o) {
  let c = M() && e !== void 0 ? k(o) : void 0;
  if (e && c !== void 0) {
    let a = await e.delete(h(c, t, r));
    if (!a.ok)
      throw (
        n(`deleteMcpTaskMetadata: ${a.error.code}`),
        Error("mcp task metadata delete failed")
      );
    return;
  }
  let s = S(t, r, o);
  try {
    await qt().delete(s);
  } catch (a) {
    if (Rt(a)) return;
    throw a;
  }
}
async function ept(t) {
  let e = M() && t !== void 0 ? k() : void 0;
  if (t && e !== void 0) return I(t, e);
  let r = y(),
    o;
  try {
    o = await qt().list(r);
  } catch (s) {
    if (Rt(s)) return [];
    throw s;
  }
  let c = [];
  for (let s of o) {
    if (!s.endsWith(".meta.json")) continue;
    try {
      let a = await qt().read(f(r, s)),
        i = T().safeParse(z(a));
      if (!i.success) {
        n(`listMcpTaskMetadata: skipping ${s}: ${String(i.error)}`);
        continue;
      }
      c.push(i.data);
    } catch (a) {
      n(`listMcpTaskMetadata: skipping ${s}: ${String(a)}`);
    }
  }
  return c;
}
async function I(t, e) {
  let r = {
      namespace: "sidecar",
      projectKey: e,
      sessionId: K(),
      relPath: ["mcp-tasks"],
    },
    o = [],
    c = await Qo(
      (a) =>
        t.listEntries(r, { cursor: a, skipKeyStats: !0, skipScopeStats: !0 }),
      (a) => {
        for (let i of a) {
          if (i.kind !== "key" || i.key.namespace !== "sidecar") continue;
          if ((i.key.relPath.at(-1) ?? "").endsWith(".meta.json"))
            o.push(i.key);
        }
      },
    );
  switch (c.status) {
    case "done":
      break;
    case "error":
      throw (
        n(`listMcpTaskMetadata: ${c.error.code}`),
        Error("mcp task metadata list failed")
      );
    case "capped":
      throw (
        n(`listMcpTaskMetadata: list exceeded ${Uc} pages`),
        Error("mcp task metadata list exceeded the page cap")
      );
  }
  let s = [];
  for (let a of o) {
    let i = a.relPath.at(-1) ?? "",
      u = await t.read([a]);
    if (!u.ok) {
      n(`listMcpTaskMetadata: skipping ${i}: ${u.error.code}`);
      continue;
    }
    let l = u.value.items[0];
    if (!l.found) continue;
    try {
      let p = T().safeParse(z(Buffer.from(l.value).toString("utf8")));
      if (!p.success) {
        n(`listMcpTaskMetadata: skipping ${i}: ${String(p.error)}`);
        continue;
      }
      s.push(p.data);
    } catch (p) {
      n(`listMcpTaskMetadata: skipping ${i}: ${String(p)}`);
    }
  }
  return s;
}
export { ite, Zdt, U4, ept };

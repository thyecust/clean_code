// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { M } from "./chunk-h62vxw7j.js";
import { pr } from "../../02-功能模块/权限系统/chunk-ynkf3yy4.js";
import { l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { qt } from "./chunk-km6n9zrg.js";
import { Ce } from "../../02-功能模块/Teammates团队/chunk-qe04h4c5.js";
import { b, z, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { be } from "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import { m } from "./chunk-78nzsrc6.js";
import { s, v, c, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { dirname as g, join as w } from "path";
var D = 50,
  y = m(() =>
    c({ version: k(1), sessions: v(c({ id: s(), reason: s(), at: s() })) }),
  ),
  u = "device-unbound-creates";
function d() {
  return w(be(), "state", `${u}.json`);
}
async function f(r) {
  let o = await r.readText();
  if (o === void 0) return [];
  let t = C(o);
  if (!t.success) return [];
  let e = await r.retentionCutoff();
  return e === null
    ? t.data.sessions
    : t.data.sessions.filter((i) => !x(i.at, e));
}
function C(r) {
  try {
    return y().safeParse(z(r));
  } catch {
    return { success: !1 };
  }
}
function x(r, o) {
  let t = Date.parse(r);
  return Number.isNaN(t) || t < o.getTime();
}
async function Xhr(r, o, t) {
  try {
    let e = pr(r),
      a = [
        ...(await f(t)).filter((p) => pr(p.id) !== e),
        { id: e, reason: o, at: t.now().toISOString() },
      ].slice(-D);
    await t.writeText(
      b({ version: 1, sessions: a }, null, 2) +
        `
`,
    );
  } catch (e) {
    n(`[deviceBind] unbound create not recorded (${l(e)})`);
  }
}
async function Han(r, o, t) {
  try {
    let e = pr(r),
      i = (await f(t)).find((a) => pr(a.id) === e);
    return i !== void 0 && o(i.reason) ? i.reason : void 0;
  } catch (e) {
    n(`[deviceBind] unbound-create record unreadable (${l(e)})`);
    return;
  }
}
function Ian(r) {
  let o = M() && r !== void 0 ? r : void 0,
    t = Ce.state(u);
  return {
    readText: async () => {
      if (o) {
        let e = await o.readText([t]);
        if (!e.ok) throw Error("device unbound-creates read failed");
        let i = e.value.items[0];
        return i.found ? i.value : void 0;
      }
      try {
        return await qt().read(d());
      } catch (e) {
        if (W(e)) return;
        throw e;
      }
    },
    writeText: async (e) => {
      if (o) {
        if (!(await o.write(t, e, { mode: 384 })).ok)
          throw Error("device unbound-creates write failed");
        return;
      }
      let i = d();
      (await qt().mkdir(g(i), 448), await qt().atomicWrite(i, e, 384));
    },
    now: () => new Date(),
    retentionCutoff: async () => {
      let e = await import("../../02-功能模块/会话-历史-恢复/getCutoffDate.6heqfanj.js");
      return (await e.isRetentionCleanupSafe(r)) ? e.getCutoffDate() : null;
    },
  };
}
export { Xhr, Han, Ian };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, VP } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { ap } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { dln, pln } from "../../02-功能模块/后台任务-Shell管理/chunk-rh0xpf1w.js";
import { Mi } from "../../02-功能模块/后台任务-Shell管理/chunk-7wsy8vxb.js";
class i {
  activePark = null;
}
var s = new j(() => new i());
async function aye(r, e, n, a) {
  if (!ap()) return !1;
  let o = s.of(r),
    t = await dln(e, n, a);
  switch (t.kind) {
    case "refused":
      return !1;
    case "already":
      if (o.activePark?.needs !== e)
        d(o, e, { tempo: "idle", needs: void 0, detail: "" }, a);
      return !0;
    case "wrote":
      return (d(o, e, t.prior, a), !0);
  }
}
function d(r, e, n, a) {
  r.activePark?.unsubscribe();
  let o = VP(() => {
    if (ap()) return;
    let t = r.activePark;
    if (!t || t.needs !== e) return;
    ((r.activePark = null),
      t.unsubscribe(),
      pln(e, t.prior, t.storageV5).catch(Mi));
  });
  r.activePark = { needs: e, prior: n, storageV5: a, unsubscribe: o };
}
export { aye };

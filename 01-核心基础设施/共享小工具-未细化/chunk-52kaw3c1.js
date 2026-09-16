// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { m0 } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { m } from "./chunk-78nzsrc6.js";
import { mN } from "../../02-功能模块/后台任务-Shell管理/chunk-9d5wk5b9.js";
import { T, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var o = 60000,
  r = 1800000,
  t = 2592000000,
  i = m(() =>
    c({
      recurringFrac: T().min(0).max(1),
      recurringCapMs: T().int().min(0).max(r),
      oneShotMaxMs: T().int().min(0).max(r),
      oneShotFloorMs: T().int().min(0).max(r),
      oneShotMinuteMod: T().int().min(1).max(60),
      recurringMaxAgeMs: T().int().min(0).max(t).default(mN.recurringMaxAgeMs),
      cacheLeadMs: T().int().min(0).max(60000).default(mN.cacheLeadMs),
    }).refine((n) => n.oneShotFloorMs <= n.oneShotMaxMs),
  );
function wre() {
  let n = m0("tengu_kairos_cron_config", mN, o),
    e = i().safeParse(n);
  return e.success ? e.data : mN;
}
export { wre };

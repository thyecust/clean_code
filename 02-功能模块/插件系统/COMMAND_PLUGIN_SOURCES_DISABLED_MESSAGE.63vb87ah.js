// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import {
  bd,
  PH,
  bK,
  gXe,
  wK,
  JS,
  lCe,
  Swt,
  uJ,
  Nbn,
  hXe,
  yN,
  ufe,
  T1e,
  ZI,
  xGt,
  _Xe,
  yXe,
  E1e,
  Fbn,
  yG,
  SXe,
  Hc,
} from "./chunk-hh8f1qrw.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
export {
  yN as COMMAND_PLUGIN_SOURCES_DISABLED_MESSAGE,
  Swt as REMOTE_POLICY_UNCONSENTED_MESSAGE,
  JS as areCommandPluginSourcesDisabledByPolicy,
  bK as areLocalPluginDirsAllowedByPolicy,
  wK as areSideloadFlagsDisabledByPolicy,
  yG as canonicalFetchSourceUrl,
  E1e as extractHostFromSource,
  Fbn as getHostPatternsFromAllowlist,
  _Xe as getPluginSuggestionMarketplaces,
  xGt as getPluginTrustMessage,
  PH as getStrictKnownMarketplaces,
  uJ as headersHelperPolicyRefusal,
  Nbn as isHeadersHelperDisabledByPolicy,
  T1e as isMarketplaceRestrictionPolicyActive,
  yXe as isMarketplaceSourceDeclaredByPolicy,
  bd as isPluginBlockedByPolicy,
  Hc as isSourceAllowedByPolicy,
  ZI as isSourceDisallowedOrUnverifiable,
  SXe as isSourceInBlocklist,
  gXe as localPluginDirsBlockedMessage,
  hXe as marketplacesRefusedByPolicyClause,
  lCe as policyTierCommandsMayRun,
  ufe as sideloadFlagsBlockedMessage,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ert, nLn, rLn, oLn, iLn, aLn, bLn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { DW } from "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import { l, A, W, Nz } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Ro, ae, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { cliError } from "./chunk-4f55jpqh.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { Br } from "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import { Ts } from "../遥测-OpenTelemetry/chunk-5j0f24ra.js";
import { WJ } from "../核心工具-路径与平台/chunk-2f8axr19.js";
import { Za, elr, n_ } from "../设置-配置/设置-配置.aqbb35ee.js";
import { _5t, px } from "../../02-功能模块/上下文压缩-Compact/chunk-qbdgst52.js";
import { Iie, Ex } from "./chunk-a7cfts2d.js";
function Tdr(e) {
  try {
    let t = e.trim(),
      a = t.startsWith("{") && t.endsWith("}"),
      s;
    if (a) {
      let r = xt(t);
      if (!r) return cliError("Error: Invalid JSON provided to --settings");
      let i = JSON.stringify(r).replace(
        /[\u007f-\u009f]/g,
        (o) =>
          "\\u" + o.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0"),
      );
      ((s = WJ("claude-settings", ".json", { contentHash: i })), rLn(i));
    } else {
      let { resolvedPath: r } = Ro(ae(), e),
        i;
      try {
        i = Ex(r, n_);
      } catch (o) {
        if (W(o)) return cliError(`Error: Settings file not found: ${r}`);
        if (A(o) === "ERR_FILE_TOO_LARGE")
          return cliError(
            `Error: Settings file exceeds the ${n_ / 1048576}MiB limit: ${r}`,
          );
        if (Iie(o) || Nz(o))
          return cliError(`Error: Cannot use settings file (${l(o)}): ${r}`);
        throw o;
      }
      ((s = r), oLn(i));
    }
    (nLn(s), Za());
  } catch (t) {
    if (t instanceof Error)
      n(`Error processing --settings: ${l(t)}`, { level: "error" });
    return cliError(`Error processing settings: ${l(t)}`);
  }
}
function c(e) {
  let t = xt(e.trim(), !1);
  if (!t || typeof t !== "object" || Array.isArray(t)) {
    (n("--managed-settings ignored: invalid JSON object", { level: "warn" }),
      aLn(!0));
    return;
  }
  (iLn(t), Za());
}
function g(e) {
  try {
    let t = elr(e);
    (bLn(t), Za());
  } catch (t) {
    if (t instanceof Error)
      n(`Invalid --setting-sources flag: ${l(t)}`, { level: "error" });
    return cliError(`Error processing --setting-sources: ${l(t)}`);
  }
}
function tJt() {
  let e = performance.now();
  Br("eagerLoadSettings_start");
  let t = _5t("--settings");
  if (t) Tdr(t);
  let a = _5t("--managed-settings");
  if (a) c(a);
  let s = _5t("--setting-sources");
  if (s !== void 0) g(s);
  if (px("--restricted") || DW()) (g(""), Ert(!0));
  (Br("eagerLoadSettings_end"),
    Ts("settings_load_ms", performance.now() - e, e));
}
export { Tdr, tJt };

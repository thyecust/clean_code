// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { S } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { Pn } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { Ge, Jt } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { tp, VVe, qS, dLe } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
function g(r, e) {
  let { window: n, configured: o, source: s } = qS(r, e),
    t = o > n ? ` \xB7 capped to ${Pn(n)} by model` : "",
    a = [
      `Auto-compact window: ${s === "auto" ? "auto" : s === "experiment" || s === "clientdata" ? `auto (${Pn(o)} tokens)${t}` : s === "env" ? `${Pn(o)} tokens (from CLAUDE_CODE_AUTO_COMPACT_WINDOW)${t}` : s === "unknown-model" ? `${Pn(o)} tokens (default for an unrecognized model)${t}` : s === "model-default" ? `${Pn(o)} tokens (default for this model)${t}` : `${Pn(o)} tokens (from settings)${t}`}`,
    ];
  if (!tp()) a.push("Auto-compact is currently disabled (see /config)");
  if (
    (a.push(
      "Auto-compact summarizes the conversation when context usage approaches this limit. The actual threshold is the minimum of this setting and your model's maximum context window.",
    ),
    a.push(
      "The auto setting picks a window tuned for your model and is strongly recommended for the best cost and performance.",
    ),
    dLe(s))
  )
    a.push(
      "Overriding auto may result in high token usage, especially when resuming long sessions.",
    );
  return a.join(`
`);
}
async function T3e(r, e) {
  let n = e.options.mainLoopModel;
  if (qS(n, void 0).source === "env")
    return "CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting.";
  let o = r.trim().toLowerCase(),
    t = o === "reset" || o === "unset" || o === "default" ? "auto" : VVe(o);
  if (t === void 0)
    return `Couldn't parse '${r}'. Expected 'auto' or 100k\u20131M tokens (e.g. 500k, 200000, or 200 as shorthand)`;
  let u = t === "auto" ? void 0 : t,
    { error: a } = await Jt(
      "userSettings",
      { autoCompactWindow: u },
      void 0,
      e.storageV5,
    );
  if (a) return `Couldn't save setting: ${a.message}`;
  let m = Ge().autoCompactWindow,
    { window: d, source: l } = qS(n, m),
    c = l === "env" || m !== u,
    f = c ? m : u;
  if (
    (e.onQueryEvent?.({
      type: "apply_flag_settings",
      settings: { autoCompactWindow: f ?? null },
    }),
    i("tengu_autocompact_command", {
      action: S(t === "auto" ? "auto" : "set"),
      ...(u !== void 0 && { tokens: u }),
    }),
    t === "auto")
  )
    return c
      ? `Auto-compact window set to auto in settings, but a higher-priority override is active (${Pn(d)} tokens)`
      : "Auto-compact window set to auto";
  let p = "";
  if (c) p = `, but a higher-priority override is active (${Pn(d)} tokens)`;
  else if (d < t) p = ` (capped to model limit of ${Pn(d)})`;
  return `Auto-compact window set to ${Pn(t)} tokens${p}`;
}
var Ygr = async (r, e) => {
  let n = r.trim();
  if (!n)
    return {
      type: "text",
      value: g(e.options.mainLoopModel, e.options.autoCompactWindow),
    };
  return { type: "text", value: await T3e(n, e) };
};
export { T3e, Ygr };

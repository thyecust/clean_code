// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 79 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { isSafeMode, getSafeModeExitHint } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { R, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { describeStorageError, jsonStringify, getFsSurface } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { DEFAULT_KEYBINDINGS, NON_REBINDABLE_KEYS, normalizeKeybindingChord, isKeybindingCustomizationEnabled, getKeybindingsConfigPath, KEYBINDINGS_STORAGE_KEY } from "./键位绑定-Keybindings.sanfja6a.js";
import { editFileInExternalEditor } from "../../03-入口与运行时/会话UI-REPL/external-editor.js";
import { writeFile } from "fs/promises";
import { dirname } from "path";
function m(s) {
  let n = new Set(NON_REBINDABLE_KEYS.map((e) => normalizeKeybindingChord(e.key)));
  return s
    .map((e) => {
      let t = {};
      for (let [r, o] of Object.entries(e.bindings))
        if (!n.has(normalizeKeybindingChord(r))) t[r] = o;
      return { context: e.context, bindings: t };
    })
    .filter((e) => Object.keys(e.bindings).length > 0);
}
function a() {
  let n = {
    $schema: "https://www.schemastore.org/claude-code-keybindings.json",
    $docs: "https://code.claude.com/docs/en/keybindings",
    bindings: m(DEFAULT_KEYBINDINGS),
  };
  return (
    jsonStringify(n, null, 2) +
    `
`
  );
}
async function _(s, n) {
  if (!isKeybindingCustomizationEnabled())
    return {
      type: "text",
      value: "Keybinding customization is disabled in this environment.",
    };
  let e = getKeybindingsConfigPath(),
    t = !1,
    r = n.storageV5;
  if (r) {
    let i = await r.write(KEYBINDINGS_STORAGE_KEY, a(), { precondition: { type: "ifAbsent" } });
    if (!i.ok)
      if (i.error.code === "AlreadyExists") t = !0;
      else
        throw new R(
          `keybindings template write failed: ${describeStorageError(i.error)}`,
          "keybindings template write failed",
        );
  } else {
    await getFsSurface().mkdir(dirname(e));
    try {
      await writeFile(e, a(), { encoding: "utf-8", flag: "wx" });
    } catch (i) {
      if (A(i) === "EEXIST") t = !0;
      else throw i;
    }
  }
  let o = await editFileInExternalEditor(e);
  if (o.error)
    return {
      type: "text",
      value: `${t ? "Opened" : "Created"} ${e}. ${o.error}`,
    };
  let d = isSafeMode()
    ? ` (Safe mode: custom keybindings are disabled this session \u2014 changes take effect after you ${getSafeModeExitHint()}.)`
    : "";
  return {
    type: "text",
    value: t
      ? `Opened ${e} in your editor.${d}`
      : `Created ${e} with template. Opened in your editor.${d}`,
  };
}
export { _ as call };

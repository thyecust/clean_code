// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createStore } from "./state-store.js";
import { Gt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
function o() {
  return createStore({
    value: "",
    active: !1,
    launchWarning: null,
    vimMode: "INSERT",
    stash: null,
  });
}
var r = new Gt(() => o());
function getPromptInputStore(n) {
  return r.of(n);
}
function x3n(n) {
  return getPromptInputStore(n).getState().value;
}
function setPromptInputValue(n, e) {
  n.setState((t) => {
    if (t.value === e) return t;
    if (t.launchWarning !== null && t.value !== "" && e === "")
      return { ...t, value: e, launchWarning: null };
    return { ...t, value: e };
  });
}
function setPromptStash(n, e) {
  n.setState((t) => (t.stash === e ? t : { ...t, stash: e }));
}
function setPromptInputActive(n, e) {
  n.setState((t) => (t.active === e ? t : { ...t, active: e }));
}
function setSessionPromptInputActive(n, e) {
  setPromptInputActive(getPromptInputStore(n), e);
}
function setPromptVimMode(n, e) {
  getPromptInputStore(n).setState((t) => (t.vimMode === e ? t : { ...t, vimMode: e }));
}
function setPromptLaunchWarning(n, e) {
  n.setState((t) =>
    t.launchWarning?.type === e.type &&
    t.launchWarning.prefillLength === e.prefillLength
      ? t
      : { ...t, launchWarning: e },
  );
}
function setSessionPromptLaunchWarning(n, e) {
  setPromptLaunchWarning(getPromptInputStore(n), e);
}
export { getPromptInputStore, x3n, setPromptInputValue, setPromptStash, setPromptInputActive, setSessionPromptInputActive, setPromptVimMode, setPromptLaunchWarning, setSessionPromptLaunchWarning };

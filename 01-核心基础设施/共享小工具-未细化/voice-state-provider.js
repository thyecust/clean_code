// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { Qt, De, d, At, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { createStore } from "./state-store.js";
F();
function x() {
  let p = createStore(S);
  let m = new a();
  return (
    p.subscribe(() => {
      if (p.getState().voiceState !== "recording") m.reset();
    }),
    { store: p, levelSmoother: m }
  );
}
var S = {
  voiceState: "idle",
  voiceError: null,
  voiceInterimTranscript: "",
  voiceAudioLevels: [],
  voiceWarmingUp: !1,
  awaitingVoiceSubmitDoubleTap: !1,
};
class a {
  #e = 0;
  next(t, o) {
    return ((this.#e = this.#e * o + t * (1 - o)), this.#e);
  }
  reset() {
    this.#e = 0;
  }
}
var n = Qt(null);
function VoiceProvider(y) {
  let P = _(3),
    { children: s } = y,
    [l] = d(x),
    V;
  if (P[0] !== s || P[1] !== l)
    ((V = e(n.Provider, { value: l, children: s })),
      (P[0] = s),
      (P[1] = l),
      (P[2] = V));
  else V = P[2];
  return V;
}
function i() {
  let b = De(n);
  if (!b) {
    throw Error("useVoiceState must be used within a VoiceProvider");
  }
  return b;
}
function useVoiceStore() {
  return i().store;
}
function useVoiceLevelSmoother() {
  return i().levelSmoother;
}
function useVoiceSelector(v) {
  let R = _(3),
    c = useVoiceStore(),
    f;
  if (R[0] !== v || R[1] !== c)
    ((f = () => v(c.getState())), (R[0] = v), (R[1] = c), (R[2] = f));
  else f = R[2];
  let g = f;
  return At(c.subscribe, g, g);
}
function useVoiceSetState() {
  return useVoiceStore().setState;
}
function useVoiceGetState() {
  return useVoiceStore().getState;
}
export { VoiceProvider, useVoiceStore, useVoiceLevelSmoother, useVoiceSelector, useVoiceSetState, useVoiceGetState };

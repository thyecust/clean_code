// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { LMn } from "./chunk-4q4fh1a5.js";
import { Ae } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var a = null,
  i = !1;
function r() {
  if (i) return a;
  i = !0;
  let t = "darwin";
  if (t !== "darwin" && t !== "linux" && t !== "win32") return null;
  try {
    return ((a = LMn()), a);
  } catch {}
  let o = `arm64-${t}`,
    u = (t === "linux" ? [o, `${o}-musl`] : [o]).flatMap((n) => [
      `./vendor/audio-capture/${n}/audio-capture.node`,
      `../audio-capture/${n}/audio-capture.node`,
    ]);
  for (let n of u)
    try {
      return ((a = Ae(n)), a);
    } catch {}
  return null;
}
function isNativeAudioAvailable() {
  return r() !== null;
}
function startNativeRecording(t, o) {
  let e = r();
  if (!e) return !1;
  return e.startRecording(t, o);
}
function stopNativeRecording() {
  let t = r();
  if (!t) return;
  t.stopRecording();
}
function isNativeRecordingActive() {
  let t = r();
  if (!t) return !1;
  return t.isRecording();
}
function startNativePlayback(t, o) {
  let e = r();
  if (!e) return !1;
  return e.startPlayback(t, o);
}
function writeNativePlaybackData(t) {
  let o = r();
  if (!o) return;
  o.writePlaybackData(t);
}
function stopNativePlayback() {
  let t = r();
  if (!t) return;
  t.stopPlayback();
}
function isNativePlaying() {
  let t = r();
  if (!t) return !1;
  return t.isPlaying();
}
function microphoneAuthorizationStatus() {
  let t = r();
  if (!t || !t.microphoneAuthorizationStatus) return 0;
  return t.microphoneAuthorizationStatus();
}
export {
  isNativeAudioAvailable,
  isNativePlaying,
  isNativeRecordingActive,
  microphoneAuthorizationStatus,
  startNativePlayback,
  startNativeRecording,
  stopNativePlayback,
  stopNativeRecording,
  writeNativePlaybackData,
};

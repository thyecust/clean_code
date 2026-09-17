// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 16 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { j } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { xg } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Bs } from "../../00-第三方库/which-isexe/isexe.knmpyrza.js";
import { execFileNoThrow } from "../Git-Worktree/git-exec-hardening.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { spawn } from "child_process";
import { homedir } from "os";
import { join as v } from "path";
var V = v(homedir(), ".cache", "coder-audio", "port"),
  M = v(homedir(), ".cache", "coder-audio", "token");
class g {
  audioNapi = null;
  audioNapiPromise = null;
  arecordProbe = null;
  linuxAlsaCardsProbe = null;
  activeRecorder = null;
  activeForwardedSocket = null;
  forwardedStartGeneration = 0;
  nativeRecordingActive = !1;
}
var l = new j(() => new g());
var w = { started: !0 };
var h = { started: !1, superseded: !1, hint: null, expected: !1 };
function f(e) {
  return (
    (e.audioNapiPromise ??= (async () => {
      let o = Date.now(),
        r = await import("./writeNativePlaybackData.kaab95p2.js");
      return (
        r.isNativeAudioAvailable(),
        (e.audioNapi = r),
        logForDebugging(`[voice] audio-capture-napi loaded in ${Date.now() - o}ms`),
        r
      );
    })()),
    e.audioNapiPromise
  );
}
var k = 16000,
  x = 1,
  E = "2.0",
  S = "3%";
async function u(e) {
  return (await execFileNoThrow(e, ["--version"], { timeout: 3000, useCwd: !1 })).code === 0;
}
async function b() {
  if (await u("brew"))
    return {
      cmd: "brew",
      args: ["install", "sox"],
      displayCommand: "brew install sox",
    };
  return null;
}
async function checkVoiceDependencies(e) {
  let o = l.of(e);
  if ((await f(o)).isNativeAudioAvailable())
    return { available: !0, missing: [], installCommand: null };
  let s = [];
  if (!(await u("sox"))) s.push("sox (rec command)");
  let t = s.length > 0 ? await b() : null;
  return {
    available: s.length === 0,
    missing: s,
    installCommand: t?.displayCommand ?? null,
  };
}
async function requestMicrophonePermission(e) {
  if (!(await f(l.of(e))).isNativeAudioAvailable()) return !0;
  if (
    (
      await startRecording(
        e,
        (s) => {},
        () => {},
        { silenceDetection: !1 },
      )
    ).started
  )
    return (stopRecording(e), !0);
  return !1;
}
async function checkRecordingAvailability(e, o = {}) {
  if (xg() || a.CLAUDE_CODE_REMOTE)
    return {
      available: !1,
      reason: `Voice mode requires microphone access, but no audio device is available in this environment.

To use voice mode, run Claude Code locally instead.`,
    };
  let r = l.of(e);
  if ((await f(r)).isNativeAudioAvailable())
    return { available: !0, reason: null };
  let t =
      `Voice mode could not find a working audio recorder in WSL.

` +
      `WSL2 with WSLg provides audio via PulseAudio \u2014 install SoX with its PulseAudio backend (sudo apt install sox libsox-fmt-pulse) so Claude Code can record through it.

` +
      "If WSLg is not available (for example WSL1), run Claude Code in native Windows instead.",
    d = await u("sox");
  if (d && (await u("rec"))) return { available: !0, reason: null };
  if (getCurrentPlatform() === "wsl") return { available: !1, reason: t };
  if (!d) {
    let i = await b();
    return {
      available: !1,
      reason: i
        ? `Voice mode requires SoX for audio recording. Install it with: ${i.displayCommand}`
        : `Voice mode requires SoX for audio recording. Install SoX manually:
  macOS: brew install sox
  Ubuntu/Debian: sudo apt-get install sox
  Fedora: sudo dnf install sox`,
    };
  }
  return {
    available: !1,
    reason: `Voice mode requires a microphone, but SoX could not open an audio capture device.

This usually means the host has no microphone (for example, a remote server). Run Claude Code on a machine with a microphone to use voice input.`,
  };
}
async function startRecording(e, o, r, s) {
  logForDebugging("[voice] startRecording called, platform=darwin");
  let t = l.of(e),
    d = await f(t),
    i = d.isNativeAudioAvailable() && !0,
    c = s?.silenceDetection !== !1;
  if (i) {
    if (t.nativeRecordingActive || d.isNativeRecordingActive())
      (d.stopNativeRecording(), (t.nativeRecordingActive = !1));
    if (
      d.startNativeRecording(
        (p) => {
          o(p);
        },
        () => {
          if (c) ((t.nativeRecordingActive = !1), r());
        },
      )
    )
      return ((t.nativeRecordingActive = !0), w);
  }
  return C(t, o, r, s) ? w : h;
}
function C(e, o, r, s) {
  let t = s?.silenceDetection !== !1,
    d = [
      "-q",
      "--buffer",
      "1024",
      "-t",
      "raw",
      "-r",
      String(k),
      "-e",
      "signed",
      "-b",
      "16",
      "-c",
      String(x),
      "-",
    ];
  if (t) d.push("silence", "1", "0.1", S, "1", E, S);
  let i = spawn("rec", d, {
    stdio: ["pipe", "pipe", "pipe"],
    windowsHide: !0,
    ...Bs("helper"),
  });
  return (
    (e.activeRecorder = i),
    i.stdout?.on("data", (c) => {
      o(c);
    }),
    i.stderr?.on("data", () => {}),
    i.on("close", () => {
      ((e.activeRecorder = null), r());
    }),
    i.on("error", (c) => {
      (logForDebugging(
        `[voice] SoX rec spawn failed: ${c instanceof Error ? c.message : String(c)}`,
        { level: "error" },
      ),
        (e.activeRecorder = null),
        r());
    }),
    !0
  );
}
function stopRecording(e) {
  let o = l.of(e);
  if (o.nativeRecordingActive && o.audioNapi) {
    (o.audioNapi.stopNativeRecording(), (o.nativeRecordingActive = !1));
    return;
  }
  if (o.activeRecorder)
    (o.activeRecorder.kill("SIGTERM"), (o.activeRecorder = null));
}
export {
  checkRecordingAvailability,
  checkVoiceDependencies,
  requestMicrophonePermission,
  startRecording,
  stopRecording,
};

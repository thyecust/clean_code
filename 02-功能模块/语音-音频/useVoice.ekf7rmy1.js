// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 99 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Le, Ije } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { Cle } from "../../01-核心基础设施/共享小工具-未细化/chunk-ejtvp07p.js";
import { j, sn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { Va } from "../../01-核心基础设施/共享小工具-未细化/chunk-k0wct4tn.js";
import { ge } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import { uRe } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Da } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { Ge } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { vt } from "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import { Fnn, $nn, Unn } from "./chunk-6098r6ax.js";
import { Ye } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5g6jeny.js";
import { Me } from "../../01-核心基础设施/共享小工具-未细化/chunk-0dh9gct8.js";
import { E, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { Mcr } from "../../01-核心基础设施/共享小工具-未细化/chunk-xcc43dkx.js";
F();
var w = 1e4,
  I = 3;
class B {
  voiceModule = null;
  recentEarlyFailures = [];
  breakerTrippedLogged = !1;
  lastExpectedHint = null;
  recordEarlyFailure(e = null) {
    (this.recentEarlyFailures.push(Date.now()), (this.lastExpectedHint = e));
  }
  clearEarlyFailures() {
    ((this.recentEarlyFailures.length = 0),
      (this.breakerTrippedLogged = !1),
      (this.lastExpectedHint = null));
  }
}
var z = new j(() => new B());
function P(e) {
  return `voice_transcription_connection_failed_${e ?? "no_response"}`;
}
var N = 200,
  G = 600;
var U = 5000,
  Y = 15000,
  q = 120000,
  W = 16;
function X(e) {
  let t = e.length >> 1;
  if (t === 0) return 0;
  let r = 0;
  for (let l = 0; l < e.length - 1; l += 2) {
    let V = ((e[l] | (e[l + 1] << 8)) << 16) >> 16;
    r += V * V;
  }
  let c = Math.sqrt(r / t),
    a = Math.min(c / 2000, 1);
  return Math.sqrt(a);
}
function J({ hadAudioSignal: e, wsConnected: t }) {
  if (!e)
    return {
      message:
        "No audio detected from microphone. Check that the correct input device is selected and that Claude Code has microphone access.",
      errorCode: "voice_transcription_no_audio_signal",
    };
  if (!t)
    return {
      message: "Voice connection failed. Check your network and try again.",
      errorCode: "voice_transcription_connection_failed",
    };
  return {
    message: "No speech detected.",
    errorCode: "voice_transcription_no_speech",
  };
}
class L {
  #y;
  #m;
  #n;
  #L;
  #w;
  #V;
  #O;
  #z;
  #I;
  #h;
  #j = Le();
  #t;
  #N = !1;
  #E = !1;
  #P = { state: "idle" };
  #e = "idle";
  #s = null;
  #o = "";
  #d = null;
  #b = !1;
  #c = null;
  #i = !1;
  #p = !1;
  #v = null;
  #a = null;
  #l = null;
  #_ = !1;
  #C = 0;
  #G = 0;
  #u = 0;
  #F = !1;
  #f = [];
  #R = !1;
  #T = 0;
  #$ = 0;
  #k = !1;
  #B = !1;
  #x = null;
  #M = [];
  constructor(e) {
    ((this.#y = e.host),
      (this.#m = e.clock),
      (this.#n = e.voiceStore),
      (this.#L = e.loadVoiceModule),
      (this.#w = e.connectVoiceStream),
      (this.#V = e.credentials),
      (this.#O = e.isVoiceStreamAvailable),
      (this.#z = e.probeVoiceConnectivity),
      (this.#I = e.getVoiceKeyterms),
      (this.#h = z.of(e.host)),
      (this.#t = e.inputs));
  }
  subscribe = (e) => this.#j.subscribe(e);
  getSnapshot = () => this.#P;
  setInputs = (e) => {
    if (this.#E) return;
    let t = this.#t,
      r = !this.#N;
    ((this.#N = !0), (this.#t = e));
    let c = r || t.enabled !== e.enabled,
      a = c || t.focusMode !== e.focusMode || t.isFocused !== e.isFocused;
    if (!r) {
      if (a) this.#C++;
      if (c) this.#U();
    }
    if (c) this.#Y();
    if (a) this.#W();
  };
  dispose = () => {
    if (this.#E) return;
    (this.#C++, this.#U(), (this.#E = !0));
  };
  handleKeyEvent = (e = G) => {
    let { enabled: t, focusMode: r, mode: c } = this.#t;
    if (this.#E || !t || !this.#O()) return;
    if (this.#i) return;
    if (r && this.#_) {
      (n("[voice] Re-arming focus recording after silence timeout"),
        (this.#_ = !1),
        (this.#i = !0),
        this.#D(),
        this.#A());
      return;
    }
    let a = this.#e;
    if (a === "processing") return;
    if (c === "tap") {
      if (a === "idle")
        (n("[voice] toggle: starting recording"),
          (this.#p = !0),
          this.#D(),
          this.#K(),
          this.#q());
      else if (a === "recording")
        (n("[voice] toggle: finishing recording"), this.#g());
      return;
    }
    if (a === "idle") {
      if (
        (n(
          "[voice] handleKeyEvent: idle, starting recording session immediately",
        ),
        this.#D(),
        this.#c)
      )
        this.#c();
      this.#c = this.#m.setTimeout(() => {
        if (((this.#c = null), this.#e === "recording" && !this.#b))
          (n("[voice] No auto-repeat seen, arming release timer via fallback"),
            (this.#b = !0),
            this.#H());
      }, e);
    } else if (a === "recording") {
      if (((this.#b = !0), this.#c)) (this.#c(), (this.#c = null));
    }
    if (this.#d) this.#d();
    if (this.#e === "recording" && this.#b) this.#H();
  };
  cancelRecording = () => {
    if (this.#E || this.#e === "idle") return;
    (n("[voice] cancelRecording: discarding without submit"),
      y("voice_cancel"),
      this.#S(),
      this.#r("idle"));
  };
  #r(e) {
    if (((this.#e = e), this.#P.state !== e))
      ((this.#P = { state: e }), this.#j.emit());
    this.#n.setState((t) => {
      if (t.voiceState === e) return t;
      return { ...t, voiceState: e };
    });
  }
  #H() {
    this.#d = this.#m.setTimeout(() => {
      if (((this.#d = null), this.#e === "recording")) this.#g();
    }, N);
  }
  #U() {
    if ((this.#S(), this.#e !== "idle")) this.#r("idle");
  }
  #S() {
    if ((this.#u++, this.#d)) (this.#d(), (this.#d = null));
    if (this.#c) (this.#c(), (this.#c = null));
    if (this.#v) (this.#v(), (this.#v = null));
    if (this.#a) (this.#a(), (this.#a = null));
    if (this.#l) (this.#l(), (this.#l = null));
    if (
      ((this.#_ = !1),
      (this.#p = !1),
      this.#h.voiceModule?.stopRecording(this.#y),
      this.#s)
    )
      (this.#s.close(), (this.#s = null));
    ((this.#o = ""),
      (this.#M = []),
      (this.#f = []),
      this.#n.setState((e) => {
        if (e.voiceInterimTranscript === "" && !e.voiceAudioLevels.length)
          return e;
        return { ...e, voiceInterimTranscript: "", voiceAudioLevels: [] };
      }));
  }
  #Y() {
    if (this.#t.enabled && !this.#h.voiceModule)
      this.#L().then((e) => {
        this.#h.voiceModule = e;
      });
  }
  #A() {
    if (this.#v) this.#v();
    this.#v = this.#m.setTimeout(() => {
      if (((this.#v = null), this.#e === "recording" && this.#i))
        (n("[voice] Focus silence timeout \u2014 tearing down session"),
          (this.#_ = !0),
          this.#g());
    }, U);
  }
  #K() {
    if (this.#a) this.#a();
    this.#a = this.#m.setTimeout(() => {
      if (((this.#a = null), this.#e === "recording" && this.#p))
        (n("[voice] Toggle silence timeout \u2014 auto-finishing"), this.#g());
    }, Y);
  }
  #q() {
    if (this.#l) this.#l();
    this.#l = this.#m.setTimeout(() => {
      if (((this.#l = null), this.#e === "recording" && this.#p))
        (n("[voice] Toggle max-duration cap \u2014 auto-finishing"), this.#g());
    }, q);
  }
  #W() {
    let { enabled: e, focusMode: t, isFocused: r } = this.#t;
    if (!e || !t) {
      if (this.#i && this.#e === "recording")
        (n("[voice] Focus mode disabled during recording, finishing"),
          this.#g());
      return;
    }
    if (r && this.#e === "idle" && !this.#_) {
      let c = this.#C,
        a = () => {
          if (c !== this.#C || this.#e !== "idle" || this.#_) return;
          (n("[voice] Focus gained, starting recording session"),
            (this.#i = !0),
            this.#D(),
            this.#A());
        };
      if (this.#h.voiceModule) a();
      else
        this.#L().then((l) => {
          ((this.#h.voiceModule = l), a());
        });
    } else if (!r) {
      if (((this.#_ = !1), this.#e === "recording"))
        (n("[voice] Focus lost, finishing recording"), this.#g());
    }
  }
  #g() {
    (n(
      "[voice] finishRecording: stopping recording, transitioning to processing",
    ),
      this.#T++);
    let e = this.#i;
    if (((this.#i = !1), (this.#p = !1), this.#a))
      (this.#a(), (this.#a = null));
    if (this.#l) (this.#l(), (this.#l = null));
    (this.#r("processing"), this.#h.voiceModule?.stopRecording(this.#y));
    let t = Date.now() - this.#G,
      r = this.#k,
      c = this.#F,
      a = this.#$,
      l = this.#B,
      V = this.#x,
      C = this.#u,
      b = () => this.#u !== C;
    (n("[voice] Recording stopped"),
      (this.#s ? this.#s.finalize() : Promise.resolve(void 0))
        .then(async (R) => {
          if (b()) return;
          if (
            R === "no_data_timeout" &&
            r &&
            l &&
            !e &&
            a === 0 &&
            this.#o.trim() === "" &&
            !this.#R &&
            this.#f.length > 0
          ) {
            if (
              ((this.#R = !0),
              n(
                `[voice] Silent-drop detected (no_data_timeout, ${String(this.#f.length)} chunks); replaying on fresh connection`,
              ),
              i("tengu_voice_silent_drop_replay", {
                recordingDurationMs: t,
                chunkCount: this.#f.length,
              }),
              this.#s)
            )
              (this.#s.close(), (this.#s = null));
            let _ = this.#f;
            if ((await Z(250), b())) return;
            let k = Ije(Ge().language),
              u = await this.#I();
            if (b()) return;
            if (
              (await new Promise((S) => {
                this.#w(
                  {
                    onTranscript: (o, m) => {
                      if (b()) return;
                      if (m && o.trim()) {
                        if (this.#o) this.#o += " ";
                        this.#o += o.trim();
                      }
                    },
                    onError: () => S(),
                    onClose: () => {},
                    onReady: (o) => {
                      if (b()) {
                        (o.close(), S());
                        return;
                      }
                      this.#s = o;
                      let m = 32000,
                        s = [],
                        p = 0;
                      for (let T of _) {
                        if (p > 0 && p + T.length > m)
                          (o.send(Buffer.concat(s)), (s = []), (p = 0));
                        (s.push(T), (p += T.length));
                      }
                      if (s.length) o.send(Buffer.concat(s));
                      o.finalize().then(() => {
                        (o.close(), S());
                      });
                    },
                  },
                  { language: k.code, keyterms: u },
                  this.#V,
                ).then(
                  (o) => {
                    if (!o) S();
                  },
                  () => S(),
                );
              }),
              b())
            )
              return;
          }
          this.#f = [];
          let v = this.#o.trim();
          if (
            (n(
              `[voice] Final transcript assembled (${String(v.length)} chars)`,
            ),
            i("tengu_voice_recording_completed", {
              transcriptChars: v.length + a,
              recordingDurationMs: t,
              hadAudioSignal: r,
              retried: c,
              silentDropRetried: this.#R,
              wsConnected: l,
              focusTriggered: e,
            }),
            this.#s)
          )
            (this.#s.close(), (this.#s = null));
          if (v)
            (n(`[voice] Injecting transcript (${String(v.length)} chars)`),
              y("voice_transcription"),
              this.#t.onTranscript(v));
          else if (a === 0 && t > 2000) {
            let { message: _, errorCode: k } = J({
              hadAudioSignal: r,
              wsConnected: l,
            });
            if (
              (this.#t.onError(_),
              k === "voice_transcription_connection_failed")
            )
              if (V) f("voice_transcription", P(V));
              else
                this.#z().then((u) => {
                  f("voice_transcription", P(`probe_${u}`));
                });
            else f("voice_transcription", k);
          }
          ((this.#o = ""),
            this.#n.setState((_) => {
              if (_.voiceInterimTranscript === "") return _;
              return { ..._, voiceInterimTranscript: "" };
            }),
            this.#r("idle"));
        })
        .catch((R) => {
          if (
            (f("voice_transcription", "voice_transcription_finalize_failed"),
            h(ge(R)),
            !b())
          )
            this.#r("idle");
        }));
  }
  async #D() {
    let e = this.#h.voiceModule;
    if (!e) {
      (f("voice_start", "voice_start_module_not_loaded"),
        this.#t.onError("Voice module not loaded yet. Try again in a moment."),
        (this.#i = !1));
      return;
    }
    let t = this.#h,
      r = Date.now();
    while (t.recentEarlyFailures.length > 0 && r - t.recentEarlyFailures[0] > w)
      t.recentEarlyFailures.shift();
    if (t.recentEarlyFailures.length < I) t.breakerTrippedLogged = !1;
    if (t.recentEarlyFailures.length >= I) {
      if (!t.breakerTrippedLogged)
        ((t.breakerTrippedLogged = !0),
          n(
            `[voice] circuit breaker: ${String(t.recentEarlyFailures.length)} early failures in ${String(w)}ms \u2014 suppressing new sessions until one succeeds`,
            { level: "error" },
          ),
          i("tengu_voice_circuit_breaker_tripped", {}),
          f("voice_start", "voice_start_breaker_paused"),
          this.#t.onError(
            t.lastExpectedHint
              ? `${t.lastExpectedHint} Voice input is paused for a moment.`
              : "Voice input is failing repeatedly and has been paused. Check your microphone and try again in a moment.",
          ));
      this.#i = !1;
      return;
    }
    (this.#r("recording"),
      (this.#G = Date.now()),
      (this.#o = ""),
      (this.#b = !1),
      (this.#k = !1),
      (this.#F = !1),
      (this.#R = !1),
      (this.#f = []),
      (this.#$ = 0),
      (this.#B = !1),
      (this.#x = null));
    let c = ++this.#u,
      a = await e.checkRecordingAvailability(this.#y);
    if (this.#u !== c) return;
    if (!a.available) {
      (n(`[voice] Recording not available: ${a.reason ?? "unknown"}`),
        f("voice_start", "voice_start_recording_unavailable"),
        this.#t.onError(a.reason ?? "Audio recording is not available."),
        t.recordEarlyFailure(),
        (this.#i = !1),
        this.#S(),
        this.#r("idle"));
      return;
    }
    (n("[voice] Starting recording session, connecting voice stream"),
      this.#n.setState((u) => {
        if (!u.voiceError) return u;
        return { ...u, voiceError: null };
      }));
    let l = [];
    (n("[voice] startRecording: buffering audio while WebSocket connects"),
      (this.#M = []));
    let V = !1,
      C = await e.startRecording(
        this.#y,
        (u) => {
          V = !0;
          let S = Buffer.from(u);
          if (!this.#i) this.#f.push(S);
          if (this.#s) this.#s.send(S);
          else l.push(S);
          let o = X(u);
          if (!this.#k && o > 0.01) this.#k = !0;
          let m = this.#M;
          if (m.length >= W) m.shift();
          m.push(o);
          let s = [...m];
          ((this.#M = s),
            this.#n.setState((p) => ({ ...p, voiceAudioLevels: s })));
        },
        () => {
          if (this.#e === "recording") {
            if (!V && this.#u === c) t.recordEarlyFailure();
            this.#g();
          }
        },
        { silenceDetection: !1 },
      );
    if (this.#u !== c) {
      if (C.started && this.#e !== "recording") e.stopRecording(this.#y);
      return;
    }
    if (!C.started) {
      if (C.superseded) {
        n("[voice] start superseded mid-connect; ignoring");
        return;
      }
      let u = C.hint;
      (f("voice_start", "voice_start_capture_failed"),
        n(`[voice] Recording failed \u2014 ${u ?? "no audio tool found"}`, {
          level: "error",
        }),
        this.#t.onError(
          u ??
            "Failed to start audio capture. Check that your microphone is accessible.",
        ),
        t.recordEarlyFailure(C.expected ? u : null),
        (this.#i = !1),
        this.#S(),
        this.#r("idle"),
        this.#n.setState((S) => ({
          ...S,
          voiceError: u ?? "Recording failed \u2014 no audio tool found",
        })));
      return;
    }
    let b = Ge().language,
      D = Ije(b),
      R = Mcr();
    (y("voice_start"),
      i("tengu_voice_recording_started", {
        focusTriggered: this.#i,
        sttLanguage: uRe(D.code),
        sttLanguageIsDefault: !b?.trim(),
        sttLanguageFellBack: D.fellBackFrom !== void 0,
        systemLocaleLanguage: R == null ? void 0 : uRe(R),
      }));
    let v = !1,
      _ = () => this.#u !== c,
      k = (u) => {
        let S = this.#T;
        this.#w(
          {
            onTranscript: (o, m) => {
              if (_()) return;
              if (
                ((v = !0),
                t.clearEarlyFailures(),
                n(
                  `[voice] onTranscript: isFinal=${String(m)} (${String(o.length)} chars)`,
                ),
                m && o.trim())
              )
                if (this.#i)
                  (n(
                    `[voice] Focus mode: flushing final transcript immediately (${String(o.trim().length)} chars)`,
                  ),
                    y("voice_transcription"),
                    this.#t.onTranscript(o.trim()),
                    (this.#$ += o.trim().length),
                    this.#n.setState((s) => {
                      if (s.voiceInterimTranscript === "") return s;
                      return { ...s, voiceInterimTranscript: "" };
                    }),
                    (this.#o = ""),
                    this.#A());
                else {
                  if (this.#p) this.#K();
                  if (this.#o) this.#o += " ";
                  ((this.#o += o.trim()),
                    n(
                      `[voice] Accumulated final transcript (${String(this.#o.length)} chars)`,
                    ),
                    this.#n.setState((s) => {
                      let p = this.#o;
                      if (s.voiceInterimTranscript === p) return s;
                      return { ...s, voiceInterimTranscript: p };
                    }));
                }
              else if (!m) {
                if (this.#i) this.#A();
                else if (this.#p) this.#K();
                let s = o.trim(),
                  p = this.#o ? this.#o + (s ? " " + s : "") : s;
                this.#n.setState((T) => {
                  if (T.voiceInterimTranscript === p) return T;
                  return { ...T, voiceInterimTranscript: p };
                });
              }
            },
            onError: (o, m) => {
              if (_()) {
                n(`[voice] ignoring onError from stale session: ${o}`);
                return;
              }
              if (this.#T !== S) {
                n(
                  `[voice] ignoring stale onError from superseded attempt: ${o}`,
                );
                return;
              }
              if (m?.connectFailureCode) this.#x = m.connectFailureCode;
              if (!m?.fatal && !v && this.#e === "recording") {
                if (!this.#F) {
                  ((this.#F = !0),
                    n(
                      `[voice] early voice_stream error (pre-transcript), retrying once: ${o}`,
                    ),
                    i("tengu_voice_stream_early_retry", {}),
                    (this.#s = null),
                    this.#T++,
                    this.#m.setTimeout(() => {
                      if (this.#e === "recording") k(u);
                    }, 250));
                  return;
                }
              }
              if ((this.#T++, !v)) t.recordEarlyFailure();
              (f("voice_stream_connect", "voice_stream_connection_error"),
                n(`[voice] voice_stream error: ${o}`, { level: "error" }));
              let s = this.#o.trim();
              if (s)
                (n(
                  `[voice] mid-stream error: salvaging ${String(s.length)} chars before cleanup`,
                ),
                  g(
                    "voice_transcription",
                    "voice_transcription_partial_salvaged",
                  ),
                  this.#t.onTranscript(s));
              (this.#t.onError(`Voice stream error: ${o}`),
                (l.length = 0),
                (this.#i = !1),
                this.#S(),
                this.#r("idle"));
            },
            onClose: () => {},
            onReady: (o) => {
              if (_() || this.#e !== "recording") {
                o.close();
                return;
              }
              ((this.#s = o), (this.#B = !0), y("voice_stream_connect"));
              let m = 32000;
              if (l.length > 0) {
                let s = 0;
                for (let A of l) s += A.length;
                let p = [[]],
                  T = 0;
                for (let A of l) {
                  if (T > 0 && T + A.length > m) (p.push([]), (T = 0));
                  (p.at(-1).push(A), (T += A.length));
                }
                n(
                  `[voice] onReady: flushing ${String(l.length)} buffered chunks (${String(s)} bytes) as ${String(p.length)} coalesced frame(s)`,
                );
                for (let A of p) o.send(Buffer.concat(A));
              }
              if (((l.length = 0), this.#d)) this.#d();
              if (this.#b) this.#H();
            },
          },
          { language: D.code, keyterms: u },
          this.#V,
        ).then(
          (o) => {
            if (_()) {
              o?.close();
              return;
            }
            if (!o) {
              if (
                (n(
                  "[voice] Failed to connect to voice_stream (no OAuth token?)",
                ),
                f("voice_stream_connect", "voice_stream_no_auth"),
                this.#t.onError(
                  "Voice mode requires a Claude.ai account. Please run /login to sign in.",
                ),
                M() && this.#V !== void 0)
              )
                (t.recordEarlyFailure(
                  "Voice mode could not read your Claude.ai login.",
                ),
                  (this.#i = !1));
              ((l.length = 0), this.#S(), this.#r("idle"));
              return;
            }
            if (this.#e !== "recording") {
              ((l.length = 0), o.close());
              return;
            }
          },
          (o) => {
            if (
              (h(ge(o)),
              f("voice_stream_connect", "voice_stream_connect_exception"),
              _())
            )
              return;
            if (this.#e !== "recording") return;
            (t.recordEarlyFailure(),
              this.#t.onError(
                "Voice connection failed. Check your network and try again.",
              ),
              (l.length = 0),
              (this.#i = !1),
              this.#S(),
              this.#r("idle"));
          },
        );
      };
    this.#I().then(k);
  }
}
import { basename as H } from "path";
var Q = [
  "MCP",
  "symlink",
  "grep",
  "regex",
  "localhost",
  "codebase",
  "TypeScript",
  "JSON",
  "OAuth",
  "webhook",
  "gRPC",
  "dotfiles",
  "subagent",
  "worktree",
];
function K(e) {
  return e
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/[-_./\s]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 2 && t.length <= 20);
}
function ee(e) {
  let t = H(e).replace(/\.[^.]+$/, "");
  return K(t);
}
var x = 50;
async function O(e) {
  let t = new Set(Q);
  try {
    let r = sn();
    if (r) {
      let c = H(r);
      if (c.length > 2 && c.length <= 50) t.add(c);
    }
  } catch {}
  try {
    let r = await Da();
    if (r) for (let c of K(r)) t.add(c);
  } catch {}
  if (e)
    for (let r of e) {
      if (t.size >= x) break;
      for (let c of ee(r)) t.add(c);
    }
  return [...t].slice(0, x);
}
function we({
  onTranscript: e,
  onError: t,
  enabled: r,
  focusMode: c,
  mode: a = "hold",
}) {
  let { host: l } = Ye(),
    { credentials: V } = _e(),
    C = vt(),
    b = Cle(),
    D = Va(),
    R = {
      onTranscript: e,
      onError: t,
      enabled: r,
      focusMode: c,
      mode: a,
      isFocused: D,
    },
    [v] = d(
      () =>
        new L({
          host: l,
          clock: C,
          voiceStore: b,
          loadVoiceModule: () => import("./checkRecordingAvailability.sby0acpc.js"),
          connectVoiceStream: (k, u, S) => Unn(k, u, S),
          credentials: V,
          isVoiceStreamAvailable: () => $nn(),
          probeVoiceConnectivity: () => Fnn(),
          getVoiceKeyterms: () => O(),
          inputs: R,
        }),
    );
  (E(() => {
    v.setInputs(R);
  }),
    E(() => v.dispose, [v]));
  let { state: _ } = Me(v);
  return {
    state: _,
    handleKeyEvent: v.handleKeyEvent,
    cancelRecording: v.cancelRecording,
  };
}
export { we as useVoice };

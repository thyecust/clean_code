// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { sleep, withTimeout } from "../共享小工具-未细化/async-timeout-utils.js";
import { logEvent } from "../共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { l, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { writeFileAtomic } from "../安全文件系统(FS加固)/atomic-file-write.js";
import { registerCleanup, isCleanupDrainStarted, jsonStringify, logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "../../02-功能模块/Bedrock-Vertex/chunk-5ndhfaq9.js";
import { pluralize, truncateToCodeUnits, beforeFirst } from "../核心工具-字符串与文本/string-utils.js";
import { ja, $nt, env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { Bs } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { NONINTERACTIVE_GIT_ENV, applyGitConfigEnv, execFileNoThrow, execFileNoThrowWithCwd } from "../../02-功能模块/Git-Worktree/git-exec-hardening.js";
import { GITHUB_HOST, GITHUB_SSH_URL_PREFIXES } from "../共享小工具-未细化/git-host-utils.js";
import { setAgentProxyNote, isShuttingDown, MAX_PROXY_FAILURE_HISTORY, setAgentProxyStatusUrl, recordAgentProxyFailure } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isRetryableFsError } from "../安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { c2e, u2e, qlr, zlr, PEM_CERT_BLOCK_RE, getWebSocketTLSOptions, getWebSocketProxyUrl } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { getSessionAccessToken } from "../../02-功能模块/认证-OAuth登录/credential-file-descriptors.js";
import { PLACEHOLDER_CREDENTIAL_VALUE } from "../核心工具-进程与信号/subprocess-env-scrub.js";
import { AGENT_PROXY_PATH, setAgentProxyEndpoint } from "../../02-功能模块/Artifact发布-渲染/chunk-01ymf0ar.js";
import { computeRetryDelayMs } from "../核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import { BASE_CA_BUNDLE_ENV_VARS, SYSTEM_CA_TRUST_BUNDLE_ENV_VARS, CA_BUNDLE_ENV_VARS, SYSTEM_CA_TRUST_ENV_DEFAULTS } from "../共享小工具-未细化/ca-trust-env-vars.js";
import { decodeProtoFields } from "../共享小工具-未细化/protobuf-decoding.js";
import { getXdgDataHome } from "../共享小工具-未细化/user-directories.js";
import { execFile } from "child_process";
import { constants, statSync } from "fs";
import {
  access,
  mkdir as Pe,
  readFile as te,
  stat as mt,
  unlink as Ce,
  writeFile as Ae,
} from "fs/promises";
import { homedir as ve, tmpdir } from "os";
import { delimiter, join as I, parse } from "path";
function Ne(t) {
  return;
}
import { createHash } from "crypto";
import { isIP } from "net";
var De = "<non-linux>";
var Le = 524288,
  At = 30000,
  Ue = 0,
  vt = 1,
  Rt = 2,
  Ot = 3,
  He = 4,
  ue = 2,
  Bt = {
    openTimeoutMs: 1e4,
    openMaxAttempts: 3,
    openBackoffBaseMs: 100,
    sendHighWater: 4194304,
    sendLowWater: 1048576,
    drainPollMs: 50,
    sendPauseAfterPendingBytes: 0,
    pendingBytesCap: 33554432,
    sendStallTimeoutMs: 180000,
    receiveHighWater: 4194304,
    receiveLowWater: 1048576,
    downloadQueuedReportBytes: 16777216,
    uploadQueuedReportBytes: 16777216,
    poolMax: 4,
    poolIdleTtlMs: 1e4,
    poolMaxAgeMs: 2700000,
    finGraceMs: 1e4,
  };
function pe(t) {
  let e = t.length,
    o = [],
    r = e;
  while (r > 127) (o.push((r & 127) | 128), (r >>>= 7));
  o.push(r);
  let s = new Uint8Array(1 + o.length + e);
  return ((s[0] = 10), s.set(o, 1), s.set(t, 1 + o.length), s);
}
function ce(t, e = 0) {
  let o = [16, t];
  if (e !== 0) o.push(24, e);
  return new Uint8Array(o);
}
function $t(t) {
  let e = { data: t.subarray(0, 0), control: Ue, version: 0 };
  return decodeProtoFields(t, {
    onVarint(r, s) {
      if (r === 2) e.control = s;
      else if (r === 3) e.version = s;
    },
    onBytes(r, s) {
      if (r === 1) e.data = s;
    },
  })
    ? e
    : null;
}
function Q(t) {
  let e = c2e(t);
  if (e.startsWith("*.")) return "*." + Q(e.slice(2));
  let o = e.replace(/\.+$/, "").toLowerCase(),
    r = u2e(o).replace(/\.+$/, "");
  return r !== "" ? r : o;
}
function kt(t) {
  let e = t.split(".").map(Number);
  return (
    e[0] === 10 ||
    (e[0] === 172 && e[1] >= 16 && e[1] <= 31) ||
    (e[0] === 192 && e[1] === 168) ||
    (e[0] === 100 && e[1] >= 64 && e[1] <= 127)
  );
}
function Nt(t, e) {
  let o = Q(t);
  for (let r of e) {
    let s = Q(r);
    if (s === "") continue;
    if (s === "*") return !0;
    if (s.startsWith("*.")) {
      let c = s.slice(1);
      if (o.endsWith(c)) return !0;
      continue;
    }
    if (!s.includes("*")) {
      if (o === s) return !0;
      continue;
    }
    if (
      new RegExp(
        "^" +
          s
            .split("*")
            .map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
            .join("[^.]+") +
          "$",
      ).test(o)
    )
      return !0;
  }
  return !1;
}
function It(t) {
  let e = Q(t);
  if (
    e === "localhost" ||
    e === "ip6-localhost" ||
    e === "ip6-loopback" ||
    e === "metadata.google.internal" ||
    e === "instance-data" ||
    e === "instance-data.ec2.internal" ||
    e.endsWith(".localhost")
  )
    return "blocked_hostname";
  let o = e.normalize("NFKC");
  if (o.includes("[") || o.includes(":")) return "ipv6_literal";
  let r = e.split("."),
    s = /^(0|[1-9]\d{0,2})$/;
  if (!(r.length === 4 && r.every((u) => s.test(u) && Number(u) <= 255)))
    return zlr(e) !== null || qlr(e) ? "noncanonical_ipv4" : null;
  let c = r.map(Number);
  if (c[0] === 0) return "unspecified";
  if (c[0] === 127) return "loopback";
  if (c[0] === 169 && c[1] === 254) return "link_local";
  if (e === "100.100.100.200") return "metadata_alibaba";
  if (e === "168.63.129.16") return "metadata_azure";
  if (e === "192.0.0.192") return "metadata_reserved";
  return null;
}
function Lt(t) {
  if (!t) return "peer_unreadable";
  if (t.includes(":")) return Ht(t);
  let e = t.split(".").map(Number);
  if (e.length !== 4 || e.some((o) => !Number.isFinite(o) || o < 0 || o > 255))
    return "peer_unreadable";
  return We(e, t);
}
function We(t, e) {
  if (t[0] === 0) return "unspecified";
  if (t[0] === 127) return "loopback";
  if (t[0] === 169 && t[1] === 254) return "link_local";
  if (e === "100.100.100.200") return "metadata_alibaba";
  if (e === "168.63.129.16") return "metadata_azure";
  if (e === "192.0.0.192") return "metadata_reserved";
  return null;
}
function Ht(t) {
  let e = Mt(t);
  if (!e) return "peer_unreadable";
  let o = e.slice(0, 12),
    r = o.every((u, d) => u === (d === 10 || d === 11 ? 255 : 0)),
    s = o.every((u) => u === 0),
    p =
      e[0] === 0 &&
      e[1] === 100 &&
      e[2] === 255 &&
      e[3] === 155 &&
      o.slice(4).every((u) => u === 0);
  if (r || s || p) {
    let u = [e[12], e[13], e[14], e[15]],
      d = u.join(".");
    if (s && u.every((m) => m === 0)) return "unspecified";
    if (s && u[0] === 0 && u[1] === 0 && u[2] === 0 && u[3] === 1)
      return "loopback";
    return We(u, d);
  }
  if (((e[0] ?? 0) & 224) === 32) return null;
  if ((e[0] ?? 0) === 254 && ((e[1] ?? 0) & 192) === 128) return "link_local";
  if (((e[0] ?? 0) & 254) === 252) return "unique_local";
  return "v6_non_global";
}
function Mt(t) {
  let e = t.indexOf("%"),
    r = (e >= 0 ? t.slice(0, e) : t).toLowerCase().split("::");
  if (r.length > 2) return null;
  let s = r[0] ? r[0].split(":") : [],
    p = r.length === 2 && r[1] ? r[1].split(":") : [],
    c = r.length === 2 ? p : s,
    u = c.at(-1),
    d = [];
  if (u && u.includes(".")) {
    let L = u.split(".").map(Number);
    if (
      L.length !== 4 ||
      L.some((O) => !Number.isFinite(O) || O < 0 || O > 255)
    )
      return null;
    ((d = L), c.pop());
  }
  let m = (L) => {
      let O = [];
      for (let N of L) {
        if (!/^[0-9a-f]{1,4}$/.test(N)) return null;
        let M = parseInt(N, 16);
        O.push(M >> 8, M & 255);
      }
      return O;
    },
    h = m(r.length === 2 ? s : []),
    _ = m(c);
  if (h === null || _ === null) return null;
  let w = r.length === 2 ? h : _,
    T = r.length === 2 ? (_ ?? []).concat(d) : d,
    S = 16 - w.length - T.length;
  if (S < 0 || (r.length === 1 && S !== 0)) return null;
  let v = w.concat(Array(S).fill(0), T);
  return v.length === 16 ? v : null;
}
function Ye(t, e, o) {
  let r = e.directUpstream;
  if (!r) return;
  if (r.writeBuf.length > 0)
    (r.writeBuf.push(o), (r.writeBufBytes += o.length));
  else {
    let s = r.write(o);
    if (s < o.length)
      (r.writeBuf.push(o.subarray(s)), (r.writeBufBytes += o.length - s));
  }
  if (r.writeBufBytes > e.limits.pendingBytesCap) {
    (E(
      e.ctx,
      "direct_writebuf_cap",
      `direct-upstream write buffer exceeded ${e.limits.pendingBytesCap} bytes`,
      R(e),
    ),
      (e.closed = !0));
    try {
      r.end();
    } catch {}
    t.end();
  }
}
var Xe = "[\\u0000-\\u001f\\u007f-\\u009f]",
  Gt = new RegExp(Xe, "u"),
  de = new RegExp(Xe, "gu");
function E(t, e, o, r) {
  let s = {
    ts: new Date().toISOString(),
    kind: e,
    detail: o.replace(de, "?"),
    host: r?.replace(de, "?"),
  };
  if ((t.failures.push(s), t.failures.length > MAX_PROXY_FAILURE_HISTORY)) t.failures.shift();
  t.onFailure?.(s);
}
function R(t) {
  return t.connectAuthority || void 0;
}
function je(t, e, o, r, s) {
  t.write(
    `HTTP/1.1 ${e} ${o}\r
Content-Type: ${r}\r
Content-Length: ${Buffer.byteLength(s)}\r
Connection: close\r
\r
` + s,
  );
}
function k(t, e, o, r) {
  je(
    t,
    e,
    o,
    "text/plain; charset=utf-8",
    `agent-proxy relay: ${r}
GET /__agentproxy/status on this proxy port shows proxy state and recent failures.
`,
  );
}
function Ut(t, e, o) {
  return {
    connectBuf: Buffer.alloc(0),
    pending: [],
    pendingBytes: 0,
    startedAt: Date.now(),
    uploadBytes: 0,
    downloadBytes: 0,
    pendingPeakBytes: 0,
    uploadPauses: 0,
    uploadAborted: !1,
    connectRejected: !1,
    wsOpen: !1,
    established: !1,
    closed: !1,
    connectLine: "",
    connectAuthority: "",
    clientProcess: De,
    wsAttempt: 0,
    paused: !1,
    sendStallBuffered: 0,
    sendStallSince: 0,
    readPaused: !1,
    limits: t,
    pool: e,
    finSeen: !1,
    localClosed: !1,
    ctx: o,
  };
}
function Ft(t, e, o, r) {
  let s = () =>
    new Promise((p, c) => {
      let u = !1,
        d = Ze(t, e),
        m = setTimeout(() => {
          if (u) return;
          u = !0;
          try {
            d.close();
          } catch {}
          c(Error("handshake timeout"));
        }, o);
      ((d.onopen = () => {
        if (u) return;
        ((u = !0), clearTimeout(m));
        try {
          d.close();
        } catch {}
        p();
      }),
        (d.onerror = (h) => {
          if (u) return;
          ((u = !0),
            clearTimeout(m),
            c(Error(h?.message ?? "WebSocket error")));
        }));
    });
  return (async () => {
    let p;
    for (let c = 0; c < r; c++)
      try {
        await s();
        return;
      } catch (u) {
        if (((p = u), c + 1 < r)) await sleep(Math.min(200 * 2 ** c, 2000));
      }
    throw p;
  })();
}
var Wt = 1048576,
  Yt = 33554432;
function Xt(t) {
  return new Promise((e, o) => {
    let r = !1,
      s = Buffer.alloc(0),
      p = Bun.listen({
        hostname: "127.0.0.1",
        port: 0,
        socket: {
          data(h, _) {
            if (r) return;
            s = Buffer.concat([s, _]);
            let w = s.indexOf(`\r
\r
`);
            if (w < 0) return;
            let T =
                /sec-websocket-key: *(\S+)/i.exec(
                  s.subarray(0, w).toString("latin1"),
                )?.[1] ?? "",
              S = createHash("sha1")
                .update(T + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11")
                .digest("base64");
            if (
              (h.write(`HTTP/1.1 101 Switching Protocols\r
Upgrade: websocket\r
Connection: Upgrade\r
Sec-WebSocket-Accept: ${S}\r
\r
`),
              (r = !0),
              typeof h.pause === "function")
            )
              h.pause();
          },
        },
      }),
      c = !1,
      u = (h) => {
        if (c) return;
        ((c = !0), clearTimeout(d));
        try {
          m.close();
        } catch {}
        if ((p.stop(!0), h instanceof Error)) o(h);
        else e(h);
      },
      d = setTimeout((h) => h(Error("handshake timeout")), t, u),
      m = new globalThis.WebSocket(`ws://127.0.0.1:${p.port}/`);
    ((m.binaryType = "arraybuffer"),
      (m.onerror = () => u(Error("WebSocket error"))),
      (m.onclose = () => u(Error("closed before the check completed"))),
      (m.onopen = () => {
        let h = new Uint8Array(Wt);
        try {
          for (let _ = 0; _ < Yt; _ += h.length)
            if ((m.send(h), m.bufferedAmount > 0)) {
              u(!0);
              return;
            }
        } catch {
          u(Error("send failed"));
          return;
        }
        u(!1);
      }));
  });
}
async function Ke(t) {
  let e = t.getToken ?? (() => t.token),
    o = {
      connectHeader: () =>
        "Basic " + Buffer.from(`${t.sessionId}:${e()}`).toString("base64"),
      wsHeader: () => `Bearer ${e()}`,
    },
    r = { ...Bt, ...t.limits },
    s = {
      statusProvider: t.statusProvider,
      failures: [],
      onFailure: t.onFailure,
      downloadQueuedBytes: 0,
      downloadQueuedPeakBytes: 0,
      uploadPausedClients: 0,
      uploadPauses: 0,
      selective: t.selective,
      upstreamOpened: !1,
    },
    p = Kt(t.wsUrl, o, r, s);
  if (t.startupProbe)
    (Ft(t.wsUrl, o, r.openTimeoutMs, r.openMaxAttempts)
      .then(() => {
        logForDebugging("[agent-proxy] startup reachability probe: ok");
      })
      .catch((c) => {
        if (s.upstreamOpened) {
          logForDebugging(
            `[agent-proxy] startup reachability probe failed (${c?.message ?? String(c)}) after a tunnel already opened; ignoring`,
            { level: "warn" },
          );
          return;
        }
        ((s.startupError = (
          `hosted agent-proxy unreachable at startup: ${c?.message ?? String(c)}. Tunneled CONNECTs get one dial attempt each and return 502 until ` +
          "one reaches upstream (which clears this) \u2014 inference is " +
          "force-tunneled, so a session without the hosted proxy is non-functional regardless. Check network egress to the CCR base URL."
        ).replace(de, "?")),
          logForDebugging(`[agent-proxy] ${s.startupError}`, { level: "error" }),
          logFeatureSad("agent_proxy_init", "agent_proxy_startup_probe_failed"));
      }),
      Xt(r.openTimeoutMs)
        .then((c) => {
          if (((s.bufferedAmountTrusted = c), !c))
            (logForDebugging(
              "[agent-proxy] WebSocket.bufferedAmount stays 0 with bytes queued: the upload gate cannot engage on this runtime",
              { level: "warn" },
            ),
              logFeatureSad("agent_proxy_init", "agent_proxy_buffered_amount_untrusted"));
        })
        .catch((c) => {
          logForDebugging(
            `[agent-proxy] bufferedAmount self-check did not run: ${c?.message ?? String(c)}`,
            { level: "warn" },
          );
        }));
  return (logForDebugging(`[agent-proxy] relay listening on 127.0.0.1:${p.port}`), p);
}
function Me(t) {
  if (
    ((t.ctx.downloadQueuedBytes -= t.writeBufBytes),
    (t.writeBufBytes = 0),
    (t.writeBuf = []),
    ne(t),
    Y(t),
    t.writeBufPeakBytes > t.limits.receiveHighWater ||
      t.writeBufPeakBytes >= t.limits.downloadQueuedReportBytes)
  )
    logEvent("tengu_agent_proxy_download_queue", {
      download_queued_peak_bytes: t.writeBufPeakBytes,
    });
  if (
    ((t.writeBufPeakBytes = 0),
    t.uploadPauses > 0 ||
      t.pendingPeakBytes >= t.limits.uploadQueuedReportBytes)
  )
    logEvent("tengu_agent_proxy_upload_queue", {
      upload_queued_peak_bytes: t.pendingPeakBytes,
      upload_pauses: t.uploadPauses,
      upload_aborted: t.uploadAborted,
    });
  ((t.pendingPeakBytes = 0), (t.uploadPauses = 0));
}
function jt() {
  return "pause" in globalThis.WebSocket.prototype;
}
function Kt(t, e, o, r) {
  let s = [],
    p = Bun.listen({
      hostname: "127.0.0.1",
      port: 0,
      socket: {
        open(c) {
          if (
            ((c.data = {
              ...Ut(o, s, r),
              writeBuf: [],
              writeBufBytes: 0,
              writeBufPeakBytes: 0,
              endAfterDrain: !1,
              destroyAfterDrain: !1,
            }),
            typeof c.pause === "function")
          )
            c.data.clientRead = c;
        },
        data(c, u) {
          let d = c.data;
          if (d.closed) return;
          let m = {
            write: (h) => {
              let _ = typeof h === "string" ? Buffer.from(h, "utf8") : h,
                w = d.writeBuf.length > 0 ? 0 : c.write(_);
              if (w < 0 || w === _.length) return;
              let T = _.subarray(w);
              if (
                (d.writeBuf.push(T),
                (d.writeBufBytes += T.length),
                (d.ctx.downloadQueuedBytes += T.length),
                d.writeBufBytes > d.writeBufPeakBytes)
              )
                d.writeBufPeakBytes = d.writeBufBytes;
              if (d.ctx.downloadQueuedBytes > d.ctx.downloadQueuedPeakBytes)
                d.ctx.downloadQueuedPeakBytes = d.ctx.downloadQueuedBytes;
              if (d.writeBufBytes > d.limits.receiveHighWater) zt(d);
            },
            end: () => {
              if ((Y(d), d.writeBuf.length > 0)) {
                d.endAfterDrain = !0;
                return;
              }
              c.end();
            },
            destroy: () => {
              if ((Y(d), d.writeBuf.length > 0)) {
                d.destroyAfterDrain = !0;
                return;
              }
              c.terminate();
            },
          };
          ((d.client = m), Vt(m, d, u, t, e));
        },
        drain(c) {
          let u = c.data;
          while (u.writeBuf.length > 0) {
            let d = u.writeBuf[0],
              m = c.write(d);
            if (m < 0) break;
            if (
              ((u.writeBufBytes -= m),
              (u.ctx.downloadQueuedBytes -= m),
              m < d.length)
            ) {
              u.writeBuf[0] = d.subarray(m);
              break;
            }
            u.writeBuf.shift();
          }
          if (u.writeBufBytes <= u.limits.receiveLowWater) ne(u);
          if (u.writeBuf.length > 0) return;
          if (u.destroyAfterDrain) {
            ((u.destroyAfterDrain = !1), c.terminate());
            return;
          }
          if (u.endAfterDrain) ((u.endAfterDrain = !1), c.end());
        },
        close(c) {
          let u = c.data;
          if ((Me(u), Qe(u))) return;
          if (u.localClosed && u.finCloseTimer) return;
          if (!u.closed && et(u)) return;
          D(u);
        },
        error(c, u) {
          logForDebugging(`[agent-proxy] client socket error: ${u.message}`);
          let d = c.data;
          if ((Me(d), d.localClosed && d.finCloseTimer)) return;
          D(d);
        },
      },
    });
  return {
    port: p.port,
    stop: () => {
      (nn(s), p.stop(!0));
    },
  };
}
function Vt(t, e, o, r, s) {
  if (!e.ws && !e.directUpstream && !e.directDialing) {
    if (
      ((e.connectBuf = Buffer.concat([e.connectBuf, o])),
      e.connectBuf[0] === 22)
    ) {
      (logForDebugging(
        "[agent-proxy] client sent TLS to the relay port (HTTPS_PROXY must be an http:// URL)",
        { level: "warn" },
      ),
        logFeatureBad("agent_proxy_request", "agent_proxy_request_tls_to_relay"),
        E(
          e.ctx,
          "tls_to_relay",
          "client opened TLS to the relay port; HTTPS_PROXY must be an http:// URL pointing at this port",
        ),
        (e.closed = !0),
        t.end());
      return;
    }
    let p = e.connectBuf.indexOf(`\r
\r
`);
    if (p === -1) {
      if (e.connectBuf.length > 8192)
        ((e.closed = !0),
          k(
            t,
            400,
            "Bad Request",
            "request headers exceeded 8 KiB before the end of the CONNECT request",
          ),
          t.end(),
          logFeatureBad("agent_proxy_request", "agent_proxy_request_header_too_long"),
          E(e.ctx, "header_too_long", "headers exceeded 8 KiB"));
      return;
    }
    let c = e.connectBuf.subarray(0, p).toString("utf8"),
      u = beforeFirst(
        c,
        `\r
`,
      ),
      d = u.match(/^CONNECT\s+(\S+)\s+HTTP\/1\.[01]$/i);
    if (!d) {
      if (/^GET\s+\/__agentproxy\/status(\?\S*)?\s+HTTP\/1\.[01]$/i.test(u)) {
        let v = {
          ...(e.ctx.statusProvider?.() ?? {}),
          startupError: e.ctx.startupError,
          recentRelayFailures: e.ctx.failures,
          downloadQueuedBytes: e.ctx.downloadQueuedBytes,
          downloadQueuedPeakBytes: e.ctx.downloadQueuedPeakBytes,
          downloadReceivePauseSupported: jt(),
          downloadReceiveGateEnabled: Number.isFinite(
            e.limits.receiveHighWater,
          ),
          uploadPausedClients: e.ctx.uploadPausedClients,
          uploadPauses: e.ctx.uploadPauses,
          uploadPauseSupported: e.clientRead !== void 0,
          uploadGateEnabled: Number.isFinite(
            e.limits.sendPauseAfterPendingBytes,
          ),
          bufferedAmountTrusted: e.ctx.bufferedAmountTrusted ?? null,
        };
        (je(
          t,
          200,
          "OK",
          "application/json",
          jsonStringify(v, null, 2) +
            `
`,
        ),
          (e.closed = !0),
          t.end());
        return;
      }
      ((e.closed = !0),
        k(
          t,
          405,
          "Method Not Allowed",
          "this proxy only accepts HTTPS CONNECT tunnels. Plain-HTTP/absolute-form requests are not supported \u2014 common causes are axios releases before 1.16.1 (broken HTTPS proxy handling) or a tool configured with HTTP_PROXY pointing at this relay.",
        ),
        t.end(),
        logFeatureBad("agent_proxy_request", "agent_proxy_request_not_connect"));
      let [w = "", T = ""] = u.split(/\s+/),
        S = w;
      try {
        let v = new URL(T);
        S = `${w} ${v.protocol}//${v.host}`;
      } catch {}
      E(e.ctx, "not_connect", `non-CONNECT request: ${S.slice(0, 120)}`);
      return;
    }
    ((e.connectLine = u), (e.connectAuthority = d[1] ?? ""));
    let m = e.connectBuf.subarray(p + 4);
    if (m.length > 0) {
      if ((le(t, e, Buffer.from(m)), e.closed)) return;
    }
    e.connectBuf = Buffer.alloc(0);
    let h = e.ctx.selective,
      _ = e.connectAuthority;
    if (h && _) {
      let w = _.lastIndexOf(":"),
        T = w > 0 ? _.slice(0, w) : _,
        S = Q(T.replace(/^\[|\]$/g, ""));
      if (Gt.test(S))
        E(e.ctx, "selective_invalid_host", "control byte in CONNECT host", S);
      else if (isIP(S) === 4 && !kt(S));
      else if (!Nt(S, h.includeHosts)) {
        let v = w > 0 ? Number(_.slice(w + 1)) : 443;
        Zt(t, e, S, v);
        return;
      }
    }
    Jt(t, e, r, s);
    return;
  }
  if (e.directUpstream) {
    Ye(t, e, o);
    return;
  }
  if (e.directDialing) {
    le(t, e, Buffer.from(o));
    return;
  }
  if (!e.wsOpen || e.paused) {
    if (
      (le(t, e, Buffer.from(o)),
      !e.closed && e.pendingBytes > e.limits.sendPauseAfterPendingBytes)
    )
      Qt(e);
    return;
  }
  if (((e.redialEligible = !1), e.ws)) (me(e, e.ws, o), qe(e));
}
function le(t, e, o) {
  if (
    (e.pending.push(o),
    (e.pendingBytes += o.length),
    e.pendingBytes > e.pendingPeakBytes)
  )
    e.pendingPeakBytes = e.pendingBytes;
  if (e.pendingBytes > e.limits.pendingBytesCap)
    (logForDebugging(
      `[agent-proxy] pending buffer cap (${e.limits.pendingBytesCap}) exceeded; aborting request`,
      { level: "warn" },
    ),
      Ve(
        t,
        e,
        "pending_overflow",
        e.established
          ? `upload aborted: more than ${e.limits.pendingBytesCap} request bytes buffered while the tunnel was not draining`
          : "too much request data buffered while the upstream tunnel was unavailable (pending buffer cap exceeded)",
      ));
}
function Ve(t, e, o, r) {
  if (
    (logFeatureBad("agent_proxy_request", `agent_proxy_request_${o}`),
    E(e.ctx, o, r, R(e)),
    (e.closed = !0),
    (e.uploadAborted = !0),
    !e.established)
  )
    (k(t, 502, "Bad Gateway", r), t.end());
  else {
    ((e.pending = []), (e.pendingBytes = 0));
    let s = et(e);
    if ((t.destroy(), s)) return;
  }
  D(e);
}
function qe(t) {
  if (t.paused || !t.ws) return;
  if (t.ws.bufferedAmount > t.limits.sendHighWater)
    ((t.paused = !0),
      (t.sendStallBuffered = t.ws.bufferedAmount),
      (t.sendStallSince = Date.now()),
      (t.drainTimer = setInterval(qt, t.limits.drainPollMs, t)));
}
function qt(t) {
  let e = t.ws;
  if (!e || e.readyState !== WebSocket.OPEN || t.closed) {
    F(t);
    return;
  }
  let o = Date.now();
  if (e.bufferedAmount < t.sendStallBuffered)
    ((t.sendStallBuffered = e.bufferedAmount), (t.sendStallSince = o));
  else if (
    t.readPaused &&
    t.client &&
    o - t.sendStallSince > t.limits.sendStallTimeoutMs
  ) {
    F(t);
    let r = Math.round((o - t.sendStallSince) / 1000);
    (logForDebugging(
      `[agent-proxy] tunnel accepted no request bytes for ${r}s; aborting request`,
      { level: "warn" },
    ),
      Ve(
        t.client,
        t,
        "upload_stalled",
        `upload aborted: the tunnel accepted no request bytes for ${r}s`,
      ));
    return;
  }
  if (e.bufferedAmount > t.limits.sendLowWater) return;
  while (t.pending.length > 0 && e.bufferedAmount <= t.limits.sendHighWater) {
    let r = t.pending.shift();
    ((t.pendingBytes -= r.length), (t.redialEligible = !1), me(t, e, r));
  }
  if (
    ((t.sendStallBuffered = e.bufferedAmount),
    (t.sendStallSince = o),
    t.pending.length === 0)
  )
    ((t.paused = !1), F(t), Y(t));
}
function F(t) {
  if (t.drainTimer) (clearInterval(t.drainTimer), (t.drainTimer = void 0));
}
function Qt(t) {
  if (t.readPaused || !t.clientRead) return;
  ((t.readPaused = !0),
    t.uploadPauses++,
    t.ctx.uploadPausedClients++,
    t.ctx.uploadPauses++,
    t.clientRead.pause());
}
function Y(t) {
  if (!t.readPaused || !t.clientRead) return;
  ((t.readPaused = !1), t.ctx.uploadPausedClients--, t.clientRead.resume());
}
function zt(t) {
  let e = t.ws;
  if (!e?.pause || e.readyState !== WebSocket.OPEN || e.isPaused === !0) return;
  e.pause();
}
function ne(t) {
  let e = t.ws;
  if (!e?.resume || e.readyState !== WebSocket.OPEN || e.isPaused === !1)
    return;
  e.resume();
}
function Jt(t, e, o, r) {
  let s = en(e);
  if (s) {
    ((e.ws = s.ws),
      (e.wsOpen = !0),
      (e.pinger = s.pinger),
      (e.wsMeta = s.meta));
    let p = e.pending.slice();
    e.redialEligible = !0;
    let c = !1,
      u = (d) => {
        if (c || e.closed) return;
        if (
          ((c = !0),
          (e.redialEligible = !1),
          logForDebugging(
            `[agent-proxy] pooled ws failed before response (${d}); falling through to fresh dial`,
          ),
          e.openTimer)
        )
          (clearTimeout(e.openTimer), (e.openTimer = void 0));
        if (((e.pooledDeadline = void 0), e.pinger))
          (clearInterval(e.pinger), (e.pinger = void 0));
        s.ws.onopen = s.ws.onmessage = s.ws.onerror = s.ws.onclose = null;
        try {
          s.ws.close();
        } catch {}
        if (
          ((e.ws = void 0),
          (e.wsOpen = !1),
          (e.wsMeta = void 0),
          F(e),
          (e.paused = !1),
          (e.pending = [...p, ...e.pending]),
          (e.pendingBytes = e.pending.reduce((m, h) => m + h.length, 0)),
          e.pendingBytes > e.pendingPeakBytes)
        )
          e.pendingPeakBytes = e.pendingBytes;
        ((e.uploadBytes = 0), fe(t, e, o, r));
      };
    ((e.pooledDeadline = () => {
      if (((e.openTimer = void 0), e.closed || e.established)) return;
      if (e.redialEligible) {
        u("pooled ws unresponsive");
        return;
      }
      ((e.closed = !0),
        logFeatureBad("agent_proxy_request", "agent_proxy_request_ws_error"),
        k(
          t,
          502,
          "Bad Gateway",
          "the pooled tunnel to the CCR agent-proxy became unresponsive before a response was received",
        ),
        t.end(),
        E(
          e.ctx,
          "ws_error",
          "pooled tunnel unresponsive before first response",
          R(e),
        ),
        D(e));
    }),
      (e.openTimer = setTimeout(ln, e.limits.openTimeoutMs, e)),
      ze(t, e, s.ws, u),
      Je(e, s.ws, r.connectHeader()));
    return;
  }
  fe(t, e, o, r);
}
function Zt(t, e, o, r) {
  let s = It(o);
  if (s) {
    ((e.closed = !0),
      k(
        t,
        403,
        "Forbidden",
        `agent-proxy selective relay: normal-networking refused ${o} (${s})`,
      ),
      t.end(),
      logFeatureBad("agent_proxy_request", "agent_proxy_direct_blocked_" + s),
      E(e.ctx, "direct_blocked", s, R(e)));
    return;
  }
  if (!Number.isInteger(r) || r < 1 || r > 65535) {
    ((e.closed = !0),
      k(t, 400, "Bad Request", "invalid CONNECT port"),
      t.end(),
      logFeatureBad("agent_proxy_request", "agent_proxy_request_bad_connect_port"),
      E(e.ctx, "bad_connect_port", "invalid CONNECT port", R(e)));
    return;
  }
  e.directDialing = !0;
  let p = !1,
    c = setTimeout(() => {
      if (e.closed) return;
      ((p = !0),
        (e.closed = !0),
        (e.directDialing = !1),
        k(
          t,
          504,
          "Gateway Timeout",
          `agent-proxy selective relay: direct dial to ${o}:${r} timed out after ${e.limits.openTimeoutMs}ms`,
        ),
        t.end(),
        E(e.ctx, "direct_dial_timeout", `${o}:${r}`, R(e)));
    }, e.limits.openTimeoutMs);
  Bun.connect({
    hostname: o,
    port: r,
    socket: {
      open(u) {
        if ((clearTimeout(c), e.closed || p)) {
          u.end();
          return;
        }
        let d = Lt(u.remoteAddress);
        if (d) {
          (u.end(),
            (e.closed = !0),
            (e.directDialing = !1),
            k(
              t,
              403,
              "Forbidden",
              `agent-proxy selective relay: normal-networking refused ${o} ` +
                `\u2014 resolved to a blocked address (${d})`,
            ),
            t.end(),
            logFeatureBad("agent_proxy_request", "agent_proxy_direct_peer_blocked_" + d),
            E(e.ctx, "direct_peer_blocked", d, R(e)));
          return;
        }
        ((e.directUpstream = {
          write: (m) => u.write(m),
          end: () => u.end(),
          writeBuf: [],
          writeBufBytes: 0,
        }),
          (e.directDialing = !1),
          t.write(`HTTP/1.1 200 Connection Established\r
\r
`),
          (e.established = !0));
        for (let m of e.pending) Ye(t, e, m);
        ((e.pending = []), (e.pendingBytes = 0));
      },
      data(u, d) {
        if (e.closed) return;
        t.write(d);
      },
      drain() {
        let u = e.directUpstream;
        if (!u) return;
        while (u.writeBuf.length > 0) {
          let d = u.writeBuf[0];
          if (!d) {
            u.writeBuf.shift();
            continue;
          }
          let m = u.write(d);
          if (((u.writeBufBytes -= m), m < d.length)) {
            u.writeBuf[0] = d.subarray(m);
            return;
          }
          u.writeBuf.shift();
        }
      },
      close() {
        if (!e.closed) ((e.closed = !0), t.end());
      },
      error(u, d) {
        if ((clearTimeout(c), e.closed)) return;
        if (((e.closed = !0), !e.established))
          (k(
            t,
            502,
            "Bad Gateway",
            `normal-networking dial failed: ${d?.message ?? String(d)}`,
          ),
            t.end());
        else t.destroy();
        E(
          e.ctx,
          e.established ? "direct_upstream_error" : "direct_dial_failed",
          d?.message ?? String(d),
          R(e),
        );
      },
    },
  }).catch((u) => {
    if ((clearTimeout(c), (e.directDialing = !1), e.closed)) return;
    ((e.closed = !0),
      k(
        t,
        502,
        "Bad Gateway",
        `normal-networking dial failed: ${u?.message ?? String(u)}`,
      ),
      t.end(),
      E(e.ctx, "direct_dial_failed", u?.message ?? String(u), R(e)));
  });
}
function en(t) {
  let { pool: e, limits: o } = t;
  while (e.length > 0) {
    let r = e.pop();
    if (r.ws.readyState !== WebSocket.OPEN) {
      clearInterval(r.pinger);
      continue;
    }
    if (
      Date.now() - r.idleSince > o.poolIdleTtlMs ||
      Date.now() - r.meta.openedAt > o.poolMaxAgeMs
    ) {
      clearInterval(r.pinger);
      try {
        r.ws.close();
      } catch {}
      continue;
    }
    return r;
  }
  return;
}
function Qe(t) {
  let { ws: e, wsMeta: o } = t;
  if (
    !e ||
    !o?.v2 ||
    !t.finSeen ||
    e.readyState !== WebSocket.OPEN ||
    !t.established ||
    t.closed ||
    !t.pinger ||
    t.pool.length >= t.limits.poolMax ||
    Date.now() - o.openedAt > t.limits.poolMaxAgeMs
  )
    return !1;
  (F(t), ne(t), Y(t), (e.onmessage = null), (e.onerror = null));
  let r = t.pool;
  return (
    (e.onclose = () => tn(r, e)),
    r.push({ ws: e, pinger: t.pinger, idleSince: Date.now(), meta: o }),
    (t.ws = void 0),
    (t.pinger = void 0),
    (t.wsMeta = void 0),
    !0
  );
}
function tn(t, e) {
  let o = t.findIndex((r) => r.ws === e);
  if (o >= 0) (clearInterval(t[o].pinger), t.splice(o, 1));
}
function nn(t) {
  for (let e of t) {
    (clearInterval(e.pinger), (e.ws.onclose = null));
    try {
      e.ws.close();
    } catch {}
  }
  t.length = 0;
}
function ze(t, e, o, r) {
  ((o.onmessage = (s) => {
    let p =
        s.data instanceof ArrayBuffer
          ? new Uint8Array(s.data)
          : new Uint8Array(Buffer.from(s.data)),
      c = $t(p);
    if (!c) return;
    if (c.control !== Ue) {
      rn(t, e, o, c);
      return;
    }
    if (c.data.length > 0) {
      if (!e.wsMeta?.v2) {
        ge(t, e, "server sent data before HELLO_ACK");
        return;
      }
      if (e.localClosed) return;
      if (!e.established) {
        e.established = !0;
        let u = Buffer.from(c.data.subarray(0, 16))
          .toString("utf8")
          .match(/^HTTP\/1\.[01] ([45]\d\d)/);
        if (u)
          ((e.connectRejected = !0),
            E(
              e.ctx,
              "connect_rejected",
              `gateway answered ${u[1]} to CONNECT (policy denial or upstream failure)`,
              R(e),
            ));
        if (((e.redialEligible = !1), e.pooledDeadline)) {
          if (e.openTimer) (clearTimeout(e.openTimer), (e.openTimer = void 0));
          e.pooledDeadline = void 0;
        }
        logFeatureOk("agent_proxy_request");
      }
      ((e.downloadBytes += c.data.length), t.write(c.data));
    }
  }),
    (o.onerror = (s) => {
      let p = "message" in s ? String(s.message) : "websocket error";
      if ((logForDebugging(`[agent-proxy] ws error: ${p}`), e.closed)) return;
      if (r && e.redialEligible && !e.established) {
        r(`ws error: ${p}`);
        return;
      }
      if (((e.closed = !0), e.localClosed)) {
        D(e);
        return;
      }
      if (!e.established)
        (logFeatureBad("agent_proxy_request", "agent_proxy_request_ws_error"),
          k(
            t,
            502,
            "Bad Gateway",
            `the WebSocket tunnel to the CCR agent-proxy reported an error (${p.slice(0, 120)})`,
          ),
          t.end(),
          E(
            e.ctx,
            "ws_error",
            `tunnel error before response: ${p.slice(0, 120)}`,
            R(e),
          ));
      else Ge(t, e, `tunnel error: ${truncateToCodeUnits(p, 120)}`);
      D(e);
    }),
    (o.onclose = (s) => {
      if (e.closed) return;
      if (r && e.redialEligible && !e.established) {
        r("closed before response");
        return;
      }
      if (((e.closed = !0), e.localClosed)) {
        D(e);
        return;
      }
      if (!e.established)
        (logFeatureBad("agent_proxy_request", "agent_proxy_request_ws_error"),
          k(
            t,
            502,
            "Bad Gateway",
            "the WebSocket tunnel to the CCR agent-proxy closed before a response was received",
          ),
          t.end(),
          E(e.ctx, "ws_error", "tunnel closed before response", R(e)));
      else
        Ge(
          t,
          e,
          `tunnel closed (code ${s.code}${s.reason ? `, ${truncateToCodeUnits(s.reason, 120)}` : ""})`,
          s.code,
        );
      D(e);
    }));
}
function Ge(t, e, o, r) {
  if (e.connectRejected) {
    t.destroy();
    return;
  }
  let s = Date.now() - e.startedAt;
  (logFeatureBad("agent_proxy_request", "agent_proxy_request_ws_closed_mid_exchange", {
    elapsed_ms: s,
    upload_bytes: e.uploadBytes,
    download_bytes: e.downloadBytes,
    upload_paused: e.readPaused,
    pending_bytes: e.pendingBytes,
    ...(r !== void 0 && { close_code: r }),
  }),
    E(
      e.ctx,
      "ws_closed_mid_exchange",
      `${o} after ${Math.round(s / 1000)}s; ${e.uploadBytes} B sent, ${e.downloadBytes} B received, client ${e.readPaused ? "paused" : "reading"}, ${e.pendingBytes} B still queued in the relay`,
      R(e),
    ),
    t.destroy());
}
function rn(t, e, o, r) {
  if (r.control === Rt) {
    if (e.wsMeta && !e.wsMeta.v2) {
      if (r.version !== ue) {
        ge(
          t,
          e,
          `server acknowledged protocol version ${r.version}, expected ${ue}`,
        );
        return;
      }
      if (((e.wsMeta.v2 = !0), e.helloAckDeadline)) {
        if (e.openTimer) (clearTimeout(e.openTimer), (e.openTimer = void 0));
        e.helloAckDeadline = void 0;
      }
      logForDebugging("[agent-proxy] tunnel protocol v2 negotiated");
    }
    return;
  }
  if (!e.wsMeta?.v2) return;
  if (r.control === Ot) {
    on(t, e, o);
    return;
  }
}
function on(t, e, o) {
  if (e.finSeen) return;
  if (e.closed) {
    if (e.finCloseTimer && o.readyState === WebSocket.OPEN)
      ((e.finSeen = !0), o.send(ce(He)), D(e));
    return;
  }
  if (((e.finSeen = !0), e.finCloseTimer))
    (clearTimeout(e.finCloseTimer), (e.finCloseTimer = void 0));
  if (!e.localClosed) t.end();
  if ((F(e), e.openTimer)) (clearTimeout(e.openTimer), (e.openTimer = void 0));
  ((e.pooledDeadline = void 0),
    (e.paused = !1),
    (e.pending = []),
    (e.pendingBytes = 0),
    o.send(ce(He)));
  let r = Qe(e);
  if (((e.closed = !0), !r)) D(e);
}
function Je(t, e, o) {
  let r = `${t.connectLine}\r
Proxy-Authorization: ${o}\r
X-Agent-Proxy-Client-Process: ${t.clientProcess}\r
\r
`;
  e.send(pe(Buffer.from(r, "utf8")));
  for (let s of t.pending) me(t, e, s);
  ((t.pending = []), (t.pendingBytes = 0), Y(t), qe(t));
}
function Ze(t, e) {
  let o = { "Content-Type": "application/proto", Authorization: e.wsHeader() },
    r = new globalThis.WebSocket(t, {
      headers: o,
      proxy: getWebSocketProxyUrl(t),
      tls: getWebSocketTLSOptions() || void 0,
    });
  return ((r.binaryType = "arraybuffer"), r);
}
function fe(t, e, o, r) {
  if (e.wsAttempt === 0) e.probeErrorAtDial = e.ctx.startupError;
  let s = Ze(o, r);
  ((e.ws = s), (e.wsOpen = !1), (e.wsMeta = void 0));
  let p = () => {
      s.onopen = s.onmessage = s.onerror = s.onclose = null;
      try {
        s.close();
      } catch {}
    },
    c = (u) => {
      if (e.closed) return;
      if (e.openTimer) (clearTimeout(e.openTimer), (e.openTimer = void 0));
      (p(), e.wsAttempt++);
      let d = e.probeErrorAtDial,
        m = d ? 1 : e.limits.openMaxAttempts;
      if (e.wsAttempt < m) {
        let _ = e.limits.openBackoffBaseMs * 2 ** (e.wsAttempt - 1);
        (logForDebugging(
          `[agent-proxy] ws open failed (${u}); retry ${e.wsAttempt}/${m - 1} in ${_}ms`,
        ),
          (e.openTimer = setTimeout(fe, _, t, e, o, r)));
        return;
      }
      (logForDebugging(`[agent-proxy] ws open failed (${u}); attempts exhausted`),
        (e.closed = !0),
        logFeatureBad("agent_proxy_request", "agent_proxy_request_ws_error"));
      let h = `could not open the WebSocket tunnel to the CCR agent-proxy (${u.slice(0, 120)}) after ${e.wsAttempt} ${pluralize(e.wsAttempt, "attempt")}`;
      (k(t, 502, "Bad Gateway", d ? `${h}. Also: ${d}` : h),
        t.end(),
        E(
          e.ctx,
          "ws_open_failed",
          `tunnel open failed after ${e.wsAttempt} ${pluralize(e.wsAttempt, "attempt")}: ${u.slice(0, 120)}`,
          R(e),
        ),
        D(e));
    };
  ((e.failOrRetry = c),
    (e.openTimer = setTimeout(sn, e.limits.openTimeoutMs, e)),
    (s.onopen = () => {
      if (e.closed) return;
      if (e.openTimer) (clearTimeout(e.openTimer), (e.openTimer = void 0));
      ((e.failOrRetry = void 0),
        (e.wsOpen = !0),
        (e.wsMeta = { v2: !1, openedAt: Date.now() }),
        (e.ctx.startupError = void 0),
        (e.ctx.upstreamOpened = !0),
        ze(t, e, s),
        s.send(ce(vt, ue)),
        Je(e, s, r.connectHeader()),
        (e.pinger = setInterval(an, At, s)),
        (e.helloAckDeadline = () => {
          ((e.openTimer = void 0),
            (e.helloAckDeadline = void 0),
            ge(t, e, `no HELLO_ACK within ${e.limits.openTimeoutMs}ms`));
        }),
        (e.openTimer = setTimeout(un, e.limits.openTimeoutMs, e)));
    }),
    (s.onerror = (u) => {
      let d = "message" in u ? String(u.message) : "websocket error";
      (logForDebugging(`[agent-proxy] ws error: ${d}`), c(d));
    }),
    (s.onclose = () => c("closed before open")));
}
function an(t) {
  if (t.readyState === WebSocket.OPEN) t.send(pe(new Uint8Array(0)));
}
function sn(t) {
  if (t.ws && t.ws.readyState === WebSocket.CONNECTING)
    (logForDebugging("[agent-proxy] ws open timeout"), t.failOrRetry?.("handshake timeout"));
}
function ln(t) {
  t.pooledDeadline?.();
}
function un(t) {
  t.helloAckDeadline?.();
}
function ge(t, e, o) {
  if (e.closed) return;
  ((e.closed = !0),
    logForDebugging(`[agent-proxy] tunnel protocol v2 negotiation failed: ${o}`, {
      level: "warn",
    }),
    logFeatureBad("agent_proxy_request", "agent_proxy_request_v2_not_acked"),
    k(
      t,
      502,
      "Bad Gateway",
      `requires tunnel protocol v2; the server did not acknowledge the negotiation (${o}) \u2014 server too old or connection broken`,
    ),
    t.end(),
    E(e.ctx, "v2_not_acked", `tunnel protocol v2 not acknowledged: ${o}`, R(e)),
    D(e));
}
function et(t) {
  if (
    !t.wsMeta?.v2 ||
    t.finSeen ||
    t.localClosed ||
    t.ws?.readyState !== WebSocket.OPEN
  )
    return !1;
  if (((t.localClosed = !0), (t.redialEligible = !1), t.openTimer))
    (clearTimeout(t.openTimer), (t.openTimer = void 0));
  return (
    (t.pooledDeadline = void 0),
    (t.finCloseTimer = setTimeout(cn, t.limits.finGraceMs, t)),
    !0
  );
}
function cn(t) {
  if (((t.finCloseTimer = void 0), t.finSeen)) return;
  D(t);
}
function me(t, e, o) {
  if (e.readyState !== WebSocket.OPEN) return;
  t.uploadBytes += o.length;
  for (let r = 0; r < o.length; r += Le) {
    let s = o.subarray(r, r + Le);
    e.send(pe(s));
  }
}
function D(t) {
  if (!t) return;
  if (t.directUpstream) {
    try {
      t.directUpstream.end();
    } catch {}
    t.directUpstream = void 0;
  }
  if (((t.closed = !0), t.pinger)) clearInterval(t.pinger);
  if (t.openTimer) (clearTimeout(t.openTimer), (t.openTimer = void 0));
  if (t.finCloseTimer)
    (clearTimeout(t.finCloseTimer), (t.finCloseTimer = void 0));
  if (
    (F(t),
    ne(t),
    Y(t),
    (t.pending = []),
    (t.pendingBytes = 0),
    (t.failOrRetry = void 0),
    (t.redialEligible = !1),
    (t.pooledDeadline = void 0),
    (t.helloAckDeadline = void 0),
    t.ws && t.ws.readyState <= WebSocket.OPEN)
  )
    try {
      t.ws.close();
    } catch {}
  t.ws = void 0;
}
import {
  mkdir as _e,
  readFile as it,
  realpath,
  rename,
  unlink as z,
  writeFile as ee,
} from "fs/promises";
import { homedir as tt } from "os";
import { dirname, join as U } from "path";
var J = "changeit",
  fn = /[\s'"]/,
  nt = "# >>> ccr-agent-proxy (managed by Claude Code) >>>",
  ye = "# <<< ccr-agent-proxy <<<";
function at(t, e) {
  let o = e?.trim();
  if (o?.includes("javax.net.ssl.trustStore=")) return o;
  let r = `-Djavax.net.ssl.trustStore=${t} -Djavax.net.ssl.trustStorePassword=${J} -Djavax.net.ssl.trustStoreType=PKCS12`;
  return o ? `${r} ${o}` : r;
}
async function st(t) {
  let e = [],
    o = { failureCodes: e },
    r = U(t.stateDir, "agent-proxy-ca.crt");
  try {
    (await _e(t.stateDir, { recursive: !0 }), await ee(r, t.ccrCa, "utf8"));
  } catch (c) {
    return (
      logForDebugging(
        `[agent-proxy] tool trust setup skipped: cannot write CA file: ${l(c)}`,
        { level: "warn" },
      ),
      logFeatureBad("agent_proxy_tool_trust", "ca_file_write_failed"),
      o
    );
  }
  let s = await rt(t.keytoolBin, pn),
    p = await rt(t.certutilBin, () => ja("certutil"));
  if (
    (await Promise.all([
      (async () => {
        if (!s) {
          logForDebugging("[agent-proxy] no keytool found; skipping JVM truststore");
          return;
        }
        let c = await gn(s, r, U(t.stateDir, "java-truststore.p12"), e);
        if (!c) return;
        if (fn.test(c)) {
          (logForDebugging(
            `[agent-proxy] truststore path contains JVM-unsafe characters; not emitting JAVA_TOOL_OPTIONS: ${c}`,
            { level: "warn" },
          ),
            e.push("jvm_unsafe_truststore_path"));
          return;
        }
        ((o.javaTrustStorePath = c),
          await mn(c, t.bazelrcPath ?? "/etc/bazel.bazelrc", e));
      })(),
      (async () => {
        if (!p) {
          logForDebugging(
            "[agent-proxy] certutil not found; skipping NSS trust for browsers",
          );
          return;
        }
        await yn(
          r,
          t.nssDbDirs ?? [U(tt(), ".pki", "nssdb"), U(getXdgDataHome(), "pki", "nssdb")],
          p,
          e,
        );
      })(),
      hn(t.caBundlePath, t.botoConfigPath ?? U(tt(), ".boto"), e),
      _n(t, t.profileDPath ?? "/etc/profile.d/ccr-agent-proxy-ca.sh", e).then(
        (c) => {
          o.profileDPath = c;
        },
      ),
    ]),
    e.length === 0)
  )
    logFeatureOk("agent_proxy_tool_trust");
  else logFeatureSad("agent_proxy_tool_trust", e[0]);
  return o;
}
async function rt(t, e) {
  if (t)
    return realpath(t).catch(() => {
      return;
    });
  return (await e()) ?? void 0;
}
async function pn() {
  let t = [
      await ja("keytool"),
      a.JAVA_HOME ? U(a.JAVA_HOME, "bin", "keytool") : void 0,
    ],
    e;
  for (let o of t) {
    if (!o) continue;
    let r = await realpath(o).catch(() => {
      return;
    });
    if (!r) continue;
    if (((e ??= r), await lt(r))) return r;
  }
  return e;
}
async function lt(t) {
  let e = dirname(dirname(t));
  for (let o of [
    U(e, "lib", "security", "cacerts"),
    U(e, "jre", "lib", "security", "cacerts"),
  ]) {
    let r = await realpath(o).catch(() => {
      return;
    });
    if (r) return r;
  }
  return;
}
async function gn(t, e, o, r) {
  let s = await lt(t);
  if (!s) {
    (logForDebugging(`[agent-proxy] no JDK cacerts found near ${t}; skipping JVM truststore`),
      r.push("jdk_cacerts_not_found"));
    return;
  }
  let p = `${o}.tmp`;
  await z(p).catch(() => {});
  let c = await V(t, [
    "-importkeystore",
    "-noprompt",
    "-srckeystore",
    s,
    "-srcstorepass",
    J,
    "-destkeystore",
    p,
    "-deststoretype",
    "PKCS12",
    "-deststorepass",
    J,
  ]);
  if (!c.ok) {
    (logForDebugging(`[agent-proxy] keytool importkeystore failed: ${c.detail}`, {
      level: "warn",
    }),
      r.push("java_truststore_seed_failed"),
      await z(p).catch(() => {}));
    return;
  }
  let u = await V(t, [
    "-importcert",
    "-noprompt",
    "-trustcacerts",
    "-alias",
    "ccr-agent-proxy",
    "-file",
    e,
    "-keystore",
    p,
    "-storetype",
    "PKCS12",
    "-storepass",
    J,
  ]);
  if (!u.ok) {
    (logForDebugging(`[agent-proxy] keytool importcert failed: ${u.detail}`, {
      level: "warn",
    }),
      r.push("java_truststore_import_failed"),
      await z(p).catch(() => {}));
    return;
  }
  try {
    await rename(p, o).catch(async () => {
      (await ee(o, await it(p)), await z(p).catch(() => {}));
    });
  } catch (d) {
    (logForDebugging(`[agent-proxy] could not move JVM truststore into place: ${l(d)}`, {
      level: "warn",
    }),
      r.push("java_truststore_publish_failed"));
    return;
  }
  return (logForDebugging(`[agent-proxy] JVM truststore built at ${o}`), o);
}
async function mn(t, e, o) {
  let r = `${nt}
# Bazel's repository downloader runs on its embedded JDK and ignores
# JAVA_TOOL_OPTIONS; carry the agent-proxy truststore via startup options.
startup --host_jvm_args=-Djavax.net.ssl.trustStore=${t} --host_jvm_args=-Djavax.net.ssl.trustStorePassword=${J} --host_jvm_args=-Djavax.net.ssl.trustStoreType=PKCS12
${ye}
`,
    s;
  try {
    s = await it(e, "utf8");
  } catch (h) {
    if (!W(h)) {
      (logForDebugging(`[agent-proxy] could not read ${e}: ${l(h)}`),
        o.push("bazelrc_write_failed"));
      return;
    }
    s = "";
  }
  let p = s.indexOf(nt),
    c = s.indexOf(ye),
    d = (
      p >= 0 && c > p
        ? s.slice(0, p) + s.slice(c + ye.length).replace(/^\n/, "")
        : s
    ).trimEnd(),
    m = d
      ? `${d}

${r}`
      : r;
  if (m === s) return;
  try {
    (await ee(e, m, "utf8"),
      logForDebugging(`[agent-proxy] wrote Bazel trust block to ${e}`));
  } catch (h) {
    (logForDebugging(`[agent-proxy] could not write ${e}: ${l(h)}`),
      o.push("bazelrc_write_failed"));
  }
}
async function yn(t, e, o, r) {
  for (let s of e) {
    if (
      !(await _e(s, { recursive: !0 }).then(
        () => !0,
        (m) => (logForDebugging(`[agent-proxy] could not create NSS dir ${s}: ${l(m)}`), !1),
      ))
    ) {
      r.push("nss_add_failed");
      continue;
    }
    let c = `sql:${s}`;
    await V(o, ["-D", "-d", c, "-n", "ccr-agent-proxy"]);
    let u = ["-A", "-d", c, "-t", "C,,", "-n", "ccr-agent-proxy", "-i", t],
      d = await V(o, u);
    if (!d.ok)
      (await V(o, ["-N", "--empty-password", "-d", c]), (d = await V(o, u)));
    if (d.ok) logForDebugging(`[agent-proxy] MITM CA added to NSS DB at ${s}`);
    else
      (logForDebugging(`[agent-proxy] certutil -A failed for ${s}: ${d.detail}`),
        r.push("nss_add_failed"));
  }
}
async function hn(t, e, o) {
  let r = `[Boto]
ca_certificates_file = ${t}
`;
  try {
    (await ee(e, r, { flag: "wx", mode: 420 }),
      logForDebugging(`[agent-proxy] wrote ${e} for gsutil trust`));
  } catch (s) {
    if (A(s) === "EEXIST") return;
    (logForDebugging(`[agent-proxy] could not write ${e}: ${l(s)}`),
      o.push("boto_write_failed"));
  }
}
async function _n(t, e, o) {
  if (!t.hasSystemCa) {
    await z(e).catch(() => {});
    return;
  }
  let r = [
    "# Managed by Claude Code (CCR agent-proxy). Re-exports CA-trust env",
    "# vars for login shells that start from a scrubbed environment. Each",
    "# export is set-if-absent so an explicit value in the shell wins.",
    "# HTTPS_PROXY is intentionally NOT set here: the relay port is",
    "# ephemeral and persisting it would break all HTTPS in login shells",
    "# once the relay process exits. Scrubbed login shells dial direct.",
    `if [ -r ${ut(t.caBundlePath)} ]; then`,
  ];
  for (let p of [...BASE_CA_BUNDLE_ENV_VARS, ...SYSTEM_CA_TRUST_BUNDLE_ENV_VARS]) r.push("  " + ot(p, t.caBundlePath));
  for (let [p, c] of Object.entries(SYSTEM_CA_TRUST_ENV_DEFAULTS)) r.push("  " + ot(p, c));
  r.push("fi");
  let s =
    r.join(`
`) +
    `
`;
  try {
    return (
      await _e(dirname(e), { recursive: !0 }),
      await ee(e, s, { mode: 420 }),
      logForDebugging(`[agent-proxy] wrote ${e} for login-shell trust`),
      e
    );
  } catch (p) {
    (logForDebugging(`[agent-proxy] could not write ${e}: ${l(p)}`),
      o.push("profile_d_write_failed"));
    return;
  }
}
function ot(t, e) {
  return `if [ -z "\${${t}:-}" ]; then ${t}=${ut(e)}; fi; export ${t}`;
}
function ut(t) {
  return `'${t.replace(/'/g, "'\\''")}'`;
}
async function V(t, e) {
  let o = await execFileNoThrow(t, e, {
    timeout: 20000,
    preserveOutputOnError: !0,
    useCwd: !1,
  });
  if (o.code === 0) return { ok: !0, stdout: o.stdout, detail: "" };
  return {
    ok: !1,
    stdout: o.stdout,
    detail: `${o.error ?? `exit ${o.code}`} ${o.stderr.slice(0, 200)}`.trim(),
  };
}
var En = "/run/ccr/session_token",
  ht = [
    "/etc/ssl/certs/ca-certificates.crt",
    "/etc/pki/tls/certs/ca-bundle.crt",
    "/etc/ssl/cert.pem",
  ],
  _t = [
    "localhost",
    "127.0.0.1",
    "::1",
    "127.0.0.0/8",
    "0.0.0.0/8",
    "::",
    "169.254.0.0/16",
    "api.anthropic.com",
    "api-staging.anthropic.com",
    "api-pr-preview.anthropic.com",
    "mcp-proxy.anthropic.com",
    "mcp-proxy-staging.anthropic.com",
    "registry.npmjs.org",
    "jsr.io",
    "npm.jsr.io",
    "pypi.org",
    "files.pythonhosted.org",
    "index.crates.io",
    "proxy.golang.org",
    "host.docker.internal",
  ],
  Se = [
    ..._t,
    "10.0.0.0/8",
    "172.16.0.0/12",
    "192.168.0.0/16",
    "100.64.0.0/10",
    ".svc.cluster.local",
    "*.svc.cluster.local",
  ].join(","),
  Pn = _t.join(","),
  An = [
    "127.0.0.1",
    "localhost",
    "::1",
    "127.0.0.0/8",
    "0.0.0.0/8",
    "169.254.0.0/16",
    "host.docker.internal",
    "10.0.0.0/8",
    "172.16.0.0/12",
    "192.168.0.0/16",
    "100.64.0.0/10",
    ".svc.cluster.local",
    "*.svc.cluster.local",
  ].join(",");
class wt {
  state = { enabled: !1, noProxy: Se };
  relay = void 0;
  generation = 0;
  activate(t, e) {
    ((this.state = t),
      (this.relay = e),
      setAgentProxyStatusUrl(`${$e(e.port)}/__agentproxy/status`));
  }
  reset() {
    (this.generation++,
      (this.state = { enabled: !1, noProxy: Se }),
      setAgentProxyNote(void 0),
      setAgentProxyEndpoint(void 0),
      setAgentProxyStatusUrl(void 0),
      this.relay?.stop(),
      (this.relay = void 0));
  }
}
var vn = new j(() => new wt());
function re() {
  return vn.of(B().host);
}
async function _gr(t) {
  let e = re(),
    o = process.env.AGENT_PROXY_URL,
    r = process.env.AGENT_PROXY_AUTH_TOKEN;
  (a.unset("AGENT_PROXY_URL"), a.unset("AGENT_PROXY_AUTH_TOKEN"));
  let s = a.CCR_AGENT_PROXY_RELAY_MODE,
    p = a.CCR_AGENT_PROXY_INCLUDE_HOSTS,
    c = a.CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED,
    u = a.CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED;
  if (
    (a.unset("CCR_AGENT_PROXY_RELAY_MODE"),
    a.unset("CCR_AGENT_PROXY_INCLUDE_HOSTS"),
    a.unset("CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED"),
    a.unset("CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED"),
    !Ie(process.env.CLAUDE_CODE_REMOTE))
  )
    return e.state;
  if (!a.CCR_AGENT_PROXY_ENABLED) return e.state;
  let d = process.env.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!d)
    return (
      logForDebugging("[agent-proxy] CLAUDE_CODE_REMOTE_SESSION_ID unset; proxy disabled", {
        level: "warn",
      }),
      logFeatureBad("agent_proxy_init", "agent_proxy_init_no_session_id"),
      e.state
    );
  let m = t?.tokenPath ?? En,
    h = await Un(m),
    { existed: _, token: w } = h;
  if (!w) w = getSessionAccessToken();
  if (!w && !r)
    return (
      logForDebugging("[agent-proxy] no session token; proxy disabled"),
      logFeatureBad("agent_proxy_init", "agent_proxy_init_no_token"),
      e.state
    );
  (logForDebugging(`[agent-proxy] token via ${_ ? m : "sessionIngressAuth"}`),
    Ne((P) => logForDebugging(`[agent-proxy] ${P}`, { level: "warn" })));
  let T =
      o ??
      t?.ccrBaseUrl ??
      process.env.ANTHROPIC_BASE_URL ??
      "https://api.anthropic.com",
    S =
      t?.caBundlePath ??
      (pt()
        ? I(getClaudeConfigDir(), "ccr", "ca-bundle.crt")
        : I(ve(), ".ccr", "ca-bundle.crt")),
    v = t?.systemCaPath
      ? await te(t.systemCaPath, "utf8").catch(() => "")
      : await Fn(),
    L = await Yn(v, S),
    O = L
      ? `${v}
${L}`
      : v,
    N = pt(),
    M = N ? void 0 : Dn(),
    G;
  if (!o && s === "selective") {
    let P = (p ?? "")
      .split(",")
      .map((q) => q.trim())
      .filter((q) => q.length > 0);
    if (P.length > 0)
      ((G = { includeHosts: P }),
        logForDebugging(
          `[agent-proxy] selective relay: ${P.length} include hosts; unlisted use normal networking`,
        ));
    else
      (logForDebugging(
        "[agent-proxy] CCR_AGENT_PROXY_RELAY_MODE=selective but include-host " +
          "list is empty/unparsable \u2014 FAIL-CLOSED to tunnel-all",
        { level: "warn" },
      ),
        logFeatureSad("agent_proxy_init", "agent_proxy_selective_empty_include"));
  }
  let X = {
      runtime: e,
      generation: e.generation,
      sessionId: d,
      standaloneUrl: o,
      standaloneAuthToken: r,
      token: w,
      unlinkTokenPath: _ ? m : void 0,
      baseUrl: T,
      caBundlePath: S,
      hasSystemCa: v !== "",
      localCa: O,
      toolScoped: N,
      selective: G,
      receiveGateDisabled: Boolean(c),
      uploadGateDisabled: Boolean(u),
      installedClisScan: M,
      opts: t,
    },
    K = await Tt(X, 1);
  if (K.outcome === "retry")
    (logFeatureSad("agent_proxy_init", "agent_proxy_init_ca_exhausted_retrying"),
      $n(X, K).catch((P) => {
        (logForDebugging(`[agent-proxy] retry loop crashed: ${l(P)}; proxy stays disabled`, {
          level: "warn",
        }),
          logFeatureBad("agent_proxy_init", "agent_proxy_init_retry_loop_crashed"));
      }));
  return e.state;
}
var ct = 300000,
  Rn = 3600000;
function bt(t, e) {
  if (t.generation !== e || t.state.enabled || isCleanupDrainStarted()) return "exit";
  return isShuttingDown() ? "defer" : null;
}
function Bn(t, e) {
  return Math.min(computeRetryDelayMs(t - 1, e, ct), ct);
}
async function $n(t, e) {
  let { runtime: o, generation: r, opts: s } = t,
    p = Date.now(),
    c = s?.retryBadAfterMs ?? Rn,
    u = !1;
  for (let d = 2; ; d++) {
    let m = s?.retryDelayMs?.(d) ?? Bn(d, e.retryAfter);
    (logForDebugging(`[agent-proxy] ${e.detail}; attempt ${d} in ${(m / 1000).toFixed(1)}s`, {
      level: "warn",
    }),
      await sleep(m, void 0, { unref: !0 }));
    let h = bt(o, r);
    if (h === "exit") return;
    if (h === "defer") continue;
    let _ = await Tt(t, d);
    if (_.outcome !== "retry") return;
    if (((e = _), !u && Date.now() - p >= c))
      ((u = !0),
        logForDebugging(
          `[agent-proxy] ${e.detail}; still failing after ${d} attempts over ${Math.round((Date.now() - p) / 60000)} min \u2014 counting as exhausted, retrying anyway`,
          { level: "warn" },
        ),
        logFeatureBad("agent_proxy_init", "agent_proxy_init_ca_exhausted"));
  }
}
async function Tt(t, e) {
  let {
      runtime: o,
      sessionId: r,
      standaloneUrl: s,
      standaloneAuthToken: p,
      token: c,
      unlinkTokenPath: u,
      baseUrl: d,
      caBundlePath: m,
      hasSystemCa: h,
      localCa: _,
      toolScoped: w,
      selective: T,
      receiveGateDisabled: S,
      uploadGateDisabled: v,
      installedClisScan: L,
      opts: O,
    } = t,
    N = await Kn(d, _, m, {
      budgetMs: O?.caFetchBudgetMs ?? (e === 1 ? 5000 : 15000),
      tries: e === 1 ? 3 : 1,
    });
  if (N.outcome === "retry") return N;
  if (N.outcome === "fatal")
    return (
      logForDebugging(`[agent-proxy] ${N.detail}; proxy disabled`, { level: "warn" }),
      logFeatureBad("agent_proxy_init", `agent_proxy_init_ca_${N.code}`),
      N
    );
  let M = N.ccrCa;
  if (!w) await Vn(O?.awsConfigPath ?? I(ve(), ".aws", "config"));
  try {
    let G = d.replace(/^http/, "ws") + AGENT_PROXY_PATH + "/ws",
      X = I(m, "..", "README.md"),
      K = p ?? c ?? "",
      P = await Ke({
        wsUrl: G,
        sessionId: r,
        token: K,
        getToken: p ? () => K : () => getSessionAccessToken() || K,
        selective: T,
        startupProbe: !0,
        limits: {
          ...(S && { receiveHighWater: 1 / 0 }),
          ...(v && {
            sendPauseAfterPendingBytes: 1 / 0,
            sendStallTimeoutMs: 1 / 0,
          }),
        },
        statusProvider: () => ({
          ...o.state,
          readmePath: X,
          gitConfigInjection: Ee(),
          gitSshRewrite: Ee() && Oe(),
        }),
        onFailure: recordAgentProxyFailure,
      }),
      q = registerCleanup(async () => P.stop()),
      H = {
        enabled: !0,
        port: P.port,
        caBundlePath: m,
        hasSystemCa: h,
        noProxy: T ? An : s ? Pn : Se,
        selective: Boolean(T),
        standalone: Boolean(s),
        toolScoped: w,
        installedProxyPreconfiguredClis: await L,
      },
      ke = bt(o, t.generation);
    if (ke)
      return (
        P.stop(),
        q(),
        ke === "exit"
          ? { outcome: "stale" }
          : {
              outcome: "retry",
              detail: "shutdown claimed during bring-up",
              retryAfter: null,
            }
      );
    if ((o.activate(H, P), !T && !s && !w))
      setAgentProxyEndpoint({ proxyUrl: $e(P.port), ca: Ct(_, M) });
    if (w) {
      let C = !1,
        [ie, ae] = await Promise.all([
          a.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG
            ? kn(P.port, m).catch(
                (se) => (
                  logForDebugging(
                    `[agent-proxy] governed git config append failed: ${l(se)}`,
                    { level: "warn" },
                  ),
                  logFeatureSad("agent_proxy_tool_scoped", "git_config_append_failed"),
                  (C = !0),
                  !1
                ),
              )
            : !1,
          a.CLAUDE_CODE_AGENT_PROXY_GH_SHIM
            ? In(P.port, m).catch((se) => {
                (logForDebugging(`[agent-proxy] gh shim write failed: ${l(se)}`, {
                  level: "warn",
                }),
                  logFeatureSad("agent_proxy_tool_scoped", "gh_shim_write_failed"),
                  (C = !0));
                return;
              })
            : void 0,
        ]);
      if (ae) H.ghShimDir = ae;
      if (!C)
        logFeatureOk("agent_proxy_tool_scoped", { git_config: ie, gh_shim: Boolean(ae) });
    }
    if (
      (logForDebugging(`[agent-proxy] enabled on 127.0.0.1:${P.port}`),
      logFeatureOk("agent_proxy_init", { attempts: e }),
      setAgentProxyNote(xe(m, void 0)),
      Ae(X, Gn(P.port, m), "utf8")
        .then(() => {
          if (o.state !== H) return;
          setAgentProxyNote(xe(m, X));
        })
        .catch((C) => {
          if (
            (logForDebugging(
              `[agent-proxy] README write failed: ${C instanceof Error ? C.message : String(C)}`,
            ),
            o.state !== H)
          )
            return;
          setAgentProxyNote(xe(m, void 0));
        }),
      Mn()
        .then((C) => {
          if (C.length > 0 && o.state === H)
            ((H.gitConfigConflicts = C),
              logForDebugging(
                `[agent-proxy] git config may defeat proxy routing: ${C.join(", ")}`,
                { level: "warn" },
              ));
        })
        .catch(() => {}),
      !w)
    )
      jn(M, O?.systemTrustTargets ?? Xn).catch(() => {});
    if (O?.toolTrust !== !1 && !w)
      st({
        ccrCa: M,
        caBundlePath: m,
        hasSystemCa: H.hasSystemCa ?? !1,
        stateDir: I(m, ".."),
        ...(O?.toolTrust ?? {}),
      })
        .then((C) => {
          if (o.state !== H) return;
          if (C.javaTrustStorePath) H.javaTrustStorePath = C.javaTrustStorePath;
          if (C.profileDPath) {
            let ie = C.profileDPath;
            registerCleanup(() => Ce(ie).catch(() => {}));
          }
          if (C.failureCodes.length > 0)
            H.toolTrustFailureCodes = C.failureCodes;
        })
        .catch((C) => {
          (logForDebugging(
            `[agent-proxy] tool trust setup failed: ${C instanceof Error ? C.message : String(C)}`,
            { level: "warn" },
          ),
            logFeatureSad("agent_proxy_tool_trust", "setup_threw"));
        });
    if (u)
      await Ce(u).catch(() => {
        logForDebugging("[agent-proxy] token file unlink failed", { level: "warn" });
      });
    return { outcome: "ok" };
  } catch (G) {
    return (
      logForDebugging(
        `[agent-proxy] relay start failed: ${G instanceof Error ? G.message : String(G)}; proxy disabled`,
        { level: "warn" },
      ),
      logFeatureBad("agent_proxy_init", "agent_proxy_init_relay_start_failed"),
      { outcome: "fatal" }
    );
  }
}
var Re = [
    {
      clis: ["gh"],
      realCredentialEnv: ["GH_TOKEN", "GITHUB_TOKEN"],
      placeholders: { GH_TOKEN: PLACEHOLDER_CREDENTIAL_VALUE, GITHUB_TOKEN: PLACEHOLDER_CREDENTIAL_VALUE },
    },
    {
      clis: ["aws"],
      realCredentialEnv: [
        "AWS_ACCESS_KEY_ID",
        "AWS_SECRET_ACCESS_KEY",
        "AWS_SESSION_TOKEN",
        "AWS_PROFILE",
        "AWS_SHARED_CREDENTIALS_FILE",
        "AWS_CONFIG_FILE",
        "AWS_WEB_IDENTITY_TOKEN_FILE",
        "AWS_ROLE_ARN",
        "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
        "AWS_CONTAINER_CREDENTIALS_FULL_URI",
      ],
      placeholders: { AWS_ACCESS_KEY_ID: PLACEHOLDER_CREDENTIAL_VALUE, AWS_SECRET_ACCESS_KEY: PLACEHOLDER_CREDENTIAL_VALUE },
    },
    {
      clis: ["gcloud", "bq", "gsutil"],
      realCredentialEnv: [
        "CLOUDSDK_AUTH_ACCESS_TOKEN",
        "GOOGLE_APPLICATION_CREDENTIALS",
      ],
      placeholders: { CLOUDSDK_AUTH_ACCESS_TOKEN: PLACEHOLDER_CREDENTIAL_VALUE },
    },
  ],
  dt = Re.flatMap((t) => t.clis).sort(),
  qit = Re.flatMap((t) => Object.keys(t.placeholders)),
  xt = 1000;
function ygr() {
  let t = re().state;
  if (!t.enabled || !t.port || !t.caBundlePath) {
    if (process.env.HTTPS_PROXY && process.env.SSL_CERT_FILE) {
      let r = {};
      for (let s of [
        "HTTPS_PROXY",
        "https_proxy",
        "NO_PROXY",
        "no_proxy",
        ...CA_BUNDLE_ENV_VARS,
        ...Object.keys(SYSTEM_CA_TRUST_ENV_DEFAULTS),
        ...qit,
      ])
        if (process.env[s]) r[s] = process.env[s];
      return r;
    }
    return {};
  }
  if (t.toolScoped) {
    let r = {};
    if (t.ghShimDir) {
      let s = process.env.PATH ?? "";
      r.PATH = s ? `${t.ghShimDir}${delimiter}${s}` : t.ghShimDir;
    }
    return r;
  }
  let e = $e(t.port),
    o = {
      HTTPS_PROXY: e,
      https_proxy: e,
      NO_PROXY: t.noProxy,
      no_proxy: t.noProxy,
    };
  for (let r of BASE_CA_BUNDLE_ENV_VARS) o[r] = t.caBundlePath;
  if (t.hasSystemCa) {
    for (let r of SYSTEM_CA_TRUST_BUNDLE_ENV_VARS) o[r] = t.caBundlePath;
    for (let [r, s] of Object.entries(SYSTEM_CA_TRUST_ENV_DEFAULTS))
      if (process.env[r] === void 0) o[r] = s;
  }
  if (t.javaTrustStorePath)
    o.JAVA_TOOL_OPTIONS = at(t.javaTrustStorePath, a.JAVA_TOOL_OPTIONS);
  if (a.GIT_TERMINAL_PROMPT === void 0)
    o.GIT_TERMINAL_PROMPT = NONINTERACTIVE_GIT_ENV.GIT_TERMINAL_PROMPT;
  if (a.GIT_ASKPASS === void 0) o.GIT_ASKPASS = NONINTERACTIVE_GIT_ENV.GIT_ASKPASS;
  if (a.GCM_INTERACTIVE === void 0) o.GCM_INTERACTIVE = NONINTERACTIVE_GIT_ENV.GCM_INTERACTIVE;
  if (Ee()) {
    let r = [["credential.interactive", "false"]];
    if (Oe()) r.push(...GITHUB_SSH_URL_PREFIXES.map((s) => [`url.https://${GITHUB_HOST}/.insteadOf`, s]));
    Object.assign(o, applyGitConfigEnv(void 0, r));
  }
  for (let r of Re)
    if (!r.realCredentialEnv.some((p) => process.env[p]))
      Object.assign(o, r.placeholders);
  return o;
}
function pt() {
  return Boolean(
    a.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG || a.CLAUDE_CODE_AGENT_PROXY_GH_SHIM,
  );
}
var gt =
    "# >>> claude agent-proxy governed-git (auto-generated; do not edit) >>>",
  Te = "# <<< claude agent-proxy governed-git <<<";
async function kn(t, e) {
  let o = process.env.GIT_CONFIG_GLOBAL;
  if (!o)
    return (
      logForDebugging(
        "[agent-proxy] governed git config arm set but GIT_CONFIG_GLOBAL is unset; skipping (refusing to write a shared global config)",
        { level: "warn" },
      ),
      !1
    );
  if (/[\n\r"]/.test(e))
    return (
      logForDebugging(
        "[agent-proxy] governed git: CA bundle path contains a newline or quote; skipping git config arm",
        { level: "warn" },
      ),
      !1
    );
  let r = [
    gt,
    `[http "https://${GITHUB_HOST}/"]`,
    `	proxy = http://127.0.0.1:${t}`,
    `	sslCAInfo = ${e}`,
    `[credential "https://${GITHUB_HOST}/"]`,
    "\tinteractive = false",
  ];
  if (Oe())
    r.push(`[url "https://${GITHUB_HOST}/"]`, ...GITHUB_SSH_URL_PREFIXES.map((u) => `	insteadOf = ${u}`));
  r.push(Te);
  let s = "";
  try {
    s = await te(o, "utf8");
  } catch (u) {
    if (!W(u)) throw u;
  }
  let p = s.indexOf(gt);
  if (p !== -1) {
    let u = s.indexOf(Te, p);
    s =
      u !== -1
        ? s.slice(0, p) + s.slice(u + Te.length).replace(/^\n/, "")
        : s.slice(0, p);
  }
  let c =
    s.length > 0 &&
    !s.endsWith(`
`)
      ? s +
        `
`
      : s;
  return (
    await writeFileAtomic(
      o,
      c +
        r.join(`
`) +
        `
`,
      384,
    ),
    logForDebugging(`[agent-proxy] governed git: relay routing for ${GITHUB_HOST} appended to ${o}`),
    !0
  );
}
async function Nn(t, e) {
  let o = (a.PATH ?? "").split(delimiter);
  for (let r of o) {
    if (!r || r === e) continue;
    let s = I(r, t);
    try {
      if ((await access(s, constants.X_OK), (await mt(s)).isFile())) return s;
    } catch {}
  }
  return;
}
async function Dn() {
  let t = new Set();
  try {
    await withTimeout($nt(dt, t), xt, "installed-CLI PATH sweep timed out");
  } catch (e) {
    (logForDebugging(`[agent-proxy] ${l(e)}; naming only the CLIs resolved so far`, {
      level: "warn",
    }),
      logFeatureSad("agent_proxy_init", "agent_proxy_path_probe_timeout"));
  }
  return dt.filter((e) => t.has(e));
}
async function In(t, e) {
  let o = I(e, "..", "bin"),
    r = await withTimeout(Nn("gh", o), xt, "gh PATH probe timed out");
  if (!r) {
    logForDebugging("[agent-proxy] governed git: gh not found on PATH; skipping gh shim");
    return;
  }
  if (r.includes("'") || e.includes("'")) {
    logForDebugging(
      "[agent-proxy] governed git: path contains a single quote; skipping gh shim",
      { level: "warn" },
    );
    return;
  }
  await Pe(o, { recursive: !0, mode: 448 });
  let s = `http://127.0.0.1:${t}`,
    p =
      `#!/bin/sh
# claude agent-proxy governed-git gh shim (auto-generated; per-session).
# Routes gh-to-github.com through the session relay ONLY when the
# invocation carries no customer credential. GHE targets (GH_HOST,
# --hostname, a -R/--repo/GH_REPO naming a non-github.com host, or a
# non-github.com origin remote in the cwd checkout) and
# real-customer-token invocations exec directly on the
# customer's own egress, so customer credentials never transit the
# relay tunnel and gh-to-GHE keeps working.
# Real customer tokens decide alone, checked first (costs nothing):
# gh sends GH_TOKEN/GITHUB_TOKEN proactively, and the GHE-scoped
# enterprise pair means gh may target a GHE host in ways the checks
` +
      `# below cannot see (e.g. a URL positional arg) \u2014 never route any of
` +
      `# them through the tunnel.
if [ -n "\${GH_TOKEN:-}\${GITHUB_TOKEN:-}\${GH_ENTERPRISE_TOKEN:-}\${GITHUB_ENTERPRISE_TOKEN:-}" ]; then
  exec '${r}' "$@"
fi
host="\${GH_HOST:-}"
repo="\${GH_REPO:-}"
prev=''
for a in "$@"; do
  if [ "$prev" = '--hostname' ]; then host="$a"; prev=''; continue; fi
  if [ "$prev" = '--repo' ]; then repo="$a"; prev=''; continue; fi
  case "$a" in
    --hostname) prev='--hostname' ;;
    --hostname=*) host="\${a#--hostname=}" ;;
    -R|--repo) prev='--repo' ;;
    --repo=*) repo="\${a#--repo=}" ;;
    -R=*) repo="\${a#-R=}" ;;
    -R?*) repo="\${a#-R}" ;;
  esac
done
` +
      `# Hostnames are case-insensitive \u2014 normalize before every compare.
` +
      `host="$(printf %s "$host" | tr '[:upper:]' '[:lower:]')"
if [ -n "$host" ] && [ "$host" != '${GITHUB_HOST}' ]; then
  exec '${r}' "$@"
fi
# A -R/--repo/GH_REPO [HOST/]OWNER/REPO (or URL) carries its own host
# and overrides the checkout. Otherwise repo-scoped commands resolve
` +
      `# their target from the checkout remote, not GH_HOST \u2014 treat a
` +
      `# non-github.com origin as a GHE signal. An EXPLICIT github.com host
# above skips the origin probe: it must not be kicked off the relay
# by the checkout heuristic.
rhost=''
if [ -n "$repo" ]; then
  case "$repo" in
    *://*) rhost="\${repo#*://}"; rhost="\${rhost%%/*}"; rhost="\${rhost##*@}"; rhost="\${rhost%%:*}" ;;
    */*/*) rhost="\${repo%%/*}" ;;
  esac
elif [ -z "$host" ]; then
  origin="$(git config --get remote.origin.url 2>/dev/null || true)"
  case "$origin" in
    *://*) rhost="\${origin#*://}"; rhost="\${rhost%%/*}"; rhost="\${rhost##*@}"; rhost="\${rhost%%:*}" ;;
    *@*:*) rhost="\${origin#*@}"; rhost="\${rhost%%:*}" ;;
  esac
fi
rhost="$(printf %s "$rhost" | tr '[:upper:]' '[:lower:]')"
if [ -n "$rhost" ] && [ "$rhost" != '${GITHUB_HOST}' ]; then
  exec '${r}' "$@"
fi
# NO_PROXY cleared: an ambient runner-host NO_PROXY covering
# github.com would make gh skip the relay and send the literal dummy
# token to the real GitHub API (hard 401).
HTTPS_PROXY='${s}' https_proxy='${s}' \\
NO_PROXY='' no_proxy='' \\
SSL_CERT_FILE='${e}' \\
GH_TOKEN='${PLACEHOLDER_CREDENTIAL_VALUE}' GITHUB_TOKEN='${PLACEHOLDER_CREDENTIAL_VALUE}' \\
exec '${r}' "$@"
`,
    c = I(o, "gh");
  return (
    await writeFileAtomic(c, p, 493),
    registerCleanup(() => Ce(c).catch(() => {})),
    logForDebugging(`[agent-proxy] governed git: gh shim at ${c} -> ${r}`),
    o
  );
}
function Ee() {
  return a.GIT_CONFIG_COUNT === void 0;
}
function Oe() {
  return (
    !re().state.standalone &&
    a.SSH_AUTH_SOCK === void 0 &&
    a.GIT_SSH_COMMAND === void 0
  );
}
function xe(t, e) {
  let o = e ? `see ${e} and ` : "",
    r = re().state;
  if (r.toolScoped)
    return `GitHub access for git${r.ghShimDir ? " and gh" : ""} goes through a pre-configured session proxy (CA bundle: ${t}) via per-session git config${r.ghShimDir ? " and a gh PATH shim" : ""}; other network traffic uses this machine's own egress. If git or gh fail against github.com (TLS or HTTP errors, or a transfer cut off with connection reset / unexpected disconnect), ${o}check the git config file named by $GIT_CONFIG_GLOBAL; never disable TLS verification or remove the proxy/sslCAInfo entries there.`;
  let s = r.installedProxyPreconfiguredClis ?? [],
    p =
      s.length > 0
        ? ` Installed CLIs preconfigured for the proxy: ${s.join(", ")} \u2014 ` +
          "prefer a skill/MCP tool, then these, over raw curl."
        : "";
  return (
    `Outbound HTTPS goes through a pre-configured agent proxy (CA bundle: ${t}). If a tool fails TLS verification, gets 403/405/407 from the proxy, or a transfer is cut off (connection reset, unexpected disconnect, RPC failed), ${o}run curl -sS "$HTTPS_PROXY/__agentproxy/status" for per-tool fixes and proxy state; never disable TLS verification or unset HTTPS_PROXY.` +
    p
  );
}
var Ln = [
  ["git_http_proxy_configured", /^http\.(.+\.)?proxy$/m],
  ["git_ssl_cainfo_configured", /^http\.(.+\.)?sslcainfo$/m],
  [
    "git_https_to_ssh_insteadof_configured",
    /^url\.(git@|ssh:\/\/).*\.insteadof$/m,
  ],
];
function Hn() {
  let t = parse(tmpdir()).root;
  try {
    let e = ve();
    if (e && statSync(e).isDirectory()) return e;
    return t;
  } catch {
    return t;
  }
}
async function Mn() {
  let t = new Set(),
    e = await Promise.all(
      ["--global", "--system"].map((o) =>
        execFileNoThrowWithCwd("git", ["config", o, "--list", "--name-only"], {
          timeout: 5000,
          preserveOutputOnError: !0,
          cwd: Hn(),
        }),
      ),
    );
  for (let o of e) {
    if (o.code !== 0) continue;
    for (let [r, s] of Ln) if (s.test(o.stdout)) t.add(r);
  }
  return [...t];
}
function Gn(t, e) {
  let o = I(e, ".."),
    r = `http://127.0.0.1:${t}`;
  return `# Claude Code agent proxy

Outbound HTTPS from this session goes through a local proxy at ${r}
(set via HTTPS_PROXY) which tunnels to a policy-enforcing egress proxy. TLS is
re-terminated there, so every tool must trust the CA bundle at
${e}. The standard CA environment variables, the system trust
store (where possible), a JVM truststore, the Bazel system bazelrc, the
browser NSS store, and gsutil's boto config are already set up.

## Quick diagnosis

1. Run: curl -sS ${r}/__agentproxy/status
   It reports proxy state, which trust and git accommodations are active
   (javaTrustStorePath, toolTrustFailureCodes, gitSshRewrite,
   gitConfigConflicts), and the most recent proxy-side failures.
2. Find the failure class below and apply the matching fix; gitConfigConflicts
   codes map to the git section, toolTrustFailureCodes to the JVM section.
3. Never disable TLS verification, never unset HTTPS_PROXY, and do not retry
   organization policy denials (403/407) \u2014 report them instead.

## Failure classes and fixes

### "certificate verify failed" / "self-signed certificate in chain" / PKIX errors

The failing tool is not reading the pre-set CA configuration. In order:

- If the tool has a CA flag or env var, point it at ${e}
  (examples: --cacert, SSL_CERT_FILE, NODE_EXTRA_CA_CERTS, REQUESTS_CA_BUNDLE,
  AWS_CA_BUNDLE, DENO_CERT, CARGO_HTTP_CAINFO, PIP_CERT, GIT_SSL_CAINFO,
  BUNDLE_SSL_CA_CERT, HEX_CACERTS_PATH, NIX_SSL_CERT_FILE).
- Tool config files override environment variables. If one of these sets its
  own CA or disables verification, point it at the bundle instead:
  pip.conf "cert", npm "cafile" (npm config get cafile), ~/.curlrc "cacert",
  .wgetrc "ca_certificate", conda "ssl_verify", git "http.sslCAInfo",
  gradle.properties / MAVEN_OPTS "-Djavax.net.ssl.trustStore".
- JVM tools (Maven, Gradle, plain Java): when a JDK is present, a truststore
  is built at ${o}/java-truststore.p12 (password "changeit") and
  injected via JAVA_TOOL_OPTIONS \u2014 confirm javaTrustStorePath is set in the
  status output before pointing a build at it (toolTrustFailureCodes explains
  why it is missing). If the image or the build sets its own trustStore, that
  one wins \u2014 import the proxy CA into it with
  keytool -importcert -noprompt -alias ccr-agent-proxy -file ${o}/agent-proxy-ca.crt -keystore <their store>
  or point the build at the ready-made one. Bazel reads the managed block in
  /etc/bazel.bazelrc rather than JAVA_TOOL_OPTIONS.

### "405 Method Not Allowed" from the proxy

The tool sent a plain-HTTP (non-CONNECT) request: usually axios older than
1.16.1 (upgrade it) or a tool configured with HTTP_PROXY (unset HTTP_PROXY for
that tool \u2014 only HTTPS_PROXY is supported).

### 403 / 407 from the proxy

The destination host is not allowed by your organization's egress policy for
this session. Do not retry or route around it \u2014 report the blocked host.
Note: curl hides response bodies on failed CONNECTs; the status endpoint
records the reason.

### "connection reset" / "unexpected disconnect" / "RPC failed" mid-transfer

Once a tunnel is up the proxy cannot send an error response, so a connection
it aborts (tunnel to the egress proxy lost, or an upload the tunnel stopped
accepting) reaches the tool as a bare reset. recentRelayFailures in the status
output names the host and reason; check it before concluding the remote
service refused the operation.

### Tool ignores the proxy entirely (timeouts with no proxy error)

Some clients do not read HTTPS_PROXY: Node's built-in fetch (run that command
with NODE_USE_ENV_PROXY=1 on Node >= 22.21), aiohttp (pass trust_env=True),
Ruby bundler (reads only HTTP_PROXY, which this proxy does not serve),
hand-rolled Go dialers. Prefer the tool's own proxy option where one exists.

### git

SSH-form GitHub remotes (git@github.com:...) are rewritten to HTTPS
automatically unless this session has its own SSH setup or supplies its own
GIT_CONFIG_* (see gitSshRewrite in the status output). A gitconfig that sets
http.proxy / http.<url>.proxy (even empty), its own http.sslCAInfo, or an
https-to-ssh insteadOf makes git bypass the proxy or fail verification \u2014 the
status output's gitConfigConflicts codes name which of these were detected;
adjust those keys for this session if git times out.

### docker build / docker run

Processes inside containers cannot reach 127.0.0.1:${t} and do not trust
the CA. Workarounds: run builds with --network host, copy ${e}
into the build context and install it in an early layer, and pass proxy/CA
settings explicitly to the build.

### Not supported through the proxy (report, do not work around)

gRPC / HTTP/2-only APIs, WebSocket upgrades, client-mTLS, certificate-pinned
clients (e.g. Snowflake, ngrok), non-443 HTTPS ports, raw-TCP databases.

If a tool still cannot work through the proxy, report it to your
administrator or Anthropic support so the policy or tooling can be fixed.
`;
}
async function Un(t) {
  try {
    return { existed: !0, token: (await te(t, "utf8")).trim() || null };
  } catch (e) {
    if (W(e)) return { existed: !1, token: null };
    return (
      logForDebugging(
        `[agent-proxy] token read failed: ${e instanceof Error ? e.message : String(e)}`,
        { level: "warn" },
      ),
      { existed: !1, token: null }
    );
  }
}
async function Fn(t = ht) {
  for (let e of t)
    try {
      return await te(e, "utf8");
    } catch {}
  return "";
}
var Wn = 1048576;
async function Yn(t, e) {
  let o = new Set(),
    r = [],
    s = t;
  for (let p of CA_BUNDLE_ENV_VARS) {
    let c = process.env[p]?.trim();
    if (!c || c === e || o.has(c) || ht.includes(c)) continue;
    o.add(c);
    let u;
    try {
      let h = await mt(c);
      if (!h.isFile() || h.size > Wn) continue;
      u = await te(c, "utf8");
    } catch (h) {
      if (!W(h))
        logForDebugging(
          `[agent-proxy] could not read customer CA bundle from ${p}: ${h instanceof Error ? h.message : String(h)}`,
          { level: "warn" },
        );
      continue;
    }
    let d = u.match(PEM_CERT_BLOCK_RE);
    if (!d) continue;
    let m = 0;
    for (let h of d) {
      if (s.includes(h)) continue;
      (r.push(h),
        (s += `
${h}`),
        m++);
    }
    if (m > 0)
      logForDebugging(
        `[agent-proxy] folded ${m} customer CA cert(s) from ${p} into the relay bundle`,
      );
  }
  return r.join(`
`);
}
var Xn = [
  {
    dir: "/usr/local/share/ca-certificates",
    name: "ccr-agent-proxy.crt",
    refresh: ["update-ca-certificates"],
  },
  {
    dir: "/etc/pki/ca-trust/source/anchors",
    name: "ccr-agent-proxy.crt",
    refresh: ["update-ca-trust", "extract"],
  },
];
async function jn(t, e) {
  for (let { dir: o, name: r, refresh: s } of e)
    try {
      await Ae(I(o, r), t, "utf8");
      let p = await new Promise((c) => {
        execFile(
          s[0],
          s.slice(1),
          { timeout: 1e4, cwd: "/", windowsHide: !0, ...Bs("helper") },
          (u) => c(u ? (W(u) ? 127 : 1) : 0),
        );
      });
      if (p === 0) {
        (logForDebugging(`[agent-proxy] CA installed to system trust via ${s[0]}`),
          logFeatureOk("agent_proxy_system_trust"));
        return;
      }
      logForDebugging(`[agent-proxy] ${s[0]} exited ${p}; falling back to env-var trust`, {
        level: "warn",
      });
    } catch (p) {
      if (W(p)) continue;
      logForDebugging(
        `[agent-proxy] system trust install via ${o} failed: ${p instanceof Error ? p.message : String(p)}`,
        { level: "warn" },
      );
    }
  if (e.length > 0) logFeatureSad("agent_proxy_system_trust", "unavailable");
}
async function Kn(t, e, o, { budgetMs: r, tries: s }) {
  let p = AbortSignal.timeout(r),
    c = "",
    u = null;
  for (let m = 0; m < s; m++) {
    u = null;
    try {
      let h = await fetch(`${t}${AGENT_PROXY_PATH}/ca-cert`, { signal: p });
      if (h.status >= 500 || h.status === 408 || h.status === 429) {
        ((c = `status ${h.status}`), (u = h.headers.get("retry-after")));
        continue;
      }
      if (!h.ok)
        return {
          outcome: "fatal",
          code: "http_error",
          detail: `ca-cert fetch ${h.status}`,
        };
      let _ = await h.text();
      if (!_.match(PEM_CERT_BLOCK_RE)) {
        c = "no certificate in response";
        continue;
      }
      try {
        (await Pe(I(o, ".."), { recursive: !0 }), await writeFileAtomic(o, Ct(e, _)));
      } catch (w) {
        let T = `ca-bundle write failed (${l(w)})`;
        if (isRetryableFsError(w)) return { outcome: "retry", detail: T, retryAfter: null };
        return { outcome: "fatal", code: "write_failed", detail: T };
      }
      return { outcome: "ok", ccrCa: _ };
    } catch (h) {
      c = h instanceof Error ? h.message : String(h);
    }
  }
  return {
    outcome: "retry",
    detail: `ca-cert fetch exhausted (${c})`,
    retryAfter: u,
  };
}
async function Vn(t) {
  try {
    (await Pe(I(t, ".."), { recursive: !0, mode: 448 }),
      await Ae(
        t,
        `[default]
s3 =
  payload_signing_enabled = false
`,
        { flag: "wx", mode: 384 },
      ));
  } catch (e) {
    if (A(e) === "EEXIST") return;
    logForDebugging(
      `[agent-proxy] aws config write failed: ${e instanceof Error ? e.message : String(e)}`,
      { level: "warn" },
    );
  }
}
function $e(t) {
  return `http://127.0.0.1:${t}`;
}
function Ct(t, e) {
  return (
    t +
    `
` +
    e
  );
}
export { _gr, qit, ygr };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 19 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { b, z } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { le, nt } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { getSocketDir, getSecureSocketPath } from "./chunk-hnp84hf6.js";
import {
  appendFile,
  chmod,
  mkdir,
  readdir,
  rmdir,
  unlink,
} from "fs/promises";
import { createServer } from "net";
import { platform } from "os";
import { join as I } from "path";
var _ = "1.0.0",
  v = 1048576,
  C = void 0;
function n(e, ...t) {
  if (C) {
    let s = new Date().toISOString(),
      r = t.length > 0 ? " " + b(t) : "",
      i = `[${s}] [Claude Chrome Native Host] ${e}${r}
`;
    appendFile(C, i).catch(() => {});
  }
  console.error(`[Claude Chrome Native Host] ${e}`, ...t);
}
function a(e) {
  let t = Buffer.from(e, "utf-8"),
    s = Buffer.alloc(4);
  (s.writeUInt32LE(t.length, 0),
    process.stdout.write(s),
    process.stdout.write(t));
}
async function runChromeNativeHost() {
  return withFeatureTelemetry("chrome_native_host_run", async () => {
    n("Initializing...");
    let e = new k(),
      t = new P();
    await e.start();
    while (!0) {
      let s = await t.read();
      if (s === null) break;
      await e.handleMessage(s);
    }
    await e.stop();
  });
}
var E = createLazyValue(() => nt({ type: le() }).passthrough());
class k {
  mcpClients = new Map();
  nextClientId = 1;
  server = null;
  running = !1;
  socketPath = null;
  async start() {
    if (this.running) return;
    if (((this.socketPath = getSecureSocketPath()), platform() !== "win32")) {
      let e = getSocketDir();
      (await unlink(e).catch(() => {}),
        await mkdir(e, { recursive: !0, mode: 448 }),
        await chmod(e, 448).catch(() => {}));
      try {
        let t = await readdir(e);
        for (let s of t) {
          if (!s.endsWith(".sock")) continue;
          let r = parseInt(s.replace(".sock", ""), 10);
          if (isNaN(r)) continue;
          try {
            process.kill(r, 0);
          } catch {
            (await unlink(I(e, s)).catch(() => {}),
              n(`Removed stale socket for PID ${r}`));
          }
        }
      } catch {}
    }
    if (
      (n(`Creating socket listener: ${this.socketPath}`),
      (this.server = createServer((e) => this.handleMcpClient(e))),
      await new Promise((e, t) => {
        (this.server.listen(this.socketPath, () => {
          (n("Socket server listening for connections"),
            (this.running = !0),
            e());
        }),
          this.server.on("error", (s) => {
            (n("Socket server error:", s), t(s));
          }));
      }),
      platform() !== "win32")
    )
      try {
        (await chmod(this.socketPath, 384), n("Socket permissions set to 0600"));
      } catch (e) {
        n("Failed to set socket permissions:", e);
      }
  }
  async stop() {
    if (!this.running) return;
    for (let [, e] of this.mcpClients) e.socket.destroy();
    if ((this.mcpClients.clear(), this.server))
      (await new Promise((e) => {
        this.server.close(() => e());
      }),
        (this.server = null));
    if (platform() !== "win32" && this.socketPath) {
      try {
        (await unlink(this.socketPath), n("Cleaned up socket file"));
      } catch {}
      try {
        let e = getSocketDir();
        if ((await readdir(e)).length === 0)
          (await rmdir(e), n("Removed empty socket directory"));
      } catch {}
    }
    this.running = !1;
  }
  async isRunning() {
    return this.running;
  }
  async handleMessage(e) {
    let t;
    try {
      t = z(e);
    } catch (i) {
      (n("Invalid JSON from Chrome:", i.message),
        a(b({ type: "error", error: "Invalid message format" })));
      return;
    }
    let s = E().safeParse(t);
    if (!s.success) {
      (n("Invalid message from Chrome:", s.error.message),
        a(b({ type: "error", error: "Invalid message format" })));
      return;
    }
    let r = s.data;
    switch ((n(`Handling Chrome message type: ${r.type}`), r.type)) {
      case "ping":
        (n("Responding to ping"),
          a(b({ type: "pong", timestamp: Date.now() })));
        break;
      case "get_status":
        a(b({ type: "status_response", native_host_version: _ }));
        break;
      case "tool_response": {
        if (this.mcpClients.size > 0) {
          n(`Forwarding tool response to ${this.mcpClients.size} MCP clients`);
          let { type: i, ...c } = r,
            o = Buffer.from(b(c), "utf-8"),
            l = Buffer.alloc(4);
          l.writeUInt32LE(o.length, 0);
          let f = Buffer.concat([l, o]);
          for (let [h, u] of this.mcpClients)
            try {
              u.socket.write(f);
            } catch (p) {
              n(`Failed to send to MCP client ${h}:`, p);
            }
        }
        break;
      }
      case "notification": {
        if (this.mcpClients.size > 0) {
          n(`Forwarding notification to ${this.mcpClients.size} MCP clients`);
          let { type: i, ...c } = r,
            o = Buffer.from(b(c), "utf-8"),
            l = Buffer.alloc(4);
          l.writeUInt32LE(o.length, 0);
          let f = Buffer.concat([l, o]);
          for (let [h, u] of this.mcpClients)
            try {
              u.socket.write(f);
            } catch (p) {
              n(`Failed to send notification to MCP client ${h}:`, p);
            }
        }
        break;
      }
      default:
        (n(`Unknown message type: ${r.type}`),
          a(b({ type: "error", error: `Unknown message type: ${r.type}` })));
    }
  }
  handleMcpClient(e) {
    let t = this.nextClientId++,
      s = { id: t, socket: e, buffer: Buffer.alloc(0) };
    (this.mcpClients.set(t, s),
      n(`MCP client ${t} connected. Total clients: ${this.mcpClients.size}`),
      a(b({ type: "mcp_connected" })),
      e.on("data", (r) => {
        s.buffer = Buffer.concat([s.buffer, r]);
        while (s.buffer.length >= 4) {
          let i = s.buffer.readUInt32LE(0);
          if (i === 0 || i > v) {
            (n(`Invalid message length from MCP client ${t}: ${i}`),
              e.destroy());
            return;
          }
          if (s.buffer.length < 4 + i) break;
          let c = s.buffer.slice(4, 4 + i);
          s.buffer = s.buffer.slice(4 + i);
          try {
            let o = z(c.toString("utf-8"));
            (n(`Forwarding tool request from MCP client ${t}: ${o.method}`),
              a(
                b({ type: "tool_request", method: o.method, params: o.params }),
              ));
          } catch (o) {
            n(`Failed to parse tool request from MCP client ${t}:`, o);
          }
        }
      }),
      e.on("error", (r) => {
        n(`MCP client ${t} error: ${r}`);
      }),
      e.on("close", () => {
        (n(
          `MCP client ${t} disconnected. Remaining clients: ${this.mcpClients.size - 1}`,
        ),
          this.mcpClients.delete(t),
          a(b({ type: "mcp_disconnected" })));
      }));
  }
}
class P {
  buffer = Buffer.alloc(0);
  pendingResolve = null;
  closed = !1;
  constructor() {
    (process.stdin.on("data", (e) => {
      ((this.buffer = Buffer.concat([this.buffer, e])),
        this.tryProcessMessage());
    }),
      process.stdin.on("end", () => {
        if (((this.closed = !0), this.pendingResolve))
          (this.pendingResolve(null), (this.pendingResolve = null));
      }),
      process.stdin.on("error", () => {
        if (((this.closed = !0), this.pendingResolve))
          (this.pendingResolve(null), (this.pendingResolve = null));
      }));
  }
  tryProcessMessage() {
    if (!this.pendingResolve) return;
    if (this.buffer.length < 4) return;
    let e = this.buffer.readUInt32LE(0);
    if (e === 0 || e > v) {
      (n(`Invalid message length: ${e}`),
        this.pendingResolve(null),
        (this.pendingResolve = null));
      return;
    }
    if (this.buffer.length < 4 + e) return;
    let t = this.buffer.subarray(4, 4 + e);
    this.buffer = this.buffer.subarray(4 + e);
    let s = t.toString("utf-8");
    (this.pendingResolve(s), (this.pendingResolve = null));
  }
  async read() {
    if (this.closed) return null;
    if (this.buffer.length >= 4) {
      let e = this.buffer.readUInt32LE(0);
      if (e > 0 && e <= v && this.buffer.length >= 4 + e) {
        let t = this.buffer.subarray(4, 4 + e);
        return (
          (this.buffer = this.buffer.subarray(4 + e)),
          t.toString("utf-8")
        );
      }
    }
    return new Promise((e) => {
      ((this.pendingResolve = e), this.tryProcessMessage());
    });
  }
}
export { runChromeNativeHost };

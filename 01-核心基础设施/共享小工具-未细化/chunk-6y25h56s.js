// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { identity as _m, $p, irt, cOn, uLn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { z, Yu, JPn } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { lU, resetEnvDerivedAuthCaches, qUe, LZe, Gse } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { canonicalizePath } from "../../02-功能模块/会话-历史-恢复/chunk-mkmy4cx2.js";
import { Za, MRt, NRt, uke } from "../设置-配置/设置-配置.aqbb35ee.js";
import { M1 } from "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import { configureGlobalAgents, clearProxyCache } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { Avt } from "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
import { $R } from "./chunk-035vf5et.js";
import { gwn } from "../遥测-OpenTelemetry/chunk-x7kby92q.js";
import { UXn } from "../遥测-OpenTelemetry/chunk-5j0f24ra.js";
import { G1n } from "./chunk-ezjdm9sg.js";
import { I$ } from "./chunk-6eskfcpn.js";
import { createServer } from "net";
function Sot(e, m, o) {
  return new Promise((n, c) => {
    let t = (r) => {
        (i.close(), c(r));
      },
      i = createServer((r) => {
        let a = "";
        (r.setEncoding("utf8"),
          r.on("data", (d) => {
            if (((a += d), o && a.length > 8388608)) {
              r.destroy();
              return;
            }
            let p = a.indexOf(`
`);
            if (p < 0) return;
            if (o) {
              let s;
              try {
                s = z(a.slice(0, p));
              } catch {
                s = void 0;
              }
              if (!s || !$R(s.auth, o)) {
                r.destroy();
                return;
              }
              (i.close(), n(s));
              return;
            }
            i.close();
            try {
              n(z(a.slice(0, p)));
            } catch (s) {
              c(s);
            }
          }),
          r.on("error", o ? () => r.destroy() : t));
      });
    if ((i.on("error", t), m))
      i.once("listening", () => {
        try {
          m();
        } catch (r) {
          t(r);
        }
      });
    i.listen(e);
  });
}
async function bot(e, m) {
  let o = await canonicalizePath(e.cwd, void 0);
  Yu(o);
  let n = { originalCwd: o, projectRoot: o, cwd: o };
  if (e.sessionId) $p(_m(e.sessionId), "spare_claim", null, n);
  else irt(n);
  if (
    (Za(),
    Gse(),
    LZe(),
    cOn(),
    UXn(),
    M1({ warm_spare_claimed: 1 }),
    Ie(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST))
  ) {
    for (let t of Object.keys(process.env))
      if (MRt(t) || t === "ANTHROPIC_CUSTOM_HEADERS" || NRt(t) || uke(t))
        delete process.env[t];
  }
  (delete process.env.ANTHROPIC_AUTH_TOKEN,
    delete process.env.ANTHROPIC_API_KEY,
    delete process.env.CLAUDE_CODE_OAUTH_TOKEN,
    Object.assign(process.env, e.env),
    (process.argv = [process.argv[0], process.argv[1], ...e.argv]),
    JPn(),
    await G1n(e.argv),
    uLn(),
    resetEnvDerivedAuthCaches(),
    Avt(),
    I$(),
    qUe({ preservePendingExposures: !0, preserveLoggedExposures: !0 }),
    lU(),
    gwn(),
    clearProxyCache(),
    configureGlobalAgents());
  let { main: c } = await m;
  await c();
}
export { Sot, bot };

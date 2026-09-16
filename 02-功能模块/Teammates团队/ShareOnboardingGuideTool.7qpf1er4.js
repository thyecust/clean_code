// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "./chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "./chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import { Tt } from "../权限系统/chunk-qdy0h5k2.js";
import { EGe, don } from "./chunk-hcszd97x.js";
import { zSe, rjn, pon, ojn, fon } from "./chunk-w2g8t42p.js";
import "../权限系统/chunk-pcxn6gwz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w4swsde7.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "./chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import { s, c, Qe, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { readFile as S, stat as b } from "fs/promises";
import { join as O } from "path";
var k = m(() =>
    Qe({
      mode: X(["check", "update", "create", "delete"])
        .default("check")
        .describe(
          "'check' (default): if ONBOARDING.md is present locally, uploads it to the most-recent guide (creates one if none exist); otherwise reports the existing link without uploading. 'update': upload to a specific guide by short_code. 'create': always make a new link. 'delete': remove a guide.",
        ),
      short_code: s()
        .regex(/^[A-Za-z0-9_-]{1,64}$/)
        .optional()
        .describe(
          "Short code of a specific guide to target (returned by a previous call). Honored by check, update, and delete \u2014 skips the org-wide lookup and targets this guide directly.",
        ),
    }),
  ),
  z = m(() =>
    c({
      status: X([
        "created",
        "updated",
        "deleted",
        "has_existing",
        "unavailable",
      ]),
      share_url: s().optional(),
      short_code: s().optional(),
      message: s(),
    }),
  ),
  u = "ONBOARDING.md",
  h = 65536,
  v = Tt({
    name: EGe,
    searchHint: "upload ONBOARDING.md and get a team share link",
    maxResultSizeChars: 1000,
    async description() {
      return don;
    },
    isEnabled() {
      return zSe();
    },
    isConcurrencySafe() {
      return !1;
    },
    isReadOnly() {
      return !1;
    },
    get inputSchema() {
      return k();
    },
    get outputSchema() {
      return z();
    },
    async prompt() {
      return don;
    },
    toAutoClassifierInput(t) {
      return `share onboarding guide (mode: ${t.mode ?? "check"})`;
    },
    isDestructive(t) {
      return t.mode === "delete";
    },
    renderToolUseMessage(t) {
      return t.mode && t.mode !== "check" ? t.mode : null;
    },
    create({ credentials: t }) {
      return {
        async call({ mode: a = "check", short_code: o }) {
          if (a === "delete")
            try {
              let e = o ?? (await p(t))?.short_code;
              if (!e) return i("No guide found for this org to delete.");
              return (
                await ojn(e, t),
                { data: { status: "deleted", message: `Guide ${e} deleted.` } }
              );
            } catch (e) {
              let r = e instanceof Error ? e.message : String(e);
              return i(`Delete didn't go through (${r}).`);
            }
          if (a === "check")
            try {
              let e = o
                ? (await fon(t)).find((r) => r.short_code === o)
                : await p(t);
              if (e) {
                let r = O(he(), u),
                  d = null;
                try {
                  d = (await b(r)).size;
                } catch (y) {
                  if (!W(y)) throw y;
                }
                if (d === null)
                  return {
                    data: {
                      status: "has_existing",
                      share_url: e.share_url,
                      short_code: e.short_code,
                      message: `A guide already exists for this org at ${e.share_url} (short_code: ${e.short_code}). If this link is what the user needed, share it. If they want to create or update a guide, tell them to run /team-onboarding themselves (it scans local session data and cannot be invoked by the model).`,
                    },
                  };
                if (d > h)
                  return i(
                    `${u} is over ${h / 1024}KB. Trim it before sharing.`,
                  );
                let w = await S(r, "utf8"),
                  _ = await pon(e.short_code, w, t);
                return g("updated", _.share_url, _.short_code, !1);
              }
            } catch (e) {
              let r = e instanceof Error ? e.message : String(e);
              return i(
                `Upload didn't go through (${r}). Fall back to the manual share copy.`,
              );
            }
          let n = O(he(), u),
            l;
          try {
            l = (await b(n)).size;
          } catch (e) {
            if (W(e))
              return i(
                `${u} not found in the current directory. Write the guide first.`,
              );
            throw e;
          }
          if (l > h)
            return i(`${u} is over ${h / 1024}KB. Trim it before sharing.`);
          let f = await S(n, "utf8");
          try {
            if (a === "update") {
              let r = o ?? (await p(t))?.short_code;
              if (r) {
                let d = await pon(r, f, t);
                return g("updated", d.share_url, d.short_code, !0);
              }
            }
            let e = await rjn(f, void 0, t);
            return g("created", e.share_url, e.short_code, !1);
          } catch (e) {
            let r = e instanceof Error ? e.message : String(e);
            return i(
              `Upload didn't go through (${r}). Fall back to the manual share copy.`,
            );
          }
        },
      };
    },
    mapToolResultToToolResultBlockParam(t, a) {
      return {
        tool_use_id: a,
        type: "tool_result",
        content: `[${t.status}] ${t.message}`,
      };
    },
  });
async function p(t) {
  let a = await fon(t);
  if (a.length === 0) return;
  return a.reduce((o, n) => (o.updated_at > n.updated_at ? o : n));
}
function g(t, a, o, n) {
  let l = n
    ? `

Close with: "Here's your onboarding guide: ${a}" followed by the send-to-teammates line.`
    : "";
  return {
    data: {
      status: t,
      share_url: a,
      short_code: o,
      message: `Share link ${t}: ${a} (short_code: ${o})${l}`,
    },
  };
}
function i(t) {
  return { data: { status: "unavailable", message: t } };
}
export { v as ShareOnboardingGuideTool };

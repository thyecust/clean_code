// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { S, u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { y, f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Tn } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Wr, J } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import { mn } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { up, _S } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import { jt } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import { L4 } from "../插件系统/chunk-nejpd7jw.js";
import { Fk, JSt, Jn, UNe } from "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import { zo } from "../MCP客户端/chunk-3kmsshb6.js";
import { Cpt, vpt, I9n, Tan, P9n, O9n, D9n } from "./chunk-wwgqvtfr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import "../插件系统/chunk-33bdfgmx.js";
import { oSn } from "../MCP客户端/chunk-0mwqsv0r.js";
import { Hl } from "../../01-核心基础设施/共享小工具-未细化/chunk-anxypace.js";
import { wwt, A1e, C1e, Ewt } from "../../01-核心基础设施/共享小工具-未细化/chunk-339z9efw.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import { rn } from "../../01-核心基础设施/共享小工具-未细化/chunk-q4e7ggp5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import { xA, Jke } from "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { randomBytes as z } from "crypto";
import { mkdir as K, rename as w, rm as R, writeFile as N } from "fs/promises";
import { join as b } from "path";
function F(e) {
  if (!e.endsWith("/SKILL.md")) return;
  let r = e.slice(0, -9);
  if (!/^[a-z][a-z0-9+.-]*:\/\/./i.test(r)) return;
  if (/[<>"\s\p{Cc}]/u.test(r)) return;
  return r;
}
function T() {
  return import.meta.require("../MCP客户端/mcpClientModule.4cyej0np.js").mcpDirectoryReadModule();
}
function O() {
  return import.meta.require("../MCP客户端/mcpClientModule.4cyej0np.js").mcpSkillsListModule();
}
function U() {
  return import.meta
    .require("../MCP客户端/mcpClientModule.4cyej0np.js")
    .mcpSdkErrorClassificationModule();
}
function P(e) {
  return import.meta
    .require("../MCP客户端/mcpClientModule.4cyej0np.js")
    .mcpIsListAuthErrorModule()
    .isClaudeAiBearerRejectedError(e);
}
var B = 100,
  X = 20,
  q = 20,
  E = 4096;
function j(e, r, s) {
  let c = `${e}:${Jn(r.name, r.config)}`,
    o = jt().skillsFunnelSeen,
    a = o.has(c) ? "refetch" : "initial";
  (o.add(c),
    i("tengu_mcp_skills_funnel", {
      step: u(e),
      client: S("claude-code-cli"),
      server_name: Tn(r.name),
      cause: u(a),
      skill_count: s,
    }));
}
class I {
  fetchForClient = xA(
    async (e, r) => {
      if (!oSn(e.capabilities)) return [];
      let s = null,
        c = !1,
        o = await H(e, () => {
          ((c = !0), (e.discoveryBearerRejected = !0));
        });
      if (o.length === 0) {
        if (c)
          (this.invalidate(Jn(e.name, e.config)),
            g("skill_mcp_load", "skill_mcp_claudeai_bearer_rejected"));
        return [];
      }
      (j("parsed_nonempty", e, o.length),
        J(e.name, `Found ${o.length} ${x(o.length, "skill")} via skills/list`));
      let a = JSt(),
        p = (d) => {
          if (d === "skill_mcp_claudeai_bearer_rejected") c = !0;
          else s = d;
        },
        k = await Promise.all(o.map((d) => W(e, d, a, p, r))),
        t = L4(e.config)?.skills,
        h = k.filter((d) => d !== null),
        m = t
          ? h.map((d) => {
              let _ = t[d.name];
              return _ === void 0 ? d : { ...d, description: _ };
            })
          : h;
      if (c)
        (this.invalidate(Jn(e.name, e.config)),
          (e.discoveryBearerRejected = !0));
      if (s) f("skill_mcp_load", s, { mcp_server_sha12: Tn(e.name) });
      else if (c) g("skill_mcp_load", "skill_mcp_claudeai_bearer_rejected");
      else if (m.length > 0) y("skill_mcp_load");
      if (m.length > 0)
        (j("surfaced", e, m.length),
          n(
            `[mcp-skills] Loaded ${m.length} skills from MCP server '${e.name}'`,
          ));
      return m;
    },
    (e, r) => Jn(e.name, e.config),
    X,
  );
  invalidate(e) {
    this.fetchForClient.cache.delete(e);
  }
  invalidateExcept(e) {
    Jke(this.fetchForClient.cache, e);
  }
  reset() {
    this.fetchForClient.cache.clear();
  }
}
function v() {
  let e = jt();
  if (e.skillsFetcher === null) e.skillsFetcher = new I();
  return e.skillsFetcher;
}
function Pe(e, r) {
  return v().fetchForClient(e, r);
}
function Fe(e) {
  v().invalidate(e);
}
function we(e) {
  v().invalidateExcept(e);
}
async function H(e, r) {
  let s = [],
    c = 0,
    o = !1,
    a,
    p = 0;
  do {
    let k;
    try {
      k = await O().listMcpSkillPage(e, a);
    } catch (t) {
      if (p === 0) {
        if (!U().isMcpMethodNotFoundError(t))
          if (
            (J(
              e.name,
              `skills/list failed (${l(t)}) \u2014 skipping skill discovery`,
            ),
            e.config.type === "claudeai-proxy" && P(t))
          )
            (g("skill_mcp_load", "skill_mcp_claudeai_bearer_rejected"),
              v().invalidate(Jn(e.name, e.config)),
              (e.discoveryBearerRejected = !0));
          else g("skill_mcp_load", "skill_mcp_list_failed");
        return [];
      }
      if (
        (J(
          e.name,
          `skills/list page ${p + 1} failed (${l(t)}) \u2014 using ${s.length} ${x(s.length, "entry", "entries")} from prior pages`,
        ),
        e.config.type === "claudeai-proxy" && P(t))
      )
        r();
      else g("skill_mcp_load", "skill_mcp_list_page_failed");
      break;
    }
    for (let t of k.skills) {
      if (s.length >= B) {
        o = !0;
        break;
      }
      let h = G(t.frontmatter?.name);
      if (
        !h ||
        !t.uri ||
        h.length > E ||
        t.uri.length > E ||
        (t.digest?.length ?? 0) > E
      ) {
        c++;
        continue;
      }
      s.push({ name: h, uri: t.uri, digest: t.digest });
    }
    ((a = k.nextCursor || void 0), p++);
  } while (a !== void 0 && p < q && s.length < B);
  if (a !== void 0 || o)
    J(
      e.name,
      `skills/list: stopped after ${p} ${x(p, "page")} / ${s.length} valid ${x(s.length, "entry", "entries")} with more pending`,
    );
  if (c > 0)
    (J(
      e.name,
      `${c} skills/list ${x(c, "entry", "entries")} skipped (malformed, missing, or oversized fields)`,
    ),
      g("skill_mcp_load", "skill_mcp_list_entries_dropped"));
  return s;
}
function G(e) {
  return typeof e === "string" && e.length > 0 ? e : void 0;
}
async function W(e, r, s, c, o) {
  let a = await I9n(e.name, r, o);
  if (a.hit)
    return (
      J(e.name, `Skill '${r.name}' cache hit \u2014 no resources/read`),
      D({
        client: e,
        uri: r.uri,
        fallbackName: r.name,
        rawContent: a.skillMd,
        builders: s,
      })
    );
  return Y({
    client: e,
    uri: r.uri,
    fallbackName: r.name,
    builders: s,
    onError: c,
    cacheEntry: r,
    storageV5: o,
  });
}
async function Y({
  client: e,
  uri: r,
  fallbackName: s,
  builders: c,
  onError: o,
  cacheEntry: a,
  storageV5: p,
}) {
  try {
    let t = (await UNe(e, r, { timeout: Hl() })).contents?.find(
      (_) => "text" in _ && typeof _.text === "string",
    );
    if (!t || !("text" in t))
      return (
        J(e.name, `Skill resource ${r} has no text content`),
        o("skill_mcp_no_text_content"),
        null
      );
    if (t.text.length > Fk)
      return (
        J(e.name, `Skill resource ${r} exceeds ${Fk / 1e6}MB, skipping`),
        o("skill_mcp_content_too_large"),
        null
      );
    let h = String(t.text),
      m = vpt(a.digest ?? void 0),
      d = mn(h);
    if (m && m !== d)
      return (
        Wr(
          e.name,
          `SKILL.md digest mismatch for ${r}: skills/list declares ${m.slice(0, 12)}\u2026, served content hashes to ${d.slice(0, 12)}\u2026`,
        ),
        o("skill_mcp_skill_md_digest_mismatch"),
        null
      );
    return (
      await Z(e.name, a, h, d, p),
      D({ client: e, uri: r, fallbackName: s, rawContent: h, builders: c })
    );
  } catch (k) {
    if (e.config.type === "claudeai-proxy" && P(k))
      (J(e.name, `Failed to load MCP skill from ${r}: ${l(k)}`),
        o("skill_mcp_claudeai_bearer_rejected"));
    else
      (Wr(e.name, `Failed to load MCP skill from ${r}: ${l(k)}`),
        o("skill_mcp_fetch_failed"));
    return null;
  }
}
async function Z(e, r, s, c, o) {
  try {
    let a = vpt(r.digest ?? void 0) ?? c,
      {
        slug: p,
        slugDir: k,
        keyDir: t,
        alreadyCached: h,
      } = await P9n(e, r, a, o);
    if (!h)
      if (M() && o) await O9n(o, p, a, s);
      else {
        let m = b(k, `.tmp-${process.pid}-${z(4).toString("hex")}`);
        await K(m, { recursive: !0 });
        let d = !1;
        try {
          await N(b(m, Cpt), s);
          try {
            (await w(m, t), (d = !0));
          } catch (_) {
            if (!(await Tan(p, a, t, void 0))) {
              let C = A(_);
              if (
                C !== "EEXIST" &&
                C !== "ENOTEMPTY" &&
                C !== "ENOTDIR" &&
                C !== "EPERM" &&
                C !== "EACCES"
              )
                throw _;
              (J(
                e,
                `Replacing ${t}, which has no SKILL.md, with the fetched copy`,
              ),
                await R(t, { recursive: !0, force: !0 }),
                await w(m, t),
                (d = !0));
            }
          }
        } finally {
          if (!d) await R(m, { recursive: !0, force: !0 }).catch(() => {});
        }
      }
    await D9n({ slug: p, slugDir: k }, r, a, o);
  } catch (a) {
    J(e, `Failed to cache SKILL.md for '${r.name}': ${l(a)}`);
  }
}
function D({
  client: e,
  uri: r,
  fallbackName: s,
  rawContent: c,
  builders: { createSkillCommand: o, parseSkillFrontmatterFields: a },
}) {
  let p = _S(c),
    { frontmatter: k, content: t } = zo(p, r, { normalizeKeys: !0 }),
    h = Ewt(t),
    m = a(k, h, s),
    d = rn(s);
  if (m.hooks)
    J(
      e.name,
      `Skill '${d}' declared hooks in frontmatter \u2014 ignored (MCP-sourced skills cannot register hooks)`,
    );
  if (m.allowedTools.length > 0)
    J(
      e.name,
      `Skill '${d}' declared allowed-tools in frontmatter \u2014 ignored (MCP-sourced skills cannot bypass permissions)`,
    );
  let _ = `${rn(e.name)}:${d}`,
    L = F(r),
    C = L
      ? {
          server: up(e.name),
          uri: up(L),
          directoryRead: T().serverDeclaresDirectoryRead(e.capabilities),
        }
      : void 0;
  return (
    J(e.name, `Loaded MCP skill '${d}' from ${r}`),
    o({
      ...m,
      ...A1e(m),
      ...wwt(),
      displayName: C1e(m.displayName),
      skillName: _,
      markdownContent: h,
      source: "mcp",
      baseDir: void 0,
      mcpResourceRoot: C,
      loadedFrom: "mcp",
    })
  );
}
export {
  Pe as fetchMcpSkillsForClient,
  we as invalidateMcpSkillsExcept,
  Fe as invalidateMcpSkillsForServer,
};

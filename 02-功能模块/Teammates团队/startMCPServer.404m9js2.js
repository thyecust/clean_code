// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 201 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ListToolsRequestSchema as C0, CallToolRequestSchema as Cx } from "../MCP客户端/chunk-tv3jbp8f.js";
import "../MCP客户端/chunk-98spw152.js";
import { A1 } from "../MCP客户端/chunk-j8556pzt.js";
import { artifactReadObservationIn as P$ } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import { bh, B, Nb, HW } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { dt, ge } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Et, b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError as h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logFeatureOk as y, logFeatureBad as f, logFeatureSad as g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wm4s322b.js";
import { getMainLoopModel as rt, qe, Bt, tt, Mn, co, ro, Wl, Ut } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { vo } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { tA, DT } from "../MCP客户端/chunk-3kmsshb6.js";
import { rf, ar, LT, ID, oA } from "../权限系统/chunk-qdy0h5k2.js";
import { createAbortController as hr, createChildAbortController as qh, userAbortReason as yu } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { i5 } from "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import {
  wmt,
  Xm,
  hasPermissionsToUseTool as gd,
  wpn,
  d3,
  pu,
  MX,
  $_t,
  dC,
  m5e,
  g5e,
  mWt,
  pgn,
  N8n,
  BWt,
  Vc,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Cj } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { CC } from "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import { kGt } from "../插件系统/chunk-ajtn749s.js";
import { JHt } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { aF } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import { Tw } from "../认证-OAuth登录/chunk-s51acx6w.js";
import { elt, tlt, i7 } from "../../01-核心基础设施/共享小工具-未细化/chunk-m85ks9bj.js";
import { Vat } from "../../01-核心基础设施/共享小工具-未细化/chunk-bw0cgdrm.js";
import { uO } from "../../01-核心基础设施/共享小工具-未细化/chunk-pvrtr3v0.js";
import { tct } from "./chunk-c8267s4e.js";
import { o2 } from "../工具WebFetch-WebSearch/chunk-62z2xwnm.js";
import { Vtt } from "../../01-核心基础设施/共享小工具-未细化/chunk-fpr1vv1t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-36nx9gcx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-c0wtcn4y.js";
var N = new Set([qe, tt, Bt, Mn, ro, co, Wl, Ut]),
  k = BWt;
function G(e, m) {
  if (e.properties === void 0 || m.length === 0) return e;
  let d = { ...e.properties };
  for (let a of m) delete d[a];
  let S = Array.isArray(e.required)
    ? e.required.filter((a) => !m.includes(a))
    : e.required;
  return { ...e, properties: d, required: S };
}
async function Ve(e, m, d, S, a) {
  pu(e);
  let C = q(m, d, B(), "stdio", S, a),
    L = new Vtt();
  (await C.connect(L), Et(() => C.close()));
}
class D extends uO {
  #e;
  constructor(e) {
    super();
    this.#e = e;
  }
  get(e) {
    return e === CC ? super.get(e) : this.#e.get(e);
  }
}
function q(e, m, d, S, a, C = "raw") {
  let L = Tw(a),
    p = S === "http";
  if (p) {
    let r = i5();
    (r.disableBackgroundTasks(), r.disableUnsandboxedCommands());
  }
  if ((N8n(pgn()), d3(), Nb())) JHt(a).catch(h);
  if ((kGt(), HW())) wmt().catch(h);
  let H = DT(tA),
    U = new uO(),
    E = new A1(
      {
        name: "claude/tengu",
        version: {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
      },
      { capabilities: { tools: {} } },
    ),
    P = hr();
  return (
    (E.onclose = () => {
      P.abort(yu("shutdown"));
    }),
    E.setRequestHandler(C0, async () => {
      let r = rf(),
        R = dC(r, { skipReplFilter: !0, skipSimpleModeFilter: p }).filter(
          (i) => !oA(i),
        ),
        T = p ? R.filter((i) => N.has(i.name)) : R;
      return {
        tools: await Promise.all(
          T.map(async (i) => {
            let v = MX(i.inputSchema),
              { remoteExecution: _, ...s } = i;
            return {
              ...s,
              description: await i.prompt({
                getToolPermissionContext: async () => r,
                tools: T,
                agents: [],
              }),
              inputSchema: G(v, [
                ...(p ? k : []),
                ...(ID(i).supported ? [vo] : []),
              ]),
              outputSchema: void 0,
            };
          }),
        ),
      };
    }),
    E.setRequestHandler(
      Cx,
      async ({ params: { name: r, arguments: R } }, { signal: T }) => {
        let i = rf(),
          v = dC(i, { skipReplFilter: !0, skipSimpleModeFilter: p }).filter(
            (o) => !oA(o),
          ),
          _ = p ? v.filter((o) => N.has(o.name)) : v,
          s = ar(_, r);
        if (!s) throw Error(`Tool ${r} not found`);
        let I = qh(P),
          M = () => I.abort(yu("remote-cancel"));
        if (T.aborted) M();
        else T.addEventListener("abort", M, { once: !0 });
        let F = new D(U),
          x = {
            abortController: I,
            messageQueue: Xm(),
            session: d,
            agentContext: { agentType: "main", agentId: bh() },
            options: {
              commands: [],
              tools: _,
              mainLoopModel: rt(),
              thinkingConfig: { type: "disabled", mechanical: !0 },
              mcpClients: [],
              mcpResources: {},
              isNonInteractiveSession: !0,
              debug: e,
              verbose: m,
              agentDefinitions: { activeAgents: [], allAgents: [] },
            },
            getAppState: () => aF(),
            setAppState: () => {},
            markPrResolvedThisSession: () => {},
            isUltrareviewOverageConfirmed: () => !1,
            markUltrareviewOverageConfirmed: () => {},
            getAdvisorSetting: () => aF().advisorModel,
            getMcp: () => aF().mcp,
            getProactivityLevel: () => aF().proactivityLevel,
            getWebBrowser: () => aF().webBrowser,
            setToolPermissionContext: () => {},
            setSessionToolPermissionContext: () => {},
            taskRegistry: o2,
            queuedNotificationsRegistry: $_t,
            sessionHooksRegistry: Vat,
            setWebBrowserSlice: () => {},
            setArtifactReadVersion: () => {},
            getArtifactReadObservation: P$(aF),
            artifactRegistries: elt(),
            setArtifactContractTarget: () => {},
            getArtifactContractTarget: () => ({ targetSlug: void 0, pins: {} }),
            agentLifecycle: tct,
            teammateColors: tlt,
            rootToolSurface: { tools: _, mainLoopModel: rt() },
            messages: [],
            turnStartIndex: 0,
            readFileState: H,
            dedupUnchangedReads: !1,
            toolState: F,
            permissionRelays: i7,
            getFileHistoryState: () => {
              return;
            },
            applyFileHistoryOp: () => {},
            applyAttributionOp: () => {},
            storageV5: a,
            credentials: L,
          };
        try {
          if (!s.isEnabled()) {
            let t = `Tool ${r} is not enabled`;
            return (
              n(`MCP server: ${t}`, { level: "error" }),
              { isError: !0, content: [{ type: "text", text: t }] }
            );
          }
          let o = { ...(R ?? {}) },
            O = [];
          if (p) {
            for (let t of k) if (t in o) (delete o[t], O.push(t));
          }
          let c = LT(s, o);
          if (!c.success) {
            let t = `Tool ${r} arguments failed schema validation: ${c.error.message}`;
            return (
              n(`MCP server: ${t}`, { level: "error" }),
              { isError: !0, content: [{ type: "text", text: t }] }
            );
          }
          let u = await s.validateInput?.(c.data, x);
          if (u && !u.result) {
            let t = `Tool ${r} input is invalid: ${u.message}`;
            return (
              n(`MCP server: ${t}`, { level: "error" }),
              { isError: !0, content: [{ type: "text", text: t }] }
            );
          }
          let A = await s.call(c.data, x, gd, Vc({ content: [] })),
            l;
          if (
            ((l ??= { content: [{ type: "text", text: b(A.data) }] }),
            O.length > 0)
          ) {
            let t = `[serve-mode] Stripped client-supplied privilege field(s): ${O.join(", ")}`,
              w = l.content.at(-1);
            if (w?.type === "text")
              w.text += `
${t}`;
            else l.content.push({ type: "text", text: t });
          }
          return (y(m5e(s.name)), l);
        } catch (o) {
          let c =
            (o instanceof Error ? wpn(o) : [String(o)])
              .filter(Boolean)
              .join(
                `
`,
              )
              .trim() || "Error";
          if (g5e(o)) n(`MCP server tool call '${r}' aborted`);
          else {
            let { code: u, isSad: A } = mWt(o);
            if (A)
              (n(`MCP server tool call '${r}' failed: ${c}`, {
                level: "error",
              }),
                g(m5e(s.name), u));
            else {
              let l = ge(o);
              (h(
                "telemetryMessage" in l
                  ? l
                  : dt(l, `mcp server tool '${s.name}' threw`),
              ),
                f(m5e(s.name), u));
            }
          }
          return { isError: !0, content: [{ type: "text", text: c }] };
        } finally {
          F.get(CC).release(Cj);
        }
      },
    ),
    E
  );
}
export { Ve as startMCPServer };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 243 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { H_ } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { mi } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { pB, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Wf, x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { lo } from "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import { gHn, ts } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { ap } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { sv, Lw } from "../权限系统/chunk-e4pfvp7x.js";
import { Gi } from "../认证-OAuth登录/chunk-7rf7w8yf.js";
import { gr, ka, ow, Y2, BM, cw, gmn, _yt } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Aa } from "../插件系统/chunk-7s6mt1vg.js";
import { Qn } from "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import { d_, U, Yn } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { cn } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import { o, t, ct } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { oa } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { Ne, Ze } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r2ab1bp6.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-3eztvm1y.js";
import "../认证-OAuth登录/chunk-7jz937t3.js";
import { Ye } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5g6jeny.js";
import "../插件系统/chunk-rbjz1q03.js";
import "../插件系统/chunk-4k4dssd9.js";
import { Vi, jx, Bae, P8 } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { _p } from "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { qm, ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { Ma, ks } from "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import { yo } from "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-8spdkj0k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import { oye, MIt, sye, sit, sWe, iWe } from "../插件系统/chunk-jwm9gdkd.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import { i9e } from "../MCP客户端/chunk-rxp6fm7a.js";
import "../后台任务-Shell管理/chunk-rh0xpf1w.js";
import { aye } from "../../01-核心基础设施/共享小工具-未细化/chunk-ttwbb0b4.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-vwjrfkgt.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-yhkvt9ba.js";
import "../插件系统/chunk-akd9b588.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-2x6t9gq6.js";
import "../MCP客户端/chunk-4xr0rjb4.js";
import "../成本-Token统计/chunk-3nwwgatc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-4bdjksjf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-e6f86vzh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x93xfjz0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-p07dva25.js";
import { YZ } from "../MCP客户端/chunk-35zjqw7h.js";
import { Ur } from "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import { $n } from "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import { je } from "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qck6h2yw.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import "../MCP客户端/chunk-49ds54j4.js";
import "../MCP客户端/chunk-d7zajrh1.js";
import { Gle } from "../../01-核心基础设施/共享小工具-未细化/chunk-ey89qg3e.js";
import { ut } from "../../01-核心基础设施/共享小工具-未细化/chunk-5ktz3kp7.js";
import { sI } from "../../01-核心基础设施/共享小工具-未细化/chunk-g2fqhcwj.js";
import { I4, MIe, Cee, s2, j3e, CSe, W3e } from "../MCP客户端/chunk-k2gczbnj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/chunk-j7khz57p.js";
import { Nl, re, E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { L } from "../Teammates团队/chunk-mrfx53ye.js";
import { G, Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
F();
F();
function Nt() {
  return import.meta.require("../MCP客户端/mcpClientModule.4cyej0np.js").mcpAuthModule();
}
function rt({ agentServer: s, onCancel: i, onComplete: l }) {
  let f = re((S, ...T) => l(typeof S === "string" ? Qn(S) : S, ...T), [l]),
    [u] = cn(),
    [m, w] = d(!1),
    [b, J] = d(null),
    [X, j] = d(null),
    I = C(null);
  E(() => () => I.current?.abort(), []);
  let oe = re(() => {
    if (m) (I.current?.abort(), (I.current = null), w(!1), j(null));
  }, [m]);
  Ne("confirm:no", oe, { context: "Confirmation", isActive: m });
  let c = re(async () => {
      if (ap()) {
        J(MIt);
        return;
      }
      if (
        !s.needsAuth ||
        !s.url ||
        (s.transport !== "http" && s.transport !== "sse")
      )
        return;
      let S = sI(s.name, { type: s.transport, url: s.url });
      if (S.kind === "anthropic-hosted") {
        J(S.message);
        return;
      }
      if (S.kind !== "oauth") return;
      (w(!0), J(null));
      let T = new AbortController();
      I.current = T;
      try {
        (await Nt().performMCPOAuthFlow(s.name, S.config, j, T.signal),
          f(
            `Authentication successful for ${gr(s.name)}. The server will connect when the agent runs.`,
          ));
      } catch (te) {
        if (
          te instanceof Error &&
          !(te instanceof Nt().AuthenticationCancelledError)
        )
          J(te.message);
      } finally {
        (w(!1), (I.current = null));
      }
    }, [s, f]),
    v = Wf(String(s.name));
  if (m)
    return r(o, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      children: [
        r(t, {
          color: "claude",
          children: ["Authenticating with ", s.name, "\u2026"],
        }),
        r(o, {
          children: [
            e(yo, {}),
            e(t, {
              children: " A browser window will open for authentication",
            }),
          ],
        }),
        X &&
          r(o, {
            flexDirection: "column",
            children: [
              e(t, {
                dimColor: !0,
                children:
                  "If your browser doesn't open automatically, copy this URL manually:",
              }),
              e(ct, { url: X, assumeSupport: !0 }),
            ],
          }),
        e(o, {
          marginLeft: 3,
          children: r(t, {
            dimColor: !0,
            children: [
              "Return here after authenticating in your browser.",
              " ",
              e(je, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "go back",
              }),
            ],
          }),
        }),
      ],
    });
  let k = [];
  if (s.needsAuth) k.push({ label: "Authenticate", value: "auth" });
  return (
    k.push({ label: "Back", value: "back" }),
    r(de, {
      title: `${v} MCP Server`,
      subtitle: "agent-only",
      onCancel: i,
      inputGuide: r(ue, {
        children: [
          e(D, { chord: ["up", "down"], action: "navigate" }),
          e(D, { chord: "enter", action: "confirm" }),
          e(je, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "go back",
          }),
        ],
      }),
      children: [
        r(Vi, {
          columns: [{ bold: !0, width: 8 }, {}],
          children: [
            r(Vi.Row, {
              children: [
                e(N, { children: "Type:" }),
                e(t, { dimColor: !0, children: s.transport }),
              ],
            }),
            s.url &&
              r(Vi.Row, {
                children: [
                  e(N, { children: "URL:" }),
                  e(t, { dimColor: !0, children: s.url }),
                ],
              }),
            s.command &&
              r(Vi.Row, {
                children: [
                  e(N, { children: "Command:" }),
                  e(t, { dimColor: !0, children: s.command }),
                ],
              }),
            r(Vi.Row, {
              children: [
                e(N, { children: "Used by:" }),
                e(t, { dimColor: !0, children: s.sourceAgents.join(", ") }),
              ],
            }),
          ],
        }),
        e(o, {
          children: r(Vi, {
            columns: [{ bold: !0, width: 8 }, {}],
            children: [
              r(Vi.Row, {
                children: [
                  e(N, { children: "Status:" }),
                  r(t, {
                    children: [
                      ut("inactive", u)(L.radioOff),
                      " not connected (agent-only)",
                    ],
                  }),
                ],
              }),
              s.needsAuth &&
                r(Vi.Row, {
                  children: [
                    e(N, { children: "Auth:" }),
                    r(t, {
                      children: [
                        ut("warning", u)(L.triangleUpOutline),
                        " may need authentication",
                      ],
                    }),
                  ],
                }),
            ],
          }),
        }),
        e(o, {
          children: e(t, {
            dimColor: !0,
            children: "This server connects only when running the agent.",
          }),
        }),
        b && e(o, { children: e(Ur, { error: b }) }),
        e(o, {
          children: e(ve, {
            options: k,
            onChange: async (S) => {
              switch (S) {
                case "auth":
                  await c();
                  break;
                case "back":
                  i();
                  break;
              }
            },
            onCancel: i,
          }),
        }),
      ],
    })
  );
}
F();
F();
var rn = 12,
  sn = 5,
  an = 3,
  So = ["project", "local", "user", "enterprise", "managed", "agent"];
function Mo(s) {
  switch (s) {
    case "project":
      return { label: "Project MCPs", path: cw(s) };
    case "user":
      return { label: "User MCPs", path: cw(s) };
    case "local":
      return { label: "Local MCPs", path: cw(s) };
    case "enterprise":
      return { label: "Enterprise MCPs" };
    case "managed":
      return { label: "Managed MCPs", path: "provided by your organization" };
    case "agent": {
      let i = H_();
      return {
        label: "Active agent MCPs",
        path: i ? `@${i} frontmatter` : "agent frontmatter",
      };
    }
    case "dynamic":
      return { label: "Built-in MCPs", path: "always available" };
    default:
      return { label: s };
  }
}
function Ro(Gr) {
  let Pe = _(12),
    { s: me } = Gr;
  if (me.duplicateOf.startsWith("plugin:")) {
    let se;
    if (Pe[0] === p)
      ((se = e(t, {
        dimColor: !0,
        children:
          "To use this connector instead, disable the plugin server in /plugins",
      })),
        (Pe[0] = se));
    else se = Pe[0];
    return se;
  }
  switch (me.duplicateOfScope) {
    case "local":
    case "user":
    case "project": {
      let se;
      if (Pe[1] !== me.duplicateOf)
        ((se = Aa("mcp remove", me.duplicateOf)),
          (Pe[1] = me.duplicateOf),
          (Pe[2] = se));
      else se = Pe[2];
      let st = se;
      let it;
      if (
        Pe[3] !== st ||
        Pe[4] !== me.duplicateOf ||
        Pe[5] !== me.duplicateOfScope
      )
        ((it = st
          ? r(N, { children: ["run ", e(t, { bold: !0, children: st })] })
          : `remove the ${me.duplicateOfScope}-scope server "${me.duplicateOf}"`),
          (Pe[3] = st),
          (Pe[4] = me.duplicateOf),
          (Pe[5] = me.duplicateOfScope),
          (Pe[6] = it));
      else it = Pe[6];
      let Go;
      if (Pe[7] !== it)
        ((Go = r(t, {
          dimColor: !0,
          children: ["To use this connector instead,", " ", it],
        })),
          (Pe[7] = it),
          (Pe[8] = Go));
      else Go = Pe[8];
      return Go;
    }
    case "dynamic": {
      let se;
      if (Pe[9] === p)
        ((se = e(t, {
          dimColor: !0,
          children:
            "To use this connector instead, drop it from your --mcp-config flag",
        })),
          (Pe[9] = se));
      else se = Pe[9];
      return se;
    }
    case "enterprise":
    case "managed": {
      let se;
      if (Pe[10] === p)
        ((se = e(t, {
          dimColor: !0,
          children: "An admin-managed server takes precedence here",
        })),
          (Pe[10] = se));
      else se = Pe[10];
      return se;
    }
    default: {
      let se;
      if (Pe[11] === p)
        ((se = e(t, {
          dimColor: !0,
          children:
            "To use this connector instead, remove the duplicate server from your configuration",
        })),
          (Pe[11] = se));
      else se = Pe[11];
      return se;
    }
  }
}
function ln(s) {
  let i = new Map();
  for (let l of s) {
    let f = l.scope;
    if (!i.has(f)) i.set(f, []);
    i.get(f).push(l);
  }
  for (let [, l] of i) l.sort((f, u) => f.name.localeCompare(u.name));
  return i;
}
function Le(Jr) {
  let Qt = _(8),
    { label: Yt, path: at } = Jr,
    lt;
  if (Qt[0] !== Yt)
    ((lt = e(t, { bold: !0, children: Yt })), (Qt[0] = Yt), (Qt[1] = lt));
  else lt = Qt[1];
  const Zt = at ?? !1;
  let pt;
  if (Qt[2] !== at || Qt[3] !== Zt)
    ((pt = e(jx, { when: Zt, children: at })),
      (Qt[2] = at),
      (Qt[3] = Zt),
      (Qt[4] = pt));
  else pt = Qt[4];
  let Jo;
  if (Qt[5] !== lt || Qt[6] !== pt)
    ((Jo = r(o, { paddingLeft: 2, children: [lt, pt] })),
      (Qt[5] = lt),
      (Qt[6] = pt),
      (Qt[7] = Jo));
  else Jo = Qt[7];
  return Jo;
}
function wt({
  servers: s,
  suppressedClaudeAiConnectors: i = [],
  toolCountsByServer: l = {},
  agentServers: f,
  onSelectServer: u,
  onSelectAgentServer: m,
  onComplete: w,
  showUnusedConnectors: b,
  onToggleUnusedConnectors: J,
}) {
  let [X, j, I] = qm(0),
    { rows: oe } = ks(Se()),
    c = Ma(),
    v = V(() => {
      let a = new Set(s.filter((M) => M.scope === "agent").map((M) => M.name));
      if (a.size === 0) return f;
      return f.filter((M) => !a.has(M.name));
    }, [s, f]),
    k = V(() => {
      let a = s.filter((M) => !gHn(M.client.config));
      return ln(a);
    }, [s]),
    { claudeAiServers: S, unusedClaudeAiServers: T } = V(() => {
      let a = _yt(),
        M = [],
        pe = [];
      for (let g of s) {
        if (!gHn(g.client.config)) continue;
        if (
          (g.client.type === "needs-auth" || g.client.type === "failed") &&
          !a.has(g.name)
        )
          pe.push(g);
        else M.push(g);
      }
      return (
        M.sort((g, H) => g.name.localeCompare(H.name)),
        pe.sort((g, H) => g.name.localeCompare(H.name)),
        { claudeAiServers: M, unusedClaudeAiServers: pe }
      );
    }, [s]),
    te = V(
      () =>
        (k.get("dynamic") ?? []).sort((a, M) => a.name.localeCompare(M.name)),
      [k],
    ),
    Me = V(() => {
      let a = [];
      for (let M of So) {
        let pe = k.get(M) ?? [];
        for (let g of pe) a.push({ type: "server", server: g });
      }
      for (let M of S) a.push({ type: "server", server: M });
      if (T.length > 0) {
        if ((a.push({ type: "unused-connectors-fold" }), b))
          for (let M of T) a.push({ type: "server", server: M });
      }
      for (let M of v) a.push({ type: "agent-server", agentServer: M });
      for (let M of te) a.push({ type: "server", server: M });
      return a;
    }, [k, S, T, b, v, te]),
    We = re(() => {
      w("MCP dialog dismissed", { display: "system" });
    }, [w]),
    et = re(() => {
      let a = Me[I()];
      if (!a) return;
      if (a.type === "server") u(a.server);
      else if (a.type === "agent-server") m(a.agentServer);
      else if (a.type === "unused-connectors-fold") J();
    }, [Me, I, u, m, J]);
  (Ze(
    {
      "confirm:previous": () => j((a) => (a === 0 ? Me.length - 1 : a - 1)),
      "confirm:next": () => j((a) => (a === Me.length - 1 ? 0 : a + 1)),
      "confirm:yes": et,
      "confirm:no": We,
    },
    { context: "Confirmation" },
  ),
    E(() => {
      j((a) => Math.min(a, Math.max(0, Me.length - 1)));
    }, [Me.length, j]));
  let tt = pB(),
    Wt = V(() => {
      let a = b ? void 0 : new Set(T.map((M) => M.name));
      return s.some(
        (M) => M.client.type === "failed" && !ow(M.client) && !a?.has(M.name),
      );
    }, [s, T, b]),
    Ee = V(() => {
      let a = [],
        M = 0;
      function pe(g, H) {
        let ae = M++;
        a.push({
          key: H,
          selectableIndex: ae,
          node: e(To, {
            server: g,
            isSelected: X === ae,
            toolCount: l[g.name],
          }),
        });
      }
      for (let g of So) {
        let H = k.get(g);
        if (!H || H.length === 0) continue;
        let ae = Mo(g);
        a.push({
          key: `heading-${g}`,
          node: e(Le, { label: ae.label, path: ae.path }),
        });
        for (let Re of H) pe(Re, `${g}-${Re.name}`);
        a.push({ key: `spacer-${g}`, node: e(t, { children: " " }) });
      }
      if (S.length > 0 || T.length > 0 || i.length > 0) {
        a.push({
          key: "heading-claudeai",
          node: e(Le, { label: "claude.ai" }),
        });
        for (let g of S) pe(g, `claudeai-${g.name}`);
        if (T.length > 0) {
          let g = M++;
          if (
            (a.push({
              key: "claudeai-unused-fold",
              selectableIndex: g,
              node: e(wo, {
                isSelected: X === g,
                expanded: b,
                count: T.length,
              }),
            }),
            b)
          )
            for (let H of T) pe(H, `claudeai-${H.name}`);
        }
        for (let g of i)
          (a.push({
            key: `suppressed-${g.name}`,
            node: r(o, {
              children: [
                e(t, { children: "  " }),
                e(t, { children: g.name }),
                r(t, {
                  dimColor: !0,
                  children: [
                    " ",
                    "\xB7 ",
                    L.radioOff,
                    " hidden \u2014 same URL as your server '",
                    g.duplicateOf,
                    "'",
                  ],
                }),
              ],
            }),
          }),
            a.push({
              key: `suppressed-hint-${g.name}`,
              node: e(o, { paddingLeft: 4, children: e(Ro, { s: g }) }),
            }));
        a.push({ key: "spacer-claudeai", node: e(t, { children: " " }) });
      }
      if (v.length > 0) {
        a.push({
          key: "heading-agent-mcps",
          node: e(Le, { label: "Agent MCPs" }),
        });
        let g = M;
        for (let H of Y(v.flatMap((ae) => ae.sourceAgents))) {
          (a.push({ key: `spacer-agent-${H}`, node: e(t, { children: " " }) }),
            a.push({
              key: `subheading-agent-${H}`,
              node: e(o, {
                paddingLeft: 2,
                children: r(t, { dimColor: !0, children: ["@", H] }),
              }),
            }));
          for (let ae of v.filter((Re) => Re.sourceAgents.includes(H))) {
            let Re = g + v.indexOf(ae);
            a.push({
              key: `agent-${H}-${ae.name}`,
              selectableIndex: Re,
              node: e(Ao, { agentServer: ae, isSelected: X === Re }),
            });
          }
        }
        ((M = g + v.length),
          a.push({ key: "spacer-agent-mcps", node: e(t, { children: " " }) }));
      }
      if (te.length > 0) {
        let g = Mo("dynamic");
        a.push({
          key: "heading-dynamic",
          node: e(Le, { label: g.label, path: g.path }),
        });
        for (let H of te) pe(H, `dynamic-${H.name}`);
        a.push({ key: "spacer-dynamic", node: e(t, { children: " " }) });
      }
      if (a.at(-1)?.key.startsWith("spacer-")) a.pop();
      return a;
    }, [k, S, T, b, i, v, te, X, l]);
  if (s.length === 0 && v.length === 0 && i.length === 0) return null;
  let Xt = s.length + v.length,
    ot = Math.max(an, oe - (c ? sn : rn) - (Wt ? 1 : 0)),
    Gt = Ee.length > ot,
    nt = Gt ? Math.max(1, ot - 2) : ot,
    Xo = Math.max(
      0,
      Ee.findIndex((a) => a.selectableIndex === X),
    ),
    Xe = oa(Xo - Math.floor(nt / 2), 0, Math.max(0, Ee.length - nt)),
    Jt = Ee.slice(Xe, Xe + nt),
    qt = Xe,
    Kt = Ee.length - (Xe + Jt.length);
  return r(o, {
    flexDirection: "column",
    children: [
      e(i9e, {}),
      e(de, {
        title: "Manage MCP servers",
        subtitle: `${Xt} ${x(Xt, "server")}`,
        onCancel: We,
        hideInputGuide: !0,
        children: r(o, {
          flexDirection: "column",
          children: [
            qt > 0 &&
              e(o, {
                paddingLeft: 2,
                children: r(t, {
                  dimColor: !0,
                  children: [sv, " ", qt, " more above"],
                }),
              }),
            Jt.map((a) => e(Nl, { children: a.node }, a.key)),
            Kt > 0 &&
              e(o, {
                paddingLeft: 2,
                children: r(t, {
                  dimColor: !0,
                  children: [Lw, " ", Kt, " more below"],
                }),
              }),
            r(o, {
              flexDirection: "column",
              marginTop: Gt ? 0 : 1,
              children: [
                Wt &&
                  e(t, {
                    dimColor: !0,
                    children: tt
                      ? "\u203B Error logs shown inline with --debug"
                      : "\u203B Run claude --debug to see error logs",
                  }),
                r(t, {
                  dimColor: !0,
                  children: [
                    e(ct, {
                      url: "https://code.claude.com/docs/en/mcp",
                      children: "https://code.claude.com/docs/en/mcp",
                    }),
                    " ",
                    "for help",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      e(o, {
        paddingX: 1,
        children: e(t, {
          dimColor: !0,
          italic: !0,
          children: r(ue, {
            children: [
              e(D, { chord: ["up", "down"], action: "navigate" }),
              e(D, { chord: "enter", action: "confirm" }),
              e(je, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel",
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function wo(qr) {
  let mt = _(12),
    { isSelected: Ge, expanded: Kr, count: eo } = qr,
    qo;
  if (mt[0] !== Ge)
    ((qo = { line: 0, column: 0, active: Ge }), (mt[0] = Ge), (mt[1] = qo));
  else qo = mt[1];
  let to = _p(qo);
  const oo = Ge ? "suggestion" : void 0,
    no = Ge ? `${L.pointer} ` : "  ",
    ro = Kr ? L.arrowDown : L.arrowRight;
  let dt;
  if (mt[2] !== eo)
    ((dt = r(t, { dimColor: !0, children: ["(", eo, ")"] })),
      (mt[2] = eo),
      (mt[3] = dt));
  else dt = mt[3];
  let ft;
  if (mt[4] !== oo || mt[5] !== no || mt[6] !== ro || mt[7] !== dt)
    ((ft = r(t, {
      color: oo,
      children: [no, ro, " Show unused connectors ", dt],
    })),
      (mt[4] = oo),
      (mt[5] = no),
      (mt[6] = ro),
      (mt[7] = dt),
      (mt[8] = ft));
  else ft = mt[8];
  let Ko;
  if (mt[9] !== to || mt[10] !== ft)
    ((Ko = e(o, { ref: to, children: ft })),
      (mt[9] = to),
      (mt[10] = ft),
      (mt[11] = Ko));
  else Ko = mt[11];
  return Ko;
}
function To(Nr) {
  let q = _(62),
    { server: A, isSelected: fe, toolCount: be } = Nr,
    [R] = cn(),
    No;
  if (q[0] !== fe)
    ((No = { line: 0, column: 0, active: fe }), (q[0] = fe), (q[1] = No));
  else No = q[1];
  let so = _p(No),
    O,
    P;
  if (A.client.type === "disabled") {
    if (q[2] !== R)
      ((O = ut("inactive", R)(L.radioOff)),
        (P = "disabled"),
        (q[2] = R),
        (q[3] = O),
        (q[4] = P));
    else ((O = q[3]), (P = q[4]));
  } else if (A.client.type === "connected") {
    let Yo = !!A.client.capabilities?.tools;
    if (A.client.discoveryBearerRejected) {
      if (q[5] !== R)
        ((O = ut("warning", R)(L.triangleUpOutline)),
          (P = "connected \xB7 session token rejected"),
          (q[5] = R),
          (q[6] = O),
          (q[7] = P));
      else ((O = q[6]), (P = q[7]));
    } else if (A.client.toolsListError) {
      if (q[8] !== R)
        ((O = ut("warning", R)(L.triangleUpOutline)),
          (P = "connected \xB7 tools fetch failed"),
          (q[8] = R),
          (q[9] = O),
          (q[10] = P));
      else ((O = q[9]), (P = q[10]));
    } else if (Yo && be === 0) {
      if (q[11] !== R)
        ((O = ut("warning", R)(L.triangleUpOutline)),
          (P = "connected \xB7 no tools"),
          (q[11] = R),
          (q[12] = O),
          (q[13] = P));
      else ((O = q[12]), (P = q[13]));
    } else if (Yo && be !== void 0) {
      if (q[14] !== R || q[15] !== be)
        ((O = ut("success", R)(L.tick)),
          (P = `connected \xB7 ${be} ${x(be, "tool")}`),
          (q[14] = R),
          (q[15] = be),
          (q[16] = O),
          (q[17] = P));
      else ((O = q[16]), (P = q[17]));
    } else if (q[18] !== R)
      ((O = ut("success", R)(L.tick)),
        (P = "connected"),
        (q[18] = R),
        (q[19] = O),
        (q[20] = P));
    else ((O = q[19]), (P = q[20]));
  } else if (A.client.type === "cached") {
    if (q[21] !== A.client.cacheSavedAt || q[22] !== R || q[23] !== be) {
      let io = oye(A.client.cacheSavedAt, be);
      ((O = ut(io.tone, R)(io.glyph)), (P = io.statusText));
      ((q[21] = A.client.cacheSavedAt),
        (q[22] = R),
        (q[23] = be),
        (q[24] = O),
        (q[25] = P));
    } else ((O = q[24]), (P = q[25]));
  } else if (A.client.type === "pending") {
    let Be;
    if (q[26] !== R)
      ((Be = ut("inactive", R)(L.radioOff)), (q[26] = R), (q[27] = Be));
    else Be = q[27];
    O = Be;
    let { reconnectAttempt: Qo, maxReconnectAttempts: Zo } = A.client;
    if (Qo && Zo) P = `reconnecting (${Qo}/${Zo})\u2026`;
    else P = "connecting\u2026";
  } else if (A.client.type === "needs-auth") {
    if (q[28] !== R)
      ((O = ut("warning", R)(L.triangleUpOutline)),
        (P = "needs authentication"),
        (q[28] = R),
        (q[29] = O),
        (q[30] = P));
    else ((O = q[29]), (P = q[30]));
  } else if (A.client.errorCode === "UNCONFIGURED") {
    if (q[31] !== R)
      ((O = ut("inactive", R)(L.radioOff)),
        (P = "not configured"),
        (q[31] = R),
        (q[32] = O),
        (q[33] = P));
    else ((O = q[32]), (P = q[33]));
  } else if (q[34] !== A.client.errorCode || q[35] !== R)
    ((O = ut("error", R)(L.cross)),
      (P = A.client.errorCode === "INVALID_CONFIG" ? "config issue" : "failed"),
      (q[34] = A.client.errorCode),
      (q[35] = R),
      (q[36] = O),
      (q[37] = P));
  else ((O = q[36]), (P = q[37]));
  const Be = fe ? "suggestion" : void 0,
    ao = fe ? `${L.pointer} ` : "  ";
  let gt;
  if (q[38] !== Be || q[39] !== ao)
    ((gt = e(t, { color: Be, children: ao })),
      (q[38] = Be),
      (q[39] = ao),
      (q[40] = gt));
  else gt = q[40];
  const co = fe ? "suggestion" : void 0;
  let ht;
  if (q[41] !== A.name || q[42] !== co)
    ((ht = e(t, { color: co, children: A.name })),
      (q[41] = A.name),
      (q[42] = co),
      (q[43] = ht));
  else ht = q[43];
  const po = !fe;
  let Ct;
  if (q[44] !== O || q[45] !== po)
    ((Ct = r(t, { dimColor: po, children: [" \xB7 ", O, " "] })),
      (q[44] = O),
      (q[45] = po),
      (q[46] = Ct));
  else Ct = q[46];
  const mo = !fe;
  let yt;
  if (q[47] !== P || q[48] !== mo)
    ((yt = e(t, { dimColor: mo, children: P })),
      (q[47] = P),
      (q[48] = mo),
      (q[49] = yt));
  else yt = q[49];
  let vt;
  if (
    q[50] !== fe ||
    q[51] !== A.config ||
    q[52] !== A.scope ||
    q[53] !== A.transport
  )
    ((vt =
      A.transport === "claudeai-proxy" &&
      A.scope === "claudeai" &&
      A.config.enterpriseManaged &&
      e(t, { dimColor: !fe, children: " \xB7 managed" })),
      (q[50] = fe),
      (q[51] = A.config),
      (q[52] = A.scope),
      (q[53] = A.transport),
      (q[54] = vt));
  else vt = q[54];
  let en;
  if (
    q[55] !== so ||
    q[56] !== yt ||
    q[57] !== vt ||
    q[58] !== gt ||
    q[59] !== ht ||
    q[60] !== Ct
  )
    ((en = r(o, { ref: so, children: [gt, ht, Ct, yt, vt] })),
      (q[55] = so),
      (q[56] = yt),
      (q[57] = vt),
      (q[58] = gt),
      (q[59] = ht),
      (q[60] = Ct),
      (q[61] = en));
  else en = q[61];
  return en;
}
function Ao(Yr) {
  let ke = _(23),
    { agentServer: Ie, isSelected: we } = Yr,
    [bt] = cn(),
    tn;
  if (ke[0] !== we)
    ((tn = { line: 0, column: 0, active: we }), (ke[0] = we), (ke[1] = tn));
  else tn = ke[1];
  let uo = _p(tn),
    on;
  if (ke[2] !== Ie.needsAuth || ke[3] !== bt)
    ((on = Ie.needsAuth
      ? ut("warning", bt)(L.triangleUpOutline)
      : ut("inactive", bt)(L.radioOff)),
      (ke[2] = Ie.needsAuth),
      (ke[3] = bt),
      (ke[4] = on));
  else on = ke[4];
  let fo = on,
    go = Ie.needsAuth ? "may need auth" : "agent-only";
  const ho = we ? "suggestion" : void 0,
    Co = we ? `${L.pointer} ` : "  ";
  let xt;
  if (ke[5] !== ho || ke[6] !== Co)
    ((xt = e(t, { color: ho, children: Co })),
      (ke[5] = ho),
      (ke[6] = Co),
      (ke[7] = xt));
  else xt = ke[7];
  const vo = we ? "suggestion" : void 0;
  let St;
  if (ke[8] !== Ie.name || ke[9] !== vo)
    ((St = e(t, { color: vo, children: Ie.name })),
      (ke[8] = Ie.name),
      (ke[9] = vo),
      (ke[10] = St));
  else St = ke[10];
  const bo = !we;
  let Mt;
  if (ke[11] !== fo || ke[12] !== bo)
    ((Mt = r(t, { dimColor: bo, children: [" \xB7 ", fo, " "] })),
      (ke[11] = fo),
      (ke[12] = bo),
      (ke[13] = Mt));
  else Mt = ke[13];
  const xo = !we;
  let Rt;
  if (ke[14] !== go || ke[15] !== xo)
    ((Rt = e(t, { dimColor: xo, children: go })),
      (ke[14] = go),
      (ke[15] = xo),
      (ke[16] = Rt));
  else Rt = ke[16];
  let nn;
  if (
    ke[17] !== uo ||
    ke[18] !== Rt ||
    ke[19] !== xt ||
    ke[20] !== St ||
    ke[21] !== Mt
  )
    ((nn = r(o, { ref: uo, children: [xt, St, Mt, Rt] })),
      (ke[17] = uo),
      (ke[18] = Rt),
      (ke[19] = xt),
      (ke[20] = St),
      (ke[21] = Mt),
      (ke[22] = nn));
  else nn = ke[22];
  return nn;
}
function bn(Ts) {
  return Ts.mcp;
}
function xn(As) {
  return As.agentDefinitions;
}
function Sn(Ps) {
  return Ps.name !== "ide";
}
function Mn(Is, $s) {
  return Is.name.localeCompare($s.name);
}
function Rn() {}
function wn(Ds) {
  return !Ds;
}
function He(fs) {
  let B = _(76),
    { onComplete: K } = fs,
    Q = U(bn),
    Po = U(xn),
    Io = Q.clients,
    pn;
  if (B[0] === p) ((pn = { type: "list" }), (B[0] = pn));
  else pn = B[0];
  let [y, Ce] = d(pn),
    mn;
  if (B[1] === p) ((mn = []), (B[1] = mn));
  else mn = B[1];
  let [ye, gs] = d(mn),
    [ko, hs] = d(!1),
    dn;
  if (B[2] !== Po.allAgents)
    ((dn = gmn(Po.allAgents)), (B[2] = Po.allAgents), (B[3] = dn));
  else dn = B[3];
  let xe = dn,
    un;
  if (B[4] !== Io) ((un = Io.filter(Sn).sort(Mn)), (B[4] = Io), (B[5] = un));
  else un = B[5];
  let ie = un,
    $o;
  if (B[6] !== ie || B[7] !== Q.tools) {
    $o = {};
    for (const fn of ie) $o[fn.name] = BM(Q.tools, fn.name).length;
    ((B[6] = ie), (B[7] = Q.tools), (B[8] = $o));
  } else $o = B[8];
  let Do = $o,
    gn,
    hn;
  if (B[9] !== ie || B[10] !== Q.tools)
    ((gn = () => {
      let Cn = !1;
      let At = async function At(Tt, Cs) {
        let { ClaudeAuthProvider: ys } = import.meta
          .require("../MCP客户端/mcpClientModule.4cyej0np.js")
          .mcpAuthModule();
        let vs = await new ys(Tt.name, Cs).tokens().catch(Rn);
        let bs = Gi() !== null && Tt.type === "connected";
        let xs = ts(Tt) && BM(Q.tools, Tt.name).length > 0;
        return Boolean(vs) || bs || xs;
      };
      let Oo = async function Oo() {
        let Ss = await Promise.all(
          ie.map(async (ce) => {
            let Pt = { name: ce.name, client: ce, scope: ce.config.scope };
            switch (ce.config.type) {
              case "claudeai-proxy": {
                return {
                  ...Pt,
                  transport: "claudeai-proxy",
                  isAuthenticated: !1,
                  config: ce.config,
                };
              }
              case "sse": {
                return {
                  ...Pt,
                  transport: "sse",
                  isAuthenticated: await At(ce, ce.config),
                  config: ce.config,
                };
              }
              case "http": {
                return {
                  ...Pt,
                  transport: "http",
                  isAuthenticated: await At(ce, ce.config),
                  config: ce.config,
                };
              }
              default: {
                return { ...Pt, transport: "stdio", config: ce.config };
              }
            }
          }),
        );
        if (Cn) {
          return;
        }
        gs(Ss);
      };
      return (
        Oo(),
        () => {
          Cn = !0;
        }
      );
    }),
      (hn = [ie, Q.tools]),
      (B[9] = ie),
      (B[10] = Q.tools),
      (B[11] = gn),
      (B[12] = hn));
  else ((gn = B[11]), (hn = B[12]));
  E(gn, hn);
  let yn;
  if (
    B[13] !== xe.length ||
    B[14] !== ie.length ||
    B[15] !== Q.suppressedClaudeAiConnectors?.length ||
    B[16] !== K ||
    B[17] !== ye.length
  )
    ((yn = () => {
      if (ye.length === 0 && ie.length > 0) {
        return;
      }
      if (
        ye.length === 0 &&
        xe.length === 0 &&
        (Q.suppressedClaudeAiConnectors?.length ?? 0) === 0
      )
        K(
          "No MCP servers configured. Run `claude doctor` if this is unexpected \u2014 it lists MCP config files that failed validation. Otherwise, run `claude mcp --help` or visit https://code.claude.com/docs/en/mcp to learn more.",
        );
    }),
      (B[13] = xe.length),
      (B[14] = ie.length),
      (B[15] = Q.suppressedClaudeAiConnectors?.length),
      (B[16] = K),
      (B[17] = ye.length),
      (B[18] = yn));
  else yn = B[18];
  const Eo = Q.suppressedClaudeAiConnectors?.length;
  let vn;
  if (
    B[19] !== xe.length ||
    B[20] !== ie.length ||
    B[21] !== K ||
    B[22] !== ye.length ||
    B[23] !== Eo
  )
    ((vn = [ye.length, ie.length, xe.length, Eo, K]),
      (B[19] = xe.length),
      (B[20] = ie.length),
      (B[21] = K),
      (B[22] = ye.length),
      (B[23] = Eo),
      (B[24] = vn));
  else vn = B[24];
  switch ((E(yn, vn), y.type)) {
    case "list": {
      let Z, z;
      if (B[25] === p)
        ((Z = (Ms) => Ce({ type: "server-menu", server: Ms })),
          (z = (Rs) => Ce({ type: "agent-server-menu", agentServer: Rs })),
          (B[25] = Z),
          (B[26] = z));
      else ((Z = B[25]), (z = B[26]));
      let ne;
      if (B[27] === p) ((ne = () => hs(wn)), (B[27] = ne));
      else ne = B[27];
      let Te;
      if (
        B[28] !== xe ||
        B[29] !== Q.suppressedClaudeAiConnectors ||
        B[30] !== K ||
        B[31] !== ye ||
        B[32] !== ko ||
        B[33] !== Do ||
        B[34] !== y.defaultTab
      )
        ((Te = e(wt, {
          servers: ye,
          suppressedClaudeAiConnectors: Q.suppressedClaudeAiConnectors,
          toolCountsByServer: Do,
          agentServers: xe,
          onSelectServer: Z,
          onSelectAgentServer: z,
          onComplete: K,
          defaultTab: y.defaultTab,
          showUnusedConnectors: ko,
          onToggleUnusedConnectors: ne,
        })),
          (B[28] = xe),
          (B[29] = Q.suppressedClaudeAiConnectors),
          (B[30] = K),
          (B[31] = ye),
          (B[32] = ko),
          (B[33] = Do),
          (B[34] = y.defaultTab),
          (B[35] = Te));
      else Te = B[35];
      return Te;
    }
    case "server-menu": {
      let Z;
      if (B[36] !== Q.tools || B[37] !== y.server.name)
        ((Z = BM(Q.tools, y.server.name)),
          (B[36] = Q.tools),
          (B[37] = y.server.name),
          (B[38] = Z));
      else Z = B[38];
      let Ue = Z;
      let Fe =
        y.server.transport === "claudeai-proxy" ? "claude.ai" : "Claude Code";
      if (y.server.transport === "stdio") {
        let z;
        if (B[39] !== y.server)
          ((z = () => Ce({ type: "server-tools", server: y.server })),
            (B[39] = y.server),
            (B[40] = z));
        else z = B[40];
        let ne;
        if (B[41] !== Fe)
          ((ne = () => Ce({ type: "list", defaultTab: Fe })),
            (B[41] = Fe),
            (B[42] = ne));
        else ne = B[42];
        let Te;
        if (
          B[43] !== K ||
          B[44] !== Ue.length ||
          B[45] !== z ||
          B[46] !== ne ||
          B[47] !== y.server
        )
          ((Te = e(sit, {
            server: y.server,
            serverToolsCount: Ue.length,
            onViewTools: z,
            onCancel: ne,
            onComplete: K,
          })),
            (B[43] = K),
            (B[44] = Ue.length),
            (B[45] = z),
            (B[46] = ne),
            (B[47] = y.server),
            (B[48] = Te));
        else Te = B[48];
        return Te;
      } else {
        let z;
        if (B[49] !== y.server)
          ((z = () => Ce({ type: "server-tools", server: y.server })),
            (B[49] = y.server),
            (B[50] = z));
        else z = B[50];
        let ne;
        if (B[51] !== Fe)
          ((ne = () => Ce({ type: "list", defaultTab: Fe })),
            (B[51] = Fe),
            (B[52] = ne));
        else ne = B[52];
        let Te;
        if (
          B[53] !== K ||
          B[54] !== Ue.length ||
          B[55] !== z ||
          B[56] !== ne ||
          B[57] !== y.server
        )
          ((Te = e(sye, {
            server: y.server,
            serverToolsCount: Ue.length,
            onViewTools: z,
            onCancel: ne,
            onComplete: K,
          })),
            (B[53] = K),
            (B[54] = Ue.length),
            (B[55] = z),
            (B[56] = ne),
            (B[57] = y.server),
            (B[58] = Te));
        else Te = B[58];
        return Te;
      }
    }
    case "server-tools": {
      let Z, z;
      if (B[59] !== y.server)
        ((Z = (ws) =>
          Ce({ type: "server-tool-detail", server: y.server, tool: ws })),
          (z = () => Ce({ type: "server-menu", server: y.server })),
          (B[59] = y.server),
          (B[60] = Z),
          (B[61] = z));
      else ((Z = B[60]), (z = B[61]));
      let ne;
      if (B[62] !== Z || B[63] !== z || B[64] !== y.server)
        ((ne = e(iWe, { server: y.server, onSelectTool: Z, onBack: z })),
          (B[62] = Z),
          (B[63] = z),
          (B[64] = y.server),
          (B[65] = ne));
      else ne = B[65];
      return ne;
    }
    case "server-tool-detail": {
      let Z;
      if (B[66] !== y.server)
        ((Z = () => Ce({ type: "server-tools", server: y.server })),
          (B[66] = y.server),
          (B[67] = Z));
      else Z = B[67];
      let z;
      if (B[68] !== Z || B[69] !== y.server || B[70] !== y.tool)
        ((z = e(sWe, { tool: y.tool, server: y.server, onBack: Z })),
          (B[68] = Z),
          (B[69] = y.server),
          (B[70] = y.tool),
          (B[71] = z));
      else z = B[71];
      return z;
    }
    case "agent-server-menu": {
      let Z;
      if (B[72] === p)
        ((Z = () => Ce({ type: "list", defaultTab: "Agents" })), (B[72] = Z));
      else Z = B[72];
      let z;
      if (B[73] !== K || B[74] !== y.agentServer)
        ((z = e(rt, {
          agentServer: y.agentServer,
          onCancel: Z,
          onComplete: K,
        })),
          (B[73] = K),
          (B[74] = y.agentServer),
          (B[75] = z));
      else z = B[75];
      return z;
    }
  }
}
F();
function Ft(oi) {
  let ge = _(30),
    { serverName: W, onComplete: Bo } = oi,
    Tn;
  if (ge[0] !== Bo)
    ((Tn = (Lo, ...It) => {
      let ni = It;
      return Bo(typeof Lo === "string" ? Qn(Lo) : Lo, ...ni);
    }),
      (ge[0] = Bo),
      (ge[1] = Tn));
  else Tn = ge[1];
  let le = Tn,
    [Uo] = cn(),
    kt = Yn(),
    $t = Bae(),
    { storageV5: Dt } = _e(),
    { host: Ot } = Ye(),
    Et = d_(),
    [ri, ze] = d(!0),
    [Bt, Je] = d(null),
    It,
    An;
  if (
    ge[2] !== Et ||
    ge[3] !== Ot ||
    ge[4] !== le ||
    ge[5] !== $t ||
    ge[6] !== W ||
    ge[7] !== Dt ||
    ge[8] !== kt
  )
    ((It = () => {
      let _o = async function _o() {
        try {
          let Pn = kt.getState().mcp.clients.find((si) => si.name === W);
          if (!Pn) {
            (Je(`MCP server "${gr(W)}" not found`),
              ze(!1),
              le(`MCP server "${gr(W)}" not found`));
            return;
          }
          if (MIe(Pn) === "disabled") {
            let In = Cee(W);
            (Je(In), ze(!1), le(In));
            return;
          }
          let ii = await $t(W);
          bb91: switch (ii.client.type) {
            case "connected": {
              (ze(!1), le(`Successfully reconnected to ${gr(W)}`));
              break bb91;
            }
            case "needs-auth": {
              if ((Je(`${gr(W)} requires authentication`), ze(!1), ap())) {
                let ai = await aye(
                  Ot,
                  Y2(
                    `authenticate ${gr(W)} \u2014 open this session and run /mcp`,
                  ),
                  "MCP authentication needed",
                  Dt,
                );
                le(
                  `${gr(W)} requires authentication. Open this session and run /mcp to authenticate.` +
                    (ai ? ' It now shows "needs input" in agent view.' : ""),
                );
              } else
                le(
                  `${gr(W)} requires authentication. Use /mcp to authenticate.`,
                );
              break bb91;
            }
            case "cached":
            case "pending":
            case "failed":
            case "disabled": {
              (Je(`Failed to reconnect to ${gr(W)}`),
                ze(!1),
                le(`Failed to reconnect to ${gr(W)}`));
              break bb91;
            }
            default:
          }
        } catch (he) {
          let Lt = he;
          let Ut = Lt instanceof Error ? Lt.message : String(Lt);
          if ((Je(Ut), ze(!1), Lt instanceof mi)) le(ka(Ut));
          else if (lo(Et))
            (n(`mcp reconnect (typed) error for ${Qn(W)}: ${Ut}`, {
              level: "error",
            }),
              le(
                `Error reconnecting to ${gr(W)} (detail withheld on this connection).`,
              ));
          else le(`Error: ${ka(Ut)}`);
        }
      };
      _o();
    }),
      (An = [W, $t, kt, le, Dt, Ot, Et]),
      (ge[2] = Et),
      (ge[3] = Ot),
      (ge[4] = le),
      (ge[5] = $t),
      (ge[6] = W),
      (ge[7] = Dt),
      (ge[8] = kt),
      (ge[9] = It),
      (ge[10] = An));
  else ((It = ge[9]), (An = ge[10]));
  if ((E(It, An), ri)) {
    let he;
    if (ge[11] !== W)
      ((he = r(t, {
        color: "text",
        children: ["Reconnecting to ", e(t, { bold: !0, children: W })],
      })),
        (ge[11] = W),
        (ge[12] = he));
    else he = ge[12];
    let $e;
    if (ge[13] === p)
      (($e = e($n, { message: "Establishing connection to MCP server" })),
        (ge[13] = $e));
    else $e = ge[13];
    let De;
    if (ge[14] !== he)
      ((De = r(o, {
        flexDirection: "column",
        gap: 1,
        padding: 1,
        children: [he, $e],
      })),
        (ge[14] = he),
        (ge[15] = De));
    else De = ge[15];
    return De;
  }
  if (Bt) {
    let he;
    if (ge[16] !== Uo)
      ((he = ut("error", Uo)(L.cross)), (ge[16] = Uo), (ge[17] = he));
    else he = ge[17];
    let $e;
    if (ge[18] !== he)
      (($e = r(t, { children: [he, " "] })), (ge[18] = he), (ge[19] = $e));
    else $e = ge[19];
    let De;
    if (ge[20] !== W)
      ((De = r(t, {
        color: "error",
        children: ["Failed to reconnect to ", W],
      })),
        (ge[20] = W),
        (ge[21] = De));
    else De = ge[21];
    let _t;
    if (ge[22] !== $e || ge[23] !== De)
      ((_t = r(o, { children: [$e, De] })),
        (ge[22] = $e),
        (ge[23] = De),
        (ge[24] = _t));
    else _t = ge[24];
    let jt;
    if (ge[25] !== Bt)
      ((jt = r(t, { dimColor: !0, children: ["Error: ", Bt] })),
        (ge[25] = Bt),
        (ge[26] = jt));
    else jt = ge[26];
    let kn;
    if (ge[27] !== _t || ge[28] !== jt)
      ((kn = r(o, {
        flexDirection: "column",
        gap: 1,
        padding: 1,
        children: [_t, jt],
      })),
        (ge[27] = _t),
        (ge[28] = jt),
        (ge[29] = kn));
    else kn = ge[29];
    return kn;
  }
  return null;
}
function Vn(zi) {
  return zi.mcp.clients;
}
function Wn(Wi) {
  return Wi.name !== "ide";
}
function Xn(Xi) {
  return I4(Xi) === "needs-approval";
}
function Gn(Ji) {
  return Ji.status === "fulfilled";
}
function Wo(Li) {
  let Ui = _(8),
    { action: qe, target: ee, onComplete: Oe } = Li,
    Ht = U(Vn),
    Ke = P8(),
    zt = d_(),
    Dn = C(!1),
    On,
    En;
  if (
    Ui[0] !== qe ||
    Ui[1] !== zt ||
    Ui[2] !== Ht ||
    Ui[3] !== Oe ||
    Ui[4] !== ee ||
    Ui[5] !== Ke
  )
    ((On = () => {
      if (Dn.current) {
        return;
      }
      Dn.current = !0;
      let Ae = qe === "enable";
      let Bn = Ht.filter(Wn);
      let Ve = ee === "all" ? Bn : Bn.filter((_i) => _i.name === ee);
      let Fo = Ve.filter(
        (jo) =>
          I4(jo) !== "needs-approval" &&
          (Ae ? jo.type === "disabled" : jo.type !== "disabled"),
      );
      let Vt = Gle();
      let Ho = ee === "all" && Vt ? CSe(Ve, Ae, Vt) : null;
      if (Fo.length === 0) {
        let Ln = ee !== "all" && Ve.length > 0 && Vt ? Vt(ee) : void 0;
        Oe(
          ee === "all"
            ? (Ho ??
                `All MCP servers are already ${Ae ? "enabled" : "disabled"}`)
            : Ve.length === 0
              ? `MCP server "${gr(ee)}" not found`
              : Ve.some(Xn)
                ? `MCP server "${gr(ee)}" is pending approval \u2014 approve it via /mcp first`
                : Ae && Ln === !0
                  ? Ve.some(ts)
                    ? W3e(ee)
                    : s2(ee)
                  : !Ae && Ln === !1
                    ? j3e(ee)
                    : `MCP server "${gr(ee)}" is already ${Ae ? "enabled" : "disabled"}`,
        );
        return;
      }
      if (ee !== "all") {
        Promise.all(Fo.map((ji) => Ke(ji.name)))
          .then(
            () => Oe(`MCP server "${gr(ee)}" ${Ae ? "enabled" : "disabled"}`),
            (Fi) => Oe(YZ(Fi, ee, qe, { persistsOffBox: lo(zt) })),
          )
          .catch(h);
        return;
      }
      Promise.allSettled(Fo.map((Hi) => Ke(Hi.name)))
        .then((zo) => {
          for (const Un of zo) {
            if (Un.status === "rejected") h(Un.reason);
          }
          let _n = G(zo, Gn);
          let jn = zo.length - _n;
          Oe(
            `${Ae ? "Enabled" : "Disabled"} ${_n} MCP server(s)` +
              (jn > 0
                ? ` (${jn} couldn't be changed \u2014 run /mcp to check)`
                : "") +
              (Ho !== null ? `. ${Ho}` : ""),
          );
        })
        .catch(h);
    }),
      (En = [qe, ee, Ht, Ke, Oe, zt]),
      (Ui[0] = qe),
      (Ui[1] = zt),
      (Ui[2] = Ht),
      (Ui[3] = Oe),
      (Ui[4] = ee),
      (Ui[5] = Ke),
      (Ui[6] = On),
      (Ui[7] = En));
  else ((On = Ui[6]), (En = Ui[7]));
  return (E(On, En), null);
}
var Fn = "open this session to manage MCP servers",
  Hn =
    "Can't open MCP settings while no terminal is attached to this background session. Attach to it and run /mcp again, or use `/mcp enable|disable|reconnect <server>` to steer without the panel.",
  zn =
    'Can\'t open MCP settings while no terminal is attached to this background session. This session now shows "needs input" in agent view \u2014 open it and run /mcp to manage servers, or use `/mcp enable|disable|reconnect <server>` to steer without the panel.';
async function Vo(s, i) {
  let l = await aye(i.session.host, Fn, "MCP settings requested", i.storageV5);
  s(l ? zn : Hn, { display: "system" });
}
function Qe(s) {
  return (i, l) => s(typeof i === "string" ? Qn(i) : i, l);
}
async function Ei(s, i, l) {
  if (l) {
    let f = /^(\S+)\s*(.*)$/.exec(l.trim()),
      u = f?.[1] ?? "",
      m = f?.[2] ?? "";
    if (u === "no-redirect") {
      if (ap()) return (await Vo(s, i), null);
      return e(He, { onComplete: Qe(s) });
    }
    if (u === "reconnect" && m)
      return e(Ft, { serverName: m, onComplete: Qe(s) });
    if (u === "enable" || u === "disable")
      return e(Wo, { action: u, target: m || "all", onComplete: Qe(s) });
  }
  if (ap()) return (await Vo(s, i), null);
  return e(He, { onComplete: Qe(s) });
}
export { Ei as call };

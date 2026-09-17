// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { saveGlobalConfig, getGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { getStringWidth } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { CLAUDE_BULLET_GLYPH, EFFORT_MEDIUM_GLYPH, PAUSE_GLYPH, AUTO_ACCEPT_GLYPH, LOZENGE_OUTLINE_GLYPH, LOZENGE_FILLED_GLYPH } from "../权限系统/chunk-e4pfvp7x.js";
import { Box, Text, useAnimationFrame, useTimeout } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybindingDisplayText } from "../../01-核心基础设施/共享小工具-未细化/use-keybinding-display-text.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { useKeybindings } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { Select } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { StatusIndicator, shouldReduceMotion } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { ProgressBar } from "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import { useSettings } from "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { Qr } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import { pickRandom } from "../Hooks钩子/spinner-store.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { splitTextForShimmer } from "../远程控制-Bridge/remote-control-ui-strings.js";
import { V, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function Go(Wt) {
  return Wt.split(
    `
`,
  ).map(mo);
}
function Wo(Io, Zt) {
  return e(Text, { color: Io.color, children: Io.text }, Zt);
}
function Qo(No, Ot) {
  return e(Text, { dimColor: No.dim, children: No.segments.map(Wo) }, Ot);
}
function Zo() {
  return [];
}
function Oo(sn, rn) {
  return sn.x - rn.x;
}
function Ho(an, cn) {
  let no = 0;
  return e(
    Box,
    {
      height: 1,
      children: an.map((he, ln) => {
        let dn = Math.max(0, he.x - no);
        return (
          (no = Math.max(no, he.x) + 1),
          r(
            Text,
            {
              children: [
                " ".repeat(dn),
                e(Text, { color: he.color, children: he.char }),
              ],
            },
            ln,
          )
        );
      }),
    },
    cn,
  );
}
function So(bn) {
  return (bn + 1) % W.length;
}
var G = 3000,
  E = 48,
  Q = 3;
function Y(Yt) {
  let $e = _(10),
    { live: Ke, boxRef: Ye, children: je } = Yt,
    de;
  if ($e[0] !== je)
    ((de = e(Box, {
      flexDirection: "column",
      width: E - 4,
      height: Q,
      children: je,
    })),
      ($e[0] = je),
      ($e[1] = de));
  else de = $e[1];
  const Fe = !Ke,
    Je = Ke ? "claude" : void 0,
    Xe = Ke ? `${LOZENGE_FILLED_GLYPH} try it` : `  ${EFFORT_MEDIUM_GLYPH} demo`;
  let me;
  if ($e[2] !== Fe || $e[3] !== Je || $e[4] !== Xe)
    ((me = e(Box, {
      position: "absolute",
      marginLeft: E - 12,
      children: e(Text, { dimColor: Fe, color: Je, children: Xe }),
    })),
      ($e[2] = Fe),
      ($e[3] = Je),
      ($e[4] = Xe),
      ($e[5] = me));
  else me = $e[5];
  let Ao;
  if ($e[6] !== Ye || $e[7] !== de || $e[8] !== me)
    ((Ao = r(Box, {
      ref: Ye,
      borderStyle: "round",
      borderColor: "inactive",
      paddingX: 1,
      width: E,
      height: Q + 2,
      children: [de, me],
    })),
      ($e[6] = Ye),
      ($e[7] = de),
      ($e[8] = me),
      ($e[9] = Ao));
  else Ao = $e[9];
  return Ao;
}
var Fo = /\[(\w+):([^\]]*)\]/g;
function mo(s) {
  let c = s.startsWith("#"),
    n = c ? s.slice(1) : s,
    m = [],
    l = 0;
  for (let y of n.matchAll(Fo)) {
    if (y.index > l) m.push({ text: n.slice(l, y.index) });
    (m.push({ text: y[2], color: y[1] }), (l = y.index + y[0].length));
  }
  if (l < n.length) m.push({ text: n.slice(l) });
  if (m.length === 0) m.push({ text: "" });
  return { dim: c, segments: m };
}
function v(jt) {
  let Qt = _(4),
    { frames: $t } = jt,
    Mo = $t.map(Go),
    Ft = shouldReduceMotion(useSettings().prefersReducedMotion),
    [Ge, Jt] = useAnimationFrame(Ft ? null : G),
    Xt = Math.floor(Jt / G) % Mo.length,
    Gt = Mo[Xt];
  const Qe = Y,
    We = Gt.map(Qo);
  let Uo;
  if (Qt[0] !== Qe || Qt[1] !== Ge || Qt[2] !== We)
    ((Uo = e(Qe, { boxRef: Ge, children: We })),
      (Qt[0] = Qe),
      (Qt[1] = Ge),
      (Qt[2] = We),
      (Qt[3] = Uo));
  else Uo = Qt[3];
  return Uo;
}
var W = [
    { label: "default", symbol: "", color: "text" },
    { label: "accept edits on", symbol: AUTO_ACCEPT_GLYPH, color: "autoAccept" },
    { label: "plan mode on", symbol: PAUSE_GLYPH, color: "planMode" },
    { label: "auto mode on", symbol: AUTO_ACCEPT_GLYPH, color: "warning" },
  ],
  Z = 80,
  po = 60,
  O = 1400,
  P = 16,
  ho = 60,
  ke = 100,
  Jo = [LOZENGE_FILLED_GLYPH, LOZENGE_OUTLINE_GLYPH, CLAUDE_BULLET_GLYPH, "\xB7"],
  Xo = ["claude", "success", "warning", "suggestion", "autoAccept"];
function fo(s) {
  let c = [];
  for (let n = 0; n < s; n++)
    c.push({
      x: Math.floor(Math.random() * ke),
      delay: Math.random() * 400,
      speed: 0.7 + Math.random() * 0.6,
      char: pickRandom(Jo),
      color: pickRandom(Xo),
    });
  return c;
}
function H(Ht) {
  let Oe = _(6),
    { onDone: pe } = Ht,
    _o;
  if (Oe[0] === MEMO_CACHE_SENTINEL) ((_o = fo(40)), (Oe[0] = _o));
  else _o = Oe[0];
  let St = _o,
    en = shouldReduceMotion(useSettings().prefersReducedMotion),
    [He, qo] = useAnimationFrame(en ? null : po),
    [on] = d(qo),
    Se = qo - on,
    Eo;
  if (Oe[1] !== pe) ((Eo = [pe]), (Oe[1] = pe), (Oe[2] = Eo));
  else Eo = Oe[2];
  useTimeout(pe, O + 600, Eo);
  let zo;
  if (Oe[3] !== Se || Oe[4] !== He) {
    let eo = Array.from({ length: P }, Zo);
    for (const oo of St) {
      let tn = Math.max(0, Se - oo.delay);
      let to = Math.floor((tn / O) * P * oo.speed);
      if (to >= 0 && to < P) eo[to].push(oo);
    }
    for (const nn of eo) nn.sort(Oo);
    zo = e(Box, {
      ref: He,
      position: "absolute",
      marginLeft: ho,
      flexDirection: "column",
      width: ke,
      height: P,
      children: eo.map(Ho),
    });
    ((Oe[3] = Se), (Oe[4] = He), (Oe[5] = zo));
  } else zo = Oe[5];
  return zo;
}
function S(un) {
  let X = _(14),
    { text: fe } = un,
    mn = getStringWidth(fe),
    pn = shouldReduceMotion(useSettings().prefersReducedMotion),
    [so, hn] = useAnimationFrame(pn ? null : Z),
    fn = mn + 20,
    ro = (Math.floor(hn / Z) % fn) - 10,
    Vo;
  if (X[0] !== ro || X[1] !== fe)
    ((Vo = splitTextForShimmer(fe, ro)), (X[0] = ro), (X[1] = fe), (X[2] = Vo));
  else Vo = X[2];
  let { before: io, shimmer: ao, after: co } = Vo,
    ge;
  if (X[3] !== io)
    ((ge = e(Text, { bold: !0, color: "claude", children: io })),
      (X[3] = io),
      (X[4] = ge));
  else ge = X[4];
  let ye;
  if (X[5] !== ao)
    ((ye = e(Text, { bold: !0, color: "claudeShimmer", children: ao })),
      (X[5] = ao),
      (X[6] = ye));
  else ye = X[6];
  let be;
  if (X[7] !== co)
    ((be = e(Text, { bold: !0, color: "claude", children: co })),
      (X[7] = co),
      (X[8] = be));
  else be = X[8];
  let Ko;
  if (X[9] !== so || X[10] !== ge || X[11] !== ye || X[12] !== be)
    ((Ko = r(Box, { ref: so, children: [ge, ye, be] })),
      (X[9] = so),
      (X[10] = ge),
      (X[11] = ye),
      (X[12] = be),
      (X[13] = Ko));
  else Ko = X[13];
  return Ko;
}
function oe() {
  let xe = _(11),
    [gn, yn] = d(0),
    I = W[gn],
    lo = useKeybindingDisplayText("confirm:cycleMode", "Confirmation", "shift+tab"),
    Yo,
    jo;
  if (xe[0] === MEMO_CACHE_SENTINEL)
    ((Yo = { "confirm:cycleMode": () => yn(So) }),
      (jo = { context: "Confirmation" }),
      (xe[0] = Yo),
      (xe[1] = jo));
  else ((Yo = xe[0]), (jo = xe[1]));
  useKeybindings(Yo, jo);
  let we;
  if (xe[2] !== lo)
    ((we = r(Text, {
      dimColor: !0,
      children: [
        "Press ",
        lo,
        " now",
        `

`,
      ],
    })),
      (xe[2] = lo),
      (xe[3] = we));
  else we = xe[3];
  const uo = I.symbol ? `${I.symbol} ` : "  ";
  let Ce;
  if (xe[4] !== I.color || xe[5] !== I.label || xe[6] !== uo)
    ((Ce = r(Text, { color: I.color, children: [uo, I.label] })),
      (xe[4] = I.color),
      (xe[5] = I.label),
      (xe[6] = uo),
      (xe[7] = Ce));
  else Ce = xe[7];
  let $o;
  if (xe[8] !== we || xe[9] !== Ce)
    (($o = e(Y, { live: !0, children: r(Text, { children: [we, Ce] }) })),
      (xe[8] = we),
      (xe[9] = Ce),
      (xe[10] = $o));
  else $o = xe[10];
  return $o;
}
function B(zn) {
  let Vn = _(2),
    { children: go } = zn,
    ot;
  if (Vn[0] !== go)
    ((ot = e(Text, { bold: !0, color: "claude", children: go })),
      (Vn[0] = go),
      (Vn[1] = ot));
  else ot = Vn[1];
  return ot;
}
function a(Kn) {
  let Yn = _(2),
    { children: yo } = Kn,
    tt;
  if (Yn[0] !== yo)
    ((tt = e(Text, { color: "suggestion", children: yo })),
      (Yn[0] = yo),
      (Yn[1] = tt));
  else tt = Yn[1];
  return tt;
}
var POWERUP_LESSONS = [
  {
    id: "at-mentions",
    title: "Talk to your codebase",
    tagline: "@ files, line refs",
    body: r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(Text, {
          children: [
            "Type ",
            e(B, { children: "@" }),
            " anywhere in your prompt to fuzzy-find and attach a file. Claude reads it before answering \u2014 no more pasting code.",
          ],
        }),
        e(v, {
          frames: [
            `> what does [suggestion:@]
#type a file name\u2026`,
            `> what does [suggestion:@src/auth.ts]
  [suggestion:\u276F src/auth.ts]
#   src/auth.test.ts`,
            `> what does [suggestion:@src/auth.ts] do?
#\u25D0 Reading src/auth.ts\u2026`,
            `> what does [suggestion:@src/auth.ts] do?
Exports validateToken() which
checks JWT expiry and signature.`,
          ],
        }),
        r(Text, {
          children: [
            "Reference specific lines with ",
            e(a, { children: "src/app.ts:42" }),
            " and Claude jumps straight there. Works in both directions: Claude cites files the same way, so you can click to open them in your editor.",
          ],
        }),
        r(Text, {
          dimColor: !0,
          children: [
            "Also try: ",
            e(a, { children: "@folder/" }),
            " to attach a whole directory tree.",
          ],
        }),
      ],
    }),
  },
  {
    id: "modes",
    title: "Steer with modes",
    tagline: "shift+tab, plan, auto",
    body: e(bo, {}),
  },
  {
    id: "undo",
    title: "Undo anything",
    tagline: "/rewind, Esc-Esc",
    body: r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(Text, {
          children: [
            "Claude checkpoints your files before every edit. Press",
            " ",
            e(B, { children: "Esc Esc" }),
            " (double-tap) to open ",
            e(a, { children: "/rewind" }),
            " and roll back to any prior state \u2014 code, conversation, or both.",
          ],
        }),
        e(v, {
          frames: [
            `[success:\u2713] Updated regex in parser.ts
#[error:8 tests failing]`,
            `#press Esc Esc
Rewind to:
  [suggestion:\u276F before parser.ts edit]`,
            `#[success:\u2713] parser.ts restored
> try a simpler approach
#\u25D0 thinking\u2026`,
          ],
        }),
        e(Text, {
          children:
            "Went down the wrong path? Rewind to before the detour and try a different prompt. Your git history stays clean.",
        }),
        r(Text, {
          dimColor: !0,
          children: [
            "Also: ",
            e(a, { children: "/clear" }),
            " wipes conversation but keeps files.",
            " ",
            e(a, { children: "/branch" }),
            " forks the conversation to try two approaches.",
          ],
        }),
      ],
    }),
  },
  {
    id: "background",
    title: "Run in the background",
    tagline: "tasks, /tasks",
    body: r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(Text, {
          children: [
            "Long builds and test suites do not have to block you. Add",
            " ",
            e(B, { children: "&" }),
            " to any bash command and it runs in the background \u2014 you keep chatting, Claude notifies you when it finishes.",
          ],
        }),
        e(v, {
          frames: [
            `> run the test suite [claude:&]
#task started in background`,
            `> now fix the lint in app.ts
#\u25D0 Editing app.ts\u2026
#[warning:\u25D0] bun test \xB7 12s`,
            `> now fix the lint in app.ts
[success:\u2713] Removed unused import
#[warning:\u25D0] bun test \xB7 28s`,
            `> now fix the lint in app.ts
[success:\u2713] Removed unused import
#[success:\u2713] bun test \xB7 284 pass`,
          ],
        }),
        r(Text, {
          children: [
            "Run ",
            e(a, { children: "/tasks" }),
            " to see everything in flight. Claude can read task output mid-run and react to failures automatically.",
          ],
        }),
        e(Text, {
          dimColor: !0,
          children: "Subagents also run as tasks \u2014 it is all one queue.",
        }),
      ],
    }),
  },
  {
    id: "memory",
    title: "Teach Claude your rules",
    tagline: "CLAUDE.md, /memory",
    body: r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(Text, {
          children: [
            "Drop a ",
            e(a, { children: "CLAUDE.md" }),
            " file in your repo and Claude reads it at the start of every session. Put your conventions there: test commands, style rules, do-not-touch directories.",
          ],
        }),
        e(v, {
          frames: [
            `#\u2500 CLAUDE.md \u2500
#Run tests with: [suggestion:bun test]
#Never edit src/legacy/`,
            `> add tests for the cache
#\u25D0 reading CLAUDE.md\u2026`,
            `> add tests for the cache
Writing cache.test.ts,
running [suggestion:bun test] to verify.`,
          ],
        }),
        r(Text, {
          children: [
            "Run ",
            e(a, { children: "/init" }),
            " to generate a starter CLAUDE.md from your codebase. Run ",
            e(a, { children: "/memory" }),
            " to edit it inline.",
          ],
        }),
        e(Text, {
          dimColor: !0,
          children:
            "Works at three levels: repo, your home directory (all projects), and per-directory overrides.",
        }),
      ],
    }),
  },
  {
    id: "mcp",
    title: "Extend with tools",
    tagline: "MCP, /mcp",
    body: r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(Text, {
          children: [
            "MCP servers give Claude new tools: read your Slack, query your database, control your browser. Run ",
            e(a, { children: "/mcp" }),
            " to browse and connect servers.",
          ],
        }),
        e(v, {
          frames: [
            `> [suggestion:/mcp]
Connected servers:
  [success:\u2713] slack    [success:\u2713] github`,
            `> anything urgent in #eng?
#\u25D0 [suggestion:slack] \xB7 reading channel\u2026`,
            `Boris posted about the merge
freeze. Also 3 PRs await
your review on github.`,
          ],
        }),
        e(Text, {
          children:
            'Once connected, tools appear automatically \u2014 ask Claude to "check my calendar" or "search our Notion" and it just works.',
        }),
        r(Text, {
          dimColor: !0,
          children: [
            "From your shell:",
            " ",
            e(a, { children: "claude mcp add my-server -- npx some-mcp-pkg" }),
            " to wire one up without leaving the terminal.",
          ],
        }),
      ],
    }),
  },
  {
    id: "automate",
    title: "Automate your workflow",
    tagline: "skills, hooks",
    body: r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(Text, {
          children: [
            "Save a prompt to ",
            e(a, { children: ".claude/skills/deploy/SKILL.md" }),
            " and it becomes ",
            e(a, { children: "/deploy" }),
            " \u2014 type it, Claude runs it. Run",
            " ",
            e(a, { children: "/skills" }),
            " to see what you have.",
          ],
        }),
        e(v, {
          frames: [
            `> [suggestion:/deploy] staging
#\u25D0 skill: deploy`,
            `[success:\u2713] built
[success:\u2713] tests pass
#\u25D0 pushing to staging\u2026`,
            `[success:\u2713] deployed
#[suggestion:staging.app.com]
#PostToolUse hook ran prettier`,
          ],
        }),
        r(Text, {
          children: [
            "Hooks run your own scripts on events: before a tool call, after a response, on session start. Use them to enforce rules, log activity, or inject context. Run ",
            e(a, { children: "/hooks" }),
            " to see what fires when.",
          ],
        }),
        r(Text, {
          dimColor: !0,
          children: [
            "Run ",
            e(a, { children: "/install-github-app" }),
            " to let Claude review PRs when tagged.",
          ],
        }),
      ],
    }),
  },
  {
    id: "subagents",
    title: "Multiply yourself",
    tagline: "subagents",
    body: r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        e(Text, {
          children:
            'Claude can spawn copies of itself to work in parallel. Ask it to "use subagents to search these 5 directories" and watch the fan-out.',
        }),
        e(v, {
          frames: [
            `> find any error handling bugs
#\u25D0 Spawning 3 agents\u2026`,
            `#[warning:\u25D0] agent-1 \xB7 scanning api
#[warning:\u25D0] agent-2 \xB7 scanning utils
#[warning:\u25D0] agent-3 \xB7 scanning cli`,
            `#[success:\u2713] agent-1 \xB7 found reject
#[warning:\u25D0] agent-2 \xB7 scanning utils
#[success:\u2713] agent-3 \xB7 no issues`,
            `Found 2 issues:
  [suggestion:api/fetch.ts:42] unhandled
  [suggestion:utils/retry.ts:18] swallowed`,
          ],
        }),
        r(Text, {
          dimColor: !0,
          children: [
            "Subagents run in isolated context. For true parallel sessions on separate branches, launch with ",
            e(a, { children: "claude --worktree" }),
            ".",
          ],
        }),
      ],
    }),
  },
  {
    id: "cross-device",
    title: "Code from anywhere",
    tagline: "/remote-control, /teleport",
    body: r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(Text, {
          children: [
            "Run ",
            e(a, { children: "/remote-control" }),
            " to take this session with you and pick up right where you left off on any device. Open the Code tab in the Claude mobile app, or visit claude.ai/code in a browser. The session keeps running on this machine while your other devices act as a remote control.",
          ],
        }),
        e(v, {
          frames: [
            `> [suggestion:/remote-control]
#\u25D0 connecting\u2026`,
            `[success:\u2713] connected
see this session at
[suggestion:claude.ai/code/abc123]`,
            `#\u2500 on your phone \u2500
#abc123 \xB7 running tests
[warning:\u25D0] 142 of 284`,
            `#\u2500 on your phone \u2500
#abc123 \xB7 [success:\u2713] all pass
> ship it`,
          ],
        }),
        r(Text, {
          children: [
            "Run ",
            e(a, { children: "/teleport" }),
            " to move a session between here and the cloud \u2014 send this one up to keep it going after you close the lid, or pull a web session into this terminal with full history.",
          ],
        }),
        e(Text, {
          dimColor: !0,
          children:
            "Kick off a long task, close your laptop, check progress from your phone.",
        }),
      ],
    }),
  },
  {
    id: "model-dial",
    title: "Dial the model",
    tagline: "/model, /effort",
    body: r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(Text, {
          children: [
            "Run ",
            e(a, { children: "/model" }),
            " to switch models. Fable for the hardest problems, Opus for complex work, Sonnet for most tasks, Haiku for quick questions. Each trades speed for depth.",
          ],
        }),
        e(v, {
          frames: [
            `> [suggestion:/effort] high
#effort set to [claude:high]`,
            `> why is the list page slow?
#[claude:\u25D0 thinking deeply\u2026]`,
            `Three hypotheses, ranked:
 1. N+1 query in loader
 2. missing index on users`,
          ],
        }),
        r(Text, {
          children: [
            e(a, { children: "/effort" }),
            " controls how long Claude thinks before answering.",
            " ",
            e(B, { children: "high" }),
            " for tricky bugs, ",
            e(B, { children: "low" }),
            " when you just need a quick edit.",
          ],
        }),
        r(Text, {
          dimColor: !0,
          children: [
            "Also: ",
            e(a, { children: "/fast" }),
            " toggles fast mode \u2014 same model, faster output.",
          ],
        }),
      ],
    }),
  },
];
function ne() {
  let jn = _(1),
    nt;
  if (jn[0] === MEMO_CACHE_SENTINEL)
    ((nt = e(Text, {
      dimColor: !0,
      italic: !0,
      children: r(DotSeparatedList, {
        children: [
          e(KeybindingHint, { chord: ["up", "down"], action: "select" }),
          e(KeybindingHint, { chord: "enter", action: "open" }),
          e(KeybindingHint, { chord: "escape", action: "close" }),
        ],
      }),
    })),
      (jn[0] = nt));
  else nt = jn[0];
  return nt;
}
function se() {
  let $n = _(1),
    st;
  if ($n[0] === MEMO_CACHE_SENTINEL)
    ((st = e(Text, {
      dimColor: !0,
      italic: !0,
      children: r(DotSeparatedList, {
        children: [
          e(KeybindingHint, { chord: "enter", action: "mark done" }),
          e(KeybindingHint, { chord: "escape", action: "back" }),
        ],
      }),
    })),
      ($n[0] = st));
  else st = $n[0];
  return st;
}
function bo() {
  let N = _(9),
    rt,
    it;
  if (N[0] === MEMO_CACHE_SENTINEL)
    ((rt = r(Text, {
      children: [
        "Press ",
        e(B, { children: "shift+tab" }),
        " to cycle permission modes. Each mode changes how much Claude asks before acting:",
      ],
    })),
      (it = e(oe, {})),
      (N[0] = rt),
      (N[1] = it));
  else ((rt = N[0]), (it = N[1]));
  let at;
  if (N[2] === MEMO_CACHE_SENTINEL)
    ((at = r(Text, {
      children: [
        e(Text, { color: "success", children: "default" }),
        " \u2014 ask before every edit",
      ],
    })),
      (N[2] = at));
  else at = N[2];
  let ct;
  if (N[3] === MEMO_CACHE_SENTINEL)
    ((ct = r(Text, {
      children: [
        e(Text, { color: "autoAccept", children: "accept edits" }),
        " \u2014 edit freely, ask for commands",
      ],
    })),
      (N[3] = ct));
  else ct = N[3];
  let lt;
  if (N[4] === MEMO_CACHE_SENTINEL)
    ((lt = r(Text, {
      children: [
        e(Text, { color: "planMode", children: "plan" }),
        " \u2014 research and propose, never touch files",
      ],
    })),
      (N[4] = lt));
  else lt = N[4];
  let dt;
  if (N[5] === MEMO_CACHE_SENTINEL)
    ((dt = r(Box, {
      flexDirection: "column",
      paddingLeft: 2,
      children: [
        at,
        ct,
        lt,
        r(Text, {
          children: [
            e(Text, { color: "warning", children: "auto" }),
            " \u2014 Claude decides what is safe",
          ],
        }),
      ],
    })),
      (N[5] = dt));
  else dt = N[5];
  let ut;
  if (N[6] === MEMO_CACHE_SENTINEL)
    ((ut = e(Text, { color: "planMode", children: "plan" })), (N[6] = ut));
  else ut = N[6];
  let mt;
  if (N[7] === MEMO_CACHE_SENTINEL)
    ((mt = e(Text, { color: "warning", children: "auto" })), (N[7] = mt));
  else mt = N[7];
  let pt;
  if (N[8] === MEMO_CACHE_SENTINEL)
    ((pt = r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        rt,
        it,
        dt,
        r(Text, {
          dimColor: !0,
          children: [
            "Use ",
            ut,
            " for big refactors you want to review first. Use ",
            mt,
            " for long unattended tasks. Run ",
            e(a, { children: "/permissions" }),
            " to pre-allow specific commands so Claude stops asking about them.",
          ],
        }),
      ],
    })),
      (N[8] = pt));
  else pt = N[8];
  return pt;
}
F();
function Bt(fs) {
  return POWERUP_LESSONS.some((gs) => gs.id === fs);
}
function Dt() {
  let ys = getGlobalConfig().powerupsUnlocked ?? [];
  return new Set(ys.filter(Bt));
}
function PowerupsBrowser(cs) {
  let f = _(48),
    { onExit: xo } = cs,
    { storageV5: wo } = useStorageV5Context(),
    [h, ls] = d(Dt),
    [R, Co] = d(null),
    [ko, ds] = d(POWERUP_LESSONS[0].id),
    [vo, ht] = d(!1),
    ft;
  if (f[0] === MEMO_CACHE_SENTINEL) ((ft = () => ht(!1)), (f[0] = ft));
  else ft = f[0];
  let us = ft,
    gt;
  if (f[1] !== h)
    ((gt = function re(Re) {
      (ds(Re.id),
        Co(Re),
        logEvent("tengu_powerup_lesson_opened", {
          lesson_id: fromEnum(Re.id),
          was_already_unlocked: h.has(Re.id),
          unlocked_count: h.size,
        }));
    }),
      (f[1] = h),
      (f[2] = gt));
  else gt = f[2];
  let re = gt,
    yt;
  if (f[3] !== wo || f[4] !== h)
    ((yt = function ae(Ro) {
      if (h.has(Ro)) {
        return;
      }
      let ie = new Set(h).add(Ro);
      if (
        (ls(ie),
        saveGlobalConfig((ms) => ({ ...ms, powerupsUnlocked: [...ie] }), wo),
        logEvent("tengu_powerup_lesson_completed", {
          lesson_id: fromEnum(Ro),
          unlocked_count: ie.size,
          all_unlocked: ie.size === POWERUP_LESSONS.length,
        }),
        ie.size === POWERUP_LESSONS.length)
      )
        ht(!0);
    }),
      (f[3] = wo),
      (f[4] = h),
      (f[5] = yt));
  else yt = f[5];
  let ae = yt,
    bt;
  if (f[6] !== h)
    ((bt = POWERUP_LESSONS.map((Pe) => {
      let xt = h.has(Pe.id);
      let wt = `${xt ? figures.tick : figures.circle} ${Pe.title}`;
      return {
        label: xt ? e(Text, { color: "success", children: wt }) : wt,
        value: Pe.id,
        description: Pe.tagline,
      };
    })),
      (f[6] = h),
      (f[7] = bt));
  else bt = f[7];
  let To = bt;
  if (R) {
    let A;
    if (f[8] !== h || f[9] !== R.id)
      ((A = h.has(R.id)), (f[8] = h), (f[9] = R.id), (f[10] = A));
    else A = f[10];
    let M;
    if (f[11] !== ae || f[12] !== R.id)
      ((M = () => {
        (ae(R.id), Co(null));
      }),
        (f[11] = ae),
        (f[12] = R.id),
        (f[13] = M));
    else M = f[13];
    let j;
    if (f[14] === MEMO_CACHE_SENTINEL) ((j = () => Co(null)), (f[14] = j));
    else j = f[14];
    let z;
    if (f[15] !== A || f[16] !== M || f[17] !== R)
      ((z = e(ze, { lesson: R, isUnlocked: A, onDone: M, onBack: j })),
        (f[15] = A),
        (f[16] = M),
        (f[17] = R),
        (f[18] = z));
    else z = f[18];
    return z;
  }
  let Le = h.size === POWERUP_LESSONS.length,
    A;
  if (f[19] !== Le)
    ((A = Le
      ? e(S, { text: "All powered up" })
      : e(Text, { bold: !0, color: "claude", children: "Power-ups" })),
      (f[19] = Le),
      (f[20] = A));
  else A = f[20];
  let M;
  if (f[21] !== h.size)
    ((M = r(Text, {
      dimColor: !0,
      children: [" ", h.size, "/", POWERUP_LESSONS.length, " unlocked", " "],
    })),
      (f[21] = h.size),
      (f[22] = M));
  else M = f[22];
  const j = h.size / POWERUP_LESSONS.length;
  let z;
  if (f[23] !== j)
    ((z = e(ProgressBar, {
      ratio: j,
      width: 16,
      fillColor: "claude",
      emptyColor: "inactive",
    })),
      (f[23] = j),
      (f[24] = z));
  else z = f[24];
  let De;
  if (f[25] !== A || f[26] !== M || f[27] !== z)
    ((De = r(Box, { marginBottom: 1, children: [A, M, z] })),
      (f[25] = A),
      (f[26] = M),
      (f[27] = z),
      (f[28] = De));
  else De = f[28];
  const Po = Le
    ? "Now go build something."
    : "Each power-up teaches one thing Claude Code can do that most people miss. Open one, read it, try it, mark it done.";
  let Be;
  if (f[29] !== Po)
    ((Be = e(Box, {
      marginBottom: 1,
      children: e(Text, { dimColor: !0, wrap: "wrap", children: Po }),
    })),
      (f[29] = Po),
      (f[30] = Be));
  else Be = f[30];
  let Ae;
  if (f[31] !== re)
    ((Ae = (ps) => {
      let Ct = POWERUP_LESSONS.find((hs) => hs.id === ps);
      if (Ct) re(Ct);
    }),
      (f[31] = re),
      (f[32] = Ae));
  else Ae = f[32];
  let Me;
  if (f[33] !== xo)
    ((Me = () => xo("Power-ups closed")), (f[33] = xo), (f[34] = Me));
  else Me = f[34];
  let Ue;
  if (f[35] !== To || f[36] !== ko || f[37] !== Ae || f[38] !== Me)
    ((Ue = e(Select, {
      options: To,
      hideIndexes: !0,
      visibleOptionCount: POWERUP_LESSONS.length,
      defaultFocusValue: ko,
      onChange: Ae,
      onCancel: Me,
    })),
      (f[35] = To),
      (f[36] = ko),
      (f[37] = Ae),
      (f[38] = Me),
      (f[39] = Ue));
  else Ue = f[39];
  let kt;
  if (f[40] === MEMO_CACHE_SENTINEL)
    ((kt = e(Box, { marginTop: 1, children: e(ne, {}) })), (f[40] = kt));
  else kt = f[40];
  let Ie;
  if (f[41] !== vo)
    ((Ie = vo && e(H, { onDone: us })), (f[41] = vo), (f[42] = Ie));
  else Ie = f[42];
  let vt;
  if (f[43] !== Be || f[44] !== Ue || f[45] !== Ie || f[46] !== De)
    ((vt = e(Qr, {
      color: "claude",
      children: r(Box, {
        flexDirection: "column",
        children: [De, Be, Ue, kt, Ie],
      }),
    })),
      (f[43] = Be),
      (f[44] = Ue),
      (f[45] = Ie),
      (f[46] = De),
      (f[47] = vt));
  else vt = f[47];
  return vt;
}
function ze(xs) {
  let K = _(15),
    { lesson: J, isUnlocked: ws, onDone: Lo, onBack: Do } = xs,
    Rt;
  if (K[0] !== Do || K[1] !== Lo)
    ((Rt = { "confirm:yes": Lo, "confirm:no": Do }),
      (K[0] = Do),
      (K[1] = Lo),
      (K[2] = Rt));
  else Rt = K[2];
  let Tt;
  if (K[3] === MEMO_CACHE_SENTINEL) ((Tt = { context: "Confirmation" }), (K[3] = Tt));
  else Tt = K[3];
  useKeybindings(Rt, Tt);
  const Bo = ws ? "success" : "pending";
  let Ne;
  if (K[4] !== Bo)
    ((Ne = e(StatusIndicator, { status: Bo, withSpace: !0 })), (K[4] = Bo), (K[5] = Ne));
  else Ne = K[5];
  let qe;
  if (K[6] !== J.title)
    ((qe = e(Text, { bold: !0, color: "claude", children: J.title })),
      (K[6] = J.title),
      (K[7] = qe));
  else qe = K[7];
  let Ee;
  if (K[8] !== Ne || K[9] !== qe)
    ((Ee = r(Box, { children: [Ne, qe] })),
      (K[8] = Ne),
      (K[9] = qe),
      (K[10] = Ee));
  else Ee = K[10];
  let Pt;
  if (K[11] === MEMO_CACHE_SENTINEL) ((Pt = e(se, {})), (K[11] = Pt));
  else Pt = K[11];
  let Lt;
  if (K[12] !== J.body || K[13] !== Ee)
    ((Lt = e(Qr, {
      color: "claude",
      children: r(Box, {
        flexDirection: "column",
        gap: 1,
        children: [Ee, J.body, Pt],
      }),
    })),
      (K[12] = J.body),
      (K[13] = Ee),
      (K[14] = Lt));
  else Lt = K[14];
  return Lt;
}
export { POWERUP_LESSONS, PowerupsBrowser };

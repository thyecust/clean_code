// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { j } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { repeatString, ANY_CONTROL_CHAR_REGEX } from "./string-utils.js";
import { terminalCapabilities } from "../../02-功能模块/状态栏-主题/chunk-jz6b76hr.js";
import { chalk } from "../ANSI-样式-布局原语/chalk-ansi.js";
import { MarkdownTokenizer, MarkdownEngine, markdownParser } from "../../02-功能模块/制品发布-Artifact/chunk-01ymf0ar.js";
import { ARTIFACT_MARKER_GLYPH, withArtifactMarker, BLOCKQUOTE_BAR_GLYPH } from "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import { Tf } from "../../00-第三方库/supports-color/chunk-gdyh44zt.js";
import { isCanonicalArtifactViewerUrl, isDecisionSurfaceControl } from "../核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { stripAnsi } from "./text-sanitization.js";
import { getCwd } from "../核心工具-未归类/cwd-context.js";
import { getCachedRepositoryHost } from "../../02-功能模块/工作树-Git/git-repository-detection.js";
import { getStringWidth } from "./ansi-text-utils.js";
import { GITHUB_HOST, getCanonicalHostname } from "../核心工具-路径与平台/git-host-utils.js";
import { id } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { INVISIBLE_CHAR_CLASS_SOURCE, stripLeadingInvisibleChars, isUnsafePath, isUnsafeFileUrl, decodePercentVariants } from "../核心工具-路径与平台/chunk-kk7p3hsm.js";
import { stripAnalysisTags } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { toLocalFileUrl } from "../核心工具-路径与平台/to-local-file-url.js";
import { formatHyperlink } from "./format-hyperlink.js";
import { getThemeColor } from "../UI组件-TUI/theme-color.js";
import { getGitProvider } from "../核心工具-路径与平台/git-remote-url.js";
import { Ku } from "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
var z = new Set([
  "iTerm.app",
  "vscode",
  "WezTerm",
  "WarpTerminal",
  "Hyper",
  "Tabby",
  "rio",
  "contour",
  "alacritty",
]);
function supportsStrikethrough() {
  if (a.CLAUDE_CODE_FORCE_STRIKETHROUGH) return !0;
  let e = a.TERM;
  if (a.TERM_PROGRAM === "Apple_Terminal" || e === "linux") return !1;
  return (
    z.has(a.TERM_PROGRAM ?? "") ||
    terminalCapabilities.isGhostty() ||
    terminalCapabilities.isMintty() ||
    terminalCapabilities.isJetBrainsIdeTerminal() ||
    a.LC_TERMINAL === "iTerm2" ||
    !!e?.includes("kitty") ||
    !!e?.includes("alacritty") ||
    !!e?.startsWith("foot") ||
    !!a.KITTY_WINDOW_ID ||
    !!a.ALACRITTY_LOG ||
    !!a.KONSOLE_VERSION ||
    !!a.WT_SESSION ||
    !!a.ZED_TERM ||
    parseInt(a.VTE_VERSION ?? "", 10) >= 4400
  );
}
import { isAbsolute, resolve } from "path";
var E = `
`,
  D = new RegExp(`^[${INVISIBLE_CHAR_CLASS_SOURCE}]+`, "u"),
  V = new RegExp(`(?:^|[^${INVISIBLE_CHAR_CLASS_SOURCE}])([${INVISIBLE_CHAR_CLASS_SOURCE}]*)$`, "u");
function w(e) {
  let t = V.exec(e)?.[1]?.length ?? 0;
  return t === 0 ? e : e.slice(0, e.length - t);
}
var Z = /\x1b\]8;[^;\x07\x1b]*;([^\x07\x1b]*)(?:\x07|\x1b\\)/g,
  N = (e) =>
    Array.from(e)
      .filter((t) => {
        let n = t.codePointAt(0) ?? 0;
        return n !== 10697 && !isDecisionSurfaceControl(n);
      })
      .join("");
function normalizeRenderedHyperlinks(e) {
  if (!e.includes("\x1B]8;")) return e;
  let t = [],
    n = null;
  for (let c of e.matchAll(Z)) {
    let u = c.index + c[0].length;
    if (n !== null)
      (t.push({
        href: n.href,
        openEnd: n.openEnd,
        closeStart: c.index,
        closeEnd: u,
      }),
        (n = null));
    let m = c[1] ?? "";
    if (m !== "") n = { href: m, openEnd: u };
  }
  if (n !== null)
    t.push({
      href: n.href,
      openEnd: n.openEnd,
      closeStart: e.length,
      closeEnd: e.length,
    });
  let o = "",
    i = 0,
    l = 0,
    s = !1;
  for (let c of t) {
    let u = e.lastIndexOf("\x1B]8;", c.openEnd - 1),
      m = w(stripAnsi(e.slice(0, u))),
      h = l;
    l = c.closeStart;
    let x = isCanonicalArtifactViewerUrl(c.href),
      r = s;
    if (((s = x), !x)) {
      let g = stripAnsi(e.slice(h, u)),
        T = g.includes(ARTIFACT_MARKER_GLYPH),
        d = r && w(g) === "";
      if (!T && !m.endsWith(ARTIFACT_MARKER_GLYPH) && !d) continue;
    } else if (!m.endsWith(ARTIFACT_MARKER_GLYPH)) continue;
    if (x) {
      let g = e.slice(c.openEnd, c.closeStart),
        T = stripAnsi(g).startsWith(`${ARTIFACT_MARKER_GLYPH} `) ? g.indexOf(`${ARTIFACT_MARKER_GLYPH} `) : -1;
      if (T !== -1)
        ((o += e.slice(i, c.openEnd)),
          (o += g.slice(0, T)),
          (o += g.slice(T + ARTIFACT_MARKER_GLYPH.length + 1)),
          (i = c.closeStart));
      else {
        let d = e.slice(i, u),
          L = `${ARTIFACT_MARKER_GLYPH} `;
        if (d.endsWith(L)) {
          let b = d.slice(0, -L.length);
          if (w(stripAnsi(o + b)).endsWith(ARTIFACT_MARKER_GLYPH)) ((o += b), (i = u));
        }
      }
      continue;
    }
    let p = ` (${N(c.href)})`,
      f = c.closeEnd;
    if (e.startsWith(p, f)) continue;
    ((o += e.slice(i, f) + p), (i = f));
  }
  return o + e.slice(i);
}
class W {
  #e = !1;
  get configured() {
    return this.#e;
  }
  set() {
    this.#e = !0;
  }
  reset() {
    ((this.#e = !1), markdownParser.setOptions(markdownParser.getDefaults()));
  }
}
var P = id(new W(), (e) => e.reset());
class U {
  #e = new Ku({ max: 200, ttl: 30000 });
  get(e) {
    return this.#e.get(e);
  }
  record(e, t) {
    this.#e.set(e, t);
  }
}
var Qe = new j(() => new U()),
  O = MarkdownTokenizer.prototype.table,
  F = {
    tokenizer: {
      del(e) {
        let t =
            /^~~(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))~~(?=[^~]|$)/.exec(
              e,
            ),
          n = t?.[1];
        if (!t || n === void 0) return;
        return {
          type: "del",
          raw: t[0],
          text: n,
          tokens: this.lexer.inlineTokens(n),
        };
      },
      def() {
        return;
      },
      table(e) {
        let t = this.rules.block.table.exec(e);
        if (!t) return;
        let n = t[0],
          o = n
            .split(
              `
`,
            )
            .map(se),
          i = o.join(`
`),
          l = i === n ? O.call(this, e) : O.call(this, i + e.slice(n.length));
        if (l) {
          if (oe(o, l.header.length)) return;
          if (i !== n) l.raw = n;
        }
        return l;
      },
    },
  };
function ensureMarkdownExtensionsRegistered() {
  if (P.configured) return;
  (P.set(), markdownParser.use(F));
}
var promptModeMarkdownEngine = new MarkdownEngine(F, {
  tokenizer: {
    emStrong(e) {
      return e.startsWith("_") ? void 0 : !1;
    },
    table() {
      return;
    },
    blockquote() {
      return;
    },
    hr() {
      return;
    },
    lheading() {
      return;
    },
    link() {
      return;
    },
    autolink() {
      return;
    },
    url() {
      return;
    },
    escape() {
      return;
    },
    br() {
      return;
    },
  },
});
function renderMarkdownToAnsi(e, t, n = null) {
  return (
    ensureMarkdownExtensionsRegistered(),
    markdownParser
      .lexer(stripAnalysisTags(e))
      .map((o) =>
        renderMarkdownToken(o, t, {
          listDepth: 0,
          orderedListNumber: null,
          parent: null,
          highlight: n,
        }),
      )
      .join("")
      .trim()
  );
}
var q = /\s/,
  MAX_LIST_INDENT_WIDTH = 32;
function endsWithBlankLine(e) {
  if (
    !e.endsWith(`
`)
  )
    return !1;
  for (let t = e.length - 2; t >= 0; t--) {
    let n = e[t];
    if (
      n ===
      `
`
    )
      return !0;
    if (!q.test(n)) return !1;
  }
  return !1;
}
function renderMarkdownToken(e, t, n = {}) {
  let {
      listDepth: o = 0,
      orderedListNumber: i = null,
      parent: l = null,
      highlight: s = null,
      glueProse: c = !1,
      screenReader: u = !1,
      listIndent: m = "",
      promptMode: h = !1,
    } = n,
    x = n.linkCap ?? Tf();
  switch (e.type) {
    case "blockquote": {
      let r = (e.tokens ?? [])
          .map((f) =>
            renderMarkdownToken(f, t, {
              listDepth: 0,
              orderedListNumber: null,
              parent: null,
              highlight: s,
              glueProse: !1,
              linkCap: x,
              screenReader: u,
              promptMode: h,
            }),
          )
          .join(""),
        p = chalk.dim(BLOCKQUOTE_BAR_GLYPH);
      return r
        .split(E)
        .map((f) => (stripAnsi(f).trim() ? `${p} ${chalk.italic(f)}` : f))
        .join(E);
    }
    case "code": {
      let r = e.lang ?? "",
        p = r.match(/^[\w.+#-]+/)?.[0] ?? "",
        f =
          s && r && s.supportsLanguage(r)
            ? r
            : s && p && s.supportsLanguage(p)
              ? p
              : "plaintext",
        g = r && !s?.supportsLanguage(r) ? chalk.dim(r) + E : "";
      if (!s) return g + e.text + E;
      return g + s.highlight(e.text, { language: f }) + E;
    }
    case "codespan":
      return getThemeColor("permission", t)(e.text);
    case "em":
      return chalk.italic(
        (e.tokens ?? [])
          .map((r) =>
            renderMarkdownToken(r, t, {
              listDepth: 0,
              orderedListNumber: null,
              parent: l,
              highlight: s,
              glueProse: c,
              linkCap: x,
              promptMode: h,
            }),
          )
          .join(""),
      );
    case "strong":
      return chalk.bold(
        (e.tokens ?? [])
          .map((r) =>
            renderMarkdownToken(r, t, {
              listDepth: 0,
              orderedListNumber: null,
              parent: l,
              highlight: s,
              glueProse: c,
              linkCap: x,
              promptMode: h,
            }),
          )
          .join(""),
      );
    case "del": {
      let r = (e.tokens ?? [])
        .map((p) =>
          renderMarkdownToken(p, t, {
            listDepth: 0,
            orderedListNumber: null,
            parent: l,
            highlight: s,
            glueProse: c,
            linkCap: x,
            promptMode: h,
          }),
        )
        .join("");
      return supportsStrikethrough() && chalk.level > 0 ? chalk.strikethrough(r) : `~~${r}~~`;
    }
    case "heading": {
      let r = (e.tokens ?? [])
        .map((f) =>
          renderMarkdownToken(f, t, {
            listDepth: 0,
            orderedListNumber: null,
            parent: null,
            highlight: s,
            glueProse: !1,
            linkCap: x,
            promptMode: h,
          }),
        )
        .join("");
      return (
        (e.depth === 1 ? chalk.bold.italic.underline : chalk.bold)(normalizeRenderedHyperlinks(r)) + E + E
      );
    }
    case "hr":
      return "---" + E;
    case "image": {
      if (!e.text && !e.title) return e.href;
      let r = e.text ? `${e.text} ` : "",
        p = e.title ? ` "${e.title}"` : "";
      return `${r}(${e.href}${p})`;
    }
    case "link": {
      let r = e.title ? ` ("${e.title}")` : "";
      if (e.href.startsWith("mailto:")) {
        let R = e.href.replace(/^mailto:/, "");
        return (e.text && e.text !== R ? `${e.text} (${R})` : R) + r;
      }
      let p = x ? ne(e.href) : e.href,
        f = x && p !== null,
        g = p ?? N(e.href),
        T = (e.tokens ?? [])
          .map((R) =>
            renderMarkdownToken(R, t, {
              listDepth: 0,
              orderedListNumber: null,
              parent: e,
              highlight: s,
              glueProse: !1,
              linkCap: x,
              promptMode: h,
            }),
          )
          .join(""),
        d = stripAnsi(T),
        L = isCanonicalArtifactViewerUrl(e.href),
        b = Boolean(d && d !== e.href),
        y = (R) => R.replace(D, "").startsWith(ARTIFACT_MARKER_GLYPH),
        S = y(d) || y(e.text ?? ""),
        k = d.includes(ARTIFACT_MARKER_GLYPH) || (e.text ?? "").includes(ARTIFACT_MARKER_GLYPH);
      if (L && b) {
        let R = Array.from(d)
            .filter((G) => {
              let A = G.codePointAt(0) ?? 0;
              if (A === 8205 || (A >= 65024 && A <= 65039)) return !0;
              return !isDecisionSurfaceControl(A);
            })
            .join(""),
          B = S ? R : withArtifactMarker(R);
        return formatHyperlink(g, B, { themeName: t, supportsHyperlinks: f }) + r;
      }
      let I = b ? T : f ? e.href : g,
        _ = formatHyperlink(g, I, { themeName: t, supportsHyperlinks: f });
      if (!L && f && b && k) return `${_} (${N(e.href)})${r}`;
      return (L ? withArtifactMarker(_) : _) + r;
    }
    case "list":
      return e.items
        .map((r, p) =>
          renderMarkdownToken(r, t, {
            listDepth: o,
            orderedListNumber: e.ordered ? e.start + p : null,
            parent: e,
            highlight: s,
            glueProse: !1,
            linkCap: x,
            screenReader: u,
            listIndent: m,
            promptMode: h,
          }),
        )
        .join("");
    case "list_item": {
      let r = formatListItemMarker(
          o,
          i !== null && l?.type === "list" ? { number: i, ...getOrderedListRange(l) } : null,
        ),
        p = m + repeatString(" ", getStringWidth(r) + 1),
        f = repeatString(" ", Math.min(p.length, MAX_LIST_INDENT_WIDTH)),
        g = (e.tokens ?? []).find((b) => b.type !== "space"),
        T =
          g !== void 0 &&
          (g.type === "code" ||
            g.type === "blockquote" ||
            g.type === "hr" ||
            g.type === "table" ||
            g.type === "list"),
        d = !T,
        L = (e.tokens ?? [])
          .map((b) => {
            let y = renderMarkdownToken(b, t, {
              listDepth: o + 1,
              orderedListNumber: i,
              parent: e,
              highlight: s,
              glueProse: !1,
              linkCap: x,
              screenReader: u,
              listIndent: f,
              promptMode: h,
            });
            if (
              b.type === "code" ||
              b.type === "blockquote" ||
              b.type === "hr" ||
              b.type === "table" ||
              b.type === "list" ||
              b.type === "space"
            )
              return y;
            let S = d ? `${m}${r} ` : p;
            d = !1;
            let k = y
              .split(E)
              .map((I, _) => (_ === 0 ? S + I : I === "" ? I : p + I))
              .join(E);
            return b.type === "html" && !k.endsWith(E) ? k + E : k;
          })
          .join("");
      return d || T ? `${m}${r}${E}${L.replace(/^\n+/, "")}` : L;
    }
    case "paragraph":
      return (
        normalizeRenderedHyperlinks(
          (e.tokens ?? [])
            .map((r) =>
              renderMarkdownToken(r, t, {
                listDepth: 0,
                orderedListNumber: null,
                parent: null,
                highlight: s,
                glueProse: !1,
                linkCap: x,
                promptMode: h,
              }),
            )
            .join(""),
        ) + E
      );
    case "space":
      return E;
    case "br":
      return E;
    case "text": {
      if (l?.type === "link") return e.text;
      if (l?.type === "list_item") {
        let p = e.tokens
            ? normalizeRenderedHyperlinks(
                e.tokens
                  .map((T) =>
                    renderMarkdownToken(T, t, {
                      listDepth: o,
                      orderedListNumber: i,
                      parent: e,
                      highlight: s,
                      glueProse: !0,
                      linkCap: x,
                      promptMode: h,
                    }),
                  )
                  .join(""),
              )
            : H(M(e.text, t, x, l, h)),
          f = l.tokens?.[0] === e;
        return `${l.task && f ? `[${l.checked ? "x" : " "}] ` : ""}${p}${E}`;
      }
      let r = M(e.text, t, x, l, h);
      return c ? H(r) : r;
    }
    case "table": {
      let p = function (d) {
          return normalizeRenderedHyperlinks(
            d
              ?.map((L) =>
                renderMarkdownToken(L, t, {
                  listDepth: 0,
                  orderedListNumber: null,
                  parent: null,
                  highlight: s,
                  glueProse: !1,
                  linkCap: x,
                  promptMode: h,
                }),
              )
              .join("") ?? "",
          );
        },
        f = function (d) {
          return stripAnsi(p(d));
        },
        r = e;
      if (u)
        return (
          formatTableForScreenReader(
            r.header.map((d) => f(d.tokens)),
            r.rows.map((d) => d.map((L) => f(L.tokens))),
          ) +
          E +
          E
        );
      let g = r.header.map((d, L) => {
          let b = getStringWidth(f(d.tokens));
          for (let y of r.rows) {
            let S = getStringWidth(f(y[L]?.tokens));
            b = Math.max(b, S);
          }
          return Math.max(b, 3);
        }),
        T = "| ";
      return (
        r.header.forEach((d, L) => {
          let b = p(d.tokens),
            y = f(d.tokens),
            S = g[L],
            k = r.align?.[L];
          T += padTableCell(b, getStringWidth(y), S, k) + " | ";
        }),
        (T = T.trimEnd() + E),
        (T += "|"),
        g.forEach((d) => {
          let L = "-".repeat(d + 2);
          T += L + "|";
        }),
        (T += E),
        r.rows.forEach((d) => {
          ((T += "| "),
            d.forEach((L, b) => {
              let y = p(L.tokens),
                S = f(L.tokens),
                k = g[b],
                I = r.align?.[b];
              T += padTableCell(y, getStringWidth(S), k, I) + " | ";
            }),
            (T = T.trimEnd() + E));
        }),
        T + E
      );
    }
    case "escape":
      return e.text;
    case "html":
      return e.text;
    case "def":
      return "";
  }
  return e.raw;
}
var X = /(^|[^\w./-])([A-Za-z0-9][\w-]*\/[A-Za-z0-9][\w.-]*)#(\d+)\b/g,
  Y = new Set([
    "gitlab.com",
    "bitbucket.org",
    "codeberg.org",
    "gitea.com",
    "git.sr.ht",
    "dev.azure.com",
  ]);
function J(e) {
  if (!/^file:/i.test(e)) return e;
  let t = e.slice(5);
  if (t.startsWith("//")) {
    if (((t = t.slice(2)), t === "localhost")) t = "/";
    else if (t.startsWith("localhost/")) t = t.slice(9);
  }
  let n = t.search(/[#?]/),
    o = n === -1 ? "" : t.slice(n),
    i = n === -1 ? t : t.slice(0, n);
  if (i === "") return null;
  try {
    i = decodeURIComponent(i);
  } catch {}
  i = re(i);
  let l = isAbsolute(i) ? i : resolve(getCwd(), i),
    s = toLocalFileUrl(l);
  if (s === null) return null;
  let c = s + o;
  return isUnsafeFileUrl(c) ? null : c;
}
var ee = /^[a-z][a-z0-9+.-]*:/i;
function ne(e) {
  let t = J(e);
  if (t === null || ANY_CONTROL_CHAR_REGEX.test(t) || D.test(t) || t !== t.trimEnd()) return null;
  if (ee.test(t)) return t;
  let n = decodePercentVariants(t),
    o = n.some((i) => /^file:/i.test(stripLeadingInvisibleChars(i)));
  return isUnsafePath(t, n) || o ? null : t;
}
function re(e, t = isAbsolute) {
  if (/^\/[A-Za-z]:(?=[\\/]|$)/.test(e) && t(e.slice(1))) return e.slice(1);
  return e;
}
function se(e) {
  if (!e.includes("`") || !e.includes("|")) return e;
  let t = [],
    n = [];
  for (let u = 0; u < e.length;) {
    if (e[u] !== "`") {
      u++;
      continue;
    }
    let m = 0;
    while (e[u + m] === "`") m++;
    (t.push(u), n.push(m), (u += m));
  }
  let o = Array(t.length).fill(-1),
    i = new Map();
  for (let u = t.length - 1; u >= 0; u--) {
    let m = i.get(n[u]);
    if (m !== void 0) o[u] = m;
    i.set(n[u], u);
  }
  let l = "",
    s = 0,
    c = 0;
  while (s < e.length) {
    if (e[s] !== "`") {
      l += e[s++];
      continue;
    }
    let u = n[c],
      m = e.slice(s, s + u),
      h = o[c];
    if (h === -1) {
      ((l += m), (s += u), c++);
      continue;
    }
    let x = t[h];
    l += m;
    let r = 0;
    for (let p = s + u; p < x; p++) {
      let f = e[p];
      if (f === "\\") {
        (r++, (l += f));
        continue;
      }
      if (f === "|") l += r % 2 === 0 ? "\\|" : "|";
      else l += f;
      r = 0;
    }
    ((l += m), (s = x + u), (c = h + 1));
  }
  return l;
}
function oe(e, t) {
  for (let n = 2; n < e.length; n++) {
    let o = le(e[n]);
    for (let i = t; i < o.length; i++) if (o[i].trim()) return !0;
  }
  return !1;
}
function le(e) {
  let n = e
    .replace(/\|/g, (o, i, l) => {
      let s = !1,
        c = i;
      while (--c >= 0 && l[c] === "\\") s = !s;
      return s ? "|" : " |";
    })
    .split(/ \|/);
  if (!n[0]?.trim()) n.shift();
  if (n.length > 0 && !n.at(-1)?.trim()) n.pop();
  return n;
}
function M(e, t, n, o, i) {
  if (i) return e;
  return ae(ce(e, t, n), t, n, o);
}
function ae(e, t, n = Tf(), o) {
  return e;
}
function ce(e, t, n = Tf()) {
  if (!n) return e;
  if (!e.includes("#")) return e;
  let o = getCachedRepositoryHost(),
    i = o !== null && getGitProvider(o) === "gitlab";
  if (!i && o !== null && Y.has(getCanonicalHostname(o))) return e;
  let l = o ?? GITHUB_HOST,
    s = i ? "/-/issues/" : "/issues/";
  return e.replace(
    X,
    (c, u, m, h) =>
      u +
      formatHyperlink(`https://${l}/${m}${s}${h}`, `${m}#${h}`, {
        themeName: t,
        supportsHyperlinks: n,
      }),
  );
}
function ue(e) {
  let t = "";
  while (e > 0)
    (e--,
      (t = String.fromCharCode(97 + (e % 26)) + t),
      (e = Math.floor(e / 26)));
  return t;
}
var fe = [
  [1000, "m"],
  [900, "cm"],
  [500, "d"],
  [400, "cd"],
  [100, "c"],
  [90, "xc"],
  [50, "l"],
  [40, "xl"],
  [10, "x"],
  [9, "ix"],
  [5, "v"],
  [4, "iv"],
  [1, "i"],
];
function pe(e) {
  let t = "";
  for (let [n, o] of fe) while (e >= n) ((t += o), (e -= n));
  return t;
}
function H(e) {
  return e.replace(/ (\d{1,9}[.)])(?!\w)/g, "\xA0$1");
}
function getOrderedListRange(e) {
  let t = e.start === "" ? 1 : e.start;
  return { first: t, last: t + e.items.length - 1 };
}
function formatListItemMarker(e, t) {
  return t === null ? "-" : `${de(e + 1, t)}.`;
}
function de(e, { number: t, first: n, last: o }) {
  switch (e) {
    case 2:
      return n >= 1 ? ue(t) : t.toString();
    case 3:
      return n >= 1 && o <= 3999 ? pe(t) : t.toString();
    default:
      return t.toString();
  }
}
function padTableCell(e, t, n, o) {
  let i = Math.max(0, n - t);
  if (o === "center") {
    let l = Math.floor(i / 2);
    return " ".repeat(l) + e + repeatString(" ", i - l);
  }
  if (o === "right") return " ".repeat(i) + e;
  return e + " ".repeat(i);
}
function formatTableForScreenReader(e, t) {
  function n(s) {
    return s.replace(/\s+/g, " ").trim();
  }
  function o(s) {
    return /[.!?\u2026]["')\]]*$/.test(s) ? s : `${s}.`;
  }
  function i(s) {
    return s
      .map((c, u) => {
        let m = n(e[u] ?? ""),
          h = n(c);
        if (!m && !h) return null;
        return o(m ? `${m}: ${h}` : h);
      })
      .filter((c) => c !== null)
      .join(" ");
  }
  return (t.length > 0 ? t.map(i) : [e.map(n).filter(Boolean).map(o).join(" ")])
    .filter((s) => s.length > 0)
    .join(E);
}
export { supportsStrikethrough, normalizeRenderedHyperlinks, ensureMarkdownExtensionsRegistered, promptModeMarkdownEngine, renderMarkdownToAnsi, MAX_LIST_INDENT_WIDTH, endsWithBlankLine, renderMarkdownToken, getOrderedListRange, formatListItemMarker, padTableCell, formatTableForScreenReader };

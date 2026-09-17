// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 243 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useVirtualScrollViewportSize } from "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-state.js";
import { setClipboard } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { useAppStateSelector, useSetAppState, useAppState } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { useActiveOverlay } from "../../01-核心基础设施/共享小工具-未细化/overlay-registry.js";
import { pluralize, beforeFirst } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { httpClient } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { le, Zt, Io, Xu, cr, nt, ru } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { getStringWidth, formatRelativeTime } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { BRANCH_ARROW_GLYPH, ARTIFACT_MARKER_GLYPH } from "../权限系统/chunk-e4pfvp7x.js";
import { isCancel } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { uuidSlugFromUrl, TITLE_MAX_RUNES } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import {
  formatNotAuthenticatedMessage,
  artifactFrameHttpClient,
  getArtifactReadInstruction,
  normalizeArtifactTitle,
  sanitizeEditableTitle,
  sanitizeArtifactTitleInput,
  sanitizeFaviconText,
  buildFrameHeaders,
  mainObservedArtifactVersion,
  artifactViewerUrl,
} from "./chunk-01ymf0ar.js";
import { createUserMessage } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { subscribeFrameLiveOnAttach } from "./chunk-kshc4v5t.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { oa } from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { useTerminalFocus } from "../../01-核心基础设施/共享小工具-未细化/clock-and-terminal-focus.js";
import { useKeybindings } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { hn } from "../../01-核心基础设施/UI组件-TUI/chunk-tp42fv8j.js";
import { fitEditedText, collapseToSingleLine, computeListWindow, removeFrameUrl } from "../../03-入口与运行时/会话UI-REPL/会话UI-REPL.qs63rzfp.js";
import { useVimModeInput, SearchInput } from "../Vim模式/Vim模式.nnewe0gf.js";
import { de } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../使用时长-Wellbeing/使用时长-Wellbeing.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/queued-message-context.js";
import "../../03-入口与运行时/会话UI-REPL/scroll-box.js";
import { JWe } from "../../01-核心基础设施/UI组件-TUI/chunk-yhkvt9ba.js";
import "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import { EmptyStateMessage } from "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import { InputGuide } from "../../01-核心基础设施/共享小工具-未细化/input-guide.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../远程控制-Bridge/remote-control-ui-strings.js";
import { setArtifactPinned, deleteArtifact, forgetDeletedArtifact, formatArtifactDeletedNote } from "./chunk-b6k1z7an.js";
import { ATTACHED_FRAME_URL_PREFIX, CREATED_FRAME_URL_PREFIX, isCreatedFrameKey, OPENED_FRAME_URL_PREFIX, getNonOpenedFrameUrlEntries } from "../../01-核心基础设施/共享小工具-未细化/frame-url-prefixes.js";
import { tryOpenUrlInBrowser } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import { re, E, V, C, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
F();
F();
var Mr = createLazyValue(() =>
    nt({
      frames: cr(Xu()).nullable(),
      starsEnabled: Io()
        .optional()
        .catch(void 0),
    }),
  ),
  Qe = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/,
  Ur = createLazyValue(() =>
    nt({
      slug: le(),
      title: le()
        .optional()
        .catch(void 0),
      favicon: le()
        .optional()
        .catch(void 0),
      description: le()
        .optional()
        .catch(void 0),
      label: le()
        .optional()
        .catch(void 0),
      rel: ru(["mine", "shared"]).catch("shared"),
      source_surface: le()
        .optional()
        .catch(void 0),
      updatedAt: le()
        .regex(Qe)
        .optional()
        .catch(void 0),
      created_at: le()
        .regex(Qe)
        .optional()
        .catch(void 0),
      owner_email: le()
        .optional()
        .catch(void 0),
      view_count: Zt()
        .optional()
        .catch(void 0),
      unique_view_count: Zt()
        .optional()
        .catch(void 0),
      needs_pin: Io()
        .optional()
        .catch(void 0),
      softDeleted: Io()
        .optional()
        .catch(void 0),
      audience: ru(["owner", "users", "org", "public"])
        .optional()
        .catch(void 0),
      starred: Io()
        .optional()
        .catch(void 0),
      last_viewed_at: le()
        .regex(Qe)
        .optional()
        .catch(void 0),
    }),
  ),
  Ir = 4194304;
function Oe(i) {
  if (i === void 0) return;
  return normalizeArtifactTitle(i) ?? void 0;
}
async function Bt(i, l) {
  let p;
  try {
    p = await artifactFrameHttpClient.get("/api/frame/frames?limit=200", {
      refreshOAuth: !0,
      credentials: i,
      headers: buildFrameHeaders(),
      timeout: 15000,
      maxContentLength: Ir,
      signal: l,
    });
  } catch (R) {
    if (isCancel(R)) throw R;
    return (
      logFeatureBad("artifact_gallery", "request_error"),
      { err: "Couldn't load artifacts (network error)" }
    );
  }
  if (!p.ok)
    return (
      logFeatureBad("artifact_gallery", p.reason),
      {
        err:
          p.reason === "no-auth"
            ? formatNotAuthenticatedMessage(p.detail)
            : `Artifacts unavailable: ${p.reason}`,
      }
    );
  if (!p.fromFrame)
    return (
      logFeatureBad("artifact_gallery", "relay_error"),
      { err: `Couldn't load artifacts (relay HTTP ${p.status})` }
    );
  if (p.status < 200 || p.status >= 300)
    return (
      logFeatureBad("artifact_gallery", "http_failed"),
      { err: `Couldn't load artifacts (HTTP ${p.status})` }
    );
  let h = Mr().safeParse(p.data);
  if (!h.success)
    return (
      logFeatureBad("artifact_gallery", "malformed_body"),
      { err: "Couldn't load artifacts (unexpected response)" }
    );
  let u = [],
    S = 0;
  for (let R of h.data.frames ?? []) {
    let v = Ur().safeParse(R);
    if (!v.success) {
      S++;
      continue;
    }
    let w = v.data;
    if (w.softDeleted === !0) continue;
    let O = `https://claude.ai/code/artifact/${w.slug}`;
    if (uuidSlugFromUrl(O) !== w.slug) {
      S++;
      continue;
    }
    let P = w.favicon === void 0 ? void 0 : (sanitizeFaviconText(w.favicon) ?? void 0);
    u.push({
      slug: w.slug,
      title: Oe(w.title),
      editableTitle: w.title === void 0 ? void 0 : (sanitizeEditableTitle(w.title) ?? void 0),
      favicon: P !== void 0 && getStringWidth(P) <= 4 ? P : void 0,
      description: Oe(w.description),
      label: Oe(w.label),
      rel: w.rel,
      source_surface: w.source_surface,
      updatedAt: w.updatedAt,
      createdAt: w.created_at,
      ownerEmail: Oe(w.owner_email),
      view_count: w.view_count,
      unique_view_count: w.unique_view_count,
      needs_pin: w.needs_pin,
      audience: w.audience,
      starred: w.starred,
      lastViewedAt: w.last_viewed_at,
    });
  }
  if (u.length === 0 && S > 0)
    return (
      logFeatureBad("artifact_gallery", "all_rows_dropped"),
      { err: "Couldn't load artifacts (unexpected response)" }
    );
  if (S > 0) logFeatureSad("artifact_gallery", "rows_dropped", { count: S });
  else logFeatureOk("artifact_gallery");
  return { err: null, frames: u, starsEnabled: h.data.starsEnabled === !0 };
}
var Nr = 65536,
  Br = createLazyValue(() =>
    nt({
      title: le()
        .optional()
        .catch(void 0),
    }),
  );
async function Kt(i, l, p, h) {
  let u;
  try {
    u = await httpClient.post(
      `/api/frame/retitle/${encodeURIComponent(i)}`,
      { title: l },
      {
        host: "frame",
        auth: "claude-ai-oauth",
        refreshOAuth: !0,
        headers: buildFrameHeaders(),
        timeout: 15000,
        maxContentLength: Nr,
        validateStatus: () => !0,
        signal: h,
        credentials: p,
      },
    );
  } catch (v) {
    if (isCancel(v)) throw v;
    return (
      logFeatureBad("artifact_rename", "request_error"),
      { err: "Couldn't rename artifact (network error)" }
    );
  }
  if (!u.ok)
    return (
      logFeatureBad("artifact_rename", u.reason),
      {
        err:
          u.reason === "no-auth"
            ? formatNotAuthenticatedMessage(u.detail)
            : `Artifact rename unavailable: ${u.reason}`,
      }
    );
  if (u.status === 404)
    return (
      logFeatureSad("artifact_rename", "not_found"),
      {
        err: "Artifact not found \u2014 it may have been deleted, or you are not the owner",
      }
    );
  if (u.status === 400 || u.status === 409) {
    if (u.status === 409) logFeatureSad("artifact_rename", "conflict");
    else logFeatureBad("artifact_rename", "rejected");
    let v = typeof u.data === "string" ? normalizeArtifactTitle(u.data.trim()) : null;
    return {
      err: v
        ? `Couldn't rename artifact: ${v}`
        : `Couldn't rename artifact (HTTP ${u.status})`,
    };
  }
  if (u.status < 200 || u.status >= 300)
    return (
      logFeatureBad("artifact_rename", "http_failed"),
      { err: `Couldn't rename artifact (HTTP ${u.status})` }
    );
  let S = Br().safeParse(u.data),
    R = S.success && S.data.title !== void 0 ? normalizeArtifactTitle(S.data.title) : null;
  return (logFeatureOk("artifact_rename"), { err: null, title: R ?? normalizeArtifactTitle(l) ?? "" });
}
function Yr(i, l, p) {
  let h = l ? ["all", "mine", "shared", "pinned"] : ["all", "mine", "shared"],
    u = h.indexOf(i);
  return h[(u + p + h.length) % h.length] ?? "all";
}
var Ie = BRANCH_ARROW_GLYPH,
  Qr = 400;
function bt({
  onDone: i,
  onAttach: l,
  onAbortAttach: p,
  attachedSlugs: h,
  onDetach: u,
  onDeleted: S,
}) {
  useActiveOverlay("artifacts-dialog");
  let { credentials: R } = useStorageV5Context(),
    { rows: v, columns: w } = useVirtualScrollViewportSize(useTerminalSize()),
    O = useTerminalFocus(),
    [P, B] = d([]),
    [se, Ve] = d(!1),
    [Z, be] = d(""),
    [De, je] = d(0),
    oe = C(""),
    Ce = C(0),
    ce = C(null),
    [, ur] = d(0),
    [me, At] = d(!0),
    [fe, _t] = d(null),
    [pe, k] = d(null),
    [M, dr] = d({ mode: "list" }),
    [ge, ae] = d(0),
    [ee, vt] = d(!1),
    Fe = C(ee),
    J = C(M),
    z = re((n) => {
      ((J.current = n), dr(n));
    }, []),
    K = C(!1),
    {
      query: W,
      cursorOffset: mr,
      handleKeyDown: fr,
      handlePaste: pr,
    } = useVimModeInput({
      isActive: ee && M.mode === "list",
      onExit: () => {
        ((Fe.current = !1), (K.current = !0), vt(!1), ae(0));
      },
      passthroughCtrlKeys: ["c", "d"],
    }),
    [X, Xe] = d("all"),
    He = C(0),
    ke = C(new Map()),
    Ae = C(new Set()),
    xt = C(new Set()),
    qe = C(!1),
    Le = re(
      (n) => {
        (At(!0),
          _t(null),
          Bt(R, n)
            .then((s) => {
              if (n?.aborted) return;
              if (s.err !== null) _t(s.err);
              else {
                let c = s.frames.filter((b) => !xt.current.has(b.slug));
                if (
                  (B(
                    s.starsEnabled
                      ? c.map((b) => {
                          let q = ke.current.get(b.slug);
                          if (q === void 0) return b;
                          if (b.starred !== q) Ae.current.add(b.slug);
                          else Ae.current.delete(b.slug);
                          return { ...b, starred: q };
                        })
                      : c,
                  ),
                  (He.current += 1),
                  Ve(s.starsEnabled),
                  !s.starsEnabled)
                )
                  Xe((b) => (b === "pinned" ? "all" : b));
              }
              At(!1);
            })
            .catch(() => {}));
      },
      [R],
    );
  E(() => {
    let n = new AbortController();
    return (Le(n.signal), () => n.abort());
  }, [Le]);
  let $e = V(() => Zr(P), [P]),
    {
      list: N,
      mineCount: gr,
      sharedCount: hr,
      pinnedCount: yr,
    } = V(() => {
      let n = $e;
      if (W) {
        let c = W.toLowerCase();
        n = n.filter(
          (b) =>
            (b.title ?? "").toLowerCase().includes(c) ||
            b.slug.toLowerCase().includes(c) ||
            (b.description ?? "").toLowerCase().includes(c) ||
            (b.label ?? "").toLowerCase().includes(c) ||
            (b.ownerEmail ?? "").toLowerCase().includes(c),
        );
      }
      let s = countMatching(n, (c) => c.rel === "mine");
      return {
        list:
          X === "all"
            ? n
            : X === "pinned"
              ? n.filter((c) => c.starred === !0)
              : n.filter((c) => c.rel === X),
        mineCount: s,
        sharedCount: n.length - s,
        pinnedCount: countMatching(n, (c) => c.starred === !0),
      };
    }, [$e, W, X]);
  E(() => {
    ae((n) => Math.min(n, Math.max(0, N.length - 1)));
  }, [N.length]);
  let Je = C(null);
  E(() => {
    Je.current = N[ge]?.slug ?? null;
  });
  let Pe = C(null);
  (E(() => {
    let n = Pe.current;
    if (n === null) return;
    Pe.current = null;
    let s = N.findIndex((c) => c.slug === n);
    if (s !== -1) (ae(s), (Je.current = n));
  }, [N]),
    E(() => {
      ((K.current = !1), (qe.current = !1));
    }));
  let wr = V(() => countMatching($e, (n) => n.starred === !0), [$e]),
    Tt = se && (wr > 0 || X === "pinned"),
    T = N[ge],
    ze = T?.rel === "mine",
    Et = ze && !a.CLAUDE_CODE_REMOTE,
    Dt = T !== void 0 && h.has(T.slug),
    br = re((n) => {
      let s = artifactViewerUrl(n);
      tryOpenUrlInBrowser(s).then((c) => {
        k(
          c
            ? `Opened ${s}`
            : `Couldn't open a browser \u2014 press c to copy ${s}`,
        );
      });
    }, []),
    Rr = re(
      (n) => {
        if (ke.current.has(n.slug)) return !1;
        let s = n.starred !== !0,
          c = we(n),
          b = (H) =>
            B((ye) =>
              ye.map((I) => (I.slug === n.slug ? { ...I, starred: H } : I)),
            );
        (ke.current.set(n.slug, s), Ae.current.delete(n.slug));
        let q = He.current;
        return (
          (Pe.current = n.slug),
          b(s),
          k(s ? `Pinned ${c}` : `Unpinned ${c}`),
          setArtifactPinned(n.slug, s, R)
            .then((H) => {
              if (H.err === null) return;
              if ((k(H.err), He.current !== q && !Ae.current.has(n.slug)))
                return;
              if (Je.current === n.slug) Pe.current = n.slug;
              B((ye) =>
                ye.map((I) =>
                  I.slug === n.slug && I.starred === s
                    ? { ...I, starred: !s }
                    : I,
                ),
              );
            })
            .finally(() => {
              (ke.current.delete(n.slug), Ae.current.delete(n.slug));
            }),
          !0
        );
      },
      [R],
    ),
    Cr = re(
      (n) => {
        let s = n.editableTitle || n.title || n.label || "";
        (k(null),
          (oe.current = s),
          (Ce.current = s.length),
          (ce.current = null),
          be(s),
          je(s.length),
          z({ mode: "rename", slug: n.slug, title: s }));
      },
      [z],
    ),
    Sr = re((n) => {
      let s = fitEditedText(oe.current, n, TITLE_MAX_RUNES);
      if (
        ((ce.current =
          s.caret === "pass"
            ? null
            : s.caret === "keep"
              ? Ce.current
              : s.caret),
        s.caret !== "pass")
      )
        ur((c) => c + 1);
      ((oe.current = s.text), be(s.text));
    }, []),
    Fr = re((n) => {
      let s = ce.current ?? n;
      ((ce.current = null), (Ce.current = s), je(s));
    }, []),
    kt = C(0),
    Ge = C(new Map()),
    Ar = re(() => J.current.mode === "rename", []),
    _r = re(() => {
      let n = J.current;
      if (n.mode !== "rename") return;
      let s = sanitizeEditableTitle(oe.current) ?? "";
      if (
        (z({ mode: "list" }),
        (kt.current = Date.now()),
        s === "" || s === n.title)
      )
        return;
      let c = (Ge.current.get(n.slug) ?? 0) + 1;
      (Ge.current.set(n.slug, c),
        k("Renaming\u2026"),
        Kt(n.slug, s, R).then((b) => {
          if (Ge.current.get(n.slug) !== c) return;
          if (b.err !== null) {
            k(b.err);
            return;
          }
          (B((q) =>
            q.map((H) =>
              H.slug === n.slug
                ? { ...H, title: b.title || void 0, editableTitle: s }
                : H,
            ),
          ),
            k(b.title ? `Renamed to ${b.title}` : "Renamed"));
        }));
    }, [z, R]),
    he = C(!1),
    Lt = C(!1),
    We = C(!1),
    Y = C(null),
    $t = C(!1),
    vr = re(
      (n) => {
        if (he.current) return;
        ((he.current = !0),
          k(`Attaching ${we(n)}\u2026`),
          l(n).then(
            ({ status: s, metaMessage: c }) => {
              if (Lt.current) return;
              ((We.current = !0),
                i(s, {
                  display: "system",
                  ...(c !== void 0 && { metaMessages: [c] }),
                }));
            },
            () => {
              ((he.current = !1),
                k(
                  "The artifact could not be attached. Select it and press Enter to try again.",
                ));
            },
          ));
      },
      [l, i],
    ),
    Ye = re(() => {
      if (J.current.mode !== "list") return;
      (k(null), (Fe.current = !0), vt(!0));
    }, []);
  useKeybindings(
    {
      "confirm:previous": () => {
        if ((k(null), (K.current = !0), ge === 0)) Ye();
        else ae((n) => Math.max(0, n - 1));
      },
      "confirm:next": () => {
        k(null);
        let n = Math.max(0, N.length - 1);
        if (ge < n) K.current = !0;
        ae((s) => Math.min(n, s + 1));
      },
    },
    {
      context: "Confirmation",
      isActive: M.mode === "list" && !me && fe === null && !ee && P.length > 0,
    },
  );
  let Pt = re(() => {
    if (We.current) return;
    if (J.current.mode === "confirm-delete" || J.current.mode === "rename") {
      z({ mode: "list" });
      return;
    }
    if (Fe.current) return;
    if (he.current) {
      ((Lt.current = !0), p(), i("Attach cancelled", { display: "system" }));
      return;
    }
    if (Y.current !== null) {
      (($t.current = !0),
        k(
          `Still deleting ${Y.current} \u2014 the panel closes when it finishes`,
        ));
      return;
    }
    i("Artifacts panel closed", { display: "system" });
  }, [z, i, p]);
  (useKeybindings({ "confirm:no": Pt }, { context: "Settings", isActive: !ee }),
    useKeybindings(
      { "settings:search": Ye },
      {
        context: "Settings",
        isActive:
          M.mode === "list" && !me && fe === null && !ee && P.length > 0,
      },
    ));
  let xr = (n) => {
      if (n.defaultPrevented) return;
      if (me) return;
      if (fe !== null) {
        if (n.key === "r" && !n.ctrl && !n.meta)
          (n.preventDefault(), k(null), Le());
        return;
      }
      if (Fe.current && M.mode === "list") {
        fr(n);
        return;
      }
      if (J.current.mode === "rename") return;
      if (n.key === "return" && Date.now() - kt.current < Qr) {
        n.preventDefault();
        return;
      }
      if (n.ctrl && n.key === "r" && T && ze && J.current.mode === "list") {
        if ((n.preventDefault(), K.current || he.current || Y.current !== null))
          return;
        Cr(T);
        return;
      }
      if (n.ctrl || n.meta) return;
      let s = J.current;
      if (s.mode === "confirm-delete") {
        if (n.key === "y") {
          n.preventDefault();
          let { slug: c, title: b, updatedAt: q } = s,
            H = q !== void 0 ? Date.parse(q) : Number.NaN;
          (z({ mode: "list" }), k("Deleting\u2026"), (Y.current = b));
          let ye = (I) => {
            if (((Y.current = null), $t.current))
              ((We.current = !0), i(I, { display: "system" }));
            else k(I);
          };
          deleteArtifact(c, R, {
            source: "dialog",
            ...(Number.isFinite(H) && {
              sinceUpdateSeconds: Math.max(
                0,
                Math.round((Date.now() - H) / 1000),
              ),
            }),
          }).then(
            (I) => {
              try {
                if (I.err === null)
                  ((K.current = !0),
                    xt.current.add(c),
                    B(($r) => $r.filter((Pr) => Pr.slug !== c)),
                    S(c));
              } finally {
                ye(
                  I.err ??
                    (I.alreadyGone
                      ? "Artifact was already deleted"
                      : "Artifact deleted"),
                );
              }
            },
            () => {
              ye(
                "Couldn't confirm the delete \u2014 press r to refresh the list",
              );
            },
          );
        } else if (n.key === "n") (n.preventDefault(), z({ mode: "list" }));
        return;
      }
      if (n.key === "/" && P.length > 0) (n.preventDefault(), Ye());
      else if (
        (n.key === "tab" || n.key === "right" || n.key === "left") &&
        P.length > 0
      ) {
        if ((n.preventDefault(), qe.current)) return;
        ((K.current = !0),
          k(null),
          ae(0),
          Xe((c) =>
            Yr(
              c,
              Tt,
              n.key === "left" || (n.key === "tab" && n.shift) ? -1 : 1,
            ),
          ));
      } else if (n.key === "return" && T) {
        if ((n.preventDefault(), K.current || Y.current !== null)) return;
        vr(T);
      } else if (n.key === "o" && T) (n.preventDefault(), br(T.slug));
      else if (n.key === "c" && T) {
        n.preventDefault();
        let c = artifactViewerUrl(T.slug);
        setClipboard(c).then((b) => {
          if (b) process.stdout.write(b);
          k(`Copied ${c}`);
        });
      } else if (n.key === "x" && Dt && T) {
        if ((n.preventDefault(), K.current)) return;
        (u(T),
          logFeatureOk("frame_link_dismiss_dialog"),
          k(`Dismissed ${we(T)} from this session's list`));
      } else if (n.key === "p" && T && se) {
        if ((n.preventDefault(), K.current || Y.current !== null)) return;
        if (Rr(T)) ((K.current = !0), (qe.current = !0));
      } else if (n.key === "d" && T && Et) {
        if ((n.preventDefault(), K.current || he.current || Y.current !== null))
          return;
        (k(null),
          z({
            mode: "confirm-delete",
            slug: T.slug,
            title: we(T),
            ...(T.updatedAt !== void 0 && { updatedAt: T.updatedAt }),
          }));
      } else if (n.key === "r") {
        if ((n.preventDefault(), Y.current !== null)) return;
        (k(null), Le());
      }
    },
    Tr = (n) => {
      if (Fe.current && M.mode === "list") pr(n);
    },
    Er = 20,
    Dr = oa(Math.min(v - 12, Er), 3, Math.max(3, N.length)),
    {
      windowStart: Ot,
      windowEnd: kr,
      moreAbove: Mt,
      moreBelow: Ut,
    } = computeListWindow(ge, N.length, Dr),
    Lr = N.slice(Ot, kr),
    ie = !me && fe === null && P.length > 0,
    Nt =
      M.mode === "rename"
        ? r(Box, {
            marginTop: 1,
            flexDirection: "column",
            children: [
              e(Text, { bold: !0, children: "Rename artifact:" }),
              e(hn, {
                value: Z,
                onChange: Sr,
                inputFilter: en,
                onSubmit: _r,
                disableCtrlCClear: !0,
                placeholder: "New name",
                columns: Math.max(20, w - 8),
                cursorOffset: De,
                onChangeCursorOffset: Fr,
                focus: !0,
                showCursor: !0,
              }),
            ],
          })
        : null;
  return e(Box, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: xr,
    onPaste: Tr,
    children: e(de, {
      title: "Artifacts",
      onCancel: Pt,
      color: "background",
      isCancelActive: !1,
      inputGuide: e(InputGuide, {
        exitActive: M.mode !== "rename",
        onInterrupt: Ar,
        children:
          M.mode === "confirm-delete"
            ? r(DotSeparatedList, {
                children: [
                  e(KeybindingHint, { chord: "y", action: "delete" }),
                  e(KeybindingHint, { chord: "n", action: "keep" }),
                ],
              })
            : M.mode === "rename"
              ? r(DotSeparatedList, {
                  children: [
                    e(KeybindingHint, { chord: "enter", action: "save" }),
                    e(KeybindingHint, { chord: "escape", action: "cancel" }),
                  ],
                })
              : ee
                ? r(DotSeparatedList, {
                    children: [
                      e(Text, { children: "Type to filter" }),
                      e(KeybindingHint, { chord: ["enter", "down"], action: "list" }),
                      e(KeybindingHint, { chord: "escape", action: "clear" }),
                    ],
                  })
                : r(DotSeparatedList, {
                    children: [
                      ie &&
                        N.length > 0 &&
                        e(KeybindingHint, { chord: "enter", action: "attach" }),
                      ie && Dt && e(KeybindingHint, { chord: "x", action: "dismiss" }),
                      ie &&
                        N.length > 0 &&
                        e(KeybindingHint, { chord: "c", action: "copy url" }),
                      ie &&
                        ze &&
                        e(KeybindingHint, {
                          chord: "ctrl+r",
                          action: "rename",
                          format: { modCase: "title", charCase: "upper" },
                        }),
                      ie && Et && e(KeybindingHint, { chord: "d", action: "delete" }),
                      ie &&
                        se &&
                        T !== void 0 &&
                        e(KeybindingHint, {
                          chord: "p",
                          action: T.starred === !0 ? "unpin" : "pin",
                        }),
                      ie && e(KeybindingHint, { chord: "/", action: "search" }),
                      !me && e(KeybindingHint, { chord: "r", action: "refresh" }),
                    ],
                  }),
      }),
      children: me
        ? e(SpinnerMessageLine, { message: "Loading artifacts\u2026", dimColor: !0 })
        : fe !== null
          ? e(EmptyStateMessage, { children: fe })
          : P.length === 0
            ? r(Box, {
                flexDirection: "column",
                children: [
                  e(EmptyStateMessage, {
                    children:
                      "No artifacts yet. Publish one with the Artifact tool.",
                  }),
                  pe &&
                    M.mode === "list" &&
                    e(Box, {
                      marginTop: 1,
                      children: e(Text, { dimColor: !0, children: pe }),
                    }),
                ],
              })
            : r(Box, {
                flexDirection: "column",
                gap: 1,
                children: [
                  e(SearchInput, {
                    query: W,
                    isFocused: ee,
                    isTerminalFocused: O,
                    cursorOffset: mr,
                    placeholder: "Search artifacts\u2026",
                  }),
                  e(rr, {
                    relFilter: X,
                    mineCount: gr,
                    sharedCount: hr,
                    pinnedCount: Tt ? yr : null,
                    onSelect: (n) => {
                      (k(null), ae(0), Xe(n));
                    },
                  }),
                  N.length === 0
                    ? r(Box, {
                        flexDirection: "column",
                        children: [
                          e(Text, {
                            dimColor: !0,
                            italic: !0,
                            children: W
                              ? X === "all"
                                ? `No artifacts match "${W}"`
                                : X === "mine"
                                  ? `No artifacts you created match "${W}"`
                                  : X === "pinned"
                                    ? `No pinned artifacts match "${W}"`
                                    : `No artifacts shared with you match "${W}"`
                              : X === "shared"
                                ? "Nothing has been shared with you yet."
                                : X === "pinned"
                                  ? "Nothing pinned yet. Press p on an artifact to pin it."
                                  : "Nothing created by you yet.",
                          }),
                          Nt,
                          pe &&
                            M.mode === "list" &&
                            e(Box, {
                              marginTop: 1,
                              children: e(Text, { dimColor: !0, children: pe }),
                            }),
                        ],
                      })
                    : r(Box, {
                        flexDirection: "column",
                        children: [
                          Mt > 0 &&
                            r(Text, {
                              dimColor: !0,
                              children: [
                                "  ",
                                figures.arrowUp,
                                " ",
                                Mt,
                                " more above",
                              ],
                            }),
                          Lr.map((n, s) => {
                            let c = Ot + s;
                            return e(
                              nr,
                              {
                                frame: n,
                                isSelected: c === ge && !ee,
                                isAttached: h.has(n.slug),
                              },
                              n.slug,
                            );
                          }),
                          Ut > 0 &&
                            r(Text, {
                              dimColor: !0,
                              children: [
                                "  ",
                                figures.arrowDown,
                                " ",
                                Ut,
                                " more below",
                              ],
                            }),
                          M.mode === "confirm-delete" &&
                            e(Box, {
                              marginTop: 1,
                              children: r(Text, {
                                children: [
                                  "Delete ",
                                  e(Text, { bold: !0, children: M.title }),
                                  "? This cannot be undone.",
                                ],
                              }),
                            }),
                          Nt,
                          pe &&
                            M.mode === "list" &&
                            e(Box, {
                              marginTop: 1,
                              children: e(Text, { dimColor: !0, children: pe }),
                            }),
                        ],
                      }),
                ],
              }),
    }),
  });
}
function rr(bo) {
  let ve = _(17),
    {
      relFilter: Vt,
      mineCount: Kr,
      sharedCount: Vr,
      pinnedCount: et,
      onSelect: jt,
    } = bo;
  const Xt = `All ${Kr + Vr}`;
  let tt;
  if (ve[0] !== Xt) ((tt = ["all", Xt]), (ve[0] = Xt), (ve[1] = tt));
  else tt = ve[1];
  const Ht = `${ARTIFACT_MARKER_GLYPH} Created by me ${Kr}`;
  let rt;
  if (ve[2] !== Ht) ((rt = ["mine", Ht]), (ve[2] = Ht), (ve[3] = rt));
  else rt = ve[3];
  const qt = `${Ie} Shared with me ${Vr}`;
  let ot;
  if (ve[4] !== qt) ((ot = ["shared", qt]), (ve[4] = qt), (ve[5] = ot));
  else ot = ve[5];
  let Me;
  if (ve[6] !== et || ve[7] !== tt || ve[8] !== rt || ve[9] !== ot) {
    Me = [tt, rt, ot];
    if (et !== null) {
      const xe = `${figures.star} Pinned ${et}`;
      let at;
      if (ve[11] !== xe) ((at = ["pinned", xe]), (ve[11] = xe), (ve[12] = at));
      else at = ve[12];
      Me.push(at);
    }
    ((ve[6] = et), (ve[7] = tt), (ve[8] = rt), (ve[9] = ot), (ve[10] = Me));
  } else Me = ve[10];
  let xe;
  if (ve[13] !== jt || ve[14] !== Vt || ve[15] !== Me)
    ((xe = e(Box, {
      flexDirection: "row",
      gap: 1,
      marginLeft: 1,
      children: Me.map((at) => {
        let [Jt, Ro] = at;
        return e(
          JWe,
          {
            title: Ro,
            isCurrent: Vt === Jt,
            headerFocused: !1,
            color: void 0,
            onClick: () => jt(Jt),
          },
          Jt,
        );
      }),
    })),
      (ve[13] = jt),
      (ve[14] = Vt),
      (ve[15] = Me),
      (ve[16] = xe));
  else xe = ve[16];
  return xe;
}
function nr(Co) {
  let j = _(38),
    { frame: A, isSelected: jr, isAttached: So } = Co,
    Ue,
    Xr;
  if (j[0] !== A)
    ((Ue = we(A)), (Xr = Array.from(Ue)), (j[0] = A), (j[1] = Ue), (j[2] = Xr));
  else ((Ue = j[1]), (Xr = j[2]));
  let it = Xr,
    Hr;
  if (j[3] !== Ue || j[4] !== it)
    ((Hr = it.length > 50 ? it.slice(0, 49).join("") + "\u2026" : Ue),
      (j[3] = Ue),
      (j[4] = it),
      (j[5] = Hr));
  else Hr = j[5];
  let zt = Hr,
    qr;
  if (j[6] !== A.ownerEmail || j[7] !== A.rel)
    ((qr = A.rel === "shared" && A.ownerEmail ? beforeFirst(A.ownerEmail, "@") : null),
      (j[6] = A.ownerEmail),
      (j[7] = A.rel),
      (j[8] = qr));
  else qr = j[8];
  let Jr = qr,
    st = A.updatedAt ?? A.createdAt;
  const Gt = So ? "attached" : null;
  let lt;
  if (j[9] !== A.audience)
    ((lt = er(A.audience)), (j[9] = A.audience), (j[10] = lt));
  else lt = j[10];
  const Wt = Jr ? `by ${Jr}` : null;
  let ct;
  if (j[11] !== st)
    ((ct = st ? formatRelativeTime(new Date(st)) : null), (j[11] = st), (j[12] = ct));
  else ct = j[12];
  let ut;
  if (j[13] !== A.view_count)
    ((ut = A.view_count ? `${A.view_count} ${pluralize(A.view_count, "view")}` : null),
      (j[13] = A.view_count),
      (j[14] = ut));
  else ut = j[14];
  let zr;
  if (
    j[15] !== Gt ||
    j[16] !== lt ||
    j[17] !== Wt ||
    j[18] !== ct ||
    j[19] !== ut
  )
    ((zr = [Gt, lt, Wt, ct, ut].filter(Boolean)),
      (j[15] = Gt),
      (j[16] = lt),
      (j[17] = Wt),
      (j[18] = ct),
      (j[19] = ut),
      (j[20] = zr));
  else zr = j[20];
  let dt = zr;
  const Yt = jr ? figures.pointer + " " : "  ";
  let mt;
  if (j[21] !== Yt) ((mt = e(Text, { children: Yt })), (j[21] = Yt), (j[22] = mt));
  else mt = j[22];
  const Qt = jr ? "suggestion" : void 0;
  let pt;
  if (j[23] !== A.rel)
    ((pt =
      A.rel === "shared"
        ? e(Text, { color: "permission", children: Ie })
        : e(Text, { color: "claude", children: ARTIFACT_MARKER_GLYPH })),
      (j[23] = A.rel),
      (j[24] = pt));
  else pt = j[24];
  let gt;
  if (j[25] !== A.starred)
    ((gt =
      A.starred === !0 && r(Text, { color: "warning", children: [figures.star, " "] })),
      (j[25] = A.starred),
      (j[26] = gt));
  else gt = j[26];
  let yt;
  if (j[27] !== dt)
    ((yt =
      dt.length > 0 &&
      r(Text, { dimColor: !0, children: ["  ", dt.join(" \xB7 ")] })),
      (j[27] = dt),
      (j[28] = yt));
  else yt = j[28];
  let wt;
  if (
    j[29] !== zt ||
    j[30] !== Qt ||
    j[31] !== pt ||
    j[32] !== gt ||
    j[33] !== yt
  )
    ((wt = r(Text, { color: Qt, children: [pt, " ", gt, zt, yt] })),
      (j[29] = zt),
      (j[30] = Qt),
      (j[31] = pt),
      (j[32] = gt),
      (j[33] = yt),
      (j[34] = wt));
  else wt = j[34];
  let Wr;
  if (j[35] !== mt || j[36] !== wt)
    ((Wr = r(Box, { children: [mt, wt] })),
      (j[35] = mt),
      (j[36] = wt),
      (j[37] = Wr));
  else Wr = j[37];
  return Wr;
}
function er(i) {
  switch (i) {
    case "owner":
      return "private";
    case "org":
      return "org-wide";
    case "users":
      return "specific people";
    case "public":
      return "public";
    case void 0:
      return null;
  }
}
function Zr(i) {
  return i.toSorted((l, p) => {
    let h = Number(p.starred === !0) - Number(l.starred === !0);
    if (h !== 0) return h;
    let u = tr(l),
      S = tr(p);
    return u === S ? 0 : S - u;
  });
}
function tr(i) {
  let l = i.lastViewedAt ?? i.updatedAt ?? i.createdAt;
  return l === void 0 ? -1 / 0 : new Date(l).getTime();
}
function we(i) {
  return i.title || i.label || i.slug;
}
function en(i) {
  return sanitizeArtifactTitleInput(collapseToSingleLine(i));
}
function Te(i, l) {
  for (let [p, h] of getNonOpenedFrameUrlEntries(i)) if (!isCreatedFrameKey(p) && uuidSlugFromUrl(h.url) === l) return p;
  return;
}
function Rt(i) {
  let l = new Set();
  for (let [p, h] of getNonOpenedFrameUrlEntries(i)) {
    let u = uuidSlugFromUrl(h.url);
    if (u !== null && !isCreatedFrameKey(p)) l.add(u);
  }
  return l;
}
async function Ct(i) {
  let {
      frame: l,
      frameUrls: p,
      setAppState: h,
      getKnownVer: u,
      context: S,
    } = i,
    R = artifactViewerUrl(l.slug),
    v = l.rel === "mine" ? l.title || l.slug : l.slug;
  if (Te(p, l.slug) !== void 0)
    return (
      logFeatureOk("artifact_attach", { already_attached: !0 }),
      { status: `${ARTIFACT_MARKER_GLYPH} ${v} is already attached` }
    );
  let O = await subscribeFrameLiveOnAttach({
    slug: l.slug,
    url: R,
    getKnownVer: () => u(l.slug),
    context: S,
  });
  if (S.abortController.signal.aborted)
    return (
      logFeatureSad("artifact_attach", "cancelled"),
      { status: `${ARTIFACT_MARKER_GLYPH} ${v} \u2014 attach cancelled` }
    );
  let P = !1;
  if (
    (h((Z) => {
      if (Te(Z.frameUrls, l.slug) !== void 0) return ((P = !0), Z);
      let be = `${OPENED_FRAME_URL_PREFIX}${l.slug}`,
        De = `${CREATED_FRAME_URL_PREFIX}${l.slug}`,
        { [be]: je, [De]: oe, ...Ce } = Z.frameUrls,
        ce = Z.frameOpenFailedPath === be || Z.frameOpenFailedPath === De;
      return {
        ...Z,
        ...(ce && { frameOpenFailedPath: null }),
        frameUrls: {
          ...Ce,
          [`${ATTACHED_FRAME_URL_PREFIX}${l.slug}`]: {
            url: R,
            updatedAt: Date.now(),
            ...(l.title !== void 0 && { title: l.title }),
            ...(oe?.favicon !== void 0 && { favicon: oe.favicon }),
          },
        },
      };
    }),
    P)
  )
    return (
      logFeatureOk("artifact_attach", { already_attached: !0 }),
      { status: `${ARTIFACT_MARKER_GLYPH} ${v} is already attached` }
    );
  if (l.rel === "mine") S.setArtifactContractTarget(l.slug);
  let B = O.outcome !== "skipped",
    se = O.outcome === "skipped" && O.reason === "stop_latched",
    Ve = B
      ? " You'll be notified if it is republished elsewhere (another session, or someone saving from the page)."
      : se
        ? " Its watch was stopped earlier in this session, so no republish notice will come; do not watch it again unless the user asks."
        : "";
  return (
    logFeatureOk("artifact_attach", { watching: B }),
    {
      status: B
        ? `Attached ${ARTIFACT_MARKER_GLYPH} ${v} \u2014 you'll be notified when it's republished`
        : se
          ? `Attached ${ARTIFACT_MARKER_GLYPH} ${v} \u2014 not watching (its watch was stopped earlier in this session)`
          : `Attached ${ARTIFACT_MARKER_GLYPH} ${v}`,
      metaMessage: `The user attached the artifact ${R} to this session as the current artifact of interest. re-read it before editing or republishing (${getArtifactReadInstruction()}).${Ve}`,
    }
  );
}
function cn(zo) {
  return zo.frameUrls;
}
async function Vo(i, l) {
  return e(lr, { onDone: i, context: l });
}
function lr(Xo) {
  let Ee = _(20),
    { onDone: or, context: Q } = Xo,
    ne = useSetAppState(),
    St = useAppState(),
    ar = useAppStateSelector(cn),
    tn;
  if (Ee[0] !== ar) ((tn = Rt(ar)), (Ee[0] = ar), (Ee[1] = tn));
  else tn = Ee[1];
  let ir = tn,
    rn;
  if (Ee[2] !== Q || Ee[3] !== ne || Ee[4] !== St)
    ((rn = function Ne(Ho) {
      return Ct({
        frame: Ho,
        frameUrls: St.getState().frameUrls,
        setAppState: ne,
        getKnownVer: (qo) => mainObservedArtifactVersion(St.getState(), qo),
        context: Q,
      });
    }),
      (Ee[2] = Q),
      (Ee[3] = ne),
      (Ee[4] = St),
      (Ee[5] = rn));
  else rn = Ee[5];
  let Ne = rn,
    nn;
  if (Ee[6] !== ne)
    ((nn = function Be(Jo) {
      ne((sr) => {
        let on = Te(sr.frameUrls, Jo.slug);
        return on === void 0 ? sr : removeFrameUrl(sr, on);
      });
    }),
      (Ee[6] = ne),
      (Ee[7] = nn));
  else nn = Ee[7];
  let Be = nn,
    an;
  if (Ee[8] !== Q || Ee[9] !== ne)
    ((an = function Ke(sn) {
      (forgetDeletedArtifact(sn, { updateAppState: ne, context: Q }),
        Q.applyMessageOp({
          type: "append",
          messages: [createUserMessage({ content: formatArtifactDeletedNote(artifactViewerUrl(sn)), isMeta: !0 })],
        }));
    }),
      (Ee[8] = Q),
      (Ee[9] = ne),
      (Ee[10] = an));
  else an = Ee[10];
  let Ke = an,
    Ft;
  if (Ee[11] !== Q.abortController)
    ((Ft = () => Q.abortController.abort()),
      (Ee[11] = Q.abortController),
      (Ee[12] = Ft));
  else Ft = Ee[12];
  let ln;
  if (
    Ee[13] !== ir ||
    Ee[14] !== Ne ||
    Ee[15] !== Ke ||
    Ee[16] !== Be ||
    Ee[17] !== or ||
    Ee[18] !== Ft
  )
    ((ln = e(bt, {
      onDone: or,
      onAttach: Ne,
      onDetach: Be,
      onDeleted: Ke,
      attachedSlugs: ir,
      onAbortAttach: Ft,
    })),
      (Ee[13] = ir),
      (Ee[14] = Ne),
      (Ee[15] = Ke),
      (Ee[16] = Be),
      (Ee[17] = or),
      (Ee[18] = Ft),
      (Ee[19] = ln));
  else ln = Ee[19];
  return ln;
}
export { Vo as call };

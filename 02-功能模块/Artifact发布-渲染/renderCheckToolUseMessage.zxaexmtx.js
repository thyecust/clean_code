// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 247 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { pluralize, truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { ARTIFACT_MARKER_GLYPH } from "../权限系统/chunk-e4pfvp7x.js";
import { truncatePathMiddle } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import {
  ASSET_ID_RE,
  STALE_GUARD_REJECTION_PREFIX,
  STALE_GUARD_REJECTION_PREFIX_LEGACY,
  STALE_GUARD_CONTENT_HEADER_LINE_RE,
  CONFLICT_REJECTION_PREFIX,
  parseArtifactUrl,
  parseArtifactUrlInput,
  artifactViewerUrlFor,
  canonicalArtifactTargetFor,
  sanitizeArtifactTitle,
  revealPageInvisibles,
  listScopeFrom,
  sweepAskCopy,
  sweepProvenanceMarker,
  sweptAskPath,
  splitWatchRows,
} from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { formatArtifactTitle, sanitizeDisplayText, getShareEntry, ownershipTag, shareAudienceParenthetical } from "./chunk-01ymf0ar.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t, ct } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import { ToolErrorMessage } from "../../03-入口与运行时/会话UI(REPL)/tool-result-display.js";
import { ToolResultRow } from "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { stripRejectNotice } from "./chunk-fx5ekm7e.js";
import { wte, lwe, FS } from "./chunk-qpgskeea.js";
import { ROOM_CONSENT_CLAUSE, DB_BATCH_OP, replayedPublishesRemaining, replayedPublishesResetAt, publishesRemainingLine } from "./chunk-pdd7kz7p.js";
import { MAX_PREVIEW_WIDTHS, MAX_REPORTED_DROPPED_ISSUES, MAX_PREVIEW_SHOTS, MAX_PREVIEW_ISSUES, normalizePreviewWidths, normalizePreviewThemes, isArtifactRoomFeatureEnabled, artifactLivePathsSchemaOpen } from "./chunk-b6k1z7an.js";
import "./chunk-x29r16ke.js";
import "../../01-核心基础设施/共享小工具-未细化/claude-browser-mcp-server.js";
import {
  mO,
  Mee,
  gO,
  vut,
  M4,
  Nee,
  pPe,
  YSe,
  JSe,
  QSe,
  b9,
  w9,
  Xb,
  fPe,
  yce,
  E7,
  mPe,
  gjn,
  kon,
  Fee,
  DGe,
  ZSe,
  LGe,
  CNt,
  Ion,
  Pon,
  kut,
} from "./chunk-pvztfdrb.js";
import "../Teammates团队/chunk-weg7y2ya.js";
import "../../01-核心基础设施/共享小工具-未细化/whiteboard-telemetry.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dgth8ahx.js";
import "../Bridge-RemoteControl/bridge-inbound-origin.js";
import "./chunk-5gvg7p5p.js";
import "../Teammates团队/chunk-y89mhs4a.js";
import { ReceivedBytesStatus } from "../../01-核心基础设施/共享小工具-未细化/webfetch-tool-messages.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { formatFileSize } from "../../01-核心基础设施/共享小工具-未细化/chunk-7axvc6rn.js";
import { isRecord } from "../../01-核心基础设施/共享小工具-未细化/is-record.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function R(ee) {
  let D = _(8),
    { name: A, url: E, iconColor: q } = ee,
    L = q === void 0 ? "claude" : q,
    M;
  if (D[0] !== L)
    ((M = e(t, { color: L, children: ARTIFACT_MARKER_GLYPH })), (D[0] = L), (D[1] = M));
  else M = D[1];
  let k;
  if (D[2] !== A || D[3] !== E)
    ((k = E
      ? e(ct, {
          url: E,
          fallback: A === E ? void 0 : `${A} (${E})`,
          children: A,
        })
      : A),
      (D[2] = A),
      (D[3] = E),
      (D[4] = k));
  else k = D[4];
  let V;
  if (D[5] !== M || D[6] !== k)
    ((V = r(t, { children: [M, " ", k] })), (D[5] = M), (D[6] = k), (D[7] = V));
  else V = D[7];
  return V;
}
import { basename } from "path";
var P = null,
  U = null,
  O = null,
  j = null,
  Y = 8;
function renderToolUseMessage(s, m) {
  let n = FS() ? wte(s) : s;
  if (n.action === "live-edit")
    return U
      ? U.renderLiveEditToolUse(n, m?.verbose === !0, artifactLivePathsSchemaOpen())
      : e(t, { children: "live-edit" });
  if (n.action === "preview") {
    let d = n,
      a = typeof d.file_path === "string" ? d.file_path : "",
      c = sweepProvenanceMarker(sweepAskCopy(a) ?? "(no file)");
    if (m?.verbose !== !0)
      return r(t, { children: ["preview ", truncatePathMiddle(basename(c), 60)] });
    let f = normalizePreviewWidths(d),
      g = normalizePreviewThemes(d);
    return r(t, {
      children: [
        "preview ",
        truncatePathMiddle(c, 1024),
        e(t, {
          dimColor: !0,
          children: ` \xB7 ${f.join("/")} \xB7 ${g.join("+")}`,
        }),
      ],
    });
  }
  if (n.action === "sync")
    return r(t, {
      children: [
        "sync working copy",
        typeof n.file_path === "string"
          ? ` ${truncatePathMiddle(sweptAskPath(n.file_path) || "(unprintable path)", 256)}`
          : "",
        typeof n.url === "string"
          ? ` \u2192 ${canonicalArtifactTargetFor(n.url, "(unrecognized address)")}`
          : "",
      ],
    });
  if (n.action === "version")
    return r(t, {
      children: [
        "version",
        typeof n.url === "string"
          ? ` ${canonicalArtifactTargetFor(n.url, "(unrecognized address)")}`
          : "",
        typeof n.label === "string" && n.label !== ""
          ? e(t, { dimColor: !0, children: ` \xB7 ${sweepAskCopy(n.label) ?? ""}` })
          : null,
      ],
    });
  if (n.action === "list") {
    if (Fee(n)) {
      let a = DGe(n),
        c = fPe(n),
        f =
          c !== void 0
            ? `"${sweepAskCopy(truncateToCodeUnits(c, 200)) ?? ""}"`
            : canonicalArtifactTargetFor(Xb(n), "(unrecognized address)");
      return r(t, {
        children: [
          "list",
          a === "shared" ? " (shared)" : a === "all" ? " (mine + shared)" : "",
          " ",
          "of type ",
          e(t, { dimColor: !0, children: f }),
        ],
      });
    }
    let d = listScopeFrom(n);
    return r(t, {
      children: [
        "list",
        d === "shared" ? " (shared)" : d === "all" ? " (mine + shared)" : "",
      ],
    });
  }
  if (n.action === "list_types") {
    let d =
      typeof n.type_query === "string" && n.type_query !== ""
        ? sweepAskCopy(truncateToCodeUnits(n.type_query, 200))
        : null;
    return r(t, {
      children: [
        "list types",
        d ? e(t, { dimColor: !0, children: ` "${d}"` }) : "",
      ],
    });
  }
  if (n.action === "describe_type")
    return r(t, {
      children: [
        "describe type",
        " ",
        e(t, { dimColor: !0, children: canonicalArtifactTargetFor(Xb(n), "(unrecognized address)") }),
      ],
    });
  if (
    n.action === "comments" ||
    n.action === "reply" ||
    n.action === "resolve"
  ) {
    let d = typeof n.url === "string" ? parseArtifactUrl(n.url) : null,
      a =
        n.action === "reply" && m?.verbose === !0
          ? mPe(mO(n).replyText)
          : void 0,
      c =
        (n.action === "reply" || n.action === "resolve") &&
        m?.verbose === !0 &&
        d !== null
          ? getShareEntry(d.slug)
          : void 0,
      f = shareAudienceParenthetical(c);
    return r(t, {
      children: [
        n.action,
        r(t, {
          dimColor: !0,
          children: [" ", d !== null ? artifactViewerUrlFor(d) : "(unrecognized address)"],
        }),
        f !== "" && e(t, { dimColor: !0, children: f }),
        a !== void 0 &&
          a !== "" &&
          e(t, { dimColor: !0, children: ` \u2014 "${a}"` }),
      ],
    });
  }
  if (
    n.action === "read_page_data" ||
    n.action === "read_db" ||
    n.action === "write_db" ||
    n.action === "room_send" ||
    n.action === "watch" ||
    n.action === "unwatch" ||
    n.action === "resume_replies" ||
    n.action === "status" ||
    n.action === "verify" ||
    n.action === "open"
  ) {
    let d =
      n.action === "read_page_data"
        ? "read page data"
        : n.action === "read_db"
          ? "read database"
          : n.action === "write_db"
            ? "write database"
            : n.action === "room_send"
              ? `room send ${LGe(ZSe(n).topic)}`
              : n.action === "resume_replies"
                ? "resume auto-replies"
                : n.action;
    if ((n.action === "status" || n.action === "verify") && n.url === void 0)
      return e(t, { children: d });
    let a = n.action === "read_db" ? yce(n) : void 0,
      c =
        a?.kind === "dir"
          ? ` \u2192 ${truncatePathMiddle(sweepAskCopy(a.dir) ?? "(unprintable path)", 1024)}`
          : a?.kind === "unresolvable"
            ? " \u2192 (unresolvable out_dir)"
            : "";
    if (n.action === "write_db" && m?.verbose === !0) {
      let f = typeof n.url === "string" ? parseArtifactUrl(n.url) : null,
        g = f !== null ? getShareEntry(f.slug) : void 0,
        p = shareAudienceParenthetical(g),
        { opLabel: T, docTarget: y } = gjn(n),
        { data: C, filePath: F } = b9(n),
        z =
          T === DB_BATCH_OP
            ? [Ion(w9(n)), kon(Pon(w9(n)))]
                .filter((B) => B !== "")
                .join(" \u2014 ")
            : F !== void 0
              ? `from ${truncatePathMiddle(sweepAskCopy(F) ?? "(unprintable path)", 1024)}`
              : E7(C),
        N = ownershipTag(g);
      return r(t, {
        children: [
          d,
          " (",
          T,
          ")",
          " ",
          e(t, { dimColor: !0, children: canonicalArtifactTargetFor(n.url, "(unrecognized address)") }),
          e(t, { dimColor: !0, children: ` \u2014 ${y}${p}` }),
          N !== "" && e(t, { color: "warning", children: N }),
          z !== "" && e(t, { dimColor: !0, children: ` \u2014 ${z}` }),
        ],
      });
    }
    if (n.action === "room_send" && m?.verbose === !0) {
      let f = typeof n.url === "string" ? parseArtifactUrl(n.url) : null,
        g = f !== null ? getShareEntry(f.slug) : void 0,
        p = shareAudienceParenthetical(g),
        T = E7(ZSe(n).data),
        y = ownershipTag(g);
      return r(t, {
        children: [
          d,
          " ",
          e(t, { dimColor: !0, children: canonicalArtifactTargetFor(n.url, "(unrecognized address)") }),
          p !== "" && e(t, { dimColor: !0, children: p }),
          y !== "" && e(t, { color: "warning", children: y }),
          T !== "" && e(t, { dimColor: !0, children: ` \u2014 ${T}` }),
        ],
      });
    }
    if (n.action === "resume_replies" && m?.verbose === !0) {
      let f = typeof n.url === "string" ? parseArtifactUrl(n.url) : null,
        g = f !== null ? getShareEntry(f.slug) : void 0;
      return r(t, {
        children: [
          d,
          " ",
          e(t, { dimColor: !0, children: canonicalArtifactTargetFor(n.url, "(unrecognized address)") }),
          e(t, { dimColor: !0, children: shareAudienceParenthetical(g) }),
        ],
      });
    }
    return r(t, {
      children: [
        d,
        " ",
        r(t, {
          dimColor: !0,
          children: [canonicalArtifactTargetFor(n.url, "(unrecognized address)"), c],
        }),
      ],
    });
  }
  if (
    n.action === "get_endpoints" ||
    n.action === "call_endpoint" ||
    n.action === "run_script"
  ) {
    let { verb: d, body: a } = O
      ? O.handlersToolUseLine(n, m?.verbose === !0)
      : { verb: String(n.action), body: "" };
    return r(t, {
      children: [
        d,
        " ",
        e(t, { dimColor: !0, children: canonicalArtifactTargetFor(n.url, "(unrecognized address)") }),
        a !== "" && e(t, { dimColor: !0, children: a }),
      ],
    });
  }
  if (n.action === "read") {
    let d = parseArtifactUrlInput(n.url),
      a = d !== null ? getShareEntry(d.slug) : void 0,
      c = m?.verbose === !0 ? ownershipTag(a) : "";
    return r(t, {
      children: [
        "read",
        " ",
        e(t, {
          dimColor: !0,
          children: d !== null ? artifactViewerUrlFor(d) : "(unrecognized address)",
        }),
        c !== "" && e(t, { color: "warning", children: c }),
      ],
    });
  }
  if (n.action === "upload_asset") {
    let d = typeof n.url === "string" ? parseArtifactUrl(n.url) : null,
      a = d !== null ? getShareEntry(d.slug) : void 0,
      c = m?.verbose === !0,
      f = c ? ownershipTag(a) : "",
      g = truncatePathMiddle(sweepAskCopy(n.file_path ?? "") ?? "(unprintable path)", 1024);
    return r(t, {
      children: [
        "upload ",
        g,
        e(t, {
          dimColor: !0,
          children: ` \u2192 ${canonicalArtifactTargetFor(n.url, "(unrecognized address)")}${c ? shareAudienceParenthetical(a) : ""}`,
        }),
        f !== "" && e(t, { color: "warning", children: f }),
      ],
    });
  }
  if (n.action === "copy_from") {
    let d = typeof n.url === "string" ? parseArtifactUrl(n.url) : null,
      a = d !== null ? getShareEntry(d.slug) : void 0,
      c = m?.verbose === !0,
      f = c ? ownershipTag(a) : "",
      g = n.asset_ids,
      p = Array.isArray(g) ? g.length : 0,
      T = n.from_url,
      y = typeof T === "string" ? parseArtifactUrl(T) : null,
      C = c ? pPe(y !== null ? getShareEntry(y.slug) : void 0, "assets") : "";
    return r(t, {
      children: [
        "copy ",
        p,
        " ",
        pluralize(p, "asset"),
        " from",
        " ",
        canonicalArtifactTargetFor(T, "(unrecognized address)"),
        C !== "" && e(t, { color: "warning", children: C }),
        e(t, {
          dimColor: !0,
          children: ` \u2192 ${canonicalArtifactTargetFor(n.url, "(unrecognized address)")}${c ? shareAudienceParenthetical(a) : ""}`,
        }),
        f !== "" && e(t, { color: "warning", children: f }),
      ],
    });
  }
  if (n.action === "list_files" || n.action === "read_file") {
    let d = typeof n.url === "string" ? parseArtifactUrl(n.url) : null,
      a = d !== null ? getShareEntry(d.slug) : void 0,
      c = m?.verbose === !0,
      f = c ? ownershipTag(a) : "",
      g = "list files",
      p = "";
    if (n.action === "read_file") {
      let { path: T } = JSe(n);
      g = `save file ${T !== void 0 ? truncatePathMiddle(sweepAskCopy(T) ?? "(unprintable path)", 256) : "(no path)"}`;
      let y = n[gO] != null,
        C = QSe(n, { outDirJudged: y });
      p = ` \u2192 ${"dest" in C ? truncatePathMiddle(sweepAskCopy(C.dest) ?? "(unprintable path)", 1024) : "(no destination)"}`;
    }
    return r(t, {
      children: [
        g,
        e(t, {
          dimColor: !0,
          children: ` of ${canonicalArtifactTargetFor(n.url, "(unrecognized address)")}${c ? shareAudienceParenthetical(a) : ""}${p}`,
        }),
        f !== "" && e(t, { color: "warning", children: f }),
      ],
    });
  }
  if (n.action === "pin" || n.action === "unpin") {
    let d = typeof n.url === "string" ? parseArtifactUrl(n.url) : null,
      a = n[M4],
      c = isRecord(a) ? a.title : void 0,
      f = Nee(
        (d !== null ? getShareEntry(d.slug)?.title : void 0) ||
          (typeof c === "string" ? c : ""),
      );
    return r(t, {
      children: [
        n.action,
        f ? ` "${f}"` : "",
        e(t, {
          dimColor: !0,
          children: ` \xB7 ${canonicalArtifactTargetFor(n.url, "(unrecognized address)")}`,
        }),
      ],
    });
  }
  if (n.action === "delete") {
    let d = typeof n.url === "string" ? parseArtifactUrl(n.url) : null,
      a = d !== null ? getShareEntry(d.slug) : void 0,
      c = m?.verbose === !0,
      f = c ? ownershipTag(a) : "",
      g = n[vut],
      p = isRecord(g) ? g.title : void 0,
      T = Nee(a?.title || (typeof p === "string" ? p : ""));
    return r(t, {
      children: [
        "delete",
        T ? ` "${T}"` : "",
        e(t, {
          dimColor: !0,
          children: ` \xB7 ${canonicalArtifactTargetFor(n.url, "(unrecognized address)")}${c ? shareAudienceParenthetical(a) : ""}`,
        }),
        f !== "" && e(t, { color: "warning", children: f }),
      ],
    });
  }
  if (
    n.action === "list_assets" ||
    n.action === "read_asset" ||
    n.action === "delete_asset"
  ) {
    let d = typeof n.url === "string" ? parseArtifactUrl(n.url) : null,
      a = d !== null ? getShareEntry(d.slug) : void 0,
      c = m?.verbose === !0,
      f = c ? ownershipTag(a) : "",
      { assetId: g } = Mee(n),
      p = g !== void 0 && ASSET_ID_RE.test(g) ? g : "(no id)",
      T = n.action === "read_asset" ? YSe(n) : void 0,
      y =
        n.action === "delete_asset"
          ? `delete asset ${p}`
          : n.action === "read_asset"
            ? `save asset ${p}`
            : "list assets";
    return r(t, {
      children: [
        y,
        e(t, {
          dimColor: !0,
          children: ` ${n.action === "delete_asset" ? "from" : "of"} ${canonicalArtifactTargetFor(n.url, "(unrecognized address)")}${c ? shareAudienceParenthetical(a) : ""}${T !== void 0 ? ` \u2192 ${truncatePathMiddle(sweepAskCopy(`${T}.*`) ?? "(unprintable path)", 1024)}` : ""}`,
        }),
        f !== "" && e(t, { color: "warning", children: f }),
      ],
    });
  }
  let { file_path: b, url: w } = n,
    i = m?.verbose === !0,
    l = i && isArtifactRoomFeatureEnabled() && kut(n) ? ROOM_CONSENT_CLAUSE.trimStart() : void 0,
    u = Xb(n);
  if (u !== void 0) {
    let d = canonicalArtifactTargetFor(u, "(unrecognized address)"),
      a = b !== void 0 ? sweepProvenanceMarker(sweepAskCopy(b) ?? "(unprintable path)") : void 0;
    return r(t, {
      children: [
        a !== void 0 ? `${a} ` : "",
        r(t, { dimColor: !0, children: ["\u2192 new Artifact from type ", d] }),
        l !== void 0 &&
          e(t, {
            dimColor: !0,
            children: `
${l}`,
          }),
      ],
    });
  }
  let h = i && w !== void 0 ? canonicalArtifactTargetFor(w, "(unrecognized address)") : void 0,
    v = sweepProvenanceMarker(sweepAskCopy(b ?? "") ?? "(unprintable path)");
  return r(t, {
    children: [
      v,
      h !== void 0 && r(t, { dimColor: !0, children: [" \u2192 ", h] }),
      l !== void 0 &&
        e(t, {
          dimColor: !0,
          children: `
${l}`,
        }),
    ],
  });
}
function S(s) {
  return (m, n) => renderToolUseMessage(lwe(s, m), n);
}
var renderCommentsToolUseMessage = S("comments"),
  renderDataToolUseMessage = S("data"),
  renderCheckToolUseMessage = S("check");
function renderToolUseProgressMessage(s) {
  let m = s.at(-1)?.data;
  if (!m || m.type !== "artifact_publish_retry" || m.resolved) return null;
  let n =
    m.status === 503
      ? "Publish service temporarily unavailable"
      : "Publish service busy";
  return e(ToolResultRow, {
    children: r(t, {
      dimColor: !0,
      children: [
        n,
        " \u2014 retrying (attempt ",
        m.attempt,
        " of ",
        m.maxAttempts,
        ")\u2026",
      ],
    }),
  });
}
function X(s) {
  let m = CNt(s);
  return (
    m === "handlers_doc" || m === "handler_result" || m === "script_result"
  );
}
function J(s) {
  return "preview" in s && CNt(s) === "preview";
}
function renderToolResultMessage(s, m, n) {
  if (J(s)) {
    let i = {
        ...s.preview,
        file: truncateToCodeUnits(s.preview.file, 4096),
        shots: s.preview.shots
          .slice(0, MAX_PREVIEW_SHOTS)
          .map((a) => ({ ...a, theme: truncateToCodeUnits(a.theme, 32) })),
        issues: s.preview.issues.slice(0, MAX_PREVIEW_ISSUES),
        widths: s.preview.widths.slice(0, MAX_PREVIEW_WIDTHS),
        themes: s.preview.themes.slice(0, 2).map((a) => truncateToCodeUnits(a, 32)),
      },
      l = countMatching(i.shots, (a) => a.error === void 0),
      u = i.issues.length + (i.issuesDropped ?? 0),
      h = (a, c) => {
        let f = truncateToCodeUnits(a, c),
          g = sweepAskCopy(f) ?? "";
        return f.length < a.length ? `${g}\u2026` : g;
      },
      v = n?.verbose === !0 ? i.issues : i.issues.slice(0, Y),
      d = i.issues.length - v.length + (i.issuesDropped ?? 0);
    return e(ToolResultRow, {
      children: r(o, {
        flexDirection: "column",
        children: [
          r(t, {
            dimColor: !0,
            children: [
              l === 0 ? "Could not preview " : "Previewed ",
              h(basename(i.file), 80),
              " \xB7 ",
              h(i.widths.join("/"), 24),
              " \xB7",
              " ",
              h(i.themes.join("+"), 24),
              " \xB7 ",
              u === 0
                ? i.renderError !== void 0
                  ? "browser did not start \u2014 static checks only"
                  : "no issues"
                : `${u}${i.issuesDropped === MAX_REPORTED_DROPPED_ISSUES ? "+" : ""} ${pluralize(u, "issue")}`,
              l < i.shots.length && i.renderError === void 0
                ? ` \xB7 ${l}/${i.shots.length} captured`
                : "",
            ],
          }),
          i.renderError !== void 0 &&
            e(o, {
              paddingLeft: 2,
              children: e(t, {
                color: "warning",
                children: h(i.renderError, 200),
              }),
            }),
          v.map((a, c) =>
            r(
              o,
              {
                paddingLeft: 2,
                flexDirection: "row",
                children: [
                  e(t, { dimColor: !0, children: "\xB7 " }),
                  e(t, { dimColor: !0, children: h(a.text, 200) }),
                ],
              },
              c,
            ),
          ),
          d > 0 &&
            e(o, {
              paddingLeft: 2,
              children: r(t, {
                dimColor: !0,
                children: [
                  "\xB7 \u2026 ",
                  d,
                  " more",
                  i.issues.length > v.length ? " (ctrl+o)" : "",
                ],
              }),
            }),
          n?.verbose === !0 &&
            i.shots.map((a, c) =>
              e(
                o,
                {
                  paddingLeft: 2,
                  children: r(t, {
                    dimColor: !0,
                    children: [
                      h(`${a.width} ${a.theme}`, 20),
                      ":",
                      " ",
                      a.error !== void 0
                        ? `not captured \u2014 ${h(a.error, 120)}`
                        : h(a.path ?? "(not saved)", 512),
                    ],
                  }),
                },
                `s${c}`,
              ),
            ),
        ],
      }),
    });
  }
  if ("read" in s)
    return e(ReceivedBytesStatus, {
      bytes: s.read.bytes,
      status: `${s.read.code} ${s.read.codeText}`,
    });
  if ("threads" in s) {
    let i = s.threads_dropped === !0,
      l = s.thread_filter !== void 0;
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children: l
          ? s.threads.some((u) => u.id === s.thread_filter)
            ? "read 1 comment thread (filtered)"
            : i
              ? "requested thread not among the readable threads"
              : "requested thread not in this result"
          : s.threads.length === 0
            ? i
              ? "comment threads could not be read"
              : "no comment threads yet"
            : `read ${s.threads.length} comment ${pluralize(s.threads.length, "thread")}${i ? " (some could not be read)" : ""}`,
      }),
    });
  }
  if ("replied" in s)
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children: s.replied
          ? "replied to comment thread"
          : s.summon_answered === !0
            ? "reply not posted (summon already answered)"
            : s.summon_foreign === !0
              ? "reply not posted (another user's summon or activation)"
              : s.already_answered === !0
                ? "reply not posted (thread already answered)"
                : "reply needs thread activation by the user",
      }),
    });
  if ("thread_resolved" in s)
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children: s.thread_resolved
          ? "resolved comment thread"
          : s.not_authorized === !0
            ? "not resolved (not the thread starter or a writer)"
            : s.summon_foreign === !0
              ? "not resolved (another user's activation)"
              : s.relayed_credential === !0
                ? "not resolved (unavailable from this session)"
                : "not resolved (thread not activated)",
      }),
    });
  if ("liveEdit" in s)
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children: P
          ? P.renderLiveEditResultText(s.liveEdit)
          : "live edit landed",
      }),
    });
  if ("sync" in s)
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children: P ? P.renderSyncResultText(s.sync) : "synced",
      }),
    });
  if ("versioned" in s) {
    let i = typeof s.versioned.url === "string" ? parseArtifactUrl(s.versioned.url) : null,
      l = i ? artifactViewerUrlFor(i) : void 0;
    return e(ToolResultRow, {
      children: r(t, {
        dimColor: !0,
        children: [
          "Versioned",
          " ",
          l !== void 0 ? e(R, { name: l, url: l }) : "(unrecognized address)",
        ],
      }),
    });
  }
  if ("db_read" in s) {
    let i = s.db_read,
      l = i.docs?.length ?? 0,
      u = i.saved,
      h =
        isRecord(u) &&
        typeof u.dir === "string" &&
        Array.isArray(u.files) &&
        Array.isArray(u.skipped)
          ? {
              dir: u.dir,
              fileCount: u.files.length,
              skippedCount: u.skipped.length,
            }
          : void 0,
      v =
        h !== void 0
          ? `saved ${h.fileCount} ${pluralize(h.fileCount, "document")} under ${truncatePathMiddle(sweepAskCopy(h.dir) ?? "(unprintable path)", 1024)}${h.skippedCount > 0 ? ` (${h.skippedCount} skipped)` : ""}`
          : void 0;
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children:
          i.found === !1
            ? "no such document"
            : (v ?? `read ${l} ${pluralize(l, "document")}`),
      }),
    });
  }
  if ("db_write" in s) {
    let i =
      "results" in s.db_write && Array.isArray(s.db_write.results)
        ? s.db_write.results.length
        : void 0;
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children: !s.db_write.committed
          ? "database write not committed"
          : i !== void 0
            ? `database batch ${"fallback" in s.db_write && s.db_write.fallback === "sequential" ? "written one at a time" : "committed"} (${i} ${pluralize(i, "write")})`
            : "database write committed",
      }),
    });
  }
  if (X(s))
    return j
      ? j.renderHandlersResult(s)
      : e(ToolResultRow, {
          children: e(t, {
            dimColor: !0,
            children: "This record is unreadable in this build.",
          }),
        });
  if ("room_send" in s) {
    let i = s.room_send,
      l =
        typeof i.peers === "number" &&
        Number.isSafeInteger(i.peers) &&
        i.peers >= 0
          ? `${i.peers} ${pluralize(i.peers, "peer")}`
          : "? peers",
      u = typeof i.reason === "string" ? sanitizeDisplayText(i.reason, { max: 32 }) : void 0;
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children:
          i.delivered === !0
            ? `sent to ${l}`
            : u === void 0
              ? "not sent"
              : `not sent (${u})`,
      }),
    });
  }
  if ("asset_upload" in s) {
    let i = s.asset_upload;
    return e(ToolResultRow, {
      children: r(t, {
        dimColor: !0,
        children: [
          "uploaded ",
          sweepAskCopy(i.file_name) ?? "asset",
          " (",
          formatFileSize(i.size_bytes),
          ") as ",
          sweepAskCopy(i.url) ?? "_blob/\u2026",
        ],
      }),
    });
  }
  if ("asset_list" in s) {
    let i = isRecord(s.asset_list) ? s.asset_list : {},
      l = Array.isArray(i.assets) ? i.assets.length : void 0;
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children:
          l === void 0
            ? "listed assets (record unreadable)"
            : l === 0
              ? "no assets listed"
              : `listed ${l} ${pluralize(l, "asset")}${typeof i.next === "string" && i.next !== "" ? " (more follow)" : ""}`,
      }),
    });
  }
  if ("file_list" in s) {
    let i = isRecord(s.file_list) ? s.file_list : {},
      l = Array.isArray(i.files) ? i.files.length : void 0;
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children:
          l === void 0
            ? "listed files (record unreadable)"
            : l === 0
              ? "no files listed"
              : `listed ${l} ${pluralize(l, "file")}`,
      }),
    });
  }
  if ("file_read" in s) {
    let i = isRecord(s.file_read) ? s.file_read : {};
    return e(ToolResultRow, {
      children: r(t, {
        dimColor: !0,
        children: [
          "saved",
          " ",
          truncatePathMiddle(
            (typeof i.saved_to === "string" ? sweepAskCopy(i.saved_to) : void 0) ??
              "file",
            1024,
          ),
          typeof i.size_bytes === "number" ? ` (${formatFileSize(i.size_bytes)})` : "",
        ],
      }),
    });
  }
  if ("asset_read" in s) {
    let i = s.asset_read;
    return e(ToolResultRow, {
      children: r(t, {
        dimColor: !0,
        children: [
          "saved ",
          truncatePathMiddle(sweepAskCopy(i.path) ?? "asset", 1024),
          " (",
          formatFileSize(i.size_bytes),
          ")",
        ],
      }),
    });
  }
  if ("asset_delete" in s)
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children: s.asset_delete.deleted ? "asset deleted" : "no such asset",
      }),
    });
  if ("asset_copy" in s) {
    let i = Array.isArray(s.asset_copy.assets) ? s.asset_copy.assets.length : 0;
    return e(ToolResultRow, {
      children: r(t, {
        dimColor: !0,
        children: ["copied ", i, " ", pluralize(i, "asset"), " into the artifact"],
      }),
    });
  }
  if ("artifact_delete" in s)
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children:
          s.artifact_delete.already_gone === !0
            ? "Artifact was already deleted"
            : "Artifact deleted",
      }),
    });
  if ("pin" in s)
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children: s.pin.pinned ? "pinned to the sidebar" : "unpinned",
      }),
    });
  if ("watch" in s)
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children: s.watch.watching
          ? s.watch.events?.includes("comment")
            ? "watching for republishes and to-Claude comments"
            : "watching for republishes"
          : s.watch.reason === "stop_latched"
            ? "not watching (stopped earlier in this session)"
            : `not watching (${sanitizeArtifactTitle(s.watch.reason ?? s.watch.outcome) ?? "unknown"})`,
      }),
    });
  if ("unwatch" in s)
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children: s.unwatch.was_watching
          ? "stopped watching"
          : "no watch to stop",
      }),
    });
  if ("watches" in s) {
    let { watching: i, stopped: l } = splitWatchRows(s.watches),
      u = s.arms ?? [],
      h = countMatching(
        u,
        (p) =>
          p.rail === void 0 &&
          (p.state === "arming" || p.state === "backing_off"),
      ),
      v = countMatching(u, (p) => p.rail !== void 0 && p.state === "arming"),
      d = countMatching(u, (p) => p.state === "failed" || p.state === "ended"),
      a = [
        h > 0 ? `${h} connecting` : "",
        v > 0 ? `${v} registering` : "",
        d > 0 ? `${d} ended or failed` : "",
      ]
        .filter((p) => p !== "")
        .join(", "),
      c = Array.isArray(s.rooms) ? s.rooms : [],
      f = countMatching(c, (p) => p?.connected !== !0),
      g =
        c.length > 0
          ? ` \xB7 ${c.length} artifact ${pluralize(c.length, "room")} joined${f > 0 ? ` (${f} reconnecting)` : ""}`
          : "";
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children: `${i} artifact ${pluralize(i, "watch", "watches")}${l > 0 ? ` \xB7 ${l} with auto-replies paused or stopped` : ""}${a !== "" ? `, ${a}` : ""}${g}`,
      }),
    });
  }
  if ("resume_replies" in s)
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children: s.resume_replies.resumed
          ? "auto-replies resumed"
          : s.resume_replies.reason === "stop_latched"
            ? "auto-replies not resumed (watch stopped earlier in this session)"
            : s.resume_replies.reason === "arm_in_flight"
              ? "auto-replies not resumed (an earlier connection is still winding down; the stop stays)"
              : `auto-replies not resumed (${sanitizeArtifactTitle(s.resume_replies.reason ?? s.resume_replies.outcome) ?? "unknown"})`,
      }),
    });
  if ("verify" in s)
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children:
          s.verify.state === "no_row"
            ? "no diagnostics readable: none captured in 24h, or not readable for this artifact"
            : s.verify.state !== "empty" && s.verify.state !== "entries"
              ? "unrecognized diagnostics result \u2014 verify again for a current read"
              : s.verify.entries.length === 0
                ? (s.verify.dropped ?? 0) > 0 || s.verify.truncated === !0
                  ? "diagnostics captured but none readable (size cap) \u2014 not a clean signal"
                  : "loaded clean: zero diagnostics captured"
                : `read ${s.verify.entries.length} diagnostic ${pluralize(s.verify.entries.length, "entry", "entries")}`,
      }),
    });
  if ("page_data" in s) {
    let i =
        s.page_data.derived === void 0
          ? ""
          : ` (${Object.entries(s.page_data.derived)
              .map(([u, h]) => `${u}: ${h}`)
              .join(", ")})`,
      l = ` \xB7 ${s.page_data.provenance.authorship}`;
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children: s.page_data.islandPresent
          ? `read ${s.page_data.entries.length} ${pluralize(s.page_data.entries.length, "entry", "entries")} [${s.page_data.schema}]${i}${l}`
          : `no ${s.page_data.schema} data island on the page${l}`,
      }),
    });
  }
  if ("artifact_types" in s)
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children:
          s.artifact_types.length === 0
            ? s.unavailable === !0
              ? "artifact types not available to this account"
              : "no artifact types listed"
            : `listed ${s.artifact_types.length} artifact ${pluralize(s.artifact_types.length, "type")}`,
      }),
    });
  if ("artifact_type" in s) {
    let i = parseArtifactUrl(s.artifact_type.type_url),
      l = i ? artifactViewerUrlFor(i) : void 0;
    return e(ToolResultRow, {
      children: r(t, {
        dimColor: !0,
        children: [
          "described artifact type",
          " ",
          l !== void 0 ? e(R, { name: l, url: l }) : "(unrecognized address)",
          ` (${s.artifact_type.files.length} ${pluralize(s.artifact_type.files.length, "file")}${typeof s.artifact_type.files_omitted === "number" && s.artifact_type.files_omitted > 0 ? ` +${s.artifact_type.files_omitted} not shown` : ""}${s.artifact_type.instructions_file ? ", ships instructions" : ""})`,
        ],
      }),
    });
  }
  if ("type_instances" in s) {
    let i = Array.isArray(s.type_instances?.instances)
      ? s.type_instances.instances.length
      : 0;
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children:
          i === 0
            ? s.type_instances?.unavailable === !0
              ? "instance listing not available to this account"
              : "no artifacts of this type listed"
            : `listed ${i} ${pluralize(i, "artifact")} of this type`,
      }),
    });
  }
  if ("artifacts" in s)
    return e(ToolResultRow, {
      children: e(t, {
        dimColor: !0,
        children:
          s.artifacts.length === 0
            ? s.scope === "shared"
              ? "no shared artifacts listed"
              : s.scope === "all"
                ? "no artifacts listed"
                : "no published artifacts yet"
            : `listed ${s.artifacts.length} ${pluralize(s.artifacts.length, s.scope !== void 0 ? "artifact" : "published artifact")}`,
      }),
    });
  if ("opened" in s) {
    let i = typeof s.url === "string" ? parseArtifactUrl(s.url) : null,
      l = i ? artifactViewerUrlFor(i) : void 0;
    return e(ToolResultRow, {
      children: r(t, {
        dimColor: !0,
        children: [
          "Opened",
          " ",
          l !== void 0
            ? e(R, {
                name: (typeof s.title === "string" ? formatArtifactTitle(s.title) : null) ?? l,
                url: l,
              })
            : "(unrecognized address)",
        ],
      }),
    });
  }
  if ("created_from_type" in s) {
    let i = (l) => {
      let u = typeof l === "string" ? parseArtifactUrl(l) : null,
        h = u ? artifactViewerUrlFor(u) : void 0;
      return h !== void 0
        ? e(R, { name: h, url: h })
        : "(unrecognized address)";
    };
    return e(ToolResultRow, {
      children: r(t, {
        dimColor: !0,
        children: [
          "Created ",
          i(s.url),
          " from Artifact type",
          " ",
          i(s.type?.url),
          "instructions" in s && typeof s.instructions === "string"
            ? ", read its instructions"
            : "",
        ],
      }),
    });
  }
  let b = replayedPublishesRemaining(s.publishesRemaining),
    w = replayedPublishesResetAt(s.publishesResetAt);
  return e(ToolResultRow, {
    children: r(o, {
      flexDirection: "column",
      children: [
        r(t, {
          dimColor: !0,
          children: [
            s.updated ? "Updated" : "Published",
            " ",
            e(R, { name: s.url, url: s.url }),
          ],
        }),
        b !== void 0 &&
          w !== void 0 &&
          e(t, { dimColor: !0, children: publishesRemainingLine(b, w) }),
      ],
    }),
  });
}
function renderToolUseErrorMessage(s, m) {
  if (typeof s === "string") {
    let n = stripRejectNotice(s);
    if (n.startsWith(STALE_GUARD_REJECTION_PREFIX) || n.startsWith(STALE_GUARD_REJECTION_PREFIX_LEGACY) || n.startsWith(CONFLICT_REJECTION_PREFIX)) {
      let b = m.verbose ? null : STALE_GUARD_CONTENT_HEADER_LINE_RE.exec(n),
        w = s;
      if (b !== null) {
        let i = s.slice(0, s.length - n.length),
          l = n.slice(0, b.index + b[0].length - 1);
        w = `${i}${l} (content shown to the model; elided here)`;
      }
      return e(ToolErrorMessage, { result: revealPageInvisibles(w), verbose: m.verbose, verbatim: !0 });
    }
  }
  return e(ToolErrorMessage, { result: s, verbose: m.verbose });
}
export {
  renderCheckToolUseMessage,
  renderCommentsToolUseMessage,
  renderDataToolUseMessage,
  renderToolResultMessage,
  renderToolUseErrorMessage,
  renderToolUseMessage,
  renderToolUseProgressMessage,
};

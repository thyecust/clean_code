// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { saveCurrentProjectConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Box, Text, Link } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useIsMountRecent, useMountTime, useSettleAfterChange, useRefusedInputWindow } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { sanitizeForDisplay } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { ConfirmPrompt } from "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import { de } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import { MAX_VISIBLE_LIST_ITEMS } from "../../01-核心基础设施/共享小工具-未细化/max-visible-list-items.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, C, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function fe() {
  logEvent("tengu_claude_md_includes_dialog_shown", {});
}
function he(Ue, Pe) {
  return r(
    Text,
    { dimColor: !0, wrap: "truncate-middle", children: ["  ", sanitizeForDisplay(Ue.path)] },
    Pe,
  );
}
function recordExternalIncludesDecision(f, h, a) {
  (saveCurrentProjectConfig(
    (b) => ({
      ...b,
      hasClaudeMdExternalIncludesApproved: f,
      hasClaudeMdExternalIncludesWarningShown: !0,
    }),
    a,
  ),
    logEvent(
      f
        ? "tengu_claude_md_external_includes_dialog_accepted"
        : "tengu_claude_md_external_includes_dialog_declined",
      { source: fromEnum(h) },
    ));
}
function ClaudeMdExternalIncludesDialog(Re) {
  let n = _(36),
    { onDone: P, isStandaloneDialog: te, externalIncludes: w } = Re,
    { storageV5: W } = useStorageV5Context(),
    re;
  if (n[0] === MEMO_CACHE_SENTINEL) ((re = []), (n[0] = re));
  else re = n[0];
  E(fe, re);
  let l = useIsMountRecent(),
    { refusedWithin: d, noteRefused: c, epoch: Se } = useRefusedInputWindow(),
    ne;
  if (n[1] !== l || n[2] !== c || n[3] !== d)
    ((ne = function y() {
      if (l() || d()) {
        return (c(), !0);
      }
      return !1;
    }),
      (n[1] = l),
      (n[2] = c),
      (n[3] = d),
      (n[4] = ne));
  else ne = n[4];
  let y = ne,
    K = useMountTime(),
    O = useSettleAfterChange(Se),
    se;
  if (n[5] !== w) ((se = w ?? []), (n[5] = w), (n[6] = se));
  else se = n[6];
  let m = se,
    ae;
  if (n[7] !== m)
    ((ae = m.length <= MAX_VISIBLE_LIST_ITEMS ? m : m.slice(0, MAX_VISIBLE_LIST_ITEMS - 2)), (n[7] = m), (n[8] = ae));
  else ae = n[8];
  let ie = ae,
    T = m.slice(ie.length),
    le = C(!1),
    ce;
  if (n[9] !== l || n[10] !== c || n[11] !== P || n[12] !== d || n[13] !== W)
    ((ce = (je) => {
      if (l() || d()) {
        c();
        return;
      }
      if (le.current) {
        return;
      }
      ((le.current = !0), recordExternalIncludesDecision(je === "yes", "dialog", W), P());
    }),
      (n[9] = l),
      (n[10] = c),
      (n[11] = P),
      (n[12] = d),
      (n[13] = W),
      (n[14] = ce));
  else ce = n[14];
  let s = ce,
    ue;
  if (n[15] !== s)
    ((ue = () => {
      s("no");
    }),
      (n[15] = s),
      (n[16] = ue));
  else ue = n[16];
  let V = ue;
  const Y = de,
    Be = "Allow external CLAUDE.md file imports?",
    Me = "warning",
    G = !te,
    q = !te;
  let A;
  if (n[17] === MEMO_CACHE_SENTINEL)
    ((A = e(Text, {
      children:
        "This project's CLAUDE.md imports files outside the current working directory. Never allow this for third-party repositories.",
    })),
      (n[17] = A));
  else A = n[17];
  const z =
    w &&
    w.length > 0 &&
    r(Box, {
      flexDirection: "column",
      children: [
        e(Text, { dimColor: !0, children: "External imports:" }),
        ie.map(he),
        T.length > 0
          ? r(N, {
              children: [
                r(Text, {
                  dimColor: !0,
                  wrap: "truncate",
                  children: [
                    "  ",
                    "\u2026 +",
                    T.length,
                    " ",
                    pluralize(T.length, "import"),
                    " not shown.",
                  ],
                }),
                r(Text, {
                  dimColor: !0,
                  wrap: "truncate",
                  children: [
                    "  ",
                    "Yes covers those too, plus any this project adds later.",
                  ],
                }),
              ],
            })
          : null,
      ],
    });
  let me;
  if (n[18] === MEMO_CACHE_SENTINEL)
    ((me = r(Text, {
      dimColor: !0,
      children: [
        "Important: Only use Claude Code with files you trust. Accessing untrusted files may pose security risks",
        " ",
        e(Link, { url: "https://code.claude.com/docs/en/security" }),
        " ",
      ],
    })),
      (n[18] = me));
  else me = n[18];
  let k, L;
  if (n[19] !== s)
    ((k = () => s("yes")),
      (L = () => s("no")),
      (n[19] = s),
      (n[20] = k),
      (n[21] = L));
  else ((k = n[20]), (L = n[21]));
  let R;
  if (
    n[22] !== O.remountKey ||
    n[23] !== y ||
    n[24] !== K ||
    n[25] !== k ||
    n[26] !== L
  )
    ((R = e(
      ConfirmPrompt,
      {
        refuseInput: y,
        openedAt: K,
        hideIndexes: !0,
        confirmLabel: "Yes, allow external imports",
        cancelLabel: "No, disable external imports",
        cancelFirst: !0,
        focus: "cancel",
        onConfirm: k,
        onCancel: L,
      },
      O.remountKey,
    )),
      (n[22] = O.remountKey),
      (n[23] = y),
      (n[24] = K),
      (n[25] = k),
      (n[26] = L),
      (n[27] = R));
  else R = n[27];
  let pe;
  if (
    n[28] !== Y ||
    n[29] !== V ||
    n[30] !== q ||
    n[31] !== A ||
    n[32] !== z ||
    n[33] !== R ||
    n[34] !== G
  )
    ((pe = r(Y, {
      title: Be,
      color: Me,
      onCancel: V,
      hideBorder: G,
      hideInputGuide: q,
      children: [A, z, me, R],
    })),
      (n[28] = Y),
      (n[29] = V),
      (n[30] = q),
      (n[31] = A),
      (n[32] = z),
      (n[33] = R),
      (n[34] = G),
      (n[35] = pe));
  else pe = n[35];
  return pe;
}
export { recordExternalIncludesDecision, ClaudeMdExternalIncludesDialog };

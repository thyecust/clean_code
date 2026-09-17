// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "./storage-v5-context.js";
import { Te } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { t } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ConfirmPrompt } from "./confirm-prompt.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { MEMO_CACHE_SENTINEL } from "./chunk-2c9tjhwd.js";
function ApproveApiKey(T) {
  let n = _(17),
    { customApiKeyTruncated: a, onDone: d } = T,
    { storageV5: m } = useStorageV5Context(),
    v;
  if (n[0] !== a || n[1] !== d || n[2] !== m)
    ((v = function o(E) {
      bb2: switch (E) {
        case "yes": {
          (Te(
            (A) => ({
              ...A,
              customApiKeyResponses: {
                ...A.customApiKeyResponses,
                approved: [...(A.customApiKeyResponses?.approved ?? []), a],
              },
            }),
            m,
          ),
            d(!0));
          break bb2;
        }
        case "no": {
          (Te(
            (R) => ({
              ...R,
              customApiKeyResponses: {
                ...R.customApiKeyResponses,
                rejected: [...(R.customApiKeyResponses?.rejected ?? []), a],
              },
            }),
            m,
          ),
            d(!1));
        }
      }
    }),
      (n[0] = a),
      (n[1] = d),
      (n[2] = m),
      (n[3] = v));
  else v = n[3];
  let o = v,
    f;
  if (n[4] !== o) ((f = () => o("no")), (n[4] = o), (n[5] = f));
  else f = n[5];
  let b;
  if (n[6] === MEMO_CACHE_SENTINEL)
    ((b = e(t, { bold: !0, children: "ANTHROPIC_API_KEY" })), (n[6] = b));
  else b = n[6];
  let l;
  if (n[7] !== a)
    ((l = r(t, { children: [b, r(t, { children: [": sk-ant-...", a] })] })),
      (n[7] = a),
      (n[8] = l));
  else l = n[8];
  let P;
  if (n[9] === MEMO_CACHE_SENTINEL)
    ((P = e(t, { children: "Do you want to use this API key?" })), (n[9] = P));
  else P = n[9];
  let I;
  if (n[10] === MEMO_CACHE_SENTINEL)
    ((I = r(t, {
      children: ["No (", e(t, { bold: !0, children: "recommended" }), ")"],
    })),
      (n[10] = I));
  else I = n[10];
  let y;
  if (n[11] !== o)
    ((y = e(ConfirmPrompt, {
      hideIndexes: !0,
      focus: "cancel",
      cancelLabel: I,
      onConfirm: () => o("yes"),
      onCancel: () => o("no"),
    })),
      (n[11] = o),
      (n[12] = y));
  else y = n[12];
  let K;
  if (n[13] !== f || n[14] !== l || n[15] !== y)
    ((K = r(de, {
      title: "Detected a custom API key in your environment",
      color: "warning",
      onCancel: f,
      children: [l, P, y],
    })),
      (n[13] = f),
      (n[14] = l),
      (n[15] = y),
      (n[16] = K));
  else K = n[16];
  return K;
}
export { ApproveApiKey };

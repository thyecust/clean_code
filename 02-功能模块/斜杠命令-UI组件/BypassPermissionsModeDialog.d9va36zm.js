// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 255 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { updateSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { o, t, ct, zb } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { Pr, $s } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { En } from "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function R() {
  i("tengu_bypass_permissions_mode_dialog_shown", {});
}
function BypassPermissionsModeDialog(T) {
  let s = _(8),
    { onAccept: d, storageV5: m } = T,
    b;
  if (s[0] === p) ((b = []), (s[0] = b));
  else b = s[0];
  E(R, b);
  let l = C(!1),
    h;
  if (s[1] !== d || s[2] !== m)
    ((h = function n(V) {
      if (l.current || $s()) {
        return;
      }
      bb10: switch (((l.current = !0), V)) {
        case "accept": {
          (i("tengu_bypass_permissions_mode_dialog_accept", {}),
            updateSettingsForSource(
              "userSettings",
              { skipDangerousModePermissionPrompt: !0 },
              void 0,
              m,
            ),
            d());
          break bb10;
        }
        case "decline": {
          Pr(1);
        }
      }
    }),
      (s[1] = d),
      (s[2] = m),
      (s[3] = h));
  else h = s[3];
  let n = h,
    k;
  if (s[4] === p)
    ((k = () => {
      ((l.current = !0), Pr(0));
    }),
      (s[4] = k));
  else k = s[4];
  let G = k,
    B;
  if (s[5] === p)
    ((B = r(o, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(t, {
          children: [
            "In Bypass Permissions mode, Claude Code will not ask for your approval before running potentially dangerous commands.",
            e(zb, {}),
            "This mode should only be used in a sandboxed container/VM that has restricted internet access and can easily be restored if damaged.",
          ],
        }),
        e(t, {
          children:
            "By proceeding, you accept all responsibility for actions taken while running in Bypass Permissions mode.",
        }),
        e(ct, { url: "https://code.claude.com/docs/en/security" }),
      ],
    })),
      (s[5] = B));
  else B = s[5];
  let x;
  if (s[6] !== n)
    ((x = r(de, {
      title: "WARNING: Claude Code running in Bypass Permissions mode",
      color: "error",
      onCancel: G,
      children: [
        B,
        e(En, {
          hideIndexes: !0,
          cancelFirst: !0,
          focus: "cancel",
          confirmLabel: "Yes, I accept",
          cancelLabel: "No, exit",
          onConfirm: () => n("accept"),
          onCancel: () => n("decline"),
        }),
      ],
    })),
      (s[6] = n),
      (s[7] = x));
  else x = s[7];
  return x;
}
export { BypassPermissionsModeDialog };

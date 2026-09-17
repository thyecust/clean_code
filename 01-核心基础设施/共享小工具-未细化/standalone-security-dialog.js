// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isRecent } from "./recent-window.js";
import { logError } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { J0 } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { getBaseRenderOptions } from "./base-render-options.js";
import { AppRoot } from "../../02-功能模块/后台任务-Shell管理/chunk-c7mzes79.js";
import { ManagedSettingsApprovalDialog } from "../设置-配置/managed-settings-approval-dialog.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
var showStandaloneSecurityDialog = (p, r, m) =>
  new Promise((i, s) => {
    let n = !1,
      o = null;
    function a() {
      return o !== null && !isRecent(o);
    }
    (async () => {
      let {
        rerender: t,
        unmount: l,
        waitUntilExit: g,
      } = await J0(
        e(
          AppRoot,
          {
            session: B(),
            children: e(ManagedSettingsApprovalDialog, {
              settings: p,
              baseline: m,
              reveal: "default",
              onAccept: () => {
                if (!a()) return !1;
                if (((n = !0), i("approved"), r)) t(null);
                else l();
              },
              onReject: () => {
                if (!a()) return !1;
                if (((n = !0), i("rejected"), r)) t(null);
                else l();
              },
            }),
          },
          "managed-settings-security",
        ),
        getBaseRenderOptions(!1),
      );
      if (((o = Date.now()), await g(), !n)) {
        let u = Error(
          "Managed-settings consent dialog exited without an answer",
        );
        (logError(u), s(u));
      }
    })().catch((t) => {
      (logError(t), s(t));
    });
  });
export { showStandaloneSecurityDialog };

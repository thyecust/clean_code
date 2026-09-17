// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ge } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logError as h } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { isRemoteToolForwardingSwitchOn as Iy, H4n } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
function registerToolHosts() {
  let t,
    o = !1,
    r = () => {
      if (Iy())
        ((o = !0),
          import("../../02-功能模块/Bridge-RemoteControl/createRemoteToolHostsRuntime.3xk8h04p.js")
            .then(({ createRemoteToolHostsRuntime: e }) => {
              t = e();
            })
            .catch((e) => {
              (h(ge(e)), (o = !1));
            }));
    };
  if (
    (H4n({
      get remote() {
        if (!o) r();
        return t;
      },
    }),
    Iy())
  )
    r();
}
export { registerToolHosts };

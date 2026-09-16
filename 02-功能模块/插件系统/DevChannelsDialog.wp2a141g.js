// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 257 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { Pr } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { En } from "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function E() {
  Pr(0);
}
function R(m) {
  return m.kind === "plugin"
    ? `plugin:${m.name}@${m.marketplace}`
    : `server:${m.name}`;
}
function k(I) {
  let a = _(13),
    { channels: h, onAccept: d } = I,
    v;
  if (a[0] !== d)
    ((v = function l(j) {
      bb2: switch (j) {
        case "accept": {
          d();
          break bb2;
        }
        case "exit": {
          Pr(1);
        }
      }
    }),
      (a[0] = d),
      (a[1] = v));
  else v = a[1];
  let l = v,
    B = E,
    x,
    y;
  if (a[2] === p)
    ((x = e(t, {
      children:
        "--dangerously-load-development-channels is for local channel development only. Do not use this option to run channels you have downloaded off the internet.",
    })),
      (y = e(t, {
        children: "Please use --channels to run a list of approved channels.",
      })),
      (a[2] = x),
      (a[3] = y));
  else ((x = a[2]), (y = a[3]));
  let i;
  if (a[4] !== h) ((i = h.map(R).join(", ")), (a[4] = h), (a[5] = i));
  else i = a[5];
  let c;
  if (a[6] !== i)
    ((c = r(o, {
      flexDirection: "column",
      gap: 1,
      children: [x, y, r(t, { dimColor: !0, children: ["Channels:", " ", i] })],
    })),
      (a[6] = i),
      (a[7] = c));
  else c = a[7];
  let s;
  if (a[8] !== l)
    ((s = e(En, {
      confirmLabel: "I am using this for local development",
      cancelLabel: "Exit",
      onConfirm: () => l("accept"),
      onCancel: () => l("exit"),
    })),
      (a[8] = l),
      (a[9] = s));
  else s = a[9];
  let b;
  if (a[10] !== c || a[11] !== s)
    ((b = r(de, {
      title: "WARNING: Loading development channels",
      color: "error",
      onCancel: B,
      children: [c, s],
    })),
      (a[10] = c),
      (a[11] = s),
      (a[12] = b));
  else b = a[12];
  return b;
}
export { k as DevChannelsDialog };

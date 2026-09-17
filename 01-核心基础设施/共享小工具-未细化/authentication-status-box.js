// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { EU } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { o, t, ct } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { TitledBorderBox } from "./titled-border-box.js";
import { ErrorMessage } from "./error-message.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "./chunk-2c9tjhwd.js";
F();
function N(f, D) {
  let b = f.match(A);
  if (!b) {
    return e(t, { dimColor: !0, children: f }, D);
  }
  let y = b[0];
  let L = b.index ?? 0;
  let H = f.slice(0, L);
  let J = f.slice(L + y.length);
  return r(
    t,
    { dimColor: !0, children: [H, e(ct, { url: y, children: y }), J] },
    D,
  );
}
var A = /https?:\/\/\S+/;
function AuthenticationStatusBox() {
  let i = _(10),
    R;
  if (i[0] === MEMO_CACHE_SENTINEL) ((R = EU.getInstance().getStatus()), (i[0] = R));
  else R = i[0];
  let [n, G] = d(R),
    C,
    I;
  if (i[1] === MEMO_CACHE_SENTINEL)
    ((C = () => EU.getInstance().subscribe(G)),
      (I = []),
      (i[1] = C),
      (i[2] = I));
  else ((C = i[1]), (I = i[2]));
  if ((E(C, I), !n.isAuthenticating && !n.error && n.output.length === 0)) {
    return null;
  }
  if (!n.isAuthenticating && !n.error) {
    return null;
  }
  let a;
  if (i[3] !== n.output)
    ((a =
      n.output.length > 0 &&
      e(o, { flexDirection: "column", children: n.output.slice(-5).map(N) })),
      (i[3] = n.output),
      (i[4] = a));
  else a = i[4];
  let l;
  if (i[5] !== n.error)
    ((l = n.error && e(ErrorMessage, { error: n.error })), (i[5] = n.error), (i[6] = l));
  else l = i[6];
  let B;
  if (i[7] !== a || i[8] !== l)
    ((B = e(o, {
      marginY: 1,
      children: r(TitledBorderBox, {
        color: "permission",
        title: "Authentication",
        children: [a, l],
      }),
    })),
      (i[7] = a),
      (i[8] = l),
      (i[9] = B));
  else B = i[9];
  return B;
}
export { AuthenticationStatusBox };

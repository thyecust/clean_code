// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { Qt, De, V, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
var i = Object.freeze({}),
  o = Qt(i);
function StorageV5ContextProvider(m) {
  let v = _(6),
    { storageV5: n, credentials: s, children: a } = m,
    f;
  if (v[0] !== s || v[1] !== n)
    ((f = n === void 0 && s === void 0 ? i : { storageV5: n, credentials: s }),
      (v[0] = s),
      (v[1] = n),
      (v[2] = f));
  else f = v[2];
  let c = f,
    u;
  if (v[3] !== a || v[4] !== c)
    ((u = e(o.Provider, { value: c, children: a })),
      (v[3] = a),
      (v[4] = c),
      (v[5] = u));
  else u = v[5];
  return u;
}
function useStorageV5Context() {
  return De(o);
}
export { StorageV5ContextProvider, useStorageV5Context };

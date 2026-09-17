// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { jsonStringify, jsonParse } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { validateBridgeId } from "../权限系统/chunk-ynkf3yy4.js";
import { s, T, v, it, fe, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var i = createLazyValue(() =>
    it({
      version: k(1),
      session_ingress_token: s().min(1),
      api_base_url: s(),
      sources: v(
        it({
          type: s(),
          git_info: it({ type: s(), repo: s(), ref: s().nullish() }).optional(),
        }),
      )
        .optional()
        .catch(void 0),
      auth: v(it({ type: s(), token: s() }))
        .optional()
        .catch(void 0),
      claude_code_args: fe(s(), s())
        .optional()
        .catch(void 0),
      mcp_config: it({
        content: s(),
        path: s().optional(),
        mode: T().optional(),
      })
        .optional()
        .catch(void 0),
      environment_variables: fe(s(), s())
        .optional()
        .catch(void 0),
    }),
  ),
  a = {
    secret_did_not_decode: "Work secret is not valid JSON",
    unsupported_version: "Unsupported work secret version",
    missing_session_ingress_token:
      "Invalid work secret: missing or empty session_ingress_token",
    missing_api_base_url: "Invalid work secret: missing api_base_url",
  };
class WorkSecretShapeError extends Error {
  verdict;
  constructor(e) {
    super(a[e]);
    this.verdict = e;
    this.name = "WorkSecretShapeError";
  }
}
function parseWorkSecret(e) {
  let r;
  try {
    r = jsonParse(Buffer.from(e, "base64url").toString("utf-8"));
  } catch {
    throw new WorkSecretShapeError("secret_did_not_decode");
  }
  let t = i().safeParse(r);
  if (t.success) return t.data;
  let n = new Set(t.error.issues.map((o) => o.path[0]));
  if (n.has(void 0) || n.has("version")) throw new WorkSecretShapeError("unsupported_version");
  if (n.has("session_ingress_token"))
    throw new WorkSecretShapeError("missing_session_ingress_token");
  throw new WorkSecretShapeError("missing_api_base_url");
}
function sessionIdsMatch(e, r) {
  if (e === r) return !0;
  let t = e.slice(e.lastIndexOf("_") + 1),
    n = r.slice(r.lastIndexOf("_") + 1);
  return t.length >= 4 && t === n;
}
function buildSessionApiUrl(e, r) {
  return (validateBridgeId(r, "sessionId"), `${e.replace(/\/+$/, "")}/v1/code/sessions/${r}`);
}
async function registerWorker(e, r) {
  let t = await at.post(
      `${e}/worker/register`,
      {},
      {
        headers: {
          Authorization: `Bearer ${r}`,
          "Content-Type": "application/json",
          "anthropic-version": "2023-06-01",
        },
        timeout: 1e4,
      },
    ),
    n = t.data?.worker_epoch,
    o = typeof n === "string" ? Number(n) : n;
  if (typeof o !== "number" || !Number.isFinite(o) || !Number.isSafeInteger(o))
    throw Error(
      `registerWorker: invalid worker_epoch in response: ${jsonStringify(t.data)}`,
    );
  return o;
}
export { WorkSecretShapeError, parseWorkSecret, sessionIdsMatch, buildSessionApiUrl, registerWorker };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getCurrentPlatform } from "../核心工具-路径与平台/platform-detection.js";
import {
  readdir,
  readlink,
  realpath,
  rmdir,
  unlink,
} from "fs/promises";
import { basename, dirname, join as u, sep as b } from "path";
function normalizePathForComparison(e) {
  return e
    .toLowerCase()
    .replace(/\u0131/g, "i")
    .replace(/\u017F/g, "s");
}
async function isPathSafeToRemove(e) {
  if (getCurrentPlatform() !== "windows") return !0;
  let t = await realpath(dirname(e)).catch(() => null);
  return !(await c(e, t == null ? null : normalizePathForComparison(u(t, basename(e)))));
}
async function c(e, t) {
  try {
    return (
      await unlink(e),
      n(`[worktree] unlinked reparse point before removal: ${e}`),
      !1
    );
  } catch {}
  try {
    return (
      await rmdir(e),
      n(
        `[worktree] removed reparse point or empty directory before removal: ${e}`,
      ),
      !1
    );
  } catch (r) {
    if (W(r)) return !1;
    if (A(r) !== "ENOTEMPTY") {
      let i =
        (await readlink(e).then(
          () => "link",
          (o) => (A(o) === "EINVAL" || W(o) ? "not-link" : "unknown"),
        )) !== "not-link" || t == null
          ? null
          : await realpath(e)
              .then((o) => normalizePathForComparison(o))
              .catch(() => null);
      if (i == null || (i !== t && !i.startsWith(t + b)))
        return (
          n(
            `[worktree] refusing to enumerate unremovable entry before removal: ${e}`,
            { level: "warn" },
          ),
          !0
        );
    }
  }
  let l = await readdir(e, { withFileTypes: !0 }).catch((r) => (W(r) ? [] : null));
  if (l == null)
    return (
      n(`[worktree] could not enumerate ${e} before removal; not certifying`, {
        level: "warn",
      }),
      !0
    );
  let a = !1;
  for (let r of l)
    if (r.isSymbolicLink() || r.isDirectory())
      a = (await c(u(e, r.name), t)) || a;
  return a;
}
export { normalizePathForComparison, isPathSafeToRemove };

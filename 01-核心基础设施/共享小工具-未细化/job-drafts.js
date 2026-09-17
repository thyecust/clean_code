// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "./chunk-h62vxw7j.js";
import { withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { writeFileAtomic, writeFileAtomicSync } from "../安全文件系统(FS加固)/atomic-file-write.js";
import { createLazyValue } from "./lazy-value.js";
import { STORAGE_KEYS } from "../../02-功能模块/Teammates团队/storage-keys.js";
import { jsonStringify, jsonParse } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { jobDraftStore, readJobDraftText, getJobsDir } from "../../02-功能模块/后台任务-Shell管理/chunk-7wsy8vxb.js";
import { readBoundedFile } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { s, T, v, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { createHash } from "crypto";
import { mkdir, readdir, rm as w, unlink } from "fs/promises";
import { join as p } from "path";
var l = 86400000,
  d = 8388608;
function f(t) {
  return createHash("sha256").update(t).digest("hex").slice(0, 8);
}
function n(t) {
  return p(getJobsDir(), `.draft-${f(t)}`);
}
function u(t) {
  return jsonStringify({ ...t, ts: Date.now() });
}
async function saveJobDraft(t, r, e) {
  await writeJobDraft(t, r, e);
}
async function writeJobDraft(t, r, e) {
  if (isHoverRestEnabled() && e)
    return (
      (
        await e
          .write(STORAGE_KEYS.jobDraft(f(t)), u(r), {
            publishDiscipline: "atomic",
            mode: 438 & ~process.umask(),
          })
          .catch(() => {
            return;
          })
      )?.ok === !0
    );
  try {
    return (await mkdir(getJobsDir(), { recursive: !0 }), await writeFileAtomic(n(t), u(r)), !0);
  } catch {
    return !1;
  }
}
function writeJobDraftSync(t, r) {
  try {
    writeFileAtomicSync(n(t), u(r));
  } catch {}
}
async function deleteJobDraft(t, r) {
  if (r) {
    await r.delete(STORAGE_KEYS.jobDraft(f(t))).catch(() => {});
    return;
  }
  await unlink(n(t)).catch(() => {});
}
var g = createLazyValue(() => c({ q: s(), collapsed: v(s()).optional(), ts: T() }));
async function readJobDraft(t, r) {
  let e = r ? await P(r, t) : await readBoundedFile(n(t), d);
  if (e === null) return;
  let a;
  try {
    a = g().safeParse(jsonParse(e));
  } catch {
    return;
  }
  if (!a.success) return;
  let { q: i, collapsed: o, ts: y } = a.data;
  if (Date.now() - y > l) return;
  return { q: i, collapsed: o ?? [] };
}
async function P(t, r) {
  return readJobDraftText(t, STORAGE_KEYS.jobDraft(f(r)), { cap: d, screens: x(), screenKey: n(r) });
}
function x() {
  return jobDraftStore.of(B().host).drafts;
}
async function sweepStaleJobDrafts() {
  return withFeatureTelemetry("job_sweep_drafts", async () => {
    let t;
    try {
      t = await readdir(getJobsDir());
    } catch {
      return;
    }
    let r = Date.now();
    await Promise.all(
      t
        .filter((e) => e.startsWith(".draft-"))
        .map(async (e) => {
          let a = p(getJobsDir(), e),
            i = await readBoundedFile(a, d);
          if (i !== null)
            try {
              let o = g().safeParse(jsonParse(i));
              if (o.success && r - o.data.ts <= l) return;
            } catch {}
          await w(a, { recursive: !0, force: !0 }).catch(() => {});
        }),
    );
  });
}
export { saveJobDraft, writeJobDraft, writeJobDraftSync, deleteJobDraft, readJobDraft, sweepStaleJobDrafts };

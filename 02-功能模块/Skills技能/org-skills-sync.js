// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ps } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { writeDiagnosticsEvent } from "../../01-核心基础设施/核心工具-日志与脱敏/diagnostics-log.js";
import { getEnvEntrypoint } from "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import { httpClient } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isValidPluginId } from "../插件系统/plugin-system-core.js";
import { MAX_PLUGIN_ARCHIVE_BYTES, describeListFailure, describeSyncError, parseServerErrorType } from "../插件系统/chunk-ajtn749s.js";
import { writeFile } from "fs/promises";
function a(t) {
  return {
    skillId: t.id,
    name: t.name,
    description: t.description ?? "",
    source: t.source ?? "custom",
    updatedAt: t.updated_at ?? null,
    ...(typeof t.backing_plugin_id === "string" &&
      isValidPluginId(t.backing_plugin_id) && { backingPluginId: t.backing_plugin_id }),
  };
}
function d(t) {
  return t.enabled !== !1;
}
var g = 30000,
  k = 300000,
  m = MAX_PLUGIN_ARCHIVE_BYTES,
  S = 16777216,
  c =
    "/api/oauth/organizations/:orgUUID/skills/list-skills?include_wiggle_skills=true";
async function fetchOrgSkills(t = {}) {
  let r = getEnvEntrypoint(),
    s = r ? `${c}&entrypoint=${encodeURIComponent(r)}` : c;
  try {
    let e = await httpClient.get(s, {
      auth: "teleport-org",
      isBackground: t.isBackground,
      timeout: g,
      maxContentLength: S,
      credentials: t.credentials,
    });
    if (!e.ok || !Array.isArray(e.data?.skills)) return describeListFailure("skills", e);
    return { success: !0, skills: e.data.skills.filter(d).map(a) };
  } catch (e) {
    return describeSyncError(e);
  }
}
async function downloadSkillArchive(t, r, s, e = {}) {
  let l = getEnvEntrypoint(),
    o = [];
  if (l) o.push(`entrypoint=${encodeURIComponent(l)}`);
  if (s) o.push(`version=${encodeURIComponent(s)}`);
  let u = o.length > 0 ? `?${o.join("&")}` : "";
  try {
    let i = await httpClient.get(
      `/api/oauth/organizations/:orgUUID/skills/${encodeURIComponent(t)}/download${u}`,
      {
        auth: "teleport-org",
        isBackground: e.isBackground,
        timeout: k,
        responseType: "arraybuffer",
        maxContentLength: m,
        credentials: e.credentials,
      },
    );
    if (!i.ok || !i.data)
      return (
        writeDiagnosticsEvent("warn", "skills_sync_download_not_ok", {
          reason: i.ok ? "empty_body" : i.reason,
        }),
        !1
      );
    let n = Buffer.from(i.data);
    if (n.length < 2 || n[0] !== 80 || n[1] !== 75)
      return (
        writeDiagnosticsEvent("warn", "skills_sync_download_not_zip", {
          serverError: parseServerErrorType(n),
          bodyLen: n.length,
        }),
        !1
      );
    return (await writeFile(r, n), !0);
  } catch (i) {
    let { kind: n } = Ps(i);
    return (writeDiagnosticsEvent("warn", "skills_sync_download_exception", { kind: n }), !1);
  }
}
export { fetchOrgSkills, downloadSkillArchive };

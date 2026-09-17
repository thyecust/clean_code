// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ps } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { writeDiagnosticsEvent } from "./diagnostics-log.js";
import { Vd } from "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import { ht } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Voe } from "../../02-功能模块/插件系统/chunk-7s6mt1vg.js";
import { iJ, bGt, wGt, gwt } from "../../02-功能模块/插件系统/chunk-ajtn749s.js";
import { writeFile } from "fs/promises";
function a(t) {
  return {
    skillId: t.id,
    name: t.name,
    description: t.description ?? "",
    source: t.source ?? "custom",
    updatedAt: t.updated_at ?? null,
    ...(typeof t.backing_plugin_id === "string" &&
      Voe(t.backing_plugin_id) && { backingPluginId: t.backing_plugin_id }),
  };
}
function d(t) {
  return t.enabled !== !1;
}
var g = 30000,
  k = 300000,
  m = iJ,
  S = 16777216,
  c =
    "/api/oauth/organizations/:orgUUID/skills/list-skills?include_wiggle_skills=true";
async function i4e(t = {}) {
  let r = Vd(),
    s = r ? `${c}&entrypoint=${encodeURIComponent(r)}` : c;
  try {
    let e = await ht.get(s, {
      auth: "teleport-org",
      isBackground: t.isBackground,
      timeout: g,
      maxContentLength: S,
      credentials: t.credentials,
    });
    if (!e.ok || !Array.isArray(e.data?.skills)) return bGt("skills", e);
    return { success: !0, skills: e.data.skills.filter(d).map(a) };
  } catch (e) {
    return wGt(e);
  }
}
async function bGn(t, r, s, e = {}) {
  let l = Vd(),
    o = [];
  if (l) o.push(`entrypoint=${encodeURIComponent(l)}`);
  if (s) o.push(`version=${encodeURIComponent(s)}`);
  let u = o.length > 0 ? `?${o.join("&")}` : "";
  try {
    let i = await ht.get(
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
          serverError: gwt(n),
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
export { i4e, bGn };

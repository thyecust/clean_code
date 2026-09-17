// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ze, mp, Hz } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { zn, Dr, vS, Xo } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { SandboxManager, an, recordSessionAlias, executeDirectoryAddedHooks, persistHookOutput, nR, ET } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Ro, ae, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { x } from "../核心工具-字符串与文本/chunk-1wezmyx2.js";
import { ie } from "../ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { Nr } from "./设置-配置.aqbb35ee.js";
import { Oc, DG, pathInAllowedWorkingPath, pathInWorkingPath } from "../../02-功能模块/Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { isCustomizationDisabled } from "../../02-功能模块/状态栏-主题/chunk-dqyc6kge.js";
import { isRestrictedToPluginOnly } from "../../02-功能模块/Skills技能/chunk-sapykxw7.js";
import { getToolPermissionContext } from "../../02-功能模块/权限系统/chunk-fjrcf22x.js";
import { appendRespawnFlag } from "../../02-功能模块/后台任务-Shell管理/chunk-7wsy8vxb.js";
import { reloadSkills } from "../共享小工具-未细化/reload-skills.js";
import { countMatching } from "../共享小工具-未细化/chunk-d16fhdtx.js";
import { randomUUID } from "crypto";
import { resolve } from "path";
function u(e, o) {
  let r = mp();
  if (r.some((m) => zn(resolve(m)) === o)) return !1;
  return (Hz([...r, o]), nR(e), ET(e, "directory_added"), reloadSkills(), !0);
}
async function addWorkingDirectory(e, o, r) {
  let s = {
    type: "addDirectories",
    directories: [o],
    destination: r ? "localSettings" : "session",
  };
  (e.setToolPermissionContext((t) => Oc(t, s)),
    u(e.session, o),
    SandboxManager.refreshConfig(),
    e.storageV5 ? recordSessionAlias(o, e.storageV5) : recordSessionAlias(o),
    appendRespawnFlag("--add-dir", o, e.storageV5));
  let d;
  if (r)
    try {
      (await DG(s, e.storageV5),
        (d = `Added ${ie.bold(o)} as a working directory and saved to local settings`));
    } catch (t) {
      d = `Added ${ie.bold(o)} as a working directory. Failed to save to local settings: ${t instanceof Error ? t.message : "Unknown error"}`;
    }
  else d = `Added ${ie.bold(o)} as a working directory for this session`;
  let g = randomUUID();
  return (
    executeDirectoryAddedHooks(e.session, o, "slash_command", {
      storageV5: e.storageV5,
      credentials: e.credentials,
    })
      .then(async ({ results: t, systemMessages: l }) => {
        for (let i of t)
          if (!i.succeeded && i.output)
            n(`DirectoryAdded hook failed: ${i.output}`, { level: "error" });
        let a = countMatching(t, (i) => !i.succeeded),
          c = [
            ...(await Promise.all(
              l.map((i, f) =>
                persistHookOutput(i, `add-dir-${g}-${f}`, "systemMessage", {
                  storageV5: e.storageV5,
                }).then((p) => `DirectoryAdded hook: ${p}`),
              ),
            )),
            ...(a > 0
              ? [
                  `${a} DirectoryAdded ${x(a, "hook")} failed; output is in the debug log, not shown here`,
                ]
              : []),
          ];
        if (c.length > 0)
          e.messageQueue.enqueuePendingNotification({
            value: c.join(`
`),
            mode: "task-notification",
            skipAttachments: !0,
            agentId: ze(),
            isMeta: !0,
          });
      })
      .catch((t) => {
        e.messageQueue.enqueuePendingNotification({
          value: `DirectoryAdded hook execution failed: ${t instanceof Error ? t.message : String(t)}`,
          mode: "task-notification",
          skipAttachments: !0,
          agentId: ze(),
          isMeta: !0,
        });
      }),
    d
  );
}
function explainAlreadyAccessibleDirectory(e, o) {
  let r = getToolPermissionContext(e);
  if (o.isExactMatch || !o.isOriginalCwd) return null;
  let m = ae(),
    { resolvedPath: s, isCanonical: d } = Ro(m, o.absolutePath),
    { resolvedPath: g, isCanonical: t } = Ro(m, o.workingDir),
    l = ie.bold(an(o.directoryPath));
  if (!d || !t) {
    if ([o.absolutePath, o.workingDir].some((i) => Xo(i) || Dr(i) || vS(i)))
      return null;
    return `${l} couldn't be resolved to a real location, so its skills, commands, and agents weren't loaded. Check that it is a directory inside the working directory and try again.`;
  }
  if (
    !pathInAllowedWorkingPath(o.absolutePath, { ...r, additionalWorkingDirectories: new Map() }) ||
    !pathInWorkingPath(s, g, { caseFold: !1, skipPrivateAlias: !0, uncShapeParity: !0 })
  ) {
    let i = an(s);
    return s === o.absolutePath
      ? `${l} leads outside the working directory, so its skills, commands, and agents weren't loaded. Add that location with /add-dir to grant access to it.`
      : `${l} leads outside the working directory through a link (it resolves to ${ie.bold(i)}), so its skills, commands, and agents weren't loaded. Run /add-dir ${i} to grant access to it.`;
  }
  if (s === g) return null;
  let a = `${l} is inside the current working directory ${ie.bold(an(o.workingDir))}`;
  if (
    isCustomizationDisabled("skills", { explicitlyRequested: !0 }) ||
    !Nr("projectSettings") ||
    isRestrictedToPluginOnly("skills")
  )
    return `${a}; skills, commands, and agents from additional directories are disabled in this session, so nothing was loaded.`;
  let c = u(e.session, o.absolutePath);
  if (c) SandboxManager.refreshConfig();
  return c
    ? `${a}; loading its skills, commands, and agents for this session.`
    : `${a}; its skills, commands, and agents are already included for this session.`;
}
export { addWorkingDirectory, explainAlreadyAccessibleDirectory };

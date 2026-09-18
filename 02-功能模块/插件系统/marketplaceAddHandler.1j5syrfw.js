// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 214 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { SB } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { logEvent, logEventAsync } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { lit as S, fromEnum, fromEnumOpt } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad, logFeatureOkAsync, logFeatureBadAsync, logFeatureSadAsync } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { dt, ge, l, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { escapeInvisibleChars } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { getSettings_DEPRECATED } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { sanitizeForDisplay, sanitizeMultilineForDisplay, getPluginDisplayName } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { formatPathWithTilde } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { PluginSourceError, isClaudeAiPluginSyncEnabled } from "./chunk-ajtn749s.js";
import { areLocalPluginDirsAllowedByPolicy, localPluginDirsBlockedMessage, marketplacesRefusedByPolicyClause } from "./plugin-source-policy.js";
import { isValidCliNameToken, buildCliCommand, formatPluginError, formatPluginWarning } from "./plugin-system-core.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { getGitUserEmail, getGitUserName, getMainLoopModel, hashForTelemetry } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import {
  getPolicyPluginNames,
  gracefulShutdown,
  discoverPluginMcpServers,
  parseMarketplaceSource,
  reloadPluginDirsFromDisk,
  listClaudeAiMarketplaces,
  filterUnconfiguredMarketplaces,
  matchMarketplaceByName,
  formatMarketplaceRowLabel,
  formatBrowseOnlyMarketplace,
  formatMarketplaceScopeLabel,
  formatMarketplaceSource,
  formatCatalogStatusMessage,
  loadClaudeAiMarketplace,
  readClaudeAiMarketplaceRegistry,
  isClaudeAiMarketplaceSource,
  formatClaudeAiMarketplaceLabel,
  ClaudeAiMarketplaceError,
  addClaudeAiMarketplace,
  buildPluginTelemetryFieldsFromId,
  formatDependencyCountSuffix,
  refreshPluginState,
  formatPluginId as c$,
  loadMarketplaces,
  getMarketplaceUpdateStatusIcon,
  formatMarketplaceRefreshFailure,
  declareMarketplaceInSettings,
  getKnownMarketplaces,
  getKnownMarketplacesOrEmpty,
  addMarketplace,
  removeMarketplace,
  refreshAllMarketplaces,
  refreshMarketplace,
  getInstalledPluginsViaStorage,
  isPluginInstalledInCurrentScope,
  displaySkillsDirPath,
  loadAllPlugins,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { logPluginInstallRefreshOutcome, INSTALLABLE_SCOPES, ALL_PLUGIN_SCOPES, enablePlugin } from "./chunk-q8w2zntw.js";
import {
  isErrorForPlugin,
  isWarningForPlugin,
  isDiagnosticForPlugin,
  fetchPluginInstallCounts,
  summarizeValidationResults,
  sanitizeDiagnosticText,
  validatePluginPath,
  resolvePluginManifestAndContents,
  buildPluginTagPlan,
  createPluginVersionTag,
  buildVersionTagMessage,
} from "./chunk-akd9b588.js";
import { RenderOnceAndExit, renderAndWaitForExit } from "../../01-核心基础设施/UI组件-TUI/one-shot-render.js";
import { cliError, writeStdoutAndDrain, flushAnalyticsBeforeExit, exitAfterAnalyticsFlush, cliErrorAfterAnalyticsFlush } from "../../01-核心基础设施/遥测-OpenTelemetry/chunk-4f55jpqh.js";
import {
  PluginOperationFailedError,
  handlePluginCommandError,
  confirmPluginEntryDisclosure,
  reviewPluginCommandSource,
  runPluginInstallCommand,
  runPluginUninstallCommand,
  runPluginPruneCommand,
  runPluginDisableCommand,
  runPluginDisableAllCommand,
  runPluginUpdateCommand,
  PLUGIN_SCAFFOLD_COMPONENTS,
  validatePluginName,
  buildPluginScaffoldFiles,
  writePluginScaffoldFiles,
  ensureBuiltinPluginsRegistered,
} from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { resolveMissingDependencies } from "./plugin-dependency-resolution.js";
import { Dn, kn, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import {
  INLINE_PLUGIN_SOURCE,
  SKILLS_DIR_PLUGIN_SOURCE,
  SYNCED_PLUGIN_SOURCE,
  BUILTIN_PLUGIN_SOURCE,
  isNonMarketplacePluginSource,
  getNonMarketplacePluginSource,
  splitPluginId,
  parsePluginId,
  formatPluginId,
  getPluginMarketplace,
  isEqualIgnoringCase,
  normalizeLookupKey,
  isOfficialMarketplace,
  getSettingsSourceForScope,
} from "./chunk-33bdfgmx.js";
F();
import { join, relative, resolve } from "path";
async function ee(a, o, s) {
  if (o instanceof PluginSourceError) await logFeatureSadAsync(a, "command_source_refused");
  else await logFeatureBadAsync(a, s);
  await flushAnalyticsBeforeExit();
}
function Le(a, o, s, d = 0) {
  let c = a - o.length - s.length,
    p = [];
  if (o.length > 0) p.push(marketplacesRefusedByPolicyClause(o.length, o));
  if (s.length > 0) p.push(formatMarketplaceRefreshFailure(s.length, s));
  if (d > 0)
    p.push(
      `${d} ${pluralize(d, "marketplace")} skipped (nothing to refresh: declared in settings, managed, or not allowed)`,
    );
  return { messages: p, summary: Be(c, o.length, s.length) };
}
function Be(a, o, s) {
  let d = getMarketplaceUpdateStatusIcon({ failedCount: s, updatedCount: a, policyRefusedCount: o }),
    c =
      s > 0
        ? a > 0
          ? `Updated ${a} ${pluralize(a, "marketplace")}, but not all`
          : "No marketplaces were updated"
        : a > 0
          ? `Successfully updated ${a} ${pluralize(a, "marketplace")}`
          : o > 0
            ? "No marketplaces were updated"
            : "No marketplaces needed updating";
  return d === null ? c : `${d} ${c}`;
}
function Z(a, o) {
  if (a instanceof PluginSourceError)
    return (logForDebugging(`${o} refused: ${a.message}`), cliError(sanitizeMultilineForDisplay(a.message)));
  (logForDebugging(`Failed to ${o}: ${l(a)}`, { level: "error" }),
    cliError(sanitizeMultilineForDisplay(`${figures.cross} Failed to ${o}: ${l(a)}`)));
}
function de(a) {
  let o = [];
  if (a.errors.length > 0)
    (o.push(
      `${figures.cross} Found ${a.errors.length} ${pluralize(a.errors.length, "error")}:`,
      "",
    ),
      a.errors.forEach((s) => {
        o.push(`  ${figures.pointer} ${s.path}: ${s.message}`);
      }),
      o.push(""));
  if (a.warnings.length > 0)
    (o.push(
      `${figures.warning} Found ${a.warnings.length} ${pluralize(a.warnings.length, "warning")}:`,
      "",
    ),
      a.warnings.forEach((s) => {
        o.push(`  ${figures.pointer} ${s.path}: ${s.message}`);
      }),
      o.push(""));
  if (a.notes !== void 0)
    (a.notes.forEach((s) => {
      o.push(`  ${figures.pointer} ${s}`);
    }),
      o.push(""));
  return o;
}
async function pluginValidateHandler(a, o, s) {
  if (s.cowork) SB(!0);
  let d;
  try {
    d = await resolvePluginManifestAndContents(o);
  } catch (C) {
    if (Rt(C))
      logForDebugging(`Plugin validation failed for ${o}: ${l(C)}`, { level: "error" });
    else logError(C);
    return (
      console.error(
        `${figures.cross} Unexpected error during validation: ${sanitizeDiagnosticText(l(C), 200)}`,
      ),
      await logFeatureBadAsync("cli_plugin_validate", "cli_plugin_validate_exception"),
      exitAfterAnalyticsFlush(2)
    );
  }
  let { manifest: c, contents: p } = d,
    { allSuccess: k, noErrors: w, hasWarnings: v } = summarizeValidationResults(c ? [c, ...p] : p, s),
    P = () =>
      k
        ? logFeatureOkAsync("cli_plugin_validate")
        : logFeatureSadAsync("cli_plugin_validate", "cli_plugin_validate_failed");
  if (s.json)
    return (
      await writeStdoutAndDrain(
        ne(je(d, { success: k, strict: s.strict === !0 })) +
          `
`,
      ),
      await P(),
      exitAfterAnalyticsFlush(k ? 0 : 1)
    );
  let R = c
    ? [`Validating ${c.fileType} manifest: ${c.filePath}`, "", ...de(c)]
    : [`Validating components in: ${d.resolvedPath}`, ""];
  for (let C of p)
    (R.push(`Validating ${C.fileType}: ${C.filePath}`, ""), R.push(...de(C)));
  if (k)
    R.push(
      v
        ? `${figures.tick} Validation passed with warnings`
        : `${figures.tick} Validation passed`,
    );
  else if (w && v)
    R.push(`${figures.cross} Validation failed (--strict treats warnings as errors)`);
  else R.push(`${figures.cross} Validation failed`);
  return (
    await renderAndWaitForExit(await a(), e(Text, { children: X(R) })),
    await P(),
    exitAfterAnalyticsFlush(k ? 0 : 1)
  );
}
async function pluginTagHandler(a, o, s) {
  let d = await buildPluginTagPlan(o ?? ".", { force: s.force }),
    c = [];
  for (let C of d.warnings) c.push(`${figures.warning} ${C}`);
  if (!d.ok) {
    (logFeatureBad("cli_plugin_tag", "cli_plugin_tag_prepare_failed"),
      c.push(`${figures.cross} ${d.error}`),
      z(a, c, 1));
    return;
  }
  let { plan: p } = d;
  if (
    (c.push(
      `Plugin:  ${p.pluginName}`,
      `Version: ${p.version} (from ${p.versionFrom})`,
    ),
    p.marketplace)
  )
    c.push(
      `Marketplace entry: plugins[${p.marketplace.entryIndex}] in ${p.marketplace.path}` +
        (p.marketplace.entryVersion
          ? ` (version: ${p.marketplace.entryVersion})`
          : ""),
    );
  c.push(`Tag:     ${p.tag}`, "");
  let k = s.remote ?? "origin",
    w = s.force ?? !1,
    v = buildVersionTagMessage(p, s.message),
    P = `git -C ${p.gitRoot} push ${w ? "--force " : ""}${k} refs/tags/${p.tag}`;
  if (s.dryRun) {
    (logFeatureOk("cli_plugin_tag"),
      c.push(
        `${figures.tick} Dry run \u2014 would create tag ${p.tag} at HEAD in ${p.gitRoot}`,
        `  git -C ${p.gitRoot} tag ${w ? "-f " : ""}-a ${p.tag} -m ${jsonStringify(v)}`,
        `  ${P}`,
      ),
      z(a, c, 0));
    return;
  }
  let R = await createPluginVersionTag(p, {
    push: s.push ?? !1,
    force: w,
    message: s.message,
    remote: k,
  });
  if (!R.ok) {
    (logFeatureBad("cli_plugin_tag", "cli_plugin_tag_create_failed"),
      c.push(`${figures.cross} ${R.error}`),
      z(a, c, 1));
    return;
  }
  if ((logFeatureOk("cli_plugin_tag"), c.push(`${figures.tick} Created tag ${p.tag}`), R.pushed))
    c.push(`${figures.tick} Pushed to ${k}`);
  else c.push(`  Push with: ${P}`);
  z(a, c, 0);
}
function z(a, o, s) {
  (a.render(e(RenderOnceAndExit, { children: e(Text, { children: X(o) }) })),
    a.waitUntilExit().then(() => process.exit(s)));
}
async function pluginInitHandler(a, o, s, d) {
  let c = [],
    p = validatePluginName(o);
  if (p) {
    (logFeatureBad("cli_plugin_init", "invalid_name"),
      c.push(`${figures.cross} Invalid plugin name "${o}": ${p}`),
      z(a, c, 1));
    return;
  }
  let k = [];
  for (let D of s.with ?? [])
    if (PLUGIN_SCAFFOLD_COMPONENTS.includes(D)) k.push(D);
    else {
      (logFeatureBad("cli_plugin_init", "invalid_component"),
        c.push(
          `${figures.cross} Unknown --with component "${D}". Valid: ${PLUGIN_SCAFFOLD_COMPONENTS.join(", ")}`,
        ),
        z(a, c, 1));
      return;
    }
  if (!areLocalPluginDirsAllowedByPolicy()) {
    (logFeatureBad("cli_plugin_init", "policy_blocked"),
      c.push(`${figures.cross} ${localPluginDirsBlockedMessage(formatPathWithTilde(join(getClaudeConfigDir(), "skills")))}`),
      z(a, c, 1));
    return;
  }
  let w = join(getClaudeConfigDir(), "skills"),
    v = join(w, o);
  if (relative(w, resolve(v)).startsWith("..")) {
    (logFeatureBad("cli_plugin_init", "invalid_name"),
      c.push(`${figures.cross} Plugin name "${o}" would write outside ${formatPathWithTilde(w)}`),
      z(a, c, 1));
    return;
  }
  let P = s.author ?? (await getGitUserName()),
    R = s.authorEmail ?? (await getGitUserEmail());
  if (!P && s.authorEmail)
    c.push(
      `${figures.warning} --author-email was ignored because no author name was found. Pass --author or set git config user.name.`,
    );
  let C = P ? (R ? { name: P, email: R } : { name: P }) : void 0,
    N = buildPluginScaffoldFiles({ name: o, description: s.description, author: C, with: k }),
    A;
  try {
    let D = await writePluginScaffoldFiles(v, N, { force: s.force });
    if (!D.ok) {
      (logFeatureBad("cli_plugin_init", "target_exists"),
        c.push(`${figures.cross} ${D.error}`),
        z(a, c, 1));
      return;
    }
    A = D.skipped;
  } catch (D) {
    (logFeatureBad("cli_plugin_init", "write_failed"),
      logError(D),
      c.push(`${figures.cross} Failed to write scaffold: ${l(D)}`),
      z(a, c, 1));
    return;
  }
  for (let D of A) c.push(`  kept existing ${D} (use --force to overwrite)`);
  let m = await validatePluginPath(v);
  if (!m.success || m.warnings.length > 0) c.push(...de(m));
  if (!m.success) {
    (logFeatureBad("cli_plugin_init", "self_validate_failed"), z(a, c, 1));
    return;
  }
  logFeatureOk("cli_plugin_init");
  let H = `${o}@${SKILLS_DIR_PLUGIN_SOURCE}`;
  c.push(`${figures.tick} Created plugin "${o}" at ${formatPathWithTilde(v)}`);
  let E = getSettings_DEPRECATED().enabledPlugins ?? {},
    B = getPolicyPluginNames()?.has(o) ?? !1,
    Y = await getKnownMarketplacesOrEmpty(d),
    T = Object.keys(E).find((D) => {
      let J = splitPluginId(D);
      return (
        J.name === o &&
        J.marketplace !== void 0 &&
        J.marketplace !== BUILTIN_PLUGIN_SOURCE &&
        !isNonMarketplacePluginSource(J.marketplace) &&
        Y[J.marketplace] !== void 0
      );
    }),
    O = E[H] === !1;
  if (B)
    c.push(
      `  ${figures.warning} A plugin named "${o}" is locked by managed settings, which takes precedence \u2014 ${H} won't load. To load this copy, give it a different "name" in .claude-plugin/plugin.json.`,
    );
  else if (T)
    c.push(
      `  ${figures.warning} The name "${o}" is already taken by ${T} \u2014 when that plugin loads, ${H} won't. To load this copy, give it a different "name" in .claude-plugin/plugin.json or uninstall the conflicting plugin.`,
    );
  else if (O) {
    let D = buildCliCommand("plugin enable", H);
    c.push(
      `  ${figures.warning} A disabled setting for ${H} exists, so it won't load until you re-enable it${D ? `: ${D}` : " in /plugin"}`,
    );
  } else
    c.push(
      `  It will auto-load next session as ${H}. Run /reload-plugins to load it now.`,
    );
  let U = buildCliCommand("plugin disable", H);
  (c.push(
    `  ${U ? `Disable: ${U}. ` : "Disable: in /plugin. "}Remove: delete the directory.`,
  ),
    z(a, c, 0));
}
async function pluginListHandler(a, o, s, d) {
  if (o.cowork) SB(!0);
  (ensureBuiltinPluginsRegistered(), logEvent("tengu_plugin_list_command", {}));
  let c = await getInstalledPluginsViaStorage(s),
    { getPluginEditableScopes: p, editableScopeOf: k } =
      await import("../../01-核心基础设施/设置-配置/chunk-0y8rdjs7.js"),
    w = p(),
    v = Object.keys(c.plugins);
  await reloadPluginDirsFromDisk();
  let { enabled: P, disabled: R, errors: C, warnings: N } = await loadAllPlugins(s, d),
    A = [...P, ...R],
    m = new Map(A.map((T) => [T.source, T])),
    H = { plugins: A, errors: C, warnings: N },
    E = [
      {
        header: "Session-only plugins (--plugin-dir / --plugin-url):",
        scopeOf: () => "session",
        standaloneErrorScope: "session",
        standaloneWarningScope: "session",
        pathOf: (T) => T.path,
        showScope: !1,
        ...ue(INLINE_PLUGIN_SOURCE, H),
      },
      {
        header: `Synced from claude.ai${isClaudeAiPluginSyncEnabled() ? "" : " \u2014 sync is off in this shell; these load only in a synced session"}:`,
        scopeOf: () => "synced",
        standaloneErrorScope: "synced",
        standaloneWarningScope: "synced",
        pathOf: (T) => T.path,
        showScope: !1,
        ...ue(SYNCED_PLUGIN_SOURCE, H),
      },
      {
        header: "Skills-directory plugins (.claude/skills/*):",
        scopeOf: (T) => T.scope ?? "user",
        standaloneErrorScope: "user",
        standaloneWarningScope: "project",
        pathOf: displaySkillsDirPath,
        showScope: !0,
        ...ue(SKILLS_DIR_PLUGIN_SOURCE, H),
      },
    ];
  if (o.json) {
    let T = [];
    for (let U of v.sort()) {
      let D = c.plugins[U];
      if (!D || D.length === 0) continue;
      let J = m.get(U),
        W = J?.name ?? splitPluginId(U).name,
        G = C.filter((V) => isDiagnosticForPlugin(V, U, W)).map(formatPluginError),
        K = N.filter((V) => isDiagnosticForPlugin(V, U, W)).map(formatPluginWarning);
      for (let V of D) {
        let q;
        if (J) {
          let I =
            J.mcpServers ||
            (await discoverPluginMcpServers(J, void 0, s, void 0, { readOnlyListing: !0 }));
          if (I && Object.keys(I).length > 0) q = I;
        }
        T.push({
          id: U,
          version: V.version || "unknown",
          scope: V.scope,
          enabled: k(w, U) !== void 0,
          installPath: V.installPath,
          installedAt: V.installedAt,
          lastUpdated: V.lastUpdated,
          projectPath: V.projectPath,
          mcpServers: q,
          errors: G.length > 0 ? G : void 0,
          notes: K.length > 0 ? K : void 0,
        });
      }
    }
    for (let U of E) T.push(...(await Ue(U, s)));
    let O;
    if (o.available) {
      let U = [];
      try {
        let [D, J] = await Promise.all([getKnownMarketplaces(s), fetchPluginInstallCounts(s)]),
          { marketplaces: W } = await loadMarketplaces(D, s);
        for (let { name: G, data: K } of W)
          if (K)
            for (let V of K.plugins) {
              let q = c$(V.name, G);
              if (!isPluginInstalledInCurrentScope(q))
                U.push({
                  pluginId: q,
                  name: V.name,
                  description: V.description,
                  marketplaceName: G,
                  version: V.version,
                  source: V.source,
                  installCount: J?.get(q),
                });
            }
      } catch {}
      O = ne({ installed: T, available: U });
    } else O = ne(T);
    (logFeatureOk("cli_plugin_list"),
      await writeStdoutAndDrain(
        O +
          `
`,
      ));
    return;
  }
  let B = [];
  if (v.length === 0 && !E.some(Re))
    B.push(
      "No plugins installed. Use `claude plugin install` to install a plugin.",
    );
  if (v.length > 0) B.push("Installed plugins:", "");
  for (let T of v.sort()) {
    let O = c.plugins[T];
    if (!O || O.length === 0) continue;
    let U = m.get(T)?.name ?? splitPluginId(T).name,
      D = C.filter((W) => isDiagnosticForPlugin(W, T, U)),
      J = N.filter((W) => isDiagnosticForPlugin(W, T, U));
    for (let W of O) {
      let G = k(w, T) !== void 0,
        K =
          D.length > 0
            ? `${figures.cross} failed to load`
            : G
              ? `${figures.tick} enabled`
              : `${figures.cross} disabled`,
        V = W.version || "unknown",
        q = W.scope;
      (B.push(`  ${figures.pointer} ${T}`),
        B.push(`    Version: ${V}`),
        B.push(`    Scope: ${q}`),
        B.push(`    Status: ${K}`));
      for (let I of D) B.push(`    Error: ${formatPluginError(I)}`);
      for (let I of J) B.push(`    Note: ${formatPluginWarning(I)}`);
      B.push("");
    }
  }
  for (let T of E) B.push(...He(T));
  logFeatureOk("cli_plugin_list");
  let Y = await a();
  await renderAndWaitForExit(Y, e(Text, { children: X(B) }));
}
function pe(_a) {
  let Te = _(4),
    { promise: wa } = _a,
    fe = kn(wa),
    te;
  if (Te[0] !== fe) ((te = X(fe)), (Te[0] = fe), (Te[1] = te));
  else te = Te[1];
  let Ce;
  if (Te[2] !== te)
    ((Ce = e(RenderOnceAndExit, { children: e(Text, { children: te }) })),
      (Te[2] = te),
      (Te[3] = Ce));
  else Ce = Te[3];
  return Ce;
}
async function marketplaceAddHandler(a, o, s, d, c) {
  if (s.cowork) SB(!0);
  if (s.claudeai) {
    if (s.sparse !== void 0 || s.scope !== void 0)
      return cliError(
        `${figures.cross} --claudeai takes only the marketplace name (no --sparse or --scope: a claude.ai marketplace is hosted for your account, not declared in settings)`,
      );
    await Ne(a, o, d, c);
    return;
  }
  let p, k, w;
  try {
    let P = await parseMarketplaceSource(o);
    if (!P)
      return (
        await logFeatureBadAsync("cli_marketplace_add", "cli_marketplace_add_invalid_source"),
        cliErrorAfterAnalyticsFlush(
          `${figures.cross} Invalid marketplace source format. Try: owner/repo, https://..., or ./path`,
        )
      );
    if ("error" in P)
      return (
        await logFeatureBadAsync("cli_marketplace_add", "cli_marketplace_add_parse_failed"),
        cliErrorAfterAnalyticsFlush(`${figures.cross} ${P.error}`)
      );
    if (
      ((w = s.scope ?? "user"),
      w !== "user" && w !== "project" && w !== "local")
    )
      return cliError(
        `${figures.cross} Invalid scope '${w}'. Use: user, project, or local`,
      );
    if (((k = getSettingsSourceForScope(w)), (p = P), s.sparse && s.sparse.length > 0))
      if (p.source === "github" || p.source === "git")
        p = { ...p, sparsePaths: s.sparse };
      else
        return cliError(
          `${figures.cross} --sparse is only supported for github and git marketplace sources (got: ${p.source})`,
        );
  } catch (P) {
    return (
      await ee("cli_marketplace_add", P, "cli_marketplace_add_failed"),
      Z(P, "add marketplace")
    );
  }
  let v = (async () => {
    try {
      let P = [],
        {
          name: R,
          alreadyMaterialized: C,
          resolvedSource: N,
        } = await addMarketplace(
          p,
          (E) => {
            P.push(E);
          },
          d,
        ),
        { error: A } = await declareMarketplaceInSettings(R, { source: N }, k, d);
      if (A) throw A;
      (refreshPluginState(d, c),
        await logEventAsync("tengu_marketplace_added", {
          _PROTO_marketplace_name: R,
          source_type: fromEnum(p.source),
          repo_hash: p.source === "github" ? hashForTelemetry(p.repo) : void 0,
          is_official_marketplace: isOfficialMarketplace(R),
        }),
        await logFeatureOkAsync("cli_marketplace_add"));
      let m = [];
      try {
        m = (await resolveMissingDependencies((await loadAllPlugins(d, c)).errors, d)).installed;
      } catch (E) {
        logForDebugging(`marketplace add: dep auto-resolve skipped: ${l(E)}`, {
          level: "warn",
        });
      }
      let H = formatDependencyCountSuffix(m);
      return (
        P.push(
          C
            ? `${figures.tick} Marketplace '${R}' already on disk \u2014 declared in ${w} settings${H}`
            : `${figures.tick} Successfully added marketplace: ${R} (declared in ${w} settings)${H}`,
        ),
        P
      );
    } catch (P) {
      return (
        await ee("cli_marketplace_add", P, "cli_marketplace_add_failed"),
        Z(P, "add marketplace")
      );
    }
  })();
  (a.render(
    e(Dn, {
      fallback: e(Text, { children: "Adding marketplace\u2026" }),
      children: e(pe, { promise: v }),
    }),
  ),
    await a.waitUntilExit(),
    await exitAfterAnalyticsFlush(0));
}
async function Ne(a, o, s, d) {
  let c = (async () => {
    try {
      let p = await getKnownMarketplaces(s),
        k = await listClaudeAiMarketplaces(d).catch(() => null);
      if (k === null)
        throw new ClaudeAiMarketplaceError(
          "claude.ai marketplaces are not available here \u2014 sign in to claude.ai (claude /login) with plugin sync on, then run: claude plugin marketplace list",
          "tier_unavailable",
        );
      let w = matchMarketplaceByName(k.hosted, o);
      if (w.kind === "ambiguous")
        throw new ClaudeAiMarketplaceError(
          `claude.ai hosts more than one marketplace called "${o}" for this account \u2014 add it by its unique name instead: ${w.localNames.join(", ")} (claude plugin marketplace list)`,
          "ambiguous_name",
        );
      if (w.kind === "none") {
        if (matchMarketplaceByName(k.policyBlocked, o).kind !== "none")
          throw new ClaudeAiMarketplaceError(
            `"${o}" is hosted on claude.ai for this account but not allowed by your organization's marketplace policy (personal claude.ai uploads and blocked hosts are not admitted)`,
            "policy_blocked",
          );
        throw new ClaudeAiMarketplaceError(
          `claude.ai hosts no marketplace named "${o}" for this account \u2014 run: claude plugin marketplace list`,
          "not_listed",
        );
      }
      let v = w.row,
        {
          name: P,
          marketplace: R,
          status: C,
        } = await addClaudeAiMarketplace(v, { configured: p, credentials: d });
      (refreshPluginState(s, d),
        await logEventAsync("tengu_marketplace_added", { source_type: S("claudeai") }),
        await logFeatureOkAsync("cli_marketplace_add"));
      let N = formatCatalogStatusMessage(C),
        A = R.plugins.length;
      return [
        `${figures.tick} Successfully added marketplace: ${formatMarketplaceRowLabel(v)} \u2014 hosted on claude.ai, ${formatMarketplaceScopeLabel(v.scope)} \u2014 ${A} ${pluralize(A, "plugin")}${N ? ` (${N})` : ""}`,
        `  Install its plugins with: claude plugin install <plugin>@${P}`,
      ];
    } catch (p) {
      if (p instanceof ClaudeAiMarketplaceError)
        (await logFeatureBadAsync(
          "cli_marketplace_add",
          `cli_marketplace_add_claudeai_${p.code}`,
        ),
          await flushAnalyticsBeforeExit());
      else await ee("cli_marketplace_add", p, "cli_marketplace_add_failed");
      return Z(p, "add marketplace");
    }
  })();
  (c.catch(() => {}),
    a.render(
      e(Dn, {
        fallback: e(Text, { children: "Adding marketplace\u2026" }),
        children: e(pe, { promise: c }),
      }),
    ),
    await a.waitUntilExit(),
    await exitAfterAnalyticsFlush(0));
}
async function marketplaceListHandler(a, o, s) {
  if (o.cowork) SB(!0);
  let d;
  try {
    d = await getKnownMarketplaces(s);
  } catch (A) {
    return (
      await logFeatureBadAsync("cli_marketplace_list", "cli_marketplace_list_load_failed"),
      await flushAnalyticsBeforeExit(),
      Z(A, "list marketplaces")
    );
  }
  let c = Object.keys(d),
    p = await listClaudeAiMarketplaces().catch(() => null),
    { available: k, hosted: w } = filterUnconfiguredMarketplaces(p, d),
    v = p?.browseOnly ?? [],
    P = await readClaudeAiMarketplaceRegistry(),
    R = new Map();
  for (let A of c) {
    let m = d[A]?.source;
    if (isClaudeAiMarketplaceSource(m))
      R.set(
        A,
        (await loadClaudeAiMarketplace(A, m, { mode: "cache-only", credentials: void 0 })).status,
      );
  }
  if (o.json) {
    let A = c.sort().map((m) => {
      let H = d[m],
        E = H?.source,
        B = E?.source === "github" || E?.source === "git" ? E.ref : void 0;
      return {
        name: m,
        source: E?.source,
        ...(E?.source === "github" && { repo: E.repo }),
        ...(E?.source === "git" && { url: E.url }),
        ...(E?.source === "url" && { url: E.url }),
        ...(E?.source === "directory" && { path: E.path }),
        ...(E?.source === "file" && { path: E.path }),
        ...(B && { ref: B }),
        ...(E?.source === "claudeai"
          ? {
              marketplaceId: E.marketplaceId,
              organizationUuid: E.organizationUuid,
              ...(P[m]?.scope !== void 0 && { scope: P[m]?.scope }),
              status: R.get(m)?.kind,
            }
          : { installLocation: H?.installLocation }),
      };
    });
    (logFeatureOk("cli_marketplace_list"),
      await writeStdoutAndDrain(
        ne(A) +
          `
`,
      ));
    return;
  }
  let C;
  if (c.length === 0 && k.length === 0 && w.length === 0 && v.length === 0)
    C = e(Text, { children: "No marketplaces configured" });
  else {
    let A =
      c.length > 0
        ? ["Configured marketplaces:", ""]
        : ["No marketplaces configured", ""];
    if (
      (c.forEach((m) => {
        let H = d[m];
        if ((A.push(`  ${figures.pointer} ${m}`), H?.source)) {
          let E = H.source;
          if (E.source === "github") {
            let B = E.ref ? `@${E.ref}` : "";
            A.push(`    Source: GitHub (${E.repo}${B})`);
          } else if (E.source === "git") {
            let B = E.ref ? `@${E.ref}` : "";
            A.push(`    Source: Git (${E.url}${B})`);
          } else if (E.source === "url") A.push(`    Source: URL (${E.url})`);
          else if (E.source === "directory")
            A.push(`    Source: Directory (${E.path})`);
          else if (E.source === "file") A.push(`    Source: File (${E.path})`);
          else if (E.source === "claudeai") {
            let B = R.get(m),
              Y = B === void 0 ? void 0 : formatCatalogStatusMessage(B);
            A.push(
              `    Source: ${formatClaudeAiMarketplaceLabel(P[m])}${Y === void 0 ? "" : ` \u2014 ${Y}`}`,
            );
          }
        }
        A.push("");
      }),
      k.length > 0 || w.length > 0 || v.length > 0)
    )
      A.push("From claude.ai:", "");
    for (let m of k)
      (A.push(
        `  ${figures.pointer} ${m.name} (available from claude.ai${m.scope ? `, ${m.scope}` : ""} \u2014 not added)`,
      ),
        A.push(
          `    Source: ${m.source.source === "github" ? "GitHub" : "Git"} (${formatMarketplaceSource(m.source)})`,
        ),
        A.push(""));
    for (let m of w)
      (A.push(
        `  ${figures.pointer} ${formatMarketplaceRowLabel(m)} \u2014 hosted on claude.ai, ${formatMarketplaceScopeLabel(m.scope)} \xB7 not added`,
      ),
        A.push(
          `    Add: claude plugin marketplace add --claudeai ${isValidCliNameToken(m.name) ? m.name : "<name>"}`,
        ),
        A.push(""));
    for (let m of v)
      (A.push(`  ${figures.pointer} ${formatBrowseOnlyMarketplace(m)} (browse on claude.ai)`), A.push(""));
    C = e(Text, { children: X(A) });
  }
  logFeatureOk("cli_marketplace_list");
  let N = await a();
  await renderAndWaitForExit(N, C);
}
async function marketplaceRemoveHandler(a, o, s, d) {
  if (s.cowork) SB(!0);
  let c;
  if (s.scope !== void 0) {
    let p = s.scope;
    if (p !== "user" && p !== "project" && p !== "local")
      return cliError(
        `${figures.cross} Invalid scope '${p}'. Use: user, project, or local`,
      );
    c = getSettingsSourceForScope(p);
  }
  try {
    (await removeMarketplace(o, c, d),
      refreshPluginState(d),
      logEvent("tengu_marketplace_removed", { marketplace_name: o }));
  } catch (p) {
    (await logFeatureBadAsync("cli_marketplace_remove", "cli_marketplace_remove_failed"),
      await flushAnalyticsBeforeExit(),
      Z(p, "remove marketplace"));
  }
  (logFeatureOk("cli_marketplace_remove"),
    await renderAndWaitForExit(
      a,
      r(Text, {
        children: [
          figures.tick,
          " Successfully removed marketplace:",
          " ",
          sanitizeForDisplay(o),
          s.scope ? ` (from ${s.scope} settings)` : "",
        ],
      }),
    ));
}
function Se(ka) {
  let ke = _(11),
    { promise: ya } = ka,
    { messages: he, summary: _e } = kn(ya),
    re,
    ie,
    oe;
  if (ke[0] !== he || ke[1] !== _e) {
    let $a = [...he, _e];
    ie = RenderOnceAndExit;
    re = Text;
    oe = X($a);
    ((ke[0] = he), (ke[1] = _e), (ke[2] = re), (ke[3] = ie), (ke[4] = oe));
  } else ((re = ke[2]), (ie = ke[3]), (oe = ke[4]));
  let se;
  if (ke[5] !== re || ke[6] !== oe)
    ((se = e(re, { children: oe })), (ke[5] = re), (ke[6] = oe), (ke[7] = se));
  else se = ke[7];
  let Me;
  if (ke[8] !== ie || ke[9] !== se)
    ((Me = e(ie, { children: se })), (ke[8] = ie), (ke[9] = se), (ke[10] = Me));
  else Me = ke[10];
  return Me;
}
async function marketplaceUpdateHandler(a, o, s, d) {
  if (s.cowork) SB(!0);
  let c,
    p = 0,
    k;
  if (o) {
    c = `Updating marketplace: ${o}...`;
    let w = [];
    k = refreshMarketplace(o, d, (v) => {
      w.push(v);
    })
      .then(
        async () => (
          refreshPluginState(d),
          await logEventAsync("tengu_marketplace_updated", { marketplace_name: o }),
          await logFeatureOkAsync("cli_marketplace_update"),
          {
            messages: w,
            summary: `${figures.tick} Successfully updated marketplace: ${o}`,
          }
        ),
      )
      .catch(
        async (v) => (
          await ee(
            "cli_marketplace_update",
            v,
            "cli_marketplace_update_failed",
          ),
          Z(v, "update marketplace(s)")
        ),
      );
  } else {
    let w;
    try {
      w = await getKnownMarketplaces(d);
    } catch (P) {
      return (
        await ee(
          "cli_marketplace_update",
          P,
          "cli_marketplace_update_load_failed",
        ),
        Z(P, "update marketplace(s)")
      );
    }
    let v = Object.keys(w);
    if (v.length === 0) {
      (await renderAndWaitForExit(a, e(Text, { children: "No marketplaces configured" })),
        process.exit(0));
      return;
    }
    ((c = "Updating marketplaces..."),
      (k = refreshAllMarketplaces(d)
        .then(async ({ policyRefused: P, failed: R, attempted: C }) => {
          if (
            ((p = R.length > 0 ? 1 : 0),
            refreshPluginState(d),
            await logEventAsync("tengu_marketplace_updated_all", {
              count: v.length,
              attempted: C,
              refreshed: C - P.length - R.length,
              policy_refused: P.length,
              failed: R.length,
            }),
            R.length > 0)
          )
            await logFeatureSadAsync("cli_marketplace_update", "marketplace_refresh_failed");
          else if (P.length > 0)
            await logFeatureSadAsync("cli_marketplace_update", "command_source_refused");
          else await logFeatureOkAsync("cli_marketplace_update");
          return Le(C, P, R, v.length - C);
        })
        .catch(
          async (P) => (
            await ee(
              "cli_marketplace_update",
              P,
              "cli_marketplace_update_failed",
            ),
            Z(P, "update marketplace(s)")
          ),
        )));
  }
  (a.render(
    e(Dn, { fallback: e(Text, { children: c }), children: e(Se, { promise: k }) }),
  ),
    await a.waitUntilExit(),
    await exitAfterAnalyticsFlush(p));
}
function ve(Pa) {
  let xe = _(4),
    { promise: Sa } = Pa,
    ye = kn(Sa),
    le;
  if (xe[0] !== ye) ((le = sanitizeMultilineForDisplay(ye)), (xe[0] = ye), (xe[1] = le));
  else le = xe[1];
  let Oe;
  if (xe[2] !== le)
    ((Oe = e(RenderOnceAndExit, { children: r(Text, { children: [figures.tick, " ", le] }) })),
      (xe[2] = le),
      (xe[3] = Oe));
  else Oe = xe[3];
  return Oe;
}
function Ee(a) {
  return INSTALLABLE_SCOPES.some((o) => o === a);
}
function me(a) {
  let o = a.scope || "user";
  if (a.cowork && o !== "user") cliError("--cowork can only be used with user scope");
  if (!Ee(o)) cliError(`Invalid scope: ${o}. Must be one of: ${INSTALLABLE_SCOPES.join(", ")}.`);
  return o;
}
function Ie(a) {
  let o;
  if (a.scope) {
    if (!Ee(a.scope))
      cliError(`Invalid scope "${a.scope}". Valid scopes: ${INSTALLABLE_SCOPES.join(", ")}`);
    o = a.scope;
  }
  if (a.cowork && o !== void 0 && o !== "user")
    cliError("--cowork can only be used with user scope");
  if (a.cowork && o === void 0) o = "user";
  return o;
}
function ae(a, o, s) {
  let { name: d, marketplace: c } = parsePluginId(o);
  logEvent(a, {
    _PROTO_plugin_name: d,
    ...(c && { _PROTO_marketplace_name: c }),
    ...(s !== void 0 && { scope: s }),
  });
}
async function pluginInstallHandler(a, o, s, d) {
  if (s.cowork) SB(!0);
  let c = me(s);
  ae("tengu_plugin_install_command", o, fromEnum(c));
  let p,
    k,
    w = (N) => {
      if (p) logPluginInstallRefreshOutcome(p.outcome);
      return handlePluginCommandError(N, "install", o);
    },
    v = await reviewPluginCommandSource(
      o,
      {
        yes: s.yes,
        scope: c,
        onMarketplaceRefreshResult: (N) => {
          p = N;
        },
        onResolvedMarketplace: (N) => {
          k = N;
        },
      },
      d,
    ).catch(w);
  if (v?.kind === "declined") {
    if (p) logPluginInstallRefreshOutcome(p.outcome);
    (logFeatureSad("cli_plugin_install", "command_source_declined"),
      await renderAndWaitForExit(a, e(Text, { children: "Aborted." })),
      await gracefulShutdown(1));
    return;
  }
  let P = v?.grantKey,
    R = await confirmPluginEntryDisclosure(o, { yes: s.yes, scope: c, resolvedMarketplace: k }, d).catch(
      w,
    );
  if (R === "declined" || R === "unconfirmed") {
    if (
      (logFeatureSad(
        "cli_plugin_install",
        R === "declined" ? "entry_helper_declined" : "entry_helper_unconfirmed",
      ),
      p)
    )
      logPluginInstallRefreshOutcome(p.outcome);
    (await renderAndWaitForExit(a, e(Text, { children: "Aborted \u2014 the command was not run." })),
      await gracefulShutdown(1));
    return;
  }
  let C = runPluginInstallCommand(o, c, s.config, P, R, d, p).then(
    (N) => (logFeatureOk("cli_plugin_install"), N),
  );
  (a.render(
    e(Dn, {
      fallback: e(Text, { children: sanitizeForDisplay(`Installing plugin "${o}"...`) }),
      children: e(ve, { promise: C }),
    }),
  ),
    await a.waitUntilExit(),
    await gracefulShutdown(0));
}
async function pluginUninstallHandler(a, o, s, d) {
  if (s.cowork) SB(!0);
  let c = me(s);
  ae("tengu_plugin_uninstall_command", o, fromEnum(c));
  let p = await runPluginUninstallCommand(o, c, s.keepData, s.prune, s.yes, d);
  (await renderAndWaitForExit(a, e(Text, { children: sanitizeMultilineForDisplay(s.prune ? p : `${figures.tick} ${p}`) })),
    await logFeatureOkAsync("cli_plugin_uninstall"),
    await exitAfterAnalyticsFlush(0));
}
async function pluginPruneHandler(a, o, s) {
  if (o.cowork) SB(!0);
  let d = me(o);
  logEvent("tengu_plugin_prune_command", { scope: fromEnum(d), dry_run: o.dryRun ?? !1 });
  let c = await runPluginPruneCommand(d, { dryRun: o.dryRun, yes: o.yes }, s);
  (await renderAndWaitForExit(a, e(Text, { children: sanitizeMultilineForDisplay(c) })),
    await logFeatureOkAsync("cli_plugin_prune"),
    await exitAfterAnalyticsFlush(0));
}
async function pluginEnableHandler(a, o, s, d) {
  if (s.cowork) SB(!0);
  let c = Ie(s);
  ae("tengu_plugin_enable_command", o, fromEnum(c ?? "auto"));
  let p;
  try {
    if ((await reloadPluginDirsFromDisk(), ensureBuiltinPluginsRegistered(), (p = await enablePlugin(o, c, d)), !p.success))
      throw new PluginOperationFailedError(p.message);
  } catch (k) {
    return await handlePluginCommandError(k, "enable", o);
  }
  (await renderAndWaitForExit(a, r(Text, { children: [figures.tick, " ", sanitizeMultilineForDisplay(p.message)] })),
    await logEventAsync("tengu_plugin_enabled_cli", {
      ...buildPluginTelemetryFieldsFromId(p.pluginId || o, getPolicyPluginNames()),
      scope: fromEnumOpt(p.scope),
    }),
    await logFeatureOkAsync("cli_plugin_enable"),
    await exitAfterAnalyticsFlush(0));
}
async function pluginDisableHandler(a, o, s, d) {
  if (s.all && o) cliError("Cannot use --all with a specific plugin");
  if (!s.all && !o)
    cliError("Please specify a plugin name or use --all to disable all plugins");
  if (s.cowork) SB(!0);
  let c;
  if (s.all) {
    if (s.scope) cliError("Cannot use --scope with --all");
    (logEvent("tengu_plugin_disable_command", {}), ensureBuiltinPluginsRegistered(), (c = await runPluginDisableAllCommand(d)));
  } else {
    let p = Ie(s);
    (ae("tengu_plugin_disable_command", o, fromEnum(p ?? "auto")),
      await reloadPluginDirsFromDisk(),
      ensureBuiltinPluginsRegistered(),
      (c = await runPluginDisableCommand(o, p, d)));
  }
  (await renderAndWaitForExit(a, e(Text, { children: sanitizeMultilineForDisplay(c) })),
    await logFeatureOkAsync("cli_plugin_disable"),
    await exitAfterAnalyticsFlush(0));
}
async function pluginUpdateHandler(a, o, s) {
  if (o.cowork) SB(!0);
  ae("tengu_plugin_update_command", a);
  let d = "user";
  if (o.scope) {
    if (!ALL_PLUGIN_SCOPES.includes(o.scope))
      cliError(`Invalid scope "${o.scope}". Valid scopes: ${ALL_PLUGIN_SCOPES.join(", ")}`);
    d = o.scope;
  }
  if (o.cowork && d !== "user") cliError("--cowork can only be used with user scope");
  await runPluginUpdateCommand(a, d, { yes: o.yes }, s);
}
async function pluginDetailsHandler(a, o, s, d, c) {
  if (s.cowork) SB(!0);
  (ensureBuiltinPluginsRegistered(), logEvent("tengu_plugin_details_command", {}));
  let {
      getPluginInventory: p,
      computePluginTokenCost: k,
      scaleCharsToTokens: w,
    } = await import("../MCP客户端/chunk-4xr0rjb4.js"),
    { formatTokenEstimate: v } = await import("../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js");
  await reloadPluginDirsFromDisk();
  let { enabled: P, disabled: R } = await loadAllPlugins(isHoverRestEnabled() ? d : void 0, c),
    C = parsePluginId(o),
    N = C.marketplace ? formatPluginId(C.name, C.marketplace) : C.name,
    A = isNonMarketplacePluginSource(C.marketplace) ? (I) => normalizeLookupKey(I) === normalizeLookupKey(N) : (I) => isEqualIgnoringCase(I, N),
    m = [...P, ...R].find((I) => A(C.marketplace ? I.source : I.name));
  if (!m) {
    logFeatureBad("cli_plugin_details", "not_found");
    let I = `Plugin "${o}" not found. Run \`claude plugin list\` to see installed plugins, or pass --plugin-dir <path> to load one from disk.`;
    if (s.json) return cliError(sanitizeMultilineForDisplay(I));
    let j = await a();
    (await renderAndWaitForExit(j, e(Text, { children: sanitizeMultilineForDisplay(I) })), process.exit(1));
  }
  let H = getPluginMarketplace(m.source) ?? INLINE_PLUGIN_SOURCE,
    E = s.models?.length ? s.models : [getMainLoopModel()],
    B;
  try {
    let I = await p(m, H);
    B = await k(I, E, m.name);
  } catch (I) {
    (logError(dt(ge(I), "plugin details: inventory/token-cost failed")),
      logFeatureBad("cli_plugin_details", "inventory_failed"));
    let j = `${figures.cross} Could not load details for "${m.name}": ${l(I)}`;
    if (s.json) return cliError(sanitizeMultilineForDisplay(j));
    let Q = await a();
    (await renderAndWaitForExit(Q, e(Text, { children: sanitizeMultilineForDisplay(j) })), process.exit(1));
  }
  let { tokens: Y, inventory: T } = B;
  if (s.json) {
    logFeatureOk("cli_plugin_details");
    let I = ({ path: j, ...Q }) => Q;
    await writeStdoutAndDrain(
      ne({
        plugin: m.name,
        version: m.manifest.version,
        source: m.source,
        sha: m.sha ?? null,
        tokens: Y,
        components: {
          ...T,
          commands: T.commands.map(I),
          agents: T.agents.map(I),
          skills: T.skills.map(I),
        },
      }) +
        `
`,
    );
    return;
  }
  let O = [],
    U = getPluginDisplayName(m),
    D = U === m.name ? m.name : `${U} (${m.name})`;
  if (
    (O.push(`${D} ${m.manifest.version ?? ""}`.trimEnd()),
    m.manifest.description)
  ) {
    let [I, ...j] = m.manifest.description.split(`
`);
    O.push(`  Description: ${I}`);
    for (let Q of j) O.push(`      ${Q}`);
  }
  (O.push(`  Source: ${m.source}`), O.push(""), O.push("Component inventory"));
  let J = [
    ["Skills", [...T.skills, ...T.commands].map((I) => I.name).sort(), ""],
    ["Agents", T.agents.map((I) => I.name), ""],
    ["Hooks", T.hooks, "  (harness-only \u2014 no model context cost)"],
    [
      "MCP servers",
      T.mcpServers,
      "  (tool schemas resolved at runtime; not counted)",
    ],
    [
      "LSP servers",
      T.lspServers,
      "  (out-of-process tooling; no model context cost)",
    ],
  ];
  for (let [I, j, Q] of J)
    O.push(
      `  ${I} (${j.length})${j.length > 0 ? `  ${j.join(", ")}` : ""}${j.length > 0 ? Q : ""}`,
    );
  O.push("");
  let W = [...T.skills, ...T.agents, ...T.commands].filter(
      (I) => I.chars != null,
    ),
    G = {
      always_on: W.reduce((I, j) => I + j.chars.always_on, 0),
      on_invoke: W.reduce((I, j) => I + j.chars.on_invoke, 0),
    },
    K = Y[E[0]],
    V = K?.always_on ?? w(G.always_on, G.always_on, void 0);
  if (
    (O.push("Projected token cost"),
    O.push(
      `  Always-on:   ~${V.toLocaleString()} tok   added to every session`,
    ),
    W.length > 0)
  ) {
    (O.push(""), O.push("Per-component (rounded)"));
    let I = Math.max(...W.map((j) => j.name.length), 9);
    O.push(
      `  ${"component".padEnd(I)}  ${"always-on".padStart(9)}  ${"on-invoke".padStart(9)}`,
    );
    for (let j of W) {
      let Q = w(j.chars.always_on, G.always_on, K?.always_on),
        Ae = w(j.chars.on_invoke, G.on_invoke, K?.on_invoke);
      O.push(
        `  ${j.name.padEnd(I)}  ${v(Q).padStart(9)}  ${v(Ae).padStart(9)}`,
      );
    }
    (O.push(""),
      O.push("  On-invoke cost is paid each time a skill or agent fires."),
      O.push("  Token counts are estimates and may differ from actual usage."));
  }
  if (K) logFeatureOk("cli_plugin_details");
  else logFeatureSad("cli_plugin_details", "count_tokens_unreachable");
  let q = await a();
  await renderAndWaitForExit(q, e(Text, { children: X(O) }));
}
function X(a) {
  return a.map(sanitizeForDisplay).join(`
`);
}
function ne(a) {
  return escapeInvisibleChars(jsonStringify(a, null, 2));
}
function ue(a, o) {
  let s = (k) => getNonMarketplacePluginSource(k.source) === a,
    d = o.plugins.filter(s),
    c = o.errors.filter(s),
    p = o.warnings.filter(s);
  return {
    plugins: d,
    errors: c,
    warnings: p,
    standaloneErrorRows: c.filter((k) => !d.some((w) => isErrorForPlugin(k, w))),
    standaloneWarningRows: p.filter((k) => !d.some((w) => isWarningForPlugin(k, w))),
  };
}
function Re(a) {
  return (
    a.plugins.length > 0 ||
    a.standaloneErrorRows.length > 0 ||
    a.standaloneWarningRows.length > 0
  );
}
function He(a) {
  if (!Re(a)) return [];
  let { standaloneErrorRows: o, standaloneWarningRows: s } = a,
    d = [a.header, ""];
  for (let c of s) d.push(`  ${figures.warning} ${formatPluginWarning(c)}`, "");
  for (let c of a.plugins) {
    let p = a.errors.filter((v) => isErrorForPlugin(v, c)),
      k = a.warnings.filter((v) => isWarningForPlugin(v, c)),
      w =
        c.enabled === !1
          ? `${figures.cross} disabled`
          : p.length > 0
            ? `${figures.cross} loaded with errors`
            : `${figures.tick} loaded`;
    if (
      (d.push(`  ${figures.pointer} ${c.source}`),
      d.push(`    Version: ${c.manifest.version ?? "unknown"}`),
      a.showScope)
    )
      d.push(`    Scope: ${a.scopeOf(c)}`);
    (d.push(`    Path: ${a.pathOf(c)}`), d.push(`    Status: ${w}`));
    for (let v of p) d.push(`    Error: ${formatPluginError(v)}`);
    for (let v of k) d.push(`    Note: ${formatPluginWarning(v)}`);
    d.push("");
  }
  for (let c of o)
    d.push(`  ${figures.pointer} ${c.source}: ${figures.cross} ${formatPluginError(c)}`, "");
  return d;
}
function $e({ path: a, message: o }) {
  return { path: a, message: o, code: null };
}
function Pe(a) {
  return {
    file: a.filePath,
    type: a.fileType,
    errors: a.errors.map($e),
    warnings: a.warnings.map($e),
    notes: a.notes ?? [],
  };
}
function je(a, o) {
  return {
    success: o.success,
    strict: o.strict,
    target: a.resolvedPath,
    manifest: a.manifest ? Pe(a.manifest) : null,
    contents: a.contents.map(Pe),
  };
}
async function Ue(a, o) {
  let s = [];
  for (let d of a.plugins) {
    let c =
        d.mcpServers ||
        (await discoverPluginMcpServers(d, void 0, o, void 0, { readOnlyListing: !0 })),
      p = a.errors.filter((w) => isErrorForPlugin(w, d)).map(formatPluginError),
      k = a.warnings.filter((w) => isWarningForPlugin(w, d)).map(formatPluginWarning);
    s.push({
      id: d.source,
      version: d.manifest.version ?? "unknown",
      scope: a.scopeOf(d),
      enabled: d.enabled !== !1,
      installPath: d.path,
      mcpServers: c && Object.keys(c).length > 0 ? c : void 0,
      errors: p.length > 0 ? p : void 0,
      notes: k.length > 0 ? k : void 0,
    });
  }
  for (let d of a.standaloneErrorRows)
    s.push({
      id: d.source,
      version: "unknown",
      scope: a.standaloneErrorScope,
      enabled: !1,
      installPath: "path" in d ? d.path : "",
      errors: [formatPluginError(d)],
    });
  for (let d of a.standaloneWarningRows)
    s.push({
      id: d.source,
      version: "unknown",
      scope: a.standaloneWarningScope,
      enabled: d.type === "synced-plugin-shadowed",
      installPath: "",
      notes: [formatPluginWarning(d)],
    });
  return s;
}
export {
  marketplaceAddHandler,
  marketplaceListHandler,
  marketplaceRemoveHandler,
  marketplaceUpdateHandler,
  pluginDetailsHandler,
  pluginDisableHandler,
  pluginEnableHandler,
  pluginInitHandler,
  pluginInstallHandler,
  pluginListHandler,
  pluginPruneHandler,
  pluginTagHandler,
  pluginUninstallHandler,
  pluginUpdateHandler,
  pluginValidateHandler,
};

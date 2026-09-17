// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 214 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { SB } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { logEvent, logEventAsync } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S, fromEnum, fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad, logFeatureOkAsync, logFeatureBadAsync, logFeatureSadAsync } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { dt, ge, l, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Jlr } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { getSettings_DEPRECATED } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { wr, ff, sd } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { Gu } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { Ui, mXe } from "./chunk-ajtn749s.js";
import { bK, gXe, hXe } from "./chunk-hh8f1qrw.js";
import { V$, Aa, vm, K$ } from "./chunk-7s6mt1vg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { _se, brr, getMainLoopModel, Tn } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import {
  Xf,
  xn,
  wM,
  pDe,
  qwe,
  xue,
  Hue,
  kdn,
  hDe,
  zwe,
  aX,
  Gte,
  Vwe,
  mV,
  UF,
  TM,
  Tmt,
  tC,
  Emt,
  xy,
  P2,
  fu,
  c$,
  D3,
  iyt,
  vgn,
  T5e,
  gl,
  Ql,
  dY,
  TEe,
  r7n,
  eD,
  tD,
  _H,
  AEe,
  Ph,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { dle, jB, n9e, f0e } from "./chunk-q8w2zntw.js";
import {
  ZPt,
  eOt,
  z8,
  c0e,
  SUn,
  ek,
  pen,
  ZWe,
  e9e,
  t9e,
  u0e,
} from "./chunk-akd9b588.js";
import { RenderOnceAndExit, renderAndWaitForExit } from "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import { cliError, writeStdoutAndDrain, flushAnalyticsBeforeExit, exitAfterAnalyticsFlush, cliErrorAfterAnalyticsFlush } from "../../01-核心基础设施/共享小工具-未细化/chunk-4f55jpqh.js";
import {
  Dae,
  Lae,
  NNn,
  FNn,
  $Nn,
  UNn,
  BNn,
  jNn,
  WNn,
  GNn,
  t6e,
  qNn,
  zNn,
  VNn,
  Rot,
} from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { JB } from "./chunk-bh1q9esj.js";
import { Dn, kn, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { L } from "../Teammates团队/chunk-mrfx53ye.js";
import {
  np,
  Xc,
  Qp,
  $g,
  Ul,
  jI,
  Bn,
  J3,
  XSt,
  Lu,
  $y,
  xi,
  Ug,
  bC,
} from "./chunk-33bdfgmx.js";
F();
import { join as ce, relative, resolve } from "path";
async function ee(a, o, s) {
  if (o instanceof Ui) await logFeatureSadAsync(a, "command_source_refused");
  else await logFeatureBadAsync(a, s);
  await flushAnalyticsBeforeExit();
}
function Le(a, o, s, d = 0) {
  let c = a - o.length - s.length,
    p = [];
  if (o.length > 0) p.push(hXe(o.length, o));
  if (s.length > 0) p.push(vgn(s.length, s));
  if (d > 0)
    p.push(
      `${d} ${x(d, "marketplace")} skipped (nothing to refresh: declared in settings, managed, or not allowed)`,
    );
  return { messages: p, summary: Be(c, o.length, s.length) };
}
function Be(a, o, s) {
  let d = iyt({ failedCount: s, updatedCount: a, policyRefusedCount: o }),
    c =
      s > 0
        ? a > 0
          ? `Updated ${a} ${x(a, "marketplace")}, but not all`
          : "No marketplaces were updated"
        : a > 0
          ? `Successfully updated ${a} ${x(a, "marketplace")}`
          : o > 0
            ? "No marketplaces were updated"
            : "No marketplaces needed updating";
  return d === null ? c : `${d} ${c}`;
}
function Z(a, o) {
  if (a instanceof Ui)
    return (n(`${o} refused: ${a.message}`), cliError(ff(a.message)));
  (n(`Failed to ${o}: ${l(a)}`, { level: "error" }),
    cliError(ff(`${L.cross} Failed to ${o}: ${l(a)}`)));
}
function de(a) {
  let o = [];
  if (a.errors.length > 0)
    (o.push(
      `${L.cross} Found ${a.errors.length} ${x(a.errors.length, "error")}:`,
      "",
    ),
      a.errors.forEach((s) => {
        o.push(`  ${L.pointer} ${s.path}: ${s.message}`);
      }),
      o.push(""));
  if (a.warnings.length > 0)
    (o.push(
      `${L.warning} Found ${a.warnings.length} ${x(a.warnings.length, "warning")}:`,
      "",
    ),
      a.warnings.forEach((s) => {
        o.push(`  ${L.pointer} ${s.path}: ${s.message}`);
      }),
      o.push(""));
  if (a.notes !== void 0)
    (a.notes.forEach((s) => {
      o.push(`  ${L.pointer} ${s}`);
    }),
      o.push(""));
  return o;
}
async function pluginValidateHandler(a, o, s) {
  if (s.cowork) SB(!0);
  let d;
  try {
    d = await ZWe(o);
  } catch (C) {
    if (Rt(C))
      n(`Plugin validation failed for ${o}: ${l(C)}`, { level: "error" });
    else logError(C);
    return (
      console.error(
        `${L.cross} Unexpected error during validation: ${ek(l(C), 200)}`,
      ),
      await logFeatureBadAsync("cli_plugin_validate", "cli_plugin_validate_exception"),
      exitAfterAnalyticsFlush(2)
    );
  }
  let { manifest: c, contents: p } = d,
    { allSuccess: k, noErrors: w, hasWarnings: v } = SUn(c ? [c, ...p] : p, s),
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
        ? `${L.tick} Validation passed with warnings`
        : `${L.tick} Validation passed`,
    );
  else if (w && v)
    R.push(`${L.cross} Validation failed (--strict treats warnings as errors)`);
  else R.push(`${L.cross} Validation failed`);
  return (
    await renderAndWaitForExit(await a(), e(t, { children: X(R) })),
    await P(),
    exitAfterAnalyticsFlush(k ? 0 : 1)
  );
}
async function pluginTagHandler(a, o, s) {
  let d = await e9e(o ?? ".", { force: s.force }),
    c = [];
  for (let C of d.warnings) c.push(`${L.warning} ${C}`);
  if (!d.ok) {
    (logFeatureBad("cli_plugin_tag", "cli_plugin_tag_prepare_failed"),
      c.push(`${L.cross} ${d.error}`),
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
    v = u0e(p, s.message),
    P = `git -C ${p.gitRoot} push ${w ? "--force " : ""}${k} refs/tags/${p.tag}`;
  if (s.dryRun) {
    (logFeatureOk("cli_plugin_tag"),
      c.push(
        `${L.tick} Dry run \u2014 would create tag ${p.tag} at HEAD in ${p.gitRoot}`,
        `  git -C ${p.gitRoot} tag ${w ? "-f " : ""}-a ${p.tag} -m ${b(v)}`,
        `  ${P}`,
      ),
      z(a, c, 0));
    return;
  }
  let R = await t9e(p, {
    push: s.push ?? !1,
    force: w,
    message: s.message,
    remote: k,
  });
  if (!R.ok) {
    (logFeatureBad("cli_plugin_tag", "cli_plugin_tag_create_failed"),
      c.push(`${L.cross} ${R.error}`),
      z(a, c, 1));
    return;
  }
  if ((logFeatureOk("cli_plugin_tag"), c.push(`${L.tick} Created tag ${p.tag}`), R.pushed))
    c.push(`${L.tick} Pushed to ${k}`);
  else c.push(`  Push with: ${P}`);
  z(a, c, 0);
}
function z(a, o, s) {
  (a.render(e(RenderOnceAndExit, { children: e(t, { children: X(o) }) })),
    a.waitUntilExit().then(() => process.exit(s)));
}
async function pluginInitHandler(a, o, s, d) {
  let c = [],
    p = qNn(o);
  if (p) {
    (logFeatureBad("cli_plugin_init", "invalid_name"),
      c.push(`${L.cross} Invalid plugin name "${o}": ${p}`),
      z(a, c, 1));
    return;
  }
  let k = [];
  for (let D of s.with ?? [])
    if (t6e.includes(D)) k.push(D);
    else {
      (logFeatureBad("cli_plugin_init", "invalid_component"),
        c.push(
          `${L.cross} Unknown --with component "${D}". Valid: ${t6e.join(", ")}`,
        ),
        z(a, c, 1));
      return;
    }
  if (!bK()) {
    (logFeatureBad("cli_plugin_init", "policy_blocked"),
      c.push(`${L.cross} ${gXe(Gu(ce(be(), "skills")))}`),
      z(a, c, 1));
    return;
  }
  let w = ce(be(), "skills"),
    v = ce(w, o);
  if (relative(w, resolve(v)).startsWith("..")) {
    (logFeatureBad("cli_plugin_init", "invalid_name"),
      c.push(`${L.cross} Plugin name "${o}" would write outside ${Gu(w)}`),
      z(a, c, 1));
    return;
  }
  let P = s.author ?? (await brr()),
    R = s.authorEmail ?? (await _se());
  if (!P && s.authorEmail)
    c.push(
      `${L.warning} --author-email was ignored because no author name was found. Pass --author or set git config user.name.`,
    );
  let C = P ? (R ? { name: P, email: R } : { name: P }) : void 0,
    N = zNn({ name: o, description: s.description, author: C, with: k }),
    A;
  try {
    let D = await VNn(v, N, { force: s.force });
    if (!D.ok) {
      (logFeatureBad("cli_plugin_init", "target_exists"),
        c.push(`${L.cross} ${D.error}`),
        z(a, c, 1));
      return;
    }
    A = D.skipped;
  } catch (D) {
    (logFeatureBad("cli_plugin_init", "write_failed"),
      logError(D),
      c.push(`${L.cross} Failed to write scaffold: ${l(D)}`),
      z(a, c, 1));
    return;
  }
  for (let D of A) c.push(`  kept existing ${D} (use --force to overwrite)`);
  let m = await pen(v);
  if (!m.success || m.warnings.length > 0) c.push(...de(m));
  if (!m.success) {
    (logFeatureBad("cli_plugin_init", "self_validate_failed"), z(a, c, 1));
    return;
  }
  logFeatureOk("cli_plugin_init");
  let H = `${o}@${Xc}`;
  c.push(`${L.tick} Created plugin "${o}" at ${Gu(v)}`);
  let E = getSettings_DEPRECATED().enabledPlugins ?? {},
    B = Xf()?.has(o) ?? !1,
    Y = await Ql(d),
    T = Object.keys(E).find((D) => {
      let J = Bn(D);
      return (
        J.name === o &&
        J.marketplace !== void 0 &&
        J.marketplace !== $g &&
        !Ul(J.marketplace) &&
        Y[J.marketplace] !== void 0
      );
    }),
    O = E[H] === !1;
  if (B)
    c.push(
      `  ${L.warning} A plugin named "${o}" is locked by managed settings, which takes precedence \u2014 ${H} won't load. To load this copy, give it a different "name" in .claude-plugin/plugin.json.`,
    );
  else if (T)
    c.push(
      `  ${L.warning} The name "${o}" is already taken by ${T} \u2014 when that plugin loads, ${H} won't. To load this copy, give it a different "name" in .claude-plugin/plugin.json or uninstall the conflicting plugin.`,
    );
  else if (O) {
    let D = Aa("plugin enable", H);
    c.push(
      `  ${L.warning} A disabled setting for ${H} exists, so it won't load until you re-enable it${D ? `: ${D}` : " in /plugin"}`,
    );
  } else
    c.push(
      `  It will auto-load next session as ${H}. Run /reload-plugins to load it now.`,
    );
  let U = Aa("plugin disable", H);
  (c.push(
    `  ${U ? `Disable: ${U}. ` : "Disable: in /plugin. "}Remove: delete the directory.`,
  ),
    z(a, c, 0));
}
async function pluginListHandler(a, o, s, d) {
  if (o.cowork) SB(!0);
  (Rot(), logEvent("tengu_plugin_list_command", {}));
  let c = await tD(s),
    { getPluginEditableScopes: p, editableScopeOf: k } =
      await import("../../01-核心基础设施/设置-配置/chunk-0y8rdjs7.js"),
    w = p(),
    v = Object.keys(c.plugins);
  await qwe();
  let { enabled: P, disabled: R, errors: C, warnings: N } = await Ph(s, d),
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
        ...ue(np, H),
      },
      {
        header: `Synced from claude.ai${mXe() ? "" : " \u2014 sync is off in this shell; these load only in a synced session"}:`,
        scopeOf: () => "synced",
        standaloneErrorScope: "synced",
        standaloneWarningScope: "synced",
        pathOf: (T) => T.path,
        showScope: !1,
        ...ue(Qp, H),
      },
      {
        header: "Skills-directory plugins (.claude/skills/*):",
        scopeOf: (T) => T.scope ?? "user",
        standaloneErrorScope: "user",
        standaloneWarningScope: "project",
        pathOf: AEe,
        showScope: !0,
        ...ue(Xc, H),
      },
    ];
  if (o.json) {
    let T = [];
    for (let U of v.sort()) {
      let D = c.plugins[U];
      if (!D || D.length === 0) continue;
      let J = m.get(U),
        W = J?.name ?? Bn(U).name,
        G = C.filter((V) => z8(V, U, W)).map(vm),
        K = N.filter((V) => z8(V, U, W)).map(K$);
      for (let V of D) {
        let q;
        if (J) {
          let I =
            J.mcpServers ||
            (await wM(J, void 0, s, void 0, { readOnlyListing: !0 }));
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
        let [D, J] = await Promise.all([gl(s), c0e(s)]),
          { marketplaces: W } = await D3(D, s);
        for (let { name: G, data: K } of W)
          if (K)
            for (let V of K.plugins) {
              let q = c$(V.name, G);
              if (!_H(q))
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
    let U = m.get(T)?.name ?? Bn(T).name,
      D = C.filter((W) => z8(W, T, U)),
      J = N.filter((W) => z8(W, T, U));
    for (let W of O) {
      let G = k(w, T) !== void 0,
        K =
          D.length > 0
            ? `${L.cross} failed to load`
            : G
              ? `${L.tick} enabled`
              : `${L.cross} disabled`,
        V = W.version || "unknown",
        q = W.scope;
      (B.push(`  ${L.pointer} ${T}`),
        B.push(`    Version: ${V}`),
        B.push(`    Scope: ${q}`),
        B.push(`    Status: ${K}`));
      for (let I of D) B.push(`    Error: ${vm(I)}`);
      for (let I of J) B.push(`    Note: ${K$(I)}`);
      B.push("");
    }
  }
  for (let T of E) B.push(...He(T));
  logFeatureOk("cli_plugin_list");
  let Y = await a();
  await renderAndWaitForExit(Y, e(t, { children: X(B) }));
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
    ((Ce = e(RenderOnceAndExit, { children: e(t, { children: te }) })),
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
        `${L.cross} --claudeai takes only the marketplace name (no --sparse or --scope: a claude.ai marketplace is hosted for your account, not declared in settings)`,
      );
    await Ne(a, o, d, c);
    return;
  }
  let p, k, w;
  try {
    let P = await pDe(o);
    if (!P)
      return (
        await logFeatureBadAsync("cli_marketplace_add", "cli_marketplace_add_invalid_source"),
        cliErrorAfterAnalyticsFlush(
          `${L.cross} Invalid marketplace source format. Try: owner/repo, https://..., or ./path`,
        )
      );
    if ("error" in P)
      return (
        await logFeatureBadAsync("cli_marketplace_add", "cli_marketplace_add_parse_failed"),
        cliErrorAfterAnalyticsFlush(`${L.cross} ${P.error}`)
      );
    if (
      ((w = s.scope ?? "user"),
      w !== "user" && w !== "project" && w !== "local")
    )
      return cliError(
        `${L.cross} Invalid scope '${w}'. Use: user, project, or local`,
      );
    if (((k = bC(w)), (p = P), s.sparse && s.sparse.length > 0))
      if (p.source === "github" || p.source === "git")
        p = { ...p, sparsePaths: s.sparse };
      else
        return cliError(
          `${L.cross} --sparse is only supported for github and git marketplace sources (got: ${p.source})`,
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
        } = await dY(
          p,
          (E) => {
            P.push(E);
          },
          d,
        ),
        { error: A } = await T5e(R, { source: N }, k, d);
      if (A) throw A;
      (fu(d, c),
        await logEventAsync("tengu_marketplace_added", {
          _PROTO_marketplace_name: R,
          source_type: fromEnum(p.source),
          repo_hash: p.source === "github" ? Tn(p.repo) : void 0,
          is_official_marketplace: Ug(R),
        }),
        await logFeatureOkAsync("cli_marketplace_add"));
      let m = [];
      try {
        m = (await JB((await Ph(d, c)).errors, d)).installed;
      } catch (E) {
        n(`marketplace add: dep auto-resolve skipped: ${l(E)}`, {
          level: "warn",
        });
      }
      let H = P2(m);
      return (
        P.push(
          C
            ? `${L.tick} Marketplace '${R}' already on disk \u2014 declared in ${w} settings${H}`
            : `${L.tick} Successfully added marketplace: ${R} (declared in ${w} settings)${H}`,
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
      fallback: e(t, { children: "Adding marketplace\u2026" }),
      children: e(pe, { promise: v }),
    }),
  ),
    await a.waitUntilExit(),
    await exitAfterAnalyticsFlush(0));
}
async function Ne(a, o, s, d) {
  let c = (async () => {
    try {
      let p = await gl(s),
        k = await xue(d).catch(() => null);
      if (k === null)
        throw new tC(
          "claude.ai marketplaces are not available here \u2014 sign in to claude.ai (claude /login) with plugin sync on, then run: claude plugin marketplace list",
          "tier_unavailable",
        );
      let w = kdn(k.hosted, o);
      if (w.kind === "ambiguous")
        throw new tC(
          `claude.ai hosts more than one marketplace called "${o}" for this account \u2014 add it by its unique name instead: ${w.localNames.join(", ")} (claude plugin marketplace list)`,
          "ambiguous_name",
        );
      if (w.kind === "none") {
        if (kdn(k.policyBlocked, o).kind !== "none")
          throw new tC(
            `"${o}" is hosted on claude.ai for this account but not allowed by your organization's marketplace policy (personal claude.ai uploads and blocked hosts are not admitted)`,
            "policy_blocked",
          );
        throw new tC(
          `claude.ai hosts no marketplace named "${o}" for this account \u2014 run: claude plugin marketplace list`,
          "not_listed",
        );
      }
      let v = w.row,
        {
          name: P,
          marketplace: R,
          status: C,
        } = await Emt(v, { configured: p, credentials: d });
      (fu(s, d),
        await logEventAsync("tengu_marketplace_added", { source_type: S("claudeai") }),
        await logFeatureOkAsync("cli_marketplace_add"));
      let N = Vwe(C),
        A = R.plugins.length;
      return [
        `${L.tick} Successfully added marketplace: ${hDe(v)} \u2014 hosted on claude.ai, ${aX(v.scope)} \u2014 ${A} ${x(A, "plugin")}${N ? ` (${N})` : ""}`,
        `  Install its plugins with: claude plugin install <plugin>@${P}`,
      ];
    } catch (p) {
      if (p instanceof tC)
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
        fallback: e(t, { children: "Adding marketplace\u2026" }),
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
    d = await gl(s);
  } catch (A) {
    return (
      await logFeatureBadAsync("cli_marketplace_list", "cli_marketplace_list_load_failed"),
      await flushAnalyticsBeforeExit(),
      Z(A, "list marketplaces")
    );
  }
  let c = Object.keys(d),
    p = await xue().catch(() => null),
    { available: k, hosted: w } = Hue(p, d),
    v = p?.browseOnly ?? [],
    P = await UF(),
    R = new Map();
  for (let A of c) {
    let m = d[A]?.source;
    if (TM(m))
      R.set(
        A,
        (await mV(A, m, { mode: "cache-only", credentials: void 0 })).status,
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
    C = e(t, { children: "No marketplaces configured" });
  else {
    let A =
      c.length > 0
        ? ["Configured marketplaces:", ""]
        : ["No marketplaces configured", ""];
    if (
      (c.forEach((m) => {
        let H = d[m];
        if ((A.push(`  ${L.pointer} ${m}`), H?.source)) {
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
              Y = B === void 0 ? void 0 : Vwe(B);
            A.push(
              `    Source: ${Tmt(P[m])}${Y === void 0 ? "" : ` \u2014 ${Y}`}`,
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
        `  ${L.pointer} ${m.name} (available from claude.ai${m.scope ? `, ${m.scope}` : ""} \u2014 not added)`,
      ),
        A.push(
          `    Source: ${m.source.source === "github" ? "GitHub" : "Git"} (${Gte(m.source)})`,
        ),
        A.push(""));
    for (let m of w)
      (A.push(
        `  ${L.pointer} ${hDe(m)} \u2014 hosted on claude.ai, ${aX(m.scope)} \xB7 not added`,
      ),
        A.push(
          `    Add: claude plugin marketplace add --claudeai ${V$(m.name) ? m.name : "<name>"}`,
        ),
        A.push(""));
    for (let m of v)
      (A.push(`  ${L.pointer} ${zwe(m)} (browse on claude.ai)`), A.push(""));
    C = e(t, { children: X(A) });
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
        `${L.cross} Invalid scope '${p}'. Use: user, project, or local`,
      );
    c = bC(p);
  }
  try {
    (await TEe(o, c, d),
      fu(d),
      logEvent("tengu_marketplace_removed", { marketplace_name: o }));
  } catch (p) {
    (await logFeatureBadAsync("cli_marketplace_remove", "cli_marketplace_remove_failed"),
      await flushAnalyticsBeforeExit(),
      Z(p, "remove marketplace"));
  }
  (logFeatureOk("cli_marketplace_remove"),
    await renderAndWaitForExit(
      a,
      r(t, {
        children: [
          L.tick,
          " Successfully removed marketplace:",
          " ",
          wr(o),
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
    re = t;
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
    k = eD(o, d, (v) => {
      w.push(v);
    })
      .then(
        async () => (
          fu(d),
          await logEventAsync("tengu_marketplace_updated", { marketplace_name: o }),
          await logFeatureOkAsync("cli_marketplace_update"),
          {
            messages: w,
            summary: `${L.tick} Successfully updated marketplace: ${o}`,
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
      w = await gl(d);
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
      (await renderAndWaitForExit(a, e(t, { children: "No marketplaces configured" })),
        process.exit(0));
      return;
    }
    ((c = "Updating marketplaces..."),
      (k = r7n(d)
        .then(async ({ policyRefused: P, failed: R, attempted: C }) => {
          if (
            ((p = R.length > 0 ? 1 : 0),
            fu(d),
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
    e(Dn, { fallback: e(t, { children: c }), children: e(Se, { promise: k }) }),
  ),
    await a.waitUntilExit(),
    await exitAfterAnalyticsFlush(p));
}
function ve(Pa) {
  let xe = _(4),
    { promise: Sa } = Pa,
    ye = kn(Sa),
    le;
  if (xe[0] !== ye) ((le = ff(ye)), (xe[0] = ye), (xe[1] = le));
  else le = xe[1];
  let Oe;
  if (xe[2] !== le)
    ((Oe = e(RenderOnceAndExit, { children: r(t, { children: [L.tick, " ", le] }) })),
      (xe[2] = le),
      (xe[3] = Oe));
  else Oe = xe[3];
  return Oe;
}
function Ee(a) {
  return jB.some((o) => o === a);
}
function me(a) {
  let o = a.scope || "user";
  if (a.cowork && o !== "user") cliError("--cowork can only be used with user scope");
  if (!Ee(o)) cliError(`Invalid scope: ${o}. Must be one of: ${jB.join(", ")}.`);
  return o;
}
function Ie(a) {
  let o;
  if (a.scope) {
    if (!Ee(a.scope))
      cliError(`Invalid scope "${a.scope}". Valid scopes: ${jB.join(", ")}`);
    o = a.scope;
  }
  if (a.cowork && o !== void 0 && o !== "user")
    cliError("--cowork can only be used with user scope");
  if (a.cowork && o === void 0) o = "user";
  return o;
}
function ae(a, o, s) {
  let { name: d, marketplace: c } = J3(o);
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
      if (p) dle(p.outcome);
      return Lae(N, "install", o);
    },
    v = await FNn(
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
    if (p) dle(p.outcome);
    (logFeatureSad("cli_plugin_install", "command_source_declined"),
      await renderAndWaitForExit(a, e(t, { children: "Aborted." })),
      await xn(1));
    return;
  }
  let P = v?.grantKey,
    R = await NNn(o, { yes: s.yes, scope: c, resolvedMarketplace: k }, d).catch(
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
      dle(p.outcome);
    (await renderAndWaitForExit(a, e(t, { children: "Aborted \u2014 the command was not run." })),
      await xn(1));
    return;
  }
  let C = $Nn(o, c, s.config, P, R, d, p).then(
    (N) => (logFeatureOk("cli_plugin_install"), N),
  );
  (a.render(
    e(Dn, {
      fallback: e(t, { children: wr(`Installing plugin "${o}"...`) }),
      children: e(ve, { promise: C }),
    }),
  ),
    await a.waitUntilExit(),
    await xn(0));
}
async function pluginUninstallHandler(a, o, s, d) {
  if (s.cowork) SB(!0);
  let c = me(s);
  ae("tengu_plugin_uninstall_command", o, fromEnum(c));
  let p = await UNn(o, c, s.keepData, s.prune, s.yes, d);
  (await renderAndWaitForExit(a, e(t, { children: ff(s.prune ? p : `${L.tick} ${p}`) })),
    await logFeatureOkAsync("cli_plugin_uninstall"),
    await exitAfterAnalyticsFlush(0));
}
async function pluginPruneHandler(a, o, s) {
  if (o.cowork) SB(!0);
  let d = me(o);
  logEvent("tengu_plugin_prune_command", { scope: fromEnum(d), dry_run: o.dryRun ?? !1 });
  let c = await BNn(d, { dryRun: o.dryRun, yes: o.yes }, s);
  (await renderAndWaitForExit(a, e(t, { children: ff(c) })),
    await logFeatureOkAsync("cli_plugin_prune"),
    await exitAfterAnalyticsFlush(0));
}
async function pluginEnableHandler(a, o, s, d) {
  if (s.cowork) SB(!0);
  let c = Ie(s);
  ae("tengu_plugin_enable_command", o, fromEnum(c ?? "auto"));
  let p;
  try {
    if ((await qwe(), Rot(), (p = await f0e(o, c, d)), !p.success))
      throw new Dae(p.message);
  } catch (k) {
    return await Lae(k, "enable", o);
  }
  (await renderAndWaitForExit(a, r(t, { children: [L.tick, " ", ff(p.message)] })),
    await logEventAsync("tengu_plugin_enabled_cli", {
      ...xy(p.pluginId || o, Xf()),
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
    (logEvent("tengu_plugin_disable_command", {}), Rot(), (c = await WNn(d)));
  } else {
    let p = Ie(s);
    (ae("tengu_plugin_disable_command", o, fromEnum(p ?? "auto")),
      await qwe(),
      Rot(),
      (c = await jNn(o, p, d)));
  }
  (await renderAndWaitForExit(a, e(t, { children: ff(c) })),
    await logFeatureOkAsync("cli_plugin_disable"),
    await exitAfterAnalyticsFlush(0));
}
async function pluginUpdateHandler(a, o, s) {
  if (o.cowork) SB(!0);
  ae("tengu_plugin_update_command", a);
  let d = "user";
  if (o.scope) {
    if (!n9e.includes(o.scope))
      cliError(`Invalid scope "${o.scope}". Valid scopes: ${n9e.join(", ")}`);
    d = o.scope;
  }
  if (o.cowork && d !== "user") cliError("--cowork can only be used with user scope");
  await GNn(a, d, { yes: o.yes }, s);
}
async function pluginDetailsHandler(a, o, s, d, c) {
  if (s.cowork) SB(!0);
  (Rot(), logEvent("tengu_plugin_details_command", {}));
  let {
      getPluginInventory: p,
      computePluginTokenCost: k,
      scaleCharsToTokens: w,
    } = await import("../MCP客户端/chunk-4xr0rjb4.js"),
    { formatTokenEstimate: v } = await import("../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js");
  await qwe();
  let { enabled: P, disabled: R } = await Ph(isHoverRestEnabled() ? d : void 0, c),
    C = J3(o),
    N = C.marketplace ? XSt(C.name, C.marketplace) : C.name,
    A = Ul(C.marketplace) ? (I) => xi(I) === xi(N) : (I) => $y(I, N),
    m = [...P, ...R].find((I) => A(C.marketplace ? I.source : I.name));
  if (!m) {
    logFeatureBad("cli_plugin_details", "not_found");
    let I = `Plugin "${o}" not found. Run \`claude plugin list\` to see installed plugins, or pass --plugin-dir <path> to load one from disk.`;
    if (s.json) return cliError(ff(I));
    let j = await a();
    (await renderAndWaitForExit(j, e(t, { children: ff(I) })), process.exit(1));
  }
  let H = Lu(m.source) ?? np,
    E = s.models?.length ? s.models : [getMainLoopModel()],
    B;
  try {
    let I = await p(m, H);
    B = await k(I, E, m.name);
  } catch (I) {
    (logError(dt(ge(I), "plugin details: inventory/token-cost failed")),
      logFeatureBad("cli_plugin_details", "inventory_failed"));
    let j = `${L.cross} Could not load details for "${m.name}": ${l(I)}`;
    if (s.json) return cliError(ff(j));
    let Q = await a();
    (await renderAndWaitForExit(Q, e(t, { children: ff(j) })), process.exit(1));
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
    U = sd(m),
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
  await renderAndWaitForExit(q, e(t, { children: X(O) }));
}
function X(a) {
  return a.map(wr).join(`
`);
}
function ne(a) {
  return Jlr(b(a, null, 2));
}
function ue(a, o) {
  let s = (k) => jI(k.source) === a,
    d = o.plugins.filter(s),
    c = o.errors.filter(s),
    p = o.warnings.filter(s);
  return {
    plugins: d,
    errors: c,
    warnings: p,
    standaloneErrorRows: c.filter((k) => !d.some((w) => ZPt(k, w))),
    standaloneWarningRows: p.filter((k) => !d.some((w) => eOt(k, w))),
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
  for (let c of s) d.push(`  ${L.warning} ${K$(c)}`, "");
  for (let c of a.plugins) {
    let p = a.errors.filter((v) => ZPt(v, c)),
      k = a.warnings.filter((v) => eOt(v, c)),
      w =
        c.enabled === !1
          ? `${L.cross} disabled`
          : p.length > 0
            ? `${L.cross} loaded with errors`
            : `${L.tick} loaded`;
    if (
      (d.push(`  ${L.pointer} ${c.source}`),
      d.push(`    Version: ${c.manifest.version ?? "unknown"}`),
      a.showScope)
    )
      d.push(`    Scope: ${a.scopeOf(c)}`);
    (d.push(`    Path: ${a.pathOf(c)}`), d.push(`    Status: ${w}`));
    for (let v of p) d.push(`    Error: ${vm(v)}`);
    for (let v of k) d.push(`    Note: ${K$(v)}`);
    d.push("");
  }
  for (let c of o)
    d.push(`  ${L.pointer} ${c.source}: ${L.cross} ${vm(c)}`, "");
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
        (await wM(d, void 0, o, void 0, { readOnlyListing: !0 })),
      p = a.errors.filter((w) => ZPt(w, d)).map(vm),
      k = a.warnings.filter((w) => eOt(w, d)).map(K$);
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
      errors: [vm(d)],
    });
  for (let d of a.standaloneWarningRows)
    s.push({
      id: d.source,
      version: "unknown",
      scope: a.standaloneWarningScope,
      enabled: d.type === "synced-plugin-shadowed",
      installPath: "",
      notes: [K$(d)],
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

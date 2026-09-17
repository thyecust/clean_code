// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 253 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { sanitizeImportField, sanitizeImportMessage, writeImportFallbackSkill, scanImportSources } from "../../01-核心基础设施/设置-配置/agent-import.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { lE } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-dhg42t8r.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { isAutoImportableItem, classifyImportItem, compareImportItems } from "../../01-核心基础设施/共享小工具-未细化/import-items.js";
import { E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function pt(mt) {
  return mt.result.items.map((Qt) => ({ item: Qt, source: mt.displayName }));
}
function lt(Zt, Ht) {
  return compareImportItems(Zt.item, Ht.item);
}
function ct(Yt) {
  return Yt.result.unmappable;
}
function dt(_t) {
  return isAutoImportableItem(_t.item);
}
function ut(Lt) {
  return Lt.item.id;
}
function ft(Oe) {
  return {
    sourceId: Oe.sourceId,
    displayName: Oe.displayName,
    unmappable: Oe.result.unmappable,
  };
}
function gt(At) {
  return classifyImportItem(At.item) === "warned";
}
function ht(Kt) {
  return classifyImportItem(Kt.item) === "project";
}
function yt(zt) {
  return zt.displayName;
}
function bt(eo, to) {
  return r(Text, { dimColor: !0, children: ["\u2022 ", sanitizeImportField(eo.label)] }, to);
}
var H = "import:fallback-skill",
  me = () => {};
function ke(Xt) {
  let s = _(67),
    {
      scans: v,
      scanWarnings: ye,
      dryRun: R,
      autoConfirm: qe,
      storageV5: Ne,
      onFinish: xe,
    } = Xt,
    Ee;
  if (s[0] !== ye) ((Ee = ye === void 0 ? [] : ye), (s[0] = ye), (s[1] = Ee));
  else Ee = s[1];
  let We = Ee,
    U = qe === void 0 ? !1 : qe,
    g,
    a,
    Qe;
  if (s[2] !== v)
    ((g = v.flatMap(pt).sort(lt)),
      (a = v.flatMap(ct)),
      (Qe = g.filter(dt).map(ut)),
      (s[2] = v),
      (s[3] = g),
      (s[4] = a),
      (s[5] = Qe));
  else ((g = s[3]), (a = s[4]), (Qe = s[5]));
  let A = Qe,
    [Ze, He] = d("items"),
    Ye;
  if (s[6] === MEMO_CACHE_SENTINEL) ((Ye = []), (s[6] = Ye));
  else Ye = s[6];
  let [De, Jt] = d(Ye),
    Ve = C(!1),
    _e;
  if (s[7] !== xe)
    ((_e = (Ut) => {
      (He("done"),
        xe(
          Ut.join(`
`),
        ));
    }),
      (s[7] = xe),
      (s[8] = _e));
  else _e = s[8];
  let T = _e,
    Le;
  if (s[9] !== T)
    ((Le = () => {
      if (Ve.current) {
        return;
      }
      T(["No items imported."]);
    }),
      (s[9] = T),
      (s[10] = Le));
  else Le = s[10];
  let b = Le,
    Ae;
  if (
    s[11] !== g ||
    s[12] !== a.length ||
    s[13] !== U ||
    s[14] !== R ||
    s[15] !== T ||
    s[16] !== We ||
    s[17] !== v ||
    s[18] !== Ne
  )
    ((Ae = async function w(Ke, Xe) {
      if (Ve.current) {
        return;
      }
      if (((Ve.current = !0), Ke.length === 0 && !Xe && !U)) {
        return T(["No items imported."]);
      }
      let q = [];
      let Je = [];
      let K = 0;
      for (const Bt of Ke) {
        let ne = g.find((Ft) => Ft.item.id === Bt);
        if (!ne) {
          continue;
        }
        try {
          let Ue = await ne.item.apply({ dryRun: R, storageV5: Ne });
          if (typeof Ue === "string") {
            if ((q.push(`  \u2713 ${sanitizeImportMessage(Ue)}`), ne.item.warning))
              Je.push(sanitizeImportMessage(ne.item.warning));
            K++;
          } else q.push(`  - skipped ${sanitizeImportMessage(Ue.skipped)}`);
        } catch (be) {
          let Gt = be;
          q.push(`  \u2717 ${sanitizeImportField(ne.item.label)}: ${sanitizeImportMessage(l(Gt))}`);
        }
      }
      let ze = !1;
      if (Xe) {
        try {
          let Be = await writeImportFallbackSkill(v.map(ft), { dryRun: R });
          if (typeof Be === "string") (q.push(`  \u2713 ${sanitizeImportMessage(Be)}`), (ze = !0));
          else q.push(`  - skipped ${sanitizeImportMessage(Be.skipped)}`);
        } catch ($e) {
          let Ot = $e;
          q.push(`  \u2717 fallback skill: ${sanitizeImportMessage(l(Ot))}`);
        }
      }
      logEvent("tengu_import_apply", { imported: K, dry_run: R ? 1 : 0 });
      let Mt = R
        ? `Dry run \u2014 would import ${K} ${pluralize(K, "item")}:`
        : `Imported ${K} ${pluralize(K, "item")}:`;
      let B = [];
      for (const Pt of We) B.push(`  \u26A0 ${Pt}`);
      if (Je.length > 0) {
        B.push("", "Review these:");
        for (const Rt of Je) B.push(`  \u26A0 ${Rt}`);
      }
      if (ze && !R)
        B.push(
          "",
          "Run /import-to-claude-code to finish the unmapped items interactively.",
        );
      else if (a.length > 0 && !Xe)
        B.push(
          "",
          `${a.length} unmapped ${pluralize(a.length, "item")} were skipped (re-run /import to generate the helper skill).`,
        );
      if (U) {
        let Fe = countMatching(g, gt);
        let Ge = countMatching(g, ht);
        if (Fe > 0)
          B.push(
            `  \u26A0 ${Fe} warning-flagged ${pluralize(Fe, "item")} held back \u2014 re-run without --yes to review.`,
          );
        if (Ge > 0)
          B.push(
            `  \u26A0 ${Ge} project-level ${pluralize(Ge, "item")} held back \u2014 re-run without --yes to review.`,
          );
      }
      T([Mt, ...q, ...B]);
    }),
      (s[11] = g),
      (s[12] = a.length),
      (s[13] = U),
      (s[14] = R),
      (s[15] = T),
      (s[16] = We),
      (s[17] = v),
      (s[18] = Ne),
      (s[19] = Ae));
  else Ae = s[19];
  let w = Ae,
    be;
  if (s[20] !== a.length || s[21] !== U || s[22] !== A || s[23] !== w)
    ((be = () => {
      if (U) w(A, a.length > 0);
    }),
      (s[20] = a.length),
      (s[21] = U),
      (s[22] = A),
      (s[23] = w),
      (s[24] = be));
  else be = s[24];
  let $e;
  if (s[25] === MEMO_CACHE_SENTINEL) (($e = []), (s[25] = $e));
  else $e = s[25];
  E(be, $e);
  let et;
  if (s[26] !== a.length || s[27] !== w)
    ((et = function ie(tt) {
      if (a.length === 0) {
        w(tt, !1);
        return;
      }
      (Jt(tt), He("unmapped"));
    }),
      (s[26] = a.length),
      (s[27] = w),
      (s[28] = et));
  else et = s[28];
  let ie = et,
    ot;
  if (s[29] !== w || s[30] !== De)
    ((ot = function re(Tt) {
      w(De, Tt.includes(H));
    }),
      (s[29] = w),
      (s[30] = De),
      (s[31] = ot));
  else ot = s[31];
  let re = ot;
  if (Ze === "done" || U) {
    return null;
  }
  let nt;
  if (s[32] !== v) ((nt = v.map(yt).join(", ")), (s[32] = v), (s[33] = nt));
  else nt = s[33];
  let it = nt,
    rt;
  if (s[34] === MEMO_CACHE_SENTINEL)
    ((rt = e(Box, {
      paddingX: 1,
      children: e(Text, {
        dimColor: !0,
        italic: !0,
        children: r(DotSeparatedList, {
          children: [
            e(KeybindingHint, { chord: "space", action: "select" }),
            e(KeybindingHint, { chord: "enter", action: "confirm" }),
          ],
        }),
      }),
    })),
      (s[34] = rt));
  else rt = s[34];
  let st = rt;
  if (Ze === "unmapped") {
    const Ie = a.length;
    let se;
    if (s[35] !== a.length)
      ((se = pluralize(a.length, "item")), (s[35] = a.length), (s[36] = se));
    else se = s[36];
    const O = `${Ie} ${se} from ${it} could not be mapped automatically.`;
    let V;
    if (s[37] !== a) ((V = a.map(bt)), (s[37] = a), (s[38] = V));
    else V = s[38];
    let M;
    if (s[39] !== V)
      ((M = e(Box, { flexDirection: "column", paddingLeft: 1, children: V })),
        (s[39] = V),
        (s[40] = M));
    else M = s[40];
    let ae, Q;
    if (s[41] === MEMO_CACHE_SENTINEL)
      ((ae = [
        {
          label:
            "Generate /import-to-claude-code skill to finish these interactively",
          value: H,
        },
      ]),
        (Q = [H]),
        (s[41] = ae),
        (s[42] = Q));
    else ((ae = s[41]), (Q = s[42]));
    let Z;
    if (s[43] !== b || s[44] !== re)
      ((Z = e(lE, {
        options: ae,
        defaultValue: Q,
        onSubmit: re,
        onCancel: b,
        onDownFromLastItem: me,
        hideIndexes: !0,
      })),
        (s[43] = b),
        (s[44] = re),
        (s[45] = Z));
    else Z = s[45];
    let at;
    if (s[46] !== b || s[47] !== O || s[48] !== M || s[49] !== Z)
      ((at = r(N, {
        children: [
          r(de, {
            title: "Import to Claude Code",
            subtitle: O,
            color: "success",
            onCancel: b,
            hideInputGuide: !0,
            children: [M, Z],
          }),
          st,
        ],
      })),
        (s[46] = b),
        (s[47] = O),
        (s[48] = M),
        (s[49] = Z),
        (s[50] = at));
    else at = s[50];
    return at;
  }
  let Ie;
  if (s[51] === MEMO_CACHE_SENTINEL) ((Ie = { user: "global", project: "local" }), (s[51] = Ie));
  else Ie = s[51];
  let qt = Ie,
    se;
  if (s[52] !== g) {
    let O;
    if (s[54] === MEMO_CACHE_SENTINEL)
      ((O = (V) => {
        let { item: z, source: Et } = V;
        return {
          label: `[${Et}] ${sanitizeImportField(z.label)} (${qt[z.scope]})${z.warning ? " \u26A0" : ""}`,
          ...(z.description && { description: sanitizeImportField(z.description) }),
          value: z.id,
        };
      }),
        (s[54] = O));
    else O = s[54];
    se = g.map(O);
    ((s[52] = g), (s[53] = se));
  } else se = s[53];
  let we = se;
  const O = g.length;
  let V;
  if (s[55] !== g.length)
    ((V = pluralize(g.length, "item")), (s[55] = g.length), (s[56] = V));
  else V = s[56];
  const M = `Found ${O} importable ${V} from ${it}.`;
  let ae;
  if (s[57] === MEMO_CACHE_SENTINEL)
    ((ae = e(Text, { children: "Select what to import:" })), (s[57] = ae));
  else ae = s[57];
  let Q;
  if (s[58] !== b || s[59] !== A || s[60] !== ie || s[61] !== we)
    ((Q = e(lE, {
      options: we,
      defaultValue: A,
      visibleOptionCount: we.length,
      onSubmit: ie,
      onCancel: b,
      onDownFromLastItem: me,
      hideIndexes: !0,
    })),
      (s[58] = b),
      (s[59] = A),
      (s[60] = ie),
      (s[61] = we),
      (s[62] = Q));
  else Q = s[62];
  let Z;
  if (s[63] !== b || s[64] !== M || s[65] !== Q)
    ((Z = r(N, {
      children: [
        r(de, {
          title: "Import to Claude Code",
          subtitle: M,
          color: "success",
          onCancel: b,
          hideInputGuide: !0,
          children: [ae, Q],
        }),
        st,
      ],
    })),
      (s[63] = b),
      (s[64] = M),
      (s[65] = Q),
      (s[66] = Z));
  else Z = s[66];
  return Z;
}
async function mo(j, pe, X) {
  let S = (X ?? "").split(/\s+/).filter(Boolean),
    le = S.includes("--dry-run"),
    ce = S.some((c) => c === "--yes" || c.startsWith("--yes=")),
    k = S.find((c) => !c.startsWith("-")),
    { scans: u, error: Y, warnings: L } = await scanImportSources({ from: k });
  if (Y || u.length === 0)
    return (
      j(Y ?? "No importable agent config found.", { display: "system" }),
      null
    );
  if (u.every((c) => c.result.items.length === 0)) {
    let c = u.flatMap((I) => I.result.unmappable),
      ee = c.filter((I) => I.scope === "user"),
      te = c.length - ee.length;
    return (
      j(
        [
          "Detected agent config, but found nothing importable.",
          ...(L ?? []),
          ...ee.map((I) => `  - ${sanitizeImportField(I.label)}: ${I.reason}`),
          ...(te > 0
            ? [
                `  - ${te} item(s) from project-level config (review the project's .codex/.gemini dir directly)`,
              ]
            : []),
        ].join(`
`),
        { display: "system" },
      ),
      null
    );
  }
  return e(ke, {
    scans: u,
    scanWarnings: L,
    dryRun: le,
    autoConfirm: ce,
    storageV5: pe.storageV5,
    onFinish: (c) => j(c, { display: "system" }),
  });
}
export { mo as call };

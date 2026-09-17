// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { withTimeout } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { z } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { buildVertexBaseUrl } from "./chunk-5ndhfaq9.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { DEFAULT_3P_SONNET_KEY, DEFAULT_3P_HAIKU_KEY, DEFAULT_VERTEX_OPUS_KEY, DEFAULT_3P_FABLE_KEY, GC, Rw } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Gu } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { getSettingsFilePathForSource, updateSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { Xt, to } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { WizardProvider, useWizard, WizardStepFrame } from "../向导(Wizard)UI/向导(Wizard)UI.7xe5wk62.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { StatusIndicator } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { buildVertexGoogleAuth, suppressVertexAuthRejection, vertexResidualCredentialPins } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { ConfirmPrompt } from "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import { yo } from "../状态栏-主题/chunk-jrr487ty.js";
import { ErrorMessage } from "../../01-核心基础设施/共享小工具-未细化/error-message.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import { ActionKeybindingHint } from "../../01-核心基础设施/共享小工具-未细化/action-keybinding-hint.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Dn, kn, E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var H = {
  AUTH_METHOD: 0,
  SERVICE_ACCOUNT: 1,
  PROJECT: 2,
  REGION: 3,
  VERIFY: 4,
  PIN_MODELS: 5,
  CONFIRM: 6,
};
function ht() {
  let rt = _(10),
    { goBack: go, goToStep: Co, updateWizardData: xo, wizardData: Do } = useWizard(),
    vr;
  if (rt[0] === MEMO_CACHE_SENTINEL)
    ((vr = [
      { label: "Application Default Credentials (gcloud auth)", value: "adc" },
      { label: "Service account key file", value: "serviceAccount" },
      {
        label: "Use credentials already in my environment",
        value: "environment",
      },
    ]),
      (rt[0] = vr));
  else vr = rt[0];
  let Si = vr,
    _r;
  if (rt[1] === MEMO_CACHE_SENTINEL)
    ((_r = {
      adc: H.PROJECT,
      serviceAccount: H.SERVICE_ACCOUNT,
      environment: H.PROJECT,
    }),
      (rt[1] = _r));
  else _r = rt[1];
  let Vi = _r,
    Or;
  if (rt[2] !== Co || rt[3] !== xo)
    ((Or = (Ni) => {
      let Er = Ni;
      (xo({ authMethod: Er }), Co(Vi[Er]));
    }),
      (rt[2] = Co),
      (rt[3] = xo),
      (rt[4] = Or));
  else Or = rt[4];
  let ko = Or,
    Tr;
  if (rt[5] === MEMO_CACHE_SENTINEL)
    ((Tr = e(t, {
      dimColor: !0,
      children:
        "Claude Code uses the standard GCP credential chain. Pick the method you already use with gcloud or in your deployment.",
    })),
      (rt[5] = Tr));
  else Tr = rt[5];
  let br;
  if (rt[6] !== go || rt[7] !== ko || rt[8] !== Do.authMethod)
    ((br = e(WizardStepFrame, {
      subtitle: "How do you authenticate to Google Cloud?",
      children: r(o, {
        flexDirection: "column",
        gap: 1,
        children: [
          Tr,
          e(ve, {
            options: Si,
            defaultValue: Do.authMethod,
            onChange: ko,
            onCancel: go,
          }),
        ],
      }),
    })),
      (rt[6] = go),
      (rt[7] = ko),
      (rt[8] = Do.authMethod),
      (rt[9] = br));
  else br = rt[9];
  return br;
}
F();
function jr(Zi) {
  return Zi[1] !== void 0;
}
function zr(Ao) {
  let [Mr, ea] = Ao;
  return r(
    t,
    {
      children: ["  ", e(t, { color: "suggestion", children: Mr }), " = ", ea],
    },
    Mr,
  );
}
function Io(n) {
  let s = {
    CLAUDE_CODE_USE_VERTEX: "1",
    CLAUDE_CODE_USE_BEDROCK: void 0,
    CLAUDE_CODE_USE_FOUNDRY: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_AWS: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD: void 0,
    CLAUDE_CODE_USE_MANTLE: void 0,
    ANTHROPIC_VERTEX_PROJECT_ID: n.projectId,
    CLOUD_ML_REGION: n.region,
    GOOGLE_APPLICATION_CREDENTIALS: void 0,
    ANTHROPIC_DEFAULT_SONNET_MODEL: void 0,
    ANTHROPIC_DEFAULT_OPUS_MODEL: void 0,
    ANTHROPIC_DEFAULT_HAIKU_MODEL: void 0,
    ANTHROPIC_DEFAULT_FABLE_MODEL: void 0,
    ANTHROPIC_SMALL_FAST_MODEL: void 0,
  };
  if (n.authMethod === "serviceAccount")
    s.GOOGLE_APPLICATION_CREDENTIALS = n.keyFile;
  if (n.pinSonnet) s.ANTHROPIC_DEFAULT_SONNET_MODEL = n.pinSonnet;
  if (n.pinOpus) s.ANTHROPIC_DEFAULT_OPUS_MODEL = n.pinOpus;
  if (n.pinFable) s.ANTHROPIC_DEFAULT_FABLE_MODEL = n.pinFable;
  if (n.pinHaiku) s.ANTHROPIC_DEFAULT_HAIKU_MODEL = n.pinHaiku;
  return s;
}
function At(Ao) {
  let ne = _(30),
    { onComplete: vo } = Ao,
    { storageV5: _o } = useStorageV5Context(),
    { goBack: Oo, wizardData: T } = useWizard(),
    [Eo, Qi] = d(null),
    Pr;
  if (ne[0] === MEMO_CACHE_SENTINEL)
    ((Pr = Gu(getSettingsFilePathForSource("userSettings") ?? "~/.claude/settings.json")), (ne[0] = Pr));
  else Pr = ne[0];
  let Ir = Pr,
    Rr;
  if (ne[1] !== T) ((Rr = Io(T)), (ne[1] = T), (ne[2] = Rr));
  else Rr = ne[2];
  let $e = Rr,
    Sr;
  if (ne[3] !== $e)
    ((Sr = Object.entries($e).filter(jr)), (ne[3] = $e), (ne[4] = Sr));
  else Sr = ne[4];
  let To = Sr,
    bo = C(!1),
    Vr;
  if (
    ne[5] !== $e ||
    ne[6] !== vo ||
    ne[7] !== _o ||
    ne[8] !== T.authMethod ||
    ne[9] !== T.pinFable ||
    ne[10] !== T.pinHaiku ||
    ne[11] !== T.pinOpus ||
    ne[12] !== T.pinSonnet ||
    ne[13] !== T.verifiedIdentity
  )
    ((Vr = async () => {
      if (bo.current) {
        return;
      }
      bo.current = !0;
      let { error: Nr } = await updateSettingsForSource("userSettings", { env: $e }, void 0, _o);
      if (Nr) {
        ((bo.current = !1), Qi(Nr.message));
        return;
      }
      (logEvent("tengu_vertex_setup_complete", {
        auth_method: fromEnumOpt(T.authMethod),
        pinned_models: Boolean(
          T.pinSonnet || T.pinOpus || T.pinFable || T.pinHaiku,
        ),
        verified: Boolean(T.verifiedIdentity),
      }),
        vo(
          `Vertex AI configuration saved to ${Ir}.${T.authMethod === "adc" ? " When your ADC token expires, run `gcloud auth application-default login` \u2014 Claude Code picks up refreshed credentials automatically." : ""}`,
        ));
    }),
      (ne[5] = $e),
      (ne[6] = vo),
      (ne[7] = _o),
      (ne[8] = T.authMethod),
      (ne[9] = T.pinFable),
      (ne[10] = T.pinHaiku),
      (ne[11] = T.pinOpus),
      (ne[12] = T.pinSonnet),
      (ne[13] = T.verifiedIdentity),
      (ne[14] = Vr));
  else Vr = ne[14];
  let Po = Vr,
    wr;
  if (ne[15] === MEMO_CACHE_SENTINEL)
    ((wr = r(t, {
      children: ["These will be written to ", Ir, " under env:"],
    })),
      (ne[15] = wr));
  else wr = ne[15];
  let Ct;
  if (ne[16] !== To)
    ((Ct = e(o, { flexDirection: "column", children: To.map(zr) })),
      (ne[16] = To),
      (ne[17] = Ct));
  else Ct = ne[17];
  let yt;
  if (ne[18] !== T.verifiedIdentity)
    ((yt =
      T.verifiedIdentity &&
      r(t, {
        dimColor: !0,
        children: [
          e(StatusIndicator, { status: "success", withSpace: !0 }),
          "Verified as ",
          T.verifiedIdentity,
        ],
      })),
      (ne[18] = T.verifiedIdentity),
      (ne[19] = yt));
  else yt = ne[19];
  let xt;
  if (ne[20] !== Eo)
    ((xt = e(ErrorMessage, { error: Eo })), (ne[20] = Eo), (ne[21] = xt));
  else xt = ne[21];
  let kt;
  if (ne[22] !== Oo || ne[23] !== Po)
    ((kt = e(ConfirmPrompt, {
      confirmLabel: "Save",
      cancelLabel: "Cancel",
      onConfirm: Po,
      onCancel: Oo,
    })),
      (ne[22] = Oo),
      (ne[23] = Po),
      (ne[24] = kt));
  else kt = ne[24];
  let Lr;
  if (ne[25] !== Ct || ne[26] !== yt || ne[27] !== xt || ne[28] !== kt)
    ((Lr = e(WizardStepFrame, {
      subtitle: "Confirm and save",
      children: r(o, {
        flexDirection: "column",
        gap: 1,
        children: [wr, Ct, yt, xt, kt],
      }),
    })),
      (ne[25] = Ct),
      (ne[26] = yt),
      (ne[27] = xt),
      (ne[28] = kt),
      (ne[29] = Lr));
  else Lr = ne[29];
  return Lr;
}
F();
function nt() {
  return {
    sonnet: to[DEFAULT_3P_SONNET_KEY].vertex,
    opus: to[DEFAULT_VERTEX_OPUS_KEY].vertex,
    haiku: to[DEFAULT_3P_HAIKU_KEY].vertex,
    fable: to[DEFAULT_3P_FABLE_KEY].vertex,
  };
}
function _t(n) {
  let s = new Set();
  for (let c of Object.values(to))
    if (c.vertex !== null && c.vertex.toLowerCase().includes(n))
      s.add(c.vertex);
  return [...s].sort().reverse();
}
function Ro(n) {
  if (n.authMethod === "serviceAccount" && n.keyFile)
    return { kind: "keyFile", path: n.keyFile };
  return { kind: "default" };
}
var Fr = 12000;
async function Ot(n) {
  let s;
  try {
    let f = await buildVertexGoogleAuth(Ro(n), n.projectId),
      O = (async () => {
        await (await f.getClient()).getAccessToken();
      })();
    await withTimeout(O, Fr, "Timed out waiting for GCP credentials");
    let m;
    try {
      m = (await f.getCredentials()).client_email;
    } catch {
      m = void 0;
    }
    s =
      m ??
      (n.authMethod === "serviceAccount"
        ? `service account (${n.keyFile})`
        : "Application Default Credentials");
  } catch (f) {
    return { status: "error", ...Gr(f, n) };
  }
  let c = nt().haiku,
    u = await K(n, c);
  if (u.ok)
    return {
      status: "ok",
      identity: s,
      note: `Test request to ${c} succeeded.`,
    };
  switch (u.reason) {
    case "auth":
      return {
        status: "error",
        error:
          "Got a token, but Vertex AI rejected it. The credential may lack the cloud-platform scope.",
      };
    case "permission":
      return {
        status: "error",
        error: `Permission denied calling Vertex AI in project "${n.projectId}". The principal needs the aiplatform.endpoints.predict permission (Vertex AI User role), and the Vertex AI API must be enabled.`,
      };
    case "model":
      return {
        status: "ok",
        identity: s,
        note: `Credentials work, but ${c} returned not-found in ${n.region}. Pin a model you have access to on the next step, or try the 'global' region.`,
      };
    case "network":
      return {
        status: "error",
        error: `Could not reach Vertex AI in region "${n.region}". Check the region name and your network.`,
      };
    case "other":
      return {
        status: "ok",
        identity: s,
        note: `Credentials work, but the test request to ${c} failed. You can pin a different model on the next step.`,
      };
  }
}
async function K(n, s) {
  let c;
  try {
    c = await Wr(n);
  } catch {
    return { ok: !1, reason: "auth" };
  }
  try {
    return (
      await c.messages.create({
        model: Xt(s),
        max_tokens: 1,
        messages: [{ role: "user", content: "." }],
      }),
      { ok: !0 }
    );
  } catch (u) {
    let f = u?.status;
    if (f === 401) return { ok: !1, reason: "auth" };
    if (f === 403) return { ok: !1, reason: "permission" };
    if (f === 400 || f === 404) return { ok: !1, reason: "model" };
    if (f === 429) return { ok: !0 };
    if (f === void 0) return { ok: !1, reason: "network" };
    return { ok: !1, reason: "other" };
  }
}
async function Wr(n) {
  let [{ AnthropicVertex: s }, { getProxyFetchOptions: c }] = await Promise.all(
      [import("./AnthropicVertex.1thfsdgf.js"), import("../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js")],
    ),
    u = await buildVertexGoogleAuth(Ro(n), n.projectId);
  return suppressVertexAuthRejection(
    new s({
      region: n.region,
      projectId: n.projectId,
      googleAuth: u,
      maxRetries: 0,
      defaultHeaders: vertexResidualCredentialPins(),
      ...Rw,
      timeout: 15000,
      fetchOptions: c({ url: a.ANTHROPIC_VERTEX_BASE_URL || buildVertexBaseUrl(n.region) }),
    }),
  );
}
var vt = "gcloud auth application-default login";
function Gr(n, s) {
  let c = n?.message ?? String(n);
  if (s.authMethod === "serviceAccount" && /ENOENT|no such file/i.test(c))
    return { error: `Service account key file not found: ${s.keyFile}` };
  if (/Could not load the default credentials/i.test(c))
    return s.authMethod === "adc"
      ? { error: "No Application Default Credentials found. Run:", command: vt }
      : {
          error:
            "No GCP credentials found in the environment. Set GOOGLE_APPLICATION_CREDENTIALS or run gcloud auth application-default login.",
        };
  if (/invalid_grant|Token has been expired|reauth/i.test(c)) {
    if (s.authMethod === "serviceAccount")
      return {
        error:
          "Service account credentials have been revoked or expired. Obtain a new key file from GCP IAM (IAM \u2192 Service Accounts \u2192 Keys \u2192 Add Key).",
      };
    if (s.authMethod === "adc")
      return { error: "GCP credentials expired. Run:", command: vt };
    return {
      error:
        "GCP credentials in the environment have expired or been revoked. Refresh them (gcloud auth application-default login for ADC, or replace the GOOGLE_APPLICATION_CREDENTIALS key file).",
    };
  }
  if (/Unable to detect a Project Id/i.test(c))
    return {
      error:
        "Could not determine a GCP project from the credentials. Go back and set the project ID explicitly.",
    };
  if (/Timed out waiting for GCP/i.test(c))
    return {
      error:
        "Timed out resolving GCP credentials (no ADC, no key file, and no GCE metadata server).",
      ...(s.authMethod === "adc" && { command: vt }),
    };
  return { error: c };
}
function Vn(An) {
  return [An, process.env[Xo[An]]?.trim() || void 0];
}
function Nn(La) {
  return { ...La, sonnet: "pending" };
}
function wn(Ma) {
  return { ...Ma, opus: "pending" };
}
function Ln(ja) {
  return { ...ja, haiku: "pending" };
}
function Mn(za) {
  return { ...za, fable: "pending" };
}
var L = ["sonnet", "opus", "haiku", "fable"],
  Re = { sonnet: "Sonnet", opus: "Opus", haiku: "Haiku", fable: "Fable" },
  Xo = {
    sonnet: "ANTHROPIC_DEFAULT_SONNET_MODEL",
    opus: "ANTHROPIC_DEFAULT_OPUS_MODEL",
    haiku: "ANTHROPIC_DEFAULT_HAIKU_MODEL",
    fable: "ANTHROPIC_DEFAULT_FABLE_MODEL",
  };
function Qo(n) {
  return /\[1m\]$/i.test(n) ? n : `${n}[1m]`;
}
var ut = {
  auth: "auth failed",
  permission: "no aiplatform.endpoints.predict permission",
  model: "not enabled in this project",
  network: "unreachable",
  other: "request failed",
};
function Bt() {
  let A = _(71),
    { goBack: So, goNext: Vo, updateWizardData: Et, wizardData: W } = useWizard(),
    Hr;
  if (A[0] === MEMO_CACHE_SENTINEL) ((Hr = nt()), (A[0] = Hr));
  else Hr = A[0];
  let Br = Hr,
    $r;
  if (A[1] === MEMO_CACHE_SENTINEL) (($r = Object.fromEntries(L.map(Vn))), (A[1] = $r));
  else $r = A[1];
  let Kr = $r,
    qr;
  if (A[2] === MEMO_CACHE_SENTINEL)
    ((qr = () => Object.fromEntries(L.map((No) => [No, Kr[No] ?? Br[No]]))),
      (A[2] = qr));
  else qr = A[2];
  let [g, va] = d(qr),
    Yr;
  if (A[3] === MEMO_CACHE_SENTINEL)
    ((Yr = {
      sonnet: "pending",
      opus: "pending",
      haiku: "pending",
      fable: "pending",
    }),
      (A[3] = Yr));
  else Yr = A[3];
  let [j, Ae] = d(Yr),
    [Jr, wo] = d("summary"),
    Xr;
  if (A[4] !== g.sonnet || A[5] !== W)
    ((Xr = () => {
      let Qr = !1;
      return (
        Ae(Nn),
        K(W, g.sonnet).then((_a) => {
          if (!Qr) Ae((Oa) => ({ ...Oa, sonnet: _a }));
        }),
        () => {
          Qr = !0;
        }
      );
    }),
      (A[4] = g.sonnet),
      (A[5] = W),
      (A[6] = Xr));
  else Xr = A[6];
  let Zr;
  if (A[7] !== g.sonnet) ((Zr = [g.sonnet]), (A[7] = g.sonnet), (A[8] = Zr));
  else Zr = A[8];
  E(Xr, Zr);
  let en;
  if (A[9] !== g.opus || A[10] !== W)
    ((en = () => {
      let tn = !1;
      return (
        Ae(wn),
        K(W, g.opus).then((Ea) => {
          if (!tn) Ae((Ta) => ({ ...Ta, opus: Ea }));
        }),
        () => {
          tn = !0;
        }
      );
    }),
      (A[9] = g.opus),
      (A[10] = W),
      (A[11] = en));
  else en = A[11];
  let on;
  if (A[12] !== g.opus) ((on = [g.opus]), (A[12] = g.opus), (A[13] = on));
  else on = A[13];
  E(en, on);
  let rn;
  if (A[14] !== g.haiku || A[15] !== W)
    ((rn = () => {
      let nn = !1;
      return (
        Ae(Ln),
        K(W, g.haiku).then((ba) => {
          if (!nn) Ae((Pa) => ({ ...Pa, haiku: ba }));
        }),
        () => {
          nn = !0;
        }
      );
    }),
      (A[14] = g.haiku),
      (A[15] = W),
      (A[16] = rn));
  else rn = A[16];
  let an;
  if (A[17] !== g.haiku) ((an = [g.haiku]), (A[17] = g.haiku), (A[18] = an));
  else an = A[18];
  E(rn, an);
  let sn;
  if (A[19] !== g.fable || A[20] !== W)
    ((sn = () => {
      let cn = !1;
      return (
        Ae(Mn),
        K(W, g.fable).then((Ia) => {
          if (!cn) Ae((Ra) => ({ ...Ra, fable: Ia }));
        }),
        () => {
          cn = !0;
        }
      );
    }),
      (A[19] = g.fable),
      (A[20] = W),
      (A[21] = sn));
  else sn = A[21];
  let dn;
  if (A[22] !== g.fable) ((dn = [g.fable]), (A[22] = g.fable), (A[23] = dn));
  else dn = A[23];
  if ((E(sn, dn), Jr !== "summary")) {
    let oe = Jr.picking;
    const Ke = Br[oe];
    const qe = g[oe];
    const Ye = Kr[oe];
    let Ie;
    if (A[24] !== oe)
      ((Ie = (Sa) => {
        va((Va) => ({ ...Va, [oe]: Sa }));
        let Na = L.indexOf(oe);
        let ln = L[Na + 1];
        wo(ln ? { picking: ln } : "summary");
      }),
        (A[24] = oe),
        (A[25] = Ie));
    else Ie = A[25];
    let it;
    if (A[26] === MEMO_CACHE_SENTINEL) ((it = () => wo("summary")), (A[26] = it));
    else it = A[26];
    let at;
    if (
      A[27] !== Ke ||
      A[28] !== qe ||
      A[29] !== Ye ||
      A[30] !== Ie ||
      A[31] !== oe ||
      A[32] !== W
    )
      ((at = e(
        Zo,
        {
          tier: oe,
          wizardData: W,
          fallback: Ke,
          current: qe,
          existingPin: Ye,
          onPick: Ie,
          onCancel: it,
        },
        oe,
      )),
        (A[27] = Ke),
        (A[28] = qe),
        (A[29] = Ye),
        (A[30] = Ie),
        (A[31] = oe),
        (A[32] = W),
        (A[33] = at));
    else at = A[33];
    return at;
  }
  let Ke;
  if (A[34] !== j)
    ((Ke = L.every((wa) => j[wa] !== "pending")), (A[34] = j), (A[35] = Ke));
  else Ke = A[35];
  let Lo = Ke,
    qe;
  if (A[36] !== Lo || A[37] !== j)
    ((qe = Lo && L.some((un) => j[un] !== "pending" && j[un].ok)),
      (A[36] = Lo),
      (A[37] = j),
      (A[38] = qe));
  else qe = A[38];
  let Je = qe,
    Ye;
  if (A[39] !== Je || A[40] !== g || A[41] !== j)
    ((Ye =
      Je &&
      L.some((pn) => {
        let mn = j[pn];
        return mn !== "pending" && mn.ok && GC(g[pn]);
      })),
      (A[39] = Je),
      (A[40] = g),
      (A[41] = j),
      (A[42] = Ye));
  else Ye = A[42];
  let Mo = Ye,
    Ie;
  if (A[43] !== g || A[44] !== Vo || A[45] !== j || A[46] !== Et)
    ((Ie = (Tt) => {
      if (Tt === "manual") {
        wo({ picking: "sonnet" });
        return;
      }
      if (Tt === "pin" || Tt === "pin1m") {
        let bt = (fn) => {
          let gn = j[fn];
          if (gn === "pending" || !gn.ok) {
            return;
          }
          let jo = g[fn];
          return Tt === "pin1m" && GC(jo) ? Qo(jo) : jo;
        };
        Et({
          pinSonnet: bt("sonnet"),
          pinOpus: bt("opus"),
          pinHaiku: bt("haiku"),
          pinFable: bt("fable"),
        });
      } else
        Et({
          pinSonnet: void 0,
          pinOpus: void 0,
          pinHaiku: void 0,
          pinFable: void 0,
        });
      Vo();
    }),
      (A[43] = g),
      (A[44] = Vo),
      (A[45] = j),
      (A[46] = Et),
      (A[47] = Ie));
  else Ie = A[47];
  let zo = Ie,
    it;
  if (A[48] === MEMO_CACHE_SENTINEL)
    ((it = e(t, {
      children:
        "Without pinning, Claude Code uses its built-in defaults. When a new model ships, your install will try to call it even if it is not yet available in your project \u2014 Claude Code will fail to connect to Vertex AI until you enable the model or pin to one you have.",
    })),
      (A[48] = it));
  else it = A[48];
  let at;
  if (A[49] === MEMO_CACHE_SENTINEL)
    ((at = e(t, {
      dimColor: !0,
      children: "Each candidate is tested with a one-token request:",
    })),
      (A[49] = at));
  else at = A[49];
  let Pt;
  if (A[50] !== g || A[51] !== j)
    ((Pt = L.map((It) =>
      e(Ht, { label: Re[It], modelId: g[It], state: j[It] }, It),
    )),
      (A[50] = g),
      (A[51] = j),
      (A[52] = Pt));
  else Pt = A[52];
  let Rt;
  if (A[53] !== Pt)
    ((Rt = r(o, { flexDirection: "column", children: [at, Pt] })),
      (A[53] = Pt),
      (A[54] = Rt));
  else Rt = A[54];
  let St;
  if (A[55] !== Je)
    ((St = Je ? [{ label: "Pin the working models", value: "pin" }] : []),
      (A[55] = Je),
      (A[56] = St));
  else St = A[56];
  let Vt;
  if (A[57] !== Mo)
    ((Vt = Mo
      ? [{ label: "Pin the working models with 1M context", value: "pin1m" }]
      : []),
      (A[57] = Mo),
      (A[58] = Vt));
  else Vt = A[58];
  let Cn, yn;
  if (A[59] === MEMO_CACHE_SENTINEL)
    ((Cn = { label: "Choose different models\u2026", value: "manual" }),
      (yn = {
        label: "Skip \u2014 use Claude Code defaults (auto-updates)",
        value: "skip",
      }),
      (A[59] = Cn),
      (A[60] = yn));
  else ((Cn = A[59]), (yn = A[60]));
  let Nt;
  if (A[61] !== St || A[62] !== Vt)
    ((Nt = [...St, ...Vt, Cn, yn]), (A[61] = St), (A[62] = Vt), (A[63] = Nt));
  else Nt = A[63];
  let wt;
  if (A[64] !== So || A[65] !== zo || A[66] !== Nt)
    ((wt = e(ve, { options: Nt, onChange: zo, onCancel: So })),
      (A[64] = So),
      (A[65] = zo),
      (A[66] = Nt),
      (A[67] = wt));
  else wt = A[67];
  let xn;
  if (A[68] !== Rt || A[69] !== wt)
    ((xn = e(WizardStepFrame, {
      subtitle: "Pin model versions",
      children: r(o, {
        flexDirection: "column",
        gap: 1,
        children: [it, Rt, wt],
      }),
    })),
      (A[68] = Rt),
      (A[69] = wt),
      (A[70] = xn));
  else xn = A[70];
  return xn;
}
function Zo({
  tier: n,
  wizardData: s,
  fallback: c,
  current: u,
  existingPin: f,
  onPick: O,
  onCancel: m,
}) {
  let b = V(() => {
      let v = _t(n);
      for (let w of [c, u, f]) if (w && !v.includes(w)) v.push(w);
      return v;
    }, [n, c, u, f]),
    [h, I] = d(() => Object.fromEntries(b.map((v) => [v, "pending"])));
  E(() => {
    let v = !1;
    for (let w of b)
      K(s, w).then((l) => {
        if (!v) I((y) => ({ ...y, [w]: l }));
      });
    return () => {
      v = !0;
    };
  }, []);
  let N = b.every((v) => h[v] !== "pending"),
    k = (v) => {
      let w = h[v];
      return w !== void 0 && w !== "pending" && w.ok;
    },
    te = V(() => {
      if (!N) return b;
      return [...b].sort((v, w) => (k(v) ? 0 : 1) - (k(w) ? 0 : 1));
    }, [b, h, N]),
    Pe = te.map((v) => ({
      value: v,
      label: e(Gt, {
        id: v,
        state: h[v] ?? "pending",
        suffix:
          v === f
            ? "(currently pinned)"
            : v === c
              ? "(built-in default)"
              : v === u
                ? "(selected)"
                : void 0,
      }),
    }));
  return e(WizardStepFrame, {
    subtitle: `Pin ${Re[n]} model`,
    children: r(o, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(t, {
          dimColor: !0,
          children: [
            "Available ",
            Re[n],
            " versions on Vertex AI \xB7 each tested with a one-token request.",
          ],
        }),
        e(
          ve,
          {
            options: Pe,
            defaultValue: N ? (k(u) ? u : k(c) ? c : te.find(k)) : u,
            onChange: O,
            onCancel: m,
          },
          N ? "settled" : "pending",
        ),
      ],
    }),
  });
}
function Gt(Ja) {
  let le = _(19),
    { id: de, state: Yo, suffix: ie } = Ja;
  if (Yo === "pending") {
    let Ee;
    if (le[0] === MEMO_CACHE_SENTINEL)
      ((Ee = e(StatusIndicator, { status: "pending", withSpace: !0 })), (le[0] = Ee));
    else Ee = le[0];
    let X;
    if (le[1] !== ie)
      ((X = ie && r(t, { dimColor: !0, children: [" ", ie] })),
        (le[1] = ie),
        (le[2] = X));
    else X = le[2];
    let pe;
    if (le[3] !== de || le[4] !== X)
      ((pe = r(t, { children: [Ee, de, X] })),
        (le[3] = de),
        (le[4] = X),
        (le[5] = pe));
    else pe = le[5];
    return pe;
  }
  if (Yo.ok) {
    let Ee;
    if (le[6] === MEMO_CACHE_SENTINEL)
      ((Ee = e(StatusIndicator, { status: "success", withSpace: !0 })), (le[6] = Ee));
    else Ee = le[6];
    let X;
    if (le[7] !== ie)
      ((X = ie && r(t, { dimColor: !0, children: [" ", ie] })),
        (le[7] = ie),
        (le[8] = X));
    else X = le[8];
    let pe;
    if (le[9] !== de || le[10] !== X)
      ((pe = r(t, { children: [Ee, de, X] })),
        (le[9] = de),
        (le[10] = X),
        (le[11] = pe));
    else pe = le[11];
    return pe;
  }
  let Ee;
  if (le[12] === MEMO_CACHE_SENTINEL)
    ((Ee = e(StatusIndicator, { status: "error", withSpace: !0 })), (le[12] = Ee));
  else Ee = le[12];
  const X = ie && ` ${ie}`,
    pe = ut[Yo.reason];
  let Ft;
  if (le[13] !== pe)
    ((Ft = r(t, { color: "error", children: ["(", pe, ")"] })),
      (le[13] = pe),
      (le[14] = Ft));
  else Ft = le[14];
  let Rn;
  if (le[15] !== de || le[16] !== X || le[17] !== Ft)
    ((Rn = r(t, { dimColor: !0, children: [Ee, de, X, " ", Ft] })),
      (le[15] = de),
      (le[16] = X),
      (le[17] = Ft),
      (le[18] = Rn));
  else Rn = le[18];
  return Rn;
}
function Ht(Xa) {
  let Z = _(26),
    { label: me, modelId: fe, state: Jo } = Xa;
  if (Jo === "pending") {
    let Te, ee;
    if (Z[0] === MEMO_CACHE_SENTINEL)
      ((Te = e(t, { children: "  " })),
        (ee = e(yo, {})),
        (Z[0] = Te),
        (Z[1] = ee));
    else ((Te = Z[0]), (ee = Z[1]));
    let B;
    if (Z[2] !== me) ((B = me.padEnd(7)), (Z[2] = me), (Z[3] = B));
    else B = Z[3];
    let ge;
    if (Z[4] !== fe || Z[5] !== B)
      ((ge = r(o, {
        children: [Te, ee, r(t, { children: [" ", B, "\u2192 ", fe] })],
      })),
        (Z[4] = fe),
        (Z[5] = B),
        (Z[6] = ge));
    else ge = Z[6];
    return ge;
  }
  if (Jo.ok) {
    let Te;
    if (Z[7] === MEMO_CACHE_SENTINEL)
      ((Te = e(StatusIndicator, { status: "success", withSpace: !0 })), (Z[7] = Te));
    else Te = Z[7];
    let ee;
    if (Z[8] !== me) ((ee = me.padEnd(7)), (Z[8] = me), (Z[9] = ee));
    else ee = Z[9];
    let B;
    if (Z[10] !== fe)
      ((B = e(t, { color: "success", children: fe })),
        (Z[10] = fe),
        (Z[11] = B));
    else B = Z[11];
    let ge;
    if (Z[12] !== ee || Z[13] !== B)
      ((ge = r(t, { children: ["  ", Te, ee, "\u2192 ", B] })),
        (Z[12] = ee),
        (Z[13] = B),
        (Z[14] = ge));
    else ge = Z[14];
    return ge;
  }
  let Te;
  if (Z[15] === MEMO_CACHE_SENTINEL)
    ((Te = e(StatusIndicator, { status: "error", withSpace: !0 })), (Z[15] = Te));
  else Te = Z[15];
  let ee;
  if (Z[16] !== me) ((ee = me.padEnd(7)), (Z[16] = me), (Z[17] = ee));
  else ee = Z[17];
  let B;
  if (Z[18] !== fe)
    ((B = e(t, { dimColor: !0, children: fe })), (Z[18] = fe), (Z[19] = B));
  else B = Z[19];
  const ge = ut[Jo.reason];
  let Wt;
  if (Z[20] !== ge)
    ((Wt = r(t, { color: "error", children: ["(", ge, ")"] })),
      (Z[20] = ge),
      (Z[21] = Wt));
  else Wt = Z[21];
  let Sn;
  if (Z[22] !== ee || Z[23] !== B || Z[24] !== Wt)
    ((Sn = r(t, { children: ["  ", Te, ee, "\u2192 ", B, " ", Wt] })),
      (Z[22] = ee),
      (Z[23] = B),
      (Z[24] = Wt),
      (Z[25] = Sn));
  else Sn = Z[25];
  return Sn;
}
F();
import { readdir, readFile } from "fs/promises";
import { homedir as zn } from "os";
import { join as pt } from "path";
async function $t() {
  let n = new Set(),
    s = a.CLOUDSDK_CONFIG ?? Un();
  try {
    let c = pt(s, "configurations");
    for (let u of await readdir(c)) {
      if (!u.startsWith("config_")) continue;
      try {
        let f = await readFile(pt(c, u), "utf8");
        for (let O of f.matchAll(/^project\s*=\s*(\S+)/gm)) {
          let m = O[1]?.trim();
          if (m) n.add(m);
        }
      } catch {}
    }
  } catch {}
  try {
    let c = z(await readFile(pt(s, "application_default_credentials.json"), "utf8"));
    if (c.quota_project_id) n.add(c.quota_project_id);
  } catch {}
  return [...n].sort();
}
function Un() {
  return pt(zn(), ".config", "gcloud");
}
function Zn() {
  return [];
}
function Qn() {
  return $t().catch(Zn);
}
function ei(Xn) {
  return { label: Xn, value: Xn };
}
var ft = "__manual__",
  ar = 12;
function oo() {
  let Fn = _(3),
    [tr] = d(Qn),
    Wn;
  if (Fn[0] === MEMO_CACHE_SENTINEL)
    ((Wn = e(WizardStepFrame, {
      subtitle: "GCP project",
      children: e(SpinnerMessageLine, { message: "Reading ~/.config/gcloud\u2026" }),
    })),
      (Fn[0] = Wn));
  else Wn = Fn[0];
  let Gn;
  if (Fn[1] !== tr)
    ((Gn = e(Dn, { fallback: Wn, children: e(eo, { projectsPromise: tr }) })),
      (Fn[1] = tr),
      (Fn[2] = Gn));
  else Gn = Fn[2];
  return Gn;
}
function eo(vs) {
  let S = _(48),
    { projectsPromise: _s } = vs,
    R = kn(_s),
    { goBack: Kt, goToStep: or, updateWizardData: rr, wizardData: ae } = useWizard(),
    qt = R.length > ar,
    Hn;
  if (S[0] !== R || S[1] !== ae.projectId)
    ((Hn = ae.projectId && !R.includes(ae.projectId)),
      (S[0] = R),
      (S[1] = ae.projectId),
      (S[2] = Hn));
  else Hn = S[2];
  let Os = Boolean(Hn),
    [Yt, Es] = d(R.length === 0 || qt || Os),
    [Se, Ts] = d(ae.projectId ?? ""),
    [nr, bs] = d(Se.length),
    [Qt, Bn] = d(null),
    Kn;
  if (S[3] !== Yt)
    ((Kn = { context: "Settings", isActive: Yt }), (S[3] = Yt), (S[4] = Kn));
  else Kn = S[4];
  useKeybinding("confirm:no", Kt, Kn);
  let qn;
  if (S[5] !== or || S[6] !== rr)
    ((qn = (Ps) => {
      (rr({ projectId: Ps }), or(H.REGION));
    }),
      (S[5] = or),
      (S[6] = rr),
      (S[7] = qn));
  else qn = S[7];
  let Ze = qn;
  if (!Yt) {
    const Zt = R.length;
    let Ve;
    if (S[8] !== R.length)
      ((Ve = pluralize(R.length, "project")), (S[8] = R.length), (S[9] = Ve));
    else Ve = S[9];
    let Le;
    if (S[10] !== R.length || S[11] !== Ve)
      ((Le = r(t, {
        dimColor: !0,
        children: ["Found ", Zt, " ", Ve, " in your gcloud configurations."],
      })),
        (S[10] = R.length),
        (S[11] = Ve),
        (S[12] = Le));
    else Le = S[12];
    let he;
    if (S[13] !== R) {
      let se;
      if (S[15] === MEMO_CACHE_SENTINEL)
        ((se = { label: "Type a different project\u2026", value: ft }),
          (S[15] = se));
      else se = S[15];
      he = [...R.map(ei), se];
      ((S[13] = R), (S[14] = he));
    } else he = S[14];
    let se;
    if (S[16] !== R || S[17] !== ae.projectId)
      ((se = ae.projectId && R.includes(ae.projectId) ? ae.projectId : void 0),
        (S[16] = R),
        (S[17] = ae.projectId),
        (S[18] = se));
    else se = S[18];
    let Ce;
    if (S[19] !== Ze)
      ((Ce = (Yn) => {
        if (Yn === ft) Es(!0);
        else Ze(Yn);
      }),
        (S[19] = Ze),
        (S[20] = Ce));
    else Ce = S[20];
    let ye;
    if (S[21] !== Kt || S[22] !== he || S[23] !== se || S[24] !== Ce)
      ((ye = e(ve, {
        options: he,
        defaultValue: se,
        onChange: Ce,
        onCancel: Kt,
      })),
        (S[21] = Kt),
        (S[22] = he),
        (S[23] = se),
        (S[24] = Ce),
        (S[25] = ye));
    else ye = S[25];
    let mt;
    if (S[26] !== ye || S[27] !== Le)
      ((mt = e(WizardStepFrame, {
        subtitle: "GCP project",
        children: r(o, { flexDirection: "column", gap: 1, children: [Le, ye] }),
      })),
        (S[26] = ye),
        (S[27] = Le),
        (S[28] = mt));
    else mt = S[28];
    return mt;
  }
  let Zt;
  if (S[29] !== Ze || S[30] !== Se)
    ((Zt = () => {
      let Jn = Se.trim();
      if (!Jn) {
        Bn("Project ID is required");
        return;
      }
      (Bn(null), Ze(Jn));
    }),
      (S[29] = Ze),
      (S[30] = Se),
      (S[31] = Zt));
  else Zt = S[31];
  let ir = Zt,
    Ve;
  if (S[32] === MEMO_CACHE_SENTINEL)
    ((Ve = r(DotSeparatedList, {
      children: [
        e(KeybindingHint, { chord: "enter", action: "continue" }),
        e(ActionKeybindingHint, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    })),
      (S[32] = Ve));
  else Ve = S[32];
  let Le;
  if (S[33] === MEMO_CACHE_SENTINEL)
    ((Le = e(t, { children: "The project where Vertex AI is enabled." })),
      (S[33] = Le));
  else Le = S[33];
  let he;
  if (S[34] !== R.length || S[35] !== qt)
    ((he =
      qt &&
      r(t, {
        dimColor: !0,
        children: ["Found ", R.length, " projects \u2014 too many to list."],
      })),
      (S[34] = R.length),
      (S[35] = qt),
      (S[36] = he));
  else he = S[36];
  let se;
  if (S[37] === MEMO_CACHE_SENTINEL)
    ((se = e(t, {
      dimColor: !0,
      children:
        "Find it with `gcloud config get-value project` or in the GCP console header.",
    })),
      (S[37] = se));
  else se = S[37];
  let Ce;
  if (S[38] !== nr || S[39] !== ir || S[40] !== Se)
    ((Ce = e(o, {
      marginTop: 1,
      children: e(hn, {
        value: Se,
        onChange: Ts,
        onSubmit: ir,
        placeholder: "my-gcp-project",
        columns: 60,
        cursorOffset: nr,
        onChangeCursorOffset: bs,
        focus: !0,
        showCursor: !0,
      }),
    })),
      (S[38] = nr),
      (S[39] = ir),
      (S[40] = Se),
      (S[41] = Ce));
  else Ce = S[41];
  let ye;
  if (S[42] !== Qt)
    ((ye = Qt && e(o, { marginTop: 1, children: e(ErrorMessage, { error: Qt }) })),
      (S[42] = Qt),
      (S[43] = ye));
  else ye = S[43];
  let mt;
  if (S[44] !== ye || S[45] !== he || S[46] !== Ce)
    ((mt = e(WizardStepFrame, {
      subtitle: "GCP project ID",
      footerText: Ve,
      children: r(o, {
        flexDirection: "column",
        children: [Le, he, se, Ce, ye],
      }),
    })),
      (S[44] = ye),
      (S[45] = he),
      (S[46] = Ce),
      (S[47] = mt));
  else mt = S[47];
  return mt;
}
F();
function ao() {
  let ze = _(17),
    { goBack: Hs, goNext: sr, updateWizardData: cr, wizardData: Bs } = useWizard(),
    [Me, $s] = d(Bs.region ?? "global"),
    [dr, Ks] = d(Me.length),
    [ro, ti] = d(null),
    oi;
  if (ze[0] === MEMO_CACHE_SENTINEL) ((oi = { context: "Settings" }), (ze[0] = oi));
  else oi = ze[0];
  useKeybinding("confirm:no", Hs, oi);
  let ri;
  if (ze[1] !== sr || ze[2] !== cr || ze[3] !== Me)
    ((ri = () => {
      let ni = Me.trim();
      if (!ni) {
        ti("Region is required");
        return;
      }
      (ti(null), cr({ region: ni }), sr());
    }),
      (ze[1] = sr),
      (ze[2] = cr),
      (ze[3] = Me),
      (ze[4] = ri));
  else ri = ze[4];
  let lr = ri,
    ii;
  if (ze[5] === MEMO_CACHE_SENTINEL)
    ((ii = r(DotSeparatedList, {
      children: [
        e(KeybindingHint, { chord: "enter", action: "continue" }),
        e(ActionKeybindingHint, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    })),
      (ze[5] = ii));
  else ii = ze[5];
  let ai, si;
  if (ze[6] === MEMO_CACHE_SENTINEL)
    ((ai = e(t, { children: "Where Claude models are served from." })),
      (si = e(t, {
        dimColor: !0,
        children:
          "Use 'global', 'us', or 'eu' for a multi-region endpoint (recommended), or a specific location like us-east5 if you have regional quota.",
      })),
      (ze[6] = ai),
      (ze[7] = si));
  else ((ai = ze[6]), (si = ze[7]));
  let no;
  if (ze[8] !== dr || ze[9] !== lr || ze[10] !== Me)
    ((no = e(o, {
      marginTop: 1,
      children: e(hn, {
        value: Me,
        onChange: $s,
        onSubmit: lr,
        placeholder: "global",
        columns: 40,
        cursorOffset: dr,
        onChangeCursorOffset: Ks,
        focus: !0,
        showCursor: !0,
      }),
    })),
      (ze[8] = dr),
      (ze[9] = lr),
      (ze[10] = Me),
      (ze[11] = no));
  else no = ze[11];
  let io;
  if (ze[12] !== ro)
    ((io = ro && e(o, { marginTop: 1, children: e(ErrorMessage, { error: ro }) })),
      (ze[12] = ro),
      (ze[13] = io));
  else io = ze[13];
  let ci;
  if (ze[14] !== no || ze[15] !== io)
    ((ci = e(WizardStepFrame, {
      subtitle: "Vertex AI region",
      footerText: ii,
      children: r(o, { flexDirection: "column", children: [ai, si, no, io] }),
    })),
      (ze[14] = no),
      (ze[15] = io),
      (ze[16] = ci));
  else ci = ze[16];
  return ci;
}
F();
import { homedir as gr } from "os";
import { join as hr } from "path";
function uo() {
  let Fe = _(17),
    { goBack: uc, goToStep: ur, updateWizardData: pr, wizardData: pc } = useWizard(),
    [Ue, mc] = d(pc.keyFile ?? ""),
    [mr, fc] = d(Ue.length),
    [so, di] = d(null),
    li;
  if (Fe[0] === MEMO_CACHE_SENTINEL) ((li = { context: "Settings" }), (Fe[0] = li));
  else li = Fe[0];
  useKeybinding("confirm:no", uc, li);
  let ui;
  if (Fe[1] !== ur || Fe[2] !== pr || Fe[3] !== Ue)
    ((ui = () => {
      let gt = Ue.trim();
      if (!gt) {
        di("Path is required");
        return;
      }
      di(null);
      let gc = gt === "~" || gt.startsWith("~/") ? hr(gr(), gt.slice(1)) : gt;
      (pr({ keyFile: gc }), ur(H.PROJECT));
    }),
      (Fe[1] = ur),
      (Fe[2] = pr),
      (Fe[3] = Ue),
      (Fe[4] = ui));
  else ui = Fe[4];
  let fr = ui,
    pi;
  if (Fe[5] === MEMO_CACHE_SENTINEL)
    ((pi = r(DotSeparatedList, {
      children: [
        e(KeybindingHint, { chord: "enter", action: "continue" }),
        e(ActionKeybindingHint, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    })),
      (Fe[5] = pi));
  else pi = Fe[5];
  let mi, fi;
  if (Fe[6] === MEMO_CACHE_SENTINEL)
    ((mi = e(t, { children: "Path to the service account JSON key file." })),
      (fi = e(t, {
        dimColor: !0,
        children:
          "Download one from the GCP console under IAM \u2192 Service Accounts \u2192 Keys \u2192 Add key.",
      })),
      (Fe[6] = mi),
      (Fe[7] = fi));
  else ((mi = Fe[6]), (fi = Fe[7]));
  let co;
  if (Fe[8] !== mr || Fe[9] !== fr || Fe[10] !== Ue)
    ((co = e(o, {
      marginTop: 1,
      children: e(hn, {
        value: Ue,
        onChange: mc,
        onSubmit: fr,
        placeholder: "~/keys/my-project-vertex.json",
        columns: 60,
        cursorOffset: mr,
        onChangeCursorOffset: fc,
        focus: !0,
        showCursor: !0,
      }),
    })),
      (Fe[8] = mr),
      (Fe[9] = fr),
      (Fe[10] = Ue),
      (Fe[11] = co));
  else co = Fe[11];
  let lo;
  if (Fe[12] !== so)
    ((lo = so && e(o, { marginTop: 1, children: e(ErrorMessage, { error: so }) })),
      (Fe[12] = so),
      (Fe[13] = lo));
  else lo = Fe[13];
  let gi;
  if (Fe[14] !== co || Fe[15] !== lo)
    ((gi = e(WizardStepFrame, {
      subtitle: "Service account key",
      footerText: pi,
      children: r(o, { flexDirection: "column", children: [mi, fi, co, lo] }),
    })),
      (Fe[14] = co),
      (Fe[15] = lo),
      (Fe[16] = gi));
  else gi = Fe[16];
  return gi;
}
F();
function mo() {
  let M = _(35),
    { goBack: tt, goNext: ot, updateWizardData: po, wizardData: Cr } = useWizard(),
    hi;
  if (M[0] === MEMO_CACHE_SENTINEL) ((hi = { phase: "checking" }), (M[0] = hi));
  else hi = M[0];
  let [Ci, Pc] = d(hi),
    yi;
  if (M[1] !== po || M[2] !== Cr)
    ((yi = () => {
      let xi = !1;
      return (
        Ot(Cr).then((yr) => {
          if (xi) {
            return;
          }
          if (yr.status === "ok") po({ verifiedIdentity: yr.identity });
          else po({ verifiedIdentity: void 0 });
          Pc({ phase: "done", result: yr });
        }),
        () => {
          xi = !0;
        }
      );
    }),
      (M[1] = po),
      (M[2] = Cr),
      (M[3] = yi));
  else yi = M[3];
  let Di;
  if (M[4] === MEMO_CACHE_SENTINEL) ((Di = []), (M[4] = Di));
  else Di = M[4];
  if ((E(yi, Di), Ci.phase === "checking")) {
    let be;
    if (M[5] === MEMO_CACHE_SENTINEL)
      ((be = e(WizardStepFrame, {
        subtitle: "Verifying credentials",
        children: e(SpinnerMessageLine, {
          message: "Calling Google Cloud\u2026",
          subtitle: "This may take a few seconds.",
        }),
      })),
        (M[5] = be));
    else be = M[5];
    return be;
  }
  let { result: G } = Ci;
  switch (G.status) {
    case "ok": {
      let be;
      if (M[6] === MEMO_CACHE_SENTINEL)
        ((be = e(StatusIndicator, { status: "success", withSpace: !0 })), (M[6] = be));
      else be = M[6];
      let xe;
      if (M[7] !== G.identity)
        ((xe = r(t, {
          children: [
            be,
            "Authenticated as ",
            e(t, { bold: !0, children: G.identity }),
          ],
        })),
          (M[7] = G.identity),
          (M[8] = xe));
      else xe = M[8];
      let De;
      if (M[9] !== G.note)
        ((De = G.note && e(t, { dimColor: !0, children: G.note })),
          (M[9] = G.note),
          (M[10] = De));
      else De = M[10];
      let We;
      if (M[11] === MEMO_CACHE_SENTINEL)
        ((We = [{ label: "Continue", value: "continue" }]), (M[11] = We));
      else We = M[11];
      let ke;
      if (M[12] !== ot) ((ke = () => ot()), (M[12] = ot), (M[13] = ke));
      else ke = M[13];
      let Ge;
      if (M[14] !== tt || M[15] !== ke)
        ((Ge = e(ve, { options: We, onChange: ke, onCancel: tt })),
          (M[14] = tt),
          (M[15] = ke),
          (M[16] = Ge));
      else Ge = M[16];
      let ki;
      if (M[17] !== xe || M[18] !== De || M[19] !== Ge)
        ((ki = e(WizardStepFrame, {
          subtitle: "Verification",
          children: r(o, {
            flexDirection: "column",
            gap: 1,
            children: [xe, De, Ge],
          }),
        })),
          (M[17] = xe),
          (M[18] = De),
          (M[19] = Ge),
          (M[20] = ki));
      else ki = M[20];
      return ki;
    }
    case "error": {
      let be;
      if (M[21] === MEMO_CACHE_SENTINEL)
        ((be = e(StatusIndicator, { status: "error", withSpace: !0 })), (M[21] = be));
      else be = M[21];
      let xe;
      if (M[22] !== G.error)
        ((xe = r(t, { children: [be, G.error] })),
          (M[22] = G.error),
          (M[23] = xe));
      else xe = M[23];
      let De;
      if (M[24] !== G.command)
        ((De =
          G.command &&
          r(t, {
            bold: !0,
            color: "suggestion",
            children: ["    ", G.command],
          })),
          (M[24] = G.command),
          (M[25] = De));
      else De = M[25];
      let We;
      if (M[26] !== xe || M[27] !== De)
        ((We = r(o, { flexDirection: "column", children: [xe, De] })),
          (M[26] = xe),
          (M[27] = De),
          (M[28] = We));
      else We = M[28];
      let ke;
      if (M[29] !== tt || M[30] !== ot)
        ((ke = e(ConfirmPrompt, {
          hideIndexes: !0,
          cancelFirst: !0,
          focus: "cancel",
          confirmLabel: "Save anyway (skip verification)",
          cancelLabel: "Go back and fix",
          onConfirm: ot,
          onCancel: tt,
        })),
          (M[29] = tt),
          (M[30] = ot),
          (M[31] = ke));
      else ke = M[31];
      let Ge;
      if (M[32] !== We || M[33] !== ke)
        ((Ge = e(WizardStepFrame, {
          subtitle: "Verification failed",
          color: "error",
          children: r(o, {
            flexDirection: "column",
            gap: 1,
            children: [We, ke],
          }),
        })),
          (M[32] = We),
          (M[33] = ke),
          (M[34] = Ge));
      else Ge = M[34];
      return Ge;
    }
  }
}
function _i() {}
var Ar = [ht, uo, oo, ao, mo, Bt, At];
function y0e(Wc) {
  let kr = _(6),
    { onComplete: xr, onCancel: Dr } = Wc,
    fo;
  if (kr[0] !== xr) ((fo = { onComplete: xr }), (kr[0] = xr), (kr[1] = fo));
  else fo = kr[1];
  let Ai;
  if (kr[2] === MEMO_CACHE_SENTINEL) ((Ai = {}), (kr[2] = Ai));
  else Ai = kr[2];
  let vi;
  if (kr[3] !== Dr || kr[4] !== fo)
    ((vi = e(WizardProvider, {
      steps: Ar,
      stepProps: fo,
      initialData: Ai,
      onComplete: _i,
      onCancel: Dr,
      title: "Set up Google Vertex AI",
      showStepCounter: !1,
    })),
      (kr[3] = Dr),
      (kr[4] = fo),
      (kr[5] = vi));
  else vi = kr[5];
  return vi;
}
export { y0e };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { Dt } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Ne } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import {
  Hme,
  hse,
  Mve,
  DEFAULT_3P_SONNET_KEY,
  DEFAULT_3P_HAIKU_KEY,
  DEFAULT_BEDROCK_OPUS_KEY,
  DEFAULT_3P_FABLE_KEY,
  GC,
  DR,
  Im,
  VC,
  Rw,
  HCt,
  AWS_CHAIN_RESOLVE_REQUEST_TIMEOUT_MS,
} from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Gu } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { getSettingsFilePathForSource, updateSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { Xt, to } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { resolveStsEndpointForProxyUrl, getAWSClientProxyConfig, getAWSProxyRequestHandler } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { fle, vl, wi } from "../向导(Wizard)UI/向导(Wizard)UI.7xe5wk62.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { XL } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-2x6t9gq6.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { et } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { En } from "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import { yo } from "../状态栏-主题/chunk-jrr487ty.js";
import { Ur } from "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import { $n } from "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
import { je } from "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Dn, kn, E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { q5 } from "./chunk-p991cddr.js";
import { G } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { pe, p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
var Hr = [
  {
    type: "text",
    key: "accessKeyId",
    label: "Access key ID",
    placeholder: "AKIA\u2026",
    required: !0,
  },
  {
    type: "text",
    key: "secretAccessKey",
    label: "Secret access key",
    mask: "*",
    required: !0,
  },
  {
    type: "text",
    key: "sessionToken",
    label: "Session token",
    mask: "*",
    hint: () =>
      "Only needed for temporary credentials from STS. Leave empty for long-lived keys.",
  },
];
function Bo() {
  let vo = _(16),
    {
      goBack: Ir,
      goNext: Wr,
      updateWizardData: xr,
      wizardData: Nr,
      title: fs,
    } = vl();
  const Mr = Nr.accessKeyId ?? "",
    Kr = Nr.secretAccessKey ?? "",
    zr = Nr.sessionToken ?? "";
  let en;
  if (vo[0] !== Mr || vo[1] !== Kr || vo[2] !== zr)
    ((en = { accessKeyId: Mr, secretAccessKey: Kr, sessionToken: zr }),
      (vo[0] = Mr),
      (vo[1] = Kr),
      (vo[2] = zr),
      (vo[3] = en));
  else en = vo[3];
  let [oe, ps] = d(en),
    on;
  if (
    vo[4] !== Wr ||
    vo[5] !== xr ||
    vo[6] !== oe.accessKeyId ||
    vo[7] !== oe.secretAccessKey ||
    vo[8] !== oe.sessionToken
  )
    ((on = () => {
      (xr({
        accessKeyId: oe.accessKeyId.trim(),
        secretAccessKey: oe.secretAccessKey.trim(),
        sessionToken: oe.sessionToken.trim() || void 0,
      }),
        Wr());
    }),
      (vo[4] = Wr),
      (vo[5] = xr),
      (vo[6] = oe.accessKeyId),
      (vo[7] = oe.secretAccessKey),
      (vo[8] = oe.sessionToken),
      (vo[9] = on));
  else on = vo[9];
  let Lr = on;
  const Fr = fs ?? "Set up AWS Bedrock";
  let rn;
  if (vo[10] === p)
    ((rn = (ms, gs) => ps((hs) => ({ ...hs, [ms]: gs }))), (vo[10] = rn));
  else rn = vo[10];
  let tn;
  if (vo[11] !== Ir || vo[12] !== Lr || vo[13] !== Fr || vo[14] !== oe)
    ((tn = e(XL, {
      title: Fr,
      subtitle: "AWS access keys",
      fields: Hr,
      values: oe,
      onChange: rn,
      onSubmit: Lr,
      onCancel: Ir,
      submitLabel: "Continue",
    })),
      (vo[11] = Ir),
      (vo[12] = Lr),
      (vo[13] = Fr),
      (vo[14] = oe),
      (vo[15] = tn));
  else tn = vo[15];
  return tn;
}
var L = {
  AUTH_METHOD: 0,
  PROFILE: 1,
  BEARER: 2,
  ACCESS_KEY_ID: 3,
  REGION: 4,
  VERIFY: 5,
  PIN_MODELS: 6,
  CONFIRM: 7,
};
function Ro() {
  let go = _(9),
    { goBack: $r, goToStep: Vr, updateWizardData: qr } = vl(),
    nn;
  if (go[0] === p)
    ((nn = [
      { label: "AWS profile (SSO or named profile)", value: "profile" },
      { label: "Bedrock API key (bearer token)", value: "bearer" },
      { label: "Access key + secret", value: "accessKey" },
      {
        label: "Use credentials already in my environment",
        value: "environment",
      },
    ]),
      (go[0] = nn));
  else nn = go[0];
  let ws = nn,
    sn;
  if (go[1] === p)
    ((sn = {
      profile: L.PROFILE,
      bearer: L.BEARER,
      accessKey: L.ACCESS_KEY_ID,
      environment: L.REGION,
    }),
      (go[1] = sn));
  else sn = go[1];
  let Os = sn,
    an;
  if (go[2] !== Vr || go[3] !== qr)
    ((an = (Ps) => {
      let cn = Ps;
      (qr({ authMethod: cn }), Vr(Os[cn]));
    }),
      (go[2] = Vr),
      (go[3] = qr),
      (go[4] = an));
  else an = go[4];
  let Yr = an,
    dn;
  if (go[5] === p)
    ((dn = e(t, {
      dimColor: !0,
      children:
        "Claude Code uses the standard AWS credential chain. Pick the method you already use with the AWS CLI.",
    })),
      (go[5] = dn));
  else dn = go[5];
  let ln;
  if (go[6] !== $r || go[7] !== Yr)
    ((ln = e(wi, {
      subtitle: "How do you authenticate to AWS?",
      children: r(o, {
        flexDirection: "column",
        gap: 1,
        children: [dn, e(ve, { options: ws, onChange: Yr, onCancel: $r })],
      }),
    })),
      (go[6] = $r),
      (go[7] = Yr),
      (go[8] = ln));
  else ln = go[8];
  return ln;
}
F();
function No() {
  let ze = _(17),
    { goBack: Vs, goToStep: Gr, updateWizardData: jr, wizardData: qs } = vl(),
    [Ke, Ys] = d(qs.bearerToken ?? ""),
    [Xr, Gs] = d(Ke.length),
    [Io, un] = d(null),
    fn;
  if (ze[0] === p) ((fn = { context: "Settings" }), (ze[0] = fn));
  else fn = ze[0];
  Ne("confirm:no", Vs, fn);
  let pn;
  if (ze[1] !== Gr || ze[2] !== jr || ze[3] !== Ke)
    ((pn = () => {
      let mn = Ke.trim();
      if (!mn) {
        un("API key is required");
        return;
      }
      (un(null), jr({ bearerToken: mn }), Gr(L.REGION));
    }),
      (ze[1] = Gr),
      (ze[2] = jr),
      (ze[3] = Ke),
      (ze[4] = pn));
  else pn = ze[4];
  let Qr = pn,
    gn;
  if (ze[5] === p)
    ((gn = r(ue, {
      children: [
        e(D, { chord: "enter", action: "continue" }),
        e(je, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    })),
      (ze[5] = gn));
  else gn = ze[5];
  let yn, Cn;
  if (ze[6] === p)
    ((yn = e(t, { children: "Paste your Bedrock API key." })),
      (Cn = e(t, {
        dimColor: !0,
        children:
          "Generate one in the AWS console under Bedrock \u2192 API keys.",
      })),
      (ze[6] = yn),
      (ze[7] = Cn));
  else ((yn = ze[6]), (Cn = ze[7]));
  let Wo;
  if (ze[8] !== Xr || ze[9] !== Qr || ze[10] !== Ke)
    ((Wo = e(o, {
      marginTop: 1,
      children: e(hn, {
        value: Ke,
        onChange: Ys,
        onSubmit: Qr,
        placeholder: "bedrock-api-key-\u2026",
        mask: "*",
        columns: 60,
        cursorOffset: Xr,
        onChangeCursorOffset: Gs,
        focus: !0,
        showCursor: !0,
      }),
    })),
      (ze[8] = Xr),
      (ze[9] = Qr),
      (ze[10] = Ke),
      (ze[11] = Wo));
  else Wo = ze[11];
  let xo;
  if (ze[12] !== Io)
    ((xo = Io && e(o, { marginTop: 1, children: e(Ur, { error: Io }) })),
      (ze[12] = Io),
      (ze[13] = xo));
  else xo = ze[13];
  let Sn;
  if (ze[14] !== Wo || ze[15] !== xo)
    ((Sn = e(wi, {
      subtitle: "Bedrock API key",
      footerText: gn,
      children: r(o, { flexDirection: "column", children: [yn, Cn, Wo, xo] }),
    })),
      (ze[14] = Wo),
      (ze[15] = xo),
      (ze[16] = Sn));
  else Sn = ze[16];
  return Sn;
}
F();
function Bn(fa) {
  return fa[1] !== void 0;
}
function Rn(Jr) {
  let [at, pa] = Jr;
  return r(
    t,
    {
      children: [
        "  ",
        e(t, { color: "suggestion", children: at }),
        " =",
        " ",
        dt.has(at) ? e(t, { dimColor: !0, children: "(hidden)" }) : pa,
      ],
    },
    at,
  );
}
function ct(n) {
  let s = {
    CLAUDE_CODE_USE_BEDROCK: "1",
    CLAUDE_CODE_USE_VERTEX: void 0,
    CLAUDE_CODE_USE_FOUNDRY: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_AWS: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD: void 0,
    AWS_REGION: n.region,
    AWS_PROFILE: void 0,
    AWS_BEARER_TOKEN_BEDROCK: void 0,
    AWS_ACCESS_KEY_ID: void 0,
    AWS_SECRET_ACCESS_KEY: void 0,
    AWS_SESSION_TOKEN: void 0,
    ANTHROPIC_DEFAULT_SONNET_MODEL: void 0,
    ANTHROPIC_DEFAULT_OPUS_MODEL: void 0,
    ANTHROPIC_DEFAULT_HAIKU_MODEL: void 0,
    ANTHROPIC_DEFAULT_FABLE_MODEL: void 0,
    ANTHROPIC_SMALL_FAST_MODEL: void 0,
  };
  switch (n.authMethod) {
    case "profile":
      s.AWS_PROFILE = n.awsProfile;
      break;
    case "bearer":
      s.AWS_BEARER_TOKEN_BEDROCK = n.bearerToken;
      break;
    case "accessKey":
      if (
        ((s.AWS_ACCESS_KEY_ID = n.accessKeyId),
        (s.AWS_SECRET_ACCESS_KEY = n.secretAccessKey),
        n.sessionToken)
      )
        s.AWS_SESSION_TOKEN = n.sessionToken;
      break;
    case "environment":
    case void 0:
      break;
  }
  if (n.pinSonnet) s.ANTHROPIC_DEFAULT_SONNET_MODEL = n.pinSonnet;
  if (n.pinOpus) s.ANTHROPIC_DEFAULT_OPUS_MODEL = n.pinOpus;
  if (n.pinFable) s.ANTHROPIC_DEFAULT_FABLE_MODEL = n.pinFable;
  if (n.pinHaiku) s.ANTHROPIC_DEFAULT_HAIKU_MODEL = n.pinHaiku;
  return s;
}
var dt = new Set([
  "AWS_BEARER_TOKEN_BEDROCK",
  "AWS_SECRET_ACCESS_KEY",
  "AWS_SESSION_TOKEN",
]);
function Fo(Jr) {
  let ce = _(31),
    { onComplete: Zr } = Jr,
    { storageV5: ot } = _e(),
    { goBack: rt, wizardData: T } = vl(),
    [tt, ua] = d(null),
    An;
  if (ce[0] === p)
    ((An = Gu(getSettingsFilePathForSource("userSettings") ?? "~/.claude/settings.json")), (ce[0] = An));
  else An = ce[0];
  let _n = An,
    bn;
  if (ce[1] !== T) ((bn = ct(T)), (ce[1] = T), (ce[2] = bn));
  else bn = ce[2];
  let eo = bn,
    Tn;
  if (ce[3] !== eo)
    ((Tn = Object.entries(eo).filter(Bn)), (ce[3] = eo), (ce[4] = Tn));
  else Tn = ce[4];
  let nt = Tn,
    it = C(!1),
    wn;
  if (
    ce[5] !== eo ||
    ce[6] !== Zr ||
    ce[7] !== ot ||
    ce[8] !== T.authMethod ||
    ce[9] !== T.awsProfile ||
    ce[10] !== T.pinFable ||
    ce[11] !== T.pinHaiku ||
    ce[12] !== T.pinOpus ||
    ce[13] !== T.pinSonnet ||
    ce[14] !== T.verifiedIdentity
  )
    ((wn = async () => {
      if (it.current) {
        return;
      }
      it.current = !0;
      let { error: On } = await updateSettingsForSource("userSettings", { env: eo }, void 0, ot);
      if (On) {
        ((it.current = !1), ua(On.message));
        return;
      }
      (i("tengu_bedrock_setup_complete", {
        auth_method: fromEnumOpt(T.authMethod),
        pinned_models: Boolean(
          T.pinSonnet || T.pinOpus || T.pinFable || T.pinHaiku,
        ),
        verified: Boolean(T.verifiedIdentity),
      }),
        Zr(
          `Bedrock configuration saved to ${_n}.${T.authMethod === "profile" ? ` When your SSO session expires (typically 8 hours), run \`aws sso login --profile ${T.awsProfile}\` \u2014 Claude Code picks up refreshed credentials automatically.` : ""}`,
        ));
    }),
      (ce[5] = eo),
      (ce[6] = Zr),
      (ce[7] = ot),
      (ce[8] = T.authMethod),
      (ce[9] = T.awsProfile),
      (ce[10] = T.pinFable),
      (ce[11] = T.pinHaiku),
      (ce[12] = T.pinOpus),
      (ce[13] = T.pinSonnet),
      (ce[14] = T.verifiedIdentity),
      (ce[15] = wn));
  else wn = ce[15];
  let st = wn,
    Pn;
  if (ce[16] === p)
    ((Pn = r(t, {
      children: ["These will be written to ", _n, " under env:"],
    })),
      (ce[16] = Pn));
  else Pn = ce[16];
  let Mo;
  if (ce[17] !== nt)
    ((Mo = e(o, { flexDirection: "column", children: nt.map(Rn) })),
      (ce[17] = nt),
      (ce[18] = Mo));
  else Mo = ce[18];
  let Ko;
  if (ce[19] !== T.verifiedIdentity)
    ((Ko =
      T.verifiedIdentity &&
      r(t, {
        dimColor: !0,
        children: [
          e(et, { status: "success", withSpace: !0 }),
          "Verified as ",
          T.verifiedIdentity,
        ],
      })),
      (ce[19] = T.verifiedIdentity),
      (ce[20] = Ko));
  else Ko = ce[20];
  let zo;
  if (ce[21] !== tt)
    ((zo = e(Ur, { error: tt })), (ce[21] = tt), (ce[22] = zo));
  else zo = ce[22];
  let Lo;
  if (ce[23] !== rt || ce[24] !== st)
    ((Lo = e(En, {
      confirmLabel: "Save",
      cancelLabel: "Cancel",
      onConfirm: st,
      onCancel: rt,
    })),
      (ce[23] = rt),
      (ce[24] = st),
      (ce[25] = Lo));
  else Lo = ce[25];
  let vn;
  if (ce[26] !== Mo || ce[27] !== Ko || ce[28] !== zo || ce[29] !== Lo)
    ((vn = e(wi, {
      subtitle: "Confirm and save",
      children: r(o, {
        flexDirection: "column",
        gap: 1,
        children: [Pn, Mo, Ko, zo, Lo],
      }),
    })),
      (ce[26] = Mo),
      (ce[27] = Ko),
      (ce[28] = zo),
      (ce[29] = Lo),
      (ce[30] = vn));
  else vn = ce[30];
  return vn;
}
F();
var lt = pe(q5(), 1);
var oo = "Bedrock setup verification timed out";
function ko(n) {
  let s = Mve(n),
    l = (c) => {
      let f = to[c].bedrock;
      if (f === null)
        throw Error(
          "A DEFAULT_3P_*_KEY points at a model config with bedrock: null \u2014 Bedrock setup has no fallback id for that tier",
        );
      return { needle: to[c].firstParty, fallback: hse(f, s) };
    };
  return { sonnet: l(DEFAULT_3P_SONNET_KEY), opus: l(DEFAULT_BEDROCK_OPUS_KEY), haiku: l(DEFAULT_3P_HAIKU_KEY), fable: l(DEFAULT_3P_FABLE_KEY) };
}
async function Uo(n) {
  if (n.authMethod === "bearer") return xn(n);
  let s = HCt();
  try {
    let l = await ut(n),
      f = {
        ...(await getAWSClientProxyConfig({
          url: `https://bedrock.${n.region}.amazonaws.com`,
          region: n.region,
          requestTimeoutMs: AWS_CHAIN_RESOLVE_REQUEST_TIMEOUT_MS,
        })),
        region: n.region,
        ...(l && { credentials: l }),
      },
      { STSClient: m, GetCallerIdentityCommand: g } =
        await import("../../00-第三方库/_未识别/第三方库-AWSSDK/GetCallerIdentityCommand.z4m8wtvr.js"),
      O = await Dt(new m(f).send(new g({})), s, oo),
      b = O.Arn ?? O.UserId ?? "(unknown)",
      { BedrockClient: h, ListInferenceProfilesCommand: M } =
        await import("../../00-第三方库/_未识别/第三方库-AWSSDK/BedrockClient.8qdd522x.js"),
      y = new h(f),
      B = [],
      q;
    do {
      let ie = await Dt(
        y.send(
          new M({ ...(q && { nextToken: q }), typeEquals: "SYSTEM_DEFINED" }),
        ),
        s,
        oo,
      );
      for (let ee of ie.inferenceProfileSummaries ?? [])
        if (ee.inferenceProfileId?.includes("anthropic"))
          B.push(ee.inferenceProfileId);
      q = ie.nextToken;
    } while (q);
    return { status: "ok", identity: b, profiles: B };
  } catch (l) {
    return { status: "error", ...Nn(l, n, s) };
  }
}
async function j(n, s) {
  let l;
  try {
    l = await In(n);
  } catch (c) {
    return {
      ok: !1,
      reason:
        c instanceof Error && (c.message === oo || pt(c)) ? "network" : "auth",
    };
  }
  try {
    return (
      await l.messages.create({
        model: Xt(s),
        max_tokens: 1,
        messages: [{ role: "user", content: "." }],
      }),
      { ok: !0 }
    );
  } catch (c) {
    let f = c?.status;
    if (f === 401) return { ok: !1, reason: "auth" };
    if (f === 403) return { ok: !1, reason: "permission" };
    if (f === 400 || f === 404) return { ok: !1, reason: "model" };
    if (f === 429) return { ok: !0 };
    if (f === void 0) return { ok: !1, reason: "network" };
    return { ok: !1, reason: "other" };
  }
}
async function In(n) {
  let [{ AnthropicBedrock: s }, { getProxyFetchOptions: l }] =
      await Promise.all([
        import("./AnthropicBedrockMantle.wb95xgtr.js"),
        import("../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js"),
      ]),
    c = {
      awsRegion: n.region,
      maxRetries: 0,
      fetchOptions: l({
        url:
          a.ANTHROPIC_BEDROCK_BASE_URL ||
          `https://bedrock-runtime.${n.region}.amazonaws.com`,
      }),
    },
    f = await Wn(n),
    m = {
      authToken: null,
      defaultHeaders: {
        ...Im(),
        ...VC(),
        Authorization: null,
        ...(!DR() && { "X-Api-Key": null }),
      },
      ...Rw,
    };
  switch (f.kind) {
    case "bearer":
      return new s({
        ...c,
        apiKey: f.token,
        defaultHeaders: {
          ...Im(),
          ...VC(),
          Authorization: `Bearer ${f.token}`,
          ...(!DR() && { "X-Api-Key": null }),
        },
      });
    case "sigv4":
      return new s({
        ...c,
        ...m,
        awsAccessKey: f.accessKeyId,
        awsSecretKey: f.secretAccessKey,
        awsSessionToken: f.sessionToken,
      });
    case "default": {
      let g = a.AWS_BEARER_TOKEN_BEDROCK;
      if (g)
        return new s({
          ...c,
          apiKey: g,
          defaultHeaders: {
            ...Im(),
            ...VC(),
            Authorization: `Bearer ${g}`,
            ...(!DR() && { "X-Api-Key": null }),
          },
        });
      return new s({ ...c, ...m, providerChainResolver: () => ft(n, void 0) });
    }
  }
}
async function Wn(n) {
  if (n.authMethod === "bearer")
    return { kind: "bearer", token: n.bearerToken };
  let s = await ut(n);
  if (!s) return { kind: "default" };
  let l = await s();
  return {
    kind: "sigv4",
    accessKeyId: l.accessKeyId,
    secretAccessKey: l.secretAccessKey,
    sessionToken: l.sessionToken,
  };
}
async function xn(n) {
  let s = ko(n.region).haiku.fallback,
    l = await j(n, s);
  if (l.ok)
    return {
      status: "ok",
      identity: "Bedrock API key",
      profiles: [],
      note: `Test request to ${s} succeeded.`,
    };
  switch (l.reason) {
    case "auth":
      return {
        status: "error",
        error: "Invalid Bedrock API key. Check the key and try again.",
      };
    case "permission":
      return {
        status: "error",
        error:
          "API key was rejected. Your IAM policy may be missing bedrock:CallWithBearerToken or bedrock:InvokeModel.",
      };
    case "model":
      return {
        status: "ok",
        identity: "Bedrock API key",
        profiles: [],
        note: `The key works, but ${s} is not enabled in your account. Pin a model you have access to on the next step.`,
      };
    case "network":
      return {
        status: "error",
        error: `Could not reach Bedrock in region "${n.region}". Check the region name and your network.`,
      };
    case "other":
      return {
        status: "error",
        error: "The test request failed. Check the key and region.",
      };
  }
}
async function ut(n) {
  switch (n.authMethod) {
    case "profile":
      return ft(n, n.awsProfile);
    case "accessKey":
      return async () => ({
        accessKeyId: n.accessKeyId,
        secretAccessKey: n.secretAccessKey,
        ...(n.sessionToken && { sessionToken: n.sessionToken }),
      });
    case "environment":
      return;
    default:
      return;
  }
}
async function ft(n, s) {
  let [{ fromNodeProviderChain: l }, c] = await Promise.all([
      import("../../01-核心基础设施/共享小工具-未细化/fromIni.7gtjb5bg.js"),
      getAWSProxyRequestHandler({ url: resolveStsEndpointForProxyUrl(String(n.region)), requestTimeoutMs: AWS_CHAIN_RESOLVE_REQUEST_TIMEOUT_MS }),
    ]),
    f = c ?? new lt.FetchHttpHandler({ requestTimeout: AWS_CHAIN_RESOLVE_REQUEST_TIMEOUT_MS }),
    m = l({
      profile: s,
      ignoreCache: !0,
      parentClientConfig: { region: n.region, requestHandler: f },
      clientConfig: { requestHandler: f },
    });
  return (g) => Dt(m(g), HCt(), oo);
}
function pt(n) {
  return (
    n?.name === "TimeoutError" ||
    (n?.name === "CredentialsProviderError" &&
      (n.message ?? "").startsWith("TimeoutError:"))
  );
}
function Nn(n, s, l) {
  let c = n,
    f = c?.name ?? "Error",
    m = c?.message ?? String(n);
  if (m === oo)
    return {
      error: `Timed out after ${Math.ceil(l / 1000)}s waiting for AWS. Check your network and proxy settings; if a credential helper needs longer to prompt you, raise CLAUDE_CODE_AWS_CHAIN_RESOLVE_TIMEOUT_MS.`,
    };
  if (pt(c))
    return {
      error:
        "A request to AWS timed out. Check your network and proxy settings, then try again.",
    };
  let g =
    s.authMethod === "profile"
      ? `aws sso login --profile ${s.awsProfile}`
      : void 0;
  switch (f) {
    case "CredentialsProviderError":
      return s.authMethod === "profile"
        ? {
            error: `Could not load credentials for profile "${s.awsProfile}". If this is an SSO profile, run:`,
            command: g,
          }
        : { error: `No AWS credentials found. ${m}` };
    case "ExpiredTokenException":
    case "TokenRefreshRequired":
      return s.authMethod === "profile"
        ? { error: "SSO session expired. Run:", command: g }
        : { error: `Credentials expired. ${m}` };
    case "ForbiddenException":
      return s.authMethod === "profile"
        ? {
            error: `SSO portal denied access to the role for profile "${s.awsProfile}". The permission set may have been revoked \u2014 check your AWS access portal.`,
          }
        : { error: `Forbidden. ${m}` };
    case "AccessDeniedException":
      return {
        error: `Access denied. Your IAM role needs bedrock:ListInferenceProfiles permission. ${m}`,
      };
    case "UnrecognizedClientException":
    case "InvalidSignatureException":
      return { error: `Invalid credentials. ${m}` };
    case "UnknownEndpoint":
    case "ENOTFOUND":
      return {
        error: `Cannot reach AWS in region "${s.region}". Check the region name and your network.`,
      };
    default:
      return { error: `${f}: ${m}` };
  }
}
function Ei(pi) {
  return [pi, process.env[Wt[pi]]?.trim() || void 0];
}
function _i(ec) {
  return { ...ec, sonnet: "pending" };
}
function bi(oc) {
  return { ...oc, opus: "pending" };
}
function Di(rc) {
  return { ...rc, haiku: "pending" };
}
function Ti(tc) {
  return { ...tc, fable: "pending" };
}
var z = ["sonnet", "opus", "haiku", "fable"],
  Ee = { sonnet: "Sonnet", opus: "Opus", haiku: "Haiku", fable: "Fable" },
  Wt = {
    sonnet: "ANTHROPIC_DEFAULT_SONNET_MODEL",
    opus: "ANTHROPIC_DEFAULT_OPUS_MODEL",
    haiku: "ANTHROPIC_DEFAULT_HAIKU_MODEL",
    fable: "ANTHROPIC_DEFAULT_FABLE_MODEL",
  };
function xt(n) {
  return /\[1m\]$/i.test(n) ? n : `${n}[1m]`;
}
var To = {
  auth: "auth failed",
  permission: "no InvokeModel permission",
  model: "not enabled in this account",
  network: "unreachable",
  other: "request failed",
};
function gr() {
  let S = _(80),
    { goBack: mt, goNext: gt, updateWizardData: Ho, wizardData: P } = vl(),
    Mn;
  if (S[0] !== P.discoveredProfiles)
    ((Mn = P.discoveredProfiles ?? []),
      (S[0] = P.discoveredProfiles),
      (S[1] = Mn));
  else Mn = S[1];
  let ro = Mn,
    Kn;
  if (S[2] !== P.region) ((Kn = ko(P.region)), (S[2] = P.region), (S[3] = Kn));
  else Kn = S[3];
  let Co = Kn,
    zn;
  if (S[4] === p) ((zn = Object.fromEntries(z.map(Ei))), (S[4] = zn));
  else zn = S[4];
  let Ln = zn,
    Fn;
  if (S[5] !== P.region) ((Fn = Mve(P.region)), (S[5] = P.region), (S[6] = Fn));
  else Fn = S[6];
  let ht = Fn,
    Un;
  if (S[7] !== ht || S[8] !== ro || S[9] !== Co)
    ((Un = () =>
      Object.fromEntries(
        z.map(($o) => [
          $o,
          Ln[$o] ?? Hme(ro, Co[$o].needle, ht) ?? Co[$o].fallback,
        ]),
      )),
      (S[7] = ht),
      (S[8] = ro),
      (S[9] = Co),
      (S[10] = Un));
  else Un = S[10];
  let La = Un,
    [k, Fa] = d(La),
    Hn;
  if (S[11] === p)
    ((Hn = {
      sonnet: "pending",
      opus: "pending",
      haiku: "pending",
      fable: "pending",
    }),
      (S[11] = Hn));
  else Hn = S[11];
  let [U, Re] = d(Hn),
    [Vn, kt] = d("summary"),
    qn;
  if (S[12] !== k.sonnet || S[13] !== P)
    ((qn = () => {
      let Yn = !1;
      return (
        Re(_i),
        j(P, k.sonnet).then((Ua) => {
          if (!Yn) Re((Ha) => ({ ...Ha, sonnet: Ua }));
        }),
        () => {
          Yn = !0;
        }
      );
    }),
      (S[12] = k.sonnet),
      (S[13] = P),
      (S[14] = qn));
  else qn = S[14];
  let Gn;
  if (S[15] !== k.sonnet) ((Gn = [k.sonnet]), (S[15] = k.sonnet), (S[16] = Gn));
  else Gn = S[16];
  E(qn, Gn);
  let jn;
  if (S[17] !== k.opus || S[18] !== P)
    ((jn = () => {
      let Xn = !1;
      return (
        Re(bi),
        j(P, k.opus).then(($a) => {
          if (!Xn) Re((Va) => ({ ...Va, opus: $a }));
        }),
        () => {
          Xn = !0;
        }
      );
    }),
      (S[17] = k.opus),
      (S[18] = P),
      (S[19] = jn));
  else jn = S[19];
  let Qn;
  if (S[20] !== k.opus) ((Qn = [k.opus]), (S[20] = k.opus), (S[21] = Qn));
  else Qn = S[21];
  E(jn, Qn);
  let Jn;
  if (S[22] !== k.haiku || S[23] !== P)
    ((Jn = () => {
      let Zn = !1;
      return (
        Re(Di),
        j(P, k.haiku).then((qa) => {
          if (!Zn) Re((Ya) => ({ ...Ya, haiku: qa }));
        }),
        () => {
          Zn = !0;
        }
      );
    }),
      (S[22] = k.haiku),
      (S[23] = P),
      (S[24] = Jn));
  else Jn = S[24];
  let ei;
  if (S[25] !== k.haiku) ((ei = [k.haiku]), (S[25] = k.haiku), (S[26] = ei));
  else ei = S[26];
  E(Jn, ei);
  let oi;
  if (S[27] !== k.fable || S[28] !== P)
    ((oi = () => {
      let ri = !1;
      return (
        Re(Ti),
        j(P, k.fable).then((Ga) => {
          if (!ri) Re((ja) => ({ ...ja, fable: Ga }));
        }),
        () => {
          ri = !0;
        }
      );
    }),
      (S[27] = k.fable),
      (S[28] = P),
      (S[29] = oi));
  else oi = S[29];
  let ti;
  if (S[30] !== k.fable) ((ti = [k.fable]), (S[30] = k.fable), (S[31] = ti));
  else ti = S[31];
  if ((E(oi, ti), Vn !== "summary")) {
    let se = Vn.picking;
    const no = Co[se];
    const io = k[se];
    const so = Ln[se];
    let Le;
    if (S[32] !== se)
      ((Le = (Xa) => {
        Fa((Qa) => ({ ...Qa, [se]: Xa }));
        let Ja = z.indexOf(se);
        let ni = z[Ja + 1];
        kt(ni ? { picking: ni } : "summary");
      }),
        (S[32] = se),
        (S[33] = Le));
    else Le = S[33];
    let So;
    if (S[34] === p) ((So = () => kt("summary")), (S[34] = So));
    else So = S[34];
    let Ao;
    if (
      S[35] !== ro ||
      S[36] !== no.fallback ||
      S[37] !== io ||
      S[38] !== so ||
      S[39] !== Le ||
      S[40] !== se ||
      S[41] !== P
    )
      ((Ao = e(
        Nt,
        {
          tier: se,
          wizardData: P,
          profiles: ro,
          fallback: no.fallback,
          current: io,
          existingPin: so,
          onPick: Le,
          onCancel: So,
        },
        se,
      )),
        (S[35] = ro),
        (S[36] = no.fallback),
        (S[37] = io),
        (S[38] = so),
        (S[39] = Le),
        (S[40] = se),
        (S[41] = P),
        (S[42] = Ao));
    else Ao = S[42];
    return Ao;
  }
  let no;
  if (S[43] !== U)
    ((no = z.every((Za) => U[Za] !== "pending")), (S[43] = U), (S[44] = no));
  else no = S[44];
  let yt = no,
    io;
  if (S[45] !== yt || S[46] !== U)
    ((io = yt && z.some((ii) => U[ii] !== "pending" && U[ii].ok)),
      (S[45] = yt),
      (S[46] = U),
      (S[47] = io));
  else io = S[47];
  let ao = io,
    so;
  if (S[48] !== ao || S[49] !== k || S[50] !== U)
    ((so =
      ao &&
      z.some((si) => {
        let ai = U[si];
        return ai !== "pending" && ai.ok && GC(k[si]);
      })),
      (S[48] = ao),
      (S[49] = k),
      (S[50] = U),
      (S[51] = so));
  else so = S[51];
  let Ct = so,
    Le;
  if (S[52] !== k || S[53] !== gt || S[54] !== U || S[55] !== Ho)
    ((Le = (Vo) => {
      if (Vo === "manual") {
        kt({ picking: "sonnet" });
        return;
      }
      if (Vo === "pin" || Vo === "pin1m") {
        let qo = (ci) => {
          let di = U[ci];
          if (di === "pending" || !di.ok) {
            return;
          }
          let St = k[ci];
          return Vo === "pin1m" && GC(St) ? xt(St) : St;
        };
        Ho({
          pinSonnet: qo("sonnet"),
          pinOpus: qo("opus"),
          pinHaiku: qo("haiku"),
          pinFable: qo("fable"),
        });
      } else
        Ho({
          pinSonnet: void 0,
          pinOpus: void 0,
          pinHaiku: void 0,
          pinFable: void 0,
        });
      gt();
    }),
      (S[52] = k),
      (S[53] = gt),
      (S[54] = U),
      (S[55] = Ho),
      (S[56] = Le));
  else Le = S[56];
  let At = Le,
    So;
  if (S[57] === p)
    ((So = e(t, {
      children:
        "Without pinning, Claude Code uses its built-in defaults. When a new model ships, your install will try to call it even if your account has not yet enabled it \u2014 Claude Code will fail to connect to Bedrock until you enable the model or pin to one you have.",
    })),
      (S[57] = So));
  else So = S[57];
  let Ao;
  if (S[58] === p)
    ((Ao = e(t, {
      dimColor: !0,
      children: "Each candidate is tested with a one-token request:",
    })),
      (S[58] = Ao));
  else Ao = S[58];
  let Yo;
  if (S[59] !== k || S[60] !== U)
    ((Yo = z.map((Go) =>
      e(mr, { label: Ee[Go], modelId: k[Go], state: U[Go] }, Go),
    )),
      (S[59] = k),
      (S[60] = U),
      (S[61] = Yo));
  else Yo = S[61];
  let jo;
  if (S[62] !== Yo)
    ((jo = r(o, { flexDirection: "column", children: [Ao, Yo] })),
      (S[62] = Yo),
      (S[63] = jo));
  else jo = S[63];
  let Xo;
  if (S[64] !== ao)
    ((Xo = ao ? [{ label: "Pin the working models", value: "pin" }] : []),
      (S[64] = ao),
      (S[65] = Xo));
  else Xo = S[65];
  let Qo;
  if (S[66] !== Ct)
    ((Qo = Ct
      ? [{ label: "Pin the working models with 1M context", value: "pin1m" }]
      : []),
      (S[66] = Ct),
      (S[67] = Qo));
  else Qo = S[67];
  let li, ui;
  if (S[68] === p)
    ((li = { label: "Choose different models\u2026", value: "manual" }),
      (ui = {
        label: "Skip \u2014 use Claude Code defaults (auto-updates)",
        value: "skip",
      }),
      (S[68] = li),
      (S[69] = ui));
  else ((li = S[68]), (ui = S[69]));
  let Jo;
  if (S[70] !== Xo || S[71] !== Qo)
    ((Jo = [...Xo, ...Qo, li, ui]), (S[70] = Xo), (S[71] = Qo), (S[72] = Jo));
  else Jo = S[72];
  let Zo;
  if (S[73] !== mt || S[74] !== At || S[75] !== Jo)
    ((Zo = e(ve, { options: Jo, onChange: At, onCancel: mt })),
      (S[73] = mt),
      (S[74] = At),
      (S[75] = Jo),
      (S[76] = Zo));
  else Zo = S[76];
  let fi;
  if (S[77] !== jo || S[78] !== Zo)
    ((fi = e(wi, {
      subtitle: "Pin model versions",
      children: r(o, {
        flexDirection: "column",
        gap: 1,
        children: [So, jo, Zo],
      }),
    })),
      (S[77] = jo),
      (S[78] = Zo),
      (S[79] = fi));
  else fi = S[79];
  return fi;
}
function Nt({
  tier: n,
  wizardData: s,
  profiles: l,
  fallback: c,
  current: f,
  existingPin: m,
  onPick: g,
  onCancel: O,
}) {
  let b = V(() => {
      let A = l
        .filter((R) => R.toLowerCase().includes(n))
        .sort()
        .reverse();
      for (let R of [c, f, m]) if (R && !A.includes(R)) A.push(R);
      return A;
    }, [l, n, c, f, m]),
    [h, M] = d(() => Object.fromEntries(b.map((A) => [A, "pending"])));
  E(() => {
    let A = !1;
    for (let R of b)
      j(s, R).then((Qe) => {
        if (!A) M((u) => ({ ...u, [R]: Qe }));
      });
    return () => {
      A = !0;
    };
  }, []);
  let y = b.every((A) => h[A] !== "pending"),
    B = (A) => {
      let R = h[A];
      return R !== void 0 && R !== "pending" && R.ok;
    },
    q = V(() => {
      if (!y) return b;
      return [...b].sort((A, R) => (B(A) ? 0 : 1) - (B(R) ? 0 : 1));
    }, [b, h, y]),
    ie = q.map((A) => ({
      value: A,
      label: e(pr, {
        id: A,
        state: h[A] ?? "pending",
        suffix:
          A === m
            ? "(currently pinned)"
            : A === c
              ? "(built-in default)"
              : A === f
                ? "(selected)"
                : void 0,
      }),
    })),
    ee = G(l, (A) => A.toLowerCase().includes(n));
  return e(wi, {
    subtitle: `Pin ${Ee[n]} model`,
    children: r(o, {
      flexDirection: "column",
      gap: 1,
      children: [
        e(t, {
          dimColor: !0,
          children:
            ee > 0
              ? `${ee} ${Ee[n]} ${x(ee, "profile")} in your account \xB7 each tested with a one-token request.`
              : `No ${Ee[n]} profiles found in your account.`,
        }),
        e(
          ve,
          {
            options: ie,
            defaultValue: y ? q.find(B) : f,
            onChange: g,
            onCancel: O,
          },
          y ? "settled" : "pending",
        ),
      ],
    }),
  });
}
function pr(hc) {
  let ke = _(19),
    { id: he, state: Rt, suffix: le } = hc;
  if (Rt === "pending") {
    let xe;
    if (ke[0] === p)
      ((xe = e(et, { status: "pending", withSpace: !0 })), (ke[0] = xe));
    else xe = ke[0];
    let Z;
    if (ke[1] !== le)
      ((Z = le && r(t, { dimColor: !0, children: [" ", le] })),
        (ke[1] = le),
        (ke[2] = Z));
    else Z = ke[2];
    let ye;
    if (ke[3] !== he || ke[4] !== Z)
      ((ye = r(t, { children: [xe, he, Z] })),
        (ke[3] = he),
        (ke[4] = Z),
        (ke[5] = ye));
    else ye = ke[5];
    return ye;
  }
  if (Rt.ok) {
    let xe;
    if (ke[6] === p)
      ((xe = e(et, { status: "success", withSpace: !0 })), (ke[6] = xe));
    else xe = ke[6];
    let Z;
    if (ke[7] !== le)
      ((Z = le && r(t, { dimColor: !0, children: [" ", le] })),
        (ke[7] = le),
        (ke[8] = Z));
    else Z = ke[8];
    let ye;
    if (ke[9] !== he || ke[10] !== Z)
      ((ye = r(t, { children: [xe, he, Z] })),
        (ke[9] = he),
        (ke[10] = Z),
        (ke[11] = ye));
    else ye = ke[11];
    return ye;
  }
  let xe;
  if (ke[12] === p)
    ((xe = e(et, { status: "error", withSpace: !0 })), (ke[12] = xe));
  else xe = ke[12];
  const Z = le && ` ${le}`,
    ye = To[Rt.reason];
  let ur;
  if (ke[13] !== ye)
    ((ur = r(t, { color: "error", children: ["(", ye, ")"] })),
      (ke[13] = ye),
      (ke[14] = ur));
  else ur = ke[14];
  let Si;
  if (ke[15] !== he || ke[16] !== Z || ke[17] !== ur)
    ((Si = r(t, { dimColor: !0, children: [xe, he, Z, " ", ur] })),
      (ke[15] = he),
      (ke[16] = Z),
      (ke[17] = ur),
      (ke[18] = Si));
  else Si = ke[18];
  return Si;
}
function mr(kc) {
  let re = _(26),
    { label: Ce, modelId: Se, state: It } = kc;
  if (It === "pending") {
    let Me, te;
    if (re[0] === p)
      ((Me = e(t, { children: "  " })),
        (te = e(yo, {})),
        (re[0] = Me),
        (re[1] = te));
    else ((Me = re[0]), (te = re[1]));
    let H;
    if (re[2] !== Ce) ((H = Ce.padEnd(7)), (re[2] = Ce), (re[3] = H));
    else H = re[3];
    let Ae;
    if (re[4] !== Se || re[5] !== H)
      ((Ae = r(o, {
        children: [Me, te, r(t, { children: [" ", H, "\u2192 ", Se] })],
      })),
        (re[4] = Se),
        (re[5] = H),
        (re[6] = Ae));
    else Ae = re[6];
    return Ae;
  }
  if (It.ok) {
    let Me;
    if (re[7] === p)
      ((Me = e(et, { status: "success", withSpace: !0 })), (re[7] = Me));
    else Me = re[7];
    let te;
    if (re[8] !== Ce) ((te = Ce.padEnd(7)), (re[8] = Ce), (re[9] = te));
    else te = re[9];
    let H;
    if (re[10] !== Se)
      ((H = e(t, { color: "success", children: Se })),
        (re[10] = Se),
        (re[11] = H));
    else H = re[11];
    let Ae;
    if (re[12] !== te || re[13] !== H)
      ((Ae = r(t, { children: ["  ", Me, te, "\u2192 ", H] })),
        (re[12] = te),
        (re[13] = H),
        (re[14] = Ae));
    else Ae = re[14];
    return Ae;
  }
  let Me;
  if (re[15] === p)
    ((Me = e(et, { status: "error", withSpace: !0 })), (re[15] = Me));
  else Me = re[15];
  let te;
  if (re[16] !== Ce) ((te = Ce.padEnd(7)), (re[16] = Ce), (re[17] = te));
  else te = re[17];
  let H;
  if (re[18] !== Se)
    ((H = e(t, { dimColor: !0, children: Se })), (re[18] = Se), (re[19] = H));
  else H = re[19];
  const Ae = To[It.reason];
  let fr;
  if (re[20] !== Ae)
    ((fr = r(t, { color: "error", children: ["(", Ae, ")"] })),
      (re[20] = Ae),
      (re[21] = fr));
  else fr = re[21];
  let Ai;
  if (re[22] !== te || re[23] !== H || re[24] !== fr)
    ((Ai = r(t, { children: ["  ", Me, te, "\u2192 ", H, " ", fr] })),
      (re[22] = te),
      (re[23] = H),
      (re[24] = fr),
      (re[25] = Ai));
  else Ai = re[25];
  return Ai;
}
F();
import { readFile } from "fs/promises";
import { homedir } from "os";
import { join as Mt } from "path";
async function hr() {
  let n = new Set(),
    s = homedir();
  for (let { path: l, re: c } of [
    { path: Mt(s, ".aws", "config"), re: /^\[(?:profile\s+)?([^\]]+)\]/gm },
    { path: Mt(s, ".aws", "credentials"), re: /^\[([^\]]+)\]/gm },
  ])
    try {
      for (let f of (await readFile(l, "utf8")).matchAll(c)) {
        let m = f[1]?.trim();
        if (m && !m.startsWith("sso-session ")) n.add(m);
      }
    } catch {}
  return [...n].sort();
}
function Ui() {
  return [];
}
function Fi() {
  return hr().catch(Ui);
}
function Hi(Gc) {
  return Gc.toLowerCase().includes("bedrock");
}
function $i(Li) {
  return { label: Li, value: Li };
}
var Po = "__manual__",
  Ht = 12;
function Er() {
  let vi = _(3),
    [Kt] = d(Fi),
    Bi;
  if (vi[0] === p)
    ((Bi = e(wi, {
      subtitle: "AWS profile",
      children: e($n, { message: "Reading ~/.aws/config\u2026" }),
    })),
      (vi[0] = Bi));
  else Bi = vi[0];
  let Ri;
  if (vi[1] !== Kt)
    ((Ri = e(Dn, { fallback: Bi, children: e(Ar, { profilesPromise: Kt }) })),
      (vi[1] = Kt),
      (vi[2] = Ri));
  else Ri = vi[2];
  return Ri;
}
function Ar(Fc) {
  let I = _(52),
    { profilesPromise: Uc } = Fc,
    v = kn(Uc),
    { goBack: kr, goToStep: zt, updateWizardData: Lt, wizardData: fe } = vl(),
    Ue = v.length > Ht,
    Ii;
  if (I[0] !== v || I[1] !== fe.awsProfile)
    ((Ii = fe.awsProfile && !v.includes(fe.awsProfile)),
      (I[0] = v),
      (I[1] = fe.awsProfile),
      (I[2] = Ii));
  else Ii = I[2];
  let Hc = Boolean(Ii),
    [yr, $c] = d(v.length === 0 || Ue || Hc),
    Wi;
  if (I[3] !== v || I[4] !== Ue)
    ((Wi = Ue ? v.find(Hi) : void 0), (I[3] = v), (I[4] = Ue), (I[5] = Wi));
  else Wi = I[5];
  let wo = Wi,
    [He, Vc] = d(fe.awsProfile ?? wo ?? ""),
    [Ft, qc] = d(He.length),
    [Cr, xi] = d(null),
    Ni;
  if (I[6] !== yr)
    ((Ni = { context: "Settings", isActive: yr }), (I[6] = yr), (I[7] = Ni));
  else Ni = I[7];
  Ne("confirm:no", kr, Ni);
  let Mi;
  if (I[8] !== zt || I[9] !== Lt)
    ((Mi = (Yc) => {
      (Lt({ awsProfile: Yc }), zt(L.REGION));
    }),
      (I[8] = zt),
      (I[9] = Lt),
      (I[10] = Mi));
  else Mi = I[10];
  let fo = Mi;
  if (!yr) {
    const Sr = v.length;
    let $e;
    if (I[11] !== v.length)
      (($e = x(v.length, "profile")), (I[11] = v.length), (I[12] = $e));
    else $e = I[12];
    let Ve;
    if (I[13] !== v.length || I[14] !== $e)
      ((Ve = r(t, {
        dimColor: !0,
        children: [
          "Found ",
          Sr,
          " ",
          $e,
          " in ~/.aws/config and ~/.aws/credentials.",
        ],
      })),
        (I[13] = v.length),
        (I[14] = $e),
        (I[15] = Ve));
    else Ve = I[15];
    let be;
    if (I[16] !== v) {
      let me;
      if (I[18] === p)
        ((me = { label: "Type a different name\u2026", value: Po }),
          (I[18] = me));
      else me = I[18];
      be = [...v.map($i), me];
      ((I[16] = v), (I[17] = be));
    } else be = I[17];
    let me;
    if (I[19] !== v || I[20] !== fe.awsProfile)
      ((me =
        fe.awsProfile && v.includes(fe.awsProfile) ? fe.awsProfile : void 0),
        (I[19] = v),
        (I[20] = fe.awsProfile),
        (I[21] = me));
    else me = I[21];
    let De;
    if (I[22] !== fo)
      ((De = (Ki) => {
        if (Ki === Po) $c(!0);
        else fo(Ki);
      }),
        (I[22] = fo),
        (I[23] = De));
    else De = I[23];
    let Te;
    if (I[24] !== kr || I[25] !== De || I[26] !== be || I[27] !== me)
      ((Te = e(ve, {
        options: be,
        defaultValue: me,
        onChange: De,
        onCancel: kr,
      })),
        (I[24] = kr),
        (I[25] = De),
        (I[26] = be),
        (I[27] = me),
        (I[28] = Te));
    else Te = I[28];
    let Oo;
    if (I[29] !== Te || I[30] !== Ve)
      ((Oo = e(wi, {
        subtitle: "AWS profile",
        children: r(o, { flexDirection: "column", gap: 1, children: [Ve, Te] }),
      })),
        (I[29] = Te),
        (I[30] = Ve),
        (I[31] = Oo));
    else Oo = I[31];
    return Oo;
  }
  let Sr;
  if (I[32] !== fo || I[33] !== He)
    ((Sr = () => {
      let zi = He.trim();
      if (!zi) {
        xi("Profile name is required");
        return;
      }
      (xi(null), fo(zi));
    }),
      (I[32] = fo),
      (I[33] = He),
      (I[34] = Sr));
  else Sr = I[34];
  let Ut = Sr,
    $e;
  if (I[35] === p)
    (($e = r(ue, {
      children: [
        e(D, { chord: "enter", action: "continue" }),
        e(je, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    })),
      (I[35] = $e));
  else $e = I[35];
  let Ve;
  if (I[36] === p)
    ((Ve = e(t, {
      children: "The name from ~/.aws/config (after [profile \u2026]).",
    })),
      (I[36] = Ve));
  else Ve = I[36];
  let be;
  if (I[37] !== wo || I[38] !== v.length || I[39] !== Ue)
    ((be =
      Ue &&
      r(t, {
        dimColor: !0,
        children: [
          "Found ",
          v.length,
          " profiles \u2014 too many to list.",
          wo && ` Prepopulated with "${wo}".`,
        ],
      })),
      (I[37] = wo),
      (I[38] = v.length),
      (I[39] = Ue),
      (I[40] = be));
  else be = I[40];
  let me;
  if (I[41] === p)
    ((me = e(t, {
      dimColor: !0,
      children:
        "If this is an SSO profile, run `aws sso login --profile NAME` first.",
    })),
      (I[41] = me));
  else me = I[41];
  let De;
  if (I[42] !== Ft || I[43] !== Ut || I[44] !== He)
    ((De = e(o, {
      marginTop: 1,
      children: e(hn, {
        value: He,
        onChange: Vc,
        onSubmit: Ut,
        placeholder: "my-bedrock-profile",
        columns: 60,
        cursorOffset: Ft,
        onChangeCursorOffset: qc,
        focus: !0,
        showCursor: !0,
      }),
    })),
      (I[42] = Ft),
      (I[43] = Ut),
      (I[44] = He),
      (I[45] = De));
  else De = I[45];
  let Te;
  if (I[46] !== Cr)
    ((Te = Cr && e(o, { marginTop: 1, children: e(Ur, { error: Cr }) })),
      (I[46] = Cr),
      (I[47] = Te));
  else Te = I[47];
  let Oo;
  if (I[48] !== De || I[49] !== Te || I[50] !== be)
    ((Oo = e(wi, {
      subtitle: "AWS profile name",
      footerText: $e,
      children: r(o, {
        flexDirection: "column",
        children: [Ve, be, me, De, Te],
      }),
    })),
      (I[48] = De),
      (I[49] = Te),
      (I[50] = be),
      (I[51] = Oo));
  else Oo = I[51];
  return Oo;
}
F();
function Tr() {
  let Ye = _(17),
    { goBack: dd, goNext: $t, updateWizardData: Vt, wizardData: ld } = vl(),
    [qe, ud] = d(ld.region ?? "us-east-1"),
    [qt, fd] = d(qe.length),
    [_r, Vi] = d(null),
    qi;
  if (Ye[0] === p) ((qi = { context: "Settings" }), (Ye[0] = qi));
  else qi = Ye[0];
  Ne("confirm:no", dd, qi);
  let Yi;
  if (Ye[1] !== $t || Ye[2] !== Vt || Ye[3] !== qe)
    ((Yi = () => {
      let Gi = qe.trim();
      if (!Gi) {
        Vi("Region is required");
        return;
      }
      (Vi(null), Vt({ region: Gi }), $t());
    }),
      (Ye[1] = $t),
      (Ye[2] = Vt),
      (Ye[3] = qe),
      (Ye[4] = Yi));
  else Yi = Ye[4];
  let Yt = Yi,
    ji;
  if (Ye[5] === p)
    ((ji = r(ue, {
      children: [
        e(D, { chord: "enter", action: "continue" }),
        e(je, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    })),
      (Ye[5] = ji));
  else ji = Ye[5];
  let Xi, Qi;
  if (Ye[6] === p)
    ((Xi = e(t, { children: "Where your Bedrock models are enabled." })),
      (Qi = e(t, {
        dimColor: !0,
        children:
          "Claude Code reads this from AWS_REGION, not ~/.aws/config \u2014 set it explicitly even if your profile has a region.",
      })),
      (Ye[6] = Xi),
      (Ye[7] = Qi));
  else ((Xi = Ye[6]), (Qi = Ye[7]));
  let br;
  if (Ye[8] !== qt || Ye[9] !== Yt || Ye[10] !== qe)
    ((br = e(o, {
      marginTop: 1,
      children: e(hn, {
        value: qe,
        onChange: ud,
        onSubmit: Yt,
        placeholder: "us-east-1",
        columns: 40,
        cursorOffset: qt,
        onChangeCursorOffset: fd,
        focus: !0,
        showCursor: !0,
      }),
    })),
      (Ye[8] = qt),
      (Ye[9] = Yt),
      (Ye[10] = qe),
      (Ye[11] = br));
  else br = Ye[11];
  let Dr;
  if (Ye[12] !== _r)
    ((Dr = _r && e(o, { marginTop: 1, children: e(Ur, { error: _r }) })),
      (Ye[12] = _r),
      (Ye[13] = Dr));
  else Dr = Ye[13];
  let Ji;
  if (Ye[14] !== br || Ye[15] !== Dr)
    ((Ji = e(wi, {
      subtitle: "AWS region",
      footerText: ji,
      children: r(o, { flexDirection: "column", children: [Xi, Qi, br, Dr] }),
    })),
      (Ye[14] = br),
      (Ye[15] = Dr),
      (Ye[16] = Ji));
  else Ji = Ye[16];
  return Ji;
}
F();
function Br() {
  let K = _(39),
    { goBack: po, goNext: mo, updateWizardData: wr, wizardData: Or } = vl(),
    Zi;
  if (K[0] === p) ((Zi = { phase: "checking" }), (K[0] = Zi));
  else Zi = K[0];
  let [es, wd] = d(Zi),
    os;
  if (K[1] !== wr || K[2] !== Or)
    ((os = () => {
      let rs = !1;
      return (
        Uo(Or).then((Pr) => {
          if (rs) {
            return;
          }
          if (Pr.status === "ok")
            wr({
              verifiedIdentity: Pr.identity,
              discoveredProfiles: Pr.profiles,
            });
          else wr({ verifiedIdentity: void 0, discoveredProfiles: void 0 });
          wd({ phase: "done", result: Pr });
        }),
        () => {
          rs = !0;
        }
      );
    }),
      (K[1] = wr),
      (K[2] = Or),
      (K[3] = os));
  else os = K[3];
  let ts;
  if (K[4] === p) ((ts = []), (K[4] = ts));
  else ts = K[4];
  if ((E(os, ts), es.phase === "checking")) {
    const Oe =
      Or.authMethod === "bearer"
        ? "Sending a test request to Bedrock\u2026"
        : "Calling AWS STS and Bedrock\u2026";
    let ne;
    if (K[5] !== Oe)
      ((ne = e(wi, {
        subtitle: "Verifying credentials",
        children: e($n, {
          message: Oe,
          subtitle: "This may take a few seconds.",
        }),
      })),
        (K[5] = Oe),
        (K[6] = ne));
    else ne = K[6];
    return ne;
  }
  let { result: N } = es;
  switch (N.status) {
    case "ok": {
      let Oe;
      if (K[7] === p)
        ((Oe = e(et, { status: "success", withSpace: !0 })), (K[7] = Oe));
      else Oe = K[7];
      let ne;
      if (K[8] !== N.identity)
        ((ne = r(t, {
          children: [
            Oe,
            "Authenticated as ",
            e(t, { bold: !0, children: N.identity }),
          ],
        })),
          (K[8] = N.identity),
          (K[9] = ne));
      else ne = K[9];
      let Pe;
      if (K[10] !== N.note || K[11] !== N.profiles)
        ((Pe =
          N.note ??
          (N.profiles.length > 0
            ? `Found ${N.profiles.length} Anthropic inference ${x(N.profiles.length, "profile")} in this region.`
            : "No Anthropic inference profiles found in this region. You may still proceed \u2014 model defaults will use the built-in IDs.")),
          (K[10] = N.note),
          (K[11] = N.profiles),
          (K[12] = Pe));
      else Pe = K[12];
      let Be;
      if (K[13] !== Pe)
        ((Be = e(t, { dimColor: !0, children: Pe })),
          (K[13] = Pe),
          (K[14] = Be));
      else Be = K[14];
      let Ge;
      if (K[15] === p)
        ((Ge = [{ label: "Continue", value: "continue" }]), (K[15] = Ge));
      else Ge = K[15];
      let Xe;
      if (K[16] !== mo) ((Xe = () => mo()), (K[16] = mo), (K[17] = Xe));
      else Xe = K[17];
      let vr;
      if (K[18] !== po || K[19] !== Xe)
        ((vr = e(ve, { options: Ge, onChange: Xe, onCancel: po })),
          (K[18] = po),
          (K[19] = Xe),
          (K[20] = vr));
      else vr = K[20];
      let ns;
      if (K[21] !== ne || K[22] !== Be || K[23] !== vr)
        ((ns = e(wi, {
          subtitle: "Verification",
          children: r(o, {
            flexDirection: "column",
            gap: 1,
            children: [ne, Be, vr],
          }),
        })),
          (K[21] = ne),
          (K[22] = Be),
          (K[23] = vr),
          (K[24] = ns));
      else ns = K[24];
      return ns;
    }
    case "error": {
      let Oe;
      if (K[25] === p)
        ((Oe = e(et, { status: "error", withSpace: !0 })), (K[25] = Oe));
      else Oe = K[25];
      let ne;
      if (K[26] !== N.error)
        ((ne = r(t, { children: [Oe, N.error] })),
          (K[26] = N.error),
          (K[27] = ne));
      else ne = K[27];
      let Pe;
      if (K[28] !== N.command)
        ((Pe =
          N.command &&
          r(t, {
            bold: !0,
            color: "suggestion",
            children: ["    ", N.command],
          })),
          (K[28] = N.command),
          (K[29] = Pe));
      else Pe = K[29];
      let Be;
      if (K[30] !== ne || K[31] !== Pe)
        ((Be = r(o, { flexDirection: "column", children: [ne, Pe] })),
          (K[30] = ne),
          (K[31] = Pe),
          (K[32] = Be));
      else Be = K[32];
      let Ge;
      if (K[33] !== po || K[34] !== mo)
        ((Ge = e(En, {
          hideIndexes: !0,
          cancelFirst: !0,
          focus: "cancel",
          confirmLabel: "Save anyway (skip verification)",
          cancelLabel: "Go back and fix",
          onConfirm: mo,
          onCancel: po,
        })),
          (K[33] = po),
          (K[34] = mo),
          (K[35] = Ge));
      else Ge = K[35];
      let Xe;
      if (K[36] !== Be || K[37] !== Ge)
        ((Xe = e(wi, {
          subtitle: "Verification failed",
          color: "error",
          children: r(o, {
            flexDirection: "column",
            gap: 1,
            children: [Be, Ge],
          }),
        })),
          (K[36] = Be),
          (K[37] = Ge),
          (K[38] = Xe));
      else Xe = K[38];
      return Xe;
    }
  }
}
function as() {}
var Zt = [Ro, Er, No, Bo, Tr, Br, gr, Fo];
function _0e(Fd) {
  let Qt = _(6),
    { onComplete: Gt, onCancel: jt } = Fd,
    Rr;
  if (Qt[0] !== Gt) ((Rr = { onComplete: Gt }), (Qt[0] = Gt), (Qt[1] = Rr));
  else Rr = Qt[1];
  let is;
  if (Qt[2] === p) ((is = {}), (Qt[2] = is));
  else is = Qt[2];
  let ss;
  if (Qt[3] !== jt || Qt[4] !== Rr)
    ((ss = e(fle, {
      steps: Zt,
      stepProps: Rr,
      initialData: is,
      onComplete: as,
      onCancel: jt,
      title: "Set up Amazon Bedrock",
      showStepCounter: !1,
    })),
      (Qt[3] = jt),
      (Qt[4] = Rr),
      (Qt[5] = ss));
  else ss = Qt[5];
  return ss;
}
export { _0e };

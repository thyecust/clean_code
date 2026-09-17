// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { readEmbeddedAssetSync } from "../../01-核心基础设施/内嵌资源与模块互操作/embedded-text-asset.js";
import { commonJS, importMetaRequire } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
var c = commonJS(function (ie, b) {
  b.exports = importMetaRequire("./detect.mjs-4ep12q1p.txt");
});
var l = commonJS(function (ae, g) {
  g.exports = importMetaRequire("./source-kit.mjs-51mswsdh.txt");
});
var p = commonJS(function (ce, S) {
  S.exports = importMetaRequire("./css-fallback.mjs-75zwvs8w.txt");
});
var m = commonJS(function (le, v) {
  v.exports = importMetaRequire("./preview-gen-storybook.mjs-yedg6ts5.txt");
});
var d = commonJS(function (pe, k) {
  k.exports = importMetaRequire("./http-serve.mjs-18mkzrzt.txt");
});
var f = commonJS(function (me, x) {
  x.exports = importMetaRequire("./probe.mjs-24tedw09.txt");
});
var s = "./SKILL-057df712.md.zst";
var o = readEmbeddedAssetSync(s, import.meta.dirname);
var r = "./SKILL-b6859017.md.zst";
var n = readEmbeddedAssetSync(r, import.meta.dirname);
var i = "./SKILL-76b8b2a9.md.zst";
var a = readEmbeddedAssetSync(i, import.meta.dirname);
var e = (t) => (typeof t === "string" ? t : t.default),
  R = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.db4qa869.js"),
  C = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.fwytydyr.js"),
  P = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.p2z54ya1.js"),
  L = c(),
  F = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.nt7z2p7z.js"),
  T = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.k012ypzf.js"),
  I = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.re66yep0.js"),
  O = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.zjf86jvg.js"),
  j = l(),
  _ = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.66rbt254.js"),
  E = p(),
  M = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.pm7hyz3j.js"),
  D = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.k8j35a02.js"),
  N = m(),
  A = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.vkv8kr1s.js"),
  B = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.0zd1ebnt.js"),
  G = d(),
  H = f(),
  X = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.0z426rj0.js"),
  q = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.ak8awsa2.js"),
  Z = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.1fkyc6ha.js"),
  U = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.am6q7e7t.js"),
  Q = import.meta.require("../../01-核心基础设施/核心工具-未归类/default.rm15mpjf.js"),
  SKILL_MD = n,
  SKILL_FILES = {
    "storybook/SKILL.md": a,
    "non-storybook/SKILL.md": o,
    "package-build.mjs": e(R),
    "package-validate.mjs": e(C),
    "lib/common.mjs": e(P),
    "lib/detect.mjs": e(L),
    "lib/bundle.mjs": e(F),
    "lib/dts.mjs": e(T),
    "lib/css.mjs": e(I),
    "lib/source-storybook.mjs": e(O),
    "lib/source-kit.mjs": e(j),
    "lib/story-imports.mjs": e(_),
    "lib/css-fallback.mjs": e(E),
    "lib/emit.mjs": e(M),
    "lib/previews.mjs": e(D),
    "lib/preview-gen-storybook.mjs": e(N),
    "lib/docs.mjs": e(A),
    "lib/preview-rebuild.mjs": e(B),
    "storybook/http-serve.mjs": e(G),
    "storybook/probe.mjs": e(H),
    "storybook/compare.mjs": e(X),
    "package-capture.mjs": e(q),
    "lib/sync-hashes.mjs": e(Z),
    "lib/remote-diff.mjs": e(U),
    "resync.mjs": e(Q),
  };
export { SKILL_FILES, SKILL_MD };

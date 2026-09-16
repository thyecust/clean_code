// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载 22 个依赖 chunk；经查它们均已由主入口初始化，已移除以还原真实模块边界。
export {
  P0n as _setProxyAuthHelperConfig,
  O0n as clearProxyAuthHelperCache,
  Vq as clearProxyCache,
  vb as configureGlobalAgents,
  W8t as describeInvalidProxyUrl,
  I0n as disableKeepAlive,
  ihe as getAWSClientProxyConfig,
  zq as getAWSProxyRequestHandler,
  p2e as getConfiguredProxyAuthHelper,
  d2e as getNoProxy,
  f2e as getProxyAuthFromHelper,
  As as getProxyFetchOptions,
  Die as getProxyUrl,
  Oie as getProxyUrlWithSource,
  o_ as getUsableProxyUrl,
  Cb as getWebSocketProxyUrl,
  G8t as noProxyUnion,
  Lie as parseProxyUrl,
  D0n as prefetchProxyAuthFromHelperIfSafe,
  she as resolveStsEndpointForProxyUrl,
  QT as shouldBypassProxy,
} from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { rE } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { getMcpClientState } from "../../02-功能模块/认证-OAuth登录/chunk-wk0e3dz4.js";
var authLostEmitter = rE(() => getMcpClientState().authLost),
  reauthReconnectEmitter = rE(() => getMcpClientState().reauthReconnect),
  cachedRowAdoptEmitter = rE(() => getMcpClientState().cachedAdopt),
  cachedRowDialFailedEmitter = rE(() => getMcpClientState().cachedDialFailed);
export { authLostEmitter, reauthReconnectEmitter, cachedRowAdoptEmitter, cachedRowDialFailedEmitter };

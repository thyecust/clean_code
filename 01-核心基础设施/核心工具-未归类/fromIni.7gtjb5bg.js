// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { defaultProvider } from "../../02-功能模块/模型接入-Bedrock-Vertex/aws-credential-provider-node.js";
import "../../00-第三方库/@aws-sdk/chunk-z7ktsccq.js";
import { M0n } from "../../00-第三方库/@aws-sdk/chunk-6ydmdmy7.js";
var fromIni = (o = {}) => M0n({ ...o });
var fromNodeProviderChain = (o = {}) => defaultProvider({ ...o });
export { fromIni, fromNodeProviderChain };

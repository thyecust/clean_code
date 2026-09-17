// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { H } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isCrossSessionMessagingEnabled } from "./chunk-rfb3s38d.js";
var MAX_TRANSFER_SIZE_BYTES = 31457280,
  MAX_TRANSFER_FILE_COUNT = 16;
function isSendFileEnabled() {
  return isCrossSessionMessagingEnabled() && H("tengu_send_file", !1);
}
var FILE_TRANSFER_ERROR_MESSAGE = `could not be read, is not a regular file, or exceeds the ${MAX_TRANSFER_SIZE_BYTES / 1048576} MiB transfer limit`,
  RECEIVED_FILES_MAX_AGE_DAYS = 1;
export { MAX_TRANSFER_SIZE_BYTES, MAX_TRANSFER_FILE_COUNT, isSendFileEnabled, FILE_TRANSFER_ERROR_MESSAGE, RECEIVED_FILES_MAX_AGE_DAYS };

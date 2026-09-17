// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 92 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { mayHaveRemoteClient } from "../远程控制-Bridge/chunk-dajvcsw3.js";
import { isTeammateContext } from "./peer-target-guard.js";
import { listAllPeers, buildSubagentExtras, formatForUser } from "./agent-listing.js";
var p = async (m, s) => {
  let [
    {
      peers: a,
      bridgeWalkFailed: e,
      cloudListFailed: l,
      localListFailed: r,
      messagingDisabled: i,
      listTruncated: o,
    },
    t,
  ] = await Promise.all([listAllPeers(s.session, void 0, s.credentials), buildSubagentExtras(s, isTeammateContext(s))]);
  return {
    type: "text",
    value: formatForUser(a, t, {
      bridgeWalkFailed: e,
      cloudListFailed: l,
      localListFailed: r,
      messagingDisabled: i,
      listTruncated: o,
      omitDirectories: mayHaveRemoteClient(s.session),
    }),
  };
};
export { p as call };

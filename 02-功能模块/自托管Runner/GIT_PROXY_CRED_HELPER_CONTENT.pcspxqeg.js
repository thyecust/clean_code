// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 23 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  parseGitVersion as Sdr,
  configureGitForSigning as Fmr,
  codeSignArtifacts as $mr,
  configureGitGovernedEntries as XYt,
  readGitVersion as Umr,
  GIT_PROXY_CRED_HELPER_CONTENT as bdr,
  gitProxyCredHelperPath as wdr,
  coauthorHookStubs as Bmr,
  configureGitProxyCredential as jmr,
  selfHostedRunnerCodeSignMain as Wmr,
} from "./runner-git-config.js";
export {
  bdr as GIT_PROXY_CRED_HELPER_CONTENT,
  Bmr as coauthorHookStubs,
  $mr as codeSignArtifacts,
  Fmr as configureGitForSigning,
  XYt as configureGitGovernedEntries,
  jmr as configureGitProxyCredential,
  wdr as gitProxyCredHelperPath,
  Sdr as parseGitVersion,
  Umr as readGitVersion,
  Wmr as selfHostedRunnerCodeSignMain,
};

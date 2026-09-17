// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 35 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  isNestedGitLabProject as Mw,
  clearRepositoryCaches as bIn,
  detectCurrentRepository as She,
  repoDetectionGuards as pnt,
  setRepoDetectionGuards as fnt,
  resolveRemote as I2e,
  resolveRemoteUrl as bhe,
  resolvePushRemoteUrl as wIn,
  detectCurrentRepositoryWithHost as Pb,
  getCachedRepository as TIn,
  getCachedRepositoryHost as E7t,
  isGitLabMrTarget as EIn,
  glabMrId as AIn,
  glabMrProjectUrl as CIn,
  getCachedRemoteHost as A7t,
  isCachedGitHubRepo as mnt,
  parseGitRemote as Rx,
  parseRepoSlug as vIn,
  parseGitHubRepository as whe,
} from "../../02-功能模块/Git-Worktree/git-repository-detection.js";
export {
  bIn as clearRepositoryCaches,
  She as detectCurrentRepository,
  Pb as detectCurrentRepositoryWithHost,
  A7t as getCachedRemoteHost,
  TIn as getCachedRepository,
  E7t as getCachedRepositoryHost,
  AIn as glabMrId,
  CIn as glabMrProjectUrl,
  mnt as isCachedGitHubRepo,
  EIn as isGitLabMrTarget,
  Mw as isNestedGitLabProject,
  whe as parseGitHubRepository,
  Rx as parseGitRemote,
  vIn as parseRepoSlug,
  pnt as repoDetectionGuards,
  wIn as resolvePushRemoteUrl,
  I2e as resolveRemote,
  bhe as resolveRemoteUrl,
  fnt as setRepoDetectionGuards,
};

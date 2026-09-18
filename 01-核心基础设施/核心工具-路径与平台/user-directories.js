// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { homedir } from "os";
import { join } from "path";
function r(e) {
  return { env: e?.env ?? process.env, home: e?.homedir ?? a.HOME ?? homedir() };
}
function getXdgStateHome(e) {
  let { env: n, home: t } = r(e);
  return n.XDG_STATE_HOME ?? join(t, ".local", "state");
}
function getXdgCacheHome(e) {
  let { env: n, home: t } = r(e);
  return n.XDG_CACHE_HOME ?? join(t, ".cache");
}
function getXdgDataHome(e) {
  let { env: n, home: t } = r(e);
  return n.XDG_DATA_HOME ?? join(t, ".local", "share");
}
function getClaudeVersionsDir(e) {
  return join(getXdgDataHome(e), "claude", "versions");
}
function getLocalBinDir(e) {
  let { home: n } = r(e);
  return join(n, ".local", "bin");
}
export { getXdgStateHome, getXdgCacheHome, getXdgDataHome, getClaudeVersionsDir, getLocalBinDir };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { importMetaRequire } from "./chunk-2c9tjhwd.js";
import { userInfo } from "os";
var t = "com.anthropic.claudecode",
  HKLM_POLICY_REGISTRY_PATH = "HKLM\\SOFTWARE\\Policies\\ClaudeCode",
  HKCU_POLICY_REGISTRY_PATH = "HKCU\\SOFTWARE\\Policies\\ClaudeCode",
  SETTINGS_REGISTRY_VALUE_NAME = "Settings",
  PLUTIL_BINARY_PATH = "/usr/bin/plutil",
  PLUTIL_TO_JSON_ARGS = ["-convert", "json", "-o", "-", "--"],
  PLUTIL_LINT_ARGS = ["-lint", "-s", "--"],
  MDM_COMMAND_TIMEOUT_MS = 5000,
  MDM_COMMAND_MAX_BUFFER_BYTES = 2097152,
  WSL_REG_EXE_PATH = "/mnt/c/Windows/System32/reg.exe",
  WSL_MANAGED_SETTINGS_DIR = "/mnt/c/Program Files/ClaudeCode";
function isRunningOnWsl() {
  return !1;
}
function getManagedPreferencesPaths() {
  let e = "";
  try {
    e = userInfo().username;
  } catch {}
  let r = [];
  if (e)
    r.push({
      path: `/Library/Managed Preferences/${e}/${t}.plist`,
      label: "per-user managed preferences",
    });
  return (
    r.push({
      path: `/Library/Managed Preferences/${t}.plist`,
      label: "device-level managed preferences",
    }),
    r
  );
}
export { HKLM_POLICY_REGISTRY_PATH, HKCU_POLICY_REGISTRY_PATH, SETTINGS_REGISTRY_VALUE_NAME, PLUTIL_BINARY_PATH, PLUTIL_TO_JSON_ARGS, PLUTIL_LINT_ARGS, MDM_COMMAND_TIMEOUT_MS, MDM_COMMAND_MAX_BUFFER_BYTES, WSL_REG_EXE_PATH, WSL_MANAGED_SETTINGS_DIR, isRunningOnWsl, getManagedPreferencesPaths };

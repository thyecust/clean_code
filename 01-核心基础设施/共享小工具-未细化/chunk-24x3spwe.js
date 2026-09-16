// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ae } from "./chunk-2c9tjhwd.js";
import { userInfo as s } from "os";
var t = "com.anthropic.claudecode",
  _Rt = "HKLM\\SOFTWARE\\Policies\\ClaudeCode",
  yRt = "HKCU\\SOFTWARE\\Policies\\ClaudeCode",
  Met = "Settings",
  zxn = "/usr/bin/plutil",
  Iar = ["-convert", "json", "-o", "-", "--"],
  Par = ["-lint", "-s", "--"],
  Oar = 5000,
  q5t = 2097152,
  Dar = "/mnt/c/Windows/System32/reg.exe",
  _x = "/mnt/c/Program Files/ClaudeCode";
function xBe() {
  return !1;
}
function Lar() {
  let e = "";
  try {
    e = s().username;
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
export { _Rt, yRt, Met, zxn, Iar, Par, Oar, q5t, Dar, _x, xBe, Lar };

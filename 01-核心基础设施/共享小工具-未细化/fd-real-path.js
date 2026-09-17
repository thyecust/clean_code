// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getCurrentPlatform } from "../核心工具-路径与平台/platform-detection.js";
import { readlink } from "fs/promises";
async function getFdRealPath(n) {
  let r = getCurrentPlatform();
  if (r !== "linux" && r !== "wsl") return null;
  try {
    let t = await readlink(`/proc/self/fd/${n}`);
    return t.startsWith("/") && !t.endsWith(" (deleted)") ? t : null;
  } catch {
    return null;
  }
}
export { getFdRealPath };

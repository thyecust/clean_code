// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ae, n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { readdir, readFile } from "fs/promises";
import { release } from "os";
function mXt() {
  try {
    return ae()
      .readFileSync("/proc/version", { encoding: "utf8" })
      .toLowerCase();
  } catch {
    return;
  }
}
function gXt(e) {
  return e.includes("microsoft") || e.includes("wsl");
}
var LPn = ["macos", "wsl"];
class c {
  sources;
  primedProcVersion;
  fallbackProcVersion;
  fallbackProcVersionRead = !1;
  platform;
  wslVersion = null;
  macOSMajorVersion = null;
  linuxDistroInfo;
  constructor(e) {
    this.sources = e;
  }
  kernelString() {
    if (this.primedProcVersion !== void 0) return this.primedProcVersion;
    if (!this.fallbackProcVersionRead)
      ((this.fallbackProcVersion = this.sources.readProcVersionSync()),
        (this.fallbackProcVersionRead = !0));
    return this.fallbackProcVersion;
  }
  getPlatform() {
    if (this.platform !== void 0) return this.platform;
    try {
      if (this.sources.platform === "darwin") this.platform = "macos";
      else if (this.sources.platform === "win32") this.platform = "windows";
      else if (this.sources.platform === "linux")
        if (this.sources.env.WSL_DISTRO_NAME || this.sources.env.WSL_INTEROP)
          this.platform = "wsl";
        else {
          let e = this.kernelString();
          this.platform = e !== void 0 && gXt(e) ? "wsl" : "linux";
        }
      else this.platform = "unknown";
    } catch (e) {
      (logError(e), (this.platform = "unknown"));
    }
    return this.platform;
  }
  getWslVersion() {
    if (this.wslVersion !== null) return this.wslVersion;
    if (this.sources.platform !== "linux") {
      this.wslVersion = void 0;
      return;
    }
    let e = this.kernelString();
    if (e === void 0) {
      this.wslVersion = void 0;
      return;
    }
    let r = e.match(/wsl(\d+)/);
    if (r && r[1]) this.wslVersion = r[1];
    else if (e.includes("microsoft")) this.wslVersion = "1";
    else this.wslVersion = void 0;
    return this.wslVersion;
  }
  getMacOSMajorVersion() {
    if (this.macOSMajorVersion !== null) return this.macOSMajorVersion;
    if (this.sources.platform !== "darwin") {
      this.macOSMajorVersion = void 0;
      return;
    }
    let e = this.sources.osRelease().match(/^(\d+)\./);
    return (
      (this.macOSMajorVersion = e && e[1] ? parseInt(e[1], 10) - 9 : void 0),
      this.macOSMajorVersion
    );
  }
  getLinuxDistroInfo() {
    return (this.linuxDistroInfo ??= this.readLinuxDistroInfo());
  }
  async readLinuxDistroInfo() {
    if (this.sources.platform !== "linux") return;
    let e = { linuxKernel: this.sources.osRelease() };
    try {
      let r = await this.sources.readOsRelease();
      for (let s of r.split(`
`)) {
        let t = s.match(/^(ID|VERSION_ID)=(.*)$/);
        if (t && t[1] && t[2]) {
          let o = t[2].replace(/^"|"$/g, "");
          if (t[1] === "ID") e.linuxDistroId = o;
          else e.linuxDistroVersion = o;
        }
      }
    } catch {}
    return e;
  }
  async prime() {
    if (this.primedProcVersion !== void 0 || this.sources.platform !== "linux")
      return;
    try {
      let e = await this.sources.readProcVersion();
      this.primedProcVersion = e.toLowerCase();
    } catch (e) {
      n(`Failed to read /proc/version for WSL detection: ${e}`, {
        level: "error",
      });
      return;
    }
    ((this.platform = void 0), (this.wslVersion = null));
  }
}
var d;
function i() {
  return (d ??= new c({
    platform: "darwin",
    env: process.env,
    readProcVersionSync: mXt,
    readProcVersion: () => readFile("/proc/version", { encoding: "utf8" }),
    osRelease: release,
    readOsRelease: () => readFile("/etc/os-release", "utf8"),
  }));
}
function fur() {
  return i().prime();
}
function P() {
  return i().getPlatform();
}
function tZ(e) {
  switch (e) {
    case "darwin":
      return "macOS";
    case "win32":
      return "Windows";
    case "linux":
      return "Linux";
    default:
      return e;
  }
}
function rxe() {
  return i().getWslVersion();
}
function Hxt() {
  return i().getLinuxDistroInfo();
}
function mur() {
  return i().getMacOSMajorVersion();
}
var m = [
  [".git", "git"],
  [".hg", "mercurial"],
  [".svn", "svn"],
  [".p4config", "perforce"],
  ["$tf", "tfs"],
  [".tfvc", "tfs"],
  [".jj", "jujutsu"],
  [".sl", "sapling"],
];
async function gur(e) {
  let r = new Set();
  if (process.env.P4PORT) r.add("perforce");
  try {
    let s = e ?? ae().cwd(),
      t = new Set(await readdir(s));
    for (let [o, l] of m) if (t.has(o)) r.add(l);
  } catch {}
  return [...r];
}
export { mXt, gXt, LPn, fur, P, tZ, rxe, Hxt, mur, gur };

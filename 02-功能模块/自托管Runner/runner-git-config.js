// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getProxyFetchOptions } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { execFile, execFileSync } from "child_process";
import {
  chmod,
  mkdir,
  readFile,
  writeFile,
} from "fs/promises";
import { join, resolve } from "path";
import { promisify } from "util";
var f = promisify(execFile),
  D = /^[a-zA-Z0-9_-]+$/,
  _ = [2, 34];
function parseGitVersion(t) {
  let e = /git version (\d+)\.(\d+)/.exec(t);
  if (!e) return null;
  return [Number(e[1]), Number(e[2])];
}
function N(t) {
  let e = parseGitVersion(t);
  if (e === null) return null;
  let [n, o] = e,
    [i, r] = _;
  return n > i || (n === i && o >= r);
}
async function configureGitForSigning(t) {
  let e = (await f("git", ["--version"], { windowsHide: !0 })).stdout,
    n = N(e);
  if (n === null)
    t.onStatus(
      `[runner:git] --configure-git: could not parse git version from "${e.trim()}"; proceeding without version check`,
    );
  else if (!n) {
    let [g, m] = _;
    throw Error(
      `--configure-git requires git >= ${g}.${m} for SSH commit signing (found: ${e.trim()}). Upgrade git in your runner image, or omit --configure-git and manage git identity yourself`,
    );
  }
  let o = join(t.baseDir, ".runner");
  await mkdir(o, { recursive: !0 });
  let i = join(o, "code-sign"),
    r = join(o, "commit_signing_key.pub"),
    a = w(t.execPath);
  (await writeFile(i, a, { mode: 493 }), await chmod(i, 493), await writeFile(r, ""));
  let c = [
      ["user.name", "Claude"],
      ["user.email", "noreply@anthropic.com"],
      ["gpg.format", "ssh"],
      ["gpg.ssh.program", i],
      ["user.signingkey", r],
      ["commit.gpgsign", "true"],
      ["tag.gpgsign", "true"],
      ["push.negotiate", "true"],
    ],
    u = t.gitConfigPath ? ["--file", t.gitConfigPath] : ["--global"];
  for (let [g, m] of c)
    await f("git", ["config", ...u, "--replace-all", g, m], {
      windowsHide: !0,
    });
  return (
    t.onStatus(
      `[runner:git] --configure-git: identity=Claude <noreply@anthropic.com>, gpg.ssh.program=${i}`,
    ),
    await v(o, u, t.onStatus),
    i
  );
}
function w(t) {
  return `#!/bin/sh
BIN="$CLAUDE_RUNNER_CLAUDE_BIN"
[ -n "$BIN" ] || BIN='${x(t)}'
exec "$BIN" self-hosted-runner code-sign "$@"
`;
}
function codeSignArtifacts(t, e) {
  let n = join(t, ".runner");
  return [
    { path: join(n, "code-sign"), content: w(e), mode: 493 },
    { path: join(n, "commit_signing_key.pub"), content: "", mode: 420 },
  ];
}
function configureGitGovernedEntries(t) {
  let e = join(t, ".runner");
  return [
    ["user.name", "Claude"],
    ["user.email", "noreply@anthropic.com"],
    ["user.signingkey", join(e, "commit_signing_key.pub")],
    ["gpg.format", "ssh"],
    ["gpg.ssh.program", join(e, "code-sign")],
    ["commit.gpgsign", "true"],
    ["tag.gpgsign", "true"],
    ["push.negotiate", "true"],
    ["core.hooksPath", join(e, "git-hooks")],
  ];
}
async function readGitVersion() {
  try {
    let { stdout: t } = await f("git", ["--version"], { windowsHide: !0 });
    return t;
  } catch {
    return "";
  }
}
var GIT_PROXY_CRED_HELPER_CONTENT = `#!/bin/sh
test "$1" = get || exit 0
printf "username=unused\\npassword=%s\\n" "$CLAUDE_CODE_SESSION_ACCESS_TOKEN"
`;
function gitProxyCredHelperPath(t) {
  return join(t, ".runner", "git-proxy-cred");
}
function coauthorHookStubs(t) {
  let e = join(t, ".runner", "git-hooks");
  return [
    ...y.map((n) => ({ path: join(e, n), content: E })),
    ...["commit-msg", "prepare-commit-msg"].map((n) => ({
      path: join(e, n),
      content: C,
    })),
  ];
}
async function configureGitProxyCredential(t) {
  let e = t.apiBaseUrl.replace(/\/+$/, ""),
    n;
  try {
    n = new URL(e).host;
  } catch {
    throw Error(
      `--use-anthropic-git-proxy: apiBaseUrl is not a valid URL: ${e}`,
    );
  }
  let o = join(t.baseDir, ".runner");
  await mkdir(o, { recursive: !0 });
  let i = gitProxyCredHelperPath(t.baseDir);
  (await writeFile(i, GIT_PROXY_CRED_HELPER_CONTENT, { mode: 448 }), await chmod(i, 448));
  let r = t.gitConfigPath ? ["--file", t.gitConfigPath] : ["--global"],
    a = [
      [`credential.https://${n}.helper`, `!'${x(i)}'`],
      [`credential.https://${n}.useHttpPath`, "false"],
      [`credential.https://${n}.username`, "unused"],
      [`http.https://${n}/.proactiveAuth`, "basic"],
    ];
  for (let [c, u] of a)
    await f("git", ["config", ...r, "--replace-all", c, u], {
      windowsHide: !0,
    });
  return (
    t.onStatus(
      `[runner:git] --use-anthropic-git-proxy: credential helper registered for https://${n} (${i})`,
    ),
    e
  );
}
async function v(t, e, n) {
  let o = join(t, "git-hooks"),
    i = e[0] === "--file" ? e : [],
    r = await f("git", ["config", ...i, "--get", "core.hooksPath"], {
      windowsHide: !0,
    }).then(
      (a) => a.stdout.trim(),
      () => "",
    );
  if (r !== "" && r !== o) {
    n(
      `[runner:git] --configure-git: core.hooksPath already set (${r}); skipping Co-authored-by hook install so existing hooks keep running`,
    );
    return;
  }
  await mkdir(o, { recursive: !0 });
  for (let a of y) {
    let c = join(o, a);
    (await writeFile(c, E, { mode: 493 }), await chmod(c, 493));
  }
  for (let a of ["commit-msg", "prepare-commit-msg"]) {
    let c = join(o, a);
    (await writeFile(c, C, { mode: 493 }), await chmod(c, 493));
  }
  (await f("git", ["config", ...e, "--replace-all", "core.hooksPath", o], {
    windowsHide: !0,
  }),
    n(`[runner:git] --configure-git: core.hooksPath=${o}`));
}
var y = [
    "applypatch-msg",
    "pre-applypatch",
    "post-applypatch",
    "pre-commit",
    "pre-merge-commit",
    "post-commit",
    "pre-rebase",
    "post-checkout",
    "post-merge",
    "pre-push",
    "reference-transaction",
    "fsmonitor-watchman",
    "pre-auto-gc",
    "post-rewrite",
    "sendemail-validate",
    "post-index-change",
  ],
  E = `#!/bin/sh
common_dir=$(git rev-parse --git-common-dir 2>/dev/null) || common_dir=.git
local_hook="$common_dir/hooks/$(basename "$0")"
[ -x "$local_hook" ] && exec "$local_hook" "$@"
exit 0
`,
  C = `#!/bin/sh
common_dir=$(git rev-parse --git-common-dir 2>/dev/null) || common_dir=.git
local_hook="$common_dir/hooks/$(basename "$0")"
if [ -x "$local_hook" ]; then
  "$local_hook" "$@" || exit $?
fi
email="$CCR_SESSION_ACCOUNT_EMAIL"
nl='
'
case "$email" in
  ''|*'<'*|*'>'*|*"$nl"*) email='' ;;
esac
if [ -n "$email" ] && printf %s "$email" | LC_ALL=C grep -q '[^ -~]'; then
  email=''
fi
if [ -n "$email" ]; then
  name="\${email%%@*}"
  git interpret-trailers --in-place \\
    --if-exists addIfDifferent \\
    --trailer "Co-authored-by: $name <$email>" "$1"
fi
exit 0
`;
function x(t) {
  return t.replace(/'/g, "'\\''");
}
function H(t) {
  let e = !1,
    n,
    o,
    i;
  for (let r = 0; r < t.length; r++) {
    let a = t[r];
    if (a === "-Y" && t[r + 1] === "sign") ((e = !0), r++);
    else if (a === "-n") n = t[++r];
    else if (a === "-f") o = t[++r];
    else if (a.startsWith("-")) {
      if (t[r + 1] !== void 0 && !t[r + 1].startsWith("-")) r++;
    } else if (i === void 0) i = a;
  }
  if (!e)
    throw Error(
      `code-sign: only SSH-style signing (-Y sign) is supported; got: ${t.join(" ")}`,
    );
  if (!i) throw Error("code-sign: no file specified to sign");
  return { bufferFile: resolve(i), namespace: n, keyFile: o };
}
async function I(t, e) {
  let n = e.env.CLAUDE_CODE_REMOTE_SESSION_ID,
    o = e.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN,
    i = (e.env.ANTHROPIC_BASE_URL || e.env.SESSION_INGRESS_URL || "").replace(
      /\/+$/,
      "",
    );
  if (!n || !D.test(n))
    throw Error(
      "code-sign: CLAUDE_CODE_REMOTE_SESSION_ID is unset or malformed \u2014 " +
        "is this process a descendant of a runner-spawned session?",
    );
  if (!o) throw Error("code-sign: CLAUDE_CODE_SESSION_ACCESS_TOKEN is unset");
  if (!i) throw Error("code-sign: ANTHROPIC_BASE_URL is unset");
  let r = await readFile(t.bufferFile, "utf8"),
    a = R(),
    c = JSON.stringify({
      contents: r,
      source: { type: "git_repository" },
      git_object_format: a,
    }),
    u = `${i}/v1/code/sessions/${n}/sign-commit`,
    g = await e.fetchFn(u, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "anthropic-version": "2023-06-01",
        "x-environment-runner-version": `shr-${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}`,
        authorization: `Bearer ${o}`,
      },
      body: c,
      ...getProxyFetchOptions({ url: u }),
      signal: AbortSignal.timeout(30000),
    });
  if (!g.ok) {
    let S = await g.text().catch(() => "");
    throw Error(
      `code-sign: sign-commit returned HTTP ${g.status}` +
        (S ? `: ${U(S, 200)}` : ""),
    );
  }
  let m = await g.json();
  if (!m.signature) throw Error("code-sign: response missing signature");
  let d = `${t.bufferFile}.sig`;
  return (await writeFile(d, m.signature), d);
}
function R() {
  try {
    return execFileSync("git", ["rev-parse", "--show-object-format"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
      windowsHide: !0,
      cwd: void 0,
    }).trim() === "sha256"
      ? "sha256"
      : "sha1";
  } catch {
    return "sha1";
  }
}
function U(t, e) {
  return t.length > e ? t.slice(0, e) + "\u2026" : t;
}
async function selfHostedRunnerCodeSignMain(t) {
  try {
    let e = H(t);
    (await I(e, { env: process.env, fetchFn: fetch }), process.exit(0));
  } catch (e) {
    (process.stderr.write(`${e instanceof Error ? e.message : String(e)}
`),
      process.exit(1));
  }
}
export { parseGitVersion, configureGitForSigning, codeSignArtifacts, configureGitGovernedEntries, readGitVersion, GIT_PROXY_CRED_HELPER_CONTENT, gitProxyCredHelperPath, coauthorHookStubs, configureGitProxyCredential, selfHostedRunnerCodeSignMain };

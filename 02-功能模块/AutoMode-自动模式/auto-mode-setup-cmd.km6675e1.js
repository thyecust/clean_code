// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import { NP } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import { ce } from "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { ZO } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-ajtn749s.js";
import "../插件系统/chunk-hh8f1qrw.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5qbcynds.js";
import "../图片-截图-ComputerUse/chunk-b8jsase9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-5jqttbex.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../后台任务-Shell管理/chunk-x3txegas.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-x7kby92q.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1945b2ak.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/chunk-tzqq81r7.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/chunk-5j0f24ra.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-n0fk8fsb.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import "../上下文压缩-Compact/chunk-mxt9bjz3.js";
import "../认证-OAuth登录/chunk-x3rm9w4b.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../Teammates团队/chunk-6b13bhw1.js";
import "../Teammates团队/chunk-t899nada.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import "../Skills技能/chunk-1zy5c8mf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwtsmfpc.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../Bridge-RemoteControl/chunk-3j7ezsr7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../后台任务-Shell管理/chunk-9d5wk5b9.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../Teammates团队/chunk-3k2smxfn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../Bridge-RemoteControl/chunk-mxsfy35q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0f2h3r35.js";
import "../ClaudeinChrome/chunk-hnp84hf6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-21sqz10e.js";
import "../权限系统/chunk-1y2g140m.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-mvw7xg6n.js";
import "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../权限系统/chunk-8rrcddth.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../语音-音频/chunk-cfhndstm.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-t76ttx77.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/chunk-bvxymt09.js";
import "../Bridge-RemoteControl/chunk-ct52ffwb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6smvq03f.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0kqw1wf5.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import { ece, bSe, wSe } from "../权限系统/chunk-4wrkmv3h.js";
import { PIe, lLt } from "./chunk-z0qj8awf.js";
import "../Git-Worktree/chunk-33y3h2sy.js";
import "../../01-核心基础设施/设置-配置/chunk-5q6f0q9d.js";
import "../Teammates团队/chunk-mrfx53ye.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gyn0kh7v.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rrrsz7e6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import "../插件系统/chunk-33bdfgmx.js";
import "../MCP客户端/chunk-0mwqsv0r.js";
import "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import "../DesignSync/chunk-5kyac4wk.js";
import "../MCP客户端/chunk-tznd4407.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-anxypace.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-f1stkzph.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qd67kfe4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k1vb7vky.js";
import "../工具Monitor/chunk-kxk3njnj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w8hsca1t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-339z9efw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sp33tdvc.js";
import "../Teammates团队/chunk-eey53z5b.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bacs4ztm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6eskfcpn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cyyrj58q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-px58ry6q.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vp8yvx5r.js";
import "../工具ToolSearch/chunk-1m51pqtd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jzy6p47z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nfcecy7x.js";
import "../权限系统/chunk-pcxn6gwz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w4swsde7.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-v2wxtqf7.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import "../图片-截图-ComputerUse/chunk-6kdvf977.js";
import { createHash as _ } from "crypto";
import { realpath as y } from "fs/promises";
import { tmpdir as w } from "os";
import { isAbsolute as g, relative as x, resolve as h } from "path";
var C = ["user", "project"],
  A = { user: "all", project: "project" },
  n = `Usage:
  /auto-mode-setup [--request-id <uuid>] --wizard posture=<personal|open-source|enterprise|mixed> scope=<all|project> depth=<both|shell|repos|here> --propose
  /auto-mode-setup [--request-id <uuid>] [--apply-target <user|project>] --expect-sha256 <64-hex> --apply-file <absolute-path>   (reads a proposal JSON from a file under the system temp dir or the Claude config dir \u2014 the caller must have shown it to the user first; --expect-sha256 is required and the apply refuses unless the file\u2019s exact bytes hash to the given sha256)

--request-id must come first when used. The token must be a UUID (canonical 8-4-4-4-12 hex-and-dash form, either case) and is echoed verbatim as "requestId" on the command's JSON result, so a host with several commands in flight can match replies to requests.

--apply-target doesn\u2019t change where the config is written \u2014 entries always land in the user settings file. It refuses a proposal whose scope answer doesn\u2019t match the save choice (user \u2194 scope=all, project \u2194 scope=project). Flags ride in the order shown; everything after --apply-file is the path.`,
  S = /^[0-9a-fA-F]{64}$/,
  k = 1e6,
  v = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  V = async (e, t) => {
    let s = R(e);
    return j(await q(s, t), s.requestId);
  };
async function q(e, t) {
  if (e.mode === "usage") {
    if (e.logCode !== void 0) f("auto_mode_setup_write", e.logCode);
    return { ok: !1, code: "usage", reason: e.message, usage: n };
  }
  if (e.mode === "apply-file") {
    if (e.expectedSha256 === void 0)
      return (
        f("auto_mode_setup_write", "missing_hash_arg"),
        {
          ok: !1,
          code: "missing_hash_arg",
          reason:
            "--expect-sha256 is required: pass the 64-character hex sha256 of the proposal file\u2019s exact bytes, before --apply-file. Every non-interactive apply is hash-bound.",
        }
      );
    if (!S.test(e.expectedSha256))
      return (
        f("auto_mode_setup_write", "bad_hash_arg"),
        {
          ok: !1,
          code: "bad_hash_arg",
          reason:
            "--expect-sha256 must be the 64-character hex sha256 digest of the proposal file\u2019s exact bytes.",
        }
      );
  }
  let s = ce(t);
  if (e.mode === "propose") {
    let r = await PIe(
      e.answers,
      s,
      t.abortController.signal,
      void 0,
      void 0,
      t.storageV5,
      t.credentials,
    );
    if (!r.ok) return { ok: !1, code: r.code, reason: r.reason };
    return { ok: !0, proposal: r.proposal };
  }
  if (!g(e.path) || ece(e.path) || !(await T(e.path)))
    return (
      f("auto_mode_setup_write", "bad_path"),
      {
        ok: !1,
        code: "bad_path",
        reason:
          "Pass an absolute path under the system temp directory or the Claude config directory \u2014 --apply-file only reads proposal files the reviewing host wrote there.",
      }
    );
  if (ZO(e.path, { ...s, blockReadsOutsideWorkingDirectories: void 0 }))
    return (
      f("auto_mode_setup_write", "read_denied"),
      {
        ok: !1,
        code: "read_denied",
        reason:
          "That path is covered by a permissions.deny read rule. Write the proposal somewhere the session can read.",
      }
    );
  let o = await NP(e.path, k, {
    noFollow: !0,
    requireNlink1: !0,
    sniffEncoding: !0,
    withBytes: !0,
  });
  if (o === null)
    return (
      f("auto_mode_setup_write", "read_failed"),
      {
        ok: !1,
        code: "read_failed",
        reason:
          "Couldn\u2019t read the proposal file. Check the path and that it is a regular file.",
      }
    );
  let i = o.content;
  if (o.truncated)
    return (
      f("auto_mode_setup_write", "too_large"),
      {
        ok: !1,
        code: "too_large",
        reason:
          "The proposal file is over the 1 MB cap \u2014 a real proposal is a few KB. Regenerate it with --propose.",
      }
    );
  let d = e.expectedSha256.toLowerCase();
  if (_("sha256").update(o.bytes).digest("hex") !== d)
    return (
      f("auto_mode_setup_write", "hash_mismatch"),
      {
        ok: !1,
        code: "hash_mismatch",
        expectedSha256: d,
        reason:
          "The proposal file\u2019s bytes do not match the reviewed digest \u2014 the file changed after it was approved. Nothing was written; regenerate the proposal, re-review, and retry.",
      }
    );
  let a = lLt(i);
  if (!a.ok)
    return (
      f("auto_mode_setup_write", a.code),
      {
        ok: !1,
        code: a.code,
        reason:
          a.code === "parse_failed"
            ? "That file doesn\u2019t contain a proposal this command can read. Regenerate it with --propose and pass that output."
            : a.reason.replace(
                /Re-run to try again\.?$/,
                "Regenerate the proposal with --propose.",
              ),
      }
    );
  if (e.target !== void 0) {
    let r = A[e.target];
    if (a.proposal.scope !== r)
      return (
        f("auto_mode_setup_write", "scope_mismatch"),
        {
          ok: !1,
          code: "scope_mismatch",
          reason:
            a.proposal.scope === void 0
              ? `This proposal was generated before save scope was recorded, so --apply-target ${e.target} can\u2019t confirm it matches. Regenerate the proposal with --propose, answering scope=${r}.`
              : `This proposal was generated for a different save scope (${a.proposal.scope}) than --apply-target ${e.target} expects (${r}). Regenerate the proposal with --propose, answering scope=${r}.`,
        }
      );
  }
  try {
    return {
      ok: !0,
      ...(await wSe(
        {
          mode: a.proposal.mode,
          autoMode: {
            environment: a.proposal.environment,
            ...(a.proposal.allow.length > 0 && { allow: a.proposal.allow }),
            ...(a.proposal.soft_deny.length > 0 && {
              soft_deny: a.proposal.soft_deny,
            }),
            ...(a.proposal.hard_deny.length > 0 && {
              hard_deny: a.proposal.hard_deny,
            }),
          },
          removeFromPermissionsAllow: a.proposal.remove_from_permissions_allow,
        },
        t.storageV5,
      )),
      ...(e.target !== void 0 && { target: e.target }),
      ...(a.droppedUnsafeAllowCount > 0 && {
        droppedUnsafeAllowCount: a.droppedUnsafeAllowCount,
      }),
    };
  } catch (r) {
    return {
      ok: !1,
      code: r instanceof bSe ? r.code : "write_failed",
      reason: r instanceof Error ? r.message : String(r),
    };
  }
}
async function T(e) {
  let t = h(e),
    s = new Set();
  for (let o of [w(), be()]) {
    s.add(h(o));
    try {
      s.add(await y(o));
    } catch {}
  }
  for (let o of s) {
    let i = x(o, t);
    if (i !== "" && !i.startsWith("..") && !g(i)) return !0;
  }
  return !1;
}
function I(e) {
  let t = e.match(/^--request-id(?:=|\s+(?!--))(\S+)\s*/);
  if (!t) {
    if (/^--request-id=?(?=\s|$)/.test(e))
      return {
        ok: !1,
        message: `--request-id needs a value.
${n}`,
      };
    return { ok: !0, rest: e };
  }
  let s = t[1];
  if (!v.test(s))
    return {
      ok: !1,
      message: `--request-id must be a UUID in canonical 8-4-4-4-12 hex-and-dash form (either case) \u2014 the token is refused, not echoed.
${n}`,
    };
  return { ok: !0, rest: e.slice(t[0].length), requestId: s };
}
function R(e) {
  let t = I(e.trim());
  if (!t.ok)
    return { mode: "usage", message: t.message, logCode: "bad_flag_grammar" };
  let s = P(t.rest);
  return t.requestId === void 0 ? s : { ...s, requestId: t.requestId };
}
function P(e) {
  let t = e.trim();
  if (t === "" || t === "--help" || t === "-h")
    return { mode: "usage", message: n };
  if (/^--request-id(?:=|\s|$)/.test(t))
    return {
      mode: "usage",
      message:
        `--request-id was given more than once \u2014 pass exactly one, as the first flag.
` + n,
      logCode: "bad_flag_grammar",
    };
  let s,
    o = t,
    i = o.match(/^--apply-target(?:[= ]\s*(\S+))?(?:\s+|$)/);
  if (i) {
    if (((s = c(i[1], C)), !s))
      return {
        mode: "usage",
        message: `--apply-target must be "user" or "project".
${n}`,
        logCode: "bad_flag_grammar",
      };
    if (((o = o.slice(i[0].length)), /^--apply-target(?:[= ]|\s|$)/.test(o)))
      return {
        mode: "usage",
        message:
          `--apply-target was given more than once \u2014 pass exactly one.
` + n,
        logCode: "bad_flag_grammar",
      };
    if (/^--request-id(?:=|\s|$)/.test(o))
      return {
        mode: "usage",
        message:
          `--request-id must come first, before --apply-target and --expect-sha256.
` + n,
        logCode: "bad_flag_grammar",
      };
    if (!/^(?:--expect-sha256|--apply-file)(?:\s|$)/.test(o))
      return {
        mode: "usage",
        message: `--apply-target only applies to --apply-file.
${n}`,
        logCode: "bad_flag_grammar",
      };
  }
  let d;
  if (/^--expect-sha256=/.test(o))
    return {
      mode: "usage",
      message:
        "--expect-sha256 takes its value space-separated, not with `=`: --expect-sha256 <64-hex> --apply-file <path>.\n" +
        n,
      logCode: "bad_flag_grammar",
    };
  if (/^--expect-sha256(?:\s|$)/.test(o)) {
    let u = o.match(/^--expect-sha256\s+(\S+)\s*(.*)$/s),
      p = u?.[1];
    if (p === void 0 || p.startsWith("--"))
      return {
        mode: "usage",
        message:
          `--expect-sha256 needs the 64-character hex sha256 of the proposal file\u2019s exact bytes.
` + n,
        logCode: "bad_flag_grammar",
      };
    if (((d = p), (o = u[2]), !/^--apply-file(?:\s|$)/.test(o)))
      return {
        mode: "usage",
        message:
          `--expect-sha256 applies only to --apply-file and must come directly before it (--apply-target goes before --expect-sha256).
` + n,
        logCode: "bad_flag_grammar",
      };
  }
  if (/^--apply-file(?:\s|$)/.test(o)) {
    let u = o.match(/^--apply-file\s+(.+)$/s);
    if (u) {
      let p = u[1].trim();
      if (/(?:^|\s)--expect-sha256(?:=|\s|$)/.test(p))
        return {
          mode: "usage",
          message:
            `--expect-sha256 must come before --apply-file, not after it.
` + n,
          logCode: "bad_flag_grammar",
        };
      if (/(?:^|\s)--request-id(?:=|\s|$)/.test(p))
        return {
          mode: "usage",
          message:
            `--request-id must come first, before --expect-sha256 and --apply-file \u2014 not after --apply-file.
` + n,
          logCode: "bad_flag_grammar",
        };
      if (/(?:^|\s)--apply-target(?:=|\s|$)/.test(p))
        return {
          mode: "usage",
          message:
            `--apply-target must come before --expect-sha256 and --apply-file \u2014 not after --apply-file.
` + n,
          logCode: "bad_flag_grammar",
        };
      return {
        mode: "apply-file",
        path: E(p),
        ...(s !== void 0 && { target: s }),
        ...(d !== void 0 && { expectedSha256: d }),
      };
    }
    return {
      mode: "usage",
      message:
        `--apply-file needs a path to the reviewed proposal JSON.
` + n,
      logCode: "bad_flag_grammar",
    };
  }
  let l = o.match(
    /^--wizard posture=(\S+) scope=(\S+) depth=(\S+)\s+--propose$/,
  );
  if (!l) {
    if (/--apply\b/.test(o))
      return {
        mode: "usage",
        message:
          "One-shot --apply isn\u2019t available (it would write model output with no review). Use --propose, show the result to the user, then --apply-file <path>.",
      };
    return {
      mode: "usage",
      message: `Couldn\u2019t parse arguments.
${n}`,
    };
  }
  let a = c(l[1], ["personal", "open-source", "enterprise", "mixed"]),
    r = c(l[2], ["all", "project"]),
    m = c(l[3], ["both", "shell", "repos", "here"]);
  if (!a || !r || !m)
    return {
      mode: "usage",
      message: `Couldn\u2019t parse arguments.
${n}`,
    };
  return { mode: "propose", answers: { posture: a, scope: r, depth: m } };
}
function E(e) {
  return (e.startsWith('"') && e.endsWith('"')) ||
    (e.startsWith("'") && e.endsWith("'"))
    ? e.slice(1, -1)
    : e;
}
function c(e, t) {
  return t.find((s) => s === e);
}
function j(e, t) {
  let s = t === void 0 ? e : { ...e, requestId: t };
  return { type: "text", value: b(s, null, 2) };
}
export {
  V as call,
  I as extractRequestId,
  T as isAllowedApplyFilePath,
  R as parseNonInteractiveArgs,
};

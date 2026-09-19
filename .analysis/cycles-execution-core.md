# execution-core.js 里的环

顶层绑定 8708 个 / 4.60 MB；**非平凡强连通分量 19 个**，合计 268 个绑定 / 1003 KB。

## 怎么读

- `A → B` 表示 **A 引用 B**，行号是引用点所在行。
- **[急切]** = 引用发生在模块顶层（求值时就要求值，是硬约束）；**[延迟]** = 在函数体内，运行时才求值。
- 「删掉它环就散」= 把该绑定移出这个环后，剩余成员之间不再成环。这是拆环的首选下手点。
- 一个强连通分量里通常有很多条环，「最短环」是最容易人工看懂的那条代表。

## 一览

| # | 绑定 | 大小 | 行号范围 | 内部边 | 其中急切 | 最短环 | 能单点解体 | 最少断点 |
|---|---:|---:|---|---:|---:|---:|---:|---:|
| 1 | 98 | 279 KB | 20749–167165 | 166 | 1 | 2 步 | 0 | 3 |
| 2 | 83 | 520 KB | 43060–153613 | 131 | 0 | 3 步 | 0 | 2 |
| 3 | 27 | 62 KB | 32595–34960 | 70 | 0 | 2 步 | 0 | 6 |
| 4 | 14 | 61 KB | 15262–17960 | 20 | 0 | 5 步 | 4 | 1 |
| 5 | 13 | 14 KB | 73125–113713 | 19 | 0 | 6 步 | 5 | 1 |
| 6 | 4 | 17 KB | 69883–70347 | 8 | 0 | 2 步 | 1 | 1 |
| 7 | 3 | 0 KB | 139257–139299 | 3 | 1 | 3 步 | 3 | 1 |
| 8 | 3 | 2 KB | 118473–118490 | 4 | 0 | 2 步 | 2 | 1 |
| 9 | 3 | 4 KB | 102291–102360 | 3 | 0 | 3 步 | 3 | 1 |
| 10 | 2 | 3 KB | 46044–46162 | 2 | 0 | 2 步 | 2 | 1 |
| 11 | 2 | 1 KB | 35639–35658 | 2 | 0 | 2 步 | 2 | 1 |
| 12 | 2 | 11 KB | 38525–38755 | 2 | 0 | 2 步 | 2 | 1 |
| 13 | 2 | 1 KB | 24390–24399 | 2 | 0 | 2 步 | 2 | 1 |
| 14 | 2 | 3 KB | 4632–4740 | 2 | 0 | 2 步 | 2 | 1 |
| 15 | 2 | 1 KB | 57927–57946 | 2 | 0 | 2 步 | 2 | 1 |
| 16 | 2 | 2 KB | 41538–41560 | 2 | 0 | 2 步 | 2 | 1 |
| 17 | 2 | 16 KB | 100871–101326 | 2 | 0 | 2 步 | 2 | 1 |
| 18 | 2 | 2 KB | 101510–101521 | 2 | 0 | 2 步 | 2 | 1 |
| 19 | 2 | 4 KB | 144486–144518 | 2 | 0 | 2 步 | 2 | 1 |

## 逐个环

### #1 — 98 个绑定 / 279 KB · 行 20749–167165

**最短环（2 步）**

```
Pmo → checkBashCommandPermissions   第 51854 行 [延迟]
    (gn) => checkBashCommandPermissions(gn, t, r),
checkBashCommandPermissions → Pmo   第 51767 行 [延迟]
    let d = await Pmo(e, t, r);
```

**内部急切边（1 条，硬约束）**

```
Fsn → ooo   第 36137 行
    var UAe = ooo(),
```

**贪心最小反馈点集（3 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
BashTool                           第 127319 行  var INNER_TOOL_USE_ID_SUFFIX = ":inner",
Ki                                 第 163426 行  function Ki() {
checkBashCommandPermissions        第  51747 行  async function checkBashCommandPermissions(e, t, r) {
```

**枢纽（度数最高的 8 个）**

```
Wds                                出 128 / 入   1   第 145795 行  function Wds() {
BashTool                           出  65 / 入  23   第 127319 行  var INNER_TOOL_USE_ID_SUFFIX = ":inner",
fyr                                出  51 / 入   1   第 163441 行  class fyr {
executeShellCommand                出  47 / 入   1   第 37157 行  async function executeShellCommand(e, t, r, o) {
Pmo                                出  34 / 入   1   第 51789 行  async function Pmo(e, t, r) {
Byr                                出  30 / 入   1   第 166563 行  class Byr {
Ki                                 出   4 / 入  25   第 163426 行  function Ki() {
trackGitOperation                  出  27 / 入   1   第 40561 行  function trackGitOperation(e, t, r, o) {
```

<details><summary>全部 98 个成员</summary>

```
第  20749 行  Variable     ike
第  20892 行  FunctionName createCommandQueue
第  21538 行  Variable     A6r
第  21541 行  FunctionName p7t
第  21546 行  FunctionName getCommandQueueInstance
第  21551 行  FunctionName Loe
第  21561 行  Variable     enqueuePendingNotification
第  21624 行  FunctionName Z6
第  35986 行  FunctionName ooo
第  36137 行  Variable     Fsn
第  37157 行  FunctionName executeShellCommand
第  40524 行  FunctionName wZe
第  40541 行  FunctionName Wao
第  40561 行  FunctionName trackGitOperation
第  40682 行  FunctionName xZe
第  40719 行  FunctionName $ae
第  49755 行  FunctionName Ypo
第  49874 行  FunctionName Sun
第  49882 行  FunctionName Qpo
第  50026 行  FunctionName buildCommandRuleSuggestions
第  50064 行  FunctionName amo
第  50595 行  FunctionName zL
第  50616 行  FunctionName verifyCommandsAgainstAllowRules(
第  50669 行  Variable     CPe
第  50892 行  Variable     Oun
第  50969 行  FunctionName vun
第  50980 行  FunctionName Cun
第  51025 行  FunctionName _mo
第  51201 行  FunctionName kmo
第  51533 行  FunctionName ryn
第  51554 行  FunctionName xmo
第  51677 行  FunctionName Rmo
第  51717 行  FunctionName Pun
第  51747 行  FunctionName checkBashCommandPermissions
第  51789 行  FunctionName Pmo
第 125109 行  FunctionName Her
第 125193 行  FunctionName Bpt
第 125252 行  FunctionName bZo
第 125274 行  FunctionName jer
第 125322 行  FunctionName startBackgroundShellTask
第 125402 行  FunctionName backgroundShellTask
第 125475 行  FunctionName Ger
第 127319 行  Variable     BashTool
第 127929 行  FunctionName Wes
第 128224 行  FunctionName substituteSkillShellCommands
第 128460 行  FunctionName createSkillCommand
第 128644 行  FunctionName Qes
第 128831 行  FunctionName dK
第 129053 行  FunctionName nts
第 129181 行  FunctionName getSkillDirCommands
第 129190 行  FunctionName ots
第 129641 行  FunctionName Dnr
第 129654 行  FunctionName Gpe
第 129800 行  FunctionName getPluginCommands
第 130016 行  FunctionName Nnr
第 130114 行  FunctionName getPluginSkills
第 143263 行  Variable     Ycr
第 145789 行  FunctionName x1e
第 145795 行  FunctionName Wds
第 145936 行  FunctionName builtInCommandNames
第 145960 行  FunctionName getBuiltinCommands
第 145965 行  FunctionName Gds
第 146057 行  FunctionName qds
第 146062 行  FunctionName Vds
第 146122 行  FunctionName getCommands
第 146363 行  FunctionName getSkillToolCommands
第 146368 行  FunctionName Qds
第 146468 行  FunctionName getAllowlistedSkillCommands
第 151077 行  FunctionName cmr
第 151092 行  FunctionName executeCwdChangedHooks
第 151103 行  FunctionName executeFileChangedHooks
第 151200 行  FunctionName executeSessionEndHooks
第 151528 行  FunctionName fmr
第 151616 行  FunctionName executeHooksOutsideREPL
第 152510 行  FunctionName dge
第 163347 行  FunctionName reAppendSessionMetadataAtExit
第 163387 行  FunctionName flushSessionStorageAtExit
第 163426 行  FunctionName Ki
第 163441 行  ClassName    fyr
第 165545 行  FunctionName recordQueueOperation
第 165949 行  FunctionName getFirstMeaningfulUserMessageTextContent
第 165987 行  FunctionName Bhr
第 166003 行  FunctionName KCt
第 166082 行  FunctionName appendEntryToFileAsync
第 166188 行  FunctionName linkSessionToPR
第 166223 行  FunctionName isSessionHistorySuppressed
第 166228 行  FunctionName isSessionHistorySuppressedFor
第 166238 行  FunctionName isPrecautionarySuppressionHeld
第 166243 行  FunctionName isPrecautionarySuppressionHeldFor
第 166306 行  FunctionName isCompactPairWithheldFromRemote
第 166311 行  FunctionName isRemoteEgressSuppressedFor
第 166316 行  FunctionName getCurrentSessionBridge
第 166332 行  FunctionName getCurrentSessionTitle
第 166563 行  ClassName    Byr
第 167152 行  Variable     shutdownCoordinators
第 167155 行  FunctionName kF
第 167160 行  FunctionName gracefulShutdownSync
第 167165 行  FunctionName isShuttingDown
```
</details>

### #2 — 83 个绑定 / 520 KB · 行 43060–153613

**最短环（3 步）**

```
getBuiltinToolsForContext → uue   第 107974 行 [延迟]（另有 1 处引用）
    D.push(uue, e$e, Rdt(), ...(nJ && areWorkflowsEnabled() ? [nJ] : []));
uue → buildSessionTools   第 98959 行 [延迟]
    Ai = buildSessionTools(Wo, excludeCoordinatorCommsMcpTools(hs.mcp.tools.concat(ur)), {
buildSessionTools → getBuiltinToolsForContext   第 108004 行 [延迟]
    let o = getBuiltinToolsForContext(e, r),
```

**贪心最小反馈点集（2 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
runAgentTurn                       第 121828 行  async function* runAgentTurn(e) {
getBuiltinToolsForContext          第 107959 行  var getBuiltinToolsForContext = (e, t) => {
```

**枢纽（度数最高的 8 个）**

```
Oer                                出 203 / 入   2   第 121958 行  async function* Oer(e, t, r) {
uue                                出 112 / 入   2   第 98246 行  var EGo = createLazyValue(() =>
runAgent                           出  80 / 入   3   第 94503 行  async function* runAgent({
f5o                                出  73 / 入   1   第 109030 行  async function f5o(e, t, r, o, d, p, _, E, C, I, D, N, F) {
getBuiltinToolDefinitions          出  54 / 入   4   第 107883 行  function getBuiltinToolDefinitions() {
ymr                                出  48 / 入   1   第 153613 行  async function* ymr({
runAsyncAgent                      出  42 / 入   2   第 97141 行  async function runAsyncAgent({
compactConversation                出  38 / 入   1   第 115624 行  async function compactConversation(e, t, r, o, d) {
```

<details><summary>全部 83 个成员</summary>

```
第  43060 行  FunctionName runUserPromptSubmitHooks
第  43160 行  FunctionName duo
第  54997 行  FunctionName v9
第  55130 行  FunctionName DPe
第  55331 行  FunctionName LPe
第  55622 行  FunctionName executePreToolHooks
第  55675 行  FunctionName executePostToolHooks
第  55699 行  FunctionName executePostToolUseFailureHooks
第  55730 行  FunctionName executePostToolBatchHooks
第  55755 行  FunctionName executePermissionDeniedHooks
第  55805 行  Variable     nSn
第  55843 行  FunctionName FPe
第  55922 行  FunctionName lho
第  55973 行  FunctionName fho
第  56027 行  FunctionName lSn
第  56109 行  FunctionName _ho
第  57493 行  FunctionName runPromptSubmitPipeline
第  57551 行  FunctionName Ckn
第  57593 行  FunctionName abo
第  57856 行  FunctionName mot
第  58016 行  FunctionName Okn
第  58092 行  FunctionName kle
第  58174 行  FunctionName Nkn
第  58196 行  FunctionName pbo
第  58327 行  FunctionName Fkn
第  68505 行  FunctionName M0e
第  68682 行  FunctionName runCompaction
第  68752 行  FunctionName finalizeCompaction
第  71027 行  FunctionName runForkedAgent
第  71588 行  FunctionName NCo
第  71752 行  FunctionName R0e
第  72342 行  FunctionName jit
第  94503 行  FunctionName runAgent
第  95558 行  FunctionName HHn
第  97141 行  FunctionName runAsyncAgent
第  98246 行  Variable     uue
第 102418 行  FunctionName runUserPromptSubmitHooksForSession
第 102439 行  FunctionName executeUserPromptSubmitHooks
第 102489 行  FunctionName Njn
第 103118 行  FunctionName Fut
第 103134 行  FunctionName Xzo
第 104288 行  FunctionName E$e
第 104356 行  FunctionName nWn
第 104987 行  Variable     bfe
第 105199 行  FunctionName Uut
第 107354 行  Variable     pGn
第 107549 行  Variable     bGn
第 107883 行  FunctionName getBuiltinToolDefinitions
第 107959 行  Variable     getBuiltinToolsForContext
第 108003 行  FunctionName buildSessionTools
第 108339 行  FunctionName Ndt
第 108348 行  FunctionName r5o
第 108545 行  FunctionName Ldt
第 108690 行  FunctionName runToolUse
第 108878 行  FunctionName c5o
第 109030 行  FunctionName f5o
第 114839 行  FunctionName runSessionStartHooks
第 115624 行  FunctionName compactConversation
第 115937 行  FunctionName x9n
第 116312 行  FunctionName P0e
第 116653 行  FunctionName Rft
第 117869 行  ClassName    rpt
第 118656 行  FunctionName generatePromptSuggestion
第 118675 行  FunctionName NJn
第 118775 行  FunctionName fQo
第 118933 行  FunctionName mpt
第 119109 行  FunctionName UJn
第 119640 行  FunctionName HC
第 121300 行  FunctionName ser
第 121685 行  FunctionName eZo
第 121828 行  FunctionName runAgentTurn
第 121871 行  FunctionName oZo
第 121958 行  FunctionName Oer
第 150507 行  FunctionName nmr
第 151147 行  FunctionName executeSessionStartHooks
第 151177 行  FunctionName executeSubagentStartHooks
第 151311 行  FunctionName executeStopHooks
第 151367 行  FunctionName executeTeammateIdleHooks
第 151385 行  FunctionName executeTaskCreatedHooks
第 151406 行  FunctionName executeTaskCompletedHooks
第 153540 行  FunctionName executeHooks
第 153561 行  FunctionName hmr
第 153613 行  FunctionName ymr
```
</details>

### #3 — 27 个绑定 / 62 KB · 行 32595–34960

**最短环（2 步）**

```
tJe → NJe   第 33435 行 [延迟]
    (!gz(e) && NJe(e, t)) ||
NJe → tJe   第 33491 行 [延迟]
    if (e.type === "file_redirect") return tJe(e, t);
```

**贪心最小反馈点集（6 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
uro                                第  33262 行  function uro(e, t) {
Hb                                 第  32895 行  function Hb(e, t, r) {
NJe                                第  33490 行  function NJe(e, t) {
CJe                                第  34001 行  function CJe(e, t, r, o) {
dsn                                第  34688 行  function dsn(e, t, r, o) {
OU                                 第  33115 行  function OU(e, t) {
```

**枢纽（度数最高的 8 个）**

```
Bon                                出  39 / 入   1   第 34398 行  function Bon(e, t, r) {
Hb                                 出  18 / 入  14   第 32895 行  function Hb(e, t, r) {
uro                                出  28 / 入   1   第 33262 行  function uro(e, t) {
dsn                                出  26 / 入   2   第 34688 行  function dsn(e, t, r, o) {
V8                                 出  20 / 入   4   第 34574 行  function V8(e, t, r, { fed: o, assembled: d }) {
mae                                出  18 / 入   2   第 32622 行  function mae(e, t, r) {
csn                                出  16 / 入   2   第 34194 行  function csn(e, t, r, o, d) {
LJe                                出  15 / 入   3   第 33506 行  function LJe(e, t, r, o = !1) {
```

<details><summary>全部 27 个成员</summary>

```
第  32595 行  FunctionName Pon
第  32603 行  FunctionName GQe
第  32622 行  FunctionName mae
第  32895 行  FunctionName Hb
第  33047 行  FunctionName lro
第  33107 行  FunctionName AAe
第  33115 行  FunctionName OU
第  33157 行  FunctionName RAe
第  33174 行  FunctionName OJe
第  33251 行  FunctionName tI
第  33262 行  FunctionName uro
第  33414 行  FunctionName tJe
第  33458 行  FunctionName DJe
第  33490 行  FunctionName NJe
第  33506 行  FunctionName LJe
第  33622 行  FunctionName dro
第  33650 行  FunctionName isn
第  33882 行  FunctionName bL
第  33936 行  FunctionName Fon
第  34001 行  FunctionName CJe
第  34137 行  FunctionName lsn
第  34194 行  FunctionName csn
第  34369 行  FunctionName gro
第  34398 行  FunctionName Bon
第  34574 行  FunctionName V8
第  34688 行  FunctionName dsn
第  34960 行  FunctionName Uon
```
</details>

### #4 — 14 个绑定 / 61 KB · 行 15262–17960

**最短环（5 步）**

```
_oe → Hp   第 16000 行 [延迟]（另有 1 处引用）
    let t = Hp(),
Hp → N3t   第 17530 行 [延迟]
    return (p3e ??= new N3t());
N3t → HVr   第 17521 行 [延迟]
    checkDependenciesProbe = rs(HVr);
HVr → V3t   第 17936 行 [延迟]
    let e = V3t();
V3t → _oe   第 17916 行 [延迟]（另有 1 处引用）
    D6(_oe(getSettings_DEPRECATED() ?? {}));
```

**删掉它环就散（4 个）**：V3t, HVr, N3t, Hp

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
V3t                                第  17914 行  function V3t() {
```

**枢纽（度数最高的 8 个）**

```
_oe                                出  53 / 入   3   第 15999 行  function _oe(e) {
Hp                                 出   2 / 入  22   第 17529 行  function Hp() {
getEffectiveFilesystemPolicy       出   3 / 入   6   第 15336 行  function getEffectiveFilesystemPolicy() {
sG                                 出   1 / 入   7   第 17950 行  function sG() {
D6                                 出   3 / 入   5   第 17490 行  function D6(e) {
W3t                                出   4 / 入   2   第 17696 行  function W3t(e) {
boe                                出   1 / 入   4   第 15262 行  function boe() {
V3t                                出   3 / 入   2   第 17914 行  function V3t() {
```

<details><summary>全部 14 个成员</summary>

```
第  15262 行  FunctionName boe
第  15336 行  FunctionName getEffectiveFilesystemPolicy
第  15552 行  FunctionName sv
第  15827 行  FunctionName PVr
第  15999 行  FunctionName _oe
第  17490 行  FunctionName D6
第  17500 行  ClassName    N3t
第  17529 行  FunctionName Hp
第  17696 行  FunctionName W3t
第  17914 行  FunctionName V3t
第  17935 行  FunctionName HVr
第  17944 行  FunctionName shouldForceSandboxOn
第  17950 行  FunctionName sG
第  17960 行  FunctionName isScrubOnlySandboxMode
```
</details>

### #5 — 13 个绑定 / 14 KB · 行 73125–113713

**最短环（6 步）**

```
lYn → EJ   第 113229 行 [延迟]
    EJ(
EJ → eYn   第 113138 行 [延迟]
    eYn(e.host, t, d));
eYn → Yit   第 113077 行 [延迟]
    (_.push(await Yit(e, I)), aft(I.pluginName, e));
Yit → oIn   第 73126 行 [延迟]
    let r = oIn(e),
oIn → u8o   第 113718 行 [延迟]
    let p = t === "same-thread" ? C3o(e) : u8o(e);
u8o → lYn   第 113706 行 [延迟]
    t.worker.addEventListener("error", (o) => lYn(t, o)),
```

**删掉它环就散（5 个）**：eYn, EJ, u8o, oIn, Yit

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
u8o                                第 113644 行  function u8o(e) {
```

**枢纽（度数最高的 8 个）**

```
eYn                                出  16 / 入   1   第 113060 行  var eYn = (e, t, r) =>
u8o                                出  15 / 入   1   第 113644 行  function u8o(e) {
EJ                                 出   9 / 入   3   第 113111 行  function EJ(e, t, r) {
Yit                                出   7 / 入   3   第 73125 行  async function Yit(e, t) {
dYn                                出   7 / 入   1   第 113297 行  function dYn(e, t) {
yYn                                出   7 / 入   1   第 113569 行  function yYn(e, t, r) {
mYn                                出   6 / 入   1   第 113441 行  function mYn(e, { request: t, next: r, signal: o }) {
UI                                 出   2 / 入   5   第 113160 行  function UI(e) {
```

<details><summary>全部 13 个成员</summary>

```
第  73125 行  FunctionName Yit
第 113060 行  Variable     eYn
第 113111 行  FunctionName EJ
第 113142 行  FunctionName oYn
第 113160 行  FunctionName UI
第 113227 行  FunctionName lYn
第 113297 行  FunctionName dYn
第 113384 行  FunctionName fYn
第 113441 行  FunctionName mYn
第 113569 行  FunctionName yYn
第 113606 行  FunctionName _Yn
第 113644 行  FunctionName u8o
第 113713 行  FunctionName oIn
```
</details>

### #6 — 4 个绑定 / 17 KB · 行 69883–70347

**最短环（2 步）**

```
kCo → WebFetchTool   第 70384 行 [延迟]（另有 1 处引用）
    (De === "deny" ? findMatchingDenyRule(V, WebFetchTool) : findMatchingAskRule(V, WebFetchTool)) ?
WebFetchTool → kCo   第 70150 行 [延迟]
    let Oe = await kCo(d, p, t, C, o?.message.id);
```

**删掉它环就散（1 个）**：WebFetchTool

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
WebFetchTool                       第  69921 行  var WebFetchTool = buildTool({
```

**枢纽（度数最高的 8 个）**

```
WebFetchTool                       出  24 / 入   6   第 69921 行  var WebFetchTool = buildTool({
kCo                                出  10 / 入   1   第 70347 行  async function kCo(e, t, r, o, d) {
Mit                                出   2 / 入   2   第 69895 行  function Mit(e, t, r) {
Iit                                出   1 / 入   2   第 69883 行  function Iit(e) {
```

<details><summary>全部 4 个成员</summary>

```
第  69883 行  FunctionName Iit
第  69895 行  FunctionName Mit
第  69921 行  Variable     WebFetchTool
第  70347 行  FunctionName kCo
```
</details>

### #7 — 3 个绑定 / 0 KB · 行 139257–139299

**最短环（3 步）**

```
Hme → LINE_BREAK_PATTERN   第 139263 行 [延迟]
    LINE_BREAK_PATTERN,
LINE_BREAK_PATTERN → OS   第 139257 行 [急切]
    var indentAndEscapeForwardedTurns = OS,
OS → Hme   第 139302 行 [延迟]
    Z1(Hme(e)).split(`
```

**内部急切边（1 条，硬约束）**

```
LINE_BREAK_PATTERN → OS   第 139257 行
    var indentAndEscapeForwardedTurns = OS,
```

**删掉它环就散（3 个）**：Hme, OS, LINE_BREAK_PATTERN

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
OS                                 第 139299 行  function OS(e) {
```

**枢纽（度数最高的 8 个）**

```
OS                                 出   2 / 入   7   第 139299 行  function OS(e) {
Hme                                出   1 / 入   4   第 139261 行  function Hme(e) {
LINE_BREAK_PATTERN                 出   2 / 入   2   第 139257 行  var indentAndEscapeForwardedTurns = OS,
```

<details><summary>全部 3 个成员</summary>

```
第 139257 行  Variable     LINE_BREAK_PATTERN
第 139261 行  FunctionName Hme
第 139299 行  FunctionName OS
```
</details>

### #8 — 3 个绑定 / 2 KB · 行 118473–118490

**最短环（2 步）**

```
$7o → ipt   第 118518 行 [延迟]（另有 1 处引用）
    ipt(e, spt);
ipt → $7o   第 118485 行 [延迟]
    let r = setTimeout($7o, t, e);
```

**删掉它环就散（2 个）**：$7o, ipt

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
ipt                                第 118484 行  function ipt(e, t) {
```

**枢纽（度数最高的 8 个）**

```
$7o                                出  10 / 入   1   第 118490 行  function $7o(e) {
AJ                                 出   6 / 入   2   第 118473 行  function AJ(e) {
ipt                                出   1 / 入   2   第 118484 行  function ipt(e, t) {
```

<details><summary>全部 3 个成员</summary>

```
第 118473 行  FunctionName AJ
第 118484 行  FunctionName ipt
第 118490 行  FunctionName $7o
```
</details>

### #9 — 3 个绑定 / 4 KB · 行 102291–102360

**最短环（3 步）**

```
applyResolvedSessionName → applySessionName   第 102379 行 [延迟]
    else await applySessionName(re, "collision", r, !1, !1, _);
applySessionName → applySessionNameAndTitle   第 102292 行 [延迟]
    let _ = await applySessionNameAndTitle(e, t, r, o, d, p);
applySessionNameAndTitle → applyResolvedSessionName   第 102348 行 [延迟]（另有 1 处引用）
    await applyResolvedSessionName(I, t, r, C, o, E, p, V);
```

**删掉它环就散（3 个）**：applyResolvedSessionName, applySessionNameAndTitle, applySessionName

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
applySessionNameAndTitle           第 102297 行  async function applySessionNameAndTitle(e, t, r, o = !1, d = !1, p) {
```

**枢纽（度数最高的 8 个）**

```
applySessionNameAndTitle           出  11 / 入   1   第 102297 行  async function applySessionNameAndTitle(e, t, r, o = !1, d = !1, p) {
applyResolvedSessionName           出   7 / 入   1   第 102360 行  async function applyResolvedSessionName(e, t, r, o, d = !1, p, _, E) {
applySessionName                   出   1 / 入   2   第 102291 行  async function applySessionName(e, t, r, o = !1, d = !1, p) {
```

<details><summary>全部 3 个成员</summary>

```
第 102291 行  FunctionName applySessionName
第 102297 行  FunctionName applySessionNameAndTitle
第 102360 行  FunctionName applyResolvedSessionName
```
</details>

### #10 — 2 个绑定 / 3 KB · 行 46044–46162

**最短环（2 步）**

```
lpo → ott   第 46218 行 [延迟]
    let ue = ott(V, re, r, !0, p === '"');
ott → lpo   第 46083 行 [延迟]
    let N = lpo(C, r === 0 || t, r + 1);
```

**删掉它环就散（2 个）**：lpo, ott

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
ott                                第  46044 行  function ott(e, t, r, o, d = !1) {
```

**枢纽（度数最高的 8 个）**

```
ott                                出   8 / 入   2   第 46044 行  function ott(e, t, r, o, d = !1) {
lpo                                出   6 / 入   1   第 46162 行  function lpo(e, t, r) {
```

<details><summary>全部 2 个成员</summary>

```
第  46044 行  FunctionName ott
第  46162 行  FunctionName lpo
```
</details>

### #11 — 2 个绑定 / 1 KB · 行 35639–35658

**最短环（2 步）**

```
jro → Iae   第 35676 行 [延迟]（另有 1 处引用）
    let E = await Iae(e, r.slice(r.indexOf(_)).join(" "), o + 1, d + 1);
Iae → jro   第 35651 行 [延迟]
    let F = N ? await jro(e, C, I, r, o) : await buildCommandPrefixFromArgs(C, I, D);
```

**删掉它环就散（2 个）**：jro, Iae

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
Iae                                第  35639 行  async function Iae(e, t, r = 0, o = 0) {
```

**枢纽（度数最高的 8 个）**

```
Iae                                出   5 / 入   2   第 35639 行  async function Iae(e, t, r = 0, o = 0) {
jro                                出   4 / 入   1   第 35658 行  async function jro(e, t, r, o, d) {
```

<details><summary>全部 2 个成员</summary>

```
第  35639 行  FunctionName Iae
第  35658 行  FunctionName jro
```
</details>

### #12 — 2 个绑定 / 11 KB · 行 38525–38755

**最短环（2 步）**

```
Bso → ReadTool   第 38878 行 [延迟]
    throw ((He += Q8(ReadTool, U, d)), new R(He, "File does not exist"));
ReadTool → Bso   第 38661 行 [延迟]
    return Bso(e, t, o);
```

**删掉它环就散（2 个）**：Bso, ReadTool

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
ReadTool                           第  38525 行  var ReadTool = buildTool({
```

**枢纽（度数最高的 8 个）**

```
ReadTool                           出  15 / 入   9   第 38525 行  var ReadTool = buildTool({
Bso                                出   6 / 入   1   第 38755 行  async function Bso(
```

<details><summary>全部 2 个成员</summary>

```
第  38525 行  Variable     ReadTool
第  38755 行  FunctionName Bso
```
</details>

### #13 — 2 个绑定 / 1 KB · 行 24390–24399

**最短环（2 步）**

```
qXr → C0   第 24403 行 [延迟]
    if (e.type === "tool_result") return C0(e.content, t);
C0 → qXr   第 24394 行 [延迟]
    for (let o of e) r += qXr(o, t);
```

**删掉它环就散（2 个）**：qXr, C0

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
C0                                 第  24390 行  function C0(e, t) {
```

**枢纽（度数最高的 8 个）**

```
C0                                 出   2 / 入   4   第 24390 行  function C0(e, t) {
qXr                                出   2 / 入   1   第 24399 行  function qXr(e, t) {
```

<details><summary>全部 2 个成员</summary>

```
第  24390 行  FunctionName C0
第  24399 行  FunctionName qXr
```
</details>

### #14 — 2 个绑定 / 3 KB · 行 4632–4740

**最短环（2 步）**

```
w$ → resolveProgramPath   第 4783 行 [延迟]
    let re = await resolveProgramPath(V, t, r, o + 1);
resolveProgramPath → w$   第 4683 行 [延迟]
    if ((await w$(p, t, r, o)) !== void 0) return "in_reach";
```

**删掉它环就散（2 个）**：w$, resolveProgramPath

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
resolveProgramPath                 第   4632 行  async function resolveProgramPath(e, t, r, o = 0) {
```

**枢纽（度数最高的 8 个）**

```
w$                                 出   8 / 入   2   第 4740 行  async function w$(e, t, r, o = 0) {
resolveProgramPath                 出   6 / 入   2   第 4632 行  async function resolveProgramPath(e, t, r, o = 0) {
```

<details><summary>全部 2 个成员</summary>

```
第   4632 行  FunctionName resolveProgramPath
第   4740 行  FunctionName w$
```
</details>

### #15 — 2 个绑定 / 1 KB · 行 57927–57946

**最短环（2 步）**

```
Mkn → stopObserver   第 57955 行 [延迟]
    (stopObserver(
stopObserver → Mkn   第 57942 行 [延迟]
    if (d && d[1].viaWorkerName === void 0) Mkn(e, d[1].reportTargetTaskId, o);
```

**删掉它环就散（2 个）**：Mkn, stopObserver

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
stopObserver                       第  57927 行  function stopObserver(e, t, r, o) {
```

**枢纽（度数最高的 8 个）**

```
stopObserver                       出   3 / 入   2   第 57927 行  function stopObserver(e, t, r, o) {
Mkn                                出   1 / 入   1   第 57946 行  function Mkn(e, t, r) {
```

<details><summary>全部 2 个成员</summary>

```
第  57927 行  FunctionName stopObserver
第  57946 行  FunctionName Mkn
```
</details>

### #16 — 2 个绑定 / 2 KB · 行 41538–41560

**最短环（2 步）**

```
Hlo → YZe   第 41572 行 [延迟]
    (stopWorkerCheckin(e), YZe(e, E, _, Date.now()));
YZe → Hlo   第 41541 行 [延迟]
    let p = setInterval(Hlo, d, e);
```

**删掉它环就散（2 个）**：Hlo, YZe

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
YZe                                第  41538 行  function YZe(e, t, r, o) {
```

**枢纽（度数最高的 8 个）**

```
Hlo                                出  10 / 入   1   第 41560 行  function Hlo(e) {
YZe                                出   2 / 入   3   第 41538 行  function YZe(e, t, r, o) {
```

<details><summary>全部 2 个成员</summary>

```
第  41538 行  FunctionName YZe
第  41560 行  FunctionName Hlo
```
</details>

### #17 — 2 个绑定 / 16 KB · 行 100871–101326

**最短环（2 步）**

```
izo → szo   第 101328 行 [延迟]
    if (szo.has(t)) continue;
szo → izo   第 101070 行 [延迟]
    if (E?.type === "prompt" && (izo(E) || isCoordinatorMainSession(r)))
```

**删掉它环就散（2 个）**：izo, szo

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
szo                                第 100871 行  var rzo = createLazyValue(() =>
```

**枢纽（度数最高的 8 个）**

```
szo                                出  41 / 入   1   第 100871 行  var rzo = createLazyValue(() =>
izo                                出   1 / 入   1   第 101326 行  function izo(e) {
```

<details><summary>全部 2 个成员</summary>

```
第 100871 行  Variable     szo
第 101326 行  FunctionName izo
```
</details>

### #18 — 2 个绑定 / 2 KB · 行 101510–101521

**最短环（2 步）**

```
killInProcessTeammate → hjn   第 101554 行 [延迟]（另有 1 处引用）
    ? withTimeout(I(), hjn, `pane teardown did not settle within ${hjn}ms`).then(
hjn → killInProcessTeammate   第 101514 行 [延迟]
    let { memberRemoval: p, osTeardown: _ } = killInProcessTeammate(e, t, r, d);
```

**删掉它环就散（2 个）**：killInProcessTeammate, hjn

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
hjn                                第 101510 行  var InProcessTeammateTask = {
```

**枢纽（度数最高的 8 个）**

```
killInProcessTeammate              出   3 / 入   1   第 101521 行  function killInProcessTeammate(e, t, r, o) {
hjn                                出   2 / 入   1   第 101510 行  var InProcessTeammateTask = {
```

<details><summary>全部 2 个成员</summary>

```
第 101510 行  Variable     hjn
第 101521 行  FunctionName killInProcessTeammate
```
</details>

### #19 — 2 个绑定 / 4 KB · 行 144486–144518

**最短环（2 步）**

```
hus → gus   第 144522 行 [延迟]
    o(gus, { display: "system" }));
gus → hus   第 144502 行 [延迟]
    await hus({
```

**删掉它环就散（2 个）**：hus, gus

**贪心最小反馈点集（1 个）** —— 逐个删掉这些，本分量里的环就全散开（贪心近似，不保证最小）：

```
gus                                第 144486 行  var dus = async (e, t, r) => {
```

**枢纽（度数最高的 8 个）**

```
hus                                出  10 / 入   1   第 144518 行  async function hus({ arg: e, source: t, context: r, onDone: o }) {
gus                                出   9 / 入   1   第 144486 行  var dus = async (e, t, r) => {
```

<details><summary>全部 2 个成员</summary>

```
第 144486 行  Variable     gus
第 144518 行  FunctionName hus
```
</details>

## 环与环之间的依赖（凝聚图）

解开一个环可能要先把另一个环解开，所以这里给出环与环之间谁依赖谁。

```
#1  →  #4
#2  →  #1, #6, #8, #12
#9  →  #1
#16  →  #1
#17  →  #1
```

没有出边（不依赖别的环）的：#3, #4, #5, #6, #7, #8, #10, #11, #12, #13, #14, #15, #18, #19

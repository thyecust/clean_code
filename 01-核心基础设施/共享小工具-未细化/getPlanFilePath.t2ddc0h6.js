// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [barrel thinned] 原本在此预载 49 个依赖 chunk；经查它们均已由主入口初始化，已移除以还原真实模块边界。
export {
  Uzt as PLAN_SNAPSHOT_MAX_CHARS,
  hJe as WORKSHOP_DOC_SNAPSHOT_MAX_CHARS,
  FEn as clearAllPlanSlugs,
  GEn as copyPlanForFork,
  a$e as copyPlanForResume,
  MN as getPlan,
  tve as getPlanAsync,
  Gh as getPlanFilePath,
  LN as getPlanSlug,
  UEn as getPlanWorkshopDoc,
  qoe as getPlanWorkshopDocPath,
  Ea as getPlansDirectory,
  Cp as notePlanFileForgotten,
  WK as notePlanFileWritten,
  GK as peekPlanSlug,
  $En as persistPlanEdit,
  jEn as planExistsAsync,
  Lf as planFiles,
  CEt as planWorkshopDocExists,
  BEn as planWorkshopDocExistsAsync,
  lh as primePlanSlugCollisions,
  WEn as readPlanFileFresh,
  gJe as resetPlanFileCacheToUnknown,
  lme as saveRejectedUltraplan,
  $zt as setPlanSlug,
  NEn as settlePlanFileCachePrime,
} from "../../02-功能模块/计划模式(Plan)/计划模式(Plan).e5mh1avy.js";

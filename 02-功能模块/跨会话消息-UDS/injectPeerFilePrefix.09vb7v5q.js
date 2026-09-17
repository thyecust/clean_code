// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 106 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  sanitizePeerFileName as pze,
  peerFileFailureNote as Rpt,
  peerFileCountCapNote as kpt,
  verifyPeerFileIntegrity as tFt,
  emitPeerFileReceiveTelemetry as nFt,
  readPeerFileBounded as xpt,
  injectPeerFilePrefix as rFt,
  peerTransferSpoolDir as fze,
  stageLocalPeerFile as Ean,
  sweepStaleSpoolEntries as Aan,
  materializeLocalPeerFiles as Khr,
} from "./peer-file-transfer.js";
import "../../01-核心基础设施/核心工具-未归类/file-transfer-config.js";
export {
  nFt as emitPeerFileReceiveTelemetry,
  rFt as injectPeerFilePrefix,
  Khr as materializeLocalPeerFiles,
  kpt as peerFileCountCapNote,
  Rpt as peerFileFailureNote,
  fze as peerTransferSpoolDir,
  xpt as readPeerFileBounded,
  pze as sanitizePeerFileName,
  Ean as stageLocalPeerFile,
  Aan as sweepStaleSpoolEntries,
  tFt as verifyPeerFileIntegrity,
};

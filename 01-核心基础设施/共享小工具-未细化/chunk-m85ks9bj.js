// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { makeOwnPublishesStore } from "../../02-功能模块/Artifact发布-渲染/chunk-01ymf0ar.js";
import { isWorkshopFile } from "../../02-功能模块/图表-Mermaid/chunk-743atbtj.js";
import { makePrReviewTargetsStore } from "../../02-功能模块/CodeReview/pr-review-target.js";
import { makeWhiteboardTelemetryStore } from "./whiteboard-telemetry.js";
import { uuidSlugFromUrl } from "../核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { createWorkshopTelemetryStore } from "./workshop-telemetry.js";
import { AGENT_COLOR_NAMES } from "./agent-color-palette.js";
import { hasFrameUrlPrefix } from "./frame-url-prefixes.js";
function a(e, r) {
  return Object.entries(e.frameUrls ?? {}).find(
    ([i, s]) => s?.url !== void 0 && !hasFrameUrlPrefix(i) && uuidSlugFromUrl(s.url) === r,
  )?.[0];
}
function l(e, r) {
  return (
    (e.workshopVerifiedSlugs ?? []).includes(r) ||
    Object.entries(e.frameUrls ?? {}).some(
      ([i, s]) => s?.url !== void 0 && uuidSlugFromUrl(s.url) === r && isWorkshopFile(i),
    )
  );
}
function createArtifactRegistries(e, r) {
  return {
    ownPublishes: makeOwnPublishesStore(e, r),
    workshopTelemetry: createWorkshopTelemetryStore(e, r),
    whiteboardTelemetry: makeWhiteboardTelemetryStore(e, r),
    prReviewTargets: makePrReviewTargetsStore(e, r),
    recordedPages: {
      isWorkshopPage: (i) => l(e(), i),
      localSourcePath: (i) => a(e(), i),
    },
  };
}
function createInMemoryArtifactRegistries() {
  let e = {};
  return createArtifactRegistries(
    () => e,
    (r) => {
      e = r(e);
    },
  );
}
var NOOP_TEAMMATE_COLORS = {
  assign: () => AGENT_COLOR_NAMES[0],
  get: () => {
    return;
  },
};
function createTeammateColorAssigner(e) {
  return {
    assign(r) {
      let i = e.get(),
        s = i.assignments.get(r);
      if (s) return s;
      let t = AGENT_COLOR_NAMES[i.index % AGENT_COLOR_NAMES.length];
      return (
        e.set((o) => {
          if (o.assignments.has(r)) return o;
          let n = new Map(o.assignments);
          return (n.set(r, t), { assignments: n, index: o.index + 1 });
        }),
        t
      );
    },
    get(r) {
      return e.get().assignments.get(r);
    },
  };
}
var EMPTY_PERMISSION_RELAYS = Object.freeze({ bridge: void 0, channel: void 0 });
class PermissionRelayRegistry {
  #e = void 0;
  #r = void 0;
  get bridge() {
    return this.#e;
  }
  get channel() {
    return this.#r;
  }
  connectBridge(e) {
    this.#e = e;
  }
  disconnectBridge() {
    this.#e = void 0;
  }
  setChannel(e) {
    this.#r = e;
  }
}
export { createArtifactRegistries, createInMemoryArtifactRegistries, NOOP_TEAMMATE_COLORS, createTeammateColorAssigner, EMPTY_PERMISSION_RELAYS, PermissionRelayRegistry };

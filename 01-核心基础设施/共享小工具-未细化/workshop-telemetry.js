// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { fromEnum } from "./analytics-fields.js";
import { logFeatureOk } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { sanitizeArtifactSlugForTelemetry, sanitizeArtifactVersionForTelemetry } from "../../02-功能模块/Artifact发布-渲染/chunk-01ymf0ar.js";
import { defineStoreField } from "./state-store.js";
var k = {
    startedSeen: [],
    completedSeen: [],
    startedPublishes: {},
    invokeT0: null,
  },
  createWorkshopTelemetryStore = defineStoreField("workshopTelemetry", k);
function markWorkshopInvokeStart(t) {
  t.set((e) => ({ ...e, invokeT0: performance.now() }));
}
function clearWorkshopInvokeStart(t) {
  if (t === void 0 || t.invokeT0 === null) return t;
  return { ...t, invokeT0: null };
}
function S(t, e) {
  if (t.startedSeen.includes(e)) return t;
  return { ...t, startedSeen: [...t.startedSeen, e] };
}
function m(t, e) {
  if (t.completedSeen.includes(e)) return t;
  return { ...t, completedSeen: [...t.completedSeen, e] };
}
function logWorkshopTurn(t, e, a, i, r, d) {
  if (
    (logFeatureOk("workshop_turn", {
      artifact_slug: sanitizeArtifactSlugForTelemetry(e),
      artifact_version: sanitizeArtifactVersionForTelemetry(a),
      decisions_total: r,
      decisions_resolved: d,
      state: fromEnum(i),
    }),
    i !== "started")
  )
    return;
  let s = !0;
  if ((t.set((n) => ((s = n.startedSeen.includes(e)), S(n, e))), !s))
    logFeatureOk("workshop_build_started", { artifact_slug: sanitizeArtifactSlugForTelemetry(e) });
}
function logWorkshopPublish(t, e, a, i, r, d) {
  let s;
  t.set((l) => {
    let o = l;
    if (o.invokeT0 !== null) o = { ...o, invokeT0: null };
    if (i === "started") o = S(o, e);
    if (r.n > 0) o = m(o, e);
    else if (i === "started" && !o.completedSeen.includes(e)) {
      let c = (o.startedPublishes[e] ?? 0) + 1;
      if (
        ((o = { ...o, startedPublishes: { ...o.startedPublishes, [e]: c } }),
        c >= 2)
      )
        o = m(o, e);
    }
    return ((s = { prev: l, next: o }), o);
  });
  let { prev: n, next: p } = s;
  if (n.invokeT0 !== null && d)
    logFeatureOk("workshop_first_page", {
      invoke_to_publish_ms: Math.round(performance.now() - n.invokeT0),
      first_publish_state: fromEnum(i),
    });
  if (!n.startedSeen.includes(e) && p.startedSeen.includes(e))
    logFeatureOk("workshop_build_started", { artifact_slug: sanitizeArtifactSlugForTelemetry(e) });
  if (!n.completedSeen.includes(e) && p.completedSeen.includes(e)) {
    let l = r.n > 0 ? "structural" : "post_kickoff_republish";
    logFeatureOk("workshop_build_completed", {
      artifact_slug: sanitizeArtifactSlugForTelemetry(e),
      artifact_version: sanitizeArtifactVersionForTelemetry(a),
      source: fromEnum(l),
      deliverables_n: r.n,
      deliverables_pr: r.pr,
      deliverables_artifact: r.artifact,
      deliverables_other: r.other,
    });
  }
}
export { createWorkshopTelemetryStore, markWorkshopInvokeStart, clearWorkshopInvokeStart, logWorkshopTurn, logWorkshopPublish };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
var IMAGE_TOKEN_BUDGET = { pxPerToken: 28, maxTargetPx: 1568, maxTargetTokens: 1568 };
function l(e, r) {
  return Math.floor((e - 1) / r) + 1;
}
function A(e, r, t) {
  return l(e, t) * l(r, t);
}
function fitSizeToTokenBudget(e, r, t) {
  let { pxPerToken: s, maxTargetPx: n, maxTargetTokens: i } = t;
  if (e <= n && r <= n && A(e, r, s) <= i) return [e, r];
  if (r > e) {
    let [o, u] = fitSizeToTokenBudget(r, e, t);
    return [u, o];
  }
  let m = e / r,
    p = e,
    a = 1;
  for (;;) {
    if (a + 1 === p) return [a, Math.max(Math.round(a / m), 1)];
    let o = Math.floor((a + p) / 2),
      u = Math.max(Math.round(o / m), 1);
    if (o <= n && A(o, u, s) <= i) a = o;
    else p = o;
  }
}
var MIN_IMAGE_SCALE = 0.1,
  MAX_IMAGE_SCALE = 1,
  DEFAULT_IMAGE_SCALE = MAX_IMAGE_SCALE;
function validateImageScale(e) {
  if (e === void 0) return;
  if (typeof e !== "number" || !Number.isFinite(e) || e < MIN_IMAGE_SCALE || e > MAX_IMAGE_SCALE)
    return {
      error: `scale must be a number in [${MIN_IMAGE_SCALE}, ${MAX_IMAGE_SCALE}] \u2014 e.g. 0.5 for a half-size image`,
    };
  return e;
}
var IMAGE_SCALE_DESCRIPTION = `Scale factor in [${MIN_IMAGE_SCALE}, ${MAX_IMAGE_SCALE}] for the returned image; 1 (default) uses the full image token budget, 0.5 returns an image at half the width and height (~quarter of the tokens). Coordinates are ALWAYS in the full-resolution coordinate frame (reported with every scaled screenshot), never in the scaled image's own pixels.`;
function formatScaleCoordinateFrameNote(e, r, t) {
  return `${e}-scale view; coordinate frame: ${r}x${t}.`;
}
function scaleImageDimensions(e, r) {
  let [t, s] = e,
    n = Number.isFinite(r) && r >= MIN_IMAGE_SCALE && r <= MAX_IMAGE_SCALE ? r : DEFAULT_IMAGE_SCALE;
  return [Math.max(1, Math.round(t * n)), Math.max(1, Math.round(s * n))];
}
export { IMAGE_TOKEN_BUDGET, fitSizeToTokenBudget, MIN_IMAGE_SCALE, MAX_IMAGE_SCALE, DEFAULT_IMAGE_SCALE, validateImageScale, IMAGE_SCALE_DESCRIPTION, formatScaleCoordinateFrameNote, scaleImageDimensions };

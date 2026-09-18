import { getBashParserModule } from "../../02-功能模块/记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";

var M9e = new Set(["program", "list", "pipeline"]),
  HZt = new Set([
    "&&",
    "||",
    "|",
    ";",
    "&",
    "|&",
    `
`,
  ]),
  Ox = 1e4,
  VXr = 65536;

function parseShellCommandRedirections(e) {
  let t = {
    commandWithoutRedirections: e,
    redirections: [],
    hasDangerousRedirection: !1,
    dangerousRedirectionReason: void 0,
  };
  if (!e || e.length > Ox) return t;
  let r = getBashParserModule().parse(e);
  if (!r) return t;
  let o = [],
    d = !1,
    p,
    _ = (I) => {
      if (I.type === "file_redirect") {
        let D = null,
          N = !1,
          F = null,
          U = 0;
        for (let ue of I.children)
          if (ue.type === ">" || ue.type === "&>" || ue.type === ">|") D = ">";
          else if (ue.type === ">>" || ue.type === "&>>" || ue.type === ">>|")
            D = ">>";
          else if (ue.type === ">&") ((D = ">"), (N = !0));
          else if (ue.type === "<&") {
            let de = I.children.filter(
              (_e) => _e !== ue && _e.type !== "file_descriptor",
            );
            if (de.length > 1 || de.some((_e) => qse(_e).startsWith("-"))) {
              if (((d = !0), p !== "network_device")) p = "shell_expansion";
            }
            return;
          } else if (ue.type === ">&-" || ue.type === "<&-") {
            if (
              I.children.filter(
                (_e) => _e !== ue && _e.type !== "file_descriptor",
              ).length > 0
            ) {
              if (((d = !0), p !== "network_device")) p = "shell_expansion";
            }
            return;
          } else if (ue.type === "<") {
            let de = I.children.filter(
              (Se) => Se !== ue && Se.type !== "file_descriptor",
            );
            if (de.length > 1) {
              if (((d = !0), p !== "network_device")) p = "shell_expansion";
              return;
            }
            let _e = de[0];
            if (_e) {
              let Se = qse(_e);
              if (/^\/dev\/(tcp|udp)\//.test(Se))
                ((d = !0), (p = "network_device"));
            }
            return;
          } else if (ue.type !== "file_descriptor") ((F = ue), U++);
        if (!D || !F) return;
        if (U > 1) {
          if (((d = !0), p !== "network_device")) p = "shell_expansion";
          return;
        }
        if (N && qse(F).startsWith("-")) {
          if (((d = !0), p !== "network_device")) p = "shell_expansion";
          return;
        }
        if (F.type === "number" && F.children.length === 0 && N) return;
        if (!(
          (F.type === "word" && F.children.length === 0) ||
          (F.type === "number" && F.children.length === 0) ||
          F.type === "raw_string" ||
          (F.type === "string" &&
            !F.children.some(
              (ue) => ue.type !== "string_content" && ue.type !== '"',
            ))
        )) {
          if (((d = !0), p !== "network_device")) p = "shell_expansion";
          return;
        }
        let re = qse(F);
        if (/^~|[*?[]/.test(re)) {
          if (((d = !0), p !== "network_device")) p = "shell_expansion";
          return;
        }
        if (re.startsWith("!") || re.startsWith("=")) {
          if (((d = !0), p !== "network_device")) p = "shell_expansion";
          return;
        }
        if (N && !/^[A-Za-z0-9./_-]+$/.test(re)) {
          if (((d = !0), p !== "network_device")) p = "shell_expansion";
          return;
        }
        if (/^\/dev\/(tcp|udp)\//.test(re)) {
          ((d = !0), (p = "network_device"));
          return;
        }
        o.push({ target: re, operator: D });
        return;
      }
      for (let D of I.children) _(D);
    };
  _(r);
  let E = [],
    C = (I) => {
      if (I.type === "comment") return;
      if (I.type === "redirected_statement") {
        for (let D of I.children) if (!D.type.endsWith("_redirect")) C(D);
        return;
      }
      if (M9e.has(I.type)) {
        for (let D of I.children) C(D);
        return;
      }
      E.push(I.text);
    };
  return (
    C(
      r.type === "ERROR" && r.children[0]?.type === "program"
        ? r.children[0]
        : r,
    ),
    {
      commandWithoutRedirections: E.length > 0 ? E.join(" ") : e,
      redirections: o,
      hasDangerousRedirection: d,
      dangerousRedirectionReason: p,
    }
  );
}

function extractCommandSegments(e) {
  if (!e) return [];
  if (e.length > Ox) return [e];
  let t = getBashParserModule().parse(e);
  if (!t) return [e];
  let r = [],
    o = (d) => {
      if (HZt.has(d.type) || d.type === "comment") return;
      if (d.type === "redirected_statement") {
        for (let p of d.children) if (!p.type.endsWith("_redirect")) o(p);
        return;
      }
      if (M9e.has(d.type)) {
        for (let p of d.children) o(p);
        return;
      }
      r.push(d.text);
    };
  return (
    o(
      t.type === "ERROR" && t.children[0]?.type === "program"
        ? t.children[0]
        : t,
    ),
    r
  );
}

function extractCommandSegmentsStrict(e) {
  if (!e || e.length > Ox) return null;
  let t = getBashParserModule().parse(e);
  if (!t) return null;
  let r = [],
    o = !0,
    d = (p) => {
      if (!o) return;
      if (HZt.has(p.type) || p.type === "comment") return;
      if (p.type === "redirected_statement") {
        for (let _ of p.children) if (!_.type.endsWith("_redirect")) d(_);
        return;
      }
      if (M9e.has(p.type)) {
        for (let _ of p.children) d(_);
        return;
      }
      if (p.type === "negated_command") {
        for (let _ of p.children) if (_.type !== "!") d(_);
        return;
      }
      if (p.type === "command" || p.type === "variable_assignment") {
        r.push(p.text);
        return;
      }
      o = !1;
    };
  return (d(t), o ? r : null);
}

function qse(e) {
  switch (e.type) {
    case "raw_string":
      return e.text.slice(1, -1);
    case "string":
      return e.text.slice(1, -1).replace(/\\([$`"\\\n])/g, (t, r) =>
        r ===
        `
`
          ? ""
          : r,
      );
    case "word":
      return e.text.replace(/\\([\s\S])/g, (t, r) =>
        r ===
        `
`
          ? ""
          : r,
      );
    default:
      return e.text;
  }
}

function hasSuspiciousRedirection(e) {
  if (e.type.endsWith("_redirect")) {
    let t = e.children.filter((p) => !WZt.has(p.type)),
      r = e.children.some((p) => p.type === ">&-" || p.type === "<&-"),
      o =
        !r &&
        e.children.some((p) => p.type === ">&" || p.type === "<&") &&
        t.some((p) => qse(p).startsWith("-")),
      d = e.type === "heredoc_redirect" || r || o ? 0 : 1;
    if (t.length > d) return !0;
  }
  return e.children.some(hasSuspiciousRedirection);
}

export {
  parseShellCommandRedirections,
  extractCommandSegments,
  extractCommandSegmentsStrict,
  hasSuspiciousRedirection,
};

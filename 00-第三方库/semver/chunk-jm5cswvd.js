// [claude-code-src shim]
// shim for chunk-jm5cswvd.js  (npm `semver` 7.7.3, whole package, 1 export)
// The original export is a __commonJS lazy factory: consumers write `pg()` and
// wrap with __toESM. So the replacement must stay a FACTORY, not a namespace.
import semver from "semver";
export const pg = () => semver;

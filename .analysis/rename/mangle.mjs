// Is this identifier still the bundler's minified output, or a real name?
//
// Inverting the question is more reliable: rather than trying to recognise the
// mangler's output, recognise what a human-written name looks like. The bundler's
// exports in this tree are overwhelmingly 2-4 characters, often with a capital in
// the middle (`uWe`, `pSe`, `kYn`) or a digit trapped inside (`b9e`, `t7t`, `q0e`),
// which a naive "contains an uppercase => camelCase" test misclassifies.
//
// Only a candidate filter and a lint gate — the naming agents make the real call.

/**
 * Real words that occur as export names in this tree. Needed because a short single
 * word is otherwise indistinguishable from mangler output by shape alone — `Server`
 * and `Ern` have the same form, and only one of them is a name a human wrote.
 * Grown empirically from what the naming agents have actually encountered.
 */
const SHORT_REAL_WORDS = new Set([
  // generic English words seen as exports
  "Event", "call", "color", "meta", "render", "lit", "log", "safe", "error", "value",
  "name", "type", "text", "node", "path", "root", "size", "list", "data", "file",
  "dir", "host", "port", "env", "key", "id", "url", "token", "theme", "state",
  // single-word PascalCase components/classes (barrel aliases like `A1 as Server`)
  "Server", "Client", "Provider", "Context", "Button", "Box", "Link", "Text", "Ansi",
  "Input", "Label", "Icon", "Badge", "Panel", "Modal", "Dialog", "Form", "Field",
  "Card", "Row", "Column", "Grid", "Table", "Chart", "View", "Frame", "Line",
  "Store", "Config", "Cache", "Logger", "Tool", "Task", "Job", "Queue", "Pool",
  "Result", "Request", "Response", "Item", "Entry", "Props", "Hook", "App", "Map", "Set",
]);


export function isClearlyReadable(n) {
  if (n === "default" || n === "*") return true;
  if (SHORT_REAL_WORDS.has(n)) return true;
  if (/^[A-Z][A-Z0-9_]{3,}$/.test(n)) return true;          // SCREAMING_SNAKE_CASE
  if (/^__[a-z][A-Za-z0-9]*$/.test(n)) return true;          // tslib / Babel helpers (__awaiter)
  // The mangler's names with a mid-word capital are 3-4 chars (`uWe`, `pSe`, `aAe`);
  // human names with one are 5+ (`useApp`, `rootOf`, `gitExe`).
  if (n.length < 5) return false;
  // Long names are human: an underscore-separated composite
  // (`fromSanitizer_SANITIZER_OUTPUT_ONLY`) or a word join (`getClientPlatform`).
  // The mangler only ever emits `_` as a leading char on a 2-3 char name (`_0e`).
  if (n.includes("_")) return true;
  if (!/^[A-Za-z][A-Za-z0-9]*$/.test(n)) return false;       // `$` mid-name => mangler
  if (/^[a-z]+$/.test(n)) return true;                       // a single lowercase word
  if (/[a-z][A-Z]/.test(n)) return true;                     // camelCase / PascalCase word join
  return false;
}

export function isMangled(n) {
  return !isClearlyReadable(n);
}

/**
 * Gate for a PROPOSED new name. Different question from `isClearlyReadable`: there we
 * must not rename a name a human already chose; here we only want to catch an agent
 * that pasted mangler output instead of naming. Shape tests, so short real words
 * (`init`, `Box`, `lit`) pass while mangler shapes do not.
 */
const KNOWN_PREFIXES = new Set([
  "is", "get", "set", "has", "to", "as", "use", "on", "by", "no", "do", "run",
  "new", "max", "min", "raw", "un", "in", "of", "at", "up", "my", "the",
]);

export function looksLikeManglerOutput(n) {
  if (n.length <= 2) return true;
  if (n.includes("$")) return true;
  if (/^[A-Z]{2,4}$/.test(n)) return true;                     // NE, JQ, UB, HA
  // uWe, pSe, kYn — but `isWsl`/`getX`/`hasY` have a recognisable prefix, so the
  // leading lowercase run being a known prefix means a human wrote it.
  {
    const m = n.match(/^([a-z]{1,2})[A-Z][a-z]{0,2}$/);
    if (m && !KNOWN_PREFIXES.has(m[1])) return true;
  }
  if (/^[a-z][0-9][a-z]$/.test(n)) return true;                // b9e, t7t, q0e
  // G8 / X0e / L8t — 但只在名字整体很短时才算。`is1mContextDisabled` 前几个字符里
  // 也有数字，那是人写的（is 1m context disabled），不能用同一条规则拦。
  if (n.length <= 6 && /^[A-Za-z]{1,3}[0-9]+[A-Za-z]*$/.test(n)) return true;
  if (/^[A-Z][a-z]?[A-Z][a-z]?$/.test(n)) return true;         // LPe, Aet, XFn
  return false;
}

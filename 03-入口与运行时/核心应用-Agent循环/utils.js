function isAskRuleDrivenReason(e) {
  if (e?.type === "rule" && e.rule.ruleBehavior === "ask") return !0;
  if (e?.type === "subcommandResults") {
    for (let t of e.reasons.values())
      if (t.behavior === "ask" && isAskRuleDrivenReason(t.decisionReason))
        return !0;
  }
  return !1;
}

function carriesAskRuleIntent(e) {
  return (
    isAskRuleDrivenReason(e.decisionReason) ||
    e.matchedAskRule?.ruleBehavior === "ask"
  );
}

export {
    isAskRuleDrivenReason,
    carriesAskRuleIntent
}
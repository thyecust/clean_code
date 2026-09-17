// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { useStoreSelector } from "./use-store-selector.js";
import { Qt, De, V, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { createPartialStateUpdater } from "./state-store.js";
F();
var AppStateContext = Qt(null),
  AppStateSessionContext = Qt(null),
  McpConnectionsContext = Qt(null);
function useMcpConnections() {
  let e = De(McpConnectionsContext);
  if (!e)
    throw ReferenceError(
      "useMcpConnections cannot be called outside of an <AppStateProvider />",
    );
  return e;
}
var ActivePluginsContext = Qt(null);
function useActivePlugins() {
  let e = De(ActivePluginsContext);
  if (!e)
    throw ReferenceError(
      "useActivePlugins cannot be called outside of an <AppStateProvider />",
    );
  return e;
}
function useAppStateSession() {
  let e = De(AppStateSessionContext);
  if (!e)
    throw ReferenceError(
      "useAppStateSession cannot be called outside of an <AppStateProvider />",
    );
  return e;
}
function t() {
  let e = De(AppStateContext);
  if (!e)
    throw ReferenceError(
      "useAppState/useSetAppState cannot be called outside of an <AppStateProvider />",
    );
  return e;
}
function useAppStateSelector(e) {
  let n = t();
  return useStoreSelector(n, e);
}
function useSetAppState() {
  return t().setState;
}
function usePartialStateUpdater() {
  let e = t();
  return V(() => createPartialStateUpdater(e.setState), [e]);
}
function useAppState() {
  return t();
}
function useAppStateSelectorUnchecked(e) {
  return useStoreSelector(De(AppStateContext), e);
}
export { AppStateContext, AppStateSessionContext, McpConnectionsContext, useMcpConnections, ActivePluginsContext, useActivePlugins, useAppStateSession, useAppStateSelector, useSetAppState, usePartialStateUpdater, useAppState, useAppStateSelectorUnchecked };

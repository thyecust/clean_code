// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 49 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { withTimeout } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { l, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Is, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Qcr, Bs, exe, SPn, Zcr, SW } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { kRe, sir } from "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import { subprocessEnv } from "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import { logErrorWithTelemetryMessage } from "../../01-核心基础设施/共享小工具-未细化/log-error-with-telemetry-message.js";
import { killProcessTree } from "../../01-核心基础设施/共享小工具-未细化/kill-process-tree.js";
import { toESM, commonJS, importMetaRequire } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var me = commonJS(function (zt) {
  Object.defineProperty(zt, "__esModule", { value: !0 });
  zt.stringArray =
    zt.array =
    zt.func =
    zt.error =
    zt.number =
    zt.string =
    zt.boolean =
      void 0;
  function Jn(e) {
    return e === !0 || e === !1;
  }
  zt.boolean = Jn;
  function Bt(e) {
    return typeof e === "string" || e instanceof String;
  }
  zt.string = Bt;
  function Kn(e) {
    return typeof e === "number" || e instanceof Number;
  }
  zt.number = Kn;
  function Qn(e) {
    return e instanceof Error;
  }
  zt.error = Qn;
  function Gn(e) {
    return typeof e === "function";
  }
  zt.func = Gn;
  function At(e) {
    return Array.isArray(e);
  }
  zt.array = At;
  function Yn(e) {
    return At(e) && e.every((t) => Bt(t));
  }
  zt.stringArray = Yn;
});
var et = commonJS(function (fr) {
  Object.defineProperty(fr, "__esModule", { value: !0 });
  fr.Message =
    fr.NotificationType9 =
    fr.NotificationType8 =
    fr.NotificationType7 =
    fr.NotificationType6 =
    fr.NotificationType5 =
    fr.NotificationType4 =
    fr.NotificationType3 =
    fr.NotificationType2 =
    fr.NotificationType1 =
    fr.NotificationType0 =
    fr.NotificationType =
    fr.RequestType9 =
    fr.RequestType8 =
    fr.RequestType7 =
    fr.RequestType6 =
    fr.RequestType5 =
    fr.RequestType4 =
    fr.RequestType3 =
    fr.RequestType2 =
    fr.RequestType1 =
    fr.RequestType =
    fr.RequestType0 =
    fr.AbstractMessageSignature =
    fr.ParameterStructures =
    fr.ResponseError =
    fr.ErrorCodes =
      void 0;
  var ue = me(),
    Xe;
  (function (e) {
    ((e.ParseError = -32700),
      (e.InvalidRequest = -32600),
      (e.MethodNotFound = -32601),
      (e.InvalidParams = -32602),
      (e.InternalError = -32603),
      (e.jsonrpcReservedErrorRangeStart = -32099),
      (e.serverErrorStart = -32099),
      (e.MessageWriteError = -32099),
      (e.MessageReadError = -32098),
      (e.PendingResponseRejected = -32097),
      (e.ConnectionInactive = -32096),
      (e.ServerNotInitialized = -32002),
      (e.UnknownErrorCode = -32001),
      (e.jsonrpcReservedErrorRangeEnd = -32000),
      (e.serverErrorEnd = -32000));
  })(Xe || (fr.ErrorCodes = Xe = {}));
  class Ze extends Error {
    constructor(e, t, r) {
      super(t);
      ((this.code = ue.number(e) ? e : Xe.UnknownErrorCode),
        (this.data = r),
        Object.setPrototypeOf(this, Ze.prototype));
    }
    toJson() {
      let e = { code: this.code, message: this.message };
      if (this.data !== void 0) e.data = this.data;
      return e;
    }
  }
  fr.ResponseError = Ze;
  class W {
    constructor(e) {
      this.kind = e;
    }
    static is(e) {
      return e === W.auto || e === W.byName || e === W.byPosition;
    }
    toString() {
      return this.kind;
    }
  }
  fr.ParameterStructures = W;
  W.auto = new W("auto");
  W.byPosition = new W("byPosition");
  W.byName = new W("byName");
  class O {
    constructor(e, t) {
      ((this.method = e), (this.numberOfParams = t));
    }
    get parameterStructures() {
      return W.auto;
    }
  }
  fr.AbstractMessageSignature = O;
  class Ht extends O {
    constructor(e) {
      super(e, 0);
    }
  }
  fr.RequestType0 = Ht;
  class Ut extends O {
    constructor(e, t = W.auto) {
      super(e, 1);
      this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  fr.RequestType = Ut;
  class Vt extends O {
    constructor(e, t = W.auto) {
      super(e, 1);
      this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  fr.RequestType1 = Vt;
  class Jt extends O {
    constructor(e) {
      super(e, 2);
    }
  }
  fr.RequestType2 = Jt;
  class Kt extends O {
    constructor(e) {
      super(e, 3);
    }
  }
  fr.RequestType3 = Kt;
  class Qt extends O {
    constructor(e) {
      super(e, 4);
    }
  }
  fr.RequestType4 = Qt;
  class Gt extends O {
    constructor(e) {
      super(e, 5);
    }
  }
  fr.RequestType5 = Gt;
  class Yt extends O {
    constructor(e) {
      super(e, 6);
    }
  }
  fr.RequestType6 = Yt;
  class Xt extends O {
    constructor(e) {
      super(e, 7);
    }
  }
  fr.RequestType7 = Xt;
  class Zt extends O {
    constructor(e) {
      super(e, 8);
    }
  }
  fr.RequestType8 = Zt;
  class er extends O {
    constructor(e) {
      super(e, 9);
    }
  }
  fr.RequestType9 = er;
  class tr extends O {
    constructor(e, t = W.auto) {
      super(e, 1);
      this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  fr.NotificationType = tr;
  class rr extends O {
    constructor(e) {
      super(e, 0);
    }
  }
  fr.NotificationType0 = rr;
  class nr extends O {
    constructor(e, t = W.auto) {
      super(e, 1);
      this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  }
  fr.NotificationType1 = nr;
  class ir extends O {
    constructor(e) {
      super(e, 2);
    }
  }
  fr.NotificationType2 = ir;
  class sr extends O {
    constructor(e) {
      super(e, 3);
    }
  }
  fr.NotificationType3 = sr;
  class or extends O {
    constructor(e) {
      super(e, 4);
    }
  }
  fr.NotificationType4 = or;
  class ar extends O {
    constructor(e) {
      super(e, 5);
    }
  }
  fr.NotificationType5 = ar;
  class cr extends O {
    constructor(e) {
      super(e, 6);
    }
  }
  fr.NotificationType6 = cr;
  class ur extends O {
    constructor(e) {
      super(e, 7);
    }
  }
  fr.NotificationType7 = ur;
  class dr extends O {
    constructor(e) {
      super(e, 8);
    }
  }
  fr.NotificationType8 = dr;
  class lr extends O {
    constructor(e) {
      super(e, 9);
    }
  }
  fr.NotificationType9 = lr;
  var Ft;
  (function (e) {
    function t(a) {
      let f = a;
      return f && ue.string(f.method) && (ue.string(f.id) || ue.number(f.id));
    }
    e.isRequest = t;
    function r(a) {
      let f = a;
      return f && ue.string(f.method) && a.id === void 0;
    }
    e.isNotification = r;
    function s(a) {
      let f = a;
      return (
        f &&
        (f.result !== void 0 || !!f.error) &&
        (ue.string(f.id) || ue.number(f.id) || f.id === null)
      );
    }
    e.isResponse = s;
  })(Ft || (fr.Message = Ft = {}));
});
var rt = commonJS(function (gr) {
  var pr;
  Object.defineProperty(gr, "__esModule", { value: !0 });
  gr.LRUCache = gr.LinkedMap = gr.Touch = void 0;
  var F;
  (function (e) {
    ((e.None = 0),
      (e.First = 1),
      (e.AsOld = e.First),
      (e.Last = 2),
      (e.AsNew = e.Last));
  })(F || (gr.Touch = F = {}));
  class tt {
    constructor() {
      ((this[pr] = "LinkedMap"),
        (this._map = new Map()),
        (this._head = void 0),
        (this._tail = void 0),
        (this._size = 0),
        (this._state = 0));
    }
    clear() {
      (this._map.clear(),
        (this._head = void 0),
        (this._tail = void 0),
        (this._size = 0),
        this._state++);
    }
    isEmpty() {
      return !this._head && !this._tail;
    }
    get size() {
      return this._size;
    }
    get first() {
      return this._head?.value;
    }
    get last() {
      return this._tail?.value;
    }
    has(e) {
      return this._map.has(e);
    }
    get(e, t = F.None) {
      let r = this._map.get(e);
      if (!r) return;
      if (t !== F.None) this.touch(r, t);
      return r.value;
    }
    set(e, t, r = F.None) {
      let s = this._map.get(e);
      if (s) {
        if (((s.value = t), r !== F.None)) this.touch(s, r);
      } else {
        switch (
          ((s = { key: e, value: t, next: void 0, previous: void 0 }), r)
        ) {
          case F.None:
            this.addItemLast(s);
            break;
          case F.First:
            this.addItemFirst(s);
            break;
          case F.Last:
            this.addItemLast(s);
            break;
          default:
            this.addItemLast(s);
            break;
        }
        (this._map.set(e, s), this._size++);
      }
      return this;
    }
    delete(e) {
      return !!this.remove(e);
    }
    remove(e) {
      let t = this._map.get(e);
      if (!t) return;
      return (this._map.delete(e), this.removeItem(t), this._size--, t.value);
    }
    shift() {
      if (!this._head && !this._tail) return;
      if (!this._head || !this._tail) throw Error("Invalid list");
      let e = this._head;
      return (
        this._map.delete(e.key),
        this.removeItem(e),
        this._size--,
        e.value
      );
    }
    forEach(e, t) {
      let r = this._state,
        s = this._head;
      while (s) {
        if (t) e.bind(t)(s.value, s.key, this);
        else e(s.value, s.key, this);
        if (this._state !== r)
          throw Error("LinkedMap got modified during iteration.");
        s = s.next;
      }
    }
    keys() {
      let e = this._state,
        t = this._head,
        r = {
          [Symbol.iterator]: () => r,
          next: () => {
            if (this._state !== e)
              throw Error("LinkedMap got modified during iteration.");
            if (t) {
              let s = { value: t.key, done: !1 };
              return ((t = t.next), s);
            } else return { value: void 0, done: !0 };
          },
        };
      return r;
    }
    values() {
      let e = this._state,
        t = this._head,
        r = {
          [Symbol.iterator]: () => r,
          next: () => {
            if (this._state !== e)
              throw Error("LinkedMap got modified during iteration.");
            if (t) {
              let s = { value: t.value, done: !1 };
              return ((t = t.next), s);
            } else return { value: void 0, done: !0 };
          },
        };
      return r;
    }
    entries() {
      let e = this._state,
        t = this._head,
        r = {
          [Symbol.iterator]: () => r,
          next: () => {
            if (this._state !== e)
              throw Error("LinkedMap got modified during iteration.");
            if (t) {
              let s = { value: [t.key, t.value], done: !1 };
              return ((t = t.next), s);
            } else return { value: void 0, done: !0 };
          },
        };
      return r;
    }
    [((pr = Symbol.toStringTag), Symbol.iterator)]() {
      return this.entries();
    }
    trimOld(e) {
      if (e >= this.size) return;
      if (e === 0) {
        this.clear();
        return;
      }
      let t = this._head,
        r = this.size;
      while (t && r > e) (this._map.delete(t.key), (t = t.next), r--);
      if (((this._head = t), (this._size = r), t)) t.previous = void 0;
      this._state++;
    }
    addItemFirst(e) {
      if (!this._head && !this._tail) this._tail = e;
      else if (!this._head) throw Error("Invalid list");
      else ((e.next = this._head), (this._head.previous = e));
      ((this._head = e), this._state++);
    }
    addItemLast(e) {
      if (!this._head && !this._tail) this._head = e;
      else if (!this._tail) throw Error("Invalid list");
      else ((e.previous = this._tail), (this._tail.next = e));
      ((this._tail = e), this._state++);
    }
    removeItem(e) {
      if (e === this._head && e === this._tail)
        ((this._head = void 0), (this._tail = void 0));
      else if (e === this._head) {
        if (!e.next) throw Error("Invalid list");
        ((e.next.previous = void 0), (this._head = e.next));
      } else if (e === this._tail) {
        if (!e.previous) throw Error("Invalid list");
        ((e.previous.next = void 0), (this._tail = e.previous));
      } else {
        let { next: t, previous: r } = e;
        if (!t || !r) throw Error("Invalid list");
        ((t.previous = r), (r.next = t));
      }
      ((e.next = void 0), (e.previous = void 0), this._state++);
    }
    touch(e, t) {
      if (!this._head || !this._tail) throw Error("Invalid list");
      if (t !== F.First && t !== F.Last) return;
      if (t === F.First) {
        if (e === this._head) return;
        let { next: r, previous: s } = e;
        if (e === this._tail) ((s.next = void 0), (this._tail = s));
        else ((r.previous = s), (s.next = r));
        ((e.previous = void 0),
          (e.next = this._head),
          (this._head.previous = e),
          (this._head = e),
          this._state++);
      } else if (t === F.Last) {
        if (e === this._tail) return;
        let { next: r, previous: s } = e;
        if (e === this._head) ((r.previous = void 0), (this._head = r));
        else ((r.previous = s), (s.next = r));
        ((e.next = void 0),
          (e.previous = this._tail),
          (this._tail.next = e),
          (this._tail = e),
          this._state++);
      }
    }
    toJSON() {
      let e = [];
      return (
        this.forEach((t, r) => {
          e.push([r, t]);
        }),
        e
      );
    }
    fromJSON(e) {
      this.clear();
      for (let [t, r] of e) this.set(t, r);
    }
  }
  gr.LinkedMap = tt;
  class mr extends tt {
    constructor(e, t = 1) {
      super();
      ((this._limit = e), (this._ratio = Math.min(Math.max(0, t), 1)));
    }
    get limit() {
      return this._limit;
    }
    set limit(e) {
      ((this._limit = e), this.checkTrim());
    }
    get ratio() {
      return this._ratio;
    }
    set ratio(e) {
      ((this._ratio = Math.min(Math.max(0, e), 1)), this.checkTrim());
    }
    get(e, t = F.AsNew) {
      return super.get(e, t);
    }
    peek(e) {
      return super.get(e, F.None);
    }
    set(e, t) {
      return (super.set(e, t, F.Last), this.checkTrim(), this);
    }
    checkTrim() {
      if (this.size > this._limit)
        this.trimOld(Math.round(this._limit * this._ratio));
    }
  }
  gr.LRUCache = mr;
});
var wr = commonJS(function (vr) {
  Object.defineProperty(vr, "__esModule", { value: !0 });
  vr.Disposable = void 0;
  var br;
  (function (e) {
    function t(r) {
      return { dispose: r };
    }
    e.create = t;
  })(br || (vr.Disposable = br = {}));
});
var ie = commonJS(function (Sr) {
  Object.defineProperty(Sr, "__esModule", { value: !0 });
  var nt;
  function it() {
    if (nt === void 0) throw Error("No runtime abstraction layer installed");
    return nt;
  }
  (function (e) {
    function t(r) {
      if (r === void 0) throw Error("No runtime abstraction layer provided");
      nt = r;
    }
    e.install = t;
  })(it || (it = {}));
  Sr.default = it;
});
var ge = commonJS(function (Tr) {
  Object.defineProperty(Tr, "__esModule", { value: !0 });
  Tr.Emitter = Tr.Event = void 0;
  var Mi = ie(),
    Rr;
  (function (e) {
    let t = { dispose() {} };
    e.None = function () {
      return t;
    };
  })(Rr || (Tr.Event = Rr = {}));
  class Pr {
    add(e, t = null, r) {
      if (!this._callbacks) ((this._callbacks = []), (this._contexts = []));
      if ((this._callbacks.push(e), this._contexts.push(t), Array.isArray(r)))
        r.push({ dispose: () => this.remove(e, t) });
    }
    remove(e, t = null) {
      if (!this._callbacks) return;
      let r = !1;
      for (let s = 0, a = this._callbacks.length; s < a; s++)
        if (this._callbacks[s] === e)
          if (this._contexts[s] === t) {
            (this._callbacks.splice(s, 1), this._contexts.splice(s, 1));
            return;
          } else r = !0;
      if (r)
        throw Error(
          "When adding a listener with a context, you should remove it with the same context",
        );
    }
    invoke(...e) {
      if (!this._callbacks) return [];
      let t = [],
        r = this._callbacks.slice(0),
        s = this._contexts.slice(0);
      for (let a = 0, f = r.length; a < f; a++)
        try {
          t.push(r[a].apply(s[a], e));
        } catch (S) {
          (0, Mi.default)().console.error(S);
        }
      return t;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      ((this._callbacks = void 0), (this._contexts = void 0));
    }
  }
  class qe {
    constructor(e) {
      this._options = e;
    }
    get event() {
      if (!this._event)
        this._event = (e, t, r) => {
          if (!this._callbacks) this._callbacks = new Pr();
          if (
            this._options &&
            this._options.onFirstListenerAdd &&
            this._callbacks.isEmpty()
          )
            this._options.onFirstListenerAdd(this);
          this._callbacks.add(e, t);
          let s = {
            dispose: () => {
              if (!this._callbacks) return;
              if (
                (this._callbacks.remove(e, t),
                (s.dispose = qe._noop),
                this._options &&
                  this._options.onLastListenerRemove &&
                  this._callbacks.isEmpty())
              )
                this._options.onLastListenerRemove(this);
            },
          };
          if (Array.isArray(r)) r.push(s);
          return s;
        };
      return this._event;
    }
    fire(e) {
      if (this._callbacks) this._callbacks.invoke.call(this._callbacks, e);
    }
    dispose() {
      if (this._callbacks)
        (this._callbacks.dispose(), (this._callbacks = void 0));
    }
  }
  Tr.Emitter = qe;
  qe._noop = function () {};
});
var De = commonJS(function (xr) {
  Object.defineProperty(xr, "__esModule", { value: !0 });
  xr.CancellationTokenSource = xr.CancellationToken = void 0;
  var $i = ie(),
    qi = me(),
    st = ge(),
    Ie;
  (function (e) {
    ((e.None = Object.freeze({
      isCancellationRequested: !1,
      onCancellationRequested: st.Event.None,
    })),
      (e.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: st.Event.None,
      })));
    function t(r) {
      let s = r;
      return (
        s &&
        (s === e.None ||
          s === e.Cancelled ||
          (qi.boolean(s.isCancellationRequested) &&
            !!s.onCancellationRequested))
      );
    }
    e.is = t;
  })(Ie || (xr.CancellationToken = Ie = {}));
  var Ii = Object.freeze(function (e, t) {
    let r = (0, $i.default)().timer.setTimeout(e.bind(t), 0);
    return {
      dispose() {
        r.dispose();
      },
    };
  });
  class ot {
    constructor() {
      this._isCancelled = !1;
    }
    cancel() {
      if (!this._isCancelled) {
        if (((this._isCancelled = !0), this._emitter))
          (this._emitter.fire(void 0), this.dispose());
      }
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      if (this._isCancelled) return Ii;
      if (!this._emitter) this._emitter = new st.Emitter();
      return this._emitter.event;
    }
    dispose() {
      if (this._emitter) (this._emitter.dispose(), (this._emitter = void 0));
    }
  }
  class Cr {
    get token() {
      if (!this._token) this._token = new ot();
      return this._token;
    }
    cancel() {
      if (!this._token) this._token = Ie.Cancelled;
      else this._token.cancel();
    }
    dispose() {
      if (!this._token) this._token = Ie.None;
      else if (this._token instanceof ot) this._token.dispose();
    }
  }
  xr.CancellationTokenSource = Cr;
});
var qr = commonJS(function (jr) {
  Object.defineProperty(jr, "__esModule", { value: !0 });
  jr.SharedArrayReceiverStrategy = jr.SharedArraySenderStrategy = void 0;
  var Bi = De(),
    Ce;
  (function (e) {
    ((e.Continue = 0), (e.Cancelled = 1));
  })(Ce || (Ce = {}));
  class Lr {
    constructor() {
      this.buffers = new Map();
    }
    enableCancellation(e) {
      if (e.id === null) return;
      let t = new SharedArrayBuffer(4),
        r = new Int32Array(t, 0, 1);
      ((r[0] = Ce.Continue),
        this.buffers.set(e.id, t),
        (e.$cancellationData = t));
    }
    async sendCancellation(e, t) {
      let r = this.buffers.get(t);
      if (r === void 0) return;
      let s = new Int32Array(r, 0, 1);
      Atomics.store(s, 0, Ce.Cancelled);
    }
    cleanup(e) {
      this.buffers.delete(e);
    }
    dispose() {
      this.buffers.clear();
    }
  }
  jr.SharedArraySenderStrategy = Lr;
  class Nr {
    constructor(e) {
      this.data = new Int32Array(e, 0, 1);
    }
    get isCancellationRequested() {
      return Atomics.load(this.data, 0) === Ce.Cancelled;
    }
    get onCancellationRequested() {
      throw Error(
        "Cancellation over SharedArrayBuffer doesn't support cancellation events",
      );
    }
  }
  class Or {
    constructor(e) {
      this.token = new Nr(e);
    }
    cancel() {}
    dispose() {}
  }
  class Mr {
    constructor() {
      this.kind = "request";
    }
    createCancellationTokenSource(e) {
      let t = e.$cancellationData;
      if (t === void 0) return new Bi.CancellationTokenSource();
      return new Or(t);
    }
  }
  jr.SharedArrayReceiverStrategy = Mr;
});
var at = commonJS(function (Dr) {
  Object.defineProperty(Dr, "__esModule", { value: !0 });
  Dr.Semaphore = void 0;
  var zi = ie();
  class Ir {
    constructor(e = 1) {
      if (e <= 0) throw Error("Capacity must be greater than 0");
      ((this._capacity = e), (this._active = 0), (this._waiting = []));
    }
    lock(e) {
      return new Promise((t, r) => {
        (this._waiting.push({ thunk: e, resolve: t, reject: r }),
          this.runNext());
      });
    }
    get active() {
      return this._active;
    }
    runNext() {
      if (this._waiting.length === 0 || this._active === this._capacity) return;
      (0, zi.default)().timer.setImmediate(() => this.doRunNext());
    }
    doRunNext() {
      if (this._waiting.length === 0 || this._active === this._capacity) return;
      let e = this._waiting.shift();
      if ((this._active++, this._active > this._capacity))
        throw Error("To many thunks active");
      try {
        let t = e.thunk();
        if (t instanceof Promise)
          t.then(
            (r) => {
              (this._active--, e.resolve(r), this.runNext());
            },
            (r) => {
              (this._active--, e.reject(r), this.runNext());
            },
          );
        else (this._active--, e.resolve(t), this.runNext());
      } catch (t) {
        (this._active--, e.reject(t), this.runNext());
      }
    }
  }
  Dr.Semaphore = Ir;
});
var Hr = commonJS(function (Wr) {
  Object.defineProperty(Wr, "__esModule", { value: !0 });
  Wr.ReadableStreamMessageReader =
    Wr.AbstractMessageReader =
    Wr.MessageReader =
      void 0;
  var ut = ie(),
    ye = me(),
    ct = ge(),
    Wi = at(),
    Ar;
  (function (e) {
    function t(r) {
      let s = r;
      return (
        s &&
        ye.func(s.listen) &&
        ye.func(s.dispose) &&
        ye.func(s.onError) &&
        ye.func(s.onClose) &&
        ye.func(s.onPartialMessage)
      );
    }
    e.is = t;
  })(Ar || (Wr.MessageReader = Ar = {}));
  class lt {
    constructor() {
      ((this.errorEmitter = new ct.Emitter()),
        (this.closeEmitter = new ct.Emitter()),
        (this.partialMessageEmitter = new ct.Emitter()));
    }
    dispose() {
      (this.errorEmitter.dispose(), this.closeEmitter.dispose());
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(e) {
      this.errorEmitter.fire(this.asError(e));
    }
    get onClose() {
      return this.closeEmitter.event;
    }
    fireClose() {
      this.closeEmitter.fire(void 0);
    }
    get onPartialMessage() {
      return this.partialMessageEmitter.event;
    }
    firePartialMessage(e) {
      this.partialMessageEmitter.fire(e);
    }
    asError(e) {
      if (e instanceof Error) return e;
      else
        return Error(
          `Reader received error. Reason: ${ye.string(e.message) ? e.message : "unknown"}`,
        );
    }
  }
  Wr.AbstractMessageReader = lt;
  var dt;
  (function (e) {
    function t(r) {
      let s,
        a,
        f,
        S = new Map(),
        b,
        N = new Map();
      if (r === void 0 || typeof r === "string") s = r ?? "utf-8";
      else {
        if (((s = r.charset ?? "utf-8"), r.contentDecoder !== void 0))
          ((f = r.contentDecoder), S.set(f.name, f));
        if (r.contentDecoders !== void 0)
          for (let M of r.contentDecoders) S.set(M.name, M);
        if (r.contentTypeDecoder !== void 0)
          ((b = r.contentTypeDecoder), N.set(b.name, b));
        if (r.contentTypeDecoders !== void 0)
          for (let M of r.contentTypeDecoders) N.set(M.name, M);
      }
      if (b === void 0)
        ((b = (0, ut.default)().applicationJson.decoder), N.set(b.name, b));
      return {
        charset: s,
        contentDecoder: f,
        contentDecoders: S,
        contentTypeDecoder: b,
        contentTypeDecoders: N,
      };
    }
    e.fromOptions = t;
  })(dt || (dt = {}));
  class zr extends lt {
    constructor(e, t) {
      super();
      ((this.readable = e),
        (this.options = dt.fromOptions(t)),
        (this.buffer = (0, ut.default)().messageBuffer.create(
          this.options.charset,
        )),
        (this._partialMessageTimeout = 1e4),
        (this.nextMessageLength = -1),
        (this.messageToken = 0),
        (this.readSemaphore = new Wi.Semaphore(1)));
    }
    set partialMessageTimeout(e) {
      this._partialMessageTimeout = e;
    }
    get partialMessageTimeout() {
      return this._partialMessageTimeout;
    }
    listen(e) {
      ((this.nextMessageLength = -1),
        (this.messageToken = 0),
        (this.partialMessageTimer = void 0),
        (this.callback = e));
      let t = this.readable.onData((r) => {
        this.onData(r);
      });
      return (
        this.readable.onError((r) => this.fireError(r)),
        this.readable.onClose(() => this.fireClose()),
        t
      );
    }
    onData(e) {
      try {
        this.buffer.append(e);
        while (!0) {
          if (this.nextMessageLength === -1) {
            let r = this.buffer.tryReadHeaders(!0);
            if (!r) return;
            let s = r.get("content-length");
            if (!s) {
              this.fireError(
                Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(r))}`),
              );
              return;
            }
            let a = parseInt(s);
            if (isNaN(a)) {
              this.fireError(
                Error(`Content-Length value must be a number. Got ${s}`),
              );
              return;
            }
            this.nextMessageLength = a;
          }
          let t = this.buffer.tryReadBody(this.nextMessageLength);
          if (t === void 0) {
            this.setPartialMessageTimer();
            return;
          }
          (this.clearPartialMessageTimer(),
            (this.nextMessageLength = -1),
            this.readSemaphore
              .lock(async () => {
                let r =
                    this.options.contentDecoder !== void 0
                      ? await this.options.contentDecoder.decode(t)
                      : t,
                  s = await this.options.contentTypeDecoder.decode(
                    r,
                    this.options,
                  );
                this.callback(s);
              })
              .catch((r) => {
                this.fireError(r);
              }));
        }
      } catch (t) {
        this.fireError(t);
      }
    }
    clearPartialMessageTimer() {
      if (this.partialMessageTimer)
        (this.partialMessageTimer.dispose(),
          (this.partialMessageTimer = void 0));
    }
    setPartialMessageTimer() {
      if ((this.clearPartialMessageTimer(), this._partialMessageTimeout <= 0))
        return;
      this.partialMessageTimer = (0, ut.default)().timer.setTimeout(
        (e, t) => {
          if (((this.partialMessageTimer = void 0), e === this.messageToken))
            (this.firePartialMessage({ messageToken: e, waitingTime: t }),
              this.setPartialMessageTimer());
        },
        this._partialMessageTimeout,
        this.messageToken,
        this._partialMessageTimeout,
      );
    }
  }
  Wr.ReadableStreamMessageReader = zr;
});
var Xr = commonJS(function (Gr) {
  Object.defineProperty(Gr, "__esModule", { value: !0 });
  Gr.WriteableStreamMessageWriter =
    Gr.AbstractMessageWriter =
    Gr.MessageWriter =
      void 0;
  var Ur = ie(),
    xe = me(),
    Vi = at(),
    Vr = ge(),
    Ji = "Content-Length: ",
    Jr = `\r
`,
    Kr;
  (function (e) {
    function t(r) {
      let s = r;
      return (
        s &&
        xe.func(s.dispose) &&
        xe.func(s.onClose) &&
        xe.func(s.onError) &&
        xe.func(s.write)
      );
    }
    e.is = t;
  })(Kr || (Gr.MessageWriter = Kr = {}));
  class ht {
    constructor() {
      ((this.errorEmitter = new Vr.Emitter()),
        (this.closeEmitter = new Vr.Emitter()));
    }
    dispose() {
      (this.errorEmitter.dispose(), this.closeEmitter.dispose());
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(e, t, r) {
      this.errorEmitter.fire([this.asError(e), t, r]);
    }
    get onClose() {
      return this.closeEmitter.event;
    }
    fireClose() {
      this.closeEmitter.fire(void 0);
    }
    asError(e) {
      if (e instanceof Error) return e;
      else
        return Error(
          `Writer received error. Reason: ${xe.string(e.message) ? e.message : "unknown"}`,
        );
    }
  }
  Gr.AbstractMessageWriter = ht;
  var ft;
  (function (e) {
    function t(r) {
      if (r === void 0 || typeof r === "string")
        return {
          charset: r ?? "utf-8",
          contentTypeEncoder: (0, Ur.default)().applicationJson.encoder,
        };
      else
        return {
          charset: r.charset ?? "utf-8",
          contentEncoder: r.contentEncoder,
          contentTypeEncoder:
            r.contentTypeEncoder ?? (0, Ur.default)().applicationJson.encoder,
        };
    }
    e.fromOptions = t;
  })(ft || (ft = {}));
  class Qr extends ht {
    constructor(e, t) {
      super();
      ((this.writable = e),
        (this.options = ft.fromOptions(t)),
        (this.errorCount = 0),
        (this.writeSemaphore = new Vi.Semaphore(1)),
        this.writable.onError((r) => this.fireError(r)),
        this.writable.onClose(() => this.fireClose()));
    }
    async write(e) {
      return this.writeSemaphore.lock(async () =>
        this.options.contentTypeEncoder
          .encode(e, this.options)
          .then((r) => {
            if (this.options.contentEncoder !== void 0)
              return this.options.contentEncoder.encode(r);
            else return r;
          })
          .then(
            (r) => {
              let s = [];
              return (
                s.push(Ji, r.byteLength.toString(), Jr),
                s.push(Jr),
                this.doWrite(e, s, r)
              );
            },
            (r) => {
              throw (this.fireError(r), r);
            },
          ),
      );
    }
    async doWrite(e, t, r) {
      try {
        return (
          await this.writable.write(t.join(""), "ascii"),
          this.writable.write(r)
        );
      } catch (s) {
        return (this.handleError(s, e), Promise.reject(s));
      }
    }
    handleError(e, t) {
      (this.errorCount++, this.fireError(e, t, this.errorCount));
    }
    end() {
      this.writable.end();
    }
  }
  Gr.WriteableStreamMessageWriter = Qr;
});
var rn = commonJS(function (en) {
  Object.defineProperty(en, "__esModule", { value: !0 });
  en.AbstractMessageBuffer = void 0;
  var Gi = 13,
    Yi = 10,
    Xi = `\r
`;
  class Zr {
    constructor(e = "utf-8") {
      ((this._encoding = e), (this._chunks = []), (this._totalLength = 0));
    }
    get encoding() {
      return this._encoding;
    }
    append(e) {
      let t = typeof e === "string" ? this.fromString(e, this._encoding) : e;
      (this._chunks.push(t), (this._totalLength += t.byteLength));
    }
    tryReadHeaders(e = !1) {
      if (this._chunks.length === 0) return;
      let t = 0,
        r = 0,
        s = 0,
        a = 0;
      e: while (r < this._chunks.length) {
        let N = this._chunks[r];
        s = 0;
        t: while (s < N.length) {
          switch (N[s]) {
            case Gi:
              switch (t) {
                case 0:
                  t = 1;
                  break;
                case 2:
                  t = 3;
                  break;
                default:
                  t = 0;
              }
              break;
            case Yi:
              switch (t) {
                case 1:
                  t = 2;
                  break;
                case 3:
                  ((t = 4), s++);
                  break e;
                default:
                  t = 0;
              }
              break;
            default:
              t = 0;
          }
          s++;
        }
        ((a += N.byteLength), r++);
      }
      if (t !== 4) return;
      let f = this._read(a + s),
        S = new Map(),
        b = this.toString(f, "ascii").split(Xi);
      if (b.length < 2) return S;
      for (let N = 0; N < b.length - 2; N++) {
        let M = b[N],
          G = M.indexOf(":");
        if (G === -1)
          throw Error(`Message header must separate key and value using ':'
${M}`);
        let U = M.substr(0, G),
          te = M.substr(G + 1).trim();
        S.set(e ? U.toLowerCase() : U, te);
      }
      return S;
    }
    tryReadBody(e) {
      if (this._totalLength < e) return;
      return this._read(e);
    }
    get numberOfBytes() {
      return this._totalLength;
    }
    _read(e) {
      if (e === 0) return this.emptyBuffer();
      if (e > this._totalLength) throw Error("Cannot read so many bytes!");
      if (this._chunks[0].byteLength === e) {
        let a = this._chunks[0];
        return (
          this._chunks.shift(),
          (this._totalLength -= e),
          this.asNative(a)
        );
      }
      if (this._chunks[0].byteLength > e) {
        let a = this._chunks[0],
          f = this.asNative(a, e);
        return ((this._chunks[0] = a.slice(e)), (this._totalLength -= e), f);
      }
      let t = this.allocNative(e),
        r = 0,
        s = 0;
      while (e > 0) {
        let a = this._chunks[s];
        if (a.byteLength > e) {
          let f = a.slice(0, e);
          (t.set(f, r),
            (r += e),
            (this._chunks[s] = a.slice(e)),
            (this._totalLength -= e),
            (e -= e));
        } else
          (t.set(a, r),
            (r += a.byteLength),
            this._chunks.shift(),
            (this._totalLength -= a.byteLength),
            (e -= a.byteLength));
      }
      return t;
    }
  }
  en.AbstractMessageBuffer = Zr;
});
var pn = commonJS(function (un) {
  Object.defineProperty(un, "__esModule", { value: !0 });
  un.createMessageConnection =
    un.ConnectionOptions =
    un.MessageStrategy =
    un.CancellationStrategy =
    un.CancellationSenderStrategy =
    un.CancellationReceiverStrategy =
    un.RequestCancellationReceiverStrategy =
    un.IdCancellationReceiverStrategy =
    un.ConnectionStrategy =
    un.ConnectionError =
    un.ConnectionErrors =
    un.LogTraceNotification =
    un.SetTraceNotification =
    un.TraceFormat =
    un.TraceValues =
    un.Trace =
    un.NullLogger =
    un.ProgressType =
    un.ProgressToken =
      void 0;
  var nn = ie(),
    q = me(),
    h = et(),
    sn = rt(),
    ke = ge(),
    pt = De(),
    Oe;
  (function (e) {
    e.type = new h.NotificationType("$/cancelRequest");
  })(Oe || (Oe = {}));
  var mt;
  (function (e) {
    function t(r) {
      return typeof r === "string" || typeof r === "number";
    }
    e.is = t;
  })(mt || (un.ProgressToken = mt = {}));
  var Le;
  (function (e) {
    e.type = new h.NotificationType("$/progress");
  })(Le || (Le = {}));
  class cn {
    constructor() {}
  }
  un.ProgressType = cn;
  var gt;
  (function (e) {
    function t(r) {
      return q.func(r);
    }
    e.is = t;
  })(gt || (gt = {}));
  un.NullLogger = Object.freeze({
    error: () => {},
    warn: () => {},
    info: () => {},
    log: () => {},
  });
  var P;
  (function (e) {
    ((e[(e.Off = 0)] = "Off"),
      (e[(e.Messages = 1)] = "Messages"),
      (e[(e.Compact = 2)] = "Compact"),
      (e[(e.Verbose = 3)] = "Verbose"));
  })(P || (un.Trace = P = {}));
  var on;
  (function (e) {
    ((e.Off = "off"),
      (e.Messages = "messages"),
      (e.Compact = "compact"),
      (e.Verbose = "verbose"));
  })(on || (un.TraceValues = on = {}));
  (function (e) {
    function t(s) {
      if (!q.string(s)) return e.Off;
      switch (((s = s.toLowerCase()), s)) {
        case "off":
          return e.Off;
        case "messages":
          return e.Messages;
        case "compact":
          return e.Compact;
        case "verbose":
          return e.Verbose;
        default:
          return e.Off;
      }
    }
    e.fromString = t;
    function r(s) {
      switch (s) {
        case e.Off:
          return "off";
        case e.Messages:
          return "messages";
        case e.Compact:
          return "compact";
        case e.Verbose:
          return "verbose";
        default:
          return "off";
      }
    }
    e.toString = r;
  })(P || (un.Trace = P = {}));
  var K;
  (function (e) {
    ((e.Text = "text"), (e.JSON = "json"));
  })(K || (un.TraceFormat = K = {}));
  (function (e) {
    function t(r) {
      if (!q.string(r)) return e.Text;
      if (((r = r.toLowerCase()), r === "json")) return e.JSON;
      else return e.Text;
    }
    e.fromString = t;
  })(K || (un.TraceFormat = K = {}));
  var yt;
  (function (e) {
    e.type = new h.NotificationType("$/setTrace");
  })(yt || (un.SetTraceNotification = yt = {}));
  var Be;
  (function (e) {
    e.type = new h.NotificationType("$/logTrace");
  })(Be || (un.LogTraceNotification = Be = {}));
  var Ne;
  (function (e) {
    ((e[(e.Closed = 1)] = "Closed"),
      (e[(e.Disposed = 2)] = "Disposed"),
      (e[(e.AlreadyListening = 3)] = "AlreadyListening"));
  })(Ne || (un.ConnectionErrors = Ne = {}));
  class be extends Error {
    constructor(e, t) {
      super(t);
      ((this.code = e), Object.setPrototypeOf(this, be.prototype));
    }
  }
  un.ConnectionError = be;
  var bt;
  (function (e) {
    function t(r) {
      let s = r;
      return s && q.func(s.cancelUndispatched);
    }
    e.is = t;
  })(bt || (un.ConnectionStrategy = bt = {}));
  var ze;
  (function (e) {
    function t(r) {
      let s = r;
      return (
        s &&
        (s.kind === void 0 || s.kind === "id") &&
        q.func(s.createCancellationTokenSource) &&
        (s.dispose === void 0 || q.func(s.dispose))
      );
    }
    e.is = t;
  })(ze || (un.IdCancellationReceiverStrategy = ze = {}));
  var vt;
  (function (e) {
    function t(r) {
      let s = r;
      return (
        s &&
        s.kind === "request" &&
        q.func(s.createCancellationTokenSource) &&
        (s.dispose === void 0 || q.func(s.dispose))
      );
    }
    e.is = t;
  })(vt || (un.RequestCancellationReceiverStrategy = vt = {}));
  var We;
  (function (e) {
    e.Message = Object.freeze({
      createCancellationTokenSource(r) {
        return new pt.CancellationTokenSource();
      },
    });
    function t(r) {
      return ze.is(r) || vt.is(r);
    }
    e.is = t;
  })(We || (un.CancellationReceiverStrategy = We = {}));
  var Fe;
  (function (e) {
    e.Message = Object.freeze({
      sendCancellation(r, s) {
        return r.sendNotification(Oe.type, { id: s });
      },
      cleanup(r) {},
    });
    function t(r) {
      let s = r;
      return s && q.func(s.sendCancellation) && q.func(s.cleanup);
    }
    e.is = t;
  })(Fe || (un.CancellationSenderStrategy = Fe = {}));
  var He;
  (function (e) {
    e.Message = Object.freeze({ receiver: We.Message, sender: Fe.Message });
    function t(r) {
      let s = r;
      return s && We.is(s.receiver) && Fe.is(s.sender);
    }
    e.is = t;
  })(He || (un.CancellationStrategy = He = {}));
  var Ue;
  (function (e) {
    function t(r) {
      let s = r;
      return s && q.func(s.handleMessage);
    }
    e.is = t;
  })(Ue || (un.MessageStrategy = Ue = {}));
  var an;
  (function (e) {
    function t(r) {
      let s = r;
      return (
        s &&
        (He.is(s.cancellationStrategy) ||
          bt.is(s.connectionStrategy) ||
          Ue.is(s.messageStrategy))
      );
    }
    e.is = t;
  })(an || (un.ConnectionOptions = an = {}));
  var X;
  (function (e) {
    ((e[(e.New = 1)] = "New"),
      (e[(e.Listening = 2)] = "Listening"),
      (e[(e.Closed = 3)] = "Closed"),
      (e[(e.Disposed = 4)] = "Disposed"));
  })(X || (X = {}));
  function Zi(e, t, r, s) {
    let a = r !== void 0 ? r : un.NullLogger,
      f = 0,
      S = 0,
      b = 0,
      N = "2.0",
      M = void 0,
      G = new Map(),
      U = void 0,
      te = new Map(),
      se = new Map(),
      Z,
      V = new sn.LinkedMap(),
      Y = new Map(),
      m = new Set(),
      g = new Map(),
      p = P.Off,
      x = K.Text,
      E,
      v = X.New,
      Re = new ke.Emitter(),
      Me = new ke.Emitter(),
      oe = new ke.Emitter(),
      _ = new ke.Emitter(),
      z = new ke.Emitter(),
      J = s && s.cancellationStrategy ? s.cancellationStrategy : He.Message;
    function ae(i) {
      if (i === null)
        throw Error(
          "Can't send requests with id null since the response can't be correlated.",
        );
      return "req-" + i.toString();
    }
    function ce(i) {
      if (i === null) return "res-unknown-" + (++b).toString();
      else return "res-" + i.toString();
    }
    function de() {
      return "not-" + (++S).toString();
    }
    function je(i, o) {
      if (h.Message.isRequest(o)) i.set(ae(o.id), o);
      else if (h.Message.isResponse(o)) i.set(ce(o.id), o);
      else i.set(de(), o);
    }
    function Pe(i) {
      return;
    }
    function Lt() {
      return v === X.Listening;
    }
    function Nt() {
      return v === X.Closed;
    }
    function le() {
      return v === X.Disposed;
    }
    function Ot() {
      if (v === X.New || v === X.Listening) ((v = X.Closed), Me.fire(void 0));
    }
    function On(i) {
      Re.fire([i, void 0, void 0]);
    }
    function Mn(i) {
      Re.fire(i);
    }
    (e.onClose(Ot), e.onError(On), t.onClose(Ot), t.onError(Mn));
    function Mt() {
      if (Z || V.size === 0) return;
      Z = (0, nn.default)().timer.setImmediate(() => {
        ((Z = void 0), jn());
      });
    }
    function jt(i) {
      if (h.Message.isRequest(i)) qn(i);
      else if (h.Message.isNotification(i)) Dn(i);
      else if (h.Message.isResponse(i)) In(i);
      else Bn(i);
    }
    function jn() {
      if (V.size === 0) return;
      let i = V.shift();
      try {
        let o = s?.messageStrategy;
        if (Ue.is(o)) o.handleMessage(i, jt);
        else jt(i);
      } finally {
        Mt();
      }
    }
    let $n = (i) => {
      try {
        if (h.Message.isNotification(i) && i.method === Oe.type.method) {
          let o = i.params.id,
            c = ae(o),
            d = V.get(c);
          if (h.Message.isRequest(d)) {
            let C = s?.connectionStrategy,
              I =
                C && C.cancelUndispatched ? C.cancelUndispatched(d, Pe) : Pe(d);
            if (I && (I.error !== void 0 || I.result !== void 0)) {
              (V.delete(c),
                g.delete(o),
                (I.id = d.id),
                $e(I, i.method, Date.now()),
                t
                  .write(I)
                  .catch(() =>
                    a.error("Sending response for canceled message failed."),
                  ));
              return;
            }
          }
          let L = g.get(o);
          if (L !== void 0) {
            (L.cancel(), Ge(i));
            return;
          } else m.add(o);
        }
        je(V, i);
      } finally {
        Mt();
      }
    };
    function qn(i) {
      if (le()) return;
      function o(R, j, T) {
        let B = { jsonrpc: N, id: i.id };
        if (R instanceof h.ResponseError) B.error = R.toJson();
        else B.result = R === void 0 ? null : R;
        ($e(B, j, T),
          t.write(B).catch(() => a.error("Sending response failed.")));
      }
      function c(R, j, T) {
        let B = { jsonrpc: N, id: i.id, error: R.toJson() };
        ($e(B, j, T),
          t.write(B).catch(() => a.error("Sending response failed.")));
      }
      function d(R, j, T) {
        if (R === void 0) R = null;
        let B = { jsonrpc: N, id: i.id, result: R };
        ($e(B, j, T),
          t.write(B).catch(() => a.error("Sending response failed.")));
      }
      Wn(i);
      let L = G.get(i.method),
        C,
        I;
      if (L) ((C = L.type), (I = L.handler));
      let D = Date.now();
      if (I || M) {
        let R = i.id ?? String(Date.now()),
          j = ze.is(J.receiver)
            ? J.receiver.createCancellationTokenSource(R)
            : J.receiver.createCancellationTokenSource(i);
        if (i.id !== null && m.has(i.id)) j.cancel();
        if (i.id !== null) g.set(R, j);
        try {
          let T;
          if (I)
            if (i.params === void 0) {
              if (C !== void 0 && C.numberOfParams !== 0) {
                c(
                  new h.ResponseError(
                    h.ErrorCodes.InvalidParams,
                    `Request ${i.method} defines ${C.numberOfParams} params but received none.`,
                  ),
                  i.method,
                  D,
                );
                return;
              }
              T = I(j.token);
            } else if (Array.isArray(i.params)) {
              if (
                C !== void 0 &&
                C.parameterStructures === h.ParameterStructures.byName
              ) {
                c(
                  new h.ResponseError(
                    h.ErrorCodes.InvalidParams,
                    `Request ${i.method} defines parameters by name but received parameters by position`,
                  ),
                  i.method,
                  D,
                );
                return;
              }
              T = I(...i.params, j.token);
            } else {
              if (
                C !== void 0 &&
                C.parameterStructures === h.ParameterStructures.byPosition
              ) {
                c(
                  new h.ResponseError(
                    h.ErrorCodes.InvalidParams,
                    `Request ${i.method} defines parameters by position but received parameters by name`,
                  ),
                  i.method,
                  D,
                );
                return;
              }
              T = I(i.params, j.token);
            }
          else if (M) T = M(i.method, i.params, j.token);
          let B = T;
          if (!T) (g.delete(R), d(T, i.method, D));
          else if (B.then)
            B.then(
              (H) => {
                (g.delete(R), o(H, i.method, D));
              },
              (H) => {
                if ((g.delete(R), H instanceof h.ResponseError))
                  c(H, i.method, D);
                else if (H && q.string(H.message))
                  c(
                    new h.ResponseError(
                      h.ErrorCodes.InternalError,
                      `Request ${i.method} failed with message: ${H.message}`,
                    ),
                    i.method,
                    D,
                  );
                else
                  c(
                    new h.ResponseError(
                      h.ErrorCodes.InternalError,
                      `Request ${i.method} failed unexpectedly without providing any details.`,
                    ),
                    i.method,
                    D,
                  );
              },
            );
          else (g.delete(R), o(T, i.method, D));
        } catch (T) {
          if ((g.delete(R), T instanceof h.ResponseError)) o(T, i.method, D);
          else if (T && q.string(T.message))
            c(
              new h.ResponseError(
                h.ErrorCodes.InternalError,
                `Request ${i.method} failed with message: ${T.message}`,
              ),
              i.method,
              D,
            );
          else
            c(
              new h.ResponseError(
                h.ErrorCodes.InternalError,
                `Request ${i.method} failed unexpectedly without providing any details.`,
              ),
              i.method,
              D,
            );
        }
      } else
        c(
          new h.ResponseError(
            h.ErrorCodes.MethodNotFound,
            `Unhandled method ${i.method}`,
          ),
          i.method,
          D,
        );
    }
    function In(i) {
      if (le()) return;
      if (i.id === null)
        if (i.error)
          a.error(`Received response message without id: Error is: 
${JSON.stringify(i.error, void 0, 4)}`);
        else
          a.error(
            "Received response message without id. No further error information provided.",
          );
      else {
        let o = i.id,
          c = Y.get(o);
        if ((Fn(i, c), c !== void 0)) {
          Y.delete(o);
          try {
            if (i.error) {
              let d = i.error;
              c.reject(new h.ResponseError(d.code, d.message, d.data));
            } else if (i.result !== void 0) c.resolve(i.result);
            else throw Error("Should never happen.");
          } catch (d) {
            if (d.message)
              a.error(
                `Response handler '${c.method}' failed with message: ${d.message}`,
              );
            else a.error(`Response handler '${c.method}' failed unexpectedly.`);
          }
        }
      }
    }
    function Dn(i) {
      if (le()) return;
      let o = void 0,
        c;
      if (i.method === Oe.type.method) {
        let d = i.params.id;
        (m.delete(d), Ge(i));
        return;
      } else {
        let d = te.get(i.method);
        if (d) ((c = d.handler), (o = d.type));
      }
      if (c || U)
        try {
          if ((Ge(i), c))
            if (i.params === void 0) {
              if (o !== void 0) {
                if (
                  o.numberOfParams !== 0 &&
                  o.parameterStructures !== h.ParameterStructures.byName
                )
                  a.error(
                    `Notification ${i.method} defines ${o.numberOfParams} params but received none.`,
                  );
              }
              c();
            } else if (Array.isArray(i.params)) {
              let d = i.params;
              if (i.method === Le.type.method && d.length === 2 && mt.is(d[0]))
                c({ token: d[0], value: d[1] });
              else {
                if (o !== void 0) {
                  if (o.parameterStructures === h.ParameterStructures.byName)
                    a.error(
                      `Notification ${i.method} defines parameters by name but received parameters by position`,
                    );
                  if (o.numberOfParams !== i.params.length)
                    a.error(
                      `Notification ${i.method} defines ${o.numberOfParams} params but received ${d.length} arguments`,
                    );
                }
                c(...d);
              }
            } else {
              if (
                o !== void 0 &&
                o.parameterStructures === h.ParameterStructures.byPosition
              )
                a.error(
                  `Notification ${i.method} defines parameters by position but received parameters by name`,
                );
              c(i.params);
            }
          else if (U) U(i.method, i.params);
        } catch (d) {
          if (d.message)
            a.error(
              `Notification handler '${i.method}' failed with message: ${d.message}`,
            );
          else
            a.error(`Notification handler '${i.method}' failed unexpectedly.`);
        }
      else oe.fire(i);
    }
    function Bn(i) {
      if (!i) {
        a.error("Received empty message.");
        return;
      }
      a.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(i, null, 4)}`);
      let o = i;
      if (q.string(o.id) || q.number(o.id)) {
        let c = o.id,
          d = Y.get(c);
        if (d)
          d.reject(
            Error(
              "The received response has neither a result nor an error property.",
            ),
          );
      }
    }
    function ne(i) {
      if (i === void 0 || i === null) return;
      switch (p) {
        case P.Verbose:
          return JSON.stringify(i, null, 4);
        case P.Compact:
          return JSON.stringify(i);
        default:
          return;
      }
    }
    function An(i) {
      if (p === P.Off || !E) return;
      if (x === K.Text) {
        let o = void 0;
        if ((p === P.Verbose || p === P.Compact) && i.params)
          o = `Params: ${ne(i.params)}

`;
        E.log(`Sending request '${i.method} - (${i.id})'.`, o);
      } else fe("send-request", i);
    }
    function zn(i) {
      if (p === P.Off || !E) return;
      if (x === K.Text) {
        let o = void 0;
        if (p === P.Verbose || p === P.Compact)
          if (i.params)
            o = `Params: ${ne(i.params)}

`;
          else
            o = `No parameters provided.

`;
        E.log(`Sending notification '${i.method}'.`, o);
      } else fe("send-notification", i);
    }
    function $e(i, o, c) {
      if (p === P.Off || !E) return;
      if (x === K.Text) {
        let d = void 0;
        if (p === P.Verbose || p === P.Compact) {
          if (i.error && i.error.data)
            d = `Error data: ${ne(i.error.data)}

`;
          else if (i.result)
            d = `Result: ${ne(i.result)}

`;
          else if (i.error === void 0)
            d = `No result returned.

`;
        }
        E.log(
          `Sending response '${o} - (${i.id})'. Processing request took ${Date.now() - c}ms`,
          d,
        );
      } else fe("send-response", i);
    }
    function Wn(i) {
      if (p === P.Off || !E) return;
      if (x === K.Text) {
        let o = void 0;
        if ((p === P.Verbose || p === P.Compact) && i.params)
          o = `Params: ${ne(i.params)}

`;
        E.log(`Received request '${i.method} - (${i.id})'.`, o);
      } else fe("receive-request", i);
    }
    function Ge(i) {
      if (p === P.Off || !E || i.method === Be.type.method) return;
      if (x === K.Text) {
        let o = void 0;
        if (p === P.Verbose || p === P.Compact)
          if (i.params)
            o = `Params: ${ne(i.params)}

`;
          else
            o = `No parameters provided.

`;
        E.log(`Received notification '${i.method}'.`, o);
      } else fe("receive-notification", i);
    }
    function Fn(i, o) {
      if (p === P.Off || !E) return;
      if (x === K.Text) {
        let c = void 0;
        if (p === P.Verbose || p === P.Compact) {
          if (i.error && i.error.data)
            c = `Error data: ${ne(i.error.data)}

`;
          else if (i.result)
            c = `Result: ${ne(i.result)}

`;
          else if (i.error === void 0)
            c = `No result returned.

`;
        }
        if (o) {
          let d = i.error
            ? ` Request failed: ${i.error.message} (${i.error.code}).`
            : "";
          E.log(
            `Received response '${o.method} - (${i.id})' in ${Date.now() - o.timerStart}ms.${d}`,
            c,
          );
        } else
          E.log(
            `Received response ${i.id} without active response promise.`,
            c,
          );
      } else fe("receive-response", i);
    }
    function fe(i, o) {
      if (!E || p === P.Off) return;
      let c = { isLSPMessage: !0, type: i, message: o, timestamp: Date.now() };
      E.log(c);
    }
    function Te() {
      if (Nt()) throw new be(Ne.Closed, "Connection is closed.");
      if (le()) throw new be(Ne.Disposed, "Connection is disposed.");
    }
    function Hn() {
      if (Lt())
        throw new be(Ne.AlreadyListening, "Connection is already listening");
    }
    function Un() {
      if (!Lt()) throw Error("Call listen() first.");
    }
    function Ee(i) {
      if (i === void 0) return null;
      else return i;
    }
    function $t(i) {
      if (i === null) return;
      else return i;
    }
    function qt(i) {
      return (
        i !== void 0 && i !== null && !Array.isArray(i) && typeof i === "object"
      );
    }
    function Ye(i, o) {
      switch (i) {
        case h.ParameterStructures.auto:
          if (qt(o)) return $t(o);
          else return [Ee(o)];
        case h.ParameterStructures.byName:
          if (!qt(o))
            throw Error(
              "Received parameters by name but param is not an object literal.",
            );
          return $t(o);
        case h.ParameterStructures.byPosition:
          return [Ee(o)];
        default:
          throw Error(`Unknown parameter structure ${i.toString()}`);
      }
    }
    function It(i, o) {
      let c,
        d = i.numberOfParams;
      switch (d) {
        case 0:
          c = void 0;
          break;
        case 1:
          c = Ye(i.parameterStructures, o[0]);
          break;
        default:
          c = [];
          for (let L = 0; L < o.length && L < d; L++) c.push(Ee(o[L]));
          if (o.length < d) for (let L = o.length; L < d; L++) c.push(null);
          break;
      }
      return c;
    }
    let he = {
      sendNotification: (i, ...o) => {
        Te();
        let c, d;
        if (q.string(i)) {
          c = i;
          let C = o[0],
            I = 0,
            D = h.ParameterStructures.auto;
          if (h.ParameterStructures.is(C)) ((I = 1), (D = C));
          let R = o.length,
            j = R - I;
          switch (j) {
            case 0:
              d = void 0;
              break;
            case 1:
              d = Ye(D, o[I]);
              break;
            default:
              if (D === h.ParameterStructures.byName)
                throw Error(
                  `Received ${j} parameters for 'by Name' notification parameter structure.`,
                );
              d = o.slice(I, R).map((T) => Ee(T));
              break;
          }
        } else {
          let C = o;
          ((c = i.method), (d = It(i, C)));
        }
        let L = { jsonrpc: N, method: c, params: d };
        return (
          zn(L),
          t.write(L).catch((C) => {
            throw (a.error("Sending notification failed."), C);
          })
        );
      },
      onNotification: (i, o) => {
        Te();
        let c;
        if (q.func(i)) U = i;
        else if (o)
          if (q.string(i)) ((c = i), te.set(i, { type: void 0, handler: o }));
          else ((c = i.method), te.set(i.method, { type: i, handler: o }));
        return {
          dispose: () => {
            if (c !== void 0) te.delete(c);
            else U = void 0;
          },
        };
      },
      onProgress: (i, o, c) => {
        if (se.has(o))
          throw Error(`Progress handler for token ${o} already registered`);
        return (
          se.set(o, c),
          {
            dispose: () => {
              se.delete(o);
            },
          }
        );
      },
      sendProgress: (i, o, c) =>
        he.sendNotification(Le.type, { token: o, value: c }),
      onUnhandledProgress: _.event,
      sendRequest: (i, ...o) => {
        (Te(), Un());
        let c,
          d,
          L = void 0;
        if (q.string(i)) {
          c = i;
          let R = o[0],
            j = o[o.length - 1],
            T = 0,
            B = h.ParameterStructures.auto;
          if (h.ParameterStructures.is(R)) ((T = 1), (B = R));
          let H = o.length;
          if (pt.CancellationToken.is(j)) ((H = H - 1), (L = j));
          let ee = H - T;
          switch (ee) {
            case 0:
              d = void 0;
              break;
            case 1:
              d = Ye(B, o[T]);
              break;
            default:
              if (B === h.ParameterStructures.byName)
                throw Error(
                  `Received ${ee} parameters for 'by Name' request parameter structure.`,
                );
              d = o.slice(T, H).map((Vn) => Ee(Vn));
              break;
          }
        } else {
          let R = o;
          ((c = i.method), (d = It(i, R)));
          let j = i.numberOfParams;
          L = pt.CancellationToken.is(R[j]) ? R[j] : void 0;
        }
        let C = f++,
          I;
        if (L)
          I = L.onCancellationRequested(() => {
            let R = J.sender.sendCancellation(he, C);
            if (R === void 0)
              return (
                a.log(
                  `Received no promise from cancellation strategy when cancelling id ${C}`,
                ),
                Promise.resolve()
              );
            else
              return R.catch(() => {
                a.log(`Sending cancellation messages for id ${C} failed`);
              });
          });
        let D = { jsonrpc: N, id: C, method: c, params: d };
        if ((An(D), typeof J.sender.enableCancellation === "function"))
          J.sender.enableCancellation(D);
        return new Promise(async (R, j) => {
          let T = (ee) => {
              (R(ee), J.sender.cleanup(C), I?.dispose());
            },
            B = (ee) => {
              (j(ee), J.sender.cleanup(C), I?.dispose());
            },
            H = { method: c, timerStart: Date.now(), resolve: T, reject: B };
          try {
            (Y.set(C, H), await t.write(D));
          } catch (ee) {
            throw (
              Y.delete(C),
              H.reject(
                new h.ResponseError(
                  h.ErrorCodes.MessageWriteError,
                  ee.message ? ee.message : "Unknown reason",
                ),
              ),
              a.error("Sending request failed."),
              ee
            );
          }
        });
      },
      onRequest: (i, o) => {
        Te();
        let c = null;
        if (gt.is(i)) ((c = void 0), (M = i));
        else if (q.string(i)) {
          if (((c = null), o !== void 0))
            ((c = i), G.set(i, { handler: o, type: void 0 }));
        } else if (o !== void 0)
          ((c = i.method), G.set(i.method, { type: i, handler: o }));
        return {
          dispose: () => {
            if (c === null) return;
            if (c !== void 0) G.delete(c);
            else M = void 0;
          },
        };
      },
      hasPendingResponse: () => Y.size > 0,
      trace: async (i, o, c) => {
        let d = !1,
          L = K.Text;
        if (c !== void 0)
          if (q.boolean(c)) d = c;
          else ((d = c.sendNotification || !1), (L = c.traceFormat || K.Text));
        if (((p = i), (x = L), p === P.Off)) E = void 0;
        else E = o;
        if (d && !Nt() && !le())
          await he.sendNotification(yt.type, { value: P.toString(i) });
      },
      onError: Re.event,
      onClose: Me.event,
      onUnhandledNotification: oe.event,
      onDispose: z.event,
      end: () => {
        t.end();
      },
      dispose: () => {
        if (le()) return;
        ((v = X.Disposed), z.fire(void 0));
        let i = new h.ResponseError(
          h.ErrorCodes.PendingResponseRejected,
          "Pending response rejected since connection got disposed",
        );
        for (let o of Y.values()) o.reject(i);
        if (
          ((Y = new Map()),
          (g = new Map()),
          (m = new Set()),
          (V = new sn.LinkedMap()),
          q.func(t.dispose))
        )
          t.dispose();
        if (q.func(e.dispose)) e.dispose();
      },
      listen: () => {
        (Te(), Hn(), (v = X.Listening), e.listen($n));
      },
      inspect: () => {
        (0, nn.default)().console.log("inspect");
      },
    };
    return (
      he.onNotification(Be.type, (i) => {
        if (p === P.Off || !E) return;
        let o = p === P.Verbose || p === P.Compact;
        E.log(i.message, o ? i.verbose : void 0);
      }),
      he.onNotification(Le.type, (i) => {
        let o = se.get(i.token);
        if (o) o(i.value);
        else _.fire(i);
      }),
      he
    );
  }
  un.createMessageConnection = Zi;
});
var Ve = commonJS(function (u) {
  Object.defineProperty(u, "__esModule", { value: !0 });
  u.ProgressType =
    u.ProgressToken =
    u.createMessageConnection =
    u.NullLogger =
    u.ConnectionOptions =
    u.ConnectionStrategy =
    u.AbstractMessageBuffer =
    u.WriteableStreamMessageWriter =
    u.AbstractMessageWriter =
    u.MessageWriter =
    u.ReadableStreamMessageReader =
    u.AbstractMessageReader =
    u.MessageReader =
    u.SharedArrayReceiverStrategy =
    u.SharedArraySenderStrategy =
    u.CancellationToken =
    u.CancellationTokenSource =
    u.Emitter =
    u.Event =
    u.Disposable =
    u.LRUCache =
    u.Touch =
    u.LinkedMap =
    u.ParameterStructures =
    u.NotificationType9 =
    u.NotificationType8 =
    u.NotificationType7 =
    u.NotificationType6 =
    u.NotificationType5 =
    u.NotificationType4 =
    u.NotificationType3 =
    u.NotificationType2 =
    u.NotificationType1 =
    u.NotificationType0 =
    u.NotificationType =
    u.ErrorCodes =
    u.ResponseError =
    u.RequestType9 =
    u.RequestType8 =
    u.RequestType7 =
    u.RequestType6 =
    u.RequestType5 =
    u.RequestType4 =
    u.RequestType3 =
    u.RequestType2 =
    u.RequestType1 =
    u.RequestType0 =
    u.RequestType =
    u.Message =
    u.RAL =
      void 0;
  u.MessageStrategy =
    u.CancellationStrategy =
    u.CancellationSenderStrategy =
    u.CancellationReceiverStrategy =
    u.ConnectionError =
    u.ConnectionErrors =
    u.LogTraceNotification =
    u.SetTraceNotification =
    u.TraceFormat =
    u.TraceValues =
    u.Trace =
      void 0;
  var k = et();
  Object.defineProperty(u, "Message", {
    enumerable: !0,
    get: function () {
      return k.Message;
    },
  });
  Object.defineProperty(u, "RequestType", {
    enumerable: !0,
    get: function () {
      return k.RequestType;
    },
  });
  Object.defineProperty(u, "RequestType0", {
    enumerable: !0,
    get: function () {
      return k.RequestType0;
    },
  });
  Object.defineProperty(u, "RequestType1", {
    enumerable: !0,
    get: function () {
      return k.RequestType1;
    },
  });
  Object.defineProperty(u, "RequestType2", {
    enumerable: !0,
    get: function () {
      return k.RequestType2;
    },
  });
  Object.defineProperty(u, "RequestType3", {
    enumerable: !0,
    get: function () {
      return k.RequestType3;
    },
  });
  Object.defineProperty(u, "RequestType4", {
    enumerable: !0,
    get: function () {
      return k.RequestType4;
    },
  });
  Object.defineProperty(u, "RequestType5", {
    enumerable: !0,
    get: function () {
      return k.RequestType5;
    },
  });
  Object.defineProperty(u, "RequestType6", {
    enumerable: !0,
    get: function () {
      return k.RequestType6;
    },
  });
  Object.defineProperty(u, "RequestType7", {
    enumerable: !0,
    get: function () {
      return k.RequestType7;
    },
  });
  Object.defineProperty(u, "RequestType8", {
    enumerable: !0,
    get: function () {
      return k.RequestType8;
    },
  });
  Object.defineProperty(u, "RequestType9", {
    enumerable: !0,
    get: function () {
      return k.RequestType9;
    },
  });
  Object.defineProperty(u, "ResponseError", {
    enumerable: !0,
    get: function () {
      return k.ResponseError;
    },
  });
  Object.defineProperty(u, "ErrorCodes", {
    enumerable: !0,
    get: function () {
      return k.ErrorCodes;
    },
  });
  Object.defineProperty(u, "NotificationType", {
    enumerable: !0,
    get: function () {
      return k.NotificationType;
    },
  });
  Object.defineProperty(u, "NotificationType0", {
    enumerable: !0,
    get: function () {
      return k.NotificationType0;
    },
  });
  Object.defineProperty(u, "NotificationType1", {
    enumerable: !0,
    get: function () {
      return k.NotificationType1;
    },
  });
  Object.defineProperty(u, "NotificationType2", {
    enumerable: !0,
    get: function () {
      return k.NotificationType2;
    },
  });
  Object.defineProperty(u, "NotificationType3", {
    enumerable: !0,
    get: function () {
      return k.NotificationType3;
    },
  });
  Object.defineProperty(u, "NotificationType4", {
    enumerable: !0,
    get: function () {
      return k.NotificationType4;
    },
  });
  Object.defineProperty(u, "NotificationType5", {
    enumerable: !0,
    get: function () {
      return k.NotificationType5;
    },
  });
  Object.defineProperty(u, "NotificationType6", {
    enumerable: !0,
    get: function () {
      return k.NotificationType6;
    },
  });
  Object.defineProperty(u, "NotificationType7", {
    enumerable: !0,
    get: function () {
      return k.NotificationType7;
    },
  });
  Object.defineProperty(u, "NotificationType8", {
    enumerable: !0,
    get: function () {
      return k.NotificationType8;
    },
  });
  Object.defineProperty(u, "NotificationType9", {
    enumerable: !0,
    get: function () {
      return k.NotificationType9;
    },
  });
  Object.defineProperty(u, "ParameterStructures", {
    enumerable: !0,
    get: function () {
      return k.ParameterStructures;
    },
  });
  var _t = rt();
  Object.defineProperty(u, "LinkedMap", {
    enumerable: !0,
    get: function () {
      return _t.LinkedMap;
    },
  });
  Object.defineProperty(u, "LRUCache", {
    enumerable: !0,
    get: function () {
      return _t.LRUCache;
    },
  });
  Object.defineProperty(u, "Touch", {
    enumerable: !0,
    get: function () {
      return _t.Touch;
    },
  });
  var ms = wr();
  Object.defineProperty(u, "Disposable", {
    enumerable: !0,
    get: function () {
      return ms.Disposable;
    },
  });
  var mn = ge();
  Object.defineProperty(u, "Event", {
    enumerable: !0,
    get: function () {
      return mn.Event;
    },
  });
  Object.defineProperty(u, "Emitter", {
    enumerable: !0,
    get: function () {
      return mn.Emitter;
    },
  });
  var gn = De();
  Object.defineProperty(u, "CancellationTokenSource", {
    enumerable: !0,
    get: function () {
      return gn.CancellationTokenSource;
    },
  });
  Object.defineProperty(u, "CancellationToken", {
    enumerable: !0,
    get: function () {
      return gn.CancellationToken;
    },
  });
  var yn = qr();
  Object.defineProperty(u, "SharedArraySenderStrategy", {
    enumerable: !0,
    get: function () {
      return yn.SharedArraySenderStrategy;
    },
  });
  Object.defineProperty(u, "SharedArrayReceiverStrategy", {
    enumerable: !0,
    get: function () {
      return yn.SharedArrayReceiverStrategy;
    },
  });
  var wt = Hr();
  Object.defineProperty(u, "MessageReader", {
    enumerable: !0,
    get: function () {
      return wt.MessageReader;
    },
  });
  Object.defineProperty(u, "AbstractMessageReader", {
    enumerable: !0,
    get: function () {
      return wt.AbstractMessageReader;
    },
  });
  Object.defineProperty(u, "ReadableStreamMessageReader", {
    enumerable: !0,
    get: function () {
      return wt.ReadableStreamMessageReader;
    },
  });
  var St = Xr();
  Object.defineProperty(u, "MessageWriter", {
    enumerable: !0,
    get: function () {
      return St.MessageWriter;
    },
  });
  Object.defineProperty(u, "AbstractMessageWriter", {
    enumerable: !0,
    get: function () {
      return St.AbstractMessageWriter;
    },
  });
  Object.defineProperty(u, "WriteableStreamMessageWriter", {
    enumerable: !0,
    get: function () {
      return St.WriteableStreamMessageWriter;
    },
  });
  var gs = rn();
  Object.defineProperty(u, "AbstractMessageBuffer", {
    enumerable: !0,
    get: function () {
      return gs.AbstractMessageBuffer;
    },
  });
  var A = pn();
  Object.defineProperty(u, "ConnectionStrategy", {
    enumerable: !0,
    get: function () {
      return A.ConnectionStrategy;
    },
  });
  Object.defineProperty(u, "ConnectionOptions", {
    enumerable: !0,
    get: function () {
      return A.ConnectionOptions;
    },
  });
  Object.defineProperty(u, "NullLogger", {
    enumerable: !0,
    get: function () {
      return A.NullLogger;
    },
  });
  Object.defineProperty(u, "createMessageConnection", {
    enumerable: !0,
    get: function () {
      return A.createMessageConnection;
    },
  });
  Object.defineProperty(u, "ProgressToken", {
    enumerable: !0,
    get: function () {
      return A.ProgressToken;
    },
  });
  Object.defineProperty(u, "ProgressType", {
    enumerable: !0,
    get: function () {
      return A.ProgressType;
    },
  });
  Object.defineProperty(u, "Trace", {
    enumerable: !0,
    get: function () {
      return A.Trace;
    },
  });
  Object.defineProperty(u, "TraceValues", {
    enumerable: !0,
    get: function () {
      return A.TraceValues;
    },
  });
  Object.defineProperty(u, "TraceFormat", {
    enumerable: !0,
    get: function () {
      return A.TraceFormat;
    },
  });
  Object.defineProperty(u, "SetTraceNotification", {
    enumerable: !0,
    get: function () {
      return A.SetTraceNotification;
    },
  });
  Object.defineProperty(u, "LogTraceNotification", {
    enumerable: !0,
    get: function () {
      return A.LogTraceNotification;
    },
  });
  Object.defineProperty(u, "ConnectionErrors", {
    enumerable: !0,
    get: function () {
      return A.ConnectionErrors;
    },
  });
  Object.defineProperty(u, "ConnectionError", {
    enumerable: !0,
    get: function () {
      return A.ConnectionError;
    },
  });
  Object.defineProperty(u, "CancellationReceiverStrategy", {
    enumerable: !0,
    get: function () {
      return A.CancellationReceiverStrategy;
    },
  });
  Object.defineProperty(u, "CancellationSenderStrategy", {
    enumerable: !0,
    get: function () {
      return A.CancellationSenderStrategy;
    },
  });
  Object.defineProperty(u, "CancellationStrategy", {
    enumerable: !0,
    get: function () {
      return A.CancellationStrategy;
    },
  });
  Object.defineProperty(u, "MessageStrategy", {
    enumerable: !0,
    get: function () {
      return A.MessageStrategy;
    },
  });
  var ys = ie();
  u.RAL = ys.default;
});
var Rn = commonJS(function (Sn) {
  Object.defineProperty(Sn, "__esModule", { value: !0 });
  var bn = importMetaRequire("util"),
    re = Ve();
  class Je extends re.AbstractMessageBuffer {
    constructor(e = "utf-8") {
      super(e);
    }
    emptyBuffer() {
      return Je.emptyBuffer;
    }
    fromString(e, t) {
      return Buffer.from(e, t);
    }
    toString(e, t) {
      if (e instanceof Buffer) return e.toString(t);
      else return new bn.TextDecoder(t).decode(e);
    }
    asNative(e, t) {
      if (t === void 0) return e instanceof Buffer ? e : Buffer.from(e);
      else return e instanceof Buffer ? e.slice(0, t) : Buffer.from(e, 0, t);
    }
    allocNative(e) {
      return Buffer.allocUnsafe(e);
    }
  }
  Je.emptyBuffer = Buffer.allocUnsafe(0);
  class vn {
    constructor(e) {
      this.stream = e;
    }
    onClose(e) {
      return (
        this.stream.on("close", e),
        re.Disposable.create(() => this.stream.off("close", e))
      );
    }
    onError(e) {
      return (
        this.stream.on("error", e),
        re.Disposable.create(() => this.stream.off("error", e))
      );
    }
    onEnd(e) {
      return (
        this.stream.on("end", e),
        re.Disposable.create(() => this.stream.off("end", e))
      );
    }
    onData(e) {
      return (
        this.stream.on("data", e),
        re.Disposable.create(() => this.stream.off("data", e))
      );
    }
  }
  class _n {
    constructor(e) {
      this.stream = e;
    }
    onClose(e) {
      return (
        this.stream.on("close", e),
        re.Disposable.create(() => this.stream.off("close", e))
      );
    }
    onError(e) {
      return (
        this.stream.on("error", e),
        re.Disposable.create(() => this.stream.off("error", e))
      );
    }
    onEnd(e) {
      return (
        this.stream.on("end", e),
        re.Disposable.create(() => this.stream.off("end", e))
      );
    }
    write(e, t) {
      return new Promise((r, s) => {
        let a = (f) => {
          if (f === void 0 || f === null) r();
          else s(f);
        };
        if (typeof e === "string") this.stream.write(e, t, a);
        else this.stream.write(e, a);
      });
    }
    end() {
      this.stream.end();
    }
  }
  var wn = Object.freeze({
    messageBuffer: Object.freeze({ create: (e) => new Je(e) }),
    applicationJson: Object.freeze({
      encoder: Object.freeze({
        name: "application/json",
        encode: (e, t) => {
          try {
            return Promise.resolve(
              Buffer.from(JSON.stringify(e, void 0, 0), t.charset),
            );
          } catch (r) {
            return Promise.reject(r);
          }
        },
      }),
      decoder: Object.freeze({
        name: "application/json",
        decode: (e, t) => {
          try {
            if (e instanceof Buffer)
              return Promise.resolve(JSON.parse(e.toString(t.charset)));
            else
              return Promise.resolve(
                JSON.parse(new bn.TextDecoder(t.charset).decode(e)),
              );
          } catch (r) {
            return Promise.reject(r);
          }
        },
      }),
    }),
    stream: Object.freeze({
      asReadableStream: (e) => new vn(e),
      asWritableStream: (e) => new _n(e),
    }),
    console,
    timer: Object.freeze({
      setTimeout(e, t, ...r) {
        let s = setTimeout(e, t, ...r);
        return { dispose: () => clearTimeout(s) };
      },
      setImmediate(e, ...t) {
        let r = setImmediate(e, ...t);
        return { dispose: () => clearImmediate(r) };
      },
      setInterval(e, t, ...r) {
        let s = setInterval(e, t, ...r);
        return { dispose: () => clearInterval(s) };
      },
    }),
  });
  function Pt() {
    return wn;
  }
  (function (e) {
    function t() {
      re.RAL.install(wn);
    }
    e.install = t;
  })(Pt || (Pt = {}));
  Sn.default = Pt;
});
var Ct = commonJS(function (y) {
  var Ss =
      (y && y.__createBinding) ||
      (Object.create
        ? function (e, t, r, s) {
            if (s === void 0) s = r;
            var a = Object.getOwnPropertyDescriptor(t, r);
            if (
              !a ||
              ("get" in a ? !t.__esModule : a.writable || a.configurable)
            )
              a = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              };
            Object.defineProperty(e, s, a);
          }
        : function (e, t, r, s) {
            if (s === void 0) s = r;
            e[s] = t[r];
          }),
    Rs =
      (y && y.__exportStar) ||
      function (e, t) {
        for (var r in e)
          if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r))
            Ss(t, e, r);
      };
  Object.defineProperty(y, "__esModule", { value: !0 });
  y.createMessageConnection =
    y.createServerSocketTransport =
    y.createClientSocketTransport =
    y.createServerPipeTransport =
    y.createClientPipeTransport =
    y.generateRandomPipeName =
    y.StreamMessageWriter =
    y.StreamMessageReader =
    y.SocketMessageWriter =
    y.SocketMessageReader =
    y.PortMessageWriter =
    y.PortMessageReader =
    y.IPCMessageWriter =
    y.IPCMessageReader =
      void 0;
  var ve = Rn();
  ve.default.install();
  var Pn = importMetaRequire("path"),
    Ps = importMetaRequire("os"),
    Ts = importMetaRequire("crypto"),
    Ke = importMetaRequire("net"),
    Q = Ve();
  Rs(Ve(), y);
  class En extends Q.AbstractMessageReader {
    constructor(e) {
      super();
      this.process = e;
      let t = this.process;
      (t.on("error", (r) => this.fireError(r)),
        t.on("close", () => this.fireClose()));
    }
    listen(e) {
      return (
        this.process.on("message", e),
        Q.Disposable.create(() => this.process.off("message", e))
      );
    }
  }
  y.IPCMessageReader = En;
  class Cn extends Q.AbstractMessageWriter {
    constructor(e) {
      super();
      ((this.process = e), (this.errorCount = 0));
      let t = this.process;
      (t.on("error", (r) => this.fireError(r)),
        t.on("close", () => this.fireClose));
    }
    write(e) {
      try {
        if (typeof this.process.send === "function")
          this.process.send(e, void 0, void 0, (t) => {
            if (t) (this.errorCount++, this.handleError(t, e));
            else this.errorCount = 0;
          });
        return Promise.resolve();
      } catch (t) {
        return (this.handleError(t, e), Promise.reject(t));
      }
    }
    handleError(e, t) {
      (this.errorCount++, this.fireError(e, t, this.errorCount));
    }
    end() {}
  }
  y.IPCMessageWriter = Cn;
  class xn extends Q.AbstractMessageReader {
    constructor(e) {
      super();
      ((this.onData = new Q.Emitter()),
        e.on("close", () => this.fireClose),
        e.on("error", (t) => this.fireError(t)),
        e.on("message", (t) => {
          this.onData.fire(t);
        }));
    }
    listen(e) {
      return this.onData.event(e);
    }
  }
  y.PortMessageReader = xn;
  class kn extends Q.AbstractMessageWriter {
    constructor(e) {
      super();
      ((this.port = e),
        (this.errorCount = 0),
        e.on("close", () => this.fireClose()),
        e.on("error", (t) => this.fireError(t)));
    }
    write(e) {
      try {
        return (this.port.postMessage(e), Promise.resolve());
      } catch (t) {
        return (this.handleError(t, e), Promise.reject(t));
      }
    }
    handleError(e, t) {
      (this.errorCount++, this.fireError(e, t, this.errorCount));
    }
    end() {}
  }
  y.PortMessageWriter = kn;
  class _e extends Q.ReadableStreamMessageReader {
    constructor(e, t = "utf-8") {
      super((0, ve.default)().stream.asReadableStream(e), t);
    }
  }
  y.SocketMessageReader = _e;
  class we extends Q.WriteableStreamMessageWriter {
    constructor(e, t) {
      super((0, ve.default)().stream.asWritableStream(e), t);
      this.socket = e;
    }
    dispose() {
      (super.dispose(), this.socket.destroy());
    }
  }
  y.SocketMessageWriter = we;
  class Tt extends Q.ReadableStreamMessageReader {
    constructor(e, t) {
      super((0, ve.default)().stream.asReadableStream(e), t);
    }
  }
  y.StreamMessageReader = Tt;
  class Et extends Q.WriteableStreamMessageWriter {
    constructor(e, t) {
      super((0, ve.default)().stream.asWritableStream(e), t);
    }
  }
  y.StreamMessageWriter = Et;
  var Tn = process.env.XDG_RUNTIME_DIR,
    Es = new Map([
      ["linux", 107],
      ["darwin", 103],
    ]);
  function Cs() {
    let e = (0, Ts.randomBytes)(21).toString("hex"),
      t;
    if (Tn) t = Pn.join(Tn, `vscode-ipc-${e}.sock`);
    else t = Pn.join(Ps.tmpdir(), `vscode-${e}.sock`);
    let r = Es.get("darwin");
    if (r !== void 0 && t.length > r)
      (0, ve.default)().console.warn(
        `WARNING: IPC handle "${t}" is longer than ${r} characters.`,
      );
    return t;
  }
  y.generateRandomPipeName = Cs;
  function xs(e, t = "utf-8") {
    let r,
      s = new Promise((a, f) => {
        r = a;
      });
    return new Promise((a, f) => {
      let S = (0, Ke.createServer)((b) => {
        (S.close(), r([new _e(b, t), new we(b, t)]));
      });
      (S.on("error", f),
        S.listen(e, () => {
          (S.removeListener("error", f), a({ onConnected: () => s }));
        }));
    });
  }
  y.createClientPipeTransport = xs;
  function ks(e, t = "utf-8") {
    let r = (0, Ke.createConnection)(e);
    return [new _e(r, t), new we(r, t)];
  }
  y.createServerPipeTransport = ks;
  function Ls(e, t = "utf-8") {
    let r,
      s = new Promise((a, f) => {
        r = a;
      });
    return new Promise((a, f) => {
      let S = (0, Ke.createServer)((b) => {
        (S.close(), r([new _e(b, t), new we(b, t)]));
      });
      (S.on("error", f),
        S.listen(e, "127.0.0.1", () => {
          (S.removeListener("error", f), a({ onConnected: () => s }));
        }));
    });
  }
  y.createClientSocketTransport = Ls;
  function Ns(e, t = "utf-8") {
    let r = (0, Ke.createConnection)(e, "127.0.0.1");
    return [new _e(r, t), new we(r, t)];
  }
  y.createServerSocketTransport = Ns;
  function Os(e) {
    let t = e;
    return t.read !== void 0 && t.addListener !== void 0;
  }
  function Ms(e) {
    let t = e;
    return t.write !== void 0 && t.addListener !== void 0;
  }
  function js(e, t, r, s) {
    if (!r) r = Q.NullLogger;
    let a = Os(e) ? new Tt(e) : e,
      f = Ms(t) ? new Et(t) : t;
    if (Q.ConnectionStrategy.is(s)) s = { connectionStrategy: s };
    return (0, Q.createMessageConnection)(a, f, r, s);
  }
  y.createMessageConnection = js;
});
var Se = toESM(Ct(), 1);
var Qe = toESM(Ct(), 1);
var $s = 65536,
  qs = 33554432,
  xt = Buffer.from(`\r
\r
`),
  Ln = Buffer.alloc(0);
class kt extends Qe.AbstractMessageReader {
  readable;
  onProtocolViolation;
  callback;
  stopped = !1;
  headerChunks = [];
  headerBytes = 0;
  headerTail = Ln;
  expectedBodyLength;
  bodyChunks = [];
  bodyBytes = 0;
  onData = (e) => this.handleData(e);
  onStreamError = (e) => this.fireError(e);
  onStreamClose = () => this.fireClose();
  constructor(e, t) {
    super();
    this.readable = e;
    this.onProtocolViolation = t;
  }
  listen(e) {
    return (
      (this.callback = e),
      this.readable.on("data", this.onData),
      this.readable.on("error", this.onStreamError),
      this.readable.on("close", this.onStreamClose),
      Qe.Disposable.create(() => this.detach())
    );
  }
  dispose() {
    (this.detach(), super.dispose());
  }
  detach() {
    ((this.stopped = !0),
      this.readable.removeListener("data", this.onData),
      this.readable.removeListener("error", this.onStreamError),
      this.readable.removeListener("close", this.onStreamClose),
      this.resetHeader(),
      (this.bodyChunks = []),
      (this.bodyBytes = 0),
      (this.expectedBodyLength = void 0));
  }
  handleData(e) {
    if (this.stopped) return;
    let t = typeof e === "string" ? Buffer.from(e, "utf8") : e;
    while (t && t.length > 0 && !this.stopped) {
      let r = this.expectedBodyLength;
      t = r === void 0 ? this.consumeHeader(t) : this.consumeBody(t, r);
    }
  }
  consumeHeader(e) {
    let t =
        this.headerTail.length === 0 ? e : Buffer.concat([this.headerTail, e]),
      r = t.indexOf(xt);
    if (r === -1) {
      if (
        (this.headerChunks.push(e),
        (this.headerBytes += e.length),
        (this.headerTail = t.subarray(Math.max(0, t.length - (xt.length - 1)))),
        this.headerBytes > $s)
      )
        this.protocolViolation(
          Error(
            "LSP server exceeded the header size limit without a message header \u2014 it is likely printing logs or other non-protocol output to stdout instead of stderr",
          ),
        );
      return;
    }
    let s = r - this.headerTail.length + xt.length,
      a = this.headerBytes - this.headerTail.length + r;
    this.headerChunks.push(e.subarray(0, s));
    let f = Buffer.concat(this.headerChunks).subarray(0, a).toString("latin1"),
      S = e.subarray(s);
    this.resetHeader();
    let b = Ws(f);
    if (b instanceof Error) {
      this.protocolViolation(b);
      return;
    }
    return ((this.expectedBodyLength = b), S.length > 0 ? S : void 0);
  }
  consumeBody(e, t) {
    let r = t - this.bodyBytes;
    if (e.length < r) {
      (this.bodyChunks.push(e), (this.bodyBytes += e.length));
      return;
    }
    this.bodyChunks.push(e.length === r ? e : e.subarray(0, r));
    let s = e.length > r ? e.subarray(r) : void 0,
      a = Buffer.concat(this.bodyChunks, t);
    return (
      (this.bodyChunks = []),
      (this.bodyBytes = 0),
      (this.expectedBodyLength = void 0),
      this.deliver(a),
      s
    );
  }
  deliver(e) {
    let t;
    try {
      t = Is(e.toString("utf8"));
    } catch (r) {
      n(`LSP: dropped unparseable message body: ${r}`, { level: "warn" });
      return;
    }
    if (!Ds(t)) {
      n("LSP: dropped message body that is not an object", { level: "warn" });
      return;
    }
    try {
      this.callback?.(t);
    } catch (r) {
      this.fireError(r);
    }
  }
  resetHeader() {
    ((this.headerChunks = []), (this.headerBytes = 0), (this.headerTail = Ln));
  }
  protocolViolation(e) {
    if (this.stopped) return;
    ((this.stopped = !0), this.detach(), this.fireError(e));
    try {
      this.onProtocolViolation(e);
    } catch (t) {
      this.fireError(t);
    }
  }
}
function Ds(e) {
  return typeof e === "object" && e !== null;
}
var As = /^([!#$%&'*+.^_`|~0-9A-Za-z-]+)[ \t]*:[ \t]*([^\r\n]*)$/,
  zs = new Set(["content-length", "content-type"]);
function Ws(e) {
  let t;
  for (let s of e.split(`\r
`)) {
    let a = As.exec(s),
      f = a?.[1]?.toLowerCase();
    if (!a || f === void 0 || !zs.has(f))
      return Error(
        "LSP server sent non-protocol output in the header block \u2014 its stdout is desynchronized from the base protocol (logs/banners on stdout instead of stderr?)",
      );
    if (f === "content-length") t = a[2]?.trim();
  }
  if (t === void 0)
    return Error(
      "LSP server sent a header block without a Content-Length \u2014 its stdout is desynchronized from the base protocol (non-protocol output on stdout?)",
    );
  if (!/^\d+$/.test(t))
    return Error(
      "LSP server sent a Content-Length that is not a number \u2014 its stdout is desynchronized from the base protocol",
    );
  let r = Number(t);
  if (r > qs)
    return Error(
      "LSP server declared a message larger than the size limit \u2014 refusing to buffer it",
    );
  return r;
}
class Nn extends Error {
  oomKilledInToolCgroup;
  constructor(e, t = !1) {
    super(e);
    this.oomKilledInToolCgroup = t;
    this.name = "LSPServerCrashError";
  }
}
function createLSPClient(e, t) {
  let r,
    s,
    a = !1,
    f = !1,
    S,
    b = !1,
    N,
    M,
    G,
    U,
    te = new Map(),
    se = new Map();
  function Z() {
    if (f) throw S || Error(`LSP server ${e} failed to start`);
  }
  function V(m) {
    try {
      m.dispose();
    } catch (g) {
      n(`Connection disposal failed for ${e}: ${l(g)}`);
    }
  }
  function Y(m, g, { force: p }) {
    if (g) V(g);
    if (m === r) {
      if (N) m.removeListener("error", N);
      if (M) m.removeListener("exit", M);
      if (m.stderr && U) m.stderr.removeListener("data", U);
      ((N = void 0), (M = void 0), (G = void 0), (U = void 0));
    }
    if (typeof m.exitCode === "number" || typeof m.signalCode === "string")
      return;
    try {
      if ((p || globalThis.process.platform === "win32") && m.pid !== void 0)
        killProcessTree(m.pid);
      else m.kill();
    } catch (x) {
      n(`Process kill failed for ${e} (may already be dead): ${l(x)}`);
    }
  }
  return {
    get isInitialized() {
      return a;
    },
    async start(m, g, p) {
      ((f = !1), (S = void 0), (a = !1), (b = !1));
      try {
        let x =
            Bs("lsp").cgroup !== void 0
              ? "capped"
              : exe()
                ? "parked"
                : "uncapped",
          E = x === "capped" ? SPn() : void 0;
        if (
          ((r = SW(m, g, {
            stdio: ["pipe", "pipe", "pipe"],
            env: { ...subprocessEnv(), ...p?.env },
            extendEnv: !1,
            cwd: p?.cwd,
            windowsHide: !0,
            toolCgroupClass: "lsp",
          })),
          !r.stdout || !r.stdin)
        )
          throw Error("LSP server process stdio not available");
        let v = r;
        if (
          (await new Promise((_, z) => {
            let J = () => {
                (ce(), _());
              },
              ae = (de) => {
                (ce(), z(de));
              },
              ce = () => {
                (v.removeListener("spawn", J), v.removeListener("error", ae));
              };
            (v.once("spawn", J), v.once("error", ae));
          }),
          v.pid)
        )
          (kRe("lsp", v.pid),
            v.once("close", () => {
              if (v.pid) sir(v.pid);
            }));
        if (r.stderr)
          ((U = (_) => {
            let z = _.toString().trim();
            if (z) n(`[LSP SERVER ${e}] ${z}`);
          }),
            r.stderr.on("data", U));
        ((N = (_) => {
          if (r !== v) return;
          if (!b)
            ((f = !0),
              (S = _),
              n(`LSP server ${e} failed to start: ${_.message}`, {
                level: "error",
              }));
        }),
          r.on("error", N),
          (M = (_, z) => {
            if (r !== v) return;
            if ((_ === null ? z !== null : _ !== 0) && !b) {
              a = !1;
              let ae = x === "capped" || (x === "parked" && Qcr("lsp")),
                ce = (z === "SIGKILL" || _ === 137) && ae ? Zcr(E) : !1,
                de = ce === !0,
                je =
                  (_ === null ? `killed by signal ${z}` : `exit code ${_}`) +
                  (de
                    ? " \u2014 killed at the tool memory limit (CLAUDE_CODE_TOOL_MEMORY_LIMIT)"
                    : ce === void 0
                      ? " \u2014 likely killed at the tool memory limit (CLAUDE_CODE_TOOL_MEMORY_LIMIT)"
                      : ""),
                Pe = new Nn(`LSP server ${e} crashed with ${je}`, de);
              (n(`LSP server ${e} crashed with ${je}`, { level: "error" }),
                (f = !0),
                (S = Pe),
                Y(v, s, { force: !1 }),
                (r = void 0),
                (s = void 0),
                t?.(Pe));
            }
          }),
          r.on("exit", M),
          (G = (_) => {
            if (!b) n(`LSP server ${e} stdin error: ${_.message}`);
          }),
          r.stdin.on("error", G));
        let Re = new kt(r.stdout, (_) => {
            if (r !== v) {
              V(oe);
              return;
            }
            if (b) {
              V(oe);
              return;
            }
            if (v.exitCode !== null || v.signalCode !== null) {
              V(oe);
              return;
            }
            ((f = !0),
              (S = _),
              (a = !1),
              n(
                `LSP server ${e} protocol violation, stopping process: ${_.message}`,
                { level: "error" },
              ),
              Y(v, s, { force: !0 }),
              (r = void 0),
              (s = void 0),
              t?.(_));
          }),
          Me = new Se.StreamMessageWriter(r.stdin),
          oe = Se.createMessageConnection(Re, Me);
        ((s = oe),
          s.onError(([_, z, J]) => {
            if (!b && r === v)
              ((f = !0),
                (S = _),
                n(`LSP server ${e} connection error: ${_.message}`, {
                  level: "error",
                }));
          }),
          s.onClose(() => {
            if (!b && r === v)
              ((a = !1), n(`LSP server ${e} connection closed`));
          }),
          s.listen(),
          s
            .trace(Se.Trace.Verbose, {
              log: (_) => {
                n(`[LSP PROTOCOL ${e}] ${_}`);
              },
            })
            .catch((_) => {
              n(`Failed to enable tracing for ${e}: ${_.message}`);
            }));
        for (let [_, z] of te)
          (s.onNotification(_, z),
            n(`Applied notification handler for ${e}.${_}`));
        for (let [_, z] of se)
          (s.onRequest(_, z), n(`Applied request handler for ${e}.${_}`));
        n(`LSP client started for ${e}`);
      } catch (x) {
        if (Rt(x))
          n(`LSP server ${e} failed to start: ${l(x)}`, { level: "error" });
        else
          logErrorWithTelemetryMessage(
            Error(`LSP server ${e} failed to start: ${l(x)}`),
            "LSP server failed to start",
          );
        throw x;
      }
    },
    async initialize(m) {
      if (!s) throw Error("LSP client not started");
      Z();
      try {
        let g = await s.sendRequest("initialize", m);
        if ((await s.sendNotification("initialized", {}), Z(), !s))
          throw Error("LSP server stopped during initialize");
        return ((a = !0), n(`LSP server ${e} initialized`), g);
      } catch (g) {
        throw (
          n(`LSP server ${e} initialize failed: ${g.message}`, {
            level: "error",
          }),
          (f && S) || g
        );
      }
    },
    async sendRequest(m, g) {
      if (!s) throw Error("LSP client not started");
      if ((Z(), !a)) throw Error("LSP server not initialized");
      try {
        return await s.sendRequest(m, g);
      } catch (p) {
        throw (
          n(`LSP server ${e} request ${m} failed: ${p.message}`, {
            level: "error",
          }),
          p
        );
      }
    },
    async sendNotification(m, g) {
      if (!s) throw Error("LSP client not started");
      Z();
      try {
        await s.sendNotification(m, g);
      } catch (p) {
        n(
          `LSP server ${e} notification ${m} failed (continuing): ${p.message}`,
          { level: "error" },
        );
      }
    },
    onNotification(m, g) {
      if ((te.set(m, g), !s)) {
        n(
          `Registered notification handler for ${e}.${m} (connection not ready)`,
        );
        return;
      }
      (Z(), s.onNotification(m, g));
    },
    onRequest(m, g) {
      if ((se.set(m, g), !s)) {
        n(`Registered request handler for ${e}.${m} (connection not ready)`);
        return;
      }
      (Z(), s.onRequest(m, g));
    },
    async stop(m) {
      let g;
      b = !0;
      let p = r,
        x = s;
      try {
        if (x) {
          let E = x,
            v = (async () => {
              (await E.sendRequest("shutdown", {}),
                await E.sendNotification("exit", {}));
            })();
          if ((v.catch(() => {}), m !== void 0))
            await withTimeout(
              v,
              m,
              `LSP server '${e}' timed out after ${m}ms during shutdown`,
            );
          else await v;
        }
      } catch (E) {
        let v = E;
        (n(`LSP server ${e} stop failed: ${v.message}`, { level: "error" }),
          (g = v));
      } finally {
        let E = r === p;
        if (p) Y(p, x, { force: !1 });
        else if (x) V(x);
        if (r === p) r = void 0;
        if (s === x) s = void 0;
        if (E) {
          if (((a = !1), (b = !1), g)) ((f = !0), (S = g));
        }
        n(`LSP client stopped for ${e}`);
      }
      if (g) throw g;
    },
  };
}
export { createLSPClient };

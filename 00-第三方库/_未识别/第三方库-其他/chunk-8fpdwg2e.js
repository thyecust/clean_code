// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l, A } from "../../@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { commonJS, importMetaRequire } from "../../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var Ce = commonJS(function (Xt, Me) {
  var U = importMetaRequire("constants"),
    ft = process.cwd,
    oe = null,
    lt = process.env.GRACEFUL_FS_PLATFORM || "darwin";
  process.cwd = function () {
    if (!oe) oe = ft.call(process);
    return oe;
  };
  try {
    process.cwd();
  } catch (e) {}
  if (typeof process.chdir === "function") {
    if (
      ((ue = process.chdir),
      (process.chdir = function (e) {
        ((oe = null), ue.call(process, e));
      }),
      Object.setPrototypeOf)
    )
      Object.setPrototypeOf(process.chdir, ue);
  }
  var ue;
  Me.exports = st;
  function st(e) {
    if (
      U.hasOwnProperty("O_SYMLINK") &&
      process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)
    )
      t(e);
    if (!e.lutimes) r(e);
    if (
      ((e.chown = c(e.chown)),
      (e.fchown = c(e.fchown)),
      (e.lchown = c(e.lchown)),
      (e.chmod = i(e.chmod)),
      (e.fchmod = i(e.fchmod)),
      (e.lchmod = i(e.lchmod)),
      (e.chownSync = p(e.chownSync)),
      (e.fchownSync = p(e.fchownSync)),
      (e.lchownSync = p(e.lchownSync)),
      (e.chmodSync = u(e.chmodSync)),
      (e.fchmodSync = u(e.fchmodSync)),
      (e.lchmodSync = u(e.lchmodSync)),
      (e.stat = y(e.stat)),
      (e.fstat = y(e.fstat)),
      (e.lstat = y(e.lstat)),
      (e.statSync = T(e.statSync)),
      (e.fstatSync = T(e.fstatSync)),
      (e.lstatSync = T(e.lstatSync)),
      e.chmod && !e.lchmod)
    )
      ((e.lchmod = function (o, m, f) {
        if (f) process.nextTick(f);
      }),
        (e.lchmodSync = function () {}));
    if (e.chown && !e.lchown)
      ((e.lchown = function (o, m, f, a) {
        if (a) process.nextTick(a);
      }),
        (e.lchownSync = function () {}));
    if (lt === "win32")
      e.rename =
        typeof e.rename !== "function"
          ? e.rename
          : (function (o) {
              function m(f, a, h) {
                var g = Date.now(),
                  S = 0;
                o(f, a, function x(G) {
                  if (
                    G &&
                    (G.code === "EACCES" ||
                      G.code === "EPERM" ||
                      G.code === "EBUSY") &&
                    Date.now() - g < 60000
                  ) {
                    if (
                      (setTimeout(function () {
                        e.stat(a, function (C, Z) {
                          if (C && C.code === "ENOENT") o(f, a, x);
                          else h(G);
                        });
                      }, S),
                      S < 100)
                    )
                      S += 10;
                    return;
                  }
                  if (h) h(G);
                });
              }
              if (Object.setPrototypeOf) Object.setPrototypeOf(m, o);
              return m;
            })(e.rename);
    ((e.read =
      typeof e.read !== "function"
        ? e.read
        : (function (o) {
            function m(f, a, h, g, S, x) {
              var G;
              if (x && typeof x === "function") {
                var C = 0;
                G = function (Z, Pe, Re) {
                  if (Z && Z.code === "EAGAIN" && C < 10)
                    return (C++, o.call(e, f, a, h, g, S, G));
                  x.apply(this, arguments);
                };
              }
              return o.call(e, f, a, h, g, S, G);
            }
            if (Object.setPrototypeOf) Object.setPrototypeOf(m, o);
            return m;
          })(e.read)),
      (e.readSync =
        typeof e.readSync !== "function"
          ? e.readSync
          : (function (o) {
              return function (m, f, a, h, g) {
                var S = 0;
                while (!0)
                  try {
                    return o.call(e, m, f, a, h, g);
                  } catch (x) {
                    if (x.code === "EAGAIN" && S < 10) {
                      S++;
                      continue;
                    }
                    throw x;
                  }
              };
            })(e.readSync)));
    function t(o) {
      ((o.lchmod = function (m, f, a) {
        o.open(m, U.O_WRONLY | U.O_SYMLINK, f, function (h, g) {
          if (h) {
            if (a) a(h);
            return;
          }
          o.fchmod(g, f, function (S) {
            o.close(g, function (x) {
              if (a) a(S || x);
            });
          });
        });
      }),
        (o.lchmodSync = function (m, f) {
          var a = o.openSync(m, U.O_WRONLY | U.O_SYMLINK, f),
            h = !0,
            g;
          try {
            ((g = o.fchmodSync(a, f)), (h = !1));
          } finally {
            if (h)
              try {
                o.closeSync(a);
              } catch (S) {}
            else o.closeSync(a);
          }
          return g;
        }));
    }
    function r(o) {
      if (U.hasOwnProperty("O_SYMLINK") && o.futimes)
        ((o.lutimes = function (m, f, a, h) {
          o.open(m, U.O_SYMLINK, function (g, S) {
            if (g) {
              if (h) h(g);
              return;
            }
            o.futimes(S, f, a, function (x) {
              o.close(S, function (G) {
                if (h) h(x || G);
              });
            });
          });
        }),
          (o.lutimesSync = function (m, f, a) {
            var h = o.openSync(m, U.O_SYMLINK),
              g,
              S = !0;
            try {
              ((g = o.futimesSync(h, f, a)), (S = !1));
            } finally {
              if (S)
                try {
                  o.closeSync(h);
                } catch (x) {}
              else o.closeSync(h);
            }
            return g;
          }));
      else if (o.futimes)
        ((o.lutimes = function (m, f, a, h) {
          if (h) process.nextTick(h);
        }),
          (o.lutimesSync = function () {}));
    }
    function i(o) {
      if (!o) return o;
      return function (m, f, a) {
        return o.call(e, m, f, function (h) {
          if (b(h)) h = null;
          if (a) a.apply(this, arguments);
        });
      };
    }
    function u(o) {
      if (!o) return o;
      return function (m, f) {
        try {
          return o.call(e, m, f);
        } catch (a) {
          if (!b(a)) throw a;
        }
      };
    }
    function c(o) {
      if (!o) return o;
      return function (m, f, a, h) {
        return o.call(e, m, f, a, function (g) {
          if (b(g)) g = null;
          if (h) h.apply(this, arguments);
        });
      };
    }
    function p(o) {
      if (!o) return o;
      return function (m, f, a) {
        try {
          return o.call(e, m, f, a);
        } catch (h) {
          if (!b(h)) throw h;
        }
      };
    }
    function y(o) {
      if (!o) return o;
      return function (m, f, a) {
        if (typeof f === "function") ((a = f), (f = null));
        function h(g, S) {
          if (S) {
            if (S.uid < 0) S.uid += 4294967296;
            if (S.gid < 0) S.gid += 4294967296;
          }
          if (a) a.apply(this, arguments);
        }
        return f ? o.call(e, m, f, h) : o.call(e, m, h);
      };
    }
    function T(o) {
      if (!o) return o;
      return function (m, f) {
        var a = f ? o.call(e, m, f) : o.call(e, m);
        if (a) {
          if (a.uid < 0) a.uid += 4294967296;
          if (a.gid < 0) a.gid += 4294967296;
        }
        return a;
      };
    }
    function b(o) {
      if (!o) return !0;
      if (o.code === "ENOSYS") return !0;
      var m = !process.getuid || process.getuid() !== 0;
      if (m) {
        if (o.code === "EINVAL" || o.code === "EPERM") return !0;
      }
      return !1;
    }
  }
});
var qe = commonJS(function (Jt, je) {
  var Ge = importMetaRequire("stream").Stream;
  je.exports = ht;
  function ht(e) {
    return { ReadStream: t, WriteStream: r };
    function t(i, u) {
      if (!(this instanceof t)) return new t(i, u);
      Ge.call(this);
      var c = this;
      ((this.path = i),
        (this.fd = null),
        (this.readable = !0),
        (this.paused = !1),
        (this.flags = "r"),
        (this.mode = 438),
        (this.bufferSize = 65536),
        (u = u || {}));
      var p = Object.keys(u);
      for (var y = 0, T = p.length; y < T; y++) {
        var b = p[y];
        this[b] = u[b];
      }
      if (this.encoding) this.setEncoding(this.encoding);
      if (this.start !== void 0) {
        if (typeof this.start !== "number")
          throw TypeError("start must be a Number");
        if (this.end === void 0) this.end = 1 / 0;
        else if (typeof this.end !== "number")
          throw TypeError("end must be a Number");
        if (this.start > this.end) throw Error("start must be <= end");
        this.pos = this.start;
      }
      if (this.fd !== null) {
        process.nextTick(function () {
          c._read();
        });
        return;
      }
      e.open(this.path, this.flags, this.mode, function (o, m) {
        if (o) {
          (c.emit("error", o), (c.readable = !1));
          return;
        }
        ((c.fd = m), c.emit("open", m), c._read());
      });
    }
    function r(i, u) {
      if (!(this instanceof r)) return new r(i, u);
      (Ge.call(this),
        (this.path = i),
        (this.fd = null),
        (this.writable = !0),
        (this.flags = "w"),
        (this.encoding = "binary"),
        (this.mode = 438),
        (this.bytesWritten = 0),
        (u = u || {}));
      var c = Object.keys(u);
      for (var p = 0, y = c.length; p < y; p++) {
        var T = c[p];
        this[T] = u[T];
      }
      if (this.start !== void 0) {
        if (typeof this.start !== "number")
          throw TypeError("start must be a Number");
        if (this.start < 0) throw Error("start must be >= zero");
        this.pos = this.start;
      }
      if (((this.busy = !1), (this._queue = []), this.fd === null))
        ((this._open = e.open),
          this._queue.push([
            this._open,
            this.path,
            this.flags,
            this.mode,
            void 0,
          ]),
          this.flush());
    }
  }
});
var $e = commonJS(function (Zt, Ue) {
  Ue.exports = mt;
  var pt =
    Object.getPrototypeOf ||
    function (e) {
      return e.__proto__;
    };
  function mt(e) {
    if (e === null || typeof e !== "object") return e;
    if (e instanceof Object) var t = { __proto__: pt(e) };
    else var t = Object.create(null);
    return (
      Object.getOwnPropertyNames(e).forEach(function (r) {
        Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
      }),
      t
    );
  }
});
var we = commonJS(function (er, _e) {
  var I = importMetaRequire("fs"),
    yt = Ce(),
    dt = qe(),
    vt = $e(),
    ce = importMetaRequire("util"),
    M,
    fe;
  if (typeof Symbol === "function" && typeof Symbol.for === "function")
    ((M = Symbol.for("graceful-fs.queue")),
      (fe = Symbol.for("graceful-fs.previous")));
  else ((M = "___graceful-fs.queue"), (fe = "___graceful-fs.previous"));
  function St() {}
  function Ye(e, t) {
    Object.defineProperty(e, M, {
      get: function () {
        return t;
      },
    });
  }
  var K = St;
  if (ce.debuglog) K = ce.debuglog("gfs4");
  else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
    K = function () {
      var e = ce.format.apply(ce, arguments);
      ((e =
        "GFS4: " +
        e.split(/\n/).join(`
GFS4: `)),
        console.error(e));
    };
  if (!I[M]) {
    if (
      ((de = global[M] || []),
      Ye(I, de),
      (I.close = (function (e) {
        function t(r, i) {
          return e.call(I, r, function (u) {
            if (!u) We();
            if (typeof i === "function") i.apply(this, arguments);
          });
        }
        return (Object.defineProperty(t, fe, { value: e }), t);
      })(I.close)),
      (I.closeSync = (function (e) {
        function t(r) {
          (e.apply(I, arguments), We());
        }
        return (Object.defineProperty(t, fe, { value: e }), t);
      })(I.closeSync)),
      /\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
    )
      process.on("exit", function () {
        (K(I[M]), importMetaRequire("assert").equal(I[M].length, 0));
      });
  }
  var de;
  if (!global[M]) Ye(global, I[M]);
  _e.exports = ve(vt(I));
  if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !I.__patched)
    ((_e.exports = ve(I)), (I.__patched = !0));
  function ve(e) {
    (yt(e),
      (e.gracefulify = ve),
      (e.createReadStream = Pe),
      (e.createWriteStream = Re));
    var t = e.readFile;
    e.readFile = r;
    function r(s, v, d) {
      if (typeof v === "function") ((d = v), (v = null));
      return N(s, v, d);
      function N(P, D, k, L) {
        return t(P, D, function (_) {
          if (_ && (_.code === "EMFILE" || _.code === "ENFILE"))
            H([N, [P, D, k], _, L || Date.now(), Date.now()]);
          else if (typeof k === "function") k.apply(this, arguments);
        });
      }
    }
    var i = e.writeFile;
    e.writeFile = u;
    function u(s, v, d, N) {
      if (typeof d === "function") ((N = d), (d = null));
      return P(s, v, d, N);
      function P(D, k, L, _, R) {
        return i(D, k, L, function (O) {
          if (O && (O.code === "EMFILE" || O.code === "ENFILE"))
            H([P, [D, k, L, _], O, R || Date.now(), Date.now()]);
          else if (typeof _ === "function") _.apply(this, arguments);
        });
      }
    }
    var c = e.appendFile;
    if (c) e.appendFile = p;
    function p(s, v, d, N) {
      if (typeof d === "function") ((N = d), (d = null));
      return P(s, v, d, N);
      function P(D, k, L, _, R) {
        return c(D, k, L, function (O) {
          if (O && (O.code === "EMFILE" || O.code === "ENFILE"))
            H([P, [D, k, L, _], O, R || Date.now(), Date.now()]);
          else if (typeof _ === "function") _.apply(this, arguments);
        });
      }
    }
    var y = e.copyFile;
    if (y) e.copyFile = T;
    function T(s, v, d, N) {
      if (typeof d === "function") ((N = d), (d = 0));
      return P(s, v, d, N);
      function P(D, k, L, _, R) {
        return y(D, k, L, function (O) {
          if (O && (O.code === "EMFILE" || O.code === "ENFILE"))
            H([P, [D, k, L, _], O, R || Date.now(), Date.now()]);
          else if (typeof _ === "function") _.apply(this, arguments);
        });
      }
    }
    var b = e.readdir;
    e.readdir = m;
    var o = /^v[0-5]\./;
    function m(s, v, d) {
      if (typeof v === "function") ((d = v), (v = null));
      var N = o.test(process.version)
        ? function (k, L, _, R) {
            return b(k, P(k, L, _, R));
          }
        : function (k, L, _, R) {
            return b(k, L, P(k, L, _, R));
          };
      return N(s, v, d);
      function P(D, k, L, _) {
        return function (R, O) {
          if (R && (R.code === "EMFILE" || R.code === "ENFILE"))
            H([N, [D, k, L], R, _ || Date.now(), Date.now()]);
          else {
            if (O && O.sort) O.sort();
            if (typeof L === "function") L.call(this, R, O);
          }
        };
      }
    }
    if (process.version.substr(0, 4) === "v0.8") {
      var f = dt(e);
      ((x = f.ReadStream), (C = f.WriteStream));
    }
    var a = e.ReadStream;
    if (a) ((x.prototype = Object.create(a.prototype)), (x.prototype.open = G));
    var h = e.WriteStream;
    if (h) ((C.prototype = Object.create(h.prototype)), (C.prototype.open = Z));
    (Object.defineProperty(e, "ReadStream", {
      get: function () {
        return x;
      },
      set: function (s) {
        x = s;
      },
      enumerable: !0,
      configurable: !0,
    }),
      Object.defineProperty(e, "WriteStream", {
        get: function () {
          return C;
        },
        set: function (s) {
          C = s;
        },
        enumerable: !0,
        configurable: !0,
      }));
    var g = x;
    Object.defineProperty(e, "FileReadStream", {
      get: function () {
        return g;
      },
      set: function (s) {
        g = s;
      },
      enumerable: !0,
      configurable: !0,
    });
    var S = C;
    Object.defineProperty(e, "FileWriteStream", {
      get: function () {
        return S;
      },
      set: function (s) {
        S = s;
      },
      enumerable: !0,
      configurable: !0,
    });
    function x(s, v) {
      if (this instanceof x) return (a.apply(this, arguments), this);
      else return x.apply(Object.create(x.prototype), arguments);
    }
    function G() {
      var s = this;
      ye(s.path, s.flags, s.mode, function (v, d) {
        if (v) {
          if (s.autoClose) s.destroy();
          s.emit("error", v);
        } else ((s.fd = d), s.emit("open", d), s.read());
      });
    }
    function C(s, v) {
      if (this instanceof C) return (h.apply(this, arguments), this);
      else return C.apply(Object.create(C.prototype), arguments);
    }
    function Z() {
      var s = this;
      ye(s.path, s.flags, s.mode, function (v, d) {
        if (v) (s.destroy(), s.emit("error", v));
        else ((s.fd = d), s.emit("open", d));
      });
    }
    function Pe(s, v) {
      return new e.ReadStream(s, v);
    }
    function Re(s, v) {
      return new e.WriteStream(s, v);
    }
    var at = e.open;
    e.open = ye;
    function ye(s, v, d, N) {
      if (typeof d === "function") ((N = d), (d = null));
      return P(s, v, d, N);
      function P(D, k, L, _, R) {
        return at(D, k, L, function (O, Vt) {
          if (O && (O.code === "EMFILE" || O.code === "ENFILE"))
            H([P, [D, k, L, _], O, R || Date.now(), Date.now()]);
          else if (typeof _ === "function") _.apply(this, arguments);
        });
      }
    }
    return e;
  }
  function H(e) {
    (K("ENQUEUE", e[0].name, e[1]), I[M].push(e), Se());
  }
  var ae;
  function We() {
    var e = Date.now();
    for (var t = 0; t < I[M].length; ++t)
      if (I[M][t].length > 2) ((I[M][t][3] = e), (I[M][t][4] = e));
    Se();
  }
  function Se() {
    if ((clearTimeout(ae), (ae = void 0), I[M].length === 0)) return;
    var e = I[M].shift(),
      t = e[0],
      r = e[1],
      i = e[2],
      u = e[3],
      c = e[4];
    if (u === void 0) (K("RETRY", t.name, r), t.apply(null, r));
    else if (Date.now() - u >= 60000) {
      K("TIMEOUT", t.name, r);
      var p = r.pop();
      if (typeof p === "function") p.call(null, i);
    } else {
      var y = Date.now() - c,
        T = Math.max(c - u, 1),
        b = Math.min(T * 1.2, 100);
      if (y >= b) (K("RETRY", t.name, r), t.apply(null, r.concat([u])));
      else I[M].push(e);
    }
    if (ae === void 0) ae = setTimeout(Se, 0);
  }
});
var Qe = commonJS(function (tr, Ke) {
  function j(e, t) {
    if (typeof t === "boolean") t = { forever: t };
    if (
      ((this._originalTimeouts = JSON.parse(JSON.stringify(e))),
      (this._timeouts = e),
      (this._options = t || {}),
      (this._maxRetryTime = (t && t.maxRetryTime) || 1 / 0),
      (this._fn = null),
      (this._errors = []),
      (this._attempts = 1),
      (this._operationTimeout = null),
      (this._operationTimeoutCb = null),
      (this._timeout = null),
      (this._operationStart = null),
      this._options.forever)
    )
      this._cachedTimeouts = this._timeouts.slice(0);
  }
  Ke.exports = j;
  j.prototype.reset = function () {
    ((this._attempts = 1), (this._timeouts = this._originalTimeouts));
  };
  j.prototype.stop = function () {
    if (this._timeout) clearTimeout(this._timeout);
    ((this._timeouts = []), (this._cachedTimeouts = null));
  };
  j.prototype.retry = function (e) {
    if (this._timeout) clearTimeout(this._timeout);
    if (!e) return !1;
    var t = new Date().getTime();
    if (e && t - this._operationStart >= this._maxRetryTime)
      return (
        this._errors.unshift(Error("RetryOperation timeout occurred")),
        !1
      );
    this._errors.push(e);
    var r = this._timeouts.shift();
    if (r === void 0)
      if (this._cachedTimeouts)
        (this._errors.splice(this._errors.length - 1, this._errors.length),
          (this._timeouts = this._cachedTimeouts.slice(0)),
          (r = this._timeouts.shift()));
      else return !1;
    var i = this,
      u = setTimeout(function () {
        if ((i._attempts++, i._operationTimeoutCb)) {
          if (
            ((i._timeout = setTimeout(function () {
              i._operationTimeoutCb(i._attempts);
            }, i._operationTimeout)),
            i._options.unref)
          )
            i._timeout.unref();
        }
        i._fn(i._attempts);
      }, r);
    if (this._options.unref) u.unref();
    return !0;
  };
  j.prototype.attempt = function (e, t) {
    if (((this._fn = e), t)) {
      if (t.timeout) this._operationTimeout = t.timeout;
      if (t.cb) this._operationTimeoutCb = t.cb;
    }
    var r = this;
    if (this._operationTimeoutCb)
      this._timeout = setTimeout(function () {
        r._operationTimeoutCb();
      }, r._operationTimeout);
    ((this._operationStart = new Date().getTime()), this._fn(this._attempts));
  };
  j.prototype.try = function (e) {
    (console.log("Using RetryOperation.try() is deprecated"), this.attempt(e));
  };
  j.prototype.start = function (e) {
    (console.log("Using RetryOperation.start() is deprecated"),
      this.attempt(e));
  };
  j.prototype.start = j.prototype.try;
  j.prototype.errors = function () {
    return this._errors;
  };
  j.prototype.attempts = function () {
    return this._attempts;
  };
  j.prototype.mainError = function () {
    if (this._errors.length === 0) return null;
    var e = {},
      t = null,
      r = 0;
    for (var i = 0; i < this._errors.length; i++) {
      var u = this._errors[i],
        c = u.message,
        p = (e[c] || 0) + 1;
      if (((e[c] = p), p >= r)) ((t = u), (r = p));
    }
    return t;
  };
});
var ze = commonJS(function (wt) {
  var _t = Qe();
  wt.operation = function (e) {
    var t = wt.timeouts(e);
    return new _t(t, {
      forever: e && e.forever,
      unref: e && e.unref,
      maxRetryTime: e && e.maxRetryTime,
    });
  };
  wt.timeouts = function (e) {
    if (e instanceof Array) return [].concat(e);
    var t = {
      retries: 10,
      factor: 2,
      minTimeout: 1000,
      maxTimeout: 1 / 0,
      randomize: !1,
    };
    for (var r in e) t[r] = e[r];
    if (t.minTimeout > t.maxTimeout)
      throw Error("minTimeout is greater than maxTimeout");
    var i = [];
    for (var u = 0; u < t.retries; u++) i.push(this.createTimeout(u, t));
    if (e && e.forever && !i.length) i.push(this.createTimeout(u, t));
    return (
      i.sort(function (c, p) {
        return c - p;
      }),
      i
    );
  };
  wt.createTimeout = function (e, t) {
    var r = t.randomize ? Math.random() + 1 : 1,
      i = Math.round(r * t.minTimeout * Math.pow(t.factor, e));
    return ((i = Math.min(i, t.maxTimeout)), i);
  };
  wt.wrap = function (e, t, r) {
    if (t instanceof Array) ((r = t), (t = null));
    if (!r) {
      r = [];
      for (var i in e) if (typeof e[i] === "function") r.push(i);
    }
    for (var u = 0; u < r.length; u++) {
      var c = r[u],
        p = e[c];
      ((e[c] = function (T) {
        var b = wt.operation(t),
          o = Array.prototype.slice.call(arguments, 1),
          m = o.pop();
        (o.push(function (f) {
          if (b.retry(f)) return;
          if (f) arguments[0] = b.mainError();
          m.apply(this, arguments);
        }),
          b.attempt(function () {
            T.apply(e, o);
          }));
      }.bind(e, p)),
        (e[c].options = t));
    }
  };
});
var He = commonJS(function (nr, ge) {
  ge.exports = ["SIGABRT", "SIGALRM", "SIGHUP", "SIGINT", "SIGTERM"];
  ge.exports.push(
    "SIGVTALRM",
    "SIGXCPU",
    "SIGXFSZ",
    "SIGUSR2",
    "SIGTRAP",
    "SIGSYS",
    "SIGQUIT",
    "SIGIOT",
  );
});
var Ve = commonJS(function (ir, X) {
  var E = global.process,
    Q = function (e) {
      return (
        e &&
        typeof e === "object" &&
        typeof e.removeListener === "function" &&
        typeof e.emit === "function" &&
        typeof e.reallyExit === "function" &&
        typeof e.listeners === "function" &&
        typeof e.kill === "function" &&
        typeof e.pid === "number" &&
        typeof e.on === "function"
      );
    };
  if (!Q(E))
    X.exports = function () {
      return function () {};
    };
  else {
    if (
      ((Oe = importMetaRequire("assert")),
      (B = He()),
      (Ee = /^win/i.test(E.platform)),
      (V = importMetaRequire("events")),
      typeof V !== "function")
    )
      V = V.EventEmitter;
    if (E.__signal_exit_emitter__) F = E.__signal_exit_emitter__;
    else
      ((F = E.__signal_exit_emitter__ = new V()),
        (F.count = 0),
        (F.emitted = {}));
    if (!F.infinite) (F.setMaxListeners(1 / 0), (F.infinite = !0));
    ((X.exports = function (e, t) {
      if (!Q(global.process)) return function () {};
      if (
        (Oe.equal(
          typeof e,
          "function",
          "a callback must be provided for exit handler",
        ),
        z === !1)
      )
        le();
      var r = "exit";
      if (t && t.alwaysLast) r = "afterexit";
      var i = function () {
        if (
          (F.removeListener(r, e),
          F.listeners("exit").length === 0 &&
            F.listeners("afterexit").length === 0)
        )
          ee();
      };
      return (F.on(r, e), i);
    }),
      (ee = function () {
        if (!z || !Q(global.process)) return;
        ((z = !1),
          B.forEach(function (t) {
            try {
              E.removeListener(t, te[t]);
            } catch (r) {}
          }),
          (E.emit = re),
          (E.reallyExit = se),
          (F.count -= 1));
      }),
      (X.exports.unload = ee),
      (W = function (t, r, i) {
        if (F.emitted[t]) return;
        ((F.emitted[t] = !0), F.emit(t, r, i));
      }),
      (te = {}),
      B.forEach(function (e) {
        te[e] = function () {
          if (!Q(global.process)) return;
          var r = E.listeners(e);
          if (r.length === F.count) {
            if (
              (ee(),
              W("exit", null, e),
              W("afterexit", null, e),
              Ee && e === "SIGHUP")
            )
              e = "SIGINT";
            E.kill(E.pid, e);
          }
        };
      }),
      (X.exports.signals = function () {
        return B;
      }),
      (z = !1),
      (le = function () {
        if (z || !Q(global.process)) return;
        ((z = !0),
          (F.count += 1),
          (B = B.filter(function (t) {
            try {
              return (E.on(t, te[t]), !0);
            } catch (r) {
              return !1;
            }
          })),
          (E.emit = xe),
          (E.reallyExit = Te));
      }),
      (X.exports.load = le),
      (se = E.reallyExit),
      (Te = function (t) {
        if (!Q(global.process)) return;
        ((E.exitCode = t || 0),
          W("exit", E.exitCode, null),
          W("afterexit", E.exitCode, null),
          se.call(E, E.exitCode));
      }),
      (re = E.emit),
      (xe = function (t, r) {
        if (t === "exit" && Q(global.process)) {
          if (r !== void 0) E.exitCode = r;
          var i = re.apply(this, arguments);
          return (
            W("exit", E.exitCode, null),
            W("afterexit", E.exitCode, null),
            i
          );
        } else return re.apply(this, arguments);
      }));
  }
  var Oe, B, Ee, V, F, ee, W, te, z, le, se, Te, re, xe;
});
var Xe = commonJS(function (kt, Ie) {
  var ke = Symbol();
  function Tt(e, t, r) {
    let i = t[ke];
    if (i)
      return t.stat(e, (c, p) => {
        if (c) return r(c);
        r(null, p.mtime, i);
      });
    let u = new Date(Math.ceil(Date.now() / 1000) * 1000 + 5);
    t.utimes(e, u, u, (c) => {
      if (c) return r(c);
      t.stat(e, (p, y) => {
        if (p) return r(p);
        let T = y.mtime.getTime() % 1000 === 0 ? "s" : "ms";
        if (!(ke in t))
          try {
            Object.defineProperty(t, ke, { value: T, configurable: !0 });
          } catch {}
        r(null, y.mtime, T);
      });
    });
  }
  function xt(e) {
    let t = Date.now();
    if (e === "s") t = Math.ceil(t / 1000) * 1000;
    return new Date(t);
  }
  kt.probe = Tt;
  kt.getMtime = xt;
});
var rt = commonJS(function (Mt, ie) {
  var bt = importMetaRequire("path"),
    Fe = we(),
    Ft = ze(),
    Dt = Ve(),
    Je = Xe(),
    q = {};
  function ne(e, t) {
    return t.lockfilePath || `${e}.lock`;
  }
  function De(e, t, r) {
    if (!t.realpath) return r(null, bt.resolve(e));
    t.fs.realpath(e, r);
  }
  function be(e, t, r) {
    let i = ne(e, t);
    t.fs.mkdir(i, (u) => {
      if (!u)
        return Je.probe(i, t.fs, (c, p, y) => {
          if (c) return (t.fs.rmdir(i, () => {}), r(c));
          r(null, p, y);
        });
      if (u.code !== "EEXIST") return r(u);
      if (t.stale <= 0)
        return r(
          Object.assign(Error("Lock file is already being held"), {
            code: "ELOCKED",
            file: e,
          }),
        );
      t.fs.stat(i, (c, p) => {
        if (c) {
          if (c.code === "ENOENT") return be(e, { ...t, stale: 0 }, r);
          return r(c);
        }
        if (!Ze(p, t))
          return r(
            Object.assign(Error("Lock file is already being held"), {
              code: "ELOCKED",
              file: e,
            }),
          );
        et(e, t, (y) => {
          if (y) return r(y);
          be(e, { ...t, stale: 0 }, r);
        });
      });
    });
  }
  function Ze(e, t) {
    return e.mtime.getTime() < Date.now() - t.stale;
  }
  function et(e, t, r) {
    t.fs.rmdir(ne(e, t), (i) => {
      if (i && i.code !== "ENOENT") return r(i);
      r();
    });
  }
  function he(e, t) {
    let r = q[e];
    if (r.updateTimeout) return;
    if (
      ((r.updateDelay = r.updateDelay || t.update),
      (r.updateTimeout = setTimeout(() => {
        ((r.updateTimeout = null),
          t.fs.stat(r.lockfilePath, (i, u) => {
            let c = r.lastUpdate + t.stale < Date.now();
            if (i) {
              if (i.code === "ENOENT" || c)
                return Le(e, r, Object.assign(i, { code: "ECOMPROMISED" }));
              return ((r.updateDelay = 1000), he(e, t));
            }
            if (r.mtime.getTime() !== u.mtime.getTime())
              return Le(
                e,
                r,
                Object.assign(
                  Error("Unable to update lock within the stale threshold"),
                  { code: "ECOMPROMISED" },
                ),
              );
            let y = Je.getMtime(r.mtimePrecision);
            t.fs.utimes(r.lockfilePath, y, y, (T) => {
              let b = r.lastUpdate + t.stale < Date.now();
              if (r.released) return;
              if (T) {
                if (T.code === "ENOENT" || b)
                  return Le(e, r, Object.assign(T, { code: "ECOMPROMISED" }));
                return ((r.updateDelay = 1000), he(e, t));
              }
              ((r.mtime = y),
                (r.lastUpdate = Date.now()),
                (r.updateDelay = null),
                he(e, t));
            });
          }));
      }, r.updateDelay)),
      r.updateTimeout.unref)
    )
      r.updateTimeout.unref();
  }
  function Le(e, t, r) {
    if (((t.released = !0), t.updateTimeout)) clearTimeout(t.updateTimeout);
    if (q[e] === t) delete q[e];
    t.options.onCompromised(r);
  }
  function Nt(e, t, r) {
    ((t = {
      stale: 1e4,
      update: null,
      realpath: !0,
      retries: 0,
      fs: Fe,
      onCompromised: (i) => {
        throw i;
      },
      ...t,
    }),
      (t.retries = t.retries || 0),
      (t.retries =
        typeof t.retries === "number" ? { retries: t.retries } : t.retries),
      (t.stale = Math.max(t.stale || 0, 2000)),
      (t.update = t.update == null ? t.stale / 2 : t.update || 0),
      (t.update = Math.max(Math.min(t.update, t.stale / 2), 1000)),
      De(e, t, (i, u) => {
        if (i) return r(i);
        let c = Ft.operation(t.retries);
        c.attempt(() => {
          be(u, t, (p, y, T) => {
            if (c.retry(p)) return;
            if (p) return r(c.mainError());
            let b = (q[u] = {
              lockfilePath: ne(u, t),
              mtime: y,
              mtimePrecision: T,
              options: t,
              lastUpdate: Date.now(),
            });
            (he(u, t),
              r(null, (o) => {
                if (b.released)
                  return (
                    o &&
                    o(
                      Object.assign(Error("Lock is already released"), {
                        code: "ERELEASED",
                      }),
                    )
                  );
                tt(u, { ...t, realpath: !1 }, o);
              }));
          });
        });
      }));
  }
  function tt(e, t, r) {
    ((t = { fs: Fe, realpath: !0, ...t }),
      De(e, t, (i, u) => {
        if (i) return r(i);
        let c = q[u];
        if (!c)
          return r(
            Object.assign(Error("Lock is not acquired/owned by you"), {
              code: "ENOTACQUIRED",
            }),
          );
        (c.updateTimeout && clearTimeout(c.updateTimeout),
          (c.released = !0),
          delete q[u],
          et(u, t, r));
      }));
  }
  function Pt(e, t, r) {
    ((t = { stale: 1e4, realpath: !0, fs: Fe, ...t }),
      (t.stale = Math.max(t.stale || 0, 2000)),
      De(e, t, (i, u) => {
        if (i) return r(i);
        t.fs.stat(ne(u, t), (c, p) => {
          if (c) return c.code === "ENOENT" ? r(null, !1) : r(c);
          return r(null, !Ze(p, t));
        });
      }));
  }
  function Rt() {
    return q;
  }
  Dt(() => {
    for (let e in q) {
      let t = q[e].options;
      try {
        t.fs.rmdirSync(ne(e, t));
      } catch (r) {}
    }
  });
  Mt.lock = Nt;
  Mt.unlock = tt;
  Mt.check = Pt;
  Mt.getLocks = Rt;
});
var it = commonJS(function (or, nt) {
  var Ut = we();
  function At(e) {
    let t = ["mkdir", "realpath", "stat", "rmdir", "utimes"],
      r = { ...e };
    return (
      t.forEach((i) => {
        r[i] = (...u) => {
          let c = u.pop(),
            p;
          try {
            p = e[`${i}Sync`](...u);
          } catch (y) {
            return c(y);
          }
          c(null, p);
        };
      }),
      r
    );
  }
  function $t(e) {
    return (...t) =>
      new Promise((r, i) => {
        (t.push((u, c) => {
          if (u) i(u);
          else r(c);
        }),
          e(...t));
      });
  }
  function Wt(e) {
    return (...t) => {
      let r, i;
      if (
        (t.push((u, c) => {
          ((r = u), (i = c));
        }),
        e(...t),
        r)
      )
        throw r;
      return i;
    };
  }
  function Yt(e) {
    if (
      ((e = { ...e }),
      (e.fs = At(e.fs || Ut)),
      (typeof e.retries === "number" && e.retries > 0) ||
        (e.retries &&
          typeof e.retries.retries === "number" &&
          e.retries.retries > 0))
    )
      throw Object.assign(Error("Cannot use retries with the sync api"), {
        code: "ESYNC",
      });
    return e;
  }
  nt.exports = { toPromise: $t, toSync: Wt, toSyncOptions: Yt };
});
var ut = commonJS(function (ur, Y) {
  var J = rt(),
    { toPromise: pe, toSync: me, toSyncOptions: Ne } = it();
  async function ot(e, t) {
    let r = await pe(J.lock)(e, t);
    return pe(r);
  }
  function Kt(e, t) {
    let r = me(J.lock)(e, Ne(t));
    return me(r);
  }
  function Qt(e, t) {
    return pe(J.unlock)(e, t);
  }
  function Bt(e, t) {
    return me(J.unlock)(e, Ne(t));
  }
  function zt(e, t) {
    return pe(J.check)(e, t);
  }
  function Ht(e, t) {
    return me(J.check)(e, Ne(t));
  }
  Y.exports = ot;
  Y.exports.lock = ot;
  Y.exports.unlock = Qt;
  Y.exports.lockSync = Kt;
  Y.exports.unlockSync = Bt;
  Y.exports.check = zt;
  Y.exports.checkSync = Ht;
});
function ct() {
  return ut();
}
async function Cs(e, t) {
  let r = await ct().lock(e, t);
  return Object.assign(r, { [Symbol.asyncDispose]: r });
}
function Vlr(e, t) {
  return ct().check(e, t);
}
async function hf(e, t) {
  if (!e) return;
  try {
    await e();
  } catch (r) {
    let i;
    try {
      let u = A(r);
      i =
        u === "ERELEASED" || u === "ENOTACQUIRED"
          ? `lock was no longer held at release (${u}); the locked section may have run without exclusivity`
          : `lock directory could not be removed and is left to go stale: ${l(r)}`;
    } catch {
      i = "lock release rejected with a value that cannot be described";
    }
    logForDebugging(`${t}: ${i}`, { level: "warn" });
  }
}
export { Cs, Vlr, hf };

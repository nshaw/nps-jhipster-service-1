!(function(e) {
  function r(r) {
    for (var n, i, l = r[0], f = r[1], a = r[2], p = 0, s = []; p < l.length; p++)
      (i = l[p]), Object.prototype.hasOwnProperty.call(o, i) && o[i] && s.push(o[i][0]), (o[i] = 0);
    for (n in f) Object.prototype.hasOwnProperty.call(f, n) && (e[n] = f[n]);
    for (c && c(r); s.length; ) s.shift()();
    return u.push.apply(u, a || []), t();
  }
  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, l = 1; l < t.length; l++) {
        const f = t[l];
        o[f] !== 0 && (n = !1);
      }
      n && (u.splice(r--, 1), (e = i((i.s = t[0]))));
    }
    return e;
  }
  const n = {};
  var o = { 1: 0 };
  var u = [];
  function i(r) {
    if (n[r]) return n[r].exports;
    const t = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.m = e),
    (i.c = n),
    (i.d = function(e, r, t) {
      i.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });
    }),
    (i.r = function(e) {
      typeof Symbol !== 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function(e, r) {
      if ((1 & r && (e = i(e)), 8 & r)) return e;
      if (4 & r && typeof e === 'object' && e && e.__esModule) return e;
      const t = Object.create(null);
      if (
        (i.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & r && typeof e !== 'string')
      )
        for (const n in e)
          i.d(
            t,
            n,
            function(r) {
              return e[r];
            }.bind(null, n)
          );
      return t;
    }),
    (i.n = function(e) {
      const r =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(r, 'a', r), r;
    }),
    (i.o = function(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (i.p = '/');
  let l = (window['webpackJsonpconference-details-widget'] =
    window['webpackJsonpconference-details-widget'] || []);
  const f = l.push.bind(l);
  (l.push = r), (l = l.slice());
  for (let a = 0; a < l.length; a++) r(l[a]);
  var c = f;
  t();
})([]);
// # sourceMappingURL=runtime~main.ad29cb6e.js.map

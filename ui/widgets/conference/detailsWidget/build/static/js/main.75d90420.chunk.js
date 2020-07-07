(window['webpackJsonpconference-details-widget'] =
  window['webpackJsonpconference-details-widget'] || []).push([
  [0],
  {
    62(e) {
      e.exports = JSON.parse(
        '{"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data","widgetName":"Details about \'{{widgetNamePlaceholder}}\'","name":"Name","value":"Value","loading":"Loading...","notAuthenticated":"User is not authenticated."},"entities":{"conference":{"id":"ID","name":"entities.conference.name","location":"entities.conference.location"}}}'
      );
    },
    71(e, t, n) {
      e.exports = n(91);
    },
    72(e, t, n) {},
    91(e, t, n) {
      n.r(t);
      n(72);
      const a = n(27);
      const r = n(28);
      const c = n(35);
      const o = n(20);
      const i = n(29);
      const l = n(64);
      const s = n(24);
      const u = n(0);
      const f = n.n(u);
      const d = n(12);
      const p = n.n(d);
      const m = f.a.createContext(null);
      const b = n(16);
      const h = n.n(b);
      const O = n(31);
      const y = n(37);
      const v = n(23);
      const k = n(123);
      const w = n(63);
      const j = n(3);
      const E = n.n(j);
      const g = (E.a.shape({ initialized: E.a.bool, authenticated: E.a.bool }), n(65));
      E.a.oneOfType([E.a.func, E.a.shape({ current: E.a.elementType }), E.a.shape(null)]);
      const P = function(e) {
        const t = e.children;
        const n = e.keycloak;
        return n.initialized && n.authenticated ? t : null;
      };
      const D = function(e) {
        const t = e.children;
        const n = e.keycloak;
        return n.initialized && n.authenticated ? null : t;
      };
      const C = n(125);
      const N = (E.a.shape({ id: E.a.number, name: E.a.string, location: E.a.string }), n(117));
      const S = n(121);
      const x = n(120);
      const z = n(118);
      const R = n(119);
      const A = function(e) {
        const { t } = e;
        const n = e.conference;
        return f.a.createElement(
          N.a,
          null,
          f.a.createElement(
            z.a,
            null,
            f.a.createElement(
              R.a,
              null,
              f.a.createElement(x.a, null, t('common.name')),
              f.a.createElement(x.a, null, t('common.value'))
            )
          ),
          f.a.createElement(
            S.a,
            null,
            f.a.createElement(
              R.a,
              null,
              f.a.createElement(
                x.a,
                null,
                f.a.createElement('span', null, t('entities.conference.id'))
              ),
              f.a.createElement(x.a, null, f.a.createElement('span', null, n.id))
            ),
            f.a.createElement(
              R.a,
              null,
              f.a.createElement(
                x.a,
                null,
                f.a.createElement('span', null, t('entities.conference.name'))
              ),
              f.a.createElement(x.a, null, f.a.createElement('span', null, n.name))
            ),
            f.a.createElement(
              R.a,
              null,
              f.a.createElement(
                x.a,
                null,
                f.a.createElement('span', null, t('entities.conference.location'))
              ),
              f.a.createElement(x.a, null, f.a.createElement('span', null, n.location))
            )
          )
        );
      };
      A.defaultProps = { conference: [] };
      const F = Object(v.b)()(A);
      const T = function(e) {
        const { t } = e;
        const n = e.conference;
        return f.a.createElement(
          C.a,
          null,
          f.a.createElement(
            'h3',
            null,
            t('common.widgetName', { widgetNamePlaceholder: 'Conference' })
          ),
          f.a.createElement(F, { conference: n })
        );
      };
      T.defaultProps = { conference: {} };
      const U = Object(v.b)()(T);
      const M = n(4);
      const L = n(126);
      const I = n(128);
      const K = n(122);
      const H = n(5);
      const J = n(127);
      const V = n(59);
      const W = n.n(V);
      const B = n(60);
      const G = n.n(B);
      const q = n(58);
      const Q = n.n(q);
      const X = n(61);
      const Y = n.n(X);
      const Z = { success: Q.a, error: W.a, info: G.a };
      const $ = { success: 3e3, error: null, info: 5e3 };
      const _ = function e(t) {
        const n = t.className;
        const a = t.classes;
        const r = t.status;
        const c = t.message;
        const o = t.onClose;
        const i = !!c;
        const l = r || e.INFO;
        const s = Z[l];
        const u = $[l];
        const d = f.a.createElement(
          'span',
          { className: a.message },
          f.a.createElement(s, { className: Object(M.a)(a.icon, a.iconStatus) }),
          c
        );
        return f.a.createElement(
          L.a,
          { open: i, onClose: o, autoHideDuration: u },
          f.a.createElement(I.a, {
            className: Object(M.a)(a[l], n),
            message: d,
            action: [
              f.a.createElement(
                J.a,
                { key: 'close', 'aria-label': 'close', color: 'inherit', onClick: o },
                f.a.createElement(Y.a, { className: a.icon })
              ),
            ],
          })
        );
      };
      (_.SUCCESS = 'success'),
        (_.ERROR = 'error'),
        (_.defaultProps = {
          message: null,
          className: '',
          status: (_.INFO = 'info'),
          onClose() {},
        });
      const ee = Object(H.a)(
        function(e) {
          return {
            message: { display: 'flex', alignItems: 'center' },
            icon: { fontSize: 20 },
            iconStatus: { opacity: 0.9, marginRight: e.spacing(1) },
            success: { backgroundColor: K.a[600] },
            error: { backgroundColor: e.palette.error.dark },
            info: { backgroundColor: e.palette.primary.main },
          };
        },
        { withTheme: !0 }
      )(_);
      const te = (function() {
        const e = Object(O.a)(
          h.a.mark(function e(t, n) {
            let a;
            return h.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), fetch(t, n);
                  case 2:
                    if ((a = e.sent).status !== 204) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt('return', {});
                  case 5:
                    return e.abrupt(
                      'return',
                      a.status >= 200 && a.status < 300
                        ? a.json()
                        : Promise.reject(new Error(a.statusText || a.status))
                    );
                  case 6:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        );
        return function(t, n) {
          return e.apply(this, arguments);
        };
      })();
      function ne(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function ae(e) {
        for (let t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? ne(n, !0).forEach(function(t) {
                Object(s.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ne(n).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      const re = (function() {
        const e = Object(O.a)(
          h.a.mark(function e(t, n) {
            let a;
            let r;
            return h.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = ''
                        .concat(t, '/')
                        .concat('conferences', '/')
                        .concat(n)),
                      (r = ae(
                        {},
                        {
                          headers: new Headers({
                            Authorization: 'Bearer '.concat(
                              window &&
                                window.entando &&
                                window.entando.keycloak &&
                                window.entando.keycloak.authenticated
                                ? window.entando.keycloak.token
                                : ''
                            ),
                            'Content-Type': 'application/json',
                          }),
                        },
                        { method: 'GET' }
                      )),
                      e.abrupt('return', te(a, r))
                    );
                  case 3:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        );
        return function(t, n) {
          return e.apply(this, arguments);
        };
      })();
      const ce = (function(e) {
        function t(e) {
          let n;
          return (
            Object(a.a)(this, t),
            ((n = Object(c.a)(this, Object(o.a)(t).call(this, e))).state = {
              loading: !0,
              conference: {},
              notificationStatus: null,
              notificationMessage: null,
            }),
            (n.theme = Object(w.a)()),
            (n.closeNotification = n.closeNotification.bind(Object(y.a)(n))),
            (n.fetchData = n.fetchData.bind(Object(y.a)(n))),
            n
          );
        }
        return (
          Object(i.a)(t, e),
          Object(r.a)(t, [
            {
              key: 'componentDidMount',
              value() {
                const e = this.props.keycloak;
                e.initialized && e.authenticated && this.fetchData();
              },
            },
            {
              key: 'componentDidUpdate',
              value(e) {
                const t = this.props.keycloak;
                const n = t.initialized && t.authenticated;
                const a = e.keycloak.authenticated !== n;
                n && a && this.fetchData();
              },
            },
            {
              key: 'fetchData',
              value: (function() {
                const e = Object(O.a)(
                  h.a.mark(function e() {
                    let t;
                    let n;
                    let a;
                    let r;
                    let c;
                    return h.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = this.props),
                                (n = t.keycloak),
                                (a = t.id),
                                (r = t.serviceUrl),
                                !(n.initialized && n.authenticated) || !a)
                              ) {
                                e.next = 13;
                                break;
                              }
                              return (e.prev = 3), (e.next = 6), re(r, a);
                            case 6:
                              (c = e.sent),
                                this.setState(function() {
                                  return { conference: c, loading: !1 };
                                }),
                                (e.next = 13);
                              break;
                            case 10:
                              (e.prev = 10), (e.t0 = e.catch(3)), this.handleError(e.t0);
                            case 13:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[3, 10]]
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'handleError',
              value(e) {
                const t = this.props;
                const n = t.t;
                (0, t.onError)(e),
                  this.setState(function() {
                    return {
                      notificationMessage: n('common.couldNotFetchData'),
                      notificationStatus: ee.ERROR,
                      loading: !1,
                    };
                  });
              },
            },
            {
              key: 'closeNotification',
              value() {
                this.setState({ notificationMessage: null });
              },
            },
            {
              key: 'render',
              value() {
                const e = this.state;
                const t = e.conference;
                const n = e.notificationStatus;
                const a = e.notificationMessage;
                const r = e.loading;
                const c = this.props;
                const o = c.t;
                const i = c.keycloak;
                return f.a.createElement(
                  k.a,
                  { theme: this.theme },
                  f.a.createElement(D, { keycloak: i }, o('common.notAuthenticated')),
                  f.a.createElement(
                    P,
                    { keycloak: i },
                    r && o('common.loading'),
                    !r && f.a.createElement(U, { conference: t })
                  ),
                  f.a.createElement(ee, {
                    status: n,
                    message: a,
                    onClose: this.closeNotification,
                  })
                );
              },
            },
          ]),
          t
        );
      })(f.a.Component);
      ce.defaultProps = { onError() {}, serviceUrl: '' };
      const oe = (function(e) {
        const t = (function(t) {
          function n() {
            let t;
            let r;
            Object(a.a)(this, n);
            for (var i = arguments.length, l = new Array(i), s = 0; s < i; s++) l[s] = arguments[s];
            return (
              ((r = Object(c.a)(
                this,
                (t = Object(o.a)(n)).call.apply(t, [this].concat(l))
              )).renderWrappedComponent = function(t) {
                const n = r.props;
                const a = n.forwardedRef;
                const c = Object(g.a)(n, ['forwardedRef']);
                return f.a.createElement(e, { ...c, ref: a, keycloak: t });
              }),
              r
            );
          }
          return (
            Object(i.a)(n, t),
            Object(r.a)(n, [
              {
                key: 'render',
                value() {
                  return f.a.createElement(m.Consumer, null, this.renderWrappedComponent);
                },
              },
            ]),
            n
          );
        })(u.Component);
        return (
          (t.defaultProps = { forwardedRef() {} }),
          Object(u.forwardRef)(function(e, n) {
            return f.a.createElement(t, { ...e, forwardedRef: n });
          })
        );
      })(Object(v.b)()(ce));
      const ie = n(49);
      const le = { en: n(62) };
      function se(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      const ue = Object.keys(le).reduce(function(e, t) {
        return (function(e) {
          for (let t = 1; t < arguments.length; t++) {
            var n = arguments[t] != null ? arguments[t] : {};
            t % 2
              ? se(n, !0).forEach(function(t) {
                  Object(s.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : se(n).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, e, Object(s.a)({}, t, Object(s.a)({}, 'translation', le[t])));
      }, {});
      const fe =
        (ie.a.t,
        function(e) {
          !(function(e, t) {
            ie.a.use(v.a).init({
              defaultNs: 'translation',
              interpolation: { escapeValue: !1 },
              resources: ue,
              lng: e || t,
              fallbackLng: t,
              react: { useSuspense: !1 },
            });
          })(e, 'en');
        });
      function de(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function pe(e) {
        for (let t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? de(n, !0).forEach(function(t) {
                Object(s.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : de(n).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      const me = function() {
        return (
          (window &&
            window.entando &&
            window.entando.keycloak &&
            pe({}, window.entando.keycloak, { initialized: !0 })) || { initialized: !1 }
        );
      };
      const be = 'service-url';
      const he = 'locale';
      const Oe = (function(e) {
        function t() {
          let e;
          let n;
          Object(a.a)(this, t);
          for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l];
          return (
            ((n = Object(c.a)(
              this,
              (e = Object(o.a)(t)).call.apply(e, [this].concat(i))
            )).mountPoint = null),
            (n.unsubscribeFromKeycloakEvent = null),
            (n.keycloak = me()),
            n
          );
        }
        return (
          Object(i.a)(t, e),
          Object(r.a)(t, [
            {
              key: 'connectedCallback',
              value() {
                let e;
                let t;
                const n = this;
                (this.mountPoint = document.createElement('div')),
                  this.appendChild(this.mountPoint),
                  (this.keycloak = pe({}, me(), { initialized: !0 })),
                  (this.unsubscribeFromKeycloakEvent =
                    ((e = 'keycloak'),
                    (t = function() {
                      (n.keycloak = pe({}, me(), { initialized: !0 })), n.render();
                    }),
                    window.addEventListener(e, t),
                    function() {
                      window.removeEventListener(e, t);
                    })),
                  this.render();
              },
            },
            {
              key: 'render',
              value() {
                const e = this;
                const t = this.getAttribute(be) || '';
                const n = this.getAttribute(he);
                fe(n);
                const a = this.getAttribute('id');
                const r = f.a.createElement(oe, {
                  id: a,
                  onError(t) {
                    const n = new CustomEvent(''.concat('conference.details.', 'error'), {
                      details: { error: t },
                    });
                    e.dispatchEvent(n);
                  },
                  serviceUrl: t,
                });
                p.a.render(
                  f.a.createElement(m.Provider, { value: this.keycloak }, r),
                  this.mountPoint
                );
              },
            },
            {
              key: 'disconnectedCallback',
              value() {
                this.unsubscribeFromKeycloakEvent && this.unsubscribeFromKeycloakEvent();
              },
            },
          ]),
          t
        );
      })(Object(l.a)(HTMLElement));
      customElements.define('conference-details', Oe);
    },
  },
  [[71, 1, 2]],
]);
// # sourceMappingURL=main.75d90420.chunk.js.map

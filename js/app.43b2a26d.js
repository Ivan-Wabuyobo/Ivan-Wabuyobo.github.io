(function () {
  "use strict";
  var n = {
      4089: function (n, o, t) {
        var e = t(5130),
          r = t(6768);
        const i = { id: "id" },
          u = (0, r.Lk)("h2", null, "Add to do list", -1),
          l = (0, r.Lk)("h2", null, "To do List", -1);
        function a(n, o, t, e, a, d) {
          const c = (0, r.g2)("ToDoForm"),
            f = (0, r.g2)("ToDoItem");
          return (
            (0, r.uX)(),
            (0, r.CE)("div", i, [
              u,
              (0, r.bF)(c),
              l,
              ((0, r.uX)(!0),
              (0, r.CE)(
                r.FK,
                null,
                (0, r.pI)(
                  a.toDoItems,
                  (n) => (
                    (0, r.uX)(),
                    (0, r.CE)("span", { key: n.id }, [
                      (0, r.bF)(f, { label: n.label, done: n.done }, null, 8, [
                        "label",
                        "done",
                      ]),
                    ])
                  )
                ),
                128
              )),
            ])
          );
        }
        var d = t(4232);
        const c = ["id", "checked"],
          f = ["for"];
        function s(n, o, t, e, i, u) {
          return (
            (0, r.uX)(),
            (0, r.CE)("div", null, [
              (0, r.Lk)("li", null, [
                (0, r.Lk)(
                  "input",
                  {
                    type: "checkbox",
                    name: "checkbox",
                    id: i.id,
                    checked: t.done,
                  },
                  null,
                  8,
                  c
                ),
                (0, r.Lk)("label", { for: i.id }, (0, d.v_)(t.label), 9, f),
              ]),
            ])
          );
        }
        var p = t(3165),
          b = t.n(p),
          h = {
            props: {
              done: { default: !1, type: Boolean },
              label: { required: !1, type: String },
            },
            data() {
              return { isDone: this.done, id: b()("todo-") };
            },
          },
          m = t(1241);
        const v = (0, m.A)(h, [["render", s]]);
        var k = v;
        const g = (0, r.Lk)("label", { for: "to-do-input" }, "Add task", -1),
          y = (0, r.Lk)("button", { type: "submit" }, "Add", -1);
        function O(n, o, t, i, u, l) {
          return (
            (0, r.uX)(),
            (0, r.CE)(
              "form",
              {
                action: "",
                onSubmit:
                  o[1] ||
                  (o[1] = (0, e.D$)(
                    (...n) => l.onSubmit && l.onSubmit(...n),
                    ["prevent"]
                  )),
              },
              [
                (0, r.bo)(
                  (0, r.Lk)(
                    "input",
                    {
                      type: "text",
                      id: "to-do-input",
                      name: "new-to-do",
                      autocomplete: "off",
                      "onUpdate:modelValue":
                        o[0] || (o[0] = (n) => (u.label = n)),
                    },
                    null,
                    512
                  ),
                  [[e.Jo, u.label]]
                ),
                g,
                y,
              ],
              32
            )
          );
        }
        var w = {
          data() {
            return { label: "Hello" };
          },
          methods: {
            onSubmit() {
              console.log(this.label);
            },
          },
        };
        const L = (0, m.A)(w, [["render", O]]);
        var j = L,
          x = {
            name: "App",
            components: { ToDoItem: k, ToDoForm: j },
            data() {
              return {
                toDoItems: [
                  {
                    id: b()("todo-"),
                    label: "Wash clothes in the morning",
                    done: !0,
                  },
                  {
                    id: b()("todo-"),
                    label: "Wash clothes in the morning",
                    done: !0,
                  },
                  { id: b()("todo-"), label: "Practice Vue js", done: !1 },
                  {
                    id: b()("todo-"),
                    label: "Implement a pos project",
                    done: !0,
                  },
                ],
              };
            },
          };
        const D = (0, m.A)(x, [["render", a]]);
        var A = D;
        (0, e.Ef)(A).mount("#app");
      },
    },
    o = {};
  function t(e) {
    var r = o[e];
    if (void 0 !== r) return r.exports;
    var i = (o[e] = { exports: {} });
    return n[e].call(i.exports, i, i.exports, t), i.exports;
  }
  (t.m = n),
    (function () {
      var n = [];
      t.O = function (o, e, r, i) {
        if (!e) {
          var u = 1 / 0;
          for (c = 0; c < n.length; c++) {
            (e = n[c][0]), (r = n[c][1]), (i = n[c][2]);
            for (var l = !0, a = 0; a < e.length; a++)
              (!1 & i || u >= i) &&
              Object.keys(t.O).every(function (n) {
                return t.O[n](e[a]);
              })
                ? e.splice(a--, 1)
                : ((l = !1), i < u && (u = i));
            if (l) {
              n.splice(c--, 1);
              var d = r();
              void 0 !== d && (o = d);
            }
          }
          return o;
        }
        i = i || 0;
        for (var c = n.length; c > 0 && n[c - 1][2] > i; c--) n[c] = n[c - 1];
        n[c] = [e, r, i];
      };
    })(),
    (function () {
      t.n = function (n) {
        var o =
          n && n.__esModule
            ? function () {
                return n["default"];
              }
            : function () {
                return n;
              };
        return t.d(o, { a: o }), o;
      };
    })(),
    (function () {
      t.d = function (n, o) {
        for (var e in o)
          t.o(o, e) &&
            !t.o(n, e) &&
            Object.defineProperty(n, e, { enumerable: !0, get: o[e] });
      };
    })(),
    (function () {
      t.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (n) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      t.o = function (n, o) {
        return Object.prototype.hasOwnProperty.call(n, o);
      };
    })(),
    (function () {
      var n = { 524: 0 };
      t.O.j = function (o) {
        return 0 === n[o];
      };
      var o = function (o, e) {
          var r,
            i,
            u = e[0],
            l = e[1],
            a = e[2],
            d = 0;
          if (
            u.some(function (o) {
              return 0 !== n[o];
            })
          ) {
            for (r in l) t.o(l, r) && (t.m[r] = l[r]);
            if (a) var c = a(t);
          }
          for (o && o(e); d < u.length; d++)
            (i = u[d]), t.o(n, i) && n[i] && n[i][0](), (n[i] = 0);
          return t.O(c);
        },
        e = (self["webpackChunkmz_todo"] = self["webpackChunkmz_todo"] || []);
      e.forEach(o.bind(null, 0)), (e.push = o.bind(null, e.push.bind(e)));
    })();
  var e = t.O(void 0, [504], function () {
    return t(4089);
  });
  e = t.O(e);
})();
//# sourceMappingURL=app.43b2a26d.js.map

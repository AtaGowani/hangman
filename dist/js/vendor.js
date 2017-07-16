!function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
    }
    var n = {};
    e.m = t, e.c = n, e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        });
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return e.d(n, "a", n), n;
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 3);
}([ , , , function(t, e, n) {
    t.exports = n(4);
}, function(t, e, n) {
    "use strict";
    window.jQuery = n(5), window.Tether = window.tether = n(6), n(7), n(8);
}, function(t, e, n) {
    var r, i;
    /*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
    !function(e, n) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t);
        } : n(e);
    }("undefined" != typeof window ? window : this, function(n, o) {
        "use strict";
        function a(t, e) {
            e = e || at;
            var n = e.createElement("script");
            n.text = t, e.head.appendChild(n).parentNode.removeChild(n);
        }
        function s(t) {
            var e = !!t && "length" in t && t.length, n = $t.type(t);
            return "function" !== n && !$t.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
        }
        function u(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        }
        function l(t, e, n) {
            return $t.isFunction(e) ? $t.grep(t, function(t, r) {
                return !!e.call(t, r, t) !== n;
            }) : e.nodeType ? $t.grep(t, function(t) {
                return t === e !== n;
            }) : "string" != typeof e ? $t.grep(t, function(t) {
                return ft.call(e, t) > -1 !== n;
            }) : At.test(e) ? $t.filter(e, t, n) : (e = $t.filter(e, t), $t.grep(t, function(t) {
                return ft.call(e, t) > -1 !== n && 1 === t.nodeType;
            }));
        }
        function c(t, e) {
            for (;(t = t[e]) && 1 !== t.nodeType; ) ;
            return t;
        }
        function f(t) {
            var e = {};
            return $t.each(t.match(Nt) || [], function(t, n) {
                e[n] = !0;
            }), e;
        }
        function h(t) {
            return t;
        }
        function d(t) {
            throw t;
        }
        function p(t, e, n, r) {
            var i;
            try {
                t && $t.isFunction(i = t.promise) ? i.call(t).done(e).fail(n) : t && $t.isFunction(i = t.then) ? i.call(t, e, n) : e.apply(void 0, [ t ].slice(r));
            } catch (t) {
                n.apply(void 0, [ t ]);
            }
        }
        function g() {
            at.removeEventListener("DOMContentLoaded", g), n.removeEventListener("load", g), 
            $t.ready();
        }
        function m() {
            this.expando = $t.expando + m.uid++;
        }
        function v(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Ht.test(t) ? JSON.parse(t) : t);
        }
        function $(t, e, n) {
            var r;
            if (void 0 === n && 1 === t.nodeType) if (r = "data-" + e.replace(Ft, "-$&").toLowerCase(), 
            "string" == typeof (n = t.getAttribute(r))) {
                try {
                    n = v(n);
                } catch (t) {}
                Rt.set(t, e, n);
            } else n = void 0;
            return n;
        }
        function y(t, e, n, r) {
            var i, o = 1, a = 20, s = r ? function() {
                return r.cur();
            } : function() {
                return $t.css(t, e, "");
            }, u = s(), l = n && n[3] || ($t.cssNumber[e] ? "" : "px"), c = ($t.cssNumber[e] || "px" !== l && +u) && Ut.exec($t.css(t, e));
            if (c && c[3] !== l) {
                l = l || c[3], n = n || [], c = +u || 1;
                do {
                    o = o || ".5", c /= o, $t.style(t, e, c + l);
                } while (o !== (o = s() / u) && 1 !== o && --a);
            }
            return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
            r.start = c, r.end = i)), i;
        }
        function b(t) {
            var e, n = t.ownerDocument, r = t.nodeName, i = Gt[r];
            return i || (e = n.body.appendChild(n.createElement(r)), i = $t.css(e, "display"), 
            e.parentNode.removeChild(e), "none" === i && (i = "block"), Gt[r] = i, i);
        }
        function w(t, e) {
            for (var n, r, i = [], o = 0, a = t.length; o < a; o++) r = t[o], r.style && (n = r.style.display, 
            e ? ("none" === n && (i[o] = Vt.get(r, "display") || null, i[o] || (r.style.display = "")), 
            "" === r.style.display && Bt(r) && (i[o] = b(r))) : "none" !== n && (i[o] = "none", 
            Vt.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (t[o].style.display = i[o]);
            return t;
        }
        function E(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], 
            void 0 === e || e && u(t, e) ? $t.merge([ t ], n) : n;
        }
        function x(t, e) {
            for (var n = 0, r = t.length; n < r; n++) Vt.set(t[n], "globalEval", !e || Vt.get(e[n], "globalEval"));
        }
        function C(t, e, n, r, i) {
            for (var o, a, s, u, l, c, f = e.createDocumentFragment(), h = [], d = 0, p = t.length; d < p; d++) if ((o = t[d]) || 0 === o) if ("object" === $t.type(o)) $t.merge(h, o.nodeType ? [ o ] : o); else if (Jt.test(o)) {
                for (a = a || f.appendChild(e.createElement("div")), s = (Qt.exec(o) || [ "", "" ])[1].toLowerCase(), 
                u = Xt[s] || Xt._default, a.innerHTML = u[1] + $t.htmlPrefilter(o) + u[2], c = u[0]; c--; ) a = a.lastChild;
                $t.merge(h, a.childNodes), a = f.firstChild, a.textContent = "";
            } else h.push(e.createTextNode(o));
            for (f.textContent = "", d = 0; o = h[d++]; ) if (r && $t.inArray(o, r) > -1) i && i.push(o); else if (l = $t.contains(o.ownerDocument, o), 
            a = E(f.appendChild(o), "script"), l && x(a), n) for (c = 0; o = a[c++]; ) Yt.test(o.type || "") && n.push(o);
            return f;
        }
        function _() {
            return !0;
        }
        function T() {
            return !1;
        }
        function S() {
            try {
                return at.activeElement;
            } catch (t) {}
        }
        function A(t, e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = void 0);
                for (s in e) A(t, s, n, r, e[s], o);
                return t;
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
            r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = T; else if (!i) return t;
            return 1 === o && (a = i, i = function(t) {
                return $t().off(t), a.apply(this, arguments);
            }, i.guid = a.guid || (a.guid = $t.guid++)), t.each(function() {
                $t.event.add(this, e, i, r, n);
            });
        }
        function O(t, e) {
            return u(t, "table") && u(11 !== e.nodeType ? e : e.firstChild, "tr") ? $t(">tbody", t)[0] || t : t;
        }
        function k(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
        }
        function D(t) {
            var e = ae.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t;
        }
        function I(t, e) {
            var n, r, i, o, a, s, u, l;
            if (1 === e.nodeType) {
                if (Vt.hasData(t) && (o = Vt.access(t), a = Vt.set(e, o), l = o.events)) {
                    delete a.handle, a.events = {};
                    for (i in l) for (n = 0, r = l[i].length; n < r; n++) $t.event.add(e, i, l[i][n]);
                }
                Rt.hasData(t) && (s = Rt.access(t), u = $t.extend({}, s), Rt.set(e, u));
            }
        }
        function N(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Kt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue);
        }
        function M(t, e, n, r) {
            e = lt.apply([], e);
            var i, o, s, u, l, c, f = 0, h = t.length, d = h - 1, p = e[0], g = $t.isFunction(p);
            if (g || h > 1 && "string" == typeof p && !vt.checkClone && oe.test(p)) return t.each(function(i) {
                var o = t.eq(i);
                g && (e[0] = p.call(this, i, o.html())), M(o, e, n, r);
            });
            if (h && (i = C(e, t[0].ownerDocument, !1, t, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), 
            o || r)) {
                for (s = $t.map(E(i, "script"), k), u = s.length; f < h; f++) l = i, f !== d && (l = $t.clone(l, !0, !0), 
                u && $t.merge(s, E(l, "script"))), n.call(t[f], l, f);
                if (u) for (c = s[s.length - 1].ownerDocument, $t.map(s, D), f = 0; f < u; f++) l = s[f], 
                Yt.test(l.type || "") && !Vt.access(l, "globalEval") && $t.contains(c, l) && (l.src ? $t._evalUrl && $t._evalUrl(l.src) : a(l.textContent.replace(se, ""), c));
            }
            return t;
        }
        function j(t, e, n) {
            for (var r, i = e ? $t.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || $t.cleanData(E(r)), 
            r.parentNode && (n && $t.contains(r.ownerDocument, r) && x(E(r, "script")), r.parentNode.removeChild(r));
            return t;
        }
        function L(t, e, n) {
            var r, i, o, a, s = t.style;
            return n = n || ce(t), n && (a = n.getPropertyValue(e) || n[e], "" !== a || $t.contains(t.ownerDocument, t) || (a = $t.style(t, e)), 
            !vt.pixelMarginRight() && le.test(a) && ue.test(e) && (r = s.width, i = s.minWidth, 
            o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
            s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
        }
        function P(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments);
                }
            };
        }
        function V(t) {
            if (t in me) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = ge.length; n--; ) if ((t = ge[n] + e) in me) return t;
        }
        function R(t) {
            var e = $t.cssProps[t];
            return e || (e = $t.cssProps[t] = V(t) || t), e;
        }
        function H(t, e, n) {
            var r = Ut.exec(e);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e;
        }
        function F(t, e, n, r, i) {
            var o, a = 0;
            for (o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2) "margin" === n && (a += $t.css(t, n + qt[o], !0, i)), 
            r ? ("content" === n && (a -= $t.css(t, "padding" + qt[o], !0, i)), "margin" !== n && (a -= $t.css(t, "border" + qt[o] + "Width", !0, i))) : (a += $t.css(t, "padding" + qt[o], !0, i), 
            "padding" !== n && (a += $t.css(t, "border" + qt[o] + "Width", !0, i)));
            return a;
        }
        function W(t, e, n) {
            var r, i = ce(t), o = L(t, e, i), a = "border-box" === $t.css(t, "boxSizing", !1, i);
            return le.test(o) ? o : (r = a && (vt.boxSizingReliable() || o === t.style[e]), 
            "auto" === o && (o = t["offset" + e[0].toUpperCase() + e.slice(1)]), (o = parseFloat(o) || 0) + F(t, e, n || (a ? "border" : "content"), r, i) + "px");
        }
        function U(t, e, n, r, i) {
            return new U.prototype.init(t, e, n, r, i);
        }
        function q() {
            $e && (!1 === at.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(q) : n.setTimeout(q, $t.fx.interval), 
            $t.fx.tick());
        }
        function B() {
            return n.setTimeout(function() {
                ve = void 0;
            }), ve = $t.now();
        }
        function z(t, e) {
            var n, r = 0, i = {
                height: t
            };
            for (e = e ? 1 : 0; r < 4; r += 2 - e) n = qt[r], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i;
        }
        function G(t, e, n) {
            for (var r, i = (Y.tweeners[e] || []).concat(Y.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, e, t)) return r;
        }
        function K(t, e, n) {
            var r, i, o, a, s, u, l, c, f = "width" in e || "height" in e, h = this, d = {}, p = t.style, g = t.nodeType && Bt(t), m = Vt.get(t, "fxshow");
            n.queue || (a = $t._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, 
            s = a.empty.fire, a.empty.fire = function() {
                a.unqueued || s();
            }), a.unqueued++, h.always(function() {
                h.always(function() {
                    a.unqueued--, $t.queue(t, "fx").length || a.empty.fire();
                });
            }));
            for (r in e) if (i = e[r], ye.test(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    g = !0;
                }
                d[r] = m && m[r] || $t.style(t, r);
            }
            if ((u = !$t.isEmptyObject(e)) || !$t.isEmptyObject(d)) {
                f && 1 === t.nodeType && (n.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
                l = m && m.display, null == l && (l = Vt.get(t, "display")), c = $t.css(t, "display"), 
                "none" === c && (l ? c = l : (w([ t ], !0), l = t.style.display || l, c = $t.css(t, "display"), 
                w([ t ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === $t.css(t, "float") && (u || (h.done(function() {
                    p.display = l;
                }), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block")), 
                n.overflow && (p.overflow = "hidden", h.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
                })), u = !1;
                for (r in d) u || (m ? "hidden" in m && (g = m.hidden) : m = Vt.access(t, "fxshow", {
                    display: l
                }), o && (m.hidden = !g), g && w([ t ], !0), h.done(function() {
                    g || w([ t ]), Vt.remove(t, "fxshow");
                    for (r in d) $t.style(t, r, d[r]);
                })), u = G(g ? m[r] : 0, r, h), r in m || (m[r] = u.start, g && (u.end = u.start, 
                u.start = 0));
            }
        }
        function Q(t, e) {
            var n, r, i, o, a;
            for (n in t) if (r = $t.camelCase(n), i = e[r], o = t[n], Array.isArray(o) && (i = o[1], 
            o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), (a = $t.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete t[r];
                for (n in o) n in t || (t[n] = o[n], e[n] = i);
            } else e[r] = i;
        }
        function Y(t, e, n) {
            var r, i, o = 0, a = Y.prefilters.length, s = $t.Deferred().always(function() {
                delete u.elem;
            }), u = function() {
                if (i) return !1;
                for (var e = ve || B(), n = Math.max(0, l.startTime + l.duration - e), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(o);
                return s.notifyWith(t, [ l, o, n ]), o < 1 && u ? n : (u || s.notifyWith(t, [ l, 1, 0 ]), 
                s.resolveWith(t, [ l ]), !1);
            }, l = s.promise({
                elem: t,
                props: $t.extend({}, e),
                opts: $t.extend(!0, {
                    specialEasing: {},
                    easing: $t.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ve || B(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var r = $t.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(r), r;
                },
                stop: function(e) {
                    var n = 0, r = e ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return e ? (s.notifyWith(t, [ l, 1, 0 ]), s.resolveWith(t, [ l, e ])) : s.rejectWith(t, [ l, e ]), 
                    this;
                }
            }), c = l.props;
            for (Q(c, l.opts.specialEasing); o < a; o++) if (r = Y.prefilters[o].call(l, t, c, l.opts)) return $t.isFunction(r.stop) && ($t._queueHooks(l.elem, l.opts.queue).stop = $t.proxy(r.stop, r)), 
            r;
            return $t.map(c, G, l), $t.isFunction(l.opts.start) && l.opts.start.call(t, l), 
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), 
            $t.fx.timer($t.extend(u, {
                elem: t,
                anim: l,
                queue: l.opts.queue
            })), l;
        }
        function X(t) {
            return (t.match(Nt) || []).join(" ");
        }
        function J(t) {
            return t.getAttribute && t.getAttribute("class") || "";
        }
        function Z(t, e, n, r) {
            var i;
            if (Array.isArray(e)) $t.each(e, function(e, i) {
                n || ke.test(t) ? r(t, i) : Z(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r);
            }); else if (n || "object" !== $t.type(e)) r(t, e); else for (i in e) Z(t + "[" + i + "]", e[i], n, r);
        }
        function tt(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var r, i = 0, o = e.toLowerCase().match(Nt) || [];
                if ($t.isFunction(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", 
                (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n);
            };
        }
        function et(t, e, n, r) {
            function i(s) {
                var u;
                return o[s] = !0, $t.each(t[s] || [], function(t, s) {
                    var l = s(e, n, r);
                    return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (e.dataTypes.unshift(l), 
                    i(l), !1);
                }), u;
            }
            var o = {}, a = t === We;
            return i(e.dataTypes[0]) || !o["*"] && i("*");
        }
        function nt(t, e) {
            var n, r, i = $t.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
            return r && $t.extend(!0, t, r), t;
        }
        function rt(t, e, n) {
            for (var r, i, o, a, s = t.contents, u = t.dataTypes; "*" === u[0]; ) u.shift(), 
            void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r) for (i in s) if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break;
            }
            if (u[0] in n) o = u[0]; else {
                for (i in n) {
                    if (!u[0] || t.converters[i + " " + u[0]]) {
                        o = i;
                        break;
                    }
                    a || (a = i);
                }
                o = o || a;
            }
            if (o) return o !== u[0] && u.unshift(o), n[o];
        }
        function it(t, e, n, r) {
            var i, o, a, s, u, l = {}, c = t.dataTypes.slice();
            if (c[1]) for (a in t.converters) l[a.toLowerCase()] = t.converters[a];
            for (o = c.shift(); o; ) if (t.responseFields[o] && (n[t.responseFields[o]] = e), 
            !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                    break;
                }
                if (!0 !== a) if (a && t.throws) e = a(e); else try {
                    e = a(e);
                } catch (t) {
                    return {
                        state: "parsererror",
                        error: a ? t : "No conversion from " + u + " to " + o
                    };
                }
            }
            return {
                state: "success",
                data: e
            };
        }
        var ot = [], at = n.document, st = Object.getPrototypeOf, ut = ot.slice, lt = ot.concat, ct = ot.push, ft = ot.indexOf, ht = {}, dt = ht.toString, pt = ht.hasOwnProperty, gt = pt.toString, mt = gt.call(Object), vt = {}, $t = function(t, e) {
            return new $t.fn.init(t, e);
        }, yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, bt = /^-ms-/, wt = /-([a-z])/g, Et = function(t, e) {
            return e.toUpperCase();
        };
        $t.fn = $t.prototype = {
            jquery: "3.2.1",
            constructor: $t,
            length: 0,
            toArray: function() {
                return ut.call(this);
            },
            get: function(t) {
                return null == t ? ut.call(this) : t < 0 ? this[t + this.length] : this[t];
            },
            pushStack: function(t) {
                var e = $t.merge(this.constructor(), t);
                return e.prevObject = this, e;
            },
            each: function(t) {
                return $t.each(this, t);
            },
            map: function(t) {
                return this.pushStack($t.map(this, function(e, n) {
                    return t.call(e, n, e);
                }));
            },
            slice: function() {
                return this.pushStack(ut.apply(this, arguments));
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            eq: function(t) {
                var e = this.length, n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [ this[n] ] : []);
            },
            end: function() {
                return this.prevObject || this.constructor();
            },
            push: ct,
            sort: ot.sort,
            splice: ot.splice
        }, $t.extend = $t.fn.extend = function() {
            var t, e, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || $t.isFunction(a) || (a = {}), 
            s === u && (a = this, s--); s < u; s++) if (null != (t = arguments[s])) for (e in t) n = a[e], 
            r = t[e], a !== r && (l && r && ($t.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, 
            o = n && Array.isArray(n) ? n : []) : o = n && $t.isPlainObject(n) ? n : {}, a[e] = $t.extend(l, o, r)) : void 0 !== r && (a[e] = r));
            return a;
        }, $t.extend({
            expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t);
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === $t.type(t);
            },
            isWindow: function(t) {
                return null != t && t === t.window;
            },
            isNumeric: function(t) {
                var e = $t.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
            },
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== dt.call(t)) && (!(e = st(t)) || "function" == typeof (n = pt.call(e, "constructor") && e.constructor) && gt.call(n) === mt);
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0;
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ht[dt.call(t)] || "object" : typeof t;
            },
            globalEval: function(t) {
                a(t);
            },
            camelCase: function(t) {
                return t.replace(bt, "ms-").replace(wt, Et);
            },
            each: function(t, e) {
                var n, r = 0;
                if (s(t)) for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++) ; else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
                return t;
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(yt, "");
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (s(Object(t)) ? $t.merge(n, "string" == typeof t ? [ t ] : t) : ct.call(n, t)), 
                n;
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : ft.call(e, t, n);
            },
            merge: function(t, e) {
                for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
                return t.length = i, t;
            },
            grep: function(t, e, n) {
                for (var r = [], i = 0, o = t.length, a = !n; i < o; i++) !e(t[i], i) !== a && r.push(t[i]);
                return r;
            },
            map: function(t, e, n) {
                var r, i, o = 0, a = [];
                if (s(t)) for (r = t.length; o < r; o++) null != (i = e(t[o], o, n)) && a.push(i); else for (o in t) null != (i = e(t[o], o, n)) && a.push(i);
                return lt.apply([], a);
            },
            guid: 1,
            proxy: function(t, e) {
                var n, r, i;
                if ("string" == typeof e && (n = t[e], e = t, t = n), $t.isFunction(t)) return r = ut.call(arguments, 2), 
                i = function() {
                    return t.apply(e || this, r.concat(ut.call(arguments)));
                }, i.guid = t.guid = t.guid || $t.guid++, i;
            },
            now: Date.now,
            support: vt
        }), "function" == typeof Symbol && ($t.fn[Symbol.iterator] = ot[Symbol.iterator]), 
        $t.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            ht["[object " + e + "]"] = e.toLowerCase();
        });
        var xt = /*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
        function(t) {
            function e(t, e, n, r) {
                var i, o, a, s, u, c, h, d = e && e.ownerDocument, p = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
                if (!r && ((e ? e.ownerDocument || e : R) !== D && k(e), e = e || D, N)) {
                    if (11 !== p && (u = gt.exec(t))) if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n;
                        } else if (d && (a = d.getElementById(i)) && P(e, a) && a.id === i) return n.push(a), 
                        n;
                    } else {
                        if (u[2]) return Y.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && b.getElementsByClassName && e.getElementsByClassName) return Y.apply(n, e.getElementsByClassName(i)), 
                        n;
                    }
                    if (b.qsa && !q[t + " "] && (!M || !M.test(t))) {
                        if (1 !== p) d = e, h = t; else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((s = e.getAttribute("id")) ? s = s.replace(yt, bt) : e.setAttribute("id", s = V), 
                            c = C(t), o = c.length; o--; ) c[o] = "#" + s + " " + f(c[o]);
                            h = c.join(","), d = mt.test(t) && l(e.parentNode) || e;
                        }
                        if (h) try {
                            return Y.apply(n, d.querySelectorAll(h)), n;
                        } catch (t) {} finally {
                            s === V && e.removeAttribute("id");
                        }
                    }
                }
                return T(t.replace(ot, "$1"), e, n, r);
            }
            function n() {
                function t(n, r) {
                    return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = r;
                }
                var e = [];
                return t;
            }
            function r(t) {
                return t[V] = !0, t;
            }
            function i(t) {
                var e = D.createElement("fieldset");
                try {
                    return !!t(e);
                } catch (t) {
                    return !1;
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null;
                }
            }
            function o(t, e) {
                for (var n = t.split("|"), r = n.length; r--; ) w.attrHandle[n[r]] = e;
            }
            function a(t, e) {
                var n = e && t, r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (r) return r;
                if (n) for (;n = n.nextSibling; ) if (n === e) return -1;
                return t ? 1 : -1;
            }
            function s(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Et(e) === t : e.disabled === t : "label" in e && e.disabled === t;
                };
            }
            function u(t) {
                return r(function(e) {
                    return e = +e, r(function(n, r) {
                        for (var i, o = t([], n.length, e), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                    });
                });
            }
            function l(t) {
                return t && void 0 !== t.getElementsByTagName && t;
            }
            function c() {}
            function f(t) {
                for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
                return r;
            }
            function h(t, e, n) {
                var r = e.dir, i = e.next, o = i || r, a = n && "parentNode" === o, s = F++;
                return e.first ? function(e, n, i) {
                    for (;e = e[r]; ) if (1 === e.nodeType || a) return t(e, n, i);
                    return !1;
                } : function(e, n, u) {
                    var l, c, f, h = [ H, s ];
                    if (u) {
                        for (;e = e[r]; ) if ((1 === e.nodeType || a) && t(e, n, u)) return !0;
                    } else for (;e = e[r]; ) if (1 === e.nodeType || a) if (f = e[V] || (e[V] = {}), 
                    c = f[e.uniqueID] || (f[e.uniqueID] = {}), i && i === e.nodeName.toLowerCase()) e = e[r] || e; else {
                        if ((l = c[o]) && l[0] === H && l[1] === s) return h[2] = l[2];
                        if (c[o] = h, h[2] = t(e, n, u)) return !0;
                    }
                    return !1;
                };
            }
            function d(t) {
                return t.length > 1 ? function(e, n, r) {
                    for (var i = t.length; i--; ) if (!t[i](e, n, r)) return !1;
                    return !0;
                } : t[0];
            }
            function p(t, n, r) {
                for (var i = 0, o = n.length; i < o; i++) e(t, n[i], r);
                return r;
            }
            function g(t, e, n, r, i) {
                for (var o, a = [], s = 0, u = t.length, l = null != e; s < u; s++) (o = t[s]) && (n && !n(o, r, i) || (a.push(o), 
                l && e.push(s)));
                return a;
            }
            function m(t, e, n, i, o, a) {
                return i && !i[V] && (i = m(i)), o && !o[V] && (o = m(o, a)), r(function(r, a, s, u) {
                    var l, c, f, h = [], d = [], m = a.length, v = r || p(e || "*", s.nodeType ? [ s ] : s, []), $ = !t || !r && e ? v : g(v, h, t, s, u), y = n ? o || (r ? t : m || i) ? [] : a : $;
                    if (n && n($, y, s, u), i) for (l = g(y, d), i(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (y[d[c]] = !($[d[c]] = f));
                    if (r) {
                        if (o || t) {
                            if (o) {
                                for (l = [], c = y.length; c--; ) (f = y[c]) && l.push($[c] = f);
                                o(null, y = [], l, u);
                            }
                            for (c = y.length; c--; ) (f = y[c]) && (l = o ? J(r, f) : h[c]) > -1 && (r[l] = !(a[l] = f));
                        }
                    } else y = g(y === a ? y.splice(m, y.length) : y), o ? o(null, a, y, u) : Y.apply(a, y);
                });
            }
            function v(t) {
                for (var e, n, r, i = t.length, o = w.relative[t[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = h(function(t) {
                    return t === e;
                }, a, !0), l = h(function(t) {
                    return J(e, t) > -1;
                }, a, !0), c = [ function(t, n, r) {
                    var i = !o && (r || n !== S) || ((e = n).nodeType ? u(t, n, r) : l(t, n, r));
                    return e = null, i;
                } ]; s < i; s++) if (n = w.relative[t[s].type]) c = [ h(d(c), n) ]; else {
                    if (n = w.filter[t[s].type].apply(null, t[s].matches), n[V]) {
                        for (r = ++s; r < i && !w.relative[t[r].type]; r++) ;
                        return m(s > 1 && d(c), s > 1 && f(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(ot, "$1"), n, s < r && v(t.slice(s, r)), r < i && v(t = t.slice(r)), r < i && f(t));
                    }
                    c.push(n);
                }
                return d(c);
            }
            function $(t, n) {
                var i = n.length > 0, o = t.length > 0, a = function(r, a, s, u, l) {
                    var c, f, h, d = 0, p = "0", m = r && [], v = [], $ = S, y = r || o && w.find.TAG("*", l), b = H += null == $ ? 1 : Math.random() || .1, E = y.length;
                    for (l && (S = a === D || a || l); p !== E && null != (c = y[p]); p++) {
                        if (o && c) {
                            for (f = 0, a || c.ownerDocument === D || (k(c), s = !N); h = t[f++]; ) if (h(c, a || D, s)) {
                                u.push(c);
                                break;
                            }
                            l && (H = b);
                        }
                        i && ((c = !h && c) && d--, r && m.push(c));
                    }
                    if (d += p, i && p !== d) {
                        for (f = 0; h = n[f++]; ) h(m, v, a, s);
                        if (r) {
                            if (d > 0) for (;p--; ) m[p] || v[p] || (v[p] = K.call(u));
                            v = g(v);
                        }
                        Y.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && e.uniqueSort(u);
                    }
                    return l && (H = b, S = $), m;
                };
                return i ? r(a) : a;
            }
            var y, b, w, E, x, C, _, T, S, A, O, k, D, I, N, M, j, L, P, V = "sizzle" + 1 * new Date(), R = t.document, H = 0, F = 0, W = n(), U = n(), q = n(), B = function(t, e) {
                return t === e && (O = !0), 0;
            }, z = {}.hasOwnProperty, G = [], K = G.pop, Q = G.push, Y = G.push, X = G.slice, J = function(t, e) {
                for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
                return -1;
            }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]", rt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)", it = new RegExp(tt + "+", "g"), ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"), at = new RegExp("^" + tt + "*," + tt + "*"), st = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"), ut = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"), lt = new RegExp(rt), ct = new RegExp("^" + et + "$"), ft = {
                ID: new RegExp("^#(" + et + ")"),
                CLASS: new RegExp("^\\.(" + et + ")"),
                TAG: new RegExp("^(" + et + "|[*])"),
                ATTR: new RegExp("^" + nt),
                PSEUDO: new RegExp("^" + rt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
            }, ht = /^(?:input|select|textarea|button)$/i, dt = /^h\d$/i, pt = /^[^{]+\{\s*\[native \w/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /[+~]/, vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"), $t = function(t, e, n) {
                var r = "0x" + e - 65536;
                return r !== r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
            }, yt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, bt = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
            }, wt = function() {
                k();
            }, Et = h(function(t) {
                return !0 === t.disabled && ("form" in t || "label" in t);
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                Y.apply(G = X.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType;
            } catch (t) {
                Y = {
                    apply: G.length ? function(t, e) {
                        Q.apply(t, X.call(e));
                    } : function(t, e) {
                        for (var n = t.length, r = 0; t[n++] = e[r++]; ) ;
                        t.length = n - 1;
                    }
                };
            }
            b = e.support = {}, x = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName;
            }, k = e.setDocument = function(t) {
                var e, n, r = t ? t.ownerDocument || t : R;
                return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, I = D.documentElement, 
                N = !x(D), R !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), 
                b.attributes = i(function(t) {
                    return t.className = "i", !t.getAttribute("className");
                }), b.getElementsByTagName = i(function(t) {
                    return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length;
                }), b.getElementsByClassName = pt.test(D.getElementsByClassName), b.getById = i(function(t) {
                    return I.appendChild(t).id = V, !D.getElementsByName || !D.getElementsByName(V).length;
                }), b.getById ? (w.filter.ID = function(t) {
                    var e = t.replace(vt, $t);
                    return function(t) {
                        return t.getAttribute("id") === e;
                    };
                }, w.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && N) {
                        var n = e.getElementById(t);
                        return n ? [ n ] : [];
                    }
                }) : (w.filter.ID = function(t) {
                    var e = t.replace(vt, $t);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e;
                    };
                }, w.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && N) {
                        var n, r, i, o = e.getElementById(t);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === t) return [ o ];
                            for (i = e.getElementsByName(t), r = 0; o = i[r++]; ) if ((n = o.getAttributeNode("id")) && n.value === t) return [ o ];
                        }
                        return [];
                    }
                }), w.find.TAG = b.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0;
                } : function(t, e) {
                    var n, r = [], i = 0, o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                        return r;
                    }
                    return o;
                }, w.find.CLASS = b.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && N) return e.getElementsByClassName(t);
                }, j = [], M = [], (b.qsa = pt.test(D.querySelectorAll)) && (i(function(t) {
                    I.appendChild(t).innerHTML = "<a id='" + V + "'></a><select id='" + V + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                    t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + tt + "*(?:''|\"\")"), 
                    t.querySelectorAll("[selected]").length || M.push("\\[" + tt + "*(?:value|" + Z + ")"), 
                    t.querySelectorAll("[id~=" + V + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), 
                    t.querySelectorAll("a#" + V + "+*").length || M.push(".#.+[+~]");
                }), i(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = D.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + tt + "*[*^$|!~]?="), 
                    2 !== t.querySelectorAll(":enabled").length && M.push(":enabled", ":disabled"), 
                    I.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && M.push(":enabled", ":disabled"), 
                    t.querySelectorAll("*,:x"), M.push(",.*:");
                })), (b.matchesSelector = pt.test(L = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && i(function(t) {
                    b.disconnectedMatch = L.call(t, "*"), L.call(t, "[s!='']:x"), j.push("!=", rt);
                }), M = M.length && new RegExp(M.join("|")), j = j.length && new RegExp(j.join("|")), 
                e = pt.test(I.compareDocumentPosition), P = e || pt.test(I.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
                    return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)));
                } : function(t, e) {
                    if (e) for (;e = e.parentNode; ) if (e === t) return !0;
                    return !1;
                }, B = e ? function(t, e) {
                    if (t === e) return O = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 
                    1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === R && P(R, t) ? -1 : e === D || e.ownerDocument === R && P(R, e) ? 1 : A ? J(A, t) - J(A, e) : 0 : 4 & n ? -1 : 1);
                } : function(t, e) {
                    if (t === e) return O = !0, 0;
                    var n, r = 0, i = t.parentNode, o = e.parentNode, s = [ t ], u = [ e ];
                    if (!i || !o) return t === D ? -1 : e === D ? 1 : i ? -1 : o ? 1 : A ? J(A, t) - J(A, e) : 0;
                    if (i === o) return a(t, e);
                    for (n = t; n = n.parentNode; ) s.unshift(n);
                    for (n = e; n = n.parentNode; ) u.unshift(n);
                    for (;s[r] === u[r]; ) r++;
                    return r ? a(s[r], u[r]) : s[r] === R ? -1 : u[r] === R ? 1 : 0;
                }, D) : D;
            }, e.matches = function(t, n) {
                return e(t, null, null, n);
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== D && k(t), n = n.replace(ut, "='$1']"), b.matchesSelector && N && !q[n + " "] && (!j || !j.test(n)) && (!M || !M.test(n))) try {
                    var r = L.call(t, n);
                    if (r || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r;
                } catch (t) {}
                return e(n, D, null, [ t ]).length > 0;
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== D && k(t), P(t, e);
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== D && k(t);
                var n = w.attrHandle[e.toLowerCase()], r = n && z.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !N) : void 0;
                return void 0 !== r ? r : b.attributes || !N ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
            }, e.escape = function(t) {
                return (t + "").replace(yt, bt);
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t);
            }, e.uniqueSort = function(t) {
                var e, n = [], r = 0, i = 0;
                if (O = !b.detectDuplicates, A = !b.sortStable && t.slice(0), t.sort(B), O) {
                    for (;e = t[i++]; ) e === t[i] && (r = n.push(i));
                    for (;r--; ) t.splice(n[r], 1);
                }
                return A = null, t;
            }, E = e.getText = function(t) {
                var e, n = "", r = 0, i = t.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += E(t);
                    } else if (3 === i || 4 === i) return t.nodeValue;
                } else for (;e = t[r++]; ) n += E(e);
                return n;
            }, w = e.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(vt, $t), t[3] = (t[3] || t[4] || t[5] || "").replace(vt, $t), 
                        "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), 
                        t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), 
                        t;
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && lt.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), 
                        t[2] = n.slice(0, e)), t.slice(0, 3));
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(vt, $t).toLowerCase();
                        return "*" === t ? function() {
                            return !0;
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e;
                        };
                    },
                    CLASS: function(t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && W(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
                        });
                    },
                    ATTR: function(t, n, r) {
                        return function(i) {
                            var o = e.attr(i, t);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(it, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
                        };
                    },
                    CHILD: function(t, e, n, r, i) {
                        var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                        return 1 === r && 0 === i ? function(t) {
                            return !!t.parentNode;
                        } : function(e, n, u) {
                            var l, c, f, h, d, p, g = o !== a ? "nextSibling" : "previousSibling", m = e.parentNode, v = s && e.nodeName.toLowerCase(), $ = !u && !s, y = !1;
                            if (m) {
                                if (o) {
                                    for (;g; ) {
                                        for (h = e; h = h[g]; ) if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        p = g = "only" === t && !p && "nextSibling";
                                    }
                                    return !0;
                                }
                                if (p = [ a ? m.firstChild : m.lastChild ], a && $) {
                                    for (h = m, f = h[V] || (h[V] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), 
                                    l = c[t] || [], d = l[0] === H && l[1], y = d && l[2], h = d && m.childNodes[d]; h = ++d && h && h[g] || (y = d = 0) || p.pop(); ) if (1 === h.nodeType && ++y && h === e) {
                                        c[t] = [ H, d, y ];
                                        break;
                                    }
                                } else if ($ && (h = e, f = h[V] || (h[V] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), 
                                l = c[t] || [], d = l[0] === H && l[1], y = d), !1 === y) for (;(h = ++d && h && h[g] || (y = d = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++y || ($ && (f = h[V] || (h[V] = {}), 
                                c = f[h.uniqueID] || (f[h.uniqueID] = {}), c[t] = [ H, y ]), h !== e)); ) ;
                                return (y -= i) === r || y % r == 0 && y / r >= 0;
                            }
                        };
                    },
                    PSEUDO: function(t, n) {
                        var i, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[V] ? o(n) : o.length > 1 ? (i = [ t, t, "", n ], w.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                            for (var r, i = o(t, n), a = i.length; a--; ) r = J(t, i[a]), t[r] = !(e[r] = i[a]);
                        }) : function(t) {
                            return o(t, 0, i);
                        }) : o;
                    }
                },
                pseudos: {
                    not: r(function(t) {
                        var e = [], n = [], i = _(t.replace(ot, "$1"));
                        return i[V] ? r(function(t, e, n, r) {
                            for (var o, a = i(t, null, r, []), s = t.length; s--; ) (o = a[s]) && (t[s] = !(e[s] = o));
                        }) : function(t, r, o) {
                            return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop();
                        };
                    }),
                    has: r(function(t) {
                        return function(n) {
                            return e(t, n).length > 0;
                        };
                    }),
                    contains: r(function(t) {
                        return t = t.replace(vt, $t), function(e) {
                            return (e.textContent || e.innerText || E(e)).indexOf(t) > -1;
                        };
                    }),
                    lang: r(function(t) {
                        return ct.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, $t).toLowerCase(), 
                        function(e) {
                            var n;
                            do {
                                if (n = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        };
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id;
                    },
                    root: function(t) {
                        return t === I;
                    },
                    focus: function(t) {
                        return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                    },
                    enabled: s(!1),
                    disabled: s(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected;
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function(t) {
                        return !w.pseudos.empty(t);
                    },
                    header: function(t) {
                        return dt.test(t.nodeName);
                    },
                    input: function(t) {
                        return ht.test(t.nodeName);
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e;
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                    },
                    first: u(function() {
                        return [ 0 ];
                    }),
                    last: u(function(t, e) {
                        return [ e - 1 ];
                    }),
                    eq: u(function(t, e, n) {
                        return [ n < 0 ? n + e : n ];
                    }),
                    even: u(function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t;
                    }),
                    odd: u(function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t;
                    }),
                    lt: u(function(t, e, n) {
                        for (var r = n < 0 ? n + e : n; --r >= 0; ) t.push(r);
                        return t;
                    }),
                    gt: u(function(t, e, n) {
                        for (var r = n < 0 ? n + e : n; ++r < e; ) t.push(r);
                        return t;
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[y] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t;
                };
            }(y);
            for (y in {
                submit: !0,
                reset: !0
            }) w.pseudos[y] = function(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t;
                };
            }(y);
            return c.prototype = w.filters = w.pseudos, w.setFilters = new c(), C = e.tokenize = function(t, n) {
                var r, i, o, a, s, u, l, c = U[t + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = t, u = [], l = w.preFilter; s; ) {
                    r && !(i = at.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), 
                    r = !1, (i = st.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(ot, " ")
                    }), s = s.slice(r.length));
                    for (a in w.filter) !(i = ft[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), 
                    o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r) break;
                }
                return n ? s.length : s ? e.error(t) : U(t, u).slice(0);
            }, _ = e.compile = function(t, e) {
                var n, r = [], i = [], o = q[t + " "];
                if (!o) {
                    for (e || (e = C(t)), n = e.length; n--; ) o = v(e[n]), o[V] ? r.push(o) : i.push(o);
                    o = q(t, $(i, r)), o.selector = t;
                }
                return o;
            }, T = e.select = function(t, e, n, r) {
                var i, o, a, s, u, c = "function" == typeof t && t, h = !r && C(t = c.selector || t);
                if (n = n || [], 1 === h.length) {
                    if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === e.nodeType && N && w.relative[o[1].type]) {
                        if (!(e = (w.find.ID(a.matches[0].replace(vt, $t), e) || [])[0])) return n;
                        c && (e = e.parentNode), t = t.slice(o.shift().value.length);
                    }
                    for (i = ft.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]); ) if ((u = w.find[s]) && (r = u(a.matches[0].replace(vt, $t), mt.test(o[0].type) && l(e.parentNode) || e))) {
                        if (o.splice(i, 1), !(t = r.length && f(o))) return Y.apply(n, r), n;
                        break;
                    }
                }
                return (c || _(t, h))(r, e, !N, n, !e || mt.test(t) && l(e.parentNode) || e), n;
            }, b.sortStable = V.split("").sort(B).join("") === V, b.detectDuplicates = !!O, 
            k(), b.sortDetached = i(function(t) {
                return 1 & t.compareDocumentPosition(D.createElement("fieldset"));
            }), i(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
            }) || o("type|href|height|width", function(t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
            }), b.attributes && i(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
            }) || o("value", function(t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
            }), i(function(t) {
                return null == t.getAttribute("disabled");
            }) || o(Z, function(t, e, n) {
                var r;
                if (!n) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
            }), e;
        }(n);
        $t.find = xt, $t.expr = xt.selectors, $t.expr[":"] = $t.expr.pseudos, $t.uniqueSort = $t.unique = xt.uniqueSort, 
        $t.text = xt.getText, $t.isXMLDoc = xt.isXML, $t.contains = xt.contains, $t.escapeSelector = xt.escape;
        var Ct = function(t, e, n) {
            for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; ) if (1 === t.nodeType) {
                if (i && $t(t).is(n)) break;
                r.push(t);
            }
            return r;
        }, _t = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n;
        }, Tt = $t.expr.match.needsContext, St = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, At = /^.[^:#\[\.,]*$/;
        $t.filter = function(t, e, n) {
            var r = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? $t.find.matchesSelector(r, t) ? [ r ] : [] : $t.find.matches(t, $t.grep(e, function(t) {
                return 1 === t.nodeType;
            }));
        }, $t.fn.extend({
            find: function(t) {
                var e, n, r = this.length, i = this;
                if ("string" != typeof t) return this.pushStack($t(t).filter(function() {
                    for (e = 0; e < r; e++) if ($t.contains(i[e], this)) return !0;
                }));
                for (n = this.pushStack([]), e = 0; e < r; e++) $t.find(t, i[e], n);
                return r > 1 ? $t.uniqueSort(n) : n;
            },
            filter: function(t) {
                return this.pushStack(l(this, t || [], !1));
            },
            not: function(t) {
                return this.pushStack(l(this, t || [], !0));
            },
            is: function(t) {
                return !!l(this, "string" == typeof t && Tt.test(t) ? $t(t) : t || [], !1).length;
            }
        });
        var Ot, kt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ($t.fn.init = function(t, e, n) {
            var r, i;
            if (!t) return this;
            if (n = n || Ot, "string" == typeof t) {
                if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [ null, t, null ] : kt.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (r[1]) {
                    if (e = e instanceof $t ? e[0] : e, $t.merge(this, $t.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : at, !0)), 
                    St.test(r[1]) && $t.isPlainObject(e)) for (r in e) $t.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                    return this;
                }
                return i = at.getElementById(r[2]), i && (this[0] = i, this.length = 1), this;
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : $t.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t($t) : $t.makeArray(t, this);
        }).prototype = $t.fn, Ot = $t(at);
        var Dt = /^(?:parents|prev(?:Until|All))/, It = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        $t.fn.extend({
            has: function(t) {
                var e = $t(t, this), n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++) if ($t.contains(this, e[t])) return !0;
                });
            },
            closest: function(t, e) {
                var n, r = 0, i = this.length, o = [], a = "string" != typeof t && $t(t);
                if (!Tt.test(t)) for (;r < i; r++) for (n = this[r]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && $t.find.matchesSelector(n, t))) {
                    o.push(n);
                    break;
                }
                return this.pushStack(o.length > 1 ? $t.uniqueSort(o) : o);
            },
            index: function(t) {
                return t ? "string" == typeof t ? ft.call($t(t), this[0]) : ft.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function(t, e) {
                return this.pushStack($t.uniqueSort($t.merge(this.get(), $t(t, e))));
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
            }
        }), $t.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null;
            },
            parents: function(t) {
                return Ct(t, "parentNode");
            },
            parentsUntil: function(t, e, n) {
                return Ct(t, "parentNode", n);
            },
            next: function(t) {
                return c(t, "nextSibling");
            },
            prev: function(t) {
                return c(t, "previousSibling");
            },
            nextAll: function(t) {
                return Ct(t, "nextSibling");
            },
            prevAll: function(t) {
                return Ct(t, "previousSibling");
            },
            nextUntil: function(t, e, n) {
                return Ct(t, "nextSibling", n);
            },
            prevUntil: function(t, e, n) {
                return Ct(t, "previousSibling", n);
            },
            siblings: function(t) {
                return _t((t.parentNode || {}).firstChild, t);
            },
            children: function(t) {
                return _t(t.firstChild);
            },
            contents: function(t) {
                return u(t, "iframe") ? t.contentDocument : (u(t, "template") && (t = t.content || t), 
                $t.merge([], t.childNodes));
            }
        }, function(t, e) {
            $t.fn[t] = function(n, r) {
                var i = $t.map(this, e, n);
                return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = $t.filter(r, i)), 
                this.length > 1 && (It[t] || $t.uniqueSort(i), Dt.test(t) && i.reverse()), this.pushStack(i);
            };
        });
        var Nt = /[^\x20\t\r\n\f]+/g;
        $t.Callbacks = function(t) {
            t = "string" == typeof t ? f(t) : $t.extend({}, t);
            var e, n, r, i, o = [], a = [], s = -1, u = function() {
                for (i = i || t.once, r = e = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length; ) !1 === o[s].apply(n[0], n[1]) && t.stopOnFalse && (s = o.length, 
                n = !1);
                t.memory || (n = !1), e = !1, i && (o = n ? [] : "");
            }, l = {
                add: function() {
                    return o && (n && !e && (s = o.length - 1, a.push(n)), function e(n) {
                        $t.each(n, function(n, r) {
                            $t.isFunction(r) ? t.unique && l.has(r) || o.push(r) : r && r.length && "string" !== $t.type(r) && e(r);
                        });
                    }(arguments), n && !e && u()), this;
                },
                remove: function() {
                    return $t.each(arguments, function(t, e) {
                        for (var n; (n = $t.inArray(e, o, n)) > -1; ) o.splice(n, 1), n <= s && s--;
                    }), this;
                },
                has: function(t) {
                    return t ? $t.inArray(t, o) > -1 : o.length > 0;
                },
                empty: function() {
                    return o && (o = []), this;
                },
                disable: function() {
                    return i = a = [], o = n = "", this;
                },
                disabled: function() {
                    return !o;
                },
                lock: function() {
                    return i = a = [], n || e || (o = n = ""), this;
                },
                locked: function() {
                    return !!i;
                },
                fireWith: function(t, n) {
                    return i || (n = n || [], n = [ t, n.slice ? n.slice() : n ], a.push(n), e || u()), 
                    this;
                },
                fire: function() {
                    return l.fireWith(this, arguments), this;
                },
                fired: function() {
                    return !!r;
                }
            };
            return l;
        }, $t.extend({
            Deferred: function(t) {
                var e = [ [ "notify", "progress", $t.Callbacks("memory"), $t.Callbacks("memory"), 2 ], [ "resolve", "done", $t.Callbacks("once memory"), $t.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", $t.Callbacks("once memory"), $t.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", i = {
                    state: function() {
                        return r;
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this;
                    },
                    catch: function(t) {
                        return i.then(null, t);
                    },
                    pipe: function() {
                        var t = arguments;
                        return $t.Deferred(function(n) {
                            $t.each(e, function(e, r) {
                                var i = $t.isFunction(t[r[4]]) && t[r[4]];
                                o[r[1]](function() {
                                    var t = i && i.apply(this, arguments);
                                    t && $t.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [ t ] : arguments);
                                });
                            }), t = null;
                        }).promise();
                    },
                    then: function(t, r, i) {
                        function o(t, e, r, i) {
                            return function() {
                                var s = this, u = arguments, l = function() {
                                    var n, l;
                                    if (!(t < a)) {
                                        if ((n = r.apply(s, u)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                        l = n && ("object" == typeof n || "function" == typeof n) && n.then, $t.isFunction(l) ? i ? l.call(n, o(a, e, h, i), o(a, e, d, i)) : (a++, 
                                        l.call(n, o(a, e, h, i), o(a, e, d, i), o(a, e, h, e.notifyWith))) : (r !== h && (s = void 0, 
                                        u = [ n ]), (i || e.resolveWith)(s, u));
                                    }
                                }, c = i ? l : function() {
                                    try {
                                        l();
                                    } catch (n) {
                                        $t.Deferred.exceptionHook && $t.Deferred.exceptionHook(n, c.stackTrace), t + 1 >= a && (r !== d && (s = void 0, 
                                        u = [ n ]), e.rejectWith(s, u));
                                    }
                                };
                                t ? c() : ($t.Deferred.getStackHook && (c.stackTrace = $t.Deferred.getStackHook()), 
                                n.setTimeout(c));
                            };
                        }
                        var a = 0;
                        return $t.Deferred(function(n) {
                            e[0][3].add(o(0, n, $t.isFunction(i) ? i : h, n.notifyWith)), e[1][3].add(o(0, n, $t.isFunction(t) ? t : h)), 
                            e[2][3].add(o(0, n, $t.isFunction(r) ? r : d));
                        }).promise();
                    },
                    promise: function(t) {
                        return null != t ? $t.extend(t, i) : i;
                    }
                }, o = {};
                return $t.each(e, function(t, n) {
                    var a = n[2], s = n[5];
                    i[n[1]] = a.add, s && a.add(function() {
                        r = s;
                    }, e[3 - t][2].disable, e[0][2].lock), a.add(n[3].fire), o[n[0]] = function() {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
                    }, o[n[0] + "With"] = a.fireWith;
                }), i.promise(o), t && t.call(o, o), o;
            },
            when: function(t) {
                var e = arguments.length, n = e, r = Array(n), i = ut.call(arguments), o = $t.Deferred(), a = function(t) {
                    return function(n) {
                        r[t] = this, i[t] = arguments.length > 1 ? ut.call(arguments) : n, --e || o.resolveWith(r, i);
                    };
                };
                if (e <= 1 && (p(t, o.done(a(n)).resolve, o.reject, !e), "pending" === o.state() || $t.isFunction(i[n] && i[n].then))) return o.then();
                for (;n--; ) p(i[n], a(n), o.reject);
                return o.promise();
            }
        });
        var Mt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        $t.Deferred.exceptionHook = function(t, e) {
            n.console && n.console.warn && t && Mt.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
        }, $t.readyException = function(t) {
            n.setTimeout(function() {
                throw t;
            });
        };
        var jt = $t.Deferred();
        $t.fn.ready = function(t) {
            return jt.then(t).catch(function(t) {
                $t.readyException(t);
            }), this;
        }, $t.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --$t.readyWait : $t.isReady) || ($t.isReady = !0, !0 !== t && --$t.readyWait > 0 || jt.resolveWith(at, [ $t ]));
            }
        }), $t.ready.then = jt.then, "complete" === at.readyState || "loading" !== at.readyState && !at.documentElement.doScroll ? n.setTimeout($t.ready) : (at.addEventListener("DOMContentLoaded", g), 
        n.addEventListener("load", g));
        var Lt = function(t, e, n, r, i, o, a) {
            var s = 0, u = t.length, l = null == n;
            if ("object" === $t.type(n)) {
                i = !0;
                for (s in n) Lt(t, e, s, n[s], !0, o, a);
            } else if (void 0 !== r && (i = !0, $t.isFunction(r) || (a = !0), l && (a ? (e.call(t, r), 
            e = null) : (l = e, e = function(t, e, n) {
                return l.call($t(t), n);
            })), e)) for (;s < u; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
            return i ? t : l ? e.call(t) : u ? e(t[0], n) : o;
        }, Pt = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
        };
        m.uid = 1, m.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, Pt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e;
            },
            set: function(t, e, n) {
                var r, i = this.cache(t);
                if ("string" == typeof e) i[$t.camelCase(e)] = n; else for (r in e) i[$t.camelCase(r)] = e[r];
                return i;
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][$t.camelCase(e)];
            },
            access: function(t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), 
                void 0 !== n ? n : e);
            },
            remove: function(t, e) {
                var n, r = t[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== e) {
                        Array.isArray(e) ? e = e.map($t.camelCase) : (e = $t.camelCase(e), e = e in r ? [ e ] : e.match(Nt) || []), 
                        n = e.length;
                        for (;n--; ) delete r[e[n]];
                    }
                    (void 0 === e || $t.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !$t.isEmptyObject(e);
            }
        };
        var Vt = new m(), Rt = new m(), Ht = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ft = /[A-Z]/g;
        $t.extend({
            hasData: function(t) {
                return Rt.hasData(t) || Vt.hasData(t);
            },
            data: function(t, e, n) {
                return Rt.access(t, e, n);
            },
            removeData: function(t, e) {
                Rt.remove(t, e);
            },
            _data: function(t, e, n) {
                return Vt.access(t, e, n);
            },
            _removeData: function(t, e) {
                Vt.remove(t, e);
            }
        }), $t.fn.extend({
            data: function(t, e) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (i = Rt.get(o), 1 === o.nodeType && !Vt.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--; ) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = $t.camelCase(r.slice(5)), 
                        $(o, r, i[r])));
                        Vt.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof t ? this.each(function() {
                    Rt.set(this, t);
                }) : Lt(this, function(e) {
                    var n;
                    if (o && void 0 === e) {
                        if (void 0 !== (n = Rt.get(o, t))) return n;
                        if (void 0 !== (n = $(o, t))) return n;
                    } else this.each(function() {
                        Rt.set(this, t, e);
                    });
                }, null, e, arguments.length > 1, null, !0);
            },
            removeData: function(t) {
                return this.each(function() {
                    Rt.remove(this, t);
                });
            }
        }), $t.extend({
            queue: function(t, e, n) {
                var r;
                if (t) return e = (e || "fx") + "queue", r = Vt.get(t, e), n && (!r || Array.isArray(n) ? r = Vt.access(t, e, $t.makeArray(n)) : r.push(n)), 
                r || [];
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = $t.queue(t, e), r = n.length, i = n.shift(), o = $t._queueHooks(t, e), a = function() {
                    $t.dequeue(t, e);
                };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), 
                delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire();
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return Vt.get(t, n) || Vt.access(t, n, {
                    empty: $t.Callbacks("once memory").add(function() {
                        Vt.remove(t, [ e + "queue", n ]);
                    })
                });
            }
        }), $t.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? $t.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = $t.queue(this, t, e);
                    $t._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && $t.dequeue(this, t);
                });
            },
            dequeue: function(t) {
                return this.each(function() {
                    $t.dequeue(this, t);
                });
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", []);
            },
            promise: function(t, e) {
                var n, r = 1, i = $t.Deferred(), o = this, a = this.length, s = function() {
                    --r || i.resolveWith(o, [ o ]);
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--; ) (n = Vt.get(o[a], t + "queueHooks")) && n.empty && (r++, 
                n.empty.add(s));
                return s(), i.promise(e);
            }
        });
        var Wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ut = new RegExp("^(?:([+-])=|)(" + Wt + ")([a-z%]*)$", "i"), qt = [ "Top", "Right", "Bottom", "Left" ], Bt = function(t, e) {
            return t = e || t, "none" === t.style.display || "" === t.style.display && $t.contains(t.ownerDocument, t) && "none" === $t.css(t, "display");
        }, zt = function(t, e, n, r) {
            var i, o, a = {};
            for (o in e) a[o] = t.style[o], t.style[o] = e[o];
            i = n.apply(t, r || []);
            for (o in e) t.style[o] = a[o];
            return i;
        }, Gt = {};
        $t.fn.extend({
            show: function() {
                return w(this, !0);
            },
            hide: function() {
                return w(this);
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Bt(this) ? $t(this).show() : $t(this).hide();
                });
            }
        });
        var Kt = /^(?:checkbox|radio)$/i, Qt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Yt = /^$|\/(?:java|ecma)script/i, Xt = {
            option: [ 1, "<select multiple='multiple'>", "</select>" ],
            thead: [ 1, "<table>", "</table>" ],
            col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
            _default: [ 0, "", "" ]
        };
        Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, 
        Xt.th = Xt.td;
        var Jt = /<|&#?\w+;/;
        !function() {
            var t = at.createDocumentFragment(), e = t.appendChild(at.createElement("div")), n = at.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), 
            e.appendChild(n), vt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
            e.innerHTML = "<textarea>x</textarea>", vt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
        }();
        var Zt = at.documentElement, te = /^key/, ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ne = /^([^.]*)(?:\.(.+)|)/;
        $t.event = {
            global: {},
            add: function(t, e, n, r, i) {
                var o, a, s, u, l, c, f, h, d, p, g, m = Vt.get(t);
                if (m) for (n.handler && (o = n, n = o.handler, i = o.selector), i && $t.find.matchesSelector(Zt, i), 
                n.guid || (n.guid = $t.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                    return void 0 !== $t && $t.event.triggered !== e.type ? $t.event.dispatch.apply(t, arguments) : void 0;
                }), e = (e || "").match(Nt) || [ "" ], l = e.length; l--; ) s = ne.exec(e[l]) || [], 
                d = g = s[1], p = (s[2] || "").split(".").sort(), d && (f = $t.event.special[d] || {}, 
                d = (i ? f.delegateType : f.bindType) || d, f = $t.event.special[d] || {}, c = $t.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && $t.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (h = u[d]) || (h = u[d] = [], h.delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, p, a) || t.addEventListener && t.addEventListener(d, a)), 
                f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), 
                $t.event.global[d] = !0);
            },
            remove: function(t, e, n, r, i) {
                var o, a, s, u, l, c, f, h, d, p, g, m = Vt.hasData(t) && Vt.get(t);
                if (m && (u = m.events)) {
                    for (e = (e || "").match(Nt) || [ "" ], l = e.length; l--; ) if (s = ne.exec(e[l]) || [], 
                    d = g = s[1], p = (s[2] || "").split(".").sort(), d) {
                        for (f = $t.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, 
                        h = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                        a = o = h.length; o--; ) c = h[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (h.splice(o, 1), 
                        c.selector && h.delegateCount--, f.remove && f.remove.call(t, c));
                        a && !h.length && (f.teardown && !1 !== f.teardown.call(t, p, m.handle) || $t.removeEvent(t, d, m.handle), 
                        delete u[d]);
                    } else for (d in u) $t.event.remove(t, d + e[l], n, r, !0);
                    $t.isEmptyObject(u) && Vt.remove(t, "handle events");
                }
            },
            dispatch: function(t) {
                var e, n, r, i, o, a, s = $t.event.fix(t), u = new Array(arguments.length), l = (Vt.get(this, "events") || {})[s.type] || [], c = $t.event.special[s.type] || {};
                for (u[0] = s, e = 1; e < arguments.length; e++) u[e] = arguments[e];
                if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                    for (a = $t.event.handlers.call(this, s, l), e = 0; (i = a[e++]) && !s.isPropagationStopped(); ) for (s.currentTarget = i.elem, 
                    n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); ) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, 
                    s.data = o.data, void 0 !== (r = (($t.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), 
                    s.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, s), s.result;
                }
            },
            handlers: function(t, e) {
                var n, r, i, o, a, s = [], u = e.delegateCount, l = t.target;
                if (u && l.nodeType && !("click" === t.type && t.button >= 1)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== t.type || !0 !== l.disabled)) {
                    for (o = [], a = {}, n = 0; n < u; n++) r = e[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? $t(i, this).index(l) > -1 : $t.find(i, this, null, [ l ]).length), 
                    a[i] && o.push(r);
                    o.length && s.push({
                        elem: l,
                        handlers: o
                    });
                }
                return l = this, u < e.length && s.push({
                    elem: l,
                    handlers: e.slice(u)
                }), s;
            },
            addProp: function(t, e) {
                Object.defineProperty($t.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: $t.isFunction(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent);
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t];
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        });
                    }
                });
            },
            fix: function(t) {
                return t[$t.expando] ? t : new $t.Event(t);
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== S() && this.focus) return this.focus(), !1;
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === S() && this.blur) return this.blur(), !1;
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && u(this, "input")) return this.click(), 
                        !1;
                    },
                    _default: function(t) {
                        return u(t.target, "a");
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                    }
                }
            }
        }, $t.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n);
        }, $t.Event = function(t, e) {
            if (!(this instanceof $t.Event)) return new $t.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? _ : T, 
            this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, 
            this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, 
            e && $t.extend(this, e), this.timeStamp = t && t.timeStamp || $t.now(), this[$t.expando] = !0;
        }, $t.Event.prototype = {
            constructor: $t.Event,
            isDefaultPrevented: T,
            isPropagationStopped: T,
            isImmediatePropagationStopped: T,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = _, t && !this.isSimulated && t.preventDefault();
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = _, t && !this.isSimulated && t.stopPropagation();
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = _, t && !this.isSimulated && t.stopImmediatePropagation(), 
                this.stopPropagation();
            }
        }, $t.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && te.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && ee.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
            }
        }, $t.event.addProp), $t.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            $t.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, r = this, i = t.relatedTarget, o = t.handleObj;
                    return i && (i === r || $t.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), 
                    t.type = e), n;
                }
            };
        }), $t.fn.extend({
            on: function(t, e, n, r) {
                return A(this, t, e, n, r);
            },
            one: function(t, e, n, r) {
                return A(this, t, e, n, r, 1);
            },
            off: function(t, e, n) {
                var r, i;
                if (t && t.preventDefault && t.handleObj) return r = t.handleObj, $t(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
                this;
                if ("object" == typeof t) {
                    for (i in t) this.off(i, e, t[i]);
                    return this;
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = T), 
                this.each(function() {
                    $t.event.remove(this, t, n, e);
                });
            }
        });
        var re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, ie = /<script|<style|<link/i, oe = /checked\s*(?:[^=]|=\s*.checked.)/i, ae = /^true\/(.*)/, se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        $t.extend({
            htmlPrefilter: function(t) {
                return t.replace(re, "<$1></$2>");
            },
            clone: function(t, e, n) {
                var r, i, o, a, s = t.cloneNode(!0), u = $t.contains(t.ownerDocument, t);
                if (!(vt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || $t.isXMLDoc(t))) for (a = E(s), 
                o = E(t), r = 0, i = o.length; r < i; r++) N(o[r], a[r]);
                if (e) if (n) for (o = o || E(t), a = a || E(s), r = 0, i = o.length; r < i; r++) I(o[r], a[r]); else I(t, s);
                return a = E(s, "script"), a.length > 0 && x(a, !u && E(t, "script")), s;
            },
            cleanData: function(t) {
                for (var e, n, r, i = $t.event.special, o = 0; void 0 !== (n = t[o]); o++) if (Pt(n)) {
                    if (e = n[Vt.expando]) {
                        if (e.events) for (r in e.events) i[r] ? $t.event.remove(n, r) : $t.removeEvent(n, r, e.handle);
                        n[Vt.expando] = void 0;
                    }
                    n[Rt.expando] && (n[Rt.expando] = void 0);
                }
            }
        }), $t.fn.extend({
            detach: function(t) {
                return j(this, t, !0);
            },
            remove: function(t) {
                return j(this, t);
            },
            text: function(t) {
                return Lt(this, function(t) {
                    return void 0 === t ? $t.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
                    });
                }, null, t, arguments.length);
            },
            append: function() {
                return M(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        O(this, t).appendChild(t);
                    }
                });
            },
            prepend: function() {
                return M(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = O(this, t);
                        e.insertBefore(t, e.firstChild);
                    }
                });
            },
            before: function() {
                return M(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this);
                });
            },
            after: function() {
                return M(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                });
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && ($t.cleanData(E(t, !1)), 
                t.textContent = "");
                return this;
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return $t.clone(this, t, e);
                });
            },
            html: function(t) {
                return Lt(this, function(t) {
                    var e = this[0] || {}, n = 0, r = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !ie.test(t) && !Xt[(Qt.exec(t) || [ "", "" ])[1].toLowerCase()]) {
                        t = $t.htmlPrefilter(t);
                        try {
                            for (;n < r; n++) e = this[n] || {}, 1 === e.nodeType && ($t.cleanData(E(e, !1)), 
                            e.innerHTML = t);
                            e = 0;
                        } catch (t) {}
                    }
                    e && this.empty().append(t);
                }, null, t, arguments.length);
            },
            replaceWith: function() {
                var t = [];
                return M(this, arguments, function(e) {
                    var n = this.parentNode;
                    $t.inArray(this, t) < 0 && ($t.cleanData(E(this)), n && n.replaceChild(e, this));
                }, t);
            }
        }), $t.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            $t.fn[t] = function(t) {
                for (var n, r = [], i = $t(t), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), 
                $t(i[a])[e](n), ct.apply(r, n.get());
                return this.pushStack(r);
            };
        });
        var ue = /^margin/, le = new RegExp("^(" + Wt + ")(?!px)[a-z%]+$", "i"), ce = function(t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = n), e.getComputedStyle(t);
        };
        !function() {
            function t() {
                if (s) {
                    s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                    s.innerHTML = "", Zt.appendChild(a);
                    var t = n.getComputedStyle(s);
                    e = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", 
                    i = "4px" === t.marginRight, Zt.removeChild(a), s = null;
                }
            }
            var e, r, i, o, a = at.createElement("div"), s = at.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", 
            vt.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
            a.appendChild(s), $t.extend(vt, {
                pixelPosition: function() {
                    return t(), e;
                },
                boxSizingReliable: function() {
                    return t(), r;
                },
                pixelMarginRight: function() {
                    return t(), i;
                },
                reliableMarginLeft: function() {
                    return t(), o;
                }
            }));
        }();
        var fe = /^(none|table(?!-c[ea]).+)/, he = /^--/, de = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, pe = {
            letterSpacing: "0",
            fontWeight: "400"
        }, ge = [ "Webkit", "Moz", "ms" ], me = at.createElement("div").style;
        $t.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = L(t, "opacity");
                            return "" === n ? "1" : n;
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, n, r) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var i, o, a, s = $t.camelCase(e), u = he.test(e), l = t.style;
                    if (u || (e = R(s)), a = $t.cssHooks[e] || $t.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : l[e];
                    o = typeof n, "string" === o && (i = Ut.exec(n)) && i[1] && (n = y(t, e, i), o = "number"), 
                    null != n && n === n && ("number" === o && (n += i && i[3] || ($t.cssNumber[s] ? "" : "px")), 
                    vt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), 
                    a && "set" in a && void 0 === (n = a.set(t, n, r)) || (u ? l.setProperty(e, n) : l[e] = n));
                }
            },
            css: function(t, e, n, r) {
                var i, o, a, s = $t.camelCase(e);
                return he.test(e) || (e = R(s)), a = $t.cssHooks[e] || $t.cssHooks[s], a && "get" in a && (i = a.get(t, !0, n)), 
                void 0 === i && (i = L(t, e, r)), "normal" === i && e in pe && (i = pe[e]), "" === n || n ? (o = parseFloat(i), 
                !0 === n || isFinite(o) ? o || 0 : i) : i;
            }
        }), $t.each([ "height", "width" ], function(t, e) {
            $t.cssHooks[e] = {
                get: function(t, n, r) {
                    if (n) return !fe.test($t.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? W(t, e, r) : zt(t, de, function() {
                        return W(t, e, r);
                    });
                },
                set: function(t, n, r) {
                    var i, o = r && ce(t), a = r && F(t, e, r, "border-box" === $t.css(t, "boxSizing", !1, o), o);
                    return a && (i = Ut.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n, n = $t.css(t, e)), 
                    H(t, n, a);
                }
            };
        }), $t.cssHooks.marginLeft = P(vt.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(L(t, "marginLeft")) || t.getBoundingClientRect().left - zt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left;
            })) + "px";
        }), $t.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            $t.cssHooks[t + e] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) i[t + qt[r] + e] = o[r] || o[r - 2] || o[0];
                    return i;
                }
            }, ue.test(t) || ($t.cssHooks[t + e].set = H);
        }), $t.fn.extend({
            css: function(t, e) {
                return Lt(this, function(t, e, n) {
                    var r, i, o = {}, a = 0;
                    if (Array.isArray(e)) {
                        for (r = ce(t), i = e.length; a < i; a++) o[e[a]] = $t.css(t, e[a], !1, r);
                        return o;
                    }
                    return void 0 !== n ? $t.style(t, e, n) : $t.css(t, e);
                }, t, e, arguments.length > 1);
            }
        }), $t.Tween = U, U.prototype = {
            constructor: U,
            init: function(t, e, n, r, i, o) {
                this.elem = t, this.prop = n, this.easing = i || $t.easing._default, this.options = e, 
                this.start = this.now = this.cur(), this.end = r, this.unit = o || ($t.cssNumber[n] ? "" : "px");
            },
            cur: function() {
                var t = U.propHooks[this.prop];
                return t && t.get ? t.get(this) : U.propHooks._default.get(this);
            },
            run: function(t) {
                var e, n = U.propHooks[this.prop];
                return this.options.duration ? this.pos = e = $t.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, 
                this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                n && n.set ? n.set(this) : U.propHooks._default.set(this), this;
            }
        }, U.prototype.init.prototype = U.prototype, U.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = $t.css(t.elem, t.prop, ""), 
                    e && "auto" !== e ? e : 0);
                },
                set: function(t) {
                    $t.fx.step[t.prop] ? $t.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[$t.cssProps[t.prop]] && !$t.cssHooks[t.prop] ? t.elem[t.prop] = t.now : $t.style(t.elem, t.prop, t.now + t.unit);
                }
            }
        }, U.propHooks.scrollTop = U.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
            }
        }, $t.easing = {
            linear: function(t) {
                return t;
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2;
            },
            _default: "swing"
        }, $t.fx = U.prototype.init, $t.fx.step = {};
        var ve, $e, ye = /^(?:toggle|show|hide)$/, be = /queueHooks$/;
        $t.Animation = $t.extend(Y, {
            tweeners: {
                "*": [ function(t, e) {
                    var n = this.createTween(t, e);
                    return y(n.elem, t, Ut.exec(e), n), n;
                } ]
            },
            tweener: function(t, e) {
                $t.isFunction(t) ? (e = t, t = [ "*" ]) : t = t.match(Nt);
                for (var n, r = 0, i = t.length; r < i; r++) n = t[r], Y.tweeners[n] = Y.tweeners[n] || [], 
                Y.tweeners[n].unshift(e);
            },
            prefilters: [ K ],
            prefilter: function(t, e) {
                e ? Y.prefilters.unshift(t) : Y.prefilters.push(t);
            }
        }), $t.speed = function(t, e, n) {
            var r = t && "object" == typeof t ? $t.extend({}, t) : {
                complete: n || !n && e || $t.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !$t.isFunction(e) && e
            };
            return $t.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in $t.fx.speeds ? r.duration = $t.fx.speeds[r.duration] : r.duration = $t.fx.speeds._default), 
            null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                $t.isFunction(r.old) && r.old.call(this), r.queue && $t.dequeue(this, r.queue);
            }, r;
        }, $t.fn.extend({
            fadeTo: function(t, e, n, r) {
                return this.filter(Bt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, r);
            },
            animate: function(t, e, n, r) {
                var i = $t.isEmptyObject(t), o = $t.speed(e, n, r), a = function() {
                    var e = Y(this, $t.extend({}, t), o);
                    (i || Vt.get(this, "finish")) && e.stop(!0);
                };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function(t, e, n) {
                var r = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n);
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), 
                this.each(function() {
                    var e = !0, i = null != t && t + "queueHooks", o = $t.timers, a = Vt.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && be.test(i) && r(a[i]);
                    for (i = o.length; i--; ) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), 
                    e = !1, o.splice(i, 1));
                    !e && n || $t.dequeue(this, t);
                });
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, n = Vt.get(this), r = n[t + "queue"], i = n[t + "queueHooks"], o = $t.timers, a = r ? r.length : 0;
                    for (n.finish = !0, $t.queue(this, t, []), i && i.stop && i.stop.call(this, !0), 
                    e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), 
                    o.splice(e, 1));
                    for (e = 0; e < a; e++) r[e] && r[e].finish && r[e].finish.call(this);
                    delete n.finish;
                });
            }
        }), $t.each([ "toggle", "show", "hide" ], function(t, e) {
            var n = $t.fn[e];
            $t.fn[e] = function(t, r, i) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(z(e, !0), t, r, i);
            };
        }), $t.each({
            slideDown: z("show"),
            slideUp: z("hide"),
            slideToggle: z("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            $t.fn[t] = function(t, n, r) {
                return this.animate(e, t, n, r);
            };
        }), $t.timers = [], $t.fx.tick = function() {
            var t, e = 0, n = $t.timers;
            for (ve = $t.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || $t.fx.stop(), ve = void 0;
        }, $t.fx.timer = function(t) {
            $t.timers.push(t), $t.fx.start();
        }, $t.fx.interval = 13, $t.fx.start = function() {
            $e || ($e = !0, q());
        }, $t.fx.stop = function() {
            $e = null;
        }, $t.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, $t.fn.delay = function(t, e) {
            return t = $t.fx ? $t.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, r) {
                var i = n.setTimeout(e, t);
                r.stop = function() {
                    n.clearTimeout(i);
                };
            });
        }, function() {
            var t = at.createElement("input"), e = at.createElement("select"), n = e.appendChild(at.createElement("option"));
            t.type = "checkbox", vt.checkOn = "" !== t.value, vt.optSelected = n.selected, t = at.createElement("input"), 
            t.value = "t", t.type = "radio", vt.radioValue = "t" === t.value;
        }();
        var we, Ee = $t.expr.attrHandle;
        $t.fn.extend({
            attr: function(t, e) {
                return Lt(this, $t.attr, t, e, arguments.length > 1);
            },
            removeAttr: function(t) {
                return this.each(function() {
                    $t.removeAttr(this, t);
                });
            }
        }), $t.extend({
            attr: function(t, e, n) {
                var r, i, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? $t.prop(t, e, n) : (1 === o && $t.isXMLDoc(t) || (i = $t.attrHooks[e.toLowerCase()] || ($t.expr.match.bool.test(e) ? we : void 0)), 
                void 0 !== n ? null === n ? void $t.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), 
                n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = $t.find.attr(t, e), 
                null == r ? void 0 : r));
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!vt.radioValue && "radio" === e && u(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e;
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, r = 0, i = e && e.match(Nt);
                if (i && 1 === t.nodeType) for (;n = i[r++]; ) t.removeAttribute(n);
            }
        }), we = {
            set: function(t, e, n) {
                return !1 === e ? $t.removeAttr(t, n) : t.setAttribute(n, n), n;
            }
        }, $t.each($t.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = Ee[e] || $t.find.attr;
            Ee[e] = function(t, e, r) {
                var i, o, a = e.toLowerCase();
                return r || (o = Ee[a], Ee[a] = i, i = null != n(t, e, r) ? a : null, Ee[a] = o), 
                i;
            };
        });
        var xe = /^(?:input|select|textarea|button)$/i, Ce = /^(?:a|area)$/i;
        $t.fn.extend({
            prop: function(t, e) {
                return Lt(this, $t.prop, t, e, arguments.length > 1);
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[$t.propFix[t] || t];
                });
            }
        }), $t.extend({
            prop: function(t, e, n) {
                var r, i, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && $t.isXMLDoc(t) || (e = $t.propFix[e] || e, 
                i = $t.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e];
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = $t.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : xe.test(t.nodeName) || Ce.test(t.nodeName) && t.href ? 0 : -1;
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), vt.optSelected || ($t.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            }
        }), $t.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
            $t.propFix[this.toLowerCase()] = this;
        }), $t.fn.extend({
            addClass: function(t) {
                var e, n, r, i, o, a, s, u = 0;
                if ($t.isFunction(t)) return this.each(function(e) {
                    $t(this).addClass(t.call(this, e, J(this)));
                });
                if ("string" == typeof t && t) for (e = t.match(Nt) || []; n = this[u++]; ) if (i = J(n), 
                r = 1 === n.nodeType && " " + X(i) + " ") {
                    for (a = 0; o = e[a++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    s = X(r), i !== s && n.setAttribute("class", s);
                }
                return this;
            },
            removeClass: function(t) {
                var e, n, r, i, o, a, s, u = 0;
                if ($t.isFunction(t)) return this.each(function(e) {
                    $t(this).removeClass(t.call(this, e, J(this)));
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t) for (e = t.match(Nt) || []; n = this[u++]; ) if (i = J(n), 
                r = 1 === n.nodeType && " " + X(i) + " ") {
                    for (a = 0; o = e[a++]; ) for (;r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
                    s = X(r), i !== s && n.setAttribute("class", s);
                }
                return this;
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : $t.isFunction(t) ? this.each(function(n) {
                    $t(this).toggleClass(t.call(this, n, J(this), e), e);
                }) : this.each(function() {
                    var e, r, i, o;
                    if ("string" === n) for (r = 0, i = $t(this), o = t.match(Nt) || []; e = o[r++]; ) i.hasClass(e) ? i.removeClass(e) : i.addClass(e); else void 0 !== t && "boolean" !== n || (e = J(this), 
                    e && Vt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Vt.get(this, "__className__") || ""));
                });
            },
            hasClass: function(t) {
                var e, n, r = 0;
                for (e = " " + t + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + X(J(n)) + " ").indexOf(e) > -1) return !0;
                return !1;
            }
        });
        var _e = /\r/g;
        $t.fn.extend({
            val: function(t) {
                var e, n, r, i = this[0];
                {
                    if (arguments.length) return r = $t.isFunction(t), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? t.call(this, n, $t(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = $t.map(i, function(t) {
                            return null == t ? "" : t + "";
                        })), (e = $t.valHooks[this.type] || $t.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i));
                    });
                    if (i) return (e = $t.valHooks[i.type] || $t.valHooks[i.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, 
                    "string" == typeof n ? n.replace(_e, "") : null == n ? "" : n);
                }
            }
        }), $t.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = $t.find.attr(t, "value");
                        return null != e ? e : X($t.text(t));
                    }
                },
                select: {
                    get: function(t) {
                        var e, n, r, i = t.options, o = t.selectedIndex, a = "select-one" === t.type, s = a ? null : [], l = a ? o + 1 : i.length;
                        for (r = o < 0 ? l : a ? o : 0; r < l; r++) if (n = i[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !u(n.parentNode, "optgroup"))) {
                            if (e = $t(n).val(), a) return e;
                            s.push(e);
                        }
                        return s;
                    },
                    set: function(t, e) {
                        for (var n, r, i = t.options, o = $t.makeArray(e), a = i.length; a--; ) r = i[a], 
                        (r.selected = $t.inArray($t.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), o;
                    }
                }
            }
        }), $t.each([ "radio", "checkbox" ], function() {
            $t.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = $t.inArray($t(t).val(), e) > -1;
                }
            }, vt.checkOn || ($t.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value;
            });
        });
        var Te = /^(?:focusinfocus|focusoutblur)$/;
        $t.extend($t.event, {
            trigger: function(t, e, r, i) {
                var o, a, s, u, l, c, f, h = [ r || at ], d = pt.call(t, "type") ? t.type : t, p = pt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = s = r = r || at, 3 !== r.nodeType && 8 !== r.nodeType && !Te.test(d + $t.event.triggered) && (d.indexOf(".") > -1 && (p = d.split("."), 
                d = p.shift(), p.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[$t.expando] ? t : new $t.Event(d, "object" == typeof t && t), 
                t.isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                t.result = void 0, t.target || (t.target = r), e = null == e ? [ t ] : $t.makeArray(e, [ t ]), 
                f = $t.event.special[d] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, e))) {
                    if (!i && !f.noBubble && !$t.isWindow(r)) {
                        for (u = f.delegateType || d, Te.test(u + d) || (a = a.parentNode); a; a = a.parentNode) h.push(a), 
                        s = a;
                        s === (r.ownerDocument || at) && h.push(s.defaultView || s.parentWindow || n);
                    }
                    for (o = 0; (a = h[o++]) && !t.isPropagationStopped(); ) t.type = o > 1 ? u : f.bindType || d, 
                    c = (Vt.get(a, "events") || {})[t.type] && Vt.get(a, "handle"), c && c.apply(a, e), 
                    (c = l && a[l]) && c.apply && Pt(a) && (t.result = c.apply(a, e), !1 === t.result && t.preventDefault());
                    return t.type = d, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), e) || !Pt(r) || l && $t.isFunction(r[d]) && !$t.isWindow(r) && (s = r[l], 
                    s && (r[l] = null), $t.event.triggered = d, r[d](), $t.event.triggered = void 0, 
                    s && (r[l] = s)), t.result;
                }
            },
            simulate: function(t, e, n) {
                var r = $t.extend(new $t.Event(), n, {
                    type: t,
                    isSimulated: !0
                });
                $t.event.trigger(r, null, e);
            }
        }), $t.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    $t.event.trigger(t, e, this);
                });
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return $t.event.trigger(t, e, n, !0);
            }
        }), $t.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            $t.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
            };
        }), $t.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t);
            }
        }), vt.focusin = "onfocusin" in n, vt.focusin || $t.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                $t.event.simulate(e, t.target, $t.event.fix(t));
            };
            $t.event.special[e] = {
                setup: function() {
                    var r = this.ownerDocument || this, i = Vt.access(r, e);
                    i || r.addEventListener(t, n, !0), Vt.access(r, e, (i || 0) + 1);
                },
                teardown: function() {
                    var r = this.ownerDocument || this, i = Vt.access(r, e) - 1;
                    i ? Vt.access(r, e, i) : (r.removeEventListener(t, n, !0), Vt.remove(r, e));
                }
            };
        });
        var Se = n.location, Ae = $t.now(), Oe = /\?/;
        $t.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = new n.DOMParser().parseFromString(t, "text/xml");
            } catch (t) {
                e = void 0;
            }
            return e && !e.getElementsByTagName("parsererror").length || $t.error("Invalid XML: " + t), 
            e;
        };
        var ke = /\[\]$/, De = /\r?\n/g, Ie = /^(?:submit|button|image|reset|file)$/i, Ne = /^(?:input|select|textarea|keygen)/i;
        $t.param = function(t, e) {
            var n, r = [], i = function(t, e) {
                var n = $t.isFunction(e) ? e() : e;
                r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
            };
            if (Array.isArray(t) || t.jquery && !$t.isPlainObject(t)) $t.each(t, function() {
                i(this.name, this.value);
            }); else for (n in t) Z(n, t[n], e, i);
            return r.join("&");
        }, $t.fn.extend({
            serialize: function() {
                return $t.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = $t.prop(this, "elements");
                    return t ? $t.makeArray(t) : this;
                }).filter(function() {
                    var t = this.type;
                    return this.name && !$t(this).is(":disabled") && Ne.test(this.nodeName) && !Ie.test(t) && (this.checked || !Kt.test(t));
                }).map(function(t, e) {
                    var n = $t(this).val();
                    return null == n ? null : Array.isArray(n) ? $t.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(De, "\r\n")
                        };
                    }) : {
                        name: e.name,
                        value: n.replace(De, "\r\n")
                    };
                }).get();
            }
        });
        var Me = /%20/g, je = /#.*$/, Le = /([?&])_=[^&]*/, Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ve = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Re = /^(?:GET|HEAD)$/, He = /^\/\//, Fe = {}, We = {}, Ue = "*/".concat("*"), qe = at.createElement("a");
        qe.href = Se.href, $t.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Se.href,
                type: "GET",
                isLocal: Ve.test(Se.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ue,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": $t.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? nt(nt(t, $t.ajaxSettings), e) : nt($t.ajaxSettings, t);
            },
            ajaxPrefilter: tt(Fe),
            ajaxTransport: tt(We),
            ajax: function(t, e) {
                function r(t, e, r, s) {
                    var l, h, d, b, w, E = e;
                    c || (c = !0, u && n.clearTimeout(u), i = void 0, a = s || "", x.readyState = t > 0 ? 4 : 0, 
                    l = t >= 200 && t < 300 || 304 === t, r && (b = rt(p, x, r)), b = it(p, b, x, l), 
                    l ? (p.ifModified && (w = x.getResponseHeader("Last-Modified"), w && ($t.lastModified[o] = w), 
                    (w = x.getResponseHeader("etag")) && ($t.etag[o] = w)), 204 === t || "HEAD" === p.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = b.state, 
                    h = b.data, d = b.error, l = !d)) : (d = E, !t && E || (E = "error", t < 0 && (t = 0))), 
                    x.status = t, x.statusText = (e || E) + "", l ? v.resolveWith(g, [ h, E, x ]) : v.rejectWith(g, [ x, E, d ]), 
                    x.statusCode(y), y = void 0, f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [ x, p, l ? h : d ]), 
                    $.fireWith(g, [ x, E ]), f && (m.trigger("ajaxComplete", [ x, p ]), --$t.active || $t.event.trigger("ajaxStop")));
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, o, a, s, u, l, c, f, h, d, p = $t.ajaxSetup({}, e), g = p.context || p, m = p.context && (g.nodeType || g.jquery) ? $t(g) : $t.event, v = $t.Deferred(), $ = $t.Callbacks("once memory"), y = p.statusCode || {}, b = {}, w = {}, E = "canceled", x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (c) {
                            if (!s) for (s = {}; e = Pe.exec(a); ) s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()];
                        }
                        return null == e ? null : e;
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null;
                    },
                    setRequestHeader: function(t, e) {
                        return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, b[t] = e), 
                        this;
                    },
                    overrideMimeType: function(t) {
                        return null == c && (p.mimeType = t), this;
                    },
                    statusCode: function(t) {
                        var e;
                        if (t) if (c) x.always(t[x.status]); else for (e in t) y[e] = [ y[e], t[e] ];
                        return this;
                    },
                    abort: function(t) {
                        var e = t || E;
                        return i && i.abort(e), r(0, e), this;
                    }
                };
                if (v.promise(x), p.url = ((t || p.url || Se.href) + "").replace(He, Se.protocol + "//"), 
                p.type = e.method || e.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Nt) || [ "" ], 
                null == p.crossDomain) {
                    l = at.createElement("a");
                    try {
                        l.href = p.url, l.href = l.href, p.crossDomain = qe.protocol + "//" + qe.host != l.protocol + "//" + l.host;
                    } catch (t) {
                        p.crossDomain = !0;
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = $t.param(p.data, p.traditional)), 
                et(Fe, p, e, x), c) return x;
                f = $t.event && p.global, f && 0 == $t.active++ && $t.event.trigger("ajaxStart"), 
                p.type = p.type.toUpperCase(), p.hasContent = !Re.test(p.type), o = p.url.replace(je, ""), 
                p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Me, "+")) : (d = p.url.slice(o.length), 
                p.data && (o += (Oe.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Le, "$1"), 
                d = (Oe.test(o) ? "&" : "?") + "_=" + Ae++ + d), p.url = o + d), p.ifModified && ($t.lastModified[o] && x.setRequestHeader("If-Modified-Since", $t.lastModified[o]), 
                $t.etag[o] && x.setRequestHeader("If-None-Match", $t.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && x.setRequestHeader("Content-Type", p.contentType), 
                x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ue + "; q=0.01" : "") : p.accepts["*"]);
                for (h in p.headers) x.setRequestHeader(h, p.headers[h]);
                if (p.beforeSend && (!1 === p.beforeSend.call(g, x, p) || c)) return x.abort();
                if (E = "abort", $.add(p.complete), x.done(p.success), x.fail(p.error), i = et(We, p, e, x)) {
                    if (x.readyState = 1, f && m.trigger("ajaxSend", [ x, p ]), c) return x;
                    p.async && p.timeout > 0 && (u = n.setTimeout(function() {
                        x.abort("timeout");
                    }, p.timeout));
                    try {
                        c = !1, i.send(b, r);
                    } catch (t) {
                        if (c) throw t;
                        r(-1, t);
                    }
                } else r(-1, "No Transport");
                return x;
            },
            getJSON: function(t, e, n) {
                return $t.get(t, e, n, "json");
            },
            getScript: function(t, e) {
                return $t.get(t, void 0, e, "script");
            }
        }), $t.each([ "get", "post" ], function(t, e) {
            $t[e] = function(t, n, r, i) {
                return $t.isFunction(n) && (i = i || r, r = n, n = void 0), $t.ajax($t.extend({
                    url: t,
                    type: e,
                    dataType: i,
                    data: n,
                    success: r
                }, $t.isPlainObject(t) && t));
            };
        }), $t._evalUrl = function(t) {
            return $t.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            });
        }, $t.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && ($t.isFunction(t) && (t = t.call(this[0])), e = $t(t, this[0].ownerDocument).eq(0).clone(!0), 
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                    return t;
                }).append(this)), this;
            },
            wrapInner: function(t) {
                return $t.isFunction(t) ? this.each(function(e) {
                    $t(this).wrapInner(t.call(this, e));
                }) : this.each(function() {
                    var e = $t(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t);
                });
            },
            wrap: function(t) {
                var e = $t.isFunction(t);
                return this.each(function(n) {
                    $t(this).wrapAll(e ? t.call(this, n) : t);
                });
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    $t(this).replaceWith(this.childNodes);
                }), this;
            }
        }), $t.expr.pseudos.hidden = function(t) {
            return !$t.expr.pseudos.visible(t);
        }, $t.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
        }, $t.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest();
            } catch (t) {}
        };
        var Be = {
            0: 200,
            1223: 204
        }, ze = $t.ajaxSettings.xhr();
        vt.cors = !!ze && "withCredentials" in ze, vt.ajax = ze = !!ze, $t.ajaxTransport(function(t) {
            var e, r;
            if (vt.cors || ze && !t.crossDomain) return {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i) s.setRequestHeader(a, i[a]);
                    e = function(t) {
                        return function() {
                            e && (e = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Be[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()));
                        };
                    }, s.onload = e(), r = s.onerror = e("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && n.setTimeout(function() {
                            e && r();
                        });
                    }, e = e("abort");
                    try {
                        s.send(t.hasContent && t.data || null);
                    } catch (t) {
                        if (e) throw t;
                    }
                },
                abort: function() {
                    e && e();
                }
            };
        }), $t.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1);
        }), $t.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return $t.globalEval(t), t;
                }
            }
        }), $t.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
        }), $t.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function(r, i) {
                        e = $t("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type);
                        }), at.head.appendChild(e[0]);
                    },
                    abort: function() {
                        n && n();
                    }
                };
            }
        });
        var Ge = [], Ke = /(=)\?(?=&|$)|\?\?/;
        $t.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ge.pop() || $t.expando + "_" + Ae++;
                return this[t] = !0, t;
            }
        }), $t.ajaxPrefilter("json jsonp", function(t, e, r) {
            var i, o, a, s = !1 !== t.jsonp && (Ke.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ke.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = $t.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
            s ? t[s] = t[s].replace(Ke, "$1" + i) : !1 !== t.jsonp && (t.url += (Oe.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), 
            t.converters["script json"] = function() {
                return a || $t.error(i + " was not called"), a[0];
            }, t.dataTypes[0] = "json", o = n[i], n[i] = function() {
                a = arguments;
            }, r.always(function() {
                void 0 === o ? $t(n).removeProp(i) : n[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, 
                Ge.push(i)), a && $t.isFunction(o) && o(a[0]), a = o = void 0;
            }), "script";
        }), vt.createHTMLDocument = function() {
            var t = at.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length;
        }(), $t.parseHTML = function(t, e, n) {
            if ("string" != typeof t) return [];
            "boolean" == typeof e && (n = e, e = !1);
            var r, i, o;
            return e || (vt.createHTMLDocument ? (e = at.implementation.createHTMLDocument(""), 
            r = e.createElement("base"), r.href = at.location.href, e.head.appendChild(r)) : e = at), 
            i = St.exec(t), o = !n && [], i ? [ e.createElement(i[1]) ] : (i = C([ t ], e, o), 
            o && o.length && $t(o).remove(), $t.merge([], i.childNodes));
        }, $t.fn.load = function(t, e, n) {
            var r, i, o, a = this, s = t.indexOf(" ");
            return s > -1 && (r = X(t.slice(s)), t = t.slice(0, s)), $t.isFunction(e) ? (n = e, 
            e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && $t.ajax({
                url: t,
                type: i || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, a.html(r ? $t("<div>").append($t.parseHTML(t)).find(r) : t);
            }).always(n && function(t, e) {
                a.each(function() {
                    n.apply(this, o || [ t.responseText, e, t ]);
                });
            }), this;
        }, $t.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(t, e) {
            $t.fn[e] = function(t) {
                return this.on(e, t);
            };
        }), $t.expr.pseudos.animated = function(t) {
            return $t.grep($t.timers, function(e) {
                return t === e.elem;
            }).length;
        }, $t.offset = {
            setOffset: function(t, e, n) {
                var r, i, o, a, s, u, l, c = $t.css(t, "position"), f = $t(t), h = {};
                "static" === c && (t.style.position = "relative"), s = f.offset(), o = $t.css(t, "top"), 
                u = $t.css(t, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, 
                l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), 
                $t.isFunction(e) && (e = e.call(t, n, $t.extend({}, s))), null != e.top && (h.top = e.top - s.top + a), 
                null != e.left && (h.left = e.left - s.left + i), "using" in e ? e.using.call(t, h) : f.css(h);
            }
        }, $t.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    $t.offset.setOffset(this, t, e);
                });
                var e, n, r, i, o = this[0];
                if (o) return o.getClientRects().length ? (r = o.getBoundingClientRect(), e = o.ownerDocument, 
                n = e.documentElement, i = e.defaultView, {
                    top: r.top + i.pageYOffset - n.clientTop,
                    left: r.left + i.pageXOffset - n.clientLeft
                }) : {
                    top: 0,
                    left: 0
                };
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0], r = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === $t.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), 
                    e = this.offset(), u(t[0], "html") || (r = t.offset()), r = {
                        top: r.top + $t.css(t[0], "borderTopWidth", !0),
                        left: r.left + $t.css(t[0], "borderLeftWidth", !0)
                    }), {
                        top: e.top - r.top - $t.css(n, "marginTop", !0),
                        left: e.left - r.left - $t.css(n, "marginLeft", !0)
                    };
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === $t.css(t, "position"); ) t = t.offsetParent;
                    return t || Zt;
                });
            }
        }), $t.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            $t.fn[t] = function(r) {
                return Lt(this, function(t, r, i) {
                    var o;
                    if ($t.isWindow(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === i) return o ? o[e] : t[r];
                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : t[r] = i;
                }, t, r, arguments.length);
            };
        }), $t.each([ "top", "left" ], function(t, e) {
            $t.cssHooks[e] = P(vt.pixelPosition, function(t, n) {
                if (n) return n = L(t, e), le.test(n) ? $t(t).position()[e] + "px" : n;
            });
        }), $t.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            $t.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, r) {
                $t.fn[r] = function(i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return Lt(this, function(e, n, i) {
                        var o;
                        return $t.isWindow(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, 
                        Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? $t.css(e, n, s) : $t.style(e, n, i, s);
                    }, e, a ? i : void 0, a);
                };
            });
        }), $t.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n);
            },
            unbind: function(t, e) {
                return this.off(t, null, e);
            },
            delegate: function(t, e, n, r) {
                return this.on(e, t, n, r);
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
            }
        }), $t.holdReady = function(t) {
            t ? $t.readyWait++ : $t.ready(!0);
        }, $t.isArray = Array.isArray, $t.parseJSON = JSON.parse, $t.nodeName = u, r = [], 
        void 0 !== (i = function() {
            return $t;
        }.apply(e, r)) && (t.exports = i);
        var Qe = n.jQuery, Ye = n.$;
        return $t.noConflict = function(t) {
            return n.$ === $t && (n.$ = Ye), t && n.jQuery === $t && (n.jQuery = Qe), $t;
        }, o || (n.jQuery = n.$ = $t), $t;
    });
}, function(t, e, n) {
    var r, i;
    /*! tether 1.4.0 */
    !function(o, a) {
        r = a, void 0 !== (i = "function" == typeof r ? r.call(e, n, e, t) : r) && (t.exports = i);
    }(0, function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function i(t) {
            var e = t.getBoundingClientRect(), n = {};
            for (var r in e) n[r] = e[r];
            if (t.ownerDocument !== document) {
                var o = t.ownerDocument.defaultView.frameElement;
                if (o) {
                    var a = i(o);
                    n.top += a.top, n.bottom += a.top, n.left += a.left, n.right += a.left;
                }
            }
            return n;
        }
        function o(t) {
            var e = getComputedStyle(t) || {}, n = e.position, r = [];
            if ("fixed" === n) return [ t ];
            for (var i = t; (i = i.parentNode) && i && 1 === i.nodeType; ) {
                var o = void 0;
                try {
                    o = getComputedStyle(i);
                } catch (t) {}
                if (void 0 === o || null === o) return r.push(i), r;
                var a = o, s = a.overflow, u = a.overflowX;
                /(auto|scroll)/.test(s + a.overflowY + u) && ("absolute" !== n || [ "relative", "absolute", "fixed" ].indexOf(o.position) >= 0) && r.push(i);
            }
            return r.push(t.ownerDocument.body), t.ownerDocument !== document && r.push(t.ownerDocument.defaultView), 
            r;
        }
        function a() {
            _ && document.body.removeChild(_), _ = null;
        }
        function s(t) {
            var e = void 0;
            t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
            var n = e.documentElement, r = i(t), o = A();
            return r.top -= o.top, r.left -= o.left, void 0 === r.width && (r.width = document.body.scrollWidth - r.left - r.right), 
            void 0 === r.height && (r.height = document.body.scrollHeight - r.top - r.bottom), 
            r.top = r.top - n.clientTop, r.left = r.left - n.clientLeft, r.right = e.body.clientWidth - r.width - r.left, 
            r.bottom = e.body.clientHeight - r.height - r.top, r;
        }
        function u(t) {
            return t.offsetParent || document.documentElement;
        }
        function l() {
            if (O) return O;
            var t = document.createElement("div");
            t.style.width = "100%", t.style.height = "200px";
            var e = document.createElement("div");
            c(e.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }), e.appendChild(t), document.body.appendChild(e);
            var n = t.offsetWidth;
            e.style.overflow = "scroll";
            var r = t.offsetWidth;
            n === r && (r = e.clientWidth), document.body.removeChild(e);
            var i = n - r;
            return O = {
                width: i,
                height: i
            };
        }
        function c() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], e = [];
            return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function(e) {
                if (e) for (var n in e) ({}).hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }), t;
        }
        function f(t, e) {
            if (void 0 !== t.classList) e.split(" ").forEach(function(e) {
                e.trim() && t.classList.remove(e);
            }); else {
                var n = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"), r = p(t).replace(n, " ");
                g(t, r);
            }
        }
        function h(t, e) {
            if (void 0 !== t.classList) e.split(" ").forEach(function(e) {
                e.trim() && t.classList.add(e);
            }); else {
                f(t, e);
                var n = p(t) + " " + e;
                g(t, n);
            }
        }
        function d(t, e) {
            if (void 0 !== t.classList) return t.classList.contains(e);
            var n = p(t);
            return new RegExp("(^| )" + e + "( |$)", "gi").test(n);
        }
        function p(t) {
            return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className;
        }
        function g(t, e) {
            t.setAttribute("class", e);
        }
        function m(t, e, n) {
            n.forEach(function(n) {
                -1 === e.indexOf(n) && d(t, n) && f(t, n);
            }), e.forEach(function(e) {
                d(t, e) || h(t, e);
            });
        }
        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function v(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        function $(t, e) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            return t + n >= e && e >= t - n;
        }
        function y() {
            return "undefined" != typeof performance && void 0 !== performance.now ? performance.now() : +new Date();
        }
        function b() {
            for (var t = {
                top: 0,
                left: 0
            }, e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return n.forEach(function(e) {
                var n = e.top, r = e.left;
                "string" == typeof n && (n = parseFloat(n, 10)), "string" == typeof r && (r = parseFloat(r, 10)), 
                t.top += n, t.left += r;
            }), t;
        }
        function w(t, e) {
            return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), 
            "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), 
            t;
        }
        function E(t, e) {
            return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [ pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset ]), 
            e === document && (e = e.documentElement), void 0 !== e.nodeType && function() {
                var t = e, n = s(e), r = n, i = getComputedStyle(e);
                if (e = [ r.left, r.top, n.width + r.left, n.height + r.top ], t.ownerDocument !== document) {
                    var o = t.ownerDocument.defaultView;
                    e[0] += o.pageXOffset, e[1] += o.pageYOffset, e[2] += o.pageXOffset, e[3] += o.pageYOffset;
                }
                Q.forEach(function(t, n) {
                    t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[n] += parseFloat(i["border" + t + "Width"]) : e[n] -= parseFloat(i["border" + t + "Width"]);
                });
            }(), e;
        }
        var x = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(t, r.key, r);
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
            };
        }(), C = void 0;
        void 0 === C && (C = {
            modules: []
        });
        var _ = null, T = function() {
            var t = 0;
            return function() {
                return ++t;
            };
        }(), S = {}, A = function() {
            var t = _;
            t && document.body.contains(t) || (t = document.createElement("div"), t.setAttribute("data-tether-id", T()), 
            c(t.style, {
                top: 0,
                left: 0,
                position: "absolute"
            }), document.body.appendChild(t), _ = t);
            var e = t.getAttribute("data-tether-id");
            return void 0 === S[e] && (S[e] = i(t), D(function() {
                delete S[e];
            })), S[e];
        }, O = null, k = [], D = function(t) {
            k.push(t);
        }, I = function() {
            for (var t = void 0; t = k.pop(); ) t();
        }, N = function() {
            function t() {
                r(this, t);
            }
            return x(t, [ {
                key: "on",
                value: function(t, e, n) {
                    var r = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                    void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[t] && (this.bindings[t] = []), 
                    this.bindings[t].push({
                        handler: e,
                        ctx: n,
                        once: r
                    });
                }
            }, {
                key: "once",
                value: function(t, e, n) {
                    this.on(t, e, n, !0);
                }
            }, {
                key: "off",
                value: function(t, e) {
                    if (void 0 !== this.bindings && void 0 !== this.bindings[t]) if (void 0 === e) delete this.bindings[t]; else for (var n = 0; n < this.bindings[t].length; ) this.bindings[t][n].handler === e ? this.bindings[t].splice(n, 1) : ++n;
                }
            }, {
                key: "trigger",
                value: function(t) {
                    if (void 0 !== this.bindings && this.bindings[t]) {
                        for (var e = 0, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                        for (;e < this.bindings[t].length; ) {
                            var o = this.bindings[t][e], a = o.handler, s = o.ctx, u = o.once, l = s;
                            void 0 === l && (l = this), a.apply(l, r), u ? this.bindings[t].splice(e, 1) : ++e;
                        }
                    }
                }
            } ]), t;
        }();
        C.Utils = {
            getActualBoundingClientRect: i,
            getScrollParents: o,
            getBounds: s,
            getOffsetParent: u,
            extend: c,
            addClass: h,
            removeClass: f,
            hasClass: d,
            updateClasses: m,
            defer: D,
            flush: I,
            uniqueId: T,
            Evented: N,
            getScrollBarSize: l,
            removeUtilElements: a
        };
        var M = function() {
            function t(t, e) {
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 
                    !e || n.length !== e); r = !0) ;
                } catch (t) {
                    i = !0, o = t;
                } finally {
                    try {
                        !r && s.return && s.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }
            return function(e, n) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), x = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(t, r.key, r);
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
            };
        }(), j = function(t, e, n) {
            for (var r = !0; r; ) {
                var i = t, o = e, a = n;
                r = !1, null === i && (i = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(i, o);
                if (void 0 !== s) {
                    if ("value" in s) return s.value;
                    var u = s.get;
                    if (void 0 === u) return;
                    return u.call(a);
                }
                var l = Object.getPrototypeOf(i);
                if (null === l) return;
                t = l, e = o, n = a, r = !0, s = l = void 0;
            }
        };
        if (void 0 === C) throw new Error("You must include the utils.js file before tether.js");
        var L = C.Utils, o = L.getScrollParents, s = L.getBounds, u = L.getOffsetParent, c = L.extend, h = L.addClass, f = L.removeClass, m = L.updateClasses, D = L.defer, I = L.flush, l = L.getScrollBarSize, a = L.removeUtilElements, P = function() {
            if ("undefined" == typeof document) return "";
            for (var t = document.createElement("div"), e = [ "transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform" ], n = 0; n < e.length; ++n) {
                var r = e[n];
                if (void 0 !== t.style[r]) return r;
            }
        }(), V = [], R = function() {
            V.forEach(function(t) {
                t.position(!1);
            }), I();
        };
        !function() {
            var t = null, e = null, n = null, r = function r() {
                if (void 0 !== e && e > 16) return e = Math.min(e - 16, 250), void (n = setTimeout(r, 250));
                void 0 !== t && y() - t < 10 || (null != n && (clearTimeout(n), n = null), t = y(), 
                R(), e = y() - t);
            };
            "undefined" != typeof window && void 0 !== window.addEventListener && [ "resize", "scroll", "touchmove" ].forEach(function(t) {
                window.addEventListener(t, r);
            });
        }();
        var H = {
            center: "center",
            left: "right",
            right: "left"
        }, F = {
            middle: "middle",
            top: "bottom",
            bottom: "top"
        }, W = {
            top: 0,
            left: 0,
            middle: "50%",
            center: "50%",
            bottom: "100%",
            right: "100%"
        }, U = function(t, e) {
            var n = t.left, r = t.top;
            return "auto" === n && (n = H[e.left]), "auto" === r && (r = F[e.top]), {
                left: n,
                top: r
            };
        }, q = function(t) {
            var e = t.left, n = t.top;
            return void 0 !== W[t.left] && (e = W[t.left]), void 0 !== W[t.top] && (n = W[t.top]), 
            {
                left: e,
                top: n
            };
        }, B = function(t) {
            var e = t.split(" "), n = M(e, 2);
            return {
                top: n[0],
                left: n[1]
            };
        }, z = B, G = function(t) {
            function e(t) {
                var n = this;
                r(this, e), j(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), 
                this.position = this.position.bind(this), V.push(this), this.history = [], this.setOptions(t, !1), 
                C.modules.forEach(function(t) {
                    void 0 !== t.initialize && t.initialize.call(n);
                }), this.position();
            }
            return v(e, t), x(e, [ {
                key: "getClass",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0], e = this.options.classes;
                    return void 0 !== e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t;
                }
            }, {
                key: "setOptions",
                value: function(t) {
                    var e = this, n = arguments.length <= 1 || void 0 === arguments[1] || arguments[1], r = {
                        offset: "0 0",
                        targetOffset: "0 0",
                        targetAttachment: "auto auto",
                        classPrefix: "tether"
                    };
                    this.options = c(r, t);
                    var i = this.options, a = i.element, s = i.target, u = i.targetModifier;
                    if (this.element = a, this.target = s, this.targetModifier = u, "viewport" === this.target ? (this.target = document.body, 
                    this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, 
                    this.targetModifier = "scroll-handle"), [ "element", "target" ].forEach(function(t) {
                        if (void 0 === e[t]) throw new Error("Tether Error: Both element and target must be defined");
                        void 0 !== e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]));
                    }), h(this.element, this.getClass("element")), !1 !== this.options.addTargetClasses && h(this.target, this.getClass("target")), 
                    !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                    this.targetAttachment = z(this.options.targetAttachment), this.attachment = z(this.options.attachment), 
                    this.offset = B(this.options.offset), this.targetOffset = B(this.options.targetOffset), 
                    void 0 !== this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [ this.target ] : this.scrollParents = o(this.target), 
                    !1 !== this.options.enabled && this.enable(n);
                }
            }, {
                key: "getTargetBounds",
                value: function() {
                    if (void 0 === this.targetModifier) return s(this.target);
                    if ("visible" === this.targetModifier) {
                        if (this.target === document.body) return {
                            top: pageYOffset,
                            left: pageXOffset,
                            height: innerHeight,
                            width: innerWidth
                        };
                        var t = s(this.target), e = {
                            height: t.height,
                            width: t.width,
                            top: t.top,
                            left: t.left
                        };
                        return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), 
                        e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), 
                        e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), 
                        e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), 
                        e.left < pageXOffset && (e.left = pageXOffset), e;
                    }
                    if ("scroll-handle" === this.targetModifier) {
                        var t = void 0, n = this.target;
                        n === document.body ? (n = document.documentElement, t = {
                            left: pageXOffset,
                            top: pageYOffset,
                            height: innerHeight,
                            width: innerWidth
                        }) : t = s(n);
                        var r = getComputedStyle(n), i = n.scrollWidth > n.clientWidth || [ r.overflow, r.overflowX ].indexOf("scroll") >= 0 || this.target !== document.body, o = 0;
                        i && (o = 15);
                        var a = t.height - parseFloat(r.borderTopWidth) - parseFloat(r.borderBottomWidth) - o, e = {
                            width: 15,
                            height: .975 * a * (a / n.scrollHeight),
                            left: t.left + t.width - parseFloat(r.borderLeftWidth) - 15
                        }, u = 0;
                        a < 408 && this.target === document.body && (u = -11e-5 * Math.pow(a, 2) - .00727 * a + 22.58), 
                        this.target !== document.body && (e.height = Math.max(e.height, 24));
                        var l = this.target.scrollTop / (n.scrollHeight - a);
                        return e.top = l * (a - e.height - u) + t.top + parseFloat(r.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), 
                        e;
                    }
                }
            }, {
                key: "clearCache",
                value: function() {
                    this._cache = {};
                }
            }, {
                key: "cache",
                value: function(t, e) {
                    return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[t] && (this._cache[t] = e.call(this)), 
                    this._cache[t];
                }
            }, {
                key: "enable",
                value: function() {
                    var t = this, e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    !1 !== this.options.addTargetClasses && h(this.target, this.getClass("enabled")), 
                    h(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function(e) {
                        e !== t.target.ownerDocument && e.addEventListener("scroll", t.position);
                    }), e && this.position();
                }
            }, {
                key: "disable",
                value: function() {
                    var t = this;
                    f(this.target, this.getClass("enabled")), f(this.element, this.getClass("enabled")), 
                    this.enabled = !1, void 0 !== this.scrollParents && this.scrollParents.forEach(function(e) {
                        e.removeEventListener("scroll", t.position);
                    });
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    this.disable(), V.forEach(function(e, n) {
                        e === t && V.splice(n, 1);
                    }), 0 === V.length && a();
                }
            }, {
                key: "updateAttachClasses",
                value: function(t, e) {
                    var n = this;
                    t = t || this.attachment, e = e || this.targetAttachment;
                    var r = [ "left", "top", "bottom", "right", "middle", "center" ];
                    void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), 
                    void 0 === this._addAttachClasses && (this._addAttachClasses = []);
                    var i = this._addAttachClasses;
                    t.top && i.push(this.getClass("element-attached") + "-" + t.top), t.left && i.push(this.getClass("element-attached") + "-" + t.left), 
                    e.top && i.push(this.getClass("target-attached") + "-" + e.top), e.left && i.push(this.getClass("target-attached") + "-" + e.left);
                    var o = [];
                    r.forEach(function(t) {
                        o.push(n.getClass("element-attached") + "-" + t), o.push(n.getClass("target-attached") + "-" + t);
                    }), D(function() {
                        void 0 !== n._addAttachClasses && (m(n.element, n._addAttachClasses, o), !1 !== n.options.addTargetClasses && m(n.target, n._addAttachClasses, o), 
                        delete n._addAttachClasses);
                    });
                }
            }, {
                key: "position",
                value: function() {
                    var t = this, e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    if (this.enabled) {
                        this.clearCache();
                        var n = U(this.targetAttachment, this.attachment);
                        this.updateAttachClasses(this.attachment, n);
                        var r = this.cache("element-bounds", function() {
                            return s(t.element);
                        }), i = r.width, o = r.height;
                        if (0 === i && 0 === o && void 0 !== this.lastSize) {
                            var a = this.lastSize;
                            i = a.width, o = a.height;
                        } else this.lastSize = {
                            width: i,
                            height: o
                        };
                        var c = this.cache("target-bounds", function() {
                            return t.getTargetBounds();
                        }), f = c, h = w(q(this.attachment), {
                            width: i,
                            height: o
                        }), d = w(q(n), f), p = w(this.offset, {
                            width: i,
                            height: o
                        }), g = w(this.targetOffset, f);
                        h = b(h, p), d = b(d, g);
                        for (var m = c.left + d.left - h.left, v = c.top + d.top - h.top, $ = 0; $ < C.modules.length; ++$) {
                            var y = C.modules[$], E = y.position.call(this, {
                                left: m,
                                top: v,
                                targetAttachment: n,
                                targetPos: c,
                                elementPos: r,
                                offset: h,
                                targetOffset: d,
                                manualOffset: p,
                                manualTargetOffset: g,
                                scrollbarSize: S,
                                attachment: this.attachment
                            });
                            if (!1 === E) return !1;
                            void 0 !== E && "object" == typeof E && (v = E.top, m = E.left);
                        }
                        var x = {
                            page: {
                                top: v,
                                left: m
                            },
                            viewport: {
                                top: v - pageYOffset,
                                bottom: pageYOffset - v - o + innerHeight,
                                left: m - pageXOffset,
                                right: pageXOffset - m - i + innerWidth
                            }
                        }, _ = this.target.ownerDocument, T = _.defaultView, S = void 0;
                        return T.innerHeight > _.documentElement.clientHeight && (S = this.cache("scrollbar-size", l), 
                        x.viewport.bottom -= S.height), T.innerWidth > _.documentElement.clientWidth && (S = this.cache("scrollbar-size", l), 
                        x.viewport.right -= S.width), -1 !== [ "", "static" ].indexOf(_.body.style.position) && -1 !== [ "", "static" ].indexOf(_.body.parentElement.style.position) || (x.page.bottom = _.body.scrollHeight - v - o, 
                        x.page.right = _.body.scrollWidth - m - i), void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && function() {
                            var e = t.cache("target-offsetparent", function() {
                                return u(t.target);
                            }), n = t.cache("target-offsetparent-bounds", function() {
                                return s(e);
                            }), r = getComputedStyle(e), i = n, o = {};
                            if ([ "Top", "Left", "Bottom", "Right" ].forEach(function(t) {
                                o[t.toLowerCase()] = parseFloat(r["border" + t + "Width"]);
                            }), n.right = _.body.scrollWidth - n.left - i.width + o.right, n.bottom = _.body.scrollHeight - n.top - i.height + o.bottom, 
                            x.page.top >= n.top + o.top && x.page.bottom >= n.bottom && x.page.left >= n.left + o.left && x.page.right >= n.right) {
                                var a = e.scrollTop, l = e.scrollLeft;
                                x.offset = {
                                    top: x.page.top - n.top + a - o.top,
                                    left: x.page.left - n.left + l - o.left
                                };
                            }
                        }(), this.move(x), this.history.unshift(x), this.history.length > 3 && this.history.pop(), 
                        e && I(), !0;
                    }
                }
            }, {
                key: "move",
                value: function(t) {
                    var e = this;
                    if (void 0 !== this.element.parentNode) {
                        var n = {};
                        for (var r in t) {
                            n[r] = {};
                            for (var i in t[r]) {
                                for (var o = !1, a = 0; a < this.history.length; ++a) {
                                    var s = this.history[a];
                                    if (void 0 !== s[r] && !$(s[r][i], t[r][i])) {
                                        o = !0;
                                        break;
                                    }
                                }
                                o || (n[r][i] = !0);
                            }
                        }
                        var l = {
                            top: "",
                            left: "",
                            right: "",
                            bottom: ""
                        }, f = function(t, n) {
                            if (!1 !== (void 0 !== e.options.optimizations ? e.options.optimizations.gpu : null)) {
                                var r = void 0, i = void 0;
                                t.top ? (l.top = 0, r = n.top) : (l.bottom = 0, r = -n.bottom), t.left ? (l.left = 0, 
                                i = n.left) : (l.right = 0, i = -n.right), window.matchMedia && (window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches || (i = Math.round(i), 
                                r = Math.round(r))), l[P] = "translateX(" + i + "px) translateY(" + r + "px)", "msTransform" !== P && (l[P] += " translateZ(0)");
                            } else t.top ? l.top = n.top + "px" : l.bottom = n.bottom + "px", t.left ? l.left = n.left + "px" : l.right = n.right + "px";
                        }, h = !1;
                        if ((n.page.top || n.page.bottom) && (n.page.left || n.page.right) ? (l.position = "absolute", 
                        f(n.page, t.page)) : (n.viewport.top || n.viewport.bottom) && (n.viewport.left || n.viewport.right) ? (l.position = "fixed", 
                        f(n.viewport, t.viewport)) : void 0 !== n.offset && n.offset.top && n.offset.left ? function() {
                            l.position = "absolute";
                            var r = e.cache("target-offsetparent", function() {
                                return u(e.target);
                            });
                            u(e.element) !== r && D(function() {
                                e.element.parentNode.removeChild(e.element), r.appendChild(e.element);
                            }), f(n.offset, t.offset), h = !0;
                        }() : (l.position = "absolute", f({
                            top: !0,
                            left: !0
                        }, t.page)), !h) if (this.options.bodyElement) this.options.bodyElement.appendChild(this.element); else {
                            for (var d = !0, p = this.element.parentNode; p && 1 === p.nodeType && "BODY" !== p.tagName; ) {
                                if ("static" !== getComputedStyle(p).position) {
                                    d = !1;
                                    break;
                                }
                                p = p.parentNode;
                            }
                            d || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element));
                        }
                        var g = {}, m = !1;
                        for (var i in l) {
                            var v = l[i];
                            this.element.style[i] !== v && (m = !0, g[i] = v);
                        }
                        m && D(function() {
                            c(e.element.style, g), e.trigger("repositioned");
                        });
                    }
                }
            } ]), e;
        }(N);
        G.modules = [], C.position = R;
        var K = c(G, C), M = function() {
            function t(t, e) {
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 
                    !e || n.length !== e); r = !0) ;
                } catch (t) {
                    i = !0, o = t;
                } finally {
                    try {
                        !r && s.return && s.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }
            return function(e, n) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), L = C.Utils, s = L.getBounds, c = L.extend, m = L.updateClasses, D = L.defer, Q = [ "left", "top", "right", "bottom" ];
        C.modules.push({
            position: function(t) {
                var e = this, n = t.top, r = t.left, i = t.targetAttachment;
                if (!this.options.constraints) return !0;
                var o = this.cache("element-bounds", function() {
                    return s(e.element);
                }), a = o.height, u = o.width;
                if (0 === u && 0 === a && void 0 !== this.lastSize) {
                    var l = this.lastSize;
                    u = l.width, a = l.height;
                }
                var f = this.cache("target-bounds", function() {
                    return e.getTargetBounds();
                }), h = f.height, d = f.width, p = [ this.getClass("pinned"), this.getClass("out-of-bounds") ];
                this.options.constraints.forEach(function(t) {
                    var e = t.outOfBoundsClass, n = t.pinnedClass;
                    e && p.push(e), n && p.push(n);
                }), p.forEach(function(t) {
                    [ "left", "top", "right", "bottom" ].forEach(function(e) {
                        p.push(t + "-" + e);
                    });
                });
                var g = [], v = c({}, i), $ = c({}, this.attachment);
                return this.options.constraints.forEach(function(t) {
                    var o = t.to, s = t.attachment, l = t.pin;
                    void 0 === s && (s = "");
                    var c = void 0, f = void 0;
                    if (s.indexOf(" ") >= 0) {
                        var p = s.split(" "), m = M(p, 2);
                        f = m[0], c = m[1];
                    } else c = f = s;
                    var y = E(e, o);
                    "target" !== f && "both" !== f || (n < y[1] && "top" === v.top && (n += h, v.top = "bottom"), 
                    n + a > y[3] && "bottom" === v.top && (n -= h, v.top = "top")), "together" === f && ("top" === v.top && ("bottom" === $.top && n < y[1] ? (n += h, 
                    v.top = "bottom", n += a, $.top = "top") : "top" === $.top && n + a > y[3] && n - (a - h) >= y[1] && (n -= a - h, 
                    v.top = "bottom", $.top = "bottom")), "bottom" === v.top && ("top" === $.top && n + a > y[3] ? (n -= h, 
                    v.top = "top", n -= a, $.top = "bottom") : "bottom" === $.top && n < y[1] && n + (2 * a - h) <= y[3] && (n += a - h, 
                    v.top = "top", $.top = "top")), "middle" === v.top && (n + a > y[3] && "top" === $.top ? (n -= a, 
                    $.top = "bottom") : n < y[1] && "bottom" === $.top && (n += a, $.top = "top"))), 
                    "target" !== c && "both" !== c || (r < y[0] && "left" === v.left && (r += d, v.left = "right"), 
                    r + u > y[2] && "right" === v.left && (r -= d, v.left = "left")), "together" === c && (r < y[0] && "left" === v.left ? "right" === $.left ? (r += d, 
                    v.left = "right", r += u, $.left = "left") : "left" === $.left && (r += d, v.left = "right", 
                    r -= u, $.left = "right") : r + u > y[2] && "right" === v.left ? "left" === $.left ? (r -= d, 
                    v.left = "left", r -= u, $.left = "right") : "right" === $.left && (r -= d, v.left = "left", 
                    r += u, $.left = "left") : "center" === v.left && (r + u > y[2] && "left" === $.left ? (r -= u, 
                    $.left = "right") : r < y[0] && "right" === $.left && (r += u, $.left = "left"))), 
                    "element" !== f && "both" !== f || (n < y[1] && "bottom" === $.top && (n += a, $.top = "top"), 
                    n + a > y[3] && "top" === $.top && (n -= a, $.top = "bottom")), "element" !== c && "both" !== c || (r < y[0] && ("right" === $.left ? (r += u, 
                    $.left = "left") : "center" === $.left && (r += u / 2, $.left = "left")), r + u > y[2] && ("left" === $.left ? (r -= u, 
                    $.left = "right") : "center" === $.left && (r -= u / 2, $.left = "right"))), "string" == typeof l ? l = l.split(",").map(function(t) {
                        return t.trim();
                    }) : !0 === l && (l = [ "top", "left", "right", "bottom" ]), l = l || [];
                    var b = [], w = [];
                    n < y[1] && (l.indexOf("top") >= 0 ? (n = y[1], b.push("top")) : w.push("top")), 
                    n + a > y[3] && (l.indexOf("bottom") >= 0 ? (n = y[3] - a, b.push("bottom")) : w.push("bottom")), 
                    r < y[0] && (l.indexOf("left") >= 0 ? (r = y[0], b.push("left")) : w.push("left")), 
                    r + u > y[2] && (l.indexOf("right") >= 0 ? (r = y[2] - u, b.push("right")) : w.push("right")), 
                    b.length && function() {
                        var t = void 0;
                        t = void 0 !== e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), 
                        g.push(t), b.forEach(function(e) {
                            g.push(t + "-" + e);
                        });
                    }(), w.length && function() {
                        var t = void 0;
                        t = void 0 !== e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), 
                        g.push(t), w.forEach(function(e) {
                            g.push(t + "-" + e);
                        });
                    }(), (b.indexOf("left") >= 0 || b.indexOf("right") >= 0) && ($.left = v.left = !1), 
                    (b.indexOf("top") >= 0 || b.indexOf("bottom") >= 0) && ($.top = v.top = !1), v.top === i.top && v.left === i.left && $.top === e.attachment.top && $.left === e.attachment.left || (e.updateAttachClasses($, v), 
                    e.trigger("update", {
                        attachment: $,
                        targetAttachment: v
                    }));
                }), D(function() {
                    !1 !== e.options.addTargetClasses && m(e.target, g, p), m(e.element, g, p);
                }), {
                    top: n,
                    left: r
                };
            }
        });
        var L = C.Utils, s = L.getBounds, m = L.updateClasses, D = L.defer;
        C.modules.push({
            position: function(t) {
                var e = this, n = t.top, r = t.left, i = this.cache("element-bounds", function() {
                    return s(e.element);
                }), o = i.height, a = i.width, u = this.getTargetBounds(), l = n + o, c = r + a, f = [];
                n <= u.bottom && l >= u.top && [ "left", "right" ].forEach(function(t) {
                    var e = u[t];
                    e !== r && e !== c || f.push(t);
                }), r <= u.right && c >= u.left && [ "top", "bottom" ].forEach(function(t) {
                    var e = u[t];
                    e !== n && e !== l || f.push(t);
                });
                var h = [], d = [], p = [ "left", "top", "right", "bottom" ];
                return h.push(this.getClass("abutted")), p.forEach(function(t) {
                    h.push(e.getClass("abutted") + "-" + t);
                }), f.length && d.push(this.getClass("abutted")), f.forEach(function(t) {
                    d.push(e.getClass("abutted") + "-" + t);
                }), D(function() {
                    !1 !== e.options.addTargetClasses && m(e.target, d, h), m(e.element, d, h);
                }), !0;
            }
        });
        var M = function() {
            function t(t, e) {
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 
                    !e || n.length !== e); r = !0) ;
                } catch (t) {
                    i = !0, o = t;
                } finally {
                    try {
                        !r && s.return && s.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }
            return function(e, n) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        return C.modules.push({
            position: function(t) {
                var e = t.top, n = t.left;
                if (this.options.shift) {
                    var r = this.options.shift;
                    "function" == typeof this.options.shift && (r = this.options.shift.call(this, {
                        top: e,
                        left: n
                    }));
                    var i = void 0, o = void 0;
                    if ("string" == typeof r) {
                        r = r.split(" "), r[1] = r[1] || r[0];
                        var a = r, s = M(a, 2);
                        i = s[0], o = s[1], i = parseFloat(i, 10), o = parseFloat(o, 10);
                    } else i = r.top, o = r.left;
                    return e += i, n += o, {
                        top: e,
                        left: n
                    };
                }
            }
        }), K;
    });
}, function(t, e) {
    /*!
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
    if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    +function(t) {
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }(jQuery), function() {
        function t(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e;
        }
        function e(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(t, r.key, r);
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
            };
        }(), o = function(t) {
            function e(t) {
                return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            function n(t) {
                return (t[0] || t).nodeType;
            }
            function r() {
                return {
                    bindType: a.end,
                    delegateType: a.end,
                    handle: function(e) {
                        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
                    }
                };
            }
            function i() {
                if (window.QUnit) return !1;
                var t = document.createElement("bootstrap");
                for (var e in s) if (void 0 !== t.style[e]) return {
                    end: s[e]
                };
                return !1;
            }
            function o(e) {
                var n = this, r = !1;
                return t(this).one(u.TRANSITION_END, function() {
                    r = !0;
                }), setTimeout(function() {
                    r || u.triggerTransitionEnd(n);
                }, e), this;
            }
            var a = !1, s = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            }, u = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) {
                    do {
                        t += ~~(1e6 * Math.random());
                    } while (document.getElementById(t));
                    return t;
                },
                getSelectorFromElement: function(t) {
                    var e = t.getAttribute("data-target");
                    return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), 
                    e;
                },
                reflow: function(t) {
                    return t.offsetHeight;
                },
                triggerTransitionEnd: function(e) {
                    t(e).trigger(a.end);
                },
                supportsTransitionEnd: function() {
                    return Boolean(a);
                },
                typeCheckConfig: function(t, r, i) {
                    for (var o in i) if (i.hasOwnProperty(o)) {
                        var a = i[o], s = r[o], u = s && n(s) ? "element" : e(s);
                        if (!new RegExp(a).test(u)) throw new Error(t.toUpperCase() + ': Option "' + o + '" provided type "' + u + '" but expected type "' + a + '".');
                    }
                }
            };
            return function() {
                a = i(), t.fn.emulateTransitionEnd = o, u.supportsTransitionEnd() && (t.event.special[u.TRANSITION_END] = r());
            }(), u;
        }(jQuery), a = (function(t) {
            var e = "alert", r = t.fn[e], a = {
                DISMISS: '[data-dismiss="alert"]'
            }, s = {
                CLOSE: "close.bs.alert",
                CLOSED: "closed.bs.alert",
                CLICK_DATA_API: "click.bs.alert.data-api"
            }, u = {
                ALERT: "alert",
                FADE: "fade",
                SHOW: "show"
            }, l = function() {
                function e(t) {
                    n(this, e), this._element = t;
                }
                return e.prototype.close = function(t) {
                    t = t || this._element;
                    var e = this._getRootElement(t);
                    this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
                }, e.prototype.dispose = function() {
                    t.removeData(this._element, "bs.alert"), this._element = null;
                }, e.prototype._getRootElement = function(e) {
                    var n = o.getSelectorFromElement(e), r = !1;
                    return n && (r = t(n)[0]), r || (r = t(e).closest("." + u.ALERT)[0]), r;
                }, e.prototype._triggerCloseEvent = function(e) {
                    var n = t.Event(s.CLOSE);
                    return t(e).trigger(n), n;
                }, e.prototype._removeElement = function(e) {
                    var n = this;
                    if (t(e).removeClass(u.SHOW), !o.supportsTransitionEnd() || !t(e).hasClass(u.FADE)) return void this._destroyElement(e);
                    t(e).one(o.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t);
                    }).emulateTransitionEnd(150);
                }, e.prototype._destroyElement = function(e) {
                    t(e).detach().trigger(s.CLOSED).remove();
                }, e._jQueryInterface = function(n) {
                    return this.each(function() {
                        var r = t(this), i = r.data("bs.alert");
                        i || (i = new e(this), r.data("bs.alert", i)), "close" === n && i[n](this);
                    });
                }, e._handleDismiss = function(t) {
                    return function(e) {
                        e && e.preventDefault(), t.close(this);
                    };
                }, i(e, null, [ {
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6";
                    }
                } ]), e;
            }();
            t(document).on(s.CLICK_DATA_API, a.DISMISS, l._handleDismiss(new l())), t.fn[e] = l._jQueryInterface, 
            t.fn[e].Constructor = l, t.fn[e].noConflict = function() {
                return t.fn[e] = r, l._jQueryInterface;
            };
        }(jQuery), function(t) {
            var e = "button", r = t.fn[e], o = {
                ACTIVE: "active",
                BUTTON: "btn",
                FOCUS: "focus"
            }, a = {
                DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                DATA_TOGGLE: '[data-toggle="buttons"]',
                INPUT: "input",
                ACTIVE: ".active",
                BUTTON: ".btn"
            }, s = {
                CLICK_DATA_API: "click.bs.button.data-api",
                FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
            }, u = function() {
                function e(t) {
                    n(this, e), this._element = t;
                }
                return e.prototype.toggle = function() {
                    var e = !0, n = t(this._element).closest(a.DATA_TOGGLE)[0];
                    if (n) {
                        var r = t(this._element).find(a.INPUT)[0];
                        if (r) {
                            if ("radio" === r.type) if (r.checked && t(this._element).hasClass(o.ACTIVE)) e = !1; else {
                                var i = t(n).find(a.ACTIVE)[0];
                                i && t(i).removeClass(o.ACTIVE);
                            }
                            e && (r.checked = !t(this._element).hasClass(o.ACTIVE), t(r).trigger("change")), 
                            r.focus();
                        }
                    }
                    this._element.setAttribute("aria-pressed", !t(this._element).hasClass(o.ACTIVE)), 
                    e && t(this._element).toggleClass(o.ACTIVE);
                }, e.prototype.dispose = function() {
                    t.removeData(this._element, "bs.button"), this._element = null;
                }, e._jQueryInterface = function(n) {
                    return this.each(function() {
                        var r = t(this).data("bs.button");
                        r || (r = new e(this), t(this).data("bs.button", r)), "toggle" === n && r[n]();
                    });
                }, i(e, null, [ {
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6";
                    }
                } ]), e;
            }();
            t(document).on(s.CLICK_DATA_API, a.DATA_TOGGLE_CARROT, function(e) {
                e.preventDefault();
                var n = e.target;
                t(n).hasClass(o.BUTTON) || (n = t(n).closest(a.BUTTON)), u._jQueryInterface.call(t(n), "toggle");
            }).on(s.FOCUS_BLUR_DATA_API, a.DATA_TOGGLE_CARROT, function(e) {
                var n = t(e.target).closest(a.BUTTON)[0];
                t(n).toggleClass(o.FOCUS, /^focus(in)?$/.test(e.type));
            }), t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function() {
                return t.fn[e] = r, u._jQueryInterface;
            };
        }(jQuery), function(t) {
            var e = "carousel", a = "bs.carousel", s = "." + a, u = t.fn[e], l = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0
            }, c = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean"
            }, f = {
                NEXT: "next",
                PREV: "prev",
                LEFT: "left",
                RIGHT: "right"
            }, h = {
                SLIDE: "slide" + s,
                SLID: "slid" + s,
                KEYDOWN: "keydown" + s,
                MOUSEENTER: "mouseenter" + s,
                MOUSELEAVE: "mouseleave" + s,
                LOAD_DATA_API: "load.bs.carousel.data-api",
                CLICK_DATA_API: "click.bs.carousel.data-api"
            }, d = {
                CAROUSEL: "carousel",
                ACTIVE: "active",
                SLIDE: "slide",
                RIGHT: "carousel-item-right",
                LEFT: "carousel-item-left",
                NEXT: "carousel-item-next",
                PREV: "carousel-item-prev",
                ITEM: "carousel-item"
            }, p = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]'
            }, g = function() {
                function u(e, r) {
                    n(this, u), this._items = null, this._interval = null, this._activeElement = null, 
                    this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(r), this._element = t(e)[0], 
                    this._indicatorsElement = t(this._element).find(p.INDICATORS)[0], this._addEventListeners();
                }
                return u.prototype.next = function() {
                    if (this._isSliding) throw new Error("Carousel is sliding");
                    this._slide(f.NEXT);
                }, u.prototype.nextWhenVisible = function() {
                    document.hidden || this.next();
                }, u.prototype.prev = function() {
                    if (this._isSliding) throw new Error("Carousel is sliding");
                    this._slide(f.PREVIOUS);
                }, u.prototype.pause = function(e) {
                    e || (this._isPaused = !0), t(this._element).find(p.NEXT_PREV)[0] && o.supportsTransitionEnd() && (o.triggerTransitionEnd(this._element), 
                    this.cycle(!0)), clearInterval(this._interval), this._interval = null;
                }, u.prototype.cycle = function(t) {
                    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), 
                    this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                }, u.prototype.to = function(e) {
                    var n = this;
                    this._activeElement = t(this._element).find(p.ACTIVE_ITEM)[0];
                    var r = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0)) {
                        if (this._isSliding) return void t(this._element).one(h.SLID, function() {
                            return n.to(e);
                        });
                        if (r === e) return this.pause(), void this.cycle();
                        var i = e > r ? f.NEXT : f.PREVIOUS;
                        this._slide(i, this._items[e]);
                    }
                }, u.prototype.dispose = function() {
                    t(this._element).off(s), t.removeData(this._element, a), this._items = null, this._config = null, 
                    this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, 
                    this._activeElement = null, this._indicatorsElement = null;
                }, u.prototype._getConfig = function(n) {
                    return n = t.extend({}, l, n), o.typeCheckConfig(e, n, c), n;
                }, u.prototype._addEventListeners = function() {
                    var e = this;
                    this._config.keyboard && t(this._element).on(h.KEYDOWN, function(t) {
                        return e._keydown(t);
                    }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(h.MOUSEENTER, function(t) {
                        return e.pause(t);
                    }).on(h.MOUSELEAVE, function(t) {
                        return e.cycle(t);
                    });
                }, u.prototype._keydown = function(t) {
                    if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                      case 37:
                        t.preventDefault(), this.prev();
                        break;

                      case 39:
                        t.preventDefault(), this.next();
                        break;

                      default:
                        return;
                    }
                }, u.prototype._getItemIndex = function(e) {
                    return this._items = t.makeArray(t(e).parent().find(p.ITEM)), this._items.indexOf(e);
                }, u.prototype._getItemByDirection = function(t, e) {
                    var n = t === f.NEXT, r = t === f.PREVIOUS, i = this._getItemIndex(e), o = this._items.length - 1;
                    if ((r && 0 === i || n && i === o) && !this._config.wrap) return e;
                    var a = t === f.PREVIOUS ? -1 : 1, s = (i + a) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s];
                }, u.prototype._triggerSlideEvent = function(e, n) {
                    var r = t.Event(h.SLIDE, {
                        relatedTarget: e,
                        direction: n
                    });
                    return t(this._element).trigger(r), r;
                }, u.prototype._setActiveIndicatorElement = function(e) {
                    if (this._indicatorsElement) {
                        t(this._indicatorsElement).find(p.ACTIVE).removeClass(d.ACTIVE);
                        var n = this._indicatorsElement.children[this._getItemIndex(e)];
                        n && t(n).addClass(d.ACTIVE);
                    }
                }, u.prototype._slide = function(e, n) {
                    var r = this, i = t(this._element).find(p.ACTIVE_ITEM)[0], a = n || i && this._getItemByDirection(e, i), s = Boolean(this._interval), u = void 0, l = void 0, c = void 0;
                    if (e === f.NEXT ? (u = d.LEFT, l = d.NEXT, c = f.LEFT) : (u = d.RIGHT, l = d.PREV, 
                    c = f.RIGHT), a && t(a).hasClass(d.ACTIVE)) return void (this._isSliding = !1);
                    if (!this._triggerSlideEvent(a, c).isDefaultPrevented() && i && a) {
                        this._isSliding = !0, s && this.pause(), this._setActiveIndicatorElement(a);
                        var g = t.Event(h.SLID, {
                            relatedTarget: a,
                            direction: c
                        });
                        o.supportsTransitionEnd() && t(this._element).hasClass(d.SLIDE) ? (t(a).addClass(l), 
                        o.reflow(a), t(i).addClass(u), t(a).addClass(u), t(i).one(o.TRANSITION_END, function() {
                            t(a).removeClass(u + " " + l).addClass(d.ACTIVE), t(i).removeClass(d.ACTIVE + " " + l + " " + u), 
                            r._isSliding = !1, setTimeout(function() {
                                return t(r._element).trigger(g);
                            }, 0);
                        }).emulateTransitionEnd(600)) : (t(i).removeClass(d.ACTIVE), t(a).addClass(d.ACTIVE), 
                        this._isSliding = !1, t(this._element).trigger(g)), s && this.cycle();
                    }
                }, u._jQueryInterface = function(e) {
                    return this.each(function() {
                        var n = t(this).data(a), i = t.extend({}, l, t(this).data());
                        "object" === (void 0 === e ? "undefined" : r(e)) && t.extend(i, e);
                        var o = "string" == typeof e ? e : i.slide;
                        if (n || (n = new u(this, i), t(this).data(a, n)), "number" == typeof e) n.to(e); else if ("string" == typeof o) {
                            if (void 0 === n[o]) throw new Error('No method named "' + o + '"');
                            n[o]();
                        } else i.interval && (n.pause(), n.cycle());
                    });
                }, u._dataApiClickHandler = function(e) {
                    var n = o.getSelectorFromElement(this);
                    if (n) {
                        var r = t(n)[0];
                        if (r && t(r).hasClass(d.CAROUSEL)) {
                            var i = t.extend({}, t(r).data(), t(this).data()), s = this.getAttribute("data-slide-to");
                            s && (i.interval = !1), u._jQueryInterface.call(t(r), i), s && t(r).data(a).to(s), 
                            e.preventDefault();
                        }
                    }
                }, i(u, null, [ {
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6";
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return l;
                    }
                } ]), u;
            }();
            t(document).on(h.CLICK_DATA_API, p.DATA_SLIDE, g._dataApiClickHandler), t(window).on(h.LOAD_DATA_API, function() {
                t(p.DATA_RIDE).each(function() {
                    var e = t(this);
                    g._jQueryInterface.call(e, e.data());
                });
            }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
                return t.fn[e] = u, g._jQueryInterface;
            };
        }(jQuery), function(t) {
            var e = "collapse", a = "bs.collapse", s = t.fn[e], u = {
                toggle: !0,
                parent: ""
            }, l = {
                toggle: "boolean",
                parent: "string"
            }, c = {
                SHOW: "show.bs.collapse",
                SHOWN: "shown.bs.collapse",
                HIDE: "hide.bs.collapse",
                HIDDEN: "hidden.bs.collapse",
                CLICK_DATA_API: "click.bs.collapse.data-api"
            }, f = {
                SHOW: "show",
                COLLAPSE: "collapse",
                COLLAPSING: "collapsing",
                COLLAPSED: "collapsed"
            }, h = {
                WIDTH: "width",
                HEIGHT: "height"
            }, d = {
                ACTIVES: ".card > .show, .card > .collapsing",
                DATA_TOGGLE: '[data-toggle="collapse"]'
            }, p = function() {
                function s(e, r) {
                    n(this, s), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(r), 
                    this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')), 
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), 
                    this._config.toggle && this.toggle();
                }
                return s.prototype.toggle = function() {
                    t(this._element).hasClass(f.SHOW) ? this.hide() : this.show();
                }, s.prototype.show = function() {
                    var e = this;
                    if (this._isTransitioning) throw new Error("Collapse is transitioning");
                    if (!t(this._element).hasClass(f.SHOW)) {
                        var n = void 0, r = void 0;
                        if (this._parent && (n = t.makeArray(t(this._parent).find(d.ACTIVES)), n.length || (n = null)), 
                        !(n && (r = t(n).data(a)) && r._isTransitioning)) {
                            var i = t.Event(c.SHOW);
                            if (t(this._element).trigger(i), !i.isDefaultPrevented()) {
                                n && (s._jQueryInterface.call(t(n), "hide"), r || t(n).data(a, null));
                                var u = this._getDimension();
                                t(this._element).removeClass(f.COLLAPSE).addClass(f.COLLAPSING), this._element.style[u] = 0, 
                                this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(f.COLLAPSED).attr("aria-expanded", !0), 
                                this.setTransitioning(!0);
                                var l = function() {
                                    t(e._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).addClass(f.SHOW), e._element.style[u] = "", 
                                    e.setTransitioning(!1), t(e._element).trigger(c.SHOWN);
                                };
                                if (!o.supportsTransitionEnd()) return void l();
                                var h = u[0].toUpperCase() + u.slice(1), p = "scroll" + h;
                                t(this._element).one(o.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[u] = this._element[p] + "px";
                            }
                        }
                    }
                }, s.prototype.hide = function() {
                    var e = this;
                    if (this._isTransitioning) throw new Error("Collapse is transitioning");
                    if (t(this._element).hasClass(f.SHOW)) {
                        var n = t.Event(c.HIDE);
                        if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var r = this._getDimension(), i = r === h.WIDTH ? "offsetWidth" : "offsetHeight";
                            this._element.style[r] = this._element[i] + "px", o.reflow(this._element), t(this._element).addClass(f.COLLAPSING).removeClass(f.COLLAPSE).removeClass(f.SHOW), 
                            this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(f.COLLAPSED).attr("aria-expanded", !1), 
                            this.setTransitioning(!0);
                            var a = function() {
                                e.setTransitioning(!1), t(e._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).trigger(c.HIDDEN);
                            };
                            if (this._element.style[r] = "", !o.supportsTransitionEnd()) return void a();
                            t(this._element).one(o.TRANSITION_END, a).emulateTransitionEnd(600);
                        }
                    }
                }, s.prototype.setTransitioning = function(t) {
                    this._isTransitioning = t;
                }, s.prototype.dispose = function() {
                    t.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, 
                    this._triggerArray = null, this._isTransitioning = null;
                }, s.prototype._getConfig = function(n) {
                    return n = t.extend({}, u, n), n.toggle = Boolean(n.toggle), o.typeCheckConfig(e, n, l), 
                    n;
                }, s.prototype._getDimension = function() {
                    return t(this._element).hasClass(h.WIDTH) ? h.WIDTH : h.HEIGHT;
                }, s.prototype._getParent = function() {
                    var e = this, n = t(this._config.parent)[0], r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return t(n).find(r).each(function(t, n) {
                        e._addAriaAndCollapsedClass(s._getTargetFromElement(n), [ n ]);
                    }), n;
                }, s.prototype._addAriaAndCollapsedClass = function(e, n) {
                    if (e) {
                        var r = t(e).hasClass(f.SHOW);
                        e.setAttribute("aria-expanded", r), n.length && t(n).toggleClass(f.COLLAPSED, !r).attr("aria-expanded", r);
                    }
                }, s._getTargetFromElement = function(e) {
                    var n = o.getSelectorFromElement(e);
                    return n ? t(n)[0] : null;
                }, s._jQueryInterface = function(e) {
                    return this.each(function() {
                        var n = t(this), i = n.data(a), o = t.extend({}, u, n.data(), "object" === (void 0 === e ? "undefined" : r(e)) && e);
                        if (!i && o.toggle && /show|hide/.test(e) && (o.toggle = !1), i || (i = new s(this, o), 
                        n.data(a, i)), "string" == typeof e) {
                            if (void 0 === i[e]) throw new Error('No method named "' + e + '"');
                            i[e]();
                        }
                    });
                }, i(s, null, [ {
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6";
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return u;
                    }
                } ]), s;
            }();
            t(document).on(c.CLICK_DATA_API, d.DATA_TOGGLE, function(e) {
                e.preventDefault();
                var n = p._getTargetFromElement(this), r = t(n).data(a), i = r ? "toggle" : t(this).data();
                p._jQueryInterface.call(t(n), i);
            }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function() {
                return t.fn[e] = s, p._jQueryInterface;
            };
        }(jQuery), function(t) {
            var e = "dropdown", r = ".bs.dropdown", a = t.fn[e], s = {
                HIDE: "hide" + r,
                HIDDEN: "hidden" + r,
                SHOW: "show" + r,
                SHOWN: "shown" + r,
                CLICK: "click" + r,
                CLICK_DATA_API: "click.bs.dropdown.data-api",
                FOCUSIN_DATA_API: "focusin.bs.dropdown.data-api",
                KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api"
            }, u = {
                BACKDROP: "dropdown-backdrop",
                DISABLED: "disabled",
                SHOW: "show"
            }, l = {
                BACKDROP: ".dropdown-backdrop",
                DATA_TOGGLE: '[data-toggle="dropdown"]',
                FORM_CHILD: ".dropdown form",
                ROLE_MENU: '[role="menu"]',
                ROLE_LISTBOX: '[role="listbox"]',
                NAVBAR_NAV: ".navbar-nav",
                VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
            }, c = function() {
                function e(t) {
                    n(this, e), this._element = t, this._addEventListeners();
                }
                return e.prototype.toggle = function() {
                    if (this.disabled || t(this).hasClass(u.DISABLED)) return !1;
                    var n = e._getParentFromElement(this), r = t(n).hasClass(u.SHOW);
                    if (e._clearMenus(), r) return !1;
                    if ("ontouchstart" in document.documentElement && !t(n).closest(l.NAVBAR_NAV).length) {
                        var i = document.createElement("div");
                        i.className = u.BACKDROP, t(i).insertBefore(this), t(i).on("click", e._clearMenus);
                    }
                    var o = {
                        relatedTarget: this
                    }, a = t.Event(s.SHOW, o);
                    return t(n).trigger(a), !a.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), 
                    t(n).toggleClass(u.SHOW), t(n).trigger(t.Event(s.SHOWN, o)), !1);
                }, e.prototype.dispose = function() {
                    t.removeData(this._element, "bs.dropdown"), t(this._element).off(r), this._element = null;
                }, e.prototype._addEventListeners = function() {
                    t(this._element).on(s.CLICK, this.toggle);
                }, e._jQueryInterface = function(n) {
                    return this.each(function() {
                        var r = t(this).data("bs.dropdown");
                        if (r || (r = new e(this), t(this).data("bs.dropdown", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new Error('No method named "' + n + '"');
                            r[n].call(this);
                        }
                    });
                }, e._clearMenus = function(n) {
                    if (!n || 3 !== n.which) {
                        var r = t(l.BACKDROP)[0];
                        r && r.parentNode.removeChild(r);
                        for (var i = t.makeArray(t(l.DATA_TOGGLE)), o = 0; o < i.length; o++) {
                            var a = e._getParentFromElement(i[o]), c = {
                                relatedTarget: i[o]
                            };
                            if (t(a).hasClass(u.SHOW) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "focusin" === n.type) && t.contains(a, n.target))) {
                                var f = t.Event(s.HIDE, c);
                                t(a).trigger(f), f.isDefaultPrevented() || (i[o].setAttribute("aria-expanded", "false"), 
                                t(a).removeClass(u.SHOW).trigger(t.Event(s.HIDDEN, c)));
                            }
                        }
                    }
                }, e._getParentFromElement = function(e) {
                    var n = void 0, r = o.getSelectorFromElement(e);
                    return r && (n = t(r)[0]), n || e.parentNode;
                }, e._dataApiKeydownHandler = function(n) {
                    if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName) && (n.preventDefault(), 
                    n.stopPropagation(), !this.disabled && !t(this).hasClass(u.DISABLED))) {
                        var r = e._getParentFromElement(this), i = t(r).hasClass(u.SHOW);
                        if (!i && 27 !== n.which || i && 27 === n.which) {
                            if (27 === n.which) {
                                var o = t(r).find(l.DATA_TOGGLE)[0];
                                t(o).trigger("focus");
                            }
                            return void t(this).trigger("click");
                        }
                        var a = t(r).find(l.VISIBLE_ITEMS).get();
                        if (a.length) {
                            var s = a.indexOf(n.target);
                            38 === n.which && s > 0 && s--, 40 === n.which && s < a.length - 1 && s++, s < 0 && (s = 0), 
                            a[s].focus();
                        }
                    }
                }, i(e, null, [ {
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6";
                    }
                } ]), e;
            }();
            t(document).on(s.KEYDOWN_DATA_API, l.DATA_TOGGLE, c._dataApiKeydownHandler).on(s.KEYDOWN_DATA_API, l.ROLE_MENU, c._dataApiKeydownHandler).on(s.KEYDOWN_DATA_API, l.ROLE_LISTBOX, c._dataApiKeydownHandler).on(s.CLICK_DATA_API + " " + s.FOCUSIN_DATA_API, c._clearMenus).on(s.CLICK_DATA_API, l.DATA_TOGGLE, c.prototype.toggle).on(s.CLICK_DATA_API, l.FORM_CHILD, function(t) {
                t.stopPropagation();
            }), t.fn[e] = c._jQueryInterface, t.fn[e].Constructor = c, t.fn[e].noConflict = function() {
                return t.fn[e] = a, c._jQueryInterface;
            };
        }(jQuery), function(t) {
            var e = "modal", a = ".bs.modal", s = t.fn[e], u = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            }, l = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            }, c = {
                HIDE: "hide.bs.modal",
                HIDDEN: "hidden.bs.modal",
                SHOW: "show.bs.modal",
                SHOWN: "shown.bs.modal",
                FOCUSIN: "focusin.bs.modal",
                RESIZE: "resize.bs.modal",
                CLICK_DISMISS: "click.dismiss.bs.modal",
                KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                CLICK_DATA_API: "click.bs.modal.data-api"
            }, f = {
                SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                BACKDROP: "modal-backdrop",
                OPEN: "modal-open",
                FADE: "fade",
                SHOW: "show"
            }, h = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            }, d = function() {
                function s(e, r) {
                    n(this, s), this._config = this._getConfig(r), this._element = e, this._dialog = t(e).find(h.DIALOG)[0], 
                    this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, 
                    this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
                }
                return s.prototype.toggle = function(t) {
                    return this._isShown ? this.hide() : this.show(t);
                }, s.prototype.show = function(e) {
                    var n = this;
                    if (this._isTransitioning) throw new Error("Modal is transitioning");
                    o.supportsTransitionEnd() && t(this._element).hasClass(f.FADE) && (this._isTransitioning = !0);
                    var r = t.Event(c.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, 
                    this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(f.OPEN), 
                    this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(c.CLICK_DISMISS, h.DATA_DISMISS, function(t) {
                        return n.hide(t);
                    }), t(this._dialog).on(c.MOUSEDOWN_DISMISS, function() {
                        t(n._element).one(c.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
                        });
                    }), this._showBackdrop(function() {
                        return n._showElement(e);
                    }));
                }, s.prototype.hide = function(e) {
                    var n = this;
                    if (e && e.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");
                    var r = o.supportsTransitionEnd() && t(this._element).hasClass(f.FADE);
                    r && (this._isTransitioning = !0);
                    var i = t.Event(c.HIDE);
                    t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented() && (this._isShown = !1, 
                    this._setEscapeEvent(), this._setResizeEvent(), t(document).off(c.FOCUSIN), t(this._element).removeClass(f.SHOW), 
                    t(this._element).off(c.CLICK_DISMISS), t(this._dialog).off(c.MOUSEDOWN_DISMISS), 
                    r ? t(this._element).one(o.TRANSITION_END, function(t) {
                        return n._hideModal(t);
                    }).emulateTransitionEnd(300) : this._hideModal());
                }, s.prototype.dispose = function() {
                    t.removeData(this._element, "bs.modal"), t(window, document, this._element, this._backdrop).off(a), 
                    this._config = null, this._element = null, this._dialog = null, this._backdrop = null, 
                    this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, 
                    this._originalBodyPadding = null, this._scrollbarWidth = null;
                }, s.prototype._getConfig = function(n) {
                    return n = t.extend({}, u, n), o.typeCheckConfig(e, n, l), n;
                }, s.prototype._showElement = function(e) {
                    var n = this, r = o.supportsTransitionEnd() && t(this._element).hasClass(f.FADE);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), 
                    this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), 
                    this._element.scrollTop = 0, r && o.reflow(this._element), t(this._element).addClass(f.SHOW), 
                    this._config.focus && this._enforceFocus();
                    var i = t.Event(c.SHOWN, {
                        relatedTarget: e
                    }), a = function() {
                        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(i);
                    };
                    r ? t(this._dialog).one(o.TRANSITION_END, a).emulateTransitionEnd(300) : a();
                }, s.prototype._enforceFocus = function() {
                    var e = this;
                    t(document).off(c.FOCUSIN).on(c.FOCUSIN, function(n) {
                        document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus();
                    });
                }, s.prototype._setEscapeEvent = function() {
                    var e = this;
                    this._isShown && this._config.keyboard ? t(this._element).on(c.KEYDOWN_DISMISS, function(t) {
                        27 === t.which && e.hide();
                    }) : this._isShown || t(this._element).off(c.KEYDOWN_DISMISS);
                }, s.prototype._setResizeEvent = function() {
                    var e = this;
                    this._isShown ? t(window).on(c.RESIZE, function(t) {
                        return e._handleUpdate(t);
                    }) : t(window).off(c.RESIZE);
                }, s.prototype._hideModal = function() {
                    var e = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), 
                    this._isTransitioning = !1, this._showBackdrop(function() {
                        t(document.body).removeClass(f.OPEN), e._resetAdjustments(), e._resetScrollbar(), 
                        t(e._element).trigger(c.HIDDEN);
                    });
                }, s.prototype._removeBackdrop = function() {
                    this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
                }, s.prototype._showBackdrop = function(e) {
                    var n = this, r = t(this._element).hasClass(f.FADE) ? f.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        var i = o.supportsTransitionEnd() && r;
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = f.BACKDROP, 
                        r && t(this._backdrop).addClass(r), t(this._backdrop).appendTo(document.body), t(this._element).on(c.CLICK_DISMISS, function(t) {
                            if (n._ignoreBackdropClick) return void (n._ignoreBackdropClick = !1);
                            t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
                        }), i && o.reflow(this._backdrop), t(this._backdrop).addClass(f.SHOW), !e) return;
                        if (!i) return void e();
                        t(this._backdrop).one(o.TRANSITION_END, e).emulateTransitionEnd(150);
                    } else if (!this._isShown && this._backdrop) {
                        t(this._backdrop).removeClass(f.SHOW);
                        var a = function() {
                            n._removeBackdrop(), e && e();
                        };
                        o.supportsTransitionEnd() && t(this._element).hasClass(f.FADE) ? t(this._backdrop).one(o.TRANSITION_END, a).emulateTransitionEnd(150) : a();
                    } else e && e();
                }, s.prototype._handleUpdate = function() {
                    this._adjustDialog();
                }, s.prototype._adjustDialog = function() {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), 
                    this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                }, s.prototype._resetAdjustments = function() {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
                }, s.prototype._checkScrollbar = function() {
                    this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
                }, s.prototype._setScrollbar = function() {
                    var e = parseInt(t(h.FIXED_CONTENT).css("padding-right") || 0, 10);
                    this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px");
                }, s.prototype._resetScrollbar = function() {
                    document.body.style.paddingRight = this._originalBodyPadding;
                }, s.prototype._getScrollbarWidth = function() {
                    var t = document.createElement("div");
                    t.className = f.SCROLLBAR_MEASURER, document.body.appendChild(t);
                    var e = t.offsetWidth - t.clientWidth;
                    return document.body.removeChild(t), e;
                }, s._jQueryInterface = function(e, n) {
                    return this.each(function() {
                        var i = t(this).data("bs.modal"), o = t.extend({}, s.Default, t(this).data(), "object" === (void 0 === e ? "undefined" : r(e)) && e);
                        if (i || (i = new s(this, o), t(this).data("bs.modal", i)), "string" == typeof e) {
                            if (void 0 === i[e]) throw new Error('No method named "' + e + '"');
                            i[e](n);
                        } else o.show && i.show(n);
                    });
                }, i(s, null, [ {
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6";
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return u;
                    }
                } ]), s;
            }();
            t(document).on(c.CLICK_DATA_API, h.DATA_TOGGLE, function(e) {
                var n = this, r = void 0, i = o.getSelectorFromElement(this);
                i && (r = t(i)[0]);
                var a = t(r).data("bs.modal") ? "toggle" : t.extend({}, t(r).data(), t(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                var s = t(r).one(c.SHOW, function(e) {
                    e.isDefaultPrevented() || s.one(c.HIDDEN, function() {
                        t(n).is(":visible") && n.focus();
                    });
                });
                d._jQueryInterface.call(t(r), a, this);
            }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function() {
                return t.fn[e] = s, d._jQueryInterface;
            };
        }(jQuery), function(t) {
            var e = "scrollspy", a = t.fn[e], s = {
                offset: 10,
                method: "auto",
                target: ""
            }, u = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            }, l = {
                ACTIVATE: "activate.bs.scrollspy",
                SCROLL: "scroll.bs.scrollspy",
                LOAD_DATA_API: "load.bs.scrollspy.data-api"
            }, c = {
                DROPDOWN_ITEM: "dropdown-item",
                DROPDOWN_MENU: "dropdown-menu",
                NAV_LINK: "nav-link",
                NAV: "nav",
                ACTIVE: "active"
            }, f = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                LIST_ITEM: ".list-item",
                LI: "li",
                LI_DROPDOWN: "li.dropdown",
                NAV_LINKS: ".nav-link",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            }, h = {
                OFFSET: "offset",
                POSITION: "position"
            }, d = function() {
                function a(e, r) {
                    var i = this;
                    n(this, a), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, 
                    this._config = this._getConfig(r), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, 
                    this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, 
                    t(this._scrollElement).on(l.SCROLL, function(t) {
                        return i._process(t);
                    }), this.refresh(), this._process();
                }
                return a.prototype.refresh = function() {
                    var e = this, n = this._scrollElement !== this._scrollElement.window ? h.POSITION : h.OFFSET, r = "auto" === this._config.method ? n : this._config.method, i = r === h.POSITION ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), 
                    t.makeArray(t(this._selector)).map(function(e) {
                        var n = void 0, a = o.getSelectorFromElement(e);
                        return a && (n = t(a)[0]), n && (n.offsetWidth || n.offsetHeight) ? [ t(n)[r]().top + i, a ] : null;
                    }).filter(function(t) {
                        return t;
                    }).sort(function(t, e) {
                        return t[0] - e[0];
                    }).forEach(function(t) {
                        e._offsets.push(t[0]), e._targets.push(t[1]);
                    });
                }, a.prototype.dispose = function() {
                    t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), 
                    this._element = null, this._scrollElement = null, this._config = null, this._selector = null, 
                    this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
                }, a.prototype._getConfig = function(n) {
                    if (n = t.extend({}, s, n), "string" != typeof n.target) {
                        var r = t(n.target).attr("id");
                        r || (r = o.getUID(e), t(n.target).attr("id", r)), n.target = "#" + r;
                    }
                    return o.typeCheckConfig(e, n, u), n;
                }, a.prototype._getScrollTop = function() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                }, a.prototype._getScrollHeight = function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                }, a.prototype._getOffsetHeight = function() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight;
                }, a.prototype._process = function() {
                    var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(), t >= n) {
                        var r = this._targets[this._targets.length - 1];
                        return void (this._activeTarget !== r && this._activate(r));
                    }
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, 
                    void this._clear();
                    for (var i = this._offsets.length; i--; ) {
                        this._activeTarget !== this._targets[i] && t >= this._offsets[i] && (void 0 === this._offsets[i + 1] || t < this._offsets[i + 1]) && this._activate(this._targets[i]);
                    }
                }, a.prototype._activate = function(e) {
                    this._activeTarget = e, this._clear();
                    var n = this._selector.split(",");
                    n = n.map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                    });
                    var r = t(n.join(","));
                    r.hasClass(c.DROPDOWN_ITEM) ? (r.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(c.ACTIVE), 
                    r.addClass(c.ACTIVE)) : r.parents(f.LI).find("> " + f.NAV_LINKS).addClass(c.ACTIVE), 
                    t(this._scrollElement).trigger(l.ACTIVATE, {
                        relatedTarget: e
                    });
                }, a.prototype._clear = function() {
                    t(this._selector).filter(f.ACTIVE).removeClass(c.ACTIVE);
                }, a._jQueryInterface = function(e) {
                    return this.each(function() {
                        var n = t(this).data("bs.scrollspy"), i = "object" === (void 0 === e ? "undefined" : r(e)) && e;
                        if (n || (n = new a(this, i), t(this).data("bs.scrollspy", n)), "string" == typeof e) {
                            if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                            n[e]();
                        }
                    });
                }, i(a, null, [ {
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6";
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return s;
                    }
                } ]), a;
            }();
            t(window).on(l.LOAD_DATA_API, function() {
                for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--; ) {
                    var r = t(e[n]);
                    d._jQueryInterface.call(r, r.data());
                }
            }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function() {
                return t.fn[e] = a, d._jQueryInterface;
            };
        }(jQuery), function(t) {
            var e = t.fn.tab, r = {
                HIDE: "hide.bs.tab",
                HIDDEN: "hidden.bs.tab",
                SHOW: "show.bs.tab",
                SHOWN: "shown.bs.tab",
                CLICK_DATA_API: "click.bs.tab.data-api"
            }, a = {
                DROPDOWN_MENU: "dropdown-menu",
                ACTIVE: "active",
                DISABLED: "disabled",
                FADE: "fade",
                SHOW: "show"
            }, s = {
                A: "a",
                LI: "li",
                DROPDOWN: ".dropdown",
                LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",
                FADE_CHILD: "> .nav-item .fade, > .fade",
                ACTIVE: ".active",
                ACTIVE_CHILD: "> .nav-item > .active, > .active",
                DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                DROPDOWN_TOGGLE: ".dropdown-toggle",
                DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
            }, u = function() {
                function e(t) {
                    n(this, e), this._element = t;
                }
                return e.prototype.show = function() {
                    var e = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a.ACTIVE) || t(this._element).hasClass(a.DISABLED))) {
                        var n = void 0, i = void 0, u = t(this._element).closest(s.LIST)[0], l = o.getSelectorFromElement(this._element);
                        u && (i = t.makeArray(t(u).find(s.ACTIVE)), i = i[i.length - 1]);
                        var c = t.Event(r.HIDE, {
                            relatedTarget: this._element
                        }), f = t.Event(r.SHOW, {
                            relatedTarget: i
                        });
                        if (i && t(i).trigger(c), t(this._element).trigger(f), !f.isDefaultPrevented() && !c.isDefaultPrevented()) {
                            l && (n = t(l)[0]), this._activate(this._element, u);
                            var h = function() {
                                var n = t.Event(r.HIDDEN, {
                                    relatedTarget: e._element
                                }), o = t.Event(r.SHOWN, {
                                    relatedTarget: i
                                });
                                t(i).trigger(n), t(e._element).trigger(o);
                            };
                            n ? this._activate(n, n.parentNode, h) : h();
                        }
                    }
                }, e.prototype.dispose = function() {
                    t.removeClass(this._element, "bs.tab"), this._element = null;
                }, e.prototype._activate = function(e, n, r) {
                    var i = this, u = t(n).find(s.ACTIVE_CHILD)[0], l = r && o.supportsTransitionEnd() && (u && t(u).hasClass(a.FADE) || Boolean(t(n).find(s.FADE_CHILD)[0])), c = function() {
                        return i._transitionComplete(e, u, l, r);
                    };
                    u && l ? t(u).one(o.TRANSITION_END, c).emulateTransitionEnd(150) : c(), u && t(u).removeClass(a.SHOW);
                }, e.prototype._transitionComplete = function(e, n, r, i) {
                    if (n) {
                        t(n).removeClass(a.ACTIVE);
                        var u = t(n.parentNode).find(s.DROPDOWN_ACTIVE_CHILD)[0];
                        u && t(u).removeClass(a.ACTIVE), n.setAttribute("aria-expanded", !1);
                    }
                    if (t(e).addClass(a.ACTIVE), e.setAttribute("aria-expanded", !0), r ? (o.reflow(e), 
                    t(e).addClass(a.SHOW)) : t(e).removeClass(a.FADE), e.parentNode && t(e.parentNode).hasClass(a.DROPDOWN_MENU)) {
                        var l = t(e).closest(s.DROPDOWN)[0];
                        l && t(l).find(s.DROPDOWN_TOGGLE).addClass(a.ACTIVE), e.setAttribute("aria-expanded", !0);
                    }
                    i && i();
                }, e._jQueryInterface = function(n) {
                    return this.each(function() {
                        var r = t(this), i = r.data("bs.tab");
                        if (i || (i = new e(this), r.data("bs.tab", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new Error('No method named "' + n + '"');
                            i[n]();
                        }
                    });
                }, i(e, null, [ {
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6";
                    }
                } ]), e;
            }();
            t(document).on(r.CLICK_DATA_API, s.DATA_TOGGLE, function(e) {
                e.preventDefault(), u._jQueryInterface.call(t(this), "show");
            }), t.fn.tab = u._jQueryInterface, t.fn.tab.Constructor = u, t.fn.tab.noConflict = function() {
                return t.fn.tab = e, u._jQueryInterface;
            };
        }(jQuery), function(t) {
            if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            var e = "tooltip", a = ".bs.tooltip", s = t.fn[e], u = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: "0 0",
                constraints: [],
                container: !1
            }, l = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "string",
                constraints: "array",
                container: "(string|element|boolean)"
            }, c = {
                TOP: "bottom center",
                RIGHT: "middle left",
                BOTTOM: "top center",
                LEFT: "middle right"
            }, f = {
                SHOW: "show",
                OUT: "out"
            }, h = {
                HIDE: "hide" + a,
                HIDDEN: "hidden" + a,
                SHOW: "show" + a,
                SHOWN: "shown" + a,
                INSERTED: "inserted" + a,
                CLICK: "click" + a,
                FOCUSIN: "focusin" + a,
                FOCUSOUT: "focusout" + a,
                MOUSEENTER: "mouseenter" + a,
                MOUSELEAVE: "mouseleave" + a
            }, d = {
                FADE: "fade",
                SHOW: "show"
            }, p = {
                TOOLTIP: ".tooltip",
                TOOLTIP_INNER: ".tooltip-inner"
            }, g = {
                element: !1,
                enabled: !1
            }, m = {
                HOVER: "hover",
                FOCUS: "focus",
                CLICK: "click",
                MANUAL: "manual"
            }, v = function() {
                function s(t, e) {
                    n(this, s), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, 
                    this._isTransitioning = !1, this._tether = null, this.element = t, this.config = this._getConfig(e), 
                    this.tip = null, this._setListeners();
                }
                return s.prototype.enable = function() {
                    this._isEnabled = !0;
                }, s.prototype.disable = function() {
                    this._isEnabled = !1;
                }, s.prototype.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled;
                }, s.prototype.toggle = function(e) {
                    if (e) {
                        var n = this.constructor.DATA_KEY, r = t(e.currentTarget).data(n);
                        r || (r = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, r)), 
                        r._activeTrigger.click = !r._activeTrigger.click, r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r);
                    } else {
                        if (t(this.getTipElement()).hasClass(d.SHOW)) return void this._leave(null, this);
                        this._enter(null, this);
                    }
                }, s.prototype.dispose = function() {
                    clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), 
                    t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), 
                    this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, 
                    this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, 
                    this.config = null, this.tip = null;
                }, s.prototype.show = function() {
                    var e = this;
                    if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var n = t.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                        t(this.element).trigger(n);
                        var r = t.contains(this.element.ownerDocument.documentElement, this.element);
                        if (n.isDefaultPrevented() || !r) return;
                        var i = this.getTipElement(), a = o.getUID(this.constructor.NAME);
                        i.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), 
                        this.config.animation && t(i).addClass(d.FADE);
                        var u = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement, l = this._getAttachment(u), c = !1 === this.config.container ? document.body : t(this.config.container);
                        t(i).data(this.constructor.DATA_KEY, this).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), 
                        this._tether = new Tether({
                            attachment: l,
                            element: i,
                            target: this.element,
                            classes: g,
                            classPrefix: "bs-tether",
                            offset: this.config.offset,
                            constraints: this.config.constraints,
                            addTargetClasses: !1
                        }), o.reflow(i), this._tether.position(), t(i).addClass(d.SHOW);
                        var h = function() {
                            var n = e._hoverState;
                            e._hoverState = null, e._isTransitioning = !1, t(e.element).trigger(e.constructor.Event.SHOWN), 
                            n === f.OUT && e._leave(null, e);
                        };
                        if (o.supportsTransitionEnd() && t(this.tip).hasClass(d.FADE)) return this._isTransitioning = !0, 
                        void t(this.tip).one(o.TRANSITION_END, h).emulateTransitionEnd(s._TRANSITION_DURATION);
                        h();
                    }
                }, s.prototype.hide = function(e) {
                    var n = this, r = this.getTipElement(), i = t.Event(this.constructor.Event.HIDE);
                    if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                    var a = function() {
                        n._hoverState !== f.SHOW && r.parentNode && r.parentNode.removeChild(r), n.element.removeAttribute("aria-describedby"), 
                        t(n.element).trigger(n.constructor.Event.HIDDEN), n._isTransitioning = !1, n.cleanupTether(), 
                        e && e();
                    };
                    t(this.element).trigger(i), i.isDefaultPrevented() || (t(r).removeClass(d.SHOW), 
                    this._activeTrigger[m.CLICK] = !1, this._activeTrigger[m.FOCUS] = !1, this._activeTrigger[m.HOVER] = !1, 
                    o.supportsTransitionEnd() && t(this.tip).hasClass(d.FADE) ? (this._isTransitioning = !0, 
                    t(r).one(o.TRANSITION_END, a).emulateTransitionEnd(150)) : a(), this._hoverState = "");
                }, s.prototype.isWithContent = function() {
                    return Boolean(this.getTitle());
                }, s.prototype.getTipElement = function() {
                    return this.tip = this.tip || t(this.config.template)[0];
                }, s.prototype.setContent = function() {
                    var e = t(this.getTipElement());
                    this.setElementContent(e.find(p.TOOLTIP_INNER), this.getTitle()), e.removeClass(d.FADE + " " + d.SHOW), 
                    this.cleanupTether();
                }, s.prototype.setElementContent = function(e, n) {
                    var i = this.config.html;
                    "object" === (void 0 === n ? "undefined" : r(n)) && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n);
                }, s.prototype.getTitle = function() {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), 
                    t;
                }, s.prototype.cleanupTether = function() {
                    this._tether && this._tether.destroy();
                }, s.prototype._getAttachment = function(t) {
                    return c[t.toUpperCase()];
                }, s.prototype._setListeners = function() {
                    var e = this;
                    this.config.trigger.split(" ").forEach(function(n) {
                        if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                            return e.toggle(t);
                        }); else if (n !== m.MANUAL) {
                            var r = n === m.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN, i = n === m.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                            t(e.element).on(r, e.config.selector, function(t) {
                                return e._enter(t);
                            }).on(i, e.config.selector, function(t) {
                                return e._leave(t);
                            });
                        }
                        t(e.element).closest(".modal").on("hide.bs.modal", function() {
                            return e.hide();
                        });
                    }), this.config.selector ? this.config = t.extend({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle();
                }, s.prototype._fixTitle = function() {
                    var t = r(this.element.getAttribute("data-original-title"));
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), 
                    this.element.setAttribute("title", ""));
                }, s.prototype._enter = function(e, n) {
                    var r = this.constructor.DATA_KEY;
                    return n = n || t(e.currentTarget).data(r), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), 
                    t(e.currentTarget).data(r, n)), e && (n._activeTrigger["focusin" === e.type ? m.FOCUS : m.HOVER] = !0), 
                    t(n.getTipElement()).hasClass(d.SHOW) || n._hoverState === f.SHOW ? void (n._hoverState = f.SHOW) : (clearTimeout(n._timeout), 
                    n._hoverState = f.SHOW, n.config.delay && n.config.delay.show ? void (n._timeout = setTimeout(function() {
                        n._hoverState === f.SHOW && n.show();
                    }, n.config.delay.show)) : void n.show());
                }, s.prototype._leave = function(e, n) {
                    var r = this.constructor.DATA_KEY;
                    if (n = n || t(e.currentTarget).data(r), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), 
                    t(e.currentTarget).data(r, n)), e && (n._activeTrigger["focusout" === e.type ? m.FOCUS : m.HOVER] = !1), 
                    !n._isWithActiveTrigger()) {
                        if (clearTimeout(n._timeout), n._hoverState = f.OUT, !n.config.delay || !n.config.delay.hide) return void n.hide();
                        n._timeout = setTimeout(function() {
                            n._hoverState === f.OUT && n.hide();
                        }, n.config.delay.hide);
                    }
                }, s.prototype._isWithActiveTrigger = function() {
                    for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                    return !1;
                }, s.prototype._getConfig = function(n) {
                    return n = t.extend({}, this.constructor.Default, t(this.element).data(), n), n.delay && "number" == typeof n.delay && (n.delay = {
                        show: n.delay,
                        hide: n.delay
                    }), o.typeCheckConfig(e, n, this.constructor.DefaultType), n;
                }, s.prototype._getDelegateConfig = function() {
                    var t = {};
                    if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t;
                }, s._jQueryInterface = function(e) {
                    return this.each(function() {
                        var n = t(this).data("bs.tooltip"), i = "object" === (void 0 === e ? "undefined" : r(e)) && e;
                        if ((n || !/dispose|hide/.test(e)) && (n || (n = new s(this, i), t(this).data("bs.tooltip", n)), 
                        "string" == typeof e)) {
                            if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                            n[e]();
                        }
                    });
                }, i(s, null, [ {
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6";
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return u;
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return e;
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return "bs.tooltip";
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return h;
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return a;
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return l;
                    }
                } ]), s;
            }();
            return t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function() {
                return t.fn[e] = s, v._jQueryInterface;
            }, v;
        }(jQuery));
        !function(o) {
            var s = "popover", u = ".bs.popover", l = o.fn[s], c = o.extend({}, a.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }), f = o.extend({}, a.DefaultType, {
                content: "(string|element|function)"
            }), h = {
                FADE: "fade",
                SHOW: "show"
            }, d = {
                TITLE: ".popover-title",
                CONTENT: ".popover-content"
            }, p = {
                HIDE: "hide" + u,
                HIDDEN: "hidden" + u,
                SHOW: "show" + u,
                SHOWN: "shown" + u,
                INSERTED: "inserted" + u,
                CLICK: "click" + u,
                FOCUSIN: "focusin" + u,
                FOCUSOUT: "focusout" + u,
                MOUSEENTER: "mouseenter" + u,
                MOUSELEAVE: "mouseleave" + u
            }, g = function(a) {
                function l() {
                    return n(this, l), t(this, a.apply(this, arguments));
                }
                return e(l, a), l.prototype.isWithContent = function() {
                    return this.getTitle() || this._getContent();
                }, l.prototype.getTipElement = function() {
                    return this.tip = this.tip || o(this.config.template)[0];
                }, l.prototype.setContent = function() {
                    var t = o(this.getTipElement());
                    this.setElementContent(t.find(d.TITLE), this.getTitle()), this.setElementContent(t.find(d.CONTENT), this._getContent()), 
                    t.removeClass(h.FADE + " " + h.SHOW), this.cleanupTether();
                }, l.prototype._getContent = function() {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content);
                }, l._jQueryInterface = function(t) {
                    return this.each(function() {
                        var e = o(this).data("bs.popover"), n = "object" === (void 0 === t ? "undefined" : r(t)) ? t : null;
                        if ((e || !/destroy|hide/.test(t)) && (e || (e = new l(this, n), o(this).data("bs.popover", e)), 
                        "string" == typeof t)) {
                            if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
                            e[t]();
                        }
                    });
                }, i(l, null, [ {
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha.6";
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return c;
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return s;
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return "bs.popover";
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return p;
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return u;
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return f;
                    }
                } ]), l;
            }(a);
            o.fn[s] = g._jQueryInterface, o.fn[s].Constructor = g, o.fn[s].noConflict = function() {
                return o.fn[s] = l, g._jQueryInterface;
            };
        }(jQuery);
    }();
}, function(t, e, n) {
    n(9), t.exports = angular;
}, function(t, e) {
    /**
 * @license AngularJS v1.6.5
 * (c) 2010-2017 Google, Inc. http://angularjs.org
 * License: MIT
 */
    !function(t) {
        "use strict";
        function e(t) {
            if (!w(t)) return Qr;
            b(t.objectMaxDepth) && (Qr.objectMaxDepth = n(t.objectMaxDepth) ? t.objectMaxDepth : NaN);
        }
        function n(t) {
            return C(t) && t > 0;
        }
        function r(t, e) {
            return e = e || Error, function() {
                var n, r, i = arguments[0], o = arguments[1], a = "[" + (t ? t + ":" : "") + i + "] ", s = G(arguments, 2).map(function(t) {
                    return xt(t, Qr.objectMaxDepth);
                });
                for (a += o.replace(/\{\d+\}/g, function(t) {
                    var e = +t.slice(1, -1);
                    return e < s.length ? s[e] : t;
                }), a += "\nhttp://errors.angularjs.org/1.6.5/" + (t ? t + "/" : "") + i, r = 0, 
                n = "?"; r < s.length; r++, n = "&") a += n + "p" + r + "=" + encodeURIComponent(s[r]);
                return new e(a);
            };
        }
        function i(t) {
            if (null == t || O(t)) return !1;
            if (mi(t) || x(t) || ii && t instanceof ii) return !0;
            var e = "length" in Object(t) && t.length;
            return C(e) && (e >= 0 && (e - 1 in t || t instanceof Array) || "function" == typeof t.item);
        }
        function o(t, e, n) {
            var r, a;
            if (t) if (S(t)) for (r in t) "prototype" !== r && "length" !== r && "name" !== r && t.hasOwnProperty(r) && e.call(n, t[r], r, t); else if (mi(t) || i(t)) {
                var s = "object" != typeof t;
                for (r = 0, a = t.length; r < a; r++) (s || r in t) && e.call(n, t[r], r, t);
            } else if (t.forEach && t.forEach !== o) t.forEach(e, n, t); else if (E(t)) for (r in t) e.call(n, t[r], r, t); else if ("function" == typeof t.hasOwnProperty) for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t); else for (r in t) Jr.call(t, r) && e.call(n, t[r], r, t);
            return t;
        }
        function a(t, e, n) {
            for (var r = Object.keys(t).sort(), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]);
            return r;
        }
        function s(t) {
            return function(e, n) {
                t(n, e);
            };
        }
        function u() {
            return ++pi;
        }
        function l(t, e) {
            e ? t.$$hashKey = e : delete t.$$hashKey;
        }
        function c(t, e, n) {
            for (var r = t.$$hashKey, i = 0, o = e.length; i < o; ++i) {
                var a = e[i];
                if (w(a) || S(a)) for (var s = Object.keys(a), u = 0, f = s.length; u < f; u++) {
                    var h = s[u], d = a[h];
                    n && w(d) ? _(d) ? t[h] = new Date(d.valueOf()) : A(d) ? t[h] = new RegExp(d) : d.nodeName ? t[h] = d.cloneNode(!0) : V(d) ? t[h] = d.clone() : (w(t[h]) || (t[h] = mi(d) ? [] : {}), 
                    c(t[h], [ d ], !0)) : t[h] = d;
                }
            }
            return l(t, r), t;
        }
        function f(t) {
            return c(t, si.call(arguments, 1), !1);
        }
        function h(t) {
            return c(t, si.call(arguments, 1), !0);
        }
        function d(t) {
            return parseInt(t, 10);
        }
        function p(t, e) {
            return f(Object.create(t), e);
        }
        function g() {}
        function m(t) {
            return t;
        }
        function v(t) {
            return function() {
                return t;
            };
        }
        function $(t) {
            return S(t.toString) && t.toString !== ci;
        }
        function y(t) {
            return void 0 === t;
        }
        function b(t) {
            return void 0 !== t;
        }
        function w(t) {
            return null !== t && "object" == typeof t;
        }
        function E(t) {
            return null !== t && "object" == typeof t && !fi(t);
        }
        function x(t) {
            return "string" == typeof t;
        }
        function C(t) {
            return "number" == typeof t;
        }
        function _(t) {
            return "[object Date]" === ci.call(t);
        }
        function T(t) {
            switch (ci.call(t)) {
              case "[object Error]":
              case "[object Exception]":
              case "[object DOMException]":
                return !0;

              default:
                return t instanceof Error;
            }
        }
        function S(t) {
            return "function" == typeof t;
        }
        function A(t) {
            return "[object RegExp]" === ci.call(t);
        }
        function O(t) {
            return t && t.window === t;
        }
        function k(t) {
            return t && t.$evalAsync && t.$watch;
        }
        function D(t) {
            return "[object File]" === ci.call(t);
        }
        function I(t) {
            return "[object FormData]" === ci.call(t);
        }
        function N(t) {
            return "[object Blob]" === ci.call(t);
        }
        function M(t) {
            return "boolean" == typeof t;
        }
        function j(t) {
            return t && S(t.then);
        }
        function L(t) {
            return t && C(t.length) && vi.test(ci.call(t));
        }
        function P(t) {
            return "[object ArrayBuffer]" === ci.call(t);
        }
        function V(t) {
            return !(!t || !(t.nodeName || t.prop && t.attr && t.find));
        }
        function R(t) {
            var e, n = {}, r = t.split(",");
            for (e = 0; e < r.length; e++) n[r[e]] = !0;
            return n;
        }
        function H(t) {
            return Zr(t.nodeName || t[0] && t[0].nodeName);
        }
        function F(t, e) {
            return -1 !== Array.prototype.indexOf.call(t, e);
        }
        function W(t, e) {
            var n = t.indexOf(e);
            return n >= 0 && t.splice(n, 1), n;
        }
        function U(t, e, r) {
            function i(t, e, n) {
                if (--n < 0) return "...";
                var r, i = e.$$hashKey;
                if (mi(t)) for (var o = 0, s = t.length; o < s; o++) e.push(a(t[o], n)); else if (E(t)) for (r in t) e[r] = a(t[r], n); else if (t && "function" == typeof t.hasOwnProperty) for (r in t) t.hasOwnProperty(r) && (e[r] = a(t[r], n)); else for (r in t) Jr.call(t, r) && (e[r] = a(t[r], n));
                return l(e, i), e;
            }
            function a(t, e) {
                if (!w(t)) return t;
                var n = u.indexOf(t);
                if (-1 !== n) return c[n];
                if (O(t) || k(t)) throw hi("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
                var r = !1, o = s(t);
                return void 0 === o && (o = mi(t) ? [] : Object.create(fi(t)), r = !0), u.push(t), 
                c.push(o), r ? i(t, o, e) : o;
            }
            function s(t) {
                switch (ci.call(t)) {
                  case "[object Int8Array]":
                  case "[object Int16Array]":
                  case "[object Int32Array]":
                  case "[object Float32Array]":
                  case "[object Float64Array]":
                  case "[object Uint8Array]":
                  case "[object Uint8ClampedArray]":
                  case "[object Uint16Array]":
                  case "[object Uint32Array]":
                    return new t.constructor(a(t.buffer), t.byteOffset, t.length);

                  case "[object ArrayBuffer]":
                    if (!t.slice) {
                        var e = new ArrayBuffer(t.byteLength);
                        return new Uint8Array(e).set(new Uint8Array(t)), e;
                    }
                    return t.slice(0);

                  case "[object Boolean]":
                  case "[object Number]":
                  case "[object String]":
                  case "[object Date]":
                    return new t.constructor(t.valueOf());

                  case "[object RegExp]":
                    var n = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]);
                    return n.lastIndex = t.lastIndex, n;

                  case "[object Blob]":
                    return new t.constructor([ t ], {
                        type: t.type
                    });
                }
                if (S(t.cloneNode)) return t.cloneNode(!0);
            }
            var u = [], c = [];
            if (r = n(r) ? r : NaN, e) {
                if (L(e) || P(e)) throw hi("cpta", "Can't copy! TypedArray destination cannot be mutated.");
                if (t === e) throw hi("cpi", "Can't copy! Source and destination are identical.");
                return mi(e) ? e.length = 0 : o(e, function(t, n) {
                    "$$hashKey" !== n && delete e[n];
                }), u.push(t), c.push(e), i(t, e, r);
            }
            return a(t, r);
        }
        function q(t, e) {
            return t === e || t !== t && e !== e;
        }
        function B(t, e) {
            if (t === e) return !0;
            if (null === t || null === e) return !1;
            if (t !== t && e !== e) return !0;
            var n, r, i, o = typeof t, a = typeof e;
            if (o === a && "object" === o) {
                if (!mi(t)) {
                    if (_(t)) return !!_(e) && q(t.getTime(), e.getTime());
                    if (A(t)) return !!A(e) && t.toString() === e.toString();
                    if (k(t) || k(e) || O(t) || O(e) || mi(e) || _(e) || A(e)) return !1;
                    i = $t();
                    for (r in t) if ("$" !== r.charAt(0) && !S(t[r])) {
                        if (!B(t[r], e[r])) return !1;
                        i[r] = !0;
                    }
                    for (r in e) if (!(r in i) && "$" !== r.charAt(0) && b(e[r]) && !S(e[r])) return !1;
                    return !0;
                }
                if (!mi(e)) return !1;
                if ((n = t.length) === e.length) {
                    for (r = 0; r < n; r++) if (!B(t[r], e[r])) return !1;
                    return !0;
                }
            }
            return !1;
        }
        function z(t, e, n) {
            return t.concat(si.call(e, n));
        }
        function G(t, e) {
            return si.call(t, e || 0);
        }
        function K(t, e) {
            var n = arguments.length > 2 ? G(arguments, 2) : [];
            return !S(e) || e instanceof RegExp ? e : n.length ? function() {
                return arguments.length ? e.apply(t, z(n, arguments, 0)) : e.apply(t, n);
            } : function() {
                return arguments.length ? e.apply(t, arguments) : e.call(t);
            };
        }
        function Q(e, n) {
            var r = n;
            return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? r = void 0 : O(n) ? r = "$WINDOW" : n && t.document === n ? r = "$DOCUMENT" : k(n) && (r = "$SCOPE"), 
            r;
        }
        function Y(t, e) {
            if (!y(t)) return C(e) || (e = e ? 2 : null), JSON.stringify(t, Q, e);
        }
        function X(t) {
            return x(t) ? JSON.parse(t) : t;
        }
        function J(t, e) {
            t = t.replace(Ei, "");
            var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
            return gi(n) ? e : n;
        }
        function Z(t, e) {
            return t = new Date(t.getTime()), t.setMinutes(t.getMinutes() + e), t;
        }
        function tt(t, e, n) {
            n = n ? -1 : 1;
            var r = t.getTimezoneOffset();
            return Z(t, n * (J(e, r) - r));
        }
        function et(t) {
            t = ii(t).clone().empty();
            var e = ii("<div>").append(t).html();
            try {
                return t[0].nodeType === Ai ? Zr(e) : e.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function(t, e) {
                    return "<" + Zr(e);
                });
            } catch (t) {
                return Zr(e);
            }
        }
        function nt(t) {
            try {
                return decodeURIComponent(t);
            } catch (t) {}
        }
        function rt(t) {
            var e = {};
            return o((t || "").split("&"), function(t) {
                var n, r, i;
                t && (r = t = t.replace(/\+/g, "%20"), n = t.indexOf("="), -1 !== n && (r = t.substring(0, n), 
                i = t.substring(n + 1)), r = nt(r), b(r) && (i = !b(i) || nt(i), Jr.call(e, r) ? mi(e[r]) ? e[r].push(i) : e[r] = [ e[r], i ] : e[r] = i));
            }), e;
        }
        function it(t) {
            var e = [];
            return o(t, function(t, n) {
                mi(t) ? o(t, function(t) {
                    e.push(at(n, !0) + (!0 === t ? "" : "=" + at(t, !0)));
                }) : e.push(at(n, !0) + (!0 === t ? "" : "=" + at(t, !0)));
            }), e.length ? e.join("&") : "";
        }
        function ot(t) {
            return at(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
        }
        function at(t, e) {
            return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+");
        }
        function st(t, e) {
            var n, r, i = xi.length;
            for (r = 0; r < i; ++r) if (n = xi[r] + e, x(n = t.getAttribute(n))) return n;
            return null;
        }
        function ut(e, n) {
            var r, i, a = {};
            if (o(xi, function(t) {
                var n = t + "app";
                !r && e.hasAttribute && e.hasAttribute(n) && (r = e, i = e.getAttribute(n));
            }), o(xi, function(t) {
                var n, o = t + "app";
                !r && (n = e.querySelector("[" + o.replace(":", "\\:") + "]")) && (r = n, i = n.getAttribute(o));
            }), r) {
                if (!Ci) return void t.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.");
                a.strictDi = null !== st(r, "strict-di"), n(r, i ? [ i ] : [], a);
            }
        }
        function lt(e, n, r) {
            w(r) || (r = {}), r = f({
                strictDi: !1
            }, r);
            var i = function() {
                if (e = ii(e), e.injector()) {
                    var i = e[0] === t.document ? "document" : et(e);
                    throw hi("btstrpd", "App already bootstrapped with this element '{0}'", i.replace(/</, "&lt;").replace(/>/, "&gt;"));
                }
                n = n || [], n.unshift([ "$provide", function(t) {
                    t.value("$rootElement", e);
                } ]), r.debugInfoEnabled && n.push([ "$compileProvider", function(t) {
                    t.debugInfoEnabled(!0);
                } ]), n.unshift("ng");
                var o = le(n, r.strictDi);
                return o.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", function(t, e, n, r) {
                    t.$apply(function() {
                        e.data("$injector", r), n(e)(t);
                    });
                } ]), o;
            }, a = /^NG_ENABLE_DEBUG_INFO!/, s = /^NG_DEFER_BOOTSTRAP!/;
            if (t && a.test(t.name) && (r.debugInfoEnabled = !0, t.name = t.name.replace(a, "")), 
            t && !s.test(t.name)) return i();
            t.name = t.name.replace(s, ""), di.resumeBootstrap = function(t) {
                return o(t, function(t) {
                    n.push(t);
                }), i();
            }, S(di.resumeDeferredBootstrap) && di.resumeDeferredBootstrap();
        }
        function ct() {
            t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload();
        }
        function ft(t) {
            var e = di.element(t).injector();
            if (!e) throw hi("test", "no injector found for element argument to getTestability");
            return e.get("$$testability");
        }
        function ht(t, e) {
            return e = e || "_", t.replace(_i, function(t, n) {
                return (n ? e : "") + t.toLowerCase();
            });
        }
        function dt(t, e, n) {
            if (!t) throw hi("areq", "Argument '{0}' is {1}", e || "?", n || "required");
            return t;
        }
        function pt(t, e, n) {
            return n && mi(t) && (t = t[t.length - 1]), dt(S(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), 
            t;
        }
        function gt(t, e) {
            if ("hasOwnProperty" === t) throw hi("badname", "hasOwnProperty is not a valid {0} name", e);
        }
        function mt(t, e, n) {
            if (!e) return t;
            for (var r, i = e.split("."), o = t, a = i.length, s = 0; s < a; s++) r = i[s], 
            t && (t = (o = t)[r]);
            return !n && S(t) ? K(o, t) : t;
        }
        function vt(t) {
            for (var e, n = t[0], r = t[t.length - 1], i = 1; n !== r && (n = n.nextSibling); i++) (e || t[i] !== n) && (e || (e = ii(si.call(t, 0, i))), 
            e.push(n));
            return e || t;
        }
        function $t() {
            return Object.create(null);
        }
        function yt(t) {
            if (null == t) return "";
            switch (typeof t) {
              case "string":
                break;

              case "number":
                t = "" + t;
                break;

              default:
                t = !$(t) || mi(t) || _(t) ? Y(t) : t.toString();
            }
            return t;
        }
        function bt(t) {
            function e(t, e, n) {
                return t[e] || (t[e] = n());
            }
            var n = r("$injector"), i = r("ng"), o = e(t, "angular", Object);
            return o.$$minErr = o.$$minErr || r, e(o, "module", function() {
                var t = {};
                return function(r, o, a) {
                    var s = {};
                    return function(t, e) {
                        if ("hasOwnProperty" === t) throw i("badname", "hasOwnProperty is not a valid {0} name", e);
                    }(r, "module"), o && t.hasOwnProperty(r) && (t[r] = null), e(t, r, function() {
                        function t(t, e, n, r) {
                            return r || (r = u), function() {
                                return r[n || "push"]([ t, e, arguments ]), h;
                            };
                        }
                        function e(t, e, n) {
                            return n || (n = u), function(i, o) {
                                return o && S(o) && (o.$$moduleName = r), n.push([ t, e, arguments ]), h;
                            };
                        }
                        if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                        var u = [], l = [], c = [], f = t("$injector", "invoke", "push", l), h = {
                            _invokeQueue: u,
                            _configBlocks: l,
                            _runBlocks: c,
                            info: function(t) {
                                if (b(t)) {
                                    if (!w(t)) throw i("aobj", "Argument '{0}' must be an object", "value");
                                    return s = t, this;
                                }
                                return s;
                            },
                            requires: o,
                            name: r,
                            provider: e("$provide", "provider"),
                            factory: e("$provide", "factory"),
                            service: e("$provide", "service"),
                            value: t("$provide", "value"),
                            constant: t("$provide", "constant", "unshift"),
                            decorator: e("$provide", "decorator", l),
                            animation: e("$animateProvider", "register"),
                            filter: e("$filterProvider", "register"),
                            controller: e("$controllerProvider", "register"),
                            directive: e("$compileProvider", "directive"),
                            component: e("$compileProvider", "component"),
                            config: f,
                            run: function(t) {
                                return c.push(t), this;
                            }
                        };
                        return a && f(a), h;
                    });
                };
            });
        }
        function wt(t, e) {
            if (mi(t)) {
                e = e || [];
                for (var n = 0, r = t.length; n < r; n++) e[n] = t[n];
            } else if (w(t)) {
                e = e || {};
                for (var i in t) "$" === i.charAt(0) && "$" === i.charAt(1) || (e[i] = t[i]);
            }
            return e || t;
        }
        function Et(t, e) {
            var r = [];
            return n(e) && (t = di.copy(t, null, e)), JSON.stringify(t, function(t, e) {
                if (e = Q(t, e), w(e)) {
                    if (r.indexOf(e) >= 0) return "...";
                    r.push(e);
                }
                return e;
            });
        }
        function xt(t, e) {
            return "function" == typeof t ? t.toString().replace(/ \{[\s\S]*$/, "") : y(t) ? "undefined" : "string" != typeof t ? Et(t, e) : t;
        }
        function Ct() {
            return ++Mi;
        }
        function _t(t) {
            return St(t.replace(Li, "ms-"));
        }
        function Tt(t, e) {
            return e.toUpperCase();
        }
        function St(t) {
            return t.replace(ji, Tt);
        }
        function At(t) {
            return !Hi.test(t);
        }
        function Ot(t) {
            var e = t.nodeType;
            return e === Si || !e || e === ki;
        }
        function kt(t) {
            for (var e in Ni[t.ng339]) return !0;
            return !1;
        }
        function Dt(t, e) {
            var n, r, i, a, s = e.createDocumentFragment(), u = [];
            if (At(t)) u.push(e.createTextNode(t)); else {
                for (n = s.appendChild(e.createElement("div")), r = (Fi.exec(t) || [ "", "" ])[1].toLowerCase(), 
                i = Ui[r] || Ui._default, n.innerHTML = i[1] + t.replace(Wi, "<$1></$2>") + i[2], 
                a = i[0]; a--; ) n = n.lastChild;
                u = z(u, n.childNodes), n = s.firstChild, n.textContent = "";
            }
            return s.textContent = "", s.innerHTML = "", o(u, function(t) {
                s.appendChild(t);
            }), s;
        }
        function It(e, n) {
            n = n || t.document;
            var r;
            return (r = Ri.exec(e)) ? [ n.createElement(r[1]) ] : (r = Dt(e, n)) ? r.childNodes : [];
        }
        function Nt(t, e) {
            var n = t.parentNode;
            n && n.replaceChild(e, t), e.appendChild(t);
        }
        function Mt(t) {
            if (t instanceof Mt) return t;
            var e;
            if (x(t) && (t = $i(t), e = !0), !(this instanceof Mt)) {
                if (e && "<" !== t.charAt(0)) throw Vi("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                return new Mt(t);
            }
            e ? qt(this, It(t)) : S(t) ? Yt(t) : qt(this, t);
        }
        function jt(t) {
            return t.cloneNode(!0);
        }
        function Lt(t, e) {
            !e && Ot(t) && ii.cleanData([ t ]), t.querySelectorAll && ii.cleanData(t.querySelectorAll("*"));
        }
        function Pt(t, e, n, r) {
            if (b(r)) throw Vi("offargs", "jqLite#off() does not support the `selector` argument");
            var i = Rt(t), a = i && i.events, s = i && i.handle;
            if (s) if (e) {
                var u = function(e) {
                    var r = a[e];
                    b(n) && W(r || [], n), b(n) && r && r.length > 0 || (t.removeEventListener(e, s), 
                    delete a[e]);
                };
                o(e.split(" "), function(t) {
                    u(t), Pi[t] && u(Pi[t]);
                });
            } else for (e in a) "$destroy" !== e && t.removeEventListener(e, s), delete a[e];
        }
        function Vt(t, e) {
            var n = t.ng339, r = n && Ni[n];
            if (r) {
                if (e) return void delete r.data[e];
                r.handle && (r.events.$destroy && r.handle({}, "$destroy"), Pt(t)), delete Ni[n], 
                t.ng339 = void 0;
            }
        }
        function Rt(t, e) {
            var n = t.ng339, r = n && Ni[n];
            return e && !r && (t.ng339 = n = Ct(), r = Ni[n] = {
                events: {},
                data: {},
                handle: void 0
            }), r;
        }
        function Ht(t, e, n) {
            if (Ot(t)) {
                var r, i = b(n), o = !i && e && !w(e), a = !e, s = Rt(t, !o), u = s && s.data;
                if (i) u[St(e)] = n; else {
                    if (a) return u;
                    if (o) return u && u[St(e)];
                    for (r in e) u[St(r)] = e[r];
                }
            }
        }
        function Ft(t, e) {
            return !!t.getAttribute && (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1;
        }
        function Wt(t, e) {
            e && t.setAttribute && o(e.split(" "), function(e) {
                t.setAttribute("class", $i((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + $i(e) + " ", " ")));
            });
        }
        function Ut(t, e) {
            if (e && t.setAttribute) {
                var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                o(e.split(" "), function(t) {
                    t = $i(t), -1 === n.indexOf(" " + t + " ") && (n += t + " ");
                }), t.setAttribute("class", $i(n));
            }
        }
        function qt(t, e) {
            if (e) if (e.nodeType) t[t.length++] = e; else {
                var n = e.length;
                if ("number" == typeof n && e.window !== e) {
                    if (n) for (var r = 0; r < n; r++) t[t.length++] = e[r];
                } else t[t.length++] = e;
            }
        }
        function Bt(t, e) {
            return zt(t, "$" + (e || "ngController") + "Controller");
        }
        function zt(t, e, n) {
            t.nodeType === ki && (t = t.documentElement);
            for (var r = mi(e) ? e : [ e ]; t; ) {
                for (var i = 0, o = r.length; i < o; i++) if (b(n = ii.data(t, r[i]))) return n;
                t = t.parentNode || t.nodeType === Di && t.host;
            }
        }
        function Gt(t) {
            for (Lt(t, !0); t.firstChild; ) t.removeChild(t.firstChild);
        }
        function Kt(t, e) {
            e || Lt(t);
            var n = t.parentNode;
            n && n.removeChild(t);
        }
        function Qt(e, n) {
            n = n || t, "complete" === n.document.readyState ? n.setTimeout(e) : ii(n).on("load", e);
        }
        function Yt(e) {
            function n() {
                t.document.removeEventListener("DOMContentLoaded", n), t.removeEventListener("load", n), 
                e();
            }
            "complete" === t.document.readyState ? t.setTimeout(e) : (t.document.addEventListener("DOMContentLoaded", n), 
            t.addEventListener("load", n));
        }
        function Xt(t, e) {
            var n = zi[e.toLowerCase()];
            return n && Gi[H(t)] && n;
        }
        function Jt(t) {
            return Ki[t];
        }
        function Zt(t, e) {
            var n = function(n, r) {
                n.isDefaultPrevented = function() {
                    return n.defaultPrevented;
                };
                var i = e[r || n.type], o = i ? i.length : 0;
                if (o) {
                    if (y(n.immediatePropagationStopped)) {
                        var a = n.stopImmediatePropagation;
                        n.stopImmediatePropagation = function() {
                            n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n);
                        };
                    }
                    n.isImmediatePropagationStopped = function() {
                        return !0 === n.immediatePropagationStopped;
                    };
                    var s = i.specialHandlerWrapper || te;
                    o > 1 && (i = wt(i));
                    for (var u = 0; u < o; u++) n.isImmediatePropagationStopped() || s(t, n, i[u]);
                }
            };
            return n.elem = t, n;
        }
        function te(t, e, n) {
            n.call(t, e);
        }
        function ee(t, e, n) {
            var r = e.relatedTarget;
            r && (r === t || qi.call(t, r)) || n.call(t, e);
        }
        function ne() {
            this.$get = function() {
                return f(Mt, {
                    hasClass: function(t, e) {
                        return t.attr && (t = t[0]), Ft(t, e);
                    },
                    addClass: function(t, e) {
                        return t.attr && (t = t[0]), Ut(t, e);
                    },
                    removeClass: function(t, e) {
                        return t.attr && (t = t[0]), Wt(t, e);
                    }
                });
            };
        }
        function re(t, e) {
            var n = t && t.$$hashKey;
            if (n) return "function" == typeof n && (n = t.$$hashKey()), n;
            var r = typeof t;
            return n = "function" === r || "object" === r && null !== t ? t.$$hashKey = r + ":" + (e || u)() : r + ":" + t;
        }
        function ie() {
            this._keys = [], this._values = [], this._lastKey = NaN, this._lastIndex = -1;
        }
        function oe(t) {
            return Function.prototype.toString.call(t);
        }
        function ae(t) {
            var e = oe(t).replace(no, "");
            return e.match(Ji) || e.match(Zi);
        }
        function se(t) {
            var e = ae(t);
            return e ? "function(" + (e[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
        }
        function ue(t, e, n) {
            var r, i, a;
            if ("function" == typeof t) {
                if (!(r = t.$inject)) {
                    if (r = [], t.length) {
                        if (e) throw x(n) && n || (n = t.name || se(t)), ro("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                        i = ae(t), o(i[1].split(to), function(t) {
                            t.replace(eo, function(t, e, n) {
                                r.push(n);
                            });
                        });
                    }
                    t.$inject = r;
                }
            } else mi(t) ? (a = t.length - 1, pt(t[a], "fn"), r = t.slice(0, a)) : pt(t, "fn", !0);
            return r;
        }
        function le(t, e) {
            function n(t) {
                return function(e, n) {
                    if (!w(e)) return t(e, n);
                    o(e, s(t));
                };
            }
            function r(t, e) {
                if (gt(t, "service"), (S(e) || mi(e)) && (e = E.instantiate(e)), !e.$get) throw ro("pget", "Provider '{0}' must define $get factory method.", t);
                return b[t + g] = e;
            }
            function i(t, e) {
                return function() {
                    var n = T.invoke(e, this);
                    if (y(n)) throw ro("undef", "Provider '{0}' must return a value from $get factory method.", t);
                    return n;
                };
            }
            function a(t, e, n) {
                return r(t, {
                    $get: !1 !== n ? i(t, e) : e
                });
            }
            function u(t, e) {
                return a(t, [ "$injector", function(t) {
                    return t.instantiate(e);
                } ]);
            }
            function l(t, e) {
                return a(t, v(e), !1);
            }
            function c(t, e) {
                gt(t, "constant"), b[t] = e, C[t] = e;
            }
            function f(t, e) {
                var n = E.get(t + g), r = n.$get;
                n.$get = function() {
                    var t = T.invoke(r, n);
                    return T.invoke(e, null, {
                        $delegate: t
                    });
                };
            }
            function h(t) {
                dt(y(t) || mi(t), "modulesToLoad", "not an array");
                var e, n = [];
                return o(t, function(t) {
                    function r(t) {
                        var e, n;
                        for (e = 0, n = t.length; e < n; e++) {
                            var r = t[e], i = E.get(r[0]);
                            i[r[1]].apply(i, r[2]);
                        }
                    }
                    if (!$.get(t)) {
                        $.set(t, !0);
                        try {
                            x(t) ? (e = ai(t), T.modules[t] = e, n = n.concat(h(e.requires)).concat(e._runBlocks), 
                            r(e._invokeQueue), r(e._configBlocks)) : S(t) ? n.push(E.invoke(t)) : mi(t) ? n.push(E.invoke(t)) : pt(t, "module");
                        } catch (e) {
                            throw mi(t) && (t = t[t.length - 1]), e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), 
                            ro("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, e.stack || e.message || e);
                        }
                    }
                }), n;
            }
            function d(t, n) {
                function r(e, r) {
                    if (t.hasOwnProperty(e)) {
                        if (t[e] === p) throw ro("cdep", "Circular dependency found: {0}", e + " <- " + m.join(" <- "));
                        return t[e];
                    }
                    try {
                        return m.unshift(e), t[e] = p, t[e] = n(e, r), t[e];
                    } catch (n) {
                        throw t[e] === p && delete t[e], n;
                    } finally {
                        m.shift();
                    }
                }
                function i(t, n, i) {
                    for (var o = [], a = le.$$annotate(t, e, i), s = 0, u = a.length; s < u; s++) {
                        var l = a[s];
                        if ("string" != typeof l) throw ro("itkn", "Incorrect injection token! Expected service name as string, got {0}", l);
                        o.push(n && n.hasOwnProperty(l) ? n[l] : r(l, i));
                    }
                    return o;
                }
                function o(t) {
                    if (ri || "function" != typeof t) return !1;
                    var e = t.$$ngIsClass;
                    return M(e) || (e = t.$$ngIsClass = /^(?:class\b|constructor\()/.test(oe(t))), e;
                }
                function a(t, e, n, r) {
                    "string" == typeof n && (r = n, n = null);
                    var a = i(t, n, r);
                    return mi(t) && (t = t[t.length - 1]), o(t) ? (a.unshift(null), new (Function.prototype.bind.apply(t, a))()) : t.apply(e, a);
                }
                function s(t, e, n) {
                    var r = mi(t) ? t[t.length - 1] : t, o = i(t, e, n);
                    return o.unshift(null), new (Function.prototype.bind.apply(r, o))();
                }
                return {
                    invoke: a,
                    instantiate: s,
                    get: r,
                    annotate: le.$$annotate,
                    has: function(e) {
                        return b.hasOwnProperty(e + g) || t.hasOwnProperty(e);
                    }
                };
            }
            e = !0 === e;
            var p = {}, g = "Provider", m = [], $ = new Yi(), b = {
                $provide: {
                    provider: n(r),
                    factory: n(a),
                    service: n(u),
                    value: n(l),
                    constant: n(c),
                    decorator: f
                }
            }, E = b.$injector = d(b, function(t, e) {
                throw di.isString(e) && m.push(e), ro("unpr", "Unknown provider: {0}", m.join(" <- "));
            }), C = {}, _ = d(C, function(t, e) {
                var n = E.get(t + g, e);
                return T.invoke(n.$get, n, void 0, t);
            }), T = _;
            b["$injector" + g] = {
                $get: v(_)
            }, T.modules = E.modules = $t();
            var A = h(t);
            return T = _.get("$injector"), T.strictDi = e, o(A, function(t) {
                t && T.invoke(t);
            }), T;
        }
        function ce() {
            var t = !0;
            this.disableAutoScrolling = function() {
                t = !1;
            }, this.$get = [ "$window", "$location", "$rootScope", function(e, n, r) {
                function i(t) {
                    var e = null;
                    return Array.prototype.some.call(t, function(t) {
                        if ("a" === H(t)) return e = t, !0;
                    }), e;
                }
                function o() {
                    var t = s.yOffset;
                    if (S(t)) t = t(); else if (V(t)) {
                        var n = t[0], r = e.getComputedStyle(n);
                        t = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom;
                    } else C(t) || (t = 0);
                    return t;
                }
                function a(t) {
                    if (t) {
                        t.scrollIntoView();
                        var n = o();
                        if (n) {
                            var r = t.getBoundingClientRect().top;
                            e.scrollBy(0, r - n);
                        }
                    } else e.scrollTo(0, 0);
                }
                function s(t) {
                    t = x(t) ? t : C(t) ? t.toString() : n.hash();
                    var e;
                    t ? (e = u.getElementById(t)) ? a(e) : (e = i(u.getElementsByName(t))) ? a(e) : "top" === t && a(null) : a(null);
                }
                var u = e.document;
                return t && r.$watch(function() {
                    return n.hash();
                }, function(t, e) {
                    t === e && "" === t || Qt(function() {
                        r.$evalAsync(s);
                    });
                }), s;
            } ];
        }
        function fe(t, e) {
            return t || e ? t ? e ? (mi(t) && (t = t.join(" ")), mi(e) && (e = e.join(" ")), 
            t + " " + e) : t : e : "";
        }
        function he(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (n.nodeType === oo) return n;
            }
        }
        function de(t) {
            x(t) && (t = t.split(" "));
            var e = $t();
            return o(t, function(t) {
                t.length && (e[t] = !0);
            }), e;
        }
        function pe(t) {
            return w(t) ? t : {};
        }
        function ge(t, e, n, r) {
            function i(t) {
                try {
                    t.apply(null, G(arguments, 1));
                } finally {
                    if (0 === --v) for (;$.length; ) try {
                        $.pop()();
                    } catch (t) {
                        n.error(t);
                    }
                }
            }
            function a(t) {
                var e = t.indexOf("#");
                return -1 === e ? "" : t.substr(e);
            }
            function s() {
                C = null, l();
            }
            function u() {
                b = _(), b = y(b) ? null : b, B(b, A) && (b = A), A = b, w = b;
            }
            function l() {
                var t = w;
                u(), E === c.url() && t === b || (E = c.url(), w = b, o(T, function(t) {
                    t(c.url(), b);
                }));
            }
            var c = this, f = t.location, h = t.history, d = t.setTimeout, p = t.clearTimeout, m = {};
            c.isMock = !1;
            var v = 0, $ = [];
            c.$$completeOutstandingRequest = i, c.$$incOutstandingRequestCount = function() {
                v++;
            }, c.notifyWhenNoOutstandingRequests = function(t) {
                0 === v ? t() : $.push(t);
            };
            var b, w, E = f.href, x = e.find("base"), C = null, _ = r.history ? function() {
                try {
                    return h.state;
                } catch (t) {}
            } : g;
            u(), c.url = function(e, n, i) {
                if (y(i) && (i = null), f !== t.location && (f = t.location), h !== t.history && (h = t.history), 
                e) {
                    var o = w === i;
                    if (E === e && (!r.history || o)) return c;
                    var s = E && Ye(E) === Ye(e);
                    return E = e, w = i, !r.history || s && o ? (s || (C = e), n ? f.replace(e) : s ? f.hash = a(e) : f.href = e, 
                    f.href !== e && (C = e)) : (h[n ? "replaceState" : "pushState"](i, "", e), u()), 
                    C && (C = e), c;
                }
                return C || f.href.replace(/%27/g, "'");
            }, c.state = function() {
                return b;
            };
            var T = [], S = !1, A = null;
            c.onUrlChange = function(e) {
                return S || (r.history && ii(t).on("popstate", s), ii(t).on("hashchange", s), S = !0), 
                T.push(e), e;
            }, c.$$applicationDestroyed = function() {
                ii(t).off("hashchange popstate", s);
            }, c.$$checkUrlChange = l, c.baseHref = function() {
                var t = x.attr("href");
                return t ? t.replace(/^(https?:)?\/\/[^\/]*/, "") : "";
            }, c.defer = function(t, e) {
                var n;
                return v++, n = d(function() {
                    delete m[n], i(t);
                }, e || 0), m[n] = !0, n;
            }, c.defer.cancel = function(t) {
                return !!m[t] && (delete m[t], p(t), i(g), !0);
            };
        }
        function me() {
            this.$get = [ "$window", "$log", "$sniffer", "$document", function(t, e, n, r) {
                return new ge(t, r, e, n);
            } ];
        }
        function ve() {
            this.$get = function() {
                function t(t, n) {
                    function i(t) {
                        t !== h && (d ? d === t && (d = t.n) : d = t, o(t.n, t.p), o(t, h), h = t, h.n = null);
                    }
                    function o(t, e) {
                        t !== e && (t && (t.p = e), e && (e.n = t));
                    }
                    if (t in e) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
                    var a = 0, s = f({}, n, {
                        id: t
                    }), u = $t(), l = n && n.capacity || Number.MAX_VALUE, c = $t(), h = null, d = null;
                    return e[t] = {
                        put: function(t, e) {
                            if (!y(e)) {
                                if (l < Number.MAX_VALUE) {
                                    i(c[t] || (c[t] = {
                                        key: t
                                    }));
                                }
                                return t in u || a++, u[t] = e, a > l && this.remove(d.key), e;
                            }
                        },
                        get: function(t) {
                            if (l < Number.MAX_VALUE) {
                                var e = c[t];
                                if (!e) return;
                                i(e);
                            }
                            return u[t];
                        },
                        remove: function(t) {
                            if (l < Number.MAX_VALUE) {
                                var e = c[t];
                                if (!e) return;
                                e === h && (h = e.p), e === d && (d = e.n), o(e.n, e.p), delete c[t];
                            }
                            t in u && (delete u[t], a--);
                        },
                        removeAll: function() {
                            u = $t(), a = 0, c = $t(), h = d = null;
                        },
                        destroy: function() {
                            u = null, s = null, c = null, delete e[t];
                        },
                        info: function() {
                            return f({}, s, {
                                size: a
                            });
                        }
                    };
                }
                var e = {};
                return t.info = function() {
                    var t = {};
                    return o(e, function(e, n) {
                        t[n] = e.info();
                    }), t;
                }, t.get = function(t) {
                    return e[t];
                }, t;
            };
        }
        function $e() {
            this.$get = [ "$cacheFactory", function(t) {
                return t("templates");
            } ];
        }
        function ye() {}
        function be(e, n) {
            function r(t, e, n) {
                var r = /^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/, i = $t();
                return o(t, function(t, o) {
                    if (t in A) return void (i[o] = A[t]);
                    var a = t.match(r);
                    if (!a) throw ho("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", e, o, t, n ? "controller bindings definition" : "isolate scope definition");
                    i[o] = {
                        mode: a[1][0],
                        collection: "*" === a[2],
                        optional: "?" === a[3],
                        attrName: a[4] || o
                    }, a[4] && (A[t] = i[o]);
                }), i;
            }
            function i(t, e) {
                var n = {
                    isolateScope: null,
                    bindToController: null
                };
                if (w(t.scope) && (!0 === t.bindToController ? (n.bindToController = r(t.scope, e, !0), 
                n.isolateScope = {}) : n.isolateScope = r(t.scope, e, !1)), w(t.bindToController) && (n.bindToController = r(t.bindToController, e, !0)), 
                n.bindToController && !t.controller) throw ho("noctrl", "Cannot bind to controller without directive '{0}'s controller.", e);
                return n;
            }
            function a(t) {
                var e = t.charAt(0);
                if (!e || e !== Zr(e)) throw ho("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", t);
                if (t !== t.trim()) throw ho("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", t);
            }
            function u(t) {
                var e = t.require || t.controller && t.name;
                return !mi(e) && w(e) && o(e, function(t, n) {
                    var r = t.match(C);
                    t.substring(r[0].length) || (e[n] = r[0] + n);
                }), e;
            }
            function l(t, e) {
                if (t && (!x(t) || !/[EACM]/.test(t))) throw ho("badrestrict", "Restrict property '{0}' of directive '{1}' is invalid", t, e);
                return t || "EA";
            }
            var c = {}, h = "Directive", d = /^\s*directive:\s*([\w-]+)\s+(.*)$/, $ = /(([\w-]+)(?::([^;]+))?;?)/, E = R("ngSrc,ngSrcset,src,srcset"), C = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, _ = /^(on[a-z]+|formaction)$/, A = $t();
            this.directive = function t(n, r) {
                return dt(n, "name"), gt(n, "directive"), x(n) ? (a(n), dt(r, "directiveFactory"), 
                c.hasOwnProperty(n) || (c[n] = [], e.factory(n + h, [ "$injector", "$exceptionHandler", function(t, e) {
                    var r = [];
                    return o(c[n], function(i, o) {
                        try {
                            var a = t.invoke(i);
                            S(a) ? a = {
                                compile: v(a)
                            } : !a.compile && a.link && (a.compile = v(a.link)), a.priority = a.priority || 0, 
                            a.index = o, a.name = a.name || n, a.require = u(a), a.restrict = l(a.restrict, n), 
                            a.$$moduleName = i.$$moduleName, r.push(a);
                        } catch (t) {
                            e(t);
                        }
                    }), r;
                } ])), c[n].push(r)) : o(n, s(t)), this;
            }, this.component = function t(e, n) {
                function r(t) {
                    function e(e) {
                        return S(e) || mi(e) ? function(n, r) {
                            return t.invoke(e, this, {
                                $element: n,
                                $attrs: r
                            });
                        } : e;
                    }
                    var r = n.template || n.templateUrl ? n.template : "", a = {
                        controller: i,
                        controllerAs: _e(n.controller) || n.controllerAs || "$ctrl",
                        template: e(r),
                        templateUrl: e(n.templateUrl),
                        transclude: n.transclude,
                        scope: {},
                        bindToController: n.bindings || {},
                        restrict: "E",
                        require: n.require
                    };
                    return o(n, function(t, e) {
                        "$" === e.charAt(0) && (a[e] = t);
                    }), a;
                }
                if (!x(e)) return o(e, s(K(this, t))), this;
                var i = n.controller || function() {};
                return o(n, function(t, e) {
                    "$" === e.charAt(0) && (r[e] = t, S(i) && (i[e] = t));
                }), r.$inject = [ "$injector" ], this.directive(e, r);
            }, this.aHrefSanitizationWhitelist = function(t) {
                return b(t) ? (n.aHrefSanitizationWhitelist(t), this) : n.aHrefSanitizationWhitelist();
            }, this.imgSrcSanitizationWhitelist = function(t) {
                return b(t) ? (n.imgSrcSanitizationWhitelist(t), this) : n.imgSrcSanitizationWhitelist();
            };
            var O = !0;
            this.debugInfoEnabled = function(t) {
                return b(t) ? (O = t, this) : O;
            };
            var D = !1;
            this.preAssignBindingsEnabled = function(t) {
                return b(t) ? (D = t, this) : D;
            };
            var I = 10;
            this.onChangesTtl = function(t) {
                return arguments.length ? (I = t, this) : I;
            };
            var N = !0;
            this.commentDirectivesEnabled = function(t) {
                return arguments.length ? (N = t, this) : N;
            };
            var j = !0;
            this.cssClassDirectivesEnabled = function(t) {
                return arguments.length ? (j = t, this) : j;
            }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(e, n, r, a, s, u, l, v, A, L) {
                function P() {
                    try {
                        if (!--Dt) throw _t = void 0, ho("infchng", "{0} $onChanges() iterations reached. Aborting!\n", I);
                        l.$apply(function() {
                            for (var t = [], e = 0, n = _t.length; e < n; ++e) try {
                                _t[e]();
                            } catch (e) {
                                t.push(e);
                            }
                            if (_t = void 0, t.length) throw t;
                        });
                    } finally {
                        Dt++;
                    }
                }
                function V(t, e) {
                    if (e) {
                        var n, r, i, o = Object.keys(e);
                        for (n = 0, r = o.length; n < r; n++) i = o[n], this[i] = e[i];
                    } else this.$attr = {};
                    this.$$element = t;
                }
                function R(t, e, n) {
                    St.innerHTML = "<span " + e + ">";
                    var r = St.firstChild.attributes, i = r[0];
                    r.removeNamedItem(i.name), i.value = n, t.attributes.setNamedItem(i);
                }
                function F(t, e) {
                    try {
                        t.addClass(e);
                    } catch (t) {}
                }
                function U(t, e, n, r, i) {
                    t instanceof ii || (t = ii(t));
                    var o = Q(t, e, t, n, r, i);
                    U.$$addScopeClass(t);
                    var a = null;
                    return function(e, n, r) {
                        if (!t) throw ho("multilink", "This element has already been linked.");
                        dt(e, "scope"), i && i.needsNewScope && (e = e.$parent.$new()), r = r || {};
                        var s = r.parentBoundTranscludeFn, u = r.transcludeControllers, l = r.futureParentElement;
                        s && s.$$boundTransclude && (s = s.$$boundTransclude), a || (a = z(l));
                        var c;
                        if (c = "html" !== a ? ii(vt(a, ii("<div>").append(t).html())) : n ? Bi.clone.call(t) : t, 
                        u) for (var f in u) c.data("$" + f + "Controller", u[f].instance);
                        return U.$$addScopeInfo(c, e), n && n(c, e), o && o(e, c, c, s), n || (t = o = null), 
                        c;
                    };
                }
                function z(t) {
                    var e = t && t[0];
                    return e && "foreignobject" !== H(e) && ci.call(e).match(/SVG/) ? "svg" : "html";
                }
                function Q(t, e, n, r, i, o) {
                    function a(t, n, r, i) {
                        var o, a, s, u, l, c, f, h, g;
                        if (d) {
                            var m = n.length;
                            for (g = new Array(m), l = 0; l < p.length; l += 3) f = p[l], g[f] = n[f];
                        } else g = n;
                        for (l = 0, c = p.length; l < c; ) s = g[p[l++]], o = p[l++], a = p[l++], o ? (o.scope ? (u = t.$new(), 
                        U.$$addScopeInfo(ii(s), u)) : u = t, h = o.transcludeOnThisElement ? X(t, o.transclude, i) : !o.templateOnThisElement && i ? i : !i && e ? X(t, e) : null, 
                        o(a, u, s, r, h)) : a && a(t, s.childNodes, void 0, i);
                    }
                    for (var s, u, l, c, f, h, d, p = [], g = mi(t) || t instanceof ii, m = 0; m < t.length; m++) s = new V(), 
                    11 === ri && Y(t, m, g), u = J(t[m], [], s, 0 === m ? r : void 0, i), l = u.length ? it(u, t[m], s, e, n, null, [], [], o) : null, 
                    l && l.scope && U.$$addScopeClass(s.$$element), f = l && l.terminal || !(c = t[m].childNodes) || !c.length ? null : Q(c, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : e), 
                    (l || f) && (p.push(m, l, f), h = !0, d = d || l), o = null;
                    return h ? a : null;
                }
                function Y(t, e, n) {
                    var r, i = t[e], o = i.parentNode;
                    if (i.nodeType === Ai) for (;;) {
                        if (!(r = o ? i.nextSibling : t[e + 1]) || r.nodeType !== Ai) break;
                        i.nodeValue = i.nodeValue + r.nodeValue, r.parentNode && r.parentNode.removeChild(r), 
                        n && r === t[e + 1] && t.splice(e + 1, 1);
                    }
                }
                function X(t, e, n) {
                    function r(r, i, o, a, s) {
                        return r || (r = t.$new(!1, s), r.$$transcluded = !0), e(r, i, {
                            parentBoundTranscludeFn: n,
                            transcludeControllers: o,
                            futureParentElement: a
                        });
                    }
                    var i = r.$$slots = $t();
                    for (var o in e.$$slots) e.$$slots[o] ? i[o] = X(t, e.$$slots[o], n) : i[o] = null;
                    return r;
                }
                function J(t, e, n, r, i) {
                    var o, a, s, u = t.nodeType, l = n.$attr;
                    switch (u) {
                      case Si:
                        a = H(t), ut(e, Ee(a), "E", r, i);
                        for (var c, f, h, d, p, g, m = t.attributes, v = 0, y = m && m.length; v < y; v++) {
                            var b = !1, E = !1;
                            c = m[v], f = c.name, p = c.value, d = Ee(f), g = Lt.test(d), g && (f = f.replace(go, "").substr(8).replace(/_(.)/g, function(t, e) {
                                return e.toUpperCase();
                            }));
                            var C = d.match(Pt);
                            C && lt(C[1]) && (b = f, E = f.substr(0, f.length - 5) + "end", f = f.substr(0, f.length - 6)), 
                            h = Ee(f.toLowerCase()), l[h] = f, !g && n.hasOwnProperty(h) || (n[h] = p, Xt(t, h) && (n[h] = !0)), 
                            bt(t, e, p, h, g), ut(e, h, "A", r, i, b, E);
                        }
                        if ("input" === a && "hidden" === t.getAttribute("type") && t.setAttribute("autocomplete", "off"), 
                        !kt) break;
                        if (s = t.className, w(s) && (s = s.animVal), x(s) && "" !== s) for (;o = $.exec(s); ) h = Ee(o[2]), 
                        ut(e, h, "C", r, i) && (n[h] = $i(o[3])), s = s.substr(o.index + o[0].length);
                        break;

                      case Ai:
                        mt(e, t.nodeValue);
                        break;

                      case Oi:
                        if (!Ot) break;
                        Z(t, e, n, r, i);
                    }
                    return e.sort(pt), e;
                }
                function Z(t, e, n, r, i) {
                    try {
                        var o = d.exec(t.nodeValue);
                        if (o) {
                            var a = Ee(o[1]);
                            ut(e, a, "M", r, i) && (n[a] = $i(o[2]));
                        }
                    } catch (t) {}
                }
                function tt(t, e, n) {
                    var r = [], i = 0;
                    if (e && t.hasAttribute && t.hasAttribute(e)) do {
                        if (!t) throw ho("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, n);
                        t.nodeType === Si && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), 
                        t = t.nextSibling;
                    } while (i > 0); else r.push(t);
                    return ii(r);
                }
                function nt(t, e, n) {
                    return function(r, i, o, a, s) {
                        return i = tt(i[0], e, n), t(r, i, o, a, s);
                    };
                }
                function rt(t, e, n, r, i, o) {
                    var a;
                    return t ? U(e, n, r, i, o) : function() {
                        return a || (a = U(e, n, r, i, o), e = n = o = null), a.apply(this, arguments);
                    };
                }
                function it(t, e, n, i, a, s, u, l, c) {
                    function h(t, e, n, r) {
                        t && (n && (t = nt(t, n, r)), t.require = p.require, t.directiveName = g, (C === p || p.$$isolateScope) && (t = Et(t, {
                            isolateScope: !0
                        })), u.push(t)), e && (n && (e = nt(e, n, r)), e.require = p.require, e.directiveName = g, 
                        (C === p || p.$$isolateScope) && (e = Et(e, {
                            isolateScope: !0
                        })), l.push(e));
                    }
                    function d(t, i, a, s, c) {
                        function h(t, e, n, r) {
                            var i;
                            if (k(t) || (r = n, n = e, e = t, t = void 0), I && (i = $), n || (n = I ? T.parent() : T), 
                            !r) return c(t, e, i, n, R);
                            var o = c.$$slots[r];
                            if (o) return o(t, e, i, n, R);
                            if (y(o)) throw ho("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', r, et(T));
                        }
                        var d, p, g, m, v, $, b, T, A, O;
                        e === a ? (A = n, T = n.$$element) : (T = ii(a), A = new V(T, n)), v = i, C ? m = i.$new(!0) : E && (v = i.$parent), 
                        c && (b = h, b.$$boundTransclude = c, b.isSlotFilled = function(t) {
                            return !!c.$$slots[t];
                        }), x && ($ = at(T, A, b, x, m, i, C)), C && (U.$$addScopeInfo(T, m, !0, !(_ && (_ === C || _ === C.$$originalDirective))), 
                        U.$$addScopeClass(T, !0), m.$$isolateBindings = C.$$isolateBindings, O = Ct(i, A, m, m.$$isolateBindings, C), 
                        O.removeWatches && m.$on("$destroy", O.removeWatches));
                        for (var N in $) {
                            var M = x[N], j = $[N], L = M.$$bindings.bindToController;
                            if (D) {
                                j.bindingInfo = L ? Ct(v, A, j.instance, L, M) : {};
                                var P = j();
                                P !== j.instance && (j.instance = P, T.data("$" + M.name + "Controller", P), j.bindingInfo.removeWatches && j.bindingInfo.removeWatches(), 
                                j.bindingInfo = Ct(v, A, j.instance, L, M));
                            } else j.instance = j(), T.data("$" + M.name + "Controller", j.instance), j.bindingInfo = Ct(v, A, j.instance, L, M);
                        }
                        for (o(x, function(t, e) {
                            var n = t.require;
                            t.bindToController && !mi(n) && w(n) && f($[e].instance, ot(e, n, T, $));
                        }), o($, function(t) {
                            var e = t.instance;
                            if (S(e.$onChanges)) try {
                                e.$onChanges(t.bindingInfo.initialChanges);
                            } catch (t) {
                                r(t);
                            }
                            if (S(e.$onInit)) try {
                                e.$onInit();
                            } catch (t) {
                                r(t);
                            }
                            S(e.$doCheck) && (v.$watch(function() {
                                e.$doCheck();
                            }), e.$doCheck()), S(e.$onDestroy) && v.$on("$destroy", function() {
                                e.$onDestroy();
                            });
                        }), d = 0, p = u.length; d < p; d++) g = u[d], xt(g, g.isolateScope ? m : i, T, A, g.require && ot(g.directiveName, g.require, T, $), b);
                        var R = i;
                        for (C && (C.template || null === C.templateUrl) && (R = m), t && t(R, a.childNodes, void 0, c), 
                        d = l.length - 1; d >= 0; d--) g = l[d], xt(g, g.isolateScope ? m : i, T, A, g.require && ot(g.directiveName, g.require, T, $), b);
                        o($, function(t) {
                            var e = t.instance;
                            S(e.$postLink) && e.$postLink();
                        });
                    }
                    c = c || {};
                    for (var p, g, m, v, $, b = -Number.MAX_VALUE, E = c.newScopeDirective, x = c.controllerDirectives, C = c.newIsolateScopeDirective, _ = c.templateDirective, T = c.nonTlbTranscludeDirective, A = !1, O = !1, I = c.hasElementTranscludeDirective, N = n.$$element = ii(e), M = s, j = i, L = !1, P = !1, R = 0, F = t.length; R < F; R++) {
                        p = t[R];
                        var W = p.$$start, q = p.$$end;
                        if (W && (N = tt(e, W, q)), m = void 0, b > p.priority) break;
                        if ($ = p.scope, $ && (p.templateUrl || (w($) ? (gt("new/isolated scope", C || E, p, N), 
                        C = p) : gt("new/isolated scope", C, p, N)), E = E || p), g = p.name, !L && (p.replace && (p.templateUrl || p.template) || p.transclude && !p.$$tlb)) {
                            for (var B, z = R + 1; B = t[z++]; ) if (B.transclude && !B.$$tlb || B.replace && (B.templateUrl || B.template)) {
                                P = !0;
                                break;
                            }
                            L = !0;
                        }
                        if (!p.templateUrl && p.controller && (x = x || $t(), gt("'" + g + "' controller", x[g], p, N), 
                        x[g] = p), $ = p.transclude) if (A = !0, p.$$tlb || (gt("transclusion", T, p, N), 
                        T = p), "element" === $) I = !0, b = p.priority, m = N, N = n.$$element = ii(U.$$createComment(g, n[g])), 
                        e = N[0], wt(a, G(m), e), m[0].$$parentNode = m[0].parentNode, j = rt(P, m, i, b, M && M.name, {
                            nonTlbTranscludeDirective: T
                        }); else {
                            var Q = $t();
                            if (w($)) {
                                m = [];
                                var Y = $t(), X = $t();
                                o($, function(t, e) {
                                    var n = "?" === t.charAt(0);
                                    t = n ? t.substring(1) : t, Y[t] = e, Q[e] = null, X[e] = n;
                                }), o(N.contents(), function(t) {
                                    var e = Y[Ee(H(t))];
                                    e ? (X[e] = !0, Q[e] = Q[e] || [], Q[e].push(t)) : m.push(t);
                                }), o(X, function(t, e) {
                                    if (!t) throw ho("reqslot", "Required transclusion slot `{0}` was not filled.", e);
                                });
                                for (var Z in Q) Q[Z] && (Q[Z] = rt(P, Q[Z], i));
                            } else m = ii(jt(e)).contents();
                            N.empty(), j = rt(P, m, i, void 0, void 0, {
                                needsNewScope: p.$$isolateScope || p.$$newScope
                            }), j.$$slots = Q;
                        }
                        if (p.template) if (O = !0, gt("template", _, p, N), _ = p, $ = S(p.template) ? p.template(N, n) : p.template, 
                        $ = Mt($), p.replace) {
                            if (M = p, m = At($) ? [] : Ce(vt(p.templateNamespace, $i($))), e = m[0], 1 !== m.length || e.nodeType !== Si) throw ho("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g, "");
                            wt(a, N, e);
                            var it = {
                                $attr: {}
                            }, ut = J(e, [], it), lt = t.splice(R + 1, t.length - (R + 1));
                            (C || E) && st(ut, C, E), t = t.concat(ut).concat(lt), ct(n, it), F = t.length;
                        } else N.html($);
                        if (p.templateUrl) O = !0, gt("template", _, p, N), _ = p, p.replace && (M = p), 
                        d = ft(t.splice(R, t.length - R), N, n, a, A && j, u, l, {
                            controllerDirectives: x,
                            newScopeDirective: E !== p && E,
                            newIsolateScopeDirective: C,
                            templateDirective: _,
                            nonTlbTranscludeDirective: T
                        }), F = t.length; else if (p.compile) try {
                            v = p.compile(N, n, j);
                            var ht = p.$$originalDirective || p;
                            S(v) ? h(null, K(ht, v), W, q) : v && h(K(ht, v.pre), K(ht, v.post), W, q);
                        } catch (t) {
                            r(t, et(N));
                        }
                        p.terminal && (d.terminal = !0, b = Math.max(b, p.priority));
                    }
                    return d.scope = E && !0 === E.scope, d.transcludeOnThisElement = A, d.templateOnThisElement = O, 
                    d.transclude = j, c.hasElementTranscludeDirective = I, d;
                }
                function ot(t, e, n, r) {
                    var i;
                    if (x(e)) {
                        var a = e.match(C), s = e.substring(a[0].length), u = a[1] || a[3], l = "?" === a[2];
                        if ("^^" === u ? n = n.parent() : (i = r && r[s], i = i && i.instance), !i) {
                            var c = "$" + s + "Controller";
                            i = u ? n.inheritedData(c) : n.data(c);
                        }
                        if (!i && !l) throw ho("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", s, t);
                    } else if (mi(e)) {
                        i = [];
                        for (var f = 0, h = e.length; f < h; f++) i[f] = ot(t, e[f], n, r);
                    } else w(e) && (i = {}, o(e, function(e, o) {
                        i[o] = ot(t, e, n, r);
                    }));
                    return i || null;
                }
                function at(t, e, n, r, i, o, a) {
                    var s = $t();
                    for (var l in r) {
                        var c = r[l], f = {
                            $scope: c === a || c.$$isolateScope ? i : o,
                            $element: t,
                            $attrs: e,
                            $transclude: n
                        }, h = c.controller;
                        "@" === h && (h = e[c.name]);
                        var d = u(h, f, !0, c.controllerAs);
                        s[c.name] = d, t.data("$" + c.name + "Controller", d.instance);
                    }
                    return s;
                }
                function st(t, e, n) {
                    for (var r = 0, i = t.length; r < i; r++) t[r] = p(t[r], {
                        $$isolateScope: e,
                        $$newScope: n
                    });
                }
                function ut(t, n, r, o, a, s, u) {
                    if (n === a) return null;
                    var l = null;
                    if (c.hasOwnProperty(n)) for (var f, d = e.get(n + h), g = 0, m = d.length; g < m; g++) if (f = d[g], 
                    (y(o) || o > f.priority) && -1 !== f.restrict.indexOf(r)) {
                        if (s && (f = p(f, {
                            $$start: s,
                            $$end: u
                        })), !f.$$bindings) {
                            var v = f.$$bindings = i(f, f.name);
                            w(v.isolateScope) && (f.$$isolateBindings = v.isolateScope);
                        }
                        t.push(f), l = f;
                    }
                    return l;
                }
                function lt(t) {
                    if (c.hasOwnProperty(t)) for (var n, r = e.get(t + h), i = 0, o = r.length; i < o; i++) if (n = r[i], 
                    n.multiElement) return !0;
                    return !1;
                }
                function ct(t, e) {
                    var n = e.$attr, r = t.$attr;
                    o(t, function(r, i) {
                        "$" !== i.charAt(0) && (e[i] && e[i] !== r && (r.length ? r += ("style" === i ? ";" : " ") + e[i] : r = e[i]), 
                        t.$set(i, r, !0, n[i]));
                    }), o(e, function(e, i) {
                        t.hasOwnProperty(i) || "$" === i.charAt(0) || (t[i] = e, "class" !== i && "style" !== i && (r[i] = n[i]));
                    });
                }
                function ft(t, e, n, i, s, u, l, c) {
                    var f, h, d = [], g = e[0], m = t.shift(), v = p(m, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: m
                    }), $ = S(m.templateUrl) ? m.templateUrl(e, n) : m.templateUrl, y = m.templateNamespace;
                    return e.empty(), a($).then(function(r) {
                        var a, p, b, E;
                        if (r = Mt(r), m.replace) {
                            if (b = At(r) ? [] : Ce(vt(y, $i(r))), a = b[0], 1 !== b.length || a.nodeType !== Si) throw ho("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", m.name, $);
                            p = {
                                $attr: {}
                            }, wt(i, e, a);
                            var x = J(a, [], p);
                            w(m.scope) && st(x, !0), t = x.concat(t), ct(n, p);
                        } else a = g, e.html(r);
                        for (t.unshift(v), f = it(t, a, n, s, e, m, u, l, c), o(i, function(t, n) {
                            t === a && (i[n] = e[0]);
                        }), h = Q(e[0].childNodes, s); d.length; ) {
                            var C = d.shift(), _ = d.shift(), T = d.shift(), S = d.shift(), A = e[0];
                            if (!C.$$destroyed) {
                                if (_ !== g) {
                                    var O = _.className;
                                    c.hasElementTranscludeDirective && m.replace || (A = jt(a)), wt(T, ii(_), A), F(ii(A), O);
                                }
                                E = f.transcludeOnThisElement ? X(C, f.transclude, S) : S, f(h, C, A, i, E);
                            }
                        }
                        d = null;
                    }).catch(function(t) {
                        T(t) && r(t);
                    }), function(t, e, n, r, i) {
                        var o = i;
                        e.$$destroyed || (d ? d.push(e, n, r, o) : (f.transcludeOnThisElement && (o = X(e, f.transclude, i)), 
                        f(h, e, n, r, o)));
                    };
                }
                function pt(t, e) {
                    var n = e.priority - t.priority;
                    return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index;
                }
                function gt(t, e, n, r) {
                    function i(t) {
                        return t ? " (module: " + t + ")" : "";
                    }
                    if (e) throw ho("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", e.name, i(e.$$moduleName), n.name, i(n.$$moduleName), t, et(r));
                }
                function mt(t, e) {
                    var r = n(e, !0);
                    r && t.push({
                        priority: 0,
                        compile: function(t) {
                            var e = t.parent(), n = !!e.length;
                            return n && U.$$addBindingClass(e), function(t, e) {
                                var i = e.parent();
                                n || U.$$addBindingClass(i), U.$$addBindingInfo(i, r.expressions), t.$watch(r, function(t) {
                                    e[0].nodeValue = t;
                                });
                            };
                        }
                    });
                }
                function vt(e, n) {
                    switch (e = Zr(e || "html")) {
                      case "svg":
                      case "math":
                        var r = t.document.createElement("div");
                        return r.innerHTML = "<" + e + ">" + n + "</" + e + ">", r.childNodes[0].childNodes;

                      default:
                        return n;
                    }
                }
                function yt(t, e) {
                    if ("srcdoc" === e) return v.HTML;
                    var n = H(t);
                    if ("src" === e || "ngSrc" === e) {
                        if (-1 === [ "img", "video", "audio", "source", "track" ].indexOf(n)) return v.RESOURCE_URL;
                    } else if ("xlinkHref" === e || "form" === n && "action" === e || "link" === n && "href" === e) return v.RESOURCE_URL;
                }
                function bt(t, e, r, i, o) {
                    var a = yt(t, i), s = !o, u = E[i] || o, l = n(r, s, a, u);
                    if (l) {
                        if ("multiple" === i && "select" === H(t)) throw ho("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", et(t));
                        if (_.test(i)) throw ho("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                        e.push({
                            priority: 100,
                            compile: function() {
                                return {
                                    pre: function(t, e, o) {
                                        var s = o.$$observers || (o.$$observers = $t()), c = o[i];
                                        c !== r && (l = c && n(c, !0, a, u), r = c), l && (o[i] = l(t), (s[i] || (s[i] = [])).$$inter = !0, 
                                        (o.$$observers && o.$$observers[i].$$scope || t).$watch(l, function(t, e) {
                                            "class" === i && t !== e ? o.$updateClass(t, e) : o.$set(i, t);
                                        }));
                                    }
                                };
                            }
                        });
                    }
                }
                function wt(e, n, r) {
                    var i, o, a = n[0], s = n.length, u = a.parentNode;
                    if (e) for (i = 0, o = e.length; i < o; i++) if (e[i] === a) {
                        e[i++] = r;
                        for (var l = i, c = l + s - 1, f = e.length; l < f; l++, c++) c < f ? e[l] = e[c] : delete e[l];
                        e.length -= s - 1, e.context === a && (e.context = r);
                        break;
                    }
                    u && u.replaceChild(r, a);
                    var h = t.document.createDocumentFragment();
                    for (i = 0; i < s; i++) h.appendChild(n[i]);
                    for (ii.hasData(a) && (ii.data(r, ii.data(a)), ii(a).off("$destroy")), ii.cleanData(h.querySelectorAll("*")), 
                    i = 1; i < s; i++) delete n[i];
                    n[0] = r, n.length = 1;
                }
                function Et(t, e) {
                    return f(function() {
                        return t.apply(null, arguments);
                    }, t, e);
                }
                function xt(t, e, n, i, o, a) {
                    try {
                        t(e, n, i, o, a);
                    } catch (t) {
                        r(t, et(n));
                    }
                }
                function Ct(t, e, r, i, a) {
                    function u(e, n, i) {
                        S(r.$onChanges) && !q(n, i) && (_t || (t.$$postDigest(P), _t = []), c || (c = {}, 
                        _t.push(l)), c[e] && (i = c[e].previousValue), c[e] = new we(i, n));
                    }
                    function l() {
                        r.$onChanges(c), c = void 0;
                    }
                    var c, f = [], h = {};
                    return o(i, function(i, o) {
                        var l, c, d, p, m, v = i.attrName, $ = i.optional, y = i.mode;
                        switch (y) {
                          case "@":
                            $ || Jr.call(e, v) || (r[o] = e[v] = void 0), m = e.$observe(v, function(t) {
                                if (x(t) || M(t)) {
                                    var e = r[o];
                                    u(o, t, e), r[o] = t;
                                }
                            }), e.$$observers[v].$$scope = t, l = e[v], x(l) ? r[o] = n(l)(t) : M(l) && (r[o] = l), 
                            h[o] = new we(po, r[o]), f.push(m);
                            break;

                          case "=":
                            if (!Jr.call(e, v)) {
                                if ($) break;
                                e[v] = void 0;
                            }
                            if ($ && !e[v]) break;
                            c = s(e[v]), p = c.literal ? B : q, d = c.assign || function() {
                                throw l = r[o] = c(t), ho("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", e[v], v, a.name);
                            }, l = r[o] = c(t);
                            var b = function(e) {
                                return p(e, r[o]) || (p(e, l) ? d(t, e = r[o]) : r[o] = e), l = e;
                            };
                            b.$stateful = !0, m = i.collection ? t.$watchCollection(e[v], b) : t.$watch(s(e[v], b), null, c.literal), 
                            f.push(m);
                            break;

                          case "<":
                            if (!Jr.call(e, v)) {
                                if ($) break;
                                e[v] = void 0;
                            }
                            if ($ && !e[v]) break;
                            c = s(e[v]);
                            var w = c.literal, E = r[o] = c(t);
                            h[o] = new we(po, r[o]), m = t.$watch(c, function(t, e) {
                                if (e === t) {
                                    if (e === E || w && B(e, E)) return;
                                    e = E;
                                }
                                u(o, t, e), r[o] = t;
                            }, w), f.push(m);
                            break;

                          case "&":
                            if ((c = e.hasOwnProperty(v) ? s(e[v]) : g) === g && $) break;
                            r[o] = function(e) {
                                return c(t, e);
                            };
                        }
                    }), {
                        initialChanges: h,
                        removeWatches: f.length && function() {
                            for (var t = 0, e = f.length; t < e; ++t) f[t]();
                        }
                    };
                }
                var _t, Tt = /^\w/, St = t.document.createElement("div"), Ot = N, kt = j, Dt = I;
                V.prototype = {
                    $normalize: Ee,
                    $addClass: function(t) {
                        t && t.length > 0 && A.addClass(this.$$element, t);
                    },
                    $removeClass: function(t) {
                        t && t.length > 0 && A.removeClass(this.$$element, t);
                    },
                    $updateClass: function(t, e) {
                        var n = xe(t, e);
                        n && n.length && A.addClass(this.$$element, n);
                        var r = xe(e, t);
                        r && r.length && A.removeClass(this.$$element, r);
                    },
                    $set: function(t, e, n, i) {
                        var a, s = this.$$element[0], u = Xt(s, t), l = Jt(t), c = t;
                        if (u ? (this.$$element.prop(t, e), i = u) : l && (this[l] = e, c = l), this[t] = e, 
                        i ? this.$attr[t] = i : (i = this.$attr[t]) || (this.$attr[t] = i = ht(t, "-")), 
                        "a" === (a = H(this.$$element)) && ("href" === t || "xlinkHref" === t) || "img" === a && "src" === t) this[t] = e = L(e, "src" === t); else if ("img" === a && "srcset" === t && b(e)) {
                            for (var f = "", h = $i(e), d = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, p = /\s/.test(h) ? d : /(,)/, g = h.split(p), m = Math.floor(g.length / 2), v = 0; v < m; v++) {
                                var $ = 2 * v;
                                f += L($i(g[$]), !0), f += " " + $i(g[$ + 1]);
                            }
                            var w = $i(g[2 * v]).split(/\s/);
                            f += L($i(w[0]), !0), 2 === w.length && (f += " " + $i(w[1])), this[t] = e = f;
                        }
                        !1 !== n && (null === e || y(e) ? this.$$element.removeAttr(i) : Tt.test(i) ? this.$$element.attr(i, e) : R(this.$$element[0], i, e));
                        var E = this.$$observers;
                        E && o(E[c], function(t) {
                            try {
                                t(e);
                            } catch (t) {
                                r(t);
                            }
                        });
                    },
                    $observe: function(t, e) {
                        var n = this, r = n.$$observers || (n.$$observers = $t()), i = r[t] || (r[t] = []);
                        return i.push(e), l.$evalAsync(function() {
                            i.$$inter || !n.hasOwnProperty(t) || y(n[t]) || e(n[t]);
                        }), function() {
                            W(i, e);
                        };
                    }
                };
                var It = n.startSymbol(), Nt = n.endSymbol(), Mt = "{{" === It && "}}" === Nt ? m : function(t) {
                    return t.replace(/\{\{/g, It).replace(/}}/g, Nt);
                }, Lt = /^ngAttr[A-Z]/, Pt = /^(.+)Start$/;
                return U.$$addBindingInfo = O ? function(t, e) {
                    var n = t.data("$binding") || [];
                    mi(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n);
                } : g, U.$$addBindingClass = O ? function(t) {
                    F(t, "ng-binding");
                } : g, U.$$addScopeInfo = O ? function(t, e, n, r) {
                    var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                    t.data(i, e);
                } : g, U.$$addScopeClass = O ? function(t, e) {
                    F(t, e ? "ng-isolate-scope" : "ng-scope");
                } : g, U.$$createComment = function(e, n) {
                    var r = "";
                    return O && (r = " " + (e || "") + ": ", n && (r += n + " ")), t.document.createComment(r);
                }, U;
            } ];
        }
        function we(t, e) {
            this.previousValue = t, this.currentValue = e;
        }
        function Ee(t) {
            return t.replace(go, "").replace(mo, Tt);
        }
        function xe(t, e) {
            var n = "", r = t.split(/\s+/), i = e.split(/\s+/);
            t: for (var o = 0; o < r.length; o++) {
                for (var a = r[o], s = 0; s < i.length; s++) if (a === i[s]) continue t;
                n += (n.length > 0 ? " " : "") + a;
            }
            return n;
        }
        function Ce(t) {
            t = ii(t);
            var e = t.length;
            if (e <= 1) return t;
            for (;e--; ) {
                var n = t[e];
                (n.nodeType === Oi || n.nodeType === Ai && "" === n.nodeValue.trim()) && ui.call(t, e, 1);
            }
            return t;
        }
        function _e(t, e) {
            if (e && x(e)) return e;
            if (x(t)) {
                var n = $o.exec(t);
                if (n) return n[3];
            }
        }
        function Te() {
            var t = {}, e = !1;
            this.has = function(e) {
                return t.hasOwnProperty(e);
            }, this.register = function(e, n) {
                gt(e, "controller"), w(e) ? f(t, e) : t[e] = n;
            }, this.allowGlobals = function() {
                e = !0;
            }, this.$get = [ "$injector", "$window", function(n, i) {
                function o(t, e, n, i) {
                    if (!t || !w(t.$scope)) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, e);
                    t.$scope[e] = n;
                }
                return function(r, a, s, u) {
                    var l, c, h, d;
                    if (s = !0 === s, u && x(u) && (d = u), x(r)) {
                        if (!(c = r.match($o))) throw vo("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                        if (h = c[1], d = d || c[3], !(r = t.hasOwnProperty(h) ? t[h] : mt(a.$scope, h, !0) || (e ? mt(i, h, !0) : void 0))) throw vo("ctrlreg", "The controller with the name '{0}' is not registered.", h);
                        pt(r, h, !0);
                    }
                    if (s) {
                        var p = (mi(r) ? r[r.length - 1] : r).prototype;
                        return l = Object.create(p || null), d && o(a, d, l, h || r.name), f(function() {
                            var t = n.invoke(r, l, a, h);
                            return t !== l && (w(t) || S(t)) && (l = t, d && o(a, d, l, h || r.name)), l;
                        }, {
                            instance: l,
                            identifier: d
                        });
                    }
                    return l = n.instantiate(r, a, h), d && o(a, d, l, h || r.name), l;
                };
            } ];
        }
        function Se() {
            this.$get = [ "$window", function(t) {
                return ii(t.document);
            } ];
        }
        function Ae() {
            this.$get = [ "$document", "$rootScope", function(t, e) {
                function n() {
                    i = r.hidden;
                }
                var r = t[0], i = r && r.hidden;
                return t.on("visibilitychange", n), e.$on("$destroy", function() {
                    t.off("visibilitychange", n);
                }), function() {
                    return i;
                };
            } ];
        }
        function Oe() {
            this.$get = [ "$log", function(t) {
                return function(e, n) {
                    t.error.apply(t, arguments);
                };
            } ];
        }
        function ke(t) {
            return w(t) ? _(t) ? t.toISOString() : Y(t) : t;
        }
        function De() {
            this.$get = function() {
                return function(t) {
                    if (!t) return "";
                    var e = [];
                    return a(t, function(t, n) {
                        null === t || y(t) || (mi(t) ? o(t, function(t) {
                            e.push(at(n) + "=" + at(ke(t)));
                        }) : e.push(at(n) + "=" + at(ke(t))));
                    }), e.join("&");
                };
            };
        }
        function Ie() {
            this.$get = function() {
                return function(t) {
                    function e(t, r, i) {
                        null === t || y(t) || (mi(t) ? o(t, function(t, n) {
                            e(t, r + "[" + (w(t) ? n : "") + "]");
                        }) : w(t) && !_(t) ? a(t, function(t, n) {
                            e(t, r + (i ? "" : "[") + n + (i ? "" : "]"));
                        }) : n.push(at(r) + "=" + at(ke(t))));
                    }
                    if (!t) return "";
                    var n = [];
                    return e(t, "", !0), n.join("&");
                };
            };
        }
        function Ne(t, e) {
            if (x(t)) {
                var n = t.replace(Co, "").trim();
                if (n) {
                    var r = e("Content-Type");
                    if (r && 0 === r.indexOf(bo) || Me(n)) try {
                        t = X(n);
                    } catch (e) {
                        throw _o("baddata", 'Data must be a valid JSON object. Received: "{0}". Parse error: "{1}"', t, e);
                    }
                }
            }
            return t;
        }
        function Me(t) {
            var e = t.match(Eo);
            return e && xo[e[0]].test(t);
        }
        function je(t) {
            function e(t, e) {
                t && (r[t] = r[t] ? r[t] + ", " + e : e);
            }
            var n, r = $t();
            return x(t) ? o(t.split("\n"), function(t) {
                n = t.indexOf(":"), e(Zr($i(t.substr(0, n))), $i(t.substr(n + 1)));
            }) : w(t) && o(t, function(t, n) {
                e(Zr(n), $i(t));
            }), r;
        }
        function Le(t) {
            var e;
            return function(n) {
                if (e || (e = je(t)), n) {
                    var r = e[Zr(n)];
                    return void 0 === r && (r = null), r;
                }
                return e;
            };
        }
        function Pe(t, e, n, r) {
            return S(r) ? r(t, e, n) : (o(r, function(r) {
                t = r(t, e, n);
            }), t);
        }
        function Ve(t) {
            return 200 <= t && t < 300;
        }
        function Re() {
            var t = this.defaults = {
                transformResponse: [ Ne ],
                transformRequest: [ function(t) {
                    return !w(t) || D(t) || N(t) || I(t) ? t : Y(t);
                } ],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: wt(wo),
                    put: wt(wo),
                    patch: wt(wo)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer",
                jsonpCallbackParam: "callback"
            }, e = !1;
            this.useApplyAsync = function(t) {
                return b(t) ? (e = !!t, this) : e;
            };
            var n = this.interceptors = [];
            this.$get = [ "$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function(i, a, s, u, l, c, h, d) {
                function p(e) {
                    function n(t, e) {
                        for (var n = 0, r = e.length; n < r; ) {
                            var i = e[n++], o = e[n++];
                            t = t.then(i, o);
                        }
                        return e.length = 0, t;
                    }
                    function a() {
                        i.$$completeOutstandingRequest(g);
                    }
                    function s(t, e) {
                        var n, r = {};
                        return o(t, function(t, i) {
                            S(t) ? null != (n = t(e)) && (r[i] = n) : r[i] = t;
                        }), r;
                    }
                    function u(e) {
                        var n = e.headers, r = Pe(e.data, Le(n), void 0, e.transformRequest);
                        return y(r) && o(n, function(t, e) {
                            "content-type" === Zr(e) && delete n[e];
                        }), y(e.withCredentials) && !y(t.withCredentials) && (e.withCredentials = t.withCredentials), 
                        m(e, r).then(l, l);
                    }
                    function l(t) {
                        var e = f({}, t);
                        return e.data = Pe(t.data, t.headers, t.status, p.transformResponse), Ve(t.status) ? e : c.reject(e);
                    }
                    if (!w(e)) throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", e);
                    if (!x(d.valueOf(e.url))) throw r("$http")("badreq", "Http request configuration url must be a string or a $sce trusted object.  Received: {0}", e.url);
                    var p = f({
                        method: "get",
                        transformRequest: t.transformRequest,
                        transformResponse: t.transformResponse,
                        paramSerializer: t.paramSerializer,
                        jsonpCallbackParam: t.jsonpCallbackParam
                    }, e);
                    p.headers = function(e) {
                        var n, r, i, o = t.headers, a = f({}, e.headers);
                        o = f({}, o.common, o[Zr(e.method)]);
                        t: for (n in o) {
                            r = Zr(n);
                            for (i in a) if (Zr(i) === r) continue t;
                            a[n] = o[n];
                        }
                        return s(a, wt(e));
                    }(e), p.method = ti(p.method), p.paramSerializer = x(p.paramSerializer) ? h.get(p.paramSerializer) : p.paramSerializer, 
                    i.$$incOutstandingRequestCount();
                    var v = [], $ = [], b = c.resolve(p);
                    return o(C, function(t) {
                        (t.request || t.requestError) && v.unshift(t.request, t.requestError), (t.response || t.responseError) && $.push(t.response, t.responseError);
                    }), b = n(b, v), b = b.then(u), b = n(b, $), b = b.finally(a);
                }
                function m(n, r) {
                    function i(t) {
                        if (t) {
                            var n = {};
                            return o(t, function(t, r) {
                                n[r] = function(n) {
                                    function r() {
                                        t(n);
                                    }
                                    e ? l.$applyAsync(r) : l.$$phase ? r() : l.$apply(r);
                                };
                            }), n;
                        }
                    }
                    function u(t, n, r, i) {
                        function o() {
                            f(n, t, r, i);
                        }
                        m && (Ve(t) ? m.put(O, [ t, n, je(r), i ]) : m.remove(O)), e ? l.$applyAsync(o) : (o(), 
                        l.$$phase || l.$apply());
                    }
                    function f(t, e, r, i) {
                        e = e >= -1 ? e : 0, (Ve(e) ? _.resolve : _.reject)({
                            data: t,
                            status: e,
                            headers: Le(r),
                            config: n,
                            statusText: i
                        });
                    }
                    function h(t) {
                        f(t.data, t.status, wt(t.headers()), t.statusText);
                    }
                    function g() {
                        var t = p.pendingRequests.indexOf(n);
                        -1 !== t && p.pendingRequests.splice(t, 1);
                    }
                    var m, C, _ = c.defer(), T = _.promise, S = n.headers, A = "jsonp" === Zr(n.method), O = n.url;
                    if (A ? O = d.getTrustedResourceUrl(O) : x(O) || (O = d.valueOf(O)), O = v(O, n.paramSerializer(n.params)), 
                    A && (O = $(O, n.jsonpCallbackParam)), p.pendingRequests.push(n), T.then(g, g), 
                    !n.cache && !t.cache || !1 === n.cache || "GET" !== n.method && "JSONP" !== n.method || (m = w(n.cache) ? n.cache : w(t.cache) ? t.cache : E), 
                    m && (C = m.get(O), b(C) ? j(C) ? C.then(h, h) : mi(C) ? f(C[1], C[0], wt(C[2]), C[3]) : f(C, 200, {}, "OK") : m.put(O, T)), 
                    y(C)) {
                        var k = Un(n.url) ? s()[n.xsrfCookieName || t.xsrfCookieName] : void 0;
                        k && (S[n.xsrfHeaderName || t.xsrfHeaderName] = k), a(n.method, O, r, u, S, n.timeout, n.withCredentials, n.responseType, i(n.eventHandlers), i(n.uploadEventHandlers));
                    }
                    return T;
                }
                function v(t, e) {
                    return e.length > 0 && (t += (-1 === t.indexOf("?") ? "?" : "&") + e), t;
                }
                function $(t, e) {
                    if (/[&?][^=]+=JSON_CALLBACK/.test(t)) throw _o("badjsonp", 'Illegal use of JSON_CALLBACK in url, "{0}"', t);
                    if (new RegExp("[&?]" + e + "=").test(t)) throw _o("badjsonp", 'Illegal use of callback param, "{0}", in url, "{1}"', e, t);
                    return t += (-1 === t.indexOf("?") ? "?" : "&") + e + "=JSON_CALLBACK";
                }
                var E = u("$http");
                t.paramSerializer = x(t.paramSerializer) ? h.get(t.paramSerializer) : t.paramSerializer;
                var C = [];
                return o(n, function(t) {
                    C.unshift(x(t) ? h.get(t) : h.invoke(t));
                }), p.pendingRequests = [], function(t) {
                    o(arguments, function(t) {
                        p[t] = function(e, n) {
                            return p(f({}, n || {}, {
                                method: t,
                                url: e
                            }));
                        };
                    });
                }("get", "delete", "head", "jsonp"), function(t) {
                    o(arguments, function(t) {
                        p[t] = function(e, n, r) {
                            return p(f({}, r || {}, {
                                method: t,
                                url: e,
                                data: n
                            }));
                        };
                    });
                }("post", "put", "patch"), p.defaults = t, p;
            } ];
        }
        function He() {
            this.$get = function() {
                return function() {
                    return new t.XMLHttpRequest();
                };
            };
        }
        function Fe() {
            this.$get = [ "$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function(t, e, n, r) {
                return We(t, r, t.defer, e, n[0]);
            } ];
        }
        function We(t, e, n, r, i) {
            function a(t, e, n) {
                t = t.replace("JSON_CALLBACK", e);
                var o = i.createElement("script"), a = null;
                return o.type = "text/javascript", o.src = t, o.async = !0, a = function(t) {
                    o.removeEventListener("load", a), o.removeEventListener("error", a), i.body.removeChild(o), 
                    o = null;
                    var s = -1, u = "unknown";
                    t && ("load" !== t.type || r.wasCalled(e) || (t = {
                        type: "error"
                    }), u = t.type, s = "error" === t.type ? 404 : 200), n && n(s, u);
                }, o.addEventListener("load", a), o.addEventListener("error", a), i.body.appendChild(o), 
                a;
            }
            return function(i, s, u, l, c, f, h, d, p, g) {
                function m() {
                    w && w(), E && E.abort();
                }
                function v(t, e, r, i, o) {
                    b(C) && n.cancel(C), w = E = null, t(e, r, i, o);
                }
                if (s = s || t.url(), "jsonp" === Zr(i)) var $ = r.createCallback(s), w = a(s, $, function(t, e) {
                    var n = 200 === t && r.getResponse($);
                    v(l, t, n, "", e), r.removeCallback($);
                }); else {
                    var E = e(i, s);
                    E.open(i, s, !0), o(c, function(t, e) {
                        b(t) && E.setRequestHeader(e, t);
                    }), E.onload = function() {
                        var t = E.statusText || "", e = "response" in E ? E.response : E.responseText, n = 1223 === E.status ? 204 : E.status;
                        0 === n && (n = e ? 200 : "file" === Wn(s).protocol ? 404 : 0), v(l, n, e, E.getAllResponseHeaders(), t);
                    };
                    var x = function() {
                        v(l, -1, null, null, "");
                    };
                    if (E.onerror = x, E.onabort = x, E.ontimeout = x, o(p, function(t, e) {
                        E.addEventListener(e, t);
                    }), o(g, function(t, e) {
                        E.upload.addEventListener(e, t);
                    }), h && (E.withCredentials = !0), d) try {
                        E.responseType = d;
                    } catch (t) {
                        if ("json" !== d) throw t;
                    }
                    E.send(y(u) ? null : u);
                }
                if (f > 0) var C = n(m, f); else j(f) && f.then(m);
            };
        }
        function Ue() {
            var t = "{{", e = "}}";
            this.startSymbol = function(e) {
                return e ? (t = e, this) : t;
            }, this.endSymbol = function(t) {
                return t ? (e = t, this) : e;
            }, this.$get = [ "$parse", "$exceptionHandler", "$sce", function(n, r, i) {
                function o(t) {
                    return "\\\\\\" + t;
                }
                function a(n) {
                    return n.replace(h, t).replace(d, e);
                }
                function s(t, e, n, r) {
                    var i = t.$watch(function(t) {
                        return i(), r(t);
                    }, e, n);
                    return i;
                }
                function u(o, u, h, d) {
                    function p(t) {
                        try {
                            return t = k(t), d && !b(t) ? t : yt(t);
                        } catch (t) {
                            r(To.interr(o, t));
                        }
                    }
                    if (!o.length || -1 === o.indexOf(t)) {
                        var g;
                        if (!u) {
                            g = v(a(o)), g.exp = o, g.expressions = [], g.$$watchDelegate = s;
                        }
                        return g;
                    }
                    d = !!d;
                    for (var m, $, w, E = 0, x = [], C = [], _ = o.length, T = [], A = []; E < _; ) {
                        if (-1 === (m = o.indexOf(t, E)) || -1 === ($ = o.indexOf(e, m + l))) {
                            E !== _ && T.push(a(o.substring(E)));
                            break;
                        }
                        E !== m && T.push(a(o.substring(E, m))), w = o.substring(m + l, $), x.push(w), C.push(n(w, p)), 
                        E = $ + c, A.push(T.length), T.push("");
                    }
                    if (h && T.length > 1 && To.throwNoconcat(o), !u || x.length) {
                        var O = function(t) {
                            for (var e = 0, n = x.length; e < n; e++) {
                                if (d && y(t[e])) return;
                                T[A[e]] = t[e];
                            }
                            return T.join("");
                        }, k = function(t) {
                            return h ? i.getTrusted(h, t) : i.valueOf(t);
                        };
                        return f(function(t) {
                            var e = 0, n = x.length, i = new Array(n);
                            try {
                                for (;e < n; e++) i[e] = C[e](t);
                                return O(i);
                            } catch (t) {
                                r(To.interr(o, t));
                            }
                        }, {
                            exp: o,
                            expressions: x,
                            $$watchDelegate: function(t, e) {
                                var n;
                                return t.$watchGroup(C, function(r, i) {
                                    var o = O(r);
                                    S(e) && e.call(this, o, r !== i ? n : o, t), n = o;
                                });
                            }
                        });
                    }
                }
                var l = t.length, c = e.length, h = new RegExp(t.replace(/./g, o), "g"), d = new RegExp(e.replace(/./g, o), "g");
                return u.startSymbol = function() {
                    return t;
                }, u.endSymbol = function() {
                    return e;
                }, u;
            } ];
        }
        function qe() {
            this.$get = [ "$rootScope", "$window", "$q", "$$q", "$browser", function(t, e, n, r, i) {
                function o(o, s, u, l) {
                    function c() {
                        f ? o.apply(null, h) : o(g);
                    }
                    var f = arguments.length > 4, h = f ? G(arguments, 4) : [], d = e.setInterval, p = e.clearInterval, g = 0, m = b(l) && !l, v = (m ? r : n).defer(), $ = v.promise;
                    return u = b(u) ? u : 0, $.$$intervalId = d(function() {
                        m ? i.defer(c) : t.$evalAsync(c), v.notify(g++), u > 0 && g >= u && (v.resolve(g), 
                        p($.$$intervalId), delete a[$.$$intervalId]), m || t.$apply();
                    }, s), a[$.$$intervalId] = v, $;
                }
                var a = {};
                return o.cancel = function(t) {
                    return !!(t && t.$$intervalId in a) && (On(a[t.$$intervalId].promise), a[t.$$intervalId].reject("canceled"), 
                    e.clearInterval(t.$$intervalId), delete a[t.$$intervalId], !0);
                }, o;
            } ];
        }
        function Be(t) {
            for (var e = t.split("/"), n = e.length; n--; ) e[n] = ot(e[n]);
            return e.join("/");
        }
        function ze(t, e) {
            var n = Wn(t);
            e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = d(n.port) || Oo[n.protocol] || null;
        }
        function Ge(t, e) {
            if (Do.test(t)) throw ko("badpath", 'Invalid url "{0}".', t);
            var n = "/" !== t.charAt(0);
            n && (t = "/" + t);
            var r = Wn(t);
            e.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), 
            e.$$search = rt(r.search), e.$$hash = decodeURIComponent(r.hash), e.$$path && "/" !== e.$$path.charAt(0) && (e.$$path = "/" + e.$$path);
        }
        function Ke(t, e) {
            return t.slice(0, e.length) === e;
        }
        function Qe(t, e) {
            if (Ke(e, t)) return e.substr(t.length);
        }
        function Ye(t) {
            var e = t.indexOf("#");
            return -1 === e ? t : t.substr(0, e);
        }
        function Xe(t) {
            return t.replace(/(#.+)|#$/, "$1");
        }
        function Je(t) {
            return t.substr(0, Ye(t).lastIndexOf("/") + 1);
        }
        function Ze(t) {
            return t.substring(0, t.indexOf("/", t.indexOf("//") + 2));
        }
        function tn(t, e, n) {
            this.$$html5 = !0, n = n || "", ze(t, this), this.$$parse = function(t) {
                var n = Qe(e, t);
                if (!x(n)) throw ko("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', t, e);
                Ge(n, this), this.$$path || (this.$$path = "/"), this.$$compose();
            }, this.$$compose = function() {
                var t = it(this.$$search), n = this.$$hash ? "#" + ot(this.$$hash) : "";
                this.$$url = Be(this.$$path) + (t ? "?" + t : "") + n, this.$$absUrl = e + this.$$url.substr(1), 
                this.$$urlUpdatedByLocation = !0;
            }, this.$$parseLinkUrl = function(r, i) {
                if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
                var o, a, s;
                return b(o = Qe(t, r)) ? (a = o, s = n && b(o = Qe(n, o)) ? e + (Qe("/", o) || o) : t + a) : b(o = Qe(e, r)) ? s = e + o : e === r + "/" && (s = e), 
                s && this.$$parse(s), !!s;
            };
        }
        function en(t, e, n) {
            ze(t, this), this.$$parse = function(r) {
                var i, o = Qe(t, r) || Qe(e, r);
                y(o) || "#" !== o.charAt(0) ? this.$$html5 ? i = o : (i = "", y(o) && (t = r, this.replace())) : (i = Qe(n, o), 
                y(i) && (i = o)), Ge(i, this), this.$$path = function(t, e, n) {
                    var r, i = /^\/[A-Z]:(\/.*)/;
                    return Ke(e, n) && (e = e.replace(n, "")), i.exec(e) ? t : (r = i.exec(t), r ? r[1] : t);
                }(this.$$path, i, t), this.$$compose();
            }, this.$$compose = function() {
                var e = it(this.$$search), r = this.$$hash ? "#" + ot(this.$$hash) : "";
                this.$$url = Be(this.$$path) + (e ? "?" + e : "") + r, this.$$absUrl = t + (this.$$url ? n + this.$$url : ""), 
                this.$$urlUpdatedByLocation = !0;
            }, this.$$parseLinkUrl = function(e, n) {
                return Ye(t) === Ye(e) && (this.$$parse(e), !0);
            };
        }
        function nn(t, e, n) {
            this.$$html5 = !0, en.apply(this, arguments), this.$$parseLinkUrl = function(r, i) {
                if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
                var o, a;
                return t === Ye(r) ? o = r : (a = Qe(e, r)) ? o = t + n + a : e === r + "/" && (o = e), 
                o && this.$$parse(o), !!o;
            }, this.$$compose = function() {
                var e = it(this.$$search), r = this.$$hash ? "#" + ot(this.$$hash) : "";
                this.$$url = Be(this.$$path) + (e ? "?" + e : "") + r, this.$$absUrl = t + n + this.$$url, 
                this.$$urlUpdatedByLocation = !0;
            };
        }
        function rn(t) {
            return function() {
                return this[t];
            };
        }
        function on(t, e) {
            return function(n) {
                return y(n) ? this[t] : (this[t] = e(n), this.$$compose(), this);
            };
        }
        function an() {
            var t = "!", e = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
            this.hashPrefix = function(e) {
                return b(e) ? (t = e, this) : t;
            }, this.html5Mode = function(t) {
                return M(t) ? (e.enabled = t, this) : w(t) ? (M(t.enabled) && (e.enabled = t.enabled), 
                M(t.requireBase) && (e.requireBase = t.requireBase), (M(t.rewriteLinks) || x(t.rewriteLinks)) && (e.rewriteLinks = t.rewriteLinks), 
                this) : e;
            }, this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, a) {
                function s(t, e, n) {
                    var i = l.url(), o = l.$$state;
                    try {
                        r.url(t, e, n), l.$$state = r.state();
                    } catch (t) {
                        throw l.url(i), l.$$state = o, t;
                    }
                }
                function u(t, e) {
                    n.$broadcast("$locationChangeSuccess", l.absUrl(), t, l.$$state, e);
                }
                var l, c, f, h = r.baseHref(), d = r.url();
                if (e.enabled) {
                    if (!h && e.requireBase) throw ko("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                    f = Ze(d) + (h || "/"), c = i.history ? tn : nn;
                } else f = Ye(d), c = en;
                var p = Je(f);
                l = new c(f, p, "#" + t), l.$$parseLinkUrl(d, d), l.$$state = r.state();
                var g = /^\s*(javascript|mailto):/i;
                o.on("click", function(t) {
                    var i = e.rewriteLinks;
                    if (i && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 !== t.which && 2 !== t.button) {
                        for (var s = ii(t.target); "a" !== H(s[0]); ) if (s[0] === o[0] || !(s = s.parent())[0]) return;
                        if (!x(i) || !y(s.attr(i))) {
                            var u = s.prop("href"), c = s.attr("href") || s.attr("xlink:href");
                            w(u) && "[object SVGAnimatedString]" === u.toString() && (u = Wn(u.animVal).href), 
                            g.test(u) || !u || s.attr("target") || t.isDefaultPrevented() || l.$$parseLinkUrl(u, c) && (t.preventDefault(), 
                            l.absUrl() !== r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0));
                        }
                    }
                }), Xe(l.absUrl()) !== Xe(d) && r.url(l.absUrl(), !0);
                var m = !0;
                return r.onUrlChange(function(t, e) {
                    if (!Ke(t, p)) return void (a.location.href = t);
                    n.$evalAsync(function() {
                        var r, i = l.absUrl(), o = l.$$state;
                        t = Xe(t), l.$$parse(t), l.$$state = e, r = n.$broadcast("$locationChangeStart", t, i, e, o).defaultPrevented, 
                        l.absUrl() === t && (r ? (l.$$parse(i), l.$$state = o, s(i, !1, o)) : (m = !1, u(i, o)));
                    }), n.$$phase || n.$digest();
                }), n.$watch(function() {
                    if (m || l.$$urlUpdatedByLocation) {
                        l.$$urlUpdatedByLocation = !1;
                        var t = Xe(r.url()), e = Xe(l.absUrl()), o = r.state(), a = l.$$replace, c = t !== e || l.$$html5 && i.history && o !== l.$$state;
                        (m || c) && (m = !1, n.$evalAsync(function() {
                            var e = l.absUrl(), r = n.$broadcast("$locationChangeStart", e, t, l.$$state, o).defaultPrevented;
                            l.absUrl() === e && (r ? (l.$$parse(t), l.$$state = o) : (c && s(e, a, o === l.$$state ? null : l.$$state), 
                            u(t, o)));
                        }));
                    }
                    l.$$replace = !1;
                }), l;
            } ];
        }
        function sn() {
            var t = !0, e = this;
            this.debugEnabled = function(e) {
                return b(e) ? (t = e, this) : t;
            }, this.$get = [ "$window", function(n) {
                function r(t) {
                    return T(t) && (t.stack && a ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), 
                    t;
                }
                function i(t) {
                    var e = n.console || {}, i = e[t] || e.log || g;
                    return function() {
                        var t = [];
                        return o(arguments, function(e) {
                            t.push(r(e));
                        }), Function.prototype.apply.call(i, e, t);
                    };
                }
                var a = ri || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
                return {
                    log: i("log"),
                    info: i("info"),
                    warn: i("warn"),
                    error: i("error"),
                    debug: function() {
                        var n = i("debug");
                        return function() {
                            t && n.apply(e, arguments);
                        };
                    }()
                };
            } ];
        }
        function un(t) {
            return t + "";
        }
        function ln(t, e) {
            return void 0 !== t ? t : e;
        }
        function cn(t, e) {
            return void 0 === t ? e : void 0 === e ? t : t + e;
        }
        function fn(t, e) {
            return !t(e).$stateful;
        }
        function hn(t, e) {
            switch (t.type) {
              case Vo.MemberExpression:
                if (t.computed) return !1;
                break;

              case Vo.UnaryExpression:
                return Ro;

              case Vo.BinaryExpression:
                return "+" !== t.operator && Ro;

              case Vo.CallExpression:
                return !1;
            }
            return void 0 === e ? Ho : e;
        }
        function dn(t, e, n) {
            var r, i, a, s = t.isPure = hn(t, n);
            switch (t.type) {
              case Vo.Program:
                r = !0, o(t.body, function(t) {
                    dn(t.expression, e, s), r = r && t.expression.constant;
                }), t.constant = r;
                break;

              case Vo.Literal:
                t.constant = !0, t.toWatch = [];
                break;

              case Vo.UnaryExpression:
                dn(t.argument, e, s), t.constant = t.argument.constant, t.toWatch = t.argument.toWatch;
                break;

              case Vo.BinaryExpression:
                dn(t.left, e, s), dn(t.right, e, s), t.constant = t.left.constant && t.right.constant, 
                t.toWatch = t.left.toWatch.concat(t.right.toWatch);
                break;

              case Vo.LogicalExpression:
                dn(t.left, e, s), dn(t.right, e, s), t.constant = t.left.constant && t.right.constant, 
                t.toWatch = t.constant ? [] : [ t ];
                break;

              case Vo.ConditionalExpression:
                dn(t.test, e, s), dn(t.alternate, e, s), dn(t.consequent, e, s), t.constant = t.test.constant && t.alternate.constant && t.consequent.constant, 
                t.toWatch = t.constant ? [] : [ t ];
                break;

              case Vo.Identifier:
                t.constant = !1, t.toWatch = [ t ];
                break;

              case Vo.MemberExpression:
                dn(t.object, e, s), t.computed && dn(t.property, e, s), t.constant = t.object.constant && (!t.computed || t.property.constant), 
                t.toWatch = [ t ];
                break;

              case Vo.CallExpression:
                a = !!t.filter && fn(e, t.callee.name), r = a, i = [], o(t.arguments, function(t) {
                    dn(t, e, s), r = r && t.constant, t.constant || i.push.apply(i, t.toWatch);
                }), t.constant = r, t.toWatch = a ? i : [ t ];
                break;

              case Vo.AssignmentExpression:
                dn(t.left, e, s), dn(t.right, e, s), t.constant = t.left.constant && t.right.constant, 
                t.toWatch = [ t ];
                break;

              case Vo.ArrayExpression:
                r = !0, i = [], o(t.elements, function(t) {
                    dn(t, e, s), r = r && t.constant, t.constant || i.push.apply(i, t.toWatch);
                }), t.constant = r, t.toWatch = i;
                break;

              case Vo.ObjectExpression:
                r = !0, i = [], o(t.properties, function(t) {
                    dn(t.value, e, s), r = r && t.value.constant && !t.computed, t.value.constant || i.push.apply(i, t.value.toWatch), 
                    t.computed && (dn(t.key, e, s), t.key.constant || i.push.apply(i, t.key.toWatch));
                }), t.constant = r, t.toWatch = i;
                break;

              case Vo.ThisExpression:
              case Vo.LocalsExpression:
                t.constant = !1, t.toWatch = [];
            }
        }
        function pn(t) {
            if (1 === t.length) {
                var e = t[0].expression, n = e.toWatch;
                return 1 !== n.length ? n : n[0] !== e ? n : void 0;
            }
        }
        function gn(t) {
            return t.type === Vo.Identifier || t.type === Vo.MemberExpression;
        }
        function mn(t) {
            if (1 === t.body.length && gn(t.body[0].expression)) return {
                type: Vo.AssignmentExpression,
                left: t.body[0].expression,
                right: {
                    type: Vo.NGValueParameter
                },
                operator: "="
            };
        }
        function vn(t) {
            return 0 === t.body.length || 1 === t.body.length && (t.body[0].expression.type === Vo.Literal || t.body[0].expression.type === Vo.ArrayExpression || t.body[0].expression.type === Vo.ObjectExpression);
        }
        function $n(t) {
            return t.constant;
        }
        function yn(t) {
            this.$filter = t;
        }
        function bn(t) {
            this.$filter = t;
        }
        function wn(t, e, n) {
            this.ast = new Vo(t, n), this.astCompiler = n.csp ? new bn(e) : new yn(e);
        }
        function En(t) {
            return S(t.valueOf) ? t.valueOf() : Mo.call(t);
        }
        function xn() {
            var t, e, n = $t(), r = {
                true: !0,
                false: !1,
                null: null,
                undefined: void 0
            };
            this.addLiteral = function(t, e) {
                r[t] = e;
            }, this.setIdentifierFns = function(n, r) {
                return t = n, e = r, this;
            }, this.$get = [ "$filter", function(i) {
                function a(t, e) {
                    var r, o, a;
                    switch (typeof t) {
                      case "string":
                        if (t = t.trim(), a = t, !(r = n[a])) {
                            ":" === t.charAt(0) && ":" === t.charAt(1) && (o = !0, t = t.substring(2));
                            r = new wn(new Po(p), i, p).parse(t), r.constant ? r.$$watchDelegate = f : o ? r.$$watchDelegate = r.literal ? c : l : r.inputs && (r.$$watchDelegate = u), 
                            n[a] = r;
                        }
                        return h(r, e);

                      case "function":
                        return h(t, e);

                      default:
                        return h(g, e);
                    }
                }
                function s(t, e, n) {
                    return null == t || null == e ? t === e : !("object" == typeof t && "object" == typeof (t = En(t)) && !n) && (t === e || t !== t && e !== e);
                }
                function u(t, e, n, r, i) {
                    var o, a = r.inputs;
                    if (1 === a.length) {
                        var u = s;
                        return a = a[0], t.$watch(function(t) {
                            var e = a(t);
                            return s(e, u, a.isPure) || (o = r(t, void 0, void 0, [ e ]), u = e && En(e)), o;
                        }, e, n, i);
                    }
                    for (var l = [], c = [], f = 0, h = a.length; f < h; f++) l[f] = s, c[f] = null;
                    return t.$watch(function(t) {
                        for (var e = !1, n = 0, i = a.length; n < i; n++) {
                            var u = a[n](t);
                            (e || (e = !s(u, l[n], a[n].isPure))) && (c[n] = u, l[n] = u && En(u));
                        }
                        return e && (o = r(t, void 0, void 0, c)), o;
                    }, e, n, i);
                }
                function l(t, e, n, r, i) {
                    function o(t) {
                        return r(t);
                    }
                    function a(t, n, r) {
                        l = t, S(e) && e(t, n, r), b(t) && r.$$postDigest(function() {
                            b(l) && s();
                        });
                    }
                    var s, l;
                    return s = r.inputs ? u(t, a, n, r, i) : t.$watch(o, a, n);
                }
                function c(t, e, n, r) {
                    function i(t) {
                        var e = !0;
                        return o(t, function(t) {
                            b(t) || (e = !1);
                        }), e;
                    }
                    var a, s;
                    return a = t.$watch(function(t) {
                        return r(t);
                    }, function(t, n, r) {
                        s = t, S(e) && e(t, n, r), i(t) && r.$$postDigest(function() {
                            i(s) && a();
                        });
                    }, n);
                }
                function f(t, e, n, r) {
                    var i = t.$watch(function(t) {
                        return i(), r(t);
                    }, e, n);
                    return i;
                }
                function h(t, e) {
                    if (!e) return t;
                    var n = t.$$watchDelegate, r = !1, i = n !== c && n !== l, o = i ? function(n, i, o, a) {
                        var s = r && a ? a[0] : t(n, i, o, a);
                        return e(s, n, i);
                    } : function(n, r, i, o) {
                        var a = t(n, r, i, o), s = e(a, n, r);
                        return b(a) ? s : a;
                    };
                    return r = !t.inputs, n && n !== u ? (o.$$watchDelegate = n, o.inputs = t.inputs) : e.$stateful || (o.$$watchDelegate = u, 
                    o.inputs = t.inputs ? t.inputs : [ t ]), o.inputs && (o.inputs = o.inputs.map(function(t) {
                        return t.isPure === Ho ? function(e) {
                            return t(e);
                        } : t;
                    })), o;
                }
                var d = bi().noUnsafeEval, p = {
                    csp: d,
                    literals: U(r),
                    isIdentifierStart: S(t) && t,
                    isIdentifierContinue: S(e) && e
                };
                return a;
            } ];
        }
        function Cn() {
            var t = !0;
            this.$get = [ "$rootScope", "$exceptionHandler", function(e, n) {
                return Tn(function(t) {
                    e.$evalAsync(t);
                }, n, t);
            } ], this.errorOnUnhandledRejections = function(e) {
                return b(e) ? (t = e, this) : t;
            };
        }
        function _n() {
            var t = !0;
            this.$get = [ "$browser", "$exceptionHandler", function(e, n) {
                return Tn(function(t) {
                    e.defer(t);
                }, n, t);
            } ], this.errorOnUnhandledRejections = function(e) {
                return b(e) ? (t = e, this) : t;
            };
        }
        function Tn(t, e, n) {
            function i() {
                return new a();
            }
            function a() {
                var t = this.promise = new s();
                this.resolve = function(e) {
                    h(t, e);
                }, this.reject = function(e) {
                    p(t, e);
                }, this.notify = function(e) {
                    m(t, e);
                };
            }
            function s() {
                this.$$state = {
                    status: 0
                };
            }
            function u(e) {
                var r, i, o;
                o = e.pending, e.processScheduled = !1, e.pending = void 0;
                try {
                    for (var a = 0, s = o.length; a < s; ++a) {
                        An(e), i = o[a][0], r = o[a][e.status];
                        try {
                            S(r) ? h(i, r(e.value)) : 1 === e.status ? h(i, e.value) : p(i, e.value);
                        } catch (t) {
                            p(i, t);
                        }
                    }
                } finally {
                    --A, n && 0 === A && t(l);
                }
            }
            function l() {
                for (;!A && O.length; ) {
                    var t = O.shift();
                    if (!Sn(t)) {
                        An(t);
                        var n = "Possibly unhandled rejection: " + xt(t.value);
                        T(t.value) ? e(t.value, n) : e(n);
                    }
                }
            }
            function c(e) {
                !n || e.pending || 2 !== e.status || Sn(e) || (0 === A && 0 === O.length && t(l), 
                O.push(e)), !e.processScheduled && e.pending && (e.processScheduled = !0, ++A, t(function() {
                    u(e);
                }));
            }
            function h(t, e) {
                t.$$state.status || (e === t ? g(t, _("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : d(t, e));
            }
            function d(t, e) {
                function n(e) {
                    a || (a = !0, d(t, e));
                }
                function r(e) {
                    a || (a = !0, g(t, e));
                }
                function i(e) {
                    m(t, e);
                }
                var o, a = !1;
                try {
                    (w(e) || S(e)) && (o = e.then), S(o) ? (t.$$state.status = -1, o.call(e, n, r, i)) : (t.$$state.value = e, 
                    t.$$state.status = 1, c(t.$$state));
                } catch (t) {
                    r(t);
                }
            }
            function p(t, e) {
                t.$$state.status || g(t, e);
            }
            function g(t, e) {
                t.$$state.value = e, t.$$state.status = 2, c(t.$$state);
            }
            function m(n, r) {
                var i = n.$$state.pending;
                n.$$state.status <= 0 && i && i.length && t(function() {
                    for (var t, n, o = 0, a = i.length; o < a; o++) {
                        n = i[o][0], t = i[o][3];
                        try {
                            m(n, S(t) ? t(r) : r);
                        } catch (t) {
                            e(t);
                        }
                    }
                });
            }
            function v(t) {
                var e = new s();
                return p(e, t), e;
            }
            function $(t, e, n) {
                var r = null;
                try {
                    S(n) && (r = n());
                } catch (t) {
                    return v(t);
                }
                return j(r) ? r.then(function() {
                    return e(t);
                }, v) : e(t);
            }
            function b(t, e, n, r) {
                var i = new s();
                return h(i, t), i.then(e, n, r);
            }
            function E(t) {
                var e = new s(), n = 0, r = mi(t) ? [] : {};
                return o(t, function(t, i) {
                    n++, b(t).then(function(t) {
                        r[i] = t, --n || h(e, r);
                    }, function(t) {
                        p(e, t);
                    });
                }), 0 === n && h(e, r), e;
            }
            function x(t) {
                var e = i();
                return o(t, function(t) {
                    b(t).then(e.resolve, e.reject);
                }), e.promise;
            }
            function C(t) {
                function e(t) {
                    h(r, t);
                }
                function n(t) {
                    p(r, t);
                }
                if (!S(t)) throw _("norslvr", "Expected resolverFn, got '{0}'", t);
                var r = new s();
                return t(e, n), r;
            }
            var _ = r("$q", TypeError), A = 0, O = [];
            f(s.prototype, {
                then: function(t, e, n) {
                    if (y(t) && y(e) && y(n)) return this;
                    var r = new s();
                    return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([ r, t, e, n ]), 
                    this.$$state.status > 0 && c(this.$$state), r;
                },
                catch: function(t) {
                    return this.then(null, t);
                },
                finally: function(t, e) {
                    return this.then(function(e) {
                        return $(e, k, t);
                    }, function(e) {
                        return $(e, v, t);
                    }, e);
                }
            });
            var k = b;
            return C.prototype = s.prototype, C.defer = i, C.reject = v, C.when = b, C.resolve = k, 
            C.all = E, C.race = x, C;
        }
        function Sn(t) {
            return !!t.pur;
        }
        function An(t) {
            t.pur = !0;
        }
        function On(t) {
            An(t.$$state);
        }
        function kn() {
            this.$get = [ "$window", "$timeout", function(t, e) {
                var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame, r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame, i = !!n, o = i ? function(t) {
                    var e = n(t);
                    return function() {
                        r(e);
                    };
                } : function(t) {
                    var n = e(t, 16.66, !1);
                    return function() {
                        e.cancel(n);
                    };
                };
                return o.supported = i, o;
            } ];
        }
        function Dn() {
            function t(t) {
                function e() {
                    this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, 
                    this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = u(), 
                    this.$$ChildScope = null;
                }
                return e.prototype = t, e;
            }
            var e = 10, n = r("$rootScope"), a = null, s = null;
            this.digestTtl = function(t) {
                return arguments.length && (e = t), e;
            }, this.$get = [ "$exceptionHandler", "$parse", "$browser", function(r, l, c) {
                function f(t) {
                    t.currentScope.$$destroyed = !0;
                }
                function h(t) {
                    9 === ri && (t.$$childHead && h(t.$$childHead), t.$$nextSibling && h(t.$$nextSibling)), 
                    t.$parent = t.$$nextSibling = t.$$prevSibling = t.$$childHead = t.$$childTail = t.$root = t.$$watchers = null;
                }
                function d() {
                    this.$id = u(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, 
                    this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, 
                    this.$$watchersCount = 0, this.$$isolateBindings = null;
                }
                function p(t) {
                    if (C.$$phase) throw n("inprog", "{0} already in progress", C.$$phase);
                    C.$$phase = t;
                }
                function m() {
                    C.$$phase = null;
                }
                function v(t, e) {
                    do {
                        t.$$watchersCount += e;
                    } while (t = t.$parent);
                }
                function $(t, e, n) {
                    do {
                        t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n];
                    } while (t = t.$parent);
                }
                function b() {}
                function E() {
                    for (;A.length; ) try {
                        A.shift()();
                    } catch (t) {
                        r(t);
                    }
                    s = null;
                }
                function x() {
                    null === s && (s = c.defer(function() {
                        C.$apply(E);
                    }));
                }
                d.prototype = {
                    constructor: d,
                    $new: function(e, n) {
                        var r;
                        return n = n || this, e ? (r = new d(), r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = t(this)), 
                        r = new this.$$ChildScope()), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, 
                        n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (e || n !== this) && r.$on("$destroy", f), 
                        r;
                    },
                    $watch: function(t, e, n, r) {
                        var i = l(t);
                        if (i.$$watchDelegate) return i.$$watchDelegate(this, e, n, i, t);
                        var o = this, s = o.$$watchers, u = {
                            fn: e,
                            last: b,
                            get: i,
                            exp: r || t,
                            eq: !!n
                        };
                        return a = null, S(e) || (u.fn = g), s || (s = o.$$watchers = [], s.$$digestWatchIndex = -1), 
                        s.unshift(u), s.$$digestWatchIndex++, v(this, 1), function() {
                            var t = W(s, u);
                            t >= 0 && (v(o, -1), t < s.$$digestWatchIndex && s.$$digestWatchIndex--), a = null;
                        };
                    },
                    $watchGroup: function(t, e) {
                        function n() {
                            u = !1, l ? (l = !1, e(i, i, s)) : e(i, r, s);
                        }
                        var r = new Array(t.length), i = new Array(t.length), a = [], s = this, u = !1, l = !0;
                        if (!t.length) {
                            var c = !0;
                            return s.$evalAsync(function() {
                                c && e(i, i, s);
                            }), function() {
                                c = !1;
                            };
                        }
                        return 1 === t.length ? this.$watch(t[0], function(t, n, o) {
                            i[0] = t, r[0] = n, e(i, t === n ? i : r, o);
                        }) : (o(t, function(t, e) {
                            var o = s.$watch(t, function(t, o) {
                                i[e] = t, r[e] = o, u || (u = !0, s.$evalAsync(n));
                            });
                            a.push(o);
                        }), function() {
                            for (;a.length; ) a.shift()();
                        });
                    },
                    $watchCollection: function(t, e) {
                        function n(t) {
                            o = t;
                            var e, n, r, s;
                            if (!y(o)) {
                                if (w(o)) if (i(o)) {
                                    a !== d && (a = d, m = a.length = 0, f++), e = o.length, m !== e && (f++, a.length = m = e);
                                    for (var u = 0; u < e; u++) s = a[u], r = o[u], s !== s && r !== r || s === r || (f++, 
                                    a[u] = r);
                                } else {
                                    a !== p && (a = p = {}, m = 0, f++), e = 0;
                                    for (n in o) Jr.call(o, n) && (e++, r = o[n], s = a[n], n in a ? s !== s && r !== r || s === r || (f++, 
                                    a[n] = r) : (m++, a[n] = r, f++));
                                    if (m > e) {
                                        f++;
                                        for (n in a) Jr.call(o, n) || (m--, delete a[n]);
                                    }
                                } else a !== o && (a = o, f++);
                                return f;
                            }
                        }
                        function r() {
                            if (g ? (g = !1, e(o, o, u)) : e(o, s, u), c) if (w(o)) if (i(o)) {
                                s = new Array(o.length);
                                for (var t = 0; t < o.length; t++) s[t] = o[t];
                            } else {
                                s = {};
                                for (var n in o) Jr.call(o, n) && (s[n] = o[n]);
                            } else s = o;
                        }
                        n.$stateful = !0;
                        var o, a, s, u = this, c = e.length > 1, f = 0, h = l(t, n), d = [], p = {}, g = !0, m = 0;
                        return this.$watch(h, r);
                    },
                    $digest: function() {
                        var t, i, o, u, l, f, h, d, g, v, $, y = e, w = this, x = [];
                        p("$digest"), c.$$checkUrlChange(), this === C && null !== s && (c.defer.cancel(s), 
                        E()), a = null;
                        do {
                            h = !1, g = w;
                            for (var A = 0; A < _.length; A++) {
                                try {
                                    $ = _[A], u = $.fn, u($.scope, $.locals);
                                } catch (t) {
                                    r(t);
                                }
                                a = null;
                            }
                            _.length = 0;
                            t: do {
                                if (f = g.$$watchers) for (f.$$digestWatchIndex = f.length; f.$$digestWatchIndex--; ) try {
                                    if (t = f[f.$$digestWatchIndex]) if (l = t.get, (i = l(g)) === (o = t.last) || (t.eq ? B(i, o) : gi(i) && gi(o))) {
                                        if (t === a) {
                                            h = !1;
                                            break t;
                                        }
                                    } else h = !0, a = t, t.last = t.eq ? U(i, null) : i, u = t.fn, u(i, o === b ? i : o, g), 
                                    y < 5 && (v = 4 - y, x[v] || (x[v] = []), x[v].push({
                                        msg: S(t.exp) ? "fn: " + (t.exp.name || t.exp.toString()) : t.exp,
                                        newVal: i,
                                        oldVal: o
                                    }));
                                } catch (t) {
                                    r(t);
                                }
                                if (!(d = g.$$watchersCount && g.$$childHead || g !== w && g.$$nextSibling)) for (;g !== w && !(d = g.$$nextSibling); ) g = g.$parent;
                            } while (g = d);
                            if ((h || _.length) && !y--) throw m(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, x);
                        } while (h || _.length);
                        for (m(); O < T.length; ) try {
                            T[O++]();
                        } catch (t) {
                            r(t);
                        }
                        T.length = O = 0, c.$$checkUrlChange();
                    },
                    $destroy: function() {
                        if (!this.$$destroyed) {
                            var t = this.$parent;
                            this.$broadcast("$destroy"), this.$$destroyed = !0, this === C && c.$$applicationDestroyed(), 
                            v(this, -this.$$watchersCount);
                            for (var e in this.$$listenerCount) $(this, this.$$listenerCount[e], e);
                            t && t.$$childHead === this && (t.$$childHead = this.$$nextSibling), t && t.$$childTail === this && (t.$$childTail = this.$$prevSibling), 
                            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), 
                            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = g, 
                            this.$on = this.$watch = this.$watchGroup = function() {
                                return g;
                            }, this.$$listeners = {}, this.$$nextSibling = null, h(this);
                        }
                    },
                    $eval: function(t, e) {
                        return l(t)(this, e);
                    },
                    $evalAsync: function(t, e) {
                        C.$$phase || _.length || c.defer(function() {
                            _.length && C.$digest();
                        }), _.push({
                            scope: this,
                            fn: l(t),
                            locals: e
                        });
                    },
                    $$postDigest: function(t) {
                        T.push(t);
                    },
                    $apply: function(t) {
                        try {
                            p("$apply");
                            try {
                                return this.$eval(t);
                            } finally {
                                m();
                            }
                        } catch (t) {
                            r(t);
                        } finally {
                            try {
                                C.$digest();
                            } catch (t) {
                                throw r(t), t;
                            }
                        }
                    },
                    $applyAsync: function(t) {
                        function e() {
                            n.$eval(t);
                        }
                        var n = this;
                        t && A.push(e), t = l(t), x();
                    },
                    $on: function(t, e) {
                        var n = this.$$listeners[t];
                        n || (this.$$listeners[t] = n = []), n.push(e);
                        var r = this;
                        do {
                            r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++;
                        } while (r = r.$parent);
                        var i = this;
                        return function() {
                            var r = n.indexOf(e);
                            -1 !== r && (n[r] = null, $(i, 1, t));
                        };
                    },
                    $emit: function(t, e) {
                        var n, i, o, a = [], s = this, u = !1, l = {
                            name: t,
                            targetScope: s,
                            stopPropagation: function() {
                                u = !0;
                            },
                            preventDefault: function() {
                                l.defaultPrevented = !0;
                            },
                            defaultPrevented: !1
                        }, c = z([ l ], arguments, 1);
                        do {
                            for (n = s.$$listeners[t] || a, l.currentScope = s, i = 0, o = n.length; i < o; i++) if (n[i]) try {
                                n[i].apply(null, c);
                            } catch (t) {
                                r(t);
                            } else n.splice(i, 1), i--, o--;
                            if (u) return l.currentScope = null, l;
                            s = s.$parent;
                        } while (s);
                        return l.currentScope = null, l;
                    },
                    $broadcast: function(t, e) {
                        var n = this, i = n, o = n, a = {
                            name: t,
                            targetScope: n,
                            preventDefault: function() {
                                a.defaultPrevented = !0;
                            },
                            defaultPrevented: !1
                        };
                        if (!n.$$listenerCount[t]) return a;
                        for (var s, u, l, c = z([ a ], arguments, 1); i = o; ) {
                            for (a.currentScope = i, s = i.$$listeners[t] || [], u = 0, l = s.length; u < l; u++) if (s[u]) try {
                                s[u].apply(null, c);
                            } catch (t) {
                                r(t);
                            } else s.splice(u, 1), u--, l--;
                            if (!(o = i.$$listenerCount[t] && i.$$childHead || i !== n && i.$$nextSibling)) for (;i !== n && !(o = i.$$nextSibling); ) i = i.$parent;
                        }
                        return a.currentScope = null, a;
                    }
                };
                var C = new d(), _ = C.$$asyncQueue = [], T = C.$$postDigestQueue = [], A = C.$$applyAsyncQueue = [], O = 0;
                return C;
            } ];
        }
        function In() {
            var t = /^\s*(https?|ftp|mailto|tel|file):/, e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function(e) {
                return b(e) ? (t = e, this) : t;
            }, this.imgSrcSanitizationWhitelist = function(t) {
                return b(t) ? (e = t, this) : e;
            }, this.$get = function() {
                return function(n, r) {
                    var i, o = r ? e : t;
                    return i = Wn(n).href, "" === i || i.match(o) ? n : "unsafe:" + i;
                };
            };
        }
        function Nn(t) {
            return t.replace(Uo, Tt);
        }
        function Mn(t) {
            if ("self" === t) return t;
            if (x(t)) {
                if (t.indexOf("***") > -1) throw Fo("iwcard", "Illegal sequence *** in string matcher.  String: {0}", t);
                return t = yi(t).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*"), new RegExp("^" + t + "$");
            }
            if (A(t)) return new RegExp("^" + t.source + "$");
            throw Fo("imatcher", 'Matchers may only be "self", string patterns or RegExp objects');
        }
        function jn(t) {
            var e = [];
            return b(t) && o(t, function(t) {
                e.push(Mn(t));
            }), e;
        }
        function Ln() {
            this.SCE_CONTEXTS = Wo;
            var t = [ "self" ], e = [];
            this.resourceUrlWhitelist = function(e) {
                return arguments.length && (t = jn(e)), t;
            }, this.resourceUrlBlacklist = function(t) {
                return arguments.length && (e = jn(t)), e;
            }, this.$get = [ "$injector", function(n) {
                function r(t, e) {
                    return "self" === t ? Un(e) : !!t.exec(e.href);
                }
                function i(n) {
                    var i, o, a = Wn(n.toString()), s = !1;
                    for (i = 0, o = t.length; i < o; i++) if (r(t[i], a)) {
                        s = !0;
                        break;
                    }
                    if (s) for (i = 0, o = e.length; i < o; i++) if (r(e[i], a)) {
                        s = !1;
                        break;
                    }
                    return s;
                }
                function o(t) {
                    var e = function(t) {
                        this.$$unwrapTrustedValue = function() {
                            return t;
                        };
                    };
                    return t && (e.prototype = new t()), e.prototype.valueOf = function() {
                        return this.$$unwrapTrustedValue();
                    }, e.prototype.toString = function() {
                        return this.$$unwrapTrustedValue().toString();
                    }, e;
                }
                function a(t, e) {
                    var n = f.hasOwnProperty(t) ? f[t] : null;
                    if (!n) throw Fo("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", t, e);
                    if (null === e || y(e) || "" === e) return e;
                    if ("string" != typeof e) throw Fo("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", t);
                    return new n(e);
                }
                function s(t) {
                    return t instanceof c ? t.$$unwrapTrustedValue() : t;
                }
                function u(t, e) {
                    if (null === e || y(e) || "" === e) return e;
                    var n = f.hasOwnProperty(t) ? f[t] : null;
                    if (n && e instanceof n) return e.$$unwrapTrustedValue();
                    if (t === Wo.RESOURCE_URL) {
                        if (i(e)) return e;
                        throw Fo("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", e.toString());
                    }
                    if (t === Wo.HTML) return l(e);
                    throw Fo("unsafe", "Attempting to use an unsafe value in a safe context.");
                }
                var l = function(t) {
                    throw Fo("unsafe", "Attempting to use an unsafe value in a safe context.");
                };
                n.has("$sanitize") && (l = n.get("$sanitize"));
                var c = o(), f = {};
                return f[Wo.HTML] = o(c), f[Wo.CSS] = o(c), f[Wo.URL] = o(c), f[Wo.JS] = o(c), f[Wo.RESOURCE_URL] = o(f[Wo.URL]), 
                {
                    trustAs: a,
                    getTrusted: u,
                    valueOf: s
                };
            } ];
        }
        function Pn() {
            var t = !0;
            this.enabled = function(e) {
                return arguments.length && (t = !!e), t;
            }, this.$get = [ "$parse", "$sceDelegate", function(e, n) {
                if (t && ri < 8) throw Fo("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                var r = wt(Wo);
                r.isEnabled = function() {
                    return t;
                }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, t || (r.trustAs = r.getTrusted = function(t, e) {
                    return e;
                }, r.valueOf = m), r.parseAs = function(t, n) {
                    var i = e(n);
                    return i.literal && i.constant ? i : e(n, function(e) {
                        return r.getTrusted(t, e);
                    });
                };
                var i = r.parseAs, a = r.getTrusted, s = r.trustAs;
                return o(Wo, function(t, e) {
                    var n = Zr(e);
                    r[Nn("parse_as_" + n)] = function(e) {
                        return i(t, e);
                    }, r[Nn("get_trusted_" + n)] = function(e) {
                        return a(t, e);
                    }, r[Nn("trust_as_" + n)] = function(e) {
                        return s(t, e);
                    };
                }), r;
            } ];
        }
        function Vn() {
            this.$get = [ "$window", "$document", function(t, e) {
                var n = {}, r = t.nw && t.nw.process, i = !r && t.chrome && (t.chrome.app && t.chrome.app.runtime || !t.chrome.app && t.chrome.runtime && t.chrome.runtime.id), o = !i && t.history && t.history.pushState, a = d((/android (\d+)/.exec(Zr((t.navigator || {}).userAgent)) || [])[1]), s = /Boxee/i.test((t.navigator || {}).userAgent), u = e[0] || {}, l = u.body && u.body.style, c = !1, f = !1;
                return l && (c = !!("transition" in l || "webkitTransition" in l), f = !!("animation" in l || "webkitAnimation" in l)), 
                {
                    history: !(!o || a < 4 || s),
                    hasEvent: function(t) {
                        if ("input" === t && ri) return !1;
                        if (y(n[t])) {
                            var e = u.createElement("div");
                            n[t] = "on" + t in e;
                        }
                        return n[t];
                    },
                    csp: bi(),
                    transitions: c,
                    animations: f,
                    android: a
                };
            } ];
        }
        function Rn() {
            var t;
            this.httpOptions = function(e) {
                return e ? (t = e, this) : t;
            }, this.$get = [ "$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function(e, n, r, i, o) {
                function a(s, u) {
                    function l(t) {
                        return u || (t = qo("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", s, t.status, t.statusText), 
                        e(t)), i.reject(t);
                    }
                    a.totalPendingRequests++, x(s) && !y(n.get(s)) || (s = o.getTrustedResourceUrl(s));
                    var c = r.defaults && r.defaults.transformResponse;
                    return mi(c) ? c = c.filter(function(t) {
                        return t !== Ne;
                    }) : c === Ne && (c = null), r.get(s, f({
                        cache: n,
                        transformResponse: c
                    }, t)).finally(function() {
                        a.totalPendingRequests--;
                    }).then(function(t) {
                        return n.put(s, t.data), t.data;
                    }, l);
                }
                return a.totalPendingRequests = 0, a;
            } ];
        }
        function Hn() {
            this.$get = [ "$rootScope", "$browser", "$location", function(t, e, n) {
                var r = {};
                return r.findBindings = function(t, e, n) {
                    var r = t.getElementsByClassName("ng-binding"), i = [];
                    return o(r, function(t) {
                        var r = di.element(t).data("$binding");
                        r && o(r, function(r) {
                            if (n) {
                                new RegExp("(^|\\s)" + yi(e) + "(\\s|\\||$)").test(r) && i.push(t);
                            } else -1 !== r.indexOf(e) && i.push(t);
                        });
                    }), i;
                }, r.findModels = function(t, e, n) {
                    for (var r = [ "ng-", "data-ng-", "ng\\:" ], i = 0; i < r.length; ++i) {
                        var o = n ? "=" : "*=", a = "[" + r[i] + "model" + o + '"' + e + '"]', s = t.querySelectorAll(a);
                        if (s.length) return s;
                    }
                }, r.getLocation = function() {
                    return n.url();
                }, r.setLocation = function(e) {
                    e !== n.url() && (n.url(e), t.$digest());
                }, r.whenStable = function(t) {
                    e.notifyWhenNoOutstandingRequests(t);
                }, r;
            } ];
        }
        function Fn() {
            this.$get = [ "$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(t, e, n, r, i) {
                function o(o, s, u) {
                    S(o) || (u = s, s = o, o = g);
                    var l, c = G(arguments, 3), f = b(u) && !u, h = (f ? r : n).defer(), d = h.promise;
                    return l = e.defer(function() {
                        try {
                            h.resolve(o.apply(null, c));
                        } catch (t) {
                            h.reject(t), i(t);
                        } finally {
                            delete a[d.$$timeoutId];
                        }
                        f || t.$apply();
                    }, s), d.$$timeoutId = l, a[l] = h, d;
                }
                var a = {};
                return o.cancel = function(t) {
                    return !!(t && t.$$timeoutId in a) && (On(a[t.$$timeoutId].promise), a[t.$$timeoutId].reject("canceled"), 
                    delete a[t.$$timeoutId], e.defer.cancel(t.$$timeoutId));
                }, o;
            } ];
        }
        function Wn(t) {
            var e = t;
            return ri && (Bo.setAttribute("href", e), e = Bo.href), Bo.setAttribute("href", e), 
            {
                href: Bo.href,
                protocol: Bo.protocol ? Bo.protocol.replace(/:$/, "") : "",
                host: Bo.host,
                search: Bo.search ? Bo.search.replace(/^\?/, "") : "",
                hash: Bo.hash ? Bo.hash.replace(/^#/, "") : "",
                hostname: Bo.hostname,
                port: Bo.port,
                pathname: "/" === Bo.pathname.charAt(0) ? Bo.pathname : "/" + Bo.pathname
            };
        }
        function Un(t) {
            var e = x(t) ? Wn(t) : t;
            return e.protocol === zo.protocol && e.host === zo.host;
        }
        function qn() {
            this.$get = v(t);
        }
        function Bn(t) {
            function e(t) {
                try {
                    return t.cookie || "";
                } catch (t) {
                    return "";
                }
            }
            function n(t) {
                try {
                    return decodeURIComponent(t);
                } catch (e) {
                    return t;
                }
            }
            var r = t[0] || {}, i = {}, o = "";
            return function() {
                var t, a, s, u, l, c = e(r);
                if (c !== o) for (o = c, t = o.split("; "), i = {}, s = 0; s < t.length; s++) a = t[s], 
                (u = a.indexOf("=")) > 0 && (l = n(a.substring(0, u)), y(i[l]) && (i[l] = n(a.substring(u + 1))));
                return i;
            };
        }
        function zn() {
            this.$get = Bn;
        }
        function Gn(t) {
            function e(r, i) {
                if (w(r)) {
                    var a = {};
                    return o(r, function(t, n) {
                        a[n] = e(n, t);
                    }), a;
                }
                return t.factory(r + n, i);
            }
            var n = "Filter";
            this.register = e, this.$get = [ "$injector", function(t) {
                return function(e) {
                    return t.get(e + n);
                };
            } ], e("currency", Jn), e("date", dr), e("filter", Kn), e("json", pr), e("limitTo", gr), 
            e("lowercase", Zo), e("number", Zn), e("orderBy", vr), e("uppercase", ta);
        }
        function Kn() {
            return function(t, e, n, o) {
                if (!i(t)) {
                    if (null == t) return t;
                    throw r("filter")("notarray", "Expected array but received: {0}", t);
                }
                o = o || "$";
                var a, s, u = Xn(e);
                switch (u) {
                  case "function":
                    a = e;
                    break;

                  case "boolean":
                  case "null":
                  case "number":
                  case "string":
                    s = !0;

                  case "object":
                    a = Qn(e, n, o, s);
                    break;

                  default:
                    return t;
                }
                return Array.prototype.filter.call(t, a);
            };
        }
        function Qn(t, e, n, r) {
            var i = w(t) && n in t;
            return !0 === e ? e = B : S(e) || (e = function(t, e) {
                return !y(t) && (null === t || null === e ? t === e : !(w(e) || w(t) && !$(t)) && (t = Zr("" + t), 
                e = Zr("" + e), -1 !== t.indexOf(e)));
            }), function(o) {
                return i && !w(o) ? Yn(o, t[n], e, n, !1) : Yn(o, t, e, n, r);
            };
        }
        function Yn(t, e, n, r, i, o) {
            var a = Xn(t), s = Xn(e);
            if ("string" === s && "!" === e.charAt(0)) return !Yn(t, e.substring(1), n, r, i);
            if (mi(t)) return t.some(function(t) {
                return Yn(t, e, n, r, i);
            });
            switch (a) {
              case "object":
                var u;
                if (i) {
                    for (u in t) if (u.charAt && "$" !== u.charAt(0) && Yn(t[u], e, n, r, !0)) return !0;
                    return !o && Yn(t, e, n, r, !1);
                }
                if ("object" === s) {
                    for (u in e) {
                        var l = e[u];
                        if (!S(l) && !y(l)) {
                            var c = u === r;
                            if (!Yn(c ? t : t[u], l, n, r, c, c)) return !1;
                        }
                    }
                    return !0;
                }
                return n(t, e);

              case "function":
                return !1;

              default:
                return n(t, e);
            }
        }
        function Xn(t) {
            return null === t ? "null" : typeof t;
        }
        function Jn(t) {
            var e = t.NUMBER_FORMATS;
            return function(t, n, r) {
                return y(n) && (n = e.CURRENCY_SYM), y(r) && (r = e.PATTERNS[1].maxFrac), null == t ? t : nr(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(/\u00A4/g, n);
            };
        }
        function Zn(t) {
            var e = t.NUMBER_FORMATS;
            return function(t, n) {
                return null == t ? t : nr(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n);
            };
        }
        function tr(t) {
            var e, n, r, i, o, a = 0;
            for ((n = t.indexOf(Ko)) > -1 && (t = t.replace(Ko, "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), 
            n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charAt(r) === Qo; r++) ;
            if (r === (o = t.length)) e = [ 0 ], n = 1; else {
                for (o--; t.charAt(o) === Qo; ) o--;
                for (n -= r, e = [], i = 0; r <= o; r++, i++) e[i] = +t.charAt(r);
            }
            return n > Go && (e = e.splice(0, Go - 1), a = n - 1, n = 1), {
                d: e,
                e: a,
                i: n
            };
        }
        function er(t, e, n, r) {
            var i = t.d, o = i.length - t.i;
            e = y(e) ? Math.min(Math.max(n, o), r) : +e;
            var a = e + t.i, s = i[a];
            if (a > 0) {
                i.splice(Math.max(t.i, a));
                for (var u = a; u < i.length; u++) i[u] = 0;
            } else {
                o = Math.max(0, o), t.i = 1, i.length = Math.max(1, a = e + 1), i[0] = 0;
                for (var l = 1; l < a; l++) i[l] = 0;
            }
            if (s >= 5) if (a - 1 < 0) {
                for (var c = 0; c > a; c--) i.unshift(0), t.i++;
                i.unshift(1), t.i++;
            } else i[a - 1]++;
            for (;o < Math.max(0, e); o++) i.push(0);
            var f = i.reduceRight(function(t, e, n, r) {
                return e += t, r[n] = e % 10, Math.floor(e / 10);
            }, 0);
            f && (i.unshift(f), t.i++);
        }
        function nr(t, e, n, r, i) {
            if (!x(t) && !C(t) || isNaN(t)) return "";
            var o, a = !isFinite(t), s = !1, u = Math.abs(t) + "", l = "";
            if (a) l = "∞"; else {
                o = tr(u), er(o, i, e.minFrac, e.maxFrac);
                var c = o.d, f = o.i, h = o.e, d = [];
                for (s = c.reduce(function(t, e) {
                    return t && !e;
                }, !0); f < 0; ) c.unshift(0), f++;
                f > 0 ? d = c.splice(f, c.length) : (d = c, c = [ 0 ]);
                var p = [];
                for (c.length >= e.lgSize && p.unshift(c.splice(-e.lgSize, c.length).join("")); c.length > e.gSize; ) p.unshift(c.splice(-e.gSize, c.length).join(""));
                c.length && p.unshift(c.join("")), l = p.join(n), d.length && (l += r + d.join("")), 
                h && (l += "e+" + h);
            }
            return t < 0 && !s ? e.negPre + l + e.negSuf : e.posPre + l + e.posSuf;
        }
        function rr(t, e, n, r) {
            var i = "";
            for ((t < 0 || r && t <= 0) && (r ? t = 1 - t : (t = -t, i = "-")), t = "" + t; t.length < e; ) t = Qo + t;
            return n && (t = t.substr(t.length - e)), i + t;
        }
        function ir(t, e, n, r, i) {
            return n = n || 0, function(o) {
                var a = o["get" + t]();
                return (n > 0 || a > -n) && (a += n), 0 === a && -12 === n && (a = 12), rr(a, e, r, i);
            };
        }
        function or(t, e, n) {
            return function(r, i) {
                var o = r["get" + t]();
                return i[ti((n ? "STANDALONE" : "") + (e ? "SHORT" : "") + t)][o];
            };
        }
        function ar(t, e, n) {
            var r = -1 * n, i = r >= 0 ? "+" : "";
            return i += rr(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + rr(Math.abs(r % 60), 2);
        }
        function sr(t) {
            var e = new Date(t, 0, 1).getDay();
            return new Date(t, 0, (e <= 4 ? 5 : 12) - e);
        }
        function ur(t) {
            return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay()));
        }
        function lr(t) {
            return function(e) {
                var n = sr(e.getFullYear()), r = ur(e), i = +r - +n;
                return rr(1 + Math.round(i / 6048e5), t);
            };
        }
        function cr(t, e) {
            return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1];
        }
        function fr(t, e) {
            return t.getFullYear() <= 0 ? e.ERAS[0] : e.ERAS[1];
        }
        function hr(t, e) {
            return t.getFullYear() <= 0 ? e.ERANAMES[0] : e.ERANAMES[1];
        }
        function dr(t) {
            function e(t) {
                var e;
                if (e = t.match(n)) {
                    var r = new Date(0), i = 0, o = 0, a = e[8] ? r.setUTCFullYear : r.setFullYear, s = e[8] ? r.setUTCHours : r.setHours;
                    e[9] && (i = d(e[9] + e[10]), o = d(e[9] + e[11])), a.call(r, d(e[1]), d(e[2]) - 1, d(e[3]));
                    var u = d(e[4] || 0) - i, l = d(e[5] || 0) - o, c = d(e[6] || 0), f = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
                    return s.call(r, u, l, c, f), r;
                }
                return t;
            }
            var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function(n, r, i) {
                var a, s, u = "", l = [];
                if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, x(n) && (n = Jo.test(n) ? d(n) : e(n)), 
                C(n) && (n = new Date(n)), !_(n) || !isFinite(n.getTime())) return n;
                for (;r; ) s = Xo.exec(r), s ? (l = z(l, s, 1), r = l.pop()) : (l.push(r), r = null);
                var c = n.getTimezoneOffset();
                return i && (c = J(i, c), n = tt(n, i, !0)), o(l, function(e) {
                    a = Yo[e], u += a ? a(n, t.DATETIME_FORMATS, c) : "''" === e ? "'" : e.replace(/(^'|'$)/g, "").replace(/''/g, "'");
                }), u;
            };
        }
        function pr() {
            return function(t, e) {
                return y(e) && (e = 2), Y(t, e);
            };
        }
        function gr() {
            return function(t, e, n) {
                return e = Math.abs(Number(e)) === 1 / 0 ? Number(e) : d(e), gi(e) ? t : (C(t) && (t = t.toString()), 
                i(t) ? (n = !n || isNaN(n) ? 0 : d(n), n = n < 0 ? Math.max(0, t.length + n) : n, 
                e >= 0 ? mr(t, n, n + e) : 0 === n ? mr(t, e, t.length) : mr(t, Math.max(0, n + e), n)) : t);
            };
        }
        function mr(t, e, n) {
            return x(t) ? t.slice(e, n) : si.call(t, e, n);
        }
        function vr(t) {
            function e(e) {
                return e.map(function(e) {
                    var n = 1, r = m;
                    if (S(e)) r = e; else if (x(e) && ("+" !== e.charAt(0) && "-" !== e.charAt(0) || (n = "-" === e.charAt(0) ? -1 : 1, 
                    e = e.substring(1)), "" !== e && (r = t(e), r.constant))) {
                        var i = r();
                        r = function(t) {
                            return t[i];
                        };
                    }
                    return {
                        get: r,
                        descending: n
                    };
                });
            }
            function n(t) {
                switch (typeof t) {
                  case "number":
                  case "boolean":
                  case "string":
                    return !0;

                  default:
                    return !1;
                }
            }
            function o(t) {
                return S(t.valueOf) && (t = t.valueOf(), n(t)) ? t : ($(t) && (t = t.toString(), 
                n(t)), t);
            }
            function a(t, e) {
                var n = typeof t;
                return null === t ? (n = "string", t = "null") : "object" === n && (t = o(t)), {
                    value: t,
                    type: n,
                    index: e
                };
            }
            function s(t, e) {
                var n = 0, r = t.type, i = e.type;
                if (r === i) {
                    var o = t.value, a = e.value;
                    "string" === r ? (o = o.toLowerCase(), a = a.toLowerCase()) : "object" === r && (w(o) && (o = t.index), 
                    w(a) && (a = e.index)), o !== a && (n = o < a ? -1 : 1);
                } else n = r < i ? -1 : 1;
                return n;
            }
            return function(t, n, o, u) {
                function l(t, e) {
                    return {
                        value: t,
                        tieBreaker: {
                            value: e,
                            type: "number",
                            index: e
                        },
                        predicateValues: f.map(function(n) {
                            return a(n.get(t), e);
                        })
                    };
                }
                function c(t, e) {
                    for (var n = 0, r = f.length; n < r; n++) {
                        var i = d(t.predicateValues[n], e.predicateValues[n]);
                        if (i) return i * f[n].descending * h;
                    }
                    return (d(t.tieBreaker, e.tieBreaker) || s(t.tieBreaker, e.tieBreaker)) * h;
                }
                if (null == t) return t;
                if (!i(t)) throw r("orderBy")("notarray", "Expected array but received: {0}", t);
                mi(n) || (n = [ n ]), 0 === n.length && (n = [ "+" ]);
                var f = e(n), h = o ? -1 : 1, d = S(u) ? u : s, p = Array.prototype.map.call(t, l);
                return p.sort(c), t = p.map(function(t) {
                    return t.value;
                });
            };
        }
        function $r(t) {
            return S(t) && (t = {
                link: t
            }), t.restrict = t.restrict || "AC", v(t);
        }
        function yr(t, e) {
            t.$name = e;
        }
        function br(t, e, n, r, i) {
            this.$$controls = [], this.$error = {}, this.$$success = {}, this.$pending = void 0, 
            this.$name = i(e.name || e.ngForm || "")(n), this.$dirty = !1, this.$pristine = !0, 
            this.$valid = !0, this.$invalid = !1, this.$submitted = !1, this.$$parentForm = ra, 
            this.$$element = t, this.$$animate = r, wr(this);
        }
        function wr(t) {
            t.$$classCache = {}, t.$$classCache[Ha] = !(t.$$classCache[Ra] = t.$$element.hasClass(Ra));
        }
        function Er(t) {
            function e(t, e, n, r) {
                t[e] || (t[e] = {}), a(t[e], n, r);
            }
            function n(t, e, n, r) {
                t[e] && s(t[e], n, r), xr(t[e]) && (t[e] = void 0);
            }
            function r(t, e, n) {
                n && !t.$$classCache[e] ? (t.$$animate.addClass(t.$$element, e), t.$$classCache[e] = !0) : !n && t.$$classCache[e] && (t.$$animate.removeClass(t.$$element, e), 
                t.$$classCache[e] = !1);
            }
            function i(t, e, n) {
                e = e ? "-" + ht(e, "-") : "", r(t, Ra + e, !0 === n), r(t, Ha + e, !1 === n);
            }
            var o = t.clazz, a = t.set, s = t.unset;
            o.prototype.$setValidity = function(t, o, u) {
                y(o) ? e(this, "$pending", t, u) : n(this, "$pending", t, u), M(o) ? o ? (s(this.$error, t, u), 
                a(this.$$success, t, u)) : (a(this.$error, t, u), s(this.$$success, t, u)) : (s(this.$error, t, u), 
                s(this.$$success, t, u)), this.$pending ? (r(this, ia, !0), this.$valid = this.$invalid = void 0, 
                i(this, "", null)) : (r(this, ia, !1), this.$valid = xr(this.$error), this.$invalid = !this.$valid, 
                i(this, "", this.$valid));
                var l;
                l = this.$pending && this.$pending[t] ? void 0 : !this.$error[t] && (!!this.$$success[t] || null), 
                i(this, t, l), this.$$parentForm.$setValidity(t, l, this);
            };
        }
        function xr(t) {
            if (t) for (var e in t) if (t.hasOwnProperty(e)) return !1;
            return !0;
        }
        function Cr(t) {
            t.$formatters.push(function(e) {
                return t.$isEmpty(e) ? e : e.toString();
            });
        }
        function _r(t, e, n, r, i, o) {
            Tr(t, e, n, r, i, o), Cr(r);
        }
        function Tr(t, e, n, r, i, o) {
            var a = Zr(e[0].type);
            if (!i.android) {
                var s = !1;
                e.on("compositionstart", function() {
                    s = !0;
                }), e.on("compositionend", function() {
                    s = !1, l();
                });
            }
            var u, l = function(t) {
                if (u && (o.defer.cancel(u), u = null), !s) {
                    var i = e.val(), l = t && t.type;
                    "password" === a || n.ngTrim && "false" === n.ngTrim || (i = $i(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, l);
                }
            };
            if (i.hasEvent("input")) e.on("input", l); else {
                var c = function(t, e, n) {
                    u || (u = o.defer(function() {
                        u = null, e && e.value === n || l(t);
                    }));
                };
                e.on("keydown", function(t) {
                    var e = t.keyCode;
                    91 === e || 15 < e && e < 19 || 37 <= e && e <= 40 || c(t, this, this.value);
                }), i.hasEvent("paste") && e.on("paste cut", c);
            }
            e.on("change", l), $a[a] && r.$$hasNativeValidators && a === n.type && e.on(va, function(t) {
                if (!u) {
                    var e = this[Xr], n = e.badInput, r = e.typeMismatch;
                    u = o.defer(function() {
                        u = null, e.badInput === n && e.typeMismatch === r || l(t);
                    });
                }
            }), r.$render = function() {
                var t = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
                e.val() !== t && e.val(t);
            };
        }
        function Sr(t, e) {
            if (_(t)) return t;
            if (x(t)) {
                pa.lastIndex = 0;
                var n = pa.exec(t);
                if (n) {
                    var r = +n[1], i = +n[2], o = 0, a = 0, s = 0, u = 0, l = sr(r), c = 7 * (i - 1);
                    return e && (o = e.getHours(), a = e.getMinutes(), s = e.getSeconds(), u = e.getMilliseconds()), 
                    new Date(r, 0, l.getDate() + c, o, a, s, u);
                }
            }
            return NaN;
        }
        function Ar(t, e) {
            return function(n, r) {
                var i, a;
                if (_(n)) return n;
                if (x(n)) {
                    if ('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), 
                    ua.test(n)) return new Date(n);
                    if (t.lastIndex = 0, i = t.exec(n)) return i.shift(), a = r ? {
                        yyyy: r.getFullYear(),
                        MM: r.getMonth() + 1,
                        dd: r.getDate(),
                        HH: r.getHours(),
                        mm: r.getMinutes(),
                        ss: r.getSeconds(),
                        sss: r.getMilliseconds() / 1e3
                    } : {
                        yyyy: 1970,
                        MM: 1,
                        dd: 1,
                        HH: 0,
                        mm: 0,
                        ss: 0,
                        sss: 0
                    }, o(i, function(t, n) {
                        n < e.length && (a[e[n]] = +t);
                    }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0);
                }
                return NaN;
            };
        }
        function Or(t, e, n, r) {
            return function(i, o, a, s, u, l, c) {
                function f(t) {
                    return t && !(t.getTime && t.getTime() !== t.getTime());
                }
                function h(t) {
                    return b(t) && !_(t) ? n(t) || void 0 : t;
                }
                kr(i, o, a, s), Tr(i, o, a, s, u, l);
                var d, p = s && s.$options.getOption("timezone");
                if (s.$$parserName = t, s.$parsers.push(function(t) {
                    if (s.$isEmpty(t)) return null;
                    if (e.test(t)) {
                        var r = n(t, d);
                        return p && (r = tt(r, p)), r;
                    }
                }), s.$formatters.push(function(t) {
                    if (t && !_(t)) throw Ua("datefmt", "Expected `{0}` to be a date", t);
                    return f(t) ? (d = t, d && p && (d = tt(d, p, !0)), c("date")(t, r, p)) : (d = null, 
                    "");
                }), b(a.min) || a.ngMin) {
                    var g;
                    s.$validators.min = function(t) {
                        return !f(t) || y(g) || n(t) >= g;
                    }, a.$observe("min", function(t) {
                        g = h(t), s.$validate();
                    });
                }
                if (b(a.max) || a.ngMax) {
                    var m;
                    s.$validators.max = function(t) {
                        return !f(t) || y(m) || n(t) <= m;
                    }, a.$observe("max", function(t) {
                        m = h(t), s.$validate();
                    });
                }
            };
        }
        function kr(t, e, n, r) {
            var i = e[0];
            (r.$$hasNativeValidators = w(i.validity)) && r.$parsers.push(function(t) {
                var n = e.prop(Xr) || {};
                return n.badInput || n.typeMismatch ? void 0 : t;
            });
        }
        function Dr(t) {
            t.$$parserName = "number", t.$parsers.push(function(e) {
                return t.$isEmpty(e) ? null : fa.test(e) ? parseFloat(e) : void 0;
            }), t.$formatters.push(function(e) {
                if (!t.$isEmpty(e)) {
                    if (!C(e)) throw Ua("numfmt", "Expected `{0}` to be a number", e);
                    e = e.toString();
                }
                return e;
            });
        }
        function Ir(t) {
            return b(t) && !C(t) && (t = parseFloat(t)), gi(t) ? void 0 : t;
        }
        function Nr(t) {
            return (0 | t) === t;
        }
        function Mr(t) {
            var e = t.toString(), n = e.indexOf(".");
            if (-1 === n) {
                if (-1 < t && t < 1) {
                    var r = /e-(\d+)$/.exec(e);
                    if (r) return Number(r[1]);
                }
                return 0;
            }
            return e.length - n - 1;
        }
        function jr(t, e, n) {
            var r = Number(t), i = !Nr(r), o = !Nr(e), a = !Nr(n);
            if (i || o || a) {
                var s = i ? Mr(r) : 0, u = o ? Mr(e) : 0, l = a ? Mr(n) : 0, c = Math.max(s, u, l), f = Math.pow(10, c);
                r *= f, e *= f, n *= f, i && (r = Math.round(r)), o && (e = Math.round(e)), a && (n = Math.round(n));
            }
            return (r - e) % n == 0;
        }
        function Lr(t, e, n, r, i, o) {
            kr(t, e, n, r), Dr(r), Tr(t, e, n, r, i, o);
            var a, s;
            if ((b(n.min) || n.ngMin) && (r.$validators.min = function(t) {
                return r.$isEmpty(t) || y(a) || t >= a;
            }, n.$observe("min", function(t) {
                a = Ir(t), r.$validate();
            })), (b(n.max) || n.ngMax) && (r.$validators.max = function(t) {
                return r.$isEmpty(t) || y(s) || t <= s;
            }, n.$observe("max", function(t) {
                s = Ir(t), r.$validate();
            })), b(n.step) || n.ngStep) {
                var u;
                r.$validators.step = function(t, e) {
                    return r.$isEmpty(e) || y(u) || jr(e, a || 0, u);
                }, n.$observe("step", function(t) {
                    u = Ir(t), r.$validate();
                });
            }
        }
        function Pr(t, e, n, r, i, o) {
            function a(t, r) {
                e.attr(t, n[t]), n.$observe(t, r);
            }
            function s(t) {
                if (f = Ir(t), !gi(r.$modelValue)) if (c) {
                    var n = e.val();
                    f > n && (n = f, e.val(n)), r.$setViewValue(n);
                } else r.$validate();
            }
            function u(t) {
                if (h = Ir(t), !gi(r.$modelValue)) if (c) {
                    var n = e.val();
                    h < n && (e.val(h), n = h < f ? f : h), r.$setViewValue(n);
                } else r.$validate();
            }
            function l(t) {
                d = Ir(t), gi(r.$modelValue) || (c && r.$viewValue !== e.val() ? r.$setViewValue(e.val()) : r.$validate());
            }
            kr(t, e, n, r), Dr(r), Tr(t, e, n, r, i, o);
            var c = r.$$hasNativeValidators && "range" === e[0].type, f = c ? 0 : void 0, h = c ? 100 : void 0, d = c ? 1 : void 0, p = e[0].validity, g = b(n.min), m = b(n.max), v = b(n.step), $ = r.$render;
            r.$render = c && b(p.rangeUnderflow) && b(p.rangeOverflow) ? function() {
                $(), r.$setViewValue(e.val());
            } : $, g && (r.$validators.min = c ? function() {
                return !0;
            } : function(t, e) {
                return r.$isEmpty(e) || y(f) || e >= f;
            }, a("min", s)), m && (r.$validators.max = c ? function() {
                return !0;
            } : function(t, e) {
                return r.$isEmpty(e) || y(h) || e <= h;
            }, a("max", u)), v && (r.$validators.step = c ? function() {
                return !p.stepMismatch;
            } : function(t, e) {
                return r.$isEmpty(e) || y(d) || jr(e, f || 0, d);
            }, a("step", l));
        }
        function Vr(t, e, n, r, i, o) {
            Tr(t, e, n, r, i, o), Cr(r), r.$$parserName = "url", r.$validators.url = function(t, e) {
                var n = t || e;
                return r.$isEmpty(n) || la.test(n);
            };
        }
        function Rr(t, e, n, r, i, o) {
            Tr(t, e, n, r, i, o), Cr(r), r.$$parserName = "email", r.$validators.email = function(t, e) {
                var n = t || e;
                return r.$isEmpty(n) || ca.test(n);
            };
        }
        function Hr(t, e, n, r) {
            var i = !n.ngTrim || "false" !== $i(n.ngTrim);
            y(n.name) && e.attr("name", u());
            var o = function(t) {
                var o;
                e[0].checked && (o = n.value, i && (o = $i(o)), r.$setViewValue(o, t && t.type));
            };
            e.on("click", o), r.$render = function() {
                var t = n.value;
                i && (t = $i(t)), e[0].checked = t === r.$viewValue;
            }, n.$observe("value", r.$render);
        }
        function Fr(t, e, n, r, i) {
            var o;
            if (b(r)) {
                if (o = t(r), !o.constant) throw Ua("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
                return o(e);
            }
            return i;
        }
        function Wr(t, e, n, r, i, o, a, s) {
            var u = Fr(s, t, "ngTrueValue", n.ngTrueValue, !0), l = Fr(s, t, "ngFalseValue", n.ngFalseValue, !1), c = function(t) {
                r.$setViewValue(e[0].checked, t && t.type);
            };
            e.on("click", c), r.$render = function() {
                e[0].checked = r.$viewValue;
            }, r.$isEmpty = function(t) {
                return !1 === t;
            }, r.$formatters.push(function(t) {
                return B(t, u);
            }), r.$parsers.push(function(t) {
                return t ? u : l;
            });
        }
        function Ur(t, e) {
            function n(t, e) {
                if (!t || !t.length) return [];
                if (!e || !e.length) return t;
                var n = [];
                t: for (var r = 0; r < t.length; r++) {
                    for (var i = t[r], o = 0; o < e.length; o++) if (i === e[o]) continue t;
                    n.push(i);
                }
                return n;
            }
            function r(t) {
                return t && t.split(" ");
            }
            function i(t) {
                var e = t;
                return mi(t) ? e = t.map(i).join(" ") : w(t) && (e = Object.keys(t).filter(function(e) {
                    return t[e];
                }).join(" ")), e;
            }
            function a(t) {
                var e = t;
                if (mi(t)) e = t.map(a); else if (w(t)) {
                    var n = !1;
                    e = Object.keys(t).filter(function(e) {
                        var r = t[e];
                        return !n && y(r) && (n = !0), r;
                    }), n && e.push(void 0);
                }
                return e;
            }
            t = "ngClass" + t;
            var s;
            return [ "$parse", function(u) {
                return {
                    restrict: "AC",
                    link: function(l, c, f) {
                        function h(t) {
                            t = g(r(t), 1), f.$addClass(t);
                        }
                        function d(t) {
                            t = g(r(t), -1), f.$removeClass(t);
                        }
                        function p(t, e) {
                            var i = r(t), o = r(e), a = n(i, o), s = n(o, i), u = g(a, -1), l = g(s, 1);
                            f.$addClass(l), f.$removeClass(u);
                        }
                        function g(t, e) {
                            var n = [];
                            return o(t, function(t) {
                                (e > 0 || _[t]) && (_[t] = (_[t] || 0) + e, _[t] === +(e > 0) && n.push(t));
                            }), n.join(" ");
                        }
                        function m(t) {
                            t === e ? h(y) : d(y), T = t;
                        }
                        function v(t) {
                            var e = i(t);
                            e !== y && $(e);
                        }
                        function $(t) {
                            T === e && p(y, t), y = t;
                        }
                        var y, b = f[t].trim(), w = ":" === b.charAt(0) && ":" === b.charAt(1), E = w ? a : i, x = u(b, E), C = w ? v : $, _ = c.data("$classCounts"), T = !0;
                        _ || (_ = $t(), c.data("$classCounts", _)), "ngClass" !== t && (s || (s = u("$index", function(t) {
                            return 1 & t;
                        })), l.$watch(s, m)), l.$watch(x, C, w);
                    }
                };
            } ];
        }
        function qr(t, e, n, r, i, o, a, s, u) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = void 0, 
            this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], 
            this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, 
            this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, 
            this.$pending = void 0, this.$name = u(n.name || "", !1)(t), this.$$parentForm = ra, 
            this.$options = qa, this.$$parsedNgModel = i(n.ngModel), this.$$parsedNgModelAssign = this.$$parsedNgModel.assign, 
            this.$$ngModelGet = this.$$parsedNgModel, this.$$ngModelSet = this.$$parsedNgModelAssign, 
            this.$$pendingDebounce = null, this.$$parserValid = void 0, this.$$currentValidationRunId = 0, 
            Object.defineProperty(this, "$$scope", {
                value: t
            }), this.$$attr = n, this.$$element = r, this.$$animate = o, this.$$timeout = a, 
            this.$$parse = i, this.$$q = s, this.$$exceptionHandler = e, wr(this), Br(this);
        }
        function Br(t) {
            t.$$scope.$watch(function(e) {
                var n = t.$$ngModelGet(e);
                if (n !== t.$modelValue && (t.$modelValue === t.$modelValue || n === n)) {
                    t.$modelValue = t.$$rawModelValue = n, t.$$parserValid = void 0;
                    for (var r = t.$formatters, i = r.length, o = n; i--; ) o = r[i](o);
                    t.$viewValue !== o && (t.$$updateEmptyClasses(o), t.$viewValue = t.$$lastCommittedViewValue = o, 
                    t.$render(), t.$$runValidators(t.$modelValue, t.$viewValue, g));
                }
                return n;
            });
        }
        function zr(t) {
            this.$$options = t;
        }
        function Gr(t, e) {
            o(e, function(e, n) {
                b(t[n]) || (t[n] = e);
            });
        }
        function Kr(t, e) {
            t.prop("selected", e), t.attr("selected", e);
        }
        var Qr = {
            objectMaxDepth: 5
        }, Yr = /^\/(.+)\/([a-z]*)$/, Xr = "validity", Jr = Object.prototype.hasOwnProperty, Zr = function(t) {
            return x(t) ? t.toLowerCase() : t;
        }, ti = function(t) {
            return x(t) ? t.toUpperCase() : t;
        }, ei = function(t) {
            return x(t) ? t.replace(/[A-Z]/g, function(t) {
                return String.fromCharCode(32 | t.charCodeAt(0));
            }) : t;
        }, ni = function(t) {
            return x(t) ? t.replace(/[a-z]/g, function(t) {
                return String.fromCharCode(-33 & t.charCodeAt(0));
            }) : t;
        };
        "i" !== "I".toLowerCase() && (Zr = ei, ti = ni);
        var ri, ii, oi, ai, si = [].slice, ui = [].splice, li = [].push, ci = Object.prototype.toString, fi = Object.getPrototypeOf, hi = r("ng"), di = t.angular || (t.angular = {}), pi = 0;
        ri = t.document.documentMode;
        var gi = Number.isNaN || function(t) {
            return t !== t;
        };
        g.$inject = [], m.$inject = [];
        var mi = Array.isArray, vi = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/, $i = function(t) {
            return x(t) ? t.trim() : t;
        }, yi = function(t) {
            return t.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
        }, bi = function() {
            if (!b(bi.rules)) {
                var e = t.document.querySelector("[ng-csp]") || t.document.querySelector("[data-ng-csp]");
                if (e) {
                    var n = e.getAttribute("ng-csp") || e.getAttribute("data-ng-csp");
                    bi.rules = {
                        noUnsafeEval: !n || -1 !== n.indexOf("no-unsafe-eval"),
                        noInlineStyle: !n || -1 !== n.indexOf("no-inline-style")
                    };
                } else bi.rules = {
                    noUnsafeEval: function() {
                        try {
                            return new Function(""), !1;
                        } catch (t) {
                            return !0;
                        }
                    }(),
                    noInlineStyle: !1
                };
            }
            return bi.rules;
        }, wi = function() {
            if (b(wi.name_)) return wi.name_;
            var e, n, r, i, o = xi.length;
            for (n = 0; n < o; ++n) if (r = xi[n], e = t.document.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
                i = e.getAttribute(r + "jq");
                break;
            }
            return wi.name_ = i;
        }, Ei = /:/g, xi = [ "ng-", "data-ng-", "ng:", "x-ng-" ], Ci = function(e) {
            var n = e.currentScript;
            if (!n) return !0;
            if (!(n instanceof t.HTMLScriptElement || n instanceof t.SVGScriptElement)) return !1;
            var r = n.attributes;
            return [ r.getNamedItem("src"), r.getNamedItem("href"), r.getNamedItem("xlink:href") ].every(function(t) {
                if (!t) return !0;
                if (!t.value) return !1;
                var n = e.createElement("a");
                if (n.href = t.value, e.location.origin === n.origin) return !0;
                switch (n.protocol) {
                  case "http:":
                  case "https:":
                  case "ftp:":
                  case "blob:":
                  case "file:":
                  case "data:":
                    return !0;

                  default:
                    return !1;
                }
            });
        }(t.document), _i = /[A-Z]/g, Ti = !1, Si = 1, Ai = 3, Oi = 8, ki = 9, Di = 11, Ii = {
            full: "1.6.5",
            major: 1,
            minor: 6,
            dot: 5,
            codeName: "toffee-salinization"
        };
        Mt.expando = "ng339";
        var Ni = Mt.cache = {}, Mi = 1;
        Mt._data = function(t) {
            return this.cache[t[this.expando]] || {};
        };
        var ji = /-([a-z])/g, Li = /^-ms-/, Pi = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        }, Vi = r("jqLite"), Ri = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Hi = /<|&#?\w+;/, Fi = /<([\w:-]+)/, Wi = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Ui = {
            option: [ 1, '<select multiple="multiple">', "</select>" ],
            thead: [ 1, "<table>", "</table>" ],
            col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
            _default: [ 0, "", "" ]
        };
        Ui.optgroup = Ui.option, Ui.tbody = Ui.tfoot = Ui.colgroup = Ui.caption = Ui.thead, 
        Ui.th = Ui.td;
        var qi = t.Node.prototype.contains || function(t) {
            return !!(16 & this.compareDocumentPosition(t));
        }, Bi = Mt.prototype = {
            ready: Yt,
            toString: function() {
                var t = [];
                return o(this, function(e) {
                    t.push("" + e);
                }), "[" + t.join(", ") + "]";
            },
            eq: function(t) {
                return ii(t >= 0 ? this[t] : this[this.length + t]);
            },
            length: 0,
            push: li,
            sort: [].sort,
            splice: [].splice
        }, zi = {};
        o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(t) {
            zi[Zr(t)] = t;
        });
        var Gi = {};
        o("input,select,option,textarea,button,form,details".split(","), function(t) {
            Gi[t] = !0;
        });
        var Ki = {
            ngMinlength: "minlength",
            ngMaxlength: "maxlength",
            ngMin: "min",
            ngMax: "max",
            ngPattern: "pattern",
            ngStep: "step"
        };
        o({
            data: Ht,
            removeData: Vt,
            hasData: kt,
            cleanData: function(t) {
                for (var e = 0, n = t.length; e < n; e++) Vt(t[e]);
            }
        }, function(t, e) {
            Mt[e] = t;
        }), o({
            data: Ht,
            inheritedData: zt,
            scope: function(t) {
                return ii.data(t, "$scope") || zt(t.parentNode || t, [ "$isolateScope", "$scope" ]);
            },
            isolateScope: function(t) {
                return ii.data(t, "$isolateScope") || ii.data(t, "$isolateScopeNoTemplate");
            },
            controller: Bt,
            injector: function(t) {
                return zt(t, "$injector");
            },
            removeAttr: function(t, e) {
                t.removeAttribute(e);
            },
            hasClass: Ft,
            css: function(t, e, n) {
                if (e = _t(e), !b(n)) return t.style[e];
                t.style[e] = n;
            },
            attr: function(t, e, n) {
                var r, i = t.nodeType;
                if (i !== Ai && 2 !== i && i !== Oi && t.getAttribute) {
                    var o = Zr(e), a = zi[o];
                    if (!b(n)) return r = t.getAttribute(e), a && null !== r && (r = o), null === r ? void 0 : r;
                    null === n || !1 === n && a ? t.removeAttribute(e) : t.setAttribute(e, a ? o : n);
                }
            },
            prop: function(t, e, n) {
                if (!b(n)) return t[e];
                t[e] = n;
            },
            text: function() {
                function t(t, e) {
                    if (y(e)) {
                        var n = t.nodeType;
                        return n === Si || n === Ai ? t.textContent : "";
                    }
                    t.textContent = e;
                }
                return t.$dv = "", t;
            }(),
            val: function(t, e) {
                if (y(e)) {
                    if (t.multiple && "select" === H(t)) {
                        var n = [];
                        return o(t.options, function(t) {
                            t.selected && n.push(t.value || t.text);
                        }), n;
                    }
                    return t.value;
                }
                t.value = e;
            },
            html: function(t, e) {
                if (y(e)) return t.innerHTML;
                Lt(t, !0), t.innerHTML = e;
            },
            empty: Gt
        }, function(t, e) {
            Mt.prototype[e] = function(e, n) {
                var r, i, o = this.length;
                if (t !== Gt && y(2 === t.length && t !== Ft && t !== Bt ? e : n)) {
                    if (w(e)) {
                        for (r = 0; r < o; r++) if (t === Ht) t(this[r], e); else for (i in e) t(this[r], i, e[i]);
                        return this;
                    }
                    for (var a = t.$dv, s = y(a) ? Math.min(o, 1) : o, u = 0; u < s; u++) {
                        var l = t(this[u], e, n);
                        a = a ? a + l : l;
                    }
                    return a;
                }
                for (r = 0; r < o; r++) t(this[r], e, n);
                return this;
            };
        }), o({
            removeData: Vt,
            on: function(t, e, n, r) {
                if (b(r)) throw Vi("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                if (Ot(t)) {
                    var i = Rt(t, !0), o = i.events, a = i.handle;
                    a || (a = i.handle = Zt(t, o));
                    for (var s = e.indexOf(" ") >= 0 ? e.split(" ") : [ e ], u = s.length, l = function(e, r, i) {
                        var s = o[e];
                        s || (s = o[e] = [], s.specialHandlerWrapper = r, "$destroy" === e || i || t.addEventListener(e, a)), 
                        s.push(n);
                    }; u--; ) e = s[u], Pi[e] ? (l(Pi[e], ee), l(e, void 0, !0)) : l(e);
                }
            },
            off: Pt,
            one: function(t, e, n) {
                t = ii(t), t.on(e, function r() {
                    t.off(e, n), t.off(e, r);
                }), t.on(e, n);
            },
            replaceWith: function(t, e) {
                var n, r = t.parentNode;
                Lt(t), o(new Mt(e), function(e) {
                    n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e;
                });
            },
            children: function(t) {
                var e = [];
                return o(t.childNodes, function(t) {
                    t.nodeType === Si && e.push(t);
                }), e;
            },
            contents: function(t) {
                return t.contentDocument || t.childNodes || [];
            },
            append: function(t, e) {
                var n = t.nodeType;
                if (n === Si || n === Di) {
                    e = new Mt(e);
                    for (var r = 0, i = e.length; r < i; r++) {
                        var o = e[r];
                        t.appendChild(o);
                    }
                }
            },
            prepend: function(t, e) {
                if (t.nodeType === Si) {
                    var n = t.firstChild;
                    o(new Mt(e), function(e) {
                        t.insertBefore(e, n);
                    });
                }
            },
            wrap: function(t, e) {
                Nt(t, ii(e).eq(0).clone()[0]);
            },
            remove: Kt,
            detach: function(t) {
                Kt(t, !0);
            },
            after: function(t, e) {
                var n = t, r = t.parentNode;
                if (r) {
                    e = new Mt(e);
                    for (var i = 0, o = e.length; i < o; i++) {
                        var a = e[i];
                        r.insertBefore(a, n.nextSibling), n = a;
                    }
                }
            },
            addClass: Ut,
            removeClass: Wt,
            toggleClass: function(t, e, n) {
                e && o(e.split(" "), function(e) {
                    var r = n;
                    y(r) && (r = !Ft(t, e)), (r ? Ut : Wt)(t, e);
                });
            },
            parent: function(t) {
                var e = t.parentNode;
                return e && e.nodeType !== Di ? e : null;
            },
            next: function(t) {
                return t.nextElementSibling;
            },
            find: function(t, e) {
                return t.getElementsByTagName ? t.getElementsByTagName(e) : [];
            },
            clone: jt,
            triggerHandler: function(t, e, n) {
                var r, i, a, s = e.type || e, u = Rt(t), l = u && u.events, c = l && l[s];
                c && (r = {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                    },
                    isDefaultPrevented: function() {
                        return !0 === this.defaultPrevented;
                    },
                    stopImmediatePropagation: function() {
                        this.immediatePropagationStopped = !0;
                    },
                    isImmediatePropagationStopped: function() {
                        return !0 === this.immediatePropagationStopped;
                    },
                    stopPropagation: g,
                    type: s,
                    target: t
                }, e.type && (r = f(r, e)), i = wt(c), a = n ? [ r ].concat(n) : [ r ], o(i, function(e) {
                    r.isImmediatePropagationStopped() || e.apply(t, a);
                }));
            }
        }, function(t, e) {
            Mt.prototype[e] = function(e, n, r) {
                for (var i, o = 0, a = this.length; o < a; o++) y(i) ? (i = t(this[o], e, n, r), 
                b(i) && (i = ii(i))) : qt(i, t(this[o], e, n, r));
                return b(i) ? i : this;
            };
        }), Mt.prototype.bind = Mt.prototype.on, Mt.prototype.unbind = Mt.prototype.off;
        var Qi = Object.create(null);
        ie.prototype = {
            _idx: function(t) {
                return t === this._lastKey ? this._lastIndex : (this._lastKey = t, this._lastIndex = this._keys.indexOf(t), 
                this._lastIndex);
            },
            _transformKey: function(t) {
                return gi(t) ? Qi : t;
            },
            get: function(t) {
                t = this._transformKey(t);
                var e = this._idx(t);
                if (-1 !== e) return this._values[e];
            },
            set: function(t, e) {
                t = this._transformKey(t);
                var n = this._idx(t);
                -1 === n && (n = this._lastIndex = this._keys.length), this._keys[n] = t, this._values[n] = e;
            },
            delete: function(t) {
                t = this._transformKey(t);
                var e = this._idx(t);
                return -1 !== e && (this._keys.splice(e, 1), this._values.splice(e, 1), this._lastKey = NaN, 
                this._lastIndex = -1, !0);
            }
        };
        var Yi = ie, Xi = [ function() {
            this.$get = [ function() {
                return Yi;
            } ];
        } ], Ji = /^([^(]+?)=>/, Zi = /^[^(]*\(\s*([^)]*)\)/m, to = /,/, eo = /^\s*(_?)(\S+?)\1\s*$/, no = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, ro = r("$injector");
        le.$$annotate = ue;
        var io = r("$animate"), oo = 1, ao = function() {
            this.$get = g;
        }, so = function() {
            var t = new Yi(), e = [];
            this.$get = [ "$$AnimateRunner", "$rootScope", function(n, r) {
                function i(t, e, n) {
                    var r = !1;
                    return e && (e = x(e) ? e.split(" ") : mi(e) ? e : [], o(e, function(e) {
                        e && (r = !0, t[e] = n);
                    })), r;
                }
                function a() {
                    o(e, function(e) {
                        var n = t.get(e);
                        if (n) {
                            var r = de(e.attr("class")), i = "", a = "";
                            o(n, function(t, e) {
                                t !== !!r[e] && (t ? i += (i.length ? " " : "") + e : a += (a.length ? " " : "") + e);
                            }), o(e, function(t) {
                                i && Ut(t, i), a && Wt(t, a);
                            }), t.delete(e);
                        }
                    }), e.length = 0;
                }
                function s(n, o, s) {
                    var u = t.get(n) || {}, l = i(u, o, !0), c = i(u, s, !1);
                    (l || c) && (t.set(n, u), e.push(n), 1 === e.length && r.$$postDigest(a));
                }
                return {
                    enabled: g,
                    on: g,
                    off: g,
                    pin: g,
                    push: function(t, e, r, i) {
                        i && i(), r = r || {}, r.from && t.css(r.from), r.to && t.css(r.to), (r.addClass || r.removeClass) && s(t, r.addClass, r.removeClass);
                        var o = new n();
                        return o.complete(), o;
                    }
                };
            } ];
        }, uo = [ "$provide", function(t) {
            var e = this, n = null, r = null;
            this.$$registeredAnimations = Object.create(null), this.register = function(n, r) {
                if (n && "." !== n.charAt(0)) throw io("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
                var i = n + "-animation";
                e.$$registeredAnimations[n.substr(1)] = i, t.factory(i, r);
            }, this.customFilter = function(t) {
                return 1 === arguments.length && (r = S(t) ? t : null), r;
            }, this.classNameFilter = function(t) {
                if (1 === arguments.length && (n = t instanceof RegExp ? t : null)) {
                    if (new RegExp("[(\\s|\\/)]ng-animate[(\\s|\\/)]").test(n.toString())) throw n = null, 
                    io("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', "ng-animate");
                }
                return n;
            }, this.$get = [ "$$animateQueue", function(t) {
                function e(t, e, n) {
                    if (n) {
                        var r = he(n);
                        !r || r.parentNode || r.previousElementSibling || (n = null);
                    }
                    n ? n.after(t) : e.prepend(t);
                }
                return {
                    on: t.on,
                    off: t.off,
                    pin: t.pin,
                    enabled: t.enabled,
                    cancel: function(t) {
                        t.end && t.end();
                    },
                    enter: function(n, r, i, o) {
                        return r = r && ii(r), i = i && ii(i), r = r || i.parent(), e(n, r, i), t.push(n, "enter", pe(o));
                    },
                    move: function(n, r, i, o) {
                        return r = r && ii(r), i = i && ii(i), r = r || i.parent(), e(n, r, i), t.push(n, "move", pe(o));
                    },
                    leave: function(e, n) {
                        return t.push(e, "leave", pe(n), function() {
                            e.remove();
                        });
                    },
                    addClass: function(e, n, r) {
                        return r = pe(r), r.addClass = fe(r.addclass, n), t.push(e, "addClass", r);
                    },
                    removeClass: function(e, n, r) {
                        return r = pe(r), r.removeClass = fe(r.removeClass, n), t.push(e, "removeClass", r);
                    },
                    setClass: function(e, n, r, i) {
                        return i = pe(i), i.addClass = fe(i.addClass, n), i.removeClass = fe(i.removeClass, r), 
                        t.push(e, "setClass", i);
                    },
                    animate: function(e, n, r, i, o) {
                        return o = pe(o), o.from = o.from ? f(o.from, n) : n, o.to = o.to ? f(o.to, r) : r, 
                        i = i || "ng-inline-animate", o.tempClasses = fe(o.tempClasses, i), t.push(e, "animate", o);
                    }
                };
            } ];
        } ], lo = function() {
            this.$get = [ "$$rAF", function(t) {
                function e(e) {
                    n.push(e), n.length > 1 || t(function() {
                        for (var t = 0; t < n.length; t++) n[t]();
                        n = [];
                    });
                }
                var n = [];
                return function() {
                    var t = !1;
                    return e(function() {
                        t = !0;
                    }), function(n) {
                        t ? n() : e(n);
                    };
                };
            } ];
        }, co = function() {
            this.$get = [ "$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function(t, e, n, r, i) {
                function a(t) {
                    this.setHost(t);
                    var e = n(), o = function(t) {
                        i(t, 0, !1);
                    };
                    this._doneCallbacks = [], this._tick = function(t) {
                        r() ? o(t) : e(t);
                    }, this._state = 0;
                }
                return a.chain = function(t, e) {
                    function n() {
                        if (r === t.length) return void e(!0);
                        t[r](function(t) {
                            if (!1 === t) return void e(!1);
                            r++, n();
                        });
                    }
                    var r = 0;
                    n();
                }, a.all = function(t, e) {
                    function n(n) {
                        i = i && n, ++r === t.length && e(i);
                    }
                    var r = 0, i = !0;
                    o(t, function(t) {
                        t.done(n);
                    });
                }, a.prototype = {
                    setHost: function(t) {
                        this.host = t || {};
                    },
                    done: function(t) {
                        2 === this._state ? t() : this._doneCallbacks.push(t);
                    },
                    progress: g,
                    getPromise: function() {
                        if (!this.promise) {
                            var e = this;
                            this.promise = t(function(t, n) {
                                e.done(function(e) {
                                    !1 === e ? n() : t();
                                });
                            });
                        }
                        return this.promise;
                    },
                    then: function(t, e) {
                        return this.getPromise().then(t, e);
                    },
                    catch: function(t) {
                        return this.getPromise().catch(t);
                    },
                    finally: function(t) {
                        return this.getPromise().finally(t);
                    },
                    pause: function() {
                        this.host.pause && this.host.pause();
                    },
                    resume: function() {
                        this.host.resume && this.host.resume();
                    },
                    end: function() {
                        this.host.end && this.host.end(), this._resolve(!0);
                    },
                    cancel: function() {
                        this.host.cancel && this.host.cancel(), this._resolve(!1);
                    },
                    complete: function(t) {
                        var e = this;
                        0 === e._state && (e._state = 1, e._tick(function() {
                            e._resolve(t);
                        }));
                    },
                    _resolve: function(t) {
                        2 !== this._state && (o(this._doneCallbacks, function(e) {
                            e(t);
                        }), this._doneCallbacks.length = 0, this._state = 2);
                    }
                }, a;
            } ];
        }, fo = function() {
            this.$get = [ "$$rAF", "$q", "$$AnimateRunner", function(t, e, n) {
                return function(e, r) {
                    function i() {
                        return t(function() {
                            o(), s || u.complete(), s = !0;
                        }), u;
                    }
                    function o() {
                        a.addClass && (e.addClass(a.addClass), a.addClass = null), a.removeClass && (e.removeClass(a.removeClass), 
                        a.removeClass = null), a.to && (e.css(a.to), a.to = null);
                    }
                    var a = r || {};
                    a.$$prepared || (a = U(a)), a.cleanupStyles && (a.from = a.to = null), a.from && (e.css(a.from), 
                    a.from = null);
                    var s, u = new n();
                    return {
                        start: i,
                        end: i
                    };
                };
            } ];
        }, ho = r("$compile"), po = new ye();
        be.$inject = [ "$provide", "$$sanitizeUriProvider" ], we.prototype.isFirstChange = function() {
            return this.previousValue === po;
        };
        var go = /^((?:x|data)[:\-_])/i, mo = /[:\-_]+(.)/g, vo = r("$controller"), $o = /^(\S+)(\s+as\s+([\w$]+))?$/, yo = function() {
            this.$get = [ "$document", function(t) {
                return function(e) {
                    return e ? !e.nodeType && e instanceof ii && (e = e[0]) : e = t[0].body, e.offsetWidth + 1;
                };
            } ];
        }, bo = "application/json", wo = {
            "Content-Type": bo + ";charset=utf-8"
        }, Eo = /^\[|^\{(?!\{)/, xo = {
            "[": /]$/,
            "{": /}$/
        }, Co = /^\)]\}',?\n/, _o = r("$http"), To = di.$interpolateMinErr = r("$interpolate");
        To.throwNoconcat = function(t) {
            throw To("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", t);
        }, To.interr = function(t, e) {
            return To("interr", "Can't interpolate: {0}\n{1}", t, e.toString());
        };
        var So = function() {
            this.$get = function() {
                function t(t) {
                    var e = function(t) {
                        e.data = t, e.called = !0;
                    };
                    return e.id = t, e;
                }
                var e = di.callbacks, n = {};
                return {
                    createCallback: function(r) {
                        var i = "_" + (e.$$counter++).toString(36), o = "angular.callbacks." + i, a = t(i);
                        return n[o] = e[i] = a, o;
                    },
                    wasCalled: function(t) {
                        return n[t].called;
                    },
                    getResponse: function(t) {
                        return n[t].data;
                    },
                    removeCallback: function(t) {
                        var r = n[t];
                        delete e[r.id], delete n[t];
                    }
                };
            };
        }, Ao = /^([^?#]*)(\?([^#]*))?(#(.*))?$/, Oo = {
            http: 80,
            https: 443,
            ftp: 21
        }, ko = r("$location"), Do = /^\s*[\\\/]{2,}/, Io = {
            $$absUrl: "",
            $$html5: !1,
            $$replace: !1,
            absUrl: rn("$$absUrl"),
            url: function(t) {
                if (y(t)) return this.$$url;
                var e = Ao.exec(t);
                return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), 
                this.hash(e[5] || ""), this;
            },
            protocol: rn("$$protocol"),
            host: rn("$$host"),
            port: rn("$$port"),
            path: on("$$path", function(t) {
                return t = null !== t ? t.toString() : "", "/" === t.charAt(0) ? t : "/" + t;
            }),
            search: function(t, e) {
                switch (arguments.length) {
                  case 0:
                    return this.$$search;

                  case 1:
                    if (x(t) || C(t)) t = t.toString(), this.$$search = rt(t); else {
                        if (!w(t)) throw ko("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                        t = U(t, {}), o(t, function(e, n) {
                            null == e && delete t[n];
                        }), this.$$search = t;
                    }
                    break;

                  default:
                    y(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e;
                }
                return this.$$compose(), this;
            },
            hash: on("$$hash", function(t) {
                return null !== t ? t.toString() : "";
            }),
            replace: function() {
                return this.$$replace = !0, this;
            }
        };
        o([ nn, en, tn ], function(t) {
            t.prototype = Object.create(Io), t.prototype.state = function(e) {
                if (!arguments.length) return this.$$state;
                if (t !== tn || !this.$$html5) throw ko("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
                return this.$$state = y(e) ? null : e, this.$$urlUpdatedByLocation = !0, this;
            };
        });
        var No = r("$parse"), Mo = {}.constructor.prototype.valueOf, jo = $t();
        o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(t) {
            jo[t] = !0;
        });
        var Lo = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        }, Po = function(t) {
            this.options = t;
        };
        Po.prototype = {
            constructor: Po,
            lex: function(t) {
                for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length; ) {
                    var e = this.text.charAt(this.index);
                    if ('"' === e || "'" === e) this.readString(e); else if (this.isNumber(e) || "." === e && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent(); else if (this.is(e, "(){}[].,;:?")) this.tokens.push({
                        index: this.index,
                        text: e
                    }), this.index++; else if (this.isWhitespace(e)) this.index++; else {
                        var n = e + this.peek(), r = n + this.peek(2), i = jo[e], o = jo[n], a = jo[r];
                        if (i || o || a) {
                            var s = a ? r : o ? n : e;
                            this.tokens.push({
                                index: this.index,
                                text: s,
                                operator: !0
                            }), this.index += s.length;
                        } else this.throwError("Unexpected next character ", this.index, this.index + 1);
                    }
                }
                return this.tokens;
            },
            is: function(t, e) {
                return -1 !== e.indexOf(t);
            },
            peek: function(t) {
                var e = t || 1;
                return this.index + e < this.text.length && this.text.charAt(this.index + e);
            },
            isNumber: function(t) {
                return "0" <= t && t <= "9" && "string" == typeof t;
            },
            isWhitespace: function(t) {
                return " " === t || "\r" === t || "\t" === t || "\n" === t || "\v" === t || " " === t;
            },
            isIdentifierStart: function(t) {
                return this.options.isIdentifierStart ? this.options.isIdentifierStart(t, this.codePointAt(t)) : this.isValidIdentifierStart(t);
            },
            isValidIdentifierStart: function(t) {
                return "a" <= t && t <= "z" || "A" <= t && t <= "Z" || "_" === t || "$" === t;
            },
            isIdentifierContinue: function(t) {
                return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(t, this.codePointAt(t)) : this.isValidIdentifierContinue(t);
            },
            isValidIdentifierContinue: function(t, e) {
                return this.isValidIdentifierStart(t, e) || this.isNumber(t);
            },
            codePointAt: function(t) {
                return 1 === t.length ? t.charCodeAt(0) : (t.charCodeAt(0) << 10) + t.charCodeAt(1) - 56613888;
            },
            peekMultichar: function() {
                var t = this.text.charAt(this.index), e = this.peek();
                if (!e) return t;
                var n = t.charCodeAt(0), r = e.charCodeAt(0);
                return n >= 55296 && n <= 56319 && r >= 56320 && r <= 57343 ? t + e : t;
            },
            isExpOperator: function(t) {
                return "-" === t || "+" === t || this.isNumber(t);
            },
            throwError: function(t, e, n) {
                n = n || this.index;
                var r = b(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n;
                throw No("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, r, this.text);
            },
            readNumber: function() {
                for (var t = "", e = this.index; this.index < this.text.length; ) {
                    var n = Zr(this.text.charAt(this.index));
                    if ("." === n || this.isNumber(n)) t += n; else {
                        var r = this.peek();
                        if ("e" === n && this.isExpOperator(r)) t += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" === t.charAt(t.length - 1)) t += n; else {
                            if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" !== t.charAt(t.length - 1)) break;
                            this.throwError("Invalid exponent");
                        }
                    }
                    this.index++;
                }
                this.tokens.push({
                    index: e,
                    text: t,
                    constant: !0,
                    value: Number(t)
                });
            },
            readIdent: function() {
                var t = this.index;
                for (this.index += this.peekMultichar().length; this.index < this.text.length; ) {
                    var e = this.peekMultichar();
                    if (!this.isIdentifierContinue(e)) break;
                    this.index += e.length;
                }
                this.tokens.push({
                    index: t,
                    text: this.text.slice(t, this.index),
                    identifier: !0
                });
            },
            readString: function(t) {
                var e = this.index;
                this.index++;
                for (var n = "", r = t, i = !1; this.index < this.text.length; ) {
                    var o = this.text.charAt(this.index);
                    if (r += o, i) {
                        if ("u" === o) {
                            var a = this.text.substring(this.index + 1, this.index + 5);
                            a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), 
                            this.index += 4, n += String.fromCharCode(parseInt(a, 16));
                        } else {
                            n += Lo[o] || o;
                        }
                        i = !1;
                    } else if ("\\" === o) i = !0; else {
                        if (o === t) return this.index++, void this.tokens.push({
                            index: e,
                            text: r,
                            constant: !0,
                            value: n
                        });
                        n += o;
                    }
                    this.index++;
                }
                this.throwError("Unterminated quote", e);
            }
        };
        var Vo = function(t, e) {
            this.lexer = t, this.options = e;
        };
        Vo.Program = "Program", Vo.ExpressionStatement = "ExpressionStatement", Vo.AssignmentExpression = "AssignmentExpression", 
        Vo.ConditionalExpression = "ConditionalExpression", Vo.LogicalExpression = "LogicalExpression", 
        Vo.BinaryExpression = "BinaryExpression", Vo.UnaryExpression = "UnaryExpression", 
        Vo.CallExpression = "CallExpression", Vo.MemberExpression = "MemberExpression", 
        Vo.Identifier = "Identifier", Vo.Literal = "Literal", Vo.ArrayExpression = "ArrayExpression", 
        Vo.Property = "Property", Vo.ObjectExpression = "ObjectExpression", Vo.ThisExpression = "ThisExpression", 
        Vo.LocalsExpression = "LocalsExpression", Vo.NGValueParameter = "NGValueParameter", 
        Vo.prototype = {
            ast: function(t) {
                this.text = t, this.tokens = this.lexer.lex(t);
                var e = this.program();
                return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), 
                e;
            },
            program: function() {
                for (var t = []; ;) if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && t.push(this.expressionStatement()), 
                !this.expect(";")) return {
                    type: Vo.Program,
                    body: t
                };
            },
            expressionStatement: function() {
                return {
                    type: Vo.ExpressionStatement,
                    expression: this.filterChain()
                };
            },
            filterChain: function() {
                for (var t = this.expression(); this.expect("|"); ) t = this.filter(t);
                return t;
            },
            expression: function() {
                return this.assignment();
            },
            assignment: function() {
                var t = this.ternary();
                if (this.expect("=")) {
                    if (!gn(t)) throw No("lval", "Trying to assign a value to a non l-value");
                    t = {
                        type: Vo.AssignmentExpression,
                        left: t,
                        right: this.assignment(),
                        operator: "="
                    };
                }
                return t;
            },
            ternary: function() {
                var t, e, n = this.logicalOR();
                return this.expect("?") && (t = this.expression(), this.consume(":")) ? (e = this.expression(), 
                {
                    type: Vo.ConditionalExpression,
                    test: n,
                    alternate: t,
                    consequent: e
                }) : n;
            },
            logicalOR: function() {
                for (var t = this.logicalAND(); this.expect("||"); ) t = {
                    type: Vo.LogicalExpression,
                    operator: "||",
                    left: t,
                    right: this.logicalAND()
                };
                return t;
            },
            logicalAND: function() {
                for (var t = this.equality(); this.expect("&&"); ) t = {
                    type: Vo.LogicalExpression,
                    operator: "&&",
                    left: t,
                    right: this.equality()
                };
                return t;
            },
            equality: function() {
                for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!=="); ) e = {
                    type: Vo.BinaryExpression,
                    operator: t.text,
                    left: e,
                    right: this.relational()
                };
                return e;
            },
            relational: function() {
                for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">="); ) e = {
                    type: Vo.BinaryExpression,
                    operator: t.text,
                    left: e,
                    right: this.additive()
                };
                return e;
            },
            additive: function() {
                for (var t, e = this.multiplicative(); t = this.expect("+", "-"); ) e = {
                    type: Vo.BinaryExpression,
                    operator: t.text,
                    left: e,
                    right: this.multiplicative()
                };
                return e;
            },
            multiplicative: function() {
                for (var t, e = this.unary(); t = this.expect("*", "/", "%"); ) e = {
                    type: Vo.BinaryExpression,
                    operator: t.text,
                    left: e,
                    right: this.unary()
                };
                return e;
            },
            unary: function() {
                var t;
                return (t = this.expect("+", "-", "!")) ? {
                    type: Vo.UnaryExpression,
                    operator: t.text,
                    prefix: !0,
                    argument: this.unary()
                } : this.primary();
            },
            primary: function() {
                var t;
                this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? t = U(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? t = {
                    type: Vo.Literal,
                    value: this.options.literals[this.consume().text]
                } : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek());
                for (var e; e = this.expect("(", "[", "."); ) "(" === e.text ? (t = {
                    type: Vo.CallExpression,
                    callee: t,
                    arguments: this.parseArguments()
                }, this.consume(")")) : "[" === e.text ? (t = {
                    type: Vo.MemberExpression,
                    object: t,
                    property: this.expression(),
                    computed: !0
                }, this.consume("]")) : "." === e.text ? t = {
                    type: Vo.MemberExpression,
                    object: t,
                    property: this.identifier(),
                    computed: !1
                } : this.throwError("IMPOSSIBLE");
                return t;
            },
            filter: function(t) {
                for (var e = [ t ], n = {
                    type: Vo.CallExpression,
                    callee: this.identifier(),
                    arguments: e,
                    filter: !0
                }; this.expect(":"); ) e.push(this.expression());
                return n;
            },
            parseArguments: function() {
                var t = [];
                if (")" !== this.peekToken().text) do {
                    t.push(this.filterChain());
                } while (this.expect(","));
                return t;
            },
            identifier: function() {
                var t = this.consume();
                return t.identifier || this.throwError("is not a valid identifier", t), {
                    type: Vo.Identifier,
                    name: t.text
                };
            },
            constant: function() {
                return {
                    type: Vo.Literal,
                    value: this.consume().value
                };
            },
            arrayDeclaration: function() {
                var t = [];
                if ("]" !== this.peekToken().text) do {
                    if (this.peek("]")) break;
                    t.push(this.expression());
                } while (this.expect(","));
                return this.consume("]"), {
                    type: Vo.ArrayExpression,
                    elements: t
                };
            },
            object: function() {
                var t, e = [];
                if ("}" !== this.peekToken().text) do {
                    if (this.peek("}")) break;
                    t = {
                        type: Vo.Property,
                        kind: "init"
                    }, this.peek().constant ? (t.key = this.constant(), t.computed = !1, this.consume(":"), 
                    t.value = this.expression()) : this.peek().identifier ? (t.key = this.identifier(), 
                    t.computed = !1, this.peek(":") ? (this.consume(":"), t.value = this.expression()) : t.value = t.key) : this.peek("[") ? (this.consume("["), 
                    t.key = this.expression(), this.consume("]"), t.computed = !0, this.consume(":"), 
                    t.value = this.expression()) : this.throwError("invalid key", this.peek()), e.push(t);
                } while (this.expect(","));
                return this.consume("}"), {
                    type: Vo.ObjectExpression,
                    properties: e
                };
            },
            throwError: function(t, e) {
                throw No("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, t, e.index + 1, this.text, this.text.substring(e.index));
            },
            consume: function(t) {
                if (0 === this.tokens.length) throw No("ueoe", "Unexpected end of expression: {0}", this.text);
                var e = this.expect(t);
                return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), 
                e;
            },
            peekToken: function() {
                if (0 === this.tokens.length) throw No("ueoe", "Unexpected end of expression: {0}", this.text);
                return this.tokens[0];
            },
            peek: function(t, e, n, r) {
                return this.peekAhead(0, t, e, n, r);
            },
            peekAhead: function(t, e, n, r, i) {
                if (this.tokens.length > t) {
                    var o = this.tokens[t], a = o.text;
                    if (a === e || a === n || a === r || a === i || !e && !n && !r && !i) return o;
                }
                return !1;
            },
            expect: function(t, e, n, r) {
                var i = this.peek(t, e, n, r);
                return !!i && (this.tokens.shift(), i);
            },
            selfReferential: {
                this: {
                    type: Vo.ThisExpression
                },
                $locals: {
                    type: Vo.LocalsExpression
                }
            }
        };
        var Ro = 1, Ho = 2;
        yn.prototype = {
            compile: function(t) {
                var e = this;
                this.state = {
                    nextId: 0,
                    filters: {},
                    fn: {
                        vars: [],
                        body: [],
                        own: {}
                    },
                    assign: {
                        vars: [],
                        body: [],
                        own: {}
                    },
                    inputs: []
                }, dn(t, e.$filter);
                var n, r = "";
                if (this.stage = "assign", n = mn(t)) {
                    this.state.computing = "assign";
                    var i = this.nextId();
                    this.recurse(n, i), this.return_(i), r = "fn.assign=" + this.generateFunction("assign", "s,v,l");
                }
                var a = pn(t.body);
                e.stage = "inputs", o(a, function(t, n) {
                    var r = "fn" + n;
                    e.state[r] = {
                        vars: [],
                        body: [],
                        own: {}
                    }, e.state.computing = r;
                    var i = e.nextId();
                    e.recurse(t, i), e.return_(i), e.state.inputs.push({
                        name: r,
                        isPure: t.isPure
                    }), t.watchId = n;
                }), this.state.computing = "fn", this.stage = "main", this.recurse(t);
                var s = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + r + this.watchFns() + "return fn;", u = new Function("$filter", "getStringValue", "ifDefined", "plus", s)(this.$filter, un, ln, cn);
                return this.state = this.stage = void 0, u;
            },
            USE: "use",
            STRICT: "strict",
            watchFns: function() {
                var t = [], e = this.state.inputs, n = this;
                return o(e, function(e) {
                    t.push("var " + e.name + "=" + n.generateFunction(e.name, "s")), e.isPure && t.push(e.name, ".isPure=" + JSON.stringify(e.isPure) + ";");
                }), e.length && t.push("fn.inputs=[" + e.map(function(t) {
                    return t.name;
                }).join(",") + "];"), t.join("");
            },
            generateFunction: function(t, e) {
                return "function(" + e + "){" + this.varsPrefix(t) + this.body(t) + "};";
            },
            filterPrefix: function() {
                var t = [], e = this;
                return o(this.state.filters, function(n, r) {
                    t.push(n + "=$filter(" + e.escape(r) + ")");
                }), t.length ? "var " + t.join(",") + ";" : "";
            },
            varsPrefix: function(t) {
                return this.state[t].vars.length ? "var " + this.state[t].vars.join(",") + ";" : "";
            },
            body: function(t) {
                return this.state[t].body.join("");
            },
            recurse: function(t, e, n, r, i, a) {
                var s, u, l, c, f, h = this;
                if (r = r || g, !a && b(t.watchId)) return e = e || this.nextId(), void this.if_("i", this.lazyAssign(e, this.computedMember("i", t.watchId)), this.lazyRecurse(t, e, n, r, i, !0));
                switch (t.type) {
                  case Vo.Program:
                    o(t.body, function(e, n) {
                        h.recurse(e.expression, void 0, void 0, function(t) {
                            u = t;
                        }), n !== t.body.length - 1 ? h.current().body.push(u, ";") : h.return_(u);
                    });
                    break;

                  case Vo.Literal:
                    c = this.escape(t.value), this.assign(e, c), r(e || c);
                    break;

                  case Vo.UnaryExpression:
                    this.recurse(t.argument, void 0, void 0, function(t) {
                        u = t;
                    }), c = t.operator + "(" + this.ifDefined(u, 0) + ")", this.assign(e, c), r(c);
                    break;

                  case Vo.BinaryExpression:
                    this.recurse(t.left, void 0, void 0, function(t) {
                        s = t;
                    }), this.recurse(t.right, void 0, void 0, function(t) {
                        u = t;
                    }), c = "+" === t.operator ? this.plus(s, u) : "-" === t.operator ? this.ifDefined(s, 0) + t.operator + this.ifDefined(u, 0) : "(" + s + ")" + t.operator + "(" + u + ")", 
                    this.assign(e, c), r(c);
                    break;

                  case Vo.LogicalExpression:
                    e = e || this.nextId(), h.recurse(t.left, e), h.if_("&&" === t.operator ? e : h.not(e), h.lazyRecurse(t.right, e)), 
                    r(e);
                    break;

                  case Vo.ConditionalExpression:
                    e = e || this.nextId(), h.recurse(t.test, e), h.if_(e, h.lazyRecurse(t.alternate, e), h.lazyRecurse(t.consequent, e)), 
                    r(e);
                    break;

                  case Vo.Identifier:
                    e = e || this.nextId(), n && (n.context = "inputs" === h.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", t.name) + "?l:s"), 
                    n.computed = !1, n.name = t.name), h.if_("inputs" === h.stage || h.not(h.getHasOwnProperty("l", t.name)), function() {
                        h.if_("inputs" === h.stage || "s", function() {
                            i && 1 !== i && h.if_(h.isNull(h.nonComputedMember("s", t.name)), h.lazyAssign(h.nonComputedMember("s", t.name), "{}")), 
                            h.assign(e, h.nonComputedMember("s", t.name));
                        });
                    }, e && h.lazyAssign(e, h.nonComputedMember("l", t.name))), r(e);
                    break;

                  case Vo.MemberExpression:
                    s = n && (n.context = this.nextId()) || this.nextId(), e = e || this.nextId(), h.recurse(t.object, s, void 0, function() {
                        h.if_(h.notNull(s), function() {
                            t.computed ? (u = h.nextId(), h.recurse(t.property, u), h.getStringValue(u), i && 1 !== i && h.if_(h.not(h.computedMember(s, u)), h.lazyAssign(h.computedMember(s, u), "{}")), 
                            c = h.computedMember(s, u), h.assign(e, c), n && (n.computed = !0, n.name = u)) : (i && 1 !== i && h.if_(h.isNull(h.nonComputedMember(s, t.property.name)), h.lazyAssign(h.nonComputedMember(s, t.property.name), "{}")), 
                            c = h.nonComputedMember(s, t.property.name), h.assign(e, c), n && (n.computed = !1, 
                            n.name = t.property.name));
                        }, function() {
                            h.assign(e, "undefined");
                        }), r(e);
                    }, !!i);
                    break;

                  case Vo.CallExpression:
                    e = e || this.nextId(), t.filter ? (u = h.filter(t.callee.name), l = [], o(t.arguments, function(t) {
                        var e = h.nextId();
                        h.recurse(t, e), l.push(e);
                    }), c = u + "(" + l.join(",") + ")", h.assign(e, c), r(e)) : (u = h.nextId(), s = {}, 
                    l = [], h.recurse(t.callee, u, s, function() {
                        h.if_(h.notNull(u), function() {
                            o(t.arguments, function(e) {
                                h.recurse(e, t.constant ? void 0 : h.nextId(), void 0, function(t) {
                                    l.push(t);
                                });
                            }), c = s.name ? h.member(s.context, s.name, s.computed) + "(" + l.join(",") + ")" : u + "(" + l.join(",") + ")", 
                            h.assign(e, c);
                        }, function() {
                            h.assign(e, "undefined");
                        }), r(e);
                    }));
                    break;

                  case Vo.AssignmentExpression:
                    u = this.nextId(), s = {}, this.recurse(t.left, void 0, s, function() {
                        h.if_(h.notNull(s.context), function() {
                            h.recurse(t.right, u), c = h.member(s.context, s.name, s.computed) + t.operator + u, 
                            h.assign(e, c), r(e || c);
                        });
                    }, 1);
                    break;

                  case Vo.ArrayExpression:
                    l = [], o(t.elements, function(e) {
                        h.recurse(e, t.constant ? void 0 : h.nextId(), void 0, function(t) {
                            l.push(t);
                        });
                    }), c = "[" + l.join(",") + "]", this.assign(e, c), r(e || c);
                    break;

                  case Vo.ObjectExpression:
                    l = [], f = !1, o(t.properties, function(t) {
                        t.computed && (f = !0);
                    }), f ? (e = e || this.nextId(), this.assign(e, "{}"), o(t.properties, function(t) {
                        t.computed ? (s = h.nextId(), h.recurse(t.key, s)) : s = t.key.type === Vo.Identifier ? t.key.name : "" + t.key.value, 
                        u = h.nextId(), h.recurse(t.value, u), h.assign(h.member(e, s, t.computed), u);
                    })) : (o(t.properties, function(e) {
                        h.recurse(e.value, t.constant ? void 0 : h.nextId(), void 0, function(t) {
                            l.push(h.escape(e.key.type === Vo.Identifier ? e.key.name : "" + e.key.value) + ":" + t);
                        });
                    }), c = "{" + l.join(",") + "}", this.assign(e, c)), r(e || c);
                    break;

                  case Vo.ThisExpression:
                    this.assign(e, "s"), r(e || "s");
                    break;

                  case Vo.LocalsExpression:
                    this.assign(e, "l"), r(e || "l");
                    break;

                  case Vo.NGValueParameter:
                    this.assign(e, "v"), r(e || "v");
                }
            },
            getHasOwnProperty: function(t, e) {
                var n = t + "." + e, r = this.current().own;
                return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, t + "&&(" + this.escape(e) + " in " + t + ")")), 
                r[n];
            },
            assign: function(t, e) {
                if (t) return this.current().body.push(t, "=", e, ";"), t;
            },
            filter: function(t) {
                return this.state.filters.hasOwnProperty(t) || (this.state.filters[t] = this.nextId(!0)), 
                this.state.filters[t];
            },
            ifDefined: function(t, e) {
                return "ifDefined(" + t + "," + this.escape(e) + ")";
            },
            plus: function(t, e) {
                return "plus(" + t + "," + e + ")";
            },
            return_: function(t) {
                this.current().body.push("return ", t, ";");
            },
            if_: function(t, e, n) {
                if (!0 === t) e(); else {
                    var r = this.current().body;
                    r.push("if(", t, "){"), e(), r.push("}"), n && (r.push("else{"), n(), r.push("}"));
                }
            },
            not: function(t) {
                return "!(" + t + ")";
            },
            isNull: function(t) {
                return t + "==null";
            },
            notNull: function(t) {
                return t + "!=null";
            },
            nonComputedMember: function(t, e) {
                var n = /^[$_a-zA-Z][$_a-zA-Z0-9]*$/, r = /[^$_a-zA-Z0-9]/g;
                return n.test(e) ? t + "." + e : t + '["' + e.replace(r, this.stringEscapeFn) + '"]';
            },
            computedMember: function(t, e) {
                return t + "[" + e + "]";
            },
            member: function(t, e, n) {
                return n ? this.computedMember(t, e) : this.nonComputedMember(t, e);
            },
            getStringValue: function(t) {
                this.assign(t, "getStringValue(" + t + ")");
            },
            lazyRecurse: function(t, e, n, r, i, o) {
                var a = this;
                return function() {
                    a.recurse(t, e, n, r, i, o);
                };
            },
            lazyAssign: function(t, e) {
                var n = this;
                return function() {
                    n.assign(t, e);
                };
            },
            stringEscapeRegex: /[^ a-zA-Z0-9]/g,
            stringEscapeFn: function(t) {
                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
            },
            escape: function(t) {
                if (x(t)) return "'" + t.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
                if (C(t)) return t.toString();
                if (!0 === t) return "true";
                if (!1 === t) return "false";
                if (null === t) return "null";
                if (void 0 === t) return "undefined";
                throw No("esc", "IMPOSSIBLE");
            },
            nextId: function(t, e) {
                var n = "v" + this.state.nextId++;
                return t || this.current().vars.push(n + (e ? "=" + e : "")), n;
            },
            current: function() {
                return this.state[this.state.computing];
            }
        }, bn.prototype = {
            compile: function(t) {
                var e = this;
                dn(t, e.$filter);
                var n, r;
                (n = mn(t)) && (r = this.recurse(n));
                var i, a = pn(t.body);
                a && (i = [], o(a, function(t, n) {
                    var r = e.recurse(t);
                    r.isPure = t.isPure, t.input = r, i.push(r), t.watchId = n;
                }));
                var s = [];
                o(t.body, function(t) {
                    s.push(e.recurse(t.expression));
                });
                var u = 0 === t.body.length ? g : 1 === t.body.length ? s[0] : function(t, e) {
                    var n;
                    return o(s, function(r) {
                        n = r(t, e);
                    }), n;
                };
                return r && (u.assign = function(t, e, n) {
                    return r(t, n, e);
                }), i && (u.inputs = i), u;
            },
            recurse: function(t, e, n) {
                var r, i, a, s = this;
                if (t.input) return this.inputs(t.input, t.watchId);
                switch (t.type) {
                  case Vo.Literal:
                    return this.value(t.value, e);

                  case Vo.UnaryExpression:
                    return i = this.recurse(t.argument), this["unary" + t.operator](i, e);

                  case Vo.BinaryExpression:
                  case Vo.LogicalExpression:
                    return r = this.recurse(t.left), i = this.recurse(t.right), this["binary" + t.operator](r, i, e);

                  case Vo.ConditionalExpression:
                    return this["ternary?:"](this.recurse(t.test), this.recurse(t.alternate), this.recurse(t.consequent), e);

                  case Vo.Identifier:
                    return s.identifier(t.name, e, n);

                  case Vo.MemberExpression:
                    return r = this.recurse(t.object, !1, !!n), t.computed || (i = t.property.name), 
                    t.computed && (i = this.recurse(t.property)), t.computed ? this.computedMember(r, i, e, n) : this.nonComputedMember(r, i, e, n);

                  case Vo.CallExpression:
                    return a = [], o(t.arguments, function(t) {
                        a.push(s.recurse(t));
                    }), t.filter && (i = this.$filter(t.callee.name)), t.filter || (i = this.recurse(t.callee, !0)), 
                    t.filter ? function(t, n, r, o) {
                        for (var s = [], u = 0; u < a.length; ++u) s.push(a[u](t, n, r, o));
                        var l = i.apply(void 0, s, o);
                        return e ? {
                            context: void 0,
                            name: void 0,
                            value: l
                        } : l;
                    } : function(t, n, r, o) {
                        var s, u = i(t, n, r, o);
                        if (null != u.value) {
                            for (var l = [], c = 0; c < a.length; ++c) l.push(a[c](t, n, r, o));
                            s = u.value.apply(u.context, l);
                        }
                        return e ? {
                            value: s
                        } : s;
                    };

                  case Vo.AssignmentExpression:
                    return r = this.recurse(t.left, !0, 1), i = this.recurse(t.right), function(t, n, o, a) {
                        var s = r(t, n, o, a), u = i(t, n, o, a);
                        return s.context[s.name] = u, e ? {
                            value: u
                        } : u;
                    };

                  case Vo.ArrayExpression:
                    return a = [], o(t.elements, function(t) {
                        a.push(s.recurse(t));
                    }), function(t, n, r, i) {
                        for (var o = [], s = 0; s < a.length; ++s) o.push(a[s](t, n, r, i));
                        return e ? {
                            value: o
                        } : o;
                    };

                  case Vo.ObjectExpression:
                    return a = [], o(t.properties, function(t) {
                        t.computed ? a.push({
                            key: s.recurse(t.key),
                            computed: !0,
                            value: s.recurse(t.value)
                        }) : a.push({
                            key: t.key.type === Vo.Identifier ? t.key.name : "" + t.key.value,
                            computed: !1,
                            value: s.recurse(t.value)
                        });
                    }), function(t, n, r, i) {
                        for (var o = {}, s = 0; s < a.length; ++s) a[s].computed ? o[a[s].key(t, n, r, i)] = a[s].value(t, n, r, i) : o[a[s].key] = a[s].value(t, n, r, i);
                        return e ? {
                            value: o
                        } : o;
                    };

                  case Vo.ThisExpression:
                    return function(t) {
                        return e ? {
                            value: t
                        } : t;
                    };

                  case Vo.LocalsExpression:
                    return function(t, n) {
                        return e ? {
                            value: n
                        } : n;
                    };

                  case Vo.NGValueParameter:
                    return function(t, n, r) {
                        return e ? {
                            value: r
                        } : r;
                    };
                }
            },
            "unary+": function(t, e) {
                return function(n, r, i, o) {
                    var a = t(n, r, i, o);
                    return a = b(a) ? +a : 0, e ? {
                        value: a
                    } : a;
                };
            },
            "unary-": function(t, e) {
                return function(n, r, i, o) {
                    var a = t(n, r, i, o);
                    return a = b(a) ? -a : -0, e ? {
                        value: a
                    } : a;
                };
            },
            "unary!": function(t, e) {
                return function(n, r, i, o) {
                    var a = !t(n, r, i, o);
                    return e ? {
                        value: a
                    } : a;
                };
            },
            "binary+": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a), u = e(r, i, o, a), l = cn(s, u);
                    return n ? {
                        value: l
                    } : l;
                };
            },
            "binary-": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a), u = e(r, i, o, a), l = (b(s) ? s : 0) - (b(u) ? u : 0);
                    return n ? {
                        value: l
                    } : l;
                };
            },
            "binary*": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) * e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s;
                };
            },
            "binary/": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) / e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s;
                };
            },
            "binary%": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) % e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s;
                };
            },
            "binary===": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) === e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s;
                };
            },
            "binary!==": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) !== e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s;
                };
            },
            "binary==": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) == e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s;
                };
            },
            "binary!=": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) != e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s;
                };
            },
            "binary<": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) < e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s;
                };
            },
            "binary>": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) > e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s;
                };
            },
            "binary<=": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) <= e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s;
                };
            },
            "binary>=": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) >= e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s;
                };
            },
            "binary&&": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) && e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s;
                };
            },
            "binary||": function(t, e, n) {
                return function(r, i, o, a) {
                    var s = t(r, i, o, a) || e(r, i, o, a);
                    return n ? {
                        value: s
                    } : s;
                };
            },
            "ternary?:": function(t, e, n, r) {
                return function(i, o, a, s) {
                    var u = t(i, o, a, s) ? e(i, o, a, s) : n(i, o, a, s);
                    return r ? {
                        value: u
                    } : u;
                };
            },
            value: function(t, e) {
                return function() {
                    return e ? {
                        context: void 0,
                        name: void 0,
                        value: t
                    } : t;
                };
            },
            identifier: function(t, e, n) {
                return function(r, i, o, a) {
                    var s = i && t in i ? i : r;
                    n && 1 !== n && s && null == s[t] && (s[t] = {});
                    var u = s ? s[t] : void 0;
                    return e ? {
                        context: s,
                        name: t,
                        value: u
                    } : u;
                };
            },
            computedMember: function(t, e, n, r) {
                return function(i, o, a, s) {
                    var u, l, c = t(i, o, a, s);
                    return null != c && (u = e(i, o, a, s), u = un(u), r && 1 !== r && c && !c[u] && (c[u] = {}), 
                    l = c[u]), n ? {
                        context: c,
                        name: u,
                        value: l
                    } : l;
                };
            },
            nonComputedMember: function(t, e, n, r) {
                return function(i, o, a, s) {
                    var u = t(i, o, a, s);
                    r && 1 !== r && u && null == u[e] && (u[e] = {});
                    var l = null != u ? u[e] : void 0;
                    return n ? {
                        context: u,
                        name: e,
                        value: l
                    } : l;
                };
            },
            inputs: function(t, e) {
                return function(n, r, i, o) {
                    return o ? o[e] : t(n, r, i);
                };
            }
        }, wn.prototype = {
            constructor: wn,
            parse: function(t) {
                var e = this.ast.ast(t), n = this.astCompiler.compile(e);
                return n.literal = vn(e), n.constant = $n(e), n;
            }
        };
        var Fo = r("$sce"), Wo = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        }, Uo = /_([a-z])/g, qo = r("$compile"), Bo = t.document.createElement("a"), zo = Wn(t.location.href);
        Bn.$inject = [ "$document" ], Gn.$inject = [ "$provide" ];
        var Go = 22, Ko = ".", Qo = "0";
        Jn.$inject = [ "$locale" ], Zn.$inject = [ "$locale" ];
        var Yo = {
            yyyy: ir("FullYear", 4, 0, !1, !0),
            yy: ir("FullYear", 2, 0, !0, !0),
            y: ir("FullYear", 1, 0, !1, !0),
            MMMM: or("Month"),
            MMM: or("Month", !0),
            MM: ir("Month", 2, 1),
            M: ir("Month", 1, 1),
            LLLL: or("Month", !1, !0),
            dd: ir("Date", 2),
            d: ir("Date", 1),
            HH: ir("Hours", 2),
            H: ir("Hours", 1),
            hh: ir("Hours", 2, -12),
            h: ir("Hours", 1, -12),
            mm: ir("Minutes", 2),
            m: ir("Minutes", 1),
            ss: ir("Seconds", 2),
            s: ir("Seconds", 1),
            sss: ir("Milliseconds", 3),
            EEEE: or("Day"),
            EEE: or("Day", !0),
            a: cr,
            Z: ar,
            ww: lr(2),
            w: lr(1),
            G: fr,
            GG: fr,
            GGG: fr,
            GGGG: hr
        }, Xo = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/, Jo = /^-?\d+$/;
        dr.$inject = [ "$locale" ];
        var Zo = v(Zr), ta = v(ti);
        vr.$inject = [ "$parse" ];
        var ea = v({
            restrict: "E",
            compile: function(t, e) {
                if (!e.href && !e.xlinkHref) return function(t, e) {
                    if ("a" === e[0].nodeName.toLowerCase()) {
                        var n = "[object SVGAnimatedString]" === ci.call(e.prop("href")) ? "xlink:href" : "href";
                        e.on("click", function(t) {
                            e.attr(n) || t.preventDefault();
                        });
                    }
                };
            }
        }), na = {};
        o(zi, function(t, e) {
            function n(t, n, i) {
                t.$watch(i[r], function(t) {
                    i.$set(e, !!t);
                });
            }
            if ("multiple" !== t) {
                var r = Ee("ng-" + e), i = n;
                "checked" === t && (i = function(t, e, i) {
                    i.ngModel !== i[r] && n(t, e, i);
                }), na[r] = function() {
                    return {
                        restrict: "A",
                        priority: 100,
                        link: i
                    };
                };
            }
        }), o(Ki, function(t, e) {
            na[e] = function() {
                return {
                    priority: 100,
                    link: function(t, n, r) {
                        if ("ngPattern" === e && "/" === r.ngPattern.charAt(0)) {
                            var i = r.ngPattern.match(Yr);
                            if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]));
                        }
                        t.$watch(r[e], function(t) {
                            r.$set(e, t);
                        });
                    }
                };
            };
        }), o([ "src", "srcset", "href" ], function(t) {
            var e = Ee("ng-" + t);
            na[e] = function() {
                return {
                    priority: 99,
                    link: function(n, r, i) {
                        var o = t, a = t;
                        "href" === t && "[object SVGAnimatedString]" === ci.call(r.prop("href")) && (a = "xlinkHref", 
                        i.$attr[a] = "xlink:href", o = null), i.$observe(e, function(e) {
                            if (!e) return void ("href" === t && i.$set(a, null));
                            i.$set(a, e), ri && o && r.prop(o, i[a]);
                        });
                    }
                };
            };
        });
        var ra = {
            $addControl: g,
            $$renameControl: yr,
            $removeControl: g,
            $setValidity: g,
            $setDirty: g,
            $setPristine: g,
            $setSubmitted: g
        }, ia = "ng-pending";
        br.$inject = [ "$element", "$attrs", "$scope", "$animate", "$interpolate" ], br.prototype = {
            $rollbackViewValue: function() {
                o(this.$$controls, function(t) {
                    t.$rollbackViewValue();
                });
            },
            $commitViewValue: function() {
                o(this.$$controls, function(t) {
                    t.$commitViewValue();
                });
            },
            $addControl: function(t) {
                gt(t.$name, "input"), this.$$controls.push(t), t.$name && (this[t.$name] = t), t.$$parentForm = this;
            },
            $$renameControl: function(t, e) {
                var n = t.$name;
                this[n] === t && delete this[n], this[e] = t, t.$name = e;
            },
            $removeControl: function(t) {
                t.$name && this[t.$name] === t && delete this[t.$name], o(this.$pending, function(e, n) {
                    this.$setValidity(n, null, t);
                }, this), o(this.$error, function(e, n) {
                    this.$setValidity(n, null, t);
                }, this), o(this.$$success, function(e, n) {
                    this.$setValidity(n, null, t);
                }, this), W(this.$$controls, t), t.$$parentForm = ra;
            },
            $setDirty: function() {
                this.$$animate.removeClass(this.$$element, Fa), this.$$animate.addClass(this.$$element, Wa), 
                this.$dirty = !0, this.$pristine = !1, this.$$parentForm.$setDirty();
            },
            $setPristine: function() {
                this.$$animate.setClass(this.$$element, Fa, Wa + " ng-submitted"), this.$dirty = !1, 
                this.$pristine = !0, this.$submitted = !1, o(this.$$controls, function(t) {
                    t.$setPristine();
                });
            },
            $setUntouched: function() {
                o(this.$$controls, function(t) {
                    t.$setUntouched();
                });
            },
            $setSubmitted: function() {
                this.$$animate.addClass(this.$$element, "ng-submitted"), this.$submitted = !0, this.$$parentForm.$setSubmitted();
            }
        }, Er({
            clazz: br,
            set: function(t, e, n) {
                var r = t[e];
                if (r) {
                    -1 === r.indexOf(n) && r.push(n);
                } else t[e] = [ n ];
            },
            unset: function(t, e, n) {
                var r = t[e];
                r && (W(r, n), 0 === r.length && delete t[e]);
            }
        });
        var oa = function(t) {
            return [ "$timeout", "$parse", function(e, n) {
                function r(t) {
                    return "" === t ? n('this[""]').assign : n(t).assign || g;
                }
                return {
                    name: "form",
                    restrict: t ? "EAC" : "E",
                    require: [ "form", "^^?form" ],
                    controller: br,
                    compile: function(n, i) {
                        n.addClass(Fa).addClass(Ra);
                        var o = i.name ? "name" : !(!t || !i.ngForm) && "ngForm";
                        return {
                            pre: function(t, n, i, a) {
                                var s = a[0];
                                if (!("action" in i)) {
                                    var u = function(e) {
                                        t.$apply(function() {
                                            s.$commitViewValue(), s.$setSubmitted();
                                        }), e.preventDefault();
                                    };
                                    n[0].addEventListener("submit", u), n.on("$destroy", function() {
                                        e(function() {
                                            n[0].removeEventListener("submit", u);
                                        }, 0, !1);
                                    });
                                }
                                (a[1] || s.$$parentForm).$addControl(s);
                                var l = o ? r(s.$name) : g;
                                o && (l(t, s), i.$observe(o, function(e) {
                                    s.$name !== e && (l(t, void 0), s.$$parentForm.$$renameControl(s, e), (l = r(s.$name))(t, s));
                                })), n.on("$destroy", function() {
                                    s.$$parentForm.$removeControl(s), l(t, void 0), f(s, ra);
                                });
                            }
                        };
                    }
                };
            } ];
        }, aa = oa(), sa = oa(!0), ua = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/, la = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i, ca = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/, fa = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, ha = /^(\d{4,})-(\d{2})-(\d{2})$/, da = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, pa = /^(\d{4,})-W(\d\d)$/, ga = /^(\d{4,})-(\d\d)$/, ma = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, va = "keydown wheel mousedown", $a = $t();
        o("date,datetime-local,month,time,week".split(","), function(t) {
            $a[t] = !0;
        });
        var ya = {
            text: _r,
            date: Or("date", ha, Ar(ha, [ "yyyy", "MM", "dd" ]), "yyyy-MM-dd"),
            "datetime-local": Or("datetimelocal", da, Ar(da, [ "yyyy", "MM", "dd", "HH", "mm", "ss", "sss" ]), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: Or("time", ma, Ar(ma, [ "HH", "mm", "ss", "sss" ]), "HH:mm:ss.sss"),
            week: Or("week", pa, Sr, "yyyy-Www"),
            month: Or("month", ga, Ar(ga, [ "yyyy", "MM" ]), "yyyy-MM"),
            number: Lr,
            url: Vr,
            email: Rr,
            radio: Hr,
            range: Pr,
            checkbox: Wr,
            hidden: g,
            button: g,
            submit: g,
            reset: g,
            file: g
        }, ba = [ "$browser", "$sniffer", "$filter", "$parse", function(t, e, n, r) {
            return {
                restrict: "E",
                require: [ "?ngModel" ],
                link: {
                    pre: function(i, o, a, s) {
                        s[0] && (ya[Zr(a.type)] || ya.text)(i, o, a, s[0], e, t, n, r);
                    }
                }
            };
        } ], wa = /^(true|false|\d+)$/, Ea = function() {
            function t(t, e, n) {
                var r = b(n) ? n : 9 === ri ? "" : null;
                t.prop("value", r), e.$set("value", n);
            }
            return {
                restrict: "A",
                priority: 100,
                compile: function(e, n) {
                    return wa.test(n.ngValue) ? function(e, n, r) {
                        t(n, r, e.$eval(r.ngValue));
                    } : function(e, n, r) {
                        e.$watch(r.ngValue, function(e) {
                            t(n, r, e);
                        });
                    };
                }
            };
        }, xa = [ "$compile", function(t) {
            return {
                restrict: "AC",
                compile: function(e) {
                    return t.$$addBindingClass(e), function(e, n, r) {
                        t.$$addBindingInfo(n, r.ngBind), n = n[0], e.$watch(r.ngBind, function(t) {
                            n.textContent = yt(t);
                        });
                    };
                }
            };
        } ], Ca = [ "$interpolate", "$compile", function(t, e) {
            return {
                compile: function(n) {
                    return e.$$addBindingClass(n), function(n, r, i) {
                        var o = t(r.attr(i.$attr.ngBindTemplate));
                        e.$$addBindingInfo(r, o.expressions), r = r[0], i.$observe("ngBindTemplate", function(t) {
                            r.textContent = y(t) ? "" : t;
                        });
                    };
                }
            };
        } ], _a = [ "$sce", "$parse", "$compile", function(t, e, n) {
            return {
                restrict: "A",
                compile: function(r, i) {
                    var o = e(i.ngBindHtml), a = e(i.ngBindHtml, function(e) {
                        return t.valueOf(e);
                    });
                    return n.$$addBindingClass(r), function(e, r, i) {
                        n.$$addBindingInfo(r, i.ngBindHtml), e.$watch(a, function() {
                            var n = o(e);
                            r.html(t.getTrustedHtml(n) || "");
                        });
                    };
                }
            };
        } ], Ta = v({
            restrict: "A",
            require: "ngModel",
            link: function(t, e, n, r) {
                r.$viewChangeListeners.push(function() {
                    t.$eval(n.ngChange);
                });
            }
        }), Sa = Ur("", !0), Aa = Ur("Odd", 0), Oa = Ur("Even", 1), ka = $r({
            compile: function(t, e) {
                e.$set("ngCloak", void 0), t.removeClass("ng-cloak");
            }
        }), Da = [ function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            };
        } ], Ia = {}, Na = {
            blur: !0,
            focus: !0
        };
        o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(t) {
            var e = Ee("ng-" + t);
            Ia[e] = [ "$parse", "$rootScope", function(n, r) {
                return {
                    restrict: "A",
                    compile: function(i, o) {
                        var a = n(o[e]);
                        return function(e, n) {
                            n.on(t, function(n) {
                                var i = function() {
                                    a(e, {
                                        $event: n
                                    });
                                };
                                Na[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i);
                            });
                        };
                    }
                };
            } ];
        });
        var Ma = [ "$animate", "$compile", function(t, e) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(n, r, i, o, a) {
                    var s, u, l;
                    n.$watch(i.ngIf, function(n) {
                        n ? u || a(function(n, o) {
                            u = o, n[n.length++] = e.$$createComment("end ngIf", i.ngIf), s = {
                                clone: n
                            }, t.enter(n, r.parent(), r);
                        }) : (l && (l.remove(), l = null), u && (u.$destroy(), u = null), s && (l = vt(s.clone), 
                        t.leave(l).done(function(t) {
                            !1 !== t && (l = null);
                        }), s = null));
                    });
                }
            };
        } ], ja = [ "$templateRequest", "$anchorScroll", "$animate", function(t, e, n) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: di.noop,
                compile: function(r, i) {
                    var o = i.ngInclude || i.src, a = i.onload || "", s = i.autoscroll;
                    return function(r, i, u, l, c) {
                        var f, h, d, p = 0, g = function() {
                            h && (h.remove(), h = null), f && (f.$destroy(), f = null), d && (n.leave(d).done(function(t) {
                                !1 !== t && (h = null);
                            }), h = d, d = null);
                        };
                        r.$watch(o, function(o) {
                            var u = function(t) {
                                !1 === t || !b(s) || s && !r.$eval(s) || e();
                            }, h = ++p;
                            o ? (t(o, !0).then(function(t) {
                                if (!r.$$destroyed && h === p) {
                                    var e = r.$new();
                                    l.template = t;
                                    var s = c(e, function(t) {
                                        g(), n.enter(t, null, i).done(u);
                                    });
                                    f = e, d = s, f.$emit("$includeContentLoaded", o), r.$eval(a);
                                }
                            }, function() {
                                r.$$destroyed || h === p && (g(), r.$emit("$includeContentError", o));
                            }), r.$emit("$includeContentRequested", o)) : (g(), l.template = null);
                        });
                    };
                }
            };
        } ], La = [ "$compile", function(e) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(n, r, i, o) {
                    if (ci.call(r[0]).match(/SVG/)) return r.empty(), void e(Dt(o.template, t.document).childNodes)(n, function(t) {
                        r.append(t);
                    }, {
                        futureParentElement: r
                    });
                    r.html(o.template), e(r.contents())(n);
                }
            };
        } ], Pa = $r({
            priority: 450,
            compile: function() {
                return {
                    pre: function(t, e, n) {
                        t.$eval(n.ngInit);
                    }
                };
            }
        }), Va = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(t, e, n, r) {
                    var i = n.ngList || ", ", a = "false" !== n.ngTrim, s = a ? $i(i) : i, u = function(t) {
                        if (!y(t)) {
                            var e = [];
                            return t && o(t.split(s), function(t) {
                                t && e.push(a ? $i(t) : t);
                            }), e;
                        }
                    };
                    r.$parsers.push(u), r.$formatters.push(function(t) {
                        if (mi(t)) return t.join(i);
                    }), r.$isEmpty = function(t) {
                        return !t || !t.length;
                    };
                }
            };
        }, Ra = "ng-valid", Ha = "ng-invalid", Fa = "ng-pristine", Wa = "ng-dirty", Ua = r("ngModel");
        qr.$inject = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$q", "$interpolate" ], 
        qr.prototype = {
            $$initGetterSetters: function() {
                if (this.$options.getOption("getterSetter")) {
                    var t = this.$$parse(this.$$attr.ngModel + "()"), e = this.$$parse(this.$$attr.ngModel + "($$$p)");
                    this.$$ngModelGet = function(e) {
                        var n = this.$$parsedNgModel(e);
                        return S(n) && (n = t(e)), n;
                    }, this.$$ngModelSet = function(t, n) {
                        S(this.$$parsedNgModel(t)) ? e(t, {
                            $$$p: n
                        }) : this.$$parsedNgModelAssign(t, n);
                    };
                } else if (!this.$$parsedNgModel.assign) throw Ua("nonassign", "Expression '{0}' is non-assignable. Element: {1}", this.$$attr.ngModel, et(this.$$element));
            },
            $render: g,
            $isEmpty: function(t) {
                return y(t) || "" === t || null === t || t !== t;
            },
            $$updateEmptyClasses: function(t) {
                this.$isEmpty(t) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), 
                this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), 
                this.$$animate.addClass(this.$$element, "ng-not-empty"));
            },
            $setPristine: function() {
                this.$dirty = !1, this.$pristine = !0, this.$$animate.removeClass(this.$$element, Wa), 
                this.$$animate.addClass(this.$$element, Fa);
            },
            $setDirty: function() {
                this.$dirty = !0, this.$pristine = !1, this.$$animate.removeClass(this.$$element, Fa), 
                this.$$animate.addClass(this.$$element, Wa), this.$$parentForm.$setDirty();
            },
            $setUntouched: function() {
                this.$touched = !1, this.$untouched = !0, this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched");
            },
            $setTouched: function() {
                this.$touched = !0, this.$untouched = !1, this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched");
            },
            $rollbackViewValue: function() {
                this.$$timeout.cancel(this.$$pendingDebounce), this.$viewValue = this.$$lastCommittedViewValue, 
                this.$render();
            },
            $validate: function() {
                if (!gi(this.$modelValue)) {
                    var t = this.$$lastCommittedViewValue, e = this.$$rawModelValue, n = this.$valid, r = this.$modelValue, i = this.$options.getOption("allowInvalid"), o = this;
                    this.$$runValidators(e, t, function(t) {
                        i || n === t || (o.$modelValue = t ? e : void 0, o.$modelValue !== r && o.$$writeModelToScope());
                    });
                }
            },
            $$runValidators: function(t, e, n) {
                function r(t, e) {
                    a === s.$$currentValidationRunId && s.$setValidity(t, e);
                }
                function i(t) {
                    a === s.$$currentValidationRunId && n(t);
                }
                this.$$currentValidationRunId++;
                var a = this.$$currentValidationRunId, s = this;
                return function() {
                    var t = s.$$parserName || "parse";
                    return y(s.$$parserValid) ? (r(t, null), !0) : (s.$$parserValid || (o(s.$validators, function(t, e) {
                        r(e, null);
                    }), o(s.$asyncValidators, function(t, e) {
                        r(e, null);
                    })), r(t, s.$$parserValid), s.$$parserValid);
                }() && function() {
                    var n = !0;
                    return o(s.$validators, function(i, o) {
                        var a = Boolean(i(t, e));
                        n = n && a, r(o, a);
                    }), !!n || (o(s.$asyncValidators, function(t, e) {
                        r(e, null);
                    }), !1);
                }() ? void function() {
                    var n = [], a = !0;
                    o(s.$asyncValidators, function(i, o) {
                        var s = i(t, e);
                        if (!j(s)) throw Ua("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
                        r(o, void 0), n.push(s.then(function() {
                            r(o, !0);
                        }, function() {
                            a = !1, r(o, !1);
                        }));
                    }), n.length ? s.$$q.all(n).then(function() {
                        i(a);
                    }, g) : i(!0);
                }() : void i(!1);
            },
            $commitViewValue: function() {
                var t = this.$viewValue;
                this.$$timeout.cancel(this.$$pendingDebounce), (this.$$lastCommittedViewValue !== t || "" === t && this.$$hasNativeValidators) && (this.$$updateEmptyClasses(t), 
                this.$$lastCommittedViewValue = t, this.$pristine && this.$setDirty(), this.$$parseAndValidate());
            },
            $$parseAndValidate: function() {
                function t() {
                    r.$modelValue !== o && r.$$writeModelToScope();
                }
                var e = this.$$lastCommittedViewValue, n = e, r = this;
                if (this.$$parserValid = !y(n) || void 0, this.$$parserValid) for (var i = 0; i < this.$parsers.length; i++) if (n = this.$parsers[i](n), 
                y(n)) {
                    this.$$parserValid = !1;
                    break;
                }
                gi(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
                var o = this.$modelValue, a = this.$options.getOption("allowInvalid");
                this.$$rawModelValue = n, a && (this.$modelValue = n, t()), this.$$runValidators(n, this.$$lastCommittedViewValue, function(e) {
                    a || (r.$modelValue = e ? n : void 0, t());
                });
            },
            $$writeModelToScope: function() {
                this.$$ngModelSet(this.$$scope, this.$modelValue), o(this.$viewChangeListeners, function(t) {
                    try {
                        t();
                    } catch (t) {
                        this.$$exceptionHandler(t);
                    }
                }, this);
            },
            $setViewValue: function(t, e) {
                this.$viewValue = t, this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(e);
            },
            $$debounceViewValueCommit: function(t) {
                var e = this.$options.getOption("debounce");
                C(e[t]) ? e = e[t] : C(e.default) && (e = e.default), this.$$timeout.cancel(this.$$pendingDebounce);
                var n = this;
                e > 0 ? this.$$pendingDebounce = this.$$timeout(function() {
                    n.$commitViewValue();
                }, e) : this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function() {
                    n.$commitViewValue();
                });
            },
            $overrideModelOptions: function(t) {
                this.$options = this.$options.createChild(t);
            }
        }, Er({
            clazz: qr,
            set: function(t, e) {
                t[e] = !0;
            },
            unset: function(t, e) {
                delete t[e];
            }
        });
        var qa, Ba = [ "$rootScope", function(t) {
            return {
                restrict: "A",
                require: [ "ngModel", "^?form", "^?ngModelOptions" ],
                controller: qr,
                priority: 1,
                compile: function(e) {
                    return e.addClass(Fa).addClass("ng-untouched").addClass(Ra), {
                        pre: function(t, e, n, r) {
                            var i = r[0], o = r[1] || i.$$parentForm, a = r[2];
                            a && (i.$options = a.$options), i.$$initGetterSetters(), o.$addControl(i), n.$observe("name", function(t) {
                                i.$name !== t && i.$$parentForm.$$renameControl(i, t);
                            }), t.$on("$destroy", function() {
                                i.$$parentForm.$removeControl(i);
                            });
                        },
                        post: function(e, n, r, i) {
                            function o() {
                                a.$setTouched();
                            }
                            var a = i[0];
                            a.$options.getOption("updateOn") && n.on(a.$options.getOption("updateOn"), function(t) {
                                a.$$debounceViewValueCommit(t && t.type);
                            }), n.on("blur", function() {
                                a.$touched || (t.$$phase ? e.$evalAsync(o) : e.$apply(o));
                            });
                        }
                    };
                }
            };
        } ], za = /(\s+|^)default(\s+|$)/;
        zr.prototype = {
            getOption: function(t) {
                return this.$$options[t];
            },
            createChild: function(t) {
                var e = !1;
                return t = f({}, t), o(t, function(n, r) {
                    "$inherit" === n ? "*" === r ? e = !0 : (t[r] = this.$$options[r], "updateOn" === r && (t.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === r && (t.updateOnDefault = !1, 
                    t[r] = $i(n.replace(za, function() {
                        return t.updateOnDefault = !0, " ";
                    })));
                }, this), e && (delete t["*"], Gr(t, this.$$options)), Gr(t, qa.$$options), new zr(t);
            }
        }, qa = new zr({
            updateOn: "",
            updateOnDefault: !0,
            debounce: 0,
            getterSetter: !1,
            allowInvalid: !1,
            timezone: null
        });
        var Ga = function() {
            function t(t, e) {
                this.$$attrs = t, this.$$scope = e;
            }
            return t.$inject = [ "$attrs", "$scope" ], t.prototype = {
                $onInit: function() {
                    var t = this.parentCtrl ? this.parentCtrl.$options : qa, e = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                    this.$options = t.createChild(e);
                }
            }, {
                restrict: "A",
                priority: 10,
                require: {
                    parentCtrl: "?^^ngModelOptions"
                },
                bindToController: !0,
                controller: t
            };
        }, Ka = $r({
            terminal: !0,
            priority: 1e3
        }), Qa = r("ngOptions"), Ya = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, Xa = [ "$compile", "$document", "$parse", function(e, n, r) {
            function a(t, e, n) {
                function o(t, e, n, r, i) {
                    this.selectValue = t, this.viewValue = e, this.label = n, this.group = r, this.disabled = i;
                }
                function a(t) {
                    var e;
                    if (!l && i(t)) e = t; else {
                        e = [];
                        for (var n in t) t.hasOwnProperty(n) && "$" !== n.charAt(0) && e.push(n);
                    }
                    return e;
                }
                var s = t.match(Ya);
                if (!s) throw Qa("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", t, et(e));
                var u = s[5] || s[7], l = s[6], c = / as /.test(s[0]) && s[1], f = s[9], h = r(s[2] ? s[1] : u), d = c && r(c), p = d || h, g = f && r(f), m = f ? function(t, e) {
                    return g(n, e);
                } : function(t) {
                    return re(t);
                }, v = function(t, e) {
                    return m(t, x(t, e));
                }, $ = r(s[2] || s[1]), y = r(s[3] || ""), b = r(s[4] || ""), w = r(s[8]), E = {}, x = l ? function(t, e) {
                    return E[l] = e, E[u] = t, E;
                } : function(t) {
                    return E[u] = t, E;
                };
                return {
                    trackBy: f,
                    getTrackByValue: v,
                    getWatchables: r(w, function(t) {
                        var e = [];
                        t = t || [];
                        for (var r = a(t), i = r.length, o = 0; o < i; o++) {
                            var u = t === r ? o : r[o], l = t[u], c = x(l, u), f = m(l, c);
                            if (e.push(f), s[2] || s[1]) {
                                var h = $(n, c);
                                e.push(h);
                            }
                            if (s[4]) {
                                var d = b(n, c);
                                e.push(d);
                            }
                        }
                        return e;
                    }),
                    getOptions: function() {
                        for (var t = [], e = {}, r = w(n) || [], i = a(r), s = i.length, u = 0; u < s; u++) {
                            var l = r === i ? u : i[u], c = r[l], h = x(c, l), d = p(n, h), g = m(d, h), E = $(n, h), C = y(n, h), _ = b(n, h), T = new o(g, d, E, C, _);
                            t.push(T), e[g] = T;
                        }
                        return {
                            items: t,
                            selectValueMap: e,
                            getOptionFromViewValue: function(t) {
                                return e[v(t)];
                            },
                            getViewValueFromOption: function(t) {
                                return f ? U(t.viewValue) : t.viewValue;
                            }
                        };
                    }
                };
            }
            function s(t, r, i, s) {
                function c(t, e) {
                    var n = u.cloneNode(!1);
                    e.appendChild(n), h(t, n);
                }
                function f(t) {
                    var e = E.getOptionFromViewValue(t), n = e && e.element;
                    return n && !n.selected && (n.selected = !0), e;
                }
                function h(t, e) {
                    t.element = e, e.disabled = t.disabled, t.label !== e.label && (e.label = t.label, 
                    e.textContent = t.label), e.value = t.selectValue;
                }
                function d() {
                    var t = E && p.readValue();
                    if (E) for (var e = E.items.length - 1; e >= 0; e--) {
                        var n = E.items[e];
                        Kt(b(n.group) ? n.element.parentNode : n.element);
                    }
                    E = x.getOptions();
                    var i = {};
                    if (E.items.forEach(function(t) {
                        var e;
                        b(t.group) ? (e = i[t.group], e || (e = l.cloneNode(!1), C.appendChild(e), e.label = null === t.group ? "null" : t.group, 
                        i[t.group] = e), c(t, e)) : c(t, C);
                    }), r[0].appendChild(C), g.$render(), !g.$isEmpty(t)) {
                        var o = p.readValue();
                        (x.trackBy || m ? B(t, o) : t === o) || (g.$setViewValue(o), g.$render());
                    }
                }
                for (var p = s[0], g = s[1], m = i.multiple, v = 0, $ = r.children(), y = $.length; v < y; v++) if ("" === $[v].value) {
                    p.hasEmptyOption = !0, p.emptyOption = $.eq(v);
                    break;
                }
                r.empty();
                var w = !!p.emptyOption;
                ii(u.cloneNode(!1)).val("?");
                var E, x = a(i.ngOptions, r, t), C = n[0].createDocumentFragment();
                p.generateUnknownOptionValue = function(t) {
                    return "?";
                }, m ? (p.writeValue = function(t) {
                    if (E) {
                        var e = t && t.map(f) || [];
                        E.items.forEach(function(t) {
                            t.element.selected && !F(e, t) && (t.element.selected = !1);
                        });
                    }
                }, p.readValue = function() {
                    var t = r.val() || [], e = [];
                    return o(t, function(t) {
                        var n = E.selectValueMap[t];
                        n && !n.disabled && e.push(E.getViewValueFromOption(n));
                    }), e;
                }, x.trackBy && t.$watchCollection(function() {
                    if (mi(g.$viewValue)) return g.$viewValue.map(function(t) {
                        return x.getTrackByValue(t);
                    });
                }, function() {
                    g.$render();
                })) : (p.writeValue = function(t) {
                    if (E) {
                        var e = r[0].options[r[0].selectedIndex], n = E.getOptionFromViewValue(t);
                        e && e.removeAttribute("selected"), n ? (r[0].value !== n.selectValue && (p.removeUnknownOption(), 
                        r[0].value = n.selectValue, n.element.selected = !0), n.element.setAttribute("selected", "selected")) : p.selectUnknownOrEmptyOption(t);
                    }
                }, p.readValue = function() {
                    var t = E.selectValueMap[r.val()];
                    return t && !t.disabled ? (p.unselectEmptyOption(), p.removeUnknownOption(), E.getViewValueFromOption(t)) : null;
                }, x.trackBy && t.$watch(function() {
                    return x.getTrackByValue(g.$viewValue);
                }, function() {
                    g.$render();
                })), w && (e(p.emptyOption)(t), r.prepend(p.emptyOption), p.emptyOption[0].nodeType === Oi ? (p.hasEmptyOption = !1, 
                p.registerOption = function(t, e) {
                    "" === e.val() && (p.hasEmptyOption = !0, p.emptyOption = e, p.emptyOption.removeClass("ng-scope"), 
                    g.$render(), e.on("$destroy", function() {
                        var t = p.$isEmptyOptionSelected();
                        p.hasEmptyOption = !1, p.emptyOption = void 0, t && g.$render();
                    }));
                }) : p.emptyOption.removeClass("ng-scope")), t.$watchCollection(x.getWatchables, d);
            }
            var u = t.document.createElement("option"), l = t.document.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: [ "select", "ngModel" ],
                link: {
                    pre: function(t, e, n, r) {
                        r[0].registerOption = g;
                    },
                    post: s
                }
            };
        } ], Ja = [ "$locale", "$interpolate", "$log", function(t, e, n) {
            var r = /{}/g, i = /^when(Minus)?(.+)$/;
            return {
                link: function(a, s, u) {
                    function l(t) {
                        s.text(t || "");
                    }
                    var c, f = u.count, h = u.$attr.when && s.attr(u.$attr.when), d = u.offset || 0, p = a.$eval(h) || {}, m = {}, v = e.startSymbol(), $ = e.endSymbol(), b = v + f + "-" + d + $, w = di.noop;
                    o(u, function(t, e) {
                        var n = i.exec(e);
                        if (n) {
                            var r = (n[1] ? "-" : "") + Zr(n[2]);
                            p[r] = s.attr(u.$attr[e]);
                        }
                    }), o(p, function(t, n) {
                        m[n] = e(t.replace(r, b));
                    }), a.$watch(f, function(e) {
                        var r = parseFloat(e), i = gi(r);
                        if (i || r in p || (r = t.pluralCat(r - d)), !(r === c || i && gi(c))) {
                            w();
                            var o = m[r];
                            y(o) ? (null != e && n.debug("ngPluralize: no rule defined for '" + r + "' in " + h), 
                            w = g, l()) : w = a.$watch(o, l), c = r;
                        }
                    });
                }
            };
        } ], Za = [ "$parse", "$animate", "$compile", function(t, e, n) {
            var a = r("ngRepeat"), s = function(t, e, n, r, i, o, a) {
                t[n] = r, i && (t[i] = o), t.$index = e, t.$first = 0 === e, t.$last = e === a - 1, 
                t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 == (1 & e));
            }, u = function(t) {
                return t.clone[0];
            }, l = function(t) {
                return t.clone[t.clone.length - 1];
            };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function(r, c) {
                    var f = c.ngRepeat, h = n.$$createComment("end ngRepeat", f), d = f.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!d) throw a("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", f);
                    var p = d[1], g = d[2], m = d[3], v = d[4];
                    if (!(d = p.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/))) throw a("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", p);
                    var $ = d[3] || d[1], y = d[2];
                    if (m && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(m) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(m))) throw a("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", m);
                    var b, w, E, x, C = {
                        $id: re
                    };
                    return v ? b = t(v) : (E = function(t, e) {
                        return re(e);
                    }, x = function(t) {
                        return t;
                    }), function(t, n, r, c, d) {
                        b && (w = function(e, n, r) {
                            return y && (C[y] = e), C[$] = n, C.$index = r, b(t, C);
                        });
                        var p = $t();
                        t.$watchCollection(g, function(r) {
                            var c, g, v, b, C, _, T, S, A, O, k, D, I = n[0], N = $t();
                            if (m && (t[m] = r), i(r)) A = r, S = w || E; else {
                                S = w || x, A = [];
                                for (var M in r) Jr.call(r, M) && "$" !== M.charAt(0) && A.push(M);
                            }
                            for (b = A.length, k = new Array(b), c = 0; c < b; c++) if (C = r === A ? c : A[c], 
                            _ = r[C], T = S(C, _, c), p[T]) O = p[T], delete p[T], N[T] = O, k[c] = O; else {
                                if (N[T]) throw o(k, function(t) {
                                    t && t.scope && (p[t.id] = t);
                                }), a("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", f, T, _);
                                k[c] = {
                                    id: T,
                                    scope: void 0,
                                    clone: void 0
                                }, N[T] = !0;
                            }
                            for (var j in p) {
                                if (O = p[j], D = vt(O.clone), e.leave(D), D[0].parentNode) for (c = 0, g = D.length; c < g; c++) D[c].$$NG_REMOVED = !0;
                                O.scope.$destroy();
                            }
                            for (c = 0; c < b; c++) if (C = r === A ? c : A[c], _ = r[C], O = k[c], O.scope) {
                                v = I;
                                do {
                                    v = v.nextSibling;
                                } while (v && v.$$NG_REMOVED);
                                u(O) !== v && e.move(vt(O.clone), null, I), I = l(O), s(O.scope, c, $, _, y, C, b);
                            } else d(function(t, n) {
                                O.scope = n;
                                var r = h.cloneNode(!1);
                                t[t.length++] = r, e.enter(t, null, I), I = r, O.clone = t, N[O.id] = O, s(O.scope, c, $, _, y, C, b);
                            });
                            p = N;
                        });
                    };
                }
            };
        } ], ts = [ "$animate", function(t) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(e, n, r) {
                    e.$watch(r.ngShow, function(e) {
                        t[e ? "removeClass" : "addClass"](n, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        });
                    });
                }
            };
        } ], es = [ "$animate", function(t) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(e, n, r) {
                    e.$watch(r.ngHide, function(e) {
                        t[e ? "addClass" : "removeClass"](n, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        });
                    });
                }
            };
        } ], ns = $r(function(t, e, n) {
            t.$watch(n.ngStyle, function(t, n) {
                n && t !== n && o(n, function(t, n) {
                    e.css(n, "");
                }), t && e.css(t);
            }, !0);
        }), rs = [ "$animate", "$compile", function(t, e) {
            return {
                require: "ngSwitch",
                controller: [ "$scope", function() {
                    this.cases = {};
                } ],
                link: function(n, r, i, a) {
                    var s = i.ngSwitch || i.on, u = [], l = [], c = [], f = [], h = function(t, e) {
                        return function(n) {
                            !1 !== n && t.splice(e, 1);
                        };
                    };
                    n.$watch(s, function(n) {
                        for (var r, i; c.length; ) t.cancel(c.pop());
                        for (r = 0, i = f.length; r < i; ++r) {
                            var s = vt(l[r].clone);
                            f[r].$destroy();
                            (c[r] = t.leave(s)).done(h(c, r));
                        }
                        l.length = 0, f.length = 0, (u = a.cases["!" + n] || a.cases["?"]) && o(u, function(n) {
                            n.transclude(function(r, i) {
                                f.push(i);
                                var o = n.element;
                                r[r.length++] = e.$$createComment("end ngSwitchWhen");
                                var a = {
                                    clone: r
                                };
                                l.push(a), t.enter(r, o.parent(), o);
                            });
                        });
                    });
                }
            };
        } ], is = $r({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(t, e, n, r, i) {
                o(n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function(t, e, n) {
                    return n[e - 1] !== t;
                }), function(t) {
                    r.cases["!" + t] = r.cases["!" + t] || [], r.cases["!" + t].push({
                        transclude: i,
                        element: e
                    });
                });
            }
        }), os = $r({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(t, e, n, r, i) {
                r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                    transclude: i,
                    element: e
                });
            }
        }), as = r("ngTransclude"), ss = [ "$compile", function(t) {
            return {
                restrict: "EAC",
                terminal: !0,
                compile: function(e) {
                    var n = t(e.contents());
                    return e.empty(), function(t, e, r, i, o) {
                        function a(t, n) {
                            t.length && u(t) ? e.append(t) : (s(), n.$destroy());
                        }
                        function s() {
                            n(t, function(t) {
                                e.append(t);
                            });
                        }
                        function u(t) {
                            for (var e = 0, n = t.length; e < n; e++) {
                                var r = t[e];
                                if (r.nodeType !== Ai || r.nodeValue.trim()) return !0;
                            }
                        }
                        if (!o) throw as("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", et(e));
                        r.ngTransclude === r.$attr.ngTransclude && (r.ngTransclude = "");
                        var l = r.ngTransclude || r.ngTranscludeSlot;
                        o(a, null, l), l && !o.isSlotFilled(l) && s();
                    };
                }
            };
        } ], us = [ "$templateCache", function(t) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(e, n) {
                    if ("text/ng-template" === n.type) {
                        var r = n.id, i = e[0].text;
                        t.put(r, i);
                    }
                }
            };
        } ], ls = {
            $setViewValue: g,
            $render: g
        }, cs = [ "$element", "$scope", function(e, n) {
            function r() {
                s || (s = !0, n.$$postDigest(function() {
                    s = !1, o.ngModelCtrl.$render();
                }));
            }
            function i(t) {
                u || (u = !0, n.$$postDigest(function() {
                    n.$$destroyed || (u = !1, o.ngModelCtrl.$setViewValue(o.readValue()), t && o.ngModelCtrl.$render());
                }));
            }
            var o = this, a = new Yi();
            o.selectValueMap = {}, o.ngModelCtrl = ls, o.multiple = !1, o.unknownOption = ii(t.document.createElement("option")), 
            o.hasEmptyOption = !1, o.emptyOption = void 0, o.renderUnknownOption = function(t) {
                var n = o.generateUnknownOptionValue(t);
                o.unknownOption.val(n), e.prepend(o.unknownOption), Kr(o.unknownOption, !0), e.val(n);
            }, o.updateUnknownOption = function(t) {
                var n = o.generateUnknownOptionValue(t);
                o.unknownOption.val(n), Kr(o.unknownOption, !0), e.val(n);
            }, o.generateUnknownOptionValue = function(t) {
                return "? " + re(t) + " ?";
            }, o.removeUnknownOption = function() {
                o.unknownOption.parent() && o.unknownOption.remove();
            }, o.selectEmptyOption = function() {
                o.emptyOption && (e.val(""), Kr(o.emptyOption, !0));
            }, o.unselectEmptyOption = function() {
                o.hasEmptyOption && Kr(o.emptyOption, !1);
            }, n.$on("$destroy", function() {
                o.renderUnknownOption = g;
            }), o.readValue = function() {
                var t = e.val(), n = t in o.selectValueMap ? o.selectValueMap[t] : t;
                return o.hasOption(n) ? n : null;
            }, o.writeValue = function(t) {
                var n = e[0].options[e[0].selectedIndex];
                if (n && Kr(ii(n), !1), o.hasOption(t)) {
                    o.removeUnknownOption();
                    var r = re(t);
                    e.val(r in o.selectValueMap ? r : t);
                    var i = e[0].options[e[0].selectedIndex];
                    Kr(ii(i), !0);
                } else o.selectUnknownOrEmptyOption(t);
            }, o.addOption = function(t, e) {
                if (e[0].nodeType !== Oi) {
                    gt(t, '"option value"'), "" === t && (o.hasEmptyOption = !0, o.emptyOption = e);
                    var n = a.get(t) || 0;
                    a.set(t, n + 1), r();
                }
            }, o.removeOption = function(t) {
                var e = a.get(t);
                e && (1 === e ? (a.delete(t), "" === t && (o.hasEmptyOption = !1, o.emptyOption = void 0)) : a.set(t, e - 1));
            }, o.hasOption = function(t) {
                return !!a.get(t);
            }, o.$hasEmptyOption = function() {
                return o.hasEmptyOption;
            }, o.$isUnknownOptionSelected = function() {
                return e[0].options[0] === o.unknownOption[0];
            }, o.$isEmptyOptionSelected = function() {
                return o.hasEmptyOption && e[0].options[e[0].selectedIndex] === o.emptyOption[0];
            }, o.selectUnknownOrEmptyOption = function(t) {
                null == t && o.emptyOption ? (o.removeUnknownOption(), o.selectEmptyOption()) : o.unknownOption.parent().length ? o.updateUnknownOption(t) : o.renderUnknownOption(t);
            };
            var s = !1, u = !1;
            o.registerOption = function(t, e, n, a, s) {
                if (n.$attr.ngValue) {
                    var u, l = NaN;
                    n.$observe("value", function(t) {
                        var n, r = e.prop("selected");
                        b(l) && (o.removeOption(u), delete o.selectValueMap[l], n = !0), l = re(t), u = t, 
                        o.selectValueMap[l] = t, o.addOption(t, e), e.attr("value", l), n && r && i();
                    });
                } else a ? n.$observe("value", function(t) {
                    o.readValue();
                    var n, r = e.prop("selected");
                    b(u) && (o.removeOption(u), n = !0), u = t, o.addOption(t, e), n && r && i();
                }) : s ? t.$watch(s, function(t, r) {
                    n.$set("value", t);
                    var a = e.prop("selected");
                    r !== t && o.removeOption(r), o.addOption(t, e), r && a && i();
                }) : o.addOption(n.value, e);
                n.$observe("disabled", function(t) {
                    ("true" === t || t && e.prop("selected")) && (o.multiple ? i(!0) : (o.ngModelCtrl.$setViewValue(null), 
                    o.ngModelCtrl.$render()));
                }), e.on("$destroy", function() {
                    var t = o.readValue(), e = n.value;
                    o.removeOption(e), r(), (o.multiple && t && -1 !== t.indexOf(e) || t === e) && i(!0);
                });
            };
        } ], fs = function() {
            function t(t, e, n, r) {
                var i = r[0], a = r[1];
                if (!a) return void (i.registerOption = g);
                if (i.ngModelCtrl = a, e.on("change", function() {
                    i.removeUnknownOption(), t.$apply(function() {
                        a.$setViewValue(i.readValue());
                    });
                }), n.multiple) {
                    i.multiple = !0, i.readValue = function() {
                        var t = [];
                        return o(e.find("option"), function(e) {
                            if (e.selected && !e.disabled) {
                                var n = e.value;
                                t.push(n in i.selectValueMap ? i.selectValueMap[n] : n);
                            }
                        }), t;
                    }, i.writeValue = function(t) {
                        o(e.find("option"), function(e) {
                            var n = !!t && (F(t, e.value) || F(t, i.selectValueMap[e.value]));
                            n !== e.selected && Kr(ii(e), n);
                        });
                    };
                    var s, u = NaN;
                    t.$watch(function() {
                        u !== a.$viewValue || B(s, a.$viewValue) || (s = wt(a.$viewValue), a.$render()), 
                        u = a.$viewValue;
                    }), a.$isEmpty = function(t) {
                        return !t || 0 === t.length;
                    };
                }
            }
            function e(t, e, n, r) {
                var i = r[1];
                if (i) {
                    var o = r[0];
                    i.$render = function() {
                        o.writeValue(i.$viewValue);
                    };
                }
            }
            return {
                restrict: "E",
                require: [ "select", "?ngModel" ],
                controller: cs,
                priority: 1,
                link: {
                    pre: t,
                    post: e
                }
            };
        }, hs = [ "$interpolate", function(t) {
            return {
                restrict: "E",
                priority: 100,
                compile: function(e, n) {
                    var r, i;
                    return b(n.ngValue) || (b(n.value) ? r = t(n.value, !0) : (i = t(e.text(), !0)) || n.$set("value", e.text())), 
                    function(t, e, n) {
                        var o = e.parent(), a = o.data("$selectController") || o.parent().data("$selectController");
                        a && a.registerOption(t, e, n, r, i);
                    };
                }
            };
        } ], ds = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, n, r) {
                    r && (n.required = !0, r.$validators.required = function(t, e) {
                        return !n.required || !r.$isEmpty(e);
                    }, n.$observe("required", function() {
                        r.$validate();
                    }));
                }
            };
        }, ps = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, n, i) {
                    if (i) {
                        var o, a = n.ngPattern || n.pattern;
                        n.$observe("pattern", function(t) {
                            if (x(t) && t.length > 0 && (t = new RegExp("^" + t + "$")), t && !t.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", a, t, et(e));
                            o = t || void 0, i.$validate();
                        }), i.$validators.pattern = function(t, e) {
                            return i.$isEmpty(e) || y(o) || o.test(e);
                        };
                    }
                }
            };
        }, gs = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, n, r) {
                    if (r) {
                        var i = -1;
                        n.$observe("maxlength", function(t) {
                            var e = d(t);
                            i = gi(e) ? -1 : e, r.$validate();
                        }), r.$validators.maxlength = function(t, e) {
                            return i < 0 || r.$isEmpty(e) || e.length <= i;
                        };
                    }
                }
            };
        }, ms = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, n, r) {
                    if (r) {
                        var i = 0;
                        n.$observe("minlength", function(t) {
                            i = d(t) || 0, r.$validate();
                        }), r.$validators.minlength = function(t, e) {
                            return r.$isEmpty(e) || e.length >= i;
                        };
                    }
                }
            };
        };
        if (t.angular.bootstrap) return void (t.console && console.log("WARNING: Tried to load angular more than once."));
        !function() {
            var e;
            if (!Ti) {
                var n = wi();
                oi = y(n) ? t.jQuery : n ? t[n] : void 0, oi && oi.fn.on ? (ii = oi, f(oi.fn, {
                    scope: Bi.scope,
                    isolateScope: Bi.isolateScope,
                    controller: Bi.controller,
                    injector: Bi.injector,
                    inheritedData: Bi.inheritedData
                }), e = oi.cleanData, oi.cleanData = function(t) {
                    for (var n, r, i = 0; null != (r = t[i]); i++) (n = oi._data(r, "events")) && n.$destroy && oi(r).triggerHandler("$destroy");
                    e(t);
                }) : ii = Mt, di.element = ii, Ti = !0;
            }
        }(), function(n) {
            f(n, {
                errorHandlingConfig: e,
                bootstrap: lt,
                copy: U,
                extend: f,
                merge: h,
                equals: B,
                element: ii,
                forEach: o,
                injector: le,
                noop: g,
                bind: K,
                toJson: Y,
                fromJson: X,
                identity: m,
                isUndefined: y,
                isDefined: b,
                isString: x,
                isFunction: S,
                isObject: w,
                isNumber: C,
                isElement: V,
                isArray: mi,
                version: Ii,
                isDate: _,
                lowercase: Zr,
                uppercase: ti,
                callbacks: {
                    $$counter: 0
                },
                getTestability: ft,
                reloadWithDebugInfo: ct,
                $$minErr: r,
                $$csp: bi,
                $$encodeUriSegment: ot,
                $$encodeUriQuery: at,
                $$stringify: yt
            }), ai = bt(t), ai("ng", [ "ngLocale" ], [ "$provide", function(t) {
                t.provider({
                    $$sanitizeUri: In
                }), t.provider("$compile", be).directive({
                    a: ea,
                    input: ba,
                    textarea: ba,
                    form: aa,
                    script: us,
                    select: fs,
                    option: hs,
                    ngBind: xa,
                    ngBindHtml: _a,
                    ngBindTemplate: Ca,
                    ngClass: Sa,
                    ngClassEven: Oa,
                    ngClassOdd: Aa,
                    ngCloak: ka,
                    ngController: Da,
                    ngForm: sa,
                    ngHide: es,
                    ngIf: Ma,
                    ngInclude: ja,
                    ngInit: Pa,
                    ngNonBindable: Ka,
                    ngPluralize: Ja,
                    ngRepeat: Za,
                    ngShow: ts,
                    ngStyle: ns,
                    ngSwitch: rs,
                    ngSwitchWhen: is,
                    ngSwitchDefault: os,
                    ngOptions: Xa,
                    ngTransclude: ss,
                    ngModel: Ba,
                    ngList: Va,
                    ngChange: Ta,
                    pattern: ps,
                    ngPattern: ps,
                    required: ds,
                    ngRequired: ds,
                    minlength: ms,
                    ngMinlength: ms,
                    maxlength: gs,
                    ngMaxlength: gs,
                    ngValue: Ea,
                    ngModelOptions: Ga
                }).directive({
                    ngInclude: La
                }).directive(na).directive(Ia), t.provider({
                    $anchorScroll: ce,
                    $animate: uo,
                    $animateCss: fo,
                    $$animateJs: ao,
                    $$animateQueue: so,
                    $$AnimateRunner: co,
                    $$animateAsyncRun: lo,
                    $browser: me,
                    $cacheFactory: ve,
                    $controller: Te,
                    $document: Se,
                    $$isDocumentHidden: Ae,
                    $exceptionHandler: Oe,
                    $filter: Gn,
                    $$forceReflow: yo,
                    $interpolate: Ue,
                    $interval: qe,
                    $http: Re,
                    $httpParamSerializer: De,
                    $httpParamSerializerJQLike: Ie,
                    $httpBackend: Fe,
                    $xhrFactory: He,
                    $jsonpCallbacks: So,
                    $location: an,
                    $log: sn,
                    $parse: xn,
                    $rootScope: Dn,
                    $q: Cn,
                    $$q: _n,
                    $sce: Pn,
                    $sceDelegate: Ln,
                    $sniffer: Vn,
                    $templateCache: $e,
                    $templateRequest: Rn,
                    $$testability: Hn,
                    $timeout: Fn,
                    $window: qn,
                    $$rAF: kn,
                    $$jqLite: ne,
                    $$Map: Xi,
                    $$cookieReader: zn
                });
            } ]).info({
                angularVersion: "1.6.5"
            });
        }(di), di.module("ngLocale", [], [ "$provide", function(t) {
            function e(t) {
                t += "";
                var e = t.indexOf(".");
                return -1 == e ? 0 : t.length - e - 1;
            }
            function n(t, n) {
                var r = n;
                void 0 === r && (r = Math.min(e(t), 3));
                var i = Math.pow(10, r);
                return {
                    v: r,
                    f: (t * i | 0) % i
                };
            }
            var r = {
                ZERO: "zero",
                ONE: "one",
                TWO: "two",
                FEW: "few",
                MANY: "many",
                OTHER: "other"
            };
            t.value("$locale", {
                DATETIME_FORMATS: {
                    AMPMS: [ "AM", "PM" ],
                    DAY: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
                    ERANAMES: [ "Before Christ", "Anno Domini" ],
                    ERAS: [ "BC", "AD" ],
                    FIRSTDAYOFWEEK: 6,
                    MONTH: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                    SHORTDAY: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
                    SHORTMONTH: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
                    STANDALONEMONTH: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                    WEEKENDRANGE: [ 5, 6 ],
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    medium: "MMM d, y h:mm:ss a",
                    mediumDate: "MMM d, y",
                    mediumTime: "h:mm:ss a",
                    short: "M/d/yy h:mm a",
                    shortDate: "M/d/yy",
                    shortTime: "h:mm a"
                },
                NUMBER_FORMATS: {
                    CURRENCY_SYM: "$",
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 3,
                        minFrac: 0,
                        minInt: 1,
                        negPre: "-",
                        negSuf: "",
                        posPre: "",
                        posSuf: ""
                    }, {
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 2,
                        minFrac: 2,
                        minInt: 1,
                        negPre: "-¤",
                        negSuf: "",
                        posPre: "¤",
                        posSuf: ""
                    } ]
                },
                id: "en-us",
                localeID: "en_US",
                pluralCat: function(t, e) {
                    var i = 0 | t, o = n(t, e);
                    return 1 == i && 0 == o.v ? r.ONE : r.OTHER;
                }
            });
        } ]), ii(function() {
            ut(t.document, lt);
        });
    }(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
} ]);
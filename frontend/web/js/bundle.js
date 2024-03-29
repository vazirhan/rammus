if (! function(n, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
            if (!n.document) throw new Error("jQuery requires a window with a document");
            return t(n)
        } : t(n)
    }("undefined" != typeof window ? window : this, function(n, t) {
        "use strict";

        function ir(n, t) {
            t = t || u;
            var i = t.createElement("script");
            i.text = n;
            t.head.appendChild(i).parentNode.removeChild(i)
        }

        function fi(n) {
            var t = !!n && "length" in n && n.length,
                r = i.type(n);
            return "function" !== r && !i.isWindow(n) && ("array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n)
        }

        function l(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        }

        function oi(n, t, r) {
            return i.isFunction(t) ? i.grep(n, function(n, i) {
                return !!t.call(n, i, n) !== r
            }) : t.nodeType ? i.grep(n, function(n) {
                return n === t !== r
            }) : "string" != typeof t ? i.grep(n, function(n) {
                return ot.call(t, n) > -1 !== r
            }) : er.test(t) ? i.filter(t, n, r) : (t = i.filter(t, n), i.grep(n, function(n) {
                return ot.call(t, n) > -1 !== r && 1 === n.nodeType
            }))
        }

        function ar(n, t) {
            while ((n = n[t]) && 1 !== n.nodeType);
            return n
        }

        function ne(n) {
            var t = {};
            return i.each(n.match(h) || [], function(n, i) {
                t[i] = !0
            }), t
        }

        function nt(n) {
            return n
        }

        function pt(n) {
            throw n;
        }

        function vr(n, t, r, u) {
            var f;
            try {
                n && i.isFunction(f = n.promise) ? f.call(n).done(t).fail(r) : n && i.isFunction(f = n.then) ? f.call(n, t, r) : t.apply(void 0, [n].slice(u))
            } catch (n) {
                r.apply(void 0, [n])
            }
        }

        function bt() {
            u.removeEventListener("DOMContentLoaded", bt);
            n.removeEventListener("load", bt);
            i.ready()
        }

        function ht() {
            this.expando = i.expando + ht.uid++
        }

        function re(n) {
            return "true" === n || "false" !== n && ("null" === n ? null : n === +n + "" ? +n : te.test(n) ? JSON.parse(n) : n)
        }

        function pr(n, t, i) {
            var r;
            if (void 0 === i && 1 === n.nodeType)
                if (r = "data-" + t.replace(ie, "-$&").toLowerCase(), i = n.getAttribute(r), "string" == typeof i) {
                    try {
                        i = re(i)
                    } catch (u) {}
                    e.set(n, t, i)
                } else i = void 0;
            return i
        }

        function kr(n, t, r, u) {
            var h, e = 1,
                l = 20,
                c = u ? function() {
                    return u.cur()
                } : function() {
                    return i.css(n, t, "")
                },
                s = c(),
                o = r && r[3] || (i.cssNumber[t] ? "" : "px"),
                f = (i.cssNumber[t] || "px" !== o && +s) && ct.exec(i.css(n, t));
            if (f && f[3] !== o) {
                o = o || f[3];
                r = r || [];
                f = +s || 1;
                do e = e || ".5", f /= e, i.style(n, t, f + o); while (e !== (e = c() / s) && 1 !== e && --l)
            }
            return r && (f = +f || +s || 0, h = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = o, u.start = f, u.end = h)), h
        }

        function ue(n) {
            var r, f = n.ownerDocument,
                u = n.nodeName,
                t = si[u];
            return t ? t : (r = f.body.appendChild(f.createElement(u)), t = i.css(r, "display"), r.parentNode.removeChild(r), "none" === t && (t = "block"), si[u] = t, t)
        }

        function tt(n, t) {
            for (var e, u, f = [], i = 0, o = n.length; i < o; i++) u = n[i], u.style && (e = u.style.display, t ? ("none" === e && (f[i] = r.get(u, "display") || null, f[i] || (u.style.display = "")), "" === u.style.display && kt(u) && (f[i] = ue(u))) : "none" !== e && (f[i] = "none", r.set(u, "display", e)));
            for (i = 0; i < o; i++) null != f[i] && (n[i].style.display = f[i]);
            return n
        }

        function o(n, t) {
            var r;
            return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && l(n, t) ? i.merge([n], r) : r
        }

        function hi(n, t) {
            for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
        }

        function iu(n, t, r, u, f) {
            for (var e, s, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
                if (e = n[l], e || 0 === e)
                    if ("object" === i.type(e)) i.merge(y, e.nodeType ? [e] : e);
                    else if (tu.test(e)) {
                for (s = s || h.appendChild(t.createElement("div")), p = (gr.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, s.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) s = s.lastChild;
                i.merge(y, s.childNodes);
                s = h.firstChild;
                s.textContent = ""
            } else y.push(t.createTextNode(e));
            for (h.textContent = "", l = 0; e = y[l++];)
                if (u && i.inArray(e, u) > -1) f && f.push(e);
                else if (w = i.contains(e.ownerDocument, e), s = o(h.appendChild(e), "script"), w && hi(s), r)
                for (v = 0; e = s[v++];) nu.test(e.type || "") && r.push(e);
            return h
        }

        function gt() {
            return !0
        }

        function it() {
            return !1
        }

        function uu() {
            try {
                return u.activeElement
            } catch (n) {}
        }

        function ci(n, t, r, u, f, e) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof r && (u = u || r, r = void 0);
                for (s in t) ci(n, s, r, u, t[s], e);
                return n
            }
            if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), f === !1) f = it;
            else if (!f) return n;
            return 1 === e && (o = f, f = function(n) {
                return i().off(n), o.apply(this, arguments)
            }, f.guid = o.guid || (o.guid = i.guid++)), n.each(function() {
                i.event.add(this, t, f, u, r)
            })
        }

        function fu(n, t) {
            return l(n, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") ? i(">tbody", n)[0] || n : n
        }

        function ae(n) {
            return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
        }

        function ve(n) {
            var t = ce.exec(n.type);
            return t ? n.type = t[1] : n.removeAttribute("type"), n
        }

        function eu(n, t) {
            var u, c, f, s, h, l, a, o;
            if (1 === t.nodeType) {
                if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), o = s.events)) {
                    delete h.handle;
                    h.events = {};
                    for (f in o)
                        for (u = 0, c = o[f].length; u < c; u++) i.event.add(t, f, o[f][u])
                }
                e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
            }
        }

        function ye(n, t) {
            var i = t.nodeName.toLowerCase();
            "input" === i && dr.test(n.type) ? t.checked = n.checked : "input" !== i && "textarea" !== i || (t.defaultValue = n.defaultValue)
        }

        function rt(n, t, u, e) {
            t = gi.apply([], t);
            var l, p, c, a, s, w, h = 0,
                v = n.length,
                k = v - 1,
                y = t[0],
                b = i.isFunction(y);
            if (b || v > 1 && "string" == typeof y && !f.checkClone && he.test(y)) return n.each(function(i) {
                var r = n.eq(i);
                b && (t[0] = y.call(this, i, r.html()));
                rt(r, t, u, e)
            });
            if (v && (l = iu(t, n[0].ownerDocument, !1, n, e), p = l.firstChild, 1 === l.childNodes.length && (l = p), p || e)) {
                for (c = i.map(o(l, "script"), ae), a = c.length; h < v; h++) s = l, h !== k && (s = i.clone(s, !0, !0), a && i.merge(c, o(s, "script"))), u.call(n[h], s, h);
                if (a)
                    for (w = c[c.length - 1].ownerDocument, i.map(c, ve), h = 0; h < a; h++) s = c[h], nu.test(s.type || "") && !r.access(s, "globalEval") && i.contains(w, s) && (s.src ? i._evalUrl && i._evalUrl(s.src) : ir(s.textContent.replace(le, ""), w))
            }
            return n
        }

        function ou(n, t, r) {
            for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(o(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && hi(o(u, "script")), u.parentNode.removeChild(u));
            return n
        }

        function lt(n, t, r) {
            var o, s, h, u, e = n.style;
            return r = r || ni(n), r && (u = r.getPropertyValue(t) || r[t], "" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), !f.pixelMarginRight() && li.test(u) && su.test(t) && (o = e.width, s = e.minWidth, h = e.maxWidth, e.minWidth = e.maxWidth = e.width = u, u = r.width, e.width = o, e.minWidth = s, e.maxWidth = h)), void 0 !== u ? u + "" : u
        }

        function hu(n, t) {
            return {
                get: function() {
                    return n() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function be(n) {
            if (n in vu) return n;
            for (var i = n[0].toUpperCase() + n.slice(1), t = au.length; t--;)
                if (n = au[t] + i, n in vu) return n
        }

        function yu(n) {
            var t = i.cssProps[n];
            return t || (t = i.cssProps[n] = be(n) || n), t
        }

        function pu(n, t, i) {
            var r = ct.exec(t);
            return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
        }

        function wu(n, t, r, u, f) {
            for (var o = 0, e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0; e < 4; e += 2) "margin" === r && (o += i.css(n, r + b[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + b[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + b[e] + "Width", !0, f))) : (o += i.css(n, "padding" + b[e], !0, f), "padding" !== r && (o += i.css(n, "border" + b[e] + "Width", !0, f)));
            return o
        }

        function bu(n, t, r) {
            var o, e = ni(n),
                u = lt(n, t, e),
                s = "border-box" === i.css(n, "boxSizing", !1, e);
            return li.test(u) ? u : (o = s && (f.boxSizingReliable() || u === n.style[t]), "auto" === u && (u = n["offset" + t[0].toUpperCase() + t.slice(1)]), u = parseFloat(u) || 0, u + wu(n, t, r || (s ? "border" : "content"), o, e) + "px")
        }

        function s(n, t, i, r, u) {
            return new s.prototype.init(n, t, i, r, u)
        }

        function ai() {
            ti && (u.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(ai) : n.setTimeout(ai, i.fx.interval), i.fx.tick())
        }

        function gu() {
            return n.setTimeout(function() {
                ut = void 0
            }), ut = i.now()
        }

        function ii(n, t) {
            var r, u = 0,
                i = {
                    height: n
                };
            for (t = t ? 1 : 0; u < 4; u += 2 - t) r = b[u], i["margin" + r] = i["padding" + r] = n;
            return t && (i.opacity = i.width = n), i
        }

        function nf(n, t, i) {
            for (var u, f = (a.tweeners[t] || []).concat(a.tweeners["*"]), r = 0, e = f.length; r < e; r++)
                if (u = f[r].call(i, t, n)) return u
        }

        function ke(n, t, u) {
            var f, y, w, c, b, s, o, l, k = "width" in t || "height" in t,
                v = this,
                p = {},
                h = n.style,
                a = n.nodeType && kt(n),
                e = r.get(n, "fxshow");
            u.queue || (c = i._queueHooks(n, "fx"), null == c.unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() {
                c.unqueued || b()
            }), c.unqueued++, v.always(function() {
                v.always(function() {
                    c.unqueued--;
                    i.queue(n, "fx").length || c.empty.fire()
                })
            }));
            for (f in t)
                if (y = t[f], ku.test(y)) {
                    if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) {
                        if ("show" !== y || !e || void 0 === e[f]) continue;
                        a = !0
                    }
                    p[f] = e && e[f] || i.style(n, f)
                } if (s = !i.isEmptyObject(t), s || !i.isEmptyObject(p)) {
                k && 1 === n.nodeType && (u.overflow = [h.overflow, h.overflowX, h.overflowY], o = e && e.display, null == o && (o = r.get(n, "display")), l = i.css(n, "display"), "none" === l && (o ? l = o : (tt([n], !0), o = n.style.display || o, l = i.css(n, "display"), tt([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (s || (v.done(function() {
                    h.display = o
                }), null == o && (l = h.display, o = "none" === l ? "" : l)), h.display = "inline-block"));
                u.overflow && (h.overflow = "hidden", v.always(function() {
                    h.overflow = u.overflow[0];
                    h.overflowX = u.overflow[1];
                    h.overflowY = u.overflow[2]
                }));
                s = !1;
                for (f in p) s || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                    display: o
                }), w && (e.hidden = !a), a && tt([n], !0), v.done(function() {
                    a || tt([n]);
                    r.remove(n, "fxshow");
                    for (f in p) i.style(n, f, p[f])
                })), s = nf(a ? e[f] : 0, f, v), f in e || (e[f] = s.start, a && (s.end = s.start, s.start = 0))
            }
        }

        function de(n, t) {
            var r, f, e, u, o;
            for (r in n)
                if (f = i.camelCase(r), e = t[f], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                    u = o.expand(u);
                    delete n[f];
                    for (r in u) r in n || (n[r] = u[r], t[r] = e)
                } else t[f] = e
        }

        function a(n, t, r) {
            var e, o, s = 0,
                l = a.prefilters.length,
                f = i.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (o) return !1;
                    for (var s = ut || gu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
                    return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (e || f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u]), !1)
                },
                u = f.promise({
                    elem: n,
                    props: i.extend({}, t),
                    opts: i.extend(!0, {
                        specialEasing: {},
                        easing: i.easing._default
                    }, r),
                    originalProperties: t,
                    originalOptions: r,
                    startTime: ut || gu(),
                    duration: r.duration,
                    tweens: [],
                    createTween: function(t, r) {
                        var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(f), f
                    },
                    stop: function(t) {
                        var i = 0,
                            r = t ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i < r; i++) u.tweens[i].run(1);
                        return t ? (f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u, t])) : f.rejectWith(n, [u, t]), this
                    }
                }),
                h = u.props;
            for (de(h, u.opts.specialEasing); s < l; s++)
                if (e = a.prefilters[s].call(u, n, h, u.opts)) return i.isFunction(e.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(e.stop, e)), e;
            return i.map(h, nf, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), i.fx.timer(i.extend(c, {
                elem: n,
                anim: u,
                queue: u.opts.queue
            })), u
        }

        function k(n) {
            var t = n.match(h) || [];
            return t.join(" ")
        }

        function d(n) {
            return n.getAttribute && n.getAttribute("class") || ""
        }

        function pi(n, t, r, u) {
            var f;
            if (Array.isArray(t)) i.each(t, function(t, i) {
                r || ge.test(n) ? u(n, i) : pi(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
            });
            else if (r || "object" !== i.type(t)) u(n, t);
            else
                for (f in t) pi(n + "[" + f + "]", t[f], r, u)
        }

        function cf(n) {
            return function(t, r) {
                "string" != typeof t && (r = t, t = "*");
                var u, f = 0,
                    e = t.toLowerCase().match(h) || [];
                if (i.isFunction(r))
                    while (u = e[f++]) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
            }
        }

        function lf(n, t, r, u) {
            function e(s) {
                var h;
                return f[s] = !0, i.each(n[s] || [], function(n, i) {
                    var s = i(t, r, u);
                    return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
                }), h
            }
            var f = {},
                o = n === wi;
            return e(t.dataTypes[0]) || !f["*"] && e("*")
        }

        function ki(n, t) {
            var r, u, f = i.ajaxSettings.flatOptions || {};
            for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
            return u && i.extend(!0, n, u), n
        }

        function so(n, t, i) {
            for (var e, u, f, o, s = n.contents, r = n.dataTypes;
                "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
            if (e)
                for (u in s)
                    if (s[u] && s[u].test(e)) {
                        r.unshift(u);
                        break
                    } if (r[0] in i) f = r[0];
            else {
                for (u in i) {
                    if (!r[0] || n.converters[u + " " + r[0]]) {
                        f = u;
                        break
                    }
                    o || (o = u)
                }
                f = f || o
            }
            if (f) return f !== r[0] && r.unshift(f), i[f]
        }

        function ho(n, t, i, r) {
            var h, u, f, s, e, o = {},
                c = n.dataTypes.slice();
            if (c[1])
                for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
            for (u = c.shift(); u;)
                if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                    if ("*" === u) u = e;
                    else if ("*" !== e && e !== u) {
                if (f = o[e + " " + u] || o["* " + u], !f)
                    for (h in o)
                        if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                            f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                            break
                        } if (f !== !0)
                    if (f && n.throws) t = f(t);
                    else try {
                        t = f(t)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: f ? l : "No conversion from " + e + " to " + u
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }
        var p = [],
            u = n.document,
            pf = Object.getPrototypeOf,
            w = p.slice,
            gi = p.concat,
            ui = p.push,
            ot = p.indexOf,
            vt = {},
            nr = vt.toString,
            yt = vt.hasOwnProperty,
            tr = yt.toString,
            wf = tr.call(Object),
            f = {},
            rr = "3.2.1",
            i = function(n, t) {
                return new i.fn.init(n, t)
            },
            bf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            kf = /^-ms-/,
            df = /-([a-z])/g,
            gf = function(n, t) {
                return t.toUpperCase()
            },
            y, ei, er, or, sr, hr, cr, lr, h, yr, wt, v, st, si, tu, ut, ti, ku, du, tf, ft, rf, uf, ff, vi, af, et, di, ri, vf, yf;
        i.fn = i.prototype = {
            jquery: rr,
            constructor: i,
            length: 0,
            toArray: function() {
                return w.call(this)
            },
            get: function(n) {
                return null == n ? w.call(this) : n < 0 ? this[n + this.length] : this[n]
            },
            pushStack: function(n) {
                var t = i.merge(this.constructor(), n);
                return t.prevObject = this, t
            },
            each: function(n) {
                return i.each(this, n)
            },
            map: function(n) {
                return this.pushStack(i.map(this, function(t, i) {
                    return n.call(t, i, t)
                }))
            },
            slice: function() {
                return this.pushStack(w.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(n) {
                var i = this.length,
                    t = +n + (n < 0 ? i : 0);
                return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ui,
            sort: p.sort,
            splice: p.splice
        };
        i.extend = i.fn.extend = function() {
            var e, f, r, t, o, s, n = arguments[0] || {},
                u = 1,
                c = arguments.length,
                h = !1;
            for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); u < c; u++)
                if (null != (e = arguments[u]))
                    for (f in e) r = n[f], t = e[f], n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (o ? (o = !1, s = r && Array.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
            return n
        };
        i.extend({
            expando: "jQuery" + (rr + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(n) {
                throw new Error(n);
            },
            noop: function() {},
            isFunction: function(n) {
                return "function" === i.type(n)
            },
            isWindow: function(n) {
                return null != n && n === n.window
            },
            isNumeric: function(n) {
                var t = i.type(n);
                return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
            },
            isPlainObject: function(n) {
                var t, i;
                return !(!n || "[object Object]" !== nr.call(n)) && (!(t = pf(n)) || (i = yt.call(t, "constructor") && t.constructor, "function" == typeof i && tr.call(i) === wf))
            },
            isEmptyObject: function(n) {
                for (var t in n) return !1;
                return !0
            },
            type: function(n) {
                return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? vt[nr.call(n)] || "object" : typeof n
            },
            globalEval: function(n) {
                ir(n)
            },
            camelCase: function(n) {
                return n.replace(kf, "ms-").replace(df, gf)
            },
            each: function(n, t) {
                var r, i = 0;
                if (fi(n)) {
                    for (r = n.length; i < r; i++)
                        if (t.call(n[i], i, n[i]) === !1) break
                } else
                    for (i in n)
                        if (t.call(n[i], i, n[i]) === !1) break;
                return n
            },
            trim: function(n) {
                return null == n ? "" : (n + "").replace(bf, "")
            },
            makeArray: function(n, t) {
                var r = t || [];
                return null != n && (fi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ui.call(r, n)), r
            },
            inArray: function(n, t, i) {
                return null == t ? -1 : ot.call(t, n, i)
            },
            merge: function(n, t) {
                for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
                return n.length = r, n
            },
            grep: function(n, t, i) {
                for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
                return f
            },
            map: function(n, t, i) {
                var e, u, r = 0,
                    f = [];
                if (fi(n))
                    for (e = n.length; r < e; r++) u = t(n[r], r, i), null != u && f.push(u);
                else
                    for (r in n) u = t(n[r], r, i), null != u && f.push(u);
                return gi.apply([], f)
            },
            guid: 1,
            proxy: function(n, t) {
                var u, f, r;
                if ("string" == typeof t && (u = n[t], t = n, n = u), i.isFunction(n)) return f = w.call(arguments, 2), r = function() {
                    return n.apply(t || this, f.concat(w.call(arguments)))
                }, r.guid = n.guid = n.guid || i.guid++, r
            },
            now: Date.now,
            support: f
        });
        "function" == typeof Symbol && (i.fn[Symbol.iterator] = p[Symbol.iterator]);
        i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
            vt["[object " + t + "]"] = t.toLowerCase()
        });
        y = function(n) {
            function u(n, t, r, u) {
                var s, w, l, a, d, y, g, p = t && t.ownerDocument,
                    v = t ? t.nodeType : 9;
                if (r = r || [], "string" != typeof n || !n || 1 !== v && 9 !== v && 11 !== v) return r;
                if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
                    if (11 !== v && (d = cr.exec(n)))
                        if (s = d[1]) {
                            if (9 === v) {
                                if (!(l = t.getElementById(s))) return r;
                                if (l.id === s) return r.push(l), r
                            } else if (p && (l = p.getElementById(s)) && et(t, l) && l.id === s) return r.push(l), r
                        } else {
                            if (d[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                            if ((s = d[3]) && e.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r
                        } if (e.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                        if (1 !== v) p = t, g = n;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(vi, yi) : t.setAttribute("id", a = f), y = ft(n), w = y.length; w--;) y[w] = "#" + a + " " + yt(y[w]);
                            g = y.join(",");
                            p = ni.test(n) && ri(t.parentNode) || t
                        }
                        if (g) try {
                            return k.apply(r, p.querySelectorAll(g)), r
                        } catch (nt) {} finally {
                            a === f && t.removeAttribute("id")
                        }
                    }
                }
                return si(n.replace(at, "$1"), t, r, u)
            }

            function ti() {
                function n(r, u) {
                    return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
                }
                var i = [];
                return n
            }

            function l(n) {
                return n[f] = !0, n
            }

            function a(n) {
                var t = i.createElement("fieldset");
                try {
                    return !!n(t)
                } catch (r) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                    t = null
                }
            }

            function ii(n, i) {
                for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
            }

            function wi(n, t) {
                var i = t && n,
                    r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (i)
                    while (i = i.nextSibling)
                        if (i === t) return -1;
                return n ? 1 : -1
            }

            function ar(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return "input" === i && t.type === n
                }
            }

            function vr(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === n
                }
            }

            function bi(n) {
                return function(t) {
                    return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && lr(t) === n : t.disabled === n : "label" in t && t.disabled === n
                }
            }

            function it(n) {
                return l(function(t) {
                    return t = +t, l(function(i, r) {
                        for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                    })
                })
            }

            function ri(n) {
                return n && "undefined" != typeof n.getElementsByTagName && n
            }

            function ki() {}

            function yt(n) {
                for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
                return i
            }

            function pt(n, t, i) {
                var r = t.dir,
                    u = t.next,
                    e = u || r,
                    o = i && "parentNode" === e,
                    s = di++;
                return t.first ? function(t, i, u) {
                    while (t = t[r])
                        if (1 === t.nodeType || o) return n(t, i, u);
                    return !1
                } : function(t, i, h) {
                    var c, l, a, y = [v, s];
                    if (h) {
                        while (t = t[r])
                            if ((1 === t.nodeType || o) && n(t, i, h)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || o)
                                if (a = t[f] || (t[f] = {}), l = a[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                                else {
                                    if ((c = l[e]) && c[0] === v && c[1] === s) return y[2] = c[2];
                                    if (l[e] = y, y[2] = n(t, i, h)) return !0
                                } return !1
                }
            }

            function ui(n) {
                return n.length > 1 ? function(t, i, r) {
                    for (var u = n.length; u--;)
                        if (!n[u](t, i, r)) return !1;
                    return !0
                } : n[0]
            }

            function yr(n, t, i) {
                for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
                return i
            }

            function wt(n, t, i, r, u) {
                for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f)));
                return o
            }

            function fi(n, t, i, r, u, e) {
                return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), l(function(f, e, o, s) {
                    var l, c, a, p = [],
                        y = [],
                        w = e.length,
                        b = f || yr(t || "*", o.nodeType ? [o] : o, []),
                        v = !n || !f && t ? b : wt(b, p, n, o, s),
                        h = i ? u || (f ? n : w || r) ? [] : e : v;
                    if (i && i(v, h, o, s), r)
                        for (l = wt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                    if (f) {
                        if (u || n) {
                            if (u) {
                                for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                                u(null, h = [], l, s)
                            }
                            for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                        }
                    } else h = wt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h)
                })
            }

            function ei(n) {
                for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = pt(function(n) {
                        return n === o
                    }, c, !0), a = pt(function(n) {
                        return nt(o, n) > -1
                    }, c, !0), e = [function(n, t, i) {
                        var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                        return o = null, r
                    }]; i < s; i++)
                    if (u = t.relative[n[i].type]) e = [pt(ui(e), u)];
                    else {
                        if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                            for (r = ++i; r < s; r++)
                                if (t.relative[n[r].type]) break;
                            return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({
                                value: " " === n[i - 2].type ? "*" : ""
                            })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && yt(n))
                        }
                        e.push(u)
                    } return ui(e)
            }

            function pr(n, r) {
                var f = r.length > 0,
                    e = n.length > 0,
                    o = function(o, s, c, l, a) {
                        var y, nt, d, g = 0,
                            p = "0",
                            tt = o && [],
                            w = [],
                            it = ht,
                            rt = o || e && t.find.TAG("*", a),
                            ut = v += null == it ? 1 : Math.random() || .1,
                            ft = rt.length;
                        for (a && (ht = s === i || s || a); p !== ft && null != (y = rt[p]); p++) {
                            if (e && y) {
                                for (nt = 0, s || y.ownerDocument === i || (b(y), c = !h); d = n[nt++];)
                                    if (d(y, s || i, c)) {
                                        l.push(y);
                                        break
                                    } a && (v = ut)
                            }
                            f && ((y = !d && y) && g--, o && tt.push(y))
                        }
                        if (g += p, f && p !== g) {
                            for (nt = 0; d = r[nt++];) d(tt, w, s, c);
                            if (o) {
                                if (g > 0)
                                    while (p--) tt[p] || w[p] || (w[p] = nr.call(l));
                                w = wt(w)
                            }
                            k.apply(l, w);
                            a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                        }
                        return a && (v = ut, ht = it), tt
                    };
                return f ? l(o) : o
            }
            var rt, e, t, st, oi, ft, bt, si, ht, w, ut, b, i, s, h, o, d, ct, et, f = "sizzle" + 1 * new Date,
                c = n.document,
                v = 0,
                di = 0,
                hi = ti(),
                ci = ti(),
                lt = ti(),
                kt = function(n, t) {
                    return n === t && (ut = !0), 0
                },
                gi = {}.hasOwnProperty,
                g = [],
                nr = g.pop,
                tr = g.push,
                k = g.push,
                li = g.slice,
                nt = function(n, t) {
                    for (var i = 0, r = n.length; i < r; i++)
                        if (n[i] === t) return i;
                    return -1
                },
                dt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                r = "[\\x20\\t\\r\\n\\f]",
                tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ai = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
                gt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ai + ")*)|.*)\\)|)",
                ir = new RegExp(r + "+", "g"),
                at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
                rr = new RegExp("^" + r + "*," + r + "*"),
                ur = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
                fr = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
                er = new RegExp(gt),
                or = new RegExp("^" + tt + "$"),
                vt = {
                    ID: new RegExp("^#(" + tt + ")"),
                    CLASS: new RegExp("^\\.(" + tt + ")"),
                    TAG: new RegExp("^(" + tt + "|[*])"),
                    ATTR: new RegExp("^" + ai),
                    PSEUDO: new RegExp("^" + gt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + dt + ")$", "i"),
                    needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
                },
                sr = /^(?:input|select|textarea|button)$/i,
                hr = /^h\d$/i,
                ot = /^[^{]+\{\s*\[native \w/,
                cr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ni = /[+~]/,
                y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
                p = function(n, t, i) {
                    var r = "0x" + t - 65536;
                    return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                vi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                yi = function(n, t) {
                    return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
                },
                pi = function() {
                    b()
                },
                lr = pt(function(n) {
                    return n.disabled === !0 && ("form" in n || "label" in n)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                k.apply(g = li.call(c.childNodes), c.childNodes);
                g[c.childNodes.length].nodeType
            } catch (wr) {
                k = {
                    apply: g.length ? function(n, t) {
                        tr.apply(n, li.call(t))
                    } : function(n, t) {
                        for (var i = n.length, r = 0; n[i++] = t[r++];);
                        n.length = i - 1
                    }
                }
            }
            e = u.support = {};
            oi = u.isXML = function(n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return !!t && "HTML" !== t.nodeName
            };
            b = u.setDocument = function(n) {
                var v, u, l = n ? n.ownerDocument || n : c;
                return l !== i && 9 === l.nodeType && l.documentElement ? (i = l, s = i.documentElement, h = !oi(i), c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)), e.attributes = a(function(n) {
                    return n.className = "i", !n.getAttribute("className")
                }), e.getElementsByTagName = a(function(n) {
                    return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
                }), e.getElementsByClassName = ot.test(i.getElementsByClassName), e.getById = a(function(n) {
                    return s.appendChild(n).id = f, !i.getElementsByName || !i.getElementsByName(f).length
                }), e.getById ? (t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        return n.getAttribute("id") === t
                    }
                }, t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && h) {
                        var i = t.getElementById(n);
                        return i ? [i] : []
                    }
                }) : (t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                        return i && i.value === t
                    }
                }, t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && h) {
                        var i, u, f, r = t.getElementById(n);
                        if (r) {
                            if (i = r.getAttributeNode("id"), i && i.value === n) return [r];
                            for (f = t.getElementsByName(n), u = 0; r = f[u++];)
                                if (i = r.getAttributeNode("id"), i && i.value === n) return [r]
                        }
                        return []
                    }
                }), t.find.TAG = e.getElementsByTagName ? function(n, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0
                } : function(n, t) {
                    var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n);
                    if ("*" === n) {
                        while (i = u[f++]) 1 === i.nodeType && r.push(i);
                        return r
                    }
                    return u
                }, t.find.CLASS = e.getElementsByClassName && function(n, t) {
                    if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n)
                }, d = [], o = [], (e.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                    s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                    n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + dt + ")");
                    n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                    n.querySelectorAll(":checked").length || o.push(":checked");
                    n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
                }), a(function(n) {
                    n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("name", "D");
                    n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                    2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                    s.appendChild(n).disabled = !0;
                    2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    o.push(",.*:")
                })), (e.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                    e.disconnectedMatch = ct.call(n, "*");
                    ct.call(n, "[s!='']:x");
                    d.push("!=", gt)
                }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode;
                    return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                } : function(n, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0;
                    return !1
                }, kt = v ? function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                    return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & r || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
                } : function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r, u = 0,
                        o = n.parentNode,
                        s = t.parentNode,
                        f = [n],
                        e = [t];
                    if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                    if (o === s) return wi(n, t);
                    for (r = n; r = r.parentNode;) f.unshift(r);
                    for (r = t; r = r.parentNode;) e.unshift(r);
                    while (f[u] === e[u]) u++;
                    return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
                }, i) : i
            };
            u.matches = function(n, t) {
                return u(n, null, null, t)
            };
            u.matchesSelector = function(n, t) {
                if ((n.ownerDocument || n) !== i && b(n), t = t.replace(fr, "='$1']"), e.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
                    var r = ct.call(n, t);
                    if (r || e.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r
                } catch (f) {}
                return u(t, i, null, [n]).length > 0
            };
            u.contains = function(n, t) {
                return (n.ownerDocument || n) !== i && b(n), et(n, t)
            };
            u.attr = function(n, r) {
                (n.ownerDocument || n) !== i && b(n);
                var f = t.attrHandle[r.toLowerCase()],
                    u = f && gi.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : void 0;
                return void 0 !== u ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
            };
            u.escape = function(n) {
                return (n + "").replace(vi, yi)
            };
            u.error = function(n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            };
            u.uniqueSort = function(n) {
                var r, u = [],
                    t = 0,
                    i = 0;
                if (ut = !e.detectDuplicates, w = !e.sortStable && n.slice(0), n.sort(kt), ut) {
                    while (r = n[i++]) r === n[i] && (t = u.push(i));
                    while (t--) n.splice(u[t], 1)
                }
                return w = null, n
            };
            st = u.getText = function(n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (1 === t || 9 === t || 11 === t) {
                        if ("string" == typeof n.textContent) return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                    } else if (3 === t || 4 === t) return n.nodeValue
                } else
                    while (r = n[u++]) i += st(r);
                return i
            };
            t = u.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: vt,
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
                    ATTR: function(n) {
                        return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function(n) {
                        return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                    },
                    PSEUDO: function(n) {
                        var i, t = !n[6] && n[2];
                        return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && er.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(n) {
                        var t = n.replace(y, p).toLowerCase();
                        return "*" === n ? function() {
                            return !0
                        } : function(n) {
                            return n.nodeName && n.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(n) {
                        var t = hi[n + " "];
                        return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                            return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, t, i) {
                        return function(r) {
                            var f = u.attr(r, n);
                            return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(ir, " ") + " ").indexOf(i) > -1 : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(n, t, i, r, u) {
                        var s = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            e = "of-type" === t;
                        return 1 === r && 0 === u ? function(n) {
                            return !!n.parentNode
                        } : function(t, i, h) {
                            var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling",
                                d = t.parentNode,
                                nt = e && t.nodeName.toLowerCase(),
                                g = !h && !e,
                                l = !1;
                            if (d) {
                                if (s) {
                                    while (k) {
                                        for (c = t; c = c[k];)
                                            if (e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                        b = k = "only" === n && !b && "nextSibling"
                                    }
                                    return !0
                                }
                                if (b = [o ? d.firstChild : d.lastChild], o && g) {
                                    for (c = d, y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a && p[2], c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop();)
                                        if (1 === c.nodeType && ++l && c === t) {
                                            w[n] = [v, a, l];
                                            break
                                        }
                                } else if (g && (c = t, y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a), l === !1)
                                    while (c = ++a && c && c[k] || (l = a = 0) || b.pop())
                                        if ((e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && (y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), w[n] = [v, l]), c === t)) break;
                                return l -= u, l === r || l % r == 0 && l / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(n, i) {
                        var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                        return r[f] ? r(i) : r.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                            for (var u, f = r(n, i), e = f.length; e--;) u = nt(n, f[e]), n[u] = !(t[u] = f[e])
                        }) : function(n) {
                            return r(n, 0, e)
                        }) : r
                    }
                },
                pseudos: {
                    not: l(function(n) {
                        var t = [],
                            r = [],
                            i = bt(n.replace(at, "$1"));
                        return i[f] ? l(function(n, t, r, u) {
                            for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                        }) : function(n, u, f) {
                            return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                        }
                    }),
                    has: l(function(n) {
                        return function(t) {
                            return u(n, t).length > 0
                        }
                    }),
                    contains: l(function(n) {
                        return n = n.replace(y, p),
                            function(t) {
                                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                            }
                    }),
                    lang: l(function(n) {
                        return or.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(n) {
                        return n === s
                    },
                    focus: function(n) {
                        return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                    },
                    enabled: bi(!1),
                    disabled: bi(!0),
                    checked: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && !!n.checked || "option" === t && !!n.selected
                    },
                    selected: function(n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                    },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(n) {
                        return !t.pseudos.empty(n)
                    },
                    header: function(n) {
                        return hr.test(n.nodeName)
                    },
                    input: function(n) {
                        return sr.test(n.nodeName)
                    },
                    button: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && "button" === n.type || "button" === t
                    },
                    text: function(n) {
                        var t;
                        return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: it(function() {
                        return [0]
                    }),
                    last: it(function(n, t) {
                        return [t - 1]
                    }),
                    eq: it(function(n, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: it(function(n, t) {
                        for (var i = 0; i < t; i += 2) n.push(i);
                        return n
                    }),
                    odd: it(function(n, t) {
                        for (var i = 1; i < t; i += 2) n.push(i);
                        return n
                    }),
                    lt: it(function(n, t, i) {
                        for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                        return n
                    }),
                    gt: it(function(n, t, i) {
                        for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                        return n
                    })
                }
            };
            t.pseudos.nth = t.pseudos.eq;
            for (rt in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) t.pseudos[rt] = ar(rt);
            for (rt in {
                    submit: !0,
                    reset: !0
                }) t.pseudos[rt] = vr(rt);
            return ki.prototype = t.filters = t.pseudos, t.setFilters = new ki, ft = u.tokenize = function(n, i) {
                var e, f, s, o, r, h, c, l = ci[n + " "];
                if (l) return i ? 0 : l.slice(0);
                for (r = n, h = [], c = t.preFilter; r;) {
                    (!e || (f = rr.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                    e = !1;
                    (f = ur.exec(r)) && (e = f.shift(), s.push({
                        value: e,
                        type: f[0].replace(at, " ")
                    }), r = r.slice(e.length));
                    for (o in t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                        value: e,
                        type: o,
                        matches: f
                    }), r = r.slice(e.length));
                    if (!e) break
                }
                return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
            }, bt = u.compile = function(n, t) {
                var r, u = [],
                    e = [],
                    i = lt[n + " "];
                if (!i) {
                    for (t || (t = ft(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                    i = lt(n, pr(e, u));
                    i.selector = n
                }
                return i
            }, si = u.select = function(n, i, r, u) {
                var o, f, e, l, a, c = "function" == typeof n && n,
                    s = !u && ft(n = c.selector || n);
                if (r = r || [], 1 === s.length) {
                    if (f = s[0] = s[0].slice(0), f.length > 2 && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
                        if (i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0], !i) return r;
                        c && (i = i.parentNode);
                        n = n.slice(f.shift().value.length)
                    }
                    for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
                        if (e = f[o], t.relative[l = e.type]) break;
                        if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ni.test(f[0].type) && ri(i.parentNode) || i))) {
                            if (f.splice(o, 1), n = u.length && yt(f), !n) return k.apply(r, u), r;
                            break
                        }
                    }
                }
                return (c || bt(n, s))(u, i, !h, r, !i || ni.test(n) && ri(i.parentNode) || i), r
            }, e.sortStable = f.split("").sort(kt).join("") === f, e.detectDuplicates = !!ut, b(), e.sortDetached = a(function(n) {
                return 1 & n.compareDocumentPosition(i.createElement("fieldset"))
            }), a(function(n) {
                return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
            }) || ii("type|href|height|width", function(n, t, i) {
                if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), e.attributes && a(function(n) {
                return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
            }) || ii("value", function(n, t, i) {
                if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
            }), a(function(n) {
                return null == n.getAttribute("disabled")
            }) || ii(dt, function(n, t, i) {
                var r;
                if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
            }), u
        }(n);
        i.find = y;
        i.expr = y.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.uniqueSort = i.unique = y.uniqueSort;
        i.text = y.getText;
        i.isXMLDoc = y.isXML;
        i.contains = y.contains;
        i.escapeSelector = y.escape;
        var g = function(n, t, r) {
                for (var u = [], f = void 0 !== r;
                    (n = n[t]) && 9 !== n.nodeType;)
                    if (1 === n.nodeType) {
                        if (f && i(n).is(r)) break;
                        u.push(n)
                    } return u
            },
            ur = function(n, t) {
                for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
                return i
            },
            fr = i.expr.match.needsContext;
        ei = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        er = /^.[^:#\[\.,]*$/;
        i.filter = function(n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
                return 1 === n.nodeType
            }))
        };
        i.fn.extend({
            find: function(n) {
                var t, r, u = this.length,
                    f = this;
                if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                    for (t = 0; t < u; t++)
                        if (i.contains(f[t], this)) return !0
                }));
                for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
                return u > 1 ? i.uniqueSort(r) : r
            },
            filter: function(n) {
                return this.pushStack(oi(this, n || [], !1))
            },
            not: function(n) {
                return this.pushStack(oi(this, n || [], !0))
            },
            is: function(n) {
                return !!oi(this, "string" == typeof n && fr.test(n) ? i(n) : n || [], !1).length
            }
        });
        sr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        hr = i.fn.init = function(n, t, r) {
            var f, e;
            if (!n) return this;
            if (r = r || or, "string" == typeof n) {
                if (f = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : sr.exec(n), !f || !f[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
                if (f[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), ei.test(f[1]) && i.isPlainObject(t))
                        for (f in t) i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                    return this
                }
                return e = u.getElementById(f[2]), e && (this[0] = e, this.length = 1), this
            }
            return n.nodeType ? (this[0] = n, this.length = 1, this) : i.isFunction(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
        };
        hr.prototype = i.fn;
        or = i(u);
        cr = /^(?:parents|prev(?:Until|All))/;
        lr = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        i.fn.extend({
            has: function(n) {
                var t = i(n, this),
                    r = t.length;
                return this.filter(function() {
                    for (var n = 0; n < r; n++)
                        if (i.contains(this, t[n])) return !0
                })
            },
            closest: function(n, t) {
                var r, f = 0,
                    o = this.length,
                    u = [],
                    e = "string" != typeof n && i(n);
                if (!fr.test(n))
                    for (; f < o; f++)
                        for (r = this[f]; r && r !== t; r = r.parentNode)
                            if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                                u.push(r);
                                break
                            } return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
            },
            index: function(n) {
                return n ? "string" == typeof n ? ot.call(i(n), this[0]) : ot.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(n, t) {
                return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
            },
            addBack: function(n) {
                return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
            }
        });
        i.each({
            parent: function(n) {
                var t = n.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(n) {
                return g(n, "parentNode")
            },
            parentsUntil: function(n, t, i) {
                return g(n, "parentNode", i)
            },
            next: function(n) {
                return ar(n, "nextSibling")
            },
            prev: function(n) {
                return ar(n, "previousSibling")
            },
            nextAll: function(n) {
                return g(n, "nextSibling")
            },
            prevAll: function(n) {
                return g(n, "previousSibling")
            },
            nextUntil: function(n, t, i) {
                return g(n, "nextSibling", i)
            },
            prevUntil: function(n, t, i) {
                return g(n, "previousSibling", i)
            },
            siblings: function(n) {
                return ur((n.parentNode || {}).firstChild, n)
            },
            children: function(n) {
                return ur(n.firstChild)
            },
            contents: function(n) {
                return l(n, "iframe") ? n.contentDocument : (l(n, "template") && (n = n.content || n), i.merge([], n.childNodes))
            }
        }, function(n, t) {
            i.fn[n] = function(r, u) {
                var f = i.map(this, t, r);
                return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (lr[n] || i.uniqueSort(f), cr.test(n) && f.reverse()), this.pushStack(f)
            }
        });
        h = /[^\x20\t\r\n\f]+/g;
        i.Callbacks = function(n) {
            n = "string" == typeof n ? ne(n) : i.extend({}, n);
            var e, r, h, u, t = [],
                o = [],
                f = -1,
                c = function() {
                    for (u = u || n.once, h = e = !0; o.length; f = -1)
                        for (r = o.shift(); ++f < t.length;) t[f].apply(r[0], r[1]) === !1 && n.stopOnFalse && (f = t.length, r = !1);
                    n.memory || (r = !1);
                    e = !1;
                    u && (t = r ? [] : "")
                },
                s = {
                    add: function() {
                        return t && (r && !e && (f = t.length - 1, o.push(r)), function u(r) {
                            i.each(r, function(r, f) {
                                i.isFunction(f) ? n.unique && s.has(f) || t.push(f) : f && f.length && "string" !== i.type(f) && u(f)
                            })
                        }(arguments), r && !e && c()), this
                    },
                    remove: function() {
                        return i.each(arguments, function(n, r) {
                            for (var u;
                                (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), u <= f && f--
                        }), this
                    },
                    has: function(n) {
                        return n ? i.inArray(n, t) > -1 : t.length > 0
                    },
                    empty: function() {
                        return t && (t = []), this
                    },
                    disable: function() {
                        return u = o = [], t = r = "", this
                    },
                    disabled: function() {
                        return !t
                    },
                    lock: function() {
                        return u = o = [], r || e || (t = r = ""), this
                    },
                    locked: function() {
                        return !!u
                    },
                    fireWith: function(n, t) {
                        return u || (t = t || [], t = [n, t.slice ? t.slice() : t], o.push(t), e || c()), this
                    },
                    fire: function() {
                        return s.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!h
                    }
                };
            return s
        };
        i.extend({
            Deferred: function(t) {
                var u = [
                        ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                        ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                    ],
                    e = "pending",
                    f = {
                        state: function() {
                            return e
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        "catch": function(n) {
                            return f.then(null, n)
                        },
                        pipe: function() {
                            var n = arguments;
                            return i.Deferred(function(t) {
                                i.each(u, function(u, f) {
                                    var e = i.isFunction(n[f[4]]) && n[f[4]];
                                    r[f[1]](function() {
                                        var n = e && e.apply(this, arguments);
                                        n && i.isFunction(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                                    })
                                });
                                n = null
                            }).promise()
                        },
                        then: function(t, r, f) {
                            function o(t, r, u, f) {
                                return function() {
                                    var s = this,
                                        h = arguments,
                                        l = function() {
                                            var n, c;
                                            if (!(t < e)) {
                                                if (n = u.apply(s, h), n === r.promise()) throw new TypeError("Thenable self-resolution");
                                                c = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                                i.isFunction(c) ? f ? c.call(n, o(e, r, nt, f), o(e, r, pt, f)) : (e++, c.call(n, o(e, r, nt, f), o(e, r, pt, f), o(e, r, nt, r.notifyWith))) : (u !== nt && (s = void 0, h = [n]), (f || r.resolveWith)(s, h))
                                            }
                                        },
                                        c = f ? l : function() {
                                            try {
                                                l()
                                            } catch (n) {
                                                i.Deferred.exceptionHook && i.Deferred.exceptionHook(n, c.stackTrace);
                                                t + 1 >= e && (u !== pt && (s = void 0, h = [n]), r.rejectWith(s, h))
                                            }
                                        };
                                    t ? c() : (i.Deferred.getStackHook && (c.stackTrace = i.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }
                            var e = 0;
                            return i.Deferred(function(n) {
                                u[0][3].add(o(0, n, i.isFunction(f) ? f : nt, n.notifyWith));
                                u[1][3].add(o(0, n, i.isFunction(t) ? t : nt));
                                u[2][3].add(o(0, n, i.isFunction(r) ? r : pt))
                            }).promise()
                        },
                        promise: function(n) {
                            return null != n ? i.extend(n, f) : f
                        }
                    },
                    r = {};
                return i.each(u, function(n, t) {
                    var i = t[2],
                        o = t[5];
                    f[t[1]] = i.add;
                    o && i.add(function() {
                        e = o
                    }, u[3 - n][2].disable, u[0][2].lock);
                    i.add(t[3].fire);
                    r[t[0]] = function() {
                        return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                    };
                    r[t[0] + "With"] = i.fireWith
                }), f.promise(r), t && t.call(r, r), r
            },
            when: function(n) {
                var f = arguments.length,
                    t = f,
                    e = Array(t),
                    u = w.call(arguments),
                    r = i.Deferred(),
                    o = function(n) {
                        return function(t) {
                            e[n] = this;
                            u[n] = arguments.length > 1 ? w.call(arguments) : t;
                            --f || r.resolveWith(e, u)
                        }
                    };
                if (f <= 1 && (vr(n, r.done(o(t)).resolve, r.reject, !f), "pending" === r.state() || i.isFunction(u[t] && u[t].then))) return r.then();
                while (t--) vr(u[t], o(t), r.reject);
                return r.promise()
            }
        });
        yr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        i.Deferred.exceptionHook = function(t, i) {
            n.console && n.console.warn && t && yr.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
        };
        i.readyException = function(t) {
            n.setTimeout(function() {
                throw t;
            })
        };
        wt = i.Deferred();
        i.fn.ready = function(n) {
            return wt.then(n)["catch"](function(n) {
                i.readyException(n)
            }), this
        };
        i.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(n) {
                (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0 || wt.resolveWith(u, [i]))
            }
        });
        i.ready.then = wt.then;
        "complete" === u.readyState || "loading" !== u.readyState && !u.documentElement.doScroll ? n.setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", bt), n.addEventListener("load", bt));
        v = function(n, t, r, u, f, e, o) {
            var s = 0,
                c = n.length,
                h = null == r;
            if ("object" === i.type(r)) {
                f = !0;
                for (s in r) v(n, t, s, r[s], !0, e, o)
            } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                    return h.call(i(n), r)
                })), t))
                for (; s < c; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
        };
        st = function(n) {
            return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
        };
        ht.uid = 1;
        ht.prototype = {
            cache: function(n) {
                var t = n[this.expando];
                return t || (t = {}, st(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(n, t, r) {
                var u, f = this.cache(n);
                if ("string" == typeof t) f[i.camelCase(t)] = r;
                else
                    for (u in t) f[i.camelCase(u)] = t[u];
                return f
            },
            get: function(n, t) {
                return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][i.camelCase(t)]
            },
            access: function(n, t, i) {
                return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t)
            },
            remove: function(n, t) {
                var u, r = n[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t)
                        for (Array.isArray(t) ? t = t.map(i.camelCase) : (t = i.camelCase(t), t = (t in r) ? [t] : t.match(h) || []), u = t.length; u--;) delete r[t[u]];
                    (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
                }
            },
            hasData: function(n) {
                var t = n[this.expando];
                return void 0 !== t && !i.isEmptyObject(t)
            }
        };
        var r = new ht,
            e = new ht,
            te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ie = /[A-Z]/g;
        i.extend({
            hasData: function(n) {
                return e.hasData(n) || r.hasData(n)
            },
            data: function(n, t, i) {
                return e.access(n, t, i)
            },
            removeData: function(n, t) {
                e.remove(n, t)
            },
            _data: function(n, t, i) {
                return r.access(n, t, i)
            },
            _removeData: function(n, t) {
                r.remove(n, t)
            }
        });
        i.fn.extend({
            data: function(n, t) {
                var o, f, s, u = this[0],
                    h = u && u.attributes;
                if (void 0 === n) {
                    if (this.length && (s = e.get(u), 1 === u.nodeType && !r.get(u, "hasDataAttrs"))) {
                        for (o = h.length; o--;) h[o] && (f = h[o].name, 0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)), pr(u, f, s[f])));
                        r.set(u, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof n ? this.each(function() {
                    e.set(this, n)
                }) : v(this, function(t) {
                    var i;
                    if (u && void 0 === t) {
                        if ((i = e.get(u, n), void 0 !== i) || (i = pr(u, n), void 0 !== i)) return i
                    } else this.each(function() {
                        e.set(this, n, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(n) {
                return this.each(function() {
                    e.remove(this, n)
                })
            }
        });
        i.extend({
            queue: function(n, t, u) {
                var f;
                if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
            },
            dequeue: function(n, t) {
                t = t || "fx";
                var r = i.queue(n, t),
                    e = r.length,
                    u = r.shift(),
                    f = i._queueHooks(n, t),
                    o = function() {
                        i.dequeue(n, t)
                    };
                "inprogress" === u && (u = r.shift(), e--);
                u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
                !e && f && f.empty.fire()
            },
            _queueHooks: function(n, t) {
                var u = t + "queueHooks";
                return r.get(n, u) || r.access(n, u, {
                    empty: i.Callbacks("once memory").add(function() {
                        r.remove(n, [t + "queue", u])
                    })
                })
            }
        });
        i.fn.extend({
            queue: function(n, t) {
                var r = 2;
                return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                    var r = i.queue(this, n, t);
                    i._queueHooks(this, n);
                    "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
                })
            },
            dequeue: function(n) {
                return this.each(function() {
                    i.dequeue(this, n)
                })
            },
            clearQueue: function(n) {
                return this.queue(n || "fx", [])
            },
            promise: function(n, t) {
                var u, e = 1,
                    o = i.Deferred(),
                    f = this,
                    s = this.length,
                    h = function() {
                        --e || o.resolveWith(f, [f])
                    };
                for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
                return h(), o.promise(t)
            }
        });
        var wr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ct = new RegExp("^(?:([+-])=|)(" + wr + ")([a-z%]*)$", "i"),
            b = ["Top", "Right", "Bottom", "Left"],
            kt = function(n, t) {
                return n = t || n, "none" === n.style.display || "" === n.style.display && i.contains(n.ownerDocument, n) && "none" === i.css(n, "display")
            },
            br = function(n, t, i, r) {
                var f, u, e = {};
                for (u in t) e[u] = n.style[u], n.style[u] = t[u];
                f = i.apply(n, r || []);
                for (u in t) n.style[u] = e[u];
                return f
            };
        si = {};
        i.fn.extend({
            show: function() {
                return tt(this, !0)
            },
            hide: function() {
                return tt(this)
            },
            toggle: function(n) {
                return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                    kt(this) ? i(this).show() : i(this).hide()
                })
            }
        });
        var dr = /^(?:checkbox|radio)$/i,
            gr = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            nu = /^$|\/(?:java|ecma)script/i,
            c = {
                option: [1, "<select multiple='multiple'>", "<\/select>"],
                thead: [1, "<table>", "<\/table>"],
                col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
                tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
                td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
                _default: [0, "", ""]
            };
        c.optgroup = c.option;
        c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
        c.th = c.td;
        tu = /<|&#?\w+;/;
        ! function() {
            var i = u.createDocumentFragment(),
                n = i.appendChild(u.createElement("div")),
                t = u.createElement("input");
            t.setAttribute("type", "radio");
            t.setAttribute("checked", "checked");
            t.setAttribute("name", "t");
            n.appendChild(t);
            f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
            n.innerHTML = "<textarea>x<\/textarea>";
            f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
        }();
        var dt = u.documentElement,
            fe = /^key/,
            ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ru = /^([^.]*)(?:\.(.+)|)/;
        i.event = {
            global: {},
            add: function(n, t, u, f, e) {
                var v, y, w, p, b, c, s, l, o, k, d, a = r.get(n);
                if (a)
                    for (u.handler && (v = u, u = v.handler, e = v.selector), e && i.find.matchesSelector(dt, e), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function(t) {
                            if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments)
                        }), t = (t || "").match(h) || [""], b = t.length; b--;) w = ru.exec(t[b]) || [], o = d = w[1], k = (w[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, c = i.extend({
                        type: o,
                        origType: d,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: k.join(".")
                    }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y)), s.add && (s.add.call(n, c), c.handler.guid || (c.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, c) : l.push(c), i.event.global[o] = !0)
            },
            remove: function(n, t, u, f, e) {
                var y, k, c, v, p, s, l, a, o, b, d, w = r.hasData(n) && r.get(n);
                if (w && (v = w.events)) {
                    for (t = (t || "").match(h) || [""], p = t.length; p--;)
                        if (c = ru.exec(t[p]) || [], o = d = c[1], b = (c[2] || "").split(".").sort(), o) {
                            for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                            k && !a.length && (l.teardown && l.teardown.call(n, b, w.handle) !== !1 || i.removeEvent(n, o, w.handle), delete v[o])
                        } else
                            for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                    i.isEmptyObject(v) && r.remove(n, "handle events")
                }
            },
            dispatch: function(n) {
                var t = i.event.fix(n),
                    u, c, s, e, f, l, h = new Array(arguments.length),
                    a = (r.get(this, "events") || {})[t.type] || [],
                    o = i.event.special[t.type] || {};
                for (h[0] = t, u = 1; u < arguments.length; u++) h[u] = arguments[u];
                if (t.delegateTarget = this, !o.preDispatch || o.preDispatch.call(this, t) !== !1) {
                    for (l = i.event.handlers.call(this, t, a), u = 0;
                        (e = l[u++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = e.elem, c = 0;
                            (f = e.handlers[c++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, s = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== s && (t.result = s) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return o.postDispatch && o.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(n, t) {
                var f, e, u, o, s, c = [],
                    h = t.delegateCount,
                    r = n.target;
                if (h && r.nodeType && !("click" === n.type && n.button >= 1))
                    for (; r !== this; r = r.parentNode || this)
                        if (1 === r.nodeType && ("click" !== n.type || r.disabled !== !0)) {
                            for (o = [], s = {}, f = 0; f < h; f++) e = t[f], u = e.selector + " ", void 0 === s[u] && (s[u] = e.needsContext ? i(u, this).index(r) > -1 : i.find(u, this, null, [r]).length), s[u] && o.push(e);
                            o.length && c.push({
                                elem: r,
                                handlers: o
                            })
                        } return r = this, h < t.length && c.push({
                    elem: r,
                    handlers: t.slice(h)
                }), c
            },
            addProp: function(n, t) {
                Object.defineProperty(i.Event.prototype, n, {
                    enumerable: !0,
                    configurable: !0,
                    get: i.isFunction(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[n]
                    },
                    set: function(t) {
                        Object.defineProperty(this, n, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(n) {
                return n[i.expando] ? n : new i.Event(n)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== uu() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === uu() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && l(this, "input")) return this.click(), !1
                    },
                    _default: function(n) {
                        return l(n.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(n) {
                        void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                    }
                }
            }
        };
        i.removeEvent = function(n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i)
        };
        i.Event = function(n, t) {
            return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? gt : it, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t)
        };
        i.Event.prototype = {
            constructor: i.Event,
            isDefaultPrevented: it,
            isPropagationStopped: it,
            isImmediatePropagationStopped: it,
            isSimulated: !1,
            preventDefault: function() {
                var n = this.originalEvent;
                this.isDefaultPrevented = gt;
                n && !this.isSimulated && n.preventDefault()
            },
            stopPropagation: function() {
                var n = this.originalEvent;
                this.isPropagationStopped = gt;
                n && !this.isSimulated && n.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var n = this.originalEvent;
                this.isImmediatePropagationStopped = gt;
                n && !this.isSimulated && n.stopImmediatePropagation();
                this.stopPropagation()
            }
        };
        i.each({
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
            which: function(n) {
                var t = n.button;
                return null == n.which && fe.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && ee.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which
            }
        }, i.event.addProp);
        i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(n, t) {
            i.event.special[n] = {
                delegateType: t,
                bindType: t,
                handle: function(n) {
                    var u, f = this,
                        r = n.relatedTarget,
                        e = n.handleObj;
                    return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
                }
            }
        });
        i.fn.extend({
            on: function(n, t, i, r) {
                return ci(this, n, t, i, r)
            },
            one: function(n, t, i, r) {
                return ci(this, n, t, i, r, 1)
            },
            off: function(n, t, r) {
                var u, f;
                if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
                if ("object" == typeof n) {
                    for (f in n) this.off(f, t, n[f]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (r = t, t = void 0), r === !1 && (r = it), this.each(function() {
                    i.event.remove(this, n, r, t)
                })
            }
        });
        var oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            se = /<script|<style|<link/i,
            he = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ce = /^true\/(.*)/,
            le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        i.extend({
            htmlPrefilter: function(n) {
                return n.replace(oe, "<$1><\/$2>")
            },
            clone: function(n, t, r) {
                var u, c, s, e, h = n.cloneNode(!0),
                    l = i.contains(n.ownerDocument, n);
                if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                    for (e = o(h), s = o(n), u = 0, c = s.length; u < c; u++) ye(s[u], e[u]);
                if (t)
                    if (r)
                        for (s = s || o(n), e = e || o(h), u = 0, c = s.length; u < c; u++) eu(s[u], e[u]);
                    else eu(n, h);
                return e = o(h, "script"), e.length > 0 && hi(e, !l && o(n, "script")), h
            },
            cleanData: function(n) {
                for (var u, t, f, s = i.event.special, o = 0; void 0 !== (t = n[o]); o++)
                    if (st(t)) {
                        if (u = t[r.expando]) {
                            if (u.events)
                                for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                            t[r.expando] = void 0
                        }
                        t[e.expando] && (t[e.expando] = void 0)
                    }
            }
        });
        i.fn.extend({
            detach: function(n) {
                return ou(this, n, !0)
            },
            remove: function(n) {
                return ou(this, n)
            },
            text: function(n) {
                return v(this, function(n) {
                    return void 0 === n ? i.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                    })
                }, null, n, arguments.length)
            },
            append: function() {
                return rt(this, arguments, function(n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = fu(this, n);
                        t.appendChild(n)
                    }
                })
            },
            prepend: function() {
                return rt(this, arguments, function(n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = fu(this, n);
                        t.insertBefore(n, t.firstChild)
                    }
                })
            },
            before: function() {
                return rt(this, arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this)
                })
            },
            after: function() {
                return rt(this, arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
                })
            },
            empty: function() {
                for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(o(n, !1)), n.textContent = "");
                return this
            },
            clone: function(n, t) {
                return n = null != n && n, t = null == t ? n : t, this.map(function() {
                    return i.clone(this, n, t)
                })
            },
            html: function(n) {
                return v(this, function(n) {
                    var t = this[0] || {},
                        r = 0,
                        u = this.length;
                    if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof n && !se.test(n) && !c[(gr.exec(n) || ["", ""])[1].toLowerCase()]) {
                        n = i.htmlPrefilter(n);
                        try {
                            for (; r < u; r++) t = this[r] || {}, 1 === t.nodeType && (i.cleanData(o(t, !1)), t.innerHTML = n);
                            t = 0
                        } catch (f) {}
                    }
                    t && this.empty().append(n)
                }, null, n, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return rt(this, arguments, function(t) {
                    var r = this.parentNode;
                    i.inArray(this, n) < 0 && (i.cleanData(o(this)), r && r.replaceChild(t, this))
                }, n)
            }
        });
        i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(n, t) {
            i.fn[n] = function(n) {
                for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ui.apply(f, u.get());
                return this.pushStack(f)
            }
        });
        var su = /^margin/,
            li = new RegExp("^(" + wr + ")(?!px)[a-z%]+$", "i"),
            ni = function(t) {
                var i = t.ownerDocument.defaultView;
                return i && i.opener || (i = n), i.getComputedStyle(t)
            };
        ! function() {
            function r() {
                if (t) {
                    t.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                    t.innerHTML = "";
                    dt.appendChild(e);
                    var i = n.getComputedStyle(t);
                    o = "1%" !== i.top;
                    c = "2px" === i.marginLeft;
                    s = "4px" === i.width;
                    t.style.marginRight = "50%";
                    h = "4px" === i.marginRight;
                    dt.removeChild(e);
                    t = null
                }
            }
            var o, s, h, c, e = u.createElement("div"),
                t = u.createElement("div");
            t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === t.style.backgroundClip, e.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", e.appendChild(t), i.extend(f, {
                pixelPosition: function() {
                    return r(), o
                },
                boxSizingReliable: function() {
                    return r(), s
                },
                pixelMarginRight: function() {
                    return r(), h
                },
                reliableMarginLeft: function() {
                    return r(), c
                }
            }))
        }();
        var pe = /^(none|table(?!-c[ea]).+)/,
            cu = /^--/,
            we = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            lu = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            au = ["Webkit", "Moz", "ms"],
            vu = u.createElement("div").style;
        i.extend({
            cssHooks: {
                opacity: {
                    get: function(n, t) {
                        if (t) {
                            var i = lt(n, "opacity");
                            return "" === i ? "1" : i
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
            style: function(n, t, r, u) {
                if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                    var e, s, o, c = i.camelCase(t),
                        l = cu.test(t),
                        h = n.style;
                    return l || (t = yu(c)), o = i.cssHooks[t] || i.cssHooks[c], void 0 === r ? o && "get" in o && void 0 !== (e = o.get(n, !1, u)) ? e : h[t] : (s = typeof r, "string" === s && (e = ct.exec(r)) && e[1] && (r = kr(n, t, e), s = "number"), null != r && r === r && ("number" === s && (r += e && e[3] || (i.cssNumber[c] ? "" : "px")), f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (h[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (l ? h.setProperty(t, r) : h[t] = r)), void 0)
                }
            },
            css: function(n, t, r, u) {
                var f, o, e, s = i.camelCase(t),
                    h = cu.test(t);
                return h || (t = yu(s)), e = i.cssHooks[t] || i.cssHooks[s], e && "get" in e && (f = e.get(n, !0, r)), void 0 === f && (f = lt(n, t, u)), "normal" === f && t in lu && (f = lu[t]), "" === r || r ? (o = parseFloat(f), r === !0 || isFinite(o) ? o || 0 : f) : f
            }
        });
        i.each(["height", "width"], function(n, t) {
            i.cssHooks[t] = {
                get: function(n, r, u) {
                    if (r) return !pe.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? bu(n, t, u) : br(n, we, function() {
                        return bu(n, t, u)
                    })
                },
                set: function(n, r, u) {
                    var f, e = u && ni(n),
                        o = u && wu(n, t, u, "border-box" === i.css(n, "boxSizing", !1, e), e);
                    return o && (f = ct.exec(r)) && "px" !== (f[3] || "px") && (n.style[t] = r, r = i.css(n, t)), pu(n, r, o)
                }
            }
        });
        i.cssHooks.marginLeft = hu(f.reliableMarginLeft, function(n, t) {
            if (t) return (parseFloat(lt(n, "marginLeft")) || n.getBoundingClientRect().left - br(n, {
                marginLeft: 0
            }, function() {
                return n.getBoundingClientRect().left
            })) + "px"
        });
        i.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(n, t) {
            i.cssHooks[n + t] = {
                expand: function(i) {
                    for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
                    return f
                }
            };
            su.test(n) || (i.cssHooks[n + t].set = pu)
        });
        i.fn.extend({
            css: function(n, t) {
                return v(this, function(n, t, r) {
                    var f, e, o = {},
                        u = 0;
                    if (Array.isArray(t)) {
                        for (f = ni(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                        return o
                    }
                    return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
                }, n, t, arguments.length > 1)
            }
        });
        i.Tween = s;
        s.prototype = {
            constructor: s,
            init: function(n, t, r, u, f, e) {
                this.elem = n;
                this.prop = r;
                this.easing = f || i.easing._default;
                this.options = t;
                this.start = this.now = this.cur();
                this.end = u;
                this.unit = e || (i.cssNumber[r] ? "" : "px")
            },
            cur: function() {
                var n = s.propHooks[this.prop];
                return n && n.get ? n.get(this) : s.propHooks._default.get(this)
            },
            run: function(n) {
                var t, r = s.propHooks[this.prop];
                return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this
            }
        };
        s.prototype.init.prototype = s.prototype;
        s.propHooks = {
            _default: {
                get: function(n) {
                    var t;
                    return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(n) {
                    i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || null == n.elem.style[i.cssProps[n.prop]] && !i.cssHooks[n.prop] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
                }
            }
        };
        s.propHooks.scrollTop = s.propHooks.scrollLeft = {
            set: function(n) {
                n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
            }
        };
        i.easing = {
            linear: function(n) {
                return n
            },
            swing: function(n) {
                return .5 - Math.cos(n * Math.PI) / 2
            },
            _default: "swing"
        };
        i.fx = s.prototype.init;
        i.fx.step = {};
        ku = /^(?:toggle|show|hide)$/;
        du = /queueHooks$/;
        i.Animation = i.extend(a, {
            tweeners: {
                "*": [function(n, t) {
                    var i = this.createTween(n, t);
                    return kr(i.elem, n, ct.exec(t), i), i
                }]
            },
            tweener: function(n, t) {
                i.isFunction(n) ? (t = n, n = ["*"]) : n = n.match(h);
                for (var r, u = 0, f = n.length; u < f; u++) r = n[u], a.tweeners[r] = a.tweeners[r] || [], a.tweeners[r].unshift(t)
            },
            prefilters: [ke],
            prefilter: function(n, t) {
                t ? a.prefilters.unshift(n) : a.prefilters.push(n)
            }
        });
        i.speed = function(n, t, r) {
            var u = n && "object" == typeof n ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return i.fx.off ? u.duration = 0 : "number" != typeof u.duration && (u.duration = u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default), null != u.queue && u.queue !== !0 || (u.queue = "fx"), u.old = u.complete, u.complete = function() {
                i.isFunction(u.old) && u.old.call(this);
                u.queue && i.dequeue(this, u.queue)
            }, u
        };
        i.fn.extend({
            fadeTo: function(n, t, i, r) {
                return this.filter(kt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, n, i, r)
            },
            animate: function(n, t, u, f) {
                var s = i.isEmptyObject(n),
                    o = i.speed(t, u, f),
                    e = function() {
                        var t = a(this, i.extend({}, n), o);
                        (s || r.get(this, "finish")) && t.stop(!0)
                    };
                return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
            },
            stop: function(n, t, u) {
                var f = function(n) {
                    var t = n.stop;
                    delete n.stop;
                    t(u)
                };
                return "string" != typeof n && (u = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                    var s = !0,
                        t = null != n && n + "queueHooks",
                        o = i.timers,
                        e = r.get(this);
                    if (t) e[t] && e[t].stop && f(e[t]);
                    else
                        for (t in e) e[t] && e[t].stop && du.test(t) && f(e[t]);
                    for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                    !s && u || i.dequeue(this, n)
                })
            },
            finish: function(n) {
                return n !== !1 && (n = n || "fx"), this.each(function() {
                    var t, e = r.get(this),
                        u = e[n + "queue"],
                        o = e[n + "queueHooks"],
                        f = i.timers,
                        s = u ? u.length : 0;
                    for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                    for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                    delete e.finish
                })
            }
        });
        i.each(["toggle", "show", "hide"], function(n, t) {
            var r = i.fn[t];
            i.fn[t] = function(n, i, u) {
                return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ii(t, !0), n, i, u)
            }
        });
        i.each({
            slideDown: ii("show"),
            slideUp: ii("hide"),
            slideToggle: ii("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(n, t) {
            i.fn[n] = function(n, i, r) {
                return this.animate(t, n, i, r)
            }
        });
        i.timers = [];
        i.fx.tick = function() {
            var r, n = 0,
                t = i.timers;
            for (ut = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
            t.length || i.fx.stop();
            ut = void 0
        };
        i.fx.timer = function(n) {
            i.timers.push(n);
            i.fx.start()
        };
        i.fx.interval = 13;
        i.fx.start = function() {
            ti || (ti = !0, ai())
        };
        i.fx.stop = function() {
            ti = null
        };
        i.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        i.fn.delay = function(t, r) {
                return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function(i, r) {
                    var u = n.setTimeout(i, t);
                    r.stop = function() {
                        n.clearTimeout(u)
                    }
                })
            },
            function() {
                var n = u.createElement("input"),
                    t = u.createElement("select"),
                    i = t.appendChild(u.createElement("option"));
                n.type = "checkbox";
                f.checkOn = "" !== n.value;
                f.optSelected = i.selected;
                n = u.createElement("input");
                n.value = "t";
                n.type = "radio";
                f.radioValue = "t" === n.value
            }();
        ft = i.expr.attrHandle;
        i.fn.extend({
            attr: function(n, t) {
                return v(this, i.attr, n, t, arguments.length > 1)
            },
            removeAttr: function(n) {
                return this.each(function() {
                    i.removeAttr(this, n)
                })
            }
        });
        i.extend({
            attr: function(n, t, r) {
                var u, f, e = n.nodeType;
                if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (f = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? tf : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : f && "set" in f && void 0 !== (u = f.set(n, r, t)) ? u : (n.setAttribute(t, r + ""), r) : f && "get" in f && null !== (u = f.get(n, t)) ? u : (u = i.find.attr(n, t), null == u ? void 0 : u))
            },
            attrHooks: {
                type: {
                    set: function(n, t) {
                        if (!f.radioValue && "radio" === t && l(n, "input")) {
                            var i = n.value;
                            return n.setAttribute("type", t), i && (n.value = i), t
                        }
                    }
                }
            },
            removeAttr: function(n, t) {
                var i, u = 0,
                    r = t && t.match(h);
                if (r && 1 === n.nodeType)
                    while (i = r[u++]) n.removeAttribute(i)
            }
        });
        tf = {
            set: function(n, t, r) {
                return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
            }
        };
        i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
            var r = ft[t] || i.find.attr;
            ft[t] = function(n, t, i) {
                var f, e, u = t.toLowerCase();
                return i || (e = ft[u], ft[u] = f, f = null != r(n, t, i) ? u : null, ft[u] = e), f
            }
        });
        rf = /^(?:input|select|textarea|button)$/i;
        uf = /^(?:a|area)$/i;
        i.fn.extend({
            prop: function(n, t) {
                return v(this, i.prop, n, t, arguments.length > 1)
            },
            removeProp: function(n) {
                return this.each(function() {
                    delete this[i.propFix[n] || n]
                })
            }
        });
        i.extend({
            prop: function(n, t, r) {
                var f, u, e = n.nodeType;
                if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(n) {
                        var t = i.find.attr(n, "tabindex");
                        return t ? parseInt(t, 10) : rf.test(n.nodeName) || uf.test(n.nodeName) && n.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        });
        f.optSelected || (i.propHooks.selected = {
            get: function(n) {
                var t = n.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(n) {
                var t = n.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        });
        i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            i.propFix[this.toLowerCase()] = this
        });
        i.fn.extend({
            addClass: function(n) {
                var o, t, r, u, f, s, e, c = 0;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).addClass(n.call(this, t, d(this)))
                });
                if ("string" == typeof n && n)
                    for (o = n.match(h) || []; t = this[c++];)
                        if (u = d(t), r = 1 === t.nodeType && " " + k(u) + " ") {
                            for (s = 0; f = o[s++];) r.indexOf(" " + f + " ") < 0 && (r += f + " ");
                            e = k(r);
                            u !== e && t.setAttribute("class", e)
                        } return this
            },
            removeClass: function(n) {
                var o, r, t, u, f, s, e, c = 0;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, d(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof n && n)
                    for (o = n.match(h) || []; r = this[c++];)
                        if (u = d(r), t = 1 === r.nodeType && " " + k(u) + " ") {
                            for (s = 0; f = o[s++];)
                                while (t.indexOf(" " + f + " ") > -1) t = t.replace(" " + f + " ", " ");
                            e = k(t);
                            u !== e && r.setAttribute("class", e)
                        } return this
            },
            toggleClass: function(n, t) {
                var u = typeof n;
                return "boolean" == typeof t && "string" === u ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                    i(this).toggleClass(n.call(this, r, d(this), t), t)
                }) : this.each(function() {
                    var t, e, f, o;
                    if ("string" === u)
                        for (e = 0, f = i(this), o = n.match(h) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                    else void 0 !== n && "boolean" !== u || (t = d(this), t && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || n === !1 ? "" : r.get(this, "__className__") || ""))
                })
            },
            hasClass: function(n) {
                for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                    if (1 === t.nodeType && (" " + k(d(t)) + " ").indexOf(i) > -1) return !0;
                return !1
            }
        });
        ff = /\r/g;
        i.fn.extend({
            val: function(n) {
                var t, r, f, u = this[0];
                return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                    var u;
                    1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
                        return null == n ? "" : n + ""
                    })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
                })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(ff, "") : null == r ? "" : r)) : void 0
            }
        });
        i.extend({
            valHooks: {
                option: {
                    get: function(n) {
                        var t = i.find.attr(n, "value");
                        return null != t ? t : k(i.text(n))
                    }
                },
                select: {
                    get: function(n) {
                        for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                            if (t = o[r], (t.selected || r === u) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
                                if (e = i(t).val(), f) return e;
                                s.push(e)
                            } return s
                    },
                    set: function(n, t) {
                        for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) && (u = !0);
                        return u || (n.selectedIndex = -1), e
                    }
                }
            }
        });
        i.each(["radio", "checkbox"], function() {
            i.valHooks[this] = {
                set: function(n, t) {
                    if (Array.isArray(t)) return n.checked = i.inArray(i(n).val(), t) > -1
                }
            };
            f.checkOn || (i.valHooks[this].get = function(n) {
                return null === n.getAttribute("value") ? "on" : n.value
            })
        });
        vi = /^(?:focusinfocus|focusoutblur)$/;
        i.extend(i.event, {
            trigger: function(t, f, e, o) {
                var w, s, c, b, a, v, l, p = [e || u],
                    h = yt.call(t, "type") ? t.type : t,
                    y = yt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = c = e = e || u, 3 !== e.nodeType && 8 !== e.nodeType && !vi.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = e), f = null == f ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                    if (!o && !l.noBubble && !i.isWindow(e)) {
                        for (b = l.delegateType || h, vi.test(b + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                        c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
                    }
                    for (w = 0;
                        (s = p[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && st(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
                    return t.type = h, o || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), f) !== !1 || !st(e) || a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = void 0, c && (e[a] = c)), t.result
                }
            },
            simulate: function(n, t, r) {
                var u = i.extend(new i.Event, r, {
                    type: n,
                    isSimulated: !0
                });
                i.event.trigger(u, null, t)
            }
        });
        i.fn.extend({
            trigger: function(n, t) {
                return this.each(function() {
                    i.event.trigger(n, t, this)
                })
            },
            triggerHandler: function(n, t) {
                var r = this[0];
                if (r) return i.event.trigger(n, t, r, !0)
            }
        });
        i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
            i.fn[t] = function(n, i) {
                return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }
        });
        i.fn.extend({
            hover: function(n, t) {
                return this.mouseenter(n).mouseleave(t || n)
            }
        });
        f.focusin = "onfocusin" in n;
        f.focusin || i.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, t) {
            var u = function(n) {
                i.event.simulate(t, n.target, i.event.fix(n))
            };
            i.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        f = r.access(i, t);
                    f || i.addEventListener(n, u, !0);
                    r.access(i, t, (f || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        f = r.access(i, t) - 1;
                    f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
                }
            }
        });
        var at = n.location,
            ef = i.now(),
            yi = /\?/;
        i.parseXML = function(t) {
            var r;
            if (!t || "string" != typeof t) return null;
            try {
                r = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (u) {
                r = void 0
            }
            return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
        };
        var ge = /\[\]$/,
            of = /\r?\n/g,
            no = /^(?:submit|button|image|reset|file)$/i,
            to = /^(?:input|select|textarea|keygen)/i;
        i.param = function(n, t) {
            var r, u = [],
                f = function(n, t) {
                    var r = i.isFunction(t) ? t() : t;
                    u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == r ? "" : r)
                };
            if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
                f(this.name, this.value)
            });
            else
                for (r in n) pi(r, n[r], t, f);
            return u.join("&")
        };
        i.fn.extend({
            serialize: function() {
                return i.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var n = i.prop(this, "elements");
                    return n ? i.makeArray(n) : this
                }).filter(function() {
                    var n = this.type;
                    return this.name && !i(this).is(":disabled") && to.test(this.nodeName) && !no.test(n) && (this.checked || !dr.test(n))
                }).map(function(n, t) {
                    var r = i(this).val();
                    return null == r ? null : Array.isArray(r) ? i.map(r, function(n) {
                        return {
                            name: t.name,
                            value: n.replace( of , "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: r.replace( of , "\r\n")
                    }
                }).get()
            }
        });
        var io = /%20/g,
            ro = /#.*$/,
            uo = /([?&])_=[^&]*/,
            fo = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            eo = /^(?:GET|HEAD)$/,
            oo = /^\/\//,
            sf = {},
            wi = {},
            hf = "*/".concat("*"),
            bi = u.createElement("a");
        return bi.href = at.href, i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: at.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(at.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": hf,
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
                    "text xml": i.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(n, t) {
                return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings, n)
            },
            ajaxPrefilter: cf(sf),
            ajaxTransport: cf(wi),
            ajax: function(t, r) {
                function b(t, r, u, h) {
                    var y, rt, g, p, b, l = r;
                    s || (s = !0, d && n.clearTimeout(d), a = void 0, k = h || "", e.readyState = t > 0 ? 4 : 0, y = t >= 200 && t < 300 || 304 === t, u && (p = so(f, e, u)), p = ho(f, p, e, y), y ? (f.ifModified && (b = e.getResponseHeader("Last-Modified"), b && (i.lastModified[o] = b), b = e.getResponseHeader("etag"), b && (i.etag[o] = b)), 204 === t || "HEAD" === f.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state, rt = p.data, g = p.error, y = !g)) : (g = l, !t && l || (l = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || l) + "", y ? tt.resolveWith(c, [rt, l, e]) : tt.rejectWith(c, [e, l, g]), e.statusCode(w), w = void 0, v && nt.trigger(y ? "ajaxSuccess" : "ajaxError", [e, f, y ? rt : g]), it.fireWith(c, [e, l]), v && (nt.trigger("ajaxComplete", [e, f]), --i.active || i.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (r = t, t = void 0);
                r = r || {};
                var a, o, k, y, d, l, s, v, g, p, f = i.ajaxSetup({}, r),
                    c = f.context || f,
                    nt = f.context && (c.nodeType || c.jquery) ? i(c) : i.event,
                    tt = i.Deferred(),
                    it = i.Callbacks("once memory"),
                    w = f.statusCode || {},
                    rt = {},
                    ut = {},
                    ft = "canceled",
                    e = {
                        readyState: 0,
                        getResponseHeader: function(n) {
                            var t;
                            if (s) {
                                if (!y)
                                    for (y = {}; t = fo.exec(k);) y[t[1].toLowerCase()] = t[2];
                                t = y[n.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return s ? k : null
                        },
                        setRequestHeader: function(n, t) {
                            return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this
                        },
                        overrideMimeType: function(n) {
                            return null == s && (f.mimeType = n), this
                        },
                        statusCode: function(n) {
                            var t;
                            if (n)
                                if (s) e.always(n[e.status]);
                                else
                                    for (t in n) w[t] = [w[t], n[t]];
                            return this
                        },
                        abort: function(n) {
                            var t = n || ft;
                            return a && a.abort(t), b(0, t), this
                        }
                    };
                if (tt.promise(e), f.url = ((t || f.url || at.href) + "").replace(oo, at.protocol + "//"), f.type = r.method || r.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(h) || [""], null == f.crossDomain) {
                    l = u.createElement("a");
                    try {
                        l.href = f.url;
                        l.href = l.href;
                        f.crossDomain = bi.protocol + "//" + bi.host != l.protocol + "//" + l.host
                    } catch (et) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = i.param(f.data, f.traditional)), lf(sf, f, r, e), s) return e;
                v = i.event && f.global;
                v && 0 == i.active++ && i.event.trigger("ajaxStart");
                f.type = f.type.toUpperCase();
                f.hasContent = !eo.test(f.type);
                o = f.url.replace(ro, "");
                f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(io, "+")) : (p = f.url.slice(o.length), f.data && (o += (yi.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (o = o.replace(uo, "$1"), p = (yi.test(o) ? "&" : "?") + "_=" + ef++ + p), f.url = o + p);
                f.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
                (f.data && f.hasContent && f.contentType !== !1 || r.contentType) && e.setRequestHeader("Content-Type", f.contentType);
                e.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + hf + "; q=0.01" : "") : f.accepts["*"]);
                for (g in f.headers) e.setRequestHeader(g, f.headers[g]);
                if (f.beforeSend && (f.beforeSend.call(c, e, f) === !1 || s)) return e.abort();
                if (ft = "abort", it.add(f.complete), e.done(f.success), e.fail(f.error), a = lf(wi, f, r, e)) {
                    if (e.readyState = 1, v && nt.trigger("ajaxSend", [e, f]), s) return e;
                    f.async && f.timeout > 0 && (d = n.setTimeout(function() {
                        e.abort("timeout")
                    }, f.timeout));
                    try {
                        s = !1;
                        a.send(rt, b)
                    } catch (et) {
                        if (s) throw et;
                        b(-1, et)
                    }
                } else b(-1, "No Transport");
                return e
            },
            getJSON: function(n, t, r) {
                return i.get(n, t, r, "json")
            },
            getScript: function(n, t) {
                return i.get(n, void 0, t, "script")
            }
        }), i.each(["get", "post"], function(n, t) {
            i[t] = function(n, r, u, f) {
                return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax(i.extend({
                    url: n,
                    type: t,
                    dataType: f,
                    data: r,
                    success: u
                }, i.isPlainObject(n) && n))
            }
        }), i._evalUrl = function(n) {
            return i.ajax({
                url: n,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, i.fn.extend({
            wrapAll: function(n) {
                var t;
                return this[0] && (i.isFunction(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                    return n
                }).append(this)), this
            },
            wrapInner: function(n) {
                return i.isFunction(n) ? this.each(function(t) {
                    i(this).wrapInner(n.call(this, t))
                }) : this.each(function() {
                    var t = i(this),
                        r = t.contents();
                    r.length ? r.wrapAll(n) : t.append(n)
                })
            },
            wrap: function(n) {
                var t = i.isFunction(n);
                return this.each(function(r) {
                    i(this).wrapAll(t ? n.call(this, r) : n)
                })
            },
            unwrap: function(n) {
                return this.parent(n).not("body").each(function() {
                    i(this).replaceWith(this.childNodes)
                }), this
            }
        }), i.expr.pseudos.hidden = function(n) {
            return !i.expr.pseudos.visible(n)
        }, i.expr.pseudos.visible = function(n) {
            return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
        }, i.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        }, af = {
            0: 200,
            1223: 204
        }, et = i.ajaxSettings.xhr(), f.cors = !!et && "withCredentials" in et, f.ajax = et = !!et, i.ajaxTransport(function(t) {
            var i, r;
            if (f.cors || et && !t.crossDomain) return {
                send: function(u, f) {
                    var o, e = t.xhr();
                    if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) e[o] = t.xhrFields[o];
                    t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                    t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                    for (o in u) e.setRequestHeader(o, u[o]);
                    i = function(n) {
                        return function() {
                            i && (i = r = e.onload = e.onerror = e.onabort = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(af[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                                binary: e.response
                            } : {
                                text: e.responseText
                            }, e.getAllResponseHeaders()))
                        }
                    };
                    e.onload = i();
                    r = e.onerror = i("error");
                    void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() {
                        4 === e.readyState && n.setTimeout(function() {
                            i && r()
                        })
                    };
                    i = i("abort");
                    try {
                        e.send(t.hasContent && t.data || null)
                    } catch (s) {
                        if (i) throw s;
                    }
                },
                abort: function() {
                    i && i()
                }
            }
        }), i.ajaxPrefilter(function(n) {
            n.crossDomain && (n.contents.script = !1)
        }), i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(n) {
                    return i.globalEval(n), n
                }
            }
        }), i.ajaxPrefilter("script", function(n) {
            void 0 === n.cache && (n.cache = !1);
            n.crossDomain && (n.type = "GET")
        }), i.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var r, t;
                return {
                    send: function(f, e) {
                        r = i("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", t = function(n) {
                            r.remove();
                            t = null;
                            n && e("error" === n.type ? 404 : 200, n.type)
                        });
                        u.head.appendChild(r[0])
                    },
                    abort: function() {
                        t && t()
                    }
                }
            }
        }), di = [], ri = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var n = di.pop() || i.expando + "_" + ef++;
                return this[n] = !0, n
            }
        }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
            var f, e, o, s = t.jsonp !== !1 && (ri.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ri.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ri, "$1" + f) : t.jsonp !== !1 && (t.url += (yi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
                return o || i.error(f + " was not called"), o[0]
            }, t.dataTypes[0] = "json", e = n[f], n[f] = function() {
                o = arguments
            }, u.always(function() {
                void 0 === e ? i(n).removeProp(f) : n[f] = e;
                t[f] && (t.jsonpCallback = r.jsonpCallback, di.push(f));
                o && i.isFunction(e) && e(o[0]);
                o = e = void 0
            }), "script"
        }), f.createHTMLDocument = function() {
            var n = u.implementation.createHTMLDocument("").body;
            return n.innerHTML = "<form><\/form><form><\/form>", 2 === n.childNodes.length
        }(), i.parseHTML = function(n, t, r) {
            if ("string" != typeof n) return [];
            "boolean" == typeof t && (r = t, t = !1);
            var s, e, o;
            return t || (f.createHTMLDocument ? (t = u.implementation.createHTMLDocument(""), s = t.createElement("base"), s.href = u.location.href, t.head.appendChild(s)) : t = u), e = ei.exec(n), o = !r && [], e ? [t.createElement(e[1])] : (e = iu([n], t, o), o && o.length && i(o).remove(), i.merge([], e.childNodes))
        }, i.fn.load = function(n, t, r) {
            var u, o, s, f = this,
                e = n.indexOf(" ");
            return e > -1 && (u = k(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (o = "POST"), f.length > 0 && i.ajax({
                url: n,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(n) {
                s = arguments;
                f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
            }).always(r && function(n, t) {
                f.each(function() {
                    r.apply(this, s || [n.responseText, t, n])
                })
            }), this
        }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
            i.fn[t] = function(n) {
                return this.on(t, n)
            }
        }), i.expr.pseudos.animated = function(n) {
            return i.grep(i.timers, function(t) {
                return n === t.elem
            }).length
        }, i.offset = {
            setOffset: function(n, t, r) {
                var e, o, s, h, u, c, v, l = i.css(n, "position"),
                    a = i(n),
                    f = {};
                "static" === l && (n.style.position = "relative");
                u = a.offset();
                s = i.css(n, "top");
                c = i.css(n, "left");
                v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
                v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
                i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
                null != t.top && (f.top = t.top - u.top + h);
                null != t.left && (f.left = t.left - u.left + o);
                "using" in t ? t.using.call(n, f) : a.css(f)
            }
        }, i.fn.extend({
            offset: function(n) {
                if (arguments.length) return void 0 === n ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
                var r, u, f, e, t = this[0];
                if (t) return t.getClientRects().length ? (f = t.getBoundingClientRect(), r = t.ownerDocument, u = r.documentElement, e = r.defaultView, {
                    top: f.top + e.pageYOffset - u.clientTop,
                    left: f.left + e.pageXOffset - u.clientLeft
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var t, r, u = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (t = this.offsetParent(), r = this.offset(), l(t[0], "html") || (n = t.offset()), n = {
                        top: n.top + i.css(t[0], "borderTopWidth", !0),
                        left: n.left + i.css(t[0], "borderLeftWidth", !0)
                    }), {
                        top: r.top - n.top - i.css(u, "marginTop", !0),
                        left: r.left - n.left - i.css(u, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent;
                    return n || dt
                })
            }
        }), i.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(n, t) {
            var r = "pageYOffset" === t;
            i.fn[n] = function(u) {
                return v(this, function(n, u, f) {
                    var e;
                    return i.isWindow(n) ? e = n : 9 === n.nodeType && (e = n.defaultView), void 0 === f ? e ? e[t] : n[u] : void(e ? e.scrollTo(r ? e.pageXOffset : f, r ? f : e.pageYOffset) : n[u] = f)
                }, n, u, arguments.length)
            }
        }), i.each(["top", "left"], function(n, t) {
            i.cssHooks[t] = hu(f.pixelPosition, function(n, r) {
                if (r) return r = lt(n, t), li.test(r) ? i(n).position()[t] + "px" : r
            })
        }), i.each({
            Height: "height",
            Width: "width"
        }, function(n, t) {
            i.each({
                padding: "inner" + n,
                content: t,
                "": "outer" + n
            }, function(r, u) {
                i.fn[u] = function(f, e) {
                    var o = arguments.length && (r || "boolean" != typeof f),
                        s = r || (f === !0 || e === !0 ? "margin" : "border");
                    return v(this, function(t, r, f) {
                        var e;
                        return i.isWindow(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
                    }, t, o ? f : void 0, o)
                }
            })
        }), i.fn.extend({
            bind: function(n, t, i) {
                return this.on(n, null, t, i)
            },
            unbind: function(n, t) {
                return this.off(n, null, t)
            },
            delegate: function(n, t, i, r) {
                return this.on(t, n, i, r)
            },
            undelegate: function(n, t, i) {
                return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
            }
        }), i.holdReady = function(n) {
            n ? i.readyWait++ : i.ready(!0)
        }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = l, "function" == typeof define && define.amd && define("jquery", [], function() {
            return i
        }), vf = n.jQuery, yf = n.$, i.noConflict = function(t) {
            return n.$ === i && (n.$ = yf), t && n.jQuery === i && (n.jQuery = vf), i
        }, t || (n.jQuery = n.$ = i), i
    }), typeof jQuery == "undefined") throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || t[0] == 1 && t[1] == 9 && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery); + function(n) {
    "use strict";

    function t() {
        var i = document.createElement("bootstrap"),
            n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var t in n)
            if (i.style[t] !== undefined) return {
                end: n[t]
            };
        return !1
    }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1,
            u = this,
            r;
        n(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return r = function() {
            i || n(u).trigger(n.support.transition.end)
        }, setTimeout(r, t), this
    };
    n(function() {
        (n.support.transition = t(), n.support.transition) && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function u(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            typeof i == "string" && u[i].call(r)
        })
    }
    var i = '[data-dismiss="alert"]',
        t = function(t) {
            n(t).on("click", i, this.close)
        },
        r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function(i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var f = n(this),
            u = f.attr("data-target"),
            r;
        (u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, "")), r = n(u === "#" ? [] : u), i && i.preventDefault(), r.length || (r = f.closest(".alert")), r.trigger(i = n.Event("close.bs.alert")), i.isDefaultPrevented()) || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    };
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function() {
        return n.fn.alert = r, this
    };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.button"),
                f = typeof i == "object" && i;
            r || u.data("bs.button", r = new t(this, f));
            i == "toggle" ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.isLoading = !1
        },
        r;
    t.VERSION = "3.3.7";
    t.DEFAULTS = {
        loadingText: "loading..."
    };
    t.prototype.setState = function(t) {
        var i = "disabled",
            r = this.$element,
            f = r.is("input") ? "val" : "html",
            u = r.data();
        t += "Text";
        u.resetText == null && r.data("resetText", r[f]());
        setTimeout(n.proxy(function() {
            r[f](u[t] == null ? this.options[t] : u[t]);
            t == "loadingText" ? (this.isLoading = !0, r.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    };
    t.prototype.toggle = function() {
        var t = !0,
            i = this.$element.closest('[data-toggle="buttons"]'),
            n;
        i.length ? (n = this.$element.find("input"), n.prop("type") == "radio" ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : n.prop("type") == "checkbox" && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
    };
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function() {
        return n.fn.button = r, this
    };
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var r = n(t.target).closest(".btn");
        i.call(r, "toggle");
        n(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.carousel"),
                f = n.extend({}, t.DEFAULTS, u.data(), typeof i == "object" && i),
                e = typeof i == "string" ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this, f));
            typeof i == "number" ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    var t = function(t, i) {
            this.$element = n(t);
            this.$indicators = this.$element.find(".carousel-indicators");
            this.options = i;
            this.paused = null;
            this.sliding = null;
            this.interval = null;
            this.$active = null;
            this.$items = null;
            this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
            this.options.pause != "hover" || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
        },
        u, r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    t.prototype.keydown = function(n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            n.preventDefault()
        }
    };
    t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    };
    t.prototype.getItemIndex = function(n) {
        return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
    };
    t.prototype.getItemForDirection = function(n, t) {
        var i = this.getItemIndex(t),
            f = n == "prev" && i === 0 || n == "next" && i == this.$items.length - 1,
            r, u;
        return f && !this.options.wrap ? t : (r = n == "prev" ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u))
    };
    t.prototype.to = function(n) {
        var i = this,
            t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(n > this.$items.length - 1) && !(n < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            i.to(n)
        }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    };
    t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    };
    t.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    };
    t.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    };
    t.prototype.slide = function(i, r) {
        var e = this.$element.find(".item.active"),
            u = r || this.getItemForDirection(i, e),
            l = this.interval,
            f = i == "next" ? "left" : "right",
            a = this,
            o, s, h, c;
        return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), this.$element.trigger(s), s.isDefaultPrevented()) ? void 0 : (this.sliding = !0, l && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function() {
            u.removeClass([i, f].join(" ")).addClass("active");
            e.removeClass(["active", f].join(" "));
            a.sliding = !1;
            setTimeout(function() {
                a.$element.trigger(c)
            }, 0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this)
    };
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function() {
        return n.fn.carousel = u, this
    };
    r = function(t) {
        var o, r = n(this),
            u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
            e, f;
        u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), typeof i == "object" && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
            this.transitioning = null;
            this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
            this.options.toggle && this.toggle()
        },
        u;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {
        toggle: !0
    };
    t.prototype.dimension = function() {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    };
    t.prototype.show = function() {
        var f, r, e, u, o, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !r || !r.length || (f = r.data("bs.collapse"), !f || !f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented())) {
            if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                }, !n.support.transition) return o.call(this);
            s = n.camelCase(["scroll", u].join("-"));
            this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    };
    t.prototype.hide = function() {
        var r, i, u;
        if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) {
            if (i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function() {
                    this.transitioning = 0;
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                }, !n.support.transition) return u.call(this);
            this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION)
        }
    };
    t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    t.prototype.getParent = function() {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
            var u = n(i);
            this.addAriaAndCollapsedClass(r(u), u)
        }, this)).end()
    };
    t.prototype.addAriaAndCollapsedClass = function(n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function() {
        return n.fn.collapse = u, this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u),
            e = f.data("bs.collapse"),
            o = e ? "toggle" : u.data();
        i.call(f, o)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }

    function u(t) {
        t && t.which === 3 || (n(e).remove(), n(i).each(function() {
            var u = n(this),
                i = r(u),
                f = {
                    relatedTarget: this
                };
            i.hasClass("open") && (t && t.type == "click" && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented()) || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f))))
        }))
    }

    function o(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            typeof i == "string" && u[i].call(r)
        })
    }
    var e = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        t = function(t) {
            n(t).on("click.bs.dropdown", this.toggle)
        },
        f;
    t.VERSION = "3.3.7";
    t.prototype.toggle = function(t) {
        var f = n(this),
            i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = r(f), o = i.hasClass("open"), u(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length) n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u);
                if (e = {
                        relatedTarget: this
                    }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
            }
            return !1
        }
    };
    t.prototype.keydown = function(t) {
        var e, o, s, h, f, u;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = r(e), s = o.hasClass("open"), !s && t.which != 27 || s && t.which == 27) return t.which == 27 && o.find(i).trigger("focus"), e.trigger("click");
            (h = " li:not(.disabled):visible a", f = o.find(".dropdown-menu" + h), f.length) && (u = f.index(t.target), t.which == 38 && u > 0 && u--, t.which == 40 && u < f.length - 1 && u++, ~u || (u = 0), f.eq(u).trigger("focus"))
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = o;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery); + function(n) {
    "use strict";

    function i(i, r) {
        return this.each(function() {
            var f = n(this),
                u = f.data("bs.modal"),
                e = n.extend({}, t.DEFAULTS, f.data(), typeof i == "object" && i);
            u || f.data("bs.modal", u = new t(this, e));
            typeof i == "string" ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function(t, i) {
            this.options = i;
            this.$body = n(document.body);
            this.$element = n(t);
            this.$dialog = this.$element.find(".modal-dialog");
            this.$backdrop = null;
            this.isShown = null;
            this.originalBodyPad = null;
            this.scrollbarWidth = 0;
            this.ignoreBackdropClick = !1;
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        },
        r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    t.prototype.toggle = function(n) {
        return this.isShown ? this.hide() : this.show(n)
    };
    t.prototype.show = function(i) {
        var r = this,
            u = n.Event("show.bs.modal", {
                relatedTarget: i
            });
        if (this.$element.trigger(u), !this.isShown && !u.isDefaultPrevented()) {
            this.isShown = !0;
            this.checkScrollbar();
            this.setScrollbar();
            this.$body.addClass("modal-open");
            this.escape();
            this.resize();
            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this));
            this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                    n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
                })
            });
            this.backdrop(function() {
                var f = n.support.transition && r.$element.hasClass("fade"),
                    u;
                r.$element.parent().length || r.$element.appendTo(r.$body);
                r.$element.show().scrollTop(0);
                r.adjustDialog();
                f && r.$element[0].offsetWidth;
                r.$element.addClass("in");
                r.enforceFocus();
                u = n.Event("shown.bs.modal", {
                    relatedTarget: i
                });
                f ? r.$dialog.one("bsTransitionEnd", function() {
                    r.$element.trigger("focus").trigger(u)
                }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
            })
        }
    };
    t.prototype.hide = function(i) {
        (i && i.preventDefault(), i = n.Event("hide.bs.modal"), this.$element.trigger(i), this.isShown && !i.isDefaultPrevented()) && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    };
    t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            document === n.target || this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    };
    t.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
            n.which == 27 && this.hide()
        }, this));
        else this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    t.prototype.resize = function() {
        if (this.isShown) n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this));
        else n(window).off("resize.bs.modal")
    };
    t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide();
        this.backdrop(function() {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal")
        })
    };
    t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    t.prototype.backdrop = function(i) {
        var e = this,
            f = this.$element.hasClass("fade") ? "fade" : "",
            r, u;
        if (this.isShown && this.options.backdrop) {
            r = n.support.transition && f;
            this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = !1;
                    return
                }
                n.target === n.currentTarget && (this.options.backdrop == "static" ? this.$element[0].focus() : this.hide())
            }, this));
            if (r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function() {
            e.removeBackdrop();
            i && i()
        }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    };
    t.prototype.handleUpdate = function() {
        this.adjustDialog()
    };
    t.prototype.adjustDialog = function() {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    };
    t.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    };
    t.prototype.checkScrollbar = function() {
        var n = window.innerWidth,
            t;
        n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
        this.bodyIsOverflowing = document.body.clientWidth < n;
        this.scrollbarWidth = this.measureScrollbar()
    };
    t.prototype.setScrollbar = function() {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    };
    t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    };
    t.prototype.measureScrollbar = function() {
        var n = document.createElement("div"),
            t;
        return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
    };
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function() {
        return n.fn.modal = r, this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var r = n(this),
            f = r.attr("href"),
            u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
            e = u.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(f) && f
            }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function(n) {
            if (!n.isDefaultPrevented()) u.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tooltip"),
                f = typeof i == "object" && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.tooltip", r = new t(this, f)), typeof i == "string" && r[i]())
        })
    }
    var t = function(n, t) {
            this.type = null;
            this.options = null;
            this.enabled = null;
            this.timeout = null;
            this.hoverState = null;
            this.$element = null;
            this.inState = null;
            this.init("tooltip", n, t)
        },
        i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    t.prototype.init = function(t, i, r) {
        var f, e, u, o, s;
        if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (f = this.options.trigger.split(" "), e = f.length; e--;)
            if (u = f[e], u == "click") this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else if (u != "manual") {
            o = u == "hover" ? "mouseenter" : "focusin";
            s = u == "hover" ? "mouseleave" : "focusout";
            this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this));
            this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this))
        }
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.getOptions = function(t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    };
    t.prototype.getDelegateOptions = function() {
        var t = {},
            i = this.getDefaults();
        return this._options && n.each(this._options, function(n, r) {
            i[n] != r && (t[n] = r)
        }), t
    };
    t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState[t.type == "focusin" ? "focus" : "hover"] = !0), i.tip().hasClass("in") || i.hoverState == "in") {
            i.hoverState = "in";
            return
        }
        if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
        i.timeout = setTimeout(function() {
            i.hoverState == "in" && i.show()
        }, i.options.delay.show)
    };
    t.prototype.isInStateTrue = function() {
        for (var n in this.inState)
            if (this.inState[n]) return !0;
        return !1
    };
    t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState[t.type == "focusout" ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
            if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
            i.timeout = setTimeout(function() {
                i.hoverState == "out" && i.hide()
            }, i.options.delay.hide)
        }
    };
    t.prototype.show = function() {
        var c = n.Event("show.bs." + this.type),
            l, p, e, w, h;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
            var u = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent();
            r.attr("id", a);
            this.$element.attr("aria-describedby", a);
            this.options.animation && r.addClass("fade");
            var i = typeof this.options.placement == "function" ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                v = /\s?auto?\s?/i,
                y = v.test(i);
            y && (i = i.replace(v, "") || "top");
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this);
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition(),
                o = r[0].offsetWidth,
                s = r[0].offsetHeight;
            y && (p = i, e = this.getPosition(this.$viewport), i = i == "bottom" && f.bottom + s > e.bottom ? "top" : i == "top" && f.top - s < e.top ? "bottom" : i == "right" && f.right + o > e.width ? "left" : i == "left" && f.left - o < e.left ? "right" : i, r.removeClass(p).addClass(i));
            w = this.getCalculatedOffset(i, f, o, s);
            this.applyPlacement(w, i);
            h = function() {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                n == "out" && u.leave(u)
            };
            n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
        }
    };
    t.prototype.applyPlacement = function(t, i) {
        var r = this.tip(),
            l = r[0].offsetWidth,
            e = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10),
            h, f, u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top += o;
        t.left += s;
        n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0);
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        i == "top" && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? t.left += u.left : t.top += u.top;
        var c = /top|bottom/.test(i),
            a = c ? u.left * 2 - l + h : u.top * 2 - e + f,
            v = c ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], c)
    };
    t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        n.removeClass("fade in top bottom left right")
    };
    t.prototype.hide = function(i) {
        function e() {
            r.hoverState != "in" && u.detach();
            r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type);
            i && i()
        }
        var r = this,
            u = n(this.$tip),
            f = n.Event("hide.bs." + this.type);
        if (this.$element.trigger(f), !f.isDefaultPrevented()) return u.removeClass("in"), n.support.transition && u.hasClass("fade") ? u.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e(), this.hoverState = null, this
    };
    t.prototype.fixTitle = function() {
        var n = this.$element;
        (n.attr("title") || typeof n.attr("data-original-title") != "string") && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    };
    t.prototype.hasContent = function() {
        return this.getTitle()
    };
    t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var r = t[0],
            u = r.tagName == "BODY",
            i = r.getBoundingClientRect();
        i.width == null && (i = n.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var f = window.SVGElement && r instanceof window.SVGElement,
            e = u ? {
                top: 0,
                left: 0
            } : f ? null : t.offset(),
            o = {
                scroll: u ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            s = u ? {
                width: n(window).width(),
                height: n(window).height()
            } : null;
        return n.extend({}, i, o, s, e)
    };
    t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return n == "bottom" ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : n == "top" ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : n == "left" ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    };
    t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
        var f = {
                top: 0,
                left: 0
            },
            e, u, o, s, h, c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)), f) : f
    };
    t.prototype.getTitle = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title)
    };
    t.prototype.getUID = function(n) {
        do n += ~~(Math.random() * 1e6); while (document.getElementById(n));
        return n
    };
    t.prototype.tip = function() {
        if (!this.$tip && (this.$tip = n(this.options.template), this.$tip.length != 1)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    t.prototype.enable = function() {
        this.enabled = !0
    };
    t.prototype.disable = function() {
        this.enabled = !1
    };
    t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    t.prototype.toggle = function(t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
        t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    };
    t.prototype.destroy = function() {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            n.$element.off("." + n.type).removeData("bs." + n.type);
            n.$tip && n.$tip.detach();
            n.$tip = null;
            n.$arrow = null;
            n.$viewport = null;
            n.$element = null
        })
    };
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.popover"),
                f = typeof i == "object" && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.popover", r = new t(this, f)), typeof i == "string" && r[i]())
        })
    }
    var t = function(n, t) {
            this.init("popover", n, t)
        },
        i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.7";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            i = this.getTitle(),
            t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i);
        n.find(".popover-content").children().detach().end()[this.options.html ? typeof t == "string" ? "html" : "append" : "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    };
    t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    t.prototype.getContent = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-content") || (typeof n.content == "function" ? n.content.call(t[0]) : n.content)
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function() {
        return n.fn.popover = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function t(i, r) {
        this.$body = n(document.body);
        this.$scrollElement = n(i).is(document.body) ? n(window) : n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh();
        this.process()
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.scrollspy"),
                f = typeof i == "object" && i;
            r || u.data("bs.scrollspy", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    }
    t.VERSION = "3.3.7";
    t.DEFAULTS = {
        offset: 10
    };
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    t.prototype.refresh = function() {
        var t = this,
            i = "offset",
            r = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function() {
            var f = n(this),
                u = f.data("target") || f.attr("href"),
                t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [
                [t[i]().top + r, u]
            ] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    };
    t.prototype.process = function() {
        var i = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.getScrollHeight(),
            e = this.options.offset + f - this.$scrollElement.height(),
            t = this.offsets,
            r = this.targets,
            u = this.activeTarget,
            n;
        if (this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0]) return this.activeTarget = null, this.clear();
        for (n = t.length; n--;) u != r[n] && i >= t[n] && (t[n + 1] === undefined || i < t[n + 1]) && this.activate(r[n])
    };
    t.prototype.activate = function(t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    };
    t.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = r, this
    };
    n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            typeof i == "string" && r[i]()
        })
    }
    var t = function(t) {
            this.element = n(t)
        },
        u, i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function() {
        var t = this.element,
            f = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"),
            u;
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a"),
                e = n.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = n.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function() {
                r.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                });
                t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: r[0]
                })
            }))
        }
    };
    t.prototype.activate = function(i, r, u) {
        function o() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            e ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }
        var f = r.find("> .active"),
            e = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && e ? f.one("bsTransitionEnd", o).emulateTransitionEnd(t.TRANSITION_DURATION) : o();
        f.removeClass("in")
    };
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function() {
        return n.fn.tab = u, this
    };
    i = function(t) {
        t.preventDefault();
        r.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.affix"),
                f = typeof i == "object" && i;
            r || u.data("bs.affix", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    }
    var t = function(i, r) {
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
            this.$element = n(i);
            this.affixed = null;
            this.unpin = null;
            this.pinnedOffset = null;
            this.checkPosition()
        },
        r;
    t.VERSION = "3.3.7";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {
        offset: 0,
        target: window
    };
    t.prototype.getState = function(n, t, i, r) {
        var u = this.$target.scrollTop(),
            f = this.$element.offset(),
            e = this.$target.height();
        if (i != null && this.affixed == "top") return u < i ? "top" : !1;
        if (this.affixed == "bottom") return i != null ? u + this.unpin <= f.top ? !1 : "bottom" : u + e <= n - r ? !1 : "bottom";
        var o = this.affixed == null,
            s = o ? u : f.top,
            h = o ? e : t;
        return i != null && u <= i ? "top" : r != null && s + h >= n - r ? "bottom" : !1
    };
    t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    };
    t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    };
    t.prototype.checkPosition = function() {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height(),
                r = this.options.offset,
                f = r.top,
                u = r.bottom,
                h = Math.max(n(document).height(), n(document.body).height());
            if (typeof r != "object" && (u = f = r), typeof f == "function" && (f = r.top(this.$element)), typeof u == "function" && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) {
                if (this.unpin != null && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return;
                this.affixed = i;
                this.unpin = i == "bottom" ? this.getPinnedOffset() : null;
                this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            i == "bottom" && this.$element.offset({
                top: h - s - u
            })
        }
    };
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function() {
        return n.fn.affix = r, this
    };
    n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var r = n(this),
                t = r.data();
            t.offset = t.offset || {};
            t.offsetBottom != null && (t.offset.bottom = t.offsetBottom);
            t.offsetTop != null && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
}(jQuery),
function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(window.jQuery || window.Zepto)
}(function(n) {
    var h = "Close",
        pt = "BeforeClose",
        ti = "AfterClose",
        ii = "BeforeAppend",
        it = "MarkupParse",
        rt = "Open",
        wt = "Change",
        ut = "mfp",
        u = "." + ut,
        p = "mfp-ready",
        bt = "mfp-removing",
        ft = "mfp-prevent-close",
        t, w = function() {},
        et = !!window.jQuery,
        ot, f = n(window),
        o, b, c, kt, r = function(n, i) {
            t.ev.on(ut + n + u, i)
        },
        e = function(t, i, r, u) {
            var f = document.createElement("div");
            return f.className = "mfp-" + t, r && (f.innerHTML = r), u ? i && i.appendChild(f) : (f = n(f), i && f.appendTo(i)), f
        },
        i = function(i, r) {
            t.ev.triggerHandler(ut + i, r);
            t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, n.isArray(r) ? r : [r]))
        },
        st = function(i) {
            return i === kt && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = n(t.st.closeMarkup.replace("%title%", t.st.tClose)), kt = i), t.currTemplate.closeBtn
        },
        ht = function() {
            n.magnificPopup.instance || (t = new w, t.init(), n.magnificPopup.instance = t)
        },
        ri = function() {
            var n = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (n.transition !== undefined) return !0;
            while (t.length)
                if (t.pop() + "Transition" in n) return !0;
            return !1
        },
        k, a, d, g, ct, s, gt, at, ni, nt, yt, tt;
    w.prototype = {
        constructor: w,
        init: function() {
            var i = navigator.appVersion;
            t.isIE7 = i.indexOf("MSIE 7.") !== -1;
            t.isIE8 = i.indexOf("MSIE 8.") !== -1;
            t.isLowIE = t.isIE7 || t.isIE8;
            t.isAndroid = /android/gi.test(i);
            t.isIOS = /iphone|ipad|ipod/gi.test(i);
            t.supportsTransition = ri();
            t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
            o = n(document);
            t.popupsCache = {}
        },
        open: function(s) {
            var h, w, l, b, a, k, v, d, y;
            if (s.isObj === !1) {
                for (t.items = s.items.toArray(), t.index = 0, w = s.items, h = 0; h < w.length; h++)
                    if (l = w[h], l.parsed && (l = l.el[0]), l === s.el[0]) {
                        t.index = h;
                        break
                    }
            } else t.items = n.isArray(s.items) ? s.items : [s.items], t.index = s.index || 0;
            if (t.isOpen) {
                t.updateItemHTML();
                return
            }
            for (t.types = [], c = "", t.ev = s.mainEl && s.mainEl.length ? s.mainEl.eq(0) : o, s.key ? (t.popupsCache[s.key] || (t.popupsCache[s.key] = {}), t.currTemplate = t.popupsCache[s.key]) : t.currTemplate = {}, t.st = n.extend(!0, {}, n.magnificPopup.defaults, s), t.fixedContentPos = t.st.fixedContentPos === "auto" ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = e("bg").on("click" + u, function() {
                    t.close()
                }), t.wrap = e("wrap").attr("tabindex", -1).on("click" + u, function(n) {
                    t._checkIfClose(n.target) && t.close()
                }), t.container = e("container", t.wrap)), t.contentContainer = e("content"), t.st.preloader && (t.preloader = e("preloader", t.container, t.st.tLoading)), b = n.magnificPopup.modules, h = 0; h < b.length; h++) a = b[h], a = a.charAt(0).toUpperCase() + a.slice(1), t["init" + a].call(t);
            if (i("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (r(it, function(n, t, i, r) {
                    i.close_replaceWith = st(r.type)
                }), c += " mfp-close-btn-in") : t.wrap.append(st())), t.st.alignTop && (c += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                    overflow: t.st.overflowY,
                    overflowX: "hidden",
                    overflowY: t.st.overflowY
                }) : t.wrap.css({
                    top: f.scrollTop(),
                    position: "absolute"
                }), t.st.fixedBgPos !== !1 && (t.st.fixedBgPos !== "auto" || t.fixedContentPos) || t.bgOverlay.css({
                    height: o.height(),
                    position: "absolute"
                }), t.st.enableEscapeKey) o.on("keyup" + u, function(n) {
                n.keyCode === 27 && t.close()
            });
            f.on("resize" + u, function() {
                t.updateSize()
            });
            return t.st.closeOnContentClick || (c += " mfp-auto-cursor"), c && t.wrap.addClass(c), k = t.wH = f.height(), v = {}, t.fixedContentPos && t._hasScrollBar(k) && (d = t._getScrollbarSize(), d && (v.marginRight = d)), t.fixedContentPos && (t.isIE7 ? n("body, html").css("overflow", "hidden") : v.overflow = "hidden"), y = t.st.mainClass, t.isIE7 && (y += " mfp-ie7"), y && t._addClassToMFP(y), t.updateItemHTML(), i("BuildControls"), n("html").css(v), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || n(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(p), t._setFocus()) : t.bgOverlay.addClass(p);
                o.on("focusin" + u, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(k), i(rt), s
        },
        close: function() {
            t.isOpen && (i(pt), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(bt), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            var r, f;
            i(h);
            r = bt + " " + p + " ";
            t.bgOverlay.detach();
            t.wrap.detach();
            t.container.empty();
            t.st.mainClass && (r += t.st.mainClass + " ");
            t._removeClassFromMFP(r);
            t.fixedContentPos && (f = {
                marginRight: ""
            }, t.isIE7 ? n("body, html").css("overflow", "") : f.overflow = "", n("html").css(f));
            o.off("keyup" + u + " focusin" + u);
            t.ev.off(u);
            t.wrap.attr("class", "mfp-wrap").removeAttr("style");
            t.bgOverlay.attr("class", "mfp-bg");
            t.container.attr("class", "mfp-container");
            t.st.showCloseBtn && (!t.st.closeBtnInside || t.currTemplate[t.currItem.type] === !0) && t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach();
            t._lastFocusedEl && n(t._lastFocusedEl).focus();
            t.currItem = null;
            t.content = null;
            t.currTemplate = null;
            t.prevHeight = 0;
            i(ti)
        },
        updateSize: function(n) {
            if (t.isIOS) {
                var u = document.documentElement.clientWidth / window.innerWidth,
                    r = window.innerHeight * u;
                t.wrap.css("height", r);
                t.wH = r
            } else t.wH = n || f.height();
            t.fixedContentPos || t.wrap.css("height", t.wH);
            i("Resize")
        },
        updateItemHTML: function() {
            var u = t.items[t.index],
                r, f, e;
            t.contentContainer.detach();
            t.content && t.content.detach();
            u.parsed || (u = t.parseEl(t.index));
            r = u.type;
            i("BeforeChange", [t.currItem ? t.currItem.type : "", r]);
            t.currItem = u;
            t.currTemplate[r] || (f = t.st[r] ? t.st[r].markup : !1, i("FirstMarkupParse", f), t.currTemplate[r] = f ? n(f) : !0);
            b && b !== u.type && t.container.removeClass("mfp-" + b + "-holder");
            e = t["get" + r.charAt(0).toUpperCase() + r.slice(1)](u, t.currTemplate[r]);
            t.appendContent(e, r);
            u.preloaded = !0;
            i(wt, u);
            b = u.type;
            t.container.prepend(t.contentContainer);
            i("AfterChange")
        },
        appendContent: function(n, r) {
            t.content = n;
            n ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[r] === !0 ? t.content.find(".mfp-close").length || t.content.append(st()) : t.content = n : t.content = "";
            i(ii);
            t.container.addClass("mfp-" + r + "-holder");
            t.contentContainer.append(t.content)
        },
        parseEl: function(r) {
            var u = t.items[r],
                o, e, f;
            if (u.tagName ? u = {
                    el: n(u)
                } : (o = u.type, u = {
                    data: u,
                    src: u.src
                }), u.el) {
                for (e = t.types, f = 0; f < e.length; f++)
                    if (u.el.hasClass("mfp-" + e[f])) {
                        o = e[f];
                        break
                    } u.src = u.el.attr("data-mfp-src");
                u.src || (u.src = u.el.attr("href"))
            }
            return u.type = o || t.st.type || "inline", u.index = r, u.parsed = !0, t.items[r] = u, i("ElementParse", u), t.items[r]
        },
        addGroup: function(n, i) {
            var u = function(r) {
                    r.mfpEl = this;
                    t._openClick(r, n, i)
                },
                r;
            if (i || (i = {}), r = "click.magnificPopup", i.mainEl = n, i.items) {
                i.isObj = !0;
                n.off(r).on(r, u)
            } else if (i.isObj = !1, i.delegate) n.off(r).on(r, i.delegate, u);
            else {
                i.items = n;
                n.off(r).on(r, u)
            }
        },
        _openClick: function(i, r, u) {
            var o = u.midClick !== undefined ? u.midClick : n.magnificPopup.defaults.midClick,
                e;
            if (o || !(i.which === 2 || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                if (e = u.disableOn !== undefined ? u.disableOn : n.magnificPopup.defaults.disableOn, e)
                    if (n.isFunction(e)) {
                        if (!e.call(t)) return !0
                    } else if (f.width() < e) return !0;
                i.type && (i.preventDefault(), t.isOpen && i.stopPropagation());
                u.el = n(i.mfpEl);
                u.delegate && (u.items = r.find(u.delegate));
                t.open(u)
            }
        },
        updateStatus: function(n, r) {
            if (t.preloader) {
                ot !== n && t.container.removeClass("mfp-s-" + ot);
                r || n !== "loading" || (r = t.st.tLoading);
                var u = {
                    status: n,
                    text: r
                };
                i("UpdateStatus", u);
                n = u.status;
                r = u.text;
                t.preloader.html(r);
                t.preloader.find("a").on("click", function(n) {
                    n.stopImmediatePropagation()
                });
                t.container.addClass("mfp-s-" + n);
                ot = n
            }
        },
        _checkIfClose: function(i) {
            if (!n(i).hasClass(ft)) {
                var r = t.st.closeOnContentClick,
                    u = t.st.closeOnBgClick;
                if (r && u || !t.content || n(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
                if (i === t.content[0] || n.contains(t.content[0], i)) {
                    if (r) return !0
                } else if (u && n.contains(document, i)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(n) {
            t.bgOverlay.addClass(n);
            t.wrap.addClass(n)
        },
        _removeClassFromMFP: function(n) {
            this.bgOverlay.removeClass(n);
            t.wrap.removeClass(n)
        },
        _hasScrollBar: function(n) {
            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (n || f.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(i) {
            if (i.target !== t.wrap[0] && !n.contains(t.wrap[0], i.target)) return t._setFocus(), !1
        },
        _parseMarkup: function(t, r, f) {
            var e;
            f.data && (r = n.extend(f.data, r));
            i(it, [t, r, f]);
            n.each(r, function(n, i) {
                var r, f;
                if (i === undefined || i === !1) return !0;
                e = n.split("_");
                e.length > 1 ? (r = t.find(u + "-" + e[0]), r.length > 0 && (f = e[1], f === "replaceWith" ? r[0] !== i[0] && r.replaceWith(i) : f === "img" ? r.is("img") ? r.attr("src", i) : r.replaceWith('<img src="' + i + '" class="' + r.attr("class") + '" />') : r.attr(e[1], i))) : t.find(u + "-" + n).html(i)
            })
        },
        _getScrollbarSize: function() {
            if (t.scrollbarSize === undefined) {
                var n = document.createElement("div");
                n.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
                document.body.appendChild(n);
                t.scrollbarSize = n.offsetWidth - n.clientWidth;
                document.body.removeChild(n)
            }
            return t.scrollbarSize
        }
    };
    n.magnificPopup = {
        instance: null,
        proto: w.prototype,
        modules: [],
        open: function(t, i) {
            return ht(), t = t ? n.extend(!0, {}, t) : {}, t.isObj = !0, t.index = i || 0, this.instance.open(t)
        },
        close: function() {
            return n.magnificPopup.instance && n.magnificPopup.instance.close()
        },
        registerModule: function(t, i) {
            i.options && (n.magnificPopup.defaults[t] = i.options);
            n.extend(this.proto, i.proto);
            this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;<\/button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    };
    n.fn.magnificPopup = function(i) {
        var r, u, f, e;
        return ht(), r = n(this), typeof i == "string" ? i === "open" ? (f = et ? r.data("magnificPopup") : r[0].magnificPopup, e = parseInt(arguments[1], 10) || 0, f.items ? u = f.items[e] : (u = r, f.delegate && (u = u.find(f.delegate)), u = u.eq(e)), t._openClick({
            mfpEl: u
        }, r, f)) : t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1)) : (i = n.extend(!0, {}, i), et ? r.data("magnificPopup", i) : r[0].magnificPopup = i, t.addGroup(r, i)), r
    };
    k = "inline";
    ct = function() {
        g && (d.after(g.addClass(a)).detach(), g = null)
    };
    n.magnificPopup.registerModule(k, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(k);
                r(h + "." + k, function() {
                    ct()
                })
            },
            getInline: function(i, r) {
                var f, u, o;
                return (ct(), i.src) ? (f = t.st.inline, u = n(i.src), u.length ? (o = u[0].parentNode, o && o.tagName && (d || (a = f.hiddenClass, d = e(a), a = "mfp-" + a), g = u.after(d).detach().removeClass(a)), t.updateStatus("ready")) : (t.updateStatus("error", f.tNotFound), u = n("<div>")), i.inlineElement = u, u) : (t.updateStatus("ready"), t._parseMarkup(r, {}, i), r)
            }
        }
    });
    var v = "ajax",
        y, lt = function() {
            y && n(document.body).removeClass(y)
        },
        dt = function() {
            lt();
            t.req && t.req.abort()
        };
    n.magnificPopup.registerModule(v, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content<\/a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(v);
                y = t.st.ajax.cursor;
                r(h + "." + v, dt);
                r("BeforeChange." + v, dt)
            },
            getAjax: function(r) {
                y && n(document.body).addClass(y);
                t.updateStatus("loading");
                var u = n.extend({
                    url: r.src,
                    success: function(u, f, e) {
                        var o = {
                            data: u,
                            xhr: e
                        };
                        i("ParseAjax", o);
                        t.appendContent(n(o.data), v);
                        r.finished = !0;
                        lt();
                        t._setFocus();
                        setTimeout(function() {
                            t.wrap.addClass(p)
                        }, 16);
                        t.updateStatus("ready");
                        i("AjaxContentAdded")
                    },
                    error: function() {
                        lt();
                        r.finished = r.loadError = !0;
                        t.updateStatus("error", t.st.ajax.tError.replace("%url%", r.src))
                    }
                }, t.st.ajax.settings);
                return t.req = n.ajax(u), ""
            }
        }
    });
    gt = function(i) {
        if (i.data && i.data.title !== undefined) return i.data.title;
        var r = t.st.image.titleSrc;
        if (r) {
            if (n.isFunction(r)) return r.call(t, i);
            if (i.el) return i.el.attr(r) || ""
        }
        return ""
    };
    n.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"><\/div><figure><div class="mfp-img"><\/div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"><\/div><div class="mfp-counter"><\/div><\/div><\/figcaption><\/figure><\/div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image<\/a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var i = t.st.image,
                    e = ".image";
                t.types.push("image");
                r(rt + e, function() {
                    t.currItem.type === "image" && i.cursor && n(document.body).addClass(i.cursor)
                });
                r(h + e, function() {
                    i.cursor && n(document.body).removeClass(i.cursor);
                    f.off("resize" + u)
                });
                r("Resize" + e, t.resizeImage);
                t.isLowIE && r("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var n = t.currItem,
                    i;
                n && n.img && t.st.image.verticalFit && (i = 0, t.isLowIE && (i = parseInt(n.img.css("padding-top"), 10) + parseInt(n.img.css("padding-bottom"), 10)), n.img.css("max-height", t.wH - i))
            },
            _onImageHasSize: function(n) {
                n.img && (n.hasSize = !0, s && clearInterval(s), n.isCheckingImgSize = !1, i("ImageHasSize", n), n.imgHidden && (t.content && t.content.removeClass("mfp-loading"), n.imgHidden = !1))
            },
            findImageSize: function(n) {
                var i = 0,
                    u = n.img[0],
                    r = function(f) {
                        s && clearInterval(s);
                        s = setInterval(function() {
                            if (u.naturalWidth > 0) {
                                t._onImageHasSize(n);
                                return
                            }
                            i > 200 && clearInterval(s);
                            i++;
                            i === 3 ? r(10) : i === 40 ? r(50) : i === 100 && r(500)
                        }, f)
                    };
                r(1)
            },
            getImage: function(r, u) {
                var e = 0,
                    o = function() {
                        r && (r.img[0].complete ? (r.img.off(".mfploader"), r === t.currItem && (t._onImageHasSize(r), t.updateStatus("ready")), r.hasSize = !0, r.loaded = !0, i("ImageLoadComplete")) : (e++, e < 200 ? setTimeout(o, 100) : h()))
                    },
                    h = function() {
                        r && (r.img.off(".mfploader"), r === t.currItem && (t._onImageHasSize(r), t.updateStatus("error", c.tError.replace("%url%", r.src))), r.hasSize = !0, r.loaded = !0, r.loadError = !0)
                    },
                    c = t.st.image,
                    l = u.find(".mfp-img"),
                    f;
                return (l.length && (f = document.createElement("img"), f.className = "mfp-img", r.el && r.el.find("img").length && (f.alt = r.el.find("img").attr("alt")), r.img = n(f).on("load.mfploader", o).on("error.mfploader", h), f.src = r.src, l.is("img") && (r.img = r.img.clone()), f = r.img[0], f.naturalWidth > 0 ? r.hasSize = !0 : f.width || (r.hasSize = !1)), t._parseMarkup(u, {
                    title: gt(r),
                    img_replaceWith: r.img
                }, r), t.resizeImage(), r.hasSize) ? (s && clearInterval(s), r.loadError ? (u.addClass("mfp-loading"), t.updateStatus("error", c.tError.replace("%url%", r.src))) : (u.removeClass("mfp-loading"), t.updateStatus("ready")), u) : (t.updateStatus("loading"), r.loading = !0, r.hasSize || (r.imgHidden = !0, u.addClass("mfp-loading"), t.findImageSize(r)), u)
            }
        }
    });
    ni = function() {
        return at === undefined && (at = document.createElement("p").style.MozTransform !== undefined), at
    };
    n.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(n) {
                return n.is("img") ? n : n.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var f = t.st.zoom,
                    o = ".zoom",
                    u;
                if (f.enabled && t.supportsTransition) {
                    var c = f.duration,
                        l = function(n) {
                            var r = n.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                u = "all " + f.duration / 1e3 + "s " + f.easing,
                                t = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                i = "transition";
                            return t["-webkit-" + i] = t["-moz-" + i] = t["-o-" + i] = t[i] = u, r.css(t), r
                        },
                        s = function() {
                            t.content.css("visibility", "visible")
                        },
                        e, n;
                    r("BuildControls" + o, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(e), t.content.css("visibility", "hidden"), u = t._getItemToZoom(), !u) {
                                s();
                                return
                            }
                            n = l(u);
                            n.css(t._getOffset());
                            t.wrap.append(n);
                            e = setTimeout(function() {
                                n.css(t._getOffset(!0));
                                e = setTimeout(function() {
                                    s();
                                    setTimeout(function() {
                                        n.remove();
                                        u = n = null;
                                        i("ZoomAnimationEnded")
                                    }, 16)
                                }, c)
                            }, 16)
                        }
                    });
                    r(pt + o, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(e), t.st.removalDelay = c, !u) {
                                if (u = t._getItemToZoom(), !u) return;
                                n = l(u)
                            }
                            n.css(t._getOffset(!0));
                            t.wrap.append(n);
                            t.content.css("visibility", "hidden");
                            setTimeout(function() {
                                n.css(t._getOffset())
                            }, 16)
                        }
                    });
                    r(h + o, function() {
                        t._allowZoom() && (s(), n && n.remove(), u = null)
                    })
                }
            },
            _allowZoom: function() {
                return t.currItem.type === "image"
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(i) {
                var r, u;
                r = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var f = r.offset(),
                    e = parseInt(r.css("padding-top"), 10),
                    o = parseInt(r.css("padding-bottom"), 10);
                return f.top -= n(window).scrollTop() - e, u = {
                    width: r.width(),
                    height: (et ? r.innerHeight() : r[0].offsetHeight) - o - e
                }, ni() ? u["-moz-transform"] = u.transform = "translate(" + f.left + "px," + f.top + "px)" : (u.left = f.left, u.top = f.top), u
            }
        }
    });
    var l = "iframe",
        ui = "//about:blank",
        vt = function(n) {
            if (t.currTemplate[l]) {
                var i = t.currTemplate[l].find("iframe");
                i.length && (n || (i[0].src = ui), t.isIE8 && i.css("display", n ? "block" : "none"))
            }
        };
    n.magnificPopup.registerModule(l, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"><\/div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen><\/iframe><\/div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(l);
                r("BeforeChange", function(n, t, i) {
                    t !== i && (t === l ? vt() : i === l && vt(!0))
                });
                r(h + "." + l, function() {
                    vt()
                })
            },
            getIframe: function(i, r) {
                var u = i.src,
                    f = t.st.iframe,
                    e;
                return n.each(f.patterns, function() {
                    if (u.indexOf(this.index) > -1) return this.id && (u = typeof this.id == "string" ? u.substr(u.lastIndexOf(this.id) + this.id.length, u.length) : this.id.call(this, u)), u = this.src.replace("%id%", u), !1
                }), e = {}, f.srcAction && (e[f.srcAction] = u), t._parseMarkup(r, e, i), t.updateStatus("ready"), r
            }
        }
    });
    nt = function(n) {
        var i = t.items.length;
        return n > i - 1 ? n - i : n < 0 ? i + n : n
    };
    yt = function(n, t, i) {
        return n.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
    };
    n.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><\/button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var u = t.st.gallery,
                    i = ".mfp-gallery",
                    f = Boolean(n.fn.mfpFastClick);
                if (t.direction = !0, !u || !u.enabled) return !1;
                c += " mfp-gallery";
                r(rt + i, function() {
                    if (u.navigateByImgClick) t.wrap.on("click" + i, ".mfp-img", function() {
                        if (t.items.length > 1) return t.next(), !1
                    });
                    o.on("keydown" + i, function(n) {
                        n.keyCode === 37 ? t.prev() : n.keyCode === 39 && t.next()
                    })
                });
                r("UpdateStatus" + i, function(n, i) {
                    i.text && (i.text = yt(i.text, t.currItem.index, t.items.length))
                });
                r(it + i, function(n, i, r, f) {
                    var e = t.items.length;
                    r.counter = e > 1 ? yt(u.tCounter, f.index, e) : ""
                });
                r("BuildControls" + i, function() {
                    if (t.items.length > 1 && u.arrows && !t.arrowLeft) {
                        var o = u.arrowMarkup,
                            i = t.arrowLeft = n(o.replace(/%title%/gi, u.tPrev).replace(/%dir%/gi, "left")).addClass(ft),
                            r = t.arrowRight = n(o.replace(/%title%/gi, u.tNext).replace(/%dir%/gi, "right")).addClass(ft),
                            s = f ? "mfpFastClick" : "click";
                        i[s](function() {
                            t.prev()
                        });
                        r[s](function() {
                            t.next()
                        });
                        t.isIE7 && (e("b", i[0], !1, !0), e("a", i[0], !1, !0), e("b", r[0], !1, !0), e("a", r[0], !1, !0));
                        t.container.append(i.add(r))
                    }
                });
                r(wt + i, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout);
                    t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages();
                        t._preloadTimeout = null
                    }, 16)
                });
                r(h + i, function() {
                    o.off(i);
                    t.wrap.off("click" + i);
                    t.arrowLeft && f && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick();
                    t.arrowRight = t.arrowLeft = null
                })
            },
            next: function() {
                t.direction = !0;
                t.index = nt(t.index + 1);
                t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1;
                t.index = nt(t.index - 1);
                t.updateItemHTML()
            },
            goTo: function(n) {
                t.direction = n >= t.index;
                t.index = n;
                t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                for (var i = t.st.gallery.preload, r = Math.min(i[0], t.items.length), u = Math.min(i[1], t.items.length), n = 1; n <= (t.direction ? u : r); n++) t._preloadItem(t.index + n);
                for (n = 1; n <= (t.direction ? r : u); n++) t._preloadItem(t.index - n)
            },
            _preloadItem: function(r) {
                if (r = nt(r), !t.items[r].preloaded) {
                    var u = t.items[r];
                    u.parsed || (u = t.parseEl(r));
                    i("LazyLoad", u);
                    u.type === "image" && (u.img = n('<img class="mfp-img" />').on("load.mfploader", function() {
                        u.hasSize = !0
                    }).on("error.mfploader", function() {
                        u.hasSize = !0;
                        u.loadError = !0;
                        i("LazyLoadError", u)
                    }).attr("src", u.src));
                    u.preloaded = !0
                }
            }
        }
    });
    tt = "retina";
    n.magnificPopup.registerModule(tt, {
            options: {
                replaceSrc: function(n) {
                    return n.src.replace(/\.\w+$/, function(n) {
                        return "@2x" + n
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var i = t.st.retina,
                            n = i.ratio;
                        n = isNaN(n) ? n() : n;
                        n > 1 && (r("ImageHasSize." + tt, function(t, i) {
                            i.img.css({
                                "max-width": i.img[0].naturalWidth / n,
                                width: "100%"
                            })
                        }), r("ElementParse." + tt, function(t, r) {
                            r.src = i.replaceSrc(r, n)
                        }))
                    }
                }
            }
        }),
        function() {
            var u = 1e3,
                i = "ontouchstart" in window,
                r = function() {
                    f.off("touchmove" + t + " touchend" + t)
                },
                t = ".mfpFastClick";
            n.fn.mfpFastClick = function(e) {
                return n(this).each(function() {
                    var l = n(this),
                        s, a, v, y, h, o, c;
                    if (i) l.on("touchstart" + t, function(n) {
                        h = !1;
                        c = 1;
                        o = n.originalEvent ? n.originalEvent.touches[0] : n.touches[0];
                        v = o.clientX;
                        y = o.clientY;
                        f.on("touchmove" + t, function(n) {
                            o = n.originalEvent ? n.originalEvent.touches : n.touches;
                            c = o.length;
                            o = o[0];
                            (Math.abs(o.clientX - v) > 10 || Math.abs(o.clientY - y) > 10) && (h = !0, r())
                        }).on("touchend" + t, function(n) {
                            (r(), h || c > 1) || (s = !0, n.preventDefault(), clearTimeout(a), a = setTimeout(function() {
                                s = !1
                            }, u), e())
                        })
                    });
                    l.on("click" + t, function() {
                        s || e()
                    })
                })
            };
            n.fn.destroyMfpFastClick = function() {
                n(this).off("touchstart" + t + " click" + t);
                i && f.off("touchmove" + t + " touchend" + t)
            }
        }();
    ht()
});
typeof Object.create != "function" && (Object.create = function(n) {
        function t() {}
        return t.prototype = n, new t
    }),
    function(n, t, i) {
        var r = {
            init: function(t, i) {
                var r = this;
                r.$elem = n(i);
                r.options = n.extend({}, n.fn.owlCarousel.options, r.$elem.data(), t);
                r.userOptions = t;
                r.loadContent()
            },
            loadContent: function() {
                function r(n) {
                    var i, r = "";
                    if (typeof t.options.jsonSuccess == "function") t.options.jsonSuccess.apply(this, [n]);
                    else {
                        for (i in n.owl) n.owl.hasOwnProperty(i) && (r += n.owl[i].item);
                        t.$elem.html(r)
                    }
                    t.logIn()
                }
                var t = this,
                    i;
                typeof t.options.beforeInit == "function" && t.options.beforeInit.apply(this, [t.$elem]);
                typeof t.options.jsonPath == "string" ? (i = t.options.jsonPath, n.getJSON(i, r)) : t.logIn()
            },
            logIn: function() {
                var n = this;
                n.$elem.data("owl-originalStyles", n.$elem.attr("style"));
                n.$elem.data("owl-originalClasses", n.$elem.attr("class"));
                n.$elem.css({
                    opacity: 0
                });
                n.orignalItems = n.options.items;
                n.checkBrowser();
                n.wrapperWidth = 0;
                n.checkVisible = null;
                n.setVars()
            },
            setVars: function() {
                var n = this;
                if (n.$elem.children().length === 0) return !1;
                n.baseClass();
                n.eventTypes();
                n.$userItems = n.$elem.children();
                n.itemsAmount = n.$userItems.length;
                n.wrapItems();
                n.$owlItems = n.$elem.find(".owl-item");
                n.$owlWrapper = n.$elem.find(".owl-wrapper");
                n.playDirection = "next";
                n.prevItem = 0;
                n.prevArr = [0];
                n.currentItem = 0;
                n.customEvents();
                n.onStartup()
            },
            onStartup: function() {
                var n = this;
                n.updateItems();
                n.calculateAll();
                n.buildControls();
                n.updateControls();
                n.response();
                n.moveEvents();
                n.stopOnHover();
                n.owlStatus();
                n.options.transitionStyle !== !1 && n.transitionTypes(n.options.transitionStyle);
                n.options.autoPlay === !0 && (n.options.autoPlay = 5e3);
                n.play();
                n.$elem.find(".owl-wrapper").css("display", "block");
                n.$elem.is(":visible") ? n.$elem.css("opacity", 1) : n.watchVisibility();
                n.onstartup = !1;
                n.eachMoveUpdate();
                typeof n.options.afterInit == "function" && n.options.afterInit.apply(this, [n.$elem])
            },
            eachMoveUpdate: function() {
                var n = this;
                n.options.lazyLoad === !0 && n.lazyLoad();
                n.options.autoHeight === !0 && n.autoHeight();
                n.onVisibleItems();
                typeof n.options.afterAction == "function" && n.options.afterAction.apply(this, [n.$elem])
            },
            updateVars: function() {
                var n = this;
                typeof n.options.beforeUpdate == "function" && n.options.beforeUpdate.apply(this, [n.$elem]);
                n.watchVisibility();
                n.updateItems();
                n.calculateAll();
                n.updatePosition();
                n.updateControls();
                n.eachMoveUpdate();
                typeof n.options.afterUpdate == "function" && n.options.afterUpdate.apply(this, [n.$elem])
            },
            reload: function() {
                var n = this;
                t.setTimeout(function() {
                    n.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var n = this;
                if (n.$elem.is(":visible") === !1) n.$elem.css({
                    opacity: 0
                }), t.clearInterval(n.autoPlayInterval), t.clearInterval(n.checkVisible);
                else return !1;
                n.checkVisible = t.setInterval(function() {
                    n.$elem.is(":visible") && (n.reload(), n.$elem.animate({
                        opacity: 1
                    }, 200), t.clearInterval(n.checkVisible))
                }, 500)
            },
            wrapItems: function() {
                var n = this;
                n.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"><\/div>');
                n.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
                n.wrapperOuter = n.$elem.find(".owl-wrapper-outer");
                n.$elem.css("display", "block")
            },
            baseClass: function() {
                var n = this,
                    t = n.$elem.hasClass(n.options.baseClass),
                    i = n.$elem.hasClass(n.options.theme);
                t || n.$elem.addClass(n.options.baseClass);
                i || n.$elem.addClass(n.options.theme)
            },
            updateItems: function() {
                var t = this,
                    i, r;
                if (t.options.responsive === !1) return !1;
                if (t.options.singleItem === !0) return t.options.items = t.orignalItems = 1, t.options.itemsCustom = !1, t.options.itemsDesktop = !1, t.options.itemsDesktopSmall = !1, t.options.itemsTablet = !1, t.options.itemsTabletSmall = !1, t.options.itemsMobile = !1, !1;
                if (i = n(t.options.responsiveBaseWidth).width(), i > (t.options.itemsDesktop[0] || t.orignalItems) && (t.options.items = t.orignalItems), t.options.itemsCustom !== !1)
                    for (t.options.itemsCustom.sort(function(n, t) {
                            return n[0] - t[0]
                        }), r = 0; r < t.options.itemsCustom.length; r += 1) t.options.itemsCustom[r][0] <= i && (t.options.items = t.options.itemsCustom[r][1]);
                else i <= t.options.itemsDesktop[0] && t.options.itemsDesktop !== !1 && (t.options.items = t.options.itemsDesktop[1]), i <= t.options.itemsDesktopSmall[0] && t.options.itemsDesktopSmall !== !1 && (t.options.items = t.options.itemsDesktopSmall[1]), i <= t.options.itemsTablet[0] && t.options.itemsTablet !== !1 && (t.options.items = t.options.itemsTablet[1]), i <= t.options.itemsTabletSmall[0] && t.options.itemsTabletSmall !== !1 && (t.options.items = t.options.itemsTabletSmall[1]), i <= t.options.itemsMobile[0] && t.options.itemsMobile !== !1 && (t.options.items = t.options.itemsMobile[1]);
                t.options.items > t.itemsAmount && t.options.itemsScaleUp === !0 && (t.options.items = t.itemsAmount)
            },
            response: function() {
                var i = this,
                    u, r;
                if (i.options.responsive !== !0) return !1;
                r = n(t).width();
                i.resizer = function() {
                    n(t).width() !== r && (i.options.autoPlay !== !1 && t.clearInterval(i.autoPlayInterval), t.clearTimeout(u), u = t.setTimeout(function() {
                        r = n(t).width();
                        i.updateVars()
                    }, i.options.responsiveRefreshRate))
                };
                n(t).resize(i.resizer)
            },
            updatePosition: function() {
                var n = this;
                n.jumpTo(n.currentItem);
                n.options.autoPlay !== !1 && n.checkAp()
            },
            appendItemsSizes: function() {
                var t = this,
                    i = 0,
                    r = t.itemsAmount - t.options.items;
                t.$owlItems.each(function(u) {
                    var f = n(this);
                    f.css({
                        width: t.itemWidth
                    }).data("owl-item", Number(u));
                    (u % t.options.items == 0 || u === r) && (u > r || (i += 1));
                    f.data("owl-roundPages", i)
                })
            },
            appendWrapperSizes: function() {
                var n = this,
                    t = n.$owlItems.length * n.itemWidth;
                n.$owlWrapper.css({
                    width: t * 2,
                    left: 0
                });
                n.appendItemsSizes()
            },
            calculateAll: function() {
                var n = this;
                n.calculateWidth();
                n.appendWrapperSizes();
                n.loops();
                n.max()
            },
            calculateWidth: function() {
                var n = this;
                n.itemWidth = Math.round(n.$elem.width() / n.options.items)
            },
            max: function() {
                var n = this,
                    t = (n.itemsAmount * n.itemWidth - n.options.items * n.itemWidth) * -1;
                return n.options.items > n.itemsAmount ? (n.maximumItem = 0, t = 0, n.maximumPixels = 0) : (n.maximumItem = n.itemsAmount - n.options.items, n.maximumPixels = t), t
            },
            min: function() {
                return 0
            },
            loops: function() {
                var t = this,
                    r = 0,
                    f = 0,
                    i, e, u;
                for (t.positionsInArray = [0], t.pagesInArray = [], i = 0; i < t.itemsAmount; i += 1) f += t.itemWidth, t.positionsInArray.push(-f), t.options.scrollPerPage === !0 && (e = n(t.$owlItems[i]), u = e.data("owl-roundPages"), u !== r && (t.pagesInArray[r] = t.positionsInArray[i], r = u))
            },
            buildControls: function() {
                var t = this;
                (t.options.navigation === !0 || t.options.pagination === !0) && (t.owlControls = n('<div class="owl-controls"/>').toggleClass("clickable", !t.browser.isTouch).appendTo(t.$elem));
                t.options.pagination === !0 && t.buildPagination();
                t.options.navigation === !0 && t.buildButtons()
            },
            buildButtons: function() {
                var t = this,
                    i = n('<div class="owl-buttons"/>');
                t.owlControls.append(i);
                t.buttonPrev = n("<div/>", {
                    "class": "owl-prev",
                    html: t.options.navigationText[0] || ""
                });
                t.buttonNext = n("<div/>", {
                    "class": "owl-next",
                    html: t.options.navigationText[1] || ""
                });
                i.append(t.buttonPrev).append(t.buttonNext);
                i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(n) {
                    n.preventDefault()
                });
                i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(i) {
                    i.preventDefault();
                    n(this).hasClass("owl-next") ? t.next() : t.prev()
                })
            },
            buildPagination: function() {
                var t = this;
                t.paginationWrapper = n('<div class="owl-pagination"/>');
                t.owlControls.append(t.paginationWrapper);
                t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(i) {
                    i.preventDefault();
                    Number(n(this).data("owl-page")) !== t.currentItem && t.goTo(Number(n(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var t = this,
                    u, f, e, i, r, o;
                if (t.options.pagination === !1) return !1;
                for (t.paginationWrapper.html(""), u = 0, f = t.itemsAmount - t.itemsAmount % t.options.items, i = 0; i < t.itemsAmount; i += 1) i % t.options.items == 0 && (u += 1, f === i && (e = t.itemsAmount - t.options.items), r = n("<div/>", {
                    "class": "owl-page"
                }), o = n("<span><\/span>", {
                    text: t.options.paginationNumbers === !0 ? u : "",
                    "class": t.options.paginationNumbers === !0 ? "owl-numbers" : ""
                }), r.append(o), r.data("owl-page", f === i ? e : i), r.data("owl-roundPages", u), t.paginationWrapper.append(r));
                t.checkPagination()
            },
            checkPagination: function() {
                var t = this;
                if (t.options.pagination === !1) return !1;
                t.paginationWrapper.find(".owl-page").each(function() {
                    n(this).data("owl-roundPages") === n(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), n(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                var n = this;
                if (n.options.navigation === !1) return !1;
                n.options.rewindNav === !1 && (n.currentItem === 0 && n.maximumItem === 0 ? (n.buttonPrev.addClass("disabled"), n.buttonNext.addClass("disabled")) : n.currentItem === 0 && n.maximumItem !== 0 ? (n.buttonPrev.addClass("disabled"), n.buttonNext.removeClass("disabled")) : n.currentItem === n.maximumItem ? (n.buttonPrev.removeClass("disabled"), n.buttonNext.addClass("disabled")) : n.currentItem !== 0 && n.currentItem !== n.maximumItem && (n.buttonPrev.removeClass("disabled"), n.buttonNext.removeClass("disabled")))
            },
            updateControls: function() {
                var n = this;
                n.updatePagination();
                n.checkNavigation();
                n.owlControls && (n.options.items >= n.itemsAmount ? n.owlControls.hide() : n.owlControls.show())
            },
            destroyControls: function() {
                var n = this;
                n.owlControls && n.owlControls.remove()
            },
            next: function(n) {
                var t = this;
                if (t.isTransition) return !1;
                if (t.currentItem += t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem > t.maximumItem + (t.options.scrollPerPage === !0 ? t.options.items - 1 : 0))
                    if (t.options.rewindNav === !0) t.currentItem = 0, n = "rewind";
                    else return t.currentItem = t.maximumItem, !1;
                t.goTo(t.currentItem, n)
            },
            prev: function(n) {
                var t = this;
                if (t.isTransition) return !1;
                if (t.options.scrollPerPage === !0 && t.currentItem > 0 && t.currentItem < t.options.items ? t.currentItem = 0 : t.currentItem -= t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem < 0)
                    if (t.options.rewindNav === !0) t.currentItem = t.maximumItem, n = "rewind";
                    else return t.currentItem = 0, !1;
                t.goTo(t.currentItem, n)
            },
            goTo: function(n, i, r) {
                var u = this,
                    f;
                if (u.isTransition) return !1;
                if (typeof u.options.beforeMove == "function" && u.options.beforeMove.apply(this, [u.$elem]), n >= u.maximumItem ? n = u.maximumItem : n <= 0 && (n = 0), u.currentItem = u.owl.currentItem = n, u.options.transitionStyle !== !1 && r !== "drag" && u.options.items === 1 && u.browser.support3d === !0) return u.swapSpeed(0), u.browser.support3d === !0 ? u.transition3d(u.positionsInArray[n]) : u.css2slide(u.positionsInArray[n], 1), u.afterGo(), u.singleItemTransition(), !1;
                f = u.positionsInArray[n];
                u.browser.support3d === !0 ? (u.isCss3Finish = !1, i === !0 ? (u.swapSpeed("paginationSpeed"), t.setTimeout(function() {
                    u.isCss3Finish = !0
                }, u.options.paginationSpeed)) : i === "rewind" ? (u.swapSpeed(u.options.rewindSpeed), t.setTimeout(function() {
                    u.isCss3Finish = !0
                }, u.options.rewindSpeed)) : (u.swapSpeed("slideSpeed"), t.setTimeout(function() {
                    u.isCss3Finish = !0
                }, u.options.slideSpeed)), u.transition3d(f)) : i === !0 ? u.css2slide(f, u.options.paginationSpeed) : i === "rewind" ? u.css2slide(f, u.options.rewindSpeed) : u.css2slide(f, u.options.slideSpeed);
                u.afterGo()
            },
            jumpTo: function(n) {
                var t = this;
                typeof t.options.beforeMove == "function" && t.options.beforeMove.apply(this, [t.$elem]);
                n >= t.maximumItem || n === -1 ? n = t.maximumItem : n <= 0 && (n = 0);
                t.swapSpeed(0);
                t.browser.support3d === !0 ? t.transition3d(t.positionsInArray[n]) : t.css2slide(t.positionsInArray[n], 1);
                t.currentItem = t.owl.currentItem = n;
                t.afterGo()
            },
            afterGo: function() {
                var n = this;
                n.prevArr.push(n.currentItem);
                n.prevItem = n.owl.prevItem = n.prevArr[n.prevArr.length - 2];
                n.prevArr.shift(0);
                n.prevItem !== n.currentItem && (n.checkPagination(), n.checkNavigation(), n.eachMoveUpdate(), n.options.autoPlay !== !1 && n.checkAp());
                typeof n.options.afterMove == "function" && n.prevItem !== n.currentItem && n.options.afterMove.apply(this, [n.$elem])
            },
            stop: function() {
                var n = this;
                n.apStatus = "stop";
                t.clearInterval(n.autoPlayInterval)
            },
            checkAp: function() {
                var n = this;
                n.apStatus !== "stop" && n.play()
            },
            play: function() {
                var n = this;
                if (n.apStatus = "play", n.options.autoPlay === !1) return !1;
                t.clearInterval(n.autoPlayInterval);
                n.autoPlayInterval = t.setInterval(function() {
                    n.next(!0)
                }, n.options.autoPlay)
            },
            swapSpeed: function(n) {
                var t = this;
                n === "slideSpeed" ? t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)) : n === "paginationSpeed" ? t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)) : typeof n != "string" && t.$owlWrapper.css(t.addCssSpeed(n))
            },
            addCssSpeed: function(n) {
                return {
                    "-webkit-transition": "all " + n + "ms ease",
                    "-moz-transition": "all " + n + "ms ease",
                    "-o-transition": "all " + n + "ms ease",
                    transition: "all " + n + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(n) {
                return {
                    "-webkit-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + n + "px, 0px, 0px)",
                    transform: "translate3d(" + n + "px, 0px,0px)"
                }
            },
            transition3d: function(n) {
                var t = this;
                t.$owlWrapper.css(t.doTranslate(n))
            },
            css2move: function(n) {
                var t = this;
                t.$owlWrapper.css({
                    left: n
                })
            },
            css2slide: function(n, t) {
                var i = this;
                i.isCssFinish = !1;
                i.$owlWrapper.stop(!0, !0).animate({
                    left: n
                }, {
                    duration: t || i.options.slideSpeed,
                    complete: function() {
                        i.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var s = this,
                    n = "translate3d(0px, 0px, 0px)",
                    u = i.createElement("div"),
                    f, r, e, o;
                u.style.cssText = "  -moz-transform:" + n + "; -ms-transform:" + n + "; -o-transform:" + n + "; -webkit-transform:" + n + "; transform:" + n;
                f = /translate3d\(0px, 0px, 0px\)/g;
                r = u.style.cssText.match(f);
                e = r !== null && r.length === 1;
                o = "ontouchstart" in t || t.navigator.msMaxTouchPoints;
                s.browser = {
                    support3d: e,
                    isTouch: o
                }
            },
            moveEvents: function() {
                var n = this;
                (n.options.mouseDrag !== !1 || n.options.touchDrag !== !1) && (n.gestures(), n.disabledEvents())
            },
            eventTypes: function() {
                var n = this,
                    t = ["s", "e", "x"];
                n.ev_types = {};
                n.options.mouseDrag === !0 && n.options.touchDrag === !0 ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : n.options.mouseDrag === !1 && n.options.touchDrag === !0 ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : n.options.mouseDrag === !0 && n.options.touchDrag === !1 && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
                n.ev_types.start = t[0];
                n.ev_types.move = t[1];
                n.ev_types.end = t[2]
            },
            disabledEvents: function() {
                var t = this;
                t.$elem.on("dragstart.owl", function(n) {
                    n.preventDefault()
                });
                t.$elem.on("mousedown.disableTextSelect", function(t) {
                    return n(t.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function f(n) {
                    if (n.touches !== undefined) return {
                        x: n.touches[0].pageX,
                        y: n.touches[0].pageY
                    };
                    if (n.touches === undefined) {
                        if (n.pageX !== undefined) return {
                            x: n.pageX,
                            y: n.pageY
                        };
                        if (n.pageX === undefined) return {
                            x: n.clientX,
                            y: n.clientY
                        }
                    }
                }

                function e(t) {
                    if (t === "on") {
                        n(i).on(r.ev_types.move, s);
                        n(i).on(r.ev_types.end, h)
                    } else t === "off" && (n(i).off(r.ev_types.move), n(i).off(r.ev_types.end))
                }

                function o(i) {
                    var o = i.originalEvent || i || t.event,
                        s;
                    if (o.which === 3) return !1;
                    if (!(r.itemsAmount <= r.options.items)) {
                        if (r.isCssFinish === !1 && !r.options.dragBeforeAnimFinish || r.isCss3Finish === !1 && !r.options.dragBeforeAnimFinish) return !1;
                        r.options.autoPlay !== !1 && t.clearInterval(r.autoPlayInterval);
                        r.browser.isTouch === !0 || r.$owlWrapper.hasClass("grabbing") || r.$owlWrapper.addClass("grabbing");
                        r.newPosX = 0;
                        r.newRelativeX = 0;
                        n(this).css(r.removeTransition());
                        s = n(this).position();
                        u.relativePos = s.left;
                        u.offsetX = f(o).x - s.left;
                        u.offsetY = f(o).y - s.top;
                        e("on");
                        u.sliding = !1;
                        u.targetElement = o.target || o.srcElement
                    }
                }

                function s(e) {
                    var o = e.originalEvent || e || t.event,
                        s, h;
                    r.newPosX = f(o).x - u.offsetX;
                    r.newPosY = f(o).y - u.offsetY;
                    r.newRelativeX = r.newPosX - u.relativePos;
                    typeof r.options.startDragging == "function" && u.dragging !== !0 && r.newRelativeX !== 0 && (u.dragging = !0, r.options.startDragging.apply(r, [r.$elem]));
                    (r.newRelativeX > 8 || r.newRelativeX < -8) && r.browser.isTouch === !0 && (o.preventDefault !== undefined ? o.preventDefault() : o.returnValue = !1, u.sliding = !0);
                    (r.newPosY > 10 || r.newPosY < -10) && u.sliding === !1 && n(i).off("touchmove.owl");
                    s = function() {
                        return r.newRelativeX / 5
                    };
                    h = function() {
                        return r.maximumPixels + r.newRelativeX / 5
                    };
                    r.newPosX = Math.max(Math.min(r.newPosX, s()), h());
                    r.browser.support3d === !0 ? r.transition3d(r.newPosX) : r.css2move(r.newPosX)
                }

                function h(i) {
                    var f = i.originalEvent || i || t.event,
                        s, o, h;
                    if (f.target = f.target || f.srcElement, u.dragging = !1, r.browser.isTouch !== !0 && r.$owlWrapper.removeClass("grabbing"), r.dragDirection = r.newRelativeX < 0 ? r.owl.dragDirection = "left" : r.owl.dragDirection = "right", r.newRelativeX !== 0 && (s = r.getNewPosition(), r.goTo(s, !1, "drag"), u.targetElement === f.target && r.browser.isTouch !== !0)) {
                        n(f.target).on("click.disable", function(t) {
                            t.stopImmediatePropagation();
                            t.stopPropagation();
                            t.preventDefault();
                            n(t.target).off("click.disable")
                        });
                        o = n._data(f.target, "events").click;
                        h = o.pop();
                        o.splice(0, 0, h)
                    }
                    e("off")
                }
                var r = this,
                    u = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                r.isCssFinish = !0;
                r.$elem.on(r.ev_types.start, ".owl-wrapper", o)
            },
            getNewPosition: function() {
                var n = this,
                    t = n.closestItem();
                return t > n.maximumItem ? (n.currentItem = n.maximumItem, t = n.maximumItem) : n.newPosX >= 0 && (t = 0, n.currentItem = 0), t
            },
            closestItem: function() {
                var t = this,
                    i = t.options.scrollPerPage === !0 ? t.pagesInArray : t.positionsInArray,
                    u = t.newPosX,
                    r = null;
                return n.each(i, function(f, e) {
                    u - t.itemWidth / 20 > i[f + 1] && u - t.itemWidth / 20 < e && t.moveDirection() === "left" ? (r = e, t.currentItem = t.options.scrollPerPage === !0 ? n.inArray(r, t.positionsInArray) : f) : u + t.itemWidth / 20 < e && u + t.itemWidth / 20 > (i[f + 1] || i[f] - t.itemWidth) && t.moveDirection() === "right" && (t.options.scrollPerPage === !0 ? (r = i[f + 1] || i[i.length - 1], t.currentItem = n.inArray(r, t.positionsInArray)) : (r = i[f + 1], t.currentItem = f + 1))
                }), t.currentItem
            },
            moveDirection: function() {
                var n = this,
                    t;
                return n.newRelativeX < 0 ? (t = "right", n.playDirection = "next") : (t = "left", n.playDirection = "prev"), t
            },
            customEvents: function() {
                var n = this;
                n.$elem.on("owl.next", function() {
                    n.next()
                });
                n.$elem.on("owl.prev", function() {
                    n.prev()
                });
                n.$elem.on("owl.play", function(t, i) {
                    n.options.autoPlay = i;
                    n.play();
                    n.hoverStatus = "play"
                });
                n.$elem.on("owl.stop", function() {
                    n.stop();
                    n.hoverStatus = "stop"
                });
                n.$elem.on("owl.goTo", function(t, i) {
                    n.goTo(i)
                });
                n.$elem.on("owl.jumpTo", function(t, i) {
                    n.jumpTo(i)
                })
            },
            stopOnHover: function() {
                var n = this;
                if (n.options.stopOnHover === !0 && n.browser.isTouch !== !0 && n.options.autoPlay !== !1) {
                    n.$elem.on("mouseover", function() {
                        n.stop()
                    });
                    n.$elem.on("mouseout", function() {
                        n.hoverStatus !== "stop" && n.play()
                    })
                }
            },
            lazyLoad: function() {
                var t = this,
                    u, i, f, r, e;
                if (t.options.lazyLoad === !1) return !1;
                for (u = 0; u < t.itemsAmount; u += 1)
                    if (i = n(t.$owlItems[u]), i.data("owl-loaded") !== "loaded") {
                        if (f = i.data("owl-item"), r = i.find(".lazyOwl"), typeof r.data("src") != "string") {
                            i.data("owl-loaded", "loaded");
                            continue
                        }
                        i.data("owl-loaded") === undefined && (r.hide(), i.addClass("loading").data("owl-loaded", "checked"));
                        e = t.options.lazyFollow === !0 ? f >= t.currentItem : !0;
                        e && f < t.currentItem + t.options.items && r.length && t.lazyPreload(i, r)
                    }
            },
            lazyPreload: function(n, i) {
                function e() {
                    n.data("owl-loaded", "loaded").removeClass("loading");
                    i.removeAttr("data-src");
                    r.options.lazyEffect === "fade" ? i.fadeIn(400) : i.show();
                    typeof r.options.afterLazyLoad == "function" && r.options.afterLazyLoad.apply(this, [r.$elem])
                }

                function o() {
                    u += 1;
                    r.completeImg(i.get(0)) || f === !0 ? e() : u <= 100 ? t.setTimeout(o, 100) : e()
                }
                var r = this,
                    u = 0,
                    f;
                i.prop("tagName") === "DIV" ? (i.css("background-image", "url(" + i.data("src") + ")"), f = !0) : i[0].src = i.data("src");
                o()
            },
            autoHeight: function() {
                function f() {
                    var r = n(i.$owlItems[i.currentItem]).height();
                    i.wrapperOuter.css("height", r + "px");
                    i.wrapperOuter.hasClass("autoHeight") || t.setTimeout(function() {
                        i.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function e() {
                    r += 1;
                    i.completeImg(u.get(0)) ? f() : r <= 100 ? t.setTimeout(e, 100) : i.wrapperOuter.css("height", "")
                }
                var i = this,
                    u = n(i.$owlItems[i.currentItem]).find("img"),
                    r;
                u.get(0) !== undefined ? (r = 0, e()) : f()
            },
            completeImg: function(n) {
                var t;
                return n.complete ? (t = typeof n.naturalWidth, t !== "undefined" && n.naturalWidth === 0) ? !1 : !0 : !1
            },
            onVisibleItems: function() {
                var t = this,
                    i;
                for (t.options.addClassActive === !0 && t.$owlItems.removeClass("active"), t.visibleItems = [], i = t.currentItem; i < t.currentItem + t.options.items; i += 1) t.visibleItems.push(i), t.options.addClassActive === !0 && n(t.$owlItems[i]).addClass("active");
                t.owl.visibleItems = t.visibleItems
            },
            transitionTypes: function(n) {
                var t = this;
                t.outClass = "owl-" + n + "-out";
                t.inClass = "owl-" + n + "-in"
            },
            singleItemTransition: function() {
                function s(n) {
                    return {
                        position: "relative",
                        left: n + "px"
                    }
                }
                var n = this,
                    f = n.outClass,
                    e = n.inClass,
                    i = n.$owlItems.eq(n.currentItem),
                    r = n.$owlItems.eq(n.prevItem),
                    o = Math.abs(n.positionsInArray[n.currentItem]) + n.positionsInArray[n.prevItem],
                    u = Math.abs(n.positionsInArray[n.currentItem]) + n.itemWidth / 2,
                    t = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                n.isTransition = !0;
                n.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": u + "px",
                    "-moz-perspective-origin": u + "px",
                    "perspective-origin": u + "px"
                });
                r.css(s(o, 10)).addClass(f).on(t, function() {
                    n.endPrev = !0;
                    r.off(t);
                    n.clearTransStyle(r, f)
                });
                i.addClass(e).on(t, function() {
                    n.endCurrent = !0;
                    i.off(t);
                    n.clearTransStyle(i, e)
                })
            },
            clearTransStyle: function(n, t) {
                var i = this;
                n.css({
                    position: "",
                    left: ""
                }).removeClass(t);
                i.endPrev && i.endCurrent && (i.$owlWrapper.removeClass("owl-origin"), i.endPrev = !1, i.endCurrent = !1, i.isTransition = !1)
            },
            owlStatus: function() {
                var n = this;
                n.owl = {
                    userOptions: n.userOptions,
                    baseElement: n.$elem,
                    userItems: n.$userItems,
                    owlItems: n.$owlItems,
                    currentItem: n.currentItem,
                    prevItem: n.prevItem,
                    visibleItems: n.visibleItems,
                    isTouch: n.browser.isTouch,
                    browser: n.browser,
                    dragDirection: n.dragDirection
                }
            },
            clearEvents: function() {
                var r = this;
                r.$elem.off(".owl owl mousedown.disableTextSelect");
                n(i).off(".owl owl");
                n(t).off("resize", r.resizer)
            },
            unWrap: function() {
                var n = this;
                n.$elem.children().length !== 0 && (n.$owlWrapper.unwrap(), n.$userItems.unwrap().unwrap(), n.owlControls && n.owlControls.remove());
                n.clearEvents();
                n.$elem.attr("style", n.$elem.data("owl-originalStyles") || "").attr("class", n.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                var n = this;
                n.stop();
                t.clearInterval(n.checkVisible);
                n.unWrap();
                n.$elem.removeData()
            },
            reinit: function(t) {
                var i = this,
                    r = n.extend({}, i.userOptions, t);
                i.unWrap();
                i.init(r, i.$elem)
            },
            addItem: function(n, t) {
                var i = this,
                    r;
                if (!n) return !1;
                if (i.$elem.children().length === 0) return i.$elem.append(n), i.setVars(), !1;
                i.unWrap();
                r = t === undefined || t === -1 ? -1 : t;
                r >= i.$userItems.length || r === -1 ? i.$userItems.eq(-1).after(n) : i.$userItems.eq(r).before(n);
                i.setVars()
            },
            removeItem: function(n) {
                var t = this,
                    i;
                if (t.$elem.children().length === 0) return !1;
                i = n === undefined || n === -1 ? -1 : n;
                t.unWrap();
                t.$userItems.eq(i).remove();
                t.setVars()
            }
        };
        n.fn.owlCarousel = function(t) {
            return this.each(function() {
                if (n(this).data("owl-init") === !0) return !1;
                n(this).data("owl-init", !0);
                var i = Object.create(r);
                i.init(t, this);
                n.data(this, "owlCarousel", i)
            })
        };
        n.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: t,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document),
    function(n) {
        typeof define == "function" && define.amd ? define(["jquery"], function(t) {
            return n(t, document, window, navigator)
        }) : typeof exports == "object" ? n(require("jquery"), document, window, navigator) : n(jQuery, document, window, navigator)
    }(function(n, t, i, r, u) {
        "use strict";
        var o = 0,
            f = function() {
                var i = r.userAgent,
                    u = /msie\s\d+/i,
                    t;
                return i.search(u) > 0 && (t = u.exec(i).toString(), t = t.split(" ")[1], t < 9) ? (n("html").addClass("lt-ie9"), !0) : !1
            }();
        Function.prototype.bind || (Function.prototype.bind = function(n) {
            var t = this,
                i = [].slice,
                r, u;
            if (typeof t != "function") throw new TypeError;
            return r = i.call(arguments, 1), u = function() {
                var e, o, f;
                return this instanceof u ? (e = function() {}, e.prototype = t.prototype, o = new e, f = t.apply(o, r.concat(i.call(arguments))), Object(f) === f) ? f : o : t.apply(n, r.concat(i.call(arguments)))
            }, u
        });
        Array.prototype.indexOf || (Array.prototype.indexOf = function(n, t) {
            var r, f, u, i;
            if (this == null) throw new TypeError('"this" is null or not defined');
            if ((f = Object(this), u = f.length >>> 0, u === 0) || (i = +t || 0, Math.abs(i) === Infinity && (i = 0), i >= u)) return -1;
            for (r = Math.max(i >= 0 ? i : u - Math.abs(i), 0); r < u;) {
                if (r in f && f[r] === n) return r;
                r++
            }
            return -1
        });
        var s = '<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"><\/span><span class="irs-line-mid"><\/span><span class="irs-line-right"><\/span><\/span><span class="irs-min">0<\/span><span class="irs-max">1<\/span><span class="irs-from">0<\/span><span class="irs-to">0<\/span><span class="irs-single">0<\/span><\/span><span class="irs-grid"><\/span><span class="irs-bar"><\/span>',
            h = '<span class="irs-bar-edge"><\/span><span class="irs-shadow shadow-single"><\/span><span class="irs-slider single"><\/span>',
            c = '<span class="irs-shadow shadow-from"><\/span><span class="irs-shadow shadow-to"><\/span><span class="irs-slider from"><\/span><span class="irs-slider to"><\/span>',
            l = '<span class="irs-disable-mask"><\/span>',
            e = function(r, f, e) {
                this.VERSION = "2.2.0";
                this.input = r;
                this.plugin_count = e;
                this.current_plugin = 0;
                this.calc_count = 0;
                this.update_tm = 0;
                this.old_from = 0;
                this.old_to = 0;
                this.old_min_interval = null;
                this.raf_id = null;
                this.dragging = !1;
                this.force_redraw = !1;
                this.no_diapason = !1;
                this.has_tab_index = !0;
                this.is_key = !1;
                this.is_update = !1;
                this.is_start = !0;
                this.is_finish = !1;
                this.is_active = !1;
                this.is_resize = !1;
                this.is_click = !1;
                f = f || {};
                this.$cache = {
                    win: n(i),
                    body: n(t.body),
                    input: n(r),
                    cont: null,
                    rs: null,
                    min: null,
                    max: null,
                    from: null,
                    to: null,
                    single: null,
                    bar: null,
                    line: null,
                    s_single: null,
                    s_from: null,
                    s_to: null,
                    shad_single: null,
                    shad_from: null,
                    shad_to: null,
                    edge: null,
                    grid: null,
                    grid_labels: []
                };
                this.coords = {
                    x_gap: 0,
                    x_pointer: 0,
                    w_rs: 0,
                    w_rs_old: 0,
                    w_handle: 0,
                    p_gap: 0,
                    p_gap_left: 0,
                    p_gap_right: 0,
                    p_step: 0,
                    p_pointer: 0,
                    p_handle: 0,
                    p_single_fake: 0,
                    p_single_real: 0,
                    p_from_fake: 0,
                    p_from_real: 0,
                    p_to_fake: 0,
                    p_to_real: 0,
                    p_bar_x: 0,
                    p_bar_w: 0,
                    grid_gap: 0,
                    big_num: 0,
                    big: [],
                    big_w: [],
                    big_p: [],
                    big_x: []
                };
                this.labels = {
                    w_min: 0,
                    w_max: 0,
                    w_from: 0,
                    w_to: 0,
                    w_single: 0,
                    p_min: 0,
                    p_max: 0,
                    p_from_fake: 0,
                    p_from_left: 0,
                    p_to_fake: 0,
                    p_to_left: 0,
                    p_single_fake: 0,
                    p_single_left: 0
                };
                var o = this.$cache.input,
                    s = o.prop("value"),
                    c, h, l;
                c = {
                    type: "single",
                    min: 10,
                    max: 100,
                    from: null,
                    to: null,
                    step: 1,
                    min_interval: 0,
                    max_interval: 0,
                    drag_interval: !1,
                    values: [],
                    p_values: [],
                    from_fixed: !1,
                    from_min: null,
                    from_max: null,
                    from_shadow: !1,
                    to_fixed: !1,
                    to_min: null,
                    to_max: null,
                    to_shadow: !1,
                    prettify_enabled: !0,
                    prettify_separator: " ",
                    prettify: null,
                    force_edges: !1,
                    keyboard: !0,
                    grid: !1,
                    grid_margin: !0,
                    grid_num: 4,
                    grid_snap: !1,
                    hide_min_max: !1,
                    hide_from_to: !1,
                    prefix: "",
                    postfix: "",
                    max_postfix: "",
                    decorate_both: !0,
                    values_separator: " — ",
                    input_values_separator: ";",
                    disable: !1,
                    block: !1,
                    extra_classes: "",
                    scope: null,
                    onStart: null,
                    onChange: null,
                    onFinish: null,
                    onUpdate: null
                };
                o[0].nodeName !== "INPUT" && console && console.warn && console.warn("Base element should be <input>!", o[0]);
                h = {
                    type: o.data("type"),
                    min: o.data("min"),
                    max: o.data("max"),
                    from: o.data("from"),
                    to: o.data("to"),
                    step: o.data("step"),
                    min_interval: o.data("minInterval"),
                    max_interval: o.data("maxInterval"),
                    drag_interval: o.data("dragInterval"),
                    values: o.data("values"),
                    from_fixed: o.data("fromFixed"),
                    from_min: o.data("fromMin"),
                    from_max: o.data("fromMax"),
                    from_shadow: o.data("fromShadow"),
                    to_fixed: o.data("toFixed"),
                    to_min: o.data("toMin"),
                    to_max: o.data("toMax"),
                    to_shadow: o.data("toShadow"),
                    prettify_enabled: o.data("prettifyEnabled"),
                    prettify_separator: o.data("prettifySeparator"),
                    force_edges: o.data("forceEdges"),
                    keyboard: o.data("keyboard"),
                    grid: o.data("grid"),
                    grid_margin: o.data("gridMargin"),
                    grid_num: o.data("gridNum"),
                    grid_snap: o.data("gridSnap"),
                    hide_min_max: o.data("hideMinMax"),
                    hide_from_to: o.data("hideFromTo"),
                    prefix: o.data("prefix"),
                    postfix: o.data("postfix"),
                    max_postfix: o.data("maxPostfix"),
                    decorate_both: o.data("decorateBoth"),
                    values_separator: o.data("valuesSeparator"),
                    input_values_separator: o.data("inputValuesSeparator"),
                    disable: o.data("disable"),
                    block: o.data("block"),
                    extra_classes: o.data("extraClasses")
                };
                h.values = h.values && h.values.split(",");
                for (l in h) h.hasOwnProperty(l) && (h[l] === u || h[l] === "") && delete h[l];
                s !== u && s !== "" && (s = s.split(h.input_values_separator || f.input_values_separator || ";"), s[0] && s[0] == +s[0] && (s[0] = +s[0]), s[1] && s[1] == +s[1] && (s[1] = +s[1]), f && f.values && f.values.length ? (c.from = s[0] && f.values.indexOf(s[0]), c.to = s[1] && f.values.indexOf(s[1])) : (c.from = s[0] && +s[0], c.to = s[1] && +s[1]));
                n.extend(c, f);
                n.extend(c, h);
                this.options = c;
                this.update_check = {};
                this.validate();
                this.result = {
                    input: this.$cache.input,
                    slider: null,
                    min: this.options.min,
                    max: this.options.max,
                    from: this.options.from,
                    from_percent: 0,
                    from_value: null,
                    to: this.options.to,
                    to_percent: 0,
                    to_value: null
                };
                this.init()
            };
        e.prototype = {
            init: function(n) {
                this.no_diapason = !1;
                this.coords.p_step = this.convertToPercent(this.options.step, !0);
                this.target = "base";
                this.toggleInput();
                this.append();
                this.setMinMax();
                n ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart());
                this.updateScene()
            },
            append: function() {
                var n = '<span class="irs js-irs-' + this.plugin_count + " " + this.options.extra_classes + '"><\/span>';
                this.$cache.input.before(n);
                this.$cache.input.prop("readonly", !0);
                this.$cache.cont = this.$cache.input.prev();
                this.result.slider = this.$cache.cont;
                this.$cache.cont.html(s);
                this.$cache.rs = this.$cache.cont.find(".irs");
                this.$cache.min = this.$cache.cont.find(".irs-min");
                this.$cache.max = this.$cache.cont.find(".irs-max");
                this.$cache.from = this.$cache.cont.find(".irs-from");
                this.$cache.to = this.$cache.cont.find(".irs-to");
                this.$cache.single = this.$cache.cont.find(".irs-single");
                this.$cache.bar = this.$cache.cont.find(".irs-bar");
                this.$cache.line = this.$cache.cont.find(".irs-line");
                this.$cache.grid = this.$cache.cont.find(".irs-grid");
                this.options.type === "single" ? (this.$cache.cont.append(h), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append(c), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler());
                this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none");
                this.appendGrid();
                this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents());
                this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask());
                this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
            },
            setTopHandler: function() {
                var i = this.options.min,
                    n = this.options.max,
                    r = this.options.from,
                    t = this.options.to;
                r > i && t === n ? this.$cache.s_from.addClass("type_last") : t < n && this.$cache.s_to.addClass("type_last")
            },
            changeLevel: function(n) {
                switch (n) {
                    case "single":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
                        this.$cache.s_single.addClass("state_hover");
                        break;
                    case "from":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
                        this.$cache.s_from.addClass("state_hover");
                        this.$cache.s_from.addClass("type_last");
                        this.$cache.s_to.removeClass("type_last");
                        break;
                    case "to":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake);
                        this.$cache.s_to.addClass("state_hover");
                        this.$cache.s_to.addClass("type_last");
                        this.$cache.s_from.removeClass("type_last");
                        break;
                    case "both":
                        this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
                        this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer);
                        this.$cache.s_to.removeClass("type_last");
                        this.$cache.s_from.removeClass("type_last")
                }
            },
            appendDisableMask: function() {
                this.$cache.cont.append(l);
                this.$cache.cont.addClass("irs-disabled")
            },
            removeDisableMask: function() {
                this.$cache.cont.remove(".irs-disable-mask");
                this.$cache.cont.removeClass("irs-disabled")
            },
            remove: function() {
                this.$cache.cont.remove();
                this.$cache.cont = null;
                this.$cache.line.off("keydown.irs_" + this.plugin_count);
                this.$cache.body.off("touchmove.irs_" + this.plugin_count);
                this.$cache.body.off("mousemove.irs_" + this.plugin_count);
                this.$cache.win.off("touchend.irs_" + this.plugin_count);
                this.$cache.win.off("mouseup.irs_" + this.plugin_count);
                f && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count));
                this.$cache.grid_labels = [];
                this.coords.big = [];
                this.coords.big_w = [];
                this.coords.big_p = [];
                this.coords.big_x = [];
                cancelAnimationFrame(this.raf_id)
            },
            bindEvents: function() {
                if (!this.no_diapason) {
                    this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));
                    this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this));
                    this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));
                    this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
                    this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                    this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                    this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this));
                    if (this.options.drag_interval && this.options.type === "double") {
                        this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
                        this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))
                    } else {
                        this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                        this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))
                    }
                    if (this.options.type === "single") {
                        this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                        this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                        this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                        this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                        this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                        this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                        this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))
                    } else {
                        this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null));
                        this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null));
                        this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                        this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                        this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                        this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                        this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                        this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                        this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                        this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                        this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                        this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                        this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                        this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))
                    }
                    if (this.options.keyboard) this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard"));
                    if (f) {
                        this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
                        this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))
                    }
                }
            },
            pointerFocus: function() {
                if (!this.target) {
                    var n, t;
                    t = this.options.type === "single" ? this.$cache.single : this.$cache.from;
                    n = t.offset().left;
                    n += t.width() / 2 - 1;
                    this.pointerClick("single", {
                        preventDefault: function() {},
                        pageX: n
                    })
                }
            },
            pointerMove: function(n) {
                if (this.dragging) {
                    var t = n.pageX || n.originalEvent.touches && n.originalEvent.touches[0].pageX;
                    this.coords.x_pointer = t - this.coords.x_gap;
                    this.calc()
                }
            },
            pointerUp: function(t) {
                if (this.current_plugin === this.plugin_count) {
                    if (this.is_active) this.is_active = !1;
                    else return;
                    this.$cache.cont.find(".state_hover").removeClass("state_hover");
                    this.force_redraw = !0;
                    f && n("*").prop("unselectable", !1);
                    this.updateScene();
                    this.restoreOriginalMinInterval();
                    (n.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish();
                    this.dragging = !1
                }
            },
            pointerDown: function(t, i) {
                i.preventDefault();
                var r = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
                i.button !== 2 && (t === "both" && this.setTempMinInterval(), t || (t = this.target || "from"), this.current_plugin = this.plugin_count, this.target = t, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = r - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(t), f && n("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
            },
            pointerClick: function(n, t) {
                t.preventDefault();
                var i = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX;
                t.button !== 2 && (this.current_plugin = this.plugin_count, this.target = n, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
            },
            key: function(n, t) {
                if (this.current_plugin === this.plugin_count && !t.altKey && !t.ctrlKey && !t.shiftKey && !t.metaKey) {
                    switch (t.which) {
                        case 83:
                        case 65:
                        case 40:
                        case 37:
                            t.preventDefault();
                            this.moveByKey(!1);
                            break;
                        case 87:
                        case 68:
                        case 38:
                        case 39:
                            t.preventDefault();
                            this.moveByKey(!0)
                    }
                    return !0
                }
            },
            moveByKey: function(n) {
                var i = this.coords.p_pointer,
                    t = (this.options.max - this.options.min) / 100;
                t = this.options.step / t;
                n ? i += t : i -= t;
                this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * i);
                this.is_key = !0;
                this.calc()
            },
            setMinMax: function() {
                if (this.options) {
                    if (this.options.hide_min_max) {
                        this.$cache.min[0].style.display = "none";
                        this.$cache.max[0].style.display = "none";
                        return
                    }
                    if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
                    else {
                        var n = this._prettify(this.options.min),
                            t = this._prettify(this.options.max);
                        this.result.min_pretty = n;
                        this.result.max_pretty = t;
                        this.$cache.min.html(this.decorate(n, this.options.min));
                        this.$cache.max.html(this.decorate(t, this.options.max))
                    }
                    this.labels.w_min = this.$cache.min.outerWidth(!1);
                    this.labels.w_max = this.$cache.max.outerWidth(!1)
                }
            },
            setTempMinInterval: function() {
                var n = this.result.to - this.result.from;
                this.old_min_interval === null && (this.old_min_interval = this.options.min_interval);
                this.options.min_interval = n
            },
            restoreOriginalMinInterval: function() {
                this.old_min_interval !== null && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
            },
            calc: function(n) {
                var t;
                if (this.options && (this.calc_count++, (this.calc_count === 10 || n) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                    this.calcPointerPercent();
                    t = this.getHandleX();
                    this.target === "both" && (this.coords.p_gap = 0, t = this.getHandleX());
                    this.target === "click" && (this.coords.p_gap = this.coords.p_handle / 2, t = this.getHandleX(), this.target = this.options.drag_interval ? "both_one" : this.chooseHandle(t));
                    switch (this.target) {
                        case "base":
                            var f = (this.options.max - this.options.min) / 100,
                                e = (this.result.from - this.options.min) / f,
                                h = (this.result.to - this.options.min) / f;
                            this.coords.p_single_real = this.toFixed(e);
                            this.coords.p_from_real = this.toFixed(e);
                            this.coords.p_to_real = this.toFixed(h);
                            this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
                            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                            this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                            this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                            this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                            this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            this.target = null;
                            break;
                        case "single":
                            if (this.options.from_fixed) break;
                            this.coords.p_single_real = this.convertToRealPercent(t);
                            this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real);
                            this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
                            this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                            break;
                        case "from":
                            if (this.options.from_fixed) break;
                            this.coords.p_from_real = this.convertToRealPercent(t);
                            this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
                            this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real);
                            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                            this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                            this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                            this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                            break;
                        case "to":
                            if (this.options.to_fixed) break;
                            this.coords.p_to_real = this.convertToRealPercent(t);
                            this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
                            this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real);
                            this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                            this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                            this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                            this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            t = this.toFixed(t + this.coords.p_handle * .001);
                            this.coords.p_from_real = this.convertToRealPercent(t) - this.coords.p_gap_left;
                            this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
                            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                            this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                            this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                            this.coords.p_to_real = this.convertToRealPercent(t) + this.coords.p_gap_right;
                            this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
                            this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                            this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                            this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both_one":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            var o = this.convertToRealPercent(t),
                                c = this.result.from_percent,
                                l = this.result.to_percent,
                                u = l - c,
                                s = u / 2,
                                i = o - s,
                                r = o + s;
                            i < 0 && (i = 0, r = i + u);
                            r > 100 && (r = 100, i = r - u);
                            this.coords.p_from_real = this.calcWithStep(i);
                            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                            this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                            this.coords.p_to_real = this.calcWithStep(r);
                            this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                            this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                    }
                    this.options.type === "single" ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to]));
                    this.calcMinMax();
                    this.calcLabels()
                }
            },
            calcPointerPercent: function() {
                if (!this.coords.w_rs) {
                    this.coords.p_pointer = 0;
                    return
                }
                this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs);
                this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)
            },
            convertToRealPercent: function(n) {
                var t = 100 - this.coords.p_handle;
                return n / t * 100
            },
            convertToFakePercent: function(n) {
                var t = 100 - this.coords.p_handle;
                return n / 100 * t
            },
            getHandleX: function() {
                var t = 100 - this.coords.p_handle,
                    n = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                return n < 0 ? n = 0 : n > t && (n = t), n
            },
            calcHandlePercent: function() {
                this.coords.w_handle = this.options.type === "single" ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1);
                this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
            },
            chooseHandle: function(n) {
                if (this.options.type === "single") return "single";
                var t = this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2;
                return n >= t ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
            },
            calcMinMax: function() {
                this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
            },
            calcLabels: function() {
                this.coords.w_rs && !this.options.hide_from_to && (this.options.type === "single" ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)))
            },
            updateScene: function() {
                (this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options) && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
            },
            drawHandles: function() {
                (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs) && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs) && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", this.options.type === "single" ? (this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%", this.$cache.single[0].style.left = this.labels.p_single_left + "%") : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%"), this.$cache.single[0].style.left = this.labels.p_single_left + "%"), this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1)
            },
            drawLabels: function() {
                var e, t, n, r, u, i, f;
                if (this.options && (e = this.options.values.length, t = this.options.p_values, !this.options.hide_from_to))
                    if (this.options.type === "single") e ? (n = this.decorate(t[this.result.from]), this.$cache.single.html(n)) : (i = this._prettify(this.result.from), n = this.decorate(i, this.result.from), this.$cache.single.html(n)), this.calcLabels(), this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single_fake > 99 - this.labels.p_max ? "hidden" : "visible";
                    else {
                        e ? (this.options.decorate_both ? (n = this.decorate(t[this.result.from]), n += this.options.values_separator, n += this.decorate(t[this.result.to])) : n = this.decorate(t[this.result.from] + this.options.values_separator + t[this.result.to]), r = this.decorate(t[this.result.from]), u = this.decorate(t[this.result.to]), this.$cache.single.html(n), this.$cache.from.html(r), this.$cache.to.html(u)) : (i = this._prettify(this.result.from), f = this._prettify(this.result.to), this.options.decorate_both ? (n = this.decorate(i, this.result.from), n += this.options.values_separator, n += this.decorate(f, this.result.to)) : n = this.decorate(i + this.options.values_separator + f, this.result.to), r = this.decorate(i, this.result.from), u = this.decorate(f, this.result.to), this.$cache.single.html(n), this.$cache.from.html(r), this.$cache.to.html(u));
                        this.calcLabels();
                        var c = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                            h = this.labels.p_single_left + this.labels.p_single_fake,
                            o = this.labels.p_to_left + this.labels.p_to_fake,
                            s = Math.max(h, o);
                        this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? (this.target === "from" ? this.$cache.from[0].style.visibility = "visible" : this.target === "to" ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", s = o) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", s = Math.max(h, o))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden");
                        this.$cache.min[0].style.visibility = c < this.labels.p_min + 1 ? "hidden" : "visible";
                        this.$cache.max[0].style.visibility = s > 99 - this.labels.p_max ? "hidden" : "visible"
                    }
            },
            drawShadow: function() {
                var n = this.options,
                    i = this.$cache,
                    e = typeof n.from_min == "number" && !isNaN(n.from_min),
                    o = typeof n.from_max == "number" && !isNaN(n.from_max),
                    s = typeof n.to_min == "number" && !isNaN(n.to_min),
                    h = typeof n.to_max == "number" && !isNaN(n.to_max),
                    t, r, u, f;
                n.type === "single" ? n.from_shadow && (e || o) ? (t = this.convertToPercent(e ? n.from_min : n.min), r = this.convertToPercent(o ? n.from_max : n.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), r = this.toFixed(r - this.coords.p_handle / 100 * r), t = t + this.coords.p_handle / 2, i.shad_single[0].style.display = "block", i.shad_single[0].style.left = t + "%", i.shad_single[0].style.width = r + "%") : i.shad_single[0].style.display = "none" : (n.from_shadow && (e || o) ? (t = this.convertToPercent(e ? n.from_min : n.min), r = this.convertToPercent(o ? n.from_max : n.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), r = this.toFixed(r - this.coords.p_handle / 100 * r), t = t + this.coords.p_handle / 2, i.shad_from[0].style.display = "block", i.shad_from[0].style.left = t + "%", i.shad_from[0].style.width = r + "%") : i.shad_from[0].style.display = "none", n.to_shadow && (s || h) ? (u = this.convertToPercent(s ? n.to_min : n.min), f = this.convertToPercent(h ? n.to_max : n.max) - u, u = this.toFixed(u - this.coords.p_handle / 100 * u), f = this.toFixed(f - this.coords.p_handle / 100 * f), u = u + this.coords.p_handle / 2, i.shad_to[0].style.display = "block", i.shad_to[0].style.left = u + "%", i.shad_to[0].style.width = f + "%") : i.shad_to[0].style.display = "none")
            },
            writeToInput: function() {
                this.options.type === "single" ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to))
            },
            callOnStart: function() {
                if (this.writeToInput(), this.options.onStart && typeof this.options.onStart == "function")
                    if (this.options.scope) this.options.onStart.call(this.options.scope, this.result);
                    else this.options.onStart(this.result)
            },
            callOnChange: function() {
                if (this.writeToInput(), this.options.onChange && typeof this.options.onChange == "function")
                    if (this.options.scope) this.options.onChange.call(this.options.scope, this.result);
                    else this.options.onChange(this.result)
            },
            callOnFinish: function() {
                if (this.writeToInput(), this.options.onFinish && typeof this.options.onFinish == "function")
                    if (this.options.scope) this.options.onFinish.call(this.options.scope, this.result);
                    else this.options.onFinish(this.result)
            },
            callOnUpdate: function() {
                if (this.writeToInput(), this.options.onUpdate && typeof this.options.onUpdate == "function")
                    if (this.options.scope) this.options.onUpdate.call(this.options.scope, this.result);
                    else this.options.onUpdate(this.result)
            },
            toggleInput: function() {
                this.$cache.input.toggleClass("irs-hidden-input");
                this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex");
                this.has_tab_index = !this.has_tab_index
            },
            convertToPercent: function(n, t) {
                var i = this.options.max - this.options.min,
                    f = i / 100,
                    r, u;
                return i ? (r = t ? n : n - this.options.min, u = r / f, this.toFixed(u)) : (this.no_diapason = !0, 0)
            },
            convertToValue: function(n) {
                var i = this.options.min,
                    h = this.options.max,
                    c = i.toString().split(".")[1],
                    l = h.toString().split(".")[1],
                    u, f, e = 0,
                    o = 0,
                    t, s, r;
                return n === 0 ? this.options.min : n === 100 ? this.options.max : (c && (u = c.length, e = u), l && (f = l.length, e = f), u && f && (e = u >= f ? u : f), i < 0 && (o = Math.abs(i), i = +(i + o).toFixed(e), h = +(h + o).toFixed(e)), t = (h - i) / 100 * n + i, s = this.options.step.toString().split(".")[1], s ? t = +t.toFixed(s.length) : (t = t / this.options.step, t = t * this.options.step, t = +t.toFixed(0)), o && (t -= o), r = s ? +t.toFixed(s.length) : this.toFixed(t), r < this.options.min ? r = this.options.min : r > this.options.max && (r = this.options.max), r)
            },
            calcWithStep: function(n) {
                var t = Math.round(n / this.coords.p_step) * this.coords.p_step;
                return t > 100 && (t = 100), n === 100 && (t = 100), this.toFixed(t)
            },
            checkMinInterval: function(n, t, i) {
                var u = this.options,
                    r, f;
                return u.min_interval ? (r = this.convertToValue(n), f = this.convertToValue(t), i === "from" ? f - r < u.min_interval && (r = f - u.min_interval) : r - f < u.min_interval && (r = f + u.min_interval), this.convertToPercent(r)) : n
            },
            checkMaxInterval: function(n, t, i) {
                var u = this.options,
                    r, f;
                return u.max_interval ? (r = this.convertToValue(n), f = this.convertToValue(t), i === "from" ? f - r > u.max_interval && (r = f - u.max_interval) : r - f > u.max_interval && (r = f + u.max_interval), this.convertToPercent(r)) : n
            },
            checkDiapason: function(n, t, i) {
                var r = this.convertToValue(n),
                    u = this.options;
                return typeof t != "number" && (t = u.min), typeof i != "number" && (i = u.max), r < t && (r = t), r > i && (r = i), this.convertToPercent(r)
            },
            toFixed: function(n) {
                return n = n.toFixed(20), +n
            },
            _prettify: function(n) {
                return this.options.prettify_enabled ? this.options.prettify && typeof this.options.prettify == "function" ? this.options.prettify(n) : this.prettify(n) : n
            },
            prettify: function(n) {
                var t = n.toString();
                return t.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
            },
            checkEdges: function(n, t) {
                return this.options.force_edges ? (n < 0 ? n = 0 : n > 100 - t && (n = 100 - t), this.toFixed(n)) : this.toFixed(n)
            },
            validate: function() {
                var n = this.options,
                    t = this.result,
                    u = n.values,
                    f = u.length,
                    i, r;
                if (typeof n.min == "string" && (n.min = +n.min), typeof n.max == "string" && (n.max = +n.max), typeof n.from == "string" && (n.from = +n.from), typeof n.to == "string" && (n.to = +n.to), typeof n.step == "string" && (n.step = +n.step), typeof n.from_min == "string" && (n.from_min = +n.from_min), typeof n.from_max == "string" && (n.from_max = +n.from_max), typeof n.to_min == "string" && (n.to_min = +n.to_min), typeof n.to_max == "string" && (n.to_max = +n.to_max), typeof n.grid_num == "string" && (n.grid_num = +n.grid_num), n.max < n.min && (n.max = n.min), f)
                    for (n.p_values = [], n.min = 0, n.max = f - 1, n.step = 1, n.grid_num = n.max, n.grid_snap = !0, r = 0; r < f; r++) i = +u[r], isNaN(i) ? i = u[r] : (u[r] = i, i = this._prettify(i)), n.p_values.push(i);
                (typeof n.from != "number" || isNaN(n.from)) && (n.from = n.min);
                (typeof n.to != "number" || isNaN(n.to)) && (n.to = n.max);
                n.type === "single" ? (n.from < n.min && (n.from = n.min), n.from > n.max && (n.from = n.max)) : (n.from < n.min && (n.from = n.min), n.from > n.max && (n.from = n.max), n.to < n.min && (n.to = n.min), n.to > n.max && (n.to = n.max), this.update_check.from && (this.update_check.from !== n.from && n.from > n.to && (n.from = n.to), this.update_check.to !== n.to && n.to < n.from && (n.to = n.from)), n.from > n.to && (n.from = n.to), n.to < n.from && (n.to = n.from));
                (typeof n.step != "number" || isNaN(n.step) || !n.step || n.step < 0) && (n.step = 1);
                typeof n.from_min == "number" && n.from < n.from_min && (n.from = n.from_min);
                typeof n.from_max == "number" && n.from > n.from_max && (n.from = n.from_max);
                typeof n.to_min == "number" && n.to < n.to_min && (n.to = n.to_min);
                typeof n.to_max == "number" && n.from > n.to_max && (n.to = n.to_max);
                t && (t.min !== n.min && (t.min = n.min), t.max !== n.max && (t.max = n.max), (t.from < t.min || t.from > t.max) && (t.from = n.from), (t.to < t.min || t.to > t.max) && (t.to = n.to));
                (typeof n.min_interval != "number" || isNaN(n.min_interval) || !n.min_interval || n.min_interval < 0) && (n.min_interval = 0);
                (typeof n.max_interval != "number" || isNaN(n.max_interval) || !n.max_interval || n.max_interval < 0) && (n.max_interval = 0);
                n.min_interval && n.min_interval > n.max - n.min && (n.min_interval = n.max - n.min);
                n.max_interval && n.max_interval > n.max - n.min && (n.max_interval = n.max - n.min)
            },
            decorate: function(n, t) {
                var r = "",
                    i = this.options;
                return i.prefix && (r += i.prefix), r += n, i.max_postfix && (i.values.length && n === i.p_values[i.max] ? (r += i.max_postfix, i.postfix && (r += " ")) : t === i.max && (r += i.max_postfix, i.postfix && (r += " "))), i.postfix && (r += i.postfix), r
            },
            updateFrom: function() {
                this.result.from = this.options.from;
                this.result.from_percent = this.convertToPercent(this.result.from);
                this.result.from_pretty = this._prettify(this.result.from);
                this.options.values && (this.result.from_value = this.options.values[this.result.from])
            },
            updateTo: function() {
                this.result.to = this.options.to;
                this.result.to_percent = this.convertToPercent(this.result.to);
                this.result.to_pretty = this._prettify(this.result.to);
                this.options.values && (this.result.to_value = this.options.values[this.result.to])
            },
            updateResult: function() {
                this.result.min = this.options.min;
                this.result.max = this.options.max;
                this.updateFrom();
                this.updateTo()
            },
            appendGrid: function() {
                if (this.options.grid) {
                    var n = this.options,
                        r, o, h = n.max - n.min,
                        i = n.grid_num,
                        u = 0,
                        t = 0,
                        f = 4,
                        c, l, a = 0,
                        e, s = "";
                    for (this.calcGridMargin(), n.grid_snap ? h > 50 ? (i = 50 / n.step, u = this.toFixed(n.step / .5)) : (i = h / n.step, u = this.toFixed(n.step / (h / 100))) : u = this.toFixed(100 / i), i > 4 && (f = 3), i > 7 && (f = 2), i > 14 && (f = 1), i > 28 && (f = 0), r = 0; r < i + 1; r++) {
                        for (c = f, t = this.toFixed(u * r), t > 100 && (t = 100), this.coords.big[r] = t, l = (t - u * (r - 1)) / (c + 1), o = 1; o <= c; o++) {
                            if (t === 0) break;
                            a = this.toFixed(t - l * o);
                            s += '<span class="irs-grid-pol small" style="left: ' + a + '%"><\/span>'
                        }
                        s += '<span class="irs-grid-pol" style="left: ' + t + '%"><\/span>';
                        e = this.convertToValue(t);
                        e = n.values.length ? n.p_values[e] : this._prettify(e);
                        s += '<span class="irs-grid-text js-grid-text-' + r + '" style="left: ' + t + '%">' + e + "<\/span>"
                    }
                    this.coords.big_num = Math.ceil(i + 1);
                    this.$cache.cont.addClass("irs-with-grid");
                    this.$cache.grid.html(s);
                    this.cacheGridLabels()
                }
            },
            cacheGridLabels: function() {
                for (var t, i = this.coords.big_num, n = 0; n < i; n++) t = this.$cache.grid.find(".js-grid-text-" + n), this.$cache.grid_labels.push(t);
                this.calcGridLabels()
            },
            calcGridLabels: function() {
                for (var u, i = [], r = [], t = this.coords.big_num, n = 0; n < t; n++) this.coords.big_w[n] = this.$cache.grid_labels[n].outerWidth(!1), this.coords.big_p[n] = this.toFixed(this.coords.big_w[n] / this.coords.w_rs * 100), this.coords.big_x[n] = this.toFixed(this.coords.big_p[n] / 2), i[n] = this.toFixed(this.coords.big[n] - this.coords.big_x[n]), r[n] = this.toFixed(i[n] + this.coords.big_p[n]);
                for (this.options.force_edges && (i[0] < -this.coords.grid_gap && (i[0] = -this.coords.grid_gap, r[0] = this.toFixed(i[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), r[t - 1] > 100 + this.coords.grid_gap && (r[t - 1] = 100 + this.coords.grid_gap, i[t - 1] = this.toFixed(r[t - 1] - this.coords.big_p[t - 1]), this.coords.big_x[t - 1] = this.toFixed(this.coords.big_p[t - 1] - this.coords.grid_gap))), this.calcGridCollision(2, i, r), this.calcGridCollision(4, i, r), n = 0; n < t; n++) u = this.$cache.grid_labels[n][0], this.coords.big_x[n] !== Number.POSITIVE_INFINITY && (u.style.marginLeft = -this.coords.big_x[n] + "%")
            },
            calcGridCollision: function(n, t, i) {
                for (var u, f, e = this.coords.big_num, r = 0; r < e; r += n) {
                    if (u = r + n / 2, u >= e) break;
                    f = this.$cache.grid_labels[u][0];
                    f.style.visibility = i[r] <= t[u] ? "visible" : "hidden"
                }
            },
            calcGridMargin: function() {
                this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs) && (this.coords.w_handle = this.options.type === "single" ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%")
            },
            update: function(t) {
                this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = n.extend(this.options, t), this.validate(), this.updateResult(t), this.toggleInput(), this.remove(), this.init(!0))
            },
            reset: function() {
                this.input && (this.updateResult(), this.update())
            },
            destroy: function() {
                this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), n.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null)
            }
        };
        n.fn.ionRangeSlider = function(t) {
                return this.each(function() {
                    n.data(this, "ionRangeSlider") || n.data(this, "ionRangeSlider", new e(this, t, o++))
                })
            },
            function() {
                for (var r = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !i.requestAnimationFrame; ++n) i.requestAnimationFrame = i[t[n] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[t[n] + "CancelAnimationFrame"] || i[t[n] + "CancelRequestAnimationFrame"];
                i.requestAnimationFrame || (i.requestAnimationFrame = function(n) {
                    var t = (new Date).getTime(),
                        u = Math.max(0, 16 - (t - r)),
                        f = i.setTimeout(function() {
                            n(t + u)
                        }, u);
                    return r = t + u, f
                });
                i.cancelAnimationFrame || (i.cancelAnimationFrame = function(n) {
                    clearTimeout(n)
                })
            }()
    }),
    function(n) {
        function r() {}

        function t(n) {
            function u(t) {
                t.prototype.option || (t.prototype.option = function(t) {
                    n.isPlainObject(t) && (this.options = n.extend(!0, this.options, t))
                })
            }

            function f(r, u) {
                n.fn[r] = function(f) {
                    var h, o, c, l, e, s;
                    if (typeof f == "string") {
                        for (h = i.call(arguments, 1), o = 0, c = this.length; o < c; o++) {
                            if (l = this[o], e = n.data(l, r), !e) {
                                t("cannot call methods on " + r + " prior to initialization; attempted to call '" + f + "'");
                                continue
                            }
                            if (!n.isFunction(e[f]) || f.charAt(0) === "_") {
                                t("no such method '" + f + "' for " + r + " instance");
                                continue
                            }
                            if (s = e[f].apply(e, h), s !== undefined) return s
                        }
                        return this
                    }
                    return this.each(function() {
                        var t = n.data(this, r);
                        t ? (t.option(f), t._init()) : (t = new u(this, f), n.data(this, r, t))
                    })
                }
            }
            if (n) {
                var t = typeof console == "undefined" ? r : function(n) {
                    console.error(n)
                };
                return n.bridget = function(n, t) {
                    u(t);
                    f(n, t)
                }, n.bridget
            }
        }
        var i = Array.prototype.slice;
        typeof define == "function" && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], t) : t(n.jQuery)
    }(window),
    function(n) {
        function f(t) {
            var i = n.event;
            return i.target = i.target || i.srcElement || t, i
        }
        var t = document.documentElement,
            u = function() {},
            i, r;
        t.addEventListener ? u = function(n, t, i) {
            n.addEventListener(t, i, !1)
        } : t.attachEvent && (u = function(n, t, i) {
            n[t + i] = i.handleEvent ? function() {
                var t = f(n);
                i.handleEvent.call(i, t)
            } : function() {
                var t = f(n);
                i.call(n, t)
            };
            n.attachEvent("on" + t, n[t + i])
        });
        i = function() {};
        t.removeEventListener ? i = function(n, t, i) {
            n.removeEventListener(t, i, !1)
        } : t.detachEvent && (i = function(n, t, i) {
            n.detachEvent("on" + t, n[t + i]);
            try {
                delete n[t + i]
            } catch (r) {
                n[t + i] = undefined
            }
        });
        r = {
            bind: u,
            unbind: i
        };
        typeof define == "function" && define.amd ? define("eventie/eventie", r) : typeof exports == "object" ? module.exports = r : n.eventie = r
    }(this),
    function(n) {
        function t(n) {
            typeof n == "function" && (t.isReady ? n() : r.push(n))
        }

        function u(n) {
            var o = n.type === "readystatechange" && i.readyState !== "complete",
                u, f, e;
            if (!t.isReady && !o)
                for (t.isReady = !0, u = 0, f = r.length; u < f; u++) e = r[u], e()
        }

        function f(r) {
            return r.bind(i, "DOMContentLoaded", u), r.bind(i, "readystatechange", u), r.bind(n, "load", u), t
        }
        var i = n.document,
            r = [];
        t.isReady = !1;
        typeof define == "function" && define.amd ? (t.isReady = typeof requirejs == "function", define("doc-ready/doc-ready", ["eventie/eventie"], f)) : n.docReady = f(n.eventie)
    }(this),
    function() {
        function t() {}

        function u(n, t) {
            for (var i = n.length; i--;)
                if (n[i].listener === t) return i;
            return -1
        }

        function i(n) {
            return function() {
                return this[n].apply(this, arguments)
            }
        }
        var n = t.prototype,
            r = this,
            f = r.EventEmitter;
        n.getListeners = function(n) {
            var t = this._getEvents(),
                r, i;
            if (n instanceof RegExp) {
                r = {};
                for (i in t) t.hasOwnProperty(i) && n.test(i) && (r[i] = t[i])
            } else r = t[n] || (t[n] = []);
            return r
        };
        n.flattenListeners = function(n) {
            for (var i = [], t = 0; t < n.length; t += 1) i.push(n[t].listener);
            return i
        };
        n.getListenersAsObject = function(n) {
            var t = this.getListeners(n),
                i;
            return t instanceof Array && (i = {}, i[n] = t), i || t
        };
        n.addListener = function(n, t) {
            var i = this.getListenersAsObject(n),
                f = typeof t == "object";
            for (var r in i) i.hasOwnProperty(r) && u(i[r], t) === -1 && i[r].push(f ? t : {
                listener: t,
                once: !1
            });
            return this
        };
        n.on = i("addListener");
        n.addOnceListener = function(n, t) {
            return this.addListener(n, {
                listener: t,
                once: !0
            })
        };
        n.once = i("addOnceListener");
        n.defineEvent = function(n) {
            return this.getListeners(n), this
        };
        n.defineEvents = function(n) {
            for (var t = 0; t < n.length; t += 1) this.defineEvent(n[t]);
            return this
        };
        n.removeListener = function(n, t) {
            var i = this.getListenersAsObject(n),
                r;
            for (var f in i) i.hasOwnProperty(f) && (r = u(i[f], t), r !== -1 && i[f].splice(r, 1));
            return this
        };
        n.off = i("removeListener");
        n.addListeners = function(n, t) {
            return this.manipulateListeners(!1, n, t)
        };
        n.removeListeners = function(n, t) {
            return this.manipulateListeners(!0, n, t)
        };
        n.manipulateListeners = function(n, t, i) {
            var r, u, f = n ? this.removeListener : this.addListener,
                e = n ? this.removeListeners : this.addListeners;
            if (typeof t != "object" || t instanceof RegExp)
                for (r = i.length; r--;) f.call(this, t, i[r]);
            else
                for (r in t) t.hasOwnProperty(r) && (u = t[r]) && (typeof u == "function" ? f.call(this, r, u) : e.call(this, r, u));
            return this
        };
        n.removeEvent = function(n) {
            var r = typeof n,
                t = this._getEvents(),
                i;
            if (r === "string") delete t[n];
            else if (n instanceof RegExp)
                for (i in t) t.hasOwnProperty(i) && n.test(i) && delete t[i];
            else delete this._events;
            return this
        };
        n.removeAllListeners = i("removeEvent");
        n.emitEvent = function(n, t) {
            var r = this.getListenersAsObject(n),
                i, f, u, e;
            for (u in r)
                if (r.hasOwnProperty(u))
                    for (f = r[u].length; f--;) i = r[u][f], i.once === !0 && this.removeListener(n, i.listener), e = i.listener.apply(this, t || []), e === this._getOnceReturnValue() && this.removeListener(n, i.listener);
            return this
        };
        n.trigger = i("emitEvent");
        n.emit = function(n) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(n, t)
        };
        n.setOnceReturnValue = function(n) {
            return this._onceReturnValue = n, this
        };
        n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        };
        n._getEvents = function() {
            return this._events || (this._events = {})
        };
        t.noConflict = function() {
            return r.EventEmitter = f, t
        };
        typeof define == "function" && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : typeof module == "object" && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function(n) {
        function t(n) {
            var u, t, f;
            if (n) {
                if (typeof r[n] == "string") return n;
                for (n = n.charAt(0).toUpperCase() + n.slice(1), t = 0, f = i.length; t < f; t++)
                    if (u = i[t] + n, typeof r[u] == "string") return u
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            r = document.documentElement.style;
        typeof define == "function" && define.amd ? define("get-style-property/get-style-property", [], function() {
            return t
        }) : typeof exports == "object" ? module.exports = t : n.getStyleProperty = t
    }(window),
    function(n) {
        function r(n) {
            var t = parseFloat(n),
                i = n.indexOf("%") === -1 && !isNaN(t);
            return i && t
        }

        function e() {
            for (var r, i = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, n = 0, u = t.length; n < u; n++) r = t[n], i[r] = 0;
            return i
        }

        function u(n) {
            function s(n) {
                var s, i, p, c, w, a, l, v, y;
                if (typeof n == "string" && (n = document.querySelector(n)), n && typeof n == "object" && n.nodeType) {
                    if (s = f(n), s.display === "none") return e();
                    for (i = {}, i.width = n.offsetWidth, i.height = n.offsetHeight, p = i.isBorderBox = !!(u && s[u] && s[u] === "border-box"), c = 0, w = t.length; c < w; c++) a = t[c], l = s[a], l = h(n, l), v = parseFloat(l), i[a] = isNaN(v) ? 0 : v;
                    var b = i.paddingLeft + i.paddingRight,
                        k = i.paddingTop + i.paddingBottom,
                        it = i.marginLeft + i.marginRight,
                        rt = i.marginTop + i.marginBottom,
                        d = i.borderLeftWidth + i.borderRightWidth,
                        g = i.borderTopWidth + i.borderBottomWidth,
                        nt = p && o,
                        tt = r(s.width);
                    return tt !== !1 && (i.width = tt + (nt ? 0 : b + d)), y = r(s.height), y !== !1 && (i.height = y + (nt ? 0 : k + g)), i.innerWidth = i.width - (b + d), i.innerHeight = i.height - (k + g), i.outerWidth = i.width + it, i.outerHeight = i.height + rt, i
                }
            }

            function h(n, t) {
                if (i || t.indexOf("%") === -1) return t;
                var r = n.style,
                    e = r.left,
                    u = n.runtimeStyle,
                    f = u && u.left;
                return f && (u.left = n.currentStyle.left), r.left = t, t = r.pixelLeft, r.left = e, f && (u.left = f), t
            }
            var u = n("boxSizing"),
                o;
            return function() {
                var n, t, i;
                u && (n = document.createElement("div"), n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style[u] = "border-box", t = document.body || document.documentElement, t.appendChild(n), i = f(n), o = r(i.width) === 200, t.removeChild(n))
            }(), s
        }
        var i = n.getComputedStyle,
            f = i ? function(n) {
                return i(n, null)
            } : function(n) {
                return n.currentStyle
            },
            t = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        typeof define == "function" && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], u) : typeof exports == "object" ? module.exports = u(require("get-style-property")) : n.getSize = u(n.getStyleProperty)
    }(window),
    function(n, t) {
        function r(n, t) {
            return n[u](t)
        }

        function f(n) {
            if (!n.parentNode) {
                var t = document.createDocumentFragment();
                t.appendChild(n)
            }
        }

        function s(n, t) {
            var r, i, u;
            for (f(n), r = n.parentNode.querySelectorAll(t), i = 0, u = r.length; i < u; i++)
                if (r[i] === n) return !0;
            return !1
        }

        function h(n, t) {
            return f(n), r(n, t)
        }
        var u = function() {
                var i, n, u, f, r;
                if (t.matchesSelector) return "matchesSelector";
                for (i = ["webkit", "moz", "ms", "o"], n = 0, u = i.length; n < u; n++)
                    if (f = i[n], r = f + "MatchesSelector", t[r]) return r
            }(),
            i, e, o;
        u ? (e = document.createElement("div"), o = r(e, "div"), i = o ? r : h) : i = s;
        typeof define == "function" && define.amd ? define("matches-selector/matches-selector", [], function() {
            return i
        }) : window.matchesSelector = i
    }(this, Element.prototype),
    function(n) {
        function u(n, t) {
            for (var i in t) n[i] = t[i];
            return n
        }

        function f(n) {
            for (var t in n) return !1;
            return t = null, !0
        }

        function e(n) {
            return n.replace(/([A-Z])/g, function(n) {
                return "-" + n.toLowerCase()
            })
        }

        function i(n, t, i) {
            function o(n, t) {
                n && (this.element = n, this.layout = t, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var s = i("transition"),
                h = i("transform"),
                w = s && h,
                b = !!i("perspective"),
                c = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                } [s],
                l = ["transform", "transition", "transitionDuration", "transitionProperty"],
                k = function() {
                    for (var n, t, u = {}, r = 0, f = l.length; r < f; r++) n = l[r], t = i(n), t && t !== n && (u[n] = t);
                    return u
                }(),
                a, v, y, p;
            return u(o.prototype, n.prototype), o.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                };
                this.css({
                    position: "absolute"
                })
            }, o.prototype.handleEvent = function(n) {
                var t = "on" + n.type;
                this[t] && this[t](n)
            }, o.prototype.getSize = function() {
                this.size = t(this.element)
            }, o.prototype.css = function(n) {
                var r = this.element.style,
                    t, i;
                for (t in n) i = k[t] || t, r[i] = n[t]
            }, o.prototype.getPosition = function() {
                var u = r(this.element),
                    f = this.layout.options,
                    e = f.isOriginLeft,
                    o = f.isOriginTop,
                    n = parseInt(u[e ? "left" : "right"], 10),
                    t = parseInt(u[o ? "top" : "bottom"], 10),
                    i;
                n = isNaN(n) ? 0 : n;
                t = isNaN(t) ? 0 : t;
                i = this.layout.size;
                n -= e ? i.paddingLeft : i.paddingRight;
                t -= o ? i.paddingTop : i.paddingBottom;
                this.position.x = n;
                this.position.y = t
            }, o.prototype.layoutPosition = function() {
                var t = this.layout.size,
                    i = this.layout.options,
                    n = {};
                i.isOriginLeft ? (n.left = this.position.x + t.paddingLeft + "px", n.right = "") : (n.right = this.position.x + t.paddingRight + "px", n.left = "");
                i.isOriginTop ? (n.top = this.position.y + t.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + t.paddingBottom + "px", n.top = "");
                this.css(n);
                this.emitEvent("layout", [this])
            }, a = b ? function(n, t) {
                return "translate3d(" + n + "px, " + t + "px, 0)"
            } : function(n, t) {
                return "translate(" + n + "px, " + t + "px)"
            }, o.prototype._transitionTo = function(n, t) {
                this.getPosition();
                var e = this.position.x,
                    o = this.position.y,
                    s = parseInt(n, 10),
                    h = parseInt(t, 10),
                    c = s === this.position.x && h === this.position.y;
                if (this.setPosition(n, t), c && !this.isTransitioning) {
                    this.layoutPosition();
                    return
                }
                var i = n - e,
                    r = t - o,
                    u = {},
                    f = this.layout.options;
                i = f.isOriginLeft ? i : -i;
                r = f.isOriginTop ? r : -r;
                u.transform = a(i, r);
                this.transition({
                    to: u,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, o.prototype.goTo = function(n, t) {
                this.setPosition(n, t);
                this.layoutPosition()
            }, o.prototype.moveTo = w ? o.prototype._transitionTo : o.prototype.goTo, o.prototype.setPosition = function(n, t) {
                this.position.x = parseInt(n, 10);
                this.position.y = parseInt(t, 10)
            }, o.prototype._nonTransition = function(n) {
                this.css(n.to);
                n.isCleaning && this._removeStyles(n.to);
                for (var t in n.onTransitionEnd) n.onTransitionEnd[t].call(this)
            }, o.prototype._transition = function(n) {
                var i, t, r;
                if (!parseFloat(this.layout.options.transitionDuration)) {
                    this._nonTransition(n);
                    return
                }
                i = this._transn;
                for (t in n.onTransitionEnd) i.onEnd[t] = n.onTransitionEnd[t];
                for (t in n.to) i.ingProperties[t] = !0, n.isCleaning && (i.clean[t] = !0);
                n.from && (this.css(n.from), r = this.element.offsetHeight, r = null);
                this.enableTransition(n.to);
                this.css(n.to);
                this.isTransitioning = !0
            }, v = h && e(h) + ",opacity", o.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: v,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(c, this, !1))
            }, o.prototype.transition = o.prototype[s ? "_transition" : "_nonTransition"], o.prototype.onwebkitTransitionEnd = function(n) {
                this.ontransitionend(n)
            }, o.prototype.onotransitionend = function(n) {
                this.ontransitionend(n)
            }, y = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            }, o.prototype.ontransitionend = function(n) {
                var t, i, r;
                n.target === this.element && (t = this._transn, i = y[n.propertyName] || n.propertyName, delete t.ingProperties[i], f(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[n.propertyName] = "", delete t.clean[i]), i in t.onEnd && (r = t.onEnd[i], r.call(this), delete t.onEnd[i]), this.emitEvent("transitionEnd", [this]))
            }, o.prototype.disableTransition = function() {
                this.removeTransitionStyles();
                this.element.removeEventListener(c, this, !1);
                this.isTransitioning = !1
            }, o.prototype._removeStyles = function(n) {
                var t = {};
                for (var i in n) t[i] = "";
                this.css(t)
            }, p = {
                transitionProperty: "",
                transitionDuration: ""
            }, o.prototype.removeTransitionStyles = function() {
                this.css(p)
            }, o.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element);
                this.emitEvent("remove", [this])
            }, o.prototype.remove = function() {
                if (!s || !parseFloat(this.layout.options.transitionDuration)) {
                    this.removeElem();
                    return
                }
                var n = this;
                this.on("transitionEnd", function() {
                    return n.removeElem(), !0
                });
                this.hide()
            }, o.prototype.reveal = function() {
                delete this.isHidden;
                this.css({
                    display: ""
                });
                var n = this.layout.options;
                this.transition({
                    from: n.hiddenStyle,
                    to: n.visibleStyle,
                    isCleaning: !0
                })
            }, o.prototype.hide = function() {
                this.isHidden = !0;
                this.css({
                    display: ""
                });
                var n = this.layout.options;
                this.transition({
                    from: n.visibleStyle,
                    to: n.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, o.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, o
        }
        var t = n.getComputedStyle,
            r = t ? function(n) {
                return t(n, null)
            } : function(n) {
                return n.currentStyle
            };
        typeof define == "function" && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], i) : (n.Outlayer = {}, n.Outlayer.Item = i(n.EventEmitter, n.getSize, n.getStyleProperty))
    }(window),
    function(n) {
        function i(n, t) {
            for (var i in t) n[i] = t[i];
            return n
        }

        function l(n) {
            return c.call(n) === "[object Array]"
        }

        function u(n) {
            var t = [],
                i, r;
            if (l(n)) t = n;
            else if (n && typeof n.length == "number")
                for (i = 0, r = n.length; i < r; i++) t.push(n[i]);
            else t.push(n);
            return t
        }

        function s(n, t) {
            var i = a(t, n);
            i !== -1 && t.splice(i, 1)
        }

        function v(n) {
            return n.replace(/(.)([A-Z])/g, function(n, t, i) {
                return t + "-" + i
            }).toLowerCase()
        }

        function h(h, c, l, a, y, p) {
            function w(n, t) {
                if (typeof n == "string" && (n = e.querySelector(n)), !n || !f(n)) {
                    r && r.error("Bad " + this.constructor.namespace + " element: " + n);
                    return
                }
                this.element = n;
                this.options = i({}, this.constructor.defaults);
                this.option(t);
                var u = ++k;
                this.element.outlayerGUID = u;
                b[u] = this;
                this._create();
                this.options.isInitLayout && this.layout()
            }
            var k = 0,
                b = {};
            return w.namespace = "outlayer", w.Item = p, w.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, i(w.prototype, l.prototype), w.prototype.option = function(n) {
                i(this.options, n)
            }, w.prototype._create = function() {
                this.reloadItems();
                this.stamps = [];
                this.stamp(this.options.stamp);
                i(this.element.style, this.options.containerStyle);
                this.options.isResizeBound && this.bindResize()
            }, w.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, w.prototype._itemize = function(n) {
                for (var u, f, i = this._filterFindItemElements(n), e = this.constructor.Item, r = [], t = 0, o = i.length; t < o; t++) u = i[t], f = new e(u, this), r.push(f);
                return r
            }, w.prototype._filterFindItemElements = function(n) {
                var r, i, e, h, t, s, o, c;
                for (n = u(n), r = this.options.itemSelector, i = [], e = 0, h = n.length; e < h; e++)
                    if (t = n[e], f(t))
                        if (r)
                            for (y(t, r) && i.push(t), s = t.querySelectorAll(r), o = 0, c = s.length; o < c; o++) i.push(s[o]);
                        else i.push(t);
                return i
            }, w.prototype.getItemElements = function() {
                for (var t = [], n = 0, i = this.items.length; n < i; n++) t.push(this.items[n].element);
                return t
            }, w.prototype.layout = function() {
                this._resetLayout();
                this._manageStamps();
                var n = this.options.isLayoutInstant !== undefined ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, n);
                this._isLayoutInited = !0
            }, w.prototype._init = w.prototype.layout, w.prototype._resetLayout = function() {
                this.getSize()
            }, w.prototype.getSize = function() {
                this.size = a(this.element)
            }, w.prototype._getMeasurement = function(n, t) {
                var i = this.options[n],
                    r;
                i ? (typeof i == "string" ? r = this.element.querySelector(i) : f(i) && (r = i), this[n] = r ? a(r)[t] : i) : this[n] = 0
            }, w.prototype.layoutItems = function(n, t) {
                n = this._getItemsForLayout(n);
                this._layoutItems(n, t);
                this._postLayout()
            }, w.prototype._getItemsForLayout = function(n) {
                for (var i, r = [], t = 0, u = n.length; t < u; t++) i = n[t], i.isIgnored || r.push(i);
                return r
            }, w.prototype._layoutItems = function(n, t) {
                function o() {
                    e.emitEvent("layoutComplete", [e, n])
                }
                var e = this,
                    f, i, s, r, u;
                if (!n || !n.length) {
                    o();
                    return
                }
                for (this._itemsOn(n, "layout", o), f = [], i = 0, s = n.length; i < s; i++) r = n[i], u = this._getItemLayoutPosition(r), u.item = r, u.isInstant = t || r.isLayoutInstant, f.push(u);
                this._processLayoutQueue(f)
            }, w.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, w.prototype._processLayoutQueue = function(n) {
                for (var t, i = 0, r = n.length; i < r; i++) t = n[i], this._positionItem(t.item, t.x, t.y, t.isInstant)
            }, w.prototype._positionItem = function(n, t, i, r) {
                r ? n.goTo(t, i) : n.moveTo(t, i)
            }, w.prototype._postLayout = function() {
                this.resizeContainer()
            }, w.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var n = this._getContainerSize();
                    n && (this._setContainerMeasure(n.width, !0), this._setContainerMeasure(n.height, !1))
                }
            }, w.prototype._getContainerSize = o, w.prototype._setContainerMeasure = function(n, t) {
                if (n !== undefined) {
                    var i = this.size;
                    i.isBorderBox && (n += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth);
                    n = Math.max(n, 0);
                    this.element.style[t ? "width" : "height"] = n + "px"
                }
            }, w.prototype._itemsOn = function(n, t, i) {
                function s() {
                    return u++, u === e && i.call(o), !0
                }
                for (var f, u = 0, e = n.length, o = this, r = 0, h = n.length; r < h; r++) {
                    f = n[r];
                    f.on(t, s)
                }
            }, w.prototype.ignore = function(n) {
                var t = this.getItem(n);
                t && (t.isIgnored = !0)
            }, w.prototype.unignore = function(n) {
                var t = this.getItem(n);
                t && delete t.isIgnored
            }, w.prototype.stamp = function(n) {
                var t, i, r;
                if (n = this._find(n), n)
                    for (this.stamps = this.stamps.concat(n), t = 0, i = n.length; t < i; t++) r = n[t], this.ignore(r)
            }, w.prototype.unstamp = function(n) {
                var t, r, i;
                if (n = this._find(n), n)
                    for (t = 0, r = n.length; t < r; t++) i = n[t], s(i, this.stamps), this.unignore(i)
            }, w.prototype._find = function(n) {
                if (n) return typeof n == "string" && (n = this.element.querySelectorAll(n)), u(n)
            }, w.prototype._manageStamps = function() {
                var n, t, i;
                if (this.stamps && this.stamps.length)
                    for (this._getBoundingRect(), n = 0, t = this.stamps.length; n < t; n++) i = this.stamps[n], this._manageStamp(i)
            }, w.prototype._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    n = this.size;
                this._boundingRect = {
                    left: t.left + n.paddingLeft + n.borderLeftWidth,
                    top: t.top + n.paddingTop + n.borderTopWidth,
                    right: t.right - (n.paddingRight + n.borderRightWidth),
                    bottom: t.bottom - (n.paddingBottom + n.borderBottomWidth)
                }
            }, w.prototype._manageStamp = o, w.prototype._getElementOffset = function(n) {
                var t = n.getBoundingClientRect(),
                    i = this._boundingRect,
                    r = a(n);
                return {
                    left: t.left - i.left - r.marginLeft,
                    top: t.top - i.top - r.marginTop,
                    right: i.right - t.right - r.marginRight,
                    bottom: i.bottom - t.bottom - r.marginBottom
                }
            }, w.prototype.handleEvent = function(n) {
                var t = "on" + n.type;
                this[t] && this[t](n)
            }, w.prototype.bindResize = function() {
                this.isResizeBound || (h.bind(n, "resize", this), this.isResizeBound = !0)
            }, w.prototype.unbindResize = function() {
                this.isResizeBound && h.unbind(n, "resize", this);
                this.isResizeBound = !1
            }, w.prototype.onresize = function() {
                function t() {
                    n.resize();
                    delete n.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var n = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, w.prototype.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, w.prototype.needsResizeLayout = function() {
                var n = a(this.element),
                    t = this.size && n;
                return t && n.innerWidth !== this.size.innerWidth
            }, w.prototype.addItems = function(n) {
                var t = this._itemize(n);
                return t.length && (this.items = this.items.concat(t)), t
            }, w.prototype.appended = function(n) {
                var t = this.addItems(n);
                t.length && (this.layoutItems(t, !0), this.reveal(t))
            }, w.prototype.prepended = function(n) {
                var t = this._itemize(n),
                    i;
                t.length && (i = this.items.slice(0), this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i))
            }, w.prototype.reveal = function(n) {
                var i = n && n.length,
                    t, r;
                if (i)
                    for (t = 0; t < i; t++) r = n[t], r.reveal()
            }, w.prototype.hide = function(n) {
                var i = n && n.length,
                    t, r;
                if (i)
                    for (t = 0; t < i; t++) r = n[t], r.hide()
            }, w.prototype.getItem = function(n) {
                for (var i, t = 0, r = this.items.length; t < r; t++)
                    if (i = this.items[t], i.element === n) return i
            }, w.prototype.getItems = function(n) {
                var i, t, u, f, r;
                if (n && n.length) {
                    for (i = [], t = 0, u = n.length; t < u; t++) f = n[t], r = this.getItem(f), r && i.push(r);
                    return i
                }
            }, w.prototype.remove = function(n) {
                var t, i, f, r;
                if (n = u(n), t = this.getItems(n), t && t.length)
                    for (this._itemsOn(t, "remove", function() {
                            this.emitEvent("removeComplete", [this, t])
                        }), i = 0, f = t.length; i < f; i++) r = t[i], r.remove(), s(r, this.items)
            }, w.prototype.destroy = function() {
                var i = this.element.style,
                    n, r, u;
                for (i.height = "", i.position = "", i.width = "", n = 0, r = this.items.length; n < r; n++) u = this.items[n], u.destroy();
                this.unbindResize();
                delete this.element.outlayerGUID;
                t && t.removeData(this.element, this.constructor.namespace)
            }, w.data = function(n) {
                var t = n && n.outlayerGUID;
                return t && b[t]
            }, w.create = function(n, u) {
                function f() {
                    w.apply(this, arguments)
                }
                return Object.create ? f.prototype = Object.create(w.prototype) : i(f.prototype, w.prototype), f.prototype.constructor = f, f.defaults = i({}, w.defaults), i(f.defaults, u), f.prototype.settings = {}, f.namespace = n, f.data = w.data, f.Item = function() {
                    p.apply(this, arguments)
                }, f.Item.prototype = new p, c(function() {
                    for (var i, o, l, a, s = v(n), h = e.querySelectorAll(".js-" + s), c = "data-" + s + "-options", u = 0, y = h.length; u < y; u++) {
                        i = h[u];
                        o = i.getAttribute(c);
                        try {
                            l = o && JSON.parse(o)
                        } catch (p) {
                            r && r.error("Error parsing " + c + " on " + i.nodeName.toLowerCase() + (i.id ? "#" + i.id : "") + ": " + p);
                            continue
                        }
                        a = new f(i, l);
                        t && t.data(i, n, a)
                    }
                }), t && t.bridget && t.bridget(n, f), f
            }, w.Item = p, w
        }
        var e = n.document,
            r = n.console,
            t = n.jQuery,
            o = function() {},
            c = Object.prototype.toString,
            f = typeof HTMLElement == "object" ? function(n) {
                return n instanceof HTMLElement
            } : function(n) {
                return n && typeof n == "object" && n.nodeType === 1 && typeof n.nodeName == "string"
            },
            a = Array.prototype.indexOf ? function(n, t) {
                return n.indexOf(t)
            } : function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            };
        typeof define == "function" && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], h) : n.Outlayer = h(n.eventie, n.docReady, n.EventEmitter, n.getSize, n.matchesSelector, n.Outlayer.Item)
    }(window),
    function(n) {
        function t(n) {
            function t() {
                n.Item.apply(this, arguments)
            }
            return t.prototype = new n.Item, t.prototype._create = function() {
                this.id = this.layout.itemGUID++;
                n.Item.prototype._create.call(this);
                this.sortData = {}
            }, t.prototype.updateSortData = function() {
                var t, i, n, r;
                if (!this.isIgnored) {
                    this.sortData.id = this.id;
                    this.sortData["original-order"] = this.id;
                    this.sortData.random = Math.random();
                    t = this.layout.options.getSortData;
                    i = this.layout._sorters;
                    for (n in t) r = i[n], this.sortData[n] = r(this.element, this)
                }
            }, t
        }
        typeof define == "function" && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], t) : (n.Isotope = n.Isotope || {}, n.Isotope.Item = t(n.Outlayer))
    }(window),
    function(n) {
        function t(n, t) {
            function i(n) {
                this.isotope = n;
                n && (this.options = n.options[this.namespace], this.element = n.element, this.items = n.filteredItems, this.size = n.size)
            }
            return function() {
                function e(n) {
                    return function() {
                        return t.prototype[n].apply(this.isotope, arguments)
                    }
                }
                for (var r, u = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, f = u.length; n < f; n++) r = u[n], i.prototype[r] = e(r)
            }(), i.prototype.needsVerticalResizeLayout = function() {
                var t = n(this.isotope.element),
                    i = this.isotope.size && t;
                return i && t.innerHeight !== this.isotope.size.innerHeight
            }, i.prototype._getMeasurement = function() {
                this.isotope._getMeasurement.apply(this, arguments)
            }, i.prototype.getColumnWidth = function() {
                this.getSegmentSize("column", "Width")
            }, i.prototype.getRowHeight = function() {
                this.getSegmentSize("row", "Height")
            }, i.prototype.getSegmentSize = function(n, t) {
                var i = n + t,
                    u = "outer" + t,
                    r;
                (this._getMeasurement(i, u), this[i]) || (r = this.getFirstItemSize(), this[i] = r && r[u] || this.isotope.size["inner" + t])
            }, i.prototype.getFirstItemSize = function() {
                var t = this.isotope.filteredItems[0];
                return t && t.element && n(t.element)
            }, i.prototype.layout = function() {
                this.isotope.layout.apply(this.isotope, arguments)
            }, i.prototype.getSize = function() {
                this.isotope.getSize();
                this.size = this.isotope.size
            }, i.modes = {}, i.create = function(n, t) {
                function r() {
                    i.apply(this, arguments)
                }
                return r.prototype = new i, t && (r.options = t), r.prototype.namespace = n, i.modes[n] = r, r
            }, i
        }
        typeof define == "function" && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : (n.Isotope = n.Isotope || {}, n.Isotope.LayoutMode = t(n.getSize, n.Outlayer))
    }(window),
    function(n) {
        function t(n, t) {
            var r = n.create("masonry");
            return r.prototype._resetLayout = function() {
                this.getSize();
                this._getMeasurement("columnWidth", "outerWidth");
                this._getMeasurement("gutter", "outerWidth");
                this.measureColumns();
                var n = this.cols;
                for (this.colYs = []; n--;) this.colYs.push(0);
                this.maxY = 0
            }, r.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var n = this.items[0],
                        i = n && n.element;
                    this.columnWidth = i && t(i).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter;
                this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth);
                this.cols = Math.max(this.cols, 1)
            }, r.prototype.getContainerWidth = function() {
                var i = this.options.isFitWidth ? this.element.parentNode : this.element,
                    n = t(i);
                this.containerWidth = n && n.innerWidth
            }, r.prototype._getItemLayoutPosition = function(n) {
                var t;
                n.getSize();
                var e = n.size.outerWidth % this.columnWidth,
                    s = e && e < 1 ? "round" : "ceil",
                    r = Math[s](n.size.outerWidth / this.columnWidth);
                r = Math.min(r, this.cols);
                var u = this._getColGroup(r),
                    f = Math.min.apply(Math, u),
                    o = i(u, f),
                    h = {
                        x: this.columnWidth * o,
                        y: f
                    },
                    c = f + n.size.outerHeight,
                    l = this.cols + 1 - u.length;
                for (t = 0; t < l; t++) this.colYs[o + t] = c;
                return h
            }, r.prototype._getColGroup = function(n) {
                var i, r, t, u;
                if (n < 2) return this.colYs;
                for (i = [], r = this.cols + 1 - n, t = 0; t < r; t++) u = this.colYs.slice(t, t + n), i[t] = Math.max.apply(Math, u);
                return i
            }, r.prototype._manageStamp = function(n) {
                var e = t(n),
                    u = this._getElementOffset(n),
                    o = this.options.isOriginLeft ? u.left : u.right,
                    s = o + e.outerWidth,
                    f = Math.floor(o / this.columnWidth),
                    i, h, r;
                for (f = Math.max(0, f), i = Math.floor(s / this.columnWidth), i -= s % this.columnWidth ? 0 : 1, i = Math.min(this.cols - 1, i), h = (this.options.isOriginTop ? u.top : u.bottom) + e.outerHeight, r = f; r <= i; r++) this.colYs[r] = Math.max(h, this.colYs[r])
            }, r.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var n = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (n.width = this._getContainerFitWidth()), n
            }, r.prototype._getContainerFitWidth = function() {
                for (var n = 0, t = this.cols; --t;) {
                    if (this.colYs[t] !== 0) break;
                    n++
                }
                return (this.cols - n) * this.columnWidth - this.gutter
            }, r.prototype.needsResizeLayout = function() {
                var n = this.containerWidth;
                return this.getContainerWidth(), n !== this.containerWidth
            }, r
        }
        var i = Array.prototype.indexOf ? function(n, t) {
            return n.indexOf(t)
        } : function(n, t) {
            for (var u, i = 0, r = n.length; i < r; i++)
                if (u = n[i], u === t) return i;
            return -1
        };
        typeof define == "function" && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : n.Masonry = t(n.Outlayer, n.getSize)
    }(window),
    function(n) {
        function i(n, t) {
            for (var i in t) n[i] = t[i];
            return n
        }

        function t(n, t) {
            var r = n.create("masonry"),
                e = r.prototype._getElementOffset,
                o = r.prototype.layout,
                s = r.prototype._getMeasurement,
                u, f;
            return i(r.prototype, t.prototype), r.prototype._getElementOffset = e, r.prototype.layout = o, r.prototype._getMeasurement = s, u = r.prototype.measureColumns, r.prototype.measureColumns = function() {
                this.items = this.isotope.filteredItems;
                u.call(this)
            }, f = r.prototype._manageStamp, r.prototype._manageStamp = function() {
                this.options.isOriginLeft = this.isotope.options.isOriginLeft;
                this.options.isOriginTop = this.isotope.options.isOriginTop;
                f.apply(this, arguments)
            }, r
        }
        typeof define == "function" && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], t) : t(n.Isotope.LayoutMode, n.Masonry)
    }(window),
    function(n) {
        function t(n) {
            var t = n.create("fitRows");
            return t.prototype._resetLayout = function() {
                this.x = 0;
                this.y = 0;
                this.maxY = 0
            }, t.prototype._getItemLayoutPosition = function(n) {
                n.getSize();
                this.x !== 0 && n.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
                var t = {
                    x: this.x,
                    y: this.y
                };
                return this.maxY = Math.max(this.maxY, this.y + n.size.outerHeight), this.x += n.size.outerWidth, t
            }, t.prototype._getContainerSize = function() {
                return {
                    height: this.maxY
                }
            }, t
        }
        typeof define == "function" && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], t) : t(n.Isotope.LayoutMode)
    }(window),
    function(n) {
        function t(n) {
            var t = n.create("vertical", {
                horizontalAlignment: 0
            });
            return t.prototype._resetLayout = function() {
                this.y = 0
            }, t.prototype._getItemLayoutPosition = function(n) {
                n.getSize();
                var t = (this.isotope.size.innerWidth - n.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y;
                return this.y += n.size.outerHeight, {
                    x: t,
                    y: i
                }
            }, t.prototype._getContainerSize = function() {
                return {
                    height: this.y
                }
            }, t
        }
        typeof define == "function" && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], t) : t(n.Isotope.LayoutMode)
    }(window),
    function(n) {
        function u(n, t) {
            for (var i in t) n[i] = t[i];
            return n
        }

        function h(n) {
            return s.call(n) === "[object Array]"
        }

        function i(n) {
            var t = [],
                i, r;
            if (h(n)) t = n;
            else if (n && typeof n.length == "number")
                for (i = 0, r = n.length; i < r; i++) t.push(n[i]);
            else t.push(n);
            return t
        }

        function l(n, t) {
            var i = c(t, n);
            i !== -1 && t.splice(i, 1)
        }

        function r(n, r, e, s, h) {
            function y(n, t) {
                return function(i, r) {
                    for (var h, c, u = 0, s = n.length; u < s; u++) {
                        var f = n[u],
                            e = i.sortData[f],
                            o = r.sortData[f];
                        if (e > o || e < o) return h = t[f] !== undefined ? t[f] : t, c = h ? 1 : -1, (e > o ? 1 : -1) * c
                    }
                    return 0
                }
            }
            var c = n.create("isotope", {
                    layoutMode: "masonry",
                    isJQueryFiltering: !0,
                    sortAscending: !0
                }),
                a, v;
            return c.Item = s, c.LayoutMode = h, c.prototype._create = function() {
                this.itemGUID = 0;
                this._sorters = {};
                this._getSorters();
                n.prototype._create.call(this);
                this.modes = {};
                this.filteredItems = this.items;
                this.sortHistory = ["original-order"];
                for (var t in h.modes) this._initLayoutMode(t)
            }, c.prototype.reloadItems = function() {
                this.itemGUID = 0;
                n.prototype.reloadItems.call(this)
            }, c.prototype._itemize = function() {
                for (var r, t = n.prototype._itemize.apply(this, arguments), i = 0, u = t.length; i < u; i++) r = t[i], r.id = this.itemGUID++;
                return this._updateItemsSortData(t), t
            }, c.prototype._initLayoutMode = function(n) {
                var t = h.modes[n],
                    i = this.options[n] || {};
                this.options[n] = t.options ? u(t.options, i) : i;
                this.modes[n] = new t(this)
            }, c.prototype.layout = function() {
                if (!this._isLayoutInited && this.options.isInitLayout) {
                    this.arrange();
                    return
                }
                this._layout()
            }, c.prototype._layout = function() {
                var n = this._getIsInstant();
                this._resetLayout();
                this._manageStamps();
                this.layoutItems(this.filteredItems, n);
                this._isLayoutInited = !0
            }, c.prototype.arrange = function(n) {
                this.option(n);
                this._getIsInstant();
                this.filteredItems = this._filter(this.items);
                this._sort();
                this._layout()
            }, c.prototype._init = c.prototype.arrange, c.prototype._getIsInstant = function() {
                var n = this.options.isLayoutInstant !== undefined ? this.options.isLayoutInstant : !this._isLayoutInited;
                return this._isInstant = n, n
            }, c.prototype._filter = function(n) {
                function c() {
                    f.reveal(o);
                    f.hide(s)
                }
                var u = this.options.filter,
                    i, h, t, r, f;
                u = u || "*";
                var e = [],
                    o = [],
                    s = [],
                    l = this._getFilterTest(u);
                for (i = 0, h = n.length; i < h; i++)(t = n[i], t.isIgnored) || (r = l(t), r && e.push(t), r && t.isHidden ? o.push(t) : r || t.isHidden || s.push(t));
                return f = this, this._isInstant ? this._noTransition(c) : c(), e
            }, c.prototype._getFilterTest = function(n) {
                return t && this.options.isJQueryFiltering ? function(i) {
                    return t(i.element).is(n)
                } : typeof n == "function" ? function(t) {
                    return n(t.element)
                } : function(t) {
                    return e(t.element, n)
                }
            }, c.prototype.updateSortData = function(n) {
                this._getSorters();
                n = i(n);
                var t = this.getItems(n);
                t = t.length ? t : this.items;
                this._updateItemsSortData(t)
            }, c.prototype._getSorters = function() {
                var t = this.options.getSortData,
                    n, i;
                for (n in t) i = t[n], this._sorters[n] = a(i)
            }, c.prototype._updateItemsSortData = function(n) {
                for (var r, t = 0, i = n.length; t < i; t++) r = n[t], r.updateSortData()
            }, a = function() {
                function n(n) {
                    if (typeof n != "string") return n;
                    var i = f(n).split(" "),
                        r = i[0],
                        u = r.match(/^\[(.+)\]$/),
                        s = u && u[1],
                        e = t(s, r),
                        o = c.sortDataParsers[i[1]];
                    return o ? function(n) {
                        return n && o(e(n))
                    } : function(n) {
                        return n && e(n)
                    }
                }

                function t(n, t) {
                    return n ? function(t) {
                        return t.getAttribute(n)
                    } : function(n) {
                        var i = n.querySelector(t);
                        return i && o(i)
                    }
                }
                return n
            }(), c.sortDataParsers = {
                parseInt: function(n) {
                    return parseInt(n, 10)
                },
                parseFloat: function(n) {
                    return parseFloat(n)
                }
            }, c.prototype._sort = function() {
                var n = this.options.sortBy,
                    t, i;
                n && (t = [].concat.apply(n, this.sortHistory), i = y(t, this.options.sortAscending), this.filteredItems.sort(i), n !== this.sortHistory[0] && this.sortHistory.unshift(n))
            }, c.prototype._mode = function() {
                var n = this.options.layoutMode,
                    t = this.modes[n];
                if (!t) throw new Error("No layout mode: " + n);
                return t.options = this.options[n], t
            }, c.prototype._resetLayout = function() {
                n.prototype._resetLayout.call(this);
                this._mode()._resetLayout()
            }, c.prototype._getItemLayoutPosition = function(n) {
                return this._mode()._getItemLayoutPosition(n)
            }, c.prototype._manageStamp = function(n) {
                this._mode()._manageStamp(n)
            }, c.prototype._getContainerSize = function() {
                return this._mode()._getContainerSize()
            }, c.prototype.needsResizeLayout = function() {
                return this._mode().needsResizeLayout()
            }, c.prototype.appended = function(n) {
                var t = this.addItems(n),
                    i;
                t.length && (i = this._filterRevealAdded(t), this.filteredItems = this.filteredItems.concat(i))
            }, c.prototype.prepended = function(n) {
                var t = this._itemize(n),
                    i, r;
                t.length && (i = this.items.slice(0), this.items = t.concat(i), this._resetLayout(), this._manageStamps(), r = this._filterRevealAdded(t), this.layoutItems(i), this.filteredItems = r.concat(this.filteredItems))
            }, c.prototype._filterRevealAdded = function(n) {
                var t = this._noTransition(function() {
                    return this._filter(n)
                });
                return this.layoutItems(t, !0), this.reveal(t), n
            }, c.prototype.insert = function(n) {
                var i = this.addItems(n),
                    t, f, r, u;
                if (i.length) {
                    for (r = i.length, t = 0; t < r; t++) f = i[t], this.element.appendChild(f.element);
                    for (u = this._filter(i), this._noTransition(function() {
                            this.hide(u)
                        }), t = 0; t < r; t++) i[t].isLayoutInstant = !0;
                    for (this.arrange(), t = 0; t < r; t++) delete i[t].isLayoutInstant;
                    this.reveal(u)
                }
            }, v = c.prototype.remove, c.prototype.remove = function(n) {
                var t, r, u, f;
                if (n = i(n), t = this.getItems(n), v.call(this, n), t && t.length)
                    for (r = 0, u = t.length; r < u; r++) f = t[r], l(f, this.filteredItems)
            }, c.prototype._noTransition = function(n) {
                var i = this.options.transitionDuration,
                    t;
                return this.options.transitionDuration = 0, t = n.call(this), this.options.transitionDuration = i, t
            }, c
        }
        var t = n.jQuery,
            f = String.prototype.trim ? function(n) {
                return n.trim()
            } : function(n) {
                return n.replace(/^\s+|\s+$/g, "")
            },
            e = document.documentElement,
            o = e.textContent ? function(n) {
                return n.textContent
            } : function(n) {
                return n.innerText
            },
            s = Object.prototype.toString,
            c = Array.prototype.indexOf ? function(n, t) {
                return n.indexOf(t)
            } : function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            };
        typeof define == "function" && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : n.Isotope = r(n.Outlayer, n.getSize, n.matchesSelector, n.Isotope.Item, n.Isotope.LayoutMode)
    }(window),
    function(n) {
        n.fn.inc = function(t, i, r, u) {
            return this.length && t ? this.each(function() {
                u = n(this);
                n.ajax({
                    url: t,
                    success: function(f, e, o) {
                        u.html(n.isFunction(i) ? i(f, t) : f);
                        n.isFunction(r) && r(t, e, o)
                    }
                })
            }) : this
        };
        n(function() {
            n('[class*="inc:"]').each(function() {
                var t = /inc:(\S+)/.exec(this.className || "");
                t && n(this).inc(unescape(t[1]))
            })
        })
    }(jQuery);

$(function() {
    "use strict";

    function e(n) {
        $(n).toggleClass("open")
    }

    function o() {
        f.removeClass("open");
        b.removeClass("open")
    }

    function s() {
        y.removeClass("open");
        k.removeClass("open")
    }

    function h() {
        p.removeClass("open");
        d.removeClass("open")
    }
    var f = $(".search-wrapper"),
        y = $(".login-wrapper"),
        p = $(".cart-wrapper"),
        w = $(".floating-menu"),
        ut = $(".floating-menu a"),
        b = $(".open-search"),
        k = $(".open-login"),
        d = $(".open-cart"),
        ft = $(".open-menu"),
        et = $(".open-dropdown"),
        ot = $(".nav-settings .nav-settings-list li"),
        st = $(".close-menu"),
        i, t, g, n, c, l, a, nt, tt, u, v;
    k.on("click", function() {
        e($(this));
        y.toggleClass("open");
        o();
        h()
    });
    b.on("click", function() {
        e($(this));
        f.toggleClass("open");
        f.find("input").focus();
        s();
        h()
    });
    d.on("click", function() {
        e($(this));
        p.toggleClass("open");
        s();
        o()
    });
    ft.on("click", function() {
        w.addClass("expanded");
        o();
        s();
        h()
    });
    ot.on("click", function() {
        var n = $(this).closest(".nav-settings").find(".nav-settings-value");
        n.text($(this).text())
    });
    if ($("nav").hasClass("navbar-single-page")) ut.on("click", function() {
        w.removeClass("expanded")
    });
    et.on("click", function(n) {
        n.preventDefault();
        var t = $(this).parent().parent(),
            i = t.find(".navbar-dropdown");
        t.toggleClass("expanded");
        t.hasClass("expanded") ? i.slideDown() : i.slideUp()
    });
    st.on("click", function() {
        $("nav").find(".expanded").removeClass("expanded");
        $("nav").find(".navbar-dropdown").slideUp()
    });
    i = $("nav.navbar-fixed");
    $(document).scrollTop() > 94 && i.addClass("navbar-sticked");
    $(document).on("bind ready scroll", function() {
        var n = $(document).scrollTop();
        n >= 10 ? i.addClass("navbar-sticked") : i.removeClass("navbar-sticked")
    });
    $('[data-toggle="tooltip"]').tooltip();
    $(".mfp-open").magnificPopup({
        type: "inline",
        fixedContentPos: !1,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !0,
        preloader: !1,
        midClick: !0,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in",
        callbacks: {
            open: function() {
                $(".popup-main .owl-carousel").hide();
                setTimeout(function() {
                    $(".popup-main .owl-carousel").slideDown()
                }, 500)
            }
        }
    });
    $(".open-popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        fixedContentPos: !1,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !0,
        preloader: !1,
        midClick: !0,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in"
    });
    t = ['<span class="icon icon-chevron-left"><\/span>', '<span class="icon icon-chevron-right"><\/span>'];
    $.each($(".owl-slider"), function(n, i) {
        function r() {
            var t = $(i).find(".owl-item.active"),
                n = 100;
            $.each(t.find(".animated"), function(t, i) {
                var r = $(i);
                r.css("animation-delay", n + "ms");
                n = n + 180;
                r.addClass(r.data("animation"));
                setTimeout(function() {
                    r.removeClass(r.data("animation"))
                }, 2e3)
            })
        }
        $(i).owlCarousel({
            autoHeight: !1,
            navigation: !0,
            navigationText: t,
            items: 1,
            singleItem: !0,
            addClassActive: !0,
            transitionStyle: "fadeUp",
            afterMove: r,
            autoPlay: 8e3,
            stopOnHover: !1
        });
        r();
        $(i).hasClass("owl-slider-fullscreen") && $(".header-content .item").height($(window).height())
    });
    $.each($(".quote-carousel"), function(n, i) {
        $(i).owlCarousel({
            navigation: !0,
            slideSpeed: 300,
            items: 3,
            paginationSpeed: 400,
            singleItem: !1,
            navigationText: t,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 1],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            autoPlay: 3e3,
            stopOnHover: !0
        })
    });
    $.each($(".owl-icons"), function(n, i) {
        $(i).owlCarousel({
            autoHeight: !1,
            pagination: !1,
            navigation: !0,
            navigationText: t,
            items: 6,
            itemsDesktop: [1199, 5],
            itemsDesktopSmall: [979, 5],
            itemsTablet: [768, 4],
            itemsTabletSmall: !1,
            itemsMobile: [479, 3],
            addClassActive: !0,
            autoPlay: 5500,
            stopOnHover: !0
        })
    });
    $.each($(".owl-product-gallery"), function(n, i) {
        $(i).owlCarousel({
            autoHeight: !0,
            slideSpeed: 800,
            navigation: !0,
            navigationText: t,
            pagination: !0,
            items: 1,
            singleItem: !0
        })
    });
    g = $(".wrapper");
    g.append($("<div class='scroll-top'><i class='icon icon-chevron-up'><\/i><\/div>"));
    n = $(".scroll-top");
    $(document).on("ready scroll", function() {
        var t = $(document).scrollTop(),
            i = $(window).scrollTop() + $(window).height() == $(document).height();
        t >= 150 ? n.addClass("visible") : n.removeClass("visible");
        i ? n.addClass("active") : n.removeClass("active")
    });
    n.on("click", function() {
        return $("html,body").animate({
            scrollTop: $("body").offset().top
        }, 1e3), !1
    });
    $.each($(".product-colors"), function() {
        var n = $(".color-btn");
        n.on("click", function() {
            $(this).parent().find(n).removeClass("checked");
            $(this).addClass("checked")
        })
    });
    c = $(".tabsy .tabsy-images > div");
    l = $(".tabsy .tabsy-links figure");
    c.each(function(n, t) {
        $(t).css("background-image", "url(" + $(t).find("img").attr("src") + ")")
    });
    l.bind("mouseenter mouseleave", function() {
        var n = $(this),
            t = n.attr("data-image");
        l.removeClass("current");
        c.removeClass("current");
        n.addClass("current");
        n.closest(".tabsy").find("#" + t).addClass("current")
    });
    $(".add-favorite").on("click", function() {
        $(this).toggleClass("added")
    });
    $(".info-box-addto").on("click", function() {
        $(this).toggleClass("added")
    });
    $(".filters .filter-box").each(function() {
        $(this).hasClass("active") && $(this).find(".filter-content").show()
    });
    a = $(".filters .title");
    a.append("<span><\/span>");
    a.on("click", function() {
        var t = $(this),
            n = t.parent();
        n.toggleClass("active");
        n.hasClass("active") ? n.find(".filter-content").slideDown(300) : n.find(".filter-content").slideUp(200)
    });
    $(".filters .filter-update").on("click", function() {
        $(this).closest(".filter-box").removeClass("active").find(".filter-content").slideUp(200)
    });
    $(".filters input").on("change", function() {
        if ($(this).is(":checked")) {
            var n = $(this).parent().find("label").text(),
                t = $(this).closest(".filter-box").find(".title");
            t.find("span").text(n)
        }
    });
    $(".toggle-filters-mobile").on("click", function() {
        $(".filters").addClass("active")
    });
    $(".toggle-filters-close").on("click", function() {
        return $(".filters").removeClass("active"), $("html,body").animate({
            scrollTop: $("body").offset().top
        }, 800), !1
    });
    nt = $(".stretcher-item");
    nt.bind({
        mouseenter: function() {
            $(this).addClass("active");
            $(this).siblings().addClass("inactive")
        },
        mouseleave: function() {
            $(this).removeClass("active");
            $(this).siblings().removeClass("inactive")
        }
    });
    tt = $(".blog-post-text img");
    tt.each(function() {
        var n = $(this),
            t, i;
        n.wrap('<span class="blog-image"><\/span>');
        n.attr("alt") && (t = this.alt, i = n.attr("data"), n.after('<span class="caption">' + t + "<\/span>"))
    });
    $(".form-coupon").hide();
    $("#couponCodeID").on("click", function() {
        $(this).is(":checked") ? $(".form-coupon").fadeIn() : $(".form-coupon").fadeOut()
    });
    var r = $(".login-wrapper"),
        ht = r.find(".btn-login"),
        ct = r.find(".btn-register"),
        it = r.find(".login-block-signup"),
        rt = r.find(".login-block-signin");
    ht.on("click", function() {
        rt.slideDown();
        it.slideUp()
    });
    ct.on("click", function() {
        rt.slideUp();
        it.slideDown()
    });
    $(function() {
        var i = 0,
            t = $("#products"),
            r = $("#filters input"),
            u = $("#sort-price"),
            n = [];
        $(".item").addClass("show-me");
        n.push(".show-me");
        t.isotope({
            itemSelector: ".item",
            getSortData: {
                number: ".price parseInt"
            },
            sortBy: "number"
        });
        u.on("change", function() {
            var i = $("option:selected", this).attr("data-option-value"),
                r = i == "asc";
            t.isotope({
                itemSelector: ".item",
                getSortData: {
                    number: ".price parseInt"
                },
                sortBy: "number",
                sortAscending: r,
                filter: n
            })
        });
        r.on("change", function() {
            n = [];
            n.push(".show-me");
            r.filter(":checked").each(function() {
                n.push(this.value)
            });
            n = n.join("");
            t.isotope({
                filter: n
            })
        });
        $("#range-price-slider").ionRangeSlider({
            type: "double",
            min: 0,
            max: 4e3,
            from: 150,
            to: 3800,
            prefix: "$",
            onChange: function(r) {
                $(".item").each(function() {
                    i = parseInt($(this).find(".price").text(), 10);
                    r.from <= i && r.to >= i ? $(this).addClass("show-me") : $(this).removeClass("show-me")
                });
                t.isotope({
                    itemSelector: ".item",
                    filter: n
                })
            }
        })
    });
    $(function() {
        var n = $(".box-filters figure"),
            t = $("#box-filters-results").isotope({
                itemSelector: ".item"
            });
        n.on("click", function() {
            var i = $(this),
                r;
            i.hasClass("active") ? (i.removeClass("active"), t.isotope({
                filter: ""
            })) : (n.removeClass("active"), i.addClass("active"), r = i.attr("data-filter"), t.isotope({
                filter: r
            }))
        })
    });
    u = $(".team article");
    u.bind({
        mouseenter: function() {
            u.addClass("inactive");
            $(this).addClass("active")
        },
        mouseleave: function() {
            u.removeClass("inactive");
            $(this).removeClass("active")
        }
    });
    $(".open-form").on("click", function() {
        var n = $(this),
            t = n.parent();
        t.toggleClass("active");
        t.hasClass("active") ? (n.text(n.data("text-close")), $(".contact-form").slideDown()) : (n.text(n.data("text-open")), $(".contact-form").slideUp())
    });
    if ($("nav").hasClass("navbar-single-page")) {
        v = $(".navigation-main a");
        v.on("click", function() {
            return v.removeClass("current"), $(this).addClass("current"), $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top - $(".navigation-main").height()
            }, 500), !1
        });
        $(".mfp-open-scrollto").on("click", function() {
            return $("html,body").animate({
                scrollTop: $(".mfp-content").offset().top - 200
            }, 300), !1
        })
    }
});
$(window).bind("load", function() {
    setTimeout(function() {
        $(".page-loader").addClass("loaded")
    }, 1e3)
});
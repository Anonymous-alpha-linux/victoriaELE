(() => {
  function jn(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function yo(e, t, r) {
    return (
      t && jn(e.prototype, t),
      r && jn(e, r),
      Object.defineProperty(e, "prototype", {
        writable: !1,
      }),
      e
    );
  }
  var Wn = "(prefers-reduced-motion: reduce)",
    Ge = 1,
    Eo = 2,
    qe = 3,
    Xe = 4,
    mt = 5,
    Ht = 6,
    Gt = 7,
    So = {
      CREATED: Ge,
      MOUNTED: Eo,
      IDLE: qe,
      MOVING: Xe,
      SCROLLING: mt,
      DRAGGING: Ht,
      DESTROYED: Gt,
    };
  function ye(e) {
    e.length = 0;
  }
  function Te(e, t, r) {
    return Array.prototype.slice.call(e, t, r);
  }
  function j(e) {
    return e.bind.apply(e, [null].concat(Te(arguments, 1)));
  }
  var ni = setTimeout,
    Nr = function () {};
  function zn(e) {
    return requestAnimationFrame(e);
  }
  function Yt(e, t) {
    return typeof t === e;
  }
  function lt(e) {
    return !Vr(e) && Yt("object", e);
  }
  var kr = Array.isArray,
    ii = j(Yt, "function"),
    we = j(Yt, "string"),
    bt = j(Yt, "undefined");
  function Vr(e) {
    return e === null;
  }
  function ai(e) {
    try {
      return e instanceof (e.ownerDocument.defaultView || window).HTMLElement;
    } catch {
      return !1;
    }
  }
  function yt(e) {
    return kr(e) ? e : [e];
  }
  function oe(e, t) {
    yt(e).forEach(t);
  }
  function $r(e, t) {
    return e.indexOf(t) > -1;
  }
  function jt(e, t) {
    return e.push.apply(e, yt(t)), e;
  }
  function _e(e, t, r) {
    e &&
      oe(t, function (n) {
        n && e.classList[r ? "add" : "remove"](n);
      });
  }
  function de(e, t) {
    _e(e, we(t) ? t.split(" ") : t, !0);
  }
  function Et(e, t) {
    oe(t, e.appendChild.bind(e));
  }
  function Br(e, t) {
    oe(e, function (r) {
      var n = (t || r).parentNode;
      n && n.insertBefore(r, t);
    });
  }
  function ft(e, t) {
    return ai(e) && (e.msMatchesSelector || e.matches).call(e, t);
  }
  function oi(e, t) {
    var r = e ? Te(e.children) : [];
    return t
      ? r.filter(function (n) {
          return ft(n, t);
        })
      : r;
  }
  function St(e, t) {
    return t ? oi(e, t)[0] : e.firstElementChild;
  }
  var dt = Object.keys;
  function De(e, t, r) {
    return (
      e &&
        (r ? dt(e).reverse() : dt(e)).forEach(function (n) {
          n !== "__proto__" && t(e[n], n);
        }),
      e
    );
  }
  function vt(e) {
    return (
      Te(arguments, 1).forEach(function (t) {
        De(t, function (r, n) {
          e[n] = t[n];
        });
      }),
      e
    );
  }
  function Se(e) {
    return (
      Te(arguments, 1).forEach(function (t) {
        De(t, function (r, n) {
          kr(r)
            ? (e[n] = r.slice())
            : lt(r)
            ? (e[n] = Se({}, lt(e[n]) ? e[n] : {}, r))
            : (e[n] = r);
        });
      }),
      e
    );
  }
  function Gn(e, t) {
    oe(t || dt(e), function (r) {
      delete e[r];
    });
  }
  function ve(e, t) {
    oe(e, function (r) {
      oe(t, function (n) {
        r && r.removeAttribute(n);
      });
    });
  }
  function V(e, t, r) {
    lt(t)
      ? De(t, function (n, i) {
          V(e, i, n);
        })
      : oe(e, function (n) {
          Vr(r) || r === "" ? ve(n, t) : n.setAttribute(t, String(r));
        });
  }
  function Ke(e, t, r) {
    var n = document.createElement(e);
    return t && (we(t) ? de(n, t) : V(n, t)), r && Et(r, n), n;
  }
  function se(e, t, r) {
    if (bt(r)) return getComputedStyle(e)[t];
    Vr(r) || (e.style[t] = "" + r);
  }
  function ht(e, t) {
    se(e, "display", t);
  }
  function si(e) {
    (e.setActive && e.setActive()) ||
      e.focus({
        preventScroll: !0,
      });
  }
  function ue(e, t) {
    return e.getAttribute(t);
  }
  function Kn(e, t) {
    return e && e.classList.contains(t);
  }
  function ie(e) {
    return e.getBoundingClientRect();
  }
  function Me(e) {
    oe(e, function (t) {
      t && t.parentNode && t.parentNode.removeChild(t);
    });
  }
  function ui(e) {
    return St(new DOMParser().parseFromString(e, "text/html").body);
  }
  function ge(e, t) {
    e.preventDefault(),
      t && (e.stopPropagation(), e.stopImmediatePropagation());
  }
  function ci(e, t) {
    return e && e.querySelector(t);
  }
  function Hr(e, t) {
    return t ? Te(e.querySelectorAll(t)) : [];
  }
  function me(e, t) {
    _e(e, t, !1);
  }
  function Ir(e) {
    return e.timeStamp;
  }
  function Pe(e) {
    return we(e) ? e : e ? e + "px" : "";
  }
  var wt = "splide",
    jr = "data-" + wt;
  function ut(e, t) {
    if (!e) throw new Error("[" + wt + "] " + (t || ""));
  }
  var Ae = Math.min,
    Kt = Math.max,
    Ut = Math.floor,
    pt = Math.ceil,
    re = Math.abs;
  function li(e, t, r) {
    return re(e - t) < r;
  }
  function Wt(e, t, r, n) {
    var i = Ae(t, r),
      a = Kt(t, r);
    return n ? i < e && e < a : i <= e && e <= a;
  }
  function We(e, t, r) {
    var n = Ae(t, r),
      i = Kt(t, r);
    return Ae(Kt(n, e), i);
  }
  function Pr(e) {
    return +(e > 0) - +(e < 0);
  }
  function Dr(e, t) {
    return (
      oe(t, function (r) {
        e = e.replace("%s", "" + r);
      }),
      e
    );
  }
  function Wr(e) {
    return e < 10 ? "0" + e : "" + e;
  }
  var Un = {};
  function wo(e) {
    return "" + e + Wr((Un[e] = (Un[e] || 0) + 1));
  }
  function fi() {
    var e = [];
    function t(o, s, u, c) {
      i(o, s, function (l, f, d) {
        var m = "addEventListener" in l,
          h = m
            ? l.removeEventListener.bind(l, f, u, c)
            : l.removeListener.bind(l, u);
        m ? l.addEventListener(f, u, c) : l.addListener(u),
          e.push([l, f, d, u, h]);
      });
    }
    function r(o, s, u) {
      i(o, s, function (c, l, f) {
        e = e.filter(function (d) {
          return d[0] === c && d[1] === l && d[2] === f && (!u || d[3] === u)
            ? (d[4](), !1)
            : !0;
        });
      });
    }
    function n(o, s, u) {
      var c,
        l = !0;
      return (
        typeof CustomEvent == "function"
          ? (c = new CustomEvent(s, {
              bubbles: l,
              detail: u,
            }))
          : ((c = document.createEvent("CustomEvent")),
            c.initCustomEvent(s, l, !1, u)),
        o.dispatchEvent(c),
        c
      );
    }
    function i(o, s, u) {
      oe(o, function (c) {
        c &&
          oe(s, function (l) {
            l.split(" ").forEach(function (f) {
              var d = f.split(".");
              u(c, d[0], d[1]);
            });
          });
      });
    }
    function a() {
      e.forEach(function (o) {
        o[4]();
      }),
        ye(e);
    }
    return {
      bind: t,
      unbind: r,
      dispatch: n,
      destroy: a,
    };
  }
  var ke = "mounted",
    qn = "ready",
    xe = "move",
    At = "moved",
    di = "click",
    Ao = "active",
    xo = "inactive",
    To = "visible",
    Co = "hidden",
    Y = "refresh",
    ne = "updated",
    gt = "resize",
    zr = "resized",
    Oo = "drag",
    Lo = "dragging",
    Ro = "dragged",
    Gr = "scroll",
    Je = "scrolled",
    No = "overflow",
    vi = "destroy",
    Io = "arrows:mounted",
    Po = "arrows:updated",
    Do = "pagination:mounted",
    Mo = "pagination:updated",
    hi = "navigation:mounted",
    pi = "autoplay:play",
    Fo = "autoplay:playing",
    gi = "autoplay:pause",
    _i = "lazyload:loaded",
    mi = "sk",
    bi = "sh",
    qt = "ei";
  function K(e) {
    var t = e ? e.event.bus : document.createDocumentFragment(),
      r = fi();
    function n(a, o) {
      r.bind(t, yt(a).join(" "), function (s) {
        o.apply(o, kr(s.detail) ? s.detail : []);
      });
    }
    function i(a) {
      r.dispatch(t, a, Te(arguments, 1));
    }
    return (
      e && e.event.on(vi, r.destroy),
      vt(r, {
        bus: t,
        on: n,
        off: j(r.unbind, t),
        emit: i,
      })
    );
  }
  function Xt(e, t, r, n) {
    var i = Date.now,
      a,
      o = 0,
      s,
      u = !0,
      c = 0;
    function l() {
      if (!u) {
        if (
          ((o = e ? Ae((i() - a) / e, 1) : 1),
          r && r(o),
          o >= 1 && (t(), (a = i()), n && ++c >= n))
        )
          return d();
        s = zn(l);
      }
    }
    function f(b) {
      b || h(), (a = i() - (b ? o * e : 0)), (u = !1), (s = zn(l));
    }
    function d() {
      u = !0;
    }
    function m() {
      (a = i()), (o = 0), r && r(o);
    }
    function h() {
      s && cancelAnimationFrame(s), (o = 0), (s = 0), (u = !0);
    }
    function _(b) {
      e = b;
    }
    function v() {
      return u;
    }
    return {
      start: f,
      rewind: m,
      pause: d,
      cancel: h,
      set: _,
      isPaused: v,
    };
  }
  function ko(e) {
    var t = e;
    function r(i) {
      t = i;
    }
    function n(i) {
      return $r(yt(i), t);
    }
    return {
      set: r,
      is: n,
    };
  }
  function Vo(e, t) {
    var r = Xt(t || 0, e, null, 1);
    return function () {
      r.isPaused() && r.start();
    };
  }
  function $o(e, t, r) {
    var n = e.state,
      i = r.breakpoints || {},
      a = r.reducedMotion || {},
      o = fi(),
      s = [];
    function u() {
      var h = r.mediaQuery === "min";
      dt(i)
        .sort(function (_, v) {
          return h ? +_ - +v : +v - +_;
        })
        .forEach(function (_) {
          l(i[_], "(" + (h ? "min" : "max") + "-width:" + _ + "px)");
        }),
        l(a, Wn),
        f();
    }
    function c(h) {
      h && o.destroy();
    }
    function l(h, _) {
      var v = matchMedia(_);
      o.bind(v, "change", f), s.push([h, v]);
    }
    function f() {
      var h = n.is(Gt),
        _ = r.direction,
        v = s.reduce(function (b, y) {
          return Se(b, y[1].matches ? y[0] : {});
        }, {});
      Gn(r),
        m(v),
        r.destroy
          ? e.destroy(r.destroy === "completely")
          : h
          ? (c(!0), e.mount())
          : _ !== r.direction && e.refresh();
    }
    function d(h) {
      matchMedia(Wn).matches && (h ? Se(r, a) : Gn(r, dt(a)));
    }
    function m(h, _, v) {
      Se(r, h),
        _ && Se(Object.getPrototypeOf(r), h),
        (v || !n.is(Ge)) && e.emit(ne, r);
    }
    return {
      setup: u,
      destroy: c,
      reduce: d,
      set: m,
    };
  }
  var Jt = "Arrow",
    Zt = Jt + "Left",
    Qt = Jt + "Right",
    yi = Jt + "Up",
    Ei = Jt + "Down";
  var Yn = "rtl",
    er = "ttb",
    Cr = {
      width: ["height"],
      left: ["top", "right"],
      right: ["bottom", "left"],
      x: ["y"],
      X: ["Y"],
      Y: ["X"],
      ArrowLeft: [yi, Qt],
      ArrowRight: [Ei, Zt],
    };
  function Bo(e, t, r) {
    function n(a, o, s) {
      s = s || r.direction;
      var u = s === Yn && !o ? 1 : s === er ? 0 : -1;
      return (
        (Cr[a] && Cr[a][u]) ||
        a.replace(/width|left|right/i, function (c, l) {
          var f = Cr[c.toLowerCase()][u] || c;
          return l > 0 ? f.charAt(0).toUpperCase() + f.slice(1) : f;
        })
      );
    }
    function i(a) {
      return a * (r.direction === Yn ? 1 : -1);
    }
    return {
      resolve: n,
      orient: i,
    };
  }
  var be = "role",
    Ue = "tabindex",
    Ho = "disabled",
    ce = "aria-",
    xt = ce + "controls",
    Si = ce + "current",
    Xn = ce + "selected",
    ae = ce + "label",
    Kr = ce + "labelledby",
    wi = ce + "hidden",
    Ur = ce + "orientation",
    _t = ce + "roledescription",
    Jn = ce + "live",
    Zn = ce + "busy",
    Qn = ce + "atomic",
    qr = [be, Ue, Ho, xt, Si, ae, Kr, wi, Ur, _t],
    he = wt + "__",
    Ce = "is-",
    Or = wt,
    ei = he + "track",
    jo = he + "list",
    tr = he + "slide",
    Ai = tr + "--clone",
    Wo = tr + "__container",
    Yr = he + "arrows",
    rr = he + "arrow",
    xi = rr + "--prev",
    Ti = rr + "--next",
    nr = he + "pagination",
    Ci = nr + "__page",
    zo = he + "progress",
    Go = zo + "__bar",
    Xr = he + "toggle",
    fl = Xr + "__play",
    dl = Xr + "__pause",
    Ko = he + "spinner",
    Uo = he + "sr",
    qo = Ce + "initialized",
    Fe = Ce + "active",
    Oi = Ce + "prev",
    Li = Ce + "next",
    Mr = Ce + "visible",
    Fr = Ce + "loading",
    Ri = Ce + "focus-in",
    Ni = Ce + "overflow",
    Yo = [Fe, Mr, Oi, Li, Fr, Ri, Ni],
    Xo = {
      slide: tr,
      clone: Ai,
      arrows: Yr,
      arrow: rr,
      prev: xi,
      next: Ti,
      pagination: nr,
      page: Ci,
      spinner: Ko,
    };
  function Jo(e, t) {
    if (ii(e.closest)) return e.closest(t);
    for (var r = e; r && r.nodeType === 1 && !ft(r, t); ) r = r.parentElement;
    return r;
  }
  var Zo = 5,
    ti = 200,
    Ii = "touchstart mousedown",
    Lr = "touchmove mousemove",
    Rr = "touchend touchcancel mouseup click";
  function Qo(e, t, r) {
    var n = K(e),
      i = n.on,
      a = n.bind,
      o = e.root,
      s = r.i18n,
      u = {},
      c = [],
      l = [],
      f = [],
      d,
      m,
      h;
    function _() {
      E(), R(), y();
    }
    function v() {
      i(Y, b),
        i(Y, _),
        i(ne, y),
        a(
          document,
          Ii + " keydown",
          function (g) {
            h = g.type === "keydown";
          },
          {
            capture: !0,
          }
        ),
        a(o, "focusin", function () {
          _e(o, Ri, !!h);
        });
    }
    function b(g) {
      var w = qr.concat("style");
      ye(c), me(o, l), me(d, f), ve([d, m], w), ve(o, g ? w : ["style", _t]);
    }
    function y() {
      me(o, l),
        me(d, f),
        (l = p(Or)),
        (f = p(ei)),
        de(o, l),
        de(d, f),
        V(o, ae, r.label),
        V(o, Kr, r.labelledby);
    }
    function E() {
      (d = S("." + ei)),
        (m = St(d, "." + jo)),
        ut(d && m, "A track/list element is missing."),
        jt(c, oi(m, "." + tr + ":not(." + Ai + ")")),
        De(
          {
            arrows: Yr,
            pagination: nr,
            prev: xi,
            next: Ti,
            bar: Go,
            toggle: Xr,
          },
          function (g, w) {
            u[w] = S("." + g);
          }
        ),
        vt(u, {
          root: o,
          track: d,
          list: m,
          slides: c,
        });
    }
    function R() {
      var g = o.id || wo(wt),
        w = r.role;
      (o.id = g),
        (d.id = d.id || g + "-track"),
        (m.id = m.id || g + "-list"),
        !ue(o, be) && o.tagName !== "SECTION" && w && V(o, be, w),
        V(o, _t, s.carousel),
        V(m, be, "presentation");
    }
    function S(g) {
      var w = ci(o, g);
      return w && Jo(w, "." + Or) === o ? w : void 0;
    }
    function p(g) {
      return [
        g + "--" + r.type,
        g + "--" + r.direction,
        r.drag && g + "--draggable",
        r.isNavigation && g + "--nav",
        g === Or && Fe,
      ];
    }
    return vt(u, {
      setup: _,
      mount: v,
      destroy: b,
    });
  }
  var Ye = "slide",
    Ze = "loop",
    Tt = "fade";
  function es(e, t, r, n) {
    var i = K(e),
      a = i.on,
      o = i.emit,
      s = i.bind,
      u = e.Components,
      c = e.root,
      l = e.options,
      f = l.isNavigation,
      d = l.updateOnMove,
      m = l.i18n,
      h = l.pagination,
      _ = l.slideFocus,
      v = u.Direction.resolve,
      b = ue(n, "style"),
      y = ue(n, ae),
      E = r > -1,
      R = St(n, "." + Wo),
      S;
    function p() {
      E ||
        ((n.id = c.id + "-slide" + Wr(t + 1)),
        V(n, be, h ? "tabpanel" : "group"),
        V(n, _t, m.slide),
        V(n, ae, y || Dr(m.slideLabel, [t + 1, e.length]))),
        g();
    }
    function g() {
      s(n, "click", j(o, di, k)),
        s(n, "keydown", j(o, mi, k)),
        a([At, bi, Je], A),
        a(hi, I),
        d && a(xe, N);
    }
    function w() {
      (S = !0),
        i.destroy(),
        me(n, Yo),
        ve(n, qr),
        V(n, "style", b),
        V(n, ae, y || "");
    }
    function I() {
      var D = e.splides
        .map(function (T) {
          var P = T.splide.Components.Slides.getAt(t);
          return P ? P.slide.id : "";
        })
        .join(" ");
      V(n, ae, Dr(m.slideX, (E ? r : t) + 1)),
        V(n, xt, D),
        V(n, be, _ ? "button" : ""),
        _ && ve(n, _t);
    }
    function N() {
      S || A();
    }
    function A() {
      if (!S) {
        var D = e.index;
        C(), O(), _e(n, Oi, t === D - 1), _e(n, Li, t === D + 1);
      }
    }
    function C() {
      var D = M();
      D !== Kn(n, Fe) &&
        (_e(n, Fe, D), V(n, Si, (f && D) || ""), o(D ? Ao : xo, k));
    }
    function O() {
      var D = B(),
        T = !D && (!M() || E);
      if (
        (e.state.is([Xe, mt]) || V(n, wi, T || ""),
        V(Hr(n, l.focusableNodes || ""), Ue, T ? -1 : ""),
        _ && V(n, Ue, T ? -1 : 0),
        D !== Kn(n, Mr) && (_e(n, Mr, D), o(D ? To : Co, k)),
        !D && document.activeElement === n)
      ) {
        var P = u.Slides.getAt(e.index);
        P && si(P.slide);
      }
    }
    function F(D, T, P) {
      se((P && R) || n, D, T);
    }
    function M() {
      var D = e.index;
      return D === t || (l.cloneStatus && D === r);
    }
    function B() {
      if (e.is(Tt)) return M();
      var D = ie(u.Elements.track),
        T = ie(n),
        P = v("left", !0),
        $ = v("right", !0);
      return Ut(D[P]) <= pt(T[P]) && Ut(T[$]) <= pt(D[$]);
    }
    function G(D, T) {
      var P = re(D - t);
      return !E && (l.rewind || e.is(Ze)) && (P = Ae(P, e.length - P)), P <= T;
    }
    var k = {
      index: t,
      slideIndex: r,
      slide: n,
      container: R,
      isClone: E,
      mount: p,
      destroy: w,
      update: A,
      style: F,
      isWithin: G,
    };
    return k;
  }
  function ts(e, t, r) {
    var n = K(e),
      i = n.on,
      a = n.emit,
      o = n.bind,
      s = t.Elements,
      u = s.slides,
      c = s.list,
      l = [];
    function f() {
      d(), i(Y, m), i(Y, d);
    }
    function d() {
      u.forEach(function (A, C) {
        _(A, C, -1);
      });
    }
    function m() {
      S(function (A) {
        A.destroy();
      }),
        ye(l);
    }
    function h() {
      S(function (A) {
        A.update();
      });
    }
    function _(A, C, O) {
      var F = es(e, C, O, A);
      F.mount(),
        l.push(F),
        l.sort(function (M, B) {
          return M.index - B.index;
        });
    }
    function v(A) {
      return A
        ? p(function (C) {
            return !C.isClone;
          })
        : l;
    }
    function b(A) {
      var C = t.Controller,
        O = C.toIndex(A),
        F = C.hasFocus() ? 1 : r.perPage;
      return p(function (M) {
        return Wt(M.index, O, O + F - 1);
      });
    }
    function y(A) {
      return p(A)[0];
    }
    function E(A, C) {
      oe(A, function (O) {
        if ((we(O) && (O = ui(O)), ai(O))) {
          var F = u[C];
          F ? Br(O, F) : Et(c, O), de(O, r.classes.slide), w(O, j(a, gt));
        }
      }),
        a(Y);
    }
    function R(A) {
      Me(
        p(A).map(function (C) {
          return C.slide;
        })
      ),
        a(Y);
    }
    function S(A, C) {
      v(C).forEach(A);
    }
    function p(A) {
      return l.filter(
        ii(A)
          ? A
          : function (C) {
              return we(A) ? ft(C.slide, A) : $r(yt(A), C.index);
            }
      );
    }
    function g(A, C, O) {
      S(function (F) {
        F.style(A, C, O);
      });
    }
    function w(A, C) {
      var O = Hr(A, "img"),
        F = O.length;
      F
        ? O.forEach(function (M) {
            o(M, "load error", function () {
              --F || C();
            });
          })
        : C();
    }
    function I(A) {
      return A ? u.length : l.length;
    }
    function N() {
      return l.length > r.perPage;
    }
    return {
      mount: f,
      destroy: m,
      update: h,
      register: _,
      get: v,
      getIn: b,
      getAt: y,
      add: E,
      remove: R,
      forEach: S,
      filter: p,
      style: g,
      getLength: I,
      isEnough: N,
    };
  }
  function rs(e, t, r) {
    var n = K(e),
      i = n.on,
      a = n.bind,
      o = n.emit,
      s = t.Slides,
      u = t.Direction.resolve,
      c = t.Elements,
      l = c.root,
      f = c.track,
      d = c.list,
      m = s.getAt,
      h = s.style,
      _,
      v,
      b;
    function y() {
      E(), a(window, "resize load", Vo(j(o, gt))), i([ne, Y], E), i(gt, R);
    }
    function E() {
      (_ = r.direction === er),
        se(l, "maxWidth", Pe(r.width)),
        se(f, u("paddingLeft"), S(!1)),
        se(f, u("paddingRight"), S(!0)),
        R(!0);
    }
    function R(k) {
      var D = ie(l);
      (k || v.width !== D.width || v.height !== D.height) &&
        (se(f, "height", p()),
        h(u("marginRight"), Pe(r.gap)),
        h("width", w()),
        h("height", I(), !0),
        (v = D),
        o(zr),
        b !== (b = G()) && (_e(l, Ni, b), o(No, b)));
    }
    function S(k) {
      var D = r.padding,
        T = u(k ? "right" : "left");
      return (D && Pe(D[T] || (lt(D) ? 0 : D))) || "0px";
    }
    function p() {
      var k = "";
      return (
        _ &&
          ((k = g()),
          ut(k, "height or heightRatio is missing."),
          (k = "calc(" + k + " - " + S(!1) + " - " + S(!0) + ")")),
        k
      );
    }
    function g() {
      return Pe(r.height || ie(d).width * r.heightRatio);
    }
    function w() {
      return r.autoWidth ? null : Pe(r.fixedWidth) || (_ ? "" : N());
    }
    function I() {
      return Pe(r.fixedHeight) || (_ ? (r.autoHeight ? null : N()) : g());
    }
    function N() {
      var k = Pe(r.gap);
      return (
        "calc((100%" +
        (k && " + " + k) +
        ")/" +
        (r.perPage || 1) +
        (k && " - " + k) +
        ")"
      );
    }
    function A() {
      return ie(d)[u("width")];
    }
    function C(k, D) {
      var T = m(k || 0);
      return T ? ie(T.slide)[u("width")] + (D ? 0 : M()) : 0;
    }
    function O(k, D) {
      var T = m(k);
      if (T) {
        var P = ie(T.slide)[u("right")],
          $ = ie(d)[u("left")];
        return re(P - $) + (D ? 0 : M());
      }
      return 0;
    }
    function F(k) {
      return O(e.length - 1) - O(0) + C(0, k);
    }
    function M() {
      var k = m(0);
      return (k && parseFloat(se(k.slide, u("marginRight")))) || 0;
    }
    function B(k) {
      return parseFloat(se(f, u("padding" + (k ? "Right" : "Left")))) || 0;
    }
    function G() {
      return e.is(Tt) || F(!0) > A();
    }
    return {
      mount: y,
      resize: R,
      listSize: A,
      slideSize: C,
      sliderSize: F,
      totalSize: O,
      getPadding: B,
      isOverflow: G,
    };
  }
  var ns = 2;
  function is(e, t, r) {
    var n = K(e),
      i = n.on,
      a = t.Elements,
      o = t.Slides,
      s = t.Direction.resolve,
      u = [],
      c;
    function l() {
      i(Y, f), i([ne, gt], m), (c = v()) && (h(c), t.Layout.resize(!0));
    }
    function f() {
      d(), l();
    }
    function d() {
      Me(u), ye(u), n.destroy();
    }
    function m() {
      var b = v();
      c !== b && (c < b || !b) && n.emit(Y);
    }
    function h(b) {
      var y = o.get().slice(),
        E = y.length;
      if (E) {
        for (; y.length < b; ) jt(y, y);
        jt(y.slice(-b), y.slice(0, b)).forEach(function (R, S) {
          var p = S < b,
            g = _(R.slide, S);
          p ? Br(g, y[0].slide) : Et(a.list, g),
            jt(u, g),
            o.register(g, S - b + (p ? 0 : E), R.index);
        });
      }
    }
    function _(b, y) {
      var E = b.cloneNode(!0);
      return (
        de(E, r.classes.clone), (E.id = e.root.id + "-clone" + Wr(y + 1)), E
      );
    }
    function v() {
      var b = r.clones;
      if (!e.is(Ze)) b = 0;
      else if (bt(b)) {
        var y = r[s("fixedWidth")] && t.Layout.slideSize(0),
          E = y && pt(ie(a.track)[s("width")] / y);
        b = E || (r[s("autoWidth")] && e.length) || r.perPage * ns;
      }
      return b;
    }
    return {
      mount: l,
      destroy: d,
    };
  }
  function as(e, t, r) {
    var n = K(e),
      i = n.on,
      a = n.emit,
      o = e.state.set,
      s = t.Layout,
      u = s.slideSize,
      c = s.getPadding,
      l = s.totalSize,
      f = s.listSize,
      d = s.sliderSize,
      m = t.Direction,
      h = m.resolve,
      _ = m.orient,
      v = t.Elements,
      b = v.list,
      y = v.track,
      E;
    function R() {
      (E = t.Transition), i([ke, zr, ne, Y], S);
    }
    function S() {
      t.Controller.isBusy() ||
        (t.Scroll.cancel(), g(e.index), t.Slides.update());
    }
    function p(T, P, $, Z) {
      T !== P && k(T > $) && (A(), w(N(F(), T > $), !0)),
        o(Xe),
        a(xe, P, $, T),
        E.start(P, function () {
          o(qe), a(At, P, $, T), Z && Z();
        });
    }
    function g(T) {
      w(O(T, !0));
    }
    function w(T, P) {
      if (!e.is(Tt)) {
        var $ = P ? T : I(T);
        se(b, "transform", "translate" + h("X") + "(" + $ + "px)"),
          T !== $ && a(bi);
      }
    }
    function I(T) {
      if (e.is(Ze)) {
        var P = C(T),
          $ = P > t.Controller.getEnd(),
          Z = P < 0;
        (Z || $) && (T = N(T, $));
      }
      return T;
    }
    function N(T, P) {
      var $ = T - G(P),
        Z = d();
      return (T -= _(Z * (pt(re($) / Z) || 1)) * (P ? 1 : -1)), T;
    }
    function A() {
      w(F(), !0), E.cancel();
    }
    function C(T) {
      for (var P = t.Slides.get(), $ = 0, Z = 1 / 0, J = 0; J < P.length; J++) {
        var Ee = P[J].index,
          x = re(O(Ee, !0) - T);
        if (x <= Z) (Z = x), ($ = Ee);
        else break;
      }
      return $;
    }
    function O(T, P) {
      var $ = _(l(T - 1) - B(T));
      return P ? M($) : $;
    }
    function F() {
      var T = h("left");
      return ie(b)[T] - ie(y)[T] + _(c(!1));
    }
    function M(T) {
      return r.trimSpace && e.is(Ye) && (T = We(T, 0, _(d(!0) - f()))), T;
    }
    function B(T) {
      var P = r.focus;
      return P === "center" ? (f() - u(T, !0)) / 2 : +P * u(T) || 0;
    }
    function G(T) {
      return O(T ? t.Controller.getEnd() : 0, !!r.trimSpace);
    }
    function k(T) {
      var P = _(N(F(), T));
      return T ? P >= 0 : P <= b[h("scrollWidth")] - ie(y)[h("width")];
    }
    function D(T, P) {
      P = bt(P) ? F() : P;
      var $ = T !== !0 && _(P) < _(G(!1)),
        Z = T !== !1 && _(P) > _(G(!0));
      return $ || Z;
    }
    return {
      mount: R,
      move: p,
      jump: g,
      translate: w,
      shift: N,
      cancel: A,
      toIndex: C,
      toPosition: O,
      getPosition: F,
      getLimit: G,
      exceededLimit: D,
      reposition: S,
    };
  }
  function os(e, t, r) {
    var n = K(e),
      i = n.on,
      a = n.emit,
      o = t.Move,
      s = o.getPosition,
      u = o.getLimit,
      c = o.toPosition,
      l = t.Slides,
      f = l.isEnough,
      d = l.getLength,
      m = r.omitEnd,
      h = e.is(Ze),
      _ = e.is(Ye),
      v = j(F, !1),
      b = j(F, !0),
      y = r.start || 0,
      E,
      R = y,
      S,
      p,
      g;
    function w() {
      I(), i([ne, Y, qt], I), i(zr, N);
    }
    function I() {
      (S = d(!0)), (p = r.perMove), (g = r.perPage), (E = k());
      var x = We(y, 0, m ? E : S - 1);
      x !== y && ((y = x), o.reposition());
    }
    function N() {
      E !== k() && a(qt);
    }
    function A(x, H, te) {
      if (!Ee()) {
        var U = O(x),
          Q = G(U);
        Q > -1 && (H || Q !== y) && ($(Q), o.move(U, Q, R, te));
      }
    }
    function C(x, H, te, U) {
      t.Scroll.scroll(x, H, te, function () {
        var Q = G(o.toIndex(s()));
        $(m ? Ae(Q, E) : Q), U && U();
      });
    }
    function O(x) {
      var H = y;
      if (we(x)) {
        var te = x.match(/([+\-<>])(\d+)?/) || [],
          U = te[1],
          Q = te[2];
        U === "+" || U === "-"
          ? (H = M(y + +("" + U + (+Q || 1)), y))
          : U === ">"
          ? (H = Q ? D(+Q) : v(!0))
          : U === "<" && (H = b(!0));
      } else H = h ? x : We(x, 0, E);
      return H;
    }
    function F(x, H) {
      var te = p || (J() ? 1 : g),
        U = M(y + te * (x ? -1 : 1), y, !(p || J()));
      return U === -1 && _ && !li(s(), u(!x), 1) ? (x ? 0 : E) : H ? U : G(U);
    }
    function M(x, H, te) {
      if (f() || J()) {
        var U = B(x);
        U !== x && ((H = x), (x = U), (te = !1)),
          x < 0 || x > E
            ? !p && (Wt(0, x, H, !0) || Wt(E, H, x, !0))
              ? (x = D(T(x)))
              : h
              ? (x = te ? (x < 0 ? -(S % g || g) : S) : x)
              : r.rewind
              ? (x = x < 0 ? E : 0)
              : (x = -1)
            : te && x !== H && (x = D(T(H) + (x < H ? -1 : 1)));
      } else x = -1;
      return x;
    }
    function B(x) {
      if (_ && r.trimSpace === "move" && x !== y)
        for (var H = s(); H === c(x, !0) && Wt(x, 0, e.length - 1, !r.rewind); )
          x < y ? --x : ++x;
      return x;
    }
    function G(x) {
      return h ? (x + S) % S || 0 : x;
    }
    function k() {
      for (var x = S - (J() || (h && p) ? 1 : g); m && x-- > 0; )
        if (c(S - 1, !0) !== c(x, !0)) {
          x++;
          break;
        }
      return We(x, 0, S - 1);
    }
    function D(x) {
      return We(J() ? x : g * x, 0, E);
    }
    function T(x) {
      return J() ? Ae(x, E) : Ut((x >= E ? S - 1 : x) / g);
    }
    function P(x) {
      var H = o.toIndex(x);
      return _ ? We(H, 0, E) : H;
    }
    function $(x) {
      x !== y && ((R = y), (y = x));
    }
    function Z(x) {
      return x ? R : y;
    }
    function J() {
      return !bt(r.focus) || r.isNavigation;
    }
    function Ee() {
      return e.state.is([Xe, mt]) && !!r.waitForTransition;
    }
    return {
      mount: w,
      go: A,
      scroll: C,
      getNext: v,
      getPrev: b,
      getAdjacent: F,
      getEnd: k,
      setIndex: $,
      getIndex: Z,
      toIndex: D,
      toPage: T,
      toDest: P,
      hasFocus: J,
      isBusy: Ee,
    };
  }
  var ss = "http://www.w3.org/2000/svg",
    us =
      "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
    Bt = 40;
  function cs(e, t, r) {
    var n = K(e),
      i = n.on,
      a = n.bind,
      o = n.emit,
      s = r.classes,
      u = r.i18n,
      c = t.Elements,
      l = t.Controller,
      f = c.arrows,
      d = c.track,
      m = f,
      h = c.prev,
      _ = c.next,
      v,
      b,
      y = {};
    function E() {
      S(), i(ne, R);
    }
    function R() {
      p(), E();
    }
    function S() {
      var C = r.arrows;
      C && !(h && _) && I(),
        h &&
          _ &&
          (vt(y, {
            prev: h,
            next: _,
          }),
          ht(m, C ? "" : "none"),
          de(m, (b = Yr + "--" + r.direction)),
          C && (g(), A(), V([h, _], xt, d.id), o(Io, h, _)));
    }
    function p() {
      n.destroy(),
        me(m, b),
        v ? (Me(f ? [h, _] : m), (h = _ = null)) : ve([h, _], qr);
    }
    function g() {
      i([ke, At, Y, Je, qt], A),
        a(_, "click", j(w, ">")),
        a(h, "click", j(w, "<"));
    }
    function w(C) {
      l.go(C, !0);
    }
    function I() {
      (m = f || Ke("div", s.arrows)),
        (h = N(!0)),
        (_ = N(!1)),
        (v = !0),
        Et(m, [h, _]),
        !f && Br(m, d);
    }
    function N(C) {
      var O =
        '<button class="' +
        s.arrow +
        " " +
        (C ? s.prev : s.next) +
        '" type="button"><svg xmlns="' +
        ss +
        '" viewBox="0 0 ' +
        Bt +
        " " +
        Bt +
        '" width="' +
        Bt +
        '" height="' +
        Bt +
        '" focusable="false"><path d="' +
        (r.arrowPath || us) +
        '" />';
      return ui(O);
    }
    function A() {
      if (h && _) {
        var C = e.index,
          O = l.getPrev(),
          F = l.getNext(),
          M = O > -1 && C < O ? u.last : u.prev,
          B = F > -1 && C > F ? u.first : u.next;
        (h.disabled = O < 0),
          (_.disabled = F < 0),
          V(h, ae, M),
          V(_, ae, B),
          o(Po, h, _, O, F);
      }
    }
    return {
      arrows: y,
      mount: E,
      destroy: p,
      update: A,
    };
  }
  var ls = jr + "-interval";
  function fs(e, t, r) {
    var n = K(e),
      i = n.on,
      a = n.bind,
      o = n.emit,
      s = Xt(r.interval, e.go.bind(e, ">"), g),
      u = s.isPaused,
      c = t.Elements,
      l = t.Elements,
      f = l.root,
      d = l.toggle,
      m = r.autoplay,
      h,
      _,
      v = m === "pause";
    function b() {
      m && (y(), d && V(d, xt, c.track.id), v || E(), p());
    }
    function y() {
      r.pauseOnHover &&
        a(f, "mouseenter mouseleave", function (I) {
          (h = I.type === "mouseenter"), S();
        }),
        r.pauseOnFocus &&
          a(f, "focusin focusout", function (I) {
            (_ = I.type === "focusin"), S();
          }),
        d &&
          a(d, "click", function () {
            v ? E() : R(!0);
          }),
        i([xe, Gr, Y], s.rewind),
        i(xe, w);
    }
    function E() {
      u() &&
        t.Slides.isEnough() &&
        (s.start(!r.resetProgress), (_ = h = v = !1), p(), o(pi));
    }
    function R(I) {
      I === void 0 && (I = !0), (v = !!I), p(), u() || (s.pause(), o(gi));
    }
    function S() {
      v || (h || _ ? R(!1) : E());
    }
    function p() {
      d && (_e(d, Fe, !v), V(d, ae, r.i18n[v ? "play" : "pause"]));
    }
    function g(I) {
      var N = c.bar;
      N && se(N, "width", I * 100 + "%"), o(Fo, I);
    }
    function w(I) {
      var N = t.Slides.getAt(I);
      s.set((N && +ue(N.slide, ls)) || r.interval);
    }
    return {
      mount: b,
      destroy: s.cancel,
      play: E,
      pause: R,
      isPaused: u,
    };
  }
  function ds(e, t, r) {
    var n = K(e),
      i = n.on;
    function a() {
      r.cover && (i(_i, j(s, !0)), i([ke, ne, Y], j(o, !0)));
    }
    function o(u) {
      t.Slides.forEach(function (c) {
        var l = St(c.container || c.slide, "img");
        l && l.src && s(u, l, c);
      });
    }
    function s(u, c, l) {
      l.style(
        "background",
        u ? 'center/cover no-repeat url("' + c.src + '")' : "",
        !0
      ),
        ht(c, u ? "none" : "");
    }
    return {
      mount: a,
      destroy: j(o, !1),
    };
  }
  var vs = 10,
    hs = 600,
    ps = 0.6,
    gs = 1.5,
    _s = 800;
  function ms(e, t, r) {
    var n = K(e),
      i = n.on,
      a = n.emit,
      o = e.state.set,
      s = t.Move,
      u = s.getPosition,
      c = s.getLimit,
      l = s.exceededLimit,
      f = s.translate,
      d = e.is(Ye),
      m,
      h,
      _ = 1;
    function v() {
      i(xe, R), i([ne, Y], S);
    }
    function b(g, w, I, N, A) {
      var C = u();
      if ((R(), I && (!d || !l()))) {
        var O = t.Layout.sliderSize(),
          F = Pr(g) * O * Ut(re(g) / O) || 0;
        g = s.toPosition(t.Controller.toDest(g % O)) + F;
      }
      var M = li(C, g, 1);
      (_ = 1),
        (w = M ? 0 : w || Kt(re(g - C) / gs, _s)),
        (h = N),
        (m = Xt(w, y, j(E, C, g, A), 1)),
        o(mt),
        a(Gr),
        m.start();
    }
    function y() {
      o(qe), h && h(), a(Je);
    }
    function E(g, w, I, N) {
      var A = u(),
        C = g + (w - g) * p(N),
        O = (C - A) * _;
      f(A + O),
        d && !I && l() && ((_ *= ps), re(O) < vs && b(c(l(!0)), hs, !1, h, !0));
    }
    function R() {
      m && m.cancel();
    }
    function S() {
      m && !m.isPaused() && (R(), y());
    }
    function p(g) {
      var w = r.easingFunc;
      return w ? w(g) : 1 - Math.pow(1 - g, 4);
    }
    return {
      mount: v,
      destroy: R,
      scroll: b,
      cancel: S,
    };
  }
  var ze = {
    passive: !1,
    capture: !0,
  };
  function bs(e, t, r) {
    var n = K(e),
      i = n.on,
      a = n.emit,
      o = n.bind,
      s = n.unbind,
      u = e.state,
      c = t.Move,
      l = t.Scroll,
      f = t.Controller,
      d = t.Elements.track,
      m = t.Media.reduce,
      h = t.Direction,
      _ = h.resolve,
      v = h.orient,
      b = c.getPosition,
      y = c.exceededLimit,
      E,
      R,
      S,
      p,
      g,
      w = !1,
      I,
      N,
      A;
    function C() {
      o(d, Lr, Nr, ze),
        o(d, Rr, Nr, ze),
        o(d, Ii, F, ze),
        o(d, "click", G, {
          capture: !0,
        }),
        o(d, "dragstart", ge),
        i([ke, ne], O);
    }
    function O() {
      var L = r.drag;
      Hn(!L), (p = L === "free");
    }
    function F(L) {
      if (((I = !1), !N)) {
        var W = Q(L);
        U(L.target) &&
          (W || !L.button) &&
          (f.isBusy()
            ? ge(L, !0)
            : ((A = W ? d : window),
              (g = u.is([Xe, mt])),
              (S = null),
              o(A, Lr, M, ze),
              o(A, Rr, B, ze),
              c.cancel(),
              l.cancel(),
              k(L)));
      }
    }
    function M(L) {
      if ((u.is(Ht) || (u.set(Ht), a(Oo)), L.cancelable))
        if (g) {
          c.translate(E + te(J(L)));
          var W = Ee(L) > ti,
            Ie = w !== (w = y());
          (W || Ie) && k(L), (I = !0), a(Lo), ge(L);
        } else P(L) && ((g = T(L)), ge(L));
    }
    function B(L) {
      u.is(Ht) && (u.set(qe), a(Ro)),
        g && (D(L), ge(L)),
        s(A, Lr, M),
        s(A, Rr, B),
        (g = !1);
    }
    function G(L) {
      !N && I && ge(L, !0);
    }
    function k(L) {
      (S = R), (R = L), (E = b());
    }
    function D(L) {
      var W = $(L),
        Ie = Z(W),
        st = r.rewind && r.rewindByDrag;
      m(!1),
        p
          ? f.scroll(Ie, 0, r.snap)
          : e.is(Tt)
          ? f.go(v(Pr(W)) < 0 ? (st ? "<" : "-") : st ? ">" : "+")
          : e.is(Ye) && w && st
          ? f.go(y(!0) ? ">" : "<")
          : f.go(f.toDest(Ie), !0),
        m(!0);
    }
    function T(L) {
      var W = r.dragMinThreshold,
        Ie = lt(W),
        st = (Ie && W.mouse) || 0,
        bo = (Ie ? W.touch : +W) || 10;
      return re(J(L)) > (Q(L) ? bo : st);
    }
    function P(L) {
      return re(J(L)) > re(J(L, !0));
    }
    function $(L) {
      if (e.is(Ze) || !w) {
        var W = Ee(L);
        if (W && W < ti) return J(L) / W;
      }
      return 0;
    }
    function Z(L) {
      return (
        b() +
        Pr(L) *
          Ae(
            re(L) * (r.flickPower || 600),
            p ? 1 / 0 : t.Layout.listSize() * (r.flickMaxPages || 1)
          )
      );
    }
    function J(L, W) {
      return H(L, W) - H(x(L), W);
    }
    function Ee(L) {
      return Ir(L) - Ir(x(L));
    }
    function x(L) {
      return (R === L && S) || R;
    }
    function H(L, W) {
      return (Q(L) ? L.changedTouches[0] : L)["page" + _(W ? "Y" : "X")];
    }
    function te(L) {
      return L / (w && e.is(Ye) ? Zo : 1);
    }
    function U(L) {
      var W = r.noDrag;
      return !ft(L, "." + Ci + ", ." + rr) && (!W || !ft(L, W));
    }
    function Q(L) {
      return typeof TouchEvent < "u" && L instanceof TouchEvent;
    }
    function mo() {
      return g;
    }
    function Hn(L) {
      N = L;
    }
    return {
      mount: C,
      disable: Hn,
      isDragging: mo,
    };
  }
  var ys = {
    Spacebar: " ",
    Right: Qt,
    Left: Zt,
    Up: yi,
    Down: Ei,
  };
  function Jr(e) {
    return (e = we(e) ? e : e.key), ys[e] || e;
  }
  var ri = "keydown";
  function Es(e, t, r) {
    var n = K(e),
      i = n.on,
      a = n.bind,
      o = n.unbind,
      s = e.root,
      u = t.Direction.resolve,
      c,
      l;
    function f() {
      d(), i(ne, m), i(ne, d), i(xe, _);
    }
    function d() {
      var b = r.keyboard;
      b && ((c = b === "global" ? window : s), a(c, ri, v));
    }
    function m() {
      o(c, ri);
    }
    function h(b) {
      l = b;
    }
    function _() {
      var b = l;
      (l = !0),
        ni(function () {
          l = b;
        });
    }
    function v(b) {
      if (!l) {
        var y = Jr(b);
        y === u(Zt) ? e.go("<") : y === u(Qt) && e.go(">");
      }
    }
    return {
      mount: f,
      destroy: m,
      disable: h,
    };
  }
  var ct = jr + "-lazy",
    zt = ct + "-srcset",
    Ss = "[" + ct + "], [" + zt + "]";
  function ws(e, t, r) {
    var n = K(e),
      i = n.on,
      a = n.off,
      o = n.bind,
      s = n.emit,
      u = r.lazyLoad === "sequential",
      c = [At, Je],
      l = [];
    function f() {
      r.lazyLoad && (d(), i(Y, d));
    }
    function d() {
      ye(l), m(), u ? b() : (a(c), i(c, h), h());
    }
    function m() {
      t.Slides.forEach(function (y) {
        Hr(y.slide, Ss).forEach(function (E) {
          var R = ue(E, ct),
            S = ue(E, zt);
          if (R !== E.src || S !== E.srcset) {
            var p = r.classes.spinner,
              g = E.parentElement,
              w = St(g, "." + p) || Ke("span", p, g);
            l.push([E, y, w]), E.src || ht(E, "none");
          }
        });
      });
    }
    function h() {
      (l = l.filter(function (y) {
        var E = r.perPage * ((r.preloadPages || 1) + 1) - 1;
        return y[1].isWithin(e.index, E) ? _(y) : !0;
      })),
        l.length || a(c);
    }
    function _(y) {
      var E = y[0];
      de(y[1].slide, Fr),
        o(E, "load error", j(v, y)),
        V(E, "src", ue(E, ct)),
        V(E, "srcset", ue(E, zt)),
        ve(E, ct),
        ve(E, zt);
    }
    function v(y, E) {
      var R = y[0],
        S = y[1];
      me(S.slide, Fr),
        E.type !== "error" && (Me(y[2]), ht(R, ""), s(_i, R, S), s(gt)),
        u && b();
    }
    function b() {
      l.length && _(l.shift());
    }
    return {
      mount: f,
      destroy: j(ye, l),
      check: h,
    };
  }
  function As(e, t, r) {
    var n = K(e),
      i = n.on,
      a = n.emit,
      o = n.bind,
      s = t.Slides,
      u = t.Elements,
      c = t.Controller,
      l = c.hasFocus,
      f = c.getIndex,
      d = c.go,
      m = t.Direction.resolve,
      h = u.pagination,
      _ = [],
      v,
      b;
    function y() {
      E(), i([ne, Y, qt], y);
      var N = r.pagination;
      h && ht(h, N ? "" : "none"),
        N &&
          (i([xe, Gr, Je], I),
          R(),
          I(),
          a(
            Do,
            {
              list: v,
              items: _,
            },
            w(e.index)
          ));
    }
    function E() {
      v && (Me(h ? Te(v.children) : v), me(v, b), ye(_), (v = null)),
        n.destroy();
    }
    function R() {
      var N = e.length,
        A = r.classes,
        C = r.i18n,
        O = r.perPage,
        F = l() ? c.getEnd() + 1 : pt(N / O);
      (v = h || Ke("ul", A.pagination, u.track.parentElement)),
        de(v, (b = nr + "--" + g())),
        V(v, be, "tablist"),
        V(v, ae, C.select),
        V(v, Ur, g() === er ? "vertical" : "");
      for (var M = 0; M < F; M++) {
        var B = Ke("li", null, v),
          G = Ke(
            "button",
            {
              class: A.page,
              type: "button",
            },
            B
          ),
          k = s.getIn(M).map(function (T) {
            return T.slide.id;
          }),
          D = !l() && O > 1 ? C.pageX : C.slideX;
        o(G, "click", j(S, M)),
          r.paginationKeyboard && o(G, "keydown", j(p, M)),
          V(B, be, "presentation"),
          V(G, be, "tab"),
          V(G, xt, k.join(" ")),
          V(G, ae, Dr(D, M + 1)),
          V(G, Ue, -1),
          _.push({
            li: B,
            button: G,
            page: M,
          });
      }
    }
    function S(N) {
      d(">" + N, !0);
    }
    function p(N, A) {
      var C = _.length,
        O = Jr(A),
        F = g(),
        M = -1;
      O === m(Qt, !1, F)
        ? (M = ++N % C)
        : O === m(Zt, !1, F)
        ? (M = (--N + C) % C)
        : O === "Home"
        ? (M = 0)
        : O === "End" && (M = C - 1);
      var B = _[M];
      B && (si(B.button), d(">" + M), ge(A, !0));
    }
    function g() {
      return r.paginationDirection || r.direction;
    }
    function w(N) {
      return _[c.toPage(N)];
    }
    function I() {
      var N = w(f(!0)),
        A = w(f());
      if (N) {
        var C = N.button;
        me(C, Fe), ve(C, Xn), V(C, Ue, -1);
      }
      if (A) {
        var O = A.button;
        de(O, Fe), V(O, Xn, !0), V(O, Ue, "");
      }
      a(
        Mo,
        {
          list: v,
          items: _,
        },
        N,
        A
      );
    }
    return {
      items: _,
      mount: y,
      destroy: E,
      getAt: w,
      update: I,
    };
  }
  var xs = [" ", "Enter"];
  function Ts(e, t, r) {
    var n = r.isNavigation,
      i = r.slideFocus,
      a = [];
    function o() {
      e.splides.forEach(function (h) {
        h.isParent || (c(e, h.splide), c(h.splide, e));
      }),
        n && l();
    }
    function s() {
      a.forEach(function (h) {
        h.destroy();
      }),
        ye(a);
    }
    function u() {
      s(), o();
    }
    function c(h, _) {
      var v = K(h);
      v.on(xe, function (b, y, E) {
        _.go(_.is(Ze) ? E : b);
      }),
        a.push(v);
    }
    function l() {
      var h = K(e),
        _ = h.on;
      _(di, d), _(mi, m), _([ke, ne], f), a.push(h), h.emit(hi, e.splides);
    }
    function f() {
      V(t.Elements.list, Ur, r.direction === er ? "vertical" : "");
    }
    function d(h) {
      e.go(h.index);
    }
    function m(h, _) {
      $r(xs, Jr(_)) && (d(h), ge(_));
    }
    return {
      setup: j(
        t.Media.set,
        {
          slideFocus: bt(i) ? n : i,
        },
        !0
      ),
      mount: o,
      destroy: s,
      remount: u,
    };
  }
  function Cs(e, t, r) {
    var n = K(e),
      i = n.bind,
      a = 0;
    function o() {
      r.wheel && i(t.Elements.track, "wheel", s, ze);
    }
    function s(c) {
      if (c.cancelable) {
        var l = c.deltaY,
          f = l < 0,
          d = Ir(c),
          m = r.wheelMinThreshold || 0,
          h = r.wheelSleep || 0;
        re(l) > m && d - a > h && (e.go(f ? "<" : ">"), (a = d)), u(f) && ge(c);
      }
    }
    function u(c) {
      return (
        !r.releaseWheel || e.state.is(Xe) || t.Controller.getAdjacent(c) !== -1
      );
    }
    return {
      mount: o,
    };
  }
  var Os = 90;
  function Ls(e, t, r) {
    var n = K(e),
      i = n.on,
      a = t.Elements.track,
      o = r.live && !r.isNavigation,
      s = Ke("span", Uo),
      u = Xt(Os, j(l, !1));
    function c() {
      o &&
        (d(!t.Autoplay.isPaused()),
        V(a, Qn, !0),
        (s.textContent = "\u2026"),
        i(pi, j(d, !0)),
        i(gi, j(d, !1)),
        i([At, Je], j(l, !0)));
    }
    function l(m) {
      V(a, Zn, m), m ? (Et(a, s), u.start()) : (Me(s), u.cancel());
    }
    function f() {
      ve(a, [Jn, Qn, Zn]), Me(s);
    }
    function d(m) {
      o && V(a, Jn, m ? "off" : "polite");
    }
    return {
      mount: c,
      disable: d,
      destroy: f,
    };
  }
  var Rs = Object.freeze({
      __proto__: null,
      Media: $o,
      Direction: Bo,
      Elements: Qo,
      Slides: ts,
      Layout: rs,
      Clones: is,
      Move: as,
      Controller: os,
      Arrows: cs,
      Autoplay: fs,
      Cover: ds,
      Scroll: ms,
      Drag: bs,
      Keyboard: Es,
      LazyLoad: ws,
      Pagination: As,
      Sync: Ts,
      Wheel: Cs,
      Live: Ls,
    }),
    Ns = {
      prev: "Previous slide",
      next: "Next slide",
      first: "Go to first slide",
      last: "Go to last slide",
      slideX: "Go to slide %s",
      pageX: "Go to page %s",
      play: "Start autoplay",
      pause: "Pause autoplay",
      carousel: "carousel",
      slide: "slide",
      select: "Select a slide to show",
      slideLabel: "%s of %s",
    },
    Is = {
      type: "slide",
      role: "region",
      speed: 400,
      perPage: 1,
      cloneStatus: !0,
      arrows: !0,
      pagination: !0,
      paginationKeyboard: !0,
      interval: 5e3,
      pauseOnHover: !0,
      pauseOnFocus: !0,
      resetProgress: !0,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      drag: !0,
      direction: "ltr",
      trimSpace: !0,
      focusableNodes: "a, button, textarea, input, select, iframe",
      live: !0,
      classes: Xo,
      i18n: Ns,
      reducedMotion: {
        speed: 0,
        rewindSpeed: 0,
        autoplay: "pause",
      },
    };
  function Ps(e, t, r) {
    var n = t.Slides;
    function i() {
      K(e).on([ke, Y], a);
    }
    function a() {
      n.forEach(function (s) {
        s.style("transform", "translateX(-" + 100 * s.index + "%)");
      });
    }
    function o(s, u) {
      n.style("transition", "opacity " + r.speed + "ms " + r.easing), ni(u);
    }
    return {
      mount: i,
      start: o,
      cancel: Nr,
    };
  }
  function Ds(e, t, r) {
    var n = t.Move,
      i = t.Controller,
      a = t.Scroll,
      o = t.Elements.list,
      s = j(se, o, "transition"),
      u;
    function c() {
      K(e).bind(o, "transitionend", function (m) {
        m.target === o && u && (f(), u());
      });
    }
    function l(m, h) {
      var _ = n.toPosition(m, !0),
        v = n.getPosition(),
        b = d(m);
      re(_ - v) >= 1 && b >= 1
        ? r.useScroll
          ? a.scroll(_, b, !1, h)
          : (s("transform " + b + "ms " + r.easing),
            n.translate(_, !0),
            (u = h))
        : (n.jump(m), h());
    }
    function f() {
      s(""), a.cancel();
    }
    function d(m) {
      var h = r.rewindSpeed;
      if (e.is(Ye) && h) {
        var _ = i.getIndex(!0),
          v = i.getEnd();
        if ((_ === 0 && m >= v) || (_ >= v && m === 0)) return h;
      }
      return r.speed;
    }
    return {
      mount: c,
      start: l,
      cancel: f,
    };
  }
  var Ms = (function () {
      function e(r, n) {
        (this.event = K()),
          (this.Components = {}),
          (this.state = ko(Ge)),
          (this.splides = []),
          (this._o = {}),
          (this._E = {});
        var i = we(r) ? ci(document, r) : r;
        ut(i, i + " is invalid."),
          (this.root = i),
          (n = Se(
            {
              label: ue(i, ae) || "",
              labelledby: ue(i, Kr) || "",
            },
            Is,
            e.defaults,
            n || {}
          ));
        try {
          Se(n, JSON.parse(ue(i, jr)));
        } catch {
          ut(!1, "Invalid JSON");
        }
        this._o = Object.create(Se({}, n));
      }
      var t = e.prototype;
      return (
        (t.mount = function (n, i) {
          var a = this,
            o = this.state,
            s = this.Components;
          ut(o.is([Ge, Gt]), "Already mounted!"),
            o.set(Ge),
            (this._C = s),
            (this._T = i || this._T || (this.is(Tt) ? Ps : Ds)),
            (this._E = n || this._E);
          var u = vt({}, Rs, this._E, {
            Transition: this._T,
          });
          return (
            De(u, function (c, l) {
              var f = c(a, s, a._o);
              (s[l] = f), f.setup && f.setup();
            }),
            De(s, function (c) {
              c.mount && c.mount();
            }),
            this.emit(ke),
            de(this.root, qo),
            o.set(qe),
            this.emit(qn),
            this
          );
        }),
        (t.sync = function (n) {
          return (
            this.splides.push({
              splide: n,
            }),
            n.splides.push({
              splide: this,
              isParent: !0,
            }),
            this.state.is(qe) &&
              (this._C.Sync.remount(), n.Components.Sync.remount()),
            this
          );
        }),
        (t.go = function (n) {
          return this._C.Controller.go(n), this;
        }),
        (t.on = function (n, i) {
          return this.event.on(n, i), this;
        }),
        (t.off = function (n) {
          return this.event.off(n), this;
        }),
        (t.emit = function (n) {
          var i;
          return (
            (i = this.event).emit.apply(i, [n].concat(Te(arguments, 1))), this
          );
        }),
        (t.add = function (n, i) {
          return this._C.Slides.add(n, i), this;
        }),
        (t.remove = function (n) {
          return this._C.Slides.remove(n), this;
        }),
        (t.is = function (n) {
          return this._o.type === n;
        }),
        (t.refresh = function () {
          return this.emit(Y), this;
        }),
        (t.destroy = function (n) {
          n === void 0 && (n = !0);
          var i = this.event,
            a = this.state;
          return (
            a.is(Ge)
              ? K(this).on(qn, this.destroy.bind(this, n))
              : (De(
                  this._C,
                  function (o) {
                    o.destroy && o.destroy(n);
                  },
                  !0
                ),
                i.emit(vi),
                i.destroy(),
                n && ye(this.splides),
                a.set(Gt)),
            this
          );
        }),
        yo(e, [
          {
            key: "options",
            get: function () {
              return this._o;
            },
            set: function (n) {
              this._C.Media.set(n, !0, !0);
            },
          },
          {
            key: "length",
            get: function () {
              return this._C.Slides.getLength(!0);
            },
          },
          {
            key: "index",
            get: function () {
              return this._C.Controller.getIndex();
            },
          },
        ]),
        e
      );
    })(),
    ir = Ms;
  ir.defaults = {};
  ir.STATES = So;
  var rn = !1,
    nn = !1,
    Be = [];
  function Fs(e) {
    ks(e);
  }
  function ks(e) {
    Be.includes(e) || Be.push(e), Vs();
  }
  function Hi(e) {
    let t = Be.indexOf(e);
    t !== -1 && Be.splice(t, 1);
  }
  function Vs() {
    !nn && !rn && ((rn = !0), queueMicrotask($s));
  }
  function $s() {
    (rn = !1), (nn = !0);
    for (let e = 0; e < Be.length; e++) Be[e]();
    (Be.length = 0), (nn = !1);
  }
  var nt,
    it,
    Dt,
    ji,
    an = !0;
  function Bs(e) {
    (an = !1), e(), (an = !0);
  }
  function Hs(e) {
    (nt = e.reactive),
      (Dt = e.release),
      (it = (t) =>
        e.effect(t, {
          scheduler: (r) => {
            an ? Fs(r) : r();
          },
        })),
      (ji = e.raw);
  }
  function Pi(e) {
    it = e;
  }
  function js(e) {
    let t = () => {};
    return [
      (n) => {
        let i = it(n);
        return (
          e._x_effects ||
            ((e._x_effects = new Set()),
            (e._x_runEffects = () => {
              e._x_effects.forEach((a) => a());
            })),
          e._x_effects.add(i),
          (t = () => {
            i !== void 0 && (e._x_effects.delete(i), Dt(i));
          }),
          i
        );
      },
      () => {
        t();
      },
    ];
  }
  var Wi = [],
    zi = [],
    Gi = [];
  function Ws(e) {
    Gi.push(e);
  }
  function Ki(e, t) {
    typeof t == "function"
      ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t))
      : ((t = e), zi.push(t));
  }
  function zs(e) {
    Wi.push(e);
  }
  function Gs(e, t, r) {
    e._x_attributeCleanups || (e._x_attributeCleanups = {}),
      e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
      e._x_attributeCleanups[t].push(r);
  }
  function Ui(e, t) {
    e._x_attributeCleanups &&
      Object.entries(e._x_attributeCleanups).forEach(([r, n]) => {
        (t === void 0 || t.includes(r)) &&
          (n.forEach((i) => i()), delete e._x_attributeCleanups[r]);
      });
  }
  var bn = new MutationObserver(wn),
    yn = !1;
  function En() {
    bn.observe(document, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeOldValue: !0,
    }),
      (yn = !0);
  }
  function qi() {
    Ks(), bn.disconnect(), (yn = !1);
  }
  var Rt = [],
    Zr = !1;
  function Ks() {
    (Rt = Rt.concat(bn.takeRecords())),
      Rt.length &&
        !Zr &&
        ((Zr = !0),
        queueMicrotask(() => {
          Us(), (Zr = !1);
        }));
  }
  function Us() {
    wn(Rt), (Rt.length = 0);
  }
  function X(e) {
    if (!yn) return e();
    qi();
    let t = e();
    return En(), t;
  }
  var Sn = !1,
    sr = [];
  function qs() {
    Sn = !0;
  }
  function Ys() {
    (Sn = !1), wn(sr), (sr = []);
  }
  function wn(e) {
    if (Sn) {
      sr = sr.concat(e);
      return;
    }
    let t = [],
      r = [],
      n = new Map(),
      i = new Map();
    for (let a = 0; a < e.length; a++)
      if (
        !e[a].target._x_ignoreMutationObserver &&
        (e[a].type === "childList" &&
          (e[a].addedNodes.forEach((o) => o.nodeType === 1 && t.push(o)),
          e[a].removedNodes.forEach((o) => o.nodeType === 1 && r.push(o))),
        e[a].type === "attributes")
      ) {
        let o = e[a].target,
          s = e[a].attributeName,
          u = e[a].oldValue,
          c = () => {
            n.has(o) || n.set(o, []),
              n.get(o).push({
                name: s,
                value: o.getAttribute(s),
              });
          },
          l = () => {
            i.has(o) || i.set(o, []), i.get(o).push(s);
          };
        o.hasAttribute(s) && u === null
          ? c()
          : o.hasAttribute(s)
          ? (l(), c())
          : l();
      }
    i.forEach((a, o) => {
      Ui(o, a);
    }),
      n.forEach((a, o) => {
        Wi.forEach((s) => s(o, a));
      });
    for (let a of r)
      if (!t.includes(a) && (zi.forEach((o) => o(a)), a._x_cleanups))
        for (; a._x_cleanups.length; ) a._x_cleanups.pop()();
    t.forEach((a) => {
      (a._x_ignoreSelf = !0), (a._x_ignore = !0);
    });
    for (let a of t)
      r.includes(a) ||
        (a.isConnected &&
          (delete a._x_ignoreSelf,
          delete a._x_ignore,
          Gi.forEach((o) => o(a)),
          (a._x_ignore = !0),
          (a._x_ignoreSelf = !0)));
    t.forEach((a) => {
      delete a._x_ignoreSelf, delete a._x_ignore;
    }),
      (t = null),
      (r = null),
      (n = null),
      (i = null);
  }
  function Yi(e) {
    return Ft(et(e));
  }
  function Mt(e, t, r) {
    return (
      (e._x_dataStack = [t, ...et(r || e)]),
      () => {
        e._x_dataStack = e._x_dataStack.filter((n) => n !== t);
      }
    );
  }
  function Di(e, t) {
    let r = e._x_dataStack[0];
    Object.entries(t).forEach(([n, i]) => {
      r[n] = i;
    });
  }
  function et(e) {
    return e._x_dataStack
      ? e._x_dataStack
      : typeof ShadowRoot == "function" && e instanceof ShadowRoot
      ? et(e.host)
      : e.parentNode
      ? et(e.parentNode)
      : [];
  }
  function Ft(e) {
    let t = new Proxy(
      {},
      {
        ownKeys: () => Array.from(new Set(e.flatMap((r) => Object.keys(r)))),
        has: (r, n) => e.some((i) => i.hasOwnProperty(n)),
        get: (r, n) =>
          (e.find((i) => {
            if (i.hasOwnProperty(n)) {
              let a = Object.getOwnPropertyDescriptor(i, n);
              if (
                (a.get && a.get._x_alreadyBound) ||
                (a.set && a.set._x_alreadyBound)
              )
                return !0;
              if ((a.get || a.set) && a.enumerable) {
                let o = a.get,
                  s = a.set,
                  u = a;
                (o = o && o.bind(t)),
                  (s = s && s.bind(t)),
                  o && (o._x_alreadyBound = !0),
                  s && (s._x_alreadyBound = !0),
                  Object.defineProperty(i, n, {
                    ...u,
                    get: o,
                    set: s,
                  });
              }
              return !0;
            }
            return !1;
          }) || {})[n],
        set: (r, n, i) => {
          let a = e.find((o) => o.hasOwnProperty(n));
          return a ? (a[n] = i) : (e[e.length - 1][n] = i), !0;
        },
      }
    );
    return t;
  }
  function Xi(e) {
    let t = (n) => typeof n == "object" && !Array.isArray(n) && n !== null,
      r = (n, i = "") => {
        Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(
          ([a, { value: o, enumerable: s }]) => {
            if (s === !1 || o === void 0) return;
            let u = i === "" ? a : `${i}.${a}`;
            typeof o == "object" && o !== null && o._x_interceptor
              ? (n[a] = o.initialize(e, u, a))
              : t(o) && o !== n && !(o instanceof Element) && r(o, u);
          }
        );
      };
    return r(e);
  }
  function Ji(e, t = () => {}) {
    let r = {
      initialValue: void 0,
      _x_interceptor: !0,
      initialize(n, i, a) {
        return e(
          this.initialValue,
          () => Xs(n, i),
          (o) => on(n, i, o),
          i,
          a
        );
      },
    };
    return (
      t(r),
      (n) => {
        if (typeof n == "object" && n !== null && n._x_interceptor) {
          let i = r.initialize.bind(r);
          r.initialize = (a, o, s) => {
            let u = n.initialize(a, o, s);
            return (r.initialValue = u), i(a, o, s);
          };
        } else r.initialValue = n;
        return r;
      }
    );
  }
  function Xs(e, t) {
    return t.split(".").reduce((r, n) => r[n], e);
  }
  function on(e, t, r) {
    if ((typeof t == "string" && (t = t.split(".")), t.length === 1))
      e[t[0]] = r;
    else {
      if (t.length === 0) throw error;
      return e[t[0]] || (e[t[0]] = {}), on(e[t[0]], t.slice(1), r);
    }
  }
  var Zi = {};
  function fe(e, t) {
    Zi[e] = t;
  }
  function sn(e, t) {
    return (
      Object.entries(Zi).forEach(([r, n]) => {
        Object.defineProperty(e, `$ ${r}`, {
          get() {
            let [i, a] = na(t);
            return (
              (i = {
                interceptor: Ji,
                ...i,
              }),
              Ki(t, a),
              n(t, i)
            );
          },
          enumerable: !1,
        });
      }),
      e
    );
  }
  function Js(e, t, r, ...n) {
    try {
      return r(...n);
    } catch (i) {
      Pt(i, e, t);
    }
  }
  function Pt(e, t, r = void 0) {
    Object.assign(e, {
      el: t,
      expression: r,
    }),
      console.warn(
        `Alpine Expression Error: ${e.message}

${
  r
    ? 'Expression: "' +
      r +
      `"

`
    : ""
}`,
        t
      ),
      setTimeout(() => {
        throw e;
      }, 0);
  }
  var or = !0;
  function Zs(e) {
    let t = or;
    (or = !1), e(), (or = t);
  }
  function Qe(e, t, r = {}) {
    let n;
    return ee(e, t)((i) => (n = i), r), n;
  }
  function ee(...e) {
    return Qi(...e);
  }
  var Qi = ea;
  function Qs(e) {
    Qi = e;
  }
  function ea(e, t) {
    let r = {};
    sn(r, e);
    let n = [r, ...et(e)];
    if (typeof t == "function") return eu(n, t);
    let i = ru(n, t, e);
    return Js.bind(null, e, t, i);
  }
  function eu(e, t) {
    return (r = () => {}, { scope: n = {}, params: i = [] } = {}) => {
      let a = t.apply(Ft([n, ...e]), i);
      ur(r, a);
    };
  }
  var Qr = {};
  function tu(e, t) {
    if (Qr[e]) return Qr[e];
    let r = Object.getPrototypeOf(async function () {}).constructor,
      n =
        /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e)
          ? `(async()=>{ ${e} })()`
          : e,
      a = (() => {
        try {
          return new r(
            ["__self", "scope"],
            `with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`
          );
        } catch (o) {
          return Pt(o, t, e), Promise.resolve();
        }
      })();
    return (Qr[e] = a), a;
  }
  function ru(e, t, r) {
    let n = tu(t, r);
    return (i = () => {}, { scope: a = {}, params: o = [] } = {}) => {
      (n.result = void 0), (n.finished = !1);
      let s = Ft([a, ...e]);
      if (typeof n == "function") {
        let u = n(n, s).catch((c) => Pt(c, r, t));
        n.finished
          ? (ur(i, n.result, s, o, r), (n.result = void 0))
          : u
              .then((c) => {
                ur(i, c, s, o, r);
              })
              .catch((c) => Pt(c, r, t))
              .finally(() => (n.result = void 0));
      }
    };
  }
  function ur(e, t, r, n, i) {
    if (or && typeof t == "function") {
      let a = t.apply(r, n);
      a instanceof Promise
        ? a.then((o) => ur(e, o, r, n)).catch((o) => Pt(o, i, t))
        : e(a);
    } else
      typeof t == "object" && t instanceof Promise ? t.then((a) => e(a)) : e(t);
  }
  var An = "x-";
  function at(e = "") {
    return An + e;
  }
  function nu(e) {
    An = e;
  }
  var un = {};
  function q(e, t) {
    return (
      (un[e] = t),
      {
        before(r) {
          if (!un[r]) {
            console.warn(
              "Cannot find directive `${directive}`. `${name}` will use the default order of execution"
            );
            return;
          }
          let n = $e.indexOf(r) ?? $e.indexOf("DEFAULT");
          n >= 0 && $e.splice(n, 0, e);
        },
      }
    );
  }
  function xn(e, t, r) {
    if (((t = Array.from(t)), e._x_virtualDirectives)) {
      let a = Object.entries(e._x_virtualDirectives).map(([s, u]) => ({
          name: s,
          value: u,
        })),
        o = ta(a);
      (a = a.map((s) =>
        o.find((u) => u.name === s.name)
          ? {
              name: `x-bind:${s.name}`,
              value: `"${s.value}"`,
            }
          : s
      )),
        (t = t.concat(a));
    }
    let n = {};
    return t
      .map(oa((a, o) => (n[a] = o)))
      .filter(ua)
      .map(ou(n, r))
      .sort(su)
      .map((a) => au(e, a));
  }
  function ta(e) {
    return Array.from(e)
      .map(oa())
      .filter((t) => !ua(t));
  }
  var cn = !1,
    Lt = new Map(),
    ra = Symbol();
  function iu(e) {
    cn = !0;
    let t = Symbol();
    (ra = t), Lt.set(t, []);
    let r = () => {
        for (; Lt.get(t).length; ) Lt.get(t).shift()();
        Lt.delete(t);
      },
      n = () => {
        (cn = !1), r();
      };
    e(r), n();
  }
  function na(e) {
    let t = [],
      r = (s) => t.push(s),
      [n, i] = js(e);
    return (
      t.push(i),
      [
        {
          Alpine: Vt,
          effect: n,
          cleanup: r,
          evaluateLater: ee.bind(ee, e),
          evaluate: Qe.bind(Qe, e),
        },
        () => t.forEach((s) => s()),
      ]
    );
  }
  function au(e, t) {
    let r = () => {},
      n = un[t.type] || r,
      [i, a] = na(e);
    Gs(e, t.original, a);
    let o = () => {
      e._x_ignore ||
        e._x_ignoreSelf ||
        (n.inline && n.inline(e, t, i),
        (n = n.bind(n, e, t, i)),
        cn ? Lt.get(ra).push(n) : n());
    };
    return (o.runCleanups = a), o;
  }
  var ia =
      (e, t) =>
      ({ name: r, value: n }) => (
        r.startsWith(e) && (r = r.replace(e, t)),
        {
          name: r,
          value: n,
        }
      ),
    aa = (e) => e;
  function oa(e = () => {}) {
    return ({ name: t, value: r }) => {
      let { name: n, value: i } = sa.reduce((a, o) => o(a), {
        name: t,
        value: r,
      });
      return (
        n !== t && e(n, t),
        {
          name: n,
          value: i,
        }
      );
    };
  }
  var sa = [];
  function Tn(e) {
    sa.push(e);
  }
  function ua({ name: e }) {
    return ca().test(e);
  }
  var ca = () => new RegExp(`^${An}([^:^.]+)\\b`);
  function ou(e, t) {
    return ({ name: r, value: n }) => {
      let i = r.match(ca()),
        a = r.match(/:([a-zA-Z0-9\-:]+)/),
        o = r.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
        s = t || e[r] || r;
      return {
        type: i ? i[1] : null,
        value: a ? a[1] : null,
        modifiers: o.map((u) => u.replace(".", "")),
        expression: n,
        original: s,
      };
    };
  }
  var ln = "DEFAULT",
    $e = [
      "ignore",
      "ref",
      "data",
      "id",
      "radio",
      "tabs",
      "switch",
      "disclosure",
      "menu",
      "listbox",
      "combobox",
      "bind",
      "init",
      "for",
      "mask",
      "model",
      "modelable",
      "transition",
      "show",
      "if",
      ln,
      "teleport",
    ];
  function su(e, t) {
    let r = $e.indexOf(e.type) === -1 ? ln : e.type,
      n = $e.indexOf(t.type) === -1 ? ln : t.type;
    return $e.indexOf(r) - $e.indexOf(n);
  }
  function Nt(e, t, r = {}) {
    e.dispatchEvent(
      new CustomEvent(t, {
        detail: r,
        bubbles: !0,
        composed: !0,
        cancelable: !0,
      })
    );
  }
  function Le(e, t) {
    if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
      Array.from(e.children).forEach((i) => Le(i, t));
      return;
    }
    let r = !1;
    if ((t(e, () => (r = !0)), r)) return;
    let n = e.firstElementChild;
    for (; n; ) Le(n, t, !1), (n = n.nextElementSibling);
  }
  function tt(e, ...t) {
    console.warn(`Alpine Warning: ${e}`, ...t);
  }
  function uu() {
    document.body ||
      tt(
        "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
      ),
      Nt(document, "alpine:init"),
      Nt(document, "alpine:initializing"),
      En(),
      Ws((t) => Re(t, Le)),
      Ki((t) => ga(t)),
      zs((t, r) => {
        xn(t, r).forEach((n) => n());
      });
    let e = (t) => !dr(t.parentElement, !0);
    Array.from(document.querySelectorAll(da()))
      .filter(e)
      .forEach((t) => {
        Re(t);
      }),
      Nt(document, "alpine:initialized");
  }
  var Cn = [],
    la = [];
  function fa() {
    return Cn.map((e) => e());
  }
  function da() {
    return Cn.concat(la).map((e) => e());
  }
  function va(e) {
    Cn.push(e);
  }
  function ha(e) {
    la.push(e);
  }
  function dr(e, t = !1) {
    return vr(e, (r) => {
      if ((t ? da() : fa()).some((i) => r.matches(i))) return !0;
    });
  }
  function vr(e, t) {
    if (e) {
      if (t(e)) return e;
      if ((e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement))
        return vr(e.parentElement, t);
    }
  }
  function cu(e) {
    return fa().some((t) => e.matches(t));
  }
  var pa = [];
  function lu(e) {
    pa.push(e);
  }
  function Re(e, t = Le, r = () => {}) {
    iu(() => {
      t(e, (n, i) => {
        r(n, i),
          pa.forEach((a) => a(n, i)),
          xn(n, n.attributes).forEach((a) => a()),
          n._x_ignore && i();
      });
    });
  }
  function ga(e) {
    Le(e, (t) => Ui(t));
  }
  var fn = [],
    On = !1;
  function Ln(e = () => {}) {
    return (
      queueMicrotask(() => {
        On ||
          setTimeout(() => {
            dn();
          });
      }),
      new Promise((t) => {
        fn.push(() => {
          e(), t();
        });
      })
    );
  }
  function dn() {
    for (On = !1; fn.length; ) fn.shift()();
  }
  function fu() {
    On = !0;
  }
  function Rn(e, t) {
    return Array.isArray(t)
      ? Mi(e, t.join(" "))
      : typeof t == "object" && t !== null
      ? du(e, t)
      : typeof t == "function"
      ? Rn(e, t())
      : Mi(e, t);
  }
  function Mi(e, t) {
    let r = (a) => a.split(" ").filter(Boolean),
      n = (a) =>
        a
          .split(" ")
          .filter((o) => !e.classList.contains(o))
          .filter(Boolean),
      i = (a) => (
        e.classList.add(...a),
        () => {
          e.classList.remove(...a);
        }
      );
    return (t = t === !0 ? (t = "") : t || ""), i(n(t));
  }
  function du(e, t) {
    let r = (s) => s.split(" ").filter(Boolean),
      n = Object.entries(t)
        .flatMap(([s, u]) => (u ? r(s) : !1))
        .filter(Boolean),
      i = Object.entries(t)
        .flatMap(([s, u]) => (u ? !1 : r(s)))
        .filter(Boolean),
      a = [],
      o = [];
    return (
      i.forEach((s) => {
        e.classList.contains(s) && (e.classList.remove(s), o.push(s));
      }),
      n.forEach((s) => {
        e.classList.contains(s) || (e.classList.add(s), a.push(s));
      }),
      () => {
        o.forEach((s) => e.classList.add(s)),
          a.forEach((s) => e.classList.remove(s));
      }
    );
  }
  function hr(e, t) {
    return typeof t == "object" && t !== null ? vu(e, t) : hu(e, t);
  }
  function vu(e, t) {
    let r = {};
    return (
      Object.entries(t).forEach(([n, i]) => {
        (r[n] = e.style[n]),
          n.startsWith("--") || (n = pu(n)),
          e.style.setProperty(n, i);
      }),
      setTimeout(() => {
        e.style.length === 0 && e.removeAttribute("style");
      }),
      () => {
        hr(e, r);
      }
    );
  }
  function hu(e, t) {
    let r = e.getAttribute("style", t);
    return (
      e.setAttribute("style", t),
      () => {
        e.setAttribute("style", r || "");
      }
    );
  }
  function pu(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function vn(e, t = () => {}) {
    let r = !1;
    return function () {
      r ? t.apply(this, arguments) : ((r = !0), e.apply(this, arguments));
    };
  }
  q(
    "transition",
    (e, { value: t, modifiers: r, expression: n }, { evaluate: i }) => {
      typeof n == "function" && (n = i(n)), n ? gu(e, n, t) : _u(e, r, t);
    }
  );
  function gu(e, t, r) {
    _a(e, Rn, ""),
      {
        enter: (i) => {
          e._x_transition.enter.during = i;
        },
        "enter-start": (i) => {
          e._x_transition.enter.start = i;
        },
        "enter-end": (i) => {
          e._x_transition.enter.end = i;
        },
        leave: (i) => {
          e._x_transition.leave.during = i;
        },
        "leave-start": (i) => {
          e._x_transition.leave.start = i;
        },
        "leave-end": (i) => {
          e._x_transition.leave.end = i;
        },
      }[r](t);
  }
  function _u(e, t, r) {
    _a(e, hr);
    let n = !t.includes("in") && !t.includes("out") && !r,
      i = n || t.includes("in") || ["enter"].includes(r),
      a = n || t.includes("out") || ["leave"].includes(r);
    t.includes("in") && !n && (t = t.filter((b, y) => y < t.indexOf("out"))),
      t.includes("out") && !n && (t = t.filter((b, y) => y > t.indexOf("out")));
    let o = !t.includes("opacity") && !t.includes("scale"),
      s = o || t.includes("opacity"),
      u = o || t.includes("scale"),
      c = s ? 0 : 1,
      l = u ? Ct(t, "scale", 95) / 100 : 1,
      f = Ct(t, "delay", 0),
      d = Ct(t, "origin", "center"),
      m = "opacity, transform",
      h = Ct(t, "duration", 150) / 1e3,
      _ = Ct(t, "duration", 75) / 1e3,
      v = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    i &&
      ((e._x_transition.enter.during = {
        transformOrigin: d,
        transitionDelay: f,
        transitionProperty: m,
        transitionDuration: `${h}s`,
        transitionTimingFunction: v,
      }),
      (e._x_transition.enter.start = {
        opacity: c,
        transform: `scale(${l})`,
      }),
      (e._x_transition.enter.end = {
        opacity: 1,
        transform: "scale(1)",
      })),
      a &&
        ((e._x_transition.leave.during = {
          transformOrigin: d,
          transitionDelay: f,
          transitionProperty: m,
          transitionDuration: `${_}s`,
          transitionTimingFunction: v,
        }),
        (e._x_transition.leave.start = {
          opacity: 1,
          transform: "scale(1)",
        }),
        (e._x_transition.leave.end = {
          opacity: c,
          transform: `scale(${l})`,
        }));
  }
  function _a(e, t, r = {}) {
    e._x_transition ||
      (e._x_transition = {
        enter: {
          during: r,
          start: r,
          end: r,
        },
        leave: {
          during: r,
          start: r,
          end: r,
        },
        in(n = () => {}, i = () => {}) {
          hn(
            e,
            t,
            {
              during: this.enter.during,
              start: this.enter.start,
              end: this.enter.end,
            },
            n,
            i
          );
        },
        out(n = () => {}, i = () => {}) {
          hn(
            e,
            t,
            {
              during: this.leave.during,
              start: this.leave.start,
              end: this.leave.end,
            },
            n,
            i
          );
        },
      });
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function (
    e,
    t,
    r,
    n
  ) {
    let i =
        document.visibilityState === "visible"
          ? requestAnimationFrame
          : setTimeout,
      a = () => i(r);
    if (t) {
      e._x_transition && (e._x_transition.enter || e._x_transition.leave)
        ? e._x_transition.enter &&
          (Object.entries(e._x_transition.enter.during).length ||
            Object.entries(e._x_transition.enter.start).length ||
            Object.entries(e._x_transition.enter.end).length)
          ? e._x_transition.in(r)
          : a()
        : e._x_transition
        ? e._x_transition.in(r)
        : a();
      return;
    }
    (e._x_hidePromise = e._x_transition
      ? new Promise((o, s) => {
          e._x_transition.out(
            () => {},
            () => o(n)
          ),
            e._x_transitioning.beforeCancel(() =>
              s({
                isFromCancelledTransition: !0,
              })
            );
        })
      : Promise.resolve(n)),
      queueMicrotask(() => {
        let o = ma(e);
        o
          ? (o._x_hideChildren || (o._x_hideChildren = []),
            o._x_hideChildren.push(e))
          : i(() => {
              let s = (u) => {
                let c = Promise.all([
                  u._x_hidePromise,
                  ...(u._x_hideChildren || []).map(s),
                ]).then(([l]) => l());
                return delete u._x_hidePromise, delete u._x_hideChildren, c;
              };
              s(e).catch((u) => {
                if (!u.isFromCancelledTransition) throw u;
              });
            });
      });
  };
  function ma(e) {
    let t = e.parentNode;
    if (t) return t._x_hidePromise ? t : ma(t);
  }
  function hn(
    e,
    t,
    { during: r, start: n, end: i } = {},
    a = () => {},
    o = () => {}
  ) {
    if (
      (e._x_transitioning && e._x_transitioning.cancel(),
      Object.keys(r).length === 0 &&
        Object.keys(n).length === 0 &&
        Object.keys(i).length === 0)
    ) {
      a(), o();
      return;
    }
    let s, u, c;
    mu(e, {
      start() {
        s = t(e, n);
      },
      during() {
        u = t(e, r);
      },
      before: a,
      end() {
        s(), (c = t(e, i));
      },
      after: o,
      cleanup() {
        u(), c();
      },
    });
  }
  function mu(e, t) {
    let r,
      n,
      i,
      a = vn(() => {
        X(() => {
          (r = !0),
            n || t.before(),
            i || (t.end(), dn()),
            t.after(),
            e.isConnected && t.cleanup(),
            delete e._x_transitioning;
        });
      });
    (e._x_transitioning = {
      beforeCancels: [],
      beforeCancel(o) {
        this.beforeCancels.push(o);
      },
      cancel: vn(function () {
        for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
        a();
      }),
      finish: a,
    }),
      X(() => {
        t.start(), t.during();
      }),
      fu(),
      requestAnimationFrame(() => {
        if (r) return;
        let o =
            Number(
              getComputedStyle(e)
                .transitionDuration.replace(/,.*/, "")
                .replace("s", "")
            ) * 1e3,
          s =
            Number(
              getComputedStyle(e)
                .transitionDelay.replace(/,.*/, "")
                .replace("s", "")
            ) * 1e3;
        o === 0 &&
          (o =
            Number(getComputedStyle(e).animationDuration.replace("s", "")) *
            1e3),
          X(() => {
            t.before();
          }),
          (n = !0),
          requestAnimationFrame(() => {
            r ||
              (X(() => {
                t.end();
              }),
              dn(),
              setTimeout(e._x_transitioning.finish, o + s),
              (i = !0));
          });
      });
  }
  function Ct(e, t, r) {
    if (e.indexOf(t) === -1) return r;
    let n = e[e.indexOf(t) + 1];
    if (!n || (t === "scale" && isNaN(n))) return r;
    if (t === "duration") {
      let i = n.match(/([0-9]+)ms/);
      if (i) return i[1];
    }
    return t === "origin" &&
      ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2])
      ? [n, e[e.indexOf(t) + 2]].join(" ")
      : n;
  }
  var cr = !1;
  function kt(e, t = () => {}) {
    return (...r) => (cr ? t(...r) : e(...r));
  }
  function bu(e) {
    return (...t) => cr && e(...t);
  }
  function yu(e, t) {
    t._x_dataStack || (t._x_dataStack = e._x_dataStack),
      (cr = !0),
      Su(() => {
        Eu(t);
      }),
      (cr = !1);
  }
  function Eu(e) {
    let t = !1;
    Re(e, (n, i) => {
      Le(n, (a, o) => {
        if (t && cu(a)) return o();
        (t = !0), i(a, o);
      });
    });
  }
  function Su(e) {
    let t = it;
    Pi((r, n) => {
      let i = t(r);
      return Dt(i), () => {};
    }),
      e(),
      Pi(t);
  }
  function ba(e, t, r, n = []) {
    switch (
      (e._x_bindings || (e._x_bindings = nt({})),
      (e._x_bindings[t] = r),
      (t = n.includes("camel") ? Lu(t) : t),
      t)
    ) {
      case "value":
        wu(e, r);
        break;
      case "style":
        xu(e, r);
        break;
      case "class":
        Au(e, r);
        break;
      default:
        Tu(e, t, r);
        break;
    }
  }
  function wu(e, t) {
    if (e.type === "radio")
      e.attributes.value === void 0 && (e.value = t),
        window.fromModel && (e.checked = Fi(e.value, t));
    else if (e.type === "checkbox")
      Number.isInteger(t)
        ? (e.value = t)
        : !Number.isInteger(t) &&
          !Array.isArray(t) &&
          typeof t != "boolean" &&
          ![null, void 0].includes(t)
        ? (e.value = String(t))
        : Array.isArray(t)
        ? (e.checked = t.some((r) => Fi(r, e.value)))
        : (e.checked = !!t);
    else if (e.tagName === "SELECT") Ou(e, t);
    else {
      if (e.value === t) return;
      e.value = t;
    }
  }
  function Au(e, t) {
    e._x_undoAddedClasses && e._x_undoAddedClasses(),
      (e._x_undoAddedClasses = Rn(e, t));
  }
  function xu(e, t) {
    e._x_undoAddedStyles && e._x_undoAddedStyles(),
      (e._x_undoAddedStyles = hr(e, t));
  }
  function Tu(e, t, r) {
    [null, void 0, !1].includes(r) && Ru(t)
      ? e.removeAttribute(t)
      : (ya(t) && (r = t), Cu(e, t, r));
  }
  function Cu(e, t, r) {
    e.getAttribute(t) != r && e.setAttribute(t, r);
  }
  function Ou(e, t) {
    let r = [].concat(t).map((n) => n + "");
    Array.from(e.options).forEach((n) => {
      n.selected = r.includes(n.value);
    });
  }
  function Lu(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
  }
  function Fi(e, t) {
    return e == t;
  }
  function ya(e) {
    return [
      "disabled",
      "checked",
      "required",
      "readonly",
      "hidden",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule",
    ].includes(e);
  }
  function Ru(e) {
    return ![
      "aria-pressed",
      "aria-checked",
      "aria-expanded",
      "aria-selected",
    ].includes(e);
  }
  function Nu(e, t, r) {
    if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
    let n = e.getAttribute(t);
    return n === null
      ? typeof r == "function"
        ? r()
        : r
      : n === ""
      ? !0
      : ya(t)
      ? !![t, "true"].includes(n)
      : n;
  }
  function Ea(e, t) {
    var r;
    return function () {
      var n = this,
        i = arguments,
        a = function () {
          (r = null), e.apply(n, i);
        };
      clearTimeout(r), (r = setTimeout(a, t));
    };
  }
  function Sa(e, t) {
    let r;
    return function () {
      let n = this,
        i = arguments;
      r || (e.apply(n, i), (r = !0), setTimeout(() => (r = !1), t));
    };
  }
  function Iu(e) {
    e(Vt);
  }
  var Ve = {},
    ki = !1;
  function Pu(e, t) {
    if ((ki || ((Ve = nt(Ve)), (ki = !0)), t === void 0)) return Ve[e];
    (Ve[e] = t),
      typeof t == "object" &&
        t !== null &&
        t.hasOwnProperty("init") &&
        typeof t.init == "function" &&
        Ve[e].init(),
      Xi(Ve[e]);
  }
  function Du() {
    return Ve;
  }
  var wa = {};
  function Mu(e, t) {
    let r = typeof t != "function" ? () => t : t;
    e instanceof Element ? Aa(e, r()) : (wa[e] = r);
  }
  function Fu(e) {
    return (
      Object.entries(wa).forEach(([t, r]) => {
        Object.defineProperty(e, t, {
          get() {
            return (...n) => r(...n);
          },
        });
      }),
      e
    );
  }
  function Aa(e, t, r) {
    let n = [];
    for (; n.length; ) n.pop()();
    let i = Object.entries(t).map(([o, s]) => ({
        name: o,
        value: s,
      })),
      a = ta(i);
    (i = i.map((o) =>
      a.find((s) => s.name === o.name)
        ? {
            name: `x-bind:${o.name}`,
            value: `"${o.value}"`,
          }
        : o
    )),
      xn(e, i, r).map((o) => {
        n.push(o.runCleanups), o();
      });
  }
  var xa = {};
  function ku(e, t) {
    xa[e] = t;
  }
  function Vu(e, t) {
    return (
      Object.entries(xa).forEach(([r, n]) => {
        Object.defineProperty(e, r, {
          get() {
            return (...i) => n.bind(t)(...i);
          },
          enumerable: !1,
        });
      }),
      e
    );
  }
  var $u = {
      get reactive() {
        return nt;
      },
      get release() {
        return Dt;
      },
      get effect() {
        return it;
      },
      get raw() {
        return ji;
      },
      version: "3.11.1",
      flushAndStopDeferringMutations: Ys,
      dontAutoEvaluateFunctions: Zs,
      disableEffectScheduling: Bs,
      startObservingMutations: En,
      stopObservingMutations: qi,
      setReactivityEngine: Hs,
      closestDataStack: et,
      skipDuringClone: kt,
      onlyDuringClone: bu,
      addRootSelector: va,
      addInitSelector: ha,
      addScopeToNode: Mt,
      deferMutations: qs,
      mapAttributes: Tn,
      evaluateLater: ee,
      interceptInit: lu,
      setEvaluator: Qs,
      mergeProxies: Ft,
      findClosest: vr,
      closestRoot: dr,
      destroyTree: ga,
      interceptor: Ji,
      transition: hn,
      setStyles: hr,
      mutateDom: X,
      directive: q,
      throttle: Sa,
      debounce: Ea,
      evaluate: Qe,
      initTree: Re,
      nextTick: Ln,
      prefixed: at,
      prefix: nu,
      plugin: Iu,
      magic: fe,
      store: Pu,
      start: uu,
      clone: yu,
      bound: Nu,
      $data: Yi,
      walk: Le,
      data: ku,
      bind: Mu,
    },
    Vt = $u;
  function Ta(e, t) {
    let r = Object.create(null),
      n = e.split(",");
    for (let i = 0; i < n.length; i++) r[n[i]] = !0;
    return t ? (i) => !!r[i.toLowerCase()] : (i) => !!r[i];
  }
  var Bu =
      "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    hl = Ta(
      Bu +
        ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
    ),
    Hu = Object.freeze({}),
    pl = Object.freeze([]),
    Ca = Object.assign,
    ju = Object.prototype.hasOwnProperty,
    pr = (e, t) => ju.call(e, t),
    He = Array.isArray,
    It = (e) => Oa(e) === "[object Map]",
    Wu = (e) => typeof e == "string",
    Nn = (e) => typeof e == "symbol",
    gr = (e) => e !== null && typeof e == "object",
    zu = Object.prototype.toString,
    Oa = (e) => zu.call(e),
    La = (e) => Oa(e).slice(8, -1),
    In = (e) =>
      Wu(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    _r = (e) => {
      let t = Object.create(null);
      return (r) => t[r] || (t[r] = e(r));
    },
    Gu = /-(\w)/g,
    gl = _r((e) => e.replace(Gu, (t, r) => (r ? r.toUpperCase() : ""))),
    Ku = /\B([A-Z])/g,
    _l = _r((e) => e.replace(Ku, "-$1").toLowerCase()),
    Ra = _r((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    ml = _r((e) => (e ? `on ${Ra(e)}` : "")),
    Na = (e, t) => e !== t && (e === e || t === t),
    pn = new WeakMap(),
    Ot = [],
    pe,
    je = Symbol("iterate"),
    gn = Symbol("Map key iterate");
  function Uu(e) {
    return e && e._isEffect === !0;
  }
  function qu(e, t = Hu) {
    Uu(e) && (e = e.raw);
    let r = Ju(e, t);
    return t.lazy || r(), r;
  }
  function Yu(e) {
    e.active &&
      (Ia(e), e.options.onStop && e.options.onStop(), (e.active = !1));
  }
  var Xu = 0;
  function Ju(e, t) {
    let r = function () {
      if (!r.active) return e();
      if (!Ot.includes(r)) {
        Ia(r);
        try {
          return Qu(), Ot.push(r), (pe = r), e();
        } finally {
          Ot.pop(), Pa(), (pe = Ot[Ot.length - 1]);
        }
      }
    };
    return (
      (r.id = Xu++),
      (r.allowRecurse = !!t.allowRecurse),
      (r._isEffect = !0),
      (r.active = !0),
      (r.raw = e),
      (r.deps = []),
      (r.options = t),
      r
    );
  }
  function Ia(e) {
    let { deps: t } = e;
    if (t.length) {
      for (let r = 0; r < t.length; r++) t[r].delete(e);
      t.length = 0;
    }
  }
  var rt = !0,
    Pn = [];
  function Zu() {
    Pn.push(rt), (rt = !1);
  }
  function Qu() {
    Pn.push(rt), (rt = !0);
  }
  function Pa() {
    let e = Pn.pop();
    rt = e === void 0 ? !0 : e;
  }
  function le(e, t, r) {
    if (!rt || pe === void 0) return;
    let n = pn.get(e);
    n || pn.set(e, (n = new Map()));
    let i = n.get(r);
    i || n.set(r, (i = new Set())),
      i.has(pe) ||
        (i.add(pe),
        pe.deps.push(i),
        pe.options.onTrack &&
          pe.options.onTrack({
            effect: pe,
            target: e,
            type: t,
            key: r,
          }));
  }
  function Ne(e, t, r, n, i, a) {
    let o = pn.get(e);
    if (!o) return;
    let s = new Set(),
      u = (l) => {
        l &&
          l.forEach((f) => {
            (f !== pe || f.allowRecurse) && s.add(f);
          });
      };
    if (t === "clear") o.forEach(u);
    else if (r === "length" && He(e))
      o.forEach((l, f) => {
        (f === "length" || f >= n) && u(l);
      });
    else
      switch ((r !== void 0 && u(o.get(r)), t)) {
        case "add":
          He(e)
            ? In(r) && u(o.get("length"))
            : (u(o.get(je)), It(e) && u(o.get(gn)));
          break;
        case "delete":
          He(e) || (u(o.get(je)), It(e) && u(o.get(gn)));
          break;
        case "set":
          It(e) && u(o.get(je));
          break;
      }
    let c = (l) => {
      l.options.onTrigger &&
        l.options.onTrigger({
          effect: l,
          target: e,
          key: r,
          type: t,
          newValue: n,
          oldValue: i,
          oldTarget: a,
        }),
        l.options.scheduler ? l.options.scheduler(l) : l();
    };
    s.forEach(c);
  }
  var ec = Ta("__proto__,__v_isRef,__isVue"),
    Da = new Set(
      Object.getOwnPropertyNames(Symbol)
        .map((e) => Symbol[e])
        .filter(Nn)
    ),
    tc = mr(),
    rc = mr(!1, !0),
    nc = mr(!0),
    ic = mr(!0, !0),
    lr = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    let t = Array.prototype[e];
    lr[e] = function (...r) {
      let n = z(this);
      for (let a = 0, o = this.length; a < o; a++) le(n, "get", a + "");
      let i = t.apply(n, r);
      return i === -1 || i === !1 ? t.apply(n, r.map(z)) : i;
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    let t = Array.prototype[e];
    lr[e] = function (...r) {
      Zu();
      let n = t.apply(this, r);
      return Pa(), n;
    };
  });
  function mr(e = !1, t = !1) {
    return function (n, i, a) {
      if (i === "__v_isReactive") return !e;
      if (i === "__v_isReadonly") return e;
      if (i === "__v_raw" && a === (e ? (t ? hc : qa) : t ? vc : Ua).get(n))
        return n;
      let o = He(n);
      if (!e && o && pr(lr, i)) return Reflect.get(lr, i, a);
      let s = Reflect.get(n, i, a);
      return (Nn(i) ? Da.has(i) : ec(i)) || (e || le(n, "get", i), t)
        ? s
        : _n(s)
        ? !o || !In(i)
          ? s.value
          : s
        : gr(s)
        ? e
          ? Ya(s)
          : kn(s)
        : s;
    };
  }
  var ac = Ma(),
    oc = Ma(!0);
  function Ma(e = !1) {
    return function (r, n, i, a) {
      let o = r[n];
      if (!e && ((i = z(i)), (o = z(o)), !He(r) && _n(o) && !_n(i)))
        return (o.value = i), !0;
      let s = He(r) && In(n) ? Number(n) < r.length : pr(r, n),
        u = Reflect.set(r, n, i, a);
      return (
        r === z(a) &&
          (s ? Na(i, o) && Ne(r, "set", n, i, o) : Ne(r, "add", n, i)),
        u
      );
    };
  }
  function sc(e, t) {
    let r = pr(e, t),
      n = e[t],
      i = Reflect.deleteProperty(e, t);
    return i && r && Ne(e, "delete", t, void 0, n), i;
  }
  function uc(e, t) {
    let r = Reflect.has(e, t);
    return (!Nn(t) || !Da.has(t)) && le(e, "has", t), r;
  }
  function cc(e) {
    return le(e, "iterate", He(e) ? "length" : je), Reflect.ownKeys(e);
  }
  var Fa = {
      get: tc,
      set: ac,
      deleteProperty: sc,
      has: uc,
      ownKeys: cc,
    },
    ka = {
      get: nc,
      set(e, t) {
        return (
          console.warn(
            `Set operation on key "${String(t)}" failed: target is readonly.`,
            e
          ),
          !0
        );
      },
      deleteProperty(e, t) {
        return (
          console.warn(
            `Delete operation on key "${String(
              t
            )}" failed: target is readonly.`,
            e
          ),
          !0
        );
      },
    },
    bl = Ca({}, Fa, {
      get: rc,
      set: oc,
    }),
    yl = Ca({}, ka, {
      get: ic,
    }),
    Dn = (e) => (gr(e) ? kn(e) : e),
    Mn = (e) => (gr(e) ? Ya(e) : e),
    Fn = (e) => e,
    br = (e) => Reflect.getPrototypeOf(e);
  function yr(e, t, r = !1, n = !1) {
    e = e.__v_raw;
    let i = z(e),
      a = z(t);
    t !== a && !r && le(i, "get", t), !r && le(i, "get", a);
    let { has: o } = br(i),
      s = n ? Fn : r ? Mn : Dn;
    if (o.call(i, t)) return s(e.get(t));
    if (o.call(i, a)) return s(e.get(a));
    e !== i && e.get(t);
  }
  function Er(e, t = !1) {
    let r = this.__v_raw,
      n = z(r),
      i = z(e);
    return (
      e !== i && !t && le(n, "has", e),
      !t && le(n, "has", i),
      e === i ? r.has(e) : r.has(e) || r.has(i)
    );
  }
  function Sr(e, t = !1) {
    return (
      (e = e.__v_raw), !t && le(z(e), "iterate", je), Reflect.get(e, "size", e)
    );
  }
  function Va(e) {
    e = z(e);
    let t = z(this);
    return br(t).has.call(t, e) || (t.add(e), Ne(t, "add", e, e)), this;
  }
  function $a(e, t) {
    t = z(t);
    let r = z(this),
      { has: n, get: i } = br(r),
      a = n.call(r, e);
    a ? Ka(r, n, e) : ((e = z(e)), (a = n.call(r, e)));
    let o = i.call(r, e);
    return (
      r.set(e, t),
      a ? Na(t, o) && Ne(r, "set", e, t, o) : Ne(r, "add", e, t),
      this
    );
  }
  function Ba(e) {
    let t = z(this),
      { has: r, get: n } = br(t),
      i = r.call(t, e);
    i ? Ka(t, r, e) : ((e = z(e)), (i = r.call(t, e)));
    let a = n ? n.call(t, e) : void 0,
      o = t.delete(e);
    return i && Ne(t, "delete", e, void 0, a), o;
  }
  function Ha() {
    let e = z(this),
      t = e.size !== 0,
      r = It(e) ? new Map(e) : new Set(e),
      n = e.clear();
    return t && Ne(e, "clear", void 0, void 0, r), n;
  }
  function wr(e, t) {
    return function (n, i) {
      let a = this,
        o = a.__v_raw,
        s = z(o),
        u = t ? Fn : e ? Mn : Dn;
      return (
        !e && le(s, "iterate", je),
        o.forEach((c, l) => n.call(i, u(c), u(l), a))
      );
    };
  }
  function ar(e, t, r) {
    return function (...n) {
      let i = this.__v_raw,
        a = z(i),
        o = It(a),
        s = e === "entries" || (e === Symbol.iterator && o),
        u = e === "keys" && o,
        c = i[e](...n),
        l = r ? Fn : t ? Mn : Dn;
      return (
        !t && le(a, "iterate", u ? gn : je),
        {
          next() {
            let { value: f, done: d } = c.next();
            return d
              ? {
                  value: f,
                  done: d,
                }
              : {
                  value: s ? [l(f[0]), l(f[1])] : l(f),
                  done: d,
                };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function Oe(e) {
    return function (...t) {
      {
        let r = t[0] ? `on key "${t[0]}" ` : "";
        console.warn(
          `${Ra(e)} operation ${r}failed: target is readonly.`,
          z(this)
        );
      }
      return e === "delete" ? !1 : this;
    };
  }
  var ja = {
      get(e) {
        return yr(this, e);
      },
      get size() {
        return Sr(this);
      },
      has: Er,
      add: Va,
      set: $a,
      delete: Ba,
      clear: Ha,
      forEach: wr(!1, !1),
    },
    Wa = {
      get(e) {
        return yr(this, e, !1, !0);
      },
      get size() {
        return Sr(this);
      },
      has: Er,
      add: Va,
      set: $a,
      delete: Ba,
      clear: Ha,
      forEach: wr(!1, !0),
    },
    za = {
      get(e) {
        return yr(this, e, !0);
      },
      get size() {
        return Sr(this, !0);
      },
      has(e) {
        return Er.call(this, e, !0);
      },
      add: Oe("add"),
      set: Oe("set"),
      delete: Oe("delete"),
      clear: Oe("clear"),
      forEach: wr(!0, !1),
    },
    Ga = {
      get(e) {
        return yr(this, e, !0, !0);
      },
      get size() {
        return Sr(this, !0);
      },
      has(e) {
        return Er.call(this, e, !0);
      },
      add: Oe("add"),
      set: Oe("set"),
      delete: Oe("delete"),
      clear: Oe("clear"),
      forEach: wr(!0, !0),
    },
    lc = ["keys", "values", "entries", Symbol.iterator];
  lc.forEach((e) => {
    (ja[e] = ar(e, !1, !1)),
      (za[e] = ar(e, !0, !1)),
      (Wa[e] = ar(e, !1, !0)),
      (Ga[e] = ar(e, !0, !0));
  });
  function Ar(e, t) {
    let r = t ? (e ? Ga : Wa) : e ? za : ja;
    return (n, i, a) =>
      i === "__v_isReactive"
        ? !e
        : i === "__v_isReadonly"
        ? e
        : i === "__v_raw"
        ? n
        : Reflect.get(pr(r, i) && i in n ? r : n, i, a);
  }
  var fc = {
      get: Ar(!1, !1),
    },
    El = {
      get: Ar(!1, !0),
    },
    dc = {
      get: Ar(!0, !1),
    },
    Sl = {
      get: Ar(!0, !0),
    };
  function Ka(e, t, r) {
    let n = z(r);
    if (n !== r && t.call(e, n)) {
      let i = La(e);
      console.warn(
        `Reactive ${i} contains both the raw and reactive versions of the same object ${
          i === "Map" ? " as keys" : ""
        }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
      );
    }
  }
  var Ua = new WeakMap(),
    vc = new WeakMap(),
    qa = new WeakMap(),
    hc = new WeakMap();
  function pc(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function gc(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : pc(La(e));
  }
  function kn(e) {
    return e && e.__v_isReadonly ? e : Xa(e, !1, Fa, fc, Ua);
  }
  function Ya(e) {
    return Xa(e, !0, ka, dc, qa);
  }
  function Xa(e, t, r, n, i) {
    if (!gr(e))
      return console.warn(`value cannot be made reactive: ${String(e)}`), e;
    if (e.__v_raw && !(t && e.__v_isReactive)) return e;
    let a = i.get(e);
    if (a) return a;
    let o = gc(e);
    if (o === 0) return e;
    let s = new Proxy(e, o === 2 ? n : r);
    return i.set(e, s), s;
  }
  function z(e) {
    return (e && z(e.__v_raw)) || e;
  }
  function _n(e) {
    return Boolean(e && e.__v_isRef === !0);
  }
  fe("nextTick", () => Ln);
  fe("dispatch", (e) => Nt.bind(Nt, e));
  fe("watch", (e, { evaluateLater: t, effect: r }) => (n, i) => {
    let a = t(n),
      o = !0,
      s,
      u = r(() =>
        a((c) => {
          JSON.stringify(c),
            o
              ? (s = c)
              : queueMicrotask(() => {
                  i(c, s), (s = c);
                }),
            (o = !1);
        })
      );
    e._x_effects.delete(u);
  });
  fe("store", Du);
  fe("data", (e) => Yi(e));
  fe("root", (e) => dr(e));
  fe(
    "refs",
    (e) => (e._x_refs_proxy || (e._x_refs_proxy = Ft(_c(e))), e._x_refs_proxy)
  );
  function _c(e) {
    let t = [],
      r = e;
    for (; r; ) r._x_refs && t.push(r._x_refs), (r = r.parentNode);
    return t;
  }
  var en = {};
  function Ja(e) {
    return en[e] || (en[e] = 0), ++en[e];
  }
  function mc(e, t) {
    return vr(e, (r) => {
      if (r._x_ids && r._x_ids[t]) return !0;
    });
  }
  function bc(e, t) {
    e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Ja(t));
  }
  fe("id", (e) => (t, r = null) => {
    let n = mc(e, t),
      i = n ? n._x_ids[t] : Ja(t);
    return r ? `${t}-${i}-${r}` : `${t}-${i}`;
  });
  fe("el", (e) => e);
  Za("Focus", "focus", "focus");
  Za("Persist", "persist", "persist");
  function Za(e, t, r) {
    fe(t, (n) =>
      tt(
        `You can't use [$ ${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,
        n
      )
    );
  }
  function yc({ get: e, set: t }, { get: r, set: n }) {
    let i = !0,
      a,
      o,
      s,
      u,
      c = it(() => {
        let l, f;
        i
          ? ((l = e()), n(l), (f = r()), (i = !1))
          : ((l = e()),
            (f = r()),
            (s = JSON.stringify(l)),
            (u = JSON.stringify(f)),
            s !== a ? ((f = r()), n(l), (f = l)) : (t(f), (l = f))),
          (a = JSON.stringify(l)),
          (o = JSON.stringify(f));
      });
    return () => {
      Dt(c);
    };
  }
  q(
    "modelable",
    (e, { expression: t }, { effect: r, evaluateLater: n, cleanup: i }) => {
      let a = n(t),
        o = () => {
          let l;
          return a((f) => (l = f)), l;
        },
        s = n(`${t} = __placeholder`),
        u = (l) =>
          s(() => {}, {
            scope: {
              __placeholder: l,
            },
          }),
        c = o();
      u(c),
        queueMicrotask(() => {
          if (!e._x_model) return;
          e._x_removeModelListeners.default();
          let l = e._x_model.get,
            f = e._x_model.set,
            d = yc(
              {
                get() {
                  return l();
                },
                set(m) {
                  f(m);
                },
              },
              {
                get() {
                  return o();
                },
                set(m) {
                  u(m);
                },
              }
            );
          i(d);
        });
    }
  );
  var Ec = document.createElement("div");
  q("teleport", (e, { modifiers: t, expression: r }, { cleanup: n }) => {
    e.tagName.toLowerCase() !== "template" &&
      tt("x-teleport can only be used on a <template> tag", e);
    let i = kt(
      () => document.querySelector(r),
      () => Ec
    )();
    i || tt(`Cannot find x-teleport element for selector: "${r}"`);
    let a = e.content.cloneNode(!0).firstElementChild;
    (e._x_teleport = a),
      (a._x_teleportBack = e),
      e._x_forwardEvents &&
        e._x_forwardEvents.forEach((o) => {
          a.addEventListener(o, (s) => {
            s.stopPropagation(), e.dispatchEvent(new s.constructor(s.type, s));
          });
        }),
      Mt(a, {}, e),
      X(() => {
        t.includes("prepend")
          ? i.parentNode.insertBefore(a, i)
          : t.includes("append")
          ? i.parentNode.insertBefore(a, i.nextSibling)
          : i.appendChild(a),
          Re(a),
          (a._x_ignore = !0);
      }),
      n(() => a.remove());
  });
  var Qa = () => {};
  Qa.inline = (e, { modifiers: t }, { cleanup: r }) => {
    t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
      r(() => {
        t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
      });
  };
  q("ignore", Qa);
  q("effect", (e, { expression: t }, { effect: r }) => r(ee(e, t)));
  function mn(e, t, r, n) {
    let i = e,
      a = (u) => n(u),
      o = {},
      s = (u, c) => (l) => c(u, l);
    if (
      (r.includes("dot") && (t = Sc(t)),
      r.includes("camel") && (t = wc(t)),
      r.includes("passive") && (o.passive = !0),
      r.includes("capture") && (o.capture = !0),
      r.includes("window") && (i = window),
      r.includes("document") && (i = document),
      r.includes("prevent") &&
        (a = s(a, (u, c) => {
          c.preventDefault(), u(c);
        })),
      r.includes("stop") &&
        (a = s(a, (u, c) => {
          c.stopPropagation(), u(c);
        })),
      r.includes("self") &&
        (a = s(a, (u, c) => {
          c.target === e && u(c);
        })),
      (r.includes("away") || r.includes("outside")) &&
        ((i = document),
        (a = s(a, (u, c) => {
          e.contains(c.target) ||
            (c.target.isConnected !== !1 &&
              ((e.offsetWidth < 1 && e.offsetHeight < 1) ||
                (e._x_isShown !== !1 && u(c))));
        }))),
      r.includes("once") &&
        (a = s(a, (u, c) => {
          u(c), i.removeEventListener(t, a, o);
        })),
      (a = s(a, (u, c) => {
        (xc(t) && Tc(c, r)) || u(c);
      })),
      r.includes("debounce"))
    ) {
      let u = r[r.indexOf("debounce") + 1] || "invalid-wait",
        c = fr(u.split("ms")[0]) ? Number(u.split("ms")[0]) : 250;
      a = Ea(a, c);
    }
    if (r.includes("throttle")) {
      let u = r[r.indexOf("throttle") + 1] || "invalid-wait",
        c = fr(u.split("ms")[0]) ? Number(u.split("ms")[0]) : 250;
      a = Sa(a, c);
    }
    return (
      i.addEventListener(t, a, o),
      () => {
        i.removeEventListener(t, a, o);
      }
    );
  }
  function Sc(e) {
    return e.replace(/-/g, ".");
  }
  function wc(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
  }
  function fr(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function Ac(e) {
    return [" ", "_"].includes(e)
      ? e
      : e
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/[_\s]/, "-")
          .toLowerCase();
  }
  function xc(e) {
    return ["keydown", "keyup"].includes(e);
  }
  function Tc(e, t) {
    let r = t.filter(
      (a) => !["window", "document", "prevent", "stop", "once"].includes(a)
    );
    if (r.includes("debounce")) {
      let a = r.indexOf("debounce");
      r.splice(a, fr((r[a + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (r.includes("throttle")) {
      let a = r.indexOf("throttle");
      r.splice(a, fr((r[a + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (r.length === 0 || (r.length === 1 && Vi(e.key).includes(r[0])))
      return !1;
    let i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((a) =>
      r.includes(a)
    );
    return (
      (r = r.filter((a) => !i.includes(a))),
      !(
        i.length > 0 &&
        i.filter(
          (o) => ((o === "cmd" || o === "super") && (o = "meta"), e[`${o}Key`])
        ).length === i.length &&
        Vi(e.key).includes(r[0])
      )
    );
  }
  function Vi(e) {
    if (!e) return [];
    e = Ac(e);
    let t = {
      ctrl: "control",
      slash: "/",
      space: " ",
      spacebar: " ",
      cmd: "meta",
      esc: "escape",
      up: "arrow-up",
      down: "arrow-down",
      left: "arrow-left",
      right: "arrow-right",
      period: ".",
      equal: "=",
      minus: "-",
      underscore: "_",
    };
    return (
      (t[e] = e),
      Object.keys(t)
        .map((r) => {
          if (t[r] === e) return r;
        })
        .filter((r) => r)
    );
  }
  q(
    "model",
    (e, { modifiers: t, expression: r }, { effect: n, cleanup: i }) => {
      let a = e;
      t.includes("parent") && (a = e.parentNode);
      let o = ee(a, r),
        s;
      typeof r == "string"
        ? (s = ee(a, `${r} = __placeholder`))
        : typeof r == "function" && typeof r() == "string"
        ? (s = ee(a, `${r()} = __placeholder`))
        : (s = () => {});
      let u = () => {
          let d;
          return o((m) => (d = m)), $i(d) ? d.get() : d;
        },
        c = (d) => {
          let m;
          o((h) => (m = h)),
            $i(m)
              ? m.set(d)
              : s(() => {}, {
                  scope: {
                    __placeholder: d,
                  },
                });
        };
      typeof r == "string" &&
        e.type === "radio" &&
        X(() => {
          e.hasAttribute("name") || e.setAttribute("name", r);
        });
      var l =
        e.tagName.toLowerCase() === "select" ||
        ["checkbox", "radio"].includes(e.type) ||
        t.includes("lazy")
          ? "change"
          : "input";
      let f = mn(e, l, t, (d) => {
        c(Cc(e, t, d, u()));
      });
      if (
        (e._x_removeModelListeners || (e._x_removeModelListeners = {}),
        (e._x_removeModelListeners.default = f),
        i(() => e._x_removeModelListeners.default()),
        e.form)
      ) {
        let d = mn(e.form, "reset", [], (m) => {
          Ln(() => e._x_model && e._x_model.set(e.value));
        });
        i(() => d());
      }
      (e._x_model = {
        get() {
          return u();
        },
        set(d) {
          c(d);
        },
      }),
        (e._x_forceModelUpdate = (d) => {
          (d = d === void 0 ? u() : d),
            d === void 0 && typeof r == "string" && r.match(/\./) && (d = ""),
            (window.fromModel = !0),
            X(() => ba(e, "value", d)),
            delete window.fromModel;
        }),
        n(() => {
          let d = u();
          (t.includes("unintrusive") && document.activeElement.isSameNode(e)) ||
            e._x_forceModelUpdate(d);
        });
    }
  );
  function Cc(e, t, r, n) {
    return X(() => {
      if (r instanceof CustomEvent && r.detail !== void 0)
        return typeof r.detail < "u" ? r.detail : r.target.value;
      if (e.type === "checkbox")
        if (Array.isArray(n)) {
          let i = t.includes("number") ? tn(r.target.value) : r.target.value;
          return r.target.checked ? n.concat([i]) : n.filter((a) => !Oc(a, i));
        } else return r.target.checked;
      else {
        if (e.tagName.toLowerCase() === "select" && e.multiple)
          return t.includes("number")
            ? Array.from(r.target.selectedOptions).map((i) => {
                let a = i.value || i.text;
                return tn(a);
              })
            : Array.from(r.target.selectedOptions).map(
                (i) => i.value || i.text
              );
        {
          let i = r.target.value;
          return t.includes("number")
            ? tn(i)
            : t.includes("trim")
            ? i.trim()
            : i;
        }
      }
    });
  }
  function tn(e) {
    let t = e ? parseFloat(e) : null;
    return Lc(t) ? t : e;
  }
  function Oc(e, t) {
    return e == t;
  }
  function Lc(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function $i(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    );
  }
  q("cloak", (e) =>
    queueMicrotask(() => X(() => e.removeAttribute(at("cloak"))))
  );
  ha(() => `[${at("init")}]`);
  q(
    "init",
    kt((e, { expression: t }, { evaluate: r }) =>
      typeof t == "string" ? !!t.trim() && r(t, {}, !1) : r(t, {}, !1)
    )
  );
  q("text", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
    let i = n(t);
    r(() => {
      i((a) => {
        X(() => {
          e.textContent = a;
        });
      });
    });
  });
  q("html", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
    let i = n(t);
    r(() => {
      i((a) => {
        X(() => {
          (e.innerHTML = a),
            (e._x_ignoreSelf = !0),
            Re(e),
            delete e._x_ignoreSelf;
        });
      });
    });
  });
  Tn(ia(":", aa(at("bind:"))));
  q(
    "bind",
    (
      e,
      { value: t, modifiers: r, expression: n, original: i },
      { effect: a }
    ) => {
      if (!t) {
        let s = {};
        Fu(s),
          ee(e, n)(
            (c) => {
              Aa(e, c, i);
            },
            {
              scope: s,
            }
          );
        return;
      }
      if (t === "key") return Rc(e, n);
      let o = ee(e, n);
      a(() =>
        o((s) => {
          s === void 0 && typeof n == "string" && n.match(/\./) && (s = ""),
            X(() => ba(e, t, s, r));
        })
      );
    }
  );
  function Rc(e, t) {
    e._x_keyExpression = t;
  }
  va(() => `[${at("data")}]`);
  q(
    "data",
    kt((e, { expression: t }, { cleanup: r }) => {
      t = t === "" ? "{}" : t;
      let n = {};
      sn(n, e);
      let i = {};
      Vu(i, n);
      let a = Qe(e, t, {
        scope: i,
      });
      a === void 0 && (a = {}), sn(a, e);
      let o = nt(a);
      Xi(o);
      let s = Mt(e, o);
      o.init && Qe(e, o.init),
        r(() => {
          o.destroy && Qe(e, o.destroy), s();
        });
    })
  );
  q("show", (e, { modifiers: t, expression: r }, { effect: n }) => {
    let i = ee(e, r);
    e._x_doHide ||
      (e._x_doHide = () => {
        X(() => {
          e.style.setProperty(
            "display",
            "none",
            t.includes("important") ? "important" : void 0
          );
        });
      }),
      e._x_doShow ||
        (e._x_doShow = () => {
          X(() => {
            e.style.length === 1 && e.style.display === "none"
              ? e.removeAttribute("style")
              : e.style.removeProperty("display");
          });
        });
    let a = () => {
        e._x_doHide(), (e._x_isShown = !1);
      },
      o = () => {
        e._x_doShow(), (e._x_isShown = !0);
      },
      s = () => setTimeout(o),
      u = vn(
        (f) => (f ? o() : a()),
        (f) => {
          typeof e._x_toggleAndCascadeWithTransitions == "function"
            ? e._x_toggleAndCascadeWithTransitions(e, f, o, a)
            : f
            ? s()
            : a();
        }
      ),
      c,
      l = !0;
    n(() =>
      i((f) => {
        (!l && f === c) ||
          (t.includes("immediate") && (f ? s() : a()), u(f), (c = f), (l = !1));
      })
    );
  });
  q("for", (e, { expression: t }, { effect: r, cleanup: n }) => {
    let i = Ic(t),
      a = ee(e, i.items),
      o = ee(e, e._x_keyExpression || "index");
    (e._x_prevKeys = []),
      (e._x_lookup = {}),
      r(() => Nc(e, i, a, o)),
      n(() => {
        Object.values(e._x_lookup).forEach((s) => s.remove()),
          delete e._x_prevKeys,
          delete e._x_lookup;
      });
  });
  function Nc(e, t, r, n) {
    let i = (o) => typeof o == "object" && !Array.isArray(o),
      a = e;
    r((o) => {
      Pc(o) && o >= 0 && (o = Array.from(Array(o).keys(), (v) => v + 1)),
        o === void 0 && (o = []);
      let s = e._x_lookup,
        u = e._x_prevKeys,
        c = [],
        l = [];
      if (i(o))
        o = Object.entries(o).map(([v, b]) => {
          let y = Bi(t, b, v, o);
          n((E) => l.push(E), {
            scope: {
              index: v,
              ...y,
            },
          }),
            c.push(y);
        });
      else
        for (let v = 0; v < o.length; v++) {
          let b = Bi(t, o[v], v, o);
          n((y) => l.push(y), {
            scope: {
              index: v,
              ...b,
            },
          }),
            c.push(b);
        }
      let f = [],
        d = [],
        m = [],
        h = [];
      for (let v = 0; v < u.length; v++) {
        let b = u[v];
        l.indexOf(b) === -1 && m.push(b);
      }
      u = u.filter((v) => !m.includes(v));
      let _ = "template";
      for (let v = 0; v < l.length; v++) {
        let b = l[v],
          y = u.indexOf(b);
        if (y === -1) u.splice(v, 0, b), f.push([_, v]);
        else if (y !== v) {
          let E = u.splice(v, 1)[0],
            R = u.splice(y - 1, 1)[0];
          u.splice(v, 0, R), u.splice(y, 0, E), d.push([E, R]);
        } else h.push(b);
        _ = b;
      }
      for (let v = 0; v < m.length; v++) {
        let b = m[v];
        s[b]._x_effects && s[b]._x_effects.forEach(Hi),
          s[b].remove(),
          (s[b] = null),
          delete s[b];
      }
      for (let v = 0; v < d.length; v++) {
        let [b, y] = d[v],
          E = s[b],
          R = s[y],
          S = document.createElement("div");
        X(() => {
          R.after(S),
            E.after(R),
            R._x_currentIfEl && R.after(R._x_currentIfEl),
            S.before(E),
            E._x_currentIfEl && E.after(E._x_currentIfEl),
            S.remove();
        }),
          Di(R, c[l.indexOf(y)]);
      }
      for (let v = 0; v < f.length; v++) {
        let [b, y] = f[v],
          E = b === "template" ? a : s[b];
        E._x_currentIfEl && (E = E._x_currentIfEl);
        let R = c[y],
          S = l[y],
          p = document.importNode(a.content, !0).firstElementChild;
        Mt(p, nt(R), a),
          X(() => {
            E.after(p), Re(p);
          }),
          typeof S == "object" &&
            tt(
              "x-for key cannot be an object, it must be a string or an integer",
              a
            ),
          (s[S] = p);
      }
      for (let v = 0; v < h.length; v++) Di(s[h[v]], c[l.indexOf(h[v])]);
      a._x_prevKeys = l;
    });
  }
  function Ic(e) {
    let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
      r = /^\s*\(|\)\s*$/g,
      n = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
      i = e.match(n);
    if (!i) return;
    let a = {};
    a.items = i[2].trim();
    let o = i[1].replace(r, "").trim(),
      s = o.match(t);
    return (
      s
        ? ((a.item = o.replace(t, "").trim()),
          (a.index = s[1].trim()),
          s[2] && (a.collection = s[2].trim()))
        : (a.item = o),
      a
    );
  }
  function Bi(e, t, r, n) {
    let i = {};
    return (
      /^\[.*\]$/.test(e.item) && Array.isArray(t)
        ? e.item
            .replace("[", "")
            .replace("]", "")
            .split(",")
            .map((o) => o.trim())
            .forEach((o, s) => {
              i[o] = t[s];
            })
        : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object"
        ? e.item
            .replace("{", "")
            .replace("}", "")
            .split(",")
            .map((o) => o.trim())
            .forEach((o) => {
              i[o] = t[o];
            })
        : (i[e.item] = t),
      e.index && (i[e.index] = r),
      e.collection && (i[e.collection] = n),
      i
    );
  }
  function Pc(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function eo() {}
  eo.inline = (e, { expression: t }, { cleanup: r }) => {
    let n = dr(e);
    n._x_refs || (n._x_refs = {}),
      (n._x_refs[t] = e),
      r(() => delete n._x_refs[t]);
  };
  q("ref", eo);
  q("if", (e, { expression: t }, { effect: r, cleanup: n }) => {
    let i = ee(e, t),
      a = () => {
        if (e._x_currentIfEl) return e._x_currentIfEl;
        let s = e.content.cloneNode(!0).firstElementChild;
        return (
          Mt(s, {}, e),
          X(() => {
            e.after(s), Re(s);
          }),
          (e._x_currentIfEl = s),
          (e._x_undoIf = () => {
            Le(s, (u) => {
              u._x_effects && u._x_effects.forEach(Hi);
            }),
              s.remove(),
              delete e._x_currentIfEl;
          }),
          s
        );
      },
      o = () => {
        e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
      };
    r(() =>
      i((s) => {
        s ? a() : o();
      })
    ),
      n(() => e._x_undoIf && e._x_undoIf());
  });
  q("id", (e, { expression: t }, { evaluate: r }) => {
    r(t).forEach((i) => bc(e, i));
  });
  Tn(ia("@", aa(at("on:"))));
  q(
    "on",
    kt((e, { value: t, modifiers: r, expression: n }, { cleanup: i }) => {
      let a = n ? ee(e, n) : () => {};
      e.tagName.toLowerCase() === "template" &&
        (e._x_forwardEvents || (e._x_forwardEvents = []),
        e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
      let o = mn(e, t, r, (s) => {
        a(() => {}, {
          scope: {
            $event: s,
          },
          params: [s],
        });
      });
      i(() => o());
    })
  );
  xr("Collapse", "collapse", "collapse");
  xr("Intersect", "intersect", "intersect");
  xr("Focus", "trap", "focus");
  xr("Mask", "mask", "mask");
  function xr(e, t, r) {
    q(t, (n) =>
      tt(
        `You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,
        n
      )
    );
  }
  Vt.setEvaluator(ea);
  Vt.setReactivityEngine({
    reactive: kn,
    effect: qu,
    release: Yu,
    raw: z,
  });
  var Dc = Vt,
    ot = Dc;
  function Mc(e) {
    e.directive("collapse", t),
      (t.inline = (r, { modifiers: n }) => {
        n.includes("min") &&
          ((r._x_doShow = () => {}), (r._x_doHide = () => {}));
      });
    function t(r, { modifiers: n }) {
      let i = to(n, "duration", 250) / 1e3,
        a = to(n, "min", 0),
        o = !n.includes("min");
      r._x_isShown || (r.style.height = `${a}px`),
        !r._x_isShown && o && (r.hidden = !0),
        r._x_isShown || (r.style.overflow = "hidden");
      let s = (c, l) => {
          let f = e.setStyles(c, l);
          return l.height ? () => {} : f;
        },
        u = {
          transitionProperty: "height",
          transitionDuration: `${i}s`,
          transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
        };
      r._x_transition = {
        in(c = () => {}, l = () => {}) {
          o && (r.hidden = !1), o && (r.style.display = null);
          let f = r.getBoundingClientRect().height;
          r.style.height = "auto";
          let d = r.getBoundingClientRect().height;
          f === d && (f = a),
            e.transition(
              r,
              e.setStyles,
              {
                during: u,
                start: {
                  height: f + "px",
                },
                end: {
                  height: d + "px",
                },
              },
              () => (r._x_isShown = !0),
              () => {
                r.getBoundingClientRect().height == d &&
                  (r.style.overflow = null);
              }
            );
        },
        out(c = () => {}, l = () => {}) {
          let f = r.getBoundingClientRect().height;
          e.transition(
            r,
            s,
            {
              during: u,
              start: {
                height: f + "px",
              },
              end: {
                height: a + "px",
              },
            },
            () => (r.style.overflow = "hidden"),
            () => {
              (r._x_isShown = !1),
                r.style.height == `${a}px` &&
                  o &&
                  ((r.style.display = "none"), (r.hidden = !0));
            }
          );
        },
      };
    }
  }
  function to(e, t, r) {
    if (e.indexOf(t) === -1) return r;
    let n = e[e.indexOf(t) + 1];
    if (!n) return r;
    if (t === "duration") {
      let i = n.match(/([0-9]+)ms/);
      if (i) return i[1];
    }
    if (t === "min") {
      let i = n.match(/([0-9]+)px/);
      if (i) return i[1];
    }
    return n;
  }
  var ro = Mc;
  var uo = [
      "input",
      "select",
      "textarea",
      "a[href]",
      "button",
      "[tabindex]",
      "audio[controls]",
      "video[controls]",
      '[contenteditable]:not([contenteditable="false"])',
      "details>summary:first-of-type",
      "details",
    ],
    no = uo.join(","),
    Tr =
      typeof Element > "u"
        ? function () {}
        : Element.prototype.matches ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector,
    co = function (t, r, n) {
      var i = Array.prototype.slice.apply(t.querySelectorAll(no));
      return r && Tr.call(t, no) && i.unshift(t), (i = i.filter(n)), i;
    },
    Fc = function (t) {
      return t.contentEditable === "true";
    },
    lo = function (t) {
      var r = parseInt(t.getAttribute("tabindex"), 10);
      return isNaN(r)
        ? Fc(t) ||
          ((t.nodeName === "AUDIO" ||
            t.nodeName === "VIDEO" ||
            t.nodeName === "DETAILS") &&
            t.getAttribute("tabindex") === null)
          ? 0
          : t.tabIndex
        : r;
    },
    kc = function (t, r) {
      return t.tabIndex === r.tabIndex
        ? t.documentOrder - r.documentOrder
        : t.tabIndex - r.tabIndex;
    },
    $n = function (t) {
      return t.tagName === "INPUT";
    },
    Vc = function (t) {
      return $n(t) && t.type === "hidden";
    },
    $c = function (t) {
      var r =
        t.tagName === "DETAILS" &&
        Array.prototype.slice.apply(t.children).some(function (n) {
          return n.tagName === "SUMMARY";
        });
      return r;
    },
    Bc = function (t, r) {
      for (var n = 0; n < t.length; n++)
        if (t[n].checked && t[n].form === r) return t[n];
    },
    Hc = function (t) {
      if (!t.name) return !0;
      var r = t.form || t.ownerDocument,
        n = function (s) {
          return r.querySelectorAll('input[type="radio"][name="' + s + '"]');
        },
        i;
      if (
        typeof window < "u" &&
        typeof window.CSS < "u" &&
        typeof window.CSS.escape == "function"
      )
        i = n(window.CSS.escape(t.name));
      else
        try {
          i = n(t.name);
        } catch (o) {
          return (
            console.error(
              "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
              o.message
            ),
            !1
          );
        }
      var a = Bc(i, t.form);
      return !a || a === t;
    },
    jc = function (t) {
      return $n(t) && t.type === "radio";
    },
    Wc = function (t) {
      return jc(t) && !Hc(t);
    },
    zc = function (t, r) {
      if (getComputedStyle(t).visibility === "hidden") return !0;
      var n = Tr.call(t, "details>summary:first-of-type"),
        i = n ? t.parentElement : t;
      if (Tr.call(i, "details:not([open]) *")) return !0;
      if (!r || r === "full")
        for (; t; ) {
          if (getComputedStyle(t).display === "none") return !0;
          t = t.parentElement;
        }
      else if (r === "non-zero-area") {
        var a = t.getBoundingClientRect(),
          o = a.width,
          s = a.height;
        return o === 0 && s === 0;
      }
      return !1;
    },
    Gc = function (t) {
      if (
        $n(t) ||
        t.tagName === "SELECT" ||
        t.tagName === "TEXTAREA" ||
        t.tagName === "BUTTON"
      )
        for (var r = t.parentElement; r; ) {
          if (r.tagName === "FIELDSET" && r.disabled) {
            for (var n = 0; n < r.children.length; n++) {
              var i = r.children.item(n);
              if (i.tagName === "LEGEND") return !i.contains(t);
            }
            return !0;
          }
          r = r.parentElement;
        }
      return !1;
    },
    Bn = function (t, r) {
      return !(r.disabled || Vc(r) || zc(r, t.displayCheck) || $c(r) || Gc(r));
    },
    Kc = function (t, r) {
      return !(!Bn(t, r) || Wc(r) || lo(r) < 0);
    },
    Uc = function (t, r) {
      r = r || {};
      var n = [],
        i = [],
        a = co(t, r.includeContainer, Kc.bind(null, r));
      a.forEach(function (s, u) {
        var c = lo(s);
        c === 0
          ? n.push(s)
          : i.push({
              documentOrder: u,
              tabIndex: c,
              node: s,
            });
      });
      var o = i
        .sort(kc)
        .map(function (s) {
          return s.node;
        })
        .concat(n);
      return o;
    },
    qc = function (t, r) {
      r = r || {};
      var n = co(t, r.includeContainer, Bn.bind(null, r));
      return n;
    },
    Yc = uo.concat("iframe").join(","),
    fo = function (t, r) {
      if (((r = r || {}), !t)) throw new Error("No node provided");
      return Tr.call(t, Yc) === !1 ? !1 : Bn(r, t);
    };
  function io(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function Xc(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? io(Object(r), !0).forEach(function (n) {
            Jc(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : io(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function Jc(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  var ao = (function () {
      var e = [];
      return {
        activateTrap: function (r) {
          if (e.length > 0) {
            var n = e[e.length - 1];
            n !== r && n.pause();
          }
          var i = e.indexOf(r);
          i === -1 || e.splice(i, 1), e.push(r);
        },
        deactivateTrap: function (r) {
          var n = e.indexOf(r);
          n !== -1 && e.splice(n, 1), e.length > 0 && e[e.length - 1].unpause();
        },
      };
    })(),
    Zc = function (t) {
      return (
        t.tagName &&
        t.tagName.toLowerCase() === "input" &&
        typeof t.select == "function"
      );
    },
    Qc = function (t) {
      return t.key === "Escape" || t.key === "Esc" || t.keyCode === 27;
    },
    el = function (t) {
      return t.key === "Tab" || t.keyCode === 9;
    },
    oo = function (t) {
      return setTimeout(t, 0);
    },
    Vn = function (t, r) {
      var n = -1;
      return (
        t.every(function (i, a) {
          return r(i) ? ((n = a), !1) : !0;
        }),
        n
      );
    },
    $t = function (t) {
      for (
        var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
        i < r;
        i++
      )
        n[i - 1] = arguments[i];
      return typeof t == "function" ? t.apply(void 0, n) : t;
    },
    tl = function (t, r) {
      var n = document,
        i = Xc(
          {
            returnFocusOnDeactivate: !0,
            escapeDeactivates: !0,
            delayInitialFocus: !0,
          },
          r
        ),
        a = {
          containers: [],
          tabbableGroups: [],
          nodeFocusedBeforeActivation: null,
          mostRecentlyFocusedNode: null,
          active: !1,
          paused: !1,
          delayInitialFocusTimer: void 0,
        },
        o,
        s = function (p, g, w) {
          return p && p[g] !== void 0 ? p[g] : i[w || g];
        },
        u = function (p) {
          return a.containers.some(function (g) {
            return g.contains(p);
          });
        },
        c = function (p) {
          var g = i[p];
          if (!g) return null;
          var w = g;
          if (typeof g == "string" && ((w = n.querySelector(g)), !w))
            throw new Error("`".concat(p, "` refers to no known node"));
          if (typeof g == "function" && ((w = g()), !w))
            throw new Error("`".concat(p, "` did not return a node"));
          return w;
        },
        l = function () {
          var p;
          if (s({}, "initialFocus") === !1) return !1;
          if (c("initialFocus") !== null) p = c("initialFocus");
          else if (u(n.activeElement)) p = n.activeElement;
          else {
            var g = a.tabbableGroups[0],
              w = g && g.firstTabbableNode;
            p = w || c("fallbackFocus");
          }
          if (!p)
            throw new Error(
              "Your focus-trap needs to have at least one focusable element"
            );
          return p;
        },
        f = function () {
          if (
            ((a.tabbableGroups = a.containers
              .map(function (p) {
                var g = Uc(p);
                if (g.length > 0)
                  return {
                    container: p,
                    firstTabbableNode: g[0],
                    lastTabbableNode: g[g.length - 1],
                  };
              })
              .filter(function (p) {
                return !!p;
              })),
            a.tabbableGroups.length <= 0 && !c("fallbackFocus"))
          )
            throw new Error(
              "Your focus-trap must have at least one container with at least one tabbable node in it at all times"
            );
        },
        d = function S(p) {
          if (p !== !1 && p !== n.activeElement) {
            if (!p || !p.focus) {
              S(l());
              return;
            }
            p.focus({
              preventScroll: !!i.preventScroll,
            }),
              (a.mostRecentlyFocusedNode = p),
              Zc(p) && p.select();
          }
        },
        m = function (p) {
          var g = c("setReturnFocus");
          return g || p;
        },
        h = function (p) {
          if (!u(p.target)) {
            if ($t(i.clickOutsideDeactivates, p)) {
              o.deactivate({
                returnFocus: i.returnFocusOnDeactivate && !fo(p.target),
              });
              return;
            }
            $t(i.allowOutsideClick, p) || p.preventDefault();
          }
        },
        _ = function (p) {
          var g = u(p.target);
          g || p.target instanceof Document
            ? g && (a.mostRecentlyFocusedNode = p.target)
            : (p.stopImmediatePropagation(),
              d(a.mostRecentlyFocusedNode || l()));
        },
        v = function (p) {
          f();
          var g = null;
          if (a.tabbableGroups.length > 0) {
            var w = Vn(a.tabbableGroups, function (M) {
              var B = M.container;
              return B.contains(p.target);
            });
            if (w < 0)
              p.shiftKey
                ? (g =
                    a.tabbableGroups[a.tabbableGroups.length - 1]
                      .lastTabbableNode)
                : (g = a.tabbableGroups[0].firstTabbableNode);
            else if (p.shiftKey) {
              var I = Vn(a.tabbableGroups, function (M) {
                var B = M.firstTabbableNode;
                return p.target === B;
              });
              if (
                (I < 0 && a.tabbableGroups[w].container === p.target && (I = w),
                I >= 0)
              ) {
                var N = I === 0 ? a.tabbableGroups.length - 1 : I - 1,
                  A = a.tabbableGroups[N];
                g = A.lastTabbableNode;
              }
            } else {
              var C = Vn(a.tabbableGroups, function (M) {
                var B = M.lastTabbableNode;
                return p.target === B;
              });
              if (
                (C < 0 && a.tabbableGroups[w].container === p.target && (C = w),
                C >= 0)
              ) {
                var O = C === a.tabbableGroups.length - 1 ? 0 : C + 1,
                  F = a.tabbableGroups[O];
                g = F.firstTabbableNode;
              }
            }
          } else g = c("fallbackFocus");
          g && (p.preventDefault(), d(g));
        },
        b = function (p) {
          if (Qc(p) && $t(i.escapeDeactivates) !== !1) {
            p.preventDefault(), o.deactivate();
            return;
          }
          if (el(p)) {
            v(p);
            return;
          }
        },
        y = function (p) {
          $t(i.clickOutsideDeactivates, p) ||
            u(p.target) ||
            $t(i.allowOutsideClick, p) ||
            (p.preventDefault(), p.stopImmediatePropagation());
        },
        E = function () {
          if (a.active)
            return (
              ao.activateTrap(o),
              (a.delayInitialFocusTimer = i.delayInitialFocus
                ? oo(function () {
                    d(l());
                  })
                : d(l())),
              n.addEventListener("focusin", _, !0),
              n.addEventListener("mousedown", h, {
                capture: !0,
                passive: !1,
              }),
              n.addEventListener("touchstart", h, {
                capture: !0,
                passive: !1,
              }),
              n.addEventListener("click", y, {
                capture: !0,
                passive: !1,
              }),
              n.addEventListener("keydown", b, {
                capture: !0,
                passive: !1,
              }),
              o
            );
        },
        R = function () {
          if (a.active)
            return (
              n.removeEventListener("focusin", _, !0),
              n.removeEventListener("mousedown", h, !0),
              n.removeEventListener("touchstart", h, !0),
              n.removeEventListener("click", y, !0),
              n.removeEventListener("keydown", b, !0),
              o
            );
        };
      return (
        (o = {
          activate: function (p) {
            if (a.active) return this;
            var g = s(p, "onActivate"),
              w = s(p, "onPostActivate"),
              I = s(p, "checkCanFocusTrap");
            I || f(),
              (a.active = !0),
              (a.paused = !1),
              (a.nodeFocusedBeforeActivation = n.activeElement),
              g && g();
            var N = function () {
              I && f(), E(), w && w();
            };
            return I
              ? (I(a.containers.concat()).then(N, N), this)
              : (N(), this);
          },
          deactivate: function (p) {
            if (!a.active) return this;
            clearTimeout(a.delayInitialFocusTimer),
              (a.delayInitialFocusTimer = void 0),
              R(),
              (a.active = !1),
              (a.paused = !1),
              ao.deactivateTrap(o);
            var g = s(p, "onDeactivate"),
              w = s(p, "onPostDeactivate"),
              I = s(p, "checkCanReturnFocus");
            g && g();
            var N = s(p, "returnFocus", "returnFocusOnDeactivate"),
              A = function () {
                oo(function () {
                  N && d(m(a.nodeFocusedBeforeActivation)), w && w();
                });
              };
            return N && I
              ? (I(m(a.nodeFocusedBeforeActivation)).then(A, A), this)
              : (A(), this);
          },
          pause: function () {
            return a.paused || !a.active ? this : ((a.paused = !0), R(), this);
          },
          unpause: function () {
            return !a.paused || !a.active
              ? this
              : ((a.paused = !1), f(), E(), this);
          },
          updateContainerElements: function (p) {
            var g = [].concat(p).filter(Boolean);
            return (
              (a.containers = g.map(function (w) {
                return typeof w == "string" ? n.querySelector(w) : w;
              })),
              a.active && f(),
              this
            );
          },
        }),
        o.updateContainerElements(t),
        o
      );
    };
  function rl(e) {
    let t, r;
    window.addEventListener("focusin", () => {
      (t = r), (r = document.activeElement);
    }),
      e.magic("focus", (n) => {
        let i = n;
        return {
          __noscroll: !1,
          __wrapAround: !1,
          within(a) {
            return (i = a), this;
          },
          withoutScrolling() {
            return (this.__noscroll = !0), this;
          },
          noscroll() {
            return (this.__noscroll = !0), this;
          },
          withWrapAround() {
            return (this.__wrapAround = !0), this;
          },
          wrap() {
            return this.withWrapAround();
          },
          focusable(a) {
            return fo(a);
          },
          previouslyFocused() {
            return t;
          },
          lastFocused() {
            return t;
          },
          focused() {
            return r;
          },
          focusables() {
            return Array.isArray(i)
              ? i
              : qc(i, {
                  displayCheck: "none",
                });
          },
          all() {
            return this.focusables();
          },
          isFirst(a) {
            let o = this.all();
            return o[0] && o[0].isSameNode(a);
          },
          isLast(a) {
            let o = this.all();
            return o.length && o.slice(-1)[0].isSameNode(a);
          },
          getFirst() {
            return this.all()[0];
          },
          getLast() {
            return this.all().slice(-1)[0];
          },
          getNext() {
            let a = this.all(),
              o = document.activeElement;
            if (a.indexOf(o) !== -1)
              return this.__wrapAround && a.indexOf(o) === a.length - 1
                ? a[0]
                : a[a.indexOf(o) + 1];
          },
          getPrevious() {
            let a = this.all(),
              o = document.activeElement;
            if (a.indexOf(o) !== -1)
              return this.__wrapAround && a.indexOf(o) === 0
                ? a.slice(-1)[0]
                : a[a.indexOf(o) - 1];
          },
          first() {
            this.focus(this.getFirst());
          },
          last() {
            this.focus(this.getLast());
          },
          next() {
            this.focus(this.getNext());
          },
          previous() {
            this.focus(this.getPrevious());
          },
          prev() {
            return this.previous();
          },
          focus(a) {
            a &&
              setTimeout(() => {
                a.hasAttribute("tabindex") || a.setAttribute("tabindex", "0"),
                  a.focus({
                    preventScroll: this._noscroll,
                  });
              });
          },
        };
      }),
      e.directive(
        "trap",
        e.skipDuringClone(
          (
            n,
            { expression: i, modifiers: a },
            { effect: o, evaluateLater: s, cleanup: u }
          ) => {
            let c = s(i),
              l = !1,
              f = {
                escapeDeactivates: !1,
                allowOutsideClick: !0,
                fallbackFocus: () => n,
              },
              d = n.querySelector("[autofocus]");
            d && (f.initialFocus = d);
            let m = tl(n, f),
              h = () => {},
              _ = () => {},
              v = () => {
                h(),
                  (h = () => {}),
                  _(),
                  (_ = () => {}),
                  m.deactivate({
                    returnFocus: !a.includes("noreturn"),
                  });
              };
            o(() =>
              c((b) => {
                l !== b &&
                  (b &&
                    !l &&
                    setTimeout(() => {
                      a.includes("inert") && (h = so(n)),
                        a.includes("noscroll") && (_ = nl()),
                        m.activate();
                    }),
                  !b && l && v(),
                  (l = !!b));
              })
            ),
              u(v);
          },
          (n, { expression: i, modifiers: a }, { evaluate: o }) => {
            a.includes("inert") && o(i) && so(n);
          }
        )
      );
  }
  function so(e) {
    let t = [];
    return (
      vo(e, (r) => {
        let n = r.hasAttribute("aria-hidden");
        r.setAttribute("aria-hidden", "true"),
          t.push(() => n || r.removeAttribute("aria-hidden"));
      }),
      () => {
        for (; t.length; ) t.pop()();
      }
    );
  }
  function vo(e, t) {
    e.isSameNode(document.body) ||
      !e.parentNode ||
      Array.from(e.parentNode.children).forEach((r) => {
        r.isSameNode(e) ? vo(e.parentNode, t) : t(r);
      });
  }
  function nl() {
    let e = document.documentElement.style.overflow,
      t = document.documentElement.style.paddingRight,
      r = window.innerWidth - document.documentElement.clientWidth;
    return (
      (document.documentElement.style.overflow = "hidden"),
      (document.documentElement.style.paddingRight = `${r}px`),
      () => {
        (document.documentElement.style.overflow = e),
          (document.documentElement.style.paddingRight = t);
      }
    );
  }
  var ho = rl;
  function il(e) {
    e.directive(
      "intersect",
      (
        t,
        { value: r, expression: n, modifiers: i },
        { evaluateLater: a, cleanup: o }
      ) => {
        let s = a(n),
          u = {
            rootMargin: sl(i),
            threshold: al(i),
          },
          c = new IntersectionObserver((l) => {
            l.forEach((f) => {
              f.isIntersecting !== (r === "leave") &&
                (s(), i.includes("once") && c.disconnect());
            });
          }, u);
        c.observe(t),
          o(() => {
            c.disconnect();
          });
      }
    );
  }
  function al(e) {
    if (e.includes("full")) return 0.99;
    if (e.includes("half")) return 0.5;
    if (!e.includes("threshold")) return 0;
    let t = e[e.indexOf("threshold") + 1];
    return t === "100" ? 1 : t === "0" ? 0 : Number(`.${t}`);
  }
  function ol(e) {
    let t = e.match(/^(-?[0-9]+)(px|%)?$/);
    return t ? t[1] + (t[2] || "px") : void 0;
  }
  function sl(e) {
    let t = "margin",
      r = "0px 0px 0px 0px",
      n = e.indexOf(t);
    if (n === -1) return r;
    let i = [];
    for (let a = 1; a < 5; a++) i.push(ol(e[n + a] || ""));
    return (
      (i = i.filter((a) => a !== void 0)), i.length ? i.join(" ").trim() : r
    );
  }
  var po = il;
  var ul = `/* Partytown 0.7.5 - MIT builder.io */
!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,"/"==(a=(o.lib||"/~partytown/")+(o.debug?"debug/":""))[0]&&(s=e.querySelectorAll('script[type="text/partytown"]'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):(d=setTimeout(f,1e4),e.addEventListener("pt0",w),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||"partytown-sw.js"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&h()}))}),console.error):f())))}function h(t){c=e.createElement(t?"script":"iframe"),t||(c.setAttribute("style","display:block;width:0;height:0;border:0;visibility:hidden"),c.setAttribute("aria-hidden",!0)),c.src=a+"partytown-"+(t?"atomics.js?v=0.7.5":"sandbox-sw.html?"+Date.now()),e.body.appendChild(c)}function f(n,r){for(w(),i==t&&(o.forward||[]).map((function(e){delete t[e.split(".")[0]]})),n=0;n<s.length;n++)(r=e.createElement("script")).innerHTML=s[n].innerHTML,e.head.appendChild(r);c&&c.parentNode.removeChild(c)}function w(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(".").map((function(e,n,i){p=p[i[n]]=n+1<i.length?"push"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,window.crossOriginIsolated);`,
    cl = (e, t) => {
      let { forward: r = [], ...n } = e || {},
        i = JSON.stringify(
          n,
          (a, o) => (
            typeof o == "function" &&
              ((o = String(o)), o.startsWith(a + "(") && (o = "function " + o)),
            o
          )
        );
      return [
        "!(function(w,p,f,c){",
        Object.keys(n).length > 0
          ? `c=w[p]=Object.assign(w[p]||{},${i});`
          : "c=w[p]=w[p]||{};",
        "c[f]=(c[f]||[])",
        r.length > 0 ? `.concat(${JSON.stringify(r)})` : "",
        "})(window,'partytown','forward');",
        t,
      ].join("");
    };
  var go = (e) => cl(e, ul);
  window.Alpine = ot;
  ot.plugin(ho);
  ot.plugin(po);
  ot.plugin(ro);
  ot.start();
  var ll = go(),
    _o = document.createElement("script");
  _o.innerText = ll;
  document.body.appendChild(_o);
  document.addEventListener("DOMContentLoaded", function () {
    try {
      for (
        var e = document.getElementsByClassName("splide"), t = 0;
        t < e.length;
        t++
      )
        new ir(e[t], {
          autoplay: !0,
          type: "fade",
          rewind: !0,
          interval: 2e3,
          pauseOnHover: !0,
        }).mount();
    } catch (r) {
      return console.log(r);
    }
  });
})();
/*! Bundled license information:

@splidejs/splide/dist/js/splide.esm.js:
  (*!
   * Splide.js
   * Version  : 4.1.4
   * License  : MIT
   * Copyright: 2022 Naotoshi Fujita
   *)

@alpinejs/focus/dist/module.esm.js:
  (*!
  * tabbable 5.2.1
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
  (*!
  * focus-trap 6.6.1
  * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
  *)
*/

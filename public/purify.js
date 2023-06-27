/*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).DOMPurify =
        t());
})(this, function () {
  "use strict";
  const {
    entries: e,
    setPrototypeOf: t,
    isFrozen: n,
    getPrototypeOf: o,
    getOwnPropertyDescriptor: r,
  } = Object;
  let { freeze: i, seal: a, create: l } = Object,
    { apply: c, construct: s } = "undefined" != typeof Reflect && Reflect;
  c ||
    (c = function (e, t, n) {
      return e.apply(t, n);
    }),
    i ||
      (i = function (e) {
        return e;
      }),
    a ||
      (a = function (e) {
        return e;
      }),
    s ||
      (s = function (e, t) {
        return new e(...t);
      });
  const m = b(Array.prototype.forEach),
    u = b(Array.prototype.pop),
    f = b(Array.prototype.push),
    p = b(String.prototype.toLowerCase),
    d = b(String.prototype.toString),
    h = b(String.prototype.match),
    g = b(String.prototype.replace),
    T = b(String.prototype.indexOf),
    y = b(String.prototype.trim),
    E = b(RegExp.prototype.test),
    A =
      ((_ = TypeError),
      function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return s(_, t);
      });
  var _;
  function b(e) {
    return function (t) {
      for (
        var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1;
        r < n;
        r++
      )
        o[r - 1] = arguments[r];
      return c(e, t, o);
    };
  }
  function N(e, o, r) {
    var i;
    (r = null !== (i = r) && void 0 !== i ? i : p), t && t(e, null);
    let a = o.length;
    for (; a--; ) {
      let t = o[a];
      if ("string" == typeof t) {
        const e = r(t);
        e !== t && (n(o) || (o[a] = e), (t = e));
      }
      e[t] = !0;
    }
    return e;
  }
  function S(t) {
    const n = l(null);
    for (const [o, r] of e(t)) n[o] = r;
    return n;
  }
  function R(e, t) {
    for (; null !== e; ) {
      const n = r(e, t);
      if (n) {
        if (n.get) return b(n.get);
        if ("function" == typeof n.value) return b(n.value);
      }
      e = o(e);
    }
    return function (e) {
      return console.warn("fallback value for", e), null;
    };
  }
  const w = i([
      "a",
      "abbr",
      "acronym",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "bdi",
      "bdo",
      "big",
      "blink",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "center",
      "cite",
      "code",
      "col",
      "colgroup",
      "content",
      "data",
      "datalist",
      "dd",
      "decorator",
      "del",
      "details",
      "dfn",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "element",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "font",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meter",
      "nav",
      "nobr",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "section",
      "select",
      "shadow",
      "small",
      "source",
      "spacer",
      "span",
      "strike",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "track",
      "tt",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
    ]),
    D = i([
      "svg",
      "a",
      "altglyph",
      "altglyphdef",
      "altglyphitem",
      "animatecolor",
      "animatemotion",
      "animatetransform",
      "circle",
      "clippath",
      "defs",
      "desc",
      "ellipse",
      "filter",
      "font",
      "g",
      "glyph",
      "glyphref",
      "hkern",
      "image",
      "line",
      "lineargradient",
      "marker",
      "mask",
      "metadata",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialgradient",
      "rect",
      "stop",
      "style",
      "switch",
      "symbol",
      "text",
      "textpath",
      "title",
      "tref",
      "tspan",
      "view",
      "vkern",
    ]),
    L = i([
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
    ]),
    v = i([
      "animate",
      "color-profile",
      "cursor",
      "discard",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-src",
      "font-face-uri",
      "foreignobject",
      "hatch",
      "hatchpath",
      "mesh",
      "meshgradient",
      "meshpatch",
      "meshrow",
      "missing-glyph",
      "script",
      "set",
      "solidcolor",
      "unknown",
      "use",
    ]),
    x = i([
      "math",
      "menclose",
      "merror",
      "mfenced",
      "mfrac",
      "mglyph",
      "mi",
      "mlabeledtr",
      "mmultiscripts",
      "mn",
      "mo",
      "mover",
      "mpadded",
      "mphantom",
      "mroot",
      "mrow",
      "ms",
      "mspace",
      "msqrt",
      "mstyle",
      "msub",
      "msup",
      "msubsup",
      "mtable",
      "mtd",
      "mtext",
      "mtr",
      "munder",
      "munderover",
      "mprescripts",
    ]),
    C = i([
      "maction",
      "maligngroup",
      "malignmark",
      "mlongdiv",
      "mscarries",
      "mscarry",
      "msgroup",
      "mstack",
      "msline",
      "msrow",
      "semantics",
      "annotation",
      "annotation-xml",
      "mprescripts",
      "none",
    ]),
    k = i(["#text"]),
    O = i([
      "accept",
      "action",
      "align",
      "alt",
      "autocapitalize",
      "autocomplete",
      "autopictureinpicture",
      "autoplay",
      "background",
      "bgcolor",
      "border",
      "capture",
      "cellpadding",
      "cellspacing",
      "checked",
      "cite",
      "class",
      "clear",
      "color",
      "cols",
      "colspan",
      "controls",
      "controlslist",
      "coords",
      "crossorigin",
      "datetime",
      "decoding",
      "default",
      "dir",
      "disabled",
      "disablepictureinpicture",
      "disableremoteplayback",
      "download",
      "draggable",
      "enctype",
      "enterkeyhint",
      "face",
      "for",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hreflang",
      "id",
      "inputmode",
      "integrity",
      "ismap",
      "kind",
      "label",
      "lang",
      "list",
      "loading",
      "loop",
      "low",
      "max",
      "maxlength",
      "media",
      "method",
      "min",
      "minlength",
      "multiple",
      "muted",
      "name",
      "nonce",
      "noshade",
      "novalidate",
      "nowrap",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "playsinline",
      "poster",
      "preload",
      "pubdate",
      "radiogroup",
      "readonly",
      "rel",
      "required",
      "rev",
      "reversed",
      "role",
      "rows",
      "rowspan",
      "spellcheck",
      "scope",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "srclang",
      "start",
      "src",
      "srcset",
      "step",
      "style",
      "summary",
      "tabindex",
      "title",
      "translate",
      "type",
      "usemap",
      "valign",
      "value",
      "width",
      "xmlns",
      "slot",
    ]),
    I = i([
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "ascent",
      "attributename",
      "attributetype",
      "azimuth",
      "basefrequency",
      "baseline-shift",
      "begin",
      "bias",
      "by",
      "class",
      "clip",
      "clippathunits",
      "clip-path",
      "clip-rule",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "cx",
      "cy",
      "d",
      "dx",
      "dy",
      "diffuseconstant",
      "direction",
      "display",
      "divisor",
      "dur",
      "edgemode",
      "elevation",
      "end",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterunits",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyphref",
      "gradientunits",
      "gradienttransform",
      "height",
      "href",
      "id",
      "image-rendering",
      "in",
      "in2",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kerning",
      "keypoints",
      "keysplines",
      "keytimes",
      "lang",
      "lengthadjust",
      "letter-spacing",
      "kernelmatrix",
      "kernelunitlength",
      "lighting-color",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerheight",
      "markerunits",
      "markerwidth",
      "maskcontentunits",
      "maskunits",
      "max",
      "mask",
      "media",
      "method",
      "mode",
      "min",
      "name",
      "numoctaves",
      "offset",
      "operator",
      "opacity",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "paint-order",
      "path",
      "pathlength",
      "patterncontentunits",
      "patterntransform",
      "patternunits",
      "points",
      "preservealpha",
      "preserveaspectratio",
      "primitiveunits",
      "r",
      "rx",
      "ry",
      "radius",
      "refx",
      "refy",
      "repeatcount",
      "repeatdur",
      "restart",
      "result",
      "rotate",
      "scale",
      "seed",
      "shape-rendering",
      "specularconstant",
      "specularexponent",
      "spreadmethod",
      "startoffset",
      "stddeviation",
      "stitchtiles",
      "stop-color",
      "stop-opacity",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke",
      "stroke-width",
      "style",
      "surfacescale",
      "systemlanguage",
      "tabindex",
      "targetx",
      "targety",
      "transform",
      "transform-origin",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textlength",
      "type",
      "u1",
      "u2",
      "unicode",
      "values",
      "viewbox",
      "visibility",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "width",
      "word-spacing",
      "wrap",
      "writing-mode",
      "xchannelselector",
      "ychannelselector",
      "x",
      "x1",
      "x2",
      "xmlns",
      "y",
      "y1",
      "y2",
      "z",
      "zoomandpan",
    ]),
    M = i([
      "accent",
      "accentunder",
      "align",
      "bevelled",
      "close",
      "columnsalign",
      "columnlines",
      "columnspan",
      "denomalign",
      "depth",
      "dir",
      "display",
      "displaystyle",
      "encoding",
      "fence",
      "frame",
      "height",
      "href",
      "id",
      "largeop",
      "length",
      "linethickness",
      "lspace",
      "lquote",
      "mathbackground",
      "mathcolor",
      "mathsize",
      "mathvariant",
      "maxsize",
      "minsize",
      "movablelimits",
      "notation",
      "numalign",
      "open",
      "rowalign",
      "rowlines",
      "rowspacing",
      "rowspan",
      "rspace",
      "rquote",
      "scriptlevel",
      "scriptminsize",
      "scriptsizemultiplier",
      "selection",
      "separator",
      "separators",
      "stretchy",
      "subscriptshift",
      "supscriptshift",
      "symmetric",
      "voffset",
      "width",
      "xmlns",
    ]),
    U = i(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    P = a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    F = a(/<%[\w\W]*|[\w\W]*%>/gm),
    H = a(/\${[\w\W]*}/gm),
    z = a(/^data-[\-\w.\u00B7-\uFFFF]/),
    B = a(/^aria-[\-\w]+$/),
    W = a(
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    ),
    G = a(/^(?:\w+script|data):/i),
    Y = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    j = a(/^html$/i);
  var q = Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: P,
    ERB_EXPR: F,
    TMPLIT_EXPR: H,
    DATA_ATTR: z,
    ARIA_ATTR: B,
    IS_ALLOWED_URI: W,
    IS_SCRIPT_OR_DATA: G,
    ATTR_WHITESPACE: Y,
    DOCTYPE_NAME: j,
  });
  const X = () => ("undefined" == typeof window ? null : window),
    K = function (e, t) {
      if ("object" != typeof e || "function" != typeof e.createPolicy)
        return null;
      let n = null;
      const o = "data-tt-policy-suffix";
      t && t.hasAttribute(o) && (n = t.getAttribute(o));
      const r = "dompurify" + (n ? "#" + n : "");
      try {
        return e.createPolicy(r, {
          createHTML: (e) => e,
          createScriptURL: (e) => e,
        });
      } catch (e) {
        return (
          console.warn("TrustedTypes policy " + r + " could not be created."),
          null
        );
      }
    };
  var V = (function t() {
    let n =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X();
    const o = (e) => t(e);
    if (
      ((o.version = "3.0.3"),
      (o.removed = []),
      !n || !n.document || 9 !== n.document.nodeType)
    )
      return (o.isSupported = !1), o;
    const r = n.document,
      a = r.currentScript;
    let { document: l } = n;
    const {
        DocumentFragment: c,
        HTMLTemplateElement: s,
        Node: _,
        Element: b,
        NodeFilter: P,
        NamedNodeMap: F = n.NamedNodeMap || n.MozNamedAttrMap,
        HTMLFormElement: H,
        DOMParser: z,
        trustedTypes: B,
      } = n,
      G = b.prototype,
      Y = R(G, "cloneNode"),
      V = R(G, "nextSibling"),
      $ = R(G, "childNodes"),
      Z = R(G, "parentNode");
    if ("function" == typeof s) {
      const e = l.createElement("template");
      e.content && e.content.ownerDocument && (l = e.content.ownerDocument);
    }
    let J,
      Q = "";
    const {
        implementation: ee,
        createNodeIterator: te,
        createDocumentFragment: ne,
        getElementsByTagName: oe,
      } = l,
      { importNode: re } = r;
    let ie = {};
    o.isSupported =
      "function" == typeof e &&
      "function" == typeof Z &&
      ee &&
      void 0 !== ee.createHTMLDocument;
    const {
      MUSTACHE_EXPR: ae,
      ERB_EXPR: le,
      TMPLIT_EXPR: ce,
      DATA_ATTR: se,
      ARIA_ATTR: me,
      IS_SCRIPT_OR_DATA: ue,
      ATTR_WHITESPACE: fe,
    } = q;
    let { IS_ALLOWED_URI: pe } = q,
      de = null;
    const he = N({}, [...w, ...D, ...L, ...x, ...k]);
    let ge = null;
    const Te = N({}, [...O, ...I, ...M, ...U]);
    let ye = Object.seal(
        Object.create(null, {
          tagNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null,
          },
          attributeNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null,
          },
          allowCustomizedBuiltInElements: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: !1,
          },
        })
      ),
      Ee = null,
      Ae = null,
      _e = !0,
      be = !0,
      Ne = !1,
      Se = !0,
      Re = !1,
      we = !1,
      De = !1,
      Le = !1,
      ve = !1,
      xe = !1,
      Ce = !1,
      ke = !0,
      Oe = !1;
    const Ie = "user-content-";
    let Me = !0,
      Ue = !1,
      Pe = {},
      Fe = null;
    const He = N({}, [
      "annotation-xml",
      "audio",
      "colgroup",
      "desc",
      "foreignobject",
      "head",
      "iframe",
      "math",
      "mi",
      "mn",
      "mo",
      "ms",
      "mtext",
      "noembed",
      "noframes",
      "noscript",
      "plaintext",
      "script",
      "style",
      "svg",
      "template",
      "thead",
      "title",
      "video",
      "xmp",
    ]);
    let ze = null;
    const Be = N({}, ["audio", "video", "img", "source", "image", "track"]);
    let We = null;
    const Ge = N({}, [
        "alt",
        "class",
        "for",
        "id",
        "label",
        "name",
        "pattern",
        "placeholder",
        "role",
        "summary",
        "title",
        "value",
        "style",
        "xmlns",
      ]),
      Ye = "http://www.w3.org/1998/Math/MathML",
      je = "http://www.w3.org/2000/svg",
      qe = "http://www.w3.org/1999/xhtml";
    let Xe = qe,
      Ke = !1,
      Ve = null;
    const $e = N({}, [Ye, je, qe], d);
    let Ze;
    const Je = ["application/xhtml+xml", "text/html"],
      Qe = "text/html";
    let et,
      tt = null;
    const nt = l.createElement("form"),
      ot = function (e) {
        return e instanceof RegExp || e instanceof Function;
      },
      rt = function (e) {
        if (!tt || tt !== e) {
          if (
            ((e && "object" == typeof e) || (e = {}),
            (e = S(e)),
            (Ze = Ze =
              -1 === Je.indexOf(e.PARSER_MEDIA_TYPE)
                ? Qe
                : e.PARSER_MEDIA_TYPE),
            (et = "application/xhtml+xml" === Ze ? d : p),
            (de = "ALLOWED_TAGS" in e ? N({}, e.ALLOWED_TAGS, et) : he),
            (ge = "ALLOWED_ATTR" in e ? N({}, e.ALLOWED_ATTR, et) : Te),
            (Ve =
              "ALLOWED_NAMESPACES" in e ? N({}, e.ALLOWED_NAMESPACES, d) : $e),
            (We =
              "ADD_URI_SAFE_ATTR" in e
                ? N(S(Ge), e.ADD_URI_SAFE_ATTR, et)
                : Ge),
            (ze =
              "ADD_DATA_URI_TAGS" in e
                ? N(S(Be), e.ADD_DATA_URI_TAGS, et)
                : Be),
            (Fe = "FORBID_CONTENTS" in e ? N({}, e.FORBID_CONTENTS, et) : He),
            (Ee = "FORBID_TAGS" in e ? N({}, e.FORBID_TAGS, et) : {}),
            (Ae = "FORBID_ATTR" in e ? N({}, e.FORBID_ATTR, et) : {}),
            (Pe = "USE_PROFILES" in e && e.USE_PROFILES),
            (_e = !1 !== e.ALLOW_ARIA_ATTR),
            (be = !1 !== e.ALLOW_DATA_ATTR),
            (Ne = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
            (Se = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
            (Re = e.SAFE_FOR_TEMPLATES || !1),
            (we = e.WHOLE_DOCUMENT || !1),
            (ve = e.RETURN_DOM || !1),
            (xe = e.RETURN_DOM_FRAGMENT || !1),
            (Ce = e.RETURN_TRUSTED_TYPE || !1),
            (Le = e.FORCE_BODY || !1),
            (ke = !1 !== e.SANITIZE_DOM),
            (Oe = e.SANITIZE_NAMED_PROPS || !1),
            (Me = !1 !== e.KEEP_CONTENT),
            (Ue = e.IN_PLACE || !1),
            (pe = e.ALLOWED_URI_REGEXP || W),
            (Xe = e.NAMESPACE || qe),
            (ye = e.CUSTOM_ELEMENT_HANDLING || {}),
            e.CUSTOM_ELEMENT_HANDLING &&
              ot(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
              (ye.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
            e.CUSTOM_ELEMENT_HANDLING &&
              ot(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
              (ye.attributeNameCheck =
                e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
            e.CUSTOM_ELEMENT_HANDLING &&
              "boolean" ==
                typeof e.CUSTOM_ELEMENT_HANDLING
                  .allowCustomizedBuiltInElements &&
              (ye.allowCustomizedBuiltInElements =
                e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
            Re && (be = !1),
            xe && (ve = !0),
            Pe &&
              ((de = N({}, [...k])),
              (ge = []),
              !0 === Pe.html && (N(de, w), N(ge, O)),
              !0 === Pe.svg && (N(de, D), N(ge, I), N(ge, U)),
              !0 === Pe.svgFilters && (N(de, L), N(ge, I), N(ge, U)),
              !0 === Pe.mathMl && (N(de, x), N(ge, M), N(ge, U))),
            e.ADD_TAGS && (de === he && (de = S(de)), N(de, e.ADD_TAGS, et)),
            e.ADD_ATTR && (ge === Te && (ge = S(ge)), N(ge, e.ADD_ATTR, et)),
            e.ADD_URI_SAFE_ATTR && N(We, e.ADD_URI_SAFE_ATTR, et),
            e.FORBID_CONTENTS &&
              (Fe === He && (Fe = S(Fe)), N(Fe, e.FORBID_CONTENTS, et)),
            Me && (de["#text"] = !0),
            we && N(de, ["html", "head", "body"]),
            de.table && (N(de, ["tbody"]), delete Ee.tbody),
            e.TRUSTED_TYPES_POLICY)
          ) {
            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML)
              throw A(
                'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
              );
            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
              throw A(
                'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
              );
            (J = e.TRUSTED_TYPES_POLICY), (Q = J.createHTML(""));
          } else
            void 0 === J && (J = K(B, a)),
              null !== J && "string" == typeof Q && (Q = J.createHTML(""));
          i && i(e), (tt = e);
        }
      },
      it = N({}, ["mi", "mo", "mn", "ms", "mtext"]),
      at = N({}, ["foreignobject", "desc", "title", "annotation-xml"]),
      lt = N({}, ["title", "style", "font", "a", "script"]),
      ct = N({}, D);
    N(ct, L), N(ct, v);
    const st = N({}, x);
    N(st, C);
    const mt = function (e) {
        let t = Z(e);
        (t && t.tagName) || (t = { namespaceURI: Xe, tagName: "template" });
        const n = p(e.tagName),
          o = p(t.tagName);
        return (
          !!Ve[e.namespaceURI] &&
          (e.namespaceURI === je
            ? t.namespaceURI === qe
              ? "svg" === n
              : t.namespaceURI === Ye
              ? "svg" === n && ("annotation-xml" === o || it[o])
              : Boolean(ct[n])
            : e.namespaceURI === Ye
            ? t.namespaceURI === qe
              ? "math" === n
              : t.namespaceURI === je
              ? "math" === n && at[o]
              : Boolean(st[n])
            : e.namespaceURI === qe
            ? !(t.namespaceURI === je && !at[o]) &&
              !(t.namespaceURI === Ye && !it[o]) &&
              !st[n] &&
              (lt[n] || !ct[n])
            : !("application/xhtml+xml" !== Ze || !Ve[e.namespaceURI]))
        );
      },
      ut = function (e) {
        f(o.removed, { element: e });
        try {
          e.parentNode.removeChild(e);
        } catch (t) {
          e.remove();
        }
      },
      ft = function (e, t) {
        try {
          f(o.removed, { attribute: t.getAttributeNode(e), from: t });
        } catch (e) {
          f(o.removed, { attribute: null, from: t });
        }
        if ((t.removeAttribute(e), "is" === e && !ge[e]))
          if (ve || xe)
            try {
              ut(t);
            } catch (e) {}
          else
            try {
              t.setAttribute(e, "");
            } catch (e) {}
      },
      pt = function (e) {
        let t, n;
        if (Le) e = "<remove></remove>" + e;
        else {
          const t = h(e, /^[\r\n\t ]+/);
          n = t && t[0];
        }
        "application/xhtml+xml" === Ze &&
          Xe === qe &&
          (e =
            '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
            e +
            "</body></html>");
        const o = J ? J.createHTML(e) : e;
        if (Xe === qe)
          try {
            t = new z().parseFromString(o, Ze);
          } catch (e) {}
        if (!t || !t.documentElement) {
          t = ee.createDocument(Xe, "template", null);
          try {
            t.documentElement.innerHTML = Ke ? Q : o;
          } catch (e) {}
        }
        const r = t.body || t.documentElement;
        return (
          e &&
            n &&
            r.insertBefore(l.createTextNode(n), r.childNodes[0] || null),
          Xe === qe
            ? oe.call(t, we ? "html" : "body")[0]
            : we
            ? t.documentElement
            : r
        );
      },
      dt = function (e) {
        return te.call(
          e.ownerDocument || e,
          e,
          P.SHOW_ELEMENT | P.SHOW_COMMENT | P.SHOW_TEXT,
          null,
          !1
        );
      },
      ht = function (e) {
        return (
          e instanceof H &&
          ("string" != typeof e.nodeName ||
            "string" != typeof e.textContent ||
            "function" != typeof e.removeChild ||
            !(e.attributes instanceof F) ||
            "function" != typeof e.removeAttribute ||
            "function" != typeof e.setAttribute ||
            "string" != typeof e.namespaceURI ||
            "function" != typeof e.insertBefore ||
            "function" != typeof e.hasChildNodes)
        );
      },
      gt = function (e) {
        return "object" == typeof _
          ? e instanceof _
          : e &&
              "object" == typeof e &&
              "number" == typeof e.nodeType &&
              "string" == typeof e.nodeName;
      },
      Tt = function (e, t, n) {
        ie[e] &&
          m(ie[e], (e) => {
            e.call(o, t, n, tt);
          });
      },
      yt = function (e) {
        let t;
        if ((Tt("beforeSanitizeElements", e, null), ht(e))) return ut(e), !0;
        const n = et(e.nodeName);
        if (
          (Tt("uponSanitizeElement", e, { tagName: n, allowedTags: de }),
          e.hasChildNodes() &&
            !gt(e.firstElementChild) &&
            (!gt(e.content) || !gt(e.content.firstElementChild)) &&
            E(/<[/\w]/g, e.innerHTML) &&
            E(/<[/\w]/g, e.textContent))
        )
          return ut(e), !0;
        if (!de[n] || Ee[n]) {
          if (!Ee[n] && At(n)) {
            if (ye.tagNameCheck instanceof RegExp && E(ye.tagNameCheck, n))
              return !1;
            if (ye.tagNameCheck instanceof Function && ye.tagNameCheck(n))
              return !1;
          }
          if (Me && !Fe[n]) {
            const t = Z(e) || e.parentNode,
              n = $(e) || e.childNodes;
            if (n && t) {
              for (let o = n.length - 1; o >= 0; --o)
                t.insertBefore(Y(n[o], !0), V(e));
            }
          }
          return ut(e), !0;
        }
        return e instanceof b && !mt(e)
          ? (ut(e), !0)
          : ("noscript" !== n && "noembed" !== n) ||
            !E(/<\/no(script|embed)/i, e.innerHTML)
          ? (Re &&
              3 === e.nodeType &&
              ((t = e.textContent),
              (t = g(t, ae, " ")),
              (t = g(t, le, " ")),
              (t = g(t, ce, " ")),
              e.textContent !== t &&
                (f(o.removed, { element: e.cloneNode() }),
                (e.textContent = t))),
            Tt("afterSanitizeElements", e, null),
            !1)
          : (ut(e), !0);
      },
      Et = function (e, t, n) {
        if (ke && ("id" === t || "name" === t) && (n in l || n in nt))
          return !1;
        if (be && !Ae[t] && E(se, t));
        else if (_e && E(me, t));
        else if (!ge[t] || Ae[t]) {
          if (
            !(
              (At(e) &&
                ((ye.tagNameCheck instanceof RegExp && E(ye.tagNameCheck, e)) ||
                  (ye.tagNameCheck instanceof Function &&
                    ye.tagNameCheck(e))) &&
                ((ye.attributeNameCheck instanceof RegExp &&
                  E(ye.attributeNameCheck, t)) ||
                  (ye.attributeNameCheck instanceof Function &&
                    ye.attributeNameCheck(t)))) ||
              ("is" === t &&
                ye.allowCustomizedBuiltInElements &&
                ((ye.tagNameCheck instanceof RegExp && E(ye.tagNameCheck, n)) ||
                  (ye.tagNameCheck instanceof Function && ye.tagNameCheck(n))))
            )
          )
            return !1;
        } else if (We[t]);
        else if (E(pe, g(n, fe, "")));
        else if (
          ("src" !== t && "xlink:href" !== t && "href" !== t) ||
          "script" === e ||
          0 !== T(n, "data:") ||
          !ze[e]
        ) {
          if (Ne && !E(ue, g(n, fe, "")));
          else if (n) return !1;
        } else;
        return !0;
      },
      At = function (e) {
        return e.indexOf("-") > 0;
      },
      _t = function (e) {
        let t, n, r, i;
        Tt("beforeSanitizeAttributes", e, null);
        const { attributes: a } = e;
        if (!a) return;
        const l = {
          attrName: "",
          attrValue: "",
          keepAttr: !0,
          allowedAttributes: ge,
        };
        for (i = a.length; i--; ) {
          t = a[i];
          const { name: c, namespaceURI: s } = t;
          if (
            ((n = "value" === c ? t.value : y(t.value)),
            (r = et(c)),
            (l.attrName = r),
            (l.attrValue = n),
            (l.keepAttr = !0),
            (l.forceKeepAttr = void 0),
            Tt("uponSanitizeAttribute", e, l),
            (n = l.attrValue),
            l.forceKeepAttr)
          )
            continue;
          if ((ft(c, e), !l.keepAttr)) continue;
          if (!Se && E(/\/>/i, n)) {
            ft(c, e);
            continue;
          }
          Re && ((n = g(n, ae, " ")), (n = g(n, le, " ")), (n = g(n, ce, " ")));
          const m = et(e.nodeName);
          if (Et(m, r, n)) {
            if (
              (!Oe || ("id" !== r && "name" !== r) || (ft(c, e), (n = Ie + n)),
              J &&
                "object" == typeof B &&
                "function" == typeof B.getAttributeType)
            )
              if (s);
              else
                switch (B.getAttributeType(m, r)) {
                  case "TrustedHTML":
                    n = J.createHTML(n);
                    break;
                  case "TrustedScriptURL":
                    n = J.createScriptURL(n);
                }
            try {
              s ? e.setAttributeNS(s, c, n) : e.setAttribute(c, n),
                u(o.removed);
            } catch (e) {}
          }
        }
        Tt("afterSanitizeAttributes", e, null);
      },
      bt = function e(t) {
        let n;
        const o = dt(t);
        for (Tt("beforeSanitizeShadowDOM", t, null); (n = o.nextNode()); )
          Tt("uponSanitizeShadowNode", n, null),
            yt(n) || (n.content instanceof c && e(n.content), _t(n));
        Tt("afterSanitizeShadowDOM", t, null);
      };
    return (
      (o.sanitize = function (e) {
        let t,
          n,
          i,
          a,
          l =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          ((Ke = !e), Ke && (e = "\x3c!--\x3e"), "string" != typeof e && !gt(e))
        ) {
          if ("function" != typeof e.toString)
            throw A("toString is not a function");
          if ("string" != typeof (e = e.toString()))
            throw A("dirty is not a string, aborting");
        }
        if (!o.isSupported) return e;
        if (
          (De || rt(l), (o.removed = []), "string" == typeof e && (Ue = !1), Ue)
        ) {
          if (e.nodeName) {
            const t = et(e.nodeName);
            if (!de[t] || Ee[t])
              throw A(
                "root node is forbidden and cannot be sanitized in-place"
              );
          }
        } else if (e instanceof _)
          (t = pt("\x3c!----\x3e")),
            (n = t.ownerDocument.importNode(e, !0)),
            (1 === n.nodeType && "BODY" === n.nodeName) || "HTML" === n.nodeName
              ? (t = n)
              : t.appendChild(n);
        else {
          if (!ve && !Re && !we && -1 === e.indexOf("<"))
            return J && Ce ? J.createHTML(e) : e;
          if (((t = pt(e)), !t)) return ve ? null : Ce ? Q : "";
        }
        t && Le && ut(t.firstChild);
        const s = dt(Ue ? e : t);
        for (; (i = s.nextNode()); )
          yt(i) || (i.content instanceof c && bt(i.content), _t(i));
        if (Ue) return e;
        if (ve) {
          if (xe)
            for (a = ne.call(t.ownerDocument); t.firstChild; )
              a.appendChild(t.firstChild);
          else a = t;
          return (
            (ge.shadowroot || ge.shadowrootmod) && (a = re.call(r, a, !0)), a
          );
        }
        let m = we ? t.outerHTML : t.innerHTML;
        return (
          we &&
            de["!doctype"] &&
            t.ownerDocument &&
            t.ownerDocument.doctype &&
            t.ownerDocument.doctype.name &&
            E(j, t.ownerDocument.doctype.name) &&
            (m = "<!DOCTYPE " + t.ownerDocument.doctype.name + ">\n" + m),
          Re && ((m = g(m, ae, " ")), (m = g(m, le, " ")), (m = g(m, ce, " "))),
          J && Ce ? J.createHTML(m) : m
        );
      }),
      (o.setConfig = function (e) {
        rt(e), (De = !0);
      }),
      (o.clearConfig = function () {
        (tt = null), (De = !1);
      }),
      (o.isValidAttribute = function (e, t, n) {
        tt || rt({});
        const o = et(e),
          r = et(t);
        return Et(o, r, n);
      }),
      (o.addHook = function (e, t) {
        "function" == typeof t && ((ie[e] = ie[e] || []), f(ie[e], t));
      }),
      (o.removeHook = function (e) {
        if (ie[e]) return u(ie[e]);
      }),
      (o.removeHooks = function (e) {
        ie[e] && (ie[e] = []);
      }),
      (o.removeAllHooks = function () {
        ie = {};
      }),
      o
    );
  })();
  return V;
});
//# sourceMappingURL=purify.min.js.map

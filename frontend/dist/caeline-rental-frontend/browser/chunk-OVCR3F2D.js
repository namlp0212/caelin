import {
  FooterComponent,
  NavbarComponent
} from "./chunk-MBRMA4QR.js";
import {
  RouterLink
} from "./chunk-UWOFIVKC.js";
import {
  ApiService,
  CommonModule,
  DecimalPipe,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LMTSQMYK.js";

// src/app/pages/packages/packages.component.ts
var _forTrack0 = ($index, $item) => $item.feature;
var _forTrack1 = ($index, $item) => $item.id;
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => ["/booking"];
var _c2 = (a0) => ({ packageId: a0 });
function PackagesComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementStart(2, "div", 20);
    \u0275\u0275element(3, "div", 21)(4, "div", 22)(5, "div", 23);
    \u0275\u0275elementEnd()();
  }
}
function PackagesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, PackagesComponent_Conditional_11_For_2_Template, 6, 0, "div", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function PackagesComponent_Conditional_12_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
  }
  if (rf & 2) {
    const pkg_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", pkg_r1.thumbnailUrl, \u0275\u0275sanitizeUrl)("alt", pkg_r1.name);
  }
}
function PackagesComponent_Conditional_12_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pkg_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.conceptEmoji(pkg_r1.conceptType), " ");
  }
}
function PackagesComponent_Conditional_12_For_2_Conditional_44_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const outfit_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(outfit_r3.name);
  }
}
function PackagesComponent_Conditional_12_For_2_Conditional_44_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pkg_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", pkg_r1.outfits.length - 4, " more");
  }
}
function PackagesComponent_Conditional_12_For_2_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "h4", 46);
    \u0275\u0275text(2, "Outfits in Package");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47);
    \u0275\u0275repeaterCreate(4, PackagesComponent_Conditional_12_For_2_Conditional_44_For_5_Template, 2, 1, "span", 48, _forTrack1);
    \u0275\u0275template(6, PackagesComponent_Conditional_12_For_2_Conditional_44_Conditional_6_Template, 2, 1, "span", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pkg_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275repeater(pkg_r1.outfits.slice(0, 4));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(6, pkg_r1.outfits.length > 4 ? 6 : -1);
  }
}
function PackagesComponent_Conditional_12_For_2_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 44);
  }
}
function PackagesComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div")(2, "div", 26);
    \u0275\u0275template(3, PackagesComponent_Conditional_12_For_2_Conditional_3_Template, 1, 2, "img", 27)(4, PackagesComponent_Conditional_12_For_2_Conditional_4_Template, 2, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "div", 2);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 29);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 30)(13, "div", 31)(14, "p", 32);
    \u0275\u0275text(15, "Base Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 33);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 34)(20, "p", 32);
    \u0275\u0275text(21, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 35);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 36)(25, "h4", 37);
    \u0275\u0275text(26, "Available Add-ons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 38)(28, "div", 39)(29, "span");
    \u0275\u0275text(30, "\u{1F4F8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 40);
    \u0275\u0275text(32, "Photographer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 41);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 39)(37, "span");
    \u0275\u0275text(38, "\u{1F484}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 40);
    \u0275\u0275text(40, "Hair & Makeup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 41);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(44, PackagesComponent_Conditional_12_For_2_Conditional_44_Template, 7, 1, "div", 42);
    \u0275\u0275elementStart(45, "a", 43);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(47, PackagesComponent_Conditional_12_For_2_Conditional_47_Template, 1, 0, "hr", 44);
  }
  if (rf & 2) {
    const pkg_r1 = ctx.$implicit;
    const \u0275$index_39_r4 = ctx.$index;
    const \u0275$count_39_r5 = ctx.$count;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("lg:flex-row-reverse", !(\u0275$index_39_r4 % 2 === 0));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275$index_39_r4 % 2 === 0 ? "order-1" : "order-1 lg:order-2");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.conceptGradient(pkg_r1.conceptType));
    \u0275\u0275advance();
    \u0275\u0275conditional(3, pkg_r1.thumbnailUrl ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275$index_39_r4 % 2 === 0 ? "order-2" : "order-2 lg:order-1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatType(pkg_r1.conceptType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", pkg_r1.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", pkg_r1.description, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(18, 21, pkg_r1.price), "\u0111");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", pkg_r1.durationHours, " hours");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind1(35, 23, pkg_r1.photographerFee), "\u0111");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind1(43, 25, pkg_r1.makeupFee), "\u0111");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(44, pkg_r1.outfits && pkg_r1.outfits.length > 0 ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(27, _c1))("queryParams", \u0275\u0275pureFunction1(28, _c2, pkg_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Book ", pkg_r1.name, " \u273F ");
    \u0275\u0275advance();
    \u0275\u0275conditional(47, !(\u0275$index_39_r4 === \u0275$count_39_r5 - 1) ? 47 : -1);
  }
}
function PackagesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275repeaterCreate(1, PackagesComponent_Conditional_12_For_2_Template, 48, 30, null, null, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.packages());
  }
}
function PackagesComponent_For_35_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const val_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(val_r6);
  }
}
function PackagesComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 17)(1, "td", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PackagesComponent_For_35_For_4_Template, 2, 1, "td", 51, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.feature);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r7.values);
  }
}
var PackagesComponent = class _PackagesComponent {
  constructor(api) {
    this.api = api;
    this.packages = signal([]);
    this.loading = signal(true);
    this.comparisonRows = [
      { feature: "Base Price", values: ["350,000\u0111", "450,000\u0111", "500,000\u0111", "400,000\u0111"] },
      { feature: "Duration", values: ["2 hours", "3 hours", "2 hours", "2 hours"] },
      { feature: "Outfit Included", values: ["\u2713", "\u2713", "\u2713", "\u2713"] },
      { feature: "Accessories", values: ["\u2713", "\u2713", "\u2713", "\u2713"] },
      { feature: "Photographer Add-on", values: ["+200k", "+200k", "+200k", "+200k"] },
      { feature: "Makeup Add-on", values: ["+150k", "+150k", "+150k", "+150k"] },
      { feature: "Best For", values: ["Solo/Couples", "Couples", "Groups", "Vietnamese fashion"] }
    ];
  }
  ngOnInit() {
    this.api.getPackages().subscribe({
      next: (pkgs) => {
        this.packages.set(pkgs);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  conceptGradient(type) {
    const map = {
      SAKURA_DREAM: "linear-gradient(135deg, #fde6ef, #fccede)",
      KYOTO_SUNSET: "linear-gradient(135deg, #fef3c7, #fed7aa)",
      LANTERN_NIGHT: "linear-gradient(135deg, #ede3ff, #fde6ef)",
      ROYAL_VIET_PHUC: "linear-gradient(135deg, #fee2e2, #fecaca)"
    };
    return map[type] ?? "linear-gradient(135deg, #f3f4f6, #e5e7eb)";
  }
  conceptEmoji(type) {
    return { SAKURA_DREAM: "\u{1F338}", KYOTO_SUNSET: "\u{1F3EE}", LANTERN_NIGHT: "\u{1FA94}", ROYAL_VIET_PHUC: "\u{1F451}" }[type] ?? "\u273F";
  }
  formatType(type) {
    return {
      SAKURA_DREAM: "Sakura Dream",
      KYOTO_SUNSET: "Kyoto Sunset",
      LANTERN_NIGHT: "Lantern Night",
      ROYAL_VIET_PHUC: "Royal Viet Phuc"
    }[type] ?? type;
  }
  static {
    this.\u0275fac = function PackagesComponent_Factory(t) {
      return new (t || _PackagesComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackagesComponent, selectors: [["app-packages"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 1, consts: [[1, "pt-24", "pb-16", "bg-gradient-to-br", "from-sakura-50", "to-cream-100"], [1, "container", "mx-auto", "px-4", "text-center"], [1, "badge-sakura", "mb-4"], [1, "text-4xl", "md:text-5xl", "font-serif", "font-bold", "text-gray-800", "mb-4"], [1, "text-gray-500", "text-lg", "max-w-2xl", "mx-auto"], [1, "py-16", "bg-white"], [1, "container", "mx-auto", "px-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], [1, "py-16", "bg-cream-50"], [1, "section-title", "mb-3"], [1, "section-subtitle", "mb-10"], [1, "overflow-x-auto"], [1, "w-full", "bg-white", "rounded-2xl", "shadow-md", "overflow-hidden"], [1, "bg-sakura-500", "text-white"], [1, "text-left", "px-6", "py-4", "font-semibold"], [1, "px-6", "py-4", "font-semibold", "text-center"], [1, "divide-y", "divide-gray-100"], [1, "hover:bg-sakura-50", "transition-colors"], [1, "card", "p-0", "overflow-hidden"], [1, "h-64", "shimmer"], [1, "p-6", "space-y-3"], [1, "h-6", "shimmer", "rounded", "w-1/2"], [1, "h-4", "shimmer", "rounded", "w-full"], [1, "h-4", "shimmer", "rounded", "w-3/4"], [1, "space-y-16"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-10", "items-center"], [1, "aspect-[4/3]", "rounded-2xl", "overflow-hidden", "shadow-xl"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "text-3xl", "md:text-4xl", "font-serif", "font-bold", "text-gray-800", "mb-4"], [1, "text-gray-600", "text-lg", "leading-relaxed", "mb-6"], [1, "grid", "grid-cols-2", "gap-4", "mb-8"], [1, "bg-sakura-50", "rounded-xl", "p-4"], [1, "text-xs", "text-gray-500", "uppercase", "tracking-wide", "mb-1"], [1, "text-xl", "font-bold", "text-sakura-600"], [1, "bg-cream-50", "rounded-xl", "p-4"], [1, "text-xl", "font-bold", "text-gray-700"], [1, "space-y-3", "mb-8"], [1, "font-semibold", "text-gray-700", "text-sm", "uppercase", "tracking-wide"], [1, "flex", "flex-wrap", "gap-3"], [1, "flex", "items-center", "gap-2", "bg-white", "border", "border-sakura-100", "rounded-full", "px-4", "py-2", "text-sm"], [1, "text-gray-600"], [1, "text-sakura-600", "font-semibold"], [1, "mb-8"], [1, "btn-primary", "inline-block", 3, "routerLink", "queryParams"], [1, "border-sakura-100"], [1, "w-full", "h-full", "flex", "items-center", "justify-center", "text-8xl"], [1, "font-semibold", "text-gray-700", "text-sm", "uppercase", "tracking-wide", "mb-3"], [1, "flex", "flex-wrap", "gap-2"], [1, "badge", "bg-cream-100", "text-cream-800"], [1, "badge", "bg-gray-100", "text-gray-600"], [1, "px-6", "py-4", "text-gray-700", "font-medium"], [1, "px-6", "py-4", "text-center", "text-gray-600"]], template: function PackagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "section", 0)(2, "div", 1)(3, "p", 2);
        \u0275\u0275text(4, "Our Collections");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 3);
        \u0275\u0275text(6, " Concept Packages ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, " Each package is a curated photoshoot experience with a distinct theme, perfect for your social media story. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "section", 5)(10, "div", 6);
        \u0275\u0275template(11, PackagesComponent_Conditional_11_Template, 3, 1, "div", 7)(12, PackagesComponent_Conditional_12_Template, 3, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "section", 8)(14, "div", 6)(15, "h2", 9);
        \u0275\u0275text(16, "Package Comparison");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 10);
        \u0275\u0275text(18, "Find what's included in each tier");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 11)(20, "table", 12)(21, "thead", 13)(22, "tr")(23, "th", 14);
        \u0275\u0275text(24, "Feature");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th", 15);
        \u0275\u0275text(26, "Sakura Dream");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "th", 15);
        \u0275\u0275text(28, "Kyoto Sunset");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th", 15);
        \u0275\u0275text(30, "Lantern Night");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th", 15);
        \u0275\u0275text(32, "Royal Viet Phuc");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "tbody", 16);
        \u0275\u0275repeaterCreate(34, PackagesComponent_For_35_Template, 5, 1, "tr", 17, _forTrack0);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(36, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275conditional(11, ctx.loading() ? 11 : 12);
        \u0275\u0275advance(23);
        \u0275\u0275repeater(ctx.comparisonRows);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink, NavbarComponent, FooterComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackagesComponent, { className: "PackagesComponent" });
})();
export {
  PackagesComponent
};
//# sourceMappingURL=chunk-OVCR3F2D.js.map

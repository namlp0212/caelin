import {
  ApiService,
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-LMTSQMYK.js";

// src/app/admin/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.name;
var _c0 = () => [1, 2, 3, 4];
function DashboardComponent_Conditional_6_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(card_r1.change >= 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", card_r1.change >= 0 ? "\u2191" : "\u2193", " ", ctx_r1.Math.abs(card_r1.change), "% ");
  }
}
function DashboardComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 10)(2, "div", 11)(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, DashboardComponent_Conditional_6_For_2_Conditional_5_Template, 2, 4, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", card_r1.bgColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, card_r1.change !== null ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.label);
  }
}
function DashboardComponent_Conditional_6_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20)(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275element(10, "div", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pkg_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", $index_r4 + 1, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(pkg_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", pkg_r3.count, " bookings");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.getBarWidth(pkg_r3.count) + "%");
  }
}
function DashboardComponent_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_6_Conditional_7_For_2_Template, 11, 5, "div", 17, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.stats().popularPackages);
  }
}
function DashboardComponent_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "p", 25);
    \u0275\u0275text(2, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275text(4, "No booking data yet");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_6_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r5 = ctx.$implicit;
    \u0275\u0275property("href", action_r5.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(action_r5.label);
  }
}
function DashboardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_6_For_2_Template, 10, 6, "div", 4, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 4)(5, "h3", 6);
    \u0275\u0275text(6, "Popular Packages");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, DashboardComponent_Conditional_6_Conditional_7_Template, 3, 0, "div", 7)(8, DashboardComponent_Conditional_6_Conditional_8_Template, 5, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 4)(10, "h3", 6);
    \u0275\u0275text(11, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8);
    \u0275\u0275repeaterCreate(13, DashboardComponent_Conditional_6_For_14_Template, 5, 3, "a", 9, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statCards());
    \u0275\u0275advance(6);
    \u0275\u0275conditional(7, ctx_r1.stats().popularPackages.length > 0 ? 7 : 8);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.quickActions);
  }
}
function DashboardComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 29)(2, "div", 30)(3, "div", 31);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_7_For_2_Template, 4, 0, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(api) {
    this.api = api;
    this.stats = signal(null);
    this.Math = Math;
    this.quickActions = [
      { icon: "\u{1F4C5}", label: "View Bookings", href: "/admin/bookings" },
      { icon: "\u{1F458}", label: "Manage Outfits", href: "/admin/outfits" },
      { icon: "\u{1F338}", label: "Manage Packages", href: "/admin/packages" },
      { icon: "\u{1F5BC}\uFE0F", label: "Edit Content", href: "/admin/content" }
    ];
    this.statCards = () => {
      const s = this.stats();
      if (!s)
        return [];
      const change = s.lastMonthBookings > 0 ? Math.round((s.monthlyBookings - s.lastMonthBookings) / s.lastMonthBookings * 100) : null;
      return [
        {
          icon: "\u{1F4C5}",
          label: "Total Bookings",
          value: s.totalBookings.toLocaleString(),
          bgColor: "#fde6ef",
          change: null
        },
        {
          icon: "\u{1F4C5}",
          label: "This Month",
          value: s.monthlyBookings.toLocaleString(),
          bgColor: "#ede3ff",
          change
        },
        {
          icon: "\u{1F4B0}",
          label: "Monthly Revenue",
          value: (s.monthlyRevenue / 1e3).toFixed(0) + "K \u0111",
          bgColor: "#d1fae5",
          change: null
        },
        {
          icon: "\u{1F458}",
          label: "Outfits",
          value: s.totalOutfits.toString(),
          bgColor: "#fef3c7",
          change: null
        }
      ];
    };
  }
  ngOnInit() {
    this.api.getDashboardStats().subscribe({
      next: (s) => this.stats.set(s),
      error: () => {
      }
    });
  }
  getBarWidth(count) {
    const max = Math.max(...this.stats()?.popularPackages.map((p) => Number(p.count)) || [1]);
    return max > 0 ? Number(count) / max * 100 : 0;
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "mb-8"], [1, "text-2xl", "font-serif", "font-bold", "text-gray-800", "mb-1"], [1, "text-gray-500"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-6", "mb-8"], [1, "card", "p-6"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "font-semibold", "text-gray-700", "mb-5"], [1, "space-y-4"], [1, "grid", "grid-cols-2", "gap-3"], [1, "flex", "flex-col", "items-center", "gap-2", "p-4", "bg-gray-50", "rounded-xl", "hover:bg-sakura-50", "hover:text-sakura-600", "transition-colors", "duration-200", "text-center", "cursor-pointer", 3, "href"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "p-3", "rounded-xl"], [1, "text-2xl"], [1, "text-xs", "font-semibold", "px-2", "py-1", "rounded-full", 3, "class"], [1, "text-3xl", "font-bold", "text-gray-800", "mb-1"], [1, "text-sm", "text-gray-500"], [1, "text-xs", "font-semibold", "px-2", "py-1", "rounded-full"], [1, "flex", "items-center", "gap-4"], [1, "w-8", "h-8", "bg-sakura-100", "rounded-full", "flex", "items-center", "justify-center", "text-sakura-600", "font-bold", "text-sm", "flex-shrink-0"], [1, "flex-1"], [1, "flex", "justify-between", "items-center", "mb-1"], [1, "text-sm", "font-medium", "text-gray-700"], [1, "h-2", "bg-gray-100", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-sakura-400", "rounded-full", "transition-all", "duration-500"], [1, "text-center", "py-8", "text-gray-400"], [1, "text-4xl", "mb-2"], [1, "text-sm"], [1, "text-3xl"], [1, "text-xs", "font-medium", "text-gray-600"], [1, "h-12", "shimmer", "rounded-xl", "mb-4", "w-12"], [1, "h-8", "shimmer", "rounded", "w-1/2", "mb-2"], [1, "h-4", "shimmer", "rounded", "w-3/4"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "h1", 1);
        \u0275\u0275text(3, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Welcome back! Here's your business overview.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, DashboardComponent_Conditional_6_Template, 15, 1)(7, DashboardComponent_Conditional_7_Template, 3, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.stats() ? 6 : 7);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-AILSOESW.js.map

import {
  AuthService
} from "./chunk-V63KXKCW.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-UWOFIVKC.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LMTSQMYK.js";

// src/app/admin/layout/admin-shell/admin-shell.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function AdminShellComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var AdminShellComponent = class _AdminShellComponent {
  constructor(auth) {
    this.auth = auth;
    this.today = (/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    this.navItems = [
      { path: "/admin/dashboard", label: "Dashboard", icon: "\u{1F4CA}" },
      { path: "/admin/bookings", label: "Bookings", icon: "\u{1F4C5}" },
      { path: "/admin/outfits", label: "Outfits", icon: "\u{1F458}" },
      { path: "/admin/packages", label: "Packages", icon: "\u{1F338}" },
      { path: "/admin/slots", label: "Slots", icon: "\u23F0" },
      { path: "/admin/content", label: "Content", icon: "\u{1F5BC}\uFE0F" }
    ];
  }
  static {
    this.\u0275fac = function AdminShellComponent_Factory(t) {
      return new (t || _AdminShellComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminShellComponent, selectors: [["app-admin-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 4, consts: [[1, "flex", "h-screen", "bg-gray-50", "overflow-hidden"], [1, "w-64", "bg-white", "shadow-sm", "flex-shrink-0", "flex", "flex-col"], [1, "px-6", "py-5", "border-b", "border-gray-100"], [1, "text-xl", "font-script", "font-bold", "text-sakura-600"], [1, "text-xs", "text-gray-400", "uppercase", "tracking-wide"], [1, "px-6", "py-4", "border-b", "border-gray-100"], [1, "flex", "items-center", "gap-3"], [1, "w-9", "h-9", "bg-sakura-100", "rounded-full", "flex", "items-center", "justify-center", "text-sakura-600", "font-bold", "text-sm"], [1, "text-sm", "font-semibold", "text-gray-800"], [1, "text-xs", "text-sakura-500"], [1, "flex-1", "px-4", "py-6", "space-y-1", "overflow-y-auto"], ["routerLinkActive", "active", 1, "sidebar-link", 3, "routerLink"], [1, "px-4", "py-4", "border-t", "border-gray-100"], [1, "sidebar-link", "w-full", "text-red-500", "hover:bg-red-50", "hover:text-red-600", 3, "click"], [1, "text-xl"], ["href", "/", "target", "_blank", 1, "sidebar-link", "mt-1", "text-xs"], [1, "text-lg"], [1, "flex-1", "overflow-y-auto"], [1, "bg-white", "border-b", "border-gray-100", "px-8", "py-4", "flex", "items-center", "justify-between", "sticky", "top-0", "z-10"], [1, "font-semibold", "text-gray-700"], [1, "text-sm", "text-gray-500"], [1, "p-8"]], template: function AdminShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Caeline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Admin Panel");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div")(12, "p", 8);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 9);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(16, "nav", 10);
        \u0275\u0275repeaterCreate(17, AdminShellComponent_For_18_Template, 5, 3, "a", 11, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 12)(20, "button", 13);
        \u0275\u0275listener("click", function AdminShellComponent_Template_button_click_20_listener() {
          return ctx.auth.logout();
        });
        \u0275\u0275elementStart(21, "span", 14);
        \u0275\u0275text(22, "\u{1F6AA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span");
        \u0275\u0275text(24, "Logout");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "a", 15)(26, "span", 16);
        \u0275\u0275text(27, "\u{1F310}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span");
        \u0275\u0275text(29, "View Website");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "main", 17)(31, "div", 18)(32, "h2", 19);
        \u0275\u0275text(33, "Caeline Admin Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 20);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 21);
        \u0275\u0275element(37, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", (((tmp_0_0 = ctx.auth.currentUser()) == null ? null : tmp_0_0.fullName) || ((tmp_0_0 = ctx.auth.currentUser()) == null ? null : tmp_0_0.username) || "A")[0].toUpperCase(), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(((tmp_1_0 = ctx.auth.currentUser()) == null ? null : tmp_1_0.fullName) || ((tmp_1_0 = ctx.auth.currentUser()) == null ? null : tmp_1_0.username));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_2_0 = ctx.auth.currentUser()) == null ? null : tmp_2_0.role);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.navItems);
        \u0275\u0275advance(18);
        \u0275\u0275textInterpolate(ctx.today);
      }
    }, dependencies: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminShellComponent, { className: "AdminShellComponent" });
})();
export {
  AdminShellComponent
};
//# sourceMappingURL=chunk-T4GATTTP.js.map

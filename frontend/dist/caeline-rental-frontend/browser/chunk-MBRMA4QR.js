import {
  RouterLink,
  RouterLinkActive
} from "./chunk-UWOFIVKC.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-LMTSQMYK.js";

// src/app/shared/components/navbar/navbar.component.ts
var _c0 = () => ({ exact: true });
function NavbarComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 12);
  }
}
function NavbarComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 14);
  }
}
function NavbarComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "a", 15);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_20_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mobileOpen.set(false));
    });
    \u0275\u0275text(2, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 16);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_20_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mobileOpen.set(false));
    });
    \u0275\u0275text(4, "Concept Packages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 17);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_20_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mobileOpen.set(false));
    });
    \u0275\u0275text(6, "Outfit Catalog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 18);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_20_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mobileOpen.set(false));
    });
    \u0275\u0275text(8, " Book Now \u273F ");
    \u0275\u0275elementEnd()();
  }
}
var NavbarComponent = class _NavbarComponent {
  constructor() {
    this.scrolled = signal(false);
    this.mobileOpen = signal(false);
  }
  navClass() {
    return this.scrolled() ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent";
  }
  navLinkClass() {
    return this.scrolled() ? "text-gray-700 hover:text-sakura-600 font-medium transition-colors duration-200" : "text-white/90 hover:text-white font-medium transition-colors duration-200";
  }
  onScroll() {
    this.scrolled.set(window.scrollY > 60);
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(t) {
      return new (t || _NavbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function NavbarComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 18, consts: [[1, "fixed", "top-0", "w-full", "z-50", "transition-all", "duration-300"], [1, "container", "mx-auto", "px-4", "py-4", "flex", "items-center", "justify-between"], ["routerLink", "/", 1, "flex", "items-center", "gap-2"], [1, "text-2xl", "font-script", "font-bold"], [1, "text-xs", "font-sans", "tracking-widest", "uppercase"], [1, "hidden", "md:flex", "items-center", "gap-8"], ["routerLink", "/", "routerLinkActive", "nav-active", 3, "routerLinkActiveOptions"], ["routerLink", "/packages", "routerLinkActive", "nav-active"], ["routerLink", "/catalog", "routerLinkActive", "nav-active"], ["routerLink", "/booking", 1, "btn-primary", "text-sm", "px-5", "py-2.5"], [1, "md:hidden", "p-2", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], [1, "md:hidden", "bg-white", "shadow-xl", "border-t", "border-sakura-100", "px-4", "py-6", "space-y-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["routerLink", "/", 1, "block", "text-gray-700", "hover:text-sakura-600", "font-medium", "py-2", 3, "click"], ["routerLink", "/packages", 1, "block", "text-gray-700", "hover:text-sakura-600", "font-medium", "py-2", 3, "click"], ["routerLink", "/catalog", 1, "block", "text-gray-700", "hover:text-sakura-600", "font-medium", "py-2", 3, "click"], ["routerLink", "/booking", 1, "btn-primary", "inline-block", "text-sm", "px-5", "py-2.5", "mt-2", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
        \u0275\u0275text(4, " Caeline ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, " Rental ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "a", 6);
        \u0275\u0275text(9, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 7);
        \u0275\u0275text(11, "Concept Packages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 8);
        \u0275\u0275text(13, "Outfit Catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 9);
        \u0275\u0275text(15, " Book Now \u273F ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "button", 10);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_16_listener() {
          return ctx.mobileOpen.set(!ctx.mobileOpen());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 11);
        \u0275\u0275template(18, NavbarComponent_Conditional_18_Template, 1, 0, ":svg:path", 12)(19, NavbarComponent_Conditional_19_Template, 1, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(20, NavbarComponent_Conditional_20_Template, 9, 0, "div", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.navClass());
        \u0275\u0275advance(3);
        \u0275\u0275classMap(ctx.scrolled() ? "text-sakura-600" : "text-white");
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.scrolled() ? "text-gray-500" : "text-white/70");
        \u0275\u0275advance(3);
        \u0275\u0275classMap(ctx.navLinkClass());
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(17, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.navLinkClass());
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.navLinkClass());
        \u0275\u0275advance(4);
        \u0275\u0275classMap(ctx.scrolled() ? "text-gray-700" : "text-white");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(18, !ctx.mobileOpen() ? 18 : 19);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(20, ctx.mobileOpen() ? 20 : -1);
      }
    }, dependencies: [RouterLink, RouterLinkActive, CommonModule], styles: ["\n\n.nav-active[_ngcontent-%COMP%] {\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(240 89 140 / var(--tw-text-opacity, 1));\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent" });
})();

// src/app/shared/components/footer/footer.component.ts
var _c02 = () => ({ type: "KIMONO" });
var _c1 = () => ({ type: "YUKATA" });
var _c2 = () => ({ type: "VIET_PHUC" });
var FooterComponent = class _FooterComponent {
  constructor() {
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(t) {
      return new (t || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 79, vars: 7, consts: [[1, "bg-gray-900", "text-white", "pt-16", "pb-8"], [1, "container", "mx-auto", "px-4"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-10", "mb-12"], [1, "md:col-span-1"], [1, "text-2xl", "font-script", "font-bold", "text-sakura-300", "mb-3"], [1, "text-gray-400", "text-sm", "leading-relaxed"], [1, "flex", "gap-4", "mt-5"], ["href", "#", "aria-label", "Instagram", 1, "social-icon"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["d", "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"], ["href", "#", "aria-label", "TikTok", 1, "social-icon"], ["d", "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"], ["href", "#", "aria-label", "Facebook", 1, "social-icon"], ["d", "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"], [1, "font-semibold", "text-white", "mb-4"], [1, "space-y-2"], ["routerLink", "/", 1, "footer-link"], ["routerLink", "/packages", 1, "footer-link"], ["routerLink", "/catalog", 1, "footer-link"], ["routerLink", "/booking", 1, "footer-link"], ["routerLink", "/catalog", 1, "footer-link", 3, "queryParams"], [1, "space-y-3", "text-gray-400", "text-sm"], [1, "flex", "gap-2"], ["href", "tel:+84901234567", 1, "hover:text-sakura-300"], ["href", "mailto:hello@caeline.vn", 1, "hover:text-sakura-300"], [1, "border-t", "border-gray-800", "pt-6", "flex", "flex-col", "md:flex-row", "items-center", "justify-between", "gap-4"], [1, "text-gray-500", "text-sm"], [1, "flex", "gap-4", "text-sm"], ["href", "#", 1, "text-gray-500", "hover:text-sakura-300", "transition-colors"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        \u0275\u0275text(5, "Caeline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, " Dress in Tradition, Shine on Social. Thu\xEA trang ph\u1EE5c Kimono, Yukata & Vi\u1EC7t Ph\u1EE5c cho bu\u1ED5i ch\u1EE5p \u1EA3nh Instagram & TikTok \u0111\u1EB9p nh\u1EA5t c\u1EE7a b\u1EA1n. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "a", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 8);
        \u0275\u0275element(11, "path", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "a", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 8);
        \u0275\u0275element(14, "path", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(15, "a", 12);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 8);
        \u0275\u0275element(17, "path", 13);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(18, "div")(19, "h4", 14);
        \u0275\u0275text(20, "Quick Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "ul", 15)(22, "li")(23, "a", 16);
        \u0275\u0275text(24, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "li")(26, "a", 17);
        \u0275\u0275text(27, "Concept Packages");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "li")(29, "a", 18);
        \u0275\u0275text(30, "Outfit Catalog");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "li")(32, "a", 19);
        \u0275\u0275text(33, "Book a Photoshoot");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "div")(35, "h4", 14);
        \u0275\u0275text(36, "Collections");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "ul", 15)(38, "li")(39, "a", 20);
        \u0275\u0275text(40, "Kimono");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "li")(42, "a", 20);
        \u0275\u0275text(43, "Yukata");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "li")(45, "a", 20);
        \u0275\u0275text(46, "Viet Phuc");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(47, "div")(48, "h4", 14);
        \u0275\u0275text(49, "Contact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "ul", 21)(51, "li", 22)(52, "span");
        \u0275\u0275text(53, "\u{1F4CD}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "span");
        \u0275\u0275text(55, "123 Nguyen Hue, Hoi An, Quang Nam");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "li", 22)(57, "span");
        \u0275\u0275text(58, "\u{1F4DE}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "a", 23);
        \u0275\u0275text(60, "0901 234 567");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "li", 22)(62, "span");
        \u0275\u0275text(63, "\u{1F4E7}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "a", 24);
        \u0275\u0275text(65, "hello@caeline.vn");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "li", 22)(67, "span");
        \u0275\u0275text(68, "\u{1F550}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "span");
        \u0275\u0275text(70, "8:00 AM \u2013 8:00 PM daily");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(71, "div", 25)(72, "p", 26);
        \u0275\u0275text(73);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div", 27)(75, "a", 28);
        \u0275\u0275text(76, "Privacy Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "a", 28);
        \u0275\u0275text(78, "Terms of Service");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(39);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(4, _c02));
        \u0275\u0275advance(3);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(5, _c1));
        \u0275\u0275advance(3);
        \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(6, _c2));
        \u0275\u0275advance(28);
        \u0275\u0275textInterpolate1(" \xA9 ", ctx.year, " Caeline Rental. All rights reserved. ");
      }
    }, dependencies: [RouterLink], styles: ["\n\n.social-icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.social-icon[_ngcontent-%COMP%]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(250 176 200 / var(--tw-text-opacity, 1));\n}\n.footer-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.footer-link[_ngcontent-%COMP%]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(250 176 200 / var(--tw-text-opacity, 1));\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent" });
})();

export {
  NavbarComponent,
  FooterComponent
};
//# sourceMappingURL=chunk-MBRMA4QR.js.map

import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-CZVPSPMY.js";
import {
  AuthService
} from "./chunk-V63KXKCW.js";
import {
  Router
} from "./chunk-UWOFIVKC.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LMTSQMYK.js";

// src/app/admin/layout/login/login.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
function AdminLoginComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "\u{1F338}");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275styleProp("left", p_r1 * 16 + "%")("animation-delay", p_r1 * 1.3 + "s");
  }
}
function AdminLoginComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error(), " ");
  }
}
function AdminLoginComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Signing in... ");
  }
}
function AdminLoginComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sign In \u273F ");
  }
}
var AdminLoginComponent = class _AdminLoginComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.username = "";
    this.password = "";
    this.error = signal("");
    this.loading = signal(false);
    if (this.auth.isAuthenticated()) {
      this.router.navigate(["/admin"]);
    }
  }
  login() {
    if (!this.username || !this.password)
      return;
    this.loading.set(true);
    this.error.set("");
    this.auth.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(["/admin/dashboard"]),
      error: (err) => {
        this.error.set(err.error?.message || "Invalid username or password");
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function AdminLoginComponent_Factory(t) {
      return new (t || _AdminLoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginComponent, selectors: [["app-admin-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 8, consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-sakura-600", "to-lotus-700", "flex", "items-center", "justify-center", "p-4"], [1, "absolute", "inset-0", "overflow-hidden", "pointer-events-none"], [1, "petal", "text-xl", "absolute", 3, "left", "animation-delay"], [1, "w-full", "max-w-sm", "relative", "z-10"], [1, "text-center", "mb-8"], [1, "text-4xl", "font-script", "font-bold", "text-white", "mb-2"], [1, "text-white/70", "text-sm", "uppercase", "tracking-widest"], [1, "card", "p-8"], [1, "text-xl", "font-serif", "font-bold", "text-gray-800", "mb-6", "text-center"], [1, "space-y-4", 3, "ngSubmit"], [1, "form-label"], ["type", "text", "name", "username", "placeholder", "admin", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "password", "name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "bg-red-50", "border", "border-red-200", "text-red-600", "rounded-xl", "px-4", "py-3", "text-sm"], ["type", "submit", 1, "btn-primary", "w-full", "py-3", 3, "disabled"], [1, "text-center", "text-xs", "text-gray-400", "mt-6"], ["href", "/", 1, "hover:text-sakura-500", "transition-colors"], [1, "petal", "text-xl", "absolute"]], template: function AdminLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275repeaterCreate(2, AdminLoginComponent_For_3_Template, 2, 4, "span", 2, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "h1", 5);
        \u0275\u0275text(7, "Caeline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, "Admin Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "h2", 8);
        \u0275\u0275text(12, "Sign In");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "form", 9);
        \u0275\u0275listener("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_13_listener() {
          return ctx.login();
        });
        \u0275\u0275elementStart(14, "div")(15, "label", 10);
        \u0275\u0275text(16, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div")(19, "label", 10);
        \u0275\u0275text(20, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(22, AdminLoginComponent_Conditional_22_Template, 2, 1, "div", 13);
        \u0275\u0275elementStart(23, "button", 14);
        \u0275\u0275template(24, AdminLoginComponent_Conditional_24_Template, 1, 0)(25, AdminLoginComponent_Conditional_25_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "p", 15)(27, "a", 16);
        \u0275\u0275text(28, "\u2190 Back to website");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(7, _c0));
        \u0275\u0275advance(15);
        \u0275\u0275twoWayProperty("ngModel", ctx.username);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(22, ctx.error() ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(24, ctx.loading() ? 24 : 25);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent" });
})();
export {
  AdminLoginComponent
};
//# sourceMappingURL=chunk-5UHFXCZB.js.map

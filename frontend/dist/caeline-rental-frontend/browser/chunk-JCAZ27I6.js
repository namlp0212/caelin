import {
  FooterComponent,
  NavbarComponent
} from "./chunk-MBRMA4QR.js";
import {
  ActivatedRoute,
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
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-LMTSQMYK.js";

// src/app/pages/booking-result/booking-result.component.ts
function BookingResultComponent_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 11)(2, "span", 12);
    \u0275\u0275text(3, "Booking Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "span", 12);
    \u0275\u0275text(8, "Package");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 11)(12, "span", 12);
    \u0275\u0275text(13, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 14);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 11)(17, "span", 12);
    \u0275\u0275text(18, "Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 14);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 11)(22, "span", 12);
    \u0275\u0275text(23, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 15);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 16)(28, "span", 12);
    \u0275\u0275text(29, "Deposit Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 17);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.booking().bookingCode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.booking().conceptPackage) == null ? null : tmp_3_0.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.booking().bookingDate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.booking().startTime, " \u2013 ", ctx_r0.booking().endTime, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(26, 7, ctx_r0.booking().totalAmount), "\u0111");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(32, 9, ctx_r0.booking().depositAmount), "\u0111");
  }
}
function BookingResultComponent_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "p", 19);
    \u0275\u0275text(2, "Booking Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.bookingCode());
  }
}
function BookingResultComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275text(2, "\u{1F338}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 4);
    \u0275\u0275text(4, " Booking Confirmed! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6, " Your photoshoot experience has been reserved. We can't wait to see you! ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, BookingResultComponent_Conditional_3_Conditional_7_Template, 33, 11, "div", 6)(8, BookingResultComponent_Conditional_3_Conditional_8_Template, 5, 1);
    \u0275\u0275elementStart(9, "p", 7);
    \u0275\u0275text(10, " A confirmation email has been sent to your email address. Please save your booking code for future reference. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 8)(12, "a", 9);
    \u0275\u0275text(13, "Back to Home \u273F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 10);
    \u0275\u0275text(15, "Browse More Outfits");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional(7, ctx_r0.booking() ? 7 : ctx_r0.bookingCode() ? 8 : -1);
  }
}
function BookingResultComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 21);
    \u0275\u0275text(2, "\u{1F622}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 4);
    \u0275\u0275text(4, "Payment Failed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 22);
    \u0275\u0275text(6, " We couldn't process your payment. Please try again or contact us for assistance. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8)(8, "a", 23);
    \u0275\u0275text(9, "Try Again");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 24);
    \u0275\u0275text(11, "Contact Us");
    \u0275\u0275elementEnd()()();
  }
}
var BookingResultComponent = class _BookingResultComponent {
  constructor(route, api) {
    this.route = route;
    this.api = api;
    this.status = signal("");
    this.bookingCode = signal("");
    this.booking = signal(null);
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.status.set(params["status"] || "failed");
      this.bookingCode.set(params["code"] || "");
      if (params["code"]) {
        this.api.getBookingByCode(params["code"]).subscribe({
          next: (b) => this.booking.set(b),
          error: () => {
          }
        });
      }
    });
  }
  static {
    this.\u0275fac = function BookingResultComponent_Factory(t) {
      return new (t || _BookingResultComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingResultComponent, selectors: [["app-booking-result"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-sakura-50", "to-cream-50", "pt-24", "pb-16", "flex", "items-center", "justify-center"], [1, "container", "mx-auto", "px-4", "max-w-2xl", "text-center"], [1, "card", "p-10"], [1, "text-7xl", "mb-6", "animate-bounce"], [1, "text-3xl", "font-serif", "font-bold", "text-gray-800", "mb-3"], [1, "text-gray-500", "mb-6"], [1, "bg-sakura-50", "rounded-2xl", "p-6", "mb-6", "text-left", "space-y-3"], [1, "text-sm", "text-gray-500", "mb-8"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "justify-center"], ["routerLink", "/", 1, "btn-primary"], ["routerLink", "/catalog", 1, "btn-secondary"], [1, "flex", "justify-between"], [1, "text-gray-500", "text-sm"], [1, "font-bold", "text-sakura-600", "font-mono"], [1, "font-semibold"], [1, "font-bold", "text-sakura-600"], [1, "flex", "justify-between", "border-t", "pt-3"], [1, "font-bold"], [1, "bg-sakura-50", "rounded-2xl", "p-6", "mb-6"], [1, "text-sm", "text-gray-500"], [1, "text-2xl", "font-bold", "text-sakura-600", "font-mono"], [1, "text-7xl", "mb-6"], [1, "text-gray-500", "mb-8"], ["routerLink", "/booking", 1, "btn-primary"], ["href", "tel:+84901234567", 1, "btn-secondary"]], template: function BookingResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
        \u0275\u0275template(3, BookingResultComponent_Conditional_3_Template, 16, 1, "div", 2)(4, BookingResultComponent_Conditional_4_Template, 12, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(5, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.status() === "success" || ctx.status() === "pending" ? 3 : 4);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink, NavbarComponent, FooterComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingResultComponent, { className: "BookingResultComponent" });
})();
export {
  BookingResultComponent
};
//# sourceMappingURL=chunk-JCAZ27I6.js.map

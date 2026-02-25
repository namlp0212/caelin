import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CZVPSPMY.js";
import {
  ApiService,
  CommonModule,
  DecimalPipe,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LMTSQMYK.js";

// src/app/admin/bookings/bookings.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.label;
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = () => [1, 2, 3, 4, 5, 6, 7];
function AdminBookingsComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function AdminBookingsComponent_For_14_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.activeStatus = tab_r2.value;
      return \u0275\u0275resetView(ctx_r2.filterBookings());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.activeStatus === tab_r2.value ? "bg-sakura-500 text-white shadow-sm" : "bg-white border border-gray-200 text-gray-600 hover:border-sakura-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", tab_r2.label, " (", ctx_r2.getCount(tab_r2.value), ") ");
  }
}
function AdminBookingsComponent_Conditional_34_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 15);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function AdminBookingsComponent_Conditional_34_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, AdminBookingsComponent_Conditional_34_For_1_For_2_Template, 2, 0, "td", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function AdminBookingsComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AdminBookingsComponent_Conditional_34_For_1_Template, 3, 1, "tr", null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AdminBookingsComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 19)(2, "p", 20);
    \u0275\u0275text(3, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No bookings found");
    \u0275\u0275elementEnd()()();
  }
}
function AdminBookingsComponent_Conditional_36_For_1_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function AdminBookingsComponent_Conditional_36_For_1_For_28_Template_button_click_0_listener() {
      const action_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const booking_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateStatus(booking_r6.id, action_r5.nextStatus));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r5 = ctx.$implicit;
    \u0275\u0275classMap(action_r5.btnClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", action_r5.label, " ");
  }
}
function AdminBookingsComponent_Conditional_36_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 21)(1, "td", 15)(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 15)(5, "p", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 15)(12, "p", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 24);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 27)(17, "p", 28);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 29);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 30)(23, "span", 31);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 15)(26, "div", 32);
    \u0275\u0275repeaterCreate(27, AdminBookingsComponent_Conditional_36_For_1_For_28_Template, 2, 3, "button", 33, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const booking_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(booking_r6.bookingCode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(booking_r6.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r6.customerPhone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", booking_r6.conceptPackage == null ? null : booking_r6.conceptPackage.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(booking_r6.bookingDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", booking_r6.startTime, " \u2013 ", booking_r6.endTime, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(19, 14, booking_r6.totalAmount), "\u0111");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(booking_r6.depositPaid ? "text-green-600" : "text-orange-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Deposit ", booking_r6.depositPaid ? "paid" : "pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.statusBadgeClass(booking_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", booking_r6.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.statusActions(booking_r6.status));
  }
}
function AdminBookingsComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AdminBookingsComponent_Conditional_36_For_1_Template, 29, 16, "tr", 21, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.displayedBookings());
  }
}
var AdminBookingsComponent = class _AdminBookingsComponent {
  constructor(api) {
    this.api = api;
    this.allBookings = signal([]);
    this.displayedBookings = signal([]);
    this.loading = signal(true);
    this.activeStatus = "ALL";
    this.filterFrom = "";
    this.filterTo = "";
    this.statusTabs = [
      { value: "ALL", label: "All" },
      { value: "PENDING", label: "Pending" },
      { value: "CONFIRMED", label: "Confirmed" },
      { value: "COMPLETED", label: "Completed" },
      { value: "CANCELLED", label: "Cancelled" }
    ];
  }
  ngOnInit() {
    this.loadBookings();
  }
  loadBookings() {
    this.loading.set(true);
    this.api.getAllBookings(this.filterFrom || void 0, this.filterTo || void 0).subscribe({
      next: (bookings) => {
        this.allBookings.set(bookings);
        this.filterBookings();
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  filterBookings() {
    const bookings = this.activeStatus === "ALL" ? this.allBookings() : this.allBookings().filter((b) => b.status === this.activeStatus);
    this.displayedBookings.set(bookings);
  }
  getCount(status) {
    return status === "ALL" ? this.allBookings().length : this.allBookings().filter((b) => b.status === status).length;
  }
  updateStatus(id, status) {
    this.api.updateBookingStatus(id, status).subscribe({
      next: (updated) => {
        this.allBookings.update((list) => list.map((b) => b.id === id ? updated : b));
        this.filterBookings();
      }
    });
  }
  statusBadgeClass(status) {
    return {
      PENDING: "bg-yellow-100 text-yellow-700",
      CONFIRMED: "bg-blue-100 text-blue-700",
      COMPLETED: "bg-green-100 text-green-700",
      CANCELLED: "bg-red-100 text-red-700"
    }[status] ?? "bg-gray-100 text-gray-600";
  }
  statusActions(status) {
    if (status === "PENDING")
      return [
        { label: "Confirm", nextStatus: "CONFIRMED", btnClass: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
        { label: "Cancel", nextStatus: "CANCELLED", btnClass: "bg-red-100 text-red-700 hover:bg-red-200" }
      ];
    if (status === "CONFIRMED")
      return [
        { label: "Complete", nextStatus: "COMPLETED", btnClass: "bg-green-100 text-green-700 hover:bg-green-200" },
        { label: "Cancel", nextStatus: "CANCELLED", btnClass: "bg-red-100 text-red-700 hover:bg-red-200" }
      ];
    return [];
  }
  static {
    this.\u0275fac = function AdminBookingsComponent_Factory(t) {
      return new (t || _AdminBookingsComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminBookingsComponent, selectors: [["app-admin-bookings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 3, consts: [[1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4", "mb-6"], [1, "text-2xl", "font-serif", "font-bold", "text-gray-800"], [1, "text-gray-500", "text-sm"], [1, "flex", "items-center", "gap-3"], ["type", "date", 1, "form-input", "py-2", "text-sm", 3, "ngModelChange", "change", "ngModel"], [1, "text-gray-400"], [1, "flex", "gap-2", "mb-6", "flex-wrap"], [1, "px-4", "py-2", "rounded-full", "text-sm", "font-medium", "transition-all", 3, "class"], [1, "card", "overflow-hidden"], [1, "overflow-x-auto"], [1, "w-full"], [1, "bg-gray-50", "border-b", "border-gray-100"], [1, "text-left", "px-5", "py-4", "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wide"], [1, "text-right", "px-5", "py-4", "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wide"], [1, "text-center", "px-5", "py-4", "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wide"], [1, "px-5", "py-4"], [1, "divide-y", "divide-gray-50"], [1, "px-4", "py-2", "rounded-full", "text-sm", "font-medium", "transition-all", 3, "click"], [1, "h-4", "shimmer", "rounded", "w-full"], ["colspan", "7", 1, "text-center", "py-16", "text-gray-400"], [1, "text-4xl", "mb-3"], [1, "hover:bg-gray-50", "transition-colors"], [1, "font-mono", "text-xs", "text-sakura-600", "font-bold"], [1, "font-medium", "text-gray-800", "text-sm"], [1, "text-xs", "text-gray-400"], [1, "px-5", "py-4", "text-sm", "text-gray-600"], [1, "text-sm", "text-gray-700"], [1, "px-5", "py-4", "text-right"], [1, "text-sm", "font-semibold", "text-gray-800"], [1, "text-xs"], [1, "px-5", "py-4", "text-center"], [1, "badge", "text-xs"], [1, "flex", "items-center", "gap-1"], [1, "text-xs", "px-2", "py-1", "rounded-lg", "transition-colors", 3, "class"], [1, "text-xs", "px-2", "py-1", "rounded-lg", "transition-colors", 3, "click"]], template: function AdminBookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div")(3, "h1", 1);
        \u0275\u0275text(4, "Bookings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Manage all photoshoot reservations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3)(8, "input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function AdminBookingsComponent_Template_input_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterFrom, $event) || (ctx.filterFrom = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AdminBookingsComponent_Template_input_change_8_listener() {
          return ctx.loadBookings();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 5);
        \u0275\u0275text(10, "to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 4);
        \u0275\u0275twoWayListener("ngModelChange", function AdminBookingsComponent_Template_input_ngModelChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterTo, $event) || (ctx.filterTo = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AdminBookingsComponent_Template_input_change_11_listener() {
          return ctx.loadBookings();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 6);
        \u0275\u0275repeaterCreate(13, AdminBookingsComponent_For_14_Template, 2, 4, "button", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "table", 10)(18, "thead", 11)(19, "tr")(20, "th", 12);
        \u0275\u0275text(21, "Code");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "th", 12);
        \u0275\u0275text(23, "Customer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "th", 12);
        \u0275\u0275text(25, "Package");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "th", 12);
        \u0275\u0275text(27, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "th", 13);
        \u0275\u0275text(29, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th", 14);
        \u0275\u0275text(31, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "th", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "tbody", 16);
        \u0275\u0275template(34, AdminBookingsComponent_Conditional_34_Template, 2, 1)(35, AdminBookingsComponent_Conditional_35_Template, 6, 0)(36, AdminBookingsComponent_Conditional_36_Template, 2, 0);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterFrom);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterTo);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.statusTabs);
        \u0275\u0275advance(21);
        \u0275\u0275conditional(34, ctx.loading() ? 34 : ctx.displayedBookings().length === 0 ? 35 : 36);
      }
    }, dependencies: [CommonModule, DecimalPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminBookingsComponent, { className: "AdminBookingsComponent" });
})();
export {
  AdminBookingsComponent
};
//# sourceMappingURL=chunk-UOOM74MY.js.map

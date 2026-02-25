import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CZVPSPMY.js";
import {
  ApiService,
  CommonModule,
  computed,
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
  ɵɵproperty,
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

// src/app/admin/slots/slots.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => [1, 2, 3, 4, 5];
function AdminSlotsComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pkg_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", pkg_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pkg_r1.name);
  }
}
function AdminSlotsComponent_Conditional_29_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function AdminSlotsComponent_Conditional_29_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteAll());
    });
    \u0275\u0275text(1, " Delete All in View ");
    \u0275\u0275elementEnd();
  }
}
function AdminSlotsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 16);
    \u0275\u0275text(2, " Total: ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6, " Available: ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 18);
    \u0275\u0275text(10, " Blocked: ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 19);
    \u0275\u0275text(14, " Full: ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, AdminSlotsComponent_Conditional_29_Conditional_17_Template, 2, 0, "button", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.slots().length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.availableCount());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.blockedCount());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.fullCount());
    \u0275\u0275advance();
    \u0275\u0275conditional(17, ctx_r2.slots().length > 0 ? 17 : -1);
  }
}
function AdminSlotsComponent_Conditional_31_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275element(2, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275element(4, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 25);
    \u0275\u0275element(6, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 25);
    \u0275\u0275element(8, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 25);
    \u0275\u0275element(10, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 25);
    \u0275\u0275element(12, "div", 30);
    \u0275\u0275elementEnd()();
  }
}
function AdminSlotsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 14)(1, "thead", 22)(2, "tr")(3, "th", 23);
    \u0275\u0275text(4, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 23);
    \u0275\u0275text(6, "Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 23);
    \u0275\u0275text(8, "Max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 23);
    \u0275\u0275text(10, "Booked");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 23);
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 23);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody", 24);
    \u0275\u0275repeaterCreate(16, AdminSlotsComponent_Conditional_31_For_17_Template, 13, 0, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(16);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AdminSlotsComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p", 32);
    \u0275\u0275text(2, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4, "Select a package and date range, then click Load Slots");
    \u0275\u0275elementEnd()();
  }
}
function AdminSlotsComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p", 32);
    \u0275\u0275text(2, "\u23F0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4, "No slots found \u2014 use Generate Slots to create some");
    \u0275\u0275elementEnd()();
  }
}
function AdminSlotsComponent_Conditional_34_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 34)(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 25)(10, "span", 38);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 25)(13, "div", 39)(14, "button", 40);
    \u0275\u0275listener("click", function AdminSlotsComponent_Conditional_34_For_17_Template_button_click_14_listener() {
      const slot_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleBlock(slot_r5));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 41);
    \u0275\u0275listener("click", function AdminSlotsComponent_Conditional_34_For_17_Template_button_click_16_listener() {
      const slot_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteSingle(slot_r5));
    });
    \u0275\u0275text(17, " Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const slot_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(slot_r5.slotDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", slot_r5.startTime.slice(0, 5), " \u2013 ", slot_r5.endTime.slice(0, 5), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r5.maxBookings);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r5.currentBookings);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.statusClass(slot_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabel(slot_r5), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(slot_r5.blocked ? "border-green-200 text-green-700 hover:bg-green-50" : "border-orange-200 text-orange-700 hover:bg-orange-50");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slot_r5.blocked ? "Unblock" : "Block", " ");
  }
}
function AdminSlotsComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 14)(1, "thead", 22)(2, "tr")(3, "th", 23);
    \u0275\u0275text(4, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 23);
    \u0275\u0275text(6, "Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 23);
    \u0275\u0275text(8, "Max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 23);
    \u0275\u0275text(10, "Booked");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 23);
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 23);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody", 24);
    \u0275\u0275repeaterCreate(16, AdminSlotsComponent_Conditional_34_For_17_Template, 18, 11, "tr", 34, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.slots());
  }
}
function AdminSlotsComponent_Conditional_35_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pkg_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", pkg_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pkg_r7.name);
  }
}
function AdminSlotsComponent_Conditional_35_For_37_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function AdminSlotsComponent_Conditional_35_For_37_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const i_r11 = \u0275\u0275nextContext().$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeTimeSlot(i_r11));
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function AdminSlotsComponent_Conditional_35_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSlotsComponent_Conditional_35_For_37_Template_input_ngModelChange_1_listener($event) {
      const ts_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(ts_r9.startTime, $event) || (ts_r9.startTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 57);
    \u0275\u0275text(3, "\u2013");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSlotsComponent_Conditional_35_For_37_Template_input_ngModelChange_4_listener($event) {
      const ts_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(ts_r9.endTime, $event) || (ts_r9.endTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminSlotsComponent_Conditional_35_For_37_Conditional_5_Template, 2, 0, "button", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ts_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ts_r9.startTime);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ts_r9.endTime);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, ctx_r2.genForm.timeSlots.length > 1 ? 5 : -1);
  }
}
function AdminSlotsComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function AdminSlotsComponent_Conditional_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showGenerate.set(false));
    });
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275listener("click", function AdminSlotsComponent_Conditional_35_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 0)(3, "h2", 44);
    \u0275\u0275text(4, "Generate Slots");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function AdminSlotsComponent_Conditional_35_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showGenerate.set(false));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 46)(8, "div")(9, "label", 7);
    \u0275\u0275text(10, "Package *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSlotsComponent_Conditional_35_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.genForm.packageId, $event) || (ctx_r2.genForm.packageId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 9);
    \u0275\u0275text(13, "\u2014 Select package \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, AdminSlotsComponent_Conditional_35_For_15_Template, 2, 2, "option", 9, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 47)(17, "div")(18, "label", 7);
    \u0275\u0275text(19, "From *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSlotsComponent_Conditional_35_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.genForm.from, $event) || (ctx_r2.genForm.from = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "label", 7);
    \u0275\u0275text(23, "To *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSlotsComponent_Conditional_35_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.genForm.to, $event) || (ctx_r2.genForm.to = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div")(26, "label", 7);
    \u0275\u0275text(27, "Max Bookings per Slot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function AdminSlotsComponent_Conditional_35_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.genForm.maxBookings, $event) || (ctx_r2.genForm.maxBookings = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "div", 49)(31, "label", 50);
    \u0275\u0275text(32, "Time Slots *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 51);
    \u0275\u0275listener("click", function AdminSlotsComponent_Conditional_35_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addTimeSlot());
    });
    \u0275\u0275text(34, " + Add time slot ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 52);
    \u0275\u0275repeaterCreate(36, AdminSlotsComponent_Conditional_35_For_37_Template, 6, 3, "div", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 53)(39, "button", 54);
    \u0275\u0275listener("click", function AdminSlotsComponent_Conditional_35_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.generate());
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 55);
    \u0275\u0275listener("click", function AdminSlotsComponent_Conditional_35_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showGenerate.set(false));
    });
    \u0275\u0275text(42, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.genForm.packageId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.packages());
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.genForm.from);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.genForm.to);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.genForm.maxBookings);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r2.genForm.timeSlots);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.generating() || !ctx_r2.genForm.packageId || !ctx_r2.genForm.from || !ctx_r2.genForm.to || ctx_r2.genForm.timeSlots.length === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.generating() ? "Generating..." : "Generate", " ");
  }
}
var AdminSlotsComponent = class _AdminSlotsComponent {
  constructor(api) {
    this.api = api;
    this.packages = signal([]);
    this.slots = signal([]);
    this.loading = signal(false);
    this.generating = signal(false);
    this.showGenerate = signal(false);
    this.hasSearched = signal(false);
    this.filter = { packageId: null, from: "", to: "" };
    this.genForm = this.defaultGenForm();
    this.availableCount = computed(() => this.slots().filter((s) => !s.blocked && s.currentBookings < s.maxBookings).length);
    this.blockedCount = computed(() => this.slots().filter((s) => s.blocked).length);
    this.fullCount = computed(() => this.slots().filter((s) => !s.blocked && s.currentBookings >= s.maxBookings).length);
  }
  ngOnInit() {
    this.api.getPackages().subscribe((pkgs) => this.packages.set(pkgs));
    const today = /* @__PURE__ */ new Date();
    this.filter.from = this.toDateString(today);
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    this.filter.to = this.toDateString(nextWeek);
  }
  loadSlots() {
    if (!this.filter.packageId || !this.filter.from || !this.filter.to)
      return;
    this.loading.set(true);
    this.hasSearched.set(true);
    this.api.getAdminSlots(this.filter.packageId, this.filter.from, this.filter.to).subscribe({
      next: (slots) => {
        this.slots.set(slots);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  toggleBlock(slot) {
    this.api.blockSlot(slot.id, !slot.blocked).subscribe({
      next: (updated) => this.slots.update((list) => list.map((s) => s.id === updated.id ? updated : s))
    });
  }
  deleteSingle(slot) {
    if (!confirm(`Delete slot on ${slot.slotDate} at ${slot.startTime.slice(0, 5)}?`))
      return;
    this.api.deleteSlot(slot.id).subscribe({
      next: () => this.slots.update((list) => list.filter((s) => s.id !== slot.id))
    });
  }
  deleteAll() {
    if (!this.filter.packageId)
      return;
    const count = this.slots().length;
    if (!confirm(`Delete all ${count} slots in this view?`))
      return;
    this.api.deleteSlotRange(this.filter.packageId, this.filter.from, this.filter.to).subscribe({
      next: () => this.slots.set([])
    });
  }
  generate() {
    if (!this.genForm.packageId)
      return;
    this.generating.set(true);
    this.api.generateSlots({
      packageId: this.genForm.packageId,
      from: this.genForm.from,
      to: this.genForm.to,
      timeSlots: this.genForm.timeSlots,
      maxBookings: this.genForm.maxBookings
    }).subscribe({
      next: () => {
        this.generating.set(false);
        this.showGenerate.set(false);
        this.genForm = this.defaultGenForm();
        if (this.filter.packageId)
          this.loadSlots();
      },
      error: () => this.generating.set(false)
    });
  }
  addTimeSlot() {
    this.genForm.timeSlots.push({ startTime: "", endTime: "" });
  }
  removeTimeSlot(index) {
    this.genForm.timeSlots.splice(index, 1);
  }
  statusLabel(slot) {
    if (slot.blocked)
      return "Blocked";
    if (slot.currentBookings >= slot.maxBookings)
      return "Full";
    return "Available";
  }
  statusClass(slot) {
    if (slot.blocked)
      return "bg-red-100 text-red-700";
    if (slot.currentBookings >= slot.maxBookings)
      return "bg-orange-100 text-orange-700";
    return "bg-green-100 text-green-700";
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  }
  toDateString(d) {
    return d.toISOString().slice(0, 10);
  }
  defaultGenForm() {
    return {
      packageId: null,
      from: "",
      to: "",
      maxBookings: 1,
      timeSlots: [{ startTime: "", endTime: "" }]
    };
  }
  static {
    this.\u0275fac = function AdminSlotsComponent_Factory(t) {
      return new (t || _AdminSlotsComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSlotsComponent, selectors: [["app-admin-slots"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 8, consts: [[1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-2xl", "font-serif", "font-bold", "text-gray-800"], [1, "text-gray-500", "text-sm"], [1, "btn-primary", "text-sm", 3, "click"], [1, "card", "p-4", "mb-6"], [1, "flex", "flex-wrap", "items-end", "gap-4"], [1, "flex-1", "min-w-[200px]"], [1, "form-label"], [1, "form-input", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "btn-primary", "text-sm", "px-6", "py-2.5", 3, "click", "disabled"], [1, "flex", "gap-3", "mb-4"], [1, "card", "overflow-hidden"], [1, "w-full"], [1, "fixed", "inset-0", "bg-black/60", "backdrop-blur-sm", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "badge", "bg-gray-100", "text-gray-700", "px-3", "py-1.5", "text-sm"], [1, "badge", "bg-green-100", "text-green-700", "px-3", "py-1.5", "text-sm"], [1, "badge", "bg-red-100", "text-red-700", "px-3", "py-1.5", "text-sm"], [1, "badge", "bg-orange-100", "text-orange-700", "px-3", "py-1.5", "text-sm"], [1, "ml-auto", "text-sm", "px-4", "py-1.5", "rounded-full", "border-2", "border-red-200", "text-red-600", "hover:bg-red-50", "transition-all"], [1, "ml-auto", "text-sm", "px-4", "py-1.5", "rounded-full", "border-2", "border-red-200", "text-red-600", "hover:bg-red-50", "transition-all", 3, "click"], [1, "bg-gray-50", "border-b", "border-gray-100"], [1, "px-4", "py-3", "text-left", "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wide"], [1, "divide-y", "divide-gray-50"], [1, "px-4", "py-3"], [1, "h-4", "shimmer", "rounded", "w-24"], [1, "h-4", "shimmer", "rounded", "w-28"], [1, "h-4", "shimmer", "rounded", "w-8"], [1, "h-5", "shimmer", "rounded-full", "w-20"], [1, "h-7", "shimmer", "rounded-full", "w-32"], [1, "py-16", "text-center", "text-gray-400"], [1, "text-3xl", "mb-2"], [1, "font-medium"], [1, "hover:bg-gray-50", "transition-colors"], [1, "px-4", "py-3", "text-sm", "text-gray-700", "font-medium"], [1, "px-4", "py-3", "text-sm", "text-gray-600", "font-mono"], [1, "px-4", "py-3", "text-sm", "text-gray-600"], [1, "badge", "text-xs", "px-2.5", "py-1", "rounded-full", "font-medium"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "px-3", "py-1.5", "rounded-full", "border", "transition-all", 3, "click"], [1, "text-xs", "px-3", "py-1.5", "rounded-full", "border", "border-red-200", "text-red-600", "hover:bg-red-50", "transition-all", 3, "click"], [1, "fixed", "inset-0", "bg-black/60", "backdrop-blur-sm", "z-50", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "bg-white", "rounded-2xl", "max-w-lg", "w-full", "max-h-[90vh]", "overflow-y-auto", "p-8", 3, "click"], [1, "text-xl", "font-serif", "font-bold", "text-gray-800"], [1, "text-gray-400", "hover:text-gray-600", "text-2xl", 3, "click"], [1, "space-y-4"], [1, "grid", "grid-cols-2", "gap-4"], ["type", "number", "min", "1", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "form-label", "mb-0"], [1, "text-xs", "text-sakura-600", "hover:text-sakura-700", "font-medium", 3, "click"], [1, "space-y-2"], [1, "flex", "gap-3", "pt-2"], [1, "btn-primary", "flex-1", 3, "click", "disabled"], [1, "btn-secondary", "px-6", 3, "click"], ["type", "time", "placeholder", "Start", 1, "form-input", "flex-1", 3, "ngModelChange", "ngModel"], [1, "text-gray-400", "text-sm"], ["type", "time", "placeholder", "End", 1, "form-input", "flex-1", 3, "ngModelChange", "ngModel"], [1, "text-red-400", "hover:text-red-600", "text-lg", "leading-none", "px-1"], [1, "text-red-400", "hover:text-red-600", "text-lg", "leading-none", "px-1", 3, "click"]], template: function AdminSlotsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div")(3, "h1", 1);
        \u0275\u0275text(4, "Slots Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Create and manage time slots per package");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function AdminSlotsComponent_Template_button_click_7_listener() {
          return ctx.showGenerate.set(true);
        });
        \u0275\u0275text(8, "+ Generate Slots");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "div", 6)(12, "label", 7);
        \u0275\u0275text(13, "Package");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function AdminSlotsComponent_Template_select_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filter.packageId, $event) || (ctx.filter.packageId = $event);
          return $event;
        });
        \u0275\u0275elementStart(15, "option", 9);
        \u0275\u0275text(16, "\u2014 Select package \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(17, AdminSlotsComponent_For_18_Template, 2, 2, "option", 9, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div")(20, "label", 7);
        \u0275\u0275text(21, "From");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function AdminSlotsComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filter.from, $event) || (ctx.filter.from = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div")(24, "label", 7);
        \u0275\u0275text(25, "To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function AdminSlotsComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filter.to, $event) || (ctx.filter.to = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "button", 11);
        \u0275\u0275listener("click", function AdminSlotsComponent_Template_button_click_27_listener() {
          return ctx.loadSlots();
        });
        \u0275\u0275text(28, " Load Slots ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(29, AdminSlotsComponent_Conditional_29_Template, 18, 5, "div", 12);
        \u0275\u0275elementStart(30, "div", 13);
        \u0275\u0275template(31, AdminSlotsComponent_Conditional_31_Template, 18, 1, "table", 14)(32, AdminSlotsComponent_Conditional_32_Template, 5, 0)(33, AdminSlotsComponent_Conditional_33_Template, 5, 0)(34, AdminSlotsComponent_Conditional_34_Template, 18, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, AdminSlotsComponent_Conditional_35_Template, 43, 7, "div", 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275twoWayProperty("ngModel", ctx.filter.packageId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.packages());
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.filter.from);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filter.to);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.filter.packageId || !ctx.filter.from || !ctx.filter.to);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(29, ctx.hasSearched() ? 29 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(31, ctx.loading() ? 31 : !ctx.hasSearched() ? 32 : ctx.slots().length === 0 ? 33 : 34);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(35, ctx.showGenerate() ? 35 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSlotsComponent, { className: "AdminSlotsComponent" });
})();
export {
  AdminSlotsComponent
};
//# sourceMappingURL=chunk-VJJNMM4F.js.map

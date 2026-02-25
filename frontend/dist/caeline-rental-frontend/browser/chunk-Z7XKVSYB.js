import {
  FooterComponent,
  NavbarComponent
} from "./chunk-MBRMA4QR.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-CZVPSPMY.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-UWOFIVKC.js";
import {
  ApiService,
  CommonModule,
  DecimalPipe,
  computed,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LMTSQMYK.js";

// src/app/pages/booking/booking.component.ts
var _forTrack0 = ($index, $item) => $item.num;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.value;
var _c0 = () => [1, 2, 3, 4];
function BookingComponent_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
  if (rf & 2) {
    const step_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.currentStep() > step_r1.num ? "bg-sakura-400" : "bg-gray-200");
  }
}
function BookingComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 10)(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, BookingComponent_For_12_Conditional_6_Template, 1, 2, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const \u0275$index_20_r3 = ctx.$index;
    const \u0275$count_20_r4 = ctx.$count;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.currentStep() >= step_r1.num ? "bg-sakura-500 text-white shadow-lg shadow-sakura-200" : "bg-white border-2 border-gray-200 text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentStep() > step_r1.num ? "\u2713" : step_r1.num, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.currentStep() >= step_r1.num ? "text-sakura-600" : "text-gray-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(6, !(\u0275$index_20_r3 === \u0275$count_20_r4 - 1) ? 6 : -1);
  }
}
function BookingComponent_Conditional_13_For_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 30);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd()();
  }
}
function BookingComponent_Conditional_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function BookingComponent_Conditional_13_For_5_Template_div_click_0_listener() {
      const pkg_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectPackage(pkg_r7));
    });
    \u0275\u0275elementStart(1, "div", 21)(2, "div", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23)(5, "h3", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 26)(10, "span", 27);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 28);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, BookingComponent_Conditional_13_For_5_Conditional_15_Template, 3, 0, "div", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pkg_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.selectedPackageId() === pkg_r7.id ? "border-sakura-400 bg-sakura-50 shadow-md" : "border-gray-100 hover:border-sakura-200");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.conceptGradient(pkg_r7.conceptType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.conceptEmoji(pkg_r7.conceptType), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pkg_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pkg_r7.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 10, pkg_r7.price), "\u0111");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u23F1 ", pkg_r7.durationHours, "h");
    \u0275\u0275advance();
    \u0275\u0275conditional(15, ctx_r1.selectedPackageId() === pkg_r7.id ? 15 : -1);
  }
}
function BookingComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "h2", 15);
    \u0275\u0275text(2, "Step 1: Choose a Concept Package");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275repeaterCreate(4, BookingComponent_Conditional_13_For_5_Template, 16, 12, "div", 17, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18)(7, "button", 19);
    \u0275\u0275listener("click", function BookingComponent_Conditional_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(8, " Next: Choose Outfit \u2192 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.packages());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("opacity-50", !ctx_r1.selectedPackageId());
    \u0275\u0275property("disabled", !ctx_r1.selectedPackageId());
  }
}
function BookingComponent_Conditional_14_For_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
  }
  if (rf & 2) {
    const outfit_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", outfit_r10.images[0].imageUrl, \u0275\u0275sanitizeUrl)("alt", outfit_r10.name);
  }
}
function BookingComponent_Conditional_14_For_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "\u{1F458}");
    \u0275\u0275elementEnd();
  }
}
function BookingComponent_Conditional_14_For_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 30);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd()();
  }
}
function BookingComponent_Conditional_14_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function BookingComponent_Conditional_14_For_12_Template_div_click_0_listener() {
      const outfit_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectOutfit(outfit_r10));
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275template(2, BookingComponent_Conditional_14_For_12_Conditional_2_Template, 1, 2, "img", 43)(3, BookingComponent_Conditional_14_For_12_Conditional_3_Template, 2, 0)(4, BookingComponent_Conditional_14_For_12_Conditional_4_Template, 3, 0, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 45)(6, "p", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 47);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const outfit_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.selectedOutfitId() === outfit_r10.id ? "border-sakura-400 shadow-md" : "border-gray-100 hover:border-sakura-200");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", "linear-gradient(135deg, " + (outfit_r10.colorHex || "#fde6ef") + "33, " + (outfit_r10.colorHex || "#fccede") + "66)");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, outfit_r10.images && outfit_r10.images.length > 0 ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, ctx_r1.selectedOutfitId() === outfit_r10.id ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(outfit_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 8, outfit_r10.price), "\u0111");
  }
}
function BookingComponent_Conditional_14_Conditional_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function BookingComponent_Conditional_14_Conditional_13_For_5_Template_button_click_0_listener() {
      const size_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedSize.set(size_r12.sizeLabel));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.selectedSize() === size_r12.sizeLabel ? "border-sakura-500 bg-sakura-500 text-white" : "border-gray-200 text-gray-600 hover:border-sakura-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", size_r12.sizeLabel, " ");
  }
}
function BookingComponent_Conditional_14_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "p", 49);
    \u0275\u0275text(2, "Select Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50);
    \u0275\u0275repeaterCreate(4, BookingComponent_Conditional_14_Conditional_13_For_5_Template, 2, 3, "button", 51, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.selectedOutfitSizes());
  }
}
function BookingComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "h2", 15);
    \u0275\u0275text(2, "Step 2: Select Your Outfit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "div", 32);
    \u0275\u0275listener("click", function BookingComponent_Conditional_14_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedOutfitId.set(null));
    });
    \u0275\u0275elementStart(5, "div", 33);
    \u0275\u0275text(6, "\u{1F3A8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 34);
    \u0275\u0275text(8, "I'll choose on-site");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 35);
    \u0275\u0275text(10, "Browse all options when you arrive");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(11, BookingComponent_Conditional_14_For_12_Template, 11, 10, "div", 36, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, BookingComponent_Conditional_14_Conditional_13_Template, 6, 0, "div", 37);
    \u0275\u0275elementStart(14, "div", 38)(15, "button", 39);
    \u0275\u0275listener("click", function BookingComponent_Conditional_14_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275text(16, "\u2190 Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 40);
    \u0275\u0275listener("click", function BookingComponent_Conditional_14_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(18, "Next: Choose Date \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.selectedOutfitId() === null ? "border-sakura-400 bg-sakura-50" : "border-gray-100 hover:border-sakura-200");
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.availableOutfits());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(13, ctx_r1.selectedOutfitId() && ctx_r1.selectedOutfitSizes().length > 0 ? 13 : -1);
  }
}
function BookingComponent_Conditional_15_Conditional_7_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 64);
  }
}
function BookingComponent_Conditional_15_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275repeaterCreate(1, BookingComponent_Conditional_15_Conditional_7_Conditional_3_For_2_Template, 1, 0, "div", 64, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function BookingComponent_Conditional_15_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "p", 5);
    \u0275\u0275text(2, "No available slots for this date. Please try another date.");
    \u0275\u0275elementEnd()();
  }
}
function BookingComponent_Conditional_15_Conditional_7_Conditional_5_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1, "(Full)");
    \u0275\u0275elementEnd();
  }
}
function BookingComponent_Conditional_15_Conditional_7_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function BookingComponent_Conditional_15_Conditional_7_Conditional_5_For_2_Template_button_click_0_listener() {
      const slot_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectSlot(slot_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275template(2, BookingComponent_Conditional_15_Conditional_7_Conditional_5_For_2_Conditional_2_Template, 2, 0, "span", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(!slot_r15.available ? "border-gray-200 text-gray-300 cursor-not-allowed" : ctx_r1.selectedSlotId() === slot_r15.id ? "border-sakura-500 bg-sakura-500 text-white shadow-md" : "border-gray-200 text-gray-700 hover:border-sakura-300");
    \u0275\u0275property("disabled", !slot_r15.available);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", slot_r15.startTime, " \u2013 ", slot_r15.endTime, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, !slot_r15.available ? 2 : -1);
  }
}
function BookingComponent_Conditional_15_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275repeaterCreate(1, BookingComponent_Conditional_15_Conditional_7_Conditional_5_For_2_Template, 3, 6, "button", 67, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.timeSlots());
  }
}
function BookingComponent_Conditional_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "p", 49);
    \u0275\u0275text(2, "Available Time Slots");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, BookingComponent_Conditional_15_Conditional_7_Conditional_3_Template, 3, 1, "div", 63)(4, BookingComponent_Conditional_15_Conditional_7_Conditional_4_Template, 3, 0)(5, BookingComponent_Conditional_15_Conditional_7_Conditional_5_Template, 3, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(3, ctx_r1.slotsLoading() ? 3 : ctx_r1.timeSlots().length === 0 ? 4 : 5);
  }
}
function BookingComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "h2", 15);
    \u0275\u0275text(2, "Step 3: Choose Date & Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 53)(4, "label", 49);
    \u0275\u0275text(5, "Booking Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_Conditional_15_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bookingDate, $event) || (ctx_r1.bookingDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function BookingComponent_Conditional_15_Template_input_change_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadTimeSlots());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, BookingComponent_Conditional_15_Conditional_7_Template, 6, 1, "div", 53);
    \u0275\u0275elementStart(8, "div", 55)(9, "h3", 56);
    \u0275\u0275text(10, "Optional Add-ons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 57)(12, "label", 58)(13, "div", 59)(14, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_Conditional_15_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.includesPhotographer, $event) || (ctx_r1.includesPhotographer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "p", 61);
    \u0275\u0275text(17, "\u{1F4F8} Professional Photographer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 62);
    \u0275\u0275text(19, "Captures every magical moment");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "span", 27);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "label", 58)(24, "div", 59)(25, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_Conditional_15_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.includesMakeup, $event) || (ctx_r1.includesMakeup = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "p", 61);
    \u0275\u0275text(28, "\u{1F484} Hair & Makeup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 62);
    \u0275\u0275text(30, "Professional styling to complete your look");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "span", 27);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 38)(35, "button", 39);
    \u0275\u0275listener("click", function BookingComponent_Conditional_15_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275text(36, "\u2190 Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 19);
    \u0275\u0275listener("click", function BookingComponent_Conditional_15_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(38, " Next: Your Details \u2192 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bookingDate);
    \u0275\u0275property("min", ctx_r1.minDate);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, ctx_r1.bookingDate ? 7 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.includesPhotographer);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind1(22, 10, (tmp_5_0 = ctx_r1.selectedPackage()) == null ? null : tmp_5_0.photographerFee), "\u0111");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.includesMakeup);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind1(33, 12, (tmp_7_0 = ctx_r1.selectedPackage()) == null ? null : tmp_7_0.makeupFee), "\u0111");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("opacity-50", !ctx_r1.bookingDate || !ctx_r1.selectedSlotId());
    \u0275\u0275property("disabled", !ctx_r1.bookingDate || !ctx_r1.selectedSlotId());
  }
}
function BookingComponent_Conditional_16_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("click", function BookingComponent_Conditional_16_For_25_Template_div_click_0_listener() {
      const method_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.paymentMethod = method_r18.value);
    });
    \u0275\u0275elementStart(1, "div", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const method_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.paymentMethod === method_r18.value ? "border-sakura-400 bg-sakura-50" : "border-gray-100 hover:border-sakura-200");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r18.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r18.label);
  }
}
function BookingComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "h2", 15);
    \u0275\u0275text(2, "Step 4: Your Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70)(4, "div")(5, "label", 49);
    \u0275\u0275text(6, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_Conditional_16_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.customerName, $event) || (ctx_r1.customerName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "label", 49);
    \u0275\u0275text(10, "Phone Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_Conditional_16_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.customerPhone, $event) || (ctx_r1.customerPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 73)(13, "label", 49);
    \u0275\u0275text(14, "Email Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_Conditional_16_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.customerEmail, $event) || (ctx_r1.customerEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 73)(17, "label", 49);
    \u0275\u0275text(18, "Special Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 75);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_Conditional_16_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.specialRequests, $event) || (ctx_r1.specialRequests = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 53)(21, "label", 49);
    \u0275\u0275text(22, "Payment Method (30% deposit)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 76);
    \u0275\u0275repeaterCreate(24, BookingComponent_Conditional_16_For_25_Template, 5, 4, "div", 77, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 38)(27, "button", 39);
    \u0275\u0275listener("click", function BookingComponent_Conditional_16_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275text(28, "\u2190 Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 19);
    \u0275\u0275listener("click", function BookingComponent_Conditional_16_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(30, " Review Order \u2192 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customerEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.specialRequests);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.paymentMethods);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("opacity-50", !ctx_r1.customerName || !ctx_r1.customerEmail || !ctx_r1.customerPhone);
    \u0275\u0275property("disabled", !ctx_r1.customerName || !ctx_r1.customerEmail || !ctx_r1.customerPhone);
  }
}
function BookingComponent_Conditional_17_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "span", 83);
    \u0275\u0275text(2, "Outfit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 84);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedOutfitName());
  }
}
function BookingComponent_Conditional_17_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "span");
    \u0275\u0275text(2, "Photographer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind1(5, 1, (tmp_2_0 = ctx_r1.selectedPackage()) == null ? null : tmp_2_0.photographerFee), "\u0111");
  }
}
function BookingComponent_Conditional_17_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "span");
    \u0275\u0275text(2, "Hair & Makeup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind1(5, 1, (tmp_2_0 = ctx_r1.selectedPackage()) == null ? null : tmp_2_0.makeupFee), "\u0111");
  }
}
function BookingComponent_Conditional_17_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.bookingError(), " ");
  }
}
function BookingComponent_Conditional_17_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Processing... ");
  }
}
function BookingComponent_Conditional_17_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Confirm & Pay Deposit \u273F ");
  }
}
function BookingComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 80)(2, "h2", 15);
    \u0275\u0275text(3, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 81)(5, "div", 82)(6, "span", 83);
    \u0275\u0275text(7, "Concept Package");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 84);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, BookingComponent_Conditional_17_Conditional_10_Template, 5, 1, "div", 82);
    \u0275\u0275elementStart(11, "div", 82)(12, "span", 83);
    \u0275\u0275text(13, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 84);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 82)(17, "span", 83);
    \u0275\u0275text(18, "Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 84);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 82)(22, "span", 83);
    \u0275\u0275text(23, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 84);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 85)(27, "div", 86)(28, "span");
    \u0275\u0275text(29, "Package base price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, BookingComponent_Conditional_17_Conditional_33_Template, 6, 3, "div", 86)(34, BookingComponent_Conditional_17_Conditional_34_Template, 6, 3, "div", 86);
    \u0275\u0275elementStart(35, "div", 87)(36, "span");
    \u0275\u0275text(37, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 88);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 89)(42, "span");
    \u0275\u0275text(43, "Required Deposit (30%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(47, BookingComponent_Conditional_17_Conditional_47_Template, 2, 1, "div", 90);
    \u0275\u0275elementStart(48, "button", 91);
    \u0275\u0275listener("click", function BookingComponent_Conditional_17_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitBooking());
    });
    \u0275\u0275template(49, BookingComponent_Conditional_17_Conditional_49_Template, 1, 0)(50, BookingComponent_Conditional_17_Conditional_50_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p", 92);
    \u0275\u0275text(52, " By booking you agree to our cancellation policy. Deposits are non-refundable within 24 hours of the session. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 93)(54, "h3", 56);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 94)(57, "p", 95);
    \u0275\u0275text(58, "Deposit to pay now");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p", 96);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "p", 97);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 98)(66, "p", 99);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "p", 100);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "p", 35);
    \u0275\u0275text(71, "You'll be redirected to complete payment");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_4_0;
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.selectedPackage()) == null ? null : tmp_1_0.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(10, ctx_r1.selectedOutfitId() ? 10 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.bookingDate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", (tmp_4_0 = ctx_r1.selectedSlot()) == null ? null : tmp_4_0.startTime, " \u2013 ", (tmp_4_0 = ctx_r1.selectedSlot()) == null ? null : tmp_4_0.endTime, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.customerName);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(32, 19, (tmp_6_0 = ctx_r1.selectedPackage()) == null ? null : tmp_6_0.price), "\u0111");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(33, ctx_r1.includesPhotographer ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(34, ctx_r1.includesMakeup ? 34 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(40, 21, ctx_r1.totalAmount()), "\u0111");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(46, 23, ctx_r1.depositAmount()), "\u0111");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(47, ctx_r1.bookingError() ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(49, ctx_r1.submitting() ? 49 : 50);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Payment via ", ctx_r1.paymentMethod, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(61, 25, ctx_r1.depositAmount()), "\u0111");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Remaining ", \u0275\u0275pipeBind1(64, 27, ctx_r1.totalAmount() - ctx_r1.depositAmount()), "\u0111 paid on-site");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.paymentMethod === "MOMO" ? "\u{1F49C}" : ctx_r1.paymentMethod === "VNPAY" ? "\u{1F3E7}" : "\u{1F4B5}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.paymentMethod);
  }
}
var BookingComponent = class _BookingComponent {
  get minDate() {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }
  constructor(api, route, router) {
    this.api = api;
    this.route = route;
    this.router = router;
    this.packages = signal([]);
    this.timeSlots = signal([]);
    this.slotsLoading = signal(false);
    this.submitting = signal(false);
    this.bookingError = signal("");
    this.currentStep = signal(1);
    this.selectedPackageId = signal(null);
    this.selectedOutfitId = signal(null);
    this.selectedSlotId = signal(null);
    this.selectedSize = signal("");
    this.bookingDate = "";
    this.includesPhotographer = false;
    this.includesMakeup = false;
    this.customerName = "";
    this.customerEmail = "";
    this.customerPhone = "";
    this.specialRequests = "";
    this.paymentMethod = "MOMO";
    this.steps = [
      { num: 1, label: "Package" },
      { num: 2, label: "Outfit" },
      { num: 3, label: "Date/Time" },
      { num: 4, label: "Details" },
      { num: 5, label: "Confirm" }
    ];
    this.paymentMethods = [
      { value: "MOMO", label: "MoMo", icon: "\u{1F49C}" },
      { value: "VNPAY", label: "VNPay", icon: "\u{1F3E7}" },
      { value: "CASH", label: "Cash on-site", icon: "\u{1F4B5}" }
    ];
    this.selectedPackage = computed(() => this.packages().find((p) => p.id === this.selectedPackageId()) ?? null);
    this.availableOutfits = computed(() => this.selectedPackage()?.outfits ?? []);
    this.selectedOutfitSizes = computed(() => {
      const outfit = this.availableOutfits().find((o) => o.id === this.selectedOutfitId());
      return outfit?.sizes ?? [];
    });
    this.selectedOutfitName = computed(() => this.availableOutfits().find((o) => o.id === this.selectedOutfitId())?.name ?? "");
    this.selectedSlot = computed(() => this.timeSlots().find((s) => s.id === this.selectedSlotId()) ?? null);
    this.totalAmount = computed(() => {
      const pkg = this.selectedPackage();
      if (!pkg)
        return 0;
      let total = pkg.price;
      if (this.includesPhotographer)
        total += pkg.photographerFee;
      if (this.includesMakeup)
        total += pkg.makeupFee;
      return total;
    });
    this.depositAmount = computed(() => Math.ceil(this.totalAmount() * 0.3));
  }
  ngOnInit() {
    this.api.getPackages().subscribe({ next: (p) => this.packages.set(p), error: () => {
    } });
    this.route.queryParams.subscribe((params) => {
      if (params["packageId"])
        this.selectedPackageId.set(+params["packageId"]);
      if (params["outfitId"])
        this.selectedOutfitId.set(+params["outfitId"]);
    });
  }
  selectPackage(pkg) {
    this.selectedPackageId.set(pkg.id);
  }
  selectOutfit(outfit) {
    this.selectedOutfitId.set(outfit.id);
    this.selectedSize.set("");
  }
  selectSlot(slot) {
    if (slot.available)
      this.selectedSlotId.set(slot.id);
  }
  loadTimeSlots() {
    if (!this.selectedPackageId() || !this.bookingDate)
      return;
    this.slotsLoading.set(true);
    this.api.getAvailableSlots(this.selectedPackageId(), this.bookingDate, this.bookingDate).subscribe({
      next: (slots) => {
        this.timeSlots.set(slots);
        this.slotsLoading.set(false);
      },
      error: () => this.slotsLoading.set(false)
    });
  }
  nextStep() {
    if (this.currentStep() < 5)
      this.currentStep.update((s) => s + 1);
  }
  prevStep() {
    if (this.currentStep() > 1)
      this.currentStep.update((s) => s - 1);
  }
  submitBooking() {
    if (!this.selectedPackageId() || !this.selectedSlotId() || !this.bookingDate)
      return;
    this.submitting.set(true);
    this.bookingError.set("");
    const request = {
      customerName: this.customerName,
      customerEmail: this.customerEmail,
      customerPhone: this.customerPhone,
      packageId: this.selectedPackageId(),
      outfitId: this.selectedOutfitId() ?? void 0,
      outfitSize: this.selectedSize() || void 0,
      timeSlotId: this.selectedSlotId(),
      bookingDate: this.bookingDate,
      includesPhotographer: this.includesPhotographer,
      includesMakeup: this.includesMakeup,
      numPeople: 1,
      specialRequests: this.specialRequests || void 0,
      paymentMethod: this.paymentMethod
    };
    this.api.createBooking(request).subscribe({
      next: (booking) => {
        if (this.paymentMethod === "MOMO" || this.paymentMethod === "VNPAY") {
          this.api.initiateMomoPayment(booking.bookingCode).subscribe({
            next: () => this.router.navigate(["/booking/payment-result"], { queryParams: { code: booking.bookingCode, status: "pending" } }),
            error: () => this.router.navigate(["/booking/payment-result"], { queryParams: { code: booking.bookingCode, status: "success" } })
          });
        } else {
          this.router.navigate(["/booking/payment-result"], { queryParams: { code: booking.bookingCode, status: "success" } });
        }
      },
      error: (err) => {
        this.bookingError.set(err.error?.message || "Booking failed. Please try again.");
        this.submitting.set(false);
      }
    });
  }
  conceptGradient(type) {
    const map = {
      SAKURA_DREAM: "linear-gradient(135deg, #fde6ef, #fccede)",
      KYOTO_SUNSET: "linear-gradient(135deg, #fef3c7, #fed7aa)",
      LANTERN_NIGHT: "linear-gradient(135deg, #ede3ff, #fde6ef)",
      ROYAL_VIET_PHUC: "linear-gradient(135deg, #fee2e2, #fecaca)"
    };
    return map[type] ?? "#f3f4f6";
  }
  conceptEmoji(type) {
    return { SAKURA_DREAM: "\u{1F338}", KYOTO_SUNSET: "\u{1F3EE}", LANTERN_NIGHT: "\u{1FA94}", ROYAL_VIET_PHUC: "\u{1F451}" }[type] ?? "\u273F";
  }
  static {
    this.\u0275fac = function BookingComponent_Factory(t) {
      return new (t || _BookingComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingComponent, selectors: [["app-booking"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 5, consts: [[1, "min-h-screen", "bg-gradient-to-br", "from-sakura-50", "to-cream-50", "pt-24", "pb-16"], [1, "container", "mx-auto", "px-4", "max-w-4xl"], [1, "text-center", "mb-10"], [1, "badge-sakura", "mb-3"], [1, "text-4xl", "font-serif", "font-bold", "text-gray-800", "mb-2"], [1, "text-gray-500"], [1, "flex", "items-center", "justify-center", "gap-0", "mb-10"], [1, "flex", "items-center"], [1, "card", "p-8"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], [1, "flex", "flex-col", "items-center"], [1, "w-10", "h-10", "rounded-full", "flex", "items-center", "justify-center", "font-bold", "text-sm", "transition-all", "duration-300"], [1, "text-xs", "mt-1", "font-medium"], [1, "w-16", "md:w-24", "h-0.5", "mt-[-14px]", 3, "class"], [1, "w-16", "md:w-24", "h-0.5", "mt-[-14px]"], [1, "text-2xl", "font-serif", "font-bold", "text-gray-800", "mb-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "border-2", "rounded-2xl", "p-5", "cursor-pointer", "transition-all", "duration-200", "hover:shadow-md", 3, "class"], [1, "mt-8", "flex", "justify-end"], [1, "btn-primary", 3, "click", "disabled"], [1, "border-2", "rounded-2xl", "p-5", "cursor-pointer", "transition-all", "duration-200", "hover:shadow-md", 3, "click"], [1, "flex", "items-start", "gap-4"], [1, "w-16", "h-16", "rounded-xl", "flex", "items-center", "justify-center", "text-3xl", "flex-shrink-0"], [1, "flex-1"], [1, "font-serif", "font-bold", "text-gray-800", "mb-1"], [1, "text-gray-500", "text-sm", "mb-2", "line-clamp-2"], [1, "flex", "items-center", "gap-4", "text-sm"], [1, "text-sakura-600", "font-bold"], [1, "text-gray-400"], [1, "w-6", "h-6", "bg-sakura-500", "rounded-full", "flex", "items-center", "justify-center", "flex-shrink-0"], [1, "text-white", "text-xs"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "gap-4", "mb-6"], [1, "border-2", "rounded-xl", "p-4", "cursor-pointer", "transition-all", "text-center", 3, "click"], [1, "text-4xl", "mb-2"], [1, "text-sm", "font-medium", "text-gray-700"], [1, "text-xs", "text-gray-400", "mt-1"], [1, "border-2", "rounded-xl", "overflow-hidden", "cursor-pointer", "transition-all", 3, "class"], [1, "mb-6", "p-4", "bg-sakura-50", "rounded-xl"], [1, "flex", "justify-between"], [1, "btn-secondary", 3, "click"], [1, "btn-primary", 3, "click"], [1, "border-2", "rounded-xl", "overflow-hidden", "cursor-pointer", "transition-all", 3, "click"], [1, "aspect-[3/4]", "relative"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "absolute", "top-2", "right-2", "w-7", "h-7", "bg-sakura-500", "rounded-full", "flex", "items-center", "justify-center"], [1, "p-3"], [1, "text-sm", "font-semibold", "text-gray-800", "truncate"], [1, "text-xs", "text-sakura-600"], [1, "w-full", "h-full", "flex", "items-center", "justify-center", "text-5xl", "opacity-40"], [1, "form-label"], [1, "flex", "flex-wrap", "gap-2"], [1, "px-4", "py-2", "rounded-full", "border-2", "text-sm", "transition-all", 3, "class"], [1, "px-4", "py-2", "rounded-full", "border-2", "text-sm", "transition-all", 3, "click"], [1, "mb-6"], ["type", "date", 1, "form-input", "max-w-xs", 3, "ngModelChange", "change", "ngModel", "min"], [1, "mb-6", "p-5", "bg-cream-50", "rounded-xl"], [1, "font-semibold", "text-gray-700", "mb-4"], [1, "space-y-3"], [1, "flex", "items-center", "justify-between", "cursor-pointer"], [1, "flex", "items-center", "gap-3"], ["type", "checkbox", 1, "accent-sakura-500", "w-4", "h-4", 3, "ngModelChange", "ngModel"], [1, "font-medium", "text-gray-700"], [1, "text-xs", "text-gray-500"], [1, "flex", "gap-2"], [1, "h-12", "w-28", "shimmer", "rounded-xl"], [1, "text-center", "py-8", "bg-gray-50", "rounded-xl"], [1, "flex", "flex-wrap", "gap-3"], [1, "px-5", "py-3", "rounded-xl", "border-2", "text-sm", "font-medium", "transition-all", 3, "disabled", "class"], [1, "px-5", "py-3", "rounded-xl", "border-2", "text-sm", "font-medium", "transition-all", 3, "click", "disabled"], [1, "ml-1", "text-xs"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-5", "mb-5"], ["type", "text", "placeholder", "Your full name", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "0901 234 567", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "md:col-span-2"], ["type", "email", "placeholder", "you@example.com", 1, "form-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Any special requests or notes...", 1, "form-input", "h-24", "resize-none", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-3", "gap-3"], [1, "border-2", "rounded-xl", "p-4", "cursor-pointer", "text-center", "transition-all", 3, "class"], [1, "border-2", "rounded-xl", "p-4", "cursor-pointer", "text-center", "transition-all", 3, "click"], [1, "text-2xl", "mb-1"], [1, "lg:col-span-2", "card", "p-8"], [1, "space-y-4", "mb-6"], [1, "flex", "justify-between", "py-3", "border-b", "border-gray-100"], [1, "text-gray-600"], [1, "font-semibold"], [1, "pt-2", "space-y-2"], [1, "flex", "justify-between", "text-sm", "text-gray-600"], [1, "flex", "justify-between", "font-bold", "text-lg", "pt-3", "border-t", "border-gray-100"], [1, "text-sakura-600"], [1, "flex", "justify-between", "text-sakura-600", "font-semibold"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "rounded-xl", "px-4", "py-3", "mb-4", "text-sm"], [1, "btn-primary", "w-full", "text-lg", "py-4", 3, "click", "disabled"], [1, "text-xs", "text-gray-400", "text-center", "mt-3"], [1, "card", "p-6", "h-fit", "sticky", "top-24"], [1, "text-center", "py-6"], [1, "text-sm", "text-gray-500", "mb-2"], [1, "text-4xl", "font-bold", "text-sakura-600"], [1, "text-xs", "text-gray-400", "mt-2"], [1, "bg-sakura-50", "rounded-xl", "p-4", "text-center"], [1, "text-2xl", "mb-2"], [1, "text-sm", "text-gray-600", "font-medium"]], template: function BookingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "p", 3);
        \u0275\u0275text(5, "Reserve Your Experience");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1", 4);
        \u0275\u0275text(7, "Book Your Photoshoot");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, "Complete the steps below to reserve your experience");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 6);
        \u0275\u0275repeaterCreate(11, BookingComponent_For_12_Template, 7, 7, "div", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, BookingComponent_Conditional_13_Template, 9, 3, "div", 8)(14, BookingComponent_Conditional_14_Template, 19, 3, "div", 8)(15, BookingComponent_Conditional_15_Template, 39, 14, "div", 8)(16, BookingComponent_Conditional_16_Template, 31, 7, "div", 8)(17, BookingComponent_Conditional_17_Template, 72, 29, "div", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(18, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.steps);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(13, ctx.currentStep() === 1 ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(14, ctx.currentStep() === 2 ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(15, ctx.currentStep() === 3 ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(16, ctx.currentStep() === 4 ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(17, ctx.currentStep() === 5 ? 17 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, NavbarComponent, FooterComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingComponent, { className: "BookingComponent" });
})();
export {
  BookingComponent
};
//# sourceMappingURL=chunk-Z7XKVSYB.js.map

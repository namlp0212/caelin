import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LMTSQMYK.js";

// src/app/admin/outfits/outfits.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.name;
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function AdminOutfitsComponent_Conditional_21_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "div", 16);
    \u0275\u0275element(3, "div", 17)(4, "div", 18);
    \u0275\u0275elementEnd()();
  }
}
function AdminOutfitsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AdminOutfitsComponent_Conditional_21_For_1_Template, 5, 0, "div", 14, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AdminOutfitsComponent_Conditional_22_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const outfit_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", outfit_r2.images[0].imageUrl, \u0275\u0275sanitizeUrl)("alt", outfit_r2.name);
  }
}
function AdminOutfitsComponent_Conditional_22_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, "\u{1F458}");
    \u0275\u0275elementEnd();
  }
}
function AdminOutfitsComponent_Conditional_22_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 37);
    \u0275\u0275text(2, "Unavailable");
    \u0275\u0275elementEnd()();
  }
}
function AdminOutfitsComponent_Conditional_22_For_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 38);
    \u0275\u0275text(2, "\u{1F525} Hot");
    \u0275\u0275elementEnd()();
  }
}
function AdminOutfitsComponent_Conditional_22_For_1_Conditional_25_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r4.sizeLabel);
  }
}
function AdminOutfitsComponent_Conditional_22_For_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275repeaterCreate(1, AdminOutfitsComponent_Conditional_22_For_1_Conditional_25_For_2_Template, 2, 1, "span", 39, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const outfit_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(outfit_r2.sizes.slice(0, 4));
  }
}
function AdminOutfitsComponent_Conditional_22_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275template(2, AdminOutfitsComponent_Conditional_22_For_1_Conditional_2_Template, 1, 2, "img", 21)(3, AdminOutfitsComponent_Conditional_22_For_1_Conditional_3_Template, 2, 0);
    \u0275\u0275elementStart(4, "div", 22)(5, "button", 23);
    \u0275\u0275listener("click", function AdminOutfitsComponent_Conditional_22_For_1_Template_button_click_5_listener() {
      const outfit_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editOutfit(outfit_r2));
    });
    \u0275\u0275text(6, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function AdminOutfitsComponent_Conditional_22_For_1_Template_button_click_7_listener() {
      const outfit_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleAvailability(outfit_r2));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, AdminOutfitsComponent_Conditional_22_For_1_Conditional_9_Template, 3, 0, "div", 25)(10, AdminOutfitsComponent_Conditional_22_For_1_Conditional_10_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 27)(12, "div", 28)(13, "div")(14, "h3", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 30);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 32)(20, "span", 33);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 34);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, AdminOutfitsComponent_Conditional_22_For_1_Conditional_25_Template, 3, 0, "div", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const outfit_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, outfit_r2.images && outfit_r2.images.length > 0 ? 2 : 3);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(outfit_r2.available ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", outfit_r2.available ? "Disable" : "Enable", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(9, !outfit_r2.available ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(10, outfit_r2.trending ? 10 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(outfit_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(outfit_r2.code);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", outfit_r2.colorHex || "#FFB7C5");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 13, outfit_r2.price), "\u0111");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatType(outfit_r2.outfitType));
    \u0275\u0275advance();
    \u0275\u0275conditional(25, outfit_r2.sizes && outfit_r2.sizes.length > 0 ? 25 : -1);
  }
}
function AdminOutfitsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AdminOutfitsComponent_Conditional_22_For_1_Template, 26, 15, "div", 19, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.displayedOutfits());
  }
}
function AdminOutfitsComponent_Conditional_23_Conditional_66_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4CE} ", file_r7.name, " ");
  }
}
function AdminOutfitsComponent_Conditional_23_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275repeaterCreate(1, AdminOutfitsComponent_Conditional_23_Conditional_66_For_2_Template, 2, 1, "div", 71, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selectedFiles);
  }
}
function AdminOutfitsComponent_Conditional_23_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formError(), " ");
  }
}
function AdminOutfitsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function AdminOutfitsComponent_Conditional_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275listener("click", function AdminOutfitsComponent_Conditional_23_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 1)(3, "h2", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 43);
    \u0275\u0275listener("click", function AdminOutfitsComponent_Conditional_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 44);
    \u0275\u0275listener("ngSubmit", function AdminOutfitsComponent_Conditional_23_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveOutfit());
    });
    \u0275\u0275elementStart(8, "div", 45)(9, "div")(10, "label", 46);
    \u0275\u0275text(11, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function AdminOutfitsComponent_Conditional_23_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "label", 46);
    \u0275\u0275text(15, "Code *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function AdminOutfitsComponent_Conditional_23_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.code, $event) || (ctx_r2.form.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 46);
    \u0275\u0275text(19, "Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function AdminOutfitsComponent_Conditional_23_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.outfitType, $event) || (ctx_r2.form.outfitType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(21, "option", 8);
    \u0275\u0275text(22, "Kimono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 9);
    \u0275\u0275text(24, "Yukata");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 10);
    \u0275\u0275text(26, "Viet Phuc");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div")(28, "label", 46);
    \u0275\u0275text(29, "Price (VND) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function AdminOutfitsComponent_Conditional_23_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.price, $event) || (ctx_r2.form.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "label", 46);
    \u0275\u0275text(33, "Color Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function AdminOutfitsComponent_Conditional_23_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.color, $event) || (ctx_r2.form.color = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "label", 46);
    \u0275\u0275text(37, "Color Hex");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 52)(39, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function AdminOutfitsComponent_Conditional_23_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.colorHex, $event) || (ctx_r2.form.colorHex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function AdminOutfitsComponent_Conditional_23_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.colorHex, $event) || (ctx_r2.form.colorHex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div")(42, "label", 46);
    \u0275\u0275text(43, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "textarea", 55);
    \u0275\u0275twoWayListener("ngModelChange", function AdminOutfitsComponent_Conditional_23_Template_textarea_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.description, $event) || (ctx_r2.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 56)(46, "label", 57)(47, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function AdminOutfitsComponent_Conditional_23_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.isTrending, $event) || (ctx_r2.form.isTrending = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 59);
    \u0275\u0275text(49, "Mark as Trending \u{1F525}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "label", 57)(51, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function AdminOutfitsComponent_Conditional_23_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.available, $event) || (ctx_r2.form.available = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 59);
    \u0275\u0275text(53, "Available for Rent");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div")(55, "label", 46);
    \u0275\u0275text(56, "Upload Images");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 61);
    \u0275\u0275listener("click", function AdminOutfitsComponent_Conditional_23_Template_div_click_57_listener() {
      \u0275\u0275restoreView(_r5);
      const fileInput_r6 = \u0275\u0275reference(65);
      return \u0275\u0275resetView(fileInput_r6.click());
    });
    \u0275\u0275elementStart(58, "p", 62);
    \u0275\u0275text(59, "\u{1F4F8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "p", 63);
    \u0275\u0275text(61, "Click to upload images (JPG, PNG)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "p", 64);
    \u0275\u0275text(63, "First image will be the primary photo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "input", 65, 0);
    \u0275\u0275listener("change", function AdminOutfitsComponent_Conditional_23_Template_input_change_64_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFilesSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(66, AdminOutfitsComponent_Conditional_23_Conditional_66_Template, 3, 0, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, AdminOutfitsComponent_Conditional_23_Conditional_67_Template, 2, 1, "div", 67);
    \u0275\u0275elementStart(68, "div", 68)(69, "button", 69);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "button", 70);
    \u0275\u0275listener("click", function AdminOutfitsComponent_Conditional_23_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275text(72, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingOutfit ? "Edit Outfit" : "Add New Outfit", " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.code);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.outfitType);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.color);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.colorHex);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.colorHex);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.description);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.isTrending);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.available);
    \u0275\u0275advance(15);
    \u0275\u0275conditional(66, ctx_r2.selectedFiles.length > 0 ? 66 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(67, ctx_r2.formError() ? 67 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving() ? "Saving..." : ctx_r2.editingOutfit ? "Update Outfit" : "Create Outfit", " ");
  }
}
var AdminOutfitsComponent = class _AdminOutfitsComponent {
  constructor(api) {
    this.api = api;
    this.outfits = signal([]);
    this.displayedOutfits = signal([]);
    this.loading = signal(true);
    this.showForm = signal(false);
    this.saving = signal(false);
    this.formError = signal("");
    this.filterType = "";
    this.searchTerm = "";
    this.editingOutfit = null;
    this.selectedFiles = [];
    this.form = this.defaultForm();
  }
  ngOnInit() {
    this.loadOutfits();
  }
  loadOutfits() {
    this.api.getOutfits().subscribe({
      next: (outfits) => {
        this.outfits.set(outfits);
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  applyFilter() {
    let list = [...this.outfits()];
    if (this.filterType)
      list = list.filter((o) => o.outfitType === this.filterType);
    if (this.searchTerm) {
      const q = this.searchTerm.toLowerCase();
      list = list.filter((o) => o.name.toLowerCase().includes(q) || o.code.toLowerCase().includes(q));
    }
    this.displayedOutfits.set(list);
  }
  editOutfit(outfit) {
    this.editingOutfit = outfit;
    this.form = {
      name: outfit.name,
      code: outfit.code,
      outfitType: outfit.outfitType,
      color: outfit.color,
      colorHex: outfit.colorHex,
      price: outfit.price,
      description: outfit.description,
      isTrending: outfit.trending,
      available: outfit.available
    };
    this.showForm.set(true);
  }
  toggleAvailability(outfit) {
    this.api.updateOutfit(outfit.id, { available: !outfit.available }).subscribe({
      next: (updated) => {
        this.outfits.update((list) => list.map((o) => o.id === outfit.id ? updated : o));
        this.applyFilter();
      }
    });
  }
  onFilesSelected(event) {
    const input = event.target;
    this.selectedFiles = input.files ? Array.from(input.files) : [];
  }
  saveOutfit() {
    this.saving.set(true);
    this.formError.set("");
    if (this.editingOutfit) {
      this.api.updateOutfit(this.editingOutfit.id, this.form).subscribe({
        next: (updated) => {
          this.outfits.update((list) => list.map((o) => o.id === updated.id ? updated : o));
          this.applyFilter();
          this.closeForm();
          this.saving.set(false);
        },
        error: () => {
          this.formError.set("Update failed");
          this.saving.set(false);
        }
      });
    } else {
      const fd = new FormData();
      Object.entries(this.form).forEach(([k, v]) => fd.append(k, String(v)));
      this.selectedFiles.forEach((f) => fd.append("images", f));
      this.api.createOutfit(fd).subscribe({
        next: (created) => {
          this.outfits.update((list) => [created, ...list]);
          this.applyFilter();
          this.closeForm();
          this.saving.set(false);
        },
        error: () => {
          this.formError.set("Create failed");
          this.saving.set(false);
        }
      });
    }
  }
  closeForm() {
    this.showForm.set(false);
    this.editingOutfit = null;
    this.form = this.defaultForm();
    this.selectedFiles = [];
    this.formError.set("");
  }
  defaultForm() {
    return {
      name: "",
      code: "",
      outfitType: "KIMONO",
      color: "",
      colorHex: "#FFB7C5",
      price: 35e4,
      description: "",
      isTrending: false,
      available: true
    };
  }
  formatType(type) {
    return { KIMONO: "Kimono", YUKATA: "Yukata", VIET_PHUC: "Viet Phuc" }[type] ?? type;
  }
  static {
    this.\u0275fac = function AdminOutfitsComponent_Factory(t) {
      return new (t || _AdminOutfitsComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminOutfitsComponent, selectors: [["app-admin-outfits"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 5, consts: [["fileInput", ""], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-2xl", "font-serif", "font-bold", "text-gray-800"], [1, "text-gray-500", "text-sm"], [1, "btn-primary", "text-sm", 3, "click"], [1, "card", "p-4", "mb-6", "flex", "flex-wrap", "gap-3"], [1, "form-input", "py-2", "text-sm", "w-auto", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "KIMONO"], ["value", "YUKATA"], ["value", "VIET_PHUC"], ["type", "text", "placeholder", "Search outfits...", 1, "form-input", "py-2", "text-sm", "flex-1", "min-w-48", 3, "ngModelChange", "input", "ngModel"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-5"], [1, "fixed", "inset-0", "bg-black/60", "backdrop-blur-sm", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "card"], [1, "aspect-[3/4]", "shimmer"], [1, "p-4", "space-y-2"], [1, "h-4", "shimmer", "rounded"], [1, "h-3", "shimmer", "rounded", "w-2/3"], [1, "card", "group"], [1, "aspect-[3/4]", "relative", "overflow-hidden", "bg-gradient-to-br", "from-sakura-50", "to-cream-100"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-black/0", "group-hover:bg-black/40", "transition-colors", "duration-200", "flex", "items-center", "justify-center", "gap-2", "opacity-0", "group-hover:opacity-100"], [1, "bg-white", "text-gray-700", "px-3", "py-1.5", "rounded-lg", "text-xs", "font-medium", "hover:bg-sakura-50", 3, "click"], [1, "px-3", "py-1.5", "rounded-lg", "text-xs", "font-medium", 3, "click"], [1, "absolute", "top-2", "right-2"], [1, "absolute", "top-2", "left-2"], [1, "p-4"], [1, "flex", "items-start", "justify-between", "gap-2"], [1, "font-semibold", "text-gray-800", "text-sm"], [1, "text-xs", "text-gray-400"], [1, "w-5", "h-5", "rounded-full", "border-2", "border-white", "shadow-sm", "flex-shrink-0", "mt-0.5"], [1, "flex", "items-center", "justify-between", "mt-2"], [1, "text-sakura-600", "font-bold", "text-sm"], [1, "badge-sakura", "text-xs"], [1, "flex", "gap-1", "mt-2", "flex-wrap"], [1, "w-full", "h-full", "flex", "items-center", "justify-center", "text-6xl", "opacity-30"], [1, "badge", "bg-red-100", "text-red-600", "text-xs"], [1, "badge", "bg-yellow-100", "text-yellow-700", "text-xs"], [1, "text-xs", "bg-gray-100", "text-gray-500", "px-1.5", "py-0.5", "rounded"], [1, "fixed", "inset-0", "bg-black/60", "backdrop-blur-sm", "z-50", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "bg-white", "rounded-2xl", "max-w-2xl", "w-full", "max-h-[90vh]", "overflow-y-auto", "p-8", 3, "click"], [1, "text-xl", "font-serif", "font-bold", "text-gray-800"], [1, "text-gray-400", "hover:text-gray-600", "text-2xl", 3, "click"], [1, "space-y-5", 3, "ngSubmit"], [1, "grid", "grid-cols-2", "gap-4"], [1, "form-label"], ["name", "name", "required", "", "placeholder", "Outfit name", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "code", "required", "", "placeholder", "KM-001", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "outfitType", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "price", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "color", "placeholder", "Pink", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2"], ["type", "color", "name", "colorHex", 1, "w-12", "h-12", "rounded", "cursor-pointer", "border", "border-gray-200", 3, "ngModelChange", "ngModel"], ["name", "colorHexText", "placeholder", "#FFB7C5", 1, "form-input", "flex-1", 3, "ngModelChange", "ngModel"], ["name", "description", "placeholder", "Outfit description...", 1, "form-input", "h-24", "resize-none", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-6"], [1, "flex", "items-center", "gap-2", "cursor-pointer"], ["type", "checkbox", "name", "isTrending", 1, "accent-sakura-500", "w-4", "h-4", 3, "ngModelChange", "ngModel"], [1, "text-sm", "text-gray-700"], ["type", "checkbox", "name", "available", 1, "accent-sakura-500", "w-4", "h-4", 3, "ngModelChange", "ngModel"], [1, "border-2", "border-dashed", "border-sakura-200", "rounded-xl", "p-6", "text-center", "cursor-pointer", "hover:border-sakura-400", "hover:bg-sakura-50", "transition-colors", 3, "click"], [1, "text-4xl", "mb-2"], [1, "text-sm", "text-gray-500"], [1, "text-xs", "text-gray-400", "mt-1"], ["type", "file", "multiple", "", "accept", "image/*", 1, "hidden", 3, "change"], [1, "flex", "gap-2", "mt-3", "flex-wrap"], [1, "bg-red-50", "border", "border-red-200", "text-red-600", "rounded-xl", "px-4", "py-3", "text-sm"], [1, "flex", "gap-3", "pt-2"], ["type", "submit", 1, "btn-primary", "flex-1", 3, "disabled"], ["type", "button", 1, "btn-secondary", "px-6", 3, "click"], [1, "bg-sakura-50", "border", "border-sakura-200", "rounded-lg", "px-3", "py-1.5", "text-xs", "text-sakura-700", "flex", "items-center", "gap-1"]], template: function AdminOutfitsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Outfit Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function AdminOutfitsComponent_Template_button_click_7_listener() {
          return ctx.showForm.set(true);
        });
        \u0275\u0275text(8, " + Add Outfit ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function AdminOutfitsComponent_Template_select_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterType, $event) || (ctx.filterType = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AdminOutfitsComponent_Template_select_change_10_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementStart(11, "option", 7);
        \u0275\u0275text(12, "All Types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "option", 8);
        \u0275\u0275text(14, "Kimono");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "option", 9);
        \u0275\u0275text(16, "Yukata");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "option", 10);
        \u0275\u0275text(18, "Viet Phuc");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function AdminOutfitsComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("input", function AdminOutfitsComponent_Template_input_input_19_listener() {
          return ctx.applyFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 12);
        \u0275\u0275template(21, AdminOutfitsComponent_Conditional_21_Template, 2, 1)(22, AdminOutfitsComponent_Conditional_22_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, AdminOutfitsComponent_Conditional_23_Template, 73, 15, "div", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.outfits().length, " outfits in catalog");
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterType);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(21, ctx.loading() ? 21 : 22);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(23, ctx.showForm() ? 23 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminOutfitsComponent, { className: "AdminOutfitsComponent" });
})();
export {
  AdminOutfitsComponent
};
//# sourceMappingURL=chunk-SEGPSTEZ.js.map

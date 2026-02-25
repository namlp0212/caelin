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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LMTSQMYK.js";

// src/app/admin/packages/packages.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => [1, 2, 3, 4];
function AdminPackagesComponent_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7)(2, "div", 8)(3, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function AdminPackagesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AdminPackagesComponent_Conditional_10_For_1_Template, 4, 0, "div", 6, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AdminPackagesComponent_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div")(3, "div", 12)(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 16)(11, "span", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "p", 18);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19)(16, "div", 20)(17, "p", 21);
    \u0275\u0275text(18, "Base Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 22);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 23)(23, "p", 21);
    \u0275\u0275text(24, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 24);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 25)(28, "p", 21);
    \u0275\u0275text(29, "Photographer Add-on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 26);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 27)(34, "p", 21);
    \u0275\u0275text(35, "Makeup Add-on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 28);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 29)(40, "button", 30);
    \u0275\u0275listener("click", function AdminPackagesComponent_Conditional_11_For_1_Template_button_click_40_listener() {
      const pkg_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editPkg(pkg_r2));
    });
    \u0275\u0275text(41, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 31);
    \u0275\u0275listener("click", function AdminPackagesComponent_Conditional_11_For_1_Template_button_click_42_listener() {
      const pkg_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleActive(pkg_r2));
    });
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pkg_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.conceptEmoji(pkg_r2.conceptType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pkg_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatType(pkg_r2.conceptType));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(pkg_r2.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pkg_r2.active ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pkg_r2.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 14, pkg_r2.price), "\u0111");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", pkg_r2.durationHours, "h");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind1(32, 16, pkg_r2.photographerFee), "\u0111");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("+", \u0275\u0275pipeBind1(38, 18, pkg_r2.makeupFee), "\u0111");
    \u0275\u0275advance(5);
    \u0275\u0275classMap(pkg_r2.active ? "border-red-200 text-red-600 hover:bg-red-50" : "border-green-200 text-green-600 hover:bg-green-50");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pkg_r2.active ? "Deactivate" : "Activate", " ");
  }
}
function AdminPackagesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AdminPackagesComponent_Conditional_11_For_1_Template, 44, 20, "div", 10, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.packages());
  }
}
function AdminPackagesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function AdminPackagesComponent_Conditional_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275elementStart(1, "div", 33);
    \u0275\u0275listener("click", function AdminPackagesComponent_Conditional_12_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 0)(3, "h2", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 35);
    \u0275\u0275listener("click", function AdminPackagesComponent_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 36);
    \u0275\u0275listener("ngSubmit", function AdminPackagesComponent_Conditional_12_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.savePkg());
    });
    \u0275\u0275elementStart(8, "div", 37)(9, "div", 38)(10, "label", 39);
    \u0275\u0275text(11, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPackagesComponent_Conditional_12_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 38)(14, "label", 39);
    \u0275\u0275text(15, "Slug *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPackagesComponent_Conditional_12_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.slug, $event) || (ctx_r2.form.slug = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 39);
    \u0275\u0275text(19, "Concept Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 42);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPackagesComponent_Conditional_12_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.conceptType, $event) || (ctx_r2.form.conceptType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(21, "option", 43);
    \u0275\u0275text(22, "Sakura Dream");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 44);
    \u0275\u0275text(24, "Kyoto Sunset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 45);
    \u0275\u0275text(26, "Lantern Night");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 46);
    \u0275\u0275text(28, "Royal Viet Phuc");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div")(30, "label", 39);
    \u0275\u0275text(31, "Duration (hours)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPackagesComponent_Conditional_12_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.durationHours, $event) || (ctx_r2.form.durationHours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div")(34, "label", 39);
    \u0275\u0275text(35, "Base Price (VND) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPackagesComponent_Conditional_12_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.price, $event) || (ctx_r2.form.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div")(38, "label", 39);
    \u0275\u0275text(39, "Photographer Fee (VND)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPackagesComponent_Conditional_12_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.photographerFee, $event) || (ctx_r2.form.photographerFee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div")(42, "label", 39);
    \u0275\u0275text(43, "Makeup Fee (VND)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPackagesComponent_Conditional_12_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.makeupFee, $event) || (ctx_r2.form.makeupFee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div")(46, "label", 39);
    \u0275\u0275text(47, "Max Slots/Day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPackagesComponent_Conditional_12_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.maxTimeSlotsPerDay, $event) || (ctx_r2.form.maxTimeSlotsPerDay = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div")(50, "label", 39);
    \u0275\u0275text(51, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "textarea", 52);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPackagesComponent_Conditional_12_Template_textarea_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.description, $event) || (ctx_r2.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "label", 53)(54, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function AdminPackagesComponent_Conditional_12_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.active, $event) || (ctx_r2.form.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 55);
    \u0275\u0275text(56, "Active (visible on website)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 56)(58, "button", 57);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 58);
    \u0275\u0275listener("click", function AdminPackagesComponent_Conditional_12_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    });
    \u0275\u0275text(61, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingPkg ? "Edit Package" : "New Package", " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.slug);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.conceptType);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.durationHours);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.photographerFee);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.makeupFee);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.maxTimeSlotsPerDay);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.description);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.active);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving() ? "Saving..." : ctx_r2.editingPkg ? "Update" : "Create", " ");
  }
}
var AdminPackagesComponent = class _AdminPackagesComponent {
  constructor(api) {
    this.api = api;
    this.packages = signal([]);
    this.loading = signal(true);
    this.showForm = signal(false);
    this.saving = signal(false);
    this.editingPkg = null;
    this.form = this.defaultForm();
  }
  ngOnInit() {
    this.loadPackages();
  }
  loadPackages() {
    this.api.getPackages().subscribe({
      next: (pkgs) => {
        this.packages.set(pkgs);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  editPkg(pkg) {
    this.editingPkg = pkg;
    this.form = {
      name: pkg.name,
      slug: pkg.slug,
      description: pkg.description,
      price: pkg.price,
      durationHours: pkg.durationHours,
      photographerFee: pkg.photographerFee,
      makeupFee: pkg.makeupFee,
      maxTimeSlotsPerDay: pkg.maxTimeSlotsPerDay,
      conceptType: pkg.conceptType,
      active: pkg.active
    };
    this.showForm.set(true);
  }
  toggleActive(pkg) {
    this.api.updatePackage(pkg.id, { active: !pkg.active }).subscribe({
      next: (updated) => this.packages.update((list) => list.map((p) => p.id === updated.id ? updated : p))
    });
  }
  savePkg() {
    this.saving.set(true);
    const save$ = this.editingPkg ? this.api.updatePackage(this.editingPkg.id, this.form) : this.api.createPackage(this.form);
    save$.subscribe({
      next: (pkg) => {
        if (this.editingPkg) {
          this.packages.update((list) => list.map((p) => p.id === pkg.id ? pkg : p));
        } else {
          this.packages.update((list) => [...list, pkg]);
        }
        this.closeForm();
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }
  closeForm() {
    this.showForm.set(false);
    this.editingPkg = null;
    this.form = this.defaultForm();
  }
  defaultForm() {
    return {
      name: "",
      slug: "",
      description: "",
      price: 35e4,
      durationHours: 2,
      photographerFee: 2e5,
      makeupFee: 15e4,
      maxTimeSlotsPerDay: 5,
      conceptType: "SAKURA_DREAM",
      active: true
    };
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
    this.\u0275fac = function AdminPackagesComponent_Factory(t) {
      return new (t || _AdminPackagesComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminPackagesComponent, selectors: [["app-admin-packages"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [[1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-2xl", "font-serif", "font-bold", "text-gray-800"], [1, "text-gray-500", "text-sm"], [1, "btn-primary", "text-sm", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "xl:grid-cols-2", "gap-6"], [1, "fixed", "inset-0", "bg-black/60", "backdrop-blur-sm", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "card", "p-6", "space-y-3"], [1, "h-6", "shimmer", "rounded", "w-1/2"], [1, "h-4", "shimmer", "rounded"], [1, "h-4", "shimmer", "rounded", "w-3/4"], [1, "card", "p-6"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "text-2xl"], [1, "font-serif", "font-bold", "text-gray-800", "text-lg"], [1, "badge-sakura", "text-xs"], [1, "flex", "items-center", "gap-2"], [1, "badge", "text-xs"], [1, "text-gray-500", "text-sm", "mb-4", "line-clamp-2"], [1, "grid", "grid-cols-2", "gap-3", "mb-4"], [1, "bg-sakura-50", "rounded-xl", "p-3"], [1, "text-xs", "text-gray-500"], [1, "font-bold", "text-sakura-600"], [1, "bg-cream-50", "rounded-xl", "p-3"], [1, "font-bold", "text-gray-700"], [1, "bg-blue-50", "rounded-xl", "p-3"], [1, "font-bold", "text-blue-600"], [1, "bg-purple-50", "rounded-xl", "p-3"], [1, "font-bold", "text-purple-600"], [1, "flex", "gap-2"], [1, "btn-secondary", "text-sm", "flex-1", "py-2", 3, "click"], [1, "text-sm", "px-4", "py-2", "rounded-full", "border-2", "transition-all", 3, "click"], [1, "fixed", "inset-0", "bg-black/60", "backdrop-blur-sm", "z-50", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "bg-white", "rounded-2xl", "max-w-xl", "w-full", "max-h-[90vh]", "overflow-y-auto", "p-8", 3, "click"], [1, "text-xl", "font-serif", "font-bold", "text-gray-800"], [1, "text-gray-400", "hover:text-gray-600", "text-2xl", 3, "click"], [1, "space-y-4", 3, "ngSubmit"], [1, "grid", "grid-cols-2", "gap-4"], [1, "col-span-2"], [1, "form-label"], ["name", "name", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "slug", "required", "", "placeholder", "sakura-dream", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "conceptType", 1, "form-input", 3, "ngModelChange", "ngModel"], ["value", "SAKURA_DREAM"], ["value", "KYOTO_SUNSET"], ["value", "LANTERN_NIGHT"], ["value", "ROYAL_VIET_PHUC"], ["type", "number", "name", "durationHours", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "price", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "photographerFee", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "makeupFee", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "maxSlots", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "description", 1, "form-input", "h-24", "resize-none", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-2", "cursor-pointer"], ["type", "checkbox", "name", "active", 1, "accent-sakura-500", "w-4", "h-4", 3, "ngModelChange", "ngModel"], [1, "text-sm", "text-gray-700"], [1, "flex", "gap-3", "pt-2"], ["type", "submit", 1, "btn-primary", "flex-1", 3, "disabled"], ["type", "button", 1, "btn-secondary", "px-6", 3, "click"]], template: function AdminPackagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div")(3, "h1", 1);
        \u0275\u0275text(4, "Package Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Manage concept photoshoot packages");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function AdminPackagesComponent_Template_button_click_7_listener() {
          return ctx.showForm.set(true);
        });
        \u0275\u0275text(8, "+ Add Package");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 4);
        \u0275\u0275template(10, AdminPackagesComponent_Conditional_10_Template, 2, 1)(11, AdminPackagesComponent_Conditional_11_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, AdminPackagesComponent_Conditional_12_Template, 62, 13, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(10, ctx.loading() ? 10 : 11);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(12, ctx.showForm() ? 12 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminPackagesComponent, { className: "AdminPackagesComponent" });
})();
export {
  AdminPackagesComponent
};
//# sourceMappingURL=chunk-HSRPZIZG.js.map

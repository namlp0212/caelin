import {
  FooterComponent,
  NavbarComponent
} from "./chunk-MBRMA4QR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  RangeValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-CZVPSPMY.js";
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
  ɵɵpureFunction1,
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

// src/app/pages/catalog/catalog.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _c1 = () => ["/booking"];
var _c2 = (a0) => ({ outfitId: a0 });
function CatalogComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 14)(1, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function CatalogComponent_For_21_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedType, $event) || (ctx_r1.selectedType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CatalogComponent_For_21_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", type_r3.value);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", type_r3.emoji, " ", type_r3.label, " ");
  }
}
function CatalogComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function CatalogComponent_For_27_Template_button_click_0_listener() {
      const color_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleColor(color_r5.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.selectedColor === color_r5.value ? "border-gray-800 scale-110" : "border-gray-200");
    \u0275\u0275styleProp("background", color_r5.hex);
    \u0275\u0275property("title", color_r5.label);
  }
}
function CatalogComponent_Conditional_58_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "div", 37);
    \u0275\u0275element(3, "div", 38)(4, "div", 39);
    \u0275\u0275elementEnd()();
  }
}
function CatalogComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, CatalogComponent_Conditional_58_For_2_Template, 5, 0, "div", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function CatalogComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "p", 41);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 42);
    \u0275\u0275text(4, "No outfits found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 43);
    \u0275\u0275text(6, "Try adjusting your filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 44);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_59_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275text(8, "Clear Filters");
    \u0275\u0275elementEnd()();
  }
}
function CatalogComponent_Conditional_60_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 48);
  }
  if (rf & 2) {
    const outfit_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", outfit_r8.images[0].imageUrl, \u0275\u0275sanitizeUrl)("alt", outfit_r8.name);
  }
}
function CatalogComponent_Conditional_60_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const outfit_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeEmoji(outfit_r8.outfitType));
  }
}
function CatalogComponent_Conditional_60_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "\u{1F525} Hot");
    \u0275\u0275elementEnd();
  }
}
function CatalogComponent_Conditional_60_For_2_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", size_r9.sizeLabel, " ");
  }
}
function CatalogComponent_Conditional_60_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275repeaterCreate(1, CatalogComponent_Conditional_60_For_2_Conditional_19_For_2_Template, 2, 1, "span", 62, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const outfit_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(outfit_r8.sizes.slice(0, 4));
  }
}
function CatalogComponent_Conditional_60_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_60_For_2_Template_div_click_0_listener() {
      const outfit_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectOutfit(outfit_r8));
    });
    \u0275\u0275elementStart(1, "div", 47);
    \u0275\u0275template(2, CatalogComponent_Conditional_60_For_2_Conditional_2_Template, 1, 2, "img", 48)(3, CatalogComponent_Conditional_60_For_2_Conditional_3_Template, 3, 1);
    \u0275\u0275elementStart(4, "div", 49)(5, "span", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CatalogComponent_Conditional_60_For_2_Conditional_7_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 52)(9, "a", 53);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_60_For_2_Template_a_click_9_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(10, " Book This Look ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 54)(12, "h4", 55);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 56)(15, "span", 57);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, CatalogComponent_Conditional_60_For_2_Conditional_19_Template, 3, 0, "div", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const outfit_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", "linear-gradient(135deg, " + (outfit_r8.colorHex || "#fde6ef") + "22, " + (outfit_r8.colorHex || "#fccede") + "44)");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, outfit_r8.images && outfit_r8.images.length > 0 ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatType(outfit_r8.outfitType));
    \u0275\u0275advance();
    \u0275\u0275conditional(7, outfit_r8.trending ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c1))("queryParams", \u0275\u0275pureFunction1(15, _c2, outfit_r8.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(outfit_r8.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 12, outfit_r8.price), "\u0111");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", outfit_r8.colorHex || "#FFB7C5");
    \u0275\u0275advance();
    \u0275\u0275conditional(19, outfit_r8.sizes && outfit_r8.sizes.length > 0 ? 19 : -1);
  }
}
function CatalogComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, CatalogComponent_Conditional_60_For_2_Template, 20, 17, "div", 45, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredOutfits());
  }
}
function CatalogComponent_Conditional_61_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 67);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.selectedOutfit().images[0].imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r1.selectedOutfit().name);
  }
}
function CatalogComponent_Conditional_61_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeEmoji(ctx_r1.selectedOutfit().outfitType));
  }
}
function CatalogComponent_Conditional_61_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedOutfit().description);
  }
}
function CatalogComponent_Conditional_61_Conditional_17_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", size_r11.sizeLabel, " ");
  }
}
function CatalogComponent_Conditional_61_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "p", 12);
    \u0275\u0275text(2, "Available Sizes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275repeaterCreate(4, CatalogComponent_Conditional_61_Conditional_17_For_5_Template, 2, 1, "span", 76, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.selectedOutfit().sizes);
  }
}
function CatalogComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_61_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedOutfit.set(null));
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_61_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 65)(3, "div", 66);
    \u0275\u0275template(4, CatalogComponent_Conditional_61_Conditional_4_Template, 1, 2, "img", 67)(5, CatalogComponent_Conditional_61_Conditional_5_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 68)(7, "button", 69);
    \u0275\u0275listener("click", function CatalogComponent_Conditional_61_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedOutfit.set(null));
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 70);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h2", 71);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 72);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CatalogComponent_Conditional_61_Conditional_16_Template, 2, 1, "p", 73)(17, CatalogComponent_Conditional_61_Conditional_17_Template, 6, 0, "div", 11);
    \u0275\u0275elementStart(18, "a", 74);
    \u0275\u0275text(19, " Book This Outfit \u273F ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(4, ctx_r1.selectedOutfit().images && ctx_r1.selectedOutfit().images.length > 0 ? 4 : 5);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatType(ctx_r1.selectedOutfit().outfitType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedOutfit().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(15, 8, ctx_r1.selectedOutfit().price), "\u0111");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(16, ctx_r1.selectedOutfit().description ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(17, ctx_r1.selectedOutfit().sizes && ctx_r1.selectedOutfit().sizes.length > 0 ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c1))("queryParams", \u0275\u0275pureFunction1(11, _c2, ctx_r1.selectedOutfit().id));
  }
}
var CatalogComponent = class _CatalogComponent {
  constructor(api, route) {
    this.api = api;
    this.route = route;
    this.allOutfits = signal([]);
    this.filteredOutfits = signal([]);
    this.selectedOutfit = signal(null);
    this.loading = signal(true);
    this.selectedType = "";
    this.selectedColor = "";
    this.maxPrice = 6e5;
    this.sortBy = "default";
    this.typeOptions = [
      { value: "", label: "All Types", emoji: "\u2728" },
      { value: "KIMONO", label: "Kimono", emoji: "\u{1F458}" },
      { value: "YUKATA", label: "Yukata", emoji: "\u{1F338}" },
      { value: "VIET_PHUC", label: "Viet Phuc", emoji: "\u{1F38B}" }
    ];
    this.colorOptions = [
      { value: "Pink", label: "Pink", hex: "#FFB7C5" },
      { value: "Red", label: "Red", hex: "#EF4444" },
      { value: "Blue", label: "Blue", hex: "#3B82F6" },
      { value: "Navy", label: "Navy", hex: "#1B3A6B" },
      { value: "Green", label: "Green", hex: "#22C55E" },
      { value: "Orange", label: "Orange", hex: "#F97316" },
      { value: "White", label: "White", hex: "#F8FAFC" },
      { value: "Gold", label: "Gold", hex: "#F59E0B" }
    ];
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params["type"])
        this.selectedType = params["type"];
    });
    this.loadOutfits();
  }
  loadOutfits() {
    this.api.getOutfits().subscribe({
      next: (outfits) => {
        this.allOutfits.set(outfits);
        this.applyFilters();
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  applyFilters() {
    let results = [...this.allOutfits()];
    if (this.selectedType) {
      results = results.filter((o) => o.outfitType === this.selectedType);
    }
    if (this.selectedColor) {
      results = results.filter((o) => o.color?.toLowerCase().includes(this.selectedColor.toLowerCase()));
    }
    results = results.filter((o) => o.price <= this.maxPrice);
    if (this.sortBy === "price-asc")
      results.sort((a, b) => a.price - b.price);
    else if (this.sortBy === "price-desc")
      results.sort((a, b) => b.price - a.price);
    else if (this.sortBy === "name")
      results.sort((a, b) => a.name.localeCompare(b.name));
    this.filteredOutfits.set(results);
  }
  toggleColor(color) {
    this.selectedColor = this.selectedColor === color ? "" : color;
    this.applyFilters();
  }
  resetFilters() {
    this.selectedType = "";
    this.selectedColor = "";
    this.maxPrice = 6e5;
    this.sortBy = "default";
    this.applyFilters();
  }
  selectOutfit(outfit) {
    this.selectedOutfit.set(outfit);
  }
  formatType(type) {
    return { KIMONO: "Kimono", YUKATA: "Yukata", VIET_PHUC: "Viet Phuc" }[type] ?? type;
  }
  typeEmoji(type) {
    return { KIMONO: "\u{1F458}", YUKATA: "\u{1F338}", VIET_PHUC: "\u{1F38B}" }[type] ?? "\u273F";
  }
  static {
    this.\u0275fac = function CatalogComponent_Factory(t) {
      return new (t || _CatalogComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CatalogComponent, selectors: [["app-catalog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 63, vars: 9, consts: [[1, "pt-24", "pb-10", "bg-gradient-to-br", "from-cream-50", "to-sakura-50"], [1, "container", "mx-auto", "px-4", "text-center"], [1, "badge-cream", "mb-4"], [1, "text-4xl", "md:text-5xl", "font-serif", "font-bold", "text-gray-800", "mb-4"], [1, "text-gray-500", "text-lg"], [1, "py-12", "bg-white"], [1, "container", "mx-auto", "px-4"], [1, "flex", "flex-col", "lg:flex-row", "gap-8"], [1, "lg:w-64", "flex-shrink-0"], [1, "card", "p-6", "sticky", "top-24"], [1, "font-semibold", "text-gray-800", "mb-6", "text-lg"], [1, "mb-6"], [1, "form-label"], [1, "space-y-2"], [1, "flex", "items-center", "gap-3", "cursor-pointer", "group"], [1, "flex", "flex-wrap", "gap-2"], [1, "w-8", "h-8", "rounded-full", "border-2", "transition-transform", "hover:scale-110", 3, "background", "class", "title"], ["type", "range", "min", "100000", "max", "600000", "step", "50000", 1, "w-full", "accent-sakura-500", 3, "ngModelChange", "change", "ngModel"], [1, "flex", "justify-between", "text-xs", "text-gray-500", "mt-1"], [1, "text-sakura-600", "font-semibold"], [1, "btn-secondary", "w-full", "text-sm", "py-2", 3, "click"], [1, "flex-1"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-gray-500", "text-sm"], [1, "text-gray-800"], [1, "form-input", "w-auto", "py-2", "text-sm", 3, "ngModelChange", "change", "ngModel"], ["value", "default"], ["value", "price-asc"], ["value", "price-desc"], ["value", "name"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "xl:grid-cols-4", "gap-4"], [1, "fixed", "inset-0", "bg-black/60", "backdrop-blur-sm", "z-50", "flex", "items-center", "justify-center", "p-4"], ["type", "radio", "name", "type", 1, "accent-sakura-500", 3, "ngModelChange", "change", "value", "ngModel"], [1, "text-gray-600", "group-hover:text-sakura-600", "transition-colors"], [1, "w-8", "h-8", "rounded-full", "border-2", "transition-transform", "hover:scale-110", 3, "click", "title"], [1, "card"], [1, "aspect-[3/4]", "shimmer"], [1, "p-4", "space-y-2"], [1, "h-4", "shimmer", "rounded", "w-3/4"], [1, "h-3", "shimmer", "rounded", "w-1/2"], [1, "text-center", "py-20"], [1, "text-6xl", "mb-4"], [1, "text-xl", "font-semibold", "text-gray-700", "mb-2"], [1, "text-gray-500", "mb-6"], [1, "btn-primary", 3, "click"], [1, "card-hover", "group", "cursor-pointer"], [1, "card-hover", "group", "cursor-pointer", 3, "click"], [1, "aspect-[3/4]", "relative", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-500", 3, "src", "alt"], [1, "absolute", "top-3", "left-3", "flex", "flex-col", "gap-1"], [1, "badge-sakura", "text-xs"], [1, "badge", "bg-yellow-100", "text-yellow-700", "text-xs"], [1, "absolute", "inset-0", "bg-black/0", "group-hover:bg-black/20", "transition-colors", "duration-300", "flex", "items-end", "justify-center", "pb-4", "opacity-0", "group-hover:opacity-100"], [1, "btn-primary", "text-xs", "px-4", "py-2", 3, "click", "routerLink", "queryParams"], [1, "p-4"], [1, "font-semibold", "text-gray-800", "text-sm", "mb-1", "truncate"], [1, "flex", "items-center", "justify-between"], [1, "text-sakura-600", "font-bold", "text-sm"], [1, "w-5", "h-5", "rounded-full", "border-2", "border-white", "shadow-sm"], [1, "flex", "gap-1", "mt-2", "flex-wrap"], [1, "w-full", "h-full", "flex", "items-center", "justify-center"], [1, "text-7xl", "opacity-30"], [1, "text-xs", "bg-gray-100", "text-gray-600", "px-1.5", "py-0.5", "rounded"], [1, "fixed", "inset-0", "bg-black/60", "backdrop-blur-sm", "z-50", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "bg-white", "rounded-2xl", "max-w-3xl", "w-full", "max-h-[90vh]", "overflow-y-auto", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2"], [1, "aspect-[3/4]", "md:aspect-auto", "md:h-full", "bg-gradient-to-br", "from-sakura-50", "to-cream-100", "flex", "items-center", "justify-center", "rounded-l-2xl", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "p-8"], [1, "float-right", "text-gray-400", "hover:text-gray-600", "text-2xl", "leading-none", "mb-4", 3, "click"], [1, "badge-sakura", "mb-3", "block", "w-fit"], [1, "text-2xl", "font-serif", "font-bold", "text-gray-800", "mb-2"], [1, "text-3xl", "font-bold", "text-sakura-600", "mb-4"], [1, "text-gray-600", "text-sm", "leading-relaxed", "mb-6"], [1, "btn-primary", "block", "text-center", "w-full", 3, "routerLink", "queryParams"], [1, "text-8xl"], [1, "px-3", "py-1", "border", "border-sakura-200", "rounded-full", "text-sm", "text-gray-700", "cursor-pointer", "hover:bg-sakura-50", "hover:border-sakura-400", "transition-colors"]], template: function CatalogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "section", 0)(2, "div", 1)(3, "p", 2);
        \u0275\u0275text(4, "Browse Our Collection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 3);
        \u0275\u0275text(6, "Outfit Catalog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "section", 5)(10, "div", 6)(11, "div", 7)(12, "aside", 8)(13, "div", 9)(14, "h3", 10);
        \u0275\u0275text(15, "Filter Outfits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11)(17, "p", 12);
        \u0275\u0275text(18, "Outfit Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 13);
        \u0275\u0275repeaterCreate(20, CatalogComponent_For_21_Template, 4, 4, "label", 14, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 11)(23, "p", 12);
        \u0275\u0275text(24, "Color");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 15);
        \u0275\u0275repeaterCreate(26, CatalogComponent_For_27_Template, 1, 5, "button", 16, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 11)(29, "p", 12);
        \u0275\u0275text(30, "Max Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function CatalogComponent_Template_input_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.maxPrice, $event) || (ctx.maxPrice = $event);
          return $event;
        });
        \u0275\u0275listener("change", function CatalogComponent_Template_input_change_31_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 18)(33, "span");
        \u0275\u0275text(34, "100k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 19);
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span");
        \u0275\u0275text(39, "600k");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "button", 20);
        \u0275\u0275listener("click", function CatalogComponent_Template_button_click_40_listener() {
          return ctx.resetFilters();
        });
        \u0275\u0275text(41, " Reset Filters ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 21)(43, "div", 22)(44, "p", 23);
        \u0275\u0275text(45, " Showing ");
        \u0275\u0275elementStart(46, "strong", 24);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " outfits ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "select", 25);
        \u0275\u0275twoWayListener("ngModelChange", function CatalogComponent_Template_select_ngModelChange_49_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
          return $event;
        });
        \u0275\u0275listener("change", function CatalogComponent_Template_select_change_49_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(50, "option", 26);
        \u0275\u0275text(51, "Default");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "option", 27);
        \u0275\u0275text(53, "Price: Low to High");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "option", 28);
        \u0275\u0275text(55, "Price: High to Low");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "option", 29);
        \u0275\u0275text(57, "Name A-Z");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(58, CatalogComponent_Conditional_58_Template, 3, 1, "div", 30)(59, CatalogComponent_Conditional_59_Template, 9, 0)(60, CatalogComponent_Conditional_60_Template, 3, 0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(61, CatalogComponent_Conditional_61_Template, 20, 13, "div", 31);
        \u0275\u0275element(62, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.allOutfits().length, " beautiful outfits waiting for you");
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.typeOptions);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.colorOptions);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.maxPrice);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(37, 7, ctx.maxPrice), "\u0111");
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.filteredOutfits().length);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(58, ctx.loading() ? 58 : ctx.filteredOutfits().length === 0 ? 59 : 60);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(61, ctx.selectedOutfit() ? 61 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, RangeValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, NavbarComponent, FooterComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CatalogComponent, { className: "CatalogComponent" });
})();
export {
  CatalogComponent
};
//# sourceMappingURL=chunk-UU2BXQMG.js.map

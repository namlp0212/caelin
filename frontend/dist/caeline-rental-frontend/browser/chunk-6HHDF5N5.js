import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-CZVPSPMY.js";
import {
  ApiService,
  CommonModule,
  __spreadProps,
  __spreadValues,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-LMTSQMYK.js";

// src/app/admin/content/content.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
var _c0 = () => [1, 2, 3, 4, 5];
function AdminContentComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function AdminContentComponent_For_8_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab = tab_r2.value);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.activeTab === tab_r2.value ? "border-sakura-500 text-sakura-600" : "border-transparent text-gray-500 hover:text-gray-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", tab_r2.icon, " ", tab_r2.label, " ");
  }
}
function AdminContentComponent_Conditional_9_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 11);
    \u0275\u0275element(2, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "h3", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16)(9, "span", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 18);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 19)(14, "button", 20);
    \u0275\u0275listener("click", function AdminContentComponent_Conditional_9_For_6_Template_button_click_14_listener() {
      const banner_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editBanner(banner_r6));
    });
    \u0275\u0275text(15, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 21);
    \u0275\u0275listener("click", function AdminContentComponent_Conditional_9_For_6_Template_button_click_16_listener() {
      const banner_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteBanner(banner_r6.id));
    });
    \u0275\u0275text(17, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const banner_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", banner_r6.imageUrl, \u0275\u0275sanitizeUrl)("alt", banner_r6.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(banner_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(banner_r6.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(banner_r6.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", banner_r6.active ? "Active" : "Hidden", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Order: ", banner_r6.sortOrder, "");
  }
}
function AdminContentComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function AdminContentComponent_Conditional_9_Conditional_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showBannerForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275listener("click", function AdminContentComponent_Conditional_9_Conditional_7_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h3", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 25);
    \u0275\u0275listener("ngSubmit", function AdminContentComponent_Conditional_9_Conditional_7_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveBanner());
    });
    \u0275\u0275elementStart(5, "div")(6, "label", 26);
    \u0275\u0275text(7, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function AdminContentComponent_Conditional_9_Conditional_7_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.bannerForm.title, $event) || (ctx_r2.bannerForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "label", 26);
    \u0275\u0275text(11, "Subtitle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function AdminContentComponent_Conditional_9_Conditional_7_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.bannerForm.subtitle, $event) || (ctx_r2.bannerForm.subtitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "label", 26);
    \u0275\u0275text(15, "Image URL *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function AdminContentComponent_Conditional_9_Conditional_7_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.bannerForm.imageUrl, $event) || (ctx_r2.bannerForm.imageUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 26);
    \u0275\u0275text(19, "CTA Text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function AdminContentComponent_Conditional_9_Conditional_7_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.bannerForm.ctaText, $event) || (ctx_r2.bannerForm.ctaText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 31)(22, "div")(23, "label", 26);
    \u0275\u0275text(24, "Sort Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function AdminContentComponent_Conditional_9_Conditional_7_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.bannerForm.sortOrder, $event) || (ctx_r2.bannerForm.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 33)(27, "label", 34)(28, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function AdminContentComponent_Conditional_9_Conditional_7_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.bannerForm.active, $event) || (ctx_r2.bannerForm.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 36);
    \u0275\u0275text(30, "Active");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 37)(32, "button", 38);
    \u0275\u0275text(33, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 39);
    \u0275\u0275listener("click", function AdminContentComponent_Conditional_9_Conditional_7_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.showBannerForm.set(false);
      return \u0275\u0275resetView(ctx_r2.editingBanner = null);
    });
    \u0275\u0275text(35, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingBanner ? "Edit Banner" : "New Banner", " ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bannerForm.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bannerForm.subtitle);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bannerForm.imageUrl);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bannerForm.ctaText);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bannerForm.sortOrder);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bannerForm.active);
  }
}
function AdminContentComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 7)(2, "button", 8);
    \u0275\u0275listener("click", function AdminContentComponent_Conditional_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showBannerForm.set(true));
    });
    \u0275\u0275text(3, "+ Add Banner");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275repeaterCreate(5, AdminContentComponent_Conditional_9_For_6_Template, 18, 8, "div", 9, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminContentComponent_Conditional_9_Conditional_7_Template, 36, 7, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.banners());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(7, ctx_r2.showBannerForm() ? 7 : -1);
  }
}
function AdminContentComponent_Conditional_10_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42);
    \u0275\u0275element(2, "img", 12);
    \u0275\u0275elementStart(3, "div", 43)(4, "button", 44);
    \u0275\u0275listener("click", function AdminContentComponent_Conditional_10_For_6_Template_button_click_4_listener() {
      const post_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deletePost(post_r10.id));
    });
    \u0275\u0275text(5, "Delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 45)(7, "p", 46);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 47);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", post_r10.imageUrl, \u0275\u0275sanitizeUrl)("alt", post_r10.caption || "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(post_r10.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2764\uFE0F ", post_r10.likes, "");
  }
}
function AdminContentComponent_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function AdminContentComponent_Conditional_10_Conditional_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showIgForm.set(false));
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275listener("click", function AdminContentComponent_Conditional_10_Conditional_7_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h3", 24);
    \u0275\u0275text(3, "Add Instagram Post");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 25);
    \u0275\u0275listener("ngSubmit", function AdminContentComponent_Conditional_10_Conditional_7_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.savePost());
    });
    \u0275\u0275elementStart(5, "div")(6, "label", 26);
    \u0275\u0275text(7, "Image URL *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function AdminContentComponent_Conditional_10_Conditional_7_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.igForm.imageUrl, $event) || (ctx_r2.igForm.imageUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "label", 26);
    \u0275\u0275text(11, "Instagram Link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function AdminContentComponent_Conditional_10_Conditional_7_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.igForm.instagramUrl, $event) || (ctx_r2.igForm.instagramUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 31)(14, "div")(15, "label", 26);
    \u0275\u0275text(16, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function AdminContentComponent_Conditional_10_Conditional_7_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.igForm.username, $event) || (ctx_r2.igForm.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "label", 26);
    \u0275\u0275text(20, "Likes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function AdminContentComponent_Conditional_10_Conditional_7_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.igForm.likes, $event) || (ctx_r2.igForm.likes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 37)(23, "button", 38);
    \u0275\u0275text(24, "Add Post");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 39);
    \u0275\u0275listener("click", function AdminContentComponent_Conditional_10_Conditional_7_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showIgForm.set(false));
    });
    \u0275\u0275text(26, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.igForm.imageUrl);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.igForm.instagramUrl);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.igForm.username);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.igForm.likes);
  }
}
function AdminContentComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 7)(2, "button", 8);
    \u0275\u0275listener("click", function AdminContentComponent_Conditional_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showIgForm.set(true));
    });
    \u0275\u0275text(3, "+ Add Post");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 40);
    \u0275\u0275repeaterCreate(5, AdminContentComponent_Conditional_10_For_6_Template, 11, 4, "div", 41, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminContentComponent_Conditional_10_Conditional_7_Template, 27, 4, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.instagramPosts());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(7, ctx_r2.showIgForm() ? 7 : -1);
  }
}
function AdminContentComponent_Conditional_11_For_2_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    const review_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(s_r13 <= review_r14.rating ? "text-yellow-400" : "text-gray-200");
  }
}
function AdminContentComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 55)(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 47);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 56);
    \u0275\u0275repeaterCreate(10, AdminContentComponent_Conditional_11_For_2_For_11_Template, 2, 2, "span", 57, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 58);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 59)(15, "span", 17);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 60);
    \u0275\u0275listener("click", function AdminContentComponent_Conditional_11_For_2_Template_button_click_17_listener() {
      const review_r14 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleReview(review_r14.id));
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const review_r14 = ctx.$implicit;
    \u0275\u0275classProp("opacity-50", !review_r14.visible);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", review_r14.customerName[0], " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r14.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r14.packageName);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r14.content);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(review_r14.visible ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", review_r14.visible ? "Visible" : "Hidden", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", review_r14.visible ? "Hide" : "Show", " ");
  }
}
function AdminContentComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, AdminContentComponent_Conditional_11_For_2_Template, 19, 11, "div", 52, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.reviews());
  }
}
var AdminContentComponent = class _AdminContentComponent {
  constructor(api) {
    this.api = api;
    this.banners = signal([]);
    this.instagramPosts = signal([]);
    this.reviews = signal([]);
    this.showBannerForm = signal(false);
    this.showIgForm = signal(false);
    this.activeTab = "banners";
    this.editingBanner = null;
    this.tabs = [
      { value: "banners", label: "Banners", icon: "\u{1F5BC}\uFE0F" },
      { value: "instagram", label: "Instagram Feed", icon: "\u{1F4F8}" },
      { value: "reviews", label: "Reviews", icon: "\u2B50" }
    ];
    this.bannerForm = this.defaultBannerForm();
    this.igForm = { imageUrl: "", instagramUrl: "", username: "", likes: 0 };
  }
  ngOnInit() {
    this.api.getBanners().subscribe({ next: (b) => this.banners.set(b), error: () => {
    } });
    this.api.getInstagramPosts().subscribe({ next: (p) => this.instagramPosts.set(p), error: () => {
    } });
    this.api.getReviews().subscribe({ next: (r) => this.reviews.set(r), error: () => {
    } });
  }
  editBanner(banner) {
    this.editingBanner = banner;
    this.bannerForm = __spreadValues({}, banner);
    this.showBannerForm.set(true);
  }
  saveBanner() {
    if (this.editingBanner) {
      this.api.updateBanner(this.editingBanner.id, this.bannerForm).subscribe({
        next: (b) => {
          this.banners.update((list) => list.map((x) => x.id === b.id ? b : x));
          this.showBannerForm.set(false);
          this.editingBanner = null;
        }
      });
    } else {
      this.api.createBanner(this.bannerForm).subscribe({
        next: (b) => {
          this.banners.update((list) => [...list, b]);
          this.showBannerForm.set(false);
          this.bannerForm = this.defaultBannerForm();
        }
      });
    }
  }
  deleteBanner(id) {
    if (!confirm("Delete this banner?"))
      return;
    this.api.deleteBanner(id).subscribe({
      next: () => this.banners.update((list) => list.filter((b) => b.id !== id))
    });
  }
  savePost() {
    this.api.createInstagramPost(this.igForm).subscribe({
      next: (p) => {
        this.instagramPosts.update((list) => [...list, p]);
        this.showIgForm.set(false);
        this.igForm = { imageUrl: "", instagramUrl: "", username: "", likes: 0 };
      }
    });
  }
  deletePost(id) {
    if (!confirm("Delete this post?"))
      return;
    this.api.deleteInstagramPost(id).subscribe({
      next: () => this.instagramPosts.update((list) => list.filter((p) => p.id !== id))
    });
  }
  toggleReview(id) {
    this.reviews.update((list) => list.map((r) => r.id === id ? __spreadProps(__spreadValues({}, r), { visible: !r.visible }) : r));
  }
  defaultBannerForm() {
    return { title: "", subtitle: "", imageUrl: "", ctaText: "Book Now", active: true, sortOrder: 0 };
  }
  static {
    this.\u0275fac = function AdminContentComponent_Factory(t) {
      return new (t || _AdminContentComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminContentComponent, selectors: [["app-admin-content"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 3, consts: [[1, "mb-6"], [1, "text-2xl", "font-serif", "font-bold", "text-gray-800"], [1, "text-gray-500", "text-sm"], [1, "flex", "gap-2", "mb-8", "border-b", "border-gray-100"], [1, "px-5", "py-3", "text-sm", "font-medium", "border-b-2", "transition-colors", 3, "class"], [1, "space-y-4"], [1, "px-5", "py-3", "text-sm", "font-medium", "border-b-2", "transition-colors", 3, "click"], [1, "flex", "justify-end", "mb-5"], [1, "btn-primary", "text-sm", 3, "click"], [1, "card", "p-5", "flex", "items-center", "gap-5"], [1, "fixed", "inset-0", "bg-black/60", "backdrop-blur-sm", "z-50", "flex", "items-center", "justify-center", "p-4"], [1, "w-32", "h-20", "rounded-xl", "overflow-hidden", "bg-gray-100", "flex-shrink-0"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "flex-1"], [1, "font-semibold", "text-gray-800"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "flex", "items-center", "gap-3", "mt-2"], [1, "badge", "text-xs"], [1, "text-xs", "text-gray-400"], [1, "flex", "gap-2"], [1, "btn-secondary", "text-xs", "py-1.5", "px-3", 3, "click"], [1, "text-xs", "px-3", "py-1.5", "rounded-full", "border-2", "border-red-200", "text-red-600", "hover:bg-red-50", 3, "click"], [1, "fixed", "inset-0", "bg-black/60", "backdrop-blur-sm", "z-50", "flex", "items-center", "justify-center", "p-4", 3, "click"], [1, "bg-white", "rounded-2xl", "max-w-lg", "w-full", "p-8", 3, "click"], [1, "text-xl", "font-serif", "font-bold", "text-gray-800", "mb-6"], [1, "space-y-4", 3, "ngSubmit"], [1, "form-label"], ["name", "title", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "subtitle", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "imageUrl", "required", "", "placeholder", "/assets/images/banner.jpg", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "ctaText", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-4"], ["type", "number", "name", "sortOrder", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "flex", "items-end", "pb-1"], [1, "flex", "items-center", "gap-2", "cursor-pointer"], ["type", "checkbox", "name", "active", 1, "accent-sakura-500", "w-4", "h-4", 3, "ngModelChange", "ngModel"], [1, "text-sm", "text-gray-700"], [1, "flex", "gap-3"], ["type", "submit", 1, "btn-primary", "flex-1"], ["type", "button", 1, "btn-secondary", "px-6", 3, "click"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-4"], [1, "card", "group", "overflow-hidden"], [1, "aspect-square", "relative", "bg-gray-100"], [1, "absolute", "inset-0", "bg-black/0", "group-hover:bg-black/50", "transition-colors", "flex", "items-center", "justify-center", "opacity-0", "group-hover:opacity-100", "gap-2"], [1, "bg-red-500", "text-white", "text-xs", "px-3", "py-1.5", "rounded-lg", 3, "click"], [1, "p-3"], [1, "text-xs", "text-gray-500", "truncate"], [1, "text-xs", "text-sakura-500"], ["name", "imageUrl", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "instaUrl", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "username", "placeholder", "@username", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "likes", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "card", "p-5", "flex", "items-start", "gap-5", 3, "opacity-50"], [1, "card", "p-5", "flex", "items-start", "gap-5"], [1, "w-10", "h-10", "bg-sakura-100", "rounded-full", "flex", "items-center", "justify-center", "text-sakura-600", "font-bold", "flex-shrink-0"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "flex"], [1, "text-sm", 3, "class"], [1, "text-gray-600", "text-sm"], [1, "flex", "gap-2", "flex-shrink-0"], [1, "text-xs", "px-3", "py-1", "rounded-full", "border", "border-gray-200", "text-gray-600", "hover:bg-gray-50", 3, "click"], [1, "text-sm"]], template: function AdminContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "h1", 1);
        \u0275\u0275text(3, "Content Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Manage homepage banners, Instagram feed, and reviews");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275repeaterCreate(7, AdminContentComponent_For_8_Template, 2, 4, "button", 4, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, AdminContentComponent_Conditional_9_Template, 8, 1, "div")(10, AdminContentComponent_Conditional_10_Template, 8, 1, "div")(11, AdminContentComponent_Conditional_11_Template, 3, 0, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(9, ctx.activeTab === "banners" ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(10, ctx.activeTab === "instagram" ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(11, ctx.activeTab === "reviews" ? 11 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminContentComponent, { className: "AdminContentComponent" });
})();
export {
  AdminContentComponent
};
//# sourceMappingURL=chunk-6HHDF5N5.js.map

import {
  FooterComponent,
  NavbarComponent
} from "./chunk-MBRMA4QR.js";
import {
  FormsModule
} from "./chunk-CZVPSPMY.js";
import {
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LMTSQMYK.js";

// src/app/pages/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.type;
var _forTrack3 = ($index, $item) => $item.name;
var _c0 = () => ["/packages"];
var _c1 = () => ["/catalog"];
var _c2 = () => [1, 2, 3, 4, 5];
function HomeComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "\u{1F338}");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const petal_r1 = ctx.$implicit;
    \u0275\u0275styleProp("left", petal_r1.left)("animation-delay", petal_r1.delay)("animation-duration", petal_r1.duration);
  }
}
function HomeComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.label);
  }
}
function HomeComponent_Conditional_36_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 53)(4, "h3", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 56)(9, "span", 57);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 58);
    \u0275\u0275text(12, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const concept_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", concept_r3.gradient);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", concept_r3.emoji, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(concept_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(concept_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("From ", concept_r3.price, "");
  }
}
function HomeComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_36_For_2_Template, 13, 8, "div", 51, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.conceptCards);
  }
}
function HomeComponent_Conditional_37_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 60);
  }
  if (rf & 2) {
    const pkg_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", pkg_r5.thumbnailUrl, \u0275\u0275sanitizeUrl)("alt", pkg_r5.name);
  }
}
function HomeComponent_Conditional_37_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1, "\u{1F338}");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_37_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 59);
    \u0275\u0275template(2, HomeComponent_Conditional_37_For_2_Conditional_2_Template, 1, 2, "img", 60)(3, HomeComponent_Conditional_37_For_2_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53)(5, "h3", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 61);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 56)(10, "span", 57);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 58);
    \u0275\u0275text(14, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pkg_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, pkg_r5.thumbnailUrl ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(pkg_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pkg_r5.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 5, pkg_r5.price), "\u0111 ");
  }
}
function HomeComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_37_For_2_Template, 15, 8, "div", 51, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.packages());
  }
}
function HomeComponent_For_52_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 64);
  }
  if (rf & 2) {
    const outfit_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", outfit_r6.images[0].imageUrl, \u0275\u0275sanitizeUrl)("alt", outfit_r6.name);
  }
}
function HomeComponent_For_52_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "span", 72);
    \u0275\u0275text(2, "\u{1F458}");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 63);
    \u0275\u0275template(2, HomeComponent_For_52_Conditional_2_Template, 1, 2, "img", 64)(3, HomeComponent_For_52_Conditional_3_Template, 3, 0);
    \u0275\u0275elementStart(4, "div", 65)(5, "span", 66);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 67)(8, "h4", 68);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 56)(11, "span", 69);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "span", 70);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const outfit_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, outfit_r6.images && outfit_r6.images.length > 0 ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.formatType(outfit_r6.outfitType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(outfit_r6.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 7, outfit_r6.price), "\u0111");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", outfit_r6.colorHex || "#FFB7C5");
  }
}
function HomeComponent_Conditional_53_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 67)(4, "h4", 68);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 56)(7, "span", 69);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 66);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c1));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", "linear-gradient(135deg, " + item_r7.color1 + ", " + item_r7.color2 + ")");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7.emoji, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.type);
  }
}
function HomeComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, HomeComponent_Conditional_53_For_1_Template, 11, 8, "div", 29, _forTrack3);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.staticOutfits);
  }
}
function HomeComponent_For_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33);
    \u0275\u0275element(1, "img", 74);
    \u0275\u0275elementStart(2, "div", 75)(3, "div", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 77);
    \u0275\u0275element(5, "path", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 79);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const post_r8 = ctx.$implicit;
    \u0275\u0275property("href", post_r8.instagramUrl || "#", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("src", post_r8.imageUrl, \u0275\u0275sanitizeUrl)("alt", post_r8.caption || "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u2764\uFE0F ", post_r8.likes, "");
  }
}
function HomeComponent_Conditional_72_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275text(1, " \u{1F4F8} ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r9 = ctx.$implicit;
    \u0275\u0275styleProp("background", color_r9);
  }
}
function HomeComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, HomeComponent_Conditional_72_For_1_Template, 2, 2, "div", 80, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.igColors);
  }
}
function HomeComponent_For_89_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r10 = ctx.$implicit;
    const review_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(star_r10 <= review_r11.rating ? "text-yellow-400" : "text-gray-200");
  }
}
function HomeComponent_For_89_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(review_r11.packageName);
  }
}
function HomeComponent_For_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 82);
    \u0275\u0275repeaterCreate(2, HomeComponent_For_89_For_3_Template, 2, 2, "span", 83, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 84);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 85)(7, "div", 86);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "p", 87);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, HomeComponent_For_89_Conditional_12_Template, 2, 1, "p", 88);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const review_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(4, _c2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1('"', review_r11.content, '"');
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", review_r11.customerName[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r11.customerName);
    \u0275\u0275advance();
    \u0275\u0275conditional(12, review_r11.packageName ? 12 : -1);
  }
}
function HomeComponent_Conditional_90_For_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_90_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 82);
    \u0275\u0275repeaterCreate(2, HomeComponent_Conditional_90_For_1_For_3_Template, 2, 0, "span", 89, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 90);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 85)(7, "div", 86);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "p", 87);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 88);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const review_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(4, _c2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1('"', review_r12.content, '"');
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", review_r12.name[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r12.package);
  }
}
function HomeComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, HomeComponent_Conditional_90_For_1_Template, 14, 5, "div", 39, _forTrack3);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.staticReviews);
  }
}
var HomeComponent = class _HomeComponent {
  constructor(api) {
    this.api = api;
    this.packages = signal([]);
    this.trendingOutfits = signal([]);
    this.reviews = signal([]);
    this.instagramPosts = signal([]);
    this.petals = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${6 + Math.random() * 6}s`
    }));
    this.stats = [
      { value: "1K+", label: "Bookings" },
      { value: "4", label: "Concepts" },
      { value: "50+", label: "Outfits" }
    ];
    this.conceptCards = [
      {
        type: "SAKURA_DREAM",
        name: "Sakura Dream",
        emoji: "\u{1F338}",
        price: "350,000\u0111",
        description: "Cherry blossom garden magic",
        gradient: "linear-gradient(135deg, #fde6ef, #fccede)"
      },
      {
        type: "KYOTO_SUNSET",
        name: "Kyoto Sunset",
        emoji: "\u{1F3EE}",
        price: "450,000\u0111",
        description: "Golden hour Kyoto vibes",
        gradient: "linear-gradient(135deg, #fef3c7, #fed7aa)"
      },
      {
        type: "LANTERN_NIGHT",
        name: "Lantern Night",
        emoji: "\u{1FA94}",
        price: "500,000\u0111",
        description: "Enchanting lantern festival",
        gradient: "linear-gradient(135deg, #ede3ff, #fde6ef)"
      },
      {
        type: "ROYAL_VIET_PHUC",
        name: "Royal Viet Phuc",
        emoji: "\u{1F451}",
        price: "400,000\u0111",
        description: "Vietnamese royal elegance",
        gradient: "linear-gradient(135deg, #fee2e2, #fecaca)"
      }
    ];
    this.staticOutfits = [
      {
        name: "Sakura Pink Kimono",
        type: "Kimono",
        price: "350,000\u0111",
        emoji: "\u{1F458}",
        color1: "#fde6ef",
        color2: "#fccede"
      },
      {
        name: "Midnight Blue Kimono",
        type: "Kimono",
        price: "350,000\u0111",
        emoji: "\u{1F458}",
        color1: "#dbeafe",
        color2: "#bfdbfe"
      },
      {
        name: "Sunset Yukata",
        type: "Yukata",
        price: "250,000\u0111",
        emoji: "\u{1F305}",
        color1: "#fed7aa",
        color2: "#fdba74"
      },
      {
        name: "Garden Green Yukata",
        type: "Yukata",
        price: "250,000\u0111",
        emoji: "\u{1F33F}",
        color1: "#d1fae5",
        color2: "#a7f3d0"
      },
      {
        name: "Imperial Viet Phuc",
        type: "Viet Phuc",
        price: "400,000\u0111",
        emoji: "\u{1F38B}",
        color1: "#fee2e2",
        color2: "#fca5a5"
      },
      {
        name: "Lotus Ao Dai Set",
        type: "Viet Phuc",
        price: "380,000\u0111",
        emoji: "\u{1FAB7}",
        color1: "#f5f3ff",
        color2: "#ede9fe"
      }
    ];
    this.igColors = [
      "linear-gradient(135deg, #fde6ef, #fccede)",
      "linear-gradient(135deg, #fed7aa, #fdba74)",
      "linear-gradient(135deg, #d1fae5, #a7f3d0)",
      "linear-gradient(135deg, #ede3ff, #ddd6fe)",
      "linear-gradient(135deg, #fef3c7, #fde68a)",
      "linear-gradient(135deg, #dbeafe, #bfdbfe)",
      "linear-gradient(135deg, #fee2e2, #fca5a5)",
      "linear-gradient(135deg, #f0fdf4, #dcfce7)"
    ];
    this.staticReviews = [
      {
        name: "Linh Nguyen",
        rating: 5,
        package: "Sakura Dream",
        content: "Absolutely stunning experience! My photos got 10k likes on Instagram!"
      },
      {
        name: "Yuki Tanaka",
        rating: 5,
        package: "Kyoto Sunset",
        content: "The kimono quality is amazing and staff was so helpful with styling!"
      },
      {
        name: "Mai Tran",
        rating: 5,
        package: "Royal Viet Phuc",
        content: "Felt like a princess. 10/10 recommend to everyone!"
      },
      {
        name: "Sophie Chen",
        rating: 4,
        package: "Lantern Night",
        content: "Perfect for TikTok content! The Lantern Night concept is gorgeous."
      }
    ];
  }
  ngOnInit() {
    this.api.getPackages().subscribe({ next: (p) => this.packages.set(p), error: () => {
    } });
    this.api.getTrendingOutfits().subscribe({ next: (o) => this.trendingOutfits.set(o), error: () => {
    } });
    this.api.getReviews(true).subscribe({ next: (r) => this.reviews.set(r), error: () => {
    } });
    this.api.getInstagramPosts().subscribe({ next: (p) => this.instagramPosts.set(p), error: () => {
    } });
  }
  formatType(type) {
    return { KIMONO: "Kimono", YUKATA: "Yukata", VIET_PHUC: "Viet Phuc" }[type] ?? type;
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 105, vars: 4, consts: [[1, "relative", "min-h-screen", "flex", "items-center", "justify-center", "overflow-hidden"], [1, "absolute", "inset-0", "bg-gradient-to-br", "from-sakura-800", "via-sakura-600", "to-lotus-700"], [1, "absolute", "inset-0", "overflow-hidden", "pointer-events-none"], [1, "petal", "text-2xl", 3, "left", "animation-delay", "animation-duration"], [1, "relative", "z-10", "text-center", "text-white", "px-4", "max-w-4xl", "mx-auto", "pt-20"], [1, "font-script", "text-2xl", "md:text-3xl", "text-sakura-100", "mb-4", "animate-fade-in"], [1, "text-4xl", "md:text-6xl", "lg:text-7xl", "font-serif", "font-bold", "leading-tight", "mb-6", "animate-slide-up"], [1, "text-sakura-200"], [1, "text-lg", "md:text-xl", "text-white/80", "mb-10", "max-w-2xl", "mx-auto", "animate-fade-in"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "justify-center", "animate-slide-up"], ["routerLink", "/booking", 1, "btn-primary", "text-lg", "px-10", "py-4"], ["routerLink", "/packages", 1, "btn-outline-white", "text-lg", "px-10", "py-4"], [1, "grid", "grid-cols-3", "gap-6", "mt-16", "max-w-md", "mx-auto"], [1, "text-center"], [1, "absolute", "bottom-8", "left-1/2", "-translate-x-1/2", "animate-bounce"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-white/60"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "py-20", "bg-white"], [1, "container", "mx-auto", "px-4"], [1, "text-center", "mb-12"], [1, "badge-sakura", "mb-3"], [1, "section-title"], [1, "section-subtitle"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6"], [1, "text-center", "mt-10"], ["routerLink", "/packages", 1, "btn-secondary"], [1, "py-20", "bg-cream-50"], [1, "badge-cream", "mb-3"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-4"], [1, "card-hover", "group", 3, "routerLink"], ["routerLink", "/catalog", 1, "btn-primary"], [1, "text-sakura-500"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-2"], ["target", "_blank", 1, "group", "relative", "aspect-square", "overflow-hidden", 3, "href"], [1, "text-center", "mt-8"], ["href", "https://instagram.com/caeline.rental", "target", "_blank", 1, "btn-secondary", "inline-flex", "items-center", "gap-2"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["d", "M12 2.163c3.204..."], [1, "py-20", "bg-gradient-to-br", "from-sakura-50", "to-cream-50"], [1, "card", "p-6"], [1, "py-20", "bg-gradient-to-r", "from-sakura-600", "to-lotus-600", "text-white"], [1, "container", "mx-auto", "px-4", "text-center"], [1, "font-script", "text-3xl", "mb-3", "text-sakura-100"], [1, "text-3xl", "md:text-5xl", "font-serif", "font-bold", "mb-6"], [1, "text-white/80", "text-lg", "mb-10", "max-w-xl", "mx-auto"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "justify-center"], ["routerLink", "/booking", 1, "btn-outline-white", "text-lg", "px-10", "py-4"], ["routerLink", "/packages", 1, "bg-white/20", "hover:bg-white/30", "text-white", "font-semibold", "px-10", "py-4", "rounded-full", "transition-all", "duration-300", "text-lg"], [1, "petal", "text-2xl"], [1, "text-2xl", "md:text-3xl", "font-bold", "text-white"], [1, "text-xs", "text-white/60", "uppercase", "tracking-wide", "mt-1"], [1, "card-hover", "group", "cursor-pointer", 3, "routerLink"], [1, "h-48", "flex", "items-center", "justify-center", "text-5xl"], [1, "p-5"], [1, "font-serif", "font-semibold", "text-lg", "text-gray-800", "mb-2"], [1, "text-gray-500", "text-sm", "mb-4"], [1, "flex", "items-center", "justify-between"], [1, "text-sakura-600", "font-bold"], [1, "text-sakura-400", "group-hover:translate-x-1", "transition-transform"], [1, "h-48", "bg-gradient-to-br", "from-sakura-100", "to-sakura-200", "flex", "items-center", "justify-center"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "text-gray-500", "text-sm", "mb-4", "line-clamp-2"], [1, "text-5xl"], [1, "aspect-[3/4]", "bg-gradient-to-br", "from-sakura-100", "to-cream-100", "relative", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-500", 3, "src", "alt"], [1, "absolute", "top-3", "left-3"], [1, "badge-sakura", "text-xs"], [1, "p-4"], [1, "font-semibold", "text-gray-800", "text-sm", "mb-1"], [1, "text-sakura-600", "font-bold", "text-sm"], [1, "w-4", "h-4", "rounded-full", "border-2", "border-white", "shadow-sm"], [1, "w-full", "h-full", "flex", "items-center", "justify-center"], [1, "text-6xl", "opacity-40"], [1, "aspect-[3/4]", "flex", "items-center", "justify-center", "text-6xl"], [1, "w-full", "h-full", "object-cover", "group-hover:scale-110", "transition-transform", "duration-500", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-black/0", "group-hover:bg-black/40", "transition-colors", "duration-300", "flex", "items-center", "justify-center"], [1, "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300", "text-white", "text-center"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "mx-auto", "mb-1"], ["d", "M12 2.163c3.204 0 3.584.012 4.85.07..."], [1, "text-sm", "font-semibold"], [1, "aspect-square", "flex", "items-center", "justify-center", "text-4xl", "cursor-pointer", "hover:opacity-90", "transition-opacity", 3, "background"], [1, "aspect-square", "flex", "items-center", "justify-center", "text-4xl", "cursor-pointer", "hover:opacity-90", "transition-opacity"], [1, "flex", "items-center", "gap-1", "mb-3"], [3, "class"], [1, "text-gray-600", "text-sm", "italic", "mb-4", "line-clamp-4"], [1, "flex", "items-center", "gap-3"], [1, "w-9", "h-9", "rounded-full", "bg-sakura-100", "flex", "items-center", "justify-center", "text-sm", "font-bold", "text-sakura-600"], [1, "font-semibold", "text-gray-800", "text-sm"], [1, "text-xs", "text-sakura-500"], [1, "text-yellow-400"], [1, "text-gray-600", "text-sm", "italic", "mb-4"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "section", 0);
        \u0275\u0275element(2, "div", 1);
        \u0275\u0275elementStart(3, "div", 2);
        \u0275\u0275repeaterCreate(4, HomeComponent_For_5_Template, 2, 6, "span", 3, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "p", 5);
        \u0275\u0275text(8, " \u273F Welcome to Caeline \u273F ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h1", 6);
        \u0275\u0275text(10, " Dress in Tradition,");
        \u0275\u0275element(11, "br");
        \u0275\u0275elementStart(12, "span", 7);
        \u0275\u0275text(13, "Shine on Social");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "p", 8);
        \u0275\u0275text(15, " Rent stunning Kimono, Yukata & Viet Phuc for your perfect Instagram & TikTok photoshoot experience. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 9)(17, "a", 10);
        \u0275\u0275text(18, " Book Your Photoshoot \u273F ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a", 11);
        \u0275\u0275text(20, " Explore Packages ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 12);
        \u0275\u0275repeaterCreate(22, HomeComponent_For_23_Template, 5, 2, "div", 13, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 14);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(25, "svg", 15);
        \u0275\u0275element(26, "path", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(27, "section", 17)(28, "div", 18)(29, "div", 19)(30, "p", 20);
        \u0275\u0275text(31, "Featured Packages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "h2", 21);
        \u0275\u0275text(33, "Choose Your Dream Concept");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "p", 22);
        \u0275\u0275text(35, "4 curated themes for the perfect photoshoot story");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(36, HomeComponent_Conditional_36_Template, 3, 0, "div", 23)(37, HomeComponent_Conditional_37_Template, 3, 0);
        \u0275\u0275elementStart(38, "div", 24)(39, "a", 25);
        \u0275\u0275text(40, "View All Packages");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(41, "section", 26)(42, "div", 18)(43, "div", 19)(44, "p", 27);
        \u0275\u0275text(45, "\u{1F525} Trending Now");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "h2", 21);
        \u0275\u0275text(47, "Most-Loved Outfits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p", 22);
        \u0275\u0275text(49, "Spotted on Instagram & TikTok feeds this season");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 28);
        \u0275\u0275repeaterCreate(51, HomeComponent_For_52_Template, 15, 10, "div", 29, _forTrack0);
        \u0275\u0275template(53, HomeComponent_Conditional_53_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 24)(55, "a", 30);
        \u0275\u0275text(56, "Browse Full Catalog");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(57, "section", 17)(58, "div", 18)(59, "div", 19)(60, "p", 20);
        \u0275\u0275text(61, "\u{1F4F8} Instagram Gallery");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "h2", 21);
        \u0275\u0275text(63, "As Seen on Social");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "p", 22);
        \u0275\u0275text(65, "Tag us ");
        \u0275\u0275elementStart(66, "strong", 31);
        \u0275\u0275text(67, "#CaelineRental");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68, " to be featured");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 32);
        \u0275\u0275repeaterCreate(70, HomeComponent_For_71_Template, 8, 4, "a", 33, _forTrack0);
        \u0275\u0275template(72, HomeComponent_Conditional_72_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 34)(74, "a", 35);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(75, "svg", 36);
        \u0275\u0275element(76, "path", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, " Follow us on Instagram ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(78, "section", 38)(79, "div", 18)(80, "div", 19)(81, "p", 20);
        \u0275\u0275text(82, "\u2B50 Reviews");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "h2", 21);
        \u0275\u0275text(84, "What Our Guests Say");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "p", 22);
        \u0275\u0275text(86, "Trusted by 1,000+ happy customers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "div", 23);
        \u0275\u0275repeaterCreate(88, HomeComponent_For_89_Template, 13, 5, "div", 39, _forTrack0);
        \u0275\u0275template(90, HomeComponent_Conditional_90_Template, 2, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(91, "section", 40)(92, "div", 41)(93, "p", 42);
        \u0275\u0275text(94, "Ready for your moment?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "h2", 43);
        \u0275\u0275text(96, " Book Your Perfect Photoshoot ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "p", 44);
        \u0275\u0275text(98, " Choose your concept, pick your outfit, and create Instagram-worthy memories that last forever. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "div", 45)(100, "a", 46);
        \u0275\u0275text(101, " Book Now \u2014 From 350,000\u0111 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "a", 47);
        \u0275\u0275text(103, " See All Packages ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(104, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.petals);
        \u0275\u0275advance(18);
        \u0275\u0275repeater(ctx.stats);
        \u0275\u0275advance(14);
        \u0275\u0275conditional(36, ctx.packages().length === 0 ? 36 : 37);
        \u0275\u0275advance(15);
        \u0275\u0275repeater(ctx.trendingOutfits().slice(0, 8));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(53, ctx.trendingOutfits().length === 0 ? 53 : -1);
        \u0275\u0275advance(17);
        \u0275\u0275repeater(ctx.instagramPosts().slice(0, 8));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(72, ctx.instagramPosts().length === 0 ? 72 : -1);
        \u0275\u0275advance(16);
        \u0275\u0275repeater(ctx.reviews().slice(0, 4));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(90, ctx.reviews().length === 0 ? 90 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink, NavbarComponent, FooterComponent, FormsModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent" });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-VHFYSI4K.js.map

import {
  Router
} from "./chunk-UWOFIVKC.js";
import {
  ApiService,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-LMTSQMYK.js";

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "caeline_token";
var USER_KEY = "caeline_user";
var AuthService = class _AuthService {
  constructor(api, router) {
    this.api = api;
    this.router = router;
    this.currentUser = signal(this.loadUser());
  }
  login(username, password) {
    return this.api.login(username, password).pipe(tap((user) => {
      localStorage.setItem(TOKEN_KEY, user.token);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      this.currentUser.set(user);
    }));
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.currentUser.set(null);
    this.router.navigate(["/admin/login"]);
  }
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
  isAuthenticated() {
    return !!this.getToken();
  }
  isAdmin() {
    return this.currentUser()?.role === "ADMIN";
  }
  loadUser() {
    try {
      const stored = localStorage.getItem(USER_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(ApiService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-V63KXKCW.js.map

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "PSoG":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "J9tS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "pW6c");





let AuthGuard = /*@__PURE__*/ (() => {
    class AuthGuard {
        constructor(router, authenticationService) {
            this.router = router;
            this.authenticationService = authenticationService;
        }
        canActivate(route, state) {
            const authenticationService = this.authenticationService;
            if (authenticationService.currentUserValue) {
                // check if route is restricted by role
                if (route.data.roles && route.data.roles.indexOf(authenticationService.getRole()) === -1) {
                    // role not authorised so redirect to home page
                    this.router.navigate(['/']);
                    return false;
                }
                // authorised so return true
                return true;
            }
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function AuthGuard_Factory() { return new AuthGuard(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); }, token: AuthGuard, providedIn: "root" });
    return AuthGuard;
})();


/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _marsupilami_details_marsupilami_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marsupilami-details/marsupilami-details.component */ "./src/app/marsupilami-details/marsupilami-details.component.ts");
/* harmony import */ var _marsupilami_list_marsupilami_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marsupilami-list/marsupilami-list.component */ "./src/app/marsupilami-list/marsupilami-list.component.ts");
/* harmony import */ var _marsupilami_edit_marsupilami_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marsupilami-edit/marsupilami-edit.component */ "./src/app/marsupilami-edit/marsupilami-edit.component.ts");
/* harmony import */ var _marsupilami_registration_marsupilami_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marsupilami-registration/marsupilami-registration.component */ "./src/app/marsupilami-registration/marsupilami-registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./friend-list/friend-list.component */ "./src/app/friend-list/friend-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'registration', component: _marsupilami_registration_marsupilami_registration_component__WEBPACK_IMPORTED_MODULE_6__["MarsupilamiRegistrationComponent"] },
    { path: 'edit_marsupilami/:id', canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], component: _marsupilami_edit_marsupilami_edit_component__WEBPACK_IMPORTED_MODULE_5__["MarsupilamiEditComponent"] },
    { path: 'marsupilamis', canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], component: _marsupilami_list_marsupilami_list_component__WEBPACK_IMPORTED_MODULE_4__["MarsupilamiListComponent"] },
    { path: 'amis', canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], component: _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_9__["FriendListComponent"] },
    { path: 'marsupilamis/:id', canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], component: _marsupilami_details_marsupilami_details_component__WEBPACK_IMPORTED_MODULE_3__["MarsupilamiDetailsComponent"] },
    { path: '', redirectTo: 'marsupilamis', pathMatch: 'full' },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper lime lighten-2\">\n    <app-header></app-header>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'marsupilamiClient';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _marsupilami_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marsupilami.service */ "./src/app/marsupilami.service.ts");
/* harmony import */ var _marsupilami_list_marsupilami_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marsupilami-list/marsupilami-list.component */ "./src/app/marsupilami-list/marsupilami-list.component.ts");
/* harmony import */ var _marsupilami_details_marsupilami_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./marsupilami-details/marsupilami-details.component */ "./src/app/marsupilami-details/marsupilami-details.component.ts");
/* harmony import */ var _marsupilami_edit_marsupilami_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./marsupilami-edit/marsupilami-edit.component */ "./src/app/marsupilami-edit/marsupilami-edit.component.ts");
/* harmony import */ var _marsupilami_registration_marsupilami_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./marsupilami-registration/marsupilami-registration.component */ "./src/app/marsupilami-registration/marsupilami-registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./friend-list/friend-list.component */ "./src/app/friend-list/friend-list.component.ts");
/* harmony import */ var _friend_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./friend.service */ "./src/app/friend.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _marsupilami_list_marsupilami_list_component__WEBPACK_IMPORTED_MODULE_6__["MarsupilamiListComponent"],
                _marsupilami_details_marsupilami_details_component__WEBPACK_IMPORTED_MODULE_7__["MarsupilamiDetailsComponent"],
                _marsupilami_edit_marsupilami_edit_component__WEBPACK_IMPORTED_MODULE_8__["MarsupilamiEditComponent"],
                _marsupilami_registration_marsupilami_registration_component__WEBPACK_IMPORTED_MODULE_9__["MarsupilamiRegistrationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_14__["FriendListComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_marsupilami_service__WEBPACK_IMPORTED_MODULE_5__["MarsupilamiService"], _friend_service__WEBPACK_IMPORTED_MODULE_15__["FriendService"], _authentication_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        this.authService.emitCredentials();
        if (this.authService.isAuth) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.isAuthChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isCurrentUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.apiLogin = '/api/login';
        this.apiLogout = '/api/logout';
        this.currentUser = null;
        this.isAuth = false;
    }
    AuthenticationService.prototype.emitCredentials = function () {
        this.isAuthChange.next(this.isAuth);
        this.isCurrentUser.next(this.currentUser);
    };
    AuthenticationService.prototype.login = function (body) {
        this.isAuth = true;
        this.emitCredentials();
        return this.http.post("" + this.apiLogin, body);
    };
    AuthenticationService.prototype.logout = function () {
        this.isAuth = false;
        this.currentUser = null;
        this.emitCredentials();
        return this.http.get("" + this.apiLogout);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/friend-list/friend-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/friend-list/friend-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/friend-list/friend-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/friend-list/friend-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"collection\" *ngFor=\"let m of friends | async\">\n  <li class=\"collection-item avatar\">\n    <span class=\"title\">Nom: {{ m.login }}</span>\n    <p>Famille: {{ m.famille }}<br>\n      Race: {{ m.race }}<br>\n      Nourriture: {{ m.nourriture }}<br>\n    </p>\n    <a [routerLink]=\"['/marsupilamis/', m._id]\" class=\"btn-floating btn-large waves-effect waves-light lime lighten-2\">Voir</a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/friend-list/friend-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/friend-list/friend-list.component.ts ***!
  \******************************************************/
/*! exports provided: FriendListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendListComponent", function() { return FriendListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _friend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../friend.service */ "./src/app/friend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendListComponent = /** @class */ (function () {
    function FriendListComponent(friendService) {
        this.friendService = friendService;
    }
    FriendListComponent.prototype.ngOnInit = function () {
        this.getFriends();
    };
    FriendListComponent.prototype.getFriends = function () {
        this.friends = this.friendService.getFriends();
    };
    FriendListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friend-list',
            template: __webpack_require__(/*! ./friend-list.component.html */ "./src/app/friend-list/friend-list.component.html"),
            styles: [__webpack_require__(/*! ./friend-list.component.css */ "./src/app/friend-list/friend-list.component.css")]
        }),
        __metadata("design:paramtypes", [_friend_service__WEBPACK_IMPORTED_MODULE_1__["FriendService"]])
    ], FriendListComponent);
    return FriendListComponent;
}());



/***/ }),

/***/ "./src/app/friend.service.ts":
/*!***********************************!*\
  !*** ./src/app/friend.service.ts ***!
  \***********************************/
/*! exports provided: FriendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendService", function() { return FriendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendService = /** @class */ (function () {
    function FriendService(http) {
        this.http = http;
        this.apiFriends = '/api/amis';
    }
    FriendService.prototype.getFriends = function () {
        return this.http.get("" + this.apiFriends);
    };
    FriendService.prototype.addFriend = function (newMarsupilami) {
        return this.http.post(this.apiFriends + "/" + newMarsupilami._id, newMarsupilami);
    };
    FriendService.prototype.deleteFriend = function (marsupilami) {
        return this.http.delete(this.apiFriends + "/" + marsupilami._id);
    };
    FriendService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FriendService);
    return FriendService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n    height: 50px;\n    width: 50px;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a ref=\"#!\" class=\"brand-logo left\"><img class=\"logo \"src=\"../../assets/images/marsupilami.png\"/></a>\n<a href=\"#!\" class=\"brand-logo center\">MarsupilAmi</a>\n<ul class=\"right hide-on-med-and-down\">\n  <li><a routerLink=\"/login\" *ngIf=\"!isAuth\">Login</a></li>\n  <li><a (click)=\"onLogout()\" *ngIf=\"isAuth\">Logout</a></li>\n  <li><a routerLink=\"/registration\" *ngIf=\"!isAuth\">Inscription</a></li>\n  <li><a routerLink=\"/registration\" *ngIf=\"isAuth\">Inscrire ami</a></li>\n  <li><a routerLink=\"/marsupilamis/{{ currentUser._id }}\" *ngIf=\"isAuth\">{{currentUser.login}}</a></li>\n  <li><a routerLink=\"/edit_marsupilami/{{ currentUser._id }}\" *ngIf=\"isAuth\">Editer</a></li>\n  <li><a routerLink=\"/amis\" *ngIf=\"isAuth\">Amis</a></li>\n  <li><a routerLink=\"/marsupilamis\" *ngIf=\"isAuth\">Marsupilamis</a></li>\n</ul>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.authService.isAuthChange.subscribe(function (status) {
            _this.isAuth = status;
        });
        this.userSubscription = this.authService.isCurrentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.authService.emitCredentials();
    };
    HeaderComponent.prototype.onLogout = function () {
        var _this = this;
        this.authService.logout().subscribe(function () { return _this.authService.emitCredentials(); }, function (err) { return console.log(err); }, function () { return _this.router.navigate(['/login']); });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s6 offset-s3\">\n    <div class=\"center-align\">\n      <h2 class=\"lime lighten-2 white-text z-depth-3\">Connexion: </h2>\n      <form [formGroup]=\"marsuForm\" (ngSubmit)=\"login()\">\n        <div class=\"form-group\">\n          <label for=\"login\">Login:</label>\n          <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'invalid': !marsuForm.controls.login.valid && marsuForm.controls.login.dirty }\"\n            id=\"login\" formControlName=\"login\">\n          <div *ngIf=\"!marsuForm.controls.login.valid && marsu.controls.login.dirty\">\n            Utilisateur inconnu\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"mdp\">Mot de passe: </label>\n          <input type=\"password\" class=\"form-control\" id=\"mdp\" formControlName=\"mdp\" [ngClass]=\"{ 'invalid': !marsuForm.controls.mdp.valid && marsuForm.controls.mdp.dirty }\">\n        </div>\n        <button class=\"btn waves-effect waves-light pulse lime darken-2\" type=\"submit\" name=\"action\" [disabled]=\"!marsuForm.valid\">\n          Login\n        </button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _marsupilami_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../marsupilami.service */ "./src/app/marsupilami.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(marsupilamiService, authenticationService, formBuilder, route) {
        this.marsupilamiService = marsupilamiService;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.route = route;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.authenticationService.emitCredentials();
    };
    LoginComponent.prototype.initializeForm = function () {
        this.marsuForm = this.formBuilder.group({
            login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mdp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var formValues = this.marsuForm.value;
        this.credentials = {
            login: formValues.login,
            mdp: formValues.mdp
        };
        this.authenticationService.login(this.credentials).subscribe(function (result) {
            _this.marsupilami = result;
            _this.authenticationService.currentUser = _this.marsupilami;
            _this.authenticationService.emitCredentials();
            _this.route.navigate(['/marsupilamis']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_marsupilami_service__WEBPACK_IMPORTED_MODULE_2__["MarsupilamiService"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/marsupilami-details/marsupilami-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/marsupilami-details/marsupilami-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/marsupilami-details/marsupilami-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/marsupilami-details/marsupilami-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"!marsupilami\">Chargement en cours...</p>\n<div class=\"card big\" *ngIf=\"marsupilami\">\n  <div class=\"card-content\">\n    <h4 class=\"lime lighten-2\">Détails sur le Marsupilami:</h4>\n    <span class=\"card-title\">Nom: {{ marsupilami.login }}</span>\n    <p>Famille: {{ marsupilami.famille }}</p>\n    <p>Race: {{ marsupilami.race}}</p>\n    <p>Nourriture: {{ marsupilami.nourriture}}</p>\n    <div class=\"card-action\">\n      <a routerLink=\"/marsupilamis\" class=\"btn lime lighten-2 btn-lg btn-primary center-align\">\n        Retour\n      </a>\n      <button (click)=\"addFriend(marsupilami)\" *ngIf=\"friendable\" class=\"btn lime lighten-2 btn-lg btn-primary center-align\">\n        Ajouter\n      </button>\n      <button (click)=\"deleteFriend(marsupilami)\" *ngIf=\"unfriendable\" class=\"btn lime lighten-2 btn-lg btn-primary center-align\">\n        Supprimer\n        </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/marsupilami-details/marsupilami-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/marsupilami-details/marsupilami-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: MarsupilamiDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarsupilamiDetailsComponent", function() { return MarsupilamiDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marsupilami_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../marsupilami.service */ "./src/app/marsupilami.service.ts");
/* harmony import */ var _friend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../friend.service */ "./src/app/friend.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MarsupilamiDetailsComponent = /** @class */ (function () {
    function MarsupilamiDetailsComponent(route, router, authService, marsupilamiService, friendService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.marsupilamiService = marsupilamiService;
        this.friendService = friendService;
    }
    MarsupilamiDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription = this.authService.isCurrentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.getMarsuDetails();
        this.authService.emitCredentials();
    };
    MarsupilamiDetailsComponent.prototype.getMarsuDetails = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.marsupilamiService.getMarsupilami(params['id']).subscribe(function (data) {
            _this.marsupilami = data;
            if (_this.marsupilami._id === _this.currentUser._id || _this.currentUser.friend_ids.includes(_this.marsupilami._id)) {
                _this.friendable = false;
                if (_this.marsupilami._id !== _this.currentUser._id) {
                    _this.unfriendable = true;
                }
                else {
                    _this.unfriendable = false;
                }
            }
            else {
                _this.friendable = true;
                _this.unfriendable = false;
            }
        }); });
    };
    MarsupilamiDetailsComponent.prototype.addFriend = function (marsupilami) {
        var _this = this;
        this.friendService.addFriend(marsupilami).subscribe(function (data) { return _this.marsupilami = data; });
        this.router.navigate(['amis']);
    };
    MarsupilamiDetailsComponent.prototype.deleteFriend = function (marsupilami) {
        var _this = this;
        this.friendService.deleteFriend(marsupilami).subscribe(function (data) { return _this.marsupilami = data; });
        this.router.navigate(['amis']);
    };
    MarsupilamiDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marsupilami-details',
            template: __webpack_require__(/*! ./marsupilami-details.component.html */ "./src/app/marsupilami-details/marsupilami-details.component.html"),
            styles: [__webpack_require__(/*! ./marsupilami-details.component.css */ "./src/app/marsupilami-details/marsupilami-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _marsupilami_service__WEBPACK_IMPORTED_MODULE_2__["MarsupilamiService"],
            _friend_service__WEBPACK_IMPORTED_MODULE_3__["FriendService"]])
    ], MarsupilamiDetailsComponent);
    return MarsupilamiDetailsComponent;
}());



/***/ }),

/***/ "./src/app/marsupilami-edit/marsupilami-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/marsupilami-edit/marsupilami-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/marsupilami-edit/marsupilami-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/marsupilami-edit/marsupilami-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-align\">\n  <h2 class=\"lime lighten-2 z-depth-3\">Inscription</h2>\n  <form [formGroup]=\"marsuForm\" (ngSubmit)=\"editMarsupilami()\">\n    <div class=\"form-group\">\n      <label for=\"login\">Login:</label>\n      <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'invalid': !marsuForm.controls.login.valid && marsuForm.controls.login.dirty }\"\n        id=\"login\" formControlName=\"login\">\n      <div *ngIf=\"!marsuForm.controls.login.valid && marsuForm.controls.login.dirty\">\n        Le nom du Marsupilami est obligatoire!\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"mdp\">Mot de passe: </label>\n      <input type=\"password\" class=\"form-control\" id=\"mdp\" formControlName=\"mdp\" [ngClass]=\"{ 'invalid': !marsuForm.controls.mdp.valid && marsuForm.controls.mdp.dirty }\">\n    </div>\n    <div *ngIf=\"!marsuForm.controls.mdp.valid && marsuForm.controls.mdp.dirty\">\n      Le mot de passe est obligatoire!\n    </div>\n    <div class=\"form-group\">\n      <label for=\"date_naissance\">Date de Naissance:</label>\n      <input type=\"text\" class=\"form-control\" id=\"date_naissance\" formControlName=\"date_naissance\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"famille\">Famille: </label>\n      <input type=\"text\" class=\"form-control\" id=\"famille\" formControlName=\"famille\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"race\">Race :</label>\n      <input type=\"text\" class=\"form-control\" id=\"race\" formControlName=\"race\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"nourriture\">Nourriture: </label>\n      <input type=\"text\" class=\"form-control\" id=\"nourriture\" formControlName=\"nourriture\">\n    </div>\n    <button class=\"lime lighten-2 btn waves-effect waves-light pulse\" type=\"submit\" name=\"action\" [disabled]=\"!marsuForm.valid\">\n      Modifier\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/marsupilami-edit/marsupilami-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/marsupilami-edit/marsupilami-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: MarsupilamiEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarsupilamiEditComponent", function() { return MarsupilamiEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marsupilami__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../marsupilami */ "./src/app/marsupilami.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _marsupilami_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../marsupilami.service */ "./src/app/marsupilami.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MarsupilamiEditComponent = /** @class */ (function () {
    function MarsupilamiEditComponent(marsupilamiService, formBuilder, route, router) {
        this.marsupilamiService = marsupilamiService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
    }
    MarsupilamiEditComponent.prototype.ngOnInit = function () {
        this.initializeForm();
        this.getMarsupilamisDetails();
    };
    MarsupilamiEditComponent.prototype.getMarsupilamisDetails = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.marsupilamiService.getMarsupilami(params['id']).subscribe(function (data) {
            _this.marsupilami_id = data._id;
            _this.marsuForm.controls['login'].setValue(data.login);
            _this.marsuForm.controls['mdp'].setValue(data.mdp);
            _this.marsuForm.controls['famille'].setValue(data.famille);
            _this.marsuForm.controls['date_naissance'].setValue(data.date_naissance);
            _this.marsuForm.controls['race'].setValue(data.race);
            _this.marsuForm.controls['nourriture'].setValue(data.nourriture);
        }); });
    };
    MarsupilamiEditComponent.prototype.initializeForm = function () {
        this.marsuForm = this.formBuilder.group({
            login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mdp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date_naissance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            famille: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            race: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nourriture: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    MarsupilamiEditComponent.prototype.editMarsupilami = function () {
        var _this = this;
        var formValues = this.marsuForm.value;
        this.marsupilami = new _marsupilami__WEBPACK_IMPORTED_MODULE_1__["Marsupilami"]();
        this.marsupilami._id = this.marsupilami_id;
        this.marsupilami.login = formValues.login;
        this.marsupilami.mdp = formValues.mdp;
        this.marsupilami.date_naissance = formValues.date_naissance;
        this.marsupilami.famille = formValues.famille;
        this.marsupilami.race = formValues.race;
        this.marsupilami.nourriture = formValues.nourriture;
        this.marsupilamiService.editMarsupilami(this.marsupilami).subscribe(function () {
            _this.router.navigate(['marsupilamis']);
        });
    };
    MarsupilamiEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marsupilami-edit',
            template: __webpack_require__(/*! ./marsupilami-edit.component.html */ "./src/app/marsupilami-edit/marsupilami-edit.component.html"),
            styles: [__webpack_require__(/*! ./marsupilami-edit.component.css */ "./src/app/marsupilami-edit/marsupilami-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_marsupilami_service__WEBPACK_IMPORTED_MODULE_3__["MarsupilamiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MarsupilamiEditComponent);
    return MarsupilamiEditComponent;
}());



/***/ }),

/***/ "./src/app/marsupilami-list/marsupilami-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/marsupilami-list/marsupilami-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/marsupilami-list/marsupilami-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/marsupilami-list/marsupilami-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"collection\" *ngFor=\"let m of marsupilamis | async\">\n  <li class=\"collection-item avatar\">\n    <span class=\"title\">Nom: {{ m.login }}</span>\n    <p>Famille: {{ m.famille }}<br>\n      Race: {{ m.race }}<br>\n      Nourriture: {{ m.nourriture }}<br>\n    </p>\n    <a [routerLink]=\"['/marsupilamis/', m._id]\" class=\"btn-floating btn-large waves-effect waves-light lime lighten-2\">Voir</a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/marsupilami-list/marsupilami-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/marsupilami-list/marsupilami-list.component.ts ***!
  \****************************************************************/
/*! exports provided: MarsupilamiListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarsupilamiListComponent", function() { return MarsupilamiListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marsupilami_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../marsupilami.service */ "./src/app/marsupilami.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarsupilamiListComponent = /** @class */ (function () {
    function MarsupilamiListComponent(marsupilamiService) {
        this.marsupilamiService = marsupilamiService;
    }
    MarsupilamiListComponent.prototype.ngOnInit = function () {
        this.getMarsupilamis();
    };
    MarsupilamiListComponent.prototype.getMarsupilamis = function () {
        this.marsupilamis = this.marsupilamiService.getMarsupilamis();
    };
    MarsupilamiListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marsupilami-list',
            template: __webpack_require__(/*! ./marsupilami-list.component.html */ "./src/app/marsupilami-list/marsupilami-list.component.html"),
            styles: [__webpack_require__(/*! ./marsupilami-list.component.css */ "./src/app/marsupilami-list/marsupilami-list.component.css")]
        }),
        __metadata("design:paramtypes", [_marsupilami_service__WEBPACK_IMPORTED_MODULE_1__["MarsupilamiService"]])
    ], MarsupilamiListComponent);
    return MarsupilamiListComponent;
}());



/***/ }),

/***/ "./src/app/marsupilami-registration/marsupilami-registration.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/marsupilami-registration/marsupilami-registration.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/marsupilami-registration/marsupilami-registration.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/marsupilami-registration/marsupilami-registration.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-align\">\n  <h2 class=\"lime lighten-2 z-depth-3\">Inscription</h2>\n  <form [formGroup]=\"marsuForm\" (ngSubmit)=\"addMarsupilami()\">\n    <div class=\"form-group\">\n      <label for=\"login\">Login:</label>\n      <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'invalid': !marsuForm.controls.login.valid && marsuForm.controls.login.dirty }\"\n        id=\"login\" formControlName=\"login\">\n      <div *ngIf=\"!marsuForm.controls.login.valid && marsuForm.controls.login.dirty\">\n        Le nom du Marsupilami est obligatoire!\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"mdp\">Mot de passe: </label>\n      <input type=\"password\" class=\"form-control\" id=\"mdp\" formControlName=\"mdp\" [ngClass]=\"{ 'invalid': !marsuForm.controls.mdp.valid && marsuForm.controls.mdp.dirty }\">\n    </div>\n    <div *ngIf=\"!marsuForm.controls.mdp.valid && marsuForm.controls.mdp.dirty\">\n      Le mot de passe est obligatoire!\n    </div>\n    <div class=\"form-group\">\n      <label for=\"date_naissance\">Date de Naissance:</label>\n      <input type=\"text\" class=\"form-control\" id=\"date_naissance\" formControlName=\"date_naissance\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"famille\">Famille: </label>\n      <input type=\"text\" class=\"form-control\" id=\"famille\" formControlName=\"famille\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"race\">Race :</label>\n      <input type=\"text\" class=\"form-control\" id=\"race\" formControlName=\"race\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"nourriture\">Nourriture: </label>\n      <input type=\"text\" class=\"form-control\" id=\"nourriture\" formControlName=\"nourriture\">\n    </div>\n    <button class=\"btn waves-effect waves-light pulse\" type=\"submit\" name=\"action\" [disabled]=\"!marsuForm.valid\">\n      Inscription\n    </button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/marsupilami-registration/marsupilami-registration.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/marsupilami-registration/marsupilami-registration.component.ts ***!
  \********************************************************************************/
/*! exports provided: MarsupilamiRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarsupilamiRegistrationComponent", function() { return MarsupilamiRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marsupilami__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../marsupilami */ "./src/app/marsupilami.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _marsupilami_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../marsupilami.service */ "./src/app/marsupilami.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _friend_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../friend.service */ "./src/app/friend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MarsupilamiRegistrationComponent = /** @class */ (function () {
    function MarsupilamiRegistrationComponent(marsupilamiService, authenticationService, friendService, formBuilder, route) {
        this.marsupilamiService = marsupilamiService;
        this.authenticationService = authenticationService;
        this.friendService = friendService;
        this.formBuilder = formBuilder;
        this.route = route;
    }
    MarsupilamiRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForm();
        this.authenticationService.isCurrentUser.subscribe(function (data) {
            _this.currentUser = data;
        });
        this.authenticationService.emitCredentials();
    };
    MarsupilamiRegistrationComponent.prototype.initializeForm = function () {
        this.marsuForm = this.formBuilder.group({
            login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mdp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date_naissance: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            famille: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            race: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nourriture: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    MarsupilamiRegistrationComponent.prototype.addMarsupilami = function () {
        var _this = this;
        var formValues = this.marsuForm.value;
        this.marsupilami = new _marsupilami__WEBPACK_IMPORTED_MODULE_1__["Marsupilami"]();
        this.marsupilami.login = formValues.login;
        this.marsupilami.mdp = formValues.mdp;
        this.marsupilami.date_naissance = formValues.date_naissance;
        this.marsupilami.famille = formValues.famille;
        this.marsupilami.race = formValues.race;
        this.marsupilami.nourriture = formValues.nourriture;
        this.marsupilami.friend_ids = [];
        this.marsupilamiService.addMarsupilami(this.marsupilami).subscribe(function (newUser) {
            var credentials = {
                login: _this.marsupilami.login,
                mdp: _this.marsupilami.mdp
            };
            if (_this.currentUser) {
                _this.friendService.addFriend(newUser).subscribe(function () {
                    _this.authenticationService.emitCredentials();
                });
                _this.route.navigate(['marsupilamis']);
            }
            else {
                _this.authenticationService.login(credentials).subscribe(function (result) {
                    _this.marsupilami = result;
                    _this.authenticationService.currentUser = _this.marsupilami;
                    _this.authenticationService.emitCredentials();
                    _this.route.navigate(['marsupilamis']);
                });
            }
        });
    };
    MarsupilamiRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marsupilami-registration',
            template: __webpack_require__(/*! ./marsupilami-registration.component.html */ "./src/app/marsupilami-registration/marsupilami-registration.component.html"),
            styles: [__webpack_require__(/*! ./marsupilami-registration.component.css */ "./src/app/marsupilami-registration/marsupilami-registration.component.css")]
        }),
        __metadata("design:paramtypes", [_marsupilami_service__WEBPACK_IMPORTED_MODULE_3__["MarsupilamiService"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _friend_service__WEBPACK_IMPORTED_MODULE_6__["FriendService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MarsupilamiRegistrationComponent);
    return MarsupilamiRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/marsupilami.service.ts":
/*!****************************************!*\
  !*** ./src/app/marsupilami.service.ts ***!
  \****************************************/
/*! exports provided: MarsupilamiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarsupilamiService", function() { return MarsupilamiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarsupilamiService = /** @class */ (function () {
    function MarsupilamiService(http) {
        this.http = http;
        this.apiUrl = '/api/marsupilamis';
    }
    MarsupilamiService.prototype.getMarsupilamis = function () {
        return this.http.get("" + this.apiUrl);
    };
    MarsupilamiService.prototype.addMarsupilami = function (newMarsupilami) {
        return this.http.post("" + this.apiUrl, newMarsupilami);
    };
    MarsupilamiService.prototype.editMarsupilami = function (updatedMarsupilami) {
        return this.http.put(this.apiUrl + "/" + updatedMarsupilami._id, updatedMarsupilami);
    };
    MarsupilamiService.prototype.getMarsupilami = function (idRecherche) {
        return this.http.get(this.apiUrl + "/" + idRecherche);
    };
    MarsupilamiService.prototype.deleteMarsupilami = function (marsupilami) {
        var idASupprimer = marsupilami._id;
        return this.http.delete(this.apiUrl + "/" + idASupprimer);
    };
    MarsupilamiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MarsupilamiService);
    return MarsupilamiService;
}());



/***/ }),

/***/ "./src/app/marsupilami.ts":
/*!********************************!*\
  !*** ./src/app/marsupilami.ts ***!
  \********************************/
/*! exports provided: Marsupilami */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marsupilami", function() { return Marsupilami; });
var Marsupilami = /** @class */ (function () {
    function Marsupilami() {
    }
    return Marsupilami;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"red\">\n  Erreur 404: Impossible de trouver la page!\n</h1>\n<p>Redirection dans {{ seconds }} seconde<span *ngIf=\"seconds > 1\">s</span>... </p>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(route) {
        this.route = route;
        this.seconds = 5;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.autoRedirect();
        }, 5000);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000).subscribe(function () {
            _this.seconds -= 1;
        });
    };
    NotFoundComponent.prototype.autoRedirect = function () {
        this.route.navigate(['']);
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/flo/Desktop/AngularMarsupi/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
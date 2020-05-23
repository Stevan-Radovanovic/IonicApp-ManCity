(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coaches-coaches-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coaches/coach-modal/coach-modal.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coaches/coach-modal/coach-modal.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Add a Coach</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onDismissModal()\">\n        <ion-icon name=\"close-circle-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item class=\"ion-text-center\" lines=\"none\">\n      <ion-label>\n        <h2><strong>A new coach enters the family!</strong></h2>\n      </ion-label>\n    </ion-item>\n    <br />\n    <form [formGroup]=\"form\">\n      <ion-item>\n        <ion-label position=\"floating\">Coach Name</ion-label>\n        <ion-input formControlName=\"name\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item\n        lines=\"none\"\n        *ngIf=\"this.form.controls.name.invalid && this.form.controls.name.touched\"\n      >\n        <ion-label style=\"color: var(--ion-color-danger); font-size: x-small;\">\n          This field is required.\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Image Url</ion-label>\n        <ion-input formControlName=\"imageUrl\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item\n        lines=\"none\"\n        *ngIf=\"this.form.controls.imageUrl.invalid && this.form.controls.imageUrl.touched\"\n      >\n        <ion-label style=\"color: var(--ion-color-danger); font-size: x-small;\">\n          This field is required.\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"ion-text-center\">\n        <ion-label>\n          <ion-button\n            fill=\"solid\"\n            size=\"medium\"\n            color=\"primary\"\n            [disabled]=\"this.form.invalid\"\n            (click)=\"onAddCoach()\"\n          >\n            <ion-icon slot=\"start\" name=\"person-add-outline\"></ion-icon>Add new\n            Coach\n          </ion-button>\n        </ion-label>\n      </ion-item>\n    </form>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/coaches/coaches.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coaches/coaches.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\"></ion-menu-button>\n    <ion-title>Coaches</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onActivateModal()\">\n        <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-searchbar\n    animated\n    showCancelButton=\"focus\"\n    color=\"primary\"\n    (ionClear)=\"onClear()\"\n    (ionCancel)=\"onCancel()\"\n    (ionChange)=\" onChangeSearchValue()\"\n    padding\n    [(ngModel)]=\"searchBarInput\"\n  ></ion-searchbar>\n  <ion-item\n    *ngIf=\"!hasCoaches && !isLoading\"\n    class=\"ion-text-center\"\n    lines=\"none\"\n  >\n    <ion-label>\n      <p>No coaches found</p>\n    </ion-label>\n  </ion-item>\n  <ion-list *ngIf=\"hasCoaches\">\n    <ion-item-sliding *ngFor=\"let coach of coaches\">\n      <ion-item [routerLink]=\"['/home/coaches',coach._id]\">\n        <ion-avatar slot=\"start\">\n          <ion-img [src]=\"coach.imageUrl\"> </ion-img>\n        </ion-avatar>\n        <ion-label>\n          {{coach.name}}\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"onClickDelete(coach)\">\n          <ion-icon name=\"trash-bin\" slot=\"icon-only\"></ion-icon\n        ></ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/coaches/coach-modal/coach-modal-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/coaches/coach-modal/coach-modal-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CoachModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachModalPageRoutingModule", function() { return CoachModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _coach_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coach-modal.page */ "./src/app/coaches/coach-modal/coach-modal.page.ts");




const routes = [
    {
        path: '',
        component: _coach_modal_page__WEBPACK_IMPORTED_MODULE_3__["CoachModalPage"]
    }
];
let CoachModalPageRoutingModule = class CoachModalPageRoutingModule {
};
CoachModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoachModalPageRoutingModule);



/***/ }),

/***/ "./src/app/coaches/coach-modal/coach-modal.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/coaches/coach-modal/coach-modal.module.ts ***!
  \***********************************************************/
/*! exports provided: CoachModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachModalPageModule", function() { return CoachModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _coach_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coach-modal-routing.module */ "./src/app/coaches/coach-modal/coach-modal-routing.module.ts");
/* harmony import */ var _coach_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coach-modal.page */ "./src/app/coaches/coach-modal/coach-modal.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let CoachModalPageModule = class CoachModalPageModule {
};
CoachModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _coach_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoachModalPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_coach_modal_page__WEBPACK_IMPORTED_MODULE_6__["CoachModalPage"]],
        exports: [_coach_modal_page__WEBPACK_IMPORTED_MODULE_6__["CoachModalPage"]],
    })
], CoachModalPageModule);



/***/ }),

/***/ "./src/app/coaches/coach-modal/coach-modal.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/coaches/coach-modal/coach-modal.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvYWNoZXMvY29hY2gtbW9kYWwvY29hY2gtbW9kYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/coaches/coach-modal/coach-modal.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/coaches/coach-modal/coach-modal.page.ts ***!
  \*********************************************************/
/*! exports provided: CoachModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachModalPage", function() { return CoachModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_shared_services_coaches_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/coaches.service */ "./src/app/shared/services/coaches.service.ts");






let CoachModalPage = class CoachModalPage {
    constructor(modalCtrl, serv) {
        this.modalCtrl = modalCtrl;
        this.serv = serv;
    }
    ngOnInit() {
        this.generateForm();
    }
    onDismissModal() {
        this.modalCtrl.dismiss();
        console.log('%c ALERT: Modal Dissmised', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].consoleLog);
    }
    generateForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            }),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                updateOn: 'change',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            }),
        });
    }
    ionViewWillEnter() {
        this.generateForm();
    }
    onAddCoach() {
        const coach = {
            name: this.form.controls.name.value,
            imageUrl: this.form.controls.imageUrl.value,
        };
        this.serv.postCoach(coach).subscribe((response) => {
            console.log('%c ALERT: Coach Saved', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].consoleLog);
            this.modalCtrl.dismiss();
            console.log('%c ALERT: Modal Dissmised', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].consoleLog);
        }, (error) => {
            console.log('%c ERROR: ' + error.message, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].consoleLogError);
        });
    }
};
CoachModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_shared_services_coaches_service__WEBPACK_IMPORTED_MODULE_5__["CoachesService"] }
];
CoachModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coach-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coach-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coaches/coach-modal/coach-modal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coach-modal.page.scss */ "./src/app/coaches/coach-modal/coach-modal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        src_app_shared_services_coaches_service__WEBPACK_IMPORTED_MODULE_5__["CoachesService"]])
], CoachModalPage);



/***/ }),

/***/ "./src/app/coaches/coaches-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/coaches/coaches-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CoachesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachesPageRoutingModule", function() { return CoachesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _coaches_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coaches.page */ "./src/app/coaches/coaches.page.ts");




const routes = [
    {
        path: '',
        component: _coaches_page__WEBPACK_IMPORTED_MODULE_3__["CoachesPage"],
    },
    {
        path: ':id',
        loadChildren: () => __webpack_require__.e(/*! import() | coach-detail-coach-detail-module */ "coach-detail-coach-detail-module").then(__webpack_require__.bind(null, /*! ./coach-detail/coach-detail.module */ "./src/app/coaches/coach-detail/coach-detail.module.ts")).then((m) => m.CoachDetailPageModule),
    },
];
let CoachesPageRoutingModule = class CoachesPageRoutingModule {
};
CoachesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoachesPageRoutingModule);



/***/ }),

/***/ "./src/app/coaches/coaches.module.ts":
/*!*******************************************!*\
  !*** ./src/app/coaches/coaches.module.ts ***!
  \*******************************************/
/*! exports provided: CoachesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachesPageModule", function() { return CoachesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _coaches_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coaches-routing.module */ "./src/app/coaches/coaches-routing.module.ts");
/* harmony import */ var _coaches_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coaches.page */ "./src/app/coaches/coaches.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _coach_modal_coach_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coach-modal/coach-modal.page */ "./src/app/coaches/coach-modal/coach-modal.page.ts");
/* harmony import */ var _coach_modal_coach_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coach-modal/coach-modal.module */ "./src/app/coaches/coach-modal/coach-modal.module.ts");











let CoachesPageModule = class CoachesPageModule {
};
CoachesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _coaches_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoachesPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _coach_modal_coach_modal_module__WEBPACK_IMPORTED_MODULE_10__["CoachModalPageModule"],
        ],
        declarations: [_coaches_page__WEBPACK_IMPORTED_MODULE_6__["CoachesPage"]],
        entryComponents: [_coach_modal_coach_modal_page__WEBPACK_IMPORTED_MODULE_9__["CoachModalPage"]],
    })
], CoachesPageModule);



/***/ }),

/***/ "./src/app/coaches/coaches.page.scss":
/*!*******************************************!*\
  !*** ./src/app/coaches/coaches.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvYWNoZXMvY29hY2hlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/coaches/coaches.page.ts":
/*!*****************************************!*\
  !*** ./src/app/coaches/coaches.page.ts ***!
  \*****************************************/
/*! exports provided: CoachesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachesPage", function() { return CoachesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_coaches_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/coaches.service */ "./src/app/shared/services/coaches.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _coach_modal_coach_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coach-modal/coach-modal.page */ "./src/app/coaches/coach-modal/coach-modal.page.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let CoachesPage = class CoachesPage {
    constructor(serv, modalController, loadingCtrl) {
        this.serv = serv;
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.coaches = [];
        this.fullListCoaches = [];
        this.hasCoaches = false;
        this.isLoading = true;
    }
    ngOnInit() { }
    getCoaches() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({ message: 'Please Wait...' });
            this.isLoading = true;
            loader.present();
            this.serv
                .getCoaches()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => {
                this.sub = this.serv.coachSubject.subscribe((response) => {
                    console.log('%c ALERT: Subject Triggered', src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].consoleLog);
                    if (response.length > 0) {
                        this.hasCoaches = true;
                    }
                    this.coaches = response;
                    this.fullListCoaches = this.coaches;
                    if (this.coaches.length === 0) {
                        this.hasCoaches = false;
                    }
                });
            }))
                .subscribe(() => {
                console.log('%c ALERT: Coaches Fetched', src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].consoleLog);
                loader.dismiss();
                this.isLoading = false;
            });
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getCoaches();
        });
    }
    ionViewWillLeave() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    onCancel() {
        this.coaches = this.fullListCoaches;
    }
    onClear() {
        this.coaches = this.fullListCoaches;
    }
    onChangeSearchValue() {
        if (this.searchBarInput === '') {
            this.coaches = this.fullListCoaches;
            return;
        }
        console.log(this.searchBarInput);
        this.coaches = this.fullListCoaches.filter((coach) => coach.name
            .toLocaleLowerCase()
            .includes(this.searchBarInput.toLocaleLowerCase()));
    }
    onActivateModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _coach_modal_coach_modal_page__WEBPACK_IMPORTED_MODULE_5__["CoachModalPage"],
            });
            modal.present();
            modal.onDidDismiss().then(() => {
                this.sub.unsubscribe();
                this.getCoaches();
            });
        });
    }
    onClickDelete(coach) {
        this.serv.deleteCoach(coach._id).subscribe((response) => {
            console.log('%c ALERT: Coach Deleted', src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].consoleLog);
        }, (error) => {
            console.log('%c ERROR: ' + error.message, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].consoleLogError);
        });
    }
};
CoachesPage.ctorParameters = () => [
    { type: _shared_services_coaches_service__WEBPACK_IMPORTED_MODULE_2__["CoachesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
CoachesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coaches',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coaches.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/coaches/coaches.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coaches.page.scss */ "./src/app/coaches/coaches.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_coaches_service__WEBPACK_IMPORTED_MODULE_2__["CoachesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], CoachesPage);



/***/ }),

/***/ "./src/app/shared/services/coaches.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/coaches.service.ts ***!
  \****************************************************/
/*! exports provided: CoachesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoachesService", function() { return CoachesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let CoachesService = class CoachesService {
    constructor(http) {
        this.http = http;
        this.hasFavorite = false;
        this.coachSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.coaches = [];
    }
    getCoaches() {
        return this.http
            .get('http://localhost:3000/coaches')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((coaches) => {
            this.coachSubject.next(coaches.documents);
        }));
    }
    getCoach(id) {
        console.log('%c ALERT: Coach Fetched', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].consoleLog);
        let selectedCoach;
        this.coachSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((coaches) => {
            selectedCoach = coaches.find((coach) => {
                return coach._id === id;
            });
        });
        return selectedCoach;
    }
    postCoach(coach) {
        return this.http
            .post('http://localhost:3000/coaches', coach)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((result) => {
            if (result.signal === true) {
                this.coachSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((coaches) => {
                    this.coachSubject.next(coaches.concat(coach));
                });
            }
        }));
    }
    deleteCoach(pid) {
        return this.http
            .delete('http://localhost:3000/coaches/deleteOne', {
            params: {
                id: pid,
            },
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            if (response.signal === true) {
                this.coachSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((coaches) => {
                    this.coachSubject.next(coaches.filter((co) => pid !== co._id));
                });
            }
        }));
    }
};
CoachesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CoachesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], CoachesService);



/***/ })

}]);
//# sourceMappingURL=coaches-coaches-module-es2015.js.map
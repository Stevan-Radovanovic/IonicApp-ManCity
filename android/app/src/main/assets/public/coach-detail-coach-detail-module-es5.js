function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coach-detail-coach-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/coaches/coach-detail/coach-detail.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coaches/coach-detail/coach-detail.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoachesCoachDetailCoachDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/coaches\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Coach Profile</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onDeleteCoach()\">\n        <ion-icon name=\"trash-bin\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"6\" offset-md=\"3\">\n        <ion-img [src]=\"coach?.imageUrl\"> </ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-padding\">\n      <ion-col class=\"ion-text-center\">\n        <ion-label style=\"font-size: x-large;\">{{coach?.name}}</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/coaches/coach-detail/coach-detail-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/coaches/coach-detail/coach-detail-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: CoachDetailPageRoutingModule */

  /***/
  function srcAppCoachesCoachDetailCoachDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoachDetailPageRoutingModule", function () {
      return CoachDetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _coach_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./coach-detail.page */
    "./src/app/coaches/coach-detail/coach-detail.page.ts");

    var routes = [{
      path: '',
      component: _coach_detail_page__WEBPACK_IMPORTED_MODULE_3__["CoachDetailPage"]
    }];

    var CoachDetailPageRoutingModule = function CoachDetailPageRoutingModule() {
      _classCallCheck(this, CoachDetailPageRoutingModule);
    };

    CoachDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CoachDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/coaches/coach-detail/coach-detail.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/coaches/coach-detail/coach-detail.module.ts ***!
    \*************************************************************/

  /*! exports provided: CoachDetailPageModule */

  /***/
  function srcAppCoachesCoachDetailCoachDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoachDetailPageModule", function () {
      return CoachDetailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _coach_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./coach-detail-routing.module */
    "./src/app/coaches/coach-detail/coach-detail-routing.module.ts");
    /* harmony import */


    var _coach_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./coach-detail.page */
    "./src/app/coaches/coach-detail/coach-detail.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var CoachDetailPageModule = function CoachDetailPageModule() {
      _classCallCheck(this, CoachDetailPageModule);
    };

    CoachDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _coach_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoachDetailPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_coach_detail_page__WEBPACK_IMPORTED_MODULE_6__["CoachDetailPage"]]
    })], CoachDetailPageModule);
    /***/
  },

  /***/
  "./src/app/coaches/coach-detail/coach-detail.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/coaches/coach-detail/coach-detail.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoachesCoachDetailCoachDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvYWNoZXMvY29hY2gtZGV0YWlsL2NvYWNoLWRldGFpbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/coaches/coach-detail/coach-detail.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/coaches/coach-detail/coach-detail.page.ts ***!
    \***********************************************************/

  /*! exports provided: CoachDetailPage */

  /***/
  function srcAppCoachesCoachDetailCoachDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoachDetailPage", function () {
      return CoachDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_coaches_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/coaches.service */
    "./src/app/shared/services/coaches.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var CoachDetailPage = /*#__PURE__*/function () {
      function CoachDetailPage(route, serv, alertCtrl, router) {
        _classCallCheck(this, CoachDetailPage);

        this.route = route;
        this.serv = serv;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.coach = null;
      }

      _createClass(CoachDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function (paramMap) {
            _this.coach = _this.serv.getCoach(paramMap.get('id'));

            if (_this.coach === undefined || _this.coach === null) {
              _this.router.navigateByUrl('/home/coaches');
            }
          });
        }
      }, {
        key: "onDeleteCoach",
        value: function onDeleteCoach() {
          var _this2 = this;

          this.serv.deleteCoach(this.coach._id).subscribe(function (response) {
            console.log('%c ALERT: Coach Deleted', src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].consoleLog);

            _this2.router.navigateByUrl('/home/coaches');
          }, function (error) {
            console.log('%c ERROR: ' + error.message, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].consoleLogError);
          });
        }
      }]);

      return CoachDetailPage;
    }();

    CoachDetailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_coaches_service__WEBPACK_IMPORTED_MODULE_3__["CoachesService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CoachDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-coach-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./coach-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/coaches/coach-detail/coach-detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./coach-detail.page.scss */
      "./src/app/coaches/coach-detail/coach-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_services_coaches_service__WEBPACK_IMPORTED_MODULE_3__["CoachesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], CoachDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=coach-detail-coach-detail-module-es5.js.map
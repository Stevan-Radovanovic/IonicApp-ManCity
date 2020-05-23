function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor"], {
  /***/
  "./node_modules/@angular/common/fesm2015/common.js":
  /*!*********************************************************!*\
    !*** ./node_modules/@angular/common/fesm2015/common.js ***!
    \*********************************************************/

  /*! exports provided: ɵangular_packages_common_common_c, ɵangular_packages_common_common_h, ɵangular_packages_common_common_g, ɵangular_packages_common_common_f, ɵangular_packages_common_common_k, ɵangular_packages_common_common_j, ɵangular_packages_common_common_i, ɵangular_packages_common_common_a, ɵangular_packages_common_common_b, ɵangular_packages_common_common_e, ɵangular_packages_common_common_d, ɵregisterLocaleData, registerLocaleData, formatDate, formatCurrency, formatNumber, formatPercent, NgLocaleLocalization, NgLocalization, Plural, NumberFormatStyle, FormStyle, TranslationWidth, FormatWidth, NumberSymbol, WeekDay, getNumberOfCurrencyDigits, getCurrencySymbol, getLocaleDayPeriods, getLocaleDayNames, getLocaleMonthNames, getLocaleId, getLocaleEraNames, getLocaleWeekEndRange, getLocaleFirstDayOfWeek, getLocaleDateFormat, getLocaleDateTimeFormat, getLocaleExtraDayPeriodRules, getLocaleExtraDayPeriods, getLocalePluralCase, getLocaleTimeFormat, getLocaleNumberSymbol, getLocaleNumberFormat, getLocaleCurrencyName, getLocaleCurrencySymbol, ɵparseCookieValue, CommonModule, DeprecatedI18NPipesModule, NgClass, NgClassBase, NgForOf, NgForOfContext, NgIf, NgIfContext, NgPlural, NgPluralCase, NgStyle, NgStyleBase, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, NgComponentOutlet, DOCUMENT, AsyncPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, SlicePipe, UpperCasePipe, TitleCasePipe, KeyValuePipe, DeprecatedDatePipe, DeprecatedCurrencyPipe, DeprecatedDecimalPipe, DeprecatedPercentPipe, ɵPLATFORM_BROWSER_ID, ɵPLATFORM_SERVER_ID, ɵPLATFORM_WORKER_APP_ID, ɵPLATFORM_WORKER_UI_ID, isPlatformBrowser, isPlatformServer, isPlatformWorkerApp, isPlatformWorkerUi, VERSION, ViewportScroller, ɵNullViewportScroller, ɵNgClassImplProvider__POST_R3__, ɵNgClassR2Impl, ɵNgClassImpl, ɵNgStyleImplProvider__POST_R3__, ɵNgStyleR2Impl, ɵNgStyleImpl, ɵngStyleDirectiveDef__POST_R3__, ɵngClassDirectiveDef__POST_R3__, PlatformLocation, LOCATION_INITIALIZED, LocationStrategy, APP_BASE_HREF, HashLocationStrategy, PathLocationStrategy, Location */

  /***/
  function node_modulesAngularCommonFesm2015CommonJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_common_c", function () {
      return COMMON_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_common_h", function () {
      return NgClassImplProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_common_g", function () {
      return NgClassImplProvider__PRE_R3__;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_common_f", function () {
      return NgClassR3Impl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_common_k", function () {
      return NgStyleImplProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_common_j", function () {
      return NgStyleImplProvider__PRE_R3__;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_common_i", function () {
      return NgStyleR3Impl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_common_a", function () {
      return DEPRECATED_PLURAL_FN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_common_b", function () {
      return getPluralCase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_common_e", function () {
      return COMMON_DEPRECATED_I18N_PIPES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_common_d", function () {
      return COMMON_PIPES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵregisterLocaleData", function () {
      return registerLocaleData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerLocaleData", function () {
      return registerLocaleData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatDate", function () {
      return formatDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatCurrency", function () {
      return formatCurrency;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatNumber", function () {
      return formatNumber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatPercent", function () {
      return formatPercent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgLocaleLocalization", function () {
      return NgLocaleLocalization;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgLocalization", function () {
      return NgLocalization;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Plural", function () {
      return Plural;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberFormatStyle", function () {
      return NumberFormatStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormStyle", function () {
      return FormStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslationWidth", function () {
      return TranslationWidth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatWidth", function () {
      return FormatWidth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberSymbol", function () {
      return NumberSymbol;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeekDay", function () {
      return WeekDay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getNumberOfCurrencyDigits", function () {
      return getNumberOfCurrencyDigits;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrencySymbol", function () {
      return getCurrencySymbol;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleDayPeriods", function () {
      return getLocaleDayPeriods;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleDayNames", function () {
      return getLocaleDayNames;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleMonthNames", function () {
      return getLocaleMonthNames;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleId", function () {
      return getLocaleId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleEraNames", function () {
      return getLocaleEraNames;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleWeekEndRange", function () {
      return getLocaleWeekEndRange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleFirstDayOfWeek", function () {
      return getLocaleFirstDayOfWeek;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleDateFormat", function () {
      return getLocaleDateFormat;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleDateTimeFormat", function () {
      return getLocaleDateTimeFormat;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleExtraDayPeriodRules", function () {
      return getLocaleExtraDayPeriodRules;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleExtraDayPeriods", function () {
      return getLocaleExtraDayPeriods;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocalePluralCase", function () {
      return getLocalePluralCase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleTimeFormat", function () {
      return getLocaleTimeFormat;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleNumberSymbol", function () {
      return getLocaleNumberSymbol;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleNumberFormat", function () {
      return getLocaleNumberFormat;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleCurrencyName", function () {
      return getLocaleCurrencyName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocaleCurrencySymbol", function () {
      return getLocaleCurrencySymbol;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵparseCookieValue", function () {
      return parseCookieValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonModule", function () {
      return CommonModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeprecatedI18NPipesModule", function () {
      return DeprecatedI18NPipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgClass", function () {
      return NgClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgClassBase", function () {
      return NgClassBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgForOf", function () {
      return NgForOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgForOfContext", function () {
      return NgForOfContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIf", function () {
      return NgIf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgIfContext", function () {
      return NgIfContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgPlural", function () {
      return NgPlural;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgPluralCase", function () {
      return NgPluralCase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgStyle", function () {
      return NgStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgStyleBase", function () {
      return NgStyleBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSwitch", function () {
      return NgSwitch;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSwitchCase", function () {
      return NgSwitchCase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSwitchDefault", function () {
      return NgSwitchDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgTemplateOutlet", function () {
      return NgTemplateOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgComponentOutlet", function () {
      return NgComponentOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DOCUMENT", function () {
      return DOCUMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsyncPipe", function () {
      return AsyncPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatePipe", function () {
      return DatePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "I18nPluralPipe", function () {
      return I18nPluralPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "I18nSelectPipe", function () {
      return I18nSelectPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonPipe", function () {
      return JsonPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LowerCasePipe", function () {
      return LowerCasePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyPipe", function () {
      return CurrencyPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DecimalPipe", function () {
      return DecimalPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PercentPipe", function () {
      return PercentPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlicePipe", function () {
      return SlicePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpperCasePipe", function () {
      return UpperCasePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitleCasePipe", function () {
      return TitleCasePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyValuePipe", function () {
      return KeyValuePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeprecatedDatePipe", function () {
      return DeprecatedDatePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeprecatedCurrencyPipe", function () {
      return DeprecatedCurrencyPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeprecatedDecimalPipe", function () {
      return DeprecatedDecimalPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeprecatedPercentPipe", function () {
      return DeprecatedPercentPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵPLATFORM_BROWSER_ID", function () {
      return PLATFORM_BROWSER_ID;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵPLATFORM_SERVER_ID", function () {
      return PLATFORM_SERVER_ID;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵPLATFORM_WORKER_APP_ID", function () {
      return PLATFORM_WORKER_APP_ID;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵPLATFORM_WORKER_UI_ID", function () {
      return PLATFORM_WORKER_UI_ID;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isPlatformBrowser", function () {
      return isPlatformBrowser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isPlatformServer", function () {
      return isPlatformServer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isPlatformWorkerApp", function () {
      return isPlatformWorkerApp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isPlatformWorkerUi", function () {
      return isPlatformWorkerUi;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewportScroller", function () {
      return ViewportScroller;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNullViewportScroller", function () {
      return NullViewportScroller;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgClassImplProvider__POST_R3__", function () {
      return NgClassImplProvider__POST_R3__;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgClassR2Impl", function () {
      return NgClassR2Impl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgClassImpl", function () {
      return NgClassImpl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgStyleImplProvider__POST_R3__", function () {
      return NgStyleImplProvider__POST_R3__;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgStyleR2Impl", function () {
      return NgStyleR2Impl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgStyleImpl", function () {
      return NgStyleImpl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵngStyleDirectiveDef__POST_R3__", function () {
      return ngStyleDirectiveDef__POST_R3__;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵngClassDirectiveDef__POST_R3__", function () {
      return ngClassDirectiveDef__POST_R3__;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlatformLocation", function () {
      return PlatformLocation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOCATION_INITIALIZED", function () {
      return LOCATION_INITIALIZED;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationStrategy", function () {
      return LocationStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_BASE_HREF", function () {
      return APP_BASE_HREF;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HashLocationStrategy", function () {
      return HashLocationStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PathLocationStrategy", function () {
      return PathLocationStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Location", function () {
      return Location;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @license Angular v8.2.14
     * (c) 2010-2019 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This class should not be used directly by an application developer. Instead, use
     * {\@link Location}.
     *
     * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
     * agnostic.
     * This means that we can have different implementation of `PlatformLocation` for the different
     * platforms that angular supports. For example, `\@angular/platform-browser` provides an
     * implementation specific to the browser environment, while `\@angular/platform-webworker` provides
     * one suitable for use with web workers.
     *
     * The `PlatformLocation` class is used directly by all implementations of {\@link LocationStrategy}
     * when they need to interact with the DOM apis like pushState, popState, etc...
     *
     * {\@link LocationStrategy} in turn is used by the {\@link Location} service which is used directly
     * by the {\@link Router} in order to navigate between routes. Since all interactions between {\@link
     * Router} /
     * {\@link Location} / {\@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
     * class they are all platform independent.
     *
     * \@publicApi
     * @abstract
     */


    var PlatformLocation = function PlatformLocation() {
      _classCallCheck(this, PlatformLocation);
    };

    if (false) {}
    /**
     * \@description
     * Indicates when a location is initialized.
     *
     * \@publicApi
     * @type {?}
     */


    var LOCATION_INITIALIZED = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Location Initialized');
    /**
     * \@description
     * A serializable version of the event from `onPopState` or `onHashChange`
     *
     * \@publicApi
     * @record
     */

    function LocationChangeEvent() {}

    if (false) {}
    /**
     * \@publicApi
     * @record
     */


    function LocationChangeListener() {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Enables the `Location` service to read route state from the browser's URL.
     * Angular provides two strategies:
     * `HashLocationStrategy` and `PathLocationStrategy`.
     *
     * Applications should use the `Router` or `Location` services to
     * interact with application route state.
     *
     * For instance, `HashLocationStrategy` produces URLs like
     * <code class="no-auto-link">http://example.com#/foo</code>,
     * and `PathLocationStrategy` produces
     * <code class="no-auto-link">http://example.com/foo</code> as an equivalent URL.
     *
     * See these two classes for more.
     *
     * \@publicApi
     * @abstract
     */


    var LocationStrategy = function LocationStrategy() {
      _classCallCheck(this, LocationStrategy);
    };

    if (false) {}
    /**
     * A predefined [DI token](guide/glossary#di-token) for the base href
     * to be used with the `PathLocationStrategy`.
     * The base href is the URL prefix that should be preserved when generating
     * and recognizing URLs.
     *
     * \@usageNotes
     *
     * The following example shows how to use this token to configure the root app injector
     * with a base href value, so that the DI framework can supply the dependency anywhere in the app.
     *
     * ```typescript
     * import {Component, NgModule} from '\@angular/core';
     * import {APP_BASE_HREF} from '\@angular/common';
     *
     * \@NgModule({
     *   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
     * })
     * class AppModule {}
     * ```
     *
     * \@publicApi
     * @type {?}
     */


    var APP_BASE_HREF = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('appBaseHref');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@publicApi
     * @record
     */

    function PopStateEvent() {}

    if (false) {}
    /**
     * \@description
     *
     * A service that applications can use to interact with a browser's URL.
     *
     * Depending on the `LocationStrategy` used, `Location` persists
     * to the URL's path or the URL's hash segment.
     *
     * \@usageNotes
     *
     * It's better to use the `Router#navigate` service to trigger route changes. Use
     * `Location` only if you need to interact with or create normalized URLs outside of
     * routing.
     *
     * `Location` is responsible for normalizing the URL against the application's base href.
     * A normalized URL is absolute from the URL host, includes the application's base href, and has no
     * trailing slash:
     * - `/my/app/user/123` is normalized
     * - `my/app/user/123` **is not** normalized
     * - `/my/app/user/123/` **is not** normalized
     *
     * ### Example
     *
     * <code-example path='common/location/ts/path_location_component.ts'
     * region='LocationComponent'></code-example>
     *
     * \@publicApi
     */


    var Location = /*#__PURE__*/function () {
      /**
       * @param {?} platformStrategy
       * @param {?} platformLocation
       */
      function Location(platformStrategy, platformLocation) {
        var _this = this;

        _classCallCheck(this, Location);

        /**
         * \@internal
         */
        this._subject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * \@internal
         */

        this._urlChangeListeners = [];
        this._platformStrategy = platformStrategy;
        /** @type {?} */

        var browserBaseHref = this._platformStrategy.getBaseHref();

        this._platformLocation = platformLocation;
        this._baseHref = Location.stripTrailingSlash(_stripIndexHtml(browserBaseHref));

        this._platformStrategy.onPopState(
        /**
        * @param {?} ev
        * @return {?}
        */
        function (ev) {
          _this._subject.emit({
            'url': _this.path(true),
            'pop': true,
            'state': ev.state,
            'type': ev.type
          });
        });
      }
      /**
       * Normalizes the URL path for this location.
       *
       * @param {?=} includeHash True to include an anchor fragment in the path.
       *
       * @return {?} The normalized URL path.
       */
      // TODO: vsavkin. Remove the boolean flag and always include hash once the deprecated router is
      // removed.


      _createClass2(Location, [{
        key: "path",
        value: function path() {
          var includeHash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          return this.normalize(this._platformStrategy.path(includeHash));
        }
        /**
         * Reports the current state of the location history.
         * @return {?} The current value of the `history.state` object.
         */

      }, {
        key: "getState",
        value: function getState() {
          return this._platformLocation.getState();
        }
        /**
         * Normalizes the given path and compares to the current normalized path.
         *
         * @param {?} path The given URL path.
         * @param {?=} query Query parameters.
         *
         * @return {?} True if the given URL path is equal to the current normalized path, false
         * otherwise.
         */

      }, {
        key: "isCurrentPathEqualTo",
        value: function isCurrentPathEqualTo(path) {
          var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          return this.path() == this.normalize(path + Location.normalizeQueryParams(query));
        }
        /**
         * Normalizes a URL path by stripping any trailing slashes.
         *
         * @param {?} url String representing a URL.
         *
         * @return {?} The normalized URL string.
         */

      }, {
        key: "normalize",
        value: function normalize(url) {
          return Location.stripTrailingSlash(_stripBaseHref(this._baseHref, _stripIndexHtml(url)));
        }
        /**
         * Normalizes an external URL path.
         * If the given URL doesn't begin with a leading slash (`'/'`), adds one
         * before normalizing. Adds a hash if `HashLocationStrategy` is
         * in use, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
         *
         * @param {?} url String representing a URL.
         *
         * @return {?} A normalized platform-specific URL.
         */

      }, {
        key: "prepareExternalUrl",
        value: function prepareExternalUrl(url) {
          if (url && url[0] !== '/') {
            url = '/' + url;
          }

          return this._platformStrategy.prepareExternalUrl(url);
        } // TODO: rename this method to pushState

        /**
         * Changes the browser's URL to a normalized version of a given URL, and pushes a
         * new item onto the platform's history.
         *
         * @param {?} path  URL path to normalize.
         * @param {?=} query Query parameters.
         * @param {?=} state Location history state.
         *
         * @return {?}
         */

      }, {
        key: "go",
        value: function go(path) {
          var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          this._platformStrategy.pushState(state, '', path, query);

          this._notifyUrlChangeListeners(this.prepareExternalUrl(path + Location.normalizeQueryParams(query)), state);
        }
        /**
         * Changes the browser's URL to a normalized version of the given URL, and replaces
         * the top item on the platform's history stack.
         *
         * @param {?} path  URL path to normalize.
         * @param {?=} query Query parameters.
         * @param {?=} state Location history state.
         * @return {?}
         */

      }, {
        key: "replaceState",
        value: function replaceState(path) {
          var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          this._platformStrategy.replaceState(state, '', path, query);

          this._notifyUrlChangeListeners(this.prepareExternalUrl(path + Location.normalizeQueryParams(query)), state);
        }
        /**
         * Navigates forward in the platform's history.
         * @return {?}
         */

      }, {
        key: "forward",
        value: function forward() {
          this._platformStrategy.forward();
        }
        /**
         * Navigates back in the platform's history.
         * @return {?}
         */

      }, {
        key: "back",
        value: function back() {
          this._platformStrategy.back();
        }
        /**
         * Registers a URL change listener. Use to catch updates performed by the Angular
         * framework that are not detectible through "popstate" or "hashchange" events.
         *
         * @param {?} fn The change handler function, which take a URL and a location history state.
         * @return {?}
         */

      }, {
        key: "onUrlChange",
        value: function onUrlChange(fn) {
          var _this2 = this;

          this._urlChangeListeners.push(fn);

          this.subscribe(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            _this2._notifyUrlChangeListeners(v.url, v.state);
          });
        }
        /**
         * \@internal
         * @param {?=} url
         * @param {?=} state
         * @return {?}
         */

      }, {
        key: "_notifyUrlChangeListeners",
        value: function _notifyUrlChangeListeners() {
          var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var state = arguments.length > 1 ? arguments[1] : undefined;

          this._urlChangeListeners.forEach(
          /**
          * @param {?} fn
          * @return {?}
          */
          function (fn) {
            return fn(url, state);
          });
        }
        /**
         * Subscribes to the platform's `popState` events.
         *
         * @param {?} onNext
         * @param {?=} onThrow
         * @param {?=} onReturn
         * @return {?} Subscribed events.
         */

      }, {
        key: "subscribe",
        value: function subscribe(onNext, onThrow, onReturn) {
          return this._subject.subscribe({
            next: onNext,
            error: onThrow,
            complete: onReturn
          });
        }
        /**
         * Normalizes URL parameters by prepending with `?` if needed.
         *
         * @param {?} params String of URL parameters.
         *
         * @return {?} The normalized URL parameters string.
         */

      }], [{
        key: "normalizeQueryParams",
        value: function normalizeQueryParams(params) {
          return params && params[0] !== '?' ? '?' + params : params;
        }
        /**
         * Joins two parts of a URL with a slash if needed.
         *
         * @param {?} start  URL string
         * @param {?} end    URL string
         *
         *
         * @return {?} The joined URL string.
         */

      }, {
        key: "joinWithSlash",
        value: function joinWithSlash(start, end) {
          if (start.length == 0) {
            return end;
          }

          if (end.length == 0) {
            return start;
          }
          /** @type {?} */


          var slashes = 0;

          if (start.endsWith('/')) {
            slashes++;
          }

          if (end.startsWith('/')) {
            slashes++;
          }

          if (slashes == 2) {
            return start + end.substring(1);
          }

          if (slashes == 1) {
            return start + end;
          }

          return start + '/' + end;
        }
        /**
         * Removes a trailing slash from a URL string if needed.
         * Looks for the first occurrence of either `#`, `?`, or the end of the
         * line as `/` characters and removes the trailing slash if one exists.
         *
         * @param {?} url URL string.
         *
         * @return {?} The URL string, modified if needed.
         */

      }, {
        key: "stripTrailingSlash",
        value: function stripTrailingSlash(url) {
          /** @type {?} */
          var match = url.match(/#|\?|$/);
          /** @type {?} */

          var pathEndIdx = match && match.index || url.length;
          /** @type {?} */

          var droppedSlashIdx = pathEndIdx - (url[pathEndIdx - 1] === '/' ? 1 : 0);
          return url.slice(0, droppedSlashIdx) + url.slice(pathEndIdx);
        }
      }]);

      return Location;
    }();

    Location.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    Location.ctorParameters = function () {
      return [{
        type: LocationStrategy
      }, {
        type: PlatformLocation
      }];
    };

    if (false) {}
    /**
     * @param {?} baseHref
     * @param {?} url
     * @return {?}
     */


    function _stripBaseHref(baseHref, url) {
      return baseHref && url.startsWith(baseHref) ? url.substring(baseHref.length) : url;
    }
    /**
     * @param {?} url
     * @return {?}
     */


    function _stripIndexHtml(url) {
      return url.replace(/\/index.html$/, '');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * A {\@link LocationStrategy} used to configure the {\@link Location} service to
     * represent its state in the
     * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
     * of the browser's URL.
     *
     * For instance, if you call `location.go('/foo')`, the browser's URL will become
     * `example.com#/foo`.
     *
     * \@usageNotes
     *
     * ### Example
     *
     * {\@example common/location/ts/hash_location_component.ts region='LocationComponent'}
     *
     * \@publicApi
     */


    var HashLocationStrategy = /*#__PURE__*/function (_LocationStrategy) {
      _inherits(HashLocationStrategy, _LocationStrategy);

      var _super2 = _createSuper(HashLocationStrategy);

      /**
       * @param {?} _platformLocation
       * @param {?=} _baseHref
       */
      function HashLocationStrategy(_platformLocation, _baseHref) {
        var _this3;

        _classCallCheck(this, HashLocationStrategy);

        _this3 = _super2.call(this);
        _this3._platformLocation = _platformLocation;
        _this3._baseHref = '';

        if (_baseHref != null) {
          _this3._baseHref = _baseHref;
        }

        return _this3;
      }
      /**
       * @param {?} fn
       * @return {?}
       */


      _createClass2(HashLocationStrategy, [{
        key: "onPopState",
        value: function onPopState(fn) {
          this._platformLocation.onPopState(fn);

          this._platformLocation.onHashChange(fn);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getBaseHref",
        value: function getBaseHref() {
          return this._baseHref;
        }
        /**
         * @param {?=} includeHash
         * @return {?}
         */

      }, {
        key: "path",
        value: function path() {
          var includeHash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          // the hash value is always prefixed with a `#`
          // and if it is empty then it will stay empty

          /** @type {?} */
          var path = this._platformLocation.hash;
          if (path == null) path = '#';
          return path.length > 0 ? path.substring(1) : path;
        }
        /**
         * @param {?} internal
         * @return {?}
         */

      }, {
        key: "prepareExternalUrl",
        value: function prepareExternalUrl(internal) {
          /** @type {?} */
          var url = Location.joinWithSlash(this._baseHref, internal);
          return url.length > 0 ? '#' + url : url;
        }
        /**
         * @param {?} state
         * @param {?} title
         * @param {?} path
         * @param {?} queryParams
         * @return {?}
         */

      }, {
        key: "pushState",
        value: function pushState(state, title, path, queryParams) {
          /** @type {?} */
          var url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));

          if (url.length == 0) {
            url = this._platformLocation.pathname;
          }

          this._platformLocation.pushState(state, title, url);
        }
        /**
         * @param {?} state
         * @param {?} title
         * @param {?} path
         * @param {?} queryParams
         * @return {?}
         */

      }, {
        key: "replaceState",
        value: function replaceState(state, title, path, queryParams) {
          /** @type {?} */
          var url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));

          if (url.length == 0) {
            url = this._platformLocation.pathname;
          }

          this._platformLocation.replaceState(state, title, url);
        }
        /**
         * @return {?}
         */

      }, {
        key: "forward",
        value: function forward() {
          this._platformLocation.forward();
        }
        /**
         * @return {?}
         */

      }, {
        key: "back",
        value: function back() {
          this._platformLocation.back();
        }
      }]);

      return HashLocationStrategy;
    }(LocationStrategy);

    HashLocationStrategy.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HashLocationStrategy.ctorParameters = function () {
      return [{
        type: PlatformLocation
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [APP_BASE_HREF]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@description
     * A {\@link LocationStrategy} used to configure the {\@link Location} service to
     * represent its state in the
     * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
     * browser's URL.
     *
     * If you're using `PathLocationStrategy`, you must provide a {\@link APP_BASE_HREF}
     * or add a base element to the document. This URL prefix that will be preserved
     * when generating and recognizing URLs.
     *
     * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
     * `location.go('/foo')`, the browser's URL will become
     * `example.com/my/app/foo`.
     *
     * Similarly, if you add `<base href='/my/app'/>` to the document and call
     * `location.go('/foo')`, the browser's URL will become
     * `example.com/my/app/foo`.
     *
     * \@usageNotes
     *
     * ### Example
     *
     * {\@example common/location/ts/path_location_component.ts region='LocationComponent'}
     *
     * \@publicApi
     */


    var PathLocationStrategy = /*#__PURE__*/function (_LocationStrategy2) {
      _inherits(PathLocationStrategy, _LocationStrategy2);

      var _super3 = _createSuper(PathLocationStrategy);

      /**
       * @param {?} _platformLocation
       * @param {?=} href
       */
      function PathLocationStrategy(_platformLocation, href) {
        var _this4;

        _classCallCheck(this, PathLocationStrategy);

        _this4 = _super3.call(this);
        _this4._platformLocation = _platformLocation;

        if (href == null) {
          href = _this4._platformLocation.getBaseHrefFromDOM();
        }

        if (href == null) {
          throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
        }

        _this4._baseHref = href;
        return _this4;
      }
      /**
       * @param {?} fn
       * @return {?}
       */


      _createClass2(PathLocationStrategy, [{
        key: "onPopState",
        value: function onPopState(fn) {
          this._platformLocation.onPopState(fn);

          this._platformLocation.onHashChange(fn);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getBaseHref",
        value: function getBaseHref() {
          return this._baseHref;
        }
        /**
         * @param {?} internal
         * @return {?}
         */

      }, {
        key: "prepareExternalUrl",
        value: function prepareExternalUrl(internal) {
          return Location.joinWithSlash(this._baseHref, internal);
        }
        /**
         * @param {?=} includeHash
         * @return {?}
         */

      }, {
        key: "path",
        value: function path() {
          var includeHash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          /** @type {?} */
          var pathname = this._platformLocation.pathname + Location.normalizeQueryParams(this._platformLocation.search);
          /** @type {?} */

          var hash = this._platformLocation.hash;
          return hash && includeHash ? "".concat(pathname).concat(hash) : pathname;
        }
        /**
         * @param {?} state
         * @param {?} title
         * @param {?} url
         * @param {?} queryParams
         * @return {?}
         */

      }, {
        key: "pushState",
        value: function pushState(state, title, url, queryParams) {
          /** @type {?} */
          var externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));

          this._platformLocation.pushState(state, title, externalUrl);
        }
        /**
         * @param {?} state
         * @param {?} title
         * @param {?} url
         * @param {?} queryParams
         * @return {?}
         */

      }, {
        key: "replaceState",
        value: function replaceState(state, title, url, queryParams) {
          /** @type {?} */
          var externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));

          this._platformLocation.replaceState(state, title, externalUrl);
        }
        /**
         * @return {?}
         */

      }, {
        key: "forward",
        value: function forward() {
          this._platformLocation.forward();
        }
        /**
         * @return {?}
         */

      }, {
        key: "back",
        value: function back() {
          this._platformLocation.back();
        }
      }]);

      return PathLocationStrategy;
    }(LocationStrategy);

    PathLocationStrategy.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    PathLocationStrategy.ctorParameters = function () {
      return [{
        type: PlatformLocation
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [APP_BASE_HREF]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js

    /**
     * \@internal
     * @type {?}
     */


    var CURRENCIES_EN = {
      'ADP': [undefined, undefined, 0],
      'AFN': [undefined, undefined, 0],
      'ALL': [undefined, undefined, 0],
      'AMD': [undefined, undefined, 0],
      'AOA': [undefined, 'Kz'],
      'ARS': [undefined, '$'],
      'AUD': ['A$', '$'],
      'BAM': [undefined, 'KM'],
      'BBD': [undefined, '$'],
      'BDT': [undefined, '৳'],
      'BHD': [undefined, undefined, 3],
      'BIF': [undefined, undefined, 0],
      'BMD': [undefined, '$'],
      'BND': [undefined, '$'],
      'BOB': [undefined, 'Bs'],
      'BRL': ['R$'],
      'BSD': [undefined, '$'],
      'BWP': [undefined, 'P'],
      'BYN': [undefined, 'р.', 2],
      'BYR': [undefined, undefined, 0],
      'BZD': [undefined, '$'],
      'CAD': ['CA$', '$', 2],
      'CHF': [undefined, undefined, 2],
      'CLF': [undefined, undefined, 4],
      'CLP': [undefined, '$', 0],
      'CNY': ['CN¥', '¥'],
      'COP': [undefined, '$', 0],
      'CRC': [undefined, '₡', 2],
      'CUC': [undefined, '$'],
      'CUP': [undefined, '$'],
      'CZK': [undefined, 'Kč', 2],
      'DJF': [undefined, undefined, 0],
      'DKK': [undefined, 'kr', 2],
      'DOP': [undefined, '$'],
      'EGP': [undefined, 'E£'],
      'ESP': [undefined, '₧', 0],
      'EUR': ['€'],
      'FJD': [undefined, '$'],
      'FKP': [undefined, '£'],
      'GBP': ['£'],
      'GEL': [undefined, '₾'],
      'GIP': [undefined, '£'],
      'GNF': [undefined, 'FG', 0],
      'GTQ': [undefined, 'Q'],
      'GYD': [undefined, '$', 0],
      'HKD': ['HK$', '$'],
      'HNL': [undefined, 'L'],
      'HRK': [undefined, 'kn'],
      'HUF': [undefined, 'Ft', 2],
      'IDR': [undefined, 'Rp', 0],
      'ILS': ['₪'],
      'INR': ['₹'],
      'IQD': [undefined, undefined, 0],
      'IRR': [undefined, undefined, 0],
      'ISK': [undefined, 'kr', 0],
      'ITL': [undefined, undefined, 0],
      'JMD': [undefined, '$'],
      'JOD': [undefined, undefined, 3],
      'JPY': ['¥', undefined, 0],
      'KHR': [undefined, '៛'],
      'KMF': [undefined, 'CF', 0],
      'KPW': [undefined, '₩', 0],
      'KRW': ['₩', undefined, 0],
      'KWD': [undefined, undefined, 3],
      'KYD': [undefined, '$'],
      'KZT': [undefined, '₸'],
      'LAK': [undefined, '₭', 0],
      'LBP': [undefined, 'L£', 0],
      'LKR': [undefined, 'Rs'],
      'LRD': [undefined, '$'],
      'LTL': [undefined, 'Lt'],
      'LUF': [undefined, undefined, 0],
      'LVL': [undefined, 'Ls'],
      'LYD': [undefined, undefined, 3],
      'MGA': [undefined, 'Ar', 0],
      'MGF': [undefined, undefined, 0],
      'MMK': [undefined, 'K', 0],
      'MNT': [undefined, '₮', 0],
      'MRO': [undefined, undefined, 0],
      'MUR': [undefined, 'Rs', 0],
      'MXN': ['MX$', '$'],
      'MYR': [undefined, 'RM'],
      'NAD': [undefined, '$'],
      'NGN': [undefined, '₦'],
      'NIO': [undefined, 'C$'],
      'NOK': [undefined, 'kr', 2],
      'NPR': [undefined, 'Rs'],
      'NZD': ['NZ$', '$'],
      'OMR': [undefined, undefined, 3],
      'PHP': [undefined, '₱'],
      'PKR': [undefined, 'Rs', 0],
      'PLN': [undefined, 'zł'],
      'PYG': [undefined, '₲', 0],
      'RON': [undefined, 'lei'],
      'RSD': [undefined, undefined, 0],
      'RUB': [undefined, '₽'],
      'RUR': [undefined, 'р.'],
      'RWF': [undefined, 'RF', 0],
      'SBD': [undefined, '$'],
      'SEK': [undefined, 'kr', 2],
      'SGD': [undefined, '$'],
      'SHP': [undefined, '£'],
      'SLL': [undefined, undefined, 0],
      'SOS': [undefined, undefined, 0],
      'SRD': [undefined, '$'],
      'SSP': [undefined, '£'],
      'STD': [undefined, undefined, 0],
      'STN': [undefined, 'Db'],
      'SYP': [undefined, '£', 0],
      'THB': [undefined, '฿'],
      'TMM': [undefined, undefined, 0],
      'TND': [undefined, undefined, 3],
      'TOP': [undefined, 'T$'],
      'TRL': [undefined, undefined, 0],
      'TRY': [undefined, '₺'],
      'TTD': [undefined, '$'],
      'TWD': ['NT$', '$', 2],
      'TZS': [undefined, undefined, 0],
      'UAH': [undefined, '₴'],
      'UGX': [undefined, undefined, 0],
      'USD': ['$'],
      'UYI': [undefined, undefined, 0],
      'UYU': [undefined, '$'],
      'UZS': [undefined, undefined, 0],
      'VEF': [undefined, 'Bs'],
      'VND': ['₫', undefined, 0],
      'VUV': [undefined, undefined, 0],
      'XAF': ['FCFA', undefined, 0],
      'XCD': ['EC$', '$'],
      'XOF': ['CFA', undefined, 0],
      'XPF': ['CFPF', undefined, 0],
      'YER': [undefined, undefined, 0],
      'ZAR': [undefined, 'R'],
      'ZMK': [undefined, undefined, 0],
      'ZMW': [undefined, 'ZK'],
      'ZWD': [undefined, undefined, 0]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */

    var NumberFormatStyle = {
      Decimal: 0,
      Percent: 1,
      Currency: 2,
      Scientific: 3
    };
    NumberFormatStyle[NumberFormatStyle.Decimal] = 'Decimal';
    NumberFormatStyle[NumberFormatStyle.Percent] = 'Percent';
    NumberFormatStyle[NumberFormatStyle.Currency] = 'Currency';
    NumberFormatStyle[NumberFormatStyle.Scientific] = 'Scientific';
    /** @enum {number} */

    var Plural = {
      Zero: 0,
      One: 1,
      Two: 2,
      Few: 3,
      Many: 4,
      Other: 5
    };
    Plural[Plural.Zero] = 'Zero';
    Plural[Plural.One] = 'One';
    Plural[Plural.Two] = 'Two';
    Plural[Plural.Few] = 'Few';
    Plural[Plural.Many] = 'Many';
    Plural[Plural.Other] = 'Other';
    /** @enum {number} */

    var FormStyle = {
      Format: 0,
      Standalone: 1
    };
    FormStyle[FormStyle.Format] = 'Format';
    FormStyle[FormStyle.Standalone] = 'Standalone';
    /** @enum {number} */

    var TranslationWidth = {
      /** 1 character for `en-US`. For example: 'S' */
      Narrow: 0,

      /** 3 characters for `en-US`. For example: 'Sun' */
      Abbreviated: 1,

      /** Full length for `en-US`. For example: "Sunday" */
      Wide: 2,

      /** 2 characters for `en-US`, For example: "Su" */
      Short: 3
    };
    TranslationWidth[TranslationWidth.Narrow] = 'Narrow';
    TranslationWidth[TranslationWidth.Abbreviated] = 'Abbreviated';
    TranslationWidth[TranslationWidth.Wide] = 'Wide';
    TranslationWidth[TranslationWidth.Short] = 'Short';
    /** @enum {number} */

    var FormatWidth = {
      /**
       * For `en-US`, 'M/d/yy, h:mm a'`
       * (Example: `6/15/15, 9:03 AM`)
       */
      Short: 0,

      /**
       * For `en-US`, `'MMM d, y, h:mm:ss a'`
       * (Example: `Jun 15, 2015, 9:03:01 AM`)
       */
      Medium: 1,

      /**
       * For `en-US`, `'MMMM d, y, h:mm:ss a z'`
       * (Example: `June 15, 2015 at 9:03:01 AM GMT+1`)
       */
      Long: 2,

      /**
       * For `en-US`, `'EEEE, MMMM d, y, h:mm:ss a zzzz'`
       * (Example: `Monday, June 15, 2015 at 9:03:01 AM GMT+01:00`)
       */
      Full: 3
    };
    FormatWidth[FormatWidth.Short] = 'Short';
    FormatWidth[FormatWidth.Medium] = 'Medium';
    FormatWidth[FormatWidth.Long] = 'Long';
    FormatWidth[FormatWidth.Full] = 'Full';
    /** @enum {number} */

    var NumberSymbol = {
      /**
       * Decimal separator.
       * For `en-US`, the dot character.
       * Example : 2,345`.`67
       */
      Decimal: 0,

      /**
       * Grouping separator, typically for thousands.
       * For `en-US`, the comma character.
       * Example: 2`,`345.67
       */
      Group: 1,

      /**
       * List-item separator.
       * Example: "one, two, and three"
       */
      List: 2,

      /**
       * Sign for percentage (out of 100).
       * Example: 23.4%
       */
      PercentSign: 3,

      /**
       * Sign for positive numbers.
       * Example: +23
       */
      PlusSign: 4,

      /**
       * Sign for negative numbers.
       * Example: -23
       */
      MinusSign: 5,

      /**
       * Computer notation for exponential value (n times a power of 10).
       * Example: 1.2E3
       */
      Exponential: 6,

      /**
       * Human-readable format of exponential.
       * Example: 1.2x103
       */
      SuperscriptingExponent: 7,

      /**
       * Sign for permille (out of 1000).
       * Example: 23.4‰
       */
      PerMille: 8,

      /**
       * Infinity, can be used with plus and minus.
       * Example: ∞, +∞, -∞
       */
      Infinity: 9,

      /**
       * Not a number.
       * Example: NaN
       */
      NaN: 10,

      /**
       * Symbol used between time units.
       * Example: 10:52
       */
      TimeSeparator: 11,

      /**
       * Decimal separator for currency values (fallback to `Decimal`).
       * Example: $2,345.67
       */
      CurrencyDecimal: 12,

      /**
       * Group separator for currency values (fallback to `Group`).
       * Example: $2,345.67
       */
      CurrencyGroup: 13
    };
    NumberSymbol[NumberSymbol.Decimal] = 'Decimal';
    NumberSymbol[NumberSymbol.Group] = 'Group';
    NumberSymbol[NumberSymbol.List] = 'List';
    NumberSymbol[NumberSymbol.PercentSign] = 'PercentSign';
    NumberSymbol[NumberSymbol.PlusSign] = 'PlusSign';
    NumberSymbol[NumberSymbol.MinusSign] = 'MinusSign';
    NumberSymbol[NumberSymbol.Exponential] = 'Exponential';
    NumberSymbol[NumberSymbol.SuperscriptingExponent] = 'SuperscriptingExponent';
    NumberSymbol[NumberSymbol.PerMille] = 'PerMille';
    NumberSymbol[NumberSymbol.Infinity] = 'Infinity';
    NumberSymbol[NumberSymbol.NaN] = 'NaN';
    NumberSymbol[NumberSymbol.TimeSeparator] = 'TimeSeparator';
    NumberSymbol[NumberSymbol.CurrencyDecimal] = 'CurrencyDecimal';
    NumberSymbol[NumberSymbol.CurrencyGroup] = 'CurrencyGroup';
    /** @enum {number} */

    var WeekDay = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6
    };
    WeekDay[WeekDay.Sunday] = 'Sunday';
    WeekDay[WeekDay.Monday] = 'Monday';
    WeekDay[WeekDay.Tuesday] = 'Tuesday';
    WeekDay[WeekDay.Wednesday] = 'Wednesday';
    WeekDay[WeekDay.Thursday] = 'Thursday';
    WeekDay[WeekDay.Friday] = 'Friday';
    WeekDay[WeekDay.Saturday] = 'Saturday';
    /**
     * Retrieves the locale ID from the currently loaded locale.
     * The loaded locale could be, for example, a global one rather than a regional one.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} locale A locale code, such as `fr-FR`.
     * @return {?} The locale code. For example, `fr`.
     */

    function getLocaleId(locale) {
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale)[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].LocaleId];
    }
    /**
     * Retrieves day period strings for the given locale.
     *
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} locale A locale code for the locale format rules to use.
     * @param {?} formStyle The required grammatical form.
     * @param {?} width The required character width.
     * @return {?} An array of localized period strings. For example, `[AM, PM]` for `en-US`.
     */


    function getLocaleDayPeriods(locale, formStyle, width) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      /** @type {?} */

      var amPmData =
      /** @type {?} */
      [data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].DayPeriodsFormat], data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].DayPeriodsStandalone]];
      /** @type {?} */

      var amPm = getLastDefinedValue(amPmData, formStyle);
      return getLastDefinedValue(amPm, width);
    }
    /**
     * Retrieves days of the week for the given locale, using the Gregorian calendar.
     *
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} locale A locale code for the locale format rules to use.
     * @param {?} formStyle The required grammatical form.
     * @param {?} width The required character width.
     * @return {?} An array of localized name strings.
     * For example,`[Sunday, Monday, ... Saturday]` for `en-US`.
     */


    function getLocaleDayNames(locale, formStyle, width) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      /** @type {?} */

      var daysData =
      /** @type {?} */
      [data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].DaysFormat], data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].DaysStandalone]];
      /** @type {?} */

      var days = getLastDefinedValue(daysData, formStyle);
      return getLastDefinedValue(days, width);
    }
    /**
     * Retrieves months of the year for the given locale, using the Gregorian calendar.
     *
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} locale A locale code for the locale format rules to use.
     * @param {?} formStyle The required grammatical form.
     * @param {?} width The required character width.
     * @return {?} An array of localized name strings.
     * For example,  `[January, February, ...]` for `en-US`.
     */


    function getLocaleMonthNames(locale, formStyle, width) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      /** @type {?} */

      var monthsData =
      /** @type {?} */
      [data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].MonthsFormat], data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].MonthsStandalone]];
      /** @type {?} */

      var months = getLastDefinedValue(monthsData, formStyle);
      return getLastDefinedValue(months, width);
    }
    /**
     * Retrieves Gregorian-calendar eras for the given locale.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} locale A locale code for the locale format rules to use.
     * @param {?} width The required character width.
     * @return {?} An array of localized era strings.
     * For example, `[AD, BC]` for `en-US`.
     */


    function getLocaleEraNames(locale, width) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      /** @type {?} */

      var erasData =
      /** @type {?} */
      data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].Eras];
      return getLastDefinedValue(erasData, width);
    }
    /**
     * Retrieves the first day of the week for the given locale.
     *
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} locale A locale code for the locale format rules to use.
     * @return {?} A day index number, using the 0-based week-day index for `en-US`
     * (Sunday = 0, Monday = 1, ...).
     * For example, for `fr-FR`, returns 1 to indicate that the first day is Monday.
     */


    function getLocaleFirstDayOfWeek(locale) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].FirstDayOfWeek];
    }
    /**
     * Range of week days that are considered the week-end for the given locale.
     *
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} locale A locale code for the locale format rules to use.
     * @return {?} The range of day values, `[startDay, endDay]`.
     */


    function getLocaleWeekEndRange(locale) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].WeekendRange];
    }
    /**
     * Retrieves a localized date-value formating string.
     *
     * @see `FormatWidth` / [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} locale A locale code for the locale format rules to use.
     * @param {?} width The format type.
     * @return {?} The localized formating string.
     */


    function getLocaleDateFormat(locale, width) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      return getLastDefinedValue(data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].DateFormat], width);
    }
    /**
     * Retrieves a localized time-value formatting string.
     *
     * @see `FormatWidth` / [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     * \@publicApi
     * @param {?} locale A locale code for the locale format rules to use.
     * @param {?} width The format type.
     * @return {?} The localized formatting string.
     */


    function getLocaleTimeFormat(locale, width) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      return getLastDefinedValue(data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].TimeFormat], width);
    }
    /**
     * Retrieves a localized date-time formatting string.
     *
     * @see `FormatWidth` / [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} locale A locale code for the locale format rules to use.
     * @param {?} width The format type.
     * @return {?} The localized formatting string.
     */


    function getLocaleDateTimeFormat(locale, width) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      /** @type {?} */

      var dateTimeFormatData =
      /** @type {?} */
      data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].DateTimeFormat];
      return getLastDefinedValue(dateTimeFormatData, width);
    }
    /**
     * Retrieves a localized number symbol that can be used to replace placeholders in number formats.
     * @see `NumberSymbol` / [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} locale The locale code.
     * @param {?} symbol The symbol to localize.
     * @return {?} The character for the localized symbol.
     */


    function getLocaleNumberSymbol(locale, symbol) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      /** @type {?} */

      var res = data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].NumberSymbols][symbol];

      if (typeof res === 'undefined') {
        if (symbol === NumberSymbol.CurrencyDecimal) {
          return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].NumberSymbols][NumberSymbol.Decimal];
        } else if (symbol === NumberSymbol.CurrencyGroup) {
          return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].NumberSymbols][NumberSymbol.Group];
        }
      }

      return res;
    }
    /**
     * Retrieves a number format for a given locale.
     *
     * Numbers are formatted using patterns, like `#,###.00`. For example, the pattern `#,###.00`
     * when used to format the number 12345.678 could result in "12'345,678". That would happen if the
     * grouping separator for your language is an apostrophe, and the decimal separator is a comma.
     *
     * <b>Important:</b> The characters `.` `,` `0` `#` (and others below) are special placeholders
     * that stand for the decimal separator, and so on, and are NOT real characters.
     * You must NOT "translate" the placeholders. For example, don't change `.` to `,` even though in
     * your language the decimal point is written with a comma. The symbols should be replaced by the
     * local equivalents, using the appropriate `NumberSymbol` for your language.
     *
     * Here are the special characters used in number patterns:
     *
     * | Symbol | Meaning |
     * |--------|---------|
     * | . | Replaced automatically by the character used for the decimal point. |
     * | , | Replaced by the "grouping" (thousands) separator. |
     * | 0 | Replaced by a digit (or zero if there aren't enough digits). |
     * | # | Replaced by a digit (or nothing if there aren't enough). |
     * | ¤ | Replaced by a currency symbol, such as $ or USD. |
     * | % | Marks a percent format. The % symbol may change position, but must be retained. |
     * | E | Marks a scientific format. The E symbol may change position, but must be retained. |
     * | ' | Special characters used as literal characters are quoted with ASCII single quotes. |
     *
     * @see `NumberFormatStyle` / [CLDR website](http://cldr.unicode.org/translation/number-patterns) / [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} locale A locale code for the locale format rules to use.
     * @param {?} type The type of numeric value to be formatted (such as `Decimal` or `Currency`.)
     * @return {?} The localized format string.
     */


    function getLocaleNumberFormat(locale, type) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].NumberFormats][type];
    }
    /**
     * Retrieves the symbol used to represent the currency for the main country
     * corresponding to a given locale. For example, '$' for `en-US`.
     *
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} locale A locale code for the locale format rules to use.
     * @return {?} The localized symbol character,
     * or `null` if the main country cannot be determined.
     */


    function getLocaleCurrencySymbol(locale) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].CurrencySymbol] || null;
    }
    /**
     * Retrieves the name of the currency for the main country corresponding
     * to a given locale. For example, 'US Dollar' for `en-US`.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} locale A locale code for the locale format rules to use.
     * @return {?} The currency name,
     * or `null` if the main country cannot be determined.
     */


    function getLocaleCurrencyName(locale) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].CurrencyName] || null;
    }
    /**
     * Retrieves the currency values for a given locale.
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     * @param {?} locale A locale code for the locale format rules to use.
     * @return {?} The currency values.
     */


    function getLocaleCurrencies(locale) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      return data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].Currencies];
    }
    /**
     * \@alias core/ɵgetLocalePluralCase
     * \@publicApi
     * @type {?}
     */


    var getLocalePluralCase = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵgetLocalePluralCase"];
    /**
     * @param {?} data
     * @return {?}
     */

    function checkFullData(data) {
      if (!data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].ExtraData]) {
        throw new Error("Missing extra locale data for the locale \"".concat(data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].LocaleId], "\". Use \"registerLocaleData\" to load new data. See the \"I18n guide\" on angular.io to know more."));
      }
    }
    /**
     * Retrieves locale-specific rules used to determine which day period to use
     * when more than one period is defined for a locale.
     *
     * There is a rule for each defined day period. The
     * first rule is applied to the first day period and so on.
     * Fall back to AM/PM when no rules are available.
     *
     * A rule can specify a period as time range, or as a single time value.
     *
     * This functionality is only available when you have loaded the full locale data.
     * See the ["I18n guide"](guide/i18n#i18n-pipes).
     *
     * @see `getLocaleExtraDayPeriods()` / [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} locale A locale code for the locale format rules to use.
     * @return {?} The rules for the locale, a single time value or array of *from-time, to-time*,
     * or null if no periods are available.
     *
     */


    function getLocaleExtraDayPeriodRules(locale) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      checkFullData(data);
      /** @type {?} */

      var rules = data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].ExtraData][2
      /* ExtraDayPeriodsRules */
      ] || [];
      return rules.map(
      /**
      * @param {?} rule
      * @return {?}
      */
      function (rule) {
        if (typeof rule === 'string') {
          return extractTime(rule);
        }

        return [extractTime(rule[0]), extractTime(rule[1])];
      });
    }
    /**
     * Retrieves locale-specific day periods, which indicate roughly how a day is broken up
     * in different languages.
     * For example, for `en-US`, periods are morning, noon, afternoon, evening, and midnight.
     *
     * This functionality is only available when you have loaded the full locale data.
     * See the ["I18n guide"](guide/i18n#i18n-pipes).
     *
     * @see `getLocaleExtraDayPeriodRules()` / [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} locale A locale code for the locale format rules to use.
     * @param {?} formStyle The required grammatical form.
     * @param {?} width The required character width.
     * @return {?} The translated day-period strings.
     */


    function getLocaleExtraDayPeriods(locale, formStyle, width) {
      /** @type {?} */
      var data = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵfindLocaleData"])(locale);
      checkFullData(data);
      /** @type {?} */

      var dayPeriodsData =
      /** @type {?} */
      [data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].ExtraData][0
      /* ExtraDayPeriodFormats */
      ], data[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵLocaleDataIndex"].ExtraData][1
      /* ExtraDayPeriodStandalone */
      ]];
      /** @type {?} */

      var dayPeriods = getLastDefinedValue(dayPeriodsData, formStyle) || [];
      return getLastDefinedValue(dayPeriods, width) || [];
    }
    /**
     * Retrieves the first value that is defined in an array, going backwards from an index position.
     *
     * To avoid repeating the same data (as when the "format" and "standalone" forms are the same)
     * add the first value to the locale data arrays, and add other values only if they are different.
     *
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @template T
     * @param {?} data The data array to retrieve from.
     * @param {?} index A 0-based index into the array to start from.
     * @return {?} The value immediately before the given index position.
     */


    function getLastDefinedValue(data, index) {
      for (var i = index; i > -1; i--) {
        if (typeof data[i] !== 'undefined') {
          return data[i];
        }
      }

      throw new Error('Locale data API: locale data undefined');
    }
    /**
     * Extracts the hours and minutes from a string like "15:45"
     * @param {?} time
     * @return {?}
     */


    function extractTime(time) {
      var _time$split = time.split(':'),
          _time$split2 = _slicedToArray(_time$split, 2),
          h = _time$split2[0],
          m = _time$split2[1];

      return {
        hours: +h,
        minutes: +m
      };
    }
    /**
     * Retrieves the currency symbol for a given currency code.
     *
     * For example, for the default `en-US` locale, the code `USD` can
     * be represented by the narrow symbol `$` or the wide symbol `US$`.
     *
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} code The currency code.
     * @param {?} format The format, `wide` or `narrow`.
     * @param {?=} locale A locale code for the locale format rules to use.
     *
     * @return {?} The symbol, or the currency code if no symbol is available.0
     */


    function getCurrencySymbol(code, format) {
      var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';

      /** @type {?} */
      var currency = getLocaleCurrencies(locale)[code] || CURRENCIES_EN[code] || [];
      /** @type {?} */

      var symbolNarrow = currency[1
      /* SymbolNarrow */
      ];

      if (format === 'narrow' && typeof symbolNarrow === 'string') {
        return symbolNarrow;
      }

      return currency[0
      /* Symbol */
      ] || code;
    } // Most currencies have cents, that's why the default is 2

    /** @type {?} */


    var DEFAULT_NB_OF_CURRENCY_DIGITS = 2;
    /**
     * Reports the number of decimal digits for a given currency.
     * The value depends upon the presence of cents in that particular currency.
     *
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} code The currency code.
     * @return {?} The number of decimal digits, typically 0 or 2.
     */

    function getNumberOfCurrencyDigits(code) {
      /** @type {?} */
      var digits;
      /** @type {?} */

      var currency = CURRENCIES_EN[code];

      if (currency) {
        digits = currency[2
        /* NbOfDigits */
        ];
      }

      return typeof digits === 'number' ? digits : DEFAULT_NB_OF_CURRENCY_DIGITS;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var ISO8601_DATE_REGEX = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/; //    1        2       3         4          5          6          7          8  9     10      11

    /** @type {?} */

    var NAMED_FORMATS = {};
    /** @type {?} */

    var DATE_FORMATS_SPLIT = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
    /** @enum {number} */

    var ZoneWidth = {
      Short: 0,
      ShortGMT: 1,
      Long: 2,
      Extended: 3
    };
    ZoneWidth[ZoneWidth.Short] = 'Short';
    ZoneWidth[ZoneWidth.ShortGMT] = 'ShortGMT';
    ZoneWidth[ZoneWidth.Long] = 'Long';
    ZoneWidth[ZoneWidth.Extended] = 'Extended';
    /** @enum {number} */

    var DateType = {
      FullYear: 0,
      Month: 1,
      Date: 2,
      Hours: 3,
      Minutes: 4,
      Seconds: 5,
      FractionalSeconds: 6,
      Day: 7
    };
    DateType[DateType.FullYear] = 'FullYear';
    DateType[DateType.Month] = 'Month';
    DateType[DateType.Date] = 'Date';
    DateType[DateType.Hours] = 'Hours';
    DateType[DateType.Minutes] = 'Minutes';
    DateType[DateType.Seconds] = 'Seconds';
    DateType[DateType.FractionalSeconds] = 'FractionalSeconds';
    DateType[DateType.Day] = 'Day';
    /** @enum {number} */

    var TranslationType = {
      DayPeriods: 0,
      Days: 1,
      Months: 2,
      Eras: 3
    };
    TranslationType[TranslationType.DayPeriods] = 'DayPeriods';
    TranslationType[TranslationType.Days] = 'Days';
    TranslationType[TranslationType.Months] = 'Months';
    TranslationType[TranslationType.Eras] = 'Eras';
    /**
     * \@ngModule CommonModule
     * \@description
     *
     * Formats a date according to locale rules.
     *
     * @see `DatePipe` / [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} value The date to format, as a Date, or a number (milliseconds since UTC epoch)
     * or an [ISO date-time string](https://www.w3.org/TR/NOTE-datetime).
     * @param {?} format The date-time components to include. See `DatePipe` for details.
     * @param {?} locale A locale code for the locale format rules to use.
     * @param {?=} timezone The time zone. A time zone offset from GMT (such as `'+0430'`),
     * or a standard UTC/GMT or continental US time zone abbreviation.
     * If not specified, uses host system settings.
     *
     * @return {?} The formatted date string.
     *
     */

    function formatDate(value, format, locale, timezone) {
      /** @type {?} */
      var date = toDate(value);
      /** @type {?} */

      var namedFormat = getNamedFormat(locale, format);
      format = namedFormat || format;
      /** @type {?} */

      var parts = [];
      /** @type {?} */

      var match;

      while (format) {
        match = DATE_FORMATS_SPLIT.exec(format);

        if (match) {
          parts = parts.concat(match.slice(1));
          /** @type {?} */

          var part = parts.pop();

          if (!part) {
            break;
          }

          format = part;
        } else {
          parts.push(format);
          break;
        }
      }
      /** @type {?} */


      var dateTimezoneOffset = date.getTimezoneOffset();

      if (timezone) {
        dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
        date = convertTimezoneToLocal(date, timezone, true);
      }
      /** @type {?} */


      var text = '';
      parts.forEach(
      /**
      * @param {?} value
      * @return {?}
      */
      function (value) {
        /** @type {?} */
        var dateFormatter = getDateFormatter(value);
        text += dateFormatter ? dateFormatter(date, locale, dateTimezoneOffset) : value === '\'\'' ? '\'' : value.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
      });
      return text;
    }
    /**
     * @param {?} locale
     * @param {?} format
     * @return {?}
     */


    function getNamedFormat(locale, format) {
      /** @type {?} */
      var localeId = getLocaleId(locale);
      NAMED_FORMATS[localeId] = NAMED_FORMATS[localeId] || {};

      if (NAMED_FORMATS[localeId][format]) {
        return NAMED_FORMATS[localeId][format];
      }
      /** @type {?} */


      var formatValue = '';

      switch (format) {
        case 'shortDate':
          formatValue = getLocaleDateFormat(locale, FormatWidth.Short);
          break;

        case 'mediumDate':
          formatValue = getLocaleDateFormat(locale, FormatWidth.Medium);
          break;

        case 'longDate':
          formatValue = getLocaleDateFormat(locale, FormatWidth.Long);
          break;

        case 'fullDate':
          formatValue = getLocaleDateFormat(locale, FormatWidth.Full);
          break;

        case 'shortTime':
          formatValue = getLocaleTimeFormat(locale, FormatWidth.Short);
          break;

        case 'mediumTime':
          formatValue = getLocaleTimeFormat(locale, FormatWidth.Medium);
          break;

        case 'longTime':
          formatValue = getLocaleTimeFormat(locale, FormatWidth.Long);
          break;

        case 'fullTime':
          formatValue = getLocaleTimeFormat(locale, FormatWidth.Full);
          break;

        case 'short':
          /** @type {?} */
          var shortTime = getNamedFormat(locale, 'shortTime');
          /** @type {?} */

          var shortDate = getNamedFormat(locale, 'shortDate');
          formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Short), [shortTime, shortDate]);
          break;

        case 'medium':
          /** @type {?} */
          var mediumTime = getNamedFormat(locale, 'mediumTime');
          /** @type {?} */

          var mediumDate = getNamedFormat(locale, 'mediumDate');
          formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Medium), [mediumTime, mediumDate]);
          break;

        case 'long':
          /** @type {?} */
          var longTime = getNamedFormat(locale, 'longTime');
          /** @type {?} */

          var longDate = getNamedFormat(locale, 'longDate');
          formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Long), [longTime, longDate]);
          break;

        case 'full':
          /** @type {?} */
          var fullTime = getNamedFormat(locale, 'fullTime');
          /** @type {?} */

          var fullDate = getNamedFormat(locale, 'fullDate');
          formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Full), [fullTime, fullDate]);
          break;
      }

      if (formatValue) {
        NAMED_FORMATS[localeId][format] = formatValue;
      }

      return formatValue;
    }
    /**
     * @param {?} str
     * @param {?} opt_values
     * @return {?}
     */


    function formatDateTime(str, opt_values) {
      if (opt_values) {
        str = str.replace(/\{([^}]+)}/g,
        /**
        * @param {?} match
        * @param {?} key
        * @return {?}
        */
        function (match, key) {
          return opt_values != null && key in opt_values ? opt_values[key] : match;
        });
      }

      return str;
    }
    /**
     * @param {?} num
     * @param {?} digits
     * @param {?=} minusSign
     * @param {?=} trim
     * @param {?=} negWrap
     * @return {?}
     */


    function padNumber(num, digits) {
      var minusSign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '-';
      var trim = arguments.length > 3 ? arguments[3] : undefined;
      var negWrap = arguments.length > 4 ? arguments[4] : undefined;

      /** @type {?} */
      var neg = '';

      if (num < 0 || negWrap && num <= 0) {
        if (negWrap) {
          num = -num + 1;
        } else {
          num = -num;
          neg = minusSign;
        }
      }
      /** @type {?} */


      var strNum = String(num);

      while (strNum.length < digits) {
        strNum = '0' + strNum;
      }

      if (trim) {
        strNum = strNum.substr(strNum.length - digits);
      }

      return neg + strNum;
    }
    /**
     * @param {?} milliseconds
     * @param {?} digits
     * @return {?}
     */


    function formatFractionalSeconds(milliseconds, digits) {
      /** @type {?} */
      var strMs = padNumber(milliseconds, 3);
      return strMs.substr(0, digits);
    }
    /**
     * Returns a date formatter that transforms a date into its locale digit representation
     * @param {?} name
     * @param {?} size
     * @param {?=} offset
     * @param {?=} trim
     * @param {?=} negWrap
     * @return {?}
     */


    function dateGetter(name, size) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var trim = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var negWrap = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      return (
        /**
        * @param {?} date
        * @param {?} locale
        * @return {?}
        */
        function (date, locale) {
          /** @type {?} */
          var part = getDatePart(name, date);

          if (offset > 0 || part > -offset) {
            part += offset;
          }

          if (name === DateType.Hours) {
            if (part === 0 && offset === -12) {
              part = 12;
            }
          } else if (name === DateType.FractionalSeconds) {
            return formatFractionalSeconds(part, size);
          }
          /** @type {?} */


          var localeMinus = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
          return padNumber(part, size, localeMinus, trim, negWrap);
        }
      );
    }
    /**
     * @param {?} part
     * @param {?} date
     * @return {?}
     */


    function getDatePart(part, date) {
      switch (part) {
        case DateType.FullYear:
          return date.getFullYear();

        case DateType.Month:
          return date.getMonth();

        case DateType.Date:
          return date.getDate();

        case DateType.Hours:
          return date.getHours();

        case DateType.Minutes:
          return date.getMinutes();

        case DateType.Seconds:
          return date.getSeconds();

        case DateType.FractionalSeconds:
          return date.getMilliseconds();

        case DateType.Day:
          return date.getDay();

        default:
          throw new Error("Unknown DateType value \"".concat(part, "\"."));
      }
    }
    /**
     * Returns a date formatter that transforms a date into its locale string representation
     * @param {?} name
     * @param {?} width
     * @param {?=} form
     * @param {?=} extended
     * @return {?}
     */


    function dateStrGetter(name, width) {
      var form = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : FormStyle.Format;
      var extended = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      return (
        /**
        * @param {?} date
        * @param {?} locale
        * @return {?}
        */
        function (date, locale) {
          return getDateTranslation(date, locale, name, width, form, extended);
        }
      );
    }
    /**
     * Returns the locale translation of a date for a given form, type and width
     * @param {?} date
     * @param {?} locale
     * @param {?} name
     * @param {?} width
     * @param {?} form
     * @param {?} extended
     * @return {?}
     */


    function getDateTranslation(date, locale, name, width, form, extended) {
      switch (name) {
        case TranslationType.Months:
          return getLocaleMonthNames(locale, form, width)[date.getMonth()];

        case TranslationType.Days:
          return getLocaleDayNames(locale, form, width)[date.getDay()];

        case TranslationType.DayPeriods:
          /** @type {?} */
          var currentHours = date.getHours();
          /** @type {?} */

          var currentMinutes = date.getMinutes();

          if (extended) {
            /** @type {?} */
            var rules = getLocaleExtraDayPeriodRules(locale);
            /** @type {?} */

            var dayPeriods = getLocaleExtraDayPeriods(locale, form, width);
            /** @type {?} */

            var result;
            rules.forEach(
            /**
            * @param {?} rule
            * @param {?} index
            * @return {?}
            */
            function (rule, index) {
              if (Array.isArray(rule)) {
                // morning, afternoon, evening, night
                var _rule$ = rule[0],
                    hoursFrom = _rule$.hours,
                    minutesFrom = _rule$.minutes;
                var _rule$2 = rule[1],
                    hoursTo = _rule$2.hours,
                    minutesTo = _rule$2.minutes;

                if (currentHours >= hoursFrom && currentMinutes >= minutesFrom && (currentHours < hoursTo || currentHours === hoursTo && currentMinutes < minutesTo)) {
                  result = dayPeriods[index];
                }
              } else {
                // noon or midnight
                // noon or midnight
                var hours = rule.hours,
                    minutes = rule.minutes;

                if (hours === currentHours && minutes === currentMinutes) {
                  result = dayPeriods[index];
                }
              }
            });

            if (result) {
              return result;
            }
          } // if no rules for the day periods, we use am/pm by default


          return getLocaleDayPeriods(locale, form,
          /** @type {?} */
          width)[currentHours < 12 ? 0 : 1];

        case TranslationType.Eras:
          return getLocaleEraNames(locale,
          /** @type {?} */
          width)[date.getFullYear() <= 0 ? 0 : 1];

        default:
          // This default case is not needed by TypeScript compiler, as the switch is exhaustive.
          // However Closure Compiler does not understand that and reports an error in typed mode.
          // The `throw new Error` below works around the problem, and the unexpected: never variable
          // makes sure tsc still checks this code is unreachable.

          /** @type {?} */
          var unexpected = name;
          throw new Error("unexpected translation type ".concat(unexpected));
      }
    }
    /**
     * Returns a date formatter that transforms a date and an offset into a timezone with ISO8601 or
     * GMT format depending on the width (eg: short = +0430, short:GMT = GMT+4, long = GMT+04:30,
     * extended = +04:30)
     * @param {?} width
     * @return {?}
     */


    function timeZoneGetter(width) {
      return (
        /**
        * @param {?} date
        * @param {?} locale
        * @param {?} offset
        * @return {?}
        */
        function (date, locale, offset) {
          /** @type {?} */
          var zone = -1 * offset;
          /** @type {?} */

          var minusSign = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
          /** @type {?} */

          var hours = zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60);

          switch (width) {
            case ZoneWidth.Short:
              return (zone >= 0 ? '+' : '') + padNumber(hours, 2, minusSign) + padNumber(Math.abs(zone % 60), 2, minusSign);

            case ZoneWidth.ShortGMT:
              return 'GMT' + (zone >= 0 ? '+' : '') + padNumber(hours, 1, minusSign);

            case ZoneWidth.Long:
              return 'GMT' + (zone >= 0 ? '+' : '') + padNumber(hours, 2, minusSign) + ':' + padNumber(Math.abs(zone % 60), 2, minusSign);

            case ZoneWidth.Extended:
              if (offset === 0) {
                return 'Z';
              } else {
                return (zone >= 0 ? '+' : '') + padNumber(hours, 2, minusSign) + ':' + padNumber(Math.abs(zone % 60), 2, minusSign);
              }

            default:
              throw new Error("Unknown zone width \"".concat(width, "\""));
          }
        }
      );
    }
    /** @type {?} */


    var JANUARY = 0;
    /** @type {?} */

    var THURSDAY = 4;
    /**
     * @param {?} year
     * @return {?}
     */

    function getFirstThursdayOfYear(year) {
      /** @type {?} */
      var firstDayOfYear = new Date(year, JANUARY, 1).getDay();
      return new Date(year, 0, 1 + (firstDayOfYear <= THURSDAY ? THURSDAY : THURSDAY + 7) - firstDayOfYear);
    }
    /**
     * @param {?} datetime
     * @return {?}
     */


    function getThursdayThisWeek(datetime) {
      return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + (THURSDAY - datetime.getDay()));
    }
    /**
     * @param {?} size
     * @param {?=} monthBased
     * @return {?}
     */


    function weekGetter(size) {
      var monthBased = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return (
        /**
        * @param {?} date
        * @param {?} locale
        * @return {?}
        */
        function (date, locale) {
          /** @type {?} */
          var result;

          if (monthBased) {
            /** @type {?} */
            var nbDaysBefore1stDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
            /** @type {?} */

            var today = date.getDate();
            result = 1 + Math.floor((today + nbDaysBefore1stDayOfMonth) / 7);
          } else {
            /** @type {?} */
            var firstThurs = getFirstThursdayOfYear(date.getFullYear());
            /** @type {?} */

            var thisThurs = getThursdayThisWeek(date);
            /** @type {?} */

            var diff = thisThurs.getTime() - firstThurs.getTime();
            result = 1 + Math.round(diff / 6.048e8); // 6.048e8 ms per week
          }

          return padNumber(result, size, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
        }
      );
    }
    /** @type {?} */


    var DATE_FORMATS = {}; // Based on CLDR formats:
    // See complete list: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
    // See also explanations: http://cldr.unicode.org/translation/date-time
    // TODO(ocombe): support all missing cldr formats: Y, U, Q, D, F, e, c, j, J, C, A, v, V, X, x

    /**
     * @param {?} format
     * @return {?}
     */

    function getDateFormatter(format) {
      if (DATE_FORMATS[format]) {
        return DATE_FORMATS[format];
      }
      /** @type {?} */


      var formatter;

      switch (format) {
        // Era name (AD/BC)
        case 'G':
        case 'GG':
        case 'GGG':
          formatter = dateStrGetter(TranslationType.Eras, TranslationWidth.Abbreviated);
          break;

        case 'GGGG':
          formatter = dateStrGetter(TranslationType.Eras, TranslationWidth.Wide);
          break;

        case 'GGGGG':
          formatter = dateStrGetter(TranslationType.Eras, TranslationWidth.Narrow);
          break;
        // 1 digit representation of the year, e.g. (AD 1 => 1, AD 199 => 199)

        case 'y':
          formatter = dateGetter(DateType.FullYear, 1, 0, false, true);
          break;
        // 2 digit representation of the year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)

        case 'yy':
          formatter = dateGetter(DateType.FullYear, 2, 0, true, true);
          break;
        // 3 digit representation of the year, padded (000-999). (e.g. AD 2001 => 01, AD 2010 => 10)

        case 'yyy':
          formatter = dateGetter(DateType.FullYear, 3, 0, false, true);
          break;
        // 4 digit representation of the year (e.g. AD 1 => 0001, AD 2010 => 2010)

        case 'yyyy':
          formatter = dateGetter(DateType.FullYear, 4, 0, false, true);
          break;
        // Month of the year (1-12), numeric

        case 'M':
        case 'L':
          formatter = dateGetter(DateType.Month, 1, 1);
          break;

        case 'MM':
        case 'LL':
          formatter = dateGetter(DateType.Month, 2, 1);
          break;
        // Month of the year (January, ...), string, format

        case 'MMM':
          formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Abbreviated);
          break;

        case 'MMMM':
          formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Wide);
          break;

        case 'MMMMM':
          formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Narrow);
          break;
        // Month of the year (January, ...), string, standalone

        case 'LLL':
          formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Abbreviated, FormStyle.Standalone);
          break;

        case 'LLLL':
          formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Wide, FormStyle.Standalone);
          break;

        case 'LLLLL':
          formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Narrow, FormStyle.Standalone);
          break;
        // Week of the year (1, ... 52)

        case 'w':
          formatter = weekGetter(1);
          break;

        case 'ww':
          formatter = weekGetter(2);
          break;
        // Week of the month (1, ...)

        case 'W':
          formatter = weekGetter(1, true);
          break;
        // Day of the month (1-31)

        case 'd':
          formatter = dateGetter(DateType.Date, 1);
          break;

        case 'dd':
          formatter = dateGetter(DateType.Date, 2);
          break;
        // Day of the Week

        case 'E':
        case 'EE':
        case 'EEE':
          formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Abbreviated);
          break;

        case 'EEEE':
          formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Wide);
          break;

        case 'EEEEE':
          formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Narrow);
          break;

        case 'EEEEEE':
          formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Short);
          break;
        // Generic period of the day (am-pm)

        case 'a':
        case 'aa':
        case 'aaa':
          formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Abbreviated);
          break;

        case 'aaaa':
          formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Wide);
          break;

        case 'aaaaa':
          formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Narrow);
          break;
        // Extended period of the day (midnight, at night, ...), standalone

        case 'b':
        case 'bb':
        case 'bbb':
          formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Abbreviated, FormStyle.Standalone, true);
          break;

        case 'bbbb':
          formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Wide, FormStyle.Standalone, true);
          break;

        case 'bbbbb':
          formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Narrow, FormStyle.Standalone, true);
          break;
        // Extended period of the day (midnight, night, ...), standalone

        case 'B':
        case 'BB':
        case 'BBB':
          formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Abbreviated, FormStyle.Format, true);
          break;

        case 'BBBB':
          formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Wide, FormStyle.Format, true);
          break;

        case 'BBBBB':
          formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Narrow, FormStyle.Format, true);
          break;
        // Hour in AM/PM, (1-12)

        case 'h':
          formatter = dateGetter(DateType.Hours, 1, -12);
          break;

        case 'hh':
          formatter = dateGetter(DateType.Hours, 2, -12);
          break;
        // Hour of the day (0-23)

        case 'H':
          formatter = dateGetter(DateType.Hours, 1);
          break;
        // Hour in day, padded (00-23)

        case 'HH':
          formatter = dateGetter(DateType.Hours, 2);
          break;
        // Minute of the hour (0-59)

        case 'm':
          formatter = dateGetter(DateType.Minutes, 1);
          break;

        case 'mm':
          formatter = dateGetter(DateType.Minutes, 2);
          break;
        // Second of the minute (0-59)

        case 's':
          formatter = dateGetter(DateType.Seconds, 1);
          break;

        case 'ss':
          formatter = dateGetter(DateType.Seconds, 2);
          break;
        // Fractional second

        case 'S':
          formatter = dateGetter(DateType.FractionalSeconds, 1);
          break;

        case 'SS':
          formatter = dateGetter(DateType.FractionalSeconds, 2);
          break;

        case 'SSS':
          formatter = dateGetter(DateType.FractionalSeconds, 3);
          break;
        // Timezone ISO8601 short format (-0430)

        case 'Z':
        case 'ZZ':
        case 'ZZZ':
          formatter = timeZoneGetter(ZoneWidth.Short);
          break;
        // Timezone ISO8601 extended format (-04:30)

        case 'ZZZZZ':
          formatter = timeZoneGetter(ZoneWidth.Extended);
          break;
        // Timezone GMT short format (GMT+4)

        case 'O':
        case 'OO':
        case 'OOO': // Should be location, but fallback to format O instead because we don't have the data yet

        case 'z':
        case 'zz':
        case 'zzz':
          formatter = timeZoneGetter(ZoneWidth.ShortGMT);
          break;
        // Timezone GMT long format (GMT+0430)

        case 'OOOO':
        case 'ZZZZ': // Should be location, but fallback to format O instead because we don't have the data yet

        case 'zzzz':
          formatter = timeZoneGetter(ZoneWidth.Long);
          break;

        default:
          return null;
      }

      DATE_FORMATS[format] = formatter;
      return formatter;
    }
    /**
     * @param {?} timezone
     * @param {?} fallback
     * @return {?}
     */


    function timezoneToOffset(timezone, fallback) {
      // Support: IE 9-11 only, Edge 13-15+
      // IE/Edge do not "understand" colon (`:`) in timezone
      timezone = timezone.replace(/:/g, '');
      /** @type {?} */

      var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
      return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
    }
    /**
     * @param {?} date
     * @param {?} minutes
     * @return {?}
     */


    function addDateMinutes(date, minutes) {
      date = new Date(date.getTime());
      date.setMinutes(date.getMinutes() + minutes);
      return date;
    }
    /**
     * @param {?} date
     * @param {?} timezone
     * @param {?} reverse
     * @return {?}
     */


    function convertTimezoneToLocal(date, timezone, reverse) {
      /** @type {?} */
      var reverseValue = reverse ? -1 : 1;
      /** @type {?} */

      var dateTimezoneOffset = date.getTimezoneOffset();
      /** @type {?} */

      var timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
      return addDateMinutes(date, reverseValue * (timezoneOffset - dateTimezoneOffset));
    }
    /**
     * Converts a value to date.
     *
     * Supported input formats:
     * - `Date`
     * - number: timestamp
     * - string: numeric (e.g. "1234"), ISO and date strings in a format supported by
     *   [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
     *   Note: ISO strings without time return a date without timeoffset.
     *
     * Throws if unable to convert to a date.
     * @param {?} value
     * @return {?}
     */


    function toDate(value) {
      if (isDate(value)) {
        return value;
      }

      if (typeof value === 'number' && !isNaN(value)) {
        return new Date(value);
      }

      if (typeof value === 'string') {
        value = value.trim();
        /** @type {?} */

        var parsedNb = parseFloat(value); // any string that only contains numbers, like "1234" but not like "1234hello"

        if (!isNaN(
        /** @type {?} */
        value - parsedNb)) {
          return new Date(parsedNb);
        }

        if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
          /* For ISO Strings without time the day, month and year must be extracted from the ISO String
                before Date creation to avoid time offset and errors in the new Date.
                If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
                date, some browsers (e.g. IE 9) will throw an invalid Date error.
                If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the timeoffset
                is applied.
                Note: ISO months are 0 for January, 1 for February, ... */
          var _value$split$map = value.split('-').map(
          /**
          * @param {?} val
          * @return {?}
          */
          function (val) {
            return +val;
          }),
              _value$split$map2 = _slicedToArray(_value$split$map, 3),
              y = _value$split$map2[0],
              m = _value$split$map2[1],
              d = _value$split$map2[2];

          return new Date(y, m - 1, d);
        }
        /** @type {?} */


        var match;

        if (match = value.match(ISO8601_DATE_REGEX)) {
          return isoStringToDate(match);
        }
      }
      /** @type {?} */


      var date = new Date(
      /** @type {?} */
      value);

      if (!isDate(date)) {
        throw new Error("Unable to convert \"".concat(value, "\" into a date"));
      }

      return date;
    }
    /**
     * Converts a date in ISO8601 to a Date.
     * Used instead of `Date.parse` because of browser discrepancies.
     * @param {?} match
     * @return {?}
     */


    function isoStringToDate(match) {
      /** @type {?} */
      var date = new Date(0);
      /** @type {?} */

      var tzHour = 0;
      /** @type {?} */

      var tzMin = 0; // match[8] means that the string contains "Z" (UTC) or a timezone like "+01:00" or "+0100"

      /** @type {?} */

      var dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
      /** @type {?} */

      var timeSetter = match[8] ? date.setUTCHours : date.setHours; // if there is a timezone defined like "+01:00" or "+0100"

      if (match[9]) {
        tzHour = Number(match[9] + match[10]);
        tzMin = Number(match[9] + match[11]);
      }

      dateSetter.call(date, Number(match[1]), Number(match[2]) - 1, Number(match[3]));
      /** @type {?} */

      var h = Number(match[4] || 0) - tzHour;
      /** @type {?} */

      var m = Number(match[5] || 0) - tzMin;
      /** @type {?} */

      var s = Number(match[6] || 0);
      /** @type {?} */

      var ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
      timeSetter.call(date, h, m, s, ms);
      return date;
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isDate(value) {
      return value instanceof Date && !isNaN(value.valueOf());
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
    /** @type {?} */

    var MAX_DIGITS = 22;
    /** @type {?} */

    var DECIMAL_SEP = '.';
    /** @type {?} */

    var ZERO_CHAR = '0';
    /** @type {?} */

    var PATTERN_SEP = ';';
    /** @type {?} */

    var GROUP_SEP = ',';
    /** @type {?} */

    var DIGIT_CHAR = '#';
    /** @type {?} */

    var CURRENCY_CHAR = '¤';
    /** @type {?} */

    var PERCENT_CHAR = '%';
    /**
     * Transforms a number to a locale string based on a style and a format.
     * @param {?} value
     * @param {?} pattern
     * @param {?} locale
     * @param {?} groupSymbol
     * @param {?} decimalSymbol
     * @param {?=} digitsInfo
     * @param {?=} isPercent
     * @return {?}
     */

    function formatNumberToLocaleString(value, pattern, locale, groupSymbol, decimalSymbol, digitsInfo) {
      var isPercent = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

      /** @type {?} */
      var formattedText = '';
      /** @type {?} */

      var isZero = false;

      if (!isFinite(value)) {
        formattedText = getLocaleNumberSymbol(locale, NumberSymbol.Infinity);
      } else {
        /** @type {?} */
        var parsedNumber = parseNumber(value);

        if (isPercent) {
          parsedNumber = toPercent(parsedNumber);
        }
        /** @type {?} */


        var minInt = pattern.minInt;
        /** @type {?} */

        var minFraction = pattern.minFrac;
        /** @type {?} */

        var maxFraction = pattern.maxFrac;

        if (digitsInfo) {
          /** @type {?} */
          var parts = digitsInfo.match(NUMBER_FORMAT_REGEXP);

          if (parts === null) {
            throw new Error("".concat(digitsInfo, " is not a valid digit info"));
          }
          /** @type {?} */


          var minIntPart = parts[1];
          /** @type {?} */

          var minFractionPart = parts[3];
          /** @type {?} */

          var maxFractionPart = parts[5];

          if (minIntPart != null) {
            minInt = parseIntAutoRadix(minIntPart);
          }

          if (minFractionPart != null) {
            minFraction = parseIntAutoRadix(minFractionPart);
          }

          if (maxFractionPart != null) {
            maxFraction = parseIntAutoRadix(maxFractionPart);
          } else if (minFractionPart != null && minFraction > maxFraction) {
            maxFraction = minFraction;
          }
        }

        roundNumber(parsedNumber, minFraction, maxFraction);
        /** @type {?} */

        var digits = parsedNumber.digits;
        /** @type {?} */

        var integerLen = parsedNumber.integerLen;
        /** @type {?} */

        var exponent = parsedNumber.exponent;
        /** @type {?} */

        var decimals = [];
        isZero = digits.every(
        /**
        * @param {?} d
        * @return {?}
        */
        function (d) {
          return !d;
        }); // pad zeros for small numbers

        for (; integerLen < minInt; integerLen++) {
          digits.unshift(0);
        } // pad zeros for small numbers


        for (; integerLen < 0; integerLen++) {
          digits.unshift(0);
        } // extract decimals digits


        if (integerLen > 0) {
          decimals = digits.splice(integerLen, digits.length);
        } else {
          decimals = digits;
          digits = [0];
        } // format the integer digits with grouping separators

        /** @type {?} */


        var groups = [];

        if (digits.length >= pattern.lgSize) {
          groups.unshift(digits.splice(-pattern.lgSize, digits.length).join(''));
        }

        while (digits.length > pattern.gSize) {
          groups.unshift(digits.splice(-pattern.gSize, digits.length).join(''));
        }

        if (digits.length) {
          groups.unshift(digits.join(''));
        }

        formattedText = groups.join(getLocaleNumberSymbol(locale, groupSymbol)); // append the decimal digits

        if (decimals.length) {
          formattedText += getLocaleNumberSymbol(locale, decimalSymbol) + decimals.join('');
        }

        if (exponent) {
          formattedText += getLocaleNumberSymbol(locale, NumberSymbol.Exponential) + '+' + exponent;
        }
      }

      if (value < 0 && !isZero) {
        formattedText = pattern.negPre + formattedText + pattern.negSuf;
      } else {
        formattedText = pattern.posPre + formattedText + pattern.posSuf;
      }

      return formattedText;
    }
    /**
     * \@ngModule CommonModule
     * \@description
     *
     * Formats a number as currency using locale rules.
     *
     * @see `formatNumber()` / `DecimalPipe` / [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} value The number to format.
     * @param {?} locale A locale code for the locale format rules to use.
     * @param {?} currency A string containing the currency symbol or its name,
     * such as "$" or "Canadian Dollar". Used in output string, but does not affect the operation
     * of the function.
     * @param {?=} currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
     * currency code, such as `USD` for the US dollar and `EUR` for the euro.
     * Used to determine the number of digits in the decimal part.
     * @param {?=} digitsInfo
     * @return {?} The formatted currency value.
     *
     */


    function formatCurrency(value, locale, currency, currencyCode, digitsInfo) {
      /** @type {?} */
      var format = getLocaleNumberFormat(locale, NumberFormatStyle.Currency);
      /** @type {?} */

      var pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
      pattern.minFrac = getNumberOfCurrencyDigits(
      /** @type {?} */
      currencyCode);
      pattern.maxFrac = pattern.minFrac;
      /** @type {?} */

      var res = formatNumberToLocaleString(value, pattern, locale, NumberSymbol.CurrencyGroup, NumberSymbol.CurrencyDecimal, digitsInfo);
      return res.replace(CURRENCY_CHAR, currency) // if we have 2 time the currency character, the second one is ignored
      .replace(CURRENCY_CHAR, '');
    }
    /**
     * \@ngModule CommonModule
     * \@description
     *
     * Formats a number as a percentage according to locale rules.
     *
     * @see `formatNumber()` / `DecimalPipe` / [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     * \@publicApi
     *
     * @param {?} value The number to format.
     * @param {?} locale A locale code for the locale format rules to use.
     * @param {?=} digitsInfo
     * @return {?} The formatted percentage value.
     *
     */


    function formatPercent(value, locale, digitsInfo) {
      /** @type {?} */
      var format = getLocaleNumberFormat(locale, NumberFormatStyle.Percent);
      /** @type {?} */

      var pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
      /** @type {?} */

      var res = formatNumberToLocaleString(value, pattern, locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo, true);
      return res.replace(new RegExp(PERCENT_CHAR, 'g'), getLocaleNumberSymbol(locale, NumberSymbol.PercentSign));
    }
    /**
     * \@ngModule CommonModule
     * \@description
     *
     * Formats a number as text, with group sizing, separator, and other
     * parameters based on the locale.
     *
     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
     *
     * \@publicApi
     * @param {?} value The number to format.
     * @param {?} locale A locale code for the locale format rules to use.
     * @param {?=} digitsInfo
     * @return {?} The formatted text string.
     */


    function formatNumber(value, locale, digitsInfo) {
      /** @type {?} */
      var format = getLocaleNumberFormat(locale, NumberFormatStyle.Decimal);
      /** @type {?} */

      var pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
      return formatNumberToLocaleString(value, pattern, locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo);
    }
    /**
     * @record
     */


    function ParsedNumberFormat() {}

    if (false) {}
    /**
     * @param {?} format
     * @param {?=} minusSign
     * @return {?}
     */


    function parseNumberFormat(format) {
      var minusSign = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';

      /** @type {?} */
      var p = {
        minInt: 1,
        minFrac: 0,
        maxFrac: 0,
        posPre: '',
        posSuf: '',
        negPre: '',
        negSuf: '',
        gSize: 0,
        lgSize: 0
      };
      /** @type {?} */

      var patternParts = format.split(PATTERN_SEP);
      /** @type {?} */

      var positive = patternParts[0];
      /** @type {?} */

      var negative = patternParts[1];
      /** @type {?} */

      var positiveParts = positive.indexOf(DECIMAL_SEP) !== -1 ? positive.split(DECIMAL_SEP) : [positive.substring(0, positive.lastIndexOf(ZERO_CHAR) + 1), positive.substring(positive.lastIndexOf(ZERO_CHAR) + 1)];
      /** @type {?} */

      var integer = positiveParts[0];
      /** @type {?} */

      var fraction = positiveParts[1] || '';
      p.posPre = integer.substr(0, integer.indexOf(DIGIT_CHAR));

      for (var i = 0; i < fraction.length; i++) {
        /** @type {?} */
        var ch = fraction.charAt(i);

        if (ch === ZERO_CHAR) {
          p.minFrac = p.maxFrac = i + 1;
        } else if (ch === DIGIT_CHAR) {
          p.maxFrac = i + 1;
        } else {
          p.posSuf += ch;
        }
      }
      /** @type {?} */


      var groups = integer.split(GROUP_SEP);
      p.gSize = groups[1] ? groups[1].length : 0;
      p.lgSize = groups[2] || groups[1] ? (groups[2] || groups[1]).length : 0;

      if (negative) {
        /** @type {?} */
        var trunkLen = positive.length - p.posPre.length - p.posSuf.length;
        /** @type {?} */

        var pos = negative.indexOf(DIGIT_CHAR);
        p.negPre = negative.substr(0, pos).replace(/'/g, '');
        p.negSuf = negative.substr(pos + trunkLen).replace(/'/g, '');
      } else {
        p.negPre = minusSign + p.posPre;
        p.negSuf = p.posSuf;
      }

      return p;
    }
    /**
     * @record
     */


    function ParsedNumber() {}

    if (false) {} // Transforms a parsed number into a percentage by multiplying it by 100

    /**
     * @param {?} parsedNumber
     * @return {?}
     */


    function toPercent(parsedNumber) {
      // if the number is 0, don't do anything
      if (parsedNumber.digits[0] === 0) {
        return parsedNumber;
      } // Getting the current number of decimals

      /** @type {?} */


      var fractionLen = parsedNumber.digits.length - parsedNumber.integerLen;

      if (parsedNumber.exponent) {
        parsedNumber.exponent += 2;
      } else {
        if (fractionLen === 0) {
          parsedNumber.digits.push(0, 0);
        } else if (fractionLen === 1) {
          parsedNumber.digits.push(0);
        }

        parsedNumber.integerLen += 2;
      }

      return parsedNumber;
    }
    /**
     * Parses a number.
     * Significant bits of this parse algorithm came from https://github.com/MikeMcl/big.js/
     * @param {?} num
     * @return {?}
     */


    function parseNumber(num) {
      /** @type {?} */
      var numStr = Math.abs(num) + '';
      /** @type {?} */

      var exponent = 0;
      /** @type {?} */

      var digits;
      /** @type {?} */

      var integerLen;
      /** @type {?} */

      var i;
      /** @type {?} */

      var j;
      /** @type {?} */

      var zeros; // Decimal point?

      if ((integerLen = numStr.indexOf(DECIMAL_SEP)) > -1) {
        numStr = numStr.replace(DECIMAL_SEP, '');
      } // Exponential form?


      if ((i = numStr.search(/e/i)) > 0) {
        // Work out the exponent.
        if (integerLen < 0) integerLen = i;
        integerLen += +numStr.slice(i + 1);
        numStr = numStr.substring(0, i);
      } else if (integerLen < 0) {
        // There was no decimal point or exponent so it is an integer.
        integerLen = numStr.length;
      } // Count the number of leading zeros.


      for (i = 0; numStr.charAt(i) === ZERO_CHAR; i++) {
        /* empty */
      }

      if (i === (zeros = numStr.length)) {
        // The digits are all zero.
        digits = [0];
        integerLen = 1;
      } else {
        // Count the number of trailing zeros
        zeros--;

        while (numStr.charAt(zeros) === ZERO_CHAR) {
          zeros--;
        } // Trailing zeros are insignificant so ignore them


        integerLen -= i;
        digits = []; // Convert string to array of digits without leading/trailing zeros.

        for (j = 0; i <= zeros; i++, j++) {
          digits[j] = Number(numStr.charAt(i));
        }
      } // If the number overflows the maximum allowed digits then use an exponent.


      if (integerLen > MAX_DIGITS) {
        digits = digits.splice(0, MAX_DIGITS - 1);
        exponent = integerLen - 1;
        integerLen = 1;
      }

      return {
        digits: digits,
        exponent: exponent,
        integerLen: integerLen
      };
    }
    /**
     * Round the parsed number to the specified number of decimal places
     * This function changes the parsedNumber in-place
     * @param {?} parsedNumber
     * @param {?} minFrac
     * @param {?} maxFrac
     * @return {?}
     */


    function roundNumber(parsedNumber, minFrac, maxFrac) {
      if (minFrac > maxFrac) {
        throw new Error("The minimum number of digits after fraction (".concat(minFrac, ") is higher than the maximum (").concat(maxFrac, ")."));
      }
      /** @type {?} */


      var digits = parsedNumber.digits;
      /** @type {?} */

      var fractionLen = digits.length - parsedNumber.integerLen;
      /** @type {?} */

      var fractionSize = Math.min(Math.max(minFrac, fractionLen), maxFrac); // The index of the digit to where rounding is to occur

      /** @type {?} */

      var roundAt = fractionSize + parsedNumber.integerLen;
      /** @type {?} */

      var digit = digits[roundAt];

      if (roundAt > 0) {
        // Drop fractional digits beyond `roundAt`
        digits.splice(Math.max(parsedNumber.integerLen, roundAt)); // Set non-fractional digits beyond `roundAt` to 0

        for (var j = roundAt; j < digits.length; j++) {
          digits[j] = 0;
        }
      } else {
        // We rounded to zero so reset the parsedNumber
        fractionLen = Math.max(0, fractionLen);
        parsedNumber.integerLen = 1;
        digits.length = Math.max(1, roundAt = fractionSize + 1);
        digits[0] = 0;

        for (var i = 1; i < roundAt; i++) {
          digits[i] = 0;
        }
      }

      if (digit >= 5) {
        if (roundAt - 1 < 0) {
          for (var k = 0; k > roundAt; k--) {
            digits.unshift(0);
            parsedNumber.integerLen++;
          }

          digits.unshift(1);
          parsedNumber.integerLen++;
        } else {
          digits[roundAt - 1]++;
        }
      } // Pad out with zeros to get the required fraction length


      for (; fractionLen < Math.max(0, fractionSize); fractionLen++) {
        digits.push(0);
      }
      /** @type {?} */


      var dropTrailingZeros = fractionSize !== 0; // Minimal length = nb of decimals required + current nb of integers
      // Any number besides that is optional and can be removed if it's a trailing 0

      /** @type {?} */

      var minLen = minFrac + parsedNumber.integerLen; // Do any carrying, e.g. a digit was rounded up to 10

      /** @type {?} */

      var carry = digits.reduceRight(
      /**
      * @param {?} carry
      * @param {?} d
      * @param {?} i
      * @param {?} digits
      * @return {?}
      */
      function (carry, d, i, digits) {
        d = d + carry;
        digits[i] = d < 10 ? d : d - 10; // d % 10

        if (dropTrailingZeros) {
          // Do not keep meaningless fractional trailing zeros (e.g. 15.52000 --> 15.52)
          if (digits[i] === 0 && i >= minLen) {
            digits.pop();
          } else {
            dropTrailingZeros = false;
          }
        }

        return d >= 10 ? 1 : 0; // Math.floor(d / 10);
      }, 0);

      if (carry) {
        digits.unshift(carry);
        parsedNumber.integerLen++;
      }
    }
    /**
     * @param {?} text
     * @return {?}
     */


    function parseIntAutoRadix(text) {
      /** @type {?} */
      var result = parseInt(text);

      if (isNaN(result)) {
        throw new Error('Invalid integer literal when parsing ' + text);
      }

      return result;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @deprecated from v5
     * @type {?}
     */


    var DEPRECATED_PLURAL_FN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('UseV4Plurals');
    /**
     * \@publicApi
     * @abstract
     */

    var NgLocalization = function NgLocalization() {
      _classCallCheck(this, NgLocalization);
    };

    if (false) {}
    /**
     * Returns the plural category for a given value.
     * - "=value" when the case exists,
     * - the plural category otherwise
     * @param {?} value
     * @param {?} cases
     * @param {?} ngLocalization
     * @param {?=} locale
     * @return {?}
     */


    function getPluralCategory(value, cases, ngLocalization, locale) {
      /** @type {?} */
      var key = "=".concat(value);

      if (cases.indexOf(key) > -1) {
        return key;
      }

      key = ngLocalization.getPluralCategory(value, locale);

      if (cases.indexOf(key) > -1) {
        return key;
      }

      if (cases.indexOf('other') > -1) {
        return 'other';
      }

      throw new Error("No plural message found for value \"".concat(value, "\""));
    }
    /**
     * Returns the plural case based on the locale
     *
     * \@publicApi
     */


    var NgLocaleLocalization = /*#__PURE__*/function (_NgLocalization) {
      _inherits(NgLocaleLocalization, _NgLocalization);

      var _super4 = _createSuper(NgLocaleLocalization);

      /**
       * @param {?} locale
       * @param {?=} deprecatedPluralFn
       */
      function NgLocaleLocalization(locale, deprecatedPluralFn) {
        var _this5;

        _classCallCheck(this, NgLocaleLocalization);

        _this5 = _super4.
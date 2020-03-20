/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/dashboard/AdminLTE.js":
/*!********************************************!*\
  !*** ./resources/js/dashboard/AdminLTE.js ***!
  \********************************************/
/*! exports provided: Layout, PushMenu, Treeview, DirectChat, TodoList, CardWidget, CardRefresh, Dropdown, Toasts, Custom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ "./resources/js/dashboard/Layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _Layout__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PushMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PushMenu */ "./resources/js/dashboard/PushMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PushMenu", function() { return _PushMenu__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Treeview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Treeview */ "./resources/js/dashboard/Treeview.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Treeview", function() { return _Treeview__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _DirectChat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DirectChat */ "./resources/js/dashboard/DirectChat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectChat", function() { return _DirectChat__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoList */ "./resources/js/dashboard/TodoList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoList", function() { return _TodoList__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _CardWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardWidget */ "./resources/js/dashboard/CardWidget.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardWidget", function() { return _CardWidget__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _CardRefresh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardRefresh */ "./resources/js/dashboard/CardRefresh.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardRefresh", function() { return _CardRefresh__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dropdown */ "./resources/js/dashboard/Dropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _Dropdown__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Toasts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Toasts */ "./resources/js/dashboard/Toasts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toasts", function() { return _Toasts__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Custom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Custom */ "./resources/js/dashboard/Custom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Custom", function() { return _Custom__WEBPACK_IMPORTED_MODULE_9__["default"]; });

// import ControlSidebar from './ControlSidebar'












/***/ }),

/***/ "./resources/js/dashboard/CardRefresh.js":
/*!***********************************************!*\
  !*** ./resources/js/dashboard/CardRefresh.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------
 * AdminLTE CardRefresh.js
 * License MIT
 * --------------------------------------------
 */
var CardRefresh = function ($) {
  /**
   * Constants
   * ====================================================
   */
  var NAME = 'CardRefresh';
  var DATA_KEY = 'lte.cardrefresh';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Event = {
    LOADED: "loaded".concat(EVENT_KEY),
    OVERLAY_ADDED: "overlay.added".concat(EVENT_KEY),
    OVERLAY_REMOVED: "overlay.removed".concat(EVENT_KEY)
  };
  var ClassName = {
    CARD: 'card'
  };
  var Selector = {
    CARD: ".".concat(ClassName.CARD),
    DATA_REFRESH: '[data-card-widget="card-refresh"]'
  };
  var Default = {
    source: '',
    sourceSelector: '',
    params: {},
    trigger: Selector.DATA_REFRESH,
    content: '.card-body',
    loadInContent: true,
    loadOnInit: true,
    responseType: '',
    overlayTemplate: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',
    onLoadStart: function onLoadStart() {},
    onLoadDone: function onLoadDone(response) {
      return response;
    }
  };

  var CardRefresh = /*#__PURE__*/function () {
    function CardRefresh(element, settings) {
      _classCallCheck(this, CardRefresh);

      this._element = element;
      this._parent = element.parents(Selector.CARD).first();
      this._settings = $.extend({}, Default, settings);
      this._overlay = $(this._settings.overlayTemplate);

      if (element.hasClass(ClassName.CARD)) {
        this._parent = element;
      }

      if (this._settings.source === '') {
        throw new Error('Source url was not defined. Please specify a url in your CardRefresh source option.');
      }

      this._init();

      if (this._settings.loadOnInit) {
        this.load();
      }
    }

    _createClass(CardRefresh, [{
      key: "load",
      value: function load() {
        this._addOverlay();

        this._settings.onLoadStart.call($(this));

        $.get(this._settings.source, this._settings.params, function (response) {
          if (this._settings.loadInContent) {
            if (this._settings.sourceSelector != '') {
              response = $(response).find(this._settings.sourceSelector).html();
            }

            this._parent.find(this._settings.content).html(response);
          }

          this._settings.onLoadDone.call($(this), response);

          this._removeOverlay();
        }.bind(this), this._settings.responseType !== '' && this._settings.responseType);
        var loadedEvent = $.Event(Event.LOADED);
        $(this._element).trigger(loadedEvent);
      }
    }, {
      key: "_addOverlay",
      value: function _addOverlay() {
        this._parent.append(this._overlay);

        var overlayAddedEvent = $.Event(Event.OVERLAY_ADDED);
        $(this._element).trigger(overlayAddedEvent);
      }
    }, {
      key: "_removeOverlay",
      value: function _removeOverlay() {
        this._parent.find(this._overlay).remove();

        var overlayRemovedEvent = $.Event(Event.OVERLAY_REMOVED);
        $(this._element).trigger(overlayRemovedEvent);
      }
    }, {
      key: "_init",
      // Private
      value: function _init(card) {
        var _this = this;

        $(this).find(this._settings.trigger).on('click', function () {
          _this.load();
        });
      } // Static

    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        var data = $(this).data(DATA_KEY);

        var _options = $.extend({}, Default, $(this).data());

        if (!data) {
          data = new CardRefresh($(this), _options);
          $(this).data(DATA_KEY, typeof config === 'string' ? data : config);
        }

        if (typeof config === 'string' && config.match(/load/)) {
          data[config]();
        } else if (_typeof(config) === 'object') {
          data._init($(this));
        }
      }
    }]);

    return CardRefresh;
  }();
  /**
   * Data API
   * ====================================================
   */


  $(document).on('click', Selector.DATA_REFRESH, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardRefresh._jQueryInterface.call($(this), 'load');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $.fn[NAME] = CardRefresh._jQueryInterface;
  $.fn[NAME].Constructor = CardRefresh;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return CardRefresh._jQueryInterface;
  };

  return CardRefresh;
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (CardRefresh);

/***/ }),

/***/ "./resources/js/dashboard/CardWidget.js":
/*!**********************************************!*\
  !*** ./resources/js/dashboard/CardWidget.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------
 * AdminLTE CardWidget.js
 * License MIT
 * --------------------------------------------
 */
var CardWidget = function ($) {
  /**
   * Constants
   * ====================================================
   */
  var NAME = 'CardWidget';
  var DATA_KEY = 'lte.cardwidget';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Event = {
    EXPANDED: "expanded".concat(EVENT_KEY),
    COLLAPSED: "collapsed".concat(EVENT_KEY),
    MAXIMIZED: "maximized".concat(EVENT_KEY),
    MINIMIZED: "minimized".concat(EVENT_KEY),
    REMOVED: "removed".concat(EVENT_KEY)
  };
  var ClassName = {
    CARD: 'card',
    COLLAPSED: 'collapsed-card',
    WAS_COLLAPSED: 'was-collapsed',
    MAXIMIZED: 'maximized-card'
  };
  var Selector = {
    DATA_REMOVE: '[data-card-widget="remove"]',
    DATA_COLLAPSE: '[data-card-widget="collapse"]',
    DATA_MAXIMIZE: '[data-card-widget="maximize"]',
    CARD: ".".concat(ClassName.CARD),
    CARD_HEADER: '.card-header',
    CARD_BODY: '.card-body',
    CARD_FOOTER: '.card-footer',
    COLLAPSED: ".".concat(ClassName.COLLAPSED)
  };
  var Default = {
    animationSpeed: 'normal',
    collapseTrigger: Selector.DATA_COLLAPSE,
    removeTrigger: Selector.DATA_REMOVE,
    maximizeTrigger: Selector.DATA_MAXIMIZE,
    collapseIcon: 'fa-minus',
    expandIcon: 'fa-plus',
    maximizeIcon: 'fa-expand',
    minimizeIcon: 'fa-compress'
  };

  var CardWidget = /*#__PURE__*/function () {
    function CardWidget(element, settings) {
      _classCallCheck(this, CardWidget);

      this._element = element;
      this._parent = element.parents(Selector.CARD).first();

      if (element.hasClass(ClassName.CARD)) {
        this._parent = element;
      }

      this._settings = $.extend({}, Default, settings);
    }

    _createClass(CardWidget, [{
      key: "collapse",
      value: function collapse() {
        var _this = this;

        this._parent.children("".concat(Selector.CARD_BODY, ", ").concat(Selector.CARD_FOOTER)).slideUp(this._settings.animationSpeed, function () {
          _this._parent.addClass(ClassName.COLLAPSED);
        });

        this._parent.find('> ' + Selector.CARD_HEADER + ' ' + this._settings.collapseTrigger + ' .' + this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);

        var collapsed = $.Event(Event.COLLAPSED);

        this._element.trigger(collapsed, this._parent);
      }
    }, {
      key: "expand",
      value: function expand() {
        var _this2 = this;

        this._parent.children("".concat(Selector.CARD_BODY, ", ").concat(Selector.CARD_FOOTER)).slideDown(this._settings.animationSpeed, function () {
          _this2._parent.removeClass(ClassName.COLLAPSED);
        });

        this._parent.find('> ' + Selector.CARD_HEADER + ' ' + this._settings.collapseTrigger + ' .' + this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);

        var expanded = $.Event(Event.EXPANDED);

        this._element.trigger(expanded, this._parent);
      }
    }, {
      key: "remove",
      value: function remove() {
        this._parent.slideUp();

        var removed = $.Event(Event.REMOVED);

        this._element.trigger(removed, this._parent);
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (this._parent.hasClass(ClassName.COLLAPSED)) {
          this.expand();
          return;
        }

        this.collapse();
      }
    }, {
      key: "maximize",
      value: function maximize() {
        this._parent.find(this._settings.maximizeTrigger + ' .' + this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon);

        this._parent.css({
          'height': this._parent.height(),
          'width': this._parent.width(),
          'transition': 'all .15s'
        }).delay(150).queue(function () {
          $(this).addClass(ClassName.MAXIMIZED);
          $('html').addClass(ClassName.MAXIMIZED);

          if ($(this).hasClass(ClassName.COLLAPSED)) {
            $(this).addClass(ClassName.WAS_COLLAPSED);
          }

          $(this).dequeue();
        });

        var maximized = $.Event(Event.MAXIMIZED);

        this._element.trigger(maximized, this._parent);
      }
    }, {
      key: "minimize",
      value: function minimize() {
        this._parent.find(this._settings.maximizeTrigger + ' .' + this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon);

        this._parent.css('cssText', 'height:' + this._parent[0].style.height + ' !important;' + 'width:' + this._parent[0].style.width + ' !important; transition: all .15s;').delay(10).queue(function () {
          $(this).removeClass(ClassName.MAXIMIZED);
          $('html').removeClass(ClassName.MAXIMIZED);
          $(this).css({
            'height': 'inherit',
            'width': 'inherit'
          });

          if ($(this).hasClass(ClassName.WAS_COLLAPSED)) {
            $(this).removeClass(ClassName.WAS_COLLAPSED);
          }

          $(this).dequeue();
        });

        var MINIMIZED = $.Event(Event.MINIMIZED);

        this._element.trigger(MINIMIZED, this._parent);
      }
    }, {
      key: "toggleMaximize",
      value: function toggleMaximize() {
        if (this._parent.hasClass(ClassName.MAXIMIZED)) {
          this.minimize();
          return;
        }

        this.maximize();
      } // Private

    }, {
      key: "_init",
      value: function _init(card) {
        var _this3 = this;

        this._parent = card;
        $(this).find(this._settings.collapseTrigger).click(function () {
          _this3.toggle();
        });
        $(this).find(this._settings.maximizeTrigger).click(function () {
          _this3.toggleMaximize();
        });
        $(this).find(this._settings.removeTrigger).click(function () {
          _this3.remove();
        });
      } // Static

    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        var data = $(this).data(DATA_KEY);

        var _options = $.extend({}, Default, $(this).data());

        if (!data) {
          data = new CardWidget($(this), _options);
          $(this).data(DATA_KEY, typeof config === 'string' ? data : config);
        }

        if (typeof config === 'string' && config.match(/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/)) {
          data[config]();
        } else if (_typeof(config) === 'object') {
          data._init($(this));
        }
      }
    }]);

    return CardWidget;
  }();
  /**
   * Data API
   * ====================================================
   */


  $(document).on('click', Selector.DATA_COLLAPSE, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardWidget._jQueryInterface.call($(this), 'toggle');
  });
  $(document).on('click', Selector.DATA_REMOVE, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardWidget._jQueryInterface.call($(this), 'remove');
  });
  $(document).on('click', Selector.DATA_MAXIMIZE, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardWidget._jQueryInterface.call($(this), 'toggleMaximize');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $.fn[NAME] = CardWidget._jQueryInterface;
  $.fn[NAME].Constructor = CardWidget;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return CardWidget._jQueryInterface;
  };

  return CardWidget;
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (CardWidget);

/***/ }),

/***/ "./resources/js/dashboard/Custom.js":
/*!******************************************!*\
  !*** ./resources/js/dashboard/Custom.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Custom = function ($) {
  $(function () {
    'use strict';

    var ticksStyle = {
      fontColor: '#495057',
      fontStyle: 'bold'
    };
    var mode = 'index';
    var intersect = true;

    if ($('#sales-chart').length) {
      var $salesChart = $('#sales-chart');
      var salesChart = new Chart($salesChart, {
        type: 'bar',
        data: {
          labels: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets: [{
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            data: [1000, 2000, 3000, 2500, 2700, 2500, 3000]
          }, {
            backgroundColor: '#ced4da',
            borderColor: '#ced4da',
            data: [700, 1700, 2700, 2000, 1800, 1500, 2000]
          }]
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            mode: mode,
            intersect: intersect
          },
          hover: {
            mode: mode,
            intersect: intersect
          },
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              // display: false,
              gridLines: {
                display: true,
                lineWidth: '4px',
                color: 'rgba(0, 0, 0, .2)',
                zeroLineColor: 'transparent'
              },
              ticks: $.extend({
                beginAtZero: true,
                // Include a dollar sign in the ticks
                callback: function callback(value, index, values) {
                  if (value >= 1000) {
                    value /= 1000;
                    value += 'k';
                  }

                  return '$' + value;
                }
              }, ticksStyle)
            }],
            xAxes: [{
              display: true,
              gridLines: {
                display: false
              },
              ticks: ticksStyle
            }]
          }
        }
      });
    }

    if ($('#visitors-chart').length) {
      var $visitorsChart = $('#visitors-chart');
      var visitorsChart = new Chart($visitorsChart, {
        data: {
          labels: ['18th', '20th', '22nd', '24th', '26th', '28th', '30th'],
          datasets: [{
            type: 'line',
            data: [100, 120, 170, 167, 180, 177, 160],
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            pointBorderColor: '#007bff',
            pointBackgroundColor: '#007bff',
            fill: false // pointHoverBackgroundColor: '#007bff',
            // pointHoverBorderColor    : '#007bff'

          }, {
            type: 'line',
            data: [60, 80, 70, 67, 80, 77, 100],
            backgroundColor: 'tansparent',
            borderColor: '#ced4da',
            pointBorderColor: '#ced4da',
            pointBackgroundColor: '#ced4da',
            fill: false // pointHoverBackgroundColor: '#ced4da',
            // pointHoverBorderColor    : '#ced4da'

          }]
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            mode: mode,
            intersect: intersect
          },
          hover: {
            mode: mode,
            intersect: intersect
          },
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              // display: false,
              gridLines: {
                display: true,
                lineWidth: '4px',
                color: 'rgba(0, 0, 0, .2)',
                zeroLineColor: 'transparent'
              },
              ticks: $.extend({
                beginAtZero: true,
                suggestedMax: 200
              }, ticksStyle)
            }],
            xAxes: [{
              display: true,
              gridLines: {
                display: false
              },
              ticks: ticksStyle
            }]
          }
        }
      });
    } // get current url


    var location = window.location.href; // remove active class from all

    $(".nav-sidebar .nav-item").removeClass('active');
    $(".nav-sidebar .nav-item .nav-link").removeClass('active');
    $(".nav-sidebar .has-treeview").removeClass('active'); // add active class to div that matches active url

    var match_url = $(".nav-sidebar .nav-item a[href='" + location + "']");

    if (match_url.length) {
      $(match_url).removeClass('active').addClass('active');
      $(match_url).parents('.has-treeview').removeClass('menu-open').addClass('menu-open');
      $(match_url).parents('.has-treeview').children('.nav-link').removeClass('active').addClass('active');
    }

    if ($('.textarea').length) {
      $('.textarea').summernote({
        height: 300
      });
    }

    if ($('.select2').length) {
      $('.select2').select2({
        theme: 'bootstrap4',
        allowClear: true
      });
    }
  });
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (Custom);

/***/ }),

/***/ "./resources/js/dashboard/DirectChat.js":
/*!**********************************************!*\
  !*** ./resources/js/dashboard/DirectChat.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------
 * AdminLTE DirectChat.js
 * License MIT
 * --------------------------------------------
 */
var DirectChat = function ($) {
  /**
   * Constants
   * ====================================================
   */
  var NAME = 'DirectChat';
  var DATA_KEY = 'lte.directchat';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var DATA_API_KEY = '.data-api';
  var Event = {
    TOGGLED: "toggled{EVENT_KEY}"
  };
  var Selector = {
    DATA_TOGGLE: '[data-widget="chat-pane-toggle"]',
    DIRECT_CHAT: '.direct-chat'
  };
  var ClassName = {
    DIRECT_CHAT_OPEN: 'direct-chat-contacts-open'
  };
  /**
   * Class Definition
   * ====================================================
   */

  var DirectChat = /*#__PURE__*/function () {
    function DirectChat(element, config) {
      _classCallCheck(this, DirectChat);

      this._element = element;
    }

    _createClass(DirectChat, [{
      key: "toggle",
      value: function toggle() {
        $(this._element).parents(Selector.DIRECT_CHAT).first().toggleClass(ClassName.DIRECT_CHAT_OPEN);
        var toggledEvent = $.Event(Event.TOGGLED);
        $(this._element).trigger(toggledEvent);
      } // Static

    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new DirectChat($(this));
            $(this).data(DATA_KEY, data);
          }

          data[config]();
        });
      }
    }]);

    return DirectChat;
  }();
  /**
   *
   * Data Api implementation
   * ====================================================
   */


  $(document).on('click', Selector.DATA_TOGGLE, function (event) {
    if (event) event.preventDefault();

    DirectChat._jQueryInterface.call($(this), 'toggle');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $.fn[NAME] = DirectChat._jQueryInterface;
  $.fn[NAME].Constructor = DirectChat;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return DirectChat._jQueryInterface;
  };

  return DirectChat;
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (DirectChat);

/***/ }),

/***/ "./resources/js/dashboard/Dropdown.js":
/*!********************************************!*\
  !*** ./resources/js/dashboard/Dropdown.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------
 * AdminLTE Dropdown.js
 * License MIT
 * --------------------------------------------
 */
var Dropdown = function ($) {
  /**
   * Constants
   * ====================================================
   */
  var NAME = 'Dropdown';
  var DATA_KEY = 'lte.dropdown';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DROPDOWN_MENU: 'ul.dropdown-menu',
    DROPDOWN_TOGGLE: '[data-toggle="dropdown"]'
  };
  var ClassName = {
    DROPDOWN_HOVER: '.dropdown-hover'
  };
  var Default = {};
  /**
   * Class Definition
   * ====================================================
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      _classCallCheck(this, Dropdown);

      this._config = config;
      this._element = element;
    } // Public


    _createClass(Dropdown, [{
      key: "toggleSubmenu",
      value: function toggleSubmenu() {
        this._element.siblings().show().toggleClass("show");

        if (!this._element.next().hasClass('show')) {
          this._element.parents('.dropdown-menu').first().find('.show').removeClass("show").hide();
        }

        this._element.parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
          $('.dropdown-submenu .show').removeClass("show").hide();
        });
      } // Static

    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new Dropdown($(this), _config);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'toggleSubmenu') {
            data[config]();
          }
        });
      }
    }]);

    return Dropdown;
  }();
  /**
   * Data API
   * ====================================================
   */


  $(Selector.DROPDOWN_MENU + ' ' + Selector.DROPDOWN_TOGGLE).on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggleSubmenu');
  }); // $(Selector.SIDEBAR + ' a').on('focusin', () => {
  //   $(Selector.MAIN_SIDEBAR).addClass(ClassName.SIDEBAR_FOCUSED);
  // })
  // $(Selector.SIDEBAR + ' a').on('focusout', () => {
  //   $(Selector.MAIN_SIDEBAR).removeClass(ClassName.SIDEBAR_FOCUSED);
  // })

  /**
   * jQuery API
   * ====================================================
   */

  $.fn[NAME] = Dropdown._jQueryInterface;
  $.fn[NAME].Constructor = Dropdown;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./resources/js/dashboard/Layout.js":
/*!******************************************!*\
  !*** ./resources/js/dashboard/Layout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------
 * AdminLTE Layout.js
 * License MIT
 * --------------------------------------------
 */
var Layout = function ($) {
  /**
   * Constants
   * ====================================================
   */
  var NAME = 'Layout';
  var DATA_KEY = 'lte.layout';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Event = {
    SIDEBAR: 'sidebar'
  };
  var Selector = {
    HEADER: '.main-header',
    MAIN_SIDEBAR: '.main-sidebar',
    SIDEBAR: '.main-sidebar .sidebar',
    CONTENT: '.content-wrapper',
    BRAND: '.brand-link',
    CONTENT_HEADER: '.content-header',
    WRAPPER: '.wrapper',
    CONTROL_SIDEBAR: '.control-sidebar',
    CONTROL_SIDEBAR_CONTENT: '.control-sidebar-content',
    CONTROL_SIDEBAR_BTN: '[data-widget="control-sidebar"]',
    LAYOUT_FIXED: '.layout-fixed',
    FOOTER: '.main-footer',
    PUSHMENU_BTN: '[data-widget="pushmenu"]',
    LOGIN_BOX: '.login-box',
    REGISTER_BOX: '.register-box'
  };
  var ClassName = {
    HOLD: 'hold-transition',
    SIDEBAR: 'main-sidebar',
    CONTENT_FIXED: 'content-fixed',
    SIDEBAR_FOCUSED: 'sidebar-focused',
    LAYOUT_FIXED: 'layout-fixed',
    NAVBAR_FIXED: 'layout-navbar-fixed',
    FOOTER_FIXED: 'layout-footer-fixed',
    LOGIN_PAGE: 'login-page',
    REGISTER_PAGE: 'register-page',
    CONTROL_SIDEBAR_SLIDE_OPEN: 'control-sidebar-slide-open',
    CONTROL_SIDEBAR_OPEN: 'control-sidebar-open'
  };
  var Default = {
    scrollbarTheme: 'os-theme-light',
    scrollbarAutoHide: 'l'
  };
  /**
   * Class Definition
   * ====================================================
   */

  var Layout = /*#__PURE__*/function () {
    function Layout(element, config) {
      _classCallCheck(this, Layout);

      this._config = config;
      this._element = element;

      this._init();
    } // Public


    _createClass(Layout, [{
      key: "fixLayoutHeight",
      value: function fixLayoutHeight() {
        var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var control_sidebar = 0;

        if ($('body').hasClass(ClassName.CONTROL_SIDEBAR_SLIDE_OPEN) || $('body').hasClass(ClassName.CONTROL_SIDEBAR_OPEN) || extra == 'control_sidebar') {
          control_sidebar = $(Selector.CONTROL_SIDEBAR_CONTENT).height();
        }

        var heights = {
          window: $(window).height(),
          header: $(Selector.HEADER).length !== 0 ? $(Selector.HEADER).outerHeight() : 0,
          footer: $(Selector.FOOTER).length !== 0 ? $(Selector.FOOTER).outerHeight() : 0,
          sidebar: $(Selector.SIDEBAR).length !== 0 ? $(Selector.SIDEBAR).height() : 0,
          control_sidebar: control_sidebar
        };

        var max = this._max(heights);

        if (max == heights.control_sidebar) {
          $(Selector.CONTENT).css('min-height', max);
        } else if (max == heights.window) {
          $(Selector.CONTENT).css('min-height', max - heights.header - heights.footer);
        } else {
          $(Selector.CONTENT).css('min-height', max - heights.header);
        }

        if ($('body').hasClass(ClassName.LAYOUT_FIXED)) {
          $(Selector.CONTENT).css('min-height', max - heights.header - heights.footer);

          if (typeof $.fn.overlayScrollbars !== 'undefined') {
            $(Selector.SIDEBAR).overlayScrollbars({
              className: this._config.scrollbarTheme,
              sizeAutoCapable: true,
              scrollbars: {
                autoHide: this._config.scrollbarAutoHide,
                clickScrolling: true
              }
            });
          }
        }
      } // Private

    }, {
      key: "_init",
      value: function _init() {
        var _this = this;

        // Activate layout height watcher
        this.fixLayoutHeight();
        $(Selector.SIDEBAR).on('collapsed.lte.treeview expanded.lte.treeview', function () {
          _this.fixLayoutHeight();
        });
        $(Selector.PUSHMENU_BTN).on('collapsed.lte.pushmenu shown.lte.pushmenu', function () {
          _this.fixLayoutHeight();
        });
        $(Selector.CONTROL_SIDEBAR_BTN).on('collapsed.lte.controlsidebar', function () {
          _this.fixLayoutHeight();
        }).on('expanded.lte.controlsidebar', function () {
          _this.fixLayoutHeight('control_sidebar');
        });
        $(window).resize(function () {
          _this.fixLayoutHeight();
        });

        if (!$('body').hasClass(ClassName.LOGIN_PAGE) && !$('body').hasClass(ClassName.REGISTER_PAGE)) {
          $('body, html').css('height', 'auto');
        } else if ($('body').hasClass(ClassName.LOGIN_PAGE) || $('body').hasClass(ClassName.REGISTER_PAGE)) {
          var box_height = $(Selector.LOGIN_BOX + ', ' + Selector.REGISTER_BOX).height();
          $('body').css('min-height', box_height);
        }

        $('body.hold-transition').removeClass('hold-transition');
      }
    }, {
      key: "_max",
      value: function _max(numbers) {
        // Calculate the maximum number in a list
        var max = 0;
        Object.keys(numbers).forEach(function (key) {
          if (numbers[key] > max) {
            max = numbers[key];
          }
        });
        return max;
      } // Static

    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new Layout($(this), _options);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'init' || config === '') {
            data['_init']();
          }
        });
      }
    }]);

    return Layout;
  }();
  /**
   * Data API
   * ====================================================
   */


  $(window).on('load', function () {
    Layout._jQueryInterface.call($('body'));
  });
  $(Selector.SIDEBAR + ' a').on('focusin', function () {
    $(Selector.MAIN_SIDEBAR).addClass(ClassName.SIDEBAR_FOCUSED);
  });
  $(Selector.SIDEBAR + ' a').on('focusout', function () {
    $(Selector.MAIN_SIDEBAR).removeClass(ClassName.SIDEBAR_FOCUSED);
  });
  /**
   * jQuery API
   * ====================================================
   */

  $.fn[NAME] = Layout._jQueryInterface;
  $.fn[NAME].Constructor = Layout;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Layout._jQueryInterface;
  };

  return Layout;
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./resources/js/dashboard/PushMenu.js":
/*!********************************************!*\
  !*** ./resources/js/dashboard/PushMenu.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------
 * AdminLTE PushMenu.js
 * License MIT
 * --------------------------------------------
 */
var PushMenu = function ($) {
  /**
   * Constants
   * ====================================================
   */
  var NAME = 'PushMenu';
  var DATA_KEY = 'lte.pushmenu';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Event = {
    COLLAPSED: "collapsed".concat(EVENT_KEY),
    SHOWN: "shown".concat(EVENT_KEY)
  };
  var Default = {
    autoCollapseSize: 992,
    enableRemember: false,
    noTransitionAfterReload: true
  };
  var Selector = {
    TOGGLE_BUTTON: '[data-widget="pushmenu"]',
    SIDEBAR_MINI: '.sidebar-mini',
    SIDEBAR_COLLAPSED: '.sidebar-collapse',
    BODY: 'body',
    OVERLAY: '#sidebar-overlay',
    WRAPPER: '.wrapper'
  };
  var ClassName = {
    SIDEBAR_OPEN: 'sidebar-open',
    COLLAPSED: 'sidebar-collapse',
    OPEN: 'sidebar-open'
  };
  /**
   * Class Definition
   * ====================================================
   */

  var PushMenu = /*#__PURE__*/function () {
    function PushMenu(element, options) {
      _classCallCheck(this, PushMenu);

      this._element = element;
      this._options = $.extend({}, Default, options);

      if (!$(Selector.OVERLAY).length) {
        this._addOverlay();
      }

      this._init();
    } // Public


    _createClass(PushMenu, [{
      key: "expand",
      value: function expand() {
        if (this._options.autoCollapseSize) {
          if ($(window).width() <= this._options.autoCollapseSize) {
            $(Selector.BODY).addClass(ClassName.OPEN);
          }
        }

        $(Selector.BODY).removeClass(ClassName.COLLAPSED);

        if (this._options.enableRemember) {
          localStorage.setItem("remember".concat(EVENT_KEY), ClassName.OPEN);
        }

        var shownEvent = $.Event(Event.SHOWN);
        $(this._element).trigger(shownEvent);
      }
    }, {
      key: "collapse",
      value: function collapse() {
        if (this._options.autoCollapseSize) {
          if ($(window).width() <= this._options.autoCollapseSize) {
            $(Selector.BODY).removeClass(ClassName.OPEN);
          }
        }

        $(Selector.BODY).addClass(ClassName.COLLAPSED);

        if (this._options.enableRemember) {
          localStorage.setItem("remember".concat(EVENT_KEY), ClassName.COLLAPSED);
        }

        var collapsedEvent = $.Event(Event.COLLAPSED);
        $(this._element).trigger(collapsedEvent);
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (!$(Selector.BODY).hasClass(ClassName.COLLAPSED)) {
          this.collapse();
        } else {
          this.expand();
        }
      }
    }, {
      key: "autoCollapse",
      value: function autoCollapse() {
        var resize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (this._options.autoCollapseSize) {
          if ($(window).width() <= this._options.autoCollapseSize) {
            if (!$(Selector.BODY).hasClass(ClassName.OPEN)) {
              this.collapse();
            }
          } else if (resize == true) {
            if ($(Selector.BODY).hasClass(ClassName.OPEN)) {
              $(Selector.BODY).removeClass(ClassName.OPEN);
            }
          }
        }
      }
    }, {
      key: "remember",
      value: function remember() {
        if (this._options.enableRemember) {
          var toggleState = localStorage.getItem("remember".concat(EVENT_KEY));

          if (toggleState == ClassName.COLLAPSED) {
            if (this._options.noTransitionAfterReload) {
              $("body").addClass('hold-transition').addClass(ClassName.COLLAPSED).delay(50).queue(function () {
                $(this).removeClass('hold-transition');
                $(this).dequeue();
              });
            } else {
              $("body").addClass(ClassName.COLLAPSED);
            }
          } else {
            if (this._options.noTransitionAfterReload) {
              $("body").addClass('hold-transition').removeClass(ClassName.COLLAPSED).delay(50).queue(function () {
                $(this).removeClass('hold-transition');
                $(this).dequeue();
              });
            } else {
              $("body").removeClass(ClassName.COLLAPSED);
            }
          }
        }
      } // Private

    }, {
      key: "_init",
      value: function _init() {
        var _this = this;

        this.remember();
        this.autoCollapse();
        $(window).resize(function () {
          _this.autoCollapse(true);
        });
      }
    }, {
      key: "_addOverlay",
      value: function _addOverlay() {
        var _this2 = this;

        var overlay = $('<div />', {
          id: 'sidebar-overlay'
        });
        overlay.on('click', function () {
          _this2.collapse();
        });
        $(Selector.WRAPPER).append(overlay);
      } // Static

    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(operation) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new PushMenu(this, _options);
            $(this).data(DATA_KEY, data);
          }

          if (typeof operation === 'string' && operation.match(/collapse|expand|toggle/)) {
            data[operation]();
          }
        });
      }
    }]);

    return PushMenu;
  }();
  /**
   * Data API
   * ====================================================
   */


  $(document).on('click', Selector.TOGGLE_BUTTON, function (event) {
    event.preventDefault();
    var button = event.currentTarget;

    if ($(button).data('widget') !== 'pushmenu') {
      button = $(button).closest(Selector.TOGGLE_BUTTON);
    }

    PushMenu._jQueryInterface.call($(button), 'toggle');
  });
  $(window).on('load', function () {
    PushMenu._jQueryInterface.call($(Selector.TOGGLE_BUTTON));
  });
  /**
   * jQuery API
   * ====================================================
   */

  $.fn[NAME] = PushMenu._jQueryInterface;
  $.fn[NAME].Constructor = PushMenu;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return PushMenu._jQueryInterface;
  };

  return PushMenu;
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (PushMenu);

/***/ }),

/***/ "./resources/js/dashboard/Toasts.js":
/*!******************************************!*\
  !*** ./resources/js/dashboard/Toasts.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------
 * AdminLTE Toasts.js
 * License MIT
 * --------------------------------------------
 */
var Toasts = function ($) {
  /**
   * Constants
   * ====================================================
   */
  var NAME = 'Toasts';
  var DATA_KEY = 'lte.toasts';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Event = {
    INIT: "init".concat(EVENT_KEY),
    CREATED: "created".concat(EVENT_KEY),
    REMOVED: "removed".concat(EVENT_KEY)
  };
  var Selector = {
    BODY: 'toast-body',
    CONTAINER_TOP_RIGHT: '#toastsContainerTopRight',
    CONTAINER_TOP_LEFT: '#toastsContainerTopLeft',
    CONTAINER_BOTTOM_RIGHT: '#toastsContainerBottomRight',
    CONTAINER_BOTTOM_LEFT: '#toastsContainerBottomLeft'
  };
  var ClassName = {
    TOP_RIGHT: 'toasts-top-right',
    TOP_LEFT: 'toasts-top-left',
    BOTTOM_RIGHT: 'toasts-bottom-right',
    BOTTOM_LEFT: 'toasts-bottom-left',
    FADE: 'fade'
  };
  var Position = {
    TOP_RIGHT: 'topRight',
    TOP_LEFT: 'topLeft',
    BOTTOM_RIGHT: 'bottomRight',
    BOTTOM_LEFT: 'bottomLeft'
  };
  var Id = {
    CONTAINER_TOP_RIGHT: 'toastsContainerTopRight',
    CONTAINER_TOP_LEFT: 'toastsContainerTopLeft',
    CONTAINER_BOTTOM_RIGHT: 'toastsContainerBottomRight',
    CONTAINER_BOTTOM_LEFT: 'toastsContainerBottomLeft'
  };
  var Default = {
    position: Position.TOP_RIGHT,
    fixed: true,
    autohide: false,
    autoremove: true,
    delay: 1000,
    fade: true,
    icon: null,
    image: null,
    imageAlt: null,
    imageHeight: '25px',
    title: null,
    subtitle: null,
    close: true,
    body: null,
    "class": null
  };
  /**
   * Class Definition
   * ====================================================
   */

  var Toasts = /*#__PURE__*/function () {
    function Toasts(element, config) {
      _classCallCheck(this, Toasts);

      this._config = config;

      this._prepareContainer();

      var initEvent = $.Event(Event.INIT);
      $('body').trigger(initEvent);
    } // Public


    _createClass(Toasts, [{
      key: "create",
      value: function create() {
        var toast = $('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');
        toast.data('autohide', this._config.autohide);
        toast.data('animation', this._config.fade);

        if (this._config["class"]) {
          toast.addClass(this._config["class"]);
        }

        if (this._config.delay && this._config.delay != 500) {
          toast.data('delay', this._config.delay);
        }

        var toast_header = $('<div class="toast-header">');

        if (this._config.image != null) {
          var toast_image = $('<img />').addClass('rounded mr-2').attr('src', this._config.image).attr('alt', this._config.imageAlt);

          if (this._config.imageHeight != null) {
            toast_image.height(this._config.imageHeight).width('auto');
          }

          toast_header.append(toast_image);
        }

        if (this._config.icon != null) {
          toast_header.append($('<i />').addClass('mr-2').addClass(this._config.icon));
        }

        if (this._config.title != null) {
          toast_header.append($('<strong />').addClass('mr-auto').html(this._config.title));
        }

        if (this._config.subtitle != null) {
          toast_header.append($('<small />').html(this._config.subtitle));
        }

        if (this._config.close == true) {
          var toast_close = $('<button data-dismiss="toast" />').attr('type', 'button').addClass('ml-2 mb-1 close').attr('aria-label', 'Close').append('<span aria-hidden="true">&times;</span>');

          if (this._config.title == null) {
            toast_close.toggleClass('ml-2 ml-auto');
          }

          toast_header.append(toast_close);
        }

        toast.append(toast_header);

        if (this._config.body != null) {
          toast.append($('<div class="toast-body" />').html(this._config.body));
        }

        $(this._getContainerId()).prepend(toast);
        var createdEvent = $.Event(Event.CREATED);
        $('body').trigger(createdEvent);
        toast.toast('show');

        if (this._config.autoremove) {
          toast.on('hidden.bs.toast', function () {
            $(this).delay(200).remove();
            var removedEvent = $.Event(Event.REMOVED);
            $('body').trigger(removedEvent);
          });
        }
      } // Static

    }, {
      key: "_getContainerId",
      value: function _getContainerId() {
        if (this._config.position == Position.TOP_RIGHT) {
          return Selector.CONTAINER_TOP_RIGHT;
        } else if (this._config.position == Position.TOP_LEFT) {
          return Selector.CONTAINER_TOP_LEFT;
        } else if (this._config.position == Position.BOTTOM_RIGHT) {
          return Selector.CONTAINER_BOTTOM_RIGHT;
        } else if (this._config.position == Position.BOTTOM_LEFT) {
          return Selector.CONTAINER_BOTTOM_LEFT;
        }
      }
    }, {
      key: "_prepareContainer",
      value: function _prepareContainer() {
        if ($(this._getContainerId()).length === 0) {
          var container = $('<div />').attr('id', this._getContainerId().replace('#', ''));

          if (this._config.position == Position.TOP_RIGHT) {
            container.addClass(ClassName.TOP_RIGHT);
          } else if (this._config.position == Position.TOP_LEFT) {
            container.addClass(ClassName.TOP_LEFT);
          } else if (this._config.position == Position.BOTTOM_RIGHT) {
            container.addClass(ClassName.BOTTOM_RIGHT);
          } else if (this._config.position == Position.BOTTOM_LEFT) {
            container.addClass(ClassName.BOTTOM_LEFT);
          }

          $('body').append(container);
        }

        if (this._config.fixed) {
          $(this._getContainerId()).addClass('fixed');
        } else {
          $(this._getContainerId()).removeClass('fixed');
        }
      } // Static

    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(option, config) {
        return this.each(function () {
          var _options = $.extend({}, Default, config);

          var toast = new Toasts($(this), _options);

          if (option === 'create') {
            toast[option]();
          }
        });
      }
    }]);

    return Toasts;
  }();
  /**
   * jQuery API
   * ====================================================
   */


  $.fn[NAME] = Toasts._jQueryInterface;
  $.fn[NAME].Constructor = Toasts;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Toasts._jQueryInterface;
  };

  return Toasts;
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (Toasts);

/***/ }),

/***/ "./resources/js/dashboard/TodoList.js":
/*!********************************************!*\
  !*** ./resources/js/dashboard/TodoList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------
 * AdminLTE TodoList.js
 * License MIT
 * --------------------------------------------
 */
var TodoList = function ($) {
  /**
   * Constants
   * ====================================================
   */
  var NAME = 'TodoList';
  var DATA_KEY = 'lte.todolist';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DATA_TOGGLE: '[data-widget="todo-list"]'
  };
  var ClassName = {
    TODO_LIST_DONE: 'done'
  };
  var Default = {
    onCheck: function onCheck(item) {
      return item;
    },
    onUnCheck: function onUnCheck(item) {
      return item;
    }
  };
  /**
   * Class Definition
   * ====================================================
   */

  var TodoList = /*#__PURE__*/function () {
    function TodoList(element, config) {
      _classCallCheck(this, TodoList);

      this._config = config;
      this._element = element;

      this._init();
    } // Public


    _createClass(TodoList, [{
      key: "toggle",
      value: function toggle(item) {
        item.parents('li').toggleClass(ClassName.TODO_LIST_DONE);

        if (!$(item).prop('checked')) {
          this.unCheck($(item));
          return;
        }

        this.check(item);
      }
    }, {
      key: "check",
      value: function check(item) {
        this._config.onCheck.call(item);
      }
    }, {
      key: "unCheck",
      value: function unCheck(item) {
        this._config.onUnCheck.call(item);
      } // Private

    }, {
      key: "_init",
      value: function _init() {
        var that = this;
        $(Selector.DATA_TOGGLE).find('input:checkbox:checked').parents('li').toggleClass(ClassName.TODO_LIST_DONE);
        $(Selector.DATA_TOGGLE).on('change', 'input:checkbox', function (event) {
          that.toggle($(event.target));
        });
      } // Static

    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new TodoList($(this), _options);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'init') {
            data[config]();
          }
        });
      }
    }]);

    return TodoList;
  }();
  /**
   * Data API
   * ====================================================
   */


  $(window).on('load', function () {
    TodoList._jQueryInterface.call($(Selector.DATA_TOGGLE));
  });
  /**
   * jQuery API
   * ====================================================
   */

  $.fn[NAME] = TodoList._jQueryInterface;
  $.fn[NAME].Constructor = TodoList;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return TodoList._jQueryInterface;
  };

  return TodoList;
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./resources/js/dashboard/Treeview.js":
/*!********************************************!*\
  !*** ./resources/js/dashboard/Treeview.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------
 * AdminLTE Treeview.js
 * License MIT
 * --------------------------------------------
 */
var Treeview = function ($) {
  /**
   * Constants
   * ====================================================
   */
  var NAME = 'Treeview';
  var DATA_KEY = 'lte.treeview';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Event = {
    SELECTED: "selected".concat(EVENT_KEY),
    EXPANDED: "expanded".concat(EVENT_KEY),
    COLLAPSED: "collapsed".concat(EVENT_KEY),
    LOAD_DATA_API: "load".concat(EVENT_KEY)
  };
  var Selector = {
    LI: '.nav-item',
    LINK: '.nav-link',
    TREEVIEW_MENU: '.nav-treeview',
    OPEN: '.menu-open',
    DATA_WIDGET: '[data-widget="treeview"]'
  };
  var ClassName = {
    LI: 'nav-item',
    LINK: 'nav-link',
    TREEVIEW_MENU: 'nav-treeview',
    OPEN: 'menu-open',
    SIDEBAR_COLLAPSED: 'sidebar-collapse'
  };
  var Default = {
    trigger: "".concat(Selector.DATA_WIDGET, " ").concat(Selector.LINK),
    animationSpeed: 300,
    accordion: true,
    expandSidebar: false,
    sidebarButtonSelector: '[data-widget="pushmenu"]'
  };
  /**
   * Class Definition
   * ====================================================
   */

  var Treeview = /*#__PURE__*/function () {
    function Treeview(element, config) {
      _classCallCheck(this, Treeview);

      this._config = config;
      this._element = element;
    } // Public


    _createClass(Treeview, [{
      key: "init",
      value: function init() {
        this._setupListeners();
      }
    }, {
      key: "expand",
      value: function expand(treeviewMenu, parentLi) {
        var _this = this;

        var expandedEvent = $.Event(Event.EXPANDED);

        if (this._config.accordion) {
          var openMenuLi = parentLi.siblings(Selector.OPEN).first();
          var openTreeview = openMenuLi.find(Selector.TREEVIEW_MENU).first();
          this.collapse(openTreeview, openMenuLi);
        }

        treeviewMenu.stop().slideDown(this._config.animationSpeed, function () {
          parentLi.addClass(ClassName.OPEN);
          $(_this._element).trigger(expandedEvent);
        });

        if (this._config.expandSidebar) {
          this._expandSidebar();
        }
      }
    }, {
      key: "collapse",
      value: function collapse(treeviewMenu, parentLi) {
        var _this2 = this;

        var collapsedEvent = $.Event(Event.COLLAPSED);
        treeviewMenu.stop().slideUp(this._config.animationSpeed, function () {
          parentLi.removeClass(ClassName.OPEN);
          $(_this2._element).trigger(collapsedEvent);
          treeviewMenu.find("".concat(Selector.OPEN, " > ").concat(Selector.TREEVIEW_MENU)).slideUp();
          treeviewMenu.find(Selector.OPEN).removeClass(ClassName.OPEN);
        });
      }
    }, {
      key: "toggle",
      value: function toggle(event) {
        var $relativeTarget = $(event.currentTarget);
        var $parent = $relativeTarget.parent();
        var treeviewMenu = $parent.find('> ' + Selector.TREEVIEW_MENU);

        if (!treeviewMenu.is(Selector.TREEVIEW_MENU)) {
          if (!$parent.is(Selector.LI)) {
            treeviewMenu = $parent.parent().find('> ' + Selector.TREEVIEW_MENU);
          }

          if (!treeviewMenu.is(Selector.TREEVIEW_MENU)) {
            return;
          }
        }

        event.preventDefault();
        var parentLi = $relativeTarget.parents(Selector.LI).first();
        var isOpen = parentLi.hasClass(ClassName.OPEN);

        if (isOpen) {
          this.collapse($(treeviewMenu), parentLi);
        } else {
          this.expand($(treeviewMenu), parentLi);
        }
      } // Private

    }, {
      key: "_setupListeners",
      value: function _setupListeners() {
        var _this3 = this;

        $(document).on('click', this._config.trigger, function (event) {
          _this3.toggle(event);
        });
      }
    }, {
      key: "_expandSidebar",
      value: function _expandSidebar() {
        if ($('body').hasClass(ClassName.SIDEBAR_COLLAPSED)) {
          $(this._config.sidebarButtonSelector).PushMenu('expand');
        }
      } // Static

    }], [{
      key: "_jQueryInterface",
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new Treeview($(this), _options);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'init') {
            data[config]();
          }
        });
      }
    }]);

    return Treeview;
  }();
  /**
   * Data API
   * ====================================================
   */


  $(window).on(Event.LOAD_DATA_API, function () {
    $(Selector.DATA_WIDGET).each(function () {
      Treeview._jQueryInterface.call($(this), 'init');
    });
  });
  /**
   * jQuery API
   * ====================================================
   */

  $.fn[NAME] = Treeview._jQueryInterface;
  $.fn[NAME].Constructor = Treeview;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Treeview._jQueryInterface;
  };

  return Treeview;
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (Treeview);

/***/ }),

/***/ 1:
/*!**************************************************!*\
  !*** multi ./resources/js/dashboard/AdminLTE.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\mrshop\resources\js\dashboard\AdminLTE.js */"./resources/js/dashboard/AdminLTE.js");


/***/ })

/******/ });
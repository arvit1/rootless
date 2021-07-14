(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7], {
    /***/
    "0BqE":
    /*!***************************************!*\
      !*** ./src/app/blogs/blogs.module.ts ***!
      \***************************************/

    /*! exports provided: BlogsModule, ɵ0 */

    /***/
    function BqE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogsModule", function () {
        return BlogsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _blogs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./blogs.component */
      "qANX");
      /* harmony import */


      var _single_blog_single_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./single-blog/single-blog.component */
      "qoQ6");
      /* harmony import */


      var _create_blogs_create_blogs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-blogs/create-blogs.component */
      "y+zx");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_guards */
      "tkpy");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_models */
      "nPby");

      var ɵ0 = {
        roles: [_models__WEBPACK_IMPORTED_MODULE_5__["RoleEnum"].EXPERT]
      };
      var routes = [{
        path: "",
        component: _blogs_component__WEBPACK_IMPORTED_MODULE_1__["BlogsComponent"]
      }, {
        path: "create",
        component: _create_blogs_create_blogs_component__WEBPACK_IMPORTED_MODULE_3__["CreateBlogsComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        data: ɵ0
      }, {
        path: ":id",
        component: _single_blog_single_blog_component__WEBPACK_IMPORTED_MODULE_2__["SingleBlogComponent"]
      }];

      var BlogsModule = function BlogsModule() {
        _classCallCheck(this, BlogsModule);
      };
      /***/

    },

    /***/
    "3Gdb":
    /*!**********************************************************************!*\
      !*** ./src/app/blogs/single-blog/single-blog.component.ngfactory.js ***!
      \**********************************************************************/

    /*! exports provided: RenderType_SingleBlogComponent, View_SingleBlogComponent_0, View_SingleBlogComponent_Host_0, SingleBlogComponentNgFactory */

    /***/
    function Gdb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_SingleBlogComponent", function () {
        return RenderType_SingleBlogComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SingleBlogComponent_0", function () {
        return View_SingleBlogComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SingleBlogComponent_Host_0", function () {
        return View_SingleBlogComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleBlogComponentNgFactory", function () {
        return SingleBlogComponentNgFactory;
      });
      /* harmony import */


      var _single_blog_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./single-blog.component.css.shim.ngstyle */
      "FUIG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _single_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./single-blog.component */
      "qoQ6");
      /* harmony import */


      var _services_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../_services/blog.service */
      "2AXT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_SingleBlogComponent = [_single_blog_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_SingleBlogComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_SingleBlogComponent,
        data: {}
      });

      function View_SingleBlogComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "ul", [["class", "tags"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "a", [["class", "green-btn-tags"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit;

          _ck(_v, 3, 0, currVal_0);
        });
      }

      function View_SingleBlogComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 35, "div", [["class", "col-lg-8 entries blog margin-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 19, "article", [["class", "entry entry-single"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "entry-img text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["class", "img-fluid"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "h2", [["class", "entry-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 7, "div", [["class", "entry-meta"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "div", [["class", "card-text no-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "entry-img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "img", [["class", "img-fluid"], ["style", "max-width: 60px;"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "span", [["class", "card-text-colored"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "div", [["class", "entry-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "div", [["class", "font-16"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "div", [["class", "entry-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "i", [["class", "bi bi-tags green-tags"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SingleBlogComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 11, "div", [["class", "blog-author d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 6, "div", [["class", "social-links"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "a", [["href", "https://twitters.com/#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "i", [["class", "fa fa-twitter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "a", [["href", "https://facebook.com/#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 0, "i", [["class", "fa fa-facebook"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "a", [["href", "https://instagram.com/#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 0, "i", [["class", "fa fa-instagram"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "p", [["class", "comment-text d-none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" - \u201CMusic was my dream since I was a kid. I started producing music since a young age.\u201D "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 2, "div", [["class", "blog-comments d-none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "h4", [["class", "comments-count"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comments (5)"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_6 = _co.blog.tags;

          _ck(_v, 20, 0, currVal_6);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.blog.coverPhotoUrl, "");

          _ck(_v, 3, 0, currVal_0);

          var currVal_1 = _co.blog.title;

          _ck(_v, 6, 0, currVal_1);

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.getExpert(_co.blog.userId).profilePhotoUrl, "");

          _ck(_v, 10, 0, currVal_2);

          var currVal_3 = _co.getTime(_co.blog.createDate);

          _ck(_v, 12, 0, currVal_3);

          var currVal_4 = _co.getExpert(_co.blog.userId).firstName;

          _ck(_v, 14, 0, currVal_4);

          var currVal_5 = _co.blog.content;

          _ck(_v, 16, 0, currVal_5);
        });
      }

      function View_SingleBlogComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SingleBlogComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.blog && _co.experts.length !== 0;

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_SingleBlogComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-single-blog", [], null, null, null, View_SingleBlogComponent_0, RenderType_SingleBlogComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _single_blog_component__WEBPACK_IMPORTED_MODULE_3__["SingleBlogComponent"], [_services_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]], null, null)], null, null);
      }

      var SingleBlogComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-single-blog", _single_blog_component__WEBPACK_IMPORTED_MODULE_3__["SingleBlogComponent"], View_SingleBlogComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "FUIG":
    /*!*****************************************************************************!*\
      !*** ./src/app/blogs/single-blog/single-blog.component.css.shim.ngstyle.js ***!
      \*****************************************************************************/

    /*! exports provided: styles */

    /***/
    function FUIG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".blog[_ngcontent-%COMP%] {\r\n  padding: 40px 0 20px 0;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n  margin-bottom: 60px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-img[_ngcontent-%COMP%] {\r\n  max-height: 440px;\r\n  margin: -30px -30px 20px -30px;\r\n  overflow: hidden;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-title[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  padding: 0;\r\n  margin: 0 0 20px 0;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-family: Poppins;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 36px;\r\n  line-height: 40px;\r\n  color: #111111;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #111111;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n  color: #111111;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  list-style: none;\r\n  align-items: center;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\r\n  padding-left: 20px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  margin-right: 8px;\r\n  line-height: 0;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n  font-size: 14px;\r\n  display: inline-block;\r\n  line-height: 1;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  line-height: 24px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%] {\r\n  -moz-text-align-last: right;\r\n  text-align-last: right;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background: #111111;\r\n  color: #fff;\r\n  padding: 6px 20px;\r\n  transition: 0.3s;\r\n  font-size: 14px;\r\n  border-radius: 4px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background: #5969f3;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  margin-top: 30px;\r\n  font-weight: bold;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  background-color: #fafafa;\r\n  padding: 60px;\r\n  position: relative;\r\n  text-align: center;\r\n  margin: 20px 0;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #444444;\r\n  line-height: 1.6;\r\n  margin-bottom: 0;\r\n  font-style: italic;\r\n  font-weight: 500;\r\n  font-size: 22px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .cats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  display: inline;\r\n  padding: 0;\r\n  font-size: 14px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-footer[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  padding-left: 5px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .entry-single[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  margin-bottom: 30px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 120px;\r\n  margin-right: 20px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-family: Poppins;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 14px;\r\n  line-height: 21px;\r\n  display: flex;\r\n  align-items: center;\r\n  color: #373737;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #88bcba;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\r\n  margin: 0 10px 10px 0;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-author[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: rgba(1, 41, 112, 0.5);\r\n  margin-right: 5px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comments-count[_ngcontent-%COMP%] {\r\n  font-family: Poppins;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 24px;\r\n  line-height: 26px;\r\n  text-transform: uppercase;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  position: relative;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .comment-img[_ngcontent-%COMP%] {\r\n  margin-right: 14px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .comment-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  margin-bottom: 2px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-family: Poppins;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  color: #373737;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #111111;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%] {\r\n  padding-left: 10px;\r\n  font-family: Poppins;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n  color: #88bcba;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-family: Poppins;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  color: #525252;\r\n  margin-bottom: 5px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .comment.comment-reply[_ngcontent-%COMP%] {\r\n  padding-left: 40px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  padding: 30px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 22px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  padding: 10px 10px;\r\n  font-size: 14px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none;\r\n  border-color: #a0aaf8;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  padding: 10px 10px;\r\n  font-size: 14px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none;\r\n  border-color: #a0aaf8;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 25px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  padding: 10px 20px;\r\n  border: 0;\r\n  background-color: #012970;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-comments[_ngcontent-%COMP%]   .reply-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #013289;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%] {\r\n  color: #024ed5;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin: 0 5px;\r\n  transition: 0.3s;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #012970;\r\n  padding: 7px 16px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  background: #111111;\r\n}\r\n.blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .blog[_ngcontent-%COMP%]   .blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n  margin: 0 0 60px 20px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-title[_ngcontent-%COMP%] {\r\n  font-family: Poppins;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  font-size: 36px;\r\n  line-height: 40px;\r\n  color: #111111;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-item[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border: 1px solid #ddd;\r\n  padding: 3px 10px;\r\n  position: relative;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n  border: 0;\r\n  padding: 4px;\r\n  border-radius: 4px;\r\n  width: calc(100% - 40px);\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 16px;\r\n  padding: 0 15px;\r\n  margin: -1px;\r\n  background: #111111;\r\n  color: #fff;\r\n  transition: 0.3s;\r\n  border-radius: 0 4px 4px 0;\r\n  line-height: 0;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  line-height: 0;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background: #5465f2;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #012970;\r\n  transition: 0.3s;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #111111;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  padding-left: 5px;\r\n  color: #aaaaaa;\r\n  font-size: 14px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   .post-item[_ngcontent-%COMP%]    + .post-item[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  float: left;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  margin-left: 95px;\r\n  font-weight: bold;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #012970;\r\n  transition: 0.3s;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #111111;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .recent-posts[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: 95px;\r\n  font-style: italic;\r\n  font-size: 14px;\r\n  color: #aaaaaa;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\r\n  margin-bottom: -10px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #0257ee;\r\n  font-size: 14px;\r\n  padding: 6px 14px;\r\n  margin: 0 6px 8px 0;\r\n  border: 1px solid #d7e6ff;\r\n  display: inline-block;\r\n  transition: 0.3s;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n  border: 1px solid #111111;\r\n  background: #111111;\r\n}\r\n.blog[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  padding-left: 5px;\r\n  color: #a5c5fe;\r\n  font-size: 14px;\r\n}\r\n.blog[_ngcontent-%COMP%]   .comment-text[_ngcontent-%COMP%] {\r\n  font-family: Poppins;\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  padding: 0;\r\n}\r\n.green-tags[_ngcontent-%COMP%] {\r\n}\r\n.green-btn-tags[_ngcontent-%COMP%] {\r\n  background: #c2ebe9;\r\n  border-radius: 4px;\r\n  color: #000;\r\n  font-size: 13px;\r\n  border: none;\r\n  margin-right: 10px;\r\n  padding: 5px 20px;\r\n}"];
      /***/
    },

    /***/
    "IU1h":
    /*!************************************************************!*\
      !*** ./src/app/blogs/blogs.component.scss.shim.ngstyle.js ***!
      \************************************************************/

    /*! exports provided: styles */

    /***/
    function IU1h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".blog[_ngcontent-%COMP%] {\n  padding: 0 60px;\n}\n.blog[_ngcontent-%COMP%]   .beforeyougo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 60px;\n  color: black;\n  font-weight: 600;\n}\n.blog[_ngcontent-%COMP%]   .beforeyougo[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.blog[_ngcontent-%COMP%]   .margin-b-t[_ngcontent-%COMP%] {\n  margin: 60px 0;\n}\n.blog[_ngcontent-%COMP%]   .white-btn[_ngcontent-%COMP%] {\n  background: white;\n  color: black;\n  font-size: 13px;\n  border: none;\n  border-radius: 5px;\n}\n.blog[_ngcontent-%COMP%]   .yellow-btn[_ngcontent-%COMP%] {\n  background-color: #ffdb70;\n  color: #000;\n  font-size: 13px;\n  border: none;\n  margin-right: 10px;\n  border-radius: 4px;\n}\n.blog[_ngcontent-%COMP%]   .green-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #6faeac;\n  color: #fff;\n  font-size: 18px;\n  text-transform: uppercase;\n  font-weight: 400;\n  text-align: left;\n  border: none;\n}\n.blog[_ngcontent-%COMP%]   .purple-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #784ebc;\n  color: #fff;\n  font-size: 18px;\n  text-transform: uppercase;\n  font-weight: 400;\n  text-align: left;\n  border: none;\n}\n.blog[_ngcontent-%COMP%]   .yellowBlack-btn[_ngcontent-%COMP%] {\n  background: #ffc20a;\n  color: black;\n  font-weight: 500;\n  border-color: black;\n}\n.blog[_ngcontent-%COMP%]   .yellow-header[_ngcontent-%COMP%] {\n  background-color: #feecb7;\n  padding: 10px 0;\n}\n.blog[_ngcontent-%COMP%]   .yellow-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #dfa803;\n}\n.blog[_ngcontent-%COMP%]   .green-header[_ngcontent-%COMP%] {\n  background-color: #e0f4f3;\n  padding: 10px 0;\n}\n.blog[_ngcontent-%COMP%]   .green-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #6faeac;\n}\n.blog[_ngcontent-%COMP%]   .purple-header[_ngcontent-%COMP%] {\n  background-color: #dcd2ed;\n  padding: 10px 0;\n}\n.blog[_ngcontent-%COMP%]   .purple-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #784ebc;\n}\n.blog[_ngcontent-%COMP%]   .purple-border[_ngcontent-%COMP%] {\n  border: 10px solid #784ebc;\n}\n.blog[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 0;\n}\n.blog[_ngcontent-%COMP%]   .yellow-bg[_ngcontent-%COMP%] {\n  background: #ffc20a;\n  padding: 20px;\n}\n.blog[_ngcontent-%COMP%]   .img-title[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: -66px;\n  margin-left: 10px;\n  font-weight: 500;\n}\n.blog[_ngcontent-%COMP%]   .green-btn-tags[_ngcontent-%COMP%] {\n  background-color: #c2ebe9;\n  color: #000;\n  font-size: 13px;\n  border: none;\n  margin-right: 10px;\n}\n.blog[_ngcontent-%COMP%]   .green-bg[_ngcontent-%COMP%] {\n  border: 1px solid #6faeac;\n  padding: 20px;\n}\n.blog[_ngcontent-%COMP%]   .purple-btn-tags[_ngcontent-%COMP%] {\n  background-color: #bba6dd;\n  color: #000;\n  font-size: 13px;\n  border: none;\n  margin-right: 10px;\n  border-radius: 4px;\n}\n.blog[_ngcontent-%COMP%]   .blogsCard[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.blog[_ngcontent-%COMP%]   .blogsCard[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .primaryBtn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.blog[_ngcontent-%COMP%]   .blogsCard[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.blog[_ngcontent-%COMP%]   .blogsCard[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n}\n.blog[_ngcontent-%COMP%]   .blogsCard[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 26px;\n  color: #111111;\n}\n.blog[_ngcontent-%COMP%]   .blogsCard[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  color: #525252;\n}\n.blog[_ngcontent-%COMP%]   .blogsCard[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text-colored[_ngcontent-%COMP%] {\n  color: #784ebc;\n}\n.blog[_ngcontent-%COMP%]   .blogsCard[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-date[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #111111;\n}\n.blog[_ngcontent-%COMP%]   .blogsCard[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.blog[_ngcontent-%COMP%]   .col-lg-5[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex !important;\n}\n.blog[_ngcontent-%COMP%]   .font-40[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.blog[_ngcontent-%COMP%]   .fa-comment-alt[_ngcontent-%COMP%] {\n  color: #ffc20a;\n}\n.blog[_ngcontent-%COMP%]   .col-md-4.p-r-0[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n}\n.blog[_ngcontent-%COMP%]   .card-text-colored[_ngcontent-%COMP%] {\n  color: #784ebc;\n}\n.blog[_ngcontent-%COMP%]   .badge-check[_ngcontent-%COMP%] {\n  width: 17px;\n}"];
      /***/
    },

    /***/
    "NweW":
    /*!************************************************************************!*\
      !*** ./src/app/blogs/create-blogs/create-blogs.component.ngfactory.js ***!
      \************************************************************************/

    /*! exports provided: RenderType_CreateBlogsComponent, View_CreateBlogsComponent_0, View_CreateBlogsComponent_Host_0, CreateBlogsComponentNgFactory */

    /***/
    function NweW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_CreateBlogsComponent", function () {
        return RenderType_CreateBlogsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateBlogsComponent_0", function () {
        return View_CreateBlogsComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_CreateBlogsComponent_Host_0", function () {
        return View_CreateBlogsComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateBlogsComponentNgFactory", function () {
        return CreateBlogsComponentNgFactory;
      });
      /* harmony import */


      var _create_blogs_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./create-blogs.component.scss.shim.ngstyle */
      "g/vz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _node_modules_ngx_quill_ngx_quill_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../node_modules/ngx-quill/ngx-quill.ngfactory */
      "lnN7");
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-quill */
      "alHs");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _create_blogs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./create-blogs.component */
      "y+zx");
      /* harmony import */


      var _services_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../_services/upload.service */
      "m5Gf");
      /* harmony import */


      var _services_blog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../_services/blog.service */
      "2AXT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_CreateBlogsComponent = [_create_blogs_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_CreateBlogsComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_CreateBlogsComponent,
        data: {}
      });

      function View_CreateBlogsComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], {
          value: [0, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.id, "");

          _ck(_v, 1, 0, currVal_0);

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.id, "");

          _ck(_v, 2, 0, currVal_1);
        }, function (_ck, _v) {
          var currVal_2 = _v.context.$implicit.name;

          _ck(_v, 3, 0, currVal_2);
        });
      }

      function View_CreateBlogsComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 66, "div", [["class", "container createBlog"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 65, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "div", [["class", "col-lg-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h1", [["class", "backPrint no-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" < Back to profile"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "div", [["class", "col-lg-8 col-xlg-9 col-md-7 no-margin d-block"], ["style", "padding: 0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "card mainContent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "p", [["class", "body titlePrint"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Create a blog post"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 57, "div", [["class", "col-lg-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 56, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 55, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 54, "form", [["class", "form-horizontal m-t-20"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
          var ad = true;

          if ("submit" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onSubmit($event) !== false;
            ad = pd_0 && ad;
          }

          if ("reset" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onReset() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], {
          form: [0, "form"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 49, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 9, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 0, "img", [["class", "responsive-img"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 7, "input", [["class", "btn whiteBlack-btn padding-20 full-width uploadButton"], ["formControlName", "photoUrl"], ["required", ""], ["type", "file"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("change" === en) {
            var pd_4 = _co.uploadFile($event) !== false;
            ad = pd_4 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], {
          required: [0, "required"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 5, "input", [["class", "form-control mt-5"], ["formControlName", "title"], ["placeholder", "Add a title"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 8, "div", [["style", "height: 200px; display: block; margin-top: 20px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 7, "quill-editor", [["formControlName", "content"]], [[8, "style", 2], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _node_modules_ngx_quill_ngx_quill_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_QuillEditorComponent_0"], _node_modules_ngx_quill_ngx_quill_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_QuillEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 4898816, null, 0, ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillEditorComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](42, {
          height: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 5, "input", [["class", "form-control tags"], ["formControlName", "tags"], ["placeholder", "Add tags on enter key separated by comma"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 11, "select", [["class", "form-control mt-5"], ["formControlName", "industryId"], ["style", "padding: 10px !important; height: 54px"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
          var ad = true;

          if ("change" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).onChange($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).onTouched() !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
          name: [0, "name"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 3, "option", [["disabled", ""], ["selected", "true"], ["value", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], {
          value: [0, "value"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
          value: [0, "value"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Select an option or add custom "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateBlogsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 5, "div", [["class", "form-group"], ["style", "padding: 20px; padding-left: 0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 4, "div", [["class", "col-xs-12 p-b-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 1, "button", [["class", "btn whiteBlack-btn padding-20 full-width"], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onSubmit($event, false) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" save draft "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 1, "button", [["class", "btn yellowBlack-btn padding-20 full-width"], ["style", "width: auto; margin-left: 20px"], ["type", "submit"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.onSubmit($event, true) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" publish blog "]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_7 = _co.blogForm;

          _ck(_v, 14, 0, currVal_7);

          var currVal_17 = "";

          _ck(_v, 22, 0, currVal_17);

          var currVal_18 = "photoUrl";

          _ck(_v, 25, 0, currVal_18);

          var currVal_26 = "title";

          _ck(_v, 31, 0, currVal_26);

          var currVal_35 = "content";

          _ck(_v, 39, 0, currVal_35);

          var currVal_43 = "tags";

          _ck(_v, 46, 0, currVal_43);

          var currVal_51 = "industryId";

          _ck(_v, 52, 0, currVal_51);

          var currVal_52 = "";

          _ck(_v, 56, 0, currVal_52);

          var currVal_53 = "";

          _ck(_v, 57, 0, currVal_53);

          var currVal_54 = _co.industries;

          _ck(_v, 60, 0, currVal_54);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassUntouched;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassTouched;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPristine;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassDirty;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassValid;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassInvalid;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPending;

          _ck(_v, 12, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

          var currVal_8 = _co.coverPhotoUrl;

          _ck(_v, 19, 0, currVal_8);

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).required ? "" : null;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassUntouched;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassTouched;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPristine;

          var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassDirty;

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassValid;

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassInvalid;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPending;

          _ck(_v, 20, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassUntouched;

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassTouched;

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPristine;

          var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassDirty;

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassValid;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassInvalid;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).ngClassPending;

          _ck(_v, 28, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);

          var currVal_27 = _ck(_v, 42, 0, "100px");

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassUntouched;

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassTouched;

          var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPristine;

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassDirty;

          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassValid;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassInvalid;

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPending;

          _ck(_v, 35, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34);

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassUntouched;

          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassTouched;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassPristine;

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassDirty;

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassValid;

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassInvalid;

          var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassPending;

          _ck(_v, 43, 0, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42);

          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassUntouched;

          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassTouched;

          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassPristine;

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassDirty;

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassValid;

          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassInvalid;

          var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).ngClassPending;

          _ck(_v, 49, 0, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50);

          var currVal_55 = _co.blogForm.invalid;

          _ck(_v, 63, 0, currVal_55);

          var currVal_56 = _co.blogForm.invalid;

          _ck(_v, 65, 0, currVal_56);
        });
      }

      function View_CreateBlogsComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-create-blogs", [], null, null, null, View_CreateBlogsComponent_0, RenderType_CreateBlogsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _create_blogs_component__WEBPACK_IMPORTED_MODULE_7__["CreateBlogsComponent"], [_services_upload_service__WEBPACK_IMPORTED_MODULE_8__["UploadService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_blog_service__WEBPACK_IMPORTED_MODULE_9__["BlogService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var CreateBlogsComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-create-blogs", _create_blogs_component__WEBPACK_IMPORTED_MODULE_7__["CreateBlogsComponent"], View_CreateBlogsComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "PRP0":
    /*!****************************************************!*\
      !*** ./src/app/blogs/blogs.component.ngfactory.js ***!
      \****************************************************/

    /*! exports provided: RenderType_BlogsComponent, View_BlogsComponent_0, View_BlogsComponent_Host_0, BlogsComponentNgFactory */

    /***/
    function PRP0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_BlogsComponent", function () {
        return RenderType_BlogsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_BlogsComponent_0", function () {
        return View_BlogsComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_BlogsComponent_Host_0", function () {
        return View_BlogsComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogsComponentNgFactory", function () {
        return BlogsComponentNgFactory;
      });
      /* harmony import */


      var _blogs_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./blogs.component.scss.shim.ngstyle */
      "IU1h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _blogs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./blogs.component */
      "qANX");
      /* harmony import */


      var _services_blog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/blog.service */
      "2AXT");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_BlogsComponent = [_blogs_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_BlogsComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_BlogsComponent,
        data: {}
      });

      function View_BlogsComponent_2(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-success yellow-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_BlogsComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "div", [["class", "row feture-tabs aos-init aos-animate padding-b-t-40 justify-content-center"], ["data-aos", "fade-up"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "col-lg-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "img-fluid d-block margin-auto"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 10, "div", [["class", "col-lg-6 d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 9, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 8, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h3", [["class", "font-normal font-40"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "d-flex no-block align-items-center m-b-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [["class", "font-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["class", "tags mt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BlogsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_3 = _co.featuredBlog[0].tags;

          _ck(_v, 13, 0, currVal_3);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.featuredBlog[0].coverPhotoUrl, "");

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _co.featuredBlog[0].title;

          _ck(_v, 7, 0, currVal_1);

          var currVal_2 = _co.getTime(_co.featuredBlog[0].createDate);

          _ck(_v, 10, 0, currVal_2);
        });
      }

      function View_BlogsComponent_3(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "li", [], [[2, "selectedIndustry", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.setIndustry(_v.context.$implicit.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _v.context.$implicit.id === _co.selectedIndustry;

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _v.context.$implicit.name;

          _ck(_v, 1, 0, currVal_1);
        });
      }

      function View_BlogsComponent_5(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-success purple-btn-tags m-t-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
          var currVal_0 = _v.context.$implicit;

          _ck(_v, 1, 0, currVal_0);
        });
      }

      function View_BlogsComponent_4(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "div", [["class", "col-lg-4 col-md-6"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 540672, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](2, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 12, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["alt", "Card image cap"], ["class", "card-img-top img-responsive"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h4", [["class", "card-title font-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "p", [["class", "card-text no-margin font-16"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, [" ", " by "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "span", [["class", "card-text-colored"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "img", [["class", "badge-check"], ["src", "assets/images/verified-check.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "div", [["class", "purple-tags"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BlogsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var currVal_0 = _ck(_v, 2, 0, "/blog", _v.context.$implicit.id);

          _ck(_v, 1, 0, currVal_0);

          var currVal_5 = _v.context.$implicit.tags;

          _ck(_v, 15, 0, currVal_5);
        }, function (_ck, _v) {
          var _co = _v.component;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.coverPhotoUrl, "");

          _ck(_v, 4, 0, currVal_1);

          var currVal_2 = _v.context.$implicit.title;

          _ck(_v, 7, 0, currVal_2);

          var currVal_3 = _co.getTime(_v.context.$implicit.createDate);

          _ck(_v, 9, 0, currVal_3);

          var currVal_4 = _co.getExpert(_v.context.$implicit.userId).firstName;

          _ck(_v, 11, 0, currVal_4);
        });
      }

      function View_BlogsComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 75, "div", [["class", "blog"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "col-lg-11 col-sm-12"], ["style", "margin: 70px 0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h1", [["class", "font-55 black-color no-margin col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Howdy, Rootless me welcome to the blog "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [["class", "margin-b-t font-20 black-color no-margin col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Let's get ready for another cup of latest news, expert tips and rootless advice. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "yellow-header margin-b-t"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["today\u2019s feature"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BlogsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
          ngIf: [0, "ngIf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["class", "green-header margin-b-t d-none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["get in touch with other experts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 18, "div", [["class", "row blogsCard d-none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 17, "div", [["class", "col-lg-4 col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 16, "div", [["class", "row cards"], ["style", "margin-top: 0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "div", [["class", "col-md-4 p-r-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "img", [["alt", "Card image cap"], ["class", "card-img-top img-responsive"], ["src", "assets/images/blog1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 13, "div", [["class", "col-md-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 12, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "h1", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Discovering new music through painting"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 3 days ago by "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 2, "span", [["class", "card-text-colored"], ["style", "color: #88bcba"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Arnon "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "img", [["class", "badge-check"], ["src", "assets/images/verified-check-green.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 4, "div", [["class", "green-tags"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "button", [["class", "btn btn-success green-btn-tags"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Farward thinking "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "button", [["class", "btn btn-success green-btn-tags"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Art"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 12, "div", [["class", "beforeyougo col-sm-6 margin-b-t ml-auto mr-auto"], ["id", "beforeyougo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 11, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 10, "div", [["class", "beforeyou"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Are you an expert at what you do?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" You can share your stories and your ideas with our community through blog posts. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 5, "div", [["class", "col-xs-12 p-b-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 4, "button", [["class", "btn yellowBlack-btn padding-20 full-width"]], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).onClick() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 540672, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](43, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 0, "img", [["src", "assets/images/flowerblack.png"], ["style", "width: 30px; margin-right: 10px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" apply to join the rootless experts "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 29, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 28, "div", [["class", "col-lg-12 col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 27, "div", [["class", "row cards"], ["style", "margin-top: 0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 9, "div", [["class", "col-md-3 p-r-0 vertical-tab"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "p", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["TOPICS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 4, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "li", [], null, [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.setIndustry(null) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["All"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BlogsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "p", [["class", "see-more"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["See more"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 16, "div", [["class", "col-md-8 row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 1, "p", [["class", "no-margin font-weight-bold font-24 text-uppercase"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ALL"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 1, "p", [["class", "no-margin font-13"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](64, null, ["", " blogs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 7, "div", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 5, "input", [["class", "searchBlog"], ["name", "search"], ["placeholder", "Search for something"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keyup.enter"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("input" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._handleInput($event.target.value) !== false;
            ad = pd_0 && ad;
          }

          if ("blur" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).onTouched() !== false;
            ad = pd_1 && ad;
          }

          if ("compositionstart" === en) {
            var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._compositionStart() !== false;
            ad = pd_2 && ad;
          }

          if ("compositionend" === en) {
            var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67)._compositionEnd($event.target.value) !== false;
            ad = pd_3 && ad;
          }

          if ("keyup.enter" === en) {
            var pd_4 = _co.onEnter() !== false;
            ad = pd_4 && ad;
          }

          if ("ngModelChange" === en) {
            var pd_5 = (_co.search = $event) !== false;
            ad = pd_5 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], {
          name: [0, "name"],
          model: [1, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 0, "i", [["class", "ti-search"], ["style", "-webkit-text-stroke-width: 1px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 2, "div", [["class", "row w-100 mt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BlogsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.featuredBlog.length !== 0;

          _ck(_v, 10, 0, currVal_0);

          var currVal_1 = _ck(_v, 43, 0, "/experts/pricing");

          _ck(_v, 42, 0, currVal_1);

          var currVal_2 = _co.industries;

          _ck(_v, 56, 0, currVal_2);

          var currVal_11 = "search";
          var currVal_12 = _co.search;

          _ck(_v, 69, 0, currVal_11, currVal_12);

          var currVal_13 = _co.blogs;

          _ck(_v, 75, 0, currVal_13);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_3 = _co.paging.total;

          _ck(_v, 64, 0, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).ngClassUntouched;

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).ngClassTouched;

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).ngClassPristine;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).ngClassDirty;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).ngClassValid;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).ngClassInvalid;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).ngClassPending;

          _ck(_v, 66, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);
        });
      }

      function View_BlogsComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-blogs", [], null, null, null, View_BlogsComponent_0, RenderType_BlogsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _blogs_component__WEBPACK_IMPORTED_MODULE_5__["BlogsComponent"], [_services_blog_service__WEBPACK_IMPORTED_MODULE_6__["BlogService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var BlogsComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-blogs", _blogs_component__WEBPACK_IMPORTED_MODULE_5__["BlogsComponent"], View_BlogsComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "YcnA":
    /*!*************************************************!*\
      !*** ./src/app/blogs/blogs.module.ngfactory.js ***!
      \*************************************************/

    /*! exports provided: BlogsModuleNgFactory */

    /***/
    function YcnA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogsModuleNgFactory", function () {
        return BlogsModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _blogs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./blogs.module */
      "0BqE");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
      "9AJC");
      /* harmony import */


      var _blogs_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./blogs.component.ngfactory */
      "PRP0");
      /* harmony import */


      var _create_blogs_create_blogs_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./create-blogs/create-blogs.component.ngfactory */
      "NweW");
      /* harmony import */


      var _single_blog_single_blog_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./single-blog/single-blog.component.ngfactory */
      "3Gdb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-quill */
      "alHs");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-moment */
      "lawv");
      /* harmony import */


      var _blogs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./blogs.component */
      "qANX");
      /* harmony import */


      var _create_blogs_create_blogs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./create-blogs/create-blogs.component */
      "y+zx");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../_guards/auth.guard */
      "PSoG");
      /* harmony import */


      var _single_blog_single_blog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./single-blog/single-blog.component */
      "qoQ6");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var BlogsModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_blogs_module__WEBPACK_IMPORTED_MODULE_1__["BlogsModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵsNgFactory"], _blogs_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["BlogsComponentNgFactory"], _create_blogs_create_blogs_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["CreateBlogsComponentNgFactory"], _single_blog_single_blog_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["SingleBlogComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QuillService"], ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QuillService"], [ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QUILL_CONFIG_TOKEN"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_moment__WEBPACK_IMPORTED_MODULE_12__["MomentModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_12__["MomentModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QuillModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QuillModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _blogs_module__WEBPACK_IMPORTED_MODULE_1__["BlogsModule"], _blogs_module__WEBPACK_IMPORTED_MODULE_1__["BlogsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QUILL_CONFIG_TOKEN"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () {
          return [[{
            path: "",
            component: _blogs_component__WEBPACK_IMPORTED_MODULE_13__["BlogsComponent"]
          }, {
            path: "create",
            component: _create_blogs_create_blogs_component__WEBPACK_IMPORTED_MODULE_14__["CreateBlogsComponent"],
            canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
            data: _blogs_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"]
          }, {
            path: ":id",
            component: _single_blog_single_blog_component__WEBPACK_IMPORTED_MODULE_16__["SingleBlogComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "alHs":
    /*!******************************************************!*\
      !*** ./node_modules/ngx-quill/fesm2015/ngx-quill.js ***!
      \******************************************************/

    /*! exports provided: QUILL_CONFIG_TOKEN, QuillEditorBase, QuillEditorComponent, QuillModule, QuillService, QuillViewComponent, QuillViewHTMLComponent, defaultModules */

    /***/
    function alHs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QUILL_CONFIG_TOKEN", function () {
        return QUILL_CONFIG_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillEditorBase", function () {
        return QuillEditorBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillEditorComponent", function () {
        return QuillEditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillModule", function () {
        return QuillModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillService", function () {
        return QuillService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillViewComponent", function () {
        return QuillViewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillViewHTMLComponent", function () {
        return QuillViewHTMLComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultModules", function () {
        return defaultModules;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var _c0 = [[["", "quill-editor-toolbar", ""]]];
      var _c1 = ["[quill-editor-toolbar]"];
      var defaultModules = {
        toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
          header: 1
        }, {
          header: 2
        }], [{
          list: 'ordered'
        }, {
          list: 'bullet'
        }], [{
          script: 'sub'
        }, {
          script: 'super'
        }], [{
          indent: '-1'
        }, {
          indent: '+1'
        }], [{
          direction: 'rtl'
        }], [{
          size: ['small', false, 'large', 'huge']
        }], [{
          header: [1, 2, 3, 4, 5, 6, false]
        }], [{
          color: []
        }, {
          background: []
        }], [{
          font: []
        }], [{
          align: []
        }], ['clean'], ['link', 'image', 'video'] // link and image, video
        ]
      };

      var getFormat = function getFormat(format, configFormat) {
        var passedFormat = format || configFormat;
        return passedFormat || 'html';
      };

      var QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('config');

      var QuillService = /*@__PURE__*/function () {
        var QuillService = /*#__PURE__*/function () {
          function QuillService(config) {
            _classCallCheck(this, QuillService);

            this.config = config;
            this.count = 0;

            if (!this.config) {
              this.config = {
                modules: defaultModules
              };
            }
          }

          _createClass(QuillService, [{
            key: "getQuill",
            value: function getQuill() {
              var _this = this;

              this.count++;

              if (!this.Quill && this.count === 1) {
                this.$importPromise = new Promise(function (resolve) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var _this2 = this;

                    var _a, _b, quillImport;

                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return __webpack_require__.e(
                            /*! import() */
                            22).then(__webpack_require__.t.bind(null,
                            /*! quill */
                            "kzlf", 7));

                          case 2:
                            quillImport = _context.sent;
                            this.Quill = quillImport["default"] ? quillImport["default"] : quillImport; // Only register custom options and modules once

                            (_a = this.config.customOptions) === null || _a === void 0 ? void 0 : _a.forEach(function (customOption) {
                              var newCustomOption = _this2.Quill["import"](customOption["import"]);

                              newCustomOption.whitelist = customOption.whitelist;

                              _this2.Quill.register(newCustomOption, true, _this2.config.suppressGlobalRegisterWarning);
                            });
                            (_b = this.config.customModules) === null || _b === void 0 ? void 0 : _b.forEach(function (_ref) {
                              var implementation = _ref.implementation,
                                  path = _ref.path;

                              _this2.Quill.register(path, implementation, _this2.config.suppressGlobalRegisterWarning);
                            });
                            resolve(this.Quill);

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                });
              }

              return this.$importPromise;
            }
          }]);

          return QuillService;
        }();

        QuillService.ɵfac = function QuillService_Factory(t) {
          return new (t || QuillService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](QUILL_CONFIG_TOKEN));
        };

        QuillService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
          factory: function QuillService_Factory() {
            return new QuillService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(QUILL_CONFIG_TOKEN));
          },
          token: QuillService,
          providedIn: "root"
        });
        return QuillService;
      }();

      var QuillEditorBase = /*@__PURE__*/function () {
        var QuillEditorBase = /*#__PURE__*/function () {
          function QuillEditorBase(elementRef, domSanitizer, doc, platformId, renderer, zone, service) {
            var _this3 = this;

            _classCallCheck(this, QuillEditorBase);

            this.elementRef = elementRef;
            this.domSanitizer = domSanitizer;
            this.doc = doc;
            this.platformId = platformId;
            this.renderer = renderer;
            this.zone = zone;
            this.service = service;
            this.required = false;
            this.customToolbarPosition = 'top';
            this.sanitize = false;
            this.styles = null;
            this.strict = true;
            this.customOptions = [];
            this.customModules = [];
            this.preserveWhitespace = false;
            this.trimOnValidation = false;
            this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onEditorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.disabled = false; // used to store initial value before ViewInit

            this.valueGetter = function (quillEditor, editorElement) {
              var html = editorElement.querySelector('.ql-editor').innerHTML;

              if (html === '<p><br></p>' || html === '<div><br></div>') {
                html = null;
              }

              var modelValue = html;
              var format = getFormat(_this3.format, _this3.service.config.format);

              if (format === 'text') {
                modelValue = quillEditor.getText();
              } else if (format === 'object') {
                modelValue = quillEditor.getContents();
              } else if (format === 'json') {
                try {
                  modelValue = JSON.stringify(quillEditor.getContents());
                } catch (e) {
                  modelValue = quillEditor.getText();
                }
              }

              return modelValue;
            };

            this.valueSetter = function (quillEditor, value) {
              var format = getFormat(_this3.format, _this3.service.config.format);

              if (format === 'html') {
                if (_this3.sanitize) {
                  value = _this3.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, value);
                }

                return quillEditor.clipboard.convert(value);
              } else if (format === 'json') {
                try {
                  return JSON.parse(value);
                } catch (e) {
                  return [{
                    insert: value
                  }];
                }
              }

              return value;
            };

            this.selectionChangeHandler = function (range, oldRange, source) {
              var shouldTriggerOnModelTouched = !range && !!_this3.onModelTouched; // only emit changes when there's any listener

              if (!_this3.onBlur.observers.length && !_this3.onFocus.observers.length && !_this3.onSelectionChanged.observers.length && !shouldTriggerOnModelTouched) {
                return;
              }

              _this3.zone.run(function () {
                if (range === null) {
                  _this3.onBlur.emit({
                    editor: _this3.quillEditor,
                    source: source
                  });
                } else if (oldRange === null) {
                  _this3.onFocus.emit({
                    editor: _this3.quillEditor,
                    source: source
                  });
                }

                _this3.onSelectionChanged.emit({
                  editor: _this3.quillEditor,
                  oldRange: oldRange,
                  range: range,
                  source: source
                });

                if (shouldTriggerOnModelTouched) {
                  _this3.onModelTouched();
                }
              });
            };

            this.textChangeHandler = function (delta, oldDelta, source) {
              // only emit changes emitted by user interactions
              var text = _this3.quillEditor.getText();

              var content = _this3.quillEditor.getContents();

              var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

              if (html === '<p><br></p>' || html === '<div><br></div>') {
                html = null;
              }

              var trackChanges = _this3.trackChanges || _this3.service.config.trackChanges;
              var shouldTriggerOnModelChange = (source === 'user' || trackChanges && trackChanges === 'all') && !!_this3.onModelChange; // only emit changes when there's any listener

              if (!_this3.onContentChanged.observers.length && !shouldTriggerOnModelChange) {
                return;
              }

              _this3.zone.run(function () {
                if (shouldTriggerOnModelChange) {
                  _this3.onModelChange(_this3.valueGetter(_this3.quillEditor, _this3.editorElem));
                }

                _this3.onContentChanged.emit({
                  content: content,
                  delta: delta,
                  editor: _this3.quillEditor,
                  html: html,
                  oldDelta: oldDelta,
                  source: source,
                  text: text
                });
              });
            }; // tslint:disable-next-line:max-line-length


            this.editorChangeHandler = function (event, current, old, source) {
              // only emit changes when there's any listener
              if (!_this3.onEditorChanged.observers.length) {
                return;
              } // only emit changes emitted by user interactions


              if (event === 'text-change') {
                var text = _this3.quillEditor.getText();

                var content = _this3.quillEditor.getContents();

                var html = _this3.editorElem.querySelector('.ql-editor').innerHTML;

                if (html === '<p><br></p>' || html === '<div><br></div>') {
                  html = null;
                }

                _this3.zone.run(function () {
                  _this3.onEditorChanged.emit({
                    content: content,
                    delta: current,
                    editor: _this3.quillEditor,
                    event: event,
                    html: html,
                    oldDelta: old,
                    source: source,
                    text: text
                  });
                });
              } else {
                _this3.onEditorChanged.emit({
                  editor: _this3.quillEditor,
                  event: event,
                  oldRange: old,
                  range: current,
                  source: source
                });
              }
            };
          }

          _createClass(QuillEditorBase, [{
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this4 = this;

                var Quill, toolbarElem, modules, placeholder, bounds, debug, readOnly, scrollingContainer, formats, format, contents;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
                          _context2.next = 2;
                          break;
                        }

                        return _context2.abrupt("return");

                      case 2:
                        _context2.next = 4;
                        return this.service.getQuill();

                      case 4:
                        Quill = _context2.sent;
                        this.elementRef.nativeElement.insertAdjacentHTML(this.customToolbarPosition === 'top' ? 'beforeend' : 'afterbegin', this.preserveWhitespace ? '<pre quill-editor-element></pre>' : '<div quill-editor-element></div>');
                        this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
                        toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
                        modules = Object.assign({}, this.modules || this.service.config.modules);

                        if (toolbarElem) {
                          modules.toolbar = toolbarElem;
                        } else if (modules.toolbar === undefined) {
                          modules.toolbar = defaultModules.toolbar;
                        }

                        placeholder = this.placeholder !== undefined ? this.placeholder : this.service.config.placeholder;

                        if (placeholder === undefined) {
                          placeholder = 'Insert text here ...';
                        }

                        if (this.styles) {
                          Object.keys(this.styles).forEach(function (key) {
                            _this4.renderer.setStyle(_this4.editorElem, key, _this4.styles[key]);
                          });
                        }

                        if (this.classes) {
                          this.addClasses(this.classes);
                        }

                        this.customOptions.forEach(function (customOption) {
                          var newCustomOption = Quill["import"](customOption["import"]);
                          newCustomOption.whitelist = customOption.whitelist;
                          Quill.register(newCustomOption, true);
                        });
                        this.customModules.forEach(function (_ref2) {
                          var implementation = _ref2.implementation,
                              path = _ref2.path;
                          Quill.register(path, implementation);
                        });
                        bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;

                        if (!bounds) {
                          bounds = this.service.config.bounds ? this.service.config.bounds : this.doc.body;
                        }

                        debug = this.debug;

                        if (!debug && debug !== false && this.service.config.debug) {
                          debug = this.service.config.debug;
                        }

                        readOnly = this.readOnly;

                        if (!readOnly && this.readOnly !== false) {
                          readOnly = this.service.config.readOnly !== undefined ? this.service.config.readOnly : false;
                        }

                        scrollingContainer = this.scrollingContainer;

                        if (!scrollingContainer && this.scrollingContainer !== null) {
                          scrollingContainer = this.service.config.scrollingContainer === null || this.service.config.scrollingContainer ? this.service.config.scrollingContainer : null;
                        }

                        formats = this.formats;

                        if (!formats && formats === undefined) {
                          formats = this.service.config.formats ? _toConsumableArray(this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                        }

                        this.zone.runOutsideAngular(function () {
                          _this4.quillEditor = new Quill(_this4.editorElem, {
                            bounds: bounds,
                            debug: debug,
                            formats: formats,
                            modules: modules,
                            placeholder: placeholder,
                            readOnly: readOnly,
                            scrollingContainer: scrollingContainer,
                            strict: _this4.strict,
                            theme: _this4.theme || (_this4.service.config.theme ? _this4.service.config.theme : 'snow')
                          });
                        });

                        if (this.content) {
                          format = getFormat(this.format, this.service.config.format);

                          if (format === 'object') {
                            this.quillEditor.setContents(this.content, 'silent');
                          } else if (format === 'text') {
                            this.quillEditor.setText(this.content, 'silent');
                          } else if (format === 'json') {
                            try {
                              this.quillEditor.setContents(JSON.parse(this.content), 'silent');
                            } catch (e) {
                              this.quillEditor.setText(this.content, 'silent');
                            }
                          } else {
                            if (this.sanitize) {
                              this.content = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, this.content);
                            }

                            contents = this.quillEditor.clipboard.convert(this.content);
                            this.quillEditor.setContents(contents, 'silent');
                          }

                          this.quillEditor.getModule('history').clear();
                        } // initialize disabled status based on this.disabled as default value


                        this.setDisabledState(); // triggered if selection or text changed

                        this.quillEditor.on('editor-change', this.editorChangeHandler); // mark model as touched if editor lost focus

                        this.quillEditor.on('selection-change', this.selectionChangeHandler); // update model if text changes

                        this.quillEditor.on('text-change', this.textChangeHandler); // trigger created in a timeout to avoid changed models after checked
                        // if you are using the editor api in created output to change the editor content

                        setTimeout(function () {
                          if (_this4.onValidatorChanged) {
                            _this4.onValidatorChanged();
                          }

                          _this4.onEditorCreated.emit(_this4.quillEditor);
                        });

                      case 33:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              if (this.quillEditor) {
                this.quillEditor.off('selection-change', this.selectionChangeHandler);
                this.quillEditor.off('text-change', this.textChangeHandler);
                this.quillEditor.off('editor-change', this.editorChangeHandler);
              }
            }
          }, {
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              var _this5 = this;

              if (!this.quillEditor) {
                return;
              } // tslint:disable:no-string-literal


              if (changes['readOnly']) {
                this.quillEditor.enable(!changes['readOnly'].currentValue);
              }

              if (changes['placeholder']) {
                this.quillEditor.root.dataset.placeholder = changes['placeholder'].currentValue;
              }

              if (changes['styles']) {
                var currentStyling = changes['styles'].currentValue;
                var previousStyling = changes['styles'].previousValue;

                if (previousStyling) {
                  Object.keys(previousStyling).forEach(function (key) {
                    _this5.renderer.removeStyle(_this5.editorElem, key);
                  });
                }

                if (currentStyling) {
                  Object.keys(currentStyling).forEach(function (key) {
                    _this5.renderer.setStyle(_this5.editorElem, key, _this5.styles[key]);
                  });
                }
              }

              if (changes['classes']) {
                var currentClasses = changes['classes'].currentValue;
                var previousClasses = changes['classes'].previousValue;

                if (previousClasses) {
                  this.removeClasses(previousClasses);
                }

                if (currentClasses) {
                  this.addClasses(currentClasses);
                }
              } // tslint:enable:no-string-literal

            }
          }, {
            key: "addClasses",
            value: function addClasses(classList) {
              var _this6 = this;

              QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
                _this6.renderer.addClass(_this6.editorElem, c);
              });
            }
          }, {
            key: "removeClasses",
            value: function removeClasses(classList) {
              var _this7 = this;

              QuillEditorBase.normalizeClassNames(classList).forEach(function (c) {
                _this7.renderer.removeClass(_this7.editorElem, c);
              });
            }
          }, {
            key: "writeValue",
            value: function writeValue(currentValue) {
              this.content = currentValue;
              var format = getFormat(this.format, this.service.config.format);

              if (this.quillEditor) {
                if (currentValue) {
                  if (format === 'text') {
                    this.quillEditor.setText(currentValue);
                  } else {
                    this.quillEditor.setContents(this.valueSetter(this.quillEditor, this.content));
                  }

                  return;
                }

                this.quillEditor.setText('');
              }
            }
          }, {
            key: "setDisabledState",
            value: function setDisabledState() {
              var isDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.disabled;
              // store initial value to set appropriate disabled status after ViewInit
              this.disabled = isDisabled;

              if (this.quillEditor) {
                if (isDisabled) {
                  this.quillEditor.disable();
                  this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
                } else {
                  if (!this.readOnly) {
                    this.quillEditor.enable();
                  }

                  this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
                }
              }
            }
          }, {
            key: "registerOnChange",
            value: function registerOnChange(fn) {
              this.onModelChange = fn;
            }
          }, {
            key: "registerOnTouched",
            value: function registerOnTouched(fn) {
              this.onModelTouched = fn;
            }
          }, {
            key: "registerOnValidatorChange",
            value: function registerOnValidatorChange(fn) {
              this.onValidatorChanged = fn;
            }
          }, {
            key: "validate",
            value: function validate() {
              if (!this.quillEditor) {
                return null;
              }

              var err = {};
              var valid = true;
              var text = this.quillEditor.getText(); // trim text if wanted + handle special case that an empty editor contains a new line

              var textLength = this.trimOnValidation ? text.trim().length : text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1;

              if (this.minLength && textLength && textLength < this.minLength) {
                err.minLengthError = {
                  given: textLength,
                  minLength: this.minLength
                };
                valid = false;
              }

              if (this.maxLength && textLength > this.maxLength) {
                err.maxLengthError = {
                  given: textLength,
                  maxLength: this.maxLength
                };
                valid = false;
              }

              if (this.required && !textLength) {
                err.requiredError = {
                  empty: true
                };
                valid = false;
              }

              return valid ? null : err;
            }
          }], [{
            key: "normalizeClassNames",
            value: function normalizeClassNames(classes) {
              var classList = classes.trim().split(' ');
              return classList.reduce(function (prev, cur) {
                var trimmed = cur.trim();

                if (trimmed) {
                  prev.push(trimmed);
                }

                return prev;
              }, []);
            }
          }]);

          return QuillEditorBase;
        }();

        QuillEditorBase.ɵfac = function QuillEditorBase_Factory(t) {
          return new (t || QuillEditorBase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService));
        };

        QuillEditorBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: QuillEditorBase,
          inputs: {
            required: "required",
            customToolbarPosition: "customToolbarPosition",
            sanitize: "sanitize",
            styles: "styles",
            strict: "strict",
            customOptions: "customOptions",
            customModules: "customModules",
            preserveWhitespace: "preserveWhitespace",
            trimOnValidation: "trimOnValidation",
            valueGetter: "valueGetter",
            valueSetter: "valueSetter",
            format: "format",
            theme: "theme",
            modules: "modules",
            debug: "debug",
            readOnly: "readOnly",
            placeholder: "placeholder",
            maxLength: "maxLength",
            minLength: "minLength",
            formats: "formats",
            scrollingContainer: "scrollingContainer",
            bounds: "bounds",
            trackChanges: "trackChanges",
            classes: "classes"
          },
          outputs: {
            onEditorCreated: "onEditorCreated",
            onEditorChanged: "onEditorChanged",
            onContentChanged: "onContentChanged",
            onSelectionChanged: "onSelectionChanged",
            onFocus: "onFocus",
            onBlur: "onBlur"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
        });
        return QuillEditorBase;
      }();

      var QuillEditorComponent = /*@__PURE__*/function () {
        var QuillEditorComponent = /*#__PURE__*/function (_QuillEditorBase) {
          _inherits(QuillEditorComponent, _QuillEditorBase);

          var _super = _createSuper(QuillEditorComponent);

          function QuillEditorComponent(elementRef, domSanitizer, doc, platformId, renderer, zone, service) {
            _classCallCheck(this, QuillEditorComponent);

            return _super.call(this, elementRef, domSanitizer, doc, platformId, renderer, zone, service);
          }

          return QuillEditorComponent;
        }(QuillEditorBase);

        QuillEditorComponent.ɵfac = function QuillEditorComponent_Factory(t) {
          return new (t || QuillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService));
        };

        QuillEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: QuillEditorComponent,
          selectors: [["quill-editor"]],
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
            multi: true,
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return QuillEditorComponent;
            })
          }, {
            multi: true,
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return QuillEditorComponent;
            })
          }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
          ngContentSelectors: _c1,
          decls: 1,
          vars: 0,
          template: function QuillEditorComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
            }
          },
          encapsulation: 2
        });
        return QuillEditorComponent;
      }();

      var QuillViewHTMLComponent = /*@__PURE__*/function () {
        var QuillViewHTMLComponent = /*#__PURE__*/function () {
          function QuillViewHTMLComponent(sanitizer, service) {
            _classCallCheck(this, QuillViewHTMLComponent);

            this.sanitizer = sanitizer;
            this.service = service;
            this.innerHTML = '';
            this.themeClass = 'ql-snow';
            this.content = '';
          }

          _createClass(QuillViewHTMLComponent, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              if (changes.theme) {
                var theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : 'snow');
                this.themeClass = "ql-".concat(theme, " ngx-quill-view-html");
              } else if (!this.theme) {
                var _theme = this.service.config.theme ? this.service.config.theme : 'snow';

                this.themeClass = "ql-".concat(_theme, " ngx-quill-view-html");
              }

              if (changes.content) {
                this.innerHTML = this.sanitizer.bypassSecurityTrustHtml(changes.content.currentValue);
              }
            }
          }]);

          return QuillViewHTMLComponent;
        }();

        QuillViewHTMLComponent.ɵfac = function QuillViewHTMLComponent_Factory(t) {
          return new (t || QuillViewHTMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService));
        };

        QuillViewHTMLComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: QuillViewHTMLComponent,
          selectors: [["quill-view-html"]],
          inputs: {
            content: "content",
            theme: "theme"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
          decls: 2,
          vars: 2,
          consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
          template: function QuillViewHTMLComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.themeClass);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"]],
          styles: ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"],
          encapsulation: 2
        });
        return QuillViewHTMLComponent;
      }();

      var QuillViewComponent = /*@__PURE__*/function () {
        var QuillViewComponent = /*#__PURE__*/function () {
          function QuillViewComponent(elementRef, renderer, zone, service, domSanitizer, platformId) {
            var _this8 = this;

            _classCallCheck(this, QuillViewComponent);

            this.elementRef = elementRef;
            this.renderer = renderer;
            this.zone = zone;
            this.service = service;
            this.domSanitizer = domSanitizer;
            this.platformId = platformId;
            this.sanitize = false;
            this.strict = true;
            this.customModules = [];
            this.customOptions = [];
            this.preserveWhitespace = false;

            this.valueSetter = function (quillEditor, value) {
              var format = getFormat(_this8.format, _this8.service.config.format);
              var content = value;

              if (format === 'text') {
                quillEditor.setText(content);
              } else {
                if (format === 'html') {
                  if (_this8.sanitize) {
                    value = _this8.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, value);
                  }

                  content = quillEditor.clipboard.convert(value);
                } else if (format === 'json') {
                  try {
                    content = JSON.parse(value);
                  } catch (e) {
                    content = [{
                      insert: value
                    }];
                  }
                }

                quillEditor.setContents(content);
              }
            };
          }

          _createClass(QuillViewComponent, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              if (!this.quillEditor) {
                return;
              }

              if (changes.content) {
                this.valueSetter(this.quillEditor, changes.content.currentValue);
              }
            }
          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this9 = this;

                var Quill, modules, debug, formats, theme;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
                          _context3.next = 2;
                          break;
                        }

                        return _context3.abrupt("return");

                      case 2:
                        _context3.next = 4;
                        return this.service.getQuill();

                      case 4:
                        Quill = _context3.sent;
                        modules = Object.assign({}, this.modules || this.service.config.modules);
                        modules.toolbar = false;
                        this.customOptions.forEach(function (customOption) {
                          var newCustomOption = Quill["import"](customOption["import"]);
                          newCustomOption.whitelist = customOption.whitelist;
                          Quill.register(newCustomOption, true);
                        });
                        this.customModules.forEach(function (_ref3) {
                          var implementation = _ref3.implementation,
                              path = _ref3.path;
                          Quill.register(path, implementation);
                        });
                        debug = this.debug;

                        if (!debug && debug !== false && this.service.config.debug) {
                          debug = this.service.config.debug;
                        }

                        formats = this.formats;

                        if (!formats && formats === undefined) {
                          formats = this.service.config.formats ? Object.assign({}, this.service.config.formats) : this.service.config.formats === null ? null : undefined;
                        }

                        theme = this.theme || (this.service.config.theme ? this.service.config.theme : 'snow');
                        this.elementRef.nativeElement.insertAdjacentHTML('afterbegin', this.preserveWhitespace ? '<pre quill-view-element></pre>' : '<div quill-view-element></div>');
                        this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
                        this.zone.runOutsideAngular(function () {
                          _this9.quillEditor = new Quill(_this9.editorElem, {
                            debug: debug,
                            formats: formats,
                            modules: modules,
                            readOnly: true,
                            strict: _this9.strict,
                            theme: theme
                          });
                        });
                        this.renderer.addClass(this.editorElem, 'ngx-quill-view');

                        if (this.content) {
                          this.valueSetter(this.quillEditor, this.content);
                        }

                      case 19:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }
          }]);

          return QuillViewComponent;
        }();

        QuillViewComponent.ɵfac = function QuillViewComponent_Factory(t) {
          return new (t || QuillViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
        };

        QuillViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: QuillViewComponent,
          selectors: [["quill-view"]],
          inputs: {
            sanitize: "sanitize",
            strict: "strict",
            customModules: "customModules",
            customOptions: "customOptions",
            preserveWhitespace: "preserveWhitespace",
            format: "format",
            theme: "theme",
            modules: "modules",
            debug: "debug",
            formats: "formats",
            content: "content"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
          decls: 0,
          vars: 0,
          template: function QuillViewComponent_Template(rf, ctx) {},
          styles: ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"],
          encapsulation: 2
        });
        return QuillViewComponent;
      }();

      var QuillModule = /*@__PURE__*/function () {
        var QuillModule = /*#__PURE__*/function () {
          function QuillModule() {
            _classCallCheck(this, QuillModule);
          }

          _createClass(QuillModule, null, [{
            key: "forRoot",
            value: function forRoot(config) {
              return {
                ngModule: QuillModule,
                providers: [{
                  provide: QUILL_CONFIG_TOKEN,
                  useValue: config
                }]
              };
            }
          }]);

          return QuillModule;
        }();

        QuillModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: QuillModule
        });
        QuillModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function QuillModule_Factory(t) {
            return new (t || QuillModule)();
          },
          providers: [QuillService],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
        });
        return QuillModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QuillModule, {
          declarations: function declarations() {
            return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]];
          },
          exports: function exports() {
            return [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent];
          }
        });
      })();
      /*
       * Public API Surface of ngx-quill
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-quill.js.map

      /***/

    },

    /***/
    "g/vz":
    /*!********************************************************************************!*\
      !*** ./src/app/blogs/create-blogs/create-blogs.component.scss.shim.ngstyle.js ***!
      \********************************************************************************/

    /*! exports provided: styles */

    /***/
    function gVz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".createBlog[_ngcontent-%COMP%] {\n  padding-top: 60px;\n}\n.createBlog[_ngcontent-%COMP%]   .backPrint[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 100 !important;\n  font-size: 16px !important;\n  color: #111111;\n}\n.createBlog[_ngcontent-%COMP%]   .titlePrint[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 23px;\n  color: #373737;\n}\n.createBlog[_ngcontent-%COMP%]   .uploadButton[_ngcontent-%COMP%] {\n  width: 37%;\n  float: right;\n  margin-top: -60px;\n  margin-right: 10px;\n  z-index: 10;\n  position: relative;\n}\n.createBlog[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n@media (max-width: 900px) {\n  .createBlog[_ngcontent-%COMP%] {\n    padding: 20px !important;\n  }\n  .createBlog[_ngcontent-%COMP%]   .responsive-img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .createBlog[_ngcontent-%COMP%]   .uploadButton[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}"];
      /***/
    },

    /***/
    "lnN7":
    /*!*******************************************************!*\
      !*** ./node_modules/ngx-quill/ngx-quill.ngfactory.js ***!
      \*******************************************************/

    /*! exports provided: QuillModuleNgFactory, RenderType_QuillEditorComponent, View_QuillEditorComponent_0, View_QuillEditorComponent_Host_0, QuillEditorComponentNgFactory, RenderType_QuillViewComponent, View_QuillViewComponent_0, View_QuillViewComponent_Host_0, QuillViewComponentNgFactory, RenderType_QuillViewHTMLComponent, View_QuillViewHTMLComponent_0, View_QuillViewHTMLComponent_Host_0, QuillViewHTMLComponentNgFactory */

    /***/
    function lnN7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillModuleNgFactory", function () {
        return QuillModuleNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_QuillEditorComponent", function () {
        return RenderType_QuillEditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_QuillEditorComponent_0", function () {
        return View_QuillEditorComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_QuillEditorComponent_Host_0", function () {
        return View_QuillEditorComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillEditorComponentNgFactory", function () {
        return QuillEditorComponentNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_QuillViewComponent", function () {
        return RenderType_QuillViewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_QuillViewComponent_0", function () {
        return View_QuillViewComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_QuillViewComponent_Host_0", function () {
        return View_QuillViewComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillViewComponentNgFactory", function () {
        return QuillViewComponentNgFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_QuillViewHTMLComponent", function () {
        return RenderType_QuillViewHTMLComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_QuillViewHTMLComponent_0", function () {
        return View_QuillViewHTMLComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_QuillViewHTMLComponent_Host_0", function () {
        return View_QuillViewHTMLComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuillViewHTMLComponentNgFactory", function () {
        return QuillViewHTMLComponentNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-quill */
      "alHs");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var QuillModuleNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillService"], ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillService"], [ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QUILL_CONFIG_TOKEN"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillModule"], [])]);
      });

      var styles_QuillEditorComponent = [];

      var RenderType_QuillEditorComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_QuillEditorComponent,
        data: {}
      });

      function View_QuillEditorComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0)], null, null);
      }

      function View_QuillEditorComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "quill-editor", [], null, null, null, View_QuillEditorComponent_0, RenderType_QuillEditorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) {
          return [p0_0];
        }, [ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4898816, null, 0, ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillEditorComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillService"]], null, null)], null, null);
      }

      var QuillEditorComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("quill-editor", ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillEditorComponent"], View_QuillEditorComponent_Host_0, {
        format: "format",
        theme: "theme",
        modules: "modules",
        debug: "debug",
        readOnly: "readOnly",
        placeholder: "placeholder",
        maxLength: "maxLength",
        minLength: "minLength",
        required: "required",
        formats: "formats",
        customToolbarPosition: "customToolbarPosition",
        sanitize: "sanitize",
        styles: "styles",
        strict: "strict",
        scrollingContainer: "scrollingContainer",
        bounds: "bounds",
        customOptions: "customOptions",
        customModules: "customModules",
        trackChanges: "trackChanges",
        preserveWhitespace: "preserveWhitespace",
        classes: "classes",
        trimOnValidation: "trimOnValidation",
        valueGetter: "valueGetter",
        valueSetter: "valueSetter"
      }, {
        onEditorCreated: "onEditorCreated",
        onEditorChanged: "onEditorChanged",
        onContentChanged: "onContentChanged",
        onSelectionChanged: "onSelectionChanged",
        onFocus: "onFocus",
        onBlur: "onBlur"
      }, ["[quill-editor-toolbar]"]);

      var styles_QuillViewComponent = ["\n.ql-container.ngx-quill-view {\n  border: 0;\n}\n"];

      var RenderType_QuillViewComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_QuillViewComponent,
        data: {}
      });

      function View_QuillViewComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [], null, null);
      }

      function View_QuillViewComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "quill-view", [], null, null, null, View_QuillViewComponent_0, RenderType_QuillViewComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4767744, null, 0, ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillViewComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]], null, null)], null, null);
      }

      var QuillViewComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("quill-view", ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillViewComponent"], View_QuillViewComponent_Host_0, {
        format: "format",
        theme: "theme",
        modules: "modules",
        debug: "debug",
        formats: "formats",
        sanitize: "sanitize",
        strict: "strict",
        content: "content",
        customModules: "customModules",
        customOptions: "customOptions",
        preserveWhitespace: "preserveWhitespace"
      }, {}, []);

      var styles_QuillViewHTMLComponent = ["\n.ql-container.ngx-quill-view-html {\n  border: 0;\n}\n"];

      var RenderType_QuillViewHTMLComponent = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
        encapsulation: 2,
        styles: styles_QuillViewHTMLComponent,
        data: {}
      });

      function View_QuillViewHTMLComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "ql-container"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], {
          klass: [0, "klass"],
          ngClass: [1, "ngClass"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "div", [["class", "ql-editor"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = "ql-container";
          var currVal_1 = _co.themeClass;

          _ck(_v, 1, 0, currVal_0, currVal_1);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = _co.innerHTML;

          _ck(_v, 2, 0, currVal_2);
        });
      }

      function View_QuillViewHTMLComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "quill-view-html", [], null, null, null, View_QuillViewHTMLComponent_0, RenderType_QuillViewHTMLComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 573440, null, 0, ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillViewHTMLComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillService"]], null, null)], null, null);
      }

      var QuillViewHTMLComponentNgFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("quill-view-html", ngx_quill__WEBPACK_IMPORTED_MODULE_1__["QuillViewHTMLComponent"], View_QuillViewHTMLComponent_Host_0, {
        content: "content",
        theme: "theme"
      }, {}, []);
      /***/

    },

    /***/
    "qANX":
    /*!******************************************!*\
      !*** ./src/app/blogs/blogs.component.ts ***!
      \******************************************/

    /*! exports provided: BlogsComponent */

    /***/
    function qANX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogsComponent", function () {
        return BlogsComponent;
      });
      /* harmony import */


      var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/internal/Subscription */
      "zB/H");
      /* harmony import */


      var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_services */
      "J9tS");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

      var BlogsComponent = /*#__PURE__*/function () {
        function BlogsComponent(blogService) {
          var _this10 = this;

          _classCallCheck(this, BlogsComponent);

          this.blogService = blogService;
          this.paging = {
            page: 0,
            size: 10,
            total: 0
          };
          this.blogs = [];
          this.blogSubscribe = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
          this.industries = [];
          this.search = "";
          this.featuredBlog = [];
          this.experts = [];
          this.blogService.getIndustries().subscribe(function (res) {
            _this10.industries = res;
          });
          this.blogService.getExperts().subscribe(function (res) {
            _this10.experts = res.items;
          });
          this.getBlogs();
          var html = document.querySelector("#html");
          html.style.scrollBehavior = "auto";
        }

        _createClass(BlogsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.blogSubscribe.unsubscribe();
          }
        }, {
          key: "getBlogs",
          value: function getBlogs() {
            var _this11 = this;

            // empty array if first page
            if (this.paging.page === 0) {
              this.blogs = [];
            }

            this.blogSubscribe = this.blogService.getAll(this.paging.page, this.paging.size, this.search ? this.search : "", this.selectedIndustry ? this.selectedIndustry : "").subscribe(function (res) {
              // ignore blueprintOfTheMonth if im searching
              if (!_this11.search) {
                _this11.featuredBlog = res.items.filter(function (blog) {
                  return blog.featured === true;
                });
              }

              _this11.blogs = res.items;
              _this11.paging.page = res.page;
              _this11.paging.size = res.size;
              _this11.paging.total = res.total;
            });
          }
        }, {
          key: "onEnter",
          value: function onEnter() {
            this.paging.page = 0;
            this.getBlogs();
          }
        }, {
          key: "setIndustry",
          value: function setIndustry(id) {
            this.selectedIndustry = id;
            this.onEnter();
          }
        }, {
          key: "getTime",
          value: function getTime(time) {
            return moment__WEBPACK_IMPORTED_MODULE_2__(time).fromNow();
          }
        }, {
          key: "getExpert",
          value: function getExpert(id) {
            return this.experts.filter(function (expert) {
              return expert.id === id;
            })[0];
          }
        }]);

        return BlogsComponent;
      }();
      /***/

    },

    /***/
    "qoQ6":
    /*!************************************************************!*\
      !*** ./src/app/blogs/single-blog/single-blog.component.ts ***!
      \************************************************************/

    /*! exports provided: SingleBlogComponent */

    /***/
    function qoQ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleBlogComponent", function () {
        return SingleBlogComponent;
      });
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../_services */
      "J9tS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

      var SingleBlogComponent = /*#__PURE__*/function () {
        function SingleBlogComponent(blogService, route) {
          var _this12 = this;

          _classCallCheck(this, SingleBlogComponent);

          this.blogService = blogService;
          this.route = route;
          this.experts = [];
          this.id = this.route.snapshot.params.id;
          this.blogService.getExperts().subscribe(function (res) {
            _this12.experts = res.items;
          });
          this.blogSubscribe = this.blogService.getById(this.id).subscribe(function (res) {
            _this12.blog = res;
          });
        }

        _createClass(SingleBlogComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.blogSubscribe.unsubscribe();
          }
        }, {
          key: "getTime",
          value: function getTime(time) {
            return moment__WEBPACK_IMPORTED_MODULE_2__(time).fromNow();
          }
        }, {
          key: "getExpert",
          value: function getExpert(id) {
            return this.experts.filter(function (expert) {
              return expert.id === id;
            })[0];
          }
        }]);

        return SingleBlogComponent;
      }();
      /***/

    },

    /***/
    "tkpy":
    /*!**********************************!*\
      !*** ./src/app/_guards/index.ts ***!
      \**********************************/

    /*! exports provided: AuthGuard */

    /***/
    function tkpy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      "PSoG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });
      /***/

    },

    /***/
    "y+zx":
    /*!**************************************************************!*\
      !*** ./src/app/blogs/create-blogs/create-blogs.component.ts ***!
      \**************************************************************/

    /*! exports provided: CreateBlogsComponent */

    /***/
    function yZx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateBlogsComponent", function () {
        return CreateBlogsComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services */
      "J9tS");
      /* harmony import */


      var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_services/upload.service */
      "m5Gf");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");

      var CreateBlogsComponent = /*#__PURE__*/function () {
        function CreateBlogsComponent(uploadService, formBuilder, blogService, router, toastr) {
          var _this13 = this;

          _classCallCheck(this, CreateBlogsComponent);

          this.uploadService = uploadService;
          this.formBuilder = formBuilder;
          this.blogService = blogService;
          this.router = router;
          this.toastr = toastr;
          this.coverPhotoUrl = 'assets/images/noImage.png';
          this.industries = [];
          this.blogForm = this.formBuilder.group({
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            content: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            tags: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            industryId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            photoUrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
          });
          this.blogService.getIndustries().subscribe(function (res) {
            _this13.industries = res;
          });
        }

        _createClass(CreateBlogsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "uploadFile",
          value: function uploadFile(event) {
            var _this14 = this;

            if (event.target.files.length === 0) {
              return;
            }

            var file = event.target.files[0];
            this.uploadService.getSignedUrl(file, "image").subscribe(function (res) {
              _this14.uploadService.uploadToS3(res, file).subscribe(function (response) {
                _this14.toastr.success('Uploaded successfully');

                _this14.coverPhotoUrl = res.filename;
              }, function (error) {
                _this14.toastr.error(error.message);
              });
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(e, submitted) {
            var _this15 = this;

            e.preventDefault();

            if (this.blogForm.invalid) {
              return;
            }

            var payload = {
              coverPhotoUrl: this.coverPhotoUrl,
              title: this.blogForm.controls.title.value,
              content: this.blogForm.controls.content.value,
              tags: [this.blogForm.controls.tags.value],
              submitted: submitted,
              approved: true,
              industryId: this.blogForm.controls.industryId.value,
              featured: false
            };
            this.blogService.create(payload).subscribe(function (blog) {
              _this15.toastr.success('Uploaded successfully');

              if (blog) {
                _this15.router.navigate(["blog"]);
              }
            }, function (error) {
              _this15.toastr.error("An error has happened");

              console.log(error);
            });
          }
        }]);

        return CreateBlogsComponent;
      }();
      /***/

    }
  }]);
})();
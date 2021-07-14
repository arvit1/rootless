(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3], {
    /***/
    "UPO+":
    /*!**********************************************************************************!*\
      !*** ./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js ***!
      \**********************************************************************************/

    /*! exports provided: MultiSelectComponent, NgMultiSelectDropDownModule, ɵa, ɵb, ɵc */

    /***/
    function UPO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function () {
        return MultiSelectComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgMultiSelectDropDownModule", function () {
        return NgMultiSelectDropDownModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return DROPDOWN_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return ListFilterPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return ClickOutsideDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "8lb9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function MultiSelectComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0._placeholder);
        }
      }

      function MultiSelectComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_span_4_Template_a_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var item_r7 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.onItemClick($event, item_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;
          var k_r8 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", k_r8 > ctx_r1._settings.itemsShowLimit - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7.text, " ");
        }
      }

      function MultiSelectComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r2.itemShowRemaining(), "");
        }
      }

      function MultiSelectComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_li_10_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r11.toggleSelectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r3.isAllItemsSelected())("disabled", ctx_r3.disabled || ctx_r3.isLimitSelectionReached());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx_r3.isAllItemsSelected() ? ctx_r3._settings.selectAllText : ctx_r3._settings.unSelectAllText);
        }
      }

      function MultiSelectComponent_li_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.filter.text = $event;
          })("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.onFilterTextChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", ctx_r4.disabled)("placeholder", ctx_r4._settings.searchPlaceholderText)("ngModel", ctx_r4.filter.text);
        }
      }

      function MultiSelectComponent_li_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_li_13_Template_li_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var item_r16 = ctx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.onItemClick($event, item_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r16 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r5.isSelected(item_r16))("disabled", ctx_r5.disabled || ctx_r5.isLimitSelectionReached() && !ctx_r5.isSelected(item_r16) || item_r16.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", item_r16.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16.text);
        }
      }

      function MultiSelectComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6._settings.noDataAvailablePlaceholderText);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "dropdown-multiselect--active": a0
        };
      };

      var ListItem = function ListItem(source) {
        _classCallCheck(this, ListItem);

        if (typeof source === 'string' || typeof source === 'number') {
          this.id = this.text = source;
          this.isDisabled = false;
        }

        if (typeof source === 'object') {
          this.id = source.id;
          this.text = source.text;
          this.isDisabled = source.isDisabled;
        }
      };

      var ListFilterPipe = /*@__PURE__*/function () {
        var ListFilterPipe = /*#__PURE__*/function () {
          function ListFilterPipe() {
            _classCallCheck(this, ListFilterPipe);
          }

          _createClass(ListFilterPipe, [{
            key: "transform",
            value: function transform(items, filter) {
              var _this = this;

              if (!items || !filter) {
                return items;
              }

              return items.filter(function (item) {
                return _this.applyFilter(item, filter);
              });
            }
          }, {
            key: "applyFilter",
            value: function applyFilter(item, filter) {
              if (typeof item.text === 'string' && typeof filter.text === 'string') {
                return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
              } else {
                return !(filter.text && item.text && item.text.toString().toLowerCase().indexOf(filter.text.toString().toLowerCase()) === -1);
              }
            }
          }]);

          return ListFilterPipe;
        }();

        ListFilterPipe.ɵfac = function ListFilterPipe_Factory(t) {
          return new (t || ListFilterPipe)();
        };

        ListFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
          name: "multiSelectFilter",
          type: ListFilterPipe,
          pure: false
        });
        return ListFilterPipe;
      }();

      var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MultiSelectComponent;
        }),
        multi: true
      };

      var noop = function noop() {};

      var ɵ0 = noop;

      var MultiSelectComponent = /*@__PURE__*/function () {
        var MultiSelectComponent = /*#__PURE__*/function () {
          function MultiSelectComponent(listFilterPipe) {
            _classCallCheck(this, MultiSelectComponent);

            this.listFilterPipe = listFilterPipe;
            this._data = [];
            this.selectedItems = [];
            this.isDropdownOpen = true;
            this._placeholder = "Select";
            this._sourceDataType = null; // to keep note of the source data type. could be array of string/number/object

            this._sourceDataFields = []; // store source data fields names

            this.filter = new ListItem(this.data);
            this.defaultSettings = {
              singleSelection: false,
              idField: "id",
              textField: "text",
              disabledField: "isDisabled",
              enableCheckAll: true,
              selectAllText: "Select All",
              unSelectAllText: "UnSelect All",
              allowSearchFilter: false,
              limitSelection: -1,
              clearSearchFilter: true,
              maxHeight: 197,
              itemsShowLimit: 999999999999,
              searchPlaceholderText: "Search",
              noDataAvailablePlaceholderText: "No data available",
              closeDropDownOnSelection: false,
              showSelectedItemsAtTop: false,
              defaultOpen: false,
              allowRemoteDataSearch: false
            };
            this.disabled = false;
            this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onDropDownClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
          }

          _createClass(MultiSelectComponent, [{
            key: "onFilterTextChange",
            value: function onFilterTextChange($event) {
              this.onFilterChange.emit($event);
            }
          }, {
            key: "onItemClick",
            value: function onItemClick($event, item) {
              if (this.disabled || item.isDisabled) {
                return false;
              }

              var found = this.isSelected(item);
              var allowAdd = this._settings.limitSelection === -1 || this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection;

              if (!found) {
                if (allowAdd) {
                  this.addSelected(item);
                }
              } else {
                this.removeSelected(item);
              }

              if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
                this.closeDropdown();
              }
            }
          }, {
            key: "writeValue",
            value: function writeValue(value) {
              var _this2 = this;

              if (value !== undefined && value !== null && value.length > 0) {
                if (this._settings.singleSelection) {
                  try {
                    if (value.length >= 1) {
                      var firstItem = value[0];
                      this.selectedItems = [typeof firstItem === "string" || typeof firstItem === "number" ? new ListItem(firstItem) : new ListItem({
                        id: firstItem[this._settings.idField],
                        text: firstItem[this._settings.textField],
                        isDisabled: firstItem[this._settings.disabledField]
                      })];
                    }
                  } catch (e) {// console.error(e.body.msg);
                  }
                } else {
                  var _data = value.map(function (item) {
                    return typeof item === "string" || typeof item === "number" ? new ListItem(item) : new ListItem({
                      id: item[_this2._settings.idField],
                      text: item[_this2._settings.textField],
                      isDisabled: item[_this2._settings.disabledField]
                    });
                  });

                  if (this._settings.limitSelection > 0) {
                    this.selectedItems = _data.splice(0, this._settings.limitSelection);
                  } else {
                    this.selectedItems = _data;
                  }
                }
              } else {
                this.selectedItems = [];
              }

              this.onChangeCallback(value);
            } // From ControlValueAccessor interface

          }, {
            key: "registerOnChange",
            value: function registerOnChange(fn) {
              this.onChangeCallback = fn;
            } // From ControlValueAccessor interface

          }, {
            key: "registerOnTouched",
            value: function registerOnTouched(fn) {
              this.onTouchedCallback = fn;
            } // Set touched on blur

          }, {
            key: "onTouched",
            value: function onTouched() {
              this.closeDropdown();
              this.onTouchedCallback();
            }
          }, {
            key: "trackByFn",
            value: function trackByFn(index, item) {
              return item.id;
            }
          }, {
            key: "isSelected",
            value: function isSelected(clickedItem) {
              var found = false;
              this.selectedItems.forEach(function (item) {
                if (clickedItem.id === item.id) {
                  found = true;
                }
              });
              return found;
            }
          }, {
            key: "isLimitSelectionReached",
            value: function isLimitSelectionReached() {
              return this._settings.limitSelection === this.selectedItems.length;
            }
          }, {
            key: "isAllItemsSelected",
            value: function isAllItemsSelected() {
              // get disabld item count
              var filteredItems = this.listFilterPipe.transform(this._data, this.filter);
              var itemDisabledCount = filteredItems.filter(function (item) {
                return item.isDisabled;
              }).length; // take disabled items into consideration when checking

              if ((!this.data || this.data.length === 0) && this._settings.allowRemoteDataSearch) {
                return false;
              }

              return filteredItems.length === this.selectedItems.length + itemDisabledCount;
            }
          }, {
            key: "showButton",
            value: function showButton() {
              if (!this._settings.singleSelection) {
                if (this._settings.limitSelection > 0) {
                  return false;
                } // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;


                return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
              } else {
                // should be disabled in single selection mode
                return false;
              }
            }
          }, {
            key: "itemShowRemaining",
            value: function itemShowRemaining() {
              return this.selectedItems.length - this._settings.itemsShowLimit;
            }
          }, {
            key: "addSelected",
            value: function addSelected(item) {
              if (this._settings.singleSelection) {
                this.selectedItems = [];
                this.selectedItems.push(item);
              } else {
                this.selectedItems.push(item);
              }

              this.onChangeCallback(this.emittedValue(this.selectedItems));
              this.onSelect.emit(this.emittedValue(item));
            }
          }, {
            key: "removeSelected",
            value: function removeSelected(itemSel) {
              var _this3 = this;

              this.selectedItems.forEach(function (item) {
                if (itemSel.id === item.id) {
                  _this3.selectedItems.splice(_this3.selectedItems.indexOf(item), 1);
                }
              });
              this.onChangeCallback(this.emittedValue(this.selectedItems));
              this.onDeSelect.emit(this.emittedValue(itemSel));
            }
          }, {
            key: "emittedValue",
            value: function emittedValue(val) {
              var _this4 = this;

              var selected = [];

              if (Array.isArray(val)) {
                val.map(function (item) {
                  selected.push(_this4.objectify(item));
                });
              } else {
                if (val) {
                  return this.objectify(val);
                }
              }

              return selected;
            }
          }, {
            key: "objectify",
            value: function objectify(val) {
              if (this._sourceDataType === 'object') {
                var obj = {};
                obj[this._settings.idField] = val.id;
                obj[this._settings.textField] = val.text;

                if (this._sourceDataFields.includes(this._settings.disabledField)) {
                  obj[this._settings.disabledField] = val.isDisabled;
                }

                return obj;
              }

              if (this._sourceDataType === 'number') {
                return Number(val.id);
              } else {
                return val.text;
              }
            }
          }, {
            key: "toggleDropdown",
            value: function toggleDropdown(evt) {
              evt.preventDefault();

              if (this.disabled && this._settings.singleSelection) {
                return;
              }

              this._settings.defaultOpen = !this._settings.defaultOpen;

              if (!this._settings.defaultOpen) {
                this.onDropDownClose.emit();
              }
            }
          }, {
            key: "closeDropdown",
            value: function closeDropdown() {
              this._settings.defaultOpen = false; // clear search text

              if (this._settings.clearSearchFilter) {
                this.filter.text = "";
              }

              this.onDropDownClose.emit();
            }
          }, {
            key: "toggleSelectAll",
            value: function toggleSelectAll() {
              if (this.disabled) {
                return false;
              }

              if (!this.isAllItemsSelected()) {
                // filter out disabled item first before slicing
                this.selectedItems = this.listFilterPipe.transform(this._data, this.filter).filter(function (item) {
                  return !item.isDisabled;
                }).slice();
                this.onSelectAll.emit(this.emittedValue(this.selectedItems));
              } else {
                this.selectedItems = [];
                this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
              }

              this.onChangeCallback(this.emittedValue(this.selectedItems));
            }
          }, {
            key: "getFields",
            value: function getFields(inputData) {
              var fields = [];

              if (typeof inputData !== "object") {
                return fields;
              } // tslint:disable-next-line:forin


              for (var prop in inputData) {
                fields.push(prop);
              }

              return fields;
            }
          }, {
            key: "placeholder",
            set: function set(value) {
              if (value) {
                this._placeholder = value;
              } else {
                this._placeholder = "Select";
              }
            }
          }, {
            key: "settings",
            set: function set(value) {
              if (value) {
                this._settings = Object.assign(this.defaultSettings, value);
              } else {
                this._settings = Object.assign(this.defaultSettings);
              }
            }
          }, {
            key: "data",
            set: function set(value) {
              var _this5 = this;

              if (!value) {
                this._data = [];
              } else {
                var firstItem = value[0];
                this._sourceDataType = typeof firstItem;
                this._sourceDataFields = this.getFields(firstItem);
                this._data = value.map(function (item) {
                  return typeof item === "string" || typeof item === "number" ? new ListItem(item) : new ListItem({
                    id: item[_this5._settings.idField],
                    text: item[_this5._settings.textField],
                    isDisabled: item[_this5._settings.disabledField]
                  });
                });
              }
            }
          }]);

          return MultiSelectComponent;
        }();

        MultiSelectComponent.ɵfac = function MultiSelectComponent_Factory(t) {
          return new (t || MultiSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ListFilterPipe));
        };

        MultiSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: MultiSelectComponent,
          selectors: [["ng-multiselect-dropdown"]],
          hostBindings: function MultiSelectComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function MultiSelectComponent_blur_HostBindingHandler() {
                return ctx.onTouched();
              });
            }
          },
          inputs: {
            disabled: "disabled",
            placeholder: "placeholder",
            settings: "settings",
            data: "data"
          },
          outputs: {
            onFilterChange: "onFilterChange",
            onDropDownClose: "onDropDownClose",
            onSelect: "onSelect",
            onDeSelect: "onDeSelect",
            onSelectAll: "onSelectAll",
            onDeSelectAll: "onDeSelectAll"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DROPDOWN_CONTROL_VALUE_ACCESSOR])],
          decls: 16,
          vars: 19,
          consts: [["tabindex", "0", 1, "multiselect-dropdown", 3, "blur", "clickOutside"], ["tabindex", "-1", 1, "dropdown-btn", 3, "click"], [4, "ngIf"], ["class", "selected-item", 3, "hidden", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "float", "right !important", "padding-right", "4px", 3, "ngClass"], ["style", "padding-right: 6px;", 4, "ngIf"], [1, "dropdown-multiselect__caret"], [1, "dropdown-list", 3, "hidden"], [1, "item1"], ["class", "multiselect-item-checkbox", "style", "border-bottom: 1px solid #ccc;padding:10px", 3, "click", 4, "ngIf"], ["class", "filter-textbox", 4, "ngIf"], [1, "item2"], ["class", "multiselect-item-checkbox", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-data", 4, "ngIf"], [1, "selected-item", 3, "hidden"], [2, "padding-top", "2px", "padding-left", "2px", "color", "white", 3, "click"], [2, "padding-right", "6px"], [1, "multiselect-item-checkbox", 2, "border-bottom", "1px solid #ccc", "padding", "10px", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-select-all", 3, "checked", "disabled"], [1, "filter-textbox"], ["type", "text", "aria-label", "multiselect-search", 3, "readOnly", "placeholder", "ngModel", "ngModelChange"], [1, "multiselect-item-checkbox", 3, "click"], ["type", "checkbox", 3, "checked", "disabled"], [1, "no-data"]],
          template: function MultiSelectComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function MultiSelectComponent_Template_div_blur_0_listener() {
                return ctx.onTouched();
              })("clickOutside", function MultiSelectComponent_Template_div_clickOutside_0_listener() {
                return ctx.closeDropdown();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_Template_span_click_2_listener($event) {
                return ctx.toggleDropdown($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MultiSelectComponent_span_3_Template, 2, 1, "span", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MultiSelectComponent_span_4_Template, 4, 2, "span", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MultiSelectComponent_span_6_Template, 2, 1, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MultiSelectComponent_li_10_Template, 4, 3, "li", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MultiSelectComponent_li_11_Template, 2, 3, "li", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MultiSelectComponent_li_13_Template, 4, 4, "li", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "multiSelectFilter");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MultiSelectComponent_li_15_Template, 3, 1, "li", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.disabled);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedItems.length == 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedItems)("ngForTrackBy", ctx.trackByFn);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx._settings.defaultOpen));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.itemShowRemaining() > 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx._settings.defaultOpen);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && !ctx._settings.singleSelection && ctx._settings.enableCheckAll && ctx._settings.limitSelection === -1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && ctx._settings.allowSearchFilter);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx._settings.maxHeight + "px");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 14, ctx._data, ctx.filter));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._data.length == 0 && !ctx._settings.allowRemoteDataSearch);
            }
          },
          directives: function directives() {
            return [ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]];
          },
          pipes: function pipes() {
            return [ListFilterPipe];
          },
          styles: [".multiselect-dropdown[_ngcontent-%COMP%]{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]:hover{box-shadow:1px 1px #959595}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{line-height:16px;display:block;position:absolute;box-sizing:border-box;width:40px;height:38px;right:1px;top:0;padding:4px 8px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:8px 8px 0;border-color:#999 transparent;content:\"\"}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect--active[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{transform:rotateZ(180deg)}.multiselect-dropdown[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-color:#eceeef}.dropdown-list[_ngcontent-%COMP%]{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:0;width:100%;padding:0 0 0 26px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:0}.multiselect-item-checkbox[_ngcontent-%COMP%]:hover{background-color:#e4e3e3}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus + div[_ngcontent-%COMP%]:before, .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover + div[_ngcontent-%COMP%]:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:active + div[_ngcontent-%COMP%]:before{transition-duration:0s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled + div[_ngcontent-%COMP%]:before{border-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:focus + div[_ngcontent-%COMP%]:before   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:hover + div[_ngcontent-%COMP%]:before{background-color:inherit}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:checked + div[_ngcontent-%COMP%]:before{background-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"],
          changeDetection: 0
        });
        MultiSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ListFilterPipe])], MultiSelectComponent);
        return MultiSelectComponent;
      }();

      var ClickOutsideDirective = /*@__PURE__*/function () {
        var ClickOutsideDirective = /*#__PURE__*/function () {
          function ClickOutsideDirective(_elementRef) {
            _classCallCheck(this, ClickOutsideDirective);

            this._elementRef = _elementRef;
            this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          }

          _createClass(ClickOutsideDirective, [{
            key: "onClick",
            value: function onClick(event, targetElement) {
              if (!targetElement) {
                return;
              }

              var clickedInside = this._elementRef.nativeElement.contains(targetElement);

              if (!clickedInside) {
                this.clickOutside.emit(event);
              }
            }
          }]);

          return ClickOutsideDirective;
        }();

        ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) {
          return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
        };

        ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: ClickOutsideDirective,
          selectors: [["", "clickOutside", ""]],
          hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
                return ctx.onClick($event, $event.target);
              }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
            }
          },
          outputs: {
            clickOutside: "clickOutside"
          }
        });
        ClickOutsideDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], ClickOutsideDirective);
        return ClickOutsideDirective;
      }();

      var NgMultiSelectDropDownModule_1;

      var NgMultiSelectDropDownModule = /*@__PURE__*/function () {
        var NgMultiSelectDropDownModule = NgMultiSelectDropDownModule_1 = /*#__PURE__*/function () {
          function NgMultiSelectDropDownModule() {
            _classCallCheck(this, NgMultiSelectDropDownModule);
          }

          _createClass(NgMultiSelectDropDownModule, null, [{
            key: "forRoot",
            value: function forRoot() {
              return {
                ngModule: NgMultiSelectDropDownModule_1
              };
            }
          }]);

          return NgMultiSelectDropDownModule;
        }();

        NgMultiSelectDropDownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: NgMultiSelectDropDownModule
        });
        NgMultiSelectDropDownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function NgMultiSelectDropDownModule_Factory(t) {
            return new (t || NgMultiSelectDropDownModule)();
          },
          providers: [ListFilterPipe],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
        });
        return NgMultiSelectDropDownModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgMultiSelectDropDownModule, {
          declarations: function declarations() {
            return [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]];
          },
          exports: function exports() {
            return [MultiSelectComponent];
          }
        });
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng-multiselect-dropdown.js.map

      /***/

    }
  }]);
})();
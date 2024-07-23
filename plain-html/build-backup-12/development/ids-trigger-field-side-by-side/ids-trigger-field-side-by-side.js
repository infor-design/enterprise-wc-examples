/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ids-trigger-field/demos/side-by-side.ts":
/*!****************************************************************!*\
  !*** ./src/components/ids-trigger-field/demos/side-by-side.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_trigger_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-trigger-field */ \"./src/components/ids-trigger-field/ids-trigger-field.ts\");\n\n$(\"body\").initialize();\n$(\"body\").on(\"initialized\", () => {\n  $(\"#date-field-normal\").datepicker({\n    attributes: [\n      { name: \"id\", value: \"custom-id\" },\n      { name: \"data-automation-id\", value: \"custom-automation-id\" }\n    ]\n  }).on(\"change\", () => {\n    console.info(\"Change Event Fired\");\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtdHJpZ2dlci1maWVsZC9kZW1vcy9zaWRlLWJ5LXNpZGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBTztBQUdQLEVBQUUsTUFBTSxFQUFFLFdBQVc7QUFDckIsRUFBRSxNQUFNLEVBQUUsR0FBRyxlQUFlLE1BQU07QUFDaEMsSUFBRSxvQkFBb0IsRUFDbkIsV0FBVztBQUFBLElBQ1YsWUFBWTtBQUFBLE1BQ1YsRUFBRSxNQUFNLE1BQU0sT0FBTyxZQUFZO0FBQUEsTUFDakMsRUFBRSxNQUFNLHNCQUFzQixPQUFPLHVCQUF1QjtBQUFBLElBQzlEO0FBQUEsRUFDRixDQUFDLEVBQ0EsR0FBRyxVQUFVLE1BQU07QUFDbEIsWUFBUSxLQUFLLG9CQUFvQjtBQUFBLEVBQ25DLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtdHJpZ2dlci1maWVsZC9kZW1vcy9zaWRlLWJ5LXNpZGUudHM/OTk4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2lkcy10cmlnZ2VyLWZpZWxkJztcblxuLy8gSW5pdGlhbGl6ZSB0aGUgNC54XG4kKCdib2R5JykuaW5pdGlhbGl6ZSgpO1xuJCgnYm9keScpLm9uKCdpbml0aWFsaXplZCcsICgpID0+IHtcbiAgJCgnI2RhdGUtZmllbGQtbm9ybWFsJylcbiAgICAuZGF0ZXBpY2tlcih7XG4gICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgIHsgbmFtZTogJ2lkJywgdmFsdWU6ICdjdXN0b20taWQnIH0sXG4gICAgICAgIHsgbmFtZTogJ2RhdGEtYXV0b21hdGlvbi1pZCcsIHZhbHVlOiAnY3VzdG9tLWF1dG9tYXRpb24taWQnIH1cbiAgICAgIF1cbiAgICB9KVxuICAgIC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5pbmZvKCdDaGFuZ2UgRXZlbnQgRmlyZWQnKTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-trigger-field/demos/side-by-side.ts\n");

/***/ }),

/***/ "./src/components/ids-trigger-field/ids-trigger-field.ts":
/*!***************************************************************!*\
  !*** ./src/components/ids-trigger-field/ids-trigger-field.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IdsTriggerField)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _core_ids_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ids-decorators */ \"./src/core/ids-decorators.ts\");\n/* harmony import */ var _utils_ids_string_utils_ids_string_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ids-string-utils/ids-string-utils */ \"./src/utils/ids-string-utils/ids-string-utils.ts\");\n/* harmony import */ var _utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/ids-xss-utils/ids-xss-utils */ \"./src/utils/ids-xss-utils/ids-xss-utils.ts\");\n/* harmony import */ var _ids_input_ids_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ids-input/ids-input */ \"./src/components/ids-input/ids-input.ts\");\n/* harmony import */ var _ids_trigger_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ids-trigger-button */ \"./src/components/ids-trigger-field/ids-trigger-button.ts\");\n/* harmony import */ var _ids_trigger_field_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ids-trigger-field.scss */ \"./src/components/ids-trigger-field/ids-trigger-field.scss\");\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __decorateClass = (decorators, target, key, kind) => {\n  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;\n  for (var i = decorators.length - 1, decorator; i >= 0; i--)\n    if (decorator = decorators[i])\n      result = (kind ? decorator(target, key, result) : decorator(result)) || result;\n  if (kind && result)\n    __defProp(target, key, result);\n  return result;\n};\n\n\n\n\n\n\n\nlet IdsTriggerField = class extends _ids_input_ids_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n  /**\n   * Call the constructor and then initialize\n   */\n  constructor() {\n    super();\n  }\n  /**\n   * Get a list of element dependencies for this component\n   * @returns {object} of elements\n   */\n  get elements() {\n    return {\n      content: this.container?.querySelector(\".ids-trigger-field-content\"),\n      label: this.container?.querySelector(\"label\"),\n      text: this.container?.querySelector(\"ids-text\")\n    };\n  }\n  /**\n   * Custom Element `connectedCallback` implementation\n   * @returns {void}\n   */\n  connectedCallback() {\n    super.connectedCallback();\n    this.#attachTriggerButtonEvents();\n    this.#setFieldHeight();\n  }\n  /**\n   * Return the attributes we handle as getters/setters\n   * @returns {Array} The attributes in an array\n   */\n  static get attributes() {\n    return [\n      ...super.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.FORMAT,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.TABBABLE\n    ];\n  }\n  /**\n   * Push color variant to the container element\n   * @returns {void}\n   */\n  onColorVariantRefresh() {\n    this.buttons.forEach((btn) => {\n      btn.colorVariant = this.colorVariant;\n    });\n  }\n  /**\n   * Creates the Template for rendering an IdsTriggerField's contents\n   * @returns {string} containing the template\n   */\n  template() {\n    this.templateHostAttributes();\n    const {\n      ariaLabel,\n      containerClass,\n      inputClass,\n      inputState,\n      labelHtml,\n      placeholder,\n      type,\n      value\n    } = this.templateVariables();\n    return `<div class=\"ids-trigger-field ${containerClass}\" part=\"container\">\n      ${labelHtml}\n      <div class=\"field-container\" part=\"field-container\">\n        <slot name=\"trigger-start\"></slot>\n        <slot class=\"content-area\" part=\"content-area\"></slot>\n        <input\n          part=\"input\"\n          id=\"${this.id}-input\"\n          ${type}${inputClass}${placeholder}${inputState}\n          ${ariaLabel}\n          ${value}\n          ></input>\n        <slot name=\"trigger-end\"></slot>\n        <slot name=\"loading-indicator\"></slot>\n      </div>\n      ${this.autocomplete ? `\n        <ids-popup\n          type=\"dropdown\"\n          align=\"bottom, left\"\n          align-target=\"#${this.id}-input\"\n          part=\"popup\"\n        >\n          <ids-list-box slot=\"content\" size=\"${this.size}\"></ids-list-box>\n        </ids-popup>` : \"\"}\n    </div>`;\n  }\n  /**\n   * @readonly\n   * @returns {Array<HTMLElement>} containing references to slotted IdsTriggerButtons on this component\n   */\n  get buttons() {\n    return [...this.querySelectorAll(\"ids-trigger-button\")];\n  }\n  /**\n   * @param {boolean | string} value true if this trigger field's buttons should be made accessible using the tab key\n   */\n  set tabbable(value) {\n    const newValue = (0,_utils_ids_string_utils_ids_string_utils__WEBPACK_IMPORTED_MODULE_2__.stringToBool)(value);\n    if (newValue) {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.TABBABLE, `${(0,_utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_3__.stripHTML)(`${value}`)}`);\n    } else {\n      this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.TABBABLE);\n    }\n    this.buttons.forEach((button) => {\n      button.tabbable = newValue;\n    });\n  }\n  /**\n   * @returns {boolean} true if this trigger field's buttons are accessible using the tab key\n   */\n  get tabbable() {\n    return (0,_utils_ids_string_utils_ids_string_utils__WEBPACK_IMPORTED_MODULE_2__.stringToBool)(this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.TABBABLE));\n  }\n  /**\n   * Sets the disabled attribute\n   * @param {boolean | string} d string value from the disabled attribute\n   */\n  set disabled(d) {\n    super.disabled = d;\n    if ((0,_utils_ids_string_utils_ids_string_utils__WEBPACK_IMPORTED_MODULE_2__.stringToBool)(d)) {\n      this.readonly = false;\n      super.readonly = false;\n      this.buttons.forEach((btn) => {\n        btn.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.DISABLED, \"\");\n        btn.readonly = false;\n      });\n    } else {\n      this.buttons.forEach((btn) => {\n        btn.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.DISABLED);\n      });\n    }\n  }\n  get disabled() {\n    return super.disabled;\n  }\n  /**\n   * Sets the readonly attribute\n   * @param {string} r string value from the read only attribute\n   */\n  set readonly(r) {\n    super.readonly = r;\n    if ((0,_utils_ids_string_utils_ids_string_utils__WEBPACK_IMPORTED_MODULE_2__.stringToBool)(r)) {\n      this.buttons.forEach((btn) => {\n        btn.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.READONLY, \"\");\n        btn.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.DISABLED);\n      });\n    } else {\n      this.buttons.forEach((btn) => {\n        btn.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.READONLY);\n      });\n    }\n  }\n  get readonly() {\n    return super.readonly;\n  }\n  /**\n   * Set format for date, time\n   * @param {string} val date, time format\n   */\n  set format(val) {\n    if (val) {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.FORMAT, val);\n    } else {\n      this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.FORMAT);\n    }\n  }\n  /**\n   * Return format\n   * @returns {string} return date format\n   */\n  get format() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.FORMAT);\n  }\n  /**\n   * Establish Internal Event Handlers\n   * @private\n   */\n  #attachTriggerButtonEvents() {\n    this.onEvent(\"click.trigger-button\", this, (e) => {\n      const btn = e.target;\n      if (btn)\n        this.trigger();\n    });\n  }\n  /**\n   * Set field height and compact attributes\n   * @private\n   * @returns {void}\n   */\n  #setFieldHeight() {\n    const setAttr = (btn, attr, val) => {\n      if (this.hasAttribute(attr))\n        btn?.setAttribute(attr, val);\n      else\n        btn?.removeAttribute(attr);\n    };\n    this.buttons?.forEach((btn) => {\n      setAttr(btn, _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COMPACT, \"\");\n      setAttr(btn, _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.FIELD_HEIGHT, this.fieldHeight);\n    });\n  }\n  /**\n   * Updates trigger buttons when the trigger field's fieldHeight property is updated\n   * @param {string} val the new field height setting\n   */\n  onFieldHeightChange(val) {\n    this.buttons.forEach((btn) => {\n      if (val) {\n        const attr = val === \"compact\" ? { name: \"compact\", val: \"\" } : { name: \"field-height\", val };\n        btn.setAttribute(attr.name, attr.val);\n      } else {\n        btn.removeAttribute(\"compact\");\n        btn.removeAttribute(\"field-height\");\n      }\n    });\n  }\n  /**\n   * Fire the trigger event and action.\n   */\n  trigger() {\n    let canTrigger = true;\n    const response = (veto) => {\n      canTrigger = !!veto;\n    };\n    this.triggerEvent(\"beforetriggerclicked\", this, { detail: { elem: this, response } });\n    if (!canTrigger) {\n      return;\n    }\n    this.triggerEvent(\"triggerclicked\", this, { detail: { elem: this } });\n  }\n};\nIdsTriggerField = __decorateClass([\n  (0,_core_ids_decorators__WEBPACK_IMPORTED_MODULE_1__.customElement)(\"ids-trigger-field\"),\n  (0,_core_ids_decorators__WEBPACK_IMPORTED_MODULE_1__.scss)(_ids_trigger_field_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"])\n], IdsTriggerField);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtdHJpZ2dlci1maWVsZC9pZHMtdHJpZ2dlci1maWVsZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJCO0FBQ1M7QUFDUDtBQUNIO0FBRUw7QUFFZDtBQUVZO0FBWW5CLElBQXFCLGtCQUFyQixjQUE2Qyw0REFBUSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJcEQsY0FBYztBQUNaLFVBQU07QUFBQSxFQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLElBQUksV0FBVztBQUNiLFdBQU87QUFBQSxNQUNMLFNBQVMsS0FBSyxXQUFXLGNBQWMsNEJBQTRCO0FBQUEsTUFDbkUsT0FBTyxLQUFLLFdBQVcsY0FBYyxPQUFPO0FBQUEsTUFDNUMsTUFBTSxLQUFLLFdBQVcsY0FBYyxVQUFVO0FBQUEsSUFDaEQ7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLG9CQUFvQjtBQUNsQixVQUFNLGtCQUFrQjtBQUN4QixTQUFLLDJCQUEyQjtBQUNoQyxTQUFLLGdCQUFnQjtBQUFBLEVBQ3ZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLFdBQVcsYUFBYTtBQUN0QixXQUFPO0FBQUEsTUFDTCxHQUFHLE1BQU07QUFBQSxNQUNULG1FQUFpQjtBQUFOLE1BQ1gscUVBQW1CO0FBQVIsSUFDYjtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsd0JBQThCO0FBQzVCLFNBQUssUUFBUSxRQUFRLENBQUMsUUFBUTtBQUFFLFVBQUksZUFBZSxLQUFLO0FBQUEsSUFBYyxDQUFDO0FBQUEsRUFDekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsV0FBVztBQUNULFNBQUssdUJBQXVCO0FBQzVCLFVBQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFD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QUM7QUFBQSxFQUN0RTtBQUNGO0FBN1BxQixrQkFBckI7QUFBQSxFQUZDLG1FQUFhLENBQUMsbUJBQW1CO0FBQUEsRUFDakMsMERBQUksQ0FBQywrREFBTTtBQUFBLEdBQ1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy10cmlnZ2VyLWZpZWxkL2lkcy10cmlnZ2VyLWZpZWxkLnRzP2ViMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gJy4uLy4uL2NvcmUvaWRzLWF0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgc2NzcyB9IGZyb20gJy4uLy4uL2NvcmUvaWRzLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgc3RyaW5nVG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMvaWRzLXN0cmluZy11dGlscy9pZHMtc3RyaW5nLXV0aWxzJztcbmltcG9ydCB7IHN0cmlwSFRNTCB9IGZyb20gJy4uLy4uL3V0aWxzL2lkcy14c3MtdXRpbHMvaWRzLXhzcy11dGlscyc7XG5cbmltcG9ydCBJZHNJbnB1dCBmcm9tICcuLi9pZHMtaW5wdXQvaWRzLWlucHV0JztcblxuaW1wb3J0ICcuL2lkcy10cmlnZ2VyLWJ1dHRvbic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pZHMtdHJpZ2dlci1maWVsZC5zY3NzJztcbmltcG9ydCB0eXBlIElkc1RyaWdnZXJCdXR0b24gZnJvbSAnLi9pZHMtdHJpZ2dlci1idXR0b24nO1xuXG4vKipcbiAqIElEUyBUcmlnZ2VyIEZpZWxkIENvbXBvbmVudFxuICogQHR5cGUge0lkc1RyaWdnZXJGaWVsZH1cbiAqIEBpbmhlcml0cyBJZHNJbnB1dFxuICogQHBhcnQgZmllbGQgLSB0aGUgZmllbGQgY29udGFpbmVyXG4gKiBAcGFydCBjb250ZW50IC0gdGhlIGNvbnRlbnQgd2l0aCB0cmlnZ2VyIGJ1dHRvbnMgYW5kIGlucHV0IGVsZW1lbnRcbiAqL1xuQGN1c3RvbUVsZW1lbnQoJ2lkcy10cmlnZ2VyLWZpZWxkJylcbkBzY3NzKHN0eWxlcylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkc1RyaWdnZXJGaWVsZCBleHRlbmRzIElkc0lucHV0IHtcbiAgLyoqXG4gICAqIENhbGwgdGhlIGNvbnN0cnVjdG9yIGFuZCB0aGVuIGluaXRpYWxpemVcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgbGlzdCBvZiBlbGVtZW50IGRlcGVuZGVuY2llcyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICogQHJldHVybnMge29iamVjdH0gb2YgZWxlbWVudHNcbiAgICovXG4gIGdldCBlbGVtZW50cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGVudDogdGhpcy5jb250YWluZXI/LnF1ZXJ5U2VsZWN0b3IoJy5pZHMtdHJpZ2dlci1maWVsZC1jb250ZW50JyksXG4gICAgICBsYWJlbDogdGhpcy5jb250YWluZXI/LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyksXG4gICAgICB0ZXh0OiB0aGlzLmNvbnRhaW5lcj8ucXVlcnlTZWxlY3RvcignaWRzLXRleHQnKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBFbGVtZW50IGBjb25uZWN0ZWRDYWxsYmFja2AgaW1wbGVtZW50YXRpb25cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuI2F0dGFjaFRyaWdnZXJCdXR0b25FdmVudHMoKTtcbiAgICB0aGlzLiNzZXRGaWVsZEhlaWdodCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgYXR0cmlidXRlcyB3ZSBoYW5kbGUgYXMgZ2V0dGVycy9zZXR0ZXJzXG4gICAqIEByZXR1cm5zIHtBcnJheX0gVGhlIGF0dHJpYnV0ZXMgaW4gYW4gYXJyYXlcbiAgICovXG4gIHN0YXRpYyBnZXQgYXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uc3VwZXIuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMuRk9STUFULFxuICAgICAgYXR0cmlidXRlcy5UQUJCQUJMRVxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogUHVzaCBjb2xvciB2YXJpYW50IHRvIHRoZSBjb250YWluZXIgZWxlbWVudFxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIG9uQ29sb3JWYXJpYW50UmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7IGJ0bi5jb2xvclZhcmlhbnQgPSB0aGlzLmNvbG9yVmFyaWFudDsgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgVGVtcGxhdGUgZm9yIHJlbmRlcmluZyBhbiBJZHNUcmlnZ2VyRmllbGQncyBjb250ZW50c1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBjb250YWluaW5nIHRoZSB0ZW1wbGF0ZVxuICAgKi9cbiAgdGVtcGxhdGUoKSB7XG4gICAgdGhpcy50ZW1wbGF0ZUhvc3RBdHRyaWJ1dGVzKCk7XG4gICAgY29uc3Qge1xuICAgICAgYXJpYUxhYmVsLFxuICAgICAgY29udGFpbmVyQ2xhc3MsXG4gICAgICBpbnB1dENsYXNzLFxuICAgICAgaW5wdXRTdGF0ZSxcbiAgICAgIGxhYmVsSHRtbCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgdHlwZSxcbiAgICAgIHZhbHVlXG4gICAgfSA9IHRoaXMudGVtcGxhdGVWYXJpYWJsZXMoKTtcblxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImlkcy10cmlnZ2VyLWZpZWxkICR7Y29udGFpbmVyQ2xhc3N9XCIgcGFydD1cImNvbnRhaW5lclwiPlxuICAgICAgJHtsYWJlbEh0bWx9XG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGQtY29udGFpbmVyXCIgcGFydD1cImZpZWxkLWNvbnRhaW5lclwiPlxuICAgICAgICA8c2xvdCBuYW1lPVwidHJpZ2dlci1zdGFydFwiPjwvc2xvdD5cbiAgICAgICAgPHNsb3QgY2xhc3M9XCJjb250ZW50LWFyZWFcIiBwYXJ0PVwiY29udGVudC1hcmVhXCI+PC9zbG90PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBwYXJ0PVwiaW5wdXRcIlxuICAgICAgICAgIGlkPVwiJHt0aGlzLmlkfS1pbnB1dFwiXG4gICAgICAgICAgJHt0eXBlfSR7aW5wdXRDbGFzc30ke3BsYWNlaG9sZGVyfSR7aW5wdXRTdGF0ZX1cbiAgICAgICAgICAke2FyaWFMYWJlbH1cbiAgICAgICAgICAke3ZhbHVlfVxuICAgICAgICAgID48L2lucHV0PlxuICAgICAgICA8c2xvdCBuYW1lPVwidHJpZ2dlci1lbmRcIj48L3Nsb3Q+XG4gICAgICAgIDxzbG90IG5hbWU9XCJsb2FkaW5nLWluZGljYXRvclwiPjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgICAgJHt0aGlzLmF1dG9jb21wbGV0ZSA/IGBcbiAgICAgICAgPGlkcy1wb3B1cFxuICAgICAgICAgIHR5cGU9XCJkcm9wZG93blwiXG4gICAgICAgICAgYWxpZ249XCJib3R0b20sIGxlZnRcIlxuICAgICAgICAgIGFsaWduLXRhcmdldD1cIiMke3RoaXMuaWR9LWlucHV0XCJcbiAgICAgICAgICBwYXJ0PVwicG9wdXBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlkcy1saXN0LWJveCBzbG90PVwiY29udGVudFwiIHNpemU9XCIke3RoaXMuc2l6ZX1cIj48L2lkcy1saXN0LWJveD5cbiAgICAgICAgPC9pZHMtcG9wdXA+YCA6ICcnfVxuICAgIDwvZGl2PmA7XG4gIH1cblxuICAvKipcbiAgICogQHJlYWRvbmx5XG4gICAqIEByZXR1cm5zIHtBcnJheTxIVE1MRWxlbWVudD59IGNvbnRhaW5pbmcgcmVmZXJlbmNlcyB0byBzbG90dGVkIElkc1RyaWdnZXJCdXR0b25zIG9uIHRoaXMgY29tcG9uZW50XG4gICAqL1xuICBnZXQgYnV0dG9ucygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMucXVlcnlTZWxlY3RvckFsbDxJZHNUcmlnZ2VyQnV0dG9uPignaWRzLXRyaWdnZXItYnV0dG9uJyldO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbiB8IHN0cmluZ30gdmFsdWUgdHJ1ZSBpZiB0aGlzIHRyaWdnZXIgZmllbGQncyBidXR0b25zIHNob3VsZCBiZSBtYWRlIGFjY2Vzc2libGUgdXNpbmcgdGhlIHRhYiBrZXlcbiAgICovXG4gIHNldCB0YWJiYWJsZSh2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gc3RyaW5nVG9Cb29sKHZhbHVlKTtcblxuICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5UQUJCQUJMRSwgYCR7c3RyaXBIVE1MKGAke3ZhbHVlfWApfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVzLlRBQkJBQkxFKTtcbiAgICB9XG5cbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24udGFiYmFibGUgPSBuZXdWYWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGlzIHRyaWdnZXIgZmllbGQncyBidXR0b25zIGFyZSBhY2Nlc3NpYmxlIHVzaW5nIHRoZSB0YWIga2V5XG4gICAqL1xuICBnZXQgdGFiYmFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHN0cmluZ1RvQm9vbCh0aGlzLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLlRBQkJBQkxFKSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGlzYWJsZWQgYXR0cmlidXRlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbiB8IHN0cmluZ30gZCBzdHJpbmcgdmFsdWUgZnJvbSB0aGUgZGlzYWJsZWQgYXR0cmlidXRlXG4gICAqL1xuICBzZXQgZGlzYWJsZWQoZDogYm9vbGVhbiB8IHN0cmluZykge1xuICAgIHN1cGVyLmRpc2FibGVkID0gZDtcbiAgICBpZiAoc3RyaW5nVG9Cb29sKGQpKSB7XG4gICAgICB0aGlzLnJlYWRvbmx5ID0gZmFsc2U7XG4gICAgICBzdXBlci5yZWFkb25seSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5ESVNBQkxFRCwgJycpO1xuICAgICAgICBidG4ucmVhZG9ubHkgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlcy5ESVNBQkxFRCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHN1cGVyLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHJlYWRvbmx5IGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gciBzdHJpbmcgdmFsdWUgZnJvbSB0aGUgcmVhZCBvbmx5IGF0dHJpYnV0ZVxuICAgKi9cbiAgc2V0IHJlYWRvbmx5KHI6IGJvb2xlYW4gfCBzdHJpbmcpIHtcbiAgICBzdXBlci5yZWFkb25seSA9IHI7XG5cbiAgICBpZiAoc3RyaW5nVG9Cb29sKHIpKSB7XG4gICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5SRUFET05MWSwgJycpO1xuICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZXMuRElTQUJMRUQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVzLlJFQURPTkxZKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCByZWFkb25seSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gc3VwZXIucmVhZG9ubHk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGZvcm1hdCBmb3IgZGF0ZSwgdGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsIGRhdGUsIHRpbWUgZm9ybWF0XG4gICAqL1xuICBzZXQgZm9ybWF0KHZhbDogc3RyaW5nIHwgbnVsbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuRk9STUFULCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVzLkZPUk1BVCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBmb3JtYXRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJuIGRhdGUgZm9ybWF0XG4gICAqL1xuICBnZXQgZm9ybWF0KCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLkZPUk1BVCk7XG4gIH1cblxuICAvKipcbiAgICogRXN0YWJsaXNoIEludGVybmFsIEV2ZW50IEhhbmRsZXJzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICAjYXR0YWNoVHJpZ2dlckJ1dHRvbkV2ZW50cygpIHtcbiAgICB0aGlzLm9uRXZlbnQoJ2NsaWNrLnRyaWdnZXItYnV0dG9uJywgdGhpcywgKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBidG4gPSAoZS50YXJnZXQgYXMgSWRzVHJpZ2dlckJ1dHRvbik7XG4gICAgICBpZiAoYnRuKSB0aGlzLnRyaWdnZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZmllbGQgaGVpZ2h0IGFuZCBjb21wYWN0IGF0dHJpYnV0ZXNcbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICAjc2V0RmllbGRIZWlnaHQoKTogdm9pZCB7XG4gICAgY29uc3Qgc2V0QXR0ciA9IChidG46IElkc1RyaWdnZXJCdXR0b24sIGF0dHI6IHN0cmluZywgdmFsOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZShhdHRyKSkgYnRuPy5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgICAgIGVsc2UgYnRuPy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgfTtcblxuICAgIHRoaXMuYnV0dG9ucz8uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBzZXRBdHRyKGJ0biwgYXR0cmlidXRlcy5DT01QQUNULCAnJyk7XG4gICAgICBzZXRBdHRyKGJ0biwgYXR0cmlidXRlcy5GSUVMRF9IRUlHSFQsIHRoaXMuZmllbGRIZWlnaHQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdHJpZ2dlciBidXR0b25zIHdoZW4gdGhlIHRyaWdnZXIgZmllbGQncyBmaWVsZEhlaWdodCBwcm9wZXJ0eSBpcyB1cGRhdGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWwgdGhlIG5ldyBmaWVsZCBoZWlnaHQgc2V0dGluZ1xuICAgKi9cbiAgb25GaWVsZEhlaWdodENoYW5nZSh2YWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgY29uc3QgYXR0ciA9IHZhbCA9PT0gJ2NvbXBhY3QnID8geyBuYW1lOiAnY29tcGFjdCcsIHZhbDogJycgfSA6IHsgbmFtZTogJ2ZpZWxkLWhlaWdodCcsIHZhbCB9O1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZSgnY29tcGFjdCcpO1xuICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdmaWVsZC1oZWlnaHQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlIHRoZSB0cmlnZ2VyIGV2ZW50IGFuZCBhY3Rpb24uXG4gICAqL1xuICB0cmlnZ2VyKCk6IHZvaWQge1xuICAgIGxldCBjYW5UcmlnZ2VyID0gdHJ1ZTtcbiAgICBjb25zdCByZXNwb25zZSA9ICh2ZXRvOiBhbnkpID0+IHtcbiAgICAgIGNhblRyaWdnZXIgPSAhIXZldG87XG4gICAgfTtcbiAgICB0aGlzLnRyaWdnZXJFdmVudCgnYmVmb3JldHJpZ2dlcmNsaWNrZWQnLCB0aGlzLCB7IGRldGFpbDogeyBlbGVtOiB0aGlzLCByZXNwb25zZSB9IH0pO1xuXG4gICAgaWYgKCFjYW5UcmlnZ2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHJpZ2dlckV2ZW50KCd0cmlnZ2VyY2xpY2tlZCcsIHRoaXMsIHsgZGV0YWlsOiB7IGVsZW06IHRoaXMgfSB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-trigger-field/ids-trigger-field.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b93b8c20d15f32a7e13f")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"ids-trigger-field-side-by-side": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkids_enterprise_wc"] = self["webpackChunkids_enterprise_wc"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_components_ids-trigger-field_ids-trigger-field_scss"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_components_ids-trigger-field_ids-trigger-field_scss"], () => (__webpack_require__("./src/components/ids-trigger-field/demos/side-by-side.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
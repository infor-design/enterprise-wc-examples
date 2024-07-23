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

/***/ "./src/components/ids-data-label/demos/index.ts":
/*!******************************************************!*\
  !*** ./src/components/ids-data-label/demos/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_data_label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-data-label */ \"./src/components/ids-data-label/ids-data-label.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1sYWJlbC9kZW1vcy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOztBQUNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1sYWJlbC9kZW1vcy9pbmRleC50cz8yZWE0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN1cHBvcnRpbmcgY29tcG9uZW50c1xuaW1wb3J0ICcuLi9pZHMtZGF0YS1sYWJlbCc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-data-label/demos/index.ts\n");

/***/ }),

/***/ "./src/components/ids-data-label/ids-data-label.ts":
/*!*********************************************************!*\
  !*** ./src/components/ids-data-label/ids-data-label.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IdsDataLabel)\n/* harmony export */ });\n/* harmony import */ var _core_ids_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-decorators */ \"./src/core/ids-decorators.ts\");\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _ids_data_label_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ids-data-label.scss */ \"./src/components/ids-data-label/ids-data-label.scss\");\n/* harmony import */ var _mixins_ids_theme_mixin_ids_theme_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/ids-theme-mixin/ids-theme-mixin */ \"./src/mixins/ids-theme-mixin/ids-theme-mixin.ts\");\n/* harmony import */ var _mixins_ids_events_mixin_ids_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/ids-events-mixin/ids-events-mixin */ \"./src/mixins/ids-events-mixin/ids-events-mixin.ts\");\n/* harmony import */ var _mixins_ids_locale_mixin_ids_locale_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/ids-locale-mixin/ids-locale-mixin */ \"./src/mixins/ids-locale-mixin/ids-locale-mixin.ts\");\n/* harmony import */ var _core_ids_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ids-element */ \"./src/core/ids-element.ts\");\n/* harmony import */ var _ids_text_ids_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ids-text/ids-text */ \"./src/components/ids-text/ids-text.ts\");\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __decorateClass = (decorators, target, key, kind) => {\n  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;\n  for (var i = decorators.length - 1, decorator; i >= 0; i--)\n    if (decorator = decorators[i])\n      result = (kind ? decorator(target, key, result) : decorator(result)) || result;\n  if (kind && result)\n    __defProp(target, key, result);\n  return result;\n};\n\n\n\n\n\n\n\n\nlet IdsDataLabel = class extends (0,_mixins_ids_theme_mixin_ids_theme_mixin__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_mixins_ids_locale_mixin_ids_locale_mixin__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_mixins_ids_events_mixin_ids_events_mixin__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_core_ids_element__WEBPACK_IMPORTED_MODULE_6__[\"default\"]))) {\n  constructor() {\n    super();\n    this.state = {\n      labelClass: \"top-positioned\"\n    };\n  }\n  connectedCallback() {\n    super.connectedCallback();\n  }\n  /**\n   * Return the attributes we handle as getters/setters\n   * @returns {Array} The propertires in an array\n   */\n  static get attributes() {\n    return [\n      ...super.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL_POSITION,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LANGUAGE,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.MODE\n    ];\n  }\n  /**\n   * Create the Template for the contents\n   * @returns {string} The template\n   */\n  template() {\n    return `<div class=\"${this.labelClass}\">\n        <ids-text class=\"label\" font-size=\"16\">${this.label}<span class=\"colon\">${this.colon}</span></ids-text>\n        <ids-text class=\"description\" font-size=\"16\"><slot></slot></ids-text>\n      </div>`;\n  }\n  /**\n   * Sets to label\n   * @param {string} value label string\n   */\n  set label(value) {\n    if (value) {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL, value);\n    } else {\n      this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL);\n    }\n    const label = this.container?.querySelector(\".label\");\n    if (label) {\n      label.innerHTML = `${value ?? \"\"}<span class=\"colon\">${this.colon}</span>`;\n    }\n  }\n  get label() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL) ?? \"\";\n  }\n  /**\n   * Sets to label\n   * @param {string} value label string\n   */\n  set labelPosition(value) {\n    if (value) {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL_POSITION, value);\n      if (this.container) {\n        this.container.className = `${value}-positioned`;\n      }\n    }\n  }\n  get labelPosition() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL_POSITION);\n  }\n  /**\n   * @returns {string} css class for data-label\n   */\n  get labelClass() {\n    if (this.labelPosition) {\n      return `${this.labelPosition}-positioned`;\n    }\n    return \"top-positioned\";\n  }\n  /**\n   * @returns {string} css class for data-label\n   */\n  get colon() {\n    return this.labelPosition === \"left\" ? \":\" : \"\";\n  }\n};\nIdsDataLabel = __decorateClass([\n  (0,_core_ids_decorators__WEBPACK_IMPORTED_MODULE_0__.customElement)(\"ids-data-label\"),\n  (0,_core_ids_decorators__WEBPACK_IMPORTED_MODULE_0__.scss)(_ids_data_label_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n], IdsDataLabel);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1sYWJlbC9pZHMtZGF0YS1sYWJlbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNUO0FBQ1I7QUFDTztBQUNDO0FBQ0E7QUFDSjtBQUNoQjtBQVVQLElBQXFCLGVBQXJCLGNBQTBDLG1GQUFhLENBQUMscUZBQWMsQ0FBQyxxRkFBYyxDQUFDLHlEQUFVLENBQUMsQ0FBQyxFQUFFO0FBQUEsRUFDbEcsY0FBYztBQUNaLFVBQU07QUFFTixTQUFLLFFBQVE7QUFBQSxNQUNYLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBRUEsb0JBQW9CO0FBQ2xCLFVBQU0sa0JBQWtCO0FBQUEsRUFDMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsV0FBVyxhQUFhO0FBQ3RCLFdBQU87QUFBQSxNQUNMLEdBQUcsTUFBTTtBQUFBLE1BQ1Qsa0VBQWdCO0FBQUwsTUFDWCwyRUFBeUI7QUFBZCxNQUNYLHFFQUFtQjtBQUFSLE1BQ1gsaUVBQWU7QUFBSixJQUNiO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxXQUFtQjtBQUNqQixXQUFPLGVBQWUsS0FBSztBQUFBLGlEQUNrQixLQUFLLDRCQUE0QixLQUFLO0FBQUE7QUFBQTtBQUFBLEVBR3JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLElBQUksTUFBTSxPQUFlO0FBQ3ZCLFFBQUksT0FBTztBQUNULFdBQUssYUFBYSxrRUFBZ0IsRUFBRSxLQUFLO0FBQUEsSUFDM0MsT0FBTztBQUNMLFdBQUssZ0JBQWdCLGtFQUFnQjtBQUFBLElBQ3ZDO0FBRUEsVUFBTSxRQUFRLEtBQUssV0FBVyxjQUFjLFFBQVE7QUFDcEQsUUFBSSxPQUFPO0FBQ1QsWUFBTSxZQUFZLEdBQUcsU0FBUyx5QkFBeUIsS0FBSztBQUFBLElBQzlEO0FBQUEsRUFDRjtBQUFBLEVBRUEsSUFBSSxRQUFnQjtBQUNsQixXQUFPLEtBQUssYUFBYSxrRUFBZ0IsS0FBSztBQUFBLEVBQ2hEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLElBQUksY0FBYyxPQUFzQjtBQUN0QyxRQUFJLE9BQU87QUFDVCxXQUFLLGFBQWEsMkVBQXlCLEVBQUUsS0FBSztBQUNsRCxVQUFJLEtBQUssV0FBVztBQUNsQixhQUFLLFVBQVUsWUFBWSxHQUFHO0FBQUEsTUFDaEM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsSUFBSSxnQkFBK0I7QUFDakMsV0FBTyxLQUFLLGFBQWEsMkVBQXlCO0FBQUEsRUFDcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLElBQUksYUFBcUI7QUFDdkIsUUFBSSxLQUFLLGVBQWU7QUFDdEIsYUFBTyxHQUFHLEtBQUs7QUFBQSxJQUNqQjtBQUNBLFdBQU87QUFBQSxFQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxJQUFJLFFBQWdCO0FBQ2xCLFdBQU8sS0FBSyxrQkFBa0IsU0FBUyxNQUFNO0FBQUEsRUFDL0M7QUFDRjtBQTVGcUIsZUFBckI7QUFBQSxFQUZDLG1FQUFhLENBQUMsZ0JBQWdCO0FBQUEsRUFDOUIsMERBQUksQ0FBQyw0REFBTTtBQUFBLEdBQ1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1kYXRhLWxhYmVsL2lkcy1kYXRhLWxhYmVsLnRzPzkyYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgc2NzcyB9IGZyb20gJy4uLy4uL2NvcmUvaWRzLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gJy4uLy4uL2NvcmUvaWRzLWF0dHJpYnV0ZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2lkcy1kYXRhLWxhYmVsLnNjc3MnO1xuaW1wb3J0IElkc1RoZW1lTWl4aW4gZnJvbSAnLi4vLi4vbWl4aW5zL2lkcy10aGVtZS1taXhpbi9pZHMtdGhlbWUtbWl4aW4nO1xuaW1wb3J0IElkc0V2ZW50c01peGluIGZyb20gJy4uLy4uL21peGlucy9pZHMtZXZlbnRzLW1peGluL2lkcy1ldmVudHMtbWl4aW4nO1xuaW1wb3J0IElkc0xvY2FsZU1peGluIGZyb20gJy4uLy4uL21peGlucy9pZHMtbG9jYWxlLW1peGluL2lkcy1sb2NhbGUtbWl4aW4nO1xuaW1wb3J0IElkc0VsZW1lbnQgZnJvbSAnLi4vLi4vY29yZS9pZHMtZWxlbWVudCc7XG5pbXBvcnQgJy4uL2lkcy10ZXh0L2lkcy10ZXh0JztcblxuLyoqXG4gKiBJRFMgRGF0YSBMYWJlbCBDb21wb25lbnRcbiAqIEB0eXBlIHtJZHNEYXRhTGFiZWx9XG4gKiBAaW5oZXJpdHMgSWRzRWxlbWVudFxuICogQG1peGVzIElkc1RoZW1lTWl4aW5cbiAqL1xuQGN1c3RvbUVsZW1lbnQoJ2lkcy1kYXRhLWxhYmVsJylcbkBzY3NzKHN0eWxlcylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkc0RhdGFMYWJlbCBleHRlbmRzIElkc1RoZW1lTWl4aW4oSWRzTG9jYWxlTWl4aW4oSWRzRXZlbnRzTWl4aW4oSWRzRWxlbWVudCkpKSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGFiZWxDbGFzczogJ3RvcC1wb3NpdGlvbmVkJyxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGF0dHJpYnV0ZXMgd2UgaGFuZGxlIGFzIGdldHRlcnMvc2V0dGVyc1xuICAgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBwcm9wZXJ0aXJlcyBpbiBhbiBhcnJheVxuICAgKi9cbiAgc3RhdGljIGdldCBhdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAuLi5zdXBlci5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcy5MQUJFTCxcbiAgICAgIGF0dHJpYnV0ZXMuTEFCRUxfUE9TSVRJT04sXG4gICAgICBhdHRyaWJ1dGVzLkxBTkdVQUdFLFxuICAgICAgYXR0cmlidXRlcy5NT0RFXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIFRlbXBsYXRlIGZvciB0aGUgY29udGVudHNcbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHRlbXBsYXRlXG4gICAqL1xuICB0ZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7dGhpcy5sYWJlbENsYXNzfVwiPlxuICAgICAgICA8aWRzLXRleHQgY2xhc3M9XCJsYWJlbFwiIGZvbnQtc2l6ZT1cIjE2XCI+JHt0aGlzLmxhYmVsfTxzcGFuIGNsYXNzPVwiY29sb25cIj4ke3RoaXMuY29sb259PC9zcGFuPjwvaWRzLXRleHQ+XG4gICAgICAgIDxpZHMtdGV4dCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgZm9udC1zaXplPVwiMTZcIj48c2xvdD48L3Nsb3Q+PC9pZHMtdGV4dD5cbiAgICAgIDwvZGl2PmA7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0byBsYWJlbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgbGFiZWwgc3RyaW5nXG4gICAqL1xuICBzZXQgbGFiZWwodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5MQUJFTCwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVzLkxBQkVMKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuY29udGFpbmVyPy5xdWVyeVNlbGVjdG9yKCcubGFiZWwnKTtcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIGxhYmVsLmlubmVySFRNTCA9IGAke3ZhbHVlID8/ICcnfTxzcGFuIGNsYXNzPVwiY29sb25cIj4ke3RoaXMuY29sb259PC9zcGFuPmA7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuTEFCRUwpID8/ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdG8gbGFiZWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIGxhYmVsIHN0cmluZ1xuICAgKi9cbiAgc2V0IGxhYmVsUG9zaXRpb24odmFsdWU6IHN0cmluZyB8IG51bGwpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuTEFCRUxfUE9TSVRJT04sIHZhbHVlKTtcbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSBgJHt2YWx1ZX0tcG9zaXRpb25lZGA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGxhYmVsUG9zaXRpb24oKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuTEFCRUxfUE9TSVRJT04pO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGNzcyBjbGFzcyBmb3IgZGF0YS1sYWJlbFxuICAgKi9cbiAgZ2V0IGxhYmVsQ2xhc3MoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5sYWJlbFBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5sYWJlbFBvc2l0aW9ufS1wb3NpdGlvbmVkYDtcbiAgICB9XG4gICAgcmV0dXJuICd0b3AtcG9zaXRpb25lZCc7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge3N0cmluZ30gY3NzIGNsYXNzIGZvciBkYXRhLWxhYmVsXG4gICAqL1xuICBnZXQgY29sb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbFBvc2l0aW9uID09PSAnbGVmdCcgPyAnOicgOiAnJztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-data-label/ids-data-label.ts\n");

/***/ }),

/***/ "./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts":
/*!***********************************************************************!*\
  !*** ./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_color_variant_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ids-xss-utils/ids-xss-utils */ \"./src/utils/ids-xss-utils/ids-xss-utils.ts\");\n\n\nconst IdsColorVariantMixin = (superclass) => class extends superclass {\n  constructor(...args) {\n    super(...args);\n    if (!this.state) {\n      this.state = {};\n    }\n    this.state.colorVariant = null;\n  }\n  connectedCallback() {\n    super.connectedCallback();\n    if (this.colorVariant)\n      this.#refreshColorVariant(null, this.colorVariant);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT\n    ];\n  }\n  /**\n   * @returns {Array<string>} List of available color variants for this component\n   */\n  colorVariants = [];\n  /**\n   * @returns {string|null} the name of the color variant currently applied\n   */\n  get colorVariant() {\n    return this.state?.colorVariant;\n  }\n  /**\n   * @param {string | null} val the name of the color variant to be applied\n   */\n  set colorVariant(val) {\n    let safeValue = null;\n    if (typeof val === \"string\") {\n      safeValue = (0,_utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__.stripHTML)(val);\n    }\n    const currentValue = this.state.colorVariant;\n    if (safeValue && currentValue !== safeValue) {\n      if (this.colorVariants.includes(safeValue)) {\n        this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT, `${safeValue}`);\n      } else {\n        this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT);\n        safeValue = null;\n      }\n      this.state.colorVariant = safeValue;\n      this.#refreshColorVariant(currentValue, safeValue);\n    }\n  }\n  /**\n   * Refreshes the component's color variant state, driven by\n   * a CSS class on the WebComponent's `container` element\n   * @param {string} oldVariantName the variant name to \"remove\" from the style\n   * @param {string} newVariantName the variant name to \"add\" to the style\n   * @returns {void}\n   */\n  #refreshColorVariant(oldVariantName, newVariantName) {\n    if (!this.container) {\n      return;\n    }\n    const cl = this.container?.classList;\n    if (oldVariantName)\n      cl?.remove(`color-variant-${oldVariantName}`);\n    if (newVariantName)\n      cl?.add(`color-variant-${newVariantName}`);\n    if (typeof this.onColorVariantRefresh === \"function\") {\n      this.onColorVariantRefresh(newVariantName);\n    }\n  }\n};\nvar ids_color_variant_mixin_default = IdsColorVariantMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1jb2xvci12YXJpYW50LW1peGluL2lkcy1jb2xvci12YXJpYW50LW1peGluLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUVEO0FBa0IxQixNQUFNLHVCQUF1QixDQUF3QixlQUFrQixjQUFjLFdBQVc7QUFBQSxFQUM5RixlQUFlLE1BQWE7QUFDMUIsVUFBTSxHQUFHLElBQUk7QUFFYixRQUFJLENBQUMsS0FBSyxPQUFPO0FBQ2YsV0FBSyxRQUFRLENBQUM7QUFBQSxJQUNoQjtBQUNBLFNBQUssTUFBTSxlQUFlO0FBQUEsRUFDNUI7QUFBQSxFQUVBLG9CQUFvQjtBQUNsQixVQUFNLGtCQUFrQjtBQUN4QixRQUFJLEtBQUs7QUFBYyxXQUFLLHFCQUFxQixNQUFNLEtBQUssWUFBWTtBQUFBLEVBQzFFO0FBQUEsRUFFQSxXQUFXLGFBQWE7QUFDdEIsV0FBTztBQUFBLE1BQ0wsR0FBSSxXQUFtQjtBQUFBLE1BQ3ZCLDBFQUF3QjtBQUFiLElBQ2I7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxnQkFBK0IsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS2hDLElBQUksZUFBZTtBQUNqQixXQUFPLEtBQUssT0FBTztBQUFBLEVBQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxJQUFJLGFBQWEsS0FBb0I7QUFDbkMsUUFBSSxZQUFpQjtBQUNyQixRQUFJLE9BQU8sUUFBUSxVQUFVO0FBQzNCLGtCQUFZLDZFQUFTLENBQUMsR0FBRztBQUFBLElBQzNCO0FBRUEsVUFBTSxlQUFlLEtBQUssTUFBTTtBQUNoQyxRQUFJLGFBQWEsaUJBQWlCLFdBQVc7QUFDM0MsVUFBSSxLQUFLLGNBQWMsU0FBUyxTQUFTLEdBQUc7QUFDMUMsYUFBSyxhQUFhLDBFQUF3QixFQUFFLEdBQUcsV0FBVztBQUFBLE1BQzVELE9BQU87QUFDTCxhQUFLLGdCQUFnQiwwRUFBd0I7QUFDN0Msb0JBQVk7QUFBQSxNQUNkO0FBRUEsV0FBSyxNQUFNLGVBQWU7QUFDMUIsV0FBSyxxQkFBcUIsY0FBYyxTQUFTO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVNBLHFCQUFxQixnQkFBZ0MsZ0JBQXNDO0FBQ3pGLFFBQUksQ0FBQyxLQUFLLFdBQVc7QUFDbkI7QUFBQSxJQUNGO0FBRUEsVUFBTSxLQUFLLEtBQUssV0FBVztBQUUzQixRQUFJO0FBQWdCLFVBQUksT0FBTyxpQkFBaUIsZ0JBQWdCO0FBQ2hFLFFBQUk7QUFBZ0IsVUFBSSxJQUFJLGlCQUFpQixnQkFBZ0I7QUFHN0QsUUFBSSxPQUFPLEtBQUssMEJBQTBCLFlBQVk7QUFDcEQsV0FBSyxzQkFBc0IsY0FBYztBQUFBLElBQzNDO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxrQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL21peGlucy9pZHMtY29sb3ItdmFyaWFudC1taXhpbi9pZHMtY29sb3ItdmFyaWFudC1taXhpbi50cz9hZWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0dHJpYnV0ZXMgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1hdHRyaWJ1dGVzJztcbmltcG9ydCB7IElkc0NvbnN0cnVjdG9yIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtZWxlbWVudCc7XG5pbXBvcnQgeyBzdHJpcEhUTUwgfSBmcm9tICcuLi8uLi91dGlscy9pZHMteHNzLXV0aWxzL2lkcy14c3MtdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yVmFyaWFudEhhbmRsZXIge1xuICAvLyBhcyBpbnN0YW5jZSBmdW5jdGlvblxuICBvbkNvbG9yVmFyaWFudFJlZnJlc2g/KHZhcmlhbnROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKTogdm9pZDtcbiAgLy8gYXMgaW5zdGFuY2UgcHJvcGVydHlcbiAgb25Db2xvclZhcmlhbnRSZWZyZXNoPzogKHZhcmlhbnROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSA9PiB2b2lkO1xufVxuXG50eXBlIENvbnN0cmFpbnRzID0gSWRzQ29uc3RydWN0b3I8Q29sb3JWYXJpYW50SGFuZGxlcj47XG5cbi8qKlxuICogQSBtaXhpbiB0aGF0IHdpbGwgcHJvdmlkZSB0aGUgY29udGFpbmVyIGVsZW1lbnQgb2YgYW4gSURTIENvbXBvbmVudCB3aXRoIGEgY2xhc3NcbiAqIHJlc2VydmVkIGZvciBmbGlwcGluZyB0aGUgZm9yZWdyb3VuZCBjb2xvciAodGV4dCBjb2xvciwgaWNvbiBmaWxsLCBldGMpIHRvIGFuIGFsdGVybmF0ZSxcbiAqIGNvbnRyYXN0aW5nIGNvbG9yLiAgVGhpcyBhbGxvd3MgZWFzeSBpbnRlZ3JhdGlvbiB3aXRoIGFsdGVybmF0ZSBsYXlvdXRzLCBoZWFkZXJzLCBhcHAgbWVudSwgZXRjLlxuICogQHBhcmFtIHthbnl9IHN1cGVyY2xhc3MgQWNjZXB0cyBhIHN1cGVyY2xhc3MgYW5kIGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3MgZnJvbSBpdFxuICogQHJldHVybnMge2FueX0gVGhlIGV4dGVuZGVkIG9iamVjdFxuICovXG5jb25zdCBJZHNDb2xvclZhcmlhbnRNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RyYWludHM+KHN1cGVyY2xhc3M6IFQpID0+IGNsYXNzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5jb2xvclZhcmlhbnQgPSBudWxsO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5jb2xvclZhcmlhbnQpIHRoaXMuI3JlZnJlc2hDb2xvclZhcmlhbnQobnVsbCwgdGhpcy5jb2xvclZhcmlhbnQpO1xuICB9XG5cbiAgc3RhdGljIGdldCBhdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAuLi4oc3VwZXJjbGFzcyBhcyBhbnkpLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzLkNPTE9SX1ZBUklBTlRcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtBcnJheTxzdHJpbmc+fSBMaXN0IG9mIGF2YWlsYWJsZSBjb2xvciB2YXJpYW50cyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICovXG4gIGNvbG9yVmFyaWFudHM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAvKipcbiAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSB0aGUgbmFtZSBvZiB0aGUgY29sb3IgdmFyaWFudCBjdXJyZW50bHkgYXBwbGllZFxuICAgKi9cbiAgZ2V0IGNvbG9yVmFyaWFudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZT8uY29sb3JWYXJpYW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gdmFsIHRoZSBuYW1lIG9mIHRoZSBjb2xvciB2YXJpYW50IHRvIGJlIGFwcGxpZWRcbiAgICovXG4gIHNldCBjb2xvclZhcmlhbnQodmFsOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgbGV0IHNhZmVWYWx1ZTogYW55ID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNhZmVWYWx1ZSA9IHN0cmlwSFRNTCh2YWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuc3RhdGUuY29sb3JWYXJpYW50O1xuICAgIGlmIChzYWZlVmFsdWUgJiYgY3VycmVudFZhbHVlICE9PSBzYWZlVmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmNvbG9yVmFyaWFudHMuaW5jbHVkZXMoc2FmZVZhbHVlKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLkNPTE9SX1ZBUklBTlQsIGAke3NhZmVWYWx1ZX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZXMuQ09MT1JfVkFSSUFOVCk7XG4gICAgICAgIHNhZmVWYWx1ZSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUuY29sb3JWYXJpYW50ID0gc2FmZVZhbHVlO1xuICAgICAgdGhpcy4jcmVmcmVzaENvbG9yVmFyaWFudChjdXJyZW50VmFsdWUsIHNhZmVWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyB0aGUgY29tcG9uZW50J3MgY29sb3IgdmFyaWFudCBzdGF0ZSwgZHJpdmVuIGJ5XG4gICAqIGEgQ1NTIGNsYXNzIG9uIHRoZSBXZWJDb21wb25lbnQncyBgY29udGFpbmVyYCBlbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRWYXJpYW50TmFtZSB0aGUgdmFyaWFudCBuYW1lIHRvIFwicmVtb3ZlXCIgZnJvbSB0aGUgc3R5bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1ZhcmlhbnROYW1lIHRoZSB2YXJpYW50IG5hbWUgdG8gXCJhZGRcIiB0byB0aGUgc3R5bGVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICAjcmVmcmVzaENvbG9yVmFyaWFudChvbGRWYXJpYW50TmFtZT86IHN0cmluZyB8IG51bGwsIG5ld1ZhcmlhbnROYW1lPzogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjbCA9IHRoaXMuY29udGFpbmVyPy5jbGFzc0xpc3Q7XG5cbiAgICBpZiAob2xkVmFyaWFudE5hbWUpIGNsPy5yZW1vdmUoYGNvbG9yLXZhcmlhbnQtJHtvbGRWYXJpYW50TmFtZX1gKTtcbiAgICBpZiAobmV3VmFyaWFudE5hbWUpIGNsPy5hZGQoYGNvbG9yLXZhcmlhbnQtJHtuZXdWYXJpYW50TmFtZX1gKTtcblxuICAgIC8vIEZpcmUgb3B0aW9uYWwgY2FsbGJhY2tcbiAgICBpZiAodHlwZW9mIHRoaXMub25Db2xvclZhcmlhbnRSZWZyZXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9uQ29sb3JWYXJpYW50UmVmcmVzaChuZXdWYXJpYW50TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJZHNDb2xvclZhcmlhbnRNaXhpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts\n");

/***/ }),

/***/ "./src/components/ids-data-label/ids-data-label.scss":
/*!***********************************************************!*\
  !*** ./src/components/ids-data-label/ids-data-label.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n        const styles = `/* Sass scss styles. Keep Base very small */\n/* Global variables (might want these to become tokens) */\n:host([language*=fr]) .left-positioned .colon {\n  padding-left: 8px;\n}\n\n.left-positioned {\n  display: flex;\n  flex-direction: row;\n}\n.left-positioned .label {\n  color: var(--ids-color-palette-black);\n  margin-bottom: 8px;\n  padding-right: 8px;\n  white-space: nowrap;\n}\n.left-positioned .label[mode=dark] {\n  color: var(--ids-color-palette-white);\n}\n.left-positioned .data {\n  color: var(--ids-color-palette-slate-100);\n}\n\n.top-positioned {\n  display: flex;\n  flex-direction: column;\n}\n.top-positioned .label {\n  color: var(--ids-color-palette-slate-60);\n  margin-bottom: 8px;\n}\n.top-positioned .label[mode=dark] {\n  color: var(--ids-color-palette-slate-30);\n}\n.top-positioned .label[mode=contrast] {\n  color: var(--ids-color-palette-slate-90);\n}\n.top-positioned .data {\n  color: var(--ids-color-palette-slate-100);\n}`;\n        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);\n    //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1sYWJlbC9pZHMtZGF0YS1sYWJlbC5zY3NzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUlBO0FDQUk7RUFDRTs7O0FBS047RUFDRTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTs7QUFJSjtFQUNFOzs7QUFJSjtFQUNFO0VBQ0E7O0FBRUE7RUFDRTtFQUNBOztBQUVBO0VBQ0U7O0FBR0Y7RUFDRTs7QUFJSjtFQUNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29yZS9pZHMtYmFzZS5zY3NzPzFiZjIiLCJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1sYWJlbC9pZHMtZGF0YS1sYWJlbC5zY3NzPzgzNjIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogU2FzcyBzY3NzIHN0eWxlcy4gS2VlcCBCYXNlIHZlcnkgc21hbGwgKi9cbkBpbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9pZHMtaWRlbnRpdHkvZGlzdC90aGVtZS1uZXcvdG9rZW5zL3dlYi90aGVtZS1uZXctbWl4aW5zJztcbkBpbXBvcnQgJy4uL21peGlucy9zYXNzL2lkcy1nZW5lcmFsLW1peGlucyc7XG5cbi8qIEdsb2JhbCB2YXJpYWJsZXMgKG1pZ2h0IHdhbnQgdGhlc2UgdG8gYmVjb21lIHRva2VucykgKi9cbiRicmVha3BvaW50LXh4bDogMTQ0MHB4O1xuJGJyZWFrcG9pbnQteGw6IDEyODBweDtcbiRicmVha3BvaW50LWxnOiAxMDI0cHg7XG4kYnJlYWtwb2ludC1tZDogODQwcHg7XG4kYnJlYWtwb2ludC1zbTogNjAwcHg7XG4kYnJlYWtwb2ludC14czogMzYwcHg7XG5cbiR0cmFuc2l0aW9uLWxlbmd0aDogMjAwbXM7XG4kdHJhbnNpdGlvbi1lYXNlOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpO1xuXG4vLyBGaWVsZCBTaXplc1xuJGlucHV0LXNpemUteHM6IDc1cHg7XG4kaW5wdXQtc2l6ZS1zbTogMTUwcHg7XG4kaW5wdXQtc2l6ZS1tbTogMjI1cHg7XG4kaW5wdXQtc2l6ZS1tZDogMzAwcHg7XG4kaW5wdXQtc2l6ZS1sZzogNDAwcHg7XG4kaW5wdXQtc2l6ZS1mdWxsOiAxMDAlO1xuXG4vLyBGaWVsZCBIZWlnaHRzXG4kaW5wdXQtZmllbGQtaGVpZ2h0LXhzOiAyOHB4O1xuJGlucHV0LWZpZWxkLWhlaWdodC1zbTogMzBweDtcbiRpbnB1dC1maWVsZC1oZWlnaHQtbWQ6IDM4cHg7XG4kaW5wdXQtZmllbGQtaGVpZ2h0LWxnOiA0OHB4O1xuXG4vLyBTb21ldGltZXMgd2UgbmVlZCB0byBcImZhZGVcIiB3aGl0ZSBpbnRvIHRyYW5zcGFyZW5jeSwgc28gd2UgbmVlZCBhXG4vLyBjb21wbGV0ZWx5LXRyYW5zcGFyZW50IFwid2hpdGVcIiBjb2xvciB0byB1c2UgYXMgb25lIGVuZCBvZiBhIGdyYWRpZW50LlxuJHRyYW5zcGFyZW50LXdoaXRlOiByZ2JhKDI1NSAyNTUgMjU1IC8gMCk7XG4iLCJAaW1wb3J0ICcuLi8uLi9jb3JlL2lkcy1iYXNlJztcblxuOmhvc3QoW2xhbmd1YWdlKj0nZnInXSkge1xuICAubGVmdC1wb3NpdGlvbmVkIHtcbiAgICAuY29sb24ge1xuICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgfVxuICB9XG59XG5cbi5sZWZ0LXBvc2l0aW9uZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gIC5sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWlkcy1jb2xvci1wYWxldHRlLWJsYWNrKTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAmW21vZGU9J2RhcmsnXSB7XG4gICAgICBjb2xvcjogdmFyKC0taWRzLWNvbG9yLXBhbGV0dGUtd2hpdGUpO1xuICAgIH1cbiAgfVxuXG4gIC5kYXRhIHtcbiAgICBjb2xvcjogdmFyKC0taWRzLWNvbG9yLXBhbGV0dGUtc2xhdGUtMTAwKTtcbiAgfVxufVxuXG4udG9wLXBvc2l0aW9uZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIC5sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWlkcy1jb2xvci1wYWxldHRlLXNsYXRlLTYwKTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAmW21vZGU9J2RhcmsnXSB7XG4gICAgICBjb2xvcjogdmFyKC0taWRzLWNvbG9yLXBhbGV0dGUtc2xhdGUtMzApO1xuICAgIH1cblxuICAgICZbbW9kZT0nY29udHJhc3QnXSB7XG4gICAgICBjb2xvcjogdmFyKC0taWRzLWNvbG9yLXBhbGV0dGUtc2xhdGUtOTApO1xuICAgIH1cbiAgfVxuXG4gIC5kYXRhIHtcbiAgICBjb2xvcjogdmFyKC0taWRzLWNvbG9yLXBhbGV0dGUtc2xhdGUtMTAwKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-data-label/ids-data-label.scss\n");

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
/******/ 		__webpack_require__.h = () => ("c30130eb833f399b5475")
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
/******/ 			"ids-data-label": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-text_ids-text_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-text_ids-text_ts"], () => (__webpack_require__("./src/components/ids-data-label/demos/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
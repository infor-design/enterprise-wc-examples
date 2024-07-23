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

/***/ "./src/components/ids-data-label/ids-data-label.ts":
/*!*********************************************************!*\
  !*** ./src/components/ids-data-label/ids-data-label.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IdsDataLabel)\n/* harmony export */ });\n/* harmony import */ var _core_ids_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-decorators */ \"./src/core/ids-decorators.ts\");\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _ids_data_label_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ids-data-label.scss */ \"./src/components/ids-data-label/ids-data-label.scss\");\n/* harmony import */ var _mixins_ids_theme_mixin_ids_theme_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/ids-theme-mixin/ids-theme-mixin */ \"./src/mixins/ids-theme-mixin/ids-theme-mixin.ts\");\n/* harmony import */ var _mixins_ids_events_mixin_ids_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/ids-events-mixin/ids-events-mixin */ \"./src/mixins/ids-events-mixin/ids-events-mixin.ts\");\n/* harmony import */ var _mixins_ids_locale_mixin_ids_locale_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/ids-locale-mixin/ids-locale-mixin */ \"./src/mixins/ids-locale-mixin/ids-locale-mixin.ts\");\n/* harmony import */ var _core_ids_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ids-element */ \"./src/core/ids-element.ts\");\n/* harmony import */ var _ids_text_ids_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ids-text/ids-text */ \"./src/components/ids-text/ids-text.ts\");\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __decorateClass = (decorators, target, key, kind) => {\n  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;\n  for (var i = decorators.length - 1, decorator; i >= 0; i--)\n    if (decorator = decorators[i])\n      result = (kind ? decorator(target, key, result) : decorator(result)) || result;\n  if (kind && result)\n    __defProp(target, key, result);\n  return result;\n};\n\n\n\n\n\n\n\n\nlet IdsDataLabel = class extends (0,_mixins_ids_theme_mixin_ids_theme_mixin__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_mixins_ids_locale_mixin_ids_locale_mixin__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_mixins_ids_events_mixin_ids_events_mixin__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_core_ids_element__WEBPACK_IMPORTED_MODULE_6__[\"default\"]))) {\n  constructor() {\n    super();\n    this.state = {\n      labelClass: \"top-positioned\"\n    };\n  }\n  connectedCallback() {\n    super.connectedCallback();\n  }\n  /**\n   * Return the attributes we handle as getters/setters\n   * @returns {Array} The propertires in an array\n   */\n  static get attributes() {\n    return [\n      ...super.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL_POSITION,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LANGUAGE,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.MODE\n    ];\n  }\n  /**\n   * Create the Template for the contents\n   * @returns {string} The template\n   */\n  template() {\n    return `<div class=\"${this.labelClass}\">\n        <ids-text class=\"label\" font-size=\"16\">${this.label}<span class=\"colon\">${this.colon}</span></ids-text>\n        <ids-text class=\"description\" font-size=\"16\"><slot></slot></ids-text>\n      </div>`;\n  }\n  /**\n   * Sets to label\n   * @param {string} value label string\n   */\n  set label(value) {\n    if (value) {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL, value);\n    } else {\n      this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL);\n    }\n    const label = this.container?.querySelector(\".label\");\n    if (label) {\n      label.innerHTML = `${value ?? \"\"}<span class=\"colon\">${this.colon}</span>`;\n    }\n  }\n  get label() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL) ?? \"\";\n  }\n  /**\n   * Sets to label\n   * @param {string} value label string\n   */\n  set labelPosition(value) {\n    if (value) {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL_POSITION, value);\n      if (this.container) {\n        this.container.className = `${value}-positioned`;\n      }\n    }\n  }\n  get labelPosition() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL_POSITION);\n  }\n  /**\n   * @returns {string} css class for data-label\n   */\n  get labelClass() {\n    if (this.labelPosition) {\n      return `${this.labelPosition}-positioned`;\n    }\n    return \"top-positioned\";\n  }\n  /**\n   * @returns {string} css class for data-label\n   */\n  get colon() {\n    return this.labelPosition === \"left\" ? \":\" : \"\";\n  }\n};\nIdsDataLabel = __decorateClass([\n  (0,_core_ids_decorators__WEBPACK_IMPORTED_MODULE_0__.customElement)(\"ids-data-label\"),\n  (0,_core_ids_decorators__WEBPACK_IMPORTED_MODULE_0__.scss)(_ids_data_label_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n], IdsDataLabel);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0YS1sYWJlbC9pZHMtZGF0YS1sYWJlbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNUO0FBQ1I7QUFDTztBQUNDO0FBQ0E7QUFDSjtBQUNoQjtBQVVQLElBQXFCLGVBQXJCLGNBQTBDLG1GQUFhLENBQUMscUZBQWMsQ0FBQyxxRkFBYyxDQUFDLHlEQUFVLENBQUMsQ0FBQyxFQUFFO0FBQUEsRUFDbEcsY0FBYztBQUNaLFVBQU07QUFFTixTQUFLLFFBQVE7QUFBQSxNQUNYLFlBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBRUEsb0JBQW9CO0FBQ2xCLFVBQU0sa0JBQWtCO0FBQUEsRUFDMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsV0FBVyxhQUFhO0FBQ3RCLFdBQU87QUFBQSxNQUNMLEdBQUcsTUFBTTtBQUFBLE1BQ1Qsa0VBQWdCO0FBQUwsTUFDWCwyRUFBeUI7QUFBZCxNQUNYLHFFQUFtQjtBQUFSLE1BQ1gsaUVBQWU7QUFBSixJQUNiO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxXQUFtQjtBQUNqQixXQUFPLGVBQWUsS0FBSztBQUFBLGlEQUNrQixLQUFLLDRCQUE0QixLQUFLO0FBQUE7QUFBQTtBQUFBLEVBR3JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLElBQUksTUFBTSxPQUFlO0FBQ3ZCLFFBQUksT0FBTztBQUNULFdBQUssYUFBYSxrRUFBZ0IsRUFBRSxLQUFLO0FBQUEsSUFDM0MsT0FBTztBQUNMLFdBQUssZ0JBQWdCLGtFQUFnQjtBQUFBLElBQ3ZDO0FBRUEsVUFBTSxRQUFRLEtBQUssV0FBVyxjQUFjLFFBQVE7QUFDcEQsUUFBSSxPQUFPO0FBQ1QsWUFBTSxZQUFZLEdBQUcsU0FBUyx5QkFBeUIsS0FBSztBQUFBLElBQzlEO0FBQUEsRUFDRjtBQUFBLEVBRUEsSUFBSSxRQUFnQjtBQUNsQixXQUFPLEtBQUssYUFBYSxrRUFBZ0IsS0FBSztBQUFBLEVBQ2hEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLElBQUksY0FBYyxPQUFzQjtBQUN0QyxRQUFJLE9BQU87QUFDVCxXQUFLLGFBQWEsMkVBQXlCLEVBQUUsS0FBSztBQUNsRCxVQUFJLEtBQUssV0FBVztBQUNsQixhQUFLLFVBQVUsWUFBWSxHQUFHO0FBQUEsTUFDaEM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsSUFBSSxnQkFBK0I7QUFDakMsV0FBTyxLQUFLLGFBQWEsMkVBQXlCO0FBQUEsRUFDcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLElBQUksYUFBcUI7QUFDdkIsUUFBSSxLQUFLLGVBQWU7QUFDdEIsYUFBTyxHQUFHLEtBQUs7QUFBQSxJQUNqQjtBQUNBLFdBQU87QUFBQSxFQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxJQUFJLFFBQWdCO0FBQ2xCLFdBQU8sS0FBSyxrQkFBa0IsU0FBUyxNQUFNO0FBQUEsRUFDL0M7QUFDRjtBQTVGcUIsZUFBckI7QUFBQSxFQUZDLG1FQUFhLENBQUMsZ0JBQWdCO0FBQUEsRUFDOUIsMERBQUksQ0FBQyw0REFBTTtBQUFBLEdBQ1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1kYXRhLWxhYmVsL2lkcy1kYXRhLWxhYmVsLnRzPzkyYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgc2NzcyB9IGZyb20gJy4uLy4uL2NvcmUvaWRzLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gJy4uLy4uL2NvcmUvaWRzLWF0dHJpYnV0ZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2lkcy1kYXRhLWxhYmVsLnNjc3MnO1xuaW1wb3J0IElkc1RoZW1lTWl4aW4gZnJvbSAnLi4vLi4vbWl4aW5zL2lkcy10aGVtZS1taXhpbi9pZHMtdGhlbWUtbWl4aW4nO1xuaW1wb3J0IElkc0V2ZW50c01peGluIGZyb20gJy4uLy4uL21peGlucy9pZHMtZXZlbnRzLW1peGluL2lkcy1ldmVudHMtbWl4aW4nO1xuaW1wb3J0IElkc0xvY2FsZU1peGluIGZyb20gJy4uLy4uL21peGlucy9pZHMtbG9jYWxlLW1peGluL2lkcy1sb2NhbGUtbWl4aW4nO1xuaW1wb3J0IElkc0VsZW1lbnQgZnJvbSAnLi4vLi4vY29yZS9pZHMtZWxlbWVudCc7XG5pbXBvcnQgJy4uL2lkcy10ZXh0L2lkcy10ZXh0JztcblxuLyoqXG4gKiBJRFMgRGF0YSBMYWJlbCBDb21wb25lbnRcbiAqIEB0eXBlIHtJZHNEYXRhTGFiZWx9XG4gKiBAaW5oZXJpdHMgSWRzRWxlbWVudFxuICogQG1peGVzIElkc1RoZW1lTWl4aW5cbiAqL1xuQGN1c3RvbUVsZW1lbnQoJ2lkcy1kYXRhLWxhYmVsJylcbkBzY3NzKHN0eWxlcylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkc0RhdGFMYWJlbCBleHRlbmRzIElkc1RoZW1lTWl4aW4oSWRzTG9jYWxlTWl4aW4oSWRzRXZlbnRzTWl4aW4oSWRzRWxlbWVudCkpKSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGFiZWxDbGFzczogJ3RvcC1wb3NpdGlvbmVkJyxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGF0dHJpYnV0ZXMgd2UgaGFuZGxlIGFzIGdldHRlcnMvc2V0dGVyc1xuICAgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBwcm9wZXJ0aXJlcyBpbiBhbiBhcnJheVxuICAgKi9cbiAgc3RhdGljIGdldCBhdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAuLi5zdXBlci5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcy5MQUJFTCxcbiAgICAgIGF0dHJpYnV0ZXMuTEFCRUxfUE9TSVRJT04sXG4gICAgICBhdHRyaWJ1dGVzLkxBTkdVQUdFLFxuICAgICAgYXR0cmlidXRlcy5NT0RFXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIFRlbXBsYXRlIGZvciB0aGUgY29udGVudHNcbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHRlbXBsYXRlXG4gICAqL1xuICB0ZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7dGhpcy5sYWJlbENsYXNzfVwiPlxuICAgICAgICA8aWRzLXRleHQgY2xhc3M9XCJsYWJlbFwiIGZvbnQtc2l6ZT1cIjE2XCI+JHt0aGlzLmxhYmVsfTxzcGFuIGNsYXNzPVwiY29sb25cIj4ke3RoaXMuY29sb259PC9zcGFuPjwvaWRzLXRleHQ+XG4gICAgICAgIDxpZHMtdGV4dCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgZm9udC1zaXplPVwiMTZcIj48c2xvdD48L3Nsb3Q+PC9pZHMtdGV4dD5cbiAgICAgIDwvZGl2PmA7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0byBsYWJlbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgbGFiZWwgc3RyaW5nXG4gICAqL1xuICBzZXQgbGFiZWwodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5MQUJFTCwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVzLkxBQkVMKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuY29udGFpbmVyPy5xdWVyeVNlbGVjdG9yKCcubGFiZWwnKTtcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIGxhYmVsLmlubmVySFRNTCA9IGAke3ZhbHVlID8/ICcnfTxzcGFuIGNsYXNzPVwiY29sb25cIj4ke3RoaXMuY29sb259PC9zcGFuPmA7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuTEFCRUwpID8/ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdG8gbGFiZWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIGxhYmVsIHN0cmluZ1xuICAgKi9cbiAgc2V0IGxhYmVsUG9zaXRpb24odmFsdWU6IHN0cmluZyB8IG51bGwpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuTEFCRUxfUE9TSVRJT04sIHZhbHVlKTtcbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSBgJHt2YWx1ZX0tcG9zaXRpb25lZGA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGxhYmVsUG9zaXRpb24oKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuTEFCRUxfUE9TSVRJT04pO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGNzcyBjbGFzcyBmb3IgZGF0YS1sYWJlbFxuICAgKi9cbiAgZ2V0IGxhYmVsQ2xhc3MoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5sYWJlbFBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5sYWJlbFBvc2l0aW9ufS1wb3NpdGlvbmVkYDtcbiAgICB9XG4gICAgcmV0dXJuICd0b3AtcG9zaXRpb25lZCc7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge3N0cmluZ30gY3NzIGNsYXNzIGZvciBkYXRhLWxhYmVsXG4gICAqL1xuICBnZXQgY29sb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbFBvc2l0aW9uID09PSAnbGVmdCcgPyAnOicgOiAnJztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-data-label/ids-data-label.ts\n");

/***/ }),

/***/ "./src/components/ids-expandable-area/demos/side-by-side.ts":
/*!******************************************************************!*\
  !*** ./src/components/ids-expandable-area/demos/side-by-side.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_expandable_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-expandable-area */ \"./src/components/ids-expandable-area/ids-expandable-area.ts\");\n/* harmony import */ var _ids_data_label_ids_data_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ids-data-label/ids-data-label */ \"./src/components/ids-data-label/ids-data-label.ts\");\n/* harmony import */ var _ids_input_ids_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ids-input/ids-input */ \"./src/components/ids-input/ids-input.ts\");\n/* harmony import */ var _ids_toggle_button_ids_toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ids-toggle-button/ids-toggle-button */ \"./src/components/ids-toggle-button/ids-toggle-button.ts\");\n/* harmony import */ var _ids_hyperlink_ids_hyperlink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ids-hyperlink/ids-hyperlink */ \"./src/components/ids-hyperlink/ids-hyperlink.ts\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  document.querySelectorAll(\"ids-toggle-button\").forEach((idsButton) => {\n    idsButton.addEventListener(\"click\", (e) => {\n      e.target.toggle();\n    });\n  });\n});\n$(\"body\").initialize();\n$(\"body\").on(\"initialized\", () => {\n  $(\"#expandable-area-1\").expandablearea({\n    attributes: [\n      {\n        name: \"id\",\n        value: \"expandablearea-id-1\"\n      },\n      {\n        name: \"data-automation-id\",\n        value: \"expandablearea-automation-id-1\"\n      }\n    ]\n  });\n  $(\"#expandable-area-2\").expandablearea({\n    attributes: [\n      {\n        name: \"id\",\n        value: \"expandablearea-id-2\"\n      },\n      {\n        name: \"data-automation-id\",\n        value: \"expandablearea-automation-id-2\"\n      }\n    ]\n  });\n  $(\"#expandable-area-3\").expandablearea({\n    attributes: [\n      {\n        name: \"id\",\n        value: \"expandablearea-id-3\"\n      },\n      {\n        name: \"data-automation-id\",\n        value: \"expandablearea-automation-id-3\"\n      }\n    ]\n  });\n  $(\"#expandable-area-4\").expandablearea({\n    attributes: [\n      {\n        name: \"id\",\n        value: \"expandablearea-id-4\"\n      },\n      {\n        name: \"data-automation-id\",\n        value: \"expandablearea-automation-id-4\"\n      }\n    ]\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZXhwYW5kYWJsZS1hcmVhL2RlbW9zL3NpZGUtYnktc2lkZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTztBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRVAsU0FBUyxpQkFBaUIsb0JBQW9CLE1BQU07QUFFbEQsV0FBUyxpQkFBaUIsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLGNBQWM7QUFDcEUsY0FBVSxpQkFBaUIsU0FBUyxDQUFDLE1BQVc7QUFDOUMsUUFBRSxPQUFPLE9BQU87QUFBQSxJQUNsQixDQUFDO0FBQUEsRUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUdELEVBQUUsTUFBTSxFQUFFLFdBQVc7QUFDckIsRUFBRSxNQUFNLEVBQUUsR0FBRyxlQUFlLE1BQU07QUFDaEMsSUFBRSxvQkFBb0IsRUFBRSxlQUFlO0FBQUEsSUFDckMsWUFBWTtBQUFBLE1BQUM7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNBO0FBQUEsRUFDRixDQUFDO0FBRUQsSUFBRSxvQkFBb0IsRUFBRSxlQUFlO0FBQUEsSUFDckMsWUFBWTtBQUFBLE1BQUM7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNBO0FBQUEsRUFDRixDQUFDO0FBRUQsSUFBRSxvQkFBb0IsRUFBRSxlQUFlO0FBQUEsSUFDckMsWUFBWTtBQUFBLE1BQUM7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNBO0FBQUEsRUFDRixDQUFDO0FBRUQsSUFBRSxvQkFBb0IsRUFBRSxlQUFlO0FBQUEsSUFDckMsWUFBWTtBQUFBLE1BQUM7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNBO0FBQUEsRUFDRixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLWV4cGFuZGFibGUtYXJlYS9kZW1vcy9zaWRlLWJ5LXNpZGUudHM/YzNjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2lkcy1leHBhbmRhYmxlLWFyZWEnO1xuaW1wb3J0ICcuLi8uLi9pZHMtZGF0YS1sYWJlbC9pZHMtZGF0YS1sYWJlbCc7XG5cbi8vIFN1cHBvcnRpbmcgY29tcG9uZW50c1xuaW1wb3J0ICcuLi8uLi9pZHMtaW5wdXQvaWRzLWlucHV0JztcbmltcG9ydCAnLi4vLi4vaWRzLXRvZ2dsZS1idXR0b24vaWRzLXRvZ2dsZS1idXR0b24nO1xuaW1wb3J0ICcuLi8uLi9pZHMtaHlwZXJsaW5rL2lkcy1oeXBlcmxpbmsnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGVzdCBjbGlja2FibGUgbGlua3NcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaWRzLXRvZ2dsZS1idXR0b24nKS5mb3JFYWNoKChpZHNCdXR0b24pID0+IHtcbiAgICBpZHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB7XG4gICAgICBlLnRhcmdldC50b2dnbGUoKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuLy8gSW5pdGlhbGl6ZSB0aGUgNC54XG4kKCdib2R5JykuaW5pdGlhbGl6ZSgpO1xuJCgnYm9keScpLm9uKCdpbml0aWFsaXplZCcsICgpID0+IHtcbiAgJCgnI2V4cGFuZGFibGUtYXJlYS0xJykuZXhwYW5kYWJsZWFyZWEoe1xuICAgIGF0dHJpYnV0ZXM6IFt7XG4gICAgICBuYW1lOiAnaWQnLFxuICAgICAgdmFsdWU6ICdleHBhbmRhYmxlYXJlYS1pZC0xJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2RhdGEtYXV0b21hdGlvbi1pZCcsXG4gICAgICB2YWx1ZTogJ2V4cGFuZGFibGVhcmVhLWF1dG9tYXRpb24taWQtMSdcbiAgICB9XG4gICAgXVxuICB9KTtcblxuICAkKCcjZXhwYW5kYWJsZS1hcmVhLTInKS5leHBhbmRhYmxlYXJlYSh7XG4gICAgYXR0cmlidXRlczogW3tcbiAgICAgIG5hbWU6ICdpZCcsXG4gICAgICB2YWx1ZTogJ2V4cGFuZGFibGVhcmVhLWlkLTInXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGF0YS1hdXRvbWF0aW9uLWlkJyxcbiAgICAgIHZhbHVlOiAnZXhwYW5kYWJsZWFyZWEtYXV0b21hdGlvbi1pZC0yJ1xuICAgIH1cbiAgICBdXG4gIH0pO1xuXG4gICQoJyNleHBhbmRhYmxlLWFyZWEtMycpLmV4cGFuZGFibGVhcmVhKHtcbiAgICBhdHRyaWJ1dGVzOiBbe1xuICAgICAgbmFtZTogJ2lkJyxcbiAgICAgIHZhbHVlOiAnZXhwYW5kYWJsZWFyZWEtaWQtMydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdkYXRhLWF1dG9tYXRpb24taWQnLFxuICAgICAgdmFsdWU6ICdleHBhbmRhYmxlYXJlYS1hdXRvbWF0aW9uLWlkLTMnXG4gICAgfVxuICAgIF1cbiAgfSk7XG5cbiAgJCgnI2V4cGFuZGFibGUtYXJlYS00JykuZXhwYW5kYWJsZWFyZWEoe1xuICAgIGF0dHJpYnV0ZXM6IFt7XG4gICAgICBuYW1lOiAnaWQnLFxuICAgICAgdmFsdWU6ICdleHBhbmRhYmxlYXJlYS1pZC00J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2RhdGEtYXV0b21hdGlvbi1pZCcsXG4gICAgICB2YWx1ZTogJ2V4cGFuZGFibGVhcmVhLWF1dG9tYXRpb24taWQtNCdcbiAgICB9XG4gICAgXVxuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-expandable-area/demos/side-by-side.ts\n");

/***/ }),

/***/ "./src/mixins/ids-hitbox-mixin/ids-hitbox-mixin.ts":
/*!*********************************************************!*\
  !*** ./src/mixins/ids-hitbox-mixin/ids-hitbox-mixin.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_hitbox_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _utils_ids_string_utils_ids_string_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ids-string-utils/ids-string-utils */ \"./src/utils/ids-string-utils/ids-string-utils.ts\");\n\n\nconst IdsHitboxMixin = (superclass) => class extends superclass {\n  constructor(...args) {\n    super(...args);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.HITBOX\n    ];\n  }\n  connectedCallback() {\n    super.connectedCallback?.();\n    this.#setHitbox();\n  }\n  /**\n   * Sets the checkbox to add hitbox style.\n   * @param {boolean|string} value If true, it will apply the hitbox stylings.\n   */\n  set hitbox(value) {\n    const val = (0,_utils_ids_string_utils_ids_string_utils__WEBPACK_IMPORTED_MODULE_1__.stringToBool)(value);\n    if (val) {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.HITBOX, val.toString());\n    } else {\n      this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.HITBOX);\n    }\n    this.#setHitbox();\n  }\n  get hitbox() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.HITBOX);\n  }\n  #setHitbox() {\n    this.container?.classList.toggle(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.HITBOX, Boolean(this.hitbox));\n  }\n};\nvar ids_hitbox_mixin_default = IdsHitboxMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1oaXRib3gtbWl4aW4vaWRzLWhpdGJveC1taXhpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkI7QUFFRTtBQVE3QixNQUFNLGlCQUFpQixDQUErQixlQUFrQixjQUFjLFdBQVc7QUFBQSxFQUMvRixlQUFlLE1BQWE7QUFDMUIsVUFBTSxHQUFHLElBQUk7QUFBQSxFQUNmO0FBQUEsRUFFQSxXQUFXLGFBQWE7QUFDdEIsV0FBTztBQUFBLE1BQ0wsR0FBSSxXQUFtQjtBQUFBLE1BQ3ZCLG1FQUFpQjtBQUFOLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFFQSxvQkFBMEI7QUFDeEIsVUFBTSxvQkFBb0I7QUFDMUIsU0FBSyxXQUFXO0FBQUEsRUFDbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsSUFBSSxPQUFPLE9BQU87QUFDaEIsVUFBTSxNQUFNLHNGQUFZLENBQUMsS0FBSztBQUM5QixRQUFJLEtBQUs7QUFDUCxXQUFLLGFBQWEsbUVBQWlCLEVBQUUsSUFBSSxTQUFTLENBQUM7QUFBQSxJQUNyRCxPQUFPO0FBQ0wsV0FBSyxnQkFBZ0IsbUVBQWlCO0FBQUEsSUFDeEM7QUFFQSxTQUFLLFdBQVc7QUFBQSxFQUNsQjtBQUFBLEVBRUEsSUFBSSxTQUFTO0FBQUUsV0FBTyxLQUFLLGFBQWEsbUVBQWlCO0FBQUEsRUFBRztBQUFBLEVBRTVELGFBQWE7QUFDWCxTQUFLLFdBQVcsVUFBVSxPQUFPLG1FQUFpQixFQUFFLFFBQVEsS0FBSyxNQUFNLENBQUM7QUFBQSxFQUMxRTtBQUNGO0FBRUEsSUFBTywyQkFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL21peGlucy9pZHMtaGl0Ym94LW1peGluL2lkcy1oaXRib3gtbWl4aW4udHM/YTcxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtYXR0cmlidXRlcyc7XG5pbXBvcnQgeyBJZHNCYXNlQ29uc3RydWN0b3IgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1lbGVtZW50JztcbmltcG9ydCB7IHN0cmluZ1RvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzL2lkcy1zdHJpbmctdXRpbHMvaWRzLXN0cmluZy11dGlscyc7XG5cbi8qKlxuICogQSBtaXhpbiB0aGF0IHdpbGwgYWRkIGhpdGJveCBzdHlsaW5ncyB0byB0aGUgY29tcG9uZW50IGVsZW1lbnQuXG4gKiBAbWl4aW4gSWRzSGl0Ym94TWl4aW5cbiAqIEBwYXJhbSB7YW55fSBzdXBlcmNsYXNzIEFjY2VwdHMgYSBzdXBlcmNsYXNzIGFuZCBjcmVhdGVzIGEgbmV3IHN1YmNsYXNzIGZyb20gaXQuXG4gKiBAcmV0dXJucyB7YW55fSBUaGUgZXh0ZW5kZWQgb2JqZWN0XG4gKi9cbmNvbnN0IElkc0hpdGJveE1peGluID0gPFQgZXh0ZW5kcyBJZHNCYXNlQ29uc3RydWN0b3I+KHN1cGVyY2xhc3M6IFQpID0+IGNsYXNzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLihzdXBlcmNsYXNzIGFzIGFueSkuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMuSElUQk9YXG4gICAgXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrPy4oKTtcbiAgICB0aGlzLiNzZXRIaXRib3goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjaGVja2JveCB0byBhZGQgaGl0Ym94IHN0eWxlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfSB2YWx1ZSBJZiB0cnVlLCBpdCB3aWxsIGFwcGx5IHRoZSBoaXRib3ggc3R5bGluZ3MuXG4gICAqL1xuICBzZXQgaGl0Ym94KHZhbHVlKSB7XG4gICAgY29uc3QgdmFsID0gc3RyaW5nVG9Cb29sKHZhbHVlKTtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLkhJVEJPWCwgdmFsLnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVzLkhJVEJPWCk7XG4gICAgfVxuXG4gICAgdGhpcy4jc2V0SGl0Ym94KCk7XG4gIH1cblxuICBnZXQgaGl0Ym94KCkgeyByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5ISVRCT1gpOyB9XG5cbiAgI3NldEhpdGJveCgpIHtcbiAgICB0aGlzLmNvbnRhaW5lcj8uY2xhc3NMaXN0LnRvZ2dsZShhdHRyaWJ1dGVzLkhJVEJPWCwgQm9vbGVhbih0aGlzLmhpdGJveCkpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJZHNIaXRib3hNaXhpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mixins/ids-hitbox-mixin/ids-hitbox-mixin.ts\n");

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
/******/ 		__webpack_require__.h = () => ("7d4191aed3ffbdb26091")
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
/******/ 			"ids-expandable-area-side-by-side": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b"], () => (__webpack_require__("./src/components/ids-expandable-area/demos/side-by-side.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
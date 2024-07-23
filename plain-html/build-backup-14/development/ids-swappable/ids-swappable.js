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

/***/ "./src/components/ids-swappable/demos/index.ts":
/*!*****************************************************!*\
  !*** ./src/components/ids-swappable/demos/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_swappable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-swappable */ \"./src/components/ids-swappable/ids-swappable.ts\");\n/* harmony import */ var _ids_swappable_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ids-swappable-item */ \"./src/components/ids-swappable/ids-swappable-item.ts\");\n/* harmony import */ var _ids_text_ids_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ids-text/ids-text */ \"./src/components/ids-text/ids-text.ts\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtc3dhcHBhYmxlL2RlbW9zL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1zd2FwcGFibGUvZGVtb3MvaW5kZXgudHM/NTlhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2lkcy1zd2FwcGFibGUnO1xuaW1wb3J0ICcuLi9pZHMtc3dhcHBhYmxlLWl0ZW0nO1xuaW1wb3J0ICcuLi8uLi9pZHMtdGV4dC9pZHMtdGV4dCc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-swappable/demos/index.ts\n");

/***/ }),

/***/ "./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts":
/*!***********************************************************************!*\
  !*** ./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_color_variant_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ids-xss-utils/ids-xss-utils */ \"./src/utils/ids-xss-utils/ids-xss-utils.ts\");\n\n\nconst IdsColorVariantMixin = (superclass) => class extends superclass {\n  constructor(...args) {\n    super(...args);\n    if (!this.state) {\n      this.state = {};\n    }\n    this.state.colorVariant = null;\n  }\n  connectedCallback() {\n    super.connectedCallback();\n    if (this.colorVariant)\n      this.#refreshColorVariant(null, this.colorVariant);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT\n    ];\n  }\n  /**\n   * @returns {Array<string>} List of available color variants for this component\n   */\n  colorVariants = [];\n  /**\n   * @returns {string|null} the name of the color variant currently applied\n   */\n  get colorVariant() {\n    return this.state?.colorVariant;\n  }\n  /**\n   * @param {string | null} val the name of the color variant to be applied\n   */\n  set colorVariant(val) {\n    let safeValue = null;\n    if (typeof val === \"string\") {\n      safeValue = (0,_utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__.stripHTML)(val);\n    }\n    const currentValue = this.state.colorVariant;\n    if (safeValue && currentValue !== safeValue) {\n      if (this.colorVariants.includes(safeValue)) {\n        this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT, `${safeValue}`);\n      } else {\n        this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT);\n        safeValue = null;\n      }\n      this.state.colorVariant = safeValue;\n      this.#refreshColorVariant(currentValue, safeValue);\n    }\n  }\n  /**\n   * Refreshes the component's color variant state, driven by\n   * a CSS class on the WebComponent's `container` element\n   * @param {string} oldVariantName the variant name to \"remove\" from the style\n   * @param {string} newVariantName the variant name to \"add\" to the style\n   * @returns {void}\n   */\n  #refreshColorVariant(oldVariantName, newVariantName) {\n    if (!this.container) {\n      return;\n    }\n    const cl = this.container?.classList;\n    if (oldVariantName)\n      cl?.remove(`color-variant-${oldVariantName}`);\n    if (newVariantName)\n      cl?.add(`color-variant-${newVariantName}`);\n    if (typeof this.onColorVariantRefresh === \"function\") {\n      this.onColorVariantRefresh(newVariantName);\n    }\n  }\n};\nvar ids_color_variant_mixin_default = IdsColorVariantMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1jb2xvci12YXJpYW50LW1peGluL2lkcy1jb2xvci12YXJpYW50LW1peGluLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUVEO0FBa0IxQixNQUFNLHVCQUF1QixDQUF3QixlQUFrQixjQUFjLFdBQVc7QUFBQSxFQUM5RixlQUFlLE1BQWE7QUFDMUIsVUFBTSxHQUFHLElBQUk7QUFFYixRQUFJLENBQUMsS0FBSyxPQUFPO0FBQ2YsV0FBSyxRQUFRLENBQUM7QUFBQSxJQUNoQjtBQUNBLFNBQUssTUFBTSxlQUFlO0FBQUEsRUFDNUI7QUFBQSxFQUVBLG9CQUFvQjtBQUNsQixVQUFNLGtCQUFrQjtBQUN4QixRQUFJLEtBQUs7QUFBYyxXQUFLLHFCQUFxQixNQUFNLEtBQUssWUFBWTtBQUFBLEVBQzFFO0FBQUEsRUFFQSxXQUFXLGFBQWE7QUFDdEIsV0FBTztBQUFBLE1BQ0wsR0FBSSxXQUFtQjtBQUFBLE1BQ3ZCLDBFQUF3QjtBQUFiLElBQ2I7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxnQkFBK0IsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS2hDLElBQUksZUFBZTtBQUNqQixXQUFPLEtBQUssT0FBTztBQUFBLEVBQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxJQUFJLGFBQWEsS0FBb0I7QUFDbkMsUUFBSSxZQUFpQjtBQUNyQixRQUFJLE9BQU8sUUFBUSxVQUFVO0FBQzNCLGtCQUFZLDZFQUFTLENBQUMsR0FBRztBQUFBLElBQzNCO0FBRUEsVUFBTSxlQUFlLEtBQUssTUFBTTtBQUNoQyxRQUFJLGFBQWEsaUJBQWlCLFdBQVc7QUFDM0MsVUFBSSxLQUFLLGNBQWMsU0FBUyxTQUFTLEdBQUc7QUFDMUMsYUFBSyxhQUFhLDBFQUF3QixFQUFFLEdBQUcsV0FBVztBQUFBLE1BQzVELE9BQU87QUFDTCxhQUFLLGdCQUFnQiwwRUFBd0I7QUFDN0Msb0JBQVk7QUFBQSxNQUNkO0FBRUEsV0FBSyxNQUFNLGVBQWU7QUFDMUIsV0FBSyxxQkFBcUIsY0FBYyxTQUFTO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVNBLHFCQUFxQixnQkFBZ0MsZ0JBQXNDO0FBQ3pGLFFBQUksQ0FBQyxLQUFLLFdBQVc7QUFDbkI7QUFBQSxJQUNGO0FBRUEsVUFBTSxLQUFLLEtBQUssV0FBVztBQUUzQixRQUFJO0FBQWdCLFVBQUksT0FBTyxpQkFBaUIsZ0JBQWdCO0FBQ2hFLFFBQUk7QUFBZ0IsVUFBSSxJQUFJLGlCQUFpQixnQkFBZ0I7QUFHN0QsUUFBSSxPQUFPLEtBQUssMEJBQTBCLFlBQVk7QUFDcEQsV0FBSyxzQkFBc0IsY0FBYztBQUFBLElBQzNDO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxrQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL21peGlucy9pZHMtY29sb3ItdmFyaWFudC1taXhpbi9pZHMtY29sb3ItdmFyaWFudC1taXhpbi50cz9hZWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0dHJpYnV0ZXMgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1hdHRyaWJ1dGVzJztcbmltcG9ydCB7IElkc0NvbnN0cnVjdG9yIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtZWxlbWVudCc7XG5pbXBvcnQgeyBzdHJpcEhUTUwgfSBmcm9tICcuLi8uLi91dGlscy9pZHMteHNzLXV0aWxzL2lkcy14c3MtdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yVmFyaWFudEhhbmRsZXIge1xuICAvLyBhcyBpbnN0YW5jZSBmdW5jdGlvblxuICBvbkNvbG9yVmFyaWFudFJlZnJlc2g/KHZhcmlhbnROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKTogdm9pZDtcbiAgLy8gYXMgaW5zdGFuY2UgcHJvcGVydHlcbiAgb25Db2xvclZhcmlhbnRSZWZyZXNoPzogKHZhcmlhbnROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSA9PiB2b2lkO1xufVxuXG50eXBlIENvbnN0cmFpbnRzID0gSWRzQ29uc3RydWN0b3I8Q29sb3JWYXJpYW50SGFuZGxlcj47XG5cbi8qKlxuICogQSBtaXhpbiB0aGF0IHdpbGwgcHJvdmlkZSB0aGUgY29udGFpbmVyIGVsZW1lbnQgb2YgYW4gSURTIENvbXBvbmVudCB3aXRoIGEgY2xhc3NcbiAqIHJlc2VydmVkIGZvciBmbGlwcGluZyB0aGUgZm9yZWdyb3VuZCBjb2xvciAodGV4dCBjb2xvciwgaWNvbiBmaWxsLCBldGMpIHRvIGFuIGFsdGVybmF0ZSxcbiAqIGNvbnRyYXN0aW5nIGNvbG9yLiAgVGhpcyBhbGxvd3MgZWFzeSBpbnRlZ3JhdGlvbiB3aXRoIGFsdGVybmF0ZSBsYXlvdXRzLCBoZWFkZXJzLCBhcHAgbWVudSwgZXRjLlxuICogQHBhcmFtIHthbnl9IHN1cGVyY2xhc3MgQWNjZXB0cyBhIHN1cGVyY2xhc3MgYW5kIGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3MgZnJvbSBpdFxuICogQHJldHVybnMge2FueX0gVGhlIGV4dGVuZGVkIG9iamVjdFxuICovXG5jb25zdCBJZHNDb2xvclZhcmlhbnRNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RyYWludHM+KHN1cGVyY2xhc3M6IFQpID0+IGNsYXNzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5jb2xvclZhcmlhbnQgPSBudWxsO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5jb2xvclZhcmlhbnQpIHRoaXMuI3JlZnJlc2hDb2xvclZhcmlhbnQobnVsbCwgdGhpcy5jb2xvclZhcmlhbnQpO1xuICB9XG5cbiAgc3RhdGljIGdldCBhdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAuLi4oc3VwZXJjbGFzcyBhcyBhbnkpLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzLkNPTE9SX1ZBUklBTlRcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtBcnJheTxzdHJpbmc+fSBMaXN0IG9mIGF2YWlsYWJsZSBjb2xvciB2YXJpYW50cyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICovXG4gIGNvbG9yVmFyaWFudHM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAvKipcbiAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSB0aGUgbmFtZSBvZiB0aGUgY29sb3IgdmFyaWFudCBjdXJyZW50bHkgYXBwbGllZFxuICAgKi9cbiAgZ2V0IGNvbG9yVmFyaWFudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZT8uY29sb3JWYXJpYW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gdmFsIHRoZSBuYW1lIG9mIHRoZSBjb2xvciB2YXJpYW50IHRvIGJlIGFwcGxpZWRcbiAgICovXG4gIHNldCBjb2xvclZhcmlhbnQodmFsOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgbGV0IHNhZmVWYWx1ZTogYW55ID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNhZmVWYWx1ZSA9IHN0cmlwSFRNTCh2YWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuc3RhdGUuY29sb3JWYXJpYW50O1xuICAgIGlmIChzYWZlVmFsdWUgJiYgY3VycmVudFZhbHVlICE9PSBzYWZlVmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmNvbG9yVmFyaWFudHMuaW5jbHVkZXMoc2FmZVZhbHVlKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLkNPTE9SX1ZBUklBTlQsIGAke3NhZmVWYWx1ZX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZXMuQ09MT1JfVkFSSUFOVCk7XG4gICAgICAgIHNhZmVWYWx1ZSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUuY29sb3JWYXJpYW50ID0gc2FmZVZhbHVlO1xuICAgICAgdGhpcy4jcmVmcmVzaENvbG9yVmFyaWFudChjdXJyZW50VmFsdWUsIHNhZmVWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyB0aGUgY29tcG9uZW50J3MgY29sb3IgdmFyaWFudCBzdGF0ZSwgZHJpdmVuIGJ5XG4gICAqIGEgQ1NTIGNsYXNzIG9uIHRoZSBXZWJDb21wb25lbnQncyBgY29udGFpbmVyYCBlbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRWYXJpYW50TmFtZSB0aGUgdmFyaWFudCBuYW1lIHRvIFwicmVtb3ZlXCIgZnJvbSB0aGUgc3R5bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1ZhcmlhbnROYW1lIHRoZSB2YXJpYW50IG5hbWUgdG8gXCJhZGRcIiB0byB0aGUgc3R5bGVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICAjcmVmcmVzaENvbG9yVmFyaWFudChvbGRWYXJpYW50TmFtZT86IHN0cmluZyB8IG51bGwsIG5ld1ZhcmlhbnROYW1lPzogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjbCA9IHRoaXMuY29udGFpbmVyPy5jbGFzc0xpc3Q7XG5cbiAgICBpZiAob2xkVmFyaWFudE5hbWUpIGNsPy5yZW1vdmUoYGNvbG9yLXZhcmlhbnQtJHtvbGRWYXJpYW50TmFtZX1gKTtcbiAgICBpZiAobmV3VmFyaWFudE5hbWUpIGNsPy5hZGQoYGNvbG9yLXZhcmlhbnQtJHtuZXdWYXJpYW50TmFtZX1gKTtcblxuICAgIC8vIEZpcmUgb3B0aW9uYWwgY2FsbGJhY2tcbiAgICBpZiAodHlwZW9mIHRoaXMub25Db2xvclZhcmlhbnRSZWZyZXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9uQ29sb3JWYXJpYW50UmVmcmVzaChuZXdWYXJpYW50TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJZHNDb2xvclZhcmlhbnRNaXhpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts\n");

/***/ }),

/***/ "./src/mixins/ids-selection-mixin/ids-selection-mixin.ts":
/*!***************************************************************!*\
  !*** ./src/mixins/ids-selection-mixin/ids-selection-mixin.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_selection_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n\nconst IdsSelectionMixin = (superclass) => class extends superclass {\n  constructor(...args) {\n    super(...args);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.SELECTED,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.SELECTION,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.PRE_SELECTED\n    ];\n  }\n  connectedCallback() {\n    super.connectedCallback?.();\n  }\n  /**\n   * Set the selection to a particular string\n   * @param {string} value The selection value\n   */\n  set selection(value) {\n    this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.SELECTION, String(value));\n    if (value === \"multiple\" || value === \"single\" || value === \"mixed\") {\n      this.container?.classList.add(\"is-selectable\");\n    } else {\n      this.container?.classList.remove(\"is-selectable\");\n    }\n  }\n  get selection() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.SELECTION);\n  }\n  /**\n   * Set the selected to a boolean value\n   * @param {boolean} value The selected value\n   */\n  set selected(value) {\n    this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.SELECTED, String(value));\n    if (this.selection === \"multiple\" || this.selection === \"single\" || this.selection === \"mixed\") {\n      this.container?.classList[value === \"true\" ? \"add\" : \"remove\"](\"is-selected\");\n    }\n  }\n  get selected() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.SELECTED);\n  }\n  /**\n   * Set the preselected to a boolean value\n   * @param {boolean} value The preselected value\n   */\n  set preselected(value) {\n    this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.PRE_SELECTED, String(value));\n    if (this.selection === \"mixed\") {\n      this.container?.classList[value === \"true\" ? \"add\" : \"remove\"](\"pre-selected\");\n    }\n  }\n  get preselected() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.PRE_SELECTED);\n  }\n};\nvar ids_selection_mixin_default = IdsSelectionMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1zZWxlY3Rpb24tbWl4aW4vaWRzLXNlbGVjdGlvbi1taXhpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQjtBQVMzQixNQUFNLG9CQUFvQixDQUErQixlQUFrQixjQUFjLFdBQVc7QUFBQSxFQUNsRyxlQUFlLE1BQWE7QUFDMUIsVUFBTSxHQUFHLElBQUk7QUFBQSxFQUNmO0FBQUEsRUFFQSxXQUFXLGFBQWE7QUFDdEIsV0FBTztBQUFBLE1BQ0wsR0FBSSxXQUFtQjtBQUFBLE1BQ3ZCLHFFQUFtQjtBQUFSLE1BQ1gsc0VBQW9CO0FBQVQsTUFDWCx5RUFBdUI7QUFBWixJQUNiO0FBQUEsRUFDRjtBQUFBLEVBRUEsb0JBQW9CO0FBQ2xCLFVBQU0sb0JBQW9CO0FBQUEsRUFDNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsSUFBSSxVQUFVLE9BQU87QUFDbkIsU0FBSyxhQUFhLHNFQUFvQixFQUFFLE9BQU8sS0FBSyxDQUFDO0FBRXJELFFBQUksVUFBVSxjQUFjLFVBQVUsWUFBWSxVQUFVLFNBQVM7QUFDbkUsV0FBSyxXQUFXLFVBQVUsSUFBSSxlQUFlO0FBQUEsSUFDL0MsT0FBTztBQUNMLFdBQUssV0FBVyxVQUFVLE9BQU8sZUFBZTtBQUFBLElBQ2xEO0FBQUEsRUFDRjtBQUFBLEVBRUEsSUFBSSxZQUFZO0FBQUUsV0FBTyxLQUFLLGFBQWEsc0VBQW9CO0FBQUEsRUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNbEUsSUFBSSxTQUFTLE9BQU87QUFDbEIsU0FBSyxhQUFhLHFFQUFtQixFQUFFLE9BQU8sS0FBSyxDQUFDO0FBRXBELFFBQUksS0FBSyxjQUFjLGNBQWMsS0FBSyxjQUFjLFlBQVksS0FBSyxjQUFjLFNBQVM7QUFDOUYsV0FBSyxXQUFXLFVBQVUsVUFBVSxTQUFTLFFBQVEsUUFBUSxFQUFFLGFBQWE7QUFBQSxJQUM5RTtBQUFBLEVBQ0Y7QUFBQSxFQUVBLElBQUksV0FBVztBQUFFLFdBQU8sS0FBSyxhQUFhLHFFQUFtQjtBQUFBLEVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTWhFLElBQUksWUFBWSxPQUFPO0FBQ3JCLFNBQUssYUFBYSx5RUFBdUIsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUV4RCxRQUFJLEtBQUssY0FBYyxTQUFTO0FBQzlCLFdBQUssV0FBVyxVQUFVLFVBQVUsU0FBUyxRQUFRLFFBQVEsRUFBRSxjQUFjO0FBQUEsSUFDL0U7QUFBQSxFQUNGO0FBQUEsRUFFQSxJQUFJLGNBQWM7QUFBRSxXQUFPLEtBQUssYUFBYSx5RUFBdUI7QUFBQSxFQUFHO0FBQ3pFO0FBRUEsSUFBTyw4QkFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL21peGlucy9pZHMtc2VsZWN0aW9uLW1peGluL2lkcy1zZWxlY3Rpb24tbWl4aW4udHM/N2E5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtYXR0cmlidXRlcyc7XG5pbXBvcnQgeyBJZHNCYXNlQ29uc3RydWN0b3IgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1lbGVtZW50JztcblxuLyoqXG4vKipcbiAqIEEgbWl4aW4gdGhhdCBhZGRzIHNlbGVjdGlvbiBmdW5jdGlvbmFsaXR5IHRvIGNvbXBvbmVudHNcbiAqIEBwYXJhbSB7YW55fSBzdXBlcmNsYXNzIEFjY2VwdHMgYSBzdXBlcmNsYXNzIGFuZCBjcmVhdGVzIGEgbmV3IHN1YmNsYXNzIGZyb20gaXRcbiAqIEByZXR1cm5zIHthbnl9IFRoZSBleHRlbmRlZCBvYmplY3RcbiAqL1xuY29uc3QgSWRzU2VsZWN0aW9uTWl4aW4gPSA8VCBleHRlbmRzIElkc0Jhc2VDb25zdHJ1Y3Rvcj4oc3VwZXJjbGFzczogVCkgPT4gY2xhc3MgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcbiAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgYXR0cmlidXRlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uKHN1cGVyY2xhc3MgYXMgYW55KS5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcy5TRUxFQ1RFRCxcbiAgICAgIGF0dHJpYnV0ZXMuU0VMRUNUSU9OLFxuICAgICAgYXR0cmlidXRlcy5QUkVfU0VMRUNURUQsXG4gICAgXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrPy4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHNlbGVjdGlvbiB0byBhIHBhcnRpY3VsYXIgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgc2VsZWN0aW9uIHZhbHVlXG4gICAqL1xuICBzZXQgc2VsZWN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5TRUxFQ1RJT04sIFN0cmluZyh2YWx1ZSkpO1xuXG4gICAgaWYgKHZhbHVlID09PSAnbXVsdGlwbGUnIHx8IHZhbHVlID09PSAnc2luZ2xlJyB8fCB2YWx1ZSA9PT0gJ21peGVkJykge1xuICAgICAgdGhpcy5jb250YWluZXI/LmNsYXNzTGlzdC5hZGQoJ2lzLXNlbGVjdGFibGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXNlbGVjdGFibGUnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2VsZWN0aW9uKCkgeyByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5TRUxFQ1RJT04pOyB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc2VsZWN0ZWQgdG8gYSBib29sZWFuIHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgVGhlIHNlbGVjdGVkIHZhbHVlXG4gICAqL1xuICBzZXQgc2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLlNFTEVDVEVELCBTdHJpbmcodmFsdWUpKTtcblxuICAgIGlmICh0aGlzLnNlbGVjdGlvbiA9PT0gJ211bHRpcGxlJyB8fCB0aGlzLnNlbGVjdGlvbiA9PT0gJ3NpbmdsZScgfHwgdGhpcy5zZWxlY3Rpb24gPT09ICdtaXhlZCcpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyPy5jbGFzc0xpc3RbdmFsdWUgPT09ICd0cnVlJyA/ICdhZGQnIDogJ3JlbW92ZSddKCdpcy1zZWxlY3RlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpIHsgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuU0VMRUNURUQpOyB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcHJlc2VsZWN0ZWQgdG8gYSBib29sZWFuIHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgVGhlIHByZXNlbGVjdGVkIHZhbHVlXG4gICAqL1xuICBzZXQgcHJlc2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLlBSRV9TRUxFQ1RFRCwgU3RyaW5nKHZhbHVlKSk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3Rpb24gPT09ICdtaXhlZCcpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyPy5jbGFzc0xpc3RbdmFsdWUgPT09ICd0cnVlJyA/ICdhZGQnIDogJ3JlbW92ZSddKCdwcmUtc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcHJlc2VsZWN0ZWQoKSB7IHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLlBSRV9TRUxFQ1RFRCk7IH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IElkc1NlbGVjdGlvbk1peGluO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/mixins/ids-selection-mixin/ids-selection-mixin.ts\n");

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
/******/ 			"ids-swappable": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-text_ids-text_ts","src_components_ids-swappable_ids-swappable-item_ts-src_components_ids-swappable_ids-swappable_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-text_ids-text_ts","src_components_ids-swappable_ids-swappable-item_ts-src_components_ids-swappable_ids-swappable_ts"], () => (__webpack_require__("./src/components/ids-swappable/demos/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
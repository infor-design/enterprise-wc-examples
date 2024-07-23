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

/***/ "./src/components/ids-hyperlink/demos/example.ts":
/*!*******************************************************!*\
  !*** ./src/components/ids-hyperlink/demos/example.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_hyperlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-hyperlink */ \"./src/components/ids-hyperlink/ids-hyperlink.ts\");\n\nconst link = document.querySelector(\"#link-no-href\");\nlink?.addEventListener(\"click\", (e) => {\n  console.info(\"No href link has been clicked\", e);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtaHlwZXJsaW5rL2RlbW9zL2V4YW1wbGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBTztBQUdQLE1BQU0sT0FBTyxTQUFTLGNBQTRCLGVBQWU7QUFFakUsTUFBTSxpQkFBaUIsU0FBUyxDQUFDLE1BQU07QUFDckMsVUFBUSxLQUFLLGlDQUFpQyxDQUFDO0FBQ2pELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1oeXBlcmxpbmsvZGVtb3MvZXhhbXBsZS50cz82ZDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vaWRzLWh5cGVybGluayc7XG5pbXBvcnQgdHlwZSBJZHNIeXBlcmxpbmsgZnJvbSAnLi4vaWRzLWh5cGVybGluayc7XG5cbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPElkc0h5cGVybGluaz4oJyNsaW5rLW5vLWhyZWYnKTtcblxubGluaz8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zb2xlLmluZm8oJ05vIGhyZWYgbGluayBoYXMgYmVlbiBjbGlja2VkJywgZSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-hyperlink/demos/example.ts\n");

/***/ }),

/***/ "./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts":
/*!***********************************************************************!*\
  !*** ./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_color_variant_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ids-xss-utils/ids-xss-utils */ \"./src/utils/ids-xss-utils/ids-xss-utils.ts\");\n\n\nconst IdsColorVariantMixin = (superclass) => class extends superclass {\n  constructor(...args) {\n    super(...args);\n    if (!this.state) {\n      this.state = {};\n    }\n    this.state.colorVariant = null;\n  }\n  connectedCallback() {\n    super.connectedCallback();\n    if (this.colorVariant)\n      this.#refreshColorVariant(null, this.colorVariant);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT\n    ];\n  }\n  /**\n   * @returns {Array<string>} List of available color variants for this component\n   */\n  colorVariants = [];\n  /**\n   * @returns {string|null} the name of the color variant currently applied\n   */\n  get colorVariant() {\n    return this.state?.colorVariant;\n  }\n  /**\n   * @param {string | null} val the name of the color variant to be applied\n   */\n  set colorVariant(val) {\n    let safeValue = null;\n    if (typeof val === \"string\") {\n      safeValue = (0,_utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__.stripHTML)(val);\n    }\n    const currentValue = this.state.colorVariant;\n    if (safeValue && currentValue !== safeValue) {\n      if (this.colorVariants.includes(safeValue)) {\n        this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT, `${safeValue}`);\n      } else {\n        this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT);\n        safeValue = null;\n      }\n      this.state.colorVariant = safeValue;\n      this.#refreshColorVariant(currentValue, safeValue);\n    }\n  }\n  /**\n   * Refreshes the component's color variant state, driven by\n   * a CSS class on the WebComponent's `container` element\n   * @param {string} oldVariantName the variant name to \"remove\" from the style\n   * @param {string} newVariantName the variant name to \"add\" to the style\n   * @returns {void}\n   */\n  #refreshColorVariant(oldVariantName, newVariantName) {\n    if (!this.container) {\n      return;\n    }\n    const cl = this.container?.classList;\n    if (oldVariantName)\n      cl?.remove(`color-variant-${oldVariantName}`);\n    if (newVariantName)\n      cl?.add(`color-variant-${newVariantName}`);\n    if (typeof this.onColorVariantRefresh === \"function\") {\n      this.onColorVariantRefresh(newVariantName);\n    }\n  }\n};\nvar ids_color_variant_mixin_default = IdsColorVariantMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1jb2xvci12YXJpYW50LW1peGluL2lkcy1jb2xvci12YXJpYW50LW1peGluLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUVEO0FBa0IxQixNQUFNLHVCQUF1QixDQUF3QixlQUFrQixjQUFjLFdBQVc7QUFBQSxFQUM5RixlQUFlLE1BQWE7QUFDMUIsVUFBTSxHQUFHLElBQUk7QUFFYixRQUFJLENBQUMsS0FBSyxPQUFPO0FBQ2YsV0FBSyxRQUFRLENBQUM7QUFBQSxJQUNoQjtBQUNBLFNBQUssTUFBTSxlQUFlO0FBQUEsRUFDNUI7QUFBQSxFQUVBLG9CQUFvQjtBQUNsQixVQUFNLGtCQUFrQjtBQUN4QixRQUFJLEtBQUs7QUFBYyxXQUFLLHFCQUFxQixNQUFNLEtBQUssWUFBWTtBQUFBLEVBQzFFO0FBQUEsRUFFQSxXQUFXLGFBQWE7QUFDdEIsV0FBTztBQUFBLE1BQ0wsR0FBSSxXQUFtQjtBQUFBLE1BQ3ZCLDBFQUF3QjtBQUFiLElBQ2I7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxnQkFBK0IsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS2hDLElBQUksZUFBZTtBQUNqQixXQUFPLEtBQUssT0FBTztBQUFBLEVBQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxJQUFJLGFBQWEsS0FBb0I7QUFDbkMsUUFBSSxZQUFpQjtBQUNyQixRQUFJLE9BQU8sUUFBUSxVQUFVO0FBQzNCLGtCQUFZLDZFQUFTLENBQUMsR0FBRztBQUFBLElBQzNCO0FBRUEsVUFBTSxlQUFlLEtBQUssTUFBTTtBQUNoQyxRQUFJLGFBQWEsaUJBQWlCLFdBQVc7QUFDM0MsVUFBSSxLQUFLLGNBQWMsU0FBUyxTQUFTLEdBQUc7QUFDMUMsYUFBSyxhQUFhLDBFQUF3QixFQUFFLEdBQUcsV0FBVztBQUFBLE1BQzVELE9BQU87QUFDTCxhQUFLLGdCQUFnQiwwRUFBd0I7QUFDN0Msb0JBQVk7QUFBQSxNQUNkO0FBRUEsV0FBSyxNQUFNLGVBQWU7QUFDMUIsV0FBSyxxQkFBcUIsY0FBYyxTQUFTO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVNBLHFCQUFxQixnQkFBZ0MsZ0JBQXNDO0FBQ3pGLFFBQUksQ0FBQyxLQUFLLFdBQVc7QUFDbkI7QUFBQSxJQUNGO0FBRUEsVUFBTSxLQUFLLEtBQUssV0FBVztBQUUzQixRQUFJO0FBQWdCLFVBQUksT0FBTyxpQkFBaUIsZ0JBQWdCO0FBQ2hFLFFBQUk7QUFBZ0IsVUFBSSxJQUFJLGlCQUFpQixnQkFBZ0I7QUFHN0QsUUFBSSxPQUFPLEtBQUssMEJBQTBCLFlBQVk7QUFDcEQsV0FBSyxzQkFBc0IsY0FBYztBQUFBLElBQzNDO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxrQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL21peGlucy9pZHMtY29sb3ItdmFyaWFudC1taXhpbi9pZHMtY29sb3ItdmFyaWFudC1taXhpbi50cz9hZWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0dHJpYnV0ZXMgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1hdHRyaWJ1dGVzJztcbmltcG9ydCB7IElkc0NvbnN0cnVjdG9yIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtZWxlbWVudCc7XG5pbXBvcnQgeyBzdHJpcEhUTUwgfSBmcm9tICcuLi8uLi91dGlscy9pZHMteHNzLXV0aWxzL2lkcy14c3MtdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yVmFyaWFudEhhbmRsZXIge1xuICAvLyBhcyBpbnN0YW5jZSBmdW5jdGlvblxuICBvbkNvbG9yVmFyaWFudFJlZnJlc2g/KHZhcmlhbnROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKTogdm9pZDtcbiAgLy8gYXMgaW5zdGFuY2UgcHJvcGVydHlcbiAgb25Db2xvclZhcmlhbnRSZWZyZXNoPzogKHZhcmlhbnROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSA9PiB2b2lkO1xufVxuXG50eXBlIENvbnN0cmFpbnRzID0gSWRzQ29uc3RydWN0b3I8Q29sb3JWYXJpYW50SGFuZGxlcj47XG5cbi8qKlxuICogQSBtaXhpbiB0aGF0IHdpbGwgcHJvdmlkZSB0aGUgY29udGFpbmVyIGVsZW1lbnQgb2YgYW4gSURTIENvbXBvbmVudCB3aXRoIGEgY2xhc3NcbiAqIHJlc2VydmVkIGZvciBmbGlwcGluZyB0aGUgZm9yZWdyb3VuZCBjb2xvciAodGV4dCBjb2xvciwgaWNvbiBmaWxsLCBldGMpIHRvIGFuIGFsdGVybmF0ZSxcbiAqIGNvbnRyYXN0aW5nIGNvbG9yLiAgVGhpcyBhbGxvd3MgZWFzeSBpbnRlZ3JhdGlvbiB3aXRoIGFsdGVybmF0ZSBsYXlvdXRzLCBoZWFkZXJzLCBhcHAgbWVudSwgZXRjLlxuICogQHBhcmFtIHthbnl9IHN1cGVyY2xhc3MgQWNjZXB0cyBhIHN1cGVyY2xhc3MgYW5kIGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3MgZnJvbSBpdFxuICogQHJldHVybnMge2FueX0gVGhlIGV4dGVuZGVkIG9iamVjdFxuICovXG5jb25zdCBJZHNDb2xvclZhcmlhbnRNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RyYWludHM+KHN1cGVyY2xhc3M6IFQpID0+IGNsYXNzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5jb2xvclZhcmlhbnQgPSBudWxsO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5jb2xvclZhcmlhbnQpIHRoaXMuI3JlZnJlc2hDb2xvclZhcmlhbnQobnVsbCwgdGhpcy5jb2xvclZhcmlhbnQpO1xuICB9XG5cbiAgc3RhdGljIGdldCBhdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAuLi4oc3VwZXJjbGFzcyBhcyBhbnkpLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzLkNPTE9SX1ZBUklBTlRcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtBcnJheTxzdHJpbmc+fSBMaXN0IG9mIGF2YWlsYWJsZSBjb2xvciB2YXJpYW50cyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICovXG4gIGNvbG9yVmFyaWFudHM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAvKipcbiAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSB0aGUgbmFtZSBvZiB0aGUgY29sb3IgdmFyaWFudCBjdXJyZW50bHkgYXBwbGllZFxuICAgKi9cbiAgZ2V0IGNvbG9yVmFyaWFudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZT8uY29sb3JWYXJpYW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gdmFsIHRoZSBuYW1lIG9mIHRoZSBjb2xvciB2YXJpYW50IHRvIGJlIGFwcGxpZWRcbiAgICovXG4gIHNldCBjb2xvclZhcmlhbnQodmFsOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgbGV0IHNhZmVWYWx1ZTogYW55ID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNhZmVWYWx1ZSA9IHN0cmlwSFRNTCh2YWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuc3RhdGUuY29sb3JWYXJpYW50O1xuICAgIGlmIChzYWZlVmFsdWUgJiYgY3VycmVudFZhbHVlICE9PSBzYWZlVmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmNvbG9yVmFyaWFudHMuaW5jbHVkZXMoc2FmZVZhbHVlKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLkNPTE9SX1ZBUklBTlQsIGAke3NhZmVWYWx1ZX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZXMuQ09MT1JfVkFSSUFOVCk7XG4gICAgICAgIHNhZmVWYWx1ZSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUuY29sb3JWYXJpYW50ID0gc2FmZVZhbHVlO1xuICAgICAgdGhpcy4jcmVmcmVzaENvbG9yVmFyaWFudChjdXJyZW50VmFsdWUsIHNhZmVWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyB0aGUgY29tcG9uZW50J3MgY29sb3IgdmFyaWFudCBzdGF0ZSwgZHJpdmVuIGJ5XG4gICAqIGEgQ1NTIGNsYXNzIG9uIHRoZSBXZWJDb21wb25lbnQncyBgY29udGFpbmVyYCBlbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRWYXJpYW50TmFtZSB0aGUgdmFyaWFudCBuYW1lIHRvIFwicmVtb3ZlXCIgZnJvbSB0aGUgc3R5bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1ZhcmlhbnROYW1lIHRoZSB2YXJpYW50IG5hbWUgdG8gXCJhZGRcIiB0byB0aGUgc3R5bGVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICAjcmVmcmVzaENvbG9yVmFyaWFudChvbGRWYXJpYW50TmFtZT86IHN0cmluZyB8IG51bGwsIG5ld1ZhcmlhbnROYW1lPzogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjbCA9IHRoaXMuY29udGFpbmVyPy5jbGFzc0xpc3Q7XG5cbiAgICBpZiAob2xkVmFyaWFudE5hbWUpIGNsPy5yZW1vdmUoYGNvbG9yLXZhcmlhbnQtJHtvbGRWYXJpYW50TmFtZX1gKTtcbiAgICBpZiAobmV3VmFyaWFudE5hbWUpIGNsPy5hZGQoYGNvbG9yLXZhcmlhbnQtJHtuZXdWYXJpYW50TmFtZX1gKTtcblxuICAgIC8vIEZpcmUgb3B0aW9uYWwgY2FsbGJhY2tcbiAgICBpZiAodHlwZW9mIHRoaXMub25Db2xvclZhcmlhbnRSZWZyZXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9uQ29sb3JWYXJpYW50UmVmcmVzaChuZXdWYXJpYW50TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJZHNDb2xvclZhcmlhbnRNaXhpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts\n");

/***/ }),

/***/ "./src/mixins/ids-hitbox-mixin/ids-hitbox-mixin.ts":
/*!*********************************************************!*\
  !*** ./src/mixins/ids-hitbox-mixin/ids-hitbox-mixin.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_hitbox_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _utils_ids_string_utils_ids_string_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ids-string-utils/ids-string-utils */ \"./src/utils/ids-string-utils/ids-string-utils.ts\");\n\n\nconst IdsHitboxMixin = (superclass) => class extends superclass {\n  constructor(...args) {\n    super(...args);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.HITBOX\n    ];\n  }\n  connectedCallback() {\n    super.connectedCallback?.();\n    this.#setHitbox();\n  }\n  /**\n   * Sets the checkbox to add hitbox style.\n   * @param {boolean|string} value If true, it will apply the hitbox stylings.\n   */\n  set hitbox(value) {\n    const val = (0,_utils_ids_string_utils_ids_string_utils__WEBPACK_IMPORTED_MODULE_1__.stringToBool)(value);\n    if (val) {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.HITBOX, val.toString());\n    } else {\n      this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.HITBOX);\n    }\n    this.#setHitbox();\n  }\n  get hitbox() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.HITBOX);\n  }\n  #setHitbox() {\n    this.container?.classList.toggle(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.HITBOX, Boolean(this.hitbox));\n  }\n};\nvar ids_hitbox_mixin_default = IdsHitboxMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1oaXRib3gtbWl4aW4vaWRzLWhpdGJveC1taXhpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkI7QUFFRTtBQVE3QixNQUFNLGlCQUFpQixDQUErQixlQUFrQixjQUFjLFdBQVc7QUFBQSxFQUMvRixlQUFlLE1BQWE7QUFDMUIsVUFBTSxHQUFHLElBQUk7QUFBQSxFQUNmO0FBQUEsRUFFQSxXQUFXLGFBQWE7QUFDdEIsV0FBTztBQUFBLE1BQ0wsR0FBSSxXQUFtQjtBQUFBLE1BQ3ZCLG1FQUFpQjtBQUFOLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFFQSxvQkFBMEI7QUFDeEIsVUFBTSxvQkFBb0I7QUFDMUIsU0FBSyxXQUFXO0FBQUEsRUFDbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsSUFBSSxPQUFPLE9BQU87QUFDaEIsVUFBTSxNQUFNLHNGQUFZLENBQUMsS0FBSztBQUM5QixRQUFJLEtBQUs7QUFDUCxXQUFLLGFBQWEsbUVBQWlCLEVBQUUsSUFBSSxTQUFTLENBQUM7QUFBQSxJQUNyRCxPQUFPO0FBQ0wsV0FBSyxnQkFBZ0IsbUVBQWlCO0FBQUEsSUFDeEM7QUFFQSxTQUFLLFdBQVc7QUFBQSxFQUNsQjtBQUFBLEVBRUEsSUFBSSxTQUFTO0FBQUUsV0FBTyxLQUFLLGFBQWEsbUVBQWlCO0FBQUEsRUFBRztBQUFBLEVBRTVELGFBQWE7QUFDWCxTQUFLLFdBQVcsVUFBVSxPQUFPLG1FQUFpQixFQUFFLFFBQVEsS0FBSyxNQUFNLENBQUM7QUFBQSxFQUMxRTtBQUNGO0FBRUEsSUFBTywyQkFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL21peGlucy9pZHMtaGl0Ym94LW1peGluL2lkcy1oaXRib3gtbWl4aW4udHM/YTcxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtYXR0cmlidXRlcyc7XG5pbXBvcnQgeyBJZHNCYXNlQ29uc3RydWN0b3IgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1lbGVtZW50JztcbmltcG9ydCB7IHN0cmluZ1RvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzL2lkcy1zdHJpbmctdXRpbHMvaWRzLXN0cmluZy11dGlscyc7XG5cbi8qKlxuICogQSBtaXhpbiB0aGF0IHdpbGwgYWRkIGhpdGJveCBzdHlsaW5ncyB0byB0aGUgY29tcG9uZW50IGVsZW1lbnQuXG4gKiBAbWl4aW4gSWRzSGl0Ym94TWl4aW5cbiAqIEBwYXJhbSB7YW55fSBzdXBlcmNsYXNzIEFjY2VwdHMgYSBzdXBlcmNsYXNzIGFuZCBjcmVhdGVzIGEgbmV3IHN1YmNsYXNzIGZyb20gaXQuXG4gKiBAcmV0dXJucyB7YW55fSBUaGUgZXh0ZW5kZWQgb2JqZWN0XG4gKi9cbmNvbnN0IElkc0hpdGJveE1peGluID0gPFQgZXh0ZW5kcyBJZHNCYXNlQ29uc3RydWN0b3I+KHN1cGVyY2xhc3M6IFQpID0+IGNsYXNzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLihzdXBlcmNsYXNzIGFzIGFueSkuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMuSElUQk9YXG4gICAgXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrPy4oKTtcbiAgICB0aGlzLiNzZXRIaXRib3goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjaGVja2JveCB0byBhZGQgaGl0Ym94IHN0eWxlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfSB2YWx1ZSBJZiB0cnVlLCBpdCB3aWxsIGFwcGx5IHRoZSBoaXRib3ggc3R5bGluZ3MuXG4gICAqL1xuICBzZXQgaGl0Ym94KHZhbHVlKSB7XG4gICAgY29uc3QgdmFsID0gc3RyaW5nVG9Cb29sKHZhbHVlKTtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLkhJVEJPWCwgdmFsLnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVzLkhJVEJPWCk7XG4gICAgfVxuXG4gICAgdGhpcy4jc2V0SGl0Ym94KCk7XG4gIH1cblxuICBnZXQgaGl0Ym94KCkgeyByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5ISVRCT1gpOyB9XG5cbiAgI3NldEhpdGJveCgpIHtcbiAgICB0aGlzLmNvbnRhaW5lcj8uY2xhc3NMaXN0LnRvZ2dsZShhdHRyaWJ1dGVzLkhJVEJPWCwgQm9vbGVhbih0aGlzLmhpdGJveCkpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJZHNIaXRib3hNaXhpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mixins/ids-hitbox-mixin/ids-hitbox-mixin.ts\n");

/***/ }),

/***/ "./src/mixins/ids-theme-mixin/ids-theme-mixin.ts":
/*!*******************************************************!*\
  !*** ./src/mixins/ids-theme-mixin/ids-theme-mixin.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"THEME_MODES\": () => (/* binding */ THEME_MODES),\n/* harmony export */   \"default\": () => (/* binding */ ids_theme_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n\nconst THEME_MODES = [\"light\", \"dark\", \"contrast\"];\nconst IdsThemeMixin = (superclass) => class extends superclass {\n  switcher = null;\n  constructor(...args) {\n    super(...args);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.MODE\n    ];\n  }\n  connectedCallback() {\n    super.connectedCallback?.();\n    this.initThemeHandlers();\n  }\n  disconnectedCallback() {\n    this.offEvent(\"themechanged\");\n    this.switcher = null;\n    super.disconnectedCallback?.();\n  }\n  /**\n   * Init the mixin events and states\n   * @private\n   */\n  initThemeHandlers() {\n    this.switcher = document.querySelector(\"ids-theme-switcher\");\n    if (!this.switcher) {\n      return;\n    }\n    this.mode = this.switcher.mode;\n    this.onEvent(\"themechanged\", this.switcher, (e) => {\n      this.mode = e.detail.mode;\n    });\n  }\n  /**\n   * Set the mode of the current theme\n   * @param {string} value The mode value for example: light, dark, or contrast\n   */\n  set mode(value) {\n    if (!THEME_MODES.includes(value))\n      value = \"light\";\n    this.setAttribute(\"mode\", value);\n    this.container?.setAttribute(\"mode\", value);\n  }\n  /**\n   * Get the mode of the current theme\n   * @returns {string} light, dark, or contrast\n   */\n  get mode() {\n    return this.getAttribute(\"mode\") || \"light\";\n  }\n};\nvar ids_theme_mixin_default = IdsThemeMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy10aGVtZS1taXhpbi9pZHMtdGhlbWUtbWl4aW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJCO0FBT3BCLE1BQU0sY0FBYyxDQUFDLFNBQVMsUUFBUSxVQUFVO0FBT3ZELE1BQU0sZ0JBQWdCLENBQXdCLGVBQWtCLGNBQWMsV0FBVztBQUFBLEVBQ3ZGLFdBQW9DO0FBQUEsRUFFcEMsZUFBZSxNQUFhO0FBQzFCLFVBQU0sR0FBRyxJQUFJO0FBQUEsRUFDZjtBQUFBLEVBRUEsV0FBVyxhQUFhO0FBQ3RCLFdBQU87QUFBQSxNQUNMLEdBQUksV0FBbUI7QUFBQSxNQUN2QixpRUFBZTtBQUFKLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFFQSxvQkFBb0I7QUFDbEIsVUFBTSxvQkFBb0I7QUFDMUIsU0FBSyxrQkFBa0I7QUFBQSxFQUN6QjtBQUFBLEVBRUEsdUJBQXVCO0FBQ3JCLFNBQUssU0FBUyxjQUFjO0FBQzVCLFNBQUssV0FBVztBQUNoQixVQUFNLHVCQUF1QjtBQUFBLEVBQy9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLG9CQUFvQjtBQUNsQixTQUFLLFdBQVcsU0FBUyxjQUFnQyxvQkFBb0I7QUFDN0UsUUFBSSxDQUFDLEtBQUssVUFBVTtBQUNsQjtBQUFBLElBQ0Y7QUFFQSxTQUFLLE9BQU8sS0FBSyxTQUFTO0FBRTFCLFNBQUssUUFBUSxnQkFBZ0IsS0FBSyxVQUFVLENBQUMsTUFBbUI7QUFDOUQsV0FBSyxPQUFPLEVBQUUsT0FBTztBQUFBLElBQ3ZCLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLElBQUksS0FBSyxPQUFlO0FBQ3RCLFFBQUksQ0FBQyxZQUFZLFNBQVMsS0FBSztBQUFHLGNBQVE7QUFDMUMsU0FBSyxhQUFhLFFBQVEsS0FBSztBQUMvQixTQUFLLFdBQVcsYUFBYSxRQUFRLEtBQUs7QUFBQSxFQUM1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxJQUFJLE9BQWU7QUFDakIsV0FBTyxLQUFLLGFBQWEsTUFBTSxLQUFLO0FBQUEsRUFDdEM7QUFDRjtBQUVBLElBQU8sMEJBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9taXhpbnMvaWRzLXRoZW1lLW1peGluL2lkcy10aGVtZS1taXhpbi50cz8yZGIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0dHJpYnV0ZXMgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1hdHRyaWJ1dGVzJztcbmltcG9ydCB7IEV2ZW50c01peGluSW50ZXJmYWNlIH0gZnJvbSAnLi4vaWRzLWV2ZW50cy1taXhpbi9pZHMtZXZlbnRzLW1peGluJztcbmltcG9ydCB7IElkc0NvbnN0cnVjdG9yIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtZWxlbWVudCc7XG5pbXBvcnQgdHlwZSBJZHNUaGVtZVN3aXRjaGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaWRzLXRoZW1lLXN3aXRjaGVyL2lkcy10aGVtZS1zd2l0Y2hlcic7XG5cbnR5cGUgQ29uc3RyYWludHMgPSBJZHNDb25zdHJ1Y3RvcjxFdmVudHNNaXhpbkludGVyZmFjZT47XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9NT0RFUyA9IFsnbGlnaHQnLCAnZGFyaycsICdjb250cmFzdCddO1xuXG4vKipcbiAqIEEgbWl4aW4gdGhhdCBhZGRzIHRoZW1pbmcgZnVuY3Rpb25hbGl0eSB0byBjb21wb25lbnRzXG4gKiBAcGFyYW0ge2FueX0gc3VwZXJjbGFzcyBBY2NlcHRzIGEgc3VwZXJjbGFzcyBhbmQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyBmcm9tIGl0XG4gKiBAcmV0dXJucyB7YW55fSBUaGUgZXh0ZW5kZWQgb2JqZWN0XG4gKi9cbmNvbnN0IElkc1RoZW1lTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cmFpbnRzPihzdXBlcmNsYXNzOiBUKSA9PiBjbGFzcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuICBzd2l0Y2hlcjogSWRzVGhlbWVTd2l0Y2hlciB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLihzdXBlcmNsYXNzIGFzIGFueSkuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMuTU9ERVxuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaz8uKCk7XG4gICAgdGhpcy5pbml0VGhlbWVIYW5kbGVycygpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5vZmZFdmVudCgndGhlbWVjaGFuZ2VkJyk7XG4gICAgdGhpcy5zd2l0Y2hlciA9IG51bGw7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2s/LigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgdGhlIG1peGluIGV2ZW50cyBhbmQgc3RhdGVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0VGhlbWVIYW5kbGVycygpIHtcbiAgICB0aGlzLnN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxJZHNUaGVtZVN3aXRjaGVyPignaWRzLXRoZW1lLXN3aXRjaGVyJyk7XG4gICAgaWYgKCF0aGlzLnN3aXRjaGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tb2RlID0gdGhpcy5zd2l0Y2hlci5tb2RlO1xuXG4gICAgdGhpcy5vbkV2ZW50KCd0aGVtZWNoYW5nZWQnLCB0aGlzLnN3aXRjaGVyLCAoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubW9kZSA9IGUuZGV0YWlsLm1vZGU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtb2RlIG9mIHRoZSBjdXJyZW50IHRoZW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgbW9kZSB2YWx1ZSBmb3IgZXhhbXBsZTogbGlnaHQsIGRhcmssIG9yIGNvbnRyYXN0XG4gICAqL1xuICBzZXQgbW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKCFUSEVNRV9NT0RFUy5pbmNsdWRlcyh2YWx1ZSkpIHZhbHVlID0gJ2xpZ2h0JztcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbW9kZScsIHZhbHVlKTtcbiAgICB0aGlzLmNvbnRhaW5lcj8uc2V0QXR0cmlidXRlKCdtb2RlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbW9kZSBvZiB0aGUgY3VycmVudCB0aGVtZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBsaWdodCwgZGFyaywgb3IgY29udHJhc3RcbiAgICovXG4gIGdldCBtb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdtb2RlJykgfHwgJ2xpZ2h0JztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSWRzVGhlbWVNaXhpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mixins/ids-theme-mixin/ids-theme-mixin.ts\n");

/***/ }),

/***/ "./src/utils/ids-xss-utils/ids-xss-utils.ts":
/*!**************************************************!*\
  !*** ./src/utils/ids-xss-utils/ids-xss-utils.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"escapeHTML\": () => (/* binding */ escapeHTML),\n/* harmony export */   \"sanitizeConsoleMethods\": () => (/* binding */ sanitizeConsoleMethods),\n/* harmony export */   \"sanitizeHTML\": () => (/* binding */ sanitizeHTML),\n/* harmony export */   \"stripHTML\": () => (/* binding */ stripHTML),\n/* harmony export */   \"stripTags\": () => (/* binding */ stripTags),\n/* harmony export */   \"unescapeHTML\": () => (/* binding */ unescapeHTML)\n/* harmony export */ });\nfunction sanitizeConsoleMethods(html) {\n  const methods = [\"assert\", \"clear\", \"count\", \"debug\", \"dirxml\", \"dir\", \"error\", \"exception\", \"groupCollapsed\", \"groupEnd\", \"group\", \"info\", \"log\", \"markTimeline\", \"profileEnd\", \"profile\", \"table\", \"timeEnd\", \"timeStamp\", \"time\", \"trace\", \"warn\"];\n  const expr = new RegExp(`console\\\\.(${methods.join(\"|\")})((\\\\s+)?\\\\(([^)]+)\\\\);?)?`, \"igm\");\n  return typeof html !== \"string\" ? html : html.replace(expr, \"\");\n}\nfunction sanitizeHTML(html) {\n  let santizedHtml = html.replace(/<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/g, \"\");\n  santizedHtml = santizedHtml.replace(/<[^>]+/g, (match) => {\n    const expr = /(\\/|\\s)on\\w+=('|\")?/g;\n    let str = match;\n    if ((str.match(expr) || []).length > 0) {\n      str = str.replace(/(\\/|\\s)title=('|\")(.*)('|\")/g, (m) => {\n        if ((m.match(expr) || []).length > 0) {\n          return m.replace(expr, (m2) => m2.replace(\"on\", \"\"));\n        }\n        return m;\n      });\n    }\n    return str.replace(/(\\/|\\s)on\\w+=('|\")?[^\"]*('|\")?/g, \"\");\n  });\n  santizedHtml = sanitizeConsoleMethods(santizedHtml);\n  santizedHtml = santizedHtml.replace(/<\\/script>/g, \"\");\n  return santizedHtml;\n}\nfunction stripHTML(str) {\n  let newStr = str;\n  if (!newStr) {\n    return \"\";\n  }\n  newStr = newStr.replace(/<\\/?[^>]+(>|$)/g, \"\");\n  return newStr;\n}\nfunction stripTags(html, allowed) {\n  if (!html) {\n    return \"\";\n  }\n  if (typeof html === \"number\") {\n    return html;\n  }\n  const allowList = (`${allowed || \"\"}`.toLowerCase().match(/<[a-z][a-z0-9|ids\\-a-z]*>/g) || []).join(\"\");\n  const tags = /<\\/?([a-z][a-z0-9|ids\\-a-z]*)\\b[^>]*>/gi;\n  const commentsAndPhpTags = /<!--[\\s\\S]*?-->|<\\?(?:php)?[\\s\\S]*?\\?>/gi;\n  let returnHTML = \"\";\n  returnHTML = html.replace(commentsAndPhpTags, \"\").replace(tags, ($0, $1) => allowList.indexOf(\"<\" + $1.toLowerCase() + \">\") > -1 ? $0 : \"\");\n  returnHTML = returnHTML.replace(tags, ($0, $1) => allowList.indexOf(\"<\" + $1.toLowerCase() + \">\") > -1 ? $0 : \"\");\n  return returnHTML;\n}\nfunction unescapeHTML(value) {\n  if (value === \"\") {\n    return \"\";\n  }\n  if (typeof value === \"string\") {\n    const match = (regx) => value.match(regx)[0];\n    const doc = new DOMParser().parseFromString(value, \"text/html\");\n    return `${match(/^\\s*/)}${doc.documentElement.textContent.trim()}${match(/\\s*$/)}`;\n  }\n  return value;\n}\nfunction escapeHTML(unsafe) {\n  if (!unsafe)\n    return \"\";\n  return unsafe.replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\").replace(/>/g, \"&gt;\").replace(/\"/g, \"&quot;\").replace(/'/g, \"&#039;\").replace(/\\\\/g, \"&bsol;\");\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvaWRzLXhzcy11dGlscy9pZHMteHNzLXV0aWxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1PLFNBQVMsdUJBQXVCLE1BQW9CO0FBQ3pELFFBQU0sVUFBVSxDQUFDLFVBQVUsU0FBUyxTQUFTLFNBQVMsVUFBVSxPQUFPLFNBQVMsYUFBYSxrQkFBa0IsWUFBWSxTQUFTLFFBQVEsT0FBTyxnQkFBZ0IsY0FBYyxXQUFXLFNBQVMsV0FBVyxhQUFhLFFBQVEsU0FBUyxNQUFNO0FBQ3BQLFFBQU0sT0FBTyxJQUFJLE9BQU8sY0FBYyxRQUFRLEtBQUssR0FBRywrQkFBK0IsS0FBSztBQUUxRixTQUFPLE9BQU8sU0FBUyxXQUFXLE9BQU8sS0FBSyxRQUFRLE1BQU0sRUFBRTtBQUNoRTtBQVFPLFNBQVMsYUFBYSxNQUFjO0FBQ3pDLE1BQUksZUFBZSxLQUFLLFFBQVEsc0RBQXNELEVBQUU7QUFDeEYsaUJBQWUsYUFBYSxRQUFRLFdBQVcsQ0FBQyxVQUFVO0FBQ3hELFVBQU0sT0FBTztBQUNiLFFBQUksTUFBTTtBQUNWLFNBQUssSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsU0FBUyxHQUFHO0FBQ3RDLFlBQU0sSUFBSSxRQUFRLGdDQUFnQyxDQUFDLE1BQU07QUFDdkQsYUFBSyxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxTQUFTLEdBQUc7QUFDcEMsaUJBQU8sRUFBRSxRQUFRLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxNQUFNLEVBQUUsQ0FBQztBQUFBLFFBQ3JEO0FBQ0EsZUFBTztBQUFBLE1BQ1QsQ0FBQztBQUFBLElBQ0g7QUFDQSxXQUFPLElBQUksUUFBUSxtQ0FBbUMsRUFBRTtBQUFBLEVBQzFELENBQUM7QUFHRCxpQkFBZSx1QkFBdUIsWUFBWTtBQUdsRCxpQkFBZSxhQUFhLFFBQVEsZUFBZSxFQUFFO0FBRXJELFNBQU87QUFDVDtBQU9PLFNBQVMsVUFBVSxLQUFhO0FBQ3JDLE1BQUksU0FBUztBQUNiLE1BQUksQ0FBQyxRQUFRO0FBQ1gsV0FBTztBQUFBLEVBQ1Q7QUFFQSxXQUFTLE9BQU8sUUFBUSxtQkFBbUIsRUFBRTtBQUM3QyxTQUFPO0FBQ1Q7QUFTTyxTQUFTLFVBQVUsTUFBdUIsU0FBa0I7QUFDakUsTUFBSSxDQUFDLE1BQU07QUFDVCxXQUFPO0FBQUEsRUFDVDtBQUVBLE1BQUksT0FBTyxTQUFTLFVBQVU7QUFDNUIsV0FBTztBQUFBLEVBQ1Q7QUFFQSxRQUFNLGFBQWMsR0FBRyxXQUFXLEtBQy9CLFlBQVksRUFDWixNQUFNLDRCQUE0QixLQUFLLENBQUMsR0FDeEMsS0FBSyxFQUFFO0FBRVYsUUFBTSxPQUFPO0FBQ2IsUUFBTSxxQkFBcUI7QUFDM0IsTUFBSSxhQUFhO0FBQ2pCLGVBQWEsS0FBSyxRQUFRLG9CQUFvQixFQUFFLEVBQzdDLFFBQVEsTUFBTSxDQUFDLElBQUksT0FBTyxVQUFVLFFBQVEsTUFBTSxHQUFHLFlBQVksSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLLEVBQUU7QUFDM0YsZUFBYSxXQUFXLFFBQVEsTUFBTSxDQUFDLElBQUksT0FBTyxVQUFVLFFBQVEsTUFBTSxHQUFHLFlBQVksSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLLEVBQUU7QUFFaEgsU0FBTztBQUNUO0FBU08sU0FBUyxhQUFhLE9BQVk7QUFDdkMsTUFBSSxVQUFVLElBQUk7QUFDaEIsV0FBTztBQUFBLEVBQ1Q7QUFFQSxNQUFJLE9BQU8sVUFBVSxVQUFVO0FBQzdCLFVBQU0sUUFBUSxDQUFDLFNBQWUsTUFBYyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQ3pELFVBQU0sTUFBTSxJQUFJLFVBQVUsRUFBRSxnQkFBZ0IsT0FBTyxXQUFXO0FBRzlELFdBQU8sR0FBRyxNQUFNLE1BQU0sSUFBSyxJQUFJLGdCQUF3QixZQUFZLEtBQUssSUFBSSxNQUFNLE1BQU07QUFBQSxFQUMxRjtBQUNBLFNBQU87QUFDVDtBQVNPLFNBQVMsV0FBVyxRQUFpQjtBQUMxQyxNQUFJLENBQUM7QUFBUSxXQUFPO0FBQ3BCLFNBQU8sT0FDSixRQUFRLE1BQU0sT0FBTyxFQUNyQixRQUFRLE1BQU0sTUFBTSxFQUNwQixRQUFRLE1BQU0sTUFBTSxFQUNwQixRQUFRLE1BQU0sUUFBUSxFQUN0QixRQUFRLE1BQU0sUUFBUSxFQUN0QixRQUFRLE9BQU8sUUFBUTtBQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL3V0aWxzL2lkcy14c3MtdXRpbHMvaWRzLXhzcy11dGlscy50cz9mMTRjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVtb3ZlIGNvbnNvbGUgbWV0aG9kc1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIEhUTUwgaW4gc3RyaW5nIGZvcm1cbiAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBtb2RpZmllZCB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVDb25zb2xlTWV0aG9kcyhodG1sOiBzdHJpbmcgfCBhbnkpIHtcbiAgY29uc3QgbWV0aG9kcyA9IFsnYXNzZXJ0JywgJ2NsZWFyJywgJ2NvdW50JywgJ2RlYnVnJywgJ2RpcnhtbCcsICdkaXInLCAnZXJyb3InLCAnZXhjZXB0aW9uJywgJ2dyb3VwQ29sbGFwc2VkJywgJ2dyb3VwRW5kJywgJ2dyb3VwJywgJ2luZm8nLCAnbG9nJywgJ21hcmtUaW1lbGluZScsICdwcm9maWxlRW5kJywgJ3Byb2ZpbGUnLCAndGFibGUnLCAndGltZUVuZCcsICd0aW1lU3RhbXAnLCAndGltZScsICd0cmFjZScsICd3YXJuJ107XG4gIGNvbnN0IGV4cHIgPSBuZXcgUmVnRXhwKGBjb25zb2xlXFxcXC4oJHttZXRob2RzLmpvaW4oJ3wnKX0pKChcXFxccyspP1xcXFwoKFteKV0rKVxcXFwpOz8pP2AsICdpZ20nKTtcblxuICByZXR1cm4gdHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnID8gaHRtbCA6IGh0bWwucmVwbGFjZShleHByLCAnJyk7XG59XG5cbi8qKlxuICogUmVtb3ZlIFNjcmlwdCB0YWdzIGFuZCBhbGwgb25YWFggZnVuY3Rpb25zXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWwgSFRNTCBpbiBzdHJpbmcgZm9ybVxuICogQHJldHVybnMge3N0cmluZ30gdGhlIG1vZGlmaWVkIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUhUTUwoaHRtbDogc3RyaW5nKSB7XG4gIGxldCBzYW50aXplZEh0bWwgPSBodG1sLnJlcGxhY2UoLzxzY3JpcHRcXGJbXjxdKig/Oig/ITxcXC9zY3JpcHQ+KTxbXjxdKikqPFxcL3NjcmlwdD4vZywgJycpO1xuICBzYW50aXplZEh0bWwgPSBzYW50aXplZEh0bWwucmVwbGFjZSgvPFtePl0rL2csIChtYXRjaCkgPT4ge1xuICAgIGNvbnN0IGV4cHIgPSAvKFxcL3xcXHMpb25cXHcrPSgnfFwiKT8vZztcbiAgICBsZXQgc3RyID0gbWF0Y2g7XG4gICAgaWYgKChzdHIubWF0Y2goZXhwcikgfHwgW10pLmxlbmd0aCA+IDApIHtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8oXFwvfFxccyl0aXRsZT0oJ3xcIikoLiopKCd8XCIpL2csIChtKSA9PiB7XG4gICAgICAgIGlmICgobS5tYXRjaChleHByKSB8fCBbXSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiBtLnJlcGxhY2UoZXhwciwgKG0yKSA9PiBtMi5yZXBsYWNlKCdvbicsICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG07XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFwvfFxccylvblxcdys9KCd8XCIpP1teXCJdKignfFwiKT8vZywgJycpO1xuICB9KTtcblxuICAvLyBSZW1vdmUgY29uc29sZSBtZXRob2RzXG4gIHNhbnRpemVkSHRtbCA9IHNhbml0aXplQ29uc29sZU1ldGhvZHMoc2FudGl6ZWRIdG1sKTtcblxuICAvLyBSZW1vdmUgbmVzdGVkIHNjcmlwdCB0YWdzXG4gIHNhbnRpemVkSHRtbCA9IHNhbnRpemVkSHRtbC5yZXBsYWNlKC88XFwvc2NyaXB0Pi9nLCAnJyk7XG5cbiAgcmV0dXJuIHNhbnRpemVkSHRtbDtcbn1cblxuLyoqXG4gKiBUYWtlcyBhIHN0cmluZyBhbmQgcmVtb3ZlcyBhbGwgaHRtbCB0YWdzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gcGFyc2VcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzdHJpbmcgbWludXMgaHRtbCB0YWdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBIVE1MKHN0cjogc3RyaW5nKSB7XG4gIGxldCBuZXdTdHIgPSBzdHI7XG4gIGlmICghbmV3U3RyKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbmV3U3RyID0gbmV3U3RyLnJlcGxhY2UoLzxcXC8/W14+XSsoPnwkKS9nLCAnJyk7XG4gIHJldHVybiBuZXdTdHI7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBodG1sIHRhZ3MgZXhjZXB0IGZvciB0aGUgb25lcyBzcGVjaWZpZWQuXG4gKiBGb3IgZXhhbXBsZTogV2hpdGUgbGlzdCB0byBhIHNwZWNpZmljIHNldCBvZiBhY2NlcHRlZCB0YWdzLlxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGh0bWwgSFRNTCBpbiBzdHJpbmcgZm9ybVxuICogQHBhcmFtIHtzdHJpbmd9IGFsbG93ZWQgQ29tbWEgc2VwZXJhdGVkIHN0cmluZyBvZiBhbGxvd2VkIHRhZ3MgZS5nLiAnPGI+PGk+PHA+JydcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBtb2RpZmllZCB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaXBUYWdzKGh0bWw6IHN0cmluZyB8IG51bWJlciwgYWxsb3dlZD86IHN0cmluZykge1xuICBpZiAoIWh0bWwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIGh0bWwgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjb25zdCBhbGxvd0xpc3QgPSAoKGAke2FsbG93ZWQgfHwgJyd9YClcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5tYXRjaCgvPFthLXpdW2EtejAtOXxpZHNcXC1hLXpdKj4vZykgfHwgW10pXG4gICAgLmpvaW4oJycpOyAvLyBtYWtpbmcgc3VyZSB0aGUgYWxsb3dlZCBhcmcgaXMgYSBzdHJpbmcgY29udGFpbmluZyBvbmx5IHRhZ3MgaW4gbG93ZXJjYXNlICg8YT48Yj48Yz48aWRzLWFiYz4pXG5cbiAgY29uc3QgdGFncyA9IC88XFwvPyhbYS16XVthLXowLTl8aWRzXFwtYS16XSopXFxiW14+XSo+L2dpO1xuICBjb25zdCBjb21tZW50c0FuZFBocFRhZ3MgPSAvPCEtLVtcXHNcXFNdKj8tLT58PFxcPyg/OnBocCk/W1xcc1xcU10qP1xcPz4vZ2k7XG4gIGxldCByZXR1cm5IVE1MID0gJyc7XG4gIHJldHVybkhUTUwgPSBodG1sLnJlcGxhY2UoY29tbWVudHNBbmRQaHBUYWdzLCAnJylcbiAgICAucmVwbGFjZSh0YWdzLCAoJDAsICQxKSA9PiBhbGxvd0xpc3QuaW5kZXhPZignPCcgKyAkMS50b0xvd2VyQ2FzZSgpICsgJz4nKSA+IC0xID8gJDAgOiAnJyk7IC8vZXNsaW50LWRpc2FibGUtbGluZVxuICByZXR1cm5IVE1MID0gcmV0dXJuSFRNTC5yZXBsYWNlKHRhZ3MsICgkMCwgJDEpID0+IGFsbG93TGlzdC5pbmRleE9mKCc8JyArICQxLnRvTG93ZXJDYXNlKCkgKyAnPicpID4gLTEgPyAkMCA6ICcnKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgcmV0dXJuIHJldHVybkhUTUw7XG59XG5cbi8qKlxuICogVW4tZXNjYXBlcyBIVE1MLCByZXBsYWNpbmcgZW5jb2RlZCBzeW1ib2xzIHdpdGggc3BlY2lhbCBjaGFyYWN0ZXJzLlxuICogU3ltYm9scyB0YWtlbiBmcm9tIGh0dHBzOi8vYml0Lmx5LzFpVmtHbGNcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgSFRNTCBpbiBzdHJpbmcgZm9ybVxuICogQHJldHVybnMge3N0cmluZ30gdGhlIG1vZGlmaWVkIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmVzY2FwZUhUTUwodmFsdWU6IGFueSkge1xuICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBtYXRjaCA9IChyZWd4OiBhbnkpID0+ICh2YWx1ZSBhcyBhbnkpLm1hdGNoKHJlZ3gpWzBdO1xuICAgIGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcodmFsdWUsICd0ZXh0L2h0bWwnKTtcblxuICAgIC8vIEtlZXAgbGVhZGluZy90cmFpbGluZyBzcGFjZXNcbiAgICByZXR1cm4gYCR7bWF0Y2goL15cXHMqLyl9JHsoZG9jLmRvY3VtZW50RWxlbWVudCBhcyBhbnkpLnRleHRDb250ZW50LnRyaW0oKX0ke21hdGNoKC9cXHMqJC8pfWA7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIEVzY2FwZXMgSFRNTCwgcmVwbGFjaW5nIHNwZWNpYWwgY2hhcmFjdGVycyB3aXRoIGVuY29kZWQgc3ltYm9scy5cbiAqIFN5bWJvbHMgdGFrZW4gZnJvbSBodHRwczovL2JpdC5seS8xaVZrR2xjXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHVuc2FmZSBIVE1MIGluIHN0cmluZyBmb3JtXG4gKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgbW9kaWZpZWQgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZUhUTUwodW5zYWZlPzogc3RyaW5nKSB7XG4gIGlmICghdW5zYWZlKSByZXR1cm4gJyc7XG4gIHJldHVybiB1bnNhZmVcbiAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzAzOTsnKVxuICAgIC5yZXBsYWNlKC9cXFxcL2csICcmYnNvbDsnKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/ids-xss-utils/ids-xss-utils.ts\n");

/***/ }),

/***/ "./node_modules/ids-identity/dist/theme-new/tokens/web/ui.config.font-sizes.ts":
/*!*************************************************************************************!*\
  !*** ./node_modules/ids-identity/dist/theme-new/tokens/web/ui.config.font-sizes.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fontSizes = [\n  { 10: '10px' },\n  { 12: '12px' },\n  { 14: '14px' },\n  { 16: '16px' },\n  { 20: '20px' },\n  { 24: '24px' },\n  { 28: '28px' },\n  { 32: '32px' },\n  { 40: '40px' },\n  { 48: '48px' },\n  { 60: '60px' },\n  { 72: '72px' }\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fontSizes);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaWRzLWlkZW50aXR5L2Rpc3QvdGhlbWUtbmV3L3Rva2Vucy93ZWIvdWkuY29uZmlnLmZvbnQtc2l6ZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsSUFBSSxZQUFZO0FBQ2hCLElBQUksWUFBWTtBQUNoQixJQUFJLFlBQVk7QUFDaEIsSUFBSSxZQUFZO0FBQ2hCLElBQUksWUFBWTtBQUNoQixJQUFJLFlBQVk7QUFDaEIsSUFBSSxZQUFZO0FBQ2hCLElBQUksWUFBWTtBQUNoQixJQUFJLFlBQVk7QUFDaEIsSUFBSSxZQUFZO0FBQ2hCLElBQUksWUFBWTtBQUNoQixJQUFJO0FBQ0o7O0FBRUEsaUVBQWUsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9ub2RlX21vZHVsZXMvaWRzLWlkZW50aXR5L2Rpc3QvdGhlbWUtbmV3L3Rva2Vucy93ZWIvdWkuY29uZmlnLmZvbnQtc2l6ZXMudHM/OTQ0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb250U2l6ZXMgPSBbXG4gIHsgMTA6ICcxMHB4JyB9LFxuICB7IDEyOiAnMTJweCcgfSxcbiAgeyAxNDogJzE0cHgnIH0sXG4gIHsgMTY6ICcxNnB4JyB9LFxuICB7IDIwOiAnMjBweCcgfSxcbiAgeyAyNDogJzI0cHgnIH0sXG4gIHsgMjg6ICcyOHB4JyB9LFxuICB7IDMyOiAnMzJweCcgfSxcbiAgeyA0MDogJzQwcHgnIH0sXG4gIHsgNDg6ICc0OHB4JyB9LFxuICB7IDYwOiAnNjBweCcgfSxcbiAgeyA3MjogJzcycHgnIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZvbnRTaXplcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/ids-identity/dist/theme-new/tokens/web/ui.config.font-sizes.ts\n");

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
/******/ 		__webpack_require__.h = () => ("8f8cb4b11203c863bf42")
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
/******/ 			"ids-hyperlink-example": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-hyperlink_ids-hyperlink_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-hyperlink_ids-hyperlink_ts"], () => (__webpack_require__("./src/components/ids-hyperlink/demos/example.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
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

/***/ "./src/components/ids-drawer/demos/index.ts":
/*!**************************************************!*\
  !*** ./src/components/ids-drawer/demos/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-drawer */ \"./src/components/ids-drawer/ids-drawer.ts\");\n/* harmony import */ var _ids_button_ids_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ids-button/ids-button */ \"./src/components/ids-button/ids-button.ts\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZHJhd2VyL2RlbW9zL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUNPO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1kcmF3ZXIvZGVtb3MvaW5kZXgudHM/Yjk1MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdXBwb3J0aW5nIGNvbXBvbmVudHNcbmltcG9ydCAnLi4vaWRzLWRyYXdlcic7XG5pbXBvcnQgJy4uLy4uL2lkcy1idXR0b24vaWRzLWJ1dHRvbic7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-drawer/demos/index.ts\n");

/***/ }),

/***/ "./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts":
/*!***********************************************************************!*\
  !*** ./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_color_variant_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ids-xss-utils/ids-xss-utils */ \"./src/utils/ids-xss-utils/ids-xss-utils.ts\");\n\n\nconst IdsColorVariantMixin = (superclass) => class extends superclass {\n  constructor(...args) {\n    super(...args);\n    if (!this.state) {\n      this.state = {};\n    }\n    this.state.colorVariant = null;\n  }\n  connectedCallback() {\n    super.connectedCallback();\n    if (this.colorVariant)\n      this.#refreshColorVariant(null, this.colorVariant);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT\n    ];\n  }\n  /**\n   * @returns {Array<string>} List of available color variants for this component\n   */\n  colorVariants = [];\n  /**\n   * @returns {string|null} the name of the color variant currently applied\n   */\n  get colorVariant() {\n    return this.state?.colorVariant;\n  }\n  /**\n   * @param {string | null} val the name of the color variant to be applied\n   */\n  set colorVariant(val) {\n    let safeValue = null;\n    if (typeof val === \"string\") {\n      safeValue = (0,_utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__.stripHTML)(val);\n    }\n    const currentValue = this.state.colorVariant;\n    if (safeValue && currentValue !== safeValue) {\n      if (this.colorVariants.includes(safeValue)) {\n        this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT, `${safeValue}`);\n      } else {\n        this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT);\n        safeValue = null;\n      }\n      this.state.colorVariant = safeValue;\n      this.#refreshColorVariant(currentValue, safeValue);\n    }\n  }\n  /**\n   * Refreshes the component's color variant state, driven by\n   * a CSS class on the WebComponent's `container` element\n   * @param {string} oldVariantName the variant name to \"remove\" from the style\n   * @param {string} newVariantName the variant name to \"add\" to the style\n   * @returns {void}\n   */\n  #refreshColorVariant(oldVariantName, newVariantName) {\n    if (!this.container) {\n      return;\n    }\n    const cl = this.container?.classList;\n    if (oldVariantName)\n      cl?.remove(`color-variant-${oldVariantName}`);\n    if (newVariantName)\n      cl?.add(`color-variant-${newVariantName}`);\n    if (typeof this.onColorVariantRefresh === \"function\") {\n      this.onColorVariantRefresh(newVariantName);\n    }\n  }\n};\nvar ids_color_variant_mixin_default = IdsColorVariantMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1jb2xvci12YXJpYW50LW1peGluL2lkcy1jb2xvci12YXJpYW50LW1peGluLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUVEO0FBa0IxQixNQUFNLHVCQUF1QixDQUF3QixlQUFrQixjQUFjLFdBQVc7QUFBQSxFQUM5RixlQUFlLE1BQWE7QUFDMUIsVUFBTSxHQUFHLElBQUk7QUFFYixRQUFJLENBQUMsS0FBSyxPQUFPO0FBQ2YsV0FBSyxRQUFRLENBQUM7QUFBQSxJQUNoQjtBQUNBLFNBQUssTUFBTSxlQUFlO0FBQUEsRUFDNUI7QUFBQSxFQUVBLG9CQUFvQjtBQUNsQixVQUFNLGtCQUFrQjtBQUN4QixRQUFJLEtBQUs7QUFBYyxXQUFLLHFCQUFxQixNQUFNLEtBQUssWUFBWTtBQUFBLEVBQzFFO0FBQUEsRUFFQSxXQUFXLGFBQWE7QUFDdEIsV0FBTztBQUFBLE1BQ0wsR0FBSSxXQUFtQjtBQUFBLE1BQ3ZCLDBFQUF3QjtBQUFiLElBQ2I7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxnQkFBK0IsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS2hDLElBQUksZUFBZTtBQUNqQixXQUFPLEtBQUssT0FBTztBQUFBLEVBQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxJQUFJLGFBQWEsS0FBb0I7QUFDbkMsUUFBSSxZQUFpQjtBQUNyQixRQUFJLE9BQU8sUUFBUSxVQUFVO0FBQzNCLGtCQUFZLDZFQUFTLENBQUMsR0FBRztBQUFBLElBQzNCO0FBRUEsVUFBTSxlQUFlLEtBQUssTUFBTTtBQUNoQyxRQUFJLGFBQWEsaUJBQWlCLFdBQVc7QUFDM0MsVUFBSSxLQUFLLGNBQWMsU0FBUyxTQUFTLEdBQUc7QUFDMUMsYUFBSyxhQUFhLDBFQUF3QixFQUFFLEdBQUcsV0FBVztBQUFBLE1BQzVELE9BQU87QUFDTCxhQUFLLGdCQUFnQiwwRUFBd0I7QUFDN0Msb0JBQVk7QUFBQSxNQUNkO0FBRUEsV0FBSyxNQUFNLGVBQWU7QUFDMUIsV0FBSyxxQkFBcUIsY0FBYyxTQUFTO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVNBLHFCQUFxQixnQkFBZ0MsZ0JBQXNDO0FBQ3pGLFFBQUksQ0FBQyxLQUFLLFdBQVc7QUFDbkI7QUFBQSxJQUNGO0FBRUEsVUFBTSxLQUFLLEtBQUssV0FBVztBQUUzQixRQUFJO0FBQWdCLFVBQUksT0FBTyxpQkFBaUIsZ0JBQWdCO0FBQ2hFLFFBQUk7QUFBZ0IsVUFBSSxJQUFJLGlCQUFpQixnQkFBZ0I7QUFHN0QsUUFBSSxPQUFPLEtBQUssMEJBQTBCLFlBQVk7QUFDcEQsV0FBSyxzQkFBc0IsY0FBYztBQUFBLElBQzNDO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxrQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL21peGlucy9pZHMtY29sb3ItdmFyaWFudC1taXhpbi9pZHMtY29sb3ItdmFyaWFudC1taXhpbi50cz9hZWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0dHJpYnV0ZXMgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1hdHRyaWJ1dGVzJztcbmltcG9ydCB7IElkc0NvbnN0cnVjdG9yIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtZWxlbWVudCc7XG5pbXBvcnQgeyBzdHJpcEhUTUwgfSBmcm9tICcuLi8uLi91dGlscy9pZHMteHNzLXV0aWxzL2lkcy14c3MtdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yVmFyaWFudEhhbmRsZXIge1xuICAvLyBhcyBpbnN0YW5jZSBmdW5jdGlvblxuICBvbkNvbG9yVmFyaWFudFJlZnJlc2g/KHZhcmlhbnROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKTogdm9pZDtcbiAgLy8gYXMgaW5zdGFuY2UgcHJvcGVydHlcbiAgb25Db2xvclZhcmlhbnRSZWZyZXNoPzogKHZhcmlhbnROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKSA9PiB2b2lkO1xufVxuXG50eXBlIENvbnN0cmFpbnRzID0gSWRzQ29uc3RydWN0b3I8Q29sb3JWYXJpYW50SGFuZGxlcj47XG5cbi8qKlxuICogQSBtaXhpbiB0aGF0IHdpbGwgcHJvdmlkZSB0aGUgY29udGFpbmVyIGVsZW1lbnQgb2YgYW4gSURTIENvbXBvbmVudCB3aXRoIGEgY2xhc3NcbiAqIHJlc2VydmVkIGZvciBmbGlwcGluZyB0aGUgZm9yZWdyb3VuZCBjb2xvciAodGV4dCBjb2xvciwgaWNvbiBmaWxsLCBldGMpIHRvIGFuIGFsdGVybmF0ZSxcbiAqIGNvbnRyYXN0aW5nIGNvbG9yLiAgVGhpcyBhbGxvd3MgZWFzeSBpbnRlZ3JhdGlvbiB3aXRoIGFsdGVybmF0ZSBsYXlvdXRzLCBoZWFkZXJzLCBhcHAgbWVudSwgZXRjLlxuICogQHBhcmFtIHthbnl9IHN1cGVyY2xhc3MgQWNjZXB0cyBhIHN1cGVyY2xhc3MgYW5kIGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3MgZnJvbSBpdFxuICogQHJldHVybnMge2FueX0gVGhlIGV4dGVuZGVkIG9iamVjdFxuICovXG5jb25zdCBJZHNDb2xvclZhcmlhbnRNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RyYWludHM+KHN1cGVyY2xhc3M6IFQpID0+IGNsYXNzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5jb2xvclZhcmlhbnQgPSBudWxsO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5jb2xvclZhcmlhbnQpIHRoaXMuI3JlZnJlc2hDb2xvclZhcmlhbnQobnVsbCwgdGhpcy5jb2xvclZhcmlhbnQpO1xuICB9XG5cbiAgc3RhdGljIGdldCBhdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAuLi4oc3VwZXJjbGFzcyBhcyBhbnkpLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzLkNPTE9SX1ZBUklBTlRcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtBcnJheTxzdHJpbmc+fSBMaXN0IG9mIGF2YWlsYWJsZSBjb2xvciB2YXJpYW50cyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICovXG4gIGNvbG9yVmFyaWFudHM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAvKipcbiAgICogQHJldHVybnMge3N0cmluZ3xudWxsfSB0aGUgbmFtZSBvZiB0aGUgY29sb3IgdmFyaWFudCBjdXJyZW50bHkgYXBwbGllZFxuICAgKi9cbiAgZ2V0IGNvbG9yVmFyaWFudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZT8uY29sb3JWYXJpYW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gdmFsIHRoZSBuYW1lIG9mIHRoZSBjb2xvciB2YXJpYW50IHRvIGJlIGFwcGxpZWRcbiAgICovXG4gIHNldCBjb2xvclZhcmlhbnQodmFsOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgbGV0IHNhZmVWYWx1ZTogYW55ID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNhZmVWYWx1ZSA9IHN0cmlwSFRNTCh2YWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuc3RhdGUuY29sb3JWYXJpYW50O1xuICAgIGlmIChzYWZlVmFsdWUgJiYgY3VycmVudFZhbHVlICE9PSBzYWZlVmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmNvbG9yVmFyaWFudHMuaW5jbHVkZXMoc2FmZVZhbHVlKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLkNPTE9SX1ZBUklBTlQsIGAke3NhZmVWYWx1ZX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZXMuQ09MT1JfVkFSSUFOVCk7XG4gICAgICAgIHNhZmVWYWx1ZSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUuY29sb3JWYXJpYW50ID0gc2FmZVZhbHVlO1xuICAgICAgdGhpcy4jcmVmcmVzaENvbG9yVmFyaWFudChjdXJyZW50VmFsdWUsIHNhZmVWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyB0aGUgY29tcG9uZW50J3MgY29sb3IgdmFyaWFudCBzdGF0ZSwgZHJpdmVuIGJ5XG4gICAqIGEgQ1NTIGNsYXNzIG9uIHRoZSBXZWJDb21wb25lbnQncyBgY29udGFpbmVyYCBlbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRWYXJpYW50TmFtZSB0aGUgdmFyaWFudCBuYW1lIHRvIFwicmVtb3ZlXCIgZnJvbSB0aGUgc3R5bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1ZhcmlhbnROYW1lIHRoZSB2YXJpYW50IG5hbWUgdG8gXCJhZGRcIiB0byB0aGUgc3R5bGVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICAjcmVmcmVzaENvbG9yVmFyaWFudChvbGRWYXJpYW50TmFtZT86IHN0cmluZyB8IG51bGwsIG5ld1ZhcmlhbnROYW1lPzogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjbCA9IHRoaXMuY29udGFpbmVyPy5jbGFzc0xpc3Q7XG5cbiAgICBpZiAob2xkVmFyaWFudE5hbWUpIGNsPy5yZW1vdmUoYGNvbG9yLXZhcmlhbnQtJHtvbGRWYXJpYW50TmFtZX1gKTtcbiAgICBpZiAobmV3VmFyaWFudE5hbWUpIGNsPy5hZGQoYGNvbG9yLXZhcmlhbnQtJHtuZXdWYXJpYW50TmFtZX1gKTtcblxuICAgIC8vIEZpcmUgb3B0aW9uYWwgY2FsbGJhY2tcbiAgICBpZiAodHlwZW9mIHRoaXMub25Db2xvclZhcmlhbnRSZWZyZXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9uQ29sb3JWYXJpYW50UmVmcmVzaChuZXdWYXJpYW50TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJZHNDb2xvclZhcmlhbnRNaXhpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts\n");

/***/ }),

/***/ "./src/mixins/ids-popup-open-events-mixin/ids-popup-open-events-mixin.ts":
/*!*******************************************************************************!*\
  !*** ./src/mixins/ids-popup-open-events-mixin/ids-popup-open-events-mixin.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_popup_open_events_mixin_default)\n/* harmony export */ });\nconst IdsPopupOpenEventsMixin = (superclass) => class extends superclass {\n  constructor(...args) {\n    super(...args);\n  }\n  static get attributes() {\n    return [...superclass.attributes];\n  }\n  disconnectedCallback() {\n    super.disconnectedCallback?.();\n    this.removeOpenEvents();\n    this.popupOpenEventsTarget = null;\n  }\n  /**\n   * @property {boolean} hasOpenEvents true if \"open\" events are currently applied to this component\n   */\n  hasOpenEvents = false;\n  /**\n   * @property {IdsPopupElementRef} popupOpenEventsTarget receives the top-level event listener\n   *  that will cause the `onOutsideClick` callback to fire\n   */\n  popupOpenEventsTarget = document.body;\n  /**\n   * @property {IdsPopupElementRef} currentPopupOpenEventsTarget stores a reference to the event\n   *  target to be used for unbinding events (prevents memory leaks if the\n   *  event target changes while the Popup is open)\n   */\n  #currentPopupOpenEventsTarget = null;\n  /**\n   * Attaches some events when the Popupmenu is opened.\n   * Call this method from inside your extended component whenever \"open\" events should be applied.\n   * @returns {void}\n   */\n  addOpenEvents() {\n    window.requestAnimationFrame(() => {\n      this.onEvent(\"click.toplevel\", this.popupOpenEventsTarget, (e) => {\n        this.onOutsideClick?.(e);\n      });\n      this.hasOpenEvents = true;\n      this.#currentPopupOpenEventsTarget = this.popupOpenEventsTarget;\n    });\n  }\n  /**\n   * Detaches some events when the Popupmenu is closed.\n   * Call this method from inside your extended component whenever \"open\" events should be removed.\n   * @returns {void}\n   */\n  removeOpenEvents() {\n    if (!this.hasOpenEvents) {\n      return;\n    }\n    this.offEvent(\"click.toplevel\", this.#currentPopupOpenEventsTarget);\n    this.hasOpenEvents = false;\n    this.#currentPopupOpenEventsTarget = null;\n  }\n};\nvar ids_popup_open_events_mixin_default = IdsPopupOpenEventsMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1wb3B1cC1vcGVuLWV2ZW50cy1taXhpbi9pZHMtcG9wdXAtb3Blbi1ldmVudHMtbWl4aW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQWlCQSxNQUFNLDBCQUEwQixDQUF3QixlQUFrQixjQUFjLFdBQVc7QUFBQSxFQUNqRyxlQUFlLE1BQWE7QUFDMUIsVUFBTSxHQUFHLElBQUk7QUFBQSxFQUNmO0FBQUEsRUFFQSxXQUFXLGFBQWE7QUFDdEIsV0FBTyxDQUFDLEdBQUksV0FBbUIsVUFBVTtBQUFBLEVBQzNDO0FBQUEsRUFFQSx1QkFBdUI7QUFDckIsVUFBTSx1QkFBdUI7QUFDN0IsU0FBSyxpQkFBaUI7QUFDdEIsU0FBSyx3QkFBd0I7QUFBQSxFQUMvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1oQix3QkFBNEMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9yRCxnQ0FBb0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPcEQsZ0JBQWdCO0FBQ2QsV0FBTyxzQkFBc0IsTUFBTTtBQUdqQyxXQUFLLFFBQVEsa0JBQWtCLEtBQUssdUJBQXVCLENBQUMsTUFBYTtBQUN2RSxhQUFLLGlCQUFpQixDQUFDO0FBQUEsTUFDekIsQ0FBQztBQUNELFdBQUssZ0JBQWdCO0FBQ3JCLFdBQUssZ0NBQWdDLEtBQUs7QUFBQSxJQUM1QyxDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLG1CQUFtQjtBQUNqQixRQUFJLENBQUMsS0FBSyxlQUFlO0FBQ3ZCO0FBQUEsSUFDRjtBQUNBLFNBQUssU0FBUyxrQkFBa0IsS0FBSyw2QkFBNkI7QUFDbEUsU0FBSyxnQkFBZ0I7QUFDckIsU0FBSyxnQ0FBZ0M7QUFBQSxFQUN2QztBQUNGO0FBRUEsSUFBTyxzQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL21peGlucy9pZHMtcG9wdXAtb3Blbi1ldmVudHMtbWl4aW4vaWRzLXBvcHVwLW9wZW4tZXZlbnRzLW1peGluLnRzPzc4NzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBJZHNQb3B1cEVsZW1lbnRSZWYgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lkcy1wb3B1cC9pZHMtcG9wdXAtYXR0cmlidXRlcyc7XG5pbXBvcnQgeyBJZHNDb25zdHJ1Y3RvciB9IGZyb20gJy4uLy4uL2NvcmUvaWRzLWVsZW1lbnQnO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW5JbnRlcmZhY2UgfSBmcm9tICcuLi9pZHMtZXZlbnRzLW1peGluL2lkcy1ldmVudHMtbWl4aW4nO1xuXG5pbnRlcmZhY2UgUG9wdXBPcGVuZXIge1xuICBvbk91dHNpZGVDbGljaz8oZTogRXZlbnQpOiB2b2lkO1xufVxuXG50eXBlIENvbnN0cmFpbnRzID0gSWRzQ29uc3RydWN0b3I8RXZlbnRzTWl4aW5JbnRlcmZhY2UgJiBQb3B1cE9wZW5lcj47XG5cbi8qKlxuICogVGhpcyBtaXhpbiBjYW4gYmUgdXNlZCB3aXRoIHRoZSBJZHNQb3B1cCBjb21wb25lbnQgdG8gcHJvdmlkZSBldmVudCBoYW5kbGluZyBpbiBzb21lIHNjZW5hcmlvczpcbiAqIC0gV2hlbiBjbGlja2luZyBvdXRzaWRlIHRoZSBQb3B1cCBvY2N1cnMsIGFuIGV2ZW50IGhhbmRsZXIgYXQgdGhlIGRvY3VtZW50IGxldmVsIGhpZGVzIHRoZSBQb3B1cC5cbiAqIEBtaXhpbiBJZHNQb3B1cE9wZW5FdmVudHNNaXhpblxuICogQHBhcmFtIHthbnl9IHN1cGVyY2xhc3MgQWNjZXB0cyBhIHN1cGVyY2xhc3MgYW5kIGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3MgZnJvbSBpdFxuICogQHJldHVybnMge2FueX0gVGhlIGV4dGVuZGVkIG9iamVjdFxuICovXG5jb25zdCBJZHNQb3B1cE9wZW5FdmVudHNNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RyYWludHM+KHN1cGVyY2xhc3M6IFQpID0+IGNsYXNzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFsuLi4oc3VwZXJjbGFzcyBhcyBhbnkpLmF0dHJpYnV0ZXNdO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2s/LigpO1xuICAgIHRoaXMucmVtb3ZlT3BlbkV2ZW50cygpO1xuICAgIHRoaXMucG9wdXBPcGVuRXZlbnRzVGFyZ2V0ID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGhhc09wZW5FdmVudHMgdHJ1ZSBpZiBcIm9wZW5cIiBldmVudHMgYXJlIGN1cnJlbnRseSBhcHBsaWVkIHRvIHRoaXMgY29tcG9uZW50XG4gICAqL1xuICBoYXNPcGVuRXZlbnRzID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSB7SWRzUG9wdXBFbGVtZW50UmVmfSBwb3B1cE9wZW5FdmVudHNUYXJnZXQgcmVjZWl2ZXMgdGhlIHRvcC1sZXZlbCBldmVudCBsaXN0ZW5lclxuICAgKiAgdGhhdCB3aWxsIGNhdXNlIHRoZSBgb25PdXRzaWRlQ2xpY2tgIGNhbGxiYWNrIHRvIGZpcmVcbiAgICovXG4gIHBvcHVwT3BlbkV2ZW50c1RhcmdldDogSWRzUG9wdXBFbGVtZW50UmVmID0gZG9jdW1lbnQuYm9keTtcblxuICAvKipcbiAgICogQHByb3BlcnR5IHtJZHNQb3B1cEVsZW1lbnRSZWZ9IGN1cnJlbnRQb3B1cE9wZW5FdmVudHNUYXJnZXQgc3RvcmVzIGEgcmVmZXJlbmNlIHRvIHRoZSBldmVudFxuICAgKiAgdGFyZ2V0IHRvIGJlIHVzZWQgZm9yIHVuYmluZGluZyBldmVudHMgKHByZXZlbnRzIG1lbW9yeSBsZWFrcyBpZiB0aGVcbiAgICogIGV2ZW50IHRhcmdldCBjaGFuZ2VzIHdoaWxlIHRoZSBQb3B1cCBpcyBvcGVuKVxuICAgKi9cbiAgI2N1cnJlbnRQb3B1cE9wZW5FdmVudHNUYXJnZXQ6IElkc1BvcHVwRWxlbWVudFJlZiA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIHNvbWUgZXZlbnRzIHdoZW4gdGhlIFBvcHVwbWVudSBpcyBvcGVuZWQuXG4gICAqIENhbGwgdGhpcyBtZXRob2QgZnJvbSBpbnNpZGUgeW91ciBleHRlbmRlZCBjb21wb25lbnQgd2hlbmV2ZXIgXCJvcGVuXCIgZXZlbnRzIHNob3VsZCBiZSBhcHBsaWVkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGFkZE9wZW5FdmVudHMoKSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBBdHRhY2ggYSBjbGljayBoYW5kbGVyIHRvIHRoZSB3aW5kb3cgZm9yIGRldGVjdGluZyBjbGlja3Mgb3V0c2lkZSB0aGUgcG9wdXAuXG4gICAgICAvLyBJZiB0aGVzZSBhcmVuJ3QgY2FwdHVyZWQgYnkgYSBwb3B1cCwgdGhlIG1lbnUgd2lsbCBjbG9zZS5cbiAgICAgIHRoaXMub25FdmVudCgnY2xpY2sudG9wbGV2ZWwnLCB0aGlzLnBvcHVwT3BlbkV2ZW50c1RhcmdldCwgKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMub25PdXRzaWRlQ2xpY2s/LihlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5oYXNPcGVuRXZlbnRzID0gdHJ1ZTtcbiAgICAgIHRoaXMuI2N1cnJlbnRQb3B1cE9wZW5FdmVudHNUYXJnZXQgPSB0aGlzLnBvcHVwT3BlbkV2ZW50c1RhcmdldDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2hlcyBzb21lIGV2ZW50cyB3aGVuIHRoZSBQb3B1cG1lbnUgaXMgY2xvc2VkLlxuICAgKiBDYWxsIHRoaXMgbWV0aG9kIGZyb20gaW5zaWRlIHlvdXIgZXh0ZW5kZWQgY29tcG9uZW50IHdoZW5ldmVyIFwib3BlblwiIGV2ZW50cyBzaG91bGQgYmUgcmVtb3ZlZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICByZW1vdmVPcGVuRXZlbnRzKCkge1xuICAgIGlmICghdGhpcy5oYXNPcGVuRXZlbnRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub2ZmRXZlbnQoJ2NsaWNrLnRvcGxldmVsJywgdGhpcy4jY3VycmVudFBvcHVwT3BlbkV2ZW50c1RhcmdldCk7XG4gICAgdGhpcy5oYXNPcGVuRXZlbnRzID0gZmFsc2U7XG4gICAgdGhpcy4jY3VycmVudFBvcHVwT3BlbkV2ZW50c1RhcmdldCA9IG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IElkc1BvcHVwT3BlbkV2ZW50c01peGluO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/mixins/ids-popup-open-events-mixin/ids-popup-open-events-mixin.ts\n");

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
/******/ 			"ids-drawer": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-button_ids-button_scss","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_components_ids-drawer_ids-drawer_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-button_ids-button_scss","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_components_ids-drawer_ids-drawer_ts"], () => (__webpack_require__("./src/components/ids-drawer/demos/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
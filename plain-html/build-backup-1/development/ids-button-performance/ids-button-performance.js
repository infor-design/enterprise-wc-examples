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

/***/ "./src/components/ids-button/demos/performance.ts":
/*!********************************************************!*\
  !*** ./src/components/ids-button/demos/performance.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-button */ \"./src/components/ids-button/ids-button.ts\");\n\nconst appendTestItems = () => {\n  const section = document.querySelector('ids-layout-grid[cols=\"4\"]');\n  for (let index = 0; index < 1e3; index++) {\n    let html = \"\";\n    html += `<ids-layout-grid-cell>\n    <ids-button id=\"button-${index}\" appearance=\"secondary\">Button ${index}</ids-button>\n    </ids-layout-grid-cell>`;\n    section.insertAdjacentHTML(\"beforeend\", html);\n  }\n};\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  appendTestItems();\n  console.info(\"Loading Time:\", window.performance.now());\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtYnV0dG9uL2RlbW9zL3BlcmZvcm1hbmNlLnRzLmpzIiwibWFwcGluZ3MiOiI7O0FBQU87QUFFUCxNQUFNLGtCQUFrQixNQUFNO0FBQzVCLFFBQU0sVUFBZSxTQUFTLGNBQWMsMkJBQTJCO0FBQ3ZFLFdBQVMsUUFBUSxHQUFHLFFBQVEsS0FBTSxTQUFTO0FBQ3pDLFFBQUksT0FBTztBQUNYLFlBQVE7QUFBQSw2QkFDaUIsd0NBQXdDO0FBQUE7QUFFakUsWUFBUSxtQkFBbUIsYUFBYSxJQUFJO0FBQUEsRUFDOUM7QUFDRjtBQUVBLFNBQVMsaUJBQWlCLG9CQUFvQixNQUFNO0FBQ2xELGtCQUFnQjtBQUNoQixVQUFRLEtBQUssaUJBQWlCLE9BQU8sWUFBWSxJQUFJLENBQUM7QUFDeEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLWJ1dHRvbi9kZW1vcy9wZXJmb3JtYW5jZS50cz84YjhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vaWRzLWJ1dHRvbic7XG5cbmNvbnN0IGFwcGVuZFRlc3RJdGVtcyA9ICgpID0+IHtcbiAgY29uc3Qgc2VjdGlvbjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWRzLWxheW91dC1ncmlkW2NvbHM9XCI0XCJdJyk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDAwOyBpbmRleCsrKSB7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBodG1sICs9IGA8aWRzLWxheW91dC1ncmlkLWNlbGw+XG4gICAgPGlkcy1idXR0b24gaWQ9XCJidXR0b24tJHtpbmRleH1cIiBhcHBlYXJhbmNlPVwic2Vjb25kYXJ5XCI+QnV0dG9uICR7aW5kZXh9PC9pZHMtYnV0dG9uPlxuICAgIDwvaWRzLWxheW91dC1ncmlkLWNlbGw+YDtcbiAgICBzZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gIH1cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGFwcGVuZFRlc3RJdGVtcygpO1xuICBjb25zb2xlLmluZm8oJ0xvYWRpbmcgVGltZTonLCB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-button/demos/performance.ts\n");

/***/ }),

/***/ "./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts":
/*!***********************************************************************!*\
  !*** ./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_color_variant_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ids-xss-utils/ids-xss-utils */ \"./src/utils/ids-xss-utils/ids-xss-utils.ts\");\n\n\nconst IdsColorVariantMixin = (superclass) => class extends superclass {\n  constructor(...args) {\n    super(...args);\n    if (!this.state) {\n      this.state = {};\n    }\n    this.state.colorVariant = null;\n  }\n  connectedCallback() {\n    super.connectedCallback();\n    if (this.colorVariant)\n      this.#refreshColorVariant(null, this.colorVariant);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT\n    ];\n  }\n  /**\n   * @returns {Array<string>} List of available color variants for this component\n   */\n  colorVariants = [];\n  /**\n   * @returns {string|null} the name of the color variant currently applied\n   */\n  get colorVariant() {\n    return this.state?.colorVariant;\n  }\n  /**\n   * @param {string | null} val the name of the color variant to be applied\n   */\n  set colorVariant(val) {\n    let safeValue = null;\n    if (typeof val === \"string\") {\n      safeValue = (0,_utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__.stripHTML)(val);\n    }\n    const currentValue = this.state.colorVariant;\n    if (safeValue && currentValue !== safeValue) {\n      if (this.colorVariants.includes(safeValue)) {\n        this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT, `${safeValue}`);\n      } else {\n        this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT);\n        safeValue = null;\n      }\n      this.state.colorVariant = safeValue;\n      this.#refreshColorVariant(currentValue, safeValue);\n    }\n  }\n  /**\n   * Refreshes the component's color variant state, driven by\n   * a CSS class on the WebComponent's `container` element\n   *\n   * @param {string} oldVariantName the variant name to \"remove\" from the style\n   * @param {string} newVariantName the variant name to \"add\" to the style\n   * @returns {void}\n   */\n  #refreshColorVariant(oldVariantName, newVariantName) {\n    if (!this.container) {\n      return;\n    }\n    const cl = this.container?.classList;\n    if (oldVariantName)\n      cl?.remove(`color-variant-${oldVariantName}`);\n    if (newVariantName)\n      cl?.add(`color-variant-${newVariantName}`);\n    if (typeof this.onColorVariantRefresh === \"function\") {\n      this.onColorVariantRefresh(newVariantName);\n    }\n  }\n};\nvar ids_color_variant_mixin_default = IdsColorVariantMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1jb2xvci12YXJpYW50LW1peGluL2lkcy1jb2xvci12YXJpYW50LW1peGluLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUVEO0FBa0IxQixNQUFNLHVCQUF1QixDQUF3QixlQUFrQixjQUFjLFdBQVc7QUFBQSxFQUM5RixlQUFlLE1BQWE7QUFDMUIsVUFBTSxHQUFHLElBQUk7QUFFYixRQUFJLENBQUMsS0FBSyxPQUFPO0FBQ2YsV0FBSyxRQUFRLENBQUM7QUFBQSxJQUNoQjtBQUNBLFNBQUssTUFBTSxlQUFlO0FBQUEsRUFDNUI7QUFBQSxFQUVBLG9CQUFvQjtBQUNsQixVQUFNLGtCQUFrQjtBQUN4QixRQUFJLEtBQUs7QUFBYyxXQUFLLHFCQUFxQixNQUFNLEtBQUssWUFBWTtBQUFBLEVBQzFFO0FBQUEsRUFFQSxXQUFXLGFBQWE7QUFDdEIsV0FBTztBQUFBLE1BQ0wsR0FBSSxXQUFtQjtBQUFBLE1BQ3ZCLDBFQUF3QjtBQUFiLElBQ2I7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxnQkFBK0IsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS2hDLElBQUksZUFBZTtBQUNqQixXQUFPLEtBQUssT0FBTztBQUFBLEVBQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxJQUFJLGFBQWEsS0FBb0I7QUFDbkMsUUFBSSxZQUFpQjtBQUNyQixRQUFJLE9BQU8sUUFBUSxVQUFVO0FBQzNCLGtCQUFZLDZFQUFTLENBQUMsR0FBRztBQUFBLElBQzNCO0FBRUEsVUFBTSxlQUFlLEtBQUssTUFBTTtBQUNoQyxRQUFJLGFBQWEsaUJBQWlCLFdBQVc7QUFDM0MsVUFBSSxLQUFLLGNBQWMsU0FBUyxTQUFTLEdBQUc7QUFDMUMsYUFBSyxhQUFhLDBFQUF3QixFQUFFLEdBQUcsV0FBVztBQUFBLE1BQzVELE9BQU87QUFDTCxhQUFLLGdCQUFnQiwwRUFBd0I7QUFDN0Msb0JBQVk7QUFBQSxNQUNkO0FBRUEsV0FBSyxNQUFNLGVBQWU7QUFDMUIsV0FBSyxxQkFBcUIsY0FBYyxTQUFTO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVUEscUJBQXFCLGdCQUFnQyxnQkFBc0M7QUFDekYsUUFBSSxDQUFDLEtBQUssV0FBVztBQUNuQjtBQUFBLElBQ0Y7QUFFQSxVQUFNLEtBQUssS0FBSyxXQUFXO0FBRTNCLFFBQUk7QUFBZ0IsVUFBSSxPQUFPLGlCQUFpQixnQkFBZ0I7QUFDaEUsUUFBSTtBQUFnQixVQUFJLElBQUksaUJBQWlCLGdCQUFnQjtBQUc3RCxRQUFJLE9BQU8sS0FBSywwQkFBMEIsWUFBWTtBQUNwRCxXQUFLLHNCQUFzQixjQUFjO0FBQUEsSUFDM0M7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFPLGtDQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvbWl4aW5zL2lkcy1jb2xvci12YXJpYW50LW1peGluL2lkcy1jb2xvci12YXJpYW50LW1peGluLnRzP2FlZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gJy4uLy4uL2NvcmUvaWRzLWF0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgSWRzQ29uc3RydWN0b3IgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1lbGVtZW50JztcbmltcG9ydCB7IHN0cmlwSFRNTCB9IGZyb20gJy4uLy4uL3V0aWxzL2lkcy14c3MtdXRpbHMvaWRzLXhzcy11dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JWYXJpYW50SGFuZGxlciB7XG4gIC8vIGFzIGluc3RhbmNlIGZ1bmN0aW9uXG4gIG9uQ29sb3JWYXJpYW50UmVmcmVzaD8odmFyaWFudE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwpOiB2b2lkO1xuICAvLyBhcyBpbnN0YW5jZSBwcm9wZXJ0eVxuICBvbkNvbG9yVmFyaWFudFJlZnJlc2g/OiAodmFyaWFudE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwpID0+IHZvaWQ7XG59XG5cbnR5cGUgQ29uc3RyYWludHMgPSBJZHNDb25zdHJ1Y3RvcjxDb2xvclZhcmlhbnRIYW5kbGVyPjtcblxuLyoqXG4gKiBBIG1peGluIHRoYXQgd2lsbCBwcm92aWRlIHRoZSBjb250YWluZXIgZWxlbWVudCBvZiBhbiBJRFMgQ29tcG9uZW50IHdpdGggYSBjbGFzc1xuICogcmVzZXJ2ZWQgZm9yIGZsaXBwaW5nIHRoZSBmb3JlZ3JvdW5kIGNvbG9yICh0ZXh0IGNvbG9yLCBpY29uIGZpbGwsIGV0YykgdG8gYW4gYWx0ZXJuYXRlLFxuICogY29udHJhc3RpbmcgY29sb3IuICBUaGlzIGFsbG93cyBlYXN5IGludGVncmF0aW9uIHdpdGggYWx0ZXJuYXRlIGxheW91dHMsIGhlYWRlcnMsIGFwcCBtZW51LCBldGMuXG4gKiBAcGFyYW0ge2FueX0gc3VwZXJjbGFzcyBBY2NlcHRzIGEgc3VwZXJjbGFzcyBhbmQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyBmcm9tIGl0XG4gKiBAcmV0dXJucyB7YW55fSBUaGUgZXh0ZW5kZWQgb2JqZWN0XG4gKi9cbmNvbnN0IElkc0NvbG9yVmFyaWFudE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJhaW50cz4oc3VwZXJjbGFzczogVCkgPT4gY2xhc3MgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcbiAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmICghdGhpcy5zdGF0ZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cbiAgICB0aGlzLnN0YXRlLmNvbG9yVmFyaWFudCA9IG51bGw7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLmNvbG9yVmFyaWFudCkgdGhpcy4jcmVmcmVzaENvbG9yVmFyaWFudChudWxsLCB0aGlzLmNvbG9yVmFyaWFudCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLihzdXBlcmNsYXNzIGFzIGFueSkuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMuQ09MT1JfVkFSSUFOVFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge0FycmF5PHN0cmluZz59IExpc3Qgb2YgYXZhaWxhYmxlIGNvbG9yIHZhcmlhbnRzIGZvciB0aGlzIGNvbXBvbmVudFxuICAgKi9cbiAgY29sb3JWYXJpYW50czogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IHRoZSBuYW1lIG9mIHRoZSBjb2xvciB2YXJpYW50IGN1cnJlbnRseSBhcHBsaWVkXG4gICAqL1xuICBnZXQgY29sb3JWYXJpYW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlPy5jb2xvclZhcmlhbnQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsfSB2YWwgdGhlIG5hbWUgb2YgdGhlIGNvbG9yIHZhcmlhbnQgdG8gYmUgYXBwbGllZFxuICAgKi9cbiAgc2V0IGNvbG9yVmFyaWFudCh2YWw6IHN0cmluZyB8IG51bGwpIHtcbiAgICBsZXQgc2FmZVZhbHVlOiBhbnkgPSBudWxsO1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgc2FmZVZhbHVlID0gc3RyaXBIVE1MKHZhbCk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5zdGF0ZS5jb2xvclZhcmlhbnQ7XG4gICAgaWYgKHNhZmVWYWx1ZSAmJiBjdXJyZW50VmFsdWUgIT09IHNhZmVWYWx1ZSkge1xuICAgICAgaWYgKHRoaXMuY29sb3JWYXJpYW50cy5pbmNsdWRlcyhzYWZlVmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuQ09MT1JfVkFSSUFOVCwgYCR7c2FmZVZhbHVlfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlcy5DT0xPUl9WQVJJQU5UKTtcbiAgICAgICAgc2FmZVZhbHVlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZS5jb2xvclZhcmlhbnQgPSBzYWZlVmFsdWU7XG4gICAgICB0aGlzLiNyZWZyZXNoQ29sb3JWYXJpYW50KGN1cnJlbnRWYWx1ZSwgc2FmZVZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaGVzIHRoZSBjb21wb25lbnQncyBjb2xvciB2YXJpYW50IHN0YXRlLCBkcml2ZW4gYnlcbiAgICogYSBDU1MgY2xhc3Mgb24gdGhlIFdlYkNvbXBvbmVudCdzIGBjb250YWluZXJgIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9sZFZhcmlhbnROYW1lIHRoZSB2YXJpYW50IG5hbWUgdG8gXCJyZW1vdmVcIiBmcm9tIHRoZSBzdHlsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VmFyaWFudE5hbWUgdGhlIHZhcmlhbnQgbmFtZSB0byBcImFkZFwiIHRvIHRoZSBzdHlsZVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gICNyZWZyZXNoQ29sb3JWYXJpYW50KG9sZFZhcmlhbnROYW1lPzogc3RyaW5nIHwgbnVsbCwgbmV3VmFyaWFudE5hbWU/OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNsID0gdGhpcy5jb250YWluZXI/LmNsYXNzTGlzdDtcblxuICAgIGlmIChvbGRWYXJpYW50TmFtZSkgY2w/LnJlbW92ZShgY29sb3ItdmFyaWFudC0ke29sZFZhcmlhbnROYW1lfWApO1xuICAgIGlmIChuZXdWYXJpYW50TmFtZSkgY2w/LmFkZChgY29sb3ItdmFyaWFudC0ke25ld1ZhcmlhbnROYW1lfWApO1xuXG4gICAgLy8gRmlyZSBvcHRpb25hbCBjYWxsYmFja1xuICAgIGlmICh0eXBlb2YgdGhpcy5vbkNvbG9yVmFyaWFudFJlZnJlc2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub25Db2xvclZhcmlhbnRSZWZyZXNoKG5ld1ZhcmlhbnROYW1lKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IElkc0NvbG9yVmFyaWFudE1peGluO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts\n");

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
/******/ 		__webpack_require__.h = () => ("c372f59fb5be38f43bb9")
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
/******/ 			"ids-button-performance": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-button_ids-button_scss","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-button_ids-button_scss","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts"], () => (__webpack_require__("./src/components/ids-button/demos/performance.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
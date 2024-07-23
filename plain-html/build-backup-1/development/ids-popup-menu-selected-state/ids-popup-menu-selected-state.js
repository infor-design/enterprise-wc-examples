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

/***/ "./src/components/ids-popup-menu/demos/selected-state.ts":
/*!***************************************************************!*\
  !*** ./src/components/ids-popup-menu/demos/selected-state.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_popup_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-popup-menu */ \"./src/components/ids-popup-menu/ids-popup-menu.ts\");\n/* harmony import */ var _ids_menu_ids_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ids-menu/ids-menu */ \"./src/components/ids-menu/ids-menu.ts\");\n/* harmony import */ var _ids_popup_ids_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ids-popup/ids-popup */ \"./src/components/ids-popup/ids-popup.ts\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const popupmenuEl = document.querySelector(\"ids-popup-menu\");\n  const popupEl = popupmenuEl.popup;\n  popupEl.align = \"top, left\";\n  popupmenuEl.addEventListener(\"deselected\", (e) => {\n    console.info(`Item \"${e.detail.elem.text}\" was deselected`);\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtcG9wdXAtbWVudS9kZW1vcy9zZWxlY3RlZC1zdGF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDQTtBQUNBO0FBRVAsU0FBUyxpQkFBaUIsb0JBQW9CLE1BQU07QUFDbEQsUUFBTSxjQUFtQixTQUFTLGNBQWMsZ0JBQWdCO0FBQ2hFLFFBQU0sVUFBVSxZQUFZO0FBRzVCLFVBQVEsUUFBUTtBQUdoQixjQUFZLGlCQUFpQixjQUFjLENBQUMsTUFBVztBQUNyRCxZQUFRLEtBQUssU0FBUyxFQUFFLE9BQU8sS0FBSyxzQkFBc0I7QUFBQSxFQUM1RCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLXBvcHVwLW1lbnUvZGVtb3Mvc2VsZWN0ZWQtc3RhdGUudHM/OTA3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2lkcy1wb3B1cC1tZW51JztcbmltcG9ydCAnLi4vLi4vaWRzLW1lbnUvaWRzLW1lbnUnO1xuaW1wb3J0ICcuLi8uLi9pZHMtcG9wdXAvaWRzLXBvcHVwJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgcG9wdXBtZW51RWw6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lkcy1wb3B1cC1tZW51Jyk7XG4gIGNvbnN0IHBvcHVwRWwgPSBwb3B1cG1lbnVFbC5wb3B1cDtcblxuICAvLyBQcmVjb25maWd1cmUgdGhlIFBvcHVwXG4gIHBvcHVwRWwuYWxpZ24gPSAndG9wLCBsZWZ0JztcblxuICAvLyBMb2cgdG8gdGhlIGNvbnNvbGUgb24gYGRlc2VsZWN0ZWRgIChzZWxlY3RlZCBldmVudHMgYXJlIGNvdmVyZWQgYnkgaW5kZXgudHMpXG4gIHBvcHVwbWVudUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Rlc2VsZWN0ZWQnLCAoZTogYW55KSA9PiB7XG4gICAgY29uc29sZS5pbmZvKGBJdGVtIFwiJHtlLmRldGFpbC5lbGVtLnRleHR9XCIgd2FzIGRlc2VsZWN0ZWRgKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-popup-menu/demos/selected-state.ts\n");

/***/ }),

/***/ "./src/mixins/ids-keyboard-mixin/ids-keyboard-mixin.ts":
/*!*************************************************************!*\
  !*** ./src/mixins/ids-keyboard-mixin/ids-keyboard-mixin.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_keyboard_mixin_default)\n/* harmony export */ });\nconst IdsKeyboardMixin = (superclass) => class extends superclass {\n  hotkeys = null;\n  pressedKeys = null;\n  keyDownHandler;\n  keyUpHandler;\n  constructor(...args) {\n    super(...args);\n    this.initKeyboardHandlers();\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes\n    ];\n  }\n  disconnectedCallback() {\n    super.disconnectedCallback?.();\n    this.detachAllListeners();\n    this.hotkeys = null;\n    this.pressedKeys = null;\n  }\n  /**\n   * Initializes the keyboard management system with the current object\n   * @private\n   */\n  initKeyboardHandlers() {\n    this.hotkeys = /* @__PURE__ */ new Map();\n    this.pressedKeys = /* @__PURE__ */ new Map();\n    this.keyDownHandler = (e) => {\n      this.press(e.key);\n      this.dispatchHotkeys(e);\n    };\n    this.onEvent(\"keydown.keyboard\", this, this.keyDownHandler);\n    this.keyUpHandler = (e) => {\n      this.unpress(e.key);\n    };\n    this.onEvent(\"keyup.keyboard\", this, this.keyUpHandler);\n  }\n  /**\n   * Add a key to the pressedKeys Map.\n   * @private\n   * @param {string} key a string representing a {KeyboardEvent.key} that was pressed\n   * @returns {Map} the current set of pressed keys\n   */\n  press(key) {\n    return this.pressedKeys?.set(`${key}`, true);\n  }\n  /**\n   * Add a listener for a key or set of keys\n   * @param {Array|string} keycode An array of all matchinng keycodes\n   * @param {HTMLElement} elem The object with the listener attached\n   * @param {Function} callback The call back when this combination is met\n   */\n  listen(keycode, elem, callback) {\n    const keycodes = Array.isArray(keycode) ? keycode : [keycode];\n    for (const c of keycodes) {\n      this.hotkeys?.set(`${c}`, callback);\n    }\n  }\n  /**\n   * Removes a single applied listener for a hotkey combination\n   * @param {string} key An array of all matching keycodes\n   * @returns {Map} the current set of hotkeys\n   */\n  unlisten(key) {\n    return this.hotkeys?.delete(`${key}`);\n  }\n  /**\n   * Remove a key from the pressedKeys map.\n   * @private\n   * @param {string} key a string representing a {KeyboardEvent.key} that is no longer active\n   * @returns {boolean} whether or not the key had been previously logged as \"pressed\"\n   */\n  unpress(key) {\n    return this.pressedKeys?.delete(`${key}`);\n  }\n  /**\n   * Dispatch an event on any active listeners\n   * @private\n   * @param {object} e a string representing a {KeyboardEvent.key} that is no longer active\n   * @returns {void}\n   */\n  dispatchHotkeys(e) {\n    this.hotkeys?.forEach((value, key) => {\n      if (key.split(\",\").indexOf(e.key) > -1) {\n        value(e);\n      }\n    });\n  }\n  /**\n   * Remove all handlers and clear memory\n   */\n  detachAllListeners() {\n    if (this.keyDownHandler && this.offEvent) {\n      this.offEvent(\"keydown.keyboard\", this, this.keyDownHandler);\n      delete this.keyDownHandler;\n    }\n    if (this.keyUpHandler && this.offEvent) {\n      this.offEvent(\"keyup.keyboard\", this, this.keyUpHandler);\n      delete this.keyUpHandler;\n    }\n  }\n};\nvar ids_keyboard_mixin_default = IdsKeyboardMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1rZXlib2FyZC1taXhpbi9pZHMta2V5Ym9hcmQtbWl4aW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQWlCQSxNQUFNLG1CQUFtQixDQUF3QixlQUFrQixjQUFjLFdBQzdDO0FBQUEsRUFDbEMsVUFBZ0M7QUFBQSxFQUVoQyxjQUFvQztBQUFBLEVBRXBDO0FBQUEsRUFFQTtBQUFBLEVBRUEsZUFBZSxNQUFhO0FBQzFCLFVBQU0sR0FBRyxJQUFJO0FBQ2IsU0FBSyxxQkFBcUI7QUFBQSxFQUM1QjtBQUFBLEVBRUEsV0FBVyxhQUFhO0FBQ3RCLFdBQU87QUFBQSxNQUNMLEdBQUksV0FBbUI7QUFBQSxJQUN6QjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLHVCQUE2QjtBQUMzQixVQUFNLHVCQUF1QjtBQUM3QixTQUFLLG1CQUFtQjtBQUN4QixTQUFLLFVBQVU7QUFDZixTQUFLLGNBQWM7QUFBQSxFQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSx1QkFBdUI7QUFDckIsU0FBSyxVQUFVLG9CQUFJLElBQUk7QUFDdkIsU0FBSyxjQUFjLG9CQUFJLElBQUk7QUFFM0IsU0FBSyxpQkFBaUIsQ0FBQyxNQUFxQjtBQUMxQyxXQUFLLE1BQU0sRUFBRSxHQUFHO0FBQ2hCLFdBQUssZ0JBQWdCLENBQUM7QUFBQSxJQUN4QjtBQUNBLFNBQUssUUFBUSxvQkFBb0IsTUFBTSxLQUFLLGNBQWM7QUFFMUQsU0FBSyxlQUFlLENBQUMsTUFBcUI7QUFDeEMsV0FBSyxRQUFRLEVBQUUsR0FBRztBQUFBLElBQ3BCO0FBQ0EsU0FBSyxRQUFRLGtCQUFrQixNQUFNLEtBQUssWUFBWTtBQUFBLEVBQ3hEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRQSxNQUFNLEtBQWE7QUFDakIsV0FBTyxLQUFLLGFBQWEsSUFBSSxHQUFHLE9BQU8sSUFBSTtBQUFBLEVBQzdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRQSxPQUFPLFNBQWlDLE1BQXlCLFVBQW1CO0FBQ2xGLFVBQU0sV0FBVyxNQUFNLFFBQVEsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPO0FBRTVELGVBQVcsS0FBSyxVQUFVO0FBQ3hCLFdBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxRQUFRO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsU0FBUyxLQUFhO0FBQ3BCLFdBQU8sS0FBSyxTQUFTLE9BQU8sR0FBRyxLQUFLO0FBQUEsRUFDdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFBLFFBQVEsS0FBYTtBQUNuQixXQUFPLEtBQUssYUFBYSxPQUFPLEdBQUcsS0FBSztBQUFBLEVBQzFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRQSxnQkFBZ0IsR0FBa0I7QUFDaEMsU0FBSyxTQUFTLFFBQVEsQ0FBQyxPQUFZLFFBQWE7QUFDOUMsVUFBSSxJQUFJLE1BQU0sR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksSUFBSTtBQUN0QyxjQUFNLENBQUM7QUFBQSxNQUNUO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EscUJBQXFCO0FBQ25CLFFBQUksS0FBSyxrQkFBa0IsS0FBSyxVQUFVO0FBQ3hDLFdBQUssU0FBUyxvQkFBb0IsTUFBTSxLQUFLLGNBQWM7QUFDM0QsYUFBTyxLQUFLO0FBQUEsSUFDZDtBQUNBLFFBQUksS0FBSyxnQkFBZ0IsS0FBSyxVQUFVO0FBQ3RDLFdBQUssU0FBUyxrQkFBa0IsTUFBTSxLQUFLLFlBQVk7QUFDdkQsYUFBTyxLQUFLO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sNkJBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9taXhpbnMvaWRzLWtleWJvYXJkLW1peGluL2lkcy1rZXlib2FyZC1taXhpbi50cz9mZjM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElkc0NvbnN0cnVjdG9yIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtZWxlbWVudCc7XG5pbXBvcnQgeyBFdmVudHNNaXhpbkludGVyZmFjZSB9IGZyb20gJy4uL2lkcy1ldmVudHMtbWl4aW4vaWRzLWV2ZW50cy1taXhpbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2V5Ym9hcmRNaXhpbkludGVyZmFjZSB7XG4gIGxpc3RlbihrZXljb2RlOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nLCBlbGVtOiBIVE1MRWxlbWVudCB8IGFueSwgY2FsbGJhY2s6IHVua25vd24pOiB2b2lkO1xuICB1bmxpc3RlbihrZXk6IHN0cmluZyk6IHZvaWQ7XG4gIGRldGFjaEFsbExpc3RlbmVycygpOiB2b2lkO1xuICBwcmVzcyhrZXk6IHN0cmluZyk6IHZvaWRcbn1cblxudHlwZSBDb25zdHJhaW50cyA9IElkc0NvbnN0cnVjdG9yPEV2ZW50c01peGluSW50ZXJmYWNlPjtcblxuLyoqXG4gKiBIYW5kbGUga2V5Ym9hcmQgc2hvcnRjdXRzIGFuZCBwcmVzc2VkIGRvd24ga2V5c1xuICogQHBhcmFtIHthbnl9IHN1cGVyY2xhc3MgQWNjZXB0cyBhIHN1cGVyY2xhc3MgYW5kIGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3MgZnJvbSBpdFxuICogQHJldHVybnMge2FueX0gVGhlIGV4dGVuZGVkIG9iamVjdFxuICovXG5jb25zdCBJZHNLZXlib2FyZE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJhaW50cz4oc3VwZXJjbGFzczogVCkgPT4gY2xhc3MgZXh0ZW5kcyBzdXBlcmNsYXNzXG4gIGltcGxlbWVudHMgS2V5Ym9hcmRNaXhpbkludGVyZmFjZSB7XG4gIGhvdGtleXM6IE1hcDxhbnksIGFueT4gfCBudWxsID0gbnVsbDtcblxuICBwcmVzc2VkS2V5czogTWFwPGFueSwgYW55PiB8IG51bGwgPSBudWxsO1xuXG4gIGtleURvd25IYW5kbGVyPzogKGU6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQ7XG5cbiAga2V5VXBIYW5kbGVyPzogKGU6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmluaXRLZXlib2FyZEhhbmRsZXJzKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLihzdXBlcmNsYXNzIGFzIGFueSkuYXR0cmlidXRlcyxcbiAgICBdO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2s/LigpO1xuICAgIHRoaXMuZGV0YWNoQWxsTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5ob3RrZXlzID0gbnVsbDtcbiAgICB0aGlzLnByZXNzZWRLZXlzID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUga2V5Ym9hcmQgbWFuYWdlbWVudCBzeXN0ZW0gd2l0aCB0aGUgY3VycmVudCBvYmplY3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXRLZXlib2FyZEhhbmRsZXJzKCkge1xuICAgIHRoaXMuaG90a2V5cyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnByZXNzZWRLZXlzID0gbmV3IE1hcCgpO1xuXG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnByZXNzKGUua2V5KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hIb3RrZXlzKGUpO1xuICAgIH07XG4gICAgdGhpcy5vbkV2ZW50KCdrZXlkb3duLmtleWJvYXJkJywgdGhpcywgdGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlciA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnVucHJlc3MoZS5rZXkpO1xuICAgIH07XG4gICAgdGhpcy5vbkV2ZW50KCdrZXl1cC5rZXlib2FyZCcsIHRoaXMsIHRoaXMua2V5VXBIYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBrZXkgdG8gdGhlIHByZXNzZWRLZXlzIE1hcC5cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBhIHN0cmluZyByZXByZXNlbnRpbmcgYSB7S2V5Ym9hcmRFdmVudC5rZXl9IHRoYXQgd2FzIHByZXNzZWRcbiAgICogQHJldHVybnMge01hcH0gdGhlIGN1cnJlbnQgc2V0IG9mIHByZXNzZWQga2V5c1xuICAgKi9cbiAgcHJlc3Moa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVzc2VkS2V5cz8uc2V0KGAke2tleX1gLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBrZXkgb3Igc2V0IG9mIGtleXNcbiAgICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleWNvZGUgQW4gYXJyYXkgb2YgYWxsIG1hdGNoaW5uZyBrZXljb2Rlc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIFRoZSBvYmplY3Qgd2l0aCB0aGUgbGlzdGVuZXIgYXR0YWNoZWRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGwgYmFjayB3aGVuIHRoaXMgY29tYmluYXRpb24gaXMgbWV0XG4gICAqL1xuICBsaXN0ZW4oa2V5Y29kZTogQXJyYXk8c3RyaW5nPiB8IHN0cmluZywgZWxlbTogSFRNTEVsZW1lbnQgfCBhbnksIGNhbGxiYWNrOiB1bmtub3duKSB7XG4gICAgY29uc3Qga2V5Y29kZXMgPSBBcnJheS5pc0FycmF5KGtleWNvZGUpID8ga2V5Y29kZSA6IFtrZXljb2RlXTtcblxuICAgIGZvciAoY29uc3QgYyBvZiBrZXljb2Rlcykge1xuICAgICAgdGhpcy5ob3RrZXlzPy5zZXQoYCR7Y31gLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBzaW5nbGUgYXBwbGllZCBsaXN0ZW5lciBmb3IgYSBob3RrZXkgY29tYmluYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBBbiBhcnJheSBvZiBhbGwgbWF0Y2hpbmcga2V5Y29kZXNcbiAgICogQHJldHVybnMge01hcH0gdGhlIGN1cnJlbnQgc2V0IG9mIGhvdGtleXNcbiAgICovXG4gIHVubGlzdGVuKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaG90a2V5cz8uZGVsZXRlKGAke2tleX1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBrZXkgZnJvbSB0aGUgcHJlc3NlZEtleXMgbWFwLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IGEgc3RyaW5nIHJlcHJlc2VudGluZyBhIHtLZXlib2FyZEV2ZW50LmtleX0gdGhhdCBpcyBubyBsb25nZXIgYWN0aXZlXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIG9yIG5vdCB0aGUga2V5IGhhZCBiZWVuIHByZXZpb3VzbHkgbG9nZ2VkIGFzIFwicHJlc3NlZFwiXG4gICAqL1xuICB1bnByZXNzKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlc3NlZEtleXM/LmRlbGV0ZShgJHtrZXl9YCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggYW4gZXZlbnQgb24gYW55IGFjdGl2ZSBsaXN0ZW5lcnNcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGUgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGEge0tleWJvYXJkRXZlbnQua2V5fSB0aGF0IGlzIG5vIGxvbmdlciBhY3RpdmVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBkaXNwYXRjaEhvdGtleXMoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMuaG90a2V5cz8uZm9yRWFjaCgodmFsdWU6IGFueSwga2V5OiBhbnkpID0+IHtcbiAgICAgIGlmIChrZXkuc3BsaXQoJywnKS5pbmRleE9mKGUua2V5KSA+IC0xKSB7XG4gICAgICAgIHZhbHVlKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgaGFuZGxlcnMgYW5kIGNsZWFyIG1lbW9yeVxuICAgKi9cbiAgZGV0YWNoQWxsTGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLmtleURvd25IYW5kbGVyICYmIHRoaXMub2ZmRXZlbnQpIHtcbiAgICAgIHRoaXMub2ZmRXZlbnQoJ2tleWRvd24ua2V5Ym9hcmQnLCB0aGlzLCB0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmtleURvd25IYW5kbGVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5rZXlVcEhhbmRsZXIgJiYgdGhpcy5vZmZFdmVudCkge1xuICAgICAgdGhpcy5vZmZFdmVudCgna2V5dXAua2V5Ym9hcmQnLCB0aGlzLCB0aGlzLmtleVVwSGFuZGxlcik7XG4gICAgICBkZWxldGUgdGhpcy5rZXlVcEhhbmRsZXI7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJZHNLZXlib2FyZE1peGluO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/mixins/ids-keyboard-mixin/ids-keyboard-mixin.ts\n");

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
/******/ 			"ids-popup-menu-selected-state": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_components_ids-icon_ids-icon_ts","src_core_ids-data-source_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_components_ids-icon_ids-icon_ts","src_core_ids-data-source_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts"], () => (__webpack_require__("./src/components/ids-popup-menu/demos/selected-state.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
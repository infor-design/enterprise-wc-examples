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

/***/ "./src/components/ids-menu/demos/index.ts":
/*!************************************************!*\
  !*** ./src/components/ids-menu/demos/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-menu */ \"./src/components/ids-menu/ids-menu.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtbWVudS9kZW1vcy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOztBQUNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtbWVudS9kZW1vcy9pbmRleC50cz9hZGNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN1cHBvcnRpbmcgY29tcG9uZW50c1xuaW1wb3J0ICcuLi9pZHMtbWVudSc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-menu/demos/index.ts\n");

/***/ }),

/***/ "./src/mixins/ids-keyboard-mixin/ids-keyboard-mixin.ts":
/*!*************************************************************!*\
  !*** ./src/mixins/ids-keyboard-mixin/ids-keyboard-mixin.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_keyboard_mixin_default)\n/* harmony export */ });\nconst IdsKeyboardMixin = (superclass) => class extends superclass {\n  hotkeys = null;\n  pressedKeys = null;\n  keyDownHandler;\n  keyUpHandler;\n  constructor(...args) {\n    super(...args);\n    this.initKeyboardHandlers();\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes\n    ];\n  }\n  disconnectedCallback() {\n    super.disconnectedCallback?.();\n    this.detachAllListeners();\n    this.hotkeys = null;\n    this.pressedKeys = null;\n  }\n  /**\n   * Initializes the keyboard management system with the current object\n   * @private\n   */\n  initKeyboardHandlers() {\n    this.hotkeys = /* @__PURE__ */ new Map();\n    this.pressedKeys = /* @__PURE__ */ new Map();\n    this.keyDownHandler = (e) => {\n      this.press(e.key);\n      this.dispatchHotkeys(e);\n    };\n    this.onEvent(\"keydown.keyboard\", this, this.keyDownHandler);\n    this.keyUpHandler = (e) => {\n      this.unpress(e.key);\n    };\n    this.onEvent(\"keyup.keyboard\", this, this.keyUpHandler);\n  }\n  /**\n   * Add a key to the pressedKeys Map.\n   * @private\n   * @param {string} key a string representing a {KeyboardEvent.key} that was pressed\n   * @returns {Map} the current set of pressed keys\n   */\n  press(key) {\n    return this.pressedKeys?.set(`${key}`, true);\n  }\n  /**\n   * Add a listener for a key or set of keys\n   * @param {Array|string} keycode An array of all matchinng keycodes\n   * @param {HTMLElement} elem The object with the listener attached\n   * @param {Function} callback The call back when this combination is met\n   */\n  listen(keycode, elem, callback) {\n    const keycodes = Array.isArray(keycode) ? keycode : [keycode];\n    for (const c of keycodes) {\n      this.hotkeys?.set(`${c}`, callback);\n    }\n  }\n  /**\n   * Removes a single applied listener for a hotkey combination\n   * @param {string} key An array of all matching keycodes\n   * @returns {Map} the current set of hotkeys\n   */\n  unlisten(key) {\n    return this.hotkeys?.delete(`${key}`);\n  }\n  /**\n   * Remove a key from the pressedKeys map.\n   * @private\n   * @param {string} key a string representing a {KeyboardEvent.key} that is no longer active\n   * @returns {boolean} whether or not the key had been previously logged as \"pressed\"\n   */\n  unpress(key) {\n    return this.pressedKeys?.delete(`${key}`);\n  }\n  /**\n   * Dispatch an event on any active listeners\n   * @private\n   * @param {object} e a string representing a {KeyboardEvent.key} that is no longer active\n   * @returns {void}\n   */\n  dispatchHotkeys(e) {\n    this.hotkeys?.forEach((value, key) => {\n      if (key.split(\",\").indexOf(e.key) > -1) {\n        value(e);\n      }\n    });\n  }\n  /**\n   * Remove all handlers and clear memory\n   */\n  detachAllListeners() {\n    if (this.keyDownHandler && this.offEvent) {\n      this.offEvent(\"keydown.keyboard\", this, this.keyDownHandler);\n      delete this.keyDownHandler;\n    }\n    if (this.keyUpHandler && this.offEvent) {\n      this.offEvent(\"keyup.keyboard\", this, this.keyUpHandler);\n      delete this.keyUpHandler;\n    }\n  }\n};\nvar ids_keyboard_mixin_default = IdsKeyboardMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1rZXlib2FyZC1taXhpbi9pZHMta2V5Ym9hcmQtbWl4aW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQWlCQSxNQUFNLG1CQUFtQixDQUF3QixlQUFrQixjQUFjLFdBQzdDO0FBQUEsRUFDbEMsVUFBZ0M7QUFBQSxFQUVoQyxjQUFvQztBQUFBLEVBRXBDO0FBQUEsRUFFQTtBQUFBLEVBRUEsZUFBZSxNQUFhO0FBQzFCLFVBQU0sR0FBRyxJQUFJO0FBQ2IsU0FBSyxxQkFBcUI7QUFBQSxFQUM1QjtBQUFBLEVBRUEsV0FBVyxhQUFhO0FBQ3RCLFdBQU87QUFBQSxNQUNMLEdBQUksV0FBbUI7QUFBQSxJQUN6QjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLHVCQUE2QjtBQUMzQixVQUFNLHVCQUF1QjtBQUM3QixTQUFLLG1CQUFtQjtBQUN4QixTQUFLLFVBQVU7QUFDZixTQUFLLGNBQWM7QUFBQSxFQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSx1QkFBdUI7QUFDckIsU0FBSyxVQUFVLG9CQUFJLElBQUk7QUFDdkIsU0FBSyxjQUFjLG9CQUFJLElBQUk7QUFFM0IsU0FBSyxpQkFBaUIsQ0FBQyxNQUFxQjtBQUMxQyxXQUFLLE1BQU0sRUFBRSxHQUFHO0FBQ2hCLFdBQUssZ0JBQWdCLENBQUM7QUFBQSxJQUN4QjtBQUNBLFNBQUssUUFBUSxvQkFBb0IsTUFBTSxLQUFLLGNBQWM7QUFFMUQsU0FBSyxlQUFlLENBQUMsTUFBcUI7QUFDeEMsV0FBSyxRQUFRLEVBQUUsR0FBRztBQUFBLElBQ3BCO0FBQ0EsU0FBSyxRQUFRLGtCQUFrQixNQUFNLEtBQUssWUFBWTtBQUFBLEVBQ3hEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRQSxNQUFNLEtBQWE7QUFDakIsV0FBTyxLQUFLLGFBQWEsSUFBSSxHQUFHLE9BQU8sSUFBSTtBQUFBLEVBQzdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRQSxPQUFPLFNBQWlDLE1BQXlCLFVBQW1CO0FBQ2xGLFVBQU0sV0FBVyxNQUFNLFFBQVEsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPO0FBRTVELGVBQVcsS0FBSyxVQUFVO0FBQ3hCLFdBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxRQUFRO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsU0FBUyxLQUFhO0FBQ3BCLFdBQU8sS0FBSyxTQUFTLE9BQU8sR0FBRyxLQUFLO0FBQUEsRUFDdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFBLFFBQVEsS0FBYTtBQUNuQixXQUFPLEtBQUssYUFBYSxPQUFPLEdBQUcsS0FBSztBQUFBLEVBQzFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRQSxnQkFBZ0IsR0FBa0I7QUFDaEMsU0FBSyxTQUFTLFFBQVEsQ0FBQyxPQUFZLFFBQWE7QUFDOUMsVUFBSSxJQUFJLE1BQU0sR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksSUFBSTtBQUN0QyxjQUFNLENBQUM7QUFBQSxNQUNUO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EscUJBQXFCO0FBQ25CLFFBQUksS0FBSyxrQkFBa0IsS0FBSyxVQUFVO0FBQ3hDLFdBQUssU0FBUyxvQkFBb0IsTUFBTSxLQUFLLGNBQWM7QUFDM0QsYUFBTyxLQUFLO0FBQUEsSUFDZDtBQUNBLFFBQUksS0FBSyxnQkFBZ0IsS0FBSyxVQUFVO0FBQ3RDLFdBQUssU0FBUyxrQkFBa0IsTUFBTSxLQUFLLFlBQVk7QUFDdkQsYUFBTyxLQUFLO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sNkJBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9taXhpbnMvaWRzLWtleWJvYXJkLW1peGluL2lkcy1rZXlib2FyZC1taXhpbi50cz9mZjM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElkc0NvbnN0cnVjdG9yIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtZWxlbWVudCc7XG5pbXBvcnQgeyBFdmVudHNNaXhpbkludGVyZmFjZSB9IGZyb20gJy4uL2lkcy1ldmVudHMtbWl4aW4vaWRzLWV2ZW50cy1taXhpbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2V5Ym9hcmRNaXhpbkludGVyZmFjZSB7XG4gIGxpc3RlbihrZXljb2RlOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nLCBlbGVtOiBIVE1MRWxlbWVudCB8IGFueSwgY2FsbGJhY2s6IHVua25vd24pOiB2b2lkO1xuICB1bmxpc3RlbihrZXk6IHN0cmluZyk6IHZvaWQ7XG4gIGRldGFjaEFsbExpc3RlbmVycygpOiB2b2lkO1xuICBwcmVzcyhrZXk6IHN0cmluZyk6IHZvaWRcbn1cblxudHlwZSBDb25zdHJhaW50cyA9IElkc0NvbnN0cnVjdG9yPEV2ZW50c01peGluSW50ZXJmYWNlPjtcblxuLyoqXG4gKiBIYW5kbGUga2V5Ym9hcmQgc2hvcnRjdXRzIGFuZCBwcmVzc2VkIGRvd24ga2V5c1xuICogQHBhcmFtIHthbnl9IHN1cGVyY2xhc3MgQWNjZXB0cyBhIHN1cGVyY2xhc3MgYW5kIGNyZWF0ZXMgYSBuZXcgc3ViY2xhc3MgZnJvbSBpdFxuICogQHJldHVybnMge2FueX0gVGhlIGV4dGVuZGVkIG9iamVjdFxuICovXG5jb25zdCBJZHNLZXlib2FyZE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJhaW50cz4oc3VwZXJjbGFzczogVCkgPT4gY2xhc3MgZXh0ZW5kcyBzdXBlcmNsYXNzXG4gIGltcGxlbWVudHMgS2V5Ym9hcmRNaXhpbkludGVyZmFjZSB7XG4gIGhvdGtleXM6IE1hcDxhbnksIGFueT4gfCBudWxsID0gbnVsbDtcblxuICBwcmVzc2VkS2V5czogTWFwPGFueSwgYW55PiB8IG51bGwgPSBudWxsO1xuXG4gIGtleURvd25IYW5kbGVyPzogKGU6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQ7XG5cbiAga2V5VXBIYW5kbGVyPzogKGU6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmluaXRLZXlib2FyZEhhbmRsZXJzKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLihzdXBlcmNsYXNzIGFzIGFueSkuYXR0cmlidXRlcyxcbiAgICBdO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2s/LigpO1xuICAgIHRoaXMuZGV0YWNoQWxsTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5ob3RrZXlzID0gbnVsbDtcbiAgICB0aGlzLnByZXNzZWRLZXlzID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUga2V5Ym9hcmQgbWFuYWdlbWVudCBzeXN0ZW0gd2l0aCB0aGUgY3VycmVudCBvYmplY3RcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGluaXRLZXlib2FyZEhhbmRsZXJzKCkge1xuICAgIHRoaXMuaG90a2V5cyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnByZXNzZWRLZXlzID0gbmV3IE1hcCgpO1xuXG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnByZXNzKGUua2V5KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hIb3RrZXlzKGUpO1xuICAgIH07XG4gICAgdGhpcy5vbkV2ZW50KCdrZXlkb3duLmtleWJvYXJkJywgdGhpcywgdGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlciA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnVucHJlc3MoZS5rZXkpO1xuICAgIH07XG4gICAgdGhpcy5vbkV2ZW50KCdrZXl1cC5rZXlib2FyZCcsIHRoaXMsIHRoaXMua2V5VXBIYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBrZXkgdG8gdGhlIHByZXNzZWRLZXlzIE1hcC5cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBhIHN0cmluZyByZXByZXNlbnRpbmcgYSB7S2V5Ym9hcmRFdmVudC5rZXl9IHRoYXQgd2FzIHByZXNzZWRcbiAgICogQHJldHVybnMge01hcH0gdGhlIGN1cnJlbnQgc2V0IG9mIHByZXNzZWQga2V5c1xuICAgKi9cbiAgcHJlc3Moa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVzc2VkS2V5cz8uc2V0KGAke2tleX1gLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBrZXkgb3Igc2V0IG9mIGtleXNcbiAgICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleWNvZGUgQW4gYXJyYXkgb2YgYWxsIG1hdGNoaW5uZyBrZXljb2Rlc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIFRoZSBvYmplY3Qgd2l0aCB0aGUgbGlzdGVuZXIgYXR0YWNoZWRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGwgYmFjayB3aGVuIHRoaXMgY29tYmluYXRpb24gaXMgbWV0XG4gICAqL1xuICBsaXN0ZW4oa2V5Y29kZTogQXJyYXk8c3RyaW5nPiB8IHN0cmluZywgZWxlbTogSFRNTEVsZW1lbnQgfCBhbnksIGNhbGxiYWNrOiB1bmtub3duKSB7XG4gICAgY29uc3Qga2V5Y29kZXMgPSBBcnJheS5pc0FycmF5KGtleWNvZGUpID8ga2V5Y29kZSA6IFtrZXljb2RlXTtcblxuICAgIGZvciAoY29uc3QgYyBvZiBrZXljb2Rlcykge1xuICAgICAgdGhpcy5ob3RrZXlzPy5zZXQoYCR7Y31gLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBzaW5nbGUgYXBwbGllZCBsaXN0ZW5lciBmb3IgYSBob3RrZXkgY29tYmluYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBBbiBhcnJheSBvZiBhbGwgbWF0Y2hpbmcga2V5Y29kZXNcbiAgICogQHJldHVybnMge01hcH0gdGhlIGN1cnJlbnQgc2V0IG9mIGhvdGtleXNcbiAgICovXG4gIHVubGlzdGVuKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaG90a2V5cz8uZGVsZXRlKGAke2tleX1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBrZXkgZnJvbSB0aGUgcHJlc3NlZEtleXMgbWFwLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IGEgc3RyaW5nIHJlcHJlc2VudGluZyBhIHtLZXlib2FyZEV2ZW50LmtleX0gdGhhdCBpcyBubyBsb25nZXIgYWN0aXZlXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIG9yIG5vdCB0aGUga2V5IGhhZCBiZWVuIHByZXZpb3VzbHkgbG9nZ2VkIGFzIFwicHJlc3NlZFwiXG4gICAqL1xuICB1bnByZXNzKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlc3NlZEtleXM/LmRlbGV0ZShgJHtrZXl9YCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggYW4gZXZlbnQgb24gYW55IGFjdGl2ZSBsaXN0ZW5lcnNcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGUgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGEge0tleWJvYXJkRXZlbnQua2V5fSB0aGF0IGlzIG5vIGxvbmdlciBhY3RpdmVcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBkaXNwYXRjaEhvdGtleXMoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMuaG90a2V5cz8uZm9yRWFjaCgodmFsdWU6IGFueSwga2V5OiBhbnkpID0+IHtcbiAgICAgIGlmIChrZXkuc3BsaXQoJywnKS5pbmRleE9mKGUua2V5KSA+IC0xKSB7XG4gICAgICAgIHZhbHVlKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgaGFuZGxlcnMgYW5kIGNsZWFyIG1lbW9yeVxuICAgKi9cbiAgZGV0YWNoQWxsTGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLmtleURvd25IYW5kbGVyICYmIHRoaXMub2ZmRXZlbnQpIHtcbiAgICAgIHRoaXMub2ZmRXZlbnQoJ2tleWRvd24ua2V5Ym9hcmQnLCB0aGlzLCB0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmtleURvd25IYW5kbGVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5rZXlVcEhhbmRsZXIgJiYgdGhpcy5vZmZFdmVudCkge1xuICAgICAgdGhpcy5vZmZFdmVudCgna2V5dXAua2V5Ym9hcmQnLCB0aGlzLCB0aGlzLmtleVVwSGFuZGxlcik7XG4gICAgICBkZWxldGUgdGhpcy5rZXlVcEhhbmRsZXI7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJZHNLZXlib2FyZE1peGluO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/mixins/ids-keyboard-mixin/ids-keyboard-mixin.ts\n");

/***/ }),

/***/ "./src/mixins/ids-theme-mixin/ids-theme-mixin.ts":
/*!*******************************************************!*\
  !*** ./src/mixins/ids-theme-mixin/ids-theme-mixin.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"THEME_MODES\": () => (/* binding */ THEME_MODES),\n/* harmony export */   \"default\": () => (/* binding */ ids_theme_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n\nconst THEME_MODES = [\"light\", \"dark\", \"contrast\"];\nconst IdsThemeMixin = (superclass) => class extends superclass {\n  switcher = null;\n  constructor(...args) {\n    super(...args);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.MODE\n    ];\n  }\n  connectedCallback() {\n    super.connectedCallback?.();\n    this.initThemeHandlers();\n  }\n  disconnectedCallback() {\n    this.offEvent(\"themechanged\");\n    this.switcher = null;\n    super.disconnectedCallback?.();\n  }\n  /**\n   * Init the mixin events and states\n   * @private\n   */\n  initThemeHandlers() {\n    this.switcher = document.querySelector(\"ids-theme-switcher\");\n    if (!this.switcher) {\n      return;\n    }\n    this.mode = this.switcher.mode;\n    this.onEvent(\"themechanged\", this.switcher, (e) => {\n      this.mode = e.detail.mode;\n    });\n  }\n  /**\n   * Set the mode of the current theme\n   * @param {string} value The mode value for example: light, dark, or contrast\n   */\n  set mode(value) {\n    if (!THEME_MODES.includes(value))\n      value = \"light\";\n    this.setAttribute(\"mode\", value);\n    this.container?.setAttribute(\"mode\", value);\n  }\n  /**\n   * Get the mode of the current theme\n   * @returns {string} light, dark, or contrast\n   */\n  get mode() {\n    return this.getAttribute(\"mode\") || \"light\";\n  }\n};\nvar ids_theme_mixin_default = IdsThemeMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy10aGVtZS1taXhpbi9pZHMtdGhlbWUtbWl4aW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJCO0FBT3BCLE1BQU0sY0FBYyxDQUFDLFNBQVMsUUFBUSxVQUFVO0FBT3ZELE1BQU0sZ0JBQWdCLENBQXdCLGVBQWtCLGNBQWMsV0FBVztBQUFBLEVBQ3ZGLFdBQW9DO0FBQUEsRUFFcEMsZUFBZSxNQUFhO0FBQzFCLFVBQU0sR0FBRyxJQUFJO0FBQUEsRUFDZjtBQUFBLEVBRUEsV0FBVyxhQUFhO0FBQ3RCLFdBQU87QUFBQSxNQUNMLEdBQUksV0FBbUI7QUFBQSxNQUN2QixpRUFBZTtBQUFKLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFFQSxvQkFBb0I7QUFDbEIsVUFBTSxvQkFBb0I7QUFDMUIsU0FBSyxrQkFBa0I7QUFBQSxFQUN6QjtBQUFBLEVBRUEsdUJBQXVCO0FBQ3JCLFNBQUssU0FBUyxjQUFjO0FBQzVCLFNBQUssV0FBVztBQUNoQixVQUFNLHVCQUF1QjtBQUFBLEVBQy9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLG9CQUFvQjtBQUNsQixTQUFLLFdBQVcsU0FBUyxjQUFnQyxvQkFBb0I7QUFDN0UsUUFBSSxDQUFDLEtBQUssVUFBVTtBQUNsQjtBQUFBLElBQ0Y7QUFFQSxTQUFLLE9BQU8sS0FBSyxTQUFTO0FBRTFCLFNBQUssUUFBUSxnQkFBZ0IsS0FBSyxVQUFVLENBQUMsTUFBbUI7QUFDOUQsV0FBSyxPQUFPLEVBQUUsT0FBTztBQUFBLElBQ3ZCLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLElBQUksS0FBSyxPQUFlO0FBQ3RCLFFBQUksQ0FBQyxZQUFZLFNBQVMsS0FBSztBQUFHLGNBQVE7QUFDMUMsU0FBSyxhQUFhLFFBQVEsS0FBSztBQUMvQixTQUFLLFdBQVcsYUFBYSxRQUFRLEtBQUs7QUFBQSxFQUM1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxJQUFJLE9BQWU7QUFDakIsV0FBTyxLQUFLLGFBQWEsTUFBTSxLQUFLO0FBQUEsRUFDdEM7QUFDRjtBQUVBLElBQU8sMEJBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9taXhpbnMvaWRzLXRoZW1lLW1peGluL2lkcy10aGVtZS1taXhpbi50cz8yZGIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0dHJpYnV0ZXMgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1hdHRyaWJ1dGVzJztcbmltcG9ydCB7IEV2ZW50c01peGluSW50ZXJmYWNlIH0gZnJvbSAnLi4vaWRzLWV2ZW50cy1taXhpbi9pZHMtZXZlbnRzLW1peGluJztcbmltcG9ydCB7IElkc0NvbnN0cnVjdG9yIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtZWxlbWVudCc7XG5pbXBvcnQgdHlwZSBJZHNUaGVtZVN3aXRjaGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaWRzLXRoZW1lLXN3aXRjaGVyL2lkcy10aGVtZS1zd2l0Y2hlcic7XG5cbnR5cGUgQ29uc3RyYWludHMgPSBJZHNDb25zdHJ1Y3RvcjxFdmVudHNNaXhpbkludGVyZmFjZT47XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9NT0RFUyA9IFsnbGlnaHQnLCAnZGFyaycsICdjb250cmFzdCddO1xuXG4vKipcbiAqIEEgbWl4aW4gdGhhdCBhZGRzIHRoZW1pbmcgZnVuY3Rpb25hbGl0eSB0byBjb21wb25lbnRzXG4gKiBAcGFyYW0ge2FueX0gc3VwZXJjbGFzcyBBY2NlcHRzIGEgc3VwZXJjbGFzcyBhbmQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyBmcm9tIGl0XG4gKiBAcmV0dXJucyB7YW55fSBUaGUgZXh0ZW5kZWQgb2JqZWN0XG4gKi9cbmNvbnN0IElkc1RoZW1lTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cmFpbnRzPihzdXBlcmNsYXNzOiBUKSA9PiBjbGFzcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuICBzd2l0Y2hlcjogSWRzVGhlbWVTd2l0Y2hlciB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLihzdXBlcmNsYXNzIGFzIGFueSkuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMuTU9ERVxuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaz8uKCk7XG4gICAgdGhpcy5pbml0VGhlbWVIYW5kbGVycygpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5vZmZFdmVudCgndGhlbWVjaGFuZ2VkJyk7XG4gICAgdGhpcy5zd2l0Y2hlciA9IG51bGw7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2s/LigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgdGhlIG1peGluIGV2ZW50cyBhbmQgc3RhdGVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0VGhlbWVIYW5kbGVycygpIHtcbiAgICB0aGlzLnN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxJZHNUaGVtZVN3aXRjaGVyPignaWRzLXRoZW1lLXN3aXRjaGVyJyk7XG4gICAgaWYgKCF0aGlzLnN3aXRjaGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tb2RlID0gdGhpcy5zd2l0Y2hlci5tb2RlO1xuXG4gICAgdGhpcy5vbkV2ZW50KCd0aGVtZWNoYW5nZWQnLCB0aGlzLnN3aXRjaGVyLCAoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubW9kZSA9IGUuZGV0YWlsLm1vZGU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtb2RlIG9mIHRoZSBjdXJyZW50IHRoZW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgbW9kZSB2YWx1ZSBmb3IgZXhhbXBsZTogbGlnaHQsIGRhcmssIG9yIGNvbnRyYXN0XG4gICAqL1xuICBzZXQgbW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKCFUSEVNRV9NT0RFUy5pbmNsdWRlcyh2YWx1ZSkpIHZhbHVlID0gJ2xpZ2h0JztcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbW9kZScsIHZhbHVlKTtcbiAgICB0aGlzLmNvbnRhaW5lcj8uc2V0QXR0cmlidXRlKCdtb2RlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbW9kZSBvZiB0aGUgY3VycmVudCB0aGVtZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBsaWdodCwgZGFyaywgb3IgY29udHJhc3RcbiAgICovXG4gIGdldCBtb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdtb2RlJykgfHwgJ2xpZ2h0JztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSWRzVGhlbWVNaXhpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mixins/ids-theme-mixin/ids-theme-mixin.ts\n");

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
/******/ 		__webpack_require__.h = () => ("216ac2806d0661883707")
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
/******/ 			"ids-menu": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-icon_ids-icon_ts","src_core_ids-data-source_ts","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-icon_ids-icon_ts","src_core_ids-data-source_ts","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts"], () => (__webpack_require__("./src/components/ids-menu/demos/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
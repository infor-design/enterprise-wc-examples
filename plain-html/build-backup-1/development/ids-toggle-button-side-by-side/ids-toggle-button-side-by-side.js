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

/***/ "./src/components/ids-toggle-button/demos/side-by-side.ts":
/*!****************************************************************!*\
  !*** ./src/components/ids-toggle-button/demos/side-by-side.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_toggle_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-toggle-button */ \"./src/components/ids-toggle-button/ids-toggle-button.ts\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  document.querySelectorAll(\"ids-toggle-button\").forEach((idsButton) => {\n    idsButton.addEventListener(\"click\", (e) => {\n      e.target.toggle();\n    });\n  });\n});\n$(\"body\").initialize();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtdG9nZ2xlLWJ1dHRvbi9kZW1vcy9zaWRlLWJ5LXNpZGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBTztBQUVQLFNBQVMsaUJBQWlCLG9CQUFvQixNQUFNO0FBRWxELFdBQVMsaUJBQWlCLG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxjQUFjO0FBQ3BFLGNBQVUsaUJBQWlCLFNBQVMsQ0FBQyxNQUFXO0FBQzlDLFFBQUUsT0FBTyxPQUFPO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBQ0gsQ0FBQztBQUNILENBQUM7QUFHRCxFQUFFLE1BQU0sRUFBRSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtdG9nZ2xlLWJ1dHRvbi9kZW1vcy9zaWRlLWJ5LXNpZGUudHM/MDUwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2lkcy10b2dnbGUtYnV0dG9uJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRlc3QgY2xpY2thYmxlIGxpbmtzXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lkcy10b2dnbGUtYnV0dG9uJykuZm9yRWFjaCgoaWRzQnV0dG9uKSA9PiB7XG4gICAgaWRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IGFueSkgPT4ge1xuICAgICAgZS50YXJnZXQudG9nZ2xlKCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8vIEluaXRpYWxpemUgdGhlIDQueFxuJCgnYm9keScpLmluaXRpYWxpemUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-toggle-button/demos/side-by-side.ts\n");

/***/ }),

/***/ "./src/components/ids-toggle-button/ids-toggle-button.ts":
/*!***************************************************************!*\
  !*** ./src/components/ids-toggle-button/ids-toggle-button.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IdsToggleButton)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _core_ids_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ids-decorators */ \"./src/core/ids-decorators.ts\");\n/* harmony import */ var _ids_button_ids_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ids-button/ids-button */ \"./src/components/ids-button/ids-button.ts\");\n/* harmony import */ var _ids_button_ids_button_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ids-button/ids-button-common */ \"./src/components/ids-button/ids-button-common.ts\");\n/* harmony import */ var _utils_ids_string_utils_ids_string_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ids-string-utils/ids-string-utils */ \"./src/utils/ids-string-utils/ids-string-utils.ts\");\n/* harmony import */ var _ids_icon_ids_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ids-icon/ids-icon */ \"./src/components/ids-icon/ids-icon.ts\");\n/* harmony import */ var _ids_button_ids_button_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ids-button/ids-button.scss */ \"./src/components/ids-button/ids-button.scss\");\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __decorateClass = (decorators, target, key, kind) => {\n  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;\n  for (var i = decorators.length - 1, decorator; i >= 0; i--)\n    if (decorator = decorators[i])\n      result = (kind ? decorator(target, key, result) : decorator(result)) || result;\n  if (kind && result)\n    __defProp(target, key, result);\n  return result;\n};\n\n\n\n\n\n\n\nconst DEFAULT_ICON_OFF = \"star-outlined\";\nconst DEFAULT_ICON_ON = \"star-filled\";\nlet IdsToggleButton = class extends _ids_button_ids_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor() {\n    super();\n  }\n  /**\n   * @returns {Array<string>} containing configurable properties on this component\n   */\n  static get attributes() {\n    return _ids_button_ids_button_common__WEBPACK_IMPORTED_MODULE_3__.BUTTON_ATTRIBUTES.concat([\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.ICON_OFF,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.ICON_ON,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.TEXT_OFF,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.TEXT_ON,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.PRESSED\n    ]);\n  }\n  /**\n   * Toggle-Button-level `connectedCallback` implementation (adds an icon refresh)\n   * @returns {void}\n   */\n  connectedCallback() {\n    super.connectedCallback();\n    this.refreshIcon();\n    this.refreshText();\n  }\n  /**\n   * Set the pressed (on/off) state\n   * @param {boolean | string} val if true, the \"toggle\" is activated\n   */\n  set pressed(val) {\n    const trueVal = (0,_utils_ids_string_utils_ids_string_utils__WEBPACK_IMPORTED_MODULE_4__.stringToBool)(val);\n    this.state.pressed = trueVal;\n    this.shouldUpdate = false;\n    if (trueVal) {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.PRESSED, trueVal.toString());\n    } else {\n      this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.PRESSED);\n    }\n    this.shouldUpdate = true;\n    this.refreshIcon();\n    this.refreshText();\n  }\n  get pressed() {\n    return this.state.pressed;\n  }\n  /**\n   * Override setting the \"appearance\" on Toggle Buttons, since they can only be the default style\n   * @param {IdsButtonAppearance | null} val a valid appearance attribute\n   */\n  set appearance(val) {\n    val = _ids_button_ids_button_common__WEBPACK_IMPORTED_MODULE_3__.BUTTON_APPEARANCE[0];\n    super.appearance = val;\n  }\n  /**\n   * @returns {IdsButtonAppearance} the currently set appearance attribute\n   */\n  get appearance() {\n    return super.appearance;\n  }\n  /**\n   * Defines the `unpressed/off` toggle state icon.\n   * @param {string} val corresponds to an IdsIcon's `icon` property\n   * @returns {void}\n   */\n  set iconOff(val) {\n    if (typeof val === \"string\" && val.length) {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.ICON_OFF, val);\n    } else {\n      this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.ICON_OFF);\n    }\n    this.refreshIcon();\n  }\n  /**\n   * @returns {string} the current icon representing the `unpressed/off` state\n   */\n  get iconOff() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.ICON_OFF) || DEFAULT_ICON_OFF;\n  }\n  /**\n   * Defines the `pressed/on` toggle state icon.\n   * @param {string} val corresponds to an IdsIcon's `icon` property\n   * @returns {void}\n   */\n  set iconOn(val) {\n    if (typeof val === \"string\" && val.length) {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.ICON_ON, val);\n    } else {\n      this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.ICON_ON);\n    }\n    this.refreshIcon();\n  }\n  /**\n   * @returns {string} the current icon representing the `pressed/on` state\n   */\n  get iconOn() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.ICON_ON) || DEFAULT_ICON_ON;\n  }\n  /**\n   * Defines the `unpressed/off` toggle state text.\n   * @param {string} val `unpressed/off` description text\n   * @returns {void}\n   */\n  set textOff(val) {\n    if (typeof val !== \"string\" || !val.length) {\n      this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.TEXT_OFF);\n    } else {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.TEXT_OFF, val);\n    }\n    this.refreshText();\n  }\n  /**\n   * @returns {string} the current icon representing the `unpressed/off` state\n   */\n  get textOff() {\n    return this.getAttribute(\"text-off\") || \"\";\n  }\n  /**\n   * Defines the `pressed/on` toggle state icon.\n   * @param {string} val corresponds to an IdsIcon's `icon` property\n   * @returns {void}\n   */\n  set textOn(val) {\n    if (typeof val !== \"string\" || !val.length) {\n      this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.TEXT_ON);\n    } else {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.TEXT_ON, val);\n    }\n    this.refreshText();\n  }\n  /**\n   * @returns {string} the current icon representing the `pressed/on` state\n   */\n  get textOn() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.TEXT_ON) || \"\";\n  }\n  /**\n   * Sets (or creates) a slotted icon that represents the pressed state\n   * @private\n   * @returns {void}\n   */\n  refreshIcon() {\n    this.icon = this[this.pressed ? \"iconOn\" : \"iconOff\"];\n  }\n  /**\n   * Sets (or creates) a slotted span that contains text\n   * @private\n   * @returns {void}\n   */\n  refreshText() {\n    this.text = this[this.pressed ? \"textOn\" : \"textOff\"];\n  }\n  /**\n   * Toggles the \"pressed\" state of the button\n   * @returns {void}\n   */\n  toggle() {\n    this.pressed = !this.pressed;\n  }\n};\nIdsToggleButton = __decorateClass([\n  (0,_core_ids_decorators__WEBPACK_IMPORTED_MODULE_1__.customElement)(\"ids-toggle-button\"),\n  (0,_core_ids_decorators__WEBPACK_IMPORTED_MODULE_1__.scss)(_ids_button_ids_button_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"])\n], IdsToggleButton);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtdG9nZ2xlLWJ1dHRvbi9pZHMtdG9nZ2xlLWJ1dHRvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJCO0FBQ1M7QUFDZDtBQUUrQjtBQUd4QjtBQUN0QjtBQUVZO0FBR25CLE1BQU0sbUJBQW1CO0FBQ3pCLE1BQU0sa0JBQWtCO0FBU3hCLElBQXFCLGtCQUFyQixjQUE2Qyw4REFBUyxDQUFDO0FBQUEsRUFDckQsY0FBYztBQUNaLFVBQU07QUFBQSxFQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxXQUFXLGFBQTRCO0FBQ3JDLFdBQU8sbUZBQXdCLENBQUM7QUFBQSxNQUM5QixxRUFBbUI7QUFBUixNQUNYLG9FQUFrQjtBQUFQLE1BQ1gscUVBQW1CO0FBQVIsTUFDWCxvRUFBa0I7QUFBUCxNQUNYLG9FQUFrQjtBQUFQLElBQ2IsQ0FBQztBQUFBLEVBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsb0JBQTBCO0FBQ3hCLFVBQU0sa0JBQWtCO0FBQ3hCLFNBQUssWUFBWTtBQUNqQixTQUFLLFlBQVk7QUFBQSxFQUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxJQUFJLFFBQVEsS0FBdUI7QUFDakMsVUFBTSxVQUFVLHNGQUFZLENBQUMsR0FBRztBQUNoQyxTQUFLLE1BQU0sVUFBVTtBQUNyQixTQUFLLGVBQWU7QUFFcEIsUUFBSSxTQUFTO0FBQ1gsV0FBSyxhQUFhLG9FQUFrQixFQUFFLFFBQVEsU0FBUyxDQUFDO0FBQUEsSUFDMUQsT0FBTztBQUNMLFdBQUssZ0JBQWdCLG9FQUFrQjtBQUFBLElBQ3pDO0FBQ0EsU0FBSyxlQUFlO0FBRXBCLFNBQUssWUFBWTtBQUNqQixTQUFLLFlBQVk7QUFBQSxFQUNuQjtBQUFBLEVBRUEsSUFBSSxVQUFtQjtBQUNyQixXQUFPLEtBQUssTUFBTTtBQUFBLEVBQ3BCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLElBQUksV0FBVyxLQUFpQztBQUM5QyxVQUFNLCtFQUFvQjtBQUMxQixVQUFNLGFBQWE7QUFBQSxFQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsSUFBSSxhQUFrQztBQUNwQyxXQUFPLE1BQU07QUFBQSxFQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsSUFBSSxRQUFRLEtBQWE7QUFDdkIsUUFBSSxPQUFPLFFBQVEsWUFBWSxJQUFJLFFBQVE7QUFDekMsV0FBSyxhQUFhLHFFQUFtQixFQUFFLEdBQUc7QUFBQSxJQUM1QyxPQUFPO0FBQ0wsV0FBSyxnQkFBZ0IscUVBQW1CO0FBQUEsSUFDMUM7QUFFQSxTQUFLLFlBQVk7QUFBQSxFQUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsSUFBSSxVQUFrQjtBQUNwQixXQUFPLEtBQUssYUFBYSxxRUFBbUIsS0FBSztBQUFBLEVBQ25EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsSUFBSSxPQUFPLEtBQWE7QUFDdEIsUUFBSSxPQUFPLFFBQVEsWUFBWSxJQUFJLFFBQVE7QUFDekMsV0FBSyxhQUFhLG9FQUFrQixFQUFFLEdBQUc7QUFBQSxJQUMzQyxPQUFPO0FBQ0wsV0FBSyxnQkFBZ0Isb0VBQWtCO0FBQUEsSUFDekM7QUFDQSxTQUFLLFlBQVk7QUFBQSxFQUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsSUFBSSxTQUFpQjtBQUNuQixXQUFPLEtBQUssYUFBYSxvRUFBa0IsS0FBSztBQUFBLEVBQ2xEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsSUFBSSxRQUFRLEtBQWE7QUFDdkIsUUFBSSxPQUFPLFFBQVEsWUFBWSxDQUFDLElBQUksUUFBUTtBQUMxQyxXQUFLLGdCQUFnQixxRUFBbUI7QUFBQSxJQUMxQyxPQUFPO0FBQ0wsV0FBSyxhQUFhLHFFQUFtQixFQUFFLEdBQUc7QUFBQSxJQUM1QztBQUNBLFNBQUssWUFBWTtBQUFBLEVBQ25CO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxJQUFJLFVBQWtCO0FBQ3BCLFdBQU8sS0FBSyxhQUFhLFVBQVUsS0FBSztBQUFBLEVBQzFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsSUFBSSxPQUFPLEtBQWE7QUFDdEIsUUFBSSxPQUFPLFFBQVEsWUFBWSxDQUFDLElBQUksUUFBUTtBQUMxQyxXQUFLLGdCQUFnQixvRUFBa0I7QUFBQSxJQUN6QyxPQUFPO0FBQ0wsV0FBSyxhQUFhLG9FQUFrQixFQUFFLEdBQUc7QUFBQSxJQUMzQztBQUNBLFNBQUssWUFBWTtBQUFBLEVBQ25CO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxJQUFJLFNBQWlCO0FBQ25CLFdBQU8sS0FBSyxhQUFhLG9FQUFrQixLQUFLO0FBQUEsRUFDbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPQSxjQUFvQjtBQUNsQixTQUFLLE9BQU8sS0FBSyxLQUFLLFVBQVUsV0FBVyxTQUFTO0FBQUEsRUFDdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPQSxjQUFvQjtBQUNsQixTQUFLLE9BQU8sS0FBSyxLQUFLLFVBQVUsV0FBVyxTQUFTO0FBQUEsRUFDdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsU0FBZTtBQUNiLFNBQUssVUFBVSxDQUFDLEtBQUs7QUFBQSxFQUN2QjtBQUNGO0FBbExxQixrQkFBckI7QUFBQSxFQUZDLG1FQUFhLENBQUMsbUJBQW1CO0FBQUEsRUFDakMsMERBQUksQ0FBQyxtRUFBTTtBQUFBLEdBQ1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy10b2dnbGUtYnV0dG9uL2lkcy10b2dnbGUtYnV0dG9uLnRzP2IwNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gJy4uLy4uL2NvcmUvaWRzLWF0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgc2NzcyB9IGZyb20gJy4uLy4uL2NvcmUvaWRzLWRlY29yYXRvcnMnO1xuaW1wb3J0IElkc0J1dHRvbiBmcm9tICcuLi9pZHMtYnV0dG9uL2lkcy1idXR0b24nO1xuXG5pbXBvcnQgeyBCVVRUT05fQVRUUklCVVRFUywgQlVUVE9OX0FQUEVBUkFOQ0UgfSBmcm9tICcuLi9pZHMtYnV0dG9uL2lkcy1idXR0b24tY29tbW9uJztcbmltcG9ydCB0eXBlIHsgSWRzQnV0dG9uQXBwZWFyYW5jZSB9IGZyb20gJy4uL2lkcy1idXR0b24vaWRzLWJ1dHRvbi1jb21tb24nO1xuXG5pbXBvcnQgeyBzdHJpbmdUb0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscy9pZHMtc3RyaW5nLXV0aWxzL2lkcy1zdHJpbmctdXRpbHMnO1xuaW1wb3J0ICcuLi9pZHMtaWNvbi9pZHMtaWNvbic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vaWRzLWJ1dHRvbi9pZHMtYnV0dG9uLnNjc3MnO1xuXG4vLyBEZWZhdWx0IFRvZ2dsZSBCdXR0b24gSWNvbnNcbmNvbnN0IERFRkFVTFRfSUNPTl9PRkYgPSAnc3Rhci1vdXRsaW5lZCc7XG5jb25zdCBERUZBVUxUX0lDT05fT04gPSAnc3Rhci1maWxsZWQnO1xuXG4vKipcbiAqIElEUyBUb2dnbGUgQnV0dG9uIENvbXBvbmVudFxuICogQHR5cGUge0lkc1RvZ2dsZUJ1dHRvbn1cbiAqIEBpbmhlcml0cyBJZHNCdXR0b25cbiAqL1xuQGN1c3RvbUVsZW1lbnQoJ2lkcy10b2dnbGUtYnV0dG9uJylcbkBzY3NzKHN0eWxlcylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkc1RvZ2dsZUJ1dHRvbiBleHRlbmRzIElkc0J1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge0FycmF5PHN0cmluZz59IGNvbnRhaW5pbmcgY29uZmlndXJhYmxlIHByb3BlcnRpZXMgb24gdGhpcyBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyBnZXQgYXR0cmlidXRlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gQlVUVE9OX0FUVFJJQlVURVMuY29uY2F0KFtcbiAgICAgIGF0dHJpYnV0ZXMuSUNPTl9PRkYsXG4gICAgICBhdHRyaWJ1dGVzLklDT05fT04sXG4gICAgICBhdHRyaWJ1dGVzLlRFWFRfT0ZGLFxuICAgICAgYXR0cmlidXRlcy5URVhUX09OLFxuICAgICAgYXR0cmlidXRlcy5QUkVTU0VELFxuICAgIF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZS1CdXR0b24tbGV2ZWwgYGNvbm5lY3RlZENhbGxiYWNrYCBpbXBsZW1lbnRhdGlvbiAoYWRkcyBhbiBpY29uIHJlZnJlc2gpXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLnJlZnJlc2hJY29uKCk7XG4gICAgdGhpcy5yZWZyZXNoVGV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcHJlc3NlZCAob24vb2ZmKSBzdGF0ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW4gfCBzdHJpbmd9IHZhbCBpZiB0cnVlLCB0aGUgXCJ0b2dnbGVcIiBpcyBhY3RpdmF0ZWRcbiAgICovXG4gIHNldCBwcmVzc2VkKHZhbDogYm9vbGVhbiB8IHN0cmluZykge1xuICAgIGNvbnN0IHRydWVWYWwgPSBzdHJpbmdUb0Jvb2wodmFsKTtcbiAgICB0aGlzLnN0YXRlLnByZXNzZWQgPSB0cnVlVmFsO1xuICAgIHRoaXMuc2hvdWxkVXBkYXRlID0gZmFsc2U7XG5cbiAgICBpZiAodHJ1ZVZhbCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5QUkVTU0VELCB0cnVlVmFsLnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVzLlBSRVNTRUQpO1xuICAgIH1cbiAgICB0aGlzLnNob3VsZFVwZGF0ZSA9IHRydWU7XG5cbiAgICB0aGlzLnJlZnJlc2hJY29uKCk7XG4gICAgdGhpcy5yZWZyZXNoVGV4dCgpO1xuICB9XG5cbiAgZ2V0IHByZXNzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucHJlc3NlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBzZXR0aW5nIHRoZSBcImFwcGVhcmFuY2VcIiBvbiBUb2dnbGUgQnV0dG9ucywgc2luY2UgdGhleSBjYW4gb25seSBiZSB0aGUgZGVmYXVsdCBzdHlsZVxuICAgKiBAcGFyYW0ge0lkc0J1dHRvbkFwcGVhcmFuY2UgfCBudWxsfSB2YWwgYSB2YWxpZCBhcHBlYXJhbmNlIGF0dHJpYnV0ZVxuICAgKi9cbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBJZHNCdXR0b25BcHBlYXJhbmNlIHwgbnVsbCkge1xuICAgIHZhbCA9IEJVVFRPTl9BUFBFQVJBTkNFWzBdO1xuICAgIHN1cGVyLmFwcGVhcmFuY2UgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge0lkc0J1dHRvbkFwcGVhcmFuY2V9IHRoZSBjdXJyZW50bHkgc2V0IGFwcGVhcmFuY2UgYXR0cmlidXRlXG4gICAqL1xuICBnZXQgYXBwZWFyYW5jZSgpOiBJZHNCdXR0b25BcHBlYXJhbmNlIHtcbiAgICByZXR1cm4gc3VwZXIuYXBwZWFyYW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBgdW5wcmVzc2VkL29mZmAgdG9nZ2xlIHN0YXRlIGljb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWwgY29ycmVzcG9uZHMgdG8gYW4gSWRzSWNvbidzIGBpY29uYCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIHNldCBpY29uT2ZmKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuSUNPTl9PRkYsIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZXMuSUNPTl9PRkYpO1xuICAgIH1cblxuICAgIHRoaXMucmVmcmVzaEljb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgY3VycmVudCBpY29uIHJlcHJlc2VudGluZyB0aGUgYHVucHJlc3NlZC9vZmZgIHN0YXRlXG4gICAqL1xuICBnZXQgaWNvbk9mZigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLklDT05fT0ZGKSB8fCBERUZBVUxUX0lDT05fT0ZGO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBwcmVzc2VkL29uYCB0b2dnbGUgc3RhdGUgaWNvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbCBjb3JyZXNwb25kcyB0byBhbiBJZHNJY29uJ3MgYGljb25gIHByb3BlcnR5XG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgc2V0IGljb25Pbih2YWw6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLklDT05fT04sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZXMuSUNPTl9PTik7XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaEljb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgY3VycmVudCBpY29uIHJlcHJlc2VudGluZyB0aGUgYHByZXNzZWQvb25gIHN0YXRlXG4gICAqL1xuICBnZXQgaWNvbk9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuSUNPTl9PTikgfHwgREVGQVVMVF9JQ09OX09OO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGB1bnByZXNzZWQvb2ZmYCB0b2dnbGUgc3RhdGUgdGV4dC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbCBgdW5wcmVzc2VkL29mZmAgZGVzY3JpcHRpb24gdGV4dFxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIHNldCB0ZXh0T2ZmKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnIHx8ICF2YWwubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVzLlRFWFRfT0ZGKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5URVhUX09GRiwgdmFsKTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoVGV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBjdXJyZW50IGljb24gcmVwcmVzZW50aW5nIHRoZSBgdW5wcmVzc2VkL29mZmAgc3RhdGVcbiAgICovXG4gIGdldCB0ZXh0T2ZmKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0ZXh0LW9mZicpIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGBwcmVzc2VkL29uYCB0b2dnbGUgc3RhdGUgaWNvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbCBjb3JyZXNwb25kcyB0byBhbiBJZHNJY29uJ3MgYGljb25gIHByb3BlcnR5XG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgc2V0IHRleHRPbih2YWw6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJyB8fCAhdmFsLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlcy5URVhUX09OKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5URVhUX09OLCB2YWwpO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hUZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGN1cnJlbnQgaWNvbiByZXByZXNlbnRpbmcgdGhlIGBwcmVzc2VkL29uYCBzdGF0ZVxuICAgKi9cbiAgZ2V0IHRleHRPbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVzLlRFWFRfT04pIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgKG9yIGNyZWF0ZXMpIGEgc2xvdHRlZCBpY29uIHRoYXQgcmVwcmVzZW50cyB0aGUgcHJlc3NlZCBzdGF0ZVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIHJlZnJlc2hJY29uKCk6IHZvaWQge1xuICAgIHRoaXMuaWNvbiA9IHRoaXNbdGhpcy5wcmVzc2VkID8gJ2ljb25PbicgOiAnaWNvbk9mZiddO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgKG9yIGNyZWF0ZXMpIGEgc2xvdHRlZCBzcGFuIHRoYXQgY29udGFpbnMgdGV4dFxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIHJlZnJlc2hUZXh0KCk6IHZvaWQge1xuICAgIHRoaXMudGV4dCA9IHRoaXNbdGhpcy5wcmVzc2VkID8gJ3RleHRPbicgOiAndGV4dE9mZiddO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIFwicHJlc3NlZFwiIHN0YXRlIG9mIHRoZSBidXR0b25cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5wcmVzc2VkID0gIXRoaXMucHJlc3NlZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-toggle-button/ids-toggle-button.ts\n");

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
/******/ 			"ids-toggle-button-side-by-side": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts"], () => (__webpack_require__("./src/components/ids-toggle-button/demos/side-by-side.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
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

/***/ "./src/components/ids-modal-button/ids-modal-button.ts":
/*!*************************************************************!*\
  !*** ./src/components/ids-modal-button/ids-modal-button.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IdsModalButton)\n/* harmony export */ });\n/* harmony import */ var _core_ids_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-decorators */ \"./src/core/ids-decorators.ts\");\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _utils_ids_string_utils_ids_string_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ids-string-utils/ids-string-utils */ \"./src/utils/ids-string-utils/ids-string-utils.ts\");\n/* harmony import */ var _ids_button_ids_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ids-button/ids-button */ \"./src/components/ids-button/ids-button.ts\");\n/* harmony import */ var _ids_button_ids_button_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ids-button/ids-button.scss */ \"./src/components/ids-button/ids-button.scss\");\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __decorateClass = (decorators, target, key, kind) => {\n  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;\n  for (var i = decorators.length - 1, decorator; i >= 0; i--)\n    if (decorator = decorators[i])\n      result = (kind ? decorator(target, key, result) : decorator(result)) || result;\n  if (kind && result)\n    __defProp(target, key, result);\n  return result;\n};\n\n\n\n\n\nlet IdsModalButton = class extends _ids_button_ids_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n  constructor() {\n    super();\n  }\n  /**\n   * Toggle-Button-level `connectedCallback` implementation (adds an icon refresh)\n   */\n  connectedCallback() {\n    super.connectedCallback();\n  }\n  /**\n   * @returns {Array} containing configurable properties on this component\n   */\n  static get attributes() {\n    return [\n      ...super.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.CANCEL\n    ];\n  }\n  /**\n   * Figure out the classes\n   * @private\n   * @readonly\n   * @returns {Array} containing classes used to identify this button prototype\n   */\n  get protoClasses() {\n    return [\"ids-modal-button\"];\n  }\n  /**\n   * @returns {boolean} true if the button is a cancel button\n   */\n  get cancel() {\n    return this.hasAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.CANCEL);\n  }\n  /**\n   * @param {boolean} val true if the button should be able to cancel the Modal\n   */\n  set cancel(val) {\n    const isValueTruthy = (0,_utils_ids_string_utils_ids_string_utils__WEBPACK_IMPORTED_MODULE_2__.stringToBool)(val);\n    if (isValueTruthy) {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.CANCEL, `${val}`);\n    } else {\n      this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.CANCEL);\n    }\n  }\n};\nIdsModalButton = __decorateClass([\n  (0,_core_ids_decorators__WEBPACK_IMPORTED_MODULE_0__.customElement)(\"ids-modal-button\"),\n  (0,_core_ids_decorators__WEBPACK_IMPORTED_MODULE_0__.scss)(_ids_button_ids_button_scss__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n], IdsModalButton);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtbW9kYWwtYnV0dG9uL2lkcy1tb2RhbC1idXR0b24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDVDtBQUNFO0FBRVA7QUFFSDtBQVNuQixJQUFxQixpQkFBckIsY0FBNEMsOERBQVMsQ0FBQztBQUFBLEVBQ3BELGNBQWM7QUFDWixVQUFNO0FBQUEsRUFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0Esb0JBQTBCO0FBQ3hCLFVBQU0sa0JBQWtCO0FBQUEsRUFDMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFdBQVcsYUFBNEI7QUFDckMsV0FBTztBQUFBLE1BQ0wsR0FBRyxNQUFNO0FBQUEsTUFDVCxtRUFBaUI7QUFBTixJQUNiO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUUEsSUFBSSxlQUE4QjtBQUNoQyxXQUFPLENBQUMsa0JBQWtCO0FBQUEsRUFDNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLElBQUksU0FBa0I7QUFDcEIsV0FBTyxLQUFLLGFBQWEsbUVBQWlCO0FBQUEsRUFDNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLElBQUksT0FBTyxLQUFjO0FBQ3ZCLFVBQU0sZ0JBQWdCLHNGQUFZLENBQUMsR0FBRztBQUN0QyxRQUFJLGVBQWU7QUFDakIsV0FBSyxhQUFhLG1FQUFpQixFQUFFLEdBQUcsS0FBSztBQUFBLElBQy9DLE9BQU87QUFDTCxXQUFLLGdCQUFnQixtRUFBaUI7QUFBQSxJQUN4QztBQUFBLEVBQ0Y7QUFDRjtBQWxEcUIsaUJBQXJCO0FBQUEsRUFGQyxtRUFBYSxDQUFDLGtCQUFrQjtBQUFBLEVBQ2hDLDBEQUFJLENBQUMsbUVBQU07QUFBQSxHQUNTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtbW9kYWwtYnV0dG9uL2lkcy1tb2RhbC1idXR0b24udHM/ODNlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBzY3NzIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtYXR0cmlidXRlcyc7XG5pbXBvcnQgeyBzdHJpbmdUb0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscy9pZHMtc3RyaW5nLXV0aWxzL2lkcy1zdHJpbmctdXRpbHMnO1xuXG5pbXBvcnQgSWRzQnV0dG9uIGZyb20gJy4uL2lkcy1idXR0b24vaWRzLWJ1dHRvbic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vaWRzLWJ1dHRvbi9pZHMtYnV0dG9uLnNjc3MnO1xuXG4vKipcbiAqIElEUyBNb2RhbCBCdXR0b24gQ29tcG9uZW50XG4gKiBAdHlwZSB7SWRzTW9kYWxCdXR0b259XG4gKiBAaW5oZXJpdHMgSWRzQnV0dG9uXG4gKi9cbkBjdXN0b21FbGVtZW50KCdpZHMtbW9kYWwtYnV0dG9uJylcbkBzY3NzKHN0eWxlcylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkc01vZGFsQnV0dG9uIGV4dGVuZHMgSWRzQnV0dG9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUtQnV0dG9uLWxldmVsIGBjb25uZWN0ZWRDYWxsYmFja2AgaW1wbGVtZW50YXRpb24gKGFkZHMgYW4gaWNvbiByZWZyZXNoKVxuICAgKi9cbiAgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IGNvbnRhaW5pbmcgY29uZmlndXJhYmxlIHByb3BlcnRpZXMgb24gdGhpcyBjb21wb25lbnRcbiAgICovXG4gIHN0YXRpYyBnZXQgYXR0cmlidXRlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uc3VwZXIuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMuQ0FOQ0VMXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWd1cmUgb3V0IHRoZSBjbGFzc2VzXG4gICAqIEBwcml2YXRlXG4gICAqIEByZWFkb25seVxuICAgKiBAcmV0dXJucyB7QXJyYXl9IGNvbnRhaW5pbmcgY2xhc3NlcyB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgYnV0dG9uIHByb3RvdHlwZVxuICAgKi9cbiAgZ2V0IHByb3RvQ2xhc3NlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gWydpZHMtbW9kYWwtYnV0dG9uJ107XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGJ1dHRvbiBpcyBhIGNhbmNlbCBidXR0b25cbiAgICovXG4gIGdldCBjYW5jZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZXMuQ0FOQ0VMKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbCB0cnVlIGlmIHRoZSBidXR0b24gc2hvdWxkIGJlIGFibGUgdG8gY2FuY2VsIHRoZSBNb2RhbFxuICAgKi9cbiAgc2V0IGNhbmNlbCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBpc1ZhbHVlVHJ1dGh5ID0gc3RyaW5nVG9Cb29sKHZhbCk7XG4gICAgaWYgKGlzVmFsdWVUcnV0aHkpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuQ0FOQ0VMLCBgJHt2YWx9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZXMuQ0FOQ0VMKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-modal-button/ids-modal-button.ts\n");

/***/ }),

/***/ "./src/components/ids-modal/demos/focus.ts":
/*!*************************************************!*\
  !*** ./src/components/ids-modal/demos/focus.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_checkbox_ids_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ids-checkbox/ids-checkbox */ \"./src/components/ids-checkbox/ids-checkbox.ts\");\n/* harmony import */ var _ids_input_ids_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ids-input/ids-input */ \"./src/components/ids-input/ids-input.ts\");\n/* harmony import */ var _ids_dropdown_ids_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ids-dropdown/ids-dropdown */ \"./src/components/ids-dropdown/ids-dropdown.ts\");\n/* harmony import */ var _ids_modal_button_ids_modal_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ids-modal-button/ids-modal-button */ \"./src/components/ids-modal-button/ids-modal-button.ts\");\n/* harmony import */ var _ids_textarea_ids_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ids-textarea/ids-textarea */ \"./src/components/ids-textarea/ids-textarea.ts\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const triggerId = \"#modal-trigger-btn\";\n  const triggerBtn = document.querySelector(triggerId);\n  const modal = document.querySelector(\"ids-modal\");\n  const checkboxCapture = document.querySelector(\"#setting-capture\");\n  const checkboxCycle = document.querySelector(\"#setting-cycle\");\n  modal.target = triggerBtn;\n  modal.triggerType = \"click\";\n  if (!triggerBtn || !checkboxCapture || !checkboxCycle) {\n    return;\n  }\n  modal.addEventListener(\"beforeshow\", () => {\n    checkboxCapture.checked = true;\n    triggerBtn.disabled = true;\n    return true;\n  });\n  modal.onButtonClick = () => {\n    modal.hide();\n  };\n  modal.addEventListener(\"hide\", () => {\n    triggerBtn.disabled = false;\n  });\n  checkboxCapture.addEventListener(\"change\", (e) => {\n    modal.capturesFocus = e.target?.checked;\n    checkboxCycle.disabled = !e.target?.checked;\n  });\n  checkboxCycle.addEventListener(\"change\", (e) => {\n    modal.cyclesFocus = e.target.checked;\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtbW9kYWwvZGVtb3MvZm9jdXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlQLFNBQVMsaUJBQWlCLG9CQUFvQixNQUFNO0FBQ2xELFFBQU0sWUFBWTtBQUNsQixRQUFNLGFBQXVDLFNBQVMsY0FBYyxTQUFTO0FBQzdFLFFBQU0sUUFBYSxTQUFTLGNBQWMsV0FBVztBQUVyRCxRQUFNLGtCQUEyQyxTQUFTLGNBQWMsa0JBQWtCO0FBQzFGLFFBQU0sZ0JBQXlDLFNBQVMsY0FBYyxnQkFBZ0I7QUFHdEYsUUFBTSxTQUFTO0FBQ2YsUUFBTSxjQUFjO0FBRXBCLE1BQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsZUFBZTtBQUNyRDtBQUFBLEVBQ0Y7QUFHQSxRQUFNLGlCQUFpQixjQUFjLE1BQU07QUFDekMsb0JBQWdCLFVBQVU7QUFDMUIsZUFBVyxXQUFXO0FBQ3RCLFdBQU87QUFBQSxFQUNULENBQUM7QUFHRCxRQUFNLGdCQUFnQixNQUFNO0FBQzFCLFVBQU0sS0FBSztBQUFBLEVBQ2I7QUFHQSxRQUFNLGlCQUFpQixRQUFRLE1BQU07QUFDbkMsZUFBVyxXQUFXO0FBQUEsRUFDeEIsQ0FBQztBQUVELGtCQUFnQixpQkFBaUIsVUFBVSxDQUFDLE1BQVc7QUFDckQsVUFBTSxnQkFBZ0IsRUFBRSxRQUFRO0FBQ2hDLGtCQUFjLFdBQVcsQ0FBQyxFQUFFLFFBQVE7QUFBQSxFQUN0QyxDQUFDO0FBRUQsZ0JBQWMsaUJBQWlCLFVBQVUsQ0FBQyxNQUFXO0FBQ25ELFVBQU0sY0FBYyxFQUFFLE9BQU87QUFBQSxFQUMvQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLW1vZGFsL2RlbW9zL2ZvY3VzLnRzP2I2YjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU3VwcG9ydGluZyBDb21wb25lbnRzXG5pbXBvcnQgJy4uLy4uL2lkcy1jaGVja2JveC9pZHMtY2hlY2tib3gnO1xuaW1wb3J0ICcuLi8uLi9pZHMtaW5wdXQvaWRzLWlucHV0JztcbmltcG9ydCAnLi4vLi4vaWRzLWRyb3Bkb3duL2lkcy1kcm9wZG93bic7XG5pbXBvcnQgJy4uLy4uL2lkcy1tb2RhbC1idXR0b24vaWRzLW1vZGFsLWJ1dHRvbic7XG5pbXBvcnQgJy4uLy4uL2lkcy10ZXh0YXJlYS9pZHMtdGV4dGFyZWEnO1xuXG4vLyBpbXBvcnQgJy4vZm9jdXMuc2Nzcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHRyaWdnZXJJZCA9ICcjbW9kYWwtdHJpZ2dlci1idG4nO1xuICBjb25zdCB0cmlnZ2VyQnRuOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRyaWdnZXJJZCk7XG4gIGNvbnN0IG1vZGFsOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZHMtbW9kYWwnKTtcblxuICBjb25zdCBjaGVja2JveENhcHR1cmU6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldHRpbmctY2FwdHVyZScpO1xuICBjb25zdCBjaGVja2JveEN5Y2xlOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5nLWN5Y2xlJyk7XG5cbiAgLy8gTGlua3MgdGhlIE1vZGFsIHRvIGl0cyB0cmlnZ2VyIGJ1dHRvbiAoc2V0cyB1cCBjbGljay9mb2N1cyBldmVudHMpXG4gIG1vZGFsLnRhcmdldCA9IHRyaWdnZXJCdG47XG4gIG1vZGFsLnRyaWdnZXJUeXBlID0gJ2NsaWNrJztcblxuICBpZiAoIXRyaWdnZXJCdG4gfHwgIWNoZWNrYm94Q2FwdHVyZSB8fCAhY2hlY2tib3hDeWNsZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERpc2FibGUgdGhlIHRyaWdnZXIgYnV0dG9uIHdoZW4gc2hvd2luZyB0aGUgTW9kYWwuXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXNob3cnLCAoKSA9PiB7XG4gICAgY2hlY2tib3hDYXB0dXJlLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRyaWdnZXJCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICAvLyBDbG9zZSB0aGUgbW9kYWwgd2hlbiBpdHMgaW5uZXIgYnV0dG9uIGlzIGNsaWNrZWQuXG4gIG1vZGFsLm9uQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgbW9kYWwuaGlkZSgpO1xuICB9O1xuXG4gIC8vIEFmdGVyIHRoZSBtb2RhbCBpcyBkb25lIGhpZGluZywgcmUtZW5hYmxlIGl0cyB0cmlnZ2VyIGJ1dHRvbi5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignaGlkZScsICgpID0+IHtcbiAgICB0cmlnZ2VyQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gIH0pO1xuXG4gIGNoZWNrYm94Q2FwdHVyZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZTogYW55KSA9PiB7XG4gICAgbW9kYWwuY2FwdHVyZXNGb2N1cyA9IGUudGFyZ2V0Py5jaGVja2VkO1xuICAgIGNoZWNrYm94Q3ljbGUuZGlzYWJsZWQgPSAhZS50YXJnZXQ/LmNoZWNrZWQ7XG4gIH0pO1xuXG4gIGNoZWNrYm94Q3ljbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGU6IGFueSkgPT4ge1xuICAgIG1vZGFsLmN5Y2xlc0ZvY3VzID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-modal/demos/focus.ts\n");

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
/******/ 			"ids-modal-focus": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-textarea_ids-textarea_scss","src_components_ids-textarea_ids-textarea_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-textarea_ids-textarea_scss","src_components_ids-textarea_ids-textarea_ts"], () => (__webpack_require__("./src/components/ids-modal/demos/focus.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
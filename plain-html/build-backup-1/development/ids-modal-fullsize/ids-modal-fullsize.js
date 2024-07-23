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

/***/ "./src/components/ids-modal/demos/fullsize.ts":
/*!****************************************************!*\
  !*** ./src/components/ids-modal/demos/fullsize.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ids_breakpoint_utils_ids_breakpoint_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/ids-breakpoint-utils/ids-breakpoint-utils */ \"./src/utils/ids-breakpoint-utils/ids-breakpoint-utils.ts\");\n/* harmony import */ var _ids_radio_ids_radio_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ids-radio/ids-radio-group */ \"./src/components/ids-radio/ids-radio-group.ts\");\n/* harmony import */ var _ids_radio_ids_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ids-radio/ids-radio */ \"./src/components/ids-radio/ids-radio.ts\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const triggerId = \"#modal-trigger-btn\";\n  const triggerBtn = document.querySelector(triggerId);\n  const modal = document.querySelector(\"ids-modal\");\n  modal.target = triggerBtn;\n  modal.triggerType = \"click\";\n  modal.addEventListener(\"beforeshow\", () => {\n    triggerBtn.disabled = true;\n    return true;\n  });\n  modal.onButtonClick = () => {\n    modal.hide();\n  };\n  modal.addEventListener(\"hide\", () => {\n    triggerBtn.disabled = false;\n  });\n  const sizeDisplayEls = [...document.querySelectorAll(\".current-window-width\")];\n  const ro = new ResizeObserver(() => {\n    sizeDisplayEls.forEach((el) => {\n      el.innerHTML = `${window.innerWidth}px`;\n    });\n  });\n  ro.observe(document.querySelector(\"body\"));\n  const sizeRadioContainer = document.querySelector(\"#sizes\");\n  const breakDisplayEl = document.querySelector(\"#break\");\n  const fullsizeValues = [null, ...Object.keys(_utils_ids_breakpoint_utils_ids_breakpoint_utils__WEBPACK_IMPORTED_MODULE_0__.breakpoints).reverse(), \"always\"];\n  let radioHTML = \"\";\n  fullsizeValues.forEach((val) => {\n    let radioText = val;\n    let breakpointSize = \"\";\n    let checked = \"\";\n    if (val !== null && val !== \"always\") {\n      breakpointSize = _utils_ids_breakpoint_utils_ids_breakpoint_utils__WEBPACK_IMPORTED_MODULE_0__.breakpoints[val];\n    }\n    if (val === null) {\n      radioText = \"Never\";\n    }\n    if (val === \"always\") {\n      radioText = \"Always\";\n    }\n    if (val === \"sm\") {\n      checked = \" checked\";\n    }\n    if (breakpointSize.length) {\n      radioText += ` (${breakpointSize})`;\n    }\n    radioHTML += `<ids-radio value=\"${val}\" label=\"${radioText}\"${checked}></ids-radio>`;\n  });\n  sizeRadioContainer.insertAdjacentHTML(\"beforeend\", radioHTML);\n  sizeRadioContainer.addEventListener(\"change\", (e) => {\n    const target = e.target;\n    let selected;\n    if (target) {\n      selected = target.querySelector(`ids-radio[value=\"${target.value}\"]`);\n    }\n    if (selected) {\n      modal.fullsize = selected.value;\n      breakDisplayEl.innerHTML = `\"${selected.label}\"`;\n    }\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtbW9kYWwvZGVtb3MvZnVsbHNpemUudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE0QjtBQUNyQjtBQUNBO0FBRVAsU0FBUyxpQkFBaUIsb0JBQW9CLE1BQU07QUFDbEQsUUFBTSxZQUFZO0FBQ2xCLFFBQU0sYUFBa0IsU0FBUyxjQUFjLFNBQVM7QUFDeEQsUUFBTSxRQUFhLFNBQVMsY0FBYyxXQUFXO0FBR3JELFFBQU0sU0FBUztBQUNmLFFBQU0sY0FBYztBQUdwQixRQUFNLGlCQUFpQixjQUFjLE1BQU07QUFDekMsZUFBVyxXQUFXO0FBQ3RCLFdBQU87QUFBQSxFQUNULENBQUM7QUFHRCxRQUFNLGdCQUFnQixNQUFNO0FBQzFCLFVBQU0sS0FBSztBQUFBLEVBQ2I7QUFHQSxRQUFNLGlCQUFpQixRQUFRLE1BQU07QUFDbkMsZUFBVyxXQUFXO0FBQUEsRUFDeEIsQ0FBQztBQUlELFFBQU0saUJBQTZCLENBQUMsR0FBRyxTQUFTLGlCQUFpQix1QkFBdUIsQ0FBQztBQUN6RixRQUFNLEtBQUssSUFBSSxlQUFlLE1BQU07QUFDbEMsbUJBQWUsUUFBUSxDQUFDLE9BQU87QUFDN0IsU0FBRyxZQUFZLEdBQUcsT0FBTztBQUFBLElBQzNCLENBQUM7QUFBQSxFQUNILENBQUM7QUFDRCxLQUFHLFFBQVEsU0FBUyxjQUFjLE1BQU0sQ0FBUTtBQUloRCxRQUFNLHFCQUEwQixTQUFTLGNBQWMsUUFBUTtBQUMvRCxRQUFNLGlCQUFzQixTQUFTLGNBQWMsUUFBUTtBQUMzRCxRQUFNLGlCQUF1QyxDQUFDLE1BQU0sR0FBRyxPQUFPLEtBQUsseUZBQVcsRUFBRSxRQUFRLEdBQUcsUUFBUTtBQUduRyxNQUFJLFlBQVk7QUFDaEIsaUJBQWUsUUFBUSxDQUFDLFFBQVE7QUFDOUIsUUFBSSxZQUFZO0FBQ2hCLFFBQUksaUJBQWlCO0FBQ3JCLFFBQUksVUFBVTtBQUVkLFFBQUksUUFBUSxRQUFRLFFBQVEsVUFBVTtBQUNwQyx1QkFBaUIseUZBQVcsQ0FBQyxHQUFHO0FBQUEsSUFDbEM7QUFDQSxRQUFJLFFBQVEsTUFBTTtBQUNoQixrQkFBWTtBQUFBLElBQ2Q7QUFDQSxRQUFJLFFBQVEsVUFBVTtBQUNwQixrQkFBWTtBQUFBLElBQ2Q7QUFDQSxRQUFJLFFBQVEsTUFBTTtBQUNoQixnQkFBVTtBQUFBLElBQ1o7QUFDQSxRQUFJLGVBQWUsUUFBUTtBQUN6QixtQkFBYSxLQUFLO0FBQUEsSUFDcEI7QUFFQSxpQkFBYSxxQkFBcUIsZUFBZSxhQUFhO0FBQUEsRUFDaEUsQ0FBQztBQUNELHFCQUFtQixtQkFBbUIsYUFBYSxTQUFTO0FBRzVELHFCQUFtQixpQkFBaUIsVUFBVSxDQUFDLE1BQWE7QUFDMUQsVUFBTSxTQUFjLEVBQUU7QUFDdEIsUUFBSTtBQUVKLFFBQUksUUFBUTtBQUNWLGlCQUFXLE9BQU8sY0FBYyxvQkFBb0IsT0FBTyxTQUFTO0FBQUEsSUFDdEU7QUFFQSxRQUFJLFVBQVU7QUFDWixZQUFNLFdBQVcsU0FBUztBQUMxQixxQkFBZSxZQUFZLElBQUksU0FBUztBQUFBLElBQzFDO0FBQUEsRUFDRixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLW1vZGFsL2RlbW9zL2Z1bGxzaXplLnRzP2I0OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnJlYWtwb2ludHMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9pZHMtYnJlYWtwb2ludC11dGlscy9pZHMtYnJlYWtwb2ludC11dGlscyc7XG5pbXBvcnQgJy4uLy4uL2lkcy1yYWRpby9pZHMtcmFkaW8tZ3JvdXAnO1xuaW1wb3J0ICcuLi8uLi9pZHMtcmFkaW8vaWRzLXJhZGlvJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgdHJpZ2dlcklkID0gJyNtb2RhbC10cmlnZ2VyLWJ0bic7XG4gIGNvbnN0IHRyaWdnZXJCdG46IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodHJpZ2dlcklkKTtcbiAgY29uc3QgbW9kYWw6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lkcy1tb2RhbCcpO1xuXG4gIC8vIExpbmtzIHRoZSBNb2RhbCB0byBpdHMgdHJpZ2dlciBidXR0b24gKHNldHMgdXAgY2xpY2svZm9jdXMgZXZlbnRzKVxuICBtb2RhbC50YXJnZXQgPSB0cmlnZ2VyQnRuO1xuICBtb2RhbC50cmlnZ2VyVHlwZSA9ICdjbGljayc7XG5cbiAgLy8gRGlzYWJsZSB0aGUgdHJpZ2dlciBidXR0b24gd2hlbiBzaG93aW5nIHRoZSBNb2RhbC5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3Jlc2hvdycsICgpID0+IHtcbiAgICB0cmlnZ2VyQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG5cbiAgLy8gQ2xvc2UgdGhlIG1vZGFsIHdoZW4gaXRzIGlubmVyIGJ1dHRvbiBpcyBjbGlja2VkLlxuICBtb2RhbC5vbkJ1dHRvbkNsaWNrID0gKCkgPT4ge1xuICAgIG1vZGFsLmhpZGUoKTtcbiAgfTtcblxuICAvLyBBZnRlciB0aGUgbW9kYWwgaXMgZG9uZSBoaWRpbmcsIHJlLWVuYWJsZSBpdHMgdHJpZ2dlciBidXR0b24uXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCAoKSA9PiB7XG4gICAgdHJpZ2dlckJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9KTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFJlc2l6ZSBPYnNlcnZlciBmb3IgZGlzcGxheWluZyBjdXJyZW50IHdpbmRvdyB3aWR0aFxuICBjb25zdCBzaXplRGlzcGxheUVsczogQXJyYXk8YW55PiA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VycmVudC13aW5kb3ctd2lkdGgnKV07XG4gIGNvbnN0IHJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHtcbiAgICBzaXplRGlzcGxheUVscy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuaW5uZXJIVE1MID0gYCR7d2luZG93LmlubmVyV2lkdGh9cHhgO1xuICAgIH0pO1xuICB9KTtcbiAgcm8ub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgYW55KTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIEJ1aWxkIHRoZSBSYWRpbyBCdXR0b25zIHRoYXQgcmVwcmVzZW50IGRpZmZlcmVudCBmdWxsc2l6ZSBzZXR0aW5nc1xuICBjb25zdCBzaXplUmFkaW9Db250YWluZXI6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaXplcycpO1xuICBjb25zdCBicmVha0Rpc3BsYXlFbDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JyZWFrJyk7XG4gIGNvbnN0IGZ1bGxzaXplVmFsdWVzOiBBcnJheTxzdHJpbmcgfCBudWxsPiA9IFtudWxsLCAuLi5PYmplY3Qua2V5cyhicmVha3BvaW50cykucmV2ZXJzZSgpLCAnYWx3YXlzJ107XG5cbiAgLy8gUmVuZGVyIElkc1JhZGlvcyByZXByZXNlbnRpbmcgYWN0dWFsIGJyZWFrcG9pbnQgdmFsdWVzXG4gIGxldCByYWRpb0hUTUwgPSAnJztcbiAgZnVsbHNpemVWYWx1ZXMuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgbGV0IHJhZGlvVGV4dCA9IHZhbDtcbiAgICBsZXQgYnJlYWtwb2ludFNpemUgPSAnJztcbiAgICBsZXQgY2hlY2tlZCA9ICcnO1xuXG4gICAgaWYgKHZhbCAhPT0gbnVsbCAmJiB2YWwgIT09ICdhbHdheXMnKSB7XG4gICAgICBicmVha3BvaW50U2l6ZSA9IGJyZWFrcG9pbnRzW3ZhbF07XG4gICAgfVxuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIHJhZGlvVGV4dCA9ICdOZXZlcic7XG4gICAgfVxuICAgIGlmICh2YWwgPT09ICdhbHdheXMnKSB7XG4gICAgICByYWRpb1RleHQgPSAnQWx3YXlzJztcbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gJ3NtJykge1xuICAgICAgY2hlY2tlZCA9ICcgY2hlY2tlZCc7XG4gICAgfVxuICAgIGlmIChicmVha3BvaW50U2l6ZS5sZW5ndGgpIHtcbiAgICAgIHJhZGlvVGV4dCArPSBgICgke2JyZWFrcG9pbnRTaXplfSlgO1xuICAgIH1cblxuICAgIHJhZGlvSFRNTCArPSBgPGlkcy1yYWRpbyB2YWx1ZT1cIiR7dmFsfVwiIGxhYmVsPVwiJHtyYWRpb1RleHR9XCIke2NoZWNrZWR9PjwvaWRzLXJhZGlvPmA7XG4gIH0pO1xuICBzaXplUmFkaW9Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCByYWRpb0hUTUwpO1xuXG4gIC8vIENoYW5nZSB0aGUgZnVsbHNpemUgc2V0dGluZyBvbiB0aGUgTW9kYWwgc2FtcGxlIHdoZW4gcmFkaW9zIGFyZSBjaGFuZ2VkXG4gIHNpemVSYWRpb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZTogRXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGUudGFyZ2V0O1xuICAgIGxldCBzZWxlY3RlZDtcblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHNlbGVjdGVkID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoYGlkcy1yYWRpb1t2YWx1ZT1cIiR7dGFyZ2V0LnZhbHVlfVwiXWApO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgbW9kYWwuZnVsbHNpemUgPSBzZWxlY3RlZC52YWx1ZTtcbiAgICAgIGJyZWFrRGlzcGxheUVsLmlubmVySFRNTCA9IGBcIiR7c2VsZWN0ZWQubGFiZWx9XCJgO1xuICAgIH1cbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-modal/demos/fullsize.ts\n");

/***/ }),

/***/ "./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts":
/*!***********************************************************************!*\
  !*** ./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_color_variant_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ids-xss-utils/ids-xss-utils */ \"./src/utils/ids-xss-utils/ids-xss-utils.ts\");\n\n\nconst IdsColorVariantMixin = (superclass) => class extends superclass {\n  constructor(...args) {\n    super(...args);\n    if (!this.state) {\n      this.state = {};\n    }\n    this.state.colorVariant = null;\n  }\n  connectedCallback() {\n    super.connectedCallback();\n    if (this.colorVariant)\n      this.#refreshColorVariant(null, this.colorVariant);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT\n    ];\n  }\n  /**\n   * @returns {Array<string>} List of available color variants for this component\n   */\n  colorVariants = [];\n  /**\n   * @returns {string|null} the name of the color variant currently applied\n   */\n  get colorVariant() {\n    return this.state?.colorVariant;\n  }\n  /**\n   * @param {string | null} val the name of the color variant to be applied\n   */\n  set colorVariant(val) {\n    let safeValue = null;\n    if (typeof val === \"string\") {\n      safeValue = (0,_utils_ids_xss_utils_ids_xss_utils__WEBPACK_IMPORTED_MODULE_1__.stripHTML)(val);\n    }\n    const currentValue = this.state.colorVariant;\n    if (safeValue && currentValue !== safeValue) {\n      if (this.colorVariants.includes(safeValue)) {\n        this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT, `${safeValue}`);\n      } else {\n        this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.COLOR_VARIANT);\n        safeValue = null;\n      }\n      this.state.colorVariant = safeValue;\n      this.#refreshColorVariant(currentValue, safeValue);\n    }\n  }\n  /**\n   * Refreshes the component's color variant state, driven by\n   * a CSS class on the WebComponent's `container` element\n   *\n   * @param {string} oldVariantName the variant name to \"remove\" from the style\n   * @param {string} newVariantName the variant name to \"add\" to the style\n   * @returns {void}\n   */\n  #refreshColorVariant(oldVariantName, newVariantName) {\n    if (!this.container) {\n      return;\n    }\n    const cl = this.container?.classList;\n    if (oldVariantName)\n      cl?.remove(`color-variant-${oldVariantName}`);\n    if (newVariantName)\n      cl?.add(`color-variant-${newVariantName}`);\n    if (typeof this.onColorVariantRefresh === \"function\") {\n      this.onColorVariantRefresh(newVariantName);\n    }\n  }\n};\nvar ids_color_variant_mixin_default = IdsColorVariantMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1jb2xvci12YXJpYW50LW1peGluL2lkcy1jb2xvci12YXJpYW50LW1peGluLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUVEO0FBa0IxQixNQUFNLHVCQUF1QixDQUF3QixlQUFrQixjQUFjLFdBQVc7QUFBQSxFQUM5RixlQUFlLE1BQWE7QUFDMUIsVUFBTSxHQUFHLElBQUk7QUFFYixRQUFJLENBQUMsS0FBSyxPQUFPO0FBQ2YsV0FBSyxRQUFRLENBQUM7QUFBQSxJQUNoQjtBQUNBLFNBQUssTUFBTSxlQUFlO0FBQUEsRUFDNUI7QUFBQSxFQUVBLG9CQUFvQjtBQUNsQixVQUFNLGtCQUFrQjtBQUN4QixRQUFJLEtBQUs7QUFBYyxXQUFLLHFCQUFxQixNQUFNLEtBQUssWUFBWTtBQUFBLEVBQzFFO0FBQUEsRUFFQSxXQUFXLGFBQWE7QUFDdEIsV0FBTztBQUFBLE1BQ0wsR0FBSSxXQUFtQjtBQUFBLE1BQ3ZCLDBFQUF3QjtBQUFiLElBQ2I7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxnQkFBK0IsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS2hDLElBQUksZUFBZTtBQUNqQixXQUFPLEtBQUssT0FBTztBQUFBLEVBQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxJQUFJLGFBQWEsS0FBb0I7QUFDbkMsUUFBSSxZQUFpQjtBQUNyQixRQUFJLE9BQU8sUUFBUSxVQUFVO0FBQzNCLGtCQUFZLDZFQUFTLENBQUMsR0FBRztBQUFBLElBQzNCO0FBRUEsVUFBTSxlQUFlLEtBQUssTUFBTTtBQUNoQyxRQUFJLGFBQWEsaUJBQWlCLFdBQVc7QUFDM0MsVUFBSSxLQUFLLGNBQWMsU0FBUyxTQUFTLEdBQUc7QUFDMUMsYUFBSyxhQUFhLDBFQUF3QixFQUFFLEdBQUcsV0FBVztBQUFBLE1BQzVELE9BQU87QUFDTCxhQUFLLGdCQUFnQiwwRUFBd0I7QUFDN0Msb0JBQVk7QUFBQSxNQUNkO0FBRUEsV0FBSyxNQUFNLGVBQWU7QUFDMUIsV0FBSyxxQkFBcUIsY0FBYyxTQUFTO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVUEscUJBQXFCLGdCQUFnQyxnQkFBc0M7QUFDekYsUUFBSSxDQUFDLEtBQUssV0FBVztBQUNuQjtBQUFBLElBQ0Y7QUFFQSxVQUFNLEtBQUssS0FBSyxXQUFXO0FBRTNCLFFBQUk7QUFBZ0IsVUFBSSxPQUFPLGlCQUFpQixnQkFBZ0I7QUFDaEUsUUFBSTtBQUFnQixVQUFJLElBQUksaUJBQWlCLGdCQUFnQjtBQUc3RCxRQUFJLE9BQU8sS0FBSywwQkFBMEIsWUFBWTtBQUNwRCxXQUFLLHNCQUFzQixjQUFjO0FBQUEsSUFDM0M7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFPLGtDQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvbWl4aW5zL2lkcy1jb2xvci12YXJpYW50LW1peGluL2lkcy1jb2xvci12YXJpYW50LW1peGluLnRzP2FlZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gJy4uLy4uL2NvcmUvaWRzLWF0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgSWRzQ29uc3RydWN0b3IgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1lbGVtZW50JztcbmltcG9ydCB7IHN0cmlwSFRNTCB9IGZyb20gJy4uLy4uL3V0aWxzL2lkcy14c3MtdXRpbHMvaWRzLXhzcy11dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JWYXJpYW50SGFuZGxlciB7XG4gIC8vIGFzIGluc3RhbmNlIGZ1bmN0aW9uXG4gIG9uQ29sb3JWYXJpYW50UmVmcmVzaD8odmFyaWFudE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwpOiB2b2lkO1xuICAvLyBhcyBpbnN0YW5jZSBwcm9wZXJ0eVxuICBvbkNvbG9yVmFyaWFudFJlZnJlc2g/OiAodmFyaWFudE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwpID0+IHZvaWQ7XG59XG5cbnR5cGUgQ29uc3RyYWludHMgPSBJZHNDb25zdHJ1Y3RvcjxDb2xvclZhcmlhbnRIYW5kbGVyPjtcblxuLyoqXG4gKiBBIG1peGluIHRoYXQgd2lsbCBwcm92aWRlIHRoZSBjb250YWluZXIgZWxlbWVudCBvZiBhbiBJRFMgQ29tcG9uZW50IHdpdGggYSBjbGFzc1xuICogcmVzZXJ2ZWQgZm9yIGZsaXBwaW5nIHRoZSBmb3JlZ3JvdW5kIGNvbG9yICh0ZXh0IGNvbG9yLCBpY29uIGZpbGwsIGV0YykgdG8gYW4gYWx0ZXJuYXRlLFxuICogY29udHJhc3RpbmcgY29sb3IuICBUaGlzIGFsbG93cyBlYXN5IGludGVncmF0aW9uIHdpdGggYWx0ZXJuYXRlIGxheW91dHMsIGhlYWRlcnMsIGFwcCBtZW51LCBldGMuXG4gKiBAcGFyYW0ge2FueX0gc3VwZXJjbGFzcyBBY2NlcHRzIGEgc3VwZXJjbGFzcyBhbmQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyBmcm9tIGl0XG4gKiBAcmV0dXJucyB7YW55fSBUaGUgZXh0ZW5kZWQgb2JqZWN0XG4gKi9cbmNvbnN0IElkc0NvbG9yVmFyaWFudE1peGluID0gPFQgZXh0ZW5kcyBDb25zdHJhaW50cz4oc3VwZXJjbGFzczogVCkgPT4gY2xhc3MgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcbiAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmICghdGhpcy5zdGF0ZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cbiAgICB0aGlzLnN0YXRlLmNvbG9yVmFyaWFudCA9IG51bGw7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLmNvbG9yVmFyaWFudCkgdGhpcy4jcmVmcmVzaENvbG9yVmFyaWFudChudWxsLCB0aGlzLmNvbG9yVmFyaWFudCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLihzdXBlcmNsYXNzIGFzIGFueSkuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMuQ09MT1JfVkFSSUFOVFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge0FycmF5PHN0cmluZz59IExpc3Qgb2YgYXZhaWxhYmxlIGNvbG9yIHZhcmlhbnRzIGZvciB0aGlzIGNvbXBvbmVudFxuICAgKi9cbiAgY29sb3JWYXJpYW50czogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9IHRoZSBuYW1lIG9mIHRoZSBjb2xvciB2YXJpYW50IGN1cnJlbnRseSBhcHBsaWVkXG4gICAqL1xuICBnZXQgY29sb3JWYXJpYW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlPy5jb2xvclZhcmlhbnQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsfSB2YWwgdGhlIG5hbWUgb2YgdGhlIGNvbG9yIHZhcmlhbnQgdG8gYmUgYXBwbGllZFxuICAgKi9cbiAgc2V0IGNvbG9yVmFyaWFudCh2YWw6IHN0cmluZyB8IG51bGwpIHtcbiAgICBsZXQgc2FmZVZhbHVlOiBhbnkgPSBudWxsO1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgc2FmZVZhbHVlID0gc3RyaXBIVE1MKHZhbCk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5zdGF0ZS5jb2xvclZhcmlhbnQ7XG4gICAgaWYgKHNhZmVWYWx1ZSAmJiBjdXJyZW50VmFsdWUgIT09IHNhZmVWYWx1ZSkge1xuICAgICAgaWYgKHRoaXMuY29sb3JWYXJpYW50cy5pbmNsdWRlcyhzYWZlVmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuQ09MT1JfVkFSSUFOVCwgYCR7c2FmZVZhbHVlfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlcy5DT0xPUl9WQVJJQU5UKTtcbiAgICAgICAgc2FmZVZhbHVlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZS5jb2xvclZhcmlhbnQgPSBzYWZlVmFsdWU7XG4gICAgICB0aGlzLiNyZWZyZXNoQ29sb3JWYXJpYW50KGN1cnJlbnRWYWx1ZSwgc2FmZVZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaGVzIHRoZSBjb21wb25lbnQncyBjb2xvciB2YXJpYW50IHN0YXRlLCBkcml2ZW4gYnlcbiAgICogYSBDU1MgY2xhc3Mgb24gdGhlIFdlYkNvbXBvbmVudCdzIGBjb250YWluZXJgIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9sZFZhcmlhbnROYW1lIHRoZSB2YXJpYW50IG5hbWUgdG8gXCJyZW1vdmVcIiBmcm9tIHRoZSBzdHlsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VmFyaWFudE5hbWUgdGhlIHZhcmlhbnQgbmFtZSB0byBcImFkZFwiIHRvIHRoZSBzdHlsZVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gICNyZWZyZXNoQ29sb3JWYXJpYW50KG9sZFZhcmlhbnROYW1lPzogc3RyaW5nIHwgbnVsbCwgbmV3VmFyaWFudE5hbWU/OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNsID0gdGhpcy5jb250YWluZXI/LmNsYXNzTGlzdDtcblxuICAgIGlmIChvbGRWYXJpYW50TmFtZSkgY2w/LnJlbW92ZShgY29sb3ItdmFyaWFudC0ke29sZFZhcmlhbnROYW1lfWApO1xuICAgIGlmIChuZXdWYXJpYW50TmFtZSkgY2w/LmFkZChgY29sb3ItdmFyaWFudC0ke25ld1ZhcmlhbnROYW1lfWApO1xuXG4gICAgLy8gRmlyZSBvcHRpb25hbCBjYWxsYmFja1xuICAgIGlmICh0eXBlb2YgdGhpcy5vbkNvbG9yVmFyaWFudFJlZnJlc2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub25Db2xvclZhcmlhbnRSZWZyZXNoKG5ld1ZhcmlhbnROYW1lKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IElkc0NvbG9yVmFyaWFudE1peGluO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/mixins/ids-color-variant-mixin/ids-color-variant-mixin.ts\n");

/***/ }),

/***/ "./src/utils/ids-breakpoint-utils/ids-breakpoint-utils.ts":
/*!****************************************************************!*\
  !*** ./src/utils/ids-breakpoint-utils/ids-breakpoint-utils.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"breakpoints\": () => (/* binding */ breakpoints),\n/* harmony export */   \"isWidthAbove\": () => (/* binding */ isWidthAbove),\n/* harmony export */   \"isWidthBelow\": () => (/* binding */ isWidthBelow)\n/* harmony export */ });\nconst breakpoints = {\n  xxl: \"1440px\",\n  xl: \"1280px\",\n  lg: \"1024px\",\n  md: \"840px\",\n  sm: \"600px\",\n  xs: \"360px\"\n};\nfunction isWidthBelow(size) {\n  const width = breakpoints[size];\n  return window.matchMedia(`(max-width: ${width})`);\n}\nfunction isWidthAbove(size) {\n  const width = breakpoints[size];\n  return window.matchMedia(`(min-width: ${width})`);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvaWRzLWJyZWFrcG9pbnQtdXRpbHMvaWRzLWJyZWFrcG9pbnQtdXRpbHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRU8sTUFBTSxjQUEyQjtBQUFBLEVBQ3RDLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFBQSxFQUNKLElBQUk7QUFDTjtBQVFPLFNBQVMsYUFBYSxNQUF5QztBQUNwRSxRQUFNLFFBQVEsWUFBWSxJQUFJO0FBQzlCLFNBQU8sT0FBTyxXQUFXLGVBQWUsUUFBUTtBQUNsRDtBQVFPLFNBQVMsYUFBYSxNQUF5QztBQUNwRSxRQUFNLFFBQVEsWUFBWSxJQUFJO0FBQzlCLFNBQU8sT0FBTyxXQUFXLGVBQWUsUUFBUTtBQUNsRCIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL3V0aWxzL2lkcy1icmVha3BvaW50LXV0aWxzL2lkcy1icmVha3BvaW50LXV0aWxzLnRzPzg4ODQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgQnJlYWtwb2ludHMgPSB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH07XG5cbmV4cG9ydCBjb25zdCBicmVha3BvaW50czogQnJlYWtwb2ludHMgPSB7XG4gIHh4bDogJzE0NDBweCcsXG4gIHhsOiAnMTI4MHB4JyxcbiAgbGc6ICcxMDI0cHgnLFxuICBtZDogJzg0MHB4JyxcbiAgc206ICc2MDBweCcsXG4gIHhzOiAnMzYwcHgnXG59O1xuXG4vKipcbiAqIENoZWNrIGZvciBtYXggd2lkdGggbWVkaWEgcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30gc2l6ZSBzaXplIG9mIHRoZSBicmVha3BvaW50XG4gKiBAcmV0dXJucyB7TWVkaWFRdWVyeUxpc3R9IG1lZGlhIHF1ZXJ5XG4gKiBAbWVtYmVyb2YgSWRzSGlkZGVuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1dpZHRoQmVsb3coc2l6ZToga2V5b2YgQnJlYWtwb2ludHMpOiBNZWRpYVF1ZXJ5TGlzdCB7XG4gIGNvbnN0IHdpZHRoID0gYnJlYWtwb2ludHNbc2l6ZV07XG4gIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHt3aWR0aH0pYCk7XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIG1pbiB3aWR0aCBtZWRpYSBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzaXplIHNpemUgb2YgdGhlIGJyZWFrcG9pbnRcbiAqIEByZXR1cm5zIHtNZWRpYVF1ZXJ5TGlzdH0gbWVkaWEgcXVlcnlcbiAqIEBtZW1iZXJvZiBJZHNIaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzV2lkdGhBYm92ZShzaXplOiBrZXlvZiBCcmVha3BvaW50cyk6IE1lZGlhUXVlcnlMaXN0IHtcbiAgY29uc3Qgd2lkdGggPSBicmVha3BvaW50c1tzaXplXTtcbiAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKGAobWluLXdpZHRoOiAke3dpZHRofSlgKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/ids-breakpoint-utils/ids-breakpoint-utils.ts\n");

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
/******/ 			"ids-modal-fullsize": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-text_ids-text_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-radio_ids-radio-group_scss-src_components_ids-radio_ids-radio_scss","src_components_ids-radio_ids-radio_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-text_ids-text_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-radio_ids-radio-group_scss-src_components_ids-radio_ids-radio_scss","src_components_ids-radio_ids-radio_ts"], () => (__webpack_require__("./src/components/ids-modal/demos/fullsize.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
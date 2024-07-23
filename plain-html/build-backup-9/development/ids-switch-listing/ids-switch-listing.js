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

/***/ "./src/components/ids-demo-app/ids-demo-listing.ts":
/*!*********************************************************!*\
  !*** ./src/components/ids-demo-app/ids-demo-listing.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IdsDemoListing)\n/* harmony export */ });\n/* harmony import */ var _core_ids_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-decorators */ \"./src/core/ids-decorators.ts\");\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n/* harmony import */ var _core_ids_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/ids-element */ \"./src/core/ids-element.ts\");\n/* harmony import */ var _ids_data_grid_ids_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ids-data-grid/ids-data-grid */ \"./src/components/ids-data-grid/ids-data-grid.ts\");\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __decorateClass = (decorators, target, key, kind) => {\n  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;\n  for (var i = decorators.length - 1, decorator; i >= 0; i--)\n    if (decorator = decorators[i])\n      result = (kind ? decorator(target, key, result) : decorator(result)) || result;\n  if (kind && result)\n    __defProp(target, key, result);\n  return result;\n};\n\n\n\n\nlet IdsDemoListing = class extends _core_ids_element__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor() {\n    super();\n  }\n  connectedCallback() {\n    super.connectedCallback();\n    this.#attachColumns();\n  }\n  /**\n   * Return the attributes we handle as getters/setters\n   * @returns {Array} The propertires in an array\n   */\n  static get attributes() {\n    return [\n      ...super.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.COMPONENT_NAME\n    ];\n  }\n  /**\n   * Create the Template for the contents\n   * @returns {string} The template\n   */\n  template() {\n    return `<ids-data-grid id=\"${this.id}\" list-style=\"true\" label=\"${this.label}\"></ids-data-grid>`;\n  }\n  /**\n   * Set the listing internal label\n   * @param {string} value of the label text\n   */\n  set label(value) {\n    if (value) {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL, value);\n    } else {\n      this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL);\n    }\n  }\n  get label() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LABEL);\n  }\n  /**\n   * Set the component name\n   * @param {string} value name of the component\n   */\n  set componentName(value) {\n    if (value) {\n      this.setAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.COMPONENT_NAME, value);\n    } else {\n      this.removeAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.COMPONENT_NAME);\n    }\n  }\n  get componentName() {\n    return this.getAttribute(_core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.COMPONENT_NAME);\n  }\n  /**\n   * Set the yaml on the data grid\n   * @param {string} value of the label text\n   */\n  set data(value) {\n    if (this.container) {\n      this.container.data = value;\n    }\n  }\n  get data() {\n    return this.container.data;\n  }\n  /**\n   * Set the data grid columns\n   */\n  #attachColumns = () => {\n    const columns = [];\n    columns.push({\n      id: \"link\",\n      name: \"Example Name\",\n      field: \"link\",\n      href: `/${this.componentName}/{{value}}`,\n      sortable: true,\n      formatter: this.container?.formatters.hyperlink\n    });\n    columns.push({\n      id: \"type\",\n      name: \"Example Type\",\n      field: \"type\",\n      sortable: true,\n      formatter: this.container?.formatters.text\n    });\n    columns.push({\n      id: \"description\",\n      name: \"Description\",\n      field: \"description\",\n      sortable: true,\n      formatter: this.container?.formatters.text\n    });\n    this.container.columns = columns;\n  };\n};\nIdsDemoListing = __decorateClass([\n  (0,_core_ids_decorators__WEBPACK_IMPORTED_MODULE_0__.customElement)(\"ids-demo-listing\")\n], IdsDemoListing);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGVtby1hcHAvaWRzLWRlbW8tbGlzdGluZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0g7QUFDSjtBQUVoQjtBQVNQLElBQXFCLGlCQUFyQixjQUE0Qyx5REFBVSxDQUFDO0FBQUEsRUFDckQsY0FBYztBQUNaLFVBQU07QUFBQSxFQUNSO0FBQUEsRUFFQSxvQkFBb0I7QUFDbEIsVUFBTSxrQkFBa0I7QUFDeEIsU0FBSyxlQUFlO0FBQUEsRUFDdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsV0FBVyxhQUFhO0FBQ3RCLFdBQU87QUFBQSxNQUNMLEdBQUcsTUFBTTtBQUFBLE1BQ1Qsa0VBQWdCO0FBQUwsTUFDWCwyRUFBeUI7QUFBZCxJQUNiO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxXQUFtQjtBQUNqQixXQUFPLHNCQUFzQixLQUFLLGdDQUFnQyxLQUFLO0FBQUEsRUFDekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsSUFBSSxNQUFNLE9BQXNCO0FBQzlCLFFBQUksT0FBTztBQUNULFdBQUssYUFBYSxrRUFBZ0IsRUFBRSxLQUFLO0FBQUEsSUFDM0MsT0FBTztBQUNMLFdBQUssZ0JBQWdCLGtFQUFnQjtBQUFBLElBQ3ZDO0FBQUEsRUFDRjtBQUFBLEVBRUEsSUFBSSxRQUFRO0FBQ1YsV0FBTyxLQUFLLGFBQWEsa0VBQWdCO0FBQUEsRUFDM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsSUFBSSxjQUFjLE9BQXNCO0FBQ3RDLFFBQUksT0FBTztBQUNULFdBQUssYUFBYSwyRUFBeUIsRUFBRSxLQUFLO0FBQUEsSUFDcEQsT0FBTztBQUNMLFdBQUssZ0JBQWdCLDJFQUF5QjtBQUFBLElBQ2hEO0FBQUEsRUFDRjtBQUFBLEVBRUEsSUFBSSxnQkFBZ0I7QUFDbEIsV0FBTyxLQUFLLGFBQWEsMkVBQXlCO0FBQUEsRUFDcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsSUFBSSxLQUFLLE9BQW1DO0FBQzFDLFFBQUksS0FBSyxXQUFXO0FBQ2xCLE1BQUMsS0FBSyxVQUEwQixPQUFPO0FBQUEsSUFDekM7QUFBQSxFQUNGO0FBQUEsRUFFQSxJQUFJLE9BQU87QUFDVCxXQUFRLEtBQUssVUFBMEI7QUFBQSxFQUN6QztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsaUJBQWlCLE1BQU07QUFDckIsVUFBTSxVQUFVLENBQUM7QUFDakIsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxNQUFNLElBQUksS0FBSztBQUFBLE1BQ2YsVUFBVTtBQUFBLE1BQ1YsV0FBWSxLQUFLLFdBQTJCLFdBQVc7QUFBQSxJQUN6RCxDQUFDO0FBQ0QsWUFBUSxLQUFLO0FBQUEsTUFDWCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixXQUFZLEtBQUssV0FBMkIsV0FBVztBQUFBLElBQ3pELENBQUM7QUFDRCxZQUFRLEtBQUs7QUFBQSxNQUNYLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFdBQVksS0FBSyxXQUEyQixXQUFXO0FBQUEsSUFDekQsQ0FBQztBQUVELElBQUMsS0FBSyxVQUEwQixVQUFVO0FBQUEsRUFDNUM7QUFDRjtBQTFHcUIsaUJBQXJCO0FBQUEsRUFEQyxtRUFBYSxDQUFDLGtCQUFrQjtBQUFBLEdBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1kZW1vLWFwcC9pZHMtZGVtby1saXN0aW5nLnRzPzFjZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gJy4uLy4uL2NvcmUvaWRzLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gJy4uLy4uL2NvcmUvaWRzLWF0dHJpYnV0ZXMnO1xuaW1wb3J0IElkc0VsZW1lbnQgZnJvbSAnLi4vLi4vY29yZS9pZHMtZWxlbWVudCc7XG5cbmltcG9ydCAnLi4vaWRzLWRhdGEtZ3JpZC9pZHMtZGF0YS1ncmlkJztcbmltcG9ydCB0eXBlIElkc0RhdGFHcmlkIGZyb20gJy4uL2lkcy1kYXRhLWdyaWQvaWRzLWRhdGEtZ3JpZCc7XG5cbi8qKlxuICogSURTIERlbW8gTGlzdGluZyBDb21wb25lbnRcbiAqIEB0eXBlIHtJZHNEZW1vTGlzdGluZ31cbiAqIEBpbmhlcml0cyBJZHNFbGVtZW50XG4gKi9cbkBjdXN0b21FbGVtZW50KCdpZHMtZGVtby1saXN0aW5nJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElkc0RlbW9MaXN0aW5nIGV4dGVuZHMgSWRzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuI2F0dGFjaENvbHVtbnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGF0dHJpYnV0ZXMgd2UgaGFuZGxlIGFzIGdldHRlcnMvc2V0dGVyc1xuICAgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBwcm9wZXJ0aXJlcyBpbiBhbiBhcnJheVxuICAgKi9cbiAgc3RhdGljIGdldCBhdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAuLi5zdXBlci5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcy5MQUJFTCxcbiAgICAgIGF0dHJpYnV0ZXMuQ09NUE9ORU5UX05BTUVcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgVGVtcGxhdGUgZm9yIHRoZSBjb250ZW50c1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdGVtcGxhdGVcbiAgICovXG4gIHRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8aWRzLWRhdGEtZ3JpZCBpZD1cIiR7dGhpcy5pZH1cIiBsaXN0LXN0eWxlPVwidHJ1ZVwiIGxhYmVsPVwiJHt0aGlzLmxhYmVsfVwiPjwvaWRzLWRhdGEtZ3JpZD5gO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbGlzdGluZyBpbnRlcm5hbCBsYWJlbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgb2YgdGhlIGxhYmVsIHRleHRcbiAgICovXG4gIHNldCBsYWJlbCh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5MQUJFTCwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVzLkxBQkVMKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuTEFCRUwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY29tcG9uZW50IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIG5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc2V0IGNvbXBvbmVudE5hbWUodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuQ09NUE9ORU5UX05BTUUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlcy5DT01QT05FTlRfTkFNRSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbXBvbmVudE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXMuQ09NUE9ORU5UX05BTUUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgeWFtbCBvbiB0aGUgZGF0YSBncmlkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBvZiB0aGUgbGFiZWwgdGV4dFxuICAgKi9cbiAgc2V0IGRhdGEodmFsdWU6IEFycmF5PFJlY29yZDxzdHJpbmcsIGFueT4+KSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAodGhpcy5jb250YWluZXIgYXMgSWRzRGF0YUdyaWQpLmRhdGEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gKHRoaXMuY29udGFpbmVyIGFzIElkc0RhdGFHcmlkKS5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGF0YSBncmlkIGNvbHVtbnNcbiAgICovXG4gICNhdHRhY2hDb2x1bW5zID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdsaW5rJyxcbiAgICAgIG5hbWU6ICdFeGFtcGxlIE5hbWUnLFxuICAgICAgZmllbGQ6ICdsaW5rJyxcbiAgICAgIGhyZWY6IGAvJHt0aGlzLmNvbXBvbmVudE5hbWV9L3t7dmFsdWV9fWAsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGZvcm1hdHRlcjogKHRoaXMuY29udGFpbmVyIGFzIElkc0RhdGFHcmlkKT8uZm9ybWF0dGVycy5oeXBlcmxpbmtcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICd0eXBlJyxcbiAgICAgIG5hbWU6ICdFeGFtcGxlIFR5cGUnLFxuICAgICAgZmllbGQ6ICd0eXBlJyxcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgZm9ybWF0dGVyOiAodGhpcy5jb250YWluZXIgYXMgSWRzRGF0YUdyaWQpPy5mb3JtYXR0ZXJzLnRleHRcbiAgICB9KTtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6ICdkZXNjcmlwdGlvbicsXG4gICAgICBuYW1lOiAnRGVzY3JpcHRpb24nLFxuICAgICAgZmllbGQ6ICdkZXNjcmlwdGlvbicsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGZvcm1hdHRlcjogKHRoaXMuY29udGFpbmVyIGFzIElkc0RhdGFHcmlkKT8uZm9ybWF0dGVycy50ZXh0XG4gICAgfSk7XG5cbiAgICAodGhpcy5jb250YWluZXIgYXMgSWRzRGF0YUdyaWQpLmNvbHVtbnMgPSBjb2x1bW5zO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-demo-app/ids-demo-listing.ts\n");

/***/ }),

/***/ "./src/components/ids-switch/demos/listing.ts":
/*!****************************************************!*\
  !*** ./src/components/ids-switch/demos/listing.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_demo_app_ids_demo_listing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ids-demo-app/ids-demo-listing */ \"./src/components/ids-demo-app/ids-demo-listing.ts\");\n/* harmony import */ var _index_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.yaml */ \"./src/components/ids-switch/demos/index.yaml\");\n\n\nconst demoListing = document.querySelector(\"ids-demo-listing\");\nif (demoListing) {\n  demoListing.data = _index_yaml__WEBPACK_IMPORTED_MODULE_1__[\"default\"].examples;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtc3dpdGNoL2RlbW9zL2xpc3RpbmcudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQ087QUFDZTtBQUV0QixNQUFNLGNBQW1CLFNBQVMsY0FBYyxrQkFBa0I7QUFDbEUsSUFBSSxhQUFhO0FBQ2YsY0FBWSxPQUFPLDREQUFrQjtBQUN2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLXN3aXRjaC9kZW1vcy9saXN0aW5nLnRzPzA3YzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlzdGluZyBQYWdlXG5pbXBvcnQgJy4uLy4uL2lkcy1kZW1vLWFwcC9pZHMtZGVtby1saXN0aW5nJztcbmltcG9ydCBpbmRleFlhbWwgZnJvbSAnLi9pbmRleC55YW1sJztcblxuY29uc3QgZGVtb0xpc3Rpbmc6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lkcy1kZW1vLWxpc3RpbmcnKTtcbmlmIChkZW1vTGlzdGluZykge1xuICBkZW1vTGlzdGluZy5kYXRhID0gaW5kZXhZYW1sLmV4YW1wbGVzO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-switch/demos/listing.ts\n");

/***/ }),

/***/ "./src/components/ids-switch/demos/index.yaml":
/*!****************************************************!*\
  !*** ./src/components/ids-switch/demos/index.yaml ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({component:'Switch',link:'ids-switch',description:'Input element with on off capabilities',category:'Form Inputs',keywords:'switch, toggle, check, checkbox',examples:[{link:'example.html',type:'Main Example',description:'Showing a switch with all states'},{link:'side-by-side.html',type:'Side by Side',description:'Showing a tab component side by side working with 4.x'},{link:'standalone-css.html',type:'Standalone CSS',description:'Showing limited switch that works with css only'}]});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtc3dpdGNoL2RlbW9zL2luZGV4LnlhbWwuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLENBQUMsdUtBQXVLLHVGQUF1RixFQUFFLGlIQUFpSCxFQUFFLCtHQUErRyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtc3dpdGNoL2RlbW9zL2luZGV4LnlhbWw/MGEyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7Y29tcG9uZW50OidTd2l0Y2gnLGxpbms6J2lkcy1zd2l0Y2gnLGRlc2NyaXB0aW9uOidJbnB1dCBlbGVtZW50IHdpdGggb24gb2ZmIGNhcGFiaWxpdGllcycsY2F0ZWdvcnk6J0Zvcm0gSW5wdXRzJyxrZXl3b3Jkczonc3dpdGNoLCB0b2dnbGUsIGNoZWNrLCBjaGVja2JveCcsZXhhbXBsZXM6W3tsaW5rOidleGFtcGxlLmh0bWwnLHR5cGU6J01haW4gRXhhbXBsZScsZGVzY3JpcHRpb246J1Nob3dpbmcgYSBzd2l0Y2ggd2l0aCBhbGwgc3RhdGVzJ30se2xpbms6J3NpZGUtYnktc2lkZS5odG1sJyx0eXBlOidTaWRlIGJ5IFNpZGUnLGRlc2NyaXB0aW9uOidTaG93aW5nIGEgdGFiIGNvbXBvbmVudCBzaWRlIGJ5IHNpZGUgd29ya2luZyB3aXRoIDQueCd9LHtsaW5rOidzdGFuZGFsb25lLWNzcy5odG1sJyx0eXBlOidTdGFuZGFsb25lIENTUycsZGVzY3JpcHRpb246J1Nob3dpbmcgbGltaXRlZCBzd2l0Y2ggdGhhdCB3b3JrcyB3aXRoIGNzcyBvbmx5J31dfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-switch/demos/index.yaml\n");

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
/******/ 		__webpack_require__.h = () => ("919871523b4f16874939")
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
/******/ 			"ids-switch-listing": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_components_ids-checkbox_ids-checkbox_scss","src_components_ids-checkbox_ids-checkbox_ts","src_components_ids-hyperlink_ids-hyperlink_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-card_ids-card_ts","src_components_ids-pager_ids-pager_ts","src_components_ids-virtual-scroll_ids-virtual-scroll_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts","src_components_ids-tag_ids-tag_ts","src_components_ids-image_ids-image_ts","src_components_ids-slider_ids-slider_ts","src_components_ids-alert_ids-alert_ts-src_components_ids-step-chart_ids-step-chart_ts","src_components_ids-data-grid_ids-data-grid_scss","src_components_ids-data-grid_ids-data-grid_ts"], () => (__webpack_require__("./src/components/ids-switch/demos/listing.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
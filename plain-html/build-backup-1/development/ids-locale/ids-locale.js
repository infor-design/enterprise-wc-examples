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

/***/ "./src/components/ids-locale/demos/index.ts":
/*!**************************************************!*\
  !*** ./src/components/ids-locale/demos/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-locale */ \"./src/components/ids-locale/ids-locale.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtbG9jYWxlL2RlbW9zL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7O0FBQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1sb2NhbGUvZGVtb3MvaW5kZXgudHM/MWRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdXBwb3J0aW5nIGNvbXBvbmVudHNcbmltcG9ydCAnLi4vaWRzLWxvY2FsZSc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-locale/demos/index.ts\n");

/***/ }),

/***/ "./src/utils/ids-string-utils/ids-string-utils.ts":
/*!********************************************************!*\
  !*** ./src/utils/ids-string-utils/ids-string-utils.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildClassAttrib\": () => (/* binding */ buildClassAttrib),\n/* harmony export */   \"camelCase\": () => (/* binding */ camelCase),\n/* harmony export */   \"escapeRegExp\": () => (/* binding */ escapeRegExp),\n/* harmony export */   \"injectTemplate\": () => (/* binding */ injectTemplate),\n/* harmony export */   \"isPrintable\": () => (/* binding */ isPrintable),\n/* harmony export */   \"kebabCase\": () => (/* binding */ kebabCase),\n/* harmony export */   \"removeDuplicates\": () => (/* binding */ removeDuplicates),\n/* harmony export */   \"removeNewLines\": () => (/* binding */ removeNewLines),\n/* harmony export */   \"stringToBool\": () => (/* binding */ stringToBool),\n/* harmony export */   \"stringToNumber\": () => (/* binding */ stringToNumber)\n/* harmony export */ });\nfunction camelCase(str) {\n  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());\n}\nfunction kebabCase(str) {\n  return str?.replace(/([a-z])([A-Z])/g, \"$1-$2\").replace(/[\\s_]+/g, \"-\").toLowerCase();\n}\nfunction removeDuplicates(str) {\n  return str.split(\"\").filter((item, pos, self) => self.indexOf(item) === pos).join(\"\");\n}\nfunction removeNewLines(str) {\n  return str?.replace(/\\r?\\n|\\r/g, \" \") || \"\";\n}\nfunction stringToBool(val) {\n  if (typeof val === \"string\" && val.toLowerCase() === \"false\" || val === false) {\n    return false;\n  }\n  return typeof val === \"string\" || val === true;\n}\nfunction stringToNumber(val) {\n  return parseFloat(val);\n}\nfunction injectTemplate(str, obj) {\n  return str.replace(/\\${(.*?)}/g, (_x, g) => obj[g]);\n}\nfunction buildClassAttrib(...classes) {\n  const classAttrib = classes.reduce((attribStr, c) => {\n    if (attribStr && c) {\n      return `${attribStr} ${c}`;\n    }\n    if (!attribStr && c) {\n      return c;\n    }\n    return attribStr;\n  }, \"\");\n  return !classAttrib ? \"\" : ` class=\"${classAttrib}\"`;\n}\nfunction isPrintable(e) {\n  const controlKeys = [\"Alt\", \"Shift\", \"Control\", \"Meta\", \"CapsLock\", \"Enter\", \"Escape\", \"Tab\"];\n  if (controlKeys.indexOf(e.key) > -1 || e.key.indexOf(\"Arrow\") > -1) {\n    return false;\n  }\n  if (e.altKey && e.keyCode === 38 || e.keyCode > 111 && e.keyCode < 124) {\n    return false;\n  }\n  return true;\n}\nfunction escapeRegExp(s) {\n  return s.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\");\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvaWRzLXN0cmluZy11dGlscy9pZHMtc3RyaW5nLXV0aWxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFLTyxTQUFTLFVBQVUsS0FBcUI7QUFDN0MsU0FBTyxJQUFJLFlBQVksRUFBRSxRQUFRLHFCQUFxQixDQUFDLEdBQUcsUUFBUSxJQUFJLFlBQVksQ0FBQztBQUNyRjtBQU9PLFNBQVMsVUFBVSxLQUFxQjtBQUM3QyxTQUFPLEtBQUssUUFBUSxtQkFBbUIsT0FBTyxFQUFFLFFBQVEsV0FBVyxHQUFHLEVBQUUsWUFBWTtBQUN0RjtBQVNPLFNBQVMsaUJBQWlCLEtBQXFCO0FBQ3BELFNBQU8sSUFDSixNQUFNLEVBQUUsRUFDUixPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsS0FBSyxRQUFRLElBQUksTUFBTSxHQUFHLEVBQ3RELEtBQUssRUFBRTtBQUNaO0FBT08sU0FBUyxlQUFlLEtBQTRCO0FBQ3pELFNBQU8sS0FBSyxRQUFRLGFBQWEsR0FBRyxLQUFLO0FBQzNDO0FBT08sU0FBUyxhQUFhLEtBQW1EO0FBQzlFLE1BQUssT0FBTyxRQUFRLFlBQVksSUFBSSxZQUFZLE1BQU0sV0FBWSxRQUFRLE9BQU87QUFDL0UsV0FBTztBQUFBLEVBQ1Q7QUFDQSxTQUFPLE9BQU8sUUFBUSxZQUFZLFFBQVE7QUFDNUM7QUFPTyxTQUFTLGVBQWUsS0FBcUM7QUFDbEUsU0FBTyxXQUFXLEdBQUc7QUFDdkI7QUFRTyxTQUFTLGVBQWUsS0FBYSxLQUFrQjtBQUU1RCxTQUFPLElBQUksUUFBUSxjQUFjLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDO0FBQ3BEO0FBUU8sU0FBUyxvQkFBb0IsU0FBc0I7QUFDeEQsUUFBTSxjQUFjLFFBQVEsT0FBTyxDQUFDLFdBQWdCLE1BQVc7QUFDN0QsUUFBSSxhQUFhLEdBQUc7QUFBRSxhQUFPLEdBQUcsYUFBYTtBQUFBLElBQUs7QUFFbEQsUUFBSSxDQUFDLGFBQWEsR0FBRztBQUFFLGFBQU87QUFBQSxJQUFHO0FBQ2pDLFdBQU87QUFBQSxFQUNULEdBQUcsRUFBRTtBQUVMLFNBQU8sQ0FBQyxjQUFjLEtBQUssV0FBVztBQUN4QztBQVFPLFNBQVMsWUFBWSxHQUFpQztBQUMzRCxRQUFNLGNBQWMsQ0FBQyxPQUFPLFNBQVMsV0FBVyxRQUFRLFlBQVksU0FBUyxVQUFVLEtBQUs7QUFDNUYsTUFBSSxZQUFZLFFBQVEsRUFBRSxHQUFHLElBQUksTUFBTSxFQUFFLElBQUksUUFBUSxPQUFPLElBQUksSUFBSTtBQUNsRSxXQUFPO0FBQUEsRUFDVDtBQUVBLE1BQUssRUFBRSxVQUFXLEVBQUUsWUFBWSxNQUFTLEVBQUUsVUFBVSxPQUFPLEVBQUUsVUFBVSxLQUFNO0FBQzVFLFdBQU87QUFBQSxFQUNUO0FBQ0EsU0FBTztBQUNUO0FBUU8sU0FBUyxhQUFhLEdBQVc7QUFDdEMsU0FBTyxFQUFFLFFBQVEsdUJBQXVCLE1BQU07QUFDaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy91dGlscy9pZHMtc3RyaW5nLXV0aWxzL2lkcy1zdHJpbmctdXRpbHMudHM/M2FjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbnZlcnQgYSBzdHJpbmcgaW4gcHJlc3VtZWQga2ViYWIgY2FzZSB0byBjYW1lbCBjYXNlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZXR1cm4gc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXpBLVowLTldKyguKS9nLCAobSwgY2hyKSA9PiBjaHIudG9VcHBlckNhc2UoKSk7XG59XG5cbi8qKlxuICogQ29udmVydCBhIHN0cmluZyBpbnRvIGtlYmFiIGNhc2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHZhbHVlIHRvIGJlIGNvbnZlcnRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHJldHVybiBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGtlYmFiQ2FzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzdHI/LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnJlcGxhY2UoL1tcXHNfXSsvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGR1cGxpY2F0ZSBjaGFyYWN0ZXJzIGZyb20gYSBzdHJpbmcgYW5kIHJldHVybnMgYW5vdGhlciBzdHJpbmdcbiAqIGNvbnRhaW5pbmcgQUxMIHVuaXF1ZSBjaGFyYWN0ZXJzLiAgVXNlZnVsIGZvciBjb25zdHJ1Y3Rpb24gb2YgUkVHRVggb2JqZWN0c1xuICogd2l0aCBjaGFyYWN0ZXJzIGZyb20gYW4gaW5wdXQgZmllbGQsIGV0Yy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBwcm9jZXNzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcHJvY2Vzc2VkIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlcyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzdHJcbiAgICAuc3BsaXQoJycpXG4gICAgLmZpbHRlcigoaXRlbSwgcG9zLCBzZWxmKSA9PiBzZWxmLmluZGV4T2YoaXRlbSkgPT09IHBvcylcbiAgICAuam9pbignJyk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgbmV3TGluZXMgZnJvbSBhIHN0cmluZyBhbmQgcmVwbGFjZXMgdGhlbSB3aXRoIHNwYWNlc1xuICogQHBhcmFtIHtzdHJpbmd9IHN0ciB0aGUgaW5jb21pbmcgc3RyaW5nIHRvIGZvcm1hdFxuICogQHJldHVybnMge3N0cmluZ30gdGhlIHN0cmluZyB3aXRoIG5ld2xpbmUgY2hhcmFjdGVycyByZXBsYWNlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTmV3TGluZXMoc3RyOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgcmV0dXJuIHN0cj8ucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgJyAnKSB8fCAnJztcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGF0dHJpYnV0ZSBzdHJpbmcgaW50byBhIGJvb2xlYW4gcmVwcmVzZW50YXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfGJvb2xlYW58bnVsbH0gdmFsIHN0cmluZyB2YWx1ZSBmcm9tIHRoZSBjb21wb25lbnQgYXR0cmlidXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVGhlIHJldHVybiBib29sZWFuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb0Jvb2wodmFsOiBzdHJpbmcgfCBib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZCk6IGJvb2xlYW4ge1xuICBpZiAoKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZhbC50b0xvd2VyQ2FzZSgpID09PSAnZmFsc2UnKSB8fCB2YWwgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCB2YWwgPT09IHRydWU7XG59XG5cbi8qKlxuICogQ29udmVydHMgYW4gYXR0cmlidXRlIHN0cmluZyBpbnRvIGEgbnVtYmVyLCBvciByZXR1cm5zIE5hTlxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfGFueX0gdmFsIHN0cmluZyB2YWx1ZSBmcm9tIHRoZSBjb21wb25lbnQgYXR0cmlidXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmV0dXJuIGJvb2xlYW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvTnVtYmVyKHZhbD86IHN0cmluZyB8IG51bWJlciB8IGFueSk6IG51bWJlciB7XG4gIHJldHVybiBwYXJzZUZsb2F0KHZhbCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn1cblxuLyoqXG4gKiBJbmplY3QgdGVtcGxhdGUgdmFyaWFibGVzIGluIGEgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gaW5qZWN0IGludG9cbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIHN0cmluZyB0byBpbmplY3QgaW50b1xuICogQHJldHVybnMge3N0cmluZ30gVGhlIHJldHVybiBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluamVjdFRlbXBsYXRlKHN0cjogc3RyaW5nLCBvYmo6IGFueSk6IHN0cmluZyB7XG4gIC8vIFJlcGxhY2UgYWxsIG90aGVyIGtleXMgd2l0aCBkYXRhXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFwkeyguKj8pfS9nLCAoX3gsIGcpID0+IG9ialtnXSk7XG59XG5cbi8qKlxuICogQ29tYmluZXMgY2xhc3NlcyBhbmQgY29uc2lkZXJzIHRydXRoeS9mYWxzeSArXG4gKiBkb2Vzbid0IHBvbGx1dGUgdGhlIGF0dHJpYnMvRE9NXG4gKiBAcGFyYW0gey4uLmFueX0gY2xhc3NlcyBjbGFzc2VzL2V4cHJlc3Npb25zXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBgIGNsYXNzPVwiYzEgYzIuLi5cImAgfHwgXCJcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDbGFzc0F0dHJpYiguLi5jbGFzc2VzOiBhbnkpOiBzdHJpbmcge1xuICBjb25zdCBjbGFzc0F0dHJpYiA9IGNsYXNzZXMucmVkdWNlKChhdHRyaWJTdHI6IGFueSwgYzogYW55KSA9PiB7XG4gICAgaWYgKGF0dHJpYlN0ciAmJiBjKSB7IHJldHVybiBgJHthdHRyaWJTdHJ9ICR7Y31gOyB9XG5cbiAgICBpZiAoIWF0dHJpYlN0ciAmJiBjKSB7IHJldHVybiBjOyB9XG4gICAgcmV0dXJuIGF0dHJpYlN0cjtcbiAgfSwgJycpO1xuXG4gIHJldHVybiAhY2xhc3NBdHRyaWIgPyAnJyA6IGAgY2xhc3M9XCIke2NsYXNzQXR0cmlifVwiYDtcbn1cblxuLyoqXG4gKiBDaGVja3MgYSBrZXljb2RlIHZhbHVlIGFuZCBkZXRlcm1pbmVzIGlmIGl0IGJlbG9uZ3MgdG8gYSBwcmludGFibGUgY2hhcmFjdGVyXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGUgdGhlIGV2ZW50IHRvIGluc3BlY3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIGtleSBpcyBhIHByaW50YWJsZSBvbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW50YWJsZShlOiBLZXlib2FyZEV2ZW50IHwgYW55KTogYm9vbGVhbiB7XG4gIGNvbnN0IGNvbnRyb2xLZXlzID0gWydBbHQnLCAnU2hpZnQnLCAnQ29udHJvbCcsICdNZXRhJywgJ0NhcHNMb2NrJywgJ0VudGVyJywgJ0VzY2FwZScsICdUYWInXTtcbiAgaWYgKGNvbnRyb2xLZXlzLmluZGV4T2YoZS5rZXkpID4gLTEgfHwgZS5rZXkuaW5kZXhPZignQXJyb3cnKSA+IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKChlLmFsdEtleSAmJiAoZS5rZXlDb2RlID09PSAzOCkpIHx8IChlLmtleUNvZGUgPiAxMTEgJiYgZS5rZXlDb2RlIDwgMTI0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBFc2NhcGUgdXNlciBpbnB1dCB0aGF0IHdpbGwgYmUgdHJlYXRlZCBhcyBhIGxpdGVyYWwgc3RyaW5nLlxuICogVGhpcyBwcmV2ZW50cyBpbmNvcnJlY3QgUmVnRXhwIG1hdGNoaW5nIHdoZW4gY29udmVydGluZyB1c2VyIGlucHV0LlxuICogQHBhcmFtIHtzdHJpbmd9IHMgc3RyaW5nIHRvIHByb2Nlc3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHN0cmluZyBhZnRlciBlc2NhcGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHM6IHN0cmluZykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpOyAvLyAkJiB3aG9sZSBtYXRjaGVkIHN0cmluZ1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/ids-string-utils/ids-string-utils.ts\n");

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
/******/ 			"ids-locale": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_components_ids-locale_ids-locale_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_components_ids-locale_ids-locale_ts"], () => (__webpack_require__("./src/components/ids-locale/demos/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
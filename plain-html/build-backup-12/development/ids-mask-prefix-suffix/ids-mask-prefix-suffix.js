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

/***/ "./src/components/ids-mask/demos/prefix-suffix.ts":
/*!********************************************************!*\
  !*** ./src/components/ids-mask/demos/prefix-suffix.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_mask_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-mask-common */ \"./src/components/ids-mask/ids-mask-common.ts\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const prefix = document.querySelector(\"#mask-prefix\");\n  prefix.maskOptions = {\n    prefix: \"$\"\n  };\n  prefix.mask = (rawValue, opts) => {\n    const totalDigits = rawValue.split(_ids_mask_common__WEBPACK_IMPORTED_MODULE_0__.EMPTY_STRING).map(() => _ids_mask_common__WEBPACK_IMPORTED_MODULE_0__.DIGITS_REGEX);\n    return [opts.prefix, ...totalDigits];\n  };\n  const suffix = document.querySelector(\"#mask-suffix\");\n  suffix.maskOptions = {\n    suffix: \"%\"\n  };\n  suffix.mask = (rawValue, opts) => {\n    const totalDigits = rawValue.split(_ids_mask_common__WEBPACK_IMPORTED_MODULE_0__.EMPTY_STRING).map(() => _ids_mask_common__WEBPACK_IMPORTED_MODULE_0__.DIGITS_REGEX);\n    return [...totalDigits, opts.suffix];\n  };\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtbWFzay9kZW1vcy9wcmVmaXgtc3VmZml4LnRzLmpzIiwibWFwcGluZ3MiOiI7O0FBQzJDO0FBRTNDLFNBQVMsaUJBQWlCLG9CQUFvQixNQUFNO0FBRWxELFFBQU0sU0FBYSxTQUFTLGNBQWMsY0FBYztBQUN4RCxTQUFPLGNBQWM7QUFBQSxJQUNuQixRQUFRO0FBQUEsRUFDVjtBQUNBLFNBQU8sT0FBTyxDQUFDLFVBQWtCLFNBQWM7QUFDN0MsVUFBTSxjQUFjLFNBQVMsTUFBTSwwREFBWSxFQUFFLElBQUksTUFBTSwwREFBWTtBQUN2RSxXQUFPLENBQUMsS0FBSyxRQUFRLEdBQUcsV0FBVztBQUFBLEVBQ3JDO0FBR0EsUUFBTSxTQUFjLFNBQVMsY0FBYyxjQUFjO0FBQ3pELFNBQU8sY0FBYztBQUFBLElBQ25CLFFBQVE7QUFBQSxFQUNWO0FBQ0EsU0FBTyxPQUFPLENBQUMsVUFBa0IsU0FBYztBQUM3QyxVQUFNLGNBQWMsU0FBUyxNQUFNLDBEQUFZLEVBQUUsSUFBSSxNQUFNLDBEQUFZO0FBQ3ZFLFdBQU8sQ0FBQyxHQUFHLGFBQWEsS0FBSyxNQUFNO0FBQUEsRUFDckM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtbWFzay9kZW1vcy9wcmVmaXgtc3VmZml4LnRzPzVmM2MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU3VwcG9ydGluZyBjb21wb25lbnRzXG5pbXBvcnQgeyBESUdJVFNfUkVHRVgsIEVNUFRZX1NUUklORyB9IGZyb20gJy4uL2lkcy1tYXNrLWNvbW1vbic7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIE1hc2tlZCBmaWVsZCB3aXRoIGEgcHJlZml4XG4gIGNvbnN0IHByZWZpeDphbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFzay1wcmVmaXgnKTtcbiAgcHJlZml4Lm1hc2tPcHRpb25zID0ge1xuICAgIHByZWZpeDogJyQnXG4gIH07XG4gIHByZWZpeC5tYXNrID0gKHJhd1ZhbHVlOiBzdHJpbmcsIG9wdHM6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRvdGFsRGlnaXRzID0gcmF3VmFsdWUuc3BsaXQoRU1QVFlfU1RSSU5HKS5tYXAoKCkgPT4gRElHSVRTX1JFR0VYKTtcbiAgICByZXR1cm4gW29wdHMucHJlZml4LCAuLi50b3RhbERpZ2l0c107XG4gIH07XG5cbiAgLy8gTWFza2VkIGZpZWxkIHdpdGggYSBzdWZmaXhcbiAgY29uc3Qgc3VmZml4OiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFzay1zdWZmaXgnKTtcbiAgc3VmZml4Lm1hc2tPcHRpb25zID0ge1xuICAgIHN1ZmZpeDogJyUnXG4gIH07XG4gIHN1ZmZpeC5tYXNrID0gKHJhd1ZhbHVlOiBzdHJpbmcsIG9wdHM6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRvdGFsRGlnaXRzID0gcmF3VmFsdWUuc3BsaXQoRU1QVFlfU1RSSU5HKS5tYXAoKCkgPT4gRElHSVRTX1JFR0VYKTtcbiAgICByZXR1cm4gWy4uLnRvdGFsRGlnaXRzLCBvcHRzLnN1ZmZpeF07XG4gIH07XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-mask/demos/prefix-suffix.ts\n");

/***/ }),

/***/ "./src/components/ids-mask/ids-mask-common.ts":
/*!****************************************************!*\
  !*** ./src/components/ids-mask/ids-mask-common.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ALPHAS_REGEX\": () => (/* binding */ ALPHAS_REGEX),\n/* harmony export */   \"ANY_REGEX\": () => (/* binding */ ANY_REGEX),\n/* harmony export */   \"CARET_TRAP\": () => (/* binding */ CARET_TRAP),\n/* harmony export */   \"DEFAULT_CONFORM_OPTIONS\": () => (/* binding */ DEFAULT_CONFORM_OPTIONS),\n/* harmony export */   \"DIGITS_REGEX\": () => (/* binding */ DIGITS_REGEX),\n/* harmony export */   \"EMPTY_STRING\": () => (/* binding */ EMPTY_STRING),\n/* harmony export */   \"NON_DIGITS_REGEX\": () => (/* binding */ NON_DIGITS_REGEX),\n/* harmony export */   \"PLACEHOLDER_CHAR\": () => (/* binding */ PLACEHOLDER_CHAR),\n/* harmony export */   \"convertPatternFromString\": () => (/* binding */ convertPatternFromString)\n/* harmony export */ });\nconst EMPTY_STRING = \"\";\nconst PLACEHOLDER_CHAR = \"_\";\nconst CARET_TRAP = \"[]\";\nconst NON_DIGITS_REGEX = /[^\\u0660-\\u06690-9\\u0966-\\u096F\\u2E80-\\u2FD5\\u3190-\\u319f\\u3400-\\u4DBF\\u4E00-\\u9FCC\\uF900-\\uFAAD]/g;\nconst DIGITS_REGEX = /[\\u0660-\\u06690-9\\u0966-\\u096F\\u2E80-\\u2FD5\\u3190-\\u319f\\u3400-\\u4DBF\\u4E00-\\u9FCC\\uF900-\\uFAAD]/;\nconst ALPHAS_REGEX = /[\\u00C0-\\u017Fa-zA-Z]/;\nconst ANY_REGEX = /[\\u00C0-\\u017Fa-zA-Z0-9]/;\nconst DEFAULT_CONFORM_OPTIONS = {\n  caretTrapIndexes: [],\n  guide: false,\n  previousMaskResult: EMPTY_STRING,\n  placeholderChar: PLACEHOLDER_CHAR,\n  placeholder: EMPTY_STRING,\n  selection: {\n    start: 0\n  },\n  keepCharacterPositions: false\n};\nfunction convertPatternFromString(pattern) {\n  if (typeof pattern !== \"string\" || !pattern.length) {\n    return void 0;\n  }\n  const firstChar = pattern.charAt(0);\n  const lastChar = pattern.charAt(pattern.length - 1);\n  if (firstChar === \"[\" && lastChar === \"]\") {\n    const patternArray = pattern.substring(1, pattern.length - 1).split(/, ?/g);\n    return patternArray.map((item) => {\n      if ([\"'\", '\"'].includes(item.charAt(0))) {\n        return item.substring(1, item.length - 1);\n      }\n      return new RegExp(item.substring(1, item.length - 1));\n    });\n  }\n  return void 0;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtbWFzay9pZHMtbWFzay1jb21tb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBMkJPLE1BQU0sZUFBZTtBQUtyQixNQUFNLG1CQUFtQjtBQUt6QixNQUFNLGFBQWE7QUFLbkIsTUFBTSxtQkFBbUI7QUFLekIsTUFBTSxlQUFlO0FBS3JCLE1BQU0sZUFBZTtBQUtyQixNQUFNLFlBQVk7QUFNbEIsTUFBTSwwQkFBMEI7QUFBQSxFQUNyQyxrQkFBa0IsQ0FBQztBQUFBLEVBQ25CLE9BQU87QUFBQSxFQUNQLG9CQUFvQjtBQUFBLEVBQ3BCLGlCQUFpQjtBQUFBLEVBQ2pCLGFBQWE7QUFBQSxFQUNiLFdBQVc7QUFBQSxJQUNULE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSx3QkFBd0I7QUFDMUI7QUFNTyxTQUFTLHlCQUF5QixTQUFpQjtBQUN4RCxNQUFJLE9BQU8sWUFBWSxZQUFZLENBQUMsUUFBUSxRQUFRO0FBQ2xELFdBQU87QUFBQSxFQUNUO0FBRUEsUUFBTSxZQUFZLFFBQVEsT0FBTyxDQUFDO0FBQ2xDLFFBQU0sV0FBVyxRQUFRLE9BQU8sUUFBUSxTQUFTLENBQUM7QUFHbEQsTUFBSSxjQUFjLE9BQU8sYUFBYSxLQUFLO0FBQ3pDLFVBQU0sZUFBZSxRQUFRLFVBQVUsR0FBRyxRQUFRLFNBQVMsQ0FBQyxFQUFFLE1BQU0sTUFBTTtBQUMxRSxXQUFPLGFBQWEsSUFBSSxDQUFDLFNBQVM7QUFJaEMsVUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLFNBQVMsS0FBSyxPQUFPLENBQUMsQ0FBQyxHQUFHO0FBQ3ZDLGVBQU8sS0FBSyxVQUFVLEdBQUcsS0FBSyxTQUFTLENBQUM7QUFBQSxNQUMxQztBQUVBLGFBQU8sSUFBSSxPQUFPLEtBQUssVUFBVSxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUM7QUFBQSxJQUN0RCxDQUFDO0FBQUEsRUFDSDtBQUlBLFNBQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2lkcy1lbnRlcnByaXNlLXdjLy4vc3JjL2NvbXBvbmVudHMvaWRzLW1hc2svaWRzLW1hc2stY29tbW9uLnRzPzcyNGYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb250YWlucyB2YXJpb3VzIE1hc2stcmVsYXRlZCB1dGlsaXRpZXMsIHNldHRpbmdzLCBtYXNraW5nIGZ1bmN0aW9ucywgZXRjLlxuICovXG5cbi8qKlxuICogSWRzTWFza09wdGlvbnMgYXJlIFBPSk9zIHRoYXQgY29udGFpbiBkaWZmZXJlbnQgcHJvcGVydGllcyBiYXNlZCBvbiB0aGUgbWFzayB0eXBlLlxuICogTWFzayBmdW5jdGlvbnMgY2FuIGJlIGNvbXBsZXRlbHkgdXNlci1kZWZpbmVkLCBzbyB0aGUgb3B0aW9ucyBuZWVkIHRvIGJlIGZsZXhpYmxlLlxuICovXG5leHBvcnQgdHlwZSBJZHNNYXNrT3B0aW9ucyA9IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbmV4cG9ydCB0eXBlIElkc01hc2tUeXBlcyA9IHtcbiAgLyoqIEFkZHMgYSBtYXNrIHRvIHRoZSBpbnB1dCAqL1xuICBtYXNrOiBBcnJheTxSZWdFeHAgfCBzdHJpbmc+IHwgQ2FsbGFibGVGdW5jdGlvbiB8IHN0cmluZ1xuXG4gIC8qKiBBZGRzIG9wdGlvbnMgdGhhdCBhcmUgY29uc2lkZXJlZCBieSBhIG1hc2sgZnVuY3Rpb24gd2hlbiBnZW5lcmF0aW5nIGEgbWFzayAqL1xuICBtYXNrT3B0aW9ucz86IElkc01hc2tPcHRpb25zO1xuXG4gIC8qKiBJZiB0cnVlLCBkaXNwbGF5cyB0aGUgbGl0ZXJhbHMgYW5kIGZpbGxhYmxlIHNwYWNlIG9mIHRoZSBtYXNrIGFzIGEgcGxhY2Vob2xkZXIgaW5zaWRlIHRoZSBmaWVsZCAqL1xuICBtYXNrR3VpZGU/OiBib29sZWFuO1xuXG4gIC8qKiBJZiB0cnVlLCBjb21iaW5lZCB3aXRoIGBtYXNrR3VpZGVgLCBhdHRlbXB0cyB0byBrZWVwIHByZXZpb3VzbHktZW50ZXJlZCBpbnB1dCBmcm9tIHNoaWZ0aW5nIHdpdGhpbiB0aGUgZmllbGQgKi9cbiAgbWFza1JldGFpblBvc2l0aW9ucz86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBFTVBUWV9TVFJJTkcganVzdCBhbiBlbXB0eSBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9ICcnO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQTEFDRUhPTERFUl9DSEFSIHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIHVzZWQgaW4gZ3VpZGVzXG4gKi9cbmV4cG9ydCBjb25zdCBQTEFDRUhPTERFUl9DSEFSID0gJ18nO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDQVJFVF9UUkFQIHRoZSBzdHJpbmcgb2YgY2hhcmFjdGVycyByZXByZXNlbnRpbmcgYSBjYXJldCB0cmFwIGluIG1hc2sgYXJyYXlzXG4gKi9cbmV4cG9ydCBjb25zdCBDQVJFVF9UUkFQID0gJ1tdJztcblxuLyoqXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gTk9OX0RJR0lUU19SRUdFWCByZWd1bGFyIGV4cHJlc3Npb24gbWF0Y2hpbmcgbm9uLWRpZ2l0IGNoYXJhY3RlcnNcbiAqL1xuZXhwb3J0IGNvbnN0IE5PTl9ESUdJVFNfUkVHRVggPSAvW15cXHUwNjYwLVxcdTA2NjkwLTlcXHUwOTY2LVxcdTA5NkZcXHUyRTgwLVxcdTJGRDVcXHUzMTkwLVxcdTMxOWZcXHUzNDAwLVxcdTREQkZcXHU0RTAwLVxcdTlGQ0NcXHVGOTAwLVxcdUZBQURdL2c7XG5cbi8qKlxuICogQHByb3BlcnR5IHtSZWdFeHB9IERJR0lUU19SRUdFWCByZWd1bGFyIGV4cHJlc3Npb24gbWF0Y2hpbmcgZGlnaXQgY2hhcmFjdGVyc1xuICovXG5leHBvcnQgY29uc3QgRElHSVRTX1JFR0VYID0gL1tcXHUwNjYwLVxcdTA2NjkwLTlcXHUwOTY2LVxcdTA5NkZcXHUyRTgwLVxcdTJGRDVcXHUzMTkwLVxcdTMxOWZcXHUzNDAwLVxcdTREQkZcXHU0RTAwLVxcdTlGQ0NcXHVGOTAwLVxcdUZBQURdLztcblxuLyoqXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gQUxQSEFTX1JFR0VYIHJlZ3VsYXIgZXhwcmVzc2lvbiBtYXRjaGluZyBhbHBoYWJldGljLCBub24tc3BlY2lhbCBjaGFyYWN0ZXJzXG4gKi9cbmV4cG9ydCBjb25zdCBBTFBIQVNfUkVHRVggPSAvW1xcdTAwQzAtXFx1MDE3RmEtekEtWl0vO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBBTllfUkVHRVggcmVndWxhciBleHByZXNzaW9uIG1hdGNoaW5nIGFueSBub24tc3BlY2lhbCBjaGFyYWN0ZXJzXG4gKi9cbmV4cG9ydCBjb25zdCBBTllfUkVHRVggPSAvW1xcdTAwQzAtXFx1MDE3RmEtekEtWjAtOV0vO1xuXG4vKipcbiAqIERlZmF1bHQgb3B0aW9ucyB0aGF0IGdldCBwYXNzZWQgZm9yIHRoZSBgbWFza0FQSS5jb25mb3JtVG9NYXNrKClgIG1ldGhvZC5cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBERUZBVUxUX0NPTkZPUk1fT1BUSU9OUyBkZWZhdWx0IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09ORk9STV9PUFRJT05TID0ge1xuICBjYXJldFRyYXBJbmRleGVzOiBbXSxcbiAgZ3VpZGU6IGZhbHNlLFxuICBwcmV2aW91c01hc2tSZXN1bHQ6IEVNUFRZX1NUUklORyxcbiAgcGxhY2Vob2xkZXJDaGFyOiBQTEFDRUhPTERFUl9DSEFSLFxuICBwbGFjZWhvbGRlcjogRU1QVFlfU1RSSU5HLFxuICBzZWxlY3Rpb246IHtcbiAgICBzdGFydDogMFxuICB9LFxuICBrZWVwQ2hhcmFjdGVyUG9zaXRpb25zOiBmYWxzZVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiBhIHN0cmluZyBjb250YWluaW5nIGEgcGF0dGVybiB0aGF0IG5lZWRzIHBhcnNpbmdcbiAqIEByZXR1cm5zIHtBcnJheTxzdHJpbmd8UmVnRXhwPnx1bmRlZmluZWR9IGEgdmFsaWQgbWFzayBvciBub3RoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0UGF0dGVybkZyb21TdHJpbmcocGF0dGVybjogc3RyaW5nKSB7XG4gIGlmICh0eXBlb2YgcGF0dGVybiAhPT0gJ3N0cmluZycgfHwgIXBhdHRlcm4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IGZpcnN0Q2hhciA9IHBhdHRlcm4uY2hhckF0KDApO1xuICBjb25zdCBsYXN0Q2hhciA9IHBhdHRlcm4uY2hhckF0KHBhdHRlcm4ubGVuZ3RoIC0gMSk7XG5cbiAgLy8gRGV0ZWN0IGlubGluZWQgYXJyYXlzIChKU09OLWxpa2UpXG4gIGlmIChmaXJzdENoYXIgPT09ICdbJyAmJiBsYXN0Q2hhciA9PT0gJ10nKSB7XG4gICAgY29uc3QgcGF0dGVybkFycmF5ID0gcGF0dGVybi5zdWJzdHJpbmcoMSwgcGF0dGVybi5sZW5ndGggLSAxKS5zcGxpdCgvLCA/L2cpO1xuICAgIHJldHVybiBwYXR0ZXJuQXJyYXkubWFwKChpdGVtKSA9PiB7XG4gICAgICAvLyBSZW1vdmUgcXVvdGVzXG4gICAgICAvLyBOT1RFOiBuZWVkIHRvIGRldGVjdCBzaW5nbGUgYW5kIGRvdWJsZSBxdW90ZXMgaGVyZVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBpZiAoW1wiJ1wiLCAnXCInXS5pbmNsdWRlcyhpdGVtLmNoYXJBdCgwKSkpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uc3Vic3RyaW5nKDEsIGl0ZW0ubGVuZ3RoIC0gMSk7XG4gICAgICB9XG4gICAgICAvLyBDb252ZXJ0IHN0cmluZy1iYXNlZCByZWdleCBpbnRvIFJlZ0V4cCBvYmplY3RzXG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChpdGVtLnN1YnN0cmluZygxLCBpdGVtLmxlbmd0aCAtIDEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEBUT0RPOiBUcnkgdG8gZGV0ZWN0IG90aGVyIHR5cGVzIG9mIHN0cmluZyBpbnB1dFxuICAvLyBmb3Igbm93LCByZXR1cm4gYW4gZW1wdHkgbWFza1xuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-mask/ids-mask-common.ts\n");

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
/******/ 			"ids-mask-prefix-suffix": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-mask/demos/prefix-suffix.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
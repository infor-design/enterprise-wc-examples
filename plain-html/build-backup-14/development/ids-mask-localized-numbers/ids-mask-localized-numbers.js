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

/***/ "./src/components/ids-mask/demos/localized-numbers.ts":
/*!************************************************************!*\
  !*** ./src/components/ids-mask/demos/localized-numbers.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_input_ids_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ids-input/ids-input */ \"./src/components/ids-input/ids-input.ts\");\n/* harmony import */ var _ids_dropdown_ids_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ids-dropdown/ids-dropdown */ \"./src/components/ids-dropdown/ids-dropdown.ts\");\n/* harmony import */ var _utils_ids_deep_clone_utils_ids_deep_clone_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/ids-deep-clone-utils/ids-deep-clone-utils */ \"./src/utils/ids-deep-clone-utils/ids-deep-clone-utils.ts\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const pageContainer = document.querySelector(\"ids-container\");\n  const createPlaceholder = (input) => {\n    const ints = input.maskOptions.integerLimit;\n    const decs = input.maskOptions.decimalLimit || 0;\n    let placeholder = \"\";\n    for (let i = 0; i < ints; i++) {\n      placeholder += \"1\";\n    }\n    if (input.maskOptions.allowDecimal) {\n      placeholder += input.maskOptions.symbols.decimal;\n      for (let i = 0; i < decs; i++) {\n        placeholder += \"1\";\n      }\n    }\n    const opts = (0,_utils_ids_deep_clone_utils_ids_deep_clone_utils__WEBPACK_IMPORTED_MODULE_2__.deepClone)(input.maskOptions);\n    opts.locale = input.locale;\n    const maskArray = input.mask(placeholder, opts).mask;\n    input.placeholder = `${maskArray.map((el) => {\n      if (typeof el !== \"string\") {\n        return \"#\";\n      }\n      if (el === \"[]\") {\n        return \"\";\n      }\n      return el;\n    }).join(\"\")}`;\n  };\n  const allInputs = [...document.querySelectorAll(\"ids-input\")];\n  allInputs.forEach((input) => {\n    input.textAlign = \"right\";\n    input.mask = \"number\";\n  });\n  const allNegativeInputs = [...document.querySelectorAll('[id*=\"negative\"]')];\n  allNegativeInputs.forEach((input) => {\n    input.maskOptions.allowNegative = true;\n  });\n  const allDecimalInputs = [...document.querySelectorAll('[id*=\"decimal\"]')];\n  allDecimalInputs.forEach((input) => {\n    input.maskOptions.allowDecimal = true;\n    input.maskOptions.decimalLimit = 2;\n  });\n  const allGroupInputs = [...document.querySelectorAll('[id*=\"group\"]')];\n  allGroupInputs.forEach((input) => {\n    input.maskOptions.allowThousandsSeparator = true;\n  });\n  const allThousandsInputs = [...document.querySelectorAll('[id*=\"thousands\"]')];\n  allThousandsInputs.forEach((input) => {\n    input.maskOptions.integerLimit = 4;\n    createPlaceholder(input);\n  });\n  const allMillionsInputs = [...document.querySelectorAll('[id*=\"millions\"]')];\n  allMillionsInputs.forEach((input) => {\n    input.maskOptions.integerLimit = 7;\n    createPlaceholder(input);\n  });\n  const allBillionsInputs = [...document.querySelectorAll('[id*=\"billions\"]')];\n  allBillionsInputs.forEach((input) => {\n    input.maskOptions.integerLimit = 10;\n    createPlaceholder(input);\n  });\n  const allQuintillionsInputs = [...document.querySelectorAll('[id*=\"quintillions\"]')];\n  allQuintillionsInputs.forEach((input) => {\n    input.maskOptions.integerLimit = 18;\n    if (input.id.includes(\"decimal\")) {\n      input.maskOptions.decimalLimit = 6;\n    }\n    createPlaceholder(input);\n  });\n  pageContainer.addEventListener(\"localechange\", () => {\n    allInputs.forEach((input) => {\n      input.value = \"\";\n      createPlaceholder(input);\n    });\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtbWFzay9kZW1vcy9sb2NhbGl6ZWQtbnVtYmVycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ087QUFDQTtBQUNtQjtBQUUxQixTQUFTLGlCQUFpQixvQkFBb0IsTUFBTTtBQUNsRCxRQUFNLGdCQUFxQixTQUFTLGNBQWMsZUFBZTtBQUlqRSxRQUFNLG9CQUFvQixDQUFDLFVBQWU7QUFDeEMsVUFBTSxPQUFPLE1BQU0sWUFBWTtBQUMvQixVQUFNLE9BQU8sTUFBTSxZQUFZLGdCQUFnQjtBQUMvQyxRQUFJLGNBQWM7QUFFbEIsYUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLEtBQUs7QUFDN0IscUJBQWU7QUFBQSxJQUNqQjtBQUVBLFFBQUksTUFBTSxZQUFZLGNBQWM7QUFDbEMscUJBQWUsTUFBTSxZQUFZLFFBQVE7QUFDekMsZUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLEtBQUs7QUFDN0IsdUJBQWU7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFJQSxVQUFNLE9BQU8sMkZBQVMsQ0FBQyxNQUFNLFdBQVc7QUFDeEMsU0FBSyxTQUFTLE1BQU07QUFDcEIsVUFBTSxZQUFZLE1BQU0sS0FBSyxhQUFhLElBQUksRUFBRTtBQUloRCxVQUFNLGNBQWMsR0FBRyxVQUFVLElBQUksQ0FBQyxPQUFZO0FBQ2hELFVBQUksT0FBTyxPQUFPLFVBQVU7QUFDMUIsZUFBTztBQUFBLE1BQ1Q7QUFDQSxVQUFJLE9BQU8sTUFBTTtBQUNmLGVBQU87QUFBQSxNQUNUO0FBQ0EsYUFBTztBQUFBLElBQ1QsQ0FBQyxFQUFFLEtBQUssRUFBRTtBQUFBLEVBQ1o7QUFJQSxRQUFNLFlBQXdCLENBQUMsR0FBRyxTQUFTLGlCQUFpQixXQUFXLENBQUM7QUFDeEUsWUFBVSxRQUFRLENBQUMsVUFBVTtBQUMzQixVQUFNLFlBQVk7QUFDbEIsVUFBTSxPQUFPO0FBQUEsRUFDZixDQUFDO0FBRUQsUUFBTSxvQkFBZ0MsQ0FBQyxHQUFHLFNBQVMsaUJBQWlCLGtCQUFrQixDQUFDO0FBQ3ZGLG9CQUFrQixRQUFRLENBQUMsVUFBVTtBQUNuQyxVQUFNLFlBQVksZ0JBQWdCO0FBQUEsRUFDcEMsQ0FBQztBQUVELFFBQU0sbUJBQStCLENBQUMsR0FBRyxTQUFTLGlCQUFpQixpQkFBaUIsQ0FBQztBQUNyRixtQkFBaUIsUUFBUSxDQUFDLFVBQVU7QUFDbEMsVUFBTSxZQUFZLGVBQWU7QUFDakMsVUFBTSxZQUFZLGVBQWU7QUFBQSxFQUNuQyxDQUFDO0FBRUQsUUFBTSxpQkFBNkIsQ0FBQyxHQUFHLFNBQVMsaUJBQWlCLGVBQWUsQ0FBQztBQUNqRixpQkFBZSxRQUFRLENBQUMsVUFBVTtBQUNoQyxVQUFNLFlBQVksMEJBQTBCO0FBQUEsRUFDOUMsQ0FBQztBQUlELFFBQU0scUJBQWlDLENBQUMsR0FBRyxTQUFTLGlCQUFpQixtQkFBbUIsQ0FBQztBQUN6RixxQkFBbUIsUUFBUSxDQUFDLFVBQVU7QUFDcEMsVUFBTSxZQUFZLGVBQWU7QUFDakMsc0JBQWtCLEtBQUs7QUFBQSxFQUN6QixDQUFDO0FBR0QsUUFBTSxvQkFBZ0MsQ0FBQyxHQUFHLFNBQVMsaUJBQWlCLGtCQUFrQixDQUFDO0FBQ3ZGLG9CQUFrQixRQUFRLENBQUMsVUFBVTtBQUNuQyxVQUFNLFlBQVksZUFBZTtBQUNqQyxzQkFBa0IsS0FBSztBQUFBLEVBQ3pCLENBQUM7QUFHRCxRQUFNLG9CQUFnQyxDQUFDLEdBQUcsU0FBUyxpQkFBaUIsa0JBQWtCLENBQUM7QUFDdkYsb0JBQWtCLFFBQVEsQ0FBQyxVQUFVO0FBQ25DLFVBQU0sWUFBWSxlQUFlO0FBQ2pDLHNCQUFrQixLQUFLO0FBQUEsRUFDekIsQ0FBQztBQUdELFFBQU0sd0JBQW9DLENBQUMsR0FBRyxTQUFTLGlCQUFpQixzQkFBc0IsQ0FBQztBQUMvRix3QkFBc0IsUUFBUSxDQUFDLFVBQVU7QUFDdkMsVUFBTSxZQUFZLGVBQWU7QUFDakMsUUFBSSxNQUFNLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDaEMsWUFBTSxZQUFZLGVBQWU7QUFBQSxJQUNuQztBQUNBLHNCQUFrQixLQUFLO0FBQUEsRUFDekIsQ0FBQztBQUdELGdCQUFjLGlCQUFpQixnQkFBZ0IsTUFBTTtBQUNuRCxjQUFVLFFBQVEsQ0FBQyxVQUFVO0FBQzNCLFlBQU0sUUFBUTtBQUNkLHdCQUFrQixLQUFLO0FBQUEsSUFDekIsQ0FBQztBQUFBLEVBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1tYXNrL2RlbW9zL2xvY2FsaXplZC1udW1iZXJzLnRzP2VhNzQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU3VwcG9ydGluZyBjb21wb25lbnRzXG5pbXBvcnQgJy4uLy4uL2lkcy1pbnB1dC9pZHMtaW5wdXQnO1xuaW1wb3J0ICcuLi8uLi9pZHMtZHJvcGRvd24vaWRzLWRyb3Bkb3duJztcbmltcG9ydCB7IGRlZXBDbG9uZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2lkcy1kZWVwLWNsb25lLXV0aWxzL2lkcy1kZWVwLWNsb25lLXV0aWxzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgcGFnZUNvbnRhaW5lcjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWRzLWNvbnRhaW5lcicpO1xuXG4gIC8vIFVzZXMgdGhlIGRlZmluZWQgaW50ZWdlci9kZWNpbWFsIGxpbWl0cyB0byBjcmVhdGUgYW4gSWRzSW5wdXRcbiAgLy8gYHBsYWNlaG9sZGVyYCBkZWZpbml0aW9uIGJhc2VkIG9uIHRoZSBhY3R1YWwgbGVuZ3RoIG9mIHRoZSBtYXNrLlxuICBjb25zdCBjcmVhdGVQbGFjZWhvbGRlciA9IChpbnB1dDogYW55KSA9PiB7XG4gICAgY29uc3QgaW50cyA9IGlucHV0Lm1hc2tPcHRpb25zLmludGVnZXJMaW1pdDtcbiAgICBjb25zdCBkZWNzID0gaW5wdXQubWFza09wdGlvbnMuZGVjaW1hbExpbWl0IHx8IDA7XG4gICAgbGV0IHBsYWNlaG9sZGVyID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludHM7IGkrKykge1xuICAgICAgcGxhY2Vob2xkZXIgKz0gJzEnO1xuICAgIH1cblxuICAgIGlmIChpbnB1dC5tYXNrT3B0aW9ucy5hbGxvd0RlY2ltYWwpIHtcbiAgICAgIHBsYWNlaG9sZGVyICs9IGlucHV0Lm1hc2tPcHRpb25zLnN5bWJvbHMuZGVjaW1hbDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVjczsgaSsrKSB7XG4gICAgICAgIHBsYWNlaG9sZGVyICs9ICcxJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYWxsaW5nIGBpbnB1dC5tYXNrKClgIGRpcmVjdGx5IGRvZXNuJ3QgaW5jbHVkZSB0aGUgbG9jYWxlLFxuICAgIC8vIHNpbmNlIGl0J3Mgbm9ybWFsbHkgYWRkZWQgYnkgdGhlIElkc0lucHV0XG4gICAgY29uc3Qgb3B0cyA9IGRlZXBDbG9uZShpbnB1dC5tYXNrT3B0aW9ucyk7XG4gICAgb3B0cy5sb2NhbGUgPSBpbnB1dC5sb2NhbGU7XG4gICAgY29uc3QgbWFza0FycmF5ID0gaW5wdXQubWFzayhwbGFjZWhvbGRlciwgb3B0cykubWFzaztcblxuICAgIC8vIFdyaXRlIGEgcGxhY2Vob2xkZXIgc3RyaW5nIGJhc2VkIG9uIGEgc2xpZ2h0bHktbW9kaWZpZWQgbWFzayBhcnJheVxuICAgIC8vIChyZW1vdmVzIFwiW11cIlwiIGNhcmV0IHRyYXBzIGFuZCByZXBsYWNlcyByZWdleCBtYXRjaGVycyB3aXRoIFwiI1wiKVxuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gYCR7bWFza0FycmF5Lm1hcCgoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBlbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuICcjJztcbiAgICAgIH1cbiAgICAgIGlmIChlbCA9PT0gJ1tdJykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gZWw7XG4gICAgfSkuam9pbignJyl9YDtcbiAgfTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gU2V0IGJhc2ljIHJ1bGVzIG9uIGFsbCBpbnB1dCBmaWVsZHNcbiAgY29uc3QgYWxsSW5wdXRzOiBBcnJheTxhbnk+ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lkcy1pbnB1dCcpXTtcbiAgYWxsSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaW5wdXQudGV4dEFsaWduID0gJ3JpZ2h0JztcbiAgICBpbnB1dC5tYXNrID0gJ251bWJlcic7XG4gIH0pO1xuXG4gIGNvbnN0IGFsbE5lZ2F0aXZlSW5wdXRzOiBBcnJheTxhbnk+ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZCo9XCJuZWdhdGl2ZVwiXScpXTtcbiAgYWxsTmVnYXRpdmVJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC5tYXNrT3B0aW9ucy5hbGxvd05lZ2F0aXZlID0gdHJ1ZTtcbiAgfSk7XG5cbiAgY29uc3QgYWxsRGVjaW1hbElucHV0czogQXJyYXk8YW55PiA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWQqPVwiZGVjaW1hbFwiXScpXTtcbiAgYWxsRGVjaW1hbElucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0Lm1hc2tPcHRpb25zLmFsbG93RGVjaW1hbCA9IHRydWU7XG4gICAgaW5wdXQubWFza09wdGlvbnMuZGVjaW1hbExpbWl0ID0gMjtcbiAgfSk7XG5cbiAgY29uc3QgYWxsR3JvdXBJbnB1dHM6IEFycmF5PGFueT4gPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkKj1cImdyb3VwXCJdJyldO1xuICBhbGxHcm91cElucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0Lm1hc2tPcHRpb25zLmFsbG93VGhvdXNhbmRzU2VwYXJhdG9yID0gdHJ1ZTtcbiAgfSk7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFNldCBsaW1pdHMgb24gXCJ0aG91c2FuZHMtbGVuZ3RoXCIgaW5wdXRzXG4gIGNvbnN0IGFsbFRob3VzYW5kc0lucHV0czogQXJyYXk8YW55PiA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWQqPVwidGhvdXNhbmRzXCJdJyldO1xuICBhbGxUaG91c2FuZHNJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC5tYXNrT3B0aW9ucy5pbnRlZ2VyTGltaXQgPSA0O1xuICAgIGNyZWF0ZVBsYWNlaG9sZGVyKGlucHV0KTtcbiAgfSk7XG5cbiAgLy8gU2V0IGxpbWl0cyBvbiBcIm1pbGxpb25zLWxlbmd0aFwiIGlucHV0c1xuICBjb25zdCBhbGxNaWxsaW9uc0lucHV0czogQXJyYXk8YW55PiA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWQqPVwibWlsbGlvbnNcIl0nKV07XG4gIGFsbE1pbGxpb25zSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaW5wdXQubWFza09wdGlvbnMuaW50ZWdlckxpbWl0ID0gNztcbiAgICBjcmVhdGVQbGFjZWhvbGRlcihpbnB1dCk7XG4gIH0pO1xuXG4gIC8vIFNldCBsaW1pdHMgb24gXCJiaWxsaW9ucy1sZW5ndGhcIiBpbnB1dHNcbiAgY29uc3QgYWxsQmlsbGlvbnNJbnB1dHM6IEFycmF5PGFueT4gPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkKj1cImJpbGxpb25zXCJdJyldO1xuICBhbGxCaWxsaW9uc0lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0Lm1hc2tPcHRpb25zLmludGVnZXJMaW1pdCA9IDEwO1xuICAgIGNyZWF0ZVBsYWNlaG9sZGVyKGlucHV0KTtcbiAgfSk7XG5cbiAgLy8gU2V0IGxpbWl0cyBvbiBcInF1aW50aWxsaW9ucy1sZW5ndGhcIiBpbnB1dHNcbiAgY29uc3QgYWxsUXVpbnRpbGxpb25zSW5wdXRzOiBBcnJheTxhbnk+ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZCo9XCJxdWludGlsbGlvbnNcIl0nKV07XG4gIGFsbFF1aW50aWxsaW9uc0lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0Lm1hc2tPcHRpb25zLmludGVnZXJMaW1pdCA9IDE4O1xuICAgIGlmIChpbnB1dC5pZC5pbmNsdWRlcygnZGVjaW1hbCcpKSB7XG4gICAgICBpbnB1dC5tYXNrT3B0aW9ucy5kZWNpbWFsTGltaXQgPSA2O1xuICAgIH1cbiAgICBjcmVhdGVQbGFjZWhvbGRlcihpbnB1dCk7XG4gIH0pO1xuXG4gIC8vIENoYW5nZSBsb2NhbGl6ZWQgc3RyaW5ncyBvbiBhbGwgbnVtYmVyIGlucHV0cyB3aGVuIHRoZSBQYWdlIGNvbnRhaW5lcidzIGxvY2FsZSBjaGFuZ2VzXG4gIHBhZ2VDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9jYWxlY2hhbmdlJywgKCkgPT4ge1xuICAgIGFsbElucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGNyZWF0ZVBsYWNlaG9sZGVyKGlucHV0KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-mask/demos/localized-numbers.ts\n");

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
/******/ 		__webpack_require__.h = () => ("7d4191aed3ffbdb26091")
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
/******/ 			"ids-mask-localized-numbers": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-trigger-field_ids-trigger-field_scss","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-trigger-field_ids-trigger-field_scss","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts"], () => (__webpack_require__("./src/components/ids-mask/demos/localized-numbers.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
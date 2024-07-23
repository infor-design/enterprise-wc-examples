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

/***/ "./src/components/ids-date-picker/demos/range.ts":
/*!*******************************************************!*\
  !*** ./src/components/ids-date-picker/demos/range.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_date_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-date-picker */ \"./src/components/ids-date-picker/ids-date-picker.ts\");\n\n(async function init() {\n  const container = document.querySelector(\"ids-container\");\n  await container?.setLocale(\"en-US\");\n  const rangePickerSettings = document.querySelector(\"#e2e-datepicker-settings-value\");\n  const rangePickerForward = document.querySelector(\"#e2e-datepicker-forward\");\n  const rangePickerBackward = document.querySelector(\"#e2e-datepicker-backward\");\n  const rangePickerMax = document.querySelector(\"#e2e-datepicker-max\");\n  const rangePickerMin = document.querySelector(\"#e2e-datepicker-min\");\n  const rangePickerNotIncluded = document.querySelector(\"#e2e-datepicker-not-included\");\n  const rangePickerIncluded = document.querySelector(\"#e2e-datepicker-included\");\n  const rangePickerLegend = document.querySelector(\"#e2e-datepicker-range-legend\");\n  const rangePickerWeek = document.querySelector(\"#e2e-datepicker-week\");\n  if (rangePickerSettings) {\n    rangePickerSettings.rangeSettings = {\n      start: \"2/5/2018\",\n      end: \"2/28/2018\"\n    };\n    rangePickerSettings.addEventListener(\"dayselected\", (e) => {\n      console.info(\"Range Selected\", e.detail.rangeStart, e.detail.rangeEnd);\n    });\n  }\n  if (rangePickerForward) {\n    rangePickerForward.rangeSettings = {\n      selectForward: true\n    };\n  }\n  if (rangePickerBackward) {\n    rangePickerBackward.rangeSettings = {\n      selectBackward: true\n    };\n  }\n  if (rangePickerMax) {\n    rangePickerMax.rangeSettings = {\n      maxDays: 2\n    };\n  }\n  if (rangePickerMin) {\n    rangePickerMin.rangeSettings = {\n      minDays: 5\n    };\n  }\n  if (rangePickerWeek) {\n    rangePickerWeek.rangeSettings = {\n      selectWeek: true\n    };\n  }\n  if (rangePickerNotIncluded) {\n    rangePickerNotIncluded.rangeSettings = {\n      start: \"2/5/2018\",\n      end: \"2/28/2018\"\n    };\n    rangePickerNotIncluded.disableSettings = {\n      dates: [\"2/7/2018\", \"2/9/2018\", \"2/10/2018\", \"2/11/2018\"]\n    };\n  }\n  if (rangePickerIncluded) {\n    rangePickerIncluded.rangeSettings = {\n      start: \"2/5/2018\",\n      end: \"2/28/2018\",\n      includeDisabled: true\n    };\n    rangePickerIncluded.disableSettings = {\n      dates: [\"2/7/2018\", \"2/9/2018\", \"2/10/2018\", \"2/11/2018\"]\n    };\n  }\n  if (rangePickerLegend) {\n    rangePickerLegend.rangeSettings = {\n      start: \"2/5/2018\",\n      end: \"2/28/2018\"\n    };\n    rangePickerLegend.disableSettings = {\n      dates: [\"2/7/2018\", \"2/9/2018\", \"2/10/2018\", \"2/11/2018\"]\n    };\n    rangePickerLegend.legend = [\n      { name: \"Weekends\", color: \"amber-60\", dayOfWeek: [0, 6] },\n      {\n        name: \"Other\",\n        color: \"ruby-30\",\n        dates: [\"2/8/2018\", \"2/9/2018\", \"2/23/2018\"]\n      },\n      {\n        name: \"Half Days\",\n        color: \"amethyst-60\",\n        dates: [\"2/21/2018\", \"1/22/2018\"]\n      },\n      { name: \"Full Days\", color: \"azure-30\", dates: [\"2/24/2018\", \"2/25/2018\"] }\n    ];\n  }\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtZGF0ZS1waWNrZXIvZGVtb3MvcmFuZ2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBTztBQUFBLENBRU4sZUFBZSxPQUFPO0FBQ3JCLFFBQU0sWUFBaUIsU0FBUyxjQUFjLGVBQWU7QUFFN0QsUUFBTSxXQUFXLFVBQVUsT0FBTztBQUNsQyxRQUFNLHNCQUEyQixTQUFTLGNBQWMsZ0NBQWdDO0FBQ3hGLFFBQU0scUJBQTBCLFNBQVMsY0FBYyx5QkFBeUI7QUFDaEYsUUFBTSxzQkFBMkIsU0FBUyxjQUFjLDBCQUEwQjtBQUNsRixRQUFNLGlCQUFzQixTQUFTLGNBQWMscUJBQXFCO0FBQ3hFLFFBQU0saUJBQXNCLFNBQVMsY0FBYyxxQkFBcUI7QUFDeEUsUUFBTSx5QkFBOEIsU0FBUyxjQUFjLDhCQUE4QjtBQUN6RixRQUFNLHNCQUEyQixTQUFTLGNBQWMsMEJBQTBCO0FBQ2xGLFFBQU0sb0JBQXlCLFNBQVMsY0FBYyw4QkFBOEI7QUFDcEYsUUFBTSxrQkFBdUIsU0FBUyxjQUFjLHNCQUFzQjtBQUcxRSxNQUFJLHFCQUFxQjtBQUN2Qix3QkFBb0IsZ0JBQWdCO0FBQUEsTUFDbEMsT0FBTztBQUFBLE1BQ1AsS0FBSztBQUFBLElBQ1A7QUFFQSx3QkFBb0IsaUJBQWlCLGVBQWUsQ0FBQyxNQUFXO0FBQzlELGNBQVEsS0FBSyxrQkFBa0IsRUFBRSxPQUFPLFlBQVksRUFBRSxPQUFPLFFBQVE7QUFBQSxJQUN2RSxDQUFDO0FBQUEsRUFDSDtBQUdBLE1BQUksb0JBQW9CO0FBQ3RCLHVCQUFtQixnQkFBZ0I7QUFBQSxNQUNqQyxlQUFlO0FBQUEsSUFDakI7QUFBQSxFQUNGO0FBR0EsTUFBSSxxQkFBcUI7QUFDdkIsd0JBQW9CLGdCQUFnQjtBQUFBLE1BQ2xDLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUdBLE1BQUksZ0JBQWdCO0FBQ2xCLG1CQUFlLGdCQUFnQjtBQUFBLE1BQzdCLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUdBLE1BQUksZ0JBQWdCO0FBQ2xCLG1CQUFlLGdCQUFnQjtBQUFBLE1BQzdCLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUdBLE1BQUksaUJBQWlCO0FBQ25CLG9CQUFnQixnQkFBZ0I7QUFBQSxNQUM5QixZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFHQSxNQUFJLHdCQUF3QjtBQUMxQiwyQkFBdUIsZ0JBQWdCO0FBQUEsTUFDckMsT0FBTztBQUFBLE1BQ1AsS0FBSztBQUFBLElBQ1A7QUFDQSwyQkFBdUIsa0JBQWtCO0FBQUEsTUFDdkMsT0FBTyxDQUFDLFlBQVksWUFBWSxhQUFhLFdBQVc7QUFBQSxJQUMxRDtBQUFBLEVBQ0Y7QUFHQSxNQUFJLHFCQUFxQjtBQUN2Qix3QkFBb0IsZ0JBQWdCO0FBQUEsTUFDbEMsT0FBTztBQUFBLE1BQ1AsS0FBSztBQUFBLE1BQ0wsaUJBQWlCO0FBQUEsSUFDbkI7QUFDQSx3QkFBb0Isa0JBQWtCO0FBQUEsTUFDcEMsT0FBTyxDQUFDLFlBQVksWUFBWSxhQUFhLFdBQVc7QUFBQSxJQUMxRDtBQUFBLEVBQ0Y7QUFHQSxNQUFJLG1CQUFtQjtBQUNyQixzQkFBa0IsZ0JBQWdCO0FBQUEsTUFDaEMsT0FBTztBQUFBLE1BQ1AsS0FBSztBQUFBLElBQ1A7QUFDQSxzQkFBa0Isa0JBQWtCO0FBQUEsTUFDbEMsT0FBTyxDQUFDLFlBQVksWUFBWSxhQUFhLFdBQVc7QUFBQSxJQUMxRDtBQUNBLHNCQUFrQixTQUFTO0FBQUEsTUFDekIsRUFBRSxNQUFNLFlBQVksT0FBTyxZQUFZLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUFBLE1BQ3pEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPLENBQUMsWUFBWSxZQUFZLFdBQVc7QUFBQSxNQUM3QztBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQyxhQUFhLFdBQVc7QUFBQSxNQUNsQztBQUFBLE1BQ0EsRUFBRSxNQUFNLGFBQWEsT0FBTyxZQUFZLE9BQU8sQ0FBQyxhQUFhLFdBQVcsRUFBRTtBQUFBLElBQzVFO0FBQUEsRUFDRjtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1kYXRlLXBpY2tlci9kZW1vcy9yYW5nZS50cz9lNDJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vaWRzLWRhdGUtcGlja2VyJztcblxuKGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IGNvbnRhaW5lcjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWRzLWNvbnRhaW5lcicpO1xuICAvLyBTZXQgTG9jYWxlIGFuZCB3YWl0IGZvciBpdCB0byBsb2FkXG4gIGF3YWl0IGNvbnRhaW5lcj8uc2V0TG9jYWxlKCdlbi1VUycpO1xuICBjb25zdCByYW5nZVBpY2tlclNldHRpbmdzOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZTJlLWRhdGVwaWNrZXItc2V0dGluZ3MtdmFsdWUnKTtcbiAgY29uc3QgcmFuZ2VQaWNrZXJGb3J3YXJkOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZTJlLWRhdGVwaWNrZXItZm9yd2FyZCcpO1xuICBjb25zdCByYW5nZVBpY2tlckJhY2t3YXJkOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZTJlLWRhdGVwaWNrZXItYmFja3dhcmQnKTtcbiAgY29uc3QgcmFuZ2VQaWNrZXJNYXg6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlMmUtZGF0ZXBpY2tlci1tYXgnKTtcbiAgY29uc3QgcmFuZ2VQaWNrZXJNaW46IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlMmUtZGF0ZXBpY2tlci1taW4nKTtcbiAgY29uc3QgcmFuZ2VQaWNrZXJOb3RJbmNsdWRlZDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2UyZS1kYXRlcGlja2VyLW5vdC1pbmNsdWRlZCcpO1xuICBjb25zdCByYW5nZVBpY2tlckluY2x1ZGVkOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZTJlLWRhdGVwaWNrZXItaW5jbHVkZWQnKTtcbiAgY29uc3QgcmFuZ2VQaWNrZXJMZWdlbmQ6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlMmUtZGF0ZXBpY2tlci1yYW5nZS1sZWdlbmQnKTtcbiAgY29uc3QgcmFuZ2VQaWNrZXJXZWVrOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZTJlLWRhdGVwaWNrZXItd2VlaycpO1xuXG4gIC8vIEV4YW1wbGUgdG8gc2V0IHN0YXJ0L2VuZCBvZiB0aGUgcmFuZ2UgdmlhIGNvbXBvbmVudCBzZXR0aW5nc1xuICBpZiAocmFuZ2VQaWNrZXJTZXR0aW5ncykge1xuICAgIHJhbmdlUGlja2VyU2V0dGluZ3MucmFuZ2VTZXR0aW5ncyA9IHtcbiAgICAgIHN0YXJ0OiAnMi81LzIwMTgnLFxuICAgICAgZW5kOiAnMi8yOC8yMDE4J1xuICAgIH07XG5cbiAgICByYW5nZVBpY2tlclNldHRpbmdzLmFkZEV2ZW50TGlzdGVuZXIoJ2RheXNlbGVjdGVkJywgKGU6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5pbmZvKCdSYW5nZSBTZWxlY3RlZCcsIGUuZGV0YWlsLnJhbmdlU3RhcnQsIGUuZGV0YWlsLnJhbmdlRW5kKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEV4YW1wbGUgcmFuZ2Ugc2VsZWN0aW9uIGZvcndhcmRcbiAgaWYgKHJhbmdlUGlja2VyRm9yd2FyZCkge1xuICAgIHJhbmdlUGlja2VyRm9yd2FyZC5yYW5nZVNldHRpbmdzID0ge1xuICAgICAgc2VsZWN0Rm9yd2FyZDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICAvLyBFeGFtcGxlIHJhbmdlIHNlbGVjdGlvbiBiYWNrd2FyZFxuICBpZiAocmFuZ2VQaWNrZXJCYWNrd2FyZCkge1xuICAgIHJhbmdlUGlja2VyQmFja3dhcmQucmFuZ2VTZXR0aW5ncyA9IHtcbiAgICAgIHNlbGVjdEJhY2t3YXJkOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIC8vIEV4YW1wbGUgcmFuZ2UgbWF4IGRheXNcbiAgaWYgKHJhbmdlUGlja2VyTWF4KSB7XG4gICAgcmFuZ2VQaWNrZXJNYXgucmFuZ2VTZXR0aW5ncyA9IHtcbiAgICAgIG1heERheXM6IDJcbiAgICB9O1xuICB9XG5cbiAgLy8gRXhhbXBsZSByYW5nZSBtaW4gZGF5c1xuICBpZiAocmFuZ2VQaWNrZXJNaW4pIHtcbiAgICByYW5nZVBpY2tlck1pbi5yYW5nZVNldHRpbmdzID0ge1xuICAgICAgbWluRGF5czogNVxuICAgIH07XG4gIH1cblxuICAvLyBFeGFtcGxlIHdlZWsgcGlja2VyXG4gIGlmIChyYW5nZVBpY2tlcldlZWspIHtcbiAgICByYW5nZVBpY2tlcldlZWsucmFuZ2VTZXR0aW5ncyA9IHtcbiAgICAgIHNlbGVjdFdlZWs6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgLy8gRXhhbXBsZSByYW5nZSBkaXNhYmxlZCBub3QgaW5jbHVkZWRcbiAgaWYgKHJhbmdlUGlja2VyTm90SW5jbHVkZWQpIHtcbiAgICByYW5nZVBpY2tlck5vdEluY2x1ZGVkLnJhbmdlU2V0dGluZ3MgPSB7XG4gICAgICBzdGFydDogJzIvNS8yMDE4JyxcbiAgICAgIGVuZDogJzIvMjgvMjAxOCdcbiAgICB9O1xuICAgIHJhbmdlUGlja2VyTm90SW5jbHVkZWQuZGlzYWJsZVNldHRpbmdzID0ge1xuICAgICAgZGF0ZXM6IFsnMi83LzIwMTgnLCAnMi85LzIwMTgnLCAnMi8xMC8yMDE4JywgJzIvMTEvMjAxOCddXG4gICAgfTtcbiAgfVxuXG4gIC8vIEV4YW1wbGUgcmFuZ2UgZGlzYWJsZWQgaW5jbHVkZWRcbiAgaWYgKHJhbmdlUGlja2VySW5jbHVkZWQpIHtcbiAgICByYW5nZVBpY2tlckluY2x1ZGVkLnJhbmdlU2V0dGluZ3MgPSB7XG4gICAgICBzdGFydDogJzIvNS8yMDE4JyxcbiAgICAgIGVuZDogJzIvMjgvMjAxOCcsXG4gICAgICBpbmNsdWRlRGlzYWJsZWQ6IHRydWVcbiAgICB9O1xuICAgIHJhbmdlUGlja2VySW5jbHVkZWQuZGlzYWJsZVNldHRpbmdzID0ge1xuICAgICAgZGF0ZXM6IFsnMi83LzIwMTgnLCAnMi85LzIwMTgnLCAnMi8xMC8yMDE4JywgJzIvMTEvMjAxOCddXG4gICAgfTtcbiAgfVxuXG4gIC8vIEV4YW1wbGUgcmFuZ2Ugd2l0aCBkaXNhYmxlZCBhbmQgbGVnZW5kXG4gIGlmIChyYW5nZVBpY2tlckxlZ2VuZCkge1xuICAgIHJhbmdlUGlja2VyTGVnZW5kLnJhbmdlU2V0dGluZ3MgPSB7XG4gICAgICBzdGFydDogJzIvNS8yMDE4JyxcbiAgICAgIGVuZDogJzIvMjgvMjAxOCdcbiAgICB9O1xuICAgIHJhbmdlUGlja2VyTGVnZW5kLmRpc2FibGVTZXR0aW5ncyA9IHtcbiAgICAgIGRhdGVzOiBbJzIvNy8yMDE4JywgJzIvOS8yMDE4JywgJzIvMTAvMjAxOCcsICcyLzExLzIwMTgnXVxuICAgIH07XG4gICAgcmFuZ2VQaWNrZXJMZWdlbmQubGVnZW5kID0gW1xuICAgICAgeyBuYW1lOiAnV2Vla2VuZHMnLCBjb2xvcjogJ2FtYmVyLTYwJywgZGF5T2ZXZWVrOiBbMCwgNl0gfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ090aGVyJyxcbiAgICAgICAgY29sb3I6ICdydWJ5LTMwJyxcbiAgICAgICAgZGF0ZXM6IFsnMi84LzIwMTgnLCAnMi85LzIwMTgnLCAnMi8yMy8yMDE4J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnSGFsZiBEYXlzJyxcbiAgICAgICAgY29sb3I6ICdhbWV0aHlzdC02MCcsXG4gICAgICAgIGRhdGVzOiBbJzIvMjEvMjAxOCcsICcxLzIyLzIwMTgnXSxcbiAgICAgIH0sXG4gICAgICB7IG5hbWU6ICdGdWxsIERheXMnLCBjb2xvcjogJ2F6dXJlLTMwJywgZGF0ZXM6IFsnMi8yNC8yMDE4JywgJzIvMjUvMjAxOCddIH0sXG4gICAgXTtcbiAgfVxufSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ids-date-picker/demos/range.ts\n");

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
/******/ 		__webpack_require__.h = () => ("c30130eb833f399b5475")
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
/******/ 			"ids-date-picker-range": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-menu_ids-menu-group_scss-src_components_ids-menu_ids-menu-header_scss-src_-787682","src_components_ids-trigger-field_ids-trigger-field_scss","src_components_ids-menu_ids-menu-group_ts-src_components_ids-menu_ids-menu-item_ts-src_compon-420212","src_components_ids-menu_ids-menu_ts","src_components_ids-popup-menu_ids-popup-menu_ts","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-toolbar_ids-toolbar_ts","src_components_ids-time-picker_ids-time-picker-popup_ts","src_components_ids-time-picker_ids-time-picker_ts","src_components_ids-month-view_ids-month-view_scss","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-expandable-area_ids-expandable-area_ts-src_components_ids-toggle-button_id-24819b","src_components_ids-month-view_ids-month-view_ts","src_components_ids-date-picker_ids-date-picker_ts"], () => (__webpack_require__("./src/components/ids-date-picker/demos/range.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
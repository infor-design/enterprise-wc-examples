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

/***/ "./src/components/ids-time-picker/demos/picker-only.ts":
/*!*************************************************************!*\
  !*** ./src/components/ids-time-picker/demos/picker-only.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ids_time_picker_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ids-time-picker-popup */ \"./src/components/ids-time-picker/ids-time-picker-popup.ts\");\n/* harmony import */ var _ids_button_ids_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ids-button/ids-button */ \"./src/components/ids-button/ids-button.ts\");\n/* harmony import */ var _ids_modal_button_ids_modal_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ids-modal-button/ids-modal-button */ \"./src/components/ids-modal-button/ids-modal-button.ts\");\n/* harmony import */ var _ids_trigger_field_ids_trigger_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ids-trigger-field/ids-trigger-field */ \"./src/components/ids-trigger-field/ids-trigger-field.ts\");\n/* harmony import */ var _ids_trigger_field_ids_trigger_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ids-trigger-field/ids-trigger-button */ \"./src/components/ids-trigger-field/ids-trigger-button.ts\");\n\n\n\n\n\nconst fieldDefs = [\n  {\n    id: \"time-picker-current-time-field\",\n    format: \"hh:mm a\",\n    useCurrentTime: \"time\"\n  },\n  {\n    id: \"time-picker-all-dropdowns-field\",\n    format: \"hh:mm:ss a\",\n    minuteInterval: \"15\",\n    secondInterval: \"10\"\n  },\n  {\n    id: \"time-picker-24-field\",\n    format: \"HH:mm\"\n  }\n];\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const demoIdsContainer = document.querySelector(\"ids-container\");\n  const triggerFieldContainer = document.querySelector(\"#trigger-field-container\");\n  const getFieldIdFromBtnId = (btnEl) => btnEl.getAttribute(\"id\")?.replace(\"-button\", \"-field\") || \"\";\n  const updatePopup = (popupEl, data) => {\n    if (!popupEl || !data)\n      return;\n    const booleanProps = [];\n    const otherProps = [\"format\", \"minuteInterval\", \"useCurrentTime\", \"secondInterval\"];\n    booleanProps.forEach((prop) => {\n      if (data[prop])\n        popupEl[prop] = data[prop];\n      else\n        popupEl[prop] = false;\n    });\n    otherProps.forEach((prop) => {\n      if (data[prop])\n        popupEl[prop] = data[prop];\n      else\n        popupEl[prop] = null;\n    });\n  };\n  const createPopup = (fieldId, btnId, data) => {\n    const pickerHTML = `<ids-time-picker-popup\n          format=\"${data.format}\"\n          target=\"#${fieldId}\"\n          trigger-elem=\"#${btnId}\"\n          trigger-type=\"custom\"\n          ${data.useCurrentTime ? 'use-current-time=\"time\"' : \"\"}></ids-time-picker-popup>`;\n    demoIdsContainer.insertAdjacentHTML(\"beforeend\", pickerHTML);\n    const picker = document.querySelector(\"ids-time-picker-popup\");\n    if (picker.popup) {\n      picker.popup.align = \"bottom, left\";\n      picker.popup.arrow = \"bottom\";\n    }\n    picker.onOutsideClick = (e) => {\n      const target = e.target;\n      if (target && target.tagName !== \"IDS-TRIGGER-BUTTON\" && !picker.contains(target)) {\n        picker.hide();\n      }\n    };\n    return picker;\n  };\n  const configurePopup = (btnEl) => {\n    const btnId = btnEl.getAttribute(\"id\");\n    const fieldId = btnId.replace(\"-button\", \"-field\");\n    const field = document.querySelector(`#${fieldId}`);\n    const data = fieldDefs.find((entry) => entry.id === fieldId);\n    let picker = document.querySelector(\"ids-time-picker-popup\");\n    let currentTarget;\n    if (data) {\n      if (picker) {\n        if (picker.popup) {\n          picker.popup.align = \"bottom, left\";\n          picker.popup.arrow = \"bottom\";\n          picker.popup.arrowTarget = `#${btnId}`;\n        }\n        currentTarget = picker.target;\n        picker.target = `#${fieldId}`;\n        picker.triggerElem = `#${btnId}`;\n        if (field.value)\n          picker.value = field.value;\n        updatePopup(picker, data);\n      } else {\n        picker = createPopup(fieldId, btnId, data);\n        if (field.value)\n          picker.value = field.value;\n        picker.addEventListener(\"hide\", (e) => {\n          e.stopPropagation();\n          if (e.detail.doFocus) {\n            picker.target?.focus();\n          }\n        });\n        picker.addEventListener(\"show\", (e) => {\n          e.stopPropagation();\n          picker.value = picker.target?.value;\n        });\n      }\n      if (picker.popup) {\n        picker.popup.arrow = \"bottom\";\n        picker.popup.arrowTarget = `#${btnId}`;\n        picker.popup.align = \"bottom, left\";\n        if (!picker.popup.visible) {\n          picker.show();\n        } else if (picker.target !== currentTarget) {\n          picker.popup.place();\n          picker.popup.placeArrow();\n        } else {\n          picker.hide();\n        }\n      }\n    }\n  };\n  triggerFieldContainer.addEventListener(\"click\", (e) => {\n    const target = e.target;\n    if (target) {\n      if (target.tagName === \"IDS-TRIGGER-BUTTON\") {\n        configurePopup(target);\n      }\n    }\n  });\n  triggerFieldContainer.addEventListener(\"timeselected\", (e) => {\n    const target = e.target;\n    if (target) {\n      const picker = document.querySelector(\"ids-time-picker-popup\");\n      const fieldId = getFieldIdFromBtnId(target);\n      if (target.tagName === \"IDS-TRIGGER-BUTTON\") {\n        const field = document.querySelector(`#${fieldId}`);\n        console.info('\"timeselected\" event triggered', e.detail.value, `. Value will be passed to field \"${fieldId}\"`);\n        field.value = picker.value;\n      }\n      if (target.tagName === \"IDS-TRIGGER-FIELD\") {\n        console.info('\"timeselected\" event triggered', e.detail.value, `. Value will be passed to field \"${fieldId}\"`);\n        target.value = e.detail.value;\n      }\n    }\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtdGltZS1waWNrZXIvZGVtb3MvcGlja2VyLW9ubHkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlQLE1BQU0sWUFBWTtBQUFBLEVBQ2hCO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFDSixRQUFRO0FBQUEsSUFDUixnQkFBZ0I7QUFBQSxFQUNsQjtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLFFBQVE7QUFBQSxJQUNSLGdCQUFnQjtBQUFBLElBQ2hCLGdCQUFnQjtBQUFBLEVBQ2xCO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQ0osUUFBUTtBQUFBLEVBQ1Y7QUFDRjtBQUVBLFNBQVMsaUJBQWlCLG9CQUFvQixNQUFNO0FBQ2xELFFBQU0sbUJBQW1CLFNBQVMsY0FBbUIsZUFBZTtBQUNwRSxRQUFNLHdCQUF3QixTQUFTLGNBQW1CLDBCQUEwQjtBQUVwRixRQUFNLHNCQUFzQixDQUFDLFVBQWUsTUFBTSxhQUFhLElBQUksR0FBRyxRQUFRLFdBQVcsUUFBUSxLQUFLO0FBR3RHLFFBQU0sY0FBYyxDQUFDLFNBQWMsU0FBYztBQUMvQyxRQUFJLENBQUMsV0FBVyxDQUFDO0FBQU07QUFDdkIsVUFBTSxlQUF5QixDQUFDO0FBQ2hDLFVBQU0sYUFBYSxDQUFDLFVBQVUsa0JBQWtCLGtCQUFrQixnQkFBZ0I7QUFFbEYsaUJBQWEsUUFBUSxDQUFDLFNBQVM7QUFDN0IsVUFBSSxLQUFLLElBQUk7QUFBRyxnQkFBUSxJQUFJLElBQUksS0FBSyxJQUFJO0FBQUE7QUFDcEMsZ0JBQVEsSUFBSSxJQUFJO0FBQUEsSUFDdkIsQ0FBQztBQUVELGVBQVcsUUFBUSxDQUFDLFNBQVM7QUFDM0IsVUFBSSxLQUFLLElBQUk7QUFBRyxnQkFBUSxJQUFJLElBQUksS0FBSyxJQUFJO0FBQUE7QUFDcEMsZ0JBQVEsSUFBSSxJQUFJO0FBQUEsSUFDdkIsQ0FBQztBQUFBLEVBQ0g7QUFHQSxRQUFNLGNBQWMsQ0FBQyxTQUFpQixPQUFlLFNBQWM7QUFDakUsVUFBTSxhQUFhO0FBQUEsb0JBQ0gsS0FBSztBQUFBLHFCQUNKO0FBQUEsMkJBQ007QUFBQTtBQUFBLFlBRWYsS0FBSyxpQkFBaUIsNEJBQTRCO0FBQzFELHFCQUFpQixtQkFBbUIsYUFBYSxVQUFVO0FBRTNELFVBQU0sU0FBUyxTQUFTLGNBQW1CLHVCQUF1QjtBQUNsRSxRQUFJLE9BQU8sT0FBTztBQUNoQixhQUFPLE1BQU0sUUFBUTtBQUNyQixhQUFPLE1BQU0sUUFBUTtBQUFBLElBQ3ZCO0FBR0EsV0FBTyxpQkFBaUIsQ0FBQyxNQUFhO0FBQ3BDLFlBQU0sU0FBVSxFQUFFO0FBQ2xCLFVBQUksVUFBVSxPQUFPLFlBQVksd0JBQXdCLENBQUMsT0FBTyxTQUFTLE1BQU0sR0FBRztBQUNqRixlQUFPLEtBQUs7QUFBQSxNQUNkO0FBQUEsSUFDRjtBQUVBLFdBQU87QUFBQSxFQUNUO0FBSUEsUUFBTSxpQkFBaUIsQ0FBQyxVQUFlO0FBQ3JDLFVBQU0sUUFBUSxNQUFNLGFBQWEsSUFBSTtBQUNyQyxVQUFNLFVBQVUsTUFBTSxRQUFRLFdBQVcsUUFBUTtBQUNqRCxVQUFNLFFBQVEsU0FBUyxjQUErQixJQUFJLFNBQVM7QUFFbkUsVUFBTSxPQUFPLFVBQVUsS0FBSyxDQUFDLFVBQVUsTUFBTSxPQUFPLE9BQU87QUFDM0QsUUFBSSxTQUFTLFNBQVMsY0FBbUIsdUJBQXVCO0FBQ2hFLFFBQUk7QUFFSixRQUFJLE1BQU07QUFDUixVQUFJLFFBQVE7QUFDVixZQUFJLE9BQU8sT0FBTztBQUNoQixpQkFBTyxNQUFNLFFBQVE7QUFDckIsaUJBQU8sTUFBTSxRQUFRO0FBQ3JCLGlCQUFPLE1BQU0sY0FBYyxJQUFJO0FBQUEsUUFDakM7QUFDQSx3QkFBZ0IsT0FBTztBQUN2QixlQUFPLFNBQVMsSUFBSTtBQUNwQixlQUFPLGNBQWMsSUFBSTtBQUN6QixZQUFJLE1BQU07QUFBTyxpQkFBTyxRQUFRLE1BQU07QUFDdEMsb0JBQVksUUFBUSxJQUFJO0FBQUEsTUFDMUIsT0FBTztBQUNMLGlCQUFTLFlBQVksU0FBUyxPQUFPLElBQUk7QUFDekMsWUFBSSxNQUFNO0FBQU8saUJBQU8sUUFBUSxNQUFNO0FBR3RDLGVBQU8saUJBQWlCLFFBQVEsQ0FBQyxNQUFtQjtBQUNsRCxZQUFFLGdCQUFnQjtBQUNsQixjQUFJLEVBQUUsT0FBTyxTQUFTO0FBQ3BCLG1CQUFPLFFBQVEsTUFBTTtBQUFBLFVBQ3ZCO0FBQUEsUUFDRixDQUFDO0FBSUQsZUFBTyxpQkFBaUIsUUFBUSxDQUFDLE1BQW1CO0FBQ2xELFlBQUUsZ0JBQWdCO0FBQ2xCLGlCQUFPLFFBQVEsT0FBTyxRQUFRO0FBQUEsUUFDaEMsQ0FBQztBQUFBLE1BQ0g7QUFFQSxVQUFJLE9BQU8sT0FBTztBQUNoQixlQUFPLE1BQU0sUUFBUTtBQUNyQixlQUFPLE1BQU0sY0FBYyxJQUFJO0FBQy9CLGVBQU8sTUFBTSxRQUFRO0FBQ3JCLFlBQUksQ0FBQyxPQUFPLE1BQU0sU0FBUztBQUN6QixpQkFBTyxLQUFLO0FBQUEsUUFDZCxXQUFXLE9BQU8sV0FBVyxlQUFlO0FBQzFDLGlCQUFPLE1BQU0sTUFBTTtBQUNuQixpQkFBTyxNQUFNLFdBQVc7QUFBQSxRQUMxQixPQUFPO0FBQ0wsaUJBQU8sS0FBSztBQUFBLFFBQ2Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFHQSx3QkFBc0IsaUJBQWlCLFNBQVMsQ0FBQyxNQUFrQjtBQUNqRSxVQUFNLFNBQVUsRUFBRTtBQUNsQixRQUFJLFFBQVE7QUFDVixVQUFJLE9BQU8sWUFBWSxzQkFBc0I7QUFDM0MsdUJBQWUsTUFBTTtBQUFBLE1BQ3ZCO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUlELHdCQUFzQixpQkFBaUIsZ0JBQWdCLENBQUMsTUFBbUI7QUFDekUsVUFBTSxTQUFVLEVBQUU7QUFDbEIsUUFBSSxRQUFRO0FBQ1YsWUFBTSxTQUFTLFNBQVMsY0FBbUIsdUJBQXVCO0FBQ2xFLFlBQU0sVUFBVSxvQkFBb0IsTUFBTTtBQUMxQyxVQUFJLE9BQU8sWUFBWSxzQkFBc0I7QUFDM0MsY0FBTSxRQUFRLFNBQVMsY0FBbUIsSUFBSSxTQUFTO0FBQ3ZELGdCQUFRLEtBQUssa0NBQWtDLEVBQUUsT0FBTyxPQUFPLG9DQUFvQyxVQUFVO0FBQzdHLGNBQU0sUUFBUSxPQUFPO0FBQUEsTUFDdkI7QUFDQSxVQUFJLE9BQU8sWUFBWSxxQkFBcUI7QUFDMUMsZ0JBQVEsS0FBSyxrQ0FBa0MsRUFBRSxPQUFPLE9BQU8sb0NBQW9DLFVBQVU7QUFDN0csZUFBTyxRQUFRLEVBQUUsT0FBTztBQUFBLE1BQzFCO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy10aW1lLXBpY2tlci9kZW1vcy9waWNrZXItb25seS50cz9iM2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vaWRzLXRpbWUtcGlja2VyLXBvcHVwJztcbmltcG9ydCAnLi4vLi4vaWRzLWJ1dHRvbi9pZHMtYnV0dG9uJztcbmltcG9ydCAnLi4vLi4vaWRzLW1vZGFsLWJ1dHRvbi9pZHMtbW9kYWwtYnV0dG9uJztcbmltcG9ydCAnLi4vLi4vaWRzLXRyaWdnZXItZmllbGQvaWRzLXRyaWdnZXItZmllbGQnO1xuaW1wb3J0ICcuLi8uLi9pZHMtdHJpZ2dlci1maWVsZC9pZHMtdHJpZ2dlci1idXR0b24nO1xuXG5pbXBvcnQgdHlwZSBJZHNUcmlnZ2VyRmllbGQgZnJvbSAnLi4vLi4vaWRzLXRyaWdnZXItZmllbGQvaWRzLXRyaWdnZXItZmllbGQnO1xuXG5jb25zdCBmaWVsZERlZnMgPSBbXG4gIHtcbiAgICBpZDogJ3RpbWUtcGlja2VyLWN1cnJlbnQtdGltZS1maWVsZCcsXG4gICAgZm9ybWF0OiAnaGg6bW0gYScsXG4gICAgdXNlQ3VycmVudFRpbWU6ICd0aW1lJ1xuICB9LFxuICB7XG4gICAgaWQ6ICd0aW1lLXBpY2tlci1hbGwtZHJvcGRvd25zLWZpZWxkJyxcbiAgICBmb3JtYXQ6ICdoaDptbTpzcyBhJyxcbiAgICBtaW51dGVJbnRlcnZhbDogJzE1JyxcbiAgICBzZWNvbmRJbnRlcnZhbDogJzEwJ1xuICB9LFxuICB7XG4gICAgaWQ6ICd0aW1lLXBpY2tlci0yNC1maWVsZCcsXG4gICAgZm9ybWF0OiAnSEg6bW0nXG4gIH1cbl07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGRlbW9JZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPGFueT4oJ2lkcy1jb250YWluZXInKSE7XG4gIGNvbnN0IHRyaWdnZXJGaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8YW55PignI3RyaWdnZXItZmllbGQtY29udGFpbmVyJykhO1xuXG4gIGNvbnN0IGdldEZpZWxkSWRGcm9tQnRuSWQgPSAoYnRuRWw6IGFueSkgPT4gYnRuRWwuZ2V0QXR0cmlidXRlKCdpZCcpPy5yZXBsYWNlKCctYnV0dG9uJywgJy1maWVsZCcpIHx8ICcnO1xuXG4gIC8vIFVwZGF0ZXMgYW4gZXhpc3RpbmcgSWRzVGltZVBpY2tlclBvcHVwXG4gIGNvbnN0IHVwZGF0ZVBvcHVwID0gKHBvcHVwRWw6IGFueSwgZGF0YTogYW55KSA9PiB7XG4gICAgaWYgKCFwb3B1cEVsIHx8ICFkYXRhKSByZXR1cm47XG4gICAgY29uc3QgYm9vbGVhblByb3BzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IG90aGVyUHJvcHMgPSBbJ2Zvcm1hdCcsICdtaW51dGVJbnRlcnZhbCcsICd1c2VDdXJyZW50VGltZScsICdzZWNvbmRJbnRlcnZhbCddO1xuXG4gICAgYm9vbGVhblByb3BzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgIGlmIChkYXRhW3Byb3BdKSBwb3B1cEVsW3Byb3BdID0gZGF0YVtwcm9wXTtcbiAgICAgIGVsc2UgcG9wdXBFbFtwcm9wXSA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgb3RoZXJQcm9wcy5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICBpZiAoZGF0YVtwcm9wXSkgcG9wdXBFbFtwcm9wXSA9IGRhdGFbcHJvcF07XG4gICAgICBlbHNlIHBvcHVwRWxbcHJvcF0gPSBudWxsO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIENyZWF0ZXMgYSBuZXcgSWRzVGltZVBpY2tlclBvcHVwXG4gIGNvbnN0IGNyZWF0ZVBvcHVwID0gKGZpZWxkSWQ6IHN0cmluZywgYnRuSWQ6IHN0cmluZywgZGF0YTogYW55KSA9PiB7XG4gICAgY29uc3QgcGlja2VySFRNTCA9IGA8aWRzLXRpbWUtcGlja2VyLXBvcHVwXG4gICAgICAgICAgZm9ybWF0PVwiJHtkYXRhLmZvcm1hdH1cIlxuICAgICAgICAgIHRhcmdldD1cIiMke2ZpZWxkSWR9XCJcbiAgICAgICAgICB0cmlnZ2VyLWVsZW09XCIjJHtidG5JZH1cIlxuICAgICAgICAgIHRyaWdnZXItdHlwZT1cImN1c3RvbVwiXG4gICAgICAgICAgJHtkYXRhLnVzZUN1cnJlbnRUaW1lID8gJ3VzZS1jdXJyZW50LXRpbWU9XCJ0aW1lXCInIDogJyd9PjwvaWRzLXRpbWUtcGlja2VyLXBvcHVwPmA7XG4gICAgZGVtb0lkc0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHBpY2tlckhUTUwpO1xuXG4gICAgY29uc3QgcGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcjxhbnk+KCdpZHMtdGltZS1waWNrZXItcG9wdXAnKSE7XG4gICAgaWYgKHBpY2tlci5wb3B1cCkge1xuICAgICAgcGlja2VyLnBvcHVwLmFsaWduID0gJ2JvdHRvbSwgbGVmdCc7XG4gICAgICBwaWNrZXIucG9wdXAuYXJyb3cgPSAnYm90dG9tJztcbiAgICB9XG5cbiAgICAvLyBGaXggb25PdXRzaWRlQ2xpY2sgdG8gY29uc2lkZXIgY2xpY2tpbmcgb24gdHJpZ2dlciBidXR0b25zXG4gICAgcGlja2VyLm9uT3V0c2lkZUNsaWNrID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZSAhPT0gJ0lEUy1UUklHR0VSLUJVVFRPTicgJiYgIXBpY2tlci5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgIHBpY2tlci5oaWRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBwaWNrZXI7XG4gIH07XG5cbiAgLy8gQXNzaWducyB0aGUgY29ycmVjdCBwcm9wZXJ0aWVzL2F0dHJpYnV0ZXMgdG8gdGhlIHN0YW5kYWxvbmUgcGlja2VyIHRoYXQgY29ycmVjdGx5XG4gIC8vIGJpbmRzIGl0IHRvIGVhY2ggdHJpZ2dlciBmaWVsZFxuICBjb25zdCBjb25maWd1cmVQb3B1cCA9IChidG5FbDogYW55KSA9PiB7XG4gICAgY29uc3QgYnRuSWQgPSBidG5FbC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgZmllbGRJZCA9IGJ0bklkLnJlcGxhY2UoJy1idXR0b24nLCAnLWZpZWxkJyk7XG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPElkc1RyaWdnZXJGaWVsZD4oYCMke2ZpZWxkSWR9YCkhO1xuXG4gICAgY29uc3QgZGF0YSA9IGZpZWxkRGVmcy5maW5kKChlbnRyeSkgPT4gZW50cnkuaWQgPT09IGZpZWxkSWQpO1xuICAgIGxldCBwaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPGFueT4oJ2lkcy10aW1lLXBpY2tlci1wb3B1cCcpITtcbiAgICBsZXQgY3VycmVudFRhcmdldDtcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICBpZiAocGlja2VyKSB7XG4gICAgICAgIGlmIChwaWNrZXIucG9wdXApIHtcbiAgICAgICAgICBwaWNrZXIucG9wdXAuYWxpZ24gPSAnYm90dG9tLCBsZWZ0JztcbiAgICAgICAgICBwaWNrZXIucG9wdXAuYXJyb3cgPSAnYm90dG9tJztcbiAgICAgICAgICBwaWNrZXIucG9wdXAuYXJyb3dUYXJnZXQgPSBgIyR7YnRuSWR9YDtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50VGFyZ2V0ID0gcGlja2VyLnRhcmdldDtcbiAgICAgICAgcGlja2VyLnRhcmdldCA9IGAjJHtmaWVsZElkfWA7XG4gICAgICAgIHBpY2tlci50cmlnZ2VyRWxlbSA9IGAjJHtidG5JZH1gO1xuICAgICAgICBpZiAoZmllbGQudmFsdWUpIHBpY2tlci52YWx1ZSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICB1cGRhdGVQb3B1cChwaWNrZXIsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGlja2VyID0gY3JlYXRlUG9wdXAoZmllbGRJZCwgYnRuSWQsIGRhdGEpO1xuICAgICAgICBpZiAoZmllbGQudmFsdWUpIHBpY2tlci52YWx1ZSA9IGZpZWxkLnZhbHVlO1xuXG4gICAgICAgIC8vIERhdGUgUGlja2VyIFBvcHVwJ3MgYGhpZGVgIGV2ZW50IGNhbiBjYXVzZSB0aGUgZmllbGQgdG8gYmVjb21lIGZvY3VzZWRcbiAgICAgICAgcGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCAoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGlmIChlLmRldGFpbC5kb0ZvY3VzKSB7XG4gICAgICAgICAgICBwaWNrZXIudGFyZ2V0Py5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRGF0ZSBQaWNrZXIgUG9wdXAncyBgc2hvd2AgZXZlbnQgd2lsbCBiZSB1c2VkIHRvIGNhcHR1cmUgdGhlIHZhbHVlIGZyb21cbiAgICAgICAgLy8gaXRzIGFzc2lnbmVkIHRyaWdnZXIgZmllbGRcbiAgICAgICAgcGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3cnLCAoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHBpY2tlci52YWx1ZSA9IHBpY2tlci50YXJnZXQ/LnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpY2tlci5wb3B1cCkge1xuICAgICAgICBwaWNrZXIucG9wdXAuYXJyb3cgPSAnYm90dG9tJztcbiAgICAgICAgcGlja2VyLnBvcHVwLmFycm93VGFyZ2V0ID0gYCMke2J0bklkfWA7XG4gICAgICAgIHBpY2tlci5wb3B1cC5hbGlnbiA9ICdib3R0b20sIGxlZnQnO1xuICAgICAgICBpZiAoIXBpY2tlci5wb3B1cC52aXNpYmxlKSB7XG4gICAgICAgICAgcGlja2VyLnNob3coKTtcbiAgICAgICAgfSBlbHNlIGlmIChwaWNrZXIudGFyZ2V0ICE9PSBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgcGlja2VyLnBvcHVwLnBsYWNlKCk7XG4gICAgICAgICAgcGlja2VyLnBvcHVwLnBsYWNlQXJyb3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwaWNrZXIuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIENsaWNraW5nIHRoZSB0cmlnZ2VyIGJ1dHRvbiByZS1hc3NpZ25zIHRoZSBQb3B1cCBiaW5kaW5nc1xuICB0cmlnZ2VyRmllbGRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IChlLnRhcmdldCBhcyBhbnkpO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0lEUy1UUklHR0VSLUJVVFRPTicpIHtcbiAgICAgICAgY29uZmlndXJlUG9wdXAodGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIERpc3BsYXlzIHRoZSBzZWxlY3RlZCBkYXkgd2hlbiBwaWNrZWQgZnJvbSB0aGUgRGF0ZSBQaWNrZXIgUG9wdXAncyBNb250aFZpZXdcbiAgLy8gY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcjxhbnk+KCcjY29tcG9zZWQtZGF0ZS1waWNrZXItYnV0dG9uJykhO1xuICB0cmlnZ2VyRmllbGRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndGltZXNlbGVjdGVkJywgKGU6IEN1c3RvbUV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gKGUudGFyZ2V0IGFzIGFueSk7IC8vIHRyaWdnZXIgZmllbGRcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICBjb25zdCBwaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPGFueT4oJ2lkcy10aW1lLXBpY2tlci1wb3B1cCcpITtcbiAgICAgIGNvbnN0IGZpZWxkSWQgPSBnZXRGaWVsZElkRnJvbUJ0bklkKHRhcmdldCk7XG4gICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdJRFMtVFJJR0dFUi1CVVRUT04nKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcjxhbnk+KGAjJHtmaWVsZElkfWApO1xuICAgICAgICBjb25zb2xlLmluZm8oJ1widGltZXNlbGVjdGVkXCIgZXZlbnQgdHJpZ2dlcmVkJywgZS5kZXRhaWwudmFsdWUsIGAuIFZhbHVlIHdpbGwgYmUgcGFzc2VkIHRvIGZpZWxkIFwiJHtmaWVsZElkfVwiYCk7XG4gICAgICAgIGZpZWxkLnZhbHVlID0gcGlja2VyLnZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnSURTLVRSSUdHRVItRklFTEQnKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnXCJ0aW1lc2VsZWN0ZWRcIiBldmVudCB0cmlnZ2VyZWQnLCBlLmRldGFpbC52YWx1ZSwgYC4gVmFsdWUgd2lsbCBiZSBwYXNzZWQgdG8gZmllbGQgXCIke2ZpZWxkSWR9XCJgKTtcbiAgICAgICAgdGFyZ2V0LnZhbHVlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-time-picker/demos/picker-only.ts\n");

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
/******/ 			"ids-time-picker-picker-only": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-trigger-field_ids-trigger-field_scss","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-time-picker_ids-time-picker-popup_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","vendors-node_modules_ids-identity_dist_theme-new_icons_empty_path-data_json","vendors-node_modules_ids-identity_dist_theme-new_icons_standard_path-data_json","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-popup_ids-popup_scss","src_mixins_ids-locale-mixin_ids-locale-mixin_ts-src_utils_ids-dom-utils_ids-dom-utils_ts-src_-0d5e42","src_components_ids-popup_ids-popup_ts","src_mixins_ids-tooltip-mixin_ids-tooltip-mixin_ts","src_components_ids-icon_ids-icon_ts","src_components_ids-button_ids-button_scss","src_components_ids-text_ids-text_ts","src_components_ids-loading-indicator_ids-loading-indicator_ts","src_components_ids-button_ids-button_ts","src_core_ids-data-source_ts","src_mixins_ids-dirty-tracker-mixin_ids-dirty-tracker-mixin_ts-src_mixins_ids-validation-mixin-f0445e","src_components_ids-trigger-field_ids-trigger-button_scss","src_components_ids-input_ids-input_scss","src_components_ids-input_ids-input_ts","src_mixins_ids-attachment-mixin_ids-attachment-mixin_ts-src_mixins_ids-popup-interactions-mix-9b7040","src_components_ids-trigger-field_ids-trigger-field_scss","src_mixins_ids-focus-capture-mixin_ids-focus-capture-mixin_ts-src_mixins_ids-xss-mixin_ids-xs-3364f3","src_components_ids-trigger-field_ids-trigger-field_ts-src_mixins_ids-label-state-mixin_ids-la-e23ef2","src_components_ids-dropdown_ids-dropdown_ts","src_components_ids-time-picker_ids-time-picker-popup_ts"], () => (__webpack_require__("./src/components/ids-time-picker/demos/picker-only.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
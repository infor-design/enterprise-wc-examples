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

/***/ "./src/components/ids-calendar/demos/custom-calendar-event-manager.ts":
/*!****************************************************************************!*\
  !*** ./src/components/ids-calendar/demos/custom-calendar-event-manager.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CustomCalendarEventManager)\n/* harmony export */ });\nclass CustomCalendarEventManager {\n  #CUSTOM_MAX_EVENT_COUNT = 3;\n  #eventPositionMap = /* @__PURE__ */ new Map();\n  #eventPillAttributesMap = /* @__PURE__ */ new Map();\n  /**\n   * Calculates the event Y_OFFSET value to set the event pill top position\n   * @param {IdsCustomCalendarEvent} calendarEvent IdsCustomCalendarEvent\n   * @returns {number} yOffset\n   */\n  generateYOffset(calendarEvent) {\n    const eventTypeData = calendarEvent.eventTypeData;\n    const dateKey = calendarEvent.dateKey;\n    const order = calendarEvent.order;\n    let position = 0;\n    if (eventTypeData && order <= 3) {\n      this.manageEventPillsPosition(dateKey, order, eventTypeData);\n      if (order === 0) {\n        position = 20;\n      } else if (this.#eventPositionMap.get(`${dateKey}_${order}`)) {\n        position = this.#eventPositionMap.get(`${dateKey}_${order}`);\n      } else {\n        position = order * 18 + 25;\n      }\n    }\n    return position;\n  }\n  /**\n   * Checks if the event pills exceed the MAX_EVENT_COUNT in a day cell\n   * @param {IdsCustomCalendarEvent} calendarEvent IdsCustomCalendarEvent\n   * @returns {boolean} isEventOverflowing\n   */\n  isEventOverflowing(calendarEvent) {\n    return calendarEvent.order > this.#CUSTOM_MAX_EVENT_COUNT - 1;\n  }\n  /**\n   * Manage event pill position vetically based on the number of attributes displayed in first event pill\n   * @param {string} dateKey generated date key\n   * @param {number} eventOrder Events order\n   * @param {CalendarEventTypeData} eventType Event\n   */\n  manageEventPillsPosition(dateKey, eventOrder, eventType) {\n    const MAX_EVENT_PILL_ATTR_COUNT = 5;\n    const noOfAttributes = eventType.attrs?.length;\n    if (eventOrder === 0) {\n      if (noOfAttributes === 3) {\n        this.#eventPositionMap.set(`${dateKey}_${eventOrder + 1}`, 58);\n      } else if (noOfAttributes === 2) {\n        this.#eventPositionMap.set(`${dateKey}_${eventOrder + 1}`, 54);\n      } else if (noOfAttributes === 1) {\n        this.#eventPositionMap.set(`${dateKey}_${eventOrder + 1}`, 40);\n      }\n      this.#eventPillAttributesMap.set(`${dateKey}_${eventOrder}`, noOfAttributes);\n    } else if (eventOrder === 1) {\n      const attributesCount = this.#eventPillAttributesMap.get(`${dateKey}_${eventOrder - 1}`);\n      if (attributesCount + noOfAttributes > MAX_EVENT_PILL_ATTR_COUNT) {\n        this.#CUSTOM_MAX_EVENT_COUNT = 1;\n      } else {\n        this.#CUSTOM_MAX_EVENT_COUNT = 2;\n      }\n      if (attributesCount === 3 && noOfAttributes === 1) {\n        this.#eventPositionMap.set(`${dateKey}_${eventOrder + 1}`, 70);\n      } else if (attributesCount === 2) {\n        this.#eventPositionMap.set(`${dateKey}_${eventOrder + 1}`, 70);\n      } else if (attributesCount === 1 && noOfAttributes === 1) {\n        this.#eventPositionMap.set(`${dateKey}_${eventOrder + 1}`, 60);\n      } else if (attributesCount === 1 && noOfAttributes === 2) {\n        this.#eventPositionMap.set(`${dateKey}_${eventOrder + 1}`, 70);\n      }\n      this.#eventPillAttributesMap.set(`${dateKey}_${eventOrder}`, noOfAttributes);\n    } else if (eventOrder === 2) {\n      const firstPillAttributesCount = this.#eventPillAttributesMap.get(`${dateKey}_${eventOrder - 2}`);\n      const secondPillAttributesCount = this.#eventPillAttributesMap.get(`${dateKey}_${eventOrder - 1}`);\n      if (firstPillAttributesCount + secondPillAttributesCount + noOfAttributes >= MAX_EVENT_PILL_ATTR_COUNT) {\n        this.#CUSTOM_MAX_EVENT_COUNT = 2;\n      } else {\n        this.#CUSTOM_MAX_EVENT_COUNT = 3;\n      }\n      if (secondPillAttributesCount === 3) {\n        this.#eventPositionMap.set(`${dateKey}_${eventOrder + 1}`, 70);\n      } else if (secondPillAttributesCount === 2) {\n        this.#eventPositionMap.set(`${dateKey}_${eventOrder + 1}`, 85);\n      } else if (secondPillAttributesCount === 1) {\n        this.#eventPositionMap.set(`${dateKey}_${eventOrder + 1}`, 75);\n      }\n      this.#eventPillAttributesMap.set(`${dateKey}_${eventOrder}`, noOfAttributes);\n    }\n  }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtY2FsZW5kYXIvZGVtb3MvY3VzdG9tLWNhbGVuZGFyLWV2ZW50LW1hbmFnZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE1BQU8sMkJBQXlDO0FBQUEsRUFDOUMsMEJBQTBCO0FBQUEsRUFFMUIsb0JBQW9CLG9CQUFJLElBQUk7QUFBQSxFQUU1QiwwQkFBMEIsb0JBQUksSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9sQyxnQkFBZ0IsZUFBK0M7QUFDN0QsVUFBTSxnQkFBZ0IsY0FBYztBQUNwQyxVQUFNLFVBQVUsY0FBYztBQUM5QixVQUFNLFFBQVEsY0FBYztBQUM1QixRQUFJLFdBQVc7QUFDZixRQUFJLGlCQUFpQixTQUFTLEdBQUc7QUFFL0IsV0FBSyx5QkFBeUIsU0FBUyxPQUFPLGFBQWE7QUFFM0QsVUFBSSxVQUFVLEdBQUc7QUFDZixtQkFBVztBQUFBLE1BQ2IsV0FBVyxLQUFLLGtCQUFrQixJQUFJLEdBQUcsV0FBVyxPQUFPLEdBQUc7QUFDNUQsbUJBQVcsS0FBSyxrQkFBa0IsSUFBSSxHQUFHLFdBQVcsT0FBTztBQUFBLE1BQzdELE9BQU87QUFFTCxtQkFBWSxRQUFRLEtBQU07QUFBQSxNQUM1QjtBQUFBLElBQ0Y7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLG1CQUFtQixlQUFnRDtBQUNqRSxXQUFPLGNBQWMsUUFBUSxLQUFLLDBCQUEwQjtBQUFBLEVBQzlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRQSx5QkFBeUIsU0FBaUIsWUFBb0IsV0FBd0M7QUFDcEcsVUFBTSw0QkFBNEI7QUFDbEMsVUFBTSxpQkFBaUIsVUFBVSxPQUFPO0FBQ3hDLFFBQUksZUFBZSxHQUFHO0FBQ3BCLFVBQUksbUJBQW1CLEdBQUc7QUFDeEIsYUFBSyxrQkFBa0IsSUFBSSxHQUFHLFdBQVcsYUFBYSxLQUFLLEVBQUU7QUFBQSxNQUMvRCxXQUFXLG1CQUFtQixHQUFHO0FBQy9CLGFBQUssa0JBQWtCLElBQUksR0FBRyxXQUFXLGFBQWEsS0FBSyxFQUFFO0FBQUEsTUFDL0QsV0FBVyxtQkFBbUIsR0FBRztBQUMvQixhQUFLLGtCQUFrQixJQUFJLEdBQUcsV0FBVyxhQUFhLEtBQUssRUFBRTtBQUFBLE1BQy9EO0FBQ0EsV0FBSyx3QkFBd0IsSUFBSSxHQUFHLFdBQVcsY0FBYyxjQUFjO0FBQUEsSUFDN0UsV0FBVyxlQUFlLEdBQUc7QUFDM0IsWUFBTSxrQkFBa0IsS0FBSyx3QkFBd0IsSUFBSSxHQUFHLFdBQVcsYUFBYSxHQUFHO0FBQ3ZGLFVBQUssa0JBQWtCLGlCQUFrQiwyQkFBMkI7QUFDbEUsYUFBSywwQkFBMEI7QUFBQSxNQUNqQyxPQUFPO0FBQ0wsYUFBSywwQkFBMEI7QUFBQSxNQUNqQztBQUVBLFVBQUksb0JBQW9CLEtBQUssbUJBQW1CLEdBQUc7QUFDakQsYUFBSyxrQkFBa0IsSUFBSSxHQUFHLFdBQVcsYUFBYSxLQUFLLEVBQUU7QUFBQSxNQUMvRCxXQUFXLG9CQUFvQixHQUFHO0FBQ2hDLGFBQUssa0JBQWtCLElBQUksR0FBRyxXQUFXLGFBQWEsS0FBSyxFQUFFO0FBQUEsTUFDL0QsV0FBVyxvQkFBb0IsS0FBSyxtQkFBbUIsR0FBRztBQUN4RCxhQUFLLGtCQUFrQixJQUFJLEdBQUcsV0FBVyxhQUFhLEtBQUssRUFBRTtBQUFBLE1BQy9ELFdBQVcsb0JBQW9CLEtBQUssbUJBQW1CLEdBQUc7QUFDeEQsYUFBSyxrQkFBa0IsSUFBSSxHQUFHLFdBQVcsYUFBYSxLQUFLLEVBQUU7QUFBQSxNQUMvRDtBQUNBLFdBQUssd0JBQXdCLElBQUksR0FBRyxXQUFXLGNBQWMsY0FBYztBQUFBLElBQzdFLFdBQVcsZUFBZSxHQUFHO0FBQzNCLFlBQU0sMkJBQTJCLEtBQUssd0JBQXdCLElBQUksR0FBRyxXQUFXLGFBQWEsR0FBRztBQUNoRyxZQUFNLDRCQUE0QixLQUFLLHdCQUF3QixJQUFJLEdBQUcsV0FBVyxhQUFhLEdBQUc7QUFDakcsVUFBSywyQkFBMkIsNEJBQTRCLGtCQUN2RCwyQkFBMkI7QUFDOUIsYUFBSywwQkFBMEI7QUFBQSxNQUNqQyxPQUFPO0FBQ0wsYUFBSywwQkFBMEI7QUFBQSxNQUNqQztBQUVBLFVBQUksOEJBQThCLEdBQUc7QUFDbkMsYUFBSyxrQkFBa0IsSUFBSSxHQUFHLFdBQVcsYUFBYSxLQUFLLEVBQUU7QUFBQSxNQUMvRCxXQUFXLDhCQUE4QixHQUFHO0FBQzFDLGFBQUssa0JBQWtCLElBQUksR0FBRyxXQUFXLGFBQWEsS0FBSyxFQUFFO0FBQUEsTUFDL0QsV0FBVyw4QkFBOEIsR0FBRztBQUMxQyxhQUFLLGtCQUFrQixJQUFJLEdBQUcsV0FBVyxhQUFhLEtBQUssRUFBRTtBQUFBLE1BQy9EO0FBQ0EsV0FBSyx3QkFBd0IsSUFBSSxHQUFHLFdBQVcsY0FBYyxjQUFjO0FBQUEsSUFDN0U7QUFBQSxFQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9jb21wb25lbnRzL2lkcy1jYWxlbmRhci9kZW1vcy9jdXN0b20tY2FsZW5kYXItZXZlbnQtbWFuYWdlci50cz9hZTE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbGVuZGFyRXZlbnRUeXBlRGF0YSB9IGZyb20gJy4uL2lkcy1jYWxlbmRhci1ldmVudCc7XG5pbXBvcnQgSWRzQ3VzdG9tQ2FsZW5kYXJFdmVudCBmcm9tICcuL2N1c3RvbS1jYWxlbmRhci1ldmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUNhbGVuZGFyRXZlbnRNYW5hZ2VyIHtcbiAgI0NVU1RPTV9NQVhfRVZFTlRfQ09VTlQgPSAzO1xuXG4gICNldmVudFBvc2l0aW9uTWFwID0gbmV3IE1hcCgpO1xuXG4gICNldmVudFBpbGxBdHRyaWJ1dGVzTWFwID0gbmV3IE1hcCgpO1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBldmVudCBZX09GRlNFVCB2YWx1ZSB0byBzZXQgdGhlIGV2ZW50IHBpbGwgdG9wIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7SWRzQ3VzdG9tQ2FsZW5kYXJFdmVudH0gY2FsZW5kYXJFdmVudCBJZHNDdXN0b21DYWxlbmRhckV2ZW50XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHlPZmZzZXRcbiAgICovXG4gIGdlbmVyYXRlWU9mZnNldChjYWxlbmRhckV2ZW50OiBJZHNDdXN0b21DYWxlbmRhckV2ZW50KTogbnVtYmVyIHtcbiAgICBjb25zdCBldmVudFR5cGVEYXRhID0gY2FsZW5kYXJFdmVudC5ldmVudFR5cGVEYXRhO1xuICAgIGNvbnN0IGRhdGVLZXkgPSBjYWxlbmRhckV2ZW50LmRhdGVLZXk7XG4gICAgY29uc3Qgb3JkZXIgPSBjYWxlbmRhckV2ZW50Lm9yZGVyO1xuICAgIGxldCBwb3NpdGlvbiA9IDA7XG4gICAgaWYgKGV2ZW50VHlwZURhdGEgJiYgb3JkZXIgPD0gMykge1xuICAgICAgLy8gc3BhY2UgYmV0d2VlbiBldmVudCBwaWxsc1xuICAgICAgdGhpcy5tYW5hZ2VFdmVudFBpbGxzUG9zaXRpb24oZGF0ZUtleSwgb3JkZXIsIGV2ZW50VHlwZURhdGEpO1xuICAgICAgLy8gcG9zaXRpb24gZXZlbnQgZWxlbWVudCB2ZXJ0aWNhbGx5XG4gICAgICBpZiAob3JkZXIgPT09IDApIHtcbiAgICAgICAgcG9zaXRpb24gPSAyMDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4jZXZlbnRQb3NpdGlvbk1hcC5nZXQoYCR7ZGF0ZUtleX1fJHtvcmRlcn1gKSkge1xuICAgICAgICBwb3NpdGlvbiA9IHRoaXMuI2V2ZW50UG9zaXRpb25NYXAuZ2V0KGAke2RhdGVLZXl9XyR7b3JkZXJ9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBldmVudC10eXBlcyBkYXRhIGRvZXNuJ3QgY29udGFpbiBub09mQXR0cmlidXRlcyBhbmQgYXR0ciB2YWx1ZXNcbiAgICAgICAgcG9zaXRpb24gPSAob3JkZXIgKiAxOCkgKyAyNTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZXZlbnQgcGlsbHMgZXhjZWVkIHRoZSBNQVhfRVZFTlRfQ09VTlQgaW4gYSBkYXkgY2VsbFxuICAgKiBAcGFyYW0ge0lkc0N1c3RvbUNhbGVuZGFyRXZlbnR9IGNhbGVuZGFyRXZlbnQgSWRzQ3VzdG9tQ2FsZW5kYXJFdmVudFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gaXNFdmVudE92ZXJmbG93aW5nXG4gICAqL1xuICBpc0V2ZW50T3ZlcmZsb3dpbmcoY2FsZW5kYXJFdmVudDogSWRzQ3VzdG9tQ2FsZW5kYXJFdmVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjYWxlbmRhckV2ZW50Lm9yZGVyID4gdGhpcy4jQ1VTVE9NX01BWF9FVkVOVF9DT1VOVCAtIDE7XG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlIGV2ZW50IHBpbGwgcG9zaXRpb24gdmV0aWNhbGx5IGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgYXR0cmlidXRlcyBkaXNwbGF5ZWQgaW4gZmlyc3QgZXZlbnQgcGlsbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0ZUtleSBnZW5lcmF0ZWQgZGF0ZSBrZXlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50T3JkZXIgRXZlbnRzIG9yZGVyXG4gICAqIEBwYXJhbSB7Q2FsZW5kYXJFdmVudFR5cGVEYXRhfSBldmVudFR5cGUgRXZlbnRcbiAgICovXG4gIG1hbmFnZUV2ZW50UGlsbHNQb3NpdGlvbihkYXRlS2V5OiBzdHJpbmcsIGV2ZW50T3JkZXI6IG51bWJlciwgZXZlbnRUeXBlOiBDYWxlbmRhckV2ZW50VHlwZURhdGEgfCBhbnkpIHtcbiAgICBjb25zdCBNQVhfRVZFTlRfUElMTF9BVFRSX0NPVU5UID0gNTtcbiAgICBjb25zdCBub09mQXR0cmlidXRlcyA9IGV2ZW50VHlwZS5hdHRycz8ubGVuZ3RoO1xuICAgIGlmIChldmVudE9yZGVyID09PSAwKSB7XG4gICAgICBpZiAobm9PZkF0dHJpYnV0ZXMgPT09IDMpIHtcbiAgICAgICAgdGhpcy4jZXZlbnRQb3NpdGlvbk1hcC5zZXQoYCR7ZGF0ZUtleX1fJHtldmVudE9yZGVyICsgMX1gLCA1OCk7XG4gICAgICB9IGVsc2UgaWYgKG5vT2ZBdHRyaWJ1dGVzID09PSAyKSB7XG4gICAgICAgIHRoaXMuI2V2ZW50UG9zaXRpb25NYXAuc2V0KGAke2RhdGVLZXl9XyR7ZXZlbnRPcmRlciArIDF9YCwgNTQpO1xuICAgICAgfSBlbHNlIGlmIChub09mQXR0cmlidXRlcyA9PT0gMSkge1xuICAgICAgICB0aGlzLiNldmVudFBvc2l0aW9uTWFwLnNldChgJHtkYXRlS2V5fV8ke2V2ZW50T3JkZXIgKyAxfWAsIDQwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuI2V2ZW50UGlsbEF0dHJpYnV0ZXNNYXAuc2V0KGAke2RhdGVLZXl9XyR7ZXZlbnRPcmRlcn1gLCBub09mQXR0cmlidXRlcyk7XG4gICAgfSBlbHNlIGlmIChldmVudE9yZGVyID09PSAxKSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVzQ291bnQgPSB0aGlzLiNldmVudFBpbGxBdHRyaWJ1dGVzTWFwLmdldChgJHtkYXRlS2V5fV8ke2V2ZW50T3JkZXIgLSAxfWApO1xuICAgICAgaWYgKChhdHRyaWJ1dGVzQ291bnQgKyBub09mQXR0cmlidXRlcykgPiBNQVhfRVZFTlRfUElMTF9BVFRSX0NPVU5UKSB7XG4gICAgICAgIHRoaXMuI0NVU1RPTV9NQVhfRVZFTlRfQ09VTlQgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jQ1VTVE9NX01BWF9FVkVOVF9DT1VOVCA9IDI7XG4gICAgICB9XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVzQ291bnQgPT09IDMgJiYgbm9PZkF0dHJpYnV0ZXMgPT09IDEpIHtcbiAgICAgICAgdGhpcy4jZXZlbnRQb3NpdGlvbk1hcC5zZXQoYCR7ZGF0ZUtleX1fJHtldmVudE9yZGVyICsgMX1gLCA3MCk7XG4gICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXNDb3VudCA9PT0gMikge1xuICAgICAgICB0aGlzLiNldmVudFBvc2l0aW9uTWFwLnNldChgJHtkYXRlS2V5fV8ke2V2ZW50T3JkZXIgKyAxfWAsIDcwKTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlc0NvdW50ID09PSAxICYmIG5vT2ZBdHRyaWJ1dGVzID09PSAxKSB7XG4gICAgICAgIHRoaXMuI2V2ZW50UG9zaXRpb25NYXAuc2V0KGAke2RhdGVLZXl9XyR7ZXZlbnRPcmRlciArIDF9YCwgNjApO1xuICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGVzQ291bnQgPT09IDEgJiYgbm9PZkF0dHJpYnV0ZXMgPT09IDIpIHtcbiAgICAgICAgdGhpcy4jZXZlbnRQb3NpdGlvbk1hcC5zZXQoYCR7ZGF0ZUtleX1fJHtldmVudE9yZGVyICsgMX1gLCA3MCk7XG4gICAgICB9XG4gICAgICB0aGlzLiNldmVudFBpbGxBdHRyaWJ1dGVzTWFwLnNldChgJHtkYXRlS2V5fV8ke2V2ZW50T3JkZXJ9YCwgbm9PZkF0dHJpYnV0ZXMpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnRPcmRlciA9PT0gMikge1xuICAgICAgY29uc3QgZmlyc3RQaWxsQXR0cmlidXRlc0NvdW50ID0gdGhpcy4jZXZlbnRQaWxsQXR0cmlidXRlc01hcC5nZXQoYCR7ZGF0ZUtleX1fJHtldmVudE9yZGVyIC0gMn1gKTtcbiAgICAgIGNvbnN0IHNlY29uZFBpbGxBdHRyaWJ1dGVzQ291bnQgPSB0aGlzLiNldmVudFBpbGxBdHRyaWJ1dGVzTWFwLmdldChgJHtkYXRlS2V5fV8ke2V2ZW50T3JkZXIgLSAxfWApO1xuICAgICAgaWYgKChmaXJzdFBpbGxBdHRyaWJ1dGVzQ291bnQgKyBzZWNvbmRQaWxsQXR0cmlidXRlc0NvdW50ICsgbm9PZkF0dHJpYnV0ZXMpXG4gICAgICAgID49IE1BWF9FVkVOVF9QSUxMX0FUVFJfQ09VTlQpIHtcbiAgICAgICAgdGhpcy4jQ1VTVE9NX01BWF9FVkVOVF9DT1VOVCA9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiNDVVNUT01fTUFYX0VWRU5UX0NPVU5UID0gMztcbiAgICAgIH1cblxuICAgICAgaWYgKHNlY29uZFBpbGxBdHRyaWJ1dGVzQ291bnQgPT09IDMpIHtcbiAgICAgICAgdGhpcy4jZXZlbnRQb3NpdGlvbk1hcC5zZXQoYCR7ZGF0ZUtleX1fJHtldmVudE9yZGVyICsgMX1gLCA3MCk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZFBpbGxBdHRyaWJ1dGVzQ291bnQgPT09IDIpIHtcbiAgICAgICAgdGhpcy4jZXZlbnRQb3NpdGlvbk1hcC5zZXQoYCR7ZGF0ZUtleX1fJHtldmVudE9yZGVyICsgMX1gLCA4NSk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZFBpbGxBdHRyaWJ1dGVzQ291bnQgPT09IDEpIHtcbiAgICAgICAgdGhpcy4jZXZlbnRQb3NpdGlvbk1hcC5zZXQoYCR7ZGF0ZUtleX1fJHtldmVudE9yZGVyICsgMX1gLCA3NSk7XG4gICAgICB9XG4gICAgICB0aGlzLiNldmVudFBpbGxBdHRyaWJ1dGVzTWFwLnNldChgJHtkYXRlS2V5fV8ke2V2ZW50T3JkZXJ9YCwgbm9PZkF0dHJpYnV0ZXMpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ids-calendar/demos/custom-calendar-event-manager.ts\n");

/***/ }),

/***/ "./src/components/ids-calendar/demos/example-custom.ts":
/*!*************************************************************!*\
  !*** ./src/components/ids-calendar/demos/example-custom.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_data_events_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data/events.json */ \"./src/assets/data/events.json\");\n/* harmony import */ var _custom_calendar_event_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-calendar-event-manager */ \"./src/components/ids-calendar/demos/custom-calendar-event-manager.ts\");\n\n\nconst eventsURL = _assets_data_events_json__WEBPACK_IMPORTED_MODULE_0__;\nfunction getCalendarEvents() {\n  return fetch(eventsURL).then((res) => res.json());\n}\ndocument.addEventListener(\"DOMContentLoaded\", async () => {\n  const calendar = document.querySelector(\"ids-calendar\");\n  const addEventMenu = document.querySelector(\"#add-event\");\n  const eventManager = new _custom_calendar_event_manager__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  calendar?.addEventListener(\"beforeeventrendered\", () => {\n    const view = calendar?.getView();\n    view.generateYOffset = (event) => eventManager.generateYOffset(event);\n    view.isEventOverflowing = (event) => eventManager.isEventOverflowing(event);\n  });\n  calendar.eventTypesData = [\n    {\n      id: \"dto\",\n      label: \"Discretionary Time Off\",\n      translationKey: \"DiscretionaryTimeOff\",\n      color: \"azure\",\n      checked: true,\n      attrs: [\n        \"subject\",\n        \"time\"\n      ]\n    },\n    {\n      id: \"admin\",\n      label: \"Admin\",\n      translationKey: \"AdministrativeLeave\",\n      color: \"amethyst\",\n      checked: true,\n      attrs: [\n        \"subject\",\n        \"time\"\n      ]\n    },\n    {\n      id: \"team\",\n      label: \"Team Event\",\n      translationKey: \"TeamEvent\",\n      color: \"emerald\",\n      checked: true,\n      attrs: [\n        \"subject\",\n        \"time\",\n        \"location\"\n      ]\n    },\n    {\n      id: \"sick\",\n      label: \"Sick Time\",\n      translationKey: \"SickTime\",\n      color: \"amber\",\n      checked: true,\n      attrs: [\n        \"subject\",\n        \"time\"\n      ]\n    },\n    {\n      id: \"holiday\",\n      label: \"Company Holiday\",\n      translationKey: \"CompanyHoliday\",\n      color: \"slate\",\n      checked: true,\n      disabled: true,\n      attrs: [\n        \"subject\"\n      ]\n    }\n  ];\n  calendar.eventsData = await getCalendarEvents();\n  addEventMenu?.addEventListener(\"selected\", (evt) => {\n    const id = Date.now().toString() + Math.floor(Math.random() * 100);\n    switch (evt.detail.value) {\n      case \"add-modal\":\n        calendar.createNewEvent(id, true);\n        break;\n      case \"add-api\":\n        calendar.createNewEvent(id, false);\n        break;\n      case \"clear\":\n        calendar.clearEvents();\n        break;\n      default:\n        break;\n    }\n  });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZHMtY2FsZW5kYXIvZGVtb3MvZXhhbXBsZS1jdXN0b20udHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXVCO0FBR2dCO0FBRXZDLE1BQU0sWUFBaUIscURBQVU7QUFNakMsU0FBUyxvQkFBa0M7QUFDekMsU0FBTyxNQUFNLFNBQVMsRUFBRSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztBQUNsRDtBQUVBLFNBQVMsaUJBQWlCLG9CQUFvQixZQUFZO0FBQ3hELFFBQU0sV0FBZ0IsU0FBUyxjQUEyQixjQUFjO0FBQ3hFLFFBQU0sZUFBZSxTQUFTLGNBQWMsWUFBWTtBQUV4RCxRQUFNLGVBQWUsSUFBSSxzRUFBMEIsQ0FBQztBQUVwRCxZQUFVLGlCQUFpQix1QkFBdUIsTUFBTTtBQUN0RCxVQUFNLE9BQU8sVUFBVSxRQUFRO0FBQy9CLFNBQUssa0JBQWtCLENBQUMsVUFBMEMsYUFBYSxnQkFBZ0IsS0FBSztBQUNwRyxTQUFLLHFCQUFxQixDQUFDLFVBQTJDLGFBQWEsbUJBQW1CLEtBQUs7QUFBQSxFQUM3RyxDQUFDO0FBR0QsV0FBUyxpQkFBaUI7QUFBQSxJQUN4QjtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUEsTUFDaEIsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLFFBQ0w7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQSxNQUNoQixPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsUUFDTDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLGdCQUFnQjtBQUFBLE1BQ2hCLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxRQUNMO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLGdCQUFnQjtBQUFBLE1BQ2hCLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxRQUNMO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUEsTUFDaEIsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsT0FBTztBQUFBLFFBQ0w7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxXQUFTLGFBQWEsTUFBTSxrQkFBa0I7QUFFOUMsZ0JBQWMsaUJBQWlCLFlBQVksQ0FBQyxRQUFhO0FBRXZELFVBQU0sS0FBYSxLQUFLLElBQUksRUFBRSxTQUFTLElBQUksS0FBSyxNQUFNLEtBQUssT0FBTyxJQUFJLEdBQUc7QUFFekUsWUFBUSxJQUFJLE9BQU8sT0FBTztBQUFBLE1BQ3hCLEtBQUs7QUFDSCxpQkFBUyxlQUFlLElBQUksSUFBSTtBQUNoQztBQUFBLE1BQ0YsS0FBSztBQUNILGlCQUFTLGVBQWUsSUFBSSxLQUFLO0FBQ2pDO0FBQUEsTUFDRixLQUFLO0FBQ0gsaUJBQVMsWUFBWTtBQUNyQjtBQUFBLE1BQ0Y7QUFDRTtBQUFBLElBQ0o7QUFBQSxFQUNGLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvY29tcG9uZW50cy9pZHMtY2FsZW5kYXIvZGVtb3MvZXhhbXBsZS1jdXN0b20udHM/OThjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXZlbnRzSlNPTiBmcm9tICcuLi8uLi8uLi9hc3NldHMvZGF0YS9ldmVudHMuanNvbic7XG5pbXBvcnQgSWRzQ2FsZW5kYXIgZnJvbSAnLi4vaWRzLWNhbGVuZGFyJztcbmltcG9ydCBJZHNDdXN0b21DYWxlbmRhckV2ZW50IGZyb20gJy4vY3VzdG9tLWNhbGVuZGFyLWV2ZW50JztcbmltcG9ydCBDdXN0b21DYWxlbmRhckV2ZW50TWFuYWdlciBmcm9tICcuL2N1c3RvbS1jYWxlbmRhci1ldmVudC1tYW5hZ2VyJztcblxuY29uc3QgZXZlbnRzVVJMOiBhbnkgPSBldmVudHNKU09OO1xuXG4vKipcbiAqIEZldGNoIGV2ZW50cy5qc29uXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gZXZlbnRzLmpzb24gY29udGVudFxuICovXG5mdW5jdGlvbiBnZXRDYWxlbmRhckV2ZW50cygpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2goZXZlbnRzVVJMKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjYWxlbmRhcjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxJZHNDYWxlbmRhcj4oJ2lkcy1jYWxlbmRhcicpO1xuICBjb25zdCBhZGRFdmVudE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWV2ZW50Jyk7XG5cbiAgY29uc3QgZXZlbnRNYW5hZ2VyID0gbmV3IEN1c3RvbUNhbGVuZGFyRXZlbnRNYW5hZ2VyKCk7XG5cbiAgY2FsZW5kYXI/LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWV2ZW50cmVuZGVyZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgdmlldyA9IGNhbGVuZGFyPy5nZXRWaWV3KCk7XG4gICAgdmlldy5nZW5lcmF0ZVlPZmZzZXQgPSAoZXZlbnQ6IElkc0N1c3RvbUNhbGVuZGFyRXZlbnQpOiBudW1iZXIgPT4gZXZlbnRNYW5hZ2VyLmdlbmVyYXRlWU9mZnNldChldmVudCk7XG4gICAgdmlldy5pc0V2ZW50T3ZlcmZsb3dpbmcgPSAoZXZlbnQ6IElkc0N1c3RvbUNhbGVuZGFyRXZlbnQpOiBib29sZWFuID0+IGV2ZW50TWFuYWdlci5pc0V2ZW50T3ZlcmZsb3dpbmcoZXZlbnQpO1xuICB9KTtcblxuICAvLyBTZXQgZXZlbnQgdHlwZXNcbiAgY2FsZW5kYXIuZXZlbnRUeXBlc0RhdGEgPSBbXG4gICAge1xuICAgICAgaWQ6ICdkdG8nLFxuICAgICAgbGFiZWw6ICdEaXNjcmV0aW9uYXJ5IFRpbWUgT2ZmJyxcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiAnRGlzY3JldGlvbmFyeVRpbWVPZmYnLFxuICAgICAgY29sb3I6ICdhenVyZScsXG4gICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgYXR0cnM6IFtcbiAgICAgICAgJ3N1YmplY3QnLFxuICAgICAgICAndGltZSdcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnYWRtaW4nLFxuICAgICAgbGFiZWw6ICdBZG1pbicsXG4gICAgICB0cmFuc2xhdGlvbktleTogJ0FkbWluaXN0cmF0aXZlTGVhdmUnLFxuICAgICAgY29sb3I6ICdhbWV0aHlzdCcsXG4gICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgYXR0cnM6IFtcbiAgICAgICAgJ3N1YmplY3QnLFxuICAgICAgICAndGltZSdcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAndGVhbScsXG4gICAgICBsYWJlbDogJ1RlYW0gRXZlbnQnLFxuICAgICAgdHJhbnNsYXRpb25LZXk6ICdUZWFtRXZlbnQnLFxuICAgICAgY29sb3I6ICdlbWVyYWxkJyxcbiAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICBhdHRyczogW1xuICAgICAgICAnc3ViamVjdCcsXG4gICAgICAgICd0aW1lJyxcbiAgICAgICAgJ2xvY2F0aW9uJ1xuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzaWNrJyxcbiAgICAgIGxhYmVsOiAnU2ljayBUaW1lJyxcbiAgICAgIHRyYW5zbGF0aW9uS2V5OiAnU2lja1RpbWUnLFxuICAgICAgY29sb3I6ICdhbWJlcicsXG4gICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgYXR0cnM6IFtcbiAgICAgICAgJ3N1YmplY3QnLFxuICAgICAgICAndGltZSdcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnaG9saWRheScsXG4gICAgICBsYWJlbDogJ0NvbXBhbnkgSG9saWRheScsXG4gICAgICB0cmFuc2xhdGlvbktleTogJ0NvbXBhbnlIb2xpZGF5JyxcbiAgICAgIGNvbG9yOiAnc2xhdGUnLFxuICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgYXR0cnM6IFtcbiAgICAgICAgJ3N1YmplY3QnXG4gICAgICBdXG4gICAgfVxuICBdO1xuICBjYWxlbmRhci5ldmVudHNEYXRhID0gYXdhaXQgZ2V0Q2FsZW5kYXJFdmVudHMoKTtcblxuICBhZGRFdmVudE1lbnU/LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGVkJywgKGV2dDogYW55KSA9PiB7XG4gICAgLy8gTW9jayB1c2VyIGRlZmluZWQgaWRcbiAgICBjb25zdCBpZDogc3RyaW5nID0gRGF0ZS5ub3coKS50b1N0cmluZygpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcblxuICAgIHN3aXRjaCAoZXZ0LmRldGFpbC52YWx1ZSkge1xuICAgICAgY2FzZSAnYWRkLW1vZGFsJzpcbiAgICAgICAgY2FsZW5kYXIuY3JlYXRlTmV3RXZlbnQoaWQsIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FkZC1hcGknOlxuICAgICAgICBjYWxlbmRhci5jcmVhdGVOZXdFdmVudChpZCwgZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NsZWFyJzpcbiAgICAgICAgY2FsZW5kYXIuY2xlYXJFdmVudHMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ids-calendar/demos/example-custom.ts\n");

/***/ }),

/***/ "./src/assets/data/events.json":
/*!*************************************!*\
  !*** ./src/assets/data/events.json ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "src/assets/data/events.json";

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
/******/ 		__webpack_require__.h = () => ("c2884dcdc9b3eff5a55f")
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
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
/******/ 			"ids-calendar-example-custom": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca"], () => (__webpack_require__("./src/components/ids-calendar/demos/example-custom.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
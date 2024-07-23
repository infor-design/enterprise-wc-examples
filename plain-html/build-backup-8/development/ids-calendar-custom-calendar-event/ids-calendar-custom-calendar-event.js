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

/***/ "./src/mixins/ids-locale-mixin/ids-locale-mixin.ts":
/*!*********************************************************!*\
  !*** ./src/mixins/ids-locale-mixin/ids-locale-mixin.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ids_locale_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _components_ids_locale_ids_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ids-locale/ids-locale */ \"./src/components/ids-locale/ids-locale.ts\");\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n\n\nconst IdsLocaleMixin = (superclass) => class extends superclass {\n  localeAPI = new _components_ids_locale_ids_locale__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  constructor(...args) {\n    super(...args);\n  }\n  connectedCallback() {\n    super.connectedCallback?.();\n    if (this.localeAPI.state.language !== \"en\")\n      this.setAttribute(\"language\", this.localeAPI.state.language);\n    if (this.localeAPI.state.localeName !== \"en-US\")\n      this.setAttribute(\"locale\", this.localeAPI.state.localeName);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LANGUAGE,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_1__.attributes.LOCALE\n    ];\n  }\n  /**\n   * Set the language for a component and wait for it to finish (async)\n   * @param {string} value The language string value\n   */\n  async setLanguage(value) {\n    await this.localeAPI.setLanguage(value);\n    if (this.nodeName === \"IDS-CONTAINER\")\n      this.localeAPI.setDocumentLangAttribute(this, value);\n    this.setAttribute(\"language\", value);\n    if (typeof this.onLanguageChange === \"function\" && this.previousLanguage !== value) {\n      this.onLanguageChange(this.localeAPI);\n    }\n    if (this.previousLanguage !== value) {\n      this.triggerEvent(\"languagechange\", this, { detail: { elem: this, language: this.language, locale: this.state?.locale } });\n    }\n    const previous = this.previousLanguage;\n    if (this.children.length > 0) {\n      this.#notifyChildrenLanguage(this.querySelectorAll(\"*\"), value, previous);\n    }\n    if (this.shadowRoot && this.shadowRoot?.children?.length > 0) {\n      this.#notifyChildrenLanguage(this.shadowRoot.querySelectorAll(\"*\"), value, previous);\n    }\n    this.localeAPI.updateDirectionAttribute(this, value);\n    this.setDirection();\n    this.previousLanguage = value;\n  }\n  /** Holds the last set language */\n  previousLanguage = \"en\";\n  /**\n   * Set the language for a component\n   * @param {string} value The language string value\n   */\n  set language(value) {\n    if (value && value !== this.language.name) {\n      this.setLanguage(value);\n    }\n  }\n  /**\n   * Get the language data keys and message for the current language\n   * @returns {object} The language data object\n   */\n  get language() {\n    return {\n      name: this.getAttribute(\"language\") || \"en\",\n      messages: this?.localeAPI?.language.messages\n    };\n  }\n  /**\n   * Set the setter on all children\n   * @param {NodeListOf<HTMLElement>} children the children to set\n   * @param {string} language The language string value\n   * @param {string} previousLanguage The previous language string value\n   */\n  #notifyChildrenLanguage(children, language, previousLanguage) {\n    children.forEach((element) => {\n      if (element.language && element.language.name === previousLanguage) {\n        element.language = language;\n      }\n    });\n  }\n  /** Holds the last set locale */\n  previousLocale = \"en-US\";\n  /**\n   * Set the locale for a component and wait for it to finish (async)\n   * @param {string} value The locale string value\n   */\n  async setLocale(value) {\n    if (value) {\n      await this.localeAPI.setLocale(value);\n      const lang = this.localeAPI.correctLanguage(value);\n      this.setAttribute(\"locale\", value);\n      if (this.nodeName === \"IDS-CONTAINER\")\n        this.localeAPI.setDocumentLangAttribute(this, lang);\n      await this.setLanguage(lang);\n      if (typeof this.onLocaleChange === \"function\" && this.previousLocale !== value) {\n        this.onLocaleChange(this.localeAPI);\n      }\n      if (this.previousLocale !== value) {\n        this.triggerEvent(\"localechange\", this, { detail: { elem: this, language: this.language, locale: this.state?.locale } });\n      }\n      if (this.children.length > 0) {\n        const previous = this.previousLocale;\n        requestAnimationFrame(() => {\n          this.#notifyChildrenLocale(this.querySelectorAll(\"*\"), value, previous);\n        });\n      }\n    }\n    this.previousLocale = value;\n  }\n  /**\n   * Set the locale for a component\n   * @param {string} value The locale string value\n   */\n  set locale(value) {\n    if (value && value !== this.locale && typeof value === \"string\") {\n      this.setLocale(value);\n    }\n  }\n  get locale() {\n    return this.localeAPI.state.localeName;\n  }\n  /**\n   * Set the setter on all children\n   * @param {NodeListOf<HTMLElement>} children the children to set\n   * @param {string} locale The locale string value\n   * @param {string} previousLocale The previous locale string value\n   */\n  #notifyChildrenLocale(children, locale, previousLocale) {\n    children.forEach((element) => {\n      if (element.locale && element.locale === previousLocale) {\n        element.locale = locale;\n      }\n    });\n  }\n  /**\n   * Set the direction attribute\n   */\n  setDirection() {\n    if (this.localeAPI?.isRTL()) {\n      this.setAttribute(\"dir\", \"rtl\");\n      this.container?.classList.add(\"rtl\");\n    } else {\n      this.removeAttribute(\"dir\");\n      this.container?.classList.remove(\"rtl\");\n    }\n  }\n};\nvar ids_locale_mixin_default = IdsLocaleMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy1sb2NhbGUtbWl4aW4vaWRzLWxvY2FsZS1taXhpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0I7QUFDSztBQWtCM0IsTUFBTSxpQkFBaUIsQ0FBd0IsZUFBa0IsY0FBYyxXQUEyQztBQUFBLEVBQ3hILFlBQVksSUFBSSx5RUFBUyxDQUFDO0FBQUEsRUFFMUIsZUFBZSxNQUFhO0FBQzFCLFVBQU0sR0FBRyxJQUFJO0FBQUEsRUFDZjtBQUFBLEVBRUEsb0JBQW9CO0FBQ2xCLFVBQU0sb0JBQW9CO0FBRzFCLFFBQUksS0FBSyxVQUFVLE1BQU0sYUFBYTtBQUFNLFdBQUssYUFBYSxZQUFZLEtBQUssVUFBVSxNQUFNLFFBQVE7QUFDdkcsUUFBSSxLQUFLLFVBQVUsTUFBTSxlQUFlO0FBQVMsV0FBSyxhQUFhLFVBQVUsS0FBSyxVQUFVLE1BQU0sVUFBVTtBQUFBLEVBQzlHO0FBQUEsRUFFQSxXQUFXLGFBQWE7QUFDdEIsV0FBTztBQUFBLE1BQ0wsR0FBSSxXQUFtQjtBQUFBLE1BQ3ZCLHFFQUFtQjtBQUFSLE1BQ1gsbUVBQWlCO0FBQU4sSUFDYjtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsTUFBTSxZQUFZLE9BQWU7QUFDL0IsVUFBTSxLQUFLLFVBQVUsWUFBWSxLQUFLO0FBRXRDLFFBQUksS0FBSyxhQUFhO0FBQWlCLFdBQUssVUFBVSx5QkFBeUIsTUFBTSxLQUFLO0FBQzFGLFNBQUssYUFBYSxZQUFZLEtBQUs7QUFFbkMsUUFBSSxPQUFPLEtBQUsscUJBQXFCLGNBQWMsS0FBSyxxQkFBcUIsT0FBTztBQUNsRixXQUFLLGlCQUFpQixLQUFLLFNBQVM7QUFBQSxJQUN0QztBQUNBLFFBQUksS0FBSyxxQkFBcUIsT0FBTztBQUNuQyxXQUFLLGFBQWEsa0JBQWtCLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLFVBQVUsS0FBSyxVQUFVLFFBQVEsS0FBSyxPQUFPLE9BQU8sRUFBRSxDQUFDO0FBQUEs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QUNGLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxlQUFlO0FBQ2IsUUFBSSxLQUFLLFdBQVcsTUFBTSxHQUFHO0FBQzNCLFdBQUssYUFBYSxPQUFPLEtBQUs7QUFDOUIsV0FBSyxXQUFXLFVBQVUsSUFBSSxLQUFLO0FBQUEsSUFDckMsT0FBTztBQUNMLFdBQUssZ0JBQWdCLEtBQUs7QUFDMUIsV0FBSyxXQUFXLFVBQVUsT0FBTyxLQUFLO0FBQUEsSUFDeEM7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFPLDJCQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRzLWVudGVycHJpc2Utd2MvLi9zcmMvbWl4aW5zL2lkcy1sb2NhbGUtbWl4aW4vaWRzLWxvY2FsZS1taXhpbi50cz9mNzFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJZHNMb2NhbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pZHMtbG9jYWxlL2lkcy1sb2NhbGUnO1xuaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gJy4uLy4uL2NvcmUvaWRzLWF0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW5JbnRlcmZhY2UgfSBmcm9tICcuLi9pZHMtZXZlbnRzLW1peGluL2lkcy1ldmVudHMtbWl4aW4nO1xuaW1wb3J0IHsgSWRzQ29uc3RydWN0b3IgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1lbGVtZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBMb2NhbGVNaXhpbkludGVyZmFjZSB7XG4gIGxvY2FsZTogc3RyaW5nO1xuICBsYW5ndWFnZTogc3RyaW5nO1xuICBzZXREaXJlY3Rpb24oKTogdm9pZDtcbiAgbG9jYWxlQVBJOiBJZHNMb2NhbGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxlSGFuZGxlciB7XG4gIG9uTG9jYWxlQ2hhbmdlPzogKGxvY2FsZT86IElkc0xvY2FsZSkgPT4gdm9pZDtcbiAgb25MYW5ndWFnZUNoYW5nZT86IChsb2NhbGU/OiBJZHNMb2NhbGUpID0+IHZvaWQ7XG59XG5cbnR5cGUgQ29uc3RyYWludHMgPSBJZHNDb25zdHJ1Y3RvcjxFdmVudHNNaXhpbkludGVyZmFjZSAmIExvY2FsZUhhbmRsZXI+O1xuXG5jb25zdCBJZHNMb2NhbGVNaXhpbiA9IDxUIGV4dGVuZHMgQ29uc3RyYWludHM+KHN1cGVyY2xhc3M6IFQpID0+IGNsYXNzIGV4dGVuZHMgc3VwZXJjbGFzcyBpbXBsZW1lbnRzIExvY2FsZU1peGluSW50ZXJmYWNlIHtcbiAgbG9jYWxlQVBJID0gbmV3IElkc0xvY2FsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaz8uKCk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBsYW5nIGFuZCBsb2NhbGVcbiAgICBpZiAodGhpcy5sb2NhbGVBUEkuc3RhdGUubGFuZ3VhZ2UgIT09ICdlbicpIHRoaXMuc2V0QXR0cmlidXRlKCdsYW5ndWFnZScsIHRoaXMubG9jYWxlQVBJLnN0YXRlLmxhbmd1YWdlKTtcbiAgICBpZiAodGhpcy5sb2NhbGVBUEkuc3RhdGUubG9jYWxlTmFtZSAhPT0gJ2VuLVVTJykgdGhpcy5zZXRBdHRyaWJ1dGUoJ2xvY2FsZScsIHRoaXMubG9jYWxlQVBJLnN0YXRlLmxvY2FsZU5hbWUpO1xuICB9XG5cbiAgc3RhdGljIGdldCBhdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAuLi4oc3VwZXJjbGFzcyBhcyBhbnkpLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzLkxBTkdVQUdFLFxuICAgICAgYXR0cmlidXRlcy5MT0NBTEVcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbGFuZ3VhZ2UgZm9yIGEgY29tcG9uZW50IGFuZCB3YWl0IGZvciBpdCB0byBmaW5pc2ggKGFzeW5jKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIGxhbmd1YWdlIHN0cmluZyB2YWx1ZVxuICAgKi9cbiAgYXN5bmMgc2V0TGFuZ3VhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIGF3YWl0IHRoaXMubG9jYWxlQVBJLnNldExhbmd1YWdlKHZhbHVlKTtcblxuICAgIGlmICh0aGlzLm5vZGVOYW1lID09PSAnSURTLUNPTlRBSU5FUicpIHRoaXMubG9jYWxlQVBJLnNldERvY3VtZW50TGFuZ0F0dHJpYnV0ZSh0aGlzLCB2YWx1ZSk7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2xhbmd1YWdlJywgdmFsdWUpO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9uTGFuZ3VhZ2VDaGFuZ2UgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5wcmV2aW91c0xhbmd1YWdlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5vbkxhbmd1YWdlQ2hhbmdlKHRoaXMubG9jYWxlQVBJKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJldmlvdXNMYW5ndWFnZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdsYW5ndWFnZWNoYW5nZScsIHRoaXMsIHsgZGV0YWlsOiB7IGVsZW06IHRoaXMsIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLCBsb2NhbGU6IHRoaXMuc3RhdGU/LmxvY2FsZSB9IH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5wcmV2aW91c0xhbmd1YWdlO1xuICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuI25vdGlmeUNoaWxkcmVuTGFuZ3VhZ2UodGhpcy5xdWVyeVNlbGVjdG9yQWxsKCcqJyksIHZhbHVlLCBwcmV2aW91cyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hhZG93Um9vdCAmJiB0aGlzLnNoYWRvd1Jvb3Q/LmNoaWxkcmVuPy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLiNub3RpZnlDaGlsZHJlbkxhbmd1YWdlKHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCcqJyksIHZhbHVlLCBwcmV2aW91cyk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2NhbGVBUEkudXBkYXRlRGlyZWN0aW9uQXR0cmlidXRlKHRoaXMsIHZhbHVlKTtcbiAgICB0aGlzLnNldERpcmVjdGlvbigpO1xuXG4gICAgdGhpcy5wcmV2aW91c0xhbmd1YWdlID0gdmFsdWU7XG4gIH1cblxuICAvKiogSG9sZHMgdGhlIGxhc3Qgc2V0IGxhbmd1YWdlICovXG4gIHByZXZpb3VzTGFuZ3VhZ2UgPSAnZW4nO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGxhbmd1YWdlIGZvciBhIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIGxhbmd1YWdlIHN0cmluZyB2YWx1ZVxuICAgKi9cbiAgc2V0IGxhbmd1YWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgIT09IHRoaXMubGFuZ3VhZ2UubmFtZSkge1xuICAgICAgdGhpcy5zZXRMYW5ndWFnZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGFuZ3VhZ2UgZGF0YSBrZXlzIGFuZCBtZXNzYWdlIGZvciB0aGUgY3VycmVudCBsYW5ndWFnZVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBUaGUgbGFuZ3VhZ2UgZGF0YSBvYmplY3RcbiAgICovXG4gIGdldCBsYW5ndWFnZSgpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLmdldEF0dHJpYnV0ZSgnbGFuZ3VhZ2UnKSB8fCAnZW4nLFxuICAgICAgbWVzc2FnZXM6IHRoaXM/LmxvY2FsZUFQST8ubGFuZ3VhZ2UubWVzc2FnZXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc2V0dGVyIG9uIGFsbCBjaGlsZHJlblxuICAgKiBAcGFyYW0ge05vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+fSBjaGlsZHJlbiB0aGUgY2hpbGRyZW4gdG8gc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgbGFuZ3VhZ2Ugc3RyaW5nIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcmV2aW91c0xhbmd1YWdlIFRoZSBwcmV2aW91cyBsYW5ndWFnZSBzdHJpbmcgdmFsdWVcbiAgICovXG4gICNub3RpZnlDaGlsZHJlbkxhbmd1YWdlKGNoaWxkcmVuOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiwgbGFuZ3VhZ2U6IHN0cmluZywgcHJldmlvdXNMYW5ndWFnZTogc3RyaW5nKSB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5sYW5ndWFnZSAmJiBlbGVtZW50Lmxhbmd1YWdlLm5hbWUgPT09IHByZXZpb3VzTGFuZ3VhZ2UpIHtcbiAgICAgICAgZWxlbWVudC5sYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEhvbGRzIHRoZSBsYXN0IHNldCBsb2NhbGUgKi9cbiAgcHJldmlvdXNMb2NhbGUgPSAnZW4tVVMnO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGxvY2FsZSBmb3IgYSBjb21wb25lbnQgYW5kIHdhaXQgZm9yIGl0IHRvIGZpbmlzaCAoYXN5bmMpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgbG9jYWxlIHN0cmluZyB2YWx1ZVxuICAgKi9cbiAgYXN5bmMgc2V0TG9jYWxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGF3YWl0IHRoaXMubG9jYWxlQVBJLnNldExvY2FsZSh2YWx1ZSk7XG4gICAgICBjb25zdCBsYW5nID0gdGhpcy5sb2NhbGVBUEkuY29ycmVjdExhbmd1YWdlKHZhbHVlKTtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdsb2NhbGUnLCB2YWx1ZSk7XG5cbiAgICAgIGlmICh0aGlzLm5vZGVOYW1lID09PSAnSURTLUNPTlRBSU5FUicpIHRoaXMubG9jYWxlQVBJLnNldERvY3VtZW50TGFuZ0F0dHJpYnV0ZSh0aGlzLCBsYW5nKTtcbiAgICAgIGF3YWl0IHRoaXMuc2V0TGFuZ3VhZ2UobGFuZyk7XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vbkxvY2FsZUNoYW5nZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLnByZXZpb3VzTG9jYWxlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLm9uTG9jYWxlQ2hhbmdlKHRoaXMubG9jYWxlQVBJKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByZXZpb3VzTG9jYWxlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnbG9jYWxlY2hhbmdlJywgdGhpcywgeyBkZXRhaWw6IHsgZWxlbTogdGhpcywgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2UsIGxvY2FsZTogdGhpcy5zdGF0ZT8ubG9jYWxlIH0gfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLnByZXZpb3VzTG9jYWxlO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuI25vdGlmeUNoaWxkcmVuTG9jYWxlKHRoaXMucXVlcnlTZWxlY3RvckFsbCgnKicpLCB2YWx1ZSwgcHJldmlvdXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcmV2aW91c0xvY2FsZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbG9jYWxlIGZvciBhIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIGxvY2FsZSBzdHJpbmcgdmFsdWVcbiAgICovXG4gIHNldCBsb2NhbGUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPT0gdGhpcy5sb2NhbGUgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5zZXRMb2NhbGUodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBsb2NhbGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVBUEkuc3RhdGUubG9jYWxlTmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHNldHRlciBvbiBhbGwgY2hpbGRyZW5cbiAgICogQHBhcmFtIHtOb2RlTGlzdE9mPEhUTUxFbGVtZW50Pn0gY2hpbGRyZW4gdGhlIGNoaWxkcmVuIHRvIHNldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlIFRoZSBsb2NhbGUgc3RyaW5nIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcmV2aW91c0xvY2FsZSBUaGUgcHJldmlvdXMgbG9jYWxlIHN0cmluZyB2YWx1ZVxuICAgKi9cbiAgI25vdGlmeUNoaWxkcmVuTG9jYWxlKGNoaWxkcmVuOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiwgbG9jYWxlOiBzdHJpbmcsIHByZXZpb3VzTG9jYWxlOiBzdHJpbmcpIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmxvY2FsZSAmJiBlbGVtZW50LmxvY2FsZSA9PT0gcHJldmlvdXNMb2NhbGUpIHtcbiAgICAgICAgZWxlbWVudC5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkaXJlY3Rpb24gYXR0cmlidXRlXG4gICAqL1xuICBzZXREaXJlY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMubG9jYWxlQVBJPy5pc1JUTCgpKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZGlyJywgJ3J0bCcpO1xuICAgICAgdGhpcy5jb250YWluZXI/LmNsYXNzTGlzdC5hZGQoJ3J0bCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZGlyJyk7XG4gICAgICB0aGlzLmNvbnRhaW5lcj8uY2xhc3NMaXN0LnJlbW92ZSgncnRsJyk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJZHNMb2NhbGVNaXhpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mixins/ids-locale-mixin/ids-locale-mixin.ts\n");

/***/ }),

/***/ "./src/mixins/ids-theme-mixin/ids-theme-mixin.ts":
/*!*******************************************************!*\
  !*** ./src/mixins/ids-theme-mixin/ids-theme-mixin.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"THEME_MODES\": () => (/* binding */ THEME_MODES),\n/* harmony export */   \"default\": () => (/* binding */ ids_theme_mixin_default)\n/* harmony export */ });\n/* harmony import */ var _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ids-attributes */ \"./src/core/ids-attributes.ts\");\n\nconst THEME_MODES = [\"light\", \"dark\", \"contrast\"];\nconst IdsThemeMixin = (superclass) => class extends superclass {\n  switcher = null;\n  constructor(...args) {\n    super(...args);\n  }\n  static get attributes() {\n    return [\n      ...superclass.attributes,\n      _core_ids_attributes__WEBPACK_IMPORTED_MODULE_0__.attributes.MODE\n    ];\n  }\n  connectedCallback() {\n    super.connectedCallback?.();\n    this.initThemeHandlers();\n  }\n  disconnectedCallback() {\n    this.offEvent(\"themechanged\");\n    this.switcher = null;\n    super.disconnectedCallback?.();\n  }\n  /**\n   * Init the mixin events and states\n   * @private\n   */\n  initThemeHandlers() {\n    this.switcher = document.querySelector(\"ids-theme-switcher\");\n    if (!this.switcher) {\n      return;\n    }\n    this.mode = this.switcher.mode;\n    this.onEvent(\"themechanged\", this.switcher, (e) => {\n      this.mode = e.detail.mode;\n    });\n  }\n  /**\n   * Set the mode of the current theme\n   * @param {string} value The mode value for example: light, dark, or contrast\n   */\n  set mode(value) {\n    if (!THEME_MODES.includes(value))\n      value = \"light\";\n    this.setAttribute(\"mode\", value);\n    this.container?.setAttribute(\"mode\", value);\n  }\n  /**\n   * Get the mode of the current theme\n   * @returns {string} light, dark, or contrast\n   */\n  get mode() {\n    return this.getAttribute(\"mode\") || \"light\";\n  }\n};\nvar ids_theme_mixin_default = IdsThemeMixin;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL2lkcy10aGVtZS1taXhpbi9pZHMtdGhlbWUtbWl4aW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJCO0FBT3BCLE1BQU0sY0FBYyxDQUFDLFNBQVMsUUFBUSxVQUFVO0FBT3ZELE1BQU0sZ0JBQWdCLENBQXdCLGVBQWtCLGNBQWMsV0FBVztBQUFBLEVBQ3ZGLFdBQW9DO0FBQUEsRUFFcEMsZUFBZSxNQUFhO0FBQzFCLFVBQU0sR0FBRyxJQUFJO0FBQUEsRUFDZjtBQUFBLEVBRUEsV0FBVyxhQUFhO0FBQ3RCLFdBQU87QUFBQSxNQUNMLEdBQUksV0FBbUI7QUFBQSxNQUN2QixpRUFBZTtBQUFKLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFFQSxvQkFBb0I7QUFDbEIsVUFBTSxvQkFBb0I7QUFDMUIsU0FBSyxrQkFBa0I7QUFBQSxFQUN6QjtBQUFBLEVBRUEsdUJBQXVCO0FBQ3JCLFNBQUssU0FBUyxjQUFjO0FBQzVCLFNBQUssV0FBVztBQUNoQixVQUFNLHVCQUF1QjtBQUFBLEVBQy9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLG9CQUFvQjtBQUNsQixTQUFLLFdBQVcsU0FBUyxjQUFnQyxvQkFBb0I7QUFDN0UsUUFBSSxDQUFDLEtBQUssVUFBVTtBQUNsQjtBQUFBLElBQ0Y7QUFFQSxTQUFLLE9BQU8sS0FBSyxTQUFTO0FBRTFCLFNBQUssUUFBUSxnQkFBZ0IsS0FBSyxVQUFVLENBQUMsTUFBbUI7QUFDOUQsV0FBSyxPQUFPLEVBQUUsT0FBTztBQUFBLElBQ3ZCLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLElBQUksS0FBSyxPQUFlO0FBQ3RCLFFBQUksQ0FBQyxZQUFZLFNBQVMsS0FBSztBQUFHLGNBQVE7QUFDMUMsU0FBSyxhQUFhLFFBQVEsS0FBSztBQUMvQixTQUFLLFdBQVcsYUFBYSxRQUFRLEtBQUs7QUFBQSxFQUM1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxJQUFJLE9BQWU7QUFDakIsV0FBTyxLQUFLLGFBQWEsTUFBTSxLQUFLO0FBQUEsRUFDdEM7QUFDRjtBQUVBLElBQU8sMEJBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZHMtZW50ZXJwcmlzZS13Yy8uL3NyYy9taXhpbnMvaWRzLXRoZW1lLW1peGluL2lkcy10aGVtZS1taXhpbi50cz8yZGIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0dHJpYnV0ZXMgfSBmcm9tICcuLi8uLi9jb3JlL2lkcy1hdHRyaWJ1dGVzJztcbmltcG9ydCB7IEV2ZW50c01peGluSW50ZXJmYWNlIH0gZnJvbSAnLi4vaWRzLWV2ZW50cy1taXhpbi9pZHMtZXZlbnRzLW1peGluJztcbmltcG9ydCB7IElkc0NvbnN0cnVjdG9yIH0gZnJvbSAnLi4vLi4vY29yZS9pZHMtZWxlbWVudCc7XG5pbXBvcnQgdHlwZSBJZHNUaGVtZVN3aXRjaGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaWRzLXRoZW1lLXN3aXRjaGVyL2lkcy10aGVtZS1zd2l0Y2hlcic7XG5cbnR5cGUgQ29uc3RyYWludHMgPSBJZHNDb25zdHJ1Y3RvcjxFdmVudHNNaXhpbkludGVyZmFjZT47XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9NT0RFUyA9IFsnbGlnaHQnLCAnZGFyaycsICdjb250cmFzdCddO1xuXG4vKipcbiAqIEEgbWl4aW4gdGhhdCBhZGRzIHRoZW1pbmcgZnVuY3Rpb25hbGl0eSB0byBjb21wb25lbnRzXG4gKiBAcGFyYW0ge2FueX0gc3VwZXJjbGFzcyBBY2NlcHRzIGEgc3VwZXJjbGFzcyBhbmQgY3JlYXRlcyBhIG5ldyBzdWJjbGFzcyBmcm9tIGl0XG4gKiBAcmV0dXJucyB7YW55fSBUaGUgZXh0ZW5kZWQgb2JqZWN0XG4gKi9cbmNvbnN0IElkc1RoZW1lTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cmFpbnRzPihzdXBlcmNsYXNzOiBUKSA9PiBjbGFzcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuICBzd2l0Y2hlcjogSWRzVGhlbWVTd2l0Y2hlciB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLihzdXBlcmNsYXNzIGFzIGFueSkuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMuTU9ERVxuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaz8uKCk7XG4gICAgdGhpcy5pbml0VGhlbWVIYW5kbGVycygpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5vZmZFdmVudCgndGhlbWVjaGFuZ2VkJyk7XG4gICAgdGhpcy5zd2l0Y2hlciA9IG51bGw7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2s/LigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgdGhlIG1peGluIGV2ZW50cyBhbmQgc3RhdGVzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpbml0VGhlbWVIYW5kbGVycygpIHtcbiAgICB0aGlzLnN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxJZHNUaGVtZVN3aXRjaGVyPignaWRzLXRoZW1lLXN3aXRjaGVyJyk7XG4gICAgaWYgKCF0aGlzLnN3aXRjaGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tb2RlID0gdGhpcy5zd2l0Y2hlci5tb2RlO1xuXG4gICAgdGhpcy5vbkV2ZW50KCd0aGVtZWNoYW5nZWQnLCB0aGlzLnN3aXRjaGVyLCAoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubW9kZSA9IGUuZGV0YWlsLm1vZGU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtb2RlIG9mIHRoZSBjdXJyZW50IHRoZW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgbW9kZSB2YWx1ZSBmb3IgZXhhbXBsZTogbGlnaHQsIGRhcmssIG9yIGNvbnRyYXN0XG4gICAqL1xuICBzZXQgbW9kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKCFUSEVNRV9NT0RFUy5pbmNsdWRlcyh2YWx1ZSkpIHZhbHVlID0gJ2xpZ2h0JztcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbW9kZScsIHZhbHVlKTtcbiAgICB0aGlzLmNvbnRhaW5lcj8uc2V0QXR0cmlidXRlKCdtb2RlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbW9kZSBvZiB0aGUgY3VycmVudCB0aGVtZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBsaWdodCwgZGFyaywgb3IgY29udHJhc3RcbiAgICovXG4gIGdldCBtb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdtb2RlJykgfHwgJ2xpZ2h0JztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSWRzVGhlbWVNaXhpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/mixins/ids-theme-mixin/ids-theme-mixin.ts\n");

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
/******/ 		__webpack_require__.h = () => ("216ac2806d0661883707")
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
/******/ 			"ids-calendar-custom-calendar-event": 0
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-calendar_demos_custom-calendar-event_ts"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=4300&pathname=%2Fws&logging=error&overlay=true&reconnect=10&hot=false&live-reload=true")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_webpack-dev-server_client_index_js_protocol_ws_3A_hostname_0_0_0_0_port_-ebf8ca","src_core_ids-attributes_ts-src_core_ids-decorators_ts-src_core_ids-element_ts","src_mixins_ids-events-mixin_ids-events-mixin_ts","src_components_ids-locale_ids-locale_ts","src_components_ids-calendar_ids-calendar-event_ts","src_components_ids-calendar_demos_custom-calendar-event_ts"], () => (__webpack_require__("./src/components/ids-calendar/demos/custom-calendar-event.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
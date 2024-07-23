import IdsElement from '../../core/ids-element';
import IdsButton from '../ids-button/ids-button';
declare const Base: {
    new (...args: any[]): {
        handledEvents: Map<any, any>;
        longPressOn: boolean;
        swipeOn: boolean;
        keyboardFocusOn: boolean;
        keyDownEndOn: boolean;
        hoverEndOn: boolean;
        isClick: boolean;
        timer?: import("../../utils/ids-timer-utils/ids-timer-utils").FrameRequestLoopHandler | null | undefined;
        slopedMouseLeaveTimer?: import("../../utils/ids-timer-utils/ids-timer-utils").FrameRequestLoopHandler | null | undefined;
        startX: number;
        startY: number;
        trackedX: number;
        trackedY: number;
        vetoableEventTypes: string[];
        disconnectedCallback(): void;
        onEvent(eventName: string, target: any, callback?: ((evt: any) => void) | undefined, options?: import("../../mixins/ids-events-mixin/ids-events-mixin").EventOptions | undefined): void;
        offEvent(eventName: string, target?: unknown, options?: import("../../mixins/ids-events-mixin/ids-events-mixin").EventOptions | undefined): void;
        triggerEvent(eventName: string, target: any, options?: CustomEventInit<unknown> | undefined): void;
        triggerVetoableEvent(eventType: string, data?: any): boolean;
        detachAllEvents(): void;
        detachEventsByName: (eventName: string) => void;
        "__#3@#addLongPressListener"(eventName: string, target: Element, options?: import("../../mixins/ids-events-mixin/ids-events-mixin").EventOptions | undefined): void;
        "__#3@#removeLongPressListener"(): void;
        "__#3@#addSwipeListener"(eventName: string, target: Element, options?: import("../../mixins/ids-events-mixin/ids-events-mixin").EventOptions | undefined): void;
        "__#3@#removeSwipeListener"(): void;
        "__#3@#addKeyboardFocusListener"(eventName: string, target: Element): void;
        "__#3@#removeKeyboardFocusListener"(): void;
        "__#3@#addHoverEndListener"(eventName: string, target: Element, options?: import("../../mixins/ids-events-mixin/ids-events-mixin").EventOptions | undefined): void;
        "__#3@#addSlopedMouseLeaveListener"(eventName: string, target: Element, options?: import("../../mixins/ids-events-mixin/ids-events-mixin").EventOptions | undefined): void;
        "__#3@#clearSlopedMouseLeaveTimer"(): void;
        "__#3@#removeSlopedMouseLeaveListener"(): void;
        "__#3@#addKeyDownEndListener"(target: HTMLElement, options?: Record<string, unknown> | undefined): void;
        clearTimer(): void;
        "__#3@#removeHoverEndListener"(): void;
        "__#3@#removeKeyDownEndListener"(): void;
        name?: string | undefined;
        state: Record<string, any>;
        cachedNonce: string;
        container?: HTMLElement | null | undefined;
        hasStyles: boolean;
        args?: {
            noShadowRoot?: boolean | undefined;
            noStyles?: boolean | undefined;
        } | undefined;
        connectedCallback(): void;
        "__#2@#addBaseName"(): void;
        attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
        render(force?: boolean | undefined): any;
        template(): string;
        readonly nonce: any;
        appendStyles(): void;
        "__#2@#appendHostCss"(): void;
        accessKey: string;
        readonly accessKeyLabel: string;
        autocapitalize: string;
        dir: string;
        draggable: boolean;
        hidden: boolean;
        inert: boolean;
        innerText: string;
        lang: string;
        readonly offsetHeight: number;
        readonly offsetLeft: number;
        readonly offsetParent: Element | null;
        readonly offsetTop: number;
        readonly offsetWidth: number;
        outerText: string;
        spellcheck: boolean;
        title: string;
        translate: boolean;
        attachInternals(): ElementInternals;
        click(): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void;
        removeEventListener<K_1 extends keyof HTMLElementEventMap>(type: K_1, listener: (this: HTMLElement, ev: HTMLElementEventMap[K_1]) => any, options?: boolean | EventListenerOptions | undefined): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions | undefined): void;
        readonly attributes: NamedNodeMap;
        readonly classList: DOMTokenList;
        className: string;
        readonly clientHeight: number;
        readonly clientLeft: number;
        readonly clientTop: number;
        readonly clientWidth: number;
        id: string;
        readonly localName: string;
        readonly namespaceURI: string | null;
        onfullscreenchange: ((this: Element, ev: Event) => any) | null;
        onfullscreenerror: ((this: Element, ev: Event) => any) | null;
        outerHTML: string;
        readonly ownerDocument: Document;
        readonly part: DOMTokenList;
        readonly prefix: string | null;
        readonly scrollHeight: number;
        scrollLeft: number;
        scrollTop: number;
        readonly scrollWidth: number;
        readonly shadowRoot: ShadowRoot | null;
        slot: string;
        readonly tagName: string;
        attachShadow(init: ShadowRootInit): ShadowRoot;
        closest<K_2 extends keyof HTMLElementTagNameMap>(selector: K_2): HTMLElementTagNameMap[K_2] | null;
        closest<K_3 extends keyof SVGElementTagNameMap>(selector: K_3): SVGElementTagNameMap[K_3] | null;
        closest<E extends Element = Element>(selectors: string): E | null;
        getAttribute(qualifiedName: string): string | null;
        getAttributeNS(namespace: string | null, localName: string): string | null;
        getAttributeNames(): string[];
        getAttributeNode(qualifiedName: string): Attr | null;
        getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
        getBoundingClientRect(): DOMRect;
        getClientRects(): DOMRectList;
        getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
        getElementsByTagName<K_4 extends keyof HTMLElementTagNameMap>(qualifiedName: K_4): HTMLCollectionOf<HTMLElementTagNameMap[K_4]>;
        getElementsByTagName<K_5 extends keyof SVGElementTagNameMap>(qualifiedName: K_5): HTMLCollectionOf<SVGElementTagNameMap[K_5]>;
        getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
        getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
        getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
        getElementsByTagNameNS(namespace: string | null, localName: string): HTMLCollectionOf<Element>;
        hasAttribute(qualifiedName: string): boolean;
        hasAttributeNS(namespace: string | null, localName: string): boolean;
        hasAttributes(): boolean;
        hasPointerCapture(pointerId: number): boolean;
        insertAdjacentElement(where: InsertPosition, element: Element): Element | null;
        insertAdjacentHTML(position: InsertPosition, text: string): void;
        insertAdjacentText(where: InsertPosition, data: string): void;
        matches(selectors: string): boolean;
        releasePointerCapture(pointerId: number): void;
        removeAttribute(qualifiedName: string): void;
        removeAttributeNS(namespace: string | null, localName: string): void;
        removeAttributeNode(attr: Attr): Attr;
        requestFullscreen(options?: FullscreenOptions | undefined): Promise<void>;
        requestPointerLock(): void;
        scroll(options?: ScrollToOptions | undefined): void;
        scroll(x: number, y: number): void;
        scrollBy(options?: ScrollToOptions | undefined): void;
        scrollBy(x: number, y: number): void;
        scrollIntoView(arg?: boolean | ScrollIntoViewOptions | undefined): void;
        scrollTo(options?: ScrollToOptions | undefined): void;
        scrollTo(x: number, y: number): void;
        setAttribute(qualifiedName: string, value: string): void;
        setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
        setAttributeNode(attr: Attr): Attr | null;
        setAttributeNodeNS(attr: Attr): Attr | null;
        setPointerCapture(pointerId: number): void;
        toggleAttribute(qualifiedName: string, force?: boolean | undefined): boolean;
        webkitMatchesSelector(selectors: string): boolean;
        readonly baseURI: string;
        readonly childNodes: NodeListOf<ChildNode>;
        readonly firstChild: ChildNode | null;
        readonly isConnected: boolean;
        readonly lastChild: ChildNode | null;
        readonly nextSibling: ChildNode | null;
        readonly nodeName: string;
        readonly nodeType: number;
        nodeValue: string | null;
        readonly parentElement: HTMLElement | null;
        readonly parentNode: ParentNode | null;
        readonly previousSibling: ChildNode | null;
        textContent: string | null;
        appendChild<T extends Node>(node: T): T;
        cloneNode(deep?: boolean | undefined): Node;
        compareDocumentPosition(other: Node): number;
        contains(other: Node | null): boolean;
        getRootNode(options?: GetRootNodeOptions | undefined): Node;
        hasChildNodes(): boolean;
        insertBefore<T_1 extends Node>(node: T_1, child: Node | null): T_1;
        isDefaultNamespace(namespace: string | null): boolean;
        isEqualNode(otherNode: Node | null): boolean;
        isSameNode(otherNode: Node | null): boolean;
        lookupNamespaceURI(prefix: string | null): string | null;
        lookupPrefix(namespace: string | null): string | null;
        normalize(): void;
        removeChild<T_2 extends Node>(child: T_2): T_2;
        replaceChild<T_3 extends Node>(node: Node, child: T_3): T_3;
        readonly ATTRIBUTE_NODE: number;
        readonly CDATA_SECTION_NODE: number;
        readonly COMMENT_NODE: number;
        readonly DOCUMENT_FRAGMENT_NODE: number;
        readonly DOCUMENT_NODE: number;
        readonly DOCUMENT_POSITION_CONTAINED_BY: number;
        readonly DOCUMENT_POSITION_CONTAINS: number;
        readonly DOCUMENT_POSITION_DISCONNECTED: number;
        readonly DOCUMENT_POSITION_FOLLOWING: number;
        readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
        readonly DOCUMENT_POSITION_PRECEDING: number;
        readonly DOCUMENT_TYPE_NODE: number;
        readonly ELEMENT_NODE: number;
        readonly ENTITY_NODE: number;
        readonly ENTITY_REFERENCE_NODE: number;
        readonly NOTATION_NODE: number;
        readonly PROCESSING_INSTRUCTION_NODE: number;
        readonly TEXT_NODE: number;
        dispatchEvent(event: Event): boolean;
        ariaAtomic: string | null;
        ariaAutoComplete: string | null;
        ariaBusy: string | null;
        ariaChecked: string | null;
        ariaColCount: string | null;
        ariaColIndex: string | null;
        ariaColIndexText: string | null;
        ariaColSpan: string | null;
        ariaCurrent: string | null;
        ariaDisabled: string | null;
        ariaExpanded: string | null;
        ariaHasPopup: string | null;
        ariaHidden: string | null;
        ariaInvalid: string | null;
        ariaKeyShortcuts: string | null;
        ariaLabel: string | null;
        ariaLevel: string | null;
        ariaLive: string | null;
        ariaModal: string | null;
        ariaMultiLine: string | null;
        ariaMultiSelectable: string | null;
        ariaOrientation: string | null;
        ariaPlaceholder: string | null;
        ariaPosInSet: string | null;
        ariaPressed: string | null;
        ariaReadOnly: string | null;
        ariaRequired: string | null;
        ariaRoleDescription: string | null;
        ariaRowCount: string | null;
        ariaRowIndex: string | null;
        ariaRowIndexText: string | null;
        ariaRowSpan: string | null;
        ariaSelected: string | null;
        ariaSetSize: string | null;
        ariaSort: string | null;
        ariaValueMax: string | null;
        ariaValueMin: string | null;
        ariaValueNow: string | null;
        ariaValueText: string | null;
        role: string | null;
        animate(keyframes: PropertyIndexedKeyframes | Keyframe[] | null, options?: number | KeyframeAnimationOptions | undefined): Animation;
        getAnimations(options?: GetAnimationsOptions | undefined): Animation[];
        after(...nodes: (string | Node)[]): void;
        before(...nodes: (string | Node)[]): void;
        remove(): void;
        replaceWith(...nodes: (string | Node)[]): void;
        innerHTML: string;
        readonly nextElementSibling: Element | null;
        readonly previousElementSibling: Element | null;
        readonly childElementCount: number;
        readonly children: HTMLCollection;
        readonly firstElementChild: Element | null;
        readonly lastElementChild: Element | null;
        append(...nodes: (string | Node)[]): void;
        prepend(...nodes: (string | Node)[]): void;
        querySelector<K_6 extends keyof HTMLElementTagNameMap>(selectors: K_6): HTMLElementTagNameMap[K_6] | null;
        querySelector<K_7 extends keyof SVGElementTagNameMap>(selectors: K_7): SVGElementTagNameMap[K_7] | null;
        querySelector<E_1 extends Element = Element>(selectors: string): E_1 | null;
        querySelectorAll<K_8 extends keyof HTMLElementTagNameMap>(selectors: K_8): NodeListOf<HTMLElementTagNameMap[K_8]>;
        querySelectorAll<K_9 extends keyof SVGElementTagNameMap>(selectors: K_9): NodeListOf<SVGElementTagNameMap[K_9]>;
        querySelectorAll<E_2 extends Element = Element>(selectors: string): NodeListOf<E_2>;
        replaceChildren(...nodes: (string | Node)[]): void;
        readonly assignedSlot: HTMLSlotElement | null;
        oncopy: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
        oncut: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
        onpaste: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
        readonly style: CSSStyleDeclaration;
        contentEditable: string;
        enterKeyHint: string;
        inputMode: string;
        readonly isContentEditable: boolean;
        onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
        onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
        onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
        onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
        onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
        onauxclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onbeforeinput: ((this: GlobalEventHandlers, ev: InputEvent) => any) | null;
        onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
        oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
        ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
        ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
        ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
        ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
        ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
        ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
        ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onerror: OnErrorEventHandler;
        onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
        onformdata: ((this: GlobalEventHandlers, ev: FormDataEvent) => any) | null;
        ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
        onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
        onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
        onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
        onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onpointercancel: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
        onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent<EventTarget>) => any) | null;
        onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
        onscroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onsecuritypolicyviolation: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
        onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onselect: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onselectionchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onselectstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onslotchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onsubmit: ((this: GlobalEventHandlers, ev: SubmitEvent) => any) | null;
        onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        ontouchcancel?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
        ontouchend?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
        ontouchmove?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
        ontouchstart?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
        ontransitioncancel: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
        ontransitionend: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
        ontransitionrun: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
        ontransitionstart: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
        onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onwebkitanimationend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onwebkitanimationiteration: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onwebkitanimationstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onwebkittransitionend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
        onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
        autofocus: boolean;
        readonly dataset: DOMStringMap;
        tabIndex: number;
        blur(): void;
        focus(options?: FocusOptions | undefined): void;
    };
    readonly attributes: any[];
} & typeof IdsElement;
/**
 * IDS Layout Grid Cell Component
 * @type {IdsLayoutGridCell}
 * @inherits IdsElement
 */
export default class IdsLayoutGridCell extends Base {
    #private;
    closeButton?: IdsButton;
    /**
     * Set the grid-cell align-content
     * @param {string | null} value The align-content [null, start, end, between, around, evenly]
     */
    set alignContent(value: string | null);
    /**
     * Get the grid align-content setting
     * @returns {string | null} The align-content [null, start, end, between, around, evenly]
     */
    get alignContent(): string | null;
    /**
     * Set col-end attribute
     * @param {string | null} value number value of ending column of the cell
     */
    set colEnd(value: string | null | any);
    /**
     * Get col-end attribute
     * @returns {string | null} number value of ending column of the cell
     */
    get colEnd(): string | null | any;
    /**
     * Set col-end-xs attribute
     * @param {string | null} value number value of ending column of the cell at the xs breakpoint
     */
    set colEndXs(value: string | null | any);
    /**
     * Get col-end-xs attribute
     * @returns {string | null} number value of ending column of the cell at the xs breakpoint
     */
    get colEndXs(): string | null | any;
    /**
     * Set col-end-sm attribute
     * @param {string | null} value number value of ending column of the cell at the sm breakpoint
     */
    set colEndSm(value: string | null | any);
    /**
     * Get col-end-sm attribute
     * @returns {string | null} number value of ending column of the cell at the sm breakpoint
     */
    get colEndSm(): string | null | any;
    /**
     * Set col-end-md attribute
     * @param {string | null} value number value of ending column of the cell at the md breakpoint
     */
    set colEndMd(value: string | null | any);
    /**
     * Get col-end-md attribute
     * @returns {string | null} number value of ending column of the cell at the md breakpoint
     */
    get colEndMd(): string | null | any;
    /**
     * Set col-end-lg attribute
     * @param {string | null} value number value of ending column of the cell at the lg breakpoint
     */
    set colEndLg(value: string | null | any);
    /**
     * Get col-end-lg attribute
     * @returns {string | null} number value of ending column of the cell at the lg breakpoint
     */
    get colEndLg(): string | null | any;
    /**
     * Set col-end-xl attribute
     * @param {string | null} value number value of ending column of the cell at the xl breakpoint
     */
    set colEndXl(value: string | null | any);
    /**
     * Get col-end-xl attribute
     * @returns {string | null} number value of ending column of the cell at the xl breakpoint
     */
    get colEndXl(): string | null | any;
    /**
     * Set col-end-xxl attribute
     * @param {string | null} value number value of ending column of the cell at the xxl breakpoint
     */
    set colEndXxl(value: string | null | any);
    /**
     * Get col-end-xxl attribute
     * @returns {string | null} number value of ending column of the cell at the xxl breakpoint
     */
    get colEndXxl(): string | null | any;
    /**
     * Set the col-span attribute
     * @param {string | null} value The number value for the columns to span in the grid
     */
    set colSpan(value: string | null | any);
    /**
     * Get col-span attribute
     * @returns {string | null} The number value for the columns to span in the grid
     */
    get colSpan(): string | null | any;
    /**
     * Set the col-span-xs attribute
     * @param {string | null} value The number value for the columns to span in the grid at the xs breakpoint
     */
    set colSpanXs(value: string | null | any);
    /**
     * Get col-span-xs attribute
     * @returns {string | null} The number value for the columns to span in the grid at the xs breakpoint
     */
    get colSpanXs(): string | null | any;
    /**
     * Set the col-span-sm attribute
     * @param {string | null} value The number value for the columns to span in the grid at the sm breakpoint
     */
    set colSpanSm(value: string | null | any);
    /**
     * Get col-span-sm attribute
     * @returns {string | null} The number value for the columns to span in the grid at the sm breakpoint
     */
    get colSpanSm(): string | null | any;
    /**
     * Set the col-span-md attribute
     * @param {string | null} value The number value for the columns to span in the grid at the md breakpoint
     */
    set colSpanMd(value: string | null | any);
    /**
     * Get col-span-md attribute
     * @returns {string | null} The number value for the columns to span in the grid at the md breakpoint
     */
    get colSpanMd(): string | null | any;
    /**
     * Set the col-span-lg attribute
     * @param {string | null} value The number value for the columns to span in the grid at the lg breakpoint
     */
    set colSpanLg(value: string | null | any);
    /**
     * Get col-span-lg attribute
     * @returns {string | null} The number value for the columns to span in the grid at the lg breakpoint
     */
    get colSpanLg(): string | null | any;
    /**
     * Set the col-span-xl attribute
     * @param {string | null} value The number value for the columns to span in the grid at the xl breakpoint
     */
    set colSpanXl(value: string | null | any);
    /**
     * Get col-span-xl attribute
     * @returns {string | null} The number value for the columns to span in the grid at the xl breakpoint
     */
    get colSpanXl(): string | null | any;
    /**
     * Set the col-span-xxl attribute
     * @param {string | null} value The number value for the columns to span in the grid at the xxl breakpoint
     */
    set colSpanXxl(value: string | null | any);
    /**
     * Get col-span-xxl attribute
     * @returns {string | null} The number value for the columns to span in the grid at the xxl breakpoint
     */
    get colSpanXxl(): string | null | any;
    /**
     * Set the col-start attribute
     * @param {string | null} value The number value for the starting column of the cell
     */
    set colStart(value: string | null | any);
    /**
     * Get the col-start attribute
     * @returns {string | null} The number value for the starting column of the cell
     */
    get colStart(): string | null | any;
    /**
     * Set the col-start-xs attribute
     * @param {string | null} value The number value for the starting column of the cell at the xs breakpoint
     */
    set colStartXs(value: string | null | any);
    /**
     * Get the col-start-xs attribute
     * @returns {string | null} The number value for the starting column of the cell at the xs breakpoint
     */
    get colStartXs(): string | null | any;
    /**
     * Set the col-start-sm attribute
     * @param {string | null} value The number value for the starting column of the cell at the sm breakpoint
     */
    set colStartSm(value: string | null | any);
    /**
     * Get the col-start-sm attribute
     * @returns {string | null} The number value for the starting column of the cell at the sm breakpoint
     */
    get colStartSm(): string | null | any;
    /**
     * Set the col-start-md attribute
     * @param {string | null} value The number value for the starting column of the cell at the md breakpoint
     */
    set colStartMd(value: string | null | any);
    /**
     * Get the col-start-md attribute
     * @returns {string | null} The number value for the starting column of the cell at the md breakpoint
     */
    get colStartMd(): string | null | any;
    /**
     * Set the col-start-lg attribute
     * @param {string | null} value The number value for the starting column of the cell at the lg breakpoint
     */
    set colStartLg(value: string | null | any);
    /**
     * Get the col-start-lg attribute
     * @returns {string | null} The number value for the starting column of the cell at the lg breakpoint
     */
    get colStartLg(): string | null | any;
    /**
     * Set the col-start-xl attribute
     * @param {string | null} value The number value for the starting column of the cell at the xl breakpoint
     */
    set colStartXl(value: string | null | any);
    /**
     * Get the col-start-xl attribute
     * @returns {string | null} The number value for the starting column of the cell at the xl breakpoint
     */
    get colStartXl(): string | null | any;
    /**
     * Set the col-start-xxl attribute
     * @param {string | null} value The number value for the starting column of the cell at the xxl breakpoint
     */
    set colStartXxl(value: string | null | any);
    /**
     * Get the col-start-xxl attribute
     * @returns {string | null} The number value for the starting column of the cell at the xxl breakpoint
     */
    get colStartXxl(): string | null | any;
    /**
     * Set the editable attribute
     * @param {string | null} value The value of the editable attribute
     */
    set editable(value: string | null | any);
    /**
     * Get the editable attribute
     * @returns {string | null} The value of the editable attribute
     */
    get editable(): string | null | any;
    /**
     * Set the value of the fill attribute
     * @param {string | null} value The boolean value of the fill attribute.
     */
    set fill(value: string | null | any);
    /**
     * Get the fill attribute
     * @returns {boolean | null} The boolean value of the fill attribute.
     */
    get fill(): boolean | null | any;
    /**
     * Set the height attribute
     * @param {string | null} value The value of the height attribute
     */
    set height(value: string | null);
    /**
     * Get the height attribute
     * @returns {boolean | null} The value of the height attribute
     */
    get height(): string | null;
    /**
     * Set the grid cell justify-content
     * @param {string | null} value The justify-content [null, start, end, between, around, evenly]
     */
    set justifyContent(value: string | null);
    /**
     * Get the grid justify setting
     * @returns {string | null} The justify [null, start, end, between, around, evenly]
     */
    get justifyContent(): string | null;
    /**
     * Set a minHeight attribute
     * @param {string | null} value The value of the minHeight attribute
     */
    set minHeight(value: string | null | any);
    /**
     * Get the minHeight attribute
     * @returns {string | null} The value of the height attribute
     */
    get minHeight(): string | null | any;
    /**
     * Set the order attribute
     * @param {string | null} value The value of the order attribute
     */
    set order(value: string | null | any);
    /**
     * Get the order attribute
     * @returns {string | null} The value of the order attribute
     */
    get order(): string | null | any;
    /**
     * Set the order-xs attribute
     * @param {string | null} value The value of the order-xs attribute
     */
    set orderXs(value: string | null | any);
    /**
     * Get the order-xs attribute
     * @returns {string | null} The value of the order-xs attribute
     */
    get orderXs(): string | null | any;
    /**
     * Set the order-sm attribute
     * @param {string | null} value The value of the order-sm attribute
     */
    set orderSm(value: string | null | any);
    /**
     * Get the order-sm attribute
     * @returns {string | null} The value of the order-sm attribute
     */
    get orderSm(): string | null | any;
    /**
     * Set the order-md attribute
     * @param {string | null} value The value of the order-md attribute
     */
    set orderMd(value: string | null | any);
    /**
     * Get the order-md attribute
     * @returns {string | null} The value of the order-md attribute
     */
    get orderMd(): string | null | any;
    /**
     * Set the order-lg attribute
     * @param {string | null} value The value of the order-lg attribute
     */
    set orderLg(value: string | null | any);
    /**
     * Get the order-lg attribute
     * @returns {string | null} The value of the order-lg attribute
     */
    get orderLg(): string | null | any;
    /**
     * Set the order-xl attribute
     * @param {string | null} value The value of the order-xl attribute
     */
    set orderXl(value: string | null | any);
    /**
     * Get the order-xl attribute
     * @returns {string | null} The value of the order-xl attribute
     */
    get orderXl(): string | null | any;
    /**
     * Set the order-xxl attribute
     * @param {string | null} value The value of the order-xxl attribute
     */
    set orderXxl(value: string | null | any);
    /**
     * Get the order-xxl attribute
     * @returns {string | null} The value of the order-xxl attribute
     */
    get orderXxl(): string | null | any;
    /**
     * Set the padding attribute
     * @param {string | null} value The value of the padding attribute
     */
    set padding(value: string | null);
    /**
     * Get the padding attribute
     * @returns {string | null} The number value that represents the padding of the grid
     */
    get padding(): string | any;
    /**
     * Set the row-span attribute
     * @param {string | null} value The value of the row-span attribute
     */
    set rowSpan(value: string | null | any);
    /**
     * Get the row-span attribute
     * @returns {string | null} The value of the row-span attribute
     */
    get rowSpan(): string | null | any;
    /**
     * Set the row-span-xs attribute
     * @param {string | null} value The value of the row-span-xs attribute
     */
    set rowSpanXs(value: string | null | any);
    /**
     * Get the row-span attribute
     * @returns {string | null} The value of the row-span-xs attribute
     */
    get rowSpanXs(): string | null | any;
    /**
     * Set the row-span-sm attribute
     * @param {string | null} value The value of the row-span-sm attribute
     */
    set rowSpanSm(value: string | null | any);
    /**
     * Get the row-span-sm attribute
     * @returns {string | null} The value of the row-span-sm attribute
     */
    get rowSpanSm(): string | null | any;
    /**
     * Set the row-span-md attribute
     * @param {string | null} value The value of the row-span-md attribute
     */
    set rowSpanMd(value: string | null | any);
    /**
     * Get the row-span-md attribute
     * @returns {string | null} The value of the row-span-md attribute
     */
    get rowSpanMd(): string | null | any;
    /**
     * Set the row-span-lg attribute
     * @param {string | null} value The value of the row-span-md attribute
     */
    set rowSpanLg(value: string | null | any);
    /**
     * Get the row-span-lg attribute
     * @returns {string | null} The value of the row-span-lg attribute
     */
    get rowSpanLg(): string | null | any;
    /**
     * Set the row-span-xl attribute
     * @param {string | null} value The value of the row-span-xl attribute
     */
    set rowSpanXl(value: string | null | any);
    /**
     * Get the row-span-xl attribute
     * @returns {string | null} The value of the row-span-xl attribute
     */
    get rowSpanXl(): string | null | any;
    /**
     * Set the row-span-xxl attribute
     * @param {string | null} value The value of the row-span-xxl attribute
     */
    set rowSpanXxl(value: string | null | any);
    /**
     * Get the row-span-xxl attribute
     * @returns {string | null} The value of the row-span-xxl attribute
     */
    get rowSpanXxl(): string | null | any;
    /**
     * Set the sticky attribute
     * @param {string | null} value The value of the sticky attribute
     */
    set sticky(value: string | null | any);
    /**
     * Get the sticky attribute
     * @returns {string | null} The value of the sticky attribute
     */
    get sticky(): string | null | any;
    /**
     * Set the sticky-position attribute
     * @param {string | null} value The value of the sticky-position attribute
     */
    set stickyPosition(value: string | null | any);
    /**
     * Get the sticky-position attribute
     * @returns {string | null} The value of the sticky-position attribute
     */
    get stickyPosition(): string | null | any;
    constructor();
    /**
     * Return the attributes we handle as getters/setters
     * @returns {Array} The attributes in an array
     */
    static get attributes(): any;
    connectedCallback(): void;
    private initialSettings;
    private setCloseButton;
    enableEditable(): void;
    disableEditable(): void;
    removeCell(e: any): void;
    template(): string;
}
export {};

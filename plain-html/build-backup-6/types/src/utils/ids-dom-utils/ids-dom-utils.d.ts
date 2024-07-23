/**
 * Returns the closest Shadow Root, if the provided node is contained by one.
 * @param {HTMLElement} node the node to check
 * @returns {ShadowRoot|undefined} the node.
 */
export declare function getClosestShadow(node: HTMLElement): ParentNode | undefined;
/**
 * Used specifically to detect the closest Shadow Root container OR `document`.
 * @param {HTMLElement} node the node to check
 * @returns {Node} the parent node
 */
export declare function getClosestContainerNode(node: any): ParentNode;
/**
 * Returns the closest Root Node parent of a provided element.  If the provided element is inside
 * a Shadow Root, that Shadow Root's host's parentNode is provided. `document` is used as a
 * fallback. This method allows for `querySelector()` in some nested Shadow Roots to work properly
 * @param {HTMLElement} node the node to check
 * @returns {Node} the parent node.
 */
export declare function getClosestRootNode(node: HTMLElement): any;
/**
 * Traverses Shadow DOM (into Light DOM, if necessary) to find the closest reference to a
 * parent node matching the provided selector.
 * @param {HTMLElement} node the node to check
 * @param {string} selector containing a CSS selector to be used for matching
 * @returns {Node|undefined} the node if found, otherwise undefined
 */
export declare function getClosest(node: any, selector: string): any;
/**
 * Traverses thru Shadow DOM if necessary to find parent node until matching the provided selector or until body.
 * @param {HTMLElement} node the node to check
 * @param {string|undefined} selector containing a CSS selector to be used for matching
 * @returns {Array<HTMLElement>} the list of parent elements
 */
export declare function parents(node: any, selector?: string): Array<HTMLElement>;
/**
 * Traverses down until matching the provided selector is found.
 * @param {HTMLElement} node the node to check
 * @param {string|undefined} selector containing a CSS selector to be used
 * @returns {Array<HTMLElement>} the list of parent elements
 */
export declare function nextUntil(node: any, selector: string): Array<HTMLElement>;
/**
 * Traverses up until matching selector is found (like jquery next)
 * @param {HTMLElement} node the node to start
 * @param {string|undefined} selector containing a CSS selector to be used
 * @returns {HTMLElement} the element
 */
export declare function next(node: any, selector: string): HTMLElement;
/**
 * Traverses down until matching selector is found (like jquery prev)
 * @param {HTMLElement} node the node to start
 * @param {string|undefined} selector containing a CSS selector to be used
 * @returns {HTMLElement} the element
 */
export declare function previous(node: any, selector: string): HTMLElement;
/**
 * Changes a CSS property with a transition,
 * @param {HTMLElement} el the element to act on
 * @param {string} property the CSS property with an attached transition to manipulate
 * @param {any} value the target CSS value
 * @returns {Promise} fulfulled when the CSS transition completes
 */
export declare function transitionToPromise(el: any, property: string, value: any): Promise<unknown>;
/**
 * Similar to `transitionToPromise`, but simply waits for the specified property's `transitionend`
 * event to complete (allows the user to change the property outside the promise)
 * @param {HTMLElement} el the element to act on
 * @param {string} property the CSS property used to qualify the correct transitionend event
 * @returns {Promise} fulfulled when the CSS transition completes
 */
export declare function waitForTransitionEnd(el: HTMLElement, property: string): Promise<unknown>;
/**
 * Similar to `transitionToPromise`, but simply waits for the specified property's `animationend` event to complete
 * @param {HTMLElement} el the element to act on
 * @param {string} animationName the CSS animation "keyframes" definition used to qualify the correct `animationend` event
 * @returns {Promise<boolean>} fulfulled when the CSS animation completes
 */
export declare function waitForAnimationEnd(el: HTMLElement, animationName: string): Promise<unknown>;
/**
 * Converts a DOMRect to a plain object, making it's properties editable.
 * @param {DOMRect} rect a readonly DOMRect measurement.
 * @returns {object} with all the same properties, but editable
 */
export declare function getEditableRect(rect: DOMRect): {
    bottom: number;
    left: number;
    right: number;
    top: number;
    height: number;
    width: number;
    x: number;
    y: number;
};
/**
 * Determines if the passed element is overflowing its bounds
 * @param {HTMLElement} el The element to check
 * @returns {boolean} true if overflowing, false otherwise
 */
export declare function checkOverflow(el?: HTMLElement | null): boolean;
/**
 * Check if given element has given css class
 * @param {HTMLElement} el the element to act on
 * @param {string} className The class name
 * @returns {boolean|undefined} true, if element has given css class
 */
export declare function hasClass(el: any, className: any): any;
/**
 * Quickly listens for and dispatches a `mousemove` event on the document, which
 * then gets the current coordinates of the mouse and determines which Light DOM element is beneath them.
 * @returns {Element | null} the element which the mouse is currently hovering
 */
export declare function getElementAtMouseLocation(): Element | null;
/**
 * Query selector all that goes throw all shadowRoots
 * @param {string} selector The query selector
 * @param {Element} rootNode The element to check
 * @returns {Array<Element>} true if overflowing, false otherwise
 */
export declare function querySelectorAllShadowRoot(selector: string, rootNode?: HTMLElement): Element[];
/**
 * Parses some value types and returns a valid `maxHeight` style property, if possible
 * @param {string | number | null} value a string/number value, or null
 * @returns {string | null} a pixel value representing a `maxHeight`, or null
 */
export declare function validMaxHeight(value: string | number | null): string | null;

export type IdsBaseConstructor = new (...args: any[]) => IdsElement;
export type IdsConstructor<T> = new (...args: any[]) => T & IdsElement;
/**
 * IDS Base Element
 */
export default class IdsElement extends HTMLElement {
    #private;
    args?: {
        noShadowRoot?: boolean | undefined;
        noStyles?: boolean | undefined;
    } | undefined;
    /** Component's name */
    name?: string;
    /** State object for current states */
    state: Record<string, any>;
    /** Nonce used for scripts, links */
    cachedNonce: string;
    /** Component's first child element */
    container?: HTMLElement | null;
    /** Styles Flag */
    hasStyles: boolean;
    constructor(args?: {
        noShadowRoot?: boolean | undefined;
        noStyles?: boolean | undefined;
    } | undefined);
    /** Run the template when a component Is inserted */
    connectedCallback(): void;
    /**
     * Handle Setting changes of the value has changed by calling the getter
     * in the extending class.
     * @param {string} name The property name
     * @param {string} oldValue The property old value
     * @param {string} newValue The property new value
     */
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    /**
     * Release events and cleanup, if implementing disconnectedCallback
     * in a component you can just call super.
     */
    disconnectedCallback(): void;
    /**
     * Handle Changes on Properties, this is part of the web component spec.
     * @type {Array}
     */
    static get observedAttributes(): string[];
    /**
     * @returns {Array<string>} this component's observable properties
     */
    static get attributes(): Array<string>;
    /**
     * Render the component using the defined template.
     * @param {string} force force to (re)render the component
     * @returns {object} The object for chaining.
     */
    render(force?: boolean): this;
    /**
     * @returns {string} containing this component's HTML Template
     */
    template(): string;
    /**
     * @returns {string} gets the nonce from the meta tag
     */
    get nonce(): any;
    /**
     * Append Styles if present
     * @private
     */
    appendStyles(): void;
}

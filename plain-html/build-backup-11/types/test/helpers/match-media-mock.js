"use strict";
/**
 * Mocks window.matchMedia to use within our Jest environment
 *
 * @see https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
 */
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});
Object.defineProperty(window, 'MediaQueryListEvent', {
    writable: true,
    value: jest.fn().mockImplementation((type, opts) => class extends Event {
        constructor() {
            super(type, opts);
            this.matches = opts.matches;
            this.media = opts.media;
        }
        matches;
        media;
    })
});
//# sourceMappingURL=match-media-mock.js.map
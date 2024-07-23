export type FrameRequestLoopHandler = {
    value?: number;
};
/**
 * Behaves similarly to `setInterval`, using `requestAnimationFrame()` where possible for better performance
 * @param {FrameRequestCallback} fn The callback function
 * @param {number} interval The delay in milliseconds
 * @returns {number} loop handle
 */
export declare function requestAnimationInterval(fn: FrameRequestCallback, interval?: number): FrameRequestLoopHandler;
/**
 * Behaves similarly to `clearInterval`, using `cancelAnimationFrame()` where possible for better performance
 * @param {FrameRequestLoopHandler} handle The callback function
 */
export declare function clearAnimationInterval(handle: FrameRequestLoopHandler): void;
/**
 * Behaves similarly to `setTimeout`, using `requestAnimationFrame()` where possible for better performance
 * @param {FrameRequestCallback} fn The callback function
 * @param {number} timeout The timeout delay in milliseconds
 * @returns {number} loop handle
 */
export declare function requestAnimationTimeout(fn: FrameRequestCallback, timeout?: number): FrameRequestLoopHandler;
/**
 * Behaves similarly to `clearTimeout`, using `cancelAnimationFrame()` where possible for better performance
 * @param {FrameRequestLoopHandler} handle The callback function
 */
export declare function clearAnimationTimeout(handle: FrameRequestLoopHandler): void;
/**
 * Fakes a "timeout" using a CSS transition on an invisible element
 * @param {number} timeout the transition duration in ms
 * @returns {Promise<void>} resolved when the CSS transition completes
 */
export declare const cssTransitionTimeout: (timeout: number) => Promise<void>;

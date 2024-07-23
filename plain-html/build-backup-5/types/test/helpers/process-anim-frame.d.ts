/**
 * waits for a cycle of requestAnimationFrame running in browser
 * before continuing in an async function
 * @returns {Promise} promise resolving when anim frame is completed
 */
declare const processAnimFrame: () => Promise<unknown>;
export default processAnimFrame;

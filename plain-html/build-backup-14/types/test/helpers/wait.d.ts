/**
 * wrapper representing a timeout in a promise for making
 * timeouts a little more intuitive in async fns
 * @param {*} ms time in miliseconds
 * @returns {Promise} promise resolving after miliseconds specified
 */
declare const wait: (ms: any) => Promise<unknown>;
export default wait;

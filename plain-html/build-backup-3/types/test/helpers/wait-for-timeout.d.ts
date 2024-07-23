/**
 * Wait for an assertion to stop failing with an optional timeout;
 * considers some quirks with jest fake timers.
 * usage:
 * await waitFor(() => <string>selector)
 * await waitFor(() => expect(condition).[jestExpr e.g. "toNotEqual"/"toEqual"/etc]())
 * @param {Function} selectorOrAssertionCb method which returns a CSS selector to check for
 * the presence of, or an assertion for jest
 * @param {object} options document these options
 * @param {any} options.container container to query
 *  (also runs on outermost container?.shadowRoot if possible as well)
 * @param {number} options.timeout time to wait before timing out
 * @param {number} options.interval interval between refreshing check
 * @param {Function} options.onTimeout timeout callback which accepts an error called
 * @param {object} options.mutationObserverOptions options passed to the mutation observer which
 * we're querying the container on for updates
 * @param {object} options.hidden a flag which, if specified, inverts the check for presence of
 * and instead waits for a selector to be hidden (if the first param is a query string).
 * Note that it uses the term "hidden" to possibly be isomorphic with Puppeteer in the future,
 * but does not look for the CSS "hidden" flag itself.
 * @returns {Promise} promise which waits for given callback to return true
 */
export default function waitForTimeout(selectorOrAssertionCb: any, { container, timeout, interval, onTimeout, mutationObserverOptions, hidden }?: any): Promise<any>;

/**
 * Handle Attaching Array / Object Data to Components
 * Features (now and future):
 *  - data
 *  - sort
 *  - filter
 *  - read/map/loop
 *  - primaryKey
 *  - retrieval
 *  - CRUD
 *  - paging (pageSize, serverSide, cache)
 *  - aggregates / group by
 *  - events (requestStart, requestEnd, change, error)
 *  - sync (sync back original array)
 */
declare class IdsDataSource {
    #private;
    /**
     * Return all the currently used data, without paging or filter
     * @returns {Array | null} All the currently used data
     */
    get allData(): any;
    /**
     * Sets the data array on the data source object
     * @param {Array | null} value The array to attach
     */
    set data(value: Array<Record<string, any>>);
    /**
     * Return the currently used data in its current state
     * @returns {Array | null} The attached array of data in its current state
     */
    get data(): Array<Record<string, any>>;
    get currentData(): Array<Record<string, any>>;
    set currentData(value: Array<Record<string, any>>);
    get originalData(): Record<string, any>[];
    get flatten(): boolean;
    set flatten(value: boolean);
    get filtered(): boolean;
    set filtered(value: boolean);
    /**
     * Get the total number of items in data
     * @returns {number} - the current page-total
     */
    get total(): any;
    /**
     * Override the total number of items in data
     * @param {number} value - the new page-total
     */
    set total(value: any);
    /**
     * Set the current page-number
     * @param {number} value - new the page-number
     */
    set pageNumber(value: number);
    /**
     * Get the curret page-number
     * @returns {number} - the current page-number
     */
    get pageNumber(): number;
    /**
     * Set the current page-size
     * @param {number} value - new the page-size
     */
    set pageSize(value: any);
    /**
     * Get the current page-size
     * @returns {number} - the current page-size
     */
    get pageSize(): any;
    /**
     * @param {number} pageNumber - a page number to start with
     * @param {number} pageSize - number of items to return
     * @returns {Array} the paginated data
     */
    paginate(pageNumber?: number, pageSize?: number): any;
    /**
     * Executes a provided function once for each array element in the current data
     * @param {Function} fn An optional function to iterate the array
     */
    forEach(fn: any): void;
    /**
     * Sort the dataset
     * @param {string} field The dataset field
     * @param {boolean} reverse Sort ascending or descending
     */
    sort(field: string, reverse: boolean): void;
    /**
     * An overridable array sort function
     * @param {string} field The dataset field
     * @param {any} ascending Sort ascending or descending
     * @returns {object} The sorted dataset
     */
    sortFunction(field: string, ascending: any): (a: any, b: any) => any;
    /**
     * Filter current data with given callback
     * will reset filter data, if given callback not found
     * @param {Function} filterFunction User filter function
     * @returns {void}
     */
    filter(filterFunction: any): void;
}
export default IdsDataSource;

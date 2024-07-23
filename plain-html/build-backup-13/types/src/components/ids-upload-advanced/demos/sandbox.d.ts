declare const useSend = 1;
/**
 * Get random integer
 * @param {number} min The file
 * @param {number} max The file to check
 * @returns {number} Calcutated random integer
 */
declare function randomInteger(min: number, max: number): number;
/**
 * Dummy send method, for demo purposes only
 * This method use dummy logic to loop interval and
 * does NOT use `formData` param and no files get to send anywhere
 * @param {object} formData Contains the file data.
 * @param {object} uiElem The ui element
 * @returns {void}
 */
declare function uploadFileDummy(formData: any, uiElem: any): void;
/**
 * Send files to Demo App server, files will remove after one minute.
 * In Chrome network tab, simulate a slow internet connection for testing
 * @param {object} formData Contains the file data.
 * @param {object} uiElem The ui element
 * @returns {void}
 */
declare function uploadFile(formData: any, uiElem: any): void;

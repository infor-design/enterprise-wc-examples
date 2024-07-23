/**
 * Shared in between upload advanced.
 * @private
 * @returns {void}
 */
declare const IdsUploadAdvancedShared: {
    DEFAULTS: {
        autoStart: boolean;
        paramName: string;
        icon: string;
        maxFileSize: number;
        maxFiles: number;
        maxFilesInProcess: number;
        method: string;
        showBrowseLink: boolean;
        textBtnCancel: string;
        textBtnCancelAll: string;
        textBtnCloseError: string;
        textBtnRemove: string;
        textBtnStart: string;
        textBtnStartAll: string;
        textDroparea: string;
        textDropareaWithBrowse: string;
        textDropareaWithBrowseLink: string;
        textProgressLabel: string;
        errorMaxFiles: string;
        errorMaxFilesInProcess: string;
        errorAcceptFileType: string;
        errorMaxFileSize: string;
        errorUrl: string;
        errorXhrHeaders: string;
        xhrHeaders: string;
    };
    ERRORS: {
        errorMaxFiles: string;
        errorMaxFilesInProcess: string;
        errorAcceptFileType: string;
        errorMaxFileSize: string;
        errorUrl: string;
        errorXhrHeaders: string;
    };
    STATUS: {
        notStarted: string;
        inProcess: string;
        aborted: string;
        errored: string;
        completed: string;
    };
    /**
     * Formats the file size to human readable.
     * @private
     * @param {number} bytes The size value in bytes.
     * @param {number} decimals The decimal point.
     * @returns {string} formated to use in ui.
     */
    formatBytes(bytes: number, decimals?: number): string;
    /**
     * Get the value for given slot.
     * @private
     * @param {object} shadowRoot The shadow root.
     * @param {string} slotName The slot name.
     * @returns {string} The slot val.
     */
    slotVal(shadowRoot: any, slotName: string): any;
};
export default IdsUploadAdvancedShared;

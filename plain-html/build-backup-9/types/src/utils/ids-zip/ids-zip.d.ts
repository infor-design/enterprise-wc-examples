export declare class IdsZip {
    private root;
    private entries;
    private bytesWritten;
    private dataArray;
    /**
     * Add a zip entry
     * @param {string} name file name
     * @param {string} data string data
     */
    file(name: string, data: string): void;
    /**
     * Creates Zip file containing all entries
     * @param {string} mimeType mime type
     * @returns {Blob} Blob of zip file
     */
    zip(mimeType: string): Blob;
    /**
     * Create folder zip entry
     * @param {string} name folder name
     * @returns {ZipEntry} folder zip entry
     */
    private addFolderEntry;
    /**
     * Creates zip entry
     * @param {string} name file name
     * @param {string} data content data
     * @param {boolean} isDir true if entry is a folder
     */
    private addEntry;
    /**
     * Checks if path is nested in folders
     * @param {string} path path name
     * @returns {string} parent folder
     */
    private isNested;
    /**
     * Process all zip entries into a Blob
     * @param {Array<ZipEntry>} entries array of zip entries
     * @param {string} mimeType mime type
     * @returns {Blob} Blob of zip file
     */
    private createZipFile;
    /**
     * Procses zip file entry and break into separate records
     * @param {ZipEntry} entry zip entry
     * @param {number} entryOffset next starting position for entry
     * @returns {Record<string, any>} zip entry parts
     */
    private processEntry;
    /**
     * Prepares End of Central Directory record to end zip package
     * @param {Array<string>} entryDirs dir zip entries
     */
    private closeZipFile;
    /**
     * Appends and transforms data to data array
     * Also tracks current size of all entries
     * @param {any} data string or Uint8Array
     */
    private writeData;
    /**
     * Transforms string data into Uint8Array
     * @param {string | Uint8Array} data data
     * @returns {Uint8Array} encoded data
     */
    private transform;
    /**
     * Flattens data array collection
     * @param {Array<Uint8Array>} dataArray data array of all zip entries
     * @returns {Uint8Array} flattend dataArray
     */
    private concat;
    /**
     * Create partial header information shared between
     * Local and Central Directory file header
     * @see {@link https://docs.fileformat.com/compression/zip/#local-file-header}
     * @see {@link https://docs.fileformat.com/compression/zip/#central-directory-file-header}
     * @param {ZipEntry} entry zip entry
     * @returns {string} header represented in hex strings
     */
    private generateHeaderPartial;
    /**
     * Create Locale File Header string
     * @see {@link https://docs.fileformat.com/compression/zip/#local-file-header}
     * @param {string} header header partial
     * @param {ZipEntry} entry zip entry
     * @returns {string} Locale File Header string
     */
    private generateLocalFileHeader;
    /**
     * Create Central Directory File Header string
     * @see {@link https://docs.fileformat.com/compression/zip/#central-directory-file-header}
     * @param {ZipEntry} entry zip entry
     * @param {string} header header partial
     * @param {number} offset entry starting position
     * @returns {string} Central Directory File Header string
     */
    private generateCentralDirectoryFileHeader;
    /**
     * Create End of Central Directory record
     * @see {@link https://docs.fileformat.com/compression/zip/#end-of-central-directory-record}
     * @param {number} entriesCount number of zip entries
     * @param {number} centralDirSize length of central directory record
     * @param {number} offset starting position for EOCD
     * @returns {string} End of Central Directory string
     */
    private generateEndOfCentralDirectory;
    /**
     * Convert decimal value into a padded 8 bit hex strings
     * Returns hex string in little-endian order
     * @param {number} dec the number to convert.
     * @param {number} bytes the number of bytes to generate.
     * @returns {string} the result.
     */
    private decToHex;
}

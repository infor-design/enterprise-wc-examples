export declare class ZipEntry {
    name: string;
    dir: boolean;
    date: Date;
    data: string | Uint8Array;
    compressedSize: number;
    uncompressedSize: number;
    compression: string;
    crc32: number;
    comment: string;
    constructor(name: string, data: any, isDir: boolean);
    /**
     * Processes file data and calculates size and checksum
     * @returns {Uint8Array} data converted to Uin8Array
     */
    processData(): Uint8Array;
    /**
     * Encode data string
     * @param {string} str string to convert
     * @returns {Uint8Array} buffer
     */
    private encodeData;
    private forceTrailingSlash;
    /**
     * Compute the crc32 of a buffer
     * @param {number} crc the starting value of the crc.
     * @param {any} buf the buffer to use.
     * @param {number} len the length of the buffer.
     * @param {number} pos the starting position for the crc32 computation.
     * @returns {number} the computed crc32
     */
    private calcCrc32;
}

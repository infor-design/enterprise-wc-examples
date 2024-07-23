/**
 * Provides a global way to display
 */
declare class IdsModalZCounter {
    zCounter: number;
    constructor();
    increment(): number;
    decrement(): number;
}
declare const zCounter: IdsModalZCounter;
export default zCounter;

/**
 * mocks ResizeObserver to use within our Jest environment
 */
declare class ResizeObserver {
    observe(): void;
    unobserve(): void;
    disconnect(): void;
}
export default ResizeObserver;

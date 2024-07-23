/**
 * mocks IntersectionObserver to use within our Jest environment
 */
declare class IntersectionObserver {
    observe(): void;
    unobserve(): void;
    disconnect(): void;
}
export default IntersectionObserver;

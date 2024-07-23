/**
 * simulate a 'mousedown' followed by 'mouseup' with optional time delay
 * (considers a marginal extra for natural callback/anim frame cycle between
 * events)
 * @param {HTMLElement} element increment or decrement button
 */
export default function simulateMouseDownEvents({ element, buttons, mouseDownTime }: any): Promise<void>;

import type { IdsPopupXYSwitchResult } from '../ids-popup/ids-popup-attributes';
/**
 * Runs on the Picker Popup's `onXYSwitch` callback, and makes minor
 * corrections to IdsPopup placement to account for IdsInput/IdsTriggerField labels,
 * which aren't symmetrical for placement purposes.
 * @param {IdsPopupXYSwitchResult} results contains settings related to the x/y adjustment.
 * @returns {IdsPopupXYSwitchResult} provides further modifications.
 */
export declare const onPickerPopupXYSwitch: (results: IdsPopupXYSwitchResult) => IdsPopupXYSwitchResult;

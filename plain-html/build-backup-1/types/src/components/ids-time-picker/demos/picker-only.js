import '../ids-time-picker-popup';
import '../../ids-button/ids-button';
import '../../ids-modal-button/ids-modal-button';
import '../../ids-trigger-field/ids-trigger-field';
import '../../ids-trigger-field/ids-trigger-button';
const fieldDefs = [
    {
        id: 'time-picker-current-time-field',
        format: 'hh:mm a',
        useCurrentTime: 'time'
    },
    {
        id: 'time-picker-all-dropdowns-field',
        format: 'hh:mm:ss a',
        minuteInterval: '15',
        secondInterval: '10'
    },
    {
        id: 'time-picker-24-field',
        format: 'HH:mm'
    }
];
document.addEventListener('DOMContentLoaded', () => {
    const demoIdsContainer = document.querySelector('ids-container');
    const triggerFieldContainer = document.querySelector('#trigger-field-container');
    const getFieldIdFromBtnId = (btnEl) => btnEl.getAttribute('id')?.replace('-button', '-field') || '';
    // Updates an existing IdsTimePickerPopup
    const updatePopup = (popupEl, data) => {
        if (!popupEl || !data)
            return;
        const booleanProps = [];
        const otherProps = ['format', 'minuteInterval', 'useCurrentTime', 'secondInterval'];
        booleanProps.forEach((prop) => {
            if (data[prop])
                popupEl[prop] = data[prop];
            else
                popupEl[prop] = false;
        });
        otherProps.forEach((prop) => {
            if (data[prop])
                popupEl[prop] = data[prop];
            else
                popupEl[prop] = null;
        });
    };
    // Creates a new IdsTimePickerPopup
    const createPopup = (fieldId, btnId, data) => {
        const pickerHTML = `<ids-time-picker-popup
          format="${data.format}"
          target="#${fieldId}"
          trigger-elem="#${btnId}"
          trigger-type="custom"
          ${data.useCurrentTime ? 'use-current-time="time"' : ''}></ids-time-picker-popup>`;
        demoIdsContainer.insertAdjacentHTML('beforeend', pickerHTML);
        const picker = document.querySelector('ids-time-picker-popup');
        picker.align = 'left, top';
        picker.arrow = 'bottom';
        // Fix onOutsideClick to consider clicking on trigger buttons
        picker.onOutsideClick = (e) => {
            const target = e.target;
            if (target && target.tagName !== 'IDS-TRIGGER-BUTTON' && !picker.contains(target)) {
                picker.hide();
            }
        };
        return picker;
    };
    // Assigns the correct properties/attributes to the standalone picker that correctly
    // binds it to each trigger field
    const configurePopup = (btnEl) => {
        const btnId = btnEl.getAttribute('id');
        const fieldId = btnId.replace('-button', '-field');
        const field = document.querySelector(`#${fieldId}`);
        const data = fieldDefs.find((entry) => entry.id === fieldId);
        let picker = document.querySelector('ids-time-picker-popup');
        let currentTarget;
        if (data) {
            if (picker) {
                if (picker.popup) {
                    picker.popup.align = 'left, top';
                    picker.popup.arrow = 'bottom';
                    picker.popup.arrowTarget = `#${btnId}`;
                }
                currentTarget = picker.target;
                picker.target = `#${fieldId}`;
                picker.triggerElem = `#${btnId}`;
                if (field.value)
                    picker.value = field.value;
                updatePopup(picker, data);
            }
            else {
                picker = createPopup(fieldId, btnId, data);
                if (field.value)
                    picker.value = field.value;
                // Date Picker Popup's `hide` event can cause the field to become focused
                picker.addEventListener('hide', (e) => {
                    e.stopPropagation();
                    if (e.detail.doFocus) {
                        picker.target?.focus();
                    }
                });
                // Date Picker Popup's `show` event will be used to capture the value from
                // its assigned trigger field
                picker.addEventListener('show', (e) => {
                    e.stopPropagation();
                    picker.value = picker.target?.value;
                });
            }
            if (picker.popup) {
                picker.popup.arrow = 'bottom';
                picker.popup.arrowTarget = `#${btnId}`;
                picker.popup.align = 'left, top';
                if (!picker.popup.visible) {
                    picker.show();
                }
                else if (picker.target !== currentTarget) {
                    picker.popup.place();
                    picker.popup.placeArrow();
                }
                else {
                    picker.hide();
                }
            }
        }
    };
    // Clicking the trigger button re-assigns the Popup bindings
    triggerFieldContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (target) {
            if (target.tagName === 'IDS-TRIGGER-BUTTON') {
                configurePopup(target);
            }
        }
    });
    // Displays the selected day when picked from the Date Picker Popup's MonthView
    // const btn = document.querySelector<any>('#composed-date-picker-button')!;
    triggerFieldContainer.addEventListener('timeselected', (e) => {
        const target = e.target; // trigger field
        if (target) {
            const picker = document.querySelector('ids-time-picker-popup');
            const fieldId = getFieldIdFromBtnId(target);
            if (target.tagName === 'IDS-TRIGGER-BUTTON') {
                const field = document.querySelector(`#${fieldId}`);
                console.info('"timeselected" event triggered', e.detail.value, `. Value will be passed to field "${fieldId}"`);
                field.value = picker.value;
            }
            if (target.tagName === 'IDS-TRIGGER-FIELD') {
                console.info('"timeselected" event triggered', e.detail.value, `. Value will be passed to field "${fieldId}"`);
                target.value = e.detail.value;
            }
        }
    });
});
//# sourceMappingURL=picker-only.js.map
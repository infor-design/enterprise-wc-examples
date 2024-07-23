// Supporting components
import '../ids-input';
import '../../ids-button/ids-button';
document.addEventListener('DOMContentLoaded', () => {
    const btnEnable = document.querySelector('#btn-input-enable');
    const btnDisable = document.querySelector('#btn-input-disable');
    const btnReadonly = document.querySelector('#btn-input-readonly');
    const input = document.querySelector('#input-toggle-state');
    // Enable
    btnEnable?.addEventListener('click', () => {
        input.disabled = false;
        input.readonly = false;
    });
    // Disable
    btnDisable?.addEventListener('click', () => {
        input.disabled = true;
    });
    // Readonly
    btnReadonly?.addEventListener('click', () => {
        input.readonly = true;
    });
    const testInput = document.querySelector('#test-input');
    testInput?.addEventListener('change', (e) => {
        console.info('Test Input Change Event: ', e.target?.value);
    });
    // Set up masks
    const phoneInput = document.querySelector('#phone-input');
    if (!phoneInput)
        return;
    phoneInput.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    const numberInput = document.querySelector('#number-input');
    numberInput.mask = 'number';
    numberInput.maskOptions = {
        allowDecimal: true,
        decimalLimit: 2,
        integerLimit: 3
    };
});
//# sourceMappingURL=example.js.map
import '../ids-slider';
import '../../ids-input/ids-input';
import '../../ids-draggable/ids-draggable';
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('#slider-bound');
    const input = document.querySelector('#slider-value');
    const formatValue = (val) => `${val.toFixed(3)}`;
    input.onEvent('change', input, (e) => {
        slider.value = e.target.value;
    });
    const changeInputOnSliderChange = (e) => {
        input.value = formatValue(e.detail.value);
    };
    slider.onEvent('ids-slider-drag', slider, changeInputOnSliderChange);
    slider.onEvent('input', slider, changeInputOnSliderChange);
});
//# sourceMappingURL=update-value.js.map
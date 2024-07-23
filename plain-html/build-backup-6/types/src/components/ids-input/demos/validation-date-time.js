// Supporting components
import '../ids-input';
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.e2e-input-mask')
        .forEach((item) => {
        item.maskOptions = { format: item.format };
    });
});
//# sourceMappingURL=validation-date-time.js.map
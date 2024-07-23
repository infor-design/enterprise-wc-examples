import { attributes } from '../../core/ids-attributes';
import { stringToBool } from '../../utils/ids-string-utils/ids-string-utils';
export const IdsLabelStateAttributes = [
    attributes.LABEL,
    attributes.LABEL_REQUIRED,
    attributes.LABEL_STATE
];
export const isLabelStateValid = (value) => value === null || ['hidden', 'collapsed'].includes(value);
export const isLabelRequiredValid = (value) => {
    const isValid = typeof value !== 'undefined' && value !== null;
    return isValid ? stringToBool(value) : true;
};
//# sourceMappingURL=ids-label-state-common.js.map
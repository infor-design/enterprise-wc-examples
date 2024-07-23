import '../ids-empty-message/ids-empty-message';
/**
 * Empty message defaults.
 * @private
 * @param {IdsDataGrid} this The data grid object.
 * @returns {object} The default values
 */
function emptyMessageDefaults() {
    return {
        description: this.locale?.translate('NoDataFilter') || 'No data available, make a new filter selection to see more results.',
        icon: 'empty-no-data-new',
        label: this.locale?.translate('NoData') || 'No Data Available'
    };
}
/**
 * Empty message markup content.
 * @private
 * @param {IdsDataGrid} this The data grid object.
 * @returns {string} The template
 */
function emptyMessageContent() {
    const { description, icon, label } = emptyMessageDefaults.apply(this);
    const em = {
        description: this.emptyMessageDescription || description,
        icon: this.emptyMessageIcon || icon,
        label: this.emptyMessageLabel || label,
    };
    return this.suppressEmptyMessage ? '' : `<ids-empty-message icon="${em.icon}" hidden>
    <ids-text type="h2" font-size="20" label="true" slot="label">${em.label}</ids-text>
    <ids-text label="true" slot="description" hidden>${em.description}</ids-text>
  </ids-empty-message>`;
}
/**
 * Empty message template markup.
 * @param {IdsDataGrid} this The data grid object.
 * @returns {string} The template
 */
export function emptyMessageTemplate() {
    return `<slot name="empty-message">${emptyMessageContent.apply(this)}</slot>`;
}
/**
 * Set empty message elements.
 * @param {IdsDataGrid} this The data grid object.
 * @returns {void}
 */
export function setEmptyMessageElements() {
    const slotted = this.querySelector('ids-empty-message');
    const em = slotted || this.shadowRoot?.querySelector('ids-empty-message');
    this.emptyMessageElements = {
        em,
        emDesc: em?.querySelector('[slot="description"]'),
        emIsSlotted: !!slotted,
        emLabel: em?.querySelector('[slot="label"]'),
        vs: this.shadowRoot?.querySelector('ids-virtual-scroll')
    };
}
/**
 * Reset empty message elements.
 * @param {IdsDataGrid} this The data grid object.
 * @returns {void}
 */
export function resetEmptyMessageElements() {
    this.emptyMessageElements = undefined;
}
/**
 * Show the empty message.
 * @param {IdsDataGrid} this The data grid object.
 * @returns {void}
 */
export function showEmptyMessage() {
    if (this.suppressEmptyMessage)
        return;
    // Set elements
    if (this.initialized && !this.emptyMessageElements)
        setEmptyMessageElements.apply(this);
    const { em, emDesc, vs } = this.emptyMessageElements || {};
    // Empty message
    em?.removeAttribute('hidden');
    // Filtered (show/hide description element)
    const isFiltered = this.datasource.filtered;
    if (isFiltered)
        emDesc?.removeAttribute('hidden');
    else
        emDesc?.setAttribute('hidden', '');
    // Virtual scroll
    if (this.virtualScroll) {
        vs?.setAttribute('hidden', '');
        this.container?.style.setProperty('height', '');
    }
}
/**
 * Hide the empty message.
 * @param {IdsDataGrid} this The data grid object.
 * @returns {void}
 */
export function hideEmptyMessage() {
    if (this.initialized && !this.emptyMessageElements)
        setEmptyMessageElements.apply(this);
    const { em, emDesc, vs } = this.emptyMessageElements || {};
    em?.setAttribute('hidden', '');
    emDesc?.setAttribute('hidden', '');
    vs?.removeAttribute('hidden');
}
/**
 * Toggle the empty message.
 * @param {IdsDataGrid} this The data grid object.
 * @param {boolean | number} hide If true, will hide empty message.
 * @returns {void}
 */
export function IdsDataGridToggleEmptyMessage(hide) {
    hide = hide ?? this.data?.length;
    if (hide || this.suppressEmptyMessage)
        hideEmptyMessage.apply(this);
    else
        showEmptyMessage.apply(this);
}
/**
 * Set empty message.
 * @param {IdsDataGrid} this The data grid object.
 * @returns {void}
 */
export function setEmptyMessage() {
    const d = emptyMessageDefaults.apply(this);
    setEmptyMessageElements.apply(this);
    const { em, emDesc, emIsSlotted, emLabel } = this.emptyMessageElements;
    const description = emDesc?.textContent?.trim();
    const icon = em?.icon;
    const label = emLabel?.textContent?.trim();
    // Description
    if (emDesc && description !== this.emptyMessageDescription) {
        if (emIsSlotted && this.emptyMessageDescription) {
            emDesc.innerHTML = this.emptyMessageDescription;
        }
        else if (!emIsSlotted) {
            emDesc.innerHTML = this.emptyMessageDescription || d.description;
        }
    }
    // Icon
    if (em?.icon && icon !== this.emptyMessageIcon) {
        if (emIsSlotted && this.emptyMessageIcon) {
            em.icon = this.emptyMessageIcon;
        }
        else if (!emIsSlotted) {
            em.icon = this.emptyMessageIcon || d.icon;
        }
    }
    // Label
    if (emLabel && label !== this.emptyMessageLabel) {
        if (emIsSlotted && this.emptyMessageLabel) {
            emLabel.innerHTML = this.emptyMessageLabel;
        }
        else if (!emIsSlotted) {
            emLabel.innerHTML = this.emptyMessageLabel || d.label;
        }
    }
    // Reset elements
    resetEmptyMessageElements.apply(this);
    this.toggleEmptyMessage();
}
//# sourceMappingURL=ids-data-grid-empty-message.js.map
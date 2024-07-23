import { eventPath, findInPath } from '../../utils/ids-event-path-utils/ids-event-path-utils';
import { stringToNumber } from '../../utils/ids-string-utils/ids-string-utils';
/**
 * Get context menu element
 * @private
 * @param {IdsDataGrid} this The data grid object.
 * @param {boolean} isHeader menu for header vs body.
 * @returns {IdsPopupMenu|undefined} The menu element.
 */
function getContextmenuElem(isHeader = false) {
    const slotName = isHeader ? 'header-contextmenu' : 'contextmenu';
    const id = isHeader ? this.headerMenuId : this.menuId;
    const data = isHeader ? this.headerMenuData : this.menuData;
    const slot = () => this.shadowRoot?.querySelector(`slot[name="${slotName}"]`);
    let menu = slot()?.assignedElements()[0];
    if (!menu && id) {
        menu = this.closest('ids-container')?.querySelector(`#${id}`);
    }
    if (!menu && data) {
        this.insertAdjacentHTML('beforeend', `<ids-popup-menu slot="${slotName}" trigger-type="custom"></ids-popup-menu>`);
        menu = slot()?.assignedElements()[0];
        if (menu)
            menu.data = data;
    }
    return menu;
}
/**
 * Set compulsory attributes to given menu.
 * @private
 * @param {IdsPopupMenu} menu The menu element.
 * @returns {void}
 */
function setContextmenuCompulsoryAttributes(menu) {
    menu?.popup?.setAttribute('arrow', 'bottom');
    menu?.popup?.setAttribute('align', 'top, left');
    menu?.setAttribute('data-contextmenu-element', '');
}
/**
 * Show contextmenu.
 * @private
 * @param {IdsDataGrid} this The data grid object.
 * @returns {void}
 */
function showContextmenu() {
    const { menu: menuEl, target, callbackArgs } = this.contextMenuInfo;
    let isShow = false;
    if (menuEl && target && callbackArgs) {
        const args = { ...callbackArgs, menuEl };
        if (!this.triggerVetoableEvent('beforemenushow', args)) {
            return isShow;
        }
        menuEl.target = target;
        if (callbackArgs.type === 'header')
            menuEl.popup.y = 10;
        menuEl.show();
        isShow = true;
        this.triggerEvent('menushow', this, { bubbles: true, detail: args });
    }
    return isShow;
}
/**
 * Get body cell callback arguments.
 * @private
 * @param {IdsDataGrid} this The data grid object.
 * @param  {HTMLElement[]} path List of path element.
 * @param  {HTMLElement} cellEl The cell element.
 * @returns {void}
 */
function contextmenuBodyCellArgs(path, cellEl) {
    const rowIndex = stringToNumber(findInPath(path, '[role="row"]')?.getAttribute('data-index'));
    const columnIndex = stringToNumber(cellEl.getAttribute('aria-colindex')) - 1;
    const rowData = this.data[rowIndex];
    const columnData = this.columns[columnIndex];
    const columnId = columnData.id;
    const fieldData = rowData[columnId];
    // The arguments to pass along callback
    return {
        type: 'body-cell',
        rowData,
        rowIndex,
        columnData,
        columnId,
        columnIndex,
        fieldData,
        grid: this
    };
}
/**
 * Get header callback arguments.
 * @private
 * @param {IdsDataGrid} this The data grid object.
 * @param  {HTMLElement} columnheader The column header element.
 * @returns {void}
 */
function contextmenuHeaderArgs(columnheader) {
    const isHeaderGroup = columnheader.hasAttribute('column-group-id');
    // The arguments to pass along callback
    let callbackArgs = {
        type: 'header',
        isHeaderGroup,
        grid: this
    };
    if (isHeaderGroup) {
        // Header (Group)
        const columnGroupId = columnheader.getAttribute('column-group-id');
        const columnGroupData = this.columnGroupDataById(columnGroupId);
        callbackArgs = {
            ...callbackArgs,
            columnGroupId,
            columnGroupData,
            rowIndex: 0,
            columnGroupIndex: this.columnGroupIdxById(columnGroupId),
        };
    }
    else {
        // Header (Non-Group)
        const columnId = columnheader.getAttribute('column-id');
        const columnIndex = this.columnIdxById(columnId);
        const columnData = this.columns[columnIndex];
        callbackArgs = {
            ...callbackArgs,
            columnId,
            columnIndex,
            columnData,
            rowIndex: this.columnGroups ? 1 : 0,
        };
    }
    return callbackArgs;
}
/**
 * Handle contextmenu.
 * @private
 * @param {IdsDataGrid} this The data grid object.
 * @param {HTMLElementEvent<HTMLElement[]>} e The contextmenu event.
 * @param {IdsPopupMenu} menu The contextmenu element.
 * @param {IdsPopupMenu} headerMenu The header contextmenu element.
 * @returns {void}
 */
function handleContextmenu(e, menu, headerMenu) {
    const path = eventPath(e);
    if (menu?.visible)
        menu?.hide();
    if (headerMenu?.visible)
        headerMenu?.hide();
    this.contextMenuInfo = {};
    let args = {};
    const columnheader = findInPath(path, '[role="columnheader"]');
    const cellEl = findInPath(path, '[role="gridcell"]');
    if (cellEl && menu) {
        const callbackArgs = contextmenuBodyCellArgs.apply(this, [path, cellEl]);
        args = { menu, target: cellEl, callbackArgs };
    }
    else if (columnheader && headerMenu) {
        const callbackArgs = contextmenuHeaderArgs.apply(this, [columnheader]);
        args = { menu: headerMenu, target: columnheader, callbackArgs };
    }
    this.contextMenuInfo = { ...args };
    if (showContextmenu.apply(this))
        e.preventDefault();
}
/**
 * Handle selected item for contextmenu.
 * @private
 * @param {IdsDataGrid} this The data grid object.
 * @param {IdsDataGridContextmenuSelected} e The selected item event for contextmenu.
 * @param {IdsPopupMenu} menuEl The menu element for contextmenu.
 * @returns {void}
 */
function handleContextmenuSelectedItem(e, menuEl) {
    if (menuEl) {
        const args = {
            ...this.contextMenuInfo.callbackArgs,
            menuSelectedEvent: e,
            menuSelectedValue: e?.detail?.value,
            menuEl
        };
        this.triggerEvent('menuselected', this, { bubbles: true, detail: args });
    }
}
/**
 * Set contextmenu
 * @param {IdsDataGrid} this The data grid object.
 * @returns {void}
 */
export function setContextmenu() {
    this.contextMenuInfo = {};
    const menu = getContextmenuElem.apply(this);
    const headerMenu = getContextmenuElem.apply(this, [true]);
    if (menu || headerMenu) {
        setContextmenuCompulsoryAttributes(menu);
        setContextmenuCompulsoryAttributes(headerMenu);
        // Contextmenu for header, header group and body cells.
        this.offEvent('contextmenu.datagrid', this.container);
        this.onEvent('contextmenu.datagrid', this.container, (e) => {
            handleContextmenu.apply(this, [e, menu, headerMenu]);
        });
        // Selected item for body cells.
        if (menu) {
            this.offEvent('selected.datagrid-contextmenu-item', menu);
            this.onEvent('selected.datagrid-contextmenu-item', menu, (e) => {
                handleContextmenuSelectedItem.apply(this, [e, menu]);
            });
        }
        // Selected item for header, and header group.
        if (headerMenu) {
            this.offEvent('selected.datagrid-contextmenu-item', headerMenu);
            this.onEvent('selected.datagrid-contextmenu-item', headerMenu, (e) => {
                handleContextmenuSelectedItem.apply(this, [e, headerMenu]);
            });
        }
    }
}
//# sourceMappingURL=ids-data-grid-contextmenu.js.map
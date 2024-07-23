import { HTMLElementEvent } from '../../utils/ids-event-path-utils/ids-event-path-utils';
import { IdsDataGridContainerArgs } from './ids-data-grid-container-arguments';
import type IdsPopupMenu from '../ids-popup-menu/ids-popup-menu';
import type IdsDataGrid from './ids-data-grid';
/**
 * Contextmenu arguments interface.
 */
export interface IdsDataGridContextmenuArgs extends IdsDataGridContainerArgs {
    menuEl?: IdsPopupMenu;
    menuSelectedEvent?: any;
    menuSelectedValue?: string;
}
/**
 * Selected event type for contextmenu.
 */
export type IdsDataGridContextmenuSelected = HTMLElementEvent<HTMLElement[]> & {
    detail: {
        value: string;
    };
};
/**
 * Get context menu element
 * @param {IdsDataGrid} this The data grid object.
 * @param {boolean} isHeader menu for header vs body.
 * @returns {IdsPopupMenu|undefined} The menu element.
 */
export declare function getContextmenuElem(this: IdsDataGrid, isHeader?: boolean): IdsPopupMenu | undefined;
/**
 * Set contextmenu
 * @param {IdsDataGrid} this The data grid object.
 * @returns {void}
 */
export declare function setContextmenu(this: IdsDataGrid): void;

import { writable } from 'svelte/store';
import TAG_COLORS from '../../components/ids-tag/colors';

const DEFAULTS = {
    text: 'This is a Dynamic Tag',
    color: '',
    dismissible: true,
    clickable: true
};

/**
 * Creates a Svelte writable store representing an array of data used for populating IdsTag components
 * @param {Array<Object>} data array of plain objects representing component settings
 * @returns {Object} containing an instance of a Svelte writable store
 */
function createTagArray(data = []) {
    const { subscribe, set, update } = writable([]);
    let count = 0;

    const add = (settings) => {
        update(arr => {
            settings.id = count;
            count++;

            // In Svelte, assignments are "reactive", so instead of using
            // `.push()`, we just pass a newly constructed array to trigger an update
            // on anything subscribed to the store.
            return [...arr, settings];
        })
    }

    const remove = (id) => {
        update(arr => arr.filter(tagDef => tagDef.id !== id))
    }

    const reset = () => {
        count = 0;
        return set([]);
    };

    // Populate store from method
    data.forEach(entry => add(entry));

    return {
        subscribe,
        add,
        remove,
        reset,
        set
    }
}

export let writableTagArray = createTagArray([DEFAULTS]);
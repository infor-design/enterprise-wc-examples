import { writable } from 'svelte/store';
import TAG_COLORS from '../../components/ids-tag/colors';

const DEFAULTS = {
    text: 'This is a Tag',
    color: '',
    dismissible: true,
    clickable: true
};

function createTagArray() {
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

    return {
        subscribe,
        add,
        remove,
        reset,
        set
    }
}

export let writableTagArray = createTagArray();
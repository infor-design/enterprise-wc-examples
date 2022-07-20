import { writable } from 'svelte/store';

/**
 * Creates a Svelte Store for global application settings
 */

export const appStore = writable({
  allowThemeSwitcher: true,
  debug: false,
});
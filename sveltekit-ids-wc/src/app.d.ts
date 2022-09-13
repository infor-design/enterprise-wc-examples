/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

export type IdsComponentData = {
  link: string;
  description: string;
  type: string;
}

export type IdsComponentCategory = {
  name: string;
  components: Array<IdsComponentData>;
}
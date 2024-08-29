import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
/** @type {import('@sveltejs/kit').Config} */
const config = {	
	preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    },
  },
};

export default config;

import adapter from "@sveltejs/adapter-auto";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

const config = {
  kit: {
    adapter: adapter({
      fallback: "404.html",
    }),
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    },
  },
};

export default config;
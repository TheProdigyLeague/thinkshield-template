import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["primereact", "primeicons"],
    },
  },
  integrations: [partytown(), react(), sitemap()],
  adapter: netlify(),
});

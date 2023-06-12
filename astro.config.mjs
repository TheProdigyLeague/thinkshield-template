import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  experimental: {
    assets: true,
    hybridOutput: true,
  },
  server: {
    port: 3010,
    host: true,
  },
  integrations: [partytown(), react(), sitemap()],
});

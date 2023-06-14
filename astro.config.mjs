import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

import netlify from "@astrojs/netlify/edge-functions";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  experimental: {
    assets: true,
  },
  server: {
    port: 3010,
    host: true,
  },
  integrations: [partytown(), react(), sitemap()],
  adapter: netlify(),
});

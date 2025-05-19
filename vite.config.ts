import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { type ManifestOptions, VitePWA } from "vite-plugin-pwa";
import viteTsconfigPaths from "vite-tsconfig-paths";

const manifest: Partial<ManifestOptions> = {
  theme_color: "#0d0d0d",
  background_color: "#edf1f3",
  icons: [
    {
      purpose: "maskable",
      sizes: "512x512",
      src: "icon512_maskable.png",
      type: "image/png",
    },
    {
      purpose: "any",
      sizes: "512x512",
      src: "icon512_rounded.png",
      type: "image/png",
    },
  ],
  screenshots: [
    {
      src: "/screenshots/desktop.png",
      type: "image/png",
      sizes: "1852*1078",
      form_factor: "wide",
    },
    {
      src: "/screenshots/mobile.png",
      type: "image/png",
      sizes: "389*848",
      form_factor: "narrow",
    },
  ],
  orientation: "any",
  display: "fullscreen",
  lang: "en-US",
  name: "PWA-TEST-APP",
  short_name: "pwa",
  start_url: "/",
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: { globPatterns: ["**/*.{html,css,js,ico,png,svg}"] },
      manifest,
    }),
    viteTsconfigPaths(),
    tailwindcss(),
  ],
});

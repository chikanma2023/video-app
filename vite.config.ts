import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import inject from "@rollup/plugin-inject";

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  plugins: [
    react(),
    inject({
      include: path.resolve(__dirname, "global-shim.js"),
      global: "window",
    }),
  ],
  define: {
    "process.env": process.env,
  },
});

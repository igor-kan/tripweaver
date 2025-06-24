import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// IMPORTANT: The 'base' option tells Vite where your site will be deployed.
// For GitHub Pages, this should be set to your repository name (with a leading slash),
// so that all links and assets work correctly when the site is served from a subdirectory.
// Example: if your repo is 'tripweaver', set base: '/tripweaver/'
export default defineConfig(() => ({
  base: '/tripweaver/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
// Added a comment to trigger a new deployment.

import { defineConfig, ProxyOptions, ViteDevServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import { app } from "./server/main";

const proxy: Record<string, string | ProxyOptions> = {
  "/api": {}, // proxy our /api route to nowhere
};

function expressPlugin() {
  return {
    name: "express-plugin",
    config() {
      return {
        server: { proxy },
        preview: { proxy },
      };
    },
    configureServer(server: ViteDevServer) {
      server.middlewares.use(app);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), expressPlugin()],
});

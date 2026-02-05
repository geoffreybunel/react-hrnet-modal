import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "ReactHrnetModal",
      fileName: (format) => `react-hrnet-modal.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      // IMPORTANT: ne pas embarquer react/react-dom dans le bundle
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

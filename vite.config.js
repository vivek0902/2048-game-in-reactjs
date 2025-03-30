import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "2048-game-in-reactjs",
  plugins: [react()],
});

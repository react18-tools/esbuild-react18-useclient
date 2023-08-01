import { defineConfig } from "tsup";

export default defineConfig(() => ({
  format: ["cjs", "esm"],
  target: "es2015",
  clean: true,
  minify: true,
  legacyOutput: true,
}));

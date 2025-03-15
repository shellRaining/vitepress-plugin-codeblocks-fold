import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { defineConfig, type RolldownOptions } from "rolldown";

// Define external dependencies
const external = ["vue", "vitepress"];

// Common plugins
const plugins = [
  typescript({
    tsconfig: "./tsconfig.json",
  }),
  terser({ format: { comments: false } }),
];

// Build configuration for the main modules
const mainConfig = {
  input: {
    config: "./lib/index.ts",
  },
  output: {
    dir: "dist",
    entryFileNames: "index.js",
    format: "esm",
  },
  external,
  plugins,
} as RolldownOptions;

export default defineConfig(mainConfig);

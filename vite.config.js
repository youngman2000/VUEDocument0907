import { defineConfig } from "vite";
import prodConfig from "./vite.prod.config.js";
import baseConfig from "./vite.base.config.js";

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return { ...baseConfig }
  } else if (command === 'build') {
    return Object.assign({}, baseConfig, prodConfig)
  }
})
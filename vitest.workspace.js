import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "./vite.config.js",
    test: {
      include: ["**/*.node.test.{js, jsx}"],
      name: "happy-dom",
      environment: "happy-dom",
      coverage: {
        provider: "v8",
        reporter: ["text", "json", "html"],
      },
    },
  },
  {
    extends: "./vite.config.js",
    test: {
      setupFiles: ["vitest-browser-react"],
      include: ["**/*.browser.test.{js, jsx}"],
      name: "browser",
      coverage: {
        provider: "v8", // <-- use v8, not istanbul
        reporter: ["text", "json", "html"],
      },
      browser: {
        provider: "playwright",
        enabled: true,
        name: "chromium",
      },
    },
  },
]);

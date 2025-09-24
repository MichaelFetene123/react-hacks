import {defineWorkspace } from "vitest/config"

export default defineWorkspace([

    {
        extends: "./vite.config.js",
        test: {
            include: ["**/*.node.test.{js, jsx}"],
            name: "happy-dom",
            environment: "happy-dom"
        }
    }
])
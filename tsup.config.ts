import { defineConfig } from 'tsup'

export default defineConfig((options) => {
    const isDev = !options.watch

    return {
        clean: isDev,
        minify: isDev,
    }
})

import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
  return {
    // vite config
    define: {
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false
    }
  }
})
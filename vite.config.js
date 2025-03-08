import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["5173-ogagaakpowe-mernstackre-9fg5uj019rw.ws-eu118.gitpod.io"],
    host: true,  // Ensure Vite listens on the correct host
    strictPort: true, // Prevents port conflicts
  },
})

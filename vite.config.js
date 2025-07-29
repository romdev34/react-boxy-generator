import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // Définir le dossier de sortie selon le mode
  const outputDir = mode === 'github' ? 'dist' : 'dist-server'

  return {
    base: env.VITE_BASE_PATH || '/',
    plugins: [react()],
    build: {
      outDir: outputDir
    },
    server: {
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: 5173,
    }
  }
})
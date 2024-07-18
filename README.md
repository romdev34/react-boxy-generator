# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

sudo scp -r dist/ ubuntu@51.68.231.1:/var/www/html/react/boxy-generator
lors du déploiement attention a changer la base dans vite.config.js comme ceci

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
base: './',
plugins: [react()],
server: {
watch: {
usePolling: true,
},
host: true, // needed for the Docker Container port mapping to work
strictPort: true,
port: 5173, // you can replace this port with any port
}
})

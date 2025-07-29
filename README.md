# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Lancer le projet en local
npm run dev

## Déployer le projet sur le serveur
### Génération du fichier dist
> NODE_ENV=production npm run build
> sudo scp -r dist-server/* ubuntu@51.68.231.1:/var/www/html/react/boxy-generator

## Déployer le projet sur GITHUB
https://create-react-app.dev/docs/deployment/#github-pages

npm run deploy:github
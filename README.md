# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### cmd
    npm create vite@latest name-of-your-project -- --template react
    cd <your new project directory>
    npm install react-router-dom localforage match-sorter sort-by
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

## /** @type {import('tailwindcss').Config} */
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],

### index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

### daisyUI
    npm i -D daisyui@3.9.4
##  tailwind.config.js
    module.exports = {
      //...
      plugins: [require("daisyui")],
    }

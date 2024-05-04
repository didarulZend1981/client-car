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


 ### Style Banner Component With Gradient Overlay
        <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[600px]">
                    <img src={img6} className="w-full rounded-lg" />
                    
                    <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className="text-6xl font-blod">Affordable Price For Car Serviceing</h2>
                            <p>There are many variation of passges of available, but the majority have suffered alteration in some form</p>
                            <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">latest Project</button>
                            </div>
                    </div>
                        

                    </div>
                    
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
        </div>

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

### Create About Section With Image Relative Position 
            import personal from '../../assets/images/about_us/person.jpg';
            import parts from '../../assets/images/about_us/parts.jpg';

            const About = () => {
            return (
                 <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='lg-w-1/3 min-w-[200px] relative'>

                            <img src={personal} className="w-3/4 rounded-lg shadow-2xl" />
                            <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                    <div className='lg-w-1/2'>
                    <h3 className='text-3xl text-orange-500'>About</h3>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                </div>
                );
                };

                export default About;

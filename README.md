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

#### service
### Home/Services/Services.jsx
            import { useEffect } from "react";
            import { useState } from "react";
            import ServiceCard from "./ServiceCard";


            const Services = () => {
            const [services,setServices] =useState([]);
            useEffect(()=>{
                fetch('services.json')
                .then(res=>res.json())
                .then(data=>setServices(data));
            },[])
            
            return (
                <div>
                    <div className="text-center">
                    <h3 className="text-3xl text-orange-700 font-bold">Ouer Service</h3>
                    <h2 className="text-5xl">Our Service Area</h2>
                    <p>the majority hava suffered alteration in some form, by injected humour ,or randomised <br/>works which don't look even slightly beliveable</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        services.map(service=>
                        
                                <ServiceCard
                                    key={service._id}
                                    serviceCard={service}
                                
                                ></ServiceCard>
                            )
                    }
                    </div>
                </div>
            );
            };

            export default Services;

### Home/Services/ServiceCard.jsx
            const ServiceCard = ({serviceCard}) => {
                const {title,img,price}=serviceCard;

                return (
                    <div className="card w-100 bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-xl text-orange-700">price:{price}</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
                );
        };

### context API follow 3 step
    1.step providers/AuthProviders.jsx
            import { createContext } from "react";

            export const AuthContext = createContext();
            const AuthProviders = ({children}) => {
                    const test = "didar";
                    const authInfo ={
                        test,
                    }
                    
                    return (
                        <AuthContext.Provider value={authInfo}>
                        {children}
                        </AuthContext.Provider>
                    );
            };

            export default AuthProviders;
    2.step main.jsx
            import AuthProviders from './providers/AuthProviders';
            ReactDOM.createRoot(document.getElementById('root')).render(
                    <div className='max-w-7xl mx-auto'>
                        <React.StrictMode>
                            <AuthProviders>
                            <RouterProvider router={router} />
                            </AuthProviders>
                            
                        </React.StrictMode>
                    </div>
                
                )
    3B.using auth context--
        import { useContext } from "react";
        import { AuthContext } from "./AuthProviders";
        const {test} = useContext(AuthContext);

    or better option
    create hook like this
        providers/UseAuthHook.jsx
            import { useContext } from "react";
            import { AuthContext } from "./AuthProviders";


                    const UseAuthHook = () => {
                    const all = useContext(AuthContext);
                    return all;
                    };

            export default UseAuthHook;
    3a.using auth context--
         import UseAuthHook from '../../providers/UseAuthHook';
         const {test} = UseAuthHook();

### Firebase 
    npm install firebase


#### SignUp
    AuthProviders.jsx

    
    import auth from "../Firebase/firebaseConfig";
    export const AuthContext = createContext();
        const AuthProviders = ({children}) => {
         const [user,setUser] =useState(null);
        
        //create user
        const createUser =(email, password)=>{
            return createUserWithEmailAndPassword(auth, email, password);
        
        }
        const updateUserProfile = (name, photo) => {
                return updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: photo,
                })
        }

        const authInfo ={
            user,
            setUser,
            createUser,
            updateUserProfile
        }
        
       
    SignUp.jsx
        import { Link, useLocation, useNavigate } from "react-router-dom";
        import img from '../../assets/images/login/login.svg'
        import UseAuthHook from "../../providers/UseAuthHook";
        import toast from "react-hot-toast";

        const SignUp = () => {
        const {createUser,user,setUser,updateUserProfile} = UseAuthHook();
        const navigate = useNavigate();
        const location = useLocation();
        const from = location?.state || "/";
        const handleSignUp = async e => {
            e.preventDefault()
            const form = e.target
            const email = form.email.value
            const name = form.name.value
            const photo = form.photo.value
            const pass = form.password.value
            console.log({ email, pass, name, photo })
            try {
            //2. User Registration
            const result = await createUser(email, pass)
            // console.log(result)
            await updateUserProfile(name, photo)
            // setUser({ ...user, photoURL: photo, displayName: name })
            navigate(from);
            toast.success('Signup Successful')
            setUser({ ...user, photoURL: photo, displayName: name })
            } catch (err) {
            // console.log(pass);
            // console.log(err)
            toast.error(err?.message)
            }
        }
        return (
            <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="w-1/2 mr-12">
                            <img src={img} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                                <form onSubmit={handleSignUp}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">photo</span>
                                        </label>
                                        <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                                    </div>
                                </form>
                                <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
        );
        };

        export default SignUp;

    cmd npm install react-hot-toast
    then--
    main.jsx
            <div className='max-w-7xl mx-auto'>
                <React.StrictMode>
                    <AuthProviders>
                        <RouterProvider router={router} />
                        <Toaster />
                    </AuthProviders>

                </React.StrictMode>
            </div>



### Login--
    1st step-
        AuthProviders.jsx

        const signIn = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password);
        }
        const authInfo ={
            signIn
        }

    2.login.jsx
        const Login = () => {
            const {signIn} = UseAuthHook();
            const location = useLocation();
            const navigate = useNavigate();
            const handleLogin = e => {
                e.preventDefault();
                
                // console.log(e.currentTarget);
                const form = new FormData(e.currentTarget);
                const email = form.get('email');
                const password = form.get('password');
            // console.log(email,password);
            signIn(email, password)
            .then(result => {
                console.log("login tyme",result.user.displayName);
                navigate(location?.state?location.state:'/');
                toast.success("Signin Successful {result.user.displayName}")
            })
            .catch(error => {
                toast.error('your email and password should match with the registered email and password If it doesnt match')
                    
            })


        }

        form:-
        <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-center text-3xl font-bold ">Login</h1>
            <div className="form-control">

            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            
            </div>
            <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
            </div>
        </form>

### Social Network login
    AuthProviders.jsx
      const googleProvider = new GoogleAuthProvider();
      // -------------------
      const googleLogin =() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
      }

      const authInfo ={
            googleLogin,
        }

    socialLogin.jsx
            import React from 'react';

            import { useLocation, useNavigate } from "react-router-dom";
            import { FaGooglePlusG } from "react-icons/fa";

            import UseAuthHook from '../../providers/UseAuthHook';
            import toast from 'react-hot-toast';
            const SocialLogin = () => {
            const {googleLogin} =UseAuthHook();

            const navigate = useNavigate();
            const location = useLocation();
            const from = location?.state || "/";
            const handleSocialLogin = socialProvider =>{

            socialProvider().then(result=>{
            if(result.user){
            // toast.success('successfully login')
            navigate(from);
            toast.success('successfully login')

            }
            })
            }


            return (
            <div>
            <div className="w-1/3 mx-auto grid grid-cols-2 gap-4 mt-5 my-auto min-h-max text-center mb-3 border-t-2 pt-5">
            <button onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-outline btn-primary"><FaGooglePlusG className='text-[red]'/> Google</button>

            </div>
            </div>
            );
            };

            export default SocialLogin;


### BookService--
    Home/Services/ServiceCard.jsx
        <Link to={`../book/${_id}`}>
                <button className="btn btn-primary">Buy Now</button>
        </Link>
    Routes.jsx
        {
            path: '/book/:id',
            element:<BookServics></BookServics>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }

    BookServics.jsx
            import { useLoaderData } from "react-router-dom";
            import UseAuthHook from "../../providers/UseAuthHook";
            const BookServics = () => {
            const service = useLoaderData();
                const { title, _id, price, img } = service;
                const {user} = UseAuthHook();

                const handleBookService = event =>{
                        event.preventDefault();

                        const form = event.target;
                        const name = form.name.value;
                        const date = form.date.value;
                        const email = user?.email;
                        const booking = {
                            customerName: name, 
                            email, 
                            img,
                            date, 
                            service: title,
                            service_id: _id, 
                            price: price
                        }

                        console.log(booking);

                        fetch('http://localhost:5000/bookings', {
                            method: 'POST', 
                            headers: {
                                'content-type': 'application/json'
                            }, 
                            body: JSON.stringify(booking)
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if(data.insertedId){
                                alert('service book successfully')
                            }
                        })

                    

                

                }
                return (
                


                    <div>
                    <h2 className='text-center text-3xl'>Book Service: {title} </h2>
                            <form onSubmit={handleBookService}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Date</span>
                                        </label>
                                        <input type="date" name="date" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Due amount</span>
                                        </label>
                                        <input type="text" defaultValue={'$'+ price} className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                                </div>
                            </form>
                            <div className="card-body">

                            </div>
                    </div>
                    );
                };

             export default BookServics;

### BOOKING
    
        import { useEffect, useState } from "react";
        import UseAuthHook from "../../providers/UseAuthHook";
        const Booking = () => {
        const { user } = UseAuthHook();
        console.log(user);
        
            const [bookings, setBookings] = useState([]);
            const url = `http://localhost:5000/bookings?email=${user?.email}`;
            useEffect(() => {
                fetch(url)
                    .then(res => res.json())
                    .then(data => setBookings(data))
            }, [url]);

        
        return (
            <div>
                <h2 className="text-5xl">Your bookings:{bookings.length}</h2>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Image</th>
                                    <th>Service</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {
                                    bookings.map(booking => <BookingRow
                                        key={booking._id}
                                        booking={booking}
                                        handleDelete={handleDelete}
                                        handleBookingConfirm={handleBookingConfirm}
                                    ></BookingRow>)
                                }
                            </tbody>

                        </table>
                    </div>
            </div>
        );
        };

        export default Booking;



### BOOKING DELETE
    booking.jsx
    const handleDelete = id => {
      const proceed = confirm('Are You sure you want to delete');
                if (proceed) {
                    fetch(`http://localhost:5000/bookings/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                alert('deleted successful');
                                const remaining = bookings.filter(booking => booking._id !== id);
                                setBookings(remaining);
                            }
                        })
                }
      }

  #####  booking table
            <tbody>
                    {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                
                            ></BookingRow>)
                    }
            </tbody>
    ##### BookingRow
          const BookingRow = ({ booking, handleDelete }) => {
            const { _id, date, service, price, img, status } = booking;

            return (
                <tr>
                    <th>
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </th>
                    <td>
                        <div className="avatar">
                            <div className="rounded w-24 h-24">
                                {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                            </div>
                        </div>
                    </td>
                    <td>
                        {service}
                    </td>
                    <td>{date}</td>
                    <td>${price}</td>
                    <th>
                        
                    </th>
                </tr>
                );
    };

    export default BookingRow;       


###### update (booking extra line)

         const handleBookingConfirm = id => {
            fetch(`http://localhost:5000/bookings/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ status: 'confirm' })
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.modifiedCount > 0) {
                                // update state
                                const remaining = bookings.filter(booking => booking._id !== id);
                                const updated = bookings.find(booking => booking._id === id);
                                updated.status = 'confirm'
                                const newBookings = [updated, ...remaining];
                                setBookings(newBookings);
                            }
                        })
                }
#####  booking table
            <tbody>
                    {
                            bookings.map(booking => 
                            <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}   
                            >
                            </BookingRow>)
                    }
            </tbody>
#####  booking table
        const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
        const { _id, date, service, price, img, status } = booking;

            return (
                <tr>
                    <th>
                        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </th>
                    <td>
                        <div className="avatar">
                            <div className="rounded w-24 h-24">
                                {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                            </div>
                        </div>
                    </td>
                    <td>
                        {service}
                    </td>
                    <td>{date}</td>
                    <td>${price}</td>
                    <th>
                        {
                            status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                                <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
                    </th>
                </tr>
            );
            };

            export default BookingRow;
    

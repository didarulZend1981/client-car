import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Checkout from "../pages/Checkout/Checkout";
import BookServics from "../pages/BookService/BookServics";
import Booking from "../pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/login',
        element:<Login></Login>
       
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
      ,
      {
        path:'/checkout/:id',
        element:<Checkout></Checkout>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      }

      ,
      {
        path: '/book/:id',
        element:<PrivateRoute><BookServics></BookServics></PrivateRoute>
        ,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: 'bookings', 
        element: <Booking></Booking>
      }

    ]
  },
]);

export default router;
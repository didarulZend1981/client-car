
import { useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'

import useAuthHook from "../../providers/useAuthHook";
import toast from 'react-hot-toast';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const {signIn,setLoading} = useAuthHook();
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
      setLoading(false);
      navigate(location?.state?location.state:'/');
      
      toast.success("Signin Successful {result.user.displayName}")
   })
   .catch(error => {
     toast.error('your email and password should match with the registered email and password If it doesnt match')
          
   })






  }
  
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-right w-1/2">
      <img src={login}></img>
    </div>
    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
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
      <div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;
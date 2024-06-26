import { Link, useLocation, useNavigate } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import useAuthHook from "../../providers/useAuthHook";
import toast from "react-hot-toast";

const SignUp = () => {
  
  const {createUser,user,setUser,updateUserProfile,setLoading} = useAuthHook();
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
    if(pass.lenth<6){
        toast.success('pass 6')
    }
    console.log({ email, pass, name, photo })
    try {
      //2. User Registration
      const result = await createUser(email, pass)
      // console.log(result)
      await updateUserProfile(name, photo)
      setUser({ ...user, photoURL: photo, displayName: name })
      setLoading(false);
      navigate(from);
      toast.success('Signup Successful')
    //   setUser({ ...user, photoURL: photo, displayName: name })
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
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
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
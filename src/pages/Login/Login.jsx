
import login from '../../assets/images/login/login.svg'
import UseAuthHook from '../../providers/UseAuthHook';


const Login = () => {
  const {test} = UseAuthHook();
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-right w-1/2">
      <img src={login}></img>
    </div>
    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <h1 className="text-center text-3xl font-bold ">Login-{test}</h1>
        <div className="form-control">

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};

export default Login;
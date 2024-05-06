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
import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext);
    const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handleLogInWithGoogle=()=>{
    googleSignIn()
    .then(result=>{
        const user=result.user;
        navigate(from,{replace:true});
        console.log(user);
       })
       .catch(error=>{
        console.log(error)
       })
    }
    return (
        <div>
            <div className='divider'></div>
            <div className='text-center my-5'>
            <button onClick={()=>handleLogInWithGoogle()} className="btn btn-circle btn-outline">
               <FaGoogle></FaGoogle>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;
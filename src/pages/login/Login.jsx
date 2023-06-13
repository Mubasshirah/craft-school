import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginimg from '../../assets/logo/login&register.png'
import { useForm } from "react-hook-form";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        signIn(data.email,data.password)
        .then(result=>{
            const signedInUser=result.user;
            console.log(signedInUser);
    
           
                reset();
                navigate(from,{replace:true});
         
         
        })
        .catch(error=>console.log(error))
        }
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse pt-48 md:pt-20">
    <div className=" lg:text-left w-full md:w-1/2">
   
     <img src={loginimg} alt="" className="w-full"/>
    </div>
    <div className="card flex-shrink-0 w-full md:w-1/2  shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card-body md:w-full">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" {...register("password", { required: true })}  placeholder="password" className="input input-bordered" />
          {errors.password && <span>This field is required</span>}
          
         
        </div>
        <div className="form-control mt-6">
          <button className="px-8 py-3 mt-8   hover:bg-gray-100 hover:text-black text-white rounded-lg bg-opacity-30 bg-green-900">Login</button>
        </div>
      </div>
      </form>
      <div className="text-center mb-5 ">
            <p>New here! <Link className='text-primary' to='/register'>Register</Link></p>
          </div>
    </div>
  </div>
</div>
    );
};

export default Login;
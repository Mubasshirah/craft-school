import { useForm } from 'react-hook-form';
import loginimg from '../../assets/logo/login&register.png'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import SocialLogin from '../../shared/SocialLogin';
import Swal from 'sweetalert2';

const Register = () => {
    const navigate=useNavigate();
    const {createUser ,updateUserPofile}=useContext(AuthContext);
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email,data.password)
        .then(result=>{
            const createdUser=result.user;
            console.log(createdUser);
           updateUserPofile(data.name,data.photourl) 
           const newUser={name:data.name, email:data.email}
             fetch('https://assignment-12-craft-school-server.vercel.app/users',{
              method:'POST',
              headers:{
                'content-type':'application/json',
              },
              body:JSON.stringify(newUser)
             })
             .then(res=>res.json())
             .then(data=>{
              console.log(data)
              if(data.insertedId){

                reset();
                Swal.fire({
                 position: 'top-end',
                 icon: 'success',
                 title: 'A new user has been added',
                 showConfirmButton: false,
                 timer: 1500
               })
              }
             })
             navigate('/');
           })
           .catch(error=>console.log(error))
        }
        
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse pt-48 md:pt-20">
    <div className=" lg:text-left w-full md:w-1/2">
   
     <img src={loginimg} alt="" className="w-full"/>
    </div>
    <div className="card flex-shrink-0 w-full md:w-1/2 md:mt-20 mb-10 shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card-body md:w-full">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photoURL</span>
          </label>
          <input type="text" name="photourl" {...register("photourl", { required: true })} placeholder="photourl" className="input input-bordered" />
          {errors.photourl && <span>This field is required</span>}
        </div>
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
          <input type="password" name="password" {...register("password", { required: true ,
            minLength:6,
            pattern:/(?=.*[A-Z])(?=.*[!@#$&*])/
            })} 
            placeholder="password" className="input input-bordered" />
          {errors.password?.type==='required' && <span className='text-red-700'>This field is required</span>}
          {errors.password?.type==='minLength' && <span className='text-red-700'>This field should have 6 character</span>}
          {errors.password?.type==='pattern' && <span className='text-red-700'>This field should have one uppercase and one special character</span>}
         
        </div>
      
        <div className="form-control ">
        <input className='px-8 py-3 mt-4   hover:bg-gray-100 hover:text-black text-white rounded-lg bg-opacity-30 bg-green-900' type="submit" value="Register"   />
        </div>
      </div>
      </form>
      <div className="text-center mb-5 ">
            <p>Already register! <Link className='text-primary' to='/login'>Login</Link></p>
          </div>
          <div>
            <SocialLogin></SocialLogin>
          </div>
    </div>
  </div>
</div>
    );
};

export default Register;
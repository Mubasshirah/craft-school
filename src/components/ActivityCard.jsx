import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import useSelectedClass from "../hooks/useSelectedClass";


const ActivityCard = ({activity}) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [,refetch]=useSelectedClass();
    const location = useLocation();

    const {name,image,_id,instructor_name,available_seats,price}=activity;
     const handleAddToSelect= item=>{
        if (user && user.email) {
            const selectedItem={id:_id,name,image,price,email:user.email};
            console.log(selectedItem)
            fetch('https://assignment-12-craft-school-server.vercel.app/selected', {
              method: "POST",
              headers: {
                'content-type':'application/json'
                },
                body:JSON.stringify(selectedItem)
            })
              .then(res => res.json())
              .then(data => {
                
                if (data.insertedId) {
                refetch();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You have selected it',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
              })
          }
          else {
            Swal.fire({
              title: 'please login!',
      
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'OK!'
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/login', { state: { from: location } })
              }
            })
          }
     }
    
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-10 mb-12">
        <figure><img src={image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="pt-5">Instructor name: {instructor_name}</p>
          <p className="p-0 m-0">Available Seats: {available_seats}</p>
          <p className="p-0 m-0">Price:$ {price}</p>

          <div>
           
           
           <button onClick={() => { handleAddToSelect(activity) }}  className='px-6 py-3   hover:bg-gray-100 hover:text-black text-white rounded-lg bg-opacity-30 bg-green-900'>
                Select
            </button>
           
          </div>
         
        </div>
      </div>
    );
};

export default ActivityCard;
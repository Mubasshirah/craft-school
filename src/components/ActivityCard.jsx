import { useState } from "react";
import { Link } from "react-router-dom";


const ActivityCard = ({activity}) => {

    const {name,image,_id,enrolled_students,instructor_name,instructor_image,instructor_email,available_seats,price}=activity;
    
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-10 mb-12">
        <figure><img src={image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="pt-5">Instructor name: {instructor_name}</p>
          <p className="p-0 m-0">Available Seats: {available_seats}</p>
          <p className="p-0 m-0">Price:$ {price}</p>

          <div>
           
           <Link to='/enroll'>
           <button  className='px-6 py-3   hover:bg-gray-100 hover:text-black text-white rounded-lg bg-opacity-30 bg-green-900'>
                Select
            </button>
           </Link>
          </div>
         
        </div>
      </div>
    );
};

export default ActivityCard;
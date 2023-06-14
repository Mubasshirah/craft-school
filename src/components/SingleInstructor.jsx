

const SingleInstructor = ({activity}) => {
    const {instructor_image,instructor_name}=activity;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={instructor_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{instructor_name}</h2>
         
        </div>
      </div>
    );
};

export default SingleInstructor;
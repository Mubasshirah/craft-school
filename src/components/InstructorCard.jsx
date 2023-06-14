

const InstructorCard = ({activity}) => {
    const {instructor_name,instructor_email,instructor_image}=activity;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-10 mb-12">
        <figure><img src={instructor_image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">Instructor name: {instructor_name}</h2>
          <p className="card-title">Instructor email: {instructor_email}</p>
         
        </div>
      </div>
    );
};

export default InstructorCard;
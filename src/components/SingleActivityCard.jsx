

const SingleActivityCard = ({activity}) => {
    const {name,enrolled_students,image}=activity;
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title " >{name}</h2>
          <p>Total enrolled student: {enrolled_students}</p>
         
        </div>
      </div>
    );
};

export default SingleActivityCard;
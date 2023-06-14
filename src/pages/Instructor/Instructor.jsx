import InstructorCard from "../../components/InstructorCard";
import useClass from "../../hooks/useClass";



const Instructor = () => {
   const [classes]=useClass()
    return (
        <div className='w-[60%] mx-auto'>
        <h1 className="text-4xl text-center pt-40 pb-4 border-b-4 border-b-gray-400">Our all respected Instructors</h1>
        <div >
         {
             classes.map(activity=><InstructorCard activity={activity} key={activity._id}></InstructorCard>)
         }
        </div>
     </div>
    );
};

export default Instructor;
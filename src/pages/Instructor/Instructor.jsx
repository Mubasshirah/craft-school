import InstructorCard from "../../components/InstructorCard";
import useClass from "../../hooks/useClass";



const Instructor = () => {
   const [classes]=useClass()
    return (
        <div >
        <h1 className="text-4xl text-center pt-40 pb-4 border-b-4 w-[40%] mx-auto border-b-gray-400">Our all respected Instructors</h1>
        <div className='w-[60%] mx-auto'>
         {
             classes.map(activity=><InstructorCard activity={activity} key={activity._id}></InstructorCard>)
         }
        </div>
     </div>
    );
};

export default Instructor;
import ActivityCard from "../../components/ActivityCard";
import useClass from "../../hooks/useClass";


const Class = () => {
    const [classes]=useClass();
    return (
        <div className='w-[60%] mx-auto'>
        <h1 className="text-4xl text-center pt-40 pb-4 border-b-4 border-b-gray-400">All Activities</h1>
        <div >
         {
             classes.map(activity=><ActivityCard activity={activity} key={activity._id}></ActivityCard>)
         }
        </div>
     </div>
    );
};

export default Class;
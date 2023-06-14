import ActivityCard from "../../components/ActivityCard";
import useClass from "../../hooks/useClass";


const Class = () => {
    const [classes]=useClass();
    return (
        <div >
        <h1 className="text-4xl text-center pt-40 pb-4 border-b-4 w-[20%] mx-auto  border-b-gray-400">All Activities</h1>
        <div className='w-[80%] mx-auto'>
         {
             classes.map(activity=><ActivityCard activity={activity} key={activity._id}></ActivityCard>)
         }
        </div>
     </div>
    );
};

export default Class;
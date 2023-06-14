import SingleActivityCard from "../../components/SingleActivityCard";
import useClass from "../../hooks/useClass";
import SharedTitle from "../../shared/SharedTitle";


const PopularActivities = () => {
    const [classes]=useClass();
    return (
        <div className='w-[90%] mx-auto'>
           <SharedTitle heading="most enrolled activites"></SharedTitle>
           <div className="grid md:grid-cols-3 gap-5 mb-10">
            {
                classes.map(activity=><SingleActivityCard activity={activity} key={activity._id}></SingleActivityCard>)
            }
           </div>
        </div>
    );
};

export default PopularActivities;
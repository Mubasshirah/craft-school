import SingleInstructor from "../../components/SingleInstructor";
import useClass from "../../hooks/useClass";
import SharedTitle from "../../shared/SharedTitle";


const PopularInstructor = () => {
    const [classes]=useClass();

    return (
        <div className='w-[90%] mx-auto'>
           <SharedTitle heading="most popular instructors"></SharedTitle>
           <div className="grid md:grid-cols-3 gap-5 mb-10">
            {
                classes.map(activity=><SingleInstructor activity={activity} key={activity._id}></SingleInstructor>)
            }
           </div>
        </div>
    );
};

export default PopularInstructor;
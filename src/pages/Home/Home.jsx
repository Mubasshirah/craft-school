import PopularActivities from "./PopularActivities";
import PopularInstructor from "./PopularInstructor";
import Reviews from "./Reviews";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularActivities></PopularActivities>
            <Reviews></Reviews>
            <PopularInstructor></PopularInstructor>
           
        </div>
    );
};

export default Home;
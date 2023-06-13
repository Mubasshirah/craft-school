import PopularActivities from "./PopularActivities";
import PopularInstructor from "./PopularInstructor";
import Reviews from "./Reviews";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularActivities></PopularActivities>
            <PopularInstructor></PopularInstructor>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;
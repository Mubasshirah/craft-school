import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SharedTitle from "../../shared/SharedTitle";
import { VscTriangleDown } from "react-icons/vsc";
const Reviews = () => {
    return (
        <div>
            <SharedTitle heading='Reviews from our students'></SharedTitle>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    {/* <h1>Danial Morgan</h1>
           <VscTriangleDown></VscTriangleDown>
           <p>I am so pleased with their classes.They have extra-ordinary instructors</p> */}
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Reviews;
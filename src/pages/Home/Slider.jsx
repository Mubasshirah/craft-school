

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import slider1 from '../../assets/slider/slider1.jpg';
import slider2 from '../../assets/slider/slider2.jpg';
import slider3 from '../../assets/slider/slider3.jpg';
import slider4 from '../../assets/slider/slider4.jpg';
import { Fade, Slide } from "react-awesome-reveal";



const Slider = () => {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="">
                        <img src={slider1} alt="" className="w-full h-[100vh] relative" />
                    </div>
                    <div className="absolute flex justify-center items-center transform -translate-y-1/2  top-1/2 bg-gradient-to-r from-[#1515157e] to-[#1515157e] w-full h-full">
                        <div className=" text-center">
                            <Slide>
                                <h1 className="text-2xl md:text-5xl font-bold text-white pt-20 md:pt-2"> Book is not enough for learning
                                </h1>
                                <h1 className="text-2xl md:text-5xl font-bold text-white mb-5">
                                    True learning comes from practical experience
                                </h1>
                            </Slide>

                            <Fade delay={1e2} cascade damping={1e-1}>

                                <p className="text-1xl md:text-2xl  text-white">We are here to give you some essence of practical </p>
                                <p className="text-1xl md:text-2xl  text-white">learning through our awesome classes.</p>
                                <p className="text-1xl md:text-2xl  text-white">Dont waste your free time! </p>
                            </Fade>

                            <Fade delay={1e3} cascade damping={1e-2}>
                                <button className='px-8 py-3 mt-8   hover:bg-gray-100 hover:text-black text-white rounded-lg bg-opacity-30 bg-green-900'>Grab a seat</button>
                            </Fade>
                           
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={slider2} alt="" className="w-full h-[100vh] relative"  />
                    </div>
                    <div className="absolute flex justify-center items-center transform -translate-y-1/2  top-1/2 bg-gradient-to-r from-[#1515157e] to-[#1515157e] w-full h-full">
                        <div className=" text-center">
                            
                                <h1 className="text-2xl md:text-5xl font-bold text-white pt-20 md:pt-2"> Book is not enough for learning
                                </h1>
                                <h1 className="text-2xl md:text-5xl font-bold text-white mb-5">
                                    True learning comes from practical experience
                                </h1>
                            

                            

                                <p className="text-1xl md:text-2xl  text-white">We are here to give you some essence of practical </p>
                                <p className="text-1xl md:text-2xl  text-white">learning through our awesome classes.</p>
                                <p className="text-1xl md:text-2xl  text-white">Dont waste your free time! </p>
                            

                            
                                <button className='px-8 py-3 mt-8   hover:bg-gray-100 hover:text-black text-white rounded-lg bg-opacity-30 bg-green-900'>Grab a seat</button>
                        
                           
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={slider3} alt="" className="w-full h-[100vh] relative" />
                    </div>
                    <div className="absolute flex justify-center items-center transform -translate-y-1/2  top-1/2 bg-gradient-to-r from-[#1515157e] to-[#1515157e] w-full h-full">
                        <div className=" text-center">
                            
                                <h1 className="text-2xl md:text-5xl font-bold text-white pt-20 md:pt-2"> Book is not enough for learning
                                </h1>
                                <h1 className="text-2xl md:text-5xl font-bold text-white mb-5">
                                    True learning comes from practical experience
                                </h1>
                            

                            

                                <p className="text-1xl md:text-2xl  text-white">We are here to give you some essence of practical </p>
                                <p className="text-1xl md:text-2xl  text-white">learning through our awesome classes.</p>
                                <p className="text-1xl md:text-2xl  text-white">Dont waste your free time! </p>
                            

                            
                                <button className='px-8 py-3 mt-8   hover:bg-gray-100 hover:text-black text-white rounded-lg bg-opacity-30 bg-green-900'>Grab a seat</button>
                        
                           
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={slider4} alt="" className="w-full h-[100vh] relative" />
                    </div>
                    <div className="absolute flex justify-center items-center transform -translate-y-1/2  top-1/2 bg-gradient-to-r from-[#1515157e] to-[#1515157e] w-full h-full">
                        <div className=" text-center">
                            
                                <h1 className="text-2xl md:text-5xl font-bold text-white pt-20 md:pt-2"> Book is not enough for learning
                                </h1>
                                <h1 className="text-2xl md:text-5xl font-bold text-white mb-5">
                                    True learning comes from practical experience
                                </h1>
                            

                            

                                <p className="text-1xl md:text-2xl  text-white">We are here to give you some essence of practical </p>
                                <p className="text-1xl md:text-2xl  text-white">learning through our awesome classes.</p>
                                <p className="text-1xl md:text-2xl  text-white">Dont waste your free time! </p>
                    

                            
                                <button className='px-8 py-3 mt-8   hover:bg-gray-100 hover:text-black text-white rounded-lg bg-opacity-30 bg-green-900'>Grab a seat</button>
                
                           
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Slider;
import React, { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Carousel = () => {

  return (
    <div className="px-[50px] relative">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {Array.from({ length: 21 }).map((item) => (
          <SwiperSlide>
            <div className="px-4 py-1 bg-slate-600 rounded-sm z-0 cursor-pointer w-auto">
              sdf
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default Carousel;

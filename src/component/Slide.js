import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
export default function Slide() {
  const items = [
    { src: "/신발이미지/신발배너1.jpg" },
    { src: "/신발이미지/신발배너4.jpg" },
    { src: "/신발이미지/신발배너3.jpg" },
  ];
 

   

  return (
    <>
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, EffectFade, Pagination,Autoplay]}
        className="mySwiper"
        loop={true}
      >
        {items.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="main_wrap">
              <img className="main_img" src={item.src} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  )
}

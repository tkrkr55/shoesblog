
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
export default function ShoseNav() {
  const items = [
    { src: "/신발이미지/신발배너1.jpg" },
    { src: "/신발이미지/신발배너2.jpg" },
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
              <img src={item.src} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  )
}

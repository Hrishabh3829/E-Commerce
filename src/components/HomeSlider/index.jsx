import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider px-2 md:px-3">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="item rounded-[12px] overflow-hidden h-40 sm:h-56 md:h-72 lg:h-80 xl:h-96">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Jupiter/hero/desktops/UNREC/PC_3000X1200_Unrec_LIVE_ASIN_Headphones._CB799215974_.jpg"
              alt="Banner Slide"
              className="w-full h-full object-cover block"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item rounded-[12px] overflow-hidden h-40 sm:h-56 md:h-72 lg:h-80 xl:h-96">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2025/Jupiter25/GW/ME/UR/D298880126_IN_WLA_Jupiter_Hero_Banners_Unrec_PC_PB_LIVE_ASIN_3000x1200._CB800959465_.jpg"
              alt="Banner Slide"
              className="w-full h-full object-cover block"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item rounded-[12px] overflow-hidden h-40 sm:h-56 md:h-72 lg:h-80 xl:h-96">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/8c2598b5c820a42b.jpg?q=60"
              alt="Banner Slide"
              className="w-full h-full object-cover block"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item rounded-[12px] overflow-hidden h-40 sm:h-56 md:h-72 lg:h-80 xl:h-96">
            <img
              src="https://rukminim2.flixcart.com/www/2140/1540/promos/15/09/2023/9b08f194-51e5-4e6a-a052-f5f91d75b8a0.jpg?q=60"
              alt="Banner Slide"
              className="w-full h-full object-cover block"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item rounded-[12px] overflow-hidden h-40 sm:h-56 md:h-72 lg:h-80 xl:h-96">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/Img25/Consumables/HPC/Jupiter/Phase1/GW/Revised/Revised_Unrec_PC_Hero_3000x1200._CB799263776_.png"
              alt="Banner Slide"
              className="w-full h-full object-cover block"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;

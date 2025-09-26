import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-4">
      <div className="container">
        <Swiper
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[10px] overflow-hidden">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Jupiter/hero/desktops/UNREC/PC_3000X1200_Unrec_LIVE_ASIN_Headphones._CB799215974_.jpg"
                alt="Banner Slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[10px] overflow-hidden">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2025/Jupiter25/GW/ME/UR/D298880126_IN_WLA_Jupiter_Hero_Banners_Unrec_PC_PB_LIVE_ASIN_3000x1200._CB800959465_.jpg"
                alt="Banner Slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[10px] overflow-hidden">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/Img25/Consumables/HPC/Jupiter/Phase1/GW/Revised/Revised_Unrec_PC_Hero_3000x1200._CB799263776_.png"
                alt="Banner Slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;

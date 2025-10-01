import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={12}
        navigation={true}
        loop={false}
        grabCursor={true}
        watchOverflow={true}
        breakpoints={{
          0: { slidesPerView: 2.2, spaceBetween: 10 },
          480: { slidesPerView: 3.2, spaceBetween: 10 },
          640: { slidesPerView: 4.2, spaceBetween: 12 },
          768: { slidesPerView: 5.2, spaceBetween: 12 },
          1024: { slidesPerView: 6.2, spaceBetween: 12 },
        }}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
          <BannerBox
            img="https://www.jiomart.com/images/cms/aw_rbslider/slides/1758279455_632x368-Budget-Buys.jpg?im=Resize=(768,448)"
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img="https://www.jiomart.com/images/cms/aw_rbslider/slides/1758279455_632x368-Budget-Buys.jpg?im=Resize=(768,448)"
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img="https://www.jiomart.com/images/cms/aw_rbslider/slides/1758279455_632x368-Budget-Buys.jpg?im=Resize=(768,448)"
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img="https://www.jiomart.com/images/cms/aw_rbslider/slides/1758279455_632x368-Budget-Buys.jpg?im=Resize=(768,448)"
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img="https://www.jiomart.com/images/cms/aw_rbslider/slides/1758279455_632x368-Budget-Buys.jpg?im=Resize=(768,448)"
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img="https://www.jiomart.com/images/cms/aw_rbslider/slides/1758279455_632x368-Budget-Buys.jpg?im=Resize=(768,448)"
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img="https://www.jiomart.com/images/cms/aw_rbslider/slides/1758279455_632x368-Budget-Buys.jpg?im=Resize=(768,448)"
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img="https://www.jiomart.com/images/cms/aw_rbslider/slides/1758279455_632x368-Budget-Buys.jpg?im=Resize=(768,448)"
            link={"/"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;

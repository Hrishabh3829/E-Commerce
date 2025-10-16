import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerBoxV2 from "../bannerBoxV2";

const AdsBannerSliderV2 = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={12}
        navigation={true}
        grabCursor={true}
        watchOverflow={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
            title="Samsung Gear Camera"
            price="₹120"
            link="/"
            linkText="SHOP NOW"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="right"
            image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
            title="Samsung Gear Camera"
            price="₹120"
            link="/"
            linkText="SHOP NOW"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="right"
            image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
            title="Samsung Gear Camera"
            price="₹120"
            link="/"
            linkText="SHOP NOW"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
            title="Samsung Gear Camera"
            price="₹120"
            link="/"
            linkText="SHOP NOW"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="right"
            image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
            title="Samsung Gear Camera"
            price="₹120"
            link="/"
            linkText="SHOP NOW"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2
            info="left"
            image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
            title="Samsung Gear Camera"
            price="₹120"
            link="/"
            linkText="SHOP NOW"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSliderV2;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@mui/material/Button";
import "./style.css";

const HomeSliderV2 = () => {
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="HomeSliderV2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" />

            <div className="info absolute top-0 right-0 w-[50%] h-[100%] z-50 p-8 flex flex-col items-center justify-center">
              <h4 className="w-full text-left text-gray-700">
                Saving Days Sale
              </h4>

              <h2 className="w-full text-gray-900">
                Buy Modern Chair in Black Color
              </h2>

              <h3 className="flex items-center gap-3 w-full mt-3 mb-3 text-gray-800 text-left">
                Starting At Only{" "}
                <span className="text-red-400">₹50</span>
              </h3>

              <div className="w-full mt-auto mb-6 _btn">
                <Button className="btn-org">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />
            <div className="info absolute top-0 right-0 w-[50%] h-[100%] z-50 p-8 flex flex-col items-center justify-center">
              <h4 className="w-full text-left text-gray-700">
                Saving Days Sale
              </h4>

              <h2 className="w-full text-gray-900">
                Women Solid Round Green T-Shirt
              </h2>

              <h3 className="flex items-center gap-3 w-full mt-3 mb-3 text-gray-800 text-left">
                Starting At Only{" "}
                <span className="text-red-400">₹30</span>
              </h3>

              <div className="w-full mt-auto mb-6 _btn">
                <Button className="btn-org _btn">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSliderV2;

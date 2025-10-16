import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "./style.css";

const HomeSlider = () => {
  return (
    <div className="homeSlider">
      <Swiper
        loop={true}
        spaceBetween={10}
        autoHeight={true}
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
          <div className="item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/f024a357a9f3966f.jpeg?q=60"
              alt="Banner Slide"
              className=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1759733823_Brands_You.jpg?im=Resize=(2368,400)"
              alt="Banner Slide"
              className=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/619ee07223539121.jpeg?q=60"
              alt="Banner Slide"
              className=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/be6cd4b49d0c13f6.jpeg?q=60"
              alt="Banner Slide"
              className=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;

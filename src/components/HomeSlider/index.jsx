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
              src="https://serviceapi.spicezgold.com/download/1759938778050_30745.jpg"
              alt="Banner Slide"
              className=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img
              src="https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg"
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

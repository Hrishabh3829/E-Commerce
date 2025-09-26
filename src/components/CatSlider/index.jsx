import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaTshirt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider">
      <div className="container">
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3  bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <div className="w-[80px] h-[80px] rounded-full bg-gray-100 flex items-center justify-center">
                  <FaTshirt className="text-gray-700" size={36} />
                </div>
                <h3 className="text-[15px] font-[500] mt-3">Dress</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/508/508786.png"
                  alt="Shoes"
                  className="w-[80px] h-[80px] object-cover rounded-full"
                />
                <h3 className="text-[15px] font-[500] mt-3">Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/508/508786.png"
                  alt="Shoes"
                  className="w-[80px] h-[80px] object-cover rounded-full"
                />
                <h3 className="text-[15px] font-[500] mt-3">Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/508/508786.png"
                  alt="Shoes"
                  className="w-[80px] h-[80px] object-cover rounded-full"
                />
                <h3 className="text-[15px] font-[500] mt-3">Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/508/508786.png"
                  alt="Shoes"
                  className="w-[80px] h-[80px] object-cover rounded-full"
                />
                <h3 className="text-[15px] font-[500] mt-3">Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/508/508786.png"
                  alt="Shoes"
                  className="w-[80px] h-[80px] object-cover rounded-full"
                />
                <h3 className="text-[15px] font-[500] mt-3">Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/508/508786.png"
                  alt="Shoes"
                  className="w-[80px] h-[80px] object-cover rounded-full"
                />
                <h3 className="text-[15px] font-[500] mt-3">Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;

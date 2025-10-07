import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaTshirt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider">
      <div className="container">
        <Swiper
          slidesPerView={6}
          spaceBetween={12}
          navigation={true}
          loop={false}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 2.2, spaceBetween: 10 },
            480: { slidesPerView: 3.2, spaceBetween: 10 },
            640: { slidesPerView: 4.2, spaceBetween: 12 },
            768: { slidesPerView: 5.2, spaceBetween: 12 },
            1024: { slidesPerView: 6.2, spaceBetween: 12 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item">
                <div className="catThumb">
                  <FaTshirt size={36} className="text-gray-700" />
                </div>
                <h3>Dress</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item">
                <div className="catThumb">
                  <img src="https://cdn-icons-png.flaticon.com/512/508/508786.png" alt="Shoes" />
                </div>
                <h3>Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item">
                <div className="catThumb">
                  <img src="https://cdn-icons-png.flaticon.com/512/508/508786.png" alt="Shoes" />
                </div>
                <h3>Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item">
                <div className="catThumb">
                  <img src="https://cdn-icons-png.flaticon.com/512/508/508786.png" alt="Shoes" />
                </div>
                <h3>Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item">
                <div className="catThumb">
                  <img src="https://cdn-icons-png.flaticon.com/512/508/508786.png" alt="Shoes" />
                </div>
                <h3>Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item">
                <div className="catThumb">
                  <img src="https://cdn-icons-png.flaticon.com/512/508/508786.png" alt="Shoes" />
                </div>
                <h3>Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item">
                <div className="catThumb">
                  <img src="https://cdn-icons-png.flaticon.com/512/508/508786.png" alt="Shoes" />
                </div>
                <h3>Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item">
                <div className="catThumb">
                  <img src="https://cdn-icons-png.flaticon.com/512/508/508786.png" alt="Shoes" />
                </div>
                <h3>Shoes</h3>
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

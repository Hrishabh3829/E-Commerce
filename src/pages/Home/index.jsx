import React from "react";
import "./style.css";
import { LiaShippingFastSolid } from "react-icons/lia";
import HomeCatSlider from "../../components/CatSlider";
import HomeSlider from "../../components/HomeSlider";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import ProductSlider from "../../components/ProductSlider";
import BlogItem from "../../components/BlogItem";
import Footer from "../../Footer";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
  <section className="bg-white py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="section-heading text-[20px] mt-4">
                Popular Products
              </h2>
              <p className="text-[14px] font-[400]">
                Don’t miss the current offers until the end of March.
              </p>
            </div>
            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="FASHION" />
                <Tab label="GROCERIES" />
                <Tab label="ELECTRONICS" />
                <Tab label="BAGS" />
                <Tab label="BEAUTY" />
                <Tab label="WELLNESS" />
                <Tab label="MORE PRODUCTS" />
                <Tab label="FOOTWEAR" />
                <Tab label="FOOTWEAR" />
                <Tab label="FOOTWEAR" />
              </Tabs>
            </div>
          </div>
          <ProductSlider items={6} />
        </div>
      </section>
      <section className="py-4 pt-2 bg-white">
        <div className="container">
          <div className="freeShipping w-full py-4 p-4  border-2 border-[#ff5252] flex items-center justify-between rounded-md">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping{" "}
              </span>
            </div>

            <div className="col2 ">
              <p className="mb-0 font-[500]">
                Free Delivery Now On Your First Order and over ₹200
              </p>
            </div>
            <p className="font-bold text-[25px]">- Only ₹200*</p>
          </div>

          <AdsBannerSlider items={5} />
        </div>
      </section>
      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="section-heading text-[20px] mt-4">Latest Products</h2>
          <ProductSlider items={6} />
          <div className="latest-products-ads-gap">
            <AdsBannerSlider items={3} />
          </div>
        </div>
      </section>
      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="section-heading text-[20px] mt-4">
            Featured Products
          </h2>
          <ProductSlider items={6} />
          <div className="latest-products-ads-gap">
            <AdsBannerSlider items={2} />
          </div>
        </div>
      </section>
      <section className="py-5 pb-8 pt-0 bg-white blogSection">
        <div className="container">
          <h2 className="section-heading text-[20px] mt-4">From The Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;

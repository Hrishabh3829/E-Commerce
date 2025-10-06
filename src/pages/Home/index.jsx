import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import HomeCatSlider from "../../components/CatSlider";
import HomeSlider from "../../components/HomeSlider";
import AdsBannerSlider from "../../components/AdsBannerSlider";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import ProductSlider from "../../components/ProductSlider";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-bold">Products</h2>
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
          <ProductSlider item={5} />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container">
          <div className="freeShipping w-full py-4 p-4  border-2 border-[#ff5252] flex items-center justify-between rounded-md">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>

            <div className="col2 ">
              <p className="mb-0 font-[500]">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>
            <p className="font-bold text-[25px]">- Only $200*</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>
      <br /> <br /> <br /> <br /> <br /> <br />
    </>
  );
};

export default Home;

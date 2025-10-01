import { LiaShippingFastSolid } from "react-icons/lia";
import HomeCatSlider from "../../components/CatSlider";
import HomeSlider from "../../components/HomeSlider";
import AdsBannerSlider from "../../components/AdsBannerSlider";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
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

          <AdsBannerSlider items={4}/>
        </div>
      </section>
      <br /> <br /> <br /> <br /> <br /> <br />
    </>
  );
};

export default Home;

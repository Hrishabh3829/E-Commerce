import { Button } from "@mui/material";
import { useState } from "react";
import { GoRocket } from "react-icons/go";
import { LiaAngleDownSolid } from "react-icons/lia";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";
import "./style.css";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };
  

  return (
    <>
      <nav>
  <div className=" container flex flex-col lg:flex-row items-center justify-end gap-3 lg:gap-8">
          <div className="col_1 w-full lg:w-[20%]">
            <Button
              className="!text-black !font-[700] gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" />
              <span className="!font-[700]">Shop By Categories</span>
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold " />
            </Button>
          </div>
          <div className="col_2 w-full lg:w-[60%] min-w-0">
            <ul className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 lg:gap-4 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[700]">
                  <Button className="link transition !font-[700] !text-[rgba(0,0,0,0.8)] hover:!text-[#90ee90] !py-4 ">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[700]">
                  <Button className="link transition !font-[700] !text-[rgba(0,0,0,0.8)] hover:!text-[#90ee90] !py-4">
                    Fashion
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all ">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] !font-[700] w-full !text-left !justify-start !rounded-none">
                          Men
                        </Button>
                      </Link>
                      <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all ">
                        <ul>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] !font-[700] w-full !text-left !justify-start !rounded-none">
                                Shirt
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] !font-[700] w-full !text-left !justify-start !rounded-none">
                                T-Shirt
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] !font-[700] w-full !text-left !justify-start !rounded-none">
                                Pant
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] !font-[700] w-full !text-left !justify-start !rounded-none">
                                Jeans
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] !font-[700] w-full !text-left !justify-start !rounded-none">
                                Sandals
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] !font-[700] w-full !text-left !justify-start !rounded-none">
                                Shoes
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] !font-[700] w-full !text-left !justify-start !rounded-none">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] !font-[700] w-full !text-left !justify-start !rounded-none">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] !font-[700] w-full !text-left !justify-start !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] !font-[700] w-full !text-left !justify-start !rounded-none">
                          Boys
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] !font-[700] w-full !text-left !justify-start !rounded-none">
                          Aunty
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[700]">
                  <Button className="link transition !font-[700] !text-[rgba(0,0,0,0.8)] hover:!text-[#90ee90] !py-4 ">
                    Electronics{" "}
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[700]">
                  <Button className="link transition !font-[700] !text-[rgba(0,0,0,0.8)] hover:!text-[#90ee90]  !py-4">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[700]">
                  <Button className="link transition !font-[700] !text-[rgba(0,0,0,0.8)] hover:!text-[#90ee90] !py-4 ">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[700]">
                  <Button className="link transition !font-[700] !text-[rgba(0,0,0,0.8)] hover:!text-[#90ee90] !py-4 ">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[700]">
                  <Button className="link transition !font-[700] !text-[rgba(0,0,0,0.8)] hover:!text-[#90ee90]  !py-4">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[700]">
                  <Button className="link transition !font-[700] !text-[rgba(0,0,0,0.8)] hover:!text-[#90ee90] !py-4 ">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_3 w-full lg:w-[20%] mt-2 lg:mt-0 shrink-0">
            <p className="text-[13px] lg:text-[14px] font-[700] flex items-center gap-3 mb-0 mt-0 justify-center lg:justify-end whitespace-nowrap">
              <GoRocket className="text-[18px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;

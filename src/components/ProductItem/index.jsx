import { Link } from "react-router-dom";
import "../ProductItem/style.css";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { MdZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
const ProductItem = () => {
  return (
    <div className="productItem group relative shadow-lg rounded-md overflow-hidden border-2 border-[rgba(0,0,0,0.1)]">
      <div className="imgWrapper w-[100%] overflow-hidden rounded-md relative">
        <Link to="/">
          <div className="img h-[250px] overflow-hidden">
            <img
              src="https://www.jiomart.com/images/product/original/494423029/apple-iphone-16-plus-128-gb-white-digital-o494423029-p609946187-0-202409111621.jpeg?im=Resize=(310,310)"
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
            <img
              src="https://serviceapi.spicezgold.com/download/1742446875533_app2.jpeg"
              className="w-full transition-all duration-300 h-full object-cover ease-out group-hover:scale-[1.03] absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>
        </Link>
        <div className="actions absolute top-3 right-3 z-20 flex flex-col gap-2 w-[44px] opacity-0 -translate-y-2 pointer-events-none transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
          <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-white shadow hover:shadow-md !text-black hover:!bg-[#90ee90] hover:text-white flex items-center justify-center">
            <MdZoomOutMap className="text-[18px]" />
          </Button>
          <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-white shadow hover:shadow-md !text-black hover:!bg-[#90ee90] hover:text-white flex items-center justify-center">
            <IoGitCompareOutline className="text-[18px]" />
          </Button>
          <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-white shadow hover:shadow-md !text-black hover:!bg-[#90ee90] hover:text-white flex items-center justify-center">
            <FaRegHeart className="text-[18px]" />
          </Button>
        </div>
      </div>
      <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-red-400 text-white rounded-lg p-1 text-[12px] font-[500]">
        10%
      </span>

      <div className="info p-3">
        <h6 className="text-[13px]">
          <Link to="/" className="link transition-all">
            Iphone
          </Link>
        </h6>
        <h3 className="text-[13px] title mt-1 font-[500] mb-1 text-[#000]">
          <Link to="/" className="link transition-all">
            Cosmic orange Iphone
          </Link>
        </h3>
        <div className="flex items-center gap-1 mt-1">
          <Rating
            name="product-rating"
            defaultValue={4}
            size="small"
            readOnly
          />
          <span className="text-[11px] text-gray-500">(4.0)</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            ₹20
          </span>
          <span className="oldPrice text-red-400 text-[15px] font-[600]">
            ₹10
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

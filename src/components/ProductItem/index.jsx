import { Link } from "react-router-dom";
import "../ProductItem/style.css";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { MdZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
const ProductItem = () => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-2 border-[rgba(0,0,0,0.1)">
      <div className="imgWrapper w-[100%] h-[250px] overflow-hidden rounded-md relative">
        <img
          src="https://www.jiomart.com/images/product/original/494423029/apple-iphone-16-plus-128-gb-white-digital-o494423029-p609946187-0-202409111621.jpeg?im=Resize=(310,310)"
          className="w-full"
        />
        {/* <img
          src="https://www.jiomart.com/images/product/original/494734205/evokk-india-bedsheet-for-single-bed-ultra-soft-microfiber-with-pillow-cover-printed-single-size-sheet-for-home-hotel-resort-guest-house-50x87-inches-sky-flower-product-images-o494734205-p612403762-0-202509041706.jpg?im=Resize=(310,310)"
          className="w-full"
        /> */}
      </div>
      <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-red-400 text-white rounded-lg p-1 text-[12px] font-[500]">
        10%
      </span>
      <div className="actions absolute top-[15px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px]">
        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#90ee90] hover:text-white group">
          <MdZoomOutMap className="text-[18px] text-black group-hover:text-white" />
        </Button>
        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#90ee90] hover:text-white group">
          <IoGitCompareOutline className="text-[18px] text-black group-hover:text-white" />
        </Button>
        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#90ee90] hover:text-white group">
          <FaRegHeart className="text-[18px] text-black group-hover:text-white" />
        </Button>
      </div>

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

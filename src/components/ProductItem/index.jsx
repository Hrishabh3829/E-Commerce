import { Link } from "react-router-dom";
import "../ProductItem/style.css";
import Rating from "@mui/material/Rating";
const ProductItem = () => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-2 border-[rgba(0,0,0,0.1)">
      <div className="imgWrapper w-[100%] h-[250px] overflow-hidden rounded-md">
        <img
          src="https://www.jiomart.com/images/product/original/494423029/apple-iphone-16-plus-128-gb-white-digital-o494423029-p609946187-0-202409111621.jpeg?im=Resize=(310,310)"
          className="w-full"
        />
        {/* <img
          src="https://www.jiomart.com/images/product/original/494734205/evokk-india-bedsheet-for-single-bed-ultra-soft-microfiber-with-pillow-cover-printed-single-size-sheet-for-home-hotel-resort-guest-house-50x87-inches-sky-flower-product-images-o494734205-p612403762-0-202509041706.jpg?im=Resize=(310,310)"
          className="w-full"
        /> */}
      </div>
      <div className="info p-3]">
        <h6 className="text-[13px]">
          <Link to="/" className="link transition-all">
            Iphone
          </Link>
        </h6>
        <h3 className="text-[14px] title mt-1 font-[500] mb-1 text-[#000]">
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
      </div>
    </div>
  );
};

export default ProductItem;

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { green } from "@mui/material/colors";
import "../SideBar/style.css";
import { Collapse } from "react-collapse";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import rangeSlider from "range-slider-input";
import "range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

const Sidebar = () => {
  // Allow only one filter open at a time via a single openKey
  const [openKey, setOpenKey] = useState("category"); // 'category' | 'availability' | 'size' | 'rating' | null
  const isOpenCategoryFilter = openKey === "category";
  const isOpenAvailabilityFilter = openKey === "availability";
  const isOpenSizeFilter = openKey === "size";
  const isOpenRatingFilter = openKey === "rating";

  const priceRangeRef = useRef(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    if (priceRangeRef.current) {
      const slider = rangeSlider(priceRangeRef.current, {
        min: 0,
        max: 1000,
        step: 10,
        value: priceRange,
        onInput: (value) => {
          setPriceRange(value);
        },
      });

      return () => {
        // Cleanup if needed
        if (priceRangeRef.current) {
          priceRangeRef.current.innerHTML = "";
        }
      };
    }
  }, []);

  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="w-full flex items-center">
          SHOP BY CATEGORY
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            aria-expanded={isOpenCategoryFilter}
            onClick={() =>
              setOpenKey((prev) => (prev === "category" ? null : "category"))
            }
          >
            <FaAngleDown
              style={{
                transform: isOpenCategoryFilter
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            />
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll">
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="Fashion"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="Electronics"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="Bags"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="Footwear"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="Groceries"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="Beauty"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="Wellness"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="Jwellery"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box">
        <h3 className="w-full flex items-center">
          AVAILABILITY
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            aria-expanded={isOpenAvailabilityFilter}
            onClick={() =>
              setOpenKey((prev) =>
                prev === "availability" ? null : "availability"
              )
            }
          >
            <FaAngleDown
              style={{
                transform: isOpenAvailabilityFilter
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            />
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvailabilityFilter}>
          <div className="scroll">
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="Available (17)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="In Stock (10) "
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="Not Available (1)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box">
        <h3 className="w-full flex items-center">
          SIZE
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            aria-expanded={isOpenSizeFilter}
            onClick={() =>
              setOpenKey((prev) => (prev === "size" ? null : "size"))
            }
          >
            <FaAngleDown
              style={{
                transform: isOpenSizeFilter ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            />
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll">
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="XS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="S"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="M"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="L"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="XL"
              className="w-full"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    color: green[600],
                    "&.Mui-checked": { color: green[500] },
                  }}
                />
              }
              label="XXL"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Filter By Price
        </h3>
        <div ref={priceRangeRef} className="range-slider-wrapper"></div>
        <div className="flex pt-1 pb-1 priceRange">
          <span>
            From: <strong className="text-[#000]">Rs: {priceRange[0]}</strong>
          </span>
          <span className="ml-auto">
            To: <strong className="text-[#000]">Rs: {priceRange[1]}</strong>
          </span>
        </div>
      </div>
      <div className="box">
        <h3 className="w-full flex items-center">
          FILTER BY RATING
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            aria-expanded={isOpenRatingFilter}
            onClick={() =>
              setOpenKey((prev) => (prev === "rating" ? null : "rating"))
            }
          >
            <FaAngleDown
              style={{
                transform: isOpenRatingFilter
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            />
          </Button>
        </h3>
        <Collapse isOpened={isOpenRatingFilter}>
          <div className="rating-filter-wrapper">
            <div
              className={`rating-item ${selectedRating === 5 ? "active" : ""}`}
              onClick={() => setSelectedRating(selectedRating === 5 ? null : 5)}
            >
              <Rating
                name="rating-5"
                value={5}
                size="small"
                readOnly
                sx={{ color: "#FFD700" }}
              />
              
            </div>
            <div
              className={`rating-item ${selectedRating === 4 ? "active" : ""}`}
              onClick={() => setSelectedRating(selectedRating === 4 ? null : 4)}
            >
              <Rating
                name="rating-4"
                value={4}
                size="small"
                readOnly
                sx={{ color: "#FFD700" }}
              />
              <span className="rating-label">& Up</span>
            </div>
            <div
              className={`rating-item ${selectedRating === 3 ? "active" : ""}`}
              onClick={() => setSelectedRating(selectedRating === 3 ? null : 3)}
            >
              <Rating
                name="rating-3"
                value={3}
                size="small"
                readOnly
                sx={{ color: "#FFD700" }}
              />
              <span className="rating-label">& Up</span>
            </div>
            <div
              className={`rating-item ${selectedRating === 2 ? "active" : ""}`}
              onClick={() => setSelectedRating(selectedRating === 2 ? null : 2)}
            >
              <Rating
                name="rating-2"
                value={2}
                size="small"
                readOnly
                sx={{ color: "#FFD700" }}
              />
              <span className="rating-label">& Up</span>
            </div>
            <div
              className={`rating-item ${selectedRating === 1 ? "active" : ""}`}
              onClick={() => setSelectedRating(selectedRating === 1 ? null : 1)}
            >
              <Rating
                name="rating-1"
                value={1}
                size="small"
                readOnly
                sx={{ color: "#FFD700" }}
              />
              <span className="rating-label">& Up</span>
            </div>
          </div>
        </Collapse>
      </div>
    </aside>
  );
};

export default Sidebar;

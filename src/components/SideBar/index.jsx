import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { green } from "@mui/material/colors";
import "../SideBar/style.css";
import { Collapse } from "react-collapse";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

const Sidebar = () => {
  // Allow only one filter open at a time via a single openKey
  const [openKey, setOpenKey] = useState("category"); // 'category' | 'availability' | null
  const isOpenCategoryFilter = openKey === "category";
  const isOpenAvailabilityFilter = openKey === "availability";

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
    </aside>
  );
};

export default Sidebar;

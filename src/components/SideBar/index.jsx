import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { green } from "@mui/material/colors";
import "../SideBar/style.css"

const Sidebar = () => {
  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3>SHOP BY CATEGORY</h3>
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
      </div>
    </aside>
  );
};

export default Sidebar;

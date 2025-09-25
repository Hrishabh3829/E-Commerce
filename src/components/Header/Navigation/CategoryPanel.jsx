import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Button, IconButton } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import "../Navigation/style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMinusSquare } from "react-icons/fi";

const CategoryPanel = ({ isOpenCatPanel, setIsOpenCatPanel }) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const categories = [
    {
      title: "Fashion",
      sub: {
        title: "Apparel",
        items: [
          "Smart Tablet",
          "Crepe T-shirt",
          "Leather Watch",
          "Rolling Diamond",
          "Gold",
        ],
      },
    },
    {
      title: "Electronics",
      sub: {
        title: "Devices",
        items: ["Smartphone", "Laptop", "Headphones", "Camera", "Drone"],
      },
    },
  ];

  const toggleDrawer = (newOpen) => () => {
    setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };
  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  const DrawerContent = (
    <Box sx={{ width: 260 }} role="presentation" className="categoryPanel">
      {/* Top header */}
      <div className="flex items-center justify-between px-4 pt-5 pb-3 border-b border-gray-200">
        <h3 className="panel-title text-[16px] font-black tracking-wide m-0 cursor-pointer">
          Shop by Categories
        </h3>
        <IconButton
          size="small"
          onClick={toggleDrawer(false)}
          aria-label="close"
        >
          <IoCloseSharp className="text-[20px]" />
        </IconButton>
      </div>

      {/* Categories */}
      <div className="scroll">
        <ul className="w-full space-y-1 mt-2">
          {categories.map((cat, idx) => {
            const openTop = submenuIndex === idx;
            const innerIdx = idx; // one inner submenu per category, reuse idx
            const openInner = innerSubmenuIndex === innerIdx;
            const sortedItems = [...cat.sub.items].sort((a, b) =>
              b.localeCompare(a)
            );
            return (
              <li
                key={cat.title}
                className="list-none relative bg-white rounded-md border border-gray-200 overflow-hidden"
              >
                <div className="flex items-center">
                  <Button className="w-full !text-left !justify-start !text-[14px] !font-semibold !text-gray-800 hover:!bg-gray-50">
                    {cat.title}
                  </Button>
                  {openTop ? (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[12px] cursor-pointer text-gray-600 hover:text-gray-800"
                      onClick={() => openSubmenu(idx)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[12px] cursor-pointer text-gray-600 hover:text-gray-800"
                      onClick={() => openSubmenu(idx)}
                    />
                  )}
                </div>

                {openTop && (
                  <ul className="submenu w-full pt-0 pb-1 bg-gray-50 space-y-1 pl-2">
                    <li className="list-none relative bg-white rounded border border-gray-200 overflow-hidden">
                      <Button className="w-full !text-left !justify-start !px-3 !py-[6px] !text-[13px] !font-semibold !text-gray-700 hover:!bg-gray-50">
                        {cat.sub.title}
                      </Button>
                      {openInner ? (
                        <FiMinusSquare
                          className="absolute top-[10px] right-[12px] cursor-pointer text-gray-600 hover:text-gray-800"
                          onClick={() => openInnerSubmenu(innerIdx)}
                        />
                      ) : (
                        <FaRegSquarePlus
                          className="absolute top-[10px] right-[12px] cursor-pointer text-gray-600 hover:text-gray-800"
                          onClick={() => openInnerSubmenu(innerIdx)}
                        />
                      )}

                      {openInner && (
                        <ul className="submenu w-full pt-1 pb-1 space-y-[2px] pl-6 !mx-12">
                          {sortedItems.map((item) => (
                            <li key={item} className="list-none relative">
                              <Link
                                to="/"
                                className="link block w-full px-5 py-1 text-[12.5px] text-gray-600 hover:text-[#ff5252]"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer anchor="left" open={isOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerContent}
    </Drawer>
  );
};

export default CategoryPanel;

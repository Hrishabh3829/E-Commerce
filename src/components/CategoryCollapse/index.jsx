import Button from "@mui/material/Button";
import { useState } from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./style.css";

const defaultCategories = [
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

const CategoryCollapse = ({ categories = defaultCategories }) => {
  const [openTopIndex, setOpenTopIndex] = useState(null);
  const [openInnerIndex, setOpenInnerIndex] = useState(null);

  const toggleTop = (idx) => {
    setOpenTopIndex((prev) => (prev === idx ? null : idx));

    setOpenInnerIndex(null);
  };

  const toggleInner = (idx) => {
    setOpenInnerIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="categoryCollapse">
      <div className="scroll">
        <ul className="w-full space-y-1 mt-2">
          {categories.map((cat, idx) => {
            const openTop = openTopIndex === idx;
            const openInner = openInnerIndex === idx;
            const items = Array.isArray(cat?.sub?.items) ? cat.sub.items : [];

            return (
              <li
                key={cat.title}
                className="list-none relative bg-white rounded-md border border-gray-200 overflow-hidden"
              >
                <div className="flex items-center">
                  <Button
                    className="w-full !text-left !justify-start !text-[14px] !font-semibold !text-gray-800 hover:!bg-gray-50"
                    aria-expanded={openTop}
                    onClick={() => toggleTop(idx)}
                  >
                    {cat.title}
                  </Button>
                  {openTop ? (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[12px] cursor-pointer text-gray-600 hover:text-gray-800"
                      onClick={() => toggleTop(idx)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[12px] cursor-pointer text-gray-600 hover:text-gray-800"
                      onClick={() => toggleTop(idx)}
                    />
                  )}
                </div>

                {openTop && (
                  <ul className="submenu w-full pt-0 pb-1 bg-gray-50 space-y-1 pl-2">
                    {cat?.sub?.title && (
                      <li className="list-none relative bg-white rounded border border-gray-200 overflow-hidden">
                        <Button
                          className="w-full !text-left !justify-start !px-3 !py-[6px] !text-[13px] !font-semibold !text-gray-700 hover:!bg-gray-50"
                          aria-expanded={openInner}
                          onClick={() => toggleInner(idx)}
                        >
                          {cat.sub.title}
                        </Button>
                        {openInner ? (
                          <FiMinusSquare
                            className="absolute top-[10px] right-[12px] cursor-pointer text-gray-600 hover:text-gray-800"
                            onClick={() => toggleInner(idx)}
                          />
                        ) : (
                          <FaRegSquarePlus
                            className="absolute top-[10px] right-[12px] cursor-pointer text-gray-600 hover:text-gray-800"
                            onClick={() => toggleInner(idx)}
                          />
                        )}

                        {openInner && items.length > 0 && (
                          <ul className="submenu w-full pt-1 pb-1 space-y-[2px] pl-6">
                            {items.map((item) => (
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
                    )}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryCollapse;

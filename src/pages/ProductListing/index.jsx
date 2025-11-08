import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Sidebar from "../../../src/components/SideBar";
import ProductItem from "../../components/ProductItem";
import Button from "@mui/material/Button";
import { IoGridSharp } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { useState } from "react";
import "./style.css";

const ProductListing = () => {
  const [isItemView, setIsItemView] = useState("grid");
  return (
    <section className="product-listing-section">
      <div className="container breadcrumb-container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" className="link">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/" className="link">
            Fashion
          </Link>
        </Breadcrumbs>
      </div>

      <div className="listing-content-wrapper">
        <div className="container listing-container">
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>

          <div className="right-content">
            <div className="listing-toolbar">
              <div className="toolbar-left">
                <Button
                  className={`view-toggle-btn ${
                    isItemView === "grid" ? "active" : ""
                  }`}
                  onClick={() => setIsItemView("grid")}
                >
                  <IoGridSharp />
                </Button>
                <Button
                  className={`view-toggle-btn ${
                    isItemView === "list" ? "active" : ""
                  }`}
                  onClick={() => setIsItemView("list")}
                >
                  <BsList />
                </Button>
                <span className="results-info">Showing 1-12 of 45 results</span>
              </div>
              <div className="toolbar-right">
                <select className="sort-dropdown">
                  <option value="featured">Sort by: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            <div
              className={
                isItemView === "grid" ? "products-grid" : "products-list"
              }
            >
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;

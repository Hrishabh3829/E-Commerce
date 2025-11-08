import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Sidebar from "../../../src/components/SideBar";
import ProductItem from "../../components/ProductItem";

const ProductListing = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>
      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <Sidebar />
          </div>

          <div className="rightContent w-[80%]">
            <div className="grid grid-cols-4 md:grid-cols-2">
              <ProductItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;

import { IoIosArrowForward, IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import "./style.css";

const BlogItem = () => {
  return (
    <div className="blogItem">
      <div className="imgWrapper overflow-hidden rounded-md cursor-pointer">
        <img
          src="https://serviceapi.spicezgold.com/download/1759824102892_ryadh.jpg"
          alt="blog image"
        />
        <span className="dateBadge">
          <IoMdTime /> 8 OCTOBER, 2025
        </span>
      </div>
      <div className="info">
        <h2>
          <Link to="/" className="link">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </Link>
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          fugit neque sed et, nemo quae eaque aspernatur accusamus beatae,
          corporis dolores sint eius est inventore recusandae laboriosam facilis
          laborum quisquam.
        </p>
        <Link className="readMore flex items-center gap-1" to="/">
          Read More
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;

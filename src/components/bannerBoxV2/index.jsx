import { Link } from "react-router-dom";
import "../bannerBoxV2/style.css";

const BannerBoxV2 = (props) => {
  const imageSrc =
    props.image ||
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg";
  const infoSide = props.info === "right" ? "right" : "left";

  const title = props.title || "Samsung Gear VR Camera";
  const price = props.price || "₹120";
  const link = props.link || "/";
  const linkText = props.linkText || "SHOP NOW";

  return (
    <div className="BannerBoxV2">
      <img src={imageSrc} alt="Banner" />
      <div className={`info ${infoSide}`}>
        <h2>{title}</h2>
        <span>{price}</span>
        <div className="cta">
          <Link to={link} className="shopNow link">
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBoxV2;

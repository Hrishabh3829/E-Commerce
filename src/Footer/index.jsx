import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import { BiSupport } from "react-icons/bi";
import { BsWallet2 } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";
import { LiaGiftSolid, LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footerTop">
            <div className="feature">
              <LiaShippingFastSolid />
              <h3>Free Shipping</h3>
              <p>For all orders over ₹50</p>
            </div>
            <div className="feature">
              <PiKeyReturnLight />
              <h3>30 Days Return</h3>
              <p>For an Exchange Product</p>
            </div>
            <div className="feature">
              <BsWallet2 />
              <h3>Secured Payment</h3>
              <p>Payments Cards Accepted</p>
            </div>
            <div className="feature">
              <LiaGiftSolid />
              <h3>Special Gifts</h3>
              <p>Our First Product Order</p>
            </div>
            <div className="feature">
              <BiSupport />
              <h3>Support 24/7</h3>
              <p>Contact us Anytime</p>
            </div>
          </div>
          <hr className="separator" />
          <div className="footerMain">
            <div className="col contact">
              <h2>Contact Us</h2>
              <p>
                Classyshop - Mega Super Store <br />
                507-Union Trade Centre, France
              </p>
              <Link to="mailto:sales@yourcompany.com" className="link">
                sales@yourcompany.com
              </Link>
              <span className="contactPhone">(+91) 95555 42734</span>
              <div className="chatBox">
                <IoChatboxOutline />
                <span>
                  Online Chat <br /> Get Expert Help
                </span>
              </div>
            </div>
            <div className="linksWrap">
              <div className="linksCol">
                <h2>Products</h2>
                <ul>
                  <li><Link to="/" className="link">Price drop</Link></li>
                  <li><Link to="/" className="link">New Products</Link></li>
                  <li><Link to="/" className="link">Best Sales</Link></li>
                  <li><Link to="/" className="link">Contact us</Link></li>
                  <li><Link to="/" className="link">Sitemap</Link></li>
                  <li><Link to="/" className="link">Stores</Link></li>
                </ul>
              </div>
              <div className="linksCol">
                <h2>Our Company</h2>
                <ul>
                  <li><Link to="/" className="link">Delivery</Link></li>
                  <li><Link to="/" className="link">Legal Notice</Link></li>
                  <li><Link to="/" className="link">T&amp;C</Link></li>
                  <li><Link to="/" className="link">About us</Link></li>
                  <li><Link to="/" className="link">Secure Payement</Link></li>
                  <li><Link to="/" className="link">Login</Link></li>
                </ul>
              </div>
            </div>
            <div className="newsletter">
              <h2>Subscribe to Newsletter</h2>
              <p className="desc">Subscribe to our latest newsletter to get news about special discounts.</p>
              <form>
                <input type="email" placeholder="Your Email Address" />
                <Button type="submit" className="subscribeBtn btn-org">Subscribe</Button>
                <FormControlLabel
                  className="terms"
                  control={<Checkbox  sx={{ color: red[800], '&.Mui-checked': { color: red[600] } }} />}
                  label="I agree to the terms and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip">
        <div className="container flex items-center justify-between">
          <ul className="socialList">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="group"
              >
                <FaFacebookF className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="group"
              >
                <AiOutlineYoutube className="text-[20px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="group"
              >
                <FaInstagram className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="group"
              >
                <FaPinterestP className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
          </ul>
          <p className="copy">
            ©️2025 - Ecommerce software by Hrishabh
          </p>
          <div className="payments">
            <img src="/master_card.png" alt="image" />
            <img src="/visa.png" alt="image" />
            <img src="/paypal.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

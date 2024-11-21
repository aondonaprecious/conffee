import { ArrowBigLeftIcon, ArrowBigRightDashIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, Phone, TwitchIcon, Twitter } from "lucide-react";
import assets from "../../assets/assets";
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="social-icons">
          <FacebookIcon className="icon" />
          <Twitter className="icon" />
          <LinkedinIcon className="icon" />
          <InstagramIcon className="icon" />
        </div>

        <div className="contacts-details">
          <div className="phone">
            <Phone className="icon " />
            <h3>+01234567890</h3>
          </div>

          <div className="email">
            <MailIcon className="icon" />
            <h3>demo@gmail.com</h3>
          </div>
        </div>

        <div className="input-div">
          <input type="text" name="" id="" placeholder="Your Email" />
          <ArrowBigRightDashIcon className="icon-arrow" />
        </div>

        <div className="footer-text">
          <p>
            2020 All Rights Reserved Design by Free Html Templates Distribution
            by ThemeWagon
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

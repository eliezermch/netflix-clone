import { useState } from "react";
import "./footer.css";
import twitterIcon from "../../assets/images/icons/twitter.svg";
import facebookIcon from "../../assets/images/icons/facebook.svg";
import instagramIcon from "../../assets/images/icons/instagram.svg";
import youtubeIcon from "../../assets/images/icons/youtube.svg";

const Footer = () => {
  const [showServiceCode, setShowServiceCode] = useState("Service Code");

  const handleServiceCode = () => {
    setShowServiceCode("123-456");
  };

  return (
    <footer className="footer">
      <div className="footer-social-links__container">
        <a href="https://www.facebook.com/Netflixmx">
          <img
            className="footer-social__image"
            src={facebookIcon}
            alt="Facebook Logo"
          />
        </a>
        <a href="https://www.instagram.com/NetflixLAT/">
          <img
            className="footer-social__image"
            src={instagramIcon}
            alt="Instagram Logo"
          />
        </a>
        <a href="https://twitter.com/netflixLAT">
          <img
            className="footer-social__image"
            src={twitterIcon}
            alt="Twitter Logo"
          />
        </a>
        <a href="https://www.youtube.com/channel/UC5ZiUaIJ2b5dYBYGf5iEUrA">
          <img
            className="footer-social__image"
            src={youtubeIcon}
            alt="Youtube Logo"
          />
        </a>
      </div>
      <div className="footer-info__container">
        <ul className="footer-info-list__grid">
          <li>
            <a href="https://www.netflix.com/browse/subtitles">
              Audios and subtitles
            </a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/privacy">Privacy</a>
          </li>
          <li>
            <a href="https://help.netflix.com/es/contactus">Contact us</a>
          </li>
          <li>
            <a href="https://www.netflix.com/browse/audio-description">
              Audio description
            </a>
          </li>
          <li>
            <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">
              investors
            </a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/notices">legal notices</a>
          </li>
          <li>
            <a href="https://help.netflix.com/es/">Help</a>
          </li>
          <li>
            <a href="https://jobs.netflix.com/">Jobs</a>
          </li>
          <li>
            <a href="">Cookies preferences</a>
          </li>
          <li>
            <a href="https://www.netflix.com/ar/redeem">Gift cards</a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/termsofuse">Terms</a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/corpinfo">
              Corporate information
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-button__container">
        <button onClick={handleServiceCode} className="footer-button">
          {showServiceCode}
        </button>
      </div>
      <span className="footer-span">© 2022 Netflix Clone By Eliezer</span>
    </footer>
  );
};

export { Footer };

import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3><strong>Download Our App</strong></h3>
            <p>Download JShopping App for Android and IOS mobile phones.</p>
            <div className="app-logo">
              <img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt="" />
              <img src="https://i.ibb.co/hVM4X2p/app-store.png" alt="" />
            </div>
          </div>

          <div className="footer-col-2">
            <img src="/images/logo-white.png" alt="" />
            <p>
             Ready to unlock the full potential of JShopping? Learn more about our platform and start achieving your shopping goals today!
             Our wide array of services ensures you get the best.
            </p>
          </div>

          <div className="footer-col-3">
            <h3><strong>Useful Links</strong></h3>
            <ul>
              <li><Link to="/jshopping-coupons">JShopping Coupons</Link></li>
              <li><Link to="/jshop-business">JShopping Business</Link></li>
              <li><Link to="/back-to-school">Back To School</Link></li>
              <li><Link to="/top-deals">Top Deals</Link></li>
            </ul>
          </div>

          <div className="footer-col-4">
            <h3><strong>Follow us</strong></h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">
          &copy; {new Date().getFullYear()} JShopping. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import "./BackToSchool.css";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BackToSchool = () => {
  return (
    <div className="back-to-school">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <h1 className="back-to-school-title">
              <strong>
                Back To School <br />A New Style!{" "}
              </strong>
            </h1>

            <p>
              JShopping products cover all levels of education, be it
              kindergarten or college. This ensures that we are able to cater
              for the needs of all. From the selected category on the homepage,
              the best products will be displayed for you.
            </p>
            <br />
            <Link to="/all-products">
              <button>Explore Now &#8594;</button>
            </Link>
          </div>
          <div className="col-2">
            <img src="/images/children.png" alt="" />
          </div>
        </div>
      </div>

      <div className="categories">
        <div className="small-container">
          <ProductList numberOfProductsToLoad={4} from={15} to={19} />
        </div>
      </div>

      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img
                src="/images/ap-transparent.png"
                alt=""
                className="offer-img"
              />
            </div>
            <div className="col-2">
              <p>Exclusively Available on JShopping</p>
              <h1>Apple Watch SE (2nd Gen) [GPS 40mm]</h1>
              <h5>
                Apple Smartwatch with Starlight Aluminum Case with Starlight
                Sport Band S/M. Fitness & Sleep Tracker, Crash Detection, Heart
                Rate Monitor. All the essentials to help you be motivated and
                active, keep connected, track your health, and stay safe.
              </h5>
              <br />
              <Link to="/products/66b6b2425989a5007a74f75f">
                <button>Buy Now &#8594;</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div>
              <img src="https://i.ibb.co/Gfwzz1S/logo-godrej.png" alt="" />
            </div>

            <div>
              <img src="https://i.ibb.co/vjrRZFM/logo-oppo.png" alt="" />
            </div>

            <div>
              <img src="https://i.ibb.co/3zs234S/logo-coca-cola.png" alt="" />
            </div>

            <div>
              <img src="https://i.ibb.co/7Wt343W/logo-paypal.png" alt="" />
            </div>

            <div>
              <img src="https://i.ibb.co/GVSNwJD/logo-philips.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackToSchool;

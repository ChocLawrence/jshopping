import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const JshoppingCoupons = () => {
  return (
    <div>
      <section className="jshopping-coupons">
        <h2 className="title">JShopping Coupons</h2>
        <p>
          Use code JULIE at checkout to receive 50% off your next purchase at
          JShopping. Don't miss out on this amazing offer!Our coupons help you
          spend less for more.You might want to grab any now and make your
          purchase. Do not forget to keep your coupons for accumulated credits.
          At JShopping, we will always ensure you benefit from all premium
          services as a valued customer.
        </p>
      </section>
      <div className="coupon-container">
        <div className="coupon">
          <div className="left">
            <div>Enjoy Your Gift</div>
          </div>
          <div className="center">
            <div>
              <h2>13% OFF</h2>
              <h3>SWIFT</h3>
              <small>Valid until SEP, 2024</small>
            </div>
          </div>

          <div className="right">
            <div>87878500</div>
          </div>
        </div>

        <div className="coupon">
          <div className="left">
            <div>Enjoy Your Gift</div>
          </div>
          <div className="center">
            <div>
              <h2>05% OFF</h2>
              <h3>JUSTNICE</h3>
              <small>Valid until OCT, 2024</small>
            </div>
          </div>

          <div className="right">
            <div>878785211</div>
          </div>
        </div>

        <div className="coupon">
          <div className="left">
            <div>Enjoy Your Gift</div>
          </div>
          <div className="center">
            <div>
              <h2>50% OFF</h2>
              <h3>JULIE</h3>
              <small>Valid until DEC, 2024</small>
            </div>
          </div>

          <div className="right">
            <div>900785232</div>
          </div>
        </div>

        <div className="coupon">
          <div className="left">
            <div>Enjoy Your Gift</div>
          </div>
          <div className="center">
            <div>
              <h2>10% OFF</h2>
              <h3>JSHOPPA</h3>
              <small>Valid until DEC, 2024</small>
            </div>
          </div>

          <div className="right">
            <div>878785218</div>
          </div>
        </div>

        <div className="coupon">
          <div className="left">
            <div>Enjoy Your Gift</div>
          </div>
          <div className="center">
            <div>
              <h2>17% OFF</h2>
              <h3>MESKYY</h3>
              <small>Valid until NOV, 2024</small>
            </div>
          </div>

          <div className="right">
            <div>328785211</div>
          </div>
        </div>

        <div className="coupon">
          <div className="left">
            <div>Enjoy Your Gift</div>
          </div>
          <div className="center">
            <div>
              <h2>10% OFF</h2>
              <h3>SUPER</h3>
              <small>Valid until JAN, 2025</small>
            </div>
          </div>

          <div className="right">
            <div>870085211</div>
          </div>
        </div>

        <div className="coupon">
          <div className="left">
            <div>Enjoy Your Gift</div>
          </div>
          <div className="center">
            <div>
              <h2>7% OFF</h2>
              <h3>EARLYBE</h3>
              <small>Valid until FEB, 2025</small>
            </div>
          </div>

          <div className="right">
            <div>878799211</div>
          </div>
        </div>

        <div className="coupon">
          <div className="left">
            <div>Enjoy Your Gift</div>
          </div>
          <div className="center">
            <div>
              <h2>52% OFF</h2>
              <h3>FFASTAA</h3>
              <small>Valid until OCT, 2024</small>
            </div>
          </div>

          <div className="right">
            <div>8789834852</div>
          </div>
        </div>
      </div>
      <br />
      <div className="button-container">
        <Link to="/all-products">
          <button className="button-link">Shop Now &#8594;</button>
        </Link>
      </div>
    </div>
  );
};

export default JshoppingCoupons;

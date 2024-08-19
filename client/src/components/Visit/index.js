import React from "react";
import "./Visit.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Visit() {
  return (
    <div className="visit-container">
      <div className="support">
        <img src="/images/support.png" alt="support" />
        <Link to="/support">
          <p className="product-name">Visit our Support Center</p>
        </Link>
      </div>
      <div className="order">
        <img src="/images/order.png" alt="order" />
        <Link to="/order-status">
          <p className="product-name">Check your order status</p>
        </Link>
      </div>
      <div className="shipping">
        <img src="/images/fast.png" alt="shipping" />
        <Link to="/shipping-and-delivery">
          <p className="product-name">Shipping, Delivery and Store pickup</p>
        </Link>
      </div>
      <div className="returns">
        <img src="/images/return.png" alt="returns" />
        <Link to="/contact">
          <p className="product-name">Returns and exchanges</p>
        </Link>
      </div>
    </div>
  );
}

export default Visit;

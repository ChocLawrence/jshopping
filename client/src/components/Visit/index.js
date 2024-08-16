import React from "react";
import "./Visit.css";

function Visit() {
  return (
    <div className="visit-container">
      <div className="support">
        <img src="/images/support.png" alt="support image" />
        <p className="product-name">Visit our Support Center</p>
      </div>
      <div className="order">
        <img src="/images/order.png" alt="order image" />
        <p className="product-name">Check your order status</p>
      </div>
      <div className="shipping">
        <img src="/images/fast.png" alt="shipping image" />
        <p className="product-name">Shipping, Delivery and Store pickup</p>
      </div>
      <div className="returns">
        <img src="/images/return.png" alt="returns image" />
        <p className="product-name">Returns and exchanges</p>
      </div>
    </div>
  );
}

export default Visit;

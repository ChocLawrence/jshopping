import React from "react";

const Shipping = () => {
  return (
    <div>
      <section>
        <h3 className="title">Shipping & Delivery</h3>
        <p>
          Here's what you need to know about our shipping and delivery
          policies.At JShopping, we strive to get your orders to you quickly and
          efficiently. Our shipping policy is designed to provide you with fast,
          reliable, and affordable options to suit your needs. Below, you'll
          find details on our shipping rates, delivery times, and tracking
          information.
        </p>
      </section>
      <div className="shipping-page">
        <h2 className="product-title ">
          <strong>Shipping Rates</strong>
        </h2>
        <ul>
          <li>Standard Shipping (3-7 business days): $5.99</li>
          <li>Express Shipping (2-3 business days): $9.99</li>
          <li>Free Shipping on orders over $50</li>
        </ul>
        <h2 className="product-title ">
          <strong>Delivery Times</strong>
        </h2>
        <p>Delivery times vary depending on your location. Please allow:</p>
        <ul>
          <li>3-7 business days for domestic orders</li>
          <li>7-14 business days for international orders</li>
        </ul>
        <h2 className="product-title ">
          <strong>Tracking Your Order</strong>
        </h2>
        <p>
          Once your order ships, you'll receive an email with tracking
          information.
        </p>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Shipping;

import React from "react";

const OrderStatus = () => {
  return (
    <div>
      <section className="order-status">
        <h3 className="title">Order Status</h3>
        <p>
          We wil guide you through the whole process of the delivery of all your
          items.
        </p>
      </section>
      <div className="container">
        <div className="hh-grayBox pt45 pb20">
          <div className="row justify-content-between">
            <div className="order-tracking completed">
              <span className="is-complete"></span>
              <p>
                Ordered
                <br />
                <span>Tue, Aug 08</span>
              </p>
            </div>
            <div className="order-tracking completed">
              <span className="is-complete"></span>
              <p>
                Shipped
                <br />
                <span>Wed, Aug 09</span>
              </p>
            </div>
            <div className="order-tracking">
              <span className="is-complete"></span>
              <p>
                Estimated Delivery
                <br />
                <span>Fri, Aug 11</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default OrderStatus;

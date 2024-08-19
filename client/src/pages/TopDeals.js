import React from "react";
import ProductList from "../components/ProductList";

const TopDeals = () => {
  return (
    <div>
      <div className="small-container">
        <br/>
        <h2 className="title">Top Deals</h2>
        <ProductList numberOfProductsToLoad={8} />
      </div>
      <div className="testimonial">
        <h2 className="title">Top Deal Customers of JShopping</h2>
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Using top deals was interesting as I was able to quickly find what I needed and ordered.I recommend JShopping.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <img src="https://i.ibb.co/zfXD2Tx/user-1.png" alt="" />
              <h3>Marta W.</h3>
            </div>

            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                In a world where we are increasingly busy, its important to get things done quick. JShopping to the rescue.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <img src="https://i.ibb.co/FVyK1KM/user-2.png" alt="" />
              <h3>Rula P.</h3>
            </div>

            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Great experience. Only issue was product came a day later than expected. Everything else was cool.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <img src="https://i.ibb.co/jZ3tQqK/user-3.png" alt="" />
              <h3>Vika Z.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDeals;

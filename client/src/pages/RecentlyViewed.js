import React from "react";
import { Link } from "react-router-dom";

const RecentlyViewed = () => {
  return (
    <div>
      <section className="destinations">
        <h3 className="title">Recently viewed pages</h3>
        <p>
          Quickly jump to the pages we figured you might want to revisit, based
          on your site navigation
        </p>
      </section>
      <section className="services">
        <Link to="/jshop-business">
          <div className="service-card">
            <div className="icon-header">
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="20" fill="#4CAF50" />
              </svg>
            </div>
            <h2 className="service-title">Business with JShopping</h2>
            <h3 className="service-subtitle">Let's help you</h3>
            <p className="service-description">
              Shopping with us has got to be the ultimate experience
            </p>
          </div>
        </Link>

        <Link to="/shop-with-expert">
          <div className="service-card">
            <div className="icon-header">
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="20" fill="#FF9800" />
              </svg>
            </div>
            <h2 className="service-title">Expert's Touch</h2>
            <h3 className="service-subtitle">Be guided</h3>
            <p className="service-description">
              To make informed decisions concerning some purchases, get expert
              help.
            </p>
          </div>
        </Link>

        <Link to="/back-to-school">
          <div className="service-card">
            <div className="icon-header"> 
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="20" fill="#F44336" />
              </svg>
            </div>
            <h2 className="service-title">School </h2>
            <h3 className="service-subtitle">Educational Foundations</h3>
            <p className="service-description">
              We put together a wide range of items which your kids would need.
            </p>
          </div>
        </Link>

        <Link to="/back-to-school">
          <div className="service-card">
            <div className="icon-header">
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="20" fill="#2196F3" />
              </svg>
            </div>
            <h2 className="service-title">Amazing Deals</h2>
            <h3 className="service-subtitle">Best in the market</h3>
            <p className="service-description">
              JShopping can boast of amazing deals in all our multiple categories.
            </p>
          </div>
        </Link>

        <Link to="/back-to-school">
          <div className="service-card">
            <div className="icon-header">
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="20" fill="#9C27B0" />
              </svg>
            </div>
            <h2 className="service-title">Deals</h2>
            <h3 className="service-subtitle">Today's picks</h3>
            <p className="service-description">
              Be sure to get the best picks at JShopping. Choose now.
            </p>
          </div>
        </Link>

        <Link to="/back-to-school">
          <div className="service-card">
            <div className="icon-header">
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="20" fill="#3F51B5" />
              </svg>
            </div>
            <h2 className="service-title">Coupons</h2>
            <h3 className="service-subtitle">Save more than 50%</h3>
            <p className="service-description">
              JShopping helps with coupons to appreciate our customers.
            </p>
          </div>
        </Link>

        <Link to="/back-to-school">
          <div className="service-card">
            <div className="icon-header">
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="20" fill="#00BCD4" />
              </svg>
            </div>
            <h2 className="service-title">Products</h2>
            <h3 className="service-subtitle">All you want</h3>
            <p className="service-description">
              Filter our categories and pick whatever you want.
            </p>
          </div>
        </Link>

        <Link to="/back-to-school">
          <div className="service-card">
            <div className="icon-header">
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="20" fill="#8BC34A" />
              </svg>
            </div>
            <h2 className="service-title">FAQs</h2>
            <h3 className="service-subtitle">Reach out</h3>
            <p className="service-description">
              For all your enquiries, please do not hesitate to reach out.
            </p>
          </div>
        </Link>
      </section>
      <br />
      <br />
    </div>
  );
};

export default RecentlyViewed;

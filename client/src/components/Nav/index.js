import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import SearchField from "../SearchField";

function Nav() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleBurgerClick = () => {
    setShowSidebar(!showSidebar);
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <li>
            <Link to="/order-history">Order History</Link>
          </li>
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </div>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }

  return (
    <header>
      <div className="top-header">
        <ul className="nav-links">
          <li>
            <Link to="/jshop-business">JShop Business</Link>
          </li>
          <li>
            <Link to="/shop-with-expert">Shop with an expert</Link>
          </li>
        </ul>
      </div>
      <nav className="sticky-header">
        <div className="logo">
          <h3>
            <Link to="/">
              <span role="img" aria-label="shopping bag">
                🛍️
              </span>
              &nbsp;
              <span className="logo-title">JShopping</span>
            </Link>
          </h3>
        </div>
        <div className="search-bar">
          <SearchField />
        </div>
        <div className="contact">
          <span className="support" title="Contact Support by mail">
            <a
              href={`mailto:support@jshopping.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              support@jshopping.com
            </a>
            &nbsp;|&nbsp;
          </span>
          <Link to="/contact">Contact</Link> &nbsp;|&nbsp;
          <Link to="/about">About</Link>
        </div>
        <div className="burger ms-auto" onClick={handleBurgerClick}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        {showSidebar && (
          <div className="sidebar show">
            <div className="sidebar-header">
              <Link to="/">
                <h5>
                  <span role="img" aria-label="shopping bag">
                    🛍️
                  </span>
                  &nbsp;&nbsp;JShopping
                </h5>
              </Link>
              <span onClick={handleBurgerClick}>
                <i className="fa fa-times close-icon" />
              </span>
            </div>
            <div className="footnote">
              <p>Browse JShopping, an awesome experience</p>
              ---
            </div>
            <ul className="sidebar-menu">
              <li className="menu">
                <strong>
                  <span>Home</span>
                </strong>
              </li>
              <hr />
              <li className="menu">
                <Link to="/top-deals">Trending</Link>
              </li>
              <li className="menu">
                <Link to="/jshopping-coupons">Coupons</Link>
              </li>
              <li className="menu">
                <Link to="/deal-of-the-day">Deal of the Day</Link>
              </li>
              <hr />
              <li className="menu">
                <Link to="/top-deals">
                  <strong>Top picks</strong>
                </Link>
              </li>
              <hr />
              <li className="menu">
                <Link to="/">Food</Link>
              </li>
              <li className="menu">
                <Link to="/">Household</Link>
              </li>
              <li className="menu">
                <Link to="/">Electronics</Link>
              </li>
              <li className="menu">
                <Link to="/">Books</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <div className="bottom-header">
        <ul className="nav-links">
          <li>
            <Link to="/back-to-school">Back to School</Link>
          </li>
          <li>
            <Link to="/top-deals">Top Deals</Link>
          </li>
          <li>
            <Link to="/deal-of-the-day">Deal of the day</Link>
          </li>
          <li>
            <Link to="/jshopping-coupons">JShopping Coupons</Link>
          </li>
          <li className="dropdown">
            <a href="#/" className="dropdown-toggle">
              More <i className="fa fa-chevron-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/all-products">All Products</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
              <li>
                <Link to="/shipping-and-delivery">Shipping and delivery</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="titleC">
          <ul className="nav-links">
            <li className="dropdown">
              <a href="#/" className="dropdown-toggle">
                <i className="fa fa-user white"></i> &nbsp;
                <strong>Account</strong> <i className="fa fa-chevron-down"></i>
              </a>
              <ul className="dropdown-menu">{showNavigation()}</ul>
            </li>
            <li>
              <Link to="/recently-viewed">Recently viewed</Link>
            </li>
            <li>
              <Link to="/order-status">Order status</Link>
            </li>
            <li>
              <Link to="/saved-items">Saved items</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;

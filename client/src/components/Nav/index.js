import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleBurgerClick = () => {
    setShowSidebar(!showSidebar);
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav-links">
          <li>
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav-links">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header>
      <div className="top-header">
        <span>Early Bird</span>
        <span>Best Buy Outlet</span>
        <span>Best Buy Business</span>
        <span>Shop with an expert</span>
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
          <input type="text" placeholder="What can we help you find today?" />
          <button type="submit">
            <i className="fa fa-solid fa-search white"></i>
          </button>
        </div>

        {showNavigation()}

        <div className="burger ms-auto" onClick={handleBurgerClick}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        
        {showSidebar && (
          <div className="sidebar show">
            <div className="sidebar-header">
              <h4>JShopping</h4>
              <span onClick={handleBurgerClick}>
                <i className="fa fa-times close-icon" />
              </span>
            </div>
            <div className="footnote">
              <p>Browse JShopping</p>
            </div>
            <ul className="sidebar-menu">
              <li className="menu">
                <strong>
                  <span>Home</span>
                </strong>
              </li>
              <hr />
              <li className="menu">
                <strong>
                  <span>Trending</span>
                </strong>
              </li>
              <li className="menu">
                <span>Best Sellers</span>
              </li>
              <li className="menu">
                <span>New Releases</span>
              </li>
              <hr />
              <li className="menu">
                <strong>
                  <span>Top picks for you</span>
                </strong>
              </li>
              <hr />
              <li className="menu">
                <span>Fashion</span>
              </li>
              <li className="menu">
                <span>Toys</span>
              </li>
              <li className="menu">
                <span>Electronics</span>
              </li>
              <li className="menu">
                <span>Household items</span>
              </li>
              <li className="menu">
                <span>Books</span>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <div className="bottom-header">
        <span>Back to School</span>
        <span>Top Deals</span>
        <span>Deal of the day</span>
        <span>JShopping Coupons</span>
        <span>More</span>
        <div className="titleC">
          <span>
            <i className="fa fa-user white"></i> &nbsp;
            <strong>Account</strong>
          </span>
          <span>
            <strong>Recently viewed</strong>
          </span>
          <span>
            <strong>Order Status</strong>
          </span>
          <span>
            <strong>Saved Items</strong>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Nav;

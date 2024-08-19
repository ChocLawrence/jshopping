import React from "react";
import "./JshopBusiness.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const JshopBusiness = () => {
  return (
    <div className="jshop-business">
      <section className="hero">
        <div className="background-image"></div>
        <div className="hero-content-area">
          <h1>JShopping Business!</h1>
          <h3>Unlock the full potential in getting the best service from using our platform.</h3>
          <a href="/contact" className="btn">
            Contact Us Now
          </a>
        </div>
      </section>

      <section className="destinations">
        <h3 className="title">Reimagining our horizons:</h3>
        <p>
         Reach new heights of success by targeting the right audience, increasing brand awareness, and driving sales. 
        </p>
        <hr />

        <ul className="grid">
          <li className="small image-1"></li>
          <li className="large image-2"></li>
          <li className="large image-3"></li>
          <li className="small image-4"></li>
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="title">Testimonials from our customers:</h3>
        <hr />
        <p className="quote">
        "I was blown away by the exceptional customer service I received from JShopping! The team went above and beyond to ensure I was satisfied with my purchase. The product quality was top-notch and arrived quickly. I'll definitely be shopping here again!"
        </p>
        <p className="author">- Emily R.</p>
        <p className="quote">
        "I've been shopping at JShopping for months now and I'm always impressed by the wide selection of products and competitive prices. The website is easy to navigate and checkout is a breeze. I've already recommended JShopping to friends and family!"
        </p>
        <p className="author">- David K.</p>
        <p className="quote">
        "I was hesitant to shop online, but JShopping exceeded my expectations in every way. The product I ordered was exactly as described and arrived in perfect condition. The communication from the team was excellent and I appreciated the tracking updates. Five stars!"
        </p>
        <p className="author">- Sarah T.</p>
      </section>

      <section className="contact">
        <h3 className="title">Learn more</h3>
        <p>
         Discover how JShopping can help you shop smarter, not harder. Learn more about our platform and start saving today!. Subscribe to our newsletter
        </p>
        <hr />
        <form>
          <input type="email" placeholder="Email" />
          <br />
          <div className="button-container">
            <Link to="/contact">
              <button> Subscribe now</button>
            </Link>
          </div>
        </form>
      </section>

     
    </div>
  );
};

export default JshopBusiness;

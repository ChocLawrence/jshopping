import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <section className="about section bd-container" id="about">
        <span className="section-subtitle">OUR HISTORY</span>
        <h3 className="section-title title">About JShopping</h3>

        <div className="about__container bd-grid">
          <div className="about__data bd-grid">
            <p className="about__description">
              <span>
                Hi JShoppers, <br />
              </span>
              JShopping was born out of a passion for innovation and a desire to
              make online shopping easier, faster, and more enjoyable. Our
              founder, Juliette Ngum, was a university student with a vision to
              revolutionize the ecommerce landscape. Between classes and
              late-night study sessions, Juliette noticed a gap in the market
              for a platform that combined seamless user experience with
              unparalleled customer service. With a spark of determination, she
              turned her dorm room into a makeshift office and got to work. And
              so, JShopping was founded - a true testament to the power of
              entrepreneurship and the spirit of innovation. Today, we're proud
              to be a leading ecommerce platform, dedicated to helping
              businesses thrive and customers shop with confidence.
            </p>
          </div>

          <img
            src="/images/juliette-founder.jpeg"
            alt=""
            className="about__img"
          />
        </div>
        <div className="brands">
          <div className="flex-row">
            <div className="about">
              <span className="about__number">02</span>
              <span className="about__achievement">Years of Experience</span>
            </div>
            
            <div className="about">
              <span className="about__number">29+</span>
              <span className="about__achievement">Clients</span>
            </div>

            <div className="about">
              <span className="about__number">3+</span>
              <span className="about__achievement">Branches</span>
            </div>

            <div className="about">
              <span className="about__number">40</span>
              <span className="about__achievement">Suppliers</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

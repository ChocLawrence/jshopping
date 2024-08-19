import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact_us">
        <div className="container">
          <div className="contact_inner">
            <div className="contact_form_inner">
              <div className="contact_field">
                <h3 className="contact-us-title">Contact Us</h3>
                <h6>
                  Feel Free to contact us any time. We will get back to you as
                  soon as we can!.
                </h6>
                <input
                  type="text"
                  className="form-control form-group"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="form-control form-group"
                  placeholder="Email"
                />
                <textarea
                  className="form-control form-group"
                  placeholder="Message"
                ></textarea>
                <button>Send</button>
              </div>
            </div>
            <div className="contact_info_sec">
              <h4>Contact Info</h4>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-headset"></i>
                <span>+91 8009 054294</span>
              </div>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-envelope-open-text"></i>
                <span>info@flightmantra.com</span>
              </div>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-map-marked-alt"></i>
                <span>
                  1000+ Ecommerce partners and 65+ Service city across India,
                  USA, Canada & UAE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map_sec">
        <div className="container">
          <div className="map_inner">
            <h3 className="title">Find us on Google Maps</h3>
            <h6>
              Visit us in person at JShopping ecommerce platform! Our office is
              located at JShopping HQ and is open from 6:00AM - 11:00PM. You can
              find us on Google Maps by searching for 'JShopping ecommerce
              platform' - we're looking forward to seeing you! Note: Please
              check our website for holiday hours and closures before visiting."
            </h6>
            <div className="map_bind">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1592031.6055815031!2d-78.55622753379012!3d38.79954531797226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64debe9f190df%3A0xf2af37657655f6b1!2sMaryland%2C%20USA!5e0!3m2!1sen!2scm!4v1724041058323!5m2!1sen!2scm"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                aria-hidden="false"
                tabIndex="0"
                title="Reach out to JShopping via Google Maps"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

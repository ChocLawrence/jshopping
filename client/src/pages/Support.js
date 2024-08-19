import React from "react";

const Support = () => {
  return (
    <div>
      <section className="destinations">
        <h3 className="title">Support and Help Center:</h3>
        <p>
          We know sometimes issues may occur. We are here to help you navigate
          through all enquiries you might have.
        </p>
        <hr />
      </section>
      <div className="container">
        <div className="faq">
          <input className="question" type="checkbox" id="question1" />
          <label htmlFor="question1" className="profile">
            What payment methods does JShopping accept?
          </label>
          <div className="answer">
            We accept all major credit cards (Visa, Mastercard, Amex, Discover),
            as well as PayPal and bank transfers.
          </div>
        </div>

        <div className="faq">
          <input className="question" type="checkbox" id="question2" />
          <label htmlFor="question2">How long does shipping take?</label>
          <div className="answer">
            Shipping times vary depending on your location. htmlFor domestic orders,
            please allow 3-7 business days htmlFor delivery. htmlFor international
            orders, please allow 7-14 business days.
          </div>
        </div>

        <div className="faq">
          <input className="question" type="checkbox" id="question3" />
          <label htmlFor="question3">
            Can I return or exchange a product if I don't like it?
          </label>
          <div className="answer">
            Yes, we offer a 30-day money-back guarantee. If you're not satisfied
            with your purchase, you can return or exchange it within 30 days of
            delivery.
          </div>
        </div>

        <div className="faq">
          <input className="question" type="checkbox" id="question4" />
          <label htmlFor="question4">
            Is my personal and payment inhtmlFormation secure?
          </label>
          <div className="answer">
            Absolutely! Our website uses SSL encryption to ensure that your
            inhtmlFormation is protected. We also comply with all relevant data
            protection regulations.
          </div>
        </div>

        <div className="faq">
          <input className="question" type="checkbox" id="question5" />
          <label htmlFor="question5">How do I track my order?</label>
          <div className="answer">
            Once your order ships, you'll receive an email with tracking
            inhtmlFormation. You can use this to track the status of your order on
            the shipping carrier's website.
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default Support;

import React from "react";
import CategoryMenu from "../CategoryMenu";

function HomeContent() {

  const scrollToTitle = (id) => {
    const title = document.getElementById(id);
    title.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
  
  return (
    <div>
      <div className="top-content">
        <span className="home-title">JShopping</span>&nbsp;
        <span>
          privacy policy update: We are updating our privacy policy effective
          September 1, 2024, to reflect changes in our information-sharing
          practices and new state laws. Learn more
        </span>
      </div>
      <div className="sales-content">
        <div className="right-content">
          <div className="right-content-bottom">
             <CategoryMenu />
             <br/>
             <strong><h4>JShopping offers the best deals in general shopping as well as African handmade pieces.</h4></strong>
          </div>
          <div className="right-content-row">
            <div className="right-content-one">
              <img src="/images/outletDeal.png" alt="jshopping courrier deal" />
            </div>
            <div className="right-content-two">
              <img src="/images/top-deals1.png" alt="top deals" />
            </div>
          </div>
        </div>
        <div className="left-content">
           <img src="/images/sale.jpg" alt="sales" />
        </div>
      </div>
      <br/>
      <p>
        {" "}
        <span
          className="go-back-to-categories"
          onClick={() => {
            scrollToTitle("category-list");
          }}
        >
          <strong>Go Back to Categories</strong>
        </span>
      </p>
    </div>
  );
}

export default HomeContent;

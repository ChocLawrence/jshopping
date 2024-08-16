import React from "react";
import CategoryMenu from "../CategoryMenu";

function HomeContent({}) {
  return (
    <div>
      <div className="top-content">
        <span className="title">JShopping</span>&nbsp;
        <span>
          privacy policy update: We are updating our privacy policy effective
          September 1, 2024, to reflect changes in our information-sharing
          practices and new state laws. Learn more
        </span>
      </div>
      <div className="sales-content">
        <div className="left-content">
           <img src="/images/sale.jpg" alt="image" />
        </div>
        <div className="right-content">
          <div className="right-content-bottom">
             <CategoryMenu />
          </div>
          <div className="right-content-row">
            <div className="right-content-one">
              <img src="/images/outletDeal.png" alt="image" />
            </div>
            <div className="right-content-two">
              <img src="/images/top-deals1.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;

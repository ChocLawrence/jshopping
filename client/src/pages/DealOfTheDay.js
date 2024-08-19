import React from "react";
import ProductList from "../components/ProductList";

const DealOfTheDay = () => {
  return (
    <div>
      <section className="destinations">
        <h3 className="title">Deal of the Day</h3>
        <p>
          Today only: get 20% off our best-selling laptop at JShopping. Don't
          miss out on this incredible deal! Buy one get one free on all
          electronics at JShopping. Shop now and stock up for the season!
        </p>
        <ul className="grid">
          <li className="small image-5"></li>
          <li className="large image-6"></li>
        </ul>
      </section>
      <div className="small-container">
        <h2 className="title">Cool options</h2>
        <ProductList numberOfProductsToLoad={4} from={10} to={14} />
      </div>
    </div>
  );
};

export default DealOfTheDay;

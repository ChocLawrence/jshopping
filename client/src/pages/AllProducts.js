import React from "react";
import ProductList from "../components/ProductList";

const AllProducts = () => {
  return (
    <div>
      <section className="destinations">
        <h3 className="title">All Products:</h3>
        <hr />
        <ProductList/>
      </section>
    </div>
  );
};

export default AllProducts;

import React from "react";
import ProductList from "../components/ProductList";
import HomeContent from "../components/HomeContent";
import Visit from "../components/Visit";

const Home = () => {
  return (
    <div className="container">
      <HomeContent />
      <h4><strong>Products:</strong></h4>
      <ProductList />
      <Visit />
    </div>
  );
};

export default Home;

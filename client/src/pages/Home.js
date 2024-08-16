import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import HomeContent from "../components/HomeContent";
import Cart from '../components/Cart';
import Visit from '../components/Visit';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="container">
      <HomeContent />
      <ProductList />
      <Cart />
      <Visit />
      <Footer/>
    </div>
  );
};

export default Home;

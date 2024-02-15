import React from "react";
import Navbar from "../Component/Navbar/index";
import Banner from "../Component/Banner/index";
import Product from "../Component/Products/product";
import "./HomeLayout.css";
export default function HomeLayout() {
  return (
    <div className="homelayout">
      <Navbar />

      <Banner />

      <Product />
    </div>
  );
}

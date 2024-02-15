import React from "react";
import { productData } from "./index";
import BaseCard from "../Card";
import "./product.css";

export default function product() {
  return (
 
      <div className="cards">
        {productData.map((product) => (
          <BaseCard key={product.id} product={product} />
        ))}
      </div>
  
  );
}

import React from "react";
import "./index.css";



export default function BaseCard({product}) {
  return (
    
      <div className="card" key={product.id}>
        <div className="card-img">
          <img src={product.image} alt="img" />
        </div>
        <div className="card-title">
          <h3>{product.title}</h3>
        </div>
        <div className="card-disc">
          <p>{product.content}
          </p>
        </div>
        <div className="card-btn">
          <button>Explore More</button>
        </div>
      </div>
    
  );
}

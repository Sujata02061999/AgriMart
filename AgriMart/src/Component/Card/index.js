import React from "react";
import "./index.css";
import cardImg from "../../Assets/fruits.jpg";
export default function BaseCard() {
  return (
    <div>
      <div className="card">
        <div className="card-img">
          <img src={cardImg} alt="img" />
        </div>
        <div className="card-title">
          <h3>Fruits</h3>
        </div>
        <div className="card-disc">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aperiam eum, totam officiis laboriosam facere aut fuga eos atque illo aliquid dolores. Quae dignissimos cum aliquam sapiente, quisquam asperiores tempora.
          orem ipsum dolor, sit amet consectetur adipisicing elit. Velit aperiam eum, totam officiis laboriosam facere aut fuga eos atque illo aliquid dolores. Quae dignissimos cum aliquam sapiente, quisquam asperiores tempora
          </p>
        </div>
        <div className="card-btn">
          <button>Explore More</button>
        </div>
      </div>
    </div>
  );
}

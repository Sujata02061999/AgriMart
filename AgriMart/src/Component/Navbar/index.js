import React from "react";
import "./index.css";
export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div>logo</div>
        <div className="navlink">
          <ul>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>AboutUs</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

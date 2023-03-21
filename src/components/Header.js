import React from "react";
import "./header.css";
import img from "../utility/mridul_edited.png";
import cover from "../utility/banner_final.png";

export const Header = () => {
  return (
    <div className="p-container">
      <div className="flex-2">
        <div className="navbar">
          <img src={img} alt="img-logo" href="#" />
        </div>
        <div>
          <ul className="nav-link">
            <li>Home</li>
            <li>Products</li>
            <li>Gallery</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      {/* <marquee bgcolor="transparent" direction="right" loop="">
        Pyas bujhaye jhasgbdhas hjsgbdhjas
      </marquee> */}

      <div className="cover">
        <div className="inner">
          <div className="back">
            <h3>Hi friends Pani pelo Hi friends Pani pelo</h3>
            <button className="login">Login</button>
            <button className="signup">signup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

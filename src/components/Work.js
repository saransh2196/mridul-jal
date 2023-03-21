import React from "react";
import "./Work.css";
import { TbHandClick } from "react-icons/tb";

function Work() {
  return (
    <>
      <div className="work_container">
        <h3>How it Works</h3>
        <p>Getting pure & hygiene water has never been so easy for man kind!</p>
        <div className="work_inner_container">
          <div className="col-lg">
            <div className="circle">
              <TbHandClick />
            </div>
            <p>Step 1: Open Website</p>
          </div>
          <div className="col-lg"></div>
          <div className="col-lg"></div>
        </div>
      </div>
    </>
  );
}

export default Work;

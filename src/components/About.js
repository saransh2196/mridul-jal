import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="about_container">
        <h3>About Us</h3>
        <p>Who we are?</p>
        <div className="about_inner_container">
          <div className="col_inner">
            <p className="tag">Our Mission is to deliver pure water at the tap of a button.</p>
          </div>
          <div className="col_inner">
            <p className="description">
              Potable water being one of the most critical needs of mankind, next to oxygen, triggered our journey to deliver pure &
              hygienic drinking water at the doorstep of every Bangalore resident at an affordable price, quality & timely service. Though
              water supply from local government is available in certain parts of Bangalore, it is generally not considered safe enough to
              drink until it undergoes several filtering & processing steps. Indeed there are multiple filtered water suppliers who deliver
              unknown labels, charge hefty price with poor quality and delivery service. There are also a few suppliers who deliver branded
              mineral water at a very high price thus making it unaffordable for daily household usage and even for businesses! This is
              where BOOKACAN envisioned to build a platform that can connect & bring the filtered as well as mineral water resources from
              the neighborhood to the door step of Bangalore resident ensuring highest water quality, affordable price & most important –
              timely service. We are currently piloting our service to individual homes and businesses in south Bangalore localities such as
              Basavanagudi, Jayanagar, Banashankari, Chamarajpet, Hanumanthnagar & Hosakerehalli. After receiving a phenomenal customer
              response, we are now expanding our journey to other localities of Bangalore and to other cities across the nation. Stay tuned
              and get ready to quench your thirst for a safe, great-tasting, pure water.
            </p>
          </div>
          <div className="col_inner">
            {/* 1 */}
            <div className="flex">
              <div className="graph orange">100</div>
              <div className="text">
                <h2>Quality</h2>
                <p>Filtered water double checked to ensure highest purity & quality.</p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex">
              <div className="graph purple">100</div>
              <div className="text">
                <h2>Quality</h2>
                <p>Filtered water double checked to ensure highest purity & quality.</p>
              </div>
            </div>
            {/* 3 */}
            <div className="flex">
              <div className="graph green">100</div>
              <div className="text">
                <h2>Quality</h2>
                <p>Filtered water double checked to ensure highest purity & quality.</p>
              </div>
            </div>
            {/* 4 */}
            <div className="flex">
              <div className="graph red">100</div>
              <div className="text">
                <h2>Quality</h2>
                <p>Filtered water double checked to ensure highest purity & quality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

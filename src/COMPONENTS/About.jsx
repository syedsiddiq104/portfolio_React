import React from "react";
import "../Styles/about.css";
import profile from "../assets/SID.jpeg";

const About = () => {
  return (
    <section className="about">
      <div className="about-wrapper">

        <div className="about-content ">
          <h2 className="about-title">
            About <span>Me.</span>
          </h2>

          <p>
            I’m Syed Siddiq — an engineer who blends logic with design.
            I build responsive, interactive web experiences that feel smooth,
            intentional, and visually immersive.
          </p>

          <p>
            Currently focused on React engineering, UI systems,
            and crafting futuristic web interfaces.
          </p>

          <div className="about-stats">
            <div className="stat">
              <h3>10+</h3>
              <span>Projects</span>
            </div>
            <div className="stat">
              <h3>3+</h3>
              <span>Core Tech</span>
            </div>
            <div className="stat">
              <h3>∞</h3>
              <span>Curiosity</span>
            </div>
          </div>
        </div>

        <div className="about-image ">
          <img src={profile} alt="profile" />
        </div>

      </div>
    </section>
  );
};

export default About;
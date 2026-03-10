import React from "react";
import "../Styles/Hero.css";
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero-animation.json";

const Hero = () => (
  <>
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-greeting">
          Hello <span className="wave">👋</span>
        </h1>

        <h2 className="hero-title">
          I'm <span className="hero-name">SYED SIDDIQ</span> — curious designer
          and developer
          <br />
          based in Bangalore, India.
        </h2>

        <div className="hero-links">
          <a href="https://github.com/syedsiddiq104" target="_blank">
            Github{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/syed-siddiq-8799352a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/syedsiddiq104?t=UcEvXfwoMdMsCeee4GcQEQ&s=09"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="mailto:syedsiddiq104@gmail.com?subject=From%20Portfolio&body=Hi%20Syed Siddiq%2C%20I%20would%20like%20to%20connect."
            target="_blank"
          >
            Email Me
          </a>
        </div>
      </div>

      <div className="hero-animation">
        <Lottie animationData={heroAnimation} loop />
      </div>
    </section>
  </>
);

export default Hero;

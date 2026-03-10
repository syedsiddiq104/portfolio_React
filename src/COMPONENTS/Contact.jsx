import React from 'react'
import '../Styles/contact.css'

const Contact = () => {
 return (
    <section className="contact">
      <div className="contact-wrapper">

        <h1 className="contact-main">
          Let’s Work Together
        </h1>

        <p className="contact-sub">
          Open to exciting opportunities, collaborations, and creative builds.
        </p>

        <a
          href="mailto:syedsiddiq104@gmail.com?subject=Open to Big Ideas & Bold Expression " target="_blank"
          className="contact-cta"
        >
          Get In Touch →
        </a>

      </div>
    </section>
  );
}

export default Contact
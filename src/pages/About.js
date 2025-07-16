import React from 'react';
import './style/About.css'; // Assuming you have a CSS file for styling

const About = ({ title, description, subDescription, image ,id}) => {
  return (
    <section className="container about" id={id|| 'about'}>
      <h2 className="section-title">{title}</h2>
      <div className="about-content">
        <div className="about-text">
          <p>{description}</p>
          {subDescription && <p>{subDescription}</p>}
        </div>
        {image && (
          <div className="about-image">
            <img src={image} alt="About section" />
          </div>
        )}
      </div>
    </section>
  );
};

export default About;

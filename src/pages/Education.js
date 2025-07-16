import React from 'react';
import './style/Education.css'; // Assuming you have a CSS file for styling

const Education = ({ title, educationList ,id}) => {
  return (
    <section className="container education-section" id={id||"education"}>
      <h2 className="section-title">{title}</h2>
      <div className="education-grid">
        {educationList.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.degree}</h3>
            <span className="institution">{edu.institution}</span>
            <span className="edu-duration">{edu.duration}</span>
            {edu.description && <p className="edu-description">{edu.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

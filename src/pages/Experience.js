
import './style/Experience.css'; // Assuming you have a CSS file for styling

import  { useEffect, useState } from 'react';


const ExperienceCard = ({ exp, index,id }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="experience-hover-card" id={id || 'experience'}>
      <div className={`experience-hover-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <h3>{exp.role}</h3>
          <span className="company">{exp.company}</span>
        </div>
        <div className="card-back">
          <span className="duration">{exp.duration}</span>
          <p className="description">{exp.description}</p>
        </div>
      </div>
    </div>
  );
};


const Experience = ({ title, experiences,id }) => {
  return (
    <section className="container experience-hover-section" id={id || 'experience'}>
      <h2 className="section-title">{title}</h2>
      <div className="experience-hover-grid">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;


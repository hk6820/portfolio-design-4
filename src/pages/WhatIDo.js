import React from 'react';
import './style/WhatIDo.css'; // Assuming you have a CSS file for styling

const WhatIDo = ({ title, services,id }) => {
  return (
    <section className="container what-i-do" id={id || 'whatido'}>
      <h2 className="section-title">{title}</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;

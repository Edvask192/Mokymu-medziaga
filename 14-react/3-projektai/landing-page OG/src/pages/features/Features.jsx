import React from 'react';
import './Features.scss';

const Features = ({ title, subtitle, features }) => {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-md-3" key={index}>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import './About.scss';

const About = ({ title, description, whyChooseUs, listItems, image }) => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{title}</h2>
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <h3>{whyChooseUs}</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {listItems.slice(0, listItems.length / 2).map((item, index) => (
                      <li key={index}>
                        <i className="fa fa-check"></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {listItems.slice(listItems.length / 2).map((item, index) => (
                      <li key={index}>
                        <i className="fa fa-check"></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-image">
              <img src={image} className="img-responsive" alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

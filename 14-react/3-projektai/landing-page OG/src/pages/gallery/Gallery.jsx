import React from 'react';
import './Gallery.scss';

const Gallery = ({ title, subtitle, images }) => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        <div className="row">
          {images.map((item, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-4">
              <div className="gallery-item">
                <div className="hover-bg">
                  <a href={item.largeUrl} title={item.title}>
                    <div className="hover-text">
                      <h4>{item.title}</h4>
                      <small>{item.category}</small>
                    </div>
                    <img src={item.url} className="img-responsive" alt={item.title} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import React, { useState } from 'react';
import './Contact.scss';

const Contact = ({ title, subtitle, info }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title text-center">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="6"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-custom">Send Message</button>
            </form>
          </div>
          <div className="col-md-4 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              {info.address && (
                <div className="contact-detail">
                  <i className="fa fa-map-marker"></i>
                  <p>{info.address}</p>
                </div>
              )}
              {info.phone && (
                <div className="contact-detail">
                  <i className="fa fa-phone"></i>
                  <p>{info.phone}</p>
                </div>
              )}
              {info.email && (
                <div className="contact-detail">
                  <i className="fa fa-envelope"></i>
                  <p>{info.email}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

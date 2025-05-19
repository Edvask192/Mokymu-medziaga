import React from 'react';
import './Team.scss';

const Team = ({ title, subtitle, members }) => {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-title text-center">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="row">
          {members.map((member, index) => (
            <div key={index} className="col-md-3">
              <div className="team-member">
                <div className="team-img">
                  <img src={member.image} className="img-responsive" alt={member.name} />
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

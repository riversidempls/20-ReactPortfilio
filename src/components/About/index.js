import React from 'react';
import coverImage from '../../assets/cover/world-map.png';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <div className="my-2">
        <p>
          Full Stack Web Developer with a B.S. degree in Geography (GIS) and a passion for life-long learning.
          Valued team member providing support for business analysis, data analytics, cloud service administration, data modeling and design.
          Effective at translating complex business requirements for both technical and non-technical staff. Skilled collaborator and communicator,
          driven by relentless curiosity to seek out solutions for bugs and also discover new possibilities for improving application design.
        </p>
      </div>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;

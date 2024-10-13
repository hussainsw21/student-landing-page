import React from 'react';
import './App.css';

const StudentLandingPage = () => {
  return (
    <div className="student-landing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">CareerMate</div>
       
        <div className="profile">HS</div>
      </header>

      {/* Main Section */}
      <section className="hero-section">
        <h1>Explore your career with a quiz or with experts.</h1>
        <p className="cta-text">Choose the right path without any dilemma...</p>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-box">
          <h2>ABOUT US</h2>
          <p>
            We at CareerMate aim at providing the best guidance and motivation to help students shape their future.
            We believe that choosing a right career option is necessary as building a brighter future
            and fostering the skills of students requires proper guidance and planning...
          </p>
        </div>
      </section>

      {/* Why Choose the Right Path Section */}
      <section className="why-section">
        <div className="why-box">
          <h2>WHY TO CHOOSE THE RIGHT PATH?</h2>
          <p>
            Choosing the right career path is essential for personal fulfillment and long-term success...
          </p>
        </div>
      </section>
    </div>
  );
};

export default StudentLandingPage;

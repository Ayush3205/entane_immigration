import React from 'react';

const WhatEsanteDoes = () => {
  return (
    <section className="what-esante-section">
      <div className="what-esante-container">
        {/* Title: "Esante" in #FF3300, rest dark */}
        <h2 className="what-esante-title">
          What <span className="what-esante-title-accent">Esante</span> Does For You?
        </h2>
        <p className="what-esante-subtitle">
          A thriving economy, top-tier education, and an unmatched lifestyle await.
        </p>

        {/* Card 1: content left, image right — bg #00352B, gap 10px (Figma layout_5M8C79) */}
        <div className="what-esante-card what-esante-card-1">
          <div className="what-esante-card-content">
            <h3 className="what-esante-card-title">Migration</h3>
            <p className="what-esante-card-desc">
              Get expert guidance on Australia’s migration pathways tailored to your profile. From skilled visas to PR strategies, we help you make informed decisions with complete transparency.
            </p>
            <ul className="what-esante-card-list">
              <li>Personalised migration assessment</li>
              <li>Skilled occupation & eligibility guidance</li>
              <li>End-to-end documentation support</li>
              <li>Transparent and ethical advice</li>
            </ul>
            <button className="what-esante-btn">Learn More</button>
          </div>
          <div 
            className="what-esante-card-image"
            style={{
              background: "url('/images/home-page/Frame 106.png') lightgray 50% / cover no-repeat"
            }}
          ></div>
        </div>

        {/* Card 2: image left, content right — bg #FF3300, gap 41px (Figma layout_53MYCK) */}
        <div className="what-esante-card what-esante-card-2">
          <div 
            className="what-esante-card-image"
            style={{
              background: "url('/images/home-page/Frame 106 (1).png') lightgray 50% / cover no-repeat"
            }}
          ></div>
          <div className="what-esante-card-content">
            <h3 className="what-esante-card-title">Education & Training</h3>
            <p className="what-esante-card-desc">
              We help you choose the right course, university, and pathway aligned with your career goals — ensuring strong visa outcomes and long-term success.
            </p>
            <ul className="what-esante-card-list">
              <li>Course & university selection</li>
              <li>Application & admission support</li>
              <li>Student visa (Subclass 500) guidance</li>
              <li>Pre-departure and post-settlement support</li>
            </ul>
            <button className="what-esante-btn what-esante-btn-light">Learn More</button>
          </div>
        </div>

        {/* Card 3: content left, image right — bg #00352B, gap 10px (Figma layout_5M8C79) */}
        <div className="what-esante-card what-esante-card-3">
          <div className="what-esante-card-content">
            <h3 className="what-esante-card-title">Recruitment</h3>
            <p className="what-esante-card-desc">
              We bridge the gap between global talent and Australian employers. With a structured recruitment approach, we help skilled professionals secure the right opportunities in high-demand sectors.
            </p>
            <ul className="what-esante-card-list">
              <li>Personalised migration assessment</li>
              <li>Skilled occupation & eligibility guidance</li>
              <li>End-to-end documentation support</li>
              <li>Transparent and ethical advice</li>
            </ul>
            <button className="what-esante-btn">Learn More</button>
          </div>
          <div 
            className="what-esante-card-image"
            style={{
              background: "url('/images/home-page/Frame 106.png') lightgray 50% / cover no-repeat"
            }}
          ></div>
        </div>
        


      </div>
    </section>
  );
};

export default WhatEsanteDoes;

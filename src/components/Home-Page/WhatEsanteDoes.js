import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhatEsanteDoes = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  // Clear the ref array to prevent duplicates in React StrictMode
  cardsRef.current = [];

  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        gsap.fromTo(card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="what-esante-section" ref={sectionRef}>
      <div className="what-esante-container">
        <h2 className="what-esante-title">
          What <span className="what-esante-title-accent">Esante</span> Does For You?
        </h2>
        <p className="what-esante-subtitle">
          A thriving economy, top-tier education, and an unmatched lifestyle await.
        </p>

        {/* Card 1: content left, image right — bg #00352B */}
        <div className="what-esante-card what-esante-card-1" ref={addToRefs}>
          <div className="what-esante-card-content">
            <h3 className="what-esante-card-title">Migration</h3>
            <p className="what-esante-card-desc">
              Get expert guidance on Australia's migration pathways tailored to your profile. From skilled visas to PR strategies, we help you make informed decisions with complete transparency.
            </p>
            <ul className="what-esante-card-list">
              <li>Personalised migration assessment</li>
              <li>Skilled occupation &amp; eligibility guidance</li>
              <li>End-to-end documentation support</li>
              <li>Transparent and ethical advice</li>
            </ul>
            <button type="button" className="what-esante-btn" onClick={openConsultation}>Learn More</button>
          </div>
          {/* WebP lazy-loaded img — replaces eager CSS background-image */}
          <div className="what-esante-card-image">
            <img
              src="/images/home-page/Frame 106.webp"
              alt=""
              aria-hidden="true"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%', display: 'block' }}
            />
          </div>
        </div>

        {/* Card 2: image left, content right — bg #FF3300 */}
        <div className="what-esante-card what-esante-card-2" ref={addToRefs}>
          {/* WebP lazy-loaded img — replaces eager CSS background-image */}
          <div className="what-esante-card-image">
            <img
              src="/images/home-page/Frame 106 (1).webp"
              alt=""
              aria-hidden="true"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%', display: 'block' }}
            />
          </div>
          <div className="what-esante-card-content">
            <h3 className="what-esante-card-title">Education &amp; Training</h3>
            <p className="what-esante-card-desc">
              We help you choose the right course, university, and pathway aligned with your career goals — ensuring strong visa outcomes and long-term success.
            </p>
            <ul className="what-esante-card-list">
              <li>Course &amp; university selection</li>
              <li>Application &amp; admission support</li>
              <li>Student visa (Subclass 500) guidance</li>
              <li>Pre-departure and post-settlement support</li>
            </ul>
            <button type="button" className="what-esante-btn what-esante-btn-light" onClick={openConsultation}>Learn More</button>
          </div>
        </div>

        {/* Card 3: content left, image right — bg #00352B */}
        <div className="what-esante-card what-esante-card-3" ref={addToRefs}>
          <div className="what-esante-card-content">
            <h3 className="what-esante-card-title">Recruitment</h3>
            <p className="what-esante-card-desc">
              We bridge the gap between global talent and Australian employers. With a structured recruitment approach, we help skilled professionals secure the right opportunities in high-demand sectors.
            </p>
            <ul className="what-esante-card-list">
              <li>Access to verified Australian employers</li>
              <li>Profile screening &amp; job matching</li>
              <li>Interview preparation &amp; support</li>
              <li>End-to-end recruitment coordination</li>
            </ul>
            <button type="button" className="what-esante-btn" onClick={openConsultation}>Learn More</button>
          </div>
          {/* WebP lazy-loaded img — replaces eager CSS background-image */}
          <div className="what-esante-card-image">
            <img
              src="/images/home-page/Frame 106(2).webp"
              alt=""
              aria-hidden="true"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%', display: 'block' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatEsanteDoes;

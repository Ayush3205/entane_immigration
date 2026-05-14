import React from 'react';
import { Link } from 'react-router-dom';

const CARDS = [
  {
    image: '/images/home-page/image 52.png',
    badge: 'For Students',
    subtitle: 'World - Class Education',
    cta: 'Book 1:1 Counselling',
    href: '/ancillary-services',
  },
  {
    image: '/images/home-page/image 53.png',
    badge: 'For Professionals',
    subtitle: 'Advance Your Career',
    cta: 'Book 1:1 Counselling',
    href: '/recruitment',
  },
  {
    image: '/images/home-page/image 54.png',
    badge: 'For Migration',
    subtitle: 'Start Your New Life',
    cta: 'Book 1:1 Counselling',
    href: '/migration-advisors',
  },
];

const ServiceCards = () => {
  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  return (
    <section className="service-cards-section">
      <div className="service-cards-container">
        {/* Figma: title left (~44%), description right (~56%) */}
        <div className="service-cards-header">
          <h2 className="service-cards-title">
            Everything You Need for<br />Your{' '}
            <span className="service-cards-title-accent">Australia Dream</span>
          </h2>
          <p className="service-cards-description">
            From course selection to visa approval - we provide complete end-to-end support designed to maximise your success.
          </p>
        </div>

        {/* Figma: 3 cards - widths 403 : 636 : 400, full-width strip */}
        <div className="service-cards-strip">
          {CARDS.map((card, i) => (
            <div key={i} className="service-card">
              <div className="service-card-image">
                <img src={card.image} alt={card.badge} />
                <div className="service-card-gradient" />
                <div aria-hidden="true">
                  <span className="service-card-play-icon" />
                </div>
                <div className="service-card-content">
                  <Link to={card.href} className="service-card-badge">
                    {card.badge}
                    <span className="service-card-arrow" aria-hidden="true">&#8599;</span>
                  </Link>
                  <div className="service-card-divider" />
                  <div className="service-card-bottom-row">
                    <h3 className="service-card-subtitle">{card.subtitle}</h3>
                    <button type="button" className="service-card-cta" onClick={openConsultation}>
                      {card.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;

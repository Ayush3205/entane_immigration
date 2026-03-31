import React, { useMemo, useState } from 'react';

const FindYourPlace = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const universities = useMemo(
    () => [
      {
        cityState: 'Sydney, New South Wales',
        name: 'The University of Sydney',
        knownFor: 'Business, Engineering & Medicine',
        ranking: '#19 globally (QS 2024)',
        image: '/images/home-page/gallery-8.png',
        highlightTag: 'QS 2024 Ranking',
        stat: 'Brochure available',
      },
      {
        cityState: 'Canberra, ACT',
        name: 'The Australian National University (ANU)',
        knownFor: 'Politics, Economics & Research',
        ranking: '#34 globally (QS 2024)',
        image: '/images/home-page/gallery-2.png',
        highlightTag: 'QS 2024 Ranking',
        stat: 'Brochure available',
      },
      {
        cityState: 'Sydney, New South Wales',
        name: 'University of New South Wales (UNSW)',
        knownFor: 'Engineering, Technology & Business',
        ranking: '#19 globally (QS 2024)',
        image: '/images/home-page/gallery-3.png',
        highlightTag: 'QS 2024 Ranking',
        stat: 'Brochure available',
      },
      {
        cityState: 'Brisbane, Queensland',
        name: 'The University of Queensland (UQ)',
        knownFor: 'Life Sciences, Environmental Studies & Business',
        ranking: '#43 globally (QS 2024)',
        image: '/images/home-page/gallery-4.png',
        highlightTag: 'QS 2024 Ranking',
        stat: 'Brochure available',
      },
      {
        cityState: 'Perth, Western Australia',
        name: 'The University of Western Australia (UWA)',
        knownFor: 'Mining, Engineering & Marine Science',
        ranking: 'Top 100 globally (QS 2024)',
        image: '/images/home-page/gallery-5.png',
        highlightTag: 'QS 2024 Ranking',
        stat: 'Brochure available',
      },
    ],
    []
  );

  const active = universities[activeIndex] || universities[0];

  const openLeadForm = () => {
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));
  };

  const goPrev = () => setActiveIndex((i) => (i - 1 + universities.length) % universities.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % universities.length);

  const progressPct = universities.length > 1 ? (activeIndex / (universities.length - 1)) * 100 : 0;

  return (
    <section className="find-your-place-section">
      <div className="container">
        <div className="find-place-header-row">
          <div className="section-header">
            <h2 className="find-place-title">
              Find Your Place in <span className="find-place-title-accent">Australia</span>
            </h2>
            <p className="find-place-subtitle">
              Explore major hubs for education and employment.
            </p>
          </div>
        </div>

        <div className="find-place-ui" aria-label="Universities slider">
          <div className="fyp-grid">
            {/* Left: big image card */}
            <article className="fyp-left-card">
              <img className="fyp-left-img" src={active.image} alt={active.name} loading="lazy" />
              <div className="fyp-left-badge">
                <span className="fyp-badge-ico" aria-hidden="true">🏆</span>
                <span className="fyp-badge-text">{active.highlightTag}</span>
              </div>
              <div className="fyp-left-stat">
                <span className="fyp-stat-ico" aria-hidden="true">👥</span>
                <span className="fyp-stat-text">{active.stat}</span>
              </div>
            </article>

            {/* Right: info card */}
            <article className="fyp-right-card">
              <div className="fyp-right-imgwrap">
                <img className="fyp-right-img" src={active.image} alt={active.name} loading="lazy" />
              </div>
              <div className="fyp-right-panel">
                <p className="fyp-location">{active.cityState}</p>
                <h3 className="fyp-name">{active.name}</h3>
                <p className="fyp-knownfor">Known for {active.knownFor}</p>

                <div className="fyp-ranking-row">
                  <span className="fyp-dot" aria-hidden="true" />
                  <span className="fyp-ranking-text">{active.ranking}</span>
                </div>

                <button type="button" className="fyp-download-btn" onClick={openLeadForm}>
                  Download Brochure
                </button>
              </div>

              <div className="fyp-controls" aria-label="University navigation">
                <button type="button" className="fyp-arrow" onClick={goPrev} aria-label="Previous university">
                  ‹
                </button>

                <div className="fyp-progress" aria-hidden="true">
                  <div className="fyp-progress-track" />
                  <div className="fyp-progress-fill" style={{ width: `${progressPct}%` }} />
                </div>

                <button type="button" className="fyp-arrow" onClick={goNext} aria-label="Next university">
                  ›
                </button>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FindYourPlace;

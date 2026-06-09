import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const mobileServiceGroups = [
  {
    title: 'Migration',
    links: [
      { label: 'Migration Advisors', to: '/migration-advisors' },
    ],
  },
  {
    title: 'Education & Training',
    links: [
      { label: 'Search by Courses', to: '/search-courses' },
      { label: 'Search by University', to: '/search-universities' },
      { label: 'Expense Planning & Scholarships', to: '/expense-planning-scholarships' },
      { label: 'Book 1:1 Consultation', to: '/book-consultation', isAction: true },
    ],
  },
  {
    title: 'Ancillary Services',
    links: [
      { label: 'Ancillary Services Overview', to: '/ancillary-services' },
      { label: 'SOP & Other Documents', to: '/sop-documents' },
      { label: 'Accommodation', to: '/accommodation' },
      { label: 'Part time job support', to: '/part-time-job-support' },
      { label: 'IELTS/PTE Coaching', to: '/ielts-pte-coaching' },
      { label: 'Airport Services', to: '/airport-services' },
      { label: 'Post-Arrival Support', to: '/post-arrival-support' },
    ],
  },
  {
    title: 'Recruitment',
    links: [
      { label: 'Recruitment', to: '/recruitment' },
      { label: 'For Job Seekers', to: '/job-seekers' },
      { label: 'Top In-Demand Jobs', to: { pathname: '/job-seekers', hash: '#top-in-demand' } },
      { label: 'For Employers', to: '/employers' },
    ],
  },
];

const mobileResourceLinks = [
  { label: 'News & Blogs', to: '/news-blogs' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Eligibility Calculator', to: '/eligibility-calculator' },
];

// ── Scroll thresholds (must match HomePage.js constants) ──────────────────
// const MORPH_END = 800;   // same as HomePage — when the video morph finishes
const HEADER_HIDE = 60;    // px before navbar slides away

const Header = ({ hideNavbar = false, headerRef = null }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const openConsultation = () => {
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
  };

  const toggleMobileMenu = () => {
    const willOpen = !mobileOpen;
    setMobileOpen(willOpen);
    setMobileServicesOpen(willOpen);
    if (!willOpen) {
      setMobileResourcesOpen(false);
    }
  };

  // navPhase: 'transparent' | 'hidden' | 'solid'
  // transparent — over the hero video at the top of the page
  // hidden      — scrolling through the morph animation (navbar slid away)
  // solid       — morph done, solid black bar permanently pinned
  const getPhase = (y) => {
    if (!isHome) return 'solid';
    if (y <= HEADER_HIDE) return 'transparent';
    return 'solid';
  };

  const [navPhase, setNavPhase] = useState(() =>
    getPhase(typeof window !== 'undefined' ? window.scrollY : 0)
  );

  useEffect(() => {
    const onScroll = () => {
      const next = getPhase(window.scrollY);
      setNavPhase(prev => (prev === next ? prev : next));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // sync immediately on mount
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        ref={headerRef}
        className={`header header--phase-${navPhase} ${hideNavbar ? 'header--hidden' : ''}`}
      >
        {/* Top contact bar — always has its red background */}
        <div className="header-top">
          <div className="header-top__inner">
            <a href="mailto:admin@esante.com.au" className="header-contact-item">
              <svg className="header-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3h12v10H2V3z" stroke="white" strokeWidth="1.5" fill="none" />
                <path d="M2 3l6 5 6-5" stroke="white" strokeWidth="1.5" fill="none" />
              </svg>
              admin@esante.com.au
            </a>
            <div className="header-contact-item">
              <svg className="header-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 2h3l1 3-2 2c1 2 2 3 4 4l2-2 3 1v3c0 1-1 2-2 2-6 0-11-5-11-11 0-1 1-2 2-2z" stroke="white" strokeWidth="1.5" fill="none" />
              </svg>
              +61409557421
            </div>
          </div>
        </div>

        {/* Main nav — navPhase class drives background, visibility, shadow */}
        <nav className={`header-nav header-nav--${navPhase}`}>
          <div className="nav-container">
            {/* Logo */}
            <div className="logo">
              <Link to="/">
                <img src="/Logo Navbar.png" alt="Esante Logo" />
              </Link>
            </div>

            {/* Desktop links */}
            <ul className="nav-menu">
              <li><Link to="/about-us">About Us</Link></li>

              <li className="nav-item-dropdown nav-item-dropdown--mega">
                <span className="dropdown-toggle">Our Services</span>
                <div className="dropdown-mega">
                  <div className="dropdown-mega-column">
                    <span className="dropdown-mega-title">Migration</span>
                    <ul>
                      <li><Link to="/migration-advisors">Migration Advisors</Link></li>
                    </ul>
                  </div>
                  <div className="dropdown-mega-column">
                    <span className="dropdown-mega-title">Education &amp; Training</span>
                    <ul>
                      <li><Link to="/search-courses">Search by Courses</Link></li>
                      <li><Link to="/search-universities">Search by University</Link></li>
                      <li><Link to="/expense-planning-scholarships">Expense Planning &amp; Scholarships</Link></li>
                      <li className="dropdown-mega-sub">
                        <span className="dropdown-mega-subtitle">Ancillary Services</span>
                        <ul>
                          <li><Link to="/ancillary-services">Ancillary Services Overview</Link></li>
                          <li><Link to="/sop-documents">SOP &amp; Other Documents</Link></li>
                          <li><Link to="/accommodation">Accommodation</Link></li>
                          <li><Link to="/part-time-job-support">Part time job support</Link></li>
                          <li><Link to="/ielts-pte-coaching">IELTS/PTE Coaching</Link></li>
                          <li><Link to="/airport-services">Airport Services</Link></li>
                          <li><Link to="/post-arrival-support">Post-Arrival Support</Link></li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          to="/book-consultation"
                          className="dropdown-mega-action"
                        >
                          Book 1:1 Consultation
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown-mega-column">
                    <span className="dropdown-mega-title">Recruitment</span>
                    <ul>
                      <li><Link to="/recruitment">Recruitment</Link></li>
                      <li><Link to="/job-seekers">For Job Seekers</Link></li>
                      <li>
                        <Link to={{ pathname: '/job-seekers', hash: '#top-in-demand' }}>
                          Top In-Demand Jobs
                        </Link>
                      </li>
                      <li><Link to="/employers">For Employers</Link></li>
                    </ul>
                  </div>
                </div>
              </li>

              <li><Link to="/why-australia">Why Australia</Link></li>

              <li className="nav-item-dropdown">
                <span className="dropdown-toggle">Tools &amp; Resources</span>
                <ul className="dropdown-menu">
                  <li><Link to="/news-blogs">News &amp; Blogs</Link></li>
                  <li><Link to="/case-studies">Case Studies</Link></li>
                  <li><Link to="/eligibility-calculator">Eligibility Calculator</Link></li>
                </ul>
              </li>
            </ul>

            {/* Right side: CTA + hamburger */}
            <div className="nav-actions">
              <button
                type="button"
                className="cta-button"
                onClick={openConsultation}
              >
                Book 1:1 Counselling
              </button>

              <button
                type="button"
                className={`hamburger ${mobileOpen ? 'hamburger--open' : ''}`}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation-menu"
                onClick={toggleMobileMenu}
              >
                <span className="hamburger__bar" />
                <span className="hamburger__bar" />
                <span className="hamburger__bar" />
              </button>
            </div>
          </div>

          {/* Mobile drawer */}
          <div
            id="mobile-navigation-menu"
            className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}
          >
            <ul className="mobile-menu__list">
              <li className="mobile-menu__item">
                <Link className="mobile-menu__link" to="/about-us" onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>

              <li className="mobile-menu__item mobile-menu__item--accordion">
                <button
                  type="button"
                  className="mobile-menu__trigger"
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-panel"
                  onClick={() => setMobileServicesOpen(prev => !prev)}
                >
                  <span>Our Services</span>
                  <span className="mobile-menu__chevron" aria-hidden="true" />
                </button>

                <div
                  id="mobile-services-panel"
                  className={`mobile-menu__panel ${mobileServicesOpen ? 'mobile-menu__panel--open' : ''}`}
                >
                  {mobileServiceGroups.map(group => (
                    <div className="mobile-menu__group" key={group.title}>
                      <span className="mobile-menu__group-title">{group.title}</span>
                      <ul className="mobile-menu__sublist">
                        {group.links.map(link => (
                          <li key={link.label}>
                            <Link
                              to={link.to}
                              className={`mobile-menu__sub-link ${link.isAction ? 'mobile-menu__sub-link--action' : ''}`}
                              onClick={closeMobileMenu}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>

              <li className="mobile-menu__item">
                <Link className="mobile-menu__link" to="/why-australia" onClick={closeMobileMenu}>
                  Why Australia
                </Link>
              </li>

              <li className="mobile-menu__item mobile-menu__item--accordion">
                <button
                  type="button"
                  className="mobile-menu__trigger"
                  aria-expanded={mobileResourcesOpen}
                  aria-controls="mobile-resources-panel"
                  onClick={() => setMobileResourcesOpen(prev => !prev)}
                >
                  <span>Tools &amp; Resources</span>
                  <span className="mobile-menu__chevron" aria-hidden="true" />
                </button>

                <div
                  id="mobile-resources-panel"
                  className={`mobile-menu__panel ${mobileResourcesOpen ? 'mobile-menu__panel--open' : ''}`}
                >
                  <div className="mobile-menu__group mobile-menu__group--compact">
                    <ul className="mobile-menu__sublist">
                      {mobileResourceLinks.map(link => (
                        <li key={link.label}>
                          <Link
                            to={link.to}
                            className="mobile-menu__sub-link"
                            onClick={closeMobileMenu}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <button
              type="button"
              className="cta-button cta-button--mobile"
              onClick={() => {
                closeMobileMenu();
                openConsultation();
              }}
            >
              Book 1:1 Counselling
            </button>
          </div>
        </nav>
      </header>
      {!isHome && <div className="header-placeholder" />}
    </>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// ── Scroll thresholds (must match HomePage.js constants) ──────────────────
const MORPH_END   = 800;   // same as HomePage — when the video morph finishes
const HEADER_HIDE = 60;    // px before navbar slides away

const Header = ({ hideNavbar = false, headerRef = null }) => {
  const location = useLocation();
  const isHome   = location.pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);

  // navPhase: 'transparent' | 'hidden' | 'solid'
  // transparent — over the hero video at the top of the page
  // hidden      — scrolling through the morph animation (navbar slid away)
  // solid       — morph done, solid black bar permanently pinned
  const getPhase = (y) => {
    if (!isHome)           return 'solid';
    if (y <= HEADER_HIDE)  return 'transparent';
    if (y < MORPH_END)     return 'hidden';
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
  }, [isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      ref={headerRef}
      className={`header header--phase-${navPhase} ${hideNavbar ? 'header--hidden' : ''}`}
    >
      {/* Top contact bar — always has its red background */}
      <div className="header-top">
        <div className="header-top__inner">
          <a href="mailto:admin@esante.com.au" className="header-contact-item">
            <svg className="header-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3h12v10H2V3z" stroke="white" strokeWidth="1.5" fill="none"/>
              <path d="M2 3l6 5 6-5" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
            admin@esante.com.au
          </a>
          <div className="header-contact-item">
            <svg className="header-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 2h3l1 3-2 2c1 2 2 3 4 4l2-2 3 1v3c0 1-1 2-2 2-6 0-11-5-11-11 0-1 1-2 2-2z" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
            +44 1234 5678 90
          </div>
        </div>
      </div>

      {/* Main nav — navPhase class drives background, visibility, shadow */}
      <nav className={`header-nav header-nav--${navPhase}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="Esante Logo" />
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
                  <span className="dropdown-mega-title">Edu &amp; Training</span>
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
                        <li><Link to="/post-study-work-visa">Post Study Work Visa</Link></li>
                        <li><Link to="/part-time-job-support">Part time job support</Link></li>
                        <li><Link to="/ielts-pte-coaching">IELTS/PTE Coaching</Link></li>
                        <li><Link to="/airport-services">Airport Services</Link></li>
                        <li><Link to="/post-arrival-support">Post-Arrival Support</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/book-consultation">Book 1:1 Consultation</Link></li>
                  </ul>
                </div>
                <div className="dropdown-mega-column">
                  <span className="dropdown-mega-title">Recruitment</span>
                  <ul>
                    <li><Link to="/recruitment">Recruitment</Link></li>
                    <li><Link to="/job-seekers">For Job Seekers</Link></li>
                    <li><Link to="/job-seekers#top-in-demand">Top In-Demand Jobs</Link></li>
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
                <li><Link to="/cost-of-living-calculator">Cost of Living Calculator</Link></li>
              </ul>
            </li>
          </ul>

          {/* Right side: CTA + hamburger */}
          <div className="nav-actions">
            <button
              type="button"
              className="cta-button"
              onClick={() => window.dispatchEvent(new CustomEvent('openConsultationPopup'))}
            >
              Book 1:1 Counselling
            </button>

            <button
              type="button"
              className={`hamburger ${mobileOpen ? 'hamburger--open' : ''}`}
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(prev => !prev)}
            >
              <span className="hamburger__bar" />
              <span className="hamburger__bar" />
              <span className="hamburger__bar" />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}>
          <ul className="mobile-menu__list">
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/search-courses">Our Services</Link></li>
            <li><Link to="/why-australia">Why Australia</Link></li>
            <li><Link to="/news-blogs">Tools &amp; Resources</Link></li>
          </ul>
          <button
            type="button"
            className="cta-button cta-button--mobile"
            onClick={() => {
              setMobileOpen(false);
              window.dispatchEvent(new CustomEvent('openConsultationPopup'));
            }}
          >
            Book 1:1 Counselling
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
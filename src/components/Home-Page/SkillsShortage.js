import React, { useRef, useState, useEffect } from 'react';


const SKILL_IMAGES = ['/images/home-page/skill-1.png', '/images/home-page/skill-2.png', '/images/home-page/skill-3.png'];

const SkillsShortage = () => {
  const scrollRef = useRef(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    { 
      title: 'Nurses', 
      description: 'High demand across Australia with strong PR pathways and stable career growth....',
      fullDescription: 'Nursing is one of the most in-demand professions in Australia. With an aging population and growing healthcare needs, qualified nurses are highly sought after. Opportunities exist in hospitals, aged care facilities, community health, and specialized medical units.',
      demand: 'Very High',
      visaPathways: 'Skilled Migration, Employer Sponsored',
      salaryRange: 'A$65,000 - A$95,000',
      requirements: 'Bachelor of Nursing, Registration with AHPRA'
    },
    { 
      title: 'Chefs', 
      description: 'A growing hospitality industry with excellent job opportunities and migration prospects....',
      fullDescription: 'Australia\'s vibrant culinary scene creates constant demand for skilled chefs. From fine dining restaurants to cafes and hotels, qualified chefs with international experience are highly valued. The industry offers diverse career paths and opportunities for growth.',
      demand: 'High',
      visaPathways: 'Skilled Migration, Employer Sponsored',
      salaryRange: 'A$55,000 - A$85,000',
      requirements: 'Certificate III/IV in Commercial Cookery, Relevant Experience'
    },
    { 
      title: 'Information Technology', 
      description: 'One of the fastest-growing sectors with strong demand for skilled tech professionals...',
      fullDescription: 'The IT sector in Australia is rapidly expanding with opportunities in software development, cybersecurity, data analytics, and cloud computing. Tech professionals are in high demand across all industries, from startups to major corporations.',
      demand: 'Very High',
      visaPathways: 'Skilled Migration, Employer Sponsored, Global Talent',
      salaryRange: 'A$80,000 - A$150,000+',
      requirements: 'Bachelor\'s in IT/Computer Science, Relevant Certifications'
    },
    { 
      title: 'TRADES & TECHNICIANS', 
      description: 'Critical shortage occupations with strong demand and clear migration pathways....',
      fullDescription: 'Critical shortage occupations with strong demand and clear migration pathways.',
      demand: 'High',
      visaPathways: 'Skilled Migration, Employer Sponsored',
      salaryRange: 'A$50,000 - A$75,000',
      requirements: 'Certificate III/Diploma in TRADES & TECHNICIANS'
    },
    { 
      title: 'ENGINEERING', 
      description: 'High-demand profession offering global career opportunities and long-term stability....',
      fullDescription: 'High-demand profession offering global career opportunities and long-term stability.',
      demand: 'Very High',
      visaPathways: 'Skilled Migration, Employer Sponsored',
      salaryRange: 'A$60,000 - A$120,000',
      requirements: 'Bachelor\'s in Engineering, Relevant Experience'
    }
  ];

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedJob(null);
      }
    };

    if (selectedJob) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedJob]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('.job-card')?.offsetWidth ?? 320;
    const gap = 24;
    const step = cardWidth + gap;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section className="skills-shortage-section">
      <div className="container">
        <div className="skills-section-header">
          <h2 className="skills-section-title">
            <span className="skills-section-title-accent">Skills</span> in Shortage
          </h2>
          <p className="skills-section-subtitle">
            Sectors actively seeking international talent right now.
          </p>
        </div>

        <div className="skills-carousel-wrap">
          <div className="jobs-scroll" ref={scrollRef}>
            {jobs.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-image">
                  <img src={SKILL_IMAGES[index % 3]} alt={job.title} />
                </div>
                <div className="job-content">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-description">{job.description}</p>
                  <button 
                    type="button" 
                    className="skills-explore-btn"
                    onClick={() => setSelectedJob({ ...job, imageIndex: index })}
                  >
                    Explore More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-nav">
            <button type="button" className="nav-arrow nav-arrow-left" onClick={() => scroll('left')} aria-label="Previous">
              ←
            </button>
            <button type="button" className="nav-arrow nav-arrow-right" onClick={() => scroll('right')} aria-label="Next">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Job Modal */}
      {selectedJob && (
        <div 
          className="job-modal-overlay"
          onClick={() => setSelectedJob(null)}
        >
          <div 
            className="job-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="job-modal-close"
              onClick={() => setSelectedJob(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="job-modal-content">
              <div className="job-modal-image">
                <img
                  src={SKILL_IMAGES[selectedJob.imageIndex % 3]}
                  alt={selectedJob.title}
                />
              </div>
              <div className="job-modal-details">
                <h2 className="job-modal-title">{selectedJob.title}</h2>
                <p className="job-modal-description">{selectedJob.fullDescription || selectedJob.description}</p>
                <div className="job-modal-info">
                  <div className="job-info-item">
                    <span className="job-info-label">Demand:</span>
                    <span className="job-info-value">{selectedJob.demand || 'High'}</span>
                  </div>
                  <div className="job-info-item">
                    <span className="job-info-label">Visa Pathways:</span>
                    <span className="job-info-value">{selectedJob.visaPathways || 'Skilled Migration'}</span>
                  </div>
                  <div className="job-info-item">
                    <span className="job-info-label">Salary Range:</span>
                    <span className="job-info-value">{selectedJob.salaryRange || 'Competitive'}</span>
                  </div>
                  <div className="job-info-item">
                    <span className="job-info-label">Requirements:</span>
                    <span className="job-info-value">{selectedJob.requirements || 'Relevant Qualifications'}</span>
                  </div>
                </div>
                <div className="job-modal-actions">
                  <button 
                    className="job-modal-btn-primary"
                    onClick={() => {
                      window.location.href = '/#book-free-call';
                      setSelectedJob(null);
                    }}
                  >
                    Book Free Consultation
                  </button>
                  <button 
                    className="job-modal-btn-secondary"
                    onClick={() => setSelectedJob(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillsShortage;

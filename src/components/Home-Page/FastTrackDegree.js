import React, { useState, useEffect } from 'react';


const FAST_TRACK_IMAGES = ['/images/home-page/fast-track-1.png', '/images/home-page/fast-track-2.png'];

const FastTrackDegree = () => {
  const [activeTab, setActiveTab] = useState('management');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = {
    management: [
      {
        title: 'Master\'s in Business Management',
        description: 'Develop leadership, strategy, and decision-making skills for global business roles...',
        fullDescription: 'Develop leadership, strategy, and decision-making skills for global business roles.',
        duration: '2 years',
        intake: 'February, July',
        location: 'Sydney, Melbourne, Brisbane'
      },
      {
        title: 'Master\'s in Business Analytics',
        description: 'Turn data into insights and drive business decisions in a data-driven world...',
        fullDescription: 'Turn data into insights and drive business decisions in a data-driven world.',
        duration: '2 years',
        intake: 'February, July',
        location: 'Sydney, Melbourne, Brisbane'
      }
    ],
    engineering: [
      {
        title: 'Master\'s of Engineering (Civil / Mechanical / Electrical)',
        description: 'Build industry-ready technical expertise for high-demand engineering careers...',
        fullDescription: 'Build industry-ready technical expertise for high-demand engineering careers.',
        duration: '2 years',
        intake: 'February, July',
        location: 'Sydney, Melbourne, Perth'
      },
      {
        title: 'Master\'s in Information Technology',
        description: 'Gain cutting-edge skills in technology, systems, and digital innovation...',
        fullDescription: 'Gain cutting-edge skills in technology, systems, and digital innovation.',
        duration: '2 years',
        intake: 'February, July',
        location: 'Sydney, Melbourne, Perth'
      }
    ],
    medical: [
      {
        title: 'Master\'s in Public Health (MPH)',
        description: 'Create impact by improving community health and global healthcare systems...',
        fullDescription: 'Create impact by improving community health and global healthcare systems.',
        duration: '2 years',
        intake: 'February, July',
        location: 'Sydney, Melbourne, Adelaide'
      },
      {
        title: 'Master\'s in Healthcare Management',
        description: 'Combine healthcare knowledge with leadership to manage modern health systems...',
        fullDescription: 'Combine healthcare knowledge with leadership to manage modern health systems.',
        duration: '2 years',
        intake: 'February, July',
        location: 'Sydney, Melbourne, Adelaide'
      }
    ]
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedCourse(null);
      }
    };

    if (selectedCourse) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCourse]);

  return (
    <section className="fast-track-section">
      <div className="container">
        <div className="fasttrack-section-header">
          <h2 className="fasttrack-section-title">
            Fast-Track Your <span className="fasttrack-section-title-accent">Degree</span>
          </h2>
          <p className="fasttrack-section-subtitle">
            Foundation and diploma programs designed for university success.
          </p>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'management' ? 'active' : ''}`}
              onClick={() => setActiveTab('management')}
            >
              Management
            </button>
            <button
              className={`tab ${activeTab === 'engineering' ? 'active' : ''}`}
              onClick={() => setActiveTab('engineering')}
            >
              Engineering
            </button>
            <button
              className={`tab ${activeTab === 'medical' ? 'active' : ''}`}
              onClick={() => setActiveTab('medical')}
            >
              Medical
            </button>
          </div>

          <div className="courses-wrapper">
            <img
              src="/images/home-page/thingreen.png"
              alt=""
              className="thingreen-image"
              aria-hidden="true"
            />
            <div className="courses-grid">
              {courses[activeTab].map((course, index) => (
                <div key={index} className="course-card">
                  <div className="course-image">
                    <img
                      src={FAST_TRACK_IMAGES[index % FAST_TRACK_IMAGES.length]}
                      alt={course.title}
                    />
                  </div>
                  <div className="course-content">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-description">{course.description}</p>
                    <button
                      className="fasttrack-explore-btn"
                      onClick={() => setSelectedCourse({ ...course, category: activeTab, imageIndex: index })}
                    >
                      Explore More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Course Modal */}
      {selectedCourse && (
        <div 
          className="course-modal-overlay"
          onClick={() => setSelectedCourse(null)}
        >
          <div 
            className="course-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="course-modal-close"
              onClick={() => setSelectedCourse(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="course-modal-content">
              <div className="course-modal-image">
                <img
                  src={FAST_TRACK_IMAGES[selectedCourse.imageIndex % FAST_TRACK_IMAGES.length]}
                  alt={selectedCourse.title}
                />
              </div>
              <div className="course-modal-details">
                <h2 className="course-modal-title">{selectedCourse.title}</h2>
                <p className="course-modal-description">{selectedCourse.fullDescription || selectedCourse.description}</p>
                <div className="course-modal-info">
                  <div className="course-info-item">
                    <span className="course-info-label">Duration:</span>
                    <span className="course-info-value">{selectedCourse.duration || '2 years'}</span>
                  </div>
                  <div className="course-info-item">
                    <span className="course-info-label">Intake:</span>
                    <span className="course-info-value">{selectedCourse.intake || 'February, July'}</span>
                  </div>
                  <div className="course-info-item">
                    <span className="course-info-label">Location:</span>
                    <span className="course-info-value">{selectedCourse.location || 'Multiple cities'}</span>
                  </div>
                </div>
                <div className="course-modal-actions">
                  <button 
                    className="course-modal-btn-primary"
                    onClick={() => {
                      window.location.href = '/#book-free-call';
                      setSelectedCourse(null);
                    }}
                  >
                    Book Free Consultation
                  </button>
                  <button 
                    className="course-modal-btn-secondary"
                    onClick={() => setSelectedCourse(null)}
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

export default FastTrackDegree;

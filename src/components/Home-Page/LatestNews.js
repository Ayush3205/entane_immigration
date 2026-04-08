import React, { useState, useEffect } from 'react';

const NEWS_IMAGES = [
  '/images/home-page/news-1.png',
  '/images/home-page/news-2.png',
  '/images/home-page/news-3.png',
  '/images/home-page/news-4.png'
];

const LatestNews = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    { 
      date: '19 Nov 2025', 
      title: 'Australia Awaits: Your Ultimate Guide to Studying, Working, and Living Down Under',
      excerpt: 'Discover everything you need to know about making Australia your new home. From world-class education to thriving job opportunities, Australia offers an unparalleled lifestyle.',
      fullText: 'Australia has long been a top destination for international students and professionals seeking quality education, career opportunities, and an exceptional quality of life. With its world-renowned universities, diverse culture, and strong economy, Australia provides an ideal environment for personal and professional growth. Whether you\'re pursuing higher education, seeking employment opportunities, or planning to settle permanently, Australia offers numerous pathways to achieve your goals. The country\'s education system is globally recognized, with institutions consistently ranking among the world\'s best. Additionally, Australia\'s strong economy and skilled migration programs make it an attractive destination for those looking to build a successful career. From the vibrant cities of Sydney and Melbourne to the stunning natural landscapes, Australia truly has something for everyone.'
    },
    { 
      date: '19 Nov 2025', 
      title: 'Australia Awaits: Your Ultimate Guide to Studying, Working, and Living Down Under',
      excerpt: 'Discover everything you need to know about making Australia your new home. From world-class education to thriving job opportunities, Australia offers an unparalleled lifestyle.',
      fullText: 'Australia has long been a top destination for international students and professionals seeking quality education, career opportunities, and an exceptional quality of life. With its world-renowned universities, diverse culture, and strong economy, Australia provides an ideal environment for personal and professional growth. Whether you\'re pursuing higher education, seeking employment opportunities, or planning to settle permanently, Australia offers numerous pathways to achieve your goals. The country\'s education system is globally recognized, with institutions consistently ranking among the world\'s best. Additionally, Australia\'s strong economy and skilled migration programs make it an attractive destination for those looking to build a successful career. From the vibrant cities of Sydney and Melbourne to the stunning natural landscapes, Australia truly has something for everyone.'
    },
    { 
      date: '19 Nov 2025', 
      title: 'Australia Awaits: Your Ultimate Guide to Studying, Working, and Living Down Under',
      excerpt: 'Discover everything you need to know about making Australia your new home. From world-class education to thriving job opportunities, Australia offers an unparalleled lifestyle.',
      fullText: 'Australia has long been a top destination for international students and professionals seeking quality education, career opportunities, and an exceptional quality of life. With its world-renowned universities, diverse culture, and strong economy, Australia provides an ideal environment for personal and professional growth. Whether you\'re pursuing higher education, seeking employment opportunities, or planning to settle permanently, Australia offers numerous pathways to achieve your goals. The country\'s education system is globally recognized, with institutions consistently ranking among the world\'s best. Additionally, Australia\'s strong economy and skilled migration programs make it an attractive destination for those looking to build a successful career. From the vibrant cities of Sydney and Melbourne to the stunning natural landscapes, Australia truly has something for everyone.'
    },
    { 
      date: '19 Nov 2025', 
      title: 'Australia Awaits: Your Ultimate Guide to Studying, Working, and Living Down Under',
      excerpt: 'Discover everything you need to know about making Australia your new home. From world-class education to thriving job opportunities, Australia offers an unparalleled lifestyle.',
      fullText: 'Australia has long been a top destination for international students and professionals seeking quality education, career opportunities, and an exceptional quality of life. With its world-renowned universities, diverse culture, and strong economy, Australia provides an ideal environment for personal and professional growth. Whether you\'re pursuing higher education, seeking employment opportunities, or planning to settle permanently, Australia offers numerous pathways to achieve your goals. The country\'s education system is globally recognized, with institutions consistently ranking among the world\'s best. Additionally, Australia\'s strong economy and skilled migration programs make it an attractive destination for those looking to build a successful career. From the vibrant cities of Sydney and Melbourne to the stunning natural landscapes, Australia truly has something for everyone.'
    }
  ];

  const openModal = (index) => {
    setSelectedArticle(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedArticle !== null) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedArticle]);

  return (
    <>
      <section className="latest-news-section">
        <div className="container">
          <div className="latest-news-header">
            <h2 className="latest-news-title">Latest News</h2>
            <p className="latest-news-tagline">
              Join thousands who have successfully made the move.
            </p>
          </div>

          <div className="latest-news-grid">
            {articles.map((article, index) => (
              <article key={index} className="latest-news-card">
                <div className="latest-news-card-image">
                  <img src={NEWS_IMAGES[index]} alt="" />
                </div>
                <time className="latest-news-date">{article.date}</time>
                <h3 className="latest-news-card-title">{article.title}</h3>
                <button 
                  onClick={() => openModal(index)}
                  className="latest-news-read-more"
                >
                  Read More
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedArticle !== null && (
        <div className="latest-news-modal-overlay" onClick={closeModal}>
          <div className="latest-news-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="latest-news-modal-close" 
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="latest-news-modal-image">
              <img src={NEWS_IMAGES[selectedArticle]} alt="" />
            </div>
            <div className="latest-news-modal-body">
              <time className="latest-news-modal-date">{articles[selectedArticle].date}</time>
              <h2 className="latest-news-modal-title">{articles[selectedArticle].title}</h2>
              <div className="latest-news-modal-text">
                <p>{articles[selectedArticle].fullText}</p>
              </div>
              <div className="latest-news-modal-actions">
                <button 
                  className="latest-news-modal-btn-primary"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('openConsultationPopup'));
                    closeModal();
                  }}
                >
                  Book Free Consultation
                </button>
                <button 
                  className="latest-news-modal-btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LatestNews;

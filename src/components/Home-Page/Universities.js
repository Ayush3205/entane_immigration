import React from 'react';

const Universities = () => {
  const universities = [
    { name: 'University 1', logo: '/images/uni-1.png' },
    { name: 'University 2', logo: '/images/uni-2.png' },
    { name: 'University 3', logo: '/images/uni-3.png' },
    { name: 'University 4', logo: '/images/uni-4.png' },
    { name: 'University 5', logo: '/images/uni-5.png' },
    { name: 'University 6', logo: '/images/uni-6.png' },
    { name: 'University 7', logo: '/images/uni-7.png' },
    { name: 'University 8', logo: '/images/uni-8.png' }
  ];

  return (
    <section className="universities-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Universities</h2>
          <p className="section-subtitle">
            Partner institutions offering world-class education
          </p>
        </div>

        <div className="universities-grid">
          {universities.map((uni, index) => (
            <div key={index} className="university-card">
              <div className="university-logo">
                <img src={uni.logo} alt={uni.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Universities;

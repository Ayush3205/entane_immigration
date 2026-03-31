import React, { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'John Smith',
      role: 'Student',
      image: '/images/testimonial-1.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Esante helped me achieve my dream of studying in Australia. The process was smooth and the support was exceptional.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Professional',
      image: '/images/testimonial-2.jpg',
      text: 'The migration process was made so easy with Esante. Their team guided me through every step and I successfully relocated to Australia for my career.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Student',
      image: '/images/testimonial-3.jpg',
      text: 'Excellent service! The counselling sessions were very helpful and informative. I highly recommend Esante to anyone looking to study or migrate to Australia.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Real stories from people who achieved their dreams with Esante
          </p>
        </div>

        <div className="testimonials-container">
          <button className="testimonial-nav prev" onClick={prevTestimonial}>
            ←
          </button>

          <div className="testimonial-card">
            <div className="testimonial-image">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
              />
            </div>
            <div className="testimonial-content">
              <div className="stars">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                <p className="author-role">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <button className="testimonial-nav next" onClick={nextTestimonial}>
            →
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

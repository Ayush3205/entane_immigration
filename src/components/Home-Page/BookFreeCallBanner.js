import React from 'react';

const BookFreeCallBanner = () => {
  return (
    <section className="book-free-call-banner">
      <div className="container">
        <div className="book-free-call-card">
          <h2 className="book-free-call-title">
            Ready to Start your <span className="book-free-call-australian">Australian</span> <span className="book-free-call-accent">Journey</span>?
          </h2>
          <p className="book-free-call-subtitle">
            Let our experts in Mumbai and Brisbane guide you every step of the way.
          </p>
          <button
            type="button"
            className="book-free-call-btn"
            onClick={() => window.dispatchEvent(new CustomEvent('openConsultationPopup'))}
          >
            Book Free Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookFreeCallBanner;

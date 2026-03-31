import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

function BookConsultationPage() {
  return (
    <div className="service-page">
      <Header />
      <main className="service-page__main" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <section className="container">
          <h1>Book 1:1 Consultation</h1>
          <p>Schedule a personalised consultation with our experts.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default BookConsultationPage;

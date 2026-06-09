import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import ConsultationForm from '../components/Reusable/ConsultationForm';

function BookConsultationPage() {
  return (
    <div className="service-page consultation-page">
      <Header />
      <main className="service-page__main consultation-page__main">
        <section className="container consultation-page__container">
          <div className="consultation-page__hero">
            <p className="consultation-page__eyebrow">Lead Form</p>
            <h1 className="consultation-page__title">Book 1:1 Consultation</h1>
            <p className="consultation-page__description">
              Schedule a personalised consultation with our experts using the same lead form, now directly on the page.
            </p>
          </div>

          <div className="consultation-page__card">
            <div className="consultation-page__card-copy">
              <h2 className="consultation-popup-title consultation-page__card-title">
                Tell us a bit about your plans
              </h2>
              <p className="consultation-popup-subtitle consultation-page__card-subtitle">
                Share your study, migration, or recruitment goals and our team will reach out with the right next steps.
              </p>
            </div>
            <ConsultationForm source="Book Consultation Page" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default BookConsultationPage;

import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

function VisaPathwaysPage() {
  return (
    <div className="service-page">
      <Header />
      <main className="service-page__main" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <section id="migration-advisors" className="container">
          <h1>Visa Pathways</h1>
          <p>Migration advisors and visa pathways information. (Section: Migration Advisors)</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default VisaPathwaysPage;

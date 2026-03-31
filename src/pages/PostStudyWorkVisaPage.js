import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

function PostStudyWorkVisaPage() {
  return (
    <div className="service-page">
      <Header />
      <main className="service-page__main" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <section className="container">
          <h1>Post Study Work Visa</h1>
          <p>Information and support for post-study work visa applications.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default PostStudyWorkVisaPage;

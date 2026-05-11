import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import EsanteBanner from '../components/Reusable/EsanteBanner';
import WhyAustralia from '../components/Why-Australia/WhyAustralia';

function WhyAustraliaPage() {
  return (
    <div className="why-australia-page">
      <Header />
      <WhyAustralia />
      <EsanteBanner
        line1=""
        line2="Your Journey, Done Right with Esante"
        line3=""
        subtext="At Esante, we don’t just guide you to Australia — we help you build a structured pathway for long-term success through education, migration, and career opportunities."
      />
      <Footer />
    </div>
  );
}

export default WhyAustraliaPage;

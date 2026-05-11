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
      <EsanteBanner />
      <Footer />
    </div>
  );
}

export default WhyAustraliaPage;

import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import ConsultationPopup from './components/Reusable/ConsultationPopup';

// Code-split all pages — only the current page's JS chunk is downloaded per visit
const HomePage                        = lazy(() => import('./pages/HomePage'));
const AboutPage                       = lazy(() => import('./pages/AboutPage'));
const WhyAustraliaPage                = lazy(() => import('./pages/WhyAustraliaPage'));
const NewsBlogsPage                   = lazy(() => import('./pages/NewsBlogsPage'));
const NewsBlogDetailPage              = lazy(() => import('./pages/NewsBlogDetailPage'));
const CaseStudiesPage                 = lazy(() => import('./pages/CaseStudiesPage'));
const CaseStudyDetailPage             = lazy(() => import('./pages/CaseStudyDetailPage'));
const EligibilityCalculatorPage       = lazy(() => import('./pages/EligibilityCalculatorPage'));
const CostOfLivingCalculatorPage      = lazy(() => import('./pages/CostOfLivingCalculatorPage'));
const VisaPathwaysPage                = lazy(() => import('./pages/VisaPathwaysPage'));
const MigrationAdvisorsPage           = lazy(() => import('./pages/MigrationAdvisorsPage'));
const SearchCoursesPage               = lazy(() => import('./pages/SearchCoursesPage'));
const SearchUniversitiesPage          = lazy(() => import('./pages/SearchUniversitiesPage'));
const ExpensePlanningScholarshipsPage = lazy(() => import('./pages/ExpensePlanningScholarshipsPage'));
const SopDocumentsPage                = lazy(() => import('./pages/SopDocumentsPage'));
const AccommodationPage               = lazy(() => import('./pages/AccommodationPage'));
const PostStudyWorkVisaPage           = lazy(() => import('./pages/PostStudyWorkVisaPage'));
const JobSeekersPage                  = lazy(() => import('./pages/JobSeekersPage'));
const RecruitmentPage                 = lazy(() => import('./pages/RecruitmentPage'));
const EmployersPage                   = lazy(() => import('./pages/EmployersPage'));
const BookConsultationPage            = lazy(() => import('./pages/BookConsultationPage'));
const AncillaryServicesPage           = lazy(() => import('./pages/AncillaryServicesPage'));
const PartTimeJobSupportPage          = lazy(() => import('./pages/PartTimeJobSupportPage'));
const IeltsPteCoachingPage            = lazy(() => import('./pages/IeltsPteCoachingPage'));
const AirportServicesPage             = lazy(() => import('./pages/AirportServicesPage'));
const PostArrivalSupportPage          = lazy(() => import('./pages/PostArrivalSupportPage'));

// Minimal loading fallback — invisible white screen avoids flash of unstyled content
const PageLoader = () => (
  <div style={{ minHeight: '100vh', background: '#fff' }} aria-hidden="true" />
);

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);
      window.setTimeout(() => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
      return;
    }

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setConsultationOpen(true);
    window.addEventListener('openConsultationPopup', handleOpen);
    return () => window.removeEventListener('openConsultationPopup', handleOpen);
  }, []);

  return (
    <>
    <ConsultationPopup isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/why-australia" element={<WhyAustraliaPage />} />
          <Route path="/news-blogs" element={<NewsBlogsPage />} />
          <Route path="/news-blogs/:slug" element={<NewsBlogDetailPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/eligibility-calculator" element={<EligibilityCalculatorPage />} />
          <Route path="/cost-of-living-calculator" element={<CostOfLivingCalculatorPage />} />
          {/* Our Services */}
          <Route path="/visa-pathways" element={<VisaPathwaysPage />} />
          <Route path="/migration-advisors" element={<MigrationAdvisorsPage />} />
          <Route path="/search-courses" element={<SearchCoursesPage />} />
          <Route path="/search-universities" element={<SearchUniversitiesPage />} />
          <Route path="/expense-planning-scholarships" element={<ExpensePlanningScholarshipsPage />} />
          <Route path="/sop-documents" element={<SopDocumentsPage />} />
          <Route path="/accommodation" element={<AccommodationPage />} />
          <Route path="/post-study-work-visa" element={<PostStudyWorkVisaPage />} />
          <Route path="/part-time-job-support" element={<PartTimeJobSupportPage />} />
          <Route path="/ielts-pte-coaching" element={<IeltsPteCoachingPage />} />
          <Route path="/airport-services" element={<AirportServicesPage />} />
          <Route path="/post-arrival-support" element={<PostArrivalSupportPage />} />
          <Route path="/job-seekers" element={<JobSeekersPage />} />
          <Route path="/recruitment" element={<RecruitmentPage />} />
          <Route path="/employers" element={<EmployersPage />} />
          <Route path="/book-consultation" element={<BookConsultationPage />} />
          <Route path="/ancillary-services" element={<AncillaryServicesPage />} />
        </Routes>
      </Suspense>
    </Router>
    </>
  );
}

export default App;

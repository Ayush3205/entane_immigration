import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import EsanteBanner from '../components/Reusable/EsanteBanner';
import { CASE_STUDIES } from '../data/caseStudies';

function CaseStudyDetailPage() {
  const { slug } = useParams();
  const caseStudy = CASE_STUDIES.find((item) => item.slug === slug);

  if (!caseStudy) {
    return (
      <div style={{ fontFamily: 'Poppins, sans-serif', background: '#fff', minHeight: '100vh' }}>
        <Header />
        <main style={{ padding: '180px 24px 96px' }}>
          <section style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#FF3300', fontWeight: 600, marginBottom: 16 }}>
              Case Study Not Found
            </p>
            <h1 style={{ color: '#00352B', fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.12, margin: 0 }}>
              This story is not available.
            </h1>
            <Link
              to="/case-studies"
              style={{
                display: 'inline-flex',
                marginTop: 32,
                padding: '12px 22px',
                borderRadius: 10,
                background: '#FF3300',
                color: '#fff',
                fontWeight: 500,
              }}
            >
              Back to Case Studies
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', background: '#fff', minHeight: '100vh' }}>
      <Header />
      <main style={{ paddingTop: 120 }}>
        <section style={{ padding: '72px 24px 48px', background: '#fff' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            <Link
              to="/case-studies"
              style={{
                color: '#FF3300',
                fontSize: 15,
                fontWeight: 600,
                marginBottom: 28,
                display: 'inline-flex',
              }}
            >
              Back to Case Studies
            </Link>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px 12px',
                background: '#FF3300',
                borderRadius: 16,
                color: '#FFFBE9',
                fontSize: 14,
                fontWeight: 500,
                marginBottom: 18,
              }}
            >
              {caseStudy.category}
            </div>
            <h1
              style={{
                color: '#00352B',
                fontSize: 'clamp(34px, 5vw, 58px)',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                margin: '0 0 16px',
                maxWidth: 960,
              }}
            >
              {caseStudy.title}
            </h1>
            <p
              style={{
                color: '#FF3300',
                fontSize: 'clamp(20px, 3vw, 30px)',
                lineHeight: 1.25,
                fontWeight: 600,
                margin: '0 0 22px',
                maxWidth: 920,
              }}
            >
              {caseStudy.subtitle}
            </p>
            <p
              style={{
                color: '#667085',
                fontSize: 18,
                lineHeight: 1.7,
                margin: 0,
                maxWidth: 920,
              }}
            >
              {caseStudy.excerpt}
            </p>
          </div>
        </section>

        <section style={{ padding: '0 24px 72px' }}>
          <div
            style={{
              maxWidth: 1120,
              height: 460,
              margin: '0 auto',
              borderRadius: 24,
              overflow: 'hidden',
              background: '#f1f5f4',
            }}
          >
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </section>

        <section style={{ padding: '0 24px 88px' }}>
          <article
            style={{
              maxWidth: 960,
              margin: '0 auto',
              color: '#1f2933',
              fontSize: 18,
              lineHeight: 1.8,
            }}
          >
            <p style={{ margin: '0 0 28px' }}>{caseStudy.intro}</p>

            <h2
              style={{
                color: '#00352B',
                fontSize: 'clamp(26px, 3vw, 36px)',
                lineHeight: 1.2,
                margin: '40px 0 20px',
              }}
            >
              {caseStudy.supportIntro}
            </h2>
            <ul style={{ display: 'grid', gap: 14, paddingLeft: 0, margin: '0 0 32px', listStyle: 'none' }}>
              {caseStudy.supportItems.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-start',
                    padding: '14px 16px',
                    border: '1px solid rgba(0, 53, 43, 0.12)',
                    borderRadius: 12,
                    background: '#fffdf6',
                  }}
                >
                  <span style={{ color: '#FF3300', fontWeight: 700, lineHeight: 1.5 }}>+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div
              style={{
                borderLeft: '4px solid #FF3300',
                padding: '20px 24px',
                background: '#F7FAF9',
                borderRadius: '0 16px 16px 0',
              }}
            >
              <h2
                style={{
                  color: '#00352B',
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  lineHeight: 1.2,
                  margin: '0 0 12px',
                }}
              >
                Outcome
              </h2>
              <p style={{ margin: 0 }}>{caseStudy.outcome}</p>
            </div>
          </article>
        </section>

        <EsanteBanner />
      </main>
      <Footer />
    </div>
  );
}

export default CaseStudyDetailPage;

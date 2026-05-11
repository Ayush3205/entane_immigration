import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import EsanteBanner from "../components/Reusable/EsanteBanner";

const HERO_COPY = {
  badge: 'Migration',
  titleLines: ['Turn Your Skills into a Global Future'],
  descriptionLines: [
    'Australia offers structured migration pathways for skilled professionals, students,',
    'entrepreneurs, and families. With the right strategy, your journey can lead to career',
    'growth, stability, and permanent residency (PR).',
  ],
};

const MIGRATION_SERVICES = [
  {
    number: '01',
    title: 'FAMILY VISAS - STAY TOGETHER',
    description:
      'Reunite and settle in Australia with complete family visa assistance.',
    numberPosition: {
      left: '14px',
      bottom: '-38px',
    },
    contentAlign: 'right',
    titleAlign: 'left',
  },
  {
    number: '02',
    title: 'BUSINESS & INVESTOR VISAS - BUILD IN AUSTRALIA',
    description:
      'Start or expand your business in Australia with strategic migration and market entry support.',
    numberPosition: {
      left: '18px',
      bottom: '-38px',
    },
    contentAlign: 'right',
    titleAlign: 'left',
  },
  {
    number: '03',
    title: 'STUDENT PATHWAYS - STUDY TO PR',
    description:
      'We align your education with long-term migration goals - ensuring your course and career path support your PR journey.',
    numberPosition: {
      right: '10px',
      bottom: '-49px',
    },
    contentAlign: 'left',
    titleAlign: 'right',
  },
  {
    number: '04',
    title: 'WORK & SKILLED MIGRATION',
    description:
      'From profile assessment to employer sponsorship, we help you access real job opportunities and visa pathways.',
    numberPosition: {
      right: '8px',
      bottom: '-58px',
    },
    contentAlign: 'left',
    titleAlign: 'right',
  },
];

const MIGRATION_SERVICES_SECTION_STYLES = {
  container: {
    width: '100%',
    maxWidth: '1234px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 610px), 1fr))',
    gap: '14px',
  },
  card: {
    position: 'relative',
    minHeight: '289px',
    padding: '28px 30px 28px',
    borderRadius: '50px',
    backgroundColor: '#00352B',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
};

const MIGRATION_PATHWAYS = [
  'Skilled Migration & PR Pathways',
  'Employer-Sponsored Visas (Subclass 482, 186)',
  'Student to PR Transition Planning',
  'Family Visa & Dependent Sponsorship',
  'Business & Investor Visa Guidance',
];

const HIGH_DEMAND_SECTORS = [
  'Healthcare & Nursing',
  'Engineering & IT',
  'Trades & Construction',
  'Hospitality & Business',
];

const SUPPORT_POINTS = [
  'Profile assessment & eligibility check',
  'Visa strategy & documentation guidance',
  'Job alignment & career pathway support',
  'Post-arrival settlement assistance',
];

const WHY_ESANTE_POINTS = [
  'Australia-focused expertise',
  'Strong employer & partner network',
  'Transparent, ethical approach',
  'End-to-end migration ecosystem',
];

const SMARTER_WAY_COPY = [
  'Migration isn\'t just about visas - it\'s about building a future.',
  'We create personalised migration strategies aligned with your goals',
  'and Australia\'s demand.',
];

const HIGH_DEMAND_COPY = [
  'Australia continues to face skill shortages across industries aligned',
  'with the Skilled Occupation List (SOL).',
];

const CHECK_BADGE_STYLE = {
  width: '18px',
  height: '18px',
  flexShrink: 0,
  marginTop: '3px',
  borderRadius: '4px',
  backgroundColor: '#19B51F',
  color: '#FFFFFF',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '13px',
  fontWeight: 700,
  lineHeight: 1,
};

function MigrationAdvisorsPage() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <Header />

      <main>
        <section
          style={{
            overflow: 'hidden',
            backgroundColor: '#062C24',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '805px',
              aspectRatio: '206 / 115',
            }}
          >
            <img
              src="/images/MigrationAdvisorsPage/Migration_Hero.png"
              alt="Migration hero"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(4, 39, 31, 0.72) 0%, rgba(4, 39, 31, 0.50) 36%, rgba(4, 39, 31, 0.42) 100%)',
              }}
            />
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '28px 24px 72px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  maxWidth: '900px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '18px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    fontSize: 'clamp(20px, 2vw, 28px)',
                    lineHeight: '1.2',
                    textAlign: 'center',
                    textDecoration: 'underline',
                    textUnderlineOffset: '6px',
                    marginTop: '40px',
                  }}
                >
                  {HERO_COPY.badge}
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <h1
                    style={{
                      margin: 0,
                      color: '#FFFFFF',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      fontStyle: 'italic',
                      fontSize: 'clamp(30px, 3.2vw, 56px)',
                      lineHeight: '1.14',
                      letterSpacing: '-0.03em',
                      textAlign: 'center',
                    }}
                  >
                    {HERO_COPY.titleLines.map((line, index) => (
                      <React.Fragment key={line}>
                        {line}
                        {index < HERO_COPY.titleLines.length - 1 ? <br /> : null}
                      </React.Fragment>
                    ))}
                  </h1>

                  <p
                    style={{
                      margin: 0,
                      color: '#FFFFFF',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 400,
                      fontSize: 'clamp(15px, 1.2vw, 20px)',
                      lineHeight: '1.55',
                      textAlign: 'center',
                      maxWidth: '1080px',
                    }}
                  >
                    {HERO_COPY.descriptionLines.map((line, index) => (
                      <React.Fragment key={line}>
                        {line}
                        {index < HERO_COPY.descriptionLines.length - 1 ? <br /> : null}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundColor: '#FFFFFF',
            padding: '72px 24px 84px',
          }}
        >
          <div style={MIGRATION_SERVICES_SECTION_STYLES.container}>
            <h2
              style={{
                margin: '0 0 48px',
                color: '#00352B',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '59px',
                fontStyle: 'normal',
                lineHeight: 'normal',
                letterSpacing: '0.5px',
                textAlign: 'center',
              }}
            >
              Migration Services by{' '}
              <span
                style={{
                  color: '#F30',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '59px',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  lineHeight: 'normal',
                  letterSpacing: '0.5px',
                }}
              >
                Esante
              </span>
            </h2>

            <div style={MIGRATION_SERVICES_SECTION_STYLES.grid}>
              {MIGRATION_SERVICES.map((service) => (
                <article key={service.number} style={MIGRATION_SERVICES_SECTION_STYLES.card}>
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      fontSize: 'clamp(136px, 12vw, 176px)',
                      lineHeight: '0.82',
                      letterSpacing: '-0.06em',
                      background:
                        'linear-gradient(180deg, #FF4A12 0%, #FF6A3D 30%, #FFC0B0 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      pointerEvents: 'none',
                      ...service.numberPosition,
                    }}
                  >
                    {service.number}
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      color: '#FFFFFF',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      fontSize: 'clamp(14px, 1.1vw, 18px)',
                      lineHeight: '1.35',
                      textAlign: service.titleAlign,
                    }}
                  >
                    {service.title}
                  </h3>

                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent:
                        service.contentAlign === 'right' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        width: '100%',
                        maxWidth: service.contentAlign === 'right' ? '250px' : '285px',
                        color: '#FFFFFF',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(16px, 1.15vw, 19px)',
                        lineHeight: '1.55',
                        textAlign: 'left',
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundColor: '#FFFBE9',
            padding: '84px 24px 88px',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '1260px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '86px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(280px, 364px) minmax(320px, 1fr)',
                alignItems: 'center',
                gap: '42px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '364px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/images/MigrationAdvisorsPage/Migrate.png"
                  alt="Student holding books on campus"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <div style={{ maxWidth: '640px' }}>
                <h2
                  style={{
                    margin: '0 0 18px',
                    color: '#00352B',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(34px, 4.2vw, 57px)',
                    lineHeight: '1.05',
                    letterSpacing: '-0.02em',
                  }}
                >
                  <span style={{ display: 'block' }}>A Smarter Way to</span>
                  <span
                    style={{
                      display: 'block',
                      color: '#FF3300',
                      fontStyle: 'italic',
                      fontWeight: 600,
                    }}
                  >
                    Migrate
                  </span>
                </h2>

                <p
                  style={{
                    margin: '0 0 10px',
                    color: '#1B1B1B',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(15px, 1.2vw, 19px)',
                    lineHeight: '1.5',
                    maxWidth: '680px',
                  }}
                >
                  {SMARTER_WAY_COPY.map((line, index) => (
                    <React.Fragment key={line}>
                      {line}
                      {index < SMARTER_WAY_COPY.length - 1 ? <br /> : null}
                    </React.Fragment>
                  ))}
                </p>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {MIGRATION_PATHWAYS.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        color: '#111111',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(18px, 1.45vw, 19px)',
                        lineHeight: '1.35',
                      }}
                    >
                      <span aria-hidden="true" style={CHECK_BADGE_STYLE}>
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(320px, 1fr) minmax(260px, 364px)',
                alignItems: 'center',
                gap: '42px',
              }}
            >
              <div style={{ maxWidth: '640px' }}>
                <h2
                  style={{
                    margin: '0 0 18px',
                    color: '#00352B',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(34px, 4.2vw, 57px)',
                    lineHeight: '1.05',
                    letterSpacing: '-0.02em',
                  }}
                >
                  <span style={{ display: 'block' }}>Opportunities Across</span>
                  <span
                    style={{
                      display: 'block',
                      color: '#FF3300',
                      fontStyle: 'italic',
                      fontWeight: 600,
                    }}
                  >
                    High-Demand Sectors
                  </span>
                </h2>

                <p
                  style={{
                    margin: '0 0 18px',
                    color: '#1B1B1B',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(15px, 1.2vw, 19px)',
                    lineHeight: '1.5',
                    maxWidth: '680px',
                  }}
                >
                  {HIGH_DEMAND_COPY.map((line, index) => (
                    <React.Fragment key={line}>
                      {line}
                      {index < HIGH_DEMAND_COPY.length - 1 ? <br /> : null}
                    </React.Fragment>
                  ))}
                </p>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {HIGH_DEMAND_SECTORS.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        color: '#111111',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(18px, 1.45vw, 19px)',
                        lineHeight: '1.35',
                      }}
                    >
                      <span aria-hidden="true" style={CHECK_BADGE_STYLE}>
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p
                  style={{
                    margin: 0,
                    color: '#1B1B1B',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(15px, 1.15vw, 18px)',
                    lineHeight: '1.5',
                    maxWidth: '680px',
                  }}
                >
                  These sectors offer strong pathways for jobs, sponsorship, and PR.
                </p>
              </div>

              <div
                style={{
                  width: '100%',
                  maxWidth: '364px',
                  justifySelf: 'end',
                  borderRadius: '24px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/images/MigrationAdvisorsPage/High_Demand.png"
                  alt="Warehouse worker in high-demand sector"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundColor: '#FFFFFF',
            padding: '76px 24px 92px',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '1380px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 560px), 1fr))',
                gap: '26px',
                marginBottom: '74px',
              }}
            >
              <article
                style={{
                  border: '1.5px solid #FF5A2A',
                  borderRadius: '28px',
                  backgroundColor: '#FFFFFF',
                  padding: '34px 28px 34px',
                  minHeight: '338px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h2
                  style={{
                    margin: '0 0 20px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    fontSize: 'clamp(34px, 3.4vw, 58px)',
                    lineHeight: '0.98',
                    letterSpacing: '-0.03em',
                    color: '#00352B',
                  }}
                >
                  <span style={{ display: 'block' }}>End-to-End</span>
                  <span style={{ display: 'block', color: '#FF3300' }}>
                    Migration Support
                  </span>
                </h2>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {SUPPORT_POINTS.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        color: '#1D1D1D',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontStyle: 'italic',
                        fontSize: 'clamp(18px, 1.3vw, 19px)',
                        lineHeight: '1.35',
                      }}
                    >
                      <span aria-hidden="true" style={CHECK_BADGE_STYLE}>
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p
                  style={{
                    margin: 'auto 0 0',
                    color: '#1D1D1D',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    fontSize: 'clamp(22px, 1.8vw, 26px)',
                    lineHeight: '1.3',
                  }}
                >
                  Everything you need - handled in one place.
                </p>
              </article>

              <article
                style={{
                  border: '1.5px solid #FF5A2A',
                  borderRadius: '28px',
                  backgroundColor: '#FFFFFF',
                  padding: '34px 28px 34px',
                  minHeight: '338px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h2
                  style={{
                    margin: '0 0 20px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    fontSize: 'clamp(34px, 3.4vw, 58px)',
                    lineHeight: '0.98',
                    letterSpacing: '-0.03em',
                    color: '#00352B',
                  }}
                >
                  <span style={{ display: 'block' }}>Why Choose</span>
                  <span style={{ display: 'block', color: '#FF3300', fontWeight: 600 }}>
                    Esante
                  </span>
                </h2>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {WHY_ESANTE_POINTS.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        color: '#1D1D1D',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontStyle: 'italic',
                        fontSize: 'clamp(18px, 1.3vw, 19px)',
                        lineHeight: '1.35',
                      }}
                    >
                      <span aria-hidden="true" style={CHECK_BADGE_STYLE}>
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p
                  style={{
                    margin: 'auto 0 0',
                    color: '#1D1D1D',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    fontSize: 'clamp(22px, 1.8vw, 26px)',
                    lineHeight: '1.3',
                  }}
                >
                  A complete migration journey, simplified.
                </p>
              </article>
            </div>

            <div
              style={{
                maxWidth: '860px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <h2
                style={{
                  margin: '0 0 20px',
                  color: '#FF3300',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: '56px',
                  lineHeight: '150.37%',
                  letterSpacing: '-0.15px',
                }}
              >
                Built for Long-Term Success
              </h2>

              <p
                style={{
                  margin: '0 auto',
                  color: '#1D1D1D',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: '23px',
                  lineHeight: '38px',
                  maxWidth: '860px',
                }}
              >
                <span style={{ display: 'block' }}>We don&apos;t stop at visa approval.</span>
                <span style={{ display: 'block' }}>
                  Esante supports your career, lifestyle, and settlement journey
                </span>
                <span
                  style={{
                    display: 'block',
                    color: '#00352B',
                    fontWeight: 700,
                    fontSize: '26px',
                    lineHeight: '38px',
                  }}
                >
                  Helping you build a future, not just move countries.
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <EsanteBanner
        line1=""
        line2={'Start Your Migration\nJourney'}
        line3=""
        subtext="Take the first step with clarity and confidence."
      />
      <Footer />
    </div>
  );
}

export default MigrationAdvisorsPage;

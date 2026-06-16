const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'global.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Find the start of the footer block.
const startIndex = css.indexOf('/* ================================================\r\n   Source: Footer');
const endIndex = css.indexOf('/* ================================================\r\n   Source: WhyAustralia');

if (startIndex === -1 || endIndex === -1) {
  console.log("Could not find boundaries!");
  process.exit(1);
}

const correctFooterCSS = `/* ================================================
   Source: Footer
   ================================================ */

/* Footer - Figma: light main area (5 columns), dark green bottom bar */
.footer {
  color: #000;
}

.footer-main {
  background-color: #FFFDF6;
  padding: 64px 0 48px;
  min-height: 387px;
  display: flex;
  flex-direction: column;
}

/* Tighter spacing when footer follows the Esante CTA banner */
.esante-banner + .footer .footer-main,
main:has(.esante-banner) + .footer .footer-main {
  padding-top: 24px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr 1.2fr;
  gap: 40px;
  align-items: stretch;
}

/* Column 1: Brand */
.footer-brand {
  display: flex;
  width: min(239px, 100%);
  height: auto;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  justify-content: flex-start;
  min-height: 0;
}

.footer-logo {
  margin: 0;
}

.footer-logo img {
  height: auto;
  max-width: 180px;
  display: block;
}

.footer-tagline {
  color: rgba(0, 0, 0, 0.60);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.15px;
  align-self: stretch;
  margin: 0;
  flex: 0 0 auto;
}

/* CTA text - white Poppins 18px */
.footer-cta-text {
  color: #FFF;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.15px;
}

/* Book 1:1 button */
.footer-book-cta {
  display: inline-flex;
  padding: 10px var(--sds-size-space-400, 16px);
  align-items: flex-start;
  gap: 10px;
  border-radius: var(--Corner-Small, 8px);
  background: var(--Primary-Color, #00352B);
  color: #FFF;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.footer-book-cta:hover {
  opacity: 0.9;
}

.footer-social {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 4px;
  align-items: center;
  padding-top: 0;
}

.footer-social-icon {
  width: 40px;
  height: 40px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, opacity 0.2s;
}

.footer-social-icon:hover {
  transform: translateY(-1px);
  opacity: 0.8;
}

.footer-social-icon svg {
  flex-shrink: 0;
}

/* Brand colors for social icons */
.footer-social-icon--facebook {
  color: #1877F2;
}

.footer-social-icon--facebook svg {
  fill: #1877F2;
}

.footer-social-icon--instagram {
  color: #E4405F;
}

.footer-social-icon--instagram svg {
  color: transparent;
}

.footer-social-icon--linkedin {
  color: #0A66C2;
}

.footer-social-icon--linkedin svg {
  fill: #0A66C2;
}

.footer-social-icon--whatsapp {
  color: #25D366;
}

.footer-social-icon--whatsapp svg {
  fill: #25D366;
}

/* Section headings - uppercase orange-red */
.footer-heading {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #FF3300;
  margin: 0 0 20px 0;
  text-transform: uppercase;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.15px;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #FF3300;
}

/* Get In Touch */
.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-contact li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.15px;
}

.footer-contact-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
}

.footer-contact a {
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.15px;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-contact a:hover {
  color: #FF3300;
}

/* Bottom bar - dark green */
.footer-bottom {
  background-color: #00352B;
  padding: 0;
  min-height: 44px;
  display: flex;
  align-items: center;
}

.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
}

.footer-copyright {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #fff;
  margin: 0;
}

.footer-legal {
  display: flex;
  gap: 24px;
}

.footer-legal a {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s;
}

.footer-legal a:hover {
  opacity: 0.85;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 36px;
  }

  .footer-brand {
    max-width: 100%;
    grid-column: 1 / -1;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .footer-main {
    padding: 48px 0 36px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .footer-brand {
    grid-column: 1 / -1;
    width: 100%;
    gap: 12px;
    padding: 0;
  }

  .footer-social {
    gap: 10px;
    margin-top: 8px;
  }

  .footer-social-icon {
    width: 36px;
    height: 36px;
  }

  .footer-logo img {
    max-width: 160px;
  }

  /* Footer Bottom Mobile Optimizations */
  .footer-bottom {
    padding: 16px 0;
  }

  .footer-bottom-inner {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 12px;
  }

  .footer-copyright {
    text-align: center;
    line-height: 1.5;
    width: 100%;
  }

  .footer-legal {
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .footer-heading {
    margin-bottom: 14px;
  }

  .footer-links,
  .footer-contact {
    gap: 10px;
  }

  .footer-logo img {
    max-width: 140px;
  }

  .footer-tagline {
    font-size: 16px;
    max-width: 280px;
  }

  .footer-social {
    gap: 8px;
    margin-top: 6px;
  }

  .footer-social-icon {
    width: 32px;
    height: 32px;
  }

  .footer-links a,
  .footer-contact li,
  .footer-contact a,
  .footer-copyright,
  .footer-legal a {
    font-size: 12px;
  }
}

`;

const newCss = css.substring(0, startIndex) + correctFooterCSS + css.substring(endIndex);
fs.writeFileSync(cssPath, newCss, 'utf8');
console.log('Successfully repaired global.css');

# Esante - Australian Migration & Education Website

A modern, responsive React website for Esante - your trusted partner for Australian migration, education, and career opportunities.

## 🌟 Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, attractive design with smooth animations
- **Component-Based Architecture** - Modular and maintainable code structure
- **Interactive Elements** - Testimonial carousel, tabbed content, and more
- **SEO-Friendly** - Semantic HTML structure
- **Fast Performance** - Optimized for speed and user experience

## 📋 Sections

1. **Header** - Navigation with contact information and CTA button
2. **Hero Section** - Eye-catching hero with main headline and image gallery
3. **Australia Section** - Why Australia is the destination of choice with statistics
4. **Service Cards** - Three main service categories (Students, Professionals, Migration)
5. **What Esante Does** - Migration Advisors and Education & Training services
6. **Fast-Track Your Degree** - Tabbed course categories (Management, Engineering, Medical)
7. **Skills in Shortage** - In-demand job opportunities in Australia
8. **Universities** - Partner university logos
9. **Testimonials** - Client success stories with carousel
10. **Newsletter** - Email subscription call-to-action
11. **Footer** - Links, contact information, and social media

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder:
```bash
cd estane
```

2. Install dependencies:
```bash
npm install
```

3. Add your images to the `public/images/` folder (see Image Guide below)

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## 📁 Project Structure

```
estane/
├── public/
│   ├── images/          # All website images
│   │   └── README.md    # Image requirements guide
│   ├── index.html
│   └── logo.png
├── src/
│   ├── components/      # React components
│   │   ├── Header.js & Header.css
│   │   ├── Hero.js & Hero.css
│   │   ├── AustraliaSection.js & AustraliaSection.css
│   │   ├── ServiceCards.js & ServiceCards.css
│   │   ├── WhatEsanteDoes.js & WhatEsanteDoes.css
│   │   ├── FastTrackDegree.js & FastTrackDegree.css
│   │   ├── SkillsShortage.js & SkillsShortage.css
│   │   ├── Universities.js & Universities.css
│   │   ├── Testimonials.js & Testimonials.css
│   │   ├── Newsletter.js & Newsletter.css
│   │   └── Footer.js & Footer.css
│   ├── App.js           # Main application component
│   ├── App.css          # Global styles
│   ├── index.js         # Application entry point
│   └── index.css        # Base styles and fonts
├── package.json
└── README.md
```

## 🎨 Design System

### Colors

- **Primary Orange**: `#ff6b35`
- **Primary Dark**: `#e55a2b`
- **Secondary Dark**: `#1a1a2e`
- **Secondary Light**: `#16213e`
- **Background Light**: `#f8f9fa`
- **Text Colors**: Various shades for hierarchy

### Typography

- **Primary Font**: Poppins (Google Fonts)
- **Secondary Font**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800

### Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🖼️ Adding Images

1. Navigate to `public/images/` folder
2. Read the `README.md` file in that folder for detailed image requirements
3. Add your images with the correct filenames
4. Recommended image formats:
   - Logos: PNG with transparent background
   - Photos: JPG (optimized)
   - Icons: SVG or PNG

### Required Images List:

**Logo & Branding:**
- `logo.png`

**Hero Section:**
- `hero-bg.jpg`
- `gallery-1.jpg` through `gallery-9.jpg`

**Service Cards:**
- `students.jpg`
- `professionals.jpg`
- `migration.jpg`

**Other Sections:**
- `australia-map.jpg`
- `icon-placeholder.png`
- Course images (management, engineering, medical)
- University logos (`uni-1.png` through `uni-8.png`)
- Testimonial photos (`testimonial-1.jpg` through `testimonial-3.jpg`)
- `newsletter-bg.jpg`

## 🔧 Customization

### Updating Content

1. **Text Content**: Edit the respective component files in `src/components/`
2. **Colors**: Modify CSS variables in `src/index.css`
3. **Fonts**: Update font imports in `src/index.css`
4. **Layout**: Adjust grid and flexbox properties in component CSS files

### Adding New Sections

1. Create a new component in `src/components/`
2. Create corresponding CSS file
3. Import and add to `src/App.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- 1024px (tablet landscape)
- 768px (tablet portrait)
- 480px (mobile)

All components have been optimized for:
- Touch interactions on mobile
- Readable text sizes across devices
- Proper spacing and layout adjustments
- Image optimization for different screen sizes

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build/` folder ready for deployment.

## 🚀 Deployment

The build folder can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any static hosting service

## 📝 Available Scripts

- `npm start` - Runs the development server
- `npm build` - Creates production build
- `npm test` - Runs tests
- `npm eject` - Ejects from Create React App (one-way operation)

## ⚠️ Important Notes

1. **Images**: Make sure to add all required images to `public/images/` folder
2. **Logo**: Replace the placeholder logo with your actual Esante logo
3. **Contact Info**: Update email and phone number in Header and Footer components
4. **Social Links**: Update social media links in Footer component
5. **Content**: Replace all Lorem Ipsum text with actual content

## 🎯 Next Steps

1. ✅ Add all images to `public/images/` folder
2. ✅ Update contact information
3. ✅ Replace placeholder text with real content
4. ✅ Test on different devices and browsers
5. ✅ Optimize images for web
6. ✅ Add meta tags for SEO
7. ✅ Set up analytics (Google Analytics, etc.)
8. ✅ Deploy to production

## 📞 Support

For any questions or issues, please contact the development team.

## 📄 License

This project is proprietary and confidential.

---

**Built with ❤️ using React**

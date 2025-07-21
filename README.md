
# Peak Automation Group Website

A high-converting B2B SaaS website for Peak Automation Group, built with Next.js 14 and inspired by GitBook's clean, technical design aesthetic.

## 🎯 Overview

This website is designed to convert gym owners into booked discovery calls by showcasing Peak's AI-powered retention system. The design follows GitBook's minimalist, documentation-style approach while maintaining strong conversion optimization principles.

## ✨ Features

### Design System
- **GitBook-inspired aesthetic** with clean, technical design
- **Consistent color palette** with defined primary, secondary, and accent colors
- **Typography system** using Inter font family
- **Responsive design** with mobile-first approach
- **Subtle animations** using Framer Motion

### Conversion Optimization
- **Multiple CTAs** strategically placed throughout the site
- **Floating ROI counter** showing real-time savings
- **Social proof notifications** displaying recent gym successes
- **Exit intent popup** for lead capture
- **Interactive ROI calculator** with real-time calculations
- **Trust indicators** and testimonials

### Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **SEO optimized** with proper meta tags and structured data
- **Performance optimized** with lazy loading and code splitting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd peak-automation-group
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx       # Sticky navigation with search
│   ├── Hero.tsx            # Hero section with main value prop
│   ├── Features.tsx        # Feature grid with cards
│   ├── HowItWorks.tsx      # Terminal-style process steps
│   ├── Pricing.tsx         # Pricing table with toggle
│   ├── ROICalculator.tsx   # Interactive ROI calculator
│   ├── CaseStudy.tsx       # Customer testimonial and results
│   ├── Footer.tsx          # Footer with links
│   ├── FloatingCounter.tsx # Floating ROI counter
│   ├── SocialProof.tsx     # Real-time social proof
│   └── ExitIntent.tsx      # Exit intent popup
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary Background**: #FFFFFF
- **Secondary Background**: #F7F7F7
- **Text Primary**: #000000
- **Text Secondary**: #6B7280
- **Accent Blue**: #3B82F6
- **Accent Green**: #10B981
- **Border**: #E5E7EB
- **Code Background**: #F3F4F6

### Typography
- **Font Family**: Inter
- **Heading 1**: 48px, font-weight-800
- **Heading 2**: 36px, font-weight-700
- **Heading 3**: 24px, font-weight-600
- **Body**: 16px, font-weight-400, line-height-1.7

### Spacing
- **Section Padding**: 80px (py-20)
- **Container Max Width**: 1280px
- **Grid System**: 8px base unit

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Custom color palette
- Custom typography scales
- Custom animations and keyframes
- Component classes for common patterns

### Next.js
- App Router enabled
- Image optimization with next/image
- SEO metadata configuration
- Structured data (JSON-LD) for local business

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu for mobile navigation
- Stacked layouts on smaller screens
- Touch-friendly interactive elements

## 🚀 Performance

### Optimizations
- **Lazy loading** for images below the fold
- **Code splitting** with dynamic imports
- **Font optimization** with next/font
- **Image optimization** with next/image
- **Minimal JavaScript** bundle size

### Lighthouse Targets
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## 📊 Analytics & Tracking

The website is set up for:
- **Google Analytics 4** integration
- **Conversion tracking** on all CTAs
- **Form abandonment** tracking
- **Heatmap tracking** (Hotjar compatible)
- **Social proof** notifications

## 🔒 Security

- **Content Security Policy** headers
- **HTTPS** enforcement
- **Input validation** on forms
- **XSS protection** with proper sanitization

## 📈 SEO

### Meta Tags
- Optimized title and description
- Open Graph tags for social sharing
- Twitter Card support
- Structured data for local business

### Technical SEO
- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for all images
- XML sitemap generation
- Robots.txt configuration

## 🧪 Testing

### Browser Testing
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- Cross-device testing

### Performance Testing
- Lighthouse audits
- Core Web Vitals monitoring
- Bundle size analysis

## 📝 Content Strategy

### Conversion Copy
- **Benefit-focused** headlines
- **Social proof** integration
- **Urgency** elements
- **Risk reversal** (90-day guarantee)
- **Clear CTAs** with action-oriented language

### Trust Building
- Customer testimonials
- Real metrics and results
- Security badges
- Money-back guarantee
- Local business focus (Atlanta)

## 🚀 Deployment

### Build
```bash
npm run build
```

### Production
The site can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any static hosting service

### Environment Variables
Create a `.env.local` file for:
- Analytics tracking IDs
- Contact form endpoints
- API keys (if needed)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Peak Automation Group.

## 📞 Support

For questions or support:
- Email: hello@peakautomationgroup.com
- Phone: (404) 555-0123

---

Built with ❤️ for Peak Automation Group 

// Test commit: verifying git author info 
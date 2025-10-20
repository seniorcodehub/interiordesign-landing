# Interior Design XR Landing Page

Elegant landing page for Interior Design XR - an innovative extended reality (XR) application that allows users to scan real spaces, modify them virtually, and get AI-generated design suggestions.

## Features

- **Video Background Hero**: Full-screen video background with elegant typography
- **Warm Wood/Wheat Color Scheme**: Premium design with #D4A574, #E8D5B7, #C9A87C
- **Elegant Typography**: Playfair Display for hero sections, Inter for body text
- **Multi-language Support**: Spanish and English with easy language toggle
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered animations
- **Modern UI Components**: Built with Radix UI and custom components

## Tech Stack

- **Next.js 15.5.6** - React framework with App Router
- **React 19.1.0** - Latest React features
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Headless UI components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
interiordesign-landing/
├── app/
│   ├── globals.css         # Global styles with wood/wheat color scheme
│   ├── layout.tsx          # Root layout with fonts and providers
│   └── page.tsx            # Main page with all sections
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   ├── contact-modal.tsx
│   │   └── animated-testimonials.tsx
│   ├── hero-section.tsx    # Video background hero
│   ├── features-section.tsx
│   ├── how-it-works-section.tsx
│   ├── stats-section.tsx
│   ├── market-section.tsx
│   ├── testimonials-section.tsx
│   ├── cta-section.tsx
│   ├── navbar.tsx
│   └── footer.tsx
├── lib/
│   ├── i18n.tsx            # i18n provider with ES/EN translations
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Design System

### Colors

- **Primary**: #D4A574 (Warm wood)
- **Primary Hover**: #C9A87C
- **Primary Light**: #F5EFE7
- **Wood Accent**: #E8D5B7
- **Background**: #FFFFFF (White)
- **Text**: #3D3028 (Dark brown/charcoal)

### Typography

- **Hero Font**: Playfair Display (Elegant serif)
- **Body Font**: Inter (Clean sans-serif)

## Sections

1. **Hero Section**: Full-screen video background with elegant typography and CTAs
2. **Features Section**: 5 key value propositions with icons
3. **How It Works**: 4-step process explaining the application flow
4. **Stats Section**: Market data and key metrics with animations
5. **Market Section**: Target market segments (Retailers, Architects, Interior Designers, Construction)
6. **Testimonials**: Animated testimonials from design professionals
7. **CTA Section**: Call-to-action with gradient background
8. **Footer**: Links and social media

## Customization

### Changing Colors

Update the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #D4A574;
  --primary-hover: #C9A87C;
  --primary-light: #F5EFE7;
}
```

### Adding Translations

Edit `lib/i18n.tsx` to add or modify translations:

```typescript
const dictionaries: Record<Locale, Dictionary> = {
  es: {
    // Spanish translations
  },
  en: {
    // English translations
  },
};
```

## License

All rights reserved © 2025 Interior Design XR

## Contact

For inquiries: info@interiordesignxr.com


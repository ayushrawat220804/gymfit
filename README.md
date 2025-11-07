# GymFit — Asim Negi's Personal Fitness Portfolio

A modern, conversion-focused personal portfolio website showcasing Asim Negi's fitness transformation, services, training philosophy, programs, diet guidance, calculators, and more.

## Features

- **Home/Hero Page** - Compelling headline with transformation photo and primary CTA
- **About/Transformation Story** - Personal narrative, stats, and training philosophy
- **Programs/Training** - Detailed programs (Bro Split, PPL, Full Body) with pros/cons
- **Diet & Nutrition** - BMR explanation, meal plans, protein targets, supplement guidance
- **BMI & BMR Calculators** - Interactive calculators with macro recommendations
- **Gallery** - Progress photos with lightbox preview
- **Testimonials** - Client results and reviews
- **Contact/Booking** - Form for free plan requests

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Responsive Design** - Mobile-first approach

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
gymfit/
├── app/
│   ├── about/          # Transformation story
│   ├── contact/        # Booking form
│   ├── diet/           # Nutrition & meal plans
│   ├── gallery/        # Progress photos
│   ├── programs/       # Training programs
│   ├── tools/          # BMI/BMR calculators
│   ├── layout.tsx      # Root layout with SEO
│   └── page.tsx        # Home page
├── components/
│   ├── Footer.tsx      # Site footer
│   ├── Navigation.tsx # Main navigation
│   ├── StickyCTA.tsx   # Floating CTA button
│   └── Testimonials.tsx # Client testimonials
└── public/
    └── images/         # Placeholder for physique photos
```

## Image Assets Needed

Place the following images in `public/images/`:
- `hero-physique.jpg` - Main hero image (high-res)
- `progress-1.jpg` through `progress-5.jpg` - Progress photos

## SEO Features

- Meta tags and Open Graph data
- Structured data (Person schema)
- Semantic HTML
- Accessible navigation
- Mobile-responsive design

## Important Notes

- All medical disclaimers are included
- Steroid use warnings and safe alternatives provided
- Evidence-based training recommendations
- Practical, sustainable meal plans

## License

© 2024 GymFit — Asim Negi. All rights reserved.

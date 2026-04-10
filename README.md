# Shopify Developer + Free Tools Platform

A production-ready, multi-page SaaS-style website combining portfolio showcase, free developer tools, blog, and affiliate system.

## Features

- **Multi-page Application**: Home, Tools, Portfolio, Services, Blog, Contact, About, Privacy Policy
- **Free Tools**: Image Compressor, PDF Merger, Profit Calculator, and more
- **PWA Support**: Installable app with service worker and offline capabilities
- **Dark/Light Mode**: Persistent theme toggle
- **Analytics**: Google Analytics GA4 integration with event tracking
- **AdSense Ready**: Placeholder sections for monetization
- **Affiliate System**: CTA sections for lead generation
- **SEO Optimized**: Dynamic metadata, sitemap, robots.txt, schema markup
- **Performance**: Lazy loading, code splitting, optimized images

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **PWA**: Next PWA
- **Analytics**: Vercel Analytics

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
shopify-portfolio/
├── app/                    # Next.js App Router
│   ├── (pages)/           # Page routes
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── tools/            # Tool-specific components
│   └── ui/               # UI components
├── lib/                  # Utilities and stores
├── public/               # Static assets
└── types/                # TypeScript types
```

## Available Tools

- **Image Compressor**: Compress images for faster loading
- **Image Resizer**: Resize images to specific dimensions
- **JPG ↔ PNG Converter**: Convert between image formats
- **PDF Merger**: Combine multiple PDF files
- **PDF Splitter**: Split PDFs into separate documents
- **PDF Compressor**: Reduce PDF file size
- **Profit Calculator**: Calculate Shopify product profits
- **Discount Calculator**: Calculate discount prices
- **Product Description Generator**: Generate compelling descriptions

## Deployment

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Push to GitHub first
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/shopify-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables (see below)
   - Deploy

3. **Environment Variables**
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-app.vercel.app
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### Manual Build

```bash
npm run build
npm start
```

## Post-Deployment Setup

### 1. Update Domain
- Set `NEXT_PUBLIC_SITE_URL` to your live domain
- Sitemap and robots.txt will auto-update

### 2. PWA Icons
Create and add these files to `/public/`:
- `icon-192x192.png` (192x192px)
- `icon-512x512.png` (512x512px)

### 3. Google Analytics
- Get GA4 tracking ID
- Set `NEXT_PUBLIC_GA_ID` environment variable

### 4. AdSense Integration
Replace placeholder comments in these files:
- `app/services/page.tsx` (header and in-content ads)
- `app/tools/page.tsx` (in-content and footer ads)
- `app/page.tsx` (header and footer ads)

### 5. Test Dynamic Routes
Visit these URLs to ensure they work:
- `/tools/profit-calculator`
- `/tools/image-compressor`
- `/tools/pdf-merger`
- All other tool slugs

## Performance Optimization

- Images are optimized with Next.js Image component
- Code splitting enabled
- PWA caching configured
- Lazy loading implemented

## Security

- Rate limiting ready for API routes
- HTTPS enforced on Vercel
- Content Security Policy headers

## Environment Variables

Create a `.env.local` file:

```env
# Analytics
NEXT_PUBLIC_GA_ID=your-ga4-id

# API Keys (if needed)
OPENAI_API_KEY=your-openai-key
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

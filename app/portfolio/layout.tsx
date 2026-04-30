import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proven eCommerce Case Studies | Shopify Conversion Rate Expert',
  description: 'Explore real case studies of 7-figure eCommerce transformations. See how my Custom Shopify Themes and Shopify Speed Optimization generate massive revenue for DTC brands.',
  keywords: 'Shopify case studies, Shopify portfolio, Conversion Rate Expert portfolio, Headless Shopify examples, Custom Shopify Theme projects',
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

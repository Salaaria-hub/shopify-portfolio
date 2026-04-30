import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shopifycode.vercel.app"),
  title: "Expert Shopify Developer & CRO Specialist | Boost Your Store Sales",
  description: "Hire an elite Shopify Developer specializing in Conversion Rate Optimization (CRO), Custom Shopify Theme development, Headless Shopify, and advanced Shopify Speed Optimization to aggressively scale your DTC brand.",
  keywords: "Shopify developer, CRO specialist, Conversion Rate Expert, Shopify conversion rate optimization, Custom Shopify Theme, eCommerce expert, Headless Shopify, Shopify Speed Optimization",
  authors: [{ name: "Shopify Portfolio Expert" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Expert Shopify Developer & CRO Specialist | Boost Your Store Sales",
    description: "Hire an elite Shopify Developer specializing in Conversion Rate Optimization (CRO), Custom Shopify Theme development, Headless Shopify, and advanced Shopify Speed Optimization to aggressively scale your DTC brand.",
    type: "website",
    url: "https://shopifycode.vercel.app",
    siteName: "Shopify Conversion Expert Portfolio",
  },
  manifest: "/manifest.json",
  verification: {
    google: 'iTvoO687LL1giHwV0-gwOl7U4js-a5AJBAdQI-2lkm4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning={true}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

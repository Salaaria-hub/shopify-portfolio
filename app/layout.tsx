import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
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
  title: "Shopify Growth Tools | Free Merchant & Developer Tools",
  description: "All-in-one toolkit for Shopify growth, including image compressors, profit calculators, and PDF tools.",
  keywords: "Shopify, developer tools, image optimizer, PDF merger, code formatter",
  authors: [{ name: "Shopify Portfolio" }],
  openGraph: {
    title: "Shopify Growth Tools | Free Merchant & Developer Tools",
    description: "All-in-one toolkit for Shopify growth, including image compressors, profit calculators, and PDF tools.",
    type: "website",
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

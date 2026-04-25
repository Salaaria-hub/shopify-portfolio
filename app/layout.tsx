import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  description: "Hire an expert Shopify Developer specializing in Conversion Rate Optimization (CRO), custom theme development, and high-performance eCommerce solutions to scale your business.",
  keywords: "Shopify developer, CRO specialist, Shopify conversion rate optimization, custom Shopify themes, eCommerce expert",
  authors: [{ name: "Shopify Portfolio" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Expert Shopify Developer & CRO Specialist | Boost Your Store Sales",
    description: "Hire an expert Shopify Developer specializing in Conversion Rate Optimization (CRO), custom theme development, and high-performance eCommerce solutions to scale your business.",
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

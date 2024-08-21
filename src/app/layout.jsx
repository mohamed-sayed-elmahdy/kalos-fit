import { Inter, League_Spartan } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import * as gtag from './lib/gtag';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Kalos Fit",
  description:
    "Your empowering partner in health and wellness! We understand the unique challenges you face when it comes to nutrition. Between work, family, and daily commitments, it's easy to feel overwhelmed and fall behind on your health goals. That's why we create personalized nutrition plans designed for your lifestyle.",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
    gtag.pageview(url);
  }, [pathname, searchParams]);

  return (
    <html lang="en">
      <body className={`${leagueSpartan.className}`}>
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { League_Spartan, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { GA_TRACKING_ID } from "./lib/gtag"; // Import GA_TRACKING_ID
const leagueSpartan = League_Spartan({ subsets: ["latin"], display: "swap" });
 const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kalos Fit",
  description:
    "Your empowering partner in health and wellness! We understand the unique challenges you face when it comes to nutrition. Between work, family, and daily commitments, it's easy to feel overwhelmed and fall behind on your health goals. That's why we create personalized nutrition plans designed for your lifestyle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className} ${playfairDisplay.className}`}
      >
        {/* Google Analytics Scripts */}
        <Script
          async
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} // Use GA_TRACKING_ID
        />
        <Script
          async
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <NavBar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}

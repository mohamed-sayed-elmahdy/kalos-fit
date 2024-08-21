// app/layout.jsx

import { Inter, League_Spartan } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { GA_TRACKING_ID } from './lib/gtag'; // Import GA_TRACKING_ID

const inter = Inter({ subsets: ['latin'] });
const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export const metadata = {
  title: 'Kalos Fit',
  description:
    'Your empowering partner in health and wellness! We understand the unique challenges you face when it comes to nutrition. Between work, family, and daily commitments, it\'s easy to feel overwhelmed and fall behind on your health goals. That\'s why we create personalized nutrition plans designed for your lifestyle.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className}`}>
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} // Use GA_TRACKING_ID
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
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
        <Footer />
      </body>
    </html>
  );
}

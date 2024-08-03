import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={`${styles.footerSection} flex`}>
      <div className={`${styles.leftFooterContainer}`}>
        <div className={styles.logocontainer}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/greenLogoedited.png"
              alt="Logo"
              width={130}
              height={80}
              priority
            />
          </Link>
        </div>
        <p>
          At Kalos Fit, we believe in fostering a healthy relationship with
          food. We don't promote fad diets or restrictive restrictions. Instead,
          our team of registered dietitians and certified nutritionists will
          work closely with you to create a plan that fits your goals,
          preferences, and busy schedule.
        </p>
        <div className={`${styles.socialMediaIconsContainer} flex`}>
          <Link href="https://www.instagram.com/kaloss_fit/" target="_blank">
            <FaInstagram className={styles.instagram} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/kalos-fit/about/?viewAsMember=true"
            target="_blank"
          >
            <FaLinkedin className={styles.linkedin} />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61563036785699"
            target="_blank"
          >
            <FaFacebookSquare className={styles.youtube} />
          </Link>
        </div>
      </div>
      <div className={`${styles.rightFooterContainer} `}>
        <div className={`${styles.linksColumnContainer} `}>
          <h2>Company</h2>
          <Link href="/" className={styles.linkmenu}>
            Home
          </Link>
          <Link href="/aboutUs" className={styles.linkmenu}>
            About Us
          </Link>
          <Link href="/blog" className={styles.linkmenu}>
            Blog
          </Link>
          <Link href="/packages" className={styles.linkmenu}>
            Packages
          </Link>
          <Link href="/contact" className={styles.linkmenu}>
            Contact
          </Link>
        </div>

        <div className={`${styles.linksColumnContainer} `}>
          <h2>Legal</h2>
          <a href="/" className={styles.linkmenu}>
            Terms & Conditions
          </a>
          <a href="/" className={styles.linkmenu}>
            Terms of use
          </a>
          <a href="/" className={styles.linkmenu}>
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

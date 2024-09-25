"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import PackageButton from "../PackageButton/PackageButton";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path ? "text-[#30B43C] font-bold " : "";

  return (
    <div>
      <nav
        className={`text-white w-full fixed top-0 left-0 right-0 z-[120] bg-custom-bg shadow-custom-shadow backdrop-blur-custom-blur pt-1 ${
          pathname === "/about" ? "bg-black" : ""
        }`}
      >
        <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-6 lg:px-9">
          <div>
            <div className="flex items-center justify-between py-3 md:py-4 md:pt-2 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/greenLogoedited.png"
                  alt="Logo"
                  width={150}
                  height={20}
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <CgCloseO className="text-2xl text-[#30B43C]" />
                  ) : (
                    <RxHamburgerMenu className="text-2xl text-[#30B43C]" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "pt-12 px-6 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex md:mt-[0px] lg:gap-0">
                <li
                  className={`text-lg   pt-2 pb-0 px-5 text-center border-b-2 md:border-b-0 mb-5 md:mb-0 hover:bg-[#30B43C] border-[#30B43C] md:hover:text-[#30B43C] md:hover:bg-transparent transition-colors ${isActive(
                    "/"
                  )}`}
                >
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li
                  className={`text-lg    pt-2 pb-0 px-5 text-center border-b-2 md:border-b-0 mb-5 md:mb-0 hover:bg-[#30B43C] border-[#30B43C] md:hover:text-[#30B43C] md:hover:bg-transparent transition-colors ${isActive(
                    "/about"
                  )}`}
                >
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                {/* <li
                  className={`text-lg   pt-2 pb-0 px-5 text-center border-b-2 md:border-b-0 mb-5 md:mb-0 hover:bg-[#30B43C] border-[#30B43C] md:hover:text-[#30B43C] md:hover:bg-transparent transition-colors ${isActive(
                    "/blog"
                  )}`}
                >
                  <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                    Blog
                  </Link>
                </li> */}
                <li
                  className={`text-lg    pt-2 pb-0 px-5 text-center border-b-2 md:border-b-0 mb-5 md:mb-0 hover:bg-[#30B43C] border-[#30B43C] md:hover:text-[#30B43C] md:hover:bg-transparent transition-colors ${isActive(
                    "/packages"
                  )}`}
                >
                  <Link href="/packages" onClick={() => setNavbar(!navbar)}>
                    Packages
                  </Link>
                </li>
                <li
                  className={`text-lg    pt-2 pb-0 px-5 text-center border-b-2 md:border-b-0 mb-5 md:mb-0 hover:bg-[#30B43C] border-[#30B43C] md:hover:text-[#30B43C] md:hover:bg-transparent transition-colors ${isActive(
                    "/contact"
                  )}`}
                >
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <PackageButton
                  path="/packages"
                  onClick={() => setNavbar(!navbar)}
                  parentStyling="mt-10 md:mt-0 flex justify-center items-center lg:ml-6 md:hidden lg:flex"
                  buttonStyling="py-2 px-8 bg-[#30B43C] text-[#FFFFFF] rounded-3xl capitalize lg:text-base hover:bg-[#D4FF9E] hover:text-black font-medium transition-all"
                  children="choose your Package"
                />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

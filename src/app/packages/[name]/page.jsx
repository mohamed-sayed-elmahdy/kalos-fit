"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PackagePage = () => {
  const pathname = usePathname();
  const [packageName, setPackageName] = useState("");

  useEffect(() => {
    const segments = pathname.split("/");
    const name = segments[segments.length - 1];
    setPackageName(decodeURIComponent(name));
  }, [pathname]);

  return (
    <div className=" flex justify-center items-center h-[90vh]">
      <h1 className="my-56 text-center text-white text-6xl">You Choosed <span className="textgreen">{packageName}</span> Package</h1>
    </div>
  );
};

export default PackagePage;

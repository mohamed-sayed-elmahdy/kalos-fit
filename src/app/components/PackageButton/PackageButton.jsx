import React from 'react'
import Link from "next/link";

function PackageButton({parentStyling, buttonStyling, children, onClick,path}) {
  return (
    <Link href={path} onClick={onClick}>
    <div className={parentStyling}>
      <button className={buttonStyling}>
        {children}
      </button>
    </div>
  </Link>
  )
}

export default PackageButton;
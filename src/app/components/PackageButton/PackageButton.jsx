import React from 'react'
import Link from "next/link";

function PackageButton({parentStyling, buttonStyling, children, onClick}) {
  return (
    <Link href="/packages" onClick={onClick}>
    <div className={parentStyling}>
      <button className={buttonStyling}>
        {children}
      </button>
    </div>
  </Link>
  )
}

export default PackageButton;
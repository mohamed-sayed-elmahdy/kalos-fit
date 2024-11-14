import React from 'react';
import Link from 'next/link';


function PackageButton({ parentStyling, buttonStyling = '', children, onClick, path = '#' }) {
  return (
    <Link href={path}className={parentStyling}>
      <button 
        type="button" 
        className={buttonStyling} 
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}


export default PackageButton;

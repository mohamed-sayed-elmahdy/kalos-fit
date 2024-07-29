import React from 'react'
import Link from "next/link";
import { FaFacebookSquare,FaInstagram,FaLinkedin   } from "react-icons/fa";


const socials =[
  {
    icon: <FaFacebookSquare /> , path : "https://www.facebook.com/profile.php?id=61563036785699"
  },
  {
    icon: <FaInstagram /> , path : "https://www.instagram.com/kaloss_fit/"
  },
  {
    icon: <FaLinkedin /> , path : "https://www.linkedin.com/company/kalos-fit/about/?viewAsMember=true"
  },
]
function Socials({parentStyling, iconsStyling}) {
  return (
    <div className={parentStyling}>
      {socials.map((item, index)=>{
        return (
          <Link key={index} href={item.path} className={iconsStyling} target="_blank">
          {item.icon}
          </Link>
        )
      })}
</div>
  )
}

export default Socials;
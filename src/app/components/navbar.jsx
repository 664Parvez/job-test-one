import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavbarCss from "../styles/navbar.module.css"

// Image
import Logo from "../../../public/website-logo.png"

// Icons
import { FaBarsStaggered } from "react-icons/fa6";
import { MdLocalPhone, MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
        <nav>
            <div id={NavbarCss.topBar}>
              <div className="container">
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <ul>
                      <li><MdLocalPhone /> +880 1478 25478 </li>
                      <li> | <MdOutlineEmail /> email@gmail.com</li>
                    </ul>
                  </div>
                  <div>
                    <ul id={NavbarCss.topSocialIcon}>
                      <li><Link href=""><FaFacebook /></Link></li>
                      <li><Link href=""><FaInstagram /></Link></li>
                      <li><Link href=""><FaLinkedin /></Link></li>
                      <li><Link href=""><FaYoutube /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id={NavbarCss.navbar}>
              <div className="container">
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <Link href="/">
                      <Image src={Logo} width={0} height={0} layout='responsive' alt=''></Image>
                    </Link>
                  </div>
                  <div>
                    <FaBarsStaggered id={NavbarCss.hambarIcon} />
                  </div>
                </div>
              </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
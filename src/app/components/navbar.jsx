"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavbarCss from "../styles/navbar.module.css"

import {motion} from "motion/react"

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
                  <div id={NavbarCss.topContactInfo}>
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
            <motion.div

              initial={{y: 50, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: .5}}

            id={NavbarCss.navbar}>
              <div className="container">
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <Link href="/">
                      <motion.div
                        initial={{scale: 0, opacity: 0}}
                        whileInView={{scale: 1, opacity: 1}}
                        transition={{duration: .5, delay: .3}}
                      >
                        <Image src={Logo} width={0} height={0} layout='responsive' alt=''></Image>
                      </motion.div>
                    </Link>
                  </div>
                  <div>
                    <FaBarsStaggered id={NavbarCss.hambarIcon} />
                  </div>
                </div>
              </div>
            </motion.div>
        </nav>
    </>
  )
}

export default Navbar
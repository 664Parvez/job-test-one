"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FooterCss from "../styles/footer.module.css"

import {motion} from "motion/react"

import Logo from "../../../public/website-logo.png"

import { MdArrowOutward, MdLocalPhone, MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const footer = () => {

    const date = new Date().getFullYear()

  return (
    <>
        <footer>
            {/* Copywrite */}
            <motion.div

                initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: .5}}

            id={FooterCss.main_footer}>
              <div className="container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div id={FooterCss.contactInfo}>
                                <motion.div
                                    initial={{scale: 0, opacity: 0}}
                                    whileInView={{scale: 1, opacity: 1}}
                                    transition={{duration: .5, delay: .3}}
                                >
                                    <Image src={Logo} width={0} height={0} layout='responsive' alt=''></Image>
                                </motion.div>
                                <div className="my-4">
                                    <ul>
                                        <li><MdLocalPhone /> 315-666-6688</li>
                                        <li><MdOutlineEmail /> themesflat@gmail.com</li>
                                        <li><FaMapMarkerAlt /> 549 Oak St.Crystal Lake, IL 60014</li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <Link href="/contact-us" id={FooterCss.getDirec}>Get Direction <MdArrowOutward /></Link>
                                </div>

                                <div id={FooterCss.socialMedia} className='mt-4'>
                                    <ul>
                                        <li><Link href=""><FaFacebook /></Link></li>
                                        <li><Link href=""><FaInstagram /></Link></li>
                                        <li><Link href=""><FaLinkedin /></Link></li>
                                        <li><Link href=""><FaYoutube /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <h5>Infomation</h5>
                                <hr />
                                <ul id={FooterCss.infoItem}>
                                    <li><Link href="">Home</Link></li>
                                    <li><Link href="">About Us</Link></li>
                                    <li><Link href="">New Arrivals</Link></li>
                                    <li><Link href="">My Account</Link></li>
                                    <li><Link href="">Size Guide</Link></li>
                                    <li><Link href="">Blog</Link></li>
                                    <li><Link href="">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <h5>Customer Services</h5>
                                <hr />
                                <ul id={FooterCss.infoCustomer}>
                                    <li><Link href="">Shipping</Link></li>
                                    <li><Link href="">Orders FAQs</Link></li>
                                    <li><Link href="">Returns & Refund</Link></li>
                                    <li><Link href="">Privacy Policy</Link></li>
                                    <li><Link href="">Terms & Conditions</Link></li>
                                    <li><Link href="">Disclaimer</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
            {/* Copywrite */}

            {/* Copywrite */}
            <div id={FooterCss.copywrite}>
                <div id={FooterCss.copyText} className='text-center'>
                  <p className='mb-0'>© {date} Fabrics. | All Right Reserved | Design & Development by: <Link href="https://parvez-rabbi.vercel.app/">Parvez Rabbi</Link></p>
                </div>
            </div>
            {/* Copywrite */}
        </footer>
    </>
  )
}

export default footer
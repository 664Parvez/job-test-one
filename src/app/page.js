"use client"

import Image from "next/image";
import Link from "next/link";
import homeStyles from "./page.module.css";

import {motion} from "motion/react"

// Icons
import { LuBrain } from "react-icons/lu";
import { FaCode, FaMicrophoneAlt } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

// Images
import hero from "../../public/hero.png"
import hero2 from "../../public/hero2.jpg"
import t1 from "../../public/t1.jpg"
import t2 from "../../public/t2.jpg"
import t3 from "../../public/t3.jpg"
import t4 from "../../public/t4.jpg"
import t5 from "../../public/t5.jpg"
import t6 from "../../public/t6.jpg"
import b1 from "../../public/b1.jpg"
import b2 from "../../public/b2.jpg"
import b3 from "../../public/b3.jpg"


export default function Home() {
  return (
    <>

      <section>
        <div id={homeStyles.hero}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <motion.h1
                    initial={{y: -50, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: .5, delay: .3}}
                >We Create Websites</motion.h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ducimus enim harum officia quis doloremque culpa eaque nihil? Quos ratione odio illum error consequuntur temporibus eius enim quam, rerum asperiores veritatis ab aliquam assumenda voluptatem esse dolores debitis neque et.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos temporibus iure blanditiis tempora!</p>

                <motion.div
                    initial={{x: -50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: .5}} 
                className="mt-4">
                  <Link href="/portfolio" className="btn btn-lg">View Portfolio</Link>
                </motion.div>
              </div>
              <div className="col-lg-7">
                <div id={homeStyles.hero_section_image}>
                    <Image src={hero} width={0} height={0} className={homeStyles.hero_img_one} layout="responsive" alt=""></Image>
                  <motion.div
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: .5}}
                    className={homeStyles.hero_img_two}
                    >
                      <Image src={hero2} width={0} height={0} layout="responsive" alt=""></Image>
                    </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyles.second_section}>
          <div className="container">
            <div className="text-center" id={homeStyles.section_title}>
              <motion.h2
                initial={{y: -50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: .5}}
              >Epic Design and Development</motion.h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia hic facere quod in earum iure. Error exercitationem eligendi consequatur velit! Error exercitationem eligendi consequatur.</p>
            </div>

            <div className="row mt-5">
              <div className="col-lg-3 col-md-6 mt-3">
                <motion.div
                    initial={{y: 80, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: .8, delay: .2}}
                id={homeStyles.secon_section_four_box} className="text-center">
                  <LuBrain id={homeStyles.second_section_icon} />
                  <h4>Strategy</h4>
                  <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum eos perspiciatis officiis repudiandae esse deserunt.</p>
                </motion.div>
              </div>
              <div className="col-lg-3 col-md-6 mt-3">
                <motion.div
                    initial={{y: 80, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: .8, delay: .4}}
                id={homeStyles.secon_section_four_box} className="text-center">
                  <FaCode id={homeStyles.second_section_icon} />
                  <h4>Branding</h4>
                  <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum eos perspiciatis officiis repudiandae esse deserunt.</p>
                </motion.div>
              </div>
              <div className="col-lg-3 col-md-6 mt-3">
                <motion.div
                    initial={{y: 80, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: .8, delay: .6}}
                id={homeStyles.secon_section_four_box} className="text-center">
                  <FaMicrophoneAlt id={homeStyles.second_section_icon} />
                  <h4>Development</h4>
                  <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum eos perspiciatis officiis repudiandae esse deserunt.</p>
                </motion.div>
              </div>
              <div className="col-lg-3 col-md-6 mt-3">
                <motion.div
                    initial={{y: 80, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: .8, delay: .8}}
                id={homeStyles.secon_section_four_box} className="text-center">
                  <IoMdColorPalette id={homeStyles.second_section_icon} />
                  <h4>Web Design</h4>
                  <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum eos perspiciatis officiis repudiandae esse deserunt.</p>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div id={homeStyles.third_section}>
          <div className="container">
            <div className="text-center" id={homeStyles.section_title}>
                <motion.h2
                  initial={{y: -50, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: .5}}
                >Portfolio</motion.h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia hic facere quod Doloremque dolorum eos perspiciatis officiis in earum iure. Error exercitationem eligendi consequatur adipisicing elit. Quia hic facere quod in earum iure velit!</p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 mt-3">
                <motion.div 
                  initial={{y: -50, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: .5}}
                >
                  <Image src={t1} width={0} height={0} layout="responsive" alt=""></Image>
                  <div id={homeStyles.thirdTitleBox} className="text-center">
                    <h4>Website Design</h4>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3">
                <motion.div
                  initial={{y: -50, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: .5, delay: .2}}
                >
                  <Image src={t2} width={0} height={0} layout="responsive" alt=""></Image>
                  <div id={homeStyles.thirdTitleBox} className="text-center">
                    <h4>Mobile Application</h4>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3">
                <motion.div
                  initial={{y: -50, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: .5, delay: .4}}
                >
                  <Image src={t3} width={0} height={0} layout="responsive" alt=""></Image>
                  <div id={homeStyles.thirdTitleBox} className="text-center">
                    <h4>Corporate Design</h4>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3">
                <motion.div
                  initial={{y: -50, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: .5, delay: .6}}
                >
                  <Image src={t4} width={0} height={0} layout="responsive" alt=""></Image>
                  <div id={homeStyles.thirdTitleBox} className="text-center">
                    <h4>App Development</h4>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3">
                <motion.div
                  initial={{y: -50, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: .5, delay: .8}}
                >
                  <Image src={t5} width={0} height={0} layout="responsive" alt=""></Image>
                  <div id={homeStyles.thirdTitleBox} className="text-center">
                    <h4>Responsive Design</h4>
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3">
                <motion.div
                  initial={{y: -50, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: .5, delay: 1}}
                >
                  <Image src={t6} width={0} height={0} layout="responsive" alt=""></Image>
                  <div id={homeStyles.thirdTitleBox} className="text-center">
                    <h4>Digital Product</h4>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyles.brand_value_section}>
          <div className="container">
            <div id={homeStyles.brand_value_full}>
                <motion.div
                    initial={{scale: 1.3, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{duration: 1,}}
                id={homeStyles.brand_value_box}>
                  <div className="text-center">
                    <h2>Brand Values</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis aperiam ab nesciunt numquam nobis nisi.</p>
                    <div className="mt-4">
                      <Link href="/about-us" className="btn">Learn More</Link>
                    </div>
                  </div>
                </motion.div>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="my-2">
                      <Image src={b2} width={0} height={0} layout="responsive" className={homeStyles.tab_hide_img} id={homeStyles.mobile_hide_img} alt=""></Image>
                    </div>
                    <div className="my-2">
                      <Image src={b3} width={0} height={0} layout="responsive" alt=""></Image>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="my-2">
                      <Image src={b1} width={0} height={0} layout="responsive" className={homeStyles.tab_hide_img} alt=""></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section>
        <div id={homeStyles.forth_section}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-4"></div>
              <div className="col-lg-6 col-md-8">
                <motion.h2
                  initial={{y: -50, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: .5}}
                className="mb-5">Construction and Renovation Projects</motion.h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, aliquam! Impedit debitis eveniet, veniam asperiores alias molestiae adipisci rem veritatis repellat velit tempora dolorem eum doloribus in ut quibusdam facere voluptatum dicta nemo! Non laudantium eum sint, vero at obcaecati labore laboriosam assumenda eius repellat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, laborum. Eius, veritatis similique? Quisquam, ea?</p>

                <motion.div 
                  initial={{x: 100, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{duration: .5}}
                >
                  <Link href="/contact" className="btn btn-lg">Contact Us</Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyles.fifth_section}>
          <div className="container">
            <div className="text-center" id={homeStyles.section_title}>
                <motion.h2
                  initial={{y: -50, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: .5}}
                >What We Do ?</motion.h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia hic facere quod Doloremque dolorum eos perspiciatis officiis in earum iure. Error exercitationem eligendi consequatur adipisicing elit. Quia hic facere quod in earum iure velit!</p>
            </div>

            <div className="row mt-5">
              <div className="col-lg-4">
                <motion.h4
                  initial={{y: -50, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: .5, delay: .3}}
                >Stratrgy.</motion.h4>
                <hr />
                <ul className="mt-3">
                  <li><MdArrowOutward /> <Link href="">Analytics and Research</Link></li>
                  <li><MdArrowOutward /> <Link href="">Interactive Workshops</Link></li>
                  <li><MdArrowOutward /> <Link href="">Brand Strategy</Link></li>
                  <li><MdArrowOutward /> <Link href="">Content Strategy</Link></li>
                  <li><MdArrowOutward /> <Link href="">Digital Strategy</Link></li>
                  <li><MdArrowOutward /> <Link href="">Conversion Rate Optimization</Link></li>
                </ul>
              </div>
              <div className="col-lg-4">
                <motion.h4
                  initial={{y: -50, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: .5, delay: .6}}
                >Design.</motion.h4>
                <hr />
                <ul className="mt-3">
                  <li><MdArrowOutward /> <Link href="">Creative Direction</Link></li>
                  <li><MdArrowOutward /> <Link href="">Brand Guides</Link></li>
                  <li><MdArrowOutward /> <Link href="">Prototypes</Link></li>
                  <li><MdArrowOutward /> <Link href="">UI/UX & Web Design</Link></li>
                  <li><MdArrowOutward /> <Link href="">Visual Asset Creation</Link></li>
                  <li><MdArrowOutward /> <Link href="">Motion Design</Link></li>
                </ul>
              </div>
              <div className="col-lg-4">
                <motion.h4
                  initial={{y: -50, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{duration: .5, delay: .9}}
                >Development.</motion.h4>
                <hr />
                <ul className="mt-3">
                  <li><MdArrowOutward /> <Link href="">System Architecture Design</Link></li>
                  <li><MdArrowOutward /> <Link href="">Full Stack Development</Link></li>
                  <li><MdArrowOutward /> <Link href="">3rd Party Intergration</Link></li>
                  <li><MdArrowOutward /> <Link href="">Perfomence Optimization</Link></li>
                  <li><MdArrowOutward /> <Link href="">WordPress Development</Link></li>
                  <li><MdArrowOutward /> <Link href="">Shopify Development</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyles.sixth_section}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-6"></div>
              <div className="col-lg-5 col-md-6">
                <motion.div
                  initial={{x: 100, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{duration: .5, delay: .3}}
                id={homeStyles.six_section_boxs} className="my-4">
                  <h3>Branding Strategy</h3>
                  <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, quia cum eius dignissimos at eaque doloremque, praesentium et ab culpa sed mollitia officiis deserunt consequatur?</p>

                  <div className="mt-4">
                    <Link href="">Read More <MdArrowOutward /></Link>
                  </div>
                </motion.div>
                <motion.div
                  initial={{x: 100, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{duration: .5, delay: .6}}
                id={homeStyles.six_section_boxs} className="my-4">
                  <h3>Designing Logos</h3>
                  <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, quia cum eius dignissimos at eaque doloremque, praesentium et ab culpa sed mollitia officiis deserunt consequatur?</p>
                </motion.div>
                <motion.div
                  initial={{x: 100, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{duration: .5, delay: .9}}
                id={homeStyles.six_section_boxs} className="my-4">
                  <h3>Branding Identity</h3>
                  <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, quia cum eius dignissimos at eaque doloremque, praesentium et ab culpa sed mollitia officiis deserunt consequatur?</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyles.seventh_section}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <motion.div
                  initial={{scale: 1.3, opacity: 0}}
                  whileInView={{scale: 1, opacity: 1}}
                  transition={{duration: .5, delay: .3}}
                id={homeStyles.seventh_section_box}>
                  <h3>Crafting Digital Experiences</h3>
                  <h5>Join the elit ranks of sustained value creators</h5>
                  <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores dolores tempore amet architecto consequatur illum officia numquam iusto eligendi omnis.</p>
                  <Link href="/contact-us" className="btn btn-lg"> Contact Us </Link>
                </motion.div>
              </div>
              <div className="col-lg-7 col-md-6"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id={homeStyles.eight_section}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <motion.h3
                  initial={{x: -100, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{duration: .5, delay: .3}}
                >Subscribe to Our Newsletter</motion.h3>
                <p className="mb-0">Sign up for our newsletter and get 10% off your first purchase. Get it Now quickly</p>
              </div>
              <div className="col-lg-6">
                <form action="">
                  <input type="email" placeholder="Enter your email . . ." className="form-control form-control-lg" />
                  <motion.button
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: .5, delay: .3}}
                  className="btn btn-lg mt-3">Subscribe</motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

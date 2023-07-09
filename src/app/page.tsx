"use client";

import {useRef, useEffect, ReactElement, useState} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Avatar from "main/components/Avatar/Avatar";
import Navbar from "main/components/Navbar/Navbar";
import Education from "main/components/Education/Education";
import Work from "main/components/Work/Work";
import Projects from "main/components/Projects/Projects";
import Contact from "main/components/Contact/Contact";
import ListingLogos from "main/components/Listing-logos/ListingLogos";
import {
  CustomWrapper,
  CustomGridRow,
  CustomGridColumn,
  AnimatedText,
  Description, TitleAndDescription,
} from "@git-ovidiu/nextjs-component-library";
import styles from "./Homepage.module.scss";
import {delay, duration_fast, label_color} from "main/components/Settings/FramerMotion"


export default function Homepage() {

  const scrollTo = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const smoothScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


      return (
          <motion.section className={styles["o-homepage"]}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
          >
            <div className={styles["about-container"]}>
              <div id="about" className={styles["about"]}>
                <Avatar />

                <Navbar
                    link={
                      <>
                        <Link href="/#about" passHref legacyBehavior>
                          <a onClick={(e) => smoothScrollToSection(e, "#about")}>
                            About
                          </a>
                        </Link>

                        <Link href="/#education" passHref legacyBehavior>
                          <a onClick={(e) => smoothScrollToSection(e, "#education")}>
                            Education
                          </a>
                        </Link>

                        <Link href="/#work" passHref legacyBehavior>
                          <a onClick={(e) => smoothScrollToSection(e, "#work")}>Work</a>
                        </Link>

                        <Link href="/#projects" passHref legacyBehavior>
                          <a onClick={(e) => smoothScrollToSection(e, "#projects")}>
                            Projects
                          </a>
                        </Link>

                        <Link href="/#contact" passHref legacyBehavior>
                          <a onClick={(e) => smoothScrollToSection(e, "#contact")}>
                            Contact
                          </a>
                        </Link>
                      </>
                    }
                />

                <CustomWrapper
                    border-radius="0px"
                    space-top="0"
                    space-bottom="0"
                    custom-background-color={"white"}
                >
                  <CustomGridRow vertical-alignment="center">
                    <CustomGridColumn
                        columns-equal-paddings
                        lg={8}
                        lg-offset={2}
                        xs={12}
                        style={{zIndex: 123}}
                    >
                      <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className={styles["text-content-container"]}
                      >
                        <div className={styles["first-shape"]}>
                            <Image draggable={false} src={"https://camonysi.sirv.com/portofolio/homepage-shape-primary-color.svg"} alt={"Placeholder"} layout={"responsive"} width={500} height={500}/>
                        </div>
                        <TitleAndDescription
                            text-align="center"
                            label={<Description color={label_color} text="About me"/>}
                            title={
                            <>
                              <AnimatedText text="Welcome to my portfolio!" variant="h2"/>
                              <AnimatedText text="I'm Ovidiu, a dedicated web developer specializing in web design and frontend development." variant="h2"/>
                            </>
                            }
                            description={<motion.h6
                                initial={{opacity: 0, y: 100}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: duration_fast, delay: delay}}
                            >{`I'm`} passionate about creating visually stunning and functional websites and I strive to craft seamless user experiences through innovative design and new frontend technologies.</motion.h6>}
                            action={""}
                        />
                      </motion.div>
                    </CustomGridColumn>

                  </CustomGridRow>
                </CustomWrapper>

                <CustomWrapper
                    border-radius="0px"
                    space-top="xl"
                    space-bottom="xl"
                    custom-background-color={"white"}
                >
                  <CustomGridRow vertical-alignment="center">
                    <CustomGridColumn
                        column-background="transparent"
                        column-background-opacity="0.37"
                        column-padding-top="unset"
                        columns-equal-paddings
                        lg={10}
                        xs={12}
                        lg-offset={1}
                    >
                      <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={styles["m-listing-logos"]}
                      >
                        <ListingLogos />
                      </motion.div>
                    </CustomGridColumn>
                  </CustomGridRow>
                </CustomWrapper>
              </div>
            </div>

            <div id="education" className={styles["education"]}>
              <Education />
            </div>
            <div id="work" className={styles["work"]}>
              <Work />
            </div>

            <div id="projects" className={styles["projects"]}>
              <Projects />
            </div>

            <div id="contact" className={styles["contact"]}>
              <Contact />
            </div>
          </motion.section>
      );

}
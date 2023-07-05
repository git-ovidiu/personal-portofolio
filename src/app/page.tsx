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
  Description,
} from "@git-ovidiu/nextjs-component-library";
import styles from "./Homepage.module.scss";

//navigation jump-to-section
const smoothScrollToSection = (e: React.MouseEvent, sectionId: string) => {
  e.preventDefault();
  const target = document.querySelector(sectionId) as HTMLElement;
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Homepage() {
  // const sectionRefs = {
  //   section1: useRef<HTMLDivElement>(null),
  //   section2: useRef<HTMLDivElement>(null),
  //   section3: useRef<HTMLDivElement>(null),
  //   section4: useRef<HTMLDivElement>(null),
  //   section5: useRef<HTMLDivElement>(null),
  // };

  const scrollTo = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // useEffect(() => {
  //   if (window.location.hash) {
  //     const target = document.querySelector(
  //         window.location.hash
  //     ) as HTMLElement;
  //     if (target) {
  //       window.scrollTo({
  //         top: target.offsetTop,
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  // }, []);


  //check display width
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWindowWidth();

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const isDesktop = windowWidth > 992;





  const smoothScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const target = document.querySelector(sectionId) as HTMLElement;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

    useEffect(() => {
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash) as HTMLElement;
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth",
          });
        }
      }
    }, []);



    const sectionRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
      let isScrolling = false;

      const handleScroll = (event: WheelEvent) => {
        if (!isScrolling) {
          const scrollDirection = Math.sign(event.deltaY);
          const currentSectionIndex = sectionRefs.current.findIndex(
              (ref) => ref && ref.getBoundingClientRect().top >= 0
          );
          const nextSectionIndex = currentSectionIndex + scrollDirection;

          if (sectionRefs.current[nextSectionIndex]) {
            sectionRefs.current[nextSectionIndex].scrollIntoView({
              behavior: "smooth",
            });
            isScrolling = true;

            setTimeout(() => {
              isScrolling = false;
            }, 1000);
          }
        }
      };

      window.addEventListener("wheel", handleScroll);

      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    }, []);

    const registerSectionRef = (ref: HTMLElement | null) => {
      if (ref && !sectionRefs.current.includes(ref)) {
        sectionRefs.current.push(ref);
      }
    };




  const desktopContent =  (
    <section className={styles["desktop"]}>
  <div className={styles["about-container"]} ref={registerSectionRef}>
    <div id="about">
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
          space-bottom="m"
          custom-background-color={"transparent"}
      >
        <CustomGridRow vertical-alignment="center">
          <CustomGridColumn
              column-background="transparent"
              column-background-opacity="0.6"
              columns-equal-paddings
              style={{ zIndex: 3 }}
              lg={6}
              lg-offset={3}
              xs={12}
          >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
              <AnimatedText
                  color="black"
                  text="Hi, I'm ovidiu, facilis fames neglegentur tale splendide pellentesque dico"
                  variant="h1"
              />
            </motion.div>
          </CustomGridColumn>

          <CustomGridColumn
              column-background="transparent"
              column-background-opacity="0.6"
              columns-equal-paddings
              style={{ zIndex: 2 }}
              lg={1}
              lg-offset={0}
              xs={12}
          >
            <motion.div
                initial={{ opacity: 0, transform: "scale(0)" }}
                animate={{ opacity: 1, transform: "scale(1)" }}
                transition={{ delay: 0.3 }}
                className={styles["homepage-shape"]}
            >
              <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
              >
                <Image
                    src={
                      "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/homepage-shape.svg"
                    }
                    alt={"Placeholder"}
                    width={850}
                    height={850}
                    style={{ borderRadius: "500px" }}
                />
              </motion.div>
            </motion.div>
          </CustomGridColumn>
        </CustomGridRow>
      </CustomWrapper>

      <CustomWrapper
          border-radius="0px"
          space-top="m"
          space-bottom="m"
          custom-background-color={"white"}
      >
        <CustomGridRow vertical-alignment="center">
          <CustomGridColumn
              column-padding-top="unset"
              columns-equal-paddings
              lg={5}
              xs={12}
              style={{ zIndex: 3 }}
          >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
            >
              <Description
                  color="black"
                  text={
                    <h6>
                      utinam consetetur eum quo harum facilis commodo hac odio
                      fermentum vituperatoribus ligula nihil propriae
                      neglegentur cum odio solet gubergren fastidii
                    </h6>
                  }
              />
            </motion.div>
          </CustomGridColumn>
          <CustomGridColumn
              column-background="black"
              column-background-opacity="0.37"
              column-padding-top="unset"
              columns-equal-paddings
              lg={6}
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

  <div id="education" className={styles["education"]} ref={registerSectionRef}>
    <Education />
  </div>
  <div id="work" className={styles["work"]} ref={registerSectionRef}>
    <Work />
  </div>

  <div id="projects" className={styles["projects"]} ref={registerSectionRef}>
    <Projects />
  </div>

  <div id="contact" className={styles["contact"]} ref={registerSectionRef}>
    <Contact />
  </div>
    </section>
  );

  const mobileContent = (
      <section className={styles["mobile"]}>
      <div className={styles["about-container"]}>
          <div id="about">
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
                space-bottom="m"
                custom-background-color={"transparent"}
            >
              <CustomGridRow vertical-alignment="center">
                <CustomGridColumn
                    column-background="transparent"
                    column-background-opacity="0.6"
                    columns-equal-paddings
                    style={{ zIndex: 3 }}
                    lg={6}
                    lg-offset={3}
                    xs={12}
                >
                  <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                  >
                    <AnimatedText
                        color="black"
                        text="Hi, I'm ovidiu, facilis fames neglegentur tale splendide pellentesque dico"
                        variant="h1"
                    />
                  </motion.div>
                </CustomGridColumn>

                <CustomGridColumn
                    column-background="transparent"
                    column-background-opacity="0.6"
                    columns-equal-paddings
                    style={{ zIndex: 2 }}
                    lg={1}
                    lg-offset={0}
                    xs={12}
                >
                  <motion.div
                      initial={{ opacity: 0, transform: "scale(0)" }}
                      animate={{ opacity: 1, transform: "scale(1)" }}
                      transition={{ delay: 0.3 }}
                      className={styles["homepage-shape"]}
                  >
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                      <Image
                          src={
                            "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/homepage-shape.svg"
                          }
                          alt={"Placeholder"}
                          width={850}
                          height={850}
                          style={{ borderRadius: "500px" }}
                      />
                    </motion.div>
                  </motion.div>
                </CustomGridColumn>
              </CustomGridRow>
            </CustomWrapper>

            <CustomWrapper
                border-radius="0px"
                space-top="m"
                space-bottom="m"
                custom-background-color={"white"}
            >
              <CustomGridRow vertical-alignment="center">
                <CustomGridColumn
                    column-padding-top="unset"
                    columns-equal-paddings
                    lg={5}
                    xs={12}
                    style={{ zIndex: 3 }}
                >
                  <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                  >
                    <Description
                        color="black"
                        text={
                          <h6>
                            utinam consetetur eum quo harum facilis commodo hac odio
                            fermentum vituperatoribus ligula nihil propriae
                            neglegentur cum odio solet gubergren fastidii
                          </h6>
                        }
                    />
                  </motion.div>
                </CustomGridColumn>
                <CustomGridColumn
                    column-background="black"
                    column-background-opacity="0.37"
                    column-padding-top="unset"
                    columns-equal-paddings
                    lg={6}
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
      </section>
  )

      return isDesktop ? desktopContent : mobileContent;

}
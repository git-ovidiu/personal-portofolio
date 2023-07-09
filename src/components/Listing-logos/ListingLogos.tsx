"use client";

import React, { Component } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ListingLogos.module.scss";
import { Logo } from "@git-ovidiu/nextjs-component-library";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {duration_fast} from "../Settings/FramerMotion";

export default function ListingLogos() {
  const logos = [
    {
      imageUrl:
        "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/js.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/storybook.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/lit.png",
    },
    {
      imageUrl: "https://camonysi.sirv.com/portofolio/Nextjs-logo.png",
    },

    {
      imageUrl:
          "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/hubspot.png",
    },
    {
      imageUrl:
        "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/sass.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/git.png",
    },
    {
      imageUrl:
        "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/ts.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/React.png",
    },


    {
      imageUrl:
          "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/js.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/storybook.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/lit.png",
    },
    {
      imageUrl: "https://camonysi.sirv.com/portofolio/Nextjs-logo.png",
    },

    {
      imageUrl:
          "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/hubspot.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/sass.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/git.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/ts.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/React.png",
    },
  ];

  return (
    <motion.div className={`${styles["m-listing-logos"]}`}
      initial={{opacity: 0, y: '100%'}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: duration_fast, delay: 1}}
    >
      <div className={styles["slider"]}>
        <div className={styles["slide-track"]}>
          {logos.map((logo, index) => (
            <div className={styles["slide"]} key={index}>
              <picture>
                <Image src={logo.imageUrl} alt="Logo Placeholder" fill />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

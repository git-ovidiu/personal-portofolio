"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ListingLogos.module.scss";
import {duration_fast} from "../Settings/FramerMotion";

export default function ListingLogos() {
  const logos = [
    {
      imageUrl:
        "https://camonysi.sirv.com/portofolio/js.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/portofolio/storybook.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/portofolio/lit.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/portofolio/sass.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/portofolio/React.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/portofolio/git.png",
    },
    {
      imageUrl: "https://camonysi.sirv.com/portofolio/Nextjs-logo.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/portofolio/ts.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/portofolio/hubspot.png",
    },


    {
      imageUrl:
          "https://camonysi.sirv.com/portofolio/js.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/portofolio/storybook.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/portofolio/lit.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/portofolio/sass.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/portofolio/React.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/portofolio/git.png",
    },
    {
      imageUrl: "https://camonysi.sirv.com/portofolio/Nextjs-logo.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/portofolio/ts.png",
    },
    {
      imageUrl:
          "https://camonysi.sirv.com/portofolio/hubspot.png",
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
                <Image draggable={false} src={logo.imageUrl} alt="Logo Placeholder" fill />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

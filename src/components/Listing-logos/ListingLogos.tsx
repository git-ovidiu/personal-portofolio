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
        "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128135/CV%20PICS/Listing%20Logos/js_er4l36.png",
    },
    {
      imageUrl:
          "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128135/CV%20PICS/Listing%20Logos/storybook_gymnto.png",
    },
    {
      imageUrl:
          "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128135/CV%20PICS/Listing%20Logos/lit_ganauw.png",
    },
    {
      imageUrl:
          "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128135/CV%20PICS/Listing%20Logos/sass_oanlj4.png",
    },
    {
      imageUrl:
          "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128136/CV%20PICS/Listing%20Logos/React_lk9xai.png",
    },
    {
      imageUrl:
          "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128134/CV%20PICS/Listing%20Logos/git_jh5if0.png",
    },
    {
      imageUrl: "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128135/CV%20PICS/Listing%20Logos/lit_ganauw.png",
    },
    {
      imageUrl:
          "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128134/CV%20PICS/Listing%20Logos/ts_zflqk1.png",
    },
    {
      imageUrl:
          "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128135/CV%20PICS/Listing%20Logos/hubspot_patywj.png",
    },


    {
      imageUrl:
          "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128135/CV%20PICS/Listing%20Logos/js_er4l36.png",
    },
    {
      imageUrl:
          "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128135/CV%20PICS/Listing%20Logos/storybook_gymnto.png",
    },
    {
      imageUrl:
          "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128135/CV%20PICS/Listing%20Logos/lit_ganauw.png",
    },
    {
      imageUrl:
          "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128135/CV%20PICS/Listing%20Logos/sass_oanlj4.png",
    },
    {
      imageUrl:
          "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128136/CV%20PICS/Listing%20Logos/React_lk9xai.png",
    },
    {
      imageUrl:
          "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128134/CV%20PICS/Listing%20Logos/git_jh5if0.png",
    },
    {
      imageUrl: "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128135/CV%20PICS/Listing%20Logos/lit_ganauw.png",
    },
    {
      imageUrl:
          "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128134/CV%20PICS/Listing%20Logos/ts_zflqk1.png",
    },
    {
      imageUrl:
          "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128135/CV%20PICS/Listing%20Logos/hubspot_patywj.png",
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

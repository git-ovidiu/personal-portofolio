"use client";

import React, { Component } from "react";
import * as NextComponents from "@git-ovidiu/nextjs-component-library"

const {
  MediaImage,
  SimpleDivider,
  Divider,
  CustomGridColumn,
  CustomWrapper,
  CustomGridRow,
} = NextComponents;



import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Avatar.module.scss";
import {label_color, primary_color} from "main/components/Settings/FramerMotion"

const shapeVariantCustom = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "80%" },
};

export default function Avatar() {
  return (
    <div className={styles["m-avatar"]}>
      {/*<div className={styles["top-shapes"]}>*/}
      {/*	<div className={styles["shape"]}></div>*/}
      {/*	<motion.div*/}
      {/*		className={`${styles["shape"]} ${styles["second-shape"]}`}*/}
      {/*		variants={shapeVariantCustom}*/}
      {/*		initial="initial"*/}
      {/*		animate="animate"*/}
      {/*	></motion.div>*/}
      {/*	<div className={styles["shape"]}></div>*/}
      {/*</div>*/}

      <CustomWrapper
        border-radius="0px"
        space-bottom="0"
        space-top="m"
        custom-background-color={"white"}
        container-fluid
      >
        <CustomGridRow vertical-alignment="center">
          <CustomGridColumn
            column-border-radius="500px"
            column-padding-bottom="unset"
            column-padding-top="unset"
            columns-equal-paddings
            xs={12}
          >
            <motion.div
              className={styles["avatar-image"]}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <MediaImage
                image-border-radius={"50%"}
                style={{border: "2px solid #29648a", borderRadius: "50%"}}
                image={
                  <div className={styles["avatar-container"]}>
                    <Image
                      alt="Placeholder"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src="https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/profile-pic.jpeg"
                    />
                  </div>
                }
                object-fit="cover"
                padding-bottom-desktop="150px"
                padding-bottom-mobile="150px"
                padding-bottom-tablet="150px"
              />
              <div
                className={`${styles["divider"]} ${styles["horizontal-divider-left"]}`}
              >
                <SimpleDivider
                  animate
                  animation-delay="0s"
                  animation-duration="3s"
                  border-radius="0px"
                  color={primary_color}
                  height="2px"
                  loop
                  width="100%"
                />
              </div>
              <div
                className={`${styles["divider"]} ${styles["vertical-divider"]}`}
              >
                <Divider
                  divider={
                    <>
                      <SimpleDivider
                        animate-vertical
                        animation-duration="1s"
                        animation-delay={"0.5s"}
                        color={primary_color}
                        height="100px"
                        loop
                        width="2px"
                      />
                    </>
                  }
                  position="bottom"
                  vertical
                />
              </div>

              <div
                className={`${styles["divider"]} ${styles["horizontal-divider-right"]}`}
              >
                <SimpleDivider
                  animate
                  animation-delay="0s"
                  animation-duration="3s"
                  border-radius="0px"
                  color={primary_color}
                  height="2px"
                  loop
                  width="100%"
                />
              </div>
            </motion.div>
          </CustomGridColumn>
        </CustomGridRow>
      </CustomWrapper>
    </div>
  );
}

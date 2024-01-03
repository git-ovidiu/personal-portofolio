"use client";

import React from "react";
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
import {delay, duration_fast, primary_color} from "main/components/Settings/FramerMotion"

export default function Avatar() {
  return (
    <div className={styles["m-avatar"]}>
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
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{duration: duration_fast, delay: delay}}
            >
              <MediaImage
                image-border-radius={"50%"}
                style={{border: "2px solid black", borderRadius: "50%"}}
                image={
                  <div className={styles["avatar-container"]}>
                    <Image
                      alt="Placeholder"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src="https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128133/CV%20PICS/avatar/profile-pic_kuthoq.jpg"
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

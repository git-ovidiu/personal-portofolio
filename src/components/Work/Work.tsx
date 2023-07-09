import React, { Component } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Work.module.scss";
import {
  AnimatedText,
  ButtonLineDrawing,
  ButtonSlide,
  Card,
  CustomGridColumn,
  CustomGridRow,
  CustomWrapper,
  Description, Divider,
  Label,
  Logo,
  MediaImage, SimpleDivider,
  TitleAndDescription,
} from "@git-ovidiu/nextjs-component-library";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AiOutlineDownload } from "react-icons/ai";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import workCard from "./api/work-card";
import article from "main/components/Work/api/article"
import articles from "main/components/Work/api/article"
import {delay, duration_fast, duration_slow} from "main/components/Settings/FramerMotion"

export default function Work() {
  return (
    <div className={styles["o-work"]}>
      <CustomWrapper
        border-radius="0px"
        space-bottom="m"
        space-top="m"
        custom-background-color={"white"}
      >
        <CustomGridRow vertical-alignment="">
          <CustomGridColumn
            column-background="black"
            column-background-opacity="0.37"
            column-border-radius="500px"
            column-padding-bottom="unset"
            column-padding-top="unset"
            columns-equal-paddings
            lg={5}
            xs={12}
          >
            <div className={styles["card-column"]}>
              <motion.div className={styles["card-container"]}
                initial={{opacity: 0, x: -100}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: duration_fast, delay: delay}}
              >
                <Card
                  image={
                    <div className={styles["card-image-container"]}>
                      <Image
                        alt="Placeholder"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src="https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/2a64f27f7f9ae4ed5f3981f66f278739%20(1)%20(1).png"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  }
                  labels={
                    <>
                      <p>skills: </p>
                      {workCard.labels?.map((label, labelIndex) => (
                        <motion.div
                          key={labelIndex}
                          initial={{
                            opacity: 0,
                            x: 100,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: labelIndex * 0.2,
                          }}
                        >
                          {label}
                        </motion.div>
                      ))}
                    </>
                  }
                  title={<div className={styles["title-container"]}>
                    <div className={styles["combined-title"]}>
                      {workCard.titles?.map((title, index) => (
                          <div key={index}>{title}</div>
                      ))}
                    </div>
                    {/*<Divider*/}
                    {/*    divider={<>*/}
                    {/*      <SimpleDivider animate loop animation-duration="1s" border-radius="10px" color="#151A36" height="5px" width="100%"/>*/}
                    {/*    </>}*/}
                    {/*    position="right"*/}
                    {/*    width="100%"*/}
                    {/*/>*/}
                    <Divider
                        divider={<>
                          <SimpleDivider animate loop animation-duration="1s" border-radius="10px" color="#AD005E" height="5px" width="100%"/>
                        </>}
                        position="right"
                        width="100%"
                    />
                </div>}
                  description={""}
                  buttons={<div className={styles["action-content"]}>{workCard.button}</div>}
                />
              </motion.div>
            </div>
          </CustomGridColumn>
          <CustomGridColumn
            column-background="black"
            column-background-opacity="0.37"
            column-border-radius="0px"
            column-padding-bottom="unset"
            column-padding-top="unset"
            columns-equal-paddings
            lg={6}
            lg-offset={1}
            xs={12}
          >
            <div className={styles["article-container"]}>
            {articles.map((article, index ) => (
                <motion.div className={styles["small-article"]} key={index}
                    initial={{opacity: 0, x: 100}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: duration_fast}}
                >
                  <div className={styles.title}>
                    {article.title}
                  </div>
                  <div className={styles["divider"]}>
                    {article.divider}
                  </div>
                  {article.description}
                </motion.div>
            ))}
            </div>
          </CustomGridColumn>
        </CustomGridRow>
      </CustomWrapper>
    </div>
  );
}

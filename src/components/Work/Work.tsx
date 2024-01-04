import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Work.module.scss";
import {
  Card,
  CustomGridColumn,
  CustomGridRow,
  CustomWrapper,
  Divider,
  SimpleDivider,
} from "@git-ovidiu/nextjs-component-library";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import workCard from "./api/work-card";
import articles from "main/components/Work/api/article"
import {delay, duration_fast} from "main/components/Settings/FramerMotion"

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
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
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
                        src={"https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128134/CV%20PICS/work/frozenlogic-logo_1_hgq4bs.png"}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  }
                  labels={
                    <>
                      {/*<h4>Currently working at FrozenLogic</h4>*/}
                      <p>acquired skills: </p>
                      {workCard.labels?.map((label, labelIndex) => (
                        <motion.div
                          key={labelIndex}>
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
                    <Divider
                        divider={<>
                          <SimpleDivider animate loop={false} animation-duration="1s" border-radius="10px" color="#AD005E" height="5px" width="100%"/>
                        </>}
                        position="center"
                        width="100%"
                    />
                </div>}
                  description={""}
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
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
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

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
  Description,
  Label,
  Logo,
  MediaImage,
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
            lg={4}
            xs={12}
          >
            <>
              <div className={styles["card-container"]}>
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
                    {workCard.labels?.map((label, labelIndex) =>(
                        <Label
                            key={labelIndex}
                            background-color={label.background}
                            color={label.color}
                            text={label.text}
                        />
                    ))}
                    </>
                  }
                  title={<AnimatedText text={workCard.title} variant="h5" />}
                  description={
                    <Description
                        text={
                          <>
                            <p>{workCard.description}</p>
                          </>
                        }
                    />
                  }
                  buttons={"na na"}
                />
              </div>
            </>
          </CustomGridColumn>
          <CustomGridColumn
            column-background="black"
            column-background-opacity="0.37"
            column-border-radius="0px"
            column-padding-bottom="unset"
            column-padding-top="unset"
            columns-equal-paddings
            lg={7}
            lg-offset={1}
            xs={12}
          >
            {article.first_title}
            <br/>
            <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
            >
              {article.first_description}
            </motion.div>

            <br/>
            <br/>
            <br/>

            {article.second_title}
            <br/>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
            >
              {article.second_description}
            </motion.div>

          </CustomGridColumn>
        </CustomGridRow>
      </CustomWrapper>
    </div>
  );
}

import React, { Component } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Education.module.scss";
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
  MediaImage,
  TitleAndDescription,
} from "@git-ovidiu/nextjs-component-library";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AiOutlineDownload } from "react-icons/ai";
import EducationCard from "main/components/Education/api/Education-card"
import EducationCards from "main/components/Education/api/Education-card"
// import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';
// import '@splidejs/react-splide/css/core';

export default function Education() {
  return (
    <div className={styles["o-education"]}>
      <section className={styles["o-listing-highlights"]}>
        <CustomWrapper
          border-radius="0px"
          space-top="0"
          space-bottom="0"
          custom-background-color={"#f0e5c7"}
          full-height
        >
          <CustomGridRow vertical-alignment="center">
            <CustomGridColumn lg={6} xs={12}>
              <TitleAndDescription
                action={
                  <ButtonSlide
                    hover-effect="slide-right"
                    padding="xs"
                    text="button text"
                  />
                }
                description="Tation pertinacia pretium feugiat diam torquent qui oratio scripta offendit dicat unum montes brute referrentur"
                label={<Description color="red" text="Education" />}
                text-align="center"
                title={
                  <AnimatedText
                    text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti"
                    variant="h4"
                  />
                }
              />
            </CustomGridColumn>

            <CustomGridColumn lg={6} xs={12}>
              <Splide
                aria-label="My Favorite Images"
                // style={{padding: "20px"}}
                options={{
                  gap: "2%",
                  perPage: 1,
                  breakpoints: {
                    576: {
                      perPage: 1,
                    },
                    992: {
                      perPage: 2,
                    },
                  },
                }}
              >
                {EducationCards.map((card, index) =>(
                    <SplideSlide key={index}>
                      <Card
                          is-overlapped
                          // image-height-mobile={"50px"}
                          // image-height-tablet={"250px"}
                          // image-height-desktop={"250px"}
                          image={
                            <div className={styles["card-image"]}>
                              <MediaImage
                                  image={
                                    <Image
                                        alt="Placeholder"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        src={card.image}
                                    />
                                  }
                                  image-border-radius="30px"
                                  object-fit="contain"
                                  padding-bottom-mobile="200px"
                                  padding-bottom-tablet="100%"
                                  padding-bottom-desktop="56%"
                              />
                            </div>
                          }
                          labels={
                            <>
                              {card.labels.map((label, labelIndex) =>(
                                  <motion.div key={labelIndex}
                                      initial={{
                                        opacity: 0,
                                        x: 100,
                                      }}
                                      whileInView={{ opacity: 1, x: 0 }}
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
                          title={<AnimatedText text={card.title} variant="h5" />}
                          description={
                            <Description text={<p>{card.description}</p>} />
                          }
                          buttons={
                            <>
                              {card.button}
                            </>
                          }
                      />
                    </SplideSlide>
                ))}
              </Splide>
            </CustomGridColumn>
          </CustomGridRow>
        </CustomWrapper>
      </section>
    </div>
  );
}

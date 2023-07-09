import React, { Component } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Education.module.scss";
import {
  AnimatedText,
  Card,
  CustomGridColumn,
  CustomGridRow,
  CustomWrapper,
  Description,
  MediaImage,
  TitleAndDescription,
} from "@git-ovidiu/nextjs-component-library";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import EducationCards from "main/components/Education/api/Education-card"
import {delay, duration_fast, duration_slow, label_color} from "main/components/Settings/FramerMotion"
// import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';
// import '@splidejs/react-splide/css/core';

export default function Education() {
  return (
      <section className="o-education-global">
    <div className={styles["o-education"]}>
      <section className={styles["o-listing-highlights"]}>
        <CustomWrapper
          border-radius="0px"
          space-top="xl"
          space-bottom="xl"
          // custom-background-color={"#7395ae"}
          custom-background-color={"#29648a"}
          full-height
        >
          <CustomGridRow vertical-alignment="center">
            <CustomGridColumn lg={6} xs={12}>
              <motion.div
              initial={{opacity: 0, x: -100}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: duration_fast, delay: delay}}
              >
              <TitleAndDescription
                action={""}
                description={
                <>
                <Description color={"white"} text={"Through hard work and determination, I successfully completed a frontend course at Codecool and combined with the invaluable insights gained from obtaining a Master's degree in Integrated Information Systems for Business from the University Transylvania of Brasov and a Bachelor's degree in Applied Modern Languages from the University of Bucharest, I bring forth a comprehensive skill set that spans across multiple dimensions in this domain."}/>
                </>
                }
                label={<Description color={label_color} text="Education" />}
                text-align="center"
                title={
                  <AnimatedText
                    text="Diverse Background in Web Development, E-commerce, Languages, and Economics"
                    variant="h4"
                    color={"white"}
                  />
                }
              />
              </motion.div>
            </CustomGridColumn>

            <CustomGridColumn lg={6} xs={12}>
              <motion.div
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: duration_fast, delay: delay}}
              viewport={{once: true}}
              >
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
                      <motion.div
                          initial={{opacity: 0, y: 100}}
                          whileInView={{opacity: 1, y: 0}}
                          transition={{duration: duration_fast}}
                      >
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
                      </motion.div>
                    </SplideSlide>
                ))}
              </Splide>
              </motion.div>
            </CustomGridColumn>
          </CustomGridRow>
        </CustomWrapper>
      </section>
    </div>
      </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Projects.module.scss";
import {
  ButtonLineDrawing,
  ButtonSlideSecond,
  Card,
  CustomGridRow,
  CustomWrapper,
  InteractivePanel,
  Label,
  MediaImage,
} from "@git-ovidiu/nextjs-component-library";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

import cards from "./api/cards-api";
import buttons from "main/components/Projects/api/buttons-api";

export default function Projects() {
  return (
    <motion.div
      className={styles["o-projects"]}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <CustomWrapper
        border-radius="0px"
        custom-background-color="#f0e5c7"
        space-bottom="m"
        space-top="m"
      >
        <CustomGridRow vertical-alignment="center">
          <div className={styles["shape"]}>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Image
                src={
                  "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/homepage-shape.svg"
                }
                alt={"Placeholder"}
                width={850}
                height={850}
                style={{ borderRadius: "500px" }}
              />
            </motion.div>
          </div>
          <InteractivePanel
            button={buttons.map((button, index) => (
              <ButtonSlideSecond
                key={index}
                hover_effect="tertiary"
                icon={button.icon}
                iconPosition="right"
                padding="s"
                text={button.text}
              />
            ))}
            card={cards.map((card, index) => (
              <motion.div
                key={index}
                animate={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
              >
                <Card
                  is-overlapped
                  image={
                    <MediaImage
                      image={
                        <Image alt={card.image.alt} fill src={card.image.src} />
                      }
                      image-border-radius="50px"
                      object-fit="cover"
                      padding-bottom-desktop="50%"
                      padding-bottom-mobile="50%"
                      padding-bottom-tablet="50%"
                    />
                  }
                  labels={
                    <>
                      {card.labels.map((label, labelIndex) => (
                        <motion.div
                          key={labelIndex}
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
                          <Label
                            background-color={label.background}
                            color={label.color}
                            text={label.text}
                          />
                        </motion.div>
                      ))}
                    </>
                  }
                  description={
                    <motion.div
                      animate={{ scale: 1.05 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {card.title}
                      <div className={styles.divider}>{card.divider}</div>
                      <p>{card.description}</p>
                      <br />
                      <h6>{card.subtitle}</h6>
                      <br />
                      <ul className={styles["ul-list"]}>
                        {card.libs?.map((lib, libIndex) => (
                          <li key={libIndex}>{lib.text}</li>
                        ))}
                      </ul>
                    </motion.div>
                  }
                  image-full-width
                  buttons={
                    <>
                      {card.actions?.map((action, actionIndex) => (
                        <div
                          className="card-buttons-container"
                          key={actionIndex}
                        >
                          <ButtonLineDrawing
                            icon={action.icon}
                            icon-position="right"
                            line-effect="line-below"
                            link-url={action.url}
                            open-in-new-tab
                            padding="m"
                            text={action.text}
                          />
                        </div>
                      ))}
                    </>
                  }
                />
              </motion.div>
            ))}
          />
        </CustomGridRow>
      </CustomWrapper>
    </motion.div>
  );
}

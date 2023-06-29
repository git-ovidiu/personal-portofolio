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
    <div className={styles["o-projects"]}>
      <CustomWrapper
        border-radius="0px"
        custom-background-color="white"
        space-bottom="m"
        space-top="m"
      >
        <CustomGridRow vertical-alignment="center">
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
              <Card
                key={index}
                image={
                  <MediaImage
                    image={
                      <Image alt={card.image.alt} fill src={card.image.src} />
                    }
                    image-border-radius="0px"
                    object-fit="cover"
                    padding-bottom-desktop="50%"
                    padding-bottom-mobile="50%"
                    padding-bottom-tablet="50%"
                  />
                }
                labels={
                  <>
                    {card.labels.map((label, labelIndex) => (
                      <Label
                        key={labelIndex}
                        background-color={label.background}
                        color={label.color}
                        text={label.text}
                      />
                    ))}
                  </>
                }
                description={
                  <>
                    <h3>{card.title}</h3>
                    <div className={styles.divider}>{card.divider}</div>
                    <p>{card.description}</p>
                    <br/>
                    <h6>{card.subtitle}</h6>
                    <br />
                    <ul className={styles["ul-list"]}>
                      {card.libs?.map((lib, libIndex) => (
                        <li key={libIndex}>{lib.text}</li>
                      ))}
                    </ul>
                  </>
                }
                image-full-width
                buttons={
                    <>
                        {card.actions?.map((action, actionIndex) => (
                            <div  className="card-buttons-container"
                                  key={actionIndex}>
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
            ))}
          />
        </CustomGridRow>
      </CustomWrapper>
    </div>
  );
}

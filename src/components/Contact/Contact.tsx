import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.scss";
import { useForm, ValidationError } from "@formspree/react";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import {
  AnimatedText,
  ButtonLineDrawing,
  CustomGridColumn,
  CustomGridRow,
  CustomWrapper,
  Description,
  Divider,
  SimpleDivider,
  TitleAndDescription,
} from "@git-ovidiu/nextjs-component-library";

import content from "./api/Content";
import { RiMailSendFill } from "react-icons/ri";
import { Outfit } from "next/font/google";
import {BiArrowBack} from "react-icons/bi"
import {delay, duration_fast, duration_slow, label_color} from "main/components/Settings/FramerMotion"

const outfit = Outfit({ subsets: ["latin"] });

export default function Contact() {
  const [state, handleSubmit] = useForm("xbjvrbyy");
  if (state.succeeded) {
    return (
      <>


        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: duration_slow}}
            className={styles["email-sent-container"]}
        >
          <CustomWrapper
              background-color-theme="primary"
              border-radius="0px"
              space-bottom="0"
              custom-background-color={"black"}
              space-top=" 0"
              full-height
          >
            <CustomGridRow vertical-alignment="center">
              <CustomGridColumn
                  column-background-opacity="1"
                  column-padding-bottom="unset"
                  column-padding-top="unset"
                  columns-equal-paddings
                  lg={4}
                  lg-offset={4}
                  xs={12}
              >
                <TitleAndDescription
                    action={""}
                    label={<Description color={label_color} text="email delivery status:" />}
                    text-align="left"
                    title={
                      <span>
                      <AnimatedText
                          color="white"
                          text="Your email has been sent! Thank you for reaching out to me!"
                          variant="h4"
                      />
                    </span>
                    }
                    description={
                      <>
                        <Divider
                            divider={
                              <>
                                <SimpleDivider
                                    animate
                                    animation-duration="2s"
                                    border-radius="0"
                                    color={label_color}
                                    height="5px"
                                    width="100%"
                                />
                              </>
                            }
                            position="left"
                            width="100%"
                        />
                        <br/>
                        <br/>
                        <div className={styles["button-diapositive"]}>
                          <ButtonLineDrawing
                              icon={<BiArrowBack size={20} color={label_color} />}
                              icon-position="left"
                              line-effect="line-below"
                              link-url="/"
                              padding="xs"
                              text="back Home"
                          />
                        </div>
                      </>
                    }
                />
              </CustomGridColumn>
            </CustomGridRow>
          </CustomWrapper>
        </motion.div>
      </>
    );
  }
  return (
    <div className={`${styles["o-contact"]} ${outfit.className}`}>


      <CustomWrapper
        full-height
        border-radius="0px"
        space-bottom="m"
        space-top="m"
        custom-background-color={"white"}
      >
        <CustomGridRow vertical-alignment="center" reverse-breakpoint={"lg"}>
          <CustomGridColumn
            column-border-radius="20px"
            column-padding-bottom="unset"
            column-padding-top="unset"
            columns-equal-paddings
            lg={7}
            lg-offset={1}
            xs={12}
          >
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: duration_fast, delay: delay}}
            >
            <div className={styles["divider-container"]}>
              <Divider
                divider={
                  <>
                    <SimpleDivider
                      animate
                      animation-duration="1s"
                      border-radius="30px 0 0 0"
                      color="#FA8072"
                      height="5px"
                      width="100%"
                    />
                    <SimpleDivider
                      animate
                      animation-duration="1s"
                      border-radius="0"
                      color="#FFA07A"
                      height="5px"
                      width="100%"
                    />
                    <SimpleDivider
                      animate
                      animation-duration="1s"
                      border-radius="0"
                      color="#FFDAB9"
                      height="5px"
                      width="100%"
                    />
                    <SimpleDivider
                      animate
                      animation-duration="1s"
                      border-radius="0"
                      color="#FFE7D6"
                      height="5px"
                      width="100%"
                    />
                    <SimpleDivider
                      animate
                      animation-duration="1s"
                      border-radius="0 30px 0 0"
                      color="#FFF2E8"
                      height="5px"
                      width="100%"
                    />
                  </>
                }
                position="left"
                width="100%"
              />
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles["name-and-company"]}>
                {/*name*/}
                <div className={styles["name"]}>
                  <label htmlFor="name">Name*</label>
                  <input required id="name" type="text" name="name" />
                </div>
                <div className={styles["company"]}>
                  {/*company*/}
                  <label htmlFor="company">
                    Company <span>(opt)</span>
                  </label>
                  <input id="company" type="text" name="company" />
                </div>
              </div>

              <div className={styles["email"]}>
                {/*email*/}
                <label htmlFor="email">Email*</label>
                <input required id="email" type="email" name="email" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className={styles["message-container"]}>
                <label htmlFor="Message">Message*</label>
                <textarea id="message" name="message" required />
              </div>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                type="submit"
                disabled={state.submitting}
                className={styles["action"]}
              >
                <ButtonLineDrawing
                  icon={<RiMailSendFill size={20} />}
                  icon-position="right"
                  line-effect="line-below"
                  padding="xs"
                  text="Submit"
                />
              </button>
            </form>
            </motion.div>
          </CustomGridColumn>

          <CustomGridColumn
            column-border-radius="20px"
            column-padding-bottom="unset"
            column-padding-top="unset"
            columns-equal-paddings
            lg={4}
            xs={12}
          >
            <motion.div className={styles["content"]}
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  viewport={{once: true}}
                  transition={{duration: duration_fast, delay: delay}}
            >
              <AnimatedText
                text={content.title}
                color={"black"}
                variant={"h2"}
              />
              <Divider
                  divider={
                    <>
                      <SimpleDivider
                          animate
                          animation-duration="1s"
                          border-radius="10px"
                          color="#FA8072"
                          height="5px"
                          width="64px"
                      />
                    </>
                  }
                  position="left"
                  width="100%"
              />
              <div className={styles["description"]}>
                <Description
                  text={<p>{content.description}</p>}
                  color={"black"}
                />
              </div>
              <div className={styles["contact-with-icon"]}>
                {content.iconAndTexts?.map((iconAndText, index) => (
                  <div className={styles["icon-and-text"]} key={index}>
                    <a href={iconAndText.href} target="_blank">
                      {iconAndText.icon}
                      {iconAndText.text}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </CustomGridColumn>
        </CustomGridRow>
      </CustomWrapper>
    </div>
  );
}

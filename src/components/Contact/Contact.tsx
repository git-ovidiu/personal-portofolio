import React, { Component } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
} from "@git-ovidiu/nextjs-component-library";
import { AiFillLinkedin, AiOutlineDownload } from "react-icons/ai";

import content from "./api/Content";
import { SiMinutemailer } from "react-icons/si";
import { RiMailSendFill } from "react-icons/ri";

export default function Contact() {
  const [state, handleSubmit] = useForm("xbjvrbyy");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className={styles["o-contact"]}>
      <CustomWrapper
        full-height
        border-radius="0px"
        space-bottom="m"
        space-top="m"
        custom-background-color={"rgba(200, 62, 87, 0.18)"}
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
            <div className={styles["divider-container"]}>
              <Divider
                divider={
                  <>
                    <SimpleDivider
                      animate
                      animation-duration="1s"
                      border-radius="10px 0px 0px 10px"
                      color="black"
                      height="5px"
                      width="100%"
                    />
                    <SimpleDivider
                      animate
                      animation-duration="1s"
                      border-radius="0px"
                      color="#383737"
                      height="5px"
                      width="100%"
                    />
                    <SimpleDivider
                      animate
                      animation-duration="1s"
                      border-radius="0px 10px 10px 0px"
                      color="#525050"
                      height="5px"
                      width="100%"
                    />
                    <SimpleDivider
                        animate
                        animation-duration="1s"
                        border-radius="0px 10px 10px 0px"
                        color="#757272"
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

              <textarea id="message" name="message" required />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button type="submit" disabled={state.submitting} className={styles["action"]}>
                <ButtonLineDrawing
                  icon={<RiMailSendFill size={20} />}
                  icon-position="right"
                  line-effect="line-below"
                  padding="xs"
                  text="Submit"
                />
              </button>
            </form>
          </CustomGridColumn>

          <CustomGridColumn
            column-border-radius="20px"
            column-padding-bottom="unset"
            column-padding-top="unset"
            columns-equal-paddings
            lg={4}
            xs={12}
          >
            <div className={styles["content"]}>
              <AnimatedText
                text={content.title}
                color={"black"}
                variant={"h2"}
              />
              <div className={styles["description"]}>
                <Description
                  text={<p>{content.description}</p>}
                  color={"black"}
                  italic
                />
              </div>
              <div className={styles["contact-with-icon"]}>
                {content.iconAndTexts?.map((iconAndText, index) => (
                  <div className={styles["icon-and-text"]} key={index}>
                    {/*<AiFillLinkedin size={20}/>*/}
                    {/*<p>linkedin</p>*/}
                    <p>{iconAndText.icon}</p>
                    <p>{iconAndText.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </CustomGridColumn>
        </CustomGridRow>
      </CustomWrapper>
    </div>
  );
}

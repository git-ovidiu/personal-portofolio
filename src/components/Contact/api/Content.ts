import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BsTelephonePlusFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const content = {
  title: "Contact me!",
  description: "Let's collaborate to bring your unique ideas to life with captivating websites. Together, we'll bring your vision to life, crafting online experiences that resonate with your audience. Don't hesitate to contact me now to initiate the journey towards achieving your digital goals.",
  iconAndTexts: [
    {
      href: "https://www.linkedin.com/in/bunghez-ovidiu-eduard/",
      icon: React.createElement(AiFillLinkedin, { size: 20, color: `white` }),
      text: "LinkedIn",
    },
    {
      href: "https://github.com/git-ovidiu",
      icon: React.createElement(FaGithub, { size: 20, color: `white` }),
      text: "Github",
    },
    {
      href: "mailto:ovidiueduard@gmail.com",
      icon: React.createElement(SiGmail, { size: 20, color: `white` }),
      text: "Mail",
    },
    {
      href: "tel:+40733950116",
      icon: React.createElement(BsTelephonePlusFill, {
        size: 20,
        color: `white`,
      }),
      text: "0733950116",
    },
  ],
};

export default content;

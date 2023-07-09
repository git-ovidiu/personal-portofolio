import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BsTelephonePlusFill } from "react-icons/bs";

const content = {
  title: "Contact me!",
  description: "Let's collaborate to bring your unique ideas to life with captivating websites. Together, we'll create an impactful online presence. Contact me today and let's get started on achieving your digital goals!",
  iconAndTexts: [
    {
      href: "https://www.linkedin.com/in/bunghez-ovidiu-eduard/",
      icon: React.createElement(AiFillLinkedin, { size: 20, color: `black` }),
      text: "LinkedIn",
    },
    {
      href: "mailto:ovidiueduard@gmail.com",
      icon: React.createElement(SiGmail, { size: 20, color: `black` }),
      text: "Mail",
    },
    {
      href: "tel:+40733950116",
      icon: React.createElement(BsTelephonePlusFill, {
        size: 20,
        color: `black`,
      }),
      text: "0733950116",
    },
  ],
};

export default content;

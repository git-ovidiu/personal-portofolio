import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BsTelephonePlusFill } from "react-icons/bs";

const content = {
  title: "Contact me!",
  description: "description",
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
  // iconAndTexts: [
  //  {
  // 	 icon: React.createElement(AiFillLinkedin, { size: 20, color: `black` }),
  // 	 text: "LinkedIn"
  //  },
  //  {
  // 	 icon: React.createElement(SiGmail, { size: 20, color: `black` }),
  // 	 text: "Mail"
  //  },
  //  {
  // 	 icon: React.createElement(BsTelephonePlusFill, { size: 20, color: `black` }),
  // 	 text: "+40733950116"
  //  }
  // ]
};

export default content;

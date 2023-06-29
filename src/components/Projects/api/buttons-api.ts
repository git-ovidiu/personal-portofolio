import {MdOutlineArchitecture, MdOutlineCoffeeMaker} from "react-icons/md";
import React from "react";
import {SiAtom} from "react-icons/si"

const buttons = [
  {
    text: "Vibe Interior",
    icon: React.createElement(MdOutlineArchitecture, { size: 20 })
  },
  {
    text: "Component Library",
    icon: React.createElement(SiAtom, { size: 20 })
  },
  {
    text: "Moo-Free Brews",
    icon: React.createElement(MdOutlineCoffeeMaker, { size: 20 })
  }
  // Add more card objects as needed
];

export default buttons;

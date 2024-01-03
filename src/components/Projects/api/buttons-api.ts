import {MdOutlineArchitecture, MdOutlineCoffeeMaker} from "react-icons/md";
import React from "react";
import {SiAtom} from "react-icons/si"
import { FaProjectDiagram } from "react-icons/fa";
import { GiDeadWood } from "react-icons/gi";
import { MdMultilineChart } from "react-icons/md";
import { FaCampground } from "react-icons/fa";

const buttons = [
  {
    text: "Cegeka",
    icon: React.createElement(FaProjectDiagram, { size: 20 })
  },
  {
    text: "Woodwing",
    icon: React.createElement(GiDeadWood, { size: 20 })
  },
  {
    text: "Stratech",
    icon: React.createElement(MdMultilineChart, { size: 20 })
  },
  {
    text: "OGZ",
    icon: React.createElement(FaCampground, { size: 20 })
  },
  {
    text: "Vibe Interior",
    icon: React.createElement(MdOutlineArchitecture, { size: 20 })
  },
  {
    text: "Component Library",
    icon: React.createElement(SiAtom, { size: 20 })
  }
  // {
  //   text: "Moo-Free Brews",
  //   icon: React.createElement(MdOutlineCoffeeMaker, { size: 20 })
  // }
  // Add more card objects as needed
];

export default buttons;

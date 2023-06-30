import {AnimatedText, SimpleDivider} from "@git-ovidiu/nextjs-component-library";
import React from "react";
import {MdOutlineLiveTv} from "react-icons/md"

const cards = [
  {
    image: {
      src: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/Screenshot%202023-06-28%20at%2023.52.07.png",
      alt: "Placeholder",
    },
    labels: [
      {
        text: "nextJs",
        color: "white",
        background: "#000",
      },
      {
        text: "javascript",
        color: "white",
        background: "#E5CE18",
      },
      {
        text: "scss",
        color: "white",
        background: "#B4497F",
      },

      // jsx / nextjs  / framer motion / parallax / lightgallery / react-intersection-observer / react-scroll-parallax / swiper
    ],
    title: React.createElement(AnimatedText, {
      color: "black",
      text: "Vibe Interior",
      variant: "h3"
    }),
    divider: React.createElement(SimpleDivider, {
      animate: true,
      loop: true,
      "animation-delay": "-0.2s",
      "animation-duration": "1s",
      "border-radius":"10px",
      color: "black",
      height: "4px",
      width: "75px"
    }),
    description: "faucibus propriae homero suavitate sadipscing magnis faucibus gubergren propriae homero suavitate  ius sapien",
    subtitle: "Libraries",
    libs: [
      {
        text: "Framer Motion"
      },
      {
        text: "Swiper"
      },
      {
        text: "React Scroll Parallax"
      },
      {
        text: "React Intersection Observer"
      },
      {
        text: "LightGallery"
      },
      {
        text: "Formspree"
      },
    ],

    actions: [
      {
        text: "Live Website",
        icon: React.createElement(MdOutlineLiveTv, { size: 20 }),
        url: "https://www.vibe-interior.ro"
      }
    ]
  },





  {
    image: {
      src: "https://camonysi.sirv.com/NextJS%20Component%20Library/react-component-library-2.jpg",
      alt: "Placeholder",
    },
    labels: [
      {
        text: "javascript",
        color: "white",
        background: "#E5CE18",
      },
      {
        text: "scss",
        color: "white",
        background: "#B4497F",
      },
      {
        text: "nextJs",
        color: "white",
        background: "#000",
      },

      // jsx / nextjs  / framer motion / parallax / lightgallery / react-intersection-observer / react-scroll-parallax / swiper
    ],
    title: React.createElement(AnimatedText, {
      color: "black",
      text: "Nextjs Component Library",
      variant: "h3"
    }),
    divider: React.createElement(SimpleDivider, {
      animate: true,
      loop: true,
      "animation-delay": "-0.05s",
      "animation-duration": "1s",
      "border-radius":"10px",
      color: "black",
      height: "4px",
      width: "75px"
    }),
    subtitle: "Other Libraries",
    libs: [
      {
        text: "Rollup"
      },
      {
        text: "Swiper"
      },
      {
        text: "Framer Motion"
      },
      {
        text: "Splide"
      },
      {
        text: "React Icons"
      },
      {
        text: "Formspree"
      },
    ]
  },
];
export default cards;

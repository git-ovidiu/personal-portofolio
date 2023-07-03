import {AnimatedText, MediaImage, MediaVideo, SimpleDivider} from "@git-ovidiu/nextjs-component-library";
import React from "react";
import {MdOutlineLiveTv} from "react-icons/md"
import Image from "next/image"

const cards = [
    // vibe interior
  {
    media: React.createElement(MediaImage, {
      image: React.createElement(Image, {
        alt: "Placeholder",
        fill: true,
        src: "https://camonysi.sirv.com/portofolio/Screenshot%202023-06-28%20at%2023.52.07.png"
      }),
      "image-border-radius": "20px",
      "object-fit": "cover",
      "padding-bottom-desktop": "50%",
      "padding-bottom-mobile": "50%",
      "padding-bottom-tablet": "50%",
    }),
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
        background: "#B4497E",
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



// nextjs component library

  {
    media: React.createElement(MediaImage, {
      image: React.createElement(Image, {
        alt: "Placeholder",
        fill: true,
        src: "https://camonysi.sirv.com/NextJS%20Component%20Library/react-component-library-2.jpg"
      }),
      "image-border-radius": "20px",
      "object-fit": "cover",
      "padding-bottom-desktop": "50%",
      "padding-bottom-mobile": "50%",
      "padding-bottom-tablet": "50%",
    }),
    labels: [
      {
        text: "nextJs",
        color: "white",
        background: "#000",
      },
      {
        text: "typescript",
        color: "white",
        background: "#0D65C0",
      },
      {
        text: "scss",
        color: "white",
        background: "#B4497E",
      },
      {
        text: "rollup",
        color: "white",
        background: "#F99E2E",
      },
      {
        text: "framer-motion",
        color: "white",
        background: "#433982",
      },
      {
        text: "storybook",
        color: "white",
        background: "#F2276E",
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
    description: "short description of the comp library",
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

  {
     media: React.createElement(MediaVideo,
        {
        "loop": true,
        "muted": true,
        "object-fit": "cover",
        "remove-controls": true,
        "video" : "https://camonysi.sirv.com/portofolio/Screen%20Recording%202023-07-03%20at%2023.02.14.mov",
          "video-fullscreen": true,
          "video-border-radius": "20px"
        }
        ),
    labels: [
      {
        text: "nextJs",
        color: "white",
        background: "#000",
      },
      {
        text: "nx",
        color: "white",
        background: "#012F55",
      },
      {
        text: "typescript",
        color: "white",
        background: "#0D65C0",
      },
      {
        text: "scss",
        color: "white",
        background: "#B4497E",
      },
      {
        text: "nx",
        color: "white",
        background: "#012F55",
      },
      {
        text: "framer-motion",
        color: "white",
        background: "#433982",
      },
      // jsx / nextjs  / framer motion / parallax / lightgallery / react-intersection-observer / react-scroll-parallax / swiper
    ],
    title: React.createElement(AnimatedText, {
      color: "black",
      text: "MooFree Brews",
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
    description: "short description of the comp library",
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

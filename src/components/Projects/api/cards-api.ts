import {
  AnimatedText,
  MediaImage,
  MediaVideo,
  SimpleDivider,
} from "@git-ovidiu/nextjs-component-library";
import React from "react";
import { MdOutlineDesignServices, MdOutlineLiveTv } from "react-icons/md";
import Image from "next/image";
import { BiAtom, BiCoffeeTogo } from "react-icons/bi";

const cards = [

  // vibe interior
  {
    shape: "https://camonysi.sirv.com/portofolio/vibe-interior-card-shape.svg",
    media: React.createElement(MediaVideo, {
      loop: true,
      muted: true,
      "object-fit": "cover",
      "auto-play": true,
      "show-controls": false,
      video:
          "https://camonysi.sirv.com/portofolio/Screen%20Recording%202023-07-09%20at%2018.28.04.mov",
      "video-fullscreen": true,
      "video-border-radius": "30px",
      "remove-controls": true,
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
      {
        text: "framer-motion",
        color: "white",
        background: "#433982",
      },

      // jsx / nextjs  / framer motion / parallax / lightgallery / react-intersection-observer / react-scroll-parallax / swiper
    ],
    title: React.createElement(AnimatedText, {
      color: "black",
      text: "Vibe Interior",
      variant: "h3",
    }),
    divider: React.createElement(SimpleDivider, {
      animate: true,
      loop: true,
      "animation-delay": "-0.2s",
      "animation-duration": "1s",
      "border-radius": "10px",
      color: "black",
      height: "4px",
      width: "75px",
    }),
    description:
        "The Vibe Interior website is a project created for a friend who owns an interior design company. Designed to showcase their portfolio and services, this website embodies the essence of their brand and reflects their expertise in creating captivating interior spaces. While the website is still under development, it promises to deliver a visually stunning and immersive online experience that will captivate visitors and provide them with a glimpse into the world of Vibe Interior's innovative design solutions.",
    subtitle: "Libraries",
    libs: [
      {
        text: "Swiper",
      },
      {
        text: "React Scroll Parallax",
      },
      {
        text: "React Intersection Observer",
      },
      {
        text: "LightGallery",
      },
      {
        text: "Formspree",
      },
    ],

    actions: [
      {
        text: "Live Website (DEMO)",
        icon: React.createElement(MdOutlineDesignServices, { size: 20 }),
        url: "https://after-deco.vercel.app/",
      },
    ],
  },


  // nextjs component library
  {
    shape: "https://camonysi.sirv.com/portofolio/vibe-interior-card-shape.svg",
    media: React.createElement(MediaImage, {
      image: React.createElement(Image, {
        alt: "Placeholder",
        fill: true,
        src: "https://camonysi.sirv.com/NextJS%20Component%20Library/react-component-library-2.jpg"
      }),
      "image-border-radius": "20px",
      "object-fit": "cover",
      "padding-bottom-desktop": "40%",
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
        text: "storybook",
        color: "white",
        background: "#F2276E",
      },
      // jsx / nextjs  / framer motion / parallax / lightgallery / react-intersection-observer / react-scroll-parallax / swiper
    ],
    title: React.createElement(AnimatedText, {
      color: "black",
      text: "Nextjs Component Library",
      variant: "h3",
    }),
    divider: React.createElement(SimpleDivider, {
      animate: true,
      loop: true,
      "animation-delay": "-0.05s",
      "animation-duration": "1s",
      "border-radius": "10px",
      color: "black",
      height: "4px",
      width: "75px",
    }),
    description:
      "This project is a React component library built in Next.js, divided into atoms, molecules, organisms, and a custom style guide. The library provides a collection of reusable components that facilitate rapid and scalable web interface development. With a modular design and integrated custom Bootstrap, this project offers a cohesive and user-friendly styling guide.",
    subtitle: "Other Libraries",
    libs: [
      {
        text: "Splide",
      },
      {
        text: "React Icons",
      },
      {
        text: "Formspree",
      },
    ],
    actions: [
      {
        text: "Hosted Storybook",
        icon: React.createElement(BiAtom, { size: 20 }),
        url: "https://git-ovidiu.github.io/nextjs-component-library/?path=/story/atoms-text-animated-text--animated-text-story",
      },
    ],
  },

  //Moo Free Brews
  {
    shape: "https://camonysi.sirv.com/portofolio/vibe-interior-card-shape.svg",
    media: React.createElement(MediaImage, {
      image: React.createElement(Image, {
        alt: "Placeholder",
        fill: true,
        src: "https://camonysi.sirv.com/portofolio/Screenshot%202023-07-03%20at%2022.41.02.png"
      }),
      "image-border-radius": "20px",
      "object-fit": "cover",
      "padding-bottom-desktop": "40%",
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
        text: "framer-motion",
        color: "white",
        background: "#433982",
      },
      // jsx / nextjs  / framer motion / parallax / lightgallery / react-intersection-observer / react-scroll-parallax / swiper
    ],
    title: React.createElement(AnimatedText, {
      color: "black",
      text: "MooFree Brews",
      variant: "h3",
    }),
    divider: React.createElement(SimpleDivider, {
      animate: true,
      loop: true,
      "animation-delay": "-0.05s",
      "animation-duration": "1s",
      "border-radius": "10px",
      color: "black",
      height: "4px",
      width: "75px",
    }),
    description:
      "MooFree Brews is a website created for a specialty café that exclusively focuses on vegan products and beverages while adopting an environmentally friendly approach to coffee sourcing. The café is committed to providing an authentic experience where the coffee harvesting process adheres to sustainability standards and everyone is treated with respect. ",
    subtitle: "Other Libraries",
    libs: [
      {
        text: "Framer Motion",
      },
      {
        text: "Splide",
      },
      {
        text: "React Icons",
      },
    ],
    actions: [
      {
        text: "Live Website (in progress)",
        icon: React.createElement(BiCoffeeTogo, { size: 20 }),
        url: "https://moo-free-brews.vercel.app/",
      },
    ],
  },
];
export default cards;

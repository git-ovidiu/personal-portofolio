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

  // cegeka
  {
    // shape: "https://camonysi.sirv.com/portofolio/vibe-interior-card-shape.svg",
    media: React.createElement(MediaImage, {
      image: React.createElement(Image, {
        alt: "Placeholder",
        fill: true,
        src: "https://res.cloudinary.com/dfddk8jjr/image/upload/v1704284059/Screenshot_2024-01-03_at_14.13.42_g658zz.png"
      }),
      "image-border-radius": "20px",
      "object-fit": "cover",
      "padding-bottom-desktop": "45%",
      "padding-bottom-mobile": "50%",
      "padding-bottom-tablet": "50%",
    }),
    labels: [
      {
        text: "lit-element",
        color: "white",
        background: "#283198",
      },
      {
        text: "typescript",
        color: "white",
        background: "#0D65C0",
      },
      {
        text: "hubspot",
        color: "white",
        background: "#FF5C36",
      },
      {
        text: "scss",
        color: "white",
        background: "#B4497E",
      },
      {
        text: "html",
        color: "white",
        background: "#E96328",
      },
      {
        text: "bootstrap",
        color: "white",
        background: "#8311F2",
      },
      // jsx / nextjs  / framer motion / parallax / lightgallery / react-intersection-observer / react-scroll-parallax / swiper
    ],
    title: React.createElement(AnimatedText, {
      color: "black",
      text: "Cegeka",
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
    actions: [
      {
        text: "Cegeka Website",
        icon: React.createElement(BiAtom, { size: 20 }),
        url: "https://www.cegeka.com/",
      },
    ],
  },

  // woodwing
  {
    // shape: "https://camonysi.sirv.com/portofolio/vibe-interior-card-shape.svg",
    media: React.createElement(MediaImage, {
      image: React.createElement(Image, {
        alt: "Placeholder",
        fill: true,
        src: "https://res.cloudinary.com/dfddk8jjr/image/upload/v1704284886/Screenshot_2024-01-03_at_14.27.34_umuka3.png"
      }),
      "image-border-radius": "20px",
      "object-fit": "cover",
      "padding-bottom-desktop": "55%",
      "padding-bottom-mobile": "50%",
      "padding-bottom-tablet": "50%",
    }),
    labels: [
      {
        text: "lit-element",
        color: "white",
        background: "#283198",
      },
      {
        text: "typescript",
        color: "white",
        background: "#0D65C0",
      },
      {
        text: "hubspot",
        color: "white",
        background: "#FF5C36",
      },
      {
        text: "scss",
        color: "white",
        background: "#B4497E",
      },
      {
        text: "html",
        color: "white",
        background: "#E96328",
      },
      {
        text: "bootstrap",
        color: "white",
        background: "#8311F2",
      },
      // jsx / nextjs  / framer motion / parallax / lightgallery / react-intersection-observer / react-scroll-parallax / swiper
    ],
    title: React.createElement(AnimatedText, {
      color: "black",
      text: "Woodwing",
      variant: "h3",
    }),
    actions: [
      {
        text: "Woodwing Website",
        icon: React.createElement(BiAtom, { size: 20 }),
        url: "https://www.woodwing.com",
      },
    ],
  },

  // stratech
  {
    // shape: "https://camonysi.sirv.com/portofolio/vibe-interior-card-shape.svg",
    media: React.createElement(MediaImage, {
      image: React.createElement(Image, {
        alt: "Placeholder",
        fill: true,
        src: "https://res.cloudinary.com/dfddk8jjr/image/upload/v1704285366/Screenshot_2024-01-03_at_14.35.43_kzwurl.png"
      }),
      "image-border-radius": "20px",
      "object-fit": "cover",
      "padding-bottom-desktop": "50%",
      "padding-bottom-mobile": "50%",
      "padding-bottom-tablet": "50%",
    }),
    labels: [
      {
        text: "lit-element",
        color: "white",
        background: "#283198",
      },
      {
        text: "typescript",
        color: "white",
        background: "#0D65C0",
      },
      {
        text: "hubspot",
        color: "white",
        background: "#FF5C36",
      },
      {
        text: "scss",
        color: "white",
        background: "#B4497E",
      },
      {
        text: "html",
        color: "white",
        background: "#E96328",
      },
      {
        text: "bootstrap",
        color: "white",
        background: "#8311F2",
      },
      // jsx / nextjs  / framer motion / parallax / lightgallery / react-intersection-observer / react-scroll-parallax / swiper
    ],
    title: React.createElement(AnimatedText, {
      color: "black",
      text: "Stratech",
      variant: "h3",
    }),
    actions: [
      {
        text: "Stratech Website",
        icon: React.createElement(BiAtom, { size: 20 }),
        url: "https://www.stratech.nl",
      },
    ],
  },

  // OGZ
  {
    // shape: "https://camonysi.sirv.com/portofolio/vibe-interior-card-shape.svg",
    media: React.createElement(MediaImage, {
      image: React.createElement(Image, {
        alt: "Placeholder",
        fill: true,
        src: "https://res.cloudinary.com/dfddk8jjr/image/upload/v1704288034/Screenshot_2024-01-03_at_15.19.34_exmknk.png"
      }),
      "image-border-radius": "20px",
      "object-fit": "cover",
      "padding-bottom-desktop": "50%",
      "padding-bottom-mobile": "50%",
      "padding-bottom-tablet": "50%",
    }),
    labels: [
      {
        text: "lit-element",
        color: "white",
        background: "#283198",
      },
      {
        text: "typescript",
        color: "white",
        background: "#0D65C0",
      },
      {
        text: "hubspot",
        color: "white",
        background: "#FF5C36",
      },
      {
        text: "scss",
        color: "white",
        background: "#B4497E",
      },
      {
        text: "html",
        color: "white",
        background: "#E96328",
      },
      {
        text: "bootstrap",
        color: "white",
        background: "#8311F2",
      },
      // jsx / nextjs  / framer motion / parallax / lightgallery / react-intersection-observer / react-scroll-parallax / swiper
    ],
    title: React.createElement(AnimatedText, {
      color: "black",
      text: "OGZ",
      variant: "h3",
    }),
    actions: [
      {
        text: "OGZ Website",
        icon: React.createElement(BiAtom, { size: 20 }),
        url: "https://www.onderwijsbeurs.nl",
      },
    ],
  },

  // vibe interior
  {
    // shape: "https://camonysi.sirv.com/portofolio/vibe-interior-card-shape.svg",
    media: React.createElement(MediaImage, {
      image: React.createElement(Image, {
        alt: "Placeholder",
        fill: true,
        src: "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128707/CV%20PICS/projects/Screenshot_2023-06-28_at_23.52.07_li8wz0.png"
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
    // shape: "https://camonysi.sirv.com/portofolio/vibe-interior-card-shape.svg",
    media: React.createElement(MediaImage, {
      image: React.createElement(Image, {
        alt: "Placeholder",
        fill: true,
        src: "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128134/CV%20PICS/projects/react-component-library-2_incdna.jpg"
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
    // description:
    //     "This project represents a React component library developed using Next.js, which is organized into distinct sections such as atoms, molecules, organisms, and a custom style guide. The purpose of this library is to offer a comprehensive set of reusable components that streamline the process of creating web interfaces quickly and efficiently. With a modular architecture and the integration of a customized Bootstrap framework, this project presents a unified and intuitive styling guide that enhances the user experience.",
    description: "This is where all the atoms/molecules/organism of this portfolio was created. I use these custom components throughout my entire website.",
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


];
export default cards;

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
        "The Vibe Interior website is an ongoing project dedicated to promoting a friend's interior design company. Its purpose is to display their impressive portfolio and range of services, encapsulating the very essence of their brand and showcasing their expertise in crafting captivating interior spaces. Currently in the development stage, the website aims to offer a visually captivating online experience, enticing visitors to explore and providing them with a sneak peek into the realm of Vibe Interior's imaginative design solutions.",
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
    description:
      "This project represents a React component library developed using Next.js, which is organized into distinct sections such as atoms, molecules, organisms, and a custom style guide. The purpose of this library is to offer a comprehensive set of reusable components that streamline the process of creating web interfaces quickly and efficiently. With a modular architecture and the integration of a customized Bootstrap framework, this project presents a unified and intuitive styling guide that enhances the user experience.",
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
        src: "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128707/CV%20PICS/projects/Screenshot_2023-07-03_at_22.41.02_nase43.png"
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
      "MooFree Brews is a website created for a specialty coffee shop that exclusively focuses on vegan products and beverages while embracing an environmentally conscious approach to sourcing. This coffee shop is devoted to delivering an authentic experience, ensuring that the coffee harvesting process aligns with sustainability standards, guaranteeing each cup is crafted with ethical practices. Additionally, MooFree Brews is committed to building an inclusive environment where everyone is treated with respect and care.",
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

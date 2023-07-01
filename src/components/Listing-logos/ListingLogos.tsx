"use client"

import React, {Component} from "react";
import {motion} from "framer-motion";
import Image from "next/image"
import styles from "./ListingLogos.module.scss";
import {Logo} from "@git-ovidiu/nextjs-component-library"

export default function ListingLogos() {


	const logos = [
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/lit.png",
		},
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/hubspot.png",
		},
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/js.png",
		},
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/git.png",
		},
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/React.png",
		},
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/sass.png",
		},

		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/storybook.png",
		},
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/Nextjs-logo.png",
		},
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/ts.png",
		},
	];


	return (
		<div className={styles["m-listing-logos"]}>
			<picture>
				{logos.map((logo, index) => (
					// <Logo
					// 	key={index}
					// 	background="transparent"
					// 	border-radius-desktop={"0px"}
					// 	border-radius-mobile={"0px"}
					// 	link-url="none"
					// 	logo-alt="Logo Placeholder"
					// 	logo-image-url={logo.imageUrl}
					// 	open-in-new-tab={"false"}
					// />
					<picture key={index}>
						<Image src={logo.imageUrl} alt="Logo Placeholder" width={700} height={50} />
					</picture>
				))}
			</picture>
		</div>
	)
}


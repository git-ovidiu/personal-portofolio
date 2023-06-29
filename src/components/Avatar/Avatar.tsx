"use client"

import React, {Component} from "react";
import {
	MediaImage,
	SimpleDivider,
	Divider,
} from "@git-ovidiu/nextjs-component-library"
import {motion} from "framer-motion";
import Image from "next/image"
import styles from "./Avatar.module.scss";



const shapeVariantCustom = {
	initial: { opacity: 0, height: 0 },
	animate: { opacity: 1, height: "80%" }
};

export default function Avatar() {
	return (
		<div className={styles["m-avatar"]}>

					<div className={styles["top-shapes"]}>
						<div className={styles["shape"]}></div>
						<motion.div
							className={`${styles["shape"]} ${styles["second-shape"]}`}
							variants={shapeVariantCustom}
							initial="initial"
							animate="animate"
						></motion.div>
						<div className={styles["shape"]}></div>
					</div>

			<motion.div className={styles["avatar-image"]}
				initial={{opacity: 0, y: 50}}
				animate={{opacity: 1, y: 0}}
			>
				<MediaImage image-border-radius={"50%"}
					image={<Image alt="Placeholder" width={150} height={150}
								  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								  src="https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/profile-pic.jpeg"/>}
					object-fit="cover"
				/>
			</motion.div>
			<div className={styles["horizontal-divider"]}>
				<SimpleDivider
					animate
					animation-delay="0s"
					animation-duration="1s"
					border-radius="0px"
					color="#000"
					height="2px"
					loop
					width="100px"
				/>
			</div>
			<div className={styles["vertical-divider"]}>
				<Divider
					divider={<><SimpleDivider animate-vertical animation-duration="1s" animation-delay={"0.5s"} color="#000" height="100%" loop width="2px"/></>}
					position="bottom"
					vertical
				/>
			</div>
		</div>
	)
}


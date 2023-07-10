
import React, {ReactElement} from "react";
import {motion} from "framer-motion";
import styles from "./Navbar.module.scss";
import {duration_fast} from "main/components/Settings/FramerMotion"

export interface NavbarProps {
	link?: ReactElement;
}

export default function Navbar(props: NavbarProps) {

	return (
		<motion.section className={styles["m-navbar"]}
			initial={{opacity: 0, y: "100%"}}
			animate={{opacity: 1, y: 0}}
			transition={{delay: 0.2, duration: duration_fast}}
		>
			{props.link}
		</motion.section>
	)
}


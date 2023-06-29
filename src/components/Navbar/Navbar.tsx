"use client"

import React, {Component, ReactElement} from "react";
import {
	MediaImage,
	SimpleDivider,
	Divider,
} from "@git-ovidiu/nextjs-component-library"
import {motion} from "framer-motion";
import Image from "next/image"
import styles from "./Navbar.module.scss";
import Link from "next/link"

export interface NavbarProps {
	link?: ReactElement;
}

export default function Navbar(props: NavbarProps) {

	return (
		<motion.section className={styles["m-navbar"]}
			initial={{opacity: 0, y: "100%"}}
			animate={{opacity: 1, y: 0}}
		>
			{props.link}
		</motion.section>
	)
}


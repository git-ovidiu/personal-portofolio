import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Work.module.scss";
import {
	AnimatedText,
	Card,
	CustomGridColumn,
	CustomGridRow,
	CustomWrapper, Description,
	Divider,
	SimpleDivider, TitleAndDescription,
} from "@git-ovidiu/nextjs-component-library";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

import articles_update from "main/components/Work/api/article_update"
import {delay, duration_fast, accent_color} from "main/components/Settings/FramerMotion"
import workCardUpdate from "main/components/Work/api/work-card-update"

export default function Work_Update() {
	return (
		<div className={styles["o-work"]}>
			<CustomWrapper
				border-radius="0px"
				space-bottom="m"
				space-top="m"
				custom-background-color={"white"}
			>
				<CustomGridRow vertical-alignment="">
					<CustomGridColumn
						column-background="black"
						column-background-opacity="0.37"
						column-border-radius="500px"
						column-padding-bottom="unset"
						column-padding-top="unset"
						columns-equal-paddings
						lg={5}
						xs={12}
					>
						<div className={styles["card-column"]}>
							<TitleAndDescription
								text-align="center"
								// label={<Description color={label_color} text="Work"/>}
								title={
									<>
										<AnimatedText text="Work" variant="h2" />
										<div className={styles["simple-divider"]}>
											<SimpleDivider
												animate
												animation-duration="1s"
												border-radius="10px"
												color={accent_color}
												height="5px"
												width="64px"
											/>
										</div>
									</>
								}
								description={""}
								action={""}
							/>
							<motion.div
								className={styles["card-container"]}
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: duration_fast, delay: delay }}
							>
								<Card
									image={
										<div className={styles["card-image-container"]}>
											<Image
												alt="Placeholder"
												fill
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
												src={
													"https://res.cloudinary.com/dfddk8jjr/image/upload/v1727774472/contentrix-logo_h1hu0x.png"
												}
												style={{ objectFit: "contain" }}
											/>
										</div>
									}
									labels={
										<>
											{/*<h4>Currently working at FrozenLogic</h4>*/}
											<p>acquired skills: </p>
											{workCardUpdate.labels?.map((label, labelIndex) => (
												<motion.div key={labelIndex}>{label}</motion.div>
											))}
										</>
									}
									title={""}
									description={""}
								/>
							</motion.div>
						</div>
					</CustomGridColumn>
					<CustomGridColumn
						column-background="black"
						column-background-opacity="0.37"
						column-border-radius="0px"
						column-padding-bottom="unset"
						column-padding-top="unset"
						columns-equal-paddings
						lg={6}
						lg-offset={1}
						xs={12}
					>
						<div className={styles["article-container"]}>
							{articles_update.map((article, index) => (
								<motion.div
									className={styles["small-article"]}
									key={index}
									initial={{ opacity: 0, y: 100 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: duration_fast }}
								>
									<div className={styles.title}>{article.title}</div>
									<div className={styles["divider"]}>{article.divider}</div>
									{article.description}
								</motion.div>
							))}
						</div>
					</CustomGridColumn>
				</CustomGridRow>
			</CustomWrapper>
		</div>
	);
}



// 1.	SMTP (Simple Mail Transfer Protocol)
// 2.	IMAP (Internet Message Access Protocol)
// 3.	POP3 (Post Office Protocol 3)
// 4.	SMTP Relay
// 5.	Email Routing
// 6.	MX Records
// 7.	DKIM (DomainKeys Identified Mail)
// 8.	SPF (Sender Policy Framework)
// 9.	DMARC (Domain-based Message Authentication)
// 10.	TLS (Transport Layer Security)
// 11.	Email Encryption
// 12.	Authentication Protocols
// 13.	Troubleshooting Email Delivery
// 14.	DNS Configuration
// 15.	Web Protocols
// 16.	Email Filtering
// 17.	Bounce Handling
// 18.	Email Security
// 19.	Server Logs Analysis
// 20.	Gmail API

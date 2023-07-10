import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import styles from "./Projects.module.scss";
import {
	ButtonLineDrawing,
	ButtonSlideSecond,
	Card,
	CustomGridRow,
	CustomWrapper,
	InteractivePanel,
	Label,
} from "@git-ovidiu/nextjs-component-library";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

import cards from "./api/cards-api";
import buttons from "main/components/Projects/api/buttons-api";
import {delay, delay_mid, duration_fast, duration_slow} from "main/components/Settings/FramerMotion"

export default function Projects() {
	return (
		<div className="o-projects-global">
			<div className={styles["o-projects"]}>
				<CustomWrapper
					border-radius="0px"
					custom-background-color="#29648a"
					space-bottom="m"
					space-top="m"
					full-height
				>
					<CustomGridRow vertical-alignment="center">
						<InteractivePanel
							button={buttons.map((button, index) => (
								<motion.div key={index}
								initial={{
									opacity: 0,
									x: 100,
								}}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: false }}
								transition={{
									duration: 0.3,
									delay: index * 0.2,
								}}
								>
								<ButtonSlideSecond
									hover_effect="tertiary"
									icon={button.icon}
									iconPosition="right"
									padding="s"
									text={button.text}
								/>
								</motion.div>
							))}
							card={cards.map((card, index) => (
								<motion.div
									key={index}
									initial={{opacity: 0, y: 100}}
									whileInView={{opacity: 1, y: 0}}
									transition={{duration: duration_fast, delay: delay_mid}}
									viewport={{once: false}}
									className={styles["card-container"]}
								>
									<Card

										shape={
											<motion.div className={styles["card-shape"]}
														initial={{opacity: 0, y: "100%", x: "100%"}}
														whileInView={{opacity: 1, y: "5%", x: "5%"}}
														transition={{duration: 0.5}}
											>
												{card.shape && <Image fill src={card.shape} alt={"Placeholder"}/>}
											</motion.div>
										}

										is-overlapped
										image={
										<motion.div
											initial={{opacity: 0, y: -200}}
											whileInView={{opacity: 1, y: 0}}
											transition={{duration: duration_slow, delay: delay_mid}}
										>
											{card.media}
										</motion.div>
										}
										labels={
											<>
												{card.labels.map((label, labelIndex) => (
													<motion.div
														key={labelIndex}
														initial={{
															opacity: 0,
															x: 100,
														}}
														whileInView={{opacity: 1, x: 0}}
														transition={{
															duration: 0.3,
															delay: labelIndex * 0.2,
														}}
													>
														<Label
															background-color={label.background}
															color={label.color}
															text={label.text}
														/>
													</motion.div>
												))}
											</>
										}
										description={
											<motion.div
												animate={{scale: 1.05}}
												whileInView={{scale: 1}}
												transition={{duration: 0.5}}
											>
												{card.title}
												<div className={styles.divider}>{card.divider}</div>
												<p>{card.description}</p>
												<br/>
												<h6>{card.subtitle}</h6>
												<br/>
												<ul className={styles["ul-list"]}>
													{card.libs?.map((lib, libIndex) => (
														<li key={libIndex}>{lib.text}</li>
													))}
												</ul>
											</motion.div>
										}
										image-full-width
										buttons={
											<>
												{card.actions?.map((action, actionIndex) => (
													<div
														className="card-buttons-container"
														key={actionIndex}
													>
														<ButtonLineDrawing
															icon={action.icon}
															icon-position="right"
															line-effect="line-below"
															link-url={action.url}
															open-in-new-tab
															padding="m"
															text={action.text}
														/>
													</div>
												))}
											</>
										}
									/>
								</motion.div>
							))}
						/>
					</CustomGridRow>
				</CustomWrapper>
			</div>
		</div>
	);
}

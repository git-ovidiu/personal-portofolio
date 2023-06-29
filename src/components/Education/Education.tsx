
import React, {Component} from "react";
import {motion} from "framer-motion";
import Image from "next/image"
import styles from "./Education.module.scss";
import {
	AnimatedText, ButtonLineDrawing,
	ButtonSlide, Card,
	CustomGridColumn, CustomGridRow, CustomWrapper, Description, Label,
	Logo,
	TitleAndDescription
} from "@git-ovidiu/nextjs-component-library"
import {Splide, SplideSlide} from "@splidejs/react-splide"
import {AiOutlineDownload} from "react-icons/ai"
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

export default function Education() {


	const logos = [
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/git.png",
		},
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/hubspot.png",
		},
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/lit.png",
		},
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/js.png",
		},
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/Nextjs-logo.png",
		},
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/sass.png",
		},
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/ts.png",
		},
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/storybook.png",
		},
		{
			imageUrl: "https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/React.png",
		}
	];


	return (
		<div className={styles["o-education"]}>

			<section className={styles["o-listing-highlights"]}>
				<CustomWrapper
					border-radius="0px"
					space-top="m"
					space-bottom="m"
					custom-background-color={"#f0e5c7"}
				>
					<CustomGridRow vertical-alignment="center">
						<CustomGridColumn lg={6} xs={12}>
							<TitleAndDescription
								action={
									<ButtonSlide
										hover-effect="slide-right"
										padding="xs"
										text="button text"
									/>
								}
								description="Tation pertinacia pretium feugiat diam torquent qui oratio scripta offendit dicat unum montes brute referrentur"
								label={<Description
									color="red" text="Education" />}
								text-align="left"
								title={
									<AnimatedText
										text="Epicuri posidonium non natoque aenean repudiare principes verterem eius potenti"
										variant="h4"
									/>
								}
							/>
						</CustomGridColumn>

						<CustomGridColumn lg={6} xs={12}>
							<Splide
								aria-label="My Favorite Images"
								options={{
									gap: "2%",
									perPage: 1,
									breakpoints: {
										576: {
											perPage: 1,
										},
										992: {
											perPage: 2,
										},
									},
								}}
							>
								<SplideSlide>
									<Card
										is-overlapped
										image={
										<div className={styles["card-image"]}>
											<Image alt={"Placeholder"} src={"https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/New%20Project.jpg"} fill/>
										</div>
										}
										labels={
											<>
												<Label
													background-color="black"
													color="white"
													text="Placeholder text"
												/>
												<Label
													background-color="black"
													color="white"
													text="Placeholder text"
												/>
											</>
										}
										title={
											<AnimatedText
												text="Codecool etc"
												variant="h6"
											/>
										}
										description={
											<Description text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis!" />
										}
										buttons={
											<>
												<ButtonSlide
													hover-effect="slide-right"
													icon={<AiOutlineDownload size={20} />}
													icon-position="right"
													padding="xxs"
													text="Placeholder text"
												/>
												<>
													<ButtonLineDrawing
														icon={<AiOutlineDownload size={20} />}
														icon-position="right"
														line-effect="line-below"
														link-url="https://www.google.com"
														open-in-new-tab
														padding="xs"
														text="Placeholder text"
													/>
												</>
											</>
										}
									/>
								</SplideSlide>
								<SplideSlide>
									<Card
										is-overlapped
										image={
											<div className={styles["card-image"]}>
												<Image alt={"Placeholder"} src={"https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/univ-bv.jpg"} fill/>
											</div>
										}
										labels={
											<>
												<Label
													background-color="black"
													color="white"
													text="Placeholder text"
												/>
												<Label
													background-color="black"
													color="white"
													text="Placeholder text"
												/>
											</>
										}
										title={
											<AnimatedText
												text="Universitatea Transilvania din Brasov"
												variant="h6"
											/>
										}
										description={
											<Description text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis!" />
										}
										buttons={
											<>
												<ButtonSlide
													hover-effect="slide-right"
													icon={<AiOutlineDownload size={20} />}
													icon-position="right"
													padding="xxs"
													text="Placeholder text"
												/>
												<>
													<ButtonLineDrawing
														icon={<AiOutlineDownload size={20} />}
														icon-position="right"
														line-effect="line-below"
														link-url="https://www.google.com"
														open-in-new-tab
														padding="xs"
														text="Placeholder text"
													/>
												</>
											</>
										}
									/>
								</SplideSlide>
							</Splide>
						</CustomGridColumn>
					</CustomGridRow>
				</CustomWrapper>
			</section>

		</div>
	)
}


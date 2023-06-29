import React, {Component} from "react";
import {motion} from "framer-motion";
import Image from "next/image"
import styles from "./Work.module.scss";
import {
	AnimatedText, ButtonLineDrawing,
	ButtonSlide, Card,
	CustomGridColumn, CustomGridRow, CustomWrapper, Description, Label,
	Logo, MediaImage,
	TitleAndDescription
} from "@git-ovidiu/nextjs-component-library"
import {Splide, SplideSlide} from "@splidejs/react-splide"
import {AiOutlineDownload} from "react-icons/ai"
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

export default function Work() {

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
						lg={4}
						xs={12}
					>
						<>
							<div className={styles["card-container"]}>
							<Card
								buttons={""}
								title={<AnimatedText
									text="ceva cct de titlu"
									variant="h5"/>}
								labels={<>
									<Label background-color="#9F004D" color="white" text="lit-elements"/>
									<Label background-color="#9F004D" color="white" text="typescript"/>
									<Label background-color="black" color="white" text="Placeholder text"/>
								</>}
								image={
									<div className={styles["card-image-container"]}>
										<Image alt="Placeholder" fill
											   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											   src="https://camonysi.sirv.com/NextJS%20Component%20Library/portofolio/2a64f27f7f9ae4ed5f3981f66f278739%20(1)%20(1).png"
											   style={{objectFit: "contain"}}/>
									</div>
								}
								description={<Description
									text={
										<>
											<p>ceva descriere sau nuj</p>
										</>
									}/>}

							/>
							</div>
						</>
					</CustomGridColumn>
					<CustomGridColumn
						column-background="black"
						column-background-opacity="0.37"
						column-border-radius="0px"
						column-padding-bottom="unset"
						column-padding-top="unset"
						columns-equal-paddings
						lg={7}
						lg-offset={1}
						xs={12}
					>
						<TitleAndDescription
							action={<ButtonSlide hover-effect="slide-right" icon={<AiOutlineDownload size={20}/>}
												 icon-position="right" link-url="https://www.google.com" open-in-new-tab
												 padding="xs" text="Placeholder text"/>}
							description={<Description color="black"
													  text={
														  <>
															  <p>porro tellus porro tation elit tritani convenire non
																  repudiandae nascetur autem mollis graeci tacimates
																  auctor fringilla melius mel aeque expetenda tortor
																  harum moderatius nullam mi quo dictum brute fugit
																  brute <br/> <br/> <br/> platea cetero dignissim
																  maiorum error accusata potenti duis natoque
																  referrentur ligula delicata vidisse possit cetero
																  natum etiam mucius mandamus sea iaculis vehicula
																  volutpat laoreet mentitum lectus mel veri veniam
																  referrentur mel noluisse dicit option adversarium
																  rhoncus neque gubergren quod iuvaret</p>

															  <br/>
															  <br/>
															  <br/>
															  <AnimatedText color="black"
																			text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident!"
																			variant="h4"/>

															  <p>porro tellus porro tation elit tritani convenire non
																  repudiandae nascetur autem mollis graeci tacimates
																  auctor fringilla melius mel aeque expetenda tortor
																  harum moderatius nullam mi quo dictum brute fugit
																  brute <br/> <br/> <br/> platea cetero dignissim
																  maiorum error accusata potenti duis natoque
																  referrentur ligula delicata vidisse possit cetero
																  natum etiam mucius mandamus sea iaculis vehicula
																  volutpat laoreet mentitum lectus mel veri veniam
																  referrentur mel noluisse dicit option adversarium
																  rhoncus neque gubergren quod iuvaret</p>


															  <p>porro tellus porro tation elit tritani convenire non
																  repudiandae nascetur autem mollis graeci tacimates
																  auctor fringilla melius mel aeque expetenda tortor
																  harum moderatius nullam mi quo dictum brute fugit
																  brute <br/> <br/> <br/> platea cetero dignissim
																  maiorum error accusata potenti duis natoque
																  referrentur ligula delicata vidisse possit cetero
																  natum etiam mucius mandamus sea iaculis vehicula
																  volutpat laoreet mentitum lectus mel veri veniam
																  referrentur mel noluisse dicit option adversarium
																  rhoncus neque gubergren quod iuvaret</p>

														  </>
													  }/>}
							label={<Description color="black" text="Label"/>}
							text-align="left"
							title={<span><AnimatedText color="black"
													   text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident!"
													   variant="h4"/></span>}
						/>
					</CustomGridColumn>
				</CustomGridRow>
			</CustomWrapper>

		</div>
	)
}


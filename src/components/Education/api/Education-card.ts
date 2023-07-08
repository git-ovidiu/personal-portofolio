import {MdOutlineArchitecture, MdOutlineCoffeeMaker} from "react-icons/md";
import React from "react";
import {SiAtom} from "react-icons/si"
import {ButtonLineDrawing, Description, Label} from "@git-ovidiu/nextjs-component-library"
import {CgLaptop} from "react-icons/cg"
import {FaUniversity} from "react-icons/fa"

const EducationCards = [
	// {
	// 	text: "Vibe Interior",
	// 	icon: React.createElement(MdOutlineArchitecture, { size: 20 })
	// },


	// CodeCool
	{
		image: "https://camonysi.sirv.com/portofolio/codecool.jpg",

		labels: [
			React.createElement(Label, {
				"background-color": "#E56028",
				color: "white",
				text: "html"
			}),
			React.createElement(Label, {
				"background-color": "#2660E4",
				color: "white",
				text: "css"
			}),
			React.createElement(Label, {
				"background-color": "#DCBF2F",
				color: "white",
				text: "javascript"
			}),
			React.createElement(Label, {
				"background-color": "#5CCFEE",
				color: "white",
				text: "react"
			}),
			React.createElement(Label, {
				"background-color": "#E44D31",
				color: "white",
				text: "git"
			}),
			React.createElement(Label, {
				"background-color": "#8311F2",
				color: "white",
				text: "bootstrap"
			}),
			React.createElement(Label, {
				"background-color": "#27B4B5",
				color: "white",
				text: "responsive design"
			}),
			React.createElement(Label, {
				"background-color": "#DD7A94",
				color: "white",
				text: "teamwork"
			})
		],

		title: "Codecool",
		description: "At Codecool, I successfully completed a comprehensive frontend development course, acquiring expertise in HTML, CSS, JavaScript, Bootstrap, responsive design, and effective teamwork",

		button: [
			React.createElement(ButtonLineDrawing, {
			"icon": React.createElement(CgLaptop, {
			size: 20}),
			"icon-position": "right",
			"line-effect": "line-below",
			"link-url": "https://codecool.com/en/",
			"open-in-new-tab": true,
			"padding": "xs",
			"text": "Codecool Website",
			})
		]
	},

	// Brasov
	{
		image: "https://camonysi.sirv.com/portofolio/univ-bv.jpg",

		labels: [
			React.createElement(Label, {
				"background-color": "#F19117",
				color: "white",
				text: "java"
			}),
			React.createElement(Label, {
				"background-color": "#598396",
				color: "white",
				text: "tableau public"
			}),
			React.createElement(Label, {
				"background-color": "#019C96",
				color: "white",
				text: "marketing"
			}),
			React.createElement(Label, {
				"background-color": "#0A45A4",
				color: "white",
				text: "e-commerce"
			}),
		],

		title: "Transilvania University of Brașov",

		description: React.createElement(Description, {
			color: "black",
			text: "At the University Transylvania of Brasov, I successfully completed my Master's degree in Integrated Information Systems for Business. This program equipped me with a comprehensive understanding of e-commerce, marketing strategies, Java programming, and the utilization of Tableau Public for data visualization"
		}),

		button: [
			React.createElement(ButtonLineDrawing, {
				"icon": React.createElement(FaUniversity, {
					size: 20}),
				"icon-position": "right",
				"line-effect": "line-below",
				"link-url": "https://econ.unitbv.ro/ro/",
				"open-in-new-tab": true,
				"padding": "xs",
				"text": "University Website",
			})
		]
	},

	// Bucuresti
	{
		image: "https://camonysi.sirv.com/portofolio/Logo-UB.webp",

		labels: [
			React.createElement(Label, {
				"background-color": "#040162",
				color: "white",
				text: "english"
			}),
			React.createElement(Label, {
				"background-color": "#D30202",
				color: "white",
				text: "german"
			}),
			React.createElement(Label, {
				"background-color": "#0F5C3F",
				color: "white",
				text: "economics"
			})
		],

		title: "University of Bucharest",
		description: "At the University of Bucharest, I earned my Bachelor's degree in Applied Modern Languages. This program emphasized English and German language studies, along with coursework in economics. It provided me with a solid grasp of both languages and a practical understanding of economic principles",

		button: [
			React.createElement(ButtonLineDrawing, {
				"icon": React.createElement(FaUniversity, {
					size: 20}),
				"icon-position": "right",
				"line-effect": "line-below",
				"link-url": "https://unibuc.ro/studii/facultati/facultatea-de-limbi-si-literaturi-straine/",
				"open-in-new-tab": true,
				"padding": "xs",
				"text": "University Website",
			})
		]
	}
];

export default EducationCards;

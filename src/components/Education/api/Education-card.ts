import React from "react";
import {ButtonLineDrawing, Description, Label} from "@git-ovidiu/nextjs-component-library"
import {CgLaptop} from "react-icons/cg"
import {FaUniversity} from "react-icons/fa"
import { FaFreeCodeCamp } from "react-icons/fa";


const EducationCards = [
	//junior network
	{
		image: "https://res.cloudinary.com/dfddk8jjr/image/upload/v1727800827/New_Project_1.png",

		labels: [
			React.createElement(Label, {
				"background-color": "#E56028",
				color: "white",
				text: "aici sa pun"
			}),
			React.createElement(Label, {
				"background-color": "#E56028",
				color: "white",
				text: "label-uri"
			}),
		],

		title: "currently learning for ccna",
		description: "sa pun informatii de umplturura aici, dar nu prea multe",

		button: [
			React.createElement(ButtonLineDrawing, {
				"icon": React.createElement(CgLaptop, {
					size: 20}),
				"icon-position": "right",
				"line-effect": "line-below",
				"link-url": "https://codecool.com/en/",
				"open-in-new-tab": true,
				"padding": "xs",
				"text": "aici pot sa pun ceva poiect de packet tracer",
			})
		]
	},

	// CodeCool
	{
		image: "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128134/CV%20PICS/education/22045681851_pwxxzd.png",

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
		description: "By successfully concluding a comprehensive frontend development course at Codecool, I acquired expertise in HTML, CSS, JavaScript, Bootstrap, responsive design and the ability to collaborate seamlessly within a team dynamic.",

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

	// Responsive Design
	{
		image: "https://res.cloudinary.com/dfddk8jjr/image/upload/v1704381293/Screenshot_2024-01-04_at_17.14.22_umckdi.png",

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
				"background-color": "#27B4B5",
				color: "white",
				text: "responsive design"
			}),
		],

		title: "Responsive Design - freeCodeCamp",
		description: "Certified in Responsive Web Design through FreeCodeCamp, equipped with the skills to create dynamic and user-friendly websites.",

		button: [
			React.createElement(ButtonLineDrawing, {
				"icon": React.createElement(FaFreeCodeCamp, {
					size: 20}),
				"icon-position": "right",
				"line-effect": "line-below",
				"link-url": "https://www.freecodecamp.org/certification/ovidiu37/responsive-web-design",
				"open-in-new-tab": true,
				"padding": "xs",
				"text": "Certification",
			})
		]
	},

	// Javascript
	{
		image: "https://res.cloudinary.com/dfddk8jjr/image/upload/v1704381163/Screenshot_2024-01-04_at_17.10.48_rjnea0.png",

		labels: [
			React.createElement(Label, {
				"background-color": "#DCBF2F",
				color: "white",
				text: "javascript"
			}),
		],

		title: "JavaScript Algorithms and Data Structures",
		description: "Completed FreeCodeCamp's JavaScript Algorithms and Data Structures course, gaining a good grasp of coding concepts. Can solve problems and use efficient data structures, bringing a practical understanding of algorithms to web development projects.",

		button: [
			React.createElement(ButtonLineDrawing, {
				"icon": React.createElement(FaFreeCodeCamp, {
					size: 20}),
				"icon-position": "right",
				"line-effect": "line-below",
				"link-url": "https://www.freecodecamp.org/certification/ovidiu37/javascript-algorithms-and-data-structures",
				"open-in-new-tab": true,
				"padding": "xs",
				"text": "Certification",
			})
		]
	},

	// Brasov
	{
		image: "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128134/CV%20PICS/education/univ-bv_zrbmwq.jpg",

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
			text: "I successfully attained my Master's degree in Integrated Information Systems for Business from the University Transylvania of Brasov. This program equipped me with a thorough understanding of e-commerce, marketing strategies, Java programming and the application of Tableau Public for effective data visualization."
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
		image: "https://res.cloudinary.com/dfddk8jjr/image/upload/v1697128134/CV%20PICS/education/New_Project_yciwc0.png",

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
		description: "At the University of Bucharest, I successfully completed my Bachelor's degree in Applied Modern Languages with an emphasis on in-depth studies of the English and German languages. This program not only provided me with comprehensive language training but also included coursework in economics, which allowed me to gain a practical understanding of fundamental economic principles while further strengthening my proficiency in both languages.",

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

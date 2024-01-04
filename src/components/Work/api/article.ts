import React from "react"
import {AnimatedText, Description, Divider, SimpleDivider} from "@git-ovidiu/nextjs-component-library"

const articles = [
	{
		title: React.createElement(AnimatedText, {
			color: "black",
			text: "Atomic Design and Scalability",
			variant: "h4"
		}),
		divider: React.createElement(Divider, {
			"position": "center",
			divider: React.createElement(SimpleDivider, {
				"animate": true,
				"loop": false,
				"animation-duration": "1s",
				"border-radius": "10px",
				"color": "#3399FF",
				"height": "5px",
				"width": "100%",
			})
		}),
		description: React.createElement(Description, {
			color: "black",
			text: "Implementing the principles of atomic design has revolutionized our project approach, enabling us to achieve remarkable enhancements. By deconstructing projects into atoms, molecules, and organisms, we have witnessed significant improvements in maintainability and scalability. I have gained hands-on expertise in assembling complete organisms using the atoms and molecules I previously created. This methodical approach fosters reusability, consistency, and simplified maintenance. It promotes seamless collaboration within our team and ensures efficient development and code management. The application of atomic design principles has proven indispensable in delivering adaptable and versatile solutions to our clients."
		})
	},
	{
		title: React.createElement(AnimatedText, {
			color: "black",
			text: "Teamwork and Deadline Management",
			variant: "h4"
		}),
		divider: React.createElement(Divider, {
			"position": "center",
			divider: React.createElement(SimpleDivider, {
				"animate": true,
				"loop": false,
				"animation-duration": "1s",
				"border-radius": "10px",
				"color": "#00CC66",
				"height": "5px",
				"width": "100%",
			})
		}),
		description: React.createElement(Description, {
			color: "black",
			text: "During my time at FrozenLogic, I have come to appreciate the significance of teamwork and have played an active role in cultivating effective collaboration. Working closely alongside my colleagues, I have refined my ability to meet deadlines and ensure the timely delivery of projects. Through collaborative endeavors, we leverage our collective skills and expertise to overcome challenges and achieve remarkable results. Additionally, I have successfully completed various modules for HubSpot, expanding my knowledge in marketing automation and customer relationship management. As a result, I am well-equipped to contribute to the creation of cohesive solutions that align with our clients objectives and drive business success."
		})
	},
	{
		title: React.createElement(AnimatedText, {
			color: "black",
			text: "Task Organization and Jira Management",
			variant: "h4"
		}),
		divider: React.createElement(Divider, {
			"position": "center",
			divider: React.createElement(SimpleDivider, {
				"animate": true,
				"loop": false,
				"animation-duration": "1s",
				"border-radius": "10px",
				"color": "#8A4D76",
				"height": "5px",
				"width": "100%",
			})
		}),
		description: React.createElement(Description, {
			color: "black",
			text: "The ability to effectively organize and prioritize tasks is paramount for achieving success in any project. With the use of Jira, I create comprehensive project boards, establish milestones, and optimize resource allocation for efficient project execution. Additionally, I have utilized GitPod to streamline my development workflow, enhancing efficiency and facilitating seamless collaboration within the team. This integrated approach allows me to efficiently manage tasks, stay on top of deadlines, and maintain a high level of productivity."
		})
	},
	{
		title: React.createElement(AnimatedText, {
			color: "black",
			text: "Design Adherence and Attention to Detail\n",
			variant: "h4"
		}),
		divider: React.createElement(Divider, {
			"position": "center",
			divider: React.createElement(SimpleDivider, {
				"animate": true,
				"loop": false,
				"animation-duration": "1s",
				"border-radius": "10px",
				"color": "#808080",
				"height": "5px",
				"width": "100%",
			})
		}),
		description: React.createElement(Description, {
			color: "black",
			text: "Figma design guidelines play a pivotal role in my work at FrozenLogic. By closely adhering to design specifications, I have cultivated a keen eye for detail and a deep appreciation for the importance of visual consistency. I meticulously implement the design elements and follow the established design system to ensure pixel-perfect results. Additionally, I have gained expertise in responsive design and Bootstrap framework, enabling me to create websites that seamlessly adapt to different screen sizes and devices. This attention to detail and responsive design principles guarantee an optimal user experience across all platforms."
		})
	},
	{
		title: React.createElement(AnimatedText, {
			color: "black",
			text: "Adaptability and Problem-Solving Skills",
			variant: "h4"
		}),
		divider: React.createElement(Divider, {
			"position": "center",
			divider: React.createElement(SimpleDivider, {
				"animate": true,
				"loop": false,
				"animation-duration": "1s",
				"border-radius": "10px",
				"color": "#FFA500",
				"height": "5px",
				"width": "100%",
			})
		}),
		description: React.createElement(Description, {
			color: "black",
			text: "Working in a fast-paced environment has taught me the importance of adaptability and problem-solving. I utilize my knowledge of front-end technologies, including lit-elements, TypeScript, JavaScript, SCSS, CSS, and HTML to overcome challenges and deliver projects of the highest quality. With a deep understanding of responsive design and Bootstrap, I ensure that the websites I create are not only visually appealing but also optimized for various devices and screen sizes. This adaptability and problem-solving mindset enable me to consistently deliver exceptional results that exceed client expectations."
		})
	},
	{
		title: React.createElement(AnimatedText, {
			color: "black",
			text: "Professionalism and Continuous Growth",
			variant: "h4"
		}),
		divider: React.createElement(Divider, {
			"position": "center",
			divider: React.createElement(SimpleDivider, {
				"animate": true,
				"loop": false,
				"animation-duration": "1s",
				"border-radius": "10px",
				"color": "#001F3F",
				"height": "5px",
				"width": "100%",
			})
		}),
		description: React.createElement(Description, {
			color: "black",
			text: "At FrozenLogic, I prioritize professionalism through clear communication, active collaboration, and a commitment to continuous growth. I stay updated with industry trends, embrace emerging technologies, and seek feedback to refine my skills. This ensures strong relationships, trust, and successful project execution."
		})
	},
]


export default articles;



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
			divider: React.createElement(SimpleDivider, {
				"animate": true,
				"loop": true,
				"animation-duration": "1s",
				"border-radius": "10px",
				"color": "#3399FF",
				"height": "5px",
				"width": "100%",
			})
		}),
		description: React.createElement(Description, {
			color: "black",
			text: "Implementing atomic design principles has improved the way we approached projects. By breaking down the project into atoms, molecules, and organisms, we achieve enhanced maintainability and scalability. I have gained hands-on experience in creating the entire organism from atoms and molecules that I previously developed. This systematic approach allows for greater reusability, consistency, and ease of maintenance. It fosters collaboration within the team and ensures efficient development and code management. The application of atomic design principles has proven to be instrumental in delivering scalable and flexible solutions for our clients."
		})
	},
	{
		title: React.createElement(AnimatedText, {
			color: "black",
			text: "Teamwork and Deadline Management",
			variant: "h4"
		}),
		divider: React.createElement(Divider, {
			divider: React.createElement(SimpleDivider, {
				"animate": true,
				"loop": true,
				"animation-duration": "1s",
				"border-radius": "10px",
				"color": "#00CC66",
				"height": "5px",
				"width": "100%",
			})
		}),
		description: React.createElement(Description, {
			color: "black",
			text: "At FrozenLogic, I have learned the value of teamwork and effective collaboration. Working closely with my colleagues, I have honed my ability to respect deadlines and ensure timely project delivery. Through collaborative efforts, we leverage our collective skills and expertise to overcome challenges and achieve exceptional results. I have successfully completed modules for HubSpot, expanding my expertise in marketing automation and customer relationship management. This allows me to contribute to integrated solutions that align with clients' goals and drive business success."
		})
	},
	{
		title: React.createElement(AnimatedText, {
			color: "black",
			text: "Task Organization and Jira Management",
			variant: "h4"
		}),
		divider: React.createElement(Divider, {
			divider: React.createElement(SimpleDivider, {
				"animate": true,
				"loop": true,
				"animation-duration": "1s",
				"border-radius": "10px",
				"color": "#8A4D76",
				"height": "5px",
				"width": "100%",
			})
		}),
		description: React.createElement(Description, {
			color: "black",
			text: "Organizing and prioritizing tasks is crucial in achieving project success. Through the use of Jira, I have developed skills in task management, ensuring that each task is carefully organized and executed. I leverage the power of Jira to create comprehensive project boards, set milestones, and allocate resources efficiently. Additionally, I have utilized GitPod to streamline my development workflow, enhancing efficiency and facilitating seamless collaboration within the team. This integrated approach empowers me to efficiently manage tasks, stay on top of deadlines, and maintain a high level of productivity."
		})
	},
	{
		title: React.createElement(AnimatedText, {
			color: "black",
			text: "Design Adherence and Attention to Detail\n",
			variant: "h4"
		}),
		divider: React.createElement(Divider, {
			divider: React.createElement(SimpleDivider, {
				"animate": true,
				"loop": true,
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
			divider: React.createElement(SimpleDivider, {
				"animate": true,
				"loop": true,
				"animation-duration": "1s",
				"border-radius": "10px",
				"color": "#FFA500",
				"height": "5px",
				"width": "100%",
			})
		}),
		description: React.createElement(Description, {
			color: "black",
			text: "Working in a fast-paced environment has taught me the importance of adaptability and problem-solving. I have developed a versatile skill set that allows me to navigate challenges and find innovative solutions. I leverage my knowledge of front-end technologies, including lit-elements, TypeScript, JavaScript, SCSS, CSS, and HTML, to overcome obstacles and deliver high-quality projects. With a deep understanding of responsive design and Bootstrap, I ensure that the websites I create are not only visually appealing but also optimized for various devices and screen sizes. This adaptability and problem-solving mindset enable me to consistently deliver exceptional results that exceed client expectations."
		})
	},
	{
		title: React.createElement(AnimatedText, {
			color: "black",
			text: "Professionalism and Continuous Growth",
			variant: "h4"
		}),
		divider: React.createElement(Divider, {
			divider: React.createElement(SimpleDivider, {
				"animate": true,
				"loop": true,
				"animation-duration": "1s",
				"border-radius": "10px",
				"color": "#001F3F",
				"height": "5px",
				"width": "100%",
			})
		}),
		description: React.createElement(Description, {
			color: "black",
			text: "Throughout my journey at FrozenLogic, I have embraced professionalism as a core value. Clear communication, active collaboration, and a commitment to continuous growth have defined my approach to web development. I am dedicated to staying updated with the latest industry trends, exploring emerging technologies, and expanding my skill set. This drive for continuous learning has enabled me to deliver cutting-edge websites that incorporate the latest practices and technologies. Additionally, I actively seek feedback from clients and team members to refine my skills and enhance my professional growth. By maintaining a high level of professionalism, I foster strong working relationships, build trust, and ensure the successful execution of projects."
		})
	},
]

// const article = {
// 	first_title: React.createElement(
// 		AnimatedText, {
// 			color: "black",
// 			text: "Teamwork and Deadline Management",
// 			variant: "h4"
// 		}
// 	),
// 	first_description: "At FrozenLogic, I have learned the value of teamwork and effective collaboration. Working closely with my colleagues, I have honed my ability to respect deadlines and ensure timely project delivery.",
//
// 	second_title: React.createElement(
// 		AnimatedText, {
// 			color: "black",
// 			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis atque doloremque omnis!",
// 			variant: "h4"
// 		}
// 	),
// 	second_description: "pericula deserunt ridens senectus melius laoreet his malorum elitr et proin noster ornare dolore senserit dicat alienum inani splendide iaculis pericula deserunt ridens senectus melius laoreet his malorum elitr et proin noster ornare dolore senserit dicat alienum inani splendide iaculis pericula deserunt ridens senectus melius laoreet his malorum elitr et proin noster ornare dolore senserit dicat alienum inani splendide iaculis pericula deserunt ridens senectus melius laoreet his malorum elitr et proin ",
// }


export default articles;
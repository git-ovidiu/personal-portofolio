import React from "react"
import {AiFillLinkedin} from "react-icons/ai"
import {SiGmail} from "react-icons/si"
import {BsTelephonePlusFill} from "react-icons/bs"

const content =
	 {
		  title: "Contact me!",
		 description: "description",
		 iconAndTexts: [
			 {
				 icon: React.createElement(AiFillLinkedin, { size: 20, color: `#416f5d` }),
				 text: "LinkedIn"
			 },
			 {
				 icon: React.createElement(SiGmail, { size: 20, color: `#416f5d` }),
				 text: "Mail"
			 },
			 {
				 icon: React.createElement(BsTelephonePlusFill, { size: 20, color: `#416f5d` }),
				 text: "+40733950116"
			 }
		 ]
	 }

 export default content;
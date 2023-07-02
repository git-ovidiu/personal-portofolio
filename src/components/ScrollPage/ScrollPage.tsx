import React, { ReactNode, useEffect, useRef, useState } from "react";

export interface ScrollPageProps {
	children?: ReactNode;
	registerSectionRef: (element: HTMLElement | null, index: number) => void; // Add index parameter
}

export const ScrollPage: React.FC<ScrollPageProps> = ({
														  children,
													  }: ScrollPageProps) => {
	const sectionRefs = useRef<HTMLDivElement[]>([]);
	const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const currentSection = sectionRefs.current[currentSectionIndex];
			const nextSectionIndex =
				currentSectionIndex + 1 < sectionRefs.current.length
					? currentSectionIndex + 1
					: 0;
			const nextSection = sectionRefs.current[nextSectionIndex];

			if (
				currentSection &&
				nextSection &&
				window.pageYOffset >= currentSection.offsetTop &&
				window.pageYOffset <=
				currentSection.offsetTop + currentSection.offsetHeight - windowHeight
			) {
				nextSection.scrollIntoView({
					behavior: "auto",
					block: "start",
				});
				setCurrentSectionIndex(nextSectionIndex);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [currentSectionIndex]);

	const registerSectionRef = (ref: HTMLDivElement | null, index: number) => {
		if (ref && !sectionRefs.current.includes(ref)) {
			sectionRefs.current[index] = ref; // Store the ref at the correct index
		}
	};

	return (
		<div className="scroll-page">
			{React.Children.map(children, (child, index) => (
				<div ref={(ref) => registerSectionRef(ref, index)}>{child}</div>
			))}
		</div>
	);
};

export default ScrollPage;

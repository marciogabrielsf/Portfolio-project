import { motion } from "framer-motion";
import ProjectFourImage from "@/assets/ProjectTwo.png";
import { ProjectsData } from "../../static";
import "./styles.scss";

import { motionItem } from "./motion";
import { container } from "@/constants/motion";

export default function ProjectFour() {
	const projectID = 3;

	const viewportConfiguration = {
		once: true,
	};

	return (
		<div className="section">
			<motion.div
				viewport={viewportConfiguration}
				variants={container}
				initial="hidden"
				whileInView="show"
				className="project_four"
			>
				<motion.div variants={motionItem}>
					<div className="graphics_four">
						<figure className="project_photo_four">
							<img src={ProjectFourImage} alt="Image of the Excellent Google Ad generator" />
						</figure>
					</div>
				</motion.div>
				<div className="copy_project_four">
					<motion.h1 variants={motionItem} className="copy_headline_four">
						{ProjectsData[projectID].title}
					</motion.h1>
					<motion.p variants={motionItem} className="copy_description_four">
						{ProjectsData[projectID].descriptionOne}
					</motion.p>
					<motion.p variants={motionItem} className="copy_description_four">
						{ProjectsData[projectID].descriptionTwo}
					</motion.p>
					<motion.div variants={motionItem} className="links">
						<a target="_blank" rel="noopener noreferrer" href={ProjectsData[projectID].githubLink}>
							<i className=" fa-brands fa-github"></i>
						</a>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}

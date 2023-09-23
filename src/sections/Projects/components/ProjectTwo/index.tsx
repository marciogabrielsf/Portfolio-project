import { motion } from "framer-motion";
import ProjectTwoImage from "@/assets/cicabrevWebsite.png";
import { ProjectsData } from "../../static";
import "./styles.scss";

import { motionItem } from "./motion";
import { BiLink } from "react-icons/bi";

export default function ProjectTwo() {
	const projectID = 1;

	const viewportConfiguration = {
		once: true,
	};

	return (
		<motion.div className="project_two_container section">
			<div className="project_two">
				<div className="copy_project_two">
					<motion.h1
						variants={motionItem}
						initial="hidden"
						whileInView="show"
						viewport={viewportConfiguration}
						className="copy_headline_two"
					>
						{ProjectsData[projectID].title}
					</motion.h1>
					<motion.p
						variants={motionItem}
						initial="hidden"
						whileInView="show"
						viewport={viewportConfiguration}
						className="copy_description_two"
					>
						{ProjectsData[projectID].descriptionOne}
					</motion.p>
					<motion.p
						variants={motionItem}
						initial="hidden"
						whileInView="show"
						viewport={viewportConfiguration}
						className="copy_description_two"
					>
						{ProjectsData[projectID].descriptionTwo}
					</motion.p>
					<motion.div
						variants={motionItem}
						initial="hidden"
						whileInView="show"
						viewport={viewportConfiguration}
						className="links"
					>
						<a target="_blank" rel="noopener noreferrer" href={ProjectsData[projectID].githubLink}>
							<i className=" fa-brands fa-github"></i>
						</a>
						<a target="_blank" href={ProjectsData[projectID].projectSite}>
							<BiLink className="clickable_icons" />
						</a>
					</motion.div>
				</div>
				<motion.div
					variants={motionItem}
					viewport={viewportConfiguration}
					initial="imageHide"
					whileInView="imageShow"
				>
					<div className="graphics_two">
						<img
							src={ProjectTwoImage}
							className="project_two_photo"
							alt="Image of the Excellent Google Ad generator"
						/>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}

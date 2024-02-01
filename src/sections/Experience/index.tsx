import { useState } from "react";
import "./styles.scss";
import ResumeItem from "./components/resumeItem";
import { experiences } from "@/constants/experiences";
import { AnimatePresence, motion } from "framer-motion";

import { container, leftToRightItem, motionItem } from "./motion";

export default function Experiences() {
	const [showMore, setShowMore] = useState(false);

	const setShowMoreHandler = () => {
		setShowMore(!showMore);
	};

	return (
		<section className="section">
			<div className="experience_container container">
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					<motion.h1 variants={leftToRightItem} className="experience_title">
						Minha Experiência profissional.
					</motion.h1>
					<motion.h2 variants={leftToRightItem} className="experience_subtitle">
						Saiba onde eu contribuí profissionalmente.
					</motion.h2>
				</motion.div>

				<div>
					<AnimatePresence mode="popLayout">
						{experiences
							.slice(0, showMore ? 999 : 2)
							.map(({ id, company, description, period, title }) => (
								<motion.div key={id}>
									<ResumeItem
										company={company}
										date={period}
										position={title}
										description={description}
									/>
								</motion.div>
							))}
					</AnimatePresence>
				</div>

				<AnimatePresence>
					{experiences.length > 2 && (
						<motion.div layout>
							<button onClick={setShowMoreHandler} className="show_more_button">
								{showMore ? "Mostrar menos" : "Mostrar mais"}
							</button>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}

import React, { useEffect, useState } from "react";
import "./styles.scss";
import ResumeItem from "./components/resumeItem";
import { experiences } from "@/constants/experiences";

export default function Experiences() {
	const [showMore, setShowMore] = useState(false);

	const setShowMoreHandler = () => {
		setShowMore(!showMore);
	};

	return (
		<section className="section">
			<div className="experience_container container">
				<div>
					<h1 className="experience_title">Minha Experiência profissional.</h1>
					<h2 className="experience_subtitle">Saiba onde eu contribuí profissionalmente.</h2>
				</div>

				<div>
					{experiences
						.slice(0, showMore ? 999 : 2)
						.map(({ id, company, description, period, title }) => (
							<ResumeItem
								key={id}
								company={company}
								date={period}
								position={title}
								description={description}
							/>
						))}
				</div>
				{experiences.length > 2 && (
					<button onClick={setShowMoreHandler} className="show_more_button">
						{showMore ? "Mostrar menos" : "Mostrar mais"}
					</button>
				)}
			</div>
		</section>
	);
}

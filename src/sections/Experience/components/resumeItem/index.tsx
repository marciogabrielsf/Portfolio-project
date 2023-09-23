import React from "react";
import "./styles.scss";

interface Props {
	position: string;
	date: string;
	company: string;
	description: string[];
}

export default function ResumeItem({ position, date, company, description }: Props) {
	return (
		<div className="resume_container">
			<div>
				<h2 className="resume_title">
					{position} <span className="resume_highlight">@{company}</span>
				</h2>
				<h3 className="resume_date">{date}</h3>
			</div>
			{description.map((desc) => (
				<p className="experience_description">{desc}</p>
			))}
		</div>
	);
}

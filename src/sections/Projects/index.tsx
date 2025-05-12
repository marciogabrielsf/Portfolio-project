import React from "react";

import "./styles.scss";
import ProjectHeader from "./components/Header";
import ProjectOne from "./components/ProjectOne";
import ProjectTwo from "./components/ProjectTwo";
import ProjectThree from "./components/ProjectThree";
import ProjectFour from "./components/ProjectFour";

export default function Projects() {
    return (
        <section id="Projects" className="projectsSection section">
            <div className="projectsContainer container">
                <ProjectHeader />
                <ProjectOne />
                <ProjectTwo />
                <ProjectThree />
                <ProjectFour />
            </div>
        </section>
    );
}

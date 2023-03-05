import React from 'react'

import './styles.scss'
import ProjectHeader from './Header'
import ProjectOne from './ProjectOne'

export default function Projects() {
  return (
    <section id='Projects' className='projectsSection section'>
      <div className="projectsContainer container">
        <ProjectHeader />
        <ProjectOne />
      </div>
    </section>
  )
}

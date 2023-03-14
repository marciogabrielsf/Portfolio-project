
import { motion } from 'framer-motion';
import ProjectTwo from '@/assets/ProjectTwo.png'
import { ProjectsData } from '../static'
import './styles.scss'

import { motionItem } from './motion';


export default function ProjectOne() {
  const projectID = 1;

  const viewportConfiguration = {
    once: true,
  }

  return (
    <motion.div className='project_two_container section'>
      <div
        className="project_two">
        <div className="copy_project_two">
          <motion.h1
            variants={motionItem}
            initial='hidden'
            whileInView='show'
            viewport={viewportConfiguration}
            className='copy_headline_two'>
            {ProjectsData[projectID].title}
          </motion.h1>
          <motion.p
            variants={motionItem}
            initial='hidden'
            whileInView='show'
            viewport={viewportConfiguration}
            className='copy_description_two'>
            {ProjectsData[projectID].descriptionOne}
          </motion.p>
          <motion.p
            variants={motionItem}
            initial='hidden'
            whileInView='show'
            viewport={viewportConfiguration}
            className='copy_description_two'>
            {ProjectsData[projectID].descriptionTwo}
          </motion.p>
          <motion.div
            variants={motionItem}
            initial='hidden'
            whileInView='show'
            viewport={viewportConfiguration}
            className="links">
            <a target="_blank" rel="noopener noreferrer" href={ProjectsData[projectID].githubLink}>
              <i className=" fa-brands fa-github">
              </i>
            </a>
          </motion.div>
        </div>
        <motion.div variants={motionItem}
          viewport={viewportConfiguration}
          initial='imageHide'
          whileInView='imageShow'
          className="graphics_two">
          <figure className='project_photo'>
            <img src={ProjectTwo} alt="Voucher C.R.U.D App Project on a iPhone 14 pro max frame" />
          </figure>
        </motion.div>
      </div>
    </motion.div>
  )
}

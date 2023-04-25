
import { motion } from 'framer-motion';
import ProjectThreeImage from '@/assets/excellent-google-ads.png'
import { ProjectsData } from '../static'
import './styles.scss'

import { motionItem } from './motion';


export default function ProjectThree() {
  const projectID = 2;

  const viewportConfiguration = {
    once: true,
  }

  return (
    <motion.div className='project_three_container section'>
      <div
        className="project_three">
        <motion.div variants={motionItem}
          viewport={viewportConfiguration}
          initial='imageHide'
          whileInView='imageShow'
          className="graphics_three">
          <figure className='project_photo_three'>
            <img src={ProjectThreeImage} alt="Image of the Excellent Google Ad generator" />
          </figure>
        </motion.div>
        <div className="copy_project_three">
          <motion.h1
            variants={motionItem}
            initial='hidden'
            whileInView='show'
            viewport={viewportConfiguration}
            className='copy_headline_three'>
            {ProjectsData[projectID].title}
          </motion.h1>
          <motion.p
            variants={motionItem}
            initial='hidden'
            whileInView='show'
            viewport={viewportConfiguration}
            className='copy_description_three'>
            {ProjectsData[projectID].descriptionOne}
          </motion.p>
          <motion.p
            variants={motionItem}
            initial='hidden'
            whileInView='show'
            viewport={viewportConfiguration}
            className='copy_description_three'>
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
      </div>
    </motion.div>
  )
}

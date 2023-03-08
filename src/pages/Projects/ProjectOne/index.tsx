import { motion } from 'framer-motion'
import { container, motionItem } from './motion'

import Phone from '@/assets/voucher-crud-phone.png'
import { ProjectsData } from '../static'
import './styles.scss'


export default function ProjectOne() {
  const projectID = 0;

  return (
    <motion.div className='project_one_container section'>
      <div className="graphics">
        <motion.figure className='project_phone'>
          <img src={Phone} alt="Voucher C.R.U.D App Project on a iPhone 14 pro max frame" />
          <div className="gradient"></div>
        </motion.figure>
      </div>
      <motion.div className="copy_one">
        <motion.h1 variants={motionItem} initial='hidden' whileInView='show' viewport={{ once: true, margin: '0px 0px -15% 0px' }} className='copy_headline'>{ProjectsData[projectID].title}</motion.h1>
        <motion.p variants={motionItem} initial='hidden' whileInView='show' viewport={{ once: true, margin: '0px 0px -15% 0px' }} className='copy_description'>{ProjectsData[projectID].descriptionOne}</motion.p>
        <motion.p variants={motionItem} initial='hidden' whileInView='show' viewport={{ once: true, margin: '0px 0px -15% 0px' }} className='copy_description'>{ProjectsData[projectID].descriptionTwo}</motion.p>
        <div className="links">
          <a target="_blank" rel="noopener noreferrer" href={ProjectsData[projectID].githubLink}>
            <i className=" fa-brands fa-github">
            </i>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

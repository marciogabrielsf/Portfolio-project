import { motion } from 'framer-motion'
import { container, motionItem } from './motion'


import './styles.scss'

export default function ProjectHeader() {
  return (
    <motion.div variants={container} initial='hidden' whileInView='show' viewport={{ once: true, margin: '-100px' }} className='project_header'>
      <motion.h1 variants={motionItem} className='headline'>Sim, Eu trabalho duro.</motion.h1>
      <motion.h3 variants={motionItem} className='sub_headline'>Veja abaixo alguns dos meus projetos, cada um com sua exclusividade.</motion.h3>
    </motion.div>
  )
}

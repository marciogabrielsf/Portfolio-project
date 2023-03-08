import { useState } from 'react'
import { motion } from 'framer-motion'
import { container, motionItem } from './motion'
import Lottie from 'react-lottie'
import animationData from '@/assets/scroll-down-lottie.json'

import './styles.scss'


export default function ScrollDownLottie() {

    const [animationState, setAnimationState] = useState({
        isStopped: false, isPaused: false
    })

    const defaultOptions = {

        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <motion.div variants={container} initial='hidden' animate='show' className="scrollDownLottie">
            <motion.a variants={motionItem} className='scrollDownDiv' href="#About">
                <Lottie options={defaultOptions}
                    width={70}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused} />
                <h3 className='keep_reading'>Continue Lendo</h3>
            </motion.a>
        </motion.div>
    )
}

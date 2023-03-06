import React, { useState } from 'react'
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
        <div className="scrollDownLottie">
            <a className='scrollDownDiv' href="#About">
                <Lottie options={defaultOptions}
                    width={70}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused} />
                <h3 className='keep_reading'>Continue Lendo</h3>
            </a>
        </div>
    )
}

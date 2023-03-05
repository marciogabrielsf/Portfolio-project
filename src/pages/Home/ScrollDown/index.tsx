import React, { useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '@/assets/scroll-down-lottie.json'

import './styles.scss'


export default function ScrollDownLottie() {

    const [animationState, setanimationState] = useState({
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
            <a href="">
                <Lottie options={defaultOptions}
                    width={60}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused} />
            </a>
        </div>
    )
}

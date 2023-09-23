import HeroSection from './components/HeroSection'

import './styles.scss'
import ScrollDownLottie from './components/ScrollDown'


export default function Home() {
    return (
        <section className='HomeSection section'>
            <div className="homeContainer container">
                <HeroSection />
                <ScrollDownLottie />
            </div>
        </section>
    )
}

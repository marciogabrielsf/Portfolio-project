import './styles.scss'
import AboutText from './components/AboutText'

export default function About() {
  return (
    <section id='About' className="aboutSection section">
      <div className='aboutContainer container'>
        <AboutText />
      </div>
    </section>
  )
}

import ContactForm from './components/ContactForm'
import ContactHeader from './components/ContactHeader'
import './styles.scss'

export default function Contact() {
  return (
    <section id='Contact' className="contactSection section">
      <div className='aboutContainer container'>
        <ContactHeader />
        <ContactForm />
      </div>
    </section>
  )
}

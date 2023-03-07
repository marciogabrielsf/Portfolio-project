import ContactForm from './ContactForm'
import ContactHeader from './ContactHeader'
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

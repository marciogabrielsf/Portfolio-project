
import { FormEvent, useState } from 'react'
import './styles.scss'
import emailjs from '@emailjs/browser'


export default function ContactForm() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  function handleSubmitButton(event: FormEvent) {
    event.preventDefault()


    if (email === '' || name === '' || message === '') {
      return setError('Preencha todos os campos!')
    }


    const templateParams = {
      from_name: name,
      message,
      email,
    }


    emailjs.send('service_14unkhh', 'template_etjbwmg', templateParams, '2QPJ_gxyll3ZRwKG6')
      .then(() => {
        setIsSuccess(true)
        setError('')
        setEmail('')
        setName('')
        setMessage('')
      }
      )
      .catch((error) => setError(error))
  }


  return (
    <div className="contact_form">
      <div className="shinyContainer contact_container">
        <h1 className='contactHeadline'>CONTATO</h1>
        <form className={`inputForm ${error && 'submit_error'}`}>
          <div className="contact_name">
            <input
              className={`inputBox ${error && 'submit_error'}`}
              required type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              name="name"
              id="name" />
            <label htmlFor="name">Nome</label>
          </div>
          <div className="contact_email">
            <input
              className={`inputBox ${error && 'submit_error'}`}
              required
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              id="email" />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="contact_message">
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              className={`inputBox ${error && 'submit_error'}`}
              id='message'
              required
              name='message'
              rows={6} />
            <label htmlFor="message">Mensagem</label>
          </div>
          <div className="contact_submit">
            <button
              className={`defaultButton submit_button ${(isSuccess && !error) && 'success'}`}
              type="submit"
              onClick={handleSubmitButton}>
              <span
                className={`${(isSuccess && !error) ? 'fa-solid fa-circle-check' : 'fa-regular fa-envelope'}`} />

              {(isSuccess && !error) ? 'Enviado' : 'Enviar'}
            </button>
            <p className={`${error ? 'submit_error' : 'error_hidden'}`}>{error}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

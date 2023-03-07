
import './styles.scss'

export default function ContactForm() {
  return (
    <div className="contact_form">
      <div className="shinyContainer contact_container">
        <h1 className='contactHeadline'>CONTATO</h1>
        <form className='inputForm'>
          <div className="contact_name">
            <input className='inputBox' required={true} type="text" name="name" id="name" />
            <label htmlFor="name">Nome</label>
          </div>
          <div className="contact_email">
            <input className='inputBox' required={true} type="text" name="email" id="email" />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="contact_message">
            <textarea
              className='inputBox'
              id='message'
              required={true}

              name='message'
              rows={6}
            ></textarea>
            <label htmlFor="message">Mensagem</label>
          </div>
          <div className="contact_submit">
            <button className='defaultButton submit_button' type="submit"><span className='fa-regular fa-envelope'></span>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

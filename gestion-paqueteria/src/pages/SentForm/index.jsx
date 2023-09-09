import { BiSolidPackage, BiFile, BiInjection } from 'react-icons/bi'
import './index.scss'

const SentForm = () => {
  return (
    <div className='sent-form-container'>
        <form className='sent-form-container__form'>
          <div className='sent-form-container__form--user-info input-container'>
            <h2>Datos de contacto</h2>
            <input type='text' placeholder='Nombre Contacto' />
            <input type='number' placeholder='Documento de indentidad' />
            <input type='number' placeholder='Teléfono' />
            <input type='email' placeholder='Correo electrónico' />
            <input type='text' placeholder='Dirección' />
          </div>
          <div className='sent-form-container__form--sent-type input-container'>
            <h2 className='title'>Tipo de producto</h2>
            <div className='input-wrapper package'>
              <label htmlFor='package' className='radio-label'><BiSolidPackage /></label>
              <input type='radio' id='package' className='radio-input' name='radio-button' defaultChecked />
            </div>
            <div className='input-wrapper document'>
              <label htmlFor='document' className='radio-label'><BiFile /></label>
              <input type='radio' id='document' className='radio-input' name='radio-button' />
            </div>
            <div className='input-wrapper farma'>
              <label htmlFor='farma' className='radio-label'><BiInjection /></label>
              <input type='radio' id='farma' className='radio-input' name='radio-button' />
            </div>
          </div>
          <div className='sent-form-container__form--address-info input-container'>
            <h2>Información solicitud</h2>
            <input type='text' placeholder='Ciudad' />
            <input type='text' placeholder='Dirección' />
            <input type='text' placeholder='Valor declarado' />
            <input type='text' placeholder='Forma de pago' />
          </div>
          <div className='sent-form-container__form--sent-info input-container'>
            <h2>Información producto</h2>
            <select name='' id=''>
            <option value=''>Normal</option>
            <option value=''>Frágil</option>
              <option value=''>Muy Frágil</option>
            </select>
            <input type='text' placeholder='Peso (kg)' />
            <input type='text' placeholder='Ancho (cm)' />
            <input type='text' placeholder='Alto (cm)' />
            <input type='text' placeholder='Largo (cm)' />
          </div>
          <div className='sent-form-container__form--sent-request input-container'>
            <button className='clean-form'>Limpiar formulario</button>
            <button className='send-form'>Enviar</button>
          </div>
        </form>
    </div>
  )
}

export default SentForm

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { BiSolidPackage, BiFile, BiInjection } from 'react-icons/bi'
import { createData, getLocation } from '../../service/api'
import Swal from 'sweetalert2'
import './index.scss'

const SentForm = () => {
  const { register, handleSubmit } = useForm()

  const navigate = useNavigate();


  const onSubmit = async orderInfo => {
    const location = await getLocation(orderInfo.origin_address)
    const order = {
      valor_declarado: orderInfo.price,
      direccion_destinatario: location,
      direccion_remitente: location,
      fragilidad: orderInfo.fragile
    }
    await createData('envio', order)
    const userConfirmDeletion = await Swal.fire({
      title: 'Orden generada correctamente',
      confirmButtonText: 'Ok',
      reverseButtons: true,
      "customClass": {
          button: 'custom-button',
          htmlContainer: 'custom-container'
      },
    })
    if (userConfirmDeletion.isConfirmed) {
      navigate('/')
    }
  }

  return (
    <div className='sent-form-container'>
        <form className='sent-form-container__form' onSubmit={handleSubmit(onSubmit)}>
          <div className='sent-form-container__form--user-info input-container'>
            <h2>Datos de contacto</h2>
            <input 
              type='text' 
              placeholder='Nombre Contacto'
              {...register('name')}
              name='name'
            />
            <input 
              type='number' 
              placeholder='Documento de indentidad'
              {...register('cc')}
              name='cc'
            />
            <input 
              type='number' 
              placeholder='Teléfono' 
              {...register('phoneNumber')}
              name='phoneNumber'
            />
            <input 
              type='email' 
              placeholder='Correo electrónico'
              {...register('email')}
              name='email'
            />
            <input 
              type='text' 
              placeholder='Dirección remitente' 
              {...register('origin_address')}
              name='origin_address'
            />
          </div>
          <div className='sent-form-container__form--sent-type input-container'>
            <h2 className='title'>Tipo de producto</h2>
            <div className='input-wrapper package'>
              <label htmlFor='package' className='radio-label'><BiSolidPackage /></label>
              <input 
                type='radio' 
                id='package' 
                className='radio-input' 
                name='radio-button' 
                defaultChecked 
              />
            </div>
            <div className='input-wrapper document'>
              <label htmlFor='document' className='radio-label'><BiFile /></label>
              <input 
                type='radio' 
                id='document' 
                className='radio-input' 
                name='radio-button' 
              />
            </div>
            <div className='input-wrapper farma'>
              <label htmlFor='farma' className='radio-label'><BiInjection /></label>
              <input 
                type='radio' 
                id='farma' 
                className='radio-input' 
                name='radio-button' 
              />
            </div>
          </div>
          <div className='sent-form-container__form--address-info input-container'>
            <h2>Información solicitud</h2>
            <input 
              type='text' 
              placeholder='Ciudad de envio'
              {...register('destiny')}
              name='destiny'
            />
            <input 
              type='text' 
              placeholder='Dirección envio'
              {...register('destiny_address')}
              name='destiny_address'
            />
            <input 
              type='text' 
              placeholder='Valor declarado'
              {...register('price')}
              name='price'
            />
          </div>
          <div className='sent-form-container__form--sent-info input-container'>
            <h2>Información producto</h2>
            <select name='fragile' id='' {...register('fragile')}>
              <option value='normal'>Normal</option>
              <option value='fragile'>Frágil</option>
              <option value='extra_fragile'>Muy Frágil</option>
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

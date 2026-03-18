
import { CustomAlert } from '../components/CustomAlert'
import { CustomBadge } from '../components/CustomBadge'
import { CustomButton } from '../components/CustomButton'
import { CustomCard } from '../components/CustomCard'
import { CustomCheckBoxes } from '../components/CustomCheckBoxes'
import { CustomForm } from '../components/CustomForm'
import { CustomInput } from '../components/CustomInput'
import { CustomProgressBar } from '../components/CustomProgressBar'
import { CustomRadioButton } from '../components/CustomRadioButton'
import { CustomSelect } from '../components/CustomSelect'

export const Ejercicio1 = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen gap-4 p-1'>
            <CustomButton title='Boton1' />
            <CustomButton title='Boton2' />

            <div className="w-full max-w-xs">
                <CustomInput placeholder='input1' type="text" />
            </div>

            <CustomSelect title='colores' placeHolder='seleccione un color' items={['red', 'blue', 'green']} />

            <div>
                <h2>Aceptas los terminos y condiciones?</h2>
            </div>

            <CustomCheckBoxes text='Acepto los terminos' />

            <div className="">
                <h2>te gusta tu institucion</h2>
            </div>

            <CustomRadioButton options={['Si', 'No', 'Talvez']} />

            <CustomAlert />
            <CustomAlert />
            <CustomAlert />

            <CustomCard title='Carta Reutilizable' description='Esta es una carta reutilizable y personalizable de Shadcn' action='ver mas' />

            <CustomCard title='Carta Reutilizable2' description='Esta es una carta reutilizable y personalizable de Shadcn' action='ver mas' />

            <CustomCard title='Carta Reutilizable3' description='Esta es una carta reutilizable y personalizable de Shadcn' action='ver mas' />

            <CustomForm title='Formulario Reutilizable' description='este formulario es para enviar un mensaje mediante tu correo' footer='footer @copyRigth-2026 ITR' />

            <CustomForm title='Formulario Reutilizabl2' description='este formulario es para enviar un mensaje mediante tu correo' footer='footer @copyRigth-2026 ITR' />

            <CustomBadge title='Desactivado' variant='destructive' />
            <CustomBadge title='Activado' variant='secondary' />
            <CustomBadge title='Hola Profe Will' variant='outline' />

            <CustomProgressBar title='Progreso' value={67} />

            <CustomProgressBar title='Progreso' value={100} color='green' />
        </div>
    )
}

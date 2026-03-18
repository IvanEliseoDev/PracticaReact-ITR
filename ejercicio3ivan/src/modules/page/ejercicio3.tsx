import { useRef, useState } from 'react'
import '../../index.css'


export const Ejercicio3 = () => {
    //Utilizo UseRef para obtener el valor de los inputs
    //Lo Utilizo ya que es una buena practica y evito el renderizado al momento que el ususario presione una tecla
    //Con useRef el valor del input se guarda en una "referencia"
    const input1 = useRef<HTMLInputElement>(null)
    const input2 = useRef<HTMLInputElement>(null)

    const [Result, setResult] = useState(0)

    const handleOperation = () => {
        const num1 = Number(input1.current?.value); //Obtenemos el valor del primer input
        const num2 = Number(input2.current?.value); //Obtenemos el valor del segundo input

        setResult(num1 + num2) //Guardamos el resultado de la opracion en la pieza de estado
    }

    return (
        <div className='main'>
            <h1>Sumatoria de numeros</h1>

            <div className="">
                <p>Numero 1</p>
                <input type="number" name="num1" ref={input1} />

                <p>Numero 2</p>
                <input type="number" name="num2" ref={input2} />

                <button onClick={handleOperation}> Calcular </button>

                <h2>Resultado: {Result}</h2>
            </div>
        </div>
    )
}


import { useState } from "react"

const Contador = () => {

    const [numero, setNumero] = useState(0);


    // SETA O NÚMERO
    const decrementar = () => {
        setNumero(numero - 1);
    }

    const incrementar = () => {
        setNumero(numero + 1);
    }

    return (

        <div className="container">
            <h1 className="mt-2 mb-5 text-center">Contador</h1>

            {/* SETA O NÚMERO */}
            <button className="p-2 bg-danger text-light" onClick={decrementar}>Decrementar</button>
            <span className="p-2 m-2 bg-dark text-light"> {numero} </span>
            <button className="p-2 bg-success text-light" onClick={incrementar}>Incrementar</button>

        </div>

    )

}

export default Contador;
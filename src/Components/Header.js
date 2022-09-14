import banner from './img/banner.jpeg'
import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from './ContextProvider'

// COMPONENTE GLOBAL
const Header = () => {

    // CONDICIONAL - aula 03
    const { logado, setLogado } = useContext(AppContext)

    const logar = () => {
        setLogado(true)
    }

    const sair = () => {
        setLogado(false)
    }

    return (
        <div className='container'>
            <img src={banner} className='img-fluid' />

            {logado === false ? (<button className='bg-success btn text-light ' onClick={logar} >Logar</button>)
                : (<button className='bg-danger btn text-light' onClick={sair}>Sair</button>)}

        </div>
    )

}

export default Header;
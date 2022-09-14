import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Login = () => {

    // USESTATE
    const [pokemon, setPokemon] = useState({});


    // VALOR QUE SERÁ INSERIDO NA URL COMO PARâMETRO => FUNÇÃO QUE VAI RETORNAR UM OBJETO
    const { id } = useParams();

    
    useEffect(() => {

        // DECLARAÇÃO DA FUNÇÃO PARA A REQUISIÇÃO
        const getPokemon = async () => {

            // VARIÁVEL DO USEPARAMS É ATRIBUÍDA AQUI NA URL VIA TAMPLATE STRING
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const dados = await resposta.json()

            // INSERINDO O VALOR DO RESULTADO NO STATE (SETPOKEMON)
            setPokemon(dados)
        }

        // CHAMADA DA FUNÇÃO DECLARADA ACIMA
        getPokemon()

    }, [])

    // USESTATE -> VALOR INICIAL = ARRAY VAZIO
    // console.log('Estado inicial', pokemon)



    return (
        <div className="container mt-3 mb-3">
            <h1>LOGIN</h1>

            <h1>Pokemon com id: {id}, nome: {pokemon.name}</h1>

            <form>
                <label htmlFor="id" className="p-2">Informe o Id do usuário:</label>
                <input className="p-2 me-2" type="number" min="1" id="id" onChange={() => setPokemon(id)} />
                <input type="submit" />

            </form>

            

        </div>

    )

}

export default Login;
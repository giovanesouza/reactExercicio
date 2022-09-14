import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react'
import Home from './pages/Home'
import Contador from './Pages/Contador';
import Perfil from './pages/Perfil';

import { AppContext } from './components/ContextProvider';

const MainRoutes = () => {

    const { logado } = useContext(AppContext )
    console.log('Rotas com context', logado)

    // AULA 3
    return(
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contador' element={<Contador />} />
          <Route path='/perfil/:id' element={
            logado ? <Perfil /> : <Contato />
          } />
          <Route path='/pokemon/:id' element={<Pokemon />} />
        </Routes>
    )
}

export default MainRoutes
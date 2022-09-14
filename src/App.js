import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'
import Contador from './Pages/Contador';
import Login from './Pages/Login';
import Perfil from './Pages/Perfil';
import Header from './Components/Header'
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import { ContextProvider } from './Components/ContextProvider';




function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contador' element={<Contador />} />
          <Route path='/login/:id' element={<Login />} />

          {/* ROTA DINÂMICA COM UM VALOR QUE SERÁ ATRIBUÍDO VIA URL*/}
         <Route path='/perfil/:id' element={<Perfil />} />
        </Routes>
        <Footer>
          <h5>Footer com Children</h5>
          <p>Giovane</p>
        </Footer>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;


import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Contador from './Pages/Contador';
import Header from './Components/Header'
import Menu from './Components/Menu';
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contador' element={<Contador />} />
      </Routes>
      <Footer>
        <h5>Footer com Children</h5>
        <p>Giovane</p>
      </Footer>
    </BrowserRouter>
  );
}

export default App;

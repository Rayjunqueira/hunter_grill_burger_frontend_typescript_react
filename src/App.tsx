import './App.css';

import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Menupage from './Pages/Menupage';
import Drinkpage from './Pages/Drinkpage';
import Contactpage from './Pages/Contactpage';
import Notfindpage from './Pages/Notfindpage';
import Cartpage from './Pages/Cartpage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/menu' element={<Menupage />} />
      <Route path='/cart' element={<Cartpage />} />
      <Route path='/drinks' element={<Drinkpage />} />
      <Route path='/contact' element={<Contactpage />} />
      <Route path='/errorfind' element={<Notfindpage />} />
    </Routes>
  );
}

export default App;

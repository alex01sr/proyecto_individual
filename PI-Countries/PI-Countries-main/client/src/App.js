import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import DetailCountry from './Components/DetailCountry';
import Nav from './Components/Nav';
import CrearActividad from './Components/CrearActividad';
import AgregarActividad from './Components/AgregarActividad';

function App() {
  return (
    <div className="App">
      <Routes><Route path="/home/*" element={<Nav/>}/></Routes>
      
      <Routes>
      <Route path="/"  element={<Landing/>}/>
      
      <Route  path="/home" element={<Home/>}/>
      <Route  path="/home/crearactividad" element={<CrearActividad/>}/>
      <Route  path="/home/crearactividad/agregaractividad" element={<AgregarActividad/>}/>

      <Route path="/home/:id" element={<DetailCountry/>}/>
      
     </Routes>
    eso tilin
    </div>
  );
}

export default App;

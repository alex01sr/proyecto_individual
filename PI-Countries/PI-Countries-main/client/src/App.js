import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Nav from './Components/Nav';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/"   element={<Landing/>}/>
      
      <Route exact path="/home" element={<Home/>}/>
     </Routes>
    eso tilin
    </div>
  );
}

export default App;

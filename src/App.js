import React from 'react';
import './index.css';
import Login from './pagina/Login';
import Signup from './pagina/Signup';
import Sigin from './pagina/Sigin';
import {useState} from "react"
import {
BrowserRouter,
Routes,
Route,
} from "react-router-dom";
import './App.css';
import ContextoTema from './ContextoTema';


function App() {

  
  const [tema, setTema] = useState('0')
  const [corzinha, setCorzinha] = useState('1')
  
  
  function mudaCor(cor){
    setCorzinha(cor)
    localStorage.setItem('corzinha', cor)
  }

  function mudaTema(){
    setTema(tema == '0' ? '1' : '0')
    localStorage.setItem('tema', tema)

    // localStorage.setItem('tema', (tema== '0' ? '1' : '0'))
  }
  

  

  return (
    <ContextoTema.Provider value={ {tema, mudaTema, corzinha, mudaCor} }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/sigin" element={<Sigin />}/>
        </Routes>
      </BrowserRouter>
      </ContextoTema.Provider>
  );
}

export default App;
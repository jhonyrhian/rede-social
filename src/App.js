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

  var temaLocalStorage = localStorage.getItem("tema")
  var corLocalStorage = localStorage.getItem("cor")
  

  const [tema, setTema] = useState(temaLocalStorage ? temaLocalStorage : '0')
  const [cor, setCor] = useState(corLocalStorage ? corLocalStorage : '0')

  function mudaCor(cor){
    setCor(cor)
    localStorage.setItem('cor', cor)
    console.log(localStorage.getItem('cor'))
  }

  function mudaTema(){
    setTema(tema == '0' ? '1' : '0')
    
    if(localStorage.getItem('tema') == '0'){
      localStorage.setItem('tema', '1')
    }else{
      localStorage.setItem('tema', '0')
    }
  }
  

  

  return (
    <ContextoTema.Provider value={ {tema, mudaTema, cor, mudaCor} }>
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
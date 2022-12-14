import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"
import LoginPage from "./Components/LoginPage"
import SignUpPage from "./Components/SignUpPage";
import TelaPlanos from "./Components/TelaPlanos";
import TelaPlano from "./Components/TelaPlano";
import TelaHome from "./Components/TelaHome" 


import TokenContext from "./Contexts/AuthContext";

export default function App() {

  const [member, setMember] = useState()
  const [item, setItem] = useState();
  const [dadosHome, setDadosHome] = useState()

  return (
    <TokenContext.Provider value={{ member, setMember, item, setItem, dadosHome, setDadosHome}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} /> 
         <Route path="/subscriptions" element={<TelaPlanos />}/> 
         <Route path="/subscriptions/:planoID" element={<TelaPlano />} /> 
         <Route path="/home" element={<TelaHome />} /> 
         
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}



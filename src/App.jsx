import { Route, Routes, Navigate } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { MostrarCitas } from './components/MostrarCitas'
import { Altas } from './components/Altas'
import { Buscar } from './components/Buscar'
import AltaDoctores  from './components/AltaDoctores'
import AltaPacientes from './components/AltaPacientes'
import MostrarPacientes from './components/MostrarPacientes'
import MostrarPsicologos from './components/MostrarDoctores'


import './App.css'
import './formStyles.css'; // Nueva importación


function App() {
  return (
    <>
      <div className='w3-container'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/mostrarcitas" element={<MostrarCitas/>}></Route>
          <Route path="/altapacientes" element={<AltaPacientes/>}></Route>
          <Route path="/mostrarpacientes" element={<MostrarPacientes/>}></Route>
          <Route path="/altadoctores" element={<AltaDoctores/>}></Route>
          <Route path="/mostrarpsicologos" element={<MostrarPsicologos/>}></Route>
          <Route path="/altas" element={<Altas/>}></Route>
          <Route path="/buscar" element={<Buscar/>}></Route>
          <Route path="/*" element={<Navigate to='/' />}></Route>
        </Routes>
      </div>
    </>
  )
}   

export default App

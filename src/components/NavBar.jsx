import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="w3-bar w3-light-grey" style={{ textAlign: 'center', overflow: 'hidden' }}>
      <img src="src\images.png" alt="Logo" className="w3-image" style={{ maxWidth: '100px', margin: 'auto' }} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <NavLink to='/' className="w3-bar-item w3-button w3-hover-black" style={{ fontSize: '20px' }}>Home</NavLink>
        <NavLink to='/altadoctores' className="w3-bar-item w3-button w3-hover-black" style={{ fontSize: '20px' }}>Alta Psicólogos</NavLink>
        <NavLink to='/altapacientes' className="w3-bar-item w3-button w3-hover-black" style={{ fontSize: '20px' }}>Alta Pacientes</NavLink>
        <NavLink to='/altas' className="w3-bar-item w3-button w3-hover-black" style={{ fontSize: '20px' }}>Alta Citas</NavLink>
        <NavLink to='/mostrarpsicologos' className="w3-bar-item w3-button w3-hover-black" style={{ fontSize: '20px' }}>Mostrar Psicólogos</NavLink>
        <NavLink to='/mostrarpacientes' className="w3-bar-item w3-button w3-hover-black" style={{ fontSize: '20px' }}>Mostrar Pacientes</NavLink>
        <NavLink to='/mostrarcitas' className="w3-bar-item w3-button w3-hover-black" style={{ fontSize: '20px' }}>Mostrar Citas</NavLink>
      </div>
    </div>
  );
};

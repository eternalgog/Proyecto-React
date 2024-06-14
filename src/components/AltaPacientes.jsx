import React, { useState } from 'react';
import axios from 'axios';

const AltaPacientes = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    email: '',
    edad: '',
    genero: '',
    nss: ''
  });
  const [guardadoExitoso, setGuardadoExitoso] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Guardar en localStorage
    const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
    pacientes.push(formData);
    localStorage.setItem('pacientes', JSON.stringify(pacientes));

    // Guardar en la base de datos SQLite
    try {
      await axios.post('http://localhost:5000/api/pacientes', formData);
      console.log('Paciente guardado en la base de datos remota.');
    } catch (error) {
      console.error('Error al guardar en la base de datos remota:', error);
    }

    // Reiniciar los datos del formulario
    setFormData({
      nombre: '',
      telefono: '',
      direccion: '',
      email: '',
      edad: '',
      genero: '',
      nss: ''
    });

    // Mostrar mensaje de guardado exitoso
    setGuardadoExitoso(true);
    setTimeout(() => {
      setGuardadoExitoso(false);
    }, 3000);
  };

  return (
    <div className="w3-container w3-padding-large">
      <h2 className="w3-text-teal">Alta de Pacientes</h2>
      {guardadoExitoso && <p className="w3-text-green">¡Paciente guardado correctamente!</p>}
      <form onSubmit={handleSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-teal w3-margin">
        {/* Input fields */}
        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-user"></i></div>
          <div className="w3-rest">
            <input className="w3-input w3-border" type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
          </div>
        </div>

        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-phone"></i></div>
          <div className="w3-rest">
            <input className="w3-input w3-border" type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono" required />
          </div>
        </div>

        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-home"></i></div>
          <div className="w3-rest">
            <input className="w3-input w3-border" type="text" name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Dirección" required />
          </div>
        </div>

        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-envelope"></i></div>
          <div className="w3-rest">
            <input className="w3-input w3-border" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          </div>
        </div>

        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-user"></i></div>
          <div className="w3-rest">
            <input className="w3-input w3-border" type="number" name="edad" value={formData.edad} onChange={handleChange} placeholder="Edad" required />
          </div>
        </div>

        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-venus-mars"></i></div>
          <div className="w3-rest">
            <select className="w3-select w3-border" name="genero" value={formData.genero} onChange={handleChange} required>
              <option value="" disabled>Selecciona el género</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>
        </div>

        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-id-card"></i></div>
          <div className="w3-rest">
            <input className="w3-input w3-border" type="text" name="nss" value={formData.nss} onChange={handleChange} placeholder="NSS (Número de Seguridad Social)" required />
          </div>
        </div>

        <button type="submit" className="w3-button w3-block w3-teal w3-padding-large">Guardar Paciente</button>
      </form>
    </div>
  );
}

export default AltaPacientes;

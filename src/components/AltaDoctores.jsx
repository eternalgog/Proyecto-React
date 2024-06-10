import React, { useState } from 'react';

const AltaDoctores = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    enfoque: '',
    telefono: '',
    correo: '',
    rfc: ''
  });
  const [guardadoExitoso, setGuardadoExitoso] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const psicologos = JSON.parse(localStorage.getItem('psicologos')) || [];
    psicologos.push(formData);
    localStorage.setItem('psicologos', JSON.stringify(psicologos));
    // Reiniciar los datos del formulario
    setFormData({
      nombre: '',
      enfoque: '',
      telefono: '',
      correo: '',
      rfc: ''
    });
    // Mostrar el mensaje de guardado exitoso
    setGuardadoExitoso(true);
    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      setGuardadoExitoso(false);
    }, 3000);
  };

  return (
    <div className="w3-container w3-padding-large">
      <h2 className="w3-text-teal">Alta de Psicólogos</h2>
      {guardadoExitoso && <p className="w3-text-green">¡Psicólogo guardado correctamente!</p>}
      <form onSubmit={handleSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-teal w3-margin">
        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-user-md"></i></div>
          <div className="w3-rest">
            <input className="w3-input w3-border" type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
          </div>
        </div>

        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-stethoscope"></i></div>
          <div className="w3-rest">
            <select className="w3-select w3-border" name="enfoque" value={formData.enfoque} onChange={handleChange} required>
              <option value="" disabled>Seleccionar enfoque</option>
              <option value="Individual">Individual</option>
              <option value="De pareja">De pareja</option>
              <option value="De familia">De familia</option>
              <option value="Infantil">Infantil</option>
            </select>
          </div>
        </div>

        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-phone"></i></div>
          <div className="w3-rest">
            <input className="w3-input w3-border" type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono" required />
          </div>
        </div>

        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-envelope"></i></div>
          <div className="w3-rest">
            <input className="w3-input w3-border" type="email" name="correo" value={formData.correo} onChange={handleChange} placeholder="Correo Electrónico" required />
          </div>
        </div>

        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-id-card"></i></div>
          <div className="w3-rest">
            <input className="w3-input w3-border" type="text" name="rfc" value={formData.rfc} onChange={handleChange} placeholder="RFC" required />
          </div>
        </div>

        <button type="submit" className="w3-button w3-block w3-teal w3-padding-large">Guardar Psicólogo</button>
      </form>
    </div>
  );
}

export default AltaDoctores;

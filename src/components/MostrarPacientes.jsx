import React, { useState, useEffect } from 'react';

const MostrarPacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    email: '',
    edad: '',
    genero: '',
    nss: ''
  });

  useEffect(() => {
    const pacientesGuardados = JSON.parse(localStorage.getItem('pacientes')) || [];
    setPacientes(pacientesGuardados);
  }, []);

  const handleEliminar = (index) => {
    const pacientesActualizados = [...pacientes];
    pacientesActualizados.splice(index, 1);
    localStorage.setItem('pacientes', JSON.stringify(pacientesActualizados));
    setPacientes(pacientesActualizados);
  };

  const handleModificar = (index) => {
    setEditIndex(index);
    setEditFormData(pacientes[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };

  const handleGuardar = (index) => {
    const pacientesActualizados = [...pacientes];
    pacientesActualizados[index] = editFormData;
    localStorage.setItem('pacientes', JSON.stringify(pacientesActualizados));
    setPacientes(pacientesActualizados);
    setEditIndex(null);
  };

  return (
    <div className="w3-container w3-padding-large">
      <h2 className="w3-text-teal">Pacientes Dados de Alta</h2>
      <div className="w3-container w3-card-4 w3-light-grey w3-text-teal w3-margin">
        {pacientes.length > 0 ? (
          pacientes.map((paciente, index) => (
            <div key={index} className="w3-container w3-border-bottom w3-margin-bottom">
              {editIndex === index ? (
                <div>
                  <p><strong>Nombre:</strong>
                    <input
                      className="w3-input w3-border"
                      type="text"
                      name="nombre"
                      value={editFormData.nombre}
                      onChange={handleChange}
                    />
                  </p>
                  <p><strong>Teléfono:</strong>
                    <input
                      className="w3-input w3-border"
                      type="text"
                      name="telefono"
                      value={editFormData.telefono}
                      onChange={handleChange}
                    />
                  </p>
                  <p><strong>Dirección:</strong>
                    <input
                      className="w3-input w3-border"
                      type="text"
                      name="direccion"
                      value={editFormData.direccion}
                      onChange={handleChange}
                    />
                  </p>
                  <p><strong>Email:</strong>
                    <input
                      className="w3-input w3-border"
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleChange}
                    />
                  </p>
                  <p><strong>Edad:</strong>
                    <input
                      className="w3-input w3-border"
                      type="number"
                      name="edad"
                      value={editFormData.edad}
                      onChange={handleChange}
                    />
                  </p>
                  <p><strong>Género:</strong>
                    <input
                      className="w3-input w3-border"
                      type="text"
                      name="genero"
                      value={editFormData.genero}
                      onChange={handleChange}
                    />
                  </p>
                  <p><strong>NSS:</strong>
                    <input
                      className="w3-input w3-border"
                      type="text"
                      name="nss"
                      value={editFormData.nss}
                      onChange={handleChange}
                    />
                  </p>
                  <button className="w3-button w3-teal w3-margin-right" onClick={() => handleGuardar(index)}>Guardar</button>
                  <button className="w3-button w3-red" onClick={() => setEditIndex(null)}>Cancelar</button>
                </div>
              ) : (
                <div>
                  <p><strong>Nombre:</strong> {paciente.nombre}</p>
                  <p><strong>Teléfono:</strong> {paciente.telefono}</p>
                  <p><strong>Dirección:</strong> {paciente.direccion}</p>
                  <p><strong>Email:</strong> {paciente.email}</p>
                  <p><strong>Edad:</strong> {paciente.edad}</p>
                  <p><strong>Género:</strong> {paciente.genero}</p>
                  <p><strong>NSS:</strong> {paciente.nss}</p>
                  <div className="w3-container">
                    <button className="w3-button w3-teal w3-margin-right" onClick={() => handleModificar(index)}>Modificar</button>
                    <button className="w3-button w3-red" onClick={() => handleEliminar(index)}>Eliminar</button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No hay pacientes dados de alta.</p>
        )}
      </div>
    </div>
  );
};

export default MostrarPacientes;

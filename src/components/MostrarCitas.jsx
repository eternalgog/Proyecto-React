import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MostrarCitas = () => {
  const [citas, setCitas] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({
    paciente: '',
    fecha: '',
    hora: '',
    doctor: '',
    motivo: ''
  });

  useEffect(() => {
    // Función para obtener las citas desde el servidor
    const fetchCitas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/citas');
        setCitas(response.data); // Asigna las citas obtenidas del servidor al estado local
      } catch (error) {
        console.error('Error al obtener las citas:', error);
      }
    };

    fetchCitas(); // Llama a la función para cargar las citas cuando el componente se monta
  }, []);

  const handleEliminar = async (index) => {
    try {
      // Realiza la solicitud DELETE al servidor para eliminar la cita por su ID
      await axios.delete(`http://localhost:5000/api/citas/${citas[index].id}`);
      
      // Actualiza el estado local de citas después de eliminar
      const citasActualizadas = [...citas];
      citasActualizadas.splice(index, 1);
      setCitas(citasActualizadas);
    } catch (error) {
      console.error('Error al eliminar la cita:', error);
    }
  };

  const handleModificar = (index) => {
    setEditIndex(index);
    setEditFormData(citas[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };

  const handleGuardar = async (index) => {
    try {
      // Realiza la solicitud PUT al servidor para actualizar la cita por su ID
      await axios.put(`http://localhost:5000/api/citas/${citas[index].id}`, editFormData);
      
      // Actualiza el estado local de citas después de guardar los cambios
      const citasActualizadas = [...citas];
      citasActualizadas[index] = editFormData;
      setCitas(citasActualizadas);
      setEditIndex(null);
    } catch (error) {
      console.error('Error al guardar la cita:', error);
    }
  };

  return (
    <div className="w3-container w3-padding-large">
      <h2 className="w3-text-teal">Citas Guardadas</h2>
      <div className="w3-container w3-card-4 w3-light-grey w3-text-teal w3-margin">
        {citas.length > 0 ? (
          citas.map((cita, index) => (
            <div key={index} className="w3-container w3-border-bottom w3-margin-bottom">
              {editIndex === index ? (
                <div>
                  <p><strong>Paciente:</strong>
                    <input
                      className="w3-input w3-border"
                      type="text"
                      name="paciente"
                      value={editFormData.paciente}
                      onChange={handleChange}
                    />
                  </p>
                  <p><strong>Fecha:</strong>
                    <input
                      className="w3-input w3-border"
                      type="date"
                      name="fecha"
                      value={editFormData.fecha}
                      onChange={handleChange}
                    />
                  </p>
                  <p><strong>Hora:</strong>
                    <input
                      className="w3-input w3-border"
                      type="time"
                      name="hora"
                      value={editFormData.hora}
                      onChange={handleChange}
                    />
                  </p>
                  <p><strong>Psicologo:</strong>
                    <input
                      className="w3-input w3-border"
                      type="text"
                      name="doctor"
                      value={editFormData.doctor}
                      onChange={handleChange}
                    />
                  </p>
                  <p><strong>Motivo:</strong>
                    <textarea
                      className="w3-input w3-border"
                      name="motivo"
                      value={editFormData.motivo}
                      onChange={handleChange}
                    />
                  </p>
                  <button className="w3-button w3-teal w3-margin-right" onClick={() => handleGuardar(index)}>Guardar</button>
                  <button className="w3-button w3-red" onClick={() => setEditIndex(null)}>Cancelar</button>
                </div>
              ) : (
                <div>
                  <p><strong>Paciente:</strong> {cita.paciente}</p>
                  <p><strong>Fecha:</strong> {cita.fecha}</p>
                  <p><strong>Hora:</strong> {cita.hora}</p>
                  <p><strong>Psicologo:</strong> {cita.doctor}</p>
                  <p><strong>Motivo:</strong> {cita.motivo}</p>
                  <div className="w3-container">
                    <button className="w3-button w3-teal w3-margin-right" onClick={() => handleModificar(index)}>Modificar</button>
                    <button className="w3-button w3-red" onClick={() => handleEliminar(index)}>Eliminar</button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No hay citas guardadas.</p>
        )}
      </div>
    </div>
  );
};

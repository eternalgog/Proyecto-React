import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Altas = () => {
  const [formData, setFormData] = useState({
    paciente: '',
    fecha: '',
    hora: '',
    doctor: '',
    motivo: ''
  });
  const [doctores, setDoctores] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    obtenerDoctores();
    obtenerPacientes();
  }, []);

  const obtenerDoctores = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/psicologos');
      setDoctores(response.data);
    } catch (error) {
      console.error('Error al obtener psicólogos:', error);
    }
  };

  const obtenerPacientes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/pacientes');
      setPacientes(response.data);
    } catch (error) {
      console.error('Error al obtener pacientes:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/citas', formData);
      setEnviado(true);
      setTimeout(() => {
        setEnviado(false);
      }, 3000);
      setFormData({
        paciente: '',
        fecha: '',
        hora: '',
        doctor: '',
        motivo: ''
      });
    } catch (error) {
      console.error('Error al enviar la cita:', error);
    }
  };

  return (
    <div className="w3-container w3-padding-large">
      <h2 className="w3-text-teal">Formulario de Citas</h2>
      {enviado && <p className="w3-text-green">¡Datos de alta enviados correctamente!</p>}
      <form onSubmit={handleSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-teal w3-margin">
        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-user"></i></div>
          <div className="w3-rest">
            <select className="w3-select w3-border" name="paciente" value={formData.paciente} onChange={handleChange} required>
              <option value="" disabled>Selecciona un paciente</option>
              {pacientes.map((paciente, index) => (
                <option key={index} value={paciente.nombre}>{paciente.nombre}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-calendar"></i></div>
          <div className="w3-rest">
            <input className="w3-input w3-border" type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
          </div>
        </div>

        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-clock-o"></i></div>
          <div className="w3-rest">
            <input className="w3-input w3-border" type="time" name="hora" value={formData.hora} onChange={handleChange} required />
          </div>
        </div>

        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-user-md"></i></div>
          <div className="w3-rest">
            <select className="w3-select w3-border" name="doctor" value={formData.doctor} onChange={handleChange} required>
              <option value="" disabled>Selecciona un psicólogo</option>
              {doctores.map((doctor, index) => (
                <option key={index} value={doctor.nombre}>{doctor.nombre}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="w3-row w3-section">
          <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-pencil"></i></div>
          <div className="w3-rest">
            <textarea className="w3-input w3-border" name="motivo" value={formData.motivo} onChange={handleChange} placeholder="Motivo de la cita" required></textarea>
          </div>
        </div>

        <button type="submit" className="w3-button w3-block w3-teal w3-padding-large">Enviar</button>
      </form>
    </div>
  );
};

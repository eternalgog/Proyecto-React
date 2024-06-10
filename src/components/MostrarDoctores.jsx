import React, { useEffect, useState } from 'react';

const MostrarDoctores = () => {
  const [psicologos, setPsicologos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedPsicologo, setEditedPsicologo] = useState({
    nombre: '',
    enfoque: '',
    telefono: '',
    correo: '',
    rfc: ''
  });

  useEffect(() => {
    const psicologosGuardados = JSON.parse(localStorage.getItem('psicologos')) || [];
    setPsicologos(psicologosGuardados);
  }, []);

  const handleDelete = (index) => {
    const updatedPsicologos = [...psicologos];
    updatedPsicologos.splice(index, 1);
    localStorage.setItem('psicologos', JSON.stringify(updatedPsicologos));
    setPsicologos(updatedPsicologos);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedPsicologo(psicologos[index]);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedPsicologo({
      nombre: '',
      enfoque: '',
      telefono: '',
      correo: '',
      rfc: ''
    });
  };

  const handleSaveEdit = () => {
    const updatedPsicologos = [...psicologos];
    updatedPsicologos[editingIndex] = editedPsicologo;
    localStorage.setItem('psicologos', JSON.stringify(updatedPsicologos));
    setPsicologos(updatedPsicologos);
    setEditingIndex(null);
    setEditedPsicologo({
      nombre: '',
      enfoque: '',
      telefono: '',
      correo: '',
      rfc: ''
    });
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditedPsicologo({
      ...editedPsicologo,
      [name]: value
    });
  };

  return (
    <div className="w3-container w3-padding-large">
      <h2 className="w3-text-teal">Psicólogos Registrados</h2>
      <div className="w3-container w3-card-4 w3-light-grey w3-text-teal w3-margin">
        {psicologos.length > 0 ? (
          psicologos.map((psicologo, index) => (
            <div key={index} className="w3-container w3-border-bottom w3-margin-bottom">
              {editingIndex === index ? (
                <>
                  <div className="w3-row w3-section">
                    <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-user-circle-o"></i></div>
                    <div className="w3-rest">
                      <input className="w3-input w3-border" type="text" name="nombre" value={editedPsicologo.nombre} onChange={handleChangeEdit} placeholder="Nombre" required />
                    </div>
                  </div>

                  <div className="w3-row w3-section">
                    <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-handshake-o"></i></div>
                    <div className="w3-rest">
                      <select className="w3-select w3-border" name="enfoque" value={editedPsicologo.enfoque} onChange={handleChangeEdit} required>
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
                      <input className="w3-input w3-border" type="tel" name="telefono" value={editedPsicologo.telefono} onChange={handleChangeEdit} placeholder="Teléfono" required />
                    </div>
                  </div>

                  <div className="w3-row w3-section">
                    <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-envelope"></i></div>
                    <div className="w3-rest">
                      <input className="w3-input w3-border" type="email" name="correo" value={editedPsicologo.correo} onChange={handleChangeEdit} placeholder="Correo Electrónico" required />
                    </div>
                  </div>

                  <div className="w3-row w3-section">
                    <div className="w3-col" style={{ width: "50px" }}><i className="w3-xxlarge fa fa-id-card"></i></div>
                    <div className="w3-rest">
                      <input className="w3-input w3-border" type="text" name="rfc" value={editedPsicologo.rfc} onChange={handleChangeEdit} placeholder="RFC" required />
                    </div>
                  </div>
                  <div className="w3-row w3-section">
                    <button onClick={handleSaveEdit} className="w3-button w3-teal w3-small w3-margin-right">Guardar</button>
                    <button onClick={handleCancelEdit} className="w3-button w3-red w3-small">Cancelar</button>
                  </div>
                </>
              ) : (
                <>
                  <p><strong>Nombre:</strong> {psicologo.nombre}</p>
                  <p><strong>Enfoque:</strong> {psicologo.enfoque}</p>
                  <p><strong>Teléfono:</strong> {psicologo.telefono}</p>
                  <p><strong>Correo:</strong> {psicologo.correo}</p>
                  <p><strong>RFC:</strong> {psicologo.rfc}</p>
                  <div className="w3-row w3-section">
                    <button onClick={() => handleEdit(index)} className="w3-button w3-teal w3-small w3-margin-right">Editar</button>
                    <button onClick={() => handleDelete(index)} className="w3-button w3-red w3-small">Eliminar</button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p>No hay psicólogos registrados.</p>
        )}
      </div>
    </div>
  );
};

export default MostrarDoctores;

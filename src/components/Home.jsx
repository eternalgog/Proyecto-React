import React from 'react';

export const Home = () => {
  return (
    <div className="w3-container" style={{ textAlign: 'center' }}>
      <h1 className="w3-text-teal" style={{ fontSize: '50px' }}>¡Bienvenido a PsicoVida!</h1>
      <p className="w3-text-grey w3-padding" style={{ fontSize: '20px', marginTop: '20px', maxWidth: '600px', margin: 'auto', boxShadow: '0 3px 10px 0 rgba(0, 0, 0, 0.3)', borderRadius: '8px' }}>
        PsicoVida es una plataforma diseñada para gestionar eficientemente las citas en la clínica, dar de altas psicólogos y pacientes para tener un control de los datos. ¡Para poder hacer citas, es necesario tener psicólogos y pacientes!
      </p>
    </div>
  );
}

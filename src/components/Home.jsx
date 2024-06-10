import React from 'react';

export const Home = () => {
  return (
    <div className="w3-container" style={{ textAlign: 'center' }}>
      <h1 className="w3-text-teal" style={{ fontSize: '50px' }}>¡Bienvenido a PsicoVida!</h1>
      <p className="w3-text-grey w3-padding" style={{ fontSize: '20px', marginTop: '20px', maxWidth: '600px', margin: 'auto', boxShadow: '0 3px 10px 0 rgba(0, 0, 0, 0.3)', borderRadius: '8px' }}>
        PsicoVida es una plataforma diseñada para gestionar eficientemente las citas, asignar psicólogos a pacientes y mantener un control exhaustivo de los datos. ¡Explora todas las funcionalidades que ofrecemos para mejorar tu experiencia en la gestión de consultas psicológicas!
      </p>
    </div>
  );
}

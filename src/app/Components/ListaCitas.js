import React from 'react';
import CitaCard from './CitaCard';

const ListaCitas = ({ citas, eliminarCita }) => {
  return (
    <div>
      <h2>Administra tus citas</h2>
      {citas.map(cita => (
        <CitaCard
          key={cita.id}
          cita={cita}
          eliminarCita={eliminarCita}
        />
      ))}
    </div>
  );
};

export default ListaCitas;
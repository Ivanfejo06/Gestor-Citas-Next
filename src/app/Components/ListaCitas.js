import React from 'react';
import CitaCard from './CitaCard';
import styles from './ListaCitas.module.css';

const ListaCitas = ({ citas, eliminarCita }) => {
  return (
    <div>
      <h2>Administra tus citas</h2>
      <div className={styles.centro}>
        {citas.map(cita => (
          <CitaCard
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
          />
        ))}
      </div>
    </div>
  );
};

export default ListaCitas;
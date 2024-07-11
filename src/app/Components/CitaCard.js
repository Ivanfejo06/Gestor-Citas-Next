import React from 'react';
import Swal from 'sweetalert2';
import styles from '../styles/ListaCitas.css';

const CitaCard = ({ cita, eliminarCita }) => {
  const handleDelete = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción no se puede deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarCita(cita.id);

        Swal.fire(
          '¡Eliminada!',
          'La cita ha sido eliminada.',
          'success'
        );
      }
    });
  };

  return (
    <div className={styles.citaCard}>
      <p>Mascota: <span>{cita.nombreMascota}</span></p>
      <p>Dueño: <span>{cita.nombreDueno}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Síntomas: <span>{cita.sintomas}</span></p>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default CitaCard;
'use client'; // Asegúrate de agregar esta línea al inicio del archivo

import React, { useState } from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            className={styles.formInput}
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="correo">Correo Electrónico:</label>
          <input
            id="correo"
            name="correo"
            type="email"
            className={styles.formInput}
            value={formData.correo}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            className={styles.formTextarea}
            value={formData.mensaje}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.formButton}>Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
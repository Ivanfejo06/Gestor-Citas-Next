"use client"; 
import React, { useState, useEffect } from 'react';
import FormularioCita from '../Components/FormularioCita';
import ListaCitas from '../Components/ListaCitas';

const Reservas = () => {
  // Inicializa el estado con citas guardadas en localStorage si existen
  const [citas, setCitas] = useState(() => {
    const savedCitas = localStorage.getItem('citas');
    return savedCitas ? JSON.parse(savedCitas) : [];
  });

  // Actualiza localStorage cada vez que cambian las citas
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (cita) => {
    cita.id = new Date().getTime();
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    setCitas(citas.filter(cita => cita.id !== id));
  };

  return (
    <div>
      <FormularioCita agregarCita={agregarCita} />
      <ListaCitas citas={citas} eliminarCita={eliminarCita} />
    </div>
  );
};

export default Reservas;
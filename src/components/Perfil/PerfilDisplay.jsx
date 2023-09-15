import React from 'react'
import './PerfilDisplay.css'
const PerfilDisplay = ({
  nombre,
  apellido,
  telefono,
  direccion,
  facebook,
  instagram,
  foto,
}) => {
  console.log(nombre)
  return (
    <div className="container-perfil">
      <label htmlFor="">{foto}</label>
      <div className="group">
        <label htmlFor="">Nombre: {nombre}</label>
        <label htmlFor="">Apellido: {apellido}</label>
        <label htmlFor="">Telefono: {telefono}</label>
      </div>
      <div className="group">
        <label htmlFor="">Dirección: {direccion}</label>
        <label htmlFor="">Facebook: {facebook}</label>
        <label htmlFor="">Instagram: {instagram}</label>
      </div>
    </div>
  )
}
export default PerfilDisplay

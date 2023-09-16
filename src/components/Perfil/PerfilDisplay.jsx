import React from 'react'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
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
    <div className="container-perfil-display">
      <div className="perfil-display-card">
        <h2 className="display-title">Mi Perfil</h2>
        {/* <label htmlFor="">{foto}</label> */}
        <div className="img-container">
          <img
            className="img-perfil"
            src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg"
            alt=""
          />
        </div>
        <div className="group-perfil-display">
          <label htmlFor="">
            <b>Nombre:</b> {nombre}
          </label>
          <label htmlFor="">
            <b>Apellido:</b> {apellido}
          </label>
        </div>
        <div className="group-perfil-display">
          <label htmlFor="">
            <b>Telefono:</b> {telefono}
          </label>
          <label htmlFor="">
            <b>Dirección:</b> {direccion}
          </label>
        </div>
        <div className="group-perfil-display">
          <label htmlFor="">
            <FiFacebook className='red-social'/>
            <a href={facebook}>{facebook}</a>
          </label>
          <label htmlFor="">
            <FiInstagram className='red-social'/>
            <a href={instagram}>{instagram}</a>
          </label>
        </div>
      </div>
    </div>
  )
}
export default PerfilDisplay

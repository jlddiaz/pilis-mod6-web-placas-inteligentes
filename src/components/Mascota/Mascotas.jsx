import Mascota from './Mascota'
import './Mascotas.css'
const Mascotas = ({ mascotas }) => {
  return (
    <div className="container__card">
      {mascotas? (
        mascotas.map((mascota) => (
          <Mascota
            key={mascota.idMascota}
            nombre={mascota.nombre}
            sexo={mascota.sexo}
          />
        ))
      ) : (
        <div>
          <h1 className="mesage">No hay mascotas asociadas</h1>
        </div>
      )}
    </div>
  )
}
export default Mascotas

import './Mascota.css'
import mascotaDefault from '../../assets/image/mascotasdefault.jpg'
const Mascota = ({
  nombre,
  sexo,
  vacunas,
  edad,
  foto,
  observaciones,
  perfil,
}) => {
  const isValidUrl = (urlString) => {
    try {
      return Boolean(new URL(urlString))
    } catch (e) {
      return false
    }
  }
  return (
    <div className="card">
      <h2 className="card-title">{nombre}</h2>
      <div className="container-img-objeto">
        {isValidUrl(foto) ? (
          <img src={foto} alt="" />
        ) : (
          <img src={mascotaDefault} alt="" />
        )}
      </div>
      <div className="card-desc">
        <p><b>Sexo: </b>{sexo}</p>
        <p><b>Vacunas: </b>{vacunas}</p>
        <p><b>Observaciones:</b> {observaciones}</p>
        {/* <p>En caso de encontrar mi mascota, agradeceré me contactes.</p> */}
        {perfil && (
          <>
            <p>
              <b>Dueño:</b> {perfil.nombre} {perfil.apellido}
            </p>
            <p><b>Telefono: </b>{perfil.telefono}</p>
            <p><b>Dirección: </b>{perfil.direccion}</p>
          </>
        )}
      </div>
    </div>
  )
}
export default Mascota

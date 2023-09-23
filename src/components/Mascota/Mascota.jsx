import './Mascota.css'
import mascotaDefault from '../../assets/image/mascotasdefault.jpg'
import imagen_whatsapp from '../../assets/image/whatsapp.png'
import facebook from '../../assets/image/facebook.png'
import instagram from '../../assets/image/instagram.png'
import { useAuth } from '../../contexts/AuthContext'

const Mascota = ({
  nombre,
  sexo,
  vacunas,
  edad,
  foto,
  observaciones,
  perfil,
}) => {
  const auth = useAuth()
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
        <p>
          <b>Sexo: </b>
          {sexo}
        </p>
        <p>
          <b>Vacunas: </b>
          {vacunas}
        </p>
        <p>
          <b>Observaciones:</b> {observaciones}
        </p>

        {/* <p>En caso de encontrar mi mascota, agradeceré me contactes.</p> */}
        {perfil && (
          <>
            <p>
              <b>Dueño estoy:</b> {perfil.nombre} {perfil.apellido}
            </p>
            <p>
              <b>Telefono: </b>
              {perfil.telefono}
            </p>
            <p>
              <b>Dirección: </b>
              {perfil.direccion}
            </p>
          </>
        )}
      </div>
      <div className="contacto-responsable">
        <a href={auth.perfil.instagram} target="_blank" rel="noreferrer">
          <img className="imagen_social" src={instagram} alt="instagram" />
        </a>
        <a href={auth.perfil.facebook} target="_blank" rel="noreferrer">
          <img className="imagen_social" src={facebook} alt="facebook" />
        </a>
        <a
          href={`https://wa.me/${auth.perfil.telefono}`}
          target="_blank"
          rel="noreferrer"
        >
          <img className="imagen_social" src={imagen_whatsapp} alt="whatsapp" />
        </a>
      </div>
    </div>
  )
}
export default Mascota

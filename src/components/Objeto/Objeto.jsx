import './Objeto.css'
import imagen_whatsapp from '../../assets/image/whatsapp.png'
import facebook from '../../assets/image/facebook.png'
import instagram from '../../assets/image/instagram.png'
import objetoDefault from '../../assets/image/objetoDefault.jpg'
import { useAuth } from '../../contexts/AuthContext'
const Objeto = ({ nombre, observaciones, foto, perfil }) => {
  const auth = useAuth()
  const isValidUrl = (urlString) => {
    try {
      return Boolean(new URL(urlString))
    } catch (e) {
      return false
    }
  }
  return (
    <div className="card-objeto">
      <h2 className="card-objeto-title"> {nombre} </h2>
      <div className="container-img-objeto">
        {isValidUrl(foto) ? (
          <img src={foto} alt="" />
        ) : (
          <img src={objetoDefault} alt="" />
        )}
      </div>
      <div className="card-objeto-desc">
        <p>
          <b>Observaciones: </b>
          {observaciones}
        </p>
        {perfil && (
          <>
            <p>
              <b>Dueño:</b> {perfil.nombre} {perfil.apellido}
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
export default Objeto

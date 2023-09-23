import './Mascota.css'
import mascotaDefault from '../../assets/image/mascotasdefault.jpg'
import imagen_whatsapp from '../../assets/image/whatsapp.png'
import facebook from '../../assets/image/facebook.png'
import instagram from '../../assets/image/instagram.png'


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

        <div className="contacto-responsable">

                  <a href="http://www.instagram.com" target="_blank">
                    <img className="imagen_social" src={instagram} />{' '}
                  </a>
                 
                  <a href="http://www.facebook.com" target="_blank">
                    <img className="imagen_social" src={facebook} />{' '}
                  </a>
                  <a href={`https://wa.me/3884130325`}  target="_blank">
                    <img className="imagen_social" src={imagen_whatsapp} />{' '}
                    </a>
                   

                </div>
           


        {/* <p>En caso de encontrar mi mascota, agradeceré me contactes.</p> */}
        {perfil && (
          <>
            <p>
              <b>Dueño estoy:</b> {perfil.nombre} {perfil.apellido}
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

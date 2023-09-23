import './Objeto.css'
import imagen_whatsapp from '../../assets/image/whatsapp.png'
import facebook from '../../assets/image/facebook.png'
import instagram from '../../assets/image/instagram.png'
import objetoDefault from '../../assets/image/objetoDefault.jpg'
const Objeto = ({ nombre, observaciones, foto, perfil }) => {
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
        {' '}
        <p>
          <b>Observaciones: </b>
          {observaciones}
        </p>

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
    </div>
  )
}
export default Objeto

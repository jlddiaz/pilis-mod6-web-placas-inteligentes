import './Objeto.css'
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

import './Objetos.css'
import Objeto from './Objeto'

const Objetos = ({ objetos }) => {
  return (
    <div className="container__card">
      {objetos? (
        objetos.map((objeto) => (
          <Objeto
            key={objeto.idObjeto}
            nombre={objeto.nombre}
            sexo={objeto.observaciones}
          />
        ))
      ) : (
        <div>
          <h1 className="mesage">No hay objetos asociadas</h1>
        </div>
      )}
    </div>
  )
}
export default Objetos
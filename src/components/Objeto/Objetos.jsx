import './Objetos.css'
import Objeto from './Objeto'

const Objetos = ({ objetos }) => {
  console.log(objetos)
  return (
    <div className="container__card">
      {objetos? (
        objetos.map((objeto) => (
          <Objeto
            key={objeto.idObjeto}
            nombre={objeto.nombre}
            observaciones={objeto.observaciones}
            foto={objeto.foto}
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
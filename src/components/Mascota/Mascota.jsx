import './Mascota.css'
const Mascota = ({ nombre, sexo, vacunas, fechaNacimiento, foto, observaciones }) => {
  return (
    <div className="card__father">
      <div className="card">
        <div className="bg"></div>
        <div className="body__card_front">
          <h1 className="titleFront">{nombre}</h1>
        </div>
        <div className="card__back">
          <div className="body__card_back">
            <p>Sexo: {sexo}</p>
            <p>Longitude:  </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Mascota

import './Objeto.css'
const Objeto = ({ nombre, observaciones, foto }) => {
  return (
    <div className="card__father">
      <div className="card">
        <div className="bg"></div>
        <div className="body__card_front">
          <h1 className="titleFront">{nombre}</h1>
        </div>
        <div className="card__back">
          <div className="body__card_back">
            <p>obervaciones: {observaciones}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Objeto

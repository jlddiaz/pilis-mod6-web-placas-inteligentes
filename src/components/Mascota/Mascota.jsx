import './Mascota.css'
const Mascota = ({ nombre, sexo }) => {
  return (
    
      <div className="card">
          <h2 class="card-title">{nombre}</h2>
      <p className='card-desc'>En caso de encontrar mi mascota, agradeceré me contactes.</p> 
          
        </div>
      
  )
}
export default Mascota

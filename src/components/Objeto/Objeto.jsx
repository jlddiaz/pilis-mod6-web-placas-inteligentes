import './Objeto.css'
const Objeto = ({ nombre, observaciones }) => {
  console.log(observaciones)
  return (
    <div class="card-objeto">
          <h2 class="card-objeto-title"> {nombre} </h2>
     
       
            <p class='card-objeto-desc'> {observaciones}</p>
          </div>
        
  )
}
export default Objeto

import './Home.css'
import huella from '../../assets/image/huellas3.png'

const Home = () => {
  return (
    <>
      <div className="main-container">
      <section>
      <div id="showcase">
        <div className="container">
          <div className="showcase-text">
            <h1>
              <span className="title-one">Siguiendo huellas</span><br />
          <span className="title-two">Pioneros en la identificación de mascotas y objetos con la tecnología QR. </span><br />
              </h1>
            
                            
          </div>
          <div className="showcase-img">
            <img src={huella} alt="showcase"/>
            
          </div>        
          
        </div>
      </div>
    </section>
      </div>
    </>
  )
}

export default Home

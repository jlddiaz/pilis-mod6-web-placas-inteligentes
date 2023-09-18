import './Home.css'
import huellas3 from '../../assets/image/huellas3.png'
import final from '../../assets/image/final.png'
const Home = () => {
  return (
    <>
      <section id="home">
        <div id="showcase">
          <div className="container-home">
            <div className="showcase-text-home">
              <h1>
                <span className="title-one-home">SURE PAWS</span>
                <br />
                </h1>
                <span className="title-two-home">
                  Pioneros en la región en la identificación de mascotas y objetos con la
                  tecnología QR{' '}
                </span>
                
              
            </div>

            <div className="showcase-img-home">
              <img className="img-home" src={huellas3} alt="" />
            </div>
          </div>
        </div>
      </section>
     
    </>
  )
}

export default Home

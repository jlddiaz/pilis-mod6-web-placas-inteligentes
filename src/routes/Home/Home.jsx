import './Home.css'
import huellas3 from '../../assets/image/huellas3.jpg'
import final from '../../assets/image/final.png'
const Home = () => {
  return (
    <>
      <section id="home">
        <div id="showcase">
          <div className="container">
            <div className="showcase-text">
              <h1>
                <span className="title-one">Siguiendo huellas</span>
                <br />

                <span className="title-two">
                  Pioneros en la identificación de mascotas y objetos con la
                  tecnología QR{' '}
                </span>
                <br />
              </h1>
            </div>

            <div className="showcase-img">
              <img className="showcase-img" src={huellas3} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div id="about">
          <div className="container">
            <div className="about-img">
              <img src={final} alt="showcase" />
            </div>
            <div className="about-text">
              <h1>
                <span className="title-one">Siguiendo huellas</span>
              </h1>
              <p id="about-text-p">
                Siguiendo huellas nace en el año 2023 a partir de una necesidad
                y encontrando la solución en la aplicación de tecnología actual
                .
              </p>

              <p id="about-text-p">
                Nuestra placa de identificación con código QR, es un
                identificador a tráves del cual, la persona que encuentra una
                mascota extraviada o un objeto podrá rápidamente entrar en
                contacto con su dueño, ya sea por teléfono o whatsapp y sin
                necesidad de digitar números. Además muestra una completa
                información de tu mascota u objeto.{' '}
              </p>
              <p id="about-text-p">
                Nuestra atención es personalizada, garantizamos tu conformidad,
                pues nuestro principal objetivo es que la mayor cantidad de
                mascotas extraviadas regresen con su familia. O de que recuperes
                algún objeto con mucho valor para ti.
              </p>
              <p>SENCILLO, PRACTICO, RAPIDO Y EFICAZ.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

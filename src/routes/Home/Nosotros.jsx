import './Nosotros.css'
import huellas3 from '../../assets/image/huellas3.png'

const Nosotros = () => {
  return (
    <>
      <section id="nosotros">
        <div id="showcase">
          <div className="container-nosotros">
            <div className="showcase-text-nosotros">
            <h1>
                <span className="title-one-nosotros">CUVER</span>
                <br />
                </h1>
              <p>
                Siguiendo huellas nace en el año 2023 a partir de una necesidad
                y encontrando la solución en la aplicación de tecnología actual
                .
              </p>

              <p>
                Nuestra placa de identificación con código QR, es un
                identificador a tráves del cual, la persona que encuentra una
                mascota extraviada o un objeto podrá rápidamente entrar en
                contacto con su dueño, ya sea por teléfono o whatsapp y sin
                necesidad de digitar números. Además muestra una completa
                información de tu mascota u objeto.{' '}
              </p>
              <p>
                Nuestra atención es personalizada, garantizamos tu conformidad,
                pues nuestro principal objetivo es que la mayor cantidad de
                mascotas extraviadas regresen con su familia. O de que recuperes
                algún objeto con mucho valor para ti.
              </p>
              <p>SENCILLO, PRACTICO, RAPIDO Y EFICAZ.</p>
            </div>

            <div className="showcase-img-nosotros">
              <img className="img-nosotros" src={huellas3} alt="" />
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default Nosotros
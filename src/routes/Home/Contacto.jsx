import './Contacto.css'
import imagen_whatsapp from '../../assets/image/whatsapp.png'
import facebook from '../../assets/image/facebook.png'
import twitter from '../../assets/image/twitter.png'
import instagram from '../../assets/image/instagram.png'
import final from '../../assets/image/final.png'
const Contacto = () => {
  return (
    <>
      <section id="contacto">
        <div id="about">
          <div className="container">
            <div className="container">
              <div className="about-img">
                <img src={final} alt="showcase" />
              </div>

              <div className="about-text">
                <h1>
                  <span className="title-one">Te esperamos...</span>
                  <br />
                </h1>

                <div className="sociales-container">
                  <a href="http://www.instagram.com" target="_blank">
                    <img className="imagen_social" src={instagram} />{' '}
                  </a>

                  <a href="http://www.twitter.com" target="_blank">
                    <img className="imagen_social" src={twitter} />{' '}
                  </a>

                  <a href="http://www.facebook.com" target="_blank">
                    <img className="imagen_social" src={facebook} />{' '}
                  </a>
                  <a href="https://wa.me/3884130325" target="_blank">
                    <img className="imagen_social" src={imagen_whatsapp} />{' '}
                  </a>
                </div>
              </div>

              <br></br>
              <div>
                <span className="sociales-p">
                  {' '}
                  San Salvador de Jujuy - Jujuy - Argentina
                </span>
                <br></br>

                <br />
                <span className="sociales-p">Teléfono de contacto</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto

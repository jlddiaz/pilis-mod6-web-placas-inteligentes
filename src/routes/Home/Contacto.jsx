import './Contacto.css'
import imagen_whatsapp from '../../assets/image/whatsapp.png'
import facebook from '../../assets/image/facebook.png'
import twitter from '../../assets/image/twitter.png'
import instagram from '../../assets/image/instagram.png'
import huellas3 from '../../assets/image/huellas3.png'
import imagen_linkedin from '../../assets/image/linkedin.png'
const Contacto = () => {
  return (
    <>
       <section id="contacto">
       
       <div id="showcase">
          <div className="container-contacto">
            <div className="showcase-text-contacto">
            <h1>
                  <span className="title-one-contacto"> Póngase en contacto con nosotros</span>
                  </h1>
                  <p> 
                  Por favor, siéntase libre de buscar las respuestas en nuestra Página, 
                  lo más probable es que su consulta sea resuelta de inmediato.
                  </p>
                  <p>
De lo contrario, contáctenos haciendo clic en los íconos de nuestras redes sociales. 
              </p>
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
                    <a href="https://ar.linkedin.com/" target="_blank">
                    <img className="imagen_social" src={imagen_linkedin} />{' '}
                  </a>
                </div>
                <span className="sociales-text">
               
               San Salvador de Jujuy - Jujuy - Argentina -Teléfono: 3884123456
             </span>
            </div>

            <div className="showcase-img-contacto">
              <img className="img-contacto" src={huellas3} alt="" />
            </div>
        
             
              </div>
          </div>
        
     
           
       
    
        
      </section>
    </>
  )
}

export default Contacto

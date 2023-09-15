import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import huellas3 from '../../assets/image/huellas3.png'
import nosotros from '../../assets/image/nosotros.png'
import imagen_whatsapp from '../../assets/image/whatsapp.png'
import facebook from '../../assets/image/facebook.png'
import twitter from '../../assets/image/twitter.png'
import instagram from '../../assets/image/instagram.png'
import final from '../../assets/image/final.png'
import imagen_linkedin from '../../assets/image/linkedin.png'
import './Navigation.css'

const Navigation = () => {
  const auth = useAuth()
  const handleSignOut = () => {
    auth.changeisAthenticated(false)
  }
  /* Local Storage */
  return (
    <>
      <header id="mainheader">
        <nav id="navbar">
          <div className="container">
            <ul>
              <li>
                <a href="#about">Nosotros</a>
              </li>
              <li>
                <a href="#aplicacion">Aplicación</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
              {auth.isAuthenticated ? (
                <>
                  <li>
                    <Link className="nav-link" to="/mascotas">
                      Mascotas
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/objetos">
                      Objetos
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="nav-link sign-in"
                      onClick={handleSignOut}
                    >
                      Cerrar Sesión
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="nav-link sign-in" to="/signup">
                      Registrarse
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link sign-in" to="/signin">
                      Iniciar Sesión
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
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
              <img src={nosotros} alt="showcase" />
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

      <section id="aplicacion">
        <div id="showcase">
          <div className="container">
            <div className="showcase-text">
              <h1>
                <span className="title-one">Aplicación</span>
                <br />
                <span className="title-two">
                  ¿QUE INFORMACIÓN PUEDO REGISTRAR?
                </span>
                <br />
              </h1>
              <p id="about-text-p">
                En el caso de mascotas, puedes agregar: nombre de tu mascota,
                género, raza, edad y fotos.
              </p>
              <p id="about-text-p">
                En el caso de objetos, puedes agregar: fotos y una descripción
                del objeto, por ejemplo "Este peluche pertenece a mi hijo
                autista y es su muñeco de apego, agradeceré infinitamente su
                devolución."
              </p>

              <p id="about-text-p">
                Además contamos con el sistema de "contacto rápido", de ésta
                forma quien escanee el código QR tendrá la opción inmediata de
                poder llamarte o enviarte un WhatsApp con sólo un tap, y sin
                digitar números, o acceder a tu perfil en facebook o instagram.
                Es importante que la persona que encuentre tu mascota u objeto
                obtenga distintas alternativas de contactarte y de forma rápida,
                además en caso de emergencia cuente con información importante.
              </p>
            </div>
            <div className="showcase-img">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7hCDxuc5zLM?si=kIHtwrTIKtw97KsG"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto">
        <div id="about">
          <div className="container">
            <div className="container">
              <div className="about-img">
                <img src={final} alt="showcase" />
              </div>

              <div className="about-text">
                <h1>
                  <span class="title-one"> Póngase en contacto con nosotros</span>
                  </h1>
                  
                  <p id="about-text-p"> 
                  Por favor, siéntase libre de buscar las respuestas en nuestra Página, 
                  lo más probable es que su consulta sea resuelta de inmediato.
                  </p>
                  <p id="about-text-p">
De lo contrario, contáctenos haciendo clic en los íconos de nuestras redes sociales. 
              </p>


                  <br />
                

                <div className="sociales-container">
                  <a href="http://www.instagram.com" target="_blank">
                    <img className="imagen_social" src={instagram} />{' '}
                  </a>

                  <a href="http://www.twitter.com" target="_blank">
                    <img class="imagen_social" src={twitter} />{' '}
                  </a>

                  <a href="http://www.facebook.com" target="_blank">
                    <img class="imagen_social" src={facebook} />{' '}
                  </a>
                  <a href="https://wa.me/3884130325" target="_blank">
                    <img class="imagen_social" src={imagen_whatsapp} />{' '}
                    <a href="https://ar.linkedin.com/" target="_blank">
                    <img class="imagen_social" src={imagen_linkedin} />{' '}
                  </a>
                  </a>
                </div>
                <span className="sociales-p">
               
               San Salvador de Jujuy - Jujuy - Argentina -Teléfono: 3884123456
             </span>
              </div>

              <br></br>
             
              
                <br></br>

                <br />
             
              </div>
            </div>
          </div>
        
      </section>
    </>
  )
}

export default Navigation

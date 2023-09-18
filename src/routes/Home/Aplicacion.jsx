import './Aplicacion.css'
const Aplicacion = () => {
  return (
    <>
      <section id="aplicacion">
        <div id="showcase">
          <div className="container-aplicacion">
            <div className="showcase-text-aplicacion">
              <h1>
                <span className="title-one-aplicacion">Aplicación</span>
               
                </h1>
                <span className="title-two-aplicacion">
                  ¿QUE INFORMACIÓN PUEDO REGISTRAR?
                </span>
                
              
              <p>
                En el caso de mascotas, puedes agregar: nombre de tu mascota,
                género, raza, edad y fotos.       
              
                En el caso de objetos, puedes agregar: fotos y una descripción
                del objeto, por ejemplo "Este peluche pertenece a mi hijo
                autista y es su muñeco de apego, agradeceré infinitamente su
                devolución."
              </p>

              <p>
                Además contamos con el sistema de "contacto rápido", de ésta
                forma quien escanee el código QR tendrá la opción inmediata de
                poder llamarte o enviarte un WhatsApp con sólo un tap, y sin
                digitar números, o acceder a tu perfil en facebook o instagram.
                Es importante que la persona que encuentre tu mascota u objeto
                obtenga distintas alternativas de contactarte y de forma rápida,
                además en caso de emergencia cuente con información importante.
              </p>
            </div>
            <div className="showcase-img-aplicacion">
              <iframe className='img-aplicacion'
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
    </>
  )
}

export default Aplicacion

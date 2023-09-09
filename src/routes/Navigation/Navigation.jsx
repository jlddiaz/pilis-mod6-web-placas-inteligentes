import { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth  } from '../../contexts/AuthContext';
import weatherLogo from '../../assets/image/logo.png';
import huellas3 from '../../assets/image/huellas3.png';
import mascotas from  '../../assets/image/mascotas.png';
import imagen_whatsapp from '../../assets/image/whatsapp.png';
import facebook from '../../assets/image/facebook.png';
import twitter from '../../assets/image/twitter.png';
import instagram from '../../assets/image/instagram.png';
import final from '../../assets/image/final.png';
import './Navigation.css';

const Navigation = () => {
  const auth = useAuth()
  const handleSignOut = () => {
    auth.changeisAthenticated(false)
  }
   /* Local Storage */
  return (
    <>
         
    <header id='mainheader'>
  
  
  <nav id='navbar'>
   
    <div class='container'>
      
           
           
      <ul>
        <li><a href='#about'>Nosotros</a></li>
        <li><a href='#aplicacion'>Aplicación</a></li>
        
        
        {auth.isAuthenticated ? (
            <span className="nav-link sign-in" onClick={handleSignOut}>
              Cerrar Sesión
            </span>
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
        
       

       



        <li><a href='#contacto'>Contacto</a></li>
      </ul>
    </div>
  </nav>
  

  {auth.isAuthenticated && (
            <>
              <Link className="nav-link" to="/mascotas">
                Mascotas
              </Link>
              <Link className="nav-link" to="/objetos">
                Objetos
              </Link>
            </>
          )}



</header>
<Outlet/>
<section id='home'>
<div id='showcase'>
 
        <div class='container'>
      
        <div class='showcase-text' >
            <h1>
           
              <span class='title-one'>Siguiendo huellas</span><br />
             
         
          <span class='title-two'>Pioneros en la identificación de mascotas y objetos con la tecnología QR </span><br />
          
              </h1>
              
                       
          </div>
       
          <div class='showcase-img'>
          
          <img class='showcase-img' src={ huellas3 } alt=''/> 
          </div>
          
          
     

        </div>
      </div>
    </section>


  <section id='about'>
  <div id='about'>
    <div class='container'>
      <div class='about-img'>

      <img src={ final } alt='showcase'/> 
      
      </div>
      <div class='about-text'>
        <h1>    
          <span class='title-one'>Siguiendo huellas</span></h1>
          <p id='about-text-p'>
            Siguiendo huellas nace en el año 2023 a partir de una necesidad y encontrando la solución en la aplicación de 
            tecnología actual .</p>
          
            <p id='about-text-p'>
            Nuestra placa de identificación con código QR, es un identificador a tráves del cual, 
            la persona que encuentra una mascota extraviada o un objeto podrá rápidamente entrar en 
            contacto con su dueño, ya sea por teléfono o whatsapp y sin necesidad de digitar números.

            Además muestra una completa información de tu mascota u objeto. </p>
                 <p id='about-text-p'>
                  Nuestra atención es personalizada, garantizamos tu conformidad,  
                  pues nuestro principal objetivo es que la mayor cantidad de mascotas extraviadas regresen 
                  con su familia. O de que recuperes algún objeto con mucho valor para ti.</p>
                 <p>SENCILLO, PRACTICO, RAPIDO Y EFICAZ.
                 </p>
  
      
       </div>
    
  </div>
      
    </div>
       
  </section>




    <section id='aplicacion'>
  <div id='showcase'>
    <div class='container'>
      <div class='showcase-text'>
        <h1>
          <span class='title-one'>Aplicación</span><br />
          <span class='title-two'>¿QUE INFORMACIÓN PUEDO REGISTRAR?</span><br />
          </h1>
          <p id='about-text-p'>En el caso de mascotas, puedes agregar: nombre de tu mascota, género, 
            raza, edad y fotos.</p>
            <p id='about-text-p'>En el caso de objetos, puedes agregar: fotos y una descripción del objeto, por ejemplo "Este peluche pertenece a mi hijo autista y es su muñeco de apego, agradeceré infinitamente su devolución."
              
      </p>
           
      <p id='about-text-p'>Además contamos con el sistema de "contacto rápido", de ésta forma quien escanee el código QR tendrá la opción inmediata de poder llamarte o enviarte un WhatsApp con sólo un tap, y sin digitar números, o acceder a tu perfil en facebook o instagram.

            Es importante que la persona que encuentre tu mascota u objeto obtenga distintas alternativas de contactarte 
            y de forma rápida, además en caso de emergencia cuente con información importante.</p>
    
        
            
      </div>
      <div class='showcase-img'>
        

        <iframe width="560" height="315" src="https://www.youtube.com/embed/7hCDxuc5zLM?si=kIHtwrTIKtw97KsG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



      </div>
      
      
    </div>
  </div>


</section>
      
<section id='contacto'>
<div id='about'>



  
<div class='container'>
  <div class='container'>
      <div class='about-img'>

      <img src={ final } alt='showcase'/> 
      
      </div>



<div class='about-text'>
        
          <h1>
          <span class='title-one'>Te esperamos...</span><br />
          
          </h1>
  
  
  
<div class='sociales-container'>

  <a href='http://www.instagram.com' target='_blank'>
    
  <img class='imagen_social' src={ instagram } />  </a>

  <a href='http://www.twitter.com' target='_blank'>
    
    <img class='imagen_social' src={ twitter } />  </a>
    
    <a href='http://www.facebook.com' target='_blank'>
    
  <img class='imagen_social' src={ facebook } />  </a>
    <a href='https://wa.me/3884130325' target='_blank'>
    
    <img class='imagen_social' src={ imagen_whatsapp } />  </a>
    </div>  

</div>

    
    <br></br>
   <div>
    <span class="sociales-p"> San Salvador de Jujuy - Jujuy - Argentina</span><br></br>
     
     <br/>
      <span class="sociales-p">Teléfono de contacto</span>
      </div>



    </div>
    </div>
    </div>
  
 
</section>

  
    



  </>






);
};
  
export default Navigation;
<Outlet/>
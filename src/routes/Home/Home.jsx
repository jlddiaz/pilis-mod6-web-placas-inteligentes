import './Home.css'
import perrito from '../../assets/image/1.png'
import guitarra from '../../assets/image/5.png'
import abuelo from '../../assets/image/8.png'
import celular from '../../assets/image/6.png'
import llavero from '../../assets/image/3.png'
import libro from '../../assets/image/4.png'
import peluche from '../../assets/image/2.png'
import billetera from '../../assets/image/7.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCards, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/pagination'


const Home = () => {
  return (
    <>
      <section id="home">
        <div id="showcase">
          <div className="container-home">
            <div className="showcase-text-home">
              <h1>
                <span className="title-one-home">CUVER</span>
                <br />
                </h1>
                <span className="title-two-home">
                  Pioneros en la región en la identificación de mascotas y objetos con la
                  tecnología QR{' '}
                </span>
                
              
            </div>

            <div className="showcase-img-home">

            <Swiper 
 modules={[EffectCards, Pagination, Scrollbar, A11y, Autoplay]}
 spaceBetween={30}
 slidesPerView={1}

 loop={true}
 
 pagination={{
          dynamicBullets: true,
        }}

 onSwiper={(swiper) => console.log(swiper)}
 onSlideChange={() => console.log('slide change')}
 
 autoplay={{
   delay: 2000,
   disableOnInteraction: false
 }}

 className='swiper-container'>
<SwiperSlide className='slide-item'>
  <img src={perrito}/>
</SwiperSlide>
<SwiperSlide className='slide-item'>
  <img src={guitarra}/>
</SwiperSlide>
<SwiperSlide className='slide-item'>
  <img src={abuelo}/>
</SwiperSlide>
<SwiperSlide className='slide-item'>
  <img src={celular}/>
  
</SwiperSlide>
<SwiperSlide className='slide-item'>
  <img src={llavero}/>
  
</SwiperSlide>
<SwiperSlide className='slide-item'>
  <img src={libro}/>
    </SwiperSlide>
    <SwiperSlide className='slide-item'>
  <img src={peluche}/>
  
</SwiperSlide>
<SwiperSlide className='slide-item'>
  <img src={billetera}/>
  
</SwiperSlide>
 </Swiper>





           
            </div>
          </div>
        </div>
      </section>
     
    </>
  )
}

export default Home

import './Home.css'
import Mascotas from '../../components/Mascota/Mascotas'
import { useEffect, useState } from 'react'
import { getMascotas } from '../../services/mascota.service.js'

const Home = () => {
  const [mascotas, setMascotas] = useState([])
  useEffect(() => {
    getMascotas()
      .then((data) => setMascotas(data))
      .catch((err) => console.log(err))
    console.log(mascotas)
  }, [])
  return (
    <>
      <div className="main-container">
        <Mascotas 
          mascotas={mascotas}
        />
      </div>
    </>
  )
}

export default Home

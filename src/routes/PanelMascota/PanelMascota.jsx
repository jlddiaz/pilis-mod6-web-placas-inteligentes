import './PanelMascota.css'
import Mascotas from '../../components/Mascota/Mascotas'
import { useEffect, useState } from 'react'
import { getMascotasByIdPerfil } from '../../services/mascota.service.js'
import { useAuth } from '../../contexts/AuthContext'

const PanelMascota = () => {
  const [mascotas, setMascotas] = useState([])
  const auth = useAuth()
  useEffect(() => {
    if (auth.idPerfil) {
      getMascotasByIdPerfil(auth.idPerfil)
        .then((data) => setMascotas(data))
        .catch((err) => console.log(err))
    }
    console.log(mascotas)
  }, [])
  return (
    <>
      <div className="main-container">
        <Mascotas mascotas={mascotas} />
      </div>
    </>
  )
}

export default PanelMascota

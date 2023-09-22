import { useEffect, useState } from 'react'
import { getMascotasById } from '../../services/mascota.service'
import { useParams } from 'react-router-dom'
import Mascota from '../../components/Mascota/Mascota'

export const MascotaView = () => {
  const { id } = useParams()
  const [mascota, setMascota] = useState()

  useEffect(() => {
    getMascotasById(id)
      .then((data) => setMascota(data))
      .catch((err) => console.log(err))
  }, [])
  return (
    mascota && (
      <Mascota
        nombre={mascota.nombre}
        sexo={mascota.sexo}
        vacunas={mascota.vacunas}
        mascota={mascota.edad}
        foto={mascota.foto}
        observaciones={mascota.observaciones}
        perfil={mascota.perfil}
      />
    )
  )
}

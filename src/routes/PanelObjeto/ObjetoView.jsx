import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Objeto from '../../components/Objeto/Objeto'
import { getObjetoById } from '../../services/objeto.service'

export const ObjetoView = () => {
  const { id } = useParams()
  const [objeto, setObjeto] = useState()

  useEffect(() => {
    getObjetoById(id)
      .then((data) => setObjeto(data))
      .catch((err) => console.log(err))
  }, [])
  return (
    objeto && (
      <Objeto
        nombre={objeto.nombre}
        foto={objeto.foto}
        observaciones={objeto.observaciones}
        perfil={objeto.perfil}
      />
    )
  )
}

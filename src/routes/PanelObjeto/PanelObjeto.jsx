import './PanelObjeto.css'
import { useEffect, useState } from 'react'
import { getObjetosByIdPerfil } from '../../services/objeto.service.js'
import Objetos from '../../components/Objeto/Objetos'
import { useAuth } from '../../contexts/AuthContext'

const PanelObjeto = () => {
  const [objetos, setObjetos] = useState([])
  const auth = useAuth()
  useEffect(() => {
    console.log(auth.idPerfil)
    if (auth.idPerfil) {
      getObjetosByIdPerfil(auth.idPerfil)
        .then((data) => setObjetos(data))
        .catch((err) => console.log(err))
    }
    console.log(objetos)
  }, [])
  return (
    <>
      <div className="main-container">
        <Objetos 
          objetos={objetos}
        />
      </div>
    </>
  )
}

export default PanelObjeto
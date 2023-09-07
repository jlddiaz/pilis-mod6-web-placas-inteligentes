import './PanelObjeto.css'
import { useEffect, useState } from 'react'
import { getObjetos } from '../../services/objeto.service.js'
import Objetos from '../../components/Objeto/Objetos'

const PanelObjeto = () => {
  const [objetos, setObjetos] = useState([])
  useEffect(() => {
    getObjetos()
      .then((data) => setObjetos(data))
      .catch((err) => console.log(err))
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
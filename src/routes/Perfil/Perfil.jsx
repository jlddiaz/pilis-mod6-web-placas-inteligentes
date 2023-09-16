import { BsArrowRepeat } from 'react-icons/bs'
import './Perfil.css'
import { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import PerfilDisplay from '../../components/Perfil/PerfilDisplay'
import { getPerfilById } from '../../services/perfil.service'
import FormPerfil from '../../components/Perfil/FormPerfil'

const Perfil = () => {
  const initialStatePerfil = {
    nombre: '',
    apellido: '',
    direccion: '',
    foto: '',
    instagram: '',
    facebook: '',
    telefono: '',
  }
  const [perfil, setPerfil] = useState(null)
  const [isUpdate, setIsUpdate] = useState(false)
  const [isInitialState, setInitialState] = useState(false)
  const auth = useAuth()

  const handleUpdate = () => {
    setIsUpdate(true)
  }
  useEffect(() => {
    if (auth.idPerfil) {
      getPerfilById(auth.idPerfil, setPerfil)
    } else {
      setInitialState(true)
      setPerfil(initialStatePerfil)
    }
  }, [])
  return (
    <>
      <div className="main-container">
        {perfil && !isUpdate && !isInitialState && (
          <>
            <PerfilDisplay
              nombre={perfil.nombre}
              apellido={perfil.apellido}
              telefono={perfil.telefono}
              direccion={perfil.direccion}
              facebook={perfil.facebook}
              instagram={perfil.instagram}
            />
          </>
        )}
        {!isUpdate ? (
          <button className="btn-perfil" onClick={handleUpdate}>
            <BsArrowRepeat className='update-icon'/>
            Actualizar Perfil
          </button>
        ) : (
          <FormPerfil
            nombre={perfil.nombre}
            apellido={perfil.apellido}
            telefono={perfil.telefono}
            direccion={perfil.direccion}
            facebook={perfil.facebook}
            instagram={perfil.instagram}
            isInitialState={isInitialState}
          />
        )}
      </div>
    </>
  )
}

export default Perfil

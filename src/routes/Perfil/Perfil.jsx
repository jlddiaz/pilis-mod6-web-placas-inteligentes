// import { useAuth } from '../../contexts/AuthContext'
// import { getPerfilById } from '../../services/perfil.service.js'
// import { useEffect, useState } from 'react'
// import './Perfil.css'
// import PerfilDisplay from '../../components/Perfil/PerfilDisplay'
// import { Link } from 'react-router-dom'

// const Perfil = () => {
//   const initialStatePerfil = {
//     nombre: '',
//     apellido: '',
//     direccion: '',
//     foto: '',
//     instagram: '',
//     facebook: '',
//     telefono: '',
//   }
//   const [perfilBd, setPerfilBd] = useState(initialStatePerfil)
//   const auth = useAuth()

//   useEffect(() => {
//     if (auth.idPerfil) {
//       getPerfilById(auth.idPerfil)
//         .then((data) => {
//           console.log(data.apellido)
//           setPerfilBd({ ...perfilBd, apellido: data.apellido })
//           console.log(perfilBd)
//         })
//         .catch((err) => console.log(err))
//     }
//   }, [])
//   return (
//     <>
//       <div className="main-container">
//         <PerfilDisplay perfil={perfilBd} />
//         <Link className="nav-link sign-in" to="/formperfil">
//           Actualizar Perfil
//         </Link>
//       </div>
//     </>
//   )
// }

// export default Perfil

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
          <button onClick={handleUpdate}>Actualizar</button>
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

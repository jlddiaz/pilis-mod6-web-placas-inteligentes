import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './FormPerfil.css'
import { createPerfil, updatePerfil } from '../../services/perfil.service'
import { useAuth } from '../../contexts/AuthContext'
import {
  getProvinciaById,
  getProvincias,
} from '../../services/provincia.service'
import { getDepartamentoById } from '../../services/departamento.service'
import { FiSave } from 'react-icons/fi'
const FormPerfil = ({
  nombre,
  apellido,
  telefono,
  direccion,
  facebook,
  instagram,
  foto,
  isInitialState,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const [errores, setErrores] = useState([])
  const auth = useAuth()
  const [provincias, setProvincias] = useState([])
  const [departamentos, setDepartamentos] = useState([])
  const [localidades, setLocalidades] = useState([])

  const onSubmit = async (data) => {
    const perfil = {
      ...data,
      idUsuario: auth.idUsuario,
      idLocalidad: data.localidad,
      idPerfil: auth.idPerfil,
    }
    console.log(perfil)
    if (isInitialState) {
      const response = await createPerfil(perfil)
      if (response.ok) {
        console.log(response.json())
        navigate('/')
      } else {
        console.log('errores')
        const arrayErr = await response.json()
        setErrores(arrayErr.errors)
        console.log(errores)
      }
    } else {
      const response = await updatePerfil(perfil)
      if (response.ok) {
        // console.log(response.json())
        navigate('/')
      } else {
        console.log('errores')
        const arrayErr = await response.json()
        setErrores(arrayErr.errors)
        console.log(errores)
      }
    }
  }
  const changeProvincia = (event) => {
    const value = event.target.value
    getProvinciaById(value)
      .then((data) => {
        setDepartamentos(data[0].departamentos)
      })
      .then((err) => console.log(err))
    console.log(departamentos)
  }
  const changeDepartamento = (event) => {
    const value = event.target.value
    getDepartamentoById(value)
      .then((data) => {
        console.log(data[0].localidades)
        setLocalidades(data[0].localidades)
      })
      .then((err) => console.log(err))
    console.log(localidades)
  }
  const handleCancel = () => {
    navigate('/home')
  }
  useEffect(() => {
    getProvincias()
      .then((data) => setProvincias(data))
      .then((err) => console.log(err))
  }, [])
  return (
    <div className="form-perfil-container">
      <div className="wrapper">
        <form className="form-perfil" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title-perfil">Actualizar Perfil</h1>
          <div className="input-group-perfil">
            <div className="input-container-perfil">
              <input
                className="input"
                type="text"
                defaultValue={nombre}
                placeholder="nombre"
                {...register('nombre', {
                  required: ' ',
                })}
              />
              <label htmlFor="" className="label">
                Nombre
              </label>
            </div>
            <div className="input-container-perfil">
              <input
                className="input"
                type="text"
                defaultValue={apellido}
                placeholder="apellido"
                {...register('apellido', {
                  required: ' ',
                })}
              />
              <label htmlFor="" className="label">
                Apellido
              </label>
            </div>
            <div className="input-container-perfil">
              <input
                className="input"
                type="text"
                defaultValue={direccion}
                placeholder="direccion"
                {...register('direccion', {
                  required: ' ',
                })}
              />
              <label htmlFor="" className="label">
                Direccion
              </label>
            </div>
          </div>
          <div className="input-group-perfil">
            <div className="input-container-perfil">
              <select
                {...register('provincia')}
                className="input"
                onChange={changeProvincia}
              >
                <option>Seleccionar opción</option>
                {provincias.length > 0
                  ? provincias.map((provincia) => {
                      return (
                        <option
                          value={provincia.idProvincia}
                          key={provincia.idProvincia}
                        >
                          {provincia.descripcion}
                        </option>
                      )
                    })
                  : ''}
              </select>
              <label htmlFor="" className="label">
                Provincia
              </label>
            </div>
            <div className="input-container-perfil">
              <select
                {...register('departamento')}
                className="input"
                onChange={changeDepartamento}
              >
                <option>Seleccionar opción</option>
                {departamentos.length > 0
                  ? departamentos.map((departamento) => {
                      return (
                        <option
                          value={departamento.idDepartamento}
                          key={departamento.idDepartamento}
                        >
                          {departamento.descripcion}
                        </option>
                      )
                    })
                  : ''}
              </select>
              <label htmlFor="" className="label">
                Departamento
              </label>
            </div>
            <div className="input-container-perfil">
              <select {...register('localidad')} className="input">
                <option>Seleccionar opción</option>
                {localidades.length > 0
                  ? localidades.map((localidad) => {
                      return (
                        <option
                          value={localidad.idLocalidad}
                          key={localidad.idLocalidad}
                        >
                          {localidad.descripcion}
                        </option>
                      )
                    })
                  : ''}
              </select>
              <label htmlFor="" className="label">
                Localidad
              </label>
            </div>
          </div>
          <div className="input-group-perfil">
            <div className="input-container-perfil">
              <input
                className="input"
                type="telefono"
                defaultValue={telefono}
                placeholder="telefono"
                {...register('telefono', {
                  required: ' ',
                })}
              />
              <label htmlFor="" className="label">
                Telefono
              </label>
            </div>
            <div className="input-container-perfil">
              <input
                className="input"
                type="text"
                defaultValue={foto}
                placeholder="foto"
                {...register('foto')}
              />
              <label htmlFor="" className="label">
                Foto
              </label>
            </div>
            <div className="input-container-perfil">
              <input
                className="input"
                type="text"
                defaultValue={facebook}
                placeholder="facebook"
                {...register('facebook')}
              />
              <label htmlFor="" className="label">
                Facebook
              </label>
            </div>
          </div>
          <div className="input-container-perfil">
            <input
              className="input"
              type="text"
              defaultValue={instagram}
              placeholder="instagram"
              {...register('instagram')}
            />
            <label htmlFor="" className="label">
              Instagram
            </label>
          </div>
          <div className='btn-container-perfil'>
          <button className="btn-cancel-form-perfil " onClick={handleCancel}>
            Cancelar
          </button>
          <button className="btn-submit" type="submit">
            <FiSave />
            Actualizar
          </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormPerfil

import { api } from './api'

export const getPerfilByIdUsuario = async (id) => {
  try {
    const response = await fetch(`${api.server}/perfilesByIdUsuario/${id}`)
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}

export const getPerfilById = async (id, state) => {
  try {
    const response = await fetch(`${api.server}/perfiles/${id}`)
    if (response.ok) {
      const json = await response.json()
      state(json)
      return response
    } else {
      state(null)
      return null
    }
  } catch {
    throw new Error('could not fetch')
  }
}

export const createPerfil = async ({
  nombre,
  apellido,
  direccion,
  foto,
  telefono,
  facebook,
  instagram,
  idUsuario,
  idLocalidad,
}) => {
  try {
    const response = await fetch(`${api.server}/perfiles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre,
        apellido,
        telefono,
        direccion,
        facebook,
        instagram,
        foto,
        idUsuario,
        idLocalidad,
      }),
    })

    return response
  } catch {
    throw new Error('could not fetch')
  }
}

export const updatePerfil = async ({
  nombre,
  apellido,
  direccion,
  foto,
  telefono,
  facebook,
  instagram,
  idUsuario,
  idLocalidad,
  idPerfil,
}) => {
  try {
    const response = await fetch(`${api.server}/perfiles/${idPerfil}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre,
        apellido,
        telefono,
        direccion,
        facebook,
        instagram,
        foto,
      }),
    })
    return response
  } catch {
    throw new Error('could not fetch')
  }
}

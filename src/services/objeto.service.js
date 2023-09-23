import { api } from './api'

export const getObjetos = async () => {
  try {
    const response = await fetch(`${api.server}/objetos`)
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}

export const getObjetosByIdPerfil = async (id) => {
  try {
    const response = await fetch(`${api.server}/objetosByIdPerfil/${id}`)
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}

export const getObjetoById = async (id) => {
  try {
    const response = await fetch(`${api.server}/objetos/${id}`)
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}

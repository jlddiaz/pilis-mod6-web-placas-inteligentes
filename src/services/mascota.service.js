import { api } from './api'

export const getMascotasByIdPerfil = async (id) => {
  try {
    const response = await fetch(`${api.server}/mascotasByIdPerfil/${id}`)
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}

export const getMascotasById = async (id) => {
  try {
    const response = await fetch(`${api.server}/mascotas/${id}`)
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}

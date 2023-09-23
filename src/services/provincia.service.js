import { api } from './api'

export const getProvincias = async () => {
  try {
    const response = await fetch(`${api.server}/provincias`)
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}

export const getProvinciaById = async (id) => {
  try {
    const response = await fetch(`${api.server}/provincias/${id}`)
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}

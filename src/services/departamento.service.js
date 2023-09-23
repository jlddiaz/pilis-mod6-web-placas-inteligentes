import { api } from './api'

export const getDepartamentos = async () => {
  try {
    const response = await fetch(`${api.server}/departamentos`)
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}
export const getDepartamentoById = async (id) => {
  try {
    const response = await fetch(`${api.server}/departamentos/${id}`)
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}

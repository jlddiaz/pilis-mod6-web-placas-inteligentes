export const getDepartamentos = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/departamentos`
      )
      return response.json()
    } catch {
      throw new Error('could not fetch')
    }
  }
  export const getDepartamentoById= async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/departamentos/${id}`
      )
      return response.json()
    } catch {
      throw new Error('could not fetch')
    }
  }
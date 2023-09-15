export const getProvincias= async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/provincias`
      )
      return response.json()
    } catch {
      throw new Error('could not fetch')
    }
  }

  export const getProvinciaById= async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/provincias/${id}`
      )
      return response.json()
    } catch {
      throw new Error('could not fetch')
    }
  }
  
export const getMascotasByIdPerfil = async(id) => {
    try {
        const response = await fetch(`http://localhost:3001/api/mascotasByIdPerfil/${id}`)        
        return response.json();
      } catch {
        throw new Error('could not fetch');
      }
}

export const getMascotasById = async(id) => {
  try {
      const response = await fetch(`http://localhost:3001/api/mascotas/${id}`)      
      return response.json();
    } catch {
      throw new Error('could not fetch');
    }
}
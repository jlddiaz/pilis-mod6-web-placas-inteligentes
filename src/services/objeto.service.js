export const getObjetos = async() => {
    try {
        const response = await fetch(`http://localhost:3001/api/objetos`)
        return response.json();
      } catch {
        throw new Error('could not fetch');
      }
}

export const getObjetosByIdPerfil = async(id) => {
  try {
      const response = await fetch(`http://localhost:3001/api/objetosByIdPerfil/${id}`)
      return response.json();
    } catch {
      throw new Error('could not fetch');
    }
}

export const getObjetoById = async(id) => {
  try {
      const response = await fetch(`http://localhost:3001/api/objetos/${id}`)      
      return response.json();
    } catch {
      throw new Error('could not fetch');
    }
}
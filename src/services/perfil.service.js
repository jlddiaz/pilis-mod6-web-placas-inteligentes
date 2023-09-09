export const getPerfilByIdUsuario = async(id) => {
    try {
        const response = await fetch(`http://localhost:3001/api/perfilesByIdUsuario/${id}`)
        return response.json();
      } catch {
        throw new Error('could not fetch');
      }
}
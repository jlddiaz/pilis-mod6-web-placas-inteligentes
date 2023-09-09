export const getMascotasByIdPerfil = async(id) => {
    try {
        const response = await fetch(`http://localhost:3001/api/mascotasByIdPerfil/${id}`)
        console.log(response)
        return response.json();
      } catch {
        throw new Error('could not fetch');
      }
}
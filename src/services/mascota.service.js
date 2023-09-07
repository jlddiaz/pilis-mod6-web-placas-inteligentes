export const getMascotas = async() => {
    try {
        const response = await fetch(`http://localhost:3001/api/mascotas`)
        return response.json();
      } catch {
        throw new Error('could not fetch');
      }
}
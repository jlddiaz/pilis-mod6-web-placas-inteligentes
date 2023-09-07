export const getObjetos = async() => {
    try {
        const response = await fetch(`http://localhost:3001/api/objetos`)
        return response.json();
      } catch {
        throw new Error('could not fetch');
      }
}
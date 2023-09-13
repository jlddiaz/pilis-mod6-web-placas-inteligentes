export const createUser = async ({ mail, password }) => {
  try {
    const response = await fetch(`http://localhost:3001/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mail,
        password,
      }),
    })
    
    return response
  } catch {
    throw new Error('could not fetch')
  }
}

export const authUser = async ({ mail, password }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mail,
          password,
        }),
      })
      return response
    } catch {
      throw new Error('could not fetch')
    }
  }

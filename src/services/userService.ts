import { useAlert } from './alertService'
export interface User {
  id: number
  name: string
  username: string
  email: string
  website: string
  phone: string
  company: any
  address: any
}

const { showError, showSuccess } = useAlert()

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
      throw new Error('Error al obtener usuarios')
    }
    showSuccess('Usuarios obtenidos correctamente')
    return await response.json()
  } catch (error: any) {
    showError(error.message || 'Error desconocido al obtener usuarios')
    throw error
  }
}

export const getUserById = async (id: number | string): Promise<User> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!response.ok) {
      throw new Error('Error al obtener el usuario')
    }
    showSuccess('Usuario obtenido correctamente')
    return await response.json()
  } catch (error: any) {
    showError(error.message || 'Error desconocido al obtener el usuario')
    throw error
  }
}

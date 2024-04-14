import { getDatabase, child, get, ref, set, update } from 'firebase/database'
import { app } from '../firebase'

interface userDataProps {
  id: string
  name: string
  email: string
  driverLicense: string
  avatarUrl?: string
  admin?: boolean
}
type postDataProp = {
  [key: string]: any
}

const database = getDatabase(app)
const dbRef = ref(getDatabase())

export const getUserInDB = async (userID: string) => {
  return await get(child(dbRef, `users/${userID}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      console.error('No data available')
      return false
    }
  })
}

export const createUserInDB = async (userData: userDataProps) => {
  const { id, name, email, driverLicense, avatarUrl, admin } = userData

  return await set(ref(database, `users/${id}`), {
    name,
    email,
    avatar_url: avatarUrl,
    driver_license: driverLicense,
    admin,
  })
}

export const updateUserAvatarInFirebase = (userData: userDataProps) => {
  const { id, admin, avatarUrl, driverLicense, email, name } = userData

  const postData: postDataProp = {}
  postData['/users/' + id] = {
    admin,
    avatar_url: avatarUrl,
    driver_license: driverLicense,
    email,
    name,
  }

  update(dbRef, postData)
}

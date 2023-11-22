import { getDownloadURL, getStorage, uploadBytes, ref } from 'firebase/storage'
interface User {
  id: string
  email: string
  name: string
  driverLicense: string
  admin?: boolean
  avatar?: string
  avatarUrl?: string
}
export const storage = getStorage()

export const storageRef = ref(storage)

export const getStorageReference = (url: string) => {
  return ref(storage, url)
}
export const uploadUserAvatar = async (userData: User, files: FileList) => {
  const storageRef = getStorageReference(
    `avatar/${userData.id}-${files[0].name}`,
  )

  const snapshot = await uploadBytes(storageRef, files[0])
  const downloadURL = await getDownloadURL(snapshot.ref)

  return { ...userData, avatarUrl: downloadURL }
}

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

const auth = getAuth()

type userInfo = {
  email: string
  password: string
}

export const authenticateUserInFirebase = async ({
  email,
  password,
}: userInfo) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password)

  const userToken = await user.getIdToken()

  return {
    refreshToken: user.refreshToken,
    token: userToken,
    uid: user.uid,
  }
}

export const signUpUserInFirebase = async ({ email, password }: userInfo) => {
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signOutUserInFirebase = async () => {
  return await signOut(auth)
}

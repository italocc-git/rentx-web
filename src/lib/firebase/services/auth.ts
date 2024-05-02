import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  verifyPasswordResetCode,
  confirmPasswordReset,
  sendPasswordResetEmail,
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

export const handlePasswordResetEmail = async (
  email: string,
  currentLanguage: string,
) => {
  auth.languageCode = currentLanguage
  await sendPasswordResetEmail(auth, email)
}

export const handleResetPassword = async (
  newPassword: string,
  actionCode: string,
) => {
  let accountEmail = ''
  await verifyPasswordResetCode(auth, actionCode)
    .then(async (email) => {
      accountEmail = email
      try {
        await confirmPasswordReset(auth, actionCode, newPassword)
        return {
          email,
          password: newPassword,
        }
      } catch (error) {
        console.log(error)
      }
    })
    .catch((error) => {
      console.log(error)
    })
  return {
    accountEmail,
    newPassword,
  }
}

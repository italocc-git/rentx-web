import { zodResolver } from '@hookform/resolvers/zod'
import { Envelope } from '@phosphor-icons/react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import carImageSignPage from '../../assets/car-image-signin.png'
import { Input } from '../../components/Input'
import { toast } from 'react-toastify'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { useTranslation } from 'react-i18next'

export const PasswordRecovery = () => {
  const {
    i18n: { language },
  } = useTranslation()
  const { t } = useTranslation()
  const recoveryPasswordFormSchema = z.object({
    email: z
      .string()
      .nonempty(t('pages.passwordRecovery.errorMessage.requiredField'))
      .email(t('pages.passwordRecovery.errorMessage.invalidField'))
      .toLowerCase(),
  })
  type recoveryPasswordFormDataType = z.infer<typeof recoveryPasswordFormSchema>
  const recoveryPasswordForm = useForm<recoveryPasswordFormDataType>({
    resolver: zodResolver(recoveryPasswordFormSchema),
  })

  const submitData = (data: recoveryPasswordFormDataType) => {
    const { email } = data
    const auth = getAuth()
    auth.languageCode = language
    sendPasswordResetEmail(auth, email, {
      url: `${import.meta.env.VITE_BASE_URL}/profile/sign-in`,
    })
      .then(() => {
        toast.success(
          `${t(
            'pages.passwordRecovery.sendPasswordResetEmail.success',
          )} ${email}`,
        )
      })
      .catch(() => {
        toast.error(t('pages.passwordRecovery.sendPasswordResetEmail.error'))
        // ..
      })
  }
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = recoveryPasswordForm
  return (
    <div className="min-h-screen bg-base-main py-8 mobile:mb-20 mobile:px-8 laptop:mb-0 laptop:px-20">
      <div className="flex items-center justify-between mobile:flex-col-reverse mobile:gap-20 laptop:flex-row desktop:gap-40">
        <img
          src={carImageSignPage}
          alt="image-sign-page"
          className="tablet:max-w-md desktop:max-w-full"
        />
        <FormProvider {...recoveryPasswordForm}>
          <form
            onSubmit={handleSubmit(submitData)}
            className="flex flex-grow flex-col justify-center gap-6 "
          >
            <h1 className="font-archivo text-4xl font-semibold text-base-title">
              {t('pages.passwordRecovery.title')}
            </h1>
            <span className="font-inter text-base-text">
              {t('pages.passwordRecovery.description')}
            </span>

            <Input
              icon={Envelope}
              placeholder="E-mail"
              type="text"
              name="email"
            />
            {errors.email && (
              <span className="text-xs font-semibold text-product-red">
                {errors.email.message}
              </span>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-16  bg-product-red text-white transition-colors hover:bg-product-red-dark  disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t('pages.passwordRecovery.buttonText')}
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

import { Input } from '@/components/Input'
import { Envelope } from '@phosphor-icons/react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'

import { useTranslation } from 'react-i18next'
export const EmailValidationContent = () => {
  const {
    i18n: { language },
  } = useTranslation()
  const { t } = useTranslation()
  const recoveryPasswordFormSchema = z.object({
    email: z
      .string()
      .nonempty(
        t(
          'pages.passwordRecovery.emailValidationComponent.errorMessage.requiredField',
        ),
      )
      .email(
        t(
          'pages.passwordRecovery.emailValidationComponent.errorMessage.invalidField',
        ),
      )
      .toLowerCase(),
  })
  type recoveryPasswordFormDataType = z.infer<typeof recoveryPasswordFormSchema>
  const recoveryPasswordForm = useForm<recoveryPasswordFormDataType>({
    resolver: zodResolver(recoveryPasswordFormSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = recoveryPasswordForm
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
            'pages.passwordRecovery.emailValidationComponent.sendPasswordResetEmail.success',
          )} ${email}`,
        )
      })
      .catch(() => {
        toast.error(
          t(
            'pages.passwordRecovery.emailValidationComponent.sendPasswordResetEmail.error',
          ),
        )
        // ..
      })
  }
  return (
    <FormProvider {...recoveryPasswordForm}>
      <form
        onSubmit={handleSubmit(submitData)}
        className="flex flex-grow flex-col justify-center gap-6 "
      >
        <h1 className="font-archivo text-4xl font-semibold text-base-title">
          {t('pages.passwordRecovery.emailValidationComponent.title')}
        </h1>
        <span className="font-inter text-base-text">
          {t('pages.passwordRecovery.emailValidationComponent.description')}
        </span>

        <Input icon={Envelope} placeholder="E-mail" type="text" name="email" />
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
          {t('pages.passwordRecovery.emailValidationComponent.buttonText')}
        </button>
      </form>
    </FormProvider>
  )
}

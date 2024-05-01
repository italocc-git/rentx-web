/* eslint-disable prefer-regex-literals */
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/Input'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { Lock } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
import { handleResetPassword } from '@/lib/firebase/services/auth'
import { useAuth } from '@/hooks/authContext'

const params = new URLSearchParams(location.search)
export const NewPasswordContent = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const createUserFormSchema = z.object({
    password: z
      .object({
        password: z
          .string()
          .nonempty(
            t(
              'pages.passwordRecovery.newPasswordComponent.errorMessage.requiredField',
            ),
          ),
        confirm: z
          .string()
          .nonempty(
            t(
              'pages.passwordRecovery.newPasswordComponent.errorMessage.requiredField',
            ),
          ),
      })

      .refine(
        ({ password, confirm }) => password === confirm,
        t(
          'pages.passwordRecovery.newPasswordComponent.errorMessage.invalidMatchPasswords',
        ),
      ),
  })

  type loginUserFormDataType = z.infer<typeof createUserFormSchema>

  const createUserForm = useForm<loginUserFormDataType>({
    resolver: zodResolver(createUserFormSchema),
  })

  const submitData = async (data: loginUserFormDataType) => {
    const { password } = data
    const isPasswordStrong = new RegExp(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})',
    ).test(password.password)

    if (!isPasswordStrong) {
      createUserForm.setError('password.password', {
        message: t(
          'pages.passwordRecovery.newPasswordComponent.errorMessage.regexValidation',
        ),
      })
      return
    }

    if (params.get('oobCode')) {
      const actionCode = params.get('oobCode')!
      try {
        await handleResetPassword(password.confirm, actionCode).then(
          async (accountData) => {
            const { accountEmail, newPassword } = accountData
            await signIn({ email: accountEmail, password: newPassword })
            navigate('/profile?passwordUpdated=true')
          },
        )
      } catch (error) {
        console.log(error)
      }
    }
  }

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = createUserForm

  return (
    <FormProvider {...createUserForm}>
      <form
        onSubmit={handleSubmit(submitData)}
        className="flex flex-grow flex-col justify-center gap-3 "
      >
        <h1 className="font-archivo text-4xl font-semibold text-base-title">
          {t('pages.passwordRecovery.newPasswordComponent.title')}
        </h1>
        <span className="font-inter text-base-text">
          {t('pages.passwordRecovery.newPasswordComponent.description')}
        </span>
        <Input
          icon={Lock}
          type="password"
          placeholder={t('pages.profileContent.signUp.textFields.pass')}
          name="password.password"
        />
        <span className="text-xs font-semibold text-product-red">
          {errors?.password?.password?.message}
        </span>

        <Input
          icon={Lock}
          type="password"
          placeholder={t(
            'pages.profileContent.signUp.textFields.confirmPassword',
          )}
          name="password.confirm"
        />

        <span className="text-xs font-semibold text-product-red">
          {errors.password?.message}
        </span>

        <div className="flex w-full flex-col gap-4 font-inter font-medium">
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-16 bg-product-red text-white transition-colors hover:bg-product-red-dark  disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t('pages.passwordRecovery.newPasswordComponent.buttonText')}
          </button>
        </div>
      </form>
    </FormProvider>
  )
}

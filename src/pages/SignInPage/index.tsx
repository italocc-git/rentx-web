import carImageSignPage from '../../assets/car-image-signin.png'
import { Envelope, Lock } from '@phosphor-icons/react'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/authContext'
import { useTranslation } from 'react-i18next'
const loginUserFormSchema = z.object({
  email: z
    .string()
    .nonempty('E-mail obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase(),
  /* .refine(
      (email) => email.endsWith('@gmail.com'),
      'Deve ser um e-mail do Gmail',
    ) */
  password: z.string().min(8, 'A senha precisa ter no mínimo 8 caracteres'),
})

type loginUserFormDataType = z.infer<typeof loginUserFormSchema>

export const SignIn = () => {
  const loginUserForm = useForm<loginUserFormDataType>({
    resolver: zodResolver(loginUserFormSchema),
  })
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const { t } = useTranslation()
  const submitData = async ({ email, password }: loginUserFormDataType) => {
    try {
      await signIn({ email, password })

      navigate('/profile')
    } catch (error) {
      toast.error('Usuário/Senha incorretos.')
    }
  }

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = loginUserForm

  return (
    <div className="min-h-screen bg-base-main mobile:mb-20 mobile:px-8 laptop:mb-0 laptop:px-20 laptop:py-8">
      <div className="flex items-center justify-between mobile:flex-col mobile:gap-5 laptop:flex-row desktop:gap-40 ">
        <img
          src={carImageSignPage}
          alt="image-sign-page"
          className="tablet:max-w-md desktop:max-w-full"
        />
        <div className="flex flex-grow flex-col justify-center gap-6">
          <h1 className="font-archivo text-4xl font-semibold text-base-title">
            {t('pages.profileContent.signIn.title')}
          </h1>
          <span className="font-inter text-base-text">
            {t('pages.profileContent.signIn.description')}
          </span>
          <FormProvider {...loginUserForm}>
            <form
              onSubmit={handleSubmit(submitData)}
              className="flex flex-col gap-2"
            >
              <Input
                icon={Envelope}
                placeholder={t('pages.profileContent.signIn.inputText.email')}
                type="text"
                name="email"
              />
              {errors.email && (
                <span className="text-xs font-semibold text-product-red">
                  {errors.email.message}
                </span>
              )}
              <Input
                icon={Lock}
                type="password"
                placeholder={t(
                  'pages.profileContent.signIn.inputText.password',
                )}
                name="password"
              />
              {errors.password && (
                <span className="text-xs font-semibold text-product-red">
                  {errors.password.message}
                </span>
              )}

              <Link to="/profile/password-recovery">
                <span className="font-inter text-base-text transition-colors hover:text-base-title">
                  Esqueci minha senha
                </span>
              </Link>
              <div className="mt-4 flex w-full  flex-col gap-4 font-inter font-medium">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-16 bg-product-red text-white transition-colors hover:bg-product-red-dark  disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {t('pages.profileContent.signIn.buttonText.signIn')}
                </button>
                <Link
                  to="/profile/sign-up"
                  className="flex h-16 items-center justify-center border border-base-gray bg-transparent text-base-title transition-colors hover:border-base-title"
                >
                  {t('pages.profileContent.signIn.buttonText.signUp')}
                </Link>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}

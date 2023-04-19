import carImageSignPage from '../../assets/car-image-signin.png'
import { Envelope, Lock } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const loginUserFormSchema = z.object({
  email: z
    .string()
    .nonempty('E-mail obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase()
    .refine(
      (email) => email.endsWith('@gmail.com'),
      'Deve ser um e-mail do Gmail',
    ),
  password: z.string().min(8, 'A senha precisa ter no mínimo 8 caracteres'),
})

type loginUserFormDataType = z.infer<typeof loginUserFormSchema>

export const SignIn = () => {
  const loginUserForm = useForm<loginUserFormDataType>({
    resolver: zodResolver(loginUserFormSchema),
  })

  const submitData = (data: loginUserFormDataType) => {
    console.log(data)
  }

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = loginUserForm

  return (
    <div className="bg-base-main h-full min-h-screen px-20 py-8">
      <div className="flex justify-between items-center gap-40">
        <img src={carImageSignPage} alt="image-sign-page" />
        <div className="flex flex-col justify-center gap-6 flex-grow">
          <h1 className="font-archivo font-semibold text-4xl text-base-title">
            Estamos quase lá.
          </h1>
          <span className="font-inter text-base-text">
            Faça seu login para começar uma experiência incrível.
          </span>
          <FormProvider {...loginUserForm}>
            <form
              onSubmit={handleSubmit(submitData)}
              className="flex flex-col gap-2"
            >
              <Input
                icon={Envelope}
                placeholder="E-mail"
                type="text"
                name="email"
              />
              {errors.email && (
                <span className="text-product-red text-xs font-semibold">
                  {errors.email.message}
                </span>
              )}
              <Input
                icon={Lock}
                type="password"
                placeholder="Senha"
                name="password"
              />
              {errors.password && (
                <span className="text-product-red text-xs font-semibold">
                  {errors.password.message}
                </span>
              )}

              <Link to="/recovery-password">
                <span className="text-base-text font-inter transition-colors hover:text-base-title">
                  Esqueci minha senha
                </span>
              </Link>
              <div className="w-full flex flex-col  gap-4 font-inter font-medium mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-product-red text-white h-16 transition-colors hover:bg-product-red-dark  disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Login
                </button>
                <Link
                  to="/sign-up"
                  className="flex justify-center items-center bg-transparent text-base-title border border-base-gray h-16 transition-colors hover:border-base-title"
                >
                  Criar conta gratuita
                </Link>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}

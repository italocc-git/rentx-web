import { zodResolver } from '@hookform/resolvers/zod'
import { Envelope } from '@phosphor-icons/react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import carImageSignPage from '../../assets/car-image-signin.png'
import { Input } from '../../components/Input'

const recoveryPasswordFormSchema = z.object({
  email: z
    .string()
    .nonempty('E-mail obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase(),
})

type recoveryPasswordFormDataType = z.infer<typeof recoveryPasswordFormSchema>
export const PasswordRecovery = () => {
  const recoveryPasswordForm = useForm<recoveryPasswordFormDataType>({
    resolver: zodResolver(recoveryPasswordFormSchema),
  })

  const submitData = (data: recoveryPasswordFormDataType) => {
    console.log(data)
  }
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = recoveryPasswordForm
  return (
    <div className="bg-base-main min-h-screen px-20 py-8">
      <div className="flex justify-between items-center gap-40">
        <img src={carImageSignPage} alt="image-sign-page" />
        <FormProvider {...recoveryPasswordForm}>
          <form
            onSubmit={handleSubmit(submitData)}
            className="flex flex-col justify-center gap-6 flex-grow"
          >
            <h1 className="font-archivo font-semibold text-4xl text-base-title">
              Recuperar senha
            </h1>
            <span className="font-inter text-base-text">
              Insira seu e-mail para receber um link de recuperação
            </span>

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
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-product-red  text-white h-16 transition-colors hover:bg-product-red-dark  disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Recuperar senha
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

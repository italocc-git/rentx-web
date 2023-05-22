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

  const submitData = (data: recoveryPasswordFormDataType) => {}
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
              <span className="text-xs font-semibold text-product-red">
                {errors.email.message}
              </span>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-16  bg-product-red text-white transition-colors hover:bg-product-red-dark  disabled:cursor-not-allowed disabled:opacity-50"
            >
              Recuperar senha
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

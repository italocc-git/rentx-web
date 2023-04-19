/* eslint-disable prefer-regex-literals */
import { User, Envelope, Car, Lock } from '@phosphor-icons/react'
import carImageSignupPage from '../../assets/car-image-signup.png'
import { Input } from '../../components/Input'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SuccessfullyUserCreationModal } from './SuccessfullyUserCreationModal'
import { useState } from 'react'

const createUserFormSchema = z.object({
  name: z
    .string()
    .nonempty('Nome é obrigatório')
    .transform((name) =>
      name
        .trim()
        .split(' ')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' '),
    ),
  email: z
    .string()
    .nonempty('E-mail obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase()
    .refine(
      (email) => email.endsWith('@gmail.com'),
      'Deve ser um e-mail do Gmail',
    ),
  cnh: z.string().min(9, 'Deve conter no mínimo 9 caracteres'),
  password: z
    .object({
      password: z.string().nonempty('Campo de senha obrigatória'),
      confirm: z.string().nonempty('Campo de confirmação de senha obrigatória'),
    })

    .refine(
      ({ password, confirm }) => password === confirm,
      'As senhas devem ser iguais',
    ),
})

type loginUserFormDataType = z.infer<typeof createUserFormSchema>

export const SignUp = () => {
  const [openSuccessCreationModal, setOpenSuccessCreationModal] =
    useState(false)
  const createUserForm = useForm<loginUserFormDataType>({
    resolver: zodResolver(createUserFormSchema),
  })

  const submitData = (data: loginUserFormDataType) => {
    console.log(data)
    setOpenSuccessCreationModal(true)
  }

  const {
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors },
    watch,
  } = createUserForm

  const userPassword = watch('password.password')
  const isPasswordStrong = new RegExp(
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})',
  ).test(userPassword)

  const { name } = getValues()
  return (
    <div className="bg-base-main h-full min-h-screen px-20 py-8">
      <SuccessfullyUserCreationModal
        openModal={openSuccessCreationModal}
        setOpenModal={setOpenSuccessCreationModal}
        username={name}
      />
      <div className="flex justify-between items-center gap-40">
        <div className="flex flex-col  justify-center gap-6 flex-grow ">
          <h1 className="font-archivo font-semibold text-4xl text-base-title">
            Crie sua conta
          </h1>
          <span className="font-inter text-base-text">
            Faça seu cadastro de forma rápida e fácil.
          </span>
          <FormProvider {...createUserForm}>
            <form
              onSubmit={handleSubmit(submitData)}
              className="flex flex-col gap-2"
            >
              <Input icon={User} placeholder="Nome" type="text" name="name" />

              <span className="text-product-red text-xs font-semibold">
                {errors.name?.message}
              </span>

              <Input
                icon={Envelope}
                placeholder="E-mail"
                type="text"
                name="email"
              />
              <span className="text-product-red text-xs font-semibold">
                {errors.email?.message}
              </span>

              <Input icon={Car} placeholder="CNH" type="text" name="cnh" />
              <span className="text-product-red text-xs font-semibold">
                {errors.cnh?.message}
              </span>
              <Input
                icon={Lock}
                type="password"
                placeholder="Senha"
                name="password.password"
              />

              {userPassword?.length > 0 &&
                (isPasswordStrong ? (
                  <span className="text-xs text-product-green">
                    Senha forte
                  </span>
                ) : (
                  <span className="text-xs text-product-red">
                    Deve conter ao menos 8 caracteres com letras maiúsculas e
                    minúsculas, números, e caracteres especiais.
                  </span>
                ))}
              <Input
                icon={Lock}
                type="password"
                placeholder="Repetir senha"
                name="password.confirm"
              />
              <span className="text-product-red text-xs font-semibold">
                {errors.password?.message}
              </span>

              <div className="w-full flex flex-col gap-4 font-inter font-medium">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-product-red text-white h-16 transition-colors hover:bg-product-red-dark  disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
        <img src={carImageSignupPage} alt="image-sign-page" />
      </div>
    </div>
  )
}

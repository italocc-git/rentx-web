/* eslint-disable prefer-regex-literals */
import { User, Envelope, Car, Lock } from '@phosphor-icons/react'
import carImageSignupPage from '../../assets/car-image-signup.png'
import { Input } from '../../components/Input'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SuccessfullyUserCreationModal } from './SuccessfullyUserCreationModal'
import { useState } from 'react'
import { useAuth } from '../../hooks/authContext'
import { toast } from 'react-toastify'
import { createUserInDB } from '../../lib/services/crud'
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
    .toLowerCase(),
  /* .refine(
      (email) => email.endsWith('@gmail.com'),
      'Deve ser um e-mail do Gmail',
    ) */
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

  const { signUpUser } = useAuth()

  const submitData = (data: loginUserFormDataType) => {
    const { email, password } = data
    // Ficou faltando as informações cnh e name, adicionar no banco firebase
    const isPasswordStrong = new RegExp(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})',
    ).test(password.password)

    if (!isPasswordStrong) {
      createUserForm.setError('password.password', {
        message:
          ' Deve conter ao menos 8 caracteres com letras maiúsculas e minúsculas, números, e caracteres especiais.',
      })
      return
    }

    signUpUser({ email, password: password.confirm })
      .then(({ user }) => {
        createUserInDB({
          id: user.uid,
          name: data.name,
          email: data.email,
          driverLicense: data.cnh,
          avatarUrl: '',
          admin: false,
        }).then(() => {
          toast.success('Usuário Cadastrado com sucesso')
        })

        setOpenSuccessCreationModal(true)
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          toast.error(
            'Usuário já cadastrado na nossa base de dados, tente novamente.',
          )
          return
        }
        toast.error(error.message)
      })
  }

  const {
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors },
  } = createUserForm

  const { name } = getValues()
  return (
    <div className="min-h-screen bg-base-main py-8 mobile:mb-20 mobile:px-8 laptop:mb-0 laptop:px-20">
      <SuccessfullyUserCreationModal
        openModal={openSuccessCreationModal}
        setOpenModal={setOpenSuccessCreationModal}
        username={name}
      />
      <div className="flex items-center justify-between mobile:flex-col mobile:gap-4 laptop:flex-row desktop:gap-20">
        <div className="flex flex-grow  flex-col justify-center gap-6 ">
          <h1 className="font-archivo text-4xl font-semibold text-base-title">
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

              <span className="text-xs font-semibold text-product-red">
                {errors.name?.message}
              </span>

              <Input
                icon={Envelope}
                placeholder="E-mail"
                type="text"
                name="email"
              />
              <span className="text-xs font-semibold text-product-red">
                {errors.email?.message}
              </span>

              <Input icon={Car} placeholder="CNH" type="text" name="cnh" />
              <span className="text-xs font-semibold text-product-red">
                {errors.cnh?.message}
              </span>
              <Input
                icon={Lock}
                type="password"
                placeholder="Senha"
                name="password.password"
              />
              <span className="text-xs font-semibold text-product-red">
                {errors?.password?.password?.message}
              </span>
              <Input
                icon={Lock}
                type="password"
                placeholder="Repetir senha"
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
                  Cadastrar
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
        <img
          src={carImageSignupPage}
          alt="image-sign-page"
          className="mobile:max-w-[300px] tablet:max-w-[340px] laptop:max-w-[470px] desktop:max-w-full"
        />
      </div>
    </div>
  )
}

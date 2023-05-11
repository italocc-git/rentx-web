/* eslint-disable camelcase */
/* eslint-disable prefer-regex-literals */
import { Car, Envelope, Lock, User } from '@phosphor-icons/react'
import * as TabRadix from '@radix-ui/react-tabs'
import { useCallback, useEffect, useState } from 'react'
import { Input } from '../../../components/Input'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../../hooks/authContext'
import api from '../../../services/api'

interface TabsProfileProps {
  setModal: (open: boolean) => void
}

const renewPasswordFormSchema = z.object({
  username: z.string(),
  email: z.string(),
  cnh: z.string(),
  oldPassword: z.string().nonempty('Senha antiga obrigatória'),
  password: z
    .object({
      newPassword: z.string().nonempty('Campo de senha obrigatória'),
      confirmNewPassword: z
        .string()
        .nonempty('Campo de confirmação de senha obrigatória'),
    })

    .refine(
      ({ newPassword, confirmNewPassword }) =>
        newPassword === confirmNewPassword,
      'As senhas devem ser iguais',
    ),
})
type renewPasswordFormDataType = z.infer<typeof renewPasswordFormSchema>

export const TabsProfile = ({ setModal }: TabsProfileProps) => {
  const { Root, List, Trigger, Content } = TabRadix
  const [selectedTab, setSelectedTab] = useState('tab1')
  const { userData } = useAuth()

  const handleChangeSelectedTab = (value: string) => {
    setSelectedTab(value)
  }

  const tabsProfileForm = useForm<renewPasswordFormDataType>({
    resolver: zodResolver(renewPasswordFormSchema),
  })

  const compareSamePassword = (oldPassword: string, newPassword: string) => {
    const oldPassowrd = oldPassword.toLocaleLowerCase()
    const newPassowrd = newPassword.toLocaleLowerCase()

    return oldPassowrd === newPassowrd
  }

  const submitResetPassword = (data: renewPasswordFormDataType) => {
    const { oldPassword, password } = data

    const isPasswordStrong = new RegExp(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})',
    ).test(password.newPassword)

    if (!isPasswordStrong) {
      tabsProfileForm.setError('password.newPassword', {
        message:
          ' Deve conter ao menos 8 caracteres com letras maiúsculas e minúsculas, números, e caracteres especiais.',
      })
      return
    }

    if (compareSamePassword(oldPassword, password.newPassword)) {
      tabsProfileForm.setError('oldPassword', {
        message: 'A senha antiga não pode ser igual a nova',
      })
      return
    }
    if (userData) {
      const { refreshToken } = userData
      api
        .post(`password/reset?token=${refreshToken}`, {
          oldPassword,
          newPassword: password.confirmNewPassword,
        })
        .then(() => {
          setModal(true)
        })
    }
  }
  const loadProfile = useCallback(() => {
    if (userData) {
      const { user } = userData
      tabsProfileForm.setValue('username', user.name)
      tabsProfileForm.setValue('email', user.email)
      tabsProfileForm.setValue('cnh', user.driver_license)
    }
  }, [tabsProfileForm, userData])

  useEffect(() => {
    loadProfile()
  }, [loadProfile])

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = tabsProfileForm
  return (
    <Root
      defaultValue={selectedTab}
      onValueChange={handleChangeSelectedTab}
      value={selectedTab}
      className="flex flex-col w-full  h-40 my-2"
    >
      <List
        aria-label="Car Information Manager"
        className="flex border-b-2 shrink-0 mb-6 "
      >
        <Trigger
          className="bg-white text-base-gray px-5 h-11 flex-grow flex items-center justify-center data-[state=active]:text-base-title data-[state=active]:shadow-tabShadow select-none"
          value="tab1"
        >
          <span className=" font-semibold text-sm font-inter">Dados</span>
        </Trigger>
        <Trigger
          className="bg-white text-base-gray px-5 h-11 flex-grow flex items-center justify-center  data-[state=active]:text-base-title data-[state=active]:shadow-tabShadow select-none"
          value="tab2"
        >
          <span className=" font-semibold text-sm font-inter">
            Trocar senha
          </span>
        </Trigger>
      </List>
      <FormProvider {...tabsProfileForm}>
        <Content value="tab1" className="text-justify flex flex-col gap-2">
          <Input
            icon={User}
            name="username"
            placeholder="nome"
            type="text"
            disabled
          />
          <Input
            icon={Envelope}
            name="email"
            placeholder="E-mail"
            type="text"
            disabled
          />
          <Input icon={Car} name="cnh" placeholder="CNH" type="text" disabled />
        </Content>

        {/*  */}

        <Content value="tab2">
          <form
            onSubmit={handleSubmit(submitResetPassword)}
            className="text-justify flex flex-col gap-2"
          >
            <Input
              icon={Lock}
              name="oldPassword"
              placeholder="Senha atual"
              type="password"
            />
            <span className="text-product-red text-xs font-semibold">
              {errors.oldPassword?.message}
            </span>
            <Input
              icon={Lock}
              name="password.newPassword"
              placeholder="Senha"
              type="password"
            />
            <span className="text-product-red text-xs font-semibold">
              {errors.password?.newPassword?.message}
            </span>
            <Input
              icon={Lock}
              name="password.confirmNewPassword"
              placeholder="Repetir senha"
              type="password"
            />
            <span className="text-product-red text-xs font-semibold">
              {errors.password?.message}
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-product-red w-full text-white laptop:h-16 mobile:h-7  transition-colors hover:bg-product-red-dark  disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Salvar alterações
            </button>
          </form>
        </Content>
      </FormProvider>
    </Root>
  )
}

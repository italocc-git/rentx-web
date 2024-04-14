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
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

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
    if (userData && userData.user) {
      const { user } = userData
      tabsProfileForm.setValue('username', user.name)
      tabsProfileForm.setValue('email', user.email)
      tabsProfileForm.setValue('cnh', user.driverLicense)
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
      className="my-2 flex h-40  w-full flex-col"
    >
      <List
        aria-label="Car Information Manager"
        className="mb-6 flex shrink-0 border-b-2 "
      >
        <Trigger
          className="flex h-11 flex-grow select-none items-center justify-center bg-white px-5 text-base-gray data-[state=active]:text-base-title data-[state=active]:shadow-tabShadow"
          value="tab1"
        >
          <span className=" font-inter text-sm font-semibold">
            {t(
              'pages.profileContent.account.profileSection.personalData.personalInfo',
            )}
          </span>
        </Trigger>
        <Trigger
          className="flex h-11 flex-grow select-none items-center justify-center bg-white px-5  text-base-gray data-[state=active]:text-base-title data-[state=active]:shadow-tabShadow"
          value="tab2"
        >
          <span className=" font-inter text-sm font-semibold">
            {t(
              'pages.profileContent.account.profileSection.personalData.changePass',
            )}
          </span>
        </Trigger>
      </List>
      <FormProvider {...tabsProfileForm}>
        <Content value="tab1" className="flex flex-col gap-2 text-justify">
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
            className="flex flex-col gap-2 text-justify"
          >
            <Input
              icon={Lock}
              name="oldPassword"
              placeholder={t(
                'pages.profileContent.account.profileSection.passwordInformation.currentPass',
              )}
              type="password"
            />
            <span className="text-xs font-semibold text-product-red">
              {errors.oldPassword?.message}
            </span>
            <Input
              icon={Lock}
              name="password.newPassword"
              placeholder={t(
                'pages.profileContent.account.profileSection.passwordInformation.newPass',
              )}
              type="password"
            />
            <span className="text-xs font-semibold text-product-red">
              {errors.password?.newPassword?.message}
            </span>
            <Input
              icon={Lock}
              name="password.confirmNewPassword"
              placeholder={t(
                'pages.profileContent.account.profileSection.passwordInformation.confirmNewPass',
              )}
              type="password"
            />
            <span className="text-xs font-semibold text-product-red">
              {errors.password?.message}
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-product-red text-white transition-colors hover:bg-product-red-dark  disabled:cursor-not-allowed disabled:opacity-50  mobile:h-7 laptop:h-16"
            >
              {t(
                'pages.profileContent.account.profileSection.passwordInformation.buttonText',
              )}
            </button>
          </form>
        </Content>
      </FormProvider>
    </Root>
  )
}

import { Outlet } from 'react-router-dom'
import { LanguageSwitcher } from '../../components/LanguageSwitcher'

export const SecondaryLayout = () => {
  return (
    <>
      <LanguageSwitcher />
      <Outlet />
    </>
  )
}

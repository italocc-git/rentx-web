import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LateralMenu } from '../../components/LateralMenu'
import { LanguageSwitcher } from '../../components/LanguageSwitcher'

export const DefaultLayout = () => {
  return (
    <div className="flex">
      <LateralMenu />
      <div className="flex flex-grow flex-col">
        <LanguageSwitcher />
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

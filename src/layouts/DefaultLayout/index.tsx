import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LateralMenu } from '../../components/LateralMenu'

export const DefaultLayout = () => {
  return (
    <div className="flex">
      <LateralMenu />
      <div className="flex flex-col flex-grow">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

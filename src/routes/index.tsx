import { Route, Routes } from 'react-router-dom'
import { CarDetails } from '../pages/Car'
import { AvailableCarsList } from '../pages/AvailableCarsList'
import { CarSuccessfulRented } from '../pages/CarSuccessfulRented'
import { Dashboard } from '../pages/Dashboard'
import { SignIn } from '../pages/SignInPage'
import { SignUp } from '../pages/SignUp'
import { PasswordRecovery } from '../pages/PasswordRecovery'
import { Profile } from '../pages/Profile'
import { FilteredCarsByDate } from '../pages/FilteredCarsByDate'
import { FilteredCarsList } from '../pages/FilteredCarsList'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { SecondaryLayout } from '../layouts/SecondaryLayout'
import { useAuth } from '../hooks/authContext'

export const Router = () => {
  const { user } = useAuth()

  const userAuthenticated = !!user

  /* 
  -Rotas para usuário logado e não logado. 
  - Utilizar o redirect se necessário
  - Organizar os caminhos das rotas (home, filter , profile)
  - Deixar rotas em português */
  return (
    <Routes>
      <Route path="/" element={<SecondaryLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/car-successful-rented"
          element={<CarSuccessfulRented />}
        />
      </Route>
      <Route path="/home" element={<DefaultLayout />}>
        <Route
          path="/home/available-cars-list"
          element={<AvailableCarsList />}
        />
        <Route path="/home/filtered-cars-list" element={<FilteredCarsList />} />
        <Route
          path="/home/filtered-cars-by-date"
          element={<FilteredCarsByDate />}
        />
        <Route path="/home/car/:id" element={<CarDetails />} />
        <Route path="/home/sign-in" element={<SignIn />} />
        <Route path="/home/profile" element={<Profile />} />
        <Route path="/home/sign-up" element={<SignUp />} />
        <Route path="/home/recovery-password" element={<PasswordRecovery />} />
      </Route>
    </Routes>
  )
}

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

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SecondaryLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/carro-alugado-com-sucesso"
          element={<CarSuccessfulRented />}
        />
      </Route>
      <Route path="/inicio" element={<DefaultLayout />}>
        <Route
          path="/inicio/lista-carros-disponíveis"
          element={<AvailableCarsList />}
        />

        <Route path="/inicio/carro/:id" element={<CarDetails />} />
      </Route>
      <Route path="/filtro" element={<DefaultLayout />}>
        <Route
          path="/filtro/listagem-de-carros"
          element={<FilteredCarsList />}
        />
        <Route
          path="/filtro/carros-por-data"
          element={<FilteredCarsByDate />}
        />
      </Route>
      <Route path="/perfil" element={<DefaultLayout />}>
        <Route path="/perfil" element={<Profile />} />
        <Route path="/perfil/login" element={<SignIn />} />
        <Route path="/perfil/cadastro" element={<SignUp />} />
        <Route
          path="/perfil/recuperação-de-senha"
          element={<PasswordRecovery />}
        />
      </Route>
    </Routes>
  )
}

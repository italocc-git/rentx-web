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
          path="/successfully-rented-car"
          element={<CarSuccessfulRented />}
        />
      </Route>
      <Route path="/home" element={<DefaultLayout />}>
        <Route
          path="/home/available-list-cars"
          element={<AvailableCarsList />}
        />

        <Route path="/home/car/:id" element={<CarDetails />} />
      </Route>
      <Route path="/filter" element={<DefaultLayout />}>
        <Route path="/filter/cars-list" element={<FilteredCarsList />} />
        <Route path="/filter/car-by-date" element={<FilteredCarsByDate />} />
      </Route>
      <Route path="/profile" element={<DefaultLayout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/sign-in" element={<SignIn />} />
        <Route path="/profile/sign-up" element={<SignUp />} />
        <Route
          path="/profile/password-recovery"
          element={<PasswordRecovery />}
        />
      </Route>
    </Routes>
  )
}

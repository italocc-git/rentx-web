import { Route, Routes } from 'react-router-dom'
import { CarDetails } from '../pages/Car'
import { AvailableCarsList } from '../pages/AvailableCarsList'
import { CarSuccessfulRented } from '../pages/CarSuccessfulRented'
import { Dashboard } from '../pages/Dashboard'
/* import { SignIn } from '../pages/SignIn' */
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
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/available-cars-list" element={<AvailableCarsList />} />
        <Route path="/filtered-cars-list" element={<FilteredCarsList />} />
        <Route path="/filtered-cars-by-date" element={<FilteredCarsByDate />} />
        <Route path="/car/:id" element={<CarDetails />} />

        <Route path="/profile" element={<Profile />} />
        {/*  <Route path="/sign-in" element={<SignIn />} /> */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/recovery-password" element={<PasswordRecovery />} />
      </Route>
      <Route path="/dashboard" element={<SecondaryLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/car-successful-rented"
          element={<CarSuccessfulRented />}
        />
      </Route>
    </Routes>
  )
}

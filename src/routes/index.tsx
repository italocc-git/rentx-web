import { Route, Routes } from 'react-router-dom'
import { CarDetails } from '../pages/Car'
import { AvailableCarsList } from '../pages/AvailableCarsList'
import { CarSuccessfulRented } from '../pages/CarSuccessfulRented'
import { Dashboard } from '../pages/Dashboard'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { PasswordRecovery } from '../pages/PasswordRecovery'
import { Profile } from '../pages/Profile'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/available-cars-list" element={<AvailableCarsList />} />
      <Route path="/car/:id" element={<CarDetails />} />
      <Route path="/car-successful-rented" element={<CarSuccessfulRented />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/recovery-password" element={<PasswordRecovery />} />
    </Routes>
  )
}

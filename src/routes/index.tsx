import { Route, Routes } from 'react-router-dom'
import { CarDetails } from '../pages/Car'
import { AvailableCarsList } from '../pages/AvailableCarsList'
import { CarSuccessfulRented } from '../pages/CarSuccessfulRented'
import { Dashboard } from '../pages/Dashboard'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/available-cars-list" element={<AvailableCarsList />} />
      <Route path="/car" element={<CarDetails />} />
      <Route path="/car-successful-rented" element={<CarSuccessfulRented />} />
    </Routes>
  )
}

import {Route, Routes} from 'react-router-dom'
import { Car } from '../pages/Car'
import { CarsList } from '../pages/CarsList'
import { CarSuccessfulRented } from '../pages/CarSuccessfulRented'
import { Dashboard } from '../pages/Dashboard'


export const Router = () => {

    return(
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/cars-list' element={<CarsList/>}/>
            <Route path='/car' element={<Car/>}/>
            <Route path='/car-successful-rented' element={<CarSuccessfulRented/>}/>
        </Routes>
    )
}
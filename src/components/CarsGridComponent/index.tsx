import { Card } from '../Card'
import audiImg from '../../assets/tests/audi.png'
import { Link } from 'react-router-dom'
import { CarsType } from '../../types/Car'

interface CarsGridComponentProps {
  carsList: CarsType[]
}

export const CarsGridComponent = ({ carsList }: CarsGridComponentProps) => {
  return (
    <div className="grid gap-x-1 mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-3 full:grid-cols-4 ">
      {carsList.map((car) => (
        <Link to={`/home/car/${car.id}`} key={car.id}>
          <Card
            image={car.carImages[0]?.url ?? audiImg}
            brand={car.brand}
            model={car.name}
            price={car.dailyRate}
            fuelType={car.fuelType}
            cardLayoutType="vertical"
            transmission={car.transmission}
            id={car.id}
          />
        </Link>
      ))}
    </div>
  )
}

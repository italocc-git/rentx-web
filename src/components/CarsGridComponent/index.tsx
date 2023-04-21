import { Card } from '../Card'
import audiImg from '../../assets/tests/audi.png'
import corvetteImg from '../../assets/tests/Corvete.png'
import lamboImg from '../../assets/tests/Lambo.png'
import lancerImg from '../../assets/tests/Lancer.png'
import porsheImg from '../../assets/tests/Porche.png'
import volvoImg from '../../assets/tests/Volvo.png'
import { Link } from 'react-router-dom'

interface CarsGridComponentProps {
  cars?: any[]
}

export const CarsGridComponent = ({ cars }: CarsGridComponentProps) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
      <Link to="/car/1">
        <Card
          image={audiImg}
          brand="AUDI"
          model="RS 5 Coupé"
          price="120"
          fuelType="energy"
          cardLayoutType="vertical"
        />
      </Link>
      <Card
        image={corvetteImg}
        brand="CHEVROLET"
        model="Corvette Z06"
        price="1200"
        fuelType="gasoline"
        cardLayoutType="vertical"
      />
      <Card
        image={porsheImg}
        brand="PORCHE"
        model="Panamera"
        price="340"
        fuelType="energy"
        cardLayoutType="vertical"
      />
      <Card
        image={lamboImg}
        brand="LAMBORGHINI"
        model="Huracan"
        price="3600"
        fuelType="gasoline"
        cardLayoutType="vertical"
      />
      <Card
        image={volvoImg}
        brand="VOLVO"
        model="XC40"
        price="1200"
        fuelType="hybrid"
        cardLayoutType="vertical"
      />
      <Card
        image={lancerImg}
        brand="AUDI"
        model="Lancer Evo X"
        price="820"
        fuelType="gasoline"
        cardLayoutType="vertical"
      />
    </div>
  )
}

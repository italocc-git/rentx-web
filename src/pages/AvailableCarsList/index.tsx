import { Card } from '../../components/Card'
import audiImg from '../../assets/tests/audi.png'
import corvetteImg from '../../assets/tests/Corvete.png'
import lamboImg from '../../assets/tests/Lambo.png'
import lancerImg from '../../assets/tests/Lancer.png'
import porsheImg from '../../assets/tests/Porche.png'
import volvoImg from '../../assets/tests/Volvo.png'
import { Link } from 'react-router-dom'
export const AvailableCarsList = () => {
  return (
    <div className="bg-base-main h-full min-h-screen px-20 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-base-title font-semibold font-archivo text-4xl">
          Carros disponíveis
        </h1>
        <span className="text-base-text font-normal font-inter text-base">
          Total 12 carros
        </span>
      </div>
      <hr className="bg-base-secondary border w-full my-10" />
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
        <Link to="/car/1">
          <Card
            image={audiImg}
            brand="AUDI"
            model="RS 5 Coupé"
            price="120"
            fuelType="energy"
          />
        </Link>
        <Card
          image={corvetteImg}
          brand="CHEVROLET"
          model="Corvette Z06"
          price="1200"
          fuelType="gasoline"
        />
        <Card
          image={porsheImg}
          brand="PORCHE"
          model="Panamera"
          price="340"
          fuelType="energy"
        />
        <Card
          image={lamboImg}
          brand="LAMBORGHINI"
          model="Huracan"
          price="3600"
          fuelType="gasoline"
        />
        <Card
          image={volvoImg}
          brand="VOLVO"
          model="XC40"
          price="1200"
          fuelType="hybrid"
        />
        <Card
          image={lancerImg}
          brand="AUDI"
          model="Lancer Evo X"
          price="820"
          fuelType="gasoline"
        />
      </div>
    </div>
  )
}

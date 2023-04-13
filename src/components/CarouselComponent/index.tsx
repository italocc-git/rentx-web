import { Carousel } from 'react-responsive-carousel'
import CarImageFront from '../../assets/tests/specific car/audi/audi-front.jpg'
import CarImageBack from '../../assets/tests/specific car/audi/audi-back.jpg'
import CarImageInside from '../../assets/tests/specific car/audi/audi-inside.jpg'
import CarImageInside2 from '../../assets/tests/specific car/audi/audi-inside2.jpg'
interface CarouselComponentProps {
  imagesUrl?: string[]
}
export const CarouselComponent = ({ imagesUrl }: CarouselComponentProps) => {
  return (
    <Carousel
      className="px-10 carousel-style-customized"
      showStatus={false}
      showIndicators={false}
      thumbWidth={150}
      showArrows={false}
      /* autoPlay
      interval={3000}
      infiniteLoop */
    >
      <img src={CarImageFront} alt="car-audi-image" />

      <img src={CarImageBack} alt="car-audi-image" />

      <img src={CarImageInside} alt="car-audi-image" />

      <img src={CarImageInside2} alt="car-audi-image" />
    </Carousel>
  )
}

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
      <img
        src={CarImageFront}
        className="max-h-[500px] max-w-[650px]"
        alt="car-audi-image"
      />

      <img
        src={CarImageBack}
        className="max-h-[500px] max-w-[650px]"
        alt="car-audi-image"
      />

      <img
        src={CarImageInside}
        className="max-h-[500px] max-w-[650px]"
        alt="car-audi-image"
      />

      <img
        src={CarImageInside2}
        className="max-h-[500px] max-w-[650px]"
        alt="car-audi-image"
      />
    </Carousel>
  )
}

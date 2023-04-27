import { Carousel } from 'react-responsive-carousel'
import CarImageFront from '../../assets/tests/specific car/audi/audi-front.jpg'
import CarImageBack from '../../assets/tests/specific car/audi/audi-back.jpg'
import CarImageInside from '../../assets/tests/specific car/audi/audi-inside.jpg'
import CarImageInside2 from '../../assets/tests/specific car/audi/audi-inside2.jpg'
import { useState } from 'react'

interface CarouselComponentProps {
  imagesUrl?: string[]
}

export const CarouselComponent = ({ imagesUrl }: CarouselComponentProps) => {
  const [width, setWidth] = useState<number>(screen.width)
  const screens = {
    mobile: 320,
    tablet: 675,
    laptop: 1060,
    desktop: 1410,
  }
  window.onresize = () => setWidth(window.innerWidth)
  return (
    <Carousel
      className="carousel-style-customized"
      showStatus={false}
      showIndicators={false}
      thumbWidth={width > screens.tablet ? 150 : 60}
      showArrows={false}
      axis={width > screens.tablet ? 'horizontal' : 'vertical'}
      autoFocus
      verticalSwipe="natural"
      width={width > screens.tablet ? 'auto' : 300}
      /* autoPlay
      interval={3000}
      infiniteLoop */
    >
      <img
        src={CarImageFront}
        className=" max-w-[650px]"
        alt="car-audi-image"
      />

      <img src={CarImageBack} className=" max-w-[650px]" alt="car-audi-image" />

      <img
        src={CarImageInside}
        className=" max-w-[650px]"
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

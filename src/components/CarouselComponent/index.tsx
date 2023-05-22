import { Carousel } from 'react-responsive-carousel'
import { useState } from 'react'
import { ImagesCarType } from '../../types/Car'

interface CarouselComponentProps {
  imagesUrl: ImagesCarType[]
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
      {imagesUrl?.map((image) => (
        <img
          key={image.id}
          src={image.image_url}
          className=" max-w-[650px]"
          alt="car-image"
        />
      ))}
    </Carousel>
  )
}

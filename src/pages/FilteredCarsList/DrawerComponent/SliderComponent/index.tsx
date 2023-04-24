import { Dot } from '@phosphor-icons/react'
import * as Slider from '@radix-ui/react-slider'
interface SliderComponentProps {
  selectedRangeValues: number[]
  setSelectedRangeValues: (values: number[]) => void
}
export const SliderComponent = ({
  selectedRangeValues,
  setSelectedRangeValues,
}: SliderComponentProps) => {
  return (
    <form>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        defaultValue={[0, 1000]}
        onValueChange={setSelectedRangeValues}
        value={selectedRangeValues}
        step={50}
        max={1000}
        min={0}
        aria-label="Volume"
      >
        <Slider.Track className="bg-base-gray relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-product-red rounded-full h-full" />
        </Slider.Track>

        <Slider.Thumb
          key={1}
          asChild
          className="block w-8 h-6 bg-white shadow-[0_2px_10px] shadow-black-500 rounded-[2px] hover:bg-base-hover focus:outline-none  focus:shadow-black-300 cursor-pointer"
        >
          <Dot weight="light" />
        </Slider.Thumb>
        <Slider.Thumb
          key={2}
          asChild
          className="block w-8 h-6 bg-white shadow-[0_2px_10px] shadow-black-500 rounded-[2px] hover:bg-base-hover focus:outline-none  focus:shadow-black-300 cursor-pointer"
        >
          <Dot weight="light" />
        </Slider.Thumb>
      </Slider.Root>
    </form>
  )
}

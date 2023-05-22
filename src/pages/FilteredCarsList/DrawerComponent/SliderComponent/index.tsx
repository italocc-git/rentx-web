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
        className="relative flex h-5 w-full touch-none select-none items-center"
        defaultValue={[0, 5000]}
        onValueChange={setSelectedRangeValues}
        value={selectedRangeValues}
        step={50}
        max={5000}
        min={0}
        aria-label="Volume"
      >
        <Slider.Track className="relative h-[3px] grow rounded-full bg-base-gray">
          <Slider.Range className="absolute h-full rounded-full bg-product-red" />
        </Slider.Track>

        <Slider.Thumb
          key={1}
          asChild
          className="block h-6 w-8 cursor-pointer rounded-[2px] bg-white shadow-[0_2px_10px] shadow-black-500 hover:bg-base-hover  focus:shadow-black-300 focus:outline-none"
        >
          <Dot weight="light" />
        </Slider.Thumb>
        <Slider.Thumb
          key={2}
          asChild
          className="block h-6 w-8 cursor-pointer rounded-[2px] bg-white shadow-[0_2px_10px] shadow-black-500 hover:bg-base-hover  focus:shadow-black-300 focus:outline-none"
        >
          <Dot weight="light" />
        </Slider.Thumb>
      </Slider.Root>
    </form>
  )
}

import { Drop, Leaf, Lightning, X } from '@phosphor-icons/react'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { useState } from 'react'
import { SliderComponent } from './SliderComponent'
export const DrawerComponent = () => {
  const [carInputValue, setCarInputValue] = useState('')
  const [selectedFuel, setSelectedFuel] = useState('')
  const [selectedTransmission, setSelectedTransmission] = useState('')
  const [selectedPricesValues, setSelectedPricesValues] = useState<number[]>([
    0, 1000,
  ])

  const resetStates = () => {
    setCarInputValue('')
    setSelectedFuel('')
    setSelectedTransmission('')
    setSelectedPricesValues([0, 1000])
  }

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-filter" className="drawer-overlay"></label>
      <div className="px-9 py-16 w-[407px] bg-base-main ">
        <div className="flex justify-between items-center">
          <h1 className="font-archivo font-semibold text-2xl">Filtro</h1>
          <label htmlFor="my-drawer-filter">
            <X
              size={22}
              weight="bold"
              className="text-base-text-details cursor-pointer"
            />
          </label>
        </div>
        <hr className="h-[1px] bg-base-gray w-full mt-4 mb-8" />
        <div className="flex flex-col gap-8">
          <input
            className="bg-white placeholder:text-base-text-details font-inter
            px-4 py-[22px] border border-base-secondary focus:outline-none focus:ring-2 focus:ring-product-red"
            placeholder="Qual carro você deseja?"
            onChange={({ currentTarget }) =>
              setCarInputValue(currentTarget.value)
            }
            value={carInputValue}
          />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between font-semibold ">
              <span className="font-archivo text-xl text-base-title">
                Preço ao dia
              </span>
              <span className="font-inter text-product-red">
                R$ {selectedPricesValues[0]} - R$ {selectedPricesValues[1]}
              </span>
            </div>
            <SliderComponent
              setSelectedRangeValues={setSelectedPricesValues}
              selectedRangeValues={selectedPricesValues}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-archivo text-xl text-base-title">
              Combustível
            </span>
            <RadioGroup.Root
              value={selectedFuel}
              onValueChange={setSelectedFuel}
              className="w-full bg-white p-1 flex items-center justify-between"
            >
              <RadioGroup.Item
                value="gasoline"
                className="flex flex-col gap-2 items-center text-base-text-details py-2 px-7 data-[state=checked]:text-product-red
                data-[state=checked]:bg-base-main data-[state=checked]:font-medium
                "
              >
                <Drop weight="bold" size={20} />
                <span className="text-sm">Gasolina</span>
              </RadioGroup.Item>
              <RadioGroup.Item
                value="electric"
                className="flex flex-col gap-2  items-center text-base-text-details py-2 px-7 data-[state=checked]:text-product-red
                data-[state=checked]:bg-base-main data-[state=checked]:font-medium
                "
              >
                <Lightning weight="bold" size={20} />
                <span className=" text-sm">Elétrico</span>
              </RadioGroup.Item>
              <RadioGroup.Item
                value="alcohol"
                className="flex flex-col gap-2  items-center text-base-text-details py-2 px-7 data-[state=checked]:text-product-red
                data-[state=checked]:bg-base-main data-[state=checked]:font-medium
                "
              >
                <Leaf weight="bold" size={20} />
                <span className=" text-sm">Álcool</span>
              </RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-archivo text-xl text-base-title">
              Transmissão
            </span>
            <RadioGroup.Root
              value={selectedTransmission}
              onValueChange={setSelectedTransmission}
              className="w-full bg-white p-1 flex items-center justify-between"
            >
              <RadioGroup.Item
                value="automatic"
                className=" flex-grow text-base-text-details py-2 
                data-[state=checked]:bg-base-main data-[state=checked]:text-base-title data-[state=checked]:font-semibold
                "
              >
                <span className="text-sm">Automático</span>
              </RadioGroup.Item>
              <RadioGroup.Item
                value="manual"
                className="flex-grow text-base-text-details py-2  
                data-[state=checked]:bg-base-main data-[state=checked]:text-base-title data-[state=checked]:font-semibold
                "
              >
                <span className=" text-sm">Manual</span>
              </RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-product-red text-white h-16 transition-colors hover:bg-product-red-dark  disabled:opacity-50 disabled:cursor-not-allowed">
              Filtrar Resultados
            </button>
            <button
              onClick={resetStates}
              className='"flex justify-center items-center bg-transparent text-base-title border border-base-gray h-16 transition-colors hover:border-base-title'
            >
              Limpar dados
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

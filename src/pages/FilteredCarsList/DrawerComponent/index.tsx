import { Drop, Leaf, Lightning, X } from '@phosphor-icons/react'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { filterTypes } from '../types'
import { SliderComponent } from './SliderComponent'
import { getCategoriesList } from './query'

type carCategories = {
  id: string
  name: string
}
interface DrawerComponentProps {
  setFilterCars: Dispatch<SetStateAction<filterTypes>>
}

export const DrawerComponent = ({ setFilterCars }: DrawerComponentProps) => {
  const [selectedPricesValues, setSelectedPricesValues] = useState<number[]>([
    0, 5000,
  ])
  const [carCategories, setCarCategories] = useState<carCategories[]>([])
  const [fuelType, setFuelType] = useState('')
  const [transmission, setTransmission] = useState('')
  const createForm = useForm<filterTypes>()
  const { handleSubmit, register, reset } = createForm
  const resetStates = () => {
    const resetValues = {
      name: '',
      category_id: '',
      fuel_type: '',
      transmission: '',
      lower_price: 0,
      highest_price: 5000,
    }
    reset({
      name: '',
      category_id: '',
    })
    setFuelType('')
    setTransmission('')
    setSelectedPricesValues([0, 5000])
    setFilterCars(resetValues)
  }

  const submitFilter = (values: filterTypes) => {
    const { name, category_id } = values
    const [lower_price, highest_price] = selectedPricesValues
    setFilterCars({
      name,
      category_id,
      fuel_type: fuelType,
      transmission,
      lower_price,
      highest_price,
    })
  }

  useEffect(() => {
    getCategoriesList().then(({ categories }) => setCarCategories(categories))
  }, [])

  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-filter" className="drawer-overlay"></label>
      <div className="w-[407px] bg-base-main py-16 mobile:px-11 laptop:px-9 ">
        <div className="flex items-center justify-between">
          <h1 className="font-archivo text-2xl font-semibold">Filtro</h1>
          <label htmlFor="my-drawer-filter">
            <X
              size={22}
              weight="bold"
              className="cursor-pointer text-base-text-details transition-colors hover:text-base-black"
            />
          </label>
        </div>
        <hr className="mt-4 mb-8 h-[1px] w-full bg-base-gray" />
        <form
          onSubmit={handleSubmit(submitFilter)}
          className="flex flex-col gap-8"
        >
          <input
            list="car-suggestions"
            {...register('name')}
            className="border border-base-secondary bg-white
            px-4 py-[22px] font-inter placeholder:text-base-text-details focus:outline-none focus:ring-2 focus:ring-product-red"
            placeholder="Qual carro você deseja?"
          />
          <datalist id="car-suggestions">
            <option value="Lancer EVO X" />
            <option value="Lancer EVO VIII" />
            <option value="Lanceiro Espanhol" />
            <option value="Covette Z06" />
            <option value="Huracan" />
          </datalist>
          <select
            defaultValue={''}
            {...register('category_id')}
            className="h-full rounded-sm border-0 bg-white px-4 py-[22px] text-gray-500 focus:ring-2 focus:ring-inset focus:ring-product-red"
          >
            <option value="">Nenhuma Categoria</option>
            {carCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
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
              onValueChange={setFuelType}
              value={fuelType}
              className="flex w-full items-center justify-between bg-white p-1"
            >
              <RadioGroup.Item
                value="gasoline"
                className="flex flex-col items-center gap-2 py-2 px-7 text-base-text-details data-[state=checked]:bg-base-main
                  data-[state=checked]:font-medium data-[state=checked]:text-product-red
                  "
              >
                <Drop weight="bold" size={20} />
                <span className="text-sm">Gasolina</span>
              </RadioGroup.Item>
              <RadioGroup.Item
                value="eletric"
                className="flex flex-col items-center  gap-2 py-2 px-7 text-base-text-details data-[state=checked]:bg-base-main
                  data-[state=checked]:font-medium data-[state=checked]:text-product-red
                  "
              >
                <Lightning weight="bold" size={20} />
                <span className=" text-sm">Elétrico</span>
              </RadioGroup.Item>
              <RadioGroup.Item
                value="hybrid"
                className="flex flex-col items-center  gap-2 py-2 px-7 text-base-text-details data-[state=checked]:bg-base-main
                  data-[state=checked]:font-medium data-[state=checked]:text-product-red
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
              onValueChange={setTransmission}
              value={transmission}
              className="flex w-full items-center justify-between bg-white p-1"
            >
              <RadioGroup.Item
                value="automatic"
                className=" flex-grow py-2 text-base-text-details 
                data-[state=checked]:bg-base-main data-[state=checked]:font-semibold data-[state=checked]:text-base-title
                "
              >
                <span className="text-sm">Automático</span>
              </RadioGroup.Item>
              <RadioGroup.Item
                value="manual"
                className="flex-grow py-2 text-base-text-details  
                data-[state=checked]:bg-base-main data-[state=checked]:font-semibold data-[state=checked]:text-base-title
                "
              >
                <span className=" text-sm">Manual</span>
              </RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="h-16 bg-product-red text-white transition-colors hover:bg-product-red-dark  disabled:cursor-not-allowed disabled:opacity-50"
            >
              Filtrar Resultados
            </button>
            <button
              onClick={resetStates}
              className='"flex h-16 items-center justify-center border border-base-gray bg-transparent text-base-title transition-colors hover:border-base-title'
            >
              Limpar dados
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

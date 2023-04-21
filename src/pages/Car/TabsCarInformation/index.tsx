import { ArrowRight, CalendarBlank } from '@phosphor-icons/react'
import * as TabRadix from '@radix-ui/react-tabs'
import { SelectedRangeDateType } from '../types'

interface TabsProps {
  selectedData: SelectedRangeDateType
  setOpenModal: (open: boolean) => void
  selectedTab: string
  setSelectedTab: (tabSelected: string) => void
}

export const TabsCarInformation = ({
  selectedData,
  setOpenModal,
  selectedTab,
  setSelectedTab,
}: TabsProps) => {
  const { Root, List, Trigger, Content } = TabRadix
  const { startDate, endDate, quantityOfDays } = selectedData

  const handleChangeSelectedTab = (value: string) => {
    setSelectedTab(value)
  }

  return (
    <Root
      defaultValue={selectedTab}
      onValueChange={handleChangeSelectedTab}
      value={selectedTab}
      className="flex flex-col w-full h-40 my-2"
    >
      <List
        aria-label="Car Information Manager"
        className="flex border-b-2 shrink-0 mb-6"
      >
        <Trigger
          className="bg-white text-base-gray px-5 h-11 flex-grow flex items-center justify-center data-[state=active]:text-base-title data-[state=active]:shadow-tabShadow select-none"
          value="tab1"
        >
          <span className=" font-semibold text-sm font-inter">
            SOBRE O CARRO
          </span>
        </Trigger>
        <Trigger
          className="bg-white text-base-gray px-5 h-11 flex-grow flex items-center justify-center  data-[state=active]:text-base-title data-[state=active]:shadow-tabShadow select-none"
          value="tab2"
          disabled={!startDate}
        >
          <span className=" font-semibold text-sm font-inter">PERÍODO</span>
        </Trigger>
      </List>
      <Content value="tab1" className="text-justify">
        <span className="font-inter text-base-text">
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </span>
      </Content>
      <Content value="tab2">
        <div className="flex flex-col justify-between h-32 gap-3 ">
          <div className="flex w-full h-12 ">
            <div className="flex flex-grow items-center gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-base-text-details font-medium text-xs font-archivo">
                  DE
                </span>
                <span className="text-base-title font-medium text-lg">
                  {startDate}
                </span>
              </div>
              <ArrowRight />
              <div className="flex flex-col gap-1">
                <span className="text-base-text-details font-medium text-xs font-archivo">
                  ATÉ
                </span>
                <span className="text-base-title font-medium text-lg">
                  {endDate}
                </span>
              </div>
            </div>

            <button
              onClick={() => setOpenModal(true)}
              className="w-12 bg-product-red rounded flex justify-center items-center transition-colors hover:bg-product-red-dark"
            >
              <CalendarBlank size={20} weight="bold" className="text-white" />
            </button>
          </div>
          <hr className="h-[1px] bg-base-secondary" />

          <div className="flex-grow flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-base-text-details font-medium text-xs font-archivo">
                TOTAL
              </span>

              <span className="text-base-title font-medium text-lg">
                R$ 120 x {quantityOfDays} diárias
              </span>
            </div>

            <span className="text-product-green text-4xl font-archivo font-medium">
              R$ {120 * (quantityOfDays ?? 0)}
            </span>
          </div>
        </div>
      </Content>
    </Root>
  )
}

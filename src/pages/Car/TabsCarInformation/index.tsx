import { ArrowRight, CalendarBlank } from '@phosphor-icons/react'
import * as TabRadix from '@radix-ui/react-tabs'
import { SelectedRangeDateType } from '../types'

interface TabsProps {
  selectedData: SelectedRangeDateType
  setOpenModal: (open: boolean) => void
  selectedTab: string
  setSelectedTab: (tabSelected: string) => void
  carInformation: {
    description: string
    daily_rate: string
  }
}

export const TabsCarInformation = ({
  selectedData,
  setOpenModal,
  selectedTab,
  setSelectedTab,
  carInformation,
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
      className="my-2 flex h-40 max-w-[400px] flex-col"
    >
      <List
        aria-label="Car Information Manager"
        className="mb-6 flex shrink-0 border-b-2"
      >
        <Trigger
          className="flex h-11 flex-grow select-none items-center justify-center bg-white px-5 text-base-gray data-[state=active]:text-base-title data-[state=active]:shadow-tabShadow"
          value="tab1"
        >
          <span className=" font-inter text-sm font-semibold">
            SOBRE O CARRO
          </span>
        </Trigger>
        <Trigger
          className="flex h-11 flex-grow select-none items-center justify-center bg-white px-5  text-base-gray data-[state=active]:text-base-title data-[state=active]:shadow-tabShadow"
          value="tab2"
          disabled={!startDate}
        >
          <span className=" font-inter text-sm font-semibold">PERÍODO</span>
        </Trigger>
      </List>
      <Content value="tab1" className="text-justify">
        <span className="font-inter text-base-text">
          {carInformation.description}
        </span>
      </Content>
      <Content value="tab2">
        <div className="flex h-32 flex-col justify-between gap-3 ">
          <div className="flex h-12 w-full ">
            <div className="flex flex-grow items-center gap-6">
              <div className="flex flex-col gap-1">
                <span className="font-archivo text-xs font-medium text-base-text-details">
                  DE
                </span>
                <span className="text-lg font-medium text-base-title">
                  {startDate}
                </span>
              </div>
              <ArrowRight />
              <div className="flex flex-col gap-1">
                <span className="font-archivo text-xs font-medium text-base-text-details">
                  ATÉ
                </span>
                <span className="text-lg font-medium text-base-title">
                  {endDate}
                </span>
              </div>
            </div>

            <button
              onClick={() => setOpenModal(true)}
              className="flex w-12 items-center justify-center rounded bg-product-red transition-colors hover:bg-product-red-dark"
            >
              <CalendarBlank size={20} weight="bold" className="text-white" />
            </button>
          </div>
          <hr className="h-[1px] bg-base-secondary" />

          <div className="flex flex-grow items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-archivo text-xs font-medium text-base-text-details">
                TOTAL
              </span>

              <span className="text-lg font-medium text-base-title">
                R$ {carInformation.daily_rate} x {quantityOfDays} diária(s)
              </span>
            </div>

            <span className="font-archivo text-4xl font-medium text-product-green">
              R$ {Number(carInformation.daily_rate) * (quantityOfDays ?? 0)}
            </span>
          </div>
        </div>
      </Content>
    </Root>
  )
}

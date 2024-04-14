import { ArrowRight, CalendarBlank } from '@phosphor-icons/react'
import * as TabRadix from '@radix-ui/react-tabs'
import { SelectedRangeDateType } from '../types'
import { useTranslation } from 'react-i18next'

interface TabsProps {
  selectedData: SelectedRangeDateType
  setOpenModal: (open: boolean) => void
  selectedTab: string
  setSelectedTab: (tabSelected: string) => void
  carInformation: {
    description: string
    dailyRate: string
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
  const { t } = useTranslation()

  return (
    <Root
      defaultValue={selectedTab}
      onValueChange={handleChangeSelectedTab}
      value={selectedTab}
      className="min-h-40 my-2 flex max-w-[400px] flex-col"
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
            {t('pages.listContent.home.car.body.tabComponent.tab1')}
          </span>
        </Trigger>
        <Trigger
          className="flex h-11 flex-grow select-none items-center justify-center bg-white px-5  text-base-gray data-[state=active]:text-base-title data-[state=active]:shadow-tabShadow"
          value="tab2"
          disabled={!startDate}
        >
          <span className=" font-inter text-sm font-semibold">
            {t('pages.listContent.home.car.body.tabComponent.tab2.title')}
          </span>
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
                  {t(
                    'pages.listContent.home.car.body.tabComponent.tab2.calendar.from',
                  )}
                </span>
                <span className="text-lg font-medium text-base-title">
                  {startDate}
                </span>
              </div>
              <ArrowRight />
              <div className="flex flex-col gap-1">
                <span className="font-archivo text-xs font-medium text-base-text-details">
                  {t(
                    'pages.listContent.home.car.body.tabComponent.tab2.calendar.to',
                  )}
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

              <span className="font-medium text-base-title tablet:text-lg">
                R$ {carInformation.dailyRate} x {quantityOfDays}{' '}
                {t(
                  'pages.listContent.home.car.body.tabComponent.tab2.totalRent.dailyRent',
                )}
              </span>
            </div>

            <span className="font-archivo font-medium text-product-green mobile:text-2xl tablet:text-4xl">
              R$ {Number(carInformation.dailyRate) * (quantityOfDays ?? 0)}
            </span>
          </div>
        </div>
      </Content>
    </Root>
  )
}

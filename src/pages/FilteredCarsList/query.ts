import { gql } from '@apollo/client'
// import { researchTeamFallback } from '@app/cms/contentFallback'
import { apolloClient } from '../../services/api'
import { filterTypes } from './types'

const getFilteredCarsQuery = (filters: filterTypes, locale?: string) => {
  const { name, lower_price, highest_price, fuel_type, transmission } = filters
  // trazer o language por parametro
  return gql`
  query Cars {
    cars(
       locales: ${locale}, where: {name_contains: "${name}", dailyRate_gt: ${lower_price}, dailyRate_lt: ${highest_price}, transmission_contains: "${transmission}", fuelType_contains: "${fuel_type}"}
    first: 50
    ) {
      available
      brand
      dailyRate
      description
      fuelType
      id
      name
      transmission
      carImages {
        name
        url
      }
    }
  }
`
}

export const getFilteredCars = async (
  filters: filterTypes,
  locale?: string,
) => {
  return (
    await apolloClient.query({ query: getFilteredCarsQuery(filters, locale) })
  ).data
}

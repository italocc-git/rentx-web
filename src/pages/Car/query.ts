import { gql } from '@apollo/client'
// import { researchTeamFallback } from '@app/cms/contentFallback'
import { apolloClient } from '../../services/api'

const getCarByID = (carID: string, locale: string) => {
  return gql`
  query Cars {
    car(locales: ${locale}, where: { id: "${carID}" }) {
      available
      description
      brand
      dailyRate
      fuelType
      id
      name
      transmission
      carImages {
        name
        url
        id
      }
      carSpecifications {
        id
        name
        iconName
        description
      }
    }
  }
`
}

export const getCar = async (id: string, locale: string) => {
  return (
    await apolloClient.query({
      query: getCarByID(id, locale),
      fetchPolicy: 'no-cache',
    })
  ).data
}

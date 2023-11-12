import { gql } from '@apollo/client'
// import { researchTeamFallback } from '@app/cms/contentFallback'
import { apolloClient } from '../../services/api'

const GET_CARS_LIST = gql`
  query Cars {
    cars {
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

export const getCarsList = async () => {
  return await apolloClient.query({ query: GET_CARS_LIST })
}

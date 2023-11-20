import { gql } from '@apollo/client'
// import { researchTeamFallback } from '@app/cms/contentFallback'
import { apolloClient } from '../../../services/api'

const GET_CATEGORIES_LIST = gql`
  query MyCategoriesQuery {
    categories {
      id
      name
    }
  }
`

export const getCategoriesList = async () => {
  return (await apolloClient.query({ query: GET_CATEGORIES_LIST })).data
}

import { gql } from 'apollo-boost'

export default gql`
  {
    user {
      id
      userName
      fullName
      posts {
        id
        imageUrl
        location
      }
    }
  }
`
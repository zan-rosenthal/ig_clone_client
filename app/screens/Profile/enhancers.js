import { compose } from 'ramda'
import { withProps, withHandlers } from 'recompose'
import { fetchUser } from 'db'
import withApolloClient from 'hoc/withApolloClient'
import withLoading from 'hoc/withLoading'
import { graphql } from 'react-apollo'
import query from './query'

export default compose(
  withApolloClient,
  graphql(
    query
  ),
  // withProps(({ navigation: { getParam }}) => ({ 
  //   user: fetchUser(
  //     getParam('userId', 1)
  //   )
  // })),
  withLoading,
  withProps(({ data }) => {
    console.log(data)
    if(data.user){
      return { user: data.user }
    }

    return { user: {} }
  }),
  withHandlers({
    handleNavigateToImageDetail: ({
       navigation: { navigate }, user
    }) => (image) => navigate('ImageDetail', { image, user })
  })
)
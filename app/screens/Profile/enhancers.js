import { applySpec, compose, pathOr} from 'ramda'
import { withProps, withHandlers } from 'recompose'
import withApolloClient from 'hoc/withApolloClient'
import withLoading from 'hoc/withLoading'
import { graphql } from 'react-apollo'
import query from './query'

const userSpec = applySpec({

})

export default compose(
  withApolloClient,
  graphql(
    query
  ),
  withLoading,
  withProps(
    applySpec({
      user: pathOr({}, ['data', 'user']),
      posts: pathOr([], ['data', 'user', 'posts'] )
    })
  ),
  withHandlers({
    handleNavigateToImageDetail: ({
       navigation: { navigate }, user
    }) => (image) => navigate('ImageDetail', { image, user })
  })
)
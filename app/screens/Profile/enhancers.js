import { compose } from 'ramda'
import { withProps, withHandlers } from 'recompose'
import { fetchUser } from 'db'

export default compose(
  withProps(({ navigation: { getParam }}) => ({ 
    user: fetchUser(
      getParam('userId', 1)
    )
  })),
  withHandlers({
    handleNavigateToImageDetail: ({
       navigation: { navigate }
    }) => (image) => navigate('ImageDetail', { image })
  })
)
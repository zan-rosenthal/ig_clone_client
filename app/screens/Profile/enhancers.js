import { compose } from 'ramda'
import { withProps } from 'recompose'
import { fetchUser } from 'db'

export default compose(
  withProps(({ navigation: { getParam }}) => ({ 
    user: fetchUser(
      getParam('userId', 1)
    )
  }))
)
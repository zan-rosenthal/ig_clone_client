import { compose } from 'ramda'
import { withProps } from 'recompose'

export default compose(
  withProps(({ navigation: { getParam } }) => ({
    user: getParam('user', {}),
    image: getParam('image', {})
  }))
)